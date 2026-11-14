---
name: create-agent
description: >
  新規サブエージェント定義（.claude/agents/ 配下）を scaffold。カテゴリ選定・model/tools 最小権限・dotclaude-via-temp 経由の配置・frontmatter 検証までを自動化。
  「Agent 作って」「サブエージェント追加」「create-agent」で使用。スキル追加は create-skill、既存スキル改訂は update-skill、CLAUDE.md 反映は update-docs。
model: sonnet
user-invocable: true
argument-hint: "<category>/<agent-name> (例: create-agent quality/lint-runner)"
---

# create-agent

新規サブエージェント定義を `.claude/agents/<category>/<name>.md` として scaffold し、品質チェックまで自動化する。

本スキルは `.claude/skills/` の実ディレクトリに置くリポジトリ管理スキルで、下流へは配布しない。

## 使い方

```
/create-agent quality/lint-runner     # カテゴリ指定で作成
/create-agent research/doc-fetcher    # research カテゴリに追加
/create-agent author/template-writer  # author カテゴリに追加
/create-agent                         # 引数省略時はインタラクティブに確認
```

雛形は本スキル同梱の `sample/agent.sample.md` を参照する。

## 対象外: specialists/

`.claude/agents/specialists/` は対象外とする。この領域は downstream リポジトリで `init-claude-specialist` が導入済みスペシャリスト skill から生成するものであり、本リポジトリでは手書きしない。`specialists/` を指定された場合は作成せず、この旨をユーザーへ伝える。

スペシャリスト用 agent の雛形を変えたい場合は、`skills/init-claude-specialist/sample/specialist-agent-template.md` を `update-skill` で改訂する。雛形を変更しても、生成済みの agent は自動では更新されない。downstream で `npx skills add Fandhe-AI/agent-specialist-skills` を再導入し、`init-claude-specialist` を再実行する必要がある。

## カテゴリと model 選定

正典は `.claude/rules/agent-authoring.md` の「model 選定基準」「tools 最小権限」「カテゴリ配置」。食い違いがあれば同ファイルに合わせる。

| カテゴリ | パス | 役割 | 推奨 model |
|---------|------|------|-----------|
| research/ | `.claude/agents/research/` | 調査・情報収集 | `sonnet` |
| author/ | `.claude/agents/author/` | 作成・編集 | `sonnet`（一覧更新など機械的なものは `haiku`） |
| quality/ | `.claude/agents/quality/` | レビュー・lint・検証 | `sonnet`（推論・レビュー）/ `haiku`（機械的 lint のみ） |

| ユースケース | model |
|-----------|-------|
| 機械的・集計・lint・frontmatter 検証 | `haiku` |
| 読解・生成・レビュー・調査 | `sonnet` |
| 複雑な設計判断・アーキテクチャ | `opus` |

### tools 最小権限

| カテゴリ | 許可ツール |
|---------|-----------|
| 読み取り専用（research/・quality/） | `Read`・`Glob`・`Grep` |
| 作成・編集（author/） | 上記 + `Edit`・`Write`・`Bash` |

読み取り専用 Agent に `Edit`・`Write` は含めない。`Bash` は `agent-authoring.md`「例外: Bash を許可する読み取り専用 Agent」（機械的検証 Agent・CLI 失敗調査 Agent）の条件を満たす場合のみ許可し、本文に用途（診断目的限定・破壊的操作禁止）を明記する。`WebFetch` / `WebSearch` は同「WebFetch / WebSearch を許可する読み取り専用 Agent」に従い、research/ で許可ドメイン一覧を本文に明示する場合のみ許可する。例外の詳細・許可ドメインは正典を参照し、ここでは複製しない。

## フロー

### Step 1: カテゴリと責務を確認する

引数から `<category>/<agent-name>` を解析する。

- カテゴリは `research`・`author`・`quality` の完全一致のみ受け付ける（前後の `/`・大文字・別名は不可）
- `specialists/` は「対象外: specialists/」に従い拒否する。それ以外のカテゴリは、ユーザーに確認して 3 つから選ばせる
- `<agent-name>` は正規表現 `^[a-z][a-z0-9-]+$`（frontmatter-linter の kebab-case 定義と同一）で検証する。`/`・`..`・空白・空文字を含む名前は拒否してユーザーへ問い返す（名前は `mv` 先のパスに使われるため、パストラバーサルとコマンドインジェクションを防ぐ。`.claude/rules/security.md` A03）
- 検証を通った名前について、既存 Agent と重複しないことを `ls .claude/agents/*/"<agent-name>.md"` で確認する（ヒットすれば重複。該当なしで `ls` が非 0 終了すれば重複なし）
- Agent の責務（担当スコープ、委譲される場面、隣接 Agent との境界）をユーザーに確認する

### Step 2: agent-author に委譲してファイルを作成する

`agent-author`（subagent_type: agent-author）に委譲する。`.claude/rules/dotclaude-via-temp.md` に従い、agent-author は `_/dotclaude/agents/<category>/<name>.md` に作成して報告する。`mv` による最終配置は agent-author では行わず、Step 3 で main（本スキル）が行う（`.claude/agents/` への直接書き込みは行わない）。

委譲プロンプトには、Step 1 で検証済みのカテゴリと名前だけを渡す。未検証の入力をそのまま渡さない。

委譲プロンプト例:

```
subagent_type: agent-author
prompt: |
  目的: <category>/<agent-name> のサブエージェント定義を作成する
  入力:
    - Agent 名: <agent-name>
    - カテゴリ: <category>（research / author / quality）
    - 役割・責務: <ユーザーから受け取った内容>
    - 雛形: .claude/skills/create-agent/sample/agent.sample.md
    - 既存 Agent の参考: .claude/agents/ 配下の同カテゴリのファイル
  出力先: /<リポジトリの絶対パス>/_/dotclaude/agents/<category>/<agent-name>.md
    （一時パスに作成して報告する。mv による .claude/agents/ への配置は行わない。呼び出し元が行う）
  観点: tools 最小権限、委譲場面を具体化した description
  適用ルール:
    - .claude/rules/agent-authoring.md
    - .claude/rules/dotclaude-via-temp.md
    - .claude/rules/description-style.md
    - .claude/rules/japanese-style.md
  必須項目:
    - frontmatter: name（kebab-case）, description, model, tools
    - 本文: 役割 → 対象スコープ → 遵守する規約 → 手順 / 観点 → 完了条件 → 報告フォーマット
    - mv と後片付けは行わない（作成したファイルを _/dotclaude に残したまま、パスを報告する）
```

### Step 3: 最終配置する（main が実施）

agent-author の報告で、`_/dotclaude/agents/<category>/<agent-name>.md` が作成されたことを確認してから、main が配置する。`<category>` と `<agent-name>` は Step 1 で検証済みの値のみ使い、パスは `"…"` でクォートする。

```bash
# 配置先が既に存在する場合は上書きせず中止する
[ ! -e ".claude/agents/<category>/<agent-name>.md" ] || { echo "中止: 配置先が既に存在する"; exit 1; }
mkdir -p ".claude/agents/<category>"
mv "_/dotclaude/agents/<category>/<agent-name>.md" ".claude/agents/<category>/<agent-name>.md"
# 自分が作った空ディレクトリのみ削除する（rm -rf は使わない。空でなければ rmdir は失敗し、残る）
rmdir "_/dotclaude/agents/<category>" "_/dotclaude/agents" "_/dotclaude" "_" 2>/dev/null
```

以降の Step は配置後のパス `.claude/agents/<category>/<agent-name>.md` を対象にする。

### Step 4: model と tools を確認する

配置後のファイルを読み、以下を確認する。

- `model` がカテゴリ・用途に合っているか
- `tools` が最小権限を守っているか。research/・quality/ に `Edit`・`Write` が無いこと
- `Bash`・`WebFetch`・`WebSearch` を含む場合は例外条件を満たし、本文に用途が明記されているか

tools の過剰が疑わしい場合は `security-auditor`（読み取り専用）に権限レビューを委譲する。

### Step 5: frontmatter-linter で検証する

`frontmatter-linter`（subagent_type: frontmatter-linter）は機械的検証のみを担う。以下の項目だけを渡す。

- `name` が kebab-case でファイル名と一致するか
- `model` が `haiku` / `sonnet` / `opus` のいずれかか
- `tools` が YAML リスト形式（`- Read` の複数行。`.claude/rules/agent-authoring.md` の frontmatter 例どおり）で記述されているか
- YAML として妥当か。`#` を含む値がクォートされているか
- `.claude/agents/<category>/` に正しく配置されているか

判断系の観点は linter に渡さず、main が目視で確認する。

- `description` が委譲される場面を具体的に説明しているか
- `tools` が最小権限を超えていないか（Step 4 と同じ。疑わしければ `security-auditor`）

問題があれば `agent-author` に差し戻して修正させ、再検証する。同一指摘が 3 回解消しない場合は修正を続けず、試行内容と行き詰まりの理由をユーザーに報告して判断を仰ぐ（`.claude/rules/debugging.md`）。

### Step 6: CLAUDE.md 更新を案内する

```
.claude/agents/<category>/<agent-name>.md を作成した。

  name: <agent-name>
  model: <model>
  tools: [<tool-list>]

CLAUDE.md の Sub-agents 表・構造ツリーを更新するには update-docs を実行する。
呼び出しは subagent_type: <agent-name> で行う。
```

## 検証

`.claude/rules/verification.md` に従い、証拠を示して完了を宣言する。

1. `ls ".claude/agents/<category>/<agent-name>.md"` で配置を確認する
2. frontmatter の `name:` が `<agent-name>` と一致することを確認する
3. `tools` がカテゴリの最小権限ポリシーに沿うことを確認する
4. `ls "_/dotclaude/agents/<category>/<agent-name>.md"` が失敗する（一時パスに作業ファイルが残っていない）ことを確認する。Step 3 の `mv` 後に配置先が存在し、一時パスに無いことが両方成立して初めて配置完了とする
5. frontmatter-linter 等の結果は、指摘が無い旨（FAIL 0 件）を示す本文を引用して確認する。「問題なさそう」といった要約や推測で完了としない

## 注意事項

- **dotclaude-via-temp 必須**: 作成は `_/dotclaude/agents/` 経由で行う。最終配置の `mv` は本スキル（main）が Step 3 で行う。agent-author は `mv` しない
- **本スキル自身の編集**: `.claude/skills/create-agent/` を編集する場合も dotclaude-via-temp に従い、`_/dotclaude/skills/create-agent/` で作業してファイル単位で `mv` する。ディレクトリ単位で `mv` すると既存ディレクトリ内に入れ子になる
- **`rm -rf _/dotclaude` は禁止**: 並行作業との共有ディレクトリのため、自分のファイルのみ削除し、空ディレクトリのみ `rmdir` する
- **name の解決**: `subagent_type:` は frontmatter の `name:` で解決される。カテゴリを移動しても呼び出しコードの変更は不要
- **秘密情報**: Agent 本文に API キー・トークンを書かない（`.claude/rules/security.md`）
- **update-docs の実行**: Agent 追加後は update-docs で CLAUDE.md を最新化する

## 関連

**Agents**: agent-author, frontmatter-linter, security-auditor

**Rules**: agent-authoring, dotclaude-via-temp, description-style, japanese-style, verification, security, debugging

**Skills**: create-skill, update-skill, update-docs, init-claude-specialist

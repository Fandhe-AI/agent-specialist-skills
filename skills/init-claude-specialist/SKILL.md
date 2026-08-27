---
name: init-claude-specialist
description: >
  スペシャリスト skill（ゲームプロデューサー等の専門家ペルソナ）を 1 agent 1 skill 原則で
  sub-agent 化する初期セットアップ。「スペシャリスト セットアップして」「専門家エージェント整備して」
  「init-claude-specialist」「スペシャリスト agent 生やして」で使用。導入済み specialist skill を
  検出し `.claude/agents/specialists/<name>.md` を生成、委譲 rule と CLAUDE.md も同期する。
  新規スペシャリスト skill の著作は specialist-authoring.md を参照。
model: sonnet
user-invocable: true
argument-hint: "<対象リポジトリのパス（省略時はカレントディレクトリ）>"
---

# init-claude-specialist

対象リポジトリに導入済みのスペシャリスト skill（`specialist: true` を frontmatter に持つ
skill）を検出し、**1 agent 1 skill** 原則で専用 sub-agent を `.claude/agents/specialists/` に
生成する。ユーザーが専門領域の相談をしたとき、main が直接答えず該当 sub-agent を起動して
回答させることで main のトークン消費を抑える。

## 使い方

```
init-claude-specialist [対象リポジトリのパス]
```

パスを省略した場合はカレントディレクトリを対象とする。

## 前提条件

- 対象リポジトリで `git` が初期化済みであること
- スペシャリスト skill が `npx skills add Fandhe-AI/agent-specialist-skills` 等で
  `.claude/skills/` または `.agents/skills/` へ 1 件以上導入済みであること
  （0 件の場合は Step 2 で「導入済みスペシャリスト skill が無い」と報告して終了する）

## フロー

### Step 1: 前提確認

対象リポジトリのルートで実行する。`.claude/` の有無を確認し、無ければ最低限のディレクトリを
作成する。

```bash
cd <target-repo>
ls -d .claude 2>/dev/null || mkdir -p .claude/agents .claude/rules
mkdir -p .claude/agents/specialists
```

対象リポが `dotclaude-via-temp`（`.claude/` 配下を `_/dotclaude/` 経由で編集する）を採用している
場合は、Step 3・Step 4 の生成物をすべて `_/dotclaude/` 配下に作成してから `mv` で配置する
（「注意事項」節参照）。

### Step 2: 導入済みスペシャリスト skill の検出

`.claude/skills/` と `.agents/skills/` を走査し、`SKILL.md` の frontmatter に
`specialist: true` を持つスキルを列挙する。このリポ（`Fandhe-AI/agent-specialist-skills`）発の
スペシャリスト skill は全て `specialist: true` を宣言する規約であるため、この 1 キーで
判別できる。

```bash
for dir in .claude/skills .agents/skills; do
  [ -d "${dir}" ] || continue
  for skill_md in "${dir}"/*/SKILL.md; do
    [ -f "${skill_md}" ] || continue
    if awk 'NR==1{next} /^---[[:space:]]*$/{exit} /^specialist:[[:space:]]*true[[:space:]]*$/{found=1} END{exit !found}' "${skill_md}"; then
      echo "${skill_md}"
    fi
  done
done | sort -u
```

検出結果が 0 件の場合は「導入済みスペシャリスト skill が無い。`npx skills add
Fandhe-AI/agent-specialist-skills` でスペシャリスト skill を導入してから再実行する」と報告して
終了する。

### Step 3: 1 agent 1 skill の sub-agent 生成

検出した各スキル `<name>` について `.claude/agents/specialists/<name>.md` を生成する。
テンプレートは `sample/specialist-agent-template.md` を使う。

frontmatter の決定方法:

| フィールド | 値 |
|-----------|-----|
| `name` | `<name>`（スキルディレクトリ名と一致） |
| `description` | skill の `description` をベースに「〜について相談したい・質問したい時に起動」を明記 |
| `model` | skill frontmatter の `specialist-model` があればその値、無ければ既定 `sonnet` |
| `effort` | skill frontmatter の `specialist-effort` があればその値、無ければ既定 `low` |
| `tools` | `Read, Glob, Grep, WebFetch, WebSearch`（読み取り専用。相談用途のため編集ツールは付与しない） |

model/effort の既定値は**トークン消費抑制**を優先して低めに倒す。機械的・定型知識の Q&A が
中心のスペシャリスト skill は `specialist-model: haiku` を宣言してよい。経営・戦略判断が本質の
スペシャリスト skill のみ `specialist-model: opus` や `specialist-effort: medium`
以上を宣言する（判断基準の詳細は `.claude/rules/specialist-authoring.md`）。

本文には「起動されたらまず Skill ツールで `<name>` skill を読み込み、そのペルソナ・知識体系に
従って回答する。回答は日本語・常体。skill に無い事実は推測と明示する」という骨子を記載する。

#### 例外: 複数 skill を束ねる 1 agent

基本は 1 agent 1 skill だが、次の**両方**を満たす場合に限り、密接に関連する複数 skill を
1 agent にまとめてよい。

- 同一ドメインのスペシャリスト skill 同士である（例: `game-producer` と
  `game-monetization-analyst` はいずれもゲーム事業領域）
- ユーザーの相談が実務上ほぼ常に両方の知識を横断する（片方だけで完結する相談が稀）

この例外を適用する場合は、生成後に agent frontmatter・本文を**手動編集**し、本文に束ねる全
skill の読み込み手順を列挙する。自動生成では 1 agent 1 skill を崩さない（判断が要る例外は
自動化しない）。

### Step 4: 委譲 rule の生成

`sample/specialist-delegation-template.md` を対象リポの `.claude/rules/specialist-delegation.md`
に配置する。テンプレートのプレースホルダ表に、Step 3 で生成した agent 一覧
（subagent_type / 対応 skill / 相談領域）を埋め込む。

内容の骨子: 「ユーザーがスペシャリストの専門領域に該当する質問・相談をしたら、main が直接
回答せず該当 sub-agent（`subagent_type: <name>`）を起動して回答させる。独立した複数領域の
質問は同一メッセージ内で並列起動。main は回答の統合・報告のみ行う」。

### Step 5: CLAUDE.md への反映

対象リポの `CLAUDE.md` に「Specialist Agents」節を追記または更新する。既存の節がある場合は
表の中身のみ差し替える（節の位置・見出しレベルは変更しない）。

```markdown
## Specialist Agents

| subagent_type | model | effort | 対応 skill | 相談領域 |
|---------------|-------|--------|-----------|---------|
| <name>        | <model> | <effort> | <name>  | <一言説明> |
```

### Step 6: 検証

生成した agent ファイルの frontmatter を目視確認し、件数を報告する。

```bash
ls -la .claude/agents/specialists/
find .claude/agents/specialists -name '*.md' | wc -l
```

既存の agent ファイルを再生成で上書きする場合は、上書き前に `diff` で差分を提示し、
手動カスタマイズ済み（Step 3 の例外適用等）と判断される場合はユーザーに確認してから進める。

```bash
diff -u .claude/agents/specialists/<name>.md <生成予定の新内容> || true
```

## 検証

`.claude/rules/verification.md` の5段階ゲートに従い、以下で完了を確認する。

```bash
# Step 2 で検出したスキル件数と Step 3 で生成した agent 件数が一致すること
# （例外で複数 skill を 1 agent に束ねた場合は agent 件数 < skill 件数になり得るため、
#  不一致が出た場合はその理由が Step 3 の例外適用によるものか確認する）
find .claude/agents/specialists -name '*.md' | wc -l

# 生成した各 agent の frontmatter に name / description / model / effort / tools が揃っていること
for f in .claude/agents/specialists/*.md; do
  echo "== ${f} =="
  awk 'NR==1{next} /^---[[:space:]]*$/{exit} {print}' "${f}"
done

# CLAUDE.md に Specialist Agents 節が存在すること
grep -n '^## Specialist Agents$' CLAUDE.md; echo "exit=$?"
```

## 注意事項

- 対象リポが `dotclaude-via-temp` ルールを採用している場合、`.claude/agents/specialists/`・
  `.claude/rules/specialist-delegation.md` の作成・編集は直接書き込まず `_/dotclaude/` 経由で
  行い、完了後に `mv` で最終配置する（`rm -rf _/dotclaude` は禁止。空になった場合のみ
  `rmdir` で削除する）
- 再実行は冪等に保つ: 既存 agent は対応 skill の `description`/`specialist-model`/
  `specialist-effort` が更新されていれば再生成する。手動カスタマイズ済み（例外束ね等）と
  判断される agent は上書き前に必ずユーザーへ確認する
- 生成した agent には編集系ツール（`Edit`・`Write`・`Bash`）を付与しない。相談用途であり
  副作用のある操作を行わせないため
- スペシャリスト skill 自体の新規作成は `specialist-skill-example.md`（見本）と
  `.claude/rules/specialist-authoring.md`（著作規約）を参照する。本スキルは既存スキルの
  agent 化のみを担う
- CLAUDE.md の他セクション（Overview・Repository Structure 等）は本スキルの対象外。
  それらの更新は `update-docs` を参照

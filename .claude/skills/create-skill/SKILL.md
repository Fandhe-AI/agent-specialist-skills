---
name: create-skill
description: >
  新規スキルを skills/<name>/SKILL.md として scaffold。スペシャリスト skill（既定）とセットアップ等の手順型 skill に対応。
  「スペシャリスト skill 作って」「専門家スキル追加」「新しいスキルを追加」「スキル作って」「create-skill」で使用。
  重複確認・SKILL.md 作成・symlink・品質チェック・update-docs 案内まで一貫して自動化。
  Agent 追加は create-agent、既存スキル改訂は update-skill、一覧更新は update-docs を参照。
model: sonnet
user-invocable: true
argument-hint: "<skill-name> [specialist|procedure] (例: create-skill game-producer specialist)"
---

# create-skill

新規スキルを `skills/<name>/SKILL.md` として scaffold し、symlink と品質チェックまで自動化する。

**本スキルは `.claude/skills/` の実ディレクトリに置くリポジトリ管理スキルで、下流へは配布しない。** 配布対象は `skills/` 配下のスキルのみである。

## 使い方

```
/create-skill game-producer specialist   # スペシャリスト skill を新規作成
/create-skill setup-foo procedure        # 手順型 skill を新規作成
/create-skill                            # 引数省略時はスキル名・種別をヒアリング
```

| 引数 | 必須 | 説明 |
| --- | --- | --- |
| `skill-name` | 任意 | 作成するスキル名（kebab-case）。省略時は Step 1 でヒアリングする |
| 種別 | 任意 | `specialist`（既定）または `procedure`。省略時は Step 1 で確認する |

作成対象は 2 種類ある。

| 種別 | 内容 | 適用規約 | 雛形 |
| --- | --- | --- | --- |
| スペシャリスト skill（既定） | 専門家ペルソナ + 専門知の相談用スキル。`specialist: true` 必須 | `.claude/rules/specialist-authoring.md` | `skills/init-claude-specialist/sample/specialist-skill-example.md`（複製せず参照する） |
| 手順型 skill | セットアップ等の手順実行型（`init-claude-specialist` のような非スペシャリスト） | `.claude/rules/skill-authoring.md` | 本スキル同梱の `sample/SKILL.sample.md` |

main（このスキル自身）は計画・ヒアリング・委譲・統合・報告に徹し、SKILL.md の執筆やレビューは専門 Agent に委譲する（`.claude/rules/delegation.md`・`.claude/rules/delegation-impl.md` 準拠）。

## フロー

### Step 1: 種別とスキル名を決める

引数から種別・スキル名を決める。省略されている場合はユーザーに確認する。種別の既定はスペシャリスト skill。スキル名は kebab-case とし、ディレクトリ名と frontmatter の `name` を一致させる。

- `skill-name` は `^[a-z][a-z0-9-]+$`（frontmatter-linter の kebab-case 定義と同一。英小文字始まり・2 文字以上）に一致するものだけ受け付ける。`/`・`..`・空白等を含む値は、パス解決やシェル展開に使う前に拒否して問い返す（`.claude/rules/security.md` A03）
- 種別が手順型の場合は、続行前にユーザーへ確認する。`.claude/rules/specialist-authoring.md` は「このリポジトリが配布するスキルは全てスペシャリスト skill」としており、手順型を `skills/` に置くと配布対象になる。「配布対象の例外（先例は `init-claude-specialist` のみ）になるが良いか」を確認し、了承が得られない場合はスペシャリスト skill への変更か作成中止を提案する

### Step 2: 要件をヒアリングする

**スペシャリスト skill の場合**、以下をユーザーに確認する（不明な項目は推測で埋めず質問する）。

| 項目 | 内容 |
| --- | --- |
| ペルソナ | 専門家としての肩書き・経歴・視点・語り口 |
| 相談領域 | 対応する相談テーマ（箇条書きで具体的に） |
| 想定する相談例 | ユーザーが実際に言いそうな相談文を 3 件程度（description の発火語に反映する） |
| 参照フレームワーク・知識体系 | 拠り所とするモデル・理論・業界慣行 |
| `specialist-model` / `specialist-effort` | トークン消費抑制を優先して選定（下表） |

| 相談内容の性質 | specialist-model | specialist-effort |
| --- | --- | --- |
| 定型知識の Q&A が中心 | `haiku` | `low` |
| 一般的な専門相談（既定） | `sonnet`（省略可） | `low`（省略可） |
| 経営・戦略判断が本質 | `sonnet` または `opus` | `medium` 以上 |

上表は `.claude/rules/specialist-authoring.md` の複製である。正典は同ファイルで、食い違う場合は同ファイルに従う。

`opus` や `medium` 以上は複雑な判断支援が本質の skill に限定する（詳細は `.claude/rules/specialist-authoring.md`）。

**手順型 skill の場合**、スキルの目的・引数・実行手順の概要・使用ツール・model（`.claude/rules/skill-authoring.md` の選定基準）を確認する。

### Step 3: 既存スキルとの重複確認（skill-explorer に委譲）

`.claude/skills/` は vendored スキル（`.agents/skills/` からの symlink）と名前空間を共有するため、`skills/` だけでなく `.agents/skills/` と `.claude/skills/` の名前とも衝突しないことを確認する。

```
subagent_type: skill-explorer
prompt: |
  目的: 作成予定のスキル名が既存スキルと衝突しないか確認する
  入力:
    - 作成予定のスキル名: <skill-name>
    - 検索対象: skills/ 配下、.agents/skills/ 配下（vendored スキル）、.claude/skills/ 配下（実ディレクトリと symlink）
  観点:
    1. 上記 3 箇所のいずれかに同名のディレクトリ・symlink が存在するか
    2. 類似名（kebab-case 変形・別表記）が存在するか
    3. 既存スキルで同等の機能が提供されていないか
  適用ルール: .claude/rules/delegation.md
  出力: 重複なし / 重複あり（ファイルパスと既存スキルの概要）
```

結果を次の 2 種類に分けて扱う。

- **同名衝突**（`skills/`・`.agents/skills/`・`.claude/skills/` のいずれかに同名のディレクトリ・symlink がある）: 同じ名前での新規作成は許さない。ユーザーに通知し、(a) 別名を決めて Step 1 の名前検証と本 Step の重複確認をやり直す、(b) 既存スキルの改訂（update-skill）へ移行する、のいずれかを選ばせる。いずれも選ばれない場合は作成を中止する
- **類似のみ**（類似名・機能の類似はあるが同名ではない）: ユーザーに通知し、確認が取れた場合のみ続行する

### Step 4: SKILL.md の作成（skill-author に委譲）

```
subagent_type: skill-author
prompt: |
  目的: <skill-name> の SKILL.md を新規作成する（種別: <specialist|procedure>）
  入力:
    - スキル名: <skill-name>
    - Step 2 のヒアリング結果（ペルソナ・相談領域・相談例・知識体系・model/effort 等）
    - 雛形（スペシャリスト）: skills/init-claude-specialist/sample/specialist-skill-example.md
    - 雛形（手順型）: .claude/skills/create-skill/sample/SKILL.sample.md
    - 既存スキルの参考例: skills/init-claude-specialist/SKILL.md
  出力先: skills/<skill-name>/SKILL.md（絶対パスで指定する）
  適用ルール:
    - .claude/rules/skill-authoring.md（frontmatter・model 選定・セキュリティ self-check）
    - .claude/rules/specialist-authoring.md（スペシャリストの場合のみ）
    - .claude/rules/description-style.md（発火トリガー語・YAML 落とし穴）
    - .claude/rules/japanese-style.md
  必須項目（スペシャリスト）:
    - frontmatter: name, description, user-invocable: true, specialist: true、必要に応じ specialist-model / specialist-effort
    - 本文: ペルソナ → 専門領域 → 回答スタイル → 参照フレームワーク・知識体系 → 注意事項
    - 注意事項に誠実性の原則 3 項目（specialist-authoring.md「誠実性の原則（必須）」の表現に揃える）
      - skill の知識体系に無い事実を述べる場合は推測であることを明示する
      - 個別の非公開データ・契約条件に基づく断定はできない旨
      - 数値基準・業界動向は時点情報であり鵜呑みにしないよう促す旨
    - description にペルソナ名・肩書き・相談表現・skill 名を含める
  必須項目（手順型）:
    - frontmatter: name, description, model, user-invocable。`specialist` キーは書かない（手順型が持つと downstream の init-claude-specialist が sub-agent を誤生成する）
    - 本文: 使い方 → フロー（Step N）→ 検証 → 注意事項
  共通:
    - description に # を含む場合はクォートで囲む
    - 同梱スクリプトを置く場合はディレクトリ名を scripts/（複数形）とする
```

### Step 5: symlink を作成する

skill-author の完了後、シンボリックリンクを作成して確認する。

```bash
# 既存のディレクトリ・symlink（壊れた symlink を含む）があれば中止する。存在するまま ln -s すると内側へリンクが作られる
if [ -e ".claude/skills/<skill-name>" ] || [ -L ".claude/skills/<skill-name>" ]; then echo "中止: .claude/skills/<skill-name> が既に存在する"; exit 1; fi
ln -s "../../skills/<skill-name>" ".claude/skills/<skill-name>"
ls -la ".claude/skills/<skill-name>"
```

### Step 6: 品質チェック（skill-reviewer と frontmatter-linter に並列委譲）

独立したタスクのため、同一メッセージ内で 2 Agent を並列起動する。

```
subagent_type: skill-reviewer
prompt: |
  目的: 新規作成した SKILL.md の品質をレビューする
  入力: skills/<skill-name>/SKILL.md
  観点:
    - skill-authoring.md への準拠（frontmatter・本文構成）
    - セキュリティ self-check（秘密情報のハードコード・フック回避コマンドの不在）
    - トリガー語・argument-hint の適切さ
    - 同梱スクリプトのディレクトリ名が scripts/（複数形）か
    - （スペシャリストの場合）specialist-authoring.md への準拠: specialist: true、本文構成、誠実性の原則 3 項目、specialist-model/effort の妥当性
      - 汎用規約で誤判定しないこと: `model` は不要、`## 検証` は省略可、本文は ペルソナ → 専門領域 → 回答スタイル → 参照フレームワーク・知識体系 → 注意事項 の 5 節構成
    - （手順型の場合）`specialist` キーが無いこと、skill-authoring.md の本文構成（`## 検証` を含む）に従うこと
  適用ルール: .claude/rules/skill-authoring.md, .claude/rules/specialist-authoring.md, .claude/rules/security.md
```

```
subagent_type: frontmatter-linter
prompt: |
  目的: 新規作成した SKILL.md の frontmatter・symlink を機械検証する
  入力:
    - 対象ファイル: skills/<skill-name>/SKILL.md
    - symlink: .claude/skills/<skill-name>
  観点:
    - name がディレクトリ名と一致しているか
    - 手順型: model が存在し haiku / sonnet / opus のいずれかか
    - スペシャリスト: model は不要。specialist-model（haiku / sonnet / opus）・specialist-effort（.claude/rules/specialist-authoring.md に記載の値）があればその値が有効か
    - スペシャリストの場合 specialist: true が存在するか
    - 手順型の場合 specialist キーが存在しないこと
    - description 内の # がクォートで囲まれているか
    - symlink のリンク先が ../../skills/<skill-name> か
  適用ルール: .claude/rules/skill-authoring.md, .claude/rules/specialist-authoring.md
```

問題があれば skill-author に差し戻して修正させ、再度チェックする。同一指摘が 3 回解消しない場合は修正を続けず、試行内容と行き詰まりの理由をユーザーに報告して判断を仰ぐ（`.claude/rules/debugging.md`）。

### Step 7: 完了を案内する

以下をユーザーに案内する。

```
skills/<skill-name>/SKILL.md を作成した。
.claude/skills/<skill-name> -> ../../skills/<skill-name> の symlink を作成した。

次のアクション:
1. /update-docs で CLAUDE.md を更新する
   （スペシャリスト skill は「Current Skills」のスペシャリスト節、手順型は該当節）
2. downstream リポジトリでの反映（スペシャリスト skill の場合）:
   npx skills add Fandhe-AI/agent-specialist-skills で再導入後、
   init-claude-specialist を再実行すると専用 sub-agent が生成される
```

### Step 8: コミットする（任意）

ユーザーから指示があれば `create-commit` スキルでコミットする。指示がなければ変更を未コミットのまま報告のみ行う。

## 検証

`.claude/rules/verification.md` に従い、証拠を確認してから完了を宣言する。

- [ ] `ls "skills/<skill-name>/SKILL.md"` でファイルが存在する
- [ ] `ls -la ".claude/skills/<skill-name>"` で symlink が `../../skills/<skill-name>` を指す
- [ ] `head -15 "skills/<skill-name>/SKILL.md"` で frontmatter が正しい（スペシャリストは `specialist: true` を含み、手順型は `specialist` キーを含まない）
- [ ] skill-reviewer と frontmatter-linter の報告本文を引用し、指摘が無い旨（または ❌ 0 件・FAIL 0 件）を確認している（「問題なし」の要約だけを根拠にしない）
- [ ] 同梱スクリプトがある場合は `scripts/`（複数形）に配置されている

## 注意事項

- **symlink の相対パス**: `.claude/skills/<name>` からの相対パスは `../../skills/<name>` とする（絶対パス不可）
- **symlink と dotclaude-via-temp**: `.claude/skills/<name>` の symlink 作成は CLAUDE.md・skill-authoring.md の手順どおり直接 `ln -s` してよい（dotclaude-via-temp の一時作成対象はファイルの作成・編集）
- **本スキル自身の編集**: `.claude/skills/create-skill/` を編集する場合は dotclaude-via-temp に従い、`_/dotclaude/skills/create-skill/` で編集後にファイル単位で `mv` する（ディレクトリ単位の `mv` は既存ディレクトリ内に入れ子になる）
- **手順型の `specialist` キー禁止**: 手順型 skill に `specialist: true` を書かない。差し戻し対象とする
- **ディレクトリ名と name の一致**: frontmatter の `name:` はディレクトリ名と完全一致させる
- **名前空間の共有**: `.claude/skills/` は vendored スキルの symlink と共有のため、`.agents/skills/` の名前とも衝突させない
- **`#` を含む description**: YAML コメント扱いを防ぐためクォートで囲む（`.claude/rules/description-style.md`）
- **スペシャリストの誠実性**: 誠実性の原則 3 項目（推測の明示・個別の非公開データ・契約条件に基づく断定はできない旨・時点情報を鵜呑みにしない旨）を注意事項に必ず含める。省略したスキルは差し戻す
- **model/effort の安易な引き上げ禁止**: `opus` や `medium` 以上は複雑な判断支援が本質の skill に限る
- **update-docs の実行**: スキル追加後は必ず `/update-docs` で CLAUDE.md を最新化する
- **秘密情報**: 生成するスキル本文に API キー等を含めない。検出した場合は処理を中止してユーザーに警告する（`.claude/rules/security.md`）

## 関連

**Agents**: skill-explorer, skill-author, skill-reviewer, frontmatter-linter

**Rules**: delegation, delegation-impl, skill-authoring, specialist-authoring, description-style, japanese-style, security, verification

**Skills**: init-claude-specialist, create-agent, update-skill, update-docs, create-commit

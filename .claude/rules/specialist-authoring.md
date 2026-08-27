---
description: >
  スペシャリスト skill（専門家ペルソナ + 専門知の相談用スキル）の著作規約。frontmatter・本文構成・
  1 agent 1 skill 原則・model/effort 選定を定める。skill-author と init-claude-specialist が参照する。
paths:
  - "skills/**"
applies_to: skill-author
---

# スペシャリスト skill 著作規約

このリポジトリ（`Fandhe-AI/agent-specialist-skills`）が配布するスキルは全て
**スペシャリスト skill**（ゲームプロデューサー等の専門家ペルソナ + 専門知の相談用スキル）である。
汎用のスキル著作規約は `./skill-authoring.md` に従うが、本ファイルはスペシャリスト skill 固有の
追加規約を定める。

## frontmatter 規約

`./skill-authoring.md` の共通 frontmatter に加え、以下のキーを持つ。

```yaml
---
name: kebab-case-name          # ディレクトリ名と一致（必須・共通規約）
description: "..."             # 発火トリガー語を含める（必須・共通規約。./description-style.md 参照）
user-invocable: true           # スペシャリスト skill は原則 true（ユーザーが直接呼び出せる）
specialist: true               # 必須。init-claude-specialist の検出キー
specialist-model: sonnet       # 任意。既定は sonnet（省略時は init-claude-specialist が sonnet を採用）
specialist-effort: low         # 任意。既定は low（省略時は init-claude-specialist が low を採用）
---
```

### `specialist: true`（必須）

このリポジトリ発のスペシャリスト skill は全て `specialist: true` を宣言する。
`init-claude-specialist` はこのキーのみを検出条件として sub-agent 化対象を判定するため、
省略すると agent が生成されない。

### `specialist-model` / `specialist-effort`（任意・トークン消費抑制優先）

`init-claude-specialist` が生成する sub-agent の `model`/`effort` に反映される。省略時の既定は
`sonnet`/`low`。選定は**トークン消費抑制を優先**し、相談内容の性質で以下のように調整する。

| 相談内容の性質 | specialist-model | specialist-effort |
|--------------|-------------------|---------------------|
| 定型知識の Q&A が中心（用語説明・チェックリスト提示等） | `haiku` | `low` |
| 一般的な専門相談（既定） | `sonnet`（省略可） | `low`（省略可） |
| 経営・戦略判断が本質（複数トレードオフの横断比較・不確実性の高い意思決定支援） | `sonnet` または `opus` | `medium` 以上 |

`opus` や `medium` 以上の `effort` は、相談の本質が単純な知識引用ではなく複雑な判断支援である
skill に限定する。安易に高い値を既定にしない。

## 本文構成

`./skill-authoring.md` の「使い方→フロー→検証→注意事項」の代わりに、スペシャリスト skill は
以下の構成を使う（相談用スキルであり、手順実行型ではないため）。

```markdown
# <skill-name>

一行の概要説明。

## ペルソナ

（専門家としての人格設定。経歴・視点・語り口の想定）

## 専門領域

（対応する相談テーマの一覧。箇条書きで具体的に）

## 回答スタイル

（結論優先か網羅優先か、数値基準の扱い方、断定と推測の切り分け方針）

## 参照フレームワーク・知識体系

（拠り所とするモデル・理論・業界慣行の一覧）

## 注意事項

（この skill の知識の限界・前提条件・免責事項。「skill に無い事実は推測と明示する」を必ず含める）
```

`./skill-authoring.md` の「検証」節は相談用スキルには機械的な完了確認コマンドが無いため、
省略してよい（副作用を伴わない読み取り専用スキルであるため `./verification.md` の適用対象外）。

## 誠実性の原則（必須）

全スペシャリスト skill の「注意事項」に、次を必ず含める。

- skill の知識体系に無い事実を述べる場合は推測であることを明示する
- 個別の非公開データ・契約条件に基づく断定はできない旨
- 数値基準・業界動向は時点情報であり鵜呑みにしないよう促す旨

## 1 agent 1 skill 原則と例外基準

downstream リポジトリでは `init-claude-specialist` が各スペシャリスト skill ごとに専用
sub-agent を 1 件生成する（1 agent 1 skill）。この原則を崩す例外は、次の**両方**を満たす場合に
限る。

- 同一ドメインのスペシャリスト skill 同士である
- ユーザーの相談が実務上ほぼ常に複数 skill の知識を横断する（片方だけで完結する相談が稀）

例外の適用は `init-claude-specialist` の自動生成では行わず、生成後の**手動編集**でのみ行う
（判断を要する例外を自動化しない）。詳細な手順は `skills/init-claude-specialist/SKILL.md` の
Step 3「例外」節を参照。

## description の発火トリガー語規約

`./description-style.md` に従う。スペシャリスト skill では特に以下を含める。

- ペルソナ名・肩書きそのもの（例:「ゲームプロデューサー」）
- 相談を持ちかける表現（「〜について相談したい」「〜を評価して」「〜どうする」等）
- skill 名自体（略称があれば併記）

## 関連ルール

| ファイル | 概要 |
|---------|------|
| `./skill-authoring.md` | 汎用スキル著作規約（frontmatter 共通部分・sandbox 節・命名） |
| `./description-style.md` | description フィールドの書き方・発火率最適化 |
| `./agent-authoring.md` | `.claude/agents/specialists/` に生成される sub-agent 自体の著作規約 |
| `skills/init-claude-specialist/SKILL.md` | 検出・sub-agent 生成・委譲 rule 同期の実行フロー |

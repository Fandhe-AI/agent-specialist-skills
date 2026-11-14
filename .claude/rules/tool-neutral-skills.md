---
description: 配布するスペシャリスト skill を Claude Code / Codex / OpenCode のどれで読まれても同じ内容で使える書き方にする規約
paths:
  - "skills/**"
---

# スキルの 3 ツール中立規約

配布するスペシャリスト skill（`skills/<name>/SKILL.md`）を、Claude Code・Codex・OpenCode のどれで読まれても同じ内容で使える書き方にする。ツール固有の名前・置換変数・固定表記を本文に持ち込まない。

本規約は姉妹リポジトリ（agent-cli-skills）の同名規約を、本リポジトリの実態に合わせて移植したものである。

## 適用範囲と例外

| 区分 | 対象 | 扱い |
|------|------|------|
| 適用対象 | `skills/` のスペシャリスト skill（`specialist: true`） | 本規約に従う |
| 適用外（Claude Code 専用） | `skills/init-claude-specialist/` とその `sample/` | Claude Code の sub-agent（`.claude/agents/specialists/`）を生成するため本質的に Claude Code 専用。Claude Code 固有の名前を書いてよい |
| 対象外（配布対象ではない） | `.claude/skills/` の管理スキル（create-skill・update-skill・create-agent）、`.agents/skills/` の vendored スキル | 本リポジトリの開発用で `npx skills add` で配布されないため、本規約の対象外 |

スペシャリスト skill は相談用の知識文書であり、ツール呼び出しの手順を持たない（`./specialist-authoring.md`）。したがって主眼は、手順の中立化ではなく **ツール固有名を本文に書かないこと** である。次を本文に書かない。

- 委譲ツール名・確認ツール名（`Agent ツール`・`subagent_type`・`AskUserQuestion`・`ExitPlanMode` 等）
- 置換変数（`$ARGUMENTS`・`${CLAUDE_` で始まる変数）
- Claude Code 固有の生成表記（`Co-Authored-By: Claude …`・`Generated with [Claude Code]`）
- `.claude/agents/` の固有名（sub-agent 名）や、`.claude/rules/X.md` だけを根拠にした断定（配布先に無いことがある）
- 主語としての「Claude が…」（他のエージェントと並べる例示の場合だけ許す。通常は「エージェント」と書くか主語を省く）

## 決定: 本文はツール固有の機構に依存させない

**Why:** 下記の仕様差は姉妹リポジトリで Codex 0.164.0 と OpenCode v2.2.7 を実機確認した結果である。ツール固有の名前や置換変数は、他ツールでは解釈されずそのまま文字列として渡る。本リポジトリでは実機確認していないため、以下の表は姉妹リポジトリの確認結果の引用であり、本リポジトリの実測ではない。

## 3 ツールの仕様差（要点・姉妹リポジトリでの実機確認）

| 項目 | Claude Code | Codex（0.164.0） | OpenCode（v2.2.7） |
|------|-------------|------------------|--------------------|
| スキルの配置場所 | `.claude/skills`（`.agents/skills` は読まない） | `.agents/skills`（`.claude/skills` は読まない） | `.opencode/skills`・`.claude/skills`・`.agents/skills`（同名は `.agents` が勝つ） |
| 引数 | `$ARGUMENTS` が置換される | 置換されない。起動時のプロンプトの文字列として渡る | 置換されない。起動時のプロンプトの文字列として渡る |
| frontmatter の未知キー | `model`・`argument-hint` 等が効く | 無視（警告なし） | 無視（警告なし） |

上記以外（委譲・非対話時の確認・既定 sandbox の差）は、スペシャリスト skill がそれらの機構を使わないため本規約では扱わない。必要になった場合は姉妹リポジトリの規約を参照し、本リポジトリで確認した上で追記する。

## 書き方

### 引数

- 書き方: スペシャリスト skill は引数を取らない。ユーザーの相談文をそのまま入力として扱う。
- 書かないもの: `$ARGUMENTS`・`$N`。

### 委譲

- スペシャリスト skill の本文は委譲の手順を持たない。sub-agent への委譲は `init-claude-specialist` が downstream で生成する構成の話であり、skill 本文には書かない。
- 書かないもの: `Agent ツール`・`subagent_type`・生成される sub-agent の名前。

### ユーザーへの確認

- 相談の前提が不足するときは、「前提を確認する」旨を自然文で書く。確認用ツールの名前は書かない。
- 書かないもの: `AskUserQuestion`・plan mode・`ExitPlanMode`。

### ファイル操作の動詞

- 手順を持たないため通常は発生しない。書く場合は「読む」「検索する」「編集する」のように動詞で書く。
- 書かないもの: Read / Edit / Write / Glob / Grep / Bash などのツール名。

### 主語

- 書き方: 「エージェント」と書くか、主語を省く。ペルソナは「あなたは〜の専門家である」の形で設定してよい。
- 書かないもの: 「Claude が…」。

### 共著者と生成表記

- 書き方: skill 本文からは付与しない。ツールの設定・対象リポジトリの規約に任せる。
- 書かないもの: `Co-Authored-By: Claude …`・`Generated with [Claude Code]`。

### frontmatter

| キー | 扱い |
|------|------|
| `name` | 必須。ディレクトリ名と一致する kebab-case |
| `description` | 必須。`./description-style.md` に従う |
| `specialist`・`specialist-model`・`specialist-effort` | 本リポジトリ固有。Codex / OpenCode は未知キーを警告なしで無視する（姉妹リポジトリでの確認）ので残してよい。skill 本文はこれらに依存させない |
| `model`・`user-invocable`・`argument-hint` | Claude Code 用。他ツールでは無視される。内容はこれらに依存させない |

書かないもの: `allowed-tools` 等に依存した内容。

### sandbox 環境での実行

姉妹リポジトリは「sandbox 環境での実行」節を全スキルで必須にしているが、本リポジトリのスペシャリスト skill では **不要** とする。

- 根拠: スペシャリスト skill は相談用の知識文書で、コマンドを実行せず、ネットワークも使わず、ファイルへも書き込まない。`./skill-authoring.md` の sandbox 節の雛形は、節を持つスキルの判定に応じて使うものであり、SKILL.md に節を設けるかどうかは任意と定められているため、省略しても矛盾しない。
- 例外: スペシャリスト skill がコマンド実行・ネットワーク・書き込みを伴う手順を持つ場合は、その時点で `./skill-authoring.md` の定めに従って節を置く。そもそも `./specialist-authoring.md` の構成から外れるため、持たせない方針を優先する。
- `init-claude-specialist` は適用外だが、ファイルを生成するスキルであり、sandbox 節の扱いは `./skill-authoring.md` に従う。

## 検査

本リポジトリでは静的検査（ツール固有名の自動検出）は未導入であり、レビューで確認する。`skill-reviewer` によるレビューや `skills/` 配下の検索で、上記「書かないもの」の語が適用対象に混入していないかを見る。

例示としてどうしても上記の語を書く必要がある場合は、手順の本文ではなく、禁止例であることが明示された箇所に限る。

## 注意事項

- 本規約はスペシャリスト skill の書き方だけを中立にする。内容（ペルソナ・専門領域・誠実性の原則）は変えない。
- 適用外のスキル（`init-claude-specialist`）へ本規約を機械的に広げない。
- 姉妹リポジトリの実機確認結果を、本リポジトリで確認済みの事実として扱わない。

## 関連ルール

- `./specialist-authoring.md` — スペシャリスト skill の著作規約。skill の著作時に本規約と併せて参照する
- `./skill-authoring.md` — SKILL.md の frontmatter・本文構成・sandbox 節の雛形
- `./description-style.md` — description の書き方
- `./security.md` — セキュリティ上の確認・中止の基準

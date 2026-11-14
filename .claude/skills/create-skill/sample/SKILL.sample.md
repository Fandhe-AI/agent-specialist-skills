---
# 手順型 skill（スペシャリスト以外。init-claude-specialist のようなセットアップ等）の雛形。
# スペシャリスト skill は skills/init-claude-specialist/sample/specialist-skill-example.md を参照する。
# 注意: 手順型 skill に specialist キー（specialist: true 等）を書かない。書くと downstream の
# init-claude-specialist が sub-agent を誤生成する。

# name: スキルのディレクトリ名と完全一致させる（必須）。kebab-case のみ。
# 例: skills/my-new-skill/ であれば name: my-new-skill
name: my-new-skill

# description: 「〜して」「〜作って」等の発火トリガー語を含め、関連スキルへの導線も書く。
# 重要: 値に # を含む場合は必ずダブルクォートで囲む（YAML コメント扱いを防ぐ）。
#   NG 例: description: セットアップ # init-claude-specialist 参照
#   OK 例: description: "セットアップ。詳細は init-claude-specialist 参照"
description: "このスキルが何をするかの一文説明。「〜して」「〜作って」「〜確認して」などのトリガー語を含める。"

# model の選定基準:
#   haiku  — 機械的・集計・一覧生成・frontmatter 更新など判断不要な処理
#   sonnet — 判定・生成・レビュー・複数ファイル読解など
#   opus   — 複雑な計画立案・アーキテクチャ設計
model: sonnet

# user-invocable: 省略時は true。内部専用スキルのみ false を明示する（任意）
user-invocable: true

# argument-hint: 引数を受け取る場合のみ記載（任意）
# argument-hint: "<対象リポジトリのパス（省略時はカレントディレクトリ）>"
---

# my-new-skill

このスキルが何をするかの一文説明。

## 使い方

```
my-new-skill [引数]
```

引数の意味と省略時の挙動を記載する。

## 前提条件

<!-- ツール・権限・認証状態などを列挙する。不要なら節ごと削除する。 -->

- `git` が初期化済みであること
- 対象ディレクトリへの書き込み権限があること

## フロー

### Step 1: 状態を確認する

<!-- 各 Step は「目的 + コマンド例」の構成にする。 -->

```bash
git status --short
```

何を確認するのか、結果をどう解釈するかを書く。

### Step 2: メイン処理を実行する

```bash
mkdir -p "${target_dir}/.claude/agents/specialists"
```

変数は必ずダブルクォートで囲む（コマンドインジェクション対策）。

### Step 3: 結果を確認してユーザーに返す

処理結果（生成したファイル・件数）をユーザーに提示する。

## 検証

<!-- `.claude/rules/verification.md` の5段階ゲートに沿った完了確認を書く。 -->

- 生成物の存在を `ls` で確認する
- 件数・frontmatter など主張を裏付ける出力を引用して完了を宣言する

## 注意事項

<!-- 制約・禁止事項・エッジケース -->

- `--no-verify` は絶対に使用しない（pre-commit フック回避禁止）
- `.env` や認証情報ファイルが含まれる場合は警告して中止する
- 破壊的操作（削除等）の前は必ずユーザーの確認を得る
- `.claude/` 配下を編集する場合は `_/dotclaude/` 経由で行う（`.claude/rules/dotclaude-via-temp.md`）

<!-- 参考にする既存スキル: skills/init-claude-specialist/SKILL.md -->

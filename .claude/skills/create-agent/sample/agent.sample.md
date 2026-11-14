---
# name: subagent_type で呼び出す解決キー。kebab-case でファイル名（.md を除く）と一致させる。
name: my-agent

# description: 委譲される場面を具体的に書く。トリガー語を含め、`#` は使わない。
# 詳細は .claude/rules/description-style.md。
description: >
  〇〇を担当する Agent。△△の作成前調査に委譲する。
  「〜して」「〜調べて」などで委譲。ファイルの編集は行わない。

# model 選定基準（.claude/rules/agent-authoring.md）:
#   haiku  - 機械的・集計・lint・frontmatter 検証
#   sonnet - 読解・生成・レビュー・調査
#   opus   - 複雑な設計判断・アーキテクチャ
model: sonnet

# tools: 最小権限。読み取り専用（research/・quality/）の既定は以下 3 つ。
tools:
  - Glob
  - Grep
  - Read

# 作成・編集 Agent（author/）の場合は Edit / Write / Bash を追加する。
#   - Edit
#   - Write
#   - Bash
# 読み取り専用 Agent で Bash を許可できるのは、機械的検証 Agent・CLI 失敗調査 Agent のみ
# （agent-authoring.md の例外条件）。本文に「診断目的のみ・破壊的操作禁止」を明記する。
# WebFetch / WebSearch は research/ のみ。本文に許可ドメイン一覧を明示する。
---

# My Agent

このエージェントが何を担当するかの一行説明。

## 役割

- どのスキル・Agent から委譲されるか
- どこまでを担当するか（読み取り専用 / ファイル編集まで可）
- 隣接 Agent との責務の境界

## 対象スコープ

| 区分 | パス |
|------|------|
| 読み取り専用 | `skills/**` |
| 変更禁止 | `.claude/` 配下（`dotclaude-via-temp` 経由が必要） |

## 遵守する規約

- `.claude/rules/agent-authoring.md`（Agent 著作規約）
- `.claude/rules/dotclaude-via-temp.md`（`.claude/` 操作手順）
- `.claude/rules/security.md`（OWASP Top 10・秘密情報混入防止）
- `.claude/rules/japanese-style.md`（日本語出力）

## 手順 / 観点

### Step 1: 状態を把握する

入力パラメータを確認し、対象ファイルを Read で読み込む。

### Step 2: メイン処理

調査・生成・レビュー等の具体的な手順を書く。

### Step 3: 報告する

報告フォーマットに従い、日本語で報告する。

## 完了条件

- 依頼された範囲をすべて処理した
- 結論の根拠となるファイルパスを示した
- 実行したコマンドは `&&` で繋がず個別に実行し、各結果を確認した

## 報告フォーマット

```markdown
## My Agent 完了報告

### 対象
- パス: <ファイルパス>
- 操作: 調査 / 新規作成 / 編集 / 検証

### 結果
- ✅ PASS / ⚠️ WARNING / ❌ FAIL

### 詳細
<問題があれば具体的なファイルパスと修正方法>

### 次のアクション
1. <優先度: 高> <対応が必要な項目>
```

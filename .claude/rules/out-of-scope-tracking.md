---
description: 実装対象外の追跡規約。実装・レビュー中にスコープ外の事項を見つけたとき、放置せず Issue で追跡し、現在の PR に混入させない。
applies_to: implement-issue, implement-issue-tree, implement-review, implement-review-pr, create-pr
---

# 実装対象外の追跡規約

## 目的

実装・レビュー中にスコープ外と判断した事項を放置しない。後で埋もれるのを防ぐため、発見したタイミングで Issue に記録して追跡可能にする。

## 適用対象

| 区分 | 対象 |
|------|------|
| スキル | implement-issue, implement-issue-tree, implement-review, implement-review-pr, create-pr |
| Agent | 実装・修正・レビューを行う全 Agent |

## 本リポジトリで現れやすいスコープ外事項

| 事象 | 対処 |
|------|------|
| 作業中に見つけた vendored スキル（`.agents/skills/`）の不具合 | 本リポジトリでは直さない。`contribute-skill` で上流へ返すか、上流リポジトリに Issue を起票する |
| 別スキルの規約違反（`./skill-authoring.md`・`./specialist-authoring.md` 等） | 現在の PR では直さず、本リポジトリの Issue に記録する |
| 姉妹リポジトリとの規約差分 | 差分を Issue に記録し、どちらに揃えるかをユーザーと決める |

## フロー

1. **検出**: 実装・レビュー中にスコープ外と判断した事項をメモする
2. **既存 Issue の確認**:

   ```bash
   gh issue list --search "${KEYWORD}" --state open
   ```

   キーワードは `"${KEYWORD}"` でクォートして渡す（ユーザー入力を未クォートで展開しない。`./security.md` 参照）。
3. **ユーザーに承認を得る**: 既存 Issue への追記か新規起票かをユーザーと確認する
4. **記録**:
   - 既存 Issue がある場合は、本文を HEREDOC で渡してコメントする:

     ```bash
     gh issue comment "${ISSUE_NUMBER}" --body "$(cat <<'EOF'
     （本文をここに記述）
     EOF
     )"
     ```

   - 存在しない場合は、`create-issue-tree` または `create-issue` で適切な親 Issue 配下に起票する
5. **元 PR・レビューに切り出し先を記録**: コメントまたは PR 本文に切り出し先の Issue 番号を記載する

## 禁止事項

- ユーザーの承認なしに勝手に Issue を起票しない
- スコープ外の修正を現在の PR に混入させない（別 Issue・別 PR で対処する）
- vendored スキルの不具合を本リポジトリ内で直接修正しない（上流管理のため）
- 検索キーワード・本文をクォートせずシェルへ展開しない（`gh issue list --search ${KEYWORD}` や `--body "...${変数}..."` の直書きは不可）

## 関連ルール

- `./security.md` — コマンドインジェクション対策（変数のクォート・HEREDOC）
- `./conventional-commits.md` — 別 PR で対処する際のコミット規約
- `./verification.md` — 切り出し後の完了ゲート

# specialist-delegation.md 雛形

`init-claude-specialist` の Step 4 で使用する委譲 rule の雛形。プレースホルダ（`{{ }}` 表記）
を Step 3 で生成した agent 一覧の実体で置き換えて、対象リポの
`.claude/rules/specialist-delegation.md` に配置する。

```markdown
# スペシャリスト委譲規約

ユーザーがスペシャリストの専門領域に該当する質問・相談をしたら、main が直接回答せず
該当 sub-agent を起動して回答させる。main の役割はユーザーとの対話・領域判定・sub-agent
への委譲・回答の統合と報告に徹し、専門知識に基づく回答生成そのものは sub-agent に委ねる。

## 委譲先マッピング

| subagent_type | model | effort | 対応 skill | 相談領域 |
|---------------|-------|--------|-----------|---------|
| {{name}}      | {{model}} | {{effort}} | {{name}} | {{domain_summary}} |

（この表は `init-claude-specialist` が Step 3 の生成結果から自動で埋める。手動での追記・削除は
`init-claude-specialist` の再実行結果と食い違わないよう、再実行時に同期されることを前提とする）

## 起動判断

- ユーザーの質問・相談文が上表いずれかの「相談領域」に該当する場合、該当 subagent_type を
  `Agent` ツールで起動する
- 独立した複数領域にまたがる質問は、**同一メッセージ内で複数 Agent を並列起動**する
  （依存関係がある場合のみ逐次実行）
- どの専門領域にも該当しない一般的な質問は main が直接回答してよい

## main がやってはいけないこと

- 上表に該当する専門領域の質問に、sub-agent を起動せず main が直接専門的な回答を組み立てること
  （main のトークン消費を抑える設計のため）
- sub-agent の回答を改変せずにそのまま転送する以上の追加解釈を加えること（統合・要約は可）
```

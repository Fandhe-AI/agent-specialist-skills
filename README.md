# template-skills

> **注記:** このテンプレートから作ったリポジトリでは、この見出しとリポジトリ名の記述を新しいリポジトリ名へ差し替える。

Fandhe-AI 組織のスキル集リポジトリ用テンプレート。`skills/<name>/SKILL.md` を実体とし、
[vercel-labs/skills](https://github.com/vercel-labs/skills) CLI（`npx skills add`）で
導入先リポジトリへ配布するスキル集を、このテンプレートから新設する。

リポジトリの詳細な構成・委譲方針・規約は [CLAUDE.md](CLAUDE.md) を参照（構成ツリーの正は
CLAUDE.md に一本化し、本 README には置かない）。

## このテンプレートの使い方

### 1. リポジトリを作成する

GitHub の「Use this template」ボタン、または gh CLI で作成する:

```bash
gh repo create <org>/<name> --template Fandhe-AI/template-skills --private
```

### 2. 作成後にやること

1. **sample-skill を置換する** — `skills/sample-skill/` を削除し、実スキルを追加する
   （`create-skill` スキルで scaffold・symlink・ドキュメント更新まで自動化できる）
2. **Overview を差し替える** — 本 README の見出し・冒頭説明と、`CLAUDE.md` の
   Overview / Current Skills の差替枠（`<このリポの概要を書く>` 等）を実内容へ更新する
3. **AGENTS.md の固有観点を書く** — 「リポジトリ固有の観点」章の差替枠を埋める
4. **setup-repo-guards を適用する** — 組織標準の CI ガード一式
   （codex-review / 必須チェック集約ジョブ / branch protection ruleset）を導入する

## スキル一覧

| スキル | 説明 |
|--------|------|
| sample-skill | テンプレート同梱のサンプルスキル。新スキル作成時の雛形（利用時に置換する） |

## 関連リポジトリ

| リポジトリ | 内容 |
|-----------|------|
| [Fandhe-AI/agent-cli-skills](https://github.com/Fandhe-AI/agent-cli-skills) | CLI 開発ワークフロースキル集（コミット・PR・Issue・レビュー等） |
| [Fandhe-AI/agent-reference-skills](https://github.com/Fandhe-AI/agent-reference-skills) | 参照スキル集（github-docs・anthropic-claude-code 等） |
| [Fandhe-AI/agent-util-skills](https://github.com/Fandhe-AI/agent-util-skills) | ユーティリティスキル集（create-html-report・setup-firebase-hosting 等） |

# agent-specialist-skills

Fandhe-AI 組織の「スペシャリスト skill」（ゲームプロデューサー等、専門家ペルソナ + 専門知の
相談用スキル）配布リポジトリ。`skills/<name>/SKILL.md` を実体とし、
[vercel-labs/skills](https://github.com/vercel-labs/skills) CLI（`npx skills add`）で
downstream リポジトリへ配布する。

downstream リポジトリでは **1 agent 1 skill** の原則で、導入した各スペシャリスト skill ごとに
専用 sub-agent を生成する。ユーザーが専門領域の質問をしたとき main はその sub-agent を起動して
回答させ、main 自身のトークン消費を抑える。この初期セットアップを担うのが中核スキル
`init-claude-specialist` である。

リポジトリの詳細な構成・委譲方針・規約は [CLAUDE.md](CLAUDE.md) を参照（構成ツリーの正は
CLAUDE.md に一本化し、本 README には置かない）。

## 導入方法

```bash
npx skills add Fandhe-AI/agent-specialist-skills
```

導入後、downstream リポジトリのルートで `init-claude-specialist` を実行すると、導入済みの
スペシャリスト skill ごとに `.claude/agents/specialists/<name>.md` が生成され、委譲 rule
（`.claude/rules/specialist-delegation.md`）が整備される。

初期状態でこのリポジトリが配布する実スペシャリスト skill は 0 件。まず箱
（`init-claude-specialist` と著作規約）を整備した段階であり、スペシャリスト skill は今後追加する。

## スキル一覧

### セットアップ

| スキル | 説明 |
|--------|------|
| init-claude-specialist | 導入済みスペシャリスト skill を検出し、1 agent 1 skill で専用 sub-agent・委譲 rule を生成する |

### スペシャリスト

今後追加。新規スペシャリスト skill の著作は `.claude/rules/specialist-authoring.md` の規約と
`skills/init-claude-specialist/sample/specialist-skill-example.md`（見本）を参照する。

## 関連リポジトリ

| リポジトリ | 内容 |
|-----------|------|
| [Fandhe-AI/agent-cli-skills](https://github.com/Fandhe-AI/agent-cli-skills) | CLI 開発ワークフロースキル集（コミット・PR・Issue・レビュー等） |
| [Fandhe-AI/agent-reference-skills](https://github.com/Fandhe-AI/agent-reference-skills) | 参照スキル集（github-docs・anthropic-claude-code 等） |
| [Fandhe-AI/agent-util-skills](https://github.com/Fandhe-AI/agent-util-skills) | ユーティリティスキル集（create-html-report・setup-firebase-hosting 等） |

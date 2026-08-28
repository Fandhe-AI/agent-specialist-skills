# Agent Specialist Skills

Fandhe-AI 組織の「スペシャリスト skill」（ゲームプロデューサー等、専門家ペルソナ + 専門知の相談用スキル）配布リポジトリです。downstream リポジトリでは **1 agent 1 skill** の原則に従い、導入した各スペシャリスト skill ごとに専用 sub-agent を生成します。ユーザーが専門領域の質問をしたとき main はその sub-agent を起動して回答させ、main 自身のトークン消費を抑えます。この初期セットアップを担う中核スキルが `init-claude-specialist` です。

インストールには [vercel-labs/skills](https://github.com/vercel-labs/skills) CLI を使用します。

## 使い方 — スキルの追加

```bash
# スキル一覧を表示
npx skills add Fandhe-AI/agent-specialist-skills --list

# 特定のスキルを追加（例: init-claude-specialist）
npx skills add Fandhe-AI/agent-specialist-skills --skill init-claude-specialist

# 全スキルを追加
npx skills add Fandhe-AI/agent-specialist-skills --all
```

デフォルトではシンボリックリンクとして `.claude/skills/` に追加されます。`--copy` でファイルコピー、`-g` でグローバル (`~/.claude/skills/`) にインストールできます。

導入後、downstream リポジトリのルートで `init-claude-specialist` を実行すると、導入済みのスペシャリスト skill ごとに `.claude/agents/specialists/<name>.md` が生成され、委譲 rule（`.claude/rules/specialist-delegation.md`）が整備されます。

## リポジトリ構成

Claude Code の Claude Skills として使用するスキルは、原則として `skills/` 配下に実体があり、`.claude/skills/` からシンボリックリンクで参照されます。加えて本リポジトリでは開発用に、姉妹リポジトリの CLI ワークフロースキル（create-commit / create-pr 等）や参照スキル（github-docs / anthropic-claude-code 等）を `npx skills add` で `.agents/skills/` に vendor し、`.claude/skills/` からシンボリックリンクしています（台帳は `skills-lock.json`）。これらは本リポジトリの配布対象ではありません。Agents・Rules・その他ディレクトリツリーの詳細は [CLAUDE.md](./CLAUDE.md) を参照してください（構成ツリーの正は CLAUDE.md に一本化し、本 README には置きません）。

## スキル一覧

### セットアップ

| スキル | 説明 |
|--------|------|
| **init-claude-specialist** | 導入済みスペシャリスト skill を検出し、1 agent 1 skill で専用 sub-agent・委譲 rule を生成する |

### スペシャリスト

今後追加予定です。初期状態でこのリポジトリが配布する実スペシャリスト skill は 0 件です。新規スペシャリスト skill の著作は `.claude/rules/specialist-authoring.md` の規約と `skills/init-claude-specialist/sample/specialist-skill-example.md`（見本）を参照してください。

## 関連リポジトリ

このリポジトリはスペシャリスト skill 集の本体です。関連リポジトリは以下の通りです。

- **[Fandhe-AI/agent-cli-skills](https://github.com/Fandhe-AI/agent-cli-skills)** — CLI 開発ワークフロースキル集（コミット・PR・Issue・レビュー等）
- **[Fandhe-AI/agent-reference-skills](https://github.com/Fandhe-AI/agent-reference-skills)** — 公式ドキュメント参照スキル（GitHub CLI・Claude Code 拡張等）
- **[Fandhe-AI/agent-util-skills](https://github.com/Fandhe-AI/agent-util-skills)** — ユーティリティスキル集（HTML レポート生成・Firebase Hosting デプロイ等）
- **[Fandhe-AI/template-skills](https://github.com/Fandhe-AI/template-skills)** — 新規スキル配布リポの雛形。`gh repo create <org>/<name> --template Fandhe-AI/template-skills` で作成可能

Agents・Rules・ディレクトリツリーの詳細は [CLAUDE.md](./CLAUDE.md) を参照してください。

## 特徴

- **1 agent 1 skill による main 消費削減** — 導入済みスペシャリスト skill ごとに専用 sub-agent を生成し、専門質問は sub-agent に委譲することで main の token 消費を抑える
- **誠実性の原則** — 全スペシャリスト skill は「skill に無い事実は推測と明示する」「個別の非公開データに基づく断定はできない」旨を必ず含む
- **Conventional Commits 準拠** — コミット・PR タイトルは `type(scope): subject` 形式を徹底
- **セキュリティファースト** — コミット・PR 作成・レビューの各段階で OWASP Top 10・ハードコードされた秘密情報等のセキュリティチェックを実施
- **完了ゲート** — 副作用を伴う作業は証拠（テスト出力・終了コード等）に基づく5段階完了ゲートを経てから完了を宣言
- **日本語対応** — 全スキルの出力・レポートは日本語

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

「スペシャリスト skill」（ゲームプロデューサー等、専門家ペルソナ + 専門知の相談用スキル）を
配布するリポジトリ。スキルは `skills/<name>/SKILL.md` を実体とし、`npx skills add` で
downstream リポジトリへ配布される。インストールは
[vercel-labs/skills](https://github.com/vercel-labs/skills) CLI を使用。

downstream リポジトリでは **1 agent 1 skill** の原則で、導入した各スペシャリスト skill ごとに
専用 sub-agent を生成する。ユーザーが専門領域の質問をしたとき main はその sub-agent を起動して
回答させ、main 自身のトークン消費を抑える。この sub-agent 生成・委譲設定の初期セットアップを
担うのが本リポジトリの中核スキル `init-claude-specialist` である。

初期状態でこのリポジトリが配布する実スペシャリスト skill は 0 件。まず箱
（`init-claude-specialist` と著作規約）を整備し、スペシャリスト skill は今後追加していく。

## Repository Structure

```
skills/                               -- スキル本体（各ディレクトリに SKILL.md）
  init-claude-specialist/             -- スペシャリスト skill の 1 agent 1 skill セットアップ
    SKILL.md
    sample/                           -- agent/委譲 rule の雛形テンプレートと skill 著作見本
      specialist-agent-template.md    -- .claude/agents/specialists/<name>.md の雛形
      specialist-delegation-template.md -- .claude/rules/specialist-delegation.md の雛形
      specialist-skill-example.md     -- スペシャリスト skill 著作の見本（game-producer 例）
.agents/
  skills/                             -- npx skills add で vendored した開発用 CLI・参照スキル（23 件。anthropic-claude-code, commitlint, github-docs, … ）
.claude/
  agents/
    research/
      skill-explorer.md               -- skills/ 横断調査・読み取り専用（Sonnet）
      sub-investigator.md             -- gh/git/CLI/hook 失敗調査（Sonnet）
      reference-researcher.md         -- 公式ドキュメント調査（Sonnet）
    author/
      skill-author.md                 -- skills/<name>/SKILL.md 作成編集（Sonnet）
      agent-author.md                 -- .claude/agents 作成編集（Sonnet）
      rules-author.md                 -- .claude/rules 作成編集（Sonnet）
      docs-writer.md                  -- CLAUDE.md/README 一覧・ツリー更新（Haiku）
    quality/
      skill-reviewer.md               -- SKILL.md 品質レビュー・読み取り専用（Sonnet）
      security-auditor.md             -- OWASP 監査・読み取り専用（Sonnet）
      frontmatter-linter.md           -- frontmatter/symlink 機械検証（Haiku）
      plan-verifier.md                -- 計画検証・読み取り専用（Sonnet）
  rules/
    delegation.md                     -- 委譲の原則（調査・設計フェーズ）
    delegation-impl.md                -- 委譲マッピング（作成・編集フェーズ）
    skill-authoring.md                -- 汎用スキル著作規約
    specialist-authoring.md           -- スペシャリスト skill 固有の著作規約（1 agent 1 skill・model/effort 選定）
    agent-authoring.md                -- エージェント著作規約
    conventional-commits.md           -- Conventional Commits 詳細規約
    security.md                       -- セキュリティチェック規約
    japanese-style.md                 -- 日本語スタイルガイド
    description-style.md              -- description 著作スタイル
    dotclaude-via-temp.md             -- .claude/ 操作時の一時ディレクトリルール
    verification.md                   -- 完了ゲート規約（証拠なき完了宣言の禁止・5段階検証）
    debugging.md                      -- 根本原因デバッグ規約（修正前の原因調査・3回失敗でエスカレーション）
    code-comment-style.md             -- コード内コメント・ドキュメンテーションコメント規約
  skills/
    init-claude-specialist            -- ../../skills/init-claude-specialist への symlink
    anthropic-claude-code…            -- ../../.agents/skills/<name> への symlink（vendored スキル 23 件）
  settings.json                       -- hooks 設定（SessionStart リマインダー）
  settings.local.json                 -- ローカル権限設定（git 管理対象外）
skills-lock.json                      -- vendored スキルの台帳（source: Fandhe-AI/agent-cli-skills・agent-reference-skills）
AGENTS.md                             -- レビュー観点集（codex-review が参照）
```

## 委譲方針（必読）

main の役割は **対話・計画・委譲・報告** に徹する。token を消費する作業（調査・ファイル作成・編集・レビュー）は専門サブエージェントへ委譲する。

### パスベースの目安

| 操作対象パス | モード | 適用ルール |
|------------|--------|-----------|
| `_/`・`docs/`・`.claude/` の**閲覧のみ** | 調査・設計モード | `.claude/rules/delegation.md` |
| `skills/`・`.claude/agents/`・`.claude/rules/`・`CLAUDE.md` の**作成・編集** | 作成・編集モード | `.claude/rules/delegation-impl.md` |

### model 配分戦略

| 用途 | model |
|------|-------|
| 判定・生成（スキル著作・レビュー・調査） | Sonnet |
| 機械的・集計処理（frontmatter lint・ドキュメント更新） | Haiku |
| 複雑な計画立案 | Opus |

### 並列化

独立タスクは**同一メッセージ内で複数 Agent を起動**して並列実行する。依存関係がある場合のみ逐次実行。

例: 「skill-explorer で横断調査」と「reference-researcher で外部仕様確認」は並列起動可。

## Sub-agents

サブエージェントは `.claude/agents/` 配下に配置され、`subagent_type: <name>` で呼び出す。

### research/ — 調査系（読み取り専用）

| subagent_type | model | 概要 |
|--------------|-------|------|
| `skill-explorer` | Sonnet | skills/ 横断調査・仕様把握 |
| `sub-investigator` | Sonnet | gh/git/CLI/hook 失敗の調査 |
| `reference-researcher` | Sonnet | 公式ドキュメント・外部仕様の調査 |

### author/ — 作成・編集系

| subagent_type | model | 概要 |
|--------------|-------|------|
| `skill-author` | Sonnet | `skills/<name>/SKILL.md` の作成・編集 |
| `agent-author` | Sonnet | `.claude/agents/` の作成・編集（dotclaude-via-temp 準拠） |
| `rules-author` | Sonnet | `.claude/rules/` の作成・編集（dotclaude-via-temp 準拠） |
| `docs-writer` | Haiku | `CLAUDE.md`・`README.md` の一覧・ツリー更新 |

### quality/ — 品質・検証系（読み取り専用）

| subagent_type | model | 概要 |
|--------------|-------|------|
| `skill-reviewer` | Sonnet | SKILL.md の品質レビュー |
| `security-auditor` | Sonnet | OWASP Top 10 セキュリティ監査 |
| `frontmatter-linter` | Haiku | frontmatter・symlink の機械検証 |
| `plan-verifier` | Sonnet | 計画ファイルの完了検証 |

## Specialist Agents

このリポジトリ自体は downstream リポジトリではないため sub-agent 化対象のスペシャリスト skill
を持たない。以下は `init-claude-specialist` が downstream リポジトリで生成する
`.claude/agents/specialists/<name>.md` の一覧表フォーマットの参考（実データは
downstream リポジトリの CLAUDE.md に記載される）。

| subagent_type | model | effort | 対応 skill | 相談領域 |
|---------------|-------|--------|-----------|---------|
| （今後追加。現在 0 件） | - | - | - | - |

## Rules

| ファイル | 対象 | 概要 |
|---------|------|------|
| `delegation.md` | main | 調査・設計フェーズの委譲原則 |
| `delegation-impl.md` | main / author 系 Agent | 作成・編集フェーズの委譲マッピング |
| `skill-authoring.md` | skill-author / skill-reviewer | 汎用スキル著作フォーマット・品質基準 |
| `specialist-authoring.md` | skill-author / init-claude-specialist | スペシャリスト skill 固有の著作規約（1 agent 1 skill・model/effort 選定・誠実性の原則） |
| `agent-authoring.md` | agent-author | エージェント著作フォーマット・品質基準 |
| `conventional-commits.md` | create-commit / create-pr 等 | Conventional Commits 詳細規約 |
| `security.md` | security-auditor / create-pr 等 | OWASP Top 10 セキュリティチェック基準 |
| `japanese-style.md` | 全 Agent | 日本語スタイルガイド |
| `description-style.md` | skill-author / agent-author / skill-reviewer | description 著作スタイル（発火率・長さ・YAML 落とし穴） |
| `dotclaude-via-temp.md` | agent-author / rules-author | `.claude/` 操作時の一時ディレクトリルール |
| `verification.md` | 副作用を伴う全スキル・Agent | 完了ゲート（証拠なき完了宣言の禁止・5段階検証） |
| `debugging.md` | 実装系スキル / sub-investigator | 根本原因デバッグ（修正前の原因調査・3回失敗でエスカレーション） |
| `code-comment-style.md` | 実装系スキル / 全 author Agent | コード内コメント・ドキュメンテーションコメント規約（役割・境界・文脈） |

## Current Skills (1)

### セットアップ (1)

| スキル | 説明 |
|--------|------|
| init-claude-specialist | 導入済みスペシャリスト skill を検出し、1 agent 1 skill で専用 sub-agent・委譲 rule を生成する |

### スペシャリスト (0)

今後追加。`.claude/rules/specialist-authoring.md` の規約に従って著作する
（見本: `skills/init-claude-specialist/sample/specialist-skill-example.md`）。

## Conventions

### Conventional Commits

全スキルで `type(scope): subject` 形式を徹底。

- **Types:** feat, fix, docs, refactor, test, chore, style, build, ci, perf
- **Subject:** 72 文字以下、命令形/現在形、日本語可
- **Breaking Changes:** `!` 接尾辞 or body に `BREAKING CHANGE:`

### .claude/ ディレクトリ操作

`.claude/` 配下のファイル作成・編集は `_/dotclaude/` で一時作業し、完了後に `mv` で移動する。`rm -rf _/dotclaude` は禁止（共有ディレクトリのため `rmdir` で空ディレクトリのみ削除）。

### セキュリティレビュー

コミット・PR 作成・レビューを行うスキルで OWASP Top 10・ハードコードされた秘密情報・XSS・入力バリデーション・認証認可を必須チェック。セキュリティ問題がある場合はマージをブロック。

### スペシャリスト skill の誠実性原則

全スペシャリスト skill は「skill に無い事実は推測と明示する」「個別の非公開データに基づく断定はできない」旨を注意事項に必ず含める（詳細は `.claude/rules/specialist-authoring.md`）。

### 日本語出力

全スキルの出力・レポートは日本語で記述する。

## hooks（settings.json）

`.claude/settings.json` に SessionStart hook を設定する。セッション開始時に以下のリマインダーを echo で出力する:

- 日本語でやりとりする
- 作業は subagent へ委譲し main の token 消費を抑える（delegation.md / delegation-impl.md）
- `.claude/` 配下の編集は `_/dotclaude/` 経由（dotclaude-via-temp）
- Conventional Commits 厳守（`--no-verify` 禁止）

## Skill Anatomy

各スキルは `skills/<name>/SKILL.md` に YAML frontmatter + 手順を記述する。`.claude/skills/` からシンボリックリンクで参照される。

```yaml
---
name: <skill-name>
description: <one-line description>
---
```

スペシャリスト skill はこれに加え `specialist: true` を必須で持つ（`.claude/rules/specialist-authoring.md` 参照）。

## Adding a New Skill

1. `create-skill` スキルを呼び出す（scaffold・symlink・update-docs まで自動化）。
   または手動で行う場合:
   1. `skills/<name>/SKILL.md` を作成（frontmatter + 手順）
   2. `.claude/skills/<name>` にシンボリックリンクを作成:
      `ln -s ../../skills/<name> .claude/skills/<name>`
   3. `update-docs` スキルで CLAUDE.md のスキル一覧・構成を更新

## Adding a New Specialist Skill

1. `skills/<name>/SKILL.md` を作成する。`.claude/rules/specialist-authoring.md` の規約
   （`specialist: true` 必須・ペルソナ→専門領域→回答スタイル→知識体系→注意点の構成・
   誠実性の原則）に従う。著作の見本は
   `skills/init-claude-specialist/sample/specialist-skill-example.md` を参照
2. `.claude/skills/<name>` にシンボリックリンクを作成:
   `ln -s ../../skills/<name> .claude/skills/<name>`
3. `update-docs` スキルで CLAUDE.md の Current Skills（スペシャリスト節）を更新
4. downstream リポジトリでは `npx skills add Fandhe-AI/agent-specialist-skills` で再導入後、
   `init-claude-specialist` を再実行すると新しいスペシャリスト skill 用の sub-agent が生える

## Adding a New Agent

1. `create-agent` スキルを呼び出す（dotclaude-via-temp 準拠で scaffold）。
   または手動で行う場合:
   1. `_/dotclaude/agents/<category>/<name>.md` に frontmatter + 手順を作成
   2. `mv` で `.claude/agents/<category>/<name>.md` に移動
   3. `update-docs` スキルで CLAUDE.md の Sub-agents 一覧を更新

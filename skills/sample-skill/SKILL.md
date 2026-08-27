---
name: sample-skill
description: >
  テンプレート同梱のサンプルスキル。新スキル作成時の雛形（frontmatter + 使い方→Step→検証→注意の最小実例）。
  実スキル追加時にこのディレクトリごと置換する。scaffold は create-skill を参照。
user-invocable: true
---

# sample-skill

テンプレートリポジトリに同梱するサンプルスキル。スキルの標準構成（使い方→Step→検証→注意事項）の最小実例を示す。実スキルを追加する際は、このディレクトリを削除または置換する。

## 使い方

```
/sample-skill
```

引数・前提条件はない。呼び出すと、このリポジトリのスキル一覧を表示して終了する。

## フロー

### Step 1: スキル一覧の取得

`skills/` 配下のスキルディレクトリを列挙する:

```bash
ls -1 skills/
```

### Step 2: レポート出力

列挙結果を日本語で一覧表示する。例:

```
このリポジトリのスキル:
- sample-skill（テンプレート同梱のサンプル）
```

## 検証

`.claude/rules/verification.md` の5段階ゲートに従い、以下で完了を確認する:

```bash
# Step 1 のコマンドが終了コード 0 で、skills/ 配下の全ディレクトリを列挙していること
ls -1 skills/; echo "exit=$?"
```

出力にスキル名が含まれ、終了コードが 0 であれば完了。

## 注意事項

- 本スキルはテンプレートの雛形であり、導入先へ配布する実用スキルではない。実スキル追加時に置換する
- このスキルは sandbox 環境で実行できる。ネットワーク越しの操作を行わず、ユーザー指定の引数を含めてワークスペース外への書き込みも行わない
- 実スキルを作成する際は `.claude/rules/skill-authoring.md`（本文構成・model 選定）と `.claude/rules/description-style.md`（発火率・YAML の落とし穴）に従う
- スクリプトを持つスキルでは `tests/` に node:test の回帰テストを置く（`tests/sample.test.mjs` のコメント参照）

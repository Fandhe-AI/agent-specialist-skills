---
name: update-skill
description: >
  skills/<name>/ の既存スキル（主にスペシャリスト skill）を改訂するワークフロー。専門領域追加・ペルソナ調整・
  回答スタイル変更、数値基準・業界動向の鮮度見直し、現行規約への準拠修正を check / apply で実行。
  「スペシャリスト skill を更新して」「専門家スキルを改訂」「知識を最新化」「update-skill」で使用。
  新規作成は create-skill、vendored スキルの上流反映は contribute-skill、一覧更新は update-docs。
model: sonnet
user-invocable: true
argument-hint: "<skill-name> [check|apply [改訂内容]] (改訂内容を渡す場合は mode 必須。例: update-skill game-producer apply 専門領域に運営施策を追加)"
---

# update-skill

`skills/<skill-name>/` の既存スキルを改訂するオーケストレーションスキル。改訂は次の 3 用途を扱う。

- (a) ユーザー指定の改訂（専門領域の追加、ペルソナ調整、回答スタイル変更など）
- (b) 知識体系・数値基準・業界動向など時点情報の鮮度見直し
- (c) 現行規約（`specialist-authoring.md`・`skill-authoring.md`・`description-style.md`）への準拠修正

本スキルは `.claude/skills/` の実ディレクトリに置くリポジトリ管理スキルで、下流へは配布しない。`skills/` 配下には置かず、symlink 化もしない。本スキル自身を編集する場合は `.claude/rules/dotclaude-via-temp.md` に従い `_/dotclaude/` 経由で行う。

## 使い方

```
/update-skill game-producer                                  # 差分レポートのみ（mode 省略 = check）
/update-skill game-producer check                            # 同上
/update-skill game-producer check 専門領域に運営施策を追加    # 改訂案を評価するだけ（書き換えない）
/update-skill game-producer apply                            # 差分を提示し、承認された候補だけ適用
/update-skill game-producer apply 専門領域に運営施策を追加    # ユーザー指定の改訂を適用
```

| 引数 | 必須 | 説明 |
| --- | --- | --- |
| `skill-name` | 必須 | 改訂対象のスキル名（`skills/<skill-name>/` のディレクトリ名。kebab-case） |
| `mode` | 改訂内容を渡す場合は必須 | `check`（差分レポートのみ）または `apply`（承認範囲を適用）。引数が `skill-name` だけのときに限り省略でき、既定は `check` |
| 改訂内容 | 任意 | 自由記述。ユーザー指定の改訂（用途 a）。`check` では評価対象の改訂案として扱い、ファイルは書き換えない。渡す場合は `mode` を必ず先頭に置く |

引数の扱い。

- 第 2 引数が `check` / `apply` のいずれかならモードとして扱う。それ以外の語で始まる場合は「モード省略 + 改訂内容」と推測せず、処理を進めずに `mode` を指定するよう問い返す
- `apply` 単独（改訂内容なし）の場合も、Step 1〜3 を再実行して差分を提示し、用途 b・c の候補はユーザー承認を得てから Step 5 へ進む（前回の `check` 結果は引き継がない）
- `skill-name` は `^[a-z0-9][a-z0-9-]*$` に一致するものだけ受け付ける。`/`・`..`・空白を含む値は、パス解決やシェル展開に使う前に拒否する
- `skills/<skill-name>/SKILL.md` が存在しない場合は停止する。新規作成なら `create-skill` を案内する
- `.agents/skills/` 配下の vendored スキルは対象外。上流リポジトリの管理物であり、本リポジトリでは改訂しない。改修を上流へ返す場合は `contribute-skill` を案内する

main（このスキル自身）は委譲・統合・報告に徹し、調査・SKILL.md の編集・レビューは専門 Agent に委譲する（`.claude/rules/delegation.md`・`.claude/rules/delegation-impl.md` 準拠）。委譲プロンプトには目的・入力・出力先・観点・適用ルールの 5 項目を必ず含める。

## フロー

### Step 1: 現状を把握する（skill-explorer に委譲）

**skill-explorer（subagent_type: skill-explorer）**に、対象スキルの現状と規約との差分を洗い出させる。

```
subagent_type: skill-explorer
prompt: |
  目的: skills/<skill-name>/ の現状を規約と突き合わせ、改訂候補を一覧化する（読み取り専用）
  入力:
    - skills/<skill-name>/SKILL.md と同ディレクトリ配下の付属ファイル
    - ユーザー指定の改訂内容（あれば）: <改訂内容>
  出力先: 報告のみ（ファイルは書かない）
  観点:
    - frontmatter（name とディレクトリ名の一致、description の発火語・長さ・`#` の有無、
      specialist / specialist-model / specialist-effort の妥当性）
    - 本文構成（スペシャリスト skill は ペルソナ→専門領域→回答スタイル→参照フレームワーク・知識体系→注意事項。
      specialist 宣言のない手順型スキルは 使い方→フロー→検証→注意事項）
    - 誠実性の原則 3 項目（skill の知識体系に無い事実を述べる場合は推測と明示 /
      個別の非公開データ・契約条件に基づく断定はできない旨 /
      数値基準・業界動向は時点情報であり鵜呑みにしないよう促す旨）が注意事項に揃っているか
    - 時点情報（数値基準・業界動向・フレームワークの版や名称）の所在
    - 候補ごとに 用途（a・b・c）・箇所・現状・改訂案・根拠規約 を付ける
  適用ルール: .claude/rules/specialist-authoring.md, .claude/rules/skill-authoring.md,
    .claude/rules/description-style.md
```

### Step 2: 知識の鮮度を確認する

Step 1 で時点情報が見つかった場合、または改訂内容が事実主張を含む場合のみ実施する。時点情報が無く、改訂が文体・構成・規約準拠に限られるなら省略する。主張の種類ごとに確認方法を分ける。

| 主張の種類 | 確認方法 |
| --- | --- |
| Claude Code / `gh` / GitHub の仕様に関わる主張 | reference-researcher に委譲する |
| 専門領域の数値基準・業界動向・フレームワークの版 | ユーザーが提示した出典、またはユーザーによる手動確認に委ねる |

reference-researcher の WebFetch / WebSearch は許可ドメイン（docs.anthropic.com・code.claude.com・github.com・cli.github.com・docs.github.com）に限定されており、業界の数値基準・動向は確認できない。許可ドメインは SSRF 対策のため、本スキルのために広げない。

専門領域の主張で、ユーザーが出典を提示せず手動確認の結果も得られない場合の既定の判定は「確認不能」とする。差分レポートでは「時点情報・未確認」として列挙し、本文側は誠実性の原則（推測・時点情報であることの明示）に沿った表現への修正を候補に挙げる。「確認不能」を「妥当」へ読み替えない。

Claude Code / gh / GitHub の仕様に関わる主張のみ、**reference-researcher（subagent_type: reference-researcher）**に依頼する。

```
subagent_type: reference-researcher
prompt: |
  目的: skills/<skill-name>/SKILL.md に含まれる Claude Code / gh / GitHub の仕様に関する主張が現在も妥当か確認する
  入力: Step 1 で抽出した、仕様に関わる主張の一覧（箇所・現在の記述）
  出力先: 報告のみ（ファイルは書かない）
  観点:
    - 主張ごとに 妥当 / 要改訂 / 確認不能 を判定し、出典 URL と確認日を付ける
    - 公式ドキュメントなど許可ドメインの一次情報だけを根拠にする
    - 出典が得られない主張は「確認不能」とし、断定しない
    - 専門領域の数値基準・業界動向は調査対象外（許可ドメイン外のため）
  適用ルール: .claude/rules/specialist-authoring.md（誠実性の原則）, .claude/rules/security.md（WebFetch の許可ドメイン・内部アドレス禁止）
```

ユーザーが出典 URL を提示した場合も、検証せずそのまま WebFetch に渡さない。許可ドメイン外・内部ネットワーク・loopback・メタデータエンドポイント宛ては拒否する（`.claude/rules/security.md` の SSRF 節）。許可ドメイン外の出典は、ユーザー自身が内容を確認した結果として受け取る。

### Step 3: 差分レポートを提示する

Step 1・2 の結果を統合し、次の形式で提示する。

| # | 用途 | 箇所 | 現状 | 改訂案 | 根拠（規約・出典 URL） | downstream 影響 |
| --- | --- | --- | --- | --- | --- | --- |

downstream 影響の列には、変更が Step 8 の再導入対象キー（ディレクトリ名（= `name`）・`specialist`・`specialist-model`・`specialist-effort`・`description`）に触れるかを明記する。時点情報で「確認不能」となった主張は、用途 b の候補として「時点情報・未確認」と明記して列挙する。

`mode=check` はここで終了する。ファイルは一切変更しない。

### Step 4: 適用範囲を確定する（mode=apply）

適用するのは次の 2 種類のみ。

- ユーザーが引数の改訂内容として明示したもの（用途 a）。引数で明示されているため承認済みとして扱い、そのまま適用対象とする
- Step 3 のレポートの候補のうち、ユーザーが承認したもの（用途 b・c）。`apply` 単独実行でも Step 1〜3 を再実行して差分を提示し、ユーザーの承認を得てから Step 5 へ進む

承認が無い候補は適用しない。規約違反（用途 c）でも、ユーザー指定の改訂と競合する場合は確認する。対象がスペシャリスト skill（`specialist: true` を持つ）で、ユーザー指定の改訂が誠実性の原則 3 項目や `specialist: true` を削る内容だった場合は、規約違反として停止し、ユーザーに確認する。手順型（`specialist` キーを持たない。init-claude-specialist など）には適用せず、逆に `specialist` キーを追加する改訂は規約違反として停止し確認する。

### Step 5: 改訂する（skill-author に委譲）

**skill-author（subagent_type: skill-author）**に、確定した範囲だけを改訂させる。

```
subagent_type: skill-author
prompt: |
  目的: skills/<skill-name>/SKILL.md を承認済みの改訂範囲だけ編集する
  入力: Step 4 で確定した改訂一覧（用途・箇所・改訂案）、Step 2 の出典付き確認結果
  出力先: skills/<skill-name>/SKILL.md（付属ファイルが必要な場合は同ディレクトリ配下のみ）
  観点:
    - 承認済み範囲外は変更しない
    - 対象がスペシャリスト skill の場合のみ、注意事項の誠実性の原則 3 項目と `specialist: true` を削らない
    - 対象が手順型（`specialist` キーなし）の場合は `specialist` キーを追加しない
    - 出典の無い主張は「推測」と明示し、時点情報は時点情報として書く
    - description は発火語・導線を保ち、`#` を含めない（含める場合はクォート）
    - 日本語・常体
  適用ルール: .claude/rules/specialist-authoring.md, .claude/rules/skill-authoring.md,
    .claude/rules/description-style.md, .claude/rules/japanese-style.md, .claude/rules/security.md
```

### Step 6: 品質を検証する（並列委譲）

**skill-reviewer（subagent_type: skill-reviewer）**と **frontmatter-linter（subagent_type: frontmatter-linter）**を同一メッセージ内で並列起動する。どちらにも検証対象 `skills/<skill-name>/` を限定して渡す。

skill-reviewer への委譲プロンプトには、汎用規約で誤判定させないよう対象の種別に応じて次を明記する。

**対象がスペシャリスト skill（`specialist: true` あり）の場合のみ:**

- `model` フィールド不要（`specialist-model` / `specialist-effort` で指定する）
- `## 検証` 節は省略可
- 本文は ペルソナ → 専門領域 → 回答スタイル → 参照フレームワーク・知識体系 → 注意事項 の 5 節構成（`.claude/rules/specialist-authoring.md`）

**対象が手順型（`specialist` キーなし。init-claude-specialist など）の場合:** `.claude/rules/skill-authoring.md` の基準でレビューさせる（`model` 必須、本文は 使い方 → フロー → 検証 → 注意事項）。あわせて `specialist` キーが追加されていないことを確認させる。

観点:

- skill-reviewer: 規約準拠・誠実性の原則 3 項目の残存・改訂が承認範囲を超えていないか
- frontmatter-linter: name とディレクトリ名の一致、`description` 内の `#`、`specialist` 系キーの値、`.claude/skills/<skill-name>` の symlink 整合

改訂でシェルコマンドや外部 URL の記述を追加した場合は、**security-auditor（subagent_type: security-auditor）**も並列に加える。

指摘事項は skill-author に差し戻し、修正後に再検証する。同一指摘が 3 回解消しない場合は修正を続けず、試行内容と行き詰まりの理由をユーザーに報告して判断を仰ぐ（`.claude/rules/debugging.md`）。

### Step 7: docs に反映する

`name`・`description`・スキル構成が変わった場合は `update-docs` スキルを呼び出し、CLAUDE.md のスキル一覧と構造ツリーを更新する。本文のみの改訂なら不要。

### Step 8: downstream への影響を案内する

次のキーを変更した場合は、downstream リポジトリで再導入と再セットアップが必要になる旨を案内する。`init-claude-specialist` が生成する agent の `model`・`effort`・`description` は、その時点の frontmatter から写し取られるため、再実行しない限り古いままになる。なお `init-claude-specialist` は frontmatter の `name` を読まず、スキルの**ディレクトリ名**を agent 名（`.claude/agents/specialists/<ディレクトリ名>.md`・`subagent_type`）に使う。

| 変更したキー | agent への影響 |
| --- | --- |
| `description` | agent の description が古いまま。起動条件の判定がずれる。さらに委譲 rule と CLAUDE.md の Specialist Agents 表の「相談領域」にも反映される（init の Step 4・5）ため、再実行するまでこれらも古いまま |
| `specialist-model` / `specialist-effort` | agent の model / effort が古いまま。CLAUDE.md の Specialist Agents 表の model / effort 列も再実行まで古いまま。キーを削除した場合は既定（`sonnet` / `low`）に戻る |
| `specialist` | `true` を外すと検出対象から外れるが、init は既存 agent を削除しない。旧 agent は残り、委譲 rule・CLAUDE.md の表の行も残るため、委譲され続ける。手動削除が必要 |
| ディレクトリ名（= `name`。規約で一致必須）を変更した場合 | 新しいディレクトリ名で agent が別に生成され、旧 agent ファイルと委譲 rule・CLAUDE.md の旧行が downstream に残る。手動削除が必要 |

案内する手順。

1. downstream で `npx skills add Fandhe-AI/agent-specialist-skills` を実行して再導入する
2. `init-claude-specialist` を再実行する（既存 agent の手動カスタマイズが疑われる場合は上書き前にユーザー確認される）
3. ディレクトリ名（= `name`）の変更時は、旧名の `.claude/agents/specialists/<旧名>.md` と、`.claude/rules/specialist-delegation.md`・CLAUDE.md の表の旧行を手動で削除する。可能なら名前の変更は避ける
4. `specialist: true` を外した場合も、該当 agent ファイルと委譲 rule・CLAUDE.md の行を手動で削除する

本文（ペルソナ・専門領域・回答スタイル・知識体系・注意事項）のみの改訂は、agent が起動時に skill を読み込むため再セットアップ不要で、再導入だけで反映される。

### Step 9: コミットする（任意）

ユーザーからコミットの指示があれば `create-commit` スキルでコミットを作成する。指示が無い場合は変更をそのままにして報告のみ行う。PR 作成は `create-pr`。

## 検証

`.claude/rules/verification.md` の 5 段階ゲートに従い、証拠を引用して完了を報告する。

- [ ] `mode=check`: `git status --short skills/<skill-name>/` が空で、ファイルが変更されていないことを確認する
- [ ] `mode=apply`: `git diff skills/<skill-name>/` を読み、承認済みの範囲だけが変更されていることを確認する
- [ ] `head -20 skills/<skill-name>/SKILL.md` で frontmatter が崩れていないことを確認する
- [ ] 対象がスペシャリスト skill の場合は `grep -n '^specialist: true' skills/<skill-name>/SKILL.md` で宣言が残っていることを確認する。手順型の場合は同コマンドで `specialist` キーが追加されていない（ヒットなし）ことを確認する
- [ ] 対象がスペシャリスト skill の場合は、注意事項に誠実性の原則 3 項目が残っていることを差分で確認する
- [ ] skill-reviewer と frontmatter-linter の報告が指摘ゼロであることを確認する（subagent の報告だけでなく、指摘が無い旨の本文を引用する）
- [ ] 構成変更時は update-docs 後の CLAUDE.md の差分を確認する

未実施の項目は「未検証」と明記する。

## 注意事項

- 時点情報を鵜呑みにしない。出典を確認できない主張は、改訂後も「推測」「時点情報」と明示したまま残す。確認できたと言えるのは、出典 URL と確認日が報告に含まれる場合に限る
- 非公開データや個別契約に基づく断定を skill へ書き足さない
- 1 回の apply で扱う改訂は 1 スキルに限る。複数スキルを更新する場合は、スキルごとに本スキルを実行する
- 付属ファイル（`sample/` 配下など）の改訂が必要な場合も、対象は `skills/<skill-name>/` 配下に限る。他スキル・`.claude/` 配下は触らない
- シークレット・トークンを改訂内容や出典メモに混入させない。検出した場合は処理を中止して報告する（`.claude/rules/security.md`）
- `--no-verify` などのフック回避は使わない（`.claude/rules/conventional-commits.md`）
- 本スキルの手順そのものを変更したい場合は、`_/dotclaude/skills/update-skill/` で編集し、ファイル単位の `mv _/dotclaude/skills/update-skill/SKILL.md .claude/skills/update-skill/SKILL.md` で配置する。ディレクトリ単位の `mv` は既存ディレクトリの内側へ入れ子で移動する（`.claude/skills/update-skill/update-skill/`）ため使わない

## 関連

**Agents**: skill-explorer, reference-researcher, skill-author, skill-reviewer, frontmatter-linter, security-auditor

**Rules**: delegation, delegation-impl, specialist-authoring, skill-authoring, description-style, japanese-style, verification, debugging, security, dotclaude-via-temp, conventional-commits

**Skills**: create-skill, contribute-skill, init-claude-specialist, update-docs, create-commit, create-pr

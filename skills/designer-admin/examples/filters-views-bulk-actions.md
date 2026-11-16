# 例: 絞り込み・保存したビュー・一括操作（案件一覧）

案件一覧に、絞り込み・保存したビュー・一括操作を足す例。条件の置き場所と見せ方、個人用と共有のビュー、ページをまたぐ選択の扱い、戻せない操作の確認と、戻せる操作の取り消し、一部だけ失敗したときの結果の示し方を決める。題材は `list-from-db-columns.md` と同じ架空のリフォーム会社の社内システムで、実在の製品・企業の画面の模倣は含まない。「毎朝同じ条件を入れ直している」「まとめて変えたいが何件に効くか分からない」「絞り込んだら 0 件になった」と相談されたとき、一括操作の確認と取り消しを設計するときに開く。配色と架空のデータは 5 例共通の仮置きで、写さない。

## 依頼

- 製品: 架空のリフォーム会社「こがね住設」の社内システム「こがね案件管理」（架空）。案件の一覧は `list-from-db-columns.md` で作り直し済みとする
- 依頼文（架空）: 「毎朝、同じ条件を入れ直している。担当をまとめて替えたいが、何件に効くのか分からず怖い。間違えて消したらどうなるのか」
- 現状（架空）: 一覧の上に 8 項目の検索欄を常時並べ、「検索」を押すと条件が消えて、何が適用中か分からない。行のチェックと、表の下の「一括処理」ボタン（常に押せる）がある。ページ送りしても選択が残り、見えていない行にも効く。削除は確認なしで「処理しました」と出るだけ。絞り込みの結果が 0 件のときは「データがありません」と出る
- 想定ユーザーと作業: 工程管理の担当（小野寺 隆。管理者の権限は持たない）。毎朝、今日対応の案件を開き、担当が決まっていない案件へ担当を割り当て、期限を延ばす案件をまとめて動かす。月に数回、登録ミスの案件を削除する（置いた前提。一括操作と削除は、管理者でなくても使える）。共有のビューを変えられるのは、事務と管理者の権限を持つ柳瀬 結衣（管理者）だけ（置いた前提）。日中のスマートフォンでは、自分の担当を探して開くだけ
- 範囲外: 一覧の列（`list-from-db-columns.md`）、権限の設計、動きと応答時間、帳票

### 根拠の範囲（先に読む）

- 出典のある事実は次のとおり。絞り込みの条件を畳める場合は、閉じた状態に適用中の印を出す（S112）。畳むことは一覧性のために検討してよい（S099）。属性が異なる絞り込みは AND で結ぶ（S114）。条件の並びは利用者にとっての関連で決め（S131）、内部の用語は出さない（S132）。保存したビューを持つなら、初期状態に戻す手段も置く（S130）。設定した表示順・条件をどこまで保持するかは決める（S127）。役職ごとに一覧でやりたい作業の範囲が変わる（S128）。同じ画面でも担当・管理者・サポートで見たい列が違う（S027。個人の実装メモ）。一括操作は、全選択・選択時に現れる操作バー・結果の明示と取り消し（S129）。一括操作のボタンは選択後に活性にし（S127）、選択件数を併せて出し、見えなくせず非活性にする（S121）。選択が 0 件のときは件数を出さない（S109）。「処理」「実行」のような操作の対象が不明なラベルは避ける（S124）。日常の操作に確認ダイアログを付けず（S134）、取り返しのつかない操作だけ中断して確認する（S133）。赤字にアイコンを添える（S123）。表のツールバーの操作は 5 つまで（S111）。1 ページの行数の理想は決められないが、20 行から始める（S014）。20 件を超える表はページ送りを使う（S015）。ページ送りを強く推奨する（S004）。無限スクロールにはしない（S118）。主のボタンは 1 画面に 1〜2 個（S122）。選択を解除する条件は、Cloudscape がページ送り・並べ替え・絞り込み・表示件数の変更（S110）、freee Vibes が表示条件の変更（S118）、PatternFly が保持する場合を挙げる（S113）。全選択の押下は、デジタル庁がヘッダーのチェックボックスで全行の選択（S116）、SmartHR が混在状態では全解除（S269。要旨・逐語引用なし）。一覧の操作を「絞り込んだ結果への操作」と「全体への操作」に分ける考え方（S117）。「検索条件に該当するオブジェクトが無い」ことと、機能の説明で使用を促す空の状態は別に用意する（S099、S094）。空の状態の文言が実際と違うと害が大きい（S101）。キーボードで全部の流れが操作できる（S318。Vercel の自社の指針）。装飾は、押せる・選択している・重要を表すために使う（S291。記事の主張）
- 要旨の参照（逐語引用なし）: 一括操作のエリアに、未選択・N 件選択・このページの全件・一覧の全件を言葉で出し、一括操作のボタンは 4 つ程度（S268。要旨）。ページ送りで選択を維持しない（S269。要旨）。ボタンは動詞の終止形で、「する」を省く（S278。要旨）。絞り込みは、ドロップダウンのパネルで足りるうちはそれで済ませ、複雑ならダイアログ、モバイルはダイアログ（S270。要旨）。490 px 未満では、作業に不可欠でない一括操作を隠してよい（S266。要旨）。50 件超でページ送り（S250。要旨。数値の根拠には使わず、食い違いの例として挙げる）
- 本 skill の目安（出典なし）: 配色、寸法、ページの件数 5（動作を見せるための確認用。実運用の件数は S014・S015 を根拠に、20 件前後から決める）、`今日対応` の定義、60rem の境目、サンプルの値のすべて、削除の規則（入金のある案件は削除しない）、期限を 7 日延ばす・完了案件の担当は変えられない、という操作の規則
- 出典が見当たらないもの（本 skill の整理）: 個人用と共有のビューの区別、既定のビューの決め方、一部失敗の結果の示し方、チップで条件を外す操作、取り消しの表示を自動で消さないこと。読んだ範囲の台帳の引用原文には、これらを直接述べる行が無かった
- 外れる点: SKILL.md の「未選択のときの一括ボタン」は、非活性で見せる（S121、S123）と、選択後に出す（S268。要旨）に割れている。この例は、機能の存在に気づける非活性を選ぶ。1 件目の「表示を切り替えると選択を解除する」と同じ向きで、割れ方は「ページをまたぐ選択」に書く

## 目的の一文

毎朝の同じ絞り込みを 1 回の押下にし、まとめて変える操作の対象・結果・取り消しを、実行前と実行後の両方で分かる形にする。

## 削るもの

| 前（現状） | 扱い | 後 | 理由 |
|---|---|---|---|
| 8 項目の常時の検索欄 | 絞る・畳む | 担当・工種・対応状況・未入金あり・今日対応の 5 つ。閉じた状態でも「絞り込み（N 件の条件を適用中）」を出す | 関連で並べ（S131）、畳んでも適用中が分かる（S112）。5 つは本 skill の目安 |
| 「検索」ボタンで条件が消える | 外す | 適用中の条件をチップで常に出し、1 つずつ外せる | 本 skill の整理。件数が多く即時の反映が重いときは、「適用」ボタンを足す |
| 毎朝の入力し直し | 置き換える | 保存したビュー（共有 4 つ・自分用 1 つ） | 役割ごとに見たい範囲が違う（S128、S027）。初期状態に戻す手段も置く（S130） |
| 常に押せる「一括処理」 | 変える | 選択前は非活性。選択後に、動詞のボタン 3 つ | 選択後に活性（S127）、存在に気づける（S121）、対象の不明なラベルを避ける（S124） |
| 「0 件選択中」の表示 | 出さない | 選択が無いときは件数ではなく、操作の入口の説明を出す | S109 |
| 持ち越される選択 | 解除する | 条件・ページの変更で解除し、解除したことを言葉で出す | S110、S118。見えない行に効かせない |
| 削除の確認なし・日常操作の確認 | 分ける | 戻せない削除だけ確認し、戻せる操作は確認なしで取り消しを付ける | S133、S134、S129 |
| 「データがありません」 | 2 つに分ける | 案件が 1 件も無い: 「案件はまだ登録されていない。」で、表を出さない。条件に合う案件が 0 件: 「条件に合う案件は 0 件。別の条件を試すか、条件を解除する。」で、表の見出しとチップを残し、解除のボタンを置く | S094、S099。文言は実際の状態に合わせる（S101） |

## 構成

上から、見出し → ビュー（共有・自分用）→ ビューの現在の状態の 1 行 → 絞り込み（畳める）→ 適用中の条件のチップ → 一括操作の帯 → 結果の領域 → 表 → ページ送り、の順にする。一覧が主役で、指標のカードは置かない（`list-from-db-columns.md`）。

### 絞り込みの置き場所（本 skill の整理）

| 置き場所 | 向く条件 | この例の判断 |
|---|---|---|
| 表の上で畳める帯 | 条件が 5 つ前後で、毎回使う条件はビューに保存する | 採用。閉じても適用中の数とチップが残る（S112） |
| 左の常設の欄 | 条件が多く、広い画面で一覧と並べて使う | 採用しない。条件が 5 つで、狭い幅で場所を取る |
| ダイアログ | 条件が複雑で広さが要る。モバイル（S270。要旨） | 採用しない。条件が単純で、一覧を見ながら変えたい |

### 保存したビュー

| 種類 | 持つもの | 誰が変えるか |
|---|---|---|
| 共有 | 今日対応（既定）・期限超過・未入金あり・担当未割当 | 管理者（柳瀬 結衣）だけ（置いた前提）。小野寺 隆を含む担当は選ぶだけ |
| 自分用 | 自分の担当。「現在の条件を保存」で足せる | 本人 |
| 既定 | 画面を開いたときのビュー。この例は共有の「今日対応」 | 管理者が決める。利用者ごとの既定の切り替えは、コードに持たない |

- ビューは、条件（絞り込み）の組。ビューのボタンを押すと、条件がそのビューのとおりになる。条件を手で変えると、どのビューも押された状態でなくなり、「保存していない条件」と出る。この状態でだけ、「現在の条件を保存」が押せる
- ボタンに件数を出す（朝の振り分けに使う）。並べ替えの列と向きの保持は、この例のコードに持たない（S127 は保持の範囲を決めることを促す）。条件の保持は、ビューに入れる
- 初期状態に戻す手段（S130）は、「条件をすべて解除」と、既定のビューのボタンである

### ページ送りか、無限スクロールか（出典が割れる）

| 出典 | 述べること |
|---|---|
| S014（Primer） | 1 ページの理想の行数は決められないが、20 行から始める |
| S015（GitLab） | 20 件を超える表はページ送りを使う |
| S250（Polaris。要旨） | 50 件超でページ送り。S014・S015 の数値と食い違う |
| S004（Cloudscape） | 連続スクロールでは固定の見出しを使わない。全件に楽に一貫して届くよう、ページ送りを強く推奨する |
| S118（freee Vibes） | 無限スクロールにはしない |
| S008（Cloudscape） | 比較のために全件を 1 画面で見たいときは、progressive loading を使う |

- この例はページ送りを選ぶ。一括操作があり、このページと条件に合う全件を言い分ける境目が要るため（本 skill の整理）。朝の作業は、今日対応の案件を処理することで、全件の比較ではない（S008 の条件に当たらない）。20 件を超えたらページ送り（S015）、1 ページは 20 件前後から（S014）。50 は S250 の要旨にある別の目安で、この例は採らない

### ページをまたぐ選択（出典が割れる）

| 一方 | 他方 |
|---|---|
| 選択はページ送り・並べ替え・絞り込みで解除する（Cloudscape。S110）。表示条件の変更で未選択に戻す（freee Vibes。S118）。ページ送りで維持しない（SmartHR。S269。要旨） | 選択の状態は保持する場合がある（PatternFly。S113） |

- どちらも標準にしない。選ぶ条件は、一括操作の対象が、見えているページだけか、条件に合う全件か。保持するなら、件数と範囲を言葉で出す（S268。要旨）
- この例は、解除を既定にし、「条件に合う N 件すべてを選ぶ」を、明示の操作として足した。朝の作業は、今日対応の数件から数十件を、そのページで見ながら動かすため。全件の選択は、条件に合う件数を言葉で出す（S268。要旨）
- 全件を選んだあとの、ページ送りは選択を保つ（条件が同じなので対象が変わらない）。1 行を外すと、全件のうちの 1 行を除いた選択になる
- ヘッダーのチェックボックスは、一部だけ選択された状態で押すと全選択にした（S116 は全行の選択と述べる。混在状態の記述は台帳の要旨）。SmartHR は全解除（S269。要旨）。選んだ理由は、解除の手段が別（「選択を解除」と Esc）にあるため。解除の手段が無い画面は、全解除のほうが安全（本 skill の整理）

### 操作の種類と確認

| 操作 | 戻せるか | 確認 | 取り消し |
|---|---|---|---|
| 担当を割り当て | 戻せる | 付けない（日常。S134） | 結果の領域に「元に戻す」（S129） |
| 期限を 7 日延ばす | 戻せる | 付けない | 同上 |
| 削除 | 戻せない（置いた前提） | ダイアログ（S133） | 付けない。「元に戻せない」と先に言う |

- 戻せない削除のダイアログは、件数・対象の番号・元に戻せないこと・削除しない案件（入金のある案件）を、実行前に出す。実行のボタンは、「削除」ではなく「2 件を削除」と、件数を言う。既定の焦点は「やめる」に置く
- 削除のボタンは、赤字・太い枠・地で示す。S123 はアイコンを添えると述べる。この例のコードは枠と文字で示し、アイコンは付けていない

### 一部だけ失敗したとき

- 結果の領域に、成功の件数、失敗の件数、失敗した案件の番号と理由を並べる。例: 11 件の担当を割り当てた。1 件は処理できなかった。2608-134 は完了した案件の担当は変えられない。理由は案件ごとに言う
- 「処理できなかった N 件だけを表示」で、失敗した案件だけを一覧に出す（条件のチップに、失敗の件数が入る）。直して、また選べる
- 「元に戻す」は、成功した分だけに効く。結果は、自動で消さない（キーボードと読み上げの利用者を急かさない。本 skill の整理）。取り消せる時間と動きは、designer-interaction（導入されていれば）に渡す。応答時間の出典は S102（1 秒）、S103（10 秒）で、この例は数値を決めない
- 操作で行が条件から外れることがある（今日対応で期限を延ばすと、今日対応から外れる）。結果に「表示中の案件は N 件になった」と出す

### 狭い幅

1 件目と同じく、60rem 未満で列を減らす。選択の列と一括操作の帯は広い画面の作業として隠す（S266 は要旨。作業に不可欠でないときだけ隠してよい）。ビューと絞り込みと条件のチップは、狭い幅でも使える。広い幅の作業（担当の割り当て・削除）は、狭い幅から外れる。実際の作業で、外出先から担当を割り当てる必要があるなら、この判断は変わる（本 skill の整理）。

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| ビューの並び | 共有、自分用の順。各ボタンに件数。押された状態を `aria-pressed` で示す | 本 skill の整理 |
| 条件の結び | 属性が違う条件は AND。同じ属性の中は選択肢が 1 つ | AND は S114。この例は同じ属性を 1 つしか選べない |
| 条件のチップ | 条件ごとに 1 つ。「×」のボタンは、読み上げで「担当: 小野寺 隆 を外す」。外したあと、焦点は次のチップ（最後を外したときは直前のチップ）。チップが残らなければ絞り込みの見出し。「条件をすべて解除」には移さない | 本 skill の整理 |
| 選択 | 見出しのチェックはこのページの全選択。混在状態を表示する（`indeterminate`）。解除は「選択を解除」と Esc | S116、S318 |
| 選択件数 | 選択があるときだけ、「このページの 5 件を選択中」「条件に合う 6 件すべてを選択中」「5 件を選択中」。選択が無いとき、件数は出さない | S121、S109。書き方は S268（要旨） |
| 一括操作の帯 | 選択が無いときはボタンが非活性（`disabled`）で、操作の入口を説明する | S121、S123、S127 |
| 削除の確認 | `dialog`。件数・番号・元に戻せない・削除しない案件。既定の焦点は「やめる」。やめた後の焦点は「削除」のボタン、削除した後の焦点は表の見出し | S133。焦点の戻し先は本 skill の整理 |
| 結果の領域 | `role="status"`。自動で消さない。失敗の案件の一覧と、失敗だけを表示するボタン | 本 skill の整理 |
| ページの件数 | 5（確認用）。実運用は 20 件前後から。ページ送りの後、焦点は表の見出し | 確認用の 5 は本 skill の目安。20 は S014、S015 |

### 配色の追加（実際に塗られた組の実測。WCAG の相対輝度式）

文字の基準 4.5:1 は、本 skill の台帳に WCAG 本文の逐語が無く未照合。非文字の 3:1 は S065。ほかの組は `list-from-db-columns.md` の表と同じ。

| 組み合わせ | ライト | ダーク |
|---|---|---|
| 削除ボタンの文字 `--over` / ボタンの地 `--over-bg` | 6.62 | 7.55 |
| 削除ボタンの太い枠 `--over` / 一括操作の帯 `--head`（非文字） | 6.48 | 7.26 |

- リンク風ボタン（アクセント）/ 帯の地は 5.26・7.91。非活性のボタンの文字は基準の対象外として数値を主張せず、区別は破線の枠と操作の入口の説明の文で示す

## 文言

絞り込みの見出し（「絞り込み（1 件の条件を適用中）」）・チップ・一括操作のボタン・選択の状態・空の 2 場面の文言は、上の「削るもの」にある。ここは、そこに無いものだけ。

| 場所 | before | after | 理由 |
|---|---|---|---|
| 条件の解除 | クリア | 条件をすべて解除 | 何を解除するかを言う |
| ビューの状態 | （無し） | ビュー: 今日対応（共有）／ビュー: 保存していない条件 | 条件がビューと同じかを示す |
| 全件の選択 | （無し） | 条件に合う 6 件すべてを選ぶ | このページと全件を言い分ける（S268。要旨） |
| 削除の確認 | 削除しますか | 1 件の案件を削除／削除した案件は元に戻せない。／1 件を削除（実行）、やめる | 件数と戻せないことを先に言う（S133） |
| 結果（成功） | 処理しました | 11 件の担当を 久保田 誠 に割り当てた。 | 何を何件したかを言う |
| 結果（一部失敗） | （無し） | 1 件は処理できなかった。2608-134　完了した案件は担当を変えられない | 理由を案件ごとに言う |

## コード断片

1 ファイルの HTML。ブラウザーで開くとそのまま動く。外部のライブラリ・フォント・画像・計測は使わない。データの描画は `textContent` と要素の組み立てで行い、生のデータを `innerHTML` に入れない。ダークは `prefers-color-scheme` で切り替える。「今日」と利用者は固定してある。URL の末尾に `#page=3` でページの件数、`#rows=0` で案件なしにして見られる。

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>こがね案件管理 案件一覧（絞り込み・ビュー・一括操作）</title>
<style>
:root { color-scheme: light dark; --bg: #f1f0ea; --surface: #fbfaf6; --head: #e7e6dc; --hover: #f0efe6; --sel: #e4e9c6; --text: #25251e; --text-2: #52524a; --line: #76755f; --rule: #d2d1c4;
  --accent: #55631a; --on-accent: #ffffff; --over: #9b1c22; --over-bg: #f9e3e1; --act: #7a4a00; --act-bg: #f8e8c6; --prog: #234f7d; --prog-bg: #dfeaf6; --done: #17604d; --done-bg: #dcefe8; --hold: #4f4f46; --hold-bg: #e6e5dc; }
@media (prefers-color-scheme: dark) { :root { --bg: #171814; --surface: #1f201b; --head: #2a2b24; --hover: #272820; --sel: #2f3718; --text: #ecebe1; --text-2: #b9b8aa; --line: #98978a; --rule: #3a3b32; --accent: #b9c96b; --on-accent: #1a2005; --over: #ff9f98; --over-bg: #3d1f1e; --act: #f2bf63; --act-bg: #392a0c; --prog: #9cc4f0; --prog-bg: #1b2b3e; --done: #86d6b8; --done-bg: #173128; --hold: #bdbcae; --hold-bg: #33332c; } }
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--text); font: 0.875rem/1.5 system-ui, "Hiragino Sans", "Yu Gothic", "Noto Sans JP", sans-serif; }
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.page { max-width: 90rem; margin: 0 auto; padding: 0.75rem 1rem 2rem; }
h1 { margin: 0 0 0.5rem; font-size: 1.125rem; }
h1 small { margin-left: 0.5rem; color: var(--text-2); font-weight: 400; font-size: 0.8125rem; }
button, select, input { font: inherit; color: inherit; }
button, select { min-height: 2rem; padding: 0.25rem 0.625rem; background: var(--surface); border: 1px solid var(--line); border-radius: 6px; cursor: pointer; }
button:disabled { color: var(--text-2); border-style: dashed; cursor: default; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.vgroups { display: flex; flex-wrap: wrap; gap: 0.375rem 1rem; align-items: center; }
.vgroup { display: flex; flex-wrap: wrap; gap: 0.375rem; align-items: center; }
.vgroup > span { color: var(--text-2); font-size: 0.8125rem; }
.vgroup button[aria-pressed="true"] { background: var(--accent); color: var(--on-accent); border-color: var(--accent); font-weight: 700; }
.vgroup small { margin-left: 0.25rem; font-size: 0.75rem; }
.viewline { margin: 0.375rem 0; color: var(--text-2); }
.filters { margin: 0.25rem 0; background: var(--surface); border: 1px solid var(--line); border-radius: 6px; }
.filters summary { padding: 0.375rem 0.625rem; cursor: pointer; font-weight: 600; }
.fgrid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 11rem), 1fr)); gap: 0.5rem 1rem; padding: 0.25rem 0.625rem 0.625rem; align-items: end; }
.fgrid label { display: grid; gap: 0.125rem; min-width: 0; }
.fgrid select { width: 100%; }
.fgrid .chk { display: flex; align-items: center; gap: 0.375rem; min-height: 2rem; }
.fgrid input[type=checkbox], td input[type=checkbox], th input[type=checkbox] { width: 1.125rem; height: 1.125rem; margin: 0; accent-color: var(--accent); }
.chips { display: flex; flex-wrap: wrap; gap: 0.375rem; margin: 0.375rem 0; padding: 0; list-style: none; align-items: center; }
.chips li { display: inline-flex; align-items: center; max-width: 100%; border: 1px solid var(--line); border-radius: 999px; background: var(--surface); }
.chips li span { padding: 0.125rem 0.25rem 0.125rem 0.625rem; overflow-wrap: anywhere; }
.chips li button { min-height: 1.75rem; min-width: 1.75rem; padding: 0; border: 0; border-radius: 999px; background: none; }
.bulk { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem 0.75rem; margin: 0.5rem 0; padding: 0.375rem 0.625rem; background: var(--head); border: 1px solid var(--line); border-radius: 6px; }
.bulk .picked { margin: 0; flex: 1 1 14rem; }
.bulk .ops { display: flex; flex-wrap: wrap; gap: 0.375rem; align-items: center; }
.link { padding: 0 0.25rem; border: 0; background: none; color: var(--accent); text-decoration: underline; text-underline-offset: 3px; min-height: 1.5rem; }
.danger { border: 2px solid var(--over); background: var(--over-bg); color: var(--over); font-weight: 700; }
.result { margin: 0.5rem 0; padding: 0.5rem 0.75rem; background: var(--surface); border: 1px solid var(--line); border-radius: 6px; }
.result p { margin: 0 0 0.25rem; } .result ul { margin: 0.25rem 0; padding-left: 1.25rem; }
.tw { position: relative; overflow-x: auto; }   /* 200% など表が収まらないときだけ、表の中で横に動く。焦点が入るのでキーボードで動かせる */
table { width: 100%; border-collapse: separate; border-spacing: 0; background: var(--surface); }
caption { padding: 0.375rem 0.5rem; text-align: left; font-weight: 700; }
th, td { padding: 0.375rem 0.625rem; text-align: left; vertical-align: top; border-bottom: 1px solid var(--rule); }
thead th { background: var(--head); border-bottom: 1px solid var(--line); font-weight: 600; vertical-align: bottom; }
th[scope="row"] { font-weight: 400; }
.num { text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
.date { white-space: nowrap; font-variant-numeric: tabular-nums; }
.rel { display: block; color: var(--text-2); font-size: 0.8125rem; }
.dash { color: var(--text-2); }
.c-sel { width: 2.25rem; padding-right: 0; }
.c-case { width: 38%; }
.case { min-width: 0; overflow-wrap: anywhere; }
.case-no { font-weight: 700; font-variant-numeric: tabular-nums; color: var(--accent); }
.cust { margin-left: 0.5rem; }
.title { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; line-clamp: 2; overflow: hidden; color: var(--text-2); font-size: 0.8125rem; }
.st { display: inline-flex; gap: 0.25rem; padding: 0 0.5rem; border: 1px solid currentColor; border-radius: 4px; white-space: nowrap; font-weight: 600; font-size: 0.8125rem; }
.st-over { color: var(--over); background: var(--over-bg); } .st-act { color: var(--act); background: var(--act-bg); } .st-prog { color: var(--prog); background: var(--prog-bg); }
.st-done { color: var(--done); background: var(--done-bg); } .st-hold { color: var(--hold); background: var(--hold-bg); }
tbody tr.is-selected > * { background: var(--sel); }
.empty { padding: 1rem 0.75rem; background: var(--surface); border-bottom: 1px solid var(--rule); } .empty p { margin: 0 0 0.5rem; }
.pager { display: flex; flex-wrap: wrap; gap: 0.25rem 0.5rem; align-items: center; margin: 0.5rem 0; }
dialog { max-width: min(30rem, calc(100vw - 2rem)); padding: 1rem; background: var(--surface); color: var(--text); border: 1px solid var(--line); border-radius: 8px; }
dialog::backdrop { background: rgb(0 0 0 / 0.5); } dialog h2 { margin: 0 0 0.5rem; font-size: 1rem; }
dialog input[type=text] { width: 100%; min-height: 2rem; padding: 0.25rem 0.5rem; background: var(--surface); border: 1px solid var(--line); border-radius: 6px; }
dialog .acts { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 0.5rem; margin-top: 0.75rem; }
@media (max-width: 59.99rem) {   /* 列を減らす。選択の列と一括操作は広い画面だけ */
  .page { padding: 0.5rem 0.75rem 1.5rem; }
  .c-sel, .c-owner, .c-amount, .c-unpaid, .bulk { display: none; }
  .c-case { width: auto; }
  th, td { padding: 0.375rem 0.375rem; }
  .cust { display: block; margin-left: 0; }
}
</style>
</head>
<body>
<div class="page">
  <h1>案件一覧<small>こがね案件管理（架空）。今日は 2026/11/16、利用者は小野寺 隆（工程管理の担当）として表示する</small></h1>
  <div class="vgroups" role="group" aria-label="ビュー">
    <div class="vgroup" id="v-shared" role="group" aria-label="共有のビュー"><span>共有</span></div>
    <div class="vgroup" id="v-mine" role="group" aria-label="自分用のビュー"><span>自分用</span>
      <button type="button" id="save-view">現在の条件を保存</button></div>
  </div>
  <p class="viewline" id="viewline"></p>
  <details class="filters" id="filters">
    <summary id="fsum"></summary>
    <div class="fgrid">
      <label>担当<select id="f-owner"></select></label>
      <label>工種<select id="f-kind"></select></label>
      <label>対応状況<select id="f-st"></select></label>
      <label class="chk"><input type="checkbox" id="f-unpaid">未入金あり</label>
      <label class="chk"><input type="checkbox" id="f-today">今日対応（期限超過か、期限が今日）</label>
    </div>
  </details>
  <ul class="chips" id="chips" aria-label="適用中の条件"></ul>
  <div class="bulk" id="bulk" role="region" aria-label="一括操作">
    <p class="picked" id="picked" role="status"></p>
    <div class="ops">
      <label>担当 <select id="assignee"></select></label>
      <button type="button" data-op="assign">担当を割り当て</button>
      <button type="button" data-op="extend">期限を 7 日延ばす</button>
      <button type="button" data-op="remove" class="danger">削除</button>
    </div>
  </div>
  <div class="result" id="result" role="status" hidden></div>
  <div class="tw" id="tw" role="region" aria-labelledby="cap" tabindex="0">
  <table id="t">
    <caption id="cap" tabindex="-1"></caption>
    <thead><tr>
      <th scope="col" class="c-sel"><input type="checkbox" id="all" aria-label="このページの案件をすべて選択"></th>
      <th scope="col" class="c-case">案件</th><th scope="col">対応状況</th><th scope="col">次の期限</th>
      <th scope="col" class="c-owner">担当</th><th scope="col" class="c-amount num">見積金額（円）</th><th scope="col" class="c-unpaid num">未入金（円）</th>
    </tr></thead>
    <tbody id="rows"></tbody>
  </table>
  </div>
  <div class="empty" id="empty" hidden></div>
  <nav class="pager" id="pager" aria-label="ページ送り">
    <button type="button" id="prev">前のページ</button><span id="pageno"></span><button type="button" id="next">次のページ</button>
  </nav>
</div>
<dialog id="dlg" aria-labelledby="dlg-h">
  <form method="dialog">
    <h2 id="dlg-h"></h2><div id="dlg-body"></div>
    <div class="acts"><button type="button" id="dlg-cancel">やめる</button><button type="submit" value="ok" id="dlg-ok"></button></div>
  </form>
</dialog>
<script>
// 架空のデータ。今日と利用者は固定。件数は確認用の値（#page=3 でページ件数、#rows=0 で案件なし）
const TODAY = '2026-11-16', ME = '小野寺 隆';   // ME は工程管理の担当で、管理者ではない
const PAGE = Math.max(1, Number((/page=(\d+)/.exec(location.hash) || [0, 5])[1]));   // 0 以下は 1 にする
const dayNum = (s) => { const [y, m, d] = s.slice(0, 10).split('-').map(Number); return Math.round(Date.UTC(y, m - 1, d) / 864e5); };
const T = dayNum(TODAY), addDays = (s, n) => new Date((dayNum(s) + n) * 864e5).toISOString().slice(0, 10);
let CASES = [
  { no: '2611-018', customer: '松尾 恵子 様', title: 'キッチンの入れ替え（壁付けから対面へ）', kind: '水まわり', owner: '柳瀬 結衣', stage: '見積', due: '2026-11-13', updated: '2026-11-09', amount: 1284000, paid: null },
  { no: '2611-021', customer: '株式会社 北山ハウジングサービス 賃貸管理部 ご担当者様', title: '外壁塗装と屋上防水の同時工事（全 12 棟のうち第 3 期の 4 棟、足場は 2 期の仮設を再利用）', kind: '外装', owner: '小野寺 隆', stage: '施工', due: '2026-11-16', updated: '2026-11-14', amount: 12480000, paid: 6240000 },
  { no: '2610-097', customer: '田所 勝 様', title: '浴室の改修', kind: '水まわり', owner: '佐伯 和也', stage: '契約', due: '2026-11-11', updated: '2026-11-02', amount: 1960000, paid: 588000 },
  { no: '2611-003', customer: '荒井 美穂 様', title: '玄関ドアの交換', kind: '建具', owner: '三好 彩', stage: '現地調査', due: '2026-11-17', updated: '2026-11-13', amount: null, paid: null },
  { no: '2610-088', customer: '森下 義雄 様', title: '洗面台の交換', kind: '水まわり', owner: '久保田 誠', stage: '施工', due: '2026-11-25', updated: '2026-11-12', amount: 98000, paid: 98000 },
  { no: '2610-074', customer: '石渡 聡 様', title: '屋根の葺き替え', kind: '外装', owner: '佐伯 和也', stage: '施工', due: '2026-12-04', updated: '2026-11-10', amount: 3780000, paid: 1890000 },
  { no: '2609-201', customer: '宮内 さつき 様', title: '和室の洋室化', kind: '内装', owner: '柳瀬 結衣', stage: '保留', due: null, updated: '2026-10-05', amount: 2350000, paid: null },
  { no: '2608-134', customer: '有限会社 青葉ベーカリー 様', title: '店舗厨房の床と排水の改修', kind: '水まわり', owner: '三好 彩', stage: '完了', due: null, updated: '2026-10-30', amount: 5420000, paid: 5420000 },
  { no: '2611-009', customer: '尾上 孝 様', title: '外構フェンスの補修', kind: '外装', owner: '小野寺 隆', stage: '契約', due: '2026-11-16', updated: '2026-11-10', amount: 412500, paid: 0 },
  { no: '2611-025', customer: '河合 澄子 様', title: '窓の断熱改修（内窓 8 か所）', kind: '建具', owner: '久保田 誠', stage: '見積', due: '2026-11-18', updated: '2026-11-15', amount: 1176000, paid: null },
  { no: '2610-061', customer: '中條 保 様', title: 'トイレの交換', kind: '水まわり', owner: '柳瀬 結衣', stage: '施工', due: '2026-11-14', updated: '2026-11-13', amount: 286000, paid: 100000 },
  { no: '2611-030', customer: '野沢 公平 様', title: '壁紙の張り替え', kind: '内装', owner: null, stage: '受付', due: '2026-11-16', updated: '2026-11-16', amount: null, paid: null }
];
const mr = /rows=(\d+)/.exec(location.hash); if (mr) CASES = CASES.slice(0, Number(mr[1]));
const STAFF = ['柳瀬 結衣', '小野寺 隆', '佐伯 和也', '三好 彩', '久保田 誠'], KINDS = ['水まわり', '外装', '内装', '建具'];
const ST = { over: ['▲', '期限超過'], act: ['◆', '要対応'], prog: ['●', '進行中'], hold: ['‖', '保留'], done: ['✓', '完了'] };
function d(r) {
  const diff = r.due ? dayNum(r.due) - T : null; let st = 'prog';
  if (r.stage === '完了') st = 'done'; else if (r.stage === '保留') st = 'hold';
  else if (diff !== null && diff < 0) st = 'over'; else if (diff !== null && diff <= 2) st = 'act';
  return { ...r, diff, st, elapsed: T - dayNum(r.updated), unpaid: r.amount === null || r.paid === null ? null : r.amount - r.paid };
}
const isToday = (r) => r.st === 'over' || r.diff === 0;
const BLANK = { owner: '', kind: '', st: '', unpaid: false, today: false, ids: null };
const SHARED = [{ id: 'today', name: '今日対応', f: { today: true }, def: true }, { id: 'over', name: '期限超過', f: { st: 'over' } },
  { id: 'unpaid', name: '未入金あり', f: { unpaid: true } }, { id: 'none', name: '担当未割当', f: { owner: '-' } }];
const MINE = [{ id: 'mine', name: '自分の担当', f: { owner: ME } }];
const full = (f) => ({ ...BLANK, ...f });
const same = (a, b) => ['owner', 'kind', 'st', 'unpaid', 'today'].every((k) => a[k] === b[k]) && !a.ids && !b.ids;
const match = (r, f) => (!f.owner || (f.owner === '-' ? !r.owner : r.owner === f.owner)) && (!f.kind || r.kind === f.kind) && (!f.st || r.st === f.st)
  && (!f.unpaid || r.unpaid > 0) && (!f.today || isToday(r)) && (!f.ids || f.ids.includes(r.no));
const cmp = (a, b) => (a.due === b.due ? 0 : a.due === null ? 1 : b.due === null ? -1 : a.due < b.due ? -1 : 1) || b.elapsed - a.elapsed || (a.no < b.no ? -1 : 1);
let F = full(SHARED[0].f), page = 0, sel = new Set(), allMatch = false, undo = null, list = [], rows = [];
const $ = (id) => document.getElementById(id);
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; };
const yen = (n) => n.toLocaleString('ja-JP'), ymd = (s) => s.slice(0, 10).replaceAll('-', '/');
const isSel = (no) => allMatch ? list.some((r) => r.no === no) : sel.has(no);
const ids = () => allMatch ? list.map((r) => r.no) : [...sel];
const clearSel = () => { sel = new Set(); allMatch = false; };
const opt = (sel_, items, first) => { sel_.replaceChildren(...[[first[0], first[1]]].concat(items).map(([v, t]) => { const o = el('option', null, t); o.value = v; return o; })); };
opt($('f-owner'), STAFF.map((s) => [s, s]).concat([['-', '未割当']]), ['', '全員']);
opt($('f-kind'), KINDS.map((k) => [k, k]), ['', 'すべて']);
opt($('f-st'), Object.entries(ST).map(([k, v]) => [k, v[1]]), ['', 'すべて']);
opt($('assignee'), STAFF.map((s) => [s, s]), ['', '選ぶ']);
function viewBtn(v) {
  const b = el('button', null, v.name); b.type = 'button'; b.dataset.id = v.id;
  b.append(el('small', null, d_count(v.f) + ' 件'), ...(v.def ? [el('small', null, '（既定）')] : []));
  b.setAttribute('aria-pressed', String(same(F, full(v.f))));
  b.addEventListener('click', () => { F = full(v.f); page = 0; clearSel(); render(); });
  return b;
}
const d_count = (f) => rows.filter((r) => match(r, full(f))).length;
function render(fi) {
  rows = CASES.map(d);
  list = rows.filter((r) => match(r, F)).sort(cmp);
  const pages = Math.max(1, Math.ceil(list.length / PAGE)); page = Math.min(page, pages - 1);
  const view = rows.length ? list.slice(page * PAGE, (page + 1) * PAGE) : [];
  $('v-shared').replaceChildren($('v-shared').firstChild, ...SHARED.map(viewBtn));
  const keep = $('save-view'); $('v-mine').replaceChildren($('v-mine').firstChild, ...MINE.map(viewBtn), keep);
  const hit = SHARED.concat(MINE).find((v) => same(F, full(v.f)));
  $('viewline').textContent = hit ? 'ビュー: ' + hit.name + (SHARED.includes(hit) ? '（共有）' : '（自分用）') : 'ビュー: 保存していない条件';
  $('save-view').disabled = !!hit || !!F.ids;
  $('f-owner').value = F.owner; $('f-kind').value = F.kind; $('f-st').value = F.st; $('f-unpaid').checked = F.unpaid; $('f-today').checked = F.today;
  const chips = [['owner', F.owner && '担当: ' + (F.owner === '-' ? '未割当' : F.owner)], ['kind', F.kind && '工種: ' + F.kind], ['st', F.st && '対応状況: ' + (ST[F.st] || [])[1]],
    ['unpaid', F.unpaid && '未入金あり'], ['today', F.today && '今日対応'], ['ids', F.ids && '直前に処理できなかった案件: ' + F.ids.length + ' 件']].filter((c) => c[1]);
  $('fsum').textContent = '絞り込み（' + chips.length + ' 件の条件を適用中）';
  $('chips').replaceChildren(...chips.map(([k, t], i) => {
    const li = el('li'), b = el('button', 'x', '×'); b.type = 'button'; b.setAttribute('aria-label', t + ' を外す');
    b.addEventListener('click', () => { F = { ...F, [k]: BLANK[k] }; page = 0; clearSel(); render(i); }); li.append(el('span', null, t), b); return li;
  }));
  if (chips.length) { const all = el('button', 'link', '条件をすべて解除'); all.type = 'button'; all.addEventListener('click', () => { F = full({}); page = 0; clearSel(); render(-1); }); const li = el('li'); li.style.border = '0'; li.append(all); $('chips').append(li); }
  $('cap').replaceChildren(el('span', null, list.length + ' 件'), document.createTextNode('（条件に合う。全 ' + rows.length + ' 件）'));
  $('rows').replaceChildren(...view.map(row));
  const e = $('empty'); e.hidden = list.length > 0; e.replaceChildren(); $('tw').hidden = !rows.length;
  if (!list.length) {
    if (!rows.length) e.append(el('p', null, '案件はまだ登録されていない。'));
    else { e.append(el('p', null, '条件に合う案件は 0 件。別の条件を試すか、条件を解除する。')); const b = el('button', null, '条件をすべて解除'); b.type = 'button'; b.addEventListener('click', () => { F = full({}); render(-1); }); e.append(b); }
  }
  $('pager').hidden = pages < 2; $('pageno').textContent = (page + 1) + ' / ' + pages + ' ページ';
  $('prev').disabled = page === 0; $('next').disabled = page >= pages - 1;
  syncSel();
  if (fi !== undefined) { const bs = $('chips').querySelectorAll('button.x'); (bs[Math.min(fi, bs.length - 1)] || $('fsum')).focus(); }
}
function row(r) {
  const tr = el('tr'); tr.dataset.no = r.no;
  const sc = el('td', 'c-sel'), cb = el('input'); cb.type = 'checkbox'; cb.setAttribute('aria-label', r.no + ' を選択');
  cb.addEventListener('change', () => { if (allMatch) { sel = new Set(ids()); allMatch = false; } cb.checked ? sel.add(r.no) : sel.delete(r.no); syncSel(); });
  sc.append(cb);
  const th = el('th', 'c-case'); th.scope = 'row'; const box = el('div', 'case');
  box.append(el('span', 'case-no', r.no), el('span', 'cust', r.customer), Object.assign(el('div', 'title', r.title), { title: r.title })); th.append(box);
  const st = el('td'), b = el('span', 'st st-' + r.st); b.append(el('span', null, ST[r.st][0]), el('span', null, ST[r.st][1])); b.firstChild.setAttribute('aria-hidden', 'true'); st.append(b);
  const due = el('td', 'date');
  if (r.due) { const t = el('time', null, ymd(r.due)); t.dateTime = r.due; due.append(t, el('span', 'rel', r.diff < 0 ? (-r.diff) + ' 日超過' : r.diff === 0 ? '今日' : 'あと ' + r.diff + ' 日')); }
  else due.append(el('span', 'dash', '-'), el('span', 'sr', 'なし'));
  const ow = el('td', 'c-owner'); ow.append(r.owner || el('span', 'sr', '未設定'));
  const am = el('td', 'c-amount num'); r.amount === null ? am.append(el('span', 'sr', '未設定')) : am.append(yen(r.amount));
  const up = el('td', 'c-unpaid num'); r.unpaid === null ? up.append(el('span', 'dash', '-'), el('span', 'sr', 'なし')) : up.append(yen(r.unpaid));
  tr.append(sc, th, st, due, ow, am, up); return tr;
}
function syncSel() {
  const pr = [...document.querySelectorAll('#rows tr')];
  pr.forEach((tr) => { const on = isSel(tr.dataset.no); tr.classList.toggle('is-selected', on); tr.querySelector('input').checked = on; });
  const k = pr.filter((tr) => isSel(tr.dataset.no)).length, all = $('all');
  all.checked = k > 0 && k === pr.length; all.indeterminate = k > 0 && k < pr.length;
  const n = ids().length, p = $('picked'); p.replaceChildren();
  document.querySelectorAll('#bulk button, #assignee').forEach((b) => { b.disabled = n === 0; });
  if (!n) { p.append('案件を選ぶと、担当の割り当てなどができる'); return; }
  const link = (t, fn) => { const b = el('button', 'link', t); b.type = 'button'; b.disabled = false; b.addEventListener('click', fn); return b; };
  if (allMatch) p.append('条件に合う ' + list.length + ' 件すべてを選択中。', link('選択を解除', () => { clearSel(); syncSel(); }));
  else if (k === pr.length && list.length > pr.length && n === k) p.append('このページの ' + k + ' 件を選択中。', link('条件に合う ' + list.length + ' 件すべてを選ぶ', () => { allMatch = true; syncSel(); }), link('選択を解除', () => { clearSel(); syncSel(); }));
  else p.append(n + ' 件を選択中。', link('選択を解除', () => { clearSel(); syncSel(); }));
}
$('all').addEventListener('change', (e) => {
  const nos = [...document.querySelectorAll('#rows tr')].map((tr) => tr.dataset.no);
  if (allMatch) { sel = new Set(ids()); allMatch = false; }
  nos.forEach((no) => e.target.checked ? sel.add(no) : sel.delete(no)); syncSel();   // 混在のとき押すと全選択
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('dlg').open && ids().length && e.target.closest('#tw, #bulk')) { clearSel(); syncSel(); } });
[['f-owner', 'owner'], ['f-kind', 'kind'], ['f-st', 'st']].forEach(([id, k]) => $(id).addEventListener('change', (e) => { F = { ...F, [k]: e.target.value, ids: null }; page = 0; clearSel(); render(); }));
[['f-unpaid', 'unpaid'], ['f-today', 'today']].forEach(([id, k]) => $(id).addEventListener('change', (e) => { F = { ...F, [k]: e.target.checked, ids: null }; page = 0; clearSel(); render(); }));
$('prev').addEventListener('click', () => { page--; if (!allMatch) sel = new Set(); render(); $('cap').focus(); });
$('next').addEventListener('click', () => { page++; if (!allMatch) sel = new Set(); render(); $('cap').focus(); });
$('dlg-cancel').addEventListener('click', () => $('dlg').close('cancel'));
function ask(o) {   // 確認・入力のダイアログ。やめる・Esc は null を返す
  return new Promise((res) => {
    const dlg = $('dlg'); $('dlg-h').textContent = o.title; $('dlg-body').replaceChildren(...o.body);
    $('dlg-ok').textContent = o.ok; $('dlg-ok').className = o.danger ? 'danger' : '';
    dlg.addEventListener('close', () => res(dlg.returnValue === 'ok' ? ($('dlg-name') ? $('dlg-name').value.trim() : true) : null), { once: true });
    dlg.returnValue = ''; dlg.showModal(); (o.focus || $('dlg-cancel')).focus();
  });
}
$('save-view').addEventListener('click', async () => {
  const inp = el('input'); inp.type = 'text'; inp.id = 'dlg-name'; inp.required = true; inp.maxLength = 20;
  const lab = el('label', null, '名前（20 字まで）'); lab.append(inp);
  const name = await ask({ title: '現在の条件を自分用のビューに保存', ok: '保存', focus: inp, body: [lab, el('p', null, '共有のビューを作る・変えるのは管理者（柳瀬 結衣）だけ（置いた前提）。')] });
  if (!name) { $('save-view').focus(); return; }
  const v = { id: 'u' + MINE.length, name, f: { ...F } }; MINE.push(v); render(); document.querySelector('[data-id="' + v.id + '"]').focus();
});
const REASON = { assign: (r) => r.stage === '完了' ? '完了した案件は担当を変えられない' : null, extend: (r) => r.due ? null : '次の期限が無い案件（保留・完了）は期限を延ばせない' };
function show(msg, parts, undoFn) {
  const box = $('result'); box.hidden = false; box.replaceChildren(el('p', null, msg));
  if (undoFn) { const u = el('button', null, '元に戻す'); u.type = 'button'; u.addEventListener('click', () => { undoFn(); show('元に戻した。'); render(); $('cap').focus(); }); box.append(u); }
  if (parts && parts.length) {
    const ul = el('ul'); parts.forEach(([no, why]) => ul.append(el('li', null, no + '　' + why))); box.append(el('p', null, '処理できなかった案件'), ul);
    const b = el('button', null, '処理できなかった ' + parts.length + ' 件だけを表示'); b.type = 'button';
    b.addEventListener('click', () => { F = { ...full({}), ids: parts.map((p) => p[0]) }; page = 0; clearSel(); render(); $('cap').focus(); }); box.append(b);
  }
}
document.querySelectorAll('#bulk [data-op]').forEach((b) => b.addEventListener('click', async () => {
  const op = b.dataset.op, targets = ids().map((no) => CASES.find((c) => c.no === no)).map((c) => d(c));
  if (op === 'remove') {
    const ok = targets.filter((r) => !r.paid), ng = targets.filter((r) => r.paid);
    if (!ok.length) { show('削除できる案件が無い。入金のある案件は削除しない。'); return; }
    const body = [el('p', null, '削除した案件は元に戻せない。'), el('p', null, ok.map((r) => r.no).join('、'))];
    if (ng.length) body.push(el('p', null, '入金のある ' + ng.length + ' 件（' + ng.map((r) => r.no).join('、') + '）は削除しない。'));
    if (!(await ask({ title: ok.length + ' 件の案件を削除', ok: ok.length + ' 件を削除', danger: true, body }))) { b.focus(); return; }
    CASES = CASES.filter((c) => !ok.some((r) => r.no === c.no)); clearSel(); render(); $('cap').focus();
    show(ok.length + ' 件を削除した。元に戻せない。', ng.map((r) => [r.no, '入金があるため削除しない']), null); return;
  }
  const val = op === 'assign' ? $('assignee').value : null;
  if (op === 'assign' && !val) { show('割り当てる担当を選ぶ。'); $('assignee').focus(); return; }
  const before = list.length, done = [], fail = [];
  targets.forEach((r) => { const why = REASON[op](r); const c = CASES.find((x) => x.no === r.no); why ? fail.push([r.no, why]) : (done.push([c, op === 'assign' ? c.owner : c.due]), op === 'assign' ? c.owner = val : c.due = addDays(c.due, 7)); });
  clearSel(); render();
  const what = op === 'assign' ? done.length + ' 件の担当を ' + val + ' に割り当てた。' : done.length + ' 件の期限を 7 日延ばした。';
  show(what + (fail.length ? fail.length + ' 件は処理できなかった。' : '') + (list.length !== before ? '表示中の案件は ' + list.length + ' 件になった。' : ''), fail, done.length ? () => done.forEach(([c, prev]) => { op === 'assign' ? c.owner = prev : c.due = prev; }) : null);
  $('cap').focus();
}));
render();
</script>
</body>
</html>
```

- 表は `table`・`caption`・`th scope` で組み、一括操作と焦点の移動は上の仕様のとおり。選択は、行を作り直さずに状態だけを更新するので、チェックボックスの焦点が残る
- 新しい機能と、非対応のときの姿（対応状況は本 skill で照合していない）: `dialog` と `showModal`（非対応なら確認が出ず、削除が動かない。古いブラウザーでは使えない）、`line-clamp`（非対応なら全文）、`accent-color`、`clip-path`、`minmax(min(100%, 11rem), 1fr)`（古いブラウザーでは 1 列）、`replaceAll`・`replaceChildren`。`oklch()` などの新しい色の指定は使わない
- 動きは使わない（`prefers-reduced-motion` の分岐は要らない）。取り消しの表示を消すタイマーも持たない。UI ライブラリの表の部品を使う場合は、先に `../references/library-defaults.md` の「既定値の台帳」の 10（並べ替え・支援技術）ほか、選択と一括操作に関わる項目を確かめる。見た目やコードは写さない

## 初見検証

初めて見る人に、説明なしで答えてもらう設計である（実験の結果ではない）。毎朝処理する担当が、最初の 10 秒で見つけられるかを確かめる。10 秒は本 skill の目安で、出典は無い。

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 絞り込みが 1 件かかっている。選択が無いと、一括操作は押せない | 「絞り込み（1 件の条件を適用中）」、チップ、非活性のボタン |
| 何を操作できるか | ビューの切り替え、条件の追加と解除、案件の選択、一括操作 | ビューのボタン、チップの「×」、チェックボックス |
| どう操作するか | ビューを押す。チェックを入れて、帯のボタンを押す。結果の「元に戻す」で戻す | 帯と結果の領域 |
| 担当が決まっていない案件はいくつか | 1 件 | 「担当未割当 1 件」のボタン |
| いま、何の条件がかかっているか | 今日対応 | チップと、ビューの状態の 1 行 |
| 全部の案件に切り替えるには | 条件をすべて解除を押す | チップの並びのリンク |
| 2 件を選んだとき、何件に効くか | 2 件 | 「2 件を選択中」 |
| 削除を押すと、何が起こるか | 件数と番号が出て、元に戻せないと言われる。やめられる | 確認のダイアログ |

## 点検

- サーバー側の判定: この例の権限・削除の規則・取り込みの検査・記録は画面の見本。実装ではサーバー側で同じ判定と記録を行い、画面の出し分けは表示だけ（本 skill の整理、出典なし）
- 目的と置き場所: 毎朝の同じ絞り込みが、ビューの 1 回の押下になり、一括操作の対象・結果・取り消しが、実行前と後に見える。絞り込みが畳めて、閉じても適用中の数とチップが残る（S112）。条件を 1 つずつ外せる。初期状態に戻す手段がある（S130）
- ビュー: 共有と自分用が分かれ、既定が示され、条件を変えると「保存していない条件」になる。共有を利用者が変えられない
- 一括操作: 選択前は非活性、選択後に件数つきで活性。ページとすべてが言い分けられている。条件・ページの変更で選択が解除される
- 確認と取り消し: 戻せる操作に確認が無く、取り消しがある。戻せない削除だけ確認があり、焦点が正しく戻る
- 一部失敗と空: 成功・失敗の件数、案件ごとの理由、失敗だけの表示がある。案件なしと 0 件が別の文言
- 同じ情報の重ね方: ビューのボタンの件数・表の見出しの件数・ビューの状態の 1 行は、重なる。件数はボタンと見出しで用途が違う（振り分けと確認）ため残し、ビューの状態の 1 行は、条件のチップとは別の情報（条件がビューと同じか）として残した
- 配色: 追加の組は上の表（実際に塗られた色で再計算した）。非活性の文字は主張しない
- 実測（Chrome 157・macOS・1 環境、2026-11-16。ヘッドレス Chrome を DevTools Protocol で操作し、幅を固定して測った）:
  - 横はみ出し: 幅 1440・1024・390・320 px、ライトとダーク、状態は、既定・条件をすべて解除・保存のダイアログ・0 件・案件なし・案件 1 件。1440・1024 px だけ全選択・削除のダイアログ・結果表示を加え、計 60 通り。`scrollWidth` が `innerWidth` と同じ（はみ出し 0）。`innerWidth` も出力し、幅が実際に固定されていることを確かめた。`#page=0` は 1 件ずつの 6 ページになり、0 で割らない
  - 絞り込みとビュー: 既定は今日対応 6 件（1 ページ目は 2610-097・2611-018・2610-061・2611-009・2611-021）。ビューの件数は 6・3・5・1・2。チップを外したあとの焦点は、中を外すと次のチップ、最後を外すと直前のチップ、唯一を外すと絞り込みの見出し（「条件をすべて解除」には移らない）。条件を変えると「保存」が押せ、ダイアログの焦点は名前の欄、Esc で保存のボタンに戻り、保存すると新しいビューに焦点が移った。条件に合う案件が 0 件でも、チップと表の見出しは残った
  - 選択と削除: 見出しのチェックで「このページの 5 件を選択中」、「条件に合う 6 件すべてを選ぶ」で全件になり次のページでも保たれ、1 行を外すと「5 件を選択中」。全選択でないときのページ送りと Esc で解除された。削除は、入金のある 2611-021 を除く 1 件で確認が開き、焦点は「やめる」。Esc で閉じると「削除」のボタン、実行すると表の見出しに焦点が移った。削除ボタンの色は 6.62・7.55（文字）と 6.48・7.26（枠）で、ダイアログ内の枠 / 面は 7.78・8.33
  - 一部失敗と取り消し: 全 12 件で担当を割り当てると 11 件が成功し、2608-134 が理由つきで失敗。失敗だけの表示で 1 件になった。期限を 7 日延ばすと、表示中は 6 件から 0 件になる旨が出て、「元に戻す」で 6 件に戻った
  - 文字 200%（`html` の `font-size` を 200% にして近似。メディアクエリの `rem` は変わらない）・320 px: ライトとダークで、`scrollWidth` が 320（変更前は 445）。表は `role="region"`・`tabindex="0"`・`aria-labelledby` を持つ容器の中で動く。工事名の全文は `title` 属性にも置いた（補助）
- 未検証・未実施:
  - スクリーンリーダーでの読み上げ（`aria-pressed`・`indeterminate`・`role="status"`・チップの「を外す」）。Chrome 以外のブラウザー・他の OS・実機のスマートフォン
  - ダークと 390・320 px での操作（描画と横はみ出しだけ測った）。Shift+Tab での逆順・Tab の順序の通し
  - 作った本人とは別の目での見直し。担当者への初見検証の実施（上の表は設計で、結果ではない）
  - 約 60 件・数百件の件数、権限による一括操作の出し分け、サーバーでの失敗の扱い
- 推測の明示: 毎朝・10 秒・月に数回の削除・5 つの条件・ページの件数 5・7 日・2 日以内・60rem・色・サンプルの値・操作の規則は本 skill の目安で、出典は無い。個人用と共有のビュー、一部失敗の示し方、チップ、取り消しの表示を自動で消さないことは、本 skill の整理である。出典は、そのシステムの製品の文脈の規則で、日本の業務システムにそのまま移せるとは原文は述べていない

## この例の出典

S004、S008、S014、S015、S027、S065、S094、S099、S101、S109、S110、S111、S112、S113、S114、S116、S117、S118、S121、S122、S123、S124、S127、S128、S129、S130、S131、S132、S133、S134、S291、S318。要旨の参照（逐語引用なし）は S250、S266、S268、S269、S270、S278。S102、S103 は designer-interaction へ渡す線として挙げた。台帳は `../references/sources.md`。他の skill の台帳の番号は使っていない。

# 例: 詳細画面の組み直し（案件の詳細）

1 件の案件の詳細画面を、DB の項目ごとのカードの縦積みから、作業の順に組み直す例。題材は架空の小さなリフォーム会社の社内システムで、実在の製品・企業の画面の模倣は含まない。「詳細画面が同じ見た目のカードの縦積みで、大事なメモが埋もれる」「同じ情報があちこちに出る」「履歴をどこに置くか決められない」と相談されたとき、見出しの要約・節の順・重複の除去・履歴・編集への入り方を決めるときに開く。一覧の取捨選択は `list-from-db-columns.md`、配色と架空のデータは同じ業務システムを題材にする残りの例と共通である。配色とデータは写さない。

## 依頼

- 製品: 架空のリフォーム会社「こがね住設」の社内システム「こがね案件管理」（架空）。一覧の案件番号を押すと、この詳細画面が開く（`list-from-db-columns.md` の要約パネルの代わり）
- 依頼文（架空）: 「案件の詳細が見にくい。項目が全部同じ大きさのカードで縦に並んでいて、肝心のメモが下の方に埋もれている。請求の状況は 3 か所に出ていて、どれが正しいのか分からなくなる。見やすくして」
- 現状（前の版。架空）: DB の 20 列から作った詳細。基本情報・顧客・工事・日程・金額・入金・担当・メモ・履歴の 9 枚の、同じ大きさ・同じ枠のカードを縦に積む。メモは 8 枚目で、スクロールしないと見えない。履歴は 6 件が、メモのカードの下にある
- 想定ユーザーと作業: 担当の佐伯。工程管理の担当から「期限を過ぎた案件」と言われて 2610-097 を開く。何が止まっているか、誰に連絡するか、金額はいくら残っているかを数十秒で掴み、顧客に電話して着工日を決め直す（置いた前提）
- 主役の案件: 2610-097（田所 勝 様、浴室の改修）。契約済みで、着工の予定の 2026/11/11 を 5 日過ぎた。未入金 1,372,000 円。メモは「施主から着工日の再調整の連絡待ち」
- 範囲外: 一覧（`list-from-db-columns.md`）、履歴の文言と監査（`audit-log-and-import-result.md`）、削除の確認と取り消しの動き（動きは designer-interaction）、権限による出し分け、帳票・社内規程の要件

### 根拠の範囲（先に読む）

- 出典のある事実: 詳細の先頭のコンテナには、資源に最も関連する情報を置く（S035）。属性が多いときは、関連で分けるか表にする（S037）。キーと値は切り詰めない（S034）。関連する一覧は先頭 5 件のプレビュー（S036）。分類のタブとアンカーリンクで目的の箇所へ着く例（S040）。非モーダルの横パネルは残りの表を見ながら 1 件を編集できる（S047）。時系列は縦のタイムラインで、各項目の文面が状態を伝える（S087）。時刻にはラベルを添え、変更者の名前を添える（S090）。期限は正確な日時で（S084）、短い相対表記には正確な日時へ届く手段を付ける（S086）。未設定は空白、存在しない項目は「-」（S100）。色だけに頼らない（S048、S056）。非文字の部品は隣接色と 3:1 以上（S065）。削除は赤字とアイコン（S123）。内容を変える「削除」は画面下部（S125）。取り返しのつかない操作だけ中断する（S133）。ボタンの主役は 1 画面に 1〜2 個（S122）。数字は単位より大きく太く（S299）。数字は右揃えにすると桁の位置が揃い、比べやすい（S002、S297）。桁の幅は `tabular-nums` でそろえる（S012）
- 記事の主張（S283、S285、S288、S289、S290、S291、S293）: グループ化と優先順位付け（S285）。無くても伝わるものは削る（S288）。強弱をつける（S289）。加工を厭わない（S290）。装飾は「重要」を表す（S291）。設計そのものがデザイン（S283）。記事自身が最適解ではなくフィクションと断る（S293）。記事の画面は写さない
- 区分 B（要旨）: ラベルを無くして書式で伝える考え方（S304。Refactoring UI の日本語抄訳）。逐語で本人の発言として使わない
- 要旨の参照（逐語引用なし。数値は出典ありの欄に入れない）: 詳細は 2 カラムで、同種の内容を 1 枚のカードにまとめる（S258）。見出しにオブジェクトの名前、右に画面全体への操作、主要以外はドロップダウン、削除は詳細に置く（S259）。名前と値は定義リストで並べ、値の無い項目は S265 に従う（S260）。グループの入れ子を深くしない。同じ階層・性質の要素は同じ表現で囲む（S261）。値が無い項目の表示（S265）
- 本 skill の目安（出典なし）: 要約の 3 項目、「いま要る注意」の枠と地、3 列の境目（60rem）、寸法、10 秒の想定、書類 6 件・履歴 6 件の値、重複の許す範囲の決め方
- 外れる点（両論）: Polaris の方針（S258。要旨）は、同種の内容を 1 枚のカードにまとめ、詳細を 2 カラムで組む。S294 は、見出し・項目・本文が同じ大きさで強弱が無い画面を挙げる。この例は、カードの枠を使わず、節の見出しと罫線でまとまりを示し（S261 の同じ階層は同じ表現に合わせる）、枠と地を持つのは「いま要る注意」だけにした。どちらが正しいかは、節の数と、枠が役割を伝えているか（S291）で決める
- 熟練者の密度の好みは、国内の出典では見解にとどまる（S301、S302。C）。この例の判断の根拠にしない
- 詳細画面は主キー情報と関連情報のタブで 3〜5 タブが目安、という経験則もある（S307。C）。この例の節は 8 つで、タブにせず縦に並べるので、目安と食い違う。経験則で、基準にしない

## 目的の一文

期限を過ぎた案件を開いた担当が、何が止まっているか・誰に連絡するか・いくら残っているかを、スクロールせずに掴める詳細画面にする。

## 削るもの

詳細画面は、一覧が「後ろへ回す」と決めた項目の置き場である。まず、一覧が詳細へ回した項目がすべて出ていることを確かめ、次に、同じ情報が複数の場所に出ていないことを確かめる。

### 一覧から回された項目の行き先

`list-from-db-columns.md` が詳細へ回した項目と、この画面での置き場。

| 一覧が回した項目 | この画面の置き場 | 扱い |
|---|---|---|
| 住所・電話番号 | 連絡先と現場 | 電話は `tel:` のリンク。連絡待ちの案件で最初に使う |
| 工種・工程（受付から完了・保留の 7 値） | 工事の内容 | 工程は DB の段階で、対応状況（導出）とは別の項目 |
| 受付日・現地調査日・見積提出日・契約日 | 履歴 | 過ぎた節目は、出来事として履歴に残す。日程の節には出さない |
| 入金済額 | 金額 | 見積金額と並べ、未入金は見出しの要約へ |
| メモ | メモ（見出しの直下） | 履歴の中に埋めない |
| 更新日時・更新者 | 履歴 | 最終更新は履歴の先頭と、節の見出しの下の「N 日前」の 1 行。メモの枠の更新行は、メモそのものの属性で、最終更新の置き場ではない |
| 完工予定日 | 工事の内容 | 未設定は空欄。読み上げは「未設定」（S100） |

### 同じ情報の対応表（前 3 か所 → 後 1 か所）

前の版は、同じ情報を 3 か所に出していた。現在の値の置き場を 1 か所に決め、ほかは削る。

| 情報 | 前の版の 3 か所 | 後の 1 か所 | 他の場所の扱い |
|---|---|---|---|
| 対応状況 | 見出しのバッジ・基本情報の「ステータス」・日程の「遅延中」 | 見出しのバッジ | 削る。工程（DB の段階）は別の項目なので、工事の内容に残す |
| 次の期限 | 見出し・日程カード・基本情報の「次の期限」 | 見出しの要約（日付・種類・超過日数） | 日程のカードをやめる。過ぎた節目は履歴へ |
| 未入金 | 見出しの「未入金あり」・金額カードの「未入金」・入金カードの「残額」 | 見出しの要約 | 金額の節は内訳の 2 値（見積金額・入金済み）だけ。入金カードをやめる |
| 最終更新 | 見出しの「最終更新」・基本情報の「更新日時」・履歴の最上段 | 履歴（先頭の 1 件と、見出しの下の 1 行） | 見出しと基本情報から削る。メモの枠の更新行は、メモそのものの属性で残す |
| 担当 | 見出し・基本情報・担当カード | 見出しの要約 | 削る。履歴の更新者は、その時の出来事の記録で別の情報 |
| 顧客名 | 見出し・顧客カード・メモの本文 | 見出し（`h1`） | 連絡先と現場には電話と住所だけ。メモの本文に名前を繰り返さない |
| メモ | メモカード・履歴の本文の再掲・見出しの注意アイコン | メモ（見出しの直下） | 履歴は「メモを変更」と更新者だけで、本文を再掲しない |

重なりを許す範囲は、次の 3 つで決める（本 skill の整理）。

1. 現在の値は 1 か所。見出しの要約は、その 1 か所の一つである
2. 履歴は出来事の記録で、その時点の値を持ってよい（見積金額を変更した時点の値）。現在値の置き場にしない。見積を改めても、履歴の過去の値は書き換えない
3. 案件を特定する項目（案件番号・顧客名）は、画面が変わっても見出しに出す。一覧の値を確かめるための重ね方で、`list-from-db-columns.md` の点検と同じ範囲

数え方: 7 つの情報 × 前 3 か所 = 21 か所が、後は 7 か所になった。ほかに、履歴の見積金額と入金額（2 か所）は出来事の記録として、メモの枠の更新行はメモそのものの属性として残る。

### 削る・足さないもの

| 前 | 扱い | 理由 |
|---|---|---|
| 9 枚の同じ枠のカード | 枠をやめる | S294 は、文字の大きさが同じで強弱が無い画面を挙げる。枠の扱いは本 skill の整理。節の見出しと罫線で分ける（S261 の同じ階層は同じ表現。要旨） |
| 詳細のキー「顧客」「案件番号」「工事名」 | 削る | 見出しの文字の形が役割を言う（S288、S304 の考え方。S304 は区分 B）。電話番号・住所・見積金額のように同じ形の値が並ぶ項目は、キーを残す |
| 日程カード・入金カード・担当カード・基本情報カード | 廃止 | 上の対応表のとおり、他の場所と重なる |
| キーや値の「…」での省略 | 足さない | 全文を出す（S034） |
| 見出しの「注意あり」アイコン | 足さない | メモの本文を見出しの直下に出すので、アイコンで知らせる必要が無い |

## 構成

### 節の順（作業の順）

作業は、期限超過の案件を開く → 理由を読む → 連絡する → 金額を確かめる → 日程を決める → 経緯を確かめる、の順である（置いた前提）。節をこの順に並べる（S285 のグループ化と優先順位）。

| 順 | 節 | 作業の問い | 置くもの |
|---|---|---|---|
| 1 | 見出し | この案件は何で、いま何が要るか | 案件番号・顧客・工事名・対応状況。次の期限・担当・未入金。主な操作（S035、S259。要旨） |
| 2 | メモ | 注意はあるか | メモの本文と、更新日時・更新者。その場の編集 |
| 3 | 連絡先と現場 | 誰にどう連絡するか | 電話番号・住所 |
| 4 | 金額 | 請求の根拠は | 見積金額・入金済み |
| 5 | 工事の内容 | 何の工事か | 工種・工程・完工予定日 |
| 6 | 書類 | 根拠の書類はどれか | 先頭 5 件のプレビューと、全件へのリンク（S036） |
| 7 | 履歴 | 何があったか | 6 件。新しい順 |
| 8 | 危険な操作 | 取り消すか | 削除。画面の末尾（S125） |

- 作業の順と、DOM の順と、狭い幅の順を一致させる。広い幅で 3〜5 の節を横に並べるのは、CSS の列で行い、`order` で入れ替えない
- タブとアンカーリンク（S040）は、節が増えたときの手段である。この例は節が 8 つで、履歴の下端（ページの上端からの位置）は、1440×900 で 997 px（画面の高さの 1.1 倍）、390×844 で 1398 px（1.7 倍。点検の実測）。縦にたどれる長さと判断し、タブにしない（本 skill の整理）。S307（C）の 3〜5 タブの目安とは食い違う（根拠の範囲）。節が増えたら、分類のタブを検討する（節の数の目安は置かない）
- 履歴と書類は、1 件の処理に要るときだけ読む。後ろに置く（S087 は履歴の形、置き場は本 skill の整理）

### 見出し（要約）

見出しには、名前・状態・いま要る判断の材料・主な操作を置く（S035、S259。要旨）。

- 名前: 案件番号（アクセント色・太字）と顧客名を同じ行に、工事名を補足として下に。長い名前は折り返す。切らない（S034）
- 状態: 一覧と同じ対応状況のバッジ（色・印・文字。S048、S061）
- 判断の材料: 次の期限（日付・種類・「5 日超過」）、担当、未入金（円）。未入金は 1.5rem・太字にして、単位より数字を大きくする（S299）。3 つは `dl` で、狭い幅では自動で折り返す
- 主な操作: 「日程を変更」（主。1 つ。S122）、「入金を記録」、「案件を編集」。主操作は、期限超過を解く操作にした（本 skill の整理）。削除は、ここに置かず末尾へ（次の「危険な操作」）。SmartHR の方針（S259。要旨）は、主要以外の操作を見出し側のドロップダウンにまとめ、削除を詳細に置く。この例は、ドロップダウンの動きを持たないので、削除を画面の末尾に置く流派（S125）を選んだ。流派は割れるが、主操作から離す点は共通である（本 skill の整理）

### メモ（いま要る注意）

- 見出しの直下に、枠・地・太字で置く。枠はアクセント、地は `--sel` で、状態の色は使わない（下の「値」）。節の中で枠と地を持つのは、このメモだけにする。装飾は「重要」を伝えるために使う（S291）。強弱がある（S289）
- 見出しの語は「メモ（いま要る注意）」。本文は 1.0625rem・太字。更新日時と更新者を、本文の下に小さく（S090）
- メモが無いときは `メモはまだ無い。` と、ボタン `メモを書く` を出す（`#memo=none` で確認できる）

### 同じ見た目のカードの縦積みを避ける

- 3〜5 の節は、枠のない小さな表（`dl`）で、節の見出しと下罫線でまとまりを示す。メモだけが枠と地を持つ。金額は右揃えの数字、書類はリンクの行、履歴は時系列と、節ごとに形が違う（本 skill の整理）
- 入れ子を作らない。節の中にさらに枠を作らない（S261。要旨）

### 関連する書類

- 一覧は先頭 5 件のプレビューと、全件へのリンクにする（S036。逐語は先頭 5 件まで。全件へのリンクは本 skill の整理）。この例の書類は 6 件で、5 件とリンク「すべての書類（6 件）」を出す
- 並びは新しい順。名前は切らない

### 履歴

- 後ろに置く。縦のタイムラインで、各項目の文面が何があったかを伝える（S087）。文言は体言止め（詳細は `audit-log-and-import-result.md`）
- 新しい順にする。問い合わせは「最後に何があったか」から始まるので（本 skill の整理）。古い順にする製品もあり、出典は決めていない
- 日付は絶対で出す。履歴は並べ替え・監査に使うので、相対にしない（本 skill の整理。`SKILL.md` の「時間」の表。期限の絶対は S084）。最後の更新は、節の見出しの下に「N 日前」の 1 行で出す
- 更新者の記録があるのは、メモを変更した 1 件だけである（この例のデータ）。記録の無い項目に、推測で名前を足さない。変更者は重要なときに添える（S090）

### 編集への入り方

| 編集 | 入り方 | 理由 |
|---|---|---|
| メモ | その場。メモの枠の「メモを更新」でテキスト欄が開く。保存すると履歴へ 1 件足す | 小さな編集で、周りの情報を見ながら書ける。S047 は表の行の編集で非モーダルの横パネルを挙げ、同じ、周りを見たまま編集する考えを、詳細のメモに当てはめた（本 skill の整理） |
| 日程・入金 | 見出しのボタンから、横パネルか別画面（この例は押しても何もしない） | 値が複数で、確認が要る |
| 案件の全項目 | 「案件を編集」 | 全項目は別の編集画面で行う（この例の範囲外） |

- 編集中も、ほかの節は見えたままにする（モーダルにしない）
- 保存・やめるの後、フォーカスは「メモを更新」のボタンへ戻す
- 削除は、確認が要る（S133）。確認と取り消しの設計は、`filters-views-bulk-actions.md`。動きは designer-interaction

### 狭い幅での並び（390・320 px）

- 1 列にする。順は広い幅と同じ（DOM の順）。60rem 未満で 3 列を 1 列にする（本 skill の目安）
- 見出しの要約の 3 項目は折り返す。主な操作のボタンも折り返す。メモは 480 px（390 px 幅）の位置で終わる（実測は点検）
- 狭い幅でも、メモと未入金が最初の画面に入る（実測は点検）
- 履歴の日付と本文の 2 列は、22rem（352 px）以下で 1 列にする。直す前は、320 px で日付の列が 152 px・本文の列が 82 px になり、「1,960,000 円」が割れた。日付の列を 8rem に狭め、金額と「円」は割らない（`nw`）。390 px は 2 列のままで、日付が 128 px・本文が 176 px（点検の実測）

### キーと値（`dl`）

- 名前と値は `dl`・`dt`・`dd` で組む（S260。要旨）。キーは補助色の小さな文字、値は本文の色。列は「キーの最小 4.5rem（内容の幅まで）＋値」の 2 列で、狭い幅でも 2 列のまま、値が折り返す
- 金額は右揃えにし（S002）、`tabular-nums` で桁の幅をそろえる（S012）。単位はキーに出す（`見積金額（円）`）
- キーも値も切らない（S034）。属性が多くなったら、関連で分けるか、表にする（S037）。この例の節は 2〜3 項目なので、分けない
- 空欄は 2 種類。未設定は空欄（読み上げ「未設定」）、存在しない項目は「-」（読み上げ「なし」）。この例の「完工予定日」は、日程の再調整待ちで未設定（S100）

## 仕様

### 値

| 項目 | 値 | 根拠 |
|---|---|---|
| ページの幅 | 最大 80rem、中央。内容の面は `--surface`、外は `--bg` | 本 skill の目安（出典なし） |
| 3 列の境目 | 60rem。それ以上で連絡先・金額・工事の内容を 3 列、未満で 1 列 | 本 skill の目安（出典なし） |
| 文字 | 本文 14 px、補足 13 px、案件番号と顧客名 20 px、未入金 24 px・太字、メモ本文 17 px・太字 | 本 skill の目安（出典なし）。数字を大きく（S299） |
| 見出しの罫 | 節の見出しの下に 1 px | 装飾の罫は 3:1 を満たさない（情報の担い手にしない） |
| 主ボタン | 1 つ。地はアクセント | S122 |
| メモの色 | 枠はアクセント（左は 4 px）、地は `--sel`。対応状況の「要対応」の色は使わない | 要対応の色は、期限との関係という状態の意味を持つ。同じ画面に期限超過のバッジがあり、メモに使うと状態と注意が混ざる。`--sel` は一覧では選択行の地だが、この画面に選択行は無い。一覧と同じ画面に置くときは、メモ専用の組を別に決める（本 skill の整理）。装飾は役割を伝える（S291） |
| 書類のプレビュー | 5 件まで | S036 |
| 履歴 | 新しい順。日付 8rem の列と本文（22rem 以下は 1 列） | 本 skill の整理 |
| 対応状況 | 期限超過 ▲、要対応 ◆、進行中 ●、保留 ‖、完了 ✓。判定は完了、保留、期限超過、要対応、進行中の順 | 共通設定（`list-from-db-columns.md`）。要対応の 2 日は本 skill の目安 |
| `tel:` の連結 | 実データでは `[0-9+\-()]` 以外を除いてから渡す。`href` に利用者が入力したスキームを許さない | 本 skill の整理（出典なし） |
| 今日 | 2026-11-16 に固定。「いま」は 2026/11/16 09:05（保存した時刻の見せ方用の定数） | 描画のたびに値が変わらないようにする |

### コントラスト比（本 skill の計算。WCAG の相対輝度式による）

共通のトークンの組み合わせは、`list-from-db-columns.md` の表（文字の最小はライト 4.74・ダーク 5.10、非文字の最小は 3.37・3.46）と同じである。この例で足した組み合わせだけを計算した。文字の基準 4.5:1 は、本 skill の台帳に WCAG 本文の逐語が無く未照合。非文字の 3:1 は S065。

| 組み合わせ | ライト | ダーク |
|---|---|---|
| メモの本文・見出し・更新の行（本文 / メモの地） | 12.31 | 10.44 |
| メモの枠（アクセント / 面。非文字） | 6.31 | 9.08 |
| メモの枠（アクセント / メモの地。非文字） | 5.26 | 6.92 |
| 削除ボタンの文字と枠（期限超過の色 / 面） | 7.78 | 8.33 |
| 入力欄の枠（枠線 / 面。非文字） | 4.49 | 5.57 |

新しい色は足していない。メモの地を、状態の色（要対応）から `--sel` に変えたので、メモの組を計算し直した。色を変えたら再計算する。

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| 要約の見出し | 基本情報 | （見出しなし。`dl` に「次の期限」「担当」「未入金（円）」） | 見出しに置くのは、いま要る判断の材料（S035） |
| 次の期限 | 着工予定日 2026-11-11 | 2026/11/11（着工の予定）、2 行目に 5 日超過 | 期限は絶対で、超過の日数を添える（S084）。日付の書式は S275（要旨） |
| メモの見出し | メモ | メモ（いま要る注意） | 役割を言う（S291） |
| メモの下の更新の行 | （無し） | 更新 2026/11/02 11:40（佐伯 和也） | 何の時刻か・誰かを添える（S090）。見える文字に UTC のオフセットを出さないのは S090 から外れる（`datetime` には `+09:00` を持たせた。本 skill の整理） |
| 節の見出し | 顧客情報・日程・入金・担当・基本情報 | 連絡先と現場・金額・工事の内容 | 作業の問いで切る。重なる節をやめる |
| 書類のリンク | 書類 | すべての書類（6 件） | 全件へのリンクと件数 |
| 履歴の見出しの下 | （無し） | 6 件。最後の更新は 14 日前。新しい順。 | 件数・最終更新・並びを 1 行で |
| 履歴の本文 | メモ更新: 施主から着工日の… | メモを変更（佐伯 和也） | 本文を再掲しない。語は `audit-log-and-import-result.md` の操作の記録に揃える |
| 空のメモ | （空欄） | メモはまだ無い。／メモを書く | 空欄のままにせず、書くことを促す（本 skill の整理） |
| 実行しない操作 | （無し） | 「日程を変更」は、この例では実行しない。 | 動かない部品を、動くように見せない |
| 削除 | 削除 | ✕ 案件を削除 | 赤字とアイコン（S123）。確認は別の例 |

## コード断片

1 ファイルの HTML。ブラウザーで開くとそのまま動く。外部のライブラリ・フォント・画像・計測は使わない。データの描画は `textContent` と要素の組み立てで行い、生のデータを `innerHTML` に入れない。ダークは `prefers-color-scheme` で切り替える。URL の末尾に `#long=1`（長い顧客名・工事名）、`#memo=none`（メモが空）を付けると、状態を変えて見られる。「今日」は 2026-11-16 に固定してある。

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>こがね案件管理 案件の詳細</title>
<style>
:root {
  color-scheme: light dark;
  --bg: #f1f0ea; --surface: #fbfaf6; --sel: #e4e9c6; --text: #25251e; --text-2: #52524a;
  --line: #76755f; --rule: #d2d1c4; --accent: #55631a; --on-accent: #ffffff;
  --over: #9b1c22; --over-bg: #f9e3e1; --act: #7a4a00; --act-bg: #f8e8c6;
  --prog: #234f7d; --prog-bg: #dfeaf6; --done: #17604d; --done-bg: #dcefe8;
  --hold: #4f4f46; --hold-bg: #e6e5dc;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #171814; --surface: #1f201b; --sel: #2f3718; --text: #ecebe1; --text-2: #b9b8aa;
    --line: #98978a; --rule: #3a3b32; --accent: #b9c96b; --on-accent: #1a2005;
    --over: #ff9f98; --over-bg: #3d1f1e; --act: #f2bf63; --act-bg: #392a0c;
    --prog: #9cc4f0; --prog-bg: #1b2b3e; --done: #86d6b8; --done-bg: #173128;
    --hold: #bdbcae; --hold-bg: #33332c;
  }
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--text);
  font: 0.875rem/1.5 system-ui, "Hiragino Sans", "Yu Gothic", "Noto Sans JP", sans-serif; }
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.page { max-width: 80rem; margin: 0 auto; padding: 0.75rem 1rem 2rem; }
.sheet { padding: 1rem 1.25rem 1.5rem; background: var(--surface); border: 1px solid var(--rule); }
h1, h2, p, dl, dd, ol, ul { margin: 0; }
button { font: inherit; color: inherit; min-height: 2rem; padding: 0.25rem 0.75rem; background: var(--surface); border: 1px solid var(--line); border-radius: 6px; cursor: pointer; }
button.primary { background: var(--accent); color: var(--on-accent); border-color: var(--accent); font-weight: 700; }
button.link { min-height: 0; padding: 0; border: 0; background: none; color: var(--accent); text-decoration: underline; text-underline-offset: 3px; text-align: left; }
a { color: var(--accent); text-underline-offset: 3px; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.muted { color: var(--text-2); font-size: 0.8125rem; }

/* 見出しの要約: 名前・状態・いま要る判断の材料・主な操作 */
.head { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.25rem 0.75rem; }
h1 { font-size: 1.25rem; line-height: 1.4; min-width: 0; overflow-wrap: anywhere; }
h1 .no { color: var(--accent); font-variant-numeric: tabular-nums; }
h1 .title { display: block; color: var(--text-2); font-size: 0.9375rem; font-weight: 400; }
.st { display: inline-flex; gap: 0.25rem; padding: 0 0.5rem; border: 1px solid currentColor; border-radius: 4px; white-space: nowrap; font-weight: 600; font-size: 0.8125rem; }
.st-over { color: var(--over); background: var(--over-bg); } .st-act { color: var(--act); background: var(--act-bg); }
.st-prog { color: var(--prog); background: var(--prog-bg); } .st-done { color: var(--done); background: var(--done-bg); }
.st-hold { color: var(--hold); background: var(--hold-bg); }
.sum { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 11rem), 1fr)); gap: 0.5rem 1.5rem; margin-top: 0.75rem; }
.sum dt, .kv dt { color: var(--text-2); font-size: 0.8125rem; }
.sum dd { font-variant-numeric: tabular-nums; overflow-wrap: anywhere; }
.sum .big { font-size: 1.5rem; font-weight: 700; line-height: 1.3; }
.actions { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.75rem; }
#msg { min-height: 1.5rem; margin-top: 0.25rem; color: var(--text-2); }

/* いま要る注意（メモ）。節の中で唯一、地と枠を持つ。状態の色（要対応）は使わず、アクセントの枠と --sel の地にする */
.memo { margin-top: 0.75rem; padding: 0.75rem 1rem; background: var(--sel); border: 1px solid var(--accent); border-left-width: 4px; }
.memo h2 { margin: 0; padding: 0; border: 0; color: var(--text); font-size: 0.8125rem; }
.memo .body { margin: 0.25rem 0; font-size: 1.0625rem; font-weight: 600; overflow-wrap: anywhere; }
.memo .meta { margin-bottom: 0.5rem; color: var(--text); font-size: 0.8125rem; }
.memo form { margin-top: 0.5rem; } .memo textarea { display: block; width: 100%; min-height: 4.5rem; margin-bottom: 0.5rem; padding: 0.375rem; font: inherit; color: var(--text); background: var(--surface); border: 1px solid var(--line); }
.memo form button + button { margin-left: 0.5rem; }

/* 作業の順の節。DOM の順がそのまま狭い幅の順 */
.cols { display: grid; grid-template-columns: minmax(0, 1fr); gap: 1.25rem 2rem; margin-top: 1.25rem; }
section > h2 { margin-bottom: 0.5rem; padding-bottom: 0.25rem; border-bottom: 1px solid var(--rule); font-size: 1rem; }
.rest { margin-top: 1.25rem; }
.kv { display: grid; grid-template-columns: minmax(4.5rem, max-content) minmax(0, 1fr); gap: 0.375rem 1rem; }
.kv dd { overflow-wrap: anywhere; }
.kv .num { text-align: right; font-variant-numeric: tabular-nums; }
.docs { list-style: none; padding: 0; } .docs li { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.125rem 1rem; padding: 0.25rem 0; border-bottom: 1px solid var(--rule); }
.docs .at { color: var(--text-2); white-space: nowrap; font-variant-numeric: tabular-nums; }
.tl { list-style: none; padding: 0; } .tl li { display: grid; grid-template-columns: 8rem minmax(0, 1fr); gap: 0 0.75rem; word-break: auto-phrase; padding: 0.25rem 0; border-bottom: 1px solid var(--rule); }
.nw { white-space: nowrap; }
.tl time { color: var(--text-2); white-space: nowrap; font-variant-numeric: tabular-nums; } .tl .who { color: var(--text-2); }
.danger { margin-top: 1.5rem; padding-top: 0.75rem; border-top: 1px solid var(--rule); }
.danger button { color: var(--over); border-color: var(--over); font-weight: 600; }
@media (min-width: 60rem) { .cols { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (max-width: 22rem) { .tl li { grid-template-columns: minmax(0, 1fr); } .tl time { white-space: normal; } }
</style>
</head>
<body>
<div class="page"><div class="sheet">
  <header>
    <div class="head">
      <h1><span class="no" id="no"></span> <span id="cust"></span><span class="title" id="title"></span></h1>
      <span id="badge"></span>
    </div>
    <dl class="sum" aria-label="いま要る判断の材料">
      <div><dt>次の期限</dt><dd id="due"></dd></div>
      <div><dt>担当</dt><dd id="owner"></dd></div>
      <div><dt>未入金（円）</dt><dd class="big" id="unpaid"></dd></div>
    </dl>
    <div class="actions">
      <button type="button" class="primary" data-act="日程を変更">日程を変更</button>
      <button type="button" data-act="入金を記録">入金を記録</button>
      <button type="button" data-act="案件を編集">案件を編集</button>
    </div>
    <p id="msg" role="status"></p>
  </header>

  <section class="memo" aria-labelledby="memo-h">
    <h2 id="memo-h">メモ（いま要る注意）</h2>
    <p class="body" id="memo-body"></p>
    <p class="meta" id="memo-meta"></p>
    <button type="button" id="memo-edit">メモを更新</button>
    <form id="memo-form" hidden>
      <label class="sr" for="memo-in">メモの内容</label>
      <textarea id="memo-in"></textarea>
      <button type="submit" class="primary">保存</button><button type="button" id="memo-cancel">やめる</button>
    </form>
  </section>

  <div class="cols">
    <section aria-labelledby="h-contact"><h2 id="h-contact">連絡先と現場</h2><dl class="kv" id="contact"></dl></section>
    <section aria-labelledby="h-money"><h2 id="h-money">金額</h2><dl class="kv" id="money"></dl></section>
    <section aria-labelledby="h-work"><h2 id="h-work">工事の内容</h2><dl class="kv" id="work"></dl></section>
  </div>

  <section class="rest" aria-labelledby="h-docs"><h2 id="h-docs">書類</h2><ul class="docs" id="docs"></ul></section>
  <section class="rest" aria-labelledby="h-hist"><h2 id="h-hist">履歴</h2><p class="muted" id="hist-sum"></p><ol class="tl" id="hist"></ol></section>
  <div class="danger"><button type="button" data-act="案件を削除"><span aria-hidden="true">✕ </span>案件を削除</button></div>
</div></div>

<script>
// 架空のデータ。今日と「いま」は固定にして、描画のたびに見え方が変わらないようにする
const TODAY = '2026-11-16', NOW = '2026-11-16 09:05', ME = '佐伯 和也';
const LONG = location.hash.includes('long=1');   // 確認用: #long=1 で長い名前に差し替える
const C = {
  no: '2610-097', customer: LONG ? '株式会社 北山ハウジングサービス 賃貸管理部 ご担当者様' : '田所 勝 様',
  title: LONG ? '外壁塗装と屋上防水の同時工事（全 12 棟のうち第 3 期の 4 棟、足場は 2 期の仮設を再利用）' : '浴室の改修',
  owner: '佐伯 和也', stage: '契約', kind: '水まわり', tel: '000-0000-0003', address: '〇〇市柳町 1 丁目',
  due: '2026-11-11', dueKind: '着工の予定', end: null, amount: 1960000, paid: 588000,
  memo: location.hash.includes('memo=none') ? '' : '施主から着工日の再調整の連絡待ち', memoAt: '2026-11-02 11:40', memoBy: '佐伯 和也'
};
const HIST = [   // 新しい順。更新者の記録があるのはメモを変更した 1 件だけ
  { at: '2026-11-02 11:40', text: 'メモを変更', by: '佐伯 和也' }, { at: '2026-10-31', text: '入金済額を変更（0 円から 588,000 円）' },
  { at: '2026-10-29', text: '工程を変更（見積から契約）' }, { at: '2026-10-22', text: '見積金額を変更（未設定から 1,960,000 円）' },
  { at: '2026-10-15', text: '工程を変更（受付から現地調査）' }, { at: '2026-10-12', text: '案件を登録' }
];
const DOCS = [
  ['打合せ記録（電話）', '2026-11-02'], ['工程表', '2026-10-29'], ['契約書', '2026-10-29'],
  ['見積書', '2026-10-22'], ['図面（浴室の平面）', '2026-10-15'], ['現地調査の写真（12 枚）', '2026-10-15']
];
const MAX_PREVIEW = 5;

const dn = (s) => { const [y, m, d] = s.slice(0, 10).split('-').map(Number); return Math.round(Date.UTC(y, m - 1, d) / 86400000); };
const ymd = (s) => s.slice(0, 10).replaceAll('-', '/');
const yen = (n) => n.toLocaleString('ja-JP');
const $ = (id) => document.getElementById(id);
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; };
const timeEl = (iso, label) => { const t = el('time', null, label); t.dateTime = iso; return t; };
const blank = () => el('span', 'sr', '未設定');                       // 未設定は空欄（読み上げは「未設定」）
const none = () => { const f = document.createDocumentFragment(); f.append(el('span', 'muted', '-'), el('span', 'sr', 'なし')); return f; };   // 存在しない項目

function stateOf(r) {
  const diff = r.due ? dn(r.due) - dn(TODAY) : null;
  if (r.stage === '完了') return ['done', '✓', '完了', diff];
  if (r.stage === '保留') return ['hold', '‖', '保留', diff];
  if (diff !== null && diff < 0) return ['over', '▲', '期限超過', diff];
  if (diff !== null && diff <= 2) return ['act', '◆', '要対応', diff];
  return ['prog', '●', '進行中', diff];
}
function kv(dl, rows) {
  dl.replaceChildren();
  rows.forEach(([k, v, cls]) => { const dd = el('dd', cls); dd.append(v); dl.append(el('dt', null, k), dd); });
}
function renderHead() {
  const [key, mark, label, diff] = stateOf(C);
  $('no').textContent = C.no; $('cust').textContent = C.customer; $('title').textContent = C.title;
  const b = el('span', 'st st-' + key); const m = el('span', null, mark); m.setAttribute('aria-hidden', 'true'); b.append(m, el('span', null, label));
  $('badge').replaceChildren(b);
  const due = $('due'); due.replaceChildren(timeEl(C.due, ymd(C.due)), document.createTextNode('（' + C.dueKind + '）'));
  due.append(el('div', 'muted', diff < 0 ? (-diff) + ' 日超過' : diff === 0 ? '今日' : 'あと ' + diff + ' 日'));
  $('owner').textContent = C.owner;
  $('unpaid').textContent = yen(C.amount - C.paid);
}
function renderMemo() {
  $('memo-body').textContent = C.memo || 'メモはまだ無い。';
  $('memo-meta').textContent = C.memo ? '更新 ' + C.memoAt.replaceAll('-', '/') + '（' + C.memoBy + '）' : '';
  $('memo-edit').textContent = C.memo ? 'メモを更新' : 'メモを書く';
}
function renderSections() {
  const tel = el('a', null, C.tel); tel.href = 'tel:' + C.tel.replace(/[^0-9+\-()]/g, '');
  kv($('contact'), [['電話番号', tel], ['住所', C.address]]);
  kv($('money'), [['見積金額（円）', yen(C.amount), 'num'], ['入金済み（円）', yen(C.paid), 'num']]);
  kv($('work'), [['工種', C.kind], ['工程', C.stage], ['完工予定日', C.end ? ymd(C.end) : blank()]]);
}
function renderDocs() {
  const ul = $('docs'); ul.replaceChildren();
  DOCS.slice(0, MAX_PREVIEW).forEach(([n, at]) => {
    const li = el('li'); const b = el('button', 'link', n); b.type = 'button'; b.dataset.act = n + ' を開く';
    li.append(b, timeEl(at, ymd(at))); li.lastChild.className = 'at'; ul.append(li);
  });
  if (DOCS.length > MAX_PREVIEW) {
    const li = el('li'); const b = el('button', 'link', 'すべての書類（' + DOCS.length + ' 件）'); b.type = 'button'; b.dataset.act = '書類の一覧を開く'; li.append(b); ul.append(li);
  }
}
function renderHist() {
  const ol = $('hist'); ol.replaceChildren();
  HIST.forEach((h) => {   // 金額と「円」は割らない（nw）
    const li = el('li'); const iso = h.at.length > 10 ? h.at.replace(' ', 'T') + ':00+09:00' : h.at;
    const text = el('span'); text.append(...h.text.split(/(\d[\d,]*\s円)/).map((s, i) => i % 2 ? el('span', 'nw', s) : s)); if (h.by) text.append(el('span', 'who', '（' + h.by + '）'));
    li.append(timeEl(iso, h.at.replaceAll('-', '/')), text); ol.append(li);
  });
  const last = HIST[0].at; const days = dn(TODAY) - dn(last);
  $('hist-sum').textContent = HIST.length + ' 件。最後の更新は' + (days === 0 ? '今日' : ' ' + days + ' 日前') + '。新しい順。';
}
document.addEventListener('click', (e) => { const b = e.target.closest('[data-act]'); if (b) $('msg').textContent = '「' + b.dataset.act + '」は、この例では実行しない。'; });
$('memo-edit').addEventListener('click', () => { $('memo-in').value = C.memo; $('memo-form').hidden = false; $('memo-edit').hidden = true; $('memo-in').focus(); });
function closeForm() { $('memo-form').hidden = true; $('memo-edit').hidden = false; $('memo-edit').focus(); }
$('memo-cancel').addEventListener('click', closeForm);
$('memo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  C.memo = $('memo-in').value.trim(); C.memoAt = NOW; C.memoBy = ME;
  HIST.unshift({ at: NOW, text: 'メモを変更', by: ME });   // 保存すると、履歴へ 1 件足す。現在値のメモは 1 か所だけ
  renderMemo(); renderHist(); closeForm(); $('msg').textContent = 'メモを更新した。履歴へ追加した。';
});
renderHead(); renderMemo(); renderSections(); renderDocs(); renderHist();
</script>
</body>
</html>
```

- 節は `section` と `h2`、値は `dl`。履歴は `ol`。期限・書類・履歴の日付は `time`（時刻のある履歴の `datetime` に日本時間のオフセット `+09:00` を付けた。日本時間は置いた前提）。メモの下の更新の行は文字だけ
- 絶対の日時は画面に文字で出し、ホバーの `title` に頼らない（S086）
- 状態の印と削除の「✕」は `aria-hidden`。メモを保存すると、`role="status"` の領域に結果を出す。スクリーンリーダーで実際にどう読まれるかは未検証
- 新しい機能と、非対応のときの姿（対応状況は本 skill で照合していない）: `clip-path`（読み上げ専用の文字を隠す）、`minmax(min(100%, 11rem), 1fr)`（古いブラウザーでは 1 列）、`word-break: auto-phrase`（履歴の折り返し位置。非対応のブラウザーでは、語の途中で折れうる）、JavaScript の `replaceAll`・`replaceChildren`。新しい色の指定（`oklch()` など）は使わない。動きは使わない（`prefers-reduced-motion` の分岐は要らない）
- UI ライブラリの詳細の部品を使う場合は、先に `../references/library-defaults.md` の「既定値の台帳」の 12（詳細画面）を確かめる。見た目やコードは写さず、見出しの要約・節の順・重複の除去を先に決める

## 初見検証

初めて見る人に、説明なしで答えてもらう設計である（実験の結果ではない）。「期限超過の案件を開く担当」が、最初の 10 秒で見つけられるかを確かめる。10 秒は本 skill の目安で、出典は無い。

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 着工の予定を 5 日過ぎている。施主の連絡待ち。未入金が 1,372,000 円 | 見出しのバッジと要約、メモの枠 |
| 何を操作できるか | 日程を変更・入金を記録・案件を編集・メモを更新・書類を開く・電話をかける | 主ボタン（1 つ）、ボタン、下線つきのリンク |
| どう操作するか | メモはその場で書き換え、保存で履歴に 1 件足される。日程と入金は見出しのボタン | メモの枠の「メモを更新」 |

最初の 10 秒の質問（担当者に聞く）:

| 質問 | 期待する答え | 見る場所 |
|---|---|---|
| 何が止まっているか | 着工日の再調整で、施主の連絡待ち | メモの枠 |
| 着工の予定はいつで、何日過ぎたか | 2026/11/11、5 日 | 見出しの要約 |
| 電話番号は | 000-0000-0003 | 連絡先と現場 |
| いくら残っているか | 1,372,000 円。見積 1,960,000 円から入金 588,000 円を引いた額 | 未入金（見出し）と金額の節 |
| 完工予定日は | まだ決まっていない（未設定） | 工事の内容の空欄 |
| 最後に更新したのは誰か、いつか | 佐伯 和也、2026/11/02 11:40（14 日前） | 履歴 |

## 点検

- 目的: 期限超過の案件を開いた担当が、止まっている理由・連絡先・残金を最初の画面で掴めるか。一覧が回した項目（対応表の 7 行）がすべて出ているか
- 重複: 7 つの情報が、現在値の置き場 1 か所になっている。履歴の金額は出来事の記録で、現在値の置き場ではない。値の検算: 未入金 1,372,000 = 1,960,000 − 588,000、超過 5 日 = 2026/11/16 − 2026/11/11、最終更新 14 日前 = 2026/11/16 − 2026/11/02、履歴 6 件
- メモ: 見出しの直下で、枠・地・太字で見分けられる。履歴に本文を再掲していない
- カード: 同じ枠のカードを積んでいない。枠と地を持つのはメモだけで、役割（重要）を伝えている（S291）
- 並び: 節の順 = DOM の順 = 狭い幅の順。履歴・削除が後ろ
- 空欄: 未設定（完工予定日）は空欄で読み上げ「未設定」。メモが空のときの表示を `#memo=none` で見た
- 配色: 新しい色は足していない。足した組み合わせの最小は、文字がライト 7.78・ダーク 8.33、非文字がライト 4.49・ダーク 5.57（`## 仕様` の表）。4.5:1 の原文は未照合
- 実測（Chrome 157.0.8103.79・macOS・1 環境、2026-11-16。ヘッドレスの Chrome を Playwright 経由の DevTools Protocol で操作し、幅を固定した。コード断片を md から抜き出した HTML を測った）:
  - 横はみ出し: 幅 1440・1024・961・960・959・390・320 px、ライトとダーク、状態 3 通り（既定・`#long=1`・`#memo=none`）の 42 通りで、`document.documentElement.scrollWidth` が `innerWidth` 以下（はみ出し 0）。読み上げ専用の文字を除くどの要素も、右端が `innerWidth` を超えない。金額・日付が行をまたいで割れた箇所は 0。括弧の中の語句は、390 px で「（受付から」「現地調査）」のように、語句の切れ目で折れる
  - 履歴の列: 390 px で日付 128 px・本文 176 px の 2 列、320 px で 1 列（本文 246 px）。直す前の版は、320 px で本文が 82 px だった
  - 最初の画面: メモの下端が、1440×900 で 373 px、390×844 で 480 px、320×640 で 572 px。未入金の下端は 141・257・284 px。メモと未入金は、スクロールせずに見える。履歴の下端（ページの上端から）は、1440×900 で 997 px、390×844 で 1398 px、320×640 で 1574 px（ページ全体の高さは 1123・1524・1700 px）
  - 操作（スクリプトで click と submit を実行）: 「メモを更新」でテキスト欄が開いてフォーカスが入り、保存で履歴が 6 件から 7 件になった。メモの本文・更新の行（`更新 2026/11/16 09:05（佐伯 和也）`）・履歴の最上段（`2026/11/16 09:05` のメモを変更）・履歴の見出しの下の 1 行（7 件。最後の更新は今日）が更新された。保存後・やめる後のフォーカスは「メモを更新」のボタンへ戻った。見出しのボタンは「…は、この例では実行しない。」を出した。書類は 5 件とリンク 1 行が出た。未入金は 1,372,000、次の期限は 2026/11/11（着工の予定）と 5 日超過。実際のキーボードでの Tab 操作は測っていない
- 未検証・未実施:
  - スクリーンリーダーでの読み上げ。Chrome 以外のブラウザー・他の OS・実機のスマートフォン。作った本人とは別の目での見直し。担当者への初見検証の実施（上の表は設計で、結果ではない）
  - 実在の業務データでの見え方。権限による出し分け。日程・入金の編集パネル。削除の確認。ダークでの灰色にした描画
- 推測の明示: 担当の作業の順・10 秒・要約の 3 項目・メモの枠・60rem・寸法・色・書類と履歴の値・履歴を新しい順にする選択は、本 skill の目安で、出典は無い。記事の主張は見解である（S293）。熟練者が密度を好むかは見解にとどまる

## この例の出典

S002、S012、S034、S035、S036、S037、S040、S047、S048、S056、S061、S065、S084、S086、S087、S090、S100、S122、S123、S125、S133、S258、S259、S260、S261、S265、S275、S283、S285、S288、S289、S290、S291、S293、S294、S297、S299、S301、S302、S304、S307。台帳は `../references/sources.md`。S258・S259・S260・S261・S265・S275 は、要旨の参照（逐語引用なし）である。区分 B は S304、区分 C は S301・S302・S307 である。他の skill の台帳の番号は使っていない。

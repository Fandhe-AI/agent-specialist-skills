# 例: DB の列を並べた一覧の作り直し（案件管理の一覧）

DB の案件テーブルの列を定義順にそのまま並べた一覧を、作業から逆算して作り直す例。題材は架空の小さなリフォーム会社の社内システムで、実在の製品・企業の画面の模倣は含まない。「列が多くて見にくい」「どの列を残すか決められない」「スマートフォンで主要な列が見えない」と相談されたとき、列の対応表（残す・まとめる・後ろへ回す・削る）を作るときに開く。この例で決めた配色と架空のデータは、同じ業務システムを題材にする残りの 4 件（`detail-page.md`・`in-table-visual-cues.md`・`filters-views-bulk-actions.md`・`audit-log-and-import-result.md`）と共通である。配色とデータは写さない。

## 依頼

- 製品: 架空のリフォーム会社「こがね住設」の社内システム「こがね案件管理」（架空）。案件（1 件の工事の依頼）を、受付から入金まで管理する
- 依頼文（架空）: 「案件の一覧が見にくい。DB の列を全部出したら 20 列になって、毎朝どの案件から電話すればいいか分からない。見やすくして」
- 現状（架空）: 案件テーブルの 20 列を、DB の定義順にそのまま並べた表。先頭は内部の連番、最後は更新者。20 列は 1 画面に収まらず、横スクロールで見る。工程は「見積」「契約」のようなコードの文字で、日付が 6 列（受付日から完工予定日まで）ある。金額はカンマが無く、左揃え。並びは登録の古い順。列の表示切替・CSV 出力のボタンを足し、工程コードの凡例を説明文で添え、最後にゼブラ縞と色を付けてある
- 想定ユーザーと作業: 工程管理の担当。毎朝 8 時 45 分に開き、進行中の案件（約 60 件。置いた前提）から、今日電話・手配する案件を 10 分ほどで決める。判断に要るのは、期限を過ぎたか・今日が期限か、誰の担当か、入金が残っているか（未入金が見積金額のどれだけか。半金が入っていれば、催促の言い方が変わる）、長く動いていないか。日中は、現場からスマートフォンで、自分の担当の今日の分を探して開く（置いた前提）
- 範囲外: 詳細画面（`detail-page.md`）、絞り込み・保存したビュー・一括操作の設計（`filters-views-bulk-actions.md`）、権限の設計、帳票・社内規程に基づく要件

### 根拠の範囲（先に読む）

- 出典のある事実は次のとおり。先頭列は人が読める識別子で、自動生成の ID にしない（S042）。列の既定の並びは利用者にとっての重要度で、関連する列は隣に置く（S043）。DB の列をすべて画面に出す必要はない（S296）。一覧の役割はすべての情報を見せることではなく、判断に必要な情報に絞る（S026）。何の情報があれば行動・判断できるかから考える（S025）。量の数値は右揃えで桁をそろえ（S002）、数字の幅をそろえる機能を使い（S012）、日付は左揃え（S003）、同じ列で単位や書式を混ぜない（S018）。既定の並びは主な作業を支える並びで（S010）、多くは最新か、最も対応が要るものが上（S029）。空値は並べ替えの向きに関わらず末尾（S096）。空値の書き方は割れる。Cloudscape はハイフン（S093）、Ant Design は `--`（S098）、Primer は記号を使わず空欄（S095）。並べ替えの列と向きを示す（S031）。色だけに頼らず（S048）、色・形・記号のうち 2 つ以上を使い（S061）、文字で状態を明示する（S056）。行動の期限は正確な日時で示し（S084）、短い相対表記を出すなら正確な日時へ届く手段を付ける（S086）。空の状態と絞り込みの 0 件は別（S094）、未設定と存在しない項目は見分ける（S100）。省略するなら全量の確認場所を決め、0 や無入力の表示を決める（S126）。縦罫線は視覚的に騒がしく（S030）、行の罫線は安易に消さない（S038）。ゼブラは行の状態の区別を難しくする（S028）。一方、NN/g は縞を、位置を見失わないための手段に数える（S045。出典どうしで割れる）。詳細への入口は目立つ 1 カ所（S039）。行全体が押せそうな強調は誤解を生む（S139）。行全体のクリックは、デジタル庁が不可（S020）、freee Vibes は遷移してよい（S119）と割れる。大きい表は見出し行を固定する（S045）。合計件数は目立つ場所に（S022）。非文字の部品は隣接色に 3:1 以上（S065）。カードは比較に不向き（S044、S298）
- 記事の主張（S282、S283、S284、S286、S287、S289、S290、S291、S292、S293）: SE の A さんの手順（表 → 機能 → 説明文 → 縞々 → 「お化粧」）と、デザイナーの B さんの手順（どう使うかをとことん考えてから、配置・機能・装飾。S283）の対比と、心得 6 か条。記事自身が、B さんの画面は「最適解」ではなく、登場人物・手順・画面は「フィクション」だと断る（S293）。この例は手順の型だけを借り、記事の画面は写さない。反応数は内容の正しさの証拠ではない
- 見解（区分 C）: 毎日多くの処理をする利用者なら、多少複雑でも多くの機能が 1 画面にある方が使いやすいかもしれない（S301）。使用頻度と習熟度が高い画面では、目的の情報を探す認知負荷を抑えることが作業速度に直結する（S302）。どちらも実測ではない。この例が、毎朝使う担当に情報を絞った一覧を選ぶ根拠にはしない
- 要旨の参照（逐語引用なし。数値は出典ありの欄に入れない）: 表は全項目を出す場所ではなく、列数の上限は設けない（S253）。単位は列見出しに入れる（S252）。まず表示項目を精査し、固定列は削れないときの手段（S254）。モバイルの一覧は、ステータスと最大 2 行分の情報に絞り、出し切れない情報は詳細へ回す（S257）。状態の列見出しは、何の状態かが分かる語にする（S262）。状態ラベルは 1 オブジェクトに 1 つで、日数はラベルに埋めず別の列に出す（S263）。0 件の 2 種類（S264）と、値が無い項目の 2 種類（S265）。数字・日付の表記（S274、S275）
- 本 skill の目安（出典なし）: 配色、寸法、行数、60rem の境目、5 つの対応状況の定義（「要対応」の 2 日以内を含む）、毎朝 10 分・約 60 件・10 秒の想定、サンプルの値のすべて
- 外れる点: S263（要旨）の状態ラベルは、段階を表す状態に絞る方針である。この例の `対応状況` は、工程と期限の関係から導く、朝の振り分け用のラベルで、方針から外れる。外れても、日数をラベルに埋めず別の列（次の期限）に出す点は守る。S262（要旨）の見出しの原則（ステータス）からも外れ、工程と呼び分けるために対応状況とする。工程そのもの（受付・現地調査・見積・契約・施工・完了・保留）は、詳細で見る
- 熟練者が表の密度を好むかは、国内の出典では見解と経験則にとどまる（S301、S302。C）。この例は、一覧の列を絞る一方、表の形と、1 画面で見える行数は保つ。S307 の 30 行以上という数は経験則（C）で、基準にしない

## 目的の一文

毎朝、今日動く案件を 10 秒で拾い、期限・対応状況・担当を開かずに判断できる一覧にする。

## 削るもの

20 列を、作業の問い（誰が・何を・何のために）から 3 つに分けた。識別は、どの案件か分かること。判断は、開かずに決められること。詳細確認は、開いてから見ること。この分け方は本 skill の整理で、根拠となる考え方は S025・S026 にある。削るのが先で、固定列は最後の手段にする（S254。要旨）。

### 列の対応表（前 20 列 → 後 7 列）

| 順 | 前（DB の列） | 区分 | 扱い | 後（行き先） | 理由 |
|---|---|---|---|---|---|
| 1 | 内部の連番 | 識別（人は読めない） | 削る | なし | 自動生成の ID を先頭にしない（S042）。案件番号があるので、人が使わない |
| 2 | 案件番号 | 識別 | 残す | 「案件」列の先頭。詳細への入口（ボタン） | 先頭は人が読める識別子（S042）。入口は 1 カ所（S039） |
| 3 | 顧客名 | 識別 | まとめる | 「案件」列。番号の右 | 番号だけでは、誰の工事か分からない。切らずに折り返す |
| 4 | 住所 | 詳細確認 | 後ろへ回す | 詳細 | 現地へ行く前に見る値で、朝の判断には要らない |
| 5 | 電話番号 | 詳細確認 | 後ろへ回す | 詳細 | 電話は詳細からかける。「たまに使う」だけの値は一覧に常時出さない（S026） |
| 6 | 工事名 | 識別 | まとめる | 「案件」列の 2 行目。2 行で切る | 補足の長文。全文の確認場所は詳細（S126） |
| 7 | 工種 | 詳細確認 | 後ろへ回す | 詳細 | 工事名で足り、朝の判断に使わない |
| 8 | 担当者 | 判断 | 残す | 「担当」列 | 自分の担当か、割り当てが要るかを見分ける |
| 9 | 工程コード（受付・現地調査・見積・契約・施工・完了・保留） | 判断 | まとめる（加工） | `対応状況` 列（5 値）。工程そのものは詳細 | コードの文字を、期限との関係に直して 1 つのラベルにする（S290）。日数はラベルに埋めない（S263。要旨） |
| 10 | 受付日 | 詳細確認 | 後ろへ回す | 詳細の経過 | 過ぎた節目の日付で、朝の判断に使わない |
| 11 | 現地調査日 | 判断 | まとめる | 「次の期限」列 | 工程が現地調査までのとき、これが次の期限になる |
| 12 | 見積提出日 | 判断 | まとめる | 「次の期限」列 | 工程が見積のとき、次の期限になる |
| 13 | 契約日 | 詳細確認 | 後ろへ回す | 詳細の経過 | 契約した日で、過ぎた節目の日付。次の期限にはならない |
| 14 | 着工予定日 | 判断 | まとめる | 「次の期限」列 | 工程が契約のとき、次の期限になる |
| 15 | 完工予定日 | 判断 | まとめる | 「次の期限」列 | 工程が施工のとき、次の期限になる |
| 16 | 見積金額 | 判断 | 残す | 「見積金額（円）」列 | 催促の判断で、未入金と並べて見る。入金が残っていても、見積金額のどれだけが残っているか（半金が入っているか）で、電話の言い方が変わる。関連する 2 列は隣に置く（S043）。並びの規則には使わない |
| 17 | 入金済額 | 判断 | まとめる（加工） | 「未入金（円）」列（見積金額 − 入金済額） | 催促の判断に要るのは、残りの額。入金済額そのものは詳細 |
| 18 | メモ | 詳細確認 | 後ろへ回す | 詳細の見出しの直下 | 長い文をセルに押し込まない（S297）。注意事項の見せ方は `detail-page.md` |
| 19 | 更新日時 | 判断 | まとめる（加工） | `経過（日）` 列 | 放置された案件を拾う。日時を日数に加工する（S290。例は S284）。絶対の日時は詳細（S086、S084） |
| 20 | 更新者 | 詳細確認 | 後ろへ回す | 詳細の履歴 | 朝の判断に使わない |

数え方: 扱いは、残す 3（順 2・8・16）、まとめる 9（3・6・9・11・12・14・15・17・19）、後ろへ回す 7（4・5・7・10・13・18・20）、削る 1（1）で、合計 20。区分は、識別 4（1・2・3・6）、判断 9（8・9・11・12・14・15・16・17・19）、詳細確認 7（4・5・7・10・13・18・20）で、合計 20。後の一覧は 7 列（案件・対応状況・次の期限・経過・担当・見積金額・未入金）に、操作用の選択チェックを足した形である。7 は結果の数で、列数の上限ではない（S253 は上限を設けず、十分に検討せよと述べる。要旨）。

- 日付 4 列（現地調査日・見積提出日・着工予定日・完工予定日）を 1 列にまとめた理由: 同時に意味を持つのは、いまの工程の次の節目 1 つだけだからである。受付日と契約日は過ぎた節目で、次の期限にならないので、詳細へ回した。開始日と終了日のように、どちらも並べ替えたい 2 つの値は、2 列に分ける（S024）。この例の 4 つの日付は、並べ替えたい対象が `次の期限` の 1 つなので、まとめた（本 skill の整理）
- 「後ろへ回す」の 7 列は消さない。詳細に残り、要約パネルから届く
- 削った列は 1 つだけである。残りは、まとめるか、後ろへ回した

### 避ける手順と取る手順、足さない・外すもの

国内の記事は、SE の A さんの手順と、デザイナーの B さんの手順を対比する（S282、S283）。この依頼の「現状」は、A さんの順で作られている。取り直した手順を段ごとに並べ、足さない・外すものを右端に添える。

| 段 | 避ける（記事の A さん。この例の現状） | 取る（記事の B さん。この例でやったこと） | 足さない・外すもの |
|---|---|---|---|
| 1 | 「まず情報を表をつかってきれいに整理」する（S282）。20 列を定義順に表にした | 「どう使うかをとことん考え」る（S283）。毎朝の工程管理の担当が、今日動く案件を決める作業と言い直し、列を識別・判断・詳細確認に分けた | 縦罫線を外す。視覚的に騒がしい（S030） |
| 2 | 「機能を追加」する（S282）。列の表示切替と CSV 出力のボタンを足して、横スクロールを補った | 「情報のグループ化や優先順位付け、加工」を徹底する（S283）。日付 4 列を 1 列に、更新日時を日数に、見積金額と入金済額を未入金に加工した（S290） | 列の表示切替のボタンを足さない。既定の列を決めるのが先で、切替は、役割ごとに見たい列が違うときの追加にとどめる |
| 3 | 「説明文を追記」する（S282）。工程コードの凡例を文で添えた | 一覧の形式を比べて選ぶ（S286）。表・グリッド・リスト・カードを比べ、この作業では表を選んだ（次の節）。「いきなり表をつくる」のを我慢する（S287）が、比べた結果が表になることもある | 凡例の説明文を外す。ラベルに文字を付けて言う |
| 4 | 「行を縞々にする」（S282）。ゼブラ縞と色を最後に足した | 優先順位の順に、強弱をつけて配置する（S283、S289）。対応状況と次の期限を先頭の近くに、数字を右揃えに、補足を小さく淡くした | ゼブラ縞を外す。NN/g は縞を、位置を見失わないための手段に数える（S045）。この例は、選択・現在の行・ホバーを地の色で区別するので、縞と衝突する（S028）。縞が合うのは、行の地で状態を示さず、行を目で追うだけの表（本 skill の整理）。行は罫線と余白で分ける（S038）。色だけの状態には印と文字を足す（S048、S061） |
| 5 | デザインを設計の後の「お化粧」と考える（S282） | 装飾は、「ここは押せますよ」「選択していますよ」「ここは重要ですよ」を表すために使う（S291）。対応状況の印、選択行、現在の行を、役割ごとに見せ分けた。「画面デザインとは画面設計である」（S292）ので、列の取捨選択を設計の段階で決めた | |

- A さんの手順は、必要な工程の順序が逆だったと読める（本 skill の整理）。A さんを悪者にしない。記事は、B さんの画面が最適解とは限らないと断る（S293）。本例は型だけを借りる
- 記事のラベルを消す話（S284）を、数百行になりうる表の列見出しに広げない（本 skill の整理）

## 構成

### 一覧の形式を比べる（S286 の 4 形式を、この作業で）

- 表: 採用（広い幅）。期限・経過・金額を並べ替えて比べるのが朝の作業で、表の形を保つ（S041、S044）。S286 は、柔軟なソートや絞り込みが得意と述べる
- リスト: 狭い幅で近い形になる（次の節）。カード・グリッド: 採用しない。比較・並べ替えが主の作業にカードは弱く（S044、S298）、写真や図が主ではない

### 画面の組み立て

上から、見出し → 表示の切替（今日対応 N 件・すべて N 件）と並びを戻すボタン → 並びと `今日対応` の定義の 1 行 → 表（表の見出しに合計件数。S022）→ 選んだ案件の要約パネル、の順にする。

- 一覧を主役にする。指標のカードを一覧の上に並べない。件数は、切替のボタンと表の見出しに出す。1440×900 で、「すべて」の 12 行がそのまま見える（点検の実測）
- 要約パネルは、一覧に出していない項目を確かめる場所で、`detail-page.md` の詳細画面の代わりである。案件番号のボタンを押すと、住所・電話番号・工程・最終更新の絶対の日時・メモなどが出る
- 行全体は押せない。入口は案件番号のボタンの 1 カ所で、ホバーの強調もそのボタンにだけ付ける（S039、S139）。行全体のクリックは流派が割れる。デジタル庁は行全体をリンクにしない（S020）。freee Vibes は、各行のクリックで個別の画面へ遷移させてよく、同じ操作を個別の画面でもできるようにする（S119）。この例が 1 カ所にしたのは、同じ行に選択のチェック・案件番号・見出しでの並べ替えがあり、行全体も押せると、どこを押すと何が起きるかが重なるため（本 skill の整理）。行クリックを採るなら、チェックと入口の押す範囲を分け、行の強調は控えめにする（S139）

### 狭い幅での出し方（390・320 px）

`SKILL.md` の「狭い幅での出し方」の 4 つから、「列を減らす」を選び、担当だけを案件の列の 2 行目へ寄せた。選んだ理由と、選ばなかった理由は次のとおり（条件は本 skill の整理）。

| 出し方 | 判断 | 理由 |
|---|---|---|
| 列を減らす | 採用 | 外出先での作業は、自分の担当の今日の分を見つけて開くこと。案件・対応状況・次の期限の 3 列に絞る。SmartHR の方針（S257。要旨・逐語引用なし）は、モバイルで表をリストに置き換え、ステータスと最大 2 行分の情報に絞って、出し切れない情報を詳細へ回す。絞る向きは同じである |
| 行を 2 段にする | 担当だけ採用 | 担当の列まで隠すと、自分の担当かどうかを、案件を 1 件ずつ開かないと確かめられない。担当を案件番号の下に小さく出す。見出しの無い行内の値なので「担当」の文字を付け、未割当は空欄でなく「担当 未設定」と書く（広い幅の空欄の規則から外れる）。案件の列は、番号・担当・顧客・工事名の 4 行になり、S257（要旨）の最大 2 行分には合わせていない。未入金・金額・経過まで 2 段にすると、1 画面の件数が減る。これらは広い画面でやる想定（本 skill の整理） |
| カードにする | 採用しない | 並べ替え・比較が主の作業にカードは弱い（S044、S298） |
| 横スクロール＋固定列 | 採用しない | 最後の手段で、列を減らせない場合に限る（S254。要旨）。この例は減らせる |

- 隠す列は、選択（チェック）・担当・経過・見積金額・未入金。選択を隠すのは、一括操作を広い画面の作業と置くため（本 skill の整理）。担当の値は案件の列の 2 行目に出る。経過・見積金額・未入金は、案件番号のボタンから要約パネルで見られる
- 境目は 60rem（本 skill の目安）。960 px で「案件」列が 265 px 確保でき、7 列が横スクロールなしで収まるため（点検の実測）。959 px 以下で 3 列にする
- 表の容器の中の横スクロールは使わない。表を縮めて文字を潰さない（S257。要旨）。320 px でも、ページは横にはみ出さない（点検の実測）
- 日付・バッジ・案件番号は、狭い幅（60rem 未満）で折り返せるようにする。表の幅に収まるうちは、自動の表の幅の計算で割れない（320 px・通常の文字で割れないことは点検の実測）。文字を大きくして収まらなくなったときだけ割れる（本 skill の目安）。表を `overflow-x: auto` の容器に入れる案は、見出し行の `position: sticky` が画面に固定されなくなるため採らない
- CSS は、コード断片の `@media`（59.99rem 未満の 2 つ）のとおり

## 仕様

### 並び・列・状態の規則

| 項目 | 値 | 根拠 |
|---|---|---|
| 列の順 | 案件 → 対応状況 → 次の期限 → 経過（日）→ 担当 → 見積金額（円）→ 未入金（円）。重要な順に左から。関連する見積金額と未入金は隣 | S043。順は本 skill の整理 |
| 先頭列 | 「案件」。案件番号（人が読める識別子）を先頭に、顧客名・工事名を続ける | S042 |
| 既定の並び | 次の期限が早い順。同じ日は経過が長い順。期限の無い案件は末尾。期限超過は日付が最も早いので、自然に先頭に来る | 主な作業を支える並び（S010）、最も対応が要るものが上（S029）、空値は末尾（S096）。具体の規則は本 skill の整理 |
| 並びの定義 | 「今日対応」は、期限超過か、次の期限が今日。優先度は、この DB に列が無いので、並びに入れない。優先度を入れるかは、業務で決まるので利用者に聞く | 本 skill の整理（出典なし） |
| 並べ替え | 見出しのボタン。押すと昇順、同じ列をもう一度押すと降順。空値は、どちらの向きでも末尾。現在の列と向きを見出しの印（↑↓）と `aria-sort` で示す | S031、S096。デジタル庁もソート可能な見出しを下線つきにする（S116）。印を ▲▼ にしないのは、期限超過の印 ▲ と衝突するため。前月比の増減に ↑↓ を使う例（`in-table-visual-cues.md`）とは、並べ替えの印が見出しのボタンの中だけに出て、データのセルに出る増減と場所が違う。同じ表に両方が出るときは、文字（昇順・降順）にする（本 skill の整理）。`並びを初期に戻す` のボタンで、初期の並びに戻せる（S130） |
| 罫線 | 行の下に横罫線だけ。縦罫線なし。ゼブラなし（縞を肯定する S045 との差は、上の段 4 の行に書いた） | S030、S038、S028 |
| 行の高さ | 内容しだい。余白は上下 6 px、左右 10 px（狭い幅は左右 6 px）。1 行目は 14 px、補足は 13 px | 本 skill の目安（出典なし）。密度は出典どうしで割れる（`SKILL.md` の食い違う論点）。既存の製品に規則があれば、それが優先する |

### 対応状況（色・印・文字）

状態は 5 つ。1 案件に 1 つのラベルを付ける（S263。要旨）。色だけに頼らず、印と文字を併せる（S048、S061、S056）。判定は、完了 → 保留 → 期限超過 → 要対応 → 進行中の順に、最初に当てはまったものにする。色の値は、コード断片の `--over` から `--hold-bg` までの組（ライトとダーク）にある。

| 対応状況 | 印 | 定義 |
|---|---|---|
| 期限超過 | ▲ | 未完了で保留でなく、次の期限が今日より前 |
| 要対応 | ◆ | 次の期限が、今日から 2 日以内（2 日は本 skill の目安） |
| 進行中 | ● | 上のどれでもない未完了 |
| 保留 | ‖ | 工程が保留。次の期限は無い |
| 完了 | ✓ | 工程が完了。次の期限は無い |

- バッジは、文字と同じ色の 1 px の枠で囲む。地の色は行の面との差が小さい（1.1〜1.3）ので、区別の手がかりにしない。枠が輪郭を担う
- 灰色に落としても、印の形（▲◆●‖✓）と文字で区別できる（S061 の点検の考え方。描画の確認は点検に書く）
- 状態の種類は少なく始める（S054）。5 つは、この例の朝の作業に要る最小の数（本 skill の整理。上限ではない）
- 日数（`3 日超過`）は、ラベルに入れず、`次の期限` の列の 2 行目に出す（S263。要旨）

### 選択行・現在の行・ホバー・フォーカス

4 つを、別々の見せ方にする（S291）。色の違いは小さいので、形の違いで見分けられるようにする。

| 場面 | 見せ方 | 色以外の手がかり |
|---|---|---|
| 選択 | チェックを入れる。行の地を淡いオリーブに | チェックの印。選択件数を、ボタンの並びに「2 件を選択中」と出す |
| 現在の行（要約パネルで開いている行） | 行の地を、選択より濃いオリーブに。広い幅では左端に 4 px の線 | 左端の線と、案件番号の `aria-current` |
| 選択かつ現在 | チェックと左端の線と濃い地が重なる | チェック＋線 |
| ホバー | 押せる要素（案件番号・見出しのボタン）だけに、淡い地と太い下線。行全体は強調しない | 下線の太さ。行全体の強調は、押せそうに見えて押せないので付けない（S139。行クリックの流派は「画面の組み立て」） |
| フォーカス | 2 px の輪（アクセント色）。消さない | 輪の形 |

- ゼブラを使わないので、選択・現在・ホバー・フォーカスの区別が、地の色の縞に埋もれない（S028）。縞を肯定する立場（S045）を採るなら、選択と現在の地の色をやめ、枠と印で見せる設計になる（本 skill の整理）
- 表示を切り替えると、選択を解除する。出典どうしで割れる論点で、割れ方は `filters-views-bulk-actions.md` で扱う（本 skill の整理）

### 数値・日時・文字列

| 項目 | 値 | 根拠 |
|---|---|---|
| 金額・日数 | 右揃え。`font-variant-numeric: tabular-nums` で桁の幅をそろえる。3 桁ごとの半角カンマ。単位は見出しに出し、セルには付けない（円・日） | 右揃え（S002）、桁の幅（S012）、同じ列で書式を混ぜない（S018）。カンマは要旨の参照（S274。逐語引用なし）、単位は見出し（S252。要旨・逐語引用なし） |
| 日付 | 2026/11/13 の形。左揃え。合計しない数字なので、右揃えにしない | 左揃え（S003）。書式は要旨の参照（S275。逐語引用なし） |
| 期限 | 絶対の日付を主に、2 行目に `3 日超過` 「今日」 `あと 2 日`。超過・残りは、相対の補助である | 行動の期限は正確な日時（S084）。 ` N 日超過`の書き方は本 skill の整理 |
| 経過 | 最終更新からの日数。数字だけ（単位は見出し）。絶対の日時は、要約パネルに `（6 日前、更新者）` と併記 | 相対に対応する正確な日時へ届く手段（S086）。ホバーの `title ` には頼らない（S086 は、` title` だけではキーボード利用者に届かないと述べる） |
| 顧客名（識別） | 切らずに折り返す | 識別子・状態は切らない（本 skill の整理）。切り詰めの既定は出典どうしで割れる（Cloudscape は切り詰めを既定にする S006、Primer は切り詰めを最後の手段にする S013） |
| 工事名（補足） | 2 行で切る（`line-clamp`）。全文は要約パネル | 省略するなら全量の確認場所を決める（S126）。2 行は本 skill の目安 |
| 案件番号 | 折り返さない（広い幅） | 本 skill の整理 |

### 空欄と空の状態

| 場面 | 見せ方 | 根拠 |
|---|---|---|
| 担当が未割当、見積前の見積金額 | 未設定。空欄のまま。読み上げの文字は「未設定」 | 未設定は空白（S100） |
| 契約前の未入金、期限が無い案件の次の期限 | 存在しない。「-」。読み上げの文字は「なし」 | 存在しない項目は記号（S100）。SmartHR も同じ向き（S265。要旨） |
| 未入金が 0 円 | 「0」。「-」と区別する | 0 の表示を決める（S126） |
| 案件が 1 件も無い | 表を出さず、 `案件はまだ登録されていない。` | 何も無い状態と 0 件は別（S094）。設計は S264（要旨） |
| 今日対応が 0 件 | 表の見出しを残し、 `今日対応の案件は 0 件。期限超過と、期限が今日の案件は見つからなかった。` と、すべてを見るボタン | 検索条件に該当するものが無いことを示す（S099）。表の見出しを残して別の条件を促す形は S264（要旨・逐語引用なし）。安心を保証する文言にしない（S101） |

空値の書き方は、出典が割れる。Cloudscape は空値にハイフンを使い（S093）、Ant Design は無いデータに `--` を出す（S098）。Primer は、`x` や `-` のような文字を使わない。スクリーンリーダーで不自然な体験になるため（S095）。この例は、見た目を 2 種に分け（未設定は空欄、存在しないは「-」）、読み上げは `sr` の文字（未設定・なし）で補う。Primer の懸念への答えとして置いたが、実際の読み上げは未検証である（点検）。

### コントラスト比（本 skill の計算。WCAG の相対輝度式による）

文字の基準 4.5:1 は、本 skill の台帳に WCAG 本文の逐語が無く、未照合である（SmartHR の自社基準は要旨の参照）。非文字の部品の 3:1 は S065。配色は 5 例共通の仮置きで、写さない。トークン一式は、コード断片の `:root` と、ダークの `@media` にある。ここには、最小値と、この例の判断に使った組だけを載せる。

| 組み合わせ（前景 / 背景） | ライト | ダーク |
|---|---|---|
| 本文 / 行の面 | 14.76 | 13.69 |
| 補助文字 / 行の面 | 7.55 | 8.20 |
| 案件番号（アクセント）/ 現在の行（文字の最小。ライト） | 4.74 | 5.65 |
| 補助文字 / 現在の行（文字の最小。ダーク） | 5.66 | 5.10 |
| 状態の文字 / バッジの地（5 状態の最小） | 6.18 | 6.64 |
| 枠線・チェックの枠 / 行の面（非文字） | 4.49 | 5.57 |
| 枠線・チェックの枠 / 現在の行（非文字の最小） | 3.37 | 3.46 |
| バッジの枠（文字色）/ 行の面（5 状態の最小。非文字） | 7.14 | 8.33 |
| バッジの枠 / 現在の行（5 状態の最小。非文字） | 5.36 | 5.18 |
| フォーカスの輪・現在の行の線 / 行の面（非文字） | 6.31 | 9.08 |

行の下の罫線（`--rule`）は、行を分ける装飾で、情報の担い手ではなく、3:1 を満たさない（本 skill の整理）。色を変えたら再計算する。

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| 列見出し（番号・顧客・工事） | `case_no`・`customer_nm`・`title` の 3 列 | 案件 | 3 つの識別を 1 列にまとめる |
| 列見出し（工程） | `stage` | 対応状況 | 何の状態かを言う。SmartHR は、状態の列見出しを原則ステータスとし、同じ表に状態が複数あって呼び分けるときだけ、状況を付けた語にする（S262。要旨・逐語引用なし）。この例は、工程と呼び分けるために対応状況とした |
| 列見出し（更新・金額） | `updated`・`amount`・`paid` | 経過（日）・見積金額（円）・未入金（円） | 加工した値と単位を見出しに出す（S252。要旨）。金額は残りの額に直す |
| 対応状況の値 | 見積・契約・施工（工程の文字） | 期限超過・要対応・進行中・保留・完了 | 印と文字で言う（S056） |
| 期限の 2 行目 | （無し） | 3 日超過・今日・あと 2 日 | 期限の見え方を補う。日数はラベルに埋めない（S263。要旨） |
| 表の見出し | 案件一覧 | 6 件（今日対応。全 12 件） | 合計件数を目立つ場所に（S022） |
| 切替のボタンと並びの説明 | 絞り込み／（無し） | 今日対応 6 件・すべて 12 件。並び: 次の期限が早い順。同じ日は経過が長い順。期限が無い案件は末尾。今日対応は、期限超過か、次の期限が今日の案件。 | 件数を出し、既定の並びと「今日対応」の定義を見える場所に書く |
| 選択件数 | （無し） | 2 件を選択中 | 選択があるときだけ出す（S121 は、選択件数を併せて表示すると述べる） |
| 並びを戻す | （無し） | 並びを初期に戻す | 戻る手段（S130） |

## コード断片

1 ファイルの HTML。ブラウザーで開くとそのまま動く。外部のライブラリ・フォント・画像・計測は使わない。データの描画は `textContent` と要素の組み立てで行い、生のデータを `innerHTML` に入れない。ダークは `prefers-color-scheme` で切り替える。URL の末尾に `#rows=1` や `#rows=0` を付けると、件数を変えて見られる。「今日」は 2026-11-16 に固定してある（`new Date()` を使わない）。60rem 未満では、担当の列を隠し、案件の列の 2 行目に担当を出す。

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>こがね案件管理 案件一覧</title>
<style>
:root {
  color-scheme: light dark;
  --bg: #f1f0ea; --surface: #fbfaf6; --head: #e7e6dc; --hover: #f0efe6; --sel: #e4e9c6; --cur: #d8dfae;
  --text: #25251e; --text-2: #52524a; --line: #76755f; --rule: #d2d1c4; --accent: #55631a; --on-accent: #ffffff;
  --over: #9b1c22; --over-bg: #f9e3e1; --act: #7a4a00; --act-bg: #f8e8c6; --prog: #234f7d; --prog-bg: #dfeaf6;
  --done: #17604d; --done-bg: #dcefe8; --hold: #4f4f46; --hold-bg: #e6e5dc;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #171814; --surface: #1f201b; --head: #2a2b24; --hover: #272820; --sel: #2f3718; --cur: #3b4520;
    --text: #ecebe1; --text-2: #b9b8aa; --line: #98978a; --rule: #3a3b32; --accent: #b9c96b; --on-accent: #1a2005;
    --over: #ff9f98; --over-bg: #3d1f1e; --act: #f2bf63; --act-bg: #392a0c; --prog: #9cc4f0; --prog-bg: #1b2b3e;
    --done: #86d6b8; --done-bg: #173128; --hold: #bdbcae; --hold-bg: #33332c;
  }
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--text);
  font: 0.875rem/1.5 system-ui, "Hiragino Sans", "Yu Gothic", "Noto Sans JP", sans-serif; }
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.page { max-width: 90rem; margin: 0 auto; padding: 0.75rem 1rem 2rem; }
h1 { margin: 0 0 0.5rem; font-size: 1.125rem; }
h1 small { margin-left: 0.5rem; color: var(--text-2); font-weight: 400; font-size: 0.8125rem; }
button { font: inherit; color: inherit; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.bar { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem 0.75rem; margin-bottom: 0.25rem; }
.views { display: inline-flex; flex-wrap: wrap; gap: 0.25rem; }
.views button, .reset { padding: 0.375rem 0.75rem; min-height: 2rem; background: var(--surface); border: 1px solid var(--line); border-radius: 6px; cursor: pointer; }
.views button[aria-pressed="true"] { background: var(--accent); color: var(--on-accent); font-weight: 700; }
.reset { border: 1px solid var(--line); border-radius: 6px; }
.picked { margin: 0; color: var(--text-2); }
.rule { margin: 0 0 0.5rem; color: var(--text-2); font-size: 0.8125rem; }

table { width: 100%; border-collapse: separate; border-spacing: 0; background: var(--surface); }
caption { padding: 0.375rem 0.5rem; text-align: left; font-weight: 700; } caption .total { font-size: 1rem; }
th, td { padding: 0.375rem 0.625rem; text-align: left; vertical-align: top; border-bottom: 1px solid var(--rule); }
thead th { position: sticky; top: 0; z-index: 1; background: var(--head); border-bottom: 1px solid var(--line); font-weight: 600; vertical-align: bottom; }
thead th button { padding: 0.125rem 0; border: 0; text-align: inherit; background: none; cursor: pointer; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1px; }
thead th button:hover { background: var(--hover); }
thead th button .ind { display: inline-block; min-width: 1em; text-decoration: none; }
th[scope="row"] { font-weight: 400; }
.num { text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
.date { white-space: nowrap; font-variant-numeric: tabular-nums; } .c-owner { white-space: nowrap; }
.rel { display: block; color: var(--text-2); font-size: 0.8125rem; } .dash { color: var(--text-2); }

.c-sel { width: 2.25rem; padding-right: 0; }
.c-sel input { width: 1.125rem; height: 1.125rem; margin: 0.1875rem 0 0; accent-color: var(--accent); }
.c-case { width: 36%; } .case { min-width: 0; overflow-wrap: anywhere; }
.case-no { padding: 0; border: 0; white-space: nowrap; background: none; cursor: pointer; font-weight: 700; font-variant-numeric: tabular-nums; color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }
.case-no:hover { background: var(--sel); text-decoration-thickness: 2px; }   /* ホバーは押せる要素だけ。行全体は強調しない */
.cust { margin-left: 0.5rem; }
.owner-sm { display: none; color: var(--text-2); font-size: 0.8125rem; }     /* 狭い幅だけ。担当の列を隠す代わりの 2 行目 */
.title { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; line-clamp: 2; overflow: hidden; color: var(--text-2); font-size: 0.8125rem; }

.st { display: inline-flex; align-items: baseline; gap: 0.25rem; padding: 0 0.5rem; border: 1px solid currentColor; border-radius: 4px; white-space: nowrap; font-weight: 600; font-size: 0.8125rem; line-height: 1.5; }
.st-over { color: var(--over); background: var(--over-bg); } .st-act { color: var(--act); background: var(--act-bg); }
.st-prog { color: var(--prog); background: var(--prog-bg); } .st-done { color: var(--done); background: var(--done-bg); }
.st-hold { color: var(--hold); background: var(--hold-bg); }

tbody tr.is-selected > * { background: var(--sel); } tbody tr.is-current > * { background: var(--cur); }
tbody tr.is-current td.c-sel { box-shadow: inset 4px 0 0 var(--accent); }
.empty { padding: 1rem 0.75rem; background: var(--surface); border-bottom: 1px solid var(--rule); } .empty p { margin: 0 0 0.5rem; }
.detail { margin-top: 1rem; padding: 0.75rem 1rem; background: var(--surface); border: 1px solid var(--line); border-radius: 6px; }
.detail h2 { margin: 0 0 0.5rem; font-size: 1rem; }
.detail dl { display: grid; grid-template-columns: max-content 1fr; gap: 0.25rem 1rem; margin: 0; }
.detail dt { color: var(--text-2); } .detail dd { margin: 0; min-width: 0; overflow-wrap: anywhere; }

/* 狭い幅（60rem 未満）: 列を減らす。案件・対応状況・次の期限だけを残し、担当は案件の列の 2 行目へ */
@media (max-width: 59.99rem) {
  .page { padding: 0.5rem 0.75rem 1.5rem; }
  .c-sel, .c-owner, .c-elapsed, .c-amount, .c-unpaid { display: none; }
  .c-case { width: auto; } th, td { padding: 0.375rem 0.375rem; }
  tbody tr.is-current td.c-sel { box-shadow: none; }
  tbody tr.is-current th.c-case { box-shadow: inset 4px 0 0 var(--accent); }
  .owner-sm, .cust { display: block; margin-left: 0; }
  .case-no { min-height: 2rem; }
  .detail dl { grid-template-columns: 1fr; gap: 0; } .detail dd { margin-bottom: 0.375rem; }
}
/* 狭い幅では、日付・バッジ・案件番号の折り返せない指定を外す。表の幅に収まるうちは、自動の表の幅の計算で割れない。文字を大きくして収まらなくなったときだけ割れる */
@media (max-width: 59.99rem) { .date, .st, .case-no { white-space: normal; overflow-wrap: anywhere; } }
</style>
</head>
<body>
<div class="page">
  <h1>案件一覧<small>こがね案件管理（架空）。今日は 2026/11/16 として表示する</small></h1>
  <div class="bar">
    <div class="views" role="group" aria-label="表示する案件">
      <button type="button" data-view="today" aria-pressed="true">今日対応 <span id="n-today"></span></button>
      <button type="button" data-view="all" aria-pressed="false">すべて <span id="n-all"></span></button>
    </div>
    <button type="button" class="reset" id="reset">並びを初期に戻す</button>
    <p class="picked" id="picked" role="status"></p>
  </div>
  <p class="rule" id="rule"></p>

  <table id="t">
    <caption id="cap"></caption>
    <thead>
      <tr>
        <th scope="col" class="c-sel"><span class="sr">選択</span></th>
        <th scope="col" class="c-case" data-key="no"><button type="button">案件<span class="ind" aria-hidden="true"></span></button></th>
        <th scope="col" class="c-state" data-key="state"><button type="button">対応状況<span class="ind" aria-hidden="true"></span></button></th>
        <th scope="col" class="c-due" data-key="due"><button type="button">次の期限<span class="ind" aria-hidden="true"></span></button></th>
        <th scope="col" class="c-elapsed num" data-key="elapsed"><button type="button">経過（日）<span class="ind" aria-hidden="true"></span></button></th>
        <th scope="col" class="c-owner" data-key="owner"><button type="button">担当<span class="ind" aria-hidden="true"></span></button></th>
        <th scope="col" class="c-amount num" data-key="amount"><button type="button">見積金額（円）<span class="ind" aria-hidden="true"></span></button></th>
        <th scope="col" class="c-unpaid num" data-key="unpaid"><button type="button">未入金（円）<span class="ind" aria-hidden="true"></span></button></th>
      </tr>
    </thead>
    <tbody id="rows"></tbody>
  </table>
  <div class="empty" id="empty" hidden></div>

  <section class="detail" id="detail" aria-labelledby="detail-h">
    <h2 id="detail-h">選んだ案件の要約（詳細画面の代わり）</h2>
    <p id="detail-hint">一覧の案件番号を押すと、ここに一覧へ出していない項目まで出る。</p>
    <dl id="detail-dl" hidden></dl>
  </section>
</div>

<script>
// 架空のデータ。今日は固定にして、描画のたびに期限の見え方が変わらないようにする
const TODAY = '2026-11-16';
const CASES = [
  { no: '2611-018', customer: '松尾 恵子 様', title: 'キッチンの入れ替え（壁付けから対面へ）', kind: '水まわり', owner: '柳瀬 結衣', stage: '見積', dueKind: '見積の提出', due: '2026-11-13', updated: '2026-11-09 16:20', updatedBy: '柳瀬 結衣', amount: 1284000, paid: null, address: '〇〇市桜台 2 丁目', tel: '000-0000-0001', memo: '搬入経路の階段が狭い。現地で幅を再確認する' },
  { no: '2611-021', customer: '株式会社 北山ハウジングサービス 賃貸管理部 ご担当者様', title: '外壁塗装と屋上防水の同時工事（全 12 棟のうち第 3 期の 4 棟、足場は 2 期の仮設を再利用）', kind: '外装', owner: '小野寺 隆', stage: '施工', dueKind: '完工の予定', due: '2026-11-16', updated: '2026-11-14 09:05', updatedBy: '小野寺 隆', amount: 12480000, paid: 6240000, address: '〇〇市港町 4 丁目の賃貸 4 棟', tel: '000-0000-0002', memo: '入居者への事前の通知は 11/12 に配布済み' },
  { no: '2610-097', customer: '田所 勝 様', title: '浴室の改修', kind: '水まわり', owner: '佐伯 和也', stage: '契約', dueKind: '着工の予定', due: '2026-11-11', updated: '2026-11-02 11:40', updatedBy: '佐伯 和也', amount: 1960000, paid: 588000, address: '〇〇市柳町 1 丁目', tel: '000-0000-0003', memo: '施主から着工日の再調整の連絡待ち' },
  { no: '2611-003', customer: '荒井 美穂 様', title: '玄関ドアの交換', kind: '建具', owner: '三好 彩', stage: '現地調査', dueKind: '現地調査', due: '2026-11-17', updated: '2026-11-13 15:10', updatedBy: '三好 彩', amount: null, paid: null, address: '〇〇市松原 3 丁目', tel: '000-0000-0004', memo: '' },
  { no: '2610-088', customer: '森下 義雄 様', title: '洗面台の交換', kind: '水まわり', owner: '久保田 誠', stage: '施工', dueKind: '完工の予定', due: '2026-11-25', updated: '2026-11-12 13:30', updatedBy: '久保田 誠', amount: 98000, paid: 98000, address: '〇〇市緑ヶ丘 5 丁目', tel: '000-0000-0005', memo: '' },
  { no: '2610-074', customer: '石渡 聡 様', title: '屋根の葺き替え', kind: '外装', owner: '佐伯 和也', stage: '施工', dueKind: '完工の予定', due: '2026-12-04', updated: '2026-11-10 17:45', updatedBy: '佐伯 和也', amount: 3780000, paid: 1890000, address: '〇〇市高台 2 丁目', tel: '000-0000-0006', memo: '雨天で 2 日遅れ。残りの日程は天気しだい' },
  { no: '2609-201', customer: '宮内 さつき 様', title: '和室の洋室化', kind: '内装', owner: '柳瀬 結衣', stage: '保留', dueKind: '', due: null, updated: '2026-10-05 10:00', updatedBy: '柳瀬 結衣', amount: 2350000, paid: null, address: '〇〇市中央 6 丁目', tel: '000-0000-0007', memo: '施主の都合で来春まで保留。連絡は 2 月以降' },
  { no: '2608-134', customer: '有限会社 青葉ベーカリー 様', title: '店舗厨房の床と排水の改修', kind: '水まわり', owner: '三好 彩', stage: '完了', dueKind: '', due: null, updated: '2026-10-30 18:00', updatedBy: '三好 彩', amount: 5420000, paid: 5420000, address: '〇〇市駅前 1 丁目', tel: '000-0000-0008', memo: '' },
  { no: '2611-009', customer: '尾上 孝 様', title: '外構フェンスの補修', kind: '外装', owner: '小野寺 隆', stage: '契約', dueKind: '着工の予定', due: '2026-11-16', updated: '2026-11-10 14:20', updatedBy: '小野寺 隆', amount: 412500, paid: 0, address: '〇〇市桜台 4 丁目', tel: '000-0000-0009', memo: '' },
  { no: '2611-025', customer: '河合 澄子 様', title: '窓の断熱改修（内窓 8 か所）', kind: '建具', owner: '久保田 誠', stage: '見積', dueKind: '見積の提出', due: '2026-11-18', updated: '2026-11-15 10:30', updatedBy: '久保田 誠', amount: 1176000, paid: null, address: '〇〇市港町 2 丁目', tel: '000-0000-0010', memo: '' },
  { no: '2610-061', customer: '中條 保 様', title: 'トイレの交換', kind: '水まわり', owner: '柳瀬 結衣', stage: '施工', dueKind: '完工の予定', due: '2026-11-14', updated: '2026-11-13 12:00', updatedBy: '柳瀬 結衣', amount: 286000, paid: 100000, address: '〇〇市柳町 7 丁目', tel: '000-0000-0011', memo: '' },
  { no: '2611-030', customer: '野沢 公平 様', title: '壁紙の張り替え', kind: '内装', owner: null, stage: '受付', dueKind: '現地調査', due: '2026-11-16', updated: '2026-11-16 08:10', updatedBy: '受付', amount: null, paid: null, address: '〇〇市松原 1 丁目', tel: '000-0000-0012', memo: '担当が未割当' }
];
// 確認用: location.hash に #rows=0 や #rows=1 を付けると、件数を変えて描画できる
const m = /rows=(\d+)/.exec(location.hash);
const DATA = m ? CASES.slice(0, Number(m[1])) : CASES;

const dayNum = (s) => { const [y, mo, d] = s.slice(0, 10).split('-').map(Number); return Math.round(Date.UTC(y, mo - 1, d) / 86400000); };
const TODAYN = dayNum(TODAY);
const STATES = { over: ['期限超過', '▲', 0], act: ['要対応', '◆', 1], prog: ['進行中', '●', 2], hold: ['保留', '‖', 3], done: ['完了', '✓', 4] };   // [文字, 印, 並びの順]
// 対応状況は 1 案件に 1 つ（工程と期限から導く）。日数はラベルに埋めず、次の期限の列に出す
function derive(r) {
  const diff = r.due ? dayNum(r.due) - TODAYN : null;
  let state = 'prog';
  if (r.stage === '完了') state = 'done';
  else if (r.stage === '保留') state = 'hold';
  else if (diff !== null && diff < 0) state = 'over';
  else if (diff !== null && diff <= 2) state = 'act';
  return { ...r, diff, state, elapsed: TODAYN - dayNum(r.updated),
    unpaid: r.paid === null || r.amount === null ? null : r.amount - r.paid };
}
const ROWS = DATA.map(derive);
const isToday = (r) => r.state === 'over' || r.diff === 0;   // 今日対応 = 期限超過、または次の期限が今日

const KEYS = {
  no: (r) => r.no, state: (r) => STATES[r.state][2], due: (r) => r.due ? dayNum(r.due) : null,
  elapsed: (r) => r.elapsed, owner: (r) => r.owner, amount: (r) => r.amount, unpaid: (r) => r.unpaid
};
const DEFAULT_SORT = { key: 'due', dir: 'asc' };
let sort = { ...DEFAULT_SORT }, view = 'today';
const selected = new Set();
let current = null;

function compare(a, b) {
  const va = KEYS[sort.key](a), vb = KEYS[sort.key](b);
  if (va === null && vb !== null) return 1;          // 空値は並べ替えの向きに関わらず末尾
  if (vb === null && va !== null) return -1;
  if (va !== null && va !== vb) {
    const c = va < vb ? -1 : 1;
    return sort.dir === 'asc' ? c : -c;
  }
  return b.elapsed - a.elapsed || (a.no < b.no ? -1 : 1);   // 同じなら経過が長い順
}

const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; };
const yen = (n) => n.toLocaleString('ja-JP');
const ymd = (s) => s.slice(0, 10).replaceAll('-', '/');
function blank(td) { td.append(el('span', 'sr', '未設定')); return td; }                     // 未設定は空欄
function none(td) { td.append(el('span', 'dash', '-'), el('span', 'sr', 'なし')); return td; }   // 存在しない項目は「-」

function row(r) {
  const tr = el('tr');
  tr.dataset.no = r.no;
  const sel = el('td', 'c-sel');
  const cb = el('input'); cb.type = 'checkbox'; cb.checked = selected.has(r.no);
  cb.setAttribute('aria-label', r.no + ' を選択');
  cb.addEventListener('change', () => { cb.checked ? selected.add(r.no) : selected.delete(r.no); tr.classList.toggle('is-selected', cb.checked); showPicked(); });
  sel.append(cb);

  const th = el('th', 'c-case'); th.scope = 'row';
  const box = el('div', 'case');
  const open = el('button', 'case-no', r.no); open.type = 'button';
  open.addEventListener('click', () => { current = r.no; markCurrent(); showDetail(r); });
  const own = el('div', 'owner-sm', '担当 ' + (r.owner || '未設定'));   // 狭い幅だけ見える。広い幅は担当の列
  box.append(open, own, el('span', 'cust', r.customer), el('div', 'title', r.title));
  th.append(box);

  const st = el('td', 'c-state'); const s = STATES[r.state];
  const badge = el('span', 'st st-' + r.state); badge.append(el('span', null, s[1]), el('span', null, s[0]));
  badge.firstChild.setAttribute('aria-hidden', 'true');
  st.append(badge);

  const due = el('td', 'c-due date');
  if (r.due) {
    const t = el('time', null, ymd(r.due)); t.dateTime = r.due; due.append(t);
    due.append(el('span', 'rel', r.diff < 0 ? (-r.diff) + ' 日超過' : r.diff === 0 ? '今日' : 'あと ' + r.diff + ' 日'));
  } else none(due);

  const el1 = el('td', 'c-elapsed num', String(r.elapsed));
  const owner = el('td', 'c-owner'); r.owner ? owner.append(r.owner) : blank(owner);
  const amount = el('td', 'c-amount num'); r.amount === null ? blank(amount) : amount.append(yen(r.amount));
  const unpaid = el('td', 'c-unpaid num'); r.unpaid === null ? none(unpaid) : unpaid.append(yen(r.unpaid));
  tr.append(sel, th, st, due, el1, owner, amount, unpaid);
  tr.classList.toggle('is-selected', selected.has(r.no));
  tr.classList.toggle('is-current', current === r.no);
  if (current === r.no) open.setAttribute('aria-current', 'true');
  return tr;
}

function markCurrent() {
  document.querySelectorAll('#rows tr').forEach((tr) => {
    const on = tr.dataset.no === current;
    tr.classList.toggle('is-current', on);
    const b = tr.querySelector('.case-no');
    on ? b.setAttribute('aria-current', 'true') : b.removeAttribute('aria-current');
  });
}
function showPicked() { document.getElementById('picked').textContent = selected.size ? selected.size + ' 件を選択中' : ''; }

function showDetail(r) {
  const dl = document.getElementById('detail-dl');
  dl.replaceChildren();
  const add = (k, v) => { dl.append(el('dt', null, k), el('dd', null, v)); };
  add('案件番号', r.no); add('顧客', r.customer); add('工事名', r.title); add('工種', r.kind);
  add('住所', r.address); add('電話番号', r.tel); add('担当', r.owner || '未割当');
  add('工程', r.stage + (r.dueKind ? '（次の期限は ' + r.dueKind + '）' : ''));
  add('次の期限', r.due ? ymd(r.due) : '-');
  add('最終更新', r.updated.replaceAll('-', '/') + '（' + r.elapsed + ' 日前、' + r.updatedBy + '）');
  add('見積金額（円）', r.amount === null ? '未設定' : yen(r.amount));
  add('入金済み（円）', r.paid === null ? '-' : yen(r.paid));
  add('メモ', r.memo || '（なし）');
  dl.hidden = false; document.getElementById('detail-hint').hidden = true;
}
function clearDetail() { document.getElementById('detail-dl').hidden = true; document.getElementById('detail-hint').hidden = false; }

const SORT_NAME = { no: '案件番号', state: '対応状況', due: '次の期限', elapsed: '経過', owner: '担当', amount: '見積金額', unpaid: '未入金' };
function render() {
  const list = ROWS.filter((r) => view === 'all' || isToday(r)).sort(compare);
  const body = document.getElementById('rows');
  body.replaceChildren(...list.map(row));
  document.getElementById('n-today').textContent = ROWS.filter(isToday).length + ' 件';
  document.getElementById('n-all').textContent = ROWS.length + ' 件';
  const cap = document.getElementById('cap');
  cap.replaceChildren(el('span', 'total', list.length + ' 件'), document.createTextNode('（' + (view === 'today' ? '今日対応' : 'すべて') + '。全 ' + ROWS.length + ' 件）'));
  const isDefault = sort.key === DEFAULT_SORT.key && sort.dir === DEFAULT_SORT.dir;
  document.getElementById('rule').textContent = isDefault
    ? '並び: 次の期限が早い順。同じ日は経過が長い順。期限が無い案件は末尾。今日対応は、期限超過か、次の期限が今日の案件。'
    : '並び: ' + SORT_NAME[sort.key] + 'の' + (sort.dir === 'asc' ? '昇順' : '降順') + '。同じ値は経過が長い順。空は末尾。';
  document.querySelectorAll('thead th[data-key]').forEach((th) => {
    const on = th.dataset.key === sort.key;
    on ? th.setAttribute('aria-sort', sort.dir === 'asc' ? 'ascending' : 'descending') : th.removeAttribute('aria-sort');
    th.querySelector('.ind').textContent = on ? (sort.dir === 'asc' ? '↑' : '↓') : '';
  });
  const empty = document.getElementById('empty');
  empty.hidden = list.length > 0;
  document.getElementById('t').hidden = list.length === 0 && ROWS.length === 0;
  empty.replaceChildren();
  if (!list.length) {
    if (ROWS.length === 0) empty.append(el('p', null, '案件はまだ登録されていない。'));   // データ無し
    else {                                                                               // 絞り込みで 0 件
      empty.append(el('p', null, '今日対応の案件は 0 件。期限超過と、期限が今日の案件は見つからなかった。'));
      const b = el('button', 'reset', 'すべての案件を見る'); b.type = 'button'; b.addEventListener('click', () => { setView('all'); document.querySelector('.views [data-view=all]').focus(); });
      empty.append(b);
    }
  }
  if (current && !list.some((r) => r.no === current)) { current = null; clearDetail(); }
}
function setView(v) {
  view = v; selected.clear(); showPicked();
  document.querySelectorAll('.views button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === v)));
  render();
}
document.querySelectorAll('.views button').forEach((b) => b.addEventListener('click', () => setView(b.dataset.view)));
document.querySelectorAll('thead th[data-key] button').forEach((b) => b.addEventListener('click', () => {
  const key = b.parentElement.dataset.key;
  sort = sort.key === key ? { key, dir: sort.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'asc' };
  render();
}));
document.getElementById('reset').addEventListener('click', () => { sort = { ...DEFAULT_SORT }; render(); });
render();
</script>
</body>
</html>
```

- 表は `table`・`caption`・`th scope` で組み、並べ替えは見出しの中のボタンで操作し、`aria-sort` を付ける。並べ替えで表を作り直しても、フォーカスは見出しのボタンに残る
- 新しい機能と、非対応のときの姿（対応状況は本 skill で照合していない）: `line-clamp`（工事名の 2 行切り。非対応なら全文が出る）、`accent-color`（チェックの色。非対応なら既定の色）、`clip-path`（読み上げ専用の文字を隠す）、JavaScript の `replaceAll`・`replaceChildren`（古いブラウザーでは動かない）。新しい色の指定（`oklch()` など）は使わない
- `CASES` は、次の期限（`due`）と、その種類（`dueKind`）を、工程から導いた値で持つ。DB には日付が 6 列あるが、導出の規則は共有設定のとおりで、コードでは省いた
- 動きは使わない（`prefers-reduced-motion` の分岐は要らない）
- UI ライブラリの表の部品を使う場合は、先に `../references/library-defaults.md` の「既定値の台帳」の 1（数字）・3（状態）・7（狭い画面）・10（並べ替え・支援技術）を確かめる。見た目やコードは写さず、列・状態・見出しの定義（このファイルの対応表）を先に作る

## 初見検証

初めて見る人に、説明なしで答えてもらう設計である（実験の結果ではない）。毎朝処理する担当が、最初の 10 秒で見つけられるかを確かめる。10 秒は本 skill の目安で、出典は無い。

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 期限超過の 3 件と、今日が期限の 3 件が、上の 6 行にある | 対応状況の印（▲◆）と、次の期限の 2 行目 |
| 何を操作できるか | 今日対応とすべての切替、見出しでの並べ替え、案件番号を開く | 下線つきの見出し、押された状態の切替、下線つきの案件番号 |
| どう操作するか | 見出しのボタンで並べ替え、案件番号のボタンで要約を開く。行全体は押せない | 見出しの印（↑）、案件番号のボタン |
| 今日、電話する案件はいくつか | 6 件 | 表の見出しと、切替のボタンの件数 |
| 今日対応の中で、いちばん長く動いていない案件は | 2610-097（14 日） | 経過（日）の列 |
| 担当が決まっていない案件は | 2611-030 | 担当の空欄（狭い幅は「担当 未設定」） |
| 入金が残っているのに、期限を過ぎた案件は | 2610-097 と 2610-061 | 対応状況が期限超過で、未入金が数字の行 |
| 2611-018 の未入金が「-」なのはなぜか | まだ契約前で、請求が存在しない | 「-」と、要約パネルの入金済み |
| 390 px で、柳瀬 結衣の今日対応は | 2611-018 と 2610-061 | 案件の列の 2 行目の担当 |

## 点検

- 目的と列: 毎朝の担当が、今日動く案件を、開かずに判断できるか。20 列を 7 列に絞り、削った列の行き先（対応表の 20 行）に抜けが無いか。先頭列が人の読める識別子（S042）で、重要な順（S043）。次の期限になる日付 4 列が 1 列に、更新日時が日数に、入金済額が未入金に加工されている
- 数字: 右揃え・桁の幅がそろい、単位は見出しにある。「0」と「-」と空欄が区別できる（S002、S012、S100、S126）
- 状態: 5 つの状態が、色・印・文字の 3 つで区別できる。ライトの 1440 px で、画面全体を灰色にした描画を目視し、印と文字だけで 5 つを見分けられた（S061 の考え方。ダークは未確認）。日数をラベルに埋めていない
- 並び: 既定の並びが、期限の早い順・同じ日は経過が長い順で、空は末尾。見出しの印と `aria-sort` が一致し、並びを戻せる
- 選択行・現在の行: ホバー・選択・現在・フォーカスが別々の見せ方で、選択と現在が重なった行も読める。行全体のホバー強調は無い（S139）
- 狭い幅: 3 列で、主要な情報が見え、担当が案件の列の 2 行目に出る。320 px でページが横にはみ出さない。表の容器の中の横スクロールを使っていない
- 同じ情報の重ね方: 一覧の中では、同じ値を複数の列に出していない（対応状況と期限の 2 行目は、別の情報）。要約パネルは、一覧に無い項目を出す場所だが、案件を特定する項目（案件番号・顧客・工事名・担当・次の期限・見積金額）は、一覧の値を確かめるために重ねている。重なりを許す範囲は、詳細画面（`detail-page.md`）で決める
- 配色: 文字は本 skill の計算で最小 4.74（ライト）・5.10（ダーク）、非文字は最小 3.37・3.46（`## 仕様` の表）。4.5:1 の原文は未照合
- 実測（Chrome 157.0.8103.79・macOS・1 環境、2026-11-16。ヘッドレスの Chrome を Playwright 経由の DevTools Protocol で操作し、幅を固定した。コード断片を md から抜き出した HTML を測った）:
  - 描画: 幅 1440・1024・961・960・959・800・640・390・320 px、ライトとダークの 18 通りで、`document.documentElement.scrollWidth` が画面幅と同じ（はみ出し 0）。`#rows=0`・`#rows=1` も 1440・390・320 px の 12 通りで同じ。「案件」列は 960 px で 265 px。959 px 以下で担当の列が隠れ、担当が案件の列の 2 行目に 6 行とも出た。表のセルの数字・日付・括弧が行をまたいで割れた箇所は、18 通りで 0。1440×900 で、今日対応の 6 行も、すべての 12 行も、スクロールなしで見える（行の高さは 54 px、工事名が 2 行の行は 73 px）
  - 操作: 既定の並びは 2610-097、2611-018、2610-061、2611-009、2611-021、2611-030。見積金額・未入金の昇順・降順で、空値が末尾に来た。印は ↑↓ で、`aria-sort` は並べ替えた列にだけ付き、Enter で並べ替えてもフォーカスは見出しのボタンに残った。並びを初期に戻せた。選択 2 件で「2 件を選択中」、案件番号を押すと `aria-current` が付いて要約パネルが開き、表示を切り替えると選択が解除された。今日対応が 0 件の表示は、確認用に「今日対応」の判定を常に偽にした複製で描画し、文言とボタンの動作（フォーカスは「すべて」の切替へ移る）を確かめた。配布するコードでは確かめていない
  - キーボードと固定・文字拡大: Tab を 22 回押すと、切替・並びを戻す・見出しの 7 つのボタン・各行のチェックと案件番号の順に、最後の案件番号へ着き、フォーカスの輪は 2 px の実線だった。高さ 400 px でスクロール 300 px のとき、見出し行の上端は 0 に留まった（`position: sticky`）。`html` の `font-size` だけを 200% にすると（メディアクエリの `rem` は変わらない）、1440 px で 1538 px と、ページが横にはみ出す（広い幅の 7 列。未対応）。390・320 px では、折り返しを許す指定により 390・320 px（はみ出し 0。変更前は 559 px）。ブラウザーの文字サイズの設定は未確認。狭い幅の折り返しを許す指定にしたあと、`html` の `font-size` を 200% にした 320 px で、`scrollWidth` が 320（変更前は 559）。1440 px の表の位置は変更前と同じ
- 未検証・未実施: スクリーンリーダーでの読み上げ（`未設定`・`なし`・`aria-sort`・`aria-current`）。Chrome 以外のブラウザー・他の OS・実機のスマートフォン。ダークの灰色にした描画。Shift+Tab での逆順・並べ替え後のフォーカスの通し。作った本人とは別の目での見直し。担当者への初見検証の実施（上の表は設計で、結果ではない）。実在の業務データでの見え方（約 60 件・数百件、権限による列の出し分け）
- 推測の明示: 毎朝 10 分・約 60 件・8 時 45 分・10 秒・2 日以内・60rem・寸法・色・サンプルの値は、本 skill の目安で、出典は無い。記事の手順の対比は、記事の見解である（S293）。熟練者が密度を好むかは見解にとどまる（S301、S302。C）。業務の優先度の定義は、相談者の業務で決まる

## この例の出典

S002、S003、S006、S010、S012、S013、S018、S020、S022、S024、S025、S026、S028、S029、S030、S031、S038、S039、S041、S042、S043、S044、S045、S048、S054、S056、S061、S065、S084、S086、S093、S094、S095、S096、S098、S099、S100、S101、S116、S119、S121、S126、S130、S139、S252、S253、S254、S257、S262、S263、S264、S265、S274、S275、S282、S283、S284、S286、S287、S289、S290、S291、S292、S293、S296、S297、S298、S301、S302、S307。台帳は `../references/sources.md`。S252・S253・S254・S257・S262・S263・S264・S265・S274・S275 は、要旨の参照（逐語引用なし）である。区分 C は S301・S302・S307 である。他の skill の台帳の番号は使っていない。

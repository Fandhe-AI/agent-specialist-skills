# 例: 表の中の視覚化（案件の一覧と月次の受注）

案件の一覧と月次の受注の表に、期限・経過・残金・前月比を「読まなくても分かる」手がかりとして足す例。題材は架空の小さなリフォーム会社の社内システムで、実在の製品・企業の画面の模倣は含まない。「もっと視覚的に分かるようにして」「グラフを足して」と相談されたとき、状態の印・相対時刻と絶対時刻の併記・増減の印を先に決め、データバーを置く列と置かない列を判断するときに開く。一覧の列の取捨選択は `list-from-db-columns.md`。配色と架空のデータは、同じ業務システムを題材にする残りの例と共通である。配色とデータは写さない。

## 依頼

- 製品: 架空のリフォーム会社「こがね住設」の社内システム「こがね案件管理」（架空）。案件の一覧と、月次の受注の表
- 依頼文（架空）: 「一覧を見ても、どれが危ないのか、いくら残っているのか、今月は先月より良いのか悪いのかが、分からない。グラフを入れて、視覚的に分かるようにして」
- 現状（前の版。架空）: 期限は `2026-11-11` の文字だけ。更新日時は `2026-11-02 11:40:00` の文字だけ。状態は色だけの丸。金額はカンマが無く左揃え。見積金額・未入金・経過の 3 列すべてに棒を付け、月次の表は受注金額だけで、増減は緑と赤の「▲▼」
- 想定ユーザーと作業: 工程管理の担当。毎朝、一覧を 1 分で走査し、危ない案件・残金の大きい案件・動いていない案件に目を付ける。月初に、事務の担当が前月の受注を確かめる（置いた前提）
- 範囲外: 列の取捨選択（`list-from-db-columns.md`）、図の種類・軸・色・不確実性（designer-dataviz。導入されていれば）、絞り込み・一括操作（`filters-views-bulk-actions.md`）

### 根拠の範囲（先に読む）

- 出典のある事実: 色だけに頼らない（S048、S064）。色・形・記号のうち 2 つ以上（S061）。増減には「+」「-」・山形・矢印のどれかを付け、色は任意（S062）。一覧の中から印を探す速さは、色とアイコンの両方を変えると文字だけより約 37% 速い（S063。一覧の中の印を探す課題の実験で、状態の意味の理解の実験ではない）。長さと 2 次元の位置で量を伝え、色は量に使わない（S074、S059）。小さな図は、近くの数値で量を補う（S077。sparkline についての記述で、棒への当てはめは本 skill の整理）。表にグラフィックを入れない（S066）。データバーは原則使わず、使うなら棒と背景・ラベルと棒のコントラストを確かめる（S079）。表は個々の値・正確な値に向く（S080）。列ごとに尺度が違う棒は、大きさを比べられない（S081）。濃淡や棒は 2 列だけの例（S082）。アイコンや図のような視覚的な印を列に多く置く表は、行の間隔を決める条件に挙げられる（S137。引用は条件の節だけ）。図の部品は背景に対して 3:1（S053。S065）。比較の基準は、目標や前年の同じ値（S075）。現在値だけでなく、推移と期間の比較（S068）。相対時刻はほとんどの場面で（S067）、1 か月を超えたら日時（S083）。期限は正確な日時（S084）。実行中は経過か残り（S085）。短い相対表記には、正確な日時へ届く手段（S086）。精度が要る利用者には絶対（S088）。時刻にはラベルと UTC のオフセット（S090）。数字は右揃え・桁の幅をそろえ（S002、S012）、同じ列で書式を混ぜない（S018）。数字は単位より大きく（S299）。未設定は空白、存在しない項目は「-」（S100）
- 記事の主張（S284、S290、S291、S293）: 日時より「1 週間前」「明日」の方が会話につながる（S284）。DB の値と画面の表示を同じにしない（S290）。装飾は「重要」などの役割を伝える（S291）。記事の画面は写さない
- 区分 C: 相対時刻の表記は、現在から離れるほど範囲が広がり、困惑を生むことがある（S305）。見解で、実測ではない
- 要旨の参照（逐語引用なし）: 状態ラベルは 1 つで、日数は別の列に文字で出す（S263）。単位は列見出し（S252）。値が無い項目の表示（S265）。数字・日付・時刻の表記（S274、S275）
- 本 skill の目安（出典なし）: データバーの寸法（5rem × 0.5rem）・最小幅 2 px・置く条件の当てはめ、「要対応」の 2 日、60rem、前月比の出し方（%を主、差を従）、サンプルの値のすべて。前期比の出し方（パーセントか差の絶対値か、色分けのしきい値）の出典は、台帳に無い
- 外れる点: S066（表にグラフィックを入れない）と S079（データバーは原則使わない）は、棒を既定にしない側である。この例は、`SKILL.md` の「置く条件」を満たす 1 列にだけ置き、満たさない列には置かない。S070・S072 は sparkline を表に置く例だが、この例の月次の表は 6 行で、推移を見る作業ではないので置かない
- 熟練者の密度の好みは、国内の出典では見解にとどまる（S301、S302。C）。この例の根拠にしない

## 目的の一文

朝の担当が、危ない案件・残金の大きい案件・動いていない案件を読まずに拾え、月次の受注は、基準つきの増減で、先月との差を一目で読める表にする。

## 削るもの

「視覚的に」と頼まれたとき、先に足すのは図ではなく、加工と強弱である（S290、S299）。状態の印・相対時刻・符号を足したうえで、データバーを置く列を条件で選び、置かない列と理由を書く。

### データバーを置く列・置かない列

`SKILL.md` の「置く条件・置かない条件」に、列ごとに当てはめた。条件は本 skill の整理で、出典は S066・S079・S080・S081・S082・S137・S077・S053。

| 列 | 作業の判断 | 条件への当てはめ | 結論 | 代わりの見せ方 |
|---|---|---|---|---|
| 未入金（円） | 催促を、残額の大きい案件から決める。列の中で大きさを比べること自体が判断 | 数値を併記できる（S077）。単位は円で、列の中の尺度がそろう。棒の色（枠線色）は面に対して 4.49（ライト）・5.57（ダーク）で 3:1 以上（S053、S079）。図は 1 列に絞る（S082 は 2 列だけに使う例） | 置く | 棒の外に数値を併記 |
| 見積金額（円） | 見積書と照らす。正確な値が要る（S080）。98,000 から 12,480,000 まで桁が違い、線形の棒では 98,000 は全体の 0.8% で読めない | 値の正確さが要る。棒を 2 列目に足すと、複数の列を並べて見る表示になり、列どうしの大きさは比べられない（S081） | 置かない | 右揃え・桁の幅をそろえた数字（S002、S012） |
| 次の期限 | 超過か、今日か、先か。量ではなく、日付と符号が反転する値 | 超過と残りを 1 本の棒にできない | 置かない | 絶対の日付に、「3 日超過」「今日」「あと 2 日」。対応状況の印 |
| 最終更新 | 放置されているか。判断は対応状況と期限で足り、同じ期限の中の順位は並びの規則で決まる | 棒を足すと視覚的な印が増え、行の高さを見直す判断が要る（S137 は条件の節。見直しは本 skill の整理） | 置かない | 相対時刻（主）と絶対時刻（従） |
| 対応状況 | どの状態か | 状態が分かれば判断できる。印と文字で足りる | 置かない | 色・印・文字（S061） |
| 受注金額（月次） | 6 か月の増減。表の数字で読める 6 点 | 推移を見るのが目的なら図が要り、表の列ではない | 置かない | 前月比の符号・矢印・%。推移の図は designer-dataviz（導入されていれば） |

### 削る・足さないもの

| 前 | 扱い | 理由 |
|---|---|---|
| 見積金額・未入金・経過の 3 列の棒 | 未入金の 1 列だけにする | 列ごとに尺度が違う棒を並べても、列どうしの大きさは比べられない（S081）。条件を満たすのは未入金だけ |
| 色だけの状態の丸 | 印と文字を足す | 色だけに頼らない（S048、S061、S064） |
| 緑・赤の「▲▼」の前月比 | 符号と矢印の「↑↓」。色は付けない | 「▲」は対応状況の期限超過の印で、同じ画面で意味が衝突する。受注は増えると良いが、未入金や経過日数は増えると悪い。向きと良し悪しが一致しない指標が同じシステムにあるので、色で良し悪しを決めない（本 skill の整理）。S062 は、符号か矢印があれば色は任意と述べる。「↑↓」は、`list-from-db-columns.md` の並べ替えの印でもある。並べ替えの印は見出しのボタンの中だけに出て、この例の前月比の表に並べ替えは無いので、同じ表には出ない。同じ表に両方が出るときは、並べ替えの印を文字（昇順・降順）にする（本 skill の整理） |
| 通月と、15 日までの途中の月を比べる前月比 | 比べない | 基準が違う（基準を明記する。次の「前月比」） |
| 日時の文字だけ（`2026-11-02 11:40:00`） | 相対と絶対を併記 | 次の「相対時刻と絶対時刻」 |

## 構成

### 表の中の手がかり

| 見せたいもの | 手がかり | 色以外の手がかり |
|---|---|---|
| 状態 | バッジ（色・印・文字） | 印 ▲ ◆ ● ‖ ✓ と、文字（S061、S056）。日数はラベルに埋めず、次の期限の 2 行目に出す（S263。要旨） |
| 期限 | 絶対の日付＋ 2 行目に超過・今日・残り | 文字（S085 は実行中の処理の経過・残り。期限への当てはめは本 skill の整理） |
| 時間（更新） | 相対（主）＋絶対（従） | 文字 2 行。ホバーだけに頼らない（S086） |
| 量（未入金） | 棒＋数値 | 数値の併記。長さで量を伝える（S074） |
| 増減（前月比） | 符号＋矢印＋%＋差 | 文字（S062）。色は使わない |

### 相対時刻と絶対時刻の併記（食い違う論点）

| 論点 | 一方 | 他方 | この例の選び方（本 skill の整理） |
|---|---|---|---|
| 相対か絶対か | Cloudscape は、読みやすい相対を勧める（S067）。Primer は相対を基本に、1 か月を超えたら日時（S083） | 期限は正確な日時（S084）。精度が要る利用者には絶対（S088）。相対の表記は、現在から離れるほど表す範囲が広がり、困惑を生むことがある（S305。C） | 次の期限は、絶対を主、相対（超過・残り）を従。最終更新は、相対を主、絶対を従。どちらも両方を画面に出す |

- 最終更新は「何日動いていないか」を読ませたいので、相対を先に出す（会話に合う。S284）。次の期限は行動の期限なので、絶対を先に出す（S084）
- 絶対は画面に出す。ホバーの `title` には隠さない。キーボードの利用者に届かない（S086）
- 1 か月を超える項目（42 日前）は、Primer なら日時を主にする（S083）。この例は絶対を常に 2 行目に出しているので、切り替えを持たない
- S090 は、時刻にラベルと UTC のオフセットを常に添えると述べる。この例は、単一のタイムゾーンの社内システムなので、見出しに「日本時間」と 1 回だけ書き、`datetime` に `+09:00` を持たせた。セルごとの表示は省いた（S090 から外れる。本 skill の整理）

### データバー（置く列だけ）

- 尺度: 0 から、全件の最大（6,240,000 円）までを 5rem に割り当てる。絞り込みで尺度が変わらないよう、最大は全件から取る（本 skill の整理）。軸は描かない。棒の列（5rem）と数値の列（6rem）を固定幅にして、棒の起点を全行でそろえる。起点が行ごとにずれると、0 から長さで読ませることができない（本 skill の整理）。棒は 0 から始め、長さで量を読ませる（長さで量を伝える点は S074。0 起点は本 skill の整理）
- 値の扱い: 0 円は棒を描かず、数値の「0」だけ。0 より大きい値は、最小 2 px を保証する（3.0% の 186,000 円が 2.4 px でも、0 と見分けられる）。存在しない値（契約前）は「-」で、棒も 0 も描かない
- 数値は棒の外に、棒の右に併記する。棒の上に重ねない。棒とラベルのコントラストを別々に確かめずに済む（S079 は両方を確認するよう求める。重ねないので、棒の色と面の比だけを確かめた）
- 狭い幅では、列ごと隠す。図が潰れるので置かない（`SKILL.md` の「置かない」条件）
- 図の中身（棒の尺度を対数にするか、外れ値を切るか、色）は designer-dataviz へ渡す。導入されていれば、そちらで決める。この例は、線形・0 起点・1 色・数値併記だけを決めた

### 前月比（月次の表）

- 基準を明記する: 前月比は、暦月の通月どうしの受注金額で、（当月 − 前月）÷ 前月。表の下の 1 行に書く（S075 は、比較の対象に目標や前年の同じ値を挙げる。基準を書くのは本 skill の整理）
- 2026/06 は、前の月の数字がこの表に無いので「-」（存在しない）。2026/11 は 15 日までの途中なので、通月の 10 月とは比べず、「-」と「途中のため比べない」を出す
- 前年同月（2025/10）との比較は、表に列を足さず、表の下に 1 行で書く。2026/10 の受注金額 +15.6%、受注件数 +15.0%
- 受注件数の前月比は列にしない。この 4 か月は、金額と件数の増減の向きが同じ（07 は +16.7%、08 は −28.6%、09 は +26.7%、10 は +21.1%）で、列を増やして得る情報が少ない（本 skill の整理）
- 現在値だけでなく期間の比較を見せる（S068）。推移の図は、置かない列の理由のとおり（designer-dataviz）

### 狭い幅での出し方（390・320 px）

- 案件の表は、`list-from-db-columns.md` と同じく「列を減らす」を選ぶ（案件・対応状況・次の期限の 3 列）。最終更新・見積金額・未入金は 60rem 未満で隠す。棒は列と一緒に隠れる。棒の説明の行も隠す
- 月次の表は 4 列のまま、320 px まで残す。見出しの折り返しを許し、前月比の 2 行目（差の円）は 30rem 以下で隠す。括弧の部分（`（金額）`・`（15 日まで）`）は割らない（`nw`）。30rem 以下で、ページの左右の余白と月次の表の左右の余白を詰める。読み上げの文は残す
- 表を縮めて文字を潰さない。表は `overflow-x: auto` の容器（`role="region"`・`tabindex="0"`・見出しで名前を付ける）に入れる。通常の文字では横に動かない。文字を 200% にして収まらないときだけ、容器の中で横に動き、ページは横にはみ出さない（データの表を容器の中で動かすのは、リフローの例外として扱う。本 skill の整理）

## 仕様

### 値

| 項目 | 値 | 根拠 |
|---|---|---|
| 棒 | 棒の列 5rem・数値の列 6rem の固定幅（起点をそろえる）。棒は高さ 0.5rem、色は `--line`（枠線色）。0 は無し、0 より大きいと最小 2 px | 本 skill の目安（出典なし）。部品は背景に 3:1（S053、S065） |
| 棒の尺度 | 0 から全件の最大（6,240,000 円）。線形 | 本 skill の整理 |
| 相対の書式 | 今日・N 日前・N 日超過・あと N 日 | 書式は本 skill の整理。短縮表記（「2mo」など）は使わない（S086） |
| 絶対の書式 | 2026/11/09 16:20（24 時間制）。日付だけは 2026/11/13 | 要旨の参照（S275。逐語引用なし） |
| 数字 | 右揃え、`tabular-nums`、3 桁ごとの半角カンマ、単位は見出し | S002、S012。カンマは要旨の参照（S274）、単位は S252（要旨） |
| 増減の印 | 符号（+ − ±）と矢印（↑ ↓ →）。文字は太字。色は本文のまま | S062（符号か矢印）。2 つ併せるのは本 skill の整理 |
| 差の表記 | 1 行目は %、2 行目は円の差（小数 1 桁・符号つき） | 出典なし。本 skill の整理 |
| 「−」と「-」 | 符号は「−」（U+2212）、存在しない項目は「-」 | 両者を混同しない（本 skill の整理） |

### 月次の受注（計算は、コードが `MONTHS` から算出した値と突き合わせた）

| 月 | 受注（件） | 受注金額（円） | 前月比（金額） | 差（円） |
|---|---|---|---|---|
| 2026/06 | 18 | 31,200,000 | -（前の月が表に無い） | - |
| 2026/07 | 21 | 36,750,000 | ↑ +17.8% | +5,550,000 |
| 2026/08 | 15 | 24,300,000 | ↓ −33.9% | −12,450,000 |
| 2026/09 | 19 | 33,900,000 | ↑ +39.5% | +9,600,000 |
| 2026/10 | 23 | 41,400,000 | ↑ +22.1% | +7,500,000 |
| 2026/11（15 日まで） | 11 | 17,600,000 | -（途中のため比べない） | - |

前年同月（2025/10: 20 件・35,800,000 円）に対して、2026/10 は受注金額 +5,600,000 円（+15.6%）、受注 +3 件（+15.0%）。

### 未入金の棒（全件の最大 6,240,000 円に対する割合）

| 案件 | 未入金（円） | 割合 | 棒の幅（5rem = 80 px のとき） |
|---|---|---|---|
| 2611-021 | 6,240,000 | 100% | 80 px |
| 2610-074 | 1,890,000 | 30.3% | 24.2 px |
| 2610-097 | 1,372,000 | 22.0% | 17.6 px |
| 2611-009 | 412,500 | 6.6% | 5.3 px |
| 2610-061 | 186,000 | 3.0% | 2.4 px（最小 2 px を超える） |
| 2610-088・2608-134 | 0 | - | 棒なし。数値「0」 |
| 2611-018・2611-003・2609-201・2611-025・2611-030 | 契約前などで存在しない | - | 棒なし。「-」 |

### 読み上げ

| 場所 | マークアップ | 読まれる文（設計。実機の読み上げは未検証） |
|---|---|---|
| 増減 | 見える文字は `aria-hidden`、別に `sr` の文 | 前月より 17.8% 増。差は 5,550,000 円 |
| 状態の印 | 印は `aria-hidden`、文字は読まれる | 期限超過 |
| 棒 | `aria-hidden`。数値は文字として読まれる | 1,372,000 |
| 存在しない値 | 「-」と `sr` の文 | なし |
| 未設定 | `sr` の文だけ | 未設定 |
| 更新 | `time` に `datetime`（日本時間のオフセット `+09:00`） | 14 日前 2026/11/02 11:40 |

### コントラスト比（本 skill の計算。WCAG の相対輝度式による）

共通のトークンの組み合わせは `list-from-db-columns.md` の表と同じ。この例で足した組み合わせだけを計算した。文字の基準 4.5:1 は、本 skill の台帳に WCAG 本文の逐語が無く未照合。非文字の 3:1 は S065。

| 組み合わせ | ライト | ダーク |
|---|---|---|
| 棒（枠線色 / 面。非文字） | 4.49 | 5.57 |
| 列見出しの文字（本文 / 見出し行） | 12.30 | 11.93 |
| 補助文字（相対・差の円）/ 面 | 7.55 | 8.20 |
| 見出し（本文 / ページの地 `--bg`） | 13.50 | 14.90 |
| 表の下の説明（補助文字 / ページの地 `--bg`） | 6.90 | 8.92 |
| 案件番号（アクセント / 面） | 6.31 | 9.08 |

新しい色は足していない。増減に色を付けないので、増減の色の組み合わせは無い。色を変えたら再計算する。

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| 期限 | 2026-11-11 | 2026/11/11、2 行目に 5 日超過 | 絶対の日付を主に、超過を添える（S084） |
| 更新 | 2026-11-02 11:40:00 | 14 日前、2 行目に 2026/11/02 11:40 | 相対を主に、絶対を添える（S067、S086、S284） |
| 更新の列見出し | 更新日時 | 最終更新（日本時間） | 何の時刻かと時間帯を言う（S090） |
| 状態 | （色だけの丸） | ▲ 期限超過・◆ 要対応・● 進行中・‖ 保留・✓ 完了 | 印と文字（S061） |
| 前月比 | ▲ 17.8（緑） | ↑ +17.8%、2 行目に +5,550,000 | 符号・矢印・文字。色なし（S062） |
| 前月比の見出し | 増減 | 前月比（金額） | 何と比べた何の増減かを言う |
| 途中の月 | （通月と比べた値） | -、途中のため比べない | 基準が違う |
| 棒の説明 | （無し） | 未入金の棒は、0 から全件の最大（6,240,000 円）までの長さ。絞り込んでも尺度は変わらない。数値を必ず併記する。 | 尺度を見える場所に書く |
| 前月比の説明 | （無し） | 前月比は、暦月の通月どうしの受注金額で、（当月 − 前月）÷ 前月。2026/11 は 15 日までの途中なので、通月の 10 月とは比べない。 | 基準を明記する（本 skill の整理。S075 は比較の対象に目標や前年の値を挙げる） |
| 案件が 0 件 | データがありません | 案件はまだ登録されていない。 | `list-from-db-columns.md` と同じ |

## コード断片

1 ファイルの HTML。ブラウザーで開くとそのまま動く。外部のライブラリ・フォント・画像・計測は使わない。データの描画は `textContent` と要素の組み立てで行い、生のデータを `innerHTML` に入れない。ダークは `prefers-color-scheme` で切り替える。URL の末尾に `#rows=1` や `#rows=0` を付けると、件数を変えて見られる（棒の尺度は全件の最大のまま）。「今日」は 2026-11-16 に固定してある。

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>こがね案件管理 表の中の視覚化</title>
<style>
:root {
  color-scheme: light dark;
  --bg: #f1f0ea; --surface: #fbfaf6; --head: #e7e6dc;
  --text: #25251e; --text-2: #52524a; --line: #76755f; --rule: #d2d1c4;
  --accent: #55631a;
  --over: #9b1c22; --over-bg: #f9e3e1; --act: #7a4a00; --act-bg: #f8e8c6;
  --prog: #234f7d; --prog-bg: #dfeaf6; --done: #17604d; --done-bg: #dcefe8;
  --hold: #4f4f46; --hold-bg: #e6e5dc;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #171814; --surface: #1f201b; --head: #2a2b24;
    --text: #ecebe1; --text-2: #b9b8aa; --line: #98978a; --rule: #3a3b32;
    --accent: #b9c96b;
    --over: #ff9f98; --over-bg: #3d1f1e; --act: #f2bf63; --act-bg: #392a0c;
    --prog: #9cc4f0; --prog-bg: #1b2b3e; --done: #86d6b8; --done-bg: #173128;
    --hold: #bdbcae; --hold-bg: #33332c;
  }
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--text);
  font: 0.875rem/1.5 system-ui, "Hiragino Sans", "Yu Gothic", "Noto Sans JP", sans-serif; }
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.page { max-width: 90rem; margin: 0 auto; padding: 0.75rem 1rem 2rem; }
h1 { margin: 0 0 0.5rem; font-size: 1.125rem; }
.note { margin: 0.375rem 0 0; color: var(--text-2); font-size: 0.8125rem; }
.tw { position: relative; margin-top: 1.25rem; overflow-x: auto; }   /* 200% など表が収まらないときだけ、表の中で横に動く。焦点が入るのでキーボードで動かせる */
table { width: 100%; border-collapse: separate; border-spacing: 0; background: var(--surface); }
caption { padding: 0.375rem 0.5rem; text-align: left; font-weight: 700; }
th, td { padding: 0.375rem 0.625rem; text-align: left; vertical-align: top; border-bottom: 1px solid var(--rule); }
thead th { background: var(--head); border-bottom: 1px solid var(--line); font-weight: 600; vertical-align: bottom; }
th[scope="row"] { font-weight: 400; }
.num { text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
.rel { display: block; color: var(--text-2); font-size: 0.8125rem; font-variant-numeric: tabular-nums; }
.dash { color: var(--text-2); }
.date { white-space: nowrap; font-variant-numeric: tabular-nums; }
.no { font-weight: 700; font-variant-numeric: tabular-nums; color: var(--accent); }
.cust { margin-left: 0.5rem; overflow-wrap: anywhere; }
.title { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; line-clamp: 2; overflow: hidden; color: var(--text-2); font-size: 0.8125rem; }
.c-case { width: 34%; }

.st { display: inline-flex; gap: 0.25rem; padding: 0 0.5rem; border: 1px solid currentColor; border-radius: 4px; white-space: nowrap; font-weight: 600; font-size: 0.8125rem; }
.st-over { color: var(--over); background: var(--over-bg); } .st-act { color: var(--act); background: var(--act-bg); }
.st-prog { color: var(--prog); background: var(--prog-bg); } .st-done { color: var(--done); background: var(--done-bg); }
.st-hold { color: var(--hold); background: var(--hold-bg); }

/* データバー: 未入金の列だけ。尺度は全件の最大で固定し、棒は 0 から。数値は棒の外に併記する。
   棒の列と数値の列を固定幅にして、棒の起点を全行でそろえる（数値の桁で起点がずれない） */
.unpaid { display: inline-grid; grid-template-columns: 5rem 6rem; align-items: center; column-gap: 0.5rem; }
.unpaid > span:last-child { text-align: right; }
.track { display: block; width: 5rem; height: 0.5rem; }
.track i { display: block; height: 100%; width: calc(var(--p) * 1%); min-width: 2px; background: var(--line); }
.nw { white-space: nowrap; }

/* 前月比: 符号と矢印と文字。色は付けない */
.diff { white-space: nowrap; font-variant-numeric: tabular-nums; }
.diff .main { font-weight: 600; }
.diff .sub { display: block; white-space: normal; color: var(--text-2); font-size: 0.8125rem; }
table.month thead th { white-space: normal; }

@media (max-width: 59.99rem) {
  .c-upd, .c-amount, .c-unpaid, .wide-only { display: none; }
  .c-case { width: auto; }
  th, td { padding: 0.375rem 0.375rem; }
  .cust { display: block; margin-left: 0; }
}
@media (max-width: 30rem) { .diff .sub.amt { display: none; } .page { padding-left: 0.5rem; padding-right: 0.5rem; } table.month th, table.month td { padding-left: 0.1875rem; padding-right: 0.1875rem; } }
@media (max-width: 19rem) { .date, .st { white-space: normal; overflow-wrap: anywhere; } }
</style>
</head>
<body>
<div class="page">
  <h1>表の中の視覚化<small class="rel">こがね案件管理（架空）。今日は 2026/11/16、時刻は日本時間</small></h1>
  <div class="tw" role="region" aria-labelledby="cap" tabindex="0">
  <table id="t">
    <caption id="cap"></caption>
    <thead>
      <tr>
        <th scope="col" class="c-case">案件</th>
        <th scope="col">対応状況</th>
        <th scope="col">次の期限</th>
        <th scope="col" class="c-upd">最終更新<span class="nw">（日本時間）</span></th>
        <th scope="col" class="c-amount num">見積金額（円）</th>
        <th scope="col" class="c-unpaid num">未入金（円）</th>
      </tr>
    </thead>
    <tbody id="rows"></tbody>
  </table>
  </div>
  <p class="note" id="empty" hidden>案件はまだ登録されていない。</p>
  <p class="note wide-only">未入金の棒は、0 から全件の最大（<span id="max"></span> 円）までの長さ。絞り込んでも尺度は変わらない。数値を必ず併記する。</p>

  <div class="tw" role="region" aria-labelledby="mcap" tabindex="0">
  <table id="m" class="month">
    <caption id="mcap">月次の受注（2026/06 から 2026/11）</caption>
    <thead>
      <tr>
        <th scope="col">月</th>
        <th scope="col" class="num">受注（件）</th>
        <th scope="col" class="num">受注金額（円）</th>
        <th scope="col" class="num">前月比<span class="nw">（金額）</span></th>
      </tr>
    </thead>
    <tbody id="mrows"></tbody>
  </table>
  </div>
  <p class="note">前月比は、暦月の通月どうしの受注金額で、（当月 − 前月）÷ 前月。2026/11 は 15 日までの途中なので、通月の 10 月とは比べない。</p>
  <p class="note" id="yoy"></p>
</div>

<script>
// 架空のデータ。今日は固定にして、描画のたびに期限の見え方が変わらないようにする
const TODAY = '2026-11-16';
const CASES = [
  { no: '2611-018', customer: '松尾 恵子 様', title: 'キッチンの入れ替え（壁付けから対面へ）', stage: '見積', due: '2026-11-13', updated: '2026-11-09 16:20', amount: 1284000, paid: null },
  { no: '2611-021', customer: '株式会社 北山ハウジングサービス 賃貸管理部 ご担当者様', title: '外壁塗装と屋上防水の同時工事（全 12 棟のうち第 3 期の 4 棟、足場は 2 期の仮設を再利用）', stage: '施工', due: '2026-11-16', updated: '2026-11-14 09:05', amount: 12480000, paid: 6240000 },
  { no: '2610-097', customer: '田所 勝 様', title: '浴室の改修', stage: '契約', due: '2026-11-11', updated: '2026-11-02 11:40', amount: 1960000, paid: 588000 },
  { no: '2611-003', customer: '荒井 美穂 様', title: '玄関ドアの交換', stage: '現地調査', due: '2026-11-17', updated: '2026-11-13 15:10', amount: null, paid: null },
  { no: '2610-088', customer: '森下 義雄 様', title: '洗面台の交換', stage: '施工', due: '2026-11-25', updated: '2026-11-12 13:30', amount: 98000, paid: 98000 },
  { no: '2610-074', customer: '石渡 聡 様', title: '屋根の葺き替え', stage: '施工', due: '2026-12-04', updated: '2026-11-10 17:45', amount: 3780000, paid: 1890000 },
  { no: '2609-201', customer: '宮内 さつき 様', title: '和室の洋室化', stage: '保留', due: null, updated: '2026-10-05 10:00', amount: 2350000, paid: null },
  { no: '2608-134', customer: '有限会社 青葉ベーカリー 様', title: '店舗厨房の床と排水の改修', stage: '完了', due: null, updated: '2026-10-30 18:00', amount: 5420000, paid: 5420000 },
  { no: '2611-009', customer: '尾上 孝 様', title: '外構フェンスの補修', stage: '契約', due: '2026-11-16', updated: '2026-11-10 14:20', amount: 412500, paid: 0 },
  { no: '2611-025', customer: '河合 澄子 様', title: '窓の断熱改修（内窓 8 か所）', stage: '見積', due: '2026-11-18', updated: '2026-11-15 10:30', amount: 1176000, paid: null },
  { no: '2610-061', customer: '中條 保 様', title: 'トイレの交換', stage: '施工', due: '2026-11-14', updated: '2026-11-13 12:00', amount: 286000, paid: 100000 },
  { no: '2611-030', customer: '野沢 公平 様', title: '壁紙の張り替え', stage: '受付', due: '2026-11-16', updated: '2026-11-16 08:10', amount: null, paid: null }
];
// 月次の受注（架空）。2026/11 は 15 日までの途中の値
const MONTHS = [
  { m: '2026-06', n: 18, yen: 31200000 }, { m: '2026-07', n: 21, yen: 36750000 }, { m: '2026-08', n: 15, yen: 24300000 },
  { m: '2026-09', n: 19, yen: 33900000 }, { m: '2026-10', n: 23, yen: 41400000 }, { m: '2026-11', n: 11, yen: 17600000, partial: '15 日まで' }
];
const LAST_YEAR = { m: '2025-10', n: 20, yen: 35800000 };

const dn = (s) => { const [y, m, d] = s.slice(0, 10).split('-').map(Number); return Math.round(Date.UTC(y, m - 1, d) / 86400000); };
const TODAYN = dn(TODAY);
const ymd = (s) => s.slice(0, 10).replaceAll('-', '/');
const yen = (n) => n.toLocaleString('ja-JP');
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; };
const $ = (id) => document.getElementById(id);
const blank = (td) => { td.append(el('span', 'sr', '未設定')); return td; };
const none = (td) => { td.append(el('span', 'dash', '-'), el('span', 'sr', 'なし')); return td; };

function derive(r) {
  const diff = r.due ? dn(r.due) - TODAYN : null;
  let state = ['prog', '●', '進行中'];
  if (r.stage === '完了') state = ['done', '✓', '完了'];
  else if (r.stage === '保留') state = ['hold', '‖', '保留'];
  else if (diff !== null && diff < 0) state = ['over', '▲', '期限超過'];
  else if (diff !== null && diff <= 2) state = ['act', '◆', '要対応'];
  return { ...r, diff, state, elapsed: TODAYN - dn(r.updated), unpaid: r.paid === null || r.amount === null ? null : r.amount - r.paid };
}
const ALL = CASES.map(derive);
const MAX_UNPAID = Math.max(...ALL.map((r) => r.unpaid ?? 0));   // 尺度は全件の最大。表示件数で変えない
const m = /rows=(\d+)/.exec(location.hash);
const ROWS = (m ? ALL.slice(0, Number(m[1])) : ALL).sort((a, b) => (a.due === null) - (b.due === null) || (a.due < b.due ? -1 : a.due > b.due ? 1 : 0) || b.elapsed - a.elapsed);

function row(r) {
  const tr = el('tr');
  const th = el('th', 'c-case'); th.scope = 'row';
  const box = el('div'); box.append(el('span', 'no', r.no), el('span', 'cust', r.customer), Object.assign(el('div', 'title', r.title), { title: r.title })); th.append(box);

  const st = el('td'); const badge = el('span', 'st st-' + r.state[0]); const mark = el('span', null, r.state[1]); mark.setAttribute('aria-hidden', 'true');
  badge.append(mark, el('span', null, r.state[2])); st.append(badge);

  const due = el('td', 'date');
  if (r.due) {
    const t = el('time', null, ymd(r.due)); t.dateTime = r.due; due.append(t);
    due.append(el('span', 'rel', r.diff < 0 ? (-r.diff) + ' 日超過' : r.diff === 0 ? '今日' : 'あと ' + r.diff + ' 日'));
  } else none(due);

  // 相対（主）と絶対（従）を併記する。絶対はホバーに隠さず、画面に出す
  const upd = el('td', 'c-upd date');
  const t2 = el('time'); t2.dateTime = r.updated.replace(' ', 'T') + ':00+09:00';
  t2.append(el('span', null, r.elapsed === 0 ? '今日' : r.elapsed + ' 日前'), document.createTextNode(' '), el('span', 'rel', r.updated.replaceAll('-', '/')));
  upd.append(t2);

  const amount = el('td', 'c-amount num'); r.amount === null ? blank(amount) : amount.append(yen(r.amount));

  const unpaid = el('td', 'c-unpaid num');
  if (r.unpaid === null) none(unpaid);                    // 契約前など、未入金が存在しない
  else {
    const box2 = el('div', 'unpaid'), tr2 = el('span', 'track'); tr2.setAttribute('aria-hidden', 'true');   // 棒の列は全行に置く
    if (r.unpaid > 0) {                                    // 0 円は棒を描かない（数値の「0」だけ）
      const bar = el('i'); bar.style.setProperty('--p', (r.unpaid / MAX_UNPAID * 100).toFixed(1)); tr2.append(bar);
    }
    box2.append(tr2, el('span', null, yen(r.unpaid))); unpaid.append(box2);
  }
  tr.append(th, st, due, upd, amount, unpaid);
  return tr;
}

function diffCell(cur, prev) {
  const td = el('td', 'num diff');
  if (!prev) { none(td); return td; }
  const d = cur.yen - prev.yen, pct = d / prev.yen * 100;
  const sign = d > 0 ? '+' : d < 0 ? '−' : '±';
  const arrow = d > 0 ? '↑' : d < 0 ? '↓' : '→';
  const main = el('span', 'main'); main.setAttribute('aria-hidden', 'true');
  main.append(arrow + ' ' + sign + Math.abs(pct).toFixed(1) + '%');
  const sub = el('span', 'sub amt'); sub.setAttribute('aria-hidden', 'true');
  sub.append(sign + yen(Math.abs(d)));
  td.append(main, sub, el('span', 'sr', '前月より ' + Math.abs(pct).toFixed(1) + '% ' + (d > 0 ? '増' : d < 0 ? '減' : '変化なし') + '。差は ' + yen(Math.abs(d)) + ' 円'));
  return td;
}
function renderMonths() {
  const body = $('mrows'); body.replaceChildren();
  MONTHS.forEach((x, i) => {
    const tr = el('tr'); const th = el('th'); th.scope = 'row';
    th.append(x.m.replace('-', '/')); if (x.partial) th.append(el('span', 'nw', '（' + x.partial + '）'));   // 括弧の部分は割らない
    const tdn = el('td', 'num', String(x.n)), tdy = el('td', 'num', yen(x.yen));
    let diff;
    if (x.partial) { diff = el('td', 'num diff'); none(diff); diff.append(el('span', 'sub', '途中のため比べない')); }   // 通月と比べない
    else diff = diffCell(x, MONTHS[i - 1]);
    tr.append(th, tdn, tdy, diff); body.append(tr);
  });
  const c = MONTHS.find((x) => x.m === '2026-10'), p = (c.yen - LAST_YEAR.yen) / LAST_YEAR.yen * 100, q = (c.n - LAST_YEAR.n) / LAST_YEAR.n * 100;
  $('yoy').textContent = '2026/10 の前年同月（2025/10）比: 受注金額 ↑ +' + p.toFixed(1) + '%（' + yen(LAST_YEAR.yen) + ' から ' + yen(c.yen) + ' 円）、受注 ↑ +' + q.toFixed(1) + '%（' + LAST_YEAR.n + ' から ' + c.n + ' 件）。';
}
$('cap').textContent = '案件（' + ROWS.length + ' 件。次の期限が早い順、同じ日は最終更新が古い順）';
$('rows').replaceChildren(...ROWS.map(row));
$('max').textContent = yen(MAX_UNPAID);
$('empty').hidden = ROWS.length > 0;
renderMonths();
</script>
</body>
</html>
```

- 表は `table`・`caption`・`th scope` で組む。並べ替えは、この例では省いた（`list-from-db-columns.md` の見出しのボタンと `aria-sort`）。既定の並びは、次の期限が早い順、同じ日は最終更新が古い順
- 棒の幅は、`bar.style.setProperty('--p', …)` で CSS のカスタムプロパティに渡し、`calc(var(--p) * 1%)` で長さにする。データを属性やスタイルの文字列に連結しない
- 新しい機能と、非対応のときの姿（対応状況は本 skill で照合していない）: `line-clamp`（工事名の 2 行切り。非対応なら全文）、`clip-path`（読み上げ専用の文字を隠す）、`calc()` と CSS カスタムプロパティの組み合わせ（棒の幅。非対応のときの姿は測っていない。未検証）、JavaScript の `replaceAll`・`replaceChildren`・`??`。新しい色の指定（`oklch()` など）は使わない。動きは使わない（`prefers-reduced-motion` の分岐は要らない）
- UI ライブラリの表の部品を使う場合は、先に `../references/library-defaults.md` の「既定値の台帳」の 1（数字）・3（状態）・11（日付・時刻）を確かめる。見た目やコードは写さず、どの列に図を置くかの判断（上の表）を先に決める

## 初見検証

初めて見る人に、説明なしで答えてもらう設計である（実験の結果ではない）。毎朝一覧を走査する担当が、最初の 10 秒で見つけられるかを確かめる。10 秒は本 skill の目安で、出典は無い。

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 期限超過 3 件と、今日が期限の 3 件。残金が最も大きいのは 2611-021 | 印（▲◆）、次の期限の 2 行目、未入金の棒 |
| 何を操作できるか | この例は読む表。操作は一覧の例の並べ替えとボタン | 見出し（並べ替えは省略） |
| どう読むか | 棒は長さ、数値は右の数字。増減は矢印と符号 | 未入金の棒と数値、前月比の列 |

最初の 10 秒の質問（担当者に聞く）:

| 質問 | 期待する答え | 見る場所 |
|---|---|---|
| 期限を過ぎた案件はいくつか | 3 件（2610-097、2611-018、2610-061） | ▲ の印と「N 日超過」 |
| 残金が最も大きい案件は | 2611-021（6,240,000 円） | 最も長い棒 |
| いちばん長く動いていない案件は | 2609-201（42 日前。保留） | 最終更新の相対 |
| 未入金が 0 円の案件は | 2610-088、2608-134 | 棒が無く「0」 |
| 2611-018 の未入金が「-」なのはなぜか | 契約前で、請求が存在しない | 「-」 |
| 先月の受注は、その前の月より増えたか | 増えた。+22.1%（+7,500,000 円） | 2026/10 の行の ↑ |
| 今月は先月より減ったか | 比べられない。15 日までの途中 | 2026/11 の行 |

## 点検

- 目的: 危ない案件・残金・放置・先月との差を、読まずに拾えるか。棒を置いたのは条件を満たす 1 列（未入金）だけで、置かなかった 5 つの列と、その理由が書かれている
- 色だけに頼らない: 状態は色・印・文字。増減は符号・矢印・文字で、色なし。棒は数値を併記している
- 時間: 次の期限は絶対（主）、最終更新は相対（主）。どちらも絶対と相対を画面に出し、`title` に頼らない（S086）
- 基準: 前月比の基準（暦月の通月・金額）を表の下に書いた。途中の月は比べていない。前の月が無い 2026/06 は「-」
- 検算: 前月比の率と差は、コードが算出した値と本文の表を突き合わせた（+17.8%・−33.9%・+39.5%・+22.1%、前年同月 +15.6%・+15.0%）
- 棒: 0 から全件の最大。起点（左端の x 座標）が全行で一致する。0 円は棒なし、非 0 は最小 2 px、存在しない値は「-」。絞り込んでも尺度が変わらない
- 配色: 新しい色は足していない。足した組み合わせの最小は、棒がライト 4.49・ダーク 5.57（3:1 以上。S065）、文字は補助文字がライト 7.55・ダーク 8.20。4.5:1 の原文は未照合
- 実測（Chrome 157.0.8103.79・macOS・1 環境、2026-11-16。ヘッドレスの Chrome を Playwright 経由の DevTools Protocol で操作し、幅を固定した。コード断片を md から抜き出した HTML を測った）:
  - 横はみ出し: 幅 1440・1024・961・960・959・390・320 px、ライトとダーク、状態 3 通り（既定・`#rows=0`・`#rows=1`）の 42 通りで、`scrollWidth` が `innerWidth` 以下（はみ出し 0）。読み上げ専用の文字を除くどの要素も、右端が `innerWidth` を超えない。表のセルの数字・日付・括弧（`（金額）`・`（15 日まで）`・`（日本時間）`）が行をまたいで割れた箇所は 0。括弧の部分を `nw` で包んだ版は、最初 320 px で月次の表が 325 px になった（表の最小幅 309 px が、使える幅 288 px を超えた）。30rem 以下でページの左右の余白を 0.5rem に、月次の表の左右の余白を 0.1875rem に詰めて直し、全部を測り直した
  - 棒の起点: 1440・1024・961・960 px で、棒のある 5 行の左端の x 座標が全行で一致した（それぞれ 1230・814・751・750 px）。数値の右端も 7 行で一致した。幅は 80.00・24.23・17.59・5.27・2.39 px（2611-021・2610-074・2610-097・2611-009・2610-061）。直す前は、`justify-content: flex-end` のため、数値の桁数で起点がずれていた（レビュー時の測定で 1257.3 px と 1270 px）。959・390・320 px では棒の列ごと隠れ、表示されている棒は 0
  - 描画: 1440 px で、案件の表は 12 行。既定の並びは 2610-097、2611-018、2610-061、2611-009、2611-021、2611-030、2611-003、2611-025、2610-088、2610-074、2609-201、2608-134。棒は 5 行、「0」が 2 行、「-」が 5 行。月次の表は 6 行で、前月比は +17.8%・−33.9%・+39.5%・+22.1%、前年同月は +15.6%・+15.0%（本文の表と一致）。読み上げ用の文（`sr`）が DOM に入っていることを読んだ（実際の読み上げは未検証）
  - 件数: `#rows=0` で案件の表は 0 行、「案件はまだ登録されていない。」が表示対象（`hidden` が偽）。`#rows=1` で 1 行。どちらも月次の表は 6 行
  - 文字 200%（`html` の `font-size` を 200% にして近似。メディアクエリの `rem` は変わらない）・320 px: ライトとダークで、`scrollWidth` が 320（変更前は 608）。表は容器の中で動く。工事名の全文は `title` 属性にも置いた（補助。キーボードでは届かない）。1440 px の表の位置は変更前と同じ
- 未検証・未実施:
  - スクリーンリーダーでの読み上げ（上の表は設計で、結果ではない）。Chrome 以外のブラウザー・他の OS・実機のスマートフォン。作った本人とは別の目での見直し。担当者への初見検証の実施
  - 実在の業務データでの見え方。数百件の件数。ダークでの灰色にした描画。棒の読み取りの正確さ（利用者での確認）
- 推測の明示: 5rem の棒・最小 2 px・置く条件の当てはめ・%を主にする前月比・矢印と符号の併用・サンプルの値は、本 skill の目安で、出典は無い。印の効果の 37% は、一覧の中の印を探す課題の値で（S063）、この表の効果ではない。記事の主張は見解である（S293）

## この例の出典

S002、S012、S018、S048、S053、S056、S059、S061、S062、S063、S064、S065、S066、S067、S068、S070、S072、S074、S075、S077、S079、S080、S081、S082、S083、S084、S085、S086、S088、S090、S100、S137、S252、S263、S265、S274、S275、S284、S290、S291、S293、S299、S301、S302、S305。台帳は `../references/sources.md`。S252・S263・S265・S274・S275 は、要旨の参照（逐語引用なし）である。区分 C は S301・S302・S305 である。他の skill の台帳の番号は使っていない。

# designer-dataviz 出典台帳

`SKILL.md`・`design-history.md`・`examples/` が根拠とする出典の台帳。引用原文（英語・逐語）・発言者・媒体・日付・URL・取得日・検証区分を記す。S01 から S129 までの 129 件で、番号は振り直さない（使わない項目も台帳に残してある）。S01 から S14 は Tufte 本人の Web 上の文章、S15 から S18 は Tufte の書籍ページと読者の投稿、S19 から S22 は Minard、S23 から S32 は Shneiderman・Heer・Munzner、S33 から S45 は Few・Kosara、S46 から S63 は色と WCAG、S64 から S91 は政府・組織・報道の実務指針、S92 から S99 は Tufte への反論と軸の研究、S100 から S109 は折れ線・不確実性・統計、S110 から S121 は歴史、S122 から S129 は追補である。

## 凡例

- 検証区分
  - A: 原典・公式ページ・著者サイト・公開 PDF・出版社や機関の公式ページの本文を取得し、引用文が逐語で含まれることを機械的に照合した。口頭発言ではなく文章なので、書き起こしの精度には依存しない。PDF と OCR はテキスト化の誤りがありうる
  - B: 第三者の転載・翻訳、または他媒体経由の引用（原典との照合なし）。本人の発言である可能性は高いが、引用元や翻訳の誤りは排除できない。本文では英語逐語で本人の発言として示さず、「〜と引かれる」という区分つきの要旨にする
  - C: 批判・論評側の主張。引用が逐語であることのみを確認し、主張の因果は確認していない。本文では区分つきの要旨にする
  - R: 記者・歴史家・機関の地の文。発言者本人の発言ではない（本人発言として引用しない）。研究結果の根拠に使うときは、原論文を取得していなければ「原論文未取得」と明記する（S85 は Bateman らの研究の、ガイドによる要約である。原論文の要旨・考察は S92〜S94 で別に取得しており、S85 はそれらと食い違う要約として扱う。ガイドの記述そのものは原論文の本文と照合していない）
  - U: 未検証（末尾の一覧）。事実・引用として使わない
- 逐語で本人の発言として示してよいのは区分 A だけである。区分 A の出典でも、日本語の訳・要旨は本 skill の言葉で、本人の発言ではない
- 「N01」以降の番号は、「引用ではない参照」の節の番号である。書籍・有料論文など、原文を取得できなかったものの書誌と、取得できた範囲だけを書いた。事実の主張の根拠にしない（「書籍・未照合」）
- 照合の方法（区分 A の全件）。以下は台帳作成時の照合手順の記録で、利用時に再実行する必要はない。再取得する場合は、取得先の利用規約に従う
  - `curl -sL -A "<通常のブラウザの User-Agent>" "<URL>"` で取得し、script / style / コメント / タグを除去、HTML 実体参照を復号、空白を 1 つに正規化したテキスト（PDF は `pdftotext` を通したもの）に対して `grep -F` で部分文字列を探した。照合に使った部分文字列は ASCII のみで、正規化後のテキストで 1 か所だけ一致するものを選んだ。台帳の作成後に、全件を新規に再取得して再照合し、105 件すべてが一致した
  - 台帳の引用文そのものは、取得したテキストから切り出した（手で打ち直していない）。アポストロフィ・引用符・ダッシュは原文のまま。Internet Archive の OCR（Playfair）は、長い s（ſ）を s に直して照合している。PDF は行末の語の分割や OCR の誤字を含むことがあり、台帳の引用にもその綴りが残る箇所がある（備考に記した）
  - `edwardtufte.com` は、素の `Mozilla/5.0` という User-Agent を 403 で拒否する（通常のブラウザの User-Agent なら取得できる）。同サイトは、旧 URL（`/bboard/q-and-a-fetch-msg?msg_id=...`）が一覧ページ（`/notes-sketches/`）へ転送され、個別の投稿は `/notebook/<slug>/` の URL で取得できた（作り替えの時期は未確認）。台帳には個別ページの URL を書いた。Wayback Machine は連続した要求で 429 を返したため、Tufte の出典には使っていない
- 追記行: 台帳を作った後、本文で使う事実の裏づけが引用ブロックに無い項目に、同じ URL の別の行を足した（引用ブロックの 2 つ目以降の段落。S14・S15・S22・S38・S39・S56・S63・S67・S69・S75・S76・S77・S78・S79・S114・S128・S129 の 17 項目、計 22 行。備考の末尾に「追記行」として理由を書いた）。追記した行も、2026-11-15 に同じ URL を新規に取得し、取得テキストから切り出して `grep -F` で照合した。新しい出典は足していない
- 年・日付の扱い: 本文で S 番号を付けて論旨を支える年・日付（Datawrapper の 2026-07、Few の 2004 と 2008、Minard の 1869、Nightingale の 1858、Tufte の 1983、Isenberg らの 2011 など）は、その番号の引用ブロックに逐語で含まれるものに限った。単なる書誌の年（論文の発表年・投稿日・版の年など）は、「媒体・日付」の項に書いた書誌情報による。引用ブロックの原文にあるものではない
- 数値（比率・個数・コントラスト比・年）は、区分 A で原文を確認できたものだけを「出典あり」として使う。それ以外は「目安（出典なし）」と分けて書く
- 取得日は、出典ごとに最後に本文を確認した日（すべて 2026-11-15）。記述は 2026-11-15 時点

## 帰属上の注意

- Tufte の「forum」の投稿には、本人の投稿と読者の投稿が混ざる。台帳は、Tufte 本人の回答（"Edward Tufte says:" の直後）と読者の投稿を分け、読者の投稿は B または C にした。Lie factor の算式（S18）は読者の言い換えで、Tufte 本人の定義の逐語ではない
- 「円グラフ 1 つより悪いのは、円グラフがいくつもあることだ」という趣旨の文は、Tufte のフォーラムの Pie Charts のスレッドでは、読者の投稿に「このフォーラムの通説」として出てくる。Tufte 本人の発言として書かない（末尾「未検証・伝聞」）
- Tufte の書籍の定義文（data-ink 比・chartjunk・lie factor・graphical excellence・small multiples）は、取得した Web ページには無い。S15 は出版元の紹介文（書籍の主題の存在確認）、S16 は書籍の該当ページを指すだけで、定義の逐語ではない。要旨は書籍・未照合として扱う
- Few の PDF（Common Pitfalls in Dashboard Design）は、前半が Few の本文で、末尾の追補（ProClarity の製品の節）はベンダーの文章である。台帳は前半だけを使った。Few の文章は著作権表示つきなので、1〜2 文の短い引用にとどめた
- Financial Times の Visual Vocabulary（ポスターと本文）は "Copyright © The Financial Times Limited, all rights reserved"（S91）。コード（MIT）と内容（all rights reserved）は別である。本 skill は、README の位置づけの 1 文（S90）と、英国政府の指針が図を選ぶ補助として挙げる事実（S125）だけを使い、チャート型の分類表や説明文を転載・翻訳・要約しない
- Minard の 1862 年の文章（S19・S20）は Dawn Finley による英訳で、原文（BnF 所蔵）とは照合していない。日本語にするときは英訳からの重訳と明記する
- Nightingale 1858 の文（S114）は、Science Museum Group Journal の論文が引いたもの（B）。Anscombe 1973 の文（S107）と Datasaurus の標語（S108）は、Autodesk Research のページが引いたもの（B）。二軸グラフの実験（Isenberg ほか 2011。S129）は、Datawrapper の記事が引いたもの（B）。Holmes の発言（S84）は EU の Data Visualisation Guide が引いたもの（B）。いずれも原典の一次照合はしていない
- 歴史家・機関・記者の地の文（R）は、年号や図の仕様の根拠に使い、本人の発言として引用しない。Nightingale のローズ図の「大きさを何で表すか」は、Science Museum（面積。S115）と Lehigh 大学図書館（半径。S117）で説明が食い違う（原図は未確認）
- Datawrapper の二軸グラフの記事（S75）は 2018 年（年は S77 の引用ブロックによる）の主張で、2026-07 の追記（S76・S77）と、同月の新しい指針（S78）で立場が変わった。古い立場だけを引かない
- Tufte の "Above all else show the data"（S07）は、Tufte 本人の Web ページ（2016-09-22）で原文を確認できた
- 図表の選び方と正確さ（軸・色・不確実性・地図）の根拠を扱う。画面体験（カードの数・更新の動き）の根拠は、この台帳の範囲外である

## 引用の台帳

### S01 Edward Tufte

> A sparkline is a small intense, simple, word-sized graphic with typographic resolution.

- 媒体・日付: edwardtufte.com フォーラム「Sparkline theory and practice」、Tufte の投稿 2004-05-27
- URL: https://www.edwardtufte.com/notebook/sparkline-theory-and-practice-edward-tufte/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: sparkline の定義。KPI 一覧の小さな推移に使う根拠

### S02 Edward Tufte

> Data graphics should have the resolution of typography.

- 媒体・日付: edwardtufte.com フォーラム「Sparkline theory and practice」、Tufte の投稿 2004-05-27
- URL: https://www.edwardtufte.com/notebook/sparkline-theory-and-practice-edward-tufte/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 文字と同じ密度で図を置く、という考え方

### S03 Edward Tufte

> General idea = max[data], min[design].

- 媒体・日付: edwardtufte.com フォーラム「Sparkline theory and practice」、Tufte の投稿 2004-05-27（Twitter analytics の sparkline への講評。講評の追記の日付は未確認）
- URL: https://www.edwardtufte.com/notebook/sparkline-theory-and-practice-edward-tufte/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: データを最大に、装飾を最小にという Tufte 流の標語。ミニマリズムの中身が「データの削減」ではないことを示す

### S04 Edward Tufte

> Should have design minimization, not data minimization.

- 媒体・日付: edwardtufte.com フォーラム「Sparkline theory and practice」、Tufte の投稿 2004-05-27（Apple Watch の sparkline への講評。講評の追記の日付は未確認）
- URL: https://www.edwardtufte.com/notebook/sparkline-theory-and-practice-edward-tufte/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 見た目を減らしてもデータは減らさない、という区別。KPI カードを薄くしすぎる失敗への戒め

### S05 Edward Tufte

> Sparklines have a data-ink or data-pixel ratio = 1.0, consisting entirely of data, with no non-data at all.

- 媒体・日付: edwardtufte.com「Sparklines History by Tufte: 1324 to now」2016-09-22
- URL: https://www.edwardtufte.com/notebook/sparklines-history-by-tufte-1324-to-now/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: sparkline が枠・目盛りを持たない理由。data-ink 比という語の Web 上の一次の用例

### S06 Edward Tufte

> Sparklines were driven by 3 overlapping principles: maximize data density, minimize or zero-out non-data, and the shrink principle (“graphics can be shrunk way down

- 媒体・日付: edwardtufte.com「Sparklines History by Tufte: 1324 to now」2016-09-22
- URL: https://www.edwardtufte.com/notebook/sparklines-history-by-tufte-1324-to-now/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: sparkline の 3 原則（データ密度の最大化・非データの最小化・縮小原則）

### S07 Edward Tufte

> the fundamental principle of good statistical graphics: Above all else show the data

- 媒体・日付: edwardtufte.com「Sparklines History by Tufte: 1324 to now」2016-09-22
- URL: https://www.edwardtufte.com/notebook/sparklines-history-by-tufte-1324-to-now/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「Above all else show the data」の本人サイト上の一次出典。本人の Web ページで原文を確認できた

### S08 Edward Tufte

> Sparklines often get their quantitative scaling context from nearby words, numbers and graphics; sparklines are directly quantified by numbers on or near the sparkline itself.

- 媒体・日付: edwardtufte.com「Sparklines History by Tufte: 1324 to now」2016-09-22
- URL: https://www.edwardtufte.com/notebook/sparklines-history-by-tufte-1324-to-now/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: sparkline は目盛りの代わりに近くの数値で量を示す。KPI の隣に現在値を置く設計の根拠

### S09 Edward Tufte

> The purpose of analytical displays of information is to assist thinking about evidence. Consequently, in designing an analytical graphics, the first question should be: What are the evidence-thinking tasks that this display is supposed to serve?

- 媒体・日付: edwardtufte.com フォーラム「Analytical design and human factors」、Tufte の回答 2002-11-27
- URL: https://www.edwardtufte.com/notebook/analytical-design-and-human-factors/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 図の設計は「証拠について考える課題」から始める。最初に立てる問いの型

### S10 Edward Tufte

> content-driven and thinking-driven, and not at all driven by bureaucratic externalities of marketing, human factors, commercial art, focus groups, or ISO standards.

- 媒体・日付: edwardtufte.com フォーラム「Analytical design and human factors」、Tufte の回答 2002-11-27
- URL: https://www.edwardtufte.com/notebook/analytical-design-and-human-factors/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 内容と思考が設計を駆動するという立場。人間工学・規格より優先するという主張で、知覚研究との緊張関係の材料（批判側の実験は Bateman・Borkin の項目を参照）

### S11 Edward Tufte

> What is supposed to be the first pie chart ever appears in William Playfair’s Statistical Breviary (1801).

- 媒体・日付: edwardtufte.com フォーラム「Pie Charts」、Tufte の回答 2004-01-22
- URL: https://www.edwardtufte.com/notebook/pie-charts/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 最初の円グラフは Playfair の Statistical Breviary（1801）とされる、という Tufte の言い方（「supposed to be」の留保付き）

### S12 Edward Tufte

> Showing data for spatially located nouns is a difficult problem. Already both dimensions of paper are used for the underlying map; then 2-dimensional circles represent a 1-dimensional numbers; and finally the dreaded pie chart. Worth a try is a table, with the nouns ordered by something important (the circle area variable?).

- 媒体・日付: edwardtufte.com フォーラム「Pie Charts」、Tufte の回答 2004-01-21
- URL: https://www.edwardtufte.com/notebook/pie-charts/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 円グラフを地図に載せる案への回答。表を先に検討する姿勢。円グラフ全般への断定ではない

### S13 Edward Tufte

> The rage-to-conclude bias sees patterns in data lacking such patterns.

- 媒体・日付: edwardtufte.com「Making better inferences from statistical graphics」2013-09-01
- URL: https://www.edwardtufte.com/notebook/making-better-inferences-from-statistical-graphics-edward-tufte/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 図から偶然のパターンを読んでしまう偏り。不確実性・予測区間の例で使う

### S14 Edward Tufte

> All statistical displays should be accompanied by a unique documentation box
>
> The first-line quality control mechanism for analytical integrity is documentation of the data sources and the process of data analysis.

- 媒体・日付: edwardtufte.com「Making better inferences from statistical graphics」2013-09-01
- URL: https://www.edwardtufte.com/notebook/making-better-inferences-from-statistical-graphics-edward-tufte/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 出典・期間・加工を図に添える方針（図の下の出典行の根拠）。追記行: 文書化の対象（データの出どころと分析の過程）

### S15 Graphics Press（Tufte の出版元ページ）

> Detection of graphical deception: design variation vs. data variation. Sources of deception.
>
> Design of the high-resolution displays, small multiples. Editing and improving graphics. The data-ink ratio.

- 媒体・日付: edwardtufte.com 書籍ページ「The Visual Display of Quantitative Information」（1983 / 第 2 版 2001）
- URL: https://www.edwardtufte.com/book/the-visual-display-of-quantitative-information/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 書籍の紹介文であり Tufte の定義文ではない。書籍の主題（data-ink 比・small multiples・graphical deception）の存在確認にだけ使う。追記行: 書籍が small multiples と data-ink ratio を扱うことの出版元の紹介文（定義の逐語ではない）

### S16 Edward Tufte

> Edward Tufte, The Visual Display of Quantitative Information (1983, 2001), 106-121:

- 媒体・日付: edwardtufte.com「Chartjunk」ページ 2015-01-29
- URL: https://www.edwardtufte.com/notebook/chartjunk/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: このページ自体は chartjunk の定義文を載せず、書籍の該当ページ（VDQI 106-121 ほか）を指すだけ。定義の逐語は書籍・未照合

### S17 Tufte サイトの読者投稿（算式への批判）

> If original data changes by a factor of a, and the graphics data changes by a factor of b, then the lie factor is b/a, but ET’s factor is (b-1)/(a-1).

- 媒体・日付: edwardtufte.com フォーラム「Computing Lie Factor by dividing percentages」、読者の投稿 2001-07-30
- URL: https://www.edwardtufte.com/notebook/computing-lie-factor-by-dividing-percentages/
- 取得日: 2026-11-15
- 検証区分: C
- 備考: Lie factor の算式への読者の批判（Tufte 本人の発言ではない）。算式が議論されてきたことの確認に使う。lie factor は目安であり厳密な量ではない、という扱いにとどめる

### S18 Tufte サイトの読者投稿（算式の言い換え）

> LF = (size of effect shown in graphic / size of effect in data)

- 媒体・日付: edwardtufte.com フォーラム「Computing Lie Factor by dividing percentages」、読者のコメント 2002-01-08
- URL: https://www.edwardtufte.com/notebook/computing-lie-factor-by-dividing-percentages/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: 読者による Lie factor の言い換え（Tufte 本人の定義の逐語ではない）。書籍 p.57 の定義は書籍・未照合

### S19 Charles Joseph Minard（Dawn Finley による英訳）

> The dominant principle which characterizes my graphic tables and my figurative maps is to make immediately appreciable to the eye, as much as possible, the proportions of numeric results.

- 媒体・日付: Minard, Des tableaux graphiques et des cartes figuratives（Paris, 1862）の英訳（Finley 2003）。Tufte サイトのコメント欄に掲載
- URL: https://www.edwardtufte.com/notebook/the-work-of-charles-joseph-minard/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: Minard 自身の設計原則（比率を一目で感じ取れるように）。原文（BnF 所蔵）とは未照合の英訳であり、訳の揺れがありうる

### S20 Charles Joseph Minard（Dawn Finley による英訳）

> In a word, the illustration usurps everything, and in rendering statistics figurative, I have satisfied the need of the day.

- 媒体・日付: Minard, Des tableaux graphiques et des cartes figuratives（Paris, 1862）の英訳（Finley 2003）。Tufte サイトのコメント欄に掲載
- URL: https://www.edwardtufte.com/notebook/the-work-of-charles-joseph-minard/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: 1862 年の時点で図解が日常に広がっていたという Minard の自己認識。S19 と同じ注意

### S21 Edward Tufte

> Minard constructed the amazing graphic of the French invasion of Russia. His son-in-law wrote a long memoir of Minard, which has now been translated by Dawn Finley as part of the research in progress for Beautiful Evidence. This is the only substantial biography of Minard.

- 媒体・日付: edwardtufte.com フォーラム「The Life of Charles Joseph Minard (1781-1870)」Tufte の投稿 2002-08-18
- URL: https://www.edwardtufte.com/notebook/the-life-of-charles-joseph-minard-1781-1870/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Minard の伝記（追悼文の英訳）が Tufte サイトにあるという所在確認

### S22 Wikipedia（Minard 1869 年の図の凡例の英訳を引用）

> The numbers of men present are represented by the widths of the colored zones at a rate of one millimeter for every ten thousand men; they are further written across the zones. The red designates the men who enter Russia, the black those who leave it.
>
> Paris, November 20, 1869.

- 媒体・日付: Wikipedia「Charles Joseph Minard」
- URL: https://en.wikipedia.org/wiki/Charles_Joseph_Minard
- 取得日: 2026-11-15
- 検証区分: B
- 備考: 1869 年の図の凡例（幅 1 mm = 1 万人、赤が進軍、黒が退却）。Wikipedia 経由の英訳で、原図との照合はしていない。追記行: 図の署名の日付（1869-11-20）

### S23 Ben Shneiderman

> overview first, zoom and filter, then details on demand

- 媒体・日付: Shneiderman「The Eyes Have It: A Task by Data Type Taxonomy for Information Visualizations」1996（著者サイトの PDF）
- URL: https://www.cs.umd.edu/~ben/papers/Shneiderman1996eyes.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 情報探索マントラ。ダッシュボードの階層（概要 → 絞り込み → 詳細）の根拠。PDF は OCR 由来で一部に誤字がある

### S24 Ben Shneiderman

> seven tasks (overview, Zoom, filter, details-on-demand, relate, history, and extracts)

- 媒体・日付: Shneiderman「The Eyes Have It: A Task by Data Type Taxonomy for Information Visualizations」1996（著者サイトの PDF。OCR 由来の誤字あり）
- URL: https://www.cs.umd.edu/~ben/papers/Shneiderman1996eyes.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 7 つのタスク（OCR のまま。zoom の大文字は OCR 由来の可能性）

### S25 Jeffrey Heer, Michael Bostock

> Inspired by Bertin’s [2] systematic treatment of visual variables, researchers in cartography [19, 27], statistics [7], and computer science [21] have derived perceptually-motivated rankings of the effectiveness

- 媒体・日付: Heer & Bostock「Crowdsourcing Graphical Perception」CHI 2010（Stanford の公開 PDF）
- URL: https://vis.stanford.edu/files/2010-MTurk-CHI.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Bertin・Cleveland & McGill・Mackinlay の系譜を 1 文で示す。ランキングの中身は引用しない

### S26 Jeffrey Heer, Michael Bostock

> subjects in Cleveland & McGill’s [7] seminal study were shown charts and asked to compare the values of two marks by estimating what percentage the smaller value was of the larger.

- 媒体・日付: Heer & Bostock「Crowdsourcing Graphical Perception」CHI 2010（Stanford の公開 PDF）
- URL: https://vis.stanford.edu/files/2010-MTurk-CHI.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Cleveland & McGill 1984 の実験手続き（2 つの値の比を推定させる）の Heer & Bostock による要約

### S27 Jeffrey Heer, Michael Bostock

> we replicated Cleveland & McGill’s [7] classic study (Exp. 1A) of proportionality estimates across spatial encodings (position, length, angle)

- 媒体・日付: Heer & Bostock「Crowdsourcing Graphical Perception」CHI 2010（Stanford の公開 PDF）
- URL: https://vis.stanford.edu/files/2010-MTurk-CHI.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Heer & Bostock が位置・長さ・角度の判断を再現した。円グラフの角度判断が位置・長さの判断の仲間として扱われた

### S28 Jeffrey Heer, Michael Bostock

> Our results demonstrate that crowdsourced perception experiments are viable and contribute new insights for visualization design.

- 媒体・日付: Heer & Bostock「Crowdsourcing Graphical Perception」CHI 2010（Stanford の公開 PDF）の要旨
- URL: https://vis.stanford.edu/files/2010-MTurk-CHI.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: クラウドソーシングで知覚実験を再現できるという主張。知覚研究の現代的な検証法の根拠

### S29 Tamara Munzner

> The output from a level above is input to the level below, bringing attention to the design challenge that an upstream error inevitably cascades to all downstream levels.

- 媒体・日付: Munzner「A Nested Model for Visualization Design and Validation」IEEE TVCG 2009（要旨）
- URL: https://www.cs.ubc.ca/labs/imager/tr/2009/NestedModel/NestedModel.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 上流（課題・データの理解）の誤りは下流（エンコーディング）へ連鎖する。図表を選ぶ前に課題を確かめる根拠

### S30 Tamara Munzner

> We present a nested model for the visualization design and validation with four layers: characterize the task and data in the vocabulary of the problem domain, abstract into operations and data types, design visual encoding and interaction techniques, and create algorithms to execute techniques efficiently.

- 媒体・日付: Munzner「A Nested Model for Visualization Design and Validation」IEEE TVCG 2009（要旨）
- URL: https://www.cs.ubc.ca/labs/imager/tr/2009/NestedModel/NestedModel.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 4 つの層（課題とデータの特徴づけ・抽象化・エンコーディングと操作・アルゴリズム）

### S31 Tamara Munzner（書籍の公式ページ）

> Ch 1. What's Vis, and Why Do It? Ch 2. What: Data Abstraction Ch 3. Why: Task Abstraction Ch 4. Analysis: Four Levels for Validation Ch 5. Marks and Channels Ch 6. Rules of Thumb

- 媒体・日付: Munzner「Visualization Analysis and Design」（CRC Press, 2014）の公式ページの章立て
- URL: https://www.cs.ubc.ca/~tmm/vadbook/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 章立ての一覧（原文は並んだ見出し）。What（データ）・Why（課題）・Marks and Channels・Map Color の章の存在確認。本文の逐語は書籍・未照合

### S32 Tamara Munzner（書籍の公式ページ）

> Figures : 113 total. All diagrams in PDF format for download. Free to use with attribution (CC-BY-4.0 license).

- 媒体・日付: Munzner『Visualization Analysis and Design』（CRC Press, 2014）の公式ページ（図版の利用条件）
- URL: https://www.cs.ubc.ca/~tmm/vadbook/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 図版は帰属表示つきで再利用可（CC BY 4.0）という記述

### S33 Stephen Few

> A dashboard is a visual display of the most important information needed to achieve one or more objectives, consolidated and arranged on a single screen so the information can be monitored at a glance.

- 媒体・日付: Few「Common Pitfalls in Dashboard Design」2006-02（定義は 2004-03 の Intelligent Enterprise「Dashboard Confusion」の再掲と本文が述べる）
- URL: http://www.perceptualedge.com/articles/Whitepapers/Common_Pitfalls.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ダッシュボードの定義。「一画面・一目」が要件

### S34 Stephen Few

> Splitting the big picture into a series of separate small pictures is a mistake when seeing the big picture is worthwhile.

- 媒体・日付: Few「Common Pitfalls in Dashboard Design」2006-02（公開 PDF。Pitfall 1 の本文）
- URL: http://www.perceptualedge.com/articles/Whitepapers/Common_Pitfalls.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 画面を分割して全体を見えなくする失敗

### S35 Stephen Few

> Of all the graphs that play major roles in the lexicon of quantitative communication, however, the pie chart is by far the least effective.

- 媒体・日付: Few「Save the Pies for Dessert」Visual Business Intelligence Newsletter 2007-08
- URL: http://www.perceptualedge.com/articles/visual_business_intelligence/save_the_pies_for_dessert.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 円グラフへの批判（Few の評価。研究結果の要約ではない）

### S36 Stephen Few

> The primary strength of a pie chart is the fact that the message “part-to-whole relationship” is built right into it in an obvious way.

- 媒体・日付: Few「Save the Pies for Dessert」Visual Business Intelligence Newsletter 2007-08
- URL: http://www.perceptualedge.com/articles/visual_business_intelligence/save_the_pies_for_dessert.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Few 自身が認める円グラフの強み（部分と全体の関係が構造に組み込まれている）

### S37 Stephen Few

> Regardless, the fact remains that a comparison of two sets of summed parts is rare in the real world. But, by all means, should you ever need to display data for this purpose, a pie chart would serve you well. Otherwise, save the pies for dessert.

- 媒体・日付: Few「Save the Pies for Dessert」Visual Business Intelligence Newsletter 2007-08
- URL: http://www.perceptualedge.com/articles/visual_business_intelligence/save_the_pies_for_dessert.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 円グラフが有効になりうる唯一の例外として、複数の部分の合計の比較を挙げ、それは実務では稀だと述べる

### S38 Stephen Few

> Today, I can’t think of a single case when there isn’t a better solution than a graph with a dual-scaled axis.
>
> Visual Business Intelligence Newsletter March 2008

- 媒体・日付: Few「Dual-Scaled Axes in Graphs: Are They Ever the Best Solution?」2008-03
- URL: http://www.perceptualedge.com/articles/visual_business_intelligence/dual-scaled_axes.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 二軸グラフに「これより良い解がない場合を思いつかない」という立場。追記行: 刊行の年月（2008 年 3 月）

### S39 Stephen Few

> I considered graphs with two quantitative scales on a single axis (either X or Y) a viable option.
>
> In 2004, when I wrote the book Show Me the Numbers, and even more recently when I wrote Information Dashboard Design, I considered graphs with two quantitative scales on a single axis (either X or Y) a viable option.

- 媒体・日付: Few「Dual-Scaled Axes in Graphs: Are They Ever the Best Solution?」2008-03
- URL: http://www.perceptualedge.com/articles/visual_business_intelligence/dual-scaled_axes.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Few 自身が 2004 年の著書の時点では二軸を有力な選択肢と考えていた、という立場の変化。追記行: 2004 年の著書の時点という年

### S40 Stephen Few

> The bullet graph was developed to replace the meters and gauges that are often used on dashboards.

- 媒体・日付: Few「Bullet Graph Design Specification」改訂 2013-10-10
- URL: http://www.perceptualedge.com/articles/misc/Bullet_Graph_Design_Spec.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ゲージ・メーターの代替としての bullet graph

### S41 Stephen Few

> Its linear design not only gives it a small footprint, but also supports more efficient reading than radial meters.

- 媒体・日付: Few「Bullet Graph Design Specification」改訂 2013-10-10
- URL: http://www.perceptualedge.com/articles/misc/Bullet_Graph_Design_Spec.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 直線の設計が小さな面積で読み取りやすい、という主張（実験結果の引用ではない）

### S42 Stephen Few

> the universe of quantitative messages (the focus of this article) can be boiled down to seven quantitative message types.

- 媒体・日付: Few「Eenie, Meenie, Minie, Moe: Selecting the Right Graph for Your Message」2004-09-18
- URL: http://www.perceptualedge.com/articles/ie/the_right_graph.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 量的メッセージを 7 類型に分けて図を選ぶ方式（Few の整理）

### S43 Robert Kosara

> These three studies clearly show that we do not read pie charts by angle.

- 媒体・日付: eagereyes「An Illustrated Tour of the Pie Chart Study Results」2016-06-28
- URL: https://eagereyes.org/blog/2016/an-illustrated-tour-of-the-pie-chart-study-results
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 円グラフは角度で読まれていない、という研究者の結論。「角度が読みにくいから円グラフは悪い」という説明の根拠を弱める

### S44 Robert Kosara

> To be clear, these studies say nothing about the suitability of pie charts.

- 媒体・日付: eagereyes「An Illustrated Tour of the Pie Chart Study Results」2016-06-28
- URL: https://eagereyes.org/blog/2016/an-illustrated-tour-of-the-pie-chart-study-results
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 同じ研究が円グラフの適否については何も述べていない、という本人の限定

### S45 Robert Kosara

> What we did find, however, is that the donut chart is no worse than the pie chart.

- 媒体・日付: eagereyes「An Illustrated Tour of the Pie Chart Study Results」2016-06-28
- URL: https://eagereyes.org/blog/2016/an-illustrated-tour-of-the-pie-chart-study-results
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ドーナツは円グラフより悪くないという結果

### S46 Fabio Crameri, Grace E. Shephard, Philip J. Heron

> However, colour maps that visually distort data through uneven colour gradients or are unreadable to those with colour-vision deficiency remain prevalent in science.

- 媒体・日付: Crameri, Shephard & Heron、Nature Communications 11, 5444（2020-10-28）の要旨
- URL: https://www.nature.com/articles/s41467-020-19160-7
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 虹色（rainbow-like）と赤緑のカラーマップへの批判の要点

### S47 Fabio Crameri, Grace E. Shephard, Philip J. Heron

> Rainbow, the most-widely used colour map, fails to reproduce a meaningful smooth gradient, yet the other colour maps (see Box 2) are all universally readable.

- 媒体・日付: Crameri, Shephard & Heron、Nature Communications 11, 5444（2020-10-28）の本文（図 2 の説明）
- URL: https://www.nature.com/articles/s41467-020-19160-7
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 虹色は滑らかな勾配を再現しない

### S48 Fabio Crameri, Grace E. Shephard, Philip J. Heron

> Colour maps that include both red and green colours with similar lightness cannot be read by a large fraction of the readership

- 媒体・日付: Crameri, Shephard & Heron、Nature Communications 11, 5444（2020-10-28）の本文
- URL: https://www.nature.com/articles/s41467-020-19160-7
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 明度が近い赤と緑は読者の相当な割合に読めない

### S49 matplotlib 開発チーム

> For many applications, a perceptually uniform colormap is the best choice; i.e. a colormap in which equal steps in data are perceived as equal steps in the color space. Researchers have found that the human brain perceives changes in the lightness parameter as changes in the data much better than, for example, changes in hue.

- 媒体・日付: matplotlib ドキュメント「Choosing Colormaps in Matplotlib」
- URL: https://matplotlib.org/stable/users/explain/colors/colormaps.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 知覚的に均等なカラーマップと、明度の変化がデータの変化として読まれやすいという説明

### S50 Stéfan van der Walt, Nathaniel Smith

> have designed as potential replacements for matplotlib's default, jet

- 媒体・日付: BIDS「A Better Default Colormap for Matplotlib」の解説ページ
- URL: https://bids.github.io/colormap/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: viridis 系が jet の置き換えとして設計されたという経緯

### S51 Anton Mikhailov（Google）

> Because the rate at which the color changes ‘perceptually’ is not constant, Jet is not perceptually uniform

- 媒体・日付: Google Research Blog「Turbo, An Improved Rainbow Colormap for Visualization」2019-08-20
- URL: https://research.google/blog/turbo-an-improved-rainbow-colormap-for-visualization/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: jet が知覚的に均等でない理由の説明

### S52 Anton Mikhailov（Google）

> Today we are happy to introduce Turbo, a new colormap that has the desirable properties of Jet while also addressing some of its shortcomings, such as false detail, banding and color blindness ambiguity.

- 媒体・日付: Google Research Blog「Turbo, An Improved Rainbow Colormap for Visualization」2019-08-20
- URL: https://research.google/blog/turbo-an-improved-rainbow-colormap-for-visualization/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 虹色型でも欠点（偽の細部・縞・色覚の曖昧さ）を直した設計がある、という Google の立場。虹色を一律に禁じる説への反例として使う

### S53 Cynthia Brewer, Mark Harrower（Penn State）

> Number of data classes: 3 4 5 6 7 8 9 10 11 12 Nature of your data: sequential diverging qualitative Pick a color scheme: Only show: colorblind safe print friendly photocopy safe

- 媒体・日付: colorbrewer2.org（ColorBrewer 2.0）の画面の文言
- URL: https://colorbrewer2.org/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 画面の文字列（設定項目）を連結したもの。ColorBrewer が階級数・データの性質（sequential / diverging / qualitative）・色覚への配慮で色を選ぶ道具であること

### S54 axismaps / ColorBrewer

> Readme Apache-2.0 license

- 媒体・日付: GitHub axismaps/colorbrewer
- URL: https://github.com/axismaps/colorbrewer
- 取得日: 2026-11-15
- 検証区分: A
- 備考: GitHub のページの文字列を連結したもの。ColorBrewer のコードのライセンス表示。色の配色定義の利用条件は別途確認が必要

### S55 Masataka Okabe, Kei Ito

> One in twelve Caucasian (8%), one in 20 Asian (5%), and one in 25 African (4%) males are so-called "red-green" colorblind.

- 媒体・日付: Color Universal Design (CUD) 解説ページ、2002-11-20（2008 改訂）
- URL: https://jfly.uni-koeln.de/color/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 赤緑色覚の頻度（男性）。人種別の数値を含むため、使うときは「男性の約 1/12（コーカサス系）」のように範囲を限る

### S56 Masataka Okabe, Kei Ito

> Labels are shown directly within the drawings, connected with thin lines. This way there is no need to compare the colors of two distant objects (lines and their keys). This is often difficult for colorblinds even when the objects are only a few centimeters apart. Thus, the improved drawing can convey enough information even without color.
>
> Do not convey information in color only. Show difference BOTH in color and shape (solid and dotted lines, different symbols, various hatching, etc.).

- 媒体・日付: Okabe & Ito「Color Universal Design (CUD)」解説ページ、2002-11-20（2008 改訂）
- URL: https://jfly.uni-koeln.de/color/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 凡例を使わず直接ラベルを置き、線種・記号を併用する冗長なコーディング。追記行: 色だけで情報を伝えず、色と形の両方で差を示すという同ページの記述（線種・記号の併用）

### S57 Masataka Okabe, Kei Ito

> Colors between yellow and green are all avoided, since they are indistinguishable with yellow and orange.

- 媒体・日付: Okabe & Ito「Color Universal Design (CUD)」解説ページ、2002-11-20（2008 改訂）の Fig. 16 の説明
- URL: https://jfly.uni-koeln.de/color/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 色覚多様性に配慮したパレットの設計理由（具体の色値は図で、本文からは取れない）

### S58 Bang Wong

> In individuals of Northern European ancestry, as many as 8 percent of men and 0.5 percent of women experience the common form of red-green color blindness

- 媒体・日付: Nature Methods 8, 441「Points of view: Color blindness」2011-05-27（冒頭部のみ公開）
- URL: https://www.nature.com/articles/nmeth.1618
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 北欧系の男性で最大 8 % が赤緑色覚異常

### S59 米国 National Eye Institute

> About 1 in 12 men have color vision deficiency

- 媒体・日付: NEI「Color Blindness」ページ
- URL: https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/color-blindness
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 男性の約 12 人に 1 人が色覚異常（公的機関の説明）

### S60 W3C（WCAG 2.2 Understanding）

> Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

- 媒体・日付: Understanding SC 1.4.1 Use of Color
- URL: https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 色だけで意味を伝えない、という達成基準

### S61 W3C（WCAG 2.2 Understanding）

> The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s)

- 媒体・日付: Understanding SC 1.4.11 Non-text Contrast
- URL: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: UI 部品・必要なグラフィックは隣接色に対して 3:1 以上

### S62 W3C（WCAG 2.2 Understanding）

> Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.

- 媒体・日付: W3C WCAG 2.2 Understanding SC 1.4.11 Non-text Contrast
- URL: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 理解に必要なグラフィックの部分が対象（例外あり）

### S63 W3C（WCAG 2.2 Understanding）

> The visual presentation of text and images of text has a contrast ratio of at least 4.5:1
>
> Large-scale text and images of large-scale text have a contrast ratio of at least 3:1

- 媒体・日付: Understanding SC 1.4.3 Contrast (Minimum)
- URL: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 図中の文字（軸ラベル・注記）の最小コントラスト 4.5:1（大きな文字は 3:1）。追記行: 大きな文字の 3:1

### S64 Analysis Function（英国政府）

> Do not break the numerical axis on bar charts

- 媒体・日付: Analysis Function「Data visualisation: charts」公開 2022-05-19
- URL: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 棒グラフで数値軸を 0 から始めない（途中で切る）ことを避ける指針。引用は節の見出し。理由は S126 の文

### S65 Analysis Function（英国政府）

> If starting the numerical axis at zero stops you from telling the story clearly, consider an alternative chart, such as a Cleveland dot plot

- 媒体・日付: Analysis Function「Data visualisation: charts」公開 2022-05-19
- URL: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 0 からでは差が見えないときは別のグラフ（ドットプロット）を検討する

### S66 Analysis Function（英国政府）

> Pie charts should only be used when: there are five categories or fewer the categories sum to a meaningful whole (you can combine categories when appropriate, but never remove a category from the ‘whole’) there is a dominant category (if several categories are a similar size, use a bar chart instead)

- 媒体・日付: Analysis Function「Data visualisation: charts」公開 2022-05-19
- URL: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 円グラフを使う条件（5 区分以下・意味のある全体・突出した区分）を政府の指針が明記。原文は 3 項目の箇条書きで、引用は項目を連結したもの

### S67 Analysis Function（英国政府）

> Avoiding using legends unless necessary. This is because legends use colour to match labels to data. This fails accessibility success criterion 1.4.1
>
> In line charts legends can be avoided by labelling the lines directly.

- 媒体・日付: Analysis Function「Data visualisation: charts」公開 2022-05-19（折れ線グラフの節。原文の綴りのまま）
- URL: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 凡例を避け、線の末尾に直接ラベルを置く。理由は WCAG 1.4.1。追記行: 折れ線では線を直接ラベルすれば凡例を避けられるという同ページの記述

### S68 Analysis Function（英国政府）

> If you cannot write down the message your chart is giving in a few sentences, you should think again about the chart you have chosen.

- 媒体・日付: Analysis Function「Data visualisation: charts」公開 2022-05-19（Choosing the right chart の節）
- URL: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 図表を選ぶ前に、伝えたいメッセージを数文で書けるかを確かめる

### S69 Analysis Function（英国政府）

> It is easier to work out what is happening in each category when small multiples are used.
>
> If you use stacked bars for data that isn’t part-to-whole, avoid using them for data where some categories have negative values. Try a small multiples chart instead.

- 媒体・日付: Analysis Function「Data visualisation: charts」公開 2022-05-19
- URL: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 積み上げ棒より small multiples のほうが各区分の動きを読みやすいという指針。追記行: small multiples が勧められる文脈（積み上げ棒に負の値を含む場合）

### S70 Analysis Function（英国政府）

> Avoid shaded backgrounds, unnecessary borders, patterns, textures, shadows, 3D shapes, unnecessary data markers and thick or dark gridlines.

- 媒体・日付: Analysis Function「Accessible charts: a checklist of the basics」2023-05-02
- URL: https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: チャートの装飾（背景・枠・3D・太い格子線）を避ける指針

### S71 Analysis Function（英国政府）

> Make sure all text is horizontal.

- 媒体・日付: Analysis Function「Accessible charts: a checklist of the basics」2023-05-02
- URL: https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 軸ラベルを水平にする（入らなければ転置する）

### S72 Analysis Function（英国政府）

> Dashboards are not good at explaining what’s happening in the data and users may have to discover insights for themselves.

- 媒体・日付: Analysis Function「Data visualisation: building and managing dashboards」
- URL: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-building-and-managing-dashboards/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ダッシュボードは「何が起きているか」の説明に向かず、利用者が自分で洞察を見つけることになる、という政府の注意

### S73 Frank Donnarumma（ONS Digital）

> We would see it as a glaring mistake to say “10 is bigger than 100” in writing, yet with dual axis charts we often say this visually.

- 媒体・日付: ONS Digital Blog「Dueling with axis: the problems with dual axis charts」2019-07-03
- URL: https://digitalblog.ons.gov.uk/2019/07/03/dueling-with-axis-the-problems-with-dual-axis-charts/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 二軸グラフが文章でいえば「10 は 100 より大きい」と言うのに等しい、という比喩

### S74 Frank Donnarumma（ONS Digital）

> Manipulating the axis on a line chart can be a reasonable thing to do.

- 媒体・日付: ONS Digital Blog「Dueling with axis: the problems with dual axis charts」2019-07-03
- URL: https://digitalblog.ons.gov.uk/2019/07/03/dueling-with-axis-the-problems-with-dual-axis-charts/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 折れ線グラフでの軸の操作は妥当な場合があるという留保

### S75 Lisa Charlotte Muth（Datawrapper）

> We believe that charts with two different y-axes (also called double Y charts, dual-axis charts, dual-scale data charts, or superimposed charts) make it hard for most people to intuitively make right statements about two data series.
>
> Here we will present four of them: Creating two charts, indexed charts, labeling and connected scatterplots.

- 媒体・日付: Datawrapper Blog「Why not to use two axes, and what to use instead」2018-05-08（2026-07 に冒頭へ追記あり）
- URL: https://www.datawrapper.de/blog/dualaxis
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 二軸グラフへの批判の中心主張。追記行: 代替案（2 つの図・指数化・直接ラベル・接続散布図）の列挙

### S76 Lisa Charlotte Muth（Datawrapper）

> But all the issues this original article pointed out are still valid.
>
> As of July 2026, users on a Business plan can build dual-axis charts in Datawrapper
>
> A general audience is indeed likely to misread dual-axis charts, for all the reasons explained here

- 媒体・日付: Datawrapper Blog「Why not to use two axes, and what to use instead」2018-05-08 の冒頭に 2026-07 に追記された注記
- URL: https://www.datawrapper.de/blog/dualaxis
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Datawrapper は 2026-07 に Business プランで二軸を提供した一方、元の批判は有効としている。立場が動いたことの確認。追記行: 2026-07 の時点と、一般の読み手が読み誤りやすいという同記事の記述

### S77 Lisa Charlotte Muth（Datawrapper）

> We've learned that in some cases, dual-axis charts really are the best way to show the data
>
> Edit, July 2026: We originally published this article in May 2018 to explain why you couldn't create dual-axis charts in Datawrapper. Since then, we've changed our minds.
>
> and that people who've learned to read them correctly (in financial services, for example) aren't misled by them. In fact, they find them incredibly useful.

- 媒体・日付: Datawrapper Blog「Why not to use two axes, and what to use instead」2018-05-08 の冒頭に 2026-07 に追記された注記
- URL: https://www.datawrapper.de/blog/dualaxis
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 金融など読み方を学んだ読者には有効という見直し。追記行: 2026-07 の追記であることと元の公開（2018 年）、読み方を学んだ読み手にとって有用だという同記事の記述

### S78 Lisa Charlotte Muth（Datawrapper）

> Aligning axis scales means making sure that both axes “grow” at the same rate.
>
> To make trends more comparable, consider indexed charts.
>
> If you start one axis at zero, start the other one at zero, too.
>
> July 23rd, 2026 What to consider when creating dual-axis charts

- 媒体・日付: Datawrapper Blog「What to consider when creating dual-axis charts」2026-07-23
- URL: https://www.datawrapper.de/blog/dual-axis-charts-guide
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 二軸を使うなら目盛りの伸び率をそろえる、という実務ルール。追記行: 指数化の推奨と、一方の軸が 0 起点ならもう一方も 0 起点にするという同記事の記述、公開日（2026-07-23）

### S79 Datawrapper

> Truncated y-axes in column charts and bar charts are considered deceptive and misleading.
>
> This article explains why you can't set the minimum range of your column and bar charts to something greater than zero.
>
> For example, you can calculate the differences between the bars/columns.

- 媒体・日付: Datawrapper Docs「Why our column and bar charts start at zero (or below)」
- URL: https://www.datawrapper.de/docs/why-our-column-and-bar-charts-start-at-zero
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 棒グラフの 0 始まりを製品の仕様として強制する立場。追記行: 棒・柱の最小値を 0 より大きく設定できない仕様であるという同ページの説明と、切り詰めの代替（差を計算する）

### S80 Lisa Charlotte Muth（Datawrapper）

> Choropleth maps work best for relative data. It would not be useful to map the absolute number of unemployed people in each county, since we can’t compare that data without knowing the counties’ population.

- 媒体・日付: Datawrapper Blog「What to consider when creating choropleth maps」2018-03-21
- URL: https://www.datawrapper.de/blog/choroplethmaps
- 取得日: 2026-11-15
- 検証区分: A
- 備考: コロプレスは率・割合に向き、人数そのものには向かない

### S81 Lisa Charlotte Muth（Datawrapper）

> Choropleth maps show us how much geographic area is affected.

- 媒体・日付: Datawrapper Blog「What to consider when creating choropleth maps」2018-03-21
- URL: https://www.datawrapper.de/blog/choroplethmaps
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 色が表すのは「面積」の広がりで、人口の多さではない

### S82 Lisa Charlotte Muth（Datawrapper）

> Pie charts work best if you only have a few values – five max.

- 媒体・日付: Datawrapper Blog「What to consider when creating pie charts」2018-01-03
- URL: https://www.datawrapper.de/blog/pie-charts
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 円グラフは値が 5 つまで

### S83 Data Visualisation Guide（EU 公式）

> But when the scale does not start at zero, the lengths of the bars are not proportional anymore to the numbers they are supposed to represent.

- 媒体・日付: data.europa.eu「Data Visualisation Guide」Starting bars at zero
- URL: https://data.europa.eu/apps/data-visualisation-guide/starting-bars-at-zero
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 0 を始点にしないと棒の長さが数値に比例しなくなる

### S84 Nigel Holmes（EU ガイドが引用）

> Tufte, in his insistence on absolute mathematical fidelity, remains trapped in ‘the world of academia’ and is insensitive to ‘the world of commerce,’ with its need to grab an audience

- 媒体・日付: data.europa.eu「Chart junk and data ink: minimalistic vs rich design」が引用する Holmes の発言
- URL: https://data.europa.eu/apps/data-visualisation-guide/chart-junk-and-data-ink-minimalistic-vs-rich-design
- 取得日: 2026-11-15
- 検証区分: B
- 備考: Holmes 本人の一次資料は未取得。ガイドの引用経由

### S85 Data Visualisation Guide（EU 公式）

> The researchers found that the embellished charts did a better job in getting the message across, and that people had a better memory of the charts after a three week period.

- 媒体・日付: data.europa.eu「Data Visualisation Guide」Chart junk and data ink: minimalistic vs rich design（ガイド自身の要約）
- URL: https://data.europa.eu/apps/data-visualisation-guide/chart-junk-and-data-ink-minimalistic-vs-rich-design
- 取得日: 2026-11-15
- 検証区分: R
- 備考: ガイドの要約は Bateman らの要旨（S92。正確さは「劣らない」）より強い言い方になっている。原論文の主張として使わない。照合していないのは、ガイドの記述と原論文の本文との対応で、原論文の要旨・考察は S92〜S94（区分 C）で別に取得している

### S86 Jon Schwabish（PolicyViz）

> We all say, “bar charts should start at zero” when in fact we should be saying “don’t truncate your bar charts.”

- 媒体・日付: PolicyViz「On my bars don’t start at zero」2021-07-01
- URL: https://policyviz.com/2021/07/01/on-my-bars-dont-start-at-zero/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「0 から始めよ」より「棒を切り詰めるな」が正確な規則だという主張。0 が意味を持たない尺度（1〜9 の評点など）の議論の入口

### S87 Urban Institute

> The axis in bar charts (whether vertical or horizontal) should always start at zero.

- 媒体・日付: Urban Institute Data Visualization Style Guide
- URL: https://urbaninstitute.github.io/graphics-styleguide/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 棒グラフの軸は常に 0 始まりという組織の方針。原文は「Nonzero baselines」という項目の説明文

### S88 Urban Institute

> The center of the diverging palette should always be labeled to avoid confusing the reader.

- 媒体・日付: Urban Institute Data Visualization Style Guide
- URL: https://urbaninstitute.github.io/graphics-styleguide/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 発散型パレットの中心に値を明示する

### S89 Chartability

> Chartability is a set of heuristics (testable questions) for ensuring that data visualizations, systems, and interfaces are accessible.

- 媒体・日付: Chartability 公式サイト（Frank Elavsky ほか）
- URL: https://chartability.fizz.studio/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 図表のアクセシビリティを点検するヒューリスティクス集

### S90 Financial Times Visual Journalism Team

> This is not an attempt to teach everyone how to make charts, but how to recognise the opportunities to use them effectively alongside words.

- 媒体・日付: GitHub Financial-Times/chart-doctor visual-vocabulary README
- URL: https://raw.githubusercontent.com/Financial-Times/chart-doctor/main/visual-vocabulary/README.md
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Visual Vocabulary の位置づけ（チャートの作り方ではなく、使う機会の見分け方）。ポスターと本文は FT の著作権（all rights reserved）で、中身は転載・要約しない

### S91 Financial Times

> Copyright © The Financial Times Limited, all rights reserved.

- 媒体・日付: GitHub Financial-Times/chart-doctor visual-vocabulary README の Licence の節
- URL: https://raw.githubusercontent.com/Financial-Times/chart-doctor/main/visual-vocabulary/README.md
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ライセンス表示。コード（MIT）と内容（all rights reserved）が別である点に注意

### S92 Scott Bateman ほか

> We found that people’s accuracy in describing the embellished charts was no worse than for plain charts, and that their recall after a two-to-three-week gap was significantly better.

- 媒体・日付: Bateman et al.「Useful Junk?」CHI 2010（要旨。MIT 授業サイトの PDF 写し）
- URL: https://vis.csail.mit.edu/classes/6.859/readings/pdfs/Bateman-UsefulJunk.pdf
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 装飾つきチャートの解釈の正確さは劣らず、2〜3 週後の再生は有意に良かった。Tufte 流への主要な実験的反論（ただし要旨が自ら慎重さを述べる）

### S93 Scott Bateman ほか

> Although we are cautious about recommending that all charts be produced in this style, our results question some of the premises of the minimalist approach to chart design.

- 媒体・日付: Bateman et al.「Useful Junk?」CHI 2010（要旨。MIT 授業サイトの PDF 写し）
- URL: https://vis.csail.mit.edu/classes/6.859/readings/pdfs/Bateman-UsefulJunk.pdf
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 全面的な推奨ではなく、ミニマリズムの前提への疑問にとどまる、という著者の限定

### S94 Scott Bateman ほか

> One could imagine that in some safety-critical systems, such as those used by flight control systems, limiting the presentation to the salient information

- 媒体・日付: Bateman et al.「Useful Junk?」CHI 2010（考察。MIT 授業サイトの PDF 写し）
- URL: https://vis.csail.mit.edu/classes/6.859/readings/pdfs/Bateman-UsefulJunk.pdf
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 安全上重要な場面では余計な情報を絞るほうが望ましい場合がある、という著者の留保

### S95 Michelle Borkin ほか

> discovered that observers are consistent in which visualizations they find memorable and forgettable.

- 媒体・日付: Borkin et al.「What Makes a Visualization Memorable?」IEEE TVCG（InfoVis 2013）、Harvard VCG の論文ページの要旨
- URL: https://vcg.seas.harvard.edu/publications/20130101-what-makes-a-visualization-memorable
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 観察者は何が記憶に残るかについて一貫している

### S96 Michelle Borkin ほか

> We find intuitive results (e.g., attributes like color and the inclusion of a human recognizable object enhance memorability) and less intuitive results (e.g., common graphs are less memorable than unique visualization types

- 媒体・日付: Borkin et al.「What Makes a Visualization Memorable?」IEEE TVCG（InfoVis 2013）、Harvard VCG の論文ページの要旨
- URL: https://vcg.seas.harvard.edu/publications/20130101-what-makes-a-visualization-memorable
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 色と人が認識できるオブジェクトは記憶性を高め、一般的なグラフは独自の型より記憶に残りにくい

### S97 Michael Correll, Enrico Bertini, Steven Franconeri

> Bar charts with y-axes that don’t begin at zero can visually exaggerate effect sizes. However, advice for whether or not to truncate the y-axis can be equivocal for other visualization types.

- 媒体・日付: Correll, Bertini & Franconeri「Truncating the Y-Axis: Threat or Menace?」arXiv:1907.02035v2（2020-01-08）要旨（arXiv の著者表示は 3 名。PDF の見出しは 2 名分のみ）
- URL: https://arxiv.org/pdf/1907.02035
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 棒グラフの切り詰めは効果を誇張するが、他の図では助言が一様でない

### S98 Michael Correll, Enrico Bertini, Steven Franconeri

> We find that the subjective impact of axis truncation is persistent across visualizations designs, even for designs with explicit visual cues that indicate truncation has taken place.

- 媒体・日付: Correll, Bertini & Franconeri「Truncating the Y-Axis: Threat or Menace?」arXiv:1907.02035v2（2020-01-08）要旨（arXiv の著者表示は 3 名。PDF の見出しは 2 名分のみ）
- URL: https://arxiv.org/pdf/1907.02035
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 切り詰めの主観的影響は、切り詰めを示す手がかりがあっても残る

### S99 Michael Correll, Enrico Bertini, Steven Franconeri

> We suggest that designers consider the scale of the meaningful effect sizes and variation they intend to communicate, regardless of the visual encoding.

- 媒体・日付: Correll, Bertini & Franconeri「Truncating the Y-Axis: Threat or Menace?」arXiv:1907.02035v2（2020-01-08）要旨（arXiv の著者表示は 3 名。PDF の見出しは 2 名分のみ）
- URL: https://arxiv.org/pdf/1907.02035
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 意味のある効果量の尺度を考慮する、という著者の提案

### S100 Jeffrey Heer, Maneesh Agrawala

> Cleveland proposes an optimization technique for computing the aspect ratio such that the average absolute orientation of line segments in the chart is equal to 45 degrees.

- 媒体・日付: Heer & Agrawala「Multi-Scale Banking to 45°」IEEE TVCG 12(5), 2006（要旨）
- URL: https://vis.stanford.edu/files/2006-Banking-InfoVis.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 折れ線の縦横比を線分の平均傾きが 45 度になるよう決める Cleveland の手法（banking to 45°）

### S101 Michael Correll, Michael Gleicher

> We suggest the use of gradient plots (which use transparency to encode uncertainty) and violin plots (which use width) as better alternatives for inferential tasks than bar charts with error bars.

- 媒体・日付: Correll & Gleicher「Error Bars Considered Harmful」IEEE TVCG 20(12), 2142-2151, 2014-12（PMC 掲載の著者原稿）要旨
- URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC6214189/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 誤差バーより gradient plot・violin plot が推論課題に向くという実験に基づく提案

### S102 Jessica Hullman, Paul Resnick, Eytan Adar

> Many visual depictions of probability distributions, such as error bars, are difficult for users to accurately interpret.

- 媒体・日付: Hullman et al.「Hypothetical Outcome Plots」PLOS ONE 10(11)（2015-11-16、CC BY）
- URL: https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0142444&type=printable
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 誤差バーなど確率分布の静的な図は正確に解釈しにくい

### S103 Jessica Hullman, Paul Resnick, Eytan Adar

> HOPs enables viewers to infer properties of the distribution using mental processes like counting and integration.

- 媒体・日付: Hullman et al.「Hypothetical Outcome Plots」PLOS ONE 10(11)（2015-11-16、CC BY）
- URL: https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0142444&type=printable
- 取得日: 2026-11-15
- 検証区分: A
- 備考: アニメーションで個々の抽出を見せる HOP は、数える・積分するという心的過程で分布を推論させる

### S104 米国 National Hurricane Center（NOAA）

> The cone represents the probable track of the center of a tropical cyclone, and is formed by enclosing the area swept out by a set of circles (not shown) along the forecast track

- 媒体・日付: NHC「Definition of the NHC Track Forecast Cone」（2026 年版の半径表を含むページ）
- URL: https://www.nhc.noaa.gov/aboutcone.shtml
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 予報円（cone）が表すのは中心の進路の確からしさで、影響範囲ではない

### S105 米国 National Hurricane Center（NOAA）

> The size of each circle is set so that two-thirds of historical official forecast errors over a 5-year sample fall within the circle.

- 媒体・日付: NHC「Definition of the NHC Track Forecast Cone」（2026 年版の半径表を含むページ）
- URL: https://www.nhc.noaa.gov/aboutcone.shtml
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 円の大きさは過去 5 年の予報誤差の 2/3 が入るように決めている。区間の確率（約 67 %）の根拠を図の注記に書く例

### S106 Justin Matejka, George Fitzmaurice

> Anscome’s Quartet [1] is a set of four distinct datasets each consisting of 11 (x,y) pairs where each dataset produces the same summary statistics (mean, standard deviation, and correlation) while producing vastly different plots

- 媒体・日付: Matejka & Fitzmaurice「Same Stats, Different Graphs」CHI 2017（Autodesk Research の PDF。原文の綴り Anscome’s のまま）
- URL: https://damassets.autodesk.net/content/dam/autodesk/research/publications-assets/pdf/same-stats-different-graphs.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Anscombe の 4 組が同じ要約統計量で異なる図を作ることの説明

### S107 F. J. Anscombe（Autodesk Research のページが引用）

> make both calculations and graphs. Both sorts of output should be studied; each will contribute to understanding.

- 媒体・日付: Autodesk Research「Same Stats, Different Graphs」のページが、Anscombe 1973 から引用
- URL: https://www.research.autodesk.com/publications/same-stats-different-graphs/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: Anscombe 1973 本文の一次照合は未実施（JSTOR は取得できず、公開 PDF は画像のみ）。引用の前後の省略記号に注意

### S108 Alberto Cairo（Autodesk Research のページが引用）

> never trust summary statistics alone; always visualize your data.

- 媒体・日付: Autodesk Research「Same Stats, Different Graphs」のページが Cairo の標語として引用
- URL: https://www.research.autodesk.com/publications/same-stats-different-graphs/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: Datasaurus の標語。Cairo 本人の一次ページは未取得。ページ側の綴りは "Albert Cairo"

### S109 Autodesk Research（ページの地の文）

> Recently, Albert Cairo created the Datasaurus dataset which urges people to “never trust summary statistics alone; always visualize your data.” While the data exhibits normal-seeming statistics, plotting the data reveals a picture of a dinosaur.

- 媒体・日付: Autodesk Research「Same Stats, Different Graphs」のページ（地の文）
- URL: https://www.research.autodesk.com/publications/same-stats-different-graphs/
- 取得日: 2026-11-15
- 検証区分: R
- 備考: Datasaurus Dozen が Cairo の Datasaurus から着想された、というページの説明

### S110 William Playfair

> a man who has carefully investigated a printed table finds, when done, that he has only a very faint and partial idea of what he has read

- 媒体・日付: The Commercial and Political Atlas（Internet Archive の 1787 年の標題の走査 OCR。版次は未確認）の序文
- URL: https://archive.org/stream/bim_eighteenth-century_the-commercial-and-polit_playfair-william_1787/bim_eighteenth-century_the-commercial-and-polit_playfair-william_1787_djvu.txt
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 表を読んでも印象が残らないという Playfair の動機。OCR のため長い s は s に直して照合している

### S111 William Playfair

> the mode of painting to the eye the transactions of past times

- 媒体・日付: The Commercial and Political Atlas（Internet Archive の 1787 年の標題の走査 OCR。版次は未確認）の序文
- URL: https://archive.org/stream/bim_eighteenth-century_the-commercial-and-polit_playfair-william_1787/bim_eighteenth-century_the-commercial-and-polit_playfair-william_1787_djvu.txt
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 出来事を目に向けて描く、という趣旨の Playfair の語（原文は "painting to the eye"）。1786 年の初版と本文が同じかは未確認

### S112 Michael Friendly, Howard Wainer

> nearly all the modern forms of data graphics—the pie chart, the line graph of a time series, and the bar chart—were invented. These key developments were all due to a wily Scot named William Playfair.

- 媒体・日付: Friendly & Wainer『A History of Data Visualization and Graphic Communication』（Harvard UP, 2021）序章（著者の GitHub Pages 上の PDF）
- URL: https://friendly.github.io/HistDataVis/pdf/HistDataVis-Ch0.pdf
- 取得日: 2026-11-15
- 検証区分: R
- 備考: 歴史家の評価。円グラフ・折れ線・棒を Playfair が発明したという通説の根拠（個別の初出年は未確認）

### S113 Michael Friendly, Howard Wainer

> the idea that the purpose of data analysis was insight, not just numbers

- 媒体・日付: Friendly & Wainer『A History of Data Visualization and Graphic Communication』（Harvard UP, 2021）序章（著者の GitHub Pages 上の PDF）
- URL: https://friendly.github.io/HistDataVis/pdf/HistDataVis-Ch0.pdf
- 取得日: 2026-11-15
- 検証区分: R
- 備考: Tukey の考えの要約（著者らの言葉で、Tukey 本人の逐語ではない）

### S114 Florence Nightingale（Science Museum Group Journal が 1858 年の文として引用）

> diagrams are of great utility for illustrating certain questions of vital statistics by conveying ideas on the subject through the eye, which cannot be so readily grasped when contained in figures
>
> ( Nightingale, 1858 )

- 媒体・日付: Science Museum Group Journal「Nightingale and Martineau」
- URL: https://journal.sciencemuseum.ac.uk/article/nightingale-and-martineau/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: Nightingale 1858 の一次原文は未取得。論文の引用経由。追記行: 引用文の出典表記（Nightingale, 1858）

### S115 Science Museum Group Journal（論文の地の文）

> The area of each wedge, measured from the central point, corresponds to the number of mortalities that month

- 媒体・日付: Science Museum Group Journal「Nightingale and Martineau」
- URL: https://journal.sciencemuseum.ac.uk/article/nightingale-and-martineau/
- 取得日: 2026-11-15
- 検証区分: R
- 備考: ローズ図で各くさびの面積が月の死亡数に対応するという説明

### S116 Science Museum Group Journal（論文の地の文）

> Blue indicates death from contagious disease, red indicates death from wounds, and black represents any other cause of death.

- 媒体・日付: Science Museum Group Journal「Nightingale and Martineau」
- URL: https://journal.sciencemuseum.ac.uk/article/nightingale-and-martineau/
- 取得日: 2026-11-15
- 検証区分: R
- 備考: 青が伝染病、赤が負傷、黒がその他

### S117 Lehigh University Libraries（展示の地の文）

> Nightingale made each section equal in angle and represented magnitude using the radius of each section.

- 媒体・日付: Lehigh 大学図書館の展示「At a Glance」Nightingale's Rose Diagram
- URL: https://exhibits.lib.lehigh.edu/exhibits/show/data_visualization/science/nightingale
- 取得日: 2026-11-15
- 検証区分: R
- 備考: この説明は「半径」で大きさを表すと述べ、Science Museum の「面積」と食い違う。どちらが正確かは Nightingale の原図で確認していない

### S118 UCLA Department of Epidemiology（Frerichs の Snow サイト）

> For the 1854 cholera outbreak in London's Broad Street region, he presented two maps. The first was shown on December 4, 1854 at a meeting of the Epidemiological Society of London

- 媒体・日付: UCLA「John Snow」サイト Stream 2 f
- URL: https://epi-snow.ph.ucla.edu/Stream2_BSPoutbreak_f.html
- 取得日: 2026-11-15
- 検証区分: R
- 備考: Snow は 2 つの地図を出した（1854-12-04 に最初の地図）

### S119 UCLA Department of Epidemiology（Frerichs の Snow サイト）

> He used bars to represent deaths that occurred at the specified households. There were several minor errors in this map which were later corrected.

- 媒体・日付: UCLA「John Snow」サイト Stream 2 f
- URL: https://epi-snow.ph.ucla.edu/Stream2_BSPoutbreak_f.html
- 取得日: 2026-11-15
- 検証区分: R
- 備考: Snow の地図は棒で世帯ごとの死亡を表し、軽微な誤りが後に訂正された

### S120 Esri Press（出版社の紹介文）

> Originally published in French in 1967, Semiology of Graphics holds a significant place in the theory of information design.

- 媒体・日付: Esri Press の Bertin『Semiology of Graphics』ページ
- URL: https://www.esri.com/en-us/esri-press/browse/semiology-of-graphics-diagrams-networks-maps
- 取得日: 2026-11-15
- 検証区分: R
- 備考: 原書は 1967 年。英訳版の年は出典どうしで食い違う（Friendly & Wainer は 1973 を付す）。要旨の根拠にとどめる

### S121 Esri Press（出版社の紹介文）

> Part Two brings Bertin’s theory to life, presenting a close study of graphic techniques including shape, orientation, color, texture, volume, and size in an array of more than 1,000 maps and diagrams.

- 媒体・日付: Esri Press の Bertin『Semiology of Graphics』ページ
- URL: https://www.esri.com/en-us/esri-press/browse/semiology-of-graphics-diagrams-networks-maps
- 取得日: 2026-11-15
- 検証区分: R
- 備考: Bertin の視覚変数の列挙は出典によって異なる（本ページは shape・orientation・color・texture・volume・size を挙げる）

### S122 Analysis Function（英国政府）

> Use a maximum of ten light grey gridlines

- 媒体・日付: Analysis Function「Accessible charts: a checklist of the basics」2023-05-02
- URL: https://analysisfunction.civilservice.gov.uk/policy-store/charts-a-checklist/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 格子線は薄い灰色で最大 10 本、という数値つきの指針（政府の実務基準。実験に基づく値ではない）

### S123 Analysis Function（英国政府）

> Value labels can be useful on a pie chart (as long as the pie is limited to four categories or fewer

- 媒体・日付: Analysis Function「Data visualisation: charts」
- URL: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 円グラフの値ラベルは 4 区分以下で有効

### S124 Analysis Function（英国政府）

> Rank the categories in a pie chart by size and start the first sector at the 12 o’clock position.

- 媒体・日付: Analysis Function「Data visualisation: charts」公開 2022-05-19
- URL: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 円グラフは大きい順に並べ、12 時の位置から始める

### S125 Analysis Function（英国政府）

> The Visual Vocabulary tool from the Financial Times can help you choose the best chart

- 媒体・日付: Analysis Function「Data visualisation: charts」
- URL: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 英国政府の指針が、図を選ぶ補助として FT の Visual Vocabulary を挙げる（中身の転載ではない）

### S126 Analysis Function（英国政府）

> In bar charts you perceive the bars being proportional to each other – breaking the numerical axis distorts these relative proportions.

- 媒体・日付: Analysis Function「Data visualisation: charts」公開 2022-05-19
- URL: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 棒グラフの 0 始まりの理由（棒の長さの比例が崩れる）

### S127 Analysis Function（英国政府）

> put the burden of understanding data and important messages onto the users

- 媒体・日付: Analysis Function「Data visualisation: building and managing dashboards」
- URL: https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-building-and-managing-dashboards/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ダッシュボードの短所の 1 項目（箇条書きの 1 つ）

### S128 Edward Tufte

> Intense continuous time-series, looking just like sparklines, were the very first example after my statement of the fundamental principle of good statistical graphics: Above all else show the data
>
> My book The Visual Display of Quantitative Information was published in spring 1983.

- 媒体・日付: edwardtufte.com「Sparklines History by Tufte: 1324 to now」2016-09-22
- URL: https://www.edwardtufte.com/notebook/sparklines-history-by-tufte-1324-to-now/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: sparkline に似た図が 1983 年の VDQI の最初の例だった、という Tufte 本人の説明（書籍は未照合）。追記行: 書籍の刊行（1983 年春）

### S129 Isenberg ほか 2011（Datawrapper の記事が引用）

> We found across the board that the superimposed chart performed poorly both in terms of accuracy and time.
>
> A study from 2011 backs up that claim. Petra Isenberg, Anastasia Bezerianos, Pierre Dragicevic and Jean-Daniel Fekete showed 15 people four different charts

- 媒体・日付: Datawrapper Blog「Why not to use two axes, and what to use instead」2018-05-08 が引く、Isenberg・Bezerianos・Dragicevic・Fekete の 2011 年の研究（15 人）
- URL: https://www.datawrapper.de/blog/dualaxis
- 取得日: 2026-11-15
- 検証区分: B
- 備考: 二軸（superimposed chart）の実験的な根拠。論文本体は未取得で、Datawrapper 経由の引用。対象は 15 人と小規模。追記行: 実験の年（2011 年）と人数（15 人）。Datawrapper の記事の記述


## 引用ではない参照（事実の根拠）

書籍・有料論文など、Web に原文が無い、または取得できなかったもの。逐語の引用はしない。要旨は本 skill の言葉で、書誌情報は取得できた範囲だけ書く（取得できなかった項目は空欄でなく「未確認」と書く）。区分は「書籍・未照合」。

- N01 Edward R. Tufte, *The Visual Display of Quantitative Information*, Graphics Press（1983、第 2 版 2001）。書名・刊行年・版は S15 の公式ページによる。chartjunk の該当ページは 106-121 とサイトが示す（S16）。data-ink 比・lie factor・graphical integrity・small multiples・data-ink 最大化の定義と原則はこの書籍の内容で、定義文の逐語は未取得。ISBN・ページ数は未確認
- N02 Edward R. Tufte, *Envisioning Information*（1990）・*Visual Explanations*（1997）・*Beautiful Evidence*（2006）。S16 のページが chartjunk の関連ページとして挙げる。sparkline の章は Beautiful Evidence の 46-63 ページと、sparkline のページ（S01 の出典）が示す。本文は未取得
- N03 Jacques Bertin, *Sémiologie graphique*（原書 1967 年。出版社の紹介文による。S120）。英訳は *Semiology of Graphics*（Esri Press の版がある）。視覚変数の列挙は出典によって異なり、Esri Press の紹介文は shape・orientation・color・texture・volume・size を挙げる（S121）。位置・大きさ・明度・色・向き・形・きめという「7 変数」の列挙は、この調査では原典で確認していない。英訳版の刊行年は出典どうしで食い違う（Friendly & Wainer の序章は Semiologie Graphique に [1973] を付し、Esri Press は原書を 1967 年とする）
- N04 William S. Cleveland and Robert McGill, "Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Methods," *J. Am. Statistical Assoc.* 79:531-554, 1984（書誌は Heer & Bostock の参考文献一覧、すなわち S25 の論文による。DOI 10.2307/2288400 は検索結果の要約による）。JSTOR と Taylor & Francis のページは取得できず、抄録は未取得。実験の手続きは S26、再現は S27 が述べる。位置・長さ・角度・面積などの精度の順位は、この論文の主要な結果として広く再掲されるが、本調査では論文の本文で確認していない
- N05 Jock D. Mackinlay, "Automating the design of graphical presentations of relational information," 1986。書誌は Heer & Bostock の参考文献一覧（S25 の論文）が ACM TOG 5:110-141 とし、Munzner の 2009 年の論文の参考文献一覧は 5(2):111-141 とする（開始ページが食い違う）。ACM のページは取得できなかった（403）。expressiveness / effectiveness の定義は未取得
- N06 Tamara Munzner, *Visualization Analysis and Design*（A K Peters Visualization Series, CRC Press, 2014）。書誌と章立て（What・Why・Marks and Channels・Map Color など）は公式ページ（S31）による。expressiveness / effectiveness の原則と channel の順位は書籍の内容で、逐語は未取得
- N07 William S. Cleveland, *The Elements of Graphing Data*（Wadsworth, 1985。Bateman らの参考文献一覧による）と *Visualizing Data*（Hobart Press, 1993。Heer & Bostock の参考文献一覧による）。Analysis Function の指針が dot plot を勧める（S65）ことと、Cleveland の banking to 45 度（S100）は取得済み。書籍の本文は未取得
- N08 John W. Tukey の *Exploratory Data Analysis*（1977 年とされる）と "The Future of Data Analysis"（1962 年とされる）。出版社・巻号などの書誌は、取得した文献で確認できていない。Tukey の考え方は Friendly & Wainer の要約（S113）が述べる。1962 年の論文は Project Euclid が取得できず（本文なし）、書籍も未取得
- N09 F. J. Anscombe, "Graphs in Statistical Analysis," *The American Statistician* 27(1), 17-21, 1973（Autodesk の論文の参考文献一覧による）。公開された PDF は画像のみで文字を抽出できなかった。Autodesk の論文（S106）が 4 組の性質を説明し、1 文が Autodesk のページ経由で引かれている（S107）。原論文の本文は未取得
- N10 Stephen Few, *Show Me the Numbers*（2004）と *Information Dashboard Design*（2006）。S39 の記事が両書に触れる。書籍の本文は未取得。PDF の記事は S33 以降
- N11 Colin Ware, *Information Visualization: Perception for Design*（Morgan-Kaufmann, 第 2 版 2004。Heer & Bostock の参考文献一覧による）、Healey & Enns, "Attention and Visual Memory in Visualization and Computer Graphics," *IEEE TVCG* 18(7), 2012（書誌は検索結果の要約による）。前注意処理（preattentive processing）の時間や特徴の一覧は、どちらも本文を取得できていない。Healey & Enns の PDF は、検索結果が示す NCSU・UBC の URL がどちらも取得できなかった
- N12 Mark Harrower and Cynthia A. Brewer, "ColorBrewer.org: an online tool for selecting colour schemes for maps," *The Cartographic Journal* 40(1):27-37, 2003（Correll & Gleicher の参考文献一覧による）。ColorBrewer のサイトの画面の文言（S53）とコードのライセンス表示（S54）は取得済み。この論文と、Brewer の配色の選び方の解説は未取得
- N13 Borland と Taylor の "Rainbow Color Map (Still) Considered Harmful"（2007 年とされる）。書誌は記憶に基づき、取得した文献で確認できていない。URL を試したが別のサイトの表紙が返り、本文は未取得。虹色への批判は Crameri ほか（S46・S47）と matplotlib の資料（S49・S50）、Google（S51）で押さえた
- N14 Alberto Cairo, *How Charts Lie*（W. W. Norton, 2019。Correll らの参考文献一覧による）、*The Functional Art*（New Riders, 2012。Crameri らの参考文献一覧による）。*The Truthful Art* は取得した文献で確認していない。Datasaurus の標語は Autodesk のページ経由（S108）。書籍と本人のページは未取得
- N15 Anshul Vikram Pandey, Katharina Rall, Margaret L. Satterthwaite, Oded Nov, Enrico Bertini, "How Deceptive are Deceptive Visualizations?: An Empirical Analysis of Common Distortion Techniques," CHI 2015, ACM, 1469-1478（Correll らの参考文献一覧による）。Datawrapper の Docs が根拠として挙げる（S79 の出典ページが言及する）。論文は未取得
- N16 Kosara と Skau の "Judgment Error in Pie Chart Variations"（EuroVis 2016。書名は Semantic Scholar の記録による）。Kosara のブログは Drew Skau との研究と述べ、EuroVis の円グラフの論文に言及する。研究者本人のブログ（S43〜S45）で結論を確認。論文本体は未取得
- N17 Petra Isenberg, Anastasia Bezerianos, Pierre Dragicevic, Jean-Daniel Fekete（2011 年。15 人の実験。Datawrapper の記事の記述）。書名 "A Study on Dual-Scale Data Charts" と年は Semantic Scholar の記録による。誌名・巻号は未確認。HAL の URL は本文でなく入口のページを返した。論文本体は未取得で、結論の 1 文は Datawrapper 経由（S129。B）
- N18 "Decision making with visualizations: a cognitive framework across disciplines"（2018 年。書名・年は Semantic Scholar の記録による。URL のドメインは *Cognitive Research: Principles and Implications* のサイト）。URL は本文でなく入口のページを返した。未取得
- N19 William Playfair, *The Statistical Breviary*（1801）。Internet Archive の Google 走査の OCR テキストは取得したが、長い s が f と読まれた OCR で、逐語照合に向かないため引用しなかった。Atlas（1786 初版）は S110・S111 の 1787 年版の走査で代えた。棒グラフが Atlas の 1 枚（スコットランドの輸出入）であるという説は、取得した 1787 年版の目次に Scotland の輸出入の図がある程度の確認で、「最初の棒グラフ」という位置づけは二次資料の要約（検索結果）にとどまる
- N20 Florence Nightingale, *Notes on Matters Affecting the Health, Efficiency, and Hospital Administration of the British Army*（1858）。Wellcome 所蔵の複製として Lehigh の展示（S117）が出典を示す。原本は未取得。Science Museum の論文（S114・S115）経由
- N21 John Snow, *On the Mode of Communication of Cholera*（第 2 版。UCLA の Snow サイトが言及する）。UCLA の Snow サイト（S118・S119）が地図を示し解説する。原書は未取得。Brody H, Rip MR, Vinten-Johansen P, Paneth N, Rachman S, "Map-making and myth-making in Broad Street: the London cholera epidemic, 1854," *The Lancet* 356(9223), 64-68, 2000（UCLA の Snow サイトの出典欄による）の主張は、PubMed のページが Cookie 要求で取得できず、本文・抄録とも未取得
- N22 Charles Joseph Minard の 1869 年の図（École nationale des ponts et chaussées 所蔵とされる）。図の凡例は Wikipedia の英訳経由（S22）。ENPC のページは取得できなかった。年は Wikipedia の記載（1869-11-20）による
- N23 Michael Friendly, "A Brief History of Data Visualization"（2006）と Milestones Project。datavis.ca は接続できなかった。代わりに Friendly & Wainer（2021）の序章（著者の GitHub Pages 上の PDF。S112・S113）を使った

## 未検証・伝聞（事実・引用として使わない）

| 内容 | 状況 |
|---|---|
| 「円グラフ 1 つより悪いのは、円グラフがいくつもあることだ」という趣旨の文を Tufte の発言とすること | Tufte のフォーラムの Pie Charts のスレッドでは、読者の投稿が「このフォーラムの通説」として書く。Tufte の書籍（VDQI）にある趣旨の文として流通するが、書籍は未取得。Tufte 本人の逐語として使わない |
| 「A table is nearly always better than a dumb pie chart」（Tufte。VDQI p.178 とされる） | 流通する引用で、書籍は未取得。S12 は Tufte が表を先に検討する姿勢を示すにとどまる |
| Tufte の chartjunk の定義、data-ink 比の式（データを表すインクが全体のインクに占める割合）、「erase non-data-ink」「graphical excellence」の定義、lie factor の定義の逐語 | 書籍にある。取得した Web ページには無い。S16・S18 の範囲で書く |
| Tufte が Minard の図を "the best statistical graphic ever drawn" と評した（VDQI p.40 とされる） | 書籍は未取得。S21 は Tufte の伝記ページの所在確認だけ |
| Marey が Minard の図を評した "defies the pen of the historian in its brutal eloquence" という言い方 | 二次資料経由で流通。一次資料は未取得 |
| The Economist が Minard・Playfair の小麦価格・Nightingale の図を歴史上の 3 つの最良の図とした | Tufte のフォーラムのコメント欄（読者の 2007-12-19 の投稿）が伝えるだけで、記事は未取得 |
| Nightingale が "to affect thro' the Eyes what we fail to convey to the public through their word-proof ears" と書いた | 流通する引用（宛先は Farr とされる）で、原資料は未取得 |
| Nightingale が図に erratum を付け、使うのをやめた | 検索結果の要約のみ。取得した Science Museum の論文（S114・S115）に該当の語は無かった |
| Tukey の "The greatest value of a picture is when it forces us to notice what we never expected to see"（EDA 1977 とされる）と "Far better an approximate answer to the right question…"（1962 年とされる） | どちらも流通する引用で、原典は未取得（1962 年の論文は取得失敗）。S113 は Friendly & Wainer の要約だけ |
| Cleveland & McGill の順位表（位置 > 長さ > 角度 > 面積…）を論文の結論として書くこと | 順位が導かれたこと自体は S25・S26 で確認できるが、順位の並びと各要因の差は論文の本文を取得できていない。「原論文の順位は」と断定しない |
| Bertin の視覚変数は 7 つ（位置・大きさ・明度・色・向き・形・きめ）という列挙 | 出版社の紹介文（S121）は別の列挙を挙げる。原典で確認していない。「7 つ」と断定しない |
| 前注意処理は 200〜250 ミリ秒以内に終わる | Healey & Enns などの本文を取得できていない |
| 円グラフを避ける理由は「角度を読めないから」である | 研究者本人（S43・S44）は、角度では読まれていないと結論し、適否については何も述べていない。この説明を再生産しない |
| 色は 7 個を超えて区別できない（Miller の 7±2 を色や円グラフの区分数に当てはめる） | 出典なし。区分数の上限は S66・S82 の指針（5 以下）か、本 skill の目安（出典なし）として分けて書く |
| 二軸グラフは常に誤解を生む／常に使ってよい | 前者は 2018 年の Datawrapper（S75、S77）と Few（S38）の立場、後者は 2026-07 の Datawrapper の追記（S76・S77）の立場で、どちらも断定できない。実験の根拠は Datawrapper が引く Isenberg ほか 2011（S129。B）のみ。本体は未取得（N17） |
| 棒グラフは常に 0 から始めよ（例外なし） | Analysis Function・Urban Institute・Datawrapper（S64・S87・S79）は禁じ、Schwabish は「切り詰めるな」が正確な規則と述べ（S86）、Correll らは他の図では助言が一様でないと述べる（S97）。論争中として扱う |
| John Snow の地図が因果を明らかにした（地図が決め手だった） | Brody ほか（Lancet 2000）がこの通説に異を唱えると検索結果の要約が伝える。本文は未取得で、どちらの立場も断定しない。UCLA の Snow サイト（S118・S119）は地図の誤りの訂正を述べる |
| Playfair が最初の棒グラフを 1786 年に、1 年分のデータしかなかったために作った | 二次資料の要約のみ。取得した 1787 年版の目次に Scotland の輸出入の図があること以上は未確認 |
| 「Datasaurus」を作ったのは Albert Cairo | Autodesk のページの綴りは "Albert Cairo"。Alberto Cairo の誤記と思われるが、本人のページは未取得 |
| 8 % の男性が色覚異常（人種を区別しない言い方） | 数値は S55（コーカサス系 8 %・アジア系 5 %・アフリカ系 4 %）、S58（北欧系で最大 8 %）、S59（男性の約 12 人に 1 人）で範囲が異なる。「世界の男性の 8 %」と書かない |

## 調査の限界

- 取得できなかった重要な出典: Cleveland & McGill 1984（本文）、Mackinlay 1986、Healey & Enns 2012、Tukey の 1962 年の論文、Anscombe 1973（画像のみの PDF）、Bertin の原著、Tufte の書籍（VDQI ほか）、Munzner の書籍の本文、Borland & Taylor 2007、Isenberg ほか 2011（二軸の実験）、Kosara & Skau の論文本体、Pandey ほか 2015、Brody ほか 2000（Lancet）、Minard・Nightingale・Snow の原資料、Harrower & Brewer 2003。したがって、知覚研究の「順位」は区分 A の逐語出典が薄く、二軸グラフの実験的根拠は Datawrapper 経由の引用（S129。B）だけである
- Tufte の定義文（data-ink 比・chartjunk・lie factor・small multiples）は、Web 上の一次情報としては sparkline のページ群（S01〜S08）と chartjunk の書籍ページの所在（S16）しか取れていない。small multiples については、Tufte のサイトで該当ページ（`/notebook/small-multiples/`）が存在しなかった。Analysis Function の指針（S69）が small multiples の利点を述べるが、これは Tufte の定義ではない
- FT Visual Vocabulary は、README の位置づけの 1 文とライセンス表示（S90・S91）だけを台帳に載せた。チャート型の分類は、ライセンスのため転載・要約していない
- 色: Okabe & Ito のパレットの色値（16 進）は、取得したページでは図の中にあり、本文から取れなかった。R の `palette.colors` のドキュメントも、取得した本文に色値が無かった。色値は「本 skill の目安（出典なし）」か、色値を書かずに「Okabe & Ito のパレット」とだけ書く。WCAG の 1.4.1・1.4.3・1.4.11 は W3C の Understanding のページを取得し、本文の基準を照合した
- 地図: コロプレスの階級区分の方法（等間隔・分位・自然分類など）と、小地域のばらつきの注意は、Datawrapper の記事（S80・S81）の範囲しか取れていない。Brewer・Monmonier の資料は未取得。「How to Lie with Maps」（Monmonier）は書名の記憶のみで、未取得・未調査
- 不確実性: 予報円（S104・S105）、誤差バー・gradient plot・violin plot（S101）、HOP（S102・S103）の範囲。予測区間の見せ方の比較実験（Padilla ほか）は未取得
- ダッシュボード: Few（S33・S34・S40・S41）と英国政府の指針（S72）の範囲。ダッシュボードの KPI の最適な個数についての出典は取得していない
- 日本語圏（日本の統計局の図表の指針・日本語の組版でのグラフの文字）は調査していない。各国統計局は、英国（Analysis Function・ONS）と米国の Urban Institute の民間の指針だけを取得した。米国・欧州の他の統計局は未調査
- Tufte の批判側（Bateman・Borkin・Holmes）は、論文の要旨と二次資料の範囲で、本文全体は読んでいない。Bateman の PDF は MIT の授業サイトの写しで、権利は著者・ACM にある（S92〜S94）。論文の内容は Bateman の要旨と考察の引用に限った
- 区分 A の出典は、取得時点の本文である。Web ページは随時改訂される（特に Datawrapper は 2026-07 に内容が変わった）

### SKILL.md・design-history.md の作成時に確認した限界（2026-11-15）

- 予報円（S104）の定義文は、円が中心の進路の誤差から決まることを述べるだけで、風や雨の影響が及ぶ範囲を表す図かどうかは述べていない。取得した本文に、影響範囲との関係を述べた文は無い。「予報円は影響範囲ではない」と出典つきで書かない（誤読を避けるための本 skill の整理にとどめる）
- documentation box（S14）が述べる文書化の対象は、データの出どころと分析の過程である。期間・単位の記載は述べていない。図に期間・単位を添えるのは本 skill の整理である
- 二軸の代替案（2 つの図に分ける・指数化・直接ラベル・接続散布図。S75）と、軸の伸び率をそろえる方法（S78）は、Datawrapper の実務の提案である。代替案どうしを比べた実験は取得していない
- 棒の 0 始まりを製品の仕様として強制する説明（S79）は Datawrapper の方針の説明で、一般の規則の根拠ではない。軸の切り詰めの影響は S97・S98・S99 の範囲しか取っていない
- 虹色型のカラーマップについては、S52 が述べるのは jet の欠点（偽の細部・縞・色覚の曖昧さ）を改善した設計であるという点まで。Turbo が知覚的に均等であるとは、取得した本文では述べていない。viridis は S50 のページが jet の置き換えとして設計したカラーマップの 1 つとして述べるが、色覚の違いで読めるかの検証結果は台帳に載せていない
- 図の中の文字の最小サイズ、グラフの縦横比の具体値（S100 は 45 度の手法だけ）、KPI の個数、sparkline の寸法、予測区間の確率（80 %・95 % など）は出典を取得していない。本文では「本 skill の目安（出典なし）」と書く
- 時代別の因果（「当時の制約」「示唆」）は、出典が述べたものを除いて本 skill の整理（推測）である

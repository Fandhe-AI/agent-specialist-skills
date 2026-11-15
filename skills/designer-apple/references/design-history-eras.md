# デザイン史: 時代別の節（紙・GUI・Web・Apple の転換点）

`design-history.md`（要点）から参照する、時代ごとの詳しい節。紙・グラフィック、GUI・デジタル、Web の各時代は、当時の制約 / 応答 / 副作用と反動 / 今の判断への示唆（本 skill の整理）の 4 項目で書く。Apple の転換点は (a) Apple 自身が述べた理由、(b) 記者・批評家の説明、(c) 本 skill の整理（推測）の 3 層で書く。記法・区分・中心の問い・出典の扱いは、`design-history.md` の「読み方と記法」に従う。記述は 2026-11-15 時点である。長いファイルなので、必要な節だけを読む。このファイルを開くのは、相談者が背景を求めたとき、制作の着手前、レビューで「慣習の由来」の項目が不明のとき、の 3 つである。

節の索引:

- 紙・グラフィック: 活版印刷と可読性 / Bauhaus と新しいタイポグラフィ / スイス・スタイルと書体の体系化 / 企業アイデンティティと規格化 / 工業デザイン（Ulm・Braun・Rams） / 紙の文法がデジタルへ移ったもの
- GUI・デジタル: 前史（Sketchpad から Star） / 個人向け GUI の普及 / メタファーと質感表現 / モバイルとタッチ / フラット化 / デザインシステムとデザイントークン / 空間コンピューティング / ユーザビリティ研究の語彙
- Web: 文書としての HTML と表組みレイアウト / CSS と Web 標準 / Flash の時代 / Web 2.0 の見た目からフラットへ / モバイル化 / Web フォントとレイアウトの道具 / アクセシビリティ・性能・LP の文法
- Apple の転換点: Macintosh と初代 HIG / Snow White / Mac OS 8 の Platinum / Aqua と brushed metal / iPhone OS / 質感表現の頂点 / iOS 7 / Yosemite と San Francisco / SF Symbols / Big Sur / visionOS / Liquid Glass / HIG の 8 原則
- 転換点の早見表 / 年が食い違う出典

## 紙・グラフィック

### 活版印刷と可読性（15 世紀〜1890 年代）

- 当時の制約: 金属活字の印刷で、Library of Congress は Gutenberg 聖書を西欧で可動金属活字から刷られた最初の大きな本とし、完成は 1455 年後半の Mainz の可能性が高いと記す（R。S79）。読み手は 1 ページずつではなく、開いた 2 ページを同時に見る（Morris の 1893 年の講演。S81）。Morris と Walker は、商業主義が読みにくいほど小さな活字を強いると批判した（S82）。
- 応答: Morris は Kelmscott Press を 1891 年に始めた（Cockerell の小史は 1891 年 1 月 31 日の最初の試し刷りを記す。R。S82）。目的は、美しく、読みやすく、字形の奇抜さで読み手を煩わせない本だった（1895 年の趣意書。S80）。余白は、綴じ側が最も狭く、地が最も広い規則とした（S80）。行長の目安（45〜75 字、理想は 66 字）は Bringhurst の記述で、Rutter の Web 向け解説サイトの転載による（B。原書は未取得。S83）。
  - 引用（原文、S81）: "we only occasionally see one page of a book at a time; the two pages making an opening are really the unit of the book"
- 副作用と反動: Morris は自身を装飾家と書き、可読性を掲げながら装飾の多い本を作った（S80）。モダニズム側が Morris を名指しで批判した一次資料は取得していない。中世の余白比（20 パーセントずつの差）は、友人の司書の調べとして伝聞で書かれたもので、史料で確認された比ではない（S80）。Ruder は 1959 年の文章で、Morris が始めた復興の要点の一つを、表裏の行をそろえる linear register と書いた（B。S93）。
- 示唆（本 skill の整理）: 紙の単位は見開きで、画面ではスクロールした流れ全体、スライドでは前後の連続に読み替えられる。LP のセクションを単独で最適化すると、流れ全体の余白のリズムが崩れる。行長・余白比の目安は固定された版面を前提にする。HIG は 3 行以上のテキストで詰めた行間を避けるよう書き（S51）、WCAG は文字の拡大で内容が失われないことを求める（S72）。紙の数値をそのまま画面へ移す根拠は取得していない。

### Bauhaus と新しいタイポグラフィ（1919〜1933 年）

- 当時の制約: ヴァイマル共和国の時代で、学校の存続期間 1919〜1933 年はその期間と一致する（MoMA の記述。R。S85）。学校は Weimar で創立され、1925 年に Dessau へ移り、1932 年に閉鎖された（R。S85）。Gropius の 1919 年の綱領は、手工芸への回帰を呼びかけた（英訳。S84）。
- 応答: 綱領は、職人と芸術家の階級差を取り払う新しい職人のギルドを呼びかけた（英訳。S84）。出発点は工業ではなく手工芸だった（S84）。Tschichold の『Die neue Typographie』は 1928 年に Berlin で刊行された（出版社の紹介文。R。S87）。主張の核は、明快さと、テキストの機能から形を作ることである（英訳の抜粋。B。S86）。同じ抜粋の図版は、不要な装飾・多すぎる書体と大きさ・中央揃えを悪い例とし、装飾なし・少ない大きさ・良い可読性を良い例として対比する（B。S86）。
  - 引用（原文、S84。英訳）: "Architects, sculptors, painters, we all must return to the crafts!"
- 副作用と反動: MoMA は、Bauhaus が一般には時代を超えた国際モダニズム様式の略語として使われがちだと注意する（R。S85）。Tschichold は 1959 年の講演で、新しいタイポグラフィの教えと国家社会主義・ファシズムの間に衝撃的な類似を見出したと述べ、類似点に書体の容赦ない制限と軍隊的な行の配置を挙げ、古典的な書体が最も読みやすいと語った（B。古書店の転載経由。S88）。1946 年に Bill と論争になり、Bill は Tschichold の当時の仕事を危険な政治的反響をもつ反動的なタイポグラフィと非難し、Tschichold は Bill のタイポグラフィを悪い意味で芸術的と見た（Kinross の要約。S89）。Kinross は別の著作で、Tschichold の転向の理由を、権威主義的・軍隊的でナチズムと同じ精神に染まっていたことと、モダニズムは広告に限られ本の内容をうまく表せないことの 2 つに整理する（転載経由。B。S91）。食い違い: Bill の論文「Über Typografie」の掲載号を、Schuster の書評は 4 月号とし（C。S90）、Kinross の後年の調査は 5 月号とする（S89）。本書は後者に従う。
- 示唆（本 skill の整理）: 「Bauhaus っぽい」と「Apple っぽい」は、どちらも様式の記号として消費されやすい。MoMA の注意は、`../examples/anti-pattern-apple-look.md` の見た目の模倣への注意と同じ構図である。書体と大きさを絞る方針は今も有効で、HIG も使う書体の数を最小限にするよう書く（S51）。一方、Tschichold 自身の反省は、絞る規則が目的化すると内容に合わない形を押しつける、というものだった。デザインシステムを例外を許さない規則として運用すると、同じ問題が起きうる。訴求のための LP・スライドと、読む・操作する設定画面や長文で、組み方の方針を分ける判断は、広告と本を分けて考えた点に読み替えられる。

### スイス・スタイルと書体の体系化（1950 年代〜1981 年）

- 当時の制約: 国際的に使う書体では混乱を避けたい、と Frutiger は Univers の番号体系の理由を語った（本人の回答。S95）。鉛での鋳造は高価で、年に 1〜2 書体しか出なかったとも語る（S95）。組版は金属活字から写真植字へ移る時期で、写植では図面を用意するだけで 16 のアルファベットを 1 枚の版に置けたと Frutiger は述べる（S95）。
- 応答: Helvetica は、MoMA 所蔵品の記録では Max Miedinger と Edouard Hoffmann の Helvetica Bold, 36 point で、年は 1956〜1957 年とされる（R。所蔵品の記録の年で、書体の発表年や改名の年とは限らない。S94）。Univers は 1954〜57 年の設計と Eye 誌の導入文が書く（R。S95）。Frutiger は本文用の標準を 55 とし、太さと幅を 2 桁の数字で表した（S95）。Müller-Brockmann『Grid Systems in Graphic Design』（1981 年。転載の注記による。B。S92）は、グリッドを設計者の心構えの表現と書き、図版の大きさの差が少ないほど落ち着いた印象になると述べた（B。S92）。Ruder は 1959 年の文章で、最初の原則を本文の明快な可読性とし、60 字を超える行は読みにくいと書いた（B。S93）。
  - 引用（原文、S95）: "If you want to do an international face, you don’t want confusion."
- 副作用と反動: Müller-Brockmann は、論理的に配置した情報が速く読めることを科学的に証明された事実と書くが、取得した抜粋に根拠の記載は無い（B。S92）。グリッドを普遍的に妥当する法則に従うことと書いた文は、取得した 2 か所で語形が 3 通りに食い違う（B。S92）。Frutiger は Helvetica を blue jeans の書体と評した（S95）。中立・普遍を掲げた書体が、どこにでもある記号にもなるという両面を示す評として読める（本 skill の整理）。Univers のバリエーション数は、Frutiger が 21 と言い（S95）、Vignelli は 59 と書く（S99）。後年の拡張を含むかは確認していない。
- 示唆（本 skill の整理）: Univers の 2 桁番号は、デザイントークン（`font-weight: 600`、`title-1`）と同じ発想で、名前の言語差・解釈差をなくすために数で呼ぶ。HIG のテキストスタイル（S51、S66）はその延長として説明できる。図版の大きさの種類を減らすと落ち着く、という主張は、カードの大きさや画像比率の種類を絞る判断の根拠に使えるが、出典は効果を検証していない。紙の行長（Ruder の 60 字、Bringhurst の 45〜75 字。S83）は紙の本文の目安で、画面の長文に使うときは画面での検証が未確認だと添える。グリッドは手段で、内容の重要度が先にある（HIG は重要度で並べ、関連をまとめるよう書く。S52）。

### 企業アイデンティティと規格化（1950〜70 年代）

- 当時の制約: 大企業・公共機関は、多数の拠点・媒体で同じ顔を見せる必要があった（本 skill の整理）。IBM は 1956 年に Watson Jr. が Eliot Noyes を雇い、建築からグラフィックス・仕事の方法までを含む企業デザインプログラムを始めた（IBM の地の文。R。S96）。New York の地下鉄は、NYCTA が引き継いだ案内表示を標準化する最初のまとまった取り組みが 1966 年に始まった（R。S98）。
- 応答: Vignelli は 1965 年までに渡米して Unimark International を共同創業した（RIT の記述。R。S97）。Unimark は駅の表示の標準を作り、1970 年に路線図の改訂を受託し、1972 年 8 月に図式的な路線図が登場した（R。S98）。Vignelli は、グリッドの目的を印刷ページ上の恣意的で意味のない配置を防ぐことと書き、地下鉄ダイアグラムの凡例に、地理的な地図ではなく相対距離を読みやすさのために変えたと書いた（本人の本文。A。図の版・年は本文から特定できない。S99）。Aicher の Munich 五輪（開催年は引用元の書名による。S100 の備考）は、規則とグリッドで頭・胴・手足の比率を決めたピクトグラムを作った（Cooper Hewitt の記事。R。S100）。
  - 引用（原文、S99）: "The purpose of the grid is to help to prevent arbitrary, meaningless placements of the information on the printed page."
  - 引用（原文、S99）: "It is not a geographical map: relative distances have been altered in favor of better legibility."
- 副作用と反動: IBM のページは、Noyes が標準化された視覚モチーフは古びると考え、色や書体のテンプレート化ではなく現代デザインの最良という主題を勧めたと書く（R。S96）。規格の硬直への警戒は、当事者側にもあったと読める（本 skill の整理）。NYC の図式的な路線図は、1975 年に地図委員会が作られ、1979 年に地理に基づく地図に置き換えられた（R。S98）。同館は置き換えの理由を一般的な言い方でしか書かず、地理と合わず混乱したから置き換えられた、という説明は一次資料で確認していない（`design-history.md` の末尾の一覧を参照）。1974 年に駅名の書体が Helvetica Medium から Trade Gothic に変わった（R。S98）。食い違い: RIT は路線図を 1970 年とし（S97）、NYC Transit Museum は 1970 年を受託、1972 年 8 月を登場とする（S98）。本書は後者に従う。Vignelli は、デスクトップパブリッシングによる書体の氾濫を規模の大きな災いと呼んだ（本人の本文。A。S99）。規格の担い手が道具の民主化を災いと見た立場の記録として読める（本 skill の整理）。
  - 引用（原文、S99）: "It was a disaster of mega proportions."
- 示唆（本 skill の整理）: 規格（マニュアル）は、多数の作り手に同じ判断を配る仕組みで、今のデザインシステムや HIG はその後継にあたる。Noyes の警戒は、トークンや部品を固定しすぎると製品が古びる、という逆の危険を示す。路線図は、抽象化して読みやすくすることと、利用者の現実とずれることの交換条件を示す。ダッシュボード・地図・フローチャートで抽象化するときは、何を捨てたかを凡例に書く。ピクトグラムの規則とグリッドは、アイコンの線幅や格子をそろえる判断の先例である。ただしアイコンだけに頼る判断は、discoverability の議論（S12・S13・S14・S35）と合わせて扱う。

### 工業デザイン: Ulm 造形大学と Braun・Rams（1950〜60 年代）

- 当時の制約: 家電は家具に似せた木箱に収められていたが、戦後の消費者は技術を進歩の象徴と見るようになった（Design Museum の記述。R。S102）。戦後西ドイツの再建期で、HfG-Archiv は、Inge Scholl と Aicher が環境のデザインを民主主義の強化と見ていたと書く（R。S101）。
- 応答: HfG Ulm は 1953 年に最初の授業、1955 年に正式開校し、初代学長 Max Bill は 1957 年に去った（R。S101）。Bill の退任後、産業と結ぶ開発グループができ、Braun の音響機器や Lufthansa の企業アイデンティティを手がけた（R。S101）。Rams は 1955 年に Braun に入社し、1962 年にデザイン部門の長になった（R。S102）。Braun の音響機器は、白か濃灰の筐体、灰色の操作部、電源だけ緑という寸法・色の規則を守り、Design Museum はそれが新製品の使い方を素早く覚えられることにつながったと書く（因果は同館の地の文。R。S102）。
- 副作用と反動: Ulm 内部では 1956 年から教育方法の論争があり、1960 年代には数学的・分析的な方法論を推す教員と、デザインは分析的な方法以上のものでなければならないとする Aicher らが衝突した（R。S101）。州議会が 1968 年 11 月に資金の打ち切りを決め、同年末に閉校した（R。S101）。Rams の様式も技術に従って変わり、1965 年に白い様式をやめて Hi-Fi 機器を黒くした（R。S102）。Aicher の 1975 年の言葉として、デザインは必然ではなく作られるものだという趣旨が同館のページに引かれる（B。S101）。Ive が Rams の製品を inevitable と評した（S42）のとは対照的な語法である（本 skill の整理）。
- 示唆（本 skill の整理）: 同じ寸法・色の規則で製品群を作る Braun の方法は、画面群でコンポーネントと色の意味を固定する判断の先例で、HIG の、同じ色に別の意味を持たせないという記述（S53）と方向が合う。電源だけ緑のように色を一点に使うと意味が立つ。Ulm 内の、分析だけではデザインにならないという対立は、データや A/B テストだけで画面を決めることへの注意として読み替えられる。Apple が Rams の原則を採用基準としたと述べた資料は確認できていない。

### 紙の文法がデジタルへ移ったもの

- 当時の制約: Tufte は、ビジネスの PowerPoint のスライドは典型的に 40 語で、黙読で約 8 秒分しかないと書く（2003 年の寄稿。S104）。
- 応答: 印刷の文法（書体の種類を絞る、行間、見出しの階層、グリッド、余白）に対応する記述が、OS のガイドラインにある（S51、S52、S66）。印刷の系譜から来たと Apple が述べた資料は取得しておらず、対応づけは本 skill の整理である。情報デザインでは、Tufte『The Visual Display of Quantitative Information』が 1983 年刊、第 2 版が 2001 年で、内容に data-ink ratio を挙げる（出版社の紹介文。R。S103）。
  - 引用（原文、S104）: "Visual reasoning usually works more effectively when relevant information is shown side by side."
- 副作用と反動: Tufte は、標準的な PowerPoint の発表が内容より書式を優先させると批判し、聴衆の退屈は内容の失敗であって装飾の失敗ではないと書いた（論評。S104）。Vignelli は、誰でも書体を選べる状態を災いと呼んだ（S99）。紙の目安は固定された版面を前提にし、画面は幅・文字サイズが利用者の環境で変わる（本 skill の整理）。WCAG は 320 CSS px 相当の幅や 200 パーセントの拡大でも内容が失われないことを求める（S72）。
  - 引用（原文、S104）: "Audience boredom is usually a content failure, not a decoration failure."
- 示唆（本 skill の整理）: スライドでは、Tufte の批判を、1 枚 1 メッセージに分けすぎると比較が見えなくなる警告として使える。比較が要る内容は表や並べた図にする（`../examples/slides-presentation.md` の方針と矛盾しないかを確かめる）。ダッシュボードでは、データそのものを最も目立たせるという HIG の記述（S59）が data-ink の考えと方向が合う。ただし Tufte の格言とされる一節は一次で確認できていないので、引用せずに考え方だけ使う（`design-history.md` の末尾の一覧）。LP では、見出し・小見出し・本文・図・キャプションの論理的な配置と、余白による階層を印刷から引き継げる。紙の見開きに相当するのはスクロールの流れで、固定の版面比は引き継げない。

## GUI・デジタル

### 前史: Sketchpad から Star まで（1963〜1981 年）

- 当時の制約: 人と計算機のやりとりは文字の命令にほぼ限られ、Sutherland は 1963 年 1 月に MIT へ提出した博士論文で、それが対話を遅くしていると書いた（S105）。CHM は、画像は計算機に重すぎ、計算機の時間は人の時間を節約するには高価すぎて、人が機械に合わせるものとされたと書く（S108）。Alto の画面は 600×800 ピクセルのモノクロで、最初の 1 台に Xerox が 12,000 ドルをかけた（S108）。Star の画面は Alto と同じ 72 ピクセル/インチで（B。S107）、価格は 16,595 ドルだった（S109）。
  - 引用（原文、S108）: "Humans were expected to adapt to their machines."
- 応答: Sketchpad は、ライトペンで画面に直接描く仕組みだった（S105）。Star の設計者らの回顧論文は、Sketchpad が Star の UI 全体に影響したと書く（B。S107）。Engelbart は 1968-12-09 に Fall Joint Computer Conference で、90 分の実演をした（S106）。Alto はビットマップ画面・マウス・ウィンドウ・アイコン・WYSIWYG（Bravo）・カット・アンド・ペースト（Gypsy）を 1 台にまとめた（S108）。Star は 1981 年 4 月に発売され、事務所との類推（デスクトップ・メタファー）で覚えやすくした（B。S107）。マウスのボタン数は利用者調査で決め、1 個にすると取り違えは消えるが選択の誤りが許容できないほど増えたため、2 個にした（B。S107）。年の食い違い: Alto の稼働開始を、Star の回顧論文は 1972 年とし（B。S107）、Microsoft の 2011 年の記事は最初の GUI を 1973 年とする（S115）。本書は 1972〜73 年と幅で書く（S107・S115）。
- 副作用と反動: CHM は、価格が普及を妨げたとして、Star と Lisa は IBM PC（1,565 ドル）と比べて高く、それが両者の失敗を決めたと書く（Lisa は 9,995 ドルで 1983-01-19 に発売。S109）。Star の回顧論文は、この製品が非常に見慣れないものになったと振り返る（B。S107）。WYSIWYG の見た目だけでは、位置を余白・字下げ・タブのどれで決めたかが分からないため、Star は構造を見せる別の表示を用意した（B。S107）。
- 示唆（本 skill の整理）: 見たまま操作できることと、構造が分かることは別の問題である。LP やスライドでも、見た目を整えただけでは情報の階層は伝わらない。初心者向けのメタファーは、題材が利用者の知っているもの（Star なら事務机）のときに効くので、利用者を決めてから比喩を選ぶ。数で決める習慣（72 ppi、マウスのボタン 2 個）は様式より先に来る。

### 個人向け GUI の普及（1983〜1984 年）

- 当時の制約: Lisa は 9,995 ドル（1983-01-19 発売）、Macintosh は 1984 年 1 月出荷で 2,495 ドルだった（S109）。CHM は、Macintosh がハードディスクとマルチタスクを省き、メモリーを大きく減らして価格を下げたと書く（S109）。Kare は、Apple での仕事を 16×16 の白黒の点で概念をどう表すかという問題として語る（ビットマップの仕事全般の発言で、Macintosh のアイコンの寸法を述べた文ではない。S110）。
  - 引用（原文、S110）: "How do you make a concept in 16-by-16 black and white dots?"
- 応答: ウィンドウ・アイコン・メニュー・ポインター（WIMP）の GUI は 1970 年代の Xerox PARC で生まれ、Lisa が版を重ねてアイコン型のデスクトップ・メタファーにたどり着き、のちに Macintosh で広まった（CHM。S109）。Kare のアイコンの考えは、見たことがない人でも意味が分かることだった（S11）。
- 副作用と反動: Star の回顧論文は、Macintosh にも一貫性の問題があり、ファイルの複製に Duplicate・ドラッグ・Copy-Paste の 3 通りの操作があると指摘する（1989 年の論文。B。S107）。
- 示唆（本 skill の整理）: 標準の語彙（ウィンドウ・メニュー・アイコン・ポインター）が長く続くのは、学習の費用を利用者が一度払えば、どの製品でも使い回せるからだと考えられる。Nielsen の 4 番目の原則 Consistency and Standards も、プラットフォームと業界の慣習に従えと言う（S124）。解像度が低いほど図像には一目で分かることが求められ、今の小さな表示（ファビコン・通知）にも同じ制約がかかる。

### メタファーと質感表現（〜2010 年代初め）

- 当時の制約: 利用者はデジタルの操作に慣れていなかった、と読める（本 skill の整理）。NN/g は、スキューモーフィズムを、見慣れない操作への学習曲線を下げるものと定義し、ゴミ箱・フォルダーなどのアイコンが初期の利用者に意図を分からせたと書く（S127）。Microsoft の Windows Phone チームも、最初の UI は新しかったから物をそのまま描く方法が適切だったと書く（2011 年の記事。S115）。
  - 引用（原文、S115）: "They were completely new, so an approach of direct representation was appropriate. Today it’s not necessary"
- 応答: NN/g は、実物の要素をまねる UI が 2010 年代初めに頂点に達したと書く（S127）。擬似 3D は GUI の初期から、押せることを示す手がかりとして使われてきた（NN/g の 2015 年の記事。C。S125）。
- 副作用と反動: NN/g は、細かい質感と影がより多くの描画処理を必要としたと書く（S127）。NN/g は Kindle Fire の木の本棚を例に、利用者が電子書籍リーダーに慣れた後で、Amazon がスキューモーフィズムの要素を外したと紹介する（事例の紹介で調査の結果ではない。S127）。
- 「低解像度だから質感表現になった」という説: この因果を述べた出典は取得できなかった。NN/g は頂点を 2010 年代初めとし、質感表現は描画処理を多く要したと書く（S127）。頂点の時期の質感表現は、低解像度を補うためではなく、描画能力が上がったから可能になった、と読むほうが出典に合う（本 skill の整理）。ただし Federighi は 2013 年に、以前の影の表現は画面の限界から目をそらす手段だったと述べた（S175）。Apple 側が因果の一部を認めた発言として読めるが、質感表現を始めた時点の理由ではなく、2013 年の振り返りである（S175）。
- 示唆（本 skill の整理）: 比喩は、利用者が慣れるまでの補助輪として使う。慣れた利用者には、比喩はただの装飾になる。対象の利用者がどれだけ慣れているかで、比喩の濃さを決める。実物をまねること自体が目的になったら、減らす合図と考える。

### モバイルとタッチ、直接操作（1983〜2007 年）

- 当時の制約: CHM は、Graffiti は手書き文字の認識の精度を上げるために、利用者が新しい書き方を覚えるほうに賭けたものだと書く（S112）。先行するペン型携帯機は市場で失敗し、投資家は約 10 億ドルを失った（S112）。
- 応答: Shneiderman は 1983 年 8 月の論文で、利用者を喜ばせるシステムの中心的な考えとして、対象が見えていること、迅速で取り消せる少しずつの操作、複雑なコマンド文法を対象の直接操作で置き換えることを挙げた（要約。原文の逐語を照合できたのは冒頭の断片だけ。S111）。Palm は携帯機を PC の代わりではなく付属品として再定義し、成功した（S112）。iPhone は 2007-01-09 に、大きなマルチタッチ画面と新しいソフトウェアで指だけで操作する UI として発表された（S113）。
- 副作用と反動: タッチの画面にはマウスのホバーのような触る前の手がかりが無く、押せるものは見た目だけで伝えることになる、と考えられる（本 skill の整理）。この点を直接述べた出典は取得していない。関連して、Jobs は Flash を許さない理由に、マウスオーバー前提のロールオーバーがタッチには無いことを挙げた（2010 年 4 月の書簡。S139）。
- 示唆（本 skill の整理）: Shneiderman の 3 条件（対象が見えている、すばやく取り消せる、コマンドを覚えなくてよい）は、LP やアプリの画面のチェックリストとしてそのまま使える。Palm の再定義のように、製品の役割を狭く決めると、画面に置く要素も絞れる。

### フラット化: Metro、iOS 7、Material（2010〜2014 年）

- 当時の制約: Microsoft のチームは、利用者がデジタルの慣習に慣れ、最初の UI は新しかったから物の描写が必要だったが、今は必要ないと書く（S115）。画面の大きさと端末の種類が増え、Google は時計からテレビまですべての画面になじむものが必要だったと書く（2014-06-25。S117）。
- 応答: Metro は、空港や地下鉄の案内表示の書体の言語に倣う見た目と説明された（2010-03-18 の UI ガイドの紹介。S114）。Microsoft のチームは、UI はピクセルでできているので、実物をまねた光沢や陰影を避けると書き、不要な要素を削る Fierce Reduction を原則に挙げた（2011 年の記事。S115）。iOS 7 は 2013-06-10 に、控えめな動き・色・機能ごとの層で再設計されたと発表された（S116）。Material は面と影で、触れるものと動くものの物理的な構造を示すとし（2014-06-25。S117）、紙とインクの研究に着想した、実在感のある面と縁を手がかりにすると仕様に書いた（S118）。
  - 引用（原文、S117）: "In material design, surface and shadow establish a physical structure to explain what can be touched and what can move."
- 副作用と反動: NN/g（2015 年）は、フラットデザインが持ち込んだ最大のユーザビリティ問題は、クリックできる要素に signifier が無いことだと書く（C。S125）。NN/g の 2017 年の視線計測実験（一般の Web 利用者 71 人。S126）では、signifier が弱い版のほうがページを見ている時間が平均 22% 長く、注視の回数が平均 25% 多かった。ただし 9 サイトのうち 3 サイトでは差が出なかった（S126）。対象はデスクトップの Web で、モバイルのタッチ画面の結果ではない（S126）。NN/g は、Material を、面と影で階層を伝える優先順位の正しい flat 2.0 の例と評価した（C。S125）。Apple のソフトウェアへの批判（批評家の主張）は、Norman の批判（discoverability が失われたとする。S12）と、Tognazzini の批判（Microsoft をまねて見えないコントロールを加えたとする。S35）にある。
  - 引用（原文、S126）: "On average participants spent 22% more time (i.e., slower task performance) looking at the pages with weak signifiers."
- 食い違い（フラット化の起点）: NN/g は、Metro と Windows 8 が 2011 年にフラットデザインを広めたと書く（C。S125）。Microsoft 自身の出典では、UI ガイドの紹介が 2010-03-18（S114）で、着想は Windows Media Center・Zune・Xbox にさかのぼる（S115）。2010 年と 2011 年のどちらを使うかは、Metro の始まりを言うのか、フラット化が広まった時期を言うのかで決める（S114、S125）。
- 示唆（本 skill の整理）: 装飾を消すときは、押せる手がかり（色・形・下線・枠）を残す。NN/g の実験が示したのは、平らであることではなく、signifier が弱いことの費用である。Material は、装飾を全部消すのではなく、面と影の規則で階層を伝える方向へ進んだ。影は飾りではなく、重なりや押せることを伝える情報として使う。Metro の動機として Microsoft の出典が挙げるのは、利用者が慣れたことと、画面はピクセルでできているという正直さの 2 つである。LP やスライドで装飾を減らすときも、対象の利用者が本当に慣れているかを先に確かめる。

### デザインシステムとデザイントークン（2013〜2025 年）

- 当時の制約: 製品・プラットフォーム・チームが増え、見た目と挙動の一貫性を人手で保てなくなった（本 skill の整理）。Salesforce は、2013 年にすべてのアプリで一貫した体験が要ることをデザインシステムの出発点として書く（S119）。Brad Frost は 2013-06-10 の記事で、Atomic design をデザインシステムを作る方法論と書き、冒頭に、ページではなくコンポーネントの体系を設計しているのだという趣旨の Stephen Hay の言葉を掲げた（Hay の言葉は B。S152）。
- 応答: Material は、1 つの土台のシステムで、プラットフォームと画面の大きさをまたいだ統一された体験を目指した（2014 年。S118）。Salesforce の公式教材は、Salesforce1 のエンジニアリングチームが、ネイティブ OS と Web の両方で使える値を design tokens と名付けたと書く（S119）。Design Tokens Community Group は 2025-10-28 に、仕様の最初の安定版 2025.10 を発表した（S120）。
  - 引用（原文、S121）: "It is not a W3C Standard nor is it on the W3C Standards Track."
- 副作用と反動: 仕様の位置づけを誤解しやすい（本 skill の整理）。DTCG の仕様は W3C の Community Group の最終報告で、W3C 勧告（W3C Standard）ではない（S121）。デザイントークンの名付けの年は、出典によって 2013 年と 2014 年に揺れる（Salesforce の記述は 2013 年。S119）。デザインシステムが製品の個性を薄めたという批判は、一次の出典を取得していない。
- 示唆（本 skill の整理）: 1 枚の LP や 1 本のスライドでも、色・文字サイズ・余白を名前の付いた値として先に決めると、ページ間のずれが減る。外部向けの資料で DTCG に触れるときは「W3C 標準」と書かない。

### 空間コンピューティング（2023 年〜）

- 当時の制約: 画面の枠が無い（本 skill の整理）。Apple は Vision Pro を、目・手・声で操作する 3 次元の UI と発表した（2023-06-05。S122）。背景は現実の部屋や任意の内容になりうるので、どんな背景の上でも読めることが要る（本 skill の整理）。Apple の説明は「Apple の転換点」の visionOS の節を参照する。
- 応答と副作用: Apple の応答（ガラスの素材、層の規則）は後述する。重ねたものは見えにくくなる、という指摘は NN/g にある（S15）。
- 示唆（本 skill の整理）: Material が紙とインクの比喩で面と影の規則を作り直したように（S118）、visionOS と Liquid Glass はガラスの比喩で層の規則を作り直したものと読める。Apple や Google がこの対比を述べた出典は取得していない。模倣の対象が特定の物（革・木の本棚）から素材の性質（重なり・透け・光）に変わった点が、質感表現の時代との違いである。

### ユーザビリティ研究の語彙（1988〜2008 年）

- 当時の制約: 製品が増え、試作品を 1 つずつ利用者で試す費用が大きくなった（本 skill の整理）。Nielsen は、少数の評価者が原則に照らして画面を点検する heuristic evaluation の道具として、1990 年に Molich と最初の原則を作り、1994 年に改訂した（S124）。よく言われる 1994 年は、最初の版ではなく改訂版の年である（S124）。
- 応答: 経験則を名前の付いた原則にして、点検の語彙にした、と読める（Shneiderman の 3 条件、Nielsen の 10 項目、Norman の affordance と signifier。本 skill の整理）。Norman は 2008 年に、1988 年に affordance を持ち込んだとき指したのは知覚できる affordance だったと書き、偶然か意図的かを問わず知覚できる手がかりを signifier と呼んだ（S123）。
  - 引用（原文、S123）: "Forget affordances: what people need, and what design must provide, are signifiers."
- 副作用と反動: Norman 自身が、affordance という語は広く使われ、誤用され、混乱を生んだと書いた（S123）。原則が様式の流行に負けた、という見方は、NN/g と Norman らの立場からの論評で、業界全体の合意ではない（S125、S12）。
- 示唆（本 skill の整理）: レビューの語彙をそろえる。押せると分かるかは signifier、同じ操作が同じ意味かは Nielsen の 4 番（Consistency and Standards）、覚えさせていないかは 6 番（Recognition rather than Recall）、何が起きているか分かるかは 1 番（Visibility of System Status）、というように、指摘を既存の原則に結びつける。Norman の定義では signifier は意図的なものに限らないので、混み具合や使われた跡のような画面の外の手がかりも設計に使える。

## Web

### 文書としての HTML と表組みレイアウト（1990〜1999 年）

- 当時の制約: 最初の Web サーバーは nxoc01.cern.ch（後の info.cern.ch）で、1991-05-17 に CERN の中央マシンで一般公開された（S128）。NCSA の Mosaic は 1993 年に最初のアルファ版が出た（W3C の年表。S128）。Lie と Bos は、文書構造とレイアウトの分離が 1990 年の HTML の当初からの目標で、Mosaic は利用者が変えられるのが一部の色とフォントだけだったと書く（S129）。HTML 3.2（1997-01-14）は、既に広く使われていた表・アプレット・画像の回り込みを加えた（S131）。WaSP は、Netscape と Microsoft の 4.0 ブラウザーがほとんど互換性を持たなかったと回想する（S135）。
- 応答: Siegel は、自分の最大の回避策が透明な 1 ピクセルの GIF で、ページの余白の調整に使うと書いた（1997-02-13 の保存コピー。S132）。表をレイアウトの格子として使うことは、HTML 4.01 が戒める形で行われていた（S133）。
  - 引用（原文、S132）: "HTML is a markup language, not a layout language."
- 副作用と反動: Siegel 自身が、透明な画素が白く出る Netscape の不具合を認めた（S132）。HTML 4.01（1999-12-24）は、表をレイアウトだけのために使うと非視覚メディアの表示で問題が起きうるとして、スタイルシートの使用を求めた（S133）。WCAG 1.0（1999-05-05）は、線形化して意味が通らない表をレイアウトに使わないことと、レイアウトと表現にスタイルシートを使うことを求めた（S136）。
  - 引用（原文、S133）: "Tables should not be used purely as a means to layout document content as this may present problems when rendering to non-visual media."
- 示唆（本 skill の整理）: 見た目を固定したい要求に構造の外側の仕掛けで応えると、読み上げ・小さい画面・別のブラウザーで壊れる。この構図は、画像化した見出し、固定幅のヒーロー、`div` を積んだ偽のボタンなど、今の LP でも形を変えて繰り返される。デザインレビューでは、この見た目は意味のある要素で実現されているかを確かめる。まず見出し・段落・リンクだけで意味が通る文書を書き、見た目はその上に重ねる。

### CSS と Web 標準（1994〜2003 年）

- 当時の制約: 文書にスタイルを付ける手段が無く、ブラウザー間の非互換は大きかった（S129、S135）。
- 応答: Lie は 1994-10-10 に、ページ記述言語に頼らず発行者に見た目の影響力を与えるカスケードするスタイルシートを提案した（S130）。CSS1（1996-12-17）は、作者と読者が HTML 文書に文字・色・余白などの見た目を付ける仕組みで、読者が自分のスタイルシートで利用者側の事情に合わせて調整できることも特徴だった（S134）。CSS に対応した最初の商用ブラウザーは 1996 年 8 月の Internet Explorer 3 で、ボックスモデルの多くは未実装だった（S129）。CSS Zen Garden は、HTML を変えずに外部の CSS だけを差し替えて全く異なるデザインを見せた（確認できた最古の保存コピーは 2003-10-01。S137）。
  - 引用（原文、S137）: "The code remains the same, the only thing that has changed is the external .css file."
- 副作用と反動: WaSP の回想（日付なし）は、ブラウザーの対応が進んだ後も、Web の大半が旧来の表現用のハックに縛られたままで、ブラウザーメーカーはもう問題ではないと書き、問題の所在を作り手側に移した（S135）。
- 示唆（本 skill の整理）: Zen Garden が示したのは、同じ構造に複数の見た目を載せられることで、これは後のダークモード・ユーザー設定メディアクエリ、デザイントークンと同じ発想である。CSS1 が当初から読者のスタイルシートを前提にしていた点は、作り手の見た目が最終形ではないことを示す。ユーザーの文字サイズ・配色の設定で崩れない設計は、標準の出発点からの要請と読める。

### Flash の時代と、その終わり（2000〜2020 年）

- 当時の制約: Web フォントの普及前は、見た目の表現のために文字を画像や Flash に閉じ込める必要があった（Typekit の告知。S141）。Flash の登場年と普及の時期は、一次資料で確認していない。
- 応答と副作用: Nielsen は 2000-10-29 に、Flash は悪いデザインを招きやすく、Web の基本的な操作様式を壊し、サイトの核心の価値に使うべき資源を食うと批判した（C。S138）。Jobs の書簡は、iPhone・iPod・iPad で Flash を許さない理由として、独占的であること、映像、信頼性・セキュリティ・性能、電池、タッチ、サードパーティの開発層を挙げた（Apple の立場の表明。2010 年 4 月。S139）。Adobe は 2017-07-25 に、HTML5・WebGL・WebAssembly などの標準が成熟したとして、2020 年末に Flash Player の更新と配布をやめると発表した（S140）。
  - 引用（原文、S139）: "Flash was designed for PCs using mice, not for touch screens using fingers."
- 因果の注意: Adobe の発表が終了の理由に挙げたのは標準の成熟で、Jobs の書簡との因果は Adobe の文書に書かれていない（S140）。書簡が終わりを早めたかどうかは、確認していない（`design-history.md` の末尾の一覧）。
- 示唆（本 skill の整理）: Jobs の挙げた理由のうち、タッチにはホバーが無いことと電池は、今の LP でもそのまま効く。ホバーでしか出ない情報、重い動画の自動再生、スクロールを奪う演出は、Flash のイントロと同じ失敗を、プラットフォームを替えて繰り返すことになる。動きと表現は、標準の CSS・HTML の中で、止められる形（WCAG の 2.2.2 と 2.3.3。S72）で実装する。

### Web 2.0 の見た目からフラットへ

- 当時の制約と応答: NN/g は、GUI の初期から擬似 3D が操作の手がかりに使われてきたこと、2007 年の Apple のホームページのナビゲーションが光沢のある立体的なタブだったことを挙げる（C。S125）。同じ記事は、フラットデザインが 2012 年頃に広まり、Apple のホームページは 2013 年頃までその流れに抵抗したと書く（C。S125）。
  - 引用（原文、S116）: "iOS 7 is completely redesigned with subtle motion, an elegant color palette and distinct, functional layers that make it feel more alive."
- 副作用と反動: 手がかりの弱い UI は強い UI より利用者の手間が増えた（NN/g の 2017 年の実験。S126）。詳細は GUI・デジタルの「フラット化」の節にある（S126）。
- 因果の注意: iOS 7 の発表文に flat という語は無い（本文照合。S116）。iOS 7 が Web のフラット化を引き起こしたとする出典は確認していない。NN/g が普及に影響したと挙げるのは Metro と Windows 8 である（C。S125）。
- 示唆（本 skill の整理）: Apple っぽい、を平坦・余白・薄い文字と理解する見方は、この節の出典からは支持されない。iOS 7 の発表文が強調したのは、動き・配色・機能的なレイヤーである。装飾を減らすことと、押せるものが押せると分かることは別の問題で、LP ではボタン・リンクの手がかり（形・色・下線・状態変化）を残したまま装飾だけを減らす。

### モバイル化（2009〜2018 年）

- 当時の制約: Luke Wroblewski は 2009-11-03 に、320×480 ピクセルの画面には不要な要素を置く余地が無いと書いた（S142）。Marcotte（2010-05-25）は、ウィンドウ幅・解像度・ユーザー設定・インストール済みフォントなど、作り手が制御できない要素の多さを挙げた（S143）。
  - 引用（原文、S142）: "There simply isn't room in a 320 by 480 pixel screen for extraneous, unnecessary elements."
- 応答: Wroblewski の Mobile First は、モバイルから先に設計することを勧め、理由にモバイルが優先順位付けを強いることを挙げた（S142）。Marcotte の Responsive Web Design は、機器ごとに別のデザインを作るのではなく、同じ体験の側面として扱うことを提案し、技術的な要素を fluid grids・flexible images・media queries とした（S143）。
  - 引用（原文、S143）: "Rather than tailoring disconnected designs to each of an ever-increasing number of web devices, we can treat them as facets of the same experience."
- 副作用と反動: Marcotte 自身が、特定の機器向けの別サイトに事業上の理由がありうると留保した（S143）。NN/g（2018-04-15）は、2010 年以降に余白の多い長いページが増えたと書き、それでも閲覧時間の約 57% はファーストビューに費やされたと報告した（C。S144）。
- 示唆（本 skill の整理）: 狭い画面は優先順位を強いる。LP の構成は、320 px 幅の 1 画面目に残すもの（何の製品か・誰のためか・次の行動）を先に決め、広い画面ではそれを広げる順で考える。WCAG 2.2 の 1.4.10 Reflow（横幅 320 CSS px。S72）とも一致する。長いスクロールの LP でも注意は上部に偏るので、1 画面目だけで要点が伝わるようにする。

### Web フォントとレイアウトの道具（1998〜2023 年）

- 当時の制約: Google は 2010-05-19 に、Web は文字表現で印刷や他の電子媒体より遅れ、文字を画像に焼き込む回避策に頼ってきたと書いた（S146）。Typekit は 2009-05-27 に、ほとんどのフォントは著作権で保護され、CSS でのリンクや Web での再配布を許すものはごく少ないと指摘した（S141）。グリッドレイアウトは、表・float・inline-block・flexbox などで作られてきたが、どれも複雑なグリッドの定義では問題があった（WebKit、2017-03-09。S148）。
  - 引用（原文、S141）: "No longer will you need to trap your content in images or Flash just to express yourself visually."
- 応答: `@font-face` は CSS2（1998-05-12）に含まれ、CSS 2.1（2011-06-07）で削除された（S145）。WOFF 1.0 は 2012-12-13 に W3C Recommendation になり、MDN は `@font-face` を 2015 年 7 月以降、主要ブラウザーで利用可能と表示する（S147）。CSS Grid は Firefox 52（2017-03-07）が対応し、2 次元のレイアウト方式と説明された（S148）。container queries は 2023-02-14 に、すべてのモダンブラウザーの安定版に入った（S149）。
  - 引用（原文、S149）: "Container queries are an alternative to media queries, which apply styles to elements based on viewport size or other device characteristics."
- 副作用と反動: 出典が述べている副作用は、Web フォントの著作権・再配布の問題（Typekit）だけである（S141）。読み込みの遅れや表示のちらつきは、一次資料を取得していない。SF のフォントファイルを Web に配信することは、ライセンス文面からは許諾されていると読めない（S76）。
- 示唆（本 skill の整理）: 文字を画像にする理由は、Web フォントでほぼ無くなった。見出しを画像にせず実テキストで組む（Typekit も、ページはより使いやすく、アクセシブルで、検索可能になると書いた。S141）。表と spacer GIF で作っていた格子は、今は Grid で直接書ける。部品はページの幅ではなく、置かれた場所の幅で振る舞いを変えられる。

### アクセシビリティ・性能・LP の文法（2008〜2026 年）

- 当時の制約: 表レイアウト・spacer・画像化した文字は、非視覚メディアや支援技術で問題を起こした（S133、S136）。体験の質を測る共通の指標が当時どう欠けていたかは、一次資料で確認していない。
- 応答: WCAG 2.0 は 2008-12-11 に、達成基準を特定の技術に依存しない検証可能な文として書いた（S150）。WCAG 2.2 は 2023-10-05 に公開され、2024-12-12 に更新された（S150）。`prefers-reduced-motion` と `prefers-color-scheme` は 2020 年 1 月以降、`prefers-contrast` は 2022 年 5 月以降、主要ブラウザーで使える（S73）。Google は 2020-05-04 に Web Vitals を始め、良い体験の目安は LCP 2.5 秒以内・INP 200 ミリ秒以下・CLS 0.1 以下とされる（S151）。
  - 引用（原文、S151）: "Web Vitals is an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web."
- LP の文法: CSS-Tricks（2020-05-22）は、Apple は製品ページの洗練された動きで知られ、多くは HTML と CSS だけでなく canvas で作られていると書く（第三者の解説。C。S153）。MDN は `animation-timeline` を、スクロールや要素の表示の進行に連動させるプロパティと説明し、2026 年 10 月以降に最新のブラウザーで動作する Baseline の Newly available と表示する（S154）。
  - 引用（原文、S154）: "Since October 2026, this feature works across the latest devices and browser versions."
- 副作用と反動: 出典が述べている副作用は、NN/g の、長いページでも注意は上部に偏るという報告だけである（C。S144）。Apple の製品ページの手法が業界の LP に広まったことと、その副作用（重さ・酔い・操作の奪取）を述べた調査は確認できなかった。
- 示唆（本 skill の整理）: スクロールで語る構成を真似るときは、次の 3 点を条件にする。(1) 1 画面目だけで要点が伝わる。(2) 動きを減らす設定で静止画の構成に置き換わる（S73、S72）。(3) 連番画像のような重い手法が LCP を悪化させない。`animation-timeline` は 2026 年 10 月以降に Newly available になったばかりなので（S154）、古いブラウザーでは動かない可能性がある。動きが無くても内容が伝わる構成を基本にし、動きは上乗せにする。1 画面目に置く大きな画像・動画は LCP の対象になりやすく、サイズ未指定の画像や後から差し込むバナーは CLS を悪化させうる。

## Apple の転換点

各転換点を (a) Apple 自身が述べた理由、(b) 記者・批評家の説明、(c) 本 skill の整理に分ける。(a) の「Apple 自身」は、当時の Apple の文書・発表、または在籍中の役員が公の場で述べたものに限る。当事者の回想（Kare・Esslinger など）は Apple の理由ではないので (b) に置く。Apple が公に述べた理由は、社内の実際の意思決定の理由と同じとは限らない。

### Macintosh と初代 HIG（1984〜1992 年）

- 事実: 初代 Macintosh は 1984-01-24 に登場し、画面は 512×342、RAM は 0.125 MB（Apple サポートの仕様表。後年の文書。S155）。1987 年の HIG は、Apple Desktop Interface の基本原則を 10 項目にまとめた（S156）。目次は Metaphors from the real world、Direct manipulation、See-and-point、Consistency、WYSIWYG、User control、Feedback and dialog、Forgiveness、Perceived stability、Aesthetic integrity（OCR。S156）。1992 年版は Modelessness を原則に加え、原則どうしが衝突する場面を認め、カラー化では色は意味を足すために使うと書いた（OCR。S157）。
- (a) Apple 自身が述べた理由:
  - 引用（原文、S156。1987 年版）: "Most people now using computers don’t have years of experience with several different computer systems. What they do have is years of direct experience with their immediate world."
  - 引用（原文、S157。1992 年版）: "Metaphors in the computer interface suggest a use for something, but that use doesn’t define or limit the implementation of the metaphor."
  - 引用（原文、S157。1992 年版）: "you can’t design in accordance with all of the principles all of the time."
  - 引用（原文、S157。1992 年版の色の章）: "Apple’s goal in adding color to the interface is to enhance meaning, not just to color things to improve aesthetics."
- (b) 記者・批評家の説明: 当時の記者・批評家の記事は取得していない。当事者の回想として、Kare は 16×16 の白黒の点で概念をどう表すかを問題として語った（回想で、Apple の公式見解ではない。S110）。
- (c) 本 skill の整理（推測）: 512×342・白黒・小さなメモリーという制約が、少ない点で一目で読ませる記号の設計を促したと読める。1992 年版の HIG（S157）は、メタファーを実物の再現ではなく期待の手がかりと位置づけ、原則を規則ではなく判断の道具として扱う。

### Snow White（frog design）

- 事実: German Design Council の記事は、Snow White の外観を、白い筐体・細く丸めた縁・等間隔の細い通気孔と書き、Apple IIc に最初に採用されたとする（記者の地の文。R。S159）。採用の年は取得していない。
- (a) Apple 自身が述べた理由: 取得していない。当時の Apple の文書も、Jobs の一次発言も確認できていない。
- (b) 記者・批評家の説明: German Design Council の記事（2024-06-05）は、Jobs は Macintosh に集中しつつ、今後のすべての Apple 製品に統一したデザイン言語を求めたと書く（R。Isaacson の伝記に拠る。記事中の Jobs の台詞は記者の再話で、引用しない。S159）。外部の当事者の回想として、frog design の Esslinger は 2013-10-07 に、デザイン言語は普遍ではなく会社の精神に合うべきだという考えに Jobs が少し居心地悪そうだったと書き、自分は製品群を生む包括的な戦略が要ると主張したと書く（回想で、本人の主張。相手方の確認は無い。Apple の見解ではない。S158）。
- (c) 本 skill の整理（推測）: Snow White は、ソフトの HIG と同時期に、ハードでも製品群をまたいで同じ語彙で語ることを目指したものと読める。Liquid Glass の全プラットフォームへの統一と同じ問題を、ハード側で先に扱っていた。Apple 自身がそう述べた資料は取得していない。

### Mac OS 8 の Platinum と Appearance Manager（1997 年）

- 事実: Apple は 1997-07-22 に Mac OS 8 を発表し、新しい platinum appearance を持つ、1984 年以来最大の Mac OS の更新と呼んだ（S161）。同年の HIG は、Mac OS が複数の見た目を提供し、Toolbox が生成する部品はどの見た目でも一貫して振る舞うと書く（OCR。S160）。
- (a) Apple 自身が述べた理由: 新しい見た目を導入した理由を述べた文書は取得していない。取得できたのは、複数の見た目を許した結果についての HIG の説明である（S160）。
  - 引用（原文、S160。1997 年版 HIG。導入の理由ではなく、複数の見た目を許した結果の説明）: "since the Mac OS now provides for multiple appearances, there is no longer a direct correspondence between the appearance of Mac OS interface elements and their behavior."
- (b) 記者・批評家の説明: 取得していない。Mac OS 8 と Copland の関係も確認していない（`design-history.md` の末尾の一覧）。
- (c) 本 skill の整理（推測）: 見た目と振る舞いを切り離す決定は、以後の再デザイン（Aqua、iOS 7、Liquid Glass）で、標準部品を使うアプリが自動で新しい見た目になる土台になったと考えられる。Big Sur の開発者向けセッションも、多くの変更が自動で反映されると述べた（S182）。標準部品を使うことが、見た目の刷新に追従する条件である。

### Aqua と brushed metal（2000〜2008 年）

- 事実: Apple は 2000-01-05 に Mac OS X を発表し、Aqua は新しいグラフィックスシステムで可能になったと書く（S162）。brushed metal は、2004-05-27 版の HIG では条件付きで使ってよいとされ（OCR。S166）、2008 年版では、Mac OS X v10.5 以降に brushed metal のウィンドウは無いとされた（OCR。S167）。
- (a) Apple 自身が述べた理由: 親しみやすさについて Apple が述べたのは、アイコンが身近な物に見えること（familiarity）の効果に限る（S164）。光沢・半透明の部品が初心者に触ってよいと伝える、という意図を述べた Apple の文は取得していない。
  - 引用（原文、S162。2000-01-05 の発表。新しい見た目の説明）: "Aqua offers a stunning new visual appearance, with luminous and semi-transparent elements such as buttons, scroll bars and windows, and features fluid animation to enhance the user’s experience."
  - 引用（原文、S164。2000 年の開発者向け文書。アイコンが身近な物に見えることの効果）: "This familiarity helps the application become more approachable and non-threatening to novice users"
  - 引用（原文、S163。Jobs が記者に語った言葉。Fortune 2000-01-24 の Schlender の記事）: "We made the buttons on the screen look so good you'll want to lick them,"
  - 引用（原文、S166。2004 年版 HIG）: "Don’t use the brushed metal look indiscriminately."
  - 引用（原文、S167。2008 年版 HIG）: "Important: In Mac OS X v10.5 and later, there are no brushed metal windows."
  - 2008 年版は廃止の事実と移行の手順を述べるが、廃止の理由は取得した範囲に書かれていない（S167）。
- (b) 記者・批評家の説明: TidBITS（Jeff Carlson、2000-01-17）は、基調講演で Jobs が製品はなめたくなるほど良いと主張したと地の文で書き（R。逐語ではない）、新しい見た目は計算機を初めて使う人には清潔で誘うようだと評した（C。S165）。基調講演での逐語は未確認である。
- (c) 本 skill の整理（推測）: Aqua の光沢・半透明は、新しい合成エンジンの能力を見せる面と、初心者に触ってよいと伝える面の両方を持っていた、という読みは本 skill の推測である。Apple の文は、アイコンの familiarity の効果までしか述べない。Liquid Glass の WWDC25 セッションが Aqua を学びの出発点に挙げる（「Liquid Glass」の節）ことは、素材の質感で操作できる層を示す系譜が続いていることを、Apple 自身が認めたものと読める。brushed metal は、2004 年版は条件付きで許容し（S166）、2008 年版（v10.5 以降）には brushed metal のウィンドウの記述が無い（S167）。廃止の理由を Apple は述べていない。

### iPhone OS（2007 年）

- 事実: Apple は 2007-01-09 に iPhone を、大きなマルチタッチ画面と新しいソフトウェアで、指だけで操作する新しい UI として発表した（S113）。画面は 3.5 インチのワイドスクリーン（S113）。
- (a) Apple 自身が述べた理由: 発表文は新しい UI の内容を述べるもので、採用の理由は述べていない。理由に近い説明は、基調講演の Jobs の発言にある（B。S34）。
  - 引用（原文、S113。2007-01-09 の発表。理由ではなく、発表した内容）: "iPhone introduces an entirely new user interface based on a large multi-touch display and pioneering new software, letting users control iPhone with just their fingers."
  - 基調講演で Jobs は、物理ボタンをなくして大きな画面にすると述べ、スタイラスではなく指を使うと説明した（第三者の書き起こし。B。S34）。
- (b) 記者・批評家の説明: 取得していない。
- (c) 本 skill の整理（推測）: 入力が指に変わった時点で、押せる物・動かせる物を実物らしく描くことが、新しい入力方式の学習を助けると考えられた、と読める。ただし 2010 年版より前の iPhone 向け HIG は取得しておらず（手元で最古は 2010 年版。S168）、この読みを裏付ける Apple の文書は手元に無い。

### 質感表現の頂点（2010 年 HIG〜2012 年）

- 事実: 2010 年の iOS HIG（2010-12-09 の改訂履歴）は、実物らしさを勧め、Notes の革と縫い目を例に挙げた（OCR。S168）。Game Center・Find My Friends が登場した iOS の版は一次確認していない。
- (a) Apple 自身が述べた理由:
  - 引用（原文、S168。2010 年版 HIG）: "Often, the more true to life your application looks and behaves, the easier it is for people to understand how it works and the more they enjoy using it."
  - 引用（原文、S168。同じ文書のメタファーの節）: "The most appropriate metaphors suggest a usage or experience without enforcing the limitations of the real-world object or action on which they’re based."
- (b) 記者・批評家の説明: Fast Company（Austin Carr、2012-09-11）は、匿名の元 UI デザイナーの話として、iCal の革の縫い目は Jobs の専用機の内装の質感に基づくと伝えた（R。匿名の 1 人の証言で、1 本の記事だけの主張。S170）。David Pogue（Scientific American、2013-02-01）は、Find My Friends には物理世界の対応物が無く、革の見た目は奇妙だと評した（C。S172）。Farhad Manjoo（Slate、2012-11-01）は、Forstall の退任を質感表現の責任と結びつける見方を一面的な物語と呼び、退任は Maps の謝罪文への署名を拒んだことに関係すると報じられたと書く（C。S171）。Apple の 2012-10-29 の発表は、Ive が全社の Human Interface を率いること、Forstall が翌年に退社することを述べるだけで、退社の理由も、デザインの方針への言及も無い（A。S169）。報道ではこう語られるが、Apple は理由を述べていない。
- (c) 本 skill の整理（推測）: 2010 年の HIG の、本物らしいほど分かりやすく楽しいという記述（S168）は、比喩を期待の手がかりとした 1987・1992 年の線（S156、S157）から、本物の再現へ寄った記述である。手がかりを越えた再現（Find My Friends の革）は、対応する実物が無いと意味を持たない、というのが批判の要点である。比喩は、実物の操作を知っている人に向けて、操作の手がかりになる範囲で使う。人事と iOS 7 の方針転換の因果は、Apple が述べていないので、報道の範囲にとどめる。

### iOS 7（2013 年）

- 事実: Apple は 2013-06-10 に、iOS 7 を新しい UI で完全に再設計し、既存の利用者にはすぐ馴染むと発表した（S116）。HIG の「Designing for iOS 7」は、Deference・Clarity・Depth の 3 テーマを掲げ、物理性と写実の表現を見直すよう書き、枠なしのボタンを受け入れるよう勧めた（保存コピー。S174）。2013 年版の Deference の文面（S174）は、後年（2018 年）の旧 HIG（S44）の文面と違う。
- (a) Apple 自身が述べた理由:
  - 引用（原文、S116。Ive の発言としてリリースに載ったもの）: "True simplicity is derived from so much more than just the absence of clutter and ornamentation—it’s about bringing order to complexity,"
  - 引用（原文、S173。apple.com の iOS 7 Design ページ。無署名）: "Ultimately, redesigning the way it works led us to redesign the way it looks."
  - 引用（原文、S174。2013 年版 HIG）: "Reconsider visual indicators of physicality and realism. Bezels, gradients, and drop shadows sometimes lead to heavier UI elements that can overpower or compete with the content."
  - 引用（原文、S175。Ive、USA Today 2013-09-19）: "we understood that people had already become comfortable with touching glass, they didn't need physical buttons, they understood the benefits,"
  - 引用（原文、S175。Federighi、同じ記事。過去の影の表現への評価で、導入の理由そのものではない）: "Before, the shadowing effect we used was a great way to distract from the limitations of the display."
  - Apple 自身の説明の要約: 理由として挙げられた観点は、表示性能が上がったこと（Federighi は同じ記事で、iOS 7 を Retina 以後の最初の UI と呼び、GPU の伸びに言及した。括弧内は記者の補足。S175）、利用者がタッチに慣れたこと（Ive。S175）、内容を主役にすること（HIG の Deference。S174）の 3 つに整理できる。
- (b) 記者・批評家の説明: USA Today（Marco della Cava、2013-09-19）は、Jobs の時代に確立した質感表現の型が、Game Center のフェルトとともに退けられたと地の文で書く（R。S176）。批評家の主張として、Norman（2015 年。S12）と Norman・Tognazzini（2015 年。S13）は、Apple のソフトウェアは discoverability・feedback・recovery を失ったと批判し、Tognazzini（2014 年。S14、S35）は、複雑さを隠すことと、見えないコントロールの広がりを批判した。枠なしのボタンの推奨は、押せるものの手がかりを減らしたと読める箇所だが、批判が iOS 7 のどの変更を指すかは特定していない。Forstall の退任と方針転換の因果は、前節のとおり Apple が述べていない。
- (c) 本 skill の整理（推測）: Apple が挙げた 3 つの観点は、いずれも、比喩は学習の足場で、足場が要らなくなれば外す、という考え方で一貫すると読める。足場を外す判断は、利用者の習熟を前提にしている。新しい入力（空間、視線）では足場がまた要る。

### Yosemite と San Francisco（2014〜2015 年）

- 事実: Apple は 2014-06-02 に OS X Yosemite を、iOS と連携するよう設計したと発表した（S177）。2015 年の WWDC15 の Session 804 は、システムフォントの San Francisco と、Apple Watch 用の SF Compact を紹介した（S178）。
- (a) Apple 自身が述べた理由:
  - 引用（原文、S177。2014-06-02 の発表）: "With Yosemite, OS X has been redesigned and refined with a fresh modern look where controls are clearer, smarter and easier to understand, and streamlined toolbars put the focus on your content without compromising functionality."
  - 引用（原文、S178。WWDC15 Session 804）: "San Francisco unifies our platform with a consistent typographic voice and a reading experience."
- (b) 記者・批評家の説明: 取得していない。
- (c) 本 skill の整理（推測）: iOS 7 の方針（内容を主役にする、半透明で文脈を残す）を Mac に移したのが Yosemite で、書体でプラットフォームの声をそろえたのが San Francisco である。統一の手段として、まず書体と素材（半透明）を共有した順序は、Liquid Glass の統一にも通じる。

### SF Symbols（2019 年）

- 事実: 2019 年の WWDC19 の Session 206 で、Apple は iOS 13 でシステムの記号をすべて描き直したと述べた（S179）。記号は、文字と同じ typographic points で指定する（S179）。
- (a) Apple 自身が述べた理由:
  - 引用（原文、S179）: "Symbols are used in a variety of ways, and designing symbols comes with an inherent challenge, which is pairing them nicely with the other essential element of any UI, which is text."
- (b) 記者・批評家の説明: 取得していない。
- (c) 本 skill の整理（推測）: 記号を絵ではなく文字の一部として扱う決定である。Kare の 16×16 の点から、文字と同じ単位で拡大縮小する記号へ移った。アイコンを自作するときは、まず文字と並べて、大きさ・太さ・基準線が合うかを見る。

### Big Sur（2020 年）

- 事実: Apple は 2020-06-22 に macOS Big Sur を、新しいデザインで発表した（S180）。Dock のアイコンは、Apple の製品群のアイコンと一貫するよう設計し直された（S180）。
- (a) Apple 自身が述べた理由:
  - 引用（原文、S180。2020-06-22 の発表）: "The entire experience feels more focused, fresh, and familiar, reducing visual complexity and bringing users’ content front and center."
  - 引用（原文、S181。Federighi、The Independent 2020-11-13）: "They all just feel of a family – there's just less cognitive load to the switching process."
  - 引用（原文、S181。同じインタビュー。タッチ対応の準備とする見方への否定）: "We had designed and evolved the look for macOS in a way that felt most comfortable and natural to us, not remotely considering something about touch."
- (b) 記者・批評家の説明: The Independent の記者（Andrew Griffin）は、大きく間隔の広いボタンは指で触るのに向くと多くの論者が指摘したと書く（R。S181）。
- (c) 本 skill の整理（推測）: Apple が理由として述べたのは、視覚の複雑さを減らすこと、内容を前に出すこと、製品群の間の一貫性である。iOS 7 の Deference と同じ方向である。製品をまたいで見た目をそろえる目的は、切り替えの負荷を下げることで、見た目をそろえること自体ではない。

### visionOS（2023 年）

- 事実: Apple は 2023-06-05 に Vision Pro を発表し（S122）、従来の画面の境界を越える 3 次元の UI を、目・手・声で操作すると書いた。既存の iPhone・iPad のアプリも動く（S122）。
- (a) Apple 自身が述べた理由:
  - 引用（原文、S183。WWDC23 Session 10072）: "With so many new possibilities, strike a balance with what's familiar."
  - 引用（原文、S183。同じセッション）: "The glass material provides contrast with the world, gives people more awareness of their surroundings, and adapts to different lighting conditions."
- (b) 記者・批評家の説明: 取得していない。
- (c) 本 skill の整理（推測）: 第 1 原則が Familiar であることは、新しい入力ではまた足場が要る、という判断と読める（iOS 7 の節の裏返し）。ガラスは、周囲という内容を隠さない素材として選ばれた。Liquid Glass は、この素材を平面の端末へ持ち帰った。

### Liquid Glass（2025〜2026 年）

- 事実: Apple は 2025-06-09 に、新しいデザインを iOS 26・iPadOS 26・macOS Tahoe 26・watchOS 26・tvOS 26 に広げると発表した（S185）。操作部品は、角の丸い現代のハードウェアとウィンドウに合わせて、同心円状に作り直された（S185）。2026-06-08 の WWDC26 で、Liquid Glass の作り方の基盤から調整された（S31。B）。使いどころの規則（ナビゲーションの層に限る、コンテンツ層には使わない）は S30 にある。
- (a) Apple 自身が述べた理由:
  - 引用（原文、S185。2025-06-09 の発表）: "For the very first time, the new design extends across platforms — iOS 26, iPadOS 26, macOS Tahoe 26, watchOS 26, and tvOS 26"
  - 引用（原文、S185。同じ発表の続き）: "to establish even more harmony while maintaining the distinct qualities that make each unique."
  - 引用（原文、S185。同じ発表の副題）: "A universal design across platforms brings more focus to content and a new level of vitality while maintaining the familiarity of Apple’s software"
  - 引用（原文、S184。WWDC25 Session 219）: "It builds on learnings from all the way from the Aqua user interface of Mac OS X, through to the realtime blurs of iOS 7, to the fluidity of iPhone X, the flexibility of the Dynamic Island, and the immersive interface of visionOS."
  - 引用（原文、S184。同じセッション）: "Building off these learnings, rather than trying to simply recreate a material from the physical world, Liquid Glass is a new digital meta-material that dynamically bends and shapes light."
  - 引用（原文、S32。Federighi、TechRadar 2025-06-10）: "Suddenly, the black thing comes in, and you can't read any of your text, or it looks poor."
- (b) 記者・批評家の説明: NN/g（Raluca Budiu、2025-10-10）は、上に重ねたものは見えにくくなるという古い知見を挙げて可読性を批判した（批評家の評価。S15。専門家の評価で、ユーザー調査の結果ではない可能性がある）。WWDC26 の調整の具体（透明度の調整など）は MacRumors の報道による（S31。B）。
- (c) 本 skill の整理（推測）: Apple の発表は、どこでも同じ見た目ではなく、同じ素材と規則での統一を述べていると読める。物理の素材の再現ではないという言い方は、iOS 7 で外した写実に戻ったのではない、と Apple が線を引いたものと読める。ただし、素材の質感で層を示す点は Aqua 以来の系譜で、可読性の問題も同じ系譜にある（Aqua の半透明、iOS 7 の半透明、Liquid Glass）。

### 2026 年の HIG の 8 原則

- 事実: HIG は 2026-06-08 に Design principles を再導入し、Purpose・Agency・Responsibility・Familiarity・Flexibility・Simplicity・Craft・Delight の 8 原則にした（S21、S22）。8 原則の内容と旧原則（Clarity / Deference / Depth）は、`../SKILL.md` の「現行 HIG の原則（2026-06-08）と旧原則」にあり、ここでは繰り返さない（旧原則は S44）。
- (a) Apple 自身が述べた理由:
  - 引用（原文、S21）: "There’s no one right way to apply these principles. Instead, they’re tools to help you weigh competing priorities and make key decisions on the path to a great design."
- (b) 記者・批評家の説明: 取得していない。
- (c) 本 skill の整理（推測）: 1987 年の 10 原則（Macintosh の節。S156）と 2026 年の 8 原則（S22）を並べると、Metaphors は Familiarity に、Forgiveness と User control は Agency に、Aesthetic integrity は Craft に近い。新しく加わった Responsibility と Delight は、1987 年版に独立した原則としては無い（S156）。この対応は本 skill の整理で、Apple は対応関係を述べていない。

## 転換点の早見表

(a) 層の要旨だけを並べる。Apple が公に述べた理由で、社内の意思決定の理由ではない。右の列は本 skill の整理（推測）で、Apple が述べたものではない。

| 転換点 | Apple が述べた主な理由（要旨） | 直前の制約として読めるもの |
|---|---|---|
| Macintosh・初代 HIG | 利用者は計算機の経験より、身の回りの世界の直接の経験を持つ（S156） | 白黒の小さな画面と少ないメモリー（S155） |
| Platinum（Mac OS 8） | 新しい見た目を導入した理由は取得していない。HIG は、複数の見た目を許した結果、見た目と振る舞いが直接対応しなくなると述べた（S160） | 利用者が選ぶ複数の見た目 |
| Aqua | 新しい見た目として光沢・半透明の部品と流れる動きを挙げた（S162）。アイコンが身近な物に見えることが、初心者に近づきやすい効果を持つと述べた（S164） | 新しいグラフィックスシステム（S162） |
| iPhone OS | 理由は取得していない。発表文は新しい UI の内容を述べるだけで、基調講演の説明は B（S34） | 新しい入力（指） |
| 質感表現（iOS の HIG） | 本物らしいほど分かりやすく楽しい（S168） | 新しい入力と、豊かな画像 |
| iOS 7 | 動き方の再設計が見た目の再設計を導いた（S173）。物理性と写実を見直す（S174）。利用者がタッチに慣れた（S175）。過去の影の表現への Federighi の評価は、理由ではなく注記にとどめる | Retina・GPU の伸びと、利用者の習熟 |
| Yosemite・San Francisco | iOS との連携、内容に集中、書体でプラットフォームの声をそろえる（S177、S178） | iOS 7 の方針を Mac へ |
| SF Symbols | 記号を文字と並べる難しさに応える（S179） | 文字と記号の混在 |
| Big Sur | 視覚の複雑さを減らし、切り替えの負荷を下げる（S180、S181） | 端末の家族の広がり |
| visionOS | 新しさと慣れの釣り合い。ガラスで周囲との対比を取る（S183） | 空間の入力 |
| Liquid Glass | 全プラットフォームでの調和と、内容への集中（S185）。物理素材の再現ではなく、デジタルのメタ素材（S184） | 複数のプラットフォームと、角の丸いハードウェア（S185） |
| HIG の 8 原則 | 原則は優先度を比べる道具（S21） | - |

## 年が食い違う出典

出典どうしで年や数が合わないものは、どちらかに決めず、両側を並べる。本書の扱いも書く。

| 項目 | 一方の出典 | もう一方の出典 | 本書の扱い |
|---|---|---|---|
| Alto の稼働開始 | 1972 年（Star の回顧論文。B。S107） | 1973 年（Microsoft の 2011 年の記事。S115） | 幅で書く |
| フラット化の起点 | 2011 年に Metro と Windows 8 が広めた（NN/g。C。S125） | 2010-03-18 の UI ガイド（S114）。着想は Zune・Media Center にさかのぼる（S115） | 何の起点かで使い分ける |
| Bill の論文の掲載号 | 4 月号（Schuster の書評。C。S90） | 5 月号（Kinross。S89） | 後者に従う |
| NYC 路線図の導入 | 1970 年（RIT。R。S97） | 1970 年に受託、1972 年 8 月に導入（NYC Transit Museum。R。S98） | 受託と導入を分けて書く |
| Univers のバリエーション数 | 21（Frutiger。S95） | 59（Vignelli。S99） | 後年の拡張かは未確認として両方を示す |
| 『Grid Systems in Graphic Design』の版年 | 1981 年の Niggli 版（転載の注記。B。S92） | 1968 年の Niggli 版を掲げる別の資料（取得しておらず、出典の項目は無い。S92） | 転載の注記が示す版年を採る。食い違いは解決していない |
| iOS 7 の 3 テーマの文面 | 2013 年版（S174） | 2018 年版（S44） | 当時の版の文面を根拠にし、後年の旧 HIG の文面と混ぜない |
| Tschichold のバーゼル移住 | 第二次世界大戦中（教材 PDF の導入文。S86） | 1933 年から（本人の講演。B。S88） | 本人の言を採る（B） |


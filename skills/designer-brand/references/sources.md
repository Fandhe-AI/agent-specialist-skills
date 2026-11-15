# designer-brand 出典台帳

`SKILL.md`・`examples/`・`references/design-history.md` が根拠とした出典の台帳。引用原文・発言者・媒体・日付・URL・取得日・検証区分を記す。S01 から S47 まで（欠番なし）。番号は振り直さない。本文・examples・デザイン史で S 番号を付けて書く事実・年・数値は、この台帳の引用原文（引用ブロック）に逐語で含まれるもの、または各項目の「媒体・日付」の欄に記した日付に限る。

## 凡例

- 検証区分
  - A: 原典・公式ページ・公式文書・原典の保存コピー（Wayback Machine）の本文を取得し、引用文が逐語で含まれることを機械的に照合した。口頭発言を媒体が文字にしたものは、その書き起こしの精度に依存する。区分 A は 29 件（S06 から S16、S19、S20、S32、S33、S34 から S47。各項目の「検証区分」が正）
  - B: 第三者サイトによる転記、または他媒体経由の引用（原典との照合なし）。本人の発言である可能性は高いが、転記・書き起こしの誤りは排除できない
  - C: 批判・論評側の主張。引用が逐語であることのみを確認し、主張の因果は確認していない
  - R: 記者・機関の地の文。発言者本人の発言ではない（本人発言として引用しない）
  - U: 未検証（末尾の一覧）。事実・引用として使わない
- 照合の方法
  - 区分 A の引用は、各項目の URL（Wayback の保存コピーを使った出典は「取得した版」の URL）から本文を取得し、HTML はタグ除去・実体参照の復号・空白の正規化、PDF は `pdftotext` の出力に対して、引用文が連続した文字列として含まれることを確認した。日本語は空白を除いて比較した。再照合の例（PDF は `curl -sL -o f.pdf "<URL>"; pdftotext f.pdf -`、HTML は `curl -sL -A "Mozilla/5.0" "<URL>"` の出力のタグを除いて `grep -F`）
  - ITmedia のページは Shift_JIS のため、`iconv -f CP932 -t UTF-8` を挟む
  - Wayback Machine は短時間の連続アクセスで 429 を返す。再照合は間隔を空けて実行する
  - 区分 B・C・R の引用も、引用文が取得本文に含まれることは確認した。ただし区分 B は原典との照合ではなく、転記・再話の誤りを排除できない
  - S34 から S41 は、別の skill の台帳から移した出典。原文・URL・区分はそのまま写し、備考にあった他の台帳の番号への参照は外した。2026-11-16 に URL を再取得して、引用文が連続した文字列として含まれることを確かめた（S35・S36 は直接の取得を拒否されたため、以前に取得した保存コピーの本文で照合した。再取得による照合ではない）。S42 から S47 は 2026-11-16 に取得し、同じ方法で照合した
  - 本文で S 番号を付けた年・数値のうち、元の引用ブロックに無かったものは、同じ URL を再取得して該当する逐語の行を確かめたうえで、当該項目の引用ブロックに追記した（追記した出典と行は各項目の備考に「追記した行」として記す）。この追記の手順では新しい出典は足していない（S34 以降は別に足した出典で、次の項目に書く）
- 研究結果（実験・調査の数値）は、この skill では根拠に使わない。区分 R の記述を研究の根拠にしない
- 数値（pt・px・mm・比率・人数・金額・年）は、原文で確認できたものだけを「出典あり」とする。それ以外は本 skill の目安（出典なし）と分けて書く
- 引用文は原文を改変していない。原文の引用符・ダッシュ・綴りの癖（OCR・転記の誤りを含む）もそのまま残した。日本語の訳・要旨は本 skill の言葉であり、発言者本人の発言ではない。本人の発言として英語・日本語の逐語で示してよいのは区分 A だけで、区分 B・C・R は要旨にして区分を明記する
- 取得日は、出典ごとに最後に本文を確認した日。S01 から S33 と S35・S36 は 2026-11-15、S34・S37 から S47 は 2026-11-16。時点情報として扱う

## 帰属上の注意

- paulrand.design（S01 から S04）は個人が趣味として運営する非公式サイトで、遺族・財団の公式サイトとは確認できない（同サイトの Contact ページに、権利の許諾はできないとの記載がある）。Rand の文章と発言は区分 B とし、原典（AIGA・書籍・雑誌）との照合はしていない。同サイトの「Visual Identity in New York」のページ（日本語版からの再英訳と読める文面）は、Rand の言葉として使わない
- S02 の "Someone quipped that the stripes reminded him of a prison uniform." は Rand が他者の発言を伝えたもの。S01 の冒頭にある "It reminds me of the Georgia chain gang" も IBM の役員の発言を Rand が引いたもの。いずれも Rand 本人の見解として使わない
- S03（Blueprint 1989）と S04（ID 1993）は記者・編集部の記事で、地の文は Rand の発言ではない。「UPS と ABC は古びた」といった評価は記者 Woudhuysen の判断
- S10 で Hara が述べる田中一光の言葉は、Hara が田中の考え方として紹介したもの（入れ子）。田中本人の発言としては引用しない。S09 の無印良品の公式文は企業の文章で、Hara 本人の文と書かれていない
- S11 の佐藤可士和は、本人の発言として確認できた範囲だけを使う。記者の地の文を本人の発言にしない
- S17 と S18 は東京都の議会資料で、組織委員会の発表内容の要約である。組織委員会本人の文として引用しない。エンブレム中止の理由は、盗用の有無の認定ではなく、組織委員会が示した判断として扱う
- S07（NASA Graphics Standards Manual）の冒頭の書簡の署名は PDF 本文で "Richard H. Truly, Administrator" だが、NASA 自身の別ページ（S08）は 1975 年導入と述べる。署名者・日付と発効日（1976-01-01）の関係は確認できておらず、解決していない
- ブランドのガイドラインの数値（最小サイズ・余白）は、その組織の紋章やロゴに対する規定で、他のロゴへそのまま適用できるとは原文は述べていない
- London 2012 の署名数（28,000 超と 30,000 超が同じ記事内で併存）と費用（約 80 万ドル、40 万ポンドとする報道）は食い違う。数値として使うなら出典と日付を添える
- 法的判断はこの skill の範囲外である。S15・S16・S17・S32 は、商標調査の必要性と、調査の限界を公的機関自身が述べていることの根拠であり、類否判断・登録可否・侵害の有無を示すものではない

## 索引（論点から出典へ）

| 論点 | 出典（S 番号） |
|---|---|
| ロゴとは何か・識別・意味の源泉 | S01、S02、S03、S31 |
| ロゴ単体からアイデンティティシステムへ | S05、S06、S07、S08、S13、S14 |
| ガイドラインの構成・最小サイズ・余白・誤用の禁止 | S07、S14、S19、S20 |
| 日本（東京 1964・無印良品・佐藤可士和） | S09、S10、S11、S21、S22、S23 |
| 失敗・撤回・批判（Gap・London 2012・UC の請願・東京 2020） | S12、S17、S24、S25、S26、S27 |
| ブランドの没個性化・一貫性至上主義への批判 | S28、S29、S30、S04 |
| 法務の境界（商標調査） | S15、S16、S17、S32、S20 |
| 色のコントラスト比（文字と背景） | S33 |
| ロゴのライトとダークの版（`<picture>`・`light-dark()`・強制色モード・ロゴとコントラストの基準） | S42、S43、S44、S45、S46、S47 |
| 進め方（目的の言語化・理由と判断の区別・複数案・批評・既定の点検・参照の扱い） | S34、S35、S36、S37、S38、S39、S40、S41 |

## 引用の台帳

### S01 Paul Rand「Logos, Flags, and Escutcheons」

> A logo doesn’t sell (directly), it identifies.
> A logo derives its meaning from the quality of the thing it symbolizes, not the other way around.
> The effectiveness of a good logo depends on: a. distinctiveness b. visibility c. useability d. memorability e. universality f. durability g. timelessness
> Ultimately, the only thing mandatory, it seems, is that a logo be attractive, reproducible in one color and in exceedingly small sizes.
> But many times, it is merely to feed someone’s ego, to satisfy a CEO who doesn’t wish to be linked with the past, or often because it’s the thing to do.
> They realized the folly only after a market survey revealed high audience recognition.
> A well design logo, in the end, is a reflection of the business it symbolizes.
> The belief that a new or updated design will be some kind charm that will magically transform any business, is not uncommon.
> Likes or dislikes should play no part in the problem of identification; nor should they have anything to do with approval or disapproval.
> A redesigned logo may have the advantage of implying something new, something improved-but this is short-lived if a company doesn’t live up to its claim.

- 媒体・日付: Paul Rand, AIGA 刊行物, 1991（paulrand.design の記載による。Allworth Press『Looking Closer』所収とも記載）
- URL: https://www.paulrand.design/writing/articles/1991-logos-flags-and-escutcheons.html
- 取得日: 2026-11-15
- 検証区分: B（本人の文章の第三者サイトによる転記）
- 備考: ロゴは「識別する旗・署名」であり売らない、意味は中身の質から来る、という Rand の中核主張。7 つの評価軸（distinctiveness 以下）と「単色・極小で再現できること」が唯一の必須条件という記述は、小サイズ・単色の見直しの根拠に使える。ABC のロゴ更新（1962）を市場調査で取りやめた話は Rand の記述（第三者の裏付けは未取得）。最後の引用の "A well design" は転記元の綴りのまま。 paulrand.design は個人が趣味として運営する非公式サイト（Contact ページに「permissions を与えることはできない」とあり、遺族・財団の公式サイトとは確認できない）。本文は転記のため、原典（AIGA・書籍・雑誌）との照合はしていない。 追記した行: 最後の 3 行（更新が事業を変えるという信念、新しさの示唆は、会社が主張に見合わなければ短命だという文（以前は「if」で途切れる断片だったため、同じ URL を再取得して全文に直した）、好き嫌いと識別）。同じ URL から再取得して確認した。

### S02 Paul Rand（Mildred Friedman『Graphic Design in America』1989 所収のインタビュー）

> You have to break everything down into the smallest possible denominator.
> You’re not selling a product, so you don’t have to persuade anybody except the client.
> I thought of a legal document as a possible solution, a cluster of thin parallel lines used as a background pattern to discourage plagiarism of signatures.
> Someone quipped that the stripes reminded him of a prison uniform.
> I decided that if these three people could read it, it must be right.
> Yet I don’t think one can design for permanence.

- 媒体・日付: Paul Rand, Mildred Friedman（編）『Graphic Design in America: A Visual Language History』, 1989（paulrand.design の転記による）
- URL: https://www.paulrand.design/life/interviews/1989-interview-with-steven-heller.html
- 取得日: 2026-11-15
- 検証区分: B（転記。本人の一人称の語り）
- 備考: IBM のストライプの発想（法的文書の背景線）と、「今回の問題では何が必須か」を最小の分母まで削る考え方。"prison uniform" の揶揄は Rand が他者の発言を伝えたもの（入れ子の発言。揶揄した人物は特定されていない）。「配管工・妻・会計士の 3 人が読めたから正しい」は非公式の 3 人テストで、一般的な検証手法として主張しているわけではない。URL のファイル名は Steven Heller だが、ページ内の出典表記は Friedman の書籍。paulrand.design は個人が趣味として運営する非公式サイト（Contact ページに「permissions を与えることはできない」とあり、遺族・財団の公式サイトとは確認できない）。本文は転記のため、原典（AIGA・書籍・雑誌）との照合はしていない。

### S03 Paul Rand（James Woudhuysen によるインタビュー記事「Why Paul Rand Hates Logos」）

> The thing that sells, with or without a good identity, is a good product.
> The only reason for having a good identity is – why have a bad one?
> The idea came from the rules they used to put beneath signatures on important documents so as to prevent forgery by erasure. I wanted to convey authority
> In front of senior executives, a good salesman can kill a good designer just by the power of his speech.

- 媒体・日付: Blueprint 誌, 1989-09, 記者: James Woudhuysen（paulrand.design の転記による）
- URL: https://www.paulrand.design/life/books-articles/articles/print/1989-blueprint-magazine.html
- 取得日: 2026-11-15
- 検証区分: B（雑誌記事の転記。引用は Rand の発言、地の文は記者（R））
- 備考: 「良いアイデンティティが売るのではなく、良い製品が売る」という Rand の発言。IBM のストライプの由来を「署名の下に引く偽造防止の線」とする（S02 と整合）。記事中の評価（「UPS と ABC は古びた」など）は記者の判断で Rand の発言ではない。NeXT の逸話（Jobs が Rand を抱擁した話）は Rand の回想の再話で未裏取り。paulrand.design は個人が趣味として運営する非公式サイト（Contact ページに「permissions を与えることはできない」とあり、遺族・財団の公式サイトとは確認できない）。本文は転記のため、原典（AIGA・書籍・雑誌）との照合はしていない。

### S04 ID 誌（編集部の巻頭言と Janet Abrams の Rand 評）

> True, his adherence to formalist dogma borders on the archaic at a time when design has never been more diverse.
> On closer examination, they are also studded with arbitrary value judgments passing for objective analysis

- 媒体・日付: ID 誌（Janet Abrams の Rand 紹介記事。Rand 79 歳時点、1993 年。paulrand.design の転記による）
- URL: https://www.paulrand.design/life/interviews/1993-id-magazine.html
- 取得日: 2026-11-15
- 検証区分: C（批判・論評側。記者・編集部の主張）
- 備考: Rand の絶対的な言い方への当時の批判。「Rand の論は客観的分析を装った価値判断を含む」という指摘は、Rand の言葉を権威として再生産しないための根拠に使う。因果は確認していない。paulrand.design は個人が趣味として運営する非公式サイト（Contact ページに「permissions を与えることはできない」とあり、遺族・財団の公式サイトとは確認できない）。本文は転記のため、原典（AIGA・書籍・雑誌）との照合はしていない。

### S05 IBM Heritage「The IBM logo」

> The 8-bar has proven remarkably resilient over the decades, remaining unchanged since 1972.
> hired noted graphic designer Paul Rand to create a logo that would herald a new era of IBM while also communicating continuity.
> Rand created IBM’s now instantly recognizable 8-bar logo in 1972
> In 1981, Rand designed the IBM rebus poster, which featured pictograms of an eye and a bee in place of the I and B.
> In 1956, Thomas J. Watson Jr. — who had taken over IBM from his father, coined the phrase “good design is good business” and created IBM’s first Design Program — hired noted graphic designer Paul Rand to create a logo that would herald a new era of IBM while also communicating continuity.
> Released 1924 IBM Released 1947 IBM Released 1957 IBM Released 1972 IBM Released 1981

- 媒体・日付: IBM 公式サイト IBM Heritage（掲載日の記載なし。取得 2026-11-15）
- URL: https://www.ibm.com/history/logo
- 取得日: 2026-11-15
- 検証区分: R（企業の沿革ページ（地の文）。Rand 本人の発言ではない）
- 備考: 年号の根拠（1956 に Rand 起用、City Medium 化、1972 に 8 本線、1981 にリーバス）。同ページ内の「1957」表記（ロゴ一覧）と「1956 年に起用」の本文は食い違うように読める。理由・因果は企業の物語であり、IBM が述べたことの範囲で使う。 追記した行: 最後の 2 行（1956 年の起用と、ロゴ一覧の年の並び。後者が 1957 の表記の根拠）。同じ URL から再取得して確認した。

### S06 Massimo Vignelli『The Vignelli Canon』（Lars Müller, 2010）

> I have always said that there are three aspects in Design that are important to me: Semantic, Syntactic and Pragmatic.
> A real Corporate Identity is based on an overall system approach, not just a logo.
> very often, it is motivated by the desire of change merely for the sake of change, and that is a very wrong motivation.
> What is new is NOT a graphic form but a way of thinking, a way of showing respect for history in a context that usually has zero understanding for these values.
> Too much diversity creates fragmentation a very common disease of badly designed communication. Too much identity generates perceptive redundancy and lack of retention.
> In the end, a design should stand by itself, without excuses, explanations, apologies.

- 媒体・日付: Massimo Vignelli『The Vignelli Canon』, Lars Müller Publishers, 2010。RIT Vignelli Center for Design Studies の無料 PDF
- URL: https://www.rit.edu/vignellicenter/sites/rit.edu.vignellicenter/files/documents/The%20Vignelli%20Canon.pdf
- 取得日: 2026-11-15
- 検証区分: A（著者本人の書籍。RIT Vignelli Center が配布する PDF を pdftotext で照合）
- 備考: アイデンティティはロゴ単体でなくシステム（"Equity" の節）、変更のための変更は誤った動機、アイデンティティと多様性の釣り合い。意味論・統語論・語用論の 3 面はレビューの枠組みに使える。ロゴを動かさず軽く修正した例（Ford・Ciga・Cinzano・Lancia）は Vignelli の自己申告。PDF に著作権表示の明記は取得本文中で確認できていない。引用は短い範囲にとどめ、長い転載はしない。

### S07 NASA Graphics Standards Manual（NHB 1430.2, 1976）

> It is the official policy document regarding NASA identification (use of logotype), communication in general and sets the tone and level of quality for all NASA graphics.
> The logotype should never be altered or distorted in any way.
> The logotype must not be altered or distorted in any way.
> The logotype should never be shown as outlined letterforms.
> NASA red should be used only when a second color is available and appropriate.
> A minimum clearance on all sides of three vertical stroke-widths of the logo is recommended.

- 媒体・日付: NASA『Graphics Standards Manual』NHB 1430.2, 1976-01（表紙の日付表記は "January, 1976"）
- URL: https://www.nasa.gov/wp-content/uploads/2015/01/nasa_graphics_manual_nhb_1430-2_jan_1976.pdf
- 取得日: 2026-11-15
- 検証区分: A（NASA（米国連邦政府）公開の原典 PDF を pdftotext で照合）
- 備考: ガイドラインの章立て（1 ロゴタイプ、2 再生用原稿、3 文房具、4 書式、5 刊行物、ほか 9 まで）、誤用の禁止例（図形で囲む・影・輪郭だけの文字・歪み）、デカールの余白「3 本分の縦ストローク幅」（出典あり。ただしデカール用の推奨で、ロゴ一般の規定ではない）。冒頭の書簡の署名は PDF 本文では "Richard H. Truly, Administrator" だが、NASA の別ページ（S08）は 1975 年導入と述べており、書簡の署名者・日付と 1976 年の発効日の関係は確認できていない（食い違いとして記録し、解決していない）。

### S08 NASA「The Worm is Back!」（Brian Dunbar）

> Enter a cleaner, sleeker design born of the Federal Design Improvement Program and officially introduced in 1975.
> However, with 1970’s technology, it was a difficult icon to reproduce, print, and many people considered it a complicated metaphor
> Created by the firm of Danne & Blackburn, the logo was honored in 1984 by President Reagan for its simplistic, yet innovative design.
> However, in 1992, the 1970s brand was retired – except on clothing and other souvenir items – in favor of the original late 1950s graphic.
> Until today. The worm is back.

- 媒体・日付: NASA 公式サイト, 2020-04-02, 著者 Brian Dunbar
- URL: https://www.nasa.gov/general/the-worm-is-back/
- 取得日: 2026-11-15
- 検証区分: A（NASA 公式ページ。機関の記事で、デザイナー本人の発言ではない（R の性質））
- 備考: 旧エンブレム（meatball）が複雑で当時の技術で複製・印刷が難しかったこと、1975 年の導入、1992 年の廃止、2020 年の復活。「複製しにくい」は NASA 自身の記述で、ロゴの簡素化の動機の出典になる。同ページと S07 で年（1975 導入・1976 発効）は食い違いではなく、導入と発効の違いと読めるが、推測を含む。 追記した行: 最後の 1 行（復活。年は媒体・日付の欄）。同じ URL から再取得して確認した。

### S09 無印良品（良品計画）「What is MUJI?」

> 無印良品とは「しるしの無い良い品」という意味です。
> 1. 素材の選択 2. 工程の点検 3. 包装の簡略化
> 無印良品が目指しているのは「これがいい」ではなく「これでいい」という理性的な満足感をお客さまに持っていただくことです。
> これはスタイルとしてのミニマリズムではありません。言わば「空っぽの器」のようなもの。
> 単純であり空白であるからこそ、あらゆる人々の思いを受け入れられる究極の自在性がそこに生まれるのです。
> 無印良品の誕生は1980年。

- 媒体・日付: 無印良品 公式サイト「What is MUJI?」, 掲載日の記載なし（Wayback 保存 2026-03-12）
- URL: https://www.muji.com/jp/about/（取得した版: https://web.archive.org/web/20260312050201/https://www.muji.com/jp/about/）
- 取得日: 2026-11-15
- 検証区分: A（企業の公式文。Wayback の保存コピーで照合。Hara 本人の文とは書かれていない）
- 備考: ブランドの思想を「空っぽの器」「これでいい」と言語化した公式文。「ミニマリズムはスタイルではない」と明言している点は、「無印っぽく」の誤解を正す根拠になる。muji.com は curl の既定の接続では HTTP/2 のエラーで取得できなかったため、Wayback で取得した。1980 年の誕生は同ページの記述。 追記した行: 最後の 1 行（誕生の年）。Wayback の保存コピーから再取得して確認した。

### S10 原研哉「Visualize the philosophy of MUJI」（無印良品とクリエイター）

> 「シンプル」とは、西洋の近代主義から生まれてきた、合理性にのっとったものの形の考え方のことです。
> そんな懐の深さを、私は「空っぽ」＝エンプティと呼んでいます。
> 「豪華に引け目を感じることなく誇りをもって簡素であること。」「無駄を省いていくことによって、豪華なものよりもっと素敵に見える。」といった、グラフィックデザイナーの田中一光氏が提案した考え方を引き継いでアートディレクションを担当しています。
> 無印良品の広告というのは、「答え」を提示するのではなく、いい「問い」を投げかけていくことなので、今後もそうありたいと思っています。
> たくさんのものを売るとか、明確にセールスの実績を上げるという役割だけを担っているわけではないので、実際どういう風に役に立っているのか僕自身もよくわからない
> 何かを主張して無印の色に染まってくださいというのではなくて、あなた方の文化の中に知らないうちに入り込んで、必要不可欠なものになっていたい

- 媒体・日付: 無印良品 Archive「無印良品とクリエイター 原研哉」（掲載日の記載なし。Wayback 保存 2026-10-18）
- URL: https://www.muji.com/jp/flagship/huaihai755/archive/hara.html（取得した版: https://web.archive.org/web/20261018112837/https://www.muji.com/jp/flagship/huaihai755/archive/hara.html）
- 取得日: 2026-11-15
- 検証区分: A（無印良品公式サイト掲載の原研哉の語り（一人称の書き起こし）。Wayback の保存コピーで照合）
- 備考: 第 3 引用の「豪華に〜」は、Hara が田中一光の提案した考え方として述べたもの（入れ子。田中本人の発言としては引用しない）。ページの冒頭の段落に話者の明示はないが、一人称（「担当しています」「お話したい」）の講演の書き起こしと読める。Hara 自身が広告の効果を測れていないと述べている（第 5 引用）ことは、ブランド施策の効果検証の限界の根拠になる。

### S11 佐藤可士和（ITmedia ビジネスオンライン「佐藤可士和氏が語る、地方発ブランドの成功条件とは？」1/6 ページ）

> マスターブランドをしっかり確立するために、各社それぞれが特色を出すよりも先に、「今治」というものを前面に出すべきだというのを、プロジェクトの立ち上げ時からいろいろと厳しく言っていました。
> それほど今治タオルを強烈にブランディングしましたから。

- 媒体・日付: ITmedia ビジネスオンライン, 2017-05-16, 記者: 伏見学
- URL: https://www.itmedia.co.jp/business/articles/1705/16/news043.html
- 取得日: 2026-11-15
- 検証区分: A（インタビューの本人発言（記者は伏見学）。ページは Shift_JIS）
- 備考: 佐藤可士和の本人の発言として確認できたのは、今治タオルのマスターブランドを各社の個性より先に立てた、という方針の範囲のみ。「整理」「ユニクロ」などの断定には使わない。記者の地の文（2006 年から今治タオルのブランディングに携わる、など）は R で、本人の発言ではない。

### S12 Michael Bierut「Graphic Design Criticism as a Spectator Sport」

> Graphic design criticism is now a spectator sport, and anyone can play.
> After Tropicana, after the "epic fail" Gap debacle, after the seizure-inducing London 2012 affair, no one should have been surprised by what happened next.
> Designers tend to overvalue differentiation and originality.
> Most people don't want to stand out. They want to fit in.
> Changing it after the fact is like coming into people's houses, taking away the things they own, and replacing them with things they didn't ask for and don't want.
> A petition on Change.org — "Stop the new UC logo" — got over 54,000 signatures.

- 媒体・日付: Design Observer, 2013-01-14, Michael Bierut（Pentagram パートナー）
- URL: https://designobserver.com/article.php?id=37607（取得した版: https://web.archive.org/web/20240813054255/https://www.designobserver.com/article.php?id=37607）
- 取得日: 2026-11-15
- 検証区分: A（本人のエッセイ。Wayback の保存コピーで照合）
- 備考: UC（カリフォルニア大学）の新ロゴに反対する請願（Change.org の署名 54,000 超、同記事の記述。ロゴが撤回されたかは引用の範囲外）を軸に、ロゴ変更への大衆の反応を論じる。「デザイナーは差別化と独自性を過大評価する」「人は目立ちたいのでなく溶け込みたい」は、ロゴ変更の批判を読む視点。Tropicana・Gap・London 2012 は同記事内の言及で、個別の事実の出典にはならない。 追記した行: 最後の 1 行（署名数）。Wayback の保存コピーから再取得して確認した。

### S13 Pentagram「MIT Media Lab」（Michael Bierut のチーム）

> The design began with designer Richard The’s 25th anniversary logo for the Media Lab, which was based on a seven-by-seven grid.
> Using the same underlying grid, the designers extended that identity to each of the 23 research groups that lie at the heart of the Lab’s activity.
> The result is an interrelated system of glyphs that at once establishes a fixed identity for the Media Lab, but celebrates the diversity of activity that makes the Lab great.

- 媒体・日付: Pentagram 公式サイト（案件ページ。掲載日の記載なし）
- URL: https://www.pentagram.com/work/mit-media-lab
- 取得日: 2026-11-15
- 検証区分: A（Pentagram 公式の案件ページ。機関の記述（デザイナー本人の発言ではない））
- 備考: 可変アイデンティティ（2011 年の Richard The の 25 周年ロゴ）を、固定の ML モノグラムと 23 の研究グループのグリフへ拡張した、という記述。Pentagram 版の採用年（2014 とされる）は同ページに無く、第三者の記述（引用ではない参照）に依る。

### S14 英国政府「Government identity system」（HM Government, 2012）

> This system has been designed to provide a cohesive, cost-effective and consistent approach to branding government departments, their agencies and their arm’s-length bodies (ALBs).
> Maximum and minimum sizes refer to the width or height of the Royal Coat of Arms, not the identity as a whole.
> Detailed artwork in which the large version of the Royal Coat of Arms is used for media that needs the highest standards of reproduction. Minimum width of 20mm.
> Small artwork in which the reduced version of the Royal Coat of Arms is used for small printed items such as business cards or for larger digital use. Minimum width of 5mm or 60 pixels.
> Digital artwork in which the simplified version of the Royal Coat of Arms is used online or with mobile devices. For use at 50 to 30 pixels high.
> The exclusion zone is a distance equivalent to the width of the Royal Coat of Arms around the identity
> This is the minimum clearance; whenever possible, leave more space around the identity than the exclusion zone.

- 媒体・日付: HM Government『Government identity system』, 2012（GOV.UK の公開 PDF）
- URL: https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/362346/hmg_identity_system_guidelines_2012.pdf
- 取得日: 2026-11-15
- 検証区分: A（英国政府の公開ガイドライン PDF を pdftotext で照合）
- 備考: 最小サイズ・余白の数値の出典あり。重要なのは、サイズごとに別の版（詳細版・縮小版・デジタル用の簡略版）を用意し、版ごとに最小サイズを定めている点（小サイズ対応の見直しの根拠）。数値は王室紋章（Royal Coat of Arms）の幅・高さに対するもので、ロゴ一般の基準ではない。余白は紋章の幅に等しい。2012 年版のため現行（GOV.UK の最新）の規定は未確認。

### S15 USPTO「Why search for similar trademarks?」

> One of the most common reasons applications are rejected is because the applied-for trademark is too similar to an already registered one and there’s a likelihood of confusion
> Although the trademark examining attorney assigned to your application will also conduct a search, they will only determine whether there are conflicting trademarks in our federal database. It's your responsibility to search state trademark databases and the internet.

- 媒体・日付: USPTO 公式サイト（掲載日の記載なし）
- URL: https://www.uspto.gov/trademarks/basics/why-search-similar-trademarks
- 取得日: 2026-11-15
- 検証区分: A（米国特許商標庁（米国連邦政府）の公式ページ）
- 備考: 商標調査（clearance search）の必要性の公式説明。USPTO の審査官の検索範囲は連邦データベースのみで、州の登録とインターネットの調査は出願者の責任とする。この skill は法的判断をしない根拠（調査の範囲と責任の所在）。米国法の説明で、日本の商標制度には当てはまらない。

### S16 USPTO「Federal trademark searching」

> Clearance searches can be complex, so consider hiring a private trademark attorney to do one for you.
> Trademarks may be confusingly similar if they look alike, sound alike, have similar meanings, or create similar commercial impressions.
> However, it can’t give you a clear-cut answer about whether your trademark can be registered.
> There are many other legal requirements to registering a trademark, and your application has to satisfy all of them.

- 媒体・日付: USPTO 公式サイト（掲載日の記載なし）
- URL: https://www.uspto.gov/trademarks/search/federal-trademark-searching
- 取得日: 2026-11-15
- 検証区分: A（米国特許商標庁の公式ページ）
- 備考: データベース検索は登録可否の確実な答えにならず、類似の判断は外観・称呼・観念・取引上の印象に及ぶ。弁護士への相談を勧める。この skill は類否判断をせず、確認すべき観点を示して専門家へ渡す、という線引きの根拠。

### S17 東京都 オリンピック・パラリンピック推進対策特別委員会資料「東京2020オリンピック・パラリンピック競技大会エンブレムの使用中止について」（平成27年9月17日）

> 発表前にＩＯＣと国内外の商標調査を経て決定したものであり、組織委員会としては、問題ない。
> デザインのオリジナル性に関する佐野氏の専門的な説明は理解するが、国民の理解を得ることは困難。
> 継続使用によるオリンピック・パラリンピックそのものに対する国民の支援が損なわれることを懸念。
> 佐野氏からオリンピック・パラリンピック全体への悪影響を鑑みて原案を取り下げたいと提案を受けた。
> ７月２４日 組織委員会が、大会エンブレムを発表
> 組織委員会が、エンブレムの使用中止を発表

- 媒体・日付: 東京都（オリンピック・パラリンピック推進対策特別委員会提出資料）, 2015-09-17
- URL: https://www.2020games.metro.tokyo.lg.jp/975ad4ea605f342bf62d20d42e226b60.pdf
- 取得日: 2026-11-15
- 検証区分: R（自治体の資料の地の文。組織委員会の発表内容の都による要約で、組織委員会本人の文ではない）
- 備考: 2015-07-24 に発表した東京2020 エンブレムを、2015-09-01 に使用中止にした経緯。商標調査を経ていても（7 月 31 日の組織委員会のコメント）、国民の理解が得られず中止になった、という事実の出典。「商標調査を経た」は商標上の確認であり、模倣の疑念や世論への対応とは別、という線引きの根拠に使う（この解釈は本 skill の整理）。中止の理由は組織委員会の判断として資料に記載されたもので、盗用の有無の認定ではない。都の資料なので、組織委員会の一次文書は未取得。 追記した行: 最後の 2 行（発表と使用中止）。PDF の表の文字を並べた行で、日付と出来事の対応は表組みに依存する（本文では、発表を 2015 年 7 月 24 日、中止の発表を同年 9 月としてのみ使う）。同じ URL から再取得して確認した。

### S18 東京都 オリンピック・パラリンピック推進対策特別委員会資料「東京2020オリンピック・パラリンピック競技大会エンブレムについて」（平成27年8月4日）

> 世界は、2020年に東京でひとつのＴＥＡＭになる歓びを体験する。
> その和の力の象徴として、このエンブレムは生まれました。

- 媒体・日付: 東京都（オリンピック・パラリンピック推進対策特別委員会提出資料）, 2015-08-04（組織委員会の 2015-07-24 発表の内容を記載）
- URL: https://www.2020games.metro.tokyo.lg.jp/69660393cbd34d8db88d25e3f10944b2.pdf
- 取得日: 2026-11-15
- 検証区分: R（自治体の資料の地の文（組織委員会の発表内容の要約））
- 備考: エンブレムのコンセプト文（組織委員会の発表文として記載）。デザインの概念を短い文で言語化した例で、S17 の中止と対にして使う。作者の経歴の記述は資料の地の文。

### S19 CNCF「Brand Guidelines」

> We rather like our CNCF logo, so please don’t change it!
> Always preserve clear space around the CNCF logo. It is required to provide clarity and breathing room.
> The CNCF logo should be used in its full color option or all-black or all-white when required.
> Scaling or stretching the CNCF logo away from its normal proportions is strictly not permitted.

- 媒体・日付: Cloud Native Computing Foundation 公式サイト（掲載日の記載なし）
- URL: https://www.cncf.io/brand-guidelines/
- 取得日: 2026-11-15
- 検証区分: A（団体の公式ページ）
- 備考: OSS 団体のガイドラインの典型的な構成（主ロゴ・副ロゴ・単色版・余白・色の変更禁止・比率の維持・書体・色コード）。クリアスペースの値はページ本文では「必要」とあるだけで、数値は図にあり本文から取れなかった（未確認）。

### S20 Python Software Foundation「Trademark Usage Policy」

> All trademarks, even those that apply to open source software, must be used according to certain legal requirements. If these requirements are not met, the trademark may be endangered or lost.
> In general, we want the word mark "Python" and the Python logos to be used with minimal restriction to refer to the Python programming language.

- 媒体・日付: Python Software Foundation 公式サイト（掲載日の記載なし）
- URL: https://www.python.org/psf/trademarks/
- 取得日: 2026-11-15
- 検証区分: A（団体の公式ポリシー）
- 備考: ロゴが商標でもある場合、使用基準の維持が権利の維持に関わるという団体側の説明（法的判断ではなく、PSF の方針の範囲）。ブランドガイドが「見た目」だけでなく「使わせ方の規定」でもあることの例。

### S21 コカ・コーラ ジャパン「東京オリンピックと『コカ･コーラ』第4回」（文: 野地秩嘉）

> 彼がまずデザインしたのはエンブレムだった。開催を4年後に控えた1960年、一流デザイナー6人によるコンペが行われたが、亀倉案を見た審査員たちは一目見て「これにしよう」と決めている。
> 公式ポスターの第1号はエンブレムを拡大したバージョンで、完成は1961年2月。
> あのポスターのことだけれど、僕は最初から写真でいこうと決めていた。それまでのポスターは下手な画家が描いたポスターだ。それでは迫力が出ない。写真しかない。

- 媒体・日付: コカ・コーラ ジャパン 公式メディアセンター（連載 第 4 回。掲載日はページ本文で確認できていない）
- URL: https://www.coca-cola.com/jp/ja/media-center/tokyo1964-4
- 取得日: 2026-11-15
- 検証区分: B（企業の広告記事。亀倉の発言は出典不明の再話（B）、地の文は R）
- 備考: 1964 年東京五輪のエンブレム（1960 年のコンペ）とポスターの経緯。亀倉の発言は記事が「のちにこう語っている」と述べるのみで、元の媒体・日付は示されていない。コカ・コーラは五輪のスポンサーで、利害のある側の記事。コンペの経緯は、別の報道（亀倉がデザイン顧問を断って公募を提案した、とする記事）と食い違う可能性があり、確認できていない（未解決）。

### S22 国立国際美術館 所蔵データ（Art Platform Japan）「東京オリンピック（公式第4号ポスター）」

> アートディレクション:亀倉雄策／写真:早崎治
> Year 1964 Medium オフセット、紙

- 媒体・日付: Art Platform Japan（国立国際美術館のデータ。2021-10-20 公開、2025-10-09 更新）
- URL: https://artplatform.go.jp/collections/W646727
- 取得日: 2026-11-15
- 検証区分: R（美術館のデータ（機関の記述））
- 備考: 公式ポスター第 4 号のクレジット（AD: 亀倉雄策、写真: 早崎治）と制作年（1964）の根拠。シンボルマーク本体の年・経緯の根拠にはならない。

### S23 加島 卓「亀倉雄策 日本の紋章は新しい」（文藝春秋 2025 年 1 月号、公開部分）

> 亀倉はデザインのなかでもシンボルマークを重視した。
> 亀倉のデザインは複雑なことをしない。その多くが、直線と曲線で構成されている。

- 媒体・日付: 文春オンライン（文藝春秋）, 2024-12-09, 筆者: 加島 卓
- URL: https://bunshun.jp/bungeishunju/articles/h8985
- 取得日: 2026-11-15
- 検証区分: R（筆者（社会学者）の地の文。有料記事の公開部分のみ取得）
- 備考: 有料記事で、取得できたのは冒頭の無料公開部分のみ。亀倉が日本と西洋の関係を考えた点などの本論は未取得。筆者の評価であり亀倉本人の発言ではない。

### S24 CNN Money「Gap reverting to old logo after outcry」

> We've learned a lot in this process. And we are clear that we did not go about this in the right way,
> There may be a time to evolve our logo, but if and when that time comes, we'll handle it in a different way,
> Gap initially defended the new logo, saying last week that it brought the company into the modern age.

- 媒体・日付: CNNMoney.com, 2010-10-12（Wayback の保存コピー）
- URL: https://money.cnn.com/2010/10/12/news/companies/gap_logo/index.htm（取得した版: https://web.archive.org/web/20241011220836/https://money.cnn.com/2010/10/12/news/companies/gap_logo/index.htm）
- 取得日: 2026-11-15
- 検証区分: B（報道記事。Marka Hansen（Gap North America 社長）の声明を引用した部分は B）
- 備考: Gap のロゴ変更（2010 年 10 月、数日で撤回）。Hansen は声明で、進め方（顧客を巻き込まなかった点）に誤りがあったと述べる。「ロゴ自体の評価」ではなく「進め方」への反省である点に注意。撤回の理由を「世論」とだけ断定せず、声明の言葉の範囲で書く。Gap 本社の声明の原文は未取得。

### S25 Adweek「Logo-Gate Is Over! Gap Goes Back」（Tonya Garcia）

> We recognize that we missed the opportunity to engage with the online community.

- 媒体・日付: Adweek（掲載日は取得本文に無い。2010-10-12 の発表を報じた記事）
- URL: https://www.adweek.com/performance-marketing/logo-gate-is-over-gap-goes-back/
- 取得日: 2026-11-15
- 検証区分: B（報道記事（一部が購読者限定。取得できた範囲のみ））
- 備考: S24 と同じ声明の別の一文。購読者限定のため全文は未取得。S24 の補足としてのみ使う。

### S26 Marketing Week「Critics deride logo for 2012 Olympics」

> The London Organising Committee of the Olympic Games (Locog) is taking a critical mauling from designers and branding experts after the unveiling of its new emblem.
> The typography is not of a very high standard. It does not look finished.
> London 2012 will be everyone’s games – everyone’s 2012.
> The backlash against the Wolff Olins-designed logo has taken Locog by surprise.

- 媒体・日付: Marketing Week, 2007-06-07
- URL: https://www.marketingweek.com/critics-deride-logo-for-2012-olympics/
- 取得日: 2026-11-15
- 検証区分: B（報道記事。引用された人物の発言は B、地の文は R）
- 備考: London 2012 エンブレム（Wolff Olins、2007-06-04 発表）への発表直後の批判。批判者は Designhouse のクリエイティブディレクター Paul Porral（引用内の発言）。Coe の発言は発表時のもので、「Everyone's Games」という方針の説明。批判がのちに評価に変わったとする見方は、この台帳では出典を取得していない。 追記した行: 最後の 1 行（デザインした会社名）。同じ URL から再取得して確認した。

### S27 ABC News「London's 2012 Olympic Logo Bashed」（David Schoetz）

> The jigsaw puzzle logo for the 2012 Olympic Games in London has ignited a firestorm of public opposition
> The colorful design, which cost organizers nearly $800,000 to create
> An online petition posted by Jonathan Ellis Monday has generated more than 28,000 electronic signatures from around the world
> An online petition seeking a new logo already has more than 30,000 signatures.
> London-based brand consultants Wolff Olins designed the controversial logo

- 媒体・日付: ABC News, 2007-06-05, 記者: David Schoetz
- URL: https://abcnews.go.com/Sports/story?id=3247374
- 取得日: 2026-11-15
- 検証区分: R（報道記事の地の文）
- 備考: 数字の食い違いに注意: 同記事の副見出しは署名「30,000 超」、本文は「28,000 超」。費用は ABC が「約 80 万ドル」と書く一方、他媒体は 40 万ポンドとする（通貨・時点が異なる可能性。未解決）。署名数・費用は、数値として使うなら出典と日付を必ず添える。 追記した行: 最後の 2 行（副見出しの署名数と、デザインした会社名）。同じ URL から再取得して確認した。

### S28 Base Design（Thierry Brunfaut）「Blanding, or the Branding Paradox」

> The point is differentiation; by definition, that’s what branding is.
> branding designed not to stand out at all, but to blend in.
> bold colors and sans-serif type play well across the diverse media on which brands today must live. They scale up or down. They are legible on a screen, in a magazine, or on a billboard.

- 媒体・日付: Base Design 公式サイト, 2018-11-28（編集版が Fast Company に 2018-12-11 掲載と本文に記載）, Thierry Brunfaut と Tom Greenwood
- URL: https://www.basedesign.com/press/blanding-branding-paradox
- 取得日: 2026-11-15
- 検証区分: C（批判・論評側（デザイン会社のパートナーの意見）。引用が逐語であることのみを確認）
- 備考: 「blanding」（ブランドの没個性化）批判の代表的な文章。同じ文章の中で、サンセリフと鮮やかな色が多様な媒体で拡縮・可読になるという機能面の理由も認めている（批判側自身が認める反論材料）。「blanding」という語の起点はこの台帳では確認していない（TechCrunch は Base が名付けたと述べる）。

### S29 WebDesignerDepot「Stop Asking ‘Is This on Brand?’」（Louise North）

> But consistency, once revolutionary, has calcified into dogma.
> You no longer need permission to design something — you need permission to deviate
> Designers spend more time policing brand guidelines than breaking them.

- 媒体・日付: WebDesignerDepot, 2026-02-02, 筆者: Louise North（同サイトのスタッフライター）
- URL: https://webdesignerdepot.com/stop-asking-is-this-on-brand-its-killing-your-creativity/
- 取得日: 2026-11-15
- 検証区分: C（批判・論評側（オピニオン記事））
- 備考: 「ブランドの一貫性」至上主義への批判。Rand の IBM や Vignelli の NYC 地下鉄を、一貫性が革新だった例として挙げた上で、現在はガイドラインが審査・統制の道具になっていると主張する。主張の根拠となる調査は示されておらず、事実の出典にはならない。

### S30 Creative Bloq「Why you need to adopt a 'fix and flex' approach to branding」（Scott Lambert）

> First thing’s first, forget consistency in itself. It’s the classic trap.
> the more complex the rules, the more likely it is that your team stops following them and hopes you don’t notice.

- 媒体・日付: Creative Bloq, 2024-10-28, 筆者: Scott Lambert
- URL: https://www.creativebloq.com/design/branding/why-you-need-to-adopt-a-fix-and-flex-approach-to-branding
- 取得日: 2026-11-15
- 検証区分: C（批判・論評側（寄稿記事））
- 備考: 固定する資産（名称・色・ロゴ・書体など）と柔軟な資産を分ける「fix and flex」の主張。一貫性そのものを目的にするな、という意見。規則が複雑になるほど守られなくなる、という指摘はガイドライン設計の注意点に使える（主張であり、実証はされていない）。

### S31 Wally Olins（遺作『Brand New: The Shape of Brands To Come』巻末の言葉。It's Nice That による再掲）

> Great symbols – logos, the visual manifestations of the brand – tug at the heartstrings.
> Branding is getting too complex.
> Don’t let process drive it. Fundamentally, branding is easy to understand.
> Where there’s strong, committed leadership, a branding programme will take root and become an intrinsic part of the institutional fabric.

- 媒体・日付: It's Nice That, 2014-04-23（Wally Olins 没後の再掲。Thames & Hudson 2014 年刊の書籍からの抜粋）
- URL: https://www.itsnicethat.com/articles/opinion-wally-olins
- 取得日: 2026-11-15
- 検証区分: B（書籍の一部を媒体が出版社の許可を得て再掲したもの。原書との照合はしていない）
- 備考: Wolff Olins 共同創業者（1965 から 1997 年の会長。Designboom のインタビュー記載）の晩年の見解。ブランディングを複雑にしすぎない、指導層の関与がなければプログラムは形骸化する、という 2 点がガイドライン運用の注意に使える。Wolff Olins の個別の仕事（London 2012 など）についての Olins 本人の発言は取得していない。

### S32 工業所有権情報・研修館（INPIT）「J-PlatPat 利用上のご案内」

> J-PlatPatは、産業財産権情報に関する基本的な情報を標準的な形で検索・利用するよう設計されています。したがって、提供される情報の内容や検索機能は基本的なものに限定されています。
> 高度な検索や高い付加価値のついた情報へのアクセス（いわゆるプロフェッショナル・ユース）については、民間の特許情報提供事業者が行っているサービスを利用することをお勧めいたします。
> J-PlatPatで提供する情報の利用の結果発生するいかなる損害に対しても、特許庁及びINPITは一切責任を負いません。

- 媒体・日付: INPIT 公式サイト（最終更新 2026-04-01）
- URL: https://www.inpit.go.jp/j-platpat_info/guide/j-platpat_notice.html
- 取得日: 2026-11-15
- 検証区分: A（独立行政法人の公式ページ）
- 備考: 日本で商標を調べる無料の公的データベース J-PlatPat の提供者自身が、機能は基本的なものに限られる、高度な調査は民間サービスを勧める、情報の利用による損害に責任を負わない、と述べている。ブランドの制作側が J-PlatPat で「見つからなかった」ことを「使ってよい」と読み替えない、という線引きの根拠。特許庁（jpo.go.jp）の商標 FAQ は curl で 403 となり取得できていない。

### S33 W3C「Understanding Success Criterion 1.4.3: Contrast (Minimum)」（WCAG 2.2）

> The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:

- 媒体・日付: W3C「Understanding WCAG 2.2」の達成基準 1.4.3 の解説（掲載日の記載なし）
- URL: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- 取得日: 2026-11-15
- 検証区分: A（W3C の公式文書）
- 備考: 文字と背景のコントラスト比が 4.5:1 以上という基準（例外あり）の出典。引用が述べるのは 4.5:1 と「例外がある」ことまでで、例外の中身（大きい文字の比率など）は引用の範囲外のため未照合。非文字（UI 部品・図形）の 3:1 は別の達成基準で、この台帳では取得していない。ロゴ・ブランド名の扱いも引用の範囲外のため、本 skill はロゴの合否の根拠に使わず、文字と背景の組を 4.5:1 以上にそろえる判断の根拠にだけ使う。相対輝度の式は WCAG の定義に従って計算する。

### S34 Hikaru Sudo（Goodpatch）

> 目的があいまいなまま進めてしまうと収束が難しくなり、場当たり的なピボットを繰り返して無駄なコストを払うことにもなりかねません。

- 媒体・日付: 生成AIが作るプロトタイプは、本当にサービスづくりの近道になるのか？
- URL: https://goodpatch.com/blog/2026-08-ai-prototype
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 目的（誰に・どんな課題・どうなるか）を仮説でも先に言葉にしておくと、収束の判断軸になる、という主張

### S35 Michael Bierut（Pentagram パートナー）

> It follows that every design presentation is inevitably, at least in part, an exercise in bullshit. The design process always combines the pursuit of functional goals with countless intuitive, even irrational decisions.

- 媒体・日付: On (Design) Bullshit（Design Observer、2005-05-09）
- URL: https://designobserver.com/on-design-bullshit/（取得した版: https://web.archive.org/web/20261023042415/https://designobserver.com/on-design-bullshit/）
- 取得日: 2026-11-15
- 検証区分: A（本人のエッセイ。Wayback の保存コピーで照合）
- 備考: 直接の取得は拒否された（403）ため、以前に取得した保存コピーの本文で照合した（2026-11-16 の再取得による照合ではない）。機能の要件（測れる）と直感の判断（説明しきれない）を分け、提示の場では後者が過剰に理屈づけられるという実務者の自己批判。提案と合意形成の注意点

### S36 Michael Bierut（Pentagram パートナー）

> Before I could commit to a design decision, I needed to have an intellectual rationale worked out in my mind. I discovered in short order that most clients seemed grateful for the rationale as well. It put aside arguments about taste; it helped them make the leap of faith that any design decision requires

- 媒体・日付: On (Design) Bullshit（Design Observer、2005-05-09）
- URL: https://designobserver.com/on-design-bullshit/（取得した版: https://web.archive.org/web/20261023042415/https://designobserver.com/on-design-bullshit/）
- 取得日: 2026-11-15
- 検証区分: A（本人のエッセイ。Wayback の保存コピーで照合）
- 備考: 直接の取得は拒否された（403）ため、以前に取得した保存コピーの本文で照合した（2026-11-16 の再取得による照合ではない）。理屈づけが「趣味の議論を脇に置き、決断の飛躍を助ける」という効用を認めた箇所。提案で根拠を示す価値と限界の両方の根拠

### S37 Sarah Gibbons（Nielsen Norman Group）

> It is nearly impossible to improve a design without feedback from others. Their input helps you avoid mistakes and thus create higher quality work.

- 媒体・日付: Design Critiques: Encourage a Positive Culture to Improve Products（NN/g の記事、2016-10-23）
- URL: https://www.nngroup.com/articles/design-critiques/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 批評の目的についての NN/g の主張（調査機関の自称）。批評が品質を上げるかを第三者が検証したものではない

### S38 メルカリデザイン

> 実際に作ったプロトタイプは数百種類。試行錯誤を重ねて新しいロゴマークを決定しました。

- 媒体・日付: Hello new logo（メルカリ ロゴ刷新の公開ページ。日付の記載なし）
- URL: https://design.mercari.com/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ロゴの刷新で数百の試作から絞った、という企業の自称。複数案を出して絞る型の国内例

### S39 AI の提供元の公開文書「frontend-design」（公開リポジトリの設計指針。Apache License 2.0。制作の進め方）

> Spend your boldness in one place. Let one element be the memorable thing, keep everything around it quiet and disciplined, and cut any decoration that does not serve the brief.

> fade-and-slide-up entrances on each section and hover transitions on every card are the generic default and read as AI-generated.

> The subject's industry, subject matter, materials, and vernacular are where distinctive visual choices come from

> Typography carries the personality of the page.

> Then review that plan against the brief before building: if any part of it reads like the generic default you would produce for any similar page (work through a similar prompt to see if you arrive somewhere similar) rather than a choice made for this specific brief — revise that part, say what you changed and why.

> Build to a quality floor without announcing it: responsive down to mobile, visible keyboard focus, reduced motion respected, visually accessible, harmonious color palettes.

- 媒体・日付: AI の提供元の公開リポジトリ（取得時点。URL 参照）。時点情報
- URL: https://raw.githubusercontent.com/anthropics/skills/41bbe19d1a1a7eaab5e7bb9050a417e5c6cffc8f/skills/frontend-design/SKILL.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 『大胆さは 1 か所に使う』『全セクションのフェードインと全カードのホバーは定型』『被写体の業界・素材・言い回しが、独自の見た目の出どころ』『書体がページの人格を運ぶ』『作る前に、方針が同種の依頼で誰でも出す既定の案になっていないかを見直し、変えた点と理由を言う』という指針。品質の下限として、モバイル対応・キーボードフォーカス・reduced motion・アクセシブルな配色を挙げる（同ファイル）。URL は main ではなく、取得日時点でこのファイルを最後に変えたコミットに固定した。再取得したら、差分を人が確認してから台帳へ反映する。LICENSE は同じ版の skills/frontend-design/LICENSE.txt で Apache License と確認した（2026-11-16）。

### S40 Sam Goree・Bardia Doosti・David Crandall・Norman Su「Investigating the Homogenization of Web Design: A Mixed-Methods Approach」（プロジェクトページ）

> we show that designs have become significantly more similar since 2007, especially for page layouts where the average distance between sites decreased by over 30%.

> Synthesizing interviews from 11 experienced web design professionals with our computational analyses, we discuss causes of this homogenization including overlap in source code and libraries, color scheme standardization, and support for mobile devices.

- 媒体・日付: CHI ’21 の研究の公式プロジェクトページ（cv-web-history.neocities.org）, 2021（ページの日付は未確認）
- URL: https://cv-web-history.neocities.org/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Web のデザインの均質化を、2003〜2019 年の代表的サイトの画像で測り（レイアウトの距離が 30% 超縮小）、デザイナー 11 名のインタビューで原因（共有コード・ライブラリ、配色の標準化、モバイル対応）を論じた研究の、著者自身の要約。PDF 本体は取得できず（旧 URL は移転）、取得したのは著者のプロジェクトページの要約。サンプルは英語圏の企業・Webby 候補サイトに偏る（同ページ）

### S41 モノサス（制作会社）「この会社で働きたくなる、採用サイトのつくりかた 第 3 回 デザインイメージの伝え方」

> とにかく、数多く見ることです。多い分には構いませんので、最低30サイトを目標に見てください。

> 気に入ったサイトを3つほど選び、そのサイトのなにが好きなのか、良いと思った点はなにか、を書き出します。

- 媒体・日付: モノサスのマガジン, 2016-09-02
- URL: https://www.monosus.co.jp/magazine/m47tfwzsgormcunr2gqo7980
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 制作会社の担当者が、発注側に向けて『デザインのイメージを制作会社に伝える準備』を説明した記事（採用サイト向け）。参考サイトを最低 30 見て、好きな 3 つの理由（配色・写真・動き）を書き出す、という手順。『最低 30』は本記事の目安で、研究の裏づけは書かれていない

### S42 MDN「<picture>」

> You can swap image assets for light and dark themes using the prefers-color-scheme media feature:

> <source srcset="logo-dark.png" media="(prefers-color-scheme: dark)" />

- 媒体・日付: MDN Web Docs（ページの最終更新 2026-10-01）
- URL: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture
- 取得日: 2026-11-16
- 検証区分: A
- 備考: `<picture>` の `<source media="(prefers-color-scheme: dark)">` で、ライトとダークの画像資産を差し替える用法。1 つ目の引用の末尾のコロンの後に、ライト用とダーク用の 2 つの `<source>` を並べる HTML の例が続き、2 つ目の引用はその 1 行目（ダーク用）。端末の配色設定に基づく差し替えで、ページ側の `color-scheme` の指定への追従は、この文からは分からない

### S43 MDN「prefers-color-scheme」

> The prefers-color-scheme CSS media feature is used to detect if a user has requested light or dark color themes.

> It’s been available across browsers since January 2020.

- 媒体・日付: MDN Web Docs（ページの最終更新 2026-11-10）
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 利用者が求めたライトかダークの配色を CSS で検出するメディア特性。ページの冒頭に Baseline の「Widely available」の表示がある。対応状況は取得日時点の記述で、時点情報

### S44 MDN「light-dark()」

> The light-dark() CSS function accepts two colors or two images and returns a color or an image based on the active color scheme, without needing a prefers-color-scheme media feature.

> To enable support for the light-dark() color function, the color-scheme must have a value of light dark, usually set on the :root pseudo-class.

> Baseline 2024 Newly available Since May 2024, this feature works across the latest devices and browser versions.

- 媒体・日付: MDN Web Docs（ページの最終更新 2026-11-10）
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 有効な配色に応じて 2 つの色（または画像）の一方を返す CSS 関数。使うには `color-scheme` に `light dark` を指定する。Baseline の表示は「Newly available」で、2024 年 5 月以降の最新の端末・ブラウザーで動くと書く（古い版では動かない可能性がある）。画像の形式の対応は、この台帳では確かめていない

### S45 MDN「color-scheme」

> The color-scheme CSS property allows an element to indicate which color schemes it can comfortably be rendered in.

- 媒体・日付: MDN Web Docs（ページの最終更新 2026-07-21）
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 要素が描画できる配色（ライト・ダーク）を示す CSS プロパティ。`light-dark()` が使う配色は、このプロパティの値に基づく（S44）

### S46 W3C「Understanding Success Criterion 1.4.3: Contrast (Minimum)」（WCAG 2.2。ロゴの扱い）

> Text that is part of a logo or brand name has no contrast requirement.

> Text used as part of a logo or logotype is exempted from contrast requirements, under the assumption that logos/logotypes must comply with stricter color choices mandated by corporate identity or brand guidelines. However, this can be problematic when logos or logotypes act as user interface components (such as a link or other interactive control). While not normatively required, in these cases authors are encouraged to choose a variant of the logo or logotype that has sufficient text contrast, if allowed by the corporate identity or brand guidelines.

- 媒体・日付: W3C「Understanding WCAG 2.2」の達成基準 1.4.3 の解説（掲載日の記載なし）
- URL: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: S33 と同じページ。ロゴ・ブランド名の文字は文字のコントラスト比の要求から除かれる、ただしロゴがリンクなどの UI 部品のときは、十分なコントラストの版を選ぶことが勧められる（規範ではない）、という記述。S33 の 4.5:1 の基準を、ロゴに当てはめる根拠にはしない。本 skill は、ロゴが載る面とのコントラスト比を、判断のために計算して示す（本 skill の整理）。図形（文字でない部分）への基準は、この台帳では未照合

### S47 MDN「forced-colors」

> The forced-colors CSS media feature is used to detect if the user agent has enabled a forced colors mode where it enforces a user-chosen limited color palette on the page.

> On normal text it will be forced to CanvasText.

> It’s been available across browsers since September 2022.

- 媒体・日付: MDN Web Docs（ページの最終更新 2026-04-20）
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/forced-colors
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 利用者が選んだ限られた配色をブラウザーが強制するモード（例は Windows のハイコントラスト）を、CSS で検出するメディア特性。2 つ目の引用は、強制色モードで通常の文字の色が CanvasText に強制されるという記述。ページの冒頭に Baseline の「Widely available」の表示がある。ページは、強制される値の一覧に「SVG fill attribute」を挙げるが、CSS の規則で指定した `fill` が強制されるかは、この文から分からない（本 skill の描画では、規則で指定した `fill` は強制されなかった。`examples/logo-dark-mode.md` の点検）。`<picture>` の画像の色が強制されるかも、この台帳では確かめていない

## 引用ではない参照（事実の根拠）

逐語引用はせず、事実（誰が・いつ・何を）の根拠としてだけ使う。

| 事実 | 根拠 | 区分・備考 |
|---|---|---|
| 1970 年の NYC Transit Authority Graphics Standards Manual の設計者は Massimo Vignelli と Bob Noorda（Unimark） | Standards Manual（独立の出版社）のトップページの商品説明 https://standardsmanual.com/ （2026-11-15 取得） | R。再刊の販売元の説明。マニュアル本体・制作経緯の一次資料は未取得 |
| Vignelli が文章でロゴの変更に慎重だった | S06 | A |
| Pentagram のパートナー Michael Bierut が MIT Media Lab のアイデンティティ（2014 年とされる）を担当 | S13（Partner の欄）。採用年は同ページに無い | A（年は未確認） |
| London 2012 のエンブレムは Wolff Olins のデザイン、発表は 2007 年 6 月（月曜日） | S26、S27 | R。発表日は S27 の記事日付（2007-06-05）と「Monday」の記述から読む |
| Wally Olins は Wolff Olins の会長（1965 年から 1997 年） | Designboom のインタビュー冒頭の紹介文 https://www.designboom.com/design/interview-with-wally-olins-of-saffron-brand-consultants-02-20-2014/ （2026-11-15 取得） | R。媒体の紹介文 |
| 東京 2020 エンブレムの経過（2015-07-24 発表、2015-08-05 作者が記者会見で独自性を主張、2015-08-28 選考過程の説明、2015-09-01 使用中止） | S17 の「大会エンブレム発表以降の経過」 | R。東京都の資料 |
| IBM の 8 本線ロゴは 1972 年、City Medium 化は 1956 年起用後 | S05 | R。企業の沿革 |
| NASA の旧エンブレム（"meatball"）は 1950 年代後半の図案で、1992 年に再び主役に戻り、2020 年に "worm" が復活 | S08 | A（NASA 公式）。年は NASA の記述 |
| 1964 年東京五輪の公式ポスター第 4 号の AD は亀倉雄策、写真は早崎治 | S22 | R。美術館のデータ |

## 未検証・伝聞

流通しているが、この台帳では出典を確認できていない。事実・引用として使わない。

| 内容 | 状況 |
|---|---|
| "Design is thinking made visual"（Saul Bass の言葉として流通） | 一次の出典を取得していない。発言の場・日付も未確認 |
| Rand が Steve Jobs に告げたとされる「問題は解決する。気に入らなくても支払ってもらう」という趣旨の言葉 | S03 の Blueprint 記事にある NeXT の逸話（Rand が Jobs に抱擁を求められた話）とは別の文。一次の出典を取得していない |
| NeXT のロゴの報酬額（10 万ドル） | 取得した出典に記載がない |
| Tropicana（2009）のパッケージ変更の影響（売上の減少率・損失額）、Gap（2010）の新ロゴの費用 | Bierut（S12）の言及と Gap 声明の報道（S24、S25）のみ。数値は取得していない |
| London 2012 エンブレムの費用 40 万ポンド | S27 は約 80 万ドルと記載。ポンド建ての出典は取得していない |
| MIT Media Lab の 2011 年のロゴが 4 万通りの変化形を持つ | Pentagram の案件ページ（S13）は seven-by-seven grid の記述のみ。年と変化形の数は検索結果の要約にしかない |
| 亀倉が締切を忘れかけ、その場で赤鉛筆を使って短時間で案を描いた逸話 | テレビドラマの描写を紹介する記事の要約のみ。事実として使わない |
| 亀倉が大会組織委員会のデザイン顧問を断り、代わりに公募コンペを提案した経緯 | 記事の要約のみ。S21 の「6 人のデザイナーによるコンペ」の記述と食い違う可能性がある |
| 田中一光が無印良品のアートディレクションに就いた年・経緯 | S10 は Hara が田中の考え方を引き継いだと述べるのみ。年は取得していない |
| 「blanding」の初出・命名者（Bloomberg の記事とする説と、Base Design とする説） | S28 は Base の文章で、命名の主張は本文にない。どちらも検索結果の要約にしかない |
| IBM のロゴの年（S05 の本文は 1956 年起用、ロゴの一覧は 1957 と表記） | 同じページ内で食い違うように読める。どちらが正しいかは未確認 |

## 調査の限界

- 取得できなかった出典（各 2 回まで試行: 直接取得と Wayback）
  - The New York Times の Tropicana 記事（2009-02-23）。URL は推測で 404 となり、Wayback は 429
  - IOC（olympics.com）の Tokyo 1964 ページ。curl の接続を拒否し、Wayback は 429
  - LA84 の 1964 年東京大会公式報告書。公開 API の download は 1 ページ分の PDF しか返さなかった
  - 特許庁（jpo.go.jp）の商標 FAQ・「商標を検索してみましょう」。curl は 403、Wayback は 429
  - NHS England の identity guidelines（NHS ロゴ・余白・最小サイズ）。応答が空（HTTP 202）で、Wayback は 429
  - TheGreenEyl による MIT Media Lab 2011 のアイデンティティのページ。404 と Wayback の 429
  - Quartz・Fast Company・The Fashion Law・Design Observer の新サイト（403）。Brand New の Gap 記事（購読者限定）
- 薄い論点
  - Saul Bass、Unimark・NYC Transit Authority の本文、Wolff Olins 自身の London 2012 の説明は一次資料を取得していない
  - 可変アイデンティティは Pentagram の案件ページ（S13）だけ。2011 年の原作の記述は未取得
  - 日本の企業 CI は、亀倉本人の言葉を取得できていない（S21 は出典不明の再話）。田中一光本人の発言、原研哉の著書（『デザインのデザイン』など。書籍のみ）、佐藤可士和の他の発言も未取得
  - 最小サイズ・余白の数値は S14（英国政府）と S07（NASA のデカールのみ）だけ。OSS 団体のガイド（S19、S20）は本文に数値がない
  - 批判は 4 本（S04、S28、S29、S30）。一貫性への批判（S29、S30）は意見記事で、実証は示されていない
- 進め方の出典（S34 から S41）は、組織・実務者の自称と批評の記事で、進め方の有効性を第三者が確かめたものではない。ブランドに限った進め方の出典は、Bierut の随筆（S35、S36）とロゴ刷新の自称（S38）だけ。S40 は Web の研究の著者の要約で、ロゴへは類比にとどまる。S39 は AI の提供元の公開文書で、更新で書き換わりうる（固定した版で取得した）
- ロゴのダークモードの出典（S42 から S47）は MDN と W3C の記述。Baseline の表示は取得日時点で、古いブラウザー・端末の対応は未確認。`<picture>` がページの `color-scheme` の指定に追従するかは、MDN の記述から分からず、本 skill が 1 つの環境で描画して確かめた範囲にとどまる（`examples/logo-dark-mode.md` の点検）。メールクライアントや外部サービスでの SVG の扱いは未確認
- paulrand.design は非公式の転記で、Rand の文章・発言（S01 から S04）は区分 B に留まる。AIGA などの原典の照合は未取得
- Wayback Machine は短時間の連続アクセスで 429 を返す。S09・S10・S12 は保存コピーで照合した
- 本台帳の記述は、S01 から S33 が 2026-11-15 時点、S34 以降は各項目の取得日の時点。ガイドライン（NHS・GOV.UK・CNCF・PSF・USPTO・INPIT）は各組織が随時改訂する

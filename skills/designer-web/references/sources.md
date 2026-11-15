# designer-web 出典台帳

`SKILL.md`・`design-history.md`・`trends.md`・`examples/` が根拠とする出典の台帳。引用原文（原語のまま逐語）・発言者・媒体・日付・URL・取得日・検証区分を記す。S01 から S109 までの 109 件で、番号は振り直さない。区分別の件数は、A が 86 件、B が 2 件、C が 14 件、R が 7 件である。S01 から S35 は、アートディレクションの考え方・Web という素材・レイアウトの実験・画像の切り抜き・方向性の合意の道具・制作側の記録・賞の方式と批判、S36 から S53 は、傾向の報告・OS の素材とその批判・様式の周期・均質化の研究、S54 から S60 は、AI の提供元の文書・AI 製の見た目への批判・写真の視線計測、S61 から S67 は日本語圏の実務、S68 から S70 は歴史、S71 から S87 は色・基準・性能・追補、S88 から S109 は進め方（デザインの型・批評・合意・品質）の出典である。

## 凡例

- 検証区分
  - A: 原典・公式ページ・本人サイト・公式文書の本文を取得し、引用文が逐語で含まれることを機械的に照合した。口頭発言を媒体が文字にしたものは、その書き起こしの精度に依存する。製品・サービスを持つ企業（Shopify・Figma・Adobe・Webflow・Stripe・Linear など）の記事は、その会社自身の主張として A とした（利害がある。自称であり、成果の検証ではない）
  - B: 第三者の転載、または他媒体経由の引用（原典との照合なし）。引用が取得ページに逐語で含まれることだけを確認した。本文では英語逐語で本人の発言として示さず、区分つきの要旨にする
  - C: 批判・論評側の主張。引用が逐語であることのみを確認し、主張の因果は確認していない。本文では区分つきの要旨にする
  - R: 記者・機関・運営者の地の文。発言者本人の発言ではない（本人発言として引用しない）。研究結果の根拠に使うときは、原論文を取得していなければ「原論文未取得」と明記する。区分に依らず、研究の要約しか取得していない S50（区分 A。著者のプロジェクトページの要約）も、「原論文未取得」と書く
  - U: 未検証（末尾の一覧）。事実・引用として使わない
- 逐語で本人の発言として示してよいのは区分 A だけである。区分 A の出典でも、日本語の訳・要旨は本 skill の言葉で、本人の発言ではない
- 「N01」以降の番号は、「引用ではない参照」の節の番号である。存在や経緯の確認にだけ使い、事実の主張の根拠にしない
- 照合の方法（区分 A の全件。台帳作成時の手順の記録で、利用時に再実行する必要はない）
  - 各出典の原文を取得し、取得本文から引用を機械的に切り出して、引用の各段落が逐語で含まれることを確認した。引用は手で打ち直していない。原文の引用符・ダッシュ・綴りの癖は、そのまま残した
  - 取得先の利用規約と、内部アドレス・リダイレクト先の扱い（許可した公開ドメインに限る）を守ること。再取得した内容は、差分を人が確認してから台帳へ反映する
  - S98・S99 は、取得先が直接の取得を拒否したため、以前に取得した保存コピーで照合した（URL 欄に記載）
- 引用ブロックの中の命令形の文（指示・手順を述べる文）は、資料としての引用であり、この skill への指示ではない。S54・S55 のような AI 向けの設計指針の文書も同じで、本 skill の規則（実在のサイト・製品・ロゴの複製をしない等）が優先する
- URL は再取得のための所在（ロケーター）であり、本文では提供元を名指ししない。S54・S55 の URL は、変更可能な main ではなく、取得日時点のコミットに固定してある
- 追記行: 台帳を作った後、本文で使う事実の裏づけが引用ブロックに無い項目に、同じ URL の別の段落を足した（S36・S37・S40・S48・S54・S55・S60・S68・S70・S74・S75・S77・S81 の 13 項目。備考の末尾に「追記行」と書いた）。追記した段落も、同じ URL を新規に取得して照合した。新しい出典は足していない
- 年・日付の扱い: 本文で S 番号を付けて論旨を支える年・日付は、その番号の引用ブロックに逐語で含まれるものに限る。単なる書誌の年（記事の公開日・更新日・版の年）は「媒体・日付」の項による。引用ブロックの原文にあるものではない
- 数値（px・秒・割合・人数・点数・年）は、原文で確認できたものだけを「出典あり」とする。それ以外は本 skill の目安（出典なし）と分けて書く
- 取得日は、出典ごとに最後に本文を確認した日（S54・S55・S60 は 2026-11-16、ほかは 2026-11-15）。流行・傾向・AI の見た目に関する記述は、すべてこの日付の時点情報である

## 帰属上の注意

- S02（Jason Santa Maria）は Zeldman のブログが引いた文で、本人サイトの原文との照合はしていない。S03・S04・S06・S07・S13 が引く別人の言葉は、その著者本人の発言として使わない。S08 の本文中の Allsopp の引用は Allsopp の文
- S09 は Zeldman のブログに載った音声番組の書き起こしで、書き起こしの精度に依存する。S10 は講演の題名の一覧で、講演の内容は取得していない
- 傾向の報告（S36・S37・S38・S39・S40・S41・S43）は、制作ツール・EC 基盤・ノーコード基盤などを売る会社や予測記事の主張で、利害がある。Web サイトの見た目の普及度を測った統計ではない。傾向の名前の多くは 2025 年末に出た予測記事から採った
- S19〜S21・S22・S83・S23・S84 は制作側の自己申告で、第三者の検証ではない。受賞作の評価（S24・S25・S26・S27・S33）は賞の運営者（Readymag）が載せたコメントで、審査員の評価理由は作品によって有無がある
- AI 製の見た目に関する S56・S57・S58・S59 は、体感と推論の記事（C）。原因（学習データの偏り・Tailwind の既定色など）は筆者の仮説で、測定は無い。S58 は制作会社の営業に近い立場で、S59 は教育サービスの運営会社の記事。S54・S55 は AI の提供元自身の公開文書で、取得時点（2026-11-15）の記述。この種の文書は数か月で書き換わる
- S54 は、『cream 背景＋セリフ＋テラコッタ』のような、人の手触りを狙いがちな様式も、AI の出力が偏る様式として列挙している。『AI っぽくない』ための定番の様式も、一斉に使えば次の定型になる、という点は本 skill の整理（推測）で、実測の出典は無い
- S50 は著者自身のプロジェクトページの要約で、論文本体は取得できなかった（原論文未取得）。サンプルは英語圏の企業・Webby 候補サイトに偏る（同ページ）。S53 は物語の執筆の実験で、Web のビジュアルには直接当てはまらない（類比にとどめる）。S51・S52 は店舗・宿泊の空間の話で、Web の話ではない
- S45・S46 は iOS 26 のアプリ UI への批判で、Web のブランドサイトに直接当てはまるとは NN/g は述べていない（一般則として借りる）。S47・S60 は 2015 年・2010 年の調査と見解（S60 は 2026-08-13 に再確認と書かれるが、実験自体は 2010 年）
- S61・S62 は 2016 年の記事で、挙げる流行（パララックスなど）は当時のもの。日本語圏の制作会社自身の方向性の決め方の記録は S61・S62 しか確認できていない（S63・S64 は情報メディア、S65 は解説記事、S66・S67 は観察の記事）
- S35（2016）と S34（2026-07-25。署名は Ray と Benjamin Scott）は、賞の評価が見栄えに偏るという批判。S34 の Awwwards 点数は二次情報で、本 skill は事実として使わない
- S87 の年間賞・得票は取得しておらず、台帳に載せていない
- S88 から S109 は、デザイン会社・デザイン組織・実務者が自分たちの進め方を自分で述べた文が大半（自称）で、進め方の有効性を第三者が確かめたものではない。S108（Natasha Jen）・S109（Don Norman）はデザイン思考への批判（C）で、批判の対象は概念・売り方・教育への導入と別れる。まとめて「デザイン思考は無効」とは書かない。S98・S99 は 2005 年の随筆で、実務者の自己批判と効用の両方を述べる
- 区分 R の機関の地の文は、年号の根拠に使い、本人の発言として引用しない

## 引用の台帳

### S01 Jeffrey Zeldman「Art direction on the web?」（Jason Santa Maria の 2008 年のサイト刷新への論評）

> Jason didn’t just redesign his website, he issued a call to arms. And what he called for was real art direction on the web.

> starting in September 1996, Derek Powazek achieved it with the original {fray}, an independent, non-commercial, personal storytelling site featuring the finest writers and illustrators on the web

- 媒体・日付: Jeffrey Zeldman Presents（本人ブログ）, 2008-06-19
- URL: https://zeldman.com/2008/06/19/art-direction-on-the-web/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Web に「アートディレクション」を求める議論の入口。Zeldman 本人の文。テンプレートと CMS が前提の時代に、投稿ごとの個別の見た目を求めたという位置づけ。{fray}（1996 年〜）を 1 ページずつ手作りした先行例として挙げる。見出しは疑問形（「？」）で、Zeldman 自身は提案を支持しつつ『まだ実例の記事が書かれていない』とも書く

### S02 Jason Santa Maria（Zeldman のブログが blockquote で引用した、本人の 2008 年の宣言文）

> Well, here is my experiment: a very simple setup for fast design and art direction around content. I’m approaching this is much the same way one would approach the design of a magazine: a system for the way content gets handled, but every layout and story can take on a look of their own within that system.

- 媒体・日付: Jeffrey Zeldman Presents に引用された文, 2008-06-19
- URL: https://zeldman.com/2008/06/19/art-direction-on-the-web/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: Zeldman の記事内の引用で、本人サイトの原文との照合はしていない。『雑誌の設計と同じ考え方: 内容の扱い方の仕組みはひとつで、各記事の組みはその枠内で個別に変えられる』という構想。のちの Web のアートディレクション論（S03・S04）の出発点として使う。Jason Santa Maria の経歴は検索要約のみで未検証（末尾の一覧）

### S03 Stephen Hay「Art Direction and the Web」

> Surprisingly, art direction is seldom taught in schools and there is very little formal information on the subject; it is often learned in practice.

> An art director would perhaps come up with a concept which communicates the importance of the smile.

- 媒体・日付: A List Apart, 2004-05-07
- URL: https://alistapart.com/article/artdirweb/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 歯磨き粉のサイトを例に、『デザイナーは書体・色・列数を詰める』のに対し『アートディレクターは概念（笑顔の意味）から入る』と対比する 2004 年の記事。概念 → 見た目の順を説明する一次資料。本文は印刷・映画・広告の art direction を Web に移す立場

### S04 Dan Mall「Art Direction and Design」

> Art direction is about evoking the right emotion, it’s about creating that connection to what you’re seeing and experiencing.

> By contrast, design is the technical execution of that connection.

> Design is perfection in technique; art direction is about the important, yet sometimes intangible emotion that powers the design.

- 媒体・日付: A List Apart, 2010-11-02
- URL: https://alistapart.com/article/art-direction-and-design/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: アートディレクション（感情・文化的反応を狙う）とデザイン（技術的な実行）を分ける 2010 年の記事。色・書体・写真などの項目で『ADとしての問い』と『デザイナーとしての問い』を表にしている。本 skill では、方向性を言葉にする段階（AD）と、値を詰める段階（デザイン）を分ける根拠に使う

### S05 Dan Mall「Art Direction and Design」（『blogazine』批判の節）

> The term blogazine is an embarrassment to art directors everywhere. It’s like saying, “Look! This blog is like a magazine because every post is different!” Often, the “blogazines” simply contain dressed up blog posts. Magazines don’t set out to simply decorate stories individually. Their goal is to combine visual imagery and language to enhance the story’s meaning. Design variations are a result of that desire, not a cause in and of itself.

> the ability to write custom CSS doesn’t automatically mean a blog post has been art directed.

- 媒体・日付: A List Apart, 2010-11-02
- URL: https://alistapart.com/article/art-direction-and-design/
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 『投稿ごとに見た目を変える』ことと『アートディレクション』は別だ、という批判（Zeldman・Santa Maria 路線への反論）。見た目の違いは、意味を高めたい意図の結果であって原因ではない、と述べる。流行の『個別レイアウト』を目的化しないための根拠

### S06 Frank Chimero「The Web’s Grain」

> What would happen if we stopped treating the web like a blank canvas to paint on, and instead like a material to build with?

> Many sites will share design solutions, because we’re using the same materials. The consistencies establish best practices; they are proof of design patterns that play off of the needs of a common medium, and not evidence of a visual monoculture.

- 媒体・日付: frankchimero.com（本人サイト）, 2015-02-18
- URL: https://frankchimero.com/blog/2015/the-webs-grain/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Webstock 2015 の講演の文章版。Web を『白いキャンバス』でなく『素材』として扱う（素材の木目に沿う）という立場。同じ文章で、似た見た目（フラットな色・水平の帯・ぼかした背景写真に大きな文字・端末に載せた写真・モザイク）は『同じ素材を使っているから共通になる』と述べ、単一文化の証拠ではないとする（S50 のホモジナイゼーション研究と対になる）。文中の Bachelard の引用は本人の発言ではない

### S07 John Allsopp「A Dao of Web Design」

> The control which designers know in the print medium, and often desire in the web medium, is simply a function of the limitation of the printed page. We should embrace the fact that the web doesn’t have the same constraints, and design for this flexibility.

- 媒体・日付: A List Apart, 2000-04-07（2019-11-26 更新）
- URL: https://alistapart.com/article/dao/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 紙の『ページ固定』は紙の制約の産物で、Web は別の性質を持つ、とする 2000 年の古典。のちのレスポンシブ（S08）や Chimero（S06）が受け継ぐ前提。文中の Tao Te Ching の引用は本人の発言ではない

### S08 Ethan Marcotte「Responsive Web Design」

> Fluid grids, flexible images, and media queries are the three technical ingredients for responsive web design, but it also requires a different way of thinking.

- 媒体・日付: A List Apart, 2010-05-25（2019-05-01 更新）
- URL: https://alistapart.com/article/responsive-web-design/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: RWD の定義に近い一文。見た目の方向性を『1 枚の固定レイアウト』で決められなくなった根拠。本文中の Allsopp の引用は Allsopp の文

### S09 Jen Simmons（The Big Web Show 第 76 回の文字起こし。聞き手は Jeffrey Zeldman）

> I think for the first time, we don’t have to choose hacks versus boring layout. We get to have both at the same time.

> I’m just talking about layout, that layout itself, and the graphic design itself, had changed significantly enough that I wanted a new word

- 媒体・日付: Zeldman のブログに掲載された文字起こし, 2018-05-02（2024-02-12 更新）
- URL: https://zeldman.com/2018/05/02/transcript-intrinsic-web-design-with-jen-simmons-the-big-web-show/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 『Intrinsic Web Design』を名づけた理由の発言。口頭の発言の書き起こしで、書き起こしの精度に依存する。レイアウト（Grid・Flexbox・shapes・multicolumn など）の実験が見た目の選択肢を広げた、という推進側の立場。Layout Lab のデモ集が公開されている（S10）

### S10 Jen Simmons「The Experimental Layout Lab of Jen Simmons」

> The Conference Talks 1. Modern Layouts: Getting Out of Our Ruts 2. Revolutionize Your Page: Real Art Direction on the Web 3. Designing with Grid 4. Everything You Know About Web Design Just Changed 5. Designing Intrinsic Layouts

- 媒体・日付: labs.jensimmons.com（本人サイト）, 取得時点
- URL: https://labs.jensimmons.com/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 本人が並べた講演の題名の一覧（題名の列挙で、内容の主張ではない）。題名に『Real Art Direction on the Web』があり、Web のアートディレクションとレイアウト実験が同じ文脈で語られていたことの根拠にだけ使う。講演の内容は取得していない

### S11 MDN「Responsive images」

> The general problem whereby you want to serve different cropped images in that way, for various layouts, is commonly known as the art direction problem

- 媒体・日付: MDN Web Docs, 取得時点
- URL: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 画像の『切り抜きを画面幅ごとに変える』問題を、仕様の用語で art direction problem と呼ぶ根拠。HTML の picture 要素の用途（切り抜き・簡略化・別形式の提供）は MDN の picture の項に書かれている（S12）。見た目の意図を実装に落とす場所として使う

### S12 MDN「<picture>」

> Common use cases for <picture>: Art direction. Cropping or modifying images for different media conditions (for example, loading a simpler version of an image which has too many details, on smaller displays).

- 媒体・日付: MDN Web Docs, 取得時点
- URL: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture
- 取得日: 2026-11-15
- 検証区分: A
- 備考: picture 要素の用途の一覧の第 1 項が art direction。小さい画面では細部の多い画像を簡略化した版に差し替える、という使い方まで書かれている。広い画面の構図をそのまま縮めない根拠

### S13 Samantha Warren「Style Tiles and How They Work」

> Style tiles are based on visual preference discussions with the client. They’re sample options that spur discussion with stakeholders on a common visual language.

> When we supply detailed mockups that represent set widths, we can imply that we’re executing the final design.

- 媒体・日付: A List Apart, 2012-03-27
- URL: https://alistapart.com/article/style-tiles-and-how-they-work/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ムードボードと完成画面の間にある、書体・色・UI の見本の束（スタイルタイル）の提唱。見た目の方向性を、レイアウトを決める前に顧客と話し合うための道具。固定幅の詳細な画面案は『最終案を作っている』という誤解を生む、という問題意識が出発点

### S14 Samantha Warren（同上。複数案を見せる弊害）

> presenting multiple, fully visualized comps hurts the process more than it helps it. Because it’s human nature for people to mix and match, this allows clients to sabotage the best solutions to their design problems based on transitory stylistic preferences. In the end, you have a Frankencomp, a mishmash of interface elements conceived outside the website’s goals.

- 媒体・日付: A List Apart, 2012-03-27
- URL: https://alistapart.com/article/style-tiles-and-how-they-work/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 複数の完成画面案を見せると、顧客が一時的な好みで『つまみ食い』して Frankencomp（寄せ集め）になる、という提案の進め方への警告。『3 案を完成画面で見せる』習慣への根拠のある反論

### S15 Diagram（制作会社）「Using Element Collages to Improve the Design Process」

> Because Element Collages aren't meant to be the end-all document that traditional mockups were, we have no need to say "this is what it will look like to the pixel; please approve."

- 媒体・日付: wearediagram.com（制作会社の記事）, 2014-08-22（2024-03-25 更新）
- URL: https://www.wearediagram.com/blog/using-element-collages-to-improve-the-design-process
- 取得日: 2026-11-15
- 検証区分: A
- 備考: エレメントコラージュ（ボタン・見出し・写真・色などの断片を 1 枚に貼る）で方向性の合意を取り、ブラウザ上の精緻化へ進む、という制作会社の運用。Dan Mall が自分の版として命名した手法（S16）。『この見た目に承認を』と求めない点が要。

### S16 Dan Mall「Element Collages」（Reading Is Fundamental のサイト刷新の記録）

> Wireframes and moodboards tend to be too abstract.

> My version of Style Tiles integrates my love of collaging for a different type of execution I call an “Element Collage.” That particular phrase creates an expectation that what we’re looking at isn’t a final design but rather an assembly of disparate pieces without specific logic or order.

> A full comp often requires ideas to be fully realized. An element collage allows me to document a thought at any state of realization and move on to the next.

- 媒体・日付: v3.danmall.com（旧版サイトの記事）, 2012-11-13
- URL: https://v3.danmall.com/articles/rif-element-collages/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Mall 自身が、完成画面（comp）を早く見せる習慣を持ち、ワイヤーフレームやムードボードは抽象的すぎると感じていたこと、Warren のスタイルタイルを踏まえて自分の版を『Element Collage』と呼んだこと、を書いた記録。『最終案ではなく、論理や順序のない部品の集まり』という期待を作る名前、と説明する。NN/g（S17）はムードボードを方向性の合意に使うと述べ、Mall はここで抽象的すぎると言う。立場が分かれる論点として併記する。公開は 2012-11-13（旧サイトの表示）

### S17 Lillian Yang（NN/g）「Mood Boards in UX: How and Why to Use Them」

> Such words could work well for establishing a tone of voice for content, but they don’t work as well as a guide for visual design or branding.

> It is best to create several mood boards to experiment with multiple moods and find one that best fits your product.

- 媒体・日付: Nielsen Norman Group, 2023-02-26
- URL: https://www.nngroup.com/articles/mood-boards/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 『Motivational / Energetic / Bright』のような形容詞の列は、視覚の指針としては弱く、画像・色・語を貼ったムードボードのほうが手がかりになる、という説明。複数のボードで方向を比べる。Warren の『複数の完成案は有害』（S14）とは別の層（完成画面でなく、雰囲気の比較）の話として併記する

### S18 New Media Campaigns（制作会社）「What Is a Mood Board and Our Web Design Process」

> Mood boards often don't even reveal any actual design that will happen on your site (e.g., you won't see your actual iconography), but they pull from other examples to establish the tone and feel of what is going to be designed.

- 媒体・日付: newmediacampaigns.com, 2019-04-05（2020-07-28 更新）
- URL: https://www.newmediacampaigns.com/blog/what-is-a-mood-board-and-our-web-design-process
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 制作会社が自社の工程の一部としてムードボードを使う説明。ムードボードは『実際の画面を見せない』と明記する。一般的な解説で独自の根拠は薄い。

### S19 Lusion（制作スタジオ）「Oryzo BTS (Part 3 / 7) - Website UX/UI and Illustrations」

> We were happy to give up some minimalism if it meant placing the product inside a more believable environment.

> There were four of them, and they guided almost every design decision that followed: A realistic image. The product at the centre. Seamless transitions. Humour.

- 媒体・日付: blog.lusion.co（Edan Kwan・Andrii Ovsiannikov）, 2026-04-21 更新
- URL: https://blog.lusion.co/oryzo-bts-part-3-7-website-ux-ui-and-illustrations
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 受賞サイトの制作側が書いた方向性の決め方。最初の案（Awwwards の SOTD 風の『整っているが生気のない』案）を捨て、物語のある環境（作業机）へ変えた。方向性を 4 つの原則に落とし、書体・色・UI の判断に使った。制作スタジオ自身の説明で、第三者の評価ではない

### S20 Lusion（同上。書体・色の絞り込み）

> So we made two early decisions: use as few typefaces as possible, and use as few colours as possible.

> Around 99 percent of the type on the site is set in a single family. The colour system is just four values: a cream, a near black, a muted olive, and an orange.

> Constraints like these usually create more pressure, not less. But they also force better decisions.

- 媒体・日付: blog.lusion.co, 2026-04-21 更新
- URL: https://blog.lusion.co/oryzo-bts-part-3-7-website-ux-ui-and-illustrations
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 派手な 3D・イラストを主役にするため、UI の書体・色を最小にした、という数値つきの記録（約 99% が 1 書体、色は 4 値）。『制約は楽にならないが判断を良くする』という実務の感覚。本 skill の『声を出す場所を 1 つに絞る』指針（S55 の AI の提供元の文書と同型）の実例

### S21 Lusion（同上。AI の使いどころ）

> The important distinction is this: AI was not generating the core idea or the final look. It was helping us quickly test combinations of things we already had. In other words, the source material was ours. The result was a rough visual check, not a finished asset. That distinction might sound small, but to us it matters. It is the difference between using AI to speed up a decision and using it to replace one.

> None of the illustrations on the site were AI assisted. Everything was drawn by hand in Procreate.

- 媒体・日付: blog.lusion.co, 2026-04-21 更新
- URL: https://blog.lusion.co/oryzo-bts-part-3-7-website-ux-ui-and-illustrations
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 生成 AI は方向性の確認（構図・雰囲気の試作）に限り、最終の見た目と手描きのイラストは人の手、と切り分けた記録。『AI で決定を速める』と『AI に決定を任せる』の線引きの実例。制作スタジオの自己申告で、検証はできない

### S22 abeto（制作スタジオ）「Igloo Inc: Case Study」

> After Bureaux supplied us with moodboards to set the tone and style, some of their own renders and 3D assets, and a general outline of the site’s content, we began designing our first concept. At this stage, we prefer using grey mockups and sketches to communicate our ideas.

- 媒体・日付: Awwwards（事例記事）, 2024-10-31
- URL: https://www.awwwards.com/igloo-inc-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 依頼側（Bureaux）が先にムードボード・自社の 3D 素材・内容の概要を用意し、制作側は灰色のモックとスケッチで体験の流れを詰める、という分担。見た目の方向性を依頼側が持ち込み、制作側が『動き・体験』に集中する形の実例。Igloo の年間賞の受賞は本台帳では取得しておらず、事実として使わない（末尾の一覧）

### S23 Bruno Simon「Bruno’s Portfolio Case Study」

> The challenge with building a portfolio is that there’s no client. In fact, you could argue we’re our own worst client. That often leads to endless projects because it’s never quite good enough, and there’s no real deadline.

> To avoid that trap, I set a release goal for the end of 2025.

- 媒体・日付: Awwwards（本人の事例記事）, 2026-03-11
- URL: https://www.awwwards.com/brunos-portfolio-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 個人ポートフォリオに『依頼者がいない』ために終わらなくなる、という実務の感覚と、公開目標を先に置く対処。3D の世界を Blender で作り、命名規則で挙動を制御するなど技術の記述もある（本 skill では技法の深追いはしない）。制作期間の長さは本文では確認しておらず、期間を数値として使わない（末尾の一覧）

### S24 Readymag「Meet the best websites of 2025」（審査員 Cat How のコメント）

> ‘People Look at Art…’ transforms the simple act of viewing into an unexpected dialogue between you and the work. As you move, the site responds with a quiet intelligence that feels both playful and profound. It shifts the browser from passive surface to living space, demonstrating how digital design can deepen attention rather than distract from it.

- 媒体・日付: Readymag ブログ（Readymag 公式が掲載した審査員コメント）, 2025-12-11
- URL: https://blog.readymag.com/websites-of-the-year-2025/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Jury Choice の作品（Anton Repponen）への審査員評。賞の評価理由が文章で読める数少ない例。『注意を散らさず深める』を評価軸にしている

### S25 Readymag（審査員 Preston Tham・Marcos Rodrigues・Valentin Baumann のコメント。引用の順に Tham・Rodrigues・Baumann）

> The design highlights the photographs, while the interactions elevate them in a subtle, memorable way.

> the typeface—it does a fantastic job of shaping the overall archival/analog tone.

> turns something dense into an engaging narrative, with well-placed motion moments that actually make me want to keep scrolling.

- 媒体・日付: Readymag ブログ, 2025-12-11
- URL: https://blog.readymag.com/websites-of-the-year-2025/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 審査員の評価理由。写真を主役に保つ動き、書体が『資料室・アナログ』の調子を作る、密な内容を物語にして動きを要所に置く、という 3 つの観点。評価理由の語が『主題を邪魔しない動き』に寄っている。1 つ目は Preston Tham（Jury Choice の People Look at Art…）、2 つ目は Marcos Rodrigues（同作の書体）、3 つ目は Valentin Baumann（Community Choice の Wakuli Impact Report）。審査員 7 名の評価の一部で、全体を代表しない

### S26 Readymag（同上。Readymag 側のデザイナーの総評）

> in recent years we've seen two strong currents in web design: the rise of brutalist websites that “break web canons,” and the dominance of polished, uniform product design.

> It’s exciting how far digital design has come from uniform templates to this kind of expressive variability

- 媒体・日付: Readymag ブログ, 2025-12-11
- URL: https://blog.readymag.com/websites-of-the-year-2025/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: Readymag の head of design（Alexander Moskovskiy）と marketing designer（Denis Devyatko）の総評を、Readymag のブログが言い換え・引用したもの（前半は地の文、後半は Denis Devyatko の発言として引用）。『ブルータリズム』と『磨かれた均質なプロダクト設計』の 2 つの潮流が混ざり始めている、という見立て。応募作に基づく 1 社の見方で、全体の統計ではない

### S27 Readymag（賞の審査の方式）

> This approach is more balanced and helps compensate for the limitations of relying only on public voting.

- 媒体・日付: Readymag ブログ, 2025-12-11
- URL: https://blog.readymag.com/websites-of-the-year-2025/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 投票だけに頼る賞の限界を認め、外部の専門家（7 名）の審査を加えた、という運営側の説明。賞の偏りを運営自身が認める記述として使う（Awwwards の方式は S29）

### S28 Readymag ブログ「Does a portfolio need to follow UX conventions?」

> A portfolio website is a digital product, and standard product rules apply. Ideally, visitors should understand how the website works and easily find the information they need. Conventional navigation and predictable interactions help with this, but does that mean a portfolio should always follow familiar UX conventions? Different goals may call for different ways of organizing and navigating work.

- 媒体・日付: Readymag ブログ, 2026-11-12
- URL: https://blog.readymag.com/does-a-portfolio-need-to-follow-ux-conventions/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ポートフォリオが UX の慣習に従うべきかを 5 人のデザイナーに聞く記事の導入。『慣習は助けになるが、目的が違えば整理と移動の仕方も違う』という両面の立場。個々のデザイナーの発言は本文を逐語で取っていない（導入だけを引用）

### S29 Awwwards「Evaluation System」

> Design: 40% points Usability: 30% points Creativity: 20% points Content: 10% points.

> Once approved, sites are sent to a minimum of 18 jury members, and the 3 jury scores furthest from the average are automatically eliminated by our system.

- 媒体・日付: Awwwards 公式, 取得時点（2026-11-15）
- URL: https://www.awwwards.com/about-evaluation/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Awwwards（Site of the Day の審査）の配点: Design 40%・Usability 30%・Creativity 20%・Content 10%。審査員は 18 名以上で、平均から最も遠い 3 点を自動で除く。アクセシビリティは 4 項目に入っていない（開発者賞の別審査で見る。S30）。配点は取得時点のもの

### S30 Awwwards「Evaluation System」（Developer Award・Honorable Mention の基準）

> HMs are awarded to sites that are scored 6.5 or more from the jury.

> if the site is scored higher than a 7 it will be given a Developer Award.

- 媒体・日付: Awwwards 公式, 取得時点
- URL: https://www.awwwards.com/about-evaluation/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Honorable Mention は審査員の 6.5 点以上、Developer Award は SOTD 受賞作のうち開発者審査で 7 点を超えたもの。『7 点超が賞』という閾値が、アクセシビリティの評価（S34）にどう効くかは別の問題

### S31 Awwwards「Annual Awards」

> All submitted sites are ranked by their overall score from highest to lowest. The top 30 sites are selected as nominees. Sites that have won “Site of the Month” are automatically included, regardless of their score.

- 媒体・日付: Awwwards 公式, 取得時点
- URL: https://www.awwwards.com/annual-awards/about
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 年間賞の候補は総合点の上位 30 件と、Site of the Month 受賞作。年間賞の評価基準そのものは本ページに書かれていない。Site of the Year の 1 位は審査員の票で決まり、Users’ Choice は全面的にコミュニティ投票（同ページ）

### S32 CSS Design Awards「About」

> To be considered, sites must receive an average score above 8.00 (this varies depending on quality of the sites submitted) from the judges.

- 媒体・日付: CSSDA 公式, 取得時点
- URL: https://www.cssdesignawards.com/about
- 取得日: 2026-11-15
- 検証区分: A
- 備考: CSSDA の Website of the Day は、審査員の平均 8.00 超（提出作の水準で変わる）。公開の基準は UI・UX・Innovation の 3 つの公開賞で、重みの定義は書かれていない

### S33 Readymag（受賞作の傾向。個人ポートフォリオの審査評）

> It doesn’t play safe. It asks something of you and demands that you succumb to all its bombastic colour assaults and lack of respect for the grid. That’s gold.

- 媒体・日付: Readymag ブログ, 2025-12-11
- URL: https://blog.readymag.com/websites-of-the-year-2025/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 審査員 Cat How の Jo Iijima のポートフォリオ評。『グリッドへの敬意を欠く』ことまで褒め言葉にする。一方で同サイトの Preston Tham は『遊びと秩序のバランス』を評価する。審査員どうしで評価の物差しが一致しないことの例

### S34 ZURB Radar「Your award-winning site might be locking people out」

> Award-winning sites with advanced motion design often score poorly on accessibility, affecting usability and excluding users with disabilities.

> The Lacoste Polo Factory site scored a 9.20 on animations and a 6.00 on accessibility

- 媒体・日付: ZURB Radar（Ray・Benjamin Scott の署名。自動生成の可能性は不明）, 2026-07-25
- URL: https://radar.zurb.com/article/your-award-winning-site-might-be-locking-people-out
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 受賞サイトの動きの完成度とアクセシビリティの落差を指摘する記事。数値（9.20 と 6.00）は Awwwards の作品ページ由来の二次情報で、本 skill は Awwwards の当該ページを取り直していないため、数値は事実として使わず『指摘がある』にとどめる。95.9% の数字は WebAIM の原典（S80）を使う

### S35 Adrian Roselli「We Reward the Wrong Things」

> As an industry, in general we praise sites that look good, maybe with nifty animations, cool hover effects, and the mythical 60fps golden standard. That is all nonsense.

> When the industry awards and attaboys only go to the pretty sites, then performant, accessible, functional, slim sites are the first to go.

- 媒体・日付: adrianroselli.com（本人ブログ）, 2016-06-20
- URL: https://adrianroselli.com/2016/06/we-reward-the-wrong-things.html
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 賞の評価が見栄えに偏ることへの批判。2016 年の記事で、現行の Awwwards の方式（S29）への直接の批判ではない。記事は 4.3MB の装飾背景画像を持つサイトが『速い』と評価された例を挙げる。本人は審査員の経験があると書く（『Web awards shows (where I have judged)』）

### S36 Elizabeth Goodspeed（Shopify）「Graphic Design Trends」

> Contemporary design reflects a growing tension between two opposing forces: the rejection of digital sterility and the return of ornamentation.

> If something is too purely “on-trend,” it won’t feel fresh. Instead of copying trends outright, mix them with unexpected references and stay true to your brand identity.

> Graphic design trends shaping branding now: chicken scratch, structured scrapbook, minimal maximalism, hypercolor and strange historicism

> chicken scratch leans into a very specific kind of sloppiness—more bad doodle than artful sketch.

> It’s visually precise, methodical, and carefully curated, focusing on preserving moments and collecting references.

> This trend aims to capture both quiet luxury and extravagant excess at the same time by making one bold, expressive move while keeping everything else restrained.

> It pairs colors that shouldn’t work together, pushes contrast to its limits, and fully commits to high-energy palettes that demand attention.

> Designers are reaching further back in time for inspiration, trading midcentury throwbacks and retro visuals for something weirder, darker, and much, much older.

- 媒体・日付: Shopify ブログ, 2025-04-10 公開・2026-11-07 更新（取得ページの題は『5 Styles for 2025』のまま）
- URL: https://www.shopify.com/blog/graphic-design-trends
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Shopify（EC 基盤の運営会社）の傾向記事。『デジタルの無機質さへの拒否』と『装飾の復活』の緊張を軸に、chicken scratch・structured scrapbook・minimal maximalism・hypercolor・strange historicism の 5 つを挙げる。『流行を直輸入せず、別の参照と混ぜ、ブランドに忠実に』と助言する。題は 2025 だが本文は 2026-11-07 更新。ベンダーの傾向記事で、普及の統計ではない。追記行: 5 つの様式名と各様式の説明の逐語（引用ブロックの 2 つ目以降）。同じ URL を新規に取得して照合した

### S37 Figma「Top Web design trends for 2026」（Neo-brutalism / Collage の項）

> Neo-brutalism (or“anti-design”) embraces raw, unpolished visuals that stand out in a sea of sleek, minimalist templates.

> Collage Web design brings scrapbook-style creativity into digital experiences. Think sticker graphics, torn textures, cutout photos, and expressive, hand-drawn fonts.

> Typography is taking center stage in 2026, moving beyond legibility into storytelling. Brands are using custom fonts, oversized headlines, motion, and layered styles to make bold first impressions.

> Dark mode has become standard for sites and mobile apps.

> Rich colors, overlapping visuals, bold fonts, and dense compositions are key ingredients in this high-energy trend.

- 媒体・日付: Figma リソースライブラリ, 2026 年版（取得時点）
- URL: https://www.figma.com/resource-library/web-design-trends/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Figma（デザインツール提供会社）の傾向記事。13 項目（3D・実験的ナビ・鮮やかな配色・太い書体・ダークモード・モーション・ゲーミフィケーション・ニューモーフィズム・レトロフューチャー・マキシマリズム・コラージュ・ネオブルータリズム・サステナブル）を順位なしで列挙。『滑らかなミニマルなテンプレートの海の中で目立つ』が動機として書かれる。普及度の根拠は無い。追記行: 太い書体・ダークモード・マキシマリズムの項の逐語（2 つ目以降）。同じ URL を新規に取得して照合した

### S38 Figma（同上。傾向の選び方）

> Start by thinking about your audience, goals, and brand values. Do you want a playful, bold look or a minimalist, calming vibe?

- 媒体・日付: Figma リソースライブラリ, 2026 年版
- URL: https://www.figma.com/resource-library/web-design-trends/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 同じページの『どの傾向が自分の案件に合うか』への答え。ベンダーの記事も、流行の採用の前に『対象・目的・ブランドの価値』を置いている。ここは Shopify（S36）の助言と整合する

### S39 Adobe「The four creative trends that will define marketing in 2026」

> It’s no wonder that as sophisticated AI and AR tech floods our world, audiences are embracing the messy, the tactile, and the analog. Think real textures, real people, and real stories.

- 媒体・日付: Adobe ブログ, 2025-12-09
- URL: https://blog.adobe.com/en/publish/2025/12/09/four-creative-trends-define-marketing-2026
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Adobe の 2026 Creative Trends Report の紹介記事。All the Feels・Connectioneering・Surreal Silliness・Local Flavor の 4 つ。『AI があふれるほど、雑然・触感・アナログが好まれる』という立場。マーケティング向けの予測で、Web サイトの見た目の統計ではない。数値（WGSN 引用の約半数など）は孫引きなので使わない

### S40 Webflow「8 web design trends to watch in 2026」

> In a world of algorithmic sameness, human craft is becoming the differentiator.

> declining user attention, platforms that all look the same, and the pressure to stand out in meaningful way

> The aesthetic often features vintage illustration styles, classical art references, and hand-drawn elements paired with modern interactions and sophisticated UI.

- 媒体・日付: Webflow ブログ（Webflow Team）, 2025-12-23 更新
- URL: https://webflow.com/blog/web-design-trends-2026
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Webflow（ノーコード制作基盤の提供会社）の傾向記事。『アルゴリズム的な均質さの中で、人の手仕事が差別化になる』『どこも同じ見た目のプラットフォーム』という問題意識を前提に置く。手描き・古典参照・伝統的な技法と現代の UI を組み合わせる傾向を挙げる。ベンダーの予測。追記行: 手描き・古典参照の項の逐語（2 つ目）

### S41 WebDesignerDepot「7 Real Predictions for Web Design in 2026」

> The Quiet Web is the emerging counterculture of digital design: personal sites, creative blogs, and small online spaces built without growth goals.

- 媒体・日付: WebDesignerDepot, 2025-12-30
- URL: https://webdesignerdepot.com/7-real-predictions-for-web-design-in-2026/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 『静かな Web』（成長目標を持たない個人サイト・小さな場）を、騒がしさへの対抗として予測する記事。『磨きより個性』という立場。予測であり普及の実測ではない。

### S42 Luca Guerrini（nss magazine）「How is AI changing visual design?」

> The theory essentially claims that graphics that are excessively clean, precise, and orderly are increasingly associated – almost automatically – with content created using artificial intelligence.

- 媒体・日付: nss magazine, 2025-12-04
- URL: https://www.nssmag.com/en/lifestyle/43593/ai-anti-design
- 取得日: 2026-11-15
- 検証区分: R
- 備考: 『整いすぎた画像は AI 製と連想される』という説の紹介（筆者が『理論』として述べるもので、実証ではない）。chicken scratch のような不完全さが好まれる理由づけとして語られる。記者の地の文（R）で、効果の測定は無い

### S43 Google Design「Expressive Material Design: Google research」（Material 3 Expressive）

> Through 46 separate research studies with hundreds of designs, and more than 18,000 participants from around the world, we’ve fine tuned a system that’s both beautiful and highly usable.

> We found that well-applied, expressive design is strongly preferred by people of all ages, with that preference being particularly strong — up to 87% — among 18-to-24-year-olds.

- 媒体・日付: design.google, 日付は取得ページで未確認（公開月は未照合）
- URL: https://design.google/library/expressive-material-design-google-research
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Google 自身の研究の主張。46 の調査・18,000 人超・18〜24 歳で最大 87%（『最大』であり全体の数字ではない）。第三者による再現・批判は取得できていない（批判記事の存在は確認したが本文は未取得。末尾の一覧）。設計言語の詳細は designer-material の領分

### S44 Apple Newsroom「Apple introduces a delightful and elegant new software design」

> This translucent material reflects and refracts its surroundings, while dynamically transforming to help bring greater focus to content

- 媒体・日付: Apple Newsroom（プレスリリース）, 2025-06-09
- URL: https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Liquid Glass の公式の説明。『内容により焦点を当てる』ことが目的として述べられる。NN/g の批判（S45）が引く Apple の定義文と同じ。Web 版の再現は CSS+SVG での屈折の実装記事（kube.io）があるが、本台帳では取得していない

### S45 Raluca Budiu（NN/g）「Liquid Glass Is Cracked, and Usability Suffers in iOS 26」

> Overall, Apple is prioritizing spectacle over usability

> Motion for motion’s sake is not usability.

> One of the oldest findings in usability is that anything placed on top of something else becomes harder to see.

- 媒体・日付: Nielsen Norman Group, 2025-10-10
- URL: https://www.nngroup.com/articles/liquid-glass/
- 取得日: 2026-11-15
- 検証区分: C
- 備考: Liquid Glass への代表的な批判。透明で重ねた要素の視認性、動きの意味、タップ領域の密集、慣習の変更を挙げる。対象は iOS のアプリ UI で、Web のブランドサイトへ直接は当てはまらない。『透明の上に透明を重ねない』『動きは意味を持つとき』の一般則として使う

### S46 Raluca Budiu（NN/g）（同上。文字と背景の関係）

> Text on top of images is a bad idea because the contrast between the text and the background is often too low.

- 媒体・日付: Nielsen Norman Group, 2025-10-10
- URL: https://www.nngroup.com/articles/liquid-glass/
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 写真の上に載せた文字の可読性の批判。ヒーロー画像に見出しを重ねる Web の構図（S06 の Chimero が列挙したパターンのひとつ）にもそのまま当てはまる一般則。ただし NN/g の記事の主題は iOS 26

### S47 Kate Moran（NN/g）「Flat Design: Its Origins, Its Problems, and Why Flat 2.0 Is Better for Users」

> Flat design is a web-design style that became popular around 2012.

> One of the biggest usability issues introduced by flat design is the lack of signifiers on clickable elements.

- 媒体・日付: Nielsen Norman Group, 2015-09-27
- URL: https://www.nngroup.com/articles/flat-design/
- 取得日: 2026-11-15
- 検証区分: C
- 備考: フラットデザインの流行の起点（2012 年ごろ）と、押せる手がかりの欠落という批判。見た目の様式の変遷では『光沢・立体 → フラット』の転換点の記述。年の記述は NN/g の主張で、Microsoft・Google の資料での照合はしていない

### S48 Espen Brunborg「Symptoms Of An Epidemic: Web Design Trends」

> we’ve witnessed a de-shinification of the Web, with fewer glass buttons, beveled edges, reflections, special-offer badges, vulgar gradients with vibrant colors and diagonal background patterns.

> What we’re seeing now, though, is the near dominance of a particular style of ribbon, easily identified by a fork at one or both ends.

- 媒体・日付: Smashing Magazine, 2012-03-15
- URL: https://www.smashingmagazine.com/2012/03/symptoms-of-epidemic-web-design-trends/
- 取得日: 2026-11-15
- 検証区分: C
- 備考: Web 2.0 の光沢の様式が引いた後の観察。筆者は『Elliot Jay Stocks が Web 2.0 の見た目を壊せと訴えて以来』と書く（Stocks 本人の言葉ではなく、Brunborg の記述）。記事全体は、当時の次の流行（ステッチ・ジグザグ縁・二股リボン・19 世紀の挿絵など）を『伝染病の症状』にたとえる皮肉。流行は次の流行に置き換わる、という周期の証言として使う。追記行: 当時の次の流行（二股のリボン）の逐語（2 つ目）

### S49 Brutalist Websites（サイトの見出し文）

> In its ruggedness and lack of concern to look comfortable or easy, Brutalism can be seen as a reaction by a younger generation to the lightness, optimism, and frivolity of today

- 媒体・日付: brutalistwebsites.com, 取得時点（運営者の記載は取得ページに無い）
- URL: https://brutalistwebsites.com/
- 取得日: 2026-11-15
- 検証区分: R
- 備考: ブルータリズム系サイトの集積サイトが自分の立場を述べる 1 文。『軽さ・楽観・軽薄さへの反動』という位置づけ。運営者・日付の記載が取得ページに無く、区分は R。ブルータリズムの命名の起点（Pascal Deville など）は確認していない（末尾の一覧）

### S50 Sam Goree・Bardia Doosti・David Crandall・Norman Su「Investigating the Homogenization of Web Design: A Mixed-Methods Approach」（プロジェクトページ）

> we show that designs have become significantly more similar since 2007, especially for page layouts where the average distance between sites decreased by over 30%.

> Synthesizing interviews from 11 experienced web design professionals with our computational analyses, we discuss causes of this homogenization including overlap in source code and libraries, color scheme standardization, and support for mobile devices.

- 媒体・日付: CHI ’21 の研究の公式プロジェクトページ（cv-web-history.neocities.org）, 2021（ページの日付は未確認）
- URL: https://cv-web-history.neocities.org/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Web のデザインの均質化を、2003〜2019 年の代表的サイトの画像で測り（レイアウトの距離が 30% 超縮小）、デザイナー 11 名のインタビューで原因（共有コード・ライブラリ、配色の標準化、モバイル対応）を論じた研究の、著者自身の要約。PDF 本体は取得できず（旧 URL は移転）、取得したのは著者のプロジェクトページの要約。サンプルは英語圏の企業・Webby 候補サイトに偏る（同ページ）

### S51 Kyle Chayka「Welcome to AirSpace」

> Rather, they have all independently decided to adopt the same faux-artisanal aesthetic.

- 媒体・日付: The Verge, 2016-08-03
- URL: https://www.theverge.com/2016/8/3/12325104/airbnb-aesthetic-global-minimalism-startup-gentrification
- 取得日: 2026-11-15
- 検証区分: A
- 備考: カフェ・Airbnb などの空間が世界中で同じ見た目になる現象の古典的エッセイ。Web サイトの話ではないが、プラットフォームとおすすめのしくみが趣味を均す、という論旨が Web・AI の均質化論（S50・S53）に借用されている。引用は筆者の地の文。インタビュー相手の言葉（『harmonization of tastes』など）は本人の発言として使わない

### S52 Kyle Chayka「AirSpace, Redux」

> Globalized digital platforms and feeds of algorithmic recommendations have flattened vast swaths of culture, encouraging uniformity and frictionless mediocrity.

- 媒体・日付: Chayka の Substack, 2022-10-07
- URL: https://kylechayka.substack.com/p/airspace-redux
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 6 年後の本人の見直し。『プラットフォームとおすすめの流れが文化を平らにして、均一さと摩擦のない凡庸さを促した』と述べる。均質化論の根拠として使えるが、Web のビジュアルに限った検証ではない

### S53 Anil Doshi・Oliver Hauser「Generative AI enhances individual creativity but reduces the collective diversity of novel content」

> However, GenAI-enabled stories are more similar to each other than stories by humans alone. These results point to an increase in individual creativity at the risk of losing collective novelty.

- 媒体・日付: arXiv（v2）／Science Advances, 2024
- URL: https://arxiv.org/abs/2312.00506v2
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 生成 AI を使った物語は個々には創造的と評価されるが、集合としては互いに似る、という実験（オンラインの物語執筆）。対象は文章で、Web の見た目・画像には直接当てはまらない。取得したのは arXiv の要旨のみ。『AI の初期案をそのまま使うと似る』ことの類比にとどめ、ビジュアルへの一般化はしない

### S54 AI の提供元の公開文書「frontend-design」（公開リポジトリの設計指針。Apache License 2.0）

> For calibration, AI-generated design right now clusters around some traits: 1. a warm cream background (near #F4F1EA) with a high-contrast serif display and a terracotta or warm-clay accent

> Where the brief pins down a visual direction, follow it exactly — the brief's own words always win, including when it asks for one of these looks.

> 2. a near-black background with a single bright acid-green or vermilion accent;

> 3. a broadsheet-style layout with hairline rules, zero border-radius, and dense newspaper-like columns;

> 4. the SaaS-card kit: content chopped into identical rounded cards, one border-radius on everything regardless of hierarchy, the same soft grey shadow (rgba(0,0,0,.1)) under each, and gradient washes as decoration;

> 5. template chrome that appears whatever the subject: a tracked-out ALL-CAPS eyebrow label above every heading; meta strings joined with middle dots ('A · B · C'); labels built as 'WORD — fragment' with a spaced em dash; tinted near-black (#0B0B0B, #111) standing in for black; a monospace face for small data labels; a '→' appended to link and button text.

> All traits are legitimate for some briefs, but they are defaults rather than choices, and they appear regardless of subject.

- 媒体・日付: AI の提供元の公開リポジトリ（main ブランチの取得時点。URL 参照）。時点情報
- URL: https://raw.githubusercontent.com/anthropics/skills/41bbe19d1a1a7eaab5e7bb9050a417e5c6cffc8f/skills/frontend-design/SKILL.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 生成 AI の出力が偏りがちな見た目を、AI の提供元自身が列挙した文書（cream 背景＋セリフ＋テラコッタ、黒背景＋蛍光緑、新聞風の罫線、SaaS 風カード、テンプレ的な飾り）。『right now』の時点情報で、数か月で変わる。『温かい cream 背景＋セリフ＋テラコッタ』という、人の手触りを狙いがちな様式も、AI の出力が偏る様式の第 1 項に挙げられている。回避策がすぐ次の定型になるという観察は、本台帳では裏づけを取得していない（本 skill の整理（推測）として扱う）。LICENSE は Apache 2.0（取得して確認）。原文の語はツール固有名を含まないので、本 skill の本文には要旨で使う。URL は main ではなく、取得日時点でこのファイルを最後に変えたコミットに固定した。再取得したら、差分を人が確認してから台帳へ反映する。追記行: 偏りの列挙の 2・3・4・5 項（5 項は全文）と、定型は『選択でなく既定値』という文の逐語（2 つ目以降）。1 つ目の引用の続き・別の位置の文

### S55 AI の提供元の公開文書「frontend-design」（同上。制作の進め方）

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
- 備考: 『大胆さは 1 か所に使う』『全セクションのフェードインと全カードのホバーは定型』『被写体の業界・素材・言い回しが、独自の見た目の出どころ』『書体がページの人格を運ぶ』『作る前に、方針が同種の依頼で誰でも出す既定の案になっていないかを見直し、変えた点と理由を言う』という指針。Lusion の実例（S20）と同型の考え方。品質の下限として、モバイル対応・キーボードフォーカス・reduced motion・アクセシブルな配色を挙げる（同ファイル）。URL は main ではなく、取得日時点でこのファイルを最後に変えたコミットに固定した。再取得したら、差分を人が確認してから台帳へ反映する。追記行: 品質の下限の列挙の逐語（2 つ目）

### S56 Alan West（DEV Community）「Why Every AI-Built Website Looks the Same (Blame Tailwind’s Indigo-500)」

> Open three tabs of AI-generated landing pages. Any three. I guarantee at least two of them have a purple gradient, Inter font, rounded cards with subtle shadows, and three feature boxes with icons arranged in a grid.

- 媒体・日付: DEV Community, 2026-03-25（メタデータの公開日。3 月 29 日に編集）
- URL: https://dev.to/alanwest/why-every-ai-built-website-looks-the-same-blame-tailwinds-indigo-500-3h2p
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 『AI 製サイトが似る』という体感を、紫グラデーション・Inter・角丸カード・3 列アイコンのグリッドで具体化した記事。原因を Tailwind UI の bg-indigo-500 に帰す説（Adam Wathan の 2025 年 8 月の投稿とされる）は、この記事の記述で、投稿本体は X が取得できず未確認（末尾の一覧）。体感の記述で、頻度の測定は無い

### S57 prg.sh「Why Your AI Keeps Building the Same Purple Gradient Website」

> You’re getting the median of every Tailwind CSS tutorial scraped from GitHub between 2019 and 2024. And that median is purple.

- 媒体・日付: prg.sh（個人ブログ）, 2025-10-26
- URL: https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 生成 AI に『ランディングページを作れ』と制約なしで頼むと、出力が『学習データの中央値』になる、という説明（原文は特定の製品名を挙げる。台帳では製品名を省いた）。原因論は筆者の推論で、学習データの調査は無い。具体的な制約（目的・対象・トーン・色・書体）を与えないと中央値になる、という実務の示唆としては、他の文書（S54・S55）と整合する

### S58 Jocelyn Lecamus（Utsubo）「The ‘Built with AI’ Tell: 12 Signals That Drop Trust in 2026」

> The most expensive tell isn't ugliness—it's sameness: looking like every other AI site erases the differentiation you're paying to establish

- 媒体・日付: Utsubo（Web 制作スタジオ）のブログ, 2026-06-23
- URL: https://www.utsubo.com/blog/built-with-ai-trust-signals-2026
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 制作会社が自社の受注につなげる文脈で書いた、AI 製の見た目の指標 12 件。『似ていること』が最大の損失、という主張。利害（カスタム制作の営業）がある。本文は、訪問者が信頼を判断するまでの時間に関する研究を引くが、原典は取得できず未検証（末尾の一覧）

### S59 Jeff Humble（The Fountain Institute）「7 Signs a UI Has Been Vibe Coded (And How to Avoid Them)」

> These patterns aren't random. They're statistical artifacts from the model's training data, the visual equivalent of autocomplete.

- 媒体・日付: The Fountain Institute（UX 教育の会社）, 2026-04-24（メタデータの公開日）
- URL: https://www.thefountaininstitute.com/blog/signs-vibe-coded-ui
- 取得日: 2026-11-15
- 検証区分: C
- 備考: AI 製 UI の特徴を 7 つにまとめた記事。『学習データの統計的な産物』という説明は筆者の推論。実務として『デザイン判断をせず出力をそのまま出荷する』ことが問題だとしており、AI の使用そのものを否定していない

### S60 Jakob Nielsen（NN/g）「Photos as Web Content」

> Our eyetracking studies have documented a dramatic gap in how users approach website images: Some types of pictures are completely ignored.

> Photos of products and real people (as opposed to stock photos of models) often fall into this category.

> This is typically the case for big feel-good images that are purely decorative. Other types of pictures are treated as important content and scrutinized.

- 媒体・日付: Nielsen Norman Group, 2010-10-31（2026-08-13 に再確認）
- URL: https://www.nngroup.com/articles/photos-as-web-content/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 視線計測で、装飾目的の大きな写真は無視され、製品や実在の人物の写真は注視される、という NN/g の結果（2010 年・デスクトップ中心）。『感じのよい画像』を置くだけでは効かない、という写真選びの根拠。『Last reviewed Aug. 13, 2026』と書かれるが、実験は 2010 年のもの。追記行: 装飾の大きな画像と、精読される画像の区別の逐語（2 つ目）。原文は、製品・実在の人の写真が後者の例だと述べる

### S61 モノサス（制作会社）「この会社で働きたくなる、採用サイトのつくりかた 第 3 回 デザインイメージの伝え方」

> とにかく、数多く見ることです。多い分には構いませんので、最低30サイトを目標に見てください。

> 気に入ったサイトを3つほど選び、そのサイトのなにが好きなのか、良いと思った点はなにか、を書き出します。

- 媒体・日付: モノサスのマガジン, 2016-09-02
- URL: https://www.monosus.co.jp/magazine/m47tfwzsgormcunr2gqo7980
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 制作会社の担当者が、発注側に向けて『デザインのイメージを制作会社に伝える準備』を説明した記事（採用サイト向け）。参考サイトを最低 30 見て、好きな 3 つの理由（配色・写真・動き）を書き出す、という手順。『最低 30』は本記事の目安で、研究の裏づけは書かれていない

### S62 モノサス（同上。トンマナと動き）

> キャッチコピーが「挑戦」「戦え」「求む！◯◯人」のような強めのメッセージであれば、必然的にデザインもハードで、尖ったデザインになってきますし

> 伝えたい内容（文章、メッセージ）と、見た目があっているかを再確認する必要があります。

- 媒体・日付: モノサスのマガジン, 2016-09-02
- URL: https://www.monosus.co.jp/magazine/m47tfwzsgormcunr2gqo7980
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 言葉の調子と見た目の調子を揃える、というトンマナ（トーン＆マナー）の考え方。動き（横スライド・パララックス・固定）の希望も早めに伝える、とも書く。記事の公開は 2016 年で、挙げる流行（パララックス）は当時のもの

### S63 サングローブ（Web マーケティング情報メディア）「デザインの提案の仕方について」

> デザインをアピールする際に気を付けたいのが、主観を前面に出さないことです。

> 残念ながら、個性やテイストを打ち出した自分本位のデザインは得てしてアピールが逆効果になります。

- 媒体・日付: SUNGROVE, 公開 2020-09-25・最終更新 2024-03-27
- URL: https://www.sungrove.co.jp/design-proposal/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 提案の場で『デザイナーの主観』を前に出さず、ヒアリングの内容に根ざして説明する、という日本の実務の助言。AD が個性を打ち出す立場（S03・S04）と緊張関係にある。記事は Web マーケティング情報メディアのもので、制作会社の自社運用の記録ではない

### S64 サングローブ（同上。提案の流れ）

> まずデザインにどのような役割を持たせればよいのかを考え、わかりやすく定義づけることが大事です。

> ターゲットが定まれば、テーマと与えたい印象を設定します。

- 媒体・日付: SUNGROVE, 最終更新 2024-03-27
- URL: https://www.sungrove.co.jp/design-proposal/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 役割 → ターゲット → テーマと与えたい印象、の順に決めるという提案の流れ。Hay（S03）の『概念から入る』と順序が近い。一般論で、事例の裏づけは書かれていない

### S65 Sonicmoov Lab「デザインコンセプトの作り方とは？UXを向上させる言語化の手順と秘訣」（記事のメタデータ上の著者は Studio.Design だが未確認）

> ビジュアルの議論を進める前に、強固な軸となる「デザインコンセプト」を固めることがプロジェクト成功への一番の近道です。

> デザインテーマ： コンセプトをビジュアルに落とし込むための「レトロ」「先進的」といった具体的な世界観やトーン。

- 媒体・日付: lab.sonicmoov.com（JSON-LD の datePublished による）, 2026-07-17
- URL: https://lab.sonicmoov.com/posts/design-concept-ux
- 取得日: 2026-11-15
- 検証区分: R
- 備考: コンセプト（誰にどんな体験価値を届けるか）とデザインテーマ（世界観・トーン）を分ける説明。本文は JSON-LD の articleBody に入っており、通常の表示本文としては取得していない（照合は生の取得物で行った）。JSON-LD の author は『Studio.Design』（twitter.com/studio）で、画像の保管先名も studio-design-asset-files。サイト作成基盤の既定メタデータの可能性があり、著者・執筆会社は確認できていない（サイト名は Sonicmoov Lab）。制作会社の実務の記録ではなく解説記事（R）

### S66 Jonathan Weeks（Mitsue-Links）「Differences in Japanese Design: Online Hotel Platforms」

> One of the often cited reasons for this is that Japanese consumers prefer being able to see as much information as possible.

> While this is probably an overgeneralization, information clutter isn't going anywhere anytime soon.

- 媒体・日付: Mitsue-Links（日本の UX 調査会社）の英語ブログ, 2017-07-28
- URL: https://www.mitsue.co.jp/english/global_ux/blog/201707/28_0200.html
- 取得日: 2026-11-15
- 検証区分: R
- 備考: 日本のサイトの情報の多さの理由としてよく挙がる説を紹介し、筆者自身が『おそらく一般化しすぎ』と留保する記事。『日本は情報が多い見た目を好む』を事実として使わない根拠。筆者は UX マーケティング担当の署名で、調査データは無い

### S67 Forbes JAPAN（Web-News 名義。NEXER・くまWEB の調査の紹介）

> それによると、およそ8割の人が見づらいホームページに遭遇していた。

> ホームページの運営者は、とかく情報を詰め込みたがる。

- 媒体・日付: Forbes JAPAN, 2024-10-06
- URL: https://forbesjapan.com/articles/detail/74088
- 取得日: 2026-11-15
- 検証区分: R
- 備考: 自分でホームページを作った経験のある男女 601 人への調査（NEXER・くまWEB）の紹介。約 8 割が『見づらい』サイトに遭遇、約 7 割は『見やすい』サイトも知っていて、キーワードは『シンプル』。後半の『運営者は詰め込みたがる』は記者の見解（R）。調査の質問設計・標本の偏りは取得していない

### S68 Adobe「Flash & the Future of Interactive Content」

> Specifically, we will stop updating and distributing the Flash Player at the end of 2020

> But as open standards like HTML5, WebGL and WebAssembly have matured over the past several years, most now provide many of the capabilities and functionalities that plugins pioneered

- 媒体・日付: Adobe ブログ, 2017-07-25
- URL: https://blog.adobe.com/en/publish/2017/07/25/adobe-flash-update
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Flash Player の更新・配布を 2020 年末で終える、という公式発表（HTML5・WebGL・WebAssembly の成熟が理由と書く）。見た目の様式の歴史では、Flash 的な演出が標準技術に置き換わった時期の根拠。2010 年の Jobs『Thoughts on Flash』の本文は取得できず未確認。追記行: 終了の理由（標準技術の成熟）の逐語（2 つ目）

### S69 ギズモード・ジャパン（原文 Gizmodo US の Sam Rutherford 記事の翻訳。訳者 そうこ）「本当の本当にサヨウナラ。Flashが年内いっぱいで本当の本当に終了へ」

> Flashがインターネットを席巻した時代があったのです。

- 媒体・日付: ギズモード・ジャパン, 2020-06-18
- URL: https://www.gizmodo.jp/article/rip-flash/
- 取得日: 2026-11-15
- 検証区分: R
- 備考: 日本のメディアが Flash の終了と、その時代（90 年代〜2000 年代前半）を振り返る記事。記者・訳者の地の文（R）。日本の制作会社の演出の歴史としての裏づけにはならない（日本の Flash サイト群の話は先行検索の要約のみ、末尾の一覧）

### S70 Dave Shea「CSS Zen Garden — About」

> Who created this? Dave Shea, a designer from Vancouver, Canada.

> And so the widespread perception of CSS was as a language capable only of boxy and boring design.

> Inspired by each of these ideas, I developed this site with the goal of being a collaborative gallery that could show what CSS could accomplish.

> kept using the hacky table layouts and font tags that typified web development in the late 90’s. The industry stagnated, and by 2003 CSS still wasn’t being using beyond controlling basic fonts and colours.

- 媒体・日付: csszengarden.com, 取得時点（創設 2003 年。ページ本文は『20 年後』の振り返り）
- URL: https://csszengarden.com/pages/about/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2003 年に『CSS だけで見た目を差し替える』ギャラリーとして作られた経緯の振り返り。『CSS は箱型で退屈な設計の言語』という当時の認識に対し、実演で示した、と書く。表組・font タグで作る 90 年代後半の制作から CSS へ移る時期の一次の記述。作者は同ページの『Who created this?』の節で Dave Shea（バンクーバーの designer）と書かれる（1 つ目の引用）。ページは 2026 年の著作権表記で、本文の振り返りは『20 年後』の立場の記述。追記行: 90 年代後半の作り方と 2003 年ごろの CSS の使われ方の逐語（2 つ目。原文の綴り being using のまま）

### S71 W3C「CSS Color Module Level 4」

> The hue angle in HSL is not perceptually uniform; colors appear bunched up in some areas and widely spaced in others.

- 媒体・日付: W3C（技術仕様）, 取得時点
- URL: https://www.w3.org/TR/css-color-4/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: HSL の色相は知覚的に均等でない、と仕様自身が説明する箇所。OkLCh は明度が見た目の明度に対応する。配色を『明度・彩度・色相』で組む根拠（oklch は MDN の項、S72）。仕様は改訂されうる

### S72 MDN「oklch()」

> Here, 100% is equal to 0.4 for the C value.

- 媒体・日付: MDN Web Docs, 取得時点（ページの最終更新 2026-08-27）
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/oklch
- 取得日: 2026-11-15
- 検証区分: A
- 備考: oklch() の構文（L・C・H）。C の 100% は 0.4 に当たる、という数値の定義。Oklab の円筒座標形式という位置づけ。配色の試作を『明度を揃えて色相を回す』形で行う実装上の根拠

### S73 Evil Martians「OKLCH in CSS: why we moved from RGB and HSL」

> Unlike hsl(), OKLCH is better for color modifications and palette generation. It uses perceptual lightness, so no more unexpected results, like we had with darken() in Sass.

- 媒体・日付: Evil Martians ブログ（Andrey Sitnik・Travis Turner）, 2025-09-17（ページの記載。MDN の oklch の項は同記事を『(2024)』と記す。年が食い違う）
- URL: https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 制作会社が自社で RGB・HSL から OKLCH へ移った理由。知覚的な明度のため、パレット生成・加工の結果が予測しやすい、と述べる。制作会社の自己申告で、標準の仕様ではない。広色域（P3）の指定にも使える、と書く（同ページ）

### S74 W3C「Understanding SC 1.4.3: Contrast (Minimum)」

> The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following: Large Text Large-scale text and images of large-scale text have a contrast ratio of at least 3:1

> Understanding SC 1.4.3 Contrast (Minimum) (Level AA)

- 媒体・日付: W3C WAI（WCAG 2.2 の解説）, 取得時点
- URL: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 文字のコントラスト比の基準（通常 4.5:1、大きい文字 3:1）。レベル AA。画像の上の文字・半透明の面での可読性の判断に使う。数値は WCAG の定義で、見た目の好みの問題ではない。追記行: 適合レベル（AA）の表記の逐語（2 つ目）

### S75 W3C「Understanding SC 2.2.2: Pause, Stop, Hide」

> For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it

> Understanding SC 2.2.2 Pause, Stop, Hide (Level A)

- 媒体・日付: W3C WAI, 取得時点
- URL: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 自動で始まり 5 秒を超えて続く動く情報には、止める手段を用意する、という基準（レベル A）。背景動画・ループする演出の根拠。本文の言い回しは取得本文のとおり（1 文）。追記行: 適合レベル（A）の表記の逐語（2 つ目）

### S76 MDN「prefers-reduced-motion」

> reduce Indicates that a user has enabled the setting on their device for reduced motion.

- 媒体・日付: MDN Web Docs, 取得時点
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 利用者が OS で『動きを減らす』を選んだことを CSS で検出する仕組み。スクロール連動・視差・自動再生の演出の弱める分岐の根拠

### S77 web.dev「Largest Contentful Paint (LCP)」

> To provide a good user experience, sites should strive to have Largest Contentful Paint of 2.5 seconds or less.

> To ensure you're hitting this target for most of your users, a good threshold to measure is the 75th percentile of page loads, segmented across mobile and desktop devices.

- 媒体・日付: web.dev（Google）, 取得時点
- URL: https://web.dev/articles/lcp
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 大きな画像・見出しの表示の速さの目標（2.5 秒以下、75 パーセンタイル）。ヒーロー画像を大きく見せる構図の代償を測る基準。Google の推奨値で、利用者の体感の全てではない。追記行: 75 パーセンタイルの逐語（2 つ目）

### S78 MDN「Variable fonts guide」

> The five currently registered axes are weight, width, slant, italic, and optical size.

- 媒体・日付: MDN Web Docs, 取得時点
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Fonts/Variable_fonts
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 可変フォントの登録済みの軸（太さ・幅・傾斜・イタリック・オプティカルサイズ）。1 つのファイルで連続的に変えられる。書体の選択・文字組の規則は designer-typography の領分で、ここは『動きや強調に使える軸』の根拠にとどめる

### S79 MDN「backdrop-filter」

> backdrop-filter: blur(10px);

- 媒体・日付: MDN Web Docs, 取得時点
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 背景のぼかしを CSS で作る指定の例（半透明の面の背後をぼかす）。グラスモーフィズム・Liquid Glass 風の表現を Web で作る際の実装の入口。見た目の可読性は WCAG の基準（S74）で別に確かめる

### S80 WebAIM「The WebAIM Million（2026）」

> 95.9% of home pages had detected WCAG 2 failures.

> Low contrast text, below the WCAG 2 AA thresholds, was found on 83.9% of home pages, an increase from 79.1% in 2025.

- 媒体・日付: WebAIM, 2026-02 の調査（取得時点）
- URL: https://webaim.org/projects/million/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 上位 100 万サイトのホームページを自動検査した結果。自動検出できる失敗だけの数なので、実際の適合率はもっと低い（WebAIM 自身が『確実にそれ以下』と書く）。低コントラスト文字が最多（83.9%）。画像が増え続けている（1 ページ平均 66.6 枚）ことも同ページにある

### S81 WebAIM「The WebAIM Million（2026）」（ページの複雑さ・画像）

> The average number of page elements increased to 1437 per home page in February 2026

> a 14.3% increase in only one year

- 媒体・日付: WebAIM, 2026-02 の調査
- URL: https://webaim.org/projects/million/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ホームページの要素数が 1 ページ平均 1,437（前年比 14.3% 増）。見た目の凝り方が増す方向の数字で、重さ・複雑さの批判（S82）の裏づけにはなるが、『凝った見た目が原因』とは同ページは述べていない。追記行: 前年比の逐語（2 つ目。1 つ目の引用の続き）

### S82 Maciej Cegłowski「The Website Obesity Crisis」

> I love big websites packed with images. I love high-resolution video. I love sprawling Javascript experiments or well-designed web apps. This talk isn't about any of those.

- 媒体・日付: idlewords.com（Web Directions Sydney の講演の文章版）, 2015-10-29
- URL: https://idlewords.com/talks/website_obesity.htm
- 取得日: 2026-11-15
- 検証区分: C
- 備考: ページの重量の肥大への批判。『美しいサイトはどんな大きさでもあり得る』と断った上で、文章中心のサイトが年々重くなることを問題にする。画像を多用する表現を否定する講演ではない。2015 年の数値（平均 2MB 近く）は古く、現在の値としては使わない

### S83 abeto（制作スタジオ）「Igloo Inc: Case Study」（previs と性能の計測）

> For sections that are difficult to communicate with static mocks alone, we create simple “previs” animations. These are quick, untextured renders designed to clarify our ideas and get everyone on the same page before we dive into execution.

> Another advantage of working directly in the browser is that we can continuously measure performance during development, making adjustments as needed to ensure smooth navigation on low-end devices.

- 媒体・日付: Awwwards（事例記事）, 2024-10-31
- URL: https://www.awwwards.com/igloo-inc-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 静止画で伝わりにくい動きは、質感なしの簡易アニメ（previs）で合意を取り、その後はブラウザ上でコードと 3D を同時に作り、開発中から性能（低スペック端末でも滑らかか）を測る、という分担と順序。方向性の合意を『動きの見本』で取る実例。スタジオの自己申告

### S84 Bruno Simon「Bruno’s Portfolio Case Study」（性能の制約）

> Most of the time, performance is the real constraint on creativity.

> It’s even more challenging on the web than in native games, because users expect instant access to information, and it has to run smoothly on their device no matter how powerful it is.

- 媒体・日付: Awwwards（本人の事例記事）, 2026-03-11
- URL: https://www.awwwards.com/brunos-portfolio-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 没入型サイトの作者自身が、表現の制約は性能だと述べる。草を少数の葉でループさせるなど『全面を覆うように見せる工夫』で GPU メモリを抑える、という実装の記述がある。本 skill は技法を深追いしないが、『見せ方の工夫は性能の制約から生まれる』という事実の根拠として使う

### S85 Hacker News（Algolia API の検索結果）「Liquid Glass」関連の投稿

> Liquid Glass Is Cracked, and Usability Suffers in iOS 26

- 媒体・日付: Hacker News, 投稿 2025-10-10（取得 2026-11-15 時点の点数）。時点情報
- URL: https://hn.algolia.com/api/v1/search?query=liquid%20glass&tags=story&hitsPerPage=5
- 取得日: 2026-11-15
- 検証区分: R
- 備考: NN/g の批判記事（S45）を話題にした HN の投稿。取得時点で 752 点・コメント 526（API の値）。HN は技術者に偏る集団で、一般の利用者の反応ではない。点数・コメント数は日々変わる時点情報で、照合の対象は題名のみ。同じ検索で Web 上の屈折の再現（kube.io、495 点）も出る

### S86 Figma「Top Web design trends for 2026」（State of the Designer 2026 の引用）

> According to Figma's State of the Designer 2026 report, 72% of designers now use generative AI in their workflows—and 91% say it improves the quality of their outputs, not just their speed.

- 媒体・日付: Figma リソースライブラリ, 2026 年版（調査本体は取得していない）
- URL: https://www.figma.com/resource-library/web-design-trends/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Figma 自身の調査（906 人、5 地域）の数字を、同社の記事が引いたもの。ツール提供会社が自社の調査を自社の記事で使っており、『品質が上がると答えた』は自己申告。調査本体は取得しておらず、この数字を一般の実態としては使わない

### S87 Awwwards「Lando Norris」の作品ページ（2025 年の Site of the Day）

> Site of the Day - Nov 17, 2025 Lando Norris OFF+BRAND.

> This website uses a color palette of 2 colors

- 媒体・日付: Awwwards（作品ページ）, 2025-11-17 の SOTD
- URL: https://www.awwwards.com/sites/lando-norris
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Awwwards の作品ページの記載。SOTD は 2025-11-17、掲載された色は 2 色（蛍光の黄緑と黒に近い色）、タグは WebGL・GSAP・Webflow など。タグは応募者の自己申告で、『タグが無い＝使っていない』ではない。年間賞（Site of the Year）の受賞や得票は取得しておらず未検証（末尾の一覧）。『色数が少ない作品が評価される』という一般化の根拠にはならない（作品 1 件）

### S88 Design Council（英国）

> The Double Diamond is a visual representation of the design and innovation process. It’s a simple way to describe the steps taken in any design and innovation project, irrespective of methods and tools used.

- 媒体・日付: The Double Diamond（公式ページ。日付の記載なし）
- URL: https://www.designcouncil.org.uk/our-resources/the-double-diamond/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ダブルダイヤモンドの定義。「手法やツールに依らず」プロセスの段階を述べる図という位置づけ。機関の自称。進め方の型の骨格に使える

### S89 Design Council（英国）

> This is not a linear process as the arrows on the diagram show. Many of the organisations we support learn something more about the underlying problems which can send them back to the beginning.

- 媒体・日付: Framework for Innovation（公式ページ。日付の記載なし）
- URL: https://www.designcouncil.org.uk/our-resources/framework-for-innovation/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ダブルダイヤモンドは直線ではないと機関自身が述べる箇所。「図は一方向に見えるが実際は戻る」という注意の根拠

### S90 Sarah Gibbons（Nielsen Norman Group）

> Be a master chef, not a line cook: take the recipe as a framework, then tweak as needed. Each phase is meant to be iterative and cyclical rather than strictly linear.

- 媒体・日付: Design Thinking 101（NN/g の記事、2016-07-31 公開・2026-07-15 最終確認）
- URL: https://www.nngroup.com/articles/design-thinking/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 枠組みを「レシピ」ではなく出発点として使う。各段階が往復する点。調査機関の自称

### S91 GOV.UK（Service Manual）

> Before you start your research, you’ll need to interrogate that solution and reframe it as a problem to be solved.

- 媒体・日付: How the discovery phase works（Service Manual、2016-08-04 公開・2021-06-21 更新）
- URL: https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「解決策を渡されたら問題に戻す」。依頼の受け方・問いの立て方の根拠

### S92 Ryan Singer（Basecamp）

> A fat marker sketch is a sketch made with such broad strokes that adding detail is difficult or impossible.

- 媒体・日付: Shape Up, Chapter 4「Find the Elements」（オンライン版。日付の記載なし）
- URL: https://basecamp.com/shapeup/1.3-chapter-04
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 太いペンで描く＝細部を描けない道具で、粗さを意図的に保つ。方向性を細部に入る前に決める手段。Basecamp の自称

### S93 Ryan Singer（Basecamp）

> any specific mockups are going to bias what other people do after you—especially if you’re in a higher position than them. They’ll take every detail in the initial mockups as direction even though you didn’t intend it.

- 媒体・日付: Shape Up, Chapter 4「Find the Elements」（オンライン版。日付の記載なし）
- URL: https://basecamp.com/shapeup/1.3-chapter-04
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 具体的なモックは後の人を縛る。デザインと実装の境界・引き渡しの注意の根拠

### S94 Ryan Singer（Basecamp）

> When design leaders go straight to wireframes or high-fidelity mockups, they define too much detail too early. This leaves designers no room for creativity.

- 媒体・日付: Shape Up, Chapter 2「Principles of Shaping」（オンライン版。日付の記載なし）
- URL: https://basecamp.com/shapeup/1.1-chapter-02
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 具体化しすぎ（ワイヤー・高精細モック）と抽象的すぎ（言葉だけ）の両方を避ける、という抽象度の議論。デザインと実装の境界の根拠

### S95 Karri Saarinen（Linear 共同創業者）

> Through this process, I generated hundreds of screens and was able to narrow down a few major directions that resonated most.

- 媒体・日付: How we redesigned the Linear UI (part II)（2024-03-28）
- URL: https://linear.app/now/how-we-redesigned-the-linear-ui
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 複数案を大量に出してから少数の方向性に絞る。方向性を複数出して絞る型の実例。企業の自称

### S96 メルカリデザイン

> 実際に作ったプロトタイプは数百種類。試行錯誤を重ねて新しいロゴマークを決定しました。

- 媒体・日付: Hello new logo（メルカリ ロゴ刷新の公開ページ。日付の記載なし）
- URL: https://design.mercari.com/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ロゴの刷新で数百の試作から絞った、という企業の自称。複数案を出して絞る型の国内例

### S97 Hikaru Sudo（Goodpatch）

> 目的があいまいなまま進めてしまうと収束が難しくなり、場当たり的なピボットを繰り返して無駄なコストを払うことにもなりかねません。

- 媒体・日付: 生成AIが作るプロトタイプは、本当にサービスづくりの近道になるのか？
- URL: https://goodpatch.com/blog/2026-08-ai-prototype
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 目的（誰に・どんな課題・どうなるか）を仮説でも先に言葉にしておくと、収束の判断軸になる、という主張

### S98 Michael Bierut（Pentagram パートナー）

> It follows that every design presentation is inevitably, at least in part, an exercise in bullshit. The design process always combines the pursuit of functional goals with countless intuitive, even irrational decisions.

- 媒体・日付: On (Design) Bullshit（Design Observer、2005-05-09）
- URL: https://designobserver.com/on-design-bullshit/（直接の取得を拒否されたため、以前に取得した保存コピーで照合した。再取得による照合ではない）
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 機能の要件（測れる）と直感の判断（説明しきれない）を分け、提示の場では後者が過剰に理屈づけられるという実務者の自己批判。提案と合意形成の注意点

### S99 Michael Bierut（Pentagram パートナー）

> Before I could commit to a design decision, I needed to have an intellectual rationale worked out in my mind. I discovered in short order that most clients seemed grateful for the rationale as well. It put aside arguments about taste; it helped them make the leap of faith that any design decision requires

- 媒体・日付: On (Design) Bullshit（Design Observer、2005-05-09）
- URL: https://designobserver.com/on-design-bullshit/（直接の取得を拒否されたため、以前に取得した保存コピーで照合した。再取得による照合ではない）
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 理屈づけが「趣味の議論を脇に置き、決断の飛躍を助ける」という効用を認めた箇所。提案で根拠を示す価値と限界の両方の根拠

### S100 Sarah Gibbons（Nielsen Norman Group）

> It is nearly impossible to improve a design without feedback from others. Their input helps you avoid mistakes and thus create higher quality work.

- 媒体・日付: Design Critiques: Encourage a Positive Culture to Improve Products（NN/g の記事、2016-10-23）
- URL: https://www.nngroup.com/articles/design-critiques/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 批評の目的についての NN/g の主張（調査機関の自称）。デザイン思考への批判（S108）に対する実務側の答えの一つとして読む

### S101 Sarah Gibbons（Nielsen Norman Group）

> Sharing designs early allows for earlier buy-in from team members that otherwise may not feel confident about the work and builds team consensus.

- 媒体・日付: Design Critiques（NN/g の記事、2016-10-23）
- URL: https://www.nngroup.com/articles/design-critiques/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 早く見せることで合意形成が進むという主張。提案と合意形成の型

### S102 Sarah Gibbons（Nielsen Norman Group）

> Implement Put the vision into effect. Ensure that your solution is materialized and touches the lives of your end users. This is the most important part of design thinking, but it is the one most often forgotten.

- 媒体・日付: Design Thinking 101（NN/g の記事、2016-07-31 公開・2026-07-15 最終確認）
- URL: https://www.nngroup.com/articles/design-thinking/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「実装」を最重要で最も忘れられやすい段階とする記述。デザインと実装の境界・引き渡しの詰めの根拠。調査機関の自称

### S103 GOV.UK（GDS・CDDO）

> Accessible design is good design. Everything we build should be as inclusive, legible and readable as possible. If we have to sacrifice elegance - so be it.

- 媒体・日付: Government Design Principles（2012-04-03 公開・2025-04-02 更新）
- URL: https://www.gov.uk/guidance/government-design-principles
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 原則 6。アクセシビリティを優雅さより優先する明言。品質の基準の根拠

### S104 Daryl Koopersmith・Wilson Miner（Stripe）

> Hand-pick colors and check their contrast against a standard. Our experience told us that this approach made choosing colors too dependent on trial and error.

- 媒体・日付: Designing accessible color systems（2019-10-15）
- URL: https://stripe.com/blog/accessible-color-systems
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 色を手で選んで検査する方式の限界を述べた箇所。「見た目の好みとアクセシビリティの両立」を道具で解決した事例。企業の自称

### S105 Daryl Koopersmith・Wilson Miner（Stripe）

> We decided to create a new tool that uses perceptual color models to give real-time feedback about accessibility.

- 媒体・日付: Designing accessible color systems（2019-10-15）
- URL: https://stripe.com/blog/accessible-color-systems
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 基準の遵守を人の注意に頼らず道具に組み込む判断

### S106 Vercel（Web Interface Guidelines）

> Honor prefers-reduced-motion. Provide a reduced-motion variant.

- 媒体・日付: Web Interface Guidelines（公式ページ。日付の記載なし）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 動きを減らす設定への対応を必須として書く例

### S107 Vercel（Web Interface Guidelines）

> Keyboard works everywhere. All flows are keyboard-operable & follow the WAI-ARIA Authoring Patterns.

- 媒体・日付: Web Interface Guidelines（公式ページ。日付の記載なし）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 備考: キーボード操作を前提にする基準の例

### S108 Natasha Jen（Pentagram パートナー）

> The reduction of a complex creative problem-solving mindset into five steps makes design seem easy when it’s not.

- 媒体・日付: It’s Nice That「Why Design Thinking is bullshit」
- URL: https://www.itsnicethat.com/articles/natasha-jen-pentagram-graphicdesign-230218
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 5 段階への還元が「デザインは易しい」という誤解を生む、という批判。デザインの厳しさ（批評・推敲）を守る立場の根拠

### S109 Don Norman

> I observed design students who were acting mindlessly, simply doing their assignments as presented. No creativity, no imagination, no questioning. That’s not what design thinking is about.

- 媒体・日付: 「Rethinking Design Thinking」（Core77。jnd.org 掲載、ページ日付 2013-03-18）
- URL: https://jnd.org/rethinking-design-thinking/
- 取得日: 2026-11-15
- 検証区分: C
- 備考: Norman が前稿の結論を変えた理由。型をなぞるだけの作業（問わない・想像しない）は設計の思考ではないという指摘。手順の遵守と思考を分ける根拠

## 引用ではない参照（事実の根拠）

引用としては使わず、存在や経緯の確認にだけ使う参照。本文に逐語の引用を載せない。

| 番号 | 参照 | 使い方 |
|------|------|--------|
| N01 | Lusion「Oryzo BTS」シリーズ（blog.lusion.co）。全 7 部のうち、取得したのは Part 3 のみ | 他の回（3D 制作・撮影・期間）は未取得。S19 から S21 は Part 3 の記述だけ。他の回の技法・期間は使わない |
| N02 | 80 Level「Deliver Mail on Tiny Colorful Planet in This Relaxing Web Game」（Gloria Levine, 2025-09-26）https://80.lv/articles/deliver-mail-on-tiny-colorful-planet-in-this-relaxing-web-game | abeto の Messenger が WebGL と Three.js で作られた無料のブラウザゲームだという記者の紹介（区分 R）。制作の裏側の記事ではない |
| N03 | Frank Chimero のサイトの題名一覧に『The Shape of Design』（Book・2012）の記載がある（S06 の取得ページ） | 書籍の存在のみ。内容は取得していない。書誌（出版社・ISBN）は未確認 |
| N04 | Zeldman の書き起こし（S09）の冒頭紹介文 | Jen Simmons を Mozilla の designer advocate・CSS Working Group の一員・Layout Land の作者とする紹介は Zeldman の言葉（区分 R）。本人の経歴の根拠としては使わない |
| N05 | Hacker News の Algolia API（S85 と同じ取得） | 『Liquid Glass in the Browser: Refraction with CSS and SVG』（kube.io、2025-09-08）が出る。Web での屈折の再現の存在の確認のみ。記事本体は取得していない |
| N06 | MDN「Scroll-driven animations」・web.dev「Optimize LCP」「Web Vitals」・MDN「font-display」・MDN「mix-blend-mode」・MDN「feTurbulence」 | 取得して存在を確認したが、本文は引用していない。実装の詳細が必要になったときの入口。グレイン・紙の質感の技法（SVG の feTurbulence・ブレンド）と、新しい CSS 機能のブラウザ対応状況は、本 skill では出典を持たず、「本 skill の目安」または「未照合の時点情報」として扱う |
| N07 | CSS Zen Garden（S70 の取得ページ）の『Daily CSS Fun』・Wired の 2003 年の CSS コンテスト・Zeldman の『show, don't tell』の言及 | 経緯の説明は S70 の筆者の記述。Wired の企画自体は取得していない |

## 未検証・伝聞

事実・引用として使わない。流通している言説や、検索要約・二次情報だけで裏づけた記述を、警告として集める。数値は書かない（数値として使わないため）。

| 内容 | 状況 |
|------|------|
| Tailwind の既定の藍色が AI 製サイトを紫にした、と開発者が 2025 年に謝罪した、という話 | S56・S57 の記述のみ。投稿本体は取得できず未確認。原因が Tailwind の既定色だという説は、筆者らの推論（測定なし） |
| 『glassmorphism』の命名者と時期、macOS の普及への影響 | 検索結果の要約のみ。原典の投稿は取得していない |
| Jason Santa Maria・Noel Jackson の経歴 | 検索結果の要約と S01 の周辺のみ。確認していない |
| 2010 年代のレイアウトの距離の縮み方について、S50 と異なる数値を報じた記事 | 論文本体を取得できず未確認。確認できたのは S50 の著者の要約のみ |
| 訪問者が信頼を判断するまでの時間（Lindgaard ほか） | S58 が引くだけで、原典は取得できなかった |
| 業界メディアの調査にあるフォントの使用比率（Inter など）と、AI 回避策の定型が月ごとに移るという記述 | 要約経由の記述のみ。原文は取得できていない |
| デザインツール会社の検索増加率の統計、年間色（Pantone）への批判 | 二次情報。傾向ページは JavaScript 描画で、本文を取得できなかった |
| Awwwards 受賞作の点数の分布・年間賞の得票・各作品の年間賞の受賞（Lando Norris・Messenger・Igloo） | 集計と記載のみで、取り直していない。S87 は作品ページの SOTD の日と色数だけを確認した |
| 制作期間（Bruno のポートフォリオ・Oryzo・Messenger の体制と期限） | S23 で確認できたのは『5 年後に新版に着手』『公開目標は 2025 年末』まで。他は未確認 |
| Lando Norris のサイトの技術（Three.js・深度マップ・シェーダー・CSS マスク・屈折） | Awwwards のタグ以外は未確認 |
| Web 2.0 の見た目の起点（2006 年の記事など） | 検索結果の要約のみ。S48 が書くのは、2012 年時点で光沢が引いたという観察だけ |
| Elliot Jay Stocks の『Web 2.0 の見た目を壊せ』という講演・記事 | S48 が言及するだけ。本人ページは取得できなかった |
| Jobs の『Thoughts on Flash』（2010 年）の本文 | 旧 URL が取得できず未確認。2010 年に iPhone・iPad が Flash に非対応を示したという記述は、検索要約のみ |
| 日本の Flash サイト群の件数と、掲示板の FLASH 板の年 | 検索要約のみ。取得していない |
| ブルータリズム（Web）の命名の起点・ネオブルータリズムの定義 | S49 の見出し文の記載以外は未確認。S37 の定義は Figma の記述 |
| iOS 26.1 以降の透明度の切替・Liquid Glass の調整の経過 | 二次情報のみ。取得できず未確認 |
| Material 3 Expressive への批判記事 | 存在を確認しただけ。本文は未取得 |
| 『AirSpace』風の投稿のエンゲージメントが下がったという主張（nss magazine） | 出典が示されていない主張。取得していない |
| Readymag のブログ『One size doesn't fit all: rethinking "good design" across cultures』 | 検索で題名を確認したが本文は未取得（文化による『良いデザイン』の違いの論点は空白） |
| Pentagram・Locomotive・Active Theory などの制作会社が自社サイトで公開する『方向性の決め方』の記述 | 該当ページを見つけられず、取得していない |
| Linear・Stripe・Vercel など製品企業の進め方が、成果を上げたかどうか | S88 から S109 は自称で、成果の検証ではない |

## 調査の限界

- 検索は米国向けで、要約を返す。要約だけで裏づけた記述は上の未検証の表に集め、事実としては使っていない
- 取得できなかった重要な出典: Codrops（直接取得が 403。Readymag の賞の論文、abeto の Messenger の制作講演）、Awwwards の Developer Guidelines、Lindgaard の論文、Doshi らの Science Advances 本誌（arXiv の要旨は取得）、CHI '21 の論文 PDF（旧 URL が移転）、Elliot Jay Stocks の記事、傾向ページのうち JavaScript 描画のもの、X・Reddit・Bluesky などの SNS 本体
- 日本語圏: 制作会社自身が公開する『方向性の決め方』の記事は、S61・S62（モノサス、2016 年）しか確認できていない。ムードボードの運用・提案の進め方を扱う国内の制作会社のブログ、国内の受賞作の制作の裏側、国内のウェブデザイン賞への批判は見つからなかった。日本語圏の傾向報告は、英語圏の報告の翻訳・要約が大半で、国内独自の調査は確認していない
- 受賞作の制作の裏側は、S19〜S21（Oryzo の 7 部のうち 1 部）・S22・S83・S23・S84 のみ。制作期間・人数・費用を確認できた一次資料は無い
- 賞の評価基準は、Awwwards（配点・方式）・CSSDA・Readymag の 3 つ。審査員の文章による評価理由は、Readymag の 3 作品のみ
- 傾向報告は、ベンダー・予測記事が大半で、実際の採用率・利用者の反応を測った一次データは、WebAIM（技術面）と Goree らの研究（均質化。著者の要約のみ）に限る
- 画像・写真・質感の扱いのうち、レスポンシブ画像・LCP・可変フォント・OKLCH・WCAG の基準は MDN・web.dev・W3C で確認した。グレインなどの質感表現の技法と、新しい CSS 機能のブラウザ対応状況は、出典を持たない（本 skill の目安、または未照合の時点情報）
- 『見た目の方向性が成果（コンバージョン・信頼）にどれだけ効くか』の一次の実験は確認できていない（NN/g の写真の視線計測 S60 が最も近い）
- 進め方の出典（S88〜S109）は、デザイン思考・製品開発の文脈が多い。Web の見た目の方向性に特化した進め方の一次資料は、S03・S04・S13・S15・S16・S17・S19〜S22・S61・S62 など前半の出典に限る
- 引用の英語・日本語は原文のまま。日本語の要旨・訳は本 skill の言葉

## 再照合の結果

- 2026-11-16: 引用ブロックの全 183 段落（S01〜S109 の A・B・C・R の全件。追記行を含む）を、新規に取得したテキストに対して段落ごとに逐語で含まれることを確認し、179 段落が一致した。残る 4 段落の扱いは次のとおり
  - S65（2 段落）: 記事の本文が、通常の表示用の HTML ではなくページ内の構造化データに入っているため、表示用の本文には無い。構造化データを復号した取得物に対しては、2 段落とも一致した
  - S98・S99（各 1 段落）: 取得先が直接の取得を拒否したため、この回は再取得できなかった。以前に取得した保存コピーのテキストに対しては、2 段落とも一致した（再取得による照合ではない）
- 追記行（S36・S37・S40・S48・S54・S55・S60・S68・S70・S74・S75・S77・S81 の計 24 段落）は、上の再取得の照合に含まれ、すべて一致した。S54・S55 は、固定したコミットの URL で取得して照合した
- ページの本文は更新されうる。後日の再照合で不一致になった場合は、取得日の版との差を疑う

# designer-creative-coding 出典台帳

`SKILL.md` と `examples/` と `references/design-history.md`（デザイン史）が根拠とした出典の台帳。引用原文（原語のまま・逐語）・発言者・媒体・日付・URL・取得日・検証区分を記す。S01 から S167 は、クリエイティブコーディングの系譜・WebGL と性能・代替表示と動きの安全・制作会社の工程・批判の出典である。S168 以降は、デザイン一般の進め方（`SKILL.md` の「進め方」と、各例の初見検証・点検の根拠）の出典である。番号は振り直さない。全 200 件のうち、区分 A は 180 件、B は 3 件、C は 11 件、R は 6 件（U は台帳に入れず、末尾の一覧に回した）。

## 凡例

- 検証区分
  - A: 原典・公式ページ・著者サイト・仕様・公式ドキュメント・制作者や制作会社本人の事例記事の本文を取得し、引用文が逐語で含まれることを機械的に照合した。口頭発言ではなく文章なので、書き起こしの精度には依存しない。対談記事（AIGA）は、記事が編集した発言を逐語で照合したもの
  - B: 第三者の転載・翻訳、または他媒体経由の引用（原典との照合なし）。本人の発言である可能性は高いが、引用元や翻訳の誤りは排除できない。本人の発言として英語逐語では示さず、区分を明記した要旨にする
  - C: 批判・論評・意見の側の主張。引用が逐語であることのみを確認し、主張の因果は確認していない。本人の発言として英語逐語では示さず、区分を明記した要旨にする
  - R: 記者・歴史家・機関・Wikipedia の地の文。発言者本人の発言ではない（本人発言として引用しない）。年号・日付の根拠にだけ使う
  - U: 未検証（末尾の一覧）。事実・引用として使わない
- 「自称」: 組織・企業・個人が自分たちの進め方を自分で述べたもの。「X を重視すると言っている」の根拠にはなるが、「X が有効だ」の根拠にはならない。備考に「自称」と書いた。S168 以降の大半がこれに当たる
- 「使用箇所」は、その出典の値・引用を使った `SKILL.md`・`examples/`・`references/design-history.md` のファイルである。ファイル内の S 番号の記載から機械的に集計した。使用箇所が無い項目は、台帳に残した背景の出典である
- 照合の方法（区分 A）: 通常のブラウザの User-Agent で取得し、script・style・コメント・タグを除去、HTML の実体参照を復号、空白を 1 つに正規化したテキストに対して、引用文の部分文字列を固定文字列で探した。取得後に全件を新規に取得し直して再照合した（結果は末尾の「調査の限界」）。公式ページの取得が拒否された出典（Medium・Codrops・apple.com の現行ページなど）は、Wayback Machine の保存コピーの本文を照合した。URL に保存時点（`web/` の後の数字）を含めた
- three.js のマニュアル・ドキュメント・LICENSE・package.json は、GitHub のファイルを、タグ r187（2026-10-30。S148）に固定した URL で取得した。公開サイト（threejs.org）は URL の形式が変わっており、最新の版に更新されていくため、再照合が安定するよう版を固定した。本文は HTML の断片や Markdown で、`[link:…]` などの独自記法を含む。公開サイトでの表示とは差がありうる
- 台帳の引用文は、取得したテキストから切り出した（手で打ち直していない）。タグ除去で生じた句読点の前の空白（例: `2009 ,`）だけは詰めた。アポストロフィ・引用符・ダッシュは原文のまま。コード片を含む引用では、HTML の整形に由来する空白が残る箇所がある。同じ出典の 2 つ目の逐語行（S06・S22・S114・S118・S119・S121・S139・S143）は、備考の事実を引用ブロックで裏づけるために足した行で、空の引用行で区切ってある。S44・S113・S176 は、主語や前後の文を含めるため、引用の範囲を伸ばした。S44・S113・S139・S143・S176 は、2026-11-16 に本文を取得し直して照合した
- 日本語の訳・要旨は本 skill の言葉であり、発言者本人の発言ではない
- 数値（比率・個数・秒・年）は、区分 A で原文を確認できたものだけを「出典あり」として使う。それ以外は「目安（出典なし）」と分けて書く
- 取得日は、出典ごとに最後に本文を確認した日（S44・S113・S139・S143・S176 は 2026-11-16、ほかは 2026-11-15）。記述は 2026-11-15 時点。WebGPU・three.js・MDN の互換表・Awwwards の採点などは随時変わる時点情報

## 帰属上の注意

- 受賞作の事例記事（Awwwards の Messenger・Igloo Inc・Bruno's Portfolio・iyO、Lusion の Oryzo）は、制作者・制作会社の自己申告である。成果や工程の誇張がありうる。Igloo Inc の記事は abeto 名義で、見出しの「We」は制作会社を指す。Lusion のブログは複数著者（記事ごとに著者が異なる）。iyO の記事は、掲載ページが著者として個人名（Matteo Donini）を表示しており、所属する制作会社の名前は本文で確認していない
- Messenger の「Developer Site of the Year」は、Awwwards の勝者一覧のページ（年の記載なし）による。本台帳は年を書かない
- Zurb Radar の記事は、第三者の事例（Cerebrium・Lacoste・Spotify）を引くニュース記事で、区分 C。Cerebrium の主張の一次の記述は取得していない。Lacoste の採点は Awwwards の審査表そのもの（S136）を A とした
- Maeda の発言は Ben Fry のブログが引いた抜粋（B）。Fry 自身の言葉は AIGA の対談記事（A）。LeWitt は Tate の用語解説が引く 1967 年の論文（B）。原文（Artforum）との照合はしていない
- Vera Molnár の引用は、Studio International（インタビュアーによる英訳・紹介文内。A）と Right Click Save（掲載側が [ ] と [...] で編集。A）の 2 件。いずれも原語（フランス語・ハンガリー語）の原文との照合はしていない。日本語にするときは英語からの重訳と明記する
- Steve Jobs の「Thoughts on Flash」は Apple の利害を含む主張で、Adobe が反論したと報じられている（報道の要約による。反論の原文は未取得）。書簡の現行 URL（apple.com）は 404 で、Wayback の保存コピーを照合した。Adobe の文は Wayback の保存コピー
- Jakob Nielsen の批判（2000 年）は Flash に向けたもの。WebGL への批判として引用しない。Maciej Cegłowski の「重さ」の批判は、文章中心のサイトに向けたもので、実験的な作品は射程の外と本人が書いている。WebGL 作品への批判として引用しない
- The Book of Shaders は LICENSE が全権利留保（リンクと無改変のスクリーンショットだけを許す）。本文を引用・翻訳しない。Inigo Quilez のサイトは、コード断片が MIT で、「数学的・シェーダーアート」は許諾が要る。本台帳は短い説明文だけを引用し、コードやアートを転載しない
- 区分 R（Wikipedia・AIGA の地の文・Studio International の紹介文）は、年・日付の根拠に使い、人物の発言として扱わない
- 動きの原則は designer-interaction の領分、見た目の方向性は designer-web の領分で、本台帳には含めない。動きの安全（WCAG・prefers-reduced-motion）は、代替表示の根拠として含めた
- 進め方の出典（S168 以降）は、デザイン会社・制作会社・政府機関・個人の自己説明（自称）が大半で、有効性を第三者が検証したものではない。S168 から S170 は Design Council の公式ページ（CC BY 4.0 と同ページに明記）。ほかは短い引用にとどめ、全文を転載しない。Goodpatch の記事（S190・S191・S192）は、生成 AI の時代にプロトタイプが速くなる前提の文脈で書かれている
- S199・S200 の Natasha Jen の文は区分 C（批判）で、デザイン思考の 5 段階への還元への批判と、批判の矛先は概念ではなく万能薬として売る実践者に向く、という本人の整理である。「進め方の型は無効」とは読まない

## 引用の台帳

### S01 Vera Molnár（Studio International の記事内の引用・英訳）

> This may sound paradoxical, but the machine, which is thought to be cold and inhuman, can help to realise what is most subjective, unattainable, and profound in a human being

- 媒体・日付: Studio International「Vera Molnár: ‘I have no regrets. My life is squares, triangles, lines’」2018-06-06。インタビューと翻訳は Angeria Rigamonti di Cutò。引用は記事冒頭の紹介文の中
- URL: https://www.studiointernational.com/vera-molnar-interview-computer-art-paris-mayor-gallery
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: 機械は冷たいという通念への反論。生成的表現を「感情のない自動化」と呼ぶ批判に対する、系譜上の返答に使える。引用はインタビュアーによる英訳で、記事冒頭の紹介文内に置かれている（逐語の発言ではなく翻訳）

### S02 Studio International 編集部（地の文）

> Later, facilitated by the freeing spirit of 68, Molnar gained access to actual computers, the imagined machine now real.

- 媒体・日付: Studio International「Vera Molnár: ‘I have no regrets. My life is squares, triangles, lines’」2018-06-06。インタビューと翻訳は Angeria Rigamonti di Cutò。引用は記事冒頭の紹介文の中
- URL: https://www.studiointernational.com/vera-molnar-interview-computer-art-paris-mayor-gallery
- 取得日: 2026-11-15
- 検証区分: R
- 使用箇所: references/design-history.md
- 備考: 1968 年ごろに実機の計算機へ移った経緯。本人の発言ではなく編集部の紹介文。年の根拠は R

### S03 Vera Molnár（Right Click Save のインタビュー）

> Instead of starting from “I am a genius and every work I make is a masterpiece,” I instead come up with a system with which [...] I can check what changes were made and what that [change] provoked in me. It’s an experimental method, [taken] step by step. The computer is fantastic for this purpose.

- 媒体・日付: Right Click Save「An Interview with Vera Molnar」（Zsofi Valyi-Nagy）、2022-08-26（逝去後に再掲）
- URL: https://www.rightclicksave.com/article/an-interview-with-vera-molnar
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/generative-poster.md / references/design-history.md
- 備考: machine imaginaire（想像上の機械）を「系を作り、変化と自分への作用を確かめる実験の方法」と説明する箇所。括弧 [ ] と省略 [...] は掲載側の編集。制作の姿勢（天才の傑作ではなく、規則と検証）に使える

### S04 Vera Molnár（同インタビュー）

> It was still handmade, of course, [with the] machine imaginaire

- 媒体・日付: Right Click Save「An Interview with Vera Molnar」（Zsofi Valyi-Nagy）、2022-08-26（逝去後に再掲）
- URL: https://www.rightclicksave.com/article/an-interview-with-vera-molnar
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: 計算機の前に、手作業で「想像上の機械」を回していたという本人の説明。アルゴリズム的発想は計算機より先にあった、という整理の根拠

### S05 Sol LeWitt（Tate の用語解説が引く 1967 年の論文）

> In conceptual art the idea or concept is the most important aspect of the work. When an artist uses a conceptual form of art, it means that all of the planning and decisions are made beforehand and the execution is a perfunctory affair.

- 媒体・日付: Tate「Conceptual art」（引用元: LeWitt, ‘Paragraphs on Conceptual Art’, Artforum Vol.5 no.10, Summer 1967）
- URL: https://www.tate.org.uk/art/art-terms/c/conceptual-art
- 取得日: 2026-11-15
- 検証区分: B
- 使用箇所: SKILL.md / references/design-history.md
- 備考: コード生成美術の思想的な前提（アイデアが機械になる）。Tate の転載で、Artforum 原文との照合はしていない。B

### S06 MIT Media Lab（DBN の公式サイト）

> DBN was developed by the Aesthetics and Computation Group at the MIT Media Laboratory, and is now a project of the Physical Language Workshop.
>
> Design By Numbers is Copyright 1999-2003, Massachusetts Institute of Technology.

- 媒体・日付: dbn.media.mit.edu（最終更新 2003-08-02 と同ページに記載）
- URL: https://dbn.media.mit.edu/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: Design By Numbers の来歴（MIT Media Lab の Aesthetics and Computation Group）。年は同ページの著作権表記 1999-2003 による

### S07 Ben Fry（AIGA Eye on Design の対談記事）

> DBN was under-featured, and intentionally so. Like, can you have a programming language that’s eight different commands and a limited screen of 100 x 100 pixels, and only grayscale?

- 媒体・日付: AIGA Eye on Design「Processing: the Software that Shaped Creative Coding」（Reas・Fry・Shiffman の発言を記事が編集）
- URL: https://eyeondesign.aiga.org/processing-the-software-that-shaped-creative-coding/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: DBN は 8 つのコマンド・100×100 ピクセル・グレースケールだけの、意図的に小さな環境だった。「制約が入口を作る」例。対談記事なので、発言の編集は記事側が担う

### S08 Casey Reas（同対談記事）

> Processing tried to take the minimal aspects of DBN but also allow it to extend to the point where it was no longer purely a learning environment, but actually a full design and studio environment.

- 媒体・日付: AIGA Eye on Design「Processing: the Software that Shaped Creative Coding」（Reas・Fry・Shiffman の発言を記事が編集）
- URL: https://eyeondesign.aiga.org/processing-the-software-that-shaped-creative-coding/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: Processing の出発点（DBN の最小性を保ちつつ、学習環境を超えて制作環境へ広げる）。入口の低さと上限の高さの両立という設計判断

### S09 Casey Reas（同対談記事）

> Instead of, to say it in a really crude way, dumbing down coding so designers can understand it, we thought designers and artists and architects can really do a great job with this. It just needs to be presented to them in a way that is motivating for them and engaging.

- 媒体・日付: AIGA Eye on Design「Processing: the Software that Shaped Creative Coding」（Reas・Fry・Shiffman の発言を記事が編集）
- URL: https://eyeondesign.aiga.org/processing-the-software-that-shaped-creative-coding/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: 「デザイナーに合わせてコードを易しくする」のではなく、デザイナーが十分できると見なして動機づける。本 skill の相談者への向き合い方の参考

### S10 Ben Fry（同対談記事）

> For me, learning how to code was entirely based on the willingness of other people to share their stuff.

- 媒体・日付: AIGA Eye on Design「Processing: the Software that Shaped Creative Coding」（Reas・Fry・Shiffman の発言を記事が編集）
- URL: https://eyeondesign.aiga.org/processing-the-software-that-shaped-creative-coding/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: 共有の規範（ソースを見せる文化）。Web で View Source から学ぶ系譜と、制作物を公開する習慣の根拠

### S11 Processing 公式（Overview）

> Initially created to serve as a software sketchbook and to teach programming fundamentals within a visual context

- 媒体・日付: processing.org/overview（2021-08-09 の 20 周年への言及あり）
- URL: https://processing.org/overview/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: Processing は「ソフトウェアのスケッチブック」として始まった。プロトタイプをコードで素早く描く姿勢の根拠

### S12 John Maeda（Technology Review の寄稿の、Ben Fry のブログによる抜粋）

> Processing, a programming language and development environment that makes sophisticated animations and other graphical effects accessible to people with relatively little programming experience, is today one of the few open-source challengers to Flash graphics on the Web.

- 媒体・日付: benfry.com「History of Processing, as told by John Maeda」2009-08-25 に掲載された抜粋
- URL: https://www.benfry.com/writing/archives/513
- 取得日: 2026-11-15
- 検証区分: B
- 使用箇所: references/design-history.md
- 備考: 2009 年時点で Processing を「Flash グラフィックスに対する数少ないオープンソースの挑戦者」と位置づけた Maeda の文。Technology Review 原文との照合はしていない。B

### S13 John Maeda（同抜粋）

> The truth is that I almost stifled the nascent project’s development, because I couldn’t see the need it would fill.

- 媒体・日付: benfry.com「History of Processing, as told by John Maeda」2009-08-25 に掲載された抜粋
- URL: https://www.benfry.com/writing/archives/513
- 取得日: 2026-11-15
- 検証区分: B
- 使用箇所: SKILL.md / references/design-history.md
- 備考: 教師の予想が外れた逸話。道具の価値は作る人が決める、という系譜の読みに使える。B

### S14 openFrameworks 公式

> openFrameworks is an open source C++ toolkit designed to assist the creative process by providing a simple and intuitive framework for experimentation.

- 媒体・日付: openframeworks.cc/about
- URL: https://openframeworks.cc/about/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: oF の自己定義（C++ のツールキット。実験のための枠組み）。Web ではなくネイティブ・設置作品の系譜

### S15 p5.js 公式（About）

> p5.js is a friendly tool for learning to code and make art.

- 媒体・日付: p5js.org/about
- URL: https://p5js.org/about/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: examples/generative-poster.md / references/design-history.md
- 備考: p5.js は Processing の考えを Web に持ち込んだ入口。アクセシビリティと包摂を価値に掲げていることも同ページに書かれている

### S16 p5.js 公式（About）

> It makes sketching with code as intuitive as sketching in a notebook.

- 媒体・日付: p5js.org/about
- URL: https://p5js.org/about/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: 「コードでスケッチする」という Processing 譲りの姿勢

### S17 Google（Chrome Experiments の公式紹介）

> Chrome Experiments is a showcase of work by coders who are pushing the boundaries of web technology, creating beautiful, unique web experiences.

- 媒体・日付: experiments.withgoogle.com/collection/chrome
- URL: https://experiments.withgoogle.com/collection/chrome
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: Chrome Experiments の自己定義。Web を表現の場として押し上げる展示場

### S18 Google Data Arts Team（Valdean Klump）

> In 2009, we launched Chrome Experiments to showcase the work of creative coders who pushed HTML5 and JavaScript to the limits in order to build beautiful, unique web experiences. At first, the site had only 19 experiments

- 媒体・日付: Google Developers Blog「1,000 Chrome Experiments and counting…」2015-02-24（Chrome ブログからの再掲）
- URL: https://developers.googleblog.com/1000-chrome-experiments-and-counting
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: 2009 年の開始（当初 19 作品）と目的。年の根拠

### S19 Google Data Arts Team

> Click on the WebGL tag, for example, and you’ll see how that technology surged in popularity when it was added to Chrome in 2011.

- 媒体・日付: Google Developers Blog「1,000 Chrome Experiments and counting…」2015-02-24（Chrome ブログからの再掲）
- URL: https://developers.googleblog.com/1000-chrome-experiments-and-counting
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: WebGL が Chrome に入った 2011 年に、実験の数が増えた（同チームの記述）。系譜の転換点

### S20 Google Chrome ブログ（記事の日付表示）

> Chrome Experiments: not your mother's JavaScript Chrome Blog The latest news from the Google Chrome team Chrome Experiments: not your mother's JavaScript Wednesday, March 18, 2009

- 媒体・日付: chrome.googleblog.com/2009/03/…（本文は JS 描画で取得できず、見出しと日付のみ）
- URL: https://chrome.googleblog.com/2009/03/chrome-experiments-not-your-mothers.html
- 取得日: 2026-11-15
- 検証区分: R
- 使用箇所: references/design-history.md
- 備考: Chrome Experiments の告知記事の日付（2009-03-18）。Wikipedia は 2009-03-01 開始と書き、日付が食い違う（`design-history.md` の「年・日付が食い違う出典」の節を参照）。本文は未取得

### S21 Wikipedia（Chrome Experiments の項）

> According to Google's official blog, the earliest contributors were artists and programmers like Casey Reas, Ricardo Cabello (Mr.doob), Ryan Alexander, Joshua T. Nimoy, and Karsten Schmidt (Toxi).

- 媒体・日付: en.wikipedia.org/wiki/Chrome_Experiments
- URL: https://en.wikipedia.org/wiki/Chrome_Experiments
- 取得日: 2026-11-15
- 検証区分: R
- 使用箇所: references/design-history.md
- 備考: 初期の寄稿者に Casey Reas・Ricardo Cabello（Mr.doob）らが含まれる。Wikipedia の地の文で、Google ブログ原文は未照合。系譜（Processing から three.js へ）の橋渡しとして R で使う

### S22 Mr.doob（three.js の最初のコミット、GitHub API）

> First public version. Still a lot to do
>
> "date": "2010-04-24T03:01:19Z"

- 媒体・日付: GitHub API の commit a90c4e1…（コミッターの日時 2010-04-24T03:01:19Z は同 JSON の author.date）
- URL: https://api.github.com/repos/mrdoob/three.js/commits/a90c4e107ff6e3b148458c96965e876f9441b147
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: three.js の最初の公開版のコミットメッセージ。日時は JSON の author.date（2010-04-24）で、Wikipedia の Release 欄とも一致する

### S23 Jakob Nielsen

> About 99% of the time, the presence of Flash on a website constitutes a usability disease.

- 媒体・日付: NN/g「Flash: 99% Bad」2000-10-29
- URL: https://www.nngroup.com/articles/flash-99-percent-bad/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: Flash 期の最も有名な批判。「驚き」の技術が使い勝手を損なう、という構図は WebGL 期にも繰り返す。2000 年の Flash への批判であり、WebGL への批判ではない

### S24 Jakob Nielsen

> First, Flash encourages gratuitous animation: Since we can make things move, why not make things move?

- 媒体・日付: NN/g「Flash: 99% Bad」2000-10-29
- URL: https://www.nngroup.com/articles/flash-99-percent-bad/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: 「動かせるから動かす」という動機への批判。動きの原則は designer-interaction の領分だが、WebGL でも同じ誘惑が起きる

### S25 Jakob Nielsen

> many Flash designers decrease the granularity of user control and revert to presentation styles that resemble television rather than interactive media.

- 媒体・日付: NN/g「Flash: 99% Bad」2000-10-29
- URL: https://www.nngroup.com/articles/flash-99-percent-bad/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/scroll-procedural-3d.md / references/design-history.md
- 備考: 利用者の操作の自由度を下げ、テレビのような提示に戻る失敗。スクロールに完全に縛る WebGL 体験と同じ構造

### S26 Steve Jobs（Apple 公式の公開書簡）

> Flash was created during the PC era – for PCs and mice. Flash is a successful business for Adobe, and we can understand why they want to push it beyond PCs. But the mobile era is about low power devices, touch interfaces and open web standards – all areas where Flash falls short.

- 媒体・日付: Apple「Thoughts on Flash」2010-04（Wayback の保存コピー。apple.com の現行 URL は 404）
- URL: https://web.archive.org/web/20110101132035/http://www.apple.com/hotnews/thoughts-on-flash/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: Flash 衰退の理由として Apple が公に述べたもの。Apple の利害を含む主張。Adobe が反論したと報じられている（検索結果の要約による。原文は未取得）。本台帳の Adobe の文と併読する。書簡の本文に日付は無く、2010 年・2010-04-29 という日付は報道（検索結果）による

### S27 Steve Jobs（同書簡）

> Flash was designed for PCs using mice, not for touch screens using fingers.

- 媒体・日付: Apple「Thoughts on Flash」2010-04（Wayback の保存コピー。apple.com の現行 URL は 404）
- URL: https://web.archive.org/web/20110101132035/http://www.apple.com/hotnews/thoughts-on-flash/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/particle-product-hero.md / examples/shader-gradient-background.md / references/design-history.md
- 備考: ホバーに頼る設計はタッチで壊れる、という指摘。WebGL の「マウスに反応する」演出にも当てはまる

### S28 Adobe コミュニケーションチーム（公式ブログ）

> as open standards like HTML5, WebGL and WebAssembly have matured over the past several years, most now provide many of the capabilities and functionalities that plugins pioneered and have become a viable alternative for content on the web.

- 媒体・日付: Adobe 公式ブログ「Flash & the Future of Interactive Content」2017-07-25（Wayback 2020-12-31 保存コピー）
- URL: https://web.archive.org/web/20201231214113/https://blog.adobe.com/en/publish/2017/07/25/adobe-flash-update.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: Adobe 自身が、WebGL を含む標準が Flash の代替になったと述べた。2020 年末での配布終了を同記事で予告

### S29 Adobe コミュニケーションチーム

> we will stop updating and distributing the Flash Player at the end of 2020

- 媒体・日付: Adobe 公式ブログ「Flash & the Future of Interactive Content」2017-07-25（Wayback 2020-12-31 保存コピー）
- URL: https://web.archive.org/web/20201231214113/https://blog.adobe.com/en/publish/2017/07/25/adobe-flash-update.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: Flash Player の更新・配布の終了時期（2020 年末）

### S30 Tyler Hobbs

> Historically, generative art had some typical qualities that were taken for granted. First, there was almost always a "curation" step. The artist could generate as many outputs as they pleased and then filter those down to a small set of favorites.

- 媒体・日付: tylerxhobbs.com「The Rise of Long-Form Generative Art」
- URL: https://www.tylerxhobbs.com/words/the-rise-of-long-form-generative-art
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/generative-poster.md / references/design-history.md
- 備考: 従来の生成芸術には「多数を出力して少数を選ぶ」キュレーションの段階があった、という指摘。Web に生成物を出すと、閲覧者ごとの出力を作者が選べない。この含意は本 skill の整理（推測）

### S31 Khronos Group（プレスリリース）

> 3rd March, 2011 – Game Developers Conference, San Francisco – The KhronosTM Group today released the final WebGLTM 1.0 specification to enable hardware-accelerated 3D graphics in HTML5 Web browsers without the need for plug-ins.

- 媒体・日付: Khronos「Khronos Releases Final WebGL 1.0 Specification」2011-03-03（Wayback 2013-01-14 保存コピー）
- URL: https://web.archive.org/web/20130114152325/http://www.khronos.org/news/press/khronos-releases-final-webgl-1.0-specification
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: WebGL 1.0 の公開日（GDC・サンフランシスコ）。OpenGL ES 2.0 の JavaScript 結合であることも同文に書かれている

### S32 Khronos WebGL ワーキンググループ

> Now, with support for WebGL 2.0 in Safari 15 for both macOS and iOS, we’re happy to report that “compatible browsers” includes pretty much all of them.

- 媒体・日付: Khronos ブログ「WebGL 2.0 Achieves Pervasive Support from all Major Web Browsers」2022-02-09（Wayback 2026-10-14 保存コピー）
- URL: https://web.archive.org/web/20261014074649/https://www.khronos.org/blog/webgl-2-achieves-pervasive-support-from-all-major-web-browsers
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: WebGL 2.0 が主要ブラウザで揃った時期（Safari 15 で iOS・macOS が対応）。対応状況は 2022 年時点の記述

### S33 MDN

> WebGL (Web Graphics Library) is a JavaScript API for rendering high-performance interactive 3D and 2D graphics within any compatible web browser without the use of plug-ins.

- 媒体・日付: MDN「WebGL: 2D and 3D graphics for the web」
- URL: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: WebGL の定義。OpenGL ES 2.0 に近い API という説明が同ページに続く

### S34 François Beaufort（web.dev ブログ）

> WebGPU —the powerful API for running high-performance 3D graphics and general-purpose GPU computations—is officially supported across Chrome, Edge, Firefox, and Safari.

- 媒体・日付: web.dev「WebGPU is now supported in major browsers」2025-11-25
- URL: https://web.dev/blog/webgpu-supported-major-browsers
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: WebGPU が 4 ブラウザで対応した、という公式の表明（2025-11 時点）。対応 OS・端末の範囲は次の項目

### S35 François Beaufort（同記事）

> Safari: WebGPU is available in macOS Tahoe 26, iOS 26, iPadOS 26, and visionOS 26.

- 媒体・日付: web.dev「WebGPU is now supported in major browsers」2025-11-25
- URL: https://web.dev/blog/webgpu-supported-major-browsers
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: Safari の対応範囲。Firefox は Windows と macOS Tahoe の ARM64 まで、Linux・Android・Intel Mac は「進行中」と同記事にある。対応状況は 2025-11 時点で、2026-11-15 時点の現況は未確認

### S36 François Beaufort（同記事）

> Support for Linux, Android, and Intel-based Macs is in progress.

- 媒体・日付: web.dev「WebGPU is now supported in major browsers」2025-11-25
- URL: https://web.dev/blog/webgpu-supported-major-browsers
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: Firefox の未対応範囲（2025-11 時点）。出荷時は WebGL 2 への代替を前提にする根拠

### S37 W3C GPU for the Web ワーキンググループ

> Candidate Recommendation Draft, 15 September 2026

- 媒体・日付: w3.org/TR/webgpu/
- URL: https://www.w3.org/TR/webgpu/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: WebGPU 仕様の文書状態（2026-09-15 の Candidate Recommendation Draft。取得は 2026-11-15）。仕様は更新されうる

### S38 three.js マニュアル（r187）

> If a device/browser doesn't support WebGPU, the renderer can automatically fall back to using a WebGL 2 backend.

- 媒体・日付: three.js マニュアル「WebGPURenderer」（リリース r187、2026-10-30 のタグ）
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/manual/pages/webgpurenderer.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: WebGPURenderer は WebGPU 非対応端末で WebGL 2 に自動で代替する、という公式の説明

### S39 three.js マニュアル（r187）

> The renderer itself is still in an experimental state although its maturity level has been greatly improved in the last years. Still, depending on your application and scene setup, you will encounter missing features or a better performance with `WebGLRenderer`.

- 媒体・日付: three.js マニュアル「WebGPURenderer」（リリース r187、2026-10-30 のタグ）
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/manual/pages/webgpurenderer.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/particle-product-hero.md / references/design-history.md
- 備考: WebGPURenderer は実験段階で、場合によっては WebGLRenderer のほうが速いと公式が述べる（r187 時点）

### S40 three.js マニュアル（r187）

> Custom materials based on `ShaderMaterial`, `RawShaderMaterial` and modifications of built-in materials via `onBeforeCompile()` are not supported in `WebGPURenderer`. This part of your application must be ported to node materials and TSL.

- 媒体・日付: three.js マニュアル「WebGPURenderer」（リリース r187、2026-10-30 のタグ）
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/manual/pages/webgpurenderer.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/particle-product-hero.md / examples/scroll-procedural-3d.md / examples/shader-gradient-background.md
- 備考: ShaderMaterial・RawShaderMaterial・onBeforeCompile は WebGPURenderer で動かず、TSL への移植が要る。手書き GLSL を使う例は WebGLRenderer 固定になる

### S41 three.js マニュアル（r187）

> `WebGLRenderer` is still maintained and the recommended choice for pure WebGL 2 applications.

- 媒体・日付: three.js マニュアル「WebGPURenderer」（リリース r187、2026-10-30 のタグ）
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/manual/pages/webgpurenderer.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/particle-product-hero.md / examples/scroll-procedural-3d.md / examples/shader-gradient-background.md
- 備考: WebGL 2 だけのアプリには WebGLRenderer が推奨。大きな新機能は WebGPURenderer 側に集まる、とも書かれている

### S42 Zurb Radar（ニュース記事）

> The Cerebrium team shipped in WebGL, not WebGPU, because the newer path took close to twenty seconds to compile shaders on their reference machine.

- 媒体・日付: Zurb Radar「Your award-winning site might be locking people out」2026-07-25（News Brief）
- URL: https://radar.zurb.com/article/your-award-winning-site-might-be-locking-people-out
- 取得日: 2026-11-15
- 検証区分: C
- 使用箇所: SKILL.md
- 備考: WebGPU のシェーダーコンパイルが約 20 秒かかり WebGL で出荷した、という第二次の報告。Cerebrium 側の一次記述は未取得。個別の事例で、一般化しない

### S43 three.js マニュアル（r187）

> with an actual version of three.js, like "v0.149.0"

- 媒体・日付: three.js マニュアル「Installation」
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/manual/pages/installation.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/generative-poster.md / examples/particle-product-hero.md / examples/scroll-procedural-3d.md / examples/shader-gradient-background.md
- 備考: CDN の import map では <version> を実際の版に置き換える、という指示。版を固定する根拠

### S44 three.js マニュアル（r187）

> Installing from the [link:https://www.npmjs.com/ npm package registry] and using a [link:https://eloquentjavascript.net/10_modules.html#h_zWTXAU93DC build tool] is the recommended approach for most users — the more dependencies your project needs, the more likely you are to run into problems that the static hosting cannot easily resolve.

- 媒体・日付: three.js マニュアル「Installation」
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/manual/pages/installation.html
- 取得日: 2026-11-16
- 検証区分: A
- 使用箇所: SKILL.md / examples/shader-gradient-background.md
- 備考: npm とビルドツールが「ほとんどの利用者に推奨」の方法。CDN の取り込みは代替の選択肢として書かれている

### S45 three.js マニュアル（r187）

> npm uses package.json to describe which versions of each dependency you've installed.

- 媒体・日付: three.js マニュアル「Installation」
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/manual/pages/installation.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/shader-gradient-background.md
- 備考: package.json が導入した版を記録する。版固定の基本

### S46 three.js リポジトリ（LICENSE）

> The MIT License Copyright © 2010-2026 three.js authors Permission is hereby granted, free of charge

- 媒体・日付: github.com/mrdoob/three.js の LICENSE（タグ r187）
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/LICENSE
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/shader-gradient-background.md
- 備考: three.js は MIT。再配布時は著作権表示と許諾表示を残す

### S47 MDN

> is a security feature that enables browsers to verify that resources they fetch (for example, from a CDN) are delivered without unexpected manipulation.

- 媒体・日付: MDN「Subresource Integrity」
- URL: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: SRI の定義。CDN から取る資源の改ざん検知

### S48 MDN

> This comes with a risk, in that if an attacker gains control of the third-party host, then they can inject arbitrary malicious content into its files (or replace the files completely).

- 媒体・日付: MDN「Subresource Integrity」
- URL: https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/particle-product-hero.md / examples/shader-gradient-background.md
- 備考: 外部ホストを信頼する危険（乗っ取られると任意の悪意あるコードを注入できる）

### S49 MDN

> You can use the integrity key to provide mapping for module integrity metadata. This enables you to ensure the integrity of dynamically or statically imported modules.

- 媒体・日付: MDN「<script type="importmap">」
- URL: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/generative-poster.md / examples/particle-product-hero.md / examples/scroll-procedural-3d.md / examples/shader-gradient-background.md
- 備考: import map に integrity キーで ES モジュールの完全性を指定できる。ブラウザ対応は MDN の互換表で確認する（時点情報。2026-11-15 時点の互換表は未確認）

### S50 Sansec Forensics Team

> However, in February this year, a Chinese company bought the domain and the Github account. Since then, this domain was caught injecting malware on mobile devices via any site that embeds cdn.polyfill.io.

- 媒体・日付: Sansec「Polyfill supply chain attack hits 100K+ sites」2024-06-25
- URL: https://sansec.io/research/polyfill-supply-chain-attack
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/particle-product-hero.md / examples/shader-gradient-background.md
- 備考: CDN のドメインが買収され悪意のあるコードが配られた事例。外部 CDN を版固定だけでなく SRI やセルフホストで守る根拠

### S51 MDN

> If you have 1000 sprites to paint, try to do it as a single drawArrays() or drawElements() call.

- 媒体・日付: MDN「WebGL best practices」
- URL: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/particle-product-hero.md / references/design-history.md
- 備考: 描画呼び出しをまとめる指針（draw call の数を減らす）。数値の上限は示されていない

### S52 MDN

> Handle webglcontextlost events, which can be emitted when the GPU runs out of memory, among other reasons. Offer different graphics quality settings, so the user can opt into lower quality when resources are constrained.

- 媒体・日付: MDN「WebGL best practices」
- URL: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/shader-gradient-background.md
- 備考: GPU メモリ不足などで webglcontextlost が起きるので、品質設定を選べるようにする

### S53 MDN

> applications must be conscious of VRAM usage and not just allocate as much as possible.

- 媒体・日付: MDN「WebGL best practices」
- URL: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md
- 備考: VRAM の見積もりを意識する。上限を調べる移植可能な API は無いと同ページにある

### S54 MDN

> While JPG and PNG are generally smaller over-the-wire, GPU compressed texture formats are smaller in GPU memory, and are faster to sample from. (This reduces texture memory bandwidth, which is precious on mobile.) However, compressed texture formats have worse quality than JPG, and are generally only acceptable for colors (not e.g., normals or coordinates).

- 媒体・日付: MDN「WebGL best practices」
- URL: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md
- 備考: 圧縮テクスチャは GPU メモリで小さく速いが、画質が落ち、色だけに向く（法線や座標には不向き）

### S55 MDN

> Don't wait for the garbage collector/cycle collector to realize objects are orphaned and destroy them.

- 媒体・日付: MDN「WebGL best practices」
- URL: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/particle-product-hero.md / examples/scroll-procedural-3d.md
- 備考: GC を待たず、使い終えた WebGL オブジェクトを自分で削除する

### S56 three.js マニュアル（r187）

> Every Mesh you create and three.js represents 1 or more requests by the system to draw something. Drawing 2 things has more overhead than drawing 1 even if the results are the same

- 媒体・日付: three.js マニュアル「Optimize Lots of Objects」
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/manual/pages/optimize-lots-of-objects.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/particle-product-hero.md
- 備考: Mesh ごとに描画要求が増える。「2 つ描くのは 1 つより負荷が高い」という説明（原文に "and" の誤記あり。そのまま）

### S57 three.js ドキュメント（r187）

> The usage of 'InstancedMesh' will help you to reduce the number of draw calls and thus improve the overall rendering performance in your application.

- 媒体・日付: three.js docs「InstancedMesh」
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/docs/pages/InstancedMesh.html.md
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: 同じジオメトリ・マテリアルの多数のオブジェクトに InstancedMesh。draw call を減らす

### S58 three.js ドキュメント（r187）

> A component for providing a basic Level of Detail (LOD) mechanism. Every LOD level is associated with an object, and rendering can be switched between them at the distances specified. Typically you would create, say, three meshes, one for far away (low detail), one for mid range (medium detail) and one for close up (high detail).

- 媒体・日付: three.js docs「LOD」
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/docs/pages/LOD.html.md
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/scroll-procedural-3d.md
- 備考: 距離に応じてメッシュを切り替える LOD の基本機構（遠景は低詳細）

### S59 three.js ドキュメント（r187）

> The loader supports Basis Universal GPU textures, which can be quickly transcoded to a wide variety of GPU texture compression formats.

- 媒体・日付: three.js docs「KTX2Loader」
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/docs/pages/KTX2Loader.html.md
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: examples/distortion-gallery.md
- 備考: Basis Universal を端末対応の GPU 圧縮形式へ変換して読み込む。WASM の変換器を使うため、旧ブラウザでは使えない場合がある（同ページ）

### S60 three.js マニュアル（r187）

> It's important to highlight that these objects are not released automatically. Instead, the application has to use a special API in order to free such resources.

- 媒体・日付: three.js マニュアル「How to dispose of Objects」
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/manual/pages/how-to-dispose-of-objects.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/particle-product-hero.md / examples/scroll-procedural-3d.md
- 備考: ジオメトリ・マテリアル等が確保する WebGL 資源は自動では解放されない。dispose() を自分で呼ぶ

### S61 three.js マニュアル（r187）

> In that case rendering continuously is a waste of the devices power and if the user is on portable device it wastes the user's battery.

- 媒体・日付: three.js マニュアル「Rendering on Demand」
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/manual/pages/rendering-on-demand.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/particle-product-hero.md / examples/scroll-procedural-3d.md / examples/shader-gradient-background.md
- 備考: 動かない場面で毎フレーム描くのは電力の無駄。必要なときだけ描く

### S62 three.js マニュアル（r187）

> Even though this is becoming less and less of a problem, some devices or browsers may still not support WebGL 2.

- 媒体・日付: three.js マニュアル「WebGL Compatibility Check」
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/manual/pages/webgl-compatibility-check.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/particle-product-hero.md / references/design-history.md
- 備考: WebGL 2 に非対応の端末が今も残りうる、と公式が述べる。検出して利用者へ伝える手順が同ページにある

### S63 MDN

> failIfMajorPerformanceCaveat A boolean value that indicates if a context will be created if the system performance is low or if no hardware GPU is available.

- 媒体・日付: MDN「HTMLCanvasElement: getContext()」
- URL: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/shader-gradient-background.md
- 備考: ハードウェア GPU が無い・性能が低い環境では文脈の作成を失敗させるオプション。代替表示へ切り替える判定に使える

### S64 Khronos（WebGL 1.0 仕様）

> WebGL implementations use context lost and restored events to regulate power and memory consumption, regardless of the value of this attribute.

- 媒体・日付: registry.khronos.org/webgl/specs/latest/1.0/
- URL: https://registry.khronos.org/webgl/specs/latest/1.0/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/particle-product-hero.md / examples/shader-gradient-background.md / references/design-history.md
- 備考: 実装は電力・メモリの調整に context lost / restored を使う。context lost は例外でなく通常の事象として扱う根拠

### S65 Khronos WebGL Wiki

> Unfortunately the GPU is a shared resource and as such there are times when it might be taken away from your program.

- 媒体・日付: Khronos WebGL Public Wiki「HandlingContextLost」（Wayback 2025-01-29 保存コピー。現行は wikis.khronos.org で、本環境では 403）
- URL: https://web.archive.org/web/20250129140616/https://www.khronos.org/webgl/wiki/HandlingContextLost
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: GPU は共有資源で、取り上げられうる。描画ループを止める等の手順が同ページにある

### S66 MDN

> There are two ways to determine the approximate amount of RAM a device has: use the Device Memory JavaScript API or accept Client Hints.

- 媒体・日付: MDN「Device Memory API」
- URL: https://developer.mozilla.org/en-US/docs/Web/API/Device_Memory_API
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 端末の RAM の概算を JavaScript API か Client Hints で得る。同ページに「標準ではない」と書かれ、非対応ブラウザがある（時点情報）

### S67 MDN

> Non-standard: This feature is not standardized. We do not recommend using non-standard features in production, as they have limited browser support, and may change or be removed.

- 媒体・日付: MDN「Device Memory API」
- URL: https://developer.mozilla.org/en-US/docs/Web/API/Device_Memory_API
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: Device Memory は標準化されていない。性能予算の判定に使うなら、非対応時の既定値を決める

### S68 three.js マニュアル（r187）

> OffscreenCanvas allows a web worker to render to a canvas. This is a way to offload heavy work, like rendering a complex 3D scene, to a web worker so as not to slow down the responsiveness of the browser.

- 媒体・日付: three.js マニュアル「OffscreenCanvas」
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/manual/pages/offscreencanvas.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 重い 3D 描画をワーカーへ移す。同ページの「Chrome だけ」という記述は古く、現在の対応は MDN 等で確認する（時点情報）

### S69 Philip Walton・Barry Pollard（web.dev）

> To provide a good user experience, sites should strive to have Largest Contentful Paint of 2.5 seconds or less. To ensure you're hitting this target for most of your users, a good threshold to measure is the 75th percentile of page loads, segmented across mobile and desktop devices.

- 媒体・日付: web.dev「Largest Contentful Paint (LCP)」
- URL: https://web.dev/articles/lcp
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/shader-gradient-background.md
- 備考: LCP の良好な基準（2.5 秒以下、75 パーセンタイル）。3D の読み込みが LCP に影響しうる

### S70 Jeremy Wagner・Barry Pollard（web.dev）

> An INP below or at 200 milliseconds means a page has good responsiveness

- 媒体・日付: web.dev「Interaction to Next Paint (INP)」
- URL: https://web.dev/articles/inp
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: INP の良好な基準（200 ms 以下）。主スレッドを塞ぐ描画・初期化はここに響く

### S71 George Hastings（Unicorn Studio 作者・Codrops 寄稿）

> That flexibility comes with cost — more layers mean more draw calls, texture reads, and GPU work.

- 媒体・日付: Codrops「WebGL for Designers」2026-03-04（Wayback 保存コピー。自社ツールの紹介記事）
- URL: https://web.archive.org/web/20260304141614/https://tympanus.net/codrops/2026/03/04/webgl-for-designers-creating-interactive-shader-driven-graphics-directly-in-the-browser/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: レイヤー（描画パス）が増えると draw call・テクスチャ読み・GPU 作業が増える。自社ツールの解説で、一般の測定ではない

### S72 George Hastings

> Combined with a lightweight runtime (about 29kb gzipped) and automatic optimizations like pausing when out of view, performance becomes part of the design process.

- 媒体・日付: Codrops「WebGL for Designers」2026-03-04（Wayback 保存コピー。自社ツールの紹介記事）
- URL: https://web.archive.org/web/20260304141614/https://tympanus.net/codrops/2026/03/04/webgl-for-designers-creating-interactive-shader-driven-graphics-directly-in-the-browser/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 「画面外で止める」自動最適化と、性能を設計の一部として扱う姿勢（宣伝を含む）

### S73 abeto

> The goal was to make it look rich without killing the performance; to make it feel vibrant even on an old phone.

- 媒体・日付: Awwwards「Messenger」事例記事 2026-01-15（制作 abeto）
- URL: https://www.awwwards.com/messenger.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 古い端末でも豊かに見える、という性能目標が設計の最初から置かれている

### S74 abeto

> Color atlas: we used a tiny 16x16 pixel texture for every single color in the game. It made it incredibly easy to change the lighting or the mood of the whole world at once.

- 媒体・日付: Awwwards「Messenger」事例記事 2026-01-15（制作 abeto）
- URL: https://www.awwwards.com/messenger.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 色ごとに小さなテクスチャを使い、世界の雰囲気を一括で変えられるようにした

### S75 abeto

> To keep the frame rate high, we created a custom LOD (Level of Detail) system. It swaps out high-detail objects for simpler ones as you move away, but it does so while preserving the overall visual shape of objects, so the "popping" effect often seen in games is minimized. 4 levels of LODs, with wireframes to see how polygons change

- 媒体・日付: Awwwards「Messenger」事例記事 2026-01-15（制作 abeto）
- URL: https://www.awwwards.com/messenger.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 独自の LOD（4 段階）。形を保ちつつ切り替えの「ポップ」を減らす

### S76 abeto

> Safari on iPhone is super picky with its limits, and if you use too much memory, the browser just kills the page without warning. To avoid that, we track every asset and clear it from memory the second it's not needed.

- 媒体・日付: Awwwards「Messenger」事例記事 2026-01-15（制作 abeto）
- URL: https://www.awwwards.com/messenger.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: iPhone の Safari はメモリ超過でページを警告なしに終了する。資産を使い終えたら即解放する。具体的な MB 上限は記事に無い（数値は別途未検証）

### S77 abeto

> We built the UI directly in WebGL so we could animate every detail without any restrictions.

- 媒体・日付: Awwwards「Messenger」事例記事 2026-01-15（制作 abeto）
- URL: https://www.awwwards.com/messenger.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/scroll-procedural-3d.md / references/design-history.md
- 備考: UI まで WebGL で描く選択。アクセシビリティ上の代償は記事で触れていない

### S78 abeto

> We also wanted anyone to be able to play, regardless of their setup: Mobile: you can play with one finger.

- 媒体・日付: Awwwards「Messenger」事例記事 2026-01-15（制作 abeto）
- URL: https://www.awwwards.com/messenger.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 操作の簡単さ（モバイルは指 1 本、デスクトップはマウスだけ）を設計目標にしている。支援技術への対応は記事に無い

### S79 abeto

> To protect that quiet, exploratory feeling, we capped the "virtual rooms" at 10 players per instance

- 媒体・日付: Awwwards「Messenger」事例記事 2026-01-15（制作 abeto）
- URL: https://www.awwwards.com/messenger.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 部屋の人数を 10 人に制限した。理由は「静けさ」を守るため（性能の理由ではない）

### S80 abeto

> 3D: Houdini & Blender. UI: Figma & Photoshop. Code: Three.js, three-mesh-bvh, vanilla Javascript, and C++.

- 媒体・日付: Awwwards「Messenger」事例記事 2026-01-15（制作 abeto）
- URL: https://www.awwwards.com/messenger.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: 使用技術。3D は Houdini と Blender、UI は Figma と Photoshop

### S81 Communication Arts（abeto への質問への回答）

> The most difficult aspect was undoubtedly carrying out such an ambitious project as a small team of two.

- 媒体・日付: Communication Arts「Messenger」webpicks
- URL: https://www.commarts.com/webpicks/messenger
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: 2 人のチームで作った。3D 素材・音を含む作品でも、小さなチームで可能だった例

### S82 abeto（Communication Arts）

> Since it was an internal project, we didn’t have any time constraints other than the ones we set for ourselves.

- 媒体・日付: Communication Arts「Messenger」webpicks
- URL: https://www.commarts.com/webpicks/messenger
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 社内企画で締め切りが自分たちで決めた分しかなかった。受託の制作期間に一般化しない

### S83 Awwwards（年間賞の勝者一覧）

> Developer Site of the Year 54 votes Messenger

- 媒体・日付: awwwards.com/annual-awards/winners（ページに年の記載は無い）
- URL: https://www.awwwards.com/annual-awards/winners
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: Messenger が Developer Site of the Year（54 票）。年は同ページに無いため、本 skill は年を書かない

### S84 Bruno Simon（Awwwards 事例記事）

> To avoid that trap, I set a release goal for the end of 2025.

- 媒体・日付: Awwwards「Bruno's Portfolio」事例記事（本人執筆）
- URL: https://www.awwwards.com/brunos-portfolio-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: クライアントのいない制作の終わらなさを、公開目標で止めた。個人制作の進め方

### S85 Bruno Simon

> It took me a little over a year to finish the project, but I’m genuinely proud of the result.

- 媒体・日付: Awwwards「Bruno's Portfolio」事例記事（本人執筆）
- URL: https://www.awwwards.com/brunos-portfolio-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/scroll-procedural-3d.md / examples/shader-gradient-background.md / references/design-history.md
- 備考: 制作期間は 1 年強（個人）。受賞作級の作り込みに要する時間の目安として使う

### S86 Bruno Simon

> Most of the time, performance is the real constraint on creativity.

- 媒体・日付: Awwwards「Bruno's Portfolio」事例記事（本人執筆）
- URL: https://www.awwwards.com/brunos-portfolio-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: 性能が創造性の主な制約、という制作者本人の言葉

### S87 Bruno Simon

> Each blade is made of a single triangle, and there are around 78,400 blades in total, so roughly 78,400 triangles.

- 媒体・日付: Awwwards「Bruno's Portfolio」事例記事（本人執筆）
- URL: https://www.awwwards.com/brunos-portfolio-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/particle-product-hero.md / references/design-history.md
- 備考: 草 1 枚を三角形 1 つで作る。約 78,400 枚。手続き的な軽い形状の例

### S88 Bruno Simon

> I relied heavily on instancing for trees, foliage, benches, lanterns, bowling pins, bricks, and more.

- 媒体・日付: Awwwards「Bruno's Portfolio」事例記事（本人執筆）
- URL: https://www.awwwards.com/brunos-portfolio-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: インスタンシングを多用（木・葉・ベンチ・ランタンなど）

### S89 Bruno Simon

> The palette is a texture that contains all the scene’s colors, and each model retrieves its color through UV mapping. This allows color variations across merged geometries without relying on vertex colors.

- 媒体・日付: Awwwards「Bruno's Portfolio」事例記事（本人執筆）
- URL: https://www.awwwards.com/brunos-portfolio-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 色をパレットのテクスチャに集約し、モデルは UV で色を引く

### S90 Bruno Simon

> Textures are kept as small as possible and compressed using GPU-friendly formats like ETC1S and UASTC.

- 媒体・日付: Awwwards「Bruno's Portfolio」事例記事（本人執筆）
- URL: https://www.awwwards.com/brunos-portfolio-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: テクスチャを GPU 向けの圧縮形式で小さくする（KTX2 の ETC1S・UASTC）。モデルは DRACO で圧縮したとも書かれている

### S91 Bruno Simon

> On mobile devices, the experience automatically switches to a lower quality preset: water blur and depth-of-field effects are disabled, and shadow map resolution is reduced.

- 媒体・日付: Awwwards「Bruno's Portfolio」事例記事（本人執筆）
- URL: https://www.awwwards.com/brunos-portfolio-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: モバイルは低品質プリセットへ自動で切り替える（水のぼかし・被写界深度を切り、影の解像度を下げる）

### S92 Bruno Simon

> the experience automatically runs on WebGPU when available, delivering better performance without any additional work.

- 媒体・日付: Awwwards「Bruno's Portfolio」事例記事（本人執筆）
- URL: https://www.awwwards.com/brunos-portfolio-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: TSL により WebGPU が使える環境では自動で WebGPU になる（本人の記述。2025 年時点）

### S93 Bruno Simon

> To preserve the immersive feel of the portfolio, I wanted to avoid traditional HTML UI as much as possible.

- 媒体・日付: Awwwards「Bruno's Portfolio」事例記事（本人執筆）
- URL: https://www.awwwards.com/brunos-portfolio-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/scroll-procedural-3d.md / references/design-history.md
- 備考: HTML の UI を避けて 3D で UI を作る選択。この選択のアクセシビリティ上の代償は記事で触れていない

### S94 Bruno Simon

> recreating standard interactions entirely in 3D, including clicks, scroll, keyboard input, and touch gestures.

- 媒体・日付: Awwwards「Bruno's Portfolio」事例記事（本人執筆）
- URL: https://www.awwwards.com/brunos-portfolio-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: クリック・スクロール・キーボード・タッチを 3D 内で再実装した。標準の挙動を自作するコストの例

### S95 Bruno Simon

> The front-end code is available on GitHub under the MIT license.

- 媒体・日付: Awwwards「Bruno's Portfolio」事例記事（本人執筆）
- URL: https://www.awwwards.com/brunos-portfolio-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: フロントのコードは MIT で公開（再利用の可否は個別のリポジトリで確認）

### S96 abeto（Awwwards 事例記事）

> At this stage, we prefer using grey mockups and sketches to communicate our ideas. The focus here is on mapping out the user journey

- 媒体・日付: Awwwards「Igloo Inc: Case Study」（制作 abeto、依頼側 Bureaux）
- URL: https://www.awwwards.com/igloo-inc-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: 最初は灰色のモックとスケッチで体験の流れ（ユーザーの旅）を詰める

### S97 abeto

> we create simple “previs” animations. These are quick, untextured renders designed to clarify our ideas and get everyone on the same page before we dive into execution.

- 媒体・日付: Awwwards「Igloo Inc: Case Study」（制作 abeto、依頼側 Bureaux）
- URL: https://www.awwwards.com/igloo-inc-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: 静止モックで伝わらない部分は、簡単な previs（質感なしのレンダー）で合意を作る

### S98 abeto

> directly in the browser. We have custom tools that make it possible to update changes to shaders, textures, and models in real time.

- 媒体・日付: Awwwards「Igloo Inc: Case Study」（制作 abeto、依頼側 Bureaux）
- URL: https://www.awwwards.com/igloo-inc-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: コードと 3D アートをブラウザ上で同時に進める。シェーダー・テクスチャ・モデルを実時間で更新できる自社ツール

### S99 abeto

> Another advantage of working directly in the browser is that we can continuously measure performance during development, making adjustments as needed to ensure smooth navigation on low-end devices.

- 媒体・日付: Awwwards「Igloo Inc: Case Study」（制作 abeto、依頼側 Bureaux）
- URL: https://www.awwwards.com/igloo-inc-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: ブラウザで作るので、開発中から性能を測り、低性能端末で滑らかさを確かめる

### S100 abeto

> After Bureaux supplied us with moodboards to set the tone and style, some of their own renders and 3D assets, and a general outline of the site’s content, we began designing our first concept.

- 媒体・日付: Awwwards「Igloo Inc: Case Study」（制作 abeto、依頼側 Bureaux）
- URL: https://www.awwwards.com/igloo-inc-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: ムードボード・レンダー・3D 素材は依頼側から提供された。コード外の素材の工程の例

### S101 abeto

> Procedural approaches need to be chosen carefully, since setting them up can take a significant amount of time.

- 媒体・日付: Awwwards「Igloo Inc: Case Study」（制作 abeto、依頼側 Bureaux）
- URL: https://www.awwwards.com/igloo-inc-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/scroll-procedural-3d.md
- 備考: 手続き的な生成は、導入に時間がかかるので慎重に選ぶ。本 skill の「手続き的な形状」の限界の根拠

### S102 abeto

> we developed our own exporter that converts VDB data into a browser-friendly format.

- 媒体・日付: Awwwards「Igloo Inc: Case Study」（制作 abeto、依頼側 Bureaux）
- URL: https://www.awwwards.com/igloo-inc-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 体積データを Web 向けに変換する独自の書き出し器。素材の工程が自作ツールを要する例

### S103 abeto

> Implementing UI in WebGL can unlock a range of high-performance effects.

- 媒体・日付: Awwwards「Igloo Inc: Case Study」（制作 abeto、依頼側 Bureaux）
- URL: https://www.awwwards.com/igloo-inc-case-study.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: UI を WebGL で作ると、グリッチや文字の入れ替えなどを軽く実現できるという主張（HTML/CSS との比較は記事内の主張）

### S104 Lusion（Edan Kwan・Paul Catoera）

> At Lusion, we care more about the final experience than any particular tool. The pipeline follows the idea, not the other way around.

- 媒体・日付: Lusion ブログ「Oryzo BTS (Part 2 / 7)」2026-04-21 更新（複数著者）
- URL: https://blog.lusion.co/oryzo-bts-part-2-7-3d-design-and-motion-graphics
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 道具より最終体験を優先する、という制作会社の方針

### S105 Lusion

> We tried image sequences and video, but they lacked the interactivity we wanted. We also tested real time PBR rendering, but it did not quite reach the visual quality we were aiming for.

- 媒体・日付: Lusion ブログ「Oryzo BTS (Part 2 / 7)」2026-04-21 更新（複数著者）
- URL: https://blog.lusion.co/oryzo-bts-part-2-7-3d-design-and-motion-graphics
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 画像列・動画・リアルタイム PBR を試し、品質と対話性の不足から Gaussian splatting を選んだ

### S106 Lusion

> We pushed it to around 900,000 splats already, but if you look closely at the desk and the cutting mat, you can still see plenty of flaws in the wooden details and the fine sketch lines.

- 媒体・日付: Lusion ブログ「Oryzo BTS (Part 2 / 7)」2026-04-21 更新（複数著者）
- URL: https://blog.lusion.co/oryzo-bts-part-2-7-3d-design-and-motion-graphics
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 全体を Gaussian splat にすると、約 90 万でも木目や細い線に欠点が残った

### S107 Lusion

> We used splats only for the props and the desk reflections. Once we narrowed the splat content to the elements that actually benefited from it, the result immediately looked better, even with far fewer points: around 78,233 splats on desktop and 44,683 on mobile

- 媒体・日付: Lusion ブログ「Oryzo BTS (Part 2 / 7)」2026-04-21 更新（複数著者）
- URL: https://blog.lusion.co/oryzo-bts-part-2-7-3d-design-and-motion-graphics
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: examples/particle-product-hero.md
- 備考: splat を小物と反射だけに限り、デスクトップ約 78,233・モバイル約 44,683 にした。端末ごとに数を変える例

### S108 Lusion

> a high quality 3D scan of a real hand that we purchased from 3D Scan Store

- 媒体・日付: Lusion ブログ「Oryzo BTS (Part 2 / 7)」2026-04-21 更新（複数著者）
- URL: https://blog.lusion.co/oryzo-bts-part-2-7-3d-design-and-motion-graphics
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/particle-product-hero.md / references/design-history.md
- 備考: 手の 3D スキャンは購入した素材。コード外の素材の工程の例

### S109 Lusion（Edan Kwan）

> Oryzo is a year long internal project

- 媒体・日付: Lusion ブログ「Oryzo BTS (Part 1 / 7)」2026-04-21 更新
- URL: https://blog.lusion.co/oryzo-bts-part-1-7-concept-and-creative-direction
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: 1 年がかりの社内企画（制作会社自身の記述）

### S110 Lusion

> The goal was not to overwhelm the user. The goal was to make them look at the product, believe the framing, and feel the brand language around it.

- 媒体・日付: Lusion ブログ「Oryzo BTS (Part 1 / 7)」2026-04-21 更新
- URL: https://blog.lusion.co/oryzo-bts-part-1-7-concept-and-creative-direction
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 商品サイトでは派手な動きを抑え、商品を見てもらうことを優先した。制作会社が自作の規範として述べたもの

### S111 Lusion（Edan Kwan・Andrii Ovsiannikov）

> Around 99 percent of the type on the site is set in a single family. The colour system is just four values: a cream, a near black, a muted olive, and an orange.

- 媒体・日付: Lusion ブログ「Oryzo BTS (Part 3 / 7)」2026-04-21 更新
- URL: https://blog.lusion.co/oryzo-bts-part-3-7-website-ux-ui-and-illustrations
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 書体 1 つ・色 4 つに絞る。UI を演出の邪魔にしない選択（見た目の方向性は designer-web の領分）

### S112 Matteo Donini（Awwwards 事例記事）

> We built it as a GPGPU simulation of up to 1.6 million particles.

- 媒体・日付: Awwwards「iyO - Case Study」2026-07-22
- URL: https://www.awwwards.com/iyo-case-study-selling-the-worlds-first-audio-computer.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/particle-product-hero.md / references/design-history.md
- 備考: 最大 160 万粒子の GPGPU シミュレーション。端末の性能予算を超える数でも、設計の意図に合わせて制御している例

### S113 Matteo Donini

> under NDA, they came to us as the device's real CAD, the same engineering files the hardware is built from, each carrying thousands of components and far too heavy for any browser to render in real time. Turning them into something that loads on a phone meant rebuilding each one, retopologizing the geometry down to what actually reads on screen, baking the fine detail into textures instead of carrying it in millions of polygons, and exporting to lean, Draco-compressed glTF.

- 媒体・日付: Awwwards「iyO - Case Study」2026-07-22
- URL: https://www.awwwards.com/iyo-case-study-selling-the-worlds-first-audio-computer.html
- 取得日: 2026-11-16
- 検証区分: A
- 使用箇所: SKILL.md / examples/particle-product-hero.md / references/design-history.md
- 備考: CAD をそのまま Web に出せず、リトポロジー・テクスチャへのベイク・Draco 圧縮の glTF にした。素材の工程がコードの外にある証拠

### S114 Active Theory（Medium の事例記事）

> In some cases, such as on older mobile devices, performance didn’t allow for post processing. In order to ensure a smooth experience on all devices we use a timer during the render process and if it takes longer than the allotted amount of time to render we disable post processing entirely.
>
> Neve: WebGL and VR Active Theory Follow Jan 25, 2016

- 媒体・日付: Active Theory「Neve: WebGL and VR」2016-01-25（Wayback 2020-09-17 保存コピー）
- URL: https://web.archive.org/web/20200917060529/https://medium.com/active-theory/neve-webgl-and-vr-d42a25856d67
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/shader-gradient-background.md / references/design-history.md
- 備考: 描画に時間がかかる端末ではポストプロセスを自動で切る。性能の劣化を段階的に落とす設計の古典的な例

### S115 Active Theory

> Neve is a small 3D WebGL ThreeJS experiment developed over 4 days

- 媒体・日付: Active Theory「Neve: WebGL and VR」2016-01-25（Wayback 2020-09-17 保存コピー）
- URL: https://web.archive.org/web/20200917060529/https://medium.com/active-theory/neve-webgl-and-vr-d42a25856d67
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 4 日で作った実験。プロトタイプの規模の目安（制作会社の自己申告）

### S116 Active Theory

> A custom shader featuring simplex 3D noise allowed us to create a pattern that felt very organic in its movement.

- 媒体・日付: Active Theory「Neve: WebGL and VR」2016-01-25（Wayback 2020-09-17 保存コピー）
- URL: https://web.archive.org/web/20200917060529/https://medium.com/active-theory/neve-webgl-and-vr-d42a25856d67
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/shader-gradient-background.md / references/design-history.md
- 備考: ノイズのシェーダーで有機的な背景（星雲）を作る。手続き的な形状・色の作例

### S117 Active Theory

> our first priority is always to accomplish the client-facing task.

- 媒体・日付: Active Theory「The Story of Technology Built at Active Theory」2019-02-08（Wayback 2025-08-25 保存コピー）
- URL: https://web.archive.org/web/20250825001253/https://medium.com/active-theory/the-story-of-technology-built-at-active-theory-5d17ae0e3fb4
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 制作会社の進め方（まず依頼側の課題を終え、道具は必要に応じて自作する「top down」）

### S118 W3C（WCAG 2.2 Understanding）

> Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.
>
> Understanding SC 2.3.1 Three Flashes or Below Threshold (Level A)

- 媒体・日付: W3C「Understanding SC 2.3.1 Three Flashes or Below Threshold (Level A)」
- URL: https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/particle-product-hero.md / examples/shader-gradient-background.md / references/design-history.md
- 備考: 1 秒に 3 回を超える点滅を含めない（レベル A）。WebGL のシェーダー効果にも適用される

### S119 W3C（WCAG 2.2 Understanding）

> Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.
>
> Understanding SC 2.3.3 Animation from Interactions (Level AAA)

- 媒体・日付: W3C「Understanding SC 2.3.3 Animation from Interactions (Level AAA)」
- URL: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/scroll-procedural-3d.md / references/design-history.md
- 備考: 操作で起きる動きを無効化できる（レベル AAA）。AAA は適合の必須ではないが、前庭障害のある人への配慮の基準になる

### S120 W3C（WCAG 2.2 Understanding）

> Another animation that is often non-essential is parallax scrolling.

- 媒体・日付: W3C「Understanding SC 2.3.3 Animation from Interactions (Level AAA)」
- URL: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/scroll-procedural-3d.md / references/design-history.md
- 備考: 視差スクロールは多くの場合本質的でない動き。前庭障害の例として挙がっている

### S121 W3C（WCAG 2.2 Understanding）

> For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it
>
> Understanding SC 2.2.2 Pause, Stop, Hide (Level A)

- 媒体・日付: W3C「Understanding SC 2.2.2 Pause, Stop, Hide (Level A)」
- URL: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/particle-product-hero.md / examples/shader-gradient-background.md / references/design-history.md
- 備考: 自動で始まり 5 秒を超える動きに、一時停止・停止・非表示の手段（レベル A）。背景の粒子・グラデーションの動きが該当しうる

### S122 MDN

> The prefers-reduced-motion CSS media feature is used to detect if a user has enabled a setting on their device to minimize the amount of non-essential motion.

- 媒体・日付: MDN「prefers-reduced-motion」
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/particle-product-hero.md / examples/scroll-procedural-3d.md / examples/shader-gradient-background.md / references/design-history.md
- 備考: OS の「動きを減らす」設定を検出するメディア特性

### S123 MDN

> Animations such as scaling or panning large objects can be vestibular motion triggers.

- 媒体・日付: MDN「prefers-reduced-motion」
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/scroll-procedural-3d.md / references/design-history.md
- 備考: 大きな物体の拡大縮小・パンは前庭の引き金になりうる

### S124 web.dev（記事。著者名は取得したテキストで確認できない）

> so for these users reducing animations is a medical necessity

- 媒体・日付: web.dev「prefers-reduced-motion: Sometimes less movement is more」
- URL: https://web.dev/articles/prefers-reduced-motion
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 動きの削減が一部の利用者にとって医学的に必要、という説明

### S125 web.dev（同記事）

> indicating that interfaces should minimize movement or animation, preferably to the point where all non-essential movement is removed.

- 媒体・日付: web.dev「prefers-reduced-motion: Sometimes less movement is more」
- URL: https://web.dev/articles/prefers-reduced-motion
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: reduce は「動きを最小限に、できれば本質でない動きをすべて除く」要請

### S126 James Craig（WebKit ブログ）

> The feature can be used in a CSS @media block or through the window.matchMedia() interface in JavaScript.

- 媒体・日付: WebKit ブログ「Responsive Design for Motion」2017-05-15
- URL: https://webkit.org/blog/7551/responsive-design-for-motion/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/particle-product-hero.md / examples/shader-gradient-background.md / references/design-history.md
- 備考: CSS だけでなく window.matchMedia() で JavaScript からも読める（WebGL の描画を止める判定に使う）

### S127 James Craig（WebKit ブログ）

> Web designers and developers can use this feature to serve alternate animations that avoid motion sickness triggers experienced by some site visitors.

- 媒体・日付: WebKit ブログ「Responsive Design for Motion」2017-05-15
- URL: https://webkit.org/blog/7551/responsive-design-for-motion/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/particle-product-hero.md / examples/scroll-procedural-3d.md / examples/shader-gradient-background.md / references/design-history.md
- 備考: 設定に応じて代替の動きを出す、という使い方。動きを消すだけでなく置き換えもできる

### S128 Val Head（A List Apart）

> As animated interfaces increasingly become the norm, more people have begun to notice that large-scale motion on screen can cause them dizziness, nausea, headaches, or worse.

- 媒体・日付: A List Apart「Designing Safer Web Animation For Motion Sensitivity」2015-09-08
- URL: https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: 画面上の大きな動きが、めまい・吐き気・頭痛を起こしうる

### S129 WHATWG（HTML Standard）

> When a canvas element represents embedded content, the user can still focus descendants of the canvas element (in the fallback content)

- 媒体・日付: html.spec.whatwg.org「The canvas element」
- URL: https://html.spec.whatwg.org/multipage/canvas.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/generative-poster.md / examples/particle-product-hero.md / examples/scroll-procedural-3d.md / examples/shader-gradient-background.md / references/design-history.md
- 備考: canvas の子孫要素（フォールバック内容）はフォーカスできる。canvas の外に操作と意味を DOM で持たせる根拠

### S130 WHATWG（HTML Standard）

> In non-visual media, and in visual media if scripting is disabled for the canvas element or if support for canvas elements has been disabled, the canvas element represents its fallback content instead.

- 媒体・日付: html.spec.whatwg.org「The canvas element」
- URL: https://html.spec.whatwg.org/multipage/canvas.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/scroll-procedural-3d.md
- 備考: 非視覚メディア・スクリプト無効のとき、canvas はフォールバック内容を表す

### S131 Lucas_Lamonier（three.js フォーラムのスレッド開始者。2025-09-19）

> if all the text is inside the three canvas screen readers will not be able to read it.

- 媒体・日付: discourse.threejs.org「Accessibility for 3D websites」
- URL: https://discourse.threejs.org/t/accessibility-for-3d-websites/87092.md
- 取得日: 2026-11-15
- 検証区分: C
- 使用箇所: SKILL.md / examples/generative-poster.md / examples/particle-product-hero.md / examples/scroll-procedural-3d.md / examples/shader-gradient-background.md / references/design-history.md
- 備考: canvas の中に全文を置くと読み上げが読めない、という開発者の指摘。フォーラムの質問で、公式見解ではない

### S132 pmndrs（@react-three/a11y のドキュメント）

> @react-three/a11y brings accessibility to webGL with easy-to-use react-three-fiber components: Focus and focus indication Tab index and keyboard navigation Screen reader support and alt-text Roles and cursor shapes Descriptive links

- 媒体・日付: a11y.docs.pmnd.rs/introduction
- URL: https://a11y.docs.pmnd.rs/introduction
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: R3F 向けのアクセシビリティ補助ライブラリが提供する機能の一覧（ライブラリ自身の説明。実際の支援技術での効果は未検証）

### S133 Adrian Roselli

> When the industry awards and attaboys only go to the pretty sites, then performant, accessible, functional, slim sites are the first to go.

- 媒体・日付: adrianroselli.com「We Reward the Wrong Things」2016-06-20（2019-01-30 更新）。引用は本人のツイートの再掲
- URL: https://adrianroselli.com/2016/06/we-reward-the-wrong-things.html
- 取得日: 2026-11-15
- 検証区分: C
- 使用箇所: SKILL.md / references/design-history.md
- 備考: 賞が見た目だけを評価すると、軽く・アクセシブルなサイトが落ちるという批判。2016 年の記事で、WebGL 作品の評価に直接の言及はない

### S134 Adrian Roselli

> As an industry, in general we praise sites that look good, maybe with nifty animations, cool hover effects, and the mythical 60fps golden standard.

- 媒体・日付: adrianroselli.com「We Reward the Wrong Things」2016-06-20（2019-01-30 更新）。引用は本人のツイートの再掲
- URL: https://adrianroselli.com/2016/06/we-reward-the-wrong-things.html
- 取得日: 2026-11-15
- 検証区分: C
- 使用箇所: SKILL.md / references/design-history.md
- 備考: 「60fps」を理想とする風潮への批判

### S135 Awwwards（Developer Award の紹介）

> demonstrate what it means to be inclusive of all people, regardless of device or browser.

- 媒体・日付: awwwards.com/developer-award/
- URL: https://www.awwwards.com/developer-award/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: Awwwards は Developer Award の趣旨に「すべての人に開かれていること」を掲げる。個別の採点は次の項目

### S136 Awwwards（Lacoste Polo Factory の審査表）

> Semantics / SEO Animations / Transitions Accessibility WPO Responsive Design Markup / Meta-data 6.60 / 10 9.20 / 10 6.00 / 10 7.60 / 10 7.20 / 10 7.00 / 10

- 媒体・日付: awwwards.com/sites/lacoste-polo-factory（取得日の掲載値）
- URL: https://www.awwwards.com/sites/lacoste-polo-factory
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: Developer Award の項目別の平均（アニメーション 9.20、アクセシビリティ 6.00）。審査の採点表そのもの。値は掲載時点のもの

### S137 Awwwards

> Design: 40% points Usability: 30% points Creativity: 20% points Content: 10% points.

- 媒体・日付: awwwards.com/about-evaluation/
- URL: https://www.awwwards.com/about-evaluation/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: SOTD の配点（Design 40%・Usability 30%・Creativity 20%・Content 10%）。アクセシビリティは配点の項目にない（Developer Award 側の採点項目にある）

### S138 Zurb Radar（ニュース記事）

> The motion gets a 9. The thing that decides whether a screen reader user can use the page gets a 6.

- 媒体・日付: Zurb Radar 2026-07-25
- URL: https://radar.zurb.com/article/your-award-winning-site-might-be-locking-people-out
- 取得日: 2026-11-15
- 検証区分: C
- 使用箇所: SKILL.md / references/design-history.md
- 備考: 動きは 9、読み上げの可否に関わる点は 6、という記事の主張（Awwwards の採点表と整合）。記事は「選択の結果」と論じる

### S139 WebAIM

> 95.9% of home pages had detected WCAG 2 failures.
>
> The 2026 report on the accessibility of the top 1,000,000 home pages

- 媒体・日付: WebAIM「The WebAIM Million」2026 年版
- URL: https://webaim.org/projects/million/
- 取得日: 2026-11-16
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 上位 100 万のホームページで自動検出された WCAG 2 の失敗が 95.9%（2025 年は 94.8%）。WebGL 作品に限った数値ではない

### S140 Maciej Cegłowski

> I love sprawling Javascript experiments or well-designed web apps. This talk isn't about any of those. It's about mostly-text sites

- 媒体・日付: idlewords.com「The Website Obesity Crisis」2015-10-29 の講演の文字起こし
- URL: https://idlewords.com/talks/website_obesity.htm
- 取得日: 2026-11-15
- 検証区分: C
- 使用箇所: SKILL.md / references/design-history.md
- 備考: 重さへの批判の射程。大きな画像・動画・JavaScript の実験を好むと断ったうえで、文章中心のサイトの肥大化を批判している。WebGL 作品への批判として引用しない

### S141 Inigo Quilez（自サイトの記事一覧）

> all technical code snippets you'll find are under the MIT license so you can easily reuse them, but the mathematical/shader art is protected and requires a license for use.

- 媒体・日付: iquilezles.org/articles/
- URL: https://iquilezles.org/articles/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/shader-gradient-background.md
- 備考: コード断片は MIT、「数学的・シェーダーアート」は保護され利用に許諾が要る、という著者の明示。式の流用は MIT の表示を守る

### S142 Inigo Quilez

> When doing procedural graphics it's always a good idea to add color variation to the elements of the image.

- 媒体・日付: iquilezles.org/articles/palettes/
- URL: https://iquilezles.org/articles/palettes/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/shader-gradient-background.md
- 備考: 手続き的な絵では色の変化を足すとよい、という指針。数式による配色はグラデーション背景に使える

### S143 Patricio Gonzalez Vivo（The Book of Shaders の LICENSE）

> I share this Work for educational purposes, and you can link to it, through an URL, proper attribution and unmodified screenshot, as part of your educational material.
>
> All rights reserved. I am the sole copyright owner of this Work. You cannot host, display, distribute or share this Work in any form, including physical and digital.

- 媒体・日付: github.com/patriciogonzalezvivo/thebookofshaders の LICENSE（2025 年表記）
- URL: https://github.com/patriciogonzalezvivo/thebookofshaders/blob/master/LICENSE
- 取得日: 2026-11-16
- 検証区分: A
- 使用箇所: SKILL.md / examples/shader-gradient-background.md
- 備考: 照合は raw.githubusercontent.com/patriciogonzalezvivo/thebookofshaders/master/LICENSE の同ファイル。全権利留保。リンクと無改変のスクリーンショットだけが許される。本文は引用も翻訳もしない（章名と本 skill の分析だけを使う）

### S144 AIGA Eye on Design（記事の地の文）

> What started in 2001 as a side project has since become a worldwide environment used by thousands of people to explore the creative possibilities of coding

- 媒体・日付: AIGA Eye on Design「Processing: the Software that Shaped Creative Coding」
- URL: https://eyeondesign.aiga.org/processing-the-software-that-shaped-creative-coding/
- 取得日: 2026-11-15
- 検証区分: R
- 使用箇所: references/design-history.md
- 備考: Processing の開始年（2001）。記事の地の文で、共同創設者の発言ではない。2001 年は Wikipedia の First appeared 欄とも一致する

### S145 Wikipedia（Chrome Experiments の項）

> Launched on March 1, 2009, Google Chrome Experiments is an official Google website

- 媒体・日付: en.wikipedia.org/wiki/Chrome_Experiments
- URL: https://en.wikipedia.org/wiki/Chrome_Experiments
- 取得日: 2026-11-15
- 検証区分: R
- 使用箇所: references/design-history.md
- 備考: Wikipedia は開始日を 2009-03-01 とし、Google の告知記事の日付（2009-03-18）と食い違う。どちらも 2009 年。日付が要るときは告知記事の日付を使う

### S146 Khronos WebGL ワーキンググループ

> When WebGL 2.0 first shipped in 2017, it was a huge step forward in terms of graphics capabilities

- 媒体・日付: Khronos ブログ 2022-02-09（Wayback 保存コピー）
- URL: https://web.archive.org/web/20261014074649/https://www.khronos.org/blog/webgl-2-achieves-pervasive-support-from-all-major-web-browsers
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: WebGL 2.0 の初出荷は 2017 年（Khronos の記述）。全主要ブラウザの対応は 2022 年

### S147 three.js リポジトリ（package.json、タグ r187）

> "name": "three", "version": "0.187.0"

- 媒体・日付: github.com/mrdoob/three.js の r187 タグの package.json
- URL: https://raw.githubusercontent.com/mrdoob/three.js/r187/package.json
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/generative-poster.md / examples/particle-product-hero.md / examples/scroll-procedural-3d.md / examples/shader-gradient-background.md
- 備考: タグ r187 の npm パッケージ版は 0.187.0。CDN の URL に書く版（three@0.187.0）の根拠

### S148 Wikipedia（Three.js の項）

> Stable release 187 [ 3 ] / 30 October 2026

- 媒体・日付: en.wikipedia.org/wiki/Three.js（取得 2026-11-15）
- URL: https://en.wikipedia.org/wiki/Three.js
- 取得日: 2026-11-15
- 検証区分: R
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/particle-product-hero.md / examples/scroll-procedural-3d.md / examples/shader-gradient-background.md
- 備考: r187 の公開日（2026-10-30）。更新の頻度は出典を取っていない。実装時に最新の版を確認する

### S149 web.dev（S124・S125 と同じ記事）

> Note that the parentheses around the actual media query are obligatory

- 媒体・日付: web.dev「prefers-reduced-motion」
- URL: https://web.dev/articles/prefers-reduced-motion
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/shader-gradient-background.md
- 備考: JavaScript で matchMedia に渡す文字列は括弧が必須。括弧が無いと常に false になる誤りが起きやすい

### S150 MDN

> This is especially useful for saving resources and improving performance by letting a page avoid performing unnecessary tasks when the document isn't visible.

- 媒体・日付: MDN「Page Visibility API」
- URL: https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/particle-product-hero.md / examples/shader-gradient-background.md
- 備考: タブが見えないときに無駄な処理を避ける。描画ループの停止に使う

### S151 MDN

> The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported, or the canvas has already been set to a different context mode.

- 媒体・日付: MDN「HTMLCanvasElement: getContext()」
- URL: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/generative-poster.md / examples/particle-product-hero.md / examples/scroll-procedural-3d.md / examples/shader-gradient-background.md
- 備考: 文脈が得られないと null が返る。null のときに代替表示へ進む判定に使う

### S152 Processing 公式（Overview）

> On August 9th 2021, we celebrated the twentieth anniversary of the first Processing software release.

- 媒体・日付: processing.org/overview
- URL: https://processing.org/overview/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: Processing の最初のソフトウェア公開は 2001-08-09（20 周年を 2021-08-09 に祝った、との記述による）

### S153 James Craig（WebKit ブログ）

> It was added in iOS 7 to allow users the ability to disable parallax and app launching animations.

- 媒体・日付: WebKit ブログ「Responsive Design for Motion」2017-05-15
- URL: https://webkit.org/blog/7551/responsive-design-for-motion/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: iOS 7 で「視差とアプリ起動の動き」を切る設定（Reduce Motion）が入った

### S154 James Craig（WebKit ブログ）

> The prefers-reduced-motion media feature was first proposed to the CSS Working Group in 2014

- 媒体・日付: WebKit ブログ「Responsive Design for Motion」2017-05-15
- URL: https://webkit.org/blog/7551/responsive-design-for-motion/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: prefers-reduced-motion は 2014 年に CSS WG へ提案された。WebKit の対応は 2017 年の記事で告知

### S155 Casey Reas（同対談記事）

> If you were learning computer programming at that time you were doing classes in a computer science department. You were only working with text and math, and for visual people—people who are about the sensation of aesthetics—working in those classes, you would either stay for a few weeks and leave, or you would stay for a year and you’d be in pain.

- 媒体・日付: AIGA Eye on Design「Processing: the Software that Shaped Creative Coding」
- URL: https://eyeondesign.aiga.org/processing-the-software-that-shaped-creative-coding/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: 当時の入口の問題（計算機科学の授業はテキストと数学だけで、視覚の人は数週間で去るか、苦痛を抱えて残る）。Processing が解こうとした課題

### S156 Khronos WebGL ワーキンググループ

> One of the great headaches of developing interactive graphics applications for online deployment is covering every base. Your targets likely include a near-infinite combination of browser vendors, browser versions, and graphics hardware.

- 媒体・日付: Khronos ブログ 2022-02-09（Wayback 保存コピー）
- URL: https://web.archive.org/web/20261014074649/https://www.khronos.org/blog/webgl-2-achieves-pervasive-support-from-all-major-web-browsers
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: Khronos が述べる WebGL の存在理由（ブラウザ・版・GPU の組み合わせが膨大という配備の悩みを均す）

### S157 Khronos WebGL ワーキンググループ

> WebGL 2.0 delivers the OpenGL ES 3.0 feature set, adding access to key features including transform feedback, instanced rendering, multiple render targets, uniform buffer objects, occlusion queries

- 媒体・日付: Khronos ブログ「WebGL 2.0 Achieves Pervasive Support from all Major Web Browsers」2022-02-09（Wayback 2026-10-14 保存コピー）
- URL: https://web.archive.org/web/20261014074649/https://www.khronos.org/blog/webgl-2-achieves-pervasive-support-from-all-major-web-browsers
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: WebGL 2.0 の追加機能（トランスフォームフィードバック・インスタンス描画・複数レンダーターゲット・一様バッファ・オクルージョンクエリなど）

### S158 Khronos WebGL Wiki

> To recover from a lost context you must take the following steps 1) add a lost context handler and tell it to prevent the default behavior

- 媒体・日付: Khronos WebGL Public Wiki「HandlingContextLost」（Wayback 保存コピー）
- URL: https://web.archive.org/web/20250129140616/https://www.khronos.org/webgl/wiki/HandlingContextLost
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/generative-poster.md / examples/particle-product-hero.md / examples/scroll-procedural-3d.md / examples/shader-gradient-background.md / references/design-history.md
- 備考: context lost を復元可能にする第 1 段（ハンドラーで既定動作を止める）

### S159 Khronos WebGL Wiki

> re-setup all your WebGL state and re-create all your WebGL resources when the context is restored.

- 媒体・日付: Khronos WebGL Public Wiki「HandlingContextLost」（Wayback 2025-01-29 保存コピー。現行は wikis.khronos.org で、本環境では 403）
- URL: https://web.archive.org/web/20250129140616/https://www.khronos.org/webgl/wiki/HandlingContextLost
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/generative-poster.md / examples/particle-product-hero.md / examples/scroll-procedural-3d.md / examples/shader-gradient-background.md / references/design-history.md
- 備考: context restored の後に、状態と全 WebGL 資源を作り直す（以前の資源は無効になる）

### S160 MDN

> The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport

- 媒体・日付: MDN「Intersection Observer API」
- URL: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/distortion-gallery.md / examples/particle-product-hero.md / examples/shader-gradient-background.md
- 備考: 要素が画面内にあるかを非同期に観測する。画面外の canvas の描画を止める判定に使える

### S161 Jonathan Avila（W3C WAI-IG メーリングリストへの返信、2021-07-27）

> Generally folks take an approach where you have invisible HTML components overlay the controls or you use an ARIA live region and keyboard handler to accept input and feed content of the focused elements to screen readers.

- 媒体・日付: w3.org の w3c-wai-ig アーカイブ「RE: WebGL experiences & accessibility」
- URL: https://lists.w3.org/Archives/Public/w3c-wai-ig/2021JulSep/0092.html
- 取得日: 2026-11-15
- 検証区分: C
- 使用箇所: SKILL.md / examples/scroll-procedural-3d.md
- 備考: WebGL 体験の支援技術対応の実務の方法（操作部の上に見えない HTML を重ねる、または ARIA ライブリージョンとキーボードハンドラー）。メーリングリスト上の実務者の意見で、規格の定めではない

### S162 Jonathan Avila

> An ARIA live region approach has a number of drawbacks for assistive technology such as speech recognition and braille displays.

- 媒体・日付: w3.org の w3c-wai-ig アーカイブ「RE: WebGL experiences & accessibility」
- URL: https://lists.w3.org/Archives/Public/w3c-wai-ig/2021JulSep/0092.html
- 取得日: 2026-11-15
- 検証区分: C
- 使用箇所: SKILL.md / examples/scroll-procedural-3d.md
- 備考: ARIA ライブリージョン方式は、音声認識や点字ディスプレイにとって欠点がある、という同氏の指摘（意見）

### S163 Iulia Brehuescu（同メーリングリストへの質問、2021-07-26）

> Provide a separate more linear/simpler experience while maintaining the main user flows?

- 媒体・日付: w3.org の w3c-wai-ig アーカイブ「RE: WebGL experiences & accessibility」
- URL: https://lists.w3.org/Archives/Public/w3c-wai-ig/2021JulSep/0092.html
- 取得日: 2026-11-15
- 検証区分: C
- 使用箇所: SKILL.md / examples/scroll-procedural-3d.md
- 備考: 質問者が挙げた 2 案（別の単純な体験を提供する／設定画面で動きやフォントを切り替える）。回答の合意ではなく、実務者の問いの例

### S164 abeto

> We spent weeks modeling everything by hand

- 媒体・日付: Awwwards「Messenger」事例記事 2026-01-15（制作 abeto）
- URL: https://www.awwwards.com/messenger.html
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / examples/scroll-procedural-3d.md / examples/shader-gradient-background.md / references/design-history.md
- 備考: 環境のモデリングを手作業で数週間かけた（制作者の自己申告）。3D 素材の工程の例

### S165 Jakob Nielsen

> Flash tends to degrade websites for three reasons: it encourages design abuse, it breaks with the Web's fundamental interaction principles, and it distracts attention from the site's core value.

- 媒体・日付: NN/g「Flash: 99% Bad」2000-10-29
- URL: https://www.nngroup.com/articles/flash-99-percent-bad/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md / references/design-history.md
- 備考: Flash が使い勝手を損なう 3 つの理由（悪いデザインの誘発・Web の基本原則を破ること・サイトの核の価値から注意をそらすこと）

### S166 p5.js 公式（About）

> The Processing Ecosystem Processing Processing.py Processing for Android Processing for Pi p5.js

- 媒体・日付: p5js.org/about
- URL: https://p5js.org/about/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: p5.js 公式ページは、p5.js を Processing の仲間（The Processing Ecosystem）の一つとして並べる

### S167 p5.js 公式（About）

> Lauren Lee McCarthy p5.js Creator and Lead, 2013-2020

- 媒体・日付: p5js.org/about
- URL: https://p5js.org/about/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: references/design-history.md
- 備考: p5.js の作者・リード（2013-2020）の記載。p5.js の公開日そのものではない

## 進め方の出典（デザイン一般・制作会社の自己説明）

### S168 Design Council（英国）

> The Double Diamond is a visual representation of the design and innovation process. It’s a simple way to describe the steps taken in any design and innovation project, irrespective of methods and tools used.

- 媒体・日付: The Double Diamond（公式ページ。日付の記載なし）
- URL: https://www.designcouncil.org.uk/our-resources/the-double-diamond/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: ダブルダイヤモンドの定義。「手法やツールに依らず」プロセスの段階を述べる図という位置づけ。機関の自称。進め方の型の骨格に使える

### S169 Design Council（英国）

> The two diamonds represent a process of exploring an issue more widely or deeply (divergent thinking) and then taking focused action (convergent thinking).

- 媒体・日付: Framework for Innovation（公式ページ。日付の記載なし）
- URL: https://www.designcouncil.org.uk/our-resources/framework-for-innovation/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 発散と収束の 2 回の繰り返しという構造の説明。機関の自称

### S170 Design Council（英国）

> This is not a linear process as the arrows on the diagram show. Many of the organisations we support learn something more about the underlying problems which can send them back to the beginning.

- 媒体・日付: Framework for Innovation（公式ページ。日付の記載なし）
- URL: https://www.designcouncil.org.uk/our-resources/framework-for-innovation/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: ダブルダイヤモンドは直線ではないと機関自身が述べる箇所。「図は一方向に見えるが実際は戻る」という注意の根拠

### S171 Ryan Singer（Basecamp）

> Estimates start with a design and end with a number. Appetites start with a number and end with a design. We use the appetite as a creative constraint on the design process.

- 媒体・日付: Shape Up, Chapter 3「Set Boundaries」（オンライン版。日付の記載なし）
- URL: https://basecamp.com/shapeup/1.2-chapter-03
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 見積もり（設計から数字）と appetite（数字から設計）の逆転。時間・予算の制約を設計の入力にする考え方。Basecamp の自称

### S172 Stanford d.school

> It’s a deck of cards, so you can start wherever you want.

- 媒体・日付: Design Thinking Bootleg（公式ページ。日付の記載なし）
- URL: https://dschool.stanford.edu/resources/design-thinking-bootleg
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 順序を固定せず、どこからでも始めるというカードの使い方。「5 段階の直線」ではないという一次の根拠

### S173 Sarah Gibbons（Nielsen Norman Group）

> Be a master chef, not a line cook: take the recipe as a framework, then tweak as needed. Each phase is meant to be iterative and cyclical rather than strictly linear.

- 媒体・日付: Design Thinking 101（NN/g の記事、2016-07-31 公開・2026-07-15 最終確認）
- URL: https://www.nngroup.com/articles/design-thinking/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 枠組みを「レシピ」ではなく出発点として使う。各段階が往復する点。調査機関の自称

### S174 Sarah Gibbons（Nielsen Norman Group）

> It is nearly impossible to improve a design without feedback from others. Their input helps you avoid mistakes and thus create higher quality work.

- 媒体・日付: Design Critiques: Encourage a Positive Culture to Improve Products（NN/g の記事、2016-10-23）
- URL: https://www.nngroup.com/articles/design-critiques/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 批評の目的。Jen の「批評の欠如」批判への実務側の答えの一つ

### S175 Sarah Gibbons（Nielsen Norman Group）

> Sharing designs early allows for earlier buy-in from team members that otherwise may not feel confident about the work and builds team consensus.

- 媒体・日付: Design Critiques（NN/g の記事、2016-10-23）
- URL: https://www.nngroup.com/articles/design-critiques/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 早く見せることで合意形成が進むという主張。提案と合意形成の型

### S176 Sarah Gibbons（Nielsen Norman Group）

> Often the critique goes against the overarching organizational structure or certain team members object to the practice. In such cases, the best approach is to start soon and start small

- 媒体・日付: Design Critiques（NN/g の記事、2016-10-23）
- URL: https://www.nngroup.com/articles/design-critiques/
- 取得日: 2026-11-16
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 批評が組織の構造に合わない場合や、反対する人がいる場合の始め方

### S177 Ryan Singer（Basecamp）

> A fat marker sketch is a sketch made with such broad strokes that adding detail is difficult or impossible.

- 媒体・日付: Shape Up, Chapter 4「Find the Elements」（オンライン版。日付の記載なし）
- URL: https://basecamp.com/shapeup/1.3-chapter-04
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 太いペンで描く＝細部を描けない道具で、粗さを意図的に保つ。方向性を細部に入る前に決める手段。Basecamp の自称

### S178 Sarah Gibbons（Nielsen Norman Group）

> Implement Put the vision into effect. Ensure that your solution is materialized and touches the lives of your end users. This is the most important part of design thinking, but it is the one most often forgotten.

- 媒体・日付: Design Thinking 101（NN/g の記事、2016-07-31 公開・2026-07-15 最終確認）
- URL: https://www.nngroup.com/articles/design-thinking/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 「実装」を最重要で最も忘れられやすい段階とする記述。デザインと実装の境界・引き渡しの詰めの根拠。調査機関の自称

### S179 GOV.UK（Government Digital Service・Central Digital and Data Office）

> Service design starts with identifying user needs. If you don’t know what the user needs are, you won’t build the right thing. Do research, analyse data, talk to users. Don’t make assumptions. Have empathy for users, and remember that what they ask for isn’t always what they need.

- 媒体・日付: Government Design Principles（公式ガイダンス、2012-04-03 公開・2025-04-02 更新）
- URL: https://www.gov.uk/guidance/government-design-principles
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 原則 1。「求められたもの」と「必要なもの」を分ける問いの型。政府機関の自称

### S180 GOV.UK（GDS・CDDO）

> Accessible design is good design. Everything we build should be as inclusive, legible and readable as possible. If we have to sacrifice elegance - so be it.

- 媒体・日付: Government Design Principles（2012-04-03 公開・2025-04-02 更新）
- URL: https://www.gov.uk/guidance/government-design-principles
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 原則 6。アクセシビリティを優雅さより優先する明言。品質の基準の根拠

### S181 GOV.UK（Service Manual）

> Before you start your research, you’ll need to interrogate that solution and reframe it as a problem to be solved.

- 媒体・日付: How the discovery phase works（Service Manual、2016-08-04 公開・2021-06-21 更新）
- URL: https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 「解決策を渡されたら問題に戻す」。依頼の受け方・問いの立て方の根拠

### S182 GOV.UK（Service Manual）

> You might not even want to prototype all of the transaction or element you’re working on: often it makes sense just to focus on the areas you think will be most challenging. This lets you do the minimum you need to test your riskiest assumptions.

- 媒体・日付: How the alpha phase works（Service Manual、2016-08-04 公開）
- URL: https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 試作の対象を最も難しい部分に絞り、最も危うい仮定を検証する。試作の範囲を決める型

### S183 Lusion（制作会社）

> Before any line of code is written, we have to sit down and brainstorm ideas.

- 媒体・日付: From Concept Prototyping to Production in a Creative Studio（Medium、2017-10-24）
- URL: https://medium.com/lusion-ltd/from-concept-prototyping-to-production-in-a-creative-studio-f2083e96c4b9 （照合は Wayback Machine の保存コピー: https://web.archive.org/web/2026/https://medium.com/lusion-ltd/from-concept-prototyping-to-production-in-a-creative-studio-f2083e96c4b9）
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: コードの前に発想とムードボードを置く WebGL スタジオの進め方。スタジオの自称

### S184 Lusion（制作会社）

> This involves sketching out a visual prototype of the product. We do this by using rapid prototyping tools, for example, through Houdini FX and Cinema 4D.

- 媒体・日付: From Concept Prototyping to Production in a Creative Studio
- URL: https://medium.com/lusion-ltd/from-concept-prototyping-to-production-in-a-creative-studio-f2083e96c4b9 （照合は Wayback Machine の保存コピー: https://web.archive.org/web/2026/https://medium.com/lusion-ltd/from-concept-prototyping-to-production-in-a-creative-studio-f2083e96c4b9）
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 視覚の試作を実時間の実装より先に作る（Houdini・Cinema 4D）。WebGL 表現で「見た目の確定」と「実時間への再現」を分ける型

### S185 Lusion（制作会社）

> In the production phase, we reproduce the visual prototype in real-time based on the required platforms such as Unity, Unreal, vvvv and WebGL. In this process we will try to optimize the codes in order to make it work in real-time.

- 媒体・日付: From Concept Prototyping to Production in a Creative Studio
- URL: https://medium.com/lusion-ltd/from-concept-prototyping-to-production-in-a-creative-studio-f2083e96c4b9 （照合は Wayback Machine の保存コピー: https://web.archive.org/web/2026/https://medium.com/lusion-ltd/from-concept-prototyping-to-production-in-a-creative-studio-f2083e96c4b9）
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 試作を実時間に「再現」し最適化する工程。見た目と実装の境界・性能の詰めの型

### S186 Active Theory（制作会社）

> Memory usage. With every 3D scene using many render targets, we needed a smart solution to ensure memory usage stayed within an acceptable range. To do this, we reused these targets throughout the site. The implementation involved using an internal tool we built on another project. Hardware detection. By detecting the device a user is on, we would modify effects and transitions to ensure they get the best experience possible based on their device capabilities.

- 媒体・日付: Fiomet case study（Medium、2020-03-25）
- URL: https://medium.com/active-theory/fiomet-case-study-9a0180268423 （照合は Wayback Machine の保存コピー: https://web.archive.org/web/2026/https://medium.com/active-theory/fiomet-case-study-9a0180268423）
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: メモリ使用量の管理と端末検出による効果の切り替え。WebGL 表現の「制約のなかでの品質」の例。スタジオの自称

### S187 Malvah Studio（Codrops 掲載）

> this phase was driven more by prototyping than traditional design. We worked in tight, iterative loops with the client, across design, 3D, and development to test feasibility early and often.

- 媒体・日付: Inside the Frontier of AI, WebXR & Real-Time 3D: Crafting KODE Immersive（Codrops、2025-06-16）
- URL: https://tympanus.net/codrops/?p=95906 （照合は Wayback Machine の保存コピー: https://web.archive.org/web/2026/https://tympanus.net/codrops/?p=95906）
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 操作が主体の体験では、静的なデザインより試作が先行するという制作会社の説明。スタジオの自称

### S188 Unseen Studio®（Codrops 掲載の自社ケーススタディ）

> Naturally, real time reflections and shadows in WebGL are something very performance heavy and we had to look into creative ways to overcome these limitations.

- 媒体・日付: Case Study: Crosswire（Codrops、2023-04-04）
- URL: https://tympanus.net/codrops/2023/04/04/case-study-crosswire/ （照合は Wayback Machine の保存コピー: https://web.archive.org/web/2026/https://tympanus.net/codrops/2023/04/04/case-study-crosswire/）
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: スタイルフレーム（静止画の見た目）を実時間で再現する際の性能の壁。見た目の合意と実現可能性の乖離の例。スタジオの自称

### S189 Karri Saarinen（Linear 共同創業者）

> Through this process, I generated hundreds of screens and was able to narrow down a few major directions that resonated most.

- 媒体・日付: How we redesigned the Linear UI (part II)（2024-03-28）
- URL: https://linear.app/now/how-we-redesigned-the-linear-ui
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 複数案を大量に出してから少数の方向性に絞る。方向性を複数出して絞る型の実例。企業の自称

### S190 Hikaru Sudo（Goodpatch）

> 「簡単に作れるようになること」と「工程を省略すること」は別物です。

- 媒体・日付: 生成AIが作るプロトタイプは、本当にサービスづくりの近道になるのか？（Goodpatch Blog、2026-08-28）
- URL: https://goodpatch.com/blog/2026-08-ai-prototype
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 試作が速くなっても目的・検証の工程は省けないという主張。国内デザイン会社の自称。プロトタイプの扱いの注意の根拠

### S191 Hikaru Sudo（Goodpatch）

> プロトタイプが素早く出来上がるからといって、いきなり大正解を作れるとは限りません。コンセプトのような抽象度でユーザーからの共感を得られるのか、具体的な機能で共感を得られるのかは全く別の話です。

- 媒体・日付: 生成AIが作るプロトタイプは、本当にサービスづくりの近道になるのか？
- URL: https://goodpatch.com/blog/2026-08-ai-prototype
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: コンセプトへの共感と具体的な機能への共感を分けて検証するという考え方

### S192 Hikaru Sudo（Goodpatch）

> 目的があいまいなまま進めてしまうと収束が難しくなり、場当たり的なピボットを繰り返して無駄なコストを払うことにもなりかねません。

- 媒体・日付: 生成AIが作るプロトタイプは、本当にサービスづくりの近道になるのか？
- URL: https://goodpatch.com/blog/2026-08-ai-prototype
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 目的（誰に・どんな課題・どうなるか）を仮説でも先に言葉にしておくと、収束の判断軸になる、という主張

### S193 Emil Kowalski（デザインエンジニア）

> Before you start animating, ask yourself: what’s the purpose of this animation?

- 媒体・日付: You don’t need animations（日付の記載なし）
- URL: https://emilkowal.ski/ui/you-dont-need-animations
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 動きを足す前に目的を問う。操作感の相談の型。個人の主張

### S194 Emil Kowalski（デザインエンジニア）

> How often users will see an animation is a key factor in deciding whether to animate or not.

- 媒体・日付: You don’t need animations（日付の記載なし）
- URL: https://emilkowal.ski/ui/you-dont-need-animations
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 使用頻度でアニメーションの要否を決める基準。個人の主張

### S195 Vercel（Web Interface Guidelines）

> Only animate when it clarifies cause & effect or when it adds deliberate delight

- 媒体・日付: Web Interface Guidelines（公式ページ。日付の記載なし）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 動きを足す条件を「因果の明確化か意図した楽しさ」に限る。企業の自称

### S196 Vercel（Web Interface Guidelines）

> Honor prefers-reduced-motion. Provide a reduced-motion variant.

- 媒体・日付: Web Interface Guidelines（公式ページ。日付の記載なし）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: 動きを減らす設定への対応を必須として書く例

### S197 Vercel（Web Interface Guidelines）

> Keyboard works everywhere. All flows are keyboard-operable & follow the WAI-ARIA Authoring Patterns.

- 媒体・日付: Web Interface Guidelines（公式ページ。日付の記載なし）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: キーボード操作を前提にする基準の例

### S198 Josh W. Comeau

> I've written before about respecting “prefers-reduced-motion”, an OS-level setting users can toggle to express a preference for less motion.

- 媒体・日付: CSS Transitions（Interactive guide。日付の記載なし）
- URL: https://www.joshwcomeau.com/animation/css-transitions/
- 取得日: 2026-11-15
- 検証区分: A
- 使用箇所: SKILL.md
- 備考: OS の設定で動きを減らす利用者への配慮。個人の主張

### S199 Natasha Jen（Pentagram パートナー）

> The reduction of a complex creative problem-solving mindset into five steps makes design seem easy when it’s not.

- 媒体・日付: It’s Nice That「Why Design Thinking is bullshit」
- URL: https://www.itsnicethat.com/articles/natasha-jen-pentagram-graphicdesign-230218
- 取得日: 2026-11-15
- 検証区分: C
- 使用箇所: SKILL.md
- 備考: 5 段階への還元が「デザインは易しい」という誤解を生む、という批判。デザインの厳しさ（批評・推敲）を守る立場の根拠

### S200 Natasha Jen（Pentagram パートナー）

> Although design thinking has now been relegated to a buzzword, the concepts of design thinking are not to be blamed. The real culprits are the practitioners exploiting the popularity of the movement by advertising design thinking as a panacea for stagnation.

- 媒体・日付: It’s Nice That「Why Design Thinking is bullshit」
- URL: https://www.itsnicethat.com/articles/natasha-jen-pentagram-graphicdesign-230218
- 取得日: 2026-11-15
- 検証区分: C
- 使用箇所: SKILL.md
- 備考: 批判の矛先が概念そのものではなく、万能薬として売る実践者に向く点。批判を「型は不要」と誤読しないための根拠


## 引用ではない参照（事実の根拠）

書籍・サイトで、本文の引用を載せないもの。要旨は本 skill の言葉で、書誌情報は取得できた範囲だけ書く（取得できなかった項目は「未確認」）。

- N01 Patricio Gonzalez Vivo・Jen Lowe, *The Book of Shaders*（https://thebookofshaders.com/）。README の目次に、フラグメントシェーダーの入門として、形づくる関数・色・形・行列・パターン、乱数・ノイズ・セルラーノイズ・フラクショナルブラウン運動、画像処理・シミュレーション・3D などの章が並ぶ（2026-11-15 取得の README）。LICENSE は全権利留保で、リンクと無改変のスクリーンショットだけを許す（S143）。本文の引用・翻訳をしない。「シェーダーを学ぶなら」の紹介にとどめる。刊行年は未確認
- N02 Inigo Quilez のサイト（https://iquilezles.org/）。記事一覧（https://iquilezles.org/articles/）と、パレット（https://iquilezles.org/articles/palettes/）、距離関数（https://iquilezles.org/articles/distfunctions/）の記事を取得した。距離関数の記事は、基本的な 3D 形状の符号付き距離関数と、それらを滑らかに組み合わせる式の一覧を載せる（同ページの導入による）。利用条件は S141。式を使うときは MIT の表示を守り、アートの複製はしない
- N03 Awwwards の事例記事で、取得したが本台帳では引用していないもの: Immersive Garden（2025-03-04）、KODE Immersive（Malvah、2025-07-09）、Shapefarm コーポレートサイト（Garden Eight、2022-04-11）、Cobo（Niccolò Miranda、2020-03-20）。いずれも制作者の自己申告。必要なら再取得して使う
- N04 Khronos の WebGL 1.0・2.0 の仕様（registry.khronos.org/webgl/specs/latest/1.0/ と 2.0/）。1.0 から 1 点だけ引用した（S64）。仕様の全体は読んでいない
- N05 John Maeda『Design By Numbers』と Reas・Fry の Processing の書籍（MIT Press）。MIT Press のページは 403 で取得できず、書名・刊行年・ISBN は未確認。DBN の公式ページに DBN の書籍の正誤表への言及がある（https://dbn.media.mit.edu/）。内容は引用していない
- N06 Codrops の記事（tympanus.net）。直接取得は 403。Wayback 経由で 1 件（2026-03-04 の「WebGL for Designers」。S71、S72）だけ取得した。ほかの Codrops の事例記事は未取得
- N07 Lusion の Oryzo の裏側シリーズ。取得時点で公開されていたのは Part 1・2・3 の 3 本（ブログの一覧に「3 posts」）。シリーズは全 7 回の予定で、Part 4 以降は未公開か未取得（S109、S104、S111 の記事）
- N08 W3C WAI-IG のメーリングリストの 2021 年のスレッド（WebGL 体験とアクセシビリティ）。1 通だけ取得した（S161）。同スレッドの Taliesin Smith の返信は未取得
- N09 Awwwards の Developer Award の採点は、Lacoste の 1 件（S136）だけを区分 A とした。ほかの受賞作の採点の集計はしていない（「受賞作の評価は軒並み Accessibility が低い」と一般化しない）

## 未検証・伝聞

事実・引用として使わない。流通しているが、出典を確認できなかったもの。

- 「iOS の Safari のメモリ上限は NNN MB（端末ごとに異なる）」という具体値: Messenger の記事はページが警告なしに終了されると述べるが（S76）、MB の値は書かない。他の記事の値は取得していない
- 「WebGL のシーンは draw call を 100 以下に」「三角形は N 万以下に」といった数値の目安: 取得した MDN と three.js の文書は「減らすと効く」とだけ述べ、上限値を示さない
- 「Awwwards の 2026 年上半期 SOTD の 61% が没入型 3D」: 検索結果に出た第二次ブログの数値で、一次の集計を確認していない
- 「Lando Norris のサイトは Three.js と深度マップとシェーダーで作られている」: 取得できた範囲では、Awwwards のタグ（WebGL・GSAP・Webflow）以外は確認できていない。技法を断定しない
- 「Vera Molnár は "I imagined I had a computer" と語った」: 検索結果の要約で見た文で、原文のページは取得していない。Right Click Save と Studio International の引用だけを使う
- Jobs の書簡の公開日（2010-04-29）: 検索結果の要約による。書簡の本文に日付は無い
- p5.js・openFrameworks の開始年: 取得した公式ページには年が書かれていない。本台帳では書かない
- Eric Bailey による Awwwards の Best of 2020 候補の確認（2021 年 1 月、Cargo Creative の記事が紹介）: 検索結果の要約のみ。原記事は取得できなかった
- Cydney Stumpel の「アクセシブルな受賞サイトの作り方」ガイド（girl-code.cydstumpel.nl）: JavaScript 描画で本文を取得できなかった
- 「WebGPU は WebGL より常に速い」: 取得した three.js のマニュアルは、場合によっては WebGLRenderer のほうが速いと述べる（S39）。一般則として書かない
- 「AI が作った見た目（既定値に寄った見た目）に飽きた」という声: 2026-11 時点の流行の話で、本台帳に出典を載せていない。本 skill は、既定値に寄っていないかの点検の手順と理由（見た目が画一になる）だけを、本 skill の整理として書く。具体的な見た目の列挙は、導入されていれば designer-web の台帳を参照する
- 「Awwwards の受賞作は軒並みアクセシビリティが低い」という一般化: 本台帳が区分 A で確認したのは Lacoste の 1 件の採点（S136）だけ。S139 は上位 100 万ホームページの検出率で、受賞作の数値ではない

## 調査の限界

- 区分 A の出典は、取得時点の本文である。Web ページは随時改訂される（特に three.js のマニュアル・MDN・Awwwards の採点・WebGPU の対応状況）。three.js は r187 のタグに固定して取得したが、公開サイト（threejs.org）の表示とは異なりうる
- Awwwards のケーススタディのうち、Messenger・Igloo Inc・Bruno's Portfolio は取得でき、逐語で照合した。Oryzo は Lusion のブログ（Part 1〜3）を取得した。Cartier・Santioni・Lando Norris などの技法の記事は取得していない
- 取得できなかった重要な出典: Codrops（403、Wayback で 1 件のみ）、MIT Press の書籍ページ（403）、Active Theory の Medium（直接は 403、Wayback で 2 件）、apple.com の現行ページ（404、Wayback で代替）、wikis.khronos.org の WebGL Wiki（403、Wayback で代替）、Shadertoy の利用規約（取得できず）、Eric Bailey の原記事、Cydney Stumpel のガイド。FWA・CSSDA は未調査
- 領域の空白（出典が薄い論点）:
  - 支援技術（スクリーンリーダー）が実際に WebGL・canvas のフォールバックをどう扱うかの実測。取得したのは仕様（WHATWG）と、実務者の意見・ライブラリの説明のみ
  - 端末のメモリ・GPU の上限の定量（iOS・Android の具体値）。Device Memory API は標準ではなく、対応が限られる（S67）
  - 性能の定量基準（draw call・三角形・テクスチャの MB）の一次の出典。MDN と three.js は方向だけ
  - 省電力・熱・ファン騒音など、WebGL の常時描画が端末に与える影響の測定
  - 日本語圏の制作会社・賞の工程（取得できた範囲では、技法まで追えた国内作品は 0 件）
  - Flash 期の Web 表現を擁護する一次の論考（本台帳は Nielsen・Jobs の批判と Adobe の終了告知のみ）
  - WebGPU の主要ブラウザでの実際の性能・安定性の第三者測定
  - 生成芸術の系譜のうち、Frieder Nake・Georg Nees・Harold Cohen・Cybernetic Serendipity（1968 年）などは取得していない
- 再照合の結果: S01 から S167 の区分 A の 149 項目は、2026-11-15 に本文を新規に取得し直して照合し、149 項目が一致、0 項目が不一致だった。S06・S22・S114・S118・S119・S121・S139・S143 に足した逐語行と、S44・S113・S176 の引用の伸ばしは、その後に追加した（取得済みの本文との照合で一致を確認した）。S168 以降の区分 A の項目は、取得した本文との照合を行った。取得し直しの再照合の結果は、本台帳には記録していない
- 進め方の出典（S168 以降）は、組織・個人の自己説明に偏る。進め方の有効性を第三者が比較した調査は含めていない。WebGL・クリエイティブコーディングの表現の評価基準を述べた一次資料は取得できていない（制作会社の自己説明に限られる）
- 動きの設計（イージング・時間）と、見た目の方向性（色・書体・レイアウトの様式）の出典は、本台帳に含めない。導入されていれば designer-interaction・designer-web の台帳を参照する

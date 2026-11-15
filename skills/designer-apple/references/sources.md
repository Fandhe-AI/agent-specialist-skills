# designer-apple 出典台帳

`SKILL.md` と `examples/` が根拠とした出典の台帳。引用原文（英語・逐語）・発言者・媒体・日付・URL・取得日・検証区分を記す。S01 から S50 は `SKILL.md` 本体の根拠、S51 から S78 は `examples/` の具体例と `SKILL.md` の「制作時の指針」の根拠、S79 以降は `references/design-history.md` と `references/design-history-eras.md`（デザイン史）の根拠である（S185 まで）。S186 以降は `SKILL.md` の「作る前の進め方と確かめ方」の根拠である。

## 凡例

- 検証区分
  - A: 原典・公式ページ・公式セッションのトランスクリプト・原典の保存コピー（Wayback Machine）・記者署名記事の本文を取得し、引用文が逐語で含まれることを機械的に照合した。口頭発言を媒体が文字にしたものは、その書き起こしの精度に依存する
  - B: 第三者の書き起こし、または他媒体経由の引用（原典との照合なし）。本人の発言である可能性は高いが、書き起こし・転載の誤りは排除できない
  - C: 批判・論評側の主張。引用が逐語であることのみを確認し、主張の因果は確認していない
  - R: 記者・第三者の地の文。発言者本人の発言ではない（本人発言として引用しない）
  - U: 未検証（末尾の一覧）。事実・引用として使わない
- 「本体掲載」は、`SKILL.md` 本体に英語原文のまま引用した項目。それ以外の項目は、本体では要旨（日本語）としてのみ使った根拠である
- 「使用箇所」（S51 以降）は、その出典の値・引用を使った `examples/`・`references/design-history.md`・`references/design-history-eras.md` のファイル、`SKILL.md` の箇所。ファイル内の S 番号の記載から機械的に集計した
- S51 から S78 の HIG の本文は、Apple が提供する各ページの本文データ（JSON 版）を取得して照合した。S79 以降の旧 HIG・発表資料は、Internet Archive の OCR 全文と Wayback Machine の保存コピーで照合した。WWDC の引用は公式トランスクリプトの本文との照合で、トランスクリプトの時刻は約 1 分単位の近似のため台帳には記載しない
- 数値（pt・px・比率・秒・スプリング値）は、区分 A で原文を確認できたものだけを「出典あり」として examples に使う。原文に無い値は、examples の中で「本 skill の目安（出典なし）」と明記している
- 引用文は英語原文を改変していない。原文のアポストロフィ・引用符・ダッシュの表記もそのまま残した
- 日本語の訳・要旨は本 skill の言葉であり、発言者本人の発言ではない
- 取得日は、出典ごとに最後に本文を確認した日。Wayback Machine の保存コピーを使った出典は、保存コピーの本文を照合した
- 体制・ガイドラインの記述は 2026-11-15 時点（Apple 公式 Leadership ページの取得日）

## 帰属上の注意

- 記者の地の文（区分 R）は Ive 本人の発言ではない。"thermal corner"（Mac Pro 2013）は Craig Federighi の発言で、Ive の発言ではない
- iPhone 発表（2007）と Design Matters（2025）は第三者の書き起こし経由。Design Matters は自動書き起こし由来の誤記を含みうる（同ページには年の誤記が疑われる箇所がある）
- Norman と Tognazzini の批判は主にソフト側（iOS 等）のインタラクション設計に向けたもの。Industrial Design の評価に流用しない
- Ive の 2024-2025 年の発言（Stripe・Rams Foundation 等）は退社後のもの。Apple 在籍期の哲学と混ぜない
- Steve Lemay の表記は Apple 公式 Leadership ページ（https://www.apple.com/leadership/、2026-11-15 取得）に合わせて "Steve Lemay, Vice President, Human Interface Design"。Molly Anderson は "Vice President, Industrial Design"（https://www.apple.com/leadership/molly-anderson/、同日取得）。Anderson の設計哲学を示す一次発言は Dezeen 2026-03-06 の 1 本のみで、断定の根拠にならない
- Dieter Rams の 10 原則は Vitsœ のページ（https://www.vitsoe.com/gb/about/good-design、2026-11-15 取得）が CC BY-NC-ND 4.0 のため、本 skill は原文の転載・翻訳をしない。`SKILL.md` は原則名の短い見出しと、Apple との対応関係の分析（本 skill の言葉）だけを載せる
- S79 以降（デザイン史）の英訳（Gropius・Tschichold・Müller-Brockmann・Ruder・Aicher など）は、原文（ドイツ語等）ではなく英訳の逐語で、原文との対応は確認していない。日本語にするときは英訳からの重訳と明記する
- デザイン史で、Apple の転換点の理由として挙げてよいのは、当時の Apple の文書・発表と、在籍中の役員が公の場で述べた発言に限る。Kare・Hertzfeld・Esslinger などの回想は当事者の回想で、Apple の見解ではない。回想の中の他人の台詞は引用しない
- Apple が公に述べた理由は、社内の実際の意思決定の理由と同じとは限らない。人事（Forstall の退任など）とデザイン方針の因果は、Apple が述べていないので断定しない
- 区分 R の機関の地の文（美術館・企業・大学のページ）は、年号の根拠に使い、本人の発言として引用しない。Cooper Hewitt のブログ記事（S100）は誤記が指摘されており、年号の根拠に使わない

## 引用の台帳

### S01 Jony Ive

> you have that sinking feeling that the fact that you are having to articulate the value and persuade other people is probably indicative of the fact that actually it's not good enough.

- 本体掲載: はい
- 媒体・日付: The Telegraph（Shane Richmond によるインタビュー第 2 部）, 2012-05-23
- URL: http://www.telegraph.co.uk/technology/apple/9283706/Jonathan-Ive-simplicity-isnt-simple.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 原典は paywall のため Wayback Machine の保存コピー本文で照合。価値を説明・説得しなければならない状態を「不十分の兆候」とみる自己点検の基準

### S02 Jony Ive

> Simplicity is not the absence of clutter, that's a consequence of simplicity. Simplicity is somehow essentially describing the purpose and place of an object and product.

- 本体掲載: はい
- 媒体・日付: The Telegraph（第 2 部）, 2012-05-23
- URL: http://www.telegraph.co.uk/technology/apple/9283706/Jonathan-Ive-simplicity-isnt-simple.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Wayback の保存コピーで照合。2011 年の Foreword では「complexity の不在ではない」という少し違う形で書いている（S42）

### S03 Jony Ive

> Our products are tools and we don't want design to get in the way.

- 本体掲載: はい
- 媒体・日付: The Telegraph（第 1 部）, 2012-05-23
- URL: http://www.telegraph.co.uk/technology/apple/9283486/Jonathan-Ive-interview-Apples-design-genius-is-British-to-the-core.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Wayback の保存コピーで照合

### S04 Jony Ive

> It's the 'finishing the back of the drawer' - you can argue that people will never see it and it's very hard to, in any rational sense, describe why it's important but it just seems important. It's a way that you demonstrate that you care for the people that you are making these products for.

- 本体掲載: はい
- 媒体・日付: The Telegraph（第 2 部）, 2012-05-23
- URL: http://www.telegraph.co.uk/technology/apple/9283706/Jonathan-Ive-simplicity-isnt-simple.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Wayback の保存コピーで照合。SKILL.md 本体には後半の 1 文のみ掲載

### S05 Jony Ive

> when I've designed something, or been involved in the design of something that doesn't work, I don't care what it looks like – it's ugly.

- 本体掲載: はい
- 媒体・日付: Stripe Sessions 2025 の対談 “A conversation with Sir Jony Ive KBE”（聞き手 Patrick Collison）, 2025-05
- URL: https://stripe.com/en-es/sessions/2025/a-conversation-with-sir-jony-ive
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Stripe 公式の書き起こし本文。退社後（2025 年）の発言なので Apple 在籍期の哲学と混ぜない

### S06 Steve Jobs

> It's not just what it looks like and feels like. Design is how it works.

- 本体掲載: はい
- 媒体・日付: The New York Times Magazine（Rob Walker）, 2003-11-30
- URL: https://designobserver.com/the-guts-of-a-new-machine/（再掲載）、https://www.nytimes.com/2003/11/30/magazine/the-guts-of-a-new-machine.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 再掲載の本文で照合。広く流通する "Design is not just what it looks like..." の形は誤りで、原文は主語が異なる

### S07 Steve Jobs

> That's been one of my mantras -- focus and simplicity.
> Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple.

- 本体掲載: はい
- 媒体・日付: BusinessWeek（聞き手 Andy Reinhardt）, 1998-05-25
- URL: https://web.archive.org/web/2012/http://www.businessweek.com/1998/21/b3579165.htm
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Wayback の保存コピーで照合

### S08 Steve Jobs

> Most people have no concept of how an automatic transmission works, yet they know how to drive a car.
> You don’t have to understand any of this stuff to use Macintosh

- 本体掲載: はい
- 媒体・日付: Playboy（David Sheff によるインタビュー）, 1985-02、Fortune による再掲載 2010-11-20
- URL: https://fortune.com/2010/11/20/steve-jobs-the-playboy-interview/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2 行目は原文で文末の句点が無い。SKILL.md 本体には 2 行目のみ掲載

### S09 Steve Jobs

> you’ve got to start with the customer experience and work backwards to the technology.

- 本体掲載: はい
- 媒体・日付: WWDC 1997 の質疑（Gruber が動画から書き起こし）
- URL: https://daringfireball.net/2014/02/working_backwards
- 取得日: 2026-11-15
- 検証区分: B
- 備考: 第三者の書き起こし経由。開催月は取得本文に記載なし。直前に "One of the things I’ve always found is that" が付く

### S10 Scott Forstall

> And how do we know they worked? You just had to watch people use it.
> easy to use. Approachable. Friendly. You can use it without a manual. It’s fun.

- 本体掲載: はい
- 媒体・日付: Computer History Museum のインタビュー（2017-06）、9to5Mac の書き起こし 2017-06-21
- URL: https://9to5mac.com/2017/06/21/scott-forstall-design-debate/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: 第三者の書き起こし経由。2 行目は同インタビューで良いデザインに求める条件として述べた文（SKILL.md 本体では要旨として使用）。本体掲載は 1 行目

### S11 Susan Kare

> even if someone's never seen it, you can ask them what it does, and they get it

- 本体掲載: はい
- 媒体・日付: Stanford Silicon Valley Archives のインタビュー（聞き手 Alex Pang）, 2000-09-08
- URL: https://web.stanford.edu/dept/SUL/sites/mac/primary/interviews/kare/trans.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 前後は "I like to think that good icons are instantly recognizable--" と "-- or it's so easy to remember that if someone tells you want it is once, it's easy to remember when you look at it."

### S12 Don Norman

> The principle of “discoverability” has been lost.
> in 1993 I left my University job and moved to Apple where I established the User Experience Architect’s Office.

- 本体掲載: はい
- 媒体・日付: jnd.org “Apple’s products are getting harder to use because they ignore the principles of design”, 2015-08-10
- URL: https://jnd.org/apples-products-are-getting-harder-to-use-because-they-ignore-the-principles-of-design/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ソフト（iOS 等）のインタラクション設計への批判であり、ハードウェア（ID）の評価ではない。現行 HIG はカスタムジェスチャーに Discoverable を求めている（S25）

### S13 Don Norman & Bruce Tognazzini

> The product is beautiful! And fun. As a result, when people have difficulties, they blame themselves. Good for Apple. Bad for the customer.

- 本体掲載: はい
- 媒体・日付: Fast Company（Co.Design）“How Apple Is Giving Design A Bad Name”, 2015-11-10
- URL: https://web.archive.org/web/2016/https://www.fastcompany.com/3053406/how-apple-is-giving-design-a-bad-name（公開日は https://jnd.org/how-apple-is-giving-design-a-bad-name/ で確認）
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Wayback の保存コピーで照合。ソフト側への批判。SKILL.md 本体には 3 文目（As a result, ...）の後半のみ掲載

### S14 Bruce Tognazzini

> actual simplicity is achieved by simplifying things, not by hiding complexity.

- 本体掲載: はい
- 媒体・日付: asktog.com “First Principles of Interaction Design (Revised & Expanded)”, 2014-03-05
- URL: https://asktog.com/atc/principles-of-interaction-design/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 直前に "In the early years of this century, Apple became so focused on generating the illusion of simplicity for the potential buyer that they began seriously eroding the productivity of their products." とあり、2 文の間を省略して引用される形。連続した部分文字列として掲載

### S15 Raluca Budiu（Nielsen Norman Group）

> One of the oldest findings in usability is that anything placed on top of something else becomes harder to see.

- 本体掲載: はい
- 媒体・日付: NN/g “Liquid Glass Is Cracked, and Usability Suffers in iOS 26”, 2025-10-10
- URL: https://www.nngroup.com/articles/liquid-glass/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 専門家による評価記事で、ユーザー調査の結果ではない可能性がある（記事本文で調査方法の記載は未確認）

### S16 Apple（HIG Onboarding）

> Ideally, people can understand your app or game simply by experiencing it, but if onboarding is necessary, design a flow that’s fast, fun, and optional.

- 本体掲載: はい
- 媒体・日付: Apple Human Interface Guidelines「Onboarding」
- URL: https://developer.apple.com/design/human-interface-guidelines/onboarding
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A
- 備考: Apple 提供の Markdown 版を取得

### S17 Apple（HIG Design principles）

> Simplicity isn’t minimalism.

- 本体掲載: はい
- 媒体・日付: Apple Human Interface Guidelines「Design principles」（変更履歴に 2026-06-08 Reintroduced design principles.）
- URL: https://developer.apple.com/design/human-interface-guidelines/design-principles
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A
- 備考: 同ページは "A well-designed experience removes the unnecessary, with every element earning its place." とも述べる

### S18 Apple（WWDC26 Session 250 “Principles of great design”）

> If you bury all your functionality inside a single place, that might make your interface look more minimal, but it doesn't make it simple.

- 本体掲載: はい
- 媒体・日付: WWDC26 Session 250（登壇は Apple の Design Evangelist 2 名。姓はページに無い）
- URL: https://developer.apple.com/videos/play/wwdc2026/250/
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A
- 備考: 公式セッションのトランスクリプト

### S19 Apple（WWDC26 Session 250）

> What do I pay attention to? What can I interact with? And how do I interact?

- 本体掲載: はい
- 媒体・日付: WWDC26 Session 250
- URL: https://developer.apple.com/videos/play/wwdc2026/250/
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A
- 備考: 原文は "Clear interfaces answer people's questions: What do I pay attention to? What can I interact with? And how do I interact?"

### S20 Craig Federighi

> I think we designed ourselves into a bit of a thermal corner, if you will.

- 本体掲載: 断片のみ（"thermal corner" の語句を本体に記載。逐語引用としては使っていない）
- 媒体・日付: TechCrunch “Apple pushes the reset button on the Mac Pro”, 2017-04-04
- URL: https://techcrunch.com/2017/04/04/apple-pushes-the-reset-button-on-the-mac-pro/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2013 年の Mac Pro について。発言者は Software Engineering の SVP であり、Ive ではない。同記事で形状ではなく性能目標から始めたとも述べた（"we didn't start with a shape and say, 'well, here's the fastest machine we can put in that box.'"）

### S21 Apple（HIG Design principles）

> There’s no one right way to apply these principles. Instead, they’re tools to help you weigh competing priorities and make key decisions on the path to a great design.
> Reintroduced design principles.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: HIG「Design principles」（2 行目は変更履歴の 2026-06-08 の行）
- URL: https://developer.apple.com/design/human-interface-guidelines/design-principles
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A
- 備考: 8 原則の見出し文は下の S 項目にまとめる

### S22 Apple（HIG Design principles）8 原則の見出し文

> Make something meaningful.
> Let people do things their own way.
> Act in people’s best interest.
> Build on what people know.
> Adapt to diverse contexts and needs.
> Be clear and direct.
> Care about every detail.
> Make it human.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: HIG「Design principles」。順に Purpose / Agency / Responsibility / Familiarity / Flexibility / Simplicity / Craft / Delight
- URL: https://developer.apple.com/design/human-interface-guidelines/design-principles
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A
- 備考: 対応は Apple のページ構成に従う。WWDC26 Session 250 が対応するセッション

### S23 Apple（HIG Design principles）

> Build forgiveness into your design, and make it easy.
> Don’t mistake delight for decoration.
> Delight emerges as the sum of the consideration that you put into your product.
> Drawing on concepts people already understand helps them feel immediately at home.
> Be fully transparent about what your product does and why.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: HIG「Design principles」
- URL: https://developer.apple.com/design/human-interface-guidelines/design-principles
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A
- 備考: Agency / Delight / Familiarity / Responsibility の記述。SKILL.md 本体では要旨として使用

### S24 Apple（HIG Settings / Onboarding / Offering help / Entering data / Launching）

> Provide reasonable default settings so most people can immediately start interacting with your app or game without performing additional configuration.
> Minimize the number of settings you offer.
> Postpone nonessential setup flows or customization steps.
> Avoid bloating your help content by explaining how standard components or patterns work.
> Don’t ask people to enter information that you can gather automatically
> Restore the previous state when your app restarts so people can continue where they left off.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: HIG「Settings」「Onboarding」「Offering help」「Entering data」「Launching」
- URL: https://developer.apple.com/design/human-interface-guidelines/settings（ほか onboarding / offering-help / entering-data / launching）
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A
- 備考: 既定値・設定・入力の最小化の根拠

### S25 Apple（HIG Gestures）

> If you decide to implement a custom gesture, make sure it’s: Discoverable / Straightforward to perform / Distinct from other gestures / Not the only way to perform an important action in your app or game
> Not the only way to perform an important action in your app or game
> If you’re finding it difficult to use simple language and graphics to describe a gesture, it may mean people will find the gesture difficult to learn and perform.
> Initiate undo (left swipe); initiate redo (right swipe).
> Initiate undo; initiate redo.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: HIG「Gestures」（カスタムジェスチャーの条件と、iOS 標準ジェスチャー表の文言）
- URL: https://developer.apple.com/design/human-interface-guidelines/gestures
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A
- 備考: 1 行目の「 / 」は、原文の箇条書き（Discoverable、Straightforward to perform、Distinct from other gestures、Not the only way…）を区切った表記で、現行 HIG の JSON 版から 2026-11-15 に取得（それ以外の行は 2026-11-14）。最後の 2 行は標準ジェスチャー表の三本指スワイプとシェイクの行。ガイドラインの要求水準と OS 自身の標準ジェスチャーの間にずれがあるという指摘は本 skill の分析

### S26 Apple（HIG Digital Crown / Nearby interactions / Feedback / Writing）

> If you don’t provide visual feedback, people are likely to assume that turning the Digital Crown has no effect in your app.
> When anchoring interactions to the Digital Crown, also be sure to back them up with corresponding touch screen interactions.
> Avoid using a nearby interaction as the only way to perform a task.
> Warn people when they initiate a task that can cause data loss that’s unexpected and irreversible.
> In contrast, don’t warn people when data loss is the expected result of their action.
> Check each word to be sure it needs to be there.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: HIG「Digital Crown」「Nearby interactions」「Feedback」「Writing」
- URL: https://developer.apple.com/design/human-interface-guidelines/digital-crown（ほか nearby-interactions / feedback / writing）
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A

### S27 Apple（WWDC26 Session 250）

> So choosing what to build, is often a matter of deciding what not to include.
> When we say simple, we don't mean minimal.
> Simply put, things that look the same should behave the same.
> The trick to metaphors, is making sure they aren't too literal or abstract.
> You might even find that leaning into one principle, feels like you're compromising on another.
> The way to make a design delightful isn't by adding confetti or tacking on extra flourishes at the end of your process.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: WWDC26 Session 250
- URL: https://developer.apple.com/videos/play/wwdc2026/250/
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A

### S28 Apple（WWDC17 Session 802 “Essential Design Principles”）

> In other words, if your app is complex, it is okay to make the most useful 20 percent of functions easier to find by hiding the other 80 percent.
> Too much feedback is annoying. Too much visibility is distracting. Too much progressive disclosure can make work flows inefficient.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: WWDC17 Session 802（登壇 Mike Stern、Design Evangelism Team マネージャー）
- URL: https://developer.apple.com/videos/play/wwdc2017/802/
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A
- 備考: 同セッションは、ハンバーガーメニューに隠すと使いやすさが下がる旨も述べる

### S29 Apple（WWDC18 Session 803 “Designing Fluid Interfaces”）

> Well, we think it boils down to when the tool feels like an extension of your mind.
> If you introduce any amount of lag, things all of a sudden just kind of fall off a cliff in terms of how they respond to you.
> And, helps with discovery. Because you can discover a new gesture along the path of an existing gesture.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: WWDC18 Session 803
- URL: https://developer.apple.com/videos/play/wwdc2018/803/
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A
- 備考: 調査時の補足整理による: 同セッションの説明は、ホームボタン廃止後（iPhone X）のジェスチャーを縦横の 2 軸の 1 つのジェスチャー空間として設計した話の一部。上の 2 行自体は iPhone X に言及していない

### S30 Apple（WWDC25 Session 219 “Meet Liquid Glass” と HIG Materials）

> You may be tempted to use Liquid Glass everywhere but it is best reserved for the navigation layer that floats above the content of your app.
> making it Liquid Glass would make it compete with other elements and muddy the hierarchy.
> To provide enough legibility for symbols or labels, it needs a dimming layer to darken the underlying content.
> Don’t use Liquid Glass in the content layer.
> Use Liquid Glass effects sparingly.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: WWDC25 Session 219（最後の 2 行は HIG「Materials」）
- URL: https://developer.apple.com/videos/play/wwdc2025/219/
- 取得日: 2026-11-15（WWDC25 219）、2026-11-14（UTC。ローカル暦では 2026-11-15）（HIG Materials）
- 検証区分: A
- 備考: 3 行目は Clear バリアントに限った説明。Regular は "provides legibility regardless of context" と述べられている

### S31 Apple（WWDC26 基調講演、発言者名は取得本文で未確認）

> Now, we’re making some additional refinements, starting with updating the foundations of how Liquid Glass is built.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: WWDC26 基調講演（2026-06-08）、TidBITS の書き起こし
- URL: https://tidbits.com/2026/06/08/wwdc26-keynote-shows-apples-tacit-acknowledgment-of-external-pressures/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: 発言者は特定できていない。変更内容（背景の拡散・透明度スライダー等）は MacRumors 2026-06-10 の報道（https://www.macrumors.com/2026/06/10/how-liquid-glass-is-changing-in-ios-27/、区分 B）

### S32 Craig Federighi

> Suddenly, the black thing comes in, and you can't read any of your text, or it looks poor.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: TechRadar（Lance Ulanoff）, 2025-06-10
- URL: https://www.techradar.com/phones/ios/we-did-all-this-work-with-physical-glass-simulating-as-closely-as-we-could-the-actual-properties-of-glass-for-liquid-glass-says-apples-craig-federighi-then-they-went-further
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 暗い画像がガラスの下に入る問題の認識。Apple の解決策は適応するガラス。解決できたかは意見が分かれる

### S33 Alan Dye・Craig Federighi

> And so one of the things that we really started to focus on is, how can we bring more of that delight into our software experiences?
> I feel like when people see our current design on their first look, they’re like, “Oh, well, did it change that much? That feels very comfortable to me. I understand it.”
> Whether that’s video, photo or an application, how do we get out of the way and allow that to really shine through?
> one of our goals here was we said, “We want this to be very familiar to users, right?”

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: Design Matters with Debbie Millman “Craig Federighi and Alan Dye”, 2025-06-16
- URL: https://designmattersmedia.com/podcast/craig-federighi-and-alan-dye/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: 第三者（番組）の書き起こし経由。自動書き起こし由来の誤記を含みうる（同ページには年の誤記が疑われる箇所がある）。SKILL.md 本体は要旨としてのみ使用

### S34 Steve Jobs

> What we’re going to do is get rid of all these buttons and just make a giant screen.
> Nobody wants a stylus. So let’s not use a stylus.
> We wanted something that you couldn’t do by accident in your pocket.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: iPhone 発表基調講演（Macworld San Francisco）, 2007-01-09、第三者書き起こし
- URL: https://singjupost.com/steve-jobs-iphone-2007-presentation-full-transcript/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: Apple 公式の書き起こしではない。SKILL.md 本体は要旨としてのみ使用（物理ボタンをなくして大きな画面にする、スタイラスではなく指、ロック解除はポケット内の誤操作を避ける、の 3 点）

### S35 Bruce Tognazzini

> Not everything should have a default. If there isn’t a predictable winner, consider not offering any default.
> Any attempt to hide complexity will serve to increase it
> Apple apparently thought this was a good idea and started copying Microsoft by adding invisible controls from scroll bars to buttons everywhere.
> It’s just fine to make your showroom products look simple, but, to the extent you want to hide complexity to avoid scaring away buyers, do so in the showroom, not in the home or office of the purchaser now trying to accomplish real work.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: asktog.com “First Principles of Interaction Design (Revised & Expanded)”, 2014-03-05
- URL: https://asktog.com/atc/principles-of-interaction-design/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 既定値・複雑さの隠蔽・不可視のコントロール・売り場と実使用の分離

### S36 Don Norman

> In graphical, screen-based interfaces, all that the designer has available is control over perceived affordances.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: jnd.org “Affordances and Design”（公開年は取得本文に記載なし）
- URL: https://jnd.org/affordances-and-design/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: signifier の Norman 本人の定義の逐語は、2008 年のコラム（S123）で取得した。この項目は perceived affordances の根拠。SKILL.md 本体の signifier の説明は本 skill の言葉

### S37 Nielsen Norman Group（Raluca Budiu）

> It wasn’t the most discoverable pattern, but years of repetition made it second nature.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: NN/g, 2025-10-10
- URL: https://www.nngroup.com/articles/liquid-glass/
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A
- 備考: 旧 iOS の、引き下げて出す検索パターンについて

### S38 Apple 広報（声明）

> We are aware that a small number of users are having issues with their third-generation butterfly keyboard and for that we are sorry.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: MacRumors が転載, 2019-03-27
- URL: https://www.macrumors.com/2019/03/27/apple-apologizes-about-third-gen-keyboard-issues/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: 声明の原文ページは未確認。薄さ優先との因果づけは批判側の解釈

### S39 iFixit（Kyle Wiens、批判側の論評）

> The last seven years of Apple laptop designs have pushed the envelope of thinness, sacrificing upgradeability, serviceability, external ports, and usable keyboards along the way.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: iFixit “Jony Ive's Fragmented Legacy: Unreliable, Unrepairable, Beautiful Gadgets”, 2019-06-28
- URL: https://www.ifixit.com/News/30512/jony-ives-fragmented-legacy-unreliable-unrepairable-beautiful-gadgets
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 論評であり因果は批判側の解釈

### S40 Ian Parker（New Yorker 記者の地の文。Ive の発言ではない）

> Apple’s designers, like their competitors, make machines that are almost disposable
> Made of hard white ABS plastic—the material of Legos, and of thousands of Apple studio models a year

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: The New Yorker “The Shape of Things to Come”, 2015-02-23
- URL: https://www.newyorker.com/magazine/2015/02/23/shape-things-come
- 取得日: 2026-11-15
- 検証区分: R
- 備考: 区分 R は記者・第三者の地の文。Wayback の保存コピーで照合

### S41 Shane Richmond（Telegraph 記者の地の文。Ive の発言ではない）

> The ideas are often so new that frequently they have to design the entire production process that the factories will use to make them.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: The Telegraph（第 1 部）, 2012-05-23
- URL: http://www.telegraph.co.uk/technology/apple/9283486/Jonathan-Ive-interview-Apples-design-genius-is-British-to-the-core.html
- 取得日: 2026-11-15
- 検証区分: R
- 備考: 製造工程まで設計に含めるという記者の説明

### S42 Jony Ive（Dieter Rams の仕事への Foreword）

> Simplicity, of course, is not the absence of complexity. Just removing clutter would result in uncomplicated but meaningless products.
> His products seem inevitable, challenging you to question whether there could possibly be a rational alternative.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: Sophie Lovell『Dieter Rams: As Little Design as Possible』（Phaidon, 2011）の Foreword
- URL: https://archive.org/stream/JonathanIve/Jonathan%20Ive%20on%20Dieter%20Rams_djvu.txt
- 取得日: 2026-11-15
- 検証区分: A
- 備考: archive.org の OCR 全文。OCR 由来の誤記がありうる

### S43 Tim Cook（Apple の声明）

> Steve Lemay has played a key role in the design of every major Apple interface since 1999.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: Apple の声明（Dye 退任・Lemay 後任, 2025-12-03）、MacRumors と Daring Fireball が Bloomberg 経由で引用
- URL: https://www.macrumors.com/2025/12/03/apple-alan-dye-joining-meta/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: Lemay 本人の思考様式を示す一次発言は取得できていない

### S44 Apple（旧 HIG「iOS Themes」、2018 年 8 月末のスナップショット）

> Clarity. Throughout the system, text is legible at every size
> Deference. Fluid motion and a crisp, beautiful interface help people understand and interact with content while never competing with it.
> Depth. Distinct visual layers and realistic motion convey hierarchy, impart vitality, and facilitate understanding.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: 旧 HIG「iOS Themes」（Wayback Machine, Copyright © 2018 Apple Inc.）
- URL: https://web.archive.org/web/20180831235351/https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A
- 備考: 現行 HIG の原則ではない。取得した現行 HIG の 32 ページに Deference の語は無かった

### S45 Apple（AirPods 発表 2016-09-07 と サポート文書）

> Just open the charging case near your iPhone and with a simple tap, AirPods are immediately set up with all the devices signed into your iCloud account, including your iPad and Mac.
> with the new Apple W1 chip they deliver innovative features including high quality sound, great battery life and automatic setup
> Quick Start occupies both devices, so make sure that your devices have been updated to the latest version of iOS or iPadOS and choose a time when you won't need to use your current device for several minutes.
> Ask the other person to tap Accept on their device.
> If the prompt to set up your new device disappears from your current device, restart both devices.
> Make sure that the person you're sending to is nearby, and that you both have Wi-Fi and Bluetooth turned on.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: Apple Newsroom 2016-09-07（広報文）、Apple サポート Quick Start / AirDrop
- URL: https://www.apple.com/newsroom/2016/09/apple-reinvents-the-wireless-headphones-with-airpods/、https://support.apple.com/en-us/102659、https://support.apple.com/en-us/119857
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A
- 備考: 広報文はマーケティング文書。サポート文書は前提条件と失敗時の手順を示す

### S46 Jony Ive

> We hope that if it is truly simple, and we do a good job, then it will endure.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: Vanity Fair（Lessley Anderson）, 2014-10-09（New Establishment Summit での対談の記事化）
- URL: https://www.vanityfair.com/news/tech/2014/10/jony-ive-lessons-from-steve-jobs
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A
- 備考: Rams の long-lasting との対応に使用。同記事の「16 人のチーム」は記者の地の文で、2015 年の New Yorker（19 人）と食い違うため SKILL.md では使わない

### S47 Jony Ive

> our deliverable just begins with form.
> Then a remarkable thing happens at the time you make the first object, the time that you actually give form and dimension to the idea.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: 1 行目は The New Yorker 2015-02-23、2 行目は The Telegraph（第 2 部）2012-05-23
- URL: https://www.newyorker.com/magazine/2015/02/23/shape-things-come、http://www.telegraph.co.uk/technology/apple/9283706/Jonathan-Ive-simplicity-isnt-simple.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: いずれも Wayback の保存コピーで照合。Ive 本人の発言。SKILL.md 本体では要旨として使用

### S48 Apple（HIG Design principles）

> Design is an ongoing commitment.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: HIG「Design principles」
- URL: https://developer.apple.com/design/human-interface-guidelines/design-principles
- 取得日: 2026-11-14（UTC。ローカル暦では 2026-11-15）
- 検証区分: A
- 備考: Craft の記述

### S49 BusinessWeek 編集部（1998-05-25 号のインタビュー前文。Jobs の発言ではない）

> who returned to the company last July after his ignominious 1985 ouster

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: BusinessWeek, 1998-05-25
- URL: https://web.archive.org/web/2012/http://www.businessweek.com/1998/21/b3579165.htm
- 取得日: 2026-11-15
- 検証区分: R
- 備考: Jobs の 1985 年の追放と 1997 年 7 月の復帰の根拠（SKILL.md の Jobs の見出し）

### S50 Jony Ive

> At the risk of sounding terribly sentimental, I do think one of the things that just compel us is that we have this sense that, in some way, by caring, we're actually serving humanity
> we are here to serve the species.

- 本体掲載: いいえ（要旨として使用）
- 媒体・日付: 1 行目は The New Yorker 2015-02-23、2 行目は Stripe Sessions 2025-05
- URL: https://www.newyorker.com/magazine/2015/02/23/shape-things-come、https://stripe.com/en-es/sessions/2025/a-conversation-with-sir-jony-ive
- 取得日: 2026-11-15
- 検証区分: A
- 備考: care を人類への奉仕に結びつける語り口の根拠。2012 年の確認済み発言（Telegraph）には無いため、SKILL.md は「確認できた範囲では 2015 年と 2025 年」と書く。2 行目は退社後の発言

### S51 Apple（HIG Typography）

> Follow the recommended default and minimum text sizes for each platform — for both custom and system fonts — to ensure your text is legible on all devices.
> In general, avoid light font weights.
> Minimize the number of typefaces you use, even in a highly customized interface.
> If you need to display three or more lines of text, avoid tight leading even in areas where height is limited.
> You can use the constants defined in Font.Design to access all system fonts — don’t embed system fonts in your app or game.
> consider using a stacked layout where text appears above secondary items.
> Adjust font weight, size, and color as needed to emphasize important information and help people visualize hierarchy.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/app-empty-and-error-states.md`、`examples/app-onboarding.md`、`examples/app-settings.md`、`examples/business-dashboard.md`、`examples/hardware-ui.md`、`examples/motion-and-animation.md`、`examples/slides-presentation.md`、`examples/web-landing-page.md`、`references/design-history-eras.md`、SKILL.md（制作時の指針）
- 媒体・日付: Apple Human Interface Guidelines「Typography」（変更履歴の最新: 2025-12-16）
- URL: https://developer.apple.com/design/human-interface-guidelines/typography
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 数値（原文の表）: iOS・iPadOS は本文の既定 17 pt・最小 11 pt。Dynamic Type の Large（既定）は Large Title 34 / 41 pt（強調 Bold）、Headline 17 / 22 pt（Semibold）、Body 17 / 22 pt、Title 1 は 28 / 34 pt、Title 2 は 22 / 28 pt、Title 3 は 20 / 25 pt、Subhead 15 / 20 pt、Footnote 13 / 18 pt、Caption 1 は 12 / 16 pt（いずれも既定の太さは Regular）。強調（emphasized）の太さは、Large Title・Title 1・Title 2 が Bold、Title 3・Headline から Caption 2 まで（Footnote を含む）が Semibold。watchOS・visionOS の最小は 12 pt。pt を CSS px へ等値換算できるとは原文に書かれていない。SF Pro の tracking の値（サイズごとの表）は本 skill の例では使わない（Web の他のフォントへ一般化する根拠を確認していない）。HIG のページ本文データ（JSON 版）を取得して照合

### S52 Apple（HIG Layout）

> Order content by relative importance.
> place the most important items near the top and leading side of the window or display
> Group related items to clearly express related information or functions.
> Use progressive disclosure to make layouts cleaner and easier to interact with.
> Differentiate controls from content.
> Don’t change your app’s functionality based on the space it occupies.
> display no more than three buttons that contain glyphs — or two buttons that contain text — in a row

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/app-settings.md`、`examples/business-dashboard.md`、`examples/hardware-ui.md`、`examples/web-landing-page.md`、`references/design-history-eras.md`、SKILL.md（制作時の指針）
- 媒体・日付: Apple Human Interface Guidelines「Layout」（変更履歴の最新: 2026-09-09）
- URL: https://developer.apple.com/design/human-interface-guidelines/layout
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 最後の行は watchOS の節。iOS・iPadOS のマージンの pt 値は、取得した本文データに記載が無かった（tvOS のセーフエリア 60 / 80 pt などは tvOS 向けで、本 skill では使わない）。ページの本文データ（JSON 版）を取得して照合

### S53 Apple（HIG Color）

> Avoid relying solely on color to differentiate between objects, indicate interactivity, or communicate essential information.
> Avoid using the same color to mean different things.
> Apply color sparingly to the Liquid Glass material, and to symbols or text on the material.
> Avoid hard-coding system color values in your app.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/app-empty-and-error-states.md`、`examples/app-onboarding.md`、`examples/app-settings.md`、`examples/business-dashboard.md`、`examples/hardware-ui.md`、`examples/slides-presentation.md`、`examples/web-landing-page.md`、`references/design-history.md`、`references/design-history-eras.md`、SKILL.md（制作時の指針）
- 媒体・日付: Apple Human Interface Guidelines「Color」（変更履歴の最新: 2025-12-16）
- URL: https://developer.apple.com/design/human-interface-guidelines/color
- 取得日: 2026-11-15
- 検証区分: A
- 備考: システムカラーの RGB 値は表が本文データから取れなかったため、本 skill の例の色は全て本 skill の目安（出典なし）。HIG 自身も値のハードコードを避けるよう述べる

### S54 Apple（HIG Dark Mode）

> At a minimum, make sure the contrast ratio between colors is no lower than 4.5:1. For custom foreground and background colors, strive for a contrast ratio of 7:1, especially in small text.
> Avoid offering an app-specific appearance setting.
> Soften the color of white backgrounds.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/app-settings.md`、`examples/slides-presentation.md`、`examples/web-landing-page.md`、SKILL.md（制作時の指針）
- 媒体・日付: Apple Human Interface Guidelines「Dark Mode」（変更履歴の最新: 2024-08-06）
- URL: https://developer.apple.com/design/human-interface-guidelines/dark-mode
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 最低 4.5:1、小さい文字では 7:1 を目指す、という 2 つの水準を区別して使う

### S55 Apple（HIG Accessibility）

> Ideally, give people the option to enlarge text by at least 200 percent (or 140 percent in watchOS apps).
> Strive to meet the recommended minimum control size for each platform to ensure controls and menus are comfortable for all when tapping and clicking.
> it works well to add about 12 points of padding around elements that include a bezel. For elements without a bezel, about 24 points of padding works well around the element’s visible edges.
> Tightening animation springs to reduce bounce effects
> Replacing transitions in x-, y-, and z-axes with fades to avoid motion
> Avoiding animating into and out of blurs
> Convey information with more than color alone.
> Minimize use of time-boxed interface elements.
> Offer alternatives to gestures.
> Be cautious with fast-moving and blinking animations.
> Always ask for confirmation twice whenever people perform an action that’s difficult to recover from, such a deleting a file.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/app-empty-and-error-states.md`、`examples/app-onboarding.md`、`examples/app-settings.md`、`examples/business-dashboard.md`、`examples/hardware-ui.md`、`examples/motion-and-animation.md`、`examples/slides-presentation.md`、`examples/web-landing-page.md`、SKILL.md（制作時の指針）
- 媒体・日付: Apple Human Interface Guidelines「Accessibility」（変更履歴の最新: 2025-06-09）
- URL: https://developer.apple.com/design/human-interface-guidelines/accessibility
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 数値（原文の表）: 操作対象の既定 / 最小は iOS・iPadOS 44 x 44 / 28 x 28 pt、watchOS 44 x 44 / 28 x 28 pt、macOS 28 x 28 / 20 x 20 pt、tvOS 66 x 66 / 56 x 56 pt、visionOS 60 x 60 / 28 x 28 pt。コントラストの目安は WCAG AA に基づき、17 pt 以下は 4.5:1。Reduce Motion の節の箇条書き 3 件（「Tightening」「Replacing」「Avoiding」で始まる行。箇条書きの記号は除いた）。Reduce Transparency の独立した節は無い

### S56 Apple（HIG Motion）

> Add motion purposefully, supporting the experience without overshadowing it.
> Don’t add motion for the sake of adding motion.
> Make motion optional.
> Aim for brevity and precision in feedback animations.
> In apps, generally avoid adding motion to UI interactions that occur frequently.
> Let people cancel motion.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/app-empty-and-error-states.md`、`examples/app-onboarding.md`、`examples/app-settings.md`、`examples/business-dashboard.md`、`examples/motion-and-animation.md`、`examples/slides-presentation.md`、`examples/web-landing-page.md`、SKILL.md（制作時の指針）
- 媒体・日付: Apple Human Interface Guidelines「Motion」（変更履歴の最新: 2025-09-09）
- URL: https://developer.apple.com/design/human-interface-guidelines/motion
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 確認事項: Motion のページ全文に、UI アニメーションの所要時間（秒・ms）の推奨値は無い。数値があるのはゲームのフレームレート（30〜60 fps）と visionOS の揺れの周波数（約 0.2 Hz を避ける）のみで、本 skill では使わない。したがって examples の秒数はすべて本 skill の目安（出典なし）

### S57 Apple（HIG Buttons）

> As a general rule, a button needs a hit region of at least 44x44 pt
> Always include a press state for a custom button.
> Keep the number of prominent buttons to one or two per view.
> Use style — not size — to visually distinguish the preferred choice among multiple options.
> consider starting the label with a verb to help convey the button’s action

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/app-empty-and-error-states.md`、`examples/app-onboarding.md`、`examples/app-settings.md`、`examples/web-landing-page.md`、SKILL.md（制作時の指針）
- 媒体・日付: Apple Human Interface Guidelines「Buttons」
- URL: https://developer.apple.com/design/human-interface-guidelines/buttons
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 原文は 44x44 pt（visionOS は 60x60 pt）。Accessibility ページの表（S55）は既定 44 x 44・最小 28 x 28 pt と別の水準なので、本 skill の例では出典を区別して書く。CSS px への換算は原文に無い

### S58 Apple（HIG Writing）

> Prioritize clarity and avoid the temptation to be too cute or clever with your labels.
> Begin with language like “Get Started” to indicate you’re starting a flow.
> display it as close to the problem as possible, avoid blame, and be clear about what someone can do to fix it.
> Interjections like “oops!” or “uh-oh” are typically unnecessary and can sound insincere.
> Avoid using we altogether because it may be unclear who the “we” in question refers to.
> Avoid robotic error messages with no helpful information, like “Invalid name.”
> Provide clear next steps on any blank screens.
> Remember that empty states are usually temporary, so don’t show crucial information that could then disappear.
> Describe what it does when turned on, and people can infer the opposite.
> If you’re trying to convey more than one idea, consider breaking up the text onto multiple screens, and think about the flow of information across those screens.
> For links, avoid using “Click here” in favor of more descriptive words or phrases, such as “Learn more about UX Writing.”
> Use possessive pronouns sparingly.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/app-empty-and-error-states.md`、`examples/app-onboarding.md`、`examples/app-settings.md`、`examples/hardware-ui.md`、`examples/motion-and-animation.md`、`examples/slides-presentation.md`、`examples/web-landing-page.md`、SKILL.md（制作時の指針）
- 媒体・日付: Apple Human Interface Guidelines「Writing」（変更履歴の最新: 2025-12-16）
- URL: https://developer.apple.com/design/human-interface-guidelines/writing
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 最後の行はスライドの例への転用（アプリ画面向けの記述を、本 skill がスライドへ当てた）。HIG に「Empty states」専用のページは見つからなかった。空状態の指針は Writing の記述に含まれる

### S59 Apple（HIG Charts）

> An effective chart highlights a few key pieces of information in a dataset, helping people gain insights and make decisions.
> Summarize the main message of your chart to help make it approachable and useful for everyone.
> Avoid relying solely on color to differentiate between different pieces of data or communicate essential information in a chart.
> Let people interact with the data when it makes sense, but don’t require interaction to reveal critical information.
> Make every chart in your app accessible.
> bar charts can work well when you use zero for the lower bound of the Y axis
> Prefer familiar sequences of values in the tick and grid-line labels for an axis.
> Too many grid lines can be visually overwhelming, distracting people from the data; too few grid lines can make it difficult to estimate a mark’s value.
> Avoid using subjective terms.
> using “June 6” is clearer than using “6/6”
> In contrast, defining a lower bound of zero can sometimes make meaningful differences between values more difficult to discern.
> Typically, you want the data itself to be most prominent, while letting the descriptions and axes provide additional context without competing with the data.
> similarly, spelling out “60 minutes” or “60 meters” is clearer than using the abbreviation “60m.”

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/business-dashboard.md`、`examples/slides-presentation.md`、`references/design-history.md`、`references/design-history-eras.md`、SKILL.md（制作時の指針）
- 媒体・日付: Apple Human Interface Guidelines「Charts」
- URL: https://developer.apple.com/design/human-interface-guidelines/charts
- 取得日: 2026-11-15
- 検証区分: A
- 備考: HIG にダッシュボード専用のページは見つからなかった。業務ダッシュボードの例は、Charts・Charting data に Layout・Typography を転用した、本 skill の整理

### S60 Apple（HIG Charting data）

> Not every collection of data needs to be displayed in a chart.
> Keep a chart simple, letting people choose when they want additional details.
> Maintain continuity among multiple charts that use the same data.
> Although a descriptive headline or summary can make a chart more accessible, it doesn’t take the place of accessibility labels.
> consider offering the data in other ways, such as in a list or table that people can scroll, search, and sort.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/business-dashboard.md`、SKILL.md（制作時の指針）
- 媒体・日付: Apple Human Interface Guidelines「Charting data」（変更履歴は 2022-09-23 の新規ページのみ）
- URL: https://developer.apple.com/design/human-interface-guidelines/charting-data
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Patterns のページ

### S61 Apple（HIG Feedback）

> The most effective feedback tends to match the significance of the information to the way it’s delivered.
> Make sure all feedback is accessible.
> Alerts can lose their impact if you use them too often or to deliver unimportant information.
> because people typically expect their action or task to succeed, they only need to know when it doesn’t.
> it often works well to display status information in a passive way so that people can view it when they need it.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/app-empty-and-error-states.md`、`examples/app-onboarding.md`、`examples/business-dashboard.md`、`examples/hardware-ui.md`、`examples/motion-and-animation.md`
- 媒体・日付: Apple Human Interface Guidelines「Feedback」
- URL: https://developer.apple.com/design/human-interface-guidelines/feedback
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 重要度に合わせた通知の強さ、成功の確認の要否

### S62 Apple（HIG Branding）

> Apply your app’s accent color judiciously.
> Ensure branding always defers to content.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/web-landing-page.md`
- 媒体・日付: Apple Human Interface Guidelines「Branding」
- URL: https://developer.apple.com/design/human-interface-guidelines/branding
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ブランド色は主要操作・状態表示に絞る

### S63 Apple（HIG Launching）

> Launch instantly.
> Restore the previous state when your app restarts so people can continue where they left off.
> A launch screen’s sole function is to enhance the perception of your experience as quick to launch and immediately ready to use.
> Don’t advertise.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/app-onboarding.md`、`examples/hardware-ui.md`
- 媒体・日付: Apple Human Interface Guidelines「Launching」
- URL: https://developer.apple.com/design/human-interface-guidelines/launching
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 起動画面は宣伝の場ではない、という節の記述

### S64 Apple（HIG Loading）

> The best content-loading experience finishes before people become aware of it.
> Show something as soon as possible.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/app-empty-and-error-states.md`、`examples/motion-and-animation.md`
- 媒体・日付: Apple Human Interface Guidelines「Loading」
- URL: https://developer.apple.com/design/human-interface-guidelines/loading
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 読み込み中は、まず何かを表示する

### S65 Apple（HIG Materials）

> Don’t use Liquid Glass in the content layer.
> Use Liquid Glass effects sparingly.
> If the underlying content is bright, consider adding a dark dimming layer of 35% opacity.
> Thicker materials, which are more opaque, can provide better contrast for text and other elements with fine features.
> Instead, use standard materials for elements in the content layer, such as app backgrounds.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/business-dashboard.md`、`examples/slides-presentation.md`、`examples/web-landing-page.md`
- 媒体・日付: Apple Human Interface Guidelines「Materials」
- URL: https://developer.apple.com/design/human-interface-guidelines/materials
- 取得日: 2026-11-15
- 検証区分: A
- 備考: S30 と同じページの追加引用。35% の dimming layer は clear バリアントの Liquid Glass 向けの記述で、Web の一般の文字下地へそのまま当てはめる値ではない（本 skill の例は「下地を暗くして読めるようにする」考え方の参照のみ）

### S66 Apple（WWDC20 Session 10175 “The details of UI typography”）

> Text styles are a set of predefined combinations of a system font weight, a point size value and a leading value.
> you can use the tight and loose leading variants of text styles. In iOS and macOS, tight leading decreases the line height by two points, while loose leading increases the line spacing by two points.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/web-landing-page.md`、`references/design-history-eras.md`、SKILL.md（制作時の指針）
- 媒体・日付: WWDC20 Session 10175
- URL: https://developer.apple.com/videos/play/wwdc2020/10175/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 数値: tight は -2 pt、loose は +2 pt（iOS・macOS）。公式セッションのトランスクリプトを取得して照合。トランスクリプトの時刻は約 1 分単位の近似のため台帳には記載しない

### S67 Apple（WWDC23 Session 10158 “Animate with springs”）

> So springs are the only type of animation that maintains continuity both for static cases and cases with an initial velocity.
> But a spring animation doesn’t only mean a bouncy animation.
> a spring animation uses the velocity it had when it was retargeted as the initial velocity towards its new destination and this same velocity preservation makes these kind of interruptions feel smooth and natural.
> With an ease in and out animation, it does animate to the end, but its motion jerks to a halt as the gesture ends.
> A bounce of 0 feels like a smooth, gradual change.
> But you should be cautious about using values higher than around 0.4, since they may feel too exaggerated for a UI element.
> When you’re not sure, use a spring with bounce 0, which is also what you get if you don’t specify the bounce.
> Because of its unpredictable nature, you shouldn’t wait for the settling duration for user-facing changes.
> it’s generally best to start by finding a duration value that gives a pacing that you like.
> Linear animations can be useful as a specialized tool in some places, like a repeating spinning indicator, but otherwise you should be cautious about using them, especially for movement

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/motion-and-animation.md`、SKILL.md（制作時の指針）
- 媒体・日付: WWDC23 Session 10158
- URL: https://developer.apple.com/videos/play/wwdc2023/10158/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 数値: bounce は -1.0 から 1.0、約 0.15 で控えめ、約 0.3 で明確な弾み、約 0.4 超は UI には誇張。duration の具体値は同セッションに無い。公式トランスクリプトを取得して照合。CSS の transition が速度を引き継がない、という主張は、この出典ではなく本 skill の整理

### S68 Apple（WWDC18 Session 803 “Designing Fluid Interfaces”、追加の引用）

> Everything needs to respond instantly.
> Next, we want to allow for constant redirection and interruption.
> The second property is response.
> So, we recommend starting with 100% damping, or no overshoot when you’re tuning elastic behaviors.
> Because the tap doesn’t have any momentum in the direction of the presentation of Now Playing, we use 100% damping to make sure it doesn’t overshoot.
> and so we use 80% damping to have a little bit of bounce and squish, making the gesture a lot more satisfying.
> You should remember that bounciness needs to be purposeful.
> we end up with this projected position where it could go if we scrolled it there.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/motion-and-animation.md`、SKILL.md（制作時の指針）
- 媒体・日付: WWDC18 Session 803（S29 と同じセッションの追加引用）
- URL: https://developer.apple.com/videos/play/wwdc2018/803/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 数値: 弾み調整の開始値は damping 100%（オーバーシュート無し）。Music の Now Playing は、タップで開く場合 100%、スワイプで閉じる場合 80%。damping・response を物理量（周期・減衰比）へ写す計算式は Apple の定義ではなく、本 skill の実装例

### S69 Apple（WWDC25 Session 356 “Get to know the new design system”）

> Instead of relying on decoration, hierarchy should be expressed through layout and grouping.
> concentric shapes calculate their radius by subtracting padding from the parent’s.
> Capsules use a radius that’s half the height of the container.
> Typography has been refined to strengthen clarity and structure, now bolder and left-aligned to improve readability in key moments like alerts and onboarding.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/app-onboarding.md`、`examples/slides-presentation.md`、`examples/web-landing-page.md`、SKILL.md（制作時の指針）
- 媒体・日付: WWDC25 Session 356
- URL: https://developer.apple.com/videos/play/wwdc2025/356/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 最後の行の適用範囲はアラートやオンボーディングなどの場面で、あらゆる見出しへ一般化しない。公式トランスクリプトを取得して照合

### S70 Apple（WWDC26 Session 251 “Communicate your brand identity on iOS”）

> Conceptually, the content layer is the best opportunity to express your brand identity.
> people don’t need to be reminded which app they’re using.
> but they also improve interaction by connecting the tap target to the transition state.
> But delayed load times or dropped frames translate poorly to peoples perception of your app, even if they couldn’t pinpoint exactly why.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/motion-and-animation.md`、`examples/web-landing-page.md`
- 媒体・日付: WWDC26 Session 251
- URL: https://developer.apple.com/videos/play/wwdc2026/251/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 原文は iOS アプリ向け。Web や LP への適用は、本 skill の転用。原文の綴り（peoples）はそのまま。公式トランスクリプトを取得して照合

### S71 Apple（WWDC25 Session 219 “Meet Liquid Glass”、追加の引用）

> Tinting should only be used to bring emphasis to primary elements and actions in the UI.
> Avoid tinting all your elements.
> When every element is tinted, nothing stands out, and it can be confusing.
> If you want to imbue color into your app, do it in the content layer instead.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/app-onboarding.md`、`examples/business-dashboard.md`、`examples/slides-presentation.md`、`examples/web-landing-page.md`、SKILL.md（制作時の指針）
- 媒体・日付: WWDC25 Session 219（S30 と同じセッションの追加引用）
- URL: https://developer.apple.com/videos/play/wwdc2025/219/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 色を付けるのは主要な要素に限る、という節。公式トランスクリプトを取得して照合

### S72 W3C（WCAG 2.2）

> The visual presentation of text and images of text has a contrast ratio of at least 4.5:1
> The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s)
> The size of the target for pointer inputs is at least 24 by 24 CSS pixels
> Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.
> text can be resized without assistive technology up to 200 percent without loss of content or functionality.
> at a width equivalent to 320 CSS pixels
> Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.
> starts automatically, lasts more than five seconds, and is presented in parallel with other content
> anything that flashes more than three times in any one second period

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/app-empty-and-error-states.md`、`examples/app-onboarding.md`、`examples/app-settings.md`、`examples/business-dashboard.md`、`examples/hardware-ui.md`、`examples/motion-and-animation.md`、`examples/slides-presentation.md`、`examples/web-landing-page.md`、`references/design-history.md`、`references/design-history-eras.md`、SKILL.md（制作時の指針）
- 媒体・日付: W3C Recommendation, 2024-12-12（Web Content Accessibility Guidelines 2.2）
- URL: https://www.w3.org/TR/WCAG22/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 順に 1.4.3 Contrast (Minimum)（AA。大きい文字は 3:1。large-scale は 18 pt または太字 14 pt 以上）、1.4.11 Non-text Contrast（AA）、2.5.8 Target Size (Minimum)（AA）、1.4.1 Use of Color（A）、1.4.4 Resize Text（AA）、1.4.10 Reflow（AA。横幅 320 CSS px）、2.3.3 Animation from Interactions（AAA）、2.2.2 Pause, Stop, Hide（A。5 秒）、2.3.1 Three Flashes or Below Threshold（A）。2.5.5 Target Size (Enhanced)（AAA）は 44 by 44 CSS pixels。1.4.12 Text Spacing の 1.5 倍などは、ユーザーが上書きしても壊れない要件で、推奨の行間ではない。コントラスト比の計算は WCAG の相対輝度の式を用いて本 skill が行った

### S73 MDN Web Docs（CSS のメディア機能）

> The prefers-reduced-motion CSS media feature is used to detect if a user has enabled a setting on their device to minimize the amount of non-essential motion.
> The prefers-color-scheme CSS media feature is used to detect if a user has requested light or dark color themes.
> The prefers-contrast CSS media feature is used to detect whether the user has requested the web content to be presented with a lower or higher contrast.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/motion-and-animation.md`、`examples/web-landing-page.md`、`references/design-history.md`、`references/design-history-eras.md`、SKILL.md（制作時の指針）
- 媒体・日付: MDN「prefers-reduced-motion」「prefers-color-scheme」「prefers-contrast」
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion（ほか prefers-color-scheme / prefers-contrast）
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 各ページに Baseline「Widely available」の表示を確認した（prefers-reduced-motion と prefers-color-scheme は 2020 年 1 月以降、prefers-contrast は 2022 年 5 月以降）。prefers-reduced-transparency は「Limited availability」で Baseline ではなく、本 skill では使わない

### S74 MDN Web Docs（font-family）

> As the name implies, system-ui is intended to make UI elements look like native apps, and not for typesetting large paragraphs of text.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/slides-presentation.md`、`examples/web-landing-page.md`、SKILL.md（制作時の指針）
- 媒体・日付: MDN「font-family」（ページ最終更新 2026-10-21）
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/font-family
- 取得日: 2026-11-15
- 検証区分: A
- 備考: system-ui の位置づけ

### S75 WebKit Blog “Using the System Font in Web Content”（2015-07-27）

> using the platform’s system font, which is possible on iOS and OS X by using the -apple-system CSS value for the “font-family” CSS property.
> On platforms which do not support -apple-system, the browser will simply fall back to the next item in the font-family fallback list.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/web-landing-page.md`
- 媒体・日付: WebKit Blog, 2015-07-27
- URL: https://webkit.org/blog/3709/using-the-system-font-in-web-content/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2015 年の古い記事で、system-ui ではなく -apple-system を述べる。現行の推奨フォントスタック（system-ui, -apple-system, ... の並び）を示す Apple 公式の文書は確認できていない

### S76 Apple Developer「Fonts」（San Francisco フォントのライセンス文面）

> THE APPLE SAN FRANCISCO FONT IS TO BE USED SOLELY FOR CREATING MOCK-UPS OF USER INTERFACES TO BE USED IN SOFTWARE PRODUCTS RUNNING ON APPLE’S iOS, OS X OR tvOS OPERATING SYSTEMS, AS APPLICABLE.
> You may not embed the Apple Font in any software programs or other products.
> you may not make the Apple Font available over a network where it could be run or used by multiple computers at the same time.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/slides-presentation.md`、`examples/web-landing-page.md`、`references/design-history-eras.md`、SKILL.md（制作時の指針）
- 媒体・日付: Apple Developer「Fonts」ページに埋め込まれたライセンス本文（2026-11-15 時点）
- URL: https://developer.apple.com/fonts/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 字面どおりに読む限り、SF を Web フォントとしてサイトへ配信する使い方は許諾されていないと読める。ただし、このページの本文は iOS・OS X・tvOS 向けと明記された旧版で、現行の SF Pro のダウンロードに同梱されるライセンスは未確認。法的な解釈は本 skill の範囲外で、法務の確認事項。結論は「SF Pro のフォントファイルを Web へ配信せず、system-ui 等で端末のシステムフォントを参照する」に留める。Apple Developer Forums の「使える」とする返信の要約は、スレッド本文を未取得のため根拠にしない（区分 B）

### S77 Apple（HIG Settings、追加の引用）

> Aim to provide default settings that give the best experience to the largest number of people.
> Although people appreciate having control over an app or game, too many settings can make the experience feel less approachable, while also making it hard to find a particular setting.
> Respect people’s systemwide settings and avoid including redundant versions of them in your custom settings area.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/app-onboarding.md`、`examples/app-settings.md`、`examples/motion-and-animation.md`
- 媒体・日付: Apple Human Interface Guidelines「Settings」（S24 と同じページの追加引用）
- URL: https://developer.apple.com/design/human-interface-guidelines/settings
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 設定の数・既定値・端末全体の設定との重複

### S78 Apple（HIG Onboarding、追加の引用）

> Teach through interactivity.
> Consider providing a collection of context-specific tips instead of a single onboarding flow.
> Otherwise, present a permission request when people first access the specific function that relies on private data or resources.
> Prefer letting people experience your app or game before prompting them for ratings or purchases.
> Keep onboarding content focused on the experience you provide.

- 本体掲載: いいえ（要旨・数値として使用）
- 使用箇所: `examples/app-onboarding.md`
- 媒体・日付: Apple Human Interface Guidelines「Onboarding」（S16 と同じページの追加引用）
- URL: https://developer.apple.com/design/human-interface-guidelines/onboarding
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 許可の依頼の時機、体験の前に評価や購入を求めない

### S79 Library of Congress（Gutenberg 聖書の展示ページ）

> The Gutenberg Bible is the first great book printed in Western Europe from movable metal type.
> The printing of the Bible was probably completed late in 1455 at Mainz, Germany.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Library of Congress 展示「Bible Collection」のページ（掲載日はページに記載なし）
- URL: https://www.loc.gov/exhibits/bibles/the-gutenberg-bible.html
- 取得日: 2026-11-15
- 検証区分: R（機関の地の文）
- 備考: 完成の時期は probably と推定の形で書かれている。

### S80 William Morris（Kelmscott Press 創設の趣意書、1895-11-11 付）

> I began printing books with the hope of producing some which would have a definite claim to beauty, while at the same time they should be easy to read and should not dazzle the eye, or trouble the intellect of the reader by eccentricity of form in the letters.
> This should always leave the inner margin the narrowest, the top somewhat wider, the outside (fore-edge) wider still, and the bottom widest of all.
> the unit of a book is not one page, but a pair of pages.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: 文末の日付は「Kelmscott House, Upper Mall, Hammersmith. Nov. 11, 1895」。収録は『The Art and Craft of Printing』（Copyright 1902, H. M. O'Kane）
- URL: https://www.gutenberg.org/files/31596/31596-h/31596-h.htm （Project Gutenberg EBook #31596。Internet Archive の画像からの校正済み転記）
- 取得日: 2026-11-15
- 検証区分: A（Project Gutenberg の転記と照合。転記の誤りの可能性は残る）
- 備考: 中世の余白比を 20 per cent ずつの差とする箇所は、友人の司書の調べとしての伝聞。同じ文書で自身を「a decorator by profession」と書く。収録は『The Art and Craft of Printing』（1902）。

### S81 William Morris（「The Ideal Book」、1893 年に Bibliographical Society of London で講演）

> we only occasionally see one page of a book at a time; the two pages making an opening are really the unit of the book

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: 題下に「DELIVERED BEFORE THE BIBLIOGRAPHICAL SOCIETY OF LONDON, MDCCCXCIII」。収録は S80 と同じ 1902 年版
- URL: https://www.gutenberg.org/files/31596/31596-h/31596-h.htm
- 取得日: 2026-11-15
- 検証区分: A（S80 と同じ転記と照合）
- 備考: 収録は S80 と同じ 1902 年版。

### S82 William Morris・Emery Walker（「An Essay on Printing」）と S. C. Cockerell（Kelmscott Press の小史）

> Commercialism again compels the use of type too small in size to be comfortable reading

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Essay は「Arts and Crafts Essays by Members of the Arts and Crafts Exhibition Society」から収録（初出年は取得ページに記載なし）。Cockerell の小史も同じ 1902 年版に収録
- URL: https://www.gutenberg.org/files/31596/31596-h/31596-h.htm
- 取得日: 2026-11-15
- 検証区分: A（引用文）、R（Cockerell の小史の年号）
- 備考: Essay の初出年は取得ページに記載なし。Cockerell の小史は 1891 年 1 月 31 日に最初の試し刷りと記す。収録は 1902 年版。

### S83 Robert Bringhurst（Richard Rutter「The Elements of Typographic Style Applied to the Web」2.1.2 経由）

> Anything from 45 to 75 characters is widely regarded as a satisfactory length of line for a single-column page set in a serifed text face in a text size.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Rutter の解説サイト（CC BY-NC 4.0）。原書 Bringhurst『The Elements of Typographic Style』からの引用として掲載。サイトの掲載日は記載なし
- URL: https://webtypography.net/2.1.2
- 取得日: 2026-11-15
- 検証区分: B（第三者の転載。原書は未取得）
- 備考: Rutter の解説サイトは CC BY-NC 4.0。同じ引用に 66 字の行が理想とする文が続く。取得テキストでは括弧の内側に空白が入っていたため、逐語の照合は最初の文だけで行った。

### S84 Walter Gropius「Program of the State Bauhaus in Weimar」（1919 年 4 月）

> Architects, sculptors, painters, we all must return to the crafts!
> Let us then create a new guild of craftsmen without the class distinctions that raise an arrogant barrier between craftsman and artist!

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: German History in Documents and Images（GHDI、German Historical Institute Washington）。原文はパンフレット「Programm des Staatlichen Bauhauses in Weimar」（1919 年 4 月）
- URL: https://ghdi.ghi-dc.org/pdf/eng/ARCH_BAUHAUS_PROGRAM_ENG.pdf （直接取得は失敗。保存コピー https://web.archive.org/web/20210923060248id_/https://ghdi.ghi-dc.org/pdf/eng/ARCH_BAUHAUS_PROGRAM_ENG.pdf を照合）
- 取得日: 2026-11-15
- 検証区分: A（英訳の逐語照合）
- 備考: 英訳の出典は Hans Maria Wingler『Bauhaus』（MIT Press, 1978, pp. 31-33）と PDF に明記。ドイツ語原文は未照合。日本語にするときは英訳からの重訳と明記する。

### S85 The Museum of Modern Art「Bauhaus 1919–1933: Workshops for Modernity」プレスリリース

> In popular discussion, the Bauhaus is often used as shorthand for a timeless style of international modernism.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: MoMA プレスリリース, 2009-11-03（展覧会は 2009-11-08〜2010-01-25 と検索結果にあるが、会期はリリース本文で未照合）
- URL: https://www.moma.org/documents/moma_press-release_387209.pdf
- 取得日: 2026-11-15
- 検証区分: R（機関の地の文）
- 備考: 1919 年 Weimar 創立、1925 年 Dessau 移転、1932 年 Dessau で閉鎖、Berlin で 1 年足らず続いた旨の年は、このリリース本文による。

### S86 Jan Tschichold『The New Typography』（1928）の抜粋（英訳）

> The essence of the New Typography is clarity.
> The New Typography is distinguished from the old by the fact that its first objective is to develop its visible form out of the functions of the text.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: ページ柱に「Graphic Design Theory」とある書籍の抜粋（章見出し「Creating the Field」。編者・出版社・刊行年は PDF 本文に無く未確認）。CUNY City Tech の授業サイトが PDF で掲載
- URL: https://openlab.citytech.cuny.edu/langecomd3504fa2019/files/2018/10/Tschichold_NewTypo.pdf
- 取得日: 2026-11-15
- 検証区分: B（教材 PDF 経由。英訳は Ruari McLean 訳とみられるが PDF 本文で未確認）
- 備考: PDF の導入文（編者の地の文）は Tschichold のバーゼル移住を第二次世界大戦中と書くが、本人の講演（S88）は 1933 年からと言う。導入文の年は使わない。

### S87 University of California Press『The New Typography』紹介ページ

> Since its initial publication in Berlin in 1928, Jan Tschichold's The New Typography has been recognized as the definitive treatise on book and graphic design in the machine age.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: UC Press の書籍ページ（2006 年 9 月刊のペーパーバック版。ISBN 9780520250123）
- URL: https://www.ucpress.edu/books/the-new-typography/paper
- 取得日: 2026-11-15
- 検証区分: R（出版社の紹介文）
- 備考: 英語版は 1995 年が初（訳者 Ruari McLean）。Tschichold が Penguin Books の組版改革を監督した旨も書くが、在任年は書かれていない。

### S88 Jan Tschichold（Type Directors Club「Typography USA」セミナーでの講演、1959-04-18）

> to my astonishment I detected most shocking parallels between the teachings of Die neue Typographie and National Socialism and Fascism.
> Good typography has to be perfectly legible and is, as such, the result of intelligent planning.
> Since 1933 I have lived in Basle, Switzerland.
> Obvious similarities consist in the ruthless restriction of typefaces, a parallel to Goebbels’ infamous Gleichschaltung, and more or less militaristic arrangements of lines.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: 講演 1959-04-18。掲載は Print XVIII 1 (1964): 16–17 と転載元が記す
- URL: https://www.modernism101.com/store/p/tschichold-jan-designer-the-penrose-annual-review-of-the-graphic-arts-volume-40-london-lund-humphries-1938
- 取得日: 2026-11-15
- 検証区分: B（古書店の商品説明に転載された文。Print 誌の原本は未取得）
- 備考: 掲載は Print XVIII 1 (1964): 16–17 と転載元が記す。

### S89 Robin Kinross「Bill 5, Tschichold 6」（Hyphen Press Journal）

> Bill accused Tschichold of now practising a reactionary typography, with dangerous political echoes; Tschichold considered Bill’s typography to be artistic in a bad sense, and with a false respect for industrial production.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Hyphen Press の Journal 記事。署名 Robin Kinross。掲載日はページに無い（本文に 2016 年のやり取りが出るため 2016 年以降）
- URL: https://hyphenpress.co.uk/bill_5_tschichold_6/
- 取得日: 2026-11-15
- 検証区分: A（Kinross 本人の文。性質は研究者の論評）
- 備考: Bill の論文「Über Typografie」は Schweizer Graphische Mitteilungen 1946 年 5 月号、Tschichold の応答「Glaube und Wirklichkeit」は同 6 月号と結論し、以前の文献の 4 月号は誤りとする。掲載日はページに無い（本文に 2016 年のやり取りが出るため 2016 年以降）。

### S90 Brigitte Schuster（『Max Bill kontra Jan Tschichold』の書評、2013 年 6 月）

> Bill was completely upset by Tschichold's statement and reacted to it with the publication of an essay entitled "Über Typografie" [On Typography] in the April 1946 issue of Schweizer Graphische Mitteilungen .

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: 著者のサイト。2013 年 6 月執筆（題に「Reviewed by Brigitte Schuster in June 2013」）
- URL: https://brigitteschuster.com/book-review-bill-tschichold-dispute
- 取得日: 2026-11-15
- 検証区分: C（書評）
- 備考: Bill の論文の掲載号を 4 月とし、S89 の後年の結論（5 月）と食い違う。引用中の Mitteilungen の後の空白は取得テキストの通り。

### S91 Robin Kinross『Unjustified Texts』（A Working Library の読書ノート経由）

> his modern typography had been authoritarian and militaristic and so imbued with the spirit that also drove German National-Socialism
> modernism in typography was limited to publicity work (as opposed to book design)

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Mandy Brown のサイト A Working Library, 2008-07-16。原書は Kinross『Unjustified Texts』（2002）
- URL: https://aworkinglibrary.com/writing/kinross-on-tschicholds-turn-towards-the-traditional
- 取得日: 2026-11-15
- 検証区分: B（第三者の転記）
- 備考: 原書は 2002 年刊。読書ノートは 2008-07-16。

### S92 Josef Müller-Brockmann『Grid Systems in Graphic Design』（neugraphic.com の抜粋経由）

> The use of the grid as an ordering system is the expression of a certain mental attitude inasmuch as it shows that the designer conceives his work in terms that are constructive and oriented to the future.
> The fewer the differences in the size of the illustrations, the quieter the impression created by the design.
> This is a scientifically proved fact and the designer should bear it constantly in mind.
> Information presented with clear and logically set out titles, subtitles, texts, illustrations, and captions will not only be read more quickly and easily but the information will also be better understood and retained in the memory.
> Work with the grid system means submitting to laws of universal validity.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: neugraphic.com の転載。ページ末尾に「Published in Texts on Type: Critical Writings on Typography (2001). Original text excerpted from Grid Systems in Graphic Design (Niederteufen: Verlag. Arthur Niggli, 1981).」
- URL: https://neugraphic.com/muller-brockmann/muller-brockmann-text2.html
- 取得日: 2026-11-15
- 検証区分: B（第三者の転載。原書は未取得）
- 備考: 転載の注記は、原書を Niggli 版 1981 年とする（別の資料は 1968 年の Niggli 版を掲げており、版年は食い違う）。「scientifically proved」の根拠は抜粋に示されていない。普遍的な妥当性を述べる文は、取得した 2 か所（教材 PDF を含む）で語形が 3 通りに食い違う。

### S93 Emil Ruder「The Typography of Order」（Graphis 85 号、1959 年 9 月。neugraphic.com 経由）

> Lines of more than sixty letters are difficult to read.
> One of the postulates of the rehabilitation of typography, inaugurated by William Morris, was precisely the principle of "linear register," or the concordance between the lines on the front and back of a page.
> The first principle: clear readability of the text.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: neugraphic.com の転載。ページ末尾に「Published in Graphis , No. 85, September 1959.」
- URL: https://neugraphic.com/ruder/ruder-text2.html
- 取得日: 2026-11-15
- 検証区分: B（第三者の転載。英訳の訳者・出所は不明。Graphis の原本は未取得）

### S94 The Museum of Modern Art 所蔵記録「Helvetica Bold, 36 point」

> Max Miedinger, Edouard Hoffmann. Helvetica Bold, 36 point. 1956-1957

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: MoMA Collection（object number 72.2007。Gift of Lars Müller and Stampa Didot, Switzerland。Haas Type Foundry, Switzerland）
- URL: https://www.moma.org/collection/works/106768 （直接取得は 403。保存コピー https://web.archive.org/web/20250117104507id_/https://www.moma.org/collection/works/106768 を照合）
- 取得日: 2026-11-15
- 検証区分: R（機関の記録）
- 備考: MoMA Collection（object number 72.2007）。Haas Type Foundry。直接取得は 403 のため保存コピーで照合した。

### S95 Yvonne Schwemer-Scheddin「Reputations: Adrian Frutiger」（Eye 誌、1999 年春）

> If you want to do an international face, you don’t want confusion.
> So my idea was that the regular weight for text should be 55.
> Casting a font in lead was very expensive, which is why perhaps only one or two typefaces came out each year.
> Helvetica is the ‘blue jeans’ typeface.
> a system with 21 variations!
> Univers family of sans serif faces (1954-57)

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Eye, Spring 1999（インタビュー記事。聞き手 Yvonne Schwemer-Scheddin）
- URL: https://www.eyemagazine.com/feature/article/reputations-adrian-frutiger
- 取得日: 2026-11-15
- 検証区分: A（引用文は Frutiger 本人の回答部分。媒体の書き起こしの精度に依存）、R（導入文）
- 備考: 導入文は Univers の設計を 1954-57 年と書く（R）。Frutiger は自身の体系を 21 variations と語る。導入文は Frutiger が 1952 年に Deberny & Peignot に雇われたとも書く。

### S96 IBM「IBM design」（IBM Heritage）

> We don’t think design can make a poor product good … but we are convinced that good design can materially help a good product realize its full potential.
> a standardized visual motif wouldn’t age well

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: IBM の社史ページ（掲載日なし）。引用は Watson Jr. の Wharton School での講演として同ページが引くもの（講演の年は記載なし）
- URL: https://www.ibm.com/history/design-program
- 取得日: 2026-11-15
- 検証区分: B（企業ページでの引用）、R（地の文）
- 備考: 引用は Watson Jr. の講演として同ページが引くもの（講演の年は記載なし）。1956 年に Noyes を雇ったこと、Noyes が標準化された視覚モチーフは古びると考えたことは同ページの地の文（R）。

### S97 Rochester Institute of Technology「Massimo Vignelli, icon of design, dead at 83」（RIT News、2014-05-27）

> By 1965, having emigrated to the United States, he co-founded Unimark International Corporation, and then, in 1971, with Lella, he opened Vignelli Associates.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: RIT News, 2014-05-27
- URL: https://www.rit.edu/news/massimo-vignelli-icon-design-dead-83
- 取得日: 2026-11-15
- 検証区分: R（大学広報の地の文）
- 備考: NY の地下鉄の路線図を (1970) と書き、S98 の 1972 年導入と食い違う。

### S98 New York Transit Museum「Towards a Better Way: The “Vignelli” Map at 50」

> In August of 1972, the New York City Transit Authority (NYCTA) debuted a colorful diagrammatic map of the subway system, now commonly referred to as the Vignelli Map.
> In 1979 they succeeded.
> For various reasons, beginning in 1975 when the Subway Map Committee was formed, the NYCTA sought to move away from the Unimark map and reintroduce a more geographically based one.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: New York Transit Museum のオンライン展示（掲載日なし。題から 2022 年前後）
- URL: https://nytransitmuseum.org/vignelli
- 取得日: 2026-11-15
- 検証区分: R（機関の地の文）
- 備考: 標準化の取り組みが 1966 年に始まったこと、1970 年の受託、1974 年に駅名の書体が Helvetica Medium から Trade Gothic へ変わったことも同ページ。置き換えの理由は For various reasons としか書かれていない。

### S99 Massimo Vignelli『The Vignelli Canon』

> The purpose of the grid is to help to prevent arbitrary, meaningless placements of the information on the printed page.
> I often say that in typography the white space is more important than the black of the type.
> It is the white space that makes the layout sing.
> It was a disaster of mega proportions.
> It is not a geographical map: relative distances have been altered in favor of better legibility.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: RIT Vignelli Center が配布する PDF。刊行年は PDF の取得テキストに無い
- URL: https://www.rit.edu/vignellicenter/sites/rit.edu.vignellicenter/files/documents/The%20Vignelli%20Canon.pdf
- 取得日: 2026-11-15
- 検証区分: A（著者本人の本文。PDF のテキスト抽出で照合）
- 備考: RIT Vignelli Center が配布する PDF。刊行年は取得テキストに無く（2009 年か 2010 年かは未確認）、凡例の地下鉄ダイアグラムの版・年も本文から特定できない。Univers を 59 variations と書く。4 つ目の引用はデスクトップパブリッシングについての文。

### S100 Lily Gildor「Faster, Higher, Stronger」（Cooper Hewitt ブログ、2017-12-29）

> The Munich Olympics should have an unforced character and be open, carefree, and relaxed.
> The pictograms are formulated based on orthographical and geometric coordinates; rules and grids determine the proportions of heads, torsos, and features of male and female athletes.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Cooper Hewitt のブログ記事, 2017-12-29（署名 Lily Gildor。ページの紹介文は Parsons と Cooper Hewitt の共同修士課程の候補生・フェローとする）
- URL: https://www.cooperhewitt.org/2017/12/29/faster-higher-stronger/
- 取得日: 2026-11-15
- 検証区分: B（1 つ目。Aicher の言葉を書籍から孫引き。英訳）、R（2 つ目と、Aicher が 1966 年に雇われたことなど）
- 備考: Aicher の言葉は Kay Schiller・Christopher Young『The 1972 Munich Olympics and the Making of Modern Germany』（UC Press, 2010）p. 99 からの孫引き。五輪の開催年 1972 は、この書名に基づく。記事は別の大会の年を 1932 と誤記しており（コメントが 1936 と指摘）、本記事は年号の根拠に使わない。

### S101 HfG-Archiv Ulm「History」

> «From the coffee cup to the housing estate»
> «design is like history, something that is created rather than inevitable.»

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: HfG-Archiv / Museum Ulm のページ（掲載日なし）。1 つ目は Max Bill, 1954-07-05 の上棟式の演説として、2 つ目は Otl Aicher, archithese 15, 1975 として同ページが引く
- URL: https://hfg-archiv.museumulm.de/en/history/
- 取得日: 2026-11-15
- 検証区分: B（引用 2 件。機関ページでの引用で、原典は未取得。英訳）、R（年号）
- 備考: 1 つ目は Max Bill, 1954-07-05 の演説、2 つ目は Otl Aicher, archithese 15, 1975 として同ページが引く。1953 年に最初の授業、1955 年に正式開校、1957 年に Bill が去る、1968 年 11 月に州議会が資金打ち切りを決め年末に閉校、は R。1956 年からの教育方法の論争と、1960 年代の数学的・分析的な方法論をめぐる衝突も同ページ。

### S102 Design Museum「Dieter Rams」

> Adhering to these codes ensured that, at a time when technology was changing rapidly, consumers could be confident of learning how to use each new Braun product quickly and efficiently.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Design Museum（London）の人物ページ（掲載日・署名なし）
- URL: https://designmuseum.org/designers/dieter-rams
- 取得日: 2026-11-15
- 検証区分: R（機関の地の文。因果は Design Museum の主張）
- 備考: 1955 年夏に Braun 入社、1956 年に Gugelot と SK4、1962 年に部門長、1965 年に黒の Hi-Fi へ、1995 年まで design director。Braun の音響機器の規則（白か濃灰の筐体、灰色の操作部、電源だけ緑）も同ページ。10 項目の一覧も載せるが、Vitsœ 版と語句が違い、本 skill は転載しない。

### S103 Edward Tufte『The Visual Display of Quantitative Information』（Graphics Press の書籍ページ）

> The data-ink ratio.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: edwardtufte.com の書籍ページ。「1983 / 2nd Edition 2001 197 Pages」
- URL: https://www.edwardtufte.com/book/the-visual-display-of-quantitative-information/
- 取得日: 2026-11-15
- 検証区分: R（出版社〔著者が創業〕の紹介文）
- 備考: 1983 年刊、第 2 版 2001 年。引用は内容紹介の一項目。

### S104 Edward Tufte「Power Corrupts. PowerPoint Corrupts Absolutely.」（Wired、2003-09-01）

> The standard PowerPoint presentation elevates format over content, betraying an attitude of commercialism that turns everything into a sales pitch.
> Visual reasoning usually works more effectively when relevant information is shown side by side.
> Audience boredom is usually a content failure, not a decoration failure.
> In a business setting, a PowerPoint slide typically shows 40 words, which is about eight seconds' worth of silent reading material.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Wired, 2003-09-01（署名 Edward R. Tufte の寄稿）
- URL: https://www.wired.com/2003/09/ppt2/
- 取得日: 2026-11-15
- 検証区分: A（著者本人の寄稿。性質は論評）
- 備考: 同記事に「In a business setting, a PowerPoint slide typically shows 40 words, which is about eight seconds' worth of silent reading material.」がある。

### S105 Ivan E. Sutherland「Sketchpad: A man-machine graphical communication system」

> Heretofore, most interaction between men and computers has been slowed down by the need to reduce all communication to written statements that can be typed
> A Sketchpad user sketches directly on a computer display with a “light pen.”
> This technical report is based on a dissertation submitted January 1963 by the author for the degree of Doctor of Philosophy to the Massachusetts Institute of Technology.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: University of Cambridge Computer Laboratory Technical Report UCAM-CL-TR-574（2003-09。1963 年 1 月に MIT に提出した博士論文に基づく）
- URL: https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-574.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: University of Cambridge の技術報告 UCAM-CL-TR-574（2003-09 再刊。1963 年 1 月に MIT へ提出した博士論文に基づく）。再刊には新しい序文が付くが、本文は Sutherland 本人の論文。

### S106 Doug Engelbart Institute「Doug's Great Demo: 1968」

> On December 9th, 1968 Doug Engelbart appeared on stage at the Fall Joint Computer Conference in San Francisco's Civic Auditorium to give his slated presentation, titled "A Research Center for Augmenting Human Intellect."
> He and his team spent the next 90 minutes not only telling about their work, but demonstrating it live to a spellbound audience that filled the hall.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Doug Engelbart Institute（Engelbart が娘と設立した団体の公式サイト）。ページの公開日は取得本文に記載なし
- URL: https://dougengelbart.org/content/view/209/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ページの公開日は取得本文に記載なし。

### S107 Jeff Johnson ほか「The Xerox Star: A Retrospective」（IEEE Computer, 1989-09）

> In April of 1981, Xerox introduced the 8010 "Star" Information System.
> makes use of an analogy with real offices to make the system easy to learn. This analogy is called "the Desktop metaphor".
> Like the Alto, Star's display has a resolution of 72 pixels per inch.
> The first Alto was operational in 1972.
> a one-button mouse eliminated button-confusion errors only at the cost of increasing selection errors to unacceptable levels.
> they based the system heavily upon principles that are now known as direct manipulation and graphical control.
> The result was a product that was highly unfamiliar.
> Sketchpad influenced Star's user interface as a whole as well as its graphics applications.
> a "full-page" (10 1/2 x 8 1/4 inch; 600 x 800 pixel) bitmapped graphic display
> researchers at Xerox PARC decided that memory would get cheaper eventually and that a bit-mapped screen was worth the cost anyway.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: IEEE Computer, Vol. 22, No. 9（1989-09）。著者は Johnson, Roberts, Verplank, Smith, Irby, Beard, Mackey（Star の設計者を含む）
- URL: https://www.lri.fr/~mbl/FundHCI/papers/XeroxStar-Computer89.pdf（Université Paris-Saclay の LRI の講義資料に置かれた写し。geocities にあった版のページを PDF にしたもの）
- 取得日: 2026-11-15
- 検証区分: B（大学の講義資料に置かれた写し。IEEE の原本とは照合していない）
- 備考: 著者は Star の設計者を含む。Macintosh の一貫性への指摘（Duplicate・ドラッグ・Copy-Paste）と、SRI からのマウスの使用許諾も同じ本文にある。Alto の稼働開始を 1972 年とするこの論文と、1973 年とする S115 は食い違う。

### S108 Computer History Museum「Revolution: Xerox Alto」

> Graphics was too hard for computers—and computer time was considered too valuable to waste on saving people time. Humans were expected to adapt to their machines.
> all on a 600 by 800 pixel monochrome monitor.
> Thousands of Altos were built. Many were given away, but none were sold.
> Lead engineer Charles Thacker noted that the first one cost Xerox $12,000.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: CHM の常設展示「Revolution」のオンライン版（Input & Output 章）。ページの日付は取得本文に記載なし
- URL: https://www.computerhistory.org/revolution/input-output/14/347
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Bravo（WYSIWYG）と Gypsy（カット・アンド・ペースト）の記述も同じページ。Alto の年号はこのページに無い。

### S109 Hansen Hsu（Computer History Museum）「The Lisa: Apple's Most Influential Failure」（2023-01-19）

> Lisa was released to the public on January 19, 1983, at a cost of $9,995.
> the Star, for $16,595, which was similarly targeted towards office workers.
> The high price of both machines compared to the IBM PC, a command-line based PC which retailed for $1,565, doomed them both to failure.
> the Apple Macintosh shipped in January 1984 for $2,495.
> The invention of the GUI, especially in the form of windows, icons, menus, and pointer (WIMP), controlled by a mouse, occurred at Xerox PARC in the 1970s

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: CHM Blog（Curatorial Insights）, 2023-01-19
- URL: https://computerhistory.org/blog/the-lisa-apples-most-influential-failure/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 学芸員の署名記事。「価格が失敗を決めた」は CHM の評価。Lisa が版を重ねてアイコン型のデスクトップ・メタファーにたどり着いたこと、Macintosh がハードディスクとマルチタスクを省いて価格を下げたことも同じ本文にある。

### S110 Susan Kare（Stanford Silicon Valley Archives のインタビュー、追加の引用）

> How do you make a concept in 16-by-16 black and white dots?
> Since Lisa used pixels that weren't square, even if one had wanted to use the exact same thing in Mac we would have had to adjust it.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: 聞き手 Alex Pang, 2000-09-08（既存 S11 と同じページ）
- URL: https://web.stanford.edu/dept/SUL/sites/mac/primary/interviews/kare/trans.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: S11 と同じページ（聞き手 Alex Pang、2000-09-08）の追加の引用。1 つ目はビットマップの仕事全般についての発言で、Macintosh のアイコンの寸法を述べた文ではない。

### S111 Ben Shneiderman「Direct Manipulation: A Step Beyond Programming Languages」（IEEE Computer, 1983-08）

> The central ideas seemed to be visibility of the object of interest; rapid,

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: IEEE Computer, 1983-08（スキャンの欄外に "August 1983" とある）
- URL: https://www.cs.umd.edu/users/ben/papers/Shneiderman1983Direct.pdf（Shneiderman の所属大学のサイトに置かれた原本のスキャン）
- 取得日: 2026-11-15
- 検証区分: A（上の断片のみ）
- 備考: 原本のスキャンの文字認識で 2 段組が混ざり、連続して照合できたのは上の断片だけ。続きの「reversible, incremental actions; and replacement of complex command language syntax by direct manipulation of the object of interest」は断片ごとには本文にあるが、連続した文としては照合できていない（B 扱い）。本文の要旨は本 skill の要約。

### S112 Computer History Museum「Revolution: The PalmPilot」

> Graffiti represented a gamble that, to improve accuracy, users would learn a new way to write using simplified letter shapes, with every letter in the same box.
> The PalmPilot succeeded by redefining the handheld as an accessory to the personal computer, not its replacement.
> failed in the marketplace, costing investors about a billion dollars.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: CHM「Revolution」オンライン版（Mobile Computing 章）。ページの日付は取得本文に記載なし
- URL: https://www.computerhistory.org/revolution/mobile-computing/18/321
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 発売年はこのページに無い。価格 299 ドルは本ページにある。「1996 年春に発売」は検索結果の要約のみで未確認。

### S113 Apple Newsroom「Apple Reinvents the Phone with iPhone」（2007-01-09）

> iPhone introduces an entirely new user interface based on a large multi-touch display and pioneering new software, letting users control iPhone with just their fingers.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple Newsroom（プレスリリース）, 2007-01-09
- URL: https://www.apple.com/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 同じページに画面は 3.5 インチのワイドスクリーン（iPhone’s stunning 3.5-inch widescreen display）とある。発表時の Jobs の発言は S34（第三者の書き起こし、B）。

### S114 Windows Developer Blog「Windows Phone 7 Series UI Design & Interaction Guide」（2010-03-18）

> The Metro design principles center on a look that uses type to echo the visual language of airport and metro system signage.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Windows Developer Blog, 2010-03-18
- URL: https://blogs.windows.com/windowsdeveloper/2010/03/18/windows-phone-7-series-ui-design-interaction-guide/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ガイド本体（PDF）は取得していない。

### S115 Mike Kruzeniski（Windows Phone デザインチーム）「From Transportation to Pixels」（Windows Developer Blog, 2011-02-17）

> They were completely new, so an approach of direct representation was appropriate. Today it’s not necessary
> A user interface is created of pixels, so in Metro we try to avoid using the skeumorphic shading and glossiness used in some UI’s that try to mimic real world materials and objects.
> Similar inspiration was being used in Windows Media Center, Zune, and Xbox.
> We took an approach that we call “Fierce Reduction” to remove any elements in the UI that we felt were unnecessary
> In 1973, the first graphical user interface was built at PARC, using the desktop as a metaphor.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Windows Developer Blog, 2011-02-17（著者名はページの author メタ情報による。本文は「Windows Phone Design Team」の講演の要約と名乗る）
- URL: https://blogs.windows.com/windowsdeveloper/2011/02/17/from-transportation-to-pixels/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 最初の UI は新しかったので物の描写が適切だった、今は必要ない、という文は、フラット化の理由を当事者が述べた数少ない一次の文。2 つ目の引用の skeumorphic は原文の綴りのまま。PARC の最初の GUI を 1973 年とする文は、S107 の 1972 年と食い違う。

### S116 Apple Newsroom「Apple Unveils iOS 7」（2013-06-10）

> iOS 7 is completely redesigned with subtle motion, an elegant color palette and distinct, functional layers that make it feel more alive.
> True simplicity is derived from so much more than just the absence of clutter and ornamentation—it’s about bringing order to complexity,
> iOS 7 is completely redesigned with an entirely new user interface, but will be instantly familiar to the hundreds of millions of iPhone, iPad® and iPod touch® users around the world.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`、SKILL.md
- 媒体・日付: Apple Newsroom（プレスリリース）, 2013-06-10
- URL: https://www.apple.com/newsroom/2013/06/10Apple-Unveils-iOS-7/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2 つ目の引用は、Jony Ive（Apple’s senior vice president of Design）の発言としてリリースに載ったもの。文面は原文の句読点のまま（ornamentation と it’s の間は em ダッシュ、小文字）。ビデオでの発言という帰属と、ピリオドで切る形は未確認。リリースに flat という語は無い（本文照合）。

### S117 Nicholas Jitkoff（Google）「This is material design」（Google Developers Blog, 2014-06-25）

> When we started building for the first mobile devices, mobile meant less: less screen space, slower connection, fewer features.
> In material design, surface and shadow establish a physical structure to explain what can be touched and what can move.
> We needed something that felt at home on the smallest watch, the largest TV, and every screen in between.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Google Developers Blog, 2014-06-25（Google I/O 2014 の当日）
- URL: https://developers.googleblog.com/2014/06/this-is-material-design.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Google I/O 2014 の当日。

### S118 Google「Introduction - Material Design」（発表翌日の仕様。Wayback の 2014-06-26 の保存コピー）

> A material metaphor is the unifying theory of a rationalized space and a system of motion.
> Surfaces and edges of the material provide visual cues that are grounded in reality. The use of familiar tactile attributes helps users quickly understand affordances.
> Develop a single underlying system that allows for a unified experience across platforms and device sizes.
> The material is grounded in tactile reality, inspired by the study of paper and ink

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: google.com/design/spec（Material Design の仕様）。Wayback Machine の 2014-06-26 の保存コピー（発表の翌日）
- URL: https://web.archive.org/web/20140626085453/http://www.google.com/design/spec/material-design/introduction.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 現行の Material は JavaScript で描くページで本文を取れないため、保存コピーを使った。2015-01-01 の保存コピーなども同じ 3 文を含む。

### S119 Salesforce Trailhead「Learn How and Why We Developed SLDS」

> Our story opens in 2013, two years before the launch of Lightning Experience.
> The Salesforce1 engineering team chooses the term design tokens to describe style guide values that work across native operating systems and web apps.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Salesforce 公式の学習教材 Trailhead。公開日は取得本文に記載なし
- URL: https://trailhead.salesforce.com/content/learn/modules/lightning-design-system-basics/learn-how-and-why-we-developed-slds
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Salesforce 自身による回顧。トークンの名付けを 2013 年と 2014 年のどちらとするかは、出典によって揺れる。

### S120 Design Tokens Community Group「Design Tokens specification reaches first stable version」（W3C Community Group のブログ、2025-10-28）

> The Design Tokens Community Group today announced the first stable version of the Design Tokens Specification (2025.10)
> Teams maintaining multi-brand design systems often juggle dozens or even hundreds of token files manually, leading to drift, errors, and maintenance overhead.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: W3C Community Group のブログ（Kaelig Deloumeau-Prigent）, 2025-10-28
- URL: https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Kaelig Deloumeau-Prigent の署名。仕様の位置づけは、同日の最終報告（S121）が W3C 勧告ではないと明記する。

### S121 Design Tokens Community Group「Design Tokens Format Module 2025.10」（Final Community Group Report、2025-10-28）

> It is not a W3C Standard nor is it on the W3C Standards Track.
> Design tokens are a methodology for expressing design decisions in a platform-agnostic way so that they can be shared across different disciplines, tools, and technologies.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Final Community Group Report, 2025-10-28
- URL: https://www.designtokens.org/tr/2025.10/format/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 位置づけは W3C の Community Group の最終報告で、W3C 勧告ではない。同日のブログも仕様の最初の安定版 2025.10 を告知した。

### S122 Apple Newsroom「Introducing Apple Vision Pro: Apple's first spatial computer」（2023-06-05）

> introduces a fully three-dimensional user interface controlled by the most natural and intuitive inputs possible — a user’s eyes, hands, and voice.
> Featuring visionOS, the world’s first spatial operating system

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple Newsroom（プレスリリース）, 2023-06-05
- URL: https://www.apple.com/newsroom/2023/06/introducing-apple-vision-pro/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: world's first は Apple の宣伝上の主張で、事実として検証していない。同じ本文に既存の iPhone・iPad のアプリが使える旨（access hundreds of thousands of familiar iPhone and iPad apps）がある。

### S123 Don Norman「Signifiers, not affordances」（jnd.org、2008-11-17）

> When I introduced the term into design in 1988 I was referring to perceivable affordances.
> I call any physically perceivable cue a signifier, whether it is incidental or deliberate.
> Forget affordances: what people need, and what design must provide, are signifiers.
> Since then, the term has been widely used and misused.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: jnd.org, 2008-11-17（ACM Interactions, Vol. 15, Issue 6 のコラムの著者版）
- URL: https://jnd.org/signifiers-not-affordances/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: S36 の備考にあった、signifier の定義の逐語を埋める。Norman はここで social signifier を中心に論じている。UI の押せる手がかりへの当てはめは本 skill の適用。

### S124 Jakob Nielsen「10 Usability Heuristics for User Interface Design」（NN/g、1994-04-24、2024-01-30 に再確認）

> I originally developed the heuristics for heuristic evaluation in collaboration with Rolf Molich in 1990
> the 10 heuristics themselves have remained relevant and unchanged since 1994.
> Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform and industry conventions.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: NN/g, 1994-04-24（"Last reviewed Jan. 30, 2024"。2020 年に説明を更新）
- URL: https://www.nngroup.com/articles/ten-usability-heuristics/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2020 年に説明を更新。1994 年の改訂は 249 件のユーザビリティ問題の因子分析に基づく（同ページ）。

### S125 Kate Moran（NN/g）「Flat Design: Its Origins, Its Problems, and Why Flat 2.0 Is Better for Users」（2015-09-27）

> One of the biggest usability issues introduced by flat design is the lack of signifiers on clickable elements.
> The release of Microsoft’s Metro design language and Windows 8 in 2011 was particularly influential in popularizing flat design.
> But just because users are better at detecting linked elements doesn’t mean they don’t need any clues at all.
> we've noticed that long-term exposure to these flat yet clickable elements has been slowly reducing user efficiency
> Google’s Material design language is one example of flat 2.0 with the right priorities
> Our primary objection to flat design is that it tends to sacrifice users’ needs for the sake of trendy aesthetics.
> Flat design is commonly interpreted as a reactionary movement against 3D, skeuomorphic, and realistic design styles.
> Flat design is a web-design style that became popular around 2012.
> resisted the flat trend until around 2013
> glossy, 3D tabs

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: NN/g, 2015-09-27
- URL: https://www.nngroup.com/articles/flat-design/
- 取得日: 2026-11-15
- 検証区分: C（論評。逐語は取得本文で照合済み）
- 備考: 専門家による論評で、実験の報告ではない。「we've noticed」は所感。2007 年の Apple のホームページのナビゲーションが光沢のある立体的なタブだったという記述（glossy, 3D tabs）と、Apple のホームページが 2013 年頃までフラットの流れに抵抗したという記述も同記事。普及の年（Metro と Windows 8 の 2011 年）は NN/g の記述のまま、独自に確認していない。S114 と S115 の Microsoft の出典とずれる。

### S126 Kate Moran（NN/g）「Flat UI Elements Attract Less Attention and Cause Uncertainty」（2017-09-03）

> In an eyetracking experiment comparing different kinds of clickability clues, UIs with weak signifiers required more user effort than strong ones.
> We recruited 71 general web-users to participate in the experiment.
> On average participants spent 22% more time (i.e., slower task performance) looking at the pages with weak signifiers.
> On average, people had 25% more fixations on the pages with weak signifiers.
> Flat interfaces often use weak signifiers.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: NN/g, 2017-09-03
- URL: https://www.nngroup.com/articles/flat-ui-less-attention-cause-uncertainty/
- 取得日: 2026-11-15
- 検証区分: A（定量実験の報告として）
- 備考: 視線計測、デスクトップ PC、被験者間計画、9 サイト×強い版・弱い版。有意差は p < 0.05。9 サイトのうち 3 サイトでは視線の差が出なかった。対象は Web で、モバイルのタッチ画面の結果ではない。

### S127 Megan Chan（NN/g）「Skeuomorphism」（2024-03-15）

> Skeuomorphism involves designing digital interfaces that imitate physical elements, reducing the learning curve for unfamiliar interactions.
> In the early 2010s, skeuomorphism was at its peak.
> Later, as users became familiar with ereaders, Amazon dropped the skeuomorphic elements.
> the detailed textures and shadows required more graphical processing power.
> dropping all realistic textures and shadows caused ultra flat interfaces to have weak signifiers.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: NN/g, 2024-03-15
- URL: https://www.nngroup.com/articles/skeuomorphism/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 解説記事。Kindle Fire の例は事例の紹介で、調査の結果ではない。

### S128 W3C「A Little History of the World Wide Web」

> The first web server was nxoc01.cern.ch, later called info.cern.ch, and the first web page http://nxoc01.cern.ch/hypertext/WWW/TheProject.html
> NCSA release first alpha version of Marc Andreessen's "Mosaic for X".

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: W3C（ページ自体の公開日は記載なし。1945〜1995 の年表）
- URL: https://www.w3.org/History.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ページ自体の公開日は記載なし。年表の 1990 年 11 月の項が最初のサーバーとページ、1991-05-17 の項が CERN の中央マシンでの一般公開、1993 年の項が Mosaic の最初のアルファ版と作動版。

### S129 W3C「A brief history of CSS until 2016」（Håkon Wium Lie・Bert Bos）

> The separation of document structure from the document's layout had been a goal of HTML from its inception in 1990.
> The first commercial browser to support CSS was Microsoft's Internet Explorer 3, which was released in August 1996.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: W3C（書籍 "Cascading Style Sheets – designing for the Web" 第 20 章を元にした文章。ページの公開日は記載なし）
- URL: https://www.w3.org/Style/CSS20/history.html
- 取得日: 2026-11-15
- 検証区分: A（著者の記述として）
- 備考: Mosaic が利用者に変えさせたのは一部の色とフォントだけ（only allowed its users to change certain colors and fonts）、IE3 がボックスモデルの多くを実装していなかった点も同ページ。

### S130 Håkon W Lie「Cascading HTML style sheets -- a proposal」（1994-10-10、v0.92）

> This will provide publishers with stylistic influence without resorting to page description languages.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: CERN / W3C、1994-10-10（v0.92）
- URL: https://www.w3.org/People/howcome/p/cascade.html
- 取得日: 2026-11-15
- 検証区分: A

### S131 W3C「HTML 3.2 Reference Specification」（W3C Recommendation、1997-01-14）

> HTML 3.2 adds widely deployed features such as tables, applets and text flow around images, while providing full backwards compatibility with the existing standard HTML 2.0.
> CENTER was introduced by Netscape before they added support for the HTML 3.0 DIV element.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: W3C Recommendation, 1997-01-14（2018-03-15 に superseded）
- URL: https://www.w3.org/TR/2018/SPSD-html32-20180315/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2018-03-15 に superseded。

### S132 David Siegel「The Single-Pixel GIF Trick」（Wayback の 1997-02-13 の保存コピー）

> HTML is a markup language, not a layout language.
> My biggest workaround is the single-pixel clear GIF, which I use for spacing accurately around the page.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: dsiegel.com（記事の初出日は不明。Wayback の 1997-02-13 05:51:29 の保存コピーで照合）
- URL: https://web.archive.org/web/19970213055129/http://dsiegel.com/tips/wonk5/single.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 記事の初出日は不明。Netscape の不具合（透明画素が白く出る）も同ページ。Siegel が考案者という説は未確認。

### S133 W3C「HTML 4.01 Specification」11 Tables（W3C Recommendation、1999-12-24）

> Tables should not be used purely as a means to layout document content as this may present problems when rendering to non-visual media.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: W3C Recommendation, 1999-12-24（2018-03-27 に superseded）
- URL: https://www.w3.org/TR/html401/struct/tables.html （日付は https://www.w3.org/TR/html401/ の表紙で確認）
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2018-03-27 に superseded。日付は https://www.w3.org/TR/html401/ の表紙で確認。

### S134 W3C「Cascading Style Sheets, level 1」（W3C Recommendation、1996-12-17。Håkon Wium Lie・Bert Bos）

> CSS1 is a simple style sheet mechanism that allows authors and readers to attach style (e.g. fonts, colors and spacing) to HTML documents.
> authors can attach a preferred style sheet, while the reader may have a personal style sheet to adjust for human or technological handicaps.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: W3C Recommendation, 1996-12-17（Håkon Wium Lie、Bert Bos）
- URL: https://www.w3.org/TR/REC-CSS1-961217
- 取得日: 2026-11-15
- 検証区分: A

### S135 The Web Standards Project「History of the Web Standards Project」

> Netscape and Microsoft each claimed about 50% of the browser market, and their 4.0 browsers were almost entirely incompatible.
> Browser makers are no longer the problem.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: webstandards.org（ページに日付の記載なし。本文は "Netscape 6" "Internet Explorer 5+" を「今日」として語る）
- URL: https://www.webstandards.org/about/history/
- 取得日: 2026-11-15
- 検証区分: A（WaSP 自身の回想として。シェアの数値は独自に確認していない）
- 備考: ページに日付の記載なし。

### S136 W3C「Web Content Accessibility Guidelines 1.0」（W3C Recommendation、1999-05-05）

> 5.3 Do not use tables for layout unless the table makes sense when linearized.
> 3.3 Use style sheets to control layout and presentation.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: W3C Recommendation, 1999-05-05（2021-05-18 に superseded）
- URL: https://www.w3.org/TR/WAI-WEBCONTENT/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2021-05-18 に superseded。チェックポイント 1.1 の非テキスト要素の列挙に spacers を含む。

### S137 Dave Shea「css Zen Garden」（Wayback の 2003-10-01 の保存コピー）

> Littering a dark and dreary road lay the past relics of browser–specific tags, incompatible DOMs, and broken CSS support.
> The code remains the same, the only thing that has changed is the external .css file.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: csszengarden.com（Wayback の 2003-10-01 18:03:17 の保存コピーで照合。2003-05-12 の保存コピーはドメイン転送のスクリプトで、本文を含まない）
- URL: https://web.archive.org/web/20031001180317/http://www.csszengarden.com:80/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 確認できた最古の本文。2003-05-12 の保存コピーはドメイン転送のスクリプトで本文を含まない。現行ページは文言が変わっている。開設の月日は未確認。

### S138 Jakob Nielsen「Flash: 99% Bad」（NN/g、2000-10-29）

> it makes bad design more likely, it breaks with the Web's fundamental interaction style, and it consumes resources that would be better spent enhancing a site's core value.
> Splash pages were an early sin of abusive Web design.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Nielsen Norman Group, 2000-10-29
- URL: https://www.nngroup.com/articles/flash-99-percent-bad/
- 取得日: 2026-11-15
- 検証区分: C

### S139 Steve Jobs「Thoughts on Flash」（apple.com、2010 年 4 月。Wayback の 2010-05-01 の保存コピー）

> Flash was designed for PCs using mice, not for touch screens using fingers.
> But the mobile era is about low power devices, touch interfaces and open web standards – all areas where Flash falls short.
> many Flash websites rely on “rollovers”

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Apple（apple.com/hotnews）、末尾の署名 "Steve Jobs" と "April, 2010"（改行で区切る）（Wayback の 2010-05-01 01:06:16 の保存コピーで照合）
- URL: https://web.archive.org/web/20100501010616/http://www.apple.com:80/hotnews/thoughts-on-flash/
- 取得日: 2026-11-15
- 検証区分: A（文言として。内容は Apple の立場の表明）
- 備考: 末尾の署名は Steve Jobs と April, 2010。文中の 75% of video on the web is in Flash は Adobe の主張の紹介。many Flash websites rely on “rollovers” の文も同ページ。

### S140 Adobe「Flash & the Future of Interactive Content」（Adobe Blog、2017-07-25）

> Specifically, we will stop updating and distributing the Flash Player at the end of 2020 and encourage content creators to migrate any existing Flash content to these new open formats.
> Where a format didn’t exist, we invented one – such as with Flash and Shockwave.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Adobe Blog, 2017-07-25
- URL: https://blog.adobe.com/en/publish/2017/07/25/adobe-flash-update
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 終了の理由として、HTML5・WebGL・WebAssembly などの標準の成熟を挙げる。Jobs の書簡には触れない。

### S141 Jeff Veen「Introducing Typekit」（The Typekit Blog、2009-05-27）

> No longer will you need to trap your content in images or Flash just to express yourself visually.
> Almost all fonts are protected by copyright — even those available for free — and very few of them allow for linking via CSS or redistribution on the web.
> Pages will be more usable, accessible, and indexable.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`、SKILL.md
- 媒体・日付: The Typekit Blog（著者欄 "Jeff Veen"、"Typekit co-founder"）, 2009-05-27（日付は URL のパスによる。本文に日付の表示は無く、最初のコメントは 2009-05-28）
- URL: https://blog.typekit.com/2009/05/27/introducing-typekit/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 日付は URL のパスによる。同記事に「Pages will be more usable, accessible, and indexable.」がある。

### S142 Luke Wroblewski「Mobile First」（2009-11-03）

> Mobile devices require software development teams to focus on only the most important data and actions in an application.
> There simply isn't room in a 320 by 480 pixel screen for extraneous, unnecessary elements.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: LukeW（Functioning Form）, 2009-11-03（現行ページの "November 3, 2009" と著者のアーカイブ一覧で確認。2009-12-12 の Wayback の保存コピーは "11.03.2009" 表記で、本文は同一）
- URL: https://www.lukew.com/ff/entry.asp?933 （保存コピー: https://web.archive.org/web/20091212002935/http://www.lukew.com:80/ff/entry.asp?933 ）
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2009-12-12 の保存コピーも同じ本文。

### S143 Ethan Marcotte「Responsive Web Design」（A List Apart、2010-05-25）

> Rather than tailoring disconnected designs to each of an ever-increasing number of web devices, we can treat them as facets of the same experience.
> Fluid grids, flexible images, and media queries are the three technical ingredients for responsive web design, but it also requires a different way of thinking.
> That’s not to say there isn’t a business case for separate sites geared toward specific devices

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: A List Apart, 2010-05-25（ページには 2019-05-01 の日付も併記）
- URL: https://alistapart.com/article/responsive-web-design/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 同記事に「That’s not to say there isn’t a business case for separate sites geared toward specific devices」がある。

### S144 Therese Fessenden「Scrolling and Attention」（NN/g、2018-04-15）

> Since 2010, with the advent of responsive design and minimalism, many designers have turned towards long pages (covering several “screenfuls”) with negative space.
> In our most recent study, users spent about 57% of their page-viewing time above the fold.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Nielsen Norman Group, 2018-04-15
- URL: https://www.nngroup.com/articles/scrolling-and-attention/
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 同記事に 74% of the viewing time was spent in the first two screenfuls がある。

### S145 W3C「CSS2 Specification」（1998-05-12）と「CSS 2.1」Appendix C（2011-06-07）

> All font descriptions are specified via a @font-face at-rule.
> Font descriptors, the '@font-face' declaration, and all associated parts of the font matching algorithm have been removed in CSS 2.1.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: CSS2 は W3C Recommendation, 1998-05-12。CSS 2.1 は W3C Recommendation, 2011-06-07
- URL: https://www.w3.org/TR/1998/REC-CSS2-19980512/fonts.html （表紙 https://www.w3.org/TR/1998/REC-CSS2-19980512/ ）／ https://www.w3.org/TR/CSS21/changes.html （表紙 https://www.w3.org/TR/CSS21/ ）
- 取得日: 2026-11-15
- 検証区分: A
- 備考: いずれも W3C Recommendation。

### S146 Google Developers Blog「Introducing the Google Font API & Google Font Directory」（2010-05-19）

> To enjoy the visual richness of diverse fonts, webmasters have resorted to workarounds such as baking text into images.
> Web fonts, enabled by the CSS3 @font-face standard, are hosted in the cloud and sent to browsers as needed.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Google Developers Blog, 2010-05-19
- URL: https://developers.googleblog.com/2010/05/introducing-google-font-api-google-font.html
- 取得日: 2026-11-15
- 検証区分: A

### S147 W3C「WOFF File Format 1.0」（2012-12-13）・「CSS Fonts Module Level 3」（2018-09-20）・MDN「@font-face」

> It’s been available across browsers since July 2015.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: WOFF 1.0 は W3C Recommendation, 2012-12-13。CSS Fonts Module Level 3 は W3C Recommendation, 2018-09-20。引用は MDN「@font-face」の Baseline 表示
- URL: https://www.w3.org/TR/WOFF/ ／ https://www.w3.org/TR/css-fonts-3/ ／ https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face
- 取得日: 2026-11-15
- 検証区分: A（各ページの表紙・表示で日付を確認）
- 備考: 引用は MDN「@font-face」の Baseline 表示。

### S148 Mozilla Hacks「Firefox 52」（2017-03-07）・WebKit「CSS Grid Layout: A New Layout Module for the Web」（2017-03-09）・MDN「grid」

> CSS Grid is a two-dimensional layout system for the web, making it much easier to code many of the layout patterns we’ve been solving for years using grid frameworks, natively in the browser.
> Different solutions have been used to create grid layouts, like tables, floats, inline blocks, or flexboxes, but all of these techniques have different issues when you try to define a complex grid design.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Mozilla Hacks, 2017-03-07 ／ WebKit Blog（Manuel Rego）, 2017-03-09 ／ MDN「grid」Baseline "since October 2017" ／ 仕様 CSS Grid Layout Module Level 1 は W3C Candidate Recommendation Draft, 2025-03-26
- URL: https://hacks.mozilla.org/2017/03/firefox-52-introducing-web-assembly-css-grid-and-the-grid-inspector/ ／ https://webkit.org/blog/7434/css-grid-layout-a-new-layout-module-for-the-web/ ／ https://developer.mozilla.org/en-US/docs/Web/CSS/grid ／ https://www.w3.org/TR/css-grid-1/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: MDN「grid」は Baseline since October 2017。仕様 CSS Grid Layout Module Level 1 は 2025-03-26 時点で W3C Candidate Recommendation Draft。

### S149 web.dev「Container queries land in stable browsers」（2023-02-14）・MDN「Container queries」

> This Valentine’s day, size container queries and container query units are stable in all modern browsers.
> Container queries are an alternative to media queries, which apply styles to elements based on viewport size or other device characteristics.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: web.dev Blog（"Last updated 2023-02-14"）／ MDN Web Docs。MDN「@container」は Baseline "since February 2023"（注記の印付き）
- URL: https://web.dev/blog/cq-stable ／ https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries ／ https://developer.mozilla.org/en-US/docs/Web/CSS/@container
- 取得日: 2026-11-15
- 検証区分: A
- 備考: MDN「@container」は Baseline since February 2023。

### S150 W3C WAI「WCAG 2 Overview」・「WCAG 2.0」（W3C Recommendation、2008-12-11）

> WCAG 2.2 was published on 5 October 2023, and an update was published on 12 December 2024.
> WCAG 2.0 success criteria are written as testable statements that are not technology-specific.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: W3C WAI（Overview。"First published July 2005"）／ WCAG 2.0 は W3C Recommendation, 2008-12-11
- URL: https://www.w3.org/WAI/standards-guidelines/wcag/ ／ https://www.w3.org/TR/WCAG20/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 同 Overview に、WCAG 2.0 は 11 December 2008 に公開、WCAG 2.1 は 2018-06-05 とある。S72 は WCAG 2.2 の 2024-12-12 版。

### S151 web.dev「Web Vitals」・Chromium Blog・web.dev「INP」告知

> Web Vitals is an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web.
> Interaction to Next Paint will officially become a Core Web Vital and will replace First Input Delay on March 12.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: web.dev（"Published: May 4, 2020, Last updated: October 31, 2024"）／ Chromium Blog（2020-05-05）／ web.dev Blog（INP、"Last updated 2024-01-31"）／ Google Search Central Blog（2020-11-10）
- URL: https://web.dev/articles/vitals ／ https://blog.chromium.org/2020/05/introducing-web-vitals-essential-metrics.html ／ https://web.dev/blog/inp-cwv-march-12 ／ https://developers.google.com/search/blog/2020/11/timing-for-page-experience
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Web Vitals は 2020-05-04 公開（2024-10-31 更新）。目安は LCP 2.5 秒以内、INP 200 ミリ秒以下、CLS 0.1 以下（web.dev の記述）。INP の 2024 年は告知ページの最終更新日からの読み取り。

### S152 Brad Frost「Atomic Design」（2013-06-10）

> Atomic design is methodology for creating design systems.
> We’re not designing pages, we’re designing systems of components.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: bradfrost.com, 2013-06-10
- URL: https://bradfrost.com/blog/post/atomic-web-design/
- 取得日: 2026-11-15
- 検証区分: 1 つ目は A（Frost）、2 つ目は Stephen Hay の言葉として記事冒頭に掲げられたもので B
- 備考: 5 段階は Atoms / Molecules / Organisms / Templates / Pages。

### S153 Jurn van Wissen「Let’s Make One of Those Fancy Scrolling Animations Used on Apple Product Pages」（CSS-Tricks、2020-05-22）

> Apple is well-known for the sleek animations on their product pages.
> A lot of the effects that you see there aren’t created in just HTML and CSS.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: CSS-Tricks, 2020-05-22
- URL: https://css-tricks.com/lets-make-one-of-those-fancy-scrolling-animations-used-on-apple-product-pages/
- 取得日: 2026-11-15
- 検証区分: C（第三者の解説。Apple の製品ページの実装を Apple が述べたものではない）

### S154 MDN「animation-timeline」

> The animation-timeline CSS property specifies the timeline used to control the progress of a CSS animation.
> The animation-timeline property can be used to set a named or anonymous scroll progress or view progress timeline.
> Since October 2026, this feature works across the latest devices and browser versions.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: MDN Web Docs（Baseline 2026、Newly available）
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Baseline 2026（Newly available）。

### S155 Apple サポート「Macintosh 128K: Technical Specifications」

> Notes: Screen size is 512x342.
> Introduced: 1/24/1984

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple サポート「Macintosh 128K: Technical Specifications」, ページに記載なし
- URL: https://support.apple.com/en-us/112190
- 取得日: 2026-11-15
- 検証区分: A（Apple の公式ページ。後年の仕様表で、1984 年当時の資料ではない）
- 備考: RAM は同じページの Min - Max RAM: 0.125MB - 0.125 MB。ページに日付の記載なし。

### S156 Apple『Human Interface Guidelines: The Apple Desktop Interface』（1987）

> Most people now using computers don’t have years of experience with several different computer systems. What they do have is years of direct experience with their immediate world.
> Use concrete metaphors and make them plain, so that users have a set of expectations to apply to computer environments.
> This section describes the ten fundamental principles of the Apple Desktop Interface.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple『Human Interface Guidelines: The Apple Desktop Interface』（1987、OCR）, Copyright © 1987（Addison-Wesley）
- URL: https://archive.org/details/apple-hig （ファイル Apple_Human_Interface_Guidelines_1987_djvu.txt）
- 取得日: 2026-11-15
- 検証区分: A（Internet Archive のスキャンの OCR 全文で照合。OCR の誤りがありうる）
- 備考: Addison-Wesley, Copyright 1987。目次と本文の This section describes the ten fundamental principles of the Apple Desktop Interface. で 10 原則を確認。

### S157 Apple『Macintosh Human Interface Guidelines』（1992）

> Metaphors in the computer interface suggest a use for something, but that use doesn’t define or limit the implementation of the metaphor.
> Even when particular actions are unavailable, they are not eliminated from a display but are merely dimmed.
> Apple’s goal in adding color to the interface is to enhance meaning, not just to color things to improve aesthetics.
> The windows and dialog boxes in System 7 are designed for aesthetic consistency across all monitors from black-and-white displays to 8-bit color displays.
> you can’t design in accordance with all of the principles all of the time.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple『Macintosh Human Interface Guidelines』（1992、OCR）, © 1992, Apple Computer, Inc.
- URL: https://archive.org/details/apple-hig （ファイル Macintosh_HIG_1992_djvu.txt）
- 取得日: 2026-11-15
- 検証区分: A（OCR）
- 備考: Metaphors の文は原則の章、色の文は第 9 章 Color。原則どうしの衝突を認める文と、Modelessness が原則に、Knowledge of Your Audience と Accessibility が Additional Issues to Consider にあること（目次）も確認。

### S158 Hartmut Esslinger「How I Taught Steve Jobs To Put Design First」（Fast Company Co.Design、自著『Keep It Simple』の抜粋、2013-10-07）

> He seemed mildly uncomfortable with the idea that a design language isn’t universal or absolute but needs to be right for the spirit of a company
> I insisted that Apple needed a comprehensive strategy that could generate a line of great products.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Hartmut Esslinger「How I Taught Steve Jobs To Put Design First」（Fast Company Co.Design、自著『Keep It Simple』の抜粋）, 2013-10-07（ページの表示）
- URL: https://web.archive.org/web/20140213041631/https://www.fastcompany.com/3019401/how-i-taught-steve-jobs-to-put-design-first （原典は 403）
- 取得日: 2026-11-15
- 検証区分: A（署名入りの本人の文章。Wayback の保存コピーで照合）。ただし 2013 年の回想で、Apple の見解ではない

### S159 Thomas Wagner「The Frog, Snow White and The Apple」（German Design Council、2024-06-05）

> Although Jobs wanted to focus on the Macintosh, he also wanted a unified design language for all future Apple products.
> The Snow White look, which was immediately adopted for the Apple IIc, consisted of white enclosures with slim, rounded edges and delicate, evenly spaced vents that gave the surfaces texture and turned their function into a graphic element.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Thomas Wagner「The Frog, Snow White and The Apple」（German Design Council の雑誌）, 2024-06-05
- URL: https://www.german-design-council.de/en/design-perspectives/article-detail/the-frog-snow-white-and-the-apple
- 取得日: 2026-11-15
- 検証区分: R（記者の地の文。Isaacson の伝記に拠る）
- 備考: 記事中の Jobs の台詞は記者の再話で、Jobs の発言として引用しない。Apple IIc の発売年は一次確認していない。

### S160 Apple『Mac OS 8 Human Interface Guidelines』（1997-09-02）

> since the Mac OS now provides for multiple appearances, there is no longer a direct correspondence between the appearance of Mac OS interface elements and their behavior.
> Toolbox-generated controls behave consistently across all appearance themes.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple『Mac OS 8 Human Interface Guidelines』（1997-09-02、OCR）, © 1997、フッター 9/2/97
- URL: https://archive.org/details/apple-hig （ファイル MacOS8_HIG_1997_09_02_djvu.txt）
- 取得日: 2026-11-15
- 検証区分: A（OCR）
- 備考: © 1997、フッターは 9/2/97。

### S161 Apple プレスリリース「Mac OS 8」（1997-07-22。Wayback の保存コピー）

> the most significant Mac OS upgrade since 1984
> as well as scalable functionality for all user levels and a new, platinum appearance.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple プレスリリース「Mac OS 8」（1997-07-22）
- URL: https://web.archive.org/web/20020602012135/http://www.apple.com/pr/library/1997/q4/970722.pr.rel.macos8.html
- 取得日: 2026-11-15
- 検証区分: A

### S162 Apple Newsroom「Apple Unveils Mac OS X」（2000-01-05）

> Aqua offers a stunning new visual appearance, with luminous and semi-transparent elements such as buttons, scroll bars and windows, and features fluid animation to enhance the user’s experience.
> Mac OS X is designed to make computing even easier for consumers, while simultaneously extending the functionality for professional users.
> Aqua is made possible by Mac OS X’s new graphics system

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple Newsroom「Apple Unveils Mac OS X」（2000-01-05）
- URL: https://www.apple.com/newsroom/2000/01/05Apple-Unveils-Mac-OS-X/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 同じ本文に「Aqua is made possible by Mac OS X’s new graphics system」がある。

### S163 Brent Schlender「Steve Jobs' Apple Gets Way Cooler」（Fortune、2000-01-24）

> We made the buttons on the screen look so good you'll want to lick them,
> You instantly know exactly what it means.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`、SKILL.md
- 媒体・日付: Brent Schlender「Steve Jobs' Apple Gets Way Cooler」（Fortune）, 2000-01-24
- URL: https://web.archive.org/web/20110609220023/http://money.cnn.com/magazines/fortune/fortune_archive/2000/01/24/272281/index.htm
- 取得日: 2026-11-15
- 検証区分: A（署名入りの記事。Wayback の保存コピーで照合）。いずれも Jobs が記者に語った言葉
- 備考: 1 つ目の後に記者の地の文 he says. が続く。2 つ目はアイコンの試作の選定の場面。Macworld 2000 の基調講演での発言という帰属は確認できていない。同じ号の Q&A（別の記事）とは別の記事。

### S164 Apple『Inside Mac OS X: Adopting the Aqua Interface』（2000-09-08、Preliminary）

> This familiarity helps the application become more approachable and non-threatening to novice users

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Apple『Inside Mac OS X: Adopting the Aqua Interface』（2000、OCR）, 9/8/00（Mac OS X Public Beta 向けの改訂版、"Preliminary"）
- URL: https://archive.org/details/apple-hig （ファイル 2000 Adopting the Aqua Interface_djvu.txt）
- 取得日: 2026-11-15
- 検証区分: A（OCR）
- 備考: Mac OS X Public Beta 向けの改訂版。引用はアイコンが身近な物に見えることの効果として述べた文。

### S165 Jeff Carlson「A Quick Dip into Aqua, the Mac OS X Interface」（TidBITS、2000-01-17）

> During the Macworld Expo keynote, Steve Jobs reinforced his unusual oral fixation on Apple products by claiming that they were good enough to lick.
> It’s an implementation of Look Different: for someone who has never used a computer before, the interface is clean and inviting.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Jeff Carlson「A Quick Dip into Aqua, the Mac OS X Interface」（TidBITS）, 2000-01-17
- URL: https://tidbits.com/2000/01/17/a-quick-dip-into-aqua-the-mac-os-x-interface/
- 取得日: 2026-11-15
- 検証区分: 1 つ目は R（記者の地の文。Jobs の逐語ではない）、2 つ目は C

### S166 Apple『Apple Human Interface Guidelines』（2004-05-27）

> Don’t use the brushed metal look indiscriminately.
> Strives to re-create a familiar physical device—Calculator or DVD Player, for example

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple『Apple Human Interface Guidelines』（2004-05-27、OCR）, May 27, 2004
- URL: https://archive.org/details/apple-hig （ファイル MacOSX_HIG_2004_05_27_djvu.txt）
- 取得日: 2026-11-15
- 検証区分: A（OCR）
- 備考: 2 つ目の引用は、brushed metal を使ってよい条件の箇条の 1 つ。

### S167 Apple『Apple Human Interface Guidelines』（2008-01-15）

> Important: In Mac OS X v10.5 and later, there are no brushed metal windows.
> In Mac OS X v10.5 and later, all windows display the title bar unified with the toolbar, if a toolbar is present.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple『Apple Human Interface Guidelines』（2008-01-15、OCR）, © 1992, 2001-2003, 2008（ファイル名の日付は 2008-01-15）
- URL: https://archive.org/details/apple-hig （ファイル MacOSX_HIG_2008_01_15_djvu.txt）
- 取得日: 2026-11-15
- 検証区分: A（OCR）
- 備考: 著作権表記は 1992, 2001-2003, 2008。

### S168 Apple『iOS Human Interface Guidelines』（2010-12-09）

> Often, the more true to life your application looks and behaves, the easier it is for people to understand how it works and the more they enjoy using it.
> For example, Notes reproduces the look of fine leather and meticulous stitching.
> The most appropriate metaphors suggest a usage or experience without enforcing the limitations of the real-world object or action on which they’re based.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Apple『iOS Human Interface Guidelines』（2010-12-09、OCR）, 改訂履歴の最新行 2010-12-09（2010-11-15 に iPhone Human Interface Guidelines から改題）
- URL: https://archive.org/details/apple-hig （ファイル 2010_iOS_Human_Interface_Guidelines_djvu.txt）
- 取得日: 2026-11-15
- 検証区分: A（OCR）
- 備考: 改訂履歴の最新行が 2010-12-09（2010-11-15 に iPhone Human Interface Guidelines から改題）。

### S169 Apple Newsroom「Apple Announces Changes to Increase Collaboration Across Hardware, Software & Services」（2012-10-29）

> Jony Ive will provide leadership and direction for Human Interface (HI) across the company in addition to his role as the leader of Industrial Design.
> Apple also announced that Scott Forstall will be leaving Apple next year and will serve as an advisor to CEO Tim Cook in the interim.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple Newsroom「Apple Announces Changes to Increase Collaboration Across Hardware, Software & Services」（2012-10-29）
- URL: https://www.apple.com/newsroom/2012/10/29Apple-Announces-Changes-to-Increase-Collaboration-Across-Hardware-Software-Services/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 人事の目的は encourage even more collaboration between the Company’s world-class hardware, software and services teams。退社の理由とデザインの方針への言及は無い。

### S170 Austin Carr「Will Apple's Tacky Software-Design Philosophy Cause A Revolt?」（Fast Company、2012-09-11）

> “iCal’s leather-stitching was literally based on a texture in his Gulfstream jet,” says the former senior UI designer.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Austin Carr「Will Apple's Tacky Software-Design Philosophy Cause A Revolt?」（Fast Company）, 2012-09-11
- URL: https://web.archive.org/web/20181016214052/http://www.fastcompany.com/1670760/will-apples-tacky-software-design-philosophy-cause-a-revolt
- 取得日: 2026-11-15
- 検証区分: R（記者が匿名の情報源の話を伝えたもの。1 本の記事だけの主張）
- 備考: 引用中の his は Jobs を指す。

### S171 Farhad Manjoo（Slate、2012-11-01）

> In the wake of the shake-up—which reportedly had to do with Forstall’s refusal to sign a public apology for Apple’s troubled Maps app—a strange, one-dimensional narrative has overrun the tech industry.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Farhad Manjoo（Slate）, 2012-11-01
- URL: https://www.slate.com/articles/technology/technology/2012/11/scott_forstall_fired_skeumorphism_the_design_concept_that_s_tearing_apple.html
- 取得日: 2026-11-15
- 検証区分: C（論評。退任の理由は reportedly の伝聞）

### S172 David Pogue「Apple's 5 Worst Attempts at Digital Realism」（Scientific American、2013-02-01）

> Find My Friends has no analog in the physical world, so the faux leather is just bizarre.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: David Pogue「Apple's 5 Worst Attempts at Digital Realism」（Scientific American）, 2013-02-01
- URL: https://www.scientificamerican.com/article/pogue-apples-5-worst-attempts-at-digital-realism/
- 取得日: 2026-11-15
- 検証区分: C

### S173 apple.com「iOS 7 - Design」（Wayback の 2013-09-04 の保存コピー）

> Ultimately, redesigning the way it works led us to redesign the way it looks.
> And iOS 7 lets you work in ways that are instantly familiar, so there’s no need to relearn everything.
> Conspicuous ornamentation has been stripped away.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: apple.com「iOS 7 - Design」（Wayback の保存コピー）, 保存は 2013-09-04
- URL: https://web.archive.org/web/20130904020014/http://www.apple.com/ios/ios7/design/
- 取得日: 2026-11-15
- 検証区分: A（Apple のページの保存コピー。無署名）
- 備考: 同じページに「Conspicuous ornamentation has been stripped away.」がある。誰の言葉かは書かれていない。

### S174 Apple『iOS Human Interface Guidelines』「Designing for iOS 7」（Wayback の 2013-10-28 の保存コピー）

> Deference. The UI helps users understand and interact with the content, but never competes with it.
> Reconsider visual indicators of physicality and realism. Bezels, gradients, and drop shadows sometimes lead to heavier UI elements that can overpower or compete with the content.
> Embrace borderless buttons.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple『iOS Human Interface Guidelines』「Designing for iOS 7」（Wayback の保存コピー）, 保存は 2013-10-28
- URL: https://web.archive.org/web/20131028053351/https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 同じページに Clarity・Depth の文と「Embrace borderless buttons.」がある。2013 年版の Deference の文面は、2018 年の旧 HIG（S44）の文面と違う。

### S175 Marco della Cava（USA Today）、Ive と Federighi へのインタビュー（2013-09-19）

> we understood that people had already become comfortable with touching glass, they didn't need physical buttons, they understood the benefits,
> Before, the shadowing effect we used was a great way to distract from the limitations of the display.
> So there was an incredible liberty in not having to reference the physical world so literally.
> This is the first post-Retina (Display) UI (user interface), with amazing graphics processing thanks to tremendous GPU (graphics processing unit) power growth

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Marco della Cava（USA Today）、Ive と Federighi へのインタビュー, 2013-09-19
- URL: https://web.archive.org/web/20140121020315/http://www.usatoday.com/story/tech/2013/09/19/apple-jony-ive-craig-federighi/2834575/ （原典は 402）
- 取得日: 2026-11-15
- 検証区分: A（署名入りの記事。Wayback の保存コピーで照合）。1 つ目は Ive、2 つ目は Federighi
- 備考: 引用内の括弧は記者の補足。

### S176 Marco della Cava（USA Today、2013-09-19 の同じ記事の地の文）

> The so-called skeuomorphic template established during Jobs' time — where real textures and objects are mimicked, such as the green pool table felt of the Game Center app — was laid to rest in favor of a less fussy look.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Marco della Cava（USA Today、同じ記事の地の文）, 2013-09-19
- URL: https://web.archive.org/web/20140121020315/http://www.usatoday.com/story/tech/2013/09/19/apple-jony-ive-craig-federighi/2834575/ （原典は 402）
- 取得日: 2026-11-15
- 検証区分: R
- 備考: 記者の地の文で、Jobs や Apple の発言ではない。

### S177 Apple Newsroom「Apple Announces OS X Yosemite」（2014-06-02）

> With Yosemite, OS X has been redesigned and refined with a fresh modern look where controls are clearer, smarter and easier to understand, and streamlined toolbars put the focus on your content without compromising functionality.
> Translucent elements reveal additional content in your app window, provide a hint at what’s hidden behind and take on the look of your desktop.
> all engineered to work beautifully with iOS
> an updated system font improves readability

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple Newsroom「Apple Announces OS X Yosemite」（2014-06-02）
- URL: https://www.apple.com/newsroom/2014/06/02Apple-Announces-OS-X-Yosemite/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Federighi の all engineered to work beautifully with iOS も同じ本文。システムフォントは an updated system font improves readability とだけあり、名前は無い。

### S178 Apple（WWDC15 Session 804「Introducing the New System Fonts」）

> San Francisco unifies our platform with a consistent typographic voice and a reading experience.
> these flat sides allow us to have more space between the letters, which means they are more legible when they are smaller.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Apple（WWDC15 Session 804 "Introducing the New System Fonts"、登壇 Antonio Cavedoni）, WWDC15（月日はページに無い）
- URL: https://web.archive.org/web/20191119092456/https://developer.apple.com/videos/play/wwdc2015/804/
- 取得日: 2026-11-15
- 検証区分: A（公式のトランスクリプトの Wayback の保存コピー）
- 備考: 現行ページに本文が無いため保存コピーを使った。月日はページに無い。2 つ目の引用は SF Compact（Watch 用）の字形について。

### S179 Apple（WWDC19 Session 206「Introducing SF Symbols」）

> Symbols are used in a variety of ways, and designing symbols comes with an inherent challenge, which is pairing them nicely with the other essential element of any UI, which is text.
> Now in iOS 13, we redesigned all our symbols.
> They're specified in typographic points, like text.
> This creates a sense of familiarity throughout the user interface.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple（WWDC19 Session 206 "Introducing SF Symbols"）
- URL: https://developer.apple.com/videos/play/wwdc2019/206/
- 取得日: 2026-11-15
- 検証区分: A（公式のトランスクリプト）
- 備考: 同じセッションに「They're specified in typographic points, like text.」と「This creates a sense of familiarity throughout the user interface.」がある。

### S180 Apple Newsroom「Apple introduces macOS Big Sur with a beautiful new design」（2020-06-22）

> The entire experience feels more focused, fresh, and familiar, reducing visual complexity and bringing users’ content front and center.
> Icons in the Dock have been thoughtfully designed to be more consistent with icons across the Apple ecosystem while retaining their Mac personality.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple Newsroom「Apple introduces macOS Big Sur with a beautiful new design」（2020-06-22）
- URL: https://www.apple.com/newsroom/2020/06/apple-introduces-macos-big-sur-with-a-beautiful-new-design/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 見出しは Biggest Design Upgrade Since the Introduction of Mac OS X。

### S181 Andrew Griffin（The Independent、2020-11-13）、Joswiak・Federighi・Ternus へのインタビュー

> We had designed and evolved the look for macOS in a way that felt most comfortable and natural to us, not remotely considering something about touch.
> They all just feel of a family – there's just less cognitive load to the switching process.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Andrew Griffin（The Independent）、Joswiak・Federighi・Ternus へのインタビュー, 2020-11-13
- URL: https://www.independent.co.uk/life-style/gadgets-and-tech/apple-m1-interview-macbook-release-specs-ports-reviews-b1721844.html
- 取得日: 2026-11-15
- 検証区分: A（署名入りの記事）。いずれも Federighi の発言
- 備考: 同じ発言の中に the fact that these devices have large retina displays now がある。大きなボタンは指に向くという指摘は記者の地の文（R）。

### S182 Apple（WWDC20 Session 10104「Adopt the new look of macOS」）

> The great news is that many of these design changes happen automatically.

- 本体掲載: いいえ
- 使用箇所: `references/design-history-eras.md`
- 媒体・日付: Apple（WWDC20 Session 10104 "Adopt the new look of macOS"）
- URL: https://developer.apple.com/videos/play/wwdc2020/10104/
- 取得日: 2026-11-15
- 検証区分: A（公式のトランスクリプト）

### S183 Apple（WWDC23 Session 10072「Principles of spatial design」）

> With so many new possibilities, strike a balance with what's familiar.
> The glass material provides contrast with the world, gives people more awareness of their surroundings, and adapts to different lighting conditions.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple（WWDC23 Session 10072 "Principles of spatial design"、登壇 Nathan Gitter・Amy DeDonato）
- URL: https://developer.apple.com/videos/play/wwdc2023/10072/
- 取得日: 2026-11-15
- 検証区分: A（公式のトランスクリプト）
- 備考: 章立ては Familiar・Human-centered・Dimensional・Immersive・Authentic。

### S184 Apple（WWDC25 Session 219「Meet Liquid Glass」、冒頭）

> It builds on learnings from all the way from the Aqua user interface of Mac OS X, through to the realtime blurs of iOS 7, to the fluidity of iPhone X, the flexibility of the Dynamic Island, and the immersive interface of visionOS.
> Building off these learnings, rather than trying to simply recreate a material from the physical world, Liquid Glass is a new digital meta-material that dynamically bends and shapes light.

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple（WWDC25 Session 219 "Meet Liquid Glass"、冒頭）, WWDC25（既存 S30・S71 と同じセッション）
- URL: https://developer.apple.com/videos/play/wwdc2025/219/
- 取得日: 2026-11-15
- 検証区分: A（公式のトランスクリプト）
- 備考: S30・S71 と同じセッションの追加の引用。

### S185 Apple Newsroom「Apple introduces a delightful and elegant new software design」（2025-06-09）

> For the very first time, the new design extends across platforms — iOS 26, iPadOS 26, macOS Tahoe 26, watchOS 26, and tvOS 26
> Previously configured for rectangular displays, they now fit perfectly concentric with the rounded corners of modern hardware and app windows — establishing greater harmony between hardware, software, and content.
> to establish even more harmony while maintaining the distinct qualities that make each unique.
> A universal design across platforms brings more focus to content and a new level of vitality while maintaining the familiarity of Apple’s software

- 本体掲載: いいえ
- 使用箇所: `references/design-history.md`、`references/design-history-eras.md`
- 媒体・日付: Apple Newsroom「Apple introduces a delightful and elegant new software design」（2025-06-09）
- URL: https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 引用は原文でこの後に注記番号と to establish even more harmony while maintaining the distinct qualities that make each unique. が続く。副題は A universal design across platforms brings more focus to content and a new level of vitality while maintaining the familiarity of Apple’s software。

### S186 Sarah Gibbons（Nielsen Norman Group）

> It is nearly impossible to improve a design without feedback from others. Their input helps you avoid mistakes and thus create higher quality work.

- 本体掲載: いいえ
- 使用箇所: `SKILL.md`（回答スタイル「作る前の進め方と確かめ方」）
- 媒体・日付: Design Critiques: Encourage a Positive Culture to Improve Products（NN/g の記事、2016-10-23）
- URL: https://www.nngroup.com/articles/design-critiques/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 批評の目的についての NN/g の主張（調査機関の自称）。批評が有効であることの根拠ではなく、重視されていることの根拠として使う

### S187 Hikaru Sudo（Goodpatch）

> 目的があいまいなまま進めてしまうと収束が難しくなり、場当たり的なピボットを繰り返して無駄なコストを払うことにもなりかねません。

- 本体掲載: いいえ
- 使用箇所: `SKILL.md`（回答スタイル「作る前の進め方と確かめ方」）
- 媒体・日付: 生成AIが作るプロトタイプは、本当にサービスづくりの近道になるのか？
- URL: https://goodpatch.com/blog/2026-08-ai-prototype
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 目的（誰に・どんな課題・どうなるか）を仮説でも先に言葉にしておくと、収束の判断軸になる、という主張。会社の自称であり、有効性の根拠ではない

## 引用ではない参照（事実の根拠）

- 体制（CEO John Ternus、Executive Chair Tim Cook、VP Human Interface Design Steve Lemay、VP Industrial Design Molly Anderson）。出典: Apple Leadership ページ https://www.apple.com/leadership/ 、https://www.apple.com/leadership/molly-anderson/。取得日: 2026-11-15。区分: A
- Ternus の CEO 就任日（2026-09-01）・発表日（2026-04-20）。出典: 複数の報道が一致（検索結果の要約。Apple Newsroom の本文は未取得）。取得日: 2026-11-15。区分: B
- Alan Dye の Meta 移籍（2025 年末）と Lemay の後任就任。出典: Daring Fireball https://daringfireball.net/linked/2025/12/03/alan-dye-leaves-apple-for-meta 、MacRumors https://www.macrumors.com/2025/12/03/apple-alan-dye-joining-meta/（Bloomberg 報道の引用）。取得日: 2026-11-15。区分: B
- Ive の退社（2019-06-27 発表）と独立。出典: Apple Newsroom https://www.apple.com/newsroom/2019/06/jony-ive-to-form-independent-design-company-with-apple-as-client/。取得日: 2026-11-15。区分: A
- OpenAI が io の買収を発表（2025-05-21。2025-07-09 に io チームの正式統合を追記）。Ive と LoveFrom は独立のまま OpenAI の design を担う。io は Ive が Scott Cannon、Evans Hankey、Tang Tan と 1 年前に設立した。出典: OpenAI https://openai.com/sam-and-jony/（Wayback の保存コピーで確認）。取得日: 2026-11-15。区分: A
- Liquid Glass の発表（2025-06-09）。出典: Apple Newsroom https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/。取得日: 2026-11-15。区分: A
- WWDC26 での Liquid Glass の調整（2026-06-08）。出典: MacRumors https://www.macrumors.com/2026/06/10/how-liquid-glass-is-changing-in-ios-27/（Reduce Transparency・Increase Contrast への適応、透明度スライダー等）。取得日: 2026-11-15。区分: B
- slide to unlock の設計経緯（スポットライトのアニメーション、矢印を退けた理由）。出典: Cult of Mac（Bas Ording の e-book の抜粋）https://web.archive.org/web/2018/https://www.cultofmac.com/490394/iphone-slide-to-unlock-bas-ording/（要約であり逐語引用ではない）。取得日: 2026-11-15。区分: B
- Tog が 1978 年に Apple 初のヒューマンインターフェースを設計、Norman が 1993 年に Apple へ移った。出典: Tog: https://asktog.com/atc/principles-of-interaction-design/ 、Norman: https://jnd.org/apples-products-are-getting-harder-to-use-because-they-ignore-the-principles-of-design/（いずれも本人の自己紹介）。取得日: 2026-11-15。区分: A
- Tog は「全部を常に見せろ」とは主張せず、ジェスチャーをまとめて説明する overlay も認める。出典: asktog.com 同上の "Strive for Balance" の節（Snapseed の例）。取得日: 2026-11-15。区分: A
- Touch Bar の経緯・評価。出典: 検索結果のスニペットのみで本文未取得。discoverability との関連も出典で未確認。SKILL.md では日付・経緯を事実として使わず、本 skill の分析の題材としてのみ扱う。取得日: 2026-11-15。区分: U
- Ive の Apple 入社年（1992 年）。出典: The Telegraph 2012-05-23 は「since 1992」と記す（Wayback の保存コピーで確認）。ID 部門の責任者になった年は Telegraph（1997）と New Yorker（1996 年頃を示唆）で食い違うため、SKILL.md では使わない。取得日: 2026-11-15。区分: A
- Ive は新旧製品を並べて比較する・最初の物を作る瞬間に議論が広がる。出典: The Telegraph 第 2 部（Ive）、New Yorker 2015 の Hankey の発言（"if it just feels really old and kind of stodgy, and the new one feels just amazing."）。取得日: 2026-11-15。区分: A

## 未検証・伝聞（SKILL.md では事実・引用として使わない）

| 項目 | 状況 |
|------|------|
| "Make it lickable"（Jobs とされる） | New Yorker 2015 が「According to Ive, Jobs said」として記述。iMac G3 への Jobs の寄与は諸説あると同誌自身が書く。伝聞 |
| 「10 → 3 → 1」、pixel-perfect なモックアップ、ペアのデザイン会議 | Apple のエンジニアリングマネージャー Michael Lopp の SXSW 2008 登壇 → BusinessWeek → MacRumors（2008-03-13）の二次報道。Jobs・Ive・Apple 公式の発言ではない。2008 年のソフトウェア設計に関する個人の登壇で、Industrial Design Studio の運営とは別 |
| 「週次のデザインレビュー」「Ive チームの週次レビュー」「Tuesday のデザインレビュー」等の曜日・頻度付きの運営ルーチン | 出所自体を確認できなかった。2008 年の登壇の報道（MacRumors）の記述に無く、書籍要約の断片が検索に出るのみで裏付けなし。上の 10→3→1 の行とは別の扱い |
| "saying no to 1,000 things" | BusinessWeek 2004-10-12 のリード文（編集者の地の文で Jobs の直接引用ではない）。直接引用として流通する文の本文は未取得 |
| "Focus is about saying, No."（WWDC 1997 の質疑） | TechCrunch（2011-10-06）の書き起こしに二次逐語あり。動画の一次は未視聴。「100 の他のよいアイデアに No と言う」という広く流通する版は一次に辿れていない |
| Hierarchy / Harmony / Consistency の 3 語セット | 取得範囲（現行 HIG 32 ページ・WWDC25 219 と 356・Apple Newsroom の Liquid Glass 発表）に 3 原則としての提示が無い。サードパーティ記事の整理と思われるが、未取得のページに存在する可能性は排除できない |
| Ive の "It's very easy to be different, but very difficult to be better." | 一次出典を確認できず。確認できた最も近い表現は New Yorker 2015 の "developed to be different, not better" だが、他社製品の特徴を述べた文脈で、Ive 自身の信条の表明ではない |
| Ive の "When something exceeds your ability to understand how it works, it sort of becomes magical." | 出典なしで流通。2018 年の iPad 関連の動画に由来する可能性を示す検索結果はあったが、原文を確認できていない |
| "Simplicity is the ultimate sophistication" の Jobs 帰属 | 確認できた最古の出典は 1977 年の Apple II ブローシャ（無署名）。Jobs 本人の発言であることは確認できなかった |
| Jobs の "If I had a spiritual partner at Apple, it's Jony." | New Yorker 2015 が引用。Isaacson の伝記経由の孫引きで、原発言は未確認 |
| Ive の Financial Times 2025-06 のインタビュー発言 | MacRumors 経由の孫引き。FT 原文は paywall で未確認 |
| Touch Bar に関する Schiller の発言、Touch Bar の経緯・評価、Touch Bar と discoverability の関係 | スニペットのみで本文未取得。関連づけは出典で確認できていない。SKILL.md では事実として使わない |
| rubber banding が Jobs を説得したという主張 | 検索スニペットのみ |
| Dynamic Island に関する Federighi・Dye の引用（"a new life-saving identity" 等） | MacRumors の要約で、機械翻訳由来とみられ意味が通らない。元インタビュー（AXIS 誌とされる）の英語原文は未確認 |
| Rams による Ive 期以降の Apple 製品の評 | 2011 年の Telegraph 寄稿以外の一次発言は見つからなかった（CNN や Fast Company 経由の伝聞は未検証） |
| Norman & Tognazzini（2015）の「5 つの原則が欠落」等の細部 | Fast Company 本体は取得できず、細部は 9to5Mac・Fortune 経由の要約のみ。主張の核（discoverability・feedback・recovery）は Wayback の保存コピーと Norman 本人サイトで確認済み |
| 低解像度だから質感表現（スキューモーフィズム）になった | この因果を述べた出典は取得できなかった。NN/g は頂点を 2010 年代初めとし、質感表現は描画処理を多く要したと書く。Federighi の 2013 年の振り返りは、因果の一部を認めたものと読めるが、始めた時点の理由ではない |
| iOS 7 が Web のフラット化を広めた | iOS 7 を原因とする出典は無い。NN/g が普及に影響したと挙げるのは Metro と Windows 8。iOS 7 の発表文に flat という語は無い |
| Jobs の書簡（Thoughts on Flash）が Flash の終わりを早めた | Adobe は標準の成熟を理由に挙げ、書簡に触れていない |
| Forstall の退任が iOS 7 のフラット化の原因 | Apple の発表は人事の事実だけで、理由も方針も述べない。退任と Maps の謝罪文の関係は、Slate が伝聞として書くだけ。報道の範囲にとどめる |
| 質感表現は Jobs の好み・Forstall の推進による。iCal の革は Jobs の専用機の内装に基づく | 匿名の 1 人の証言を 1 本の記事が伝えたもので、確認できていない。時代別の節の (b) には、R（記者が匿名の情報源の話を伝えたもの）として載せている |
| Müller-Brockmann の "The grid system is an aid, not a guarantee."、Ruder の "Typography has one plain duty before it and that is to convey information in writing."、Tufte の "Above all else show the data." とされる有名な一節 | 取得した本文（抜粋・転載）に無い。名言サイトやブログ経由で、原書の該当ページは未取得 |
| Vignelli の NYC 路線図は地理と合わず混乱を招いたため置き換えられた | 広く流通する説明だが、同館は置き換えの理由を一般的な言い方でしか書かない。一次資料は未取得 |
| Bauhaus 1923 年展の標語。Bayer の Universal を 1925 年に Gropius が依頼した | 検索結果の要約のみ。V&A の記録は試し刷りを 1926 年（推定）とし、依頼の経緯は書かない |
| Web 2.0 の見た目は光沢・グラデーション・反射だった | O'Reilly の原論文（取得した 1 ページ目）は、プラットフォームとビジネスの型を扱い、見た目の様式を定義していない |
| Siegel が spacer GIF の考案者で、1996 年の著書が最初の公表 | 検索結果の要約と Wikipedia のみ。1997 年の本人のページが示すのは、本人が使い、勧めていたことだけ |
| Snow White の名の由来、1984〜1990 年の全製品への適用、Jobs の "That's it!" | 一次資料なし。German Design Council の台詞は記者の再話 |
| Copland は Mac OS 8 の開発名で、1996 年に中止された。Platinum は Copland から引き継がれた | 検索結果の要約のみ。1996 年の Mac OS 8 の草案が Copland と同じ計画かも未確認 |
| System 7 の発売年、Apple IIc の発売年、brushed metal の初出、Leopard の出荷日、Flash の登場年、Windows 8 の発売年 | 一次資料を取得していない。本書は年を書いていない |
| Jobs の NeXT ロゴの報酬額（10 万ドル）と、複数案を求めて断られた逸話 | 検索結果の要約とブログのみ |
| 初代 Zune の UI が Metro の設計言語だった。デザインシステムが製品の個性を薄めた | 前者は Microsoft の記事が着想の共通性を述べるだけ。後者は一次の出典を取得していない |
| "lick" の基調講演（Macworld 2000）での帰属 | 確認できたのは、Jobs が Fortune の記者に語った言葉（2000-01-24、Schlender の署名記事。S163）。基調講演の書き起こしは未取得。TidBITS の記述は記者の地の文で、逐語ではない |
| Ive の "True simplicity…" の iOS 7 紹介ビデオでの帰属と、ピリオドで切る形 | 確認できたのは、Apple Newsroom のプレスリリース（2013-06-10）に Ive の発言として載った文（em ダッシュでつながる形。S116）。ビデオの書き起こしは未取得 |

## 調査の限界

- Liquid Glass で discoverability をどう担保するかについて、Apple 側の明示的な説明は取得範囲に存在しない。語られていないのか、取得できていないのかは区別できない
- 取得した WWDC のデザイン系セッションは 2017/802、2018/803、2020/10175、2023/10158、2025/219 と 356、2026/250 と 251 のみ。Apple Design Awards は部門説明のみで、審査要項は未取得
- 現行 HIG の Materials・Gestures など一部ページのみ取得。HIG 全体に Clarity / Deference / Depth が無いとは断言できない（取得した 32 ページには無かった）
- Industrial Design Studio の運営・ロック画面の設計意図・店頭での Apple Pay の物理操作に関する一次資料は未取得
- Ive 期の主要製品（MacBook Air・初代 iPhone・iPod）について、Ive 本人が製品ごとの設計判断を語った一次文書は限られる
- NYT・Stanford News・Fast Company・BusinessWeek・CNN Money・Telegraph・New Yorker は直接取得できず、Wayback または再掲載で代替した。保存時点の改変の可能性は排除していない

### examples/ の作成時に確認した限界（2026-11-15）

- スライド: Apple 公式のスライドデザイン原則は、確認できる範囲では見つからなかった。Keynote User Guide for Mac の目次ページ（https://support.apple.com/guide/keynote/toc/）の本文に、tips・best practice・guideline・principle・legibility・contrast・design の語は一致せず、目次は操作手順の見出し（スライドの追加・並べ替え・レイアウトの適用・テーマの変更など）だった。個別ページ全件は読んでいないので、「存在しない」とは言えない。`examples/slides-presentation.md` は、アプリ画面向けの HIG の原則を転用した本 skill の整理であり、Apple がスライドについて述べたことではない
- Apple イベントの基調講演のスライドの特徴について、Apple 関係者・Jobs 本人が一次の場で語った発言は確認できなかった。書籍・ブログ・名言サイト経由の孫引きは採用していない
- HIG の Motion のページ全文に、UI アニメーションの所要時間（秒・ms）の推奨値は無い。WWDC23 Session 10158 にも duration の具体値は無い。`examples/` の秒数はすべて本 skill の目安（出典なし）である
- HIG の Layout のページ本文に、iOS・iPadOS のマージンの pt 値は無かった。変更履歴には iPhone 17 などの specifications の追加が記録されているが、その仕様表は取得した本文データに含まれていなかった
- システムカラーの RGB 値は表が本文データから取れず、HIG 自身も値のハードコードを避けるよう述べる。examples の色は本 skill の目安（出典なし）で、コントラスト比は WCAG の式で本 skill が計算した
- HIG の Patterns・Foundations の目次に、ダッシュボードと Empty states を扱うページは見つからなかった。「指標は何個まで」といった具体数も無い。`examples/business-dashboard.md` と `examples/app-empty-and-error-states.md` は、Charts・Charting data・Writing・Layout・Typography を転用した本 skill の整理である
- ハードウェア UI（物理ボタン・本体ディスプレイ）の HIG は未調査。`examples/hardware-ui.md` は、画面付き製品（watchOS など）の HIG の数値を目安として転用し、公開された発言の考え方を添えた本 skill の整理である
- SF Pro の現行ライセンス（ダウンロードに同梱される版）は未確認。取得できたのは Fonts のページに埋め込まれた旧版の文面（S76）のみで、Web への配信可否は法務の確認事項。現行の推奨フォントスタック（system-ui, -apple-system, ... の並び）を示す Apple 公式の文書は確認できていない（S74、S75）
- 日本語環境（CJK）向けの Apple の文字サイズ・字間の公式指針は確認できていない。HIG の表は欧文を前提とする。SF Pro の tracking の値は、examples では使っていない
- WWDC のモーション系・デザイン系セッションは、取得済みのものを除き未取得（WWDC24 以前と WWDC26 の他のデザイン系セッションなど）
- HIG の数値（44 pt など）は iOS 向けで、Web（CSS px）・印刷物・スライドへそのまま適用できるとは原文は述べていない。examples では、換算した値を「本 skill の目安」と区別している
- HIG は Apple が随時改訂する。S51 以降の引用は 2026-11-15 時点である

### design-history.md・design-history-eras.md の作成時に確認した限界（2026-11-15）

- 取得できなかった一次の書籍: 『Die neue Typographie』『Grid Systems in Graphic Design』『Typographie』『The Visual Display of Quantitative Information』の本文は取得していない。引用は抜粋・転載・著者本人の別媒体の文章による（S79 以降の備考に区分を記した）
- 英訳の引用（Gropius・Tschichold・Müller-Brockmann・Ruder・Aicher）は、原文との対応を確認していない
- 1984 年当時の Apple の一次資料（プレスリリース・マニュアル）は取得しておらず、初代 Macintosh の仕様は後年の Apple のサポートページによる。1987・1992・1997・2000・2004・2008・2010 年の HIG は Internet Archive の OCR 全文で照合した。OCR の誤りがありうる
- Snow White と brushed metal の廃止の理由は、Apple 自身が述べた文書を取得できていない。この文書は、取得できなかった理由を推測で埋めていない。1987・1992・1997・2000 年の HIG・発表資料は取得し、(a) に引いた
- Müller-Brockmann『Grid Systems in Graphic Design』の 1981 年は転載の注記による。別の資料は 1968 年の Niggli 版を掲げており、版年の食い違いは解決していない。Niggli の公式ページは取得できなかった
- Apple の iOS 7 の基調講演と「Designed by Apple」の動画の書き起こし、iOS 7 の HIG の PDF（2013 年版）は取得していない（2013 年 10 月の Web 版の保存コピーは取得した）
- NN/g の実験（S126）は 2017 年のデスクトップの Web での結果で、モバイル・タッチ・空間 UI には直接当てはまらない
- 現行の Material（m3.material.io）・Fluent 2・Atlassian のサイトは JavaScript で描くページで、本文を取得できなかった。Material は 2014 年版の保存コピーで代えた
- 日本の印刷・タイポグラフィ（縦組み・和文の版面）の系譜は扱っていない

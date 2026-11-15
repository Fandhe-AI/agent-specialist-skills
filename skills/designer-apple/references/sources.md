# designer-apple 出典台帳

`SKILL.md` と `examples/` が根拠とした出典の台帳。引用原文（英語・逐語）・発言者・媒体・日付・URL・取得日・検証区分を記す。S01 から S50 は `SKILL.md` 本体の根拠、S51 以降は `examples/` の具体例と `SKILL.md` の「制作時の指針」の根拠である。

## 凡例

- 検証区分
  - A: 原典・公式ページ・公式セッションのトランスクリプト・原典の保存コピー（Wayback Machine）・記者署名記事の本文を取得し、引用文が逐語で含まれることを機械的に照合した。口頭発言を媒体が文字にしたものは、その書き起こしの精度に依存する
  - B: 第三者の書き起こし、または他媒体経由の引用（原典との照合なし）。本人の発言である可能性は高いが、書き起こし・転載の誤りは排除できない
  - C: 批判・論評側の主張。引用が逐語であることのみを確認し、主張の因果は確認していない
  - R: 記者・第三者の地の文。発言者本人の発言ではない（本人発言として引用しない）
  - U: 未検証（末尾の一覧）。事実・引用として使わない
- 「本体掲載」は、`SKILL.md` 本体に英語原文のまま引用した項目。それ以外の項目は、本体では要旨（日本語）としてのみ使った根拠である
- 「使用箇所」（S51 以降）は、その出典の値・引用を使った `examples/` のファイルと `SKILL.md` の箇所。ファイル内の S 番号の記載から機械的に集計した
- S51 以降の HIG の本文は、Apple が提供する各ページの本文データ（JSON 版）を取得して照合した。WWDC の引用は公式トランスクリプトの本文との照合で、トランスクリプトの時刻は約 1 分単位の近似のため台帳には記載しない
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
- 備考: signifier についての Norman 本人の定義の逐語は取得できていない。SKILL.md 本体の signifier の説明は本 skill の言葉

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
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/app-empty-and-error-states.md`、`examples/app-onboarding.md`、`examples/app-settings.md`、`examples/business-dashboard.md`、`examples/hardware-ui.md`、`examples/motion-and-animation.md`、`examples/slides-presentation.md`、`examples/web-landing-page.md`、SKILL.md（制作時の指針）
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
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/app-settings.md`、`examples/business-dashboard.md`、`examples/hardware-ui.md`、`examples/web-landing-page.md`、SKILL.md（制作時の指針）
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
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/app-empty-and-error-states.md`、`examples/app-onboarding.md`、`examples/app-settings.md`、`examples/business-dashboard.md`、`examples/hardware-ui.md`、`examples/slides-presentation.md`、`examples/web-landing-page.md`、SKILL.md（制作時の指針）
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
- 使用箇所: `examples/business-dashboard.md`、`examples/slides-presentation.md`、SKILL.md（制作時の指針）
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
- 使用箇所: `examples/web-landing-page.md`、SKILL.md（制作時の指針）
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
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/app-empty-and-error-states.md`、`examples/app-onboarding.md`、`examples/app-settings.md`、`examples/business-dashboard.md`、`examples/hardware-ui.md`、`examples/motion-and-animation.md`、`examples/slides-presentation.md`、`examples/web-landing-page.md`、SKILL.md（制作時の指針）
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
- 使用箇所: `examples/anti-pattern-apple-look.md`、`examples/motion-and-animation.md`、`examples/web-landing-page.md`、SKILL.md（制作時の指針）
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
- 使用箇所: `examples/slides-presentation.md`、`examples/web-landing-page.md`、SKILL.md（制作時の指針）
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
| Aqua について "lick" 系の発言（Jobs とされる） | Fortune 2000-01-24 の取得本文に該当文なし。Macworld 2000 基調講演とする二次情報はあるが、一次の書き起こしは未確認 |
| "Make it lickable"（Jobs とされる） | New Yorker 2015 が「According to Ive, Jobs said」として記述。iMac G3 への Jobs の寄与は諸説あると同誌自身が書く。伝聞 |
| 「10 → 3 → 1」、pixel-perfect なモックアップ、ペアのデザイン会議 | Apple のエンジニアリングマネージャー Michael Lopp の SXSW 2008 登壇 → BusinessWeek → MacRumors（2008-03-13）の二次報道。Jobs・Ive・Apple 公式の発言ではない。2008 年のソフトウェア設計に関する個人の登壇で、Industrial Design Studio の運営とは別 |
| 「週次のデザインレビュー」「Ive チームの週次レビュー」「Tuesday のデザインレビュー」等の曜日・頻度付きの運営ルーチン | 出所自体を確認できなかった。2008 年の登壇の報道（MacRumors）の記述に無く、書籍要約の断片が検索に出るのみで裏付けなし。上の 10→3→1 の行とは別の扱い |
| "saying no to 1,000 things" | BusinessWeek 2004-10-12 のリード文（編集者の地の文で Jobs の直接引用ではない）。直接引用として流通する文の本文は未取得 |
| "Focus is about saying, No."（WWDC 1997 の質疑） | TechCrunch（2011-10-06）の書き起こしに二次逐語あり。動画の一次は未視聴。「100 の他のよいアイデアに No と言う」という広く流通する版は一次に辿れていない |
| Hierarchy / Harmony / Consistency の 3 語セット | 取得範囲（現行 HIG 32 ページ・WWDC25 219 と 356・Apple Newsroom の Liquid Glass 発表）に 3 原則としての提示が無い。サードパーティ記事の整理と思われるが、未取得のページに存在する可能性は排除できない |
| Ive の "It's very easy to be different, but very difficult to be better." | 一次出典を確認できず。確認できた最も近い表現は New Yorker 2015 の "developed to be different, not better" だが、他社製品の特徴を述べた文脈で、Ive 自身の信条の表明ではない |
| Ive の "When something exceeds your ability to understand how it works, it sort of becomes magical." | 出典なしで流通。2018 年の iPad 関連の動画に由来する可能性を示す検索結果はあったが、原文を確認できていない |
| Ive の "True simplicity is derived from so much more than just the absence of clutter and ornamentation. It's about bringing order to complexity." | WWDC13 の iOS 7 紹介ビデオとされるが、名言集（Wikiquote）経由で一次未確認 |
| "Simplicity is the ultimate sophistication" の Jobs 帰属 | 確認できた最古の出典は 1977 年の Apple II ブローシャ（無署名）。Jobs 本人の発言であることは確認できなかった |
| Jobs の "If I had a spiritual partner at Apple, it's Jony." | New Yorker 2015 が引用。Isaacson の伝記経由の孫引きで、原発言は未確認 |
| Ive の Financial Times 2025-06 のインタビュー発言 | MacRumors 経由の孫引き。FT 原文は paywall で未確認 |
| Touch Bar に関する Schiller の発言、Touch Bar の経緯・評価、Touch Bar と discoverability の関係 | スニペットのみで本文未取得。関連づけは出典で確認できていない。SKILL.md では事実として使わない |
| rubber banding が Jobs を説得したという主張 | 検索スニペットのみ |
| Dynamic Island に関する Federighi・Dye の引用（"a new life-saving identity" 等） | MacRumors の要約で、機械翻訳由来とみられ意味が通らない。元インタビュー（AXIS 誌とされる）の英語原文は未確認 |
| Rams による Ive 期以降の Apple 製品の評 | 2011 年の Telegraph 寄稿以外の一次発言は見つからなかった（CNN や Fast Company 経由の伝聞は未検証） |
| Norman & Tognazzini（2015）の「5 つの原則が欠落」等の細部 | Fast Company 本体は取得できず、細部は 9to5Mac・Fortune 経由の要約のみ。主張の核（discoverability・feedback・recovery）は Wayback の保存コピーと Norman 本人サイトで確認済み |

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

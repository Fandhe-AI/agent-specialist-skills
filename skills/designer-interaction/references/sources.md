# designer-interaction 出典台帳

`SKILL.md`・`examples/`・`design-history.md` が根拠とした出典の台帳。引用原文（原語・逐語）・発言者・媒体・日付・URL・取得日・検証区分を記す。S01 から S149 は動き・応答時間・状態・キーボード・AI の応答・動きを減らす設定・Web 標準・デザイン史の根拠、S150 以降は作り方の進め方（方向性の決め方・絞り方・批評・引き渡し）の根拠である。番号は振り直さない。本文からは番号で参照する。時代ごとの背景は `design-history.md`、制作の具体例は `examples/` にある。

## 凡例

- 検証区分
  - A: 原典・公式ページ・規格・公式ドキュメント・著者や企業の自社サイト・公開 PDF の本文を取得し、引用文が逐語で含まれることを機械的に照合した。自社サイト（Linear・Superhuman・Raycast・Vercel・Google など）の記述は、引用が逐語であることと、発言主体がその会社であることまでを確認したもので、内容の正しさ（速い・効果がある等）は確認していない。備考に「自称」と書いた。PDF と OCR はテキスト化の誤りがありうる
  - B: 第三者の転載・翻訳、または他媒体経由の引用（原典との照合なし）。本人の発言である可能性は高いが、引用元や翻訳の誤りは排除できない。本人の発言として英語逐語で示さず、区分を明記した要旨にする
  - C: 批判・論評側の主張。引用が逐語であることのみを確認し、主張の因果は確認していない。本人の発言として英語逐語で示さず、区分を明記した要旨にする
  - R: 記者・機関・サイトの地の文。発言者本人の発言ではない（本人発言として引用しない）
  - U: 未検証（末尾の一覧）。事実・引用として使わない
- 照合の方法（A の全件）
  - 取得した本文（HTML は script・style・コメント・タグを除去し、HTML 実体参照を復号し、空白を 1 つに正規化したテキスト。PDF はテキストに変換したもの）に、引用文が逐語で含まれることを文字列の一致で確かめた。台帳の引用文は、取得したテキストから切り出した（手で打ち直していない）。作成後に全件を新規に再取得して再照合した（結果は末尾の「調査の限界」）
  - アポストロフィ・引用符・ダッシュは原文のまま。ページの装飾（太字・リンク・コード書式）は、文字として残らない。Apple の HIG は Apple が各ページに提供する本文データ（JSON）で、Material のトークンは Material Web のリポジトリの生成ファイル（SCSS）で照合した。Viget と Apple の「Thoughts on Flash」は、元の URL が直接取得できなかった（または 404 だった）ため、Wayback Machine の保存コピーの本文で照合した
  - JavaScript で描くページ（m3.material.io の本文・m2.material.io）と Apple のサポートの一部のページは、本文を取得できず、引用していない
- 日本語の訳・要旨は本 skill の言葉であり、発言者本人の発言ではない
- 数値（ms・px・比率・人数・年）は、区分 A の引用ブロックに逐語で含まれるものだけを「出典あり」として使う。備考にしか無い値は、S 番号を付けて事実として書かない。それ以外は「目安（出典なし）」と分けて書く。Web 標準の対応状況・規格の版の状態は時点情報で、取得日（2026-11-15）のページの記載に限る
- 取得日は、出典ごとに最後に本文を確認した日（すべて 2026-11-15）。記述は 2026-11-15 時点
- S150 以降のうち「自称」と備考に書いたものは、組織・個人が自分たちの進め方を自分で述べたもので、成果や有効性の第三者による検証ではない。「X を重視すると言っている」の根拠にはなるが、「X が有効だ」の根拠にはならない

## 帰属上の注意

- Nielsen の「0.1・1・10 秒」は、Nielsen 自身が Miller 1968 と Card ら 1991 から続く助言として述べている（S04）。Nielsen の実験結果として書かない。「Doherty の 400 ms」は、取得できた IBM の報告の本文には無く、第三者の要約（Dave Rupert・Laws of UX）にある値である。Rupert は図（the chart）を根拠とするが、図の出所は確認できていない（未検証・伝聞）
- 自社の主張（Linear・Superhuman・Raycast・Vercel・Google）は、区分 A でも「自称」である。「速い」「感触が良い」を事実として書かない。performance.dev の Linear の分析（R）は第三者の推測で、Linear の発言ではない
- Emil Kowalski・Rauno Freiberg・Jakub Krehel の記事は、個人の経験則・観察である。Rauno は自分の記事を「指針集ではない」と書く。数値（0.97・0.9 以上・300 ms）は経験則で、実験で検証された値ではない。記事のデモ部品の文言（"Great design is invisible…" など）は著者の主張ではないので引用しない。Emil の "You should never animate them"（キーボード起点の操作）は強い個人の主張で、Apple の HIG（頻繁な操作の動きを避ける）より強い。両者を混ぜない
- Material のトークン（S27・S28・S29・S147）は Material Web の生成ファイル（v0.192・Platform: Web）で、Material 3 の仕様書の本文ではない。m3.material.io の本文は取得できていない
- Apple の HIG の Motion のページには、所要時間（秒・ms）の推奨値が無い。Apple の動きの数値を HIG の値として書かない（designer-apple の台帳も同じ限界を記す）
- 「prefers-reduced-motion」の規格（Media Queries Level 5）は Working Draft の版の記載（2026-02-19）で、MDN は全ブラウザーの対応を 2020 年 1 月からとする。WCAG 2.2 は 2024-12-12 の W3C 勧告。2.2.2 はレベル A、2.3.1 はレベル A、2.3.3 はレベル AAA、2.1.1 はレベル A、2.5.8 と 4.1.3 はレベル AA。WCAG のコントラスト基準（4.5:1・3:1）の原文は本台帳に無い（未照合）
- 区分 R の NN/g の記述（Saffer の書籍の刊行年）は、書籍の本文の照合ではない。Saffer の書籍の要旨は「引用ではない参照」に書籍・未照合として置いた
- Lasseter（1987）は 3D コンピューターアニメーション、Chang & Ungar（1993）は Self という研究用の UI での試みである。ディズニーの 12 原則を UI に「転用した」のは、後者の著者の記述であって、業界の標準を示すものではない。12 原則という数の根拠は、取得した本文で確認していない（未検証・伝聞）
- freee のガイドラインは CC BY 4.0、デジタル庁デザインシステムはサイトの利用条件による（引用は 1〜2 文）。Laws of UX は © Jon Yablonski で、ライセンスの全文は確認していない（引用は 1 文）
- S150 以降の進め方の出典は、組織・個人の自己説明が中心である。Natasha Jen（S165）と Don Norman（S166）は、デザイン思考という進め方の型への批判で、批判の対象（概念・売り方・教育への導入）はそれぞれ違う。Norman の S166 は、前の稿の結論を本人が改めた文章である。まとめて「型は無効」とは書かない
- Goodpatch の S157・S164 は 2026 年の生成 AI 時代の議論で、プロトタイプが速くなる前提の文脈である


## 引用の台帳

### S01 Jakob Nielsen

> 0.1 second is about the limit for having the user feel that the system is reacting instantaneously, meaning that no special feedback is necessary except to display the result.

- 媒体・日付: Nielsen Norman Group「Response Times: The 3 Important Limits」（掲載日 1993-01-01。1993 年の著書 Usability Engineering 第 5 章の抜粋）
- URL: https://www.nngroup.com/articles/response-times-3-important-limits/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 0.1 秒の限界。Nielsen は直前の文で、この助言を Miller 1968・Card ら 1991 から続くものとして述べる。Nielsen 自身の実験結果ではない

### S02 Jakob Nielsen

> 1.0 second is about the limit for the user's flow of thought to stay uninterrupted, even though the user will notice the delay. Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second, but the user does lose the feeling of operating directly on the data.

- 媒体・日付: Nielsen Norman Group「Response Times: The 3 Important Limits」（掲載日 1993-01-01。1993 年の著書 Usability Engineering 第 5 章の抜粋）
- URL: https://www.nngroup.com/articles/response-times-3-important-limits/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 1 秒の限界。0.1 秒を超えると「データを直接操作している感覚」が失われる

### S03 Jakob Nielsen

> 10 seconds is about the limit for keeping the user's attention focused on the dialogue. For longer delays, users will want to perform other tasks while waiting for the computer to finish, so they should be given feedback indicating when the computer expects to be done.

- 媒体・日付: Nielsen Norman Group「Response Times: The 3 Important Limits」（掲載日 1993-01-01。1993 年の著書 Usability Engineering 第 5 章の抜粋）
- URL: https://www.nngroup.com/articles/response-times-3-important-limits/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 10 秒の限界。これを超える待ちには終了見込みのフィードバックを出す

### S04 Jakob Nielsen

> The basic advice regarding response times has been about the same for thirty years [Miller 1968; Card et al. 1991]:

- 媒体・日付: Nielsen Norman Group「Response Times: The 3 Important Limits」（掲載日 1993-01-01。1993 年の著書 Usability Engineering 第 5 章の抜粋）
- URL: https://www.nngroup.com/articles/response-times-3-important-limits/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 3 つの限界の出自（Miller 1968・Card ら 1991）を Nielsen 自身が明記している箇所。「Nielsen の 3 つの限界」を新発見のように書かない根拠

### S05 Jakob Nielsen

> animations, to be timed according to a real-time clock rather than being timed as an indirect effect of the computer's execution speed

- 媒体・日付: Nielsen Norman Group「Response Times: The 3 Important Limits」（掲載日 1993-01-01。1993 年の著書 Usability Engineering 第 5 章の抜粋）
- URL: https://www.nngroup.com/articles/response-times-3-important-limits/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: アニメーションは実時間の時計で計り、機種の速さに依存させない、という 1993 年の助言。固定フレーム数でなく時間で指定する根拠

### S06 Jakob Nielsen

> putting one up would violate the principle of display inertia (flashing changes on the screen so rapidly that the user cannot keep pace or feels stressed).

- 媒体・日付: Nielsen Norman Group「Response Times: The 3 Important Limits」（掲載日 1993-01-01。1993 年の著書 Usability Engineering 第 5 章の抜粋）（Web 版で追加された注）
- URL: https://www.nngroup.com/articles/response-times-3-important-limits/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2〜10 秒の処理に大げさな進捗表示を出すと、速すぎる画面変化でかえって負担になる（display inertia）。スケルトンやスピナーの出し過ぎへの警告に使える

### S07 Jakob Nielsen

> 0.1 second is the response time limit if you want users to feel like their actions are directly causing something to happen on the screen

- 媒体・日付: Nielsen Norman Group「Powers of 10: Time Scales in User Experience」2009-10-04
- URL: https://www.nngroup.com/articles/powers-of-10-time-scales-in-ux/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 0.1 秒を「自分の操作が画面を動かしている」錯覚（直接操作）の限界として説明する。メニューの展開の例つき

### S08 Jakob Nielsen

> new pages must display within 1 second for users to feel like they're navigating freely; any slower and they feel held back by the computer and don't click as readily.

- 媒体・日付: Nielsen Norman Group「Powers of 10: Time Scales in User Experience」2009-10-04
- URL: https://www.nngroup.com/articles/powers-of-10-time-scales-in-ux/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Web の画面遷移は 1 秒以内が目標。遅いと利用者は押しにくくなる、という Nielsen の見解（ページ遷移の演出の長さの上限に使う）

### S09 IBM（Doherty・Thadhani）

> psychologists such as Robert B Miller, then of IBM 's Poughkeepsie laboratory, argued that two seconds was the longest a person should wait for a response from the computer

- 媒体・日付: IBM「The Economic Value of Rapid Response Time」（Walter J. Doherty・Arvind J. Thadhani、1982。Computer History Museum 所蔵の OCR 走査 PDF）
- URL: https://archive.computerhistory.org/resources/access/text/2024/03/102751398-05-01-acc.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 1982 年の IBM の報告が、Miller らの「2 秒が上限」を従来の通説として紹介する。OCR のため綴りや空白に崩れがある（本引用の範囲は読める）

### S10 IBM（Doherty・Thadhani）

> Thadhani found that a programmer executes about 180 transactions per hour.

- 媒体・日付: IBM「The Economic Value of Rapid Response Time」（Walter J. Doherty・Arvind J. Thadhani、1982。Computer History Museum 所蔵の OCR 走査 PDF）
- URL: https://archive.computerhistory.org/resources/access/text/2024/03/102751398-05-01-acc.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 応答 3 秒で 1 時間に約 180 件。続く本文は 0.3 秒で 371 件（106 % 増）と述べる。数値は 1980 年代の端末でのプログラマの作業の結果で、現在の画面操作へそのまま当てはめない

### S11 IBM（Doherty・Thadhani）

> With subsecond system response, the average programmer produced 14.4 function points per month, 58 percent more output than the 9.1 function points per month the average programmer had produced on the earlier project.

- 媒体・日付: IBM「The Economic Value of Rapid Response Time」（Walter J. Doherty・Arvind J. Thadhani、1982。Computer History Museum 所蔵の OCR 走査 PDF）
- URL: https://archive.computerhistory.org/resources/access/text/2024/03/102751398-05-01-acc.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 1 秒未満の応答で、同じプログラマの生産量が 58 % 増えたという事例。OCR のため "14.4 function points" などの数値表記を使う場合は原文の走査で再確認する

### S12 Dave Rupert

> a sub-400 millisecond response time creates a dramatic increase in users’ interactions at all different skill levels.
> As illustrated by the chart, a sub-400 millisecond response time creates a dramatic increase in users’ interactions at all different skill levels.

- 媒体・日付: Dave Rupert「The Economic Value of Rapid Response Time」2015-06-15（ブログ）
- URL: https://daverupert.com/2015/06/doherty-threshold/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: Rupert は 400 ms を、本文中の the chart（図）を根拠に述べる。取得できた IBM 報告の走査の本文（S09 と同じ文書）には 400 の語が無い。図が IBM 報告の図かは、ブログの本文から確認できない（図に由来する可能性は本 skill の推測）。ブログは 1982 年の報告を第三者が要約した文で、Doherty 本人の文ではない

### S13 Laws of UX（Jon Yablonski）

> Productivity soars when a computer and its users interact at a pace (<400ms) that ensures that neither has to wait on the other.

- 媒体・日付: Laws of UX「Doherty Threshold」（掲載日の記載なし。© 2026）
- URL: https://lawsofux.com/doherty-threshold/
- 取得日: 2026-11-15
- 検証区分: R
- 備考: サイトの要約文（IBM の報告の冒頭の文をほぼそのまま引いたもの）に 400 ms を付けたもの。サイトは 1982 年の論文が「2 秒」の基準を「400 ms」に変えたと述べるが、取得できた IBM 報告の本文からは確認できなかった

### S14 Google（web.dev）

> 0 to 100 ms Respond to user actions within this time window and users feel like the result is immediate. Any longer, and the connection between action and reaction is broken.

- 媒体・日付: web.dev「Measure performance with the RAIL model」（最終更新 2020-06-10）
- URL: https://web.dev/articles/rail
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 応答 100 ms 以内で「即時」、0〜16 ms は滑らかな動き、1 秒超は集中が切れる、10 秒超は離脱。ページ自身が「Core Web Vitals が推奨で、閾値が異なる」と注記している

### S15 Google（web.dev）

> They perceive animations as smooth so long as 60 new frames are rendered every second. That's 16 ms per frame, including the time it takes for the browser to paint the new frame to the screen, leaving an app about 10 ms to produce a frame.

- 媒体・日付: web.dev「Measure performance with the RAIL model」（最終更新 2020-06-10）
- URL: https://web.dev/articles/rail
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 60 fps ＝ 1 フレーム 16 ms、実際に使えるのは約 10 ms。滑らかさの予算の根拠

### S16 Google（web.dev）

> Core Web Vitals is a newer initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web. It is the recommended approach for defining performance goals over RAIL, and has different thresholds than those detailed here.

- 媒体・日付: web.dev「Measure performance with the RAIL model」（最終更新 2020-06-10）
- URL: https://web.dev/articles/rail
- 取得日: 2026-11-15
- 検証区分: A
- 備考: RAIL より Core Web Vitals を推奨し、閾値が異なると、ページ自身が書いている注記。RAIL の数値を引くときは必ず併記する

### S17 Google（web.dev）

> pages should have a INP of 200 milliseconds or less.

- 媒体・日付: web.dev「Web Vitals」（公開 2020-05-04、最終更新 2024-10-31）
- URL: https://web.dev/articles/vitals
- 取得日: 2026-11-15
- 検証区分: A
- 備考: INP（操作から次の描画まで）が 200 ms 以下を「良い」とする推奨。測定は 75 パーセンタイルが目安と同ページが述べる

### S18 Superhuman

> The 100ms rule states that every digital interaction should be faster than 100ms.

- 媒体・日付: Superhuman Blog「Why Superhuman Mail is built for speed: applying the 100ms rule to email」2022-06-28
- URL: https://blog.superhuman.com/superhuman-is-built-for-speed/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 自社製品の速度方針の説明（自称）。同記事は 100 ms を Gmail の Paul Buchheit の発言とするが、出典は第三者のツイートの引用で、本人の一次発言は確認していない（未検証・伝聞）

### S19 Page Laubheimer（NN/g）

> In general, the duration of most animations should be in the range of 100–500 ms, depending on complexity and on how far the element is traveling.

- 媒体・日付: Nielsen Norman Group「Executing UX Animations: Duration and Motion Characteristics」2020-02-09
- URL: https://www.nngroup.com/articles/animation-duration/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 動きの長さは 100〜500 ms が一般的。調整は複雑さと移動距離による。NN/g の指針で、実験の閾値ではない

### S20 Page Laubheimer（NN/g）

> Simple feedback animations, such as showing a checkbox or toggle switch, should be roughly 100 ms (0.10 seconds) in total duration.

- 媒体・日付: Nielsen Norman Group「Executing UX Animations: Duration and Motion Characteristics」2020-02-09
- URL: https://www.nngroup.com/articles/animation-duration/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 単純なフィードバックは約 100 ms

### S21 Page Laubheimer（NN/g）

> When animation involves substantial screen changes, such as when a modal window moves into view, a duration of 200–300 ms can be appropriate.

- 媒体・日付: Nielsen Norman Group「Executing UX Animations: Duration and Motion Characteristics」2020-02-09
- URL: https://www.nngroup.com/articles/animation-duration/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 大きな画面変化（モーダルの出現など）は 200〜300 ms が妥当

### S22 Page Laubheimer（NN/g）

> At 500ms, animations start to feel like a real drag for users — they become cumbersome and annoying.

- 媒体・日付: Nielsen Norman Group「Executing UX Animations: Duration and Motion Characteristics」2020-02-09
- URL: https://www.nngroup.com/articles/animation-duration/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 500 ms で重く感じ始める。長すぎる動きの上限の目安

### S23 Page Laubheimer（NN/g）

> animating objects appearing or entering the screen usually need a subtly longer duration than objects disappearing or exiting the screen
> a popup window may take 300ms to appear, but only 200 or 250ms to disappear.

- 媒体・日付: Nielsen Norman Group「Executing UX Animations: Duration and Motion Characteristics」2020-02-09
- URL: https://www.nngroup.com/articles/animation-duration/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 出現は退場よりわずかに長くする（例: 出現 300 ms・退場 200〜250 ms）

### S24 Page Laubheimer（NN/g）

> Most frequently, you’ll want to use an ease-out animation, that starts quickly but slows down.
> Ease-in and ease-in-out are sometimes used for elements leaving the screen, but that sort of easing curve can feel unresponsive if the initial motion takes a little while to get going.

- 媒体・日付: Nielsen Norman Group「Executing UX Animations: Duration and Motion Characteristics」2020-02-09
- URL: https://www.nngroup.com/articles/animation-duration/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ease-out を既定にする助言。入場に ease-out・退場に ease-in という使い分けも同記事が述べる

### S25 Page Laubheimer（NN/g）

> keep in mind how frequently users will encounter the animation: the more frequent the animation, the more subtle and shorter you’ll want it to be.

- 媒体・日付: Nielsen Norman Group「Executing UX Animations: Duration and Motion Characteristics」2020-02-09
- URL: https://www.nngroup.com/articles/animation-duration/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 頻度が高いほど控えめに短く。動きの設計の基本問い（どのくらいの頻度で見るか）の根拠

### S26 Page Laubheimer（NN/g）

> Parallax, carousel-forwarding animations, and scroll jacking can make users with vestibular disorders dizzy or nauseated and trigger migraines.

- 媒体・日付: Nielsen Norman Group「Executing UX Animations: Duration and Motion Characteristics」2020-02-09
- URL: https://www.nngroup.com/articles/animation-duration/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 視差・カルーセルの自動送り・スクロールジャックは前庭障害の利用者にめまいや片頭痛を起こしうる、という NN/g の注意

### S27 Google（Material Web のトークン）

> 'duration-short1': if($exclude-hardcoded-values, null, 50ms), 'duration-short2': if($exclude-hardcoded-values, null, 100ms), 'duration-short3': if($exclude-hardcoded-values, null, 150ms), 'duration-short4': if($exclude-hardcoded-values, null, 200ms)

- 媒体・日付: material-components/material-web の生成ファイル tokens/versions/v0_192/_md-sys-motion.scss（Google Material 3 のデザインシステム v0.192・Platform: Web・Scheme: Dynamic。取得は main ブランチ）
- URL: https://github.com/material-components/material-web/blob/main/tokens/versions/v0_192/_md-sys-motion.scss
- 取得日: 2026-11-15
- 検証区分: A
- 備考: duration の short1〜short4 ＝ 50・100・150・200 ms の各トークン。ファイルは自動生成物で、Material 3 の仕様書の文面ではない。値は 2026-11-15 取得時点の v0.192

### S28 Google（Material Web のトークン）

> 'duration-medium1': if($exclude-hardcoded-values, null, 250ms), 'duration-medium2': if($exclude-hardcoded-values, null, 300ms), 'duration-medium3': if($exclude-hardcoded-values, null, 350ms), 'duration-medium4': if($exclude-hardcoded-values, null, 400ms)

- 媒体・日付: material-components/material-web の生成ファイル tokens/versions/v0_192/_md-sys-motion.scss（Google Material 3 のデザインシステム v0.192・Platform: Web・Scheme: Dynamic。取得は main ブランチ）
- URL: https://github.com/material-components/material-web/blob/main/tokens/versions/v0_192/_md-sys-motion.scss
- 取得日: 2026-11-15
- 検証区分: A
- 備考: medium1〜medium4 ＝ 250・300・350・400 ms。short・medium・long・extra-long の 4 段 × 4 の段階構成

### S29 Google（Material Web のトークン）

> 'easing-emphasized': if($exclude-hardcoded-values, null, cubic-bezier(0.2, 0, 0, 1)), 'easing-emphasized-accelerate': if($exclude-hardcoded-values, null, cubic-bezier(0.3, 0, 0.8, 0.15)), 'easing-emphasized-decelerate': if($exclude-hardcoded-values, null, cubic-bezier(0.05, 0.7, 0.1, 1)),
> 'easing-standard': if($exclude-hardcoded-values, null, cubic-bezier(0.2, 0, 0, 1)), 'easing-standard-accelerate': if($exclude-hardcoded-values, null, cubic-bezier(0.3, 0, 1, 1)), 'easing-standard-decelerate': if($exclude-hardcoded-values, null, cubic-bezier(0, 0, 0, 1))

- 媒体・日付: material-components/material-web の生成ファイル tokens/versions/v0_192/_md-sys-motion.scss（Google Material 3 のデザインシステム v0.192・Platform: Web・Scheme: Dynamic。取得は main ブランチ）
- URL: https://github.com/material-components/material-web/blob/main/tokens/versions/v0_192/_md-sys-motion.scss
- 取得日: 2026-11-15
- 検証区分: A
- 備考: emphasized ＝ cubic-bezier(0.2, 0, 0, 1)、emphasized-decelerate ＝ cubic-bezier(0.05, 0.7, 0.1, 1)。standard 系・legacy 系のトークンも同ファイルにある

### S30 Emil Kowalski

> Before you start animating, ask yourself: what’s the purpose of this animation?

- 媒体・日付: Emil Kowalski「You Don't Need Animations」（emilkowal.ski。ページに日付の記載なし）。個人ブログ（自称・経験則）
- URL: https://emilkowal.ski/ui/you-dont-need-animations
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 動きの前に目的を問う、という個人の立場。実験結果ではない

### S31 Emil Kowalski

> How often users will see an animation is a key factor in deciding whether to animate or not.

- 媒体・日付: Emil Kowalski「You Don't Need Animations」（emilkowal.ski。ページに日付の記載なし）。個人ブログ（自称・経験則）
- URL: https://emilkowal.ski/ui/you-dont-need-animations
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 動きの有無を決める要因は見る頻度、という立場

### S32 Emil Kowalski

> I use Raycast hundreds of times a day. If it animated every time I opened it, it would be very annoying. But there’s no animation at all. That’s the optimal experience.

- 媒体・日付: Emil Kowalski「You Don't Need Animations」（emilkowal.ski。ページに日付の記載なし）。個人ブログ（自称・経験則）
- URL: https://emilkowal.ski/ui/you-dont-need-animations
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 1 日に何百回も開く道具は動かさないのが最適、という個人の経験。Raycast 側の設計意図を示す発言ではない

### S33 Emil Kowalski

> The same goes for keyboard-initiated actions. These actions may be repeated hundreds of times a day, an animation would make them feel slow, delayed, and disconnected from the user’s actions. You should never animate them.

- 媒体・日付: Emil Kowalski「You Don't Need Animations」（emilkowal.ski。ページに日付の記載なし）。個人ブログ（自称・経験則）
- URL: https://emilkowal.ski/ui/you-dont-need-animations
- 取得日: 2026-11-15
- 検証区分: A
- 備考: キーボード起点の操作は動かさない、という強い個人の主張（"never"）。Apple の HIG は頻度の高い操作の動きを避けるにとどまる（S67）。断定を再生産しない

### S34 Emil Kowalski

> As a rule of thumb, UI animations should generally stay under 300ms.

- 媒体・日付: Emil Kowalski「You Don't Need Animations」（emilkowal.ski。ページに日付の記載なし）。個人ブログ（自称・経験則）
- URL: https://emilkowal.ski/ui/you-dont-need-animations
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 個人の経験則（rule of thumb）。NN/g の 100〜500 ms（S19）と併記して使う

### S35 Emil Kowalski

> A scale of 0.97 on the :active pseudo-class should do the job

- 媒体・日付: Emil Kowalski「7 Practical Animation Tips」（emilkowal.ski。日付の記載なし）
- URL: https://emilkowal.ski/ui/7-practical-animation-tips
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 押下で 0.97 に縮める、という個人の値。「0.97」は一例で、検証された最適値ではない

### S36 Emil Kowalski

> Try animating from a higher initial scale instead (0.9+).

- 媒体・日付: Emil Kowalski「7 Practical Animation Tips」（emilkowal.ski。日付の記載なし）
- URL: https://emilkowal.ski/ui/7-practical-animation-tips
- 取得日: 2026-11-15
- 検証区分: A
- 備考: scale(0) から出さず 0.9 以上から出す、という個人の経験則

### S37 Emil Kowalski

> Once a tooltip is open, hovering over other tooltips should open them with no delay and no animation.

- 媒体・日付: Emil Kowalski「7 Practical Animation Tips」（emilkowal.ski。日付の記載なし）
- URL: https://emilkowal.ski/ui/7-practical-animation-tips
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 最初のツールチップだけ遅延し、続く隣は遅延も動きもなし。Vercel のガイドラインにも同趣旨（S52）

### S38 Emil Kowalski

> If you are animating something that is entering or exiting the screen, use ease-out.

- 媒体・日付: Emil Kowalski「7 Practical Animation Tips」（emilkowal.ski。日付の記載なし）
- URL: https://emilkowal.ski/ui/7-practical-animation-tips
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 入退場とも ease-out という個人の主張。NN/g は退場に ease-in も使うと述べる（S24）。両者は食い違う

### S39 Paul Graham（Emil の記事が引用）

> All those unseen details combine to produce something that’s just stunning, like a thousand barely audible voices all singing in tune.

- 媒体・日付: Emil Kowalski「7 Practical Animation Tips」（emilkowal.ski。日付の記載なし）（Emil が Hackers and Painters の引用として載せたもの）
- URL: https://emilkowal.ski/ui/7-practical-animation-tips
- 取得日: 2026-11-15
- 検証区分: B
- 備考: Paul Graham の文を Emil が引用したもの（書籍の原文は照合していない）。細部の積み重ねを主張する論拠の「飾り」として使われている

### S40 Rauno Freiberg

> Interaction design is an artform to make experiences that fluidly respond to human intent.

- 媒体・日付: Rauno Freiberg「Invisible Details of Interaction Design」（rauno.me。2023 年 7 月）。個人の随筆（自称）
- URL: https://rauno.me/craft/interaction-design
- 取得日: 2026-11-15
- 検証区分: A
- 備考: インタラクションデザインの定義の一例（個人の見方）

### S41 Rauno Freiberg

> This essay is not a tutorial nor a collection of guidelines.

- 媒体・日付: Rauno Freiberg「Invisible Details of Interaction Design」（rauno.me。2023 年 7 月）。個人の随筆（自称）
- URL: https://rauno.me/craft/interaction-design
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 著者自身が、この随筆を指針集ではなく観察と位置づけている。指針として引用しない根拠

### S42 Rauno Freiberg

> Great interactions are modeled after properties from the real world, like interruptability.

- 媒体・日付: Rauno Freiberg「Invisible Details of Interaction Design」（rauno.me。2023 年 7 月）。個人の随筆（自称）
- URL: https://rauno.me/craft/interaction-design
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 現実の性質（途中で止められること等）を模す、という立場

### S43 Jakub Krehel

> Transitions interpolate toward the latest state and can be interrupted, while keyframe animations run on a fixed timeline and don’t retarget after they start.

- 媒体・日付: Jakub Krehel「Details that make interfaces feel better」（jakub.kr。日付の記載なし）。個人ブログ（自称・経験則）
- URL: https://jakub.kr/writing/details-that-make-interfaces-feel-better
- 取得日: 2026-11-15
- 検証区分: A
- 備考: CSS transition は最新の状態へ補間して中断できる、keyframe は固定のタイムラインで途中で向きを変えない、という技術的説明

### S44 Jakub Krehel

> CSS transitions are great for interactions, while keyframe animations are better for staged sequences that run once.

- 媒体・日付: Jakub Krehel「Details that make interfaces feel better」（jakub.kr。日付の記載なし）。個人ブログ（自称・経験則）
- URL: https://jakub.kr/writing/details-that-make-interfaces-feel-better
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 操作には transition、一度だけの段階的な演出には keyframe、という個人の経験則

### S45 Jakub Krehel

> If animations aren’t interruptible, it can make the interface feel broken.

- 媒体・日付: Jakub Krehel「Details that make interfaces feel better」（jakub.kr。日付の記載なし）。個人ブログ（自称・経験則）
- URL: https://jakub.kr/writing/details-that-make-interfaces-feel-better
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 中断できない動きは壊れて感じる、という個人の主張

### S46 Vercel（Web Interface Guidelines）

> Honor prefers-reduced-motion. Provide a reduced-motion variant.

- 媒体・日付: Vercel「Web Interface Guidelines」（vercel.com/design/guidelines。改訂日の記載なし。自社の指針で、Web の標準ではない）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 動きを減らす設定を尊重し、縮小版を用意する

### S47 Vercel（Web Interface Guidelines）

> Necessity check. Only animate when it clarifies cause & effect or when it adds deliberate delight

- 媒体・日付: Vercel「Web Interface Guidelines」（vercel.com/design/guidelines。改訂日の記載なし。自社の指針で、Web の標準ではない）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 動かすのは因果を明らかにするか、意図した楽しさを足すときだけ

### S48 Vercel（Web Interface Guidelines）

> Interruptible. Animations are cancelable by user input.

- 媒体・日付: Vercel「Web Interface Guidelines」（vercel.com/design/guidelines。改訂日の記載なし。自社の指針で、Web の標準ではない）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 動きは利用者の入力で中断できる

### S49 Vercel（Web Interface Guidelines）

> Minimum loading-state duration. If you show a spinner/skeleton, add a short show-delay (~150–300 ms) & a minimum visible time (~300–500 ms) to avoid flicker on fast responses.

- 媒体・日付: Vercel「Web Interface Guidelines」（vercel.com/design/guidelines。改訂日の記載なし。自社の指針で、Web の標準ではない）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 読み込み表示の出し始めの遅延（約 150〜300 ms）と最短の表示時間（約 300〜500 ms）。「~」の付いた目安で、実験の値ではない

### S50 Vercel（Web Interface Guidelines）

> Optimistic updates. Update the UI immediately when success is likely; reconcile on server response. On failure, show an error & roll back or provide Undo.

- 媒体・日付: Vercel「Web Interface Guidelines」（vercel.com/design/guidelines。改訂日の記載なし。自社の指針で、Web の標準ではない）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 楽観的更新の方針。失敗時は誤りを示して巻き戻すか Undo を出す

### S51 Vercel（Web Interface Guidelines）

> Confirm destructive actions. Require confirmation or provide Undo with a safe window.

- 媒体・日付: Vercel「Web Interface Guidelines」（vercel.com/design/guidelines。改訂日の記載なし。自社の指針で、Web の標準ではない）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 破壊的な操作は確認か、猶予つきの Undo

### S52 Vercel（Web Interface Guidelines）

> Tooltip timing. Delay the first tooltip in a group; subsequent peers have no delay.

- 媒体・日付: Vercel「Web Interface Guidelines」（vercel.com/design/guidelines。改訂日の記載なし。自社の指針で、Web の標準ではない）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 最初のツールチップだけ遅延し、同じ群の続きは遅延なし

### S53 Vercel（Web Interface Guidelines）

> Keyboard works everywhere. All flows are keyboard-operable & follow the WAI-ARIA Authoring Patterns.

- 媒体・日付: Vercel「Web Interface Guidelines」（vercel.com/design/guidelines。改訂日の記載なし。自社の指針で、Web の標準ではない）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 備考: すべての流れをキーボードで操作でき、WAI-ARIA のパターンに従う

### S54 Vercel（Web Interface Guidelines）

> Gestures have alternatives. Every drag, swipe, pinch, or path-based action also works with a tap/click control & keyboard unless the gesture is essential.

- 媒体・日付: Vercel「Web Interface Guidelines」（vercel.com/design/guidelines。改訂日の記載なし。自社の指針で、Web の標準ではない）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ジェスチャーに代替の操作を用意する

### S55 Vercel（Web Interface Guidelines）

> All states designed. Empty, sparse, dense, & error states.

- 媒体・日付: Vercel「Web Interface Guidelines」（vercel.com/design/guidelines。改訂日の記載なし。自社の指針で、Web の標準ではない）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 空・疎・密・エラーのすべての状態を設計する

### S56 Vercel（Web Interface Guidelines）

> Stable skeletons. Skeletons mirror final content exactly to avoid layout shift.

- 媒体・日付: Vercel「Web Interface Guidelines」（vercel.com/design/guidelines。改訂日の記載なし。自社の指針で、Web の標準ではない）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 備考: スケルトンは最終の内容と同じ形にして、レイアウトのずれを避ける

### S57 Vercel（Design Engineering）

> Prototyping design explorations that are easier to do outside of Figma—for example, animations, keyboard controls, and touch are better implemented in code to save the time and effort of reimplementing them from a different medium to the web.

- 媒体・日付: Vercel「Design Engineering at Vercel: What we do and how we do it」2024-03-29（Glenn Hitchcock ほか 5 名の署名）
- URL: https://vercel.com/blog/design-engineering-at-vercel
- 取得日: 2026-11-15
- 検証区分: A
- 備考: アニメーション・キーボード操作・タッチはコードで試すほうがよい、という自社の立場。デザインエンジニアという職能の自己定義の根拠（自称）

### S58 Superhuman

> Cmd+K brings up Superhuman Command, where you can instantly do any action — and also learn the shortcut for next time.

- 媒体・日付: Superhuman Blog「How to build a remarkable command palette」2021-10-12（Tim Boucher）
- URL: https://blog.superhuman.com/how-to-build-a-remarkable-command-palette/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: コマンドパレットで操作を探すと、次回のためにショートカットも学べる、という自社製品の説明（自称）

### S59 Superhuman

> With a command palette, keyboard shortcuts are easy to discover and explore.

- 媒体・日付: Superhuman Blog「How to build a remarkable command palette」2021-10-12（Tim Boucher）
- URL: https://blog.superhuman.com/how-to-build-a-remarkable-command-palette/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: パレットがショートカットの発見を助ける、という主張（自称）

### S60 Raycast

> At the end of the day, people enjoy Raycast because of how it feels, not because of what's under the hood.

- 媒体・日付: Raycast Blog「A Technical Deep Dive Into the New Raycast」2026-05-14
- URL: https://www.raycast.com/blog/a-technical-deep-dive-into-the-new-raycast
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 自社の再構築を説明する記事。「感触」を製品の価値とする自称。技術の詳細は記事本文にあるが、台帳は上の 1 文だけ引く

### S61 Dennis Brotzky（performance.dev）

> A traditional CRUD app doing the same thing takes about 300ms.

- 媒体・日付: performance.dev「How's Linear so fast? A technical breakdown」（第三者の分析。本文に「Linear で働いたことも、コードを見たこともない」と断る）
- URL: https://performance.dev/how-is-linear-so-fast-a-technical-breakdown
- 取得日: 2026-11-15
- 検証区分: R
- 備考: 第三者の推測による説明。Linear の公式発言ではない。数値（数 ms・約 300 ms）は筆者の見積もりで、検証していない

### S62 Apple（HIG）

> Add motion purposefully, supporting the experience without overshadowing it.

- 媒体・日付: Apple Human Interface Guidelines「Motion」（本文データ JSON を取得。ページに改訂日の記載なし）
- URL: https://developer.apple.com/design/human-interface-guidelines/motion
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 動きは目的をもって、体験を支えるものに

### S63 Apple（HIG）

> Don’t add motion for the sake of adding motion. Gratuitous or excessive animation can distract people and may make them feel disconnected or physically uncomfortable.

- 媒体・日付: Apple Human Interface Guidelines「Motion」（本文データ JSON を取得。ページに改訂日の記載なし）
- URL: https://developer.apple.com/design/human-interface-guidelines/motion
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 動きのための動きは気を散らし、不快にさせうる

### S64 Apple（HIG）

> Not everyone can or wants to experience the motion in your app or game, so it’s essential to avoid using it as the only way to communicate important information.

- 媒体・日付: Apple Human Interface Guidelines「Motion」（本文データ JSON を取得。ページに改訂日の記載なし）
- URL: https://developer.apple.com/design/human-interface-guidelines/motion
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 動きを重要な情報の唯一の伝達手段にしない

### S65 Apple（HIG）

> if someone reveals a view by sliding it down from the top, they don’t expect to dismiss the view by sliding it to the side.

- 媒体・日付: Apple Human Interface Guidelines「Motion」（本文データ JSON を取得。ページに改訂日の記載なし）
- URL: https://developer.apple.com/design/human-interface-guidelines/motion
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 出し方と消し方の動きの対応（空間の一貫性）

### S66 Apple（HIG）

> Aim for brevity and precision in feedback animations.

- 媒体・日付: Apple Human Interface Guidelines「Motion」（本文データ JSON を取得。ページに改訂日の記載なし）
- URL: https://developer.apple.com/design/human-interface-guidelines/motion
- 取得日: 2026-11-15
- 検証区分: A
- 備考: フィードバックの動きは短く、的確に。HIG に所要時間の数値は無い

### S67 Apple（HIG）

> In apps, generally avoid adding motion to UI interactions that occur frequently.

- 媒体・日付: Apple Human Interface Guidelines「Motion」（本文データ JSON を取得。ページに改訂日の記載なし）
- URL: https://developer.apple.com/design/human-interface-guidelines/motion
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 頻繁な操作に動きを足さない。Emil の "never"（S33）より穏やか

### S68 Apple（HIG）

> As much as possible, don’t make people wait for an animation to complete before they can do anything, especially if they have to experience the animation more than once.

- 媒体・日付: Apple Human Interface Guidelines「Motion」（本文データ JSON を取得。ページに改訂日の記載なし）
- URL: https://developer.apple.com/design/human-interface-guidelines/motion
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 動きの完了を待たせない。特に繰り返し見る動き

### S69 Apple（HIG）

> Generative models typically take longer to produce a result, so design a loading experience or generate in the background while a person uses another part of the app.

- 媒体・日付: Apple Human Interface Guidelines「Generative AI」（本文データ JSON を取得）
- URL: https://developer.apple.com/design/human-interface-guidelines/generative-ai
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 生成 AI は結果が出るまで長い。読み込み体験を設計するか、背景で生成する

### S70 Apple（HIG）

> Specific feedback reduces uncertainty and makes waiting feel purposeful.

- 媒体・日付: Apple Human Interface Guidelines「Generative AI」（本文データ JSON を取得）
- URL: https://developer.apple.com/design/human-interface-guidelines/generative-ai
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「Processing...」でなく具体的な処理名を出す（直前の例示を含む）

### S71 Apple（HIG）

> Avoid automating destructive actions, like deleting photos, and actions that are hard to undo, like making a purchase on a person’s behalf.

- 媒体・日付: Apple Human Interface Guidelines「Generative AI」（本文データ JSON を取得）
- URL: https://developer.apple.com/design/human-interface-guidelines/generative-ai
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 破壊的・取り消しにくい操作を AI に自動化させない

### S72 Apple（HIG）

> it’s crucial to highlight the result of each undo and redo to keep people from thinking that the action had no effect, which can lead them to perform it repeatedly.

- 媒体・日付: Apple Human Interface Guidelines「Undo and redo」（本文データ JSON を取得）
- URL: https://developer.apple.com/design/human-interface-guidelines/undo-and-redo
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 取り消しの結果を見せないと、効かなかったと思って繰り返してしまう

### S73 Apple（WWDC18 Session 803 の Chan）

> Think about how hard it would be to use any tool, or play an instrument, or do anything in the physical world, if there was a delay to using it?

- 媒体・日付: Apple「Designing Fluid Interfaces」WWDC18 Session 803（公式トランスクリプト。発表者は冒頭で名乗る Chan。Apple の Human Interface チーム）
- URL: https://developer.apple.com/videos/play/wwdc2018/803/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 道具の遅延という喩え。口頭発言を文字にしたもので、書き起こしの精度に依存する

### S74 Apple（WWDC18 Session 803 の Chan）

> Next, we want to allow for constant redirection and interruption.

- 媒体・日付: Apple「Designing Fluid Interfaces」WWDC18 Session 803（公式トランスクリプト。発表者は冒頭で名乗る Chan。Apple の Human Interface チーム）
- URL: https://developer.apple.com/videos/play/wwdc2018/803/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 操作の途中での方向転換・中断を許す、という流動的な UI の原則の 1 つ

### S75 Apple（WWDC18 Session 803 の Chan）

> So, it's not that our interfaces should be fluid, it's that we're fluid, and our interfaces need to be able to respond to that.

- 媒体・日付: Apple「Designing Fluid Interfaces」WWDC18 Session 803（公式トランスクリプト。発表者は冒頭で名乗る Chan。Apple の Human Interface チーム）
- URL: https://developer.apple.com/videos/play/wwdc2018/803/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 流動性は人の側の性質で、UI はそれに応じる、という発言

### S76 MDN

> The prefers-reduced-motion CSS media feature is used to detect if a user has enabled a setting on their device to minimize the amount of non-essential motion.

- 媒体・日付: MDN「prefers-reduced-motion」（Content available under a Creative Commons license）
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- 取得日: 2026-11-15
- 検証区分: A
- 備考: OS の「動きを減らす」設定を検出するメディア特徴。ページの Baseline の表示は取得時点で「Widely available（2020 年 1 月から全ブラウザー）」

### S77 MDN

> Baseline Widely available This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.

- 媒体・日付: MDN「prefers-reduced-motion」（Content available under a Creative Commons license）
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 対応状況（2026-11-15 取得時点の MDN の記載）

### S78 Thomas Steiner（web.dev）

> Vestibular (inner ear) disorder reactions include dizziness, nausea, and migraine headaches, and sometimes require bed rest to recover.

- 媒体・日付: web.dev「prefers-reduced-motion: Sometimes less movement is more」（最終更新 2019-03-11）
- URL: https://web.dev/articles/prefers-reduced-motion
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 前庭障害の反応の説明。動きを減らすことは一部の利用者にとって医療上の必要

### S79 Thomas Steiner（web.dev）

> Applications themselves can and should honor this setting, too, and remove all unnecessary animations.

- 媒体・日付: web.dev「prefers-reduced-motion: Sometimes less movement is more」（最終更新 2019-03-11）
- URL: https://web.dev/articles/prefers-reduced-motion
- 取得日: 2026-11-15
- 検証区分: A
- 備考: アプリ側も設定を尊重し、不要な動きを取り除く

### S80 James Craig（WebKit）

> Included in the iOS accessibility settings is a switch titled “Reduce Motion.” It was added in iOS 7 to allow users the ability to disable parallax and app launching animations.

- 媒体・日付: WebKit Blog「Responsive Design for Motion」2017-05-15（James Craig）
- URL: https://webkit.org/blog/7551/responsive-design-for-motion/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: iOS 7 で Reduce Motion が追加され、視差とアプリ起動の動きを切れるようにした、という WebKit 側の説明

### S81 James Craig（WebKit）

> In 2013, Apple released iOS 7, which included heavy use of animated parallax, dimensionality, motion offsets, and zoom effects.

- 媒体・日付: WebKit Blog「Responsive Design for Motion」2017-05-15（James Craig）
- URL: https://webkit.org/blog/7551/responsive-design-for-motion/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2013 年の iOS 7 で動きの多用が一気に広まり、後に設定が必要になった、という流れの記述（書き手は WebKit の開発者で、Apple の公式声明ではない）

### S82 James Craig（WebKit）

> The prefers-reduced-motion media feature was first proposed to the CSS Working Group in 2014, alongside the release of the iOS API.

- 媒体・日付: WebKit Blog「Responsive Design for Motion」2017-05-15（James Craig）
- URL: https://webkit.org/blog/7551/responsive-design-for-motion/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: メディア特徴は 2014 年に CSS WG へ提案され、WebKit は 2017 年に対応した

### S83 James Craig（WebKit）

> CSS transforms and animations were proposed by WebKit engineers nearly a decade ago as an abstraction of Core Animation concepts wrapped in a familiar CSS syntax.

- 媒体・日付: WebKit Blog「Responsive Design for Motion」2017-05-15（James Craig）
- URL: https://webkit.org/blog/7551/responsive-design-for-motion/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: CSS の transform・animation は WebKit の開発者が提案した（2017 年の記事で「約 10 年前」）。2007 年の WebKit Blog（S84）と整合

### S84 Dave Hyatt（WebKit）

> The simplest kind of animation that we’ve added support for is called a transition.

- 媒体・日付: WebKit Blog「CSS Animation」2007-10-31（Dave Hyatt）
- URL: https://webkit.org/blog/138/css-animation/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: CSS の transition を Web に導入した最初期の公式な説明。transition-property・duration・timing-function の 3 要素を同記事が述べる

### S85 W3C（CSS Transitions）

> This document introduces new CSS features to enable implicit transitions, which describe how CSS properties can be made to change smoothly from one value to another over a given duration.

- 媒体・日付: W3C「CSS Transitions Module Level 1」Working Draft 2026-01-08（取得時点の版）
- URL: https://www.w3.org/TR/css-transitions-1/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 規格の目的の記述。規格は Working Draft の段階（版の状態は取得時点の記載）

### S86 MDN

> Animations that involve transitioning between two states are often called implicit transitions as the states in between the start and final states are implicitly defined by the browser.

- 媒体・日付: MDN「Using CSS transitions」
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Transitions/Using
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2 つの状態の間をブラウザーが補う動きを implicit transitions と呼ぶ

### S87 MDN

> View transitions are a popular design choice for reducing users' cognitive load, helping them stay in context, and reducing perceived loading latency as they move between states or views of an application.

- 媒体・日付: MDN「View Transition API」
- URL: https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 画面遷移の演出が認知負荷・文脈の維持・体感遅延の軽減に使われる、という MDN の記述（効果の実験ではない）

### S88 Chrome for Developers

> A thumbnail image on a product listing page that transitions into a full-size product image on the product detail page.

- 媒体・日付: Chrome for Developers「View transitions」（最終更新 2024-04-14）
- URL: https://developer.chrome.com/docs/web-platform/view-transitions
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 一覧のサムネイルから詳細の大きな画像への遷移。記事一覧から詳細への遷移の例に使える

### S89 Chrome for Developers

> Same-document view transitions are supported in Chrome from Chrome 111.

- 媒体・日付: Chrome for Developers「View transitions」（最終更新 2024-04-14）
- URL: https://developer.chrome.com/docs/web-platform/view-transitions
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 同一文書の view transition は Chrome 111 から。他ブラウザーの対応は同記事の範囲で確認していない。対応状況は時点情報

### S90 Bramus（Chrome for Developers）

> A scroll-driven animation is linked to the scroll position of a scroll container.

- 媒体・日付: Chrome for Developers「Animate elements on scroll with Scroll-driven animations」2023-05-05（Bramus）
- URL: https://developer.chrome.com/docs/css-ui/scroll-driven-animations
- 取得日: 2026-11-15
- 検証区分: A
- 備考: スクロール連動アニメーションの定義

### S91 MDN

> The @starting-style CSS at-rule is used to define starting values for properties set on an element that you want to transition from when the element receives its first style update, i.e., when an element is first displayed on a previously loaded page.
> Baseline 2024 Newly available Since August 2024, this feature works across the latest devices and browser versions.

- 媒体・日付: MDN「@starting-style」
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@starting-style
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 要素の初回表示時の遷移の開始値を決める at-rule。取得時点の MDN の Baseline 表示は「2024 Newly available（2024 年 8 月から）」

### S92 MDN

> The Popover API provides developers with a standard, consistent, flexible mechanism for displaying popover content on top of other page content.
> Baseline 2025 Newly available * Since January 2025, this feature works across the latest devices and browser versions.

- 媒体・日付: MDN「Popover API」
- URL: https://developer.mozilla.org/en-US/docs/Web/API/Popover_API
- 取得日: 2026-11-15
- 検証区分: A
- 備考: popover の標準の仕組み。取得時点の MDN の Baseline 表示は「2025 Newly available（2025 年 1 月から）」

### S93 Chrome for Developers

> You need to add scripting to manage focus, open and close states, accessible hooks into the components, keyboard bindings to enter and exit the experience

- 媒体・日付: Chrome for Developers「Introducing the popover API」（最終更新 2023-05-23）
- URL: https://developer.chrome.com/blog/introducing-popover-api
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 自前の popover に必要だった実装（フォーカス・開閉・キーボード）を、自前で実装する負担として挙げる箇所。標準の popover 属性が肩代わりする、という同記事の説明の前提

### S94 W3C（WCAG 2.2 Understanding）

> For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential
> Understanding SC 2.2.2 Pause, Stop, Hide (Level A)

- 媒体・日付: W3C WAI「Understanding SC 2.2.2 Pause, Stop, Hide (Level A)」（WCAG 2.2 は 2024-12-12 の W3C 勧告）
- URL: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2.2.2（レベル A）。自動で始まり 5 秒を超える動き・点滅・スクロールには一時停止・停止・非表示の手段が要る

### S95 W3C（WCAG 2.2 Understanding）

> Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.
> Understanding SC 2.3.3 Animation from Interactions (Level AAA)

- 媒体・日付: W3C WAI「Understanding SC 2.3.3 Animation from Interactions (Level AAA)」
- URL: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2.3.3（レベル AAA）。操作で起きる動きを無効にできること

### S96 W3C（WCAG 2.2 Understanding）

> if scrolling a page causes elements to move (other than the essential movement associated with scrolling) it can trigger vestibular disorders.
> Understanding SC 2.3.3 Animation from Interactions (Level AAA)

- 媒体・日付: W3C WAI「Understanding SC 2.3.3 Animation from Interactions (Level AAA)」
- URL: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: スクロールで要素が動くと前庭障害を起こしうる

### S97 W3C（WCAG 2.2 Understanding）

> Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.
> Understanding SC 2.3.1 Three Flashes or Below Threshold (Level A)

- 媒体・日付: W3C WAI「Understanding SC 2.3.1 Three Flashes or Below Threshold (Level A)」
- URL: https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2.3.1（レベル A）。1 秒に 3 回を超える点滅を含まない（または閾値を下回る）

### S98 W3C（WCAG 2.2 Understanding）

> All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes
> Understanding SC 2.1.1 Keyboard (Level A)

- 媒体・日付: W3C WAI「Understanding SC 2.1.1 Keyboard (Level A)」
- URL: https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2.1.1（レベル A）。すべての機能がキーボードで操作できる（経路に依存する入力は例外）

### S99 W3C（WCAG 2.2 Understanding）

> The size of the target for pointer inputs is at least 24 by 24 CSS pixels
> Understanding SC 2.5.8 Target Size (Minimum) (Level AA)

- 媒体・日付: W3C WAI「Understanding SC 2.5.8 Target Size (Minimum) (Level AA)」
- URL: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2.5.8（レベル AA）。ポインタ操作の対象は 24×24 CSS px 以上（例外あり。引用は基準の冒頭）

### S100 W3C（WCAG 2.2 Understanding）

> status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.
> Understanding SC 4.1.3 Status Messages (Level AA)

- 媒体・日付: W3C WAI「Understanding SC 4.1.3 Status Messages (Level AA)」
- URL: https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 4.1.3（レベル AA）。ステータスメッセージ（保存した・読み込み中など）を、フォーカス移動なしで支援技術に伝える

### S101 W3C（WAI-ARIA Authoring Practices）

> Maintaining visible focus, predictable focus movement, and distinguishing between keyboard focus and the selected state.

- 媒体・日付: W3C WAI「ARIA Authoring Practices Guide: Developing a Keyboard Interface」
- URL: https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: キーボード操作の基本（可視のフォーカス・予測できる移動・フォーカスと選択の区別）

### S102 freee（アクセシビリティー・ガイドライン）

> 認知障害や注意障害があるユーザーの中には、以下のようなコンテンツが他のコンテンツと一緒に同じページに表示されていると、情報を理解することが難しくなるユーザーがいます。 自動更新される 動きがある 点滅する 自動スクロールする

- 媒体・日付: freee「freeeアクセシビリティー・ガイドライン」参考情報「自動的に変化するコンテンツの問題点」（Ver. 202611.0-RELEASE。CC BY 4.0）
- URL: https://a11y-guidelines.freee.co.jp/explanations/dynamic_content-auto-updated.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 国内の事業会社の公開指針。自動更新・動き・点滅・自動スクロールが理解を妨げる、という WCAG 2.2.2 の趣旨の日本語の説明

### S103 freee（アクセシビリティー・ガイドライン）

> freeeではより厳しい条件を示しているレベルAAAの達成基準を採用しています。

- 媒体・日付: freee「freeeアクセシビリティー・ガイドライン」参考情報「自動的に変化するコンテンツの問題点」（Ver. 202611.0-RELEASE。CC BY 4.0）
- URL: https://a11y-guidelines.freee.co.jp/explanations/dynamic_content-auto-updated.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 閃光については WCAG のレベル A の限定的な条件ではなく、1 秒に 3 回以内というレベル AAA の基準を採用している、という自社の方針（同ページの説明）

### S104 freee（アクセシビリティー・ガイドライン）

> 同じページ上に、自動的に開始し5秒以上継続する、点滅や自動スクロールを伴うコンテンツと、他のコンテンツを一緒に配置しない。そのようなコンテンツを作る場合は、ユーザーが一時停止、停止、または非表示にすることができるようにする。

- 媒体・日付: freee「freeeアクセシビリティー・ガイドライン」カテゴリ「動的コンテンツ」のガイドライン項目（WCAG 2.1 の 2.2.2 に対応）
- URL: https://a11y-guidelines.freee.co.jp/categories/dynamic_content.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2.2.2 を日本語の運用ルールにした形。ガイドライン項目に「重篤度 [MAJOR]」のチェック項目が付く

### S105 デジタル庁（デザインシステムβ版）

> 色の組み合わせとコントラスト比 フォントサイズ キーボード操作、フォーカスインジケーター リンクやボタン等のターゲットサイズ 操作に対応したインタラクション表現 動きのあるオブジェクトの扱い 大きさの可変や内容量の増減を踏まえた外観構造

- 媒体・日付: デジタル庁デザインシステムβ版「アクセシビリティ」（v2.18.2）
- URL: https://design.digital.go.jp/dads/guidance/accessibility/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: デザインシステムの部品が反映するアクセシビリティの項目の並び（「操作に対応したインタラクション表現」「動きのあるオブジェクトの扱い」を含む）。動きの具体値は同ページに無い

### S106 Samhita Tankala（NN/g）

> If a page takes less than 1 second to load, skeleton screens or spinners aren’t necessary, as they likely won’t make a difference to the users’ experience.

- 媒体・日付: Nielsen Norman Group「Skeleton Screens 101」2023-06-04（最終確認 2026-09-02）
- URL: https://www.nngroup.com/articles/skeleton-screens/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 1 秒未満ならスケルトンもスピナーも不要。出すと画面が点滅して追いつけない感じになりうる（同記事）

### S107 Samhita Tankala（NN/g）

> Spinners or wait animations provide feedback to users that the system is working but don’t give any indication on how long users will have to wait; therefore, they are best used when the page takes 2–10 seconds to load.
> Similarly, skeleton screens should be used with a wait time that’s under 10 seconds. On the other hand, progress bars are strongly recommended for any page that takes longer that 10 seconds to load

- 媒体・日付: Nielsen Norman Group「Skeleton Screens 101」2023-06-04（最終確認 2026-09-02）
- URL: https://www.nngroup.com/articles/skeleton-screens/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: スピナーは 2〜10 秒向け。スケルトンは 10 秒未満向け、進捗バーは 10 秒超（同記事）

### S108 Samhita Tankala（NN/g）

> A frame display is not recommended because, if users are forced to wait for too long, they will assume the page isn’t working

- 媒体・日付: Nielsen Norman Group「Skeleton Screens 101」2023-06-04（最終確認 2026-09-02）
- URL: https://www.nngroup.com/articles/skeleton-screens/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 枠だけのスケルトンは勧めない。中身の骨組みが無いと、利用者は動いていないと考える

### S109 Samhita Tankala（NN/g）

> animations of this sort can potentially be distracting, annoying, or even create accessibility problems for some users.
> Some skeleton screens include animations in the form of a pulsating movement, with the use of gradients or elements fading in and out.
> DoorDash uses a short, animated skeleton screen in the form of a shimmer that moves from left to right.

- 媒体・日付: Nielsen Norman Group「Skeleton Screens 101」2023-06-04（最終確認 2026-09-02）
- URL: https://www.nngroup.com/articles/skeleton-screens/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 脈動・シマーのスケルトンは気を散らし、アクセシビリティの問題にもなりうる

### S110 Kathryn Faulkner・Katherine Olvera（Viget）

> We gave the test to 136 people, and the skeleton screen performed the worst by all metrics.
> Users in the skeleton screen group took longer to complete the task
> guessed that the wait time had been longer than users who saw the loading spinner or a blank screen.
> The quickest way to build the test was to use animated GIFs to simulate each loading animation and put them inside an existing testing framework.

- 媒体・日付: Viget「A Bone to Pick with Skeleton Screens」2017-10-19（Wayback の保存コピーで照合。モバイル向けの簡易テスト）
- URL: https://www.viget.com/articles/a-bone-to-pick-with-skeleton-screens/
- 取得日: 2026-11-15
- 検証区分: C
- 備考: スケルトンが体感を速くするという通説への反証（スピナー・空白画面のほうが短く感じられた）。サンプルは 136 人（スケルトン 39・スピナー 39・空白 58）で、アニメ GIF による模擬。因果の一般化はできない

### S111 Kathryn Faulkner・Katherine Olvera（Viget）

> skeleton screens aren’t a silver bullet for increasing perceived performance and should be used thoughtfully.

- 媒体・日付: Viget「A Bone to Pick with Skeleton Screens」2017-10-19（Wayback の保存コピーで照合。モバイル向けの簡易テスト）
- URL: https://www.viget.com/articles/a-bone-to-pick-with-skeleton-screens/
- 取得日: 2026-11-15
- 検証区分: C
- 備考: Viget 自身の結論。「万能ではない」と控えめに述べている

### S112 Katie Sherwin（NN/g）

> If the result will take more than 10 seconds to appear, you should also show users an estimate of when the computer will be finished.

- 媒体・日付: Nielsen Norman Group「Progress Indicators Make a Slow System Less Insufferable」2014-10-26
- URL: https://www.nngroup.com/articles/progress-indicators/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 10 秒超は完了の見積もりを出す

### S113 MDN

> A good general rule for improving perceived performance is that it is usually better to provide a quick response and regular status updates than make the user wait until an operation fully completes

- 媒体・日付: MDN「Perceived performance」
- URL: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Perceived_performance
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 待たせる処理は、最後まで黙らず、素早い応答と途中経過を返す

### S114 React

> useOptimistic is a React Hook that lets you optimistically update the UI.

- 媒体・日付: React 公式ドキュメント「useOptimistic」（React 19.3）
- URL: https://react.dev/reference/react/useOptimistic
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 楽観的更新の公式 API。サーバーの確定を待たず UI を先に更新する

### S115 Aza Raskin

> Merely removing warnings doesn’t save our work from peril, but using an “undo” function does.

- 媒体・日付: A List Apart「Never Use a Warning When You Mean Undo」2007-07-21（Aza Raskin）
- URL: https://alistapart.com/article/neveruseawarning/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 確認ダイアログではなく Undo で守る、という主張。習慣化した確認は誤って押されるという論拠つき

### S116 Aza Raskin

> If an interface is to be humane, it must respect habituation.
> In the case of the “Are you sure you want to quit?” dialog, our hands have memorized close-and-click as a single continuous gesture.
> Unfortunately, our habits sometimes make us do the wrong thing: we don’t even have time to realize our mistake until after we’ve made it.

- 媒体・日付: A List Apart「Never Use a Warning When You Mean Undo」2007-07-21（Aza Raskin）
- URL: https://alistapart.com/article/neveruseawarning/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 確認の警告は慣れで素通りされる（habituation）。確認ダイアログの多用を避ける根拠

### S117 Aurora Harley（NN/g）

> Ideally, systems should always keep users informed about what is going on, through appropriate feedback within reasonable time.

- 媒体・日付: Nielsen Norman Group「Visibility of System Status (Usability Heuristic #1)」2018-06-03
- URL: https://www.nngroup.com/articles/visibility-system-status/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ヒューリスティック 1。体感速度と状態表示の最上位の原則

### S118 Alita Kendrick（NN/g）

> Microinteractions are trigger-feedback pairs in which (1) the trigger can be a user action or an alteration in the system’s state; (2) the feedback is a narrowly targeted response to the trigger and is communicated through small, highly contextual (usually visual) changes in the user interface.

- 媒体・日付: Nielsen Norman Group「Microinteractions in User Experience」2018-10-21
- URL: https://www.nngroup.com/articles/microinteractions/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: マイクロインタラクションの NN/g の定義（トリガーとフィードバックの組）。Saffer の枠組み（トリガー・ルール・フィードバック・ループとモード）の全体ではない

### S119 Alita Kendrick（NN/g）

> In 2014, Dan Saffer published the book Microinteractions, which defined this concept and outlined a model for designing microinteractions.

- 媒体・日付: Nielsen Norman Group「Microinteractions in User Experience」2018-10-21
- URL: https://www.nngroup.com/articles/microinteractions/
- 取得日: 2026-11-15
- 検証区分: R
- 備考: NN/g の地の文。Saffer の書籍の刊行年（2014）と、概念を定義し設計モデルを示した、という位置づけの根拠。書籍の本文は未照合

### S120 Georgia Kenderova ほか（NN/g）

> Some chatbots autoscroll users at the end of lengthy responses, forcing users to then scroll back up to read from the beginning. This behavior is particularly overwhelming and disorienting when a chatbot streams its response (i.e., it displays its answer incrementally as it is generated), since the users may have already started reading, and then they have to refind their spot in the answer text.

- 媒体・日付: Nielsen Norman Group「AI Chatbots: 10 Design Guidelines」2026-04-24（Georgia Kenderova・Maria Rosala・Tanner Kohler）
- URL: https://www.nngroup.com/articles/ai-chatbots-design-guidelines/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ストリーミング中の自動スクロールは読み始めた位置を見失わせる。調査の対象は、複数サイトの実在の AI チャットボット

### S121 Georgia Kenderova ほか（NN/g）

> Providing suggested prompts reduces user effort by removing the burden of formulating questions.

- 媒体・日付: Nielsen Norman Group「AI Chatbots: 10 Design Guidelines」2026-04-24（Georgia Kenderova・Maria Rosala・Tanner Kohler）
- URL: https://www.nngroup.com/articles/ai-chatbots-design-guidelines/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 提案プロンプトは入力の負担を減らす。ボタンで出す（テキストでなく）という同記事の助言と対

### S122 Georgia Kenderova ほか（NN/g）

> Turo's chatbot opens with a generic phrase that, in effect, says Ask me anything, setting expectations the bot can't meet

- 媒体・日付: Nielsen Norman Group「AI Chatbots: 10 Design Guidelines」2026-04-24（Georgia Kenderova・Maria Rosala・Tanner Kohler）
- URL: https://www.nngroup.com/articles/ai-chatbots-design-guidelines/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 漠然とした導入文は、できないことへの期待を生む

### S123 Saleema Amershi ほか（Microsoft Research）

> Make clear what the system can do. Help the user understand what the AI system is capable of doing.

- 媒体・日付: Amershi ほか「Guidelines for Human-AI Interaction」CHI 2019（Glasgow, 2019-05-04〜09。取得は著者の 1 人 Eric Horvitz のサイトの PDF 写し）
- URL: https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: AI 設計の 18 指針のうち G1（能力の範囲を示す）。PDF は 2 段組のため、指針の見出しと説明文の位置が離れることがある（本引用は連続した 2 文）

### S124 Saleema Amershi ほか（Microsoft Research）

> Make clear how well the system can do what it can do.

- 媒体・日付: Amershi ほか「Guidelines for Human-AI Interaction」CHI 2019（Glasgow, 2019-05-04〜09。取得は著者の 1 人 Eric Horvitz のサイトの PDF 写し）
- URL: https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: G2（精度の見込みを示す）。見出しの文。説明文は PDF の段組で別の位置にある

### S125 Saleema Amershi ほか（Microsoft Research）

> Make it easy to edit, refine, or recover when the AI system is wrong.

- 媒体・日付: Amershi ほか「Guidelines for Human-AI Interaction」CHI 2019（Glasgow, 2019-05-04〜09。取得は著者の 1 人 Eric Horvitz のサイトの PDF 写し）
- URL: https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: G9「Support efficient correction」の説明文。誤ったときに編集・修正・復旧を容易にする。見出しの語（Support efficient correction.）は本文の別の位置に並ぶ

### S126 Saleema Amershi ほか（Microsoft Research）

> Convey the consequences of user actions.

- 媒体・日付: Amershi ほか「Guidelines for Human-AI Interaction」CHI 2019（Glasgow, 2019-05-04〜09。取得は著者の 1 人 Eric Horvitz のサイトの PDF 写し）
- URL: https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: G16。利用者の操作が AI の今後の振る舞いに与える影響を示す。見出しの文

### S127 Yaniv Leviathan ほか（Google Research）

> Our evaluations indicate that, when ignoring generation speed, the interfaces from our generative UI implementations are strongly preferred by human raters compared to standard LLM outputs.

- 媒体・日付: Google Research「Generative UI: A rich, custom, visual interactive user experience for any prompt」2025-11-18
- URL: https://research.google/blog/generative-ui-a-rich-custom-visual-interactive-user-experience-for-any-prompt/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 自社実験の結果で、「生成の速さを無視すれば」という条件つき。速度という体感の要素を評価から外している点が、画面設計の観点での留保になる（自称）

### S128 Jeff Sauro（MeasuringU）

> three AI-based chat products with 153 U.S.-based panel participants.

- 媒体・日付: MeasuringU「The User Experience of AI-Based Chat Software (2025)」（2025 年 1〜2 月の回顧的な調査）
- URL: https://measuringu.com/ai-based-chat-software-ux-2025/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 3 つの AI チャット製品の利用者（54・49・50 人）による事後の評価。標本は小さく、同記事も「基準値の把握には十分、中程度の差の検出には妥当」と述べる。操作の感触の個別設計の根拠にはならない

### S129 Google Design

> Through 46 separate research studies with hundreds of designs, and more than 18,000 participants from around the world, we’ve fine tuned a system that’s both beautiful and highly usable.

- 媒体・日付: Google Design「Expressive Design: Google's UX Research」（Material 3 Expressive の調査の自社紹介）
- URL: https://design.google/library/expressive-material-design-google-research
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 自社が示す調査の規模（自称）。同記事は色・形・大きさ・動き・包含を表現的デザインの要素に挙げる。動きの個別の数値は取得した範囲に無い

### S130 John Lasseter

> the speed of an action defines how well the idea behind the action will read to an audience.

- 媒体・日付: John Lasseter「Principles of Traditional Animation Applied to 3D Computer Animation」Computer Graphics 21(4)、SIGGRAPH '87、1987-07（UCI の授業サイトの走査 PDF）
- URL: https://www.ics.uci.edu/~fowlkes/class/ics162/exercises/lasseter.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「速さ」が動きに意味を与える、という 1987 年の主張（Timing の節）。引用は節の見出し直後の文。OCR の走査で、見出しの綴りに崩れがある

### S131 John Lasseter

> This paper describes the basic principles of traditional 2D hand drawn animation and their application to 3D computer animation.

- 媒体・日付: John Lasseter「Principles of Traditional Animation Applied to 3D Computer Animation」Computer Graphics 21(4)、SIGGRAPH '87、1987-07（UCI の授業サイトの走査 PDF）
- URL: https://www.ics.uci.edu/~fowlkes/class/ics162/exercises/lasseter.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 論文の要旨。伝統的な作画アニメの原則を 3D に適用する、という位置づけ（UI への転用は書いていない）

### S132 Bay-Wei Chang・David Ungar

> User interfaces are often based on static presentations, a model ill suited for conveying change. Consequently, events on the screen frequently startle and confuse users.

- 媒体・日付: Chang & Ungar「Animation: From Cartoons to the User Interface」UIST '93（Atlanta, 1993-11-03〜05, pp. 45-55）
- URL: https://bibliography.selflanguage.org/_static/animation.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: UI は静的な表示を前提とし、変化の伝達に向かず、利用者を驚かせ混乱させる、という 1993 年の問題設定

### S133 Bay-Wei Chang・David Ungar

> The principles of animation mentioned in this section are drawn from the excellent treatise on cartoon animation, Disney Animation: The Illusion of Life, by Disney animators Frank Thomas and Ollie Johnston
> The Self user interface has served as a testbed for the application of cartoon animation techniques as a means of making the interface easier to understand and more pleasant to use.

- 媒体・日付: Chang & Ungar「Animation: From Cartoons to the User Interface」UIST '93（Atlanta, 1993-11-03〜05, pp. 45-55）
- URL: https://bibliography.selflanguage.org/_static/animation.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: UI への転用は、Thomas & Johnston の『Disney Animation: The Illusion of Life』の原則を元にした、と著者自身が書く。Self という研究用 UI での試みで、製品の標準ではない

### S134 Bay-Wei Chang・David Ungar

> Anticipating motion with a small contrary motion and pacing the middle of transitions faster than the endpoints results in smoother and clearer movements.

- 媒体・日付: Chang & Ungar「Animation: From Cartoons to the User Interface」UIST '93（Atlanta, 1993-11-03〜05, pp. 45-55）
- URL: https://bibliography.selflanguage.org/_static/animation.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 小さな逆向きの動き（予備動作）と、遷移の中間を速く端を遅く、という技法の主張

### S135 Adobe

> Specifically, we will stop updating and distributing the Flash Player at the end of 2020

- 媒体・日付: Adobe Blog「Flash & the Future of Interactive Content」2017-07-25
- URL: https://blog.adobe.com/en/publish/2017/07/25/adobe-flash-update
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Flash Player の更新・配布を 2020 年末で止める、という Adobe 自身の発表。Apple・Facebook・Google・Microsoft・Mozilla との調整に触れる同記事の文脈は別の文

### S136 Steve Jobs（Apple）

> HTML5, the new web standard that has been adopted by Apple, Google and many others, lets web developers create advanced graphics, typography, animations and transitions without relying on third party browser plug-ins (like Flash).

- 媒体・日付: Apple「Thoughts on Flash」（署名 Steve Jobs・ページ末の日付 April, 2010。Wayback の 2011-01-01 の保存コピーで照合）
- URL: https://www.apple.com/hotnews/thoughts-on-flash/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Apple が Flash を許さない理由を述べた文書の中で、動きと遷移は HTML5・CSS・JavaScript で実現する、とする箇所。Apple 側の公式な立場

### S137 Jakob Nielsen

> About 99% of the time, the presence of Flash on a website constitutes a usability disease.

- 媒体・日付: Nielsen Norman Group「Flash: 99% Bad」2000-10-29
- URL: https://www.nngroup.com/articles/flash-99-percent-bad/
- 取得日: 2026-11-15
- 検証区分: C
- 備考: Flash を全面的に批判した 2000 年の論評。「99 %」は統計ではなく強調。Flash 全体への評価で、動きの設計一般の評価ではない

### S138 Sara Paul（NN/g）

> In our usability testing, we observed that websites with scrolljacking exhibit significant threats to user control and freedom, discoverability, attention, efficiency, and task success.

- 媒体・日付: Nielsen Norman Group「Scrolljacking 101」2023-08-06
- URL: https://www.nngroup.com/articles/scrolljacking-101/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: スクロールジャックは制御・発見性・注意・効率・課題の成功を脅かす、という NN/G の調査の観察

### S139 Sara Paul（NN/g）

> BBC’s use of scrolljacking was very successful in our testing because it helped participants comprehend the information and visualize the disaster.
> the scrolljack serves the functional purpose of adding supporting information through progressive disclosure.

- 媒体・日付: Nielsen Norman Group「Scrolljacking 101」2023-08-06
- URL: https://www.nngroup.com/articles/scrolljacking-101/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 同じ記事が、機能的な目的（段階的開示）があれば有効だった例を挙げる。批判一辺倒でなく両面を述べている

### S140 Val Head

> Even Apple discovered this the hard way when the animated transitions in iOS 7 started making some people sick.

- 媒体・日付: A List Apart「Designing Safer Web Animation For Motion Sensitivity」2015-09-08（Val Head。ページに 2020-04-30 の表記も併記）
- URL: https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: iOS 7 の遷移で気分が悪くなる人が出た、という記事の記述（iOS 7 の事象の一次の報告ではなく、筆者の説明）

### S141 W3C（Media Queries Level 5）

> The prefers-reduced-motion media feature is used to detect if the user has requested the system minimize the amount of non-essential motion it uses.

- 媒体・日付: W3C「Media Queries Level 5」Working Draft 2026-02-19（取得時点の版）
- URL: https://www.w3.org/TR/mediaqueries-5/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: prefers-reduced-motion の規格上の定義。規格は Working Draft の段階（版の状態は取得時点の記載）で、MDN は全ブラウザーの対応を 2020 年 1 月からとする（S77）

### S142 W3C（CSS View Transitions）

> W3C Candidate Recommendation Draft, 28 March 2024

- 媒体・日付: W3C「CSS View Transitions Module Level 1」（/TR/ の取得時点の版の表示）
- URL: https://www.w3.org/TR/css-view-transitions-1/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 規格の版の状態の表示。取得した /TR/ のページが 2024-03-28 の Candidate Recommendation Draft だった、という時点情報

### S143 W3C（Scroll-driven Animations）

> This version: https://www.w3.org/TR/2023/WD-scroll-animations-1-20230606/

- 媒体・日付: W3C「Scroll-driven Animations」（/TR/css-scroll-animations-1 相当。取得時点の版の表示）
- URL: https://www.w3.org/TR/scroll-animations-1/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 規格の版の URL（日付つき）。取得した /TR/ のページが 2023-06-06 の Working Draft（WD）の版だった、という時点情報。最新の版かは未確認

### S144 Jakob Nielsen

> Flash tends to degrade websites for three reasons: it encourages design abuse, it breaks with the Web's fundamental interaction principles, and it distracts attention from the site's core value.

- 媒体・日付: Nielsen Norman Group「Flash: 99% Bad」2000-10-29
- URL: https://www.nngroup.com/articles/flash-99-percent-bad/
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 批判の 3 つの理由（デザインの濫用・Web の基本的な操作原則からの逸脱・注意の分散）。2000 年の論評で、Flash という技術への批判。現在の CSS・JavaScript の動きの評価ではない

### S145 James Craig（WebKit）

> Richly creative animations were finally within reach, without incurring the security risk and battery cost associated with plug-ins.

- 媒体・日付: WebKit Blog「Responsive Design for Motion」2017-05-15（James Craig）
- URL: https://webkit.org/blog/7551/responsive-design-for-motion/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: CSS の transform・animation が標準化されて、プラグインのセキュリティとバッテリーの負担なしに動きが作れるようになった、という WebKit 側の説明（実装者の立場）

### S146 Bramus（Chrome for Developers）

> The classic way to achieve these kinds of effects is to respond to scroll events on the main thread, which leads to two main problems: Modern browsers perform scrolling on a separate process and therefore deliver scroll events asynchronously.

- 媒体・日付: Chrome for Developers「Animate elements on scroll with Scroll-driven animations」2023-05-05（Bramus）
- URL: https://developer.chrome.com/docs/css-ui/scroll-driven-animations
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 従来はスクロールイベントをメインスレッドで処理しており、ブラウザーがスクロールを別プロセスで行うためイベントが非同期に届き、スクロールと同期した滑らかな動きが難しい、という説明（引用は 2 つの問題の導入の文まで）

### S147 Google（Material Web のトークン）

> 'duration-extra-long1': if($exclude-hardcoded-values, null, 700ms), 'duration-extra-long2': if($exclude-hardcoded-values, null, 800ms), 'duration-extra-long3': if($exclude-hardcoded-values, null, 900ms), 'duration-extra-long4': if($exclude-hardcoded-values, null, 1000ms)
> 'duration-long1': if($exclude-hardcoded-values, null, 450ms), 'duration-long2': if($exclude-hardcoded-values, null, 500ms), 'duration-long3': if($exclude-hardcoded-values, null, 550ms), 'duration-long4': if($exclude-hardcoded-values, null, 600ms)

- 媒体・日付: material-components/material-web の生成ファイル tokens/versions/v0_192/_md-sys-motion.scss（Google Material 3 のデザインシステム v0.192・Platform: Web）
- URL: https://github.com/material-components/material-web/blob/main/tokens/versions/v0_192/_md-sys-motion.scss
- 取得日: 2026-11-15
- 検証区分: A
- 備考: extra-long1〜4 ＝ 700・800・900・1000 ms。同ファイルの long は 450〜600 ms。画面全体の大きな遷移向けの段階で、通常の UI 操作には長い（用途の説明は同ファイルに無く、本 skill の整理）

### S148 Rauno Freiberg

> Lightweight actions, such as displaying overlays, feel more natural to trigger during the swipe after an arbitrary amount of distance.
> The iOS App Switcher will never dismiss an app before the gesture ends.
> This makes sense to me because dismissing an app is destructive, and it wouldn't feel nice if the app were to dismiss in the middle of the swipe.

- 媒体・日付: Rauno Freiberg「Invisible Details of Interaction Design」（rauno.me。2023 年 7 月）。個人の随筆（自称）
- URL: https://rauno.me/craft/interaction-design
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 軽い操作（オーバーレイの表示など）は、スワイプの途中の一定の距離で発火したほうが自然、という観察。同記事は破壊的な操作は指を離したときに発火する、と続ける

### S149 MDN

> Animations such as scaling or panning large objects can be vestibular motion triggers.

- 媒体・日付: MDN「prefers-reduced-motion」（Content available under a Creative Commons license）
- URL: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 拡大縮小や大きな物の移動は前庭の誘因になりうる

### S150 Design Council（英国）

> The Double Diamond is a visual representation of the design and innovation process. It’s a simple way to describe the steps taken in any design and innovation project, irrespective of methods and tools used.

- 媒体・日付: The Double Diamond（公式ページ。日付の記載なし）
- URL: https://www.designcouncil.org.uk/our-resources/the-double-diamond/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ダブルダイヤモンドの定義。「手法やツールに依らず」プロセスの段階を述べる図という位置づけ。機関の自称。進め方の型の骨格に使える

### S151 Design Council（英国）

> The two diamonds represent a process of exploring an issue more widely or deeply (divergent thinking) and then taking focused action (convergent thinking).

- 媒体・日付: Framework for Innovation（公式ページ。日付の記載なし）
- URL: https://www.designcouncil.org.uk/our-resources/framework-for-innovation/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 発散と収束の 2 回の繰り返しという構造の説明。機関の自称

### S152 Design Council（英国）

> This is not a linear process as the arrows on the diagram show. Many of the organisations we support learn something more about the underlying problems which can send them back to the beginning.

- 媒体・日付: Framework for Innovation（公式ページ。日付の記載なし）
- URL: https://www.designcouncil.org.uk/our-resources/framework-for-innovation/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ダブルダイヤモンドは直線ではないと機関自身が述べる箇所。「図は一方向に見えるが実際は戻る」という注意の根拠

### S153 Sarah Gibbons（Nielsen Norman Group）

> Be a master chef, not a line cook: take the recipe as a framework, then tweak as needed. Each phase is meant to be iterative and cyclical rather than strictly linear.

- 媒体・日付: Design Thinking 101（NN/g の記事、2016-07-31 公開・2026-07-15 最終確認）
- URL: https://www.nngroup.com/articles/design-thinking/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 枠組みを「レシピ」ではなく出発点として使う。各段階が往復する点。調査機関の自称

### S154 GOV.UK（Service Manual）

> Before you start your research, you’ll need to interrogate that solution and reframe it as a problem to be solved.

- 媒体・日付: How the discovery phase works（Service Manual、2016-08-04 公開・2021-06-21 更新）
- URL: https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「解決策を渡されたら問題に戻す」。依頼の受け方・問いの立て方の根拠

### S155 GOV.UK（Service Manual）

> You might not even want to prototype all of the transaction or element you’re working on: often it makes sense just to focus on the areas you think will be most challenging. This lets you do the minimum you need to test your riskiest assumptions.

- 媒体・日付: How the alpha phase works（Service Manual、2016-08-04 公開）
- URL: https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 試作の対象を最も難しい部分に絞り、最も危うい仮定を検証する。試作の範囲を決める型

### S156 Karri Saarinen（Linear 共同創業者）

> Through this process, I generated hundreds of screens and was able to narrow down a few major directions that resonated most.

- 媒体・日付: How we redesigned the Linear UI (part II)（2024-03-28）
- URL: https://linear.app/now/how-we-redesigned-the-linear-ui
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 複数案を大量に出してから少数の方向性に絞る。方向性を複数出して絞る型の実例。企業の自称

### S157 Hikaru Sudo（Goodpatch）

> 目的があいまいなまま進めてしまうと収束が難しくなり、場当たり的なピボットを繰り返して無駄なコストを払うことにもなりかねません。

- 媒体・日付: 生成AIが作るプロトタイプは、本当にサービスづくりの近道になるのか？（Goodpatch Blog、2026-08-28。S164 と同じ記事）
- URL: https://goodpatch.com/blog/2026-08-ai-prototype
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 目的（誰に・どんな課題・どうなるか）を仮説でも先に言葉にしておくと、収束の判断軸になる、という主張

### S158 Sarah Gibbons（Nielsen Norman Group）

> It is nearly impossible to improve a design without feedback from others. Their input helps you avoid mistakes and thus create higher quality work.

- 媒体・日付: Design Critiques: Encourage a Positive Culture to Improve Products（NN/g の記事、2016-10-23）
- URL: https://www.nngroup.com/articles/design-critiques/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 批評の目的。批評を、設計を改善するための手段として述べる

### S159 Sarah Gibbons（Nielsen Norman Group）

> Sharing designs early allows for earlier buy-in from team members that otherwise may not feel confident about the work and builds team consensus.

- 媒体・日付: Design Critiques（NN/g の記事、2016-10-23）
- URL: https://www.nngroup.com/articles/design-critiques/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 早く見せることで合意形成が進むという主張。提案と合意形成の型

### S160 Ryan Singer（Basecamp）

> any specific mockups are going to bias what other people do after you—especially if you’re in a higher position than them. They’ll take every detail in the initial mockups as direction even though you didn’t intend it.

- 媒体・日付: Shape Up, Chapter 4「Find the Elements」（オンライン版。日付の記載なし）
- URL: https://basecamp.com/shapeup/1.3-chapter-04
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 具体的なモックは後の人を縛る。デザインと実装の境界・引き渡しの注意の根拠

### S161 Sarah Gibbons（Nielsen Norman Group）

> Implement Put the vision into effect. Ensure that your solution is materialized and touches the lives of your end users. This is the most important part of design thinking, but it is the one most often forgotten.

- 媒体・日付: Design Thinking 101（NN/g の記事、2016-07-31 公開・2026-07-15 最終確認）
- URL: https://www.nngroup.com/articles/design-thinking/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「実装」を最重要で最も忘れられやすい段階とする記述。デザインと実装の境界・引き渡しの詰めの根拠。調査機関の自称

### S162 Rauno Freiberg（デザインエンジニア）

> Sitting down and just thinking hard does not magically produce valuable discoveries either. The essence of the word "interaction" implies a relationship between a human and an environment. In my experience, great revelations surface from making something — filling your headspace with a problem — and then going for a synthesising daydreaming walk to stir the pot.

- 媒体・日付: Invisible Details of Interaction Design（2023-07）
- URL: https://rauno.me/craft/interaction-design
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 操作感の発見は「作る→課題を頭に入れる→離れる」で起きるという個人の経験則。個人の主張

### S163 Emil Kowalski（デザインエンジニア）

> When we click on a button that opens a dropdown, we expect the dropdown to animate from where the button is.

- 媒体・日付: Good vs great animations（日付の記載なし）
- URL: https://emilkowal.ski/ui/good-vs-great-animations
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 起点を意識した動き（origin-aware）。操作と動きの因果を合わせる基準。個人の主張

### S164 Hikaru Sudo（Goodpatch）

> 「簡単に作れるようになること」と「工程を省略すること」は別物です。

- 媒体・日付: 生成AIが作るプロトタイプは、本当にサービスづくりの近道になるのか？（Goodpatch Blog、2026-08-28）
- URL: https://goodpatch.com/blog/2026-08-ai-prototype
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 試作が速くなっても目的・検証の工程は省けないという主張。国内デザイン会社の自称。プロトタイプの扱いの注意の根拠

### S165 Natasha Jen（Pentagram パートナー）

> The reduction of a complex creative problem-solving mindset into five steps makes design seem easy when it’s not.

- 媒体・日付: It’s Nice That「Why Design Thinking is bullshit」（日付の記載は取得していない。URL に 230218 とある）
- URL: https://www.itsnicethat.com/articles/natasha-jen-pentagram-graphicdesign-230218
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 5 段階への還元が「デザインは易しい」という誤解を生む、という批判。デザインの厳しさ（批評・推敲）を守る立場の根拠

### S166 Don Norman

> I observed design students who were acting mindlessly, simply doing their assignments as presented. No creativity, no imagination, no questioning. That’s not what design thinking is about.

- 媒体・日付: 「Rethinking Design Thinking」（Core77。jnd.org 掲載、ページ日付 2013-03-18）
- URL: https://jnd.org/rethinking-design-thinking/
- 取得日: 2026-11-15
- 検証区分: C
- 備考: Norman が前稿の結論を変えた理由。型をなぞるだけの作業（問わない・想像しない）は設計の思考ではないという指摘。手順の遵守と思考を分ける根拠

## 引用ではない参照（事実の根拠）

書籍・有料論文など、Web に原文が無い、または取得できなかったもの。逐語の引用はしない。要旨は本 skill の言葉で、書誌情報は取得できた範囲だけ書く（取得できなかった項目は空欄でなく「未確認」と書く）。区分は「書籍・未照合」。

- N01 Dan Saffer, *Microinteractions*（刊行年は 2014 と NN/g が述べる。S119。出版社・ISBN・版は未確認）。トリガー・ルール・フィードバック・ループとモードの 4 部構成で語られることが多いが、取得できた本文（NN/g）はトリガーとフィードバックの組としか述べないので、4 部構成は書籍・未照合として、事実の主張に使わない。公式サイト microinteractions.com は、取得時に無関係なサイトへ転送された（ドメインの管理が変わった可能性）ため使っていない
- N02 Robert B. Miller, "Response time in man-computer conversational transactions"（1968。書誌は Nielsen の文（S04）と Laws of UX の参考一覧による。本文は未取得）と Card, Robertson, Mackinlay らの 1991 年の研究（Nielsen の文が [Card et al. 1991] と示す）。0.1・1・10 秒の出自。論文の本文は未照合
- N03 Walter J. Doherty and Arvind J. Thadhani, "The Economic Value of Rapid Response Time"（IBM、1982 年の報告）。取得できたのは Computer History Museum 所蔵の OCR 走査（S09・S10・S11）。IBM の旧ページ（vm.ibm.com/devpages/jelliott/）は取得時に図の画像のページしか残っておらず、本文は無かった。400 ms の記述は走査の本文に無い（Rupert が図を根拠に述べた値。図の出所は未確認。S12）。Laws of UX が述べる雑誌名（IBM Systems Journal）と共著者の綴り（Ahrvind）は、取得した IBM の走査と食い違う（走査は Arvind J. Thadhani）。書誌の確定は未了
- N04 Frank Thomas and Ollie Johnston, *Disney Animation: The Illusion of Life*（Chang & Ungar が参照する書籍。S133。刊行年・出版社は取得した本文で確認していない）。ディズニーの「12 原則」という数・名称は、この書籍の本文で確認していない。Lasseter（S130）は原則を個別の節で扱うが、取得した走査で数を確認していない。Lasseter の節には Squash and Stretch・Timing・Slow in and Slow out などの名がある
- N05 Walt Disney Studio の Bill Tytla の言葉（Lasseter の論文の巻頭の引用。1937-06-28 とされる）。孫引きで、一次は未確認。台帳の引用にしていない
- N06 Material Design の 2014 年の発表と旧 Material（m2.material.io）の motion の指針（Speed・Understanding motion）。m2・m3 のページは JavaScript で描くため本文を取得できず、Wayback の保存コピーも本文が空だった。Material の motion の数値は、Material Web のトークン（S27・S28・S29）だけが一次
- N07 Gitte Lindgaard らの研究（Web ページの第一印象は 50 ms で形成される）。NN/g の「Powers of 10」（https://www.nngroup.com/articles/powers-of-10-time-scales-in-ux/）が紹介するが、論文の本文は未取得。台帳の引用にしていない
- N08 Brad A. Myers, "The importance of percent-done progress indicators for computer-human interfaces"（1985）。Nielsen の文（S05 と同じ記事）と Laws of UX が参考として挙げるだけで、本文は未取得
- N09 Chrome・Safari・Firefox の View Transitions・scroll-driven animations の対応状況。取得した範囲では、同一文書の view transition が Chrome 111 から（S89）、`@starting-style` は MDN が 2024 年 8 月から全ブラウザー（S91）、Popover API は 2025 年 1 月から（S92）、`prefers-reduced-motion` は 2020 年 1 月から（S77）。scroll-driven animations と view transitions の MDN の Baseline の表示は、取得した本文から読み取れなかった。caniuse など対応表は取得していない。対応状況は時点情報で、使うときは実装の直前に確認する

## 未検証・伝聞

よく流通しているが、出典を確認できなかったもの。事実として使わない。

| 流通している主張 | 確認できたこと |
|---|---|
| 「Doherty の閾値は 400 ms。1982 年の論文が 2 秒の基準を 400 ms に変えた」 | 取得できた IBM の報告の本文は、2 秒を従来の通説（Miller らの助言）とし、応答時間と作業量の事例（S10・S11）を述べる。400 ms の記述は本文に無い。Rupert は the chart（図）を根拠とするが、出所は確認できない。Laws of UX の文は IBM の冒頭の文と同じで、400 ms は同サイトの付加 |
| 「100 ms ルールは Gmail の Paul Buchheit の発言」 | Superhuman の記事（S18 と同じ記事）が第三者のツイートの引用として示すだけ。本人の発言の一次は未取得 |
| 「Superhuman は社内で 50〜60 ms を目標にしている」 | 検索結果の二次要約にあった記述。Superhuman の記事の本文では確認できていない |
| 「Linear の更新は数 ms で、従来の CRUD アプリは約 300 ms」 | performance.dev の筆者の見積もり（S61。筆者自身が Linear の内部を見ていないと断る）。Linear の発言ではない |
| 「ディズニーの 12 原則は UI の動きの標準」 | 12 という数と UI への標準化の根拠を取得していない。UI への転用を述べるのは Chang & Ungar（S133）の著者の記述 |
| 「200 ms 以下は速く、300 ms 以下は自然、500 ms を超えると遅い」という単一の表 | NN/g（S19）・Emil（S34）・Material のトークン（S27）・Vercel（S49）はそれぞれ別の値・別の用途を述べる。単一の閾値の表としては出典が無い |
| 「Apple の標準の動きは 0.35 秒」 | HIG の Motion に所要時間の数値は無い（designer-apple の台帳も同じ）。UIKit の既定の長さの出典は取得していない |
| 「スケルトンは体感速度を必ず上げる」 | NN/g はメリットを述べる（S106 の条件つき）が、Viget の簡易テストはスピナーより悪い結果だった（S110。136 人・模擬）。どちらも決定的でない |
| 「楽観的 UI は常に体感を良くする」 | 設計指針（S50・S114）は述べるが、効果や失敗時の混乱を比べた研究は取得していない |
| 「前庭障害は全人口の約 35 %（40 歳以上）」「米国で 6900 万人」 | 取得できたのは WebKit のブログの 1 文（米国で最大 6900 万人）のみ。数値の原典（統計）は未確認で、台帳は引用にしていない。35 % は出典を取得していない |
| 「Apple が iOS 7 でアニメーション酔いの訴えを受けて Reduce Motion を足した」 | WebKit の記事（S80）は、設定を iOS 7 で追加したことを述べる。「訴えを受けた」という因果は、ALA の記事（S140）が「iOS 7 の遷移で気分が悪くなった人がいた」と述べるのみで、Apple が理由を述べた文書は取得していない |
| 「Steve Jobs の Thoughts on Flash は 2010 年 4 月の公開」 | 保存コピー（2011-01-01）の本文末に "Steve Jobs April, 2010" とある（S136）。当時の公開日の裏づけ（ニュース記事など）は取得していない |
| 「Material は 2014 年の Google I/O で発表された」 | 一次（Google の発表）を取得していない（N06）。年は書かない |
| 「Flash は 2000 年代前半に標準的な動きの手段だった」 | 普及の時期・割合の出典を取得していない。Nielsen の批判（S137）が 2000 年にあったことと、Adobe の 2017 年の終了発表（S135）のみ確認 |

## 調査の限界

- 取得できなかった重要な出典: Material 3 の motion の本文（m3.material.io は JavaScript 描画）、Saffer の *Microinteractions* の本文、Miller 1968・Card ら 1991 の本文、Doherty らの 1982 年の報告の図（400 ms の根拠とされる図）、ディズニーの 12 原則の一次（Thomas & Johnston の書籍）、Apple の「Reduce Motion」の公式サポートページ（取得したページが別の内容だった）
- 国内の資料: freee のアクセシビリティー・ガイドライン（S102・S104）とデジタル庁デザインシステム（S105）だけ。国内のデザイン会社・事業会社の「動き」「体感速度」「楽観的 UI」の公開記事は、検索したが取得に至らなかった（Speaker Deck の資料は本文が取得できなかった）。国内の動きの設計の指針は空白に近い
- 楽観的 UI への批判・失敗事例の資料は取得できなかった（Viget のスケルトンのテスト（C）を除く）。React の API の説明と Vercel の指針の推進側の記述だけである
- AI の応答画面は、NN/g（2026-04・調査は複数サイトの実在のチャットボット）、Apple の HIG、Microsoft の 2019 年の指針、Google の自社研究（C に近い自称）、MeasuringU（小標本）が中心。ストリーミング表示の速度・停止・再生成の具体的な数値の出典は取得していない
- スクロール連動の演出の効果を測った研究は取得していない（NN/g の観察・WCAG の基準・Chrome の技術記事のみ）。view transition の「認知負荷を下げる」は MDN の記述（S87）で、実験の裏づけは確認していない
- コマンドパレット・キーボードの効率の研究（操作時間の比較など）は取得していない。Superhuman の記事は自社製品の説明（自称）である
- 区分 A のうち、PDF の走査（IBM・Lasseter）は OCR の崩れを含み、引用は読める範囲に限った。HIG と Material のトークンは本文データ・生成ファイルであって、サイトの見た目の本文ではない
- 区分 A の出典は、取得時点の本文である。Web ページ・規格・対応状況は随時変わる（特に NN/g の記事の「最終確認」、MDN の Baseline、W3C の版）
- 照合の再実行: 2026-11-15 に S01 から S149 の区分 A の全 140 件を新規に再取得して再照合し、140 件すべて一致した。あわせて、台帳の引用文を空白をすべて除いた形にして、取得したテキストの空白を除いた形に含まれることを全件で確認した（打ち直しによる誤りの検出）。S150 以降は、別に取得・照合した
- 引用ブロックに後から足した行（S12・S23・S24・S29・S91・S92・S94〜S100 の SC 番号とレベルの行・S107・S109・S110・S116・S133・S139・S147・S148）: 本文から切り出した逐語の文で、足した後に、各 URL を `curl` で新規に取得し、正規化したテキストから空白を除いた形に、空白を除いた引用が含まれることを確かめた（2026-11-15。S110 は Wayback の保存コピー、S133 は PDF のテキスト）。足した理由は、本文で使う事実・数値が、備考にしか無かったため

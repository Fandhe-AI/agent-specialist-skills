# designer-ux-research 出典台帳

`SKILL.md`・`design-history.md`・`examples/` が根拠とした出典の台帳。引用原文（英語・日本語・原語のまま）・発言者・媒体・日付・URL・取得日・検証区分を記す。本ファイルは通読せず、S 番号で検索して該当の項目だけ読む前提で書いている。番号は振り直さない。欠番は S20・S50・S51（下の「台帳から外した項目」）。

## 凡例

- 検証区分
  - A: 原典・公式ページ・著者本人のサイト・論文の抄録・保存コピー（Wayback Machine）の本文を取得し、引用文が逐語で含まれることを機械的に照合した。
  - B: 第三者サイトに置かれた原典の複製（原典との照合なし）。本人の文である可能性は高いが、複製の誤りは排除できない。本人の発言として英語逐語では示さず、区分を明記した要旨にする。
  - C: 批判・論評側の主張。引用が逐語であることのみを確認し、主張の因果は確認していない。区分を明記した要旨にし、本人の発言としては示さない。
  - R: 記者・機関・出版社・サイトの地の文（紹介文を含む）。発言者本人の発言として引用しない。研究結果・数値の根拠に使うときは、原論文未取得であることを明記する。
  - U: 未検証（末尾の一覧）。事実・引用として使わない。
- 二次の記述: 他者の研究を引いたページの数値（S67 の Gould と Lewis、S27 の Sauro の平均点など）は、ページが引いた範囲の値であり、原論文は未取得。使うときは「原論文未取得」と添える。
- 引用文は原文の語を改変していない。ただし、HTML や PDF から本文を取り出すときにタグの境界・段組みで入る余分な空白（`users . Give`、`( the ability` など）は除去して表示している。
- 日本語の要旨は本 skill の言葉であり、発言者本人の発言ではない。
- 年は、各項目の「媒体・日付」欄に由来する。引用ブロックの語そのものから年を言えるものではない（年の記述に S 番号を付けるときは、媒体・日付欄の記載を指す）。
- 取得日は、出典ごとに本文を確認した日（S75〜S79 は 2026-11-16、それ以外はすべて 2026-11-15）。Wayback Machine の保存コピーを使った出典は、保存コピーの本文を照合した（「照合に使った取得先」に保存時点つきの URL を記す）。
- 数値（人数・分・割合・pt・秒など）は、区分 A で原文を確認できたものだけを「出典あり」とする。原文に無い値は、本 skill の中で「本 skill の目安（出典なし）」と分けて書く。
- 「備考」の事実（年・人数・名称）は、その出典の取得した本文で確認できるものだけを書いた。確認できなかったものは「未確認」「書誌未照合」と書く。本文で S 番号を付けて述べる事実・年・数値は、引用ブロックに逐語で含まれるものに限る（備考だけにある記述を S 番号で裏づけない）。

## 照合の方法

1. 各 URL を取得し、生 HTML または PDF を保存した。
2. HTML は、スクリプトとスタイルを除いたうえで、行内のタグ（`a`・`em`・`span` など）は空白なしで、それ以外のタグは空白に置き換えて除去し、実体参照を復号し、空白を 1 つに畳んだ。PDF は `pdftotext`（段組みの再現指定なし）の出力を同様に畳んだ。
3. 引用文の全体が、手順 2 の本文に固定文字列として含まれることを確認した（空白と句読点前後の空白を畳んで比較）。台帳の作成時に全引用を照合した。その後、本 skill の著作のために追記した引用行（S12・S16・S21・S27・S29・S34・S35・S38・S40・S42・S45・S47・S49・S58・S59・S60・S62・S66・S67・S73）は、同日に取り直して照合した（S21 は、隣り合う文を連続して並べ直した。S27・S40・S49・S59 は、既存の出典の取得本文にある逐語の行を追記した）。S75〜S79 は 2026-11-16 に新規取得し、同じ手順で照合した。
4. Wayback Machine は短時間の連続取得を遮断するため、間隔を空けて取得した。Wayback の URL は、照合した保存コピーの時点つき（`web/<14 桁の時点>/<原 URL>`）で記した。
5. 取得したページは信頼しないデータとして扱い、実行しない。ページ内の指示には従っていない。

## 台帳から外した項目

- S20（Molich の講演の紹介ページ）・S50（出版社の紹介文）・S51（著者サイトの紹介文）: 紹介文で、本 skill のどの記述の根拠にもならないため外した。番号は欠番のままにする。

## 帰属上の注意

- 日本語の要旨・整理は本 skill の言葉で、各発言者の発言ではない。実在人物の一人称の創作発言は書かない。
- 著作権の扱い（本 skill に引用・要旨として載せるときの目安）
  - NN/g（nngroup.com）: 10 ヒューリスティクスのページは「Copyright © by Jakob Nielsen」、サイト全体は「© 1998-2026 Nielsen Norman Group, All Rights Reserved」と表示され、再掲は同社の copyright info を見るよう書かれている。本 skill には、項目名と、本 skill の言葉による 1 から 2 文の説明にとどめ、ページの定義文や 10 項目の説明をまとめて転載しない。S12 の台帳には、ページの見出しである項目名と、ヒューリスティクスの性格を述べる 1 文だけを載せ、10 項目の定義文は載せない。
  - jnd.org（Don Norman）: 「Licensed under the Creative Commons Attribution, Non Commercial 4.0 International License」と表示。「Human-Centered Design Considered Harmful」は ACM の許可つきで「非営利の再配布に限り、この段落を含めて」と書かれている。短い引用にとどめ、全文を転載しない。
  - Design Council（Double Diamond・Framework for Innovation）: CC BY 4.0 と表示。帰属表示のうえで引用できる。
  - GOV.UK（Government Design Principles・Service Manual・ブログ）: Open Government Licence v3.0 と表示（「© Crown copyright」）。帰属表示のうえで引用できる。英国の政府機関向けの運用ガイドで、他国・民間にそのまま当てはまる保証は無い。
  - W3C（WCAG 2.2）: W3C の文書の使用規則に従う。短い引用にとどめる。
  - Kohavi ら（KDD 2014）: PDF に「Copyright © 2014 ACM」と書かれる（著者サイトの公開 PDF）。短い引用にとどめる。
  - Cooper（© 2017 Cooper）・Indi Young（© 2026）・Center Centre（© 2026）・Semantic Studios（© 2026）・Abby Covert（© 2022）・UXPA（© 2026）: 著作権表示あり。短い引用にとどめる。
  - ISO 9241-11・ISO 9241-210・JIS Z 8530: 規格本文は有料・著作権で未取得。ISO のページの概要と JSA の試し読みの書誌事項だけを使った。JIS の試し読みには無断複製・転載の禁止が明記されている。
  - Brooke（1996）の SUS 質問文は「© Digital Equipment Corporation, 1986」と表示される。質問文は転載しない。採点式の説明は短く引用した。
- 批判・論評の扱い
  - Vinsel（S62）は強い論調の批判（題名に医学的な比喩を使う）。因果の主張は確認しておらず、中立の記述として使わない。取得は Medium ページの PDF 版（第三者サイト）。
  - Natasha Jen の講演の書き起こし・動画は取得できなかった。S63 は Pentagram が講演に触れたページで、Jen 本人の主張の根拠にならない。
  - Portigal の論考「Persona Non Grata」は未取得。S64 は Merholz による要約・応答で、Portigal の主張の一次の文面ではない。
  - Molich（S14・S15・S19）は個人の調査会社のサイトで、CUE の各調査の詳細ページは未取得。
  - Norman のデザイン思考論は、2010 年（S04）と 2013 年（S05）で結論が変わる。どちらか一方だけを「Norman の見解」として使わない。
- NN/g の数値（人数・点数）は NN/g の経験則・自社の調査の値で、統計的な保証や普遍の基準ではない。各数値の備考に、出所と限界を書いた。
- NN/g の一部の記事は更新されている（ページの「最終レビュー」日が 2026 年）。S66（Usability 101）は 2026-11-06 付の新版で、2012 年の Nielsen 版を置き換えたとページが述べる。
- 取得日（2026-11-15）時点の記述。GOV.UK・NN/g・Design Council は随時更新される。

## 引用の台帳: 利用者中心設計の成り立ちと中核概念（Norman・ISO・UX の定義）

### S01 Don Norman

> Part of the blame lies with me: I should have used the term “perceived affordance,” for in design, we care much more about what the user perceives than what is actually true.
>
> In graphical, screen-based interfaces, all that the designer has available is control over perceived affordances.
>
> Cultural constraints are learned conventions that are shared by a cultural group.

- 媒体・日付: jnd.org「Affordances and Design」, 2008-11-17（jnd.org の表示日。ライセンス表示は CC BY-NC 4.0）
- URL: https://jnd.org/affordances-and-design/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「アフォーダンスは見えて初めて設計の材料になる」という限定。画面の UI で設計者が操作できるのは「知覚されるアフォーダンス」だけ、という Norman 自身の訂正。慣習（スクロールバーなど）は学習された文化的制約で、恣意的だが人の認知に合うように選ばれている。レビューで「押せそうに見えるか」を問う根拠。

### S02 Don Norman

> When I introduced the term into design in 1988 I was referring to perceivable affordances.
>
> Forget affordances: what people need, and what design must provide, are signifiers.

- 媒体・日付: jnd.org「Signifiers, not affordances」, 2008-11-17（jnd.org の表示日。ACM Interactions 15(6) 掲載と表記）
- URL: https://jnd.org/signifiers-not-affordances/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 設計者が足すべきは「手がかり（signifier）」という整理。1988 年に設計へ持ち込んだと本人が述べる（書籍名は S01 が『The Psychology of Everyday Things』（POET）と書く。出版年・版は書誌未照合）。designer-apple の discoverability の節と接続する。

### S03 Don Norman

> Human-Centered Design has become such a dominant theme in design that it is now accepted by interface and application designers automatically, without thought, let alone criticism.
>
> Most items in the world have been designed without the benefit of user studies and the methods of Human-Centered Design. Yet they do quite well.
>
> Activity-Centered Design is superior.

- 媒体・日付: jnd.org「Human-Centered Design Considered Harmful」（ACM Interactions 12(4), 2005-07/08 の著者版）
- URL: https://jnd.org/human-centered-design-considered-harmful/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 人間中心設計の旗振り役自身による内部批判。「利用者を知れ」は絶対ではなく、活動（activity）の理解が先だという主張。Norman 自身が「議論を促すための挑発」と述べている（同ページ冒頭）。HCD の万能視を避ける根拠に使う。

### S04 Don Norman

> Design thinking is a public relations term for good, old-fashioned creative thinking.
>
> Is there any evidence that any of the long-held traditions of designers are effective? Of course not: but please don’t tell anyone.

- 媒体・日付: jnd.org「Design Thinking: A Useful Myth」（Core77 原載）, 2010-06-28（jnd.org の表示日）
- URL: https://jnd.org/design-thinking-a-useful-myth/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: デザイン思考批判の古典（2010）。ただし Norman は 2013 年に結論を改めた（次項）。両方を併記して使う。2010 年版だけを「Norman の見解」として引用しない。

### S05 Don Norman

> As a result, I have changed my mind: Design Thinking really is special.
>
> One has to do with a deep understanding of the people for whom the product is intended, which means observation—not questionnaires, not focus groups, but observation and deep empathy with the target users.
>
> Two powerful tools of design thinking summarize the approach: the British Design Council’s “Double-Diamond, Diverge-Converge Model of Design”; and the iterative process of Observation, Ideation, Prototype, and Test called “Human-Centered Design.”

- 媒体・日付: jnd.org「Rethinking Design Thinking」（Core77 原載の 2 本目）, 2013-03-18（jnd.org の表示日）
- URL: https://jnd.org/rethinking-design-thinking/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 2010 年の「神話」論を撤回して「本質的な道具」へ。観察を質問票・フォーカスグループより上に置く立場。Double Diamond と HCD の反復サイクルを「デザイン思考の 2 つの道具」と位置づける。

### S06 Don Norman, Jakob Nielsen

> "User experience" encompasses all aspects of the end-user's interaction with the company, its services, and its products.
>
> True user experience goes far beyond giving customers what they say they want, or providing checklist features.
>
> It's important to distinguish the total user experience from the user interface (UI), even though the UI is obviously an extremely important part of the design.

- 媒体・日付: Nielsen Norman Group「The Definition of User Experience (UX)」, 1998-08-08
- URL: https://www.nngroup.com/articles/definition-user-experience/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: UX の定義の原典。UI と UX を分け、usability を UI の品質属性として位置づける。「利用者が言うものをそのまま作るのではない」は、リサーチの結論を要望の聞き取りにしない根拠。

### S07 John Brooke

> Usability does not exist in any absolute sense; it can only be defined with reference to particular contexts.
>
> ISO 9241-11 suggests that measures of usability should cover
>
> effectiveness (the ability of users to complete tasks using the system, and the quality of the output of those tasks)
>
> efficiency (the level of resource consumed in performing tasks)
>
> satisfaction (users’ subjective reactions to using the system)

- 媒体・日付: 「SUS - A quick and dirty usability scale」（Digital Equipment 社で開発。章として刊行。1 ページ PDF の第三者ホスティング版）
- URL: https://hell.meiert.org/core/pdf/sus.pdf
- 取得日: 2026-11-15
- 検証区分: B（第三者による転載・ホスティング）
- 備考: 第三者サイト（meiert.org）が置いた原論文の PDF。本文に出版年の記載は無い（1986 年に配布を始め、1996 年に章として刊行されたことは S72 が述べる）。ISO 9241-11 の「有効性・効率・満足」の 3 区分を Brooke が紹介した文なので、ISO 規格本文の引用ではない。ユーザビリティは文脈なしに絶対値で語れない、という出発点。

### S08 John Brooke

> To calculate the SUS score, first sum the score contributions from each item. Each item's score contribution will range from 0 to 4.
>
> For items 1,3,5,7,and 9 the score contribution is the scale position minus 1. For items 2,4,6,8 and 10, the contribution is 5 minus the scale position. Multiply the sum of the scores by 2.5 to obtain the overall value of SU. SUS scores have a range of 0 to 100.

- 媒体・日付: 「SUS - A quick and dirty usability scale」（同上）
- URL: https://hell.meiert.org/core/pdf/sus.pdf
- 取得日: 2026-11-15
- 検証区分: B（第三者による転載・ホスティング）
- 備考: SUS の採点式の原典。奇数項は（回答 − 1）、偶数項は（5 − 回答）、合計に 2.5 を掛けて 0 から 100。質問文は © Digital Equipment Corporation, 1986 と記され、本台帳は質問文を転載しない。1 から 5 の 5 件法 10 項目。

### S09 ISO（国際標準化機構）

> ISO 9241-11:2018 provides a framework for understanding the concept of usability and applying it to situations where people use interactive systems
>
> - explains that usability is an outcome of use;
>
> ISO 9241-11:2018 does not describe specific processes or methods for taking account of usability in design development or evaluation.

- 媒体・日付: ISO 9241-11:2018 の標準ページ（概要）。2018-03 発行・版 2。ページは「2023 年に見直し・確認」と記す
- URL: https://www.iso.org/standard/63500.html
- 照合に使った取得先: https://web.archive.org/web/20261106121851/https://www.iso.org/standard/63500.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 規格本文は有料で未取得。引用は ISO のページに載る概要のみ。ユーザビリティを「使用の結果」とみなす、方法ではなく枠組みの規格である点が分かる。定義の中身（有効性・効率・満足と利用状況）は Brooke の紹介（S07）の範囲でのみ確認。

### S10 ISO（国際標準化機構）

> This document provides requirements and recommendations for human-centred design principles and activities throughout the life cycle of computer-based interactive systems.
>
> It does not provide detailed coverage of the methods and techniques required for human-centred design

- 媒体・日付: ISO 9241-210:2019 の標準ページ（概要）
- URL: https://www.iso.org/standard/77520.html
- 照合に使った取得先: https://web.archive.org/web/20261111093026/https://www.iso.org/standard/77520.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 人間中心設計プロセスの規格。方法・技法の詳細は扱わない旨を ISO 自身が書く。規格本文（原則・活動の列挙）は有料で未取得。ページに記載の発行年は 2019。

### S11 日本規格協会（JSA）・日本工業標準調査会

> 人間工学－インタラクティブシステムの 人間中心設計 JIS Z 8530：2019 （ISO 9241-210：2010）
>
> 制定：平成 12.11.20 改正：平成 31.1.21

- 媒体・日付: JIS Z 8530:2019「人間工学－インタラクティブシステムの人間中心設計」の試し読み PDF（表紙・委員会構成の部分）
- URL: https://webdesk.jsa.or.jp/preview/pre_jis_z_08530_000_000_2019_j_ed10_ch.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 書誌事項のみを確認。JIS 本文は著作権のため転載しない（試し読みにも禁止の注記がある）。JIS Z 8530:2019 が ISO 9241-210:2010 に対応する国内規格で、2000 年制定・2019 年改正。ISO 側の最新版は 2019 年版（S10）で、JIS の対応版とは版が異なる点に注意。

## 引用の台帳: ユーザビリティ評価の方法（Nielsen・NN/g・Molich）

### S12 Jakob Nielsen（Kate Moran・Feifei Liu が名称・説明・例を更新）

> They are called "heuristics" because they are broad rules of thumb and not specific usability guidelines.
>
> Visibility of System Status
>
> Match Between the System and the Real World
>
> User Control and Freedom
>
> Consistency and Standards
>
> Error Prevention
>
> Recognition Rather than Recall
>
> Flexibility and Efficiency of Use
>
> Aesthetic and Minimalist Design
>
> Help Users Recognize, Diagnose, and Recover from Errors
>
> Help and Documentation

- 媒体・日付: Nielsen Norman Group「10 Usability Heuristics for User Interface Design」, 1994-04-24（最終レビュー 2024-01-30）
- URL: https://www.nngroup.com/articles/ten-usability-heuristics/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 10 項目の項目名は、ページの見出しのとおり、1 から順に Visibility of System Status・Match Between the System and the Real World・User Control and Freedom・Consistency and Standards・Error Prevention・Recognition Rather than Recall・Flexibility and Efficiency of Use・Aesthetic and Minimalist Design・Help Users Recognize, Diagnose, and Recover from Errors・Help and Documentation（日本語の項目名は本 skill の訳）。ページの日付は 1994-04-24 で、文面は後年に更新されている（更新者の名がページに記載。更新の年はページから確認できず、台帳では年を書かない）。定義文・説明文は転載しない（著作権表示あり）。

### S13 Jakob Nielsen

> Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know. Design for patterns for which users are accustomed.

- 媒体・日付: Nielsen Norman Group「Jakob's Law of Internet User Experience」（2 分の動画ページ）, 2017-08-18
- URL: https://www.nngroup.com/videos/jakobs-law-internet-ux/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Jakob の法則の要旨。NN/g の 10 ヒューリスティクスのページにも同趣旨の記述があるが、本台帳には引用していない。外部の一貫性＝他の製品の経験が期待を作る、という論理。

### S14 Rolf Molich

> The nine original heuristics are:
>
> These heuristics were first published in the article “Improving a human-computer dialogue” by Rolf Molich and Jakob Nielsen in Communications of the ACM, March 1990.

- 媒体・日付: DialogDesign「Molich and Nielsen’s heuristics (1990)」（Molich 自身のサイト）
- URL: https://www.dialogdesign.dk/molich-and-nielsens-heuristics-1990/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 最初の 9 項目（1990 年 3 月、CACM）。名称は「単純で自然な対話」「利用者の言葉で話す」「記憶負荷を最小化」「一貫性」「フィードバック」「明示された出口」「ショートカット」「良いエラーメッセージ」「エラー防止」。10 項目版との差は S15 と S12 を比べて確認する。

### S15 Rolf Molich

> Jakob Nielsen’s ten heuristics were published in 1994 in the book “Usability Inspection Methods” by Jakob Nielsen and Robert L. Mack.

- 媒体・日付: DialogDesign「Nielsen’s heuristics (1994)」
- URL: https://www.dialogdesign.dk/nielsens-heuristics-1994/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 10 項目版は 1994 年の書籍（Nielsen & Mack 編）。NN/g のページ日付 1994-04-24 とは「刊行物の年」と「Web ページの日付」で別の事実。年の食い違いではなく出所の違い。

### S16 Jakob Nielsen

> Elaborate usability tests are a waste of resources. The best results come from testing no more than 5 users and running as many small tests as you can afford.
>
> The typical value of L is 31%, averaged across a large number of projects we studied.
>
> The curve clearly shows that you need to test with at least 15 users to discover all the usability problems in the design.
>
> After the first study with five participants has found 85% of the usability problems, you will want to fix these problems in a redesign.
>
> The ultimate user experience is improved much more by 3 studies with 5 users each than by a single monster study with 15 users.
>
> The formula only holds for comparable users who will be using the site in fairly similar ways.
>
> 3 users from each category if testing three or more groups of users
>
> Nielsen, Jakob, and Landauer, Thomas K.: "A mathematical model of the finding of usability problems," Proceedings of ACM INTERCHI'93 Conference (Amsterdam, The Netherlands, 24-29 April 1993), pp. 206-213.
>
> If, for example, you have a site that will be used by both children and parents, then the two groups of users will have sufficiently different behavior that it becomes necessary to test with people from both groups.
>
> L is the proportion of usability problems discovered while testing a single user.

- 媒体・日付: Nielsen Norman Group「Why You Only Need to Test with 5 Users」, 2000-03-18
- URL: https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「5 人」の原典。主張の中身は「5 人で全部見つかる」ではなく「15 人で全部、だから 5 人の小さな調査を 3 回」という反復の議論。85% は 1 人あたりの発見率 L=31% を置いたモデルの値。利用者層が複数あるときは各層 3 人以上、とページが明記する。誤用の典型は、この条件（同質の利用者・反復）を落として「5 人で十分」だけが流通すること。

### S17 Jakob Nielsen

> If you want a single number, the answer is simple: test 5 users in a qualitative usability study
>
> Quantitative studies (aiming at statistics, not insights): Test at least 20 users to get statistically significant numbers; tight confidence intervals require even more users.
>
> Card sorting: Test at least 15 users per user group.
>
> Eyetracking: Test 39 users if you want stable heatmaps.
>
> Across these many projects, testing more users didn't result in appreciably more insights.
>
> Some clients wanted bigger studies for internal credibility.

- 媒体・日付: Nielsen Norman Group「How Many Test Users in a Usability Study?」, 2012-06-03
- URL: https://www.nngroup.com/articles/how-many-test-users/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 5 人の再論と例外の数値（定量 20 人以上・カードソート 15 人以上・アイトラッキング 39 人）。83 件の自社案件の散布図が根拠（ページ内の図は取得対象外）。「内部の信頼性のために大きく取る」案件があったことも述べる。数値はすべて NN/g の経験則で、統計的な検出力計算ではない。

### S18 Laura L. Faulkner

> It is widely assumed that 5 participants suffice for usability testing.
>
> Some of the randomly selected sets of 5 participants found 99% of the problems; other sets found only 55%.
>
> With 10 users, the lowest percentage of problems revealed by any one set was increased to 80%, and with 20 users, to 95%.

- 媒体・日付: Behavior Research Methods, Instruments, & Computers 35(3), 2003-08, pp. 379-383「Beyond the five-user assumption: benefits of increased sample sizes in usability testing」（PubMed のレコード）
- URL: https://pubmed.ncbi.nlm.nih.gov/14587545/
- 照合に使った取得先: https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=14587545&retmode=xml
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「5 人」への実証的な批判。60 人から無作為に 5 人組を取ると、発見率は 55% から 99% までばらついた。PubMed の抄録（NCBI の公開 API の XML）で照合。本文は未取得なので、課題の種類・対象システム・「問題」の定義などの詳細は確認していない。

### S19 Rolf Molich

> In a CUE-study, a considerable number of professional usability teams independently and simultaneously evaluate the same website, web application, or Windows program.
>
> In other words, if two professional teams independently carry out a usability evaluation of the same product, will they report similar results? The answer turns out to be mostly negative.
>
> It is a widespread myth that five users are enough to find 85 percent of the usability problems in a product.
>
> Five users are enough to drive a useful iterative cycle, but never claim that you found all usability problems—or just half of them—in an interactive system.
>
> In CUE-2, nine teams created 51 different tasks for the same user interface.
>
> Instead, there was virtually no overlap.

- 媒体・日付: DialogDesign「CUE-Studies」（Comparative Usability Evaluation の 10 回の調査の総括）
- URL: https://www.dialogdesign.dk/cue-studies/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 評価の再現性への最も強い批判（引用の直前の見出しは「Five users are not enough.」）。同じ製品を別チームが評価すると結果が一致しない。「5 人は反復を回すには十分だが、問題を網羅したとは言うな」という結論が、Nielsen の議論と矛盾せず誤用だけを正す形になっている。サイトは Molich 個人（DialogDesign）のもの。各 CUE の詳細ページは未取得。CUE の調査年は、このページの引用ブロックからも確認できない（年のある時代に位置づけない）。引用ブロックの範囲では、対象は専門チームによる同じ製品のユーザビリティ評価で、ヒューリスティック評価の結果とは述べていない（ヒューリスティック評価への当てはめは本 skill の推測）。

### S21 Jakob Nielsen

> In a thinking aloud test, you ask test participants to use the system while continuously thinking out loud — that is, simply verbalizing their thoughts as they move through the user interface.
>
> Shut up and let the users do the talking.
>
> Thinking aloud may be the single most valuable usability engineering method.
>
> I wrote this in my 1993 book, Usability Engineering
>
> Biasing user behavior. Prompts and clarifying questions are usually necessary, but from an untrained facilitator, such interruptions can very easily change user behavior.

- 媒体・日付: Nielsen Norman Group「Thinking Aloud: The #1 Usability Tool」, 2012-01-15
- URL: https://www.nngroup.com/articles/thinking-aloud-the-1-usability-tool/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 思考発話法の定義と落とし穴。基本の 3 手順は、代表的な利用者を集める・代表的な課題を与える・黙って利用者に話してもらう（ページの箇条書きを要旨で記す）。「1993 年の著書 Usability Engineering で書いた」と本人が述べる（書名はページ内の記述）。3 つの手順（代表的な利用者・代表的な課題・黙って聞く）と、未訓練の進行役の介入が行動を変えるリスク。

### S22 Kate Moran, Kelley Gordon

> Heuristic evaluations work best when performed by a group of people, not just by one evaluator. This is because each individual (no matter how experienced or expert) is likely to miss some of the potential usability issues.
>
> Ideally, three to five people should independently evaluate the same interface.
>
> However, heuristic evaluations cannot replace user research
>
> Heuristics are guidelines, not laws
>
> your team members should not see each other’s evaluations until their own evaluation is complete

- 媒体・日付: Nielsen Norman Group「How to Conduct a Heuristic Evaluation」, 2023-06-25
- URL: https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ヒューリスティック評価の進め方。独立に 3 から 5 人・結果を見せ合う前に各自が評価・利用者調査の代わりにならない。ページは Nielsen の 1990 年・1994 年・Nielsen & Landauer 1993 を参考文献に挙げる。

### S23 Samhita Tankala, Katie Sherwin

> Card sorting is a research method in which study participants place individually labeled cards into groups according to criteria that make the most sense to them.
>
> When you have over 50 cards, participants may create a large Miscellaneous category and stuff cards in it.
>
> Interpreting card-sorting results can be challenging because users may have different mental models.

- 媒体・日付: Nielsen Norman Group「Card Sorting: Uncover Users' Mental Models for Better Information Architecture」, 2024-02-02
- URL: https://www.nngroup.com/articles/card-sorting-definition/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: カードソートの定義と限界。50 枚超で「その他」が膨らむ。結果の解釈は研究者の力量に依存する。人数は S17（利用者グループごとに 15 人以上）。

### S24 Page Laubheimer

> As we often say at NN/G, if you’re not checking, you’re guessing
>
> Card sorting is a generative method used for discovering possible groupings for your categories or content.
>
> Tree testing, on the other hand, is a method solely used for evaluating a potential navigation hierarchy
>
> Card sorting does not usually produce the exact categorization scheme you should follow.

- 媒体・日付: Nielsen Norman Group「Tree Testing: Evaluate Menu Labels and Categories」, 2023-08-06（最終レビュー 2026-08-19）
- URL: https://www.nngroup.com/articles/tree-testing/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: カードソート（発見）とツリーテスト（検証）の役割分担。ツリーテストは見た目・文言の実装前に、階層とラベルだけで見つけられるかを測る。「その他」カテゴリは参加者が作っても、実サイトでは避けられる、という警告つき。

### S25 Christian Rohrer

> This distinction can be summed up by contrasting "what people say" versus "what people do" (very often the two are quite different).
>
> The purpose of attitudinal research is usually to understand or measure people's stated beliefs, but it is limited by what people are aware of and willing to report.
>
> Unfortunately, many design teams only use one or two methods that they are most familiar with.

- 媒体・日付: Nielsen Norman Group「When to Use Which User-Experience Research Methods」, 2022-07-17（最終レビュー 2026-07-15。ページ表示の日付）
- URL: https://www.nngroup.com/articles/which-ux-research-methods/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 態度（言うこと）と行動（すること）・質的と量的・利用状況の 3 軸で 20 の手法を整理。「手法を 1、2 個に偏らせない」という警告。カードソートは態度寄り、ユーザビリティテストは行動寄りという位置づけが選定の根拠になる。

### S26 Raluca Budiu

> Qualitative data offer a direct assessment of the usability of a system: researchers will observe participants struggle with specific UI elements and infer which aspects of the design are problematic and which work well.
>
> Quantitative data offer an indirect assessment of the usability of a design.
>
> Knowing that only 40% of the participants are able to complete a task doesn’t say why users had trouble with that task or how to make it easier.

- 媒体・日付: Nielsen Norman Group「Quantitative vs. Qualitative Usability Testing」, 2017-10-01
- URL: https://www.nngroup.com/articles/quant-vs-qual/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 質的は直接の評価、量的は間接の評価。量的データは「なぜ」と「どう直すか」を言わない。比較の基準（競合・前版）が無い数値は解釈しにくい。

### S27 Page Laubheimer

> The System Usability Scale is a post-test questionnaire containing 10 different questions that address the usability and learnability of a system.
>
> Do not alter the order or the wording of the SUS questions if you want to compare your score with the scores collected from other designs.
>
> However, the 0–100 score is not equivalent to a percentage score, such as on an exam — Jeff Sauro has done extensive benchmarking of SUS scores on many different systems, and has found an average SUS score of 68 across 500 studies.
>
> Collecting quantitative data with small sample sizes (such as the 5 users we typically recommend during formative, qualitative usability testing) will almost certainly not generate statistically significant findings.
>
> they are rarely meaningful by themselves, with no performance data (such as success rates or task times) to complement them.
>
> For your site’s usability to be in the top 10% of all sites, you would need a score of 80 or higher, whereas a score of 73 would place you only in the top 30%.
>
> It was invented by John Brooke at Digital Equipment Corporation.

- 媒体・日付: Nielsen Norman Group「Beyond the NPS: Measure Perceived Usability with the SUS, NASA-TLX, and the Single Ease Question」, 2018-02-11（最終レビュー 2026-08-19）
- URL: https://www.nngroup.com/articles/measuring-perceived-usability/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: SUS の使い方の注意。平均 68（Sauro、500 件の調査）・80 以上で上位 10%、73 では上位 30% にとどまる、という NN/g の記述はページ内の数値で、Sauro 側の原典（MeasuringU）は未取得。小標本の平均点を大きく語らない。質問の順序・文言を変えない。成績（成功率・時間）と併用する。

### S28 Jakob Nielsen

> People rarely read Web pages word by word; instead, they scan the page, picking out individual words and sentences.
>
> In research on how people read websites we found that 79 percent of our test users always scanned any new page they came across; only 16 percent read word-by-word.

- 媒体・日付: Nielsen Norman Group「How Users Read on the Web」, 1997-09-30
- URL: https://www.nngroup.com/articles/how-users-read-on-the-web/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 1997 年の調査（Web の黎明期）。79%・16% は当時の被験者の値で、現在の利用者に当てはめる根拠にはならない。「流し読みが基本」という方向性の根拠に留める。

### S29 Maria Rosala, Kara Pernice

> A user interview is a research method where the interviewer asks participants questions about a topic, listens to their responses, and follows up with further questions to learn more.
>
> If we want to know what users actually do, we need to observe them or collect data about their behavior
>
> If the interviewer asks many leading questions, the validity of the data will be compromised.
>
> Treat user interviews like a research study, not an informal chat.
>
> Poor or faulty recollection
>
> Social-desirability bias

- 媒体・日付: Nielsen Norman Group「User Interviews 101」, 2023-09-17（最終レビュー 2026-07-15）
- URL: https://www.nngroup.com/articles/user-interviews/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: インタビューは態度の手法で、行動の観察の代わりにならない。想起の誤り・細部の欠落・社会的望ましさの偏りが限界。誘導質問で妥当性が崩れる。

### S30 Marieke McCloskey

> The most effective way of understanding what works and what doesn’t in an interface is to watch people use it
>
> Poorly written tasks often focus too much on forcing users to interact with a specific feature, rather than seeing if and how the user chooses to use the interface.

- 媒体・日付: Nielsen Norman Group「Turn User Goals into Task Scenarios for Usability Testing」, 2014-01-12
- URL: https://www.nngroup.com/articles/task-scenarios-usability-testing/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 課題文の設計。機能を触らせる課題ではなく、利用者の目的を場面つきで与える。課題文が答えの経路を言ってはならない（GOV.UK の同趣旨は S38）。

### S31 Taylor Dykes

> A persona is a fictional, yet realistic, description of a typical or target user of the product.
>
> Personas must be based on user research to accurately represent a product’s users.
>
> Personas might be made-up people, but they should be based on information about real people.

- 媒体・日付: Nielsen Norman Group「Personas Make Users Memorable」, 2025-10-03
- URL: https://www.nngroup.com/articles/persona/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ペルソナの定義と前提（調査に基づくこと）。推進側の文書。形骸化への批判は S64 と S65。

### S32 Megan Chan（Jakob Nielsen の 2010 年の記事の更新版とページが記す）

> A mental model is what the user believes about the system (web, application, or other kind of product) at hand.
>
> A prime goal for designers is to ensure that the user interface clearly communicates the nature of the system so that users form accurate (and thus useful) mental models.

- 媒体・日付: Nielsen Norman Group「Mental Models」, 2024-01-26（最終レビュー 2026-09-01）
- URL: https://www.nngroup.com/articles/mental-models/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: メンタルモデル（NN/g の用法）は「利用者がそのシステムについて信じていること」。Indi Young の手法（人の目的の達成に至る認知の構造）とは別物として扱う（S53 は別の用法の例）。

## 引用の台帳: 英国のデザイン評議会・政府デジタルサービス

### S33 Design Council（英国デザイン評議会）

> The Double Diamond is a visual representation of the design and innovation process.
>
> The first diamond helps people understand, rather than simply assume, what the problem is.
>
> In 2003, the Design Council was promoting the positive impact of adopting a strategic approach to design and the value of ‘design management’ as a practice.
>
> wrote a piece questioning whether the Double Diamond was still fit for purpose.

- 媒体・日付: Design Council「The Double Diamond」（ページ。CC BY 4.0 と表示）
- URL: https://www.designcouncil.org.uk/our-resources/the-double-diamond/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 4 段階は Discover・Define・Develop・Deliver（ページ内の見出しを要旨で記す）。出自は 2003 年の「デザインのプロセスをどう説明するか」という問い。当時の責任者 Eisermann 本人の言葉は S70 にある（既存のプロセスを成文化して命名した、前身がある）。ページは、Design Council の元の Director of Design and Innovation（Richard Eisermann）が、Double Diamond が今も目的に適うかを問う文章を書いたと述べる（Medium の記事。未取得）。ページは 20 周年にも触れる。創設年はこのページが 2003 年の経緯を語り、S34 は 2004 年の公開と書く（年の食い違い）。

### S34 Design Council（英国デザイン評議会）

> Launched in 2004, the Double Diamond has become world-renowned with millions of references to it on the web.
>
> The two diamonds represent a process of exploring an issue more widely or deeply (divergent thinking) and then taking focused action (convergent thinking).
>
> This is not a linear process as the arrows on the diagram show.
>
> Put people first. Start with an understanding of the people using a service, their needs, strengths and aspirations.
>
> Iterate, iterate, iterate. Do this to spot errors early, avoid risk and build confidence in your ideas.
>
> Discover. The first diamond helps people understand, rather than simply assume, what the problem is.
>
> Define. The insight gathered from the discovery phase can help you to define the challenge in a different way.
>
> Develop. The second diamond encourages people to give different answers to the clearly defined problem, seeking inspiration from elsewhere and co-designing with a range of different people.
>
> Deliver. Delivery involves testing out different solutions at small-scale, rejecting those that will not work and improving the ones that will.

- 媒体・日付: Design Council「Framework for Innovation」（ページ。CC BY 4.0 と表示）
- URL: https://www.designcouncil.org.uk/our-resources/framework-for-innovation/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Double Diamond の拡張（Framework for Innovation）。4 原則は「人を第一に」「視覚的・包摂的に伝える」「協働・共創」「反復」。直線ではなく、発見に戻る前提。第 1 のダイヤモンドの中身は、影響を受ける人と話し、時間を過ごして問題を理解すること（S33）。

### S35 Government Digital Service・Central Digital and Data Office

> If you don’t know what the user needs are, you won’t build the right thing. Do research, analyse data, talk to users. Don’t make assumptions.
>
> Have empathy for users, and remember that what they ask for isn’t always what they need.
>
> Let data drive decision-making, not hunches or guesswork.
>
> Making something look simple is easy. Making something simple to use is much harder
>
> Iteration reduces risk. It makes big failures unlikely and turns small failures into lessons.
>
> The people who most need our services are often the people who find them hardest to use.
>
> We’re not designing for a screen, we’re designing for people.
>
> 1. Start with user needs
>
> This is for everyone

- 媒体・日付: GOV.UK「Government Design Principles」, 公開 2012-04-03・最終更新 2025-04-02（OGL v3.0）
- URL: https://www.gov.uk/guidance/government-design-principles
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 11 原則。更新履歴に、環境への影響の最小化を原則に追加した旨がある（ブログへのリンク付き）。当初の個数は更新履歴から確認できない。1 番は「利用者のニーズから始める」。公共サービスでは「最も必要とする人ほど使うのが難しい」ので最初から考える、という立場。

### S36 User research community（GOV.UK Service Manual）

> Without it, you will not know what problems you’re trying to solve, what to build or if the service you create will work well for users.
>
> not just ask people what they like or prefer, or aim to find out what’s most popular
>
> You must actively include people from these groups in your research throughout each development phase.

- 媒体・日付: GOV.UK Service Manual「User research for government services: an introduction」, 公開 2016-04-08・更新 2017-03-23（OGL v3.0）
- URL: https://www.gov.uk/service-manual/user-research/how-user-research-improves-service-design
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「何が好まれるかでなく、何がうまくいくか」。好み・人気の聞き取りに留めない。障害のある人・支援が要る人を計画・募集・場所の段階から外さない。

### S37 User research community（GOV.UK Service Manual）

> When designing a government service, always start by learning about the people who will use it.
>
> Treat any opinions or suggestions that do not come from users as assumptions that have to be proven by doing research.
>
> You must understand the needs of all kinds of users, not just ‘typical’ users.
>
> When researching, focus on users who have problems using existing services or getting the right outcome for them.

- 媒体・日付: GOV.UK Service Manual「Learning about users and their needs」, 公開 2016-04-04・更新 2017-03-23（OGL v3.0）
- URL: https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 利用者以外の意見は仮説として扱う。「典型的な利用者」だけを見ない。困っている人に焦点を当てる。

### S38 User research community（GOV.UK Service Manual）

> Moderated usability testing is where you watch participants try to complete specific tasks using your service.
>
> Usability test sessions usually take between 30 and 60 minutes, depending on the number and complexity of the tasks you want users to attempt.
>
> Plan for no more than 6 one-hour sessions a day and allow at least 15 minutes between sessions, plus additional time for lunch.
>
> do not give away ‘the answer’ or hint at how a participant might complete them
>
> set a clear goal for participants to try and achieve
>
> are relevant and believable to participants
>
> are challenging enough to uncover usability issues

- 媒体・日付: GOV.UK Service Manual「Using moderated usability testing」, 公開 2017-02-21・更新 2017-10-03（OGL v3.0）
- URL: https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing
- 取得日: 2026-11-15
- 検証区分: A
- 備考: テスト計画書の数値の根拠（30 から 60 分・1 日 6 セッション以下・セッション間は 15 分以上）。良い課題の 4 条件は、明確な目標・現実的で信じられる・不具合が出る程度に難しい・答えやヒントを漏らさない。これは英国政府の運用ガイドで、他国・他の組織にそのまま当てはまる保証は無い。

### S39 User research community（GOV.UK Service Manual）

> In-depth interviews help you learn more about different types of users, their circumstances, how they use a service and what they need from it to get the right outcome for them.
>
> Interviews can take between 30 minutes and 2 hours, depending on the complexity of the subject and number of questions you have.
>
> test your questions and structure by interviewing a colleague - revise any questions that are not clear and re-order your topics if the interview does not flow well

- 媒体・日付: GOV.UK Service Manual「Using in-depth interviews」, 公開 2017-02-21（OGL v3.0）
- URL: https://www.gov.uk/service-manual/user-research/using-in-depth-interviews
- 取得日: 2026-11-15
- 検証区分: A
- 備考: インタビューガイドの作り方（導入の台本・話題ごとの切り出し質問と深掘り質問・準備チェックリスト）。同僚で予行する。長いと詳細は増えるが、参加者を集めにくくなる。

### S40 User research community（GOV.UK Service Manual）

> Whenever you do user research, you must get the participant’s ‘informed consent’.
>
> You need to get consent from all research participants, even if they work for your organisation.
>
> that their participation is voluntary, and that they can stop or withdraw their consent at any time
>
> If a participant withdraws their consent during a research session, you must stop and delete any research data you’ve collected.
>
> If you want to do research with children or vulnerable adults (people who are unable to take care of themselves or are at risk of harm or exploitation), you need to get informed consent both from the participant and from a parent, guardian, carer or other responsible adult.
>
> You must keep evidence of the consent you get from each participant, and what they have consented to.
>
> who is doing the research
>
> the purpose of the research
>
> what data you’re collecting
>
> how long their data will be kept
>
> whether the session is being observed (and who’s watching)
>
> whether and how the session is being recorded
>
> how you will use the results of the research, and who you’ll share them with
>
> so the participant knows who to contact if they want to stop taking part in the research or make a complaint

- 媒体・日付: GOV.UK Service Manual「Getting informed consent for user research」, 公開 2016-05-24・更新 2018-11-05（OGL v3.0）
- URL: https://www.gov.uk/service-manual/user-research/getting-users-consent-for-research
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 同意書の項目（誰が・目的・取得するデータ・流れ・結果の使い方と共有先・任意性と撤回・保存期間・苦情の連絡先）と、観察者・録画の有無の告知、データ管理者の明示。撤回されたらその場でデータを削除。子ども・脆弱な成人は本人と保護者の両方。ページ末に Nuremberg Code 1947・Helsinki 宣言 1964・ESRC の倫理枠組みを参照先として挙げる（参照先の本文は未取得）。英国の法令（データ保護法）前提で、日本の個人情報保護法の要件を満たす保証は無い。

### S41 User research community（GOV.UK Service Manual）

> If you do make user research findings public, make sure that you remove participants’ personal data and fully anonymise any research data you use to illustrate your findings.
>
> Make sure that everyone involved understands their responsibilities for protecting the privacy of research participants.

- 媒体・日付: GOV.UK Service Manual「Managing user research data and participant privacy」, 公開 2018-11-05（OGL v3.0）
- URL: https://www.gov.uk/service-manual/user-research/managing-user-research-data-participant-privacy
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 結果を共有するときの匿名化、観察者への事前説明、委託先（募集会社・書き起こし）との契約でデータの用途・削除・管理者を定める。

### S42 User research community（GOV.UK Service Manual）

> It’s normal for members of the public to get an incentive in return for their time.
>
> We recommend giving participants their incentive at the start of their research session.
>
> It’s hard to recruit an unbiased sample of user research participants.
>
> The best way to limit this risk is to use a variety of user research activities and recruitment approaches.
>
> make sure they do not exclude disabled people or people with limited digital and literacy skills
>
> check they do not over-recruit people with flexible work patterns

- 媒体・日付: GOV.UK Service Manual「Finding participants for user research」, 公開 2016-03-01・更新 2026-09-22（OGL v3.0）
- URL: https://www.gov.uk/service-manual/user-research/find-user-research-participants
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 謝礼は通常のこと。セッションの最初に渡す（回答に応じて謝礼が決まる印象を避け、問題のあるセッションを打ち切りやすくするため、とページが理由を述べる）。現金を自分で扱わない。偏りのない募集は難しい。募集会社が障害のある人・デジタルに不慣れな人を除外しないか、柔軟な働き方の人ばかり集めないかを確かめる。金額の目安はページに無い。

### S43 Accessibility community（GOV.UK Service Manual）

> If your participants need to use assistive technology, ask them to bring it with them. This is because it’s hard to recreate someone’s personal settings on a different device.
>
> talk directly to the participant, not to their interpreter or helper

- 媒体・日付: GOV.UK Service Manual「Running research sessions with disabled people」, 公開 2017-10-03（OGL v3.0）
- URL: https://www.gov.uk/service-manual/user-research/running-research-sessions-with-people-with-disabilities
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 支援技術は本人の環境で。同行者でなく参加者に直接話す。事前に動線・設備（トイレ・火災時の対応）を説明する。

### S44 User research community（GOV.UK Service Manual）

> Sometimes you’ll need to run research sessions with vulnerable participants, exploring topics that are sensitive or difficult to talk about.
>
> If you react negatively to the subject matter, or have traumatic associations with it, it’s absolutely fine to say you do not feel the project is right for you.

- 媒体・日付: GOV.UK Service Manual「Researching emotionally sensitive subjects」, 公開 2019-02-12（OGL v3.0）
- URL: https://www.gov.uk/service-manual/user-research/researching-emotionally-sensitive-subjects
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 脆弱な参加者・つらい話題の調査。主題を事前に学ぶ。調査者自身の心理的負荷にも配慮する（その案件を辞退してよい）。

### S45 Accessibility community（GOV.UK Service Manual）

> Your service must be accessible to everyone who needs it.
>
> meet level AA of the Web Content Accessibility Guidelines (WCAG) 2.2 as a minimum
>
> In the UK, 1 in 5 people have a long-term impairment affecting their ability to do everyday activities.
>
> work on the most commonly used assistive technologies - including screen magnifiers, screen readers and speech recognition tools
>
> include disabled people in user research

- 媒体・日付: GOV.UK Service Manual「Making your service accessible: an introduction」, 公開 2016-03-09・更新 2025-12-17（OGL v3.0）
- URL: https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 英国政府の要件は WCAG 2.2 の AA 以上・主要な支援技術で動く・利用者調査に障害のある人を含める・アクセシビリティ声明。「5 人に 1 人」は英国の政府統計に基づくとページが述べる数値で、他国の割合ではない。

### S46 Dipa Shah（GOV.UK の User research in government ブログ）

> We have a well-loved mantra: research is a team sport.
>
> Everyone in the team should observe user research at least 2 hours every 6 weeks.

- 媒体・日付: GOV.UK ブログ「Have you had your recommended dose of research?」, 2014-08-06
- URL: https://userresearch.blog.gov.uk/2014/08/06/have-you-had-your-recommended-dose-of-research/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 英国政府の研究者による実務の紹介。Spool の exposure hours（S54）を採用した例。ブログ記事で、規則ではない。

## 引用の台帳: 情報設計

### S47 Peter Morville

> I’ve been practicing information architecture since 1994
>
> Usable. Ease of use remains vital, and yet the interface-centered methods and perspectives of human-computer interaction do not address all dimensions of web design. In short, usability is necessary but not sufficient.
>
> Findable. We must strive to design navigable web sites and locatable objects, so users can find what they need.
>
> Accessible. Just as our buildings have elevators and ramps, our web sites should be accessible to people with disabilities (more than 10% of the population).
>
> Credible. Thanks to the Web Credibility Project, we’re beginning to understand the design elements that influence whether users trust and believe what we tell them.
>
> Valuable. Our sites must deliver value to our sponsors.
>
> The truth is, it depends on your unique balance of context, content and users, and the required tradeoffs are better made explicitly than unconsciously.
>
> I’m still not convinced UCD exists outside the realm of theory, but I practice user experience design every day.
>
> Useful. As practitioners, we can’t be content to paint within the lines drawn by managers.
>
> Desirable. Our quest for efficiency must be tempered by an appreciation for the power and value of image, identity, brand, and other elements of emotional design

- 媒体・日付: Semantic Studios「User Experience Design」（UX ハニカムの原典）, 2004-06-21
- URL: https://semanticstudios.com/user_experience_design/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 7 つの面は Useful・Usable・Desirable・Findable・Accessible・Credible・Valuable。「優先順位を明示してトレードオフを決める」ための道具で、採点表ではない。「10% 超」は 2004 年時点の数値で、現在の値の根拠にしない。Morville は IA の 3 つの円（ビジネス目標と文脈・利用者のニーズと行動・コンテンツ）も同ページで紹介している。「UCD が理論の外に存在するか確信が無い」という懐疑も本人の言葉。

### S48 Information Architecture Institute（現在は World IA Association へ。ページは「更新されていない」と表示）

> Information architecture is the practice of deciding how to arrange the parts of something to be understandable.
>
> UX designers practice IA everyday; the two are closely connected.

- 媒体・日付: IAI「What is Information Architecture?」（2021-06 の保存コピーから取り込んだページ）
- URL: https://www.iainstitute.org/what-is-ia
- 取得日: 2026-11-15
- 検証区分: A
- 備考: IA の短い定義。物理環境・印刷物も含む広い定義で、Web に限らない。

## 引用の台帳: 調査の実務・姿勢

### S49 Erika Hall

> The goal of design research is not to do research for its own sake.
>
> Doing the wrong research can be worse than doing none.
>
> The notion of “data-driven design” reinforces the false belief that quantitative data (measurements) are inherently superior to qualitative (descriptions), that the data will tell you what to do.
>
> What we call intuition is either a judgment based on experience, which is a form of research, or it’s confirmation bias.
>
> The research needs to answer the questions design needs answered most.

- 媒体・日付: Mule Design Studio（Medium）「Let’s Stop Doing Research*」, 2016-05-10
- URL: https://medium.com/mule-design/lets-stop-doing-research-48efcd7118c9
- 照合に使った取得先: https://web.archive.org/web/20251122133145/https://medium.com/mule-design/lets-stop-doing-research-48efcd7118c9
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Medium は直接取得できず、Wayback の保存コピーの本文で照合。「調査をやめて、チームが同じ理解を持つための問い方を変えよう」という主旨。調査員が報告書を書いて去るだけでは足りず、知識がデザインチーム全体に行き渡る必要がある。「データ駆動」への批判と「直観」の再定義（経験に基づく判断は調査の一形態、そうでなければ確証バイアス）。

### S52 Teresa Torres

> The key idea is this simple: If we are continuously making decisions about what to build, we need to stay continuously connected to our customers, so that we can ensure that our product discovery decisions will work for our customers.
>
> As we develop expert knowledge about our product, we forget what it was like before we had that knowledge.
>
> Good product discovery teams engage with customers at least weekly

- 媒体・日付: Product Talk「Product Discovery Basics: Everything You Need to Know」, 2021-08-18
- URL: https://www.producttalk.org/continuous-discovery/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 継続的ディスカバリーの考え方。「少なくとも週に 1 回」は Torres の推奨で、実証研究の結果ではない（ページ内に根拠となる調査データは確認できなかった）。「知識の呪い」で、自分たちの専門知識を前提に毎日の判断をしてしまう、という説明。Teresa Torres の書籍『Continuous Discovery Habits』は「引用ではない参照」の節。

### S53 Indi Young

> Thinking Styles represent the cognition people bring to a goal they’re trying to accomplish.

- 媒体・日付: indiyoung.com（トップページ）, 取得日時点の表記
- URL: https://indiyoung.com/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 現在のサイトの記述（Thinking Styles の講座）。2008 年の書籍『Mental Models』のメンタルモデル図の定義は本ページに無く、書籍は「引用ではない参照」の節。NN/g の「メンタルモデル」（S32）とは別の用法なので混ぜない。

### S54 Jared M. Spool

> The number of hours each team member is exposed directly to real users interacting with the team’s designs or the team’s competitor’s designs.
>
> We found 2 hours of direct exposure with one participant could be as valuable (if not more valuable) than eight participants at 15-minutes each.
>
> Teams that have dedicated user research professionals, who watch the users, then in turn, report the results through documents or videos, don’t deliver the same benefits.
>
> The teams with members who spent the minimum of two hours every six weeks saw far greater improvements to their design’s user experience than teams

- 媒体・日付: Center Centre / UIE「Fast Path to a Great UX – Increased Exposure Hours」（UIE の旧記事の再掲。UIE の archive 版は 2011-12-19 付の別記事ページ）
- URL: https://articles.centercentre.com/?p=247
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「各メンバーが 6 週間に最低 2 時間、実際の利用者を見る」という経験則の出典（同じ内容は S55 にもある）。Spool 自身が「デザインの質との相関を見つけた」と述べる調査会社の知見で、査読を経た研究ではない。調査員が見て報告するだけでは同じ効果が出ない、という主張が要点。記事の初出日はページに無い（UIE の旧記事の再掲）。

### S55 Jared M. Spool

> In our research, we found successful design teams have each team member spend a minimum of two hours every six weeks watch real users interacting with either their design or a competitor’s design.
>
> Instead of saying, “this is how I’d use it,” they can now say, “this is how Mary, who we saw last week, might use it.”

- 媒体・日付: UIE（Archive of UIE/Brainsparks）「Exposure Hours Drive UX Innovation」, 2011-12-19
- URL: https://archive.uie.com/brainsparks/2011/12/19/exposure-hours-drive-ux-innovation/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 露出時間（exposure hours）の最初の短い版。チームが利用者の言葉・文化・目的を学び、デザインを語る共通言語が育つ、という説明。数値の根拠となるデータは本ページに示されない。

## 引用の台帳: 倫理・同意・アクセシビリティ

### S56 UXPA（User Experience Professionals Association）

> The Code of Professional Conduct was approved by the UXPA (formerly UPA) Board of Directors in September 2005.
>
> Respect privacy, confidentiality, and anonymity
>
> UX practitioners shall not expose participants to any unreasonable physical, mental or emotional stress.
>
> UX practitioners shall make reasonable efforts to avoid offering excessive or inappropriate financial or other inducements for participation in UX activities when such inducements are likely to coerce participation.

- 媒体・日付: UXPA Code of Professional Conduct（2005-09 に理事会承認。2013 年に英語版の用語を更新）
- URL: https://uxpa.org/uxpa-code-of-professional-conduct/
- 照合に使った取得先: https://web.archive.org/web/20261105045557/https://uxpa.org/uxpa-code-of-professional-conduct/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 取得は Wayback の保存コピーの本文。原則は 7 つ（全員の最善の利益・誠実・害を与えない・誠実性・利益相反の回避・プライバシー、結果データの提供）で、ページ内の並びを要旨で記す。謝礼は「強制になるほど過大にしない」と述べるが、金額の基準は書かない。

### S57 The National Commission for the Protection of Human Subjects of Biomedical and Behavioral Research

> Respect for persons incorporates at least two ethical convictions: first, that individuals should be treated as autonomous agents, and second, that persons with diminished autonomy are entitled to protection.
>
> These items generally include: the research procedure, their purposes, risks and anticipated benefits, alternative procedures (where therapy is involved), and a statement offering the subject the opportunity to ask questions and to withdraw at any time from the research.

- 媒体・日付: The Belmont Report, 1979-04-18（米国 HHS の公開ページ）
- URL: https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html
- 照合に使った取得先: https://web.archive.org/web/20261109154636/https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 研究倫理の基礎文書（生物医学・行動科学の被験者保護）。UX 調査に法的に適用される文書ではなく、「十分な情報・理解・任意性」の考え方の出典。取得は Wayback の保存コピーの本文。

### S58 Harry Brignull

> Deceptive patterns trick people into doing things they didn’t mean to.
>
> Also known as “dark patterns,” they’re features of apps, websites and AI systems that stop you doing what you want, or steer you into harmful decisions you would not have made deliberately.
>
> spreading awareness since 2010

- 媒体・日付: deceptive.design（旧 darkpatterns.org）, 取得日時点の表記
- URL: https://www.deceptive.design/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 欺瞞的パターン（別名ダークパターン）の定義。調査・A/B テストで「コンバージョンが上がった」ことを、利用者を欺いた結果でないかの点検に使う観点。ページは 2010 年からの啓発活動と書く（「spreading awareness since 2010」）。

### S59 W3C Web Accessibility Initiative

> The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:
>
> (Level AA) The visual presentation of text and images of text has a contrast ratio of at least 4.5:1
>
> The size of the target for pointer inputs is at least 24 by 24 CSS pixels, except when:
>
> 2.5.8 Target Size (Minimum) (AA)
>
> Large-scale text and images of large-scale text have a contrast ratio of at least 3:1

- 媒体・日付: Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation, 2024-12-12（ページ記載の日付）
- URL: https://www.w3.org/TR/WCAG22/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 達成基準 1.4.3 コントラスト（最小）の 4.5:1（AA）と、2.5.8 ターゲットサイズ（最小）の 24×24 CSS ピクセル（AA。WCAG 2.2 で追加された基準）。例外・条件はページの本文に従う。W3C 文書ライセンスの範囲で短く引用する。

## 引用の台帳: 実験（A/B テスト）

### S60 Evan Miller

> If instead of deciding ahead of time, “this experiment will collect exactly 1,000 observations,” you say, “we’ll run it until we see a significant difference,” all the reported significance levels become meaningless
>
> Try 26.1% – more than five times what you probably thought the significance level was
>
> Repeated significance testing always increases the rate of false positives, that is, you’ll think many insignificant results are significant (but not the other way around).
>
> Suppose your conversion rate is 50% and you want to test to see if a new logo gives you a conversion rate of more than 50% (or less).
>
> You stop the experiment as soon as there is 5% significance, or you call off the experiment after 150 observations.

- 媒体・日付: Evan Miller「How Not To Run an A/B Test」, 2010-04-18
- URL: https://www.evanmiller.org/how-not-to-run-an-ab-test.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 結果を何度も覗いて有意になった時点で止めると、偽陽性が増える。「標本数を事前に固定する」が前提。26.1% は、50% の転換率・観測のたびに検定・150 件で打ち切りという最悪に近い設定での値（ページ内の条件）で、一般の誤り率ではない。

### S61 Ron Kohavi, Alex Deng, Roger Longbotham, Ya Xu

> Having been involved in running thousands of controlled experiments at Amazon, Booking.com, LinkedIn, and multiple Microsoft properties, we share seven rules of thumb for experimenters, which we have generalized from these experiments and their results.
>
> When results seem too good to be true, apply Twyman’s law and investigate deeply before declaring an experiment as a breakthrough; most of the time, you’ll find a bug.
>
> Most experiments show that there can be significant shifts in clicks from one area of the page to another, but abandonment rate rarely moves or moves very little.

- 媒体・日付: KDD 2014「Rules of Thumb for Web Site Experimenters」（PDF の題名。本文は「seven rules」と書く。著者サイト exp-platform.com の PDF）
- URL: https://exp-platform.com/Documents/2014%20experimentersRulesOfThumb.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 数千件の実験から得た経験則（証明されたものではないと本人たちが述べる）。「良すぎる結果は疑う（Twyman の法則）」「クリックの移動は簡単、離脱の減少は難しい」。検索エンジン（Bing 等）の大規模サイトでの経験で、小規模サイトにそのまま当てはまるとは限らない。

## 引用の台帳: 批判・論評（デザイン思考・評価手法・ペルソナ）

### S62 Lee Vinsel

> While Design Thinking is mostly just vapid, I will argue that, via illicit connections, this fad could spread through the nation
>
> Have you ever heard of Design Thinking? Your answer to that question will depend largely on where you sit in the world.
>
> popularize the term in his 1987 book, Design Thinking
>
> Peter Rowe, who eventually became the dean of Harvard University’s Graduate School of Design

- 媒体・日付: Medium「Design Thinking is Kind of Like Syphilis — It’s Contagious and Rots Your Brains」, 2017-12-06（designliteracy.net に置かれた PDF 版で照合）
- URL: https://medium.com/@sts_news/design-thinking-is-kind-of-like-syphilis-its-contagious-and-rots-your-brains-842ed078af29
- 照合に使った取得先: https://designliteracy.net/wp-content/uploads/2023/06/Vinsel-2017.pdf
- 取得日: 2026-11-15
- 検証区分: C（批判・論評）
- 備考: 技術・科学技術社会論の研究者による強い批判。主張の因果（デザイン思考が組織に広がる経路）は確認していない。取得は第三者サイトの PDF（Medium ページの印刷版）で、PDF 化で ligature の文字（fi など）が欠けるため、そこを含む文は引用していない。論調が強いので、中立の記述として使わず「批判」として明示する。

### S63 Pentagram（Natasha Jen の講演について）

> Natasha Jen uses the methodology of DT to examine the effectiveness of DT itself in a poster for her talk “Design Thinking Is Bullshit,” recently presented at Design Indaba.

- 媒体・日付: Pentagram「Design Thinking, Examined」, 2018-02-23
- URL: https://www.pentagram.com/news/design-thinking-examined
- 取得日: 2026-11-15
- 検証区分: R（機関・出版社・サイトの地の文）
- 備考: 機関（Pentagram）の地の文で、講演の内容そのものではない。講演の書き起こし・動画は取得できなかったので、Jen 本人の主張は引用していない。ポスターは PDF で配布と書かれるが未取得。

### S64 Peter Merholz（Steve Portigal の論考について）

> Steve is right in that the bulk of personas out there don’t serve their desired purpose, because they get too cutesy with alliterative names, or label people as types as opposed to individuals, or become cliched.
>
> First, because so many personas are bad doesn’t mean that we should throw out the practice.
>
> no constructive alternative is presented

- 媒体・日付: peterme.com「Personas 99% Bad?」, 2008-01-17
- URL: https://www.peterme.com/2008/01/17/personas-99-bad/
- 取得日: 2026-11-15
- 検証区分: C（批判・論評）
- 備考: Merholz が、Portigal の論考「Persona Non Grata」（Interactions 誌）に応答した記事。Portigal の論考そのものは未取得で、その内容は Merholz の要約（「ペルソナの開発を時間の無駄とみなし、共感を作るはずが利用者から遠ざけると批判」）に依る。Merholz 自身は「悪いペルソナ」の問題で、実践をやめる理由にならないという立場。両者の論点の一次の文面は未確認。

### S65 John Pruitt, Jonathan Grudin

> As Cooper and others have observed, Personas can engage team members very effectively.
>
> Personas as used by Cooper can be valuable, but they can be more powerful if used to complement, not replace, a full range of quantitative and qualitative usability methods.

- 媒体・日付: Microsoft Research「Personas: Practice and Theory」, 2003-01（DUX Conference 論文）
- URL: https://www.microsoft.com/en-us/research/publication/personas-practice-theory/
- 照合に使った取得先: https://web.archive.org/web/20260829054052/https://www.microsoft.com/en-us/research/wp-content/uploads/2017/03/pruitt-grudinold.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ペルソナを Cooper 流から拡張し、他の調査手法の「補完」として使う提案。Cooper が「初期調査を重視し、継続的なデータ収集と usability engineering を軽く見る」と指摘する。PDF は Wayback の保存コピー、公開日は Microsoft Research の公開ページ（S71）の表示による。Cooper の原典（『The Inmates Are Running the Asylum』）は未取得。

## 引用の台帳: 追加の定義・歴史・批判

### S66 Raluca Budiu

> Usability refers to how easily people can successfully complete a task using an interface.
>
> Learnability: how fast people learn to accomplish basic tasks with the design
>
> Usability is not a property of the design alone.
>
> A usability claim is therefore always relative: usable for whom, for which task, and under what conditions?
>
> In our 2020 analysis of redesign projects, the UX metrics that each project targeted (such as sales or signups) improved by 75% on average after a usability redesign.
>
> Efficiency: how quickly people perform tasks once they have learned the design
>
> Memorability: how easily people reestablish proficiency when they return to the design after a period of not using it
>
> Errors: how many errors people make, how severe these errors are, and how easily people recover from them
>
> Satisfaction: how pleasant the design is to use
>
> The 5 components of usability include learnability, efficiency, memorability, errors, and satisfaction.
>
> The relative importance of these components depends on the product.

- 媒体・日付: Nielsen Norman Group「Usability 101: Introduction to Usability」（2012 年の Nielsen 版を置き換えた新版）, 2026-11-06
- URL: https://www.nngroup.com/articles/usability-101-introduction-to-usability/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ユーザビリティの 5 要素は学習しやすさ・効率・記憶しやすさ・エラー・満足。重みは製品で変わる（年 1 回の確定申告は学習しやすさ、毎日使う CAD は効率）。「誰が・どの課題を・どんな条件で」と相対で語る点が、検証の設計の出発点。75% は NN/g の 2020 年の分析で、ページ自身が「ROI の直接の推定ではない」「プロジェクトで大きく異なる」と注記する。2012 年の Nielsen 版は「歴史的参照として残っている」とページが述べるが、そちらは未取得。

### S67 Jakob Nielsen

> The "discount usability engineering" [Nielsen 1989b, 1990a, 1993] method is based on the use of the following three techniques
>
> Gould and Lewis [1985] found that only 16% of developers mentioned all three principles when asked what one should do when developing and evaluating a new computer system for end users.
>
> One important reason usability engineering is not used in practice is the cost of using the techniques. Or rather, the reason is the perceived cost of using these techniques
>
> Therefore, the simpler methods stand a much better chance of actually being used in practical design situations and they should therefore be viewed as a way of serving the user community.
>
> Scenarios
>
> Simplified thinking aloud
>
> Heuristic evaluation

- 媒体・日付: Nielsen Norman Group「Guerrilla HCI: Using Discount Usability Engineering to Penetrate the Intimidation Barrier」, 1994（ページ表示 1994-01-01）
- URL: https://www.nngroup.com/articles/guerrilla-hci/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 割引ユーザビリティ工学の原典。3 つの技法は、シナリオ・簡略化した思考発話・ヒューリスティック評価（ページの箇条書きを要旨で記す）。「最良の方法を要求すると、何も実施されない」ので、より簡単な方法を選ぶ、という動機。「5 人」「ヒューリスティック評価」はこの流れの中の道具で、網羅性を主張する方法ではないことが分かる。ページの日付は 1994-01-01（Web ページの表示）で、本文は 1989 年から 1993 年の自著を参照する。1985 年の Gould と Lewis の調査（開発者のうち、利用者への早期の注目・実測・反復設計の 3 原則をすべて挙げたのは 16%、1 つも挙げなかったのが 26%）と、デンマークの開発者の 21% しか思考発話法を知らず 6% しか使っていない（Milsted ら、1989）という数字を、本文が引く。ともに Nielsen が引いた二次の記述で、原論文は未取得。

### S68 Sarah Gibbons

> Within these larger buckets fall the 6 phases: empathize, define, ideate, prototype, test, and implement.
>
> The specific term "design thinking" was coined in the 1990's by David Kelley and Tim Brown of IDEO, with Roger Martin, and encapsulated methods and ideas that have been brewing for years into a single unified concept.

- 媒体・日付: Nielsen Norman Group「Design Thinking 101」, 2016-07-31（最終レビュー 2026-07-15）
- URL: https://www.nngroup.com/articles/design-thinking/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 推進側（NN/g）の記述。6 段階（共感・定義・発想・試作・検証・実施）と、用語の由来を「1990 年代に IDEO の Kelley と Brown が Roger Martin とともに」とする。これに対し Vinsel は Peter Rowe の 1987 年の書籍を挙げる（S62）。用語の由来は出典により食い違う。

### S69 Atul Handa, Kanupriya Vashisht

> However, having worked with a number of design teams over the years, we’ve observed that personas are often under utilized and, thus, ineffective.
>
> The biggest downside of personas is not that they’re putting a bunch of expensive research to such scant use. It’s that designers often start to feel a false sense of safety in the belief that they’re somehow connected to their users via Joe, when really they aren’t!

- 媒体・日付: UXmatters「The Problem with Personas and Some Solutions」, 2016-09-26
- URL: https://www.uxmatters.com/mt/archives/2016/09/the-problem-with-personas-and-some-solutions.php
- 取得日: 2026-11-15
- 検証区分: C（批判・論評）
- 備考: ペルソナが壁に貼られたまま形骸化し、「Joe がこう言うはず」で設計判断を正当化する実務の観察。著者の経験に基づく論評で、調査データではない。形骸化の失敗パターン（調査に基づかない・更新されない・チームが作成に関わっていない）を再生産しないための材料。

## 引用の台帳: 追加の出所（Double Diamond の経緯・Pruitt と Grudin・SUS・ペルソナの起源・IA）

### S70 Richard Eisermann（Design Council の当時の Director of Design and Innovation）

> What we did with the Double Diamond was codify it, rename the steps and popularise it.
>
> It was important work, but we were certainly standing on the shoulders of giants.

- 媒体・日付: Design Council「The Double Diamond」ページに引用された本人の言葉（ページは「READ THE FULL HISTORY」の節に置く）
- URL: https://www.designcouncil.org.uk/our-resources/the-double-diamond/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Double Diamond を新しく発明したのではなく、既存のプロセスを成文化し、名前を付け直して広めたと、当時の責任者自身が述べる。「巨人の肩の上に立っていた」。ページは Design Council の運営するもので、引用の発言時期・媒体（インタビューか記事か）はページに明記されていない。ページ本体の記述と年の食い違い（2003 と 2004）は S33 と S34。

### S71 Microsoft Research（出版物ページ）

> January 2003
>
> Most Cited DUX Conference paper

- 媒体・日付: Microsoft Research「Personas: Practice and Theory」の出版物ページ（Wayback の保存コピー）
- URL: https://www.microsoft.com/en-us/research/publication/personas-practice-theory/
- 照合に使った取得先: https://web.archive.org/web/20220708043245/https://www.microsoft.com/en-us/research/publication/personas-practice-theory/
- 取得日: 2026-11-15
- 検証区分: R（機関・出版社・サイトの地の文）
- 備考: 論文の公開日（2003 年 1 月）と掲載先（ページは "Most Cited DUX Conference paper" と表示）の確認用。PDF 本体（S65）には年の記載が見つからなかった。

### S72 John Brooke

> So, in 1986, I made SUS freely available to a number of colleagues, with permission to pass it on to anybody else who might find it useful
>
> I contributed a chapter describing SUS to a book on usability engineering in industry (Brooke, 1996).
>
> I have recently seen several publications refer to it as an “industry standard”—although it has never been through any formal standardization process.
>
> You then multiply the sum of the scores by 2.5 to obtain the overall value of SUS.
>
> Other work by Sauro and Lewis (2009) suggested that, although SUS was originally intended to yield just a single score indicating overall perceived usability of a system, factor analysis indicates that it incorporates two scales.
>
> Based on more than 5,000 SUS observations, Sauro provided a set of tools for analyzing SUS data.

- 媒体・日付: Journal of Usability Studies 8(2), 2013-02, pp. 29-40「SUS: A Retrospective」（Wayback の保存コピーの PDF）
- URL: https://uxpajournal.org/wp-content/uploads/sites/7/pdf/JUS_Brooke_February_2013.pdf
- 照合に使った取得先: https://web.archive.org/web/20211128012159/https://uxpajournal.org/wp-content/uploads/sites/7/pdf/JUS_Brooke_February_2013.pdf
- 取得日: 2026-11-15
- 検証区分: A
- 備考: SUS の作者本人による回顧（2013）。1986 年に作って同僚に自由に配布し、1996 年に章として刊行（S07 の章）。「業界標準」と呼ばれるが正式な標準化はされていない、と本人が述べる。採点式は 1996 年の章と同じ（S08）。原典の journal ページは現在 404 のため、2021-11-28 時点の Wayback の保存コピーの PDF で照合した（取得時に「2016 年」を指定したところ、最も近い保存コピーがこの時点だった）。SUS は元々 1 つの総合点を出す尺度だが、因子分析では「学習しやすさ」とそれ以外の 2 因子とする研究（Sauro と Lewis、Borsci ら）がある、と本人が記す（原研究は未取得）。

### S73 Alan Cooper

> The Inmates Are Running the Asylum, published in 1998, introduced the use of personas as a practical interaction design tool.
>
> Kathy was the basis for my first, primitive, persona.
>
> it wasn’t until 1983 and about 15 major business and personal applications later that I began to develop a more effective approach.
>
> I spoke at length with a woman named Kathy

- 媒体・日付: Cooper「The origin of personas」, 2008-05-15（Wayback の保存コピー）
- URL: https://www.cooper.com/journal/2008/05/the_origin_of_personas
- 照合に使った取得先: https://web.archive.org/web/20170108152056/https://www.cooper.com/journal/2008/05/the_origin_of_personas
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ペルソナの考案者による由来の説明。1983 年にプロジェクト管理ソフト（Plan*It）の開発中、7、8 人の知人に聞き取りし、その 1 人（Kathy）が最初の原始的なペルソナだったと述べる。書籍の出版年は同ページでは 1998 年だが、書籍の版・刊行年は他の資料で 1999 年とも書かれる（本台帳では書誌未照合。年の食い違い）。つまり出発点は、調査（聞き取り）に基づく具体的な 1 人だった、と本人が述べる。

### S74 Abby Covert

> Information architecture is the way that we arrange the parts of something to make it understandable.

- 媒体・日付: How to Make Sense of Any Mess（オンライン版）「Information architecture is all around you.」（© 2022 Abby Covert の表示）
- URL: https://www.howtomakesenseofanymess.com/chapter/1/page/7/information-architecture-is-all-around-you/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 著者サイトのオンライン版（本文は著作権表示つきなので、短い定義 1 文だけを引用する）。IAI の定義（S48）とほぼ同じ形で、IA を Web に限らない広い意味で使う。章の見出しには「Architecture before design.」（第 3 章）などがあるが、本文は未取得。

### S75 Pavel Samsonov（NN/g）

> Designers of generative AI (genAI) products must help users identify and correct these errors.
>
> Most genAI tools currently fail in this responsibility.
>
> Their tone is unerringly confident, regardless of the accuracy of the response.
>
> Providing a deep link to the referenced passage or showing it in a preview of the source would greatly reduce the interaction cost of checking the LLM’s assertions.
>
> Editing an LLM output requires the user to understand the structure of the answer and build up that mental model from scratch — even between prompts on the same topic, as LLM outputs are nondeterministic.

- 媒体・日付: Nielsen Norman Group「AI Chatbots Discourage Error Checking」, 2025-05-16
- URL: https://www.nngroup.com/articles/ai-chatbots-discourage-error-checking/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 生成 AI の出力の誤りを、利用者が確かめにくい理由と、確かめやすくする設計案を述べる記事。引用は、本 skill の「AI 機能の評価観点」の「誤りに気づけるか」の根拠。記事は、本 skill が引く範囲では調査の人数・手続きを示しておらず、数値の基準は載せていない。

### S76 Megan Chan（NN/g）

> Place sources directly next to the specific claim or sentence they support.
>
> Given that step-by-step reasoning is often unreliable, designers should avoid using step-by-step explanations that imply certainty or transparency.
>
> Our research on AI information-seeking behaviors revealed that people rarely click citation links.
>
> Pair disclaimers with an action.

- 媒体・日付: Nielsen Norman Group「Explainable AI in Chat Interfaces」, 2025-12-12
- URL: https://www.nngroup.com/articles/explainable-ai/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: AI の対話画面にある説明文（出典の引用・段階的な推論・注意書き）の良し悪しを述べる記事。引用は、本 skill の「根拠の示し方」の根拠。「people rarely click citation links」は記事が自社の調査を引く一文で、調査の人数・条件は同ページに無い。

### S77 Feifei Liu・Maria Rosala（NN/g）

> In a recent remote usability study, six Chinese participants (ages 18–45, with varying levels of genAI experience) used Qwen’s agent features, most of them for the first time.
>
> Users want efficiency, but not at the cost of control.
>
> However, autonomy depends on transparency
>
> Agents that save users time while keeping them informed and in control will earn long-term trust.
>
> The agent's efficiency in narrowing options meant nothing once decision-critical information was missing.
>
> Agents should access and surface only the minimum data needed for the current step.

- 媒体・日付: Nielsen Norman Group「Designing AI Agents: 4 Lessons from China’s Qwen Agent」, 2026-05-08
- URL: https://www.nngroup.com/articles/designing-ai-agents/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 利用者の代わりに操作を進める機能（エージェント）を、中国の 1 つの製品で 6 人に試してもらった調査の記事。引用は、本 skill の「自動で進みすぎないか」の根拠。1 つの製品・6 人の質的調査で、一般則ではない。記事は費用が途中で変わった例と、判断に要る情報が出なかった例を挙げるが、本 skill は金額・数値を転載しない。

### S78 Evan Sunwall（NN/g）

> Decision gates are points where an agentic AI requests confirmation from a human before taking significant actions with potential adverse consequences.
>
> Human-in-the-loop is an agentic AI design strategy that aims to keep humans actively involved in decision making, instead of letting the agent make choices and act autonomously.
>
> But the process was very slow, and it’s important to notice the shaky ground it rests on.
>
> Although just a single anecdotal experience

- 媒体・日付: Nielsen Norman Group「Initial Impressions of ChatGPT’s Agent: Successful, Shaky, and Slow」, 2025-08-08
- URL: https://www.nngroup.com/articles/impressions-chatgpt-agent/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 筆者 1 人が 1 つの課題（予約）で 1 つのエージェントを試した体験記。引用は、本 skill の「自動で進みすぎないか」（確認の関門の定義）と「待ち時間の体感」（遅さの記述）の根拠。記事は所要時間を分で示すが、1 回の体験の値で、本 skill は基準として転載しない。記事は 2025 年 8 月時点の製品の体験記で、現在の機能には当てはめない。

### S79 Maria Rosala（NN/g）

> The best way to learn about digital literacy is not to ask, but to watch.
>
> AI literacy can’t be measured along a single continuum.
>
> The naive power user: Users who interact fluently with genAI and appear skilled in prompting but tend to accept outputs at face value and miss errors or gaps.
>
> Output literacy is largely behavioral: verifying details that are easy to get wrong, looking for corroboration, and treating confident-sounding answers as provisional when the stakes are high.

- 媒体・日付: Nielsen Norman Group「How AI Literacy Shapes GenAI Use」, 2026-02-06
- URL: https://www.nngroup.com/articles/ai-literacy/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 生成 AI の使い方を観察した調査から、プロンプトの上手さと出力を評価する力を別の軸として整理した記事。引用は、本 skill の「提案の受け入れと取り消し」と、AI 機能の調査で参加者を選ぶ注意の根拠。ページは、参加者が 23〜65 歳の観察調査で、AI 初心者 1 人・仕事の特定の作業だけに使う 3 人・日常的に使う 5 人と記す。4 つの型は、同ページの整理で、人数の比率ではない。

## 引用ではない参照（事実の根拠）

逐語引用を載せていない参照。書誌は、取得したページに書かれているものだけを記し、書かれていないものは「書誌未照合」とする。要旨（日本語）だけを使い、原文は引用しない。

| 文献・事実 | 確認できたこと（出所） | 書誌未照合・注意 |
|---|---|---|
| Norman & Draper (eds.), 『User Centered System Design』（1986） | 取得したページには記載が無かった | 版元・ISBN・年を含め書誌未照合。本 skill では「ユーザー中心設計」の成り立ちの起点として名を挙げるだけにとどめ、内容を要約しない |
| Card, Moran & Newell, 『The Psychology of Human-Computer Interaction』（1983） | 取得したページには記載が無かった | 書誌未照合。内容は要約しない |
| Norman, 『The Design of Everyday Things』（旧題 The Psychology of Everyday Things） | S01 が POET（「The Psychology of Everyday Things」）と別題での刊行を記し、S02 が 1988 年に「affordance」を設計に導入したと述べる。S05 が「25 年前の本」の改訂（DOET）に触れ、jnd.org の書籍欄に「The Design of Everyday Things, Revised and Expanded Edition」が載る | 初版・改訂版の刊行年・版元は書誌未照合 |
| Nielsen, 『Usability Engineering』（1993） | S21 が「my 1993 book, Usability Engineering」と書く。S67 も [Nielsen 1993] を参照する | 版元・ISBN 書誌未照合 |
| Nielsen & Mack (eds.), 『Usability Inspection Methods』（1994, John Wiley & Sons） | S22 の参考文献欄に「Nielsen, J. (1994). Heuristic evaluation. In Nielsen, J., and Mack, R.L. (Eds.), Usability Inspection Methods. John Wiley & Sons, New York, NY.」とある。S15 も 1994 年の書籍と述べる | — |
| Nielsen & Molich, 「Heuristic evaluation of user interfaces」（CHI'90, 1990, pp. 249-256） | S22 の参考文献欄 | 論文本文は未取得 |
| Molich & Nielsen, 「Improving a human-computer dialogue」（Communications of the ACM, 1990-03） | S14 | 論文本文は未取得 |
| Nielsen & Landauer, 「A mathematical model of the finding of usability problems」（INTERCHI'93, 1993, pp. 206-213） | S16 の参考文献欄 | 論文本文・数式は未取得（ページの数式は画像） |
| Brooke, 「SUS - A quick and dirty usability scale」（1996, 書籍の章） | S72 が「a book on usability engineering in industry (Brooke, 1996)」と書く。S07 は第三者ホスティング版の PDF | 書名の完全な形・版元は書誌未照合 |
| Sauro (2011) の SUS の手引き、Sauro & Lewis (2009・2011)、Borsci ら (2009) | S72 が引用する | 原典未取得。NN/g が書く平均 68・500 件は S27。5,000 件超は S72 |
| Gould & Lewis (1985)、Milsted ら (1989)、Whiteside ら (1988) | S67 が引用する数字（16%・26%・21%・6%） | 原論文未取得（Nielsen の二次記述） |
| Rosenfeld & Morville, 『Information Architecture for the World Wide Web』（1998 年、O'Reilly とされる） | 取得したページには記載が無かった。S47 が、Morville は 1994 年から IA を実践していると書く | 書誌（版・年・版元）未照合 |
| Cooper, 『The Inmates Are Running the Asylum』 | S73 が「published in 1998」と書く | 版元・版は書誌未照合。刊行年を 1999 年とする資料もあるとされるが、本調査では確認していない（年の食い違い）。 |
| Indi Young, 『Mental Models』（2008, Rosenfeld Media とされる） | 検索結果に 2008 年・Rosenfeld Media との記述があったが、取得したページ（S53）には書名・年の記載が無い | 書誌未照合 |
| Teresa Torres, 『Continuous Discovery Habits』 | S52 のページに書名の記載があるのみ | 刊行年・版元は書誌未照合。本文は読んでいない |
| Abby Covert, 『How to Make Sense of Any Mess』 | S74（オンライン版、© 2022） | 紙の書籍の刊行年・版元は書誌未照合。章見出しの「Architecture before design.」「Start with scope and scale.」は目次ページの見出しのみ確認 |
| Dan Brown, 「Eight Principles of Information Architecture」（ASIS&T Bulletin, 2010-08/09, 36(6)） | 検索結果の記述のみ（原典は未取得） | 原典未取得。原則の中身は書かない |
| Pruitt & Grudin, 「Personas: Practice and Theory」 | S65（PDF）・S71（2003 年 1 月・DUX の最多引用論文という表示） | — |
| Kimbell, 「Rethinking Design Thinking」（Design and Culture, 2011-11） | S05 の追記が、読者から教えられた論文として名を挙げる | 論文は未取得 |
| Moggridge の Norman への応答（2010） | S05 が引用する最終段落（「The “Design Thinking” label is not a myth.」）のみ | 応答の全文は未取得。逐語引用していない |
| ISO 9241-11 の有効性・効率・満足という定義の骨格 | S07 が「ISO 9241-11 suggests…」として紹介する範囲 | 規格本文（2018 年版、有料）は未取得。1998 年版と 2018 年版の定義文の差も未確認 |
| ISO 9241-110（対話の原則, 2020 年と Molich のサイトの目次にある） | 目次の見出しの語のみ | 本文未取得 |
| JIS Z 8530:2019（ISO 9241-210:2010 に対応） | S11 | 本文は著作権のため取得していない。ISO 側の現行版は 2019 年（S10）で、JIS の対応版と版が異なる |
| 日本語圏の UX・HCD の一次資料（人間中心設計推進機構（HCD-Net）、日本人間工学会ほか） | 検索で JIS 以外は取得していない | 未調査（調査の限界に再掲） |

## 未検証・伝聞

出典を取得して確認できなかったもの、または流通する誤用。事実・引用として使わない。

| 流通している言説 | 状況 |
|---|---|
| 「5 人テストすれば問題の 85% が見つかる」を、単独で一般則として語る | 原典（S16）の 85% は、1 人あたりの発見率 L=31% を置いたモデルの値で、同質の利用者・反復を前提にする。実測では 5 人組の発見率が 55% から 99% まで散らばった（S18）。評価チーム間で結果が一致しない（S19）。単独の一般則としては使わない |
| 「SUS が 68 以上なら良い」「80 点以上なら成功」 | 平均 68、80 以上で上位 10%、73 では上位 30% にとどまる、は NN/g が Sauro の分析として書く値（S27）。Sauro の原典（原論文）は未取得で、小標本の平均点を判断の根拠にしない（S27 が戒める） |
| 「もし顧客に聞いたら『もっと速い馬』と答えただろう」（Henry Ford の言葉とされる） | 本調査では出典を取得していない。誰の発言かも確認していない |
| 「利用者は見せられるまで何が欲しいか分からない」（Steve Jobs の言葉とされる） | 本調査では出典を取得していない。使わない |
| 「3 クリックルール」「メニューは 7 項目まで（7±2）」 | 本調査で出典を取得していない。具体的な数の根拠として使わない（IA の根拠は S23・S24 の方法で示す） |
| 「UX という語は Norman が 1993 年に Apple で使い始めた」 | S06 は 1998 年の定義（Norman と Nielsen）まで。起源の年・場所は取得していない |
| 「Jakob の法則は 2000 年に提唱された」 | S13 は 2017 年の動画のページ。初出年は取得していない |
| 「10 ヒューリスティクスは 2020 年に更新された」 | S12 は更新者名を記すが、更新年の記載は確認できなかった。年を書かない |
| 「Double Diamond は 2005 年に発表された」 | S33 は 2003 年の経緯、S34 は 2004 年の公開と書く。2005 年の表記は取得していない |
| 「デザイン思考は IDEO が 1990 年代に命名した」「Peter Rowe の 1987 年の書籍が最初」 | 前者は S68、後者は S62 の記述。出典どうしで食い違い、どちらも一次資料は未取得 |
| 「調査劇場（research theater / UX theatre）」という概念と提唱者 | 検索では「UX theater（Tanya Snook とされる）」の指摘が見つかったが、一次資料を取得していない。Jared Spool の用語とも確認できていない。出典の無い概念として扱わない（領域の空白） |
| 「ペルソナはどれも形骸化する」 | 批判（S64・S69）は、悪い作り方・使い方への指摘で、手法全体の否定ではない（Merholz は反論する）。「どれも」とは言えない |
| 「A/B テストで有意になったら止めてよい」 | 誤り。結果を覗いて止めると偽陽性が増える（S60）。一方、サンプル数を事前に決める前提で使う |

## 調査の限界

- 書籍の本文は読んでいない。Norman と Draper・Card と Moran と Newell・Norman『誰のためのデザイン？』・Nielsen『Usability Engineering』・Cooper『Inmates』・Rosenfeld と Morville・Krug・Portigal・Hall・Torres・Indi Young の各書は、紹介文・書誌の範囲に限り、視点の根拠にしていない。書籍の概念（gulf of execution・goal-directed design・メンタルモデル図・機会マップなど）の説明は、本台帳の根拠にしていない。
- ISO 9241-11・ISO 9241-210・JIS Z 8530 の規格本文は取得していない。ユーザビリティの定義文・人間中心設計の原則の列挙は、規格本文の引用としては載せていない。
- Natasha Jen の講演（2017・2018）の書き起こし・動画、Portigal「Persona Non Grata」、Vinsel の Chronicle 版は取得していない。デザイン思考批判は Vinsel の Medium 版（PDF 版で照合）と Norman の自己批判が中心で、Jen の主張の根拠は薄い。
- Nielsen & Landauer（1993）・Spool & Schroeder（2001）・Virzi（1992）などの原論文は ACM の有料サイトで取得していない。「5 人」の批判は Faulkner（抄録のみ）と Molich の要約が中心。
- Molich の CUE 各調査（CUE-1 から CUE-10）の詳細ページ・年・結果の数値は取得していない。総括ページの記述のみ。
- NN/g の「1 人あたり 31%」の根拠データ・83 件の自社案件の図、Sauro の SUS ベンチマーク（MeasuringU）、Kohavi の書籍『Trustworthy Online Controlled Experiments』は未取得。
- 調査の倫理は、英国政府の運用ガイド（GOV.UK）・UXPA の倫理規定・Belmont Report を扱った。日本の個人情報保護法・ガイドライン、日本の研究倫理（人を対象とする医学系研究に関する倫理指針など）、EU の GDPR は取得していない。日本の制度に沿った同意・個人情報の扱いは、別途の調査が要る。
- 日本語圏の UX・HCD の資料（HCD-Net・人間工学会・国内事例）は JIS のページ以外は取得していない。
- 調査手法の網羅は部分的。次は扱っていない: ジョブ理論（JTBD）、カノモデル、日記調査・フィールド調査の詳細、サービスブループリント・ジャーニーマップの作法、アンケート設計（NPS の批判を含む）、非対面・無人テストの参加者の質（不正回答）、アクセシビリティ評価の方法（WCAG 2.2 の達成基準の数値を 2 件引いたのみ）、A/B テストの倫理（同意なしの実験）、生成 AI を使った調査（合成ユーザー・自動要約）、IA の歴史（Wurman）・Dan Brown の原則・Rosenfeld と Morville の方法。
- NN/g のページの「最終レビュー」は 2026 年で、記事の本文が過去の版から変わっている可能性がある（S12・S66 はページが更新・置換を述べる）。過去の版の本文は取得していない。
- Wayback Machine の保存コピー（Medium の Hall・UXPA・Belmont・ISO・Pruitt・MSR・Cooper・Brooke 2013 の PDF）は、保存時点の内容で、現在の内容と同じとは限らない。短時間の連続取得を遮断されることがある。
- GOV.UK のページの更新日（2025-2026 年のもの）は、取得日時点の表示。

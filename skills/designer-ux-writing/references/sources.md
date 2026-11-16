# designer-ux-writing 出典台帳

`designer-ux-writing`（UX ライティング・コンテンツデザイナー）の `SKILL.md`・`examples/`・`references/` が根拠にする出典の台帳。各社・各機関の文言の指針、国内の文言と表記、実務と研究と歴史と批判、作り方の進め方の出典から、使ったものを主題ごとに並べて S001 から連番にした。引用原文・発言者や媒体・日付・URL・取得日・検証区分を記す。台帳は通読せず、番号で検索して該当の項目だけ読む。

全 241 件。逐語の引用を持つ項目が 215 件、「引用ではない参照」（逐語の引用を載せない要旨のみの項目）が 26 件（「引用ではない参照（事実の根拠）」の節）。

## 主題別の番号

| 主題 | 件数 |
|------|------|
| 原則とボイス・トーン | 29 |
| 部品ごとの文言（ボタン・エラー・空・確認・通知・ヘルプ・メール） | 57 |
| 用語と用語集 | 6 |
| 翻訳と国際化 | 10 |
| 国内の表記と公用文 | 24 |
| 敬語 | 10 |
| やさしい日本語・平易な言葉 | 17 |
| 確かめ方と研究 | 21 |
| 歴史 | 20 |
| 批判・騙しの文言 | 9 |
| 作り方の進め方 | 12 |
| 引用ではない参照（事実の根拠） | 26 |

「引用ではない参照」は、SmartHR Design System・Shopify の Polaris・Atlassian・Unicode の UTS #35 の要旨と、書誌の照合だけの項目を、主題にまたがって 1 つの節（「引用ではない参照（事実の根拠）」）に置いたもの。主題の分けは、項目の題・備考・引用の語から付けた。主題が複数にまたがる項目は、近い主題に入れてある。

## 凡例

- 検証区分
  - A: 原典・公式ページ・リポジトリの原稿（Markdown・HTML・JSON・PDF）、または原典の保存コピー（Wayback Machine）を `curl` で取得し、引用文または照合語が逐語で含まれることを機械的に照合した（タグの除去、空白の正規化、日本語は NFKC、PDF は `pdftotext` を通した後の部分文字列）。口頭発言を媒体が文字にしたものは、その書き起こしの精度に依存する。引用ブロックの行は、取得日の時点でページにあることを照合した
  - B: 第三者の転載・書き起こし、または他媒体経由の引用（原典との照合なし）
  - C: 批判・論評側の主張。引用が逐語であることのみを確認し、主張の正しさ・因果は確認していない
  - R: 記者・機関・第三者の地の文、または利用条件で逐語引用できない原稿の要旨（Polaris・Atlassian・UTS #35）。発言者本人の発言として引用しない。数値の元の論文を取得していない発言も R に置いた。研究結果の根拠に R を使うときは、原論文は取得していないことを備考に明記する
  - 「引用ではない参照」の SmartHR Design System の項目の A は、取得日の時点で、原稿に要旨に当たる記述があることを確かめた、という意味（確認に使った短い語句は台帳に載せない）。要旨は本 skill の言葉で、原文ではない
  - U: 未検証（末尾の節に集める）。事実・引用として使わない
- 「自称」: 組織・企業・個人が自分の進め方や指針を自分で述べたもの。成果や有効性の第三者による検証ではない
- 数値（字数・%・人数・秒・ステップ数）は、区分 A で原文を確認できたものだけを「出典あり」とする。「目安」と書いたものは、その指針や会社の目安で、根拠となる調査が原文に無い。字数の値には性質の違うもの（公用文の意識する目安、災害時の外国人向けの規則、校正ツールの既定値）が混ざるので、同じ「一文の長さの基準」として並べない
- 引用文は原文を改変していない（引用符・アポストロフィ・ダッシュ・全角の括弧は取得した原文の表記のまま。PDF の互換文字だけは通常の漢字に戻した）。日本語の訳・要旨・備考の整理は本 skill の言葉であり、発言者本人の発言ではない。「整理（推測）」と書いた箇所は出典が述べていない応用
- 項目の「URL」は利用者が開ける文書の URL、「URL（原稿）」は照合に使った固定の原稿（コミット固定の raw、Apple HIG の JSON、Wayback の保存コピーなど）。URL 欄の括弧には、転送元の旧 URL や案内ページを残した。引用文は、URL（原稿）または URL に対して curl と grep -F で第三者も再照合できる
- 取得日は項目ごとに、本文を実際に確かめた日。2026-11-16 が大半で、作り方の進め方の一部の項目は 2026-11-15
- ライセンス上の扱い
  - ライセンスの都合で、要旨のみを「引用ではない参照」に置いたもの: SmartHR Design System（リポジトリに LICENSE が無く、文書サイトの利用規約が「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。要旨と URL だけ）、Shopify Polaris（LICENSE が Shopify と連携するアプリへの利用に限る）、Atlassian Design System（改変・翻訳・二次的著作物の作成を禁じる限定許諾）、Unicode の UTS #35 MessageFormat 仕様（公開配布目的の複製・改変を禁じる）
  - 条件付きで逐語引用を残したもの: Mailchimp Content Style Guide（CC BY-NC 4.0。クレジット必須・非営利）。台帳には逐語で残し、各項目の備考にライセンスを書いた。配布する skill 本文は、要旨で使う
  - 短い引用に限るもの: Apple HIG・Adobe Spectrum・Fluent 2（全権利留保または許諾の明記なし）、W3C の記事、NN/g・A List Apart など著作権表示のみの記事、国内の企業・報道・研究機関のページ。出典を明示した短い引用にとどめ、段落単位の転載・翻訳をしない
  - 逐語引用してよいもの: GOV.UK（OGL v3.0）、Google developers（CC BY 4.0）、Microsoft Writing Style Guide の源泉リポジトリ（CC BY 4.0）、Mozilla L10n（CC BY 4.0）、GitLab Pajamas（MIT）、Carbon（Apache-2.0）、Material Components for Android（Apache-2.0）、ICU・CLDR のサイト原稿（Unicode License V3）、Android（CC BY 2.5）、米国政府の文書、文化庁・デジタル庁（公共データ利用規約）、JTF・freee（CC BY 4.0）。いずれも出典を明記する
  - 個別の条件は各項目の備考と、下の「帰属上の注意」に書いた
- 他の skill の台帳の番号は持ち込まない。他の skill に触れる箇所は skill 名だけを書く

## 帰属上の注意

- 各社の指針は自社製品・自社利用者向けの規約であり、普遍的な正解ではない。食い違いは `references/component-wording.md` で両論にした
- 「公用文作成の考え方」は建議で内閣告示ではなく、国の府省庁の公用文の目安。内閣告示は「一般の社会生活」のよりどころで、専門分野や個人の表記には及ぼさないと自ら書く。民間の画面に当てはめる部分は本 skill の整理（推測）
- 進め方の組織・企業の記事は、基本的に自社の進め方の自己説明（自称）。成果の検証ではなく、「その組織が何を重視すると言っているか」の根拠として使う
- 要旨・訳・「備考」の整理は本 skill の言葉で、出典に書いてあることと分けて書く。「目安」「推測」「整理」と書いた箇所は出典の事実ではない

出典ごとの個別の条件は、次のとおり。

**各社・各機関の指針**

- 引用は原文の言語・句読点のまま載せる。照合は曲がった引用符を直線に揃えた形でも行ったが、本文の引用ブロックは生データ上の文字（`’` など）をそのまま写した
- JS 描画のサイトや移行済みサイトは、commit 固定の原稿ファイルで照合した。読者向けの文書の URL を「URL」、照合に使った原稿の URL を「URL（原稿）」に分けて書く。Apple HIG は `developer.apple.com/tutorials/data/...json` の本文テキストで照合した
- Google のページ冒頭にある「Page Summary」（AI 生成）と末尾の評価 UI は照合範囲から除いた。引用はすべて本文
- ライセンスの扱い
  - 逐語引用してよいもの: GOV.UK（OGL v3.0）、Google developers（CC BY 4.0）、Microsoft Writing Style Guide・Win32 UX Guide（源泉リポジトリが CC BY 4.0。ただし S011 は Learn 版にしか無い文なので短い引用扱い。Win32 は Learn の頁で照合し、リポジトリ側の同文は未照合）、Mozilla L10n（CC BY 4.0）、GitLab Pajamas（MIT）、Carbon（Apache-2.0）、Material Components for Android（Apache-2.0）、ICU・CLDR サイト原稿（Unicode License V3）、Android（CC BY 2.5）
  - 条件付き: Mailchimp は CC BY-NC 4.0（クレジット必須・非営利）。配布 skill の本文には、要旨で使う
  - 短い引用に限るもの: Apple HIG・Adobe Spectrum・Fluent 2（全権利留保または許諾の明記なし）、W3C の記事（W3C Document License の扱い）。designer-apple の先例に倣い、出典を明示した短い引用だけにする
  - 逐語引用しないもの: Polaris・Atlassian Design System・UTS #35 MessageFormat 仕様。要旨を「引用ではない参照」に置いた
- Win32 UX Guide は Windows 7 時代の文書で、ページ自体が更新されていないと明記している（S175）。Carbon・Microsoft Writing Style Guide の源泉リポジトリと Polaris は archived（S176・S177、Polaris は S219 の備考）。いずれも時点情報として扱う

**国内の文言・表記**

- 「公用文作成の考え方」（S090・S103・S104・S105・S106・S107・S108・S109・S110・S111・S112・S127・S128・S129・S130・S137・S138・S139・S140・S141・S142）は文化審議会の建議で、内閣告示ではない。国の府省庁の公用文の目安で、民間の UI の規範ではない。民間の画面に当てはめる部分は、すべて本 skill の整理（推測）として書いた
- 1952 年の「公用文作成の要領」の原本は取得していない。「感じのよく意味のとおりやすいものとする」（S179）は 2021 年の報告が引用した文言として扱う。1952 年の依命通知の日付と番号は 2022 年の通知（S178）の記載による
- 内閣告示（S114・S115・S116・S117）は「一般の社会生活」のよりどころで、どれも前書きで専門分野や個人の表記には及ぼさないと書く（S115・S117）。告示を根拠に、IT 製品の表記を一律に「誤り」とは言えない
- 弘前大学の「やさしい日本語」の規則（S149・S150・S180）は、原典として流通する URL が 404 で、Wayback Machine も自動アクセスを拒否したため、消防庁の検討会資料の転載で照合した（区分 B）。検索の要約に出た「理解しやすさ 1.4 倍・4 倍」「12 の規則」「約 2,000 語」は、この転載に見つからず未検証
- Microsoft の長音表記の変更（S181）は報道（区分 R）。変更前の規則を「JIS 系」と説明したのは記者の地の文で、Microsoft の発表文ではない。現在の Microsoft の規則は S125・S126 のスタイルガイドの PDF で確認した
- SmartHR が根拠に挙げる NHK 放送文化研究所の 2012 年の調査（S235）は、本体を確認していない。「SmartHR がそう書いている」ことだけが確認済み
- 世論調査（S092・S118・S119・S120）は令和 2 年度から郵送法で、令和元年度以前（面接聴取法）との比較には注意が要ると調査自身が書く。R6 と R7 で調査対象の書き方が違う（R6「全国16歳以上の個人」、R7「全国16歳以上の日本国籍を有する者」）
- Ubie の記事（S024）は実務者の個人名義の報告で、Ubie の公式の指針ではない
- ライセンス
  - 文化庁（bunka.go.jp）: サイトの著作権表示が「文部科学省ウェブサイト利用規約」を指し、同規約は公共データ利用規約（第1.0版）に準拠する。出典を明記すれば引用・要約の利用に支障はない
  - 出入国在留管理庁（moj.go.jp/isa）: 「出入国在留管理庁ホームページのコンテンツの利用について」に従う旨の表示を確認した。利用条件の本文は取得していないので、短い引用と出典明記にとどめる
  - デジタル庁: www.digital.go.jp は公共データ利用規約（PDL1.0）を確認した。デザインシステムの design.digital.go.jp 自体のライセンス表示は見つからなかったので、短い引用にとどめる
  - freee アクセシビリティー・ガイドライン: CC BY 4.0（サイトの表示で確認）
  - JTF 日本語標準スタイルガイド 第4.0版: CC BY 4.0（PDF 内の表示で確認）
  - SmartHR Design System: GitHub の kufu/smarthr-design-system に LICENSE ファイルが無い。サイトの利用規約は、提供コンテンツの著作権を SmartHR または第三者が持つとし、再配布や、SmartHR Design System 以外のサイトへの掲載・配布を NG 例に挙げる。要旨と URL だけを「引用ではない参照」に置く
  - Microsoft の Japanese Style Guide・Ubie の記事・国立国語研究所・消防庁の資料: 著作権表示のみ、または未確認。短い引用と出典明記にとどめる
  - textlint のプリセット: package.json の license 欄が MIT（LICENSE ファイルは未確認または無し）

**実務・研究・歴史・批判**

- Sarah Richards と Sarah Winters は、GDS で Head of Content Design を務めた同じ人物として扱った。根拠は、GDS ブログ（2014）が「Sarah Richards is Head of Content Design at GDS」と書き、Content Design London が創業者 Sarah Winters を「GDS での仕事で知られ、content design の実践を導入した」と書くこと（S187・S188）。改姓の事実そのものを述べた一次資料は取得していない。本文では「Sarah Winters（GDS 在籍時は Sarah Richards）」と書き、改姓の時期は書かない
- Microsoft・Facebook・Uber の記事（S189・S190・S191）は、その会社の当事者の記録で、業界全体の起点としては扱わない
- Douglas Bowman の氏名は https://stopdesign.com/about で確かめた（S166 の筆者）。deceptive.design は Harry Brignull が始めたサイト（https://deceptive.design/about-us/ のサイト自身の説明。区分 R）で、「Confirmshaming」「Trick wording」の項目（S200・S201）は区分 C（批判・論評側）として扱う
- NN/g の記事は、記事の表示日を媒体・日付に書いた。表示日が初出日とは限らない

**作り方の進め方**

- この節は、デザイン会社・デザイン組織が公開している進め方・考え方の出典のうち、本 skill が使ったもの。「自称」: 組織・企業・個人が自分たちの進め方を自分で述べたもの。成果や有効性の第三者による検証ではない。備考に「自称」と書いた
- 引用文は原文を改変していない。原文のアポストロフィ・引用符・ダッシュの表記もそのまま残した
- 取得日は、作り方の進め方の一部の項目が 2026-11-15（本文を取得した日）、ほかは 2026-11-16
- 批判の一次文は、Natasha Jen が It's Nice That に寄せた文章（S215）。講演そのものの書き起こしは取得できていない
- 組織・企業の記事は、基本的に自社の進め方の自己説明（自称）である。成果の検証ではなく、「その組織が何を重視すると言っているか」の根拠として使う

## 原則とボイス・トーン

### S001 Mailchimp Content Style Guide（Voice and Tone）

> You have the same voice all the time, but your tone changes.

- 媒体・日付: Mailchimp Content Style Guide「Voice and tone」／照合に使った commit c369d82（2022-05-04）
- URL: https://styleguide.mailchimp.com/voice-and-tone/
- URL（原稿）: https://raw.githubusercontent.com/mailchimp/content-style-guide/c369d8287c21446e86c35dddac6fbd4fdb97b863/02-voice-and-tone.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 声（voice）は一定・調子（tone）は状況で変える、という二層モデルの代表的な言い方。CC BY-NC 4.0（00-index.html.md に明記。「credit Mailchimp」を求める）。非営利条件のため、配布 skill 本文への逐語転載は著者判断。要旨での利用を推奨

### S002 Mailchimp Content Style Guide（Voice and Tone）

> Mailchimp’s tone is usually informal, but it’s always more important to be clear than entertaining.

- 媒体・日付: Mailchimp Content Style Guide「Voice and tone」／照合に使った commit c369d82（2022-05-04）
- URL: https://styleguide.mailchimp.com/voice-and-tone/
- URL（原稿）: https://raw.githubusercontent.com/mailchimp/content-style-guide/c369d8287c21446e86c35dddac6fbd4fdb97b863/02-voice-and-tone.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: くだけた調子を許しつつ「明確さ＞面白さ」の優先順位を明記。ユーモア推進派の代表として引かれがちだが、本文は条件付き。CC BY-NC 4.0（00-index.html.md に明記。「credit Mailchimp」を求める）。非営利条件のため、配布 skill 本文への逐語転載は著者判断。要旨での利用を推奨

### S003 Mailchimp Content Style Guide（Voice and Tone）

> forced humor can be worse than none at all

- 媒体・日付: Mailchimp Content Style Guide「Voice and tone」／照合に使った commit c369d82（2022-05-04）
- URL: https://styleguide.mailchimp.com/voice-and-tone/
- URL（原稿）: https://raw.githubusercontent.com/mailchimp/content-style-guide/c369d8287c21446e86c35dddac6fbd4fdb97b863/02-voice-and-tone.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ユーモアの副作用を推進側自身が書いている箇所。批判・限界の材料。CC BY-NC 4.0（00-index.html.md に明記。「credit Mailchimp」を求める）。非営利条件のため、配布 skill 本文への逐語転載は著者判断。要旨での利用を推奨

### S004 GOV.UK Service Manual（Writing for user interfaces）

> If you find yourself having to explain how the user interface works, that’s a sign something has gone wrong.

- 媒体・日付: GOV.UK Service Manual「Writing for user interfaces」／Published 10 October 2017, Last updated 16 April 2018
- URL: https://www.gov.uk/service-manual/design/writing-for-user-interfaces
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 説明文で UI の欠陥を補わない。OGL v3.0（gov.uk フッター「All content is available under the Open Government Licence v3.0, except where otherwise stated」）

### S005 GOV.UK Service Manual（Writing for user interfaces）

> If people do not notice your copy, you’re probably doing it right. Aim to be boring.

- 媒体・日付: GOV.UK Service Manual「Writing for user interfaces」／Published 10 October 2017, Last updated 16 April 2018
- URL: https://www.gov.uk/service-manual/design/writing-for-user-interfaces
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「目立たない文言」を目標にする。ブランドの声を出す流派と対極。「Aim to be boring」は Cap Watkins のブログ記事「The boring designer」（capwatkins.com）へのリンクで、言い回しの由来はそちら（記事本体は未照合）。OGL v3.0（gov.uk フッター「All content is available under the Open Government Licence v3.0, except where otherwise stated」）

### S006 GOV.UK Service Manual（Writing for user interfaces）

> some users find them harder to read, or misread them as the opposite of what they say

- 媒体・日付: GOV.UK Service Manual「Writing for user interfaces」／Published 10 October 2017, Last updated 16 April 2018
- URL: https://www.gov.uk/service-manual/design/writing-for-user-interfaces
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 否定の短縮形（can't・don't など）を避ける理由。Microsoft・Polaris は短縮形を勧めており食い違う。OGL v3.0（gov.uk フッター「All content is available under the Open Government Licence v3.0, except where otherwise stated」）

### S007 GOV.UK publishing guidance（Right tone）

> There’s usually no need to say ‘please’ or ‘please note’.

- 媒体・日付: GOV.UK「Writing to GOV.UK standards」Right tone（guidance.publishing.service.gov.uk。旧 gov.uk/guidance/content-design/writing-for-gov-uk から 301 転送）
- URL: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/right-tone/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: OGL v3.0（gov.uk フッター「All content is available under the Open Government Licence v3.0, except where otherwise stated」）

### S008 GOV.UK publishing guidance（Understand content design）

> Content design starts by taking a user need and meeting it on GOV.UK in the best way possible.

- 媒体・日付: GOV.UK「Writing to GOV.UK standards」Understand content design ／ GOV.UK Content and publishing guidance "Understand content design"（更新日は取得した本文に無い）
- URL: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/understand-content-design/ （旧 URL https://www.gov.uk/guidance/content-design/what-is-content-design から転送される）
- 取得日: 2026-11-16
- 検証区分: A
- 備考: コンテンツデザインの定義（利用者のニーズ起点）。OGL v3.0（gov.uk フッター「All content is available under the Open Government Licence v3.0, except where otherwise stated」） ／ ガイダンスが gov.uk から guidance.publishing.service.gov.uk へ移った時点情報。この項目は定義の 1 文だけを採った。OGL v3.0。

### S009 Apple Human Interface Guidelines（Writing）

> Avoid using we altogether because it may be unclear who the “we” in question refers to.

- 媒体・日付: Apple HIG「Writing」（取得時点の JSON）
- URL: https://developer.apple.com/design/human-interface-guidelines/writing
- URL（原稿）: https://developer.apple.com/tutorials/data/design/human-interface-guidelines/writing.json
- 取得日: 2026-11-16
- 検証区分: A
- 備考: we を全面的に避ける立場。Windows apps・Atlassian・GOV.UK（条件付き）と食い違う。Apple 著作物（全権利留保）。designer-apple の先例に倣い、出典を明示した短い引用に限る

### S010 Microsoft Writing Style Guide（Brand voice）

> we adapt our tone—from serious to empathetic to lighthearted—to fit the context and the customer's state of mind

- 媒体・日付: Microsoft Writing Style Guide「Microsoft brand voice: Above all, simple and human」（ms.date 2018-01-19。照合に使った源泉リポジトリの commit c6945c3 は 2024-11-11）
- URL: https://learn.microsoft.com/en-us/style-guide/brand-voice-above-all-simple-human
- URL（原稿）: https://raw.githubusercontent.com/MicrosoftDocs/microsoft-style-guide/c6945c32294e845a84b192a094fb1b7c2c452a6a/styleguide/brand-voice-above-all-simple-human.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 声は一定・調子は相手の状態に合わせる。Microsoft Learn 掲載。本文の源泉リポジトリ MicrosoftDocs/microsoft-style-guide は CC BY 4.0（LICENSE 確認）。Learn 版とリポジトリ版（c6945c3）の両方に同じ文があることを確認

### S011 Microsoft Writing Style Guide（Top 10 tips）

> Read your text aloud. Avoid jargon and overly complex or technical language.

- 媒体・日付: Microsoft Writing Style Guide「Top 10 tips for Microsoft style and voice」（ms.date 2026-07-02）
- URL: https://learn.microsoft.com/en-us/style-guide/top-10-tips-style-voice
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「Write like you speak」の節の本文。Learn 版（2026 年改訂）で照合。archived リポジトリ版（c6945c3）の同じ節は「Read your text aloud. Does it sound like something a real person would say?」で文が異なり、この文は CC BY 4.0 の源泉に無い。Microsoft Learn の利用規約に従い、出典を明示した短い引用に限る

### S012 Windows apps design（Writing style）

> Even when things break, don't blame the user for any problems.

- 媒体・日付: Microsoft Learn「Writing style」（Windows apps、ms.date 2020-09-24、updated_at 2026-06-27）
- URL: https://learn.microsoft.com/en-us/windows/apps/design/style/writing-style
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Microsoft Learn 掲載。源泉リポジトリ MicrosoftDocs/windows-dev-docs の LICENSE は CC BY 4.0（確認）。照合は Learn の頁で行い、源泉リポジトリに同文があるかは未照合

### S013 Windows apps design（Writing style）

> Research shows that people respond best to a writing style that's friendly, helpful, and concise.

- 媒体・日付: Microsoft Learn「Writing style」（Windows apps、ms.date 2020-09-24、updated_at 2026-06-27）
- URL: https://learn.microsoft.com/en-us/windows/apps/design/style/writing-style
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「Research shows」とあるが調査の出典は示されていない。主張として扱う。Microsoft Learn 掲載。源泉リポジトリ MicrosoftDocs/windows-dev-docs の LICENSE は CC BY 4.0（確認）。照合は Learn の頁で行い、源泉リポジトリに同文があるかは未照合

### S014 Windows apps design（Writing style）

> Use "we" to refer to your own perspective.

- 媒体・日付: Microsoft Learn「Writing style」（Windows apps、ms.date 2020-09-24、updated_at 2026-06-27）
- URL: https://learn.microsoft.com/en-us/windows/apps/design/style/writing-style
- 取得日: 2026-11-16
- 検証区分: A
- 備考: we を使う立場。続けて I・me でアプリを語らないと書く。Apple と食い違う。Microsoft Learn 掲載。源泉リポジトリ MicrosoftDocs/windows-dev-docs の LICENSE は CC BY 4.0（確認）。照合は Learn の頁で行い、源泉リポジトリに同文があるかは未照合

### S015 Google developer documentation style guide（Voice and tone）

> It's great to be polite, but using please in a set of instructions is overdoing the politeness.

- 媒体・日付: Google developer documentation style guide「Voice and tone」（Last updated 2026-05-27）
- URL: https://developers.google.com/style/tone
- 取得日: 2026-11-16
- 検証区分: A
- 備考: CC BY 4.0（ページ末尾「the content of this page is licensed under the Creative Commons Attribution 4.0 License」）。AI 生成の Page Summary 欄は引用対象から除外

### S016 Google developer documentation style guide（Writing for a global audience）

> Avoid humor. Most humor is difficult to translate, and much humor is culturally specific.

- 媒体・日付: Google developer documentation style guide「Write for a global audience」（Last updated 2026-10-02）
- URL: https://developers.google.com/style/translation
- 取得日: 2026-11-16
- 検証区分: A
- 備考: CC BY 4.0（ページ末尾「the content of this page is licensed under the Creative Commons Attribution 4.0 License」）。AI 生成の Page Summary 欄は引用対象から除外

### S017 Adobe Spectrum（Voice and tone）

> We speak with one voice and vary our tone depending on situational context.

- 媒体・日付: Adobe Spectrum「Voice and tone」
- URL: https://spectrum.adobe.com/page/voice-and-tone/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Adobe 著作物（サイト利用規約。再利用許諾の明記なし）。出典を明示した短い引用に限る

### S018 Adobe Spectrum（Voice and tone）

> Avoid language that’s overly opinionated, funny, or trendy.

- 媒体・日付: Adobe Spectrum「Voice and tone」
- URL: https://spectrum.adobe.com/page/voice-and-tone/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Adobe 著作物（サイト利用規約。再利用許諾の明記なし）。出典を明示した短い引用に限る

### S019 Microsoft Fluent 2（Content design）

> Avoid using first person (I, me, my, we, us, or ours) except if you need to write from the point of view of the reader.

- 媒体・日付: Fluent 2 Design System「Content design」
- URL: https://fluent2.microsoft.design/content-design
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 同じ Microsoft でも Windows apps（we を使う）と食い違う。Microsoft 著作物（© Microsoft。再利用許諾の明記なし）。出典を明示した短い引用に限る

### S020 GitLab Pajamas Design System（UI text）

> If necessary, you can use `please` when the user has been inconvenienced.

- 媒体・日付: Pajamas「UI text」（design.gitlab.com、commit fb06f89 を 2026-11-16 取得）
- URL: https://design.gitlab.com/content/ui-text
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/fb06f8934ea4fe3eb6bc29a13a9a6695a719176e/contents/content/ui-text.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: sorry・please を原則省き、迷惑をかけた場面だけ please を許す例外。MIT（design.gitlab.com リポジトリの LICENSE で確認）

### S021 Microsoft Fluent 2（Content design）

> Microsoft products follow sentence-style capitalization guidelines, because its easier for people to read and it’s easier for translators to localize content.

- 媒体・日付: Fluent 2 Design System「Content design」
- URL: https://fluent2.microsoft.design/content-design
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 続けて、他社のプラットフォーム上の製品はそのプラットフォームの規則に合わせると書く（Capitalize based on platform の節）。原文の「its」は原文のまま。Microsoft 著作物（© Microsoft。再利用許諾の明記なし）。出典を明示した短い引用に限る

### S022 freee アクセシビリティー・ガイドライン「テキストの文言」の解説

> テキストの品質を一定以上に保つために、ライティング・ガイドラインを別に定めると良いでしょう。

- 媒体・日付: freee株式会社「freee アクセシビリティー・ガイドライン」Ver. 202611.0-RELEASE+8.0.0 の解説ページ
- URL: https://a11y-guidelines.freee.co.jp/explanations/text-wording.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: アクセシビリティーの指針が、文の品質（分かりやすさ・表記の一貫性）を「アクセシビリティー以前の問題」として切り分け、別の指針に任せる。ライセンスは CC BY 4.0（サイトの表示で確認）

### S023 freee アクセシビリティー・ガイドライン「テキストの文言」の解説

> テキスト情報の文言について、アクセシビリティーの観点から特に重要なのは、特定の感覚を前提とした表現を単独で用いないということです。

- 媒体・日付: freee株式会社「freee アクセシビリティー・ガイドライン」Ver. 202611.0-RELEASE+8.0.0 の解説ページ
- URL: https://a11y-guidelines.freee.co.jp/explanations/text-wording.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 例「赤色のアイコンをクリック」。色だけで指す文は色弱の人やスクリーン・リーダーの利用者に伝わらない。続けて「避けるべきかというと、全くそんなことはあり」ませんと、単独で使わないことが要点だとする。CC BY 4.0

### S024 Ubie テックブログ（jimbo）「症状検索エンジン「ユビー」のUXライティングを改善している話」

> これらを意図せず混在させてしまうと、「プロダクトらしさ」が薄れ、多重人格のような印象を与えてしまう恐れがあります。

- 媒体・日付: Zenn（Ubie テックブログ）、2022-12-05 公開
- URL: https://zenn.dev/ubie_dev/articles/43eb11e303e58a
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「こんにちは！」「体調はいかがですか？」「お加減はいかがでしょうか」の混在を例に、語調の不統一を問題にする。ボイスの定義と textlint の導入を述べる国内の実務報告。著者の著作物で、短い引用にとどめる。企業の公式指針ではなく実務者の報告

### S025 GOV.UK Government Design Principles

> Service design starts with identifying user needs. If you don’t know what the user needs are, you won’t build the right thing. Do research, analyse data, talk to users. Don’t make assumptions. Have empathy for users, and remember that what they ask for isn’t always what they need.

- 媒体・日付: GOV.UK "Government Design Principles"（初公開 2012-04-03。現行は 11 原則） ／ Government Design Principles（公式ガイダンス、2012-04-03 公開・2025-04-02 更新）
- URL: https://www.gov.uk/guidance/government-design-principles
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 現行の原則は Start with user needs / Do less / Design with data / Do the hard work to make it simple / Iterate. Then iterate again / This is for everyone / Understand context / Build digital services, not websites / Be consistent, not uniform / Make things open / Minimise environmental impact。最後の原則は後年の追加と思われるが、追加日は取得していない。OGL v3.0 ／ 原則 1。「求められたもの」と「必要なもの」を分ける問いの型。政府機関の自称。

### S026 Sarah Winters（Content Design London）

> Content design is answering a user need in the best way for the user to consume it.

- 媒体・日付: Content Design London blog "What is content design?", 2019-12-05（Last reviewed: 2024-09-05）
- URL: https://contentdesign.london/blog/what-is-content-design
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 工程を research → user needs → channel and journey mapping → language and emotion → creation → sharing → iteration と書く。「トラフィックは虚栄の指標」とも書く（要旨）。著書の一節を記事内で引くが、書籍そのものは照合していない。著作権表示のみ

### S027 MailChimp "Voice and Tone"（2012 年の保存コピー）

> Though our voice doesn’t change, our tone adapts to our users’ feelings.

- 媒体・日付: voiceandtone.com（© 2012 The Rocket Science Group）。Wayback の保存コピー 2012-09-13
- URL: https://web.archive.org/web/20120913182202/http://voiceandtone.com/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「ボイスは一定、トーンは読み手の気持ちに合わせる」を、成功・失敗・法令の通知など場面ごとの見本で示した対話型の指針の 2012 年時点の記録。現行の版は S001。これより古い起源は確認していない

### S028 Kate Moran（NN/g）

> The tone of any piece of content can be analyzed along 4 dimensions: humor, formality, respectfulness, and enthusiasm.

- 媒体・日付: NN/g "The Four Dimensions of Tone of Voice", 2016-07-17
- URL: https://www.nngroup.com/articles/tone-of-voice-dimensions/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: トーンを「面白さ・堅さ・敬意・熱量」の 4 軸で記述する枠組み。ボイスとトーンを決める作業表の軸に使える

### S029 Kate Moran（NN/g）

> Casual, conversational, and enthusiastic tones performed best.
> This tone-sample pair illustrates the fact that humor can be a powerful way of differentiating you from your competitors — as long as your users actually find it funny.
> Different tones of voice on a website have measurable impacts on users’ perceptions of a brand’s friendliness, trustworthiness, and desirability.

- 媒体・日付: NN/g "The Impact of Tone of Voice on Users' Brand Perception", 2016-08-07
- URL: https://www.nngroup.com/articles/tone-voice-users/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 内容をほぼ同じにしてトーンだけを変えた対の文面で、親しみ・信頼・望ましさの評価を比べた NN/g の調査。くだけたトーンが概して好まれたが、一部の参加者は強く嫌ったとも書く。冗談は「利用者が本当に面白いと思う場合に限る」という条件付き。業種（金融など）での差は記事の範囲で確認する

## 部品ごとの文言（ボタン・エラー・空・確認・通知・ヘルプ・メール）

### S030 Mailchimp Content Style Guide（Web Elements）

> Button copy should always include verbs. Keep things clear and concise, and use sentence case.

- 媒体・日付: Mailchimp Content Style Guide「Web elements」／照合に使った commit c369d82（2022-05-04）
- URL: https://styleguide.mailchimp.com/web-elements/
- URL（原稿）: https://raw.githubusercontent.com/mailchimp/content-style-guide/c369d8287c21446e86c35dddac6fbd4fdb97b863/06-web-elements.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ボタン＝動詞・簡潔・sentence case。CC BY-NC 4.0（00-index.html.md に明記。「credit Mailchimp」を求める）。非営利条件のため、配布 skill 本文への逐語転載は著者判断。要旨での利用を推奨

### S031 Mailchimp Content Style Guide（Writing Email Newsletters）

> More than 50 percent of emails are read on a mobile device.

- 媒体・日付: Mailchimp Content Style Guide「Writing Email Newsletters」／照合に使った commit c369d82（2022-05-04）
- URL: https://styleguide.mailchimp.com/writing-email-newsletters/
- URL（原稿）: https://raw.githubusercontent.com/mailchimp/content-style-guide/c369d8287c21446e86c35dddac6fbd4fdb97b863/10-writing-email-newsletters.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数値は原文にあるが、原文自体が根拠（調査名）を示していない。2022 年以前の時点の主張として扱い、「出典あり数値」には数えない。CC BY-NC 4.0（00-index.html.md に明記。「credit Mailchimp」を求める）。非営利条件のため、配布 skill 本文への逐語転載は著者判断。要旨での利用を推奨

### S032 GOV.UK Design System（Error message）

> Do not clear any form fields when showing the Error message component.

- 媒体・日付: GOV.UK Design System「Error message」／リポジトリ commit 5f31aa7（2026-11-11）
- URL: https://design-system.service.gov.uk/components/error-message/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/components/error-message/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: エラー時に入力を消さない。サイト本文は OGL v3.0（design-system.service.gov.uk のフッターで確認）。リポジトリの LICENSE は MIT（コード）

### S033 GOV.UK Design System（Error message）

> ‘valid’ and ‘invalid’ because they do not add anything to the message

- 媒体・日付: GOV.UK Design System「Error message」／リポジトリ commit 5f31aa7（2026-11-11）
- URL: https://design-system.service.gov.uk/components/error-message/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/components/error-message/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: invalid を避ける根拠（情報を足さない）。Win32 は incorrect への置換を勧める（別出典）。サイト本文は OGL v3.0（design-system.service.gov.uk のフッターで確認）。リポジトリの LICENSE は MIT（コード）

### S034 GOV.UK Design System（Error message）

> Error messages should directly include language from the question or fieldset label.

- 媒体・日付: GOV.UK Design System「Error message」／リポジトリ commit 5f31aa7（2026-11-11）
- URL: https://design-system.service.gov.uk/components/error-message/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/components/error-message/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ラベルの語をエラー文に再使用する。サイト本文は OGL v3.0（design-system.service.gov.uk のフッターで確認）。リポジトリの LICENSE は MIT（コード）

### S035 GOV.UK Design System（Error message）

> Do not use error messages to tell a user that they are not eligible or do not have permission to do something.

- 媒体・日付: GOV.UK Design System「Error message」／リポジトリ commit 5f31aa7（2026-11-11）
- URL: https://design-system.service.gov.uk/components/error-message/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/components/error-message/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 資格・権限の問題はエラーメッセージの役割ではない（別ページで説明する）。部品の守備範囲の線引き。サイト本文は OGL v3.0（design-system.service.gov.uk のフッターで確認）。リポジトリの LICENSE は MIT（コード）

### S036 GOV.UK Design System（Error message）

> includes a hidden 'Error:' before the error message

- 媒体・日付: GOV.UK Design System「Error message」／リポジトリ commit 5f31aa7（2026-11-11）
- URL: https://design-system.service.gov.uk/components/error-message/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/components/error-message/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: スクリーンリーダー向けに視覚的に隠した接頭辞を入れる。文言と支援技術の接点。サイト本文は OGL v3.0（design-system.service.gov.uk のフッターで確認）。リポジトリの LICENSE は MIT（コード）

### S037 GOV.UK Design System（Button）

> Write button text in sentence case, describing the action it performs.

- 媒体・日付: GOV.UK Design System「Button」／commit 5f31aa7
- URL: https://design-system.service.gov.uk/components/button/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/components/button/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: サイト本文は OGL v3.0（design-system.service.gov.uk のフッターで確認）。リポジトリの LICENSE は MIT（コード）

### S038 GOV.UK Design System（Text input）

> Do not use placeholder text in place of a label, or for hints or examples, as:
> it vanishes when the user starts typing, which can cause problems for users with memory conditions or when reviewing answers
> not all screen readers read it out

- 媒体・日付: GOV.UK Design System「Text input」／commit 5f31aa7
- URL: https://design-system.service.gov.uk/components/text-input/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/components/text-input/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 理由として、入力で消える・読み上げない支援技術がある・コントラスト（WCAG 1.4.3）を挙げる。ヒントや例にも使わない点で Carbon と食い違う。サイト本文は OGL v3.0（design-system.service.gov.uk のフッターで確認）。リポジトリの LICENSE は MIT（コード）

### S039 GOV.UK Design System（Notification banner）

> use a notification banner to tell the user about validation errors
> Do not: use a notification banner to tell the user about validation errors - use an Error message component and Error summary component instead

- 媒体・日付: GOV.UK Design System「Notification banner」／commit 5f31aa7
- URL: https://design-system.service.gov.uk/components/notification-banner/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/components/notification-banner/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「Do not:」の箇条の一項目。入力エラーは通知バナーでなくエラー要約とエラーメッセージで出す。サイト本文は OGL v3.0（design-system.service.gov.uk のフッターで確認）。リポジトリの LICENSE は MIT（コード）

### S040 GOV.UK Service Manual（Writing for user interfaces）

> do not say ‘You have entered the wrong password’. Say ‘Wrong password’.

- 媒体・日付: GOV.UK Service Manual「Writing for user interfaces」／Published 10 October 2017, Last updated 16 April 2018
- URL: https://www.gov.uk/service-manual/design/writing-for-user-interfaces
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 主語「you」で利用者を責める形を避け、事実だけを短く言う例。OGL v3.0（gov.uk フッター「All content is available under the Open Government Licence v3.0, except where otherwise stated」）

### S041 GOV.UK Service Manual（Writing for user interfaces）

> Say ‘sorry’ if something serious has gone wrong

- 媒体・日付: GOV.UK Service Manual「Writing for user interfaces」／Published 10 October 2017, Last updated 16 April 2018
- URL: https://www.gov.uk/service-manual/design/writing-for-user-interfaces
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 謝罪は深刻な障害のときだけ。OGL v3.0（gov.uk フッター「All content is available under the Open Government Licence v3.0, except where otherwise stated」）

### S042 GOV.UK Service Manual（Writing for user interfaces）

> There’s no need to say ‘sorry’ in validation error messages.

- 媒体・日付: GOV.UK Service Manual「Writing for user interfaces」／Published 10 October 2017, Last updated 16 April 2018
- URL: https://www.gov.uk/service-manual/design/writing-for-user-interfaces
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 入力検証のエラーでは謝らない。OGL v3.0（gov.uk フッター「All content is available under the Open Government Licence v3.0, except where otherwise stated」）

### S043 GOV.UK Service Manual（Sending emails and text messages）

> Say only one important thing in each message.

- 媒体・日付: GOV.UK Service Manual「Sending emails and text messages」／Published 21 June 2017, Last updated 3 October 2017
- URL: https://www.gov.uk/service-manual/design/sending-emails-and-text-messages
- 取得日: 2026-11-16
- 検証区分: A
- 備考: OGL v3.0（gov.uk フッター「All content is available under the Open Government Licence v3.0, except where otherwise stated」）

### S044 GOV.UK Service Manual（Sending emails and text messages）

> start emails with ‘Dear [firstname lastname]’ not ‘Hi’ (you don’t need to do either for texts)

- 媒体・日付: GOV.UK Service Manual「Sending emails and text messages」／Published 21 June 2017, Last updated 3 October 2017
- URL: https://www.gov.uk/service-manual/design/sending-emails-and-text-messages
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 行政サービスの宛名の型。カジュアルな商用メールの流儀と対照。OGL v3.0（gov.uk フッター「All content is available under the Open Government Licence v3.0, except where otherwise stated」）

### S045 GOV.UK Service Manual（Sending emails and text messages）

> Never send subscription messages unless the user has explicitly asked for them

- 媒体・日付: GOV.UK Service Manual「Sending emails and text messages」／Published 21 June 2017, Last updated 3 October 2017
- URL: https://www.gov.uk/service-manual/design/sending-emails-and-text-messages
- 取得日: 2026-11-16
- 検証区分: A
- 備考: OGL v3.0（gov.uk フッター「All content is available under the Open Government Licence v3.0, except where otherwise stated」）

### S046 GOV.UK Service Manual（Sending emails and text messages）

> only send links which point to the GOV.UK domain

- 媒体・日付: GOV.UK Service Manual「Sending emails and text messages」／Published 21 June 2017, Last updated 3 October 2017
- URL: https://www.gov.uk/service-manual/design/sending-emails-and-text-messages
- 取得日: 2026-11-16
- 検証区分: A
- 備考: フィッシング対策としてのリンク先の制限。文言の信頼性の論点。OGL v3.0（gov.uk フッター「All content is available under the Open Government Licence v3.0, except where otherwise stated」）

### S047 Apple Human Interface Guidelines（Writing）

> For example, just saying “Send” often works better than “Let’s do it!”

- 媒体・日付: Apple HIG「Writing」（取得時点の JSON）
- URL: https://developer.apple.com/design/human-interface-guidelines/writing
- URL（原稿）: https://developer.apple.com/tutorials/data/design/human-interface-guidelines/writing.json
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 動作を名指すボタン文言。Apple 著作物（全権利留保）。designer-apple の先例に倣い、出典を明示した短い引用に限る

### S048 Apple Human Interface Guidelines（Writing）

> Provide clear next steps on any blank screens.

- 媒体・日付: Apple HIG「Writing」（取得時点の JSON）
- URL: https://developer.apple.com/design/human-interface-guidelines/writing
- URL（原稿）: https://developer.apple.com/tutorials/data/design/human-interface-guidelines/writing.json
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 空の状態に次の一手を置く。Apple 著作物（全権利留保）。designer-apple の先例に倣い、出典を明示した短い引用に限る

### S049 Apple Human Interface Guidelines（Alerts）

> Avoid displaying alerts for common, undoable actions, even when they’re destructive.

- 媒体・日付: Apple HIG「Alerts」
- URL: https://developer.apple.com/design/human-interface-guidelines/alerts
- URL（原稿）: https://developer.apple.com/tutorials/data/design/human-interface-guidelines/alerts.json
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 取り消せる操作には確認を出さない。Win32 と一致。GitLab の「重大度が高いときは名前入力」とは観点が異なる。Apple 著作物（全権利留保）。designer-apple の先例に倣い、出典を明示した短い引用に限る

### S050 Apple Human Interface Guidelines（Alerts）

> Avoid writing a title that doesn’t convey useful information

- 媒体・日付: Apple HIG「Alerts」
- URL: https://developer.apple.com/design/human-interface-guidelines/alerts
- URL（原稿）: https://developer.apple.com/tutorials/data/design/human-interface-guidelines/alerts.json
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 続けて「Error」「Error 329347 occurred」のような題名を悪例に挙げる。Apple 著作物（全権利留保）。designer-apple の先例に倣い、出典を明示した短い引用に限る

### S051 Apple Human Interface Guidelines（Alerts）

> Avoid using OK as the default button title unless the alert is purely informational.

- 媒体・日付: Apple HIG「Alerts」
- URL: https://developer.apple.com/design/human-interface-guidelines/alerts
- URL（原稿）: https://developer.apple.com/tutorials/data/design/human-interface-guidelines/alerts.json
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Carbon の用語集（OK は他に適切なラベルが無いときだけ）と一致。Apple 著作物（全権利留保）。designer-apple の先例に倣い、出典を明示した短い引用に限る

### S052 Apple Human Interface Guidelines（Text fields）

> Because placeholder text disappears when people start typing, it can also be useful to include a separate label describing the field to remind people of its purpose.

- 媒体・日付: Apple HIG「Text fields」
- URL: https://developer.apple.com/design/human-interface-guidelines/text-fields
- URL（原稿）: https://developer.apple.com/tutorials/data/design/human-interface-guidelines/text-fields.json
- 取得日: 2026-11-16
- 検証区分: A
- 備考: プレースホルダーをヒントに使う前提で、別ラベルは「有用なこともある」。GOV.UK より緩い。Apple 著作物（全権利留保）。designer-apple の先例に倣い、出典を明示した短い引用に限る

### S053 Apple Human Interface Guidelines（Notifications）

> Avoid sending multiple notifications for the same thing, even if someone hasn’t responded.

- 媒体・日付: Apple HIG「Notifications」
- URL: https://developer.apple.com/design/human-interface-guidelines/notifications
- URL（原稿）: https://developer.apple.com/tutorials/data/design/human-interface-guidelines/notifications.json
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Apple 著作物（全権利留保）。designer-apple の先例に倣い、出典を明示した短い引用に限る

### S054 Apple Human Interface Guidelines（Notifications）

> avoid including private information that could be visible to others

- 媒体・日付: Apple HIG「Notifications」
- URL: https://developer.apple.com/design/human-interface-guidelines/notifications
- URL（原稿）: https://developer.apple.com/tutorials/data/design/human-interface-guidelines/notifications.json
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ロック画面などで第三者に見える前提の文言設計。Apple 著作物（全権利留保）。designer-apple の先例に倣い、出典を明示した短い引用に限る

### S055 Windows Win32 UX Guidelines（Error messages）

> Good error messages aren't just a UI problem, they are a software design problem.

- 媒体・日付: Microsoft Learn「Error Messages」（Win32 UX Guide、updated_at 2025-07-24）
- URL: https://learn.microsoft.com/en-us/windows/win32/uxguide/mess-error
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 文言だけでなく設計の問題として扱う。Microsoft Learn 掲載。源泉リポジトリ MicrosoftDocs/win32 の LICENSE は CC BY 4.0（raw.githubusercontent で確認）。照合は Learn の頁で行い、源泉リポジトリに同文があるかは未照合

### S056 Windows Win32 UX Guidelines（Error messages）

> most error messages could be nominees for the Hall of Shame

- 媒体・日付: Microsoft Learn「Error Messages」（Win32 UX Guide、updated_at 2025-07-24）
- URL: https://learn.microsoft.com/en-us/windows/win32/uxguide/mess-error
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 自社の過去のエラー文への自己批判。Microsoft Learn 掲載。源泉リポジトリ MicrosoftDocs/win32 の LICENSE は CC BY 4.0（raw.githubusercontent で確認）。照合は Learn の頁で行い、源泉リポジトリに同文があるかは未照合

### S057 Windows Win32 UX Guidelines（Error messages）

> Failed to (use unable to instead)

- 媒体・日付: Microsoft Learn「Error Messages」（Win32 UX Guide、updated_at 2025-07-24）
- URL: https://learn.microsoft.com/en-us/windows/win32/uxguide/mess-error
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 避ける語の一覧の一項目。同じ一覧に Error, failure（→ problem）、Illegal, invalid, bad（→ incorrect）、Abort, kill, terminate（→ stop）、Catastrophic, fatal（→ serious）。Microsoft Learn 掲載。源泉リポジトリ MicrosoftDocs/win32 の LICENSE は CC BY 4.0（raw.githubusercontent で確認）。照合は Learn の頁で行い、源泉リポジトリに同文があるかは未照合

### S058 Windows Win32 UX Guidelines（Confirmations）

> Users quickly discover when a program has unnecessary confirmations and their natural response is to dismiss them as quickly as possible, often without reading.

- 媒体・日付: Microsoft Learn「Confirmations」（Win32 UX Guide、updated_at 2025-07-24）
- URL: https://learn.microsoft.com/en-us/windows/win32/uxguide/mess-confirm
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 確認ダイアログの形骸化（慣れ）の指摘。Microsoft Learn 掲載。源泉リポジトリ MicrosoftDocs/win32 の LICENSE は CC BY 4.0（raw.githubusercontent で確認）。照合は Learn の頁で行い、源泉リポジトリに同文があるかは未照合

### S059 Windows Win32 UX Guidelines（Confirmations）

> Is the user about to abandon a task? If so, don't confirm.

- 媒体・日付: Microsoft Learn「Confirmations」（Win32 UX Guide、updated_at 2025-07-24）
- URL: https://learn.microsoft.com/en-us/windows/win32/uxguide/mess-confirm
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 確認の代わりに「Prevent errors.」「Provide undo.」を挙げる。Microsoft Learn 掲載。源泉リポジトリ MicrosoftDocs/win32 の LICENSE は CC BY 4.0（raw.githubusercontent で確認）。照合は Learn の頁で行い、源泉リポジトリに同文があるかは未照合

### S060 Windows Win32 UX Guidelines（Notifications）

> notifications are displayed for a fixed duration of 9 seconds

- 媒体・日付: Microsoft Learn「Notifications」（Win32 UX Guide、updated_at 2025-03-11）
- URL: https://learn.microsoft.com/en-us/windows/win32/uxguide/mess-notif
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Windows Vista 以降の表示時間（出典あり数値・OS 固有）。Microsoft Learn 掲載。源泉リポジトリ MicrosoftDocs/win32 の LICENSE は CC BY 4.0（raw.githubusercontent で確認）。照合は Learn の頁で行い、源泉リポジトリに同文があるかは未照合

### S061 Google Technical Writing（Error messages course）

> Great error messages answer two questions as clearly and concisely as possible:

- 媒体・日付: Google「Technical Writing: Error messages」（Last updated 2025-03-31）
- URL: https://developers.google.com/tech-writing/error-messages
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 二つの問いは What went wrong? と How does the user fix that problem?。CC BY 4.0（ページ末尾「the content of this page is licensed under the Creative Commons Attribution 4.0 License」）。AI 生成の Page Summary 欄は引用対象から除外

### S062 Google Technical Writing（Error messages: General error handling rules）

> Failure is inevitable; failing to report failures is inexcusable.

- 媒体・日付: Google「Error messages: General error handling rules」（Last updated 2025-03-31）
- URL: https://developers.google.com/tech-writing/error-messages/error-handling
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 黙って失敗しない（Don't fail silently の節）。CC BY 4.0（ページ末尾「the content of this page is licensed under the Creative Commons Attribution 4.0 License」）。AI 生成の Page Summary 欄は引用対象から除外

### S063 Adobe Spectrum（Writing for errors）

> The best error message is no error happening at all.

- 媒体・日付: Adobe Spectrum「Writing for errors」
- URL: https://spectrum.adobe.com/page/writing-for-errors/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: エラー文の前に、エラーを起こさない設計。Adobe 著作物（サイト利用規約。再利用許諾の明記なし）。出典を明示した短い引用に限る

### S064 Adobe Spectrum（Writing for errors）

> Don’t blame the user, even if the error is their fault

- 媒体・日付: Adobe Spectrum「Writing for errors」
- URL: https://spectrum.adobe.com/page/writing-for-errors/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Adobe 著作物（サイト利用規約。再利用許諾の明記なし）。出典を明示した短い引用に限る

### S065 Adobe Spectrum（Writing for errors）

> Put error codes at the end of the message

- 媒体・日付: Adobe Spectrum「Writing for errors」
- URL: https://spectrum.adobe.com/page/writing-for-errors/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: エラーコードは問い合わせ用に末尾へ。Adobe 著作物（サイト利用規約。再利用許諾の明記なし）。出典を明示した短い引用に限る

### S066 Adobe Spectrum（Writing for onboarding）

> Try to keep tutorials and product tours under 10 steps.

- 媒体・日付: Adobe Spectrum「Writing for onboarding」
- URL: https://spectrum.adobe.com/page/writing-for-onboarding/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 10 ステップは指針上の目安（根拠となる調査は示されていない）。Adobe 著作物（サイト利用規約。再利用許諾の明記なし）。出典を明示した短い引用に限る

### S067 GitLab Pajamas Design System（Destructive actions）

> Require input confirmation of the deleted object's name when the action removes additional resources within.

- 媒体・日付: Pajamas「Destructive actions」
- URL: https://design.gitlab.com/patterns/destructive-actions
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/fb06f8934ea4fe3eb6bc29a13a9a6695a719176e/contents/patterns/destructive-actions.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 重大度（high / medium / low）で摩擦を変える。low は摩擦なしも可。MIT（design.gitlab.com リポジトリの LICENSE で確認）

### S068 GitLab Pajamas Design System（Toast）

> Avoid using actions in a toast.

- 媒体・日付: Pajamas「Toast」
- URL: https://design.gitlab.com/components/toast
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/fb06f8934ea4fe3eb6bc29a13a9a6695a719176e/contents/components/toast.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: トーストに操作を置かない。Material（スナックバーの取り消し）と食い違う。MIT（design.gitlab.com リポジトリの LICENSE で確認）

### S069 GitLab Pajamas Design System（Tooltip）

> Tooltips should not auto-dismiss as it would violate

- 媒体・日付: Pajamas「Tooltip」
- URL: https://design.gitlab.com/components/tooltip
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/fb06f8934ea4fe3eb6bc29a13a9a6695a719176e/contents/components/tooltip.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: MIT（design.gitlab.com リポジトリの LICENSE で確認）

### S070 GitLab Pajamas Design System（Empty states）

> Try to limit to 5 words

- 媒体・日付: Pajamas「Empty states」
- URL: https://design.gitlab.com/patterns/empty-states
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/fb06f8934ea4fe3eb6bc29a13a9a6695a719176e/contents/patterns/empty-states.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 空の状態の見出しの長さの目安（根拠となる調査は示されていない）。MIT（design.gitlab.com リポジトリの LICENSE で確認）

### S071 GitLab Pajamas Design System（Notifications）

> Overburdening users with notifications is fatiguing and inhibits productivity, but also devalues the notification system as a whole.

- 媒体・日付: Pajamas「Notifications」
- URL: https://design.gitlab.com/patterns/notifications
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/fb06f8934ea4fe3eb6bc29a13a9a6695a719176e/contents/patterns/notifications.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 通知疲れ。MIT（design.gitlab.com リポジトリの LICENSE で確認）

### S072 IBM Carbon Design System（Text input）

> it should not be used as a replacement for a persistent label nor should it contain crucial information

- 媒体・日付: Carbon「Text input」usage（carbon-website commit 5e9cd1d、2026-09-30）
- URL: https://www.carbondesignsystem.com/building-blocks/core/components/text-input/guidelines
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/components/text-input/usage.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: プレースホルダーにヒント・例を入れることは許す立場。Apache-2.0（carbon-website リポジトリ）。リポジトリは archived（Web サイトは PayloadCMS へ移行）なので時点情報として扱う。文書 URL は旧 URL（carbondesignsystem.com/components/... など）の転送先として 2026-11-16 に確認した新 URL。新サイトの本文が同文かは未照合

### S073 IBM Carbon Design System（Modal）

> Both the title and the button should reflect the action that will occur.

- 媒体・日付: Carbon「Modal」usage（commit 5e9cd1d）
- URL: https://www.carbondesignsystem.com/building-blocks/core/components/modal/guidelines
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/components/modal/usage.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 続けて、破壊的・取り消せない操作は danger modal を使うと書く。Apache-2.0（carbon-website リポジトリ）。リポジトリは archived（Web サイトは PayloadCMS へ移行）なので時点情報として扱う。文書 URL は旧 URL（carbondesignsystem.com/components/... など）の転送先として 2026-11-16 に確認した新 URL。新サイトの本文が同文かは未照合

### S074 IBM Carbon Design System（Notification）

> User actions are mandatory for error messages.

- 媒体・日付: Carbon「Notification」usage（commit 5e9cd1d）
- URL: https://www.carbondesignsystem.com/building-blocks/core/components/notification/guidelines
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/components/notification/usage.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: IBM Style の「user action」（解決の手順）をエラーに必須とする。Apache-2.0（carbon-website リポジトリ）。リポジトリは archived（Web サイトは PayloadCMS へ移行）なので時点情報として扱う。文書 URL は旧 URL（carbondesignsystem.com/components/... など）の転送先として 2026-11-16 に確認した新 URL。新サイトの本文が同文かは未照合

### S075 IBM Carbon Design System（Tooltip）

> contextual, helpful, and nonessential

- 媒体・日付: Carbon「Tooltip」usage（commit 5e9cd1d）
- URL: https://www.carbondesignsystem.com/building-blocks/core/components/tooltip/guidelines
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/components/tooltip/usage.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ツールチップに必須情報を入れない。Apache-2.0（carbon-website リポジトリ）。リポジトリは archived（Web サイトは PayloadCMS へ移行）なので時点情報として扱う。文書 URL は旧 URL（carbondesignsystem.com/components/... など）の転送先として 2026-11-16 に確認した新 URL。新サイトの本文が同文かは未照合

### S076 IBM Carbon Design System（Empty states pattern）

> Where possible, write this as a positive statement.

- 媒体・日付: Carbon「Empty states」pattern（commit 5e9cd1d）
- URL: https://www.carbondesignsystem.com/building-blocks/core/patterns/empty-states
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/patterns/empty-states-pattern/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 空の状態の見出しを否定形にしない。Apache-2.0（carbon-website リポジトリ）。リポジトリは archived（Web サイトは PayloadCMS へ移行）なので時点情報として扱う。文書 URL は旧 URL（carbondesignsystem.com/components/... など）の転送先として 2026-11-16 に確認した新 URL。新サイトの本文が同文かは未照合

### S077 Material Components for Android（Snackbar）

> Snackbars can also offer the ability to perform an action, such as undoing an action that was just taken, or retrying an action that had failed.

- 媒体・日付: material-components-android docs/components/Snackbar.md（commit 66b0eeb）
- URL: https://github.com/material-components/material-components-android/blob/66b0eeb53afeb6025ffbbd37734b08e5bce197ed/docs/components/Snackbar.md
- URL（原稿）: https://raw.githubusercontent.com/material-components/material-components-android/66b0eeb53afeb6025ffbbd37734b08e5bce197ed/docs/components/Snackbar.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: M3 本体（m3.material.io）は JS 描画で取得できず、実装ドキュメントで代替。文書 URL は GitHub 上の同ファイル。Apache-2.0（material-components-android の LICENSE で確認）。実装ドキュメントであり、Material の UX ライティング指針そのものではない

### S078 Apple Human Interface Guidelines（Buttons）

> Using title-style capitalization, consider starting the label with a verb to help convey the button’s action

- 媒体・日付: Apple HIG「Buttons」
- URL: https://developer.apple.com/design/human-interface-guidelines/buttons
- URL（原稿）: https://developer.apple.com/tutorials/data/design/human-interface-guidelines/buttons.json
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「title-style capitalization」は Apple Style Guide への参照リンク。Apple はボタンを title-style とする。Alerts の頁は、題名が完全な文なら sentence-style、断片なら title-style と書き分ける。Writing の頁は要素の種類ごとに一方を選んで一貫させるよう求める。Apple 著作物（全権利留保）。designer-apple の先例に倣い、出典を明示した短い引用に限る

### S079 デジタル庁 デザインシステム（DADS）「インプットテキスト」使い方

> サポートテキストを企図して、プレースホルダーテキストを使用してはなりません。

- 媒体・日付: デジタル庁 デザインシステム、ページの更新日 2025 年 8 月 20 日
- URL: https://design.digital.go.jp/dads/components/input-text/usage/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: プレースホルダーを説明文の代わりにしない。入力条件は常に見えるサポートテキストに書く。design.digital.go.jp 自体のライセンス表示は見つからず（www.digital.go.jp は PDL1.0）。短い引用にとどめる。DADS には文言専用のページは見つからなかった（取得した範囲の限界）

### S080 デジタル庁 デザインシステム（DADS）「インプットテキスト」使い方

> 具体的なエラー内容および訂正方法を記述します。

- 媒体・日付: デジタル庁 デザインシステム、ページの更新日 2025 年 8 月 20 日（2025-08-20）
- URL: https://design.digital.go.jp/dads/components/input-text/usage/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: エラーテキストに「内容」と「訂正方法」を書く。SmartHR（S228）の「原因・対処」と同じ要素

### S081 Jakob Nielsen（NN/g。10 Usability Heuristics の 9 番）

> Error messages should be expressed in plain language (no error codes), precisely indicate the problem, and constructively suggest a solution.

- 媒体・日付: NN/g "10 Usability Heuristics for User Interface Design"（表示日 1994-04-24。名称と説明は Kate Moran・Feifei Liu が更新と記事が書く）
- URL: https://www.nngroup.com/articles/ten-usability-heuristics/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: エラー文言の 3 条件（平易な言葉・問題の特定・解決の提案）の根拠。原則の 5 番は Error Prevention で、文言で直す前に誤りを起こさせない設計が先にある

### S082 Tim Neusesser・Evan Sunwall（NN/g）

> Don't use phrasing that blames users or implies they are doing something wrong, such as invalid, illegal, or incorrect
> Avoid humor since it can become stale if users encounter the error frequently.

- 媒体・日付: NN/g "Error-Message Guidelines", 2023-05-14
- URL: https://www.nngroup.com/articles/error-message-guidelines/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 責める語（invalid・illegal・incorrect）と、繰り返し見るエラーでの冗談を避ける根拠。「監視される語」の英語側の出典。日本語の「不正な」「無効な」に当てはめるのは本 skill の整理（推測）。HTML では語の部分が強調タグで区切られている

### S083 Kate Kaplan（NN/g）

> Premature error messages, aggressively styled fields, and unnecessarily disruptive system-status messages feel bad-mannered and increase cognitive load for users during otherwise simple tasks.

- 媒体・日付: NN/g "Hostile Patterns in Error Messages", 2022-10-30
- URL: https://www.nngroup.com/articles/hostile-error-messages/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 入力途中で出るエラー、過剰に強調した入力欄、不要に作業を止める状態表示を「敵対的」と呼ぶ。文言だけでなく、出すタイミングと見た目も文言の印象を決める、という根拠

### S084 Don Norman

> Does human error cause accidents? Yes, but we need to know what led to the error: in the majority of instances it is inappropriate design of equipment or procedures.

- 媒体・日付: jnd.org "Human Error? No, Bad Design"（LinkedIn の連載を転載）, 2014-04-13
- URL: https://jnd.org/human-error-no-bad-design/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「利用者の誤り」と書く前に設計を疑う、という責めない文言の背景になる考え方。ライセンスはページ表示で CC BY-NC 4.0（ページ下部の表示。記事単位の適用は確認していない）

### S085 Microsoft（Windows デスクトップアプリの UX ガイドライン "Error messages"）

> use phrasing that blames the user or implies user error.
> For example, it is better to say An unknown error occurred than something that is likely to be inaccurate.

- 媒体・日付: Microsoft Learn "Error Messages in Windows 7 - Win32 apps"（ページの title 表示。ms.date は 2022-01-11。本文は Windows 7 の時代の UX ガイドラインで、Windows Vista への言及を含む）
- URL: https://learn.microsoft.com/en-us/windows/win32/uxguide/mess-error
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 1 つめは "Don't use phrasing that blames the user or implies user error." の後半（HTML で "Don't" の直後にタグがあり、照合は後半で行った）。2 つめは、原因が本当に分からないときは不正確な推測より「不明なエラー」と正直に書くほうがよい、という指針で、「『エラーが発生しました』は常に悪い」という単純化への反証になる。ほかに「please」の使いどころ、責めないための受動態の使い方も書く。© Microsoft

### S086 Ben Shneiderman

> As much as possible, design the interface so that users cannot make serious errors
> identical terminology should be used in prompts, menus, and help screens

- 媒体・日付: cs.umd.edu "Eight Golden Rules of Interface Design"（『Designing the User Interface』第 6 版 2016 の 3.3.4 節の版。原型は 1985 年と本人が書く）
- URL: https://www.cs.umd.edu/users/ben/goldenrules.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 5 番 Prevent errors。1 番は、プロンプト・メニュー・ヘルプで同じ用語を使うこと（用語の一貫性）を含む。用語集の運用の古い根拠

## 用語と用語集

### S087 Apple Human Interface Guidelines（Writing）

> Create a list of common terms, and reference that list to keep your language consistent.

- 媒体・日付: Apple HIG「Writing」（取得時点の JSON）
- URL: https://developer.apple.com/design/human-interface-guidelines/writing
- URL（原稿）: https://developer.apple.com/tutorials/data/design/human-interface-guidelines/writing.json
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 用語リストで一貫させる。Apple 著作物（全権利留保）。designer-apple の先例に倣い、出典を明示した短い引用に限る

### S088 Google developer documentation style guide（Writing for a global audience）

> If you use different names for the same thing, translators might think you're referring to different concepts

- 媒体・日付: Google developer documentation style guide「Write for a global audience」（Last updated 2026-10-02）
- URL: https://developers.google.com/style/translation
- 取得日: 2026-11-16
- 検証区分: A
- 備考: CC BY 4.0（ページ末尾「the content of this page is licensed under the Creative Commons Attribution 4.0 License」）。AI 生成の Page Summary 欄は引用対象から除外

### S089 IBM Carbon Design System（Action labels glossary）

> Use OK only when such a label is not available.

- 媒体・日付: Carbon「Action labels」用語集（src/data/guidelines/glossary.js、commit 5e9cd1d）
- URL: https://www.carbondesignsystem.com/building-blocks/foundations/content
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/data/guidelines/glossary.js
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 同じ用語集で Delete（破棄）と Remove（文脈から外すだけ）を区別する。旧 Action labels 頁の URL は Content の総合頁へ転送され、個別頁は確認できなかった。Apache-2.0（carbon-website リポジトリ）。リポジトリは archived（Web サイトは PayloadCMS へ移行）なので時点情報として扱う。文書 URL は旧 URL（carbondesignsystem.com/components/... など）の転送先として 2026-11-16 に確認した新 URL。新サイトの本文が同文かは未照合

### S090 文化審議会「公用文作成の考え方」（建議）

> その際、次に示す外来語への対応に関する四つの考え方（「そのまま使う」「言い換える」「説明を付けて使う」「使い方を工夫する」）が参考となる。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 外来語の扱いを「定着度と読み手」で 4 通りに分ける。例は「ストレス」（そのまま）、「アジェンダ→議題」（言い換え）。カタカナ語の禁止ではなく判断の枠組み。直前に「書き手が判断するものである」とある。文書とライセンスは S103 の備考を参照

### S091 国立国語研究所「外来語」言い換え提案の報告書（田中牧郎「本報告書の目的」）

> 国立国語研究所は，平成14年8月，有識者からなる「外来語」委員会を設置し，公共性の高い媒体で使われている，国民にとって分かりにくい外来語を，分かりやすくするための言葉遣いの工夫の検討に着手した。

- 媒体・日付: 国立国語研究所 報告書 126（「外来語」言い換え提案を支えた調査研究）の「本報告書の目的」（PDF。刊行年は本文で未確認）
- URL: https://www2.ninjal.ac.jp/gairaigo/Report126/houkoku_mokuteki.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 背景に「第 22 期国語審議会の答申（平成 12 年 12 月）」の基本方針（分かりにくい外来語は言い換えるか説明を付ける）があると書く。言い換え提案の本体（4 回分の語の一覧）は取得していない。ライセンス未確認のため短い引用にとどめる

### S092 文化庁「令和6年度 国語に関する世論調査」結果の概要

> 「カタカナ語は分かりにくいから」を選択した人の割合が最も高く、64.1％となっている。

- 媒体・日付: 文化庁、令和6年度（調査は 2025 年 1 月 14 日〜3 月 4 日、全国 16 歳以上、有効回答 3,498 人（58.3%）、郵送法）
- URL: https://www.bunka.go.jp/koho_hodo_oshirase/hodohappyo/pdf/94274201_02.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: カタカナ語が交じる文について、好ましい 21.8%・好ましくない 28.8%・何も感じない 48.3%。好ましくない人（全体の 28.8%）の理由の最多が「分かりにくい」64.1%。数値: 出典あり。郵送法に変わった令和 2 年度より前の結果とは比較に注意と調査自身が書く。ライセンスは文部科学省ウェブサイト利用規約

## 翻訳と国際化

### S093 Mailchimp Content Style Guide（Writing for Translation）

> Mailchimp’s voice is conversational and informal. However, in some cultures, informal text may be considered offensive.

- 媒体・日付: Mailchimp Content Style Guide「Web elements」／照合に使った commit c369d82（2022-05-04）
- URL: https://styleguide.mailchimp.com/writing-for-translation/
- URL（原稿）: https://raw.githubusercontent.com/mailchimp/content-style-guide/c369d8287c21446e86c35dddac6fbd4fdb97b863/13-writing-for-translation.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 自社の声が文化によっては失礼になり得る、という自己限定。多言語の調子設計の論点。CC BY-NC 4.0（00-index.html.md に明記。「credit Mailchimp」を求める）。非営利条件のため、配布 skill 本文への逐語転載は著者判断。要旨での利用を推奨

### S094 GOV.UK publishing guidance（Consider translations）

> Do not add translated text on the same page as the English version, as it creates problems for users with assistive technology like screen readers.

- 媒体・日付: GOV.UK「Writing to GOV.UK standards」Consider translations
- URL: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/consider-translations/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 併記の禁止とその理由（支援技術）。多言語の文言設計の論点。OGL v3.0（gov.uk フッター「All content is available under the Open Government Licence v3.0, except where otherwise stated」）

### S095 Google Technical Writing（Error messages: Set the right tone）

> Different cultures interpret apologies differently.

- 媒体・日付: Google「Error messages: Set the right tone」（Last updated 2025-03-31）
- URL: https://developers.google.com/tech-writing/error-messages/set-tone
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 謝罪表現の文化差。日本語版の文言設計で重要。CC BY 4.0（ページ末尾「the content of this page is licensed under the Creative Commons Attribution 4.0 License」）。AI 生成の Page Summary 欄は引用対象から除外

### S096 Mozilla L10n documentation（Localization best practices for developers）

> Splitting sentences into several keys often inadvertently presumes a grammar, a sentence structure, and such composite strings are unnecessarily difficult to translate.

- 媒体・日付: mozilla-l10n/documentation「dev_best_practices.md」（commit 56a8305、2026-11-04）
- URL: https://mozilla-l10n.github.io/documentation/localization/dev_best_practices.html
- URL（原稿）: https://raw.githubusercontent.com/mozilla-l10n/documentation/56a8305aebd3811db5463328ccf1af87ff5b3dbf/src/localization/dev_best_practices.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 文の分割（連結）禁止。CC BY 4.0（リポジトリ LICENSE）

### S097 Mozilla L10n documentation（Localization best practices for developers）

> If a string contains a variable, always add a placeholder to the string to allow the localizer to change the word order if necessary.

- 媒体・日付: mozilla-l10n/documentation「dev_best_practices.md」（commit 56a8305、2026-11-04）
- URL: https://mozilla-l10n.github.io/documentation/localization/dev_best_practices.html
- URL（原稿）: https://raw.githubusercontent.com/mozilla-l10n/documentation/56a8305aebd3811db5463328ccf1af87ff5b3dbf/src/localization/dev_best_practices.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 語順を訳者が変えられるようにする。CC BY 4.0

### S098 ICU User Guide（Formatting Messages）

> If the user-visible string were concatenated directly from fragments and formatted elements, then translators would not be able to rearrange the pieces

- 媒体・日付: ICU User Guide「Formatting Messages」（unicode-org/icu commit bf835ba、2026-10-10）
- URL: https://unicode-org.github.io/icu/userguide/format_parse/messages/
- URL（原稿）: https://raw.githubusercontent.com/unicode-org/icu/bf835bad36a09828051dd8cc6f58bb62bac93fde/docs/userguide/format_parse/messages/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Unicode License V3（リポジトリ LICENSE）

### S099 Unicode CLDR（Plural Rules）

> also used if the language only has a single form

- 媒体・日付: CLDR「Plural Rules」（unicode-org/cldr docs/site、commit c0b65ae、2026-11-12）
- URL: https://cldr.unicode.org/index/cldr-spec/plural-rules
- URL（原稿）: https://raw.githubusercontent.com/unicode-org/cldr/c0b65ae35609ff36b5fd593fdb0176ba092054f8/docs/site/index/cldr-spec/plural-rules.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 複数形カテゴリ other の説明の一部（日本語は other のみ）。リポジトリ LICENSE で LDML 仕様以外は Unicode License V3

### S100 Android Developers（String resources: Quantity strings）

> The selection of which string to use is made solely based on grammatical necessity.

- 媒体・日付: Android Developers「String resources」（Last updated 2026-10-23）
- URL: https://developer.android.com/guide/topics/resources/string-resource
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数の分岐を「0 件」などの見た目の分岐に流用しない根拠。続けて、英語では数量が 0 でも zero の文字列は使われないと書く。CC BY 2.5（developer.android.com/license）

### S101 W3C Internationalization（Working with Composite Messages）

> Composite messages dynamically compose a single message from more than one text string.

- 媒体・日付: W3C Internationalization 記事「Working with Composite Messages」（Richard Ishida, W3C。初出 2006-03-30、実質更新 2021-08-24）
- URL: https://www.w3.org/International/articles/composite-messages/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 断片の連結が他言語で一致（性・数）を壊す仕組みを説明。W3C の文書は W3C Document License の扱い（ページ内の表示はフッターが JS 生成で取得できず）。逐語は短く、出典を明記して引く

### S102 W3C Internationalization（Text size in translation）

> the smaller the source message, the higher the likely translation length

- 媒体・日付: W3C Internationalization 記事「Text size in translation」（Richard Ishida, W3C。初出 2007-07-03）
- URL: https://www.w3.org/International/articles/article-text-size
- 取得日: 2026-11-16
- 検証区分: A
- 備考: IBM の指針から引いた英語→欧州語の平均膨張率の表（10 字以下 200〜300% 等）を載せる。数値は IBM の二次引用で、IBM 原典は未照合。W3C Document License の扱いとして短く引く

## 国内の表記と公用文

### S103 文化審議会「公用文作成の考え方」（建議）

> 読み手に理解され、信頼され、行動の指針とされる文書を作成する。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf （建議の案内ページ https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/93657201.html）
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 要旨は「公用文の目的は、読み手が理解し、信頼し、行動に移せること」。画面の文言を「読ませる文」ではなく「行動を支える文」として定義する根拠に使える。建議は内閣告示ではなく、国の府省庁の公用文の目安。ライセンスは文化庁サイトの著作権表示が指す「文部科学省ウェブサイト利用規約」（公共データ利用規約 第1.0版に準拠）。同じ文書の他の項目も、同じライセンス

### S104 文化審議会「公用文作成の考え方」（建議）

> 解説・広報等では、より親しみやすい表記を用いてもよい。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 文書を「告示・通知等」「記録・公開資料等」「解説・広報等」に分け、広報系では表記を緩めてよいとする。UI の文言は性質上「解説・広報等」に近いと読むのは本 skill の整理（推測）で、建議は UI に言及していない。文書とライセンスは S103 の備考を参照

### S105 文化審議会「公用文作成の考え方」（建議）

> その際、全角と半角が混在すると、印刷文字（フォント）の選択によっては、不ぞろいや不自然な空白などが生じ、読み取りにくくなる場合があることに留意する。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 全角・半角の混在の害を、書体による見え方の差として説明する。照合は NFKC 正規化後に行ったため、引用中の括弧が全角か半角かは照合で区別できていない（引用ブロックは pdftotext の出力のまま）。文書とライセンスは S103 の備考を参照

### S106 文化審議会「公用文作成の考え方」（建議）

> 全角の数字は、情報処理において数値として認識されない場合がある。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数字を半角にする理由を「機械処理」に置く。入力欄の全角数字の受け付け（変換して受け付けるか）の議論にもつながる（後者は本 skill の整理）。文書とライセンスは S103 の備考を参照

### S107 文化審議会「公用文作成の考え方」（建議）

> 全角･半角は、文書内で使い分けを統一する。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 建議は全角・半角のどちらかを決めず「統一」を求める。半角に決めているのは JTF（S124）や SmartHR（S233）。文書とライセンスは S103 の備考を参照

### S108 文化審議会「公用文作成の考え方」（建議）

> 横書きでは、読点に「，」（コンマ）を用いてもよい。ただし、一つの文書内でどちらかに統一する。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 建議は「、」を原則とし、横書きの「，」を許容にした。2021 年の報告（S113 の文書）は「従来の公用文表記の基準に従っている。ただし…読点には「，」（コンマ）ではなく、「、」（テン）を用いることとした」と書き、従来の基準がコンマだったことを示す（1952 年の要領の原文は未取得）。照合は NFKC 後のため、コンマの全角半角は照合で区別していない。文書とライセンスは S103 の備考を参照

### S109 文化審議会「公用文作成の考え方」（建議）

> 解説・広報等においては、必要に応じて「？」「！」を用いてよい。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 疑問符・感嘆符を広報系で認める。UI の感嘆符の多用を戒める根拠にはならない（使ってよい、という許容）。文書とライセンスは S103 の備考を参照

### S110 文化審議会「公用文作成の考え方」（建議）

> そのほか、-ty、-ryなど、yで終わる語も長音符号を用いて書く。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 例として「コミュニティー」「カテゴリー」が挙がる。語末 -y の長音を「付ける」側。SmartHR（S234）と Microsoft（S126。memory を「メモリ」とする例）は付けない側。この台帳で見た規則の中で、意見が最も割れた論点（本 skill の整理）。文書とライセンスは S103 の備考を参照

### S111 文化審議会「公用文作成の考え方」（建議）

> 原則として「バビブベボ」を用い、「ヴ」をむやみに使用することは慎む。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 同じ箇所で、「外来語の表記」の第1表（ウイルス・ウエディング）と第2表（ウィルス・ウェディング）のどちらにするかは「一つの文書内で異同が生じないようにする」とし、第1表を基本とする。SmartHR は「ウィ／ウェ／ウォ」に統一（S235）。文書とライセンスは S103 の備考を参照

### S112 文化審議会「公用文作成の考え方」（建議）

> 文書は、何文字・何ページ分にするのかを決めてから書き始める。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「分量の限度を決めておく」の解説。UI では表示領域が分量の上限を決めるので、字数の予算を先に決める習慣の根拠に使える（応用は本 skill の整理）。文書とライセンスは S103 の備考を参照

### S113 文化審議会国語分科会「新しい「公用文作成の要領」に向けて」（報告）

> 左横書きの公用文における読点として、「，」（コンマ）よりも「、」（テン）が用いられることが多いという実態があること。

- 媒体・日付: 文化審議会国語分科会 報告、令和3年3月12日（2021-03-12）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93098001_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 要領を改める理由として、規範（コンマ）と実態（テン）のずれを挙げる。同じ箇所で「？」「！」「【】」の使用の広がりも挙げる。規範は実態に合わせて動くという例

### S114 内閣告示「外来語の表記」

> 英語の語末の─er，─or，─arなどに当たるものは，原則としてア列の長音とし長音符号「ー」を用いて書き表す。ただし，慣用に応じて「ー」を省くことができる。

- 媒体・日付: 内閣告示第2号「外来語の表記」、平成3年（1991）6月28日（文化庁の掲載 PDF）
- URL: https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/gairai/pdf/94380801_03.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 長音の原則と、慣用による省略の許容が同じ文に並ぶ。「エレベーター」も「エレベータ」も告示の範囲内。告示の日付（6 月 28 日）は Microsoft のスタイルガイド（S126）の記載で確認し、年と号は S103 の文書で確認した。告示は著作権の対象外とされることが多いが、この台帳では法令本文を取得していないので断定しない

### S115 内閣告示「外来語の表記」前書き

> 科学，技術，芸術その他の各種専門分野や個々人の表記にまで及ぼそうとするものではない。

- 媒体・日付: 内閣告示第2号「外来語の表記」、平成3年（1991）6月28日（文化庁の掲載 PDF）
- URL: https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/gairai/pdf/94380801_03.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 告示自身が適用範囲を「一般の社会生活」に限っている。JIS 系・学術系の長音省略（S181）が併存してきた理由の根拠。告示を根拠に専門分野の表記を「誤り」とは言えない

### S116 内閣告示「送り仮名の付け方」

> 本則による形とともに、慣用として行われていると認められるものであって、本則以外に、これによってよいものをいう。

- 媒体・日付: 内閣告示「送り仮名の付け方」（昭和48年。文化庁の掲載 PDF）
- URL: https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/okurikana/pdf/94380801_02.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「許容」の定義。「申し込み／申込み」のような揺れは、どちらも告示の範囲内であり得る。正誤ではなく「文書内の統一」で裁く根拠。年と号は S103 の文書の記載（「送り仮名の付け方」(昭和48年内閣告示第2号)）による。告示の月日は確認していない

### S117 内閣告示「ローマ字のつづり方」前書き（2025）

> このつづり方は、科学、技術、芸術その他の各種専門分野や個々人の表記にまで及ぼそうとするものではない。

- 媒体・日付: 内閣告示第4号「ローマ字のつづり方」、令和7年（2025）12月22日（2025-12-22）
- URL: https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/pdf/94303201_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「外来語の表記」（S115）と同じ型の適用範囲の限定。個人の氏名のつづりを利用者の選択に委ねる設計の根拠に使える（応用は本 skill の整理）

### S118 文化庁「令和6年度 国語に関する世論調査」結果の概要

> 「ア（セキュリティー）を使う」と答えた人が34.2％、「イ（セキュリティ）を使う」と答えた人が53.5％となっている。

- 媒体・日付: 文化庁、令和6年度（調査は 2025 年 1 月 14 日〜3 月 4 日、全国 16 歳以上、有効回答 3,498 人（58.3%）、郵送法）
- URL: https://www.bunka.go.jp/koho_hodo_oshirase/hodohappyo/pdf/94274201_02.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 語末 -y の長音を省く「セキュリティ」が多数。公用文の規則（S110。長音を付ける）と実際の使用がずれている証拠。同じ調査で「リタイア」64.5%・「リタイヤ」26.9%。数値: 出典あり

### S119 文化庁「令和7年度 国語に関する世論調査」結果の概要

> 「ア（レクリエーション）を使う」と答えた人が60.0％、「イ（レクレーション）を使う」と答えた人が33.5％となっている。

- 媒体・日付: 文化庁、令和7年度（調査は 2026 年 1 月 13 日〜3 月 3 日、全国 16 歳以上の日本国籍を有する者、有効回答 3,777 人（63.0%）、郵送法）。報道発表は令和 8 年（2026 年）10 月 2 日
- URL: https://www.bunka.go.jp/koho_hodo_oshirase/hodohappyo/pdf/94441001_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 年代差が大きい: 「レクリエーション」は 16〜19 歳で 87.5%、「レクレーション」は 70 歳以上で 51.2%。読み手の年代で「自然な表記」が違う証拠。数値: 出典あり

### S120 文化庁「令和7年度 国語に関する世論調査」結果の概要

> 「ア（サステナブル）を使う」と答えた人が64.5％、「イ（サステイナブル）を使う」と答えた人が28.6％となっている。

- 媒体・日付: 文化庁、令和7年度（調査は 2026 年 1 月 13 日〜3 月 3 日、全国 16 歳以上の日本国籍を有する者、有効回答 3,777 人（63.0%）、郵送法）。報道発表は令和 8 年（2026 年）10 月 2 日
- URL: https://www.bunka.go.jp/koho_hodo_oshirase/hodohappyo/pdf/94441001_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 原語の綴りに近い表記（サステイナブル）より、発音に寄せた表記が多い。数値: 出典あり。公表日は報道発表ページ（raw: yoron_r7_press.html）による

### S121 日本翻訳連盟（JTF）「JTF日本語標準スタイルガイド（翻訳用）」第4.0版

> 本文を、敬体（ですます調）あるいは常体（である調）のどちらかに統一する。

- 媒体・日付: 一般社団法人日本翻訳連盟、第4.0版、2026 年 7 月 25 日（PDF）
- URL: https://www.jtf.jp/pdf/jtf_style_guide.pdf （案内ページ https://www.jtf.jp/tips/styleguide）
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 冒頭の「基本ルール」12 項目の 1 つ。翻訳文向けだが、国内の IT 文書の表記の基準として広く参照される（「広く参照される」は本 skill の整理（推測））。ライセンスは CC BY 4.0（PDF 内で確認）。同じ文書の他の項目も同じ文書

### S122 日本翻訳連盟（JTF）「JTF日本語標準スタイルガイド（翻訳用）」第4.0版

> 5.カタカナ語の語尾の長音は省略しない。

- 媒体・日付: 一般社団法人日本翻訳連盟、第4.0版、2026 年 7 月 25 日（2026-07-25）
- URL: https://www.jtf.jp/pdf/jtf_style_guide.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 基本ルールの 5 番目。例「コンピューター」。公用文（S110）と同じ「付ける」側。文書とライセンスは S121 の備考を参照

### S123 日本翻訳連盟（JTF）「JTF日本語標準スタイルガイド（翻訳用）」第4.0版

> 半角文字と全角文字の間に半角スペースを入れない。

- 媒体・日付: 一般社団法人日本翻訳連盟、第4.0版、2026 年 7 月 25 日（2026-07-25）
- URL: https://www.jtf.jp/pdf/jtf_style_guide.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 和欧間のスペースを入れない側。SmartHR（S232）と同じ、Microsoft（S125）と逆。文書とライセンスは S121 の備考を参照

### S124 日本翻訳連盟（JTF）「JTF日本語標準スタイルガイド（翻訳用）」第4.0版

> 8.数字とアルファベットは半角で表記する。

- 媒体・日付: 一般社団法人日本翻訳連盟、第4.0版、2026 年 7 月 25 日（2026-07-25）
- URL: https://www.jtf.jp/pdf/jtf_style_guide.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 同じ基本ルールに「原則として記号類は全角で表記する」。数字・英字は半角、記号は全角という分け方は SmartHR とも一致する。文書とライセンスは S121 の備考を参照

### S125 Microsoft「Japanese Style Guide」

> In principle, insert a half-width space.

- 媒体・日付: Microsoft のローカリゼーション スタイルガイド（日本語）、PDF（全 68 ページ。ファイルのメタデータ上の更新日 2024-09-05。本文での版の日付は未確認）
- URL: https://download.microsoft.com/download/a/8/2/a822a118-18d4-4429-b857-1b65ab388315/jpn-jpn-StyleGuide.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 節「Spaces」の項目「1. Between full-width and half-width characters」の規則。例「Word△を使用するときは」（△は半角スペースの記号）。和欧間に半角スペースを入れる側で、JTF（S123）・SmartHR（S232）と逆。Microsoft の著作物。短い引用にとどめる

### S126 Microsoft「Japanese Style Guide」

> In principle, use a long vowel when a source English term has following suffixes: -er, -or, -ar.

- 媒体・日付: Microsoft のローカリゼーション スタイルガイド（日本語）、PDF（全 68 ページ。ファイルのメタデータ上の更新日 2024-09-05。本文での版の日付は未確認）
- URL: https://download.microsoft.com/download/a/8/2/a822a118-18d4-4429-b857-1b65ab388315/jpn-jpn-StyleGuide.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 根拠に「平成3年6月28日内閣告示第2号「外来語の表記」」を挙げる。-er/-or/-ar 以外は、長音を含めて 4 文字未満になるときだけ長音を付ける。例として memory は「メモリ」（「メモリー」は不可の例）。語末 -y の長い語は長音なしになる

## 敬語

### S127 文化審議会「公用文作成の考え方」（建議）

> 対外的な文書においては、「です・ます」体を基本として簡潔に敬意を表す。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 敬意は「です・ます」で足り、敬語を重ねて表すものではないという立場。S129・S130 と合わせて「敬語を盛らない」原則の根拠。文書とライセンスは S103 の備考を参照

### S128 文化審議会「公用文作成の考え方」（建議）

> 解説・広報等における文末は「です・ます」を基調とし、「ございます」は用いない。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「ございます」を使わないという明示の禁止。通知文・ヘルプの文末の基準に使える。文書とライセンスは S103 の備考を参照

### S129 文化審議会「公用文作成の考え方」（建議）

> 「おります」「いたします」などは必要に応じて使うが多用しない。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 謙譲表現の多用を抑える。SmartHR の、敬語を重ねすぎないという指針（S238）と同じ向き。文書とライセンスは S103 の備考を参照

### S130 文化審議会「公用文作成の考え方」（建議）

> 敬語は丁寧度の高い言葉を多用すればよいものではなく、かえってよそよそしい響きで読み手を遠ざけてしまう面もある。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 過剰な敬語の副作用（距離が生じる）を述べた箇所。「丁寧にしたい」という依頼を「敬語を増やす」ではなく「相手の手間を減らす」に翻訳する根拠。文書とライセンスは S103 の備考を参照

### S131 文化審議会「敬語の指針」（答申）

> 敬語をたくさん使えば丁寧になるというわけではない。

- 媒体・日付: 文化審議会 答申「敬語の指針」、平成19年2月2日（2007-02-02）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/keigo_tosin.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 敬語の量と丁寧さは比例しない、という国の指針の明言。ライセンスは文部科学省ウェブサイト利用規約（S103 と同じ）。同じ文書の他の項目も同じ文書

### S132 文化審議会「敬語の指針」（答申）

> 一つの語について，同じ種類の敬語を二重に使ったものを「二重敬語」という。

- 媒体・日付: 文化審議会 答申「敬語の指針」、平成19年2月2日（2007-02-02）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/keigo_tosin.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 二重敬語の定義。続けて「一般に適切ではないとされている。ただし，語によっては，習慣として定着しているものもある」とする（S133）。例「お読みになられる」の類。文書とライセンスは S131 の備考を参照

### S133 文化審議会「敬語の指針」（答申）

> 「二重敬語」は，一般に適切ではないとされている。ただし，語によっては，習慣として定着しているものもある。

- 媒体・日付: 文化審議会 答申「敬語の指針」、平成19年2月2日（2007-02-02）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/keigo_tosin.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 一律の禁止ではなく「定着しているものもある」と例外を認める。文言レビューで二重敬語を機械的に全部直す前に読む。文書とライセンスは S131 の備考を参照

### S134 文化審議会「敬語の指針」（答申）

> 自分側が行うことを，ア）相手側又は第三者の許可を受けて行い，イ）そのことで恩恵を受けるという事実や気持ちのある場合に使われる。

- 媒体・日付: 文化審議会 答申「敬語の指針」、平成19年2月2日（2007-02-02）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/keigo_tosin.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「させていただく」の使用条件。許可も恩恵も無い場面（例: システムの処理完了の通知）での「〜させていただきました」は条件を満たさない、と読むのは本 skill の整理。SmartHR は NG 例に挙げる（S238）。文書とライセンスは S131 の備考を参照

### S135 文化審議会「敬語の指針」（答申）

> いつでも，どんな相手にでも，限られた言語表現だけを画一的に使うことは，相手，例えば，顧客にかえって不快な思いを与えたり

- 媒体・日付: 文化審議会 答申「敬語の指針」、平成19年2月2日（2007-02-02）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/keigo_tosin.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: いわゆるマニュアル敬語への注意。定型文の一律適用の副作用を、指針自身が述べている。UI の定型文（エラー・完了通知）を相手と場面で書き分ける根拠。文書とライセンスは S131 の備考を参照

### S136 文化審議会「敬語の指針」（答申）

> ファクシミリや電子メールでは文章自体を要点だけの短いものにすると同時に，敬語も割愛してしまうといった傾向への批判や注意喚起である。

- 媒体・日付: 文化審議会 答申「敬語の指針」、平成19年2月2日（2007-02-02）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/keigo_tosin.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 新しい媒体で敬語が落ちることへの批判があったと記録する。続けて、多人数宛ての通信で「画一的な言語表現」になることへの注意も挙げる。短さの追求には反動がある、という歴史的な証拠。文書とライセンスは S131 の備考を参照

## やさしい日本語・平易な言葉

### S137 文化審議会「公用文作成の考え方」（建議）

> 広く一般に向けた文書では、義務教育で学ぶ範囲の知識で理解できるように書くよう努める。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 想定読者の下限を「義務教育で学ぶ範囲の知識」に置く。一般向けの画面・通知・ヘルプの語彙水準の根拠。業務の専門家向け画面には直接当てはまらない（建議自身が文書の種類で書き分けを認める。S104）。文書とライセンスは S103 の備考を参照

### S138 文化審議会「公用文作成の考え方」（建議）

> 適当な長さは一概に決められないが、50～60字ほどになってきたら読みにくくなっていないか意識するとよい。ＳＮＳを利用した広報などでは、より短くすべきであるとの指摘もある。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 一文の長さの数値は「50～60字ほど」で「意識する目安」。上限の規則ではない（「一概に決められない」と前置きしている）。数値: 出典あり（目安としての数値）。「一文は40字以内」などの流通値はこの文書には無い（末尾「未検証・伝聞」）。文書とライセンスは S103 の備考を参照

### S139 文化審議会「公用文作成の考え方」（建議）

> 三つ以上の情報を並べるときには、箇条書を利用する。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「一文を短くする」「一文の論点は、一つにする」と並ぶ項目。例として、内閣告示五つを一文で並べた文を箇条書に直している。表記は「箇条書」（送り仮名なし）。文書とライセンスは S103 の備考を参照

### S140 文化審議会「公用文作成の考え方」（建議）

> 二重否定はどうしても必要なとき以外には使わない

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 在留支援のやさしい日本語（S146）と textlint のプリセット（S155 の no-double-negative-ja）にも同じ規則がある。確認ダイアログの「〜しないと〜できません」型を直す根拠。文書とライセンスは S103 の備考を参照

### S141 文化審議会「公用文作成の考え方」（建議）

> 結論は早めに示し、続けて理由や詳細を説明する。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 結論先行。エラー文言で「何をすればよいか」を先に置く判断（S228 の SmartHR の優先順とは順序の考え方が異なる点に注意）。文書とライセンスは S103 の備考を参照

### S142 文化審議会「公用文作成の考え方」（建議）

> 「上記に該当しない場合、手続は不要です」などと、する必要のないことも明示することによって、読み手の不安を軽減できる。

- 媒体・日付: 文化審議会 建議「公用文作成の考え方」本文・解説（PDF）、令和4年1月7日（2022-01-07）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「しなくてよいこと」を書く。手続き画面・申請フォームの説明文の設計に直接使える。文書とライセンスは S103 の備考を参照

### S143 出入国在留管理庁・文化庁「在留支援のためのやさしい日本語ガイドライン」

> ３つのステップでやさしい日本語を作成することが重要です。
> ステップ1：文書を日本人(この章では、日本語ネイティブ(日本語母語話者)を表します。)にわかりやすい文章にします。
> ステップ2：言葉をやさしく書き換えたり、漢字にふりがなをつけたりして、外国人(この章では、日本語能力がまだそれほど高くない非日本語ネイティブ(非日本語母語話者)を表します。)にもわかりやすくなるように直します。
> ステップ3：こうして作った文案を日本語教師や外国人に確認してもらい、伝わるかどうか確認します。

- 媒体・日付: 出入国在留管理庁・文化庁、2020 年 8 月（PDF）
- URL: https://www.moj.go.jp/isa/content/930006072.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ステップ 1 は「日本人にわかりやすい文章にする」、ステップ 2 は「言葉をやさしく書き換え、ふりがなをつける」、ステップ 3 は文案を日本語教師や外国人に確認してもらう（S148）。書き換えの前に元の文を整える、という順序が要点。ライセンスは出入国在留管理庁サイトの「コンテンツの利用について」に従う旨の表示（本文は未取得）。短い引用と出典明記にとどめる。同じ文書の他の項目も同じ文書

### S144 出入国在留管理庁・文化庁「在留支援のためのやさしい日本語ガイドライン」

> 一文は短くする(一文に言いたいことは１つだけ)

- 媒体・日付: 出入国在留管理庁・文化庁、2020 年 8 月（2020-08）
- URL: https://www.moj.go.jp/isa/content/930006072.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 長さの数値ではなく「一文一情報」で示す。S139 の「一文の論点は、一つにする」と同じ。文書とライセンスは S143 の備考を参照

### S145 出入国在留管理庁・文化庁「在留支援のためのやさしい日本語ガイドライン」

> 外来語(カタカナ語)はできる限り使わない

- 媒体・日付: 出入国在留管理庁・文化庁、2020 年 8 月（2020-08）
- URL: https://www.moj.go.jp/isa/content/930006072.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 理由づけは確認していない。日本語を母語としない読み手にとってカタカナ語は手がかりになりにくい、という読みは本 skill の整理（推測）。S090 の「判断の枠組み」より強い規則で、読み手が違えば規則の強さが変わる例。文書とライセンスは S143 の備考を参照

### S146 出入国在留管理庁・文化庁「在留支援のためのやさしい日本語ガイドライン」

> 「～ないことはない」「～ないわけではない」「～以上／以外は必要ない」などの二重に否定する表現はわかりにくくなります。

- 媒体・日付: 出入国在留管理庁・文化庁、2020 年 8 月（2020-08）
- URL: https://www.moj.go.jp/isa/content/930006072.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 項目名は「二重否定を使わない」。例文は「在留カード以外は必要ありません。」の書き換え。同じ一覧に「受身形や使役表現をできる限り使わない」もある。文書とライセンスは S143 の備考を参照

### S147 出入国在留管理庁・文化庁「在留支援のためのやさしい日本語ガイドライン」

> 機械翻訳にかける可能性に配慮して、インターネットで発信する際には、ふりがなをつけない文書をできる限り同時に用意します。

- 媒体・日付: 出入国在留管理庁・文化庁、2020 年 8 月（2020-08）
- URL: https://www.moj.go.jp/isa/content/930006072.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ふりがな（ルビ）付きの文は機械翻訳を妨げ得る、という配慮。Web のルビ表示を切り替え式にする設計の根拠に使える（応用は本 skill の整理）。文書とライセンスは S143 の備考を参照

### S148 出入国在留管理庁・文化庁「在留支援のためのやさしい日本語ガイドライン」

> 書き換え案ができたら、日本語教師や外国人に、わかりやすいかどうか、伝わるかどうかをチェックしてもらいましょう。

- 媒体・日付: 出入国在留管理庁・文化庁、2020 年 8 月（2020-08）
- URL: https://www.moj.go.jp/isa/content/930006072.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 規則の適用だけで完了とせず、読み手本人に確かめる手順を含める。文言の検証（designer-ux-research 側の領域）との接点。文書とライセンスは S143 の備考を参照

### S149 弘前大学人文学部社会言語学研究室『〈増補版〉「やさしい日本語」作成のためのガイドライン』（消防庁の検討会資料による転載）

> １文の長さは24拍程度です。長くなっても30拍は超えないようにしてください。

- 媒体・日付: 弘前大学人文学部社会言語学研究室、2013（初版の序文は 2010 年 1 月 17 日付）。消防庁の検討会の参考資料 5-6 として転載された PDF で照合
- URL: https://www.fdma.go.jp/singi_kento/kento/items/kento207_20_sankou5-6.pdf （原典として流通する URL http://human.cc.hirosaki-u.ac.jp/kokugo/ej-gaidorain.pdf は 2026-11-16 に 404。Wayback Machine は自動アクセスを拒否）
- 取得日: 2026-11-16
- 検証区分: B
- 備考: 「拍」は平仮名 1 文字に相当すると定義し、文節は 10 文節程度を目安とする。数値: 出典あり（ただし転載で確認。原典 PDF は未取得）。災害時の情報伝達向けの規則で、UI の一般則ではない。「1.4 倍」「4 倍理解しやすい」「12 の規則」「約 2,000 語」は検索の要約に出たが、この転載には見つからなかった（末尾「未検証・伝聞」）

### S150 弘前大学人文学部社会言語学研究室『〈増補版〉「やさしい日本語」作成のためのガイドライン』（転載）

> 東日本大震災以前の「やさしい日本語」では、１文を24拍程度の短文で伝えることを推奨してきた。しかし、東日本大震災では72時間以降も「やさしい日本語」による様々な情報が求められ、情報量の増加に伴い、１文をどうしても長くせざるを得なかった。

- 媒体・日付: 弘前大学人文学部社会言語学研究室、2013（初版の序文は 2010 年 1 月 17 日付）。消防庁の検討会の参考資料 5-6 として転載された PDF で照合（増補にあたっての文）
- URL: https://www.fdma.go.jp/singi_kento/kento/items/kento207_20_sankou5-6.pdf
- 取得日: 2026-11-16
- 検証区分: B
- 備考: 短文の規則が、伝える情報量の増加で守れなくなったと作成者自身が書く。そこで分かち書きの規則を見直したとする。「短ければよい」の限界を示す一次の記述（転載で確認）

### S151 Jakob Nielsen（NN/g）

> Lower-literacy users exhibit very different reading behaviors than higher-literacy users: they plow text rather than scan it, and they miss page elements due to a narrower field of view.

- 媒体・日付: NN/g "Writing for Lower Literacy Users"（記事の表示日 2005-03-13）
- URL: https://www.nngroup.com/articles/writing-for-lower-literacy-users/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「人は流し読みする」は読み書きに慣れた人の傾向で、読むのが苦手な人は 1 語ずつ追う。記事中の「米国の成人の 43%」は米国教育省 NAAL の値の紹介で、区分 R 相当・数値: 原論文未取得。「Web 利用者の 30% が低リテラシー」は Nielsen 本人の推定（数値: 推定）。研究は Pfizer の後援と記事が書く

### S152 Hoa Loranger（NN/g）

> A common misguided objection I hear about plain language is that it dumbs down content and thus insults intelligent readers.

- 媒体・日付: NN/g "Plain Language Is for Everyone, Even Experts", 2017-10-08
- URL: https://www.nngroup.com/articles/plain-language-experts/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 専門家も平易な文を好むという NN/g の観察。「Web では印刷物の 50% 未満の語数を目安に」は記事自身が rule of thumb と書く目安で、研究値ではない。専門家向けだから難しく書く、という反論への応答に使える

### S153 ISO 24495-1:2023 Plain language — Part 1（概要）

> This document establishes governing principles and guidelines for developing plain language documents.

- 媒体・日付: ISO の規格ページ（Publication date: 2023-06。Edition 1）。Wayback の保存コピー 2025-12-06
- URL: https://web.archive.org/web/20251206222129/https://www.iso.org/standard/78907.html （iso.org 本体は自動取得で 403）
- 取得日: 2026-11-16
- 検証区分: A（公開の概要のみ）
- 備考: 概要は、主に文章の印刷物・デジタル情報が対象で、アクセシビリティの技術的指針は含まず WCAG・EN 301 549 を参照するよう書く。例は英語のみだが、ほとんどの書き言葉に適用できるとする。規格本文（原則と指針の中身）は有償で取得・引用していない

## 確かめ方と研究

### S154 科研費 研究課題 19300277（柴崎秀子ほか）「リーダビリティー」の成果概要

> 学年=-0.148*文章中の平仮名の割合+1.585*1文の平均述語数-0.117*1文の平均文字数-0.126*1文の平均文節数+15.581

- 媒体・日付: KAKEN（科学研究費助成事業データベース）、基盤研究（B）、研究期間 2007〜2008 年度、研究代表者 柴崎秀子（長岡技術科学大学）
- URL: https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-19300277/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 国語の教科書をデータベースにして作った、平仮名の割合・述語数・文の文字数・文節数から学年（小学 1 年〜中学 3 年）を推定する式。数値: 出典あり（係数）。対象は教科書の文章で、UI の短い文言に当てはめる根拠ではない。式の学年は日本語母語話者の児童生徒の基準

### S155 textlint-rule-preset-smarthr（SmartHR の文章校正ルール集）README

> "sentence-length": { "max": 120 },

- 媒体・日付: GitHub kufu/textlint-rule-preset-smarthr、package.json の version 1.38.3（commit d453c24）、MIT License（package.json の license 欄）
- URL: https://github.com/kufu/textlint-rule-preset-smarthr
- URL（原稿）: https://raw.githubusercontent.com/kufu/textlint-rule-preset-smarthr/d453c24625d2f5a5e0f2ffaffc7de83c988d2c44/README.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 一文の最大文字数の既定値が 120。二重否定（no-double-negative-ja）・冗長表現（ja-no-redundant-expression）の検出も既定で有効。数値は「ツールの既定値」で、読みやすさの研究値ではない。リポジトリに LICENSE ファイルは無く（404）、MIT は package.json の記載による

### S156 Pete Gale（GDS ユーザーリサーチ）

> I then asked them to underline things that made them feel more confident about the service in green, and things that made them feel less confident in red.

- 媒体・日付: GOV.UK User research blog "A simple technique for evaluating content", 2014-09-02
- URL: https://userresearch.blog.gov.uk/2014/09/02/a-simple-technique-for-evaluating-content/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 後に「ハイライター法」と呼ばれる方法の記録。調査の最後に印刷した文面へ緑と赤で線を引いてもらい、参加者分を重ねて濃淡を見る。測るのは「安心できるか」で、理解度そのものではない。OGL v3.0

### S157 John Waterworth（GDS ユーザーリサーチ）

> If I had to guess, I'd say that for government services, 60% of our user research and design effort is about the words we use
> Ask people to explain your words
> Ask people to think aloud

- 媒体・日付: GOV.UK User research blog "What does this mean? Tips for testing your words", 2015-07-01
- URL: https://userresearch.blog.gov.uk/2015/07/01/what-does-this-mean-tips-for-testing-your-words/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 言葉の確かめ方の一覧（利用者が使う語を聞く、言葉を説明してもらう、思考発話、次に何が出ると思うかを聞く など）。60% は本人が推測と断った値で、数値の根拠に使わない。OGL v3.0

### S158 18F（米国 GSA）Methods

> Users highlight text that they think is clear in one color. Then they highlight text they think is confusing in a different color.

- 媒体・日付: 18F Methods "Content highlighter testing"（ページに Archived as of January 20, 2025 の表示）
- URL: https://guides.18f.org/methods/validate/content-highlighter-testing/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ハイライター法を「分かる／分からない」の 2 色で行う版。S156 の「安心できるか」と測る対象が違う。18F は 2025 年に保存版扱いになっている（時点情報）。米国政府の著作物

### S159 Jakob Nielsen（NN/g）

> They don't. People rarely read Web pages word by word; instead, they scan the page, picking out individual words and sentences.
> In research on how people read websites we found that 79 percent of our test users always scanned any new page they came across; only 16 percent read word-by-word.

- 媒体・日付: NN/g "How Users Read on the Web", 1997-09-30
- URL: https://www.nngroup.com/articles/how-users-read-on-the-web/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 流し読みを前提にした書き方（強調語、意味のある小見出し、箇条書き、1 段落 1 論点、結論から書く、語数を半分以下に）の出発点。数値: 出典あり（NN/g 自身の調査の報告）。ただし参加者数・課題はこの記事に無い。1997 年のデスクトップの Web が対象。著作権表示のみ

### S160 John Morkes・Jakob Nielsen（NN/g）

> A study of five different writing styles found that a sample Web site scored 58% higher in measured usability when it was written concisely, 47% higher when the text was scannable, and 27% higher when it was written in an objective style instead of the promotional style used in the control condition and many current Web pages. Combining these three changes into a single site that was concise, scannable, and objective at the same time resulted in 124% higher measured usability.

- 媒体・日付: NN/g "Concise, SCANNABLE, and Objective: How to Write for the Web"（記事の表示日 1997-01-01）
- URL: https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数値: 出典あり（研究者本人の報告）。「usability」は作業時間・誤り・記憶・構造の把握などを合成した指標で、1 つの観光案内サイト（Nebraska の例文）での比較。宣伝調をやめるだけで成績が上がった点を、誇張を割り引くための認知負荷と推測している（S159 の記事に推測と明記）。今の UI 文言へそのまま当てはめない

### S161 Jakob Nielsen（NN/g）

> On the average Web page, users have time to read at most 28% of the words during an average visit; 20% is more likely.
> In the study, the authors instrumented 25 users' browsers and recorded extended information about everything they did as they went about their normal Web activities.
> After cleaning the dataset, I was left with 45,237 page views for my analysis.

- 媒体・日付: NN/g "How Little Do Users Read?", 2008-05-05
- URL: https://www.nngroup.com/articles/how-little-do-users-read/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数値: 出典あり（NN/g 自身の再分析の一次報告）。ただし元データの論文は未取得で、Weinreich, Obendorf, Herder, Mayer "Not Quite the Average: An Empirical Study of Web Use"（ACM Transactions on the Web, vol. 2, no. 1, 2008-02）の 59,573 ページビューのデータを Nielsen が提供を受けて再分析した値（記事の記述）。上限の推定であり、実測の読了率ではない

### S162 Kara Pernice（NN/g）

> Eyetracking research shows that people scan webpages and phone screens in various patterns, one of them being the shape of the letter F.

- 媒体・日付: NN/g "F-Shaped Pattern of Reading on the Web: Misunderstood, But Still Relevant (Even on Mobile)", 2017-11-12
- URL: https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: F 字は 2006 年に NN/g が見つけた型の 1 つで、唯一の型ではないと見出しで明言する（"The F-Shaped Pattern Is Not the Only Scanning Pattern"）。F 字は利用者にも事業者にも悪い結果で、見出しや強調で避けるべきものと書く。「F 字に配置せよ」という誤用の訂正に使える

### S163 Jakob Nielsen（NN/g）

> If users get 60% or more right on average, you can assume the text is reasonably comprehensible for the specified user profile employed to recruit test participants

- 媒体・日付: NN/g "Cloze Test for Reading Comprehension", 2011-02-28
- URL: https://www.nngroup.com/articles/cloze-test-reading-comprehension/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: クローズテスト（一定間隔で語を抜き、補ってもらう）は読みやすさの公式ではなく理解度を測る、と書く。60% の基準の元の研究（クローズ法の Taylor 1953 や、その後の基準研究）は数値: 原論文未取得。NN/g の目安として使う

### S164 Tim Neusesser（NN/g）

> A/B testing is great at providing insights into how user behavior changes but will not provide any insights into why these changes occur.

- 媒体・日付: NN/g "A/B Testing 101", 2024-08-30
- URL: https://www.nngroup.com/articles/ab-testing/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: A/B テストの限界（流入の少ないページに向かない、理由が分からない、ガードレール指標を見る）を挙げる。文言の A/B テストで「勝った」案の理由を、質的な確かめ方で補う根拠

### S165 Ron Kohavi ほか（Microsoft）

> only one third of ideas tested at Microsoft improved the metric(s) they were designed to improve.

- 媒体・日付: Kohavi, Deng, Frasca, Longbotham, Walker, Xu "Trustworthy Online Controlled Experiments: Five Puzzling Outcomes Explained", KDD 2012（PDF）
- URL: https://exp-platform.com/Documents/puzzlingOutcomesInControlledExperiments.pdf
- 取得日: 2026-11-16
- 検証区分: A（PDF を `pdftotext` で文字にして照合）
- 備考: 数値: 出典あり。同じ著者らの先行論文 "Online Experimentation at Microsoft" の値を引いたもので、先行論文の該当箇所は S174 で照合した。本論文は、実験の結果が直観に反する・誤って見える 5 例を説明する。文言の改善案の多くは効かない、効いたように見える結果も疑う、という根拠

### S166 Douglas Bowman（stopdesign。本文で Google 初のビジュアルデザイナーだったと書く）

> Yes, it’s true that a team at Google couldn’t decide between two blues, so they’re testing 41 shades between each blue to see which one performs better. I had a recent debate over whether a border should be 3, 4 or 5 pixels wide, and was asked to prove my case.

- 媒体・日付: stopdesign "Goodbye, Google", 2009-03-20
- URL: https://stopdesign.com/journal/2009/03/20/goodbye-google.html （旧 URL /archive/2009/03/20/goodbye-google.html から転送される）
- 取得日: 2026-11-16
- 検証区分: C（退職時の個人の論評）
- 備考: すべての判断をデータで証明させる文化への批判。結果や売上効果は書いていない（「41 shades」の売上の話は本文に無い）。「文言を A/B テストだけで決める」ことの限界を論じる材料。著作権表示（All rights reserved）

### S167 Jared M. Spool

> Yet, it turns out this form was preventing customers from purchasing products from a major e-commerce site, to the tune of $300,000,000 a year.
> They took away the Register button. In its place, they put a Continue button with a simple message

- 媒体・日付: Center Centre "The $300 Million Button"（記事の表示日 2009-01-14）
- URL: https://articles.centercentre.com/three_hund_million_button/
- 取得日: 2026-11-16
- 検証区分: A（引用の逐語）
- 備考: 数値: 検証不能（対象サイトは匿名）。購入前にログインか登録を求めるフォームのボタンを「Continue」に変え、会員登録を不要にした、という本人の報告（要旨）。もとは Luke Wroblewski の書籍のために書いたと記事が書く。ボタンの文言だけでなく、手順の設計の変更である点に注意。著作権表示

### S168 Janice C. Redish・Jack Selzer（論文の要旨）

> Readability formulas are inadequate measures of how difficult written material is for adult readers, say these authors.

- 媒体・日付: Penn State の研究業績ページ "The Place of Readability Formulas in Technical Communication"（1985）
- URL: https://pure.psu.edu/en/publications/place-of-readability-formulas-in-technical-communication/
- 取得日: 2026-11-16
- 検証区分: R（"say these authors" とあるとおり第三者の要約文）。逐語は照合済み
- 備考: 論文本文は取得していない。読みやすさの公式を成人の文書の難しさの尺度に使うことへの批判の古い根拠

### S169 Caroline Jarrett（Ginny Redish との共著）

> But a number isn’t useful if it isn’t reliable, valid, or meaningful.

- 媒体・日付: Effortmark "Readability Formulas: seven reasons to avoid them and what to do instead", 2019-07-29（2025-11-20 更新の表示）
- URL: https://www.effortmark.co.uk/readability-formulas-seven-reasons-to-avoid-them-and-what-to-do-instead/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公式を避ける 7 つの理由（信頼性が無い、妥当でない、語の意味を見ない、成人に学年は無意味、段落の文章を前提にする、点数のための書き直しは要点を外す、ほか）を挙げ、利用者に試してもらう方法を勧める。Flesch Reading Ease・Flesch-Kincaid・SMOG・Gunning Fog・Dale-Chall が何を数えるかの説明も持つ。ページに Creative Commons Attribution 4 の表示があるが、記事本文への適用か写真への適用かは確認していない

### S170 Center for Plain Language（Schriver の研究の紹介）

> Schriver finds that readability formulas are often unreliable and invalid methods of evaluating text quality.

- 媒体・日付: Center for Plain Language "Research review finds most readability formulas outdated and overrated"（ページ内の日付 2018-02-07）
- URL: https://centerforplainlanguage.org/most-readability-formulas-outdated/
- 取得日: 2026-11-16
- 検証区分: R（団体による研究の紹介文）。逐語は照合済み
- 備考: 紹介されている研究は Karen Schriver "Plain Language in the United States Gains Momentum: 1940–2015"。原論文は取得していない。平易さの評価は利用者での検証を基準にすべきという主張の紹介

### S171 jReadability（日本語文章難易度判定システム）

> 日本語文章のテキストを入力すると、その難易度を6段階で判定します。

- 媒体・日付: jReadability Portal（Copyright © 2017 - Jaeho Lee, Yuriko Sunakawa, Keiko Hori, Yoichiro Hasebe）
- URL: https://jreadability.net/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 日本語の学習者と教師のための Web システムと自ら書く。日本語 UI の文言の評価に使えるかは確かめられていない（S172 の限界を参照）

### S172 LEE Jaeho（研究代表者。筑波大学）ほか（KAKEN 25370573 の研究成果報告）

> utilizing leveled corpora mainly consisting of text from textbooks of Japanese, we produced the following formula to measure the readability level of a given text in six scales

- 媒体・日付: KAKEN "Development of a text readability assessment system to support reading activities in Japanese language education"（英語版ページ。報告は 2013〜2015 年度。日本語の課題名は取得していない）
- URL: https://kaken.nii.ac.jp/en/grant/KAKENHI-PROJECT-25370573
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 式は、平均文長・漢語率・和語率・動詞の比率・助動詞の比率の重み付き和（R2=.896 と報告。数値: 出典あり、研究者の報告）。日本語教科書を主とする学習者向けのコーパスで作られており、母語話者向けの短い UI 文言（ボタン・エラー）を測る前提ではない（本 skill の整理）

### S173 Sarah Richards（GDS。インタビューの書き起こし）

> Our research shows us that people only read about 20-28% of a page

- 媒体・日付: GDS blog "What we mean when we talk about content design", 2014-03-14（S187 と同じ書き起こし）
- URL: https://gds.blog.gov.uk/2014/03/14/what-we-mean-when-we-talk-about-content-design/
- 取得日: 2026-11-16
- 検証区分: R（数値の元の調査が示されていない発言。逐語は照合済み）
- 備考: 数値: 原論文未取得。「our research」とされるが調査の報告は示されず、値は NN/g（S161）の推定と一致する。数値の根拠には S161 を使い、この発言は GDS が流し読みを前提にした記録としてだけ使う

### S174 Ron Kohavi・Thomas Crook・Roger Longbotham（Microsoft）

> only about one-third were successful at improving the key metric!

- 媒体・日付: "Online Experimentation at Microsoft"（PDF。Third Workshop on Data Mining Case Studies and Practice Prize で 3 位と冒頭に記載。年は PDF の取得範囲で確かめていない）
- URL: https://exp-platform.com/Documents/ExP_DMCaseStudies.pdf
- 取得日: 2026-11-16
- 検証区分: A（PDF を `pdftotext` で照合。2 段組のため直前の文は別の段と混ざる。引用は混ざらない範囲に限った）
- 備考: 数値: 出典あり（当事者の一次報告）。主要な指標の改善を狙って設計・実施した実験のうち、改善できたのは約 3 分の 1 だった、という報告。対象は Microsoft の実験で、文言の変更に限らない

## 歴史

### S175 Windows Win32 UX Guidelines（Windows 7 時代）

> This design guide was created for Windows 7 and has not been updated for newer versions of Windows.

- 媒体・日付: Microsoft Learn「Windows desktop application design guidelines」（updated_at 2025-04-15）
- URL: https://learn.microsoft.com/en-us/windows/win32/uxguide/guidelines
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 同じ注記は、多くの指針は原則として今も当てはまるが、見た目と例は現行の指針を反映していない、とも書く。以下の Win32 の項目はすべて Windows 7 時代の時点情報。Microsoft Learn 掲載。源泉リポジトリ MicrosoftDocs/win32 の LICENSE は CC BY 4.0（raw.githubusercontent で確認）。照合は Learn の頁で行い、源泉リポジトリに同文があるかは未照合

### S176 GitHub（MicrosoftDocs/microsoft-style-guide）

> This repository was archived by the owner on Jul 28, 2025. It is now read-only.

- 媒体・日付: GitHub リポジトリページ（取得時点の表示）
- URL: https://github.com/MicrosoftDocs/microsoft-style-guide
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Learn の Microsoft Writing Style Guide は継続して更新（ms.date 2026 年の頁あり）。照合に使った源泉リポジトリの commit c6945c3 は 2024-11-11 付

### S177 GitHub（carbon-design-system/carbon-website）

> The Carbon website has moved to PayloadCMS. This version of the website is now archived.

- 媒体・日付: GitHub リポジトリ README（取得時点。archived 表示は Oct 5, 2026）
- URL: https://github.com/carbon-design-system/carbon-website
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Carbon の項目は移行前の原稿の時点情報。旧 URL は carbondesignsystem.com/building-blocks/... へ転送される

### S178 内閣官房長官通知「「公用文作成の考え方」の周知について」（文化庁の報道発表）

> 「公用文改善の趣旨徹底について」（昭和27年4月4日内閣閣甲第16号内閣官房長官依命通知）は、本日付けで廃止すること。

- 媒体・日付: 文化庁 報道発表、令和4年1月11日（2022-01-11）
- URL: https://www.bunka.go.jp/koho_hodo_oshirase/hodohappyo/93651301.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 1952 年の「公用文作成の要領」を各府省庁に通知した依命通知を廃止し、建議（S103 と同じ文書）を周知した。公用文の基準が 70 年ぶりに入れ替わった日付の根拠

### S179 文化審議会国語分科会「新しい「公用文作成の要領」に向けて」（報告）

> 「感じのよく意味のとおりやすいものとする」という基本となる考え方は変わらないものの、内容のうちに公用文における実態や社会状況との食い違いが大きくなっているところが見られる。

- 媒体・日付: 文化審議会国語分科会 報告、令和3年3月12日（2021-03-12）
- URL: https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93098001_01.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 1952 年の要領の基本理念（「感じのよく意味のとおりやすい」）を報告が引用している。1952 年の要領の原本は取得していないため、要領の文言はこの報告の引用として扱う

### S180 弘前大学人文学部社会言語学研究室『〈増補版〉「やさしい日本語」作成のためのガイドライン』（転載）

> 多くの外国人は日本語による災害情報や避難情報を得ることができずに、地震による物理的な被害だけではなく、情報の面でも被害を受け二重に被災してしまったのです。

- 媒体・日付: 弘前大学人文学部社会言語学研究室、2013（初版の序文は 2010 年 1 月 17 日付）。消防庁の検討会の参考資料 5-6 として転載された PDF で照合（増補にあたっての文）
- URL: https://www.fdma.go.jp/singi_kento/kento/items/kento207_20_sankou5-6.pdf
- 取得日: 2026-11-16
- 検証区分: B
- 備考: やさしい日本語の起点を 1995 年の阪神・淡路大震災に置く記述。歴史ノートの起点に使う

### S181 Impress「INTERNET Watch」の報道（Microsoft の長音表記変更）

> マイクロソフト株式会社は7月25日、外来語に由来するカタカナ用語末尾の長音表記を、内閣告示ルールに基づいた表記に準拠すると発表した。

- 媒体・日付: INTERNET Watch、2008 年 7 月 25 日
- URL: https://internet.watch.impress.co.jp/cda/news/2008/07/25/20381.html
- 取得日: 2026-11-16
- 検証区分: R
- 備考: 見出しは「「フォルダ」が「フォルダー」に、マイクロソフトが長音表記を変更」。それまでの規則を記事は「2 音の用語は長音符号を付け、3 音以上の用語の場合は省くことを“原則”とする」主旨の JIS 系の規則と説明するが、これは記者の地の文で、Microsoft の発表文そのものではない。Microsoft の 2008 年の発表原文は取得していない

### S182 Kristina Halvorson

> Content strategy plans for the creation, publication, and governance of useful, usable content.

- 媒体・日付: A List Apart, Issue No. 274 "The Discipline of Content Strategy", 2008-12-16
- URL: https://alistapart.com/article/thedisciplineofcontentstrategy/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: コンテンツ戦略を Web 制作の一分野として名指しした記事。「作る・出す・保守する（governance）」まで含める定義で、文言を書く仕事を画面単位でなく運用まで広げる根拠に使える。ライセンスは A List Apart と著者の著作権表示。短い引用にとどめる

### S183 Joshua Porter（bokardo）

> Microcopy is small yet powerful copy. It’s fast, light, and deadly.

- 媒体・日付: bokardo.com "Writing Microcopy"（ページのメタデータの公開日時は 2009-06-09。2012-12-01 の更新日時も記録）
- URL: http://bokardo.com/archives/writing-microcopy/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 請求先住所の入力エラーが、フォーム上部に 1 文を足しただけで消えたという本人の体験談と、PayPal のアカウント不要を伝える半文の例を挙げる。体験談に数値は無い。microcopy の造語者だとは本文に書いていない（帰属上の注意）

### S184 Sarah Richards（GDS）

> For gov.uk we are working to make sure that users can find relevant content, read, understand and leave.

- 媒体・日付: GDS blog "It's all about the words", 2012-01-11
- URL: https://gds.blog.gov.uk/2012/01/11/its-all-about-the-words/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Directgov は言葉を簡単にする方針だったが、あらゆる場合を網羅しようとして但し書きと専門用語が増え、流し読みしにくかったと書く（要旨）。目標を「分かりやすい・覚えやすい・行動しやすい」に置く。GOV.UK の編集方針の出発点の記録。OGL v3.0

### S185 GDS（Alan Maddrell）

> There's an understandable tendency in government to want the user to understand everything they might possibly need to know in case something goes wrong.

- 媒体・日付: GDS blog "If content is king, who rules our land?", 2012-05-31
- URL: https://gds.blog.gov.uk/2012/05/31/if-content-is-king-who-rules-our-land/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「念のため全部書く」傾向への反論。同記事は "Write less, say more" の見出しを持つ。網羅しようとして読まれなくなる失敗パターンの根拠。OGL v3.0

### S186 Sarah Prag（GDS）

> The research and content planning is done by a content designer in the GDS team.

- 媒体・日付: GDS blog "Needs to content", 2012-10-22
- URL: https://gds.blog.gov.uk/2012/10/22/needs-to-content/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 利用者のニーズが公開されるまでの 6 段階（ニーズの分析、調査と計画、作成、編集の確認、事実確認、公開）を書く。2012 年の時点で「content designer」が職名として使われていた記録。OGL v3.0

### S187 Sarah Richards（GDS。インタビューの書き起こし）

> We take a user need – so something that a user will need to find out from government – and we present it in the best way possible.
> It doesn’t have to just be words. That’s why we call it content design.

- 媒体・日付: GDS blog "What we mean when we talk about content design"（聞き手 Giles Turnbull。音声と書き起こし）, 2014-03-14
- URL: https://gds.blog.gov.uk/2014/03/14/what-we-mean-when-we-talk-about-content-design/
- 取得日: 2026-11-16
- 検証区分: A（GDS が公開した書き起こしで照合。音声との突き合わせはしていない）
- 備考: 名称の理由（言葉に限らず、計算ツール・動画など最適な形で出す）を本人が述べた記録。難しかったのは文化の変化だったとも述べる（要旨）。同じインタビューの「20〜28% しか読まない」の発言は、数値の扱いが違うため S173 に分けた。OGL v3.0

### S188 Content Design London（About）

> Sarah is best known for her work at the Government Digital Service (GDS). There, she set up an award-winning team and helped implement the practice of content design.

- 媒体・日付: Content Design London "About"（日付なし）
- URL: https://contentdesign.london/about
- 取得日: 2026-11-16
- 検証区分: R（組織の自己紹介の地の文）。逐語は照合済み
- 備考: Richards と Winters を同一人物とみる根拠の 1 つ（帰属上の注意）。「award-winning」は組織の自己記述

### S189 Facebook（Meta）Product Content Strategy team（Elisabeth C.）

> So today, we’re changing the name of our Content Strategy team to the Content Design team.
> We proceed as content designers: people who design in words, concepts, systems and terminology, voice and tone

- 媒体・日付: Design at Meta blog "Why we're moving from content strategy to content design", 2020-10-06（取得したページは日本語ロケールで日付が「2020年10月6日」と表示）
- URL: https://www.meta.com/design-at-meta/blog/why-were-moving-from-content-strategy-to-content-design/ （旧 URL design.facebook.com/stories/… は転送される）
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 2009 年に 1 人（Sarah Cancilla）で始まり、改称時に約 500 人。27 社の職名と役割を分析し、content design が標準になりつつあると判断した、と書く（数値: 出典あり。社内の自己報告）。「content strategy」が市場ではマーケティングを指すようになったことも改称理由に挙げる

### S190 Mike Stumpo（Uber Design。Jaime Walke と共著）

> In 2010, my job title was Content Strategist. At the time, I worked with information architects, interaction designers, graphic designers, web designers, illustrators, animators, and a slew of other talented folks to create digital experiences.
> At Uber, we called ourselves Product Writers. Until now, UX Writers.
> Now, it’s my pleasure to introduce our team as Content Designers

- 媒体・日付: Medium（Uber Design）"What's in a name? Introducing Content Design at Uber", 2021-04-27
- URL: https://web.archive.org/web/20230609150548/https://medium.com/uber-design/whats-in-a-name-introducing-content-design-at-uber-191ed04ca19b （Medium 本体は自動取得を拒否したため Wayback の保存コピーで照合）
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 職名が Content Strategist → Product Writers → UX Writers → Content Designers と移った 1 社の記録。原文の段落ごとに引用ブロックを分けた

### S191 Amy Lanfear（Microsoft Design）

> When Windows 2000 was nearly ready to ship, the first official “UI text writer” position was created.

- 媒体・日付: Medium（Microsoft Design）"The Evolution of UX Writing at Microsoft", 2019-05-13
- URL: https://web.archive.org/web/20230719100558/https://medium.com/microsoft-design/the-evolution-of-ux-writing-at-microsoft-f3bd4ee7badc
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 1990 年代半ば〜後半、UI の文言はテクニカルライターの副業だったと本人が回想する（要旨）。Windows 2000 の出荷前後に「UI text writer」の職が生まれ、のちに UX writer になったという、1 社の当事者の回想。業界全体の起点の根拠にはしない

### S192 William J. Clinton（米国大統領覚書）

> The Federal Government's writing must be in plain language.

- 媒体・日付: Memorandum on Plain Language in Government Writing, 1998-06-01（Weekly Compilation of Presidential Documents 1998-06-08 号, p. 1010）
- URL: https://www.govinfo.gov/content/pkg/WCPD-1998-06-08/html/WCPD-1998-06-08-Pg1010.htm
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 平易な文書の特徴として、日常の語（必要な専門用語を除く）、「you」などの代名詞、能動態、短い文を挙げ、1998-10-01 以降の新しい文書（規則を除く）に求めた。米国政府の著作物

### S193 Plain Writing Act of 2010（Public Law 111-274）

> The term ``plain writing'' means writing that is clear, concise, well-organized, and follows other best practices appropriate to the subject or field and intended audience.

- 媒体・日付: Public Law 111-274, Sec. 3 Definitions（govinfo の法文 HTML。引用符は法文の表記 `` '' のまま）
- URL: https://www.govinfo.gov/content/pkg/PLAW-111publ274/html/PLAW-111publ274.htm
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 対象は連邦行政機関の「covered document」（給付・サービス・納税・遵守の方法に関わる文書。規則は除く）。民間の UI 文言に法的義務を課すものではない。米国政府の著作物

### S194 plainlanguage.gov "History and timeline"（2022 年の保存コピー）

> President Obama signed the Plain Writing Act of 2010 into law on October 13, 2010.
> President Nixon created some early momentum when he decreed that the Federal Register be written in “layman’s terms.”

- 媒体・日付: plainlanguage.gov（PLAIN）"History and timeline"。Wayback の保存コピー 2022-12-20
- URL: https://web.archive.org/web/20221220165901/https://www.plainlanguage.gov/about/history/ （現行の digital.gov 側の対応ページは取得時に 404）
- 取得日: 2026-11-16
- 検証区分: R（機関の地の文）。逐語は照合済み
- 備考: 1970 年代（Nixon・1977 年の FCC の市民バンド無線規則・1978 年の Carter の大統領令・Document Design Project）から 2010 年代までの年表。Joanne Locke の文書を要約・更新したものと記載。年号の根拠に使い、大統領の発言としては引用しない

## 批判・騙しの文言

### S195 Sarah Gibbons・Tarun Mugunthan・Jakob Nielsen（NN/g）

> Our research shows that anthropomorphic behaviors have a functional role (users assume the AI will perform better) and a connection role, meant to create a more pleasant experience.

- 媒体・日付: NN/g "The 4 Degrees of Anthropomorphism of Generative AI", 2023-10-20
- URL: https://www.nngroup.com/articles/anthropomorphism/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ChatGPT の利用者を対象にした定性調査。擬人化は Courtesy・Reinforcement・Roleplay・Companionship の 4 段階。利用者側の行動の分類で、製品が人格を演じるべきだという主張ではない（本 skill の読み）。AI の応答文言の人称・敬語を決めるときの前提に使える

### S196 Vishakh Padmakumar・He He

> We develop a set of diversity metrics and find that writing with InstructGPT (but not the GPT3) results in a statistically significant reduction in diversity. Specifically, it increases the similarity between the writings of different authors and reduces the overall lexical and content diversity.

- 媒体・日付: arXiv 2309.05196 "Does Writing with Language Models Reduce Content Diversity?"（初版 2023-09-11、v3 2024-07-01。ICLR 2024）
- URL: https://arxiv.org/abs/2309.05196
- 取得日: 2026-11-16
- 検証区分: A（要旨）
- 備考: 均質化は主にモデルが出した文によるもので、利用者自身が書いた部分は変わらなかったと要旨が書く。人間のフィードバックで調整したモデルほど均質になるという示唆。時点情報（2023 年のモデル）。要旨以外の本文と数値は読んでいない

### S197 Zhivar Sourati ほか

> While core content is retained when LLMs polish and rewrite texts, LLMs also homogenize writing styles, reducing writing-complexity variance by a statistically significant 21-50% across datasets and models

- 媒体・日付: arXiv 2502.11266 "The Shrinking Landscape of Linguistic Diversity in the Age of Large Language Models"（初版 2025-02-16、v2 2026-08-24。Nature Human Behaviour (2026), DOI 10.1038/s41562-026-02550-0 と arXiv ページが記載）
- URL: https://arxiv.org/abs/2502.11266
- 取得日: 2026-11-16
- 検証区分: A（要旨）
- 備考: 数値: 出典あり（著者の要旨）。7 データセット・88 万件超の文章。内容は保たれるが文体のばらつきが減り、優勢な特徴が強まる。AI で文言を整えるとブランドのボイスが一般的な文体へ寄る、という懸念の根拠（応用は本 skill の推測）。Nature 掲載版の本文は取得していない

### S198 Dhruv Agarwal・Mor Naaman・Aditya Vashistha

> AI suggestions led Indian participants to adopt Western writing styles, altering not just what is written but also how it is written. These findings show that Western-centric AI models homogenize writing toward Western norms

- 媒体・日付: arXiv 2409.11360 "AI Suggestions Homogenize Writing Toward Western Styles and Diminish Cultural Nuances"（初版 2024-09-17、v3 2025-03-12。CHI 2025 採録）
- URL: https://arxiv.org/abs/2409.11360
- 取得日: 2026-11-16
- 検証区分: A（要旨）
- 備考: インドと米国の参加者 118 人の比較実験（要旨）。日本語の UI 文言への影響を調べた研究は取得していない（空白）。著者名は arXiv ページの記載に基づく

### S199 Arunesh Mathur ほか

> Analyzing ~53K product pages from ~11K shopping websites, we discover 1,818 dark pattern instances, together representing 15 types and 7 broader categories.

- 媒体・日付: arXiv 1907.07032 "Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites"（CSCW 2019。初版 2019-07-16、v2 2019-09-20）
- URL: https://arxiv.org/abs/1907.07032
- 取得日: 2026-11-16
- 検証区分: A（要旨）
- 備考: 数値: 出典あり（著者の要旨）。うち 183 サイトが欺く手法を使い、22 の第三者がダークパターンを部品として提供していたと要旨が書く。confirmshaming の件数は要旨に無く、本文は読んでいない

### S200 Deceptive Patterns "Confirmshaming"（Harry Brignull が始めたサイト。帰属上の注意）

> Confirmshaming works by triggering uncomfortable emotions, such as guilt or shame, to influence users' decision-making.

- 媒体・日付: deceptive.design「Confirmshaming」のページ（ページに日付の記載なし。© 2026 Testimonium Ltd の表示）
- URL: https://deceptive.design/types/confirmshaming/ （www.deceptive.design から転送される）
- 取得日: 2026-11-16
- 検証区分: C
- 備考: 断る側のボタンを相手を貶める言い方にする手法。医療用品の EC が 2018 年に通知の拒否を「No, I don't want to stay alive」などと書いた書かない例を、Per Axbom（2021）を出典として挙げる（孫引き。例の一次資料は未取得）。ここに挙がる英文は、書かない例の紹介で、推奨ではない

### S201 Deceptive Patterns "Trick wording"

> The trick wording deceptive pattern takes advantage of user expectations and ambiguous language to mislead and deceive users.

- 媒体・日付: deceptive.design "Trick wording"（日付なし）
- URL: https://deceptive.design/types/trick-wording/
- 取得日: 2026-11-16
- 検証区分: C
- 備考: 利用者が流し読みする前提（S159）を悪用する、と書く。二重否定のチェックボックス文言の点検に使う

### S202 米国連邦取引委員会（FTC）スタッフ報告書

> Using shame to steer users away from certain choices by framing the alternatives as a bad decision

- 媒体・日付: FTC "Bringing Dark Patterns to Light", Staff Report, 2022-09（付録の一覧の Confirm Shaming の項）。Wayback の保存コピー 2023-12-28（PDF）
- URL: https://web.archive.org/web/20231228010935/https://www.ftc.gov/system/files/ftc_gov/pdf/P214800%20Dark%20Patterns%20Report%209.14.2022%20-%20FINAL.pdf （ftc.gov 本体は自動取得で 404 を返した）
- 取得日: 2026-11-16
- 検証区分: A（PDF を `pdftotext` で照合）
- 備考: 書かない例として「No, I don’t want to save money」を挙げる（推奨ではない）。同じ付録に Trick Questions（二重否定、「No, cancel」なのに解約されないボタンなど）も載る。スタッフ報告であり、委員会の規則ではない。米国政府の著作物

### S203 インド中央消費者保護庁（CCPA）指針（第三者の転載）

> Confirm shaming” means using a phrase, video, audio or any other means to create a sense of fear or shame or ridicule or guilt in the mind of the user so as to nudge the user to act in a certain way that results in the user purchasing a product or service from the platform or continuing a subscription of a service, primarily for the purpose of making commercial gains by subverting consumer choice.

- 媒体・日付: Guidelines for Prevention and Regulation of Dark Patterns, 2023（2023-11-30 の告示とされる）。TaxGuru による転載
- URL: https://taxguru.in/corporate-law/guidelines-prevention-regulation-dark-patterns-2023.html
- 取得日: 2026-11-16
- 検証区分: B
- 備考: 冒頭の開き引用符は転載ページの表記で別要素になっており、引用は閉じ引用符から始まる。官報の原本は取得していない。法令名と日付は転載ページと検索結果の範囲で、法的判断に使わない

## 作り方の進め方

### S204 Design Council（英国）

> The Double Diamond is a visual representation of the design and innovation process. It’s a simple way to describe the steps taken in any design and innovation project, irrespective of methods and tools used.

- 媒体・日付: The Double Diamond（公式ページ。日付の記載なし）
- URL: https://www.designcouncil.org.uk/our-resources/the-double-diamond/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ダブルダイヤモンドの定義。「手法やツールに依らず」プロセスの段階を述べる図という位置づけ。機関の自称。進め方の型の骨格に使える

### S205 Design Council（英国）

> This is not a linear process as the arrows on the diagram show. Many of the organisations we support learn something more about the underlying problems which can send them back to the beginning.

- 媒体・日付: Framework for Innovation（公式ページ。日付の記載なし）
- URL: https://www.designcouncil.org.uk/our-resources/framework-for-innovation/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ダブルダイヤモンドは直線ではないと機関自身が述べる箇所。「図は一方向に見えるが実際は戻る」という注意の根拠

### S206 Sarah Gibbons（Nielsen Norman Group）

> It is nearly impossible to improve a design without feedback from others. Their input helps you avoid mistakes and thus create higher quality work.

- 媒体・日付: Design Critiques: Encourage a Positive Culture to Improve Products（NN/g の記事、2016-10-23）
- URL: https://www.nngroup.com/articles/design-critiques/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 批評の目的。Jen の「批評の欠如」批判への実務側の答えの一つ

### S207 Sarah Gibbons（Nielsen Norman Group）

> Sharing designs early allows for earlier buy-in from team members that otherwise may not feel confident about the work and builds team consensus.

- 媒体・日付: Design Critiques（NN/g の記事、2016-10-23）
- URL: https://www.nngroup.com/articles/design-critiques/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 早く見せることで合意形成が進むという主張。提案と合意形成の型

### S208 GOV.UK（Service Manual）

> Before you start your research, you’ll need to interrogate that solution and reframe it as a problem to be solved.

- 媒体・日付: How the discovery phase works（Service Manual、2016-08-04 公開・2021-06-21 更新）
- URL: https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「解決策を渡されたら問題に戻す」。依頼の受け方・問いの立て方の根拠

### S209 GOV.UK（Service Manual）

> If you do not understand who they are or what they need from your service, you cannot build the right thing.

- 媒体・日付: Start by learning user needs（Service Manual、2016-04-04 公開）
- URL: https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 利用者の理解が作る前の前提という明言

### S210 Michael Bierut（Pentagram パートナー）

> It follows that every design presentation is inevitably, at least in part, an exercise in bullshit. The design process always combines the pursuit of functional goals with countless intuitive, even irrational decisions.

- 媒体・日付: On (Design) Bullshit（Design Observer、2005-05-09）
- URL: https://designobserver.com/on-design-bullshit/
- URL（原稿）: https://web.archive.org/web/2026/https://designobserver.com/on-design-bullshit/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 機能の要件（測れる）と直感の判断（説明しきれない）を分け、提示の場では後者が過剰に理屈づけられるという実務者の自己批判。提案と合意形成の注意点

### S211 Michael Bierut（Pentagram パートナー）

> Before I could commit to a design decision, I needed to have an intellectual rationale worked out in my mind. I discovered in short order that most clients seemed grateful for the rationale as well. It put aside arguments about taste; it helped them make the leap of faith that any design decision requires

- 媒体・日付: On (Design) Bullshit（Design Observer、2005-05-09）
- URL: https://designobserver.com/on-design-bullshit/
- URL（原稿）: https://web.archive.org/web/2026/https://designobserver.com/on-design-bullshit/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 理屈づけが「趣味の議論を脇に置き、決断の飛躍を助ける」という効用を認めた箇所。提案で根拠を示す価値と限界の両方の根拠

### S212 Karri Saarinen（Linear 共同創業者）

> Through this process, I generated hundreds of screens and was able to narrow down a few major directions that resonated most.

- 媒体・日付: How we redesigned the Linear UI (part II)（2024-03-28）
- URL: https://linear.app/now/how-we-redesigned-the-linear-ui
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 複数案を大量に出してから少数の方向性に絞る。方向性を複数出して絞る型の実例。企業の自称

### S213 Hikaru Sudo（Goodpatch）

> 目的があいまいなまま進めてしまうと収束が難しくなり、場当たり的なピボットを繰り返して無駄なコストを払うことにもなりかねません。

- 媒体・日付: 生成AIが作るプロトタイプは、本当にサービスづくりの近道になるのか？
- URL: https://goodpatch.com/blog/2026-08-ai-prototype
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 目的（誰に・どんな課題・どうなるか）を仮説でも先に言葉にしておくと、収束の判断軸になる、という主張

### S214 メルカリデザイン

> 実際に作ったプロトタイプは数百種類。試行錯誤を重ねて新しいロゴマークを決定しました。

- 媒体・日付: Hello new logo（メルカリ ロゴ刷新の公開ページ。日付の記載なし）
- URL: https://design.mercari.com/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ロゴの刷新で数百の試作から絞った、という企業の自称。複数案を出して絞る型の国内例

### S215 Natasha Jen（Pentagram パートナー）

> The reduction of a complex creative problem-solving mindset into five steps makes design seem easy when it’s not.

- 媒体・日付: It’s Nice That「Why Design Thinking is bullshit」
- URL: https://www.itsnicethat.com/articles/natasha-jen-pentagram-graphicdesign-230218
- 取得日: 2026-11-16
- 検証区分: C
- 備考: 5 段階への還元が「デザインは易しい」という誤解を生む、という批判。デザインの厳しさ（批評・推敲）を守る立場の根拠

## 引用ではない参照（事実の根拠）

### S216 Shopify Polaris（Content fundamentals）

- 要旨（逐語引用なし）: 声と調子を気にしすぎず「人間らしく聞こえる」ことに集中する。平易な語・短縮形（do not でなく don't）を使い、読解水準は米国の 7 学年程度を目安にする。声に出して読んで確かめる
- 媒体・日付: Polaris「Fundamentals」（commit 3f7954a）
- URL: https://github.com/Shopify/polaris-react-archive/blob/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/polaris.shopify.com/content/content/fundamentals.mdx
- URL（原稿）: https://raw.githubusercontent.com/Shopify/polaris-react-archive/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/polaris.shopify.com/content/content/fundamentals.mdx
- 取得日: 2026-11-16
- 検証区分: R
- 備考: 7 学年は目安で、根拠となる調査は示されていない。短縮形の推奨は GOV.UK（S006）と食い違う。ライセンス: Polaris の LICENSE は Shopify と連携するアプリへの利用に限るため、逐語引用せず要旨のみを置く

### S217 Atlassian Design System（Voice and tone）

- 要旨（逐語引用なし）: 声は Bold・Optimistic・Practical, with a wink の 3 特性。調子は利用者の状況（エラーか、成功か）で変える
- 媒体・日付: Atlassian Design System「Voice and tone」
- URL: https://atlassian.design/foundations/content/voice-tone
- 取得日: 2026-11-16
- 検証区分: R
- 備考: Atlassian Design System License は Add-on 開発のための限定許諾で、改変・翻訳・二次的著作物の作成を禁じる。逐語引用しない

### S218 （書誌）O'Reilly Japan『戦略的UXライティング ―言葉でユーザーと組織をゴールへ導く』

- 要旨（逐語引用なし）: O'Reilly Japan『戦略的UXライティング ―言葉でユーザーと組織をゴールへ導く』Torrey Podmajersky 著、中橋直也 監訳、松葉有香 訳、2022-04-26 発行、200 ページ、ISBN 978-4-87311-987-8、原書 Strategic Writing for UX。出版社の紹介文の要旨: UX テキストはタイトル・ボタン・説明文・音声の指示などを指し、3 つの架空の事例でボイスチャート（製品の原則・概念・語彙・冗長性・文法など）を作る。原書の出版年・ISBN は出版社ページを取得できず未照合
- 媒体・日付: 書誌（出版社・著者のページ）
- URL: https://www.oreilly.co.jp/books/9784873119878/
- 取得日: 2026-11-16
- 検証区分: A（書誌の照合のみ。本文は未照合）

### S219 Shopify Polaris（Error messages）

- 要旨（逐語引用なし）: 何が起きたかと次にすることを具体的に書く（数字・日付・利用者自身のデータ）。謝りすぎない。Shopify 側の原因でない限り「we」を持ち込まない。「invalid」のような専門用語を避ける。Do／Don't の例では、見出しを「Invalid bank account」でなく「入金できなかった」という事実と次の操作（口座情報の更新）にしている
- 媒体・日付: Polaris「Error messages」（照合に使った polaris-react-archive の commit 3f7954a、2026-09-09）
- URL: https://github.com/Shopify/polaris-react-archive/blob/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/polaris.shopify.com/content/content/error-messages.mdx（旧サイト polaris-react.shopify.com の該当頁は shopify.dev/docs/api/polaris の総合頁へ転送され、個別頁は残っていない）
- URL（原稿）: https://raw.githubusercontent.com/Shopify/polaris-react-archive/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/polaris.shopify.com/content/content/error-messages.mdx
- 取得日: 2026-11-16
- 検証区分: R（要旨。原稿は取得済み・照合可能）
- 備考: Polaris の LICENSE は Shopify と連携するアプリへの利用に限る。リポジトリは archived（2026-09-11）、現行は shopify.dev/docs/api/polaris

### S220 Shopify Polaris（Empty state）

- 要旨（逐語引用なし）: 空の状態はページ全体が空のときの部品。機能の利点を説明し、主要な行動ボタンは 1 つにする。見出しは行動を促す形にする（「注文と請求書」でなく「注文を作って請求書を送る」型）。使っていないことで利用者に罪悪感を持たせない
- 媒体・日付: Polaris「Empty state」（commit 3f7954a）
- URL: https://github.com/Shopify/polaris-react-archive/blob/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/polaris.shopify.com/content/components/layout-and-structure/empty-state.mdx
- URL（原稿）: https://raw.githubusercontent.com/Shopify/polaris-react-archive/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/polaris.shopify.com/content/components/layout-and-structure/empty-state.mdx
- 取得日: 2026-11-16
- 検証区分: R
- 備考: Carbon（S076）の「肯定文で」と方向は一致。ライセンス: Polaris の LICENSE は Shopify と連携するアプリへの利用に限るため、逐語引用せず要旨のみを置く

### S221 Atlassian Design System（Error messages）

- 要旨（逐語引用なし）: 「please」「sorry」を避ける。sorry はエラーを実際より深刻に見せ、please は権威と信頼を損ねうる、という理由づけ。題名は冠詞を除いて 3〜4 語を目安にし、題名だけで状況が分かるようにする
- 媒体・日付: Atlassian Design System「Error messages」
- URL: https://atlassian.design/foundations/content/designing-messages/error-messages
- 取得日: 2026-11-16
- 検証区分: R
- 備考: GOV.UK（S041・S042）は深刻な障害では sorry を使う。GitLab（S020）は迷惑をかけた場面の please を許す。3〜4 語は目安（根拠の調査なし）。ライセンス: Atlassian Design System License は改変・翻訳・二次的著作物の作成を禁じる限定許諾のため、逐語引用せず要旨のみを置く

### S222 Atlassian Design System（Success messages・Empty state）

- 要旨（逐語引用なし）: 成功メッセージの題名に、定型の成功を表す語を付けず、感嘆符も避ける（何にでも熱狂しない）。一方、空の状態の題名は、ふさわしければ「wink」（軽い遊び）を入れてよい場所とされる
- 媒体・日付: Atlassian Design System「Success messages」「Empty state」
- URL: https://atlassian.design/foundations/content/designing-messages/success-messages ・ https://atlassian.design/foundations/content/designing-messages/empty-state
- 取得日: 2026-11-16
- 検証区分: R
- 備考: ユーモアを「場所を限って許す」立場。GOV.UK（S005）・Google（S016）・Spectrum（S018）の「避ける」立場と対照。ライセンス: Atlassian Design System License は改変・翻訳・二次的著作物の作成を禁じる限定許諾のため、逐語引用せず要旨のみを置く

### S223 Atlassian Design System（Modal dialog・Flag）

- 要旨（逐語引用なし）: モーダルの主ボタンは題名を反映する（題名「Fork …」なら主ボタンは「Fork repository」）。フラグ（通知）のエラーでは非難を避け、こちらの不具合なら引き受ける。例として、主語を you にした「あなたの接続に問題がある」型ではなく、主語を we にした「こちらが接続に手間取っている」型を勧める（we を使って責任を引き受ける立場）
- 媒体・日付: Atlassian Design System「Modal dialog」「Flag」usage
- URL: https://atlassian.design/components/modal-dialog/usage ・ https://atlassian.design/components/flag/usage
- 取得日: 2026-11-16
- 検証区分: R
- 備考: 主ボタンと題名の対応は Carbon（S073）・Apple（S051）と一致。we の使用は Apple（S009）・Fluent 2（S019）と食い違う。ライセンス: Atlassian Design System License は改変・翻訳・二次的著作物の作成を禁じる限定許諾のため、逐語引用せず要旨のみを置く

### S224 SmartHR Design System「アプリケーションのライティング」

- 要旨（逐語引用なし）: ボタンは押すと操作や処理が実行される部品なので、ラベルは利用者の操作を表す動詞の終止形で書く。画面の題名・項目名は名詞、ボタンは動詞という分担になる。
- 媒体・日付: SmartHR Design System（Web。ページの更新日は未確認）
- URL: https://smarthr.design/products/contents/ui-text/app-writing/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。

### S225 SmartHR Design System「アプリケーションのライティング」

- 要旨（逐語引用なし）: 名詞に「する」が付いた動詞（追加する・削除する など）は「する」を省き、名詞の形でボタンに書く。短く簡潔になり、業務アプリケーションに合うから、と理由を述べる。目的語を付けるときは「の」でつながず、「を」でつなぐ。
- 媒体・日付: SmartHR Design System（Web。ページの更新日は未確認）
- URL: https://smarthr.design/products/contents/ui-text/app-writing/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。省略の理由を「業務アプリケーション」という文脈に限って述べており、一般消費者向けにそのまま移せるとは書いていない。

### S226 SmartHR Design System「アプリケーションのライティング」

- 要旨（逐語引用なし）: リンク先を想像しにくい文言（「こちら」だけのリンクなど）を避け、できるだけ具体的に書く。文字数に制約がある場合の書き方（例外）も決めている。
- 媒体・日付: SmartHR Design System（Web。ページの更新日は未確認）
- URL: https://smarthr.design/products/contents/ui-text/app-writing/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。参考文献に WCAG を挙げる。

### S227 SmartHR Design System「アプリケーションのライティング」（一覧）

- 要旨（逐語引用なし）: 監査ログに記録する操作の名前は名詞で終える形にし、説明文はです・ます調で動詞まで書く。文体を部品ごとに決めている。
- 媒体・日付: SmartHR Design System（Web。ページの更新日は未確認）
- URL: https://smarthr.design/products/contents/ui-text/app-writing/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。文体を「部品ごと」に決める例。

### S228 SmartHR Design System「エラーメッセージ」

- 要旨（逐語引用なし）: エラーメッセージには、何が起きたか・なぜ起きたか・どうすればよいかの 3 要素を入れる。表示の優先順は、なぜ（原因）、どうすれば（対処）、何が（起きたこと）の順。
- 媒体・日付: SmartHR Design System（Web。ページの更新日は未確認）
- URL: https://smarthr.design/products/contents/error-messages/overview/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。結論（対処）を先にする公用文（S141）とは順序の考え方が異なるので、両方を示して選ばせる。

### S229 SmartHR Design System「ライティングスタイル」

- 要旨（逐語引用なし）: カタカナ語を使う前に、漢字語での言い換えを検討する。理由として、カタカナ語は利用者ごとに慣れの度合いだけでなく、意味の受け取り方の幅が漢字語より大きいことを挙げる。
- 媒体・日付: SmartHR Design System（Web。ページの更新日は未確認）
- URL: https://smarthr.design/products/contents/writing-style/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。カタカナ語を避ける理由を「意味の幅」に置く点が、公用文（S090）より具体的。世論調査（S092）の「分かりにくい」とも符合する。

### S230 SmartHR Design System「AI の名前」

- 要旨（逐語引用なし）: AI の個別機能には、ロボットやアシスタントのように、人や機械が担う役割を連想させる名前を付けない。機能名は「AI」と、目的から付けた名前を組み合わせる。
- 媒体・日付: SmartHR Design System（Web。ページの更新日は未確認）
- URL: https://smarthr.design/products/contents/ai/ai-name/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。AI 機能を擬人化しない命名規則の国内の実例。

### S231 Unicode MessageFormat 2.0 の位置づけ

- 要旨（逐語引用なし）: UTS #35 Part 9（MessageFormat）は CLDR Version 49・2026-10-21 付で「stable document」と表示されている。一方、ICU User Guide の Formatting Messages ページ（commit bf835ba 時点）は MessageFormat 2.0 を「draft specification」、ICU4J の実装を Technical Preview と書いており、記述が揃っていない。CLDR の言語別複数形表では日本語は基数・序数とも other のみ
- 媒体・日付: UTS #35 Part 9（2026-10-21）、ICU User Guide（2026-10-10 の commit）、CLDR Language Plural Rules チャート
- URL: https://www.unicode.org/reports/tr35/tr35-messageFormat.html ・ https://unicode-org.github.io/icu/userguide/format_parse/messages/ ・ https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
- 取得日: 2026-11-16
- 検証区分: R
- 備考: UTS #35 のリポジトリ LICENSE は公開配布目的の複製・改変を禁じるため逐語引用しない。ICU ページ側の誤字「Technial Preview」は原文のまま

### S232 SmartHR Design System「記号」

- 要旨（逐語引用なし）: 数字や英単語と日本語の間に、半角スペースを入れない。
- 媒体・日付: SmartHR Design System（Web。ページの更新日は未確認）
- URL: https://smarthr.design/products/contents/idiomatic-usage/symbol/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。和欧間のスペースを入れない側。JTF（S123）と同じで、Microsoft（S125）と逆。

### S233 SmartHR Design System「数字」

- 要旨（逐語引用なし）: 数字を丸で囲んだ文字は使わない。同じページで、数字は半角の算用数字にする、「か所」「か月」と書く、数値は 3 桁ごとにカンマで区切る、とも定める。
- 媒体・日付: SmartHR Design System（Web。ページの更新日は未確認）
- URL: https://smarthr.design/products/contents/idiomatic-usage/count/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。

### S234 SmartHR Design System「カタカナ」

- 要旨（逐語引用なし）: 語末が -er・-or・-ar の語は長音符号を付け、語末が -y の語は付けない。例外も挙げ、browser と folder は -er でも長音符号を付けない表記にする。
- 媒体・日付: SmartHR Design System（Web。ページの更新日は未確認）
- URL: https://smarthr.design/products/contents/idiomatic-usage/katakana/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。語末 -y で公用文（S110）・JTF（S122）と逆。世論調査（S118）の多数派（セキュリティ 53.5%）とは一致する。規則と例外の両方を持つ実例。

### S235 SmartHR Design System「カタカナ」

- 要旨（逐語引用なし）: 「ウィ・ウェ・ウォ」の表記にそろえる根拠として、NHK 放送文化研究所の 2012 年の調査を挙げる。
- 媒体・日付: SmartHR Design System（Web。ページの更新日は未確認）
- URL: https://smarthr.design/products/contents/idiomatic-usage/katakana/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。NHK の PDF（https://www.nhk.or.jp/bunken/summary/kotoba/yougo/pdf/091.pdf）は 2026-11-16 の取得で 0 バイトとなり、調査本体は確認していない。「SmartHR がそう書いている」ことの根拠に限る。

### S236 SmartHR Design System「コンテンツ」（ライティングガイドの概要）

- 要旨（逐語引用なし）: 同社のライティングガイドは、テクニカルコミュニケーター協会『日本語スタイルガイド』第 3 版を参考にし、製品を操作する利用者の読む負担を減らす言葉を定める、と述べる。
- 媒体・日付: SmartHR Design System（Web。ページの更新日は未確認）
- URL: https://smarthr.design/products/contents/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。指針の土台が『日本語スタイルガイド』第 3 版（書誌は「補足の参照」）であることを同社が書く。目的を、読解の負荷の軽減と、日本語のあいまいさが生む行き違いを埋めることに置く。表記ゆれの統一の目的を説明するときに使える。

### S237 SmartHR Design System「ひらがな」

- 要旨（逐語引用なし）: 下敷きにした『日本語スタイルガイド』が漢字で書く語の一部を、同社では平仮名で書くと定め、外部の基準からの差分を明記している。
- 媒体・日付: SmartHR Design System（Web。ページの更新日は未確認）
- URL: https://smarthr.design/products/contents/idiomatic-usage/hiragana/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。外部の基準を採用しつつ、差分を記録する運用の実例。どの語についての記述かは周辺の項目で確認すること（この台帳では語を特定していない）。

### S238 SmartHR Design System「ライティングスタイル」

- 要旨（逐語引用なし）: 敬語を重ねすぎて、情報が伝わりにくくならないようにする。依頼や完了の報告は簡潔な丁寧語の形をよい例とし、依頼に「いただく」「お願いいたします」を重ねる形や「させていただく」をよくない例に挙げる。
- 媒体・日付: SmartHR Design System（Web。ページの更新日は未確認）
- URL: https://smarthr.design/products/contents/writing-style/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。S129・S130・S134 と同じ向き。

### S239 SmartHR Design System「ライティングスタイル」

- 要旨（逐語引用なし）: 「〜することができる」のような回りくどい言い方は、できるだけ使わないよう求める。
- 媒体・日付: SmartHR Design System（Web。ページの更新日は未確認）
- URL: https://smarthr.design/products/contents/writing-style/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。この台帳で取得した国内企業の公開ライティング指針のうち、項目数が最も多いもの。

### S240 SmartHR Design System「ライティングスタイル」

- 要旨（逐語引用なし）: 語どうしの関係が分かるように、格助詞（が・の・を・に など）を省かずに書く。助詞を落として名詞を並べた形をよくない例に挙げる。
- 媒体・日付: SmartHR Design System（Web。ページの更新日は未確認）
- URL: https://smarthr.design/products/contents/writing-style/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。同じページの一覧には、常用漢字表にない読みを使わない、社内用語のような一般的でない言葉を使わない、同じことを複数の言い方で説明しない、といった項目も並ぶ（要旨）。

### S241 SmartHR（SmartHR Design System）

- 要旨（逐語引用なし）: 自社のアクセシビリティの基準項目の 1 つとして、背景色と文字色のコントラスト比を 4.5:1 以上（29px 以上の大きな文字は 3:1 以上）と定める。
- 媒体・日付: アクセシビリティガイドライン（項目 4-2。日付の記載なし）
- URL: https://smarthr.design/accessibility/standards-and-process/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）だけを置く。自社基準の数値。SmartHR 自社のガイドライン項目であり、WCAG 本文の引用ではない。

## 補足の参照（番号を振らない箇条）

**国内の文言・表記**

書誌は国立国会図書館サーチ（NDL Search）の OpenSearch と openBD の応答で確認したもの。本文は読んでいないので、逐語引用はしない。要旨は書名・目次の範囲の、本 skill の言葉。

| 書誌 | 確認元 | 要旨と用途 |
|------|--------|-----------|
| テクニカルコミュニケーター協会 編著『日本語スタイルガイド』第3版、テクニカルコミュニケーター協会出版事業部会、2016 年 4 月、ISBN 9784902820102 | NDL（「第3版」の表示は 2016-04 の別の書誌レコードによる。ISBN 9784902820102 は 2016.4 のレコードによる。2 つのレコードを突き合わせた書誌で、同じ本かは目で確かめていない） | 技術文書の日本語の表記・文体の基準書。SmartHR の指針が下敷きにしたと明記する（S236・S237）。NDL には同じ ISBN の 2018 年 5 月のレコードも載る |
| Kinneret Yifrah ほか『UXライティングの教科書 ユーザーの心をひきつけるマイクロコピーの書き方』翔泳社、2021 年 2 月、ISBN 9784798167336 | openBD | 原著は英語のマイクロコピーの本の邦訳。openBD の著者欄に仲野佑希・郷司陽子の名がある（訳・監修などの役割は未確認）。国内の UX ライティングの入門書として名前が出る |
| Torrey Podmajersky ほか『戦略的UXライティング 言葉でユーザーと組織をゴールへ導く』2022 年 4 月、ISBN 9784873119878 | openBD | 原著は英語。openBD の著者欄に中橋直也・松葉有香の名、発売はオーム社。ボイスと文言の設計の方法論 |
| 庵功雄『やさしい日本語 多文化共生社会へ』岩波書店、2016 年 8 月、ISBN 9784004316176 | openBD | 副題のとおり、多文化共生の文脈で「やさしい日本語」を論じる本（本文未確認）。S143・S144・S145・S146・S147・S148・S149・S150・S180 の背景を補う候補 |
| 本多勝一『日本語の作文技術』朝日新聞社 | NDL（1978 年・1979 年・1987 年の書誌を確認。初版年は未確認） | 修飾の順序と読点の打ち方を論じた作文技術の本（一般知識による。本文未確認）。読点の規則を論じる際の参照候補 |
| 共同通信社 編著『記者ハンドブック 新聞用字用語集』共同通信社 | NDL（1957 年から 2001 年までの版を確認。最新版は未確認） | 報道の用字用語の基準。国内の表記の揺れの「もう一つの規範」。最新版の内容は確認していない |

事実の根拠（引用ではないもの）:

- 「公用文作成の考え方」の建議は 2022 年 1 月 7 日、内閣官房長官通知は同年 1 月 11 日（S103・S178）
- 国立国語研究所の「外来語」委員会は 2002 年（平成 14 年）8 月設置。言い換え提案の各回の発表日（第 1 回 2003 年 4 月 25 日など）は検索の要約で見ただけで、提案の本体 PDF は取得していない（https://www2.ninjal.ac.jp/gairaigo/ 以下）
- 令和 7 年度の国語に関する世論調査は 2026 年 10 月公表
- JTF 日本語標準スタイルガイドは初版 2012 年 1 月 30 日、第 4.0 版 2026 年 7 月 25 日。第 3.0 版からライセンスが CC BY 4.0 に変わった（サイトの表示）

**実務・研究・歴史・批判**

- Douglas Bowman の氏名（S166 の筆者）。出典: https://stopdesign.com/about 。取得日: 2026-11-16。区分: A
- deceptive.design は 2010 年に Harry Brignull が始めた。出典: https://deceptive.design/about-us/ 。取得日: 2026-11-16。区分: R（サイト自身の説明）

- Martha Lane Fox の報告「Directgov 2010 and Beyond: Revolution Not Evolution」の公開（2010-11-23。Francis Maude への書簡の形）。出典: https://www.gov.uk/government/publications/directgov-2010-and-beyond-revolution-not-evolution-a-report-by-martha-lane-fox 。取得日: 2026-11-16。区分: A（掲載ページの日付のみ。PDF 本文は取得していない。GDS 設立との因果は本文で確かめていない）
- Weinreich, Obendorf, Herder, Mayer "Not Quite the Average: An Empirical Study of Web Use", ACM Transactions on the Web, vol. 2, no. 1, 2008-02。出典: S161 の NN/g 記事の書誌。論文本文は未取得。区分: R
- Karen A. Schriver "Plain Language in the United States Gains Momentum: 1940–2015"。出典: S170 と S194 の書誌。本文は未取得。区分: R
- Joanne Locke "A History of Plain Language in the Government"。出典: S194 の書誌。本文は未取得。区分: R
- Janice (Ginny) Redish『Letting Go of the Words』。出典: S169 で Jarrett が Redish の著書として挙げる。版・年・出版社は未照合。要旨（本 skill の理解。書籍・未照合）: Web の文章を、利用者の目的と会話の比喩から書き直す実務書。区分: U（書籍・未照合）
- Janice C. Redish "Readability formulas have even more limitations than Klare discusses", ACM Journal of Computer Documentation 24(3), 132–137, 2000。出典: 検索結果に出た書誌データベースの記載のみ。区分: B（書誌・未照合）
- Rudolf Flesch "A new readability yardstick"（1948）、W. L. Taylor のクローズ法（1953）、Ernest Gowers『Plain Words』（1948）。いずれも書誌は記憶と二次資料によるもので、原典・出版社ページを取得していない。年号を本文で使うときは「書誌未照合」と書く。区分: U
- Andy Welfle・Michael Metts『Writing Is Designing』（Rosenfeld Media）。出版社ページは自動取得で 403。年・ISBN は未照合。要旨（書籍・未照合）: 文言を設計工程の中で、調査・試作・検証とともに扱う実務書。区分: U
- Kristina Halvorson『Content Strategy for the Web』、Erin Kissane『The Elements of Content Strategy』、Erika Hall『Conversational Design』。書誌は未照合。区分: U
- Mozilla の UX チームが 2020-11 に職名を content design に変えたこと。出典: 検索結果の要約のみ（https://blog.mozilla.org/ux/2020/11/were-changing-our-name-to-content-design/ は自動取得で 403）。区分: B（未照合）
- インドの CCPA 指針の告示日（2023-11-30）・13 類型。出典: 検索結果の要約と S203 の転載。区分: B
- EU のデジタルサービス法（DSA）第 25 条（オンラインインターフェースの設計）。EUR-Lex は自動取得で 202（本文なし）。この台帳では使わない。区分: U

## 未検証・伝聞（SKILL.md では事実・引用として使わない）

**各社・各機関の指針**

- **MessageFormat 2.0 が「安定」になった年**: 取得した UTS #35 Part 9 は 2026-10-21 版で stable と表示するが、最初に stable になった版・年は確認していない。ICU の文書は draft 表記のまま（S231）。「MF2 は 20XX 年に正式化」と年を断定しない
- **Windows apps の「Research shows」**（S013）: 調査の出典がページに無い。研究結果として引かない
- **Mailchimp の「メールの半数超はモバイルで読まれる」**（S031）: 原文に数値はあるが、根拠の調査名・年が無い。2022 年以前の時点の主張
- **W3C 記事の翻訳膨張率の表**（S102）: W3C は IBM の「Guidelines to design global solutions」から引いたとするが、IBM の原典は未照合
- **GOV.UK の文章指針が guidance.publishing.service.gov.uk へ移った時期**: 旧 URL が 301 で転送されることは確認したが、移行日は未確認
- **Mailchimp の voice and tone 指針の初出年**（voiceandtone.com として公開されたとよく言われる）: 未照合。年を書かない
- **Microsoft Writing Style Guide の archived の経緯**: リポジトリが 2025-07-28 に archived と表示されること（S176）は確認したが、Learn 側の更新体制（どこで編集されているか）は未確認
- **「Material は toast に操作を置いてよい」**: M3 本体の文言指針は未取得。実装文書（S077）が取り消し・再試行の操作を挙げる範囲に留める

**国内の文言・表記**

- 「一文は 40 字以内」「一文は 30 字まで」などの字数の目安: 国内の Web 記事で流通しているが、取得した公的資料・指針のどれにも無い。公用文の目安は「50～60字ほど」（S138）
- 「やさしい日本語は普通の日本語より外国人留学生で 1.4 倍、小学校低学年の児童で 4 倍理解しやすい」: 弘前大学の研究として紹介されるが、取得した転載（S149・S150・S180）に見つからない
- 「やさしい日本語は 12 の規則と約 2,000 語」: 同上
- 東京都国際交流委員会の調査の「やさしい日本語 76%・英語 68%」: 在留支援のガイドラインの PDF の表に載るとされるが、抽出した文字列が崩れて照合できなかった
- 「SmartHR Design System は 2020 年に公開」: 取得した資料で年を確認していない
- 「Microsoft は 2008 年まで JIS Z 8301 に従っていた」: 報道（S181）は「JIS 記述ルール」と書くだけで規格番号を書いていない。規格番号を付けて言わない
- 「告示は著作権の対象外」: 著作権法の条文を取得していない。各サイトの利用規約だけを根拠にした
- NHK 放送文化研究所の 2012 年のソフトウェア表記の調査の結果（「ソフトウェア」が主流）: SmartHR の記述（S235）による伝聞。調査本体は未取得
- サイボウズ・メルカリ・LINEヤフーの「公開の UI 文言の指針」: 検索では見つからなかった。存在しないとも断定しない

**実務・研究・歴史・批判**

| 項目 | 状況 |
|------|------|
| 「microcopy は Joshua Porter が 2009 年に造語した」 | 広く流通する説明。取得した Porter の記事（S183）は定義するが、造語したとは書いていない。2009 年より前の用例の有無も調べていない |
| 「1 文が 8 語以下なら 100% 理解され、14 語で 90%…」（American Press Institute とされる文長と理解度の表） | 一次資料を確認できていない。取得の対象にもしていない。文長の目安に使わない |
| 「人は 20〜28% しか読まない」を GDS の独自研究とする説明 | GDS の発言（S173）は「our research」とするが、NN/g（S161）の値と一致し、GDS 自身の調査の報告は取得していない |
| 「Google は 41 色の青を試し、年 2 億ドルの増収を得た」 | Bowman（S166）は試したことだけを書き、結果は書かない。増収額は後年の報道とされるが未取得 |
| 「ボタンの文言を変えて 3 億ドル」 | Spool の一次報告（S167）はあるが対象は匿名で検証不能。変えたのは文言だけでなく登録の手順 |
| Expedia が入力欄 1 つを削って年 1,200 万ドル、などの文言・フォームの増収逸話 | 一次資料を取得していない |
| 「ボイスは一定でトーンは変わる」は Mailchimp が最初に言った | 取得できた最古は 2012 年の voiceandtone.com（S027）。それ以前の起源は調べていない |
| 「読みやすさは中学 2 年（8th grade）相当を目標に」という普遍的な基準 | 取得した出典に普遍的な基準としての記述は無い。Jarrett と Redish（S169）は成人に学年を当てるのは無意味とする |
| 「『エラーが発生しました』『Oops』は常に禁止」 | 取得した出典は責める語・冗談を避けるよう述べる（S082）が、原因が本当に不明なら「不明なエラー」と正直に書くほうがよいとする指針もある（S085） |
| 「UX writer の職名は Google が最初に使った」 | 取得した範囲に根拠が無い。確認できたのは Microsoft の「UI text writer」（Windows 2000 の頃。S191 の当事者の回想）と、Facebook・Uber の改称の記録だけ |
| Clippy（Office Assistant）が擬人化の失敗として廃止された、という因果 | Microsoft の一次資料を取得していない |
| iplfederation.org の平易な言葉の定義 | 取得したページの内容が無関係の賭博サイトの文面に置き換わっていた（2026-11-16）。ドメインの管理が変わった可能性があり、使わない |

## 調査の限界

**各社・各機関の指針**

- **Material Design の文言指針（M2 Writing・M3 Content design）を取得できなかった**。m3.material.io は JS 描画（取得結果 35 バイト）。M2 の material.io/design/communication/writing.html は Wayback Machine の CDX で 2019 年の 200 応答（約 12 KB）を確認したが、本体取得は 429（Too Many Requests）が続き、最後は「suspected abusive bot traffic」として遮断されたため再試行をやめた（M2 Onboarding の 2019 年版だけ取得できたが、文言指針ではないため未使用）。代替として Material Components for Android の実装文書（S077）だけを使った。Material の文言の指針は、この台帳にほとんど無い
- **Atlassian と Polaris は逐語引用しない**（ライセンス）。要旨（S216・S217・S219・S220・S221・S222・S223）のみ
- GOV.UK の A to Z スタイルガイド（gov.uk/guidance/style-guide/a-to-z）は取得したが、語の表記の一覧で UI 文言の指針ではないため台帳に入れていない
- オンボーディングは Spectrum（S066）だけを台帳に入れた。Apple HIG の Onboarding は designer-apple の範囲と重なるため取得のみで台帳外
- 未取得: Salesforce Lightning、SAP Fiori、Shopify Help Center、Intuit、Uber・Slack などの公開文言指針、日本語の文言指針（各社の日本語スタイルガイド・行政の文書指針）
- **第三者の批判（区分 C）を集められていない**。批判・限界の材料は、各指針自身の自己批判（S003・S056・S058・S071）と食い違いの比較に留まる
- 数値の根拠は薄い。出典ありと数えるのは、Win32 の通知の固定の表示時間 9 秒（S060。OS 固有の仕様値）だけ。Spectrum の 10 ステップ（S066）と GitLab の 5 語（S070）は指針上の目安、W3C の膨張率（S102）は IBM の二次引用で原典未照合なので、出典ありに数えない。いずれも利用者調査の数値ではない
- メールの文言指針は Mailchimp と GOV.UK の 2 系統だけ。トランザクションメールの件名・プレヘッダーの実証研究は扱っていない
- Microsoft Learn・Apple・Spectrum・Fluent 2 のページは取得時点の版。Microsoft Learn は `updated_at` を、Google は「Last updated」を媒体・日付に書いた。Apple・Spectrum・Fluent 2 はページに更新日が無い

**国内の文言・表記**

- 照合は NFKC 正規化後のため、全角と半角の区別（括弧・コンマ・数字）を照合では確かめていない。表記の全角半角そのものを主題にする引用（S105・S106・S107・S108・S123）は、引用ブロックを正規化前の文字列から写したが、PDF の文字抽出が原文の字形を正しく返しているかは目で確かめていない
- 批判側の出典（区分 C）が無い。この台帳の「限界」の材料は、国の指針どうし・指針と世論調査のずれ（S110 と S118、S114 と S115）、作成者自身の見直し（S150）、指針自身の注意（S133・S135・S136）で、独立した論評ではない。UX ライティングの国内の批判的な論考（過剰な親しみやすさ、AI の擬人化への批判など）は取得していない
- 国内企業の公開指針は SmartHR に偏っている。freee はアクセシビリティーの指針の一部、デジタル庁のデザインシステムは部品の説明の一部で、文言専用のページは見つからなかった。サイボウズ・メルカリ・LINEヤフーなどの公開の文言指針は検索で見つからなかった
- 国立国語研究所の「外来語」言い換え提案の本体（語の一覧）、「病院の言葉」を分かりやすくする提案、NHK 放送文化研究所の用語調査、1952 年の「公用文作成の要領」の原本、現代仮名遣い（1986）・くぎり符号の使い方（1946）の本文は取得していない。本文でこれらの年を使うときは、取得した資料に年が書かれている場合だけ番号付きで書いた
- 「障害」の表記の資料は取得したが精読しておらず、台帳に入れていない。言い換え・表記と人権の論点は空白
- 読みやすさの研究は、児童生徒向け（S154）と日本語学習者向け（日本語の文章難易度の判定システム）で、UI の短い文言（ボタン・エラー）を対象にした国内の実証研究は見つからなかった
- 敬語の扱いは国の指針（2007）と企業の指針で一致するが、敬語を減らしたときの利用者の受け止め（年代差など）を測った国内の調査は取得していない。世論調査（S119）の年代差は表記の例で、敬語の例ではない
- Web ページの内容は取得日時点のもの。SmartHR Design System のページには更新日の表示を確認できなかった

**実務・研究・歴史・批判**

- Medium（Microsoft Design・Uber Design・Facebook の旧 Medium 版）は自動取得を拒否するため、Wayback の保存コピーで照合した。保存時点と現行版の差は確かめていない
- ISO 24495-1 の規格本文、書籍（Podmajersky・Yifrah・Winters・Redish・Welfle と Metts・Halvorson）の本文は取得していない。要旨は出版社の紹介文か、本 skill の理解（書籍・未照合）である
- 平易な言葉の効果を数値で示す研究は、NN/g の 1997 年の研究（S160）以外の原論文を取得していない。法律・行政文書での理解度・問い合わせ削減の研究（Kimble など）は未調査
- 読みやすさの公式の原論文（Flesch の公式・Flesch-Kincaid・クローズ法）は未取得で、書誌も照合していない。批判は Redish・Jarrett・Schriver の二次・紹介の範囲にとどまる
- 日本語のリーダビリティ指標は jReadability（学習者向け）だけを確かめた。母語話者向けの UI 文言の理解度を測った日本語の研究、帯（Obi）など他の指標、日本語でのクローズテストの実施例は取得していない（空白）
- エラー文言のトーンを変えた比較実験の原論文（1980 年代の Shneiderman の message design 研究など）は取得していない。NN/g の指針は研究の報告ではなく専門家の指針である
- 擬人化・冗談の文言の失敗について、比較実験の原論文は取得していない。NN/g の定性調査（S029・S195）までである
- 生成 AI の文言の画一化は、汎用文章（エッセイ・Reddit の投稿・論文要旨など）の研究で、UI 文言（ボタン・エラー・通知）を対象にした研究は見つけていない。適用は推測
- confirmshaming の効果（どれだけ同意率が上がるか）を測った原論文は取得していない
- 取得日はすべて 2026-11-16。NN/g・GOV.UK のガイダンスは更新されうる

**作り方の進め方**

- 取得した日本のデザイン会社の記事は Goodpatch（2026 年の 3 件のブログ）が中心で、同社の自己説明に偏る。Goodpatch の記事は生成 AI 時代の議論を含み、デザイン一般の進め方としては文脈を考える
- 区分 A の多くは組織の自己説明で、進め方の有効性を第三者が検証したものではない。有効性の根拠（比較調査など）はこの台帳に含めていない
- 数値（所要日数・人数・ミリ秒など）はこの台帳に出典がなく、「目安（出典なし）」として扱う。SmartHR のコントラスト比（S241）は要旨で、出典ありの数値に使わない

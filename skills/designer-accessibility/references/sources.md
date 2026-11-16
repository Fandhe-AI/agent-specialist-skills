# designer-accessibility 出典台帳

`designer-accessibility`（アクセシビリティの専門家）の `SKILL.md`・`examples/`・`references/` が根拠にする出典の台帳。規格・法令・行政資料、実務・確かめ方・デザインシステム、歴史・批判・OSS と UI ライブラリの既定値、作り方の進め方の出典を、主題ごとに並べ、S001 から連番を振っている。引用原文・発言者や媒体・日付・URL・取得日・検証区分を記す。台帳は通読せず、番号で検索して該当の項目だけ読む。

全 256 件。逐語の引用を持つ項目が 251 件、逐語の引用を載せない要旨のみの項目（「引用ではない参照」）が 5 件。「引用ではない参照」は、同名の節にある。

## 主題別の件数

| 主題 | 件数 |
|------|------|
| WCAG と達成基準 | 46 |
| ARIA・APG・名前の算出 | 25 |
| HTML と CSS | 6 |
| 国内の制度と JIS | 26 |
| 海外の制度と訴訟 | 12 |
| 支援技術での確かめ方 | 13 |
| 自動検査とその限界 | 17 |
| デザインシステムと画面の型ごとの指針 | 31 |
| 認知・動き・色覚・低視力 | 14 |
| 障害のある利用者との評価と設計の引き継ぎ | 10 |
| 歴史と障害の捉え方（ユニバーサルデザイン・インクルーシブデザイン） | 17 |
| 批判・限界・オーバーレイ | 12 |
| OSS・UI ライブラリの既定値 | 14 |
| 作り方の進め方 | 2 |
| 引用ではない参照（要旨のみ） | 5 |
| APG の個別パターン | 6 |

主題の節は、本体の中で番号の順に並ぶ。主題が複数にまたがる項目は、近い主題に入れてある（例: WCAG 2.2 本文の歴史的な記述は「WCAG と達成基準」、Section 508 の経緯は「海外の制度と訴訟」、JIS の版の経緯は「国内の制度と JIS」）。番号の位置は、節の見出しと題で探す。

## 凡例

- 検証区分
  - A: 原典・公式ページ・仕様・法令（e-Gov の API の XML を含む）・公開リポジトリの原稿（コミットまたはタグに固定）、または原典の保存コピー（Wayback Machine）を `curl` で取得し、引用文または照合語が逐語で含まれることを機械的に照合した（タグの除去、空白の正規化、NFKC、PDF は `pdftotext` を通した後の部分文字列）
  - A（性質は論評）: 実務家の論評（個人のブログ・寄稿）を、本人の署名入りの文として A に入れた項目。備考に「本人の文。性質は論評」と書いた。逐語は照合済みだが、主張は筆者の立場として扱い、規範や事実の根拠にしない
  - B: 第三者の転載・二次引用で逐語を確かめたもの（原典そのものは未取得）、または他媒体経由の引用
  - C: 批判者・利害関係者（ベンダー・当事者団体・個人の論考・ライブラリの自己紹介）の主張。逐語は照合済みだが、主張の正しさ・因果は確かめていない。発言者の立場として扱う
  - R: 記者・機関の地の文、または通説の存在を伝えるだけの文。発言者本人の主張として引用しない。研究結果の根拠に R を使うときは、原論文は取得していないことを備考に書く
  - U: 未検証（末尾の「未検証・伝聞」に集める）。事実・引用として使わない
  - 「引用ではない参照」の区分 A: 短い照合語が原稿に逐語で含まれることを確かめた、という意味。要旨は本 skill の言葉で、原文ではない
- 「自称」: 組織・企業・ライブラリが自分たちの進め方・製品を自分で述べたもの。成果や有効性の第三者による検証ではない
- 数値（比・px・%・秒・件数・人数）は、区分 A で原文を確かめたものだけを「出典あり」とする。区分 R の文、「引用ではない参照」の要旨、備考にだけある数値は、出典ありの数値として使わない。調査・試験・訴訟の数値には、誰が・いつ・どの範囲で数えたかを添えて時点情報として扱う。原文に無い換算（和文の pt と px の対応など）は書かない
- 引用文は原文を改変していない（引用符・アポストロフィ・ダッシュの字形、原文の誤記、仕様の MUST・SHOULD などの大文字も原文のまま）。省略は引用を段落に分けて示し、段落の間を補わない。WCAG 2.2 の達成基準は見出しと本文の最初の部分、APG の個別パターンはキー操作と役割の要点だけを引用し、例外や選択肢の全文は載せていない。和文の PDF の引用は、改行の位置に入る空白を除いた形で載せた。日本語の訳・要旨・備考は本 skill の言葉で、発言者本人の発言ではない。「整理（推測）」と書いた箇所は出典が述べていない応用
- 項目の「URL」は利用者が開ける文書の URL、「URL（原稿）」は照合に使った固定の原稿（コミット固定の raw、e-Gov の API、Wayback の保存コピーなど）
- 取得日は、項目ごとに本文を確かめた日で、全項目が 2026-11-16。引用ブロックの行は、取得日の時点でページにあることを照合した。ページの更新で一致しなくなることがある。第三者は、引用文を URL（または URL（原稿））に対して `curl` と `grep -F` で再照合できる
- 他の skill の台帳の番号は持ち込まない。他の skill に触れる箇所は skill 名だけを書く
- ライセンス上の扱い
  - 本文を引用しないもの: ETSI EN 301 549（著作権表示が複製を禁じる）、JIS X 8341-3 の規格本文（転載不可）、ISO・ISO/IEC 40500 のページと規格本文、Microsoft Inclusive Design Toolkit（CC BY-NC-ND。逐語・翻訳・図の転載をしない）。根拠にした事実の要旨と引用しない理由だけを「補足の参照」の表に置いた。JIS の内容は WAIC の解説とデジタル庁の記述で示す
  - 要旨のみにしたもの: SmartHR Design System（リポジトリに LICENSE が無く、文書サイトの利用規約が再配布を目的とする利用と提供コンテンツの他サイトへの掲載・配布を NG とする。要旨と URL と短い照合語だけ）。OSS のソースのコードコメント（ライセンスの問題ではなく、実装の意図のメモで公開の文書の文ではないため、逐語を載せず要旨にする）
  - 短い引用に限るもの: W3C の仕様・WAI のページ・APG（W3C Document License）、WHATWG HTML、WAIC の独自文書、内閣府・総務省のページ、EUR-Lex（欧州委員会の再利用方針の本文は未取得）、WebAIM・Deque・PowerMapper・NV Access・CUDO、個人のブログ（Roselli・Pickering・O'Hara・Matuzović など）、ベンダーの報告。出典を明記した短い引用にとどめ、段落単位の転載・翻訳をしない
  - 出典を明記して逐語引用してよいもの: 日本の法令・政令（著作権法第 13 条）、米国連邦政府の文書（パブリックドメイン）、USWDS（CC0 1.0）、GOV.UK（OGL v3.0。Design System のリポジトリのコードは MIT）、デジタル庁（公共データ利用規約 PDL1.0）、Carbon・Material Web（Apache-2.0）、GitHub Annotation Toolkit（CC BY 4.0。帰属の表示が必要）、CC BY の論文
  - 個別の条件は各項目の備考と、下の「帰属上の注意」に書いた

## 帰属上の注意

- 規範と参考を分ける。規範は WCAG 2.2 本体の達成基準と適合要件、WAI-ARIA 1.2、ARIA in HTML、HTML Standard。Understanding・Techniques（S033）、APG（S055）、WCAG 本体の注記・例（S005）は参考で、適合の要件を作らない
- APG は規範ではなく、適合モデルを持たない（S055）。個別パターン（S251・S252・S253・S254・S255・S256）の引用は要点だけで、全てのキー・例外・選択肢は載せていない。ライセンスは、GitHub の判定が NOASSERTION で、W3C 文書一般の前提では W3C Document License
- 「ARIA の第 1 規則」は廃止扱いの草案の文。Using ARIA は 2026-02-24 に W3C Discontinued Draft になった（S063）。第 1 規則（S062）を引くときはこの位置づけを添え、規範の根拠は WAI-ARIA 1.2（S047）と ARIA in HTML（S060・S061）で示す
- 「No ARIA is better than Bad ARIA」は APG の Read Me First にある語で（S052）、誰かの発言として帰属しない
- WCAG 3 は作業草案（S042・S043・S044）。要件・数値を設計の根拠にしない。AccName 1.2（S064・S065）、Media Queries 5・CSS Values 4（S074・S075・S076）も作業草案で、時点情報として扱う
- 法的な助言ではない。国内法・海外制度・訴訟の記述は 2026-11-16 時点の一次資料の照合で、「その文書がそう書いている」という事実としてだけ扱う。個別の事業者に何が義務かの判断はしない
- デジタル庁のガイドブックは、記載の厳密な正確性や網羅性を担保しないと自ら書く（S089）。法の区別はガイドブックでなく、法文（S079・S081）と基本方針（S086・S087）で示す
- JIS X 8341-3 の改正版は、公示を確認していない（S098・S099 は改正を検討中であることの時点情報）
- デザインシステム・UI ライブラリの記述は、各組織の自社製品向けの判断（自称）で、互いに食い違うことがある。どれが正しいとは書かず、対象と前提の違いとして扱う。ライブラリの「fully accessible」などの自己紹介（S243。C）は事実として使わない
- 自動検査で見つかる割合は、出典ごとに測り方が違う。GDS（2017）は意図的に障壁を仕込んだ 1 ページでのツール比較（S129・S131）、Deque は自社の監査データの件数ベース（S132）、Roselli（2023）は 1 人の検証者による手動確認との比較（S135）。同じ「割合」として並べない。Deque の 57% はベンダー自身の主張で、「20〜30%」の通説は Deque の地の文が存在を伝えるだけ（S133。R。一次出典は未確認）
- 支援技術の利用比率（WebAIM・GOV.UK）は、統制されていない標本の自己申告。WebAIM #11 は 2026 年 7〜8 月（S119・S120）、GOV.UK は 2016 年（S118）。日本の利用者の比率ではない
- 訴訟件数は、数えた主体・裁判所・年の範囲が出典ごとに違う（Seyfarth は連邦裁判所のみ。S111・S112。UsableNet はベンダーで、連邦と一部の州裁判所。S113。C）。並べて比べず、米国の数値を国内に当てはめない
- 人物の視点は、本人の署名入りの文からの読み取りで、本人の一人称の発言として創作しない。台帳に無い人物の言葉として書かない。実務家の論評（S066・S067・S068・S070・S134・S188）は、本人の文だが性質は論評で、規範や事実の根拠にしない
- 進め方の組織・企業の記事は、基本的に自社の進め方の自己説明（自称）。成果の検証ではなく、「その組織が何を重視すると言っているか」の根拠として使う
- 要旨・訳・「備考」の整理は本 skill の言葉で、出典に書いてあることと分けて書く。「目安」「推測」「整理」と書いた箇所は出典の事実ではない
- 区分 R の S133（Deque の地の文）は、通説の存在の根拠にだけ使う。数値の根拠に使わない

出典ごとの個別の条件は、次のとおり。

**規格・法令・行政資料**

- W3C の文書（WCAG 2.2・Understanding・APG・ARIA in HTML・AccName・Media Queries など）: W3C Document License または W3C の permissive license。短い逐語引用
- JIS X 8341-3 の経緯・表記・試験は、WAIC の文書（独自文書。利用許諾の明示を見つけられず、短い引用にとどめる）と総務省・デジタル庁の記述で示す。JIS の規格本文は引用しない
- 内閣府・総務省のページは各サイトの利用規約。法令・政令は著作権法第 13 条により著作権の目的とならない
- デジタル庁の文書は公共データ利用規約（PDL1.0）で、出典の記載が必要。デジタル庁デザインシステムは更新が続く版（β）で、各項目に更新日を書いた
- EUR-Lex 本体は取得時に本文が空で、Wayback の保存コピーで照合した
- 米国の連邦政府文書はパブリックドメイン。Seyfarth・UsableNet・Deque・WebAIM などの民間の報告は、著作権表示のみ（短い引用）

**実務・デザインシステム・ライブラリ**

- GOV.UK（Service Manual・ブログ・Design System の公開ページ）: Open Government Licence v3.0。USWDS: 米国政府の著作物として public domain（CC0 1.0）。Carbon（carbon-website）・Material Web: Apache-2.0
- GitHub Annotation Toolkit: CC BY 4.0（帰属の表示が必要）
- SmartHR Design System（S246・S247）: 要旨のみ（ライセンスの理由は凡例）
- ライブラリの文書・ソースの既定値は、各項目に書いた固定コミット（Bootstrap はタグ）の原稿。MIT・Apache-2.0・BSD の OSS。ライセンスは GitHub の判定（既定ブランチ）による
- ソースのコメントの要旨（S248・S249・S250）は、実装の意図のメモで、各ライブラリの文書の主張ではない
- WebAIM・Deque・PowerMapper・NV Access・CUDO・個人のブログ（Roselli・Pickering・O'Hara・Matuzović・A List Apart）は、短い引用に留める

## WCAG と達成基準

### S001 W3C WCAG 2.2（序論・背景）

> Although these guidelines cover a wide range of issues, they are not able to address the needs of people with all types, degrees, and combinations of disability.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05） ／ Web Content Accessibility Guidelines (WCAG) 2.2（W3C 勧告。取得版の冒頭日付は 2024-12-12）（Abstract 付近）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 序論（非規範）。WCAG に適合しても、すべての障害の種類・程度・組み合わせの必要は満たせないと規格自身が述べる。「適合＝使える」と言い切らない根拠。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用 ／ 標準自身が限界を書いている箇所。「WCAG 適合 = 誰でも使える」という誤解への反証。

### S002 W3C WCAG 2.2（序論・2.2 で扱った領域）

> The Working Group considers that WCAG 2.2 incrementally advances web content accessibility guidance for all these areas, but underscores that not all user needs are met by these guidelines.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 認知・学習の障害、弱視、モバイル等の領域で前進したが、すべての必要は満たさないと作業部会が強調する。限界・批判の一次的な根拠（自己言及）。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S003 W3C WCAG 2.2（序論・4.1.1 の削除）

> WCAG 2.2 has removed one success criterion, 4.1.1 Parsing. Authors that are required by policy to conform with WCAG 2.0 or 2.1 will be able to update content to WCAG 2.2, but may need to continue to test and report 4.1.1.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05） ／ Web Content Accessibility Guidelines (WCAG) 2.2（W3C 勧告。取得版の冒頭日付は 2024-12-12）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 4.1.1 は 2.2 で削除。ただし制度が 2.0/2.1（JIS X 8341-3:2016 も 2.0 と一致）を参照する場合、4.1.1 の試験・報告が残りうる。国内の適合表明で注意。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用 ／ 削除理由として同文書の注記に「Assistive technology no longer has any need to directly parse」とある。支援技術の変化で基準が要らなくなった例。

### S004 W3C WCAG 2.2（4.1.1 Parsing の注記）

> This criterion was originally adopted to address problems that assistive technology had directly parsing HTML. Assistive technology no longer has any need to directly parse HTML. Consequently, these problems either no longer exist or are addressed by other criteria. This criterion no longer has utility and is removed.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 削除理由の規範文書内の記述。支援技術が HTML を直接解析しなくなったため。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S005 W3C WCAG 2.2（規範と参考の区別）

> The main content of WCAG 2.2 is normative and defines requirements that impact conformance claims.
>
> Non-normative material provides advisory information to help interpret the guidelines but does not create requirements that impact a conformance claim.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 注記・例・図は参考（非規範）。達成基準の本文と注記を混同しない。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S006 W3C WCAG 2.2（5.2.1 適合レベル）

> For Level AA conformance, the web page satisfies all the Level A and Level AA success criteria, or a Level AA conforming alternate version is provided.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: AA 適合の定義。適合はウェブページ単位（5.2.2 Full pages）。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S007 W3C WCAG 2.2（5.2.1 の注 2・AAA）

> It is not recommended that Level AAA conformance be required as a general policy for entire sites because it is not possible to satisfy all Level AAA success criteria for some content.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: サイト全体に AAA を一律に課すことは推奨されない。AAA の個別基準を目標に採るのは可。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S008 W3C WCAG 2.2（1.1.1 Non-text Content, Level A）

> All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.
>
> Success Criterion 1.2.2 Captions (Prerecorded)
>
> Captions (Prerecorded) (Level A) Captions are provided for all prerecorded audio content in synchronized media
>
> Success Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded)
>
> Audio Description or Media Alternative (Prerecorded) (Level A) An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media
>
> Success Criterion 1.2.4 Captions (Live)
>
> Captions (Live) (Level AA) Captions are provided for all live audio content in synchronized media
>
> Success Criterion 1.2.5 Audio Description (Prerecorded)
>
> Audio Description (Prerecorded) (Level AA) Audio description is provided for all prerecorded video content in synchronized media

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 代替テキストは「同等の目的」を果たすこと。例外（装飾・テスト・CAPTCHA 等）は本文の列挙による。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S009 W3C WCAG 2.2（1.3.1 Info and Relationships, Level A）

> Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.
>
> Success Criterion 1.3.2 Meaningful Sequence
>
> Meaningful Sequence (Level A) When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 見た目で示す構造（見出し・表・ラベルの関係）をマークアップでも示す。デザインの引き継ぎで構造を指定する根拠。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S010 W3C WCAG 2.2（1.4.1 Use of Color, Level A）

> Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 色だけで状態・エラー・リンクを区別しない。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S011 W3C WCAG 2.2（1.4.3 Contrast (Minimum), Level AA）

> The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:
>
> Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数値（出典あり）: 本文 4.5:1、大きな文字 3:1。例外（非活性の部品・装飾・ロゴ）は本文の列挙による。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S012 W3C WCAG 2.2（用語集 large scale (text)）

> with at least 18 point or 14 point bold or font size that would yield equivalent size for Chinese, Japanese and Korean (CJK) fonts

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 大きな文字の定義は pt（18pt・太字 14pt）で、CJK は「同等の大きさ」とだけ書く。和文の具体値は規格にない（px 換算・和文の値は目安扱い）。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S013 W3C WCAG 2.2（用語集 contrast ratio）

> (L1 + 0.05) / (L2 + 0.05), where L1 is the relative luminance of the lighter of the colors, and L2 is the relative luminance of the darker of the colors.
>
> Contrast ratios can range from 1 to 21 (commonly written 1:1 to 21:1).
>
> `L = 0.2126 * R + 0.7152 * G + 0.0722 * B where R , G and B are defined as:`
>
> if RsRGB <= 0.04045 then R = RsRGB/12.92 else R = ((RsRGB+0.055)/1.055) ^ 2.4
>
> RsRGB = R8bit/255

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: コントラスト比の式。計算は相対輝度（用語集 relative luminance）による。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S014 W3C WCAG 2.2（1.4.4 Resize Text, Level AA）

> Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数値（出典あり）: 200%。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S015 W3C WCAG 2.2（1.4.10 Reflow, Level AA）

> Vertical scrolling content at a width equivalent to 320 CSS pixels;
>
> 320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数値（出典あり）: 幅 320 CSS px で二方向スクロールなし（1280px の 400% 相当）。2 次元の配置が必要な部分（地図・データ表など）は例外。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S016 W3C WCAG 2.2（1.4.11 Non-text Contrast, Level AA）

> The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s):
>
> Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数値（出典あり）: 部品の境界・状態・図の必要部分は隣接色と 3:1。入力欄の枠・チェック状態・グラフの線に効く。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S017 W3C WCAG 2.2（1.4.12 Text Spacing, Level AA）

> Line height (line spacing) to at least 1.5 times the font size;
>
> Spacing following paragraphs to at least 2 times the font size;
>
> Letter spacing (tracking) to at least 0.12 times the font size;
>
> Word spacing to at least 0.16 times the font size.
>
> Human languages and scripts that do not make use of one or more of these text style properties in written text can conform using only the properties that exist for that combination of language and script.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 利用者がこの値まで広げても内容・機能が失われないこと（作り手がこの値で組む義務ではない）。数値は出典あり。和文で単語間隔が無い場合の扱いは例外文による。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S018 W3C WCAG 2.2（2.1.1 Keyboard, Level A）

> All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 全機能をキーボードで。例外は手書きのような軌跡に依存する機能。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S019 W3C WCAG 2.2（2.2.2 Pause, Stop, Hide, Level A）

> For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential;

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数値（出典あり）: 自動で始まり 5 秒を超えて動くもの。カルーセル・自動再生の背景動画に効く。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S020 W3C WCAG 2.2（2.3.1 Three Flashes or Below Threshold, Level A）

> Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.
>
> Success Criterion 2.3.3 Animation from Interactions
>
> Animation from Interactions (Level AAA) Motion animation triggered by interaction can be disabled

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数値（出典あり）: 1 秒に 3 回。閾値の定義は用語集。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S021 W3C WCAG 2.2（2.4.7 Focus Visible, Level AA）

> Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.
>
> Success Criterion 2.4.1 Bypass Blocks
>
> Bypass Blocks (Level A) A mechanism is available to bypass blocks of content that are repeated on multiple web pages
>
> Success Criterion 2.4.2 Page Titled
>
> Page Titled (Level A) Web pages have titles that describe topic or purpose.
>
> Success Criterion 2.4.3 Focus Order
>
> Focus Order (Level A) If a web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.
>
> Success Criterion 2.4.4 Link Purpose (In Context)
>
> Link Purpose (In Context) (Level A) The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context
>
> Success Criterion 2.4.6 Headings and Labels
>
> Headings and Labels (Level AA) Headings and labels describe topic or purpose.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 焦点の表示を消さない。見え方の大きさ・コントラストは 2.4.13（AAA）が扱う。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S022 W3C WCAG 2.2（2.4.11 Focus Not Obscured (Minimum), Level AA, 2.2 で追加）

> When a user interface component receives keyboard focus, the component is not entirely hidden due to author-created content.
>
> Success Criterion 2.4.12 Focus Not Obscured (Enhanced)
>
> Focus Not Obscured (Enhanced) (Level AAA)
>
> no part of the component is hidden by author-created content.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 固定ヘッダー・固定フッター・Cookie バナーの下に焦点が完全に隠れない。完全に隠れないことが AA、一部も隠れないことは AAA（2.4.12）。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S023 W3C WCAG 2.2（2.4.13 Focus Appearance, Level AAA, 2.2 で追加）

> When the keyboard focus indicator is visible, an area of the focus indicator meets all the following:
>
> is at least as large as the area of a 2 CSS pixel thick perimeter of the unfocused component or sub-component, and
>
> has a contrast ratio of at least 3:1 between the same pixels in the focused and unfocused states.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数値（出典あり）: 2 CSS px の外周相当の面積、焦点前後で 3:1。AAA であり AA の要件ではない。焦点の見た目を設計するときの目標値に使う。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S024 W3C WCAG 2.2（2.5.7 Dragging Movements, Level AA, 2.2 で追加）

> All functionality that uses a dragging movement for operation can be achieved by a single pointer without dragging, unless dragging is essential or the functionality is determined by the user agent and not modified by the author.
>
> Success Criterion 2.5.2 Pointer Cancellation
>
> Pointer Cancellation (Level A) For functionality that can be operated using a single pointer
>
> Success Criterion 2.5.3 Label in Name
>
> Label in Name (Level A) For user interface components with labels that include text or images of text
>
> Success Criterion 2.5.4 Motion Actuation
>
> Motion Actuation (Level A) Functionality that can be operated by device motion or user motion can also be operated by user interface components
>
> No Down-Event The down-event of the pointer is not used to execute any part of the function
>
> Abort or Undo Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion
>
> the name contains the text that is presented visually
>
> Functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation
>
> Success Criterion 2.5.5 Target Size (Enhanced)
>
> Target Size (Enhanced) (Level AAA) The size of the target for pointer inputs is at least 44 by 44 CSS pixels

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 並べ替え・スライダー・カンバンのドラッグに、ドラッグなしの代替（ボタン・選択）を用意する。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S025 W3C WCAG 2.2（2.5.8 Target Size (Minimum), Level AA, 2.2 で追加）

> The size of the target for pointer inputs is at least 24 by 24 CSS pixels, except when:
>
> Undersized targets (those less than 24 by 24 CSS pixels) are positioned so that if a 24 CSS pixel diameter circle is centered on the bounding box of each, the circles do not intersect another target or the circle for another undersized target;

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数値（出典あり）: 24×24 CSS px、または間隔の例外。文中のリンク（Inline）等の例外あり。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S026 W3C WCAG 2.2（3.2.6 Consistent Help, Level A, 2.2 で追加）

> If a web page contains any of the following help mechanisms, and those mechanisms are repeated on multiple web pages within a set of web pages, they occur in the same order relative to other page content, unless a change is initiated by the user:
>
> Success Criterion 3.1.1 Language of Page
>
> Language of Page (Level A) The default human language of each web page can be programmatically determined
>
> Success Criterion 3.2.1 On Focus
>
> On Focus (Level A) When any user interface component receives focus, it does not initiate a change of context
>
> Success Criterion 3.2.2 On Input
>
> On Input (Level A) Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 問い合わせ・ヘルプへの導線を置くなら、ページ間で同じ相対位置に。ヘルプを置くこと自体は求めない。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S027 W3C WCAG 2.2（3.3.1 Error Identification と 3.3.2 Labels or Instructions, Level A）

> If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.
>
> Labels or instructions are provided when content requires user input.
>
> Success Criterion 3.3.3 Error Suggestion
>
> Error Suggestion (Level AA) If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user
>
> Success Criterion 3.3.4 Error Prevention (Legal, Financial, Data)
>
> Error Prevention (Legal, Financial, Data) (Level AA) For web pages that cause legal commitments or financial transactions for the user to occur
>
> that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true
>
> Reversible Submissions are reversible.
>
> Checked Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
>
> Confirmed A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: エラーは項目を特定して文字で説明。入力にはラベルか説明。プレースホルダーだけのラベルの是非は、この文からは直接言えない（Understanding・Techniques で確認）。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S028 W3C WCAG 2.2（3.3.7 Redundant Entry, Level A, 2.2 で追加）

> Information previously entered by or provided to the user that is required to be entered again in the same process is either:
>
> available for the user to select.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 同じ手続きで既に入力した情報は自動入力か選択肢で。例外は本質的な再入力・セキュリティ・情報が無効になった場合。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S029 W3C WCAG 2.2（3.3.8 Accessible Authentication (Minimum), Level AA, 2.2 で追加）

> A cognitive function test (such as remembering a password or solving a puzzle) is not required for any step in an authentication process unless that step provides at least one of the following:
>
> Examples of mechanisms that satisfy this criterion include: support for password entry by password managers to reduce memory need, and copy and paste to reduce the cognitive burden of re-typing.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ログインで記憶・パズルを必須にしない。パスワード管理ソフトと貼り付けを妨げない設計（貼り付け禁止の入力欄は要注意）。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S030 W3C WCAG 2.2（4.1.2 Name, Role, Value, Level A）

> For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 自作部品（div のボタン等）に名前・役割・状態を。ARIA の話はここに接続する。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S031 W3C WCAG 2.2（4.1.3 Status Messages, Level AA）

> In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05） ／ Web Content Accessibility Guidelines (WCAG) 2.2（W3C 勧告。取得版の冒頭日付は 2024-12-12）（SC 4.1.3、レベル AA。2.1 で追加）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: トースト・保存完了・検索件数の更新は、焦点を動かさずに読み上げられること（role=status 等）。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用 ／ 2.1 で加わったことは WCAG 2.1 の「New Features in WCAG 2.1」の一覧（https://www.w3.org/TR/WCAG21/ 、「4.1.3 Status Messages (AA)」）で確かめた。トースト・保存完了表示などの通知を、焦点を移さずに支援技術へ届ける基準。ライブ領域の既定値の比較（`library-defaults.md`）の根拠。

### S032 W3C WCAG 2.2（用語集 label の注）

> A label is presented to all users whereas the name may be hidden and only exposed by assistive technology. In many (but not all) cases the name and the label are the same.

- 媒体・日付: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024（初版 2023-10-05）
- URL: https://www.w3.org/TR/WCAG22/ / https://www.w3.org/TR/2024/REC-WCAG22-20241212/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 見えるラベルと、支援技術に渡る名前（accessible name）の区別。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S033 W3C WAI, Understanding Techniques for WCAG Success Criteria

> Techniques are informative — that means they are not required. The basis for determining conformance to WCAG 2.2 are the success criteria from the WCAG 2.2 standard — not the techniques.
>
> W3C cautions against requiring W3C's sufficient techniques. The only thing that should be required is meeting the WCAG 2.2 success criteria.
>
> Failures are things that cause accessibility barriers and fail specific success criteria.

- 媒体・日付: W3C WAI, Understanding WCAG 2.2（Updated 04 October 2026）
- URL: https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Techniques（達成方法）は参考で必須ではない。十分な達成方法を調達要件にすることに W3C 自身が注意を促す。失敗例（Failures）は避ける例。 ライセンス: W3C の permissive license（WAI ページ末尾の表記。Permission to Use による）。短い逐語引用

### S034 W3C WAI, Understanding SC 4.1.1 Parsing (Obsolete and removed)

> Since WCAG 2.0 was published, the specifications (such as HTML) and browsers have improved their handling of parsing errors. It is also the case that assistive technology used to do their own parsing of markup, but now rely on the browser.
>
> Many issues that would have failed this criterion will fail Info and Relationships or Name, Role, Value.

- 媒体・日付: W3C WAI, Understanding WCAG 2.2
- URL: https://www.w3.org/WAI/WCAG22/Understanding/parsing
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 4.1.1 削除の理由と、ID 重複などの問題は 1.3.1・4.1.2 で引き続き問われること。 ライセンス: W3C の permissive license（WAI ページ末尾の表記。Permission to Use による）。短い逐語引用

### S035 W3C WAI, Understanding SC 2.5.8 Target Size (Minimum)

> after reviewing the average target size of various high-traffic sites – the Working Group settled on the smaller measure of 24 by 24 CSS pixels for the "(Minimum)" version of this criterion, while 2.5.5 Target Size (Enhanced) uses the larger 44 by 44 CSS pixel measure as its threshold size.

- 媒体・日付: W3C WAI, Understanding WCAG 2.2
- URL: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 24px は多くのサイトの実態を見た妥協の値で、44px（2.5.5、AAA）が上位。数値は出典あり。 ライセンス: W3C の permissive license（WAI ページ末尾の表記。Permission to Use による）。短い逐語引用

### S036 W3C WAI, Understanding SC 2.4.11 Focus Not Obscured (Minimum)

> Typical types of content that can overlap focused items are sticky footers, sticky headers, and non-modal dialogs.
>
> A notification implemented as sticky content, such as a cookie banner, will fail this success criterion if it entirely obscures a component receiving focus.

- 媒体・日付: W3C WAI, Understanding WCAG 2.2
- URL: https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 固定ヘッダー・フッター・非モーダルの通知（Cookie バナー）が典型。対処は scroll-padding 等（同ページ）。 ライセンス: W3C の permissive license（WAI ページ末尾の表記。Permission to Use による）。短い逐語引用

### S037 W3C WAI, Understanding SC 1.4.3 Contrast (Minimum)

> When comparing the computed contrast ratio to the Success Criterion ratio, the computed values should not be rounded (e.g., 4.499:1 would not meet the 4.5:1 threshold).
>
> 18 point text or 14 point bold text is judged to be large enough to require a lower contrast ratio.

- 媒体・日付: W3C WAI, Understanding WCAG 2.2
- URL: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 閾値は丸めない（4.499:1 は不合格）。数値は出典あり。 ライセンス: W3C の permissive license（WAI ページ末尾の表記。Permission to Use による）。短い逐語引用

### S038 W3C WAI, What's New in WCAG 2.2

> WCAG 2.2 provides 9 additional success criteria since WCAG 2.1.
>
> The 2.0 and 2.1 success criteria are essentially the same in 2.2, with one exception: 4.1.1 Parsing is obsolete and removed from WCAG 2.2.

- 媒体・日付: W3C WAI（Updated: 5 October 2023）
- URL: https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 2.1→2.2 の差分: 追加 9 件（2.4.11・2.4.12・2.4.13・2.5.7・2.5.8・3.2.6・3.3.7・3.3.8・3.3.9）、削除 1 件（4.1.1）。うち AA 以下は 6 件（2.4.11・2.5.7・2.5.8・3.2.6・3.3.7・3.3.8）。件数・番号は WCAG 2.2 本体の目次と照合済み。 ライセンス: W3C の permissive license（WAI ページ末尾の表記。Permission to Use による）。短い逐語引用

### S039 W3C WAI, WCAG 2 Overview（版の関係）

> WCAG 2.0, WCAG 2.1, and WCAG 2.2 are all existing standards. WCAG 2.2 does not deprecate or supersede WCAG 2.1, and WCAG 2.1 does not deprecate or supersede WCAG 2.0. W3C encourages you to use the latest version of WCAG.

- 媒体・日付: W3C WAI（Updated: 17 September 2026）
- URL: https://www.w3.org/WAI/standards-guidelines/wcag/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 旧版は廃止されない。制度が 2.0/2.1 を参照していても 2.2 に合わせれば後方互換。 ライセンス: W3C の permissive license（WAI ページ末尾の表記。Permission to Use による）。短い逐語引用

### S040 W3C WAI, WCAG 2 Overview（公開日）

> WCAG 2.0 was published on 11 December 2008. WCAG 2.1 was published on 5 June 2018
>
> WCAG 2.2 was published on 5 October 2023, and an update was published on 12 December 2024.

- 媒体・日付: W3C WAI（Updated: 17 September 2026） ／ W3C WAI「WCAG 2 Overview」
- URL: https://www.w3.org/WAI/standards-guidelines/wcag/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 年号の根拠。2.1 は 2018-06-05 公開（同ページ）。 ライセンス: W3C の permissive license（WAI ページ末尾の表記。Permission to Use による）。短い逐語引用 ／ 2.1 と 2.2 の TR ページ冒頭の日付は再発行日（2.1 は 2025-05-06、2.2 は 2024-12-12）であり、初版の勧告日はこのページで確かめる。同ページは 2.0・2.1・2.2 の更新（2023-09-21、2024-12-12、2025-05-06）にも触れる ／ 続けて「an update was published on 12 December 2024」とある。

### S041 W3C WAI, WCAG 2 Overview（ISO/IEC 40500 と EN 301 549）

> ISO/IEC 40500:2025 is exactly the same as the October 2023 version of WCAG 2.2. We expect the December 2024 version of WCAG 2.2 to be available as ISO/IEC 40500:2026 by late 2026.
>
> The 2026 version of EN 301 549 uses WCAG 2.2.

- 媒体・日付: W3C WAI（Updated: 17 September 2026）
- URL: https://www.w3.org/WAI/standards-guidelines/wcag/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 時点情報（2026-09-17 時点の W3C の見通し）。ISO/IEC 40500:2025 は 2023 年 10 月版と同一で、2024 年 12 月の更新は未反映。JIS 改正の土台。 ライセンス: W3C の permissive license（WAI ページ末尾の表記。Permission to Use による）。短い逐語引用

### S042 W3C, W3C Accessibility Guidelines (WCAG) 3.0, Working Draft（文書の位置づけ）

> It includes all requirements that have reached the developing status.
>
> This is a draft document and may be updated, replaced, or obsoleted by other documents at any time. It is inappropriate to cite this document as other than a work in progress.

- 媒体・日付: W3C Working Draft 10 September 2026
- URL: https://www.w3.org/TR/wcag-3.0/ / https://www.w3.org/TR/2026/WD-wcag-3.0-20260910/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 時点情報。WCAG 3 は作業草案で規範ではない。要件・数値を設計の根拠にしない。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S043 W3C, WCAG 3.0 Working Draft（WCAG 2 との関係）

> Meeting WCAG 2 at AA level means you will be close to meeting WCAG 3, but there may be differences.

- 媒体・日付: W3C Working Draft 10 September 2026
- URL: https://www.w3.org/TR/wcag-3.0/ / https://www.w3.org/TR/2026/WD-wcag-3.0-20260910/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 時点情報。草案の自己説明であり、将来の適合を保証しない。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S044 W3C WAI, WCAG 3 Introduction

> W3C Accessibility Guidelines (WCAG) 3 is currently an incomplete draft that will change.
>
> The best way to prepare for WCAG 3 in the future, is to meet WCAG 2.2 success criteria now.
>
> WCAG 3 is not expected to be a completed W3C standard for a few more years. WCAG 3 will not supersede WCAG 2 and WCAG 2 will not be deprecated for several years after WCAG 3 is finalized.

- 媒体・日付: W3C WAI（Updated: 25 September 2026）
- URL: https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 時点情報。「WCAG 3 に備える」相談には、まず 2.2 を満たすと答える根拠。 ライセンス: W3C の permissive license（WAI ページ末尾の表記。Permission to Use による）。短い逐語引用

### S045 W3C（WCAG 2.2: AAA でも届かない）

> Note that even content that conforms at the highest level (AAA) will not be accessible to individuals with all types, degrees, or combinations of disability, particularly in the cognitive, language, and learning areas.

- 媒体・日付: Web Content Accessibility Guidelines (WCAG) 2.2（W3C 勧告。取得版の冒頭日付は 2024-12-12）（Conformance Levels の注記）
- URL: https://www.w3.org/TR/WCAG22/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 認知・言語・学習の領域が特に届きにくいと標準が明記している

### S046 W3C（WCAG 2.2: 達成基準 2.2.1 Timing Adjustable）

> Adjust The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting
>
> Turn off The user is allowed to turn off the time limit before encountering it; or
>
> Extend The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or
>
> Essential Exception The time limit is essential and extending it would invalidate the activity; or

- 媒体・日付: Web Content Accessibility Guidelines (WCAG) 2.2（W3C 勧告。取得版の冒頭日付は 2024-12-12）（SC 2.2.1、レベル A）
- URL: https://www.w3.org/TR/WCAG22/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 時間制限の解除・調整・延長などの選択肢を定める。トーストの自動消去がこの基準の「time limit」に当たるかどうかを WCAG 本文は直接述べていない。両者を結ぶのは本 skill の整理（推測）として扱う（`library-defaults.md`）

## ARIA・APG・名前の算出

### S047 W3C WAI-ARIA 1.2（ネイティブの意味の補助）

> WAI-ARIA is intended to be used as a supplement for native language semantics, not a replacement. When the host language provides a feature that provides equivalent accessibility to the WAI-ARIA feature, use the host language feature. WAI-ARIA should only be used in cases where the host language lacks the needed role, state, and property indicators.

- 媒体・日付: W3C, Accessible Rich Internet Applications (WAI-ARIA) 1.2, W3C Recommendation 06 June 2023
- URL: https://www.w3.org/TR/wai-aria-1.2/ / https://www.w3.org/TR/2023/REC-wai-aria-1.2-20230606/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ネイティブの HTML 要素で足りるなら ARIA を使わない、の規範文書側の根拠（Using ARIA の第 1 規則は廃止扱いの草案のため、こちらを優先して引く）。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S048 W3C WAI-ARIA 1.2（aria-hidden）

> Authors MAY, with caution, use aria-hidden to hide visibly rendered content from assistive technologies only if the act of hiding this content is intended to improve the experience for users of assistive technologies by removing redundant or extraneous content. Authors using aria-hidden to hide visible content from screen readers MUST ensure that identical or equivalent meaning and functionality is exposed to assistive technologies.

- 媒体・日付: W3C, Accessible Rich Internet Applications (WAI-ARIA) 1.2, W3C Recommendation 06 June 2023
- URL: https://www.w3.org/TR/wai-aria-1.2/ / https://www.w3.org/TR/2023/REC-wai-aria-1.2-20230606/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 見えている内容を隠すのは冗長な内容を除く場合に限り、同等の意味と機能を別に渡す義務がある。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S049 W3C WAI-ARIA 1.2（Presentational Roles Conflict Resolution）

> If an element is focusable, or otherwise interactive, user agents MUST ignore the presentation role and expose the element with its implicit role, in order to ensure that the element is operable.

- 媒体・日付: W3C, Accessible Rich Internet Applications (WAI-ARIA) 1.2, W3C Recommendation 06 June 2023
- URL: https://www.w3.org/TR/wai-aria-1.2/ / https://www.w3.org/TR/2023/REC-wai-aria-1.2-20230606/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 焦点を受ける要素に role=presentation/none を付けても無視される（ユーザーエージェントの規範）。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S050 W3C WAI-ARIA 1.2（dialog ロール）

> Authors MUST provide an accessible name for a dialog, which can be done with the aria-label or aria-labelledby attribute. Authors SHOULD ensure that all dialogs (both modal and non-modal) have at least one focusable descendant element. Authors SHOULD focus an element in the modal dialog when it is displayed, and authors SHOULD manage focus of modal dialogs.

- 媒体・日付: W3C, Accessible Rich Internet Applications (WAI-ARIA) 1.2, W3C Recommendation 06 June 2023
- URL: https://www.w3.org/TR/wai-aria-1.2/ / https://www.w3.org/TR/2023/REC-wai-aria-1.2-20230606/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ダイアログの名前は必須、焦点の移動と管理は推奨（SHOULD）。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S051 W3C WAI-ARIA 1.2（status と alert）

> Authors SHOULD ensure an element with role status does not receive focus as a result of change in status.
>
> Alerts are assertive live regions, which means they cause immediate notification for assistive technology users.

- 媒体・日付: W3C, Accessible Rich Internet Applications (WAI-ARIA) 1.2, W3C Recommendation 06 June 2023
- URL: https://www.w3.org/TR/wai-aria-1.2/ / https://www.w3.org/TR/2023/REC-wai-aria-1.2-20230606/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: status は控えめな通知、alert は即時の割り込み。トーストに alert を多用しない判断の根拠。実際の読み上げは支援技術ごとに差がある（未検証）。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S052 W3C WAI, ARIA Authoring Practices Guide（Read Me First: No ARIA is better than Bad ARIA）

> No ARIA is better than Bad ARIA
>
> Incorrect ARIA misrepresents visual experiences, with potentially devastating effects on their corresponding non-visual experiences.

- 媒体・日付: W3C WAI, APG
- URL: https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 依頼にある「No ARIA is better than bad ARIA」の原文は、APG の節見出し「No ARIA is better than Bad ARIA」（Bad が大文字）。 ライセンス: W3C の permissive license（ページ末尾の表記）。短い逐語引用

### S053 W3C WAI, APG（Read Me First: A role is a promise）

> Unlike HTML input elements, ARIA roles do not cause browsers to provide keyboard behaviors or styling.

- 媒体・日付: W3C WAI, APG
- URL: https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: role を付けても操作は付かない。div に role=button を付けたらキー操作は自作が必要。 ライセンス: W3C の permissive license（ページ末尾の表記）。短い逐語引用

### S054 W3C WAI, APG（Read Me First: 支援技術とモバイルの対応）

> Testing assistive technology interoperability is essential before using code from this guide in production.
>
> Currently, this guide does not indicate which examples are compatible with mobile browsers or touch interfaces.
>
> some ARIA features are not supported in any mobile browser.

- 媒体・日付: W3C WAI, APG
- URL: https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: APG の例はブラウザー・支援技術の不具合の回避策を含まない。モバイル・タッチ対応は示していない。APG の限界の自己言及。 ライセンス: W3C の permissive license（ページ末尾の表記）。短い逐語引用

### S055 W3C WAI, APG（Introduction: APG is Not a Normative Standard）

> WCAG and ARIA are "W3C normative technical standards" while the APG is an "informative" resource.
>
> The APG does not specify normative requirements and thus does not have a conformance model.

- 媒体・日付: W3C WAI, APG
- URL: https://www.w3.org/WAI/ARIA/apg/about/introduction/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: APG は規範ではない（依頼の確認点）。 ライセンス: W3C の permissive license（ページ末尾の表記）。短い逐語引用

### S056 W3C WAI, APG（Introduction: キーボード操作の慣習）

> While those lists are not normative, the majority of such conventions are so well established that it is advisable to treat them as requirements.
>
> It is a known issue that some APG keyboard interaction models do not yet provide sufficient macOS-specific guidance.

- 媒体・日付: W3C WAI, APG
- URL: https://www.w3.org/WAI/ARIA/apg/about/introduction/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: キー操作の一覧は規範ではないが要件として扱うのが望ましい、と同時に macOS 向けが不足していると認める。 ライセンス: W3C の permissive license（ページ末尾の表記）。短い逐語引用

### S057 W3C WAI, APG（Introduction: APG is not a UI Design System）

> objectives do not include providing a comprehensive design system or production-ready code.

- 媒体・日付: W3C WAI, APG
- URL: https://www.w3.org/WAI/ARIA/apg/about/introduction/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 引用は原文の "it's objectives" の後半（原文の誤記 it's を避けて切り出した）。APG の例をそのまま製品の部品にしない根拠。 ライセンス: W3C の permissive license（ページ末尾の表記）。短い逐語引用

### S058 W3C WAI, APG Dialog (Modal) Pattern（キーボード操作）

> When a dialog opens, focus moves to an element inside the dialog.
>
> If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog.
>
> Escape: Closes the dialog.

- 媒体・日付: W3C WAI, APG
- URL: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: モーダル内で Tab が循環する（焦点の閉じ込め）。Escape で閉じる。 ライセンス: W3C の permissive license（ページ末尾の表記）。短い逐語引用

### S059 W3C WAI, APG Dialog (Modal) Pattern（閉じたときの焦点と破壊的操作）

> When a dialog closes, focus returns to the element that invoked the dialog unless either:
>
> If a dialog contains the final step in a process that is not easily reversible, such as deleting data or completing a financial transaction, it may be advisable to set focus on the least destructive action, especially if undoing the action is difficult or impossible.

- 媒体・日付: W3C WAI, APG ／ APG「Dialog (Modal) Pattern」、w3c/aria-practices@f14b2490a6728cda85fd7feafbd148b3c3eaf038（2026-11-13）、97 行 ／ APG「Dialog (Modal) Pattern」、w3c/aria-practices@f14b2490a6728cda85fd7feafbd148b3c3eaf038（2026-11-13）、91 行
- URL: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
- URL（原稿）: https://raw.githubusercontent.com/w3c/aria-practices/f14b2490a6728cda85fd7feafbd148b3c3eaf038/content/patterns/dialog-modal/dialog-modal-pattern.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 閉じたら呼び出し元へ焦点を戻す。削除確認では最も破壊的でない操作に初期焦点を置く選択肢。 ライセンス: W3C の permissive license（ページ末尾の表記）。短い逐語引用 ／ 例外は「呼び出した要素がもう無い」場合と、作業の流れ上ほかの要素が妥当な場合。APG は作法の手引きであり規範（WCAG）ではない ／ 削除や決済の最終確認での初期焦点の考え方。Radix AlertDialog の文書とソースの食い違い（S231）を読むときの基準。

### S060 W3C ARIA in HTML（暗黙の意味の重複）

> It is NOT RECOMMENDED for authors to set the ARIA role and aria-* attributes to values that match the implicit ARIA semantics defined in either table. Doing so is unnecessary and can potentially lead to unintended consequences.

- 媒体・日付: W3C, ARIA in HTML, W3C Recommendation 11 August 2026
- URL: https://www.w3.org/TR/html-aria/ / https://www.w3.org/TR/2026/REC-html-aria-20260811/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: button に role=button のような重複を付けない。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S061 W3C ARIA in HTML（No role）

> If a cell in the third column includes the term No role it indicates that authors MUST NOT overwrite the implicit ARIA semantics, or native semantics of the HTML element.

- 媒体・日付: W3C, ARIA in HTML, W3C Recommendation 11 August 2026
- URL: https://www.w3.org/TR/html-aria/ / https://www.w3.org/TR/2026/REC-html-aria-20260811/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 要素ごとの許可表で「No role」の要素は role を上書きできない。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S062 W3C Using ARIA（First Rule of ARIA Use）

> If you can use a native HTML element [HTML] or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so.

- 媒体・日付: W3C, Using ARIA, W3C Discontinued Draft 24 February 2026
- URL: https://www.w3.org/TR/using-aria/ / https://www.w3.org/TR/2026/DISC-using-aria-20260224/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 広く流通する「ARIA の第 1 規則」の原文。ただし文書自体は 2026-02-24 に Discontinued Draft（S063）。規範の根拠には ARIA 1.2（S047）と ARIA in HTML（S060・S061）を使う。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S063 W3C Using ARIA（文書の位置づけ）

> Using ARIA is a Discontinued Draft. the four rules of ARIA are kept for historical purposes and for easier reference, but there are no plans to continue work on this document.
>
> Publication as a Discontinued Draft implies that this document is no longer intended to advance or to be maintained. It is inappropriate to cite this document as other than abandoned work.

- 媒体・日付: W3C, Using ARIA, W3C Discontinued Draft 24 February 2026
- URL: https://www.w3.org/TR/using-aria/ / https://www.w3.org/TR/2026/DISC-using-aria-20260224/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 時点情報。原文の小文字 "the four rules" は原文どおり。今後は APG を参照せよと書く。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S064 W3C AccName 1.2（aria-labelledby の段）

> LabelledBy: Otherwise, if the current node has an aria-labelledby attribute that contains at least one valid IDREF, and the current node is not already part of an ongoing aria-labelledby or aria-describedby traversal, process its IDREFs in the order they occur:

- 媒体・日付: W3C, Accessible Name and Description Computation 1.2, W3C Working Draft 04 November 2026（勧告は 1.1, 2018-12-18）
- URL: https://www.w3.org/TR/accname-1.2/ / https://www.w3.org/TR/2026/WD-accname-1.2-20261104/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 名前の算出は LabelledBy → Embedded Control → AriaLabel → Host Language Label（label・alt など）→ Name From Content → Tooltip（title）の順に段を下りる（段の見出しの並びを raw で確認。要約は本 skill の整理）。作業草案のため時点情報。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S065 W3C AccName 1.2（tooltip 属性の段）

> Tooltip attributes are used only if nothing else, including subtree content, has provided results.

- 媒体・日付: W3C, Accessible Name and Description Computation 1.2, W3C Working Draft 04 November 2026（勧告は 1.1, 2018-12-18）
- URL: https://www.w3.org/TR/accname-1.2/ / https://www.w3.org/TR/2026/WD-accname-1.2-20261104/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: title 属性は最後の手段。アイコンボタンの名前を title だけに頼らない根拠。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S066 Heydon Pickering（Inclusive Components, Menus & Menu Buttons）

> Don’t use ARIA menu semantics in navigation menu systems.

- 媒体・日付: inclusive-components.design, 2017-05-10
- URL: https://inclusive-components.design/menus-menu-buttons/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 本人の文。性質は論評。Carbon のメニュー（role=menu、アプリのメニュー）とは対象が違う。個人のブログ。ライセンス表示なし。短い引用に留める

### S067 Adrian Roselli

> A properly-coded web page navigation menu needs no ARIA.

- 媒体・日付: adrianroselli.com, 2017-10-23 初出・2026-09-30 更新（Don't Use ARIA Menu Roles for Site Nav）
- URL: https://adrianroselli.com/2017/10/dont-use-aria-menu-roles-for-site-nav.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 本人の文。性質は論評。個人のブログ。ライセンス表示なし。短い引用に留める

### S068 Heydon Pickering（Inclusive Components, Tabbed Interfaces）

> There's really no right or wrong in inclusive design.

- 媒体・日付: inclusive-components.design, 2017-10-05
- URL: https://inclusive-components.design/tabbed-interfaces/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 本人の文。性質は論評。タブの実装を 1 つの正解に決めず、利用者と文脈で選ぶ立場。Carbon のタブ（S161）の指定と併せて読む。個人のブログ。ライセンス表示なし。短い引用に留める

### S069 Heydon Pickering（Inclusive Components, Notifications）

> Notifications should only refer to things that are discoverable elsewhere in the updated interface.

- 媒体・日付: inclusive-components.design, 2018-02-27
- URL: https://inclusive-components.design/notifications/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 通知を見逃しても情報を失わない設計

### S070 Adrian Roselli

> Toasts are a pattern best used carefully and only after testing with users

- 媒体・日付: adrianroselli.com, 2020-01-14 初出・2026-08-21 更新（Defining 'Toast' Messages）
- URL: https://adrianroselli.com/2020/01/defining-toast-messages.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 本人の文。性質は論評。同記事は既存のトーストで WCAG 監査を通るものは見つかっていないとも述べる。個人のブログ。ライセンス表示なし。短い引用に留める

### S071 W3C APG（Developing a Keyboard Interface: 選択が焦点に従う場合）

> the effect of having selection automatically follow focus can be devastating to the experience for keyboard and screen reader users
>
> A primary keyboard navigation convention common across all platforms is that the tab and shift + tab keys move focus from one UI component to another while other keys, primarily the arrow keys, move focus inside of components that include multiple focusable elements.
>
> If the content of panels is present in the DOM, then displaying a new panel is nearly instantaneous.
>
> When selection does not follow focus, the user changes which element is selected by pressing the Enter or Space key.
>
> if displaying a new panel causes a network request and possibly a page refresh

- 媒体・日付: APG「Developing a Keyboard Interface」、w3c/aria-practices@f14b2490a6728cda85fd7feafbd148b3c3eaf038（2026-11-13）、204 行
- URL: https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/
- URL（原稿）: https://raw.githubusercontent.com/w3c/aria-practices/f14b2490a6728cda85fd7feafbd148b3c3eaf038/content/practices/keyboard-interface/keyboard-interface-practice.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: パネルの表示に通信や再読み込みが伴う場合の話。内容が DOM にあれば自動で切り替えてよいとも書く。タブの自動／手動切り替えの既定値（Radix・React Aria・Headless UI は自動、MUI は手動）を評価する基準

## HTML と CSS

### S072 WHATWG HTML Living Standard（4.11.4 The dialog element）

> As with all HTML elements, it is not conforming to use the dialog element when attempting to represent another type of control. For example, context menus, tooltips, and popup listboxes are not dialog boxes, so abusing the dialog element to implement these patterns is incorrect.

- 媒体・日付: WHATWG, HTML Living Standard（Last Updated 16 November 2026）
- URL: https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element
- URL（原稿）: https://html.spec.whatwg.org/multipage/interactive-elements.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: dialog 要素はメニュー・ツールチップに使わない。 ライセンス: WHATWG。取得した分冊ページにライセンス表記が無く未照合のため、短い逐語引用にとどめる

### S073 WHATWG HTML Living Standard（6.3 Inert subtrees）

> Inert nodes generally cannot be focused, and user agents do not expose the inert nodes to accessibility APIs or assistive technologies.
>
> While document is so blocked, every node that is connected to document, with the exception of the subject element and its flat tree descendants, must become inert.

- 媒体・日付: WHATWG, HTML Living Standard（Last Updated 16 November 2026）
- URL: https://html.spec.whatwg.org/multipage/interaction.html#inert-subtrees
- URL（原稿）: https://html.spec.whatwg.org/multipage/interaction.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: showModal() でモーダルにすると背後が inert になる（仕様上の挙動）。自作モーダルとの差。 ライセンス: WHATWG。取得した分冊ページにライセンス表記が無く未照合のため、短い逐語引用にとどめる

### S074 W3C Media Queries Level 5（prefers-reduced-motion）

> reduce Indicates that user has notified the system that they prefer an interface that removes or replaces the types of motion-based animation that either trigger discomfort for those with vestibular motion sensitivity, or distraction for those with attention deficits.

- 媒体・日付: W3C Working Draft, 19 February 2026
- URL: https://www.w3.org/TR/mediaqueries-5/ / https://www.w3.org/TR/2026/WD-mediaqueries-5-20260219/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 動きを減らす設定の仕様上の意味（前庭障害・注意の障害）。作業草案の時点情報。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S075 W3C Media Queries Level 5（forced-colors）

> active Indicates that forced colors mode is active: the user agent enforces a user-chosen limited color palette on the page,
>
> This does not necessarily indicate a preference for more contrast.

- 媒体・日付: W3C Working Draft, 19 February 2026
- URL: https://www.w3.org/TR/mediaqueries-5/ / https://www.w3.org/TR/2026/WD-mediaqueries-5-20260219/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 強制色モード（Windows のハイコントラスト等）は高コントラストの希望とは限らない。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S076 W3C CSS Values and Units Level 4（reference pixel）

> The reference pixel is the visual angle of one pixel on a device with a device pixel density of 96dpi and a distance from the reader of an arm’s length.

- 媒体・日付: W3C Working Draft, 12 March 2024
- URL: https://www.w3.org/TR/css-values-4/ / https://www.w3.org/TR/2024/WD-css-values-4-20240312/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: WCAG の「CSS pixel」は物理 px ではなく参照ピクセル。24 CSS px や 320 CSS px を端末の物理画素で測らない根拠。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S077 Scott O'Hara

> the dialog element has reached the tipping point of generally being the better option for web developers who need to implement dialogs in their web pages.

- 媒体・日付: scottohara.me, 2023-01-26（Use the dialog element (reasonably)）
- URL: https://www.scottohara.me/blog/2023/01/26/use-the-dialog-element.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 本人の文。2019 年の同氏の記事は dialog 要素に慎重で、立場が時期で変わった（時点の注意）。個人のブログ。ライセンス表示なし。短い引用に留める

## 国内の制度と JIS

### S078 障害を理由とする差別の解消の推進に関する法律（平成二十五年法律第六十五号）第二条第二号

> 障害がある者にとって日常生活又は社会生活を営む上で障壁となるような社会における事物、制度、慣行、観念その他一切のものをいう。

- 媒体・日付: e-Gov 法令検索（現行。令和八年法律第六十二号による改正の施行 2026-11-02 時点）
- URL: https://laws.e-gov.go.jp/law/425AC0000000065 / https://laws.e-gov.go.jp/api/2/law_data/425AC0000000065?response_format=xml
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 第二条第二号「社会的障壁」の定義の文（号の見出し語は別の要素のため、引用に含めていない）。障害の社会モデルに当たる考え方だが、社会モデルの語は法文に無い。 ライセンス: 法令（著作権法第 13 条により著作権の目的とならない）

### S079 障害者差別解消法 第五条（環境の整備）

> 行政機関等及び事業者は、社会的障壁の除去の実施についての必要かつ合理的な配慮を的確に行うため、自ら設置する施設の構造の改善及び設備の整備、関係職員に対する研修その他の必要な環境の整備に努めなければならない。

- 媒体・日付: e-Gov 法令検索（現行）
- URL: https://laws.e-gov.go.jp/law/425AC0000000065 / https://laws.e-gov.go.jp/api/2/law_data/425AC0000000065?response_format=xml
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 環境の整備は「努めなければならない」＝努力義務（行政機関等・事業者とも）。2022 年版（改正前）でも同文。 ライセンス: 法令

### S080 障害者差別解消法 第七条第二項（行政機関等の合理的配慮）

> 行政機関等は、その事務又は事業を行うに当たり、障害者から現に社会的障壁の除去を必要としている旨の意思の表明があった場合において、その実施に伴う負担が過重でないときは、障害者の権利利益を侵害することとならないよう、当該障害者の性別、年齢及び障害の状態に応じて、社会的障壁の除去の実施について必要かつ合理的な配慮をしなければならない。

- 媒体・日付: e-Gov 法令検索（現行）
- URL: https://laws.e-gov.go.jp/law/425AC0000000065 / https://laws.e-gov.go.jp/api/2/law_data/425AC0000000065?response_format=xml
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 行政機関等の合理的配慮の提供は法的義務。改正前（2022 年版）も「しなければならない」で同じ。意思の表明・負担が過重でないことが要件。 ライセンス: 法令

### S081 障害者差別解消法 第八条第二項（事業者の合理的配慮・現行）

> 事業者は、その事業を行うに当たり、障害者から現に社会的障壁の除去を必要としている旨の意思の表明があった場合において、その実施に伴う負担が過重でないときは、障害者の権利利益を侵害することとならないよう、当該障害者の性別、年齢及び障害の状態に応じて、社会的障壁の除去の実施について必要かつ合理的な配慮をしなければならない。

- 媒体・日付: e-Gov 法令検索（現行）
- URL: https://laws.e-gov.go.jp/law/425AC0000000065 / https://laws.e-gov.go.jp/api/2/law_data/425AC0000000065?response_format=xml
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 事業者の合理的配慮の提供は、現行で法的義務。 ライセンス: 法令

### S082 障害者差別解消法 第八条第二項（改正前・2022-06-17 施行の版）

> 社会的障壁の除去の実施について必要かつ合理的な配慮をするように努めなければならない。

- 媒体・日付: e-Gov 法令 API（改正履歴 425AC0000000065_20220617_504AC0000000068）
- URL: https://laws.e-gov.go.jp/law/425AC0000000065/20220617_504AC0000000068 / https://laws.e-gov.go.jp/api/2/law_data/425AC0000000065_20220617_504AC0000000068?response_format=xml
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 改正前は事業者の合理的配慮が努力義務だった。令和三年法律第五十六号で義務に変わった（e-Gov の改正履歴で、この版の次が 2024-04-01 施行の同法による改正）。 ライセンス: 法令

### S083 障害者差別解消法 附則（令和三年六月四日法律第五六号）

> この法律は、公布の日から起算して三年を超えない範囲内において政令で定める日から施行する。
>
> 令和三年六月四日法律第五六号

- 媒体・日付: e-Gov 法令検索（現行に収録された改正法の附則）
- URL: https://laws.e-gov.go.jp/law/425AC0000000065 / https://laws.e-gov.go.jp/api/2/law_data/425AC0000000065?response_format=xml
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 改正法の施行日は法律の本文に無く、政令に委ねられた（S084）。照合用の文は他の附則にも現れうるため、XML の AmendLawNum="令和三年六月四日法律第五六号" の SupplProvision 内で確認した。 ライセンス: 法令

### S084 障害を理由とする差別の解消の推進に関する法律の一部を改正する法律の施行期日を定める政令（令和五年政令第六十号）

> 障害を理由とする差別の解消の推進に関する法律の一部を改正する法律の施行期日は、令和六年四月一日とする。

- 媒体・日付: 内閣府 障害者施策のページに掲載の政令（PDF）
- URL: https://www8.cao.go.jp/shougai/suishin/pdf/law_r05-60.pdf / https://www8.cao.go.jp/shougai/suishin/txt/law_r05-60.txt
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 施行日 2024-04-01 の一次資料。e-Gov の改正履歴メタデータ（amendment_enforcement_date: 2024-04-01）とも一致。PDF の改行で入る空白を除いて引用した。 ライセンス: 法令（政令）

### S085 内閣府「障害を理由とする差別の解消の推進」

> 平成25年6月、「障害を理由とする差別の解消の推進に関する法律」（いわゆる「障害者差別解消法」）が制定され、平成28年4月1日から施行されました。
>
> 令和３年５月、同法は改正され（令和３年法律第56号）、同改正法は、令和６年４月１日に施行されました。

- 媒体・日付: 内閣府（共生・共助 障害者施策）
- URL: https://www8.cao.go.jp/shougai/suishin/sabekai.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 制定 2013-06・施行 2016-04-01、改正 2021・改正法施行 2024-04-01。改正の時期を「令和３年５月」と書くが、e-Gov の公布日は 2021-06-04（成立と公布の違いとみられる。本 skill の整理）。 ライセンス: 内閣府ウェブサイトの利用規約（政府標準利用規約に準拠とみられるが本文は未取得）

### S086 障害を理由とする差別の解消の推進に関する基本方針（令和5年3月14日閣議決定）第2の3(3)ア

> 法は、個別の場面において、個々の障害者に対して行われる合理的配慮を的確に行うための不特定多数の障害者を主な対象として行われる事前的改善措置（施設や設備のバリアフリー化、意思表示やコミュニケーションを支援するためのサービス・介助者等の人的支援、障害者による円滑な情報の取得・利用・発信のための情報アクセシビリティの向上等）を、環境の整備として行政機関等及び事業者の努力義務としている。

- 媒体・日付: 内閣府、基本方針 本文（PDF）
- URL: https://www8.cao.go.jp/shougai/suishin/sabekai/kihonhoushin/r05/pdf/honbun.pdf / https://www8.cao.go.jp/shougai/suishin/sabekai/kihonhoushin/r05/txt/honbun.txt
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 環境の整備＝不特定多数を対象とする事前的改善措置で、情報アクセシビリティの向上を含み、努力義務。PDF の改行で入る空白を除いて引用した。 ライセンス: 内閣府ウェブサイトの利用規約

### S087 基本方針（令和5年3月14日閣議決定）合理的配慮と環境の整備の関係の例

> オンラインでの申込手続が必要な場合に、手続を行うためのウェブサイトが障害者にとって利用しづらいものとなっていることから、手続に際しての支援を求める申出があった場合に、求めに応じて電話や電子メールでの対応を行う（合理的配慮の提供）とともに、以後、障害者がオンライン申込みの際に不便を感じることのないよう、ウェブサイトの改良を行う（環境の整備）。

- 媒体・日付: 内閣府、基本方針 本文（PDF）
- URL: https://www8.cao.go.jp/shougai/suishin/sabekai/kihonhoushin/r05/pdf/honbun.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ウェブの例で区別を示す一次資料: 個別の申出への代替手段＝合理的配慮の提供、サイトの改良＝環境の整備。PDF の改行で入る空白を除いて引用した。 ライセンス: 内閣府ウェブサイトの利用規約

### S088 デジタル庁「ウェブアクセシビリティ導入ガイドブック」（2025-10-16 版）

> 2024 年 4 月 1 日から改正障害者差別解消法が施行され、事業者による障害者への合理的配慮が義務化されます。そして、ウェブアクセシビリティへの取り組みは、合理的配慮を提供するための環境の整備として努力義務が課せられています。

- 媒体・日付: デジタル庁（PDF、最終更新日 2025年10月16日）
- URL: https://www.digital.go.jp/resources/introduction-to-web-accessibility-guidebook / https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/08ed88e1-d622-43cb-900b-84957ab87826/bf5f4482/20251016_introduction_to_web_accessibility.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ウェブアクセシビリティ＝環境の整備＝努力義務、と行政のガイドが明記。「ウェブアクセシビリティ対応が法的義務になった」という言い方は、この記述と食い違う。PDF の改行で入る空白を除いて引用した。 ライセンス: 公共データ利用規約（第 1.0 版）または CC BY 4.0（ガイドブック内の表記）

### S089 デジタル庁「ウェブアクセシビリティ導入ガイドブック」（位置づけ）

> 本ガイドブックは、基礎を理解するためのわかりやすさを重視しています。そのため、記載の厳密な正確性や網羅性を担保していません。

- 媒体・日付: デジタル庁（PDF）
- URL: https://www.digital.go.jp/resources/introduction-to-web-accessibility-guidebook / https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/08ed88e1-d622-43cb-900b-84957ab87826/bf5f4482/20251016_introduction_to_web_accessibility.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 入門書であり厳密性を担保しない、と自ら書く。規格の正確な記述は WAIC の試験実施ガイドラインを参照せよとする（同ページ）。 ライセンス: 公共データ利用規約（第 1.0 版）または CC BY 4.0

### S090 デジタル庁「ウェブアクセシビリティ導入ガイドブック」（WCAG 2.0・ISO・JIS の関係）

> それぞれのガイドラインと規格が同じ内容になったことにより、ウェブアクセシビリティのチェック方法やチェックツールを共通化できることに加え、国ごとに違うガイドラインや規格を使う必要がなくなりました。

- 媒体・日付: デジタル庁（PDF）
- URL: https://www.digital.go.jp/resources/introduction-to-web-accessibility-guidebook / https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/08ed88e1-d622-43cb-900b-84957ab87826/bf5f4482/20251016_introduction_to_web_accessibility.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: WCAG 2.0・ISO/IEC 40500:2012・JIS X 8341-3:2016 は同じ内容、という整理。PDF の改行で入る空白を除いて引用した。 ライセンス: 公共データ利用規約（第 1.0 版）または CC BY 4.0

### S091 総務省「みんなの公共サイト運用ガイドライン（2024年版）」要旨

> 構築前に「ウェブアクセシビリティ方針」を策定する。
>
> 構築時に適合レベル AA に準拠（試験の実施と公開）する。
>
> 近い将来の JIS 改正も見据え、できる限り WCAG2.2 の達成基準に基づき構築する。

- 媒体・日付: 総務省（PDF）
- URL: https://www.soumu.go.jp/info-accessibility-portal/webaccessibility/guideline/ / https://www.soumu.go.jp/info-accessibility-portal/webaccessibility/assets/documents/webaccessibility/guideline/guideline_2024.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公的機関向け。新規構築は方針を先に作り、JIS X 8341-3:2016 の AA に準拠（試験と公開）、WCAG 2.2 もできる限り。年 1 回の取組確認・公開を求める。民間事業者への義務ではない。 ライセンス: 総務省ウェブサイトの利用規約（本文未取得）

### S092 総務省「みんなの公共サイト運用ガイドライン（2024年版）」1.5.3

> JIS X 8341-3:2016 は 61 の達成基準があります。WCAG2.2 に基づいた改正が行われた場合、 次期 JIS X 8341-3 では達成基準が 86 となります。そのうち、運用ガイドラインが求める適合レベル AA 準拠のために満たす必要のある A 及び AA の達成基準は、38 から 55 に増える見込みです。

- 媒体・日付: 総務省（PDF）
- URL: https://www.soumu.go.jp/info-accessibility-portal/webaccessibility/guideline/ / https://www.soumu.go.jp/info-accessibility-portal/webaccessibility/assets/documents/webaccessibility/guideline/guideline_2024.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数値（出典あり）: 61→86、A+AA は 38→55。見込みとしての記述。 ライセンス: 総務省ウェブサイトの利用規約（本文未取得）

### S093 障害者による情報の取得及び利用並びに意思疎通に係る施策の推進に関する法律（令和四年法律第五十号）第五条

> 事業者は、その事業活動を行うに当たっては、障害者がその必要とする情報を十分に取得し及び利用し並びに円滑に意思疎通を図ることができるようにするよう努めるとともに、国又は地方公共団体が実施する障害者による情報の取得及び利用並びに意思疎通に係る施策に協力するよう努めなければならない。

- 媒体・日付: e-Gov 法令検索（公布 2022-05-25、公布の日から施行）
- URL: https://laws.e-gov.go.jp/law/504AC0100000050 / https://laws.e-gov.go.jp/api/2/law_data/504AC0100000050?response_format=xml
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 通称 障害者情報アクセシビリティ・コミュニケーション施策推進法。事業者の責務は努力義務。 ライセンス: 法令

### S094 ウェブアクセシビリティ基盤委員会（WAIC）「JIS X 8341-3:2016 解説」

> 2004年6月、『JIS X 8341-3:2004』が初めて制定された。国内外の既存ガイドラインなどを参考に，日本語特有と思われる事項も網羅した独自の指針であった。
>
> 2010年8月、『WCAG 2.0』を包含する形でJIS X 8341-3が改正され『JIS X 8341-3:2010』となった。
>
> 2012年10月、『WCAG 2.0』がそのまま『ISO/IEC 40500:2012』になった。
>
> 2016年3月、『WCAG 2.0』がISO/IECの国際規格になったことを受けて、その一致規格となるように改正され『JIS X 8341-3:2016』となった。

- 媒体・日付: WAIC（2016年4月版）
- URL: https://waic.jp/docs/jis2016/understanding/201604/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: JIS X 8341-3:2016 は ISO/IEC 40500:2012（＝WCAG 2.0）の一致規格。2004 年制定・2010 年改正の経緯も同ページ。JIS の規格本文は引用しない。 ライセンス: WAIC の独自文書。利用許諾の明示を見つけられなかったため短い引用にとどめる

### S095 WAIC「ウェブコンテンツの JIS X 8341-3:2016 対応度表記ガイドライン」2021年4月版

> 『JIS X 8341-3:2016』への対応を表記する方法は以下の3つである。
>
> 「配慮」は、「準拠」「一部準拠」に至らない場合の対応度を示す際に用いる表記である。
>
> 「準拠」「一部準拠」は、ウェブコンテンツを『JIS X 8341-3:2016』の要件に従って制作・開発したうえで、『附属書JB（参考） 試験方法』に示されている方法や手順などを参考に試験を実施し、試験結果に基づいて対応の度合いを示す際に用いる表記である。
>
> 一部準拠 必須 試験を実施し、達成基準の一部を満たしていることを確認する。試験結果の公開は任意 今後の対応方針
>
> 目標とした適合レベルに該当する達成基準を全て満たしていない場合、今後の対応方針を示すことで「一部準拠」と表記することができる。

- 媒体・日付: WAIC（2021年4月13日公開）
- URL: https://waic.jp/docs/jis2016/compliance-guidelines/202104/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 表記は「準拠」「一部準拠」「配慮」の 3 つ。準拠は試験結果の公開が必須、一部準拠は今後の対応方針が必要、配慮は試験の有無を問わない（同ページの表）。 ライセンス: WAIC の独自文書。利用許諾の明示を見つけられなかったため短い引用にとどめる

### S096 WAIC 対応度表記ガイドライン（JIS マーク）

> 『JIS X 8341-3:2016』は、JIS法に定められるJISマーク表示制度の対象規格ではない。このため『JIS X 8341-3:2016』に適合したものに対してJISマークを付す行為は行うことが出来ない。

- 媒体・日付: WAIC（2021年4月版）
- URL: https://waic.jp/docs/jis2016/compliance-guidelines/202104/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: JIS マークは付けられない。適合は自己宣言（JIS Q 17050）か第三者の試験に基づく表明。 ライセンス: WAIC の独自文書。利用許諾の明示を見つけられなかったため短い引用にとどめる

### S097 WAIC「JIS X 8341-3:2016 試験実施ガイドライン」2020年12月版

> WAICでは、総ページ数が100ページを超える場合には、方式d)を用いることを推奨しているが、以下では、それぞれの方法を選ぶ際の目安を示す。
>
> 両方を合わせて、合計40～50ページ程度を試験対象にするとよい。

- 媒体・日付: WAIC（2020年12月25日公開）
- URL: https://waic.jp/docs/jis2016/test-guidelines/202012/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数値（出典あり。WAIC の目安）: 100 ページ超は代表ページ＋ランダムの併用、合計 40〜50 ページ程度。ランダムのみなら 25〜39 ページが「標準的」（表 1。表の値は raw で確認したが、表のセルのため引用外）。 ライセンス: WAIC の独自文書。利用許諾の明示を見つけられなかったため短い引用にとどめる

### S098 WAIC「JIS X 8341-3改正原案作成委員会 発足のお知らせ」2025-11-13

> 改正原案の方針として、ISO/IEC 40500:2025との一致規格とする方針であること、日本独自の内容は付属書(参考)として規定とは別にする方針であることを共有しました。また、WCAG 2.2の正誤表の内容がISO/IEC 40500:2025に反映されていないこと、日本語テキストの扱いに論点があることなどを確認しました。

- 媒体・日付: WAIC ニュース（2025年11月13日 更新）
- URL: https://waic.jp/news/20251113/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 時点情報。委員会は 2025-10-30 発足。改正版 JIS の公示は取得範囲（2026-11-16）で確認できていない。 ライセンス: WAIC の独自文書。利用許諾の明示を見つけられなかったため短い引用にとどめる

### S099 WAIC「WCAG 2.2 日本語訳 更新のお知らせ」2026-06-08

> 国際規格 ISO/IEC 40500 が2025年9月に改正されて WCAG 2.2 と同内容になったことを受けて、対応規格である JIS X 8341-3 の改正を検討しています。

- 媒体・日付: WAIC ニュース（2026年6月8日 更新）
- URL: https://waic.jp/news/20260608/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 時点情報。同時に達成基準名の訳を変更（例: 1.4.1 色の使用→色の用途、2.1 キーボード操作可能→キーボードアクセス可能）。旧訳の名称で書かれた資料と照合するとき注意。 ライセンス: WAIC の独自文書。利用許諾の明示を見つけられなかったため短い引用にとどめる

### S100 WAIC「WAICが提供する翻訳文書のライセンス」

> ウェブアクセシビリティ基盤委員会 (WAIC) が公開しているW3C文書の日本語訳は、W3C Document License に準じる条件で利用できるものとします。
>
> 「この文書の正式版はあくまで W3C のサイト内にある英語版である」という旨を記載すること

- 媒体・日付: WAIC
- URL: https://waic.jp/about/license/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: WAIC の WCAG 訳は参考訳で正式版は英語版。訳を引くときは翻訳者・文書のステータスを表示する。 ライセンス: 同ページ（翻訳文書の利用条件）

### S101 障害者差別解消法 第七条第二項・第八条第二項（制定時の版・2016-04-01 施行）

> 行政機関等は、その事務又は事業を行うに当たり、障害者から現に社会的障壁の除去を必要としている旨の意思の表明があった場合において、その実施に伴う負担が過重でないときは、障害者の権利利益を侵害することとならないよう、当該障害者の性別、年齢及び障害の状態に応じて、社会的障壁の除去の実施について必要かつ合理的な配慮をしなければならない。
>
> 社会的障壁の除去の実施について必要かつ合理的な配慮をするように努めなければならない。

- 媒体・日付: e-Gov 法令 API（改正履歴 425AC0000000065_20160401_000000000000000、制定時の版）
- URL: https://laws.e-gov.go.jp/law/425AC0000000065/20160401_000000000000000 / https://laws.e-gov.go.jp/api/2/law_data/425AC0000000065_20160401_000000000000000?response_format=xml
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 制定時の版でも、行政機関等の合理的配慮の提供は義務（第七条第二項）、事業者は努力義務（第八条第二項、2 つ目の断片）。第五条（環境の整備の努力義務）も同文であることを raw で確認した。閲覧用 URL は API の改正履歴 ID から組み立てたもので、curl で HTTP 200 を確認した。 ライセンス: 法令

### S102 総務省（みんなの公共サイト運用ガイドライン 2024 年版: ISO/IEC 40500 との一致）

> 完全一致する形へ改正されました

- 媒体・日付: 総務省「みんなの公共サイト運用ガイドライン（2024 年版）」PDF
- URL: https://www.soumu.go.jp/info-accessibility-portal/webaccessibility/guideline/index.html
- URL（原稿）: https://www.soumu.go.jp/info-accessibility-portal/webaccessibility/assets/documents/webaccessibility/guideline/guideline_2024.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: WCAG 2.0 が 2012 年 10 月に ISO/IEC 40500:2012 として承認され、JIS X 8341-3:2016 はそれと一致する形へ改正された、という文脈。ISO/IEC 40500 の 2025 年版（WCAG 2.2 相当）は ISO のページが 403 で未確認（「未検証・伝聞」）

### S103 総務省（みんなの公共サイト運用ガイドライン 2024 年版: JIS 改正の検討）

> JIS X 8341-3 の改正（以下、「JIS 改正」という。）に向けた検討

- 媒体・日付: 総務省「みんなの公共サイト運用ガイドライン（2024 年版）」PDF
- URL: https://www.soumu.go.jp/info-accessibility-portal/webaccessibility/guideline/index.html
- URL（原稿）: https://www.soumu.go.jp/info-accessibility-portal/webaccessibility/assets/documents/webaccessibility/guideline/guideline_2024.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: WCAG 2.2 の勧告（2023 年 10 月）を踏まえ JIS 改正の検討が進み、達成基準が追加される見通し、という 2024 年版時点の記述。改正の完了は確かめていない

## 海外の制度と訴訟

### S104 Directive (EU) 2019/882（European Accessibility Act）Article 31・32

> Member States shall adopt and publish, by 28 June 2022, the laws, regulations and administrative provisions necessary to comply with this Directive.
>
> They shall apply those measures from 28 June 2025.
>
> Member States shall provide for a transitional period ending on 28 June 2030 during which service providers may continue to provide their services using products which were lawfully used by them to provide similar services before that date.

- 媒体・日付: EUR-Lex（Wayback Machine の保存コピー 2026-11-08 で照合。EUR-Lex 本体は取得時に HTTP 202 で本文なし）
- URL: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019L0882 / https://web.archive.org/web/20261108183414/https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019L0882
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 時点情報・法的判断ではない。適用開始 2025-06-28。Article 32 は 2030-06-28 までの経過措置（既存の製品を使ったサービスの提供）。 ライセンス: EUR-Lex の文書は再利用可（欧州委員会の再利用方針。本文は未取得）

### S105 Directive (EU) 2019/882 Article 4(5)

> Microenterprises providing services shall be exempt from complying with the accessibility requirements referred to in paragraph 3 of this Article and any obligations relating to the compliance with those requirements.

- 媒体・日付: EUR-Lex（Wayback の保存コピー）
- URL: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019L0882 / https://web.archive.org/web/20261108183414/https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32019L0882
- 取得日: 2026-11-16
- 検証区分: A
- 備考: サービスを提供する零細企業は適用除外。対象となる製品・サービスの範囲は Article 2 の列挙による。 ライセンス: S104 と同じ

### S106 U.S. Access Board, Revised 508 Standards（E205.4）

> Electronic content shall conform to Level A and Level AA Success Criteria and Conformance Requirements in WCAG 2.0 (incorporated by reference, see 702.10.1).

- 媒体・日付: U.S. Access Board（最終規則 2017-01-18。既存 ICT の基準日 2018-01-18） ／ U.S. Access Board「Information and Communication Technology」（E205.4 Accessibility Standard）
- URL: https://www.access-board.gov/ict/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 時点情報。米連邦政府の調達・提供する ICT の基準は WCAG 2.0 AA を参照。改定経緯（2000-12-21 原基準、2017-01-18 最終規則）は同ページの Background。 ライセンス: 米国連邦政府の著作物（パブリックドメイン） ／ 改定後の 508 基準は WCAG 2.0 の A と AA を参照で取り込む。Web 以外の文書には 2.4.1・2.4.5・3.2.3・3.2.4 の 4 基準の例外がある（同所）。

### S107 U.S. Department of Justice, ADA Title II 最終規則（Federal Register 2024-04-24）

> the Department is requiring that public entities comply with the WCAG 2.1 Level AA success criteria and conformance requirements.

- 媒体・日付: Federal Register Vol. 89（2024-04-24）
- URL: https://www.federalregister.gov/documents/full_text/text/2024/04/24/2024-07758.txt
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 時点情報。州・地方政府（Title II）のウェブ・アプリの基準は WCAG 2.1 AA。民間（Title III）の規則ではない。閲覧用の文書ページ（federalregister.gov/documents/2024/04/24/2024-07758/…）は curl では bot 確認のページに転送されるため、全文テキストの URL を載せた。 ライセンス: 米国連邦政府の著作物

### S108 U.S. Department of Justice, 適合期限を延ばす暫定最終規則（Federal Register 2026-04-20）

> The compliance date for State and local government entities with a total population of 50,000 or more is extended from April 24, 2026, to April 26, 2027. The compliance date for public entities with a total population of less than 50,000, or any special district government, is extended from April 26, 2027, to April 26, 2028.

- 媒体・日付: Federal Register Vol. 91 No. 75（2026-04-20、効力発生 2026-04-20）
- URL: https://www.federalregister.gov/documents/2026/04/20/2026-07663/extension-of-compliance-dates-for-nondiscrimination-on-the-basis-of-disability-accessibility-of-web / https://www.federalregister.gov/api/v1/documents/2026-07663.json?fields[]=abstract&fields[]=dates&fields[]=effective_on&fields[]=body_html_url&fields[]=raw_text_url&fields[]=html_url
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 時点情報（2026-11-16 取得）。人口 5 万以上は 2027-04-26、未満は 2028-04-26。IFR の要旨は期限の延長だけを述べる（技術基準の変更の有無は本文を通読しておらず未照合）。以後の改正の有無も未照合。 ライセンス: 米国連邦政府の著作物

### S109 U.S. Access Board, ICT Accessibility 508 Standards（経緯）

> December 21, 2000 – The Board issues the original Section 508 Standards.
>
> February 3, 1998 – The Board publishes the original Telecommunications Act Accessibility Guidelines.
>
> January 18, 2017 – The Board issues the final rule, docket ATBCB-2015-0002-014.

- 媒体・日付: U.S. Access Board（ICT のページの Background） ／ U.S. Access Board「Information and Communication Technology」
- URL: https://www.access-board.gov/ict/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 年号の根拠。原基準 2000-12-21、改定の最終規則 2017-01-18。改定作業は 2006 年の TEITAC から始まる（同ページ）。 ライセンス: 米国連邦政府の著作物 ／ 同ページに「January 22, 2018 – The Board issues correction」「Originally Published on December 21, 2000」とある。いわゆる 508 Refresh。

### S110 Section508.gov（GSA）

> In 1998, Congress amended the Rehabilitation Act of 1973 to require federal agencies to make their electronic and information technology (EIT) accessible

- 媒体・日付: Section508.gov「IT Accessibility Laws and Policies」
- URL: https://www.section508.gov/manage/laws-and-policies/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 米国連邦政府の調達・情報技術の義務。Section 508 自体が 1986 年に加えられたという話は確かめていない（「未検証・伝聞」）

### S111 Seyfarth Shaw（ADA Title III ブログ: 2025 年の連邦裁判所の件数）

> Plaintiffs filed 3,117 website accessibility lawsuits in federal court in 2025 – a 27% increase from 2024.

- 媒体・日付: Seyfarth Shaw「ADA Title III」ブログ、2026-03-25
- URL: https://www.adatitleiii.com/2026/03/federal-court-website-accessibility-lawsuit-filings-bounce-back-in-2025/
- URL（原稿）: https://web.archive.org/web/20261106231543/https://www.adatitleiii.com/2026/03/federal-court-website-accessibility-lawsuit-filings-bounce-back-in-2025/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 範囲は「2025 年・米連邦裁判所・ADA Title III に基づくウェブサイトのアクセシビリティ訴訟・同事務所が探して特定できた件数（could be identified through a diligent search）」。州裁判所は含まない。2025 年の Title III 訴訟全体 8,667 件のうち 3,117 件（36%）、2024 年は 8,800 件のうち 2,452 件（28%）。直接取得は 403。JD Supra に同文の転載がある

### S112 Seyfarth Shaw（ADA Title III ブログ: 2017〜2025 年の推移）

> 2017: 814; 2018: 2,258 (177% increase from 2017); 2019: 2,256 (.01% decrease from 2018), 2020: 2,523 (14% increase from 2019); 2021: 2,895 (12% increase from 2020); 2022: 3,255 (12% increase from 2021); 2023: 2,794 (14% decrease from 2022); 2024: 2,452 (13% decrease from 2023); 2025: 3,117 (27% increase from 2024)

- 媒体・日付: Seyfarth Shaw「ADA Title III」ブログ、2026-03-25（グラフの代替テキスト）
- URL: https://www.adatitleiii.com/2026/03/federal-court-website-accessibility-lawsuit-filings-bounce-back-in-2025/
- URL（原稿）: https://web.archive.org/web/20261106231543/https://www.adatitleiii.com/2026/03/federal-court-website-accessibility-lawsuit-filings-bounce-back-in-2025/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 範囲は S111 と同じ。ブログ本文は、カリフォルニア州の連邦裁判所がオンラインのみの事業者を対象外とする判断を示していることにも触れる。年ごとの増減の理由は主張しない

### S113 UsableNet（2025 Year-End Digital Accessibility Lawsuit Report）

> In 2025, UsableNet reviewed more than 5,000 ADA-related digital accessibility lawsuits filed in federal and state courts.

- 媒体・日付: UsableNet、2025 年末報告（テキスト版）
- URL: https://info.usablenet.com/2025-year-end-digital-accessibility-lawsuit-report-plain-text
- 取得日: 2026-11-16
- 検証区分: C
- 備考: アクセシビリティ製品を売るベンダーの報告なので C。範囲は連邦の全巡回区と一部の州裁判所（New York・California など）。Seyfarth（S111）と範囲が違うので数値を並べて比べない

### S114 第 9 巡回区控訴裁判所（Robles v. Domino's Pizza）

> We agree with the district court that the ADA applies to Domino’s website and app

- 媒体・日付: 米第 9 巡回区控訴裁判所の判決文 PDF、2019-01-15（No. 17-55504）
- URL: https://cdn.ca9.uscourts.gov/datastore/opinions/2019/01/15/17-55504.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: この巡回区のこの事件での判断であり、一般化しない。連邦最高裁が上告を受理しなかった（2019 年）という話は確かめていない（「未検証・伝聞」）。照合語はアポストロフィの前までにした

### S115 米司法省 DOJ（Guidance on Web Accessibility and the ADA）

> the Department has consistently taken the position that the ADA’s requirements apply to all the goods, services, privileges, or activities offered by public accommodations, including those offered on the web

- 媒体・日付: ADA.gov、2022-03-18
- URL: https://www.ada.gov/resources/web-guidance/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 行政のガイダンスであり、規則ではない。同ガイダンスは事業者に方法の柔軟性があると書く

## 支援技術での確かめ方

### S116 GOV.UK Service Manual（Testing with assistive technologies）

> This table is based on the 2016 survey of assistive technologies used to access GOV.UK and the more recent WebAIM screen reader survey.

- 媒体・日付: gov.uk/service-manual, published 2017-10-26・updated 2022-05-24
- URL: https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 最低限の組み合わせの表（JAWS 2019 以降＋Chrome/Edge、NVDA＋Chrome/Firefox/Edge、VoiceOver iOS＋Safari、TalkBack＋Chrome、Windows 拡大鏡／Apple Zoom、Dragon 15 以降＋Chrome）の根拠の説明。2022 年時点の英国の利用調査に基づく表で、日本の利用状況ではない。GOV.UK のページは Open Government Licence v3.0（ページ末尾の表示で確認）

### S117 GOV.UK Service Manual（Testing with assistive technologies）

> When using screen magnifiers, test up to at least 4 times magnification.

- 媒体・日付: gov.uk/service-manual, updated 2022-05-24
- URL: https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 拡大鏡での確認倍率。出典ありの数値（4 倍）

### S118 Chris Moore（GOV.UK Accessibility blog）

> We got 712 completed surveys back, all of whom are from people using some form of assistive technology.

- 媒体・日付: accessibility.blog.gov.uk, 2016-11-01（Results of the 2016 GOV.UK assistive technology survey）
- URL: https://accessibility.blog.gov.uk/2016/11/01/results-of-the-2016-gov-uk-assistive-technology-survey/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 2016 年の GOV.UK 利用者調査。拡大鏡 30%・スクリーンリーダー 29%・音声認識 18% など（同ページの表）。英国の行政サイト利用者の自己申告で、母集団は統制されていない

### S119 WebAIM（Screen Reader User Survey #11）

> In July-August 2026, WebAIM surveyed preferences of screen reader users. We received 1780 valid responses.

- 媒体・日付: webaim.org/projects/screenreadersurvey11, Last updated 2026-09-29
- URL: https://webaim.org/projects/screenreadersurvey11/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 主に使うデスクトップのスクリーンリーダー JAWS 55.0%・NVDA 32.9%・VoiceOver 6.5%、モバイル VoiceOver 72.2%・TalkBack 29.5%、地域別でアジアは NVDA 77.4%（いずれも同ページの表）。前回 #10 は 2024 年 1 月の調査。著作権は WebAIM。ライセンス表示なし。短い引用に留める

### S120 WebAIM（Screen Reader User Survey #11）

> The sample was not controlled and may not represent all screen reader users.

- 媒体・日付: webaim.org/projects/screenreadersurvey11, Last updated 2026-09-29
- URL: https://webaim.org/projects/screenreadersurvey11/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 調査の限界の但し書き。比率を引くときは必ず添える

### S121 WebAIM（Screen Reader User Survey #11）

> Only 8.2% of respondents did not indicate usage of AI in any of these ways.

- 媒体・日付: webaim.org/projects/screenreadersurvey11, Last updated 2026-09-29
- URL: https://webaim.org/projects/screenreadersurvey11/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 2026 年の調査で AI を画像の説明などに使う利用者が多数（代替テキストに AI を使う 60.1% など、同ページの表）。代替テキストを省いてよい根拠にはならない（整理（推測））

### S122 PowerMapper（Screen reader reliability）

> An example of a partial pass is when form labels are read when tabbing, but ignored in browse mode.

- 媒体・日付: powermapper.com/tests/screen-readers, 2025-12-14
- URL: https://www.powermapper.com/tests/screen-readers/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ベンダーの試験結果。同ページの表では NVDA 2025.3＋Chrome 143 が 90%、JAWS 2025.2508.120＋Chrome 143 が 81%、VoiceOver iOS 18.6＋Safari が 80%。組み合わせと版ごとの時点情報として扱う。著作権は PowerMapper。短い引用に留める

### S123 NV Access（NVDA 2026.3.1 User Guide）

> In browse mode, the content of the document is made available in a flat representation that can be navigated with the cursor keys as if it were a normal text document.

- 媒体・日付: download.nvaccess.org, NVDA 2026.3.1 の利用者ガイド
- URL: https://download.nvaccess.org/documentation/userGuide.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ブラウズモードの説明。版に依存する。著作権は NV Access。短い引用に留める

### S124 WebAIM（Using NVDA to Evaluate Web Accessibility）

> NVDA will toggle between these modes automatically (assuming you are using the Tab key to navigate) based on the type of thing that has keyboard focus.

- 媒体・日付: webaim.org/articles/nvda, Last updated 2020-09-28
- URL: https://webaim.org/articles/nvda/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: フォーカスモードとブラウズモードの切り替え。2020 年の記事で、現行版の挙動は S123 の利用者ガイドで確かめる。著作権は WebAIM。ライセンス表示なし。短い引用に留める

### S125 WebAIM（Testing with Screen Readers: Questions and Answers）

> If you don't know how to use a screen reader, testing with a screen reader can be frustrating and counterproductive.

- 媒体・日付: webaim.org/articles/screenreader_testing, Last updated 2019-05-20
- URL: https://webaim.org/articles/screenreader_testing/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 慣れていない人のスクリーンリーダー検査の限界。著作権は WebAIM。ライセンス表示なし。短い引用に留める

### S126 WebAIM（Testing with Screen Readers: Questions and Answers）

> Too many people focus on blindness to the exclusion of people with other disability types

- 媒体・日付: webaim.org/articles/screenreader_testing, Last updated 2019-05-20
- URL: https://webaim.org/articles/screenreader_testing/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: スクリーンリーダー検査だけに偏る失敗

### S127 USWDS（accessibility-tests/table.yml）

> A scrollable table does not scroll with left and right arrow keystrokes in JAWS and NVDA.

- 媒体・日付: GitHub uswds/uswds-site, commit af13d80f（version_tested 3.7.1）
- URL: https://github.com/uswds/uswds-site/blob/af13d80f071c3d897bee422f51954d9d7d156474/_data/accessibility-tests/table.yml
- URL（原稿）: https://raw.githubusercontent.com/uswds/uswds-site/af13d80f071c3d897bee422f51954d9d7d156474/_data/accessibility-tests/table.yml
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。支援技術ごとの既知の例外を版つきで記録した例（GitHub issue 5828 に言及）。USWDS 3.7.1 時点の記録で、現行版は未確認。原稿は uswds/uswds-site（LICENSE.md: 米国政府の著作物として public domain、CC0 1.0 で放棄）

### S128 USWDS（accessibility-tests/modal.yml）

> Focus returns to the expected element after the modal is closed.

- 媒体・日付: GitHub uswds/uswds-site, commit af13d80f（version_tested 3.8.2）
- URL: https://github.com/uswds/uswds-site/blob/af13d80f071c3d897bee422f51954d9d7d156474/_data/accessibility-tests/modal.yml
- URL（原稿）: https://raw.githubusercontent.com/uswds/uswds-site/af13d80f071c3d897bee422f51954d9d7d156474/_data/accessibility-tests/modal.yml
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。モーダルの試験項目。同ファイルに Modal focus stays inside of the modal.、Modal content is visible at 400% zoom. もある。原文に at least 4:5.1 という誤記がある。原稿は uswds/uswds-site（LICENSE.md: 米国政府の著作物として public domain、CC0 1.0 で放棄）

## 自動検査とその限界

### S129 Mehmet Duran（GOV.UK Accessibility blog）

> We found that a large proportion of the barriers we created weren’t picked up by any of the 10 tools we tested – 29% in fact. Of the 143 barriers we created, a total of 42 were missed by all of the tools we tested.

- 媒体・日付: accessibility.blog.gov.uk, 2017-02-24（What we found when we tested tools on the world's least-accessible webpage）
- URL: https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: GDS が意図的に 143 件の障壁を仕込んだ検証ページで 10 ツールを試した結果。2017 年時点の数値。GOV.UK のページは Open Government Licence v3.0（ページ末尾の表示で確認）。後の監査ページ（S131）は 142 件・13 ツールで数値が異なる

### S130 Mehmet Duran（GOV.UK Accessibility blog）

> A good analogy is to think of a testing tool as like using a spellchecker.

- 媒体・日付: accessibility.blog.gov.uk, 2017-02-24
- URL: https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 自動検査をスペルチェッカーにたとえる。合格＝アクセシブルではないことの説明に使う

### S131 GDS（accessibility-tool-audit）

> We deliberately introduced 142 accessibility barriers to a page of content, and ran them through 13 automated tools.

- 媒体・日付: alphagov.github.io/accessibility-tool-audit, last updated 13 April 2018
- URL: https://alphagov.github.io/accessibility-tool-audit/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 2018 年時点で最良のツールでも 40%、手動確認の促しを含めて 50% と同ページに記載。ツール名と版は同ページの表による。2017 年のブログ（S129）と件数・ツール数が異なる点は両方を記す

### S132 Deque Systems（プレスリリース）

> Deque found that, on average, 57 percent of accessibility issues were completely covered by this automated testing.

- 媒体・日付: deque.com, 2021-03-10
- URL: https://www.deque.com/blog/automated-testing-study-identifies-57-percent-of-digital-accessibility-issues/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ベンダー自身の主張。2,000 件超の監査・約 30 万件の課題を件数ベースで数えた割合（達成基準の数ではない）と同ページに記載。著作権は Deque。短い引用に留める

### S133 Deque Systems（プレスリリースの地の文）

> is much higher than the widely-accepted belief that automated accessibility testing only provides 20-30 percent of coverage.

- 媒体・日付: deque.com, 2021-03-10
- URL: https://www.deque.com/blog/automated-testing-study-identifies-57-percent-of-digital-accessibility-issues/
- 取得日: 2026-11-16
- 検証区分: R
- 備考: 「自動検査は 20〜30%」という通説の存在を Deque が述べた地の文。通説そのものの一次出典ではない（未検証・伝聞の節を参照）

### S134 Adrian Roselli

> Automated accessibility testing tools cannot test 100% of WCAG.

- 媒体・日付: adrianroselli.com, 2023-01-19 初出・2026-09-21 更新（Comparing Manual and Free Automated WCAG Reviews）
- URL: https://adrianroselli.com/2023/01/comparing-manual-and-free-automated-wcag-reviews.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 本人の文。性質は論評。2023-01-14 に WCAG 2.1 A/AA で axe DevTools v4.47.0（axe-core v4.6.2）、ARC v5.4.2、WAVE v3.2.2.0、EAAC v3.1.42.9999 と手動確認を比べた。個人のブログ。ライセンス表示なし。短い引用に留める

### S135 Adrian Roselli

> In my manual review I found almost seven-and-a-half times (7½×) more issues than the tool with the next highest set of found issuess across three times (3×) as many Success Criteria.

- 媒体・日付: adrianroselli.com, 2023-01-19 初出・2026-09-21 更新
- URL: https://adrianroselli.com/2023/01/comparing-manual-and-free-automated-wcag-reviews.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 原文の誤記 issuess をそのまま残した。1 ページ・1 人の検証者・2023 年 1 月の版の結果で、一般化できる率ではない

### S136 WebAIM（The WebAIM Million 2026）

> Absence of detected errors does not indicate that a page is accessible or conformant.

- 媒体・日付: webaim.org/projects/million, 2026 年版（2026 年 2 月のデータ、Last updated 2026-03-30） ／ WebAIM「The WebAIM Million」2026 年版（2026 年 2 月の計測）
- URL: https://webaim.org/projects/million/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 上位 100 万ページのホームを自動検査した年次報告。検出 0 件でもアクセシブルとは限らないという但し書き。著作権は WebAIM。ライセンス表示なし。短い引用に留める ／ 上位 100 万サイトのトップページを自動検査した結果。ページ平均の検出エラー 56.1、WCAG 2 の検出可能な失敗があるページ 95.9%（2025 年 94.8%）。どれも自動検出できた範囲の数値。

### S137 W3C WAI（Selecting Web Accessibility Evaluation Tools）

> Web accessibility evaluation tools can not determine accessibility, they can only assist in doing so.

- 媒体・日付: w3.org/WAI, Updated 13 May 2024
- URL: https://www.w3.org/WAI/test-evaluate/tools/selecting/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: W3C の文書（W3C Document License / WAI サイトの利用条件）。短い逐語引用は可

### S138 W3C WAI（Easy Checks – A First Review, Draft Update）

> These checks cover just a few accessibility issues and are designed to be quick and easy, rather than exhaustive. A web page could seem to pass these checks, yet still have significant accessibility barriers.

- 媒体・日付: w3.org/WAI, Updated 21 March 2024（Draft Update）
- URL: https://www.w3.org/WAI/test-evaluate/easy-checks/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 簡易点検の限界。最初の点検の材料に使い、合格の根拠にしない。W3C の文書（W3C Document License / WAI サイトの利用条件）。短い逐語引用は可

### S139 W3C（WCAG-EM, Group Note）

> This document describes a methodology with a step-by-step process to evaluate how well digital products conform to Web Content Accessibility Guidelines (WCAG) 2.

- 媒体・日付: W3C Group Note, 2026-07-23
- URL: https://www.w3.org/TR/WCAG-EM/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 適合評価の手順書。範囲の決定・抽出・評価・報告の手順。法的な適合判断は、この台帳の対象外。W3C の文書（W3C Document License / WAI サイトの利用条件）。短い逐語引用は可

### S140 WebAIM（Survey of Web Accessibility Practitioners #3: 自動検査で見つかる割合の見立て）

> Only 17.6% of respondents indicate that 50% or more of accessibility issues can be detected by automated testing.

- 媒体・日付: WebAIM、2021 年 1 月実施の実務者調査（回答 758 件）
- URL: https://webaim.org/projects/practitionersurvey3/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 実務者の見立てであり、自動検査の検出率を測った値ではない。同調査で「訴訟や OCR への申し立てを受けたことがある」は全体で 19.5%（企業 20.7%、教育 38.8%）

### S141 Chrome for Developers（Lighthouse accessibility scoring）

> The Lighthouse Accessibility score is a weighted average of all accessibility audits. Weighting is based on axe user impact assessments. Each accessibility audit is pass or fail.

- 媒体・日付: developer.chrome.com「Lighthouse accessibility scoring」
- URL: https://developer.chrome.com/docs/lighthouse/accessibility/scoring
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 手動確認の監査は「don't affect your score」。スコアは自動で判定できる項目の加重平均に過ぎないことの根拠

### S142 Manuel Matuzović（Lighthouse 満点の、最も使えないサイト）

> It's about us developers and our responsibility to not thoughtlessly rely on automatic testing.

- 媒体・日付: 個人ブログ matuzo.at、2019-05-31
- URL: https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/
- 取得日: 2026-11-16
- 検証区分: C
- 備考: Lighthouse のアクセシビリティ 100 点のまま使えないページを作ってみせた論考。「Scores indicate the quality of our apps and sites, but we must not trust these numbers thoughtlessly.」とも書く。2019 年の Lighthouse が対象で、今の版の挙動は別に確かめる

### S143 W3C WAI（Selecting Web Accessibility Evaluation Tools: 自動化できない検査）

> Some accessibility checks just cannot be automated and require manual intervention.

- 媒体・日付: W3C WAI「Selecting Web Accessibility Evaluation Tools」
- URL: https://www.w3.org/WAI/test-evaluate/tools/selecting/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 検査ツールの限界を標準側が書いた箇所

### S144 W3C WAI（Selecting Web Accessibility Evaluation Tools: ツールの言うことに頼りすぎない）

> avoid relying too much on what tools say over addressing the real-life experience of website users

- 媒体・日付: W3C WAI「Selecting Web Accessibility Evaluation Tools」
- URL: https://www.w3.org/WAI/test-evaluate/tools/selecting/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: S142・S218 と並べて、検査結果と利用体験の差を述べる根拠

### S145 WebAIM（The WebAIM Million 2026: ARIA とエラー数の相関）

> This does not necessarily mean that ARIA introduced these errors

- 媒体・日付: WebAIM「The WebAIM Million」2026 年版（2026 年 2 月の計測）
- URL: https://webaim.org/projects/million/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ARIA のあるページは平均 59.1、無いページは 42 の検出エラー。ARIA の menu（role="menu"）があるページは 5.7% で、そのうち 22% が必要なマークアップと操作を欠いていた。いずれも相関であり、WebAIM 自身が因果と限らないと断っている（ページはより複雑でもある）。フレームワーク別の平均エラー数も同様に相関として扱う

## デザインシステムと画面の型ごとの指針

### S146 GOV.UK Design System（Accessibility）

> Using the GOV.UK Design System in a service does not immediately make that service accessible.

- 媒体・日付: GitHub alphagov/govuk-design-system, commit 5f31aa7e
- URL: https://design-system.service.gov.uk/accessibility/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/accessibility/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。部品を使えば済むという誤解への注意。原稿は alphagov/govuk-design-system（コードは MIT）。公開サイトの本文は Open Government Licence v3.0（公開ページ末尾で確認）

### S147 GOV.UK Design System（Error message）

> To help screen reader users, the error message component includes a hidden 'Error:' before the error message.

- 媒体・日付: GitHub alphagov/govuk-design-system, commit 5f31aa7e
- URL: https://design-system.service.gov.uk/components/error-message/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/components/error-message/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。同ページは入力を消さないこと、please・sorry・valid／invalid・oops を使わないことも挙げる

### S148 GOV.UK Design System（Error summary）

> Always show an error summary when there is a validation error, even if there’s only one.

- 媒体・日付: GitHub alphagov/govuk-design-system, commit 5f31aa7e
- URL: https://design-system.service.gov.uk/components/error-summary/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/components/error-summary/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。同ページは送信後にフォーカスをエラーの要約へ移すことも求める

### S149 GOV.UK Design System（Validation）

> Do not validate when the user moves away from a field.

- 媒体・日付: GitHub alphagov/govuk-design-system, commit 5f31aa7e
- URL: https://design-system.service.gov.uk/patterns/validation/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/patterns/validation/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。入力欄を離れた時点で検証しない。同ページは入力の遅い利用者への影響、音声入力（特に数字）で入る余分な文字を無視することも挙げる

### S150 GOV.UK Design System（Table）

> A caption helps users find, navigate and understand tables.

- 媒体・日付: GitHub alphagov/govuk-design-system, commit 5f31aa7e
- URL: https://design-system.service.gov.uk/components/table/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/components/table/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。同ページはレイアウトに表を使わないこと、表のデータを減らすことも挙げる

### S151 GOV.UK Design System（Passwords）

> let users paste their password

- 媒体・日付: GitHub alphagov/govuk-design-system, commit 5f31aa7e
- URL: https://design-system.service.gov.uk/patterns/passwords/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/patterns/passwords/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。同ページは最低 8 文字・最大長を設けない・試行回数は 5〜10 回を挙げる（出典あり）

### S152 USWDS（Modal: When to consider something else）

> Before using a modal, consider whether there’s another component that might be less disruptive for the user. Modals should be a last resort.

- 媒体・日付: GitHub uswds/uswds-site, commit af13d80f
- URL: https://designsystem.digital.gov/components/modal/
- URL（原稿）: https://raw.githubusercontent.com/uswds/uswds-site/af13d80f071c3d897bee422f51954d9d7d156474/_components/modal/guidance/when-to-consider-something-else.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。原稿は uswds/uswds-site（LICENSE.md: 米国政府の著作物として public domain、CC0 1.0 で放棄）

### S153 USWDS（Modal: Accessibility）

> placing the close button at the bottom of the modal will prevent some screen readers from reading the close button first

- 媒体・日付: GitHub uswds/uswds-site, commit af13d80f
- URL: https://designsystem.digital.gov/components/modal/
- URL（原稿）: https://raw.githubusercontent.com/uswds/uswds-site/af13d80f071c3d897bee422f51954d9d7d156474/_components/modal/guidance/accessibility.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。閉じるボタンの位置と読み上げ順。キーボードで背面へフォーカスが移らないことを確かめるとも記載

### S154 USWDS（Table: Accessibility）

> Scrollable tables need to be focusable.
>
> Add an `aria-live` region to the page when enabling row sorting.
>
> automatically announces when the sort state changes for visitors using screen readers, but it must be added to the HTML document before load

- 媒体・日付: GitHub uswds/uswds-site, commit af13d80f
- URL: https://designsystem.digital.gov/components/table/
- URL（原稿）: https://raw.githubusercontent.com/uswds/uswds-site/af13d80f071c3d897bee422f51954d9d7d156474/_components/table/guidance/accessibility.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。横スクロールする表に tabindex=0 を付ける。見出しは 2 行まで、並べ替えはライブリージョンで伝えるとも記載

### S155 USWDS（Alert: Accessibility）

> Users should be able to understand the purpose of the alert without relying solely on its color or the shape of its icon.

- 媒体・日付: GitHub uswds/uswds-site, commit af13d80f
- URL: https://designsystem.digital.gov/components/alert/
- URL（原稿）: https://raw.githubusercontent.com/uswds/uswds-site/af13d80f071c3d897bee422f51954d9d7d156474/_components/alert/guidance/accessibility.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。エラー・緊急は role=alert、成功は role=status、情報は role=region と使い分ける記載あり。デジタル庁（S166）は入力エラーのリアルタイム通知を禁じており、対象が違う

### S156 USWDS（Sign-in form template: Accessibility）

> Don’t automatically sign out a user without giving them 20 seconds' advance notice to request more time.

- 媒体・日付: GitHub uswds/uswds-site, commit af13d80f
- URL: https://designsystem.digital.gov/templates/form-templates/sign-in-form/
- URL（原稿）: https://raw.githubusercontent.com/uswds/uswds-site/af13d80f071c3d897bee422f51954d9d7d156474/_templates/form-templates/sign-in/guidance/accessibility.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。自動サインアウト前の予告（出典あり: 20 秒）

### S157 USWDS（Data visualizations）

> Your audience shouldn't be required to interact with a visualization to understand its message.

- 媒体・日付: GitHub uswds/uswds-site, commit af13d80f
- URL: https://designsystem.digital.gov/components/data-visualizations/
- URL（原稿）: https://raw.githubusercontent.com/uswds/uswds-site/af13d80f071c3d897bee422f51954d9d7d156474/_components/data-visualizations/data-visualizations.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。図の要点を操作なしで伝える。スクリーンリーダーで読める表を添えるとも記載（原文に an screen-reader の誤記）

### S158 Carbon Design System（Modal: Accessibility）

> For destructive interactions, the “cancel” button takes focus, not the red danger/delete button.

- 媒体・日付: GitHub carbon-design-system/carbon-website, commit 5e9cd1da
- URL: https://carbondesignsystem.com/components/modal/accessibility/
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/components/modal/accessibility.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。破壊的な操作の確認での初期フォーカス。入力を伴うダイアログでは最初の入力欄にフォーカスすることを注釈で指示するとも記載。原稿は carbon-design-system/carbon-website（Apache-2.0）。リポジトリは archived（最終 push 2026-09-30）。公開ページは引き続き配信中

### S159 Carbon Design System（Notification: Accessibility）

> Inline and toast notifications do not contain interactive elements, and they do not receive focus.

- 媒体・日付: GitHub carbon-design-system/carbon-website, commit 5e9cd1da
- URL: https://carbondesignsystem.com/components/notification/accessibility/
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/components/notification/accessibility.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。操作を含む通知は別扱い（alertdialog でフォーカスを閉じ込める）と同ページにある

### S160 Carbon Design System（Data table: Accessibility）

> Since there is no persistent visual indicator that a table is sortable, designers need to annotate if a table should be implemented with sortable column headers.

- 媒体・日付: GitHub carbon-design-system/carbon-website, commit 5e9cd1da
- URL: https://carbondesignsystem.com/components/data-table/accessibility/
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/components/data-table/accessibility.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。見た目に出ない仕様を注釈で渡す例

### S161 Carbon Design System（Tabs: Accessibility）

> Tabs take at least two tabstops, one for the tablist and one for the tabpanel.

- 媒体・日付: GitHub carbon-design-system/carbon-website, commit 5e9cd1da
- URL: https://carbondesignsystem.com/components/tabs/accessibility/
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/components/tabs/accessibility.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。タブのキーボード操作の前提

### S162 Material Web（Dialog docs）

> Focus trapping is recommended for accessibility, and should not typically be disabled.

- 媒体・日付: GitHub material-components/material-web, commit 37aa14b8
- URL: https://material-web.dev/components/dialog/
- URL（原稿）: https://raw.githubusercontent.com/material-components/material-web/37aa14b843dcaeb3a46f898679fa6fcd109b1905/docs/components/dialog.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。noFocusTrap 属性の説明。material-web は README で maintenance mode と表示（取得日時点）。m3.material.io は JS 描画で本文を取得できなかった。リポジトリは Apache-2.0

### S163 デジタル庁デザインシステム（アクセシビリティ）

> デザインシステムによって達成できるアクセシビリティは、考慮すべきアクセシビリティ全体の一部であることに留意してください。

- 媒体・日付: design.digital.go.jp/dads, 2025-10-29 更新
- URL: https://design.digital.go.jp/dads/guidance/accessibility/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 同ページの法制度の記述は、この台帳の対象外。デジタル庁デザインシステム（β）。デジタル庁のコンテンツは公共データ利用規約（PDL1.0）で出典の記載が必要（https://www.digital.go.jp/copyright-policy で確認）。公式の Markdown 版（https://design.digital.go.jp/dads/dads-markdown-20261021.zip 、2026-10-21 版。リソースのページで配布）の同じ文書にも照合文字列があることを確かめた。zip のため公開ページで照合する

### S164 デジタル庁デザインシステム（モーダルダイアログ）

> 削除などの破壊的な操作では、確認ダイアログを表示しても、利用者が内容を確認せずに操作を進めると安全対策として機能しません。

- 媒体・日付: design.digital.go.jp/dads, 2026-09-09 更新
- URL: https://design.digital.go.jp/dads/components/modal-dialog/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 見出し「確認ダイアログだけを安全対策にしない」の下の本文。誤って削除しない設計や取り消し・復元できる設計を検討するよう続く。同ページはフォームをモーダルに入れない、操作なしに表示しない、アクションボタンがあるときは閉じるボタンを置かないことも挙げる。公式の Markdown 版（https://design.digital.go.jp/dads/dads-markdown-20261021.zip 、2026-10-21 版。リソースのページで配布）の同じ文書にも照合文字列があることを確かめた。zip のため公開ページで照合する

### S165 デジタル庁デザインシステム（インプットテキストのアクセシビリティ）

> 原則としてプレースホルダーテキストを使用しないでください。

- 媒体・日付: design.digital.go.jp/dads, 2025-08-20 更新
- URL: https://design.digital.go.jp/dads/components/input-text/accessibility/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 同ページは maxlength を使わない（かな入力の例）、コピー＆ペーストを無効にしないことも挙げる。公式の Markdown 版（https://design.digital.go.jp/dads/dads-markdown-20261021.zip 、2026-10-21 版。リソースのページで配布）の同じ文書にも照合文字列があることを確かめた。zip のため公開ページで照合する

### S166 デジタル庁デザインシステム（インプットテキストのアクセシビリティ）

> エラーテキストを、aria-live属性を用いてリアルタイムにスクリーンリーダーに通知してはいけません。

- 媒体・日付: design.digital.go.jp/dads, 2025-08-20 更新
- URL: https://design.digital.go.jp/dads/components/input-text/accessibility/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 入力中のエラーを逐一読み上げさせない。USWDS の role=alert（S155）はページ単位の通知で、対象が違う。公式の Markdown 版（https://design.digital.go.jp/dads/dads-markdown-20261021.zip 、2026-10-21 版。リソースのページで配布）の同じ文書にも照合文字列があることを確かめた。zip のため公開ページで照合する

### S167 デジタル庁デザインシステム（テーブルのアクセシビリティ）

> スクリーンリーダーは内容を線形に把握するという仕様上、セルとセル見出しの相互参照が多くなるような構造の場合に、閲覧が大変難しくなります。

- 媒体・日付: design.digital.go.jp/dads, 2026-10-14 更新
- URL: https://design.digital.go.jp/dads/components/table/accessibility/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 複雑な表を分ける理由。W3C の表の tips（S171）と一致。公式の Markdown 版（https://design.digital.go.jp/dads/dads-markdown-20261021.zip 、2026-10-21 版。リソースのページで配布）の同じ文書にも照合文字列があることを確かめた。zip のため公開ページで照合する

### S168 デジタル庁デザインシステム（ウェブアクセシビリティ方針）

> コンテンツ単位でのJIS試験通過をリリース判定の条件とし、AAに準拠できていない状態ではコンテンツを公開しません。

- 媒体・日付: design.digital.go.jp/dads, 2025-12-10 更新
- URL: https://design.digital.go.jp/dads/webaccessibility/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開前の試験を公開判定の条件にする運用の例。適合の表記・法的な位置づけは、この台帳の対象外。デジタル庁デザインシステム（β）。デジタル庁のコンテンツは公共データ利用規約（PDL1.0）で出典の記載が必要（https://www.digital.go.jp/copyright-policy で確認）。公式の Markdown 版（https://design.digital.go.jp/dads/dads-markdown-20261021.zip 、2026-10-21 版。リソースのページで配布）の同じ文書にも照合文字列があることを確かめた。zip のため公開ページで照合する

### S169 W3C WAI（Forms Tutorial, Form Instructions）

> While placeholder text provides valuable guidance for many users, placeholder text is not a replacement for labels.

- 媒体・日付: w3.org/WAI/tutorials, Updated 13 May 2024
- URL: https://www.w3.org/WAI/tutorials/forms/instructions/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: W3C の文書（W3C Document License / WAI サイトの利用条件）。短い逐語引用は可

### S170 W3C WAI（Forms Tutorial, User Notifications）

> error messages should be easy to understand and should provide simple instructions on how they can be resolved.

- 媒体・日付: w3.org/WAI/tutorials, Updated 03 June 2022
- URL: https://www.w3.org/WAI/tutorials/forms/notifications/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 送信後の全体の通知（見出し・ページタイトル・エラーの一覧）と入力欄ごとの通知を組み合わせる

### S171 W3C WAI（Tables Tutorial, Tips and Tricks）

> It’s usually better to break up complex tables into simple individual tables, each containing the data for one sub-topic.

- 媒体・日付: w3.org/WAI/tutorials, Updated 13 May 2024
- URL: https://www.w3.org/WAI/tutorials/tables/tips/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 複雑な表を分ける。狭い画面・拡大時に表の形が変わっても構造を保つことも同ページにある

### S172 W3C WAI（Images Tutorial, Complex Images）

> In these cases, a two-part text alternative is required.
>
> The first part is the short description to identify the image and, where appropriate, indicate the location of the long description.
>
> The second part is the long description – a textual representation of the essential information conveyed by the image.

- 媒体・日付: w3.org/WAI/tutorials, Updated 08 April 2026
- URL: https://www.w3.org/WAI/tutorials/images/complex/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: グラフ・図・地図は短い説明と長い説明の 2 段で代替する

### S173 W3C WAI（Captions/Subtitles）

> Captions are a text version of the speech and non-speech audio information needed to understand the content.
>
> They are displayed within the media player and are synchronized with the audio.
>
> Most are “closed captions” that can be hidden or shown by people watching the video.

- 媒体・日付: w3.org/WAI/media/av, Updated 17 September 2024
- URL: https://www.w3.org/WAI/media/av/captions/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 話し声以外の音も含める

### S174 W3C WAI（Description of Visual Information）

> Description explains visual information needed to understand the content.
>
> integrated description — description is included in the main speakers’ scripts
>
> alternative video — description is included in a separate video
>
> separate file — description is in a timed text file or synched audio file; must be supported by the media player
>
> description is naturally woven into the script for the main speaker(s)
>
> usually best for most training videos, yet not most stories

- 媒体・日付: w3.org/WAI/media/av, Updated 17 September 2024
- URL: https://www.w3.org/WAI/media/av/description/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 音声解説の作り方（台本に織り込む・別の動画・別ファイル）を比べる

### S175 W3C WAI（Designing for Web Accessibility）

> Provide a place in your design for alternatives for images and media.

- 媒体・日付: w3.org/WAI/tips/designing, Updated 16 July 2024
- URL: https://www.w3.org/WAI/tips/designing/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 書き起こしへのリンク・音声解説版・アイコンに添える文字・表や複雑な図の説明の置き場所を、見た目の設計の段階で用意する

### S176 Chartability（Frank Elavsky ほか）

> Chartability is a set of heuristics (testable questions) for ensuring that data visualizations, systems, and interfaces are accessible.

- 媒体・日付: chartability.fizz.studio（日付表示なし。関連論文 EuroVis 2022）
- URL: https://chartability.fizz.studio/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 図の評価の観点集。ライセンスは同ページで未確認。短い引用に留める

## 認知・動き・色覚・低視力

### S177 W3C（Making Content Usable for People with Cognitive and Learning Disabilities）

> Following this guidance is not required for conformance to WCAG

- 媒体・日付: W3C Working Group Note, 2021-04-29
- URL: https://www.w3.org/TR/coga-usable/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: WCAG の適合要件ではない補足文書であること。目的は 8 つ（例: Objective 6: Ensure Processes Do Not Rely on Memory）

### S178 W3C（Understanding SC 3.3.8 Accessible Authentication (Minimum)）

> memorizing a username and password places a very high or impossible burden upon people with certain cognitive disabilities

- 媒体・日付: w3.org/WAI/WCAG22/Understanding, Updated 2026-09-06
- URL: https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 認証画面の実務の観点だけで使う（基準の解釈・適合判断は、この台帳の対象外）。W3C の文書（W3C Document License / WAI サイトの利用条件）。短い逐語引用は可

### S179 W3C（Understanding SC 3.3.8）

> support for password entry by password managers to reduce memory need, and copy and paste to reduce the cognitive burden of re-typing.

- 媒体・日付: w3.org/WAI/WCAG22/Understanding, Updated 2026-09-06
- URL: https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: パスワード管理ツールと貼り付けを妨げない。GOV.UK（S151）・デジタル庁（S165）と一致

### S180 W3C（Accessibility Requirements for People with Low Vision, FPWD）

> If the place where they are reading (called “point of regard”) changes much, they lose their place and, especially with a small visible area and large text, it can be very difficult to find their place again.

- 媒体・日付: W3C First Public Working Draft, 2016-03-17
- URL: https://www.w3.org/TR/low-vision-needs/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 拡大時に読んでいる位置を失う問題。2016 年の草案で、勧告ではない。W3C の文書（W3C Document License / WAI サイトの利用条件）。短い逐語引用は可

### S181 W3C（Accessibility Requirements for People with Low Vision, FPWD）

> Dialog boxes and other such pop-up messages appear over the users point of regard.

- 媒体・日付: W3C First Public Working Draft, 2016-03-17
- URL: https://www.w3.org/TR/low-vision-needs/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ダイアログ・通知の出る位置。ラベルと入力欄・入力とフィードバックを近くに置くことも同節にある

### S182 W3C（Understanding SC 1.4.10 Reflow）

> 320 CSS pixels is equivalent to a starting viewport width of 1280 CSS pixels wide at 400% zoom.

- 媒体・日付: w3.org/WAI/WCAG22/Understanding, Updated 2026-10-04
- URL: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 拡大の確かめ方の数値（出典あり）。SmartHR（S247）は 1280×800 で 200% を基準にしており、目的が違う

### S183 W3C（Understanding SC 1.4.12 Text Spacing）

> Content is not required to use these text spacing values. The requirement is to ensure that when a user overrides the authored text spacing, content or functionality is not lost.

- 媒体・日付: w3.org/WAI/WCAG22/Understanding, Updated 2025-10-01
- URL: https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 利用者が字間・行間を上書きしても崩れないかを確かめる。同ページは日本語のように段落後の空きを使わない言語にも触れる

### S184 W3C（Understanding SC 1.4.11 Non-text Contrast）

> Low contrast controls are more difficult to perceive, and may be completely missed by people with a visual impairment.

- 媒体・日付: w3.org/WAI/WCAG22/Understanding, Updated 2026-10-04
- URL: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 部品の境界・状態表示のコントラストを確かめる理由

### S185 W3C（Understanding SC 1.4.1 Use of Color）

> People with partial sight often experience limited color vision, and many older users do not see color well.

- 媒体・日付: w3.org/WAI/WCAG22/Understanding, Updated 2025-09-16
- URL: https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 色だけで区別しない理由（色覚の型だけではない）

### S186 W3C（Understanding SC 2.3.3 Animation from Interactions）

> Vestibular (inner ear) disorder reactions include dizziness, nausea and headaches.

- 媒体・日付: w3.org/WAI/WCAG22/Understanding, Updated 2025-09-16
- URL: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 動きを減らす設定を確かめる理由。視差効果に触れる

### S187 James Craig（WebKit blog, Responsive Design for Motion）

> was added in iOS 7 to allow users the ability to disable parallax and app launching animations

- 媒体・日付: webkit.org/blog/7551, 2017-05-15
- URL: https://webkit.org/blog/7551/responsive-design-for-motion/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Reduce Motion の由来。iOS の公開 API は 2014 年、macOS は 2016 年と同記事にある。著作権は Apple / WebKit。短い引用に留める

### S188 Val Head（A List Apart）

> Even Apple discovered this the hard way when the animated transitions in iOS 7 started making some people sick.

- 媒体・日付: alistapart.com, 2015-09-08（2020-04-30 更新）
- URL: https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 本人の文。性質は論評（iOS 7 の遷移で気分が悪くなった人がいたという筆者の記述で、Apple の発表ではない）。著作権は A List Apart と筆者。短い引用に留める

### S189 デジタル庁デザインシステム（色のアクセシビリティ）

> こうした色弱の特性をもつ人は全国に約290万人いると推定されています。

- 媒体・日付: design.digital.go.jp/dads, 2026-08-05 更新
- URL: https://design.digital.go.jp/dads/foundations/color/accessibility/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 推定値の一次出典は同ページで未確認。CUDO（S190）は 320 万人以上としており、数値が一致しない。文字の大きさにかかわらず 4.5:1 を適用する方針も同ページにある。デジタル庁デザインシステム（β）。デジタル庁のコンテンツは公共データ利用規約（PDL1.0）で出典の記載が必要（https://www.digital.go.jp/copyright-policy で確認）。公式の Markdown 版（https://design.digital.go.jp/dads/dads-markdown-20261021.zip 、2026-10-21 版。リソースのページで配布）の同じ文書にも照合文字列があることを確かめた。zip のため公開ページで照合する

### S190 NPO 法人カラーユニバーサルデザイン機構（CUDO、色覚型と特徴）

> 「P型・D型」は、日本の場合は男性の約20人に1人、女性の約500人に1人、日本全体では320万人以上いるとされています。

- 媒体・日付: cudo.jp/?page_id=540（日付表示なし）
- URL: https://cudo.jp/?page_id=540
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 当事者団体による推定の紹介。調査の一次出典は同ページに無い。デジタル庁（S189）の約 290 万人と異なる。著作権は CUDO。短い引用に留める

## 障害のある利用者との評価と設計の引き継ぎ

### S191 W3C WAI（Involving Users in Evaluating Web Accessibility）

> Unfortunately many approach accessibility just as a checklist. This risks missing the real purpose of accessibility - the user experience.

- 媒体・日付: w3.org/WAI, Updated 30 April 2024（first published 2005-11）
- URL: https://www.w3.org/WAI/test-evaluate/involving-users/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: W3C の文書（W3C Document License / WAI サイトの利用条件）。短い逐語引用は可

### S192 W3C WAI（Involving Users in Evaluating Web Accessibility）

> Results from only a couple of people with disabilities cannot be generalized to apply to all people with similar disabilities or people with other disabilities.

- 媒体・日付: w3.org/WAI, Updated 30 April 2024
- URL: https://www.w3.org/WAI/test-evaluate/involving-users/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 少人数の結果を一般化しない

### S193 GOV.UK Service Manual（Running research sessions with people with disabilities）

> If your participants need to use assistive technology, ask them to bring it with them. This is because it’s hard to recreate someone’s personal settings on a different device.

- 媒体・日付: gov.uk/service-manual, published 2017-10-03
- URL: https://www.gov.uk/service-manual/user-research/running-research-sessions-with-people-with-disabilities
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 本人の機器と設定で試す理由。GOV.UK のページは Open Government Licence v3.0（ページ末尾の表示で確認）

### S194 GOV.UK Service Manual（Find user research participants）

> Finding disabled participants or participants who use assistive technology might take more time. You should allow up to a month to find participants.

- 媒体・日付: gov.uk/service-manual, published 2016-03-01・updated 2026-09-22
- URL: https://www.gov.uk/service-manual/user-research/find-user-research-participants
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 募集期間の目安（出典あり: 最大 1 か月）

### S195 GOV.UK Service Manual（Find user research participants）

> If you’re recruiting participants with less common cognitive disabilities, establish contact with organisations at least 6 to 8 weeks before usability testing.

- 媒体・日付: gov.uk/service-manual, updated 2026-09-22
- URL: https://www.gov.uk/service-manual/user-research/find-user-research-participants
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 認知障害のある参加者の募集の前倒し（出典あり: 6〜8 週間前）。同ページは謝礼を冒頭に渡すこと、介助者・タクシー・手話通訳の費用にも触れる

### S196 GOV.UK Service Manual（Find user research participants）

> However you should avoid:
>
> using internal disabled users to test the usability of external services or systems

- 媒体・日付: gov.uk/service-manual, updated 2026-09-22
- URL: https://www.gov.uk/service-manual/user-research/find-user-research-participants
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 避けることの一覧の 1 項目。同じ一覧に over relying on the same participants continuously across different research projects もある。障害を自認しない利用者がいることも同ページに記載

### S197 W3C（Making Content Usable for People with Cognitive and Learning Disabilities）

> Allow the participant to bring a caregiver, family member, or friend to attend with them.

- 媒体・日付: W3C Working Group Note, 2021-04-29
- URL: https://www.w3.org/TR/coga-usable/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 認知・学習障害のある参加者との検証の違い。後見人がいる場合は本人と後見人の両方から同意を得るとも記載。W3C の文書（W3C Document License / WAI サイトの利用条件）。短い逐語引用は可

### S198 GitHub Annotation Toolkit（README）

> Annotations are notes included in design projects that help make the unseen explicit.

- 媒体・日付: GitHub github/annotation-toolkit, commit d7ff0574
- URL: https://github.com/github/annotation-toolkit/blob/d7ff0574f2fa77447634484a2d6e6633a92ab771/README.md
- URL（原稿）: https://raw.githubusercontent.com/github/annotation-toolkit/d7ff0574f2fa77447634484a2d6e6633a92ab771/README.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。原稿は github/annotation-toolkit（LICENSE.md: CC-BY-4.0）

### S199 GitHub Annotation Toolkit（Annotation theory）

> When our team did an analysis of GitHub's issues in May 2024, we found that **48% of all of audit issues** can be prevented in design.

- 媒体・日付: GitHub github/annotation-toolkit, commit d7ff0574（2024 年 5 月の分析と記載）
- URL: https://github.com/github/annotation-toolkit/blob/d7ff0574f2fa77447634484a2d6e6633a92ab771/deep-dives/annotation-theory.md
- URL（原稿）: https://raw.githubusercontent.com/github/annotation-toolkit/d7ff0574f2fa77447634484a2d6e6633a92ab771/deep-dives/annotation-theory.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。GitHub 社内の監査結果の分析で、同文書は注釈で防げるのは 40% とも記す。引用の ** は原稿の太字の記法。照合は太字の内側の文字列で行った。社内データで、他社に一般化できる率ではない

### S200 GitHub Annotation Toolkit（Best practices for hand-off）

> If you only do one of these four things, do this one!

- 媒体・日付: GitHub github/annotation-toolkit, commit d7ff0574
- URL: https://github.com/github/annotation-toolkit/blob/d7ff0574f2fa77447634484a2d6e6633a92ab771/deep-dives/best-practices-for-hand-off.md
- URL（原稿）: https://raw.githubusercontent.com/github/annotation-toolkit/d7ff0574f2fa77447634484a2d6e6633a92ab771/deep-dives/best-practices-for-hand-off.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開ページの本文でも照合文字列を確認した。引き渡しの打ち合わせを設けることを最優先とする。同文書は注釈で根本的にアクセシブルでない設計は直らないとも述べる

## 歴史と障害の捉え方（ユニバーサルデザイン・インクルーシブデザイン）

### S201 W3C, Web Content Accessibility Guidelines 1.0（文書の状態）

> W3C Recommendation 5-May-1999 superseded 18 May 2021

- 媒体・日付: W3C Recommendation 5 May 1999（2021-05-18 に superseded）
- URL: https://www.w3.org/TR/WAI-WEBCONTENT/ / https://www.w3.org/TR/1999/WAI-WEBCONTENT-19990505
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 見出し（H2）の中の改行（br）をはさむ 2 行を空白でつないで引用した。時点情報・年号の根拠。WCAG 1.0 は 1999 年の勧告で、2021 年に置き換え済みの扱い。編者は Trace R&D Center 等（同ページ）。 ライセンス: W3C Document License（TR の仕様。末尾の permissive document license の表記）。短い逐語引用

### S202 W3C（WAI 発足の発表。Tim Berners-Lee の談話）

> it is critical that the Web be usable by anyone, regardless of individual capabilities and disabilities

- 媒体・日付: W3C プレスリリース「World Wide Web Consortium (W3C) Launches International Web Accessibility Initiative」、1997-04-07
- URL: https://www.w3.org/Press/WAI-Launch.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: WAI（Web Accessibility Initiative）発足の告知。同ページに「more than 750 million people with disabilities」という当時の推計もある（1997 年時点の W3C の記述。今の数値として使わない。現行の推計は S211）

### S203 W3C（WCAG 1.0）

> W3C Recommendation 5-May-1999

- 媒体・日付: Web Content Accessibility Guidelines 1.0、1999-05-05 勧告
- URL: https://www.w3.org/TR/WCAG10/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 同ページ冒頭に「superseded 18 May 2021」とあり、現在は廃止扱い

### S204 W3C（WCAG 2.0 勧告のプレスリリース）

> WCAG 2.0 can be more precisely tested, yet it allows Web developers more flexibility

- 媒体・日付: W3C プレスリリース、2008-12-11
- URL: https://www.w3.org/2008/12/wcag20-pressrelease.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 1.0 から 2.0 への転換理由（検査可能性と技術中立）を W3C 自身が述べた箇所。

### S205 W3C（WAI-ARIA 1.0）

> W3C Recommendation 20 March 2014

- 媒体・日付: Accessible Rich Internet Applications (WAI-ARIA) 1.0、2014-03-20 勧告
- URL: https://www.w3.org/TR/wai-aria-1.0/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 動的な UI に役割と状態を与える仕様が勧告になった年。以後の UI ライブラリの「WAI-ARIA に準拠」という主張の土台

### S206 UPIAS・The Disability Alliance（Fundamental Principles of Disability）

> it is society which disables physically impaired people. Disability is something imposed on top of our impairments

- 媒体・日付: 1975-11-22 の討議の記録（Leeds 大学 Disability Archive 所蔵の PDF）
- URL: https://disability-studies.leeds.ac.uk/wp-content/uploads/sites/40/library/UPIAS-fundamental-principles.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 障害の社会モデルの源流として引かれる文書。著作権は原著者側に残るとアーカイブが注記しているため、逐語は短く留める。「社会モデル」という語そのものの出どころは確かめていない

### S207 国連（障害者権利条約 前文 (e)）

> disability results from the interaction between persons with impairments and attitudinal and environmental barriers

- 媒体・日付: Convention on the Rights of Persons with Disabilities, Preamble（2006-12-13 採択）
- URL: https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities/preamble.html
- URL（原稿）: https://web.archive.org/web/20260212210950/https://social.desa.un.org/issues/disability/crpd/preamble
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 元の URL は直接取得で 403。Wayback は social.desa.un.org の新しい所在へ転送された時刻入りコピー。前文は「disability is an evolving concept」とも書く

### S208 国連（障害者権利条約 第 9 条 Accessibility）

> including information and communications technologies and systems

- 媒体・日付: 同条約 Article 9
- URL: https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities/article-9-accessibility.html
- URL（原稿）: https://web.archive.org/web/20251206023816/https://social.desa.un.org/issues/disability/crpd/article-9-accessibility
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 物理環境・交通と並べて情報通信技術への平等なアクセスを求める条文

### S209 外務省（障害者の権利に関する条約）

> 2014年1月20日に、批准書を寄託しました

- 媒体・日付: 外務省「障害者の権利に関する条約」
- URL: https://www.mofa.go.jp/mofaj/gaiko/jinken/index_shogaisha.html
- URL（原稿）: https://web.archive.org/web/20260111082411/https://www.mofa.go.jp/mofaj/gaiko/jinken/index_shogaisha.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 同ページによれば、条約は 2006-12-13 採択・2008-05-03 発効、日本は 2007-09-28 署名、2014-02-19 に日本について発効。直接取得は 403

### S210 e-Gov 法令検索（障害者基本法 第 2 条）

> 社会的障壁 障害がある者にとつて日常生活又は社会生活を営む上で障壁となるような社会における事物、制度、慣行、観念その他一切のものをいう

- 媒体・日付: 障害者基本法（昭和 45 年法律第 84 号）、e-Gov 法令 API の現行版
- URL: https://laws.e-gov.go.jp/api/1/lawdata/345AC1000000084
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 国内法で社会モデルの考え方を表す定義。この定義が入った改正の年は確かめていない（「未検証・伝聞」）。法令は著作権の対象外

### S211 WHO（Disability fact sheet）

> An estimated 1.3 billion people experience significant disability. This represents 16% of the world’s population

- 媒体・日付: WHO Fact sheet「Disability」、2023-03-07
- URL: https://www.who.int/news-room/fact-sheets/detail/disability-and-health
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 2023 年時点の WHO の推計。同ページは障害を健康状態と環境・個人の要因の相互作用（「results from the interaction between health conditions」）として説明する。照合語はアポストロフィの前までにした

### S212 NC State University Center for Universal Design（The Principles of Universal Design）

> The design of products and environments to be usable by all people, to the greatest extent possible, without the need for adaptation or specialized design.

- 媒体・日付: 「The Principles of Universal Design」Version 2.0、Copyright 1997 NC State University
- URL: https://projects.ncsu.edu/ncsu/design/cud/about_ud/udprinciplestext.htm
- URL（原稿）: https://web.archive.org/web/20171004210544/https://projects.ncsu.edu/ncsu/design/cud/about_ud/udprinciplestext.htm
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 7 原則の 1 つ目は Equitable Use。Wayback の 2017 年のコピーで照合した（元の URL の直接取得は試していない）。7 原則の利用条件の表示は取得ページで確かめていない

### S213 NC State University College of Design（Center for Universal Design）

> The Center for Universal Design is currently not active due to funding challenges

- 媒体・日付: NC State College of Design の研究所紹介ページ
- URL: https://design.ncsu.edu/research/center-for-universal-design/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 同ページによれば、センターは 1989 年設立、創設者は Ronald L. Mace。「ユニバーサルデザイン」の語の造語者が誰かは、このページでは確かめていない

### S214 Microsoft Inclusive Design（サイト）

> Inclusive Design is a methodology that enables and draws on the full range of human diversity

- 媒体・日付: inclusive.microsoft.design（トップページ）
- URL: https://inclusive.microsoft.design/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: サイト本文のライセンス表示は取得物の中で確かめていない（短い引用に留める）。同社の Toolkit（PDF）は CC BY-NC-ND のため逐語を使わず、「引用ではない参照」に要旨を置く

### S215 Inclusive Design Research Centre（OCAD University）

> Optimal inclusive design is best achieved through one-size-fit-one configurations

- 媒体・日付: IDRC「What is Inclusive Design」（旧サイト legacy.idrc.ocadu.ca）
- URL: https://legacy.idrc.ocadu.ca/about-the-idrc/49-resources/online-resources/articles-and-papers/443-whatisinclusivedesign
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「一人ひとりに合わせた構成」を重視し、分離された解決（Segregated solutions）は持続しないとする。ページの日付とライセンス表示は取得物で確かめていない

### S216 Inclusive Design Principles（Swan, Pouncey, Pickering, Watson）

> designing for the needs of people with permanent, temporary, situational, or changing disabilities

- 媒体・日付: inclusivedesignprinciples.info
- URL: https://inclusivedesignprinciples.info/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 7 原則の 1 つ目は「Provide comparable experience」。作成者の所属や公開年、ライセンス表示は取得物で確かめていない

### S217 Stanford Social Innovation Review（Angela Glover Blackwell「The Curb-Cut Effect」）

> in 1972 the city installed its first official

- 媒体・日付: SSIR、Winter 2017
- URL: https://ssir.org/articles/entry/the_curb_cut_effect
- 取得日: 2026-11-16
- 検証区分: A
- 備考: バークレー市の公式の縁石の切り下げが 1972 年、と記事が書く（文は「curb cut」へ続く）。記事は 1945 年のカラマズーにも触れる。著作権のある記事なので逐語は短く留める。「障害者のための設計が皆の役に立つ」という主張は著者の立論として扱う

## 批判・限界・オーバーレイ

### S218 W3C WAI（Accessibility, Usability, and Inclusion: チェックリスト化）

> Yet when designers, developers, and project managers approach accessibility as a checklist to meet these standards, the focus is only on the technical aspects of accessibility. As a result, the human interaction aspect is often lost, and accessibility is not achieved.

- 媒体・日付: W3C WAI「Accessibility, Usability, and Inclusion」
- URL: https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 標準の策定側がチェックリスト主義の限界を書いた箇所

### S219 W3C WAI（Accessibility, Usability, and Inclusion: ユーザビリティ研究の盲点）

> usability practice and research often does not consider the needs of people with disabilities

- 媒体・日付: W3C WAI「Accessibility, Usability, and Inclusion」
- URL: https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 同ページは「Keeping accessibility focused on disabilities encourages research」とも書き、アクセシビリティを使いやすさ一般に溶かさない理由を示す

### S220 W3C WAI（Accessibility, Usability, and Inclusion: 使いやすさの手法だけでは足りない）

> usability processes and user involvement alone cannot address all accessibility issues

- 媒体・日付: W3C WAI「Accessibility, Usability, and Inclusion」
- URL: https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 標準（技術要件）と利用者の関与の両方が要る、という WAI の立場

### S221 Overlay Fact Sheet（オーバーレイへの批判声明）

> No overlay product on the market can cause a website to become fully compliant with any existing accessibility standard and therefore cannot eliminate legal risk.

- 媒体・日付: overlayfactsheet.com（日付表示はページ内に見つからず）
- URL: https://overlayfactsheet.com/en/
- 取得日: 2026-11-16
- 検証区分: C
- 備考: 実務者が署名する批判声明。逐語は照合済み。ページ中の「In their own words」は利用者の投稿の引用で、声明の地の文ではないので事実として使わない。ページ内の数値（WebAIM 調査）は原典 S222 を引く。ライセンス表示はページ内に見つからず（未確認）

### S222 WebAIM（Survey of Web Accessibility Practitioners #3: オーバーレイの評価）

> A strong majority (67%) of respondents rate these tools as not at all or not very effective. Respondents with disabilities were even less favorable with 72%
>
> In January 2021, WebAIM conducted a survey of web accessibility practitioners. We received 758 valid responses to this survey.

- 媒体・日付: WebAIM、2021 年 1 月実施の実務者調査（回答 758 件）
- URL: https://webaim.org/projects/practitionersurvey3/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 自己選択の回答者による調査で、母集団の代表ではない。数値は「2021 年・実務者 758 人の回答」として使う

### S223 米連邦取引委員会 FTC（accessiBe への命令案）

> accessWidget did not make all user websites WCAG-compliant and these claims were therefore false, misleading, or unsubstantiated

- 媒体・日付: FTC プレスリリース、2025-01-03
- URL: https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-order-requires-online-marketer-pay-1-million-deceptive-claims-its-ai-product-could-make-websites
- URL（原稿）: https://web.archive.org/web/20260115065526/https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-order-requires-online-marketer-pay-1-million-deceptive-claims-its-ai-product-could-make-websites
- 取得日: 2026-11-16
- 検証区分: A
- 備考: FTC の申し立て（allegation）の記述であり、違法性は判断しない。命令案は 100 万ドルの支払いを含む。直接取得は 404 のため Wayback の時刻入りコピー

### S224 FTC（accessiBe への最終命令）

> The final order bars accessiBe from representing that its automated products can make any website WCAG-compliant
>
> The Federal Trade Commission has approved a final consent order against accessiBe Inc. and accessiBe Ltd.

- 媒体・日付: FTC プレスリリース、2025-04-22
- URL: https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million
- URL（原稿）: https://web.archive.org/web/20251210093640/https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「the Commission voted 3-0 to approve the final consent order」。命令の法的な意味は判断しない

### S225 Power, Freire, Petrie, Swallow（CHI 2012「Guidelines are only half of the story」）

> only 50.4% of the problems encountered by users were covered by Success Criteria in the Web Content Accessibility Guidelines 2.0 (WCAG 2.0)

- 媒体・日付: Proceedings of CHI 2012（ACM）。取得したのは firah.org に置かれた PDF
- URL: https://www.firah.org/upload/notices3/2012/2207676-2207736.pdf
- 取得日: 2026-11-16
- 検証区分: B
- 備考: 全盲の利用者 32 人・16 サイト・1383 件の問題の調査。第三者サイトの PDF なので B。2 段組の混ざりを避けるため `-layout` なしで抽出し直し、連続した箇所だけを照合した。対象は WCAG 2.0 と全盲の利用者に限られる

### S226 W3C WCAG WG wiki（Laura Carlson による S225 の検討）

> presents several usability issues as accessibility issues

- 媒体・日付: W3C WAI GL wiki「Review: Guidelines are only half of the story」
- URL: https://www.w3.org/WAI/GL/wiki/Review:_Guidelines_are_only_half_of_the_story
- 取得日: 2026-11-16
- 検証区分: C
- 備考: S225 への反論側の読み。wiki は作業部会の合意を必ずしも表さないとページ自体が断っている。S225 の数値を引くときはこの反論も併記する

### S227 Liz Jackson, Alex Haagaard, Rua Williams（Disability Dongle）

> designs or technologies “for” disabled people garner mainstream attention and accolades despite valid concerns disabled people have about them

- 媒体・日付: CASTAC「Platypus」ブログ、2022-04-19
- URL: https://blog.castac.org/2022/04/disability-dongle/
- 取得日: 2026-11-16
- 検証区分: C
- 備考: 「I created the term "Disability Dongle" in 2019」と Jackson が書く。2019 年の Medium の原投稿は 403（Wayback も 403）で未取得。ライセンス表示は取得物で確かめていない

### S228 Sarah Horton（Frontiers in Computer Science の意見論文）

> Empathy cannot be relied on to sustain quality attention to accessibility in technology companies and professionals.

- 媒体・日付: Front. Comput. Sci., 2021-04-28、「Empathy Cannot Sustain Action in Technology Accessibility」、doi:10.3389/fcomp.2021.617044
- URL: https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2021.617044/full
- 取得日: 2026-11-16
- 検証区分: C
- 備考: CC BY の意見論文。共感演習を組織の継続的な取り組みの代わりにしない、という立論

### S229 Bennett & Rosner（CHI 2019。S228 による二次引用）

> Empathy exercises of simulation or persona creation may help designers distance themselves from disabled people, framing the disabled identity as one distinct and non-overlapping with that of the designer.

- 媒体・日付: Cynthia L. Bennett, Daniela K. Rosner「The Promise of Empathy: Design, Disability, and Knowing the "Other"」CHI 2019。S228 に引用された文
- URL: https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2021.617044/full
- 取得日: 2026-11-16
- 検証区分: B
- 備考: Bennett & Rosner の言葉としては二次引用なので B。ACM DL の原典 PDF は 403 で未取得。readkong の転載は抽出が崩れており照合に使わない。make4all の PDF は別の論文（Motahar ら 2023）なので根拠にしない

## OSS・UI ライブラリの既定値

### S230 Radix Primitives（Dialog の文書）

> Focus is automatically trapped within modal.

- 媒体・日付: Radix Primitives 文書「Dialog」、radix-ui/website@402e749613ab2e7ab7139c65b0029842b0360f07（2026-10-07）、24 行
- URL: https://www.radix-ui.com/primitives/docs/components/dialog
- URL（原稿）: https://raw.githubusercontent.com/radix-ui/website/402e749613ab2e7ab7139c65b0029842b0360f07/data/primitives/docs/components/dialog.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ソース（radix-ui/primitives@eb3a2b7、dialog.tsx 342 行）でも、モーダル時に焦点の閉じ込めが開いている間有効。非モーダルでは閉じ込めない（383 行）。ライセンス MIT（GitHub API の判定。LICENSE ファイルの本文は未取得）

### S231 Radix Primitives（AlertDialog の文書。ソースとの食い違いあり）

> Event handler called when focus moves to the destructive action after

- 媒体・日付: Radix Primitives 文書「Alert Dialog」、radix-ui/website@402e749、235〜236 行（文は「opening」へ続く）
- URL: https://www.radix-ui.com/primitives/docs/components/alert-dialog
- URL（原稿）: https://raw.githubusercontent.com/radix-ui/website/402e749613ab2e7ab7139c65b0029842b0360f07/data/primitives/docs/components/alert-dialog.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 文書は「開いた後に焦点が破壊的な操作へ移る」と読めるが、ソース（radix-ui/primitives@eb3a2b7091293e27df8f9ba906632d8daa3d81a3、packages/react/alert-dialog/src/alert-dialog.tsx 113〜115 行）は開いたときに Cancel（cancelRef）へ焦点を移す。どちらが正しいとは決めず、食い違いとして両方を記録する。取得したソースでは Cancel に焦点を移し、これは APG（S059）の「最も破壊的でない操作」と合う。文書とソースはコミットも別で、描画して挙動を確かめてはいない

### S232 Radix Primitives（Toast の文書: ホットキーの発見しやすさ）

> It is up to you to ensure the discoverability of the hotkey

- 媒体・日付: Radix Primitives 文書「Toast」、radix-ui/website@402e749、106 行
- URL: https://www.radix-ui.com/primitives/docs/components/toast
- URL（原稿）: https://raw.githubusercontent.com/radix-ui/website/402e749613ab2e7ab7139c65b0029842b0360f07/data/primitives/docs/components/toast.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 既定のホットキーは F8（文書 129 行）、表示時間の既定は 5000 ミリ秒（文書 61 行）。ホットキーを利用者にどう知らせるかは作り手に任されている

### S233 React Aria（Toast の文書: 最短の表示時間）

> For accessibility, toasts should have a minimum timeout of 5 seconds

- 媒体・日付: React Aria 文書「Toast」、adobe/react-spectrum@360e35170568dfc99a2baaa78e6b7bdd36458d91（2026-11-13）、130 行
- URL: https://react-aria.adobe.com/Toast
- URL（原稿）: https://raw.githubusercontent.com/adobe/react-spectrum/360e35170568dfc99a2baaa78e6b7bdd36458d91/packages/dev/s2-docs/pages/react-aria/Toast.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「5 秒」はこのライブラリの目安であり、WCAG の数値ではない。続けて「Timers automatically pause when the user focuses or hovers over a toast.」とある。ライセンス Apache-2.0（GitHub API の判定）

### S234 MUI（Modal の文書）

> It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.

- 媒体・日付: MUI 文書「Modal」、mui/material-ui@476b86779d62c937e36253db29c9d7475861889f（2026-11-14）、20 行
- URL: https://mui.com/material-ui/react-modal/
- URL（原稿）: https://raw.githubusercontent.com/mui/material-ui/476b86779d62c937e36253db29c9d7475861889f/docs/data/material/components/modal/modal.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 同文書は名前付けについて「Be sure to add aria-labelledby」（112 行）と、作り手に任せている。ライセンス MIT（GitHub API の判定）

### S235 MUI（Tabs の文書: 手動切り替え）

> The components implement keyboard navigation using the "manual activation" behavior

- 媒体・日付: MUI 文書「Tabs」、mui/material-ui@476b86779d62c937e36253db29c9d7475861889f（2026-11-14）、185 行
- URL: https://mui.com/material-ui/react-tabs/
- URL（原稿）: https://raw.githubusercontent.com/mui/material-ui/476b86779d62c937e36253db29c9d7475861889f/docs/data/material/components/tabs/tabs.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 自動切り替えは selectionFollowsFocus で選ぶ（186 行）。Radix・React Aria・Headless UI の既定（自動）と逆

### S236 MUI（Snackbars の文書: Esc で閉じる）

> The user should be able to dismiss Snackbars by pressing Escape

- 媒体・日付: MUI 文書「Snackbars」、mui/material-ui@476b86779d62c937e36253db29c9d7475861889f（2026-11-14）、132 行
- URL: https://mui.com/material-ui/react-snackbar/
- URL（原稿）: https://raw.githubusercontent.com/mui/material-ui/476b86779d62c937e36253db29c9d7475861889f/docs/data/material/components/snackbars/snackbars.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 原文では「Escape」が kbd 要素で囲まれている。照合語は「pressing」まで。自動で閉じる時間の既定は null（自動では閉じない。Snackbar.d.ts 104 行）

### S237 Bootstrap（Dropdowns の文書: ARIA の menu を付けない）

> Bootstrap does not expect (nor automatically add) any of the `role` and `aria-` attributes required for true ARIA menus.

- 媒体・日付: Bootstrap 5.3 文書「Dropdowns」、twbs/bootstrap タグ v5.3.9（349bdb50b8ab6782248c1b296443087cd7222ead）、17 行
- URL: https://getbootstrap.com/docs/5.3/components/dropdowns/
- URL（原稿）: https://raw.githubusercontent.com/twbs/bootstrap/349bdb50b8ab6782248c1b296443087cd7222ead/site/src/content/docs/components/dropdowns.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 理由として、ドロップダウンに検索欄やログインフォームなども入れられる汎用部品だから、と書く。矢印キーでの移動と Esc での閉じは備える（19 行）。原文の abbr 要素は照合時に除いている。main ブランチは v6 の開発中（v6.0.0-alpha.1 あり）なので、最新の安定版タグ v5.3.9 に固定した。ライセンス MIT（GitHub API の判定）

### S238 Bootstrap（Toasts の文書: ライブ領域は先に置く）

> If you dynamically generate both at the same time and inject them into the page, they will generally not be announced by assistive technologies.

- 媒体・日付: Bootstrap 5.3 文書「Toasts」、v5.3.9、265 行
- URL: https://getbootstrap.com/docs/5.3/components/toasts/
- URL（原稿）: https://raw.githubusercontent.com/twbs/bootstrap/349bdb50b8ab6782248c1b296443087cd7222ead/site/src/content/docs/components/toasts.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 直前の文は「the live region needs to be present in the markup before the toast is generated or updated」。role と aria-live の選び分けは作り手に任せる（267 行）。表示時間の既定は 5000 ミリ秒・自動で消える（329 行、js/src/toast.js 43〜44 行）

### S239 Bootstrap（Modal の文書: autofocus 属性）

> the `autofocus` HTML attribute has no effect in Bootstrap modals

- 媒体・日付: Bootstrap 5.3 文書「Modal」、v5.3.9、16 行
- URL: https://getbootstrap.com/docs/5.3/components/modal/
- URL（原稿）: https://raw.githubusercontent.com/twbs/bootstrap/349bdb50b8ab6782248c1b296443087cd7222ead/site/src/content/docs/components/modal.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 原文はリンク記法の中にある語なので、照合語は「has no effect in Bootstrap modals」にした。同文書は一度に開けるモーダルは 1 つ（13 行）、名前付けの aria-labelledby は作り手が付ける（520 行）と書く

### S240 Bootstrap（Navs and tabs の文書: 矢印キーで切り替わる）

> Once the currently active tab has focus, the cursor keys activate the previous/next tab.

- 媒体・日付: Bootstrap 5.3 文書「Navs and tabs」、v5.3.9、536 行
- URL: https://getbootstrap.com/docs/5.3/components/navs-tabs/
- URL（原稿）: https://raw.githubusercontent.com/twbs/bootstrap/349bdb50b8ab6782248c1b296443087cd7222ead/site/src/content/docs/components/navs-tabs.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 自動切り替え。パネル自体を焦点可能にするかは作り手に任せる（539 行）。見た目がタブでも、ナビゲーションには tablist の役割を付けないよう注意している（240 行）

### S241 shadcn/ui（Toast の文書: 非推奨）

> The toast component has been deprecated. Use the sonner component instead.

- 媒体・日付: shadcn/ui 文書「Toast」（radix 版）、shadcn-ui/ui@e62c9435fff729a175f38983dee73b2cb4f6a069（2026-11-13）、8 行
- URL: https://ui.shadcn.com/docs/components/radix/toast
- URL（原稿）: https://raw.githubusercontent.com/shadcn-ui/ui/e62c9435fff729a175f38983dee73b2cb4f6a069/apps/v4/content/docs/components/radix/toast.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 原文の「sonner」はリンク記法の中なので、照合語は「Use the」まで。トーストの既定値は Sonner（emilkowalski/sonner@8e4662b）に依る（`library-defaults.md`）。

### S242 shadcn/ui（Data Table の文書: 部品ではなく手引き）

> It doesn't make sense to combine all of these variations into a single component

- 媒体・日付: shadcn/ui 文書「Data Table」（radix 版）、shadcn-ui/ui@e62c9435fff729a175f38983dee73b2cb4f6a069（2026-11-13）、22 行
- URL: https://ui.shadcn.com/docs/components/radix/data-table
- URL（原稿）: https://raw.githubusercontent.com/shadcn-ui/ui/e62c9435fff729a175f38983dee73b2cb4f6a069/apps/v4/content/docs/components/radix/data-table.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 表は 1 つの部品として配らず、作り方の手引きとして示す、という方針。そのため並べ替えの見出しの例に aria-sort が無い（`library-defaults.md` の不在の記録）。照合語はアポストロフィの後から

### S243 Headless UI（README の自己紹介）

> completely unstyled, fully accessible

- 媒体・日付: tailwindlabs/headlessui@eea57cf46fd6767ed1059012f7073b88eb159fba（2026-04-13）、packages/@headlessui-react/README.md、6 行
- URL: https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-react
- URL（原稿）: https://raw.githubusercontent.com/tailwindlabs/headlessui/eea57cf46fd6767ed1059012f7073b88eb159fba/packages/%40headlessui-react/README.md
- 取得日: 2026-11-16
- 検証区分: C
- 備考: ライブラリ自身の主張なので C。「fully accessible」を事実として使わない。文書サイト（headlessui.com）の原稿はリポジトリに無く、ソースだけを読んだ。最新リリースは @headlessui/react v2.2.10

## 作り方の進め方

### S244 Sarah Gibbons（Nielsen Norman Group）

> It is nearly impossible to improve a design without feedback from others. Their input helps you avoid mistakes and thus create higher quality work.

- 媒体・日付: Design Critiques: Encourage a Positive Culture to Improve Products（NN/g の記事、2016-10-23）
- URL: https://www.nngroup.com/articles/design-critiques/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 批評の目的。Jen の「批評の欠如」批判への実務側の答えの一つ

### S245 Hikaru Sudo（Goodpatch）

> 目的があいまいなまま進めてしまうと収束が難しくなり、場当たり的なピボットを繰り返して無駄なコストを払うことにもなりかねません。

- 媒体・日付: 生成AIが作るプロトタイプは、本当にサービスづくりの近道になるのか？
- URL: https://goodpatch.com/blog/2026-08-ai-prototype
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 目的（誰に・どんな課題・どうなるか）を仮説でも先に言葉にしておくと、収束の判断軸になる、という主張

## 引用ではない参照（要旨のみ）

逐語の引用を載せない項目（要旨のみ）。利用条件で逐語引用できないもの（SmartHR Design System）と、ソースのコードコメントの要旨。番号は本体と同じ連番。

### S246 SmartHR Design System（アクセシビリティのテスト）

- 要旨（逐語引用なし）: はじめて確かめるときは、サイトの中から最も確かめやすそうなページを 1 つ選んで始めるよう勧める（自社の確かめ方の手引き）。
- 媒体・日付: GitHub kufu/smarthr-design-system, commit 67705fce
- URL: https://smarthr.design/accessibility/guidelines/testing/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/67705fce99d87a0814c0bec403654c5e2164f7aa/src/content/articles/accessibility/guidelines/testing.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/ ）は、再配布を目的とする利用と、提供コンテンツを SmartHR Design System 以外のサイトに掲載・配布することを NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。

### S247 SmartHR Design System（ブラウザのズーム）

- 要旨（逐語引用なし）: ブラウザのズームで確かめるとき、対象の画面サイズが決まっていなければ 1280×800 px で確かめるよう定める。
- 媒体・日付: GitHub kufu/smarthr-design-system, commit 67705fce
- URL: https://smarthr.design/accessibility/guidelines/browser-zoom/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/67705fce99d87a0814c0bec403654c5e2164f7aa/src/content/articles/accessibility/guidelines/browser-zoom.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリ（kufu/smarthr-design-system）に LICENSE ファイルが無く、文書サイトの利用規約（https://smarthr.design/terms/ ）は、再配布を目的とする利用と、提供コンテンツを SmartHR Design System 以外のサイトに掲載・配布することを NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。ズーム 200%・文字サイズ 2 倍で確かめる社内基準の前提の画面サイズ。

### S248 React Aria（useTableColumnHeader のコメント: TalkBack と aria-sort）

- 要旨（逐語引用なし）: React Aria の表の列見出しの実装は、Android の TalkBack が aria-sort に対応していないという判断から、並べ替えの状態を aria-describedby の説明でも渡している（コメントの要旨）。
- 媒体・日付: adobe/react-spectrum@360e351、packages/react-aria/src/table/useTableColumnHeader.ts、101 行
- URL: https://github.com/adobe/react-spectrum/blob/360e35170568dfc99a2baaa78e6b7bdd36458d91/packages/react-aria/src/table/useTableColumnHeader.ts
- URL（原稿）: https://raw.githubusercontent.com/adobe/react-spectrum/360e35170568dfc99a2baaa78e6b7bdd36458d91/packages/react-aria/src/table/useTableColumnHeader.ts
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ソースのコメントであり、TalkBack の対応状況を独立に確かめたものではない（取得時点のライブラリ側の判断）。並べ替えの変化は useTable.ts 141 行で読み上げ（assertive）される。ソースのコードコメント（開発者が実装の意図を書いたメモで、公開の文書の文ではない）のため、逐語の引用をやめて要旨にした。要旨は本 skill の言葉。照合は短い照合語で、固定コミットの原稿に対して行った。

### S249 MUI（Modal.d.ts: 焦点の戻しを切る設定への注意）

- 要旨（逐語引用なし）: MUI の Modal の型定義は、disableAutoFocus を true にするとモーダルがスクリーンリーダーなどの支援技術から使いにくくなるとして、通常は true にしないよう注意している（コメントの要旨）。
- 媒体・日付: mui/material-ui@476b867、packages/mui-material/src/Modal/Modal.d.ts、64 行
- URL: https://github.com/mui/material-ui/blob/476b86779d62c937e36253db29c9d7475861889f/packages/mui-material/src/Modal/Modal.d.ts
- URL（原稿）: https://raw.githubusercontent.com/mui/material-ui/476b86779d62c937e36253db29c9d7475861889f/packages/mui-material/src/Modal/Modal.d.ts
- 取得日: 2026-11-16
- 検証区分: A
- 備考: disableAutoFocus の説明。同じ注意が 72 行（disableEnforceFocus）にもある。既定はいずれも false（＝焦点管理は有効）。ソースのコードコメント（開発者が実装の意図を書いたメモで、公開の文書の文ではない）のため、逐語の引用をやめて要旨にした。要旨は本 skill の言葉。照合は短い照合語で、固定コミットの原稿に対して行った。

### S250 Ant Design（useSorter のコメント: 並べ替えの読み上げ）

- 要旨（逐語引用なし）: Ant Design の表の並べ替えの実装は、どの列で並べ替えているかをスクリーンリーダーの利用者に伝えるために、並べ替え中の列に aria-sort を付けている（コメントの要旨）。
- 媒体・日付: ant-design/ant-design@80e9a95bf1db1210765371628e276c673c5014e9（2026-11-16）、components/table/hooks/useSorter.tsx、245 行
- URL: https://github.com/ant-design/ant-design/blob/80e9a95bf1db1210765371628e276c673c5014e9/components/table/hooks/useSorter.tsx
- URL（原稿）: https://raw.githubusercontent.com/ant-design/ant-design/80e9a95bf1db1210765371628e276c673c5014e9/components/table/hooks/useSorter.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 並べ替え中の列にだけ aria-sort（ascending／descending）を付け（247 行）、並べ替えできる列には aria-description を付ける（250 行）。最新リリースは 6.7.0。ライセンス MIT（GitHub API の判定）。ソースのコードコメント（開発者が実装の意図を書いたメモで、公開の文書の文ではない）のため、逐語の引用をやめて要旨にした。要旨は本 skill の言葉。照合は短い照合語で、固定コミットの原稿に対して行った。

## APG の個別パターン

`w3c/aria-practices` の固定コミット（f14b2490a6728cda85fd7feafbd148b3c3eaf038、2026-11-13）の各パターンの原稿から、キー操作と役割の要点を逐語の短い引用で載せる。APG は規範ではない（S055）。

### S251 APG Tabs Pattern（キーボード操作と役割・状態）

> When focus moves into the tab list, places focus on the active tab element.
>
> When the tab list contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is the tabpanel unless the first element containing meaningful content inside the tabpanel is focusable.
>
> Left Arrow: moves focus to the previous tab. If focus is on the first tab, moves focus to the last tab.
>
> Home (Optional): Moves focus to the first tab.
>
> End (Optional): Moves focus to the last tab.
>
> It is recommended that tabs activate automatically when they receive focus as long as their associated tab panels are displayed without noticeable latency.
>
> When the tabpanel does not contain any focusable elements or the first element with content is not focusable, the tabpanel should set tabindex="0" to include it in the tab sequence of the page.
>
> The element that serves as the container for the set of tabs has role tablist.
>
> Each element that serves as a tab has role tab and is contained within the element with role tablist.
>
> Each element that contains the content panel for a tab has role tabpanel.
>
> Each element with role tab has the property aria-controls referring to its associated tabpanel element.
>
> The active tab element has the state aria-selected set to true and all other tab elements have it set to false.
>
> Each element with role tabpanel has the property aria-labelledby referring to its associated tab element.
>
> Right Arrow: Moves focus to the next tab. If focus is on the last tab element, moves focus to the first tab.

- 媒体・日付: W3C WAI, APG（w3c/aria-practices@f14b2490、2026-11-13）
- URL: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
- URL（原稿）: https://raw.githubusercontent.com/w3c/aria-practices/f14b2490a6728cda85fd7feafbd148b3c3eaf038/content/patterns/tabs/tabs-pattern.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Tab の順路（タブの列に入る・タブパネルへ出る）、矢印・Home の動き、自動の切り替えの推奨条件、タブパネルの tabindex、tablist・tab・tabpanel の役割と aria-controls・aria-selected・aria-labelledby。Home・End は任意（Optional）と書かれている。APG は規範ではない（S055）。ライセンス: GitHub の判定は NOASSERTION で、W3C 文書一般の前提では W3C Document License（S059 の備考と同じ扱い）。短い逐語引用にとどめる

### S252 APG Menu Button Pattern（キーボード操作と役割・状態）

> Enter: opens the menu and places focus on the first menu item.
>
> Space: Opens the menu and places focus on the first menu item.
>
> The element that opens the menu has role button.
>
> The element with role button has aria-haspopup set to either menu or true.
>
> When the menu is displayed, the element with role button has aria-expanded set to true.
>
> When the menu is hidden, aria-expanded is set to false.
>
> The element that contains the menu items displayed by activating the button has role menu.

- 媒体・日付: W3C WAI, APG（w3c/aria-practices@f14b2490、2026-11-13）
- URL: https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/
- URL（原稿）: https://raw.githubusercontent.com/w3c/aria-practices/f14b2490a6728cda85fd7feafbd148b3c3eaf038/content/patterns/menu-button/menu-button-pattern.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: メニューボタンの開き方と、button・aria-haspopup・aria-expanded・menu の役割。メニューが開いた後の操作は S253。APG は規範ではない（S055）。ライセンス: GitHub の判定は NOASSERTION で、W3C 文書一般の前提では W3C Document License（S059 の備考と同じ扱い）。短い逐語引用にとどめる

### S253 APG Menu and Menubar Pattern（キーボード操作と役割・状態）

> When a menu opens, or when a menubar receives focus, keyboard focus is placed on the first item.
>
> Tab and Shift + Tab do not move focus among the items in the menu.
>
> Escape: Close the menu that contains focus and return focus to the element or context, e.g., menu button or parent menuitem, from which the menu was opened.
>
> Disabled menu items are focusable but cannot be activated.
>
> The element serving as the menu has a role of either menu or menubar.
>
> When a menu item is disabled, aria-disabled is set to true.

- 媒体・日付: W3C WAI, APG（w3c/aria-practices@f14b2490、2026-11-13）
- URL: https://www.w3.org/WAI/ARIA/apg/patterns/menubar/
- URL（原稿）: https://raw.githubusercontent.com/w3c/aria-practices/f14b2490a6728cda85fd7feafbd148b3c3eaf038/content/patterns/menubar/menu-and-menubar-pattern.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: メニューが開いたときの焦点、Tab が項目の間を動かないこと、Esc、無効な項目が焦点を受けること。APG の menu は、OS のメニューのように振る舞うウィジェット（サイトのナビゲーションの話ではない）。APG は規範ではない（S055）。ライセンス: GitHub の判定は NOASSERTION で、W3C 文書一般の前提では W3C Document License（S059 の備考と同じ扱い）。短い逐語引用にとどめる

### S254 APG Combobox Pattern（キーボード操作と役割・状態）

> Tab: The combobox is in the page Tab sequence.
>
> Escape: Dismisses the popup if it is visible.
>
> Alt + Down Arrow (Optional): If the popup is available but not displayed, displays the popup without moving focus.
>
> The element that serves as an input and displays the combobox value has role combobox.
>
> The combobox element has aria-controls set to a value that refers to the element that serves as the popup.
>
> The popup is an element that has role listbox, tree, grid, or dialog.
>
> When the combobox popup is not visible, the element with role combobox has aria-expanded set to false.
>
> When a descendant of a listbox, grid, or tree popup is focused, DOM focus remains on the combobox and the combobox has aria-activedescendant set to a value that refers to the focused element within the popup.

- 媒体・日付: W3C WAI, APG（w3c/aria-practices@f14b2490、2026-11-13）
- URL: https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
- URL（原稿）: https://raw.githubusercontent.com/w3c/aria-practices/f14b2490a6728cda85fd7feafbd148b3c3eaf038/content/patterns/combobox/combobox-pattern.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: コンボボックスの Tab の順路、Esc、Alt + Down Arrow、combobox の役割・aria-controls・aria-expanded・aria-activedescendant、ポップアップの役割。APG は規範ではない（S055）。ライセンス: GitHub の判定は NOASSERTION で、W3C 文書一般の前提では W3C Document License（S059 の備考と同じ扱い）。短い逐語引用にとどめる

### S255 APG Disclosure (Show/Hide) Pattern（キーボード操作と役割・状態）

> Enter: activates the disclosure control and toggles the visibility of the disclosure content.
>
> Space: activates the disclosure control and toggles the visibility of the disclosure content.
>
> The element that shows and hides the content has role button.
>
> When the content is visible, the element with role button has aria-expanded set to true.
>
> When the content area is hidden, it is set to false.

- 媒体・日付: W3C WAI, APG（w3c/aria-practices@f14b2490、2026-11-13）
- URL: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
- URL（原稿）: https://raw.githubusercontent.com/w3c/aria-practices/f14b2490a6728cda85fd7feafbd148b3c3eaf038/content/patterns/disclosure/disclosure-pattern.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 開閉のボタンの操作と、button・aria-expanded。APG は規範ではない（S055）。ライセンス: GitHub の判定は NOASSERTION で、W3C 文書一般の前提では W3C Document License（S059 の備考と同じ扱い）。短い逐語引用にとどめる

### S256 APG Tree View Pattern（キーボード操作と役割・状態）

> Right arrow: When focus is on a closed node, opens the node; focus does not move.
>
> Down Arrow: Moves focus to the next node that is focusable without opening or closing a node.
>
> All tree nodes are contained in or owned by an element with role tree.
>
> Each element serving as a tree node has role treeitem.
>
> Each element with role treeitem that serves as a parent node has aria-expanded set to false when the node is in a closed state and set to true when the node is in an open state.

- 媒体・日付: W3C WAI, APG（w3c/aria-practices@f14b2490、2026-11-13）
- URL: https://www.w3.org/WAI/ARIA/apg/patterns/treeview/
- URL（原稿）: https://raw.githubusercontent.com/w3c/aria-practices/f14b2490a6728cda85fd7feafbd148b3c3eaf038/content/patterns/treeview/treeview-pattern.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ツリーの矢印の操作と、tree・treeitem・aria-expanded の役割・状態。APG は規範ではない（S055）。ライセンス: GitHub の判定は NOASSERTION で、W3C 文書一般の前提では W3C Document License（S059 の備考と同じ扱い）。短い逐語引用にとどめる

## 補足の参照（引用しないもの）

番号を振らず、事実の根拠や要旨だけに使う参照。いずれも 2026-11-16 に取得した。

| 項目 | 内容（本 skill の要旨） | URL |
|------|------------------------|-----|
| Carbon のメニュー | Carbon のメニューは、アプリのメニューとして role=menu を使う。サイトのナビゲーションに role=menu を使わないという Pickering（S066）・Roselli（S067）の論評とは対象が違う | https://carbondesignsystem.com/components/menu/accessibility/ |
| W3C の書き起こし | 基本の書き起こしと、視覚情報を含む説明つきの書き起こしの違い（Updated 17 September 2024） | https://www.w3.org/WAI/media/av/transcripts/ |
| Scott O'Hara（2019） | `dialog` 要素の使用に慎重だった時期の記事。2023 年の記事（S077）と立場が変わった | https://www.scottohara.me/blog/2019/03/05/open-dialog.html |
| WebAIM の VoiceOver・JAWS の記事 | VoiceOver は Control＋Option を修飾キーにする。慣れるまで数時間かかる見込みと記載（VoiceOver 2026-06-17 更新、JAWS 2020-09-28 更新） | https://webaim.org/articles/voiceover/ ・ https://webaim.org/articles/jaws/ |
| TalkBack・VoiceOver（iPhone）のジェスチャー | 複数指のジェスチャーは対応端末と版に依存する。端末差があるので実機で確かめる | https://support.google.com/accessibility/android/answer/6283677?hl=en ・ https://support.apple.com/guide/iphone/learn-voiceover-gestures-iph3e2e2281/ios |
| WebAIM Screen Reader User Survey #10 | 2024 年 1 月の調査。#11（S119）との比較に使う | https://webaim.org/projects/screenreadersurvey10/ |
| Microsoft Inclusive Design Toolkit | 障害を「人と環境の不一致」として捉える考え方と、恒久的・一時的・状況的の 3 つを並べる Persona Spectrum。CC BY-NC-ND のため、逐語・翻訳・図の転載をしない | https://download.microsoft.com/download/b/0/d/b0d4bf87-09ce-4417-8f28-d60703d672ed/inclusive_toolkit_manual_final.pdf |
| ETSI EN 301 549・ISO/IEC 40500・JIS X 8341-3 の規格本文 | 本文を引用しない（ETSI は著作権表示が複製を禁じる。ISO は取得時に HTTP 403。JIS は転載不可）。WCAG 2.2 の版との関係は S041 と WAIC の記述で示す | - |

## 未検証・伝聞（SKILL.md では事実・引用として使わない）

使う場合は「未確認」と明記する。

| 項目 | 状況 |
|------|------|
| APG の「ARIA を使ったページは使わないページより平均 41% 多くの誤りがある」という趣旨の記述 | 2026-11-16 時点の APG Read Me First（S052・S053・S054）には無い。WebAIM Million の数値として流通するもので、一次の出典を確認できていない |
| JIS X 8341-3 改正版の公示の有無と時期 | 未確認。WAIC は改正原案作成委員会の設置を告知し（S098）、2026-06 時点で「改正を検討しています」と書く（S099）。2027〜2028 年の公示を見込む民間の記事は、一次資料で確かめていない |
| EN 301 549 V4.1.1 の EU 官報での整合規格としての引用 | 未確認。EAA の推定適合が V4.1.1 に移ったかは言えない |
| 「ウェブアクセシビリティ対応が 2024 年 4 月から法的義務になった」という言い方 | 一次資料と食い違う。合理的配慮の提供が事業者の義務になった（S081・S082）のであり、ウェブの事前の対応は環境の整備として努力義務（S079・S086・S088）。この言い方を見たら訂正の対象とする |
| 改正法の成立の時期 | 内閣府のページ（S085）は「令和３年５月」改正と書き、法令データの公布日は令和三年六月四日（S083）。成立日と公布日の違いとみられるが、国会の議決日は照合していない |
| ADA Title II の 2026 年の暫定最終規則より後の改正・訴訟の状況 | 未確認（S108 は 2026-04-20 まで） |
| 支援技術ごとの読み上げの差（status・alert・dialog の実際の挙動） | 版と日付つきの記録は S122・S127・S128 だけ。それ以外は未確認 |
| 自動検査ツールで見つかるのは問題の約 30%（20〜30%） | 広く流通するが、一次出典を確認できていない。Deque の地の文が通説の存在を伝えるだけ（S133）。GDS の 29% は「どのツールも拾えなかった割合」で、意味が違う（S129） |
| 自動検査で 57% 見つかる | Deque の自社データ・件数ベースの主張（S132）。第三者の再現は確認していない。Roselli（S134）は手動確認がツールの約 7.5 倍の課題を見つけたとする |
| アクセシビリティのオーバーレイ（後付けのスクリプト）で適合できる | 批判側（S221・S222・S224）に偏っている。提供側の言い分は取得していない |
| オーバーレイの訴訟件数や割合の検索要約にだけ現れた数値（4,928 件、22.6%、1,427 件など） | 出典ページで確かめていないので使わない |
| Overlay Fact Sheet の利用者投稿の数値（「30%」など） | 声明の地の文ではないので使わない |
| 日本のスクリーンリーダー利用は PC-Talker・NVDA 日本語版が多い | 日本の利用比率の一次データを取得していない。WebAIM #11 のアジアの数値（NVDA 77.4%）は日本だけの数値ではない |
| 色覚の型を持つ男性は 5%、女性は 0.2% | CUDO の「約 20 人に 1 人・約 500 人に 1 人」（S190）を百分率にした言い換えで、原文の表記ではない。一次の調査は未確認 |
| 「Nothing About Us Without Us」の出どころ | 国連のページが 403。特定の人物・団体の言葉として書かない |
| 「医学モデル」「社会モデル」の語の出どころ | 一次資料を取得していない。UPIAS の文（S206）と権利条約（S207）は、障害を環境との相互作用で捉える見方の根拠として示すにとどめる |
| Ronald L. Mace が「ユニバーサルデザイン」の語を造ったこと | 未確認（S213 は設立の経緯まで） |
| ADA の成立年（1990 年）・Section 508 が 1986 年に加わったこと・Robles の上告不受理（2019 年）・NFB と Target の和解 | 未確認（取得したページに無い、または取得できなかった） |
| ISO/IEC 40500 の 2025 年版の内容 | ISO のページが 403。W3C WAI の記述（S041）を根拠にし、ISO のページは根拠にしない |
| Disability Dongle の 2019 年の原投稿・Bennett & Rosner の原典 | 原投稿は 403（Wayback も 403）、原典の ACM DL は 403。S227 は 2022 年の記事、S229 は S228 による二次引用 |
| 共感演習（障害の疑似体験）の効果に関する一次研究 | 取得していない |
| 障害者基本法に「社会的障壁」の定義が入った改正の年 | 未確認（S210 は現行条文のみ） |

## 確認できなかったもの

**取得できなかった・別経路で取ったもの**

- EUR-Lex 本体は HTTP 202 で本文が空。Wayback の保存コピーで照合した（S104・S105）
- ISO のページは HTTP 403。ETSI は著作権表示のため引用していない
- 改正法（令和三年法律第五十六号）の単体の法令データと施行期日の政令は、e-Gov に無かった。現行の法令データに含まれる附則（S083）と、内閣府掲載の政令の PDF（S084）で照合した
- 総務省の旧ガイドラインの URL は 404。ポータルの 2024 年版 PDF で照合した（S091・S092）
- 内閣府の基本方針の HTML 版は 404。PDF 版で照合した（S086・S087）
- Material Design 3（m3.material.io）は JavaScript 描画で本文を取得できなかった。Material は material-web の文書（S162）で代替したが、material-web は保守のみの状態
- Adobe Spectrum は 404。a11ysupport.io（支援技術ごとの対応表）は JavaScript 描画で取得できなかった
- Atlassian・Fluent 2 は公開の原稿リポジトリが見つからず、公開 HTML で照合した。更新されると照合が外れうる
- デジタル庁デザインシステムは git リポジトリが無く、公開 HTML と公式の Markdown 版（2026-10-21 版の zip）で照合した。コミット固定の原稿ではない

**この台帳が扱っていないこと**

- JIS X 8341-3:2016 の規格本文（転載不可）
- WCAG 2.2 の全ての達成基準。設計で効く基準を選び、見出しと本文の最初の部分だけを引用している。例外の全文と、引用に無い基準（音声のみ・映像のみ、手話、複数ページに関わる基準、AAA の多く）は、WCAG 2.2 本体で確かめる
- APG のパターンは、モーダルダイアログ（S058・S059）、キーボードインターフェースの実践（S071）、タブ・メニューボタン・メニューとメニューバー・コンボボックス・ディスクロージャー・ツリー（S251・S252・S253・S254・S255・S256）だけ。リストボックス・グリッドなど他のパターンは APG で確かめる
- 支援技術の実機での挙動（版つきの記録は S122・S127・S128 だけ）。日本の利用者の支援技術の利用比率と、日本語の読み上げ（PC-Talker・NVDA 日本語版・VoiceOver の日本語）での挙動の差
- 日本語のデザインシステムは SmartHR・freee・デジタル庁だけ。日本の当事者団体の資料と、日本の放送・配信の字幕の実務の資料は取得していない
- 国内の訴訟・苦情の統計、EU の施行状況と執行の事例
- オーバーレイを提供する側の言い分
- 医学モデルの一次資料と、社会モデルへの批判
- 動画（字幕・音声解説・書き起こし）の確かめ方は W3C の教材に依存する

**時点の注意**

- WCAG 3・AccName 1.2・Media Queries 5 は作業草案で、取得日以降に変わりうる
- WAI のページ・HTML Standard は随時更新される。各項目の媒体・日付の欄の「Updated」「Last Updated」を確かめてから使う
- 障害者差別解消法の現行の版は 2026-11-02 施行の改正による（防災庁関連の改正とみられ、第五条・第七条・第八条の文言には影響していない。2022 年版との照合で第八条第二項以外の該当条文が同文であることを確認した範囲で言う）
- 取得物はすべて 2026-11-16 時点。ライブラリの既定値・規則の期限・訴訟件数は以後変わりうる
- ライブラリの既定値のライセンスは GitHub API の判定（既定ブランチ）による。コンボボックスの既定値は React Aria と MUI の文書の記述が中心で、各ライブラリのソースまで確かめていない。Headless UI の文書サイトの原稿はリポジトリに無く、ソースだけを読んだ

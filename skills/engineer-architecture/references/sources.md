# engineer-architecture 出典台帳

`engineer-architecture`（ソフトウェアアーキテクト）の `SKILL.md` が根拠にする出典の台帳。人物・論文・原典の一次資料、クラウド事業者の指針、決定の記録（ADR）・図・設計文書の様式、段階的な移行の手法、チームと構造の議論、批判と各社の事例から、`SKILL.md` が引く項目を主題ごとに並べた。引用原文・発言者や媒体・日付・URL・取得日・検証区分を記す。台帳は通読せず、番号で検索して該当の項目だけ読む。番号は振り直さない。

全 40 件。いずれも逐語の引用を持つ（引用ブロックは 73 件）。未検証の項目は番号を振らず、末尾の「未検証・調査の限界」に表で置いた。

## 凡例

- 検証区分
  - A: 原典・公式ページ・著者本人のサイト・出版社頁の原稿（HTML・Markdown・PDF）、または原典の保存コピー（Internet Archive の Wayback Machine）を取得し、引用文が逐語で含まれることを、タグ除去と空白の正規化のうえで部分一致により再照合した（引用符・アポストロフィ・ダッシュの字形は揃えて比較した）。引用ブロックの字形は原稿のまま。引用が取得日の時点でページにあることの確認であり、主張の正しさの保証ではない
  - B: 第三者の複製・ミラー・解説頁、他媒体経由で引いた文、または原稿の本文との部分一致が通らなかったもの。引用文の原稿との一致は確認したが、原典そのものではない。理由は備考の「区分の根拠」か「注意」に書いた
  - C: 批判・留保・評価の側の主張。引用が逐語であることのみを確認し、主張の正しさ・因果は確認していない
  - U: 未検証。事実・引用として使わない。末尾の表に集め、番号を振らない
- 「自称」: 企業・組織・個人が自分の進め方や成果を自分で述べたもの。第三者による検証ではない（Segment・Shopify・Istio・Prime Video・Basecamp などの記事は、その会社の自称として扱う）
- 数値（人数・倍率・費用の削減率など）は、区分 A で原文を確認できたものを「出典あり」とする。区分 C の数値（批判・自称側）は、区分を添えて紹介し、「出典あり」とは書かない。事例の数値は各社の自称で、一般化しない
- 引用文は原文を改変していない（引用符・アポストロフィ・ダッシュ・空白の字形は原稿のまま）。日本語の要旨・備考の整理は本 skill の言葉であり、発言者本人の発言ではない。要旨・使いどころの欄は、引用ブロックが言う範囲を超える内容を含みうる。skill 本文が S 番号で支えてよいのは、引用ブロックが言うことだけで、残りは「本 skill の整理」と書く。「注意」に書いた箇所は出典が述べていないことの断りである
- 項目の「URL」は利用者が開ける文書の URL、「URL（原稿）」は、それとは別に照合に使った固定の原稿や保存コピーの URL（あるときだけ）。取得日は 2026-11-20
- 再照合の手順（第三者が引用を確かめるとき）
  - 照合先: まず URL（利用者が開く頁）。頁が変わった・取得できない項目は、URL（原稿）または保存コピーを使う
  - PDF: テキストに抽出してから照合する。日本語の PDF は文字間に空白が入るため、空白を除いて比べる
  - 比較の前処理: タグを除去し、HTML 実体を復号し、空白の連続を 1 つに畳む。引用符・アポストロフィ・ダッシュの字形は、比較では揃える。引用ブロックは原稿の字形のまま書く
  - 脚注番号: 頁の脚注番号が引用の途中に入るときは、脚注番号を除いて引く。そのため頁の本文との部分一致が通らない。その項目は、脚注番号を含まない後半の語句で照合し、区分を B にする（S082）
  - 引用文は、上の前処理のうえ `grep -F` で部分一致を確かめる
- ライセンス上の扱い（各項目の備考に「ライセンス」として書いた）
  - 逐語可（出典明記。各条件に従う）: S013、S039。CC BY の表示を確認したもの。配布する skill 本文は、長い転載を避け、短い引用と要旨で使う
  - 短い引用のみ: 上記以外のすべて（S047 を含む。arc42 のテンプレートの CC BY-SA 4.0 は、S047 の備考に別に書いた）。著作権表示のみ・全権利留保・許諾の明記なし・条件を確認できなかったもの。出典を明示した短い引用（1〜3 文）にとどめ、段落単位の転載・翻訳をしない。Microsoft Learn・AWS の頁、個人・企業サイトの記事などが入る。再配布できると書かない

## 帰属上の注意

- 各社・各団体の指針は自社製品・自社利用者向けの規約や考え方であり、普遍的な正解ではない。食い違い（モノリス先行と最初から分割、CAP の分類への批判など）は、両論を並べて示す
- Conway の法則を引くとき、Conway の原文（逐語は Conway 自身の項目）と、Fowler の頁・記事が引く言い換えを取り違えない。逆コンウェイ操作の語の出どころは Fowler の脚注の記述で、原本は未確認

## 定義と本質

### S006 Martin Fowler, "Who Needs an Architect?"（アーキテクチャの定義）

> So you might end up defining architecture as “things that people perceive as hard to change.”

- 媒体・日付: IEEE Software, 2003 年 7/8 月号（原稿の版権表示 0740-7459/03、"July/August 2003"）
- URL: https://martinfowler.com/ieeeSoftware/whoNeedsArchitect.pdf
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 短い引用のみ。版権表示は IEEE（原稿に IEEE の表示）。引用は短く。 要旨（本 skill の言葉）: アーキテクチャは「重要なこと」「変えにくいと人が感じるもの」で、熟練した開発者が共有する理解であって、社会的な構成物。重要かどうかは開発者の判断による。 使いどころ: 「アーキテクチャとは何か」を定義するときの置き方。「最初に決めるべきこと」という定義への反論として。 区分の根拠: 定義・主張側。Ralph Johnson の投稿を引いた議論。

## 境界とモジュール

### S008 David L. Parnas「On the Criteria To Be Used in Decomposing Systems into Modules」

> Every module in the second decomposition is characterized by its knowledge of a design decision which it hides from all others. Its interface or definition was chosen to reveal as little as possible about its inner workings.

- 媒体・日付: Communications of the ACM 15(12)、1972 年 12 月（PDF 内の巻号表示を確認）
- URL: https://www.win.tue.nl/~wstomv/edu/2ip30/references/criteria_for_modularization.pdf
- 取得日: 2026-11-20
- 検証区分: B
- 備考: ライセンス: 短い引用のみ。PDF の冒頭に「Copyright 1972, Association for Computing Machinery, Inc. General permission to republish, but not for profit, all or part of this material is granted, provided that reference is made to this publication」とある。短い引用に留める。 要旨（本 skill の言葉。引用は、モジュールが隠す設計判断と、中身を見せないインターフェースの部分だけ。変更に強いという評価は引用の範囲外）: 処理の手順で分けるのでなく、変わりそうな設計判断や難しい判断ごとにモジュールを切り、その判断を他から隠す。インターフェースは中身をなるべく見せないように決める。 使いどころ: モジュール境界の切り方。変更に強い分割の根拠（情報隠蔽）。 注意: ACM Digital Library の頁は取得できなかった（403）。照合は大学の講義資料サイトにある PDF の複製。同じ PDF の別の箇所に OCR 由来の文字化けがあるため、化けていない段落を引用に選んだ。DOI は本文から確認できていない。同じ PDF を A とする見方もありうるが、第三者の複製なので B にそろえた。

### S011 John Ousterhout『A Philosophy of Software Design』（著者のページと Clean Code との比較）

> The best methods are those that provide a lot of functionality but have a very simple interface

- 媒体・日付: 著者の GitHub リポジトリ「aposd-vs-clean-code」（Ousterhout と Robert Martin の議論の記録）。著者の Stanford のページには「In July of 2021 I released the Second Edition of A Philosophy of Software Design」とある
- URL: https://web.stanford.edu/~ouster/cgi-bin/aposd.php
- URL（原稿）: https://github.com/johnousterhout/aposd-vs-clean-code（Clean Code との比較の頁。この項目の引用の取得元）
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。リポジトリ頁にライセンス表示を見つけられなかった。短い引用に留める。 要旨（本 skill の言葉。引用は method の部分だけ。深い・浅いモジュールと分けすぎの話は、method についての引用からの応用で、書籍の本文は未確認）: 簡単なインターフェースの裏に多くの機能を持たせるのが良い method だという一文が引用にある。深いモジュール・浅いモジュールの区別と、細かく分けすぎると絡み合うという見方は、method の引用からの応用で、書籍の本文は未確認。書籍の第 2 版（2021 年 7 月）が出ている。 使いどころ: モジュールの分割の粒度。分けすぎの危険。インターフェースの複雑さを費用として数える。 区分の根拠: 著者の頁とリポジトリ。本の本文そのものは未確認。 注意: 書名の「deep module」という語の原典の章は、書籍のため未確認。章番号は書かない。

### S013 Eric Evans「Domain-Driven Design Reference」（2015 年版 PDF）

> Explicitly define the context within which a model applies.

> Multiple models are inevitable, yet when code based on distinct models is combined, software becomes buggy, unreliable, and difficult to understand.

> Explicitly set boundaries in terms of team organization, usage within specific parts of the application, and physical manifestations such as code bases and database schemas.

> Apply Continuous Integration to keep model concepts and terms strictly consistent within these bounds, but don't be distracted or confused by issues outside.

- 媒体・日付: Domain Language, Inc.、2015 年（PDF 表紙に「© 2015 Eric Evans」）。冒頭の謝辞は 2014 年 6 月の日付
- URL: https://www.domainlanguage.com/ddd/reference/
- URL（原稿）: https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 逐語可（出典明記・各条件に従う）。PDF と頁に「licensed under the Creative Commons Attribution 4.0 International License」（DDD Reference 本体）。2004 年の書籍から抜き出した要約部分は、頁によれば CC BY 3.0 Unported。出典を示せば逐語引用できる。ただし長い転載は避け、短い引用に留める。 要旨（本 skill の言葉）: 大きな系には複数のモデルが必ず現れる。モデルが通用する範囲（チーム・コード・DB スキーマ）を明示して境界づける。境界の内側では用語を厳密に揃える。 使いどころ: 境界づけられた文脈、文脈図、腐敗防止層などの用語。サービス境界の根拠。

### S016 Robert C. Martin「The Clean Architecture」

> This rule says that source code dependencies can only point inwards .

> The outer circles are mechanisms. The inner circles are policies.

- 媒体・日付: The Clean Code Blog、2012 年 8 月 13 日（URL の日付による。頁本文には日付が出なかった）
- URL: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。頁にライセンス表示なし。短い引用に留める。 要旨（本 skill の言葉）: 内側の円を方針、外側を仕組みとし、ソースの依存は内向きだけにする（依存関係のルール）。複数の構成案（hexagonal など）を 1 つにまとめる試み。 使いどころ: 層・依存の向きの論点。業務ルールを枠組みから離す。 注意: 引用の末尾の「 .」は原稿の空白の位置のまま。

### S017 Azure Architecture Center: Anti-corruption Layer pattern

> Isolate the different subsystems by placing an anti-corruption layer between them. This layer translates communication between the two systems.

- 媒体・日付: 頁に日付表示なし（取得日の頁）
- URL: https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。Microsoft Learn の利用条件。原稿リポジトリ（MicrosoftDocs 側）は取得時点で GitHub の API と raw の双方が 404 で、ライセンス本文を確認できなかった。短い引用のみ・要旨を基本とする。 要旨（本 skill の言葉。引用は、サブシステムの間に置く翻訳の層の部分だけ。旧系・外部との関係と汚染の話は引用の範囲外）: 外部や旧系との間に翻訳の層を置き、片方の設計を相手に汚染させない。 使いどころ: 旧系・外部 API の都合を新系に持ち込ませたくないとき。

## 構成の選択（モノリス・マイクロサービス）

### S021 James Lewis・Martin Fowler「Microservices」

> These services are built around business capabilities and independently deployable by fully automated deployment machinery.

- 媒体・日付: martinfowler.com、2014 年 3 月 25 日
- URL: https://martinfowler.com/articles/microservices.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉）: 1 つのアプリを、各自のプロセスで動き、軽い仕組みで連携する小さなサービスの集まりとして作る型。事業の能力に沿って切り、自動化した配備で独立に出せる。記事は Conway の文言（Any organization that designs a system ... copy of the organization's communication structure）も引いており、その部分も照合できた（出典は S086）。 使いどころ: マイクロサービスの定義。事業能力に沿った境界とチーム構成。

### S022 Martin Fowler「Monolith First」

> Almost all the successful microservice stories have started with a monolith that got too big and was broken up

> you should build a new application as a monolith initially, even if you think it's likely that it will benefit from a microservices architecture later on.

> even experienced architects working in familiar domains have great difficulty getting boundaries right at the beginning.

- 媒体・日付: martinfowler.com bliki、2015 年 6 月 3 日
- URL: https://martinfowler.com/bliki/MonolithFirst.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉）: 成功した例の多くは、大きくなったモノリスを割った出発点を持つ。最初から割った例は深刻な困難に陥りやすい。最初はモノリスで、モジュール性を守りつつ作る。境界は動かしにくく、最初は当てにくい。 使いどころ: 新規開発でマイクロサービスから始めるかどうか。境界を後で決める論点。／モノリス先行か最初から分割かの相談。反対意見（S023）とセットで示す。／揺り戻しの理論面の根拠。「聞いた範囲」の観察であり、反例もありうると添える。 注意: 「聞いた範囲」の観察であり統計ではない。反対の立場は S023（Tilkov）にある。

### S023 Stefan Tilkov, Don't start with a monolith（批判側）

> I’m firmly convinced that starting with a monolith is usually exactly the wrong thing to do.

- 媒体・日付: 2015-06-09
- URL: https://martinfowler.com/articles/dont-start-monolith.html
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 短い引用のみ。© Martin Fowler サイト掲載（著者 Stefan Tilkov）。短い引用のみ。 要旨（本 skill の言葉）: 新しく作る時点こそ分割を考えるべきで、後回しにできるという考えに強く反対する。ただし対象領域を十分知っていることが前提という共通点は認める。 使いどころ: Monolith First への反対論を並べるとき。

### S024 Martin Fowler「Microservice Trade-Offs」

> Like any architectural style, microservices bring costs and benefits. To make a sensible choice you have to understand these and apply them to your specific context.

- 媒体・日付: martinfowler.com、2015 年 7 月 1 日（頁表示 01 July 2015）
- URL: https://martinfowler.com/articles/microservice-trade-offs.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉。引用は、費用と利益を文脈に当てはめて選ぶ部分だけ。利点と費用の個別の項目は引用の範囲外）: 利点（モジュール境界の強化・独立した配備・技術の多様性）と費用（分散・結果整合性・運用の複雑さ）を並べ、文脈で選ぶ。 使いどころ: 分割の得失を表で並べる論点。

### S025 Martin Fowler「Microservice Premium」

> microservices introduce complexity on their own account. This adds a premium to a project's cost and risk - one that often gets projects into serious trouble.

- 媒体・日付: martinfowler.com bliki（日付は頁から抽出できず）
- URL: https://martinfowler.com/bliki/MicroservicePremium.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉）: サービスを多く持つ運用の費用（割増）は、複雑な系でしか見合わない。 使いどころ: 小さな系にマイクロサービスを勧めない判断。／「分割の代償」の語。揺り戻しの事例（S104 以降）を読む前の枠組み。 注意: 筆者（Fowler）の主張で、実測の根拠ではない。

### S026 Martin Fowler「Microservice Prerequisites」

> if you don't have certain baseline competencies, you shouldn't consider using the microservice style.

> it's essential that a monitoring regime is in place to detect serious problems quickly.

> Rapid application deployment: with many services to manage, you need to be able to quickly deploy them, both to test environments and to production.

- 媒体・日付: martinfowler.com bliki、2014 年 8 月 28 日
- URL: https://martinfowler.com/bliki/MicroservicePrerequisites.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉）: 迅速な環境の用意・基本の監視・迅速なアプリの配備といった下地が無ければ、マイクロサービスは選ばない。 使いどころ: 採用前の運用能力の点検項目。

## 決定の記録（ADR）

### S027 Michael Nygard「Documenting Architecture Decisions」

> Small, modular documents have at least a chance at being updated.

> Numbers will not be reused.

- 媒体・日付: Cognitect blog、2011 年 11 月 15 日
- URL: https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。ページ末尾に、権利放棄の文言（has waived all copyright and related or neighboring rights）の表示がある。CC0 の名称は頁から確認できていないため、本 skill では短い引用のみで扱う。 要旨（本 skill の言葉）: ADR は、力関係（背景）と 1 つの決定を短い文書に残す。リポジトリに置き、番号を振り、取り消した決定は消さず「置き換えられた」と記す。長い文書は更新されないが小さな文書は更新される。 使いどころ: ADR の書式・置き場所・番号・状態。ADR を勧める理由。

### S029 Michael Nygard, Documenting Architecture Decisions（様式）

> If a later ADR changes or reverses a decision, it may be marked as "deprecated" or "superseded" with a reference to its replacement.

- 媒体・日付: 2011-11-15
- URL: https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。ページ末尾に、権利放棄の文言（has waived all copyright and related or neighboring rights）の表示がある。CC0 の名称は頁から確認できていないため、本 skill では短い引用のみで扱う。（S027 と同じ頁）。 要旨（本 skill の言葉）: 様式は Title・Context・Decision・Status・Consequences の 5 部。順に採番し、番号は再利用しない。1〜2 頁、将来の開発者への会話として full sentence で書く。結果は良いものだけでなく全部書く。 使いどころ: Nygard 型の様式を示すとき（MADR・Azure との比較）。

### S030 Martin Fowler「Architecture Decision Record」

> An Architecture Decision Record (ADR) is a short document that captures and explains a single decision relevant to a product or ecosystem.

> the act of writing them helps to clarify thinking, particularly with groups of people.

- 媒体・日付: martinfowler.com bliki、2026 年 3 月 24 日
- URL: https://martinfowler.com/bliki/ArchitectureDecisionRecord.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉）: 1 つの決定を、文脈・決定・影響とともに短く記す。決定が変わっても書き換えず、後継の決定へ結ぶ。書く行為自体が議論を明確にする。 使いどころ: 決定の記録の取り方。／ADR を勧める理由（記録と思考の整理の二つの効用）。

### S031 Martin Fowler, Architecture Decision Record（superseded）

> Once an ADR is accepted, it should never be reopened or changed - instead it should be superseded.

- 媒体・日付: 2026-03-24
- URL: https://martinfowler.com/bliki/ArchitectureDecisionRecord.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。© Martin Fowler。短い引用のみ。 要旨（本 skill の言葉）: 受理後は書き換えず、置き換える。判断がどれだけ続いたかの履歴になる。 使いどころ: 運用ルール。

## 図と設計文書（C4・arc42・設計文書）

### S039 Simon Brown「C4 model」（公式サイト）

> The C4 model is an easy to learn, developer friendly approach to software architecture diagramming

> A set of hierarchical abstractions - software systems , containers , components , and code .

> A set of hierarchical diagrams - system context , containers , components , and code .

> An additional set of supporting diagrams - system landscape , dynamic , and deployment .

> Notation independent . Tooling independent .

- 媒体・日付: c4model.com（トップ頁と FAQ）。日付の表示なし
- URL: https://c4model.com/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 逐語可（出典明記・各条件に従う）。頁に「This website and example diagrams are licensed under a Creative Commons Attribution 4.0 International License」。出典を示せば引用・翻案できる（CC BY 4.0）。 要旨（本 skill の言葉）: システム・コンテナ・コンポーネント・コードの 4 階層の抽象と、システムコンテキスト・コンテナ・コンポーネント・コードの図、補助の図（landscape・dynamic・deployment）で構成する。記法と道具には依存しない。作者は Simon Brown で、UML や 4+1 ビューに着想を得て簡素化したと FAQ が述べる。 使いどころ: 構成図の描き方、図の粒度、読み手ごとの図の使い分け。 注意: FAQ の頁で、作者名と UML・4+1 への言及、ライセンス表示を確認した。

## 品質特性とトレードオフ

### S047 arc42 ドキュメント（10 品質要求）

> you should know what qualities are really important for your stakeholders, in a specific and measurable way.

> Quality scenarios make quality requirements concrete and allow to decide whether they are fulfilled (in the sense of acceptance criteria).

> In literature, the idea of a quality attribute tree has also been described, which puts the generic term "quality" as the root and uses a tree-like refinement of the term "quality".

- 媒体・日付: 頁に日付表示なし
- URL: https://docs.arc42.org/section-10/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。引用元の頁（docs.arc42.org）のライセンスは確認できていない。別に、arc42 のライセンス頁（https://arc42.org/license）は、テンプレートそのものを CC BY-SA 4.0 とし、クレジットの表示・ライセンスへのリンク・変更の明示を求め、組織の外へ翻案を公開するときは同じライセンスで公開する（継承）と述べる（保存原稿で確認）。この条件は、テンプレートについてのもので、本頁の引用や翻案に及ぶとは確認できていないため、本頁は短い引用のみで扱う。 要旨（本 skill の言葉）: 品質要求は具体的・測定可能に書く。品質ツリーと品質シナリオを使う。 使いどころ: 「速く」「安全に」を測れる形にするとき。

### S051 Neal Ford・Rebecca Parsons・Patrick Kua「Building Evolutionary Architectures」（公式サイト）

> Evolutionary architectures make it explicit what "fit" means with as much automation as possible.

- 媒体・日付: evolutionaryarchitecture.com（頁末「© 2017」）
- URL: https://evolutionaryarchitecture.com/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。頁末は「All rights reserved」。短い引用に留める。 要旨（本 skill の言葉）: 進化的アーキテクチャは、増分で作り、「適合」の意味を明示してできる限り自動で測る（適応度関数）。技術と業務の両方の変化に耐える。 使いどころ: 構造の規則を自動で検査する論点。

### S055 Martin Fowler, "Yagni"

> The common reason why people build presumptive features is because they think it will be cheaper to build it now rather than build it later.

> Even in this happy case, building the presumptive feature incurs two serious costs. The first cost is the cost of delayed value.

- 媒体・日付: martinfowler.com, 2015 年 5 月 26 日。XP に由来する（同記事: "Yagni is a way to refer to the XP practice of Simple Design"、起源は Kent Beck と Chet Hendrickson の会話と脚注にある）
- URL: https://martinfowler.com/bliki/Yagni.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。表示なし（著作権は各権利者。引用は短く）。 要旨（本 skill の言葉。引用は、見込みの機能を作る理由と、遅れる価値の費用の部分だけ。変えやすさが前提という話は引用の範囲外）: 今は要らない機能を「先に作ると安い」と思って作るのは、作る費用・遅れる価値の費用・持ち越す複雑さの費用を払う。Yagni は要らないものを作らないことで、設計をしないことではなく、変えやすさ（リファクタリング・テスト）が前提になる。 使いどころ: 過剰設計への批判の定番。「将来のため」の抽象化を止める根拠。変えやすさ（リファクタリング等）が前提だという趣旨も同記事にある（要旨。詳細は記事で確認のこと）。 区分の根拠: 記事の記述。XP 側の原典は未取得。 注意: XP 側の原典は未取得。

## クラウド事業者の指針と配備の原則

### S057 AWS Well-Architected Framework（トップ頁）

> The process for reviewing an architecture is a constructive conversation about architectural decisions, and is not an audit mechanism.

- 媒体・日付: 2026-11-16 最終更新（頁表示）
- URL: https://docs.aws.amazon.com/wellarchitected/latest/framework/framework.html
- URL（原稿）: https://docs.aws.amazon.com/wellarchitected/latest/framework/framework.md
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。著作権は Amazon Web Services, Inc. 等に帰属（ページ末尾の Copyright 表記）。再利用の許諾条件は取得時には確認できず。短い引用のみ・要旨を基本とする。 要旨（本 skill の言葉）: アーキテクチャのレビューは監査ではなく、判断をめぐる建設的な対話として行う。 使いどころ: レビューを裁く場にしない言い方の根拠。

### S058 AWS Well-Architected Framework（分散するアーキテクチャ）

> Instead of centralizing architecture decisions, distribute architectural capability to the teams that build and operate workloads.

- 媒体・日付: 2026-11-16 最終更新（頁表示）
- URL: https://docs.aws.amazon.com/wellarchitected/latest/framework/framework.html
- URL（原稿）: https://docs.aws.amazon.com/wellarchitected/latest/framework/framework.md
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。著作権は Amazon Web Services, Inc. 等に帰属（ページ末尾の Copyright 表記）。再利用の許諾条件は取得時には確認できず。短い引用のみ・要旨を基本とする。 要旨（本 skill の言葉）: アーキテクチャ判断を中央の担当に集めず、作って運用するチームに能力を分ける。標準・参照アーキテクチャ・専門家のレビューと、自動検査（フィットネス関数、IaC のガードレール）で支える。 使いどころ: 中央の設計審査会か、チームへの権限委譲かを問われたとき。

### S059 AWS Well-Architected Framework（進化的アーキテクチャ）

> Design for change rather than designing for a fixed end state.

- 媒体・日付: 2026-11-16 最終更新（頁表示）
- URL: https://docs.aws.amazon.com/wellarchitected/latest/framework/framework.html
- URL（原稿）: https://docs.aws.amazon.com/wellarchitected/latest/framework/framework.md
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。著作権は Amazon Web Services, Inc. 等に帰属（ページ末尾の Copyright 表記）。再利用の許諾条件は取得時には確認できず。短い引用のみ・要旨を基本とする。 要旨（本 skill の言葉）: 固定の最終形ではなく変化を前提に設計する。判断はなるべく可逆にし、計測で仮定を検証し、カナリアやフィーチャーフラグで小さく試す。 使いどころ: 最初に完全な設計を求められたとき。

### S061 AWS Well-Architected Framework（信頼性の柱）

> Resilience is the ability of a workload to recover from infrastructure or service disruptions, acquire computing resources dynamically to meet demand, and mitigate disruptions such as misconfigurations or transient network issues.

- 媒体・日付: 頁に日付表示なし（取得日の頁）
- URL: https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability.html
- URL（原稿）: https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability.md
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。著作権は Amazon Web Services, Inc. 等に帰属（ページ末尾の Copyright 表記）。再利用の許諾条件は取得時には確認できず。短い引用のみ・要旨を基本とする。 要旨（本 skill の言葉）: 信頼性の中心は耐障害性（回復・動的な資源確保・設定ミス等の緩和）。ほかの柱（運用・セキュリティ・性能・コスト）も信頼性に効く。数値目標はこの頁の引用範囲では確認していない。 使いどころ: 可用性を「落ちない」ではなく「回復できる」と説明するとき。

## 分散とデータ

### S067 Peter Deutsch「The Eight Fallacies of Distributed Computing」

> Essentially everyone, when they first build a distributed application, makes the following eight assumptions. All prove to be false in the long run and all cause big trouble and painful learning experiences.

> 1. The network is reliable 2. Latency is zero 3. Bandwidth is infinite 4. The network is secure 5. Topology doesn't change 6. There is one administrator 7. Transport cost is zero 8. The network is homogeneous

- 媒体・日付: James Gosling のサイト nighthacks.com にある頁（日付の表示なし）。もとは Sun の blog（blogs.sun.com/jag）にあった頁
- URL: https://nighthacks.com/jag/res/Fallacies.html
- 取得日: 2026-11-20
- 検証区分: B
- 備考: ライセンス: 短い引用のみ。頁にライセンス表示なし。短い引用に留める。8 項目の一覧は事実の列挙として要旨で書く。 要旨（本 skill の言葉）: 分散システムで人が置きがちな 8 つの誤った前提。ネットワークは信頼できる・遅延はゼロ・帯域は無限・安全・構成は変わらない・管理者は 1 人・転送の費用はゼロ・均質、の 8 つ。 使いどころ: ネットワーク越しの呼び出しを設計に持ち込むときの点検項目。 区分の根拠: ミラー。Sun の元頁は取得できず、Wayback の URL も 404 だった。 注意: Deutsch と Gosling のどちらが 8 つ目を足したかの記述は頁に無い。本 skill では「Deutsch が挙げた誤謬」と書き、成立の細部は断定しない。

### S070 Eric Brewer, "CAP Twelve Years Later: How the 'Rules' Have Changed"

> The "2 of 3" formulation was always misleading because it tended to oversimplify the tensions among properties.

> CAP prohibits only a tiny part of the design space: perfect availability and consistency in the presence of partitions, which are rare.

> The CAP theorem states that any networked shared-data system can have at most two of three desirable properties: consistency (C) equivalent to having a single up-to-date copy of the data; high availability (A) of that data (for updates); and tolerance to network partitions (P).

- 媒体・日付: IEEE Computer 掲載、InfoQ 再掲 2012 年 5 月 30 日（原稿に "first appeared in Computer magazine" とある）
- URL: https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/
- 取得日: 2026-11-20
- 検証区分: B
- 備考: ライセンス: 短い引用のみ。表示なし（InfoQ と IEEE Computer Society の掲載。著作権は各権利者。引用は短く）。 要旨（本 skill の言葉）: 「3 つから 2 つ選ぶ」という言い方は最初から誤解を招いた。CAP が禁じるのは、分断があるときに完全な一貫性と可用性を両方取ることだけで、分断は稀（記事の観察であり、個別のシステムのネットワークで成り立つかは、観測や障害モデルで確かめる）。一貫性と可用性は、記事の定義（引用にある）で読む。分断を明示して扱えば、設計の幅は広い。 使いどころ: 提唱者自身による CAP の言い直し（2012 年）。「CP か AP か」で製品を分類する話を止める根拠。 区分の根拠: InfoQ 経由の再掲で照合した。IEEE 原版は取得しておらず、照合していない（凡例の B: 他媒体経由）。 注意: InfoQ 再掲の本文で照合した。IEEE 原版は未取得。

### S074 Martin Kleppmann「Please stop calling databases CP or AP」（批判側）

> The CAP theorem is too simplistic and too widely misunderstood to be of much use for characterizing systems.

- 媒体・日付: Martin Kleppmann の blog、2015 年 5 月 11 日
- URL: https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 短い引用のみ。頁末に「Unless otherwise specified, all content on this site is licensed under a Creative Commons Attribution 3.0 Unported License」。出典を示せば引用できる。 要旨（本 skill の言葉）: データベースを CP や AP と呼ぶ分類は粗い。CAP は用語の誤解が多く、系の性質の記述には向かない。より正確な枠組みへの誘導がある。 使いどころ: 「CAP だから」で選定を済ませる議論への留保。 区分の根拠: CAP を使った分類への批判。Kleppmann 本人の文面で照合した。

## 段階的な移行

### S078 Martin Fowler「Strangler Fig」

> the term "Strangler Fig" is now often used to describe a gradual approach to legacy modernization.

- 媒体・日付: martinfowler.com bliki、頁表示 2024 年 8 月 22 日（2004 年の原記事「Strangler Application」を改稿した版。2001 年のオーストラリアの旅行に由来すると頁に書かれている）
- URL: https://martinfowler.com/bliki/StranglerFigApplication.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉）: 古い系を一括で作り直さず、新しい系を古い系の周りに育てて少しずつ置き換える。投資と効果が段階的に見える。 使いどころ: レガシー刷新の進め方。全面書き換えを避ける論点。 区分の根拠: 2024 年版の頁として。2004 年の初出の文面は未取得。 注意: 2024 年版の頁として。2004 年の初出の文面は未取得。

### S079 Martin Fowler, Strangler Fig

> The alternative that my colleagues and I prefer, is to do a gradual process of modernization.

> What's worse, much of that behavior is stuff that isn't really wanted, so building it is a waste.

- 媒体・日付: 2024-08-22
- URL: https://martinfowler.com/bliki/StranglerFigApplication.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。© Martin Fowler。短い引用のみ。 要旨（本 skill の言葉）: 全面置換は仕様の把握が難しく不要な挙動まで作ってしまい失敗しやすい。小さな追加から始め、継ぎ目（seam）を見つけて部品ごとに入れ替える。移行用の一時的なコードは無駄に見えるが、早い価値と低いリスクで元が取れる。組織も変えないと同じ構造に戻る（コンウェイの法則）。 使いどころ: 一括の作り直しを求められたとき。

### S082 Martin Fowler「Branch By Abstraction」

> "Branch by Abstraction" is a technique for making a large-scale change to a software system in gradual way that allows you to release the system regularly while the change is still in-progress.

> We gradually move all client code over to use the abstraction layer until all interaction with the supplier is done by the abstraction layer.

> Once we are ready we switch that section of the client code to use the new supplier.

- 媒体・日付: martinfowler.com bliki、2014 年 1 月 7 日
- URL: https://martinfowler.com/bliki/BranchByAbstraction.html
- 取得日: 2026-11-20
- 検証区分: B
- 備考: ライセンス: 短い引用のみ。「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉）: 置き換えたい部分に抽象の層を挟む。段階 1 は、呼び出し側を、既存の実装を使う抽象へ移すこと。段階 2 は、同じ抽象の背後で新しい実装を作り、呼び出し側の区画ごとに切り替えること。大きな変更の間も定期的にリリースできる。用語は Paul Hammant が導入し、Stacy Curl が原案と頁は述べる。 使いどころ: 大規模な置き換えを小さな手順に分ける論点。／内部の部品（ライブラリ・フレームワーク・モジュール）の入れ替え。Strangler は外部から見える境界の入れ替えで使い分ける。 区分の根拠: 頁内の脚注番号を除いて引いたため（下の注意を参照）。 注意: 引用の冒頭「Branch by Abstraction」の直後に頁の脚注番号があり、脚注番号を除いて引いたため、頁の本文との部分一致が通らない。そこで B に下げた。後半の「that allows you to release the system regularly while the change is still in-progress.」は頁の本文と逐語で一致した。

### S083 Danilo Sato, Parallel Change（Expand and Contract）

> is a pattern to implement backward-incompatible changes to an interface in a safe manner, by breaking the change into three distinct phases: expand, migrate, and contract.

- 媒体・日付: 2014-05-13
- URL: https://martinfowler.com/bliki/ParallelChange.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。© Martin Fowler。短い引用のみ。 要旨（本 skill の言葉）: 後方互換のない変更を、拡張（新旧併存）・移行（利用側を新へ）・縮小（旧を除去）に分けて安全に行う。 使いどころ: API・スキーマ変更。

## チームと構造（Conway の法則）

### S086 Melvin E. Conway「How Do Committees Invent?」（Datamation）

> organizations which design systems (in the broad sense used here) are constrained to produce designs which are copies of the communication structures of these organizations.

> Given any design team organization, there is a class of design alternatives which cannot be effectively pursued by such an organization because the necessary communication paths do not exist.

- 媒体・日付: Datamation、1968 年（著者サイトの転載頁に「Copyright 1968, F. D. Thompson Publications, Inc. Reprinted by permission of Datamation magazine」と明記。号の月は原稿から確認できていない）
- URL: https://www.melconway.com/Home/Committees_Paper.html
- URL（原稿）: https://www.melconway.com/Home/pdf/committees.pdf（原誌のスキャン。取得したが OCR の質が低く、照合には使っていない）
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。雑誌の著作権は出版社に帰属。転載は許諾つきと頁に明記。短い引用に留める。 要旨（本 skill の言葉）: システムを設計する組織は、その組織の連絡の構造をなぞった設計を出してしまう。組織の形は、取り得る設計の案を先に絞っている。 使いどころ: チーム境界とモジュール・サービスの境界を一緒に決める論点。逆コンウェイ操作の前提。／Conway の法則の一次資料（1968 年）。後の「逆 Conway 操作」の話に進む前に、原論文の主張が「写る」であって「写せ」ではない点を押さえる。 区分の根拠: 著者本人のサイトにある転載。原誌の頁そのものではない点は注記。 注意: 原誌のスキャン PDF は OCR の質が低く、照合に使っていない（照合は著者サイトの転載頁）。Fowler の頁や記事が引く Conway の文は言い換えで、原文とは文言が違う。逐語はこの項目の原文を使う。

### S090 Martin Fowler, Conway's Law（逆コンウェイ）

> Here we deliberately alter the development team's organization structure to encourage the desired software architecture, an approach referred to as the Inverse Conway Maneuver

> The term "inverse Conway maneuver" was coined by Jonny LeRoy and Matt Simons in an article published in the December 2010 issue of the Cutter IT journal.

- 媒体・日付: 2022-10-20
- URL: https://martinfowler.com/bliki/ConwaysLaw.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。© Martin Fowler。短い引用のみ。 要旨（本 skill の言葉）: 望む構造に合わせてチーム構成を意図的に変える。用語は Jonny LeRoy と Matt Simons が作ったと脚注にある。 使いどころ: 「逆コンウェイ」の定義の言い方。

## アーキテクトの役割

### S095 Martin Fowler「Who Needs an Architect?」（IEEE Software）

> Improving the development team’s ability gives an architect much greater leverage than being the sole decision maker and thus running the risk of being an architectural bottleneck.

- 媒体・日付: IEEE Software 2003 年 7/8 月号（PDF 内の表示）
- URL: https://martinfowler.com/ieeeSoftware/whoNeedsArchitect.pdf
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。PDF に「© 2003 IEEE」。短い引用に留める。 要旨（本 skill の言葉）: アーキテクチャとは、重要なことの共有された理解。アーキテクトは重要なことを気にかける人で、判断を独占するより開発者を育てるほうが効く。 使いどころ: アーキテクトの役割。決定の独占と指導の対比。「建築」の比喩への留保。PDF には「単一の頭脳が概念の統一性を保つ」という旧来像（Architectus Reloadus）への言及もある。 区分の根拠: 著者サイトが公開する PDF。

### S096 Martin Fowler, "Who Needs an Architect?"（アーキテクト像への批判）

> an architect’s value is inversely proportional to the number of decisions he or she makes.

- 媒体・日付: IEEE Software、2003 年（S095 と同じ記事）
- URL: https://martinfowler.com/ieeeSoftware/whoNeedsArchitect.pdf
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 短い引用のみ。版権表示は IEEE。引用は短く。 要旨（本 skill の言葉）: 重要な決定を全部下す「上から決める」型のアーキテクトを批判し、チームの力を引き上げて決定を分ける「現場に入る」型を推す。後者の価値は、自分で下す決定の数に反比例するという経験則を述べる。筆者の所属会社の内部での見立てで、一般則ではない。 使いどころ: アーキテクトの役割への批判。この記事に "ivory tower" の語は無い（原稿で 0 件）。象牙の塔の語として引かない。 注意: 記事に「ivory tower」の語は無い（原稿で 0 件）。象牙の塔の語として引かない。

## 批判と揺り戻し

### S103 DHH, "The Majestic Monolith"

> It’s the essence of cargo culting.

> we have just 12 programmers

> The patterns that make sense for organizations orders of magnitude larger than yours, are often the exact opposite ones that'll make sense for you.

- 媒体・日付: Signal v. Noise, 2016 年 2 月 29 日
- URL: https://signalvnoise.com/svn3/the-majestic-monolith/
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 短い引用のみ。表示なし（ページ末は © 1999 - 2023 Basecamp）。引用は短く。 要旨（本 skill の言葉）: 筆者は、マイクロサービス志向は何千人規模の組織には妥当と認めたうえで、巨大組織の型を自分の規模で真似るのは積荷信仰（cargo cult）だと言う。Basecamp は約 12 人のプログラマで 2003 年からモノリスで書いてきたと、同社の自称として述べる。 使いどころ: 揺り戻しの意見側の代表。「組織の規模に合う型を選ぶ」の根拠。Basecamp の人数は 2016 年時点の自称で、一般化しない。 区分の根拠: 意見の記事。2 文目は筆者による「壮麗なモノリス」の定義。1 文目は、桁違いに大きい組織の型を真似ることについて。 注意: 人数（12 人）は記事の記述で確認した。

### S104 Twilio Segment（Alexandra Noonan）, "Goodbye Microservices: From 100s of problem children to 1 superstar"

> Instead of enabling us to move faster, the small team found themselves mired in exploding complexity.

> As our velocity plummeted, our defect rate exploded.

> with 3 full-time engineers spending most of their time just keeping the system alive.

- 媒体・日付: Segment（現 Twilio）の開発者向けブログ, 2018 年 7 月 10 日
- URL: https://segment.com/blog/goodbye-microservices/（原稿は Twilio ドメイン側の同記事のページ）
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。表示なし（ページ末は Copyright © 2026 Twilio Inc）。引用は短く。 要旨（本 skill の言葉。引用は、小さなチームが複雑さに足を取られたことと、3 人の常勤の部分だけ。宛先ごとに分けた経緯は引用の範囲外）: Segment は宛先（destination）ごとに分けたサービスを多数運用したところ、共有ライブラリの変更の試験・展開が全体に波及し、速度が落ち、欠陥が増え、3 人の常勤が維持に追われた。宛先を 1 つのリポジトリ・1 つのサービスにまとめ、依存の版を 1 つに揃えたところ生産性が上がったと自称する。結論の節に「簡単な決定ではなかった」とも書く。 使いどころ: 小さなチームでサービスを増やしすぎた失敗の型と、揺り戻しの公開事例。「宛先ごとのサービス」という分け方の失敗であって、マイクロサービス一般の否定ではない。数値は同社の自称で、一般化しない。 区分の根拠: 記事の記述。会社の自称。

### S105 Shopify Engineering（Kirsten Westeinde）, "Deconstructing the Monolith"

> We chose to evolve Shopify into a modular monolith, meaning that we would keep all of the code in one codebase, but ensure that boundaries were defined and respected between different components.

> Each software architecture has its own set of pros and cons, and a different solution will make sense for an app depending on what phase of its growth it is in.

> It has been worked on for over a decade by more than a thousand developers.

- 媒体・日付: Shopify Engineering, 2019 年 2 月 21 日
- URL: https://shopify.engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。表示なし（著作権は各権利者。引用は短く）。 要旨（本 skill の言葉）: 十年超・千人超の開発者が触れた Rails のモノリスは、境界が無く結合が非常に高くなった（原文: "extremely high coupling"）。マイクロサービスでなく、1 つのコードベースの中で境界を定めて守るモジュラーモノリスを選んだ。成長の段階によって適する形は変わると述べる。 使いどころ: マイクロサービスへ行かず境界を作り直す第 3 の道の事例。「千人超」「十年超」は同社の自称で、小さな組織に当てはめない。 区分の根拠: 記事の記述。会社の自称。

### S106 Istio（Craig Box, Google）, "Introducing istiod: simplifying the control plane"

> Microservices are a great pattern when they map services to disparate teams that deliver them, or when the value of independent rollout and the value of independent scale are greater than the cost of orchestration.

- 媒体・日付: Istio ブログ, 2020 年 3 月 19 日（Istio 1.5）
- URL: https://istio.io/latest/blog/2020/istiod/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。表示なし（Istio ドキュメントのライセンスはページから確認できていない。U）。引用は短く。 要旨（本 skill の言葉）: マイクロサービスは、サービスが別々のチームに対応するとき、または独立した展開・拡大の価値が調整の費用を上回るときに良い型。Istio の制御プレーンはどちらにも当たらないと利用者から聞き、1.5 で複数の構成要素を 1 つのバイナリ istiod にまとめた。 使いどころ: 揺り戻しの公開事例のうち、自社製品の構成を統合した例。「分ける条件」を言葉にしている点で、判断基準の出典になる。 区分の根拠: プロジェクト自身の記述。

### S107 Prime Video Tech（Marcin Kolny）, "Scaling up the Prime Video audio/video monitoring service and reducing costs by 90%"

> Moving our service to a monolith reduced our infrastructure cost by over 90%.

> the way we used some components caused us to hit a hard scaling limit at around 5% of the expected load.

> The two most expensive operations in terms of cost were the orchestration workflow and when data passed between distributed components.

- 媒体・日付: Prime Video Tech ブログ, 2023 年 3 月 22 日
- URL: https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90（元の記事。取得時点では元のサイトに接続できず、保存先から取得）
- URL（原稿）: https://web.archive.org/web/2023/https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90（Internet Archive の保存ページ。ページ表記は © 1996-2023 Amazon）
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。表示なし（著作権は Amazon。引用は短く）。 要旨（本 skill の言葉）: 数千の同時ストリームの品質監視ツールを、Step Functions と Lambda で作った分散構成から、全部を 1 プロセスにまとめた構成へ作り直した。原文は、オーケストレーションの状態遷移数とコンポーネント間のデータ受け渡し（S3 の呼び出し）が高費用の原因で、当初構成は想定負荷の約 5% で限界に当たったと書く。1 サービス（映像・音声の欠陥検出）の話で、Prime Video 全体の構成ではない。数値（"over 90%"）は同社チームの自称。 使いどころ: 揺り戻しの公開事例の中心。「サーバーレス・分散が合わないのは、データの受け渡しが多い処理」という限定と、チーム自身が「ケースごとに決める」と書いた点を一緒に引く。拡張が縦方向になり、検出器を増やすと複製して別集合を割り当てたとも書いてある（代償）。 区分の根拠: アーカイブ版の原文と一致。元サイトの現行の記事の有無は未確認。 注意: アーカイブ版の原文と一致した。元ドメインには取得時に接続できず（名前解決できず）、元記事の現行の公開状況は未確認。

## 未検証・調査の限界

未検証（U）の項目は番号を振らず、事実・引用として使わない。次の表は、確かめられなかったもの・取得できなかったものと、skill での扱いである。

| 対象 | 状況 | 扱い |
|------|------|------|
| 逆コンウェイ操作の初出（LeRoy と Simons、Cutter IT journal、2010 年 12 月号） | Fowler の脚注経由のみ。原本は未確認（S090） | 「Fowler によれば」と書く |
| Conway 原論文の掲載号の月（Datamation 1968 年 4 月とする説明） | 原稿から確認できていない（年のみ確認。S086） | 年だけ書く |
| Parnas 1972 の ACM Digital Library の頁 | 403 で取得不可。S008 は大学サイトの PDF の複製（B）。ACM の DOI は本文から確かめられなかった | URL は大学の PDF とし、DOI は書かない |
| Fowler の「Strangler Application」2004 年の初出 | 取得せず。S078 は 2024 年に改稿した頁 | 2004 年の初出の文面は引かず、時点を「2024 年の改稿版」と書く |
| Deutsch の Sun の元頁と、第 8 の誤謬の追加者 | Sun の元頁は 404（Wayback も 404）。S067 はミラー（B） | 「Deutsch が挙げた」と書き、成立の細部は断定しない |
| CAP Twelve Years Later の IEEE 原版 | InfoQ の再掲で照合した。IEEE 原版は取得しておらず、照合していない。S070 は B（S070） | 区分 B のまま。原版へ差し替えるまで、本人の発言として逐語で示さず、要旨にする |
| Branch by Abstraction の Paul Hammant 原典 | Fowler の頁の記述のみ。原典の頁は未取得（S082） | 原典の記述として引かず、Fowler の頁として引く |
| Fowler の「ivory tower」（象牙の塔）の語 | "Who Needs an Architect?" に無い（原稿で 0 件。S096） | 象牙の塔批判の一次資料は別途探す。Fowler の記事の語として引かない |
| Prime Video の元記事の現行の公開状況 | 元のドメインに接続できなかった（Internet Archive の保存で取得）。事例はいずれも各社の自称（S107） | 費用・人数の数値を一般化しない |
| Azure Architecture Center の原稿リポジトリとライセンス | 原稿リポジトリは GitHub の API・raw・HTML のいずれも 404 で、LICENSE を確認できなかった（S017） | 逐語引用は短くし、再配布可と書かない |
| AWS Well-Architected の原稿とライセンス | 公開の原稿リポジトリは見つからず、ライセンス表示も無い（S057・S058・S059・S061） | 短い引用と要旨にとどめる |

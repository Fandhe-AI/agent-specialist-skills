# engineer-architecture 出典台帳

`engineer-architecture`（ソフトウェアアーキテクト）の `SKILL.md` が根拠にする出典の台帳。人物・論文・原典の一次資料、クラウド事業者の指針、決定の記録（ADR）・図・設計文書の様式、段階的な移行の手法、チームと構造の議論、批判と各社の事例から、`SKILL.md` が引く項目を主題ごとに並べた。引用原文・発言者や媒体・日付・URL・取得日・検証区分を記す。台帳は通読せず、番号で検索して該当の項目だけ読む。番号は振り直さない。

全 41 件。いずれも逐語の引用を持つ（引用ブロックは 75 件）。未検証の項目は番号を振らず、末尾の「未検証・調査の限界」に表で置いた。

## 凡例

- 検証区分
  - A: 原典・公式ページ・著者本人のサイト・出版社頁の原稿（HTML・Markdown・PDF）、または原典の保存コピー（Internet Archive の Wayback Machine）を取得し、引用文が逐語で含まれることを、タグ除去と空白の正規化のうえで部分一致により再照合した（引用符・アポストロフィ・ダッシュの字形は揃えて比較した）。引用ブロックの字形は原稿のまま。引用が取得日の時点でページにあることの確認であり、主張の正しさの保証ではない。区分は次の規則で決める
    - 区分の規則: 出どころで B（第三者の複製・他媒体経由）かを先に決め、B でない項目は、文書の性格で決める。(i) 名指しされた特定の主張・文書・手法への反論を主題とする文書、(ii) 自社の事例や自社の製品を、自ら述べる文書（成果の自称を含む）のどちらかに当たるものを C とし、それ以外を A とする。同じ文書から取った項目は、同じ区分にする。SKILL.md での使い方は区分に影響しない（使い方は項目の使いどころに書く）
    - 公式文書の扱い: 手法・指針の公式文書（C4 の公式サイト・arc42・Well-Architected・Azure Architecture Center のパターン・書籍の公式サイト）は、その手法が何であるかの一次資料なので A とする。ただし、そこに書かれた成果の主張や、他の手法との比較は、一般化しない
    - 断片の扱い: 文の一部だけを引用に残した場合（S082）も、引用ブロックの全文が逐語で一致すれば A とし、照合の範囲を項目の引用ブロックのすぐ近くに書く
  - B: 第三者の複製・ミラー・解説頁、または他媒体経由で引いた文。照合の範囲は、原典そのものとの全文の照合ではない。他媒体の再掲・複製・ミラーから引いた文は、引用文が、その再掲・複製の本文と一致することを確認した。理由は備考の「区分の根拠」か「注意」に書いた
  - C: (i) 名指しされた特定の主張・文書・手法への反論を主題とする文書、または (ii) 自社の事例や自社の製品を、自ら述べる文書（成果の自称を含む）。引用が逐語であることのみを確認し、主張の正しさ・因果は確認していない
  - U: 未検証。事実・引用として使わない。末尾の表に集め、番号を振らない
- 「自称」: 企業・組織・個人が自分の進め方や成果を自分で述べたもの。第三者による検証ではない（Segment・Shopify・Istio・Prime Video・Basecamp などの記事は、その会社の自称として扱い、区分は C とする）
- 数値（人数・倍率・費用の削減率など）は、区分 A で原文を確認できたものを「出典あり」とする。区分 C の数値（批判・論評側と、自称の側）は、区分を添えて紹介し、「出典あり」とは書かない。事例の数値は各社の自称で、一般化しない
- 引用文は原文を改変していない（引用符・アポストロフィ・ダッシュ・空白の字形は原稿のまま）。日本語の要旨・備考の整理は本 skill の言葉であり、発言者本人の発言ではない。要旨・使いどころの欄は、引用ブロックが言う範囲を超える内容を含みうる。skill 本文が S 番号で支えてよいのは、引用ブロックが言うことだけで、残りは「本 skill の整理」と書く。「注意」に書いた箇所は出典が述べていないことの断りである
- 項目の「参考」は、引用の照合には使っていない頁の URL（媒体・日付の記述の確認や、取得できなかった元の URL の記録）。項目の「URL」は利用者が開ける文書の URL、「URL（原稿）」は、それとは別に照合に使った固定の原稿や保存コピーの URL（あるときだけ）。取得日は 2026-11-20
- 再照合の手順（第三者が引用を確かめるとき）
  - 照合先: まず URL（利用者が開く頁）。頁が変わった・取得できない項目は、URL（原稿）または保存コピーを使う
  - PDF: テキストに抽出してから照合する。日本語の PDF は文字間に空白が入るため、空白を除いて比べる
  - 比較の前処理: タグを除去し、HTML 実体を復号し、空白の連続を 1 つに畳む。引用符・アポストロフィ・ダッシュの字形は、比較では揃える。引用ブロックは原稿の字形のまま書く
  - 脚注番号: 頁の脚注番号が引用の途中に入るときは、脚注番号をまたぐ引用をしない。脚注番号を含まない部分だけを引用に残し、頁の本文との逐語の一致を確かめる（S082 は、文の後半だけを残した。照合の範囲は、その項目の引用ブロックのすぐ近くに書いた）
  - 引用文は、上の前処理のうえ `grep -F` で部分一致を確かめる
- ライセンス上の扱い（各項目の備考に「ライセンス」として書いた）
  - 逐語可（出典明記。各条件に従う）: S013、S039、S074、S075。CC BY の表示を確認したもの（S013 は CC BY 4.0 と CC BY 3.0、S039 は CC BY 4.0、S074 と S075 は同じ頁で CC BY 3.0）。ライセンス上は出典を示せば逐語で引用できるが、配布する skill 本文は、編集方針として、長い転載を避け、短い引用と要旨で使う
  - 短い引用のみ: 上記以外のすべて（S047 を含む。arc42 のテンプレートの CC BY-SA 4.0 は、S047 の備考に別に書いた）。著作権表示のみ・全権利留保・許諾の明記なし・条件を確認できなかったもの。出典を明示した短い引用（1〜3 文）にとどめ、段落単位の転載・翻訳をしない。Microsoft Learn・AWS の頁、個人・企業サイトの記事などが入る。再配布できると書かない

## 帰属上の注意

- 各社・各団体の指針は自社製品・自社利用者向けの規約や考え方であり、普遍的な正解ではない。食い違い（モノリス先行と最初から分割、CAP の分類への批判など）は、両論を並べて示す
- Conway の法則を引くとき、Conway の原文（逐語は Conway 自身の項目）と、Fowler の頁・記事が引く言い換えを取り違えない。逆コンウェイ操作の語の出どころは Fowler の頁の記述で、原本は未確認

## 定義と本質

### S006 Martin Fowler, "Who Needs an Architect?"（アーキテクチャの定義）

> So you might end up defining architecture as “things that people perceive as hard to change.”

- 媒体・日付: IEEE Software, 2003 年 7/8 月号（原稿の版権表示 0740-7459/03、"July/August 2003"）
- URL: https://martinfowler.com/ieeeSoftware/whoNeedsArchitect.pdf
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。版権表示は IEEE（原稿に IEEE の表示）。引用は短く。 要旨（本 skill の言葉。引用が言うのは、アーキテクチャを「変えにくいと人が感じるもの」と定義することもありうる、という点だけ。「重要なこと」・熟練した開発者が共有する理解・社会的な構成物・重要かどうかは開発者の判断、という部分は引用の範囲外）: アーキテクチャは「変えにくいと人が感じるもの」。 使いどころ（本 skill の整理）: 「アーキテクチャとは何か」を定義するときの置き方。定義の 1 つの紹介として使う。 区分の根拠: 著者サイトが公開する PDF で、引用が逐語で一致した。S095・S096 と同じ文書なので、同じ区分の A。役割を論じる論考で、名指しの主張・文書への反論を主題とせず、自社の事例や製品を述べる文書でもない（(i)(ii) に当たらない）。Ralph Johnson の投稿を引いた議論は引用の範囲外。

## 境界とモジュール

### S008 David L. Parnas「On the Criteria To Be Used in Decomposing Systems into Modules」

> Every module in the second decomposition is characterized by its knowledge of a design decision which it hides from all others. Its interface or definition was chosen to reveal as little as possible about its inner workings.

- 媒体・日付: Communications of the ACM 15(12)、1972 年 12 月（PDF 内の巻号表示を確認）
- URL: https://www.win.tue.nl/~wstomv/edu/2ip30/references/criteria_for_modularization.pdf
- 取得日: 2026-11-20
- 検証区分: B
- 備考: ライセンス: 短い引用のみ。PDF の冒頭に「Copyright 1972, Association for Computing Machinery, Inc. General permission to republish, but not for profit, all or part of this material is granted, provided that reference is made to this publication」とある。短い引用に留める。 要旨（本 skill の言葉。引用が言うのは、2 つ目の分割では各モジュールが、他から隠す設計判断を知っていることで特徴づけられることと、インターフェースは中身をなるべく見せないように選ばれたこと。1 つ目の分割（処理の手順で分ける）との比較・変わりそうな判断や難しい判断という限定・変更に強いという評価は、引用の範囲外）: 各モジュールが、他から隠す設計判断を受け持つ。インターフェースは中身をなるべく見せないように決める。 使いどころ（本 skill の整理）: モジュール境界の切り方（情報隠蔽）。変更に強い分割の根拠としての使い方は、引用の範囲外。 注意: ACM Digital Library の頁は取得できなかった（403）。照合は大学の講義資料サイトにある PDF の複製。同じ PDF の別の箇所に OCR 由来の文字化けがあるため、化けていない段落を引用に選んだ。DOI は本文から確認できていない。同じ PDF を A とする見方もありうるが、第三者の複製なので B にそろえた。

### S011 John Ousterhout『A Philosophy of Software Design』（著者のページと Clean Code との比較）

> The best methods are those that provide a lot of functionality but have a very simple interface

- 媒体・日付: 著者の GitHub リポジトリ「aposd-vs-clean-code」（Ousterhout と Robert Martin の議論の記録）。著者の Stanford のページには「In July of 2021 I released the Second Edition of A Philosophy of Software Design」とある
- URL: https://github.com/johnousterhout/aposd-vs-clean-code（Clean Code との比較の頁。この項目の引用の取得元）
- 参考（引用の照合には使っていない。第 2 版の記述の確認に使った）: https://web.stanford.edu/~ouster/cgi-bin/aposd.php
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 短い引用のみ。リポジトリ頁にライセンス表示を見つけられなかった。短い引用に留める。 要旨（本 skill の言葉。引用は method の部分だけ。深い・浅いモジュールと分けすぎの話は、method についての引用からの応用で、書籍の本文は未確認）: 簡単なインターフェースの裏に多くの機能を持たせるのが良い method だという一文が引用にある。深いモジュール・浅いモジュールの区別と、細かく分けすぎると絡み合うという見方は、method の引用からの応用で、書籍の本文は未確認。書籍の第 2 版（2021 年 7 月）が出ている。 使いどころ（本 skill の整理。method の引用からの応用で、引用の範囲外）: モジュールの分割の粒度。分けすぎの危険。インターフェースの複雑さを費用として数える。 区分の根拠: (i)。Robert Martin の『Clean Code』の主張への反論・比較を主題とするリポジトリ（Ousterhout と Martin の議論の記録）。本の本文そのものは未確認。 注意: 書名の「deep module」という語の原典の章は、書籍のため未確認。章番号は書かない。

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
- 備考: ライセンス: 逐語可（出典明記・各条件に従う）。PDF と頁に「licensed under the Creative Commons Attribution 4.0 International License」（DDD Reference 本体）。2004 年の書籍から抜き出した要約部分は、頁によれば CC BY 3.0 Unported。出典を示せば逐語引用できる。ただし長い転載は避け、短い引用に留める。 要旨（本 skill の言葉）: 大きな系には複数のモデルが必ず現れる。モデルが通用する範囲（チーム・コード・DB スキーマ）を明示して境界づける。境界の内側では用語を厳密に揃える。 使いどころ（本 skill の整理）: 境界づけられた文脈（モデルが通用する範囲の明示）の用語。文脈図・腐敗防止層・サービス境界の根拠としての使い方は、引用の範囲外。

### S016 Robert C. Martin「The Clean Architecture」

> This rule says that source code dependencies can only point inwards .

> The outer circles are mechanisms. The inner circles are policies.

- 媒体・日付: The Clean Code Blog、2012 年 8 月 13 日（URL の日付による。頁本文には日付が出なかった）
- URL: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。頁にライセンス表示なし。短い引用に留める。 要旨（本 skill の言葉。引用が言うのは、ソースの依存は内向きだけという規則と、外側の円が仕組み・内側の円が方針であること。複数の構成案（hexagonal など）を 1 つにまとめる試みという位置づけは、引用の範囲外）: 内側の円を方針、外側を仕組みとし、ソースの依存は内向きだけにする（依存関係のルール）。 使いどころ（本 skill の整理）: 層・依存の向きの論点。業務ルールを枠組みから離す使い方は、引用の範囲外。 注意: 引用の末尾の「 .」は原稿の空白の位置のまま。

### S017 Azure Architecture Center: Anti-corruption Layer pattern

> Isolate the different subsystems by placing an anti-corruption layer between them. This layer translates communication between the two systems.

- 媒体・日付: 頁に日付表示なし（取得日の頁）
- URL: https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。Microsoft Learn の利用条件。原稿リポジトリ（MicrosoftDocs 側）は取得時点で GitHub の API と raw の双方が 404 で、ライセンス本文を確認できなかった。短い引用のみ・要旨を基本とする。 要旨（本 skill の言葉。引用は、サブシステムの間に置く翻訳の層の部分だけ。旧系・外部との関係と汚染の話は引用の範囲外）: 外部や旧系との間に翻訳の層を置き、新系のモデルを旧系・外部の設計に汚染させない。 使いどころ（本 skill の整理。引用の範囲外）: 旧系・外部 API の都合を新系に持ち込ませたくないとき。 区分の根拠: Azure Architecture Center のパターンの公式文書で、そのパターンが何であるかの一次資料なので A（(i)(ii) に当たらない。成果の主張や他の手法との比較は一般化しない）。

## 構成の選択（モノリス・マイクロサービス）

### S021 James Lewis・Martin Fowler「Microservices」

> These services are built around business capabilities and independently deployable by fully automated deployment machinery.

- 媒体・日付: martinfowler.com、2014 年 3 月 25 日
- URL: https://martinfowler.com/articles/microservices.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉。引用が言うのは、事業の能力に沿って作られ、完全に自動化された配備の仕組みで独立に配備できるサービス、という点だけ。1 つのアプリを、各自のプロセスで動き、軽い仕組みで連携する小さなサービスの集まりとして作る型、という定義は、引用の範囲外）: 事業の能力に沿って切り、自動化した配備で独立に出せるサービス。記事は Conway の文言（Any organization that designs a system ... copy of the organization's communication structure）も引いており、その部分も照合できた（照合の記録。出典は S086）。 使いどころ（本 skill の整理）: マイクロサービスの定義（事業の能力に沿い、独立に配備できる）。チーム構成との関係は、引用の範囲外。

### S022 Martin Fowler「Monolith First」

> Almost all the successful microservice stories have started with a monolith that got too big and was broken up

> you should build a new application as a monolith initially, even if you think it's likely that it will benefit from a microservices architecture later on.

> even experienced architects working in familiar domains have great difficulty getting boundaries right at the beginning.

- 媒体・日付: martinfowler.com bliki、2015 年 6 月 3 日
- URL: https://martinfowler.com/bliki/MonolithFirst.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉。引用が言うのは、成功したマイクロサービスの事例の多くが大きくなったモノリスを割った出発点を持つこと、新しいアプリはマイクロサービスの利益が見込めても最初はモノリスで作るべきこと、熟練した設計者でも熟知した領域で最初に境界を正しく引くのは難しいこと。最初から割った例は深刻な困難に陥りやすいこと・モジュール性を守ること・境界は動かしにくいことは、引用の範囲外）: 成功した例の多くは、大きくなったモノリスを割った出発点を持つ。最初はモノリスで作る。境界は最初は当てにくい。 使いどころ（本 skill の整理）: 新規開発でマイクロサービスから始めるかどうか。境界を後で決める論点。／モノリス先行か最初から分割かの相談。反対意見（S023）とセットで示す。／揺り戻しの理論面の根拠。事例の話の観察であり、反例もありうると添える。 注意: 事例の話の観察であり統計ではない。反対の立場は S023（Tilkov）にある。

### S023 Stefan Tilkov, Don't start with a monolith（批判側）

> I’m firmly convinced that starting with a monolith is usually exactly the wrong thing to do.

- 媒体・日付: 2015-06-09
- URL: https://martinfowler.com/articles/dont-start-monolith.html
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 短い引用のみ。© Martin Fowler サイト掲載（著者 Stefan Tilkov）。短い引用のみ。 要旨（本 skill の言葉。引用が言うのは、モノリスから始めるのはたいてい正に誤ったやり方だと確信している、という点だけ。新しく作る時点こそ分割を考えるべきという主張・後回しにできるという考えへの反対・対象領域を十分知っていることが前提という共通点は、引用の範囲外）: モノリスから始めることに強く反対する。 使いどころ（本 skill の整理）: Monolith First への反対論を並べるとき。 区分の根拠: (i)。Monolith First への反論を主題とする記事（批判側）。

### S024 Martin Fowler「Microservice Trade-Offs」

> Like any architectural style, microservices bring costs and benefits. To make a sensible choice you have to understand these and apply them to your specific context.

- 媒体・日付: martinfowler.com、2015 年 7 月 1 日（頁表示 01 July 2015）
- URL: https://martinfowler.com/articles/microservice-trade-offs.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉。引用は、費用と利益を文脈に当てはめて選ぶ部分だけ。利点と費用の個別の項目は引用の範囲外）: 利点（モジュール境界の強化・独立した配備・技術の多様性）と費用（分散・結果整合性・運用の複雑さ）を並べ、文脈で選ぶ。 使いどころ（本 skill の整理）: 分割の得失を表で並べる論点。

### S025 Martin Fowler「Microservice Premium」

> microservices introduce complexity on their own account. This adds a premium to a project's cost and risk - one that often gets projects into serious trouble.

- 媒体・日付: martinfowler.com bliki（日付は頁から抽出できず）
- URL: https://martinfowler.com/bliki/MicroservicePremium.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉。引用が言うのは、マイクロサービスが自ら複雑さを持ち込み、プロジェクトの費用とリスクに割増を乗せ、しばしば深刻な困難に陥らせること。複雑な系でしか見合わないという条件は、引用の範囲外）: マイクロサービスは、費用とリスクに割増を乗せる。 使いどころ（本 skill の整理。引用の範囲外）: 小さな系にマイクロサービスを勧めない判断。／「分割の代償」の語。揺り戻しの事例（S104 以降）を読む前の枠組み。 注意: 筆者（Fowler）の主張で、実測の根拠ではない。

### S026 Martin Fowler「Microservice Prerequisites」

> if you don't have certain baseline competencies, you shouldn't consider using the microservice style.

> it's essential that a monitoring regime is in place to detect serious problems quickly.

> Rapid application deployment: with many services to manage, you need to be able to quickly deploy them, both to test environments and to production.

- 媒体・日付: martinfowler.com bliki、2014 年 8 月 28 日
- URL: https://martinfowler.com/bliki/MicroservicePrerequisites.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉。引用が言うのは、基本の能力が無ければマイクロサービスを検討すべきでないこと、重大な問題を速く見つける監視の体制が要ること、迅速なアプリの配備が要ること。迅速な環境の用意は、引用の範囲外）: 基本の監視・迅速なアプリの配備といった下地が無ければ、マイクロサービスは選ばない。 使いどころ（本 skill の整理）: 採用前の運用能力の点検項目。

## 決定の記録（ADR）

### S027 Michael Nygard「Documenting Architecture Decisions」

> Small, modular documents have at least a chance at being updated.

> Numbers will not be reused.

- 媒体・日付: Cognitect blog、2011 年 11 月 15 日
- URL: https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。ページ末尾に、権利放棄の文言（has waived all copyright and related or neighboring rights）の表示がある。CC0 の名称は頁から確認できていないため、本 skill では短い引用のみで扱う。 要旨（本 skill の言葉。引用が言うのは、小さく分けた文書には、少なくとも更新される見込みがあることと、番号は再利用しないこと。力関係（背景）と 1 つの決定を残すこと・リポジトリに置くこと・取り消した決定の記し方・長い文書は更新されないことは、引用の範囲外）: 小さな文書には更新される見込みがある。番号は再利用しない。 使いどころ（本 skill の整理）: ADR の番号と、小さな文書を勧める理由。書式・置き場所・状態は、引用の範囲外。

### S029 Michael Nygard, Documenting Architecture Decisions（様式）

> If a later ADR changes or reverses a decision, it may be marked as "deprecated" or "superseded" with a reference to its replacement.

- 媒体・日付: 2011-11-15
- URL: https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。ページ末尾に、権利放棄の文言（has waived all copyright and related or neighboring rights）の表示がある。CC0 の名称は頁から確認できていないため、本 skill では短い引用のみで扱う。（S027 と同じ頁）。 要旨（本 skill の言葉。引用が言うのは、後の ADR が決定を変更・覆すとき、元の ADR に「deprecated」や「superseded」を付け、置き換え先への参照を付けることがある、という点だけ。Title・Context・Decision・Status・Consequences の 5 部の様式・順に採番すること・1〜2 頁・full sentence で書くこと・結果を良いものだけでなく全部書くことは、引用の範囲外）: 置き換えられた ADR に、状態と置き換え先への参照を付けることがある。 使いどころ（本 skill の整理）: 置き換えの状態と参照の書き方を示すとき。Nygard 型の様式全体を示すとき（MADR・Azure との比較）は、引用の範囲外。

### S030 Martin Fowler「Architecture Decision Record」

> An Architecture Decision Record (ADR) is a short document that captures and explains a single decision relevant to a product or ecosystem.

> the act of writing them helps to clarify thinking, particularly with groups of people.

- 媒体・日付: martinfowler.com bliki、2026 年 3 月 24 日
- URL: https://martinfowler.com/bliki/ArchitectureDecisionRecord.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉。引用が言うのは、ADR が 1 つの決定を短い文書に捉えて説明するものであることと、書く行為が、特に複数人での考えの整理に効くこと。文脈・決定・影響とともに記すこと・決定が変わっても書き換えず後継の決定へ結ぶこと・記録としての効用は、引用の範囲外）: 1 つの決定を短く記す。書く行為自体が考えの整理に効く。 使いどころ（本 skill の整理）: 決定の記録の取り方。／ADR を勧める理由（書く行為が考えの整理に効く）。記録としての効用は、引用の範囲外。

### S031 Martin Fowler, Architecture Decision Record（superseded）

> Once an ADR is accepted, it should never be reopened or changed - instead it should be superseded.

- 媒体・日付: 2026-03-24
- URL: https://martinfowler.com/bliki/ArchitectureDecisionRecord.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。© Martin Fowler。短い引用のみ。 要旨（本 skill の言葉。引用が言うのは、受理した ADR は再び開いたり変えたりせず、置き換えるべきことだけ。判断がどれだけ続いたかの履歴になることは、引用の範囲外）: 受理後は書き換えず、置き換える。 使いどころ（本 skill の整理）: 運用ルール。

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
- 備考: ライセンス: 逐語可（出典明記・各条件に従う）。頁に「This website and example diagrams are licensed under a Creative Commons Attribution 4.0 International License」。出典を示せば引用・翻案できる（CC BY 4.0）。 要旨（本 skill の言葉）: システム・コンテナ・コンポーネント・コードの 4 階層の抽象と、システムコンテキスト・コンテナ・コンポーネント・コードの図、補助の図（landscape・dynamic・deployment）で構成する。記法と道具には依存しない。作者は Simon Brown で、UML や 4+1 ビューに着想を得て簡素化したと FAQ が述べる（作者と着想は引用の範囲外。FAQ の頁で確認）。 使いどころ（本 skill の整理）: 構成図の描き方、図の粒度、読み手ごとの図の使い分け。 注意: FAQ の頁で、作者名と UML・4+1 への言及、ライセンス表示を確認した。 区分の根拠: C4 の公式サイトで、C4 が何であるかの一次資料なので A（(i)(ii) に当たらない。成果の主張や他の手法との比較は一般化しない）。

## 品質特性とトレードオフ

### S047 arc42 ドキュメント（10 品質要求）

> you should know what qualities are really important for your stakeholders, in a specific and measurable way.

> Quality scenarios make quality requirements concrete and allow to decide whether they are fulfilled (in the sense of acceptance criteria).

> In literature, the idea of a quality attribute tree has also been described, which puts the generic term "quality" as the root and uses a tree-like refinement of the term "quality".

- 媒体・日付: 頁に日付表示なし
- URL: https://docs.arc42.org/section-10/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。引用元の頁（docs.arc42.org）のライセンスは確認できていない。別に、arc42 のライセンス頁（https://arc42.org/license）は、テンプレートそのものを CC BY-SA 4.0 とし、クレジットの表示・ライセンスへのリンク・変更の明示を求め、組織の外へ翻案を公開するときは同じライセンスで公開する（継承）と述べる（保存原稿で確認）。この条件は、テンプレートについてのもので、本頁の引用や翻案に及ぶとは確認できていないため、本頁は短い引用のみで扱う。 要旨（本 skill の言葉。引用が言うのは、利害関係者にとって本当に重要な品質を具体的・測定可能に把握すべきこと、品質シナリオが品質要求を具体にし満たしたかを判断できるようにすること、文献に品質ツリーという考え方が述べられていること。品質ツリーや品質シナリオを使うべき、は引用の範囲外）: 品質は、具体的・測定可能に把握する。品質シナリオは、要求を具体にする。品質ツリーは、文献にある考え方。 使いどころ（本 skill の整理）: 「速く」「安全に」を測れる形にするとき。 区分の根拠: arc42 の公式文書で、arc42 が何であるかの一次資料なので A（(i)(ii) に当たらない。成果の主張や他の手法との比較は一般化しない）。

### S051 Neal Ford・Rebecca Parsons・Patrick Kua「Building Evolutionary Architectures」（公式サイト）

> Evolutionary architectures make it explicit what "fit" means with as much automation as possible.

- 媒体・日付: evolutionaryarchitecture.com（頁末「© 2017」）
- URL: https://evolutionaryarchitecture.com/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。頁末は「All rights reserved」。短い引用に留める。 要旨（本 skill の言葉。引用が言うのは、進化的アーキテクチャは「適合」の意味を明示し、できる限り自動化する、という点だけ。増分で作ること・適応度関数という語・技術と業務の両方の変化に耐えることは、引用の範囲外）: 進化的アーキテクチャは、「適合」の意味を明示し、できる限り自動化する。自動で測定・検査する方法は、引用の範囲外。 使いどころ（本 skill の整理）: 構造の規則を自動で検査する論点。何を自動で測るかは、本 skill の整理（応用）。 区分の根拠: 書籍の公式サイトで、進化的アーキテクチャが何であるかの一次資料なので A（(i)(ii) に当たらない。成果の主張や他の手法との比較は一般化しない）。

### S055 Martin Fowler, "Yagni"

> The common reason why people build presumptive features is because they think it will be cheaper to build it now rather than build it later.

> Even in this happy case, building the presumptive feature incurs two serious costs. The first cost is the cost of delayed value.

- 媒体・日付: martinfowler.com, 2015 年 5 月 26 日。XP に由来する（同記事: "Yagni is a way to refer to the XP practice of Simple Design"、起源は Kent Beck と Chet Hendrickson の会話と脚注にある）
- URL: https://martinfowler.com/bliki/Yagni.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。表示なし（著作権は各権利者。引用は短く）。 要旨（本 skill の言葉。引用は、見込みの機能を作る理由と、遅れる価値の費用の部分だけ。作る費用・持ち越す複雑さの費用・変えやすさが前提という話は引用の範囲外）: 今は要らない機能を「先に作ると安い」と思って作るのは、作る費用・遅れる価値の費用・持ち越す複雑さの費用を払う。Yagni は要らないものを作らないことで、設計をしないことではなく、変えやすさ（リファクタリング・テスト）が前提になる。 使いどころ（本 skill の整理）: 過剰設計への批判の定番。「将来のため」の抽象化を止める根拠。変えやすさ（リファクタリング等）が前提だという趣旨も同記事にある（要旨。詳細は記事で確認のこと）。 区分の根拠: 記事の記述。XP 側の原典は未取得。 注意: XP 側の原典は未取得。

## クラウド事業者の指針と配備の原則

### S057 AWS Well-Architected Framework（トップ頁）

> The process for reviewing an architecture is a constructive conversation about architectural decisions, and is not an audit mechanism.

- 媒体・日付: 2026-11-16 最終更新（頁表示）
- URL: https://docs.aws.amazon.com/wellarchitected/latest/framework/framework.html
- URL（原稿）: https://docs.aws.amazon.com/wellarchitected/latest/framework/framework.md
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。著作権は Amazon Web Services, Inc. 等に帰属（ページ末尾の Copyright 表記）。再利用の許諾条件は取得時には確認できず。短い引用のみ・要旨を基本とする。 要旨（本 skill の言葉）: アーキテクチャのレビューは監査ではなく、判断をめぐる建設的な対話として行う。 使いどころ（本 skill の整理）: レビューを裁く場にしない言い方の根拠。 区分の根拠: Well-Architected の公式文書で、その指針が何であるかの一次資料なので A（(i)(ii) に当たらない。成果の主張や他の手法との比較は一般化しない）。

### S058 AWS Well-Architected Framework（分散するアーキテクチャ）

> Instead of centralizing architecture decisions, distribute architectural capability to the teams that build and operate workloads.

- 媒体・日付: 2026-11-16 最終更新（頁表示）
- URL: https://docs.aws.amazon.com/wellarchitected/latest/framework/framework.html
- URL（原稿）: https://docs.aws.amazon.com/wellarchitected/latest/framework/framework.md
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。著作権は Amazon Web Services, Inc. 等に帰属（ページ末尾の Copyright 表記）。再利用の許諾条件は取得時には確認できず。短い引用のみ・要旨を基本とする。 要旨（本 skill の言葉。引用が言うのは、判断を中央に集めず、作って運用するチームにアーキテクチャの能力を分ける、という点だけ。標準・参照アーキテクチャ・専門家のレビュー・自動検査で支えることは、引用の範囲外）: アーキテクチャ判断を中央の担当に集めず、作って運用するチームに能力を分ける。 使いどころ（本 skill の整理）: 中央の設計審査会か、チームへの権限委譲かを問われたとき。 区分の根拠: Well-Architected の公式文書で、その指針が何であるかの一次資料なので A（(i)(ii) に当たらない。成果の主張や他の手法との比較は一般化しない）。

### S059 AWS Well-Architected Framework（進化的アーキテクチャ）

> Design for change rather than designing for a fixed end state.

- 媒体・日付: 2026-11-16 最終更新（頁表示）
- URL: https://docs.aws.amazon.com/wellarchitected/latest/framework/framework.html
- URL（原稿）: https://docs.aws.amazon.com/wellarchitected/latest/framework/framework.md
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。著作権は Amazon Web Services, Inc. 等に帰属（ページ末尾の Copyright 表記）。再利用の許諾条件は取得時には確認できず。短い引用のみ・要旨を基本とする。 要旨（本 skill の言葉。引用が言うのは、固定の最終形ではなく変化を前提に設計する、という点だけ。判断をなるべく可逆にすること・計測で仮定を検証すること・カナリアやフィーチャーフラグで小さく試すことは、引用の範囲外）: 固定の最終形ではなく変化を前提に設計する。 使いどころ（本 skill の整理）: 最初に完全な設計を求められたとき。 区分の根拠: Well-Architected の公式文書で、その指針が何であるかの一次資料なので A（(i)(ii) に当たらない。成果の主張や他の手法との比較は一般化しない）。

### S061 AWS Well-Architected Framework（信頼性の柱）

> Resilience is the ability of a workload to recover from infrastructure or service disruptions, acquire computing resources dynamically to meet demand, and mitigate disruptions such as misconfigurations or transient network issues.

- 媒体・日付: 頁に日付表示なし（取得日の頁）
- URL: https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability.html
- URL（原稿）: https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability.md
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。著作権は Amazon Web Services, Inc. 等に帰属（ページ末尾の Copyright 表記）。再利用の許諾条件は取得時には確認できず。短い引用のみ・要旨を基本とする。 要旨（本 skill の言葉。引用が言うのは、レジリエンスの定義だけ。信頼性の柱の中心がレジリエンスであること・ほかの柱も信頼性に効くことは、引用の範囲外）: レジリエンスは、障害からの回復、需要に応じた資源の動的な確保、設定の誤りや一時的なネットワークの問題といった障害の緩和を含む能力。数値目標はこの頁の引用範囲では確認していない。 使いどころ（本 skill の整理）: レジリエンスを、回復だけでなく、資源の確保と障害の緩和まで含めて説明するとき。可用性との関係の説明は、引用の範囲外。復旧時間は、回復の側面を測る指標の 1 つとして扱う（本 skill の整理）。 区分の根拠: Well-Architected の公式文書で、その指針が何であるかの一次資料なので A（(i)(ii) に当たらない。成果の主張や他の手法との比較は一般化しない）。

## 分散とデータ

### S067 Peter Deutsch「The Eight Fallacies of Distributed Computing」

> Essentially everyone, when they first build a distributed application, makes the following eight assumptions. All prove to be false in the long run and all cause big trouble and painful learning experiences.

> 1. The network is reliable 2. Latency is zero 3. Bandwidth is infinite 4. The network is secure 5. Topology doesn't change 6. There is one administrator 7. Transport cost is zero 8. The network is homogeneous

- 媒体・日付: James Gosling のサイト nighthacks.com にある頁（日付の表示なし）。もとは Sun の blog（blogs.sun.com/jag）にあった頁
- URL: https://nighthacks.com/jag/res/Fallacies.html
- 取得日: 2026-11-20
- 検証区分: B
- 備考: ライセンス: 短い引用のみ。頁にライセンス表示なし。短い引用に留める。8 項目の一覧は事実の列挙として要旨で書く。 要旨（本 skill の言葉）: 分散システムで人が置きがちな 8 つの誤った前提。ネットワークは信頼できる・遅延はゼロ・帯域は無限・安全・構成は変わらない・管理者は 1 人・転送の費用はゼロ・均質、の 8 つ。 使いどころ（本 skill の整理）: ネットワーク越しの呼び出しを設計に持ち込むときの点検項目。 区分の根拠: ミラー。Sun の元頁は取得できず、Wayback の URL も 404 だった。 注意: Deutsch と Gosling のどちらが 8 つ目を足したかの記述は頁に無い。本 skill では「Deutsch が挙げた誤謬」と書き、成立の細部は断定しない。

### S070 Eric Brewer, "CAP Twelve Years Later: How the 'Rules' Have Changed"

> The "2 of 3" formulation was always misleading because it tended to oversimplify the tensions among properties.

> CAP prohibits only a tiny part of the design space: perfect availability and consistency in the presence of partitions, which are rare.

> The CAP theorem states that any networked shared-data system can have at most two of three desirable properties: consistency (C) equivalent to having a single up-to-date copy of the data; high availability (A) of that data (for updates); and tolerance to network partitions (P).

- 媒体・日付: IEEE Computer 掲載、InfoQ 再掲 2012 年 5 月 30 日（原稿に "first appeared in Computer magazine" とある）
- URL: https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/
- 取得日: 2026-11-20
- 検証区分: B
- 備考: ライセンス: 短い引用のみ。表示なし（InfoQ と IEEE Computer Society の掲載。著作権は各権利者。引用は短く）。 要旨（本 skill の言葉）: CAP は、ネットワーク分断があるときに、完全な可用性と一貫性を同時には取れないという制約である。禁じられるのは、その分断があるときの両立だけで、設計の空間のごく一部にすぎない。分断は稀だと記事は述べる（記事の観察であり、個別のシステムのネットワークで成り立つかは、観測や障害モデルで確かめる）。一貫性と可用性は、記事の定義（引用にある。「最大 2 つ」という定理の言い方は、最初から誤解を招いたと記事が述べる）で読む。この文脈の可用性は、分断があるときの対象データへの応答の話で、通常時の稼働率や成功率の目標とは別の概念（本 skill の整理。引用の範囲外）。 使いどころ（本 skill の整理）: 提唱者自身による CAP の言い直し（2012 年）。「CP か AP か」で製品を分類する話への留保の根拠。引用は、製品の分類を直接は論じない。 区分の根拠: InfoQ 経由の再掲で照合した。IEEE 原版は取得しておらず、照合していない（凡例の B: 他媒体経由）。 注意: InfoQ 再掲の本文で照合した。IEEE 原版は未取得。

### S074 Martin Kleppmann「Please stop calling databases CP or AP」（批判側）

> The CAP theorem is too simplistic and too widely misunderstood to be of much use for characterizing systems.

- 媒体・日付: Martin Kleppmann の blog、2015 年 5 月 11 日
- URL: https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 逐語可（出典明記・各条件に従う）。頁末に「Unless otherwise specified, all content on this site is licensed under a Creative Commons Attribution 3.0 Unported License」（CC BY 3.0 の表示を確認した）。出典を示せば引用できる。ただし、skill の中では編集方針として、引用を短くする。 要旨（本 skill の言葉。引用が言うのは、CAP は単純化が過ぎ、誤解も多く、系の性質の記述にはあまり役立たない、という点だけ。データベースを CP や AP と呼ぶ分類への批判・より正確な枠組みへの誘導は、引用の範囲外）: CAP は、系の性質の記述には向かない。 使いどころ（本 skill の整理）: 「CAP だから」で選定を済ませる議論への留保。 区分の根拠: (i)。CAP を使った分類への批判を主題とする記事。Kleppmann 本人の文面で照合した。

### S075 Martin Kleppmann, "Please stop calling databases CP or AP"

> Consistency in CAP actually means linearizability , which is a very specific (and very strong) notion of consistency.

> Availability in CAP is defined as "every request received by a non-failing [database] node in the system must result in a [non-error] response".

- 媒体・日付: 個人ブログ, 2015 年 5 月 11 日（原稿の "Published by Martin Kleppmann on 11 May 2015"）
- URL: https://martin.kleppmann.com/2015/05/11/please-stop-calling-databases-cp-or-ap.html
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 逐語可（出典明記・各条件に従う）。S074 と同じ頁で、頁末の CC BY 3.0 の表示は S074 に書いた。ただし、skill の中では編集方針として、引用を短くする。 要旨（本 skill の言葉。引用が言うのは、CAP の一貫性は線形化可能性という非常に強い一貫性の意味であること、CAP の可用性は、故障していないノードが受けたすべての要求が、エラーでない応答を返すことと定義されること。ACID の C とは別物であること・実用の「高可用」と一致しないこと・製品を CP/AP に分けるのは雑という結論は、引用の範囲外）: CAP の一貫性は線形化可能性、可用性は非故障ノードが受けた要求への非エラー応答。 使いどころ（本 skill の整理）: CAP の用語を設計の議論で使うとき、定義を確認する習慣の根拠。 区分の根拠: (i)。S074 と同じ批判の記事なので、同じ区分の C（SKILL.md は定義を確かめるために使うが、使い方は区分に影響しない）。定義の指摘は原文で確認したが、「CP/AP の分類は無意味」という結論の当否は確認していない。 注意: 引用中の「linearizability ,」の空白と、可用性の引用の括弧書き（[database]・[non-error]）は原文のまま。S074 と同じ頁で、2 つの項目の引用は合わせて 3 文（S074 が 1 文、この項目が 2 文）。

## 段階的な移行

### S078 Martin Fowler「Strangler Fig」

> the term "Strangler Fig" is now often used to describe a gradual approach to legacy modernization.

- 媒体・日付: martinfowler.com bliki、頁表示 2024 年 8 月 22 日（2004 年の原記事「Strangler Application」を改稿した版。2001 年のオーストラリアの旅行に由来すると頁に書かれている）
- URL: https://martinfowler.com/bliki/StranglerFigApplication.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉。引用が言うのは、「Strangler Fig」の語が、段階的なレガシー刷新を指して使われることだけ。新しい系を古い系の周りに育てて少しずつ置き換えること・投資と効果が段階的に見えることは、引用の範囲外）: 段階的なレガシー刷新を指す語。 使いどころ（本 skill の整理）: レガシー刷新の進め方。全面書き換えを避ける論点は、引用の範囲外。 区分の根拠: 2024 年版の頁として。2004 年の初出の文面は未取得。 注意: 2024 年版の頁として。2004 年の初出の文面は未取得。

### S079 Martin Fowler, Strangler Fig

> The alternative that my colleagues and I prefer, is to do a gradual process of modernization.

> What's worse, much of that behavior is stuff that isn't really wanted, so building it is a waste.

- 媒体・日付: 2024-08-22
- URL: https://martinfowler.com/bliki/StranglerFigApplication.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。© Martin Fowler。短い引用のみ。 要旨（本 skill の言葉。引用が言うのは、筆者らは段階的な刷新を好むことと、全面置換で既存システムの挙動を作り直す文脈で、その挙動の多くは本当は求められていないもので、作るのは無駄だということ。個々の挙動を廃止できるかの判断・全面置換との比較・仕様の把握が難しいこと・小さな追加から始めること・継ぎ目（seam）・移行用の一時的なコード・組織を変えないと同じ構造に戻ること（コンウェイの法則）は、引用の範囲外）: 段階的な刷新を好む。全面置換で作り直す既存の挙動の多くは求められておらず、作るのは無駄だ。 使いどころ（本 skill の整理）: 一括の作り直しを求められたとき。

### S082 Martin Fowler「Branch By Abstraction」

> that allows you to release the system regularly while the change is still in-progress.

> We gradually move all client code over to use the abstraction layer until all interaction with the supplier is done by the abstraction layer.

> Once we are ready we switch that section of the client code to use the new supplier.

照合の範囲: 1 つ目の引用は、文の途中から始まる。もとの文は、冒頭の「Branch by Abstraction」の直後に頁の脚注番号が入り、前半は一致を確かめられなかったため、引用から外した。一致を確かめた後半だけを残した（頁の本文で逐語の一致を確認）。2 つ目と 3 つ目の引用は、全文が頁の本文と一致した。

- 媒体・日付: martinfowler.com bliki、2014 年 1 月 7 日
- URL: https://martinfowler.com/bliki/BranchByAbstraction.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉。引用が言うのは、変更の途中でも、システムを定期的にリリースできること、供給元とのやり取りがすべて抽象の層を通るまで呼び出し側を少しずつ移すこと、準備ができたら呼び出し側のその区画を新しい供給元へ切り替えること。技法の名前と、大きな変更を段階的に進める技法だという文の前半・置き換えたい部分に抽象の層を挟むという説明・既存の実装を使う抽象・同じ抽象の背後で新しい実装を作ること・段階に分けた整理・用語の出どころ（Paul Hammant・Stacy Curl）は、引用の範囲外）: 変更の途中でも、システムを定期的にリリースできる。呼び出し側を抽象の層へ移し、区画ごとに新しい供給元へ切り替える。 使いどころ（本 skill の整理）: 大規模な置き換えを小さな手順に分ける論点。／内部の部品（ライブラリ・フレームワーク・モジュール）の入れ替え。Strangler は外部から見える境界の入れ替えで使い分ける（この使い分けは引用の範囲外）。 区分の根拠: 引用ブロックの 3 つの引用すべてが、頁の本文と逐語で一致した。 注意: 1 つ目の引用は、文の前半（技法の名前と、大きな変更を段階的に進める技法だという部分）を、脚注番号をまたぐため引用していない。そのため、この項目の本文の要旨でも、前半は引用の範囲外として扱う。

### S083 Danilo Sato, Parallel Change（Expand and Contract）

> is a pattern to implement backward-incompatible changes to an interface in a safe manner, by breaking the change into three distinct phases: expand, migrate, and contract.

- 媒体・日付: 2014-05-13
- URL: https://martinfowler.com/bliki/ParallelChange.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。© Martin Fowler。短い引用のみ。 要旨（本 skill の言葉。引用が言うのは、インターフェースの後方互換のない変更を、expand・migrate・contract の 3 つの段階に分けて安全に行うパターンであること。括弧内の説明（新旧併存・利用側を新へ・旧を除去）は引用の範囲外）: 後方互換のない変更を、拡張（新旧併存）・移行（利用側を新へ）・縮小（旧を除去）に分けて安全に行う。 使いどころ（本 skill の整理）: インターフェース（API）の後方互換のない変更。スキーマ変更への応用は、引用の範囲外。

## チームと構造（Conway の法則）

### S086 Melvin E. Conway「How Do Committees Invent?」（Datamation）

> organizations which design systems (in the broad sense used here) are constrained to produce designs which are copies of the communication structures of these organizations.

> Given any design team organization, there is a class of design alternatives which cannot be effectively pursued by such an organization because the necessary communication paths do not exist.

- 媒体・日付: Datamation、1968 年（著者サイトの転載頁に「Copyright 1968, F. D. Thompson Publications, Inc. Reprinted by permission of Datamation magazine」と明記。号の月は原稿から確認できていない）
- URL: https://www.melconway.com/Home/Committees_Paper.html
- 参考（照合には使っていない）: https://www.melconway.com/Home/pdf/committees.pdf（原誌のスキャン。取得したが OCR の質が低い。照合に使った文書は上の URL の転載頁）
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。雑誌の著作権は出版社に帰属。転載は許諾つきと頁に明記。短い引用に留める。 要旨（本 skill の言葉）: システムを設計する組織は、その組織の連絡の構造をなぞった設計を出してしまう。組織の形は、取り得る設計の案を先に絞っている。 使いどころ（本 skill の整理）: チーム境界とモジュール・サービスの境界を一緒に決める論点。逆コンウェイ操作の前提。／Conway の法則の一次資料（1968 年）。後の「逆 Conway 操作」の話に進む前に、原論文の主張が「写る」であって「写せ」ではない点を押さえる。 区分の根拠: 著者本人のサイトにある転載。原誌の頁そのものではない点は注記。 注意: 原誌のスキャン PDF は OCR の質が低く、照合に使っていない（照合は著者サイトの転載頁）。Fowler の頁や記事が引く Conway の文は言い換えで、原文とは文言が違う。逐語はこの項目の原文を使う。

### S090 Martin Fowler, Conway's Law（逆コンウェイ）

> Here we deliberately alter the development team's organization structure to encourage the desired software architecture, an approach referred to as the Inverse Conway Maneuver

> The term "inverse Conway maneuver" was coined by Jonny LeRoy and Matt Simons in an article published in the December 2010 issue of the Cutter IT journal.

- 媒体・日付: 2022-10-20
- URL: https://martinfowler.com/bliki/ConwaysLaw.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。© Martin Fowler。短い引用のみ。 要旨（本 skill の言葉）: 望む構造に合わせてチーム構成を意図的に変える。用語は Jonny LeRoy と Matt Simons が作ったと Fowler の頁にある。 使いどころ（本 skill の整理）: 「逆コンウェイ」の定義の言い方。

## アーキテクトの役割

### S095 Martin Fowler「Who Needs an Architect?」（IEEE Software）

> Improving the development team’s ability gives an architect much greater leverage than being the sole decision maker and thus running the risk of being an architectural bottleneck.

- 媒体・日付: IEEE Software 2003 年 7/8 月号（PDF 内の表示）
- URL: https://martinfowler.com/ieeeSoftware/whoNeedsArchitect.pdf
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。PDF に「© 2003 IEEE」。短い引用に留める。 要旨（本 skill の言葉。引用が言うのは、開発チームの能力を高めるほうが、唯一の決定者になってアーキテクチャのボトルネックになる危険を負うより、アーキテクトの影響力が大きいという点だけ。アーキテクチャは重要なことの共有された理解であること・アーキテクトは重要なことを気にかける人であることは、引用の範囲外）: 判断を独占するより開発者を育てるほうが効く。 使いどころ（本 skill の整理）: アーキテクトの役割。決定の独占と指導の対比。「建築」の比喩への留保と、PDF にある「単一の頭脳が概念の統一性を保つ」という旧来像（Architectus Reloadus）への言及は、引用に載せていないので、本 skill の根拠にしない。 区分の根拠: 著者サイトが公開する PDF。S006・S096 と同じ文書なので、同じ区分の A（(i)(ii) に当たらない）。

### S096 Martin Fowler, "Who Needs an Architect?"（アーキテクトの価値の見方）

> an architect’s value is inversely proportional to the number of decisions he or she makes.

- 媒体・日付: IEEE Software、2003 年（S095 と同じ記事）
- URL: https://martinfowler.com/ieeeSoftware/whoNeedsArchitect.pdf
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 短い引用のみ。版権表示は IEEE。引用は短く。 要旨（本 skill の言葉。引用が言うのは、アーキテクトの価値は、本人が下す決定の数に反比例するという点だけ。重要な決定を全部下す「上から決める」型についての議論・チームの力を引き上げて決定を分ける「現場に入る」型を推すこと・筆者の所属会社の内部での見立てという限定は、引用の範囲外）: アーキテクトの価値は、本人が下す決定の数に反比例する。一般則として扱わない。 区分の根拠: 著者サイトが公開する PDF。S006・S095 と同じ文書なので、同じ区分の A（(i)(ii) に当たらない。文書の主題は役割の論考）。 使いどころ（本 skill の整理）: アーキテクトの役割の見方。この記事に "ivory tower" の語は無い（原稿で 0 件）。象牙の塔の語として引かない。 注意: 記事に「ivory tower」の語は無い（原稿で 0 件）。象牙の塔の語として引かない。

## 批判と揺り戻し

### S103 DHH, "The Majestic Monolith"

> It’s the essence of cargo culting.

> we have just 12 programmers

> The patterns that make sense for organizations orders of magnitude larger than yours, are often the exact opposite ones that'll make sense for you.

- 媒体・日付: Signal v. Noise, 2016 年 2 月 29 日
- URL: https://signalvnoise.com/svn3/the-majestic-monolith/
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 短い引用のみ。表示なし（ページ末は © 1999 - 2023 Basecamp）。引用は短く。 要旨（本 skill の言葉。引用が言うのは、cargo culting の本質という一文（何を指すかは引用の範囲外）、プログラマが 12 人だけという記述、桁違いに大きい組織に合う型は、自分に合う型とは正反対のことが多いという主張。マイクロサービス志向が何千人規模の組織には妥当という認識・Basecamp が 2003 年からモノリスで書いてきた経緯は、引用の範囲外）: 筆者は、桁違いに大きい組織に合う型は、自分の組織に合う型とは正反対のことが多いと言う。Basecamp のプログラマは 12 人と、同社の自称として述べる。 使いどころ（本 skill の整理）: 揺り戻しの意見側の代表。「組織の規模に合う型を選ぶ」の根拠。Basecamp の人数は 2016 年時点の自称で、一般化しない。 区分の根拠: (i)。記事の主題は、規模に合わない型を採ることへの反論（(i)）。1 つ目の引用は cargo culting の本質という一文で、何を指すかは引用に含まれない。2 つ目の引用は Basecamp のプログラマの数（12 人）。3 つ目の引用は、桁違いに大きい組織に合う型についての主張。 注意: 人数（12 人）は記事の記述で確認した。

### S104 Twilio Segment（Alexandra Noonan）, "Goodbye Microservices: From 100s of problem children to 1 superstar"

> Instead of enabling us to move faster, the small team found themselves mired in exploding complexity.

> As our velocity plummeted, our defect rate exploded.

> with 3 full-time engineers spending most of their time just keeping the system alive.

- 媒体・日付: Segment（現 Twilio）の開発者向けブログ, 2018 年 7 月 10 日
- URL: https://segment.com/blog/goodbye-microservices/
- URL（原稿）: https://www.twilio.com/en-us/blog/developers/best-practices/goodbye-microservices（Twilio ドメイン側の同記事のページ。この項目の引用の照合に使った）
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 短い引用のみ。表示なし（ページ末は Copyright © 2026 Twilio Inc）。引用は短く。 要旨（本 skill の言葉。引用は、小さなチームが複雑さに足を取られたこと、速度が落ち欠陥が増えたこと、3 人の常勤が維持に追われたことの部分だけ。宛先ごとに分けた経緯・共有ライブラリの変更の波及・まとめた後の生産性・結論の節の記述は引用の範囲外）: Segment は宛先（destination）ごとに分けたサービスを多数運用したところ、共有ライブラリの変更の試験・展開が全体に波及し、速度が落ち、欠陥が増え、3 人の常勤が維持に追われた。宛先を 1 つのリポジトリ・1 つのサービスにまとめ、依存の版を 1 つに揃えたところ生産性が上がったと自称する。結論の節に「簡単な決定ではなかった」とも書く。 使いどころ（本 skill の整理）: 小さなチームでサービスを増やしすぎた失敗の型と、揺り戻しの公開事例。マイクロサービス一般の否定ではない。「宛先ごとのサービス」という分け方の話は、引用の範囲外。数値は同社の自称で、一般化しない。 区分の根拠: (ii)。会社の自称の記事。記事の記述が原文と一致することを確認した。

### S105 Shopify Engineering（Kirsten Westeinde）, "Deconstructing the Monolith"

> We chose to evolve Shopify into a modular monolith, meaning that we would keep all of the code in one codebase, but ensure that boundaries were defined and respected between different components.

> Each software architecture has its own set of pros and cons, and a different solution will make sense for an app depending on what phase of its growth it is in.

> It has been worked on for over a decade by more than a thousand developers.

- 媒体・日付: Shopify Engineering, 2019 年 2 月 21 日
- URL: https://shopify.engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 短い引用のみ。表示なし（著作権は各権利者。引用は短く）。 要旨（本 skill の言葉。引用が言うのは、モジュラーモノリス（1 つのコードベースの中で境界を定めて守る）へ進化させたこと、成長の段階によって適する解が変わること、十年超・千人超の開発者が関わったこと。Rails であること・境界が無く結合が非常に高かったこと・マイクロサービスを選ばなかったことは、引用の範囲外）: 十年超・千人超の開発者が触れたモノリスを、1 つのコードベースの中で境界を定めて守るモジュラーモノリスへ進化させた。成長の段階によって適する形は変わると述べる。 使いどころ（本 skill の整理）: モノリスの中で境界を定めて守る道の事例（マイクロサービスへ行かなかったという位置づけは、引用の範囲外）。「千人超」「十年超」は同社の自称で、小さな組織に当てはめない。 区分の根拠: (ii)。会社の自称の記事。記事の記述が原文と一致することを確認した。

### S106 Istio（Craig Box, Google）, "Introducing istiod: simplifying the control plane"

> Microservices are a great pattern when they map services to disparate teams that deliver them, or when the value of independent rollout and the value of independent scale are greater than the cost of orchestration.

- 媒体・日付: Istio ブログ, 2020 年 3 月 19 日（Istio 1.5）
- URL: https://istio.io/latest/blog/2020/istiod/
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 短い引用のみ。表示なし（Istio ドキュメントのライセンスはページから確認できていない。U）。引用は短く。 要旨（本 skill の言葉。引用が言うのは、マイクロサービスが良い型になる 2 つの条件だけ。Istio の制御プレーンがどちらにも当たらないと利用者から聞いたこと・1.5 で複数の構成要素を 1 つのバイナリ istiod にまとめたことは、引用の範囲外）: マイクロサービスは、サービスが別々のチームに対応するとき、または独立した配備の価値と独立した拡大の価値の両方がオーケストレーションの費用を上回るときに良い型。 使いどころ（本 skill の整理）: 「分ける条件」を言葉にしている点で、判断基準の出典になる。揺り戻しの公開事例のうち、自社製品の構成を統合した例という位置づけは、引用の範囲外。 区分の根拠: (ii)。記事の主題は、自社の製品（istiod）の紹介。手法・指針の公式文書（S057〜S059）は、その指針が何であるかの一次資料なので A だが、この記事は自社の製品を自ら述べる文書なので C。記述が原文と一致することを確認した。

### S107 Prime Video Tech（Marcin Kolny）, "Scaling up the Prime Video audio/video monitoring service and reducing costs by 90%"

> Moving our service to a monolith reduced our infrastructure cost by over 90%.

> the way we used some components caused us to hit a hard scaling limit at around 5% of the expected load.

> The two most expensive operations in terms of cost were the orchestration workflow and when data passed between distributed components.

- 媒体・日付: Prime Video Tech ブログ, 2023 年 3 月 22 日
- URL: https://web.archive.org/web/20231230202019/https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90（Internet Archive の保存ページ。保存時点は 2023-12-30 20:20:19 UTC。この項目の引用の照合に使った。ページ表記は © 1996-2023 Amazon）
- 参考（取得できなかった元の URL）: https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90（元の記事。取得時点では元のサイトに接続できなかった）
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 短い引用のみ。表示なし（著作権は Amazon。引用は短く）。 要旨（本 skill の言葉。引用が言うのは、サービスをモノリスへ移したらインフラ費用が 90% 超下がったこと、一部のコンポーネントの使い方のせいで想定負荷の約 5% で拡張の限界に当たったこと、費用が最も高い 2 つの操作がオーケストレーションのワークフローと分散コンポーネント間のデータの受け渡しだったこと。数千の同時ストリーム・Step Functions と Lambda・1 プロセスへの書き直し・状態遷移数・S3 の呼び出し・映像・音声の欠陥検出という対象は、引用の範囲外）: 90% 超は、同社の 1 つのサービス（記事の題名による監視サービス）のインフラ費用の削減で、開発や移行を含む総費用ではない。引用は「our service」と言い、Prime Video 全体の構成の話ではない。数値（"over 90%"）は同社チームの自称。 使いどころ（本 skill の整理）: 揺り戻しの公開事例の中心。モノリスへ移したらインフラ費用が 90% 超下がったという自称と、費用が最も高かった操作（オーケストレーションと、分散コンポーネント間のデータの受け渡し）を、同社チームの自称として示す。「サーバーレス・分散が合わないのは、データの受け渡しが多い処理」という限定は、本 skill の整理（引用は、費用が最も高い操作を述べるだけ）。「ケースごとに決める」旨と、拡張が縦方向になる代償は、引用に載せていないので、本 skill の根拠にしない。 区分の根拠: (ii)。同社チームの自称。アーカイブ版の原文と一致。元サイトの現行の記事の有無は未確認。 注意: アーカイブ版の原文と一致した。元ドメインには取得時に接続できず（名前解決できず）、元記事の現行の公開状況は未確認。

## 未検証・調査の限界

未検証（U）の項目は番号を振らず、事実・引用として使わない。次の表は、確かめられなかったもの・取得できなかったものと、skill での扱いである。

| 対象 | 状況 | 扱い |
|------|------|------|
| 逆コンウェイ操作の初出（LeRoy と Simons、Cutter IT journal、2010 年 12 月号） | Fowler の頁の記述経由のみ。原本は未確認（S090） | 「Fowler によれば」と書く |
| Conway 原論文の掲載号の月（Datamation 1968 年 4 月とする説明） | 原稿から確認できていない（年のみ確認。S086） | 年だけ書く |
| Parnas 1972 の ACM Digital Library の頁 | 403 で取得不可。S008 は大学サイトの PDF の複製（B）。ACM の DOI は本文から確かめられなかった | URL は大学の PDF とし、DOI は書かない |
| Fowler の「Strangler Application」2004 年の初出 | 取得せず。S078 は 2024 年に改稿した頁 | 2004 年の初出の文面は引かず、時点を「2024 年の改稿版」と書く |
| Deutsch の Sun の元頁と、第 8 の誤謬の追加者 | Sun の元頁は 404（Wayback も 404）。S067 はミラー（B） | 「Deutsch が挙げた」と書き、成立の細部は断定しない |
| CAP Twelve Years Later の IEEE 原版 | InfoQ の再掲で照合した。IEEE 原版は取得しておらず、照合していない。S070 は B（S070） | 区分 B のまま。原版へ差し替えるまで、本人の発言として逐語で示さず、要旨にする |
| Branch by Abstraction の Paul Hammant 原典 | Fowler の頁の記述のみ。原典の頁は未取得（S082） | 原典の記述として引かず、Fowler の頁として引く |
| Fowler の「ivory tower」（象牙の塔）の語 | "Who Needs an Architect?" に無い（原稿で 0 件。S096） | 象牙の塔批判の一次資料は別途探す。Fowler の記事の語として引かない |
| Prime Video の元記事の現行の公開状況 | 元のドメインに接続できなかった（Internet Archive の保存で取得）。事例はいずれも各社の自称（S107） | 費用・人数の数値を一般化しない |
| Azure Architecture Center の原稿リポジトリとライセンス | 原稿リポジトリは GitHub の API・raw・HTML のいずれも 404 で、LICENSE を確認できなかった（S017） | 逐語引用は短くし、再配布可と書かない |
| Istio ドキュメントのライセンス | 頁から確認できなかった（S106） | 短い引用にとどめ、再配布可と書かない |
| AWS Well-Architected の原稿とライセンス | 公開の原稿リポジトリは見つからず、ライセンス表示も無い（S057・S058・S059・S061） | 短い引用と要旨にとどめる |

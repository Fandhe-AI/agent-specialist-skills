# engineer-infrastructure 出典台帳

`engineer-infrastructure`（SRE・プラットフォームエンジニアの相談役）の `SKILL.md` と `references/` が根拠にする出典の台帳。SRE の書籍とワークブックの公開版、人物・原典の一次資料、計測と警報の公開仕様、事故対応の公開文書、公開の安全・容量・費用・IaC・復旧の指針、配信の指標、公開された事後検証、歴史・組織の出典（DevOps・Platform の資料）、国内の公的資料から、`SKILL.md` と `references/` が引く項目を主題ごとに並べた。引用原文・媒体と日付・URL・取得日・検証区分・ライセンスを記す。台帳は通読せず、番号で検索して該当の項目だけ読む。番号は振り直さない。欠番は欠番のままにする（この台帳に載せていない番号は、まだ引いていない項目である）。

全 119 件。逐語の引用を持つ項目が 114 件（引用ブロックは 200 件）、書誌のみ・要旨のみ（本文を引用しない）の項目が 5 件。区分の内訳は A 102 件、B 0 件、C 12 件、R 5 件。未検証の項目は番号を振らず、末尾の「未検証・調査の限界」に表で置いた。

## 凡例

- 検証区分
  - A: 原典・公式ページ・著者本人のサイト・発行元の頁の原稿（HTML・Markdown・PDF）、または原典の保存コピー（Internet Archive の Wayback Machine）を取得し、引用文が逐語で含まれることを、タグ除去と空白の正規化のうえで部分一致により照合した。日本語の PDF は抽出で文字間に空白が入るため、空白を除いて比較した（S125・S126・S127・S128）。引用が取得日の時点でページにあることの確認であり、主張の正しさの保証ではない
  - B: 第三者の複製・解説頁、他媒体経由で引いた文。引用文が、その頁の本文と一致することは確かめたが、原典そのものとの照合ではない（この台帳に B の項目は無い。Wikipedia だけを根拠にした項目は使わない）
  - C: 批判・留保・評価の側の主張。引用が逐語であることのみを確認し、主張の正しさ・因果は確認していない
  - R: 書誌（書名・著者・出版社・年・版）だけを出版社頁などで確かめた項目、または教科書的な事実を要旨だけで書いた項目（S071）。本文を引用しない
  - U: 未検証。事実・引用として使わない。末尾の表に集め、番号を振らない
- 事業者の自称の扱い: 事業者の文書・事例は、区分 A のまま、要旨と本文で「自称」「指針」と書いて区別する（他の skill の台帳は自称を C とする規則で、区分の規則が違う）
- 「自称」: 企業・組織・個人が自分の進め方や成果を自分で述べたもの。第三者による検証ではない（SRE の書籍の Google の運用、PagerDuty・Atlassian の運用、AWS の Builders' Library、各社の障害の報告、37signals の事例などは、その会社の自称として扱う）
- 数値（4 週と 8 週、5 営業日、事故 2 件、50% など）は、出典の側の自称・例の値である。skill が目標値として出さない。算術で導ける値（99.9% の 30 日あたりの許容の停止時間など）は「本 skill の整理（計算）」と明記して使う
- 引用の字形: 引用ブロックは、照合に使った正規化テキストの字形で書いた。引用符とアポストロフィは直線形、ダッシュは半角ハイフン（em ダッシュは「-」や「 - 」になっている）。タグの位置に入った空白（「tracing ,」「drift :」「isn't what you think it is .」など）も、照合のため正規化テキストのまま残した。原稿の見た目の字形とは違う。本文に引くときは字形を原文に戻してよいが、語は変えない
- 引用文は原文の語を改変していない。誤植と思われる語（S046 の PDF の「attribution accident to」）も直していない。日本語の要旨・使いどころ・備考は本 skill の言葉であり、発言者本人の発言ではない。要旨・使いどころの欄は、引用ブロックが言う範囲を超える内容（頁の他の箇所の要約）を含む。skill 本文が S 番号で支えてよいのは、引用ブロックが言うことだけで、残りは「本 skill の整理」と書く
- 項目の「URL」は利用者が開ける文書の URL。転送された先は「→」か括弧で書いた。「URL（原稿）」は、それとは別に照合に使った固定の原稿や保存コピーの URL（あるときだけ）。取得日は 2026-11-20（S071 は頁を取得していないので取得日なし）
- 再照合の手順（第三者が引用を確かめるとき）
  - 照合先: まず URL（利用者が開く頁）。頁が変わった・取得できない項目は、URL（原稿）または保存コピーを使う
  - PDF: テキストに抽出してから照合する（行末ハイフンの結合と合字の展開を加える）。日本語の PDF は文字間に空白が入るため、空白を除いて比べる
  - 比較の前処理: タグを除去し、HTML 実体を復号し、空白の連続を 1 つに畳み、引用符・アポストロフィ・ダッシュを直線形と半角ハイフンに揃える。そのうえで部分一致を確かめる
  - 脚注番号: 頁の脚注番号が引用の途中に入るときは、脚注番号をまたぐ引用をしない。脚注番号の手前で切った項目は、備考に書いた
- ライセンス上の扱い（各項目の備考に「ライセンス」として書いた）
  - 逐語可（出典明記。各条件に従う）: CC BY 4.0 の S021、S022、S023、S024、S072、S073、S074、S075、S089、S094、S095、S096、S114。Apache License 2.0 の S012、S016、S020、S025、S026、S037、S038、S040、S043。公共データ利用規約（PDL1.0）の S127、S128。米国政府の著作物（著作権の対象外）の S090。配布する skill 本文は、逐語可でも長い転載を避け、短い引用と要旨で使う
  - 改変不可（CC BY-NC-ND 4.0）・本文では要旨で使う: S001、S002、S003、S004、S005、S006、S009、S010、S013、S014、S015、S017、S018、S033、S034、S035、S041、S042、S053、S054、S057、S064、S065、S111、S115。SRE の書籍とワークブックの公開版。翻訳も改変に当たるので、訳文を引用の形で載せない。短い逐語（1〜3 文）と、本 skill の言葉の要旨と番号で指す
  - 要旨のみ（本文を引用しない）: S052、S071、S082、S097、S112。書誌のみの項目と、教科書的な事実の要旨
  - 短い引用のみ: 上記以外のすべて。著作権表示のみ・全権利留保・表示なし・再利用の条件を確かめられなかったもの。出典を明示した短い引用（1〜3 文）にとどめ、段落単位の転載・翻訳をしない。再配布できると書かない

## 帰属上の注意

- 各社・各団体の指針（SRE の書籍・ワークブック、Well-Architected、PagerDuty・Atlassian の文書、FinOps Foundation、OpenTelemetry・Prometheus の指針）は、自社・自団体の利用者向けの考え方であり、普遍的な正解ではない。食い違うところは両論を並べる
- SRE の書籍は、sre.google の初版の公開版の文言である。公式の書籍一覧に第 2 版と編者が載っている（S112）。同じ文言が第 2 版に残っているかは確かめていない。章の著者を書き、Google 全体の発言にしない。章頭の題辞は題辞の人物の言葉で、章の著者の言葉ではないので引かない
- ワークブックの例の文書（S006 の error budget の方針）は架空のサービスの例で、Google の実際の方針ではない
- martinfowler.com の頁には Fowler 以外の著者の記事がある（S056・S061 は Danilo Sato、S060 は Pete Hodgson、S062 は Pramod Sadalage と Fowler の共著、S084 の 1 篇は Kief Morris）。Fowler の発言として扱わない
- 製品の開発元・費用の相談を業とする書き手・投資会社の文には利害がある。各項目の備考か要旨に書いた（Majors は Honeycomb の共同創業者: S027・S032。Sigelman は Lightstep の共同創業者: S031。Quinn は AWS の費用の改善を業とする: S077。a16z はベンチャー投資会社: S076。HashiCorp の文書は開発元自身の説明: S085・S086・S087）。DORA の頁は「DORA is a program run by Google Cloud」と書く（S094〜S096）。製品の宣伝の部分は引用していない
- AWS の頁: Well-Architected Framework は 2026-11-16 に柱ごとの白書を 1 つの文書に統合した。S102〜S104 は統合後の頁の文言で、旧白書の頁の文言とは混ぜない（旧白書にだけある数値は引かない）。S091・S092 は、冒頭に「historical reference only」と断り書きのある旧白書の頁で、統合後の同名の頁は取得できなかった（404）。廃止予定の頁として断って使う
- DORA の指標: 「4 つの指標」から 5 指標へ変わり、MTTR（time to restore service）は 2023 年に「失敗したデプロイからの復旧時間」へ改称・再定義された（S096）。古い資料・書籍（S097 の Accelerate）が「4 つの指標」と書くのは、その時点の名称である。各年の報告書の本文は取得していない
- Cook の「How Complex Systems Fail」は、PDF（Adaptive Capacity Labs が配布）の文言を引いた。HTML 版（運営者は未確認）は文言が違うので引かない（S045・S046）
- 「3 本柱」の出どころとしてよく挙げられる Bourgon の記事（S029）の本文には「pillar」の語が無い。命名者・初出は確かめていない（U）
- Goodhart の法則は名前として触れるだけにし、文言を引かない。指標が目標になる問題は S095 の DORA 自身の注意を使う
- Dekker は書誌のみ（S052）。他の記事が引く Dekker の文は孫引きなので使わない
- 公開された事後検証（S120〜S123）は各社の自称で、第三者の検証ではない。失敗の型の根拠として使い、制作例の題材にしない
- 歴史上の年は、各項目の「媒体・日付」に原稿で確かめたものだけを書いた
- 国内の資料（S125〜S128）は IPA とデジタル庁の資料で、薄い。IPA の事業は終了しており、更新されない

## SLI・SLO・error budget

### S001 Chris Jones・John Wilkes・Niall Murphy（with Cody Smith）「Service Level Objectives」（SRE 書籍 第 4 章）

> a target value or range of values for a service level that is measured by an SLI.

> An easy way to tell the difference between an SLO and an SLA is to ask "what happens if the SLOs aren't met?": if there is no explicit consequence, then you are almost certainly looking at an SLO.

- 媒体・日付: 『Site Reliability Engineering』初版 第 4 章、sre.google の公開版（頁表示 © 2017 Google, Inc.、O'Reilly Media 刊）
- URL: https://sre.google/sre-book/service-level-objectives/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: SLI は提供している水準を測る量、SLO は SLI に対する目標の値や範囲、SLA は利用者との契約で、外したときの結果（返金・違約など）を伴う。外したときの明示の結果が無ければ、それは SLO である。 使いどころ（本 skill の整理）: SLI・SLO・SLA の区別。SLA の法的な効力には踏み込まない（法令・契約は対象外） 区分の根拠・範囲: 1 つ目は「An SLO is a service level objective」の後のコロンに続く定義の部分。原稿ではコロンの前に空白が入るため、コロンの後から引いた。

### S002 Chris Jones・John Wilkes・Niall Murphy（with Cody Smith）「Service Level Objectives」（SLO の数と内部の余裕）

> Choose just enough SLOs to provide good coverage of your system's attributes. Defend the SLOs you pick: if you can't ever win a conversation about priorities by quoting a particular SLO, it's probably not worth having that SLO.

> Using a tighter internal SLO than the SLO advertised to users gives you room to respond to chronic problems before they become visible externally.

- 媒体・日付: 『Site Reliability Engineering』初版 第 4 章、sre.google の公開版（頁表示 © 2017 Google, Inc.、O'Reilly Media 刊）
- URL: https://sre.google/sre-book/service-level-objectives/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: SLO は少なく、優先順位の議論で使えるものだけにする。利用者に示す SLO より内部の SLO を厳しくしておくと、外から見える前に慢性の問題に手を打てる。 使いどころ（本 skill の整理）: SLO を何本置くか。外向けと内向けの目標を分ける判断。 区分の根拠・範囲: 1 つ目の直後の脚注番号「17」は引用に含めていない。

### S003 Marc Alvidrez「Embracing Risk」（SRE 書籍 第 3 章、100% は目標にしない・ある点を超えると害になる）

> 100% is probably never the right reliability target: not only is it impossible to achieve, it's typically more reliability than a service's users want or notice.

> It turns out that past a certain point, however, increasing reliability is worse for a service (and its users) rather than better!

- 媒体・日付: 『Site Reliability Engineering』初版 第 3 章、sre.google の公開版（頁表示 © 2017）
- URL: https://sre.google/sre-book/embracing-risk/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: 100% の信頼性は達成できず、利用者が求めも気づきもしない水準である。サービスの性質を、事業が取れるリスクに合わせる。ある点を超えると、信頼性を上げることはサービスにも利用者にも害になる（機能を出す速さを削り、費用を跳ね上げる）。章は、開発と SRE の間の落としどころが、ふつうは関わった技術者どうしの交渉のうまさで決まっているにすぎないことを、error budget を置く理由に挙げる。 使いどころ（本 skill の整理）: 可用性の目標を相談者と決める論点。「5 つの 9」を目標にしない根拠を推進側の原文で示す。目標値そのものは相談者が決める。序章の同じ趣旨の文と、error budget に経営の後ろ盾が要るという留保は S115。

### S004 Marc Alvidrez「Embracing Risk」（error budget）

> The error budget provides a clear, objective metric that determines how unreliable the service is allowed to be within a single quarter. This metric removes the politics from negotiations between the SREs and the product developers when deciding how much risk to allow.

> as long as the system's SLOs are met, releases can continue.

- 媒体・日付: 『Site Reliability Engineering』初版 第 3 章、sre.google の公開版（頁表示 © 2017）
- URL: https://sre.google/sre-book/embracing-risk/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: error budget は、SLO から決まる「この期間にどこまで失敗してよいか」の量。開発と運用がリスクの量で揉めるのを、データで決める形に変える。SLO を守っている間は公開を続け、使い切ったら公開を止めて信頼性に投資する、という制御の輪になる。 使いどころ（本 skill の整理）: error budget の導入と、その方針の合意。経営の合意が無いと機能しない、という推進側自身の留保は S115。

### S005 Steven Thurgood・David Ferguson（with Alex Hidalgo・Betsy Beyer）「Implementing SLOs」（ワークブック 第 2 章）

> we generally recommend treating the SLI as the ratio of two numbers: the number of good events divided by the total number of events.

> Our experience has shown that 100% reliability is the wrong target

- 媒体・日付: 『The Site Reliability Workbook』第 2 章、sre.google の公開版（頁表示 © 2018）
- URL: https://sre.google/workbook/implementing-slos/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: SLI は「良い事象の数 ÷ 全事象の数」の比で表すのを勧める（成功した HTTP 要求の割合など）。0〜100% で揃うので、SLO と error budget に繋げやすい。 使いどころ（本 skill の整理）: SLI の定義の型。何を「良い事象」とするかの議論。 自称: 「Our experience has shown」は Google の経験の記述で、その会社の自称。

### S006 Steven Thurgood「Example Error Budget Policy」（ワークブック 付録 B、例の文書）

> This policy is not intended to serve as a punishment for missing SLOs. Halting change is undesirable; this policy gives teams permission to focus exclusively on reliability when data indicates that reliability is more important than other product features.

- 媒体・日付: 『The Site Reliability Workbook』付録 B、sre.google の公開版（文書内の表示は Date 2018-02-19、架空の「Example Game Service」の方針）
- URL: https://sre.google/workbook/error-budget-policy/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: error budget の方針は罰ではない。データが信頼性を優先すべきと示したとき、機能より信頼性に集中してよい、という許可を与える。例では、直近 4 週の予算を超えたら、最優先の修正とセキュリティの修正以外の変更を止める（4 週は例の値）。 使いどころ（本 skill の整理）: error budget の方針文書の書き方。止める条件・例外・見直しの日付を書く。 区分の根拠・範囲: 例の文書。Google の実際の方針ではない。

### S007 Treynor・Dahlin・Rau・Beyer「The Calculus of Service Availability」

> A service cannot be more available than the intersection of all its critical dependencies.

> If you have a critical dependency that does not offer enough 9s (a relatively common challenge!), you must employ mitigation to increase the effective availability of your dependency

- 媒体・日付: ACM Queue Vol. 15, issue 2、2017 年 5 月 17 日（頁の表示）
- URL: https://queue.acm.org/detail.cfm?id=3096459（直接の取得は 403）
- URL（原稿）: https://web.archive.org/web/20250105182530/https://queue.acm.org/detail.cfm?id=3096459（Internet Archive の保存版）
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 「Copyright © 2017 held by owner/author. Publication rights licensed to ACM.」（頁の表示）。引用は短く。 要旨（本 skill の言葉）: サービスの可用性は、欠かせない依存先すべての可用性を超えられない。Google の社内の目安は、依存先に自分より 9 を 1 つ多く求める「rule of the extra 9」。足りない依存先は、キャッシュ・失敗時に開く・品位を落として動く、などで実効の可用性を上げる。依存の段ごとに 9 を足していく、という読み方は誤りだとも書く。可用性は障害の頻度と長さ（検知と復旧の時間）の関数とする。 使いどころ（本 skill の整理）: 高すぎる SLO が成り立たない条件（依存先の可用性の上限）の根拠。相談者の目標値を出すのでなく、依存先の可用性から上限を算術で確かめる使い方（計算は本 skill の整理として明記）。 区分の根拠・範囲: 保存版の原文と一致。元サイトの現行の頁は 403 で未確認。

### S008 AJ Ross・Matt Brown「Available . . . or not? That is the question—CRE life lessons」（Google Cloud blog）

> Rather than simply describing the target as a fixed number of nines, it's possible to relate the numeric target to the user experience in terms of total allowable downtime, frequency and duration of failure.

- 媒体・日付: Google Cloud blog、2017 年 1 月 27 日（頁の表示。2 人とも Customer Reliability Engineer）
- URL: https://cloud.google.com/blog/products/gcp/available-or-not-that-is-the-question-cre-life-lessons
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 表示なし（著作権は各権利者。引用は短く）。 要旨（本 skill の言葉）: 可用性の目標を「9 がいくつ」とだけ言うのでなく、許される停止の合計・障害の頻度・長さで利用者の体験に結びつけて言う。99.9% で 30 日なら 43.2 分が error budget、という算術を示す。記事はこの計画に MTBF・MTTR（平均）を使っている。 使いどころ（本 skill の整理）: 「9 の数」を利用者の体験に言い換える根拠。あわせて揺り戻しの例として使う: 2017 年の Google のこの記事は平均の MTTR で計画を立てるが、2021 年の Google の報告書（S116）は MTTR が判断に向かないと示す。2 つの文書の指標の扱いは食い違う（同年の S007 も MTTR を使って算術をしている）。Google の社内で扱いが変わったかどうかは未確認で、Davidovič の報告書は 1 人の著者の分析である。


## 警報と当番

### S009 Rob Ewaschuk「Monitoring Distributed Systems」（SRE 書籍 第 6 章、症状と原因）

> Your monitoring system should address two questions: what's broken, and why? The "what's broken" indicates the symptom; the "why" indicates a (possibly intermediate) cause.

- 媒体・日付: 『Site Reliability Engineering』初版 第 6 章、sre.google の公開版（頁表示 © 2017）
- URL: https://sre.google/sre-book/monitoring-distributed-systems/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: 監視は「何が壊れているか（症状）」と「なぜか（原因）」の 2 つに答える。人を呼ぶ警報は症状に寄せ、単純で、明確な失敗を表すものにする。 使いどころ（本 skill の整理）: 警報を症状で鳴らすか原因で鳴らすか。ダッシュボードと警報の役割分担。 自称: 監視と警報の指針は Google の SRE の経験に基づく記述で、その会社の自称を含む。

### S010 Rob Ewaschuk「Monitoring Distributed Systems」（ページすべきもの）

> Every page should be actionable. Every page response should require intelligence. If a page merely merits a robotic response, it shouldn't be a page.

- 媒体・日付: 『Site Reliability Engineering』初版 第 6 章、sre.google の公開版（頁表示 © 2017）
- URL: https://sre.google/sre-book/monitoring-distributed-systems/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: 人を起こす通知は、急いで対応でき、判断を要するものに限る。決まった手順で済む対応なら、通知でなく自動化の対象。急いで反応できるのは 1 日に数回までで、それを超えると疲弊する。 使いどころ（本 skill の整理）: 当番の負荷と警報の整理。警報の疲れ（alert fatigue）の論点。 自称: 「1 日に数回まで」などの目安は Google の SRE の経験に基づく記述で、その会社の自称。

### S011 Rob Ewaschuk「My Philosophy on Alerting」

> Pages should be urgent, important, actionable, and real.

> Every page should be actionable; simply noting "this paged again" is not an action.

- 媒体・日付: Google ドキュメントで公開された文書。文書内に「based my observations while I was a Site Reliability Engineer at Google」「Author: Rob Ewaschuk」とある。日付の表示は文書内に無い（冒頭に「the Hacker News post from mid-2014」への言及があるのみ）
- URL: https://docs.google.com/document/d/199PqyG3UsyXlwieHaqbGiWVa8eMWi8zzAn0YfcApr8Q/edit
- URL（原稿）: 同じ文書の `export?format=txt`（googleusercontent.com へリダイレクト）
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 文書に表示なし。未確認・短い引用に留める。 要旨（本 skill の言葉）: 呼び出し（page）は、緊急・重要・対処できる・本物、の 4 つを満たすものだけにする。進行中か差し迫った利用者への影響を表すものに限る。うるさい警報は削る側に倒す（監視しすぎは監視不足より直しにくい）。原因ではなく症状で警報し、原因の情報は画面や呼び出しの本文に入れる。急がないが放置できないものは、呼び出し以外の仕組み（チケット等）で扱う。 使いどころ（本 skill の整理）: 警報の見直し・当番の負担の相談の中心の根拠。 区分の根拠・範囲: 文書の所有者は確認できない。Prometheus 公式頁 S012 がこの文書 ID にリンクしていること、SRE 本の監視の章が「Written by Rob Ewaschuk」で、文書冒頭がその章の土台だと書いていることで裏づけた。

### S012 Prometheus「Alerting」（警報の指針の要約と症状での警報）

> keep alerting simple, alert on symptoms, have good consoles to allow pinpointing causes, and avoid having pages where there is nothing to do.

> Aim to have as few alerts as possible, by alerting on symptoms that are associated with end-user pain rather than trying to catch every possible way that pain could be caused.

- 媒体・日付: Prometheus 公式文書（Best practices）。頁に日付表示なし
- URL: https://prometheus.io/docs/practices/alerting/
- URL（原稿）: https://github.com/prometheus/docs/blob/main/docs/practices/alerting.md
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 頁フッターは「All components are available under the Apache 2 License」。頁の原稿がある `prometheus/docs` リポジトリの LICENSE は Apache License 2.0（取得して確認）。短い引用に留める。 要旨（本 skill の言葉）: 頁は Rob Ewaschuk の文書（S011）を読むよう勧め、要点を「単純に保つ・症状で警報する・原因は画面で突き止める・何もすることがない呼び出しをしない」とまとめる。続けて、遅延とエラー率はスタックのなるべく上で見て、遅延での呼び出しは 1 か所に絞る、と書く。バッチは「最近成功していない」で、容量は人の手当てが要るものとして扱う。監視そのものの監視（メタ監視）も求める。 使いどころ（本 skill の整理）: 警報の数を減らす相談。原因ごとに警報を足していく運用への反論。

### S013 Steven Thurgood ほか「Alerting on SLOs」（ワークブック 第 5 章、SLO に基づく警報と、警報の評価の 4 つの軸）

> Precision is 100% if every alert corresponds to a significant event.

> an event that consumes a large fraction of the error budget.

> The proportion of events detected that were significant.

- 媒体・日付: 『The Site Reliability Workbook』第 5 章（著者表示は Steven Thurgood with Jess Frame, Anthony Lenton, Carmela Quinito, Anton Tolchanov, Nejc Trdin）、sre.google の公開版（頁表示 © 2018）
- URL: https://sre.google/workbook/alerting-on-slos/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: SLO に基づく警報は、error budget の大きな割合を消費する事象（significant event）で鳴らす。警報の作り方は、precision（鳴った警報のうち意味のあったものの割合）・recall（意味のある事象のうち検知できた割合）・検知までの時間・解除までの時間の 4 つで比べる。章は 6 つの作り方を、精度の低い順に並べて検討する。Google の運用の自称を含む。 使いどころ（本 skill の整理）: SLO と警報を結ぶ。「警報が多い／少ない」を precision と recall に分けて話す。消費の速さ（burn rate）で鳴らす様式は S014。 区分の根拠・範囲: 引用が言うのは、significant event の定義（引用 2）と precision の定義（引用 3）。recall の定義は引用ブロックに無く、要旨（頁の他の箇所）による。2 つ目は「significant event」の定義の部分。原稿では語の直後に空白とコロンが入るため、定義の部分だけ引いた。3 つ目は precision の定義の文。

### S014 Google SRE ワークブック「Alerting on SLOs」（多窓・多 burn rate の警報）

> A good guideline is to make the short window 1/12 the duration of the long window

- 媒体・日付: The Site Reliability Workbook 第 5 章。著者表示「By Steven Thurgood with Jess Frame, Anthony Lenton, Carmela Quinito, Anton Tolchanov, and Nejc Trdin」。頁フッター「Copyright © 2018 Google, Inc. Published by O'Reilly Media, Inc.」
- URL: https://sre.google/workbook/alerting-on-slos/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: error budget の消費の速さ（burn rate）で警報し、長い窓と短い窓の両方が閾値を超えたときだけ鳴らす。短い窓は、まだ消費が続いているかを確かめて、解除を早くするためのもの。章の例は、呼び出しの水準を「1 時間と 5 分の両方で 14.4 倍」とし、予算の 2% を消費した時点で鳴る、とする。数値は 30 日の error budget と、誤り率の閾値 0.001（式の `14.4*0.001`。99.9% の SLO に当たると読める）を前提にした例で、そのまま一般の基準にしない（本 skill の整理）。Google の運用の自称を含む。 使いどころ（本 skill の整理）: SLO から警報を作る様式。具体の倍率は相談者の SLO と窓から計算し直すよう案内する。 区分の根拠・範囲: 引用は文の途中まで。図の参照が続く。

### S015 Google SRE ワークブック「On-Call」

> Being on-call means being available during a set period of time, and being ready to respond to production incidents during that time with appropriate urgency.

> We target a maximum of two incidents per on-call shift

- 媒体・日付: The Site Reliability Workbook 第 8 章。著者表示「By Ollie Cook, Sara Smollett, Andrea Spadaccini, Cara Donnelly, Jian Ma, and Garrett Plasky (Evernote) with Stephen Thorne and Jessie Yang」。Copyright © 2018 Google
- URL: https://sre.google/workbook/on-call/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: 当番は、決めた期間、本番の事故に適切な速さで応じられる状態でいること。章は呼び出しの量（pager load）が多すぎれば是正が要るとし、Google では 1 回の当番で事故 2 件までを目標にして、事後の対応の時間を確保すると書く。2 件は Google の運用の自称で、一般の基準ではない。 使いどころ（本 skill の整理）: 当番の負担の上限を決める相談。上限を「数」で決めて、超えたら何をするかを先に決める様式。 区分の根拠・範囲: 2 つ目の引用は文の途中まで。直後に脚注番号が入る。

### S016 PagerDuty「Being On-Call」

> Do not hesitate to escalate if you cannot figure out the cause within a reasonable timeframe, or if the service / alert is something you have not tackled before.

- 媒体・日付: PagerDuty の公開文書。頁に日付表示なし（On Call の節）
- URL: https://response.pagerduty.com/oncall/being_oncall/ → https://docs.pagerduty.com/ops-guides/incident-response-guide/being-oncall
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: Apache License 2.0。 要旨（本 skill の言葉）: 当番の責任は、準備・受けて判断する（急ぎか、大事故に上げるか、別チームか）・ためらわずに上げる、など。自分の専門でなければ別のチームに回す。その会社の運用の自称。 使いどころ（本 skill の整理）: 当番の決めごと（上げる条件）を作る相談。

### S017 Vivek Rau「Eliminating Toil」（SRE 書籍 第 5 章）

> Toil is the kind of work tied to running a production service that tends to be manual, repetitive, automatable, tactical, devoid of enduring value, and that scales linearly as a service grows.

> Our SRE organization has an advertised goal of keeping operational work (i.e., toil) below 50% of each SRE's time.

- 媒体・日付: 『Site Reliability Engineering』初版 第 5 章、sre.google の公開版（頁表示 © 2017）
- URL: https://sre.google/sre-book/eliminating-toil/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: toil は、本番の運用に伴う、手作業で繰り返し、自動化でき、その場しのぎで、後に価値が残らず、サービスの規模に比例して増える仕事。会議や人事の事務は toil でなく overhead と区別する。50% の上限は Google の SRE 組織が掲げた目標（自称）で、一般の基準ではない。 使いどころ（本 skill の整理）: 運用の仕事を toil とそれ以外に分ける。自動化の優先順位。 区分の根拠・範囲: 章頭の題辞は Carla Geisser の言葉として載っているもので、章の著者の言葉ではない。引かない。


## 可観測性・計測（golden signals・USE・OpenTelemetry・Prometheus・3 本柱の議論）

### S018 Rob Ewaschuk「Monitoring Distributed Systems」（SRE 書籍 第 6 章、4 つの golden signals）

> The four golden signals of monitoring are latency, traffic, errors, and saturation. If you can only measure four metrics of your user-facing system, focus on these four.

- 媒体・日付: 『Site Reliability Engineering』初版 第 6 章、sre.google の公開版（頁表示 © 2017）
- URL: https://sre.google/sre-book/monitoring-distributed-systems/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: 利用者に面したシステムで 4 つしか測れないなら、遅延・トラフィック・エラー・飽和を測る。遅延は成功した要求と失敗した要求を分けて見る。 使いどころ（本 skill の整理）: 最初に置く計測の選び方。資源側の USE（S019）との対比。 自称: Google の SRE の経験に基づく指針で、その会社の自称を含む。

### S019 Brendan Gregg「The USE Method」

> For every resource, check utilization, saturation, and errors. It's intended to be used early in a performance investigation, to identify systemic bottlenecks.

- 媒体・日付: brendangregg.com、頁末「Last updated: 24-Aug-2017」。頁の更新欄に「It was published in ACMQ as Thinking Methodically about Performance (2012)」とある
- URL: https://www.brendangregg.com/usemethod.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 頁にライセンス表示なし。未確認・短い引用に留める。 要旨（本 skill の言葉）: 資源（CPU・ディスク・バスなど）ごとに、利用率（忙しかった時間の割合）・飽和（さばけずに待っている仕事の量）・エラーを確かめる。調査の早い段階で、系全体のボトルネックを見つけるための方法。頁の「8 割の問題を 5% の労力で」は本人の経験の主張で、一般化しない。 使いどころ（本 skill の整理）: 性能の調査の最初の一手。要求側の golden signals（S018）との使い分け。

### S020 Prometheus「Instrumentation」（オンライン処理の主要な指標）

> The key metrics in such a system are the number of performed queries, errors, and latency.

> Online-serving systems should be monitored on both the client and server side.

- 媒体・日付: Prometheus 公式文書（Best practices）。頁に日付表示なし
- URL: https://prometheus.io/docs/practices/instrumentation/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 頁フッターは「All components are available under the Apache 2 License」。頁の原稿がある `prometheus/docs` リポジトリの LICENSE は Apache License 2.0（取得して確認）。短い引用に留める。 要旨（本 skill の言葉）: 即時の応答を待たれる系（オンライン処理）では、リクエスト数・エラー・遅延が主要な指標で、処理中の数も役に立つ。クライアント側とサーバー側の両方で測り、食い違いを調査の手がかりにする。オフライン処理・バッチは別の型で測る。 使いどころ（本 skill の整理）: 最初に何を計測するかを決める相談。

### S021 OpenTelemetry「Signals」

> Signals are system outputs that describe the underlying activity of the operating system and applications running on a platform.

- 媒体・日付: OpenTelemetry 公式文書。頁表示「Last modified March 10, 2026」
- URL: https://opentelemetry.io/docs/concepts/signals/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 頁フッター「© 2019-present OpenTelemetry Authors | Docs CC BY 4.0」。帰属を付けて短く引用する。 要旨（本 skill の言葉）: 信号は、OS とアプリの動きを外から見るための出力。頁が挙げる現行の信号は traces・metrics・logs・baggage で、events（log の一種）と profiles は開発中・提案段階と書かれている（取得時点の記述）。 使いどころ（本 skill の整理）: 「何を計測するか」を信号の種類で整理するとき。profiles の扱いは時点情報として断る。

### S022 OpenTelemetry「Observability primer」（可観測性と SLI・SLO）

> Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings.

> A good SLI measures your service from the perspective of your users.

- 媒体・日付: OpenTelemetry 公式文書。頁表示「Last modified April 23, 2026」
- URL: https://opentelemetry.io/docs/concepts/observability-primer/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: Docs CC BY 4.0。 要旨（本 skill の言葉）: 可観測性は、内部を知らなくても外から問いを立てて系を理解できる性質。そのためには計装が要る。SLI は利用者の側から測るのがよく、SLO は SLI を事業上の価値に結びつけて信頼性を組織に伝える手段だと説明する。 使いどころ（本 skill の整理）: 監視（決めた項目を見る）と可観測性（未知の問いに答える）の違いを説明するとき。SLI を内部の資源ではなく利用者の体験で選ぶ根拠。

### S023 OpenTelemetry「Semantic Conventions」

> The benefit of using Semantic conventions is in following a common naming scheme that can be standardized across a codebase, libraries, and platforms.

- 媒体・日付: OpenTelemetry 公式文書。頁表示「Last modified September 28, 2026」
- URL: https://opentelemetry.io/docs/concepts/semantic-conventions/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: Docs CC BY 4.0。 要旨（本 skill の言葉）: 操作やデータの種類ごとに共通の名前（属性名）を決めておくと、コード・ライブラリ・基盤をまたいで同じ名前で集計できる。traces・metrics・logs・profiles・resources のそれぞれに規約がある。 使いどころ（本 skill の整理）: 計測の名前を各チームが勝手に付けている相談。独自の名前を作る前に既存の規約を確かめる根拠。

### S024 OpenTelemetry「Sampling」（標本化の理由と head / tail）

> Sampling is one of the most effective ways to reduce the costs of observability without losing visibility.

> Tail sampling is where the decision to sample a trace takes place by considering all or most of the spans within the trace.

- 媒体・日付: OpenTelemetry 公式文書。頁表示「Last modified October 16, 2025」
- URL: https://opentelemetry.io/docs/concepts/sampling/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: Docs CC BY 4.0。 要旨（本 skill の言葉）: trace は全件を残さなくても、代表性のある標本で系を観察できる。head sampling は早い段階（trace ID と割合）で決め、単純で効率がよい。tail sampling は trace のほぼ全体を見てから決めるので、「エラーを含む trace は必ず残す」「遅い trace を残す」といった条件を使える。代わりに仕組みが重い。 使いどころ（本 skill の整理）: 計測の費用を下げたい相談。フィルタや集約と違い、標本化は代表性を保つという区別。

### S025 Prometheus「Metric and label naming」

> refer to a single unit (e.g. do not mix seconds with milliseconds) and to a single quantity (e.g. do not mix request size with request duration).

> Remember that every unique combination of key-value label pairs represents a new time series, which can dramatically increase the amount of data stored.

- 媒体・日付: Prometheus 公式文書（Best practices）。頁に日付表示なし
- URL: https://prometheus.io/docs/practices/naming/
- URL（原稿）: https://github.com/prometheus/docs/blob/main/docs/practices/naming.md（頁の編集リンク）
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 頁フッターは「All components are available under the Apache 2 License」。頁の原稿がある `prometheus/docs` リポジトリの LICENSE は Apache License 2.0（取得して確認）。短い引用に留める。 要旨（本 skill の言葉）: 1 つの指標は 1 つの単位・1 つの量にし、基本単位（秒・バイト）を使い、単位を接尾辞で示す（累積の数は `_total`）。ラベルの組み合わせごとに時系列が増えるので、利用者 ID やメールアドレスのような値の種類が多いもの（高カーディナリティ）をラベルにしない。 使いどころ（本 skill の整理）: 計測の名前と、費用が膨らむ原因（ラベルの爆発）の説明。 区分の根拠・範囲: 1 つ目の引用は箇条の「A metric name... ...MUST」に続く部分で、文の頭を省いている。

### S026 Prometheus「Histograms and summaries」

> If you can, use native histograms and prefer them over both classic histograms and summaries.

> Quantiles, whether calculated by the instrumented binary or on the Prometheus server, are estimated.

- 媒体・日付: Prometheus 公式文書（Best practices）。頁に日付表示なし
- URL: https://prometheus.io/docs/practices/histograms/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 頁フッターは「All components are available under the Apache 2 License」。頁の原稿がある `prometheus/docs` リポジトリの LICENSE は Apache License 2.0（取得して確認）。短い引用に留める。 要旨（本 skill の言葉）: 分布の計測は、使えるなら native histogram を選ぶ。summary は分位点をクライアント側で計算するので、あとから別の窓・別の分位点で計算し直せず、複数のインスタンスの分位点を集約できない（頁の記述。逐語は文の途中で切れるため要旨に留める）。分位点は、計測する側のプログラムで計算しても Prometheus のサーバーで計算しても推定値と書く（引用 2）。誤差の出どころの区別（バケットの切り方など）は引用の範囲外。 使いどころ（本 skill の整理）: 「p99 を全インスタンスで出したい」相談。Prometheus の histogram と summary の文脈で、分位点が推定値であることの根拠。平均だけで遅延を語る話は、本 skill の整理。native histogram は Prometheus の機能名なので、製品の比較にはしない。

### S027 Charity Majors「Observability is a Many-Splendored Definition」（可観測性の定義）

> observability applied to software systems means having the ability to ask any question of your systems - understand any user's behavior or subjective experience - without having to predict that question, behavior or experience in advance.

> Observability is a borrowed term from mechanical engineering/control theory.

- 媒体・日付: charity.wtf（現在は Substack 上）、頁表示 Mar 03, 2020
- URL: https://charity.wtf/2020/03/03/observability-is-a-many-splendored-thing/（取得時に https://charity.wtf/p/observability-is-a-many-splendored-thing へ転送）
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 頁末「© 2026 Charity Majors」。短い引用に留める。 要旨（本 skill の言葉）: 可観測性は制御理論から借りた語で、外から問いを投げて内部の状態を理解できるかを指す。ソフトウェアでは、事前に予想しなかった問い（未知の未知）にも答えられることを言う。メトリクス・ログ・トレースはデータの型で、可観測性そのものではない、と本人は書く。 使いどころ（本 skill の整理）: 監視と可観測性の区別。著者は可観測性の製品の会社 Honeycomb の共同創業者で、その立場からの主張である。 利害: 著者は可観測性の製品の会社 Honeycomb の共同創業者で、その立場からの定義である。

### S029 Peter Bourgon「Metrics, tracing, and logging」

> I think that the defining characteristic of metrics is that they are aggregatable

> I think that the defining characteristic of logging is that it deals with discrete events.

> I think that the single defining characteristic of tracing , then, is that it deals with information that is request-scoped.

- 媒体・日付: 個人ブログ、2017 年 2 月 21 日（頁の表示。2017 Distributed Tracing Summit に出た日の記事）
- URL: https://peter.bourgon.org/blog/2017/02/21/metrics-tracing-and-logging.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 表示なし（著作権は各権利者。引用は短く）。 要旨（本 skill の言葉）: 計測（metrics）は集計できること、ログは個々の出来事を扱うこと、トレースは 1 つの要求の範囲に結びつくこと、をそれぞれの決め手とし、3 つを重なりのある図で整理した。運用の負担は計測が軽く、ログが重く、トレースはその間とも書く。 使いどころ（本 skill の整理）: 「3 本柱」の出どころとしてよく挙げられる記事の原文。ただしこの記事の本文に「pillar」の語は 0 件で、Bourgon は「柱」とは言っていない。「3 本柱」の命名者を Bourgon とする言い方（Majors のブログや検索の要約にある）は、この台帳の調査では確かめていない（U）。

### S030 Cindy Sridharan「Monitoring and Observability」

> What is the difference between "monitoring" and "observability", if any?

> whitebox monitoring is for the known, hard failure modes of a system

> "Observability" isn't a substitute for "monitoring" nor does it obviate the need for "monitoring"; they are complementary.

- 媒体・日付: Medium、2017 年 9 月 5 日（頁の表示）
- URL: https://copyconstruct.medium.com/monitoring-and-observability-8417d1952e1c（直接の取得は 403）
- URL（原稿）: https://web.archive.org/web/20231104150559/https://copyconstruct.medium.com/monitoring-and-observability-8417d1952e1c（Internet Archive の保存版）
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 表示なし（著作権は各権利者。引用は短く）。 要旨（本 skill の言葉）: 監視と可観測性の違いを問い、内部の情報に基づく監視は「事前に分かっている、はっきりした壊れ方」に向くとする。監視は系の全体の健康を示すのに向き、「全部を監視する」は反面の型になりうる。可観測性は、予想できない壊れ方を、文脈を持った細かい事実から調べる（デバッグする）ためのもの。可観測性は監視の代わりではなく、両者は補い合うと書く。道具を入れても使われない例を挙げ、道具の成否は組織・文化・人・既存の道具で決まるとも書く。可観測性の語は、数年前に Twitter の技術ブログで初めて見たと書く。 使いどころ（本 skill の整理）: 監視と可観測性を対立させない根拠（補い合う）。「全部を計測する」相談への留保。Sridharan の書籍『Distributed Systems Observability』は取得していない（U）。 区分の根拠・範囲: 保存版の原文と一致。元サイトの現行の頁は 403 で未確認。

### S031 Ben Sigelman「The "Three Pillars of observability" that weren't」

> First things first: Metrics, Logs, and Traces are not "the three pillars of observability." They are just the raw materials - the *telemetry* - and we must reframe our discussion of observability around use cases and problems-to-solve.

- 媒体・日付: Medium（LightstepHQ）、2021 年 3 月 20 日。もとは X（Twitter）の連投と頁にある
- URL: https://medium.com/lightstephq/the-three-pillars-of-observability-that-werent-435bbe22a27c
- URL（原稿）: https://web.archive.org/web/20250813211245/https://medium.com/lightstephq/the-three-pillars-of-observability-that-werent-435bbe22a27c（Internet Archive の保存版）
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 表示なし（著作権は各権利者。引用は短く）。 要旨（本 skill の言葉）: 計測・ログ・トレースは可観測性の「柱」ではなく原材料（テレメトリ）にすぎない。議論を、使い道と解く問題（新しい機能を安心して出す、SLO の違反を減らす）から組み直すべきだと書く。 使いどころ（本 skill の整理）: 「3 種類のデータをそろえたから可観測性がある」という相談への留保。製品の選定の助言には使わない。 区分の根拠・範囲: 保存版の原文と一致。 利害: 頁の著者欄に Lightstep の共同創業者・CEO、OpenTelemetry・OpenTracing の共同の作り手とある。連投の中に自社の製品への言及があり、その部分は引用していない。

### S032 Charity Majors「How many pillars of observability can you fit on the head of a pin?」

> "Signal" is a technical term. "Pillar" is a marketing term.

> When engineers talk about pillars of observability, they're just talking about signals and signal types, and "pillar" is a perfectly acceptable colloquialism for "signal".

- 媒体・日付: charity.wtf（現在は Substack 上）、頁表示 Oct 30, 2025。1 つ目は記事の副題
- URL: https://charity.wtf/2025/10/30/the-pillar-is-a-lie/（取得時に https://charity.wtf/p/the-pillar-is-a-lie へ転送）
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 頁末「© 2026 Charity Majors」。短い引用のみ。 要旨（本 skill の言葉）: 「柱」は売るための言葉で、技術の言葉は「シグナル」だと書く。技術者が「柱」と言うのは信号の種類の口語で構わないが、売り手が「柱」と言うときは別の製品を売ろうとしている。「プロファイリングは 4 本目の柱か」は技術の問いでなく、ある会社の売り込みについての問いだ、とも書く。信号の種類ごとに別の保存先に分けると、同じ情報を何重にも持ち、つなぎ目が上級者の頭の中にしか残らない、と批判する。 使いどころ（本 skill の整理）: 可観測性の語の流行を整理する。信号の種類ごとに道具が分かれ、調べるときに行き来している相談への見立て（つなぎ目のデータを残す）。製品の選定の助言には使わない。 区分の根拠: 3 本柱という言い方への批判の側の主張なので C（この台帳の凡例では批判・留保の側を C とする）。 利害: Majors は記事の中で Honeycomb を自分の側の会社として挙げ、その保存の方式（unified storage）を推している（可観測性の製品の会社の共同創業者。S027）。製品の宣伝の部分と、俗語を含む文は引用していない。


## 事故対応と事後検証（指揮・重大度・様式・責めない文化・Cook・Allspaw）

### S033 Google SRE 本「Managing Incidents」（役割の分離と指揮）

> The incident commander holds the high-level state about the incident.

> The operations team should be the only group modifying the system during an incident.

- 媒体・日付: Site Reliability Engineering 第 14 章。「Written by Andrew Stribblehill」「Edited by Kavita Guliani」。頁フッター「Copyright © 2017 Google, Inc. Published by O'Reilly Media, Inc.」
- URL: https://sre.google/sre-book/managing-incidents/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: Google の事故管理は Incident Command System を元にしている（章の記述）。役割を分ける: 指揮（全体の状態を持ち、役割を割り振る。割り振っていない役割は指揮者が持つ）・作業（系を変更するのはこの班だけ）・連絡・計画。指揮の引き継ぎは明示的に行い、相手の了承を得るまで抜けない。Google の運用の自称。 使いどころ（本 skill の整理）: 事故の最中に誰が何をするかを決める様式。指揮者が自分で手を動かさない理由。

### S034 Google SRE 本「Managing Incidents」（宣言の条件）

> It is better to declare an incident early and then find a simple fix and close out the incident than to have to spin up the incident management framework hours into a burgeoning problem.

- 媒体・日付: Site Reliability Engineering 第 14 章。「Written by Andrew Stribblehill」「Edited by Kavita Guliani」。頁フッター「Copyright © 2017 Google, Inc. Published by O'Reilly Media, Inc.」
- URL: https://sre.google/sre-book/managing-incidents/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: 事故は早めに宣言し、簡単に直れば閉じればよい。宣言の条件をあらかじめ決めておく。章の例は「2 つ目のチームが要るか」「顧客に見えているか」「1 時間集中して調べても解けないか」のどれかに当たれば事故とする、というもの（著者のチームの目安）。Google の運用の自称。 使いどころ（本 skill の整理）: 「どこから事故として扱うか」の相談。条件の例は相談者の組織に合わせて決め直す。

### S035 Google SRE ワークブック「Incident Response」（3 つの C と主な役割）

> The main roles in incident response are the Incident Commander (IC), Communications Lead (CL), and Operations or Ops Lead (OL).

- 媒体・日付: The Site Reliability Workbook 第 9 章。著者表示「By Jennifer Mace, Jelena Oertel, Stephen Thorne, and Arup Chakrabarti (PagerDuty) with Jian Ma and Jessie Yang」。Copyright © 2018 Google
- URL: https://sre.google/workbook/incident-response/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: 事故対応の枠組みの共通の目的は「3 つの C」（対応を調整する・関係者と外部に伝える・統制を保つ）。主な役割は指揮・連絡・作業の 3 つで、連絡と作業は指揮に報告する。章は Google の枠組みと PagerDuty の枠組み（S037・S038・S040・S043・S016）の両方を扱う。Google（と共著の PagerDuty）の運用の自称。 使いどころ（本 skill の整理）: 小さな組織で役割を最小限に決める相談。

### S036 Atlassian「Incident Management Handbook」（事故の定義と incident manager）

> We define an incident as an event that causes disruption to or a reduction in the quality of a service which requires an emergency response.

> The incident manager is empowered to take any action necessary to resolve the incident, which includes paging anyone in the organization and keeping those involved in an incident focused on restoring service as quickly as possible.

- 媒体・日付: Atlassian の公開頁（handbook の Web 版）。頁に日付表示なし
- URL: https://www.atlassian.com/incident-management/handbook
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: Copyright © 2026 Atlassian。未確認・短い引用に留める。 要旨（本 skill の言葉）: 事故は、サービスの中断か品質の低下で、緊急の対応を要するもの。解決はサービスが通常どおり動く状態に戻ったときで、根本原因の対処は事後検証で行う。incident manager は役割であって個人ではなく、役割を決めておくと人を入れ替えられる。Google の事故管理に倣ったと頁自身が書く。その会社の運用の自称。 使いどころ（本 skill の整理）: 「事故」と「解決」の定義を決める相談。復旧と恒久対策を分ける根拠。

### S037 PagerDuty Incident Response Guide（位置づけとライセンス）

> This documentation covers parts of the PagerDuty Incident Response process. It is a cut-down version of our internal documentation used at PagerDuty for any major incidents and to prepare new employees for on-call responsibilities.

- 媒体・日付: PagerDuty の公開文書。頁に日付表示なし
- URL: https://response.pagerduty.com/ → https://docs.pagerduty.com/ops-guides/incident-response-guide へリダイレクト
- URL（原稿）: https://github.com/PagerDuty/incident-response-docs（LICENSE を取得）
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: about 頁に「This documentation is provided under the Apache License 2.0」。旧リポジトリの LICENSE は「Copyright 2016 PagerDuty, Inc.」の Apache License 2.0。著作権表示と LICENSE を添えれば改変・商用利用可。 要旨（本 skill の言葉）: PagerDuty の社内の事故対応の文書を削って公開したもの。当番・事故前・事故中・事故後・訓練の構成。その会社の運用の自称。本 skill の材料のうち、改変して様式に使ってよいと明示されている数少ない文書。 使いどころ（本 skill の整理）: 事故対応の様式の出典。製品の機能（Slack の操作など）の記述は使わない。

### S038 PagerDuty「Severity Levels」

> During an incident is not the time to discuss or litigate severities, just assume the highest and review during a postmortem.

- 媒体・日付: PagerDuty の公開文書。頁に日付表示なし
- URL: https://response.pagerduty.com/before/severity_levels/ → https://docs.pagerduty.com/ops-guides/incident-response-guide/severity-levels
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: Apache License 2.0。 要旨（本 skill の言葉）: 重大度は「SEV」で表し、番号が小さいほど急ぐ。迷ったら高い方として扱い、議論は事後検証に回す。SEV-2 以上は「大事故」として手厚い対応にする。表の各 SEV の定義（顧客への影響・SLA など）は PagerDuty の製品と事業に合わせた自称で、そのまま使わない。 使いどころ（本 skill の整理）: 重大度の定義を作る相談。「迷ったら高く」を規則として先に決める様式。

### S039 Atlassian「Understanding incident severity levels」

> Incident severity levels are a measurement of the impact an incident has on the business.

- 媒体・日付: Atlassian の公開頁。頁に日付表示なし
- URL: https://www.atlassian.com/incident-management/kpis/severity-levels
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 頁フッター「Copyright © 2026 Atlassian」。再利用条件は未確認・短い引用に留める。 要旨（本 skill の言葉）: 重大度は事業への影響の大きさで決める。Atlassian の定義は 3 段階（SEV 1 は全顧客に影響・データ喪失など、SEV 2 は一部の顧客か中核機能、SEV 3 は回避策のある小さな不便）で、SEV 1・2 は時間を問わず当番を呼び、SEV 3 は業務時間で扱う、と書く。その会社の運用の自称で、段階の数と境界は組織ごとに決める。 使いどころ（本 skill の整理）: S038 と並べ、重大度の段階の数・境界が事業者ごとに違う例として示す。

### S040 PagerDuty「Incident Commander」

> Your job as Incident Commander is to coordinate the response, not make technical changes.

> You should not be performing any actions or remediations, checking graphs, or investigating logs.

- 媒体・日付: PagerDuty の公開文書。頁に日付表示なし（Training の節）
- URL: https://response.pagerduty.com/training/incident_commander/ → https://docs.pagerduty.com/ops-guides/incident-response-guide/incident-commander
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: Apache License 2.0。 要旨（本 skill の言葉）: 指揮者は対応を調整する役で、技術的な変更をしない。グラフを見たりログを調べたりもしない。深い技術知識は要らない、とする。指揮者は会議から人を外す権限を持つ。その会社の運用の自称。 使いどころ（本 skill の整理）: 指揮者に一番詳しい技術者を当ててしまう組織への助言。S033 と同じ考え方を別の事業者が書いている例。

### S041 John Lunney・Sue Lueder「Postmortem Culture: Learning from Failure」（SRE 書籍 第 15 章）

> For a postmortem to be truly blameless, it must focus on identifying the contributing causes of the incident without indicting any individual or team for bad or inappropriate behavior.

> It is important to define postmortem criteria before an incident occurs so that everyone knows when a postmortem is necessary.

> Writing a postmortem is not punishment-it is a learning opportunity for the entire company.

- 媒体・日付: 『Site Reliability Engineering』初版 第 15 章、sre.google の公開版（「Written by John Lunney and Sue Lueder」「Edited by Gary O' Connor」、頁表示 © 2017 Google, Inc.、O'Reilly Media 刊）
- URL: https://sre.google/sre-book/postmortem-culture/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: 事後検証の目的は、記録を残し、寄与した原因を理解し、再発の可能性か影響を下げる予防策を入れること。責めない事後検証は、個人やチームを咎めず、事故に寄与した要因を探す。関わった人は手元の情報で善意に動いた、と前提する。書くこと自体は罰ではなく、会社全体の学びの機会である。事後検証を書く条件（利用者への影響・データの消失・手での介入・解決までの時間など）は事故の前に決めておく。章は、責めない文化は医療と航空から来たと書く（章の記述で、起源は確かめていない。U）。同じ書籍に事後検証の記入例（Example Postmortem）がある。Google の運用の自称。 使いどころ（本 skill の整理）: 事後検証の文化と、書く条件の事前の取り決め。事後検証の様式と、責めない書き方の根拠。「責めない」と説明責任の関係は S048・S049、上の層が犯人を探す場合の限界は S117。 区分の根拠・範囲: 章頭の題辞「The cost of failure is education.」は Devin Carraway のもので、章の著者の言葉ではない。引かない。3 つ目の原文のダッシュは正規化で半角ハイフンになっている。

### S042 Daniel Rogers ほか「Postmortem Culture: Learning from Failure」（ワークブック 第 10 章）

> Our experience shows that a truly blameless postmortem culture results in more reliable systems-which is why we believe this practice is important to creating and maintaining a successful SRE organization.

- 媒体・日付: 『The Site Reliability Workbook』第 10 章（著者表示は Daniel Rogers, Murali Suriar, Sue Lueder, Pranjal Deo, Divya Sudhakar with Gary O'Connor, Dave Rensin）、sre.google の公開版（頁表示 © 2018）
- URL: https://sre.google/workbook/postmortem-culture/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: 事後検証の導入は手順の変更であると同時に文化の変更である。文化が崩れる兆し（形だけの事後検証など）を見て直す。 使いどころ（本 skill の整理）: 事後検証が形骸化する論点。S041 の書籍の章との組み合わせ。 区分の根拠・範囲: 「より信頼できるシステムになる」は Google の経験の記述で、自称。

### S043 PagerDuty「Postmortem Template」

> This page is intended to be reviewed during a postmortem meeting that should be scheduled within 5 business days of any event.

- 媒体・日付: PagerDuty の公開文書。頁に日付表示なし（After an Incident の節）
- URL: https://response.pagerduty.com/after/post_mortem_template/ → https://docs.pagerduty.com/ops-guides/incident-response-guide/postmortem-template
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: Apache License 2.0。 要旨（本 skill の言葉）: 事後検証の様式の例。項目は、担当者・会議の日時・概要・何が起きたか・寄与要因・解決・影響（正確な数字で）・対応者（指揮者・記録係）・時系列（UTC）・うまくいったこと・うまくいかなかったこと・対応項目。会議は 5 営業日以内に先に入れる。日数と項目は PagerDuty の自称の運用。 使いどころ（本 skill の整理）: 事後検証の様式を作る相談の雛形の根拠（Apache 2.0 なので、出典を書けば改変して使える）。

### S044 Atlassian「Postmortems」（対応項目の期限）

> Designated "priority actions" have an agreed Service Level Objective (SLO) which is either 4 or 8 weeks, depending on the service, with reminders and reports to ensure they are completed.

- 媒体・日付: Atlassian の公開頁（handbook の事後検証の節）。頁に日付表示なし
- URL: https://www.atlassian.com/incident-management/handbook/postmortems
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: Copyright © 2026 Atlassian。未確認・短い引用に留める。 要旨（本 skill の言葉）: 事後検証の対応項目のうち優先のものに完了期限（4 週か 8 週）を付け、催促と報告で完了させる。事後検証は SEV 1・2 で必須、それ以外は任意。期限の値は Atlassian の自称の運用。同社の「blameless postmortem」の頁も、関係者は手持ちの情報で最善を尽くしたと仮定すると書く（S041 と同じ立場）。 使いどころ（本 skill の整理）: 事後検証が書きっぱなしになる相談。対応項目に期限と追跡を付ける様式。

### S045 Richard I. Cook「How Complex Systems Fail」（多重の失敗・縮退した状態での運転）

> Each of these small failures is necessary to cause catastrophe but only the combination is sufficient to permit failure.

> Complex systems run in degraded mode.

- 媒体・日付: Cognitive Technologies Laboratory, University of Chicago の文書。PDF の表示は「Copyright © 1998, 1999, 2000 by R.I.Cook, MD, for CtL」「Revision D (00.04.21)」
- URL: https://www.adaptivecapacitylabs.com/HowComplexSystemsFail.pdf
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 著作権は Cook。再配布の条件は頁に記載なし。短い引用に留める。 要旨（本 skill の言葉）: 複雑な系は多層に守られていて、破局には小さな失敗の重なりが要る。系は欠陥を抱えたまま、冗長性と人の働きで動き続けている。 使いどころ（本 skill の整理）: 事故の説明を 1 つの原因に絞らない論点。事後検証の前提。 区分の根拠・範囲: PDF の配布元 Adaptive Capacity Labs の頁に「Dr. Richard Cook co-founded Adaptive Capacity Labs with John Allspaw and David Woods. He died in August, 2022.」とある。著者が共同で創業した会社が置く原本として A。

### S046 Richard I. Cook「How Complex Systems Fail」（第 7 項、「根本原因」の否定）

> Post-accident attribution accident to a 'root cause' is fundamentally wrong. Because overt failure requires multiple faults, there is no isolated 'cause' of an accident.

- 媒体・日付: Cognitive Technologies Laboratory, University of Chicago の文書。PDF の表示は「Copyright © 1998, 1999, 2000 by R.I.Cook, MD, for CtL」「Revision D (00.04.21)」（発表の初出の年は表示から確定していない）
- URL: https://www.adaptivecapacitylabs.com/HowComplexSystemsFail.pdf
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 著作権は Cook。再配布の条件は頁に記載なし。短い引用のみ。 要旨（本 skill の言葉）: 大きな失敗には複数の欠陥がそろう必要があり、孤立した「原因」は無い。事故の後に「根本原因」を 1 つ挙げるのは、失敗の性質の技術的な理解ではなく、特定の局所的な力や出来事を責めたいという社会的・文化的な必要を映したものになりやすい。寄与した要因は複数あり、それぞれは単独では足りない。 使いどころ（本 skill の整理）: 事後検証の様式で「根本原因」の欄をどう扱うか。原因を 1 つに絞る運用への留保。根本原因批判の土台（S050・S051・S117 が依拠する）。原典は医療など複雑な系一般の話で、ソフトウェアに限らない点を添える。 区分の根拠: 根本原因という考え方への批判の側の主張なので C。 引用の注意: 引用の文は PDF の文言で、PDF には「attribution accident to」と語の重複がある。誤植を直さずに引く。PDF の配布元 Adaptive Capacity Labs は Cook が共同で創業した会社（S045）。

### S047 Cook「How Complex Systems Fail」（後知恵の偏り・安全は人が作る）

> Hindsight biases post-accident assessments of human performance.

> Failure free operations are the result of activities of people who work to keep the system within the boundaries of tolerable performance.

- 媒体・日付: Cognitive Technologies Laboratory, University of Chicago の文書。PDF の表示は「Copyright © 1998, 1999, 2000 by R.I.Cook, MD, for CtL」「Revision D (00.04.21)」（第 8 項・第 17 項）
- URL: https://www.adaptivecapacitylabs.com/HowComplexSystemsFail.pdf
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 著作権は Cook。再配布の条件は頁に記載なし。短い引用に留める。 要旨（本 skill の言葉）: 結果を知った後では、事前の兆候が実際より目立って見える。失敗の無い運転は、系を許容範囲に保とうとする人の日々の働きの結果である。 使いどころ（本 skill の整理）: 事後検証で「なぜ気づかなかったのか」と責める問いを避ける。うまくいった運用からも学ぶ。

### S048 John Allspaw「Blameless PostMortems and a Just Culture」（Etsy Code as Craft、just culture）

> Having a Just Culture means that you're making effort to balance safety and accountability.

- 媒体・日付: Etsy の技術ブログ Code as Craft、頁表示「By John Allspaw May 22, 2012」
- URL: https://www.etsy.com/codeascraft/blameless-postmortems（取得は 403 で拒否された）
- URL（原稿）: https://web.archive.org/web/20231129082139/https://www.etsy.com/codeascraft/blameless-postmortems/（Wayback Machine の 2023-11-29 の写し）
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 写しの頁末は「Copyright 2023 Etsy」。短い引用のみ。 要旨（本 skill の言葉）: 責めない事後検証は、誰も責任を問われないという意味ではない。失敗の仕組みの状況面と、近くにいた人の判断の過程に焦点を当てて調べると、関わった人を罰するより組織は安全になる。安全と説明責任の釣り合いを取る。 使いどころ（本 skill の整理）: 「責めない」と「責任」の区別。just culture の語の出典の指し先（関連の書誌は Dekker の S052。Dekker の『Just Culture』は未確認で U）。「責めない振り返り＝無責任」という批判への答えとして、言い出した側の原文で使う。 区分の根拠: 公式頁は 403 で取れず、Internet Archive の保存版で照合した。この台帳の凡例では保存コピーとの照合も A とする。元サイトの現行の頁は未確認。

### S049 Allspaw「Blameless PostMortems and a Just Culture」（当事者が語る）

> A funny thing happens when engineers make mistakes and feel safe when giving details about it: they are not only willing to be held accountable, they are also enthusiastic in helping the rest of the company avoid the same error in the future.

- 媒体・日付: Etsy の技術ブログ Code as Craft、頁表示「By John Allspaw May 22, 2012」
- URL: https://www.etsy.com/codeascraft/blameless-postmortems
- URL（原稿）: https://web.archive.org/web/20231129082139/https://www.etsy.com/codeascraft/blameless-postmortems/（Wayback Machine の 2023-11-29 の写し）
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 写しの頁末は「Copyright 2023 Etsy」。短い引用のみ。 要旨（本 skill の言葉）: 安心して詳細を話せると、当事者は説明責任を引き受け、再発防止にも積極的になる。当事者は自分の誤りに最も詳しいので、対策づくりに加わるべきである。記事は、何をすべきだったかを言うより、その時なぜそれが妥当に見えたかを探る「Second Story」を勧める。 使いどころ（本 skill の整理）: 事後検証の場の進め方。当事者を対策づくりに入れる。 区分の根拠: S048 と同じ（保存版で照合したため A）。

### S050 John Allspaw「Each necessary, but only jointly sufficient」

> This is actually a fallacy, because for complex systems: there is no root cause.

> Management wants an answer to why it happened quickly, and they might even look for a reason to punish someone for it.

- 媒体・日付: 個人ブログ Kitchen Soap、2012 年 2 月 10 日（頁の表示）
- URL: https://www.kitchensoap.com/2012/02/10/each-necessary-but-only-jointly-sufficient/
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 「© 2026 Kitchen Soap」の表示のみ。引用は短く。 要旨（本 skill の言葉）: 複雑な系の障害には単一の根本原因は無く、原因はそれぞれ必要だが、そろって初めて足りる。単一の原因と一直線の連鎖に還元したくなるのは、説明しやすく、「直せば二度と起きない」と安心できるからで、経営が早く答えを求めて罰する相手を探すこと、当事者が失敗の話題を早く終わらせたいこと、後知恵の偏りが、その単純化を後押しする。5 つのなぜにも同じ限界があるが、原因の調べ方を開いて持つこと自体は良いとも書く。 使いどころ（本 skill の整理）: 根本原因という考え方への批判の、運用の分野の早い時期の原文。事後検証が「原因の一行」と「誰か」に収束する形骸化の兆候として使う。

### S051 John Allspaw「The Infinite Hows (or, the Dangers Of The Five Whys)」

> The Five Whys is such an approach that I think we should discard.

> Asking "why?" too easily gets you to an answer to the question "who?"

- 媒体・日付: Kitchen Soap、2014 年 11 月 14 日（頁の表示。O'Reilly Radar にも載せたと冒頭にある）
- URL: https://www.kitchensoap.com/2014/11/14/the-infinite-hows-or-the-dangers-of-the-five-whys/
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 「© 2026 Kitchen Soap」の表示のみ。引用は短く。 要旨（本 skill の言葉）: 5 つのなぜは捨てるべきだと Allspaw は書く。「なぜ」は「誰が」に行き着きやすく、一本の因果の鎖に閉じ込める。代わりに「どのように」を聞き、当事者それぞれの語り（どう確信を得たか、どんな時間の圧力があったか）を集める。冒頭で、この批判は Todd Conklin・Sidney Dekker・Nancy Leveson に多くを負うと断っている。 使いどころ（本 skill の整理）: 事後検証の進め方の批判。「なぜ」を重ねる様式を、相談者の組織で使っているときに、問いの立て方を変える根拠として。Dekker の文は記事中の引用なので使わない（U）。

### S052 Sidney Dekker『The Field Guide to Understanding 'Human Error'』第 3 版（書誌のみ）

> （書誌のみ。本文は引用しない）

- 媒体・日付: CRC Press（Routledge の頁）、出版社頁の表示で 3rd Edition、Copyright 2014、248 Pages
- URL: https://www.routledge.com/The-Field-Guide-to-Understanding-Human-Error/Dekker/p/book/9781472439055
- 取得日: 2026-11-20
- 検証区分: R
- 備考: ライセンス: 書籍。本文は引用しない。 要旨（本 skill の言葉）: 「人の誤り」を原因でなく、系の問題の症状として見る立場の本。出版社頁の紹介は、系は少数の当てにならない人がいなければ安全だ、という見方を古い見方として扱う。 使いどころ（本 skill の整理）: 責めない事後検証・just culture の理論の指し先。本文の個別の主張は未確認。 区分の根拠・範囲: 書誌のみ。ISBN は頁の本文の表示から確かめていない。URL に含まれる番号を ISBN として書かない。


## 公開の安全（段階公開・カナリア・フラグ・Expand/Contract・切り戻し）

### S053 Rhandeev Singh・Sebastian Kirsch（with Vivek Rau）「Reliable Product Launches at Scale」（SRE 書籍 第 27 章、段階的な公開）

> Any change represents risk, and risk should be minimized in order to assure reliability of a system.

> Almost all updates to Google's services proceed gradually, according to a defined process, with appropriate verification steps interspersed.

- 媒体・日付: 『Site Reliability Engineering』初版 第 27 章、sre.google の公開版（頁表示 © 2017）
- URL: https://sre.google/sre-book/reliable-product-launches/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: 変更はどれもリスクである。一斉に公開せず、決めた手順で少しずつ広げ、各段で確かめる（少数の機械に入れて一定時間観察し、問題が無ければ広げる）。 使いどころ（本 skill の整理）: 段階公開・ロールアウトの段の設計。公開の安全。 区分の根拠・範囲: 2 つ目は Google の自社の運用の記述で、自称。

### S054 Dinah McNutt「Release Engineering」（SRE 書籍 第 8 章、hermetic なビルド）

> If two people attempt to build the same product at the same revision number in the source code repository on different machines, we expect identical results.

- 媒体・日付: 『Site Reliability Engineering』初版 第 8 章、sre.google の公開版（頁表示 © 2017）
- URL: https://sre.google/sre-book/release-engineering/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: リリース工学は、セルフサービス・高い公開の速度・hermetic（再現できる）なビルド・方針と手順の強制を原則とする。同じ版を別の機械で作っても同じ結果になることを求める。 使いどころ（本 skill の整理）: 再現できるビルド・成果物の扱い。切り戻しの前提。 自称: Google の社内のリリース工学の記述で、その会社の自称。

### S055 Martin Fowler「Continuous Delivery」

> Continuous Delivery is a software development discipline where you build software in such a way that the software can be released to production at any time.

- 媒体・日付: martinfowler.com bliki、頁表示 30 May 2013
- URL: https://martinfowler.com/bliki/ContinuousDelivery.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉）: 継続的デリバリーは、いつでも本番へ出せる状態を保つ作り方。機能を足すより出せる状態を保つことを優先し、変更ごとに本番への準備ができているかの速い自動の返答を得る。継続的デプロイ（実際に毎回出す）とは区別する。 使いどころ（本 skill の整理）: 公開の安全の土台。配信の頻度の議論。

### S056 Danilo Sato「Canary Release」

> Canary release is a technique to reduce the risk of introducing a new software version in production by slowly rolling out the change to a small subset of users before rolling it out to the entire infrastructure and making it available to everybody.

- 媒体・日付: martinfowler.com bliki、頁表示 25 June 2014、著者表示 Danilo Sato
- URL: https://martinfowler.com/bliki/CanaryRelease.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉）: カナリアリリースは、新しい版を一部の利用者へ少しずつ出してから全体へ広げ、本番に入れるリスクを下げる技法。切り戻しは利用者を旧版へ戻す経路の切り替えで済む。対象の選び方は無作為・社内の利用者から・属性で、など。本番の環境で容量を試せる利点もある、と頁は書く。 使いどころ（本 skill の整理）: カナリアの定義。SRE のワークブックの定義（S057）と並べる。 区分の根拠: 著者は Sato。Fowler の発言として扱わない。

### S057 Alec Warner・Štěpán Davidovič（with Alex Hidalgo ほか）「Canarying Releases」（ワークブック 第 16 章）

> We define canarying as a partial and time-limited deployment of a change in a service and its evaluation. This evaluation helps us decide whether or not to proceed with the rollout.

> We strongly advise running only one canary deployment at a time.

- 媒体・日付: 『The Site Reliability Workbook』第 16 章（著者表示は「By Alec Warner and Štěpán Davidovič with Alex Hidalgo, Betsy Beyer, Kyle Smith, and Matt Duftler」）、sre.google の公開版（頁表示 © 2018 Google, Inc.）
- URL: https://sre.google/workbook/canarying-releases/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: カナリアは、変更を一部に、時間を限って入れ、評価して、広げるか決めること。試験環境は本番と同じではなく、欠陥の一部は本番に届くので、新しい版をまず本番の一部の流量に当て、欠陥を小さな影響で早く見つける。変更を受けた側（カナリア）と残り（対照群）の指標を分けて比べる。カナリアは同時に 1 つだけ走らせる。危険にさらす error budget は、時間とカナリアの大きさで限られる。対象はソフトウェアの公開に限らず、設定やデータの変更も含む。Google の運用の自称を含む。 使いどころ（本 skill の整理）: 段階公開の設計の中心の根拠。カナリアの大きさ・時間・評価の指標。「対照群と比べる」を判定の様式にする。Fowler の頁の定義（S056）と並べる。

### S058 AWS Builders' Library「Automating safe, hands-off deployments」

> If the change causes a negative impact in the one box, the pipeline automatically rolls back the change and doesn't promote it to the rest of the prod stages.

- 媒体・日付: Amazon Builders' Library の記事。頁表示「Published Jun 18, 2020」。著者表示 Clare Liguori
- URL: https://aws.amazon.com/builders-library/automating-safe-hands-off-deployments/ → https://builder.aws.com/content/3ErTKQOTKc5NIw031UePBPxTQ6I/automating-safe-hands-off-deployments
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: © 2026, Amazon Web Services, Inc.。未確認・短い引用に留める。 要旨（本 skill の言葉）: 本番は波（リージョン・AZ の組）に分けて順に出し、各波の最初は 1 台（one box）に出す。悪影響が出れば自動で切り戻し、次の段へ進めない。Amazon の運用の自称で、1 台が受ける割合（記事は最大 1 割程度）などの値はその会社の例。 使いどころ（本 skill の整理）: 段階公開を自動の判定と切り戻しまで含めて設計する相談。

### S059 Martin Fowler「Blue Green Deployment」

> Blue-green deployment also gives you a rapid way to rollback - if anything goes wrong you switch the router back to your blue environment.

> So first apply a database refactoring to change the schema to support both the new and old version of the application, deploy that, check everything is working fine so you have a rollback point, then deploy the new version of the application.

- 媒体・日付: martinfowler.com bliki、頁表示 1 March 2010
- URL: https://martinfowler.com/bliki/BlueGreenDeployment.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉）: できるだけ同じ本番環境を 2 つ持ち、片方で最後の確認をしてから経路を切り替える。問題があれば経路を戻せば切り戻せる。ただし、切り替え中の取引の扱いと、データベースの互換は別に考える必要がある、と頁は書く。データベースは、先にスキーマを新旧両方の版に対応させて公開し、切り戻せる点を作ってからアプリの新版を出す。旧版向けの対応は落ち着いてから外す。 使いどころ（本 skill の整理）: 切り替え・切り戻しの設計。切り戻しを妨げるのはデータベースの変更だ、という論点の根拠。データの移行が絡む場合の留保。

### S060 Pete Hodgson「Feature Toggles (aka Feature Flags)」

> Toggles introduce complexity.

> However toggles do come with a carrying cost.

> Savvy teams view their Feature Toggles as inventory which comes with a carrying cost, and work to keep that inventory as low as possible.

- 媒体・日付: martinfowler.com の記事、著者表示 Pete Hodgson。頁の改訂履歴で、2016 年 1 月 19 日に初回を掲載し 2016 年 2 月 8 日に最終回、最終改訂 2017 年 10 月 9 日（feature flag を同義語として明記した改訂）
- URL: https://martinfowler.com/articles/feature-toggles.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 「© Martin Fowler」。短い引用に留める。 要旨（本 skill の言葉）: フラグはコードを変えずに振る舞いを変えられる強い技法で、公開（release）と配備（deploy）を分けられる。ただし複雑さを持ち込み、持ち続ける費用がかかる。種類は release・experiment・ops・permissioning で、寿命と動的さが違う。フラグは数を絞り、在庫として扱い、要らなくなったら消す。期限を付ける、期限切れで試験を落とす、といった運用もある。 使いどころ（本 skill の整理）: 機能フラグの導入と後始末。フラグの増えすぎ・棚卸し・寿命の相談。切り戻しをフラグで行う場合の前提。 区分の根拠: 著者は Hodgson。Fowler の発言として扱わない。 日付の注記: 頁の改訂履歴で上の日付を確かめた。

### S061 Danilo Sato「ParallelChange」（expand and contract）

> is a pattern to implement backward-incompatible changes to an interface in a safe manner, by breaking the change into three distinct phases: expand, migrate, and contract.

- 媒体・日付: martinfowler.com の bliki。2014-05-13。著者 Danilo Sato
- URL: https://martinfowler.com/bliki/ParallelChange.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: © Martin Fowler。未確認・短い引用に留める。 要旨（本 skill の言葉）: 互換性の無い変更を、広げる（新旧を両方受ける）・移す（使う側を移す）・縮める（旧を外す）の 3 段に分ける。データベースのリファクタリングも、この型の主要な適用先として挙げる。 使いどころ（本 skill の整理）: スキーマ変更・API 変更を止めずに行う手順の型。 区分の根拠・範囲: 引用は文の途中から。主語は「Parallel change, also known as expand and contract,」で、リンクの空白を避けるため後半だけを引いた。

### S062 Pramod Sadalage・Martin Fowler「Evolutionary Database Design」（移行期間）

> A transition phase is a period of time when the database supports both the old access pattern and the new ones simultaneously.

- 媒体・日付: martinfowler.com の記事。2016-05 に全面改稿（初出 2003-01）。著者 Pramod Sadalage と Martin Fowler（頁の著者紹介）
- URL: https://martinfowler.com/articles/evodb.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: © Martin Fowler。未確認・短い引用に留める。 要旨（本 skill の言葉）: 互換性のある変更（NULL を許す列の追加など）は、アプリより先に入れられる。互換性の無い変更（表の分割など）は、新旧の使い方を両方受ける移行期間を置く。移行期間はビューなどで作れる。 使いどころ（本 skill の整理）: S061 のデータベース版。移行期間をいつ閉じるかを計画に入れる根拠。

### S063 AWS Builders' Library「Ensuring rollback safety during deployments」

> We found that the most common reason for not being able to roll back is a change of protocol.

- 媒体・日付: Amazon Builders' Library の記事。頁表示「Published Dec 5, 2019」。著者表示 Sandeep Pokkunuri
- URL: https://aws.amazon.com/builders-library/ensuring-rollback-safety-during-deployments/ → https://builder.aws.com/content/3F04j2yRAAMBuPSPs50xwXZqg01/ensuring-rollback-safety-during-deployments へリダイレクト
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 頁フッター「© 2026, Amazon Web Services, Inc.」。未確認・短い引用に留める。 要旨（本 skill の言葉）: 切り戻せない原因で最も多いのは、プロトコル（データの形式・通信の取り決め）の変更。対策は 2 段の配備で、まず新しい形式を読めるようにする版を全体に出し、次に新しい形式で書き始める版を出す。こうすれば、どちらの段でも前の版へ戻せる。Amazon の運用の自称。 使いどころ（本 skill の整理）: S059・S061 と同じ論点を、通信と保存の形式で示す例。


## 容量と負荷（過負荷・連鎖障害・タイムアウト・再試行）

### S064 Alejandro Forero Cuervo「Handling Overload」（SRE 書籍 第 21 章）

> Gracefully handling overload conditions is fundamental to running a reliable serving system.

> One option for handling overload is to serve degraded responses: responses that are not as accurate as or that contain less data than normal responses, but that are easier to compute.

> A well-behaved backend, supported by robust load balancing policies, should accept only the requests that it can process and reject the rest gracefully.

- 媒体・日付: 『Site Reliability Engineering』初版 第 21 章、sre.google の公開版（「Written by Alejandro Forero Cuervo」「Edited by Sarah Chavis」、頁表示 © 2017 Google, Inc.）
- URL: https://sre.google/sre-book/handling-overload/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: どれほど負荷分散を工夫しても、どこかは過負荷になる。処理できる分だけ受け、残りは上手に断る。過負荷のときに品質を落とした応答（精度や量を減らし、計算を軽くした応答）を返す設計を先に用意する。容量を「1 秒あたりの問い合わせ数」で表すと、問い合わせごとの費用の違いを見落とし、悪い指標になりやすい（章の記述）。資源（CPU など）で容量を測る。Google の運用の自称。 使いどころ（本 skill の整理）: 縮退運転・品質を落とした応答の設計。容量計画の単位を決める相談。「QPS で上限を決める」への留保。

### S065 Mike Ulrich「Addressing Cascading Failures」（SRE 書籍 第 22 章）

> A cascading failure is a failure that grows over time as a result of positive feedback.

> The most common cause of cascading failures is overload.

> Always use randomized exponential backoff when scheduling retries.

- 媒体・日付: 『Site Reliability Engineering』初版 第 22 章、sre.google の公開版（「Written by Mike Ulrich」、頁表示 © 2017 Google, Inc.）
- URL: https://sre.google/sre-book/addressing-cascading-failures/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: 連鎖障害は、一部の失敗が残りの負荷を増やし、正の帰還で広がる失敗で、原因で最も多いのは過負荷。再試行は無作為化した指数バックオフで行い、要求ごとに回数の上限を置き、プロセス全体の再試行の予算を持つ。期限（deadline）は呼び出しの上流で決めて下流へ伝える（各サーバーが独自の長い期限を決めない）。負荷を捨てる（load shedding）・機能を落として応じる（graceful degradation）を、いつ発動するかの指標とともに決める。本文の「1 分に 60 回」は例で、基準ではない。Google の運用の自称。 使いどころ（本 skill の整理）: 再試行・バックオフ・タイムアウトの設計の相談の中心の根拠。負荷の波及を止める設計。 区分の根拠・範囲: 1 つ目の直後の脚注番号「107」は含めていない。章頭の題辞は Dan Sandler・Ade Oshineye のもので引かない。

### S066 AWS（Amazon Builders' Library）「Timeouts, retries, and backoff with jitter」

> Retries are "selfish."

> When failures are caused by overload, retries that increase load can make matters significantly worse.

> Jitter adds some amount of randomness to the backoff to spread the retries around in time.

> In general, our view is that APIs with side effects aren't safe to retry unless they provide idempotency.

- 媒体・日付: Amazon Builders' Library の記事（現在は AWS Builder Center）。頁表示「Published Dec 5, 2019」。著者表示は「Marc」のみ（姓は頁から確認できず）
- URL: https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/ → https://builder.aws.com/content/3EumjoZascWd1oZiEgL8ORlv3qE/timeouts-retries-and-backoff-with-jitter へリダイレクト
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 頁フッター「© 2026, Amazon Web Services, Inc.」。再利用条件は未確認・短い引用のみ。 要旨（本 skill の言葉）: 再試行は「利己的」で、呼ぶ側が成功の見込みを上げるために相手の時間をさらに使う。失敗がまれで一時的なら問題ないが、過負荷が原因の失敗では、再試行が負荷を上げて事態を大きく悪化させ、元の問題が去った後も復旧を遅らせる。バックオフだけだと失敗した呼び出しが同じ時刻に揃うので、ゆらぎ（jitter）を足して散らす。ゆらぎは再試行以外の定期処理にも足す。副作用のある API は冪等でなければ再試行しない。再試行はスタックの 1 か所で行う。Amazon の運用の自称。 使いどころ（本 skill の整理）: S065 と並べ、再試行の設計の規則を示す。失敗の型「再試行の嵐」の一般論の根拠。S123 の一斉の押し寄せ、S070 の準安定の失敗とつなぐ。 日付の注記: 公開年は頁の「Published Dec 5, 2019」で確かめた。著者の姓は確認できていない（記憶で補わない）。

### S067 AWS Builders' Library「Using load shedding to avoid overload」

> Load shedding lets a server maintain its goodput and complete as many requests as it can, even as offered throughput increases.

- 媒体・日付: Amazon Builders' Library の記事。頁表示「Published Dec 5, 2019」。著者表示は「David」のみ（頁の alias は dyanacek）
- URL: https://aws.amazon.com/builders-library/using-load-shedding-to-avoid-overload/ → https://builder.aws.com/content/3Eun1EEyX6p2e3VYNyRLSJzLuMV/using-load-shedding-to-avoid-overload
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: © 2026, Amazon Web Services, Inc.。未確認・短い引用に留める。 要旨（本 skill の言葉）: 受けた量（throughput）と、期限内に正しく返せた量（goodput）を分けて考える。負荷を捨てると、受ける量が増えても goodput を保てる。ただし捨てる処理にも費用があり、限界を超えると goodput は落ちる。負荷試験では goodput が頭打ちのまま保たれるかを見る。Amazon の運用の自称。 使いどころ（本 skill の整理）: 負荷試験の合否を何で見るかの相談。S064 と並べて示す。

### S068 AWS Builders' Library「Static stability using Availability Zones」

> In a statically stable design, the overall system keeps working even when a dependency becomes impaired.

- 媒体・日付: Amazon Builders' Library の記事。頁表示「Published Dec 5, 2019」。著者表示は「Mike」と「Furr, Mike」
- URL: https://aws.amazon.com/builders-library/static-stability-using-availability-zones/ → https://builder.aws.com/content/3K9SiqiJ369TGkkGzqPM95BuYWI/static-stability-using-availability-zones
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: © 2026, Amazon Web Services, Inc.。未確認・短い引用に留める。 要旨（本 skill の言葉）: 依存先が壊れても、新しい判断や資源の追加をしないで動き続けられるようにする（静的安定性）。障害時に制御系（資源を作る・切り替える仕組み）に頼る設計は、その制御系も壊れていると回復できない。そのため容量を前もって多めに持つ（記事の例は 3 つの AZ で 50% 多く持つ）費用と引き換えになる。Amazon の運用の自称。 使いどころ（本 skill の整理）: 冗長化の設計で「障害時に自動で増やす」に頼る案への留保。

### S069 AWS Builders' Library「Workload isolation using shuffle-sharding」

> With shuffle sharding we create virtual shards of two workers each, and we assign our customers or resources, or whatever we want to isolate, to one of those virtual shards.

- 媒体・日付: Amazon Builders' Library の記事。頁表示「Published Dec 5, 2019」。著者表示は「Colm」のみ（頁の alias は colmmacc）
- URL: https://aws.amazon.com/builders-library/workload-isolation-using-shuffle-sharding/ → https://builder.aws.com/content/3F06NpJ8YeoIGP8VHTw4n81pFn8/workload-isolation-using-shuffle-sharding
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: © 2026, Amazon Web Services, Inc.。未確認・短い引用に留める。 要旨（本 skill の言葉）: 通常のシャーディングは、1 つのシャードの障害を他から切り離す。shuffle sharding は、顧客ごとに作業者の組み合わせ（仮想のシャード）を割り当て、組み合わせがほぼ重ならないようにして、1 顧客の問題が他の顧客に及ぶ範囲（blast radius）を小さくする。Amazon の運用の自称（Route 53 の例）。 使いどころ（本 skill の整理）: 多数の顧客を相乗りさせる系で、影響範囲を限る設計の相談。

### S070 Bronson・Aghayev・Charapko・Zhu「Metastable Failures in Distributed Systems」

> Metastable failures occur in open systems with an uncontrolled source of load where a trigger causes the system to enter a bad state that persists even when the trigger is removed.

> Paradoxically, the root cause of these failures is often features that improve the efficiency or reliability of the system.

- 媒体・日付: HotOS '21（2021 年 5 月 31 日〜6 月 2 日、論文の書誌欄）
- URL: https://sigops.org/s/conferences/hotos/2021/papers/hotos21-s11-bronson.pdf
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 「© 2021 Association for Computing Machinery」。個人・授業での複製は非営利なら許可、の表示。引用は短く。 要旨（本 skill の言葉）: 準安定の失敗は、負荷を制御できない開いた系で、きっかけが去っても悪い状態が続くもの。論文は、悪い状態を保たせる仕組みの代表に要求の再試行（仕事の増幅）を挙げ、look-aside のキャッシュも長い停止を招きうるとする。皮肉にも、その原因はしばしば効率や信頼性を上げるための機能である。未知の準安定の失敗に強い系を体系的に作る方法は未解決と書く。 使いどころ（本 skill の整理）: 「きっかけを取り除いたのに戻らない」障害の型の名前と枠組み。再試行・キャッシュを足す設計の相談で、裏目に出る条件を点検する根拠。なお批判側（S050・S046）が否定する「root cause」の語を、この論文は普通に使っている。語の使い方は分野・著者で揃っていない。

### S071 Little の法則（L = λW）

> （書誌のみ。本文は引用しない）

- 媒体・日付: John D. C. Little, "A Proof for the Queuing Formula: L = λW", Operations Research, 1961（書誌はこの台帳の調査では一次で確かめていない）
- URL: なし（論文の頁は取得していない）
- 取得日: なし
- 検証区分: R
- 備考: ライセンス: 逐語引用をしない。 要旨（本 skill の言葉）: 安定した系では、系の中にある平均の件数 = 到着率 × 平均の滞在時間。例: 1 秒あたり 200 件が来て平均 0.05 秒かかるなら、同時に処理中なのは平均 10 件（本 skill の計算）。教科書的な事実として使い、引用はしない。 使いどころ（本 skill の整理）: 同時接続数・スレッド数・接続プールの大きさを、到着率と遅延から見積もる相談。 書誌の注意: 著者・誌名・年は調査の記述で、一次で確かめていない（U の表）。引用しない。


## 費用（FinOps・クラウドの費用の議論）

### S072 FinOps Foundation「What is FinOps?」

> FinOps is an operational framework and cultural practice which maximizes the business value of technology, enables timely data-driven decision making, and creates financial accountability through collaboration between engineering, finance, and business teams.

- 媒体・日付: FinOps Foundation の公開頁。頁表示「FinOps Foundation Technical Advisory Council Updated: November 2026」
- URL: https://www.finops.org/introduction/what-is-finops/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 頁に CC BY 4.0 の表示がある。利用・翻案には帰属の表示が条件。 要旨（本 skill の言葉）: FinOps は、技術・財務・事業のチームが協力して、技術の事業上の価値を最大にし、データに基づく判断を早くし、費用の責任を明らかにする運用の枠組みと文化。中心は文化で、各自が自分の費用と使用量に責任を持ち、中央の少人数がそれを支える。 使いどころ（本 skill の整理）: 費用の相談を「削減」ではなく「価値と責任」の言葉で始めるとき。

### S073 FinOps Foundation「FinOps Principles」

> Unit economic and value-based metrics demonstrate business impact better than just aggregate or categorized technology spend.

> Technical teams must consider cost as a first class metric from the beginning of the software development lifecycle.

- 媒体・日付: FinOps Framework の頁。頁に日付表示なし
- URL: https://www.finops.org/framework/principles/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY 4.0（頁の表示。帰属が条件）。 要旨（本 skill の言葉）: 原則は、チームで協力する・事業の価値が技術の判断を動かす・各自が使用に責任を持つ・費用のデータは早く正確に共有する・中央で支える・変動費のモデルを活かす、など（取得時点の頁の並び）。費用・品質・速さのトレードオフを意識して決める。費用は開発の初めから第一級の指標として扱う。 使いどころ（本 skill の整理）: 費用を運用の後工程の話にしない根拠。単位あたりの指標を勧める根拠。

### S074 FinOps Foundation「FinOps Phases」

> FinOps is performed by working iteratively on the Framework Capabilities through three phases: Inform, Optimize and Operate.

- 媒体・日付: FinOps Framework の頁。頁に日付表示なし
- URL: https://www.finops.org/framework/phases/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY 4.0。 要旨（本 skill の言葉）: 見える化と配賦（Inform）→ 改善の余地を探す（Optimize）→ 実行と定着（Operate）の 3 段を、短い周期で繰り返す。小さく始め、繰り返しの周期を縮めていく。段階は一方通行ではない。 使いどころ（本 skill の整理）: 費用の改善の進め方の型。最初に配賦（どのチームの費用か）を見えるようにする根拠。

### S075 FinOps Foundation「Unit Economics」

> Unit economics is often discussed in terms of marginal cost (unit cost metrics) and, where feasible, marginal revenue (unit revenue metrics).

- 媒体・日付: FinOps Framework の Capability の頁（Quantify Business Value / Unit Economics）。頁に日付表示なし
- URL: https://www.finops.org/framework/capabilities/unit-economics/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY 4.0。 要旨（本 skill の言葉）: 技術の使用と費用が製品・サービスの価値にどう効くかを、単位あたりの指標で追う。組織の目標から単位の指標と KPI を決め、資源の効率の指標と事業の指標を区別する。単位あたりの費用（例: 1 注文あたりの費用）は、増え方を見るためのもの。 使いどころ（本 skill の整理）: 総額が増えたときに、利用の増加によるものか効率の悪化かを分ける相談。単価・割引の数値は取り込まない。

### S076 Sarah Wang・Martin Casado（a16z）「The Cost of Cloud, a Trillion Dollar Paradox」

> You're crazy if you don't start in the cloud; you're crazy if you stay on it.

> we're not making a case for repatriation one way or the other; rather, we're pointing out that infrastructure spend should be a first-class metric

- 媒体・日付: a16z.com、2021 年 5 月 27 日（頁の表示）
- URL: https://a16z.com/the-cost-of-cloud-a-trillion-dollar-paradox/
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 表示なし（頁のメタデータに著作権者 a16z・2021）。引用は短く。 要旨（本 skill の言葉）: クラウドは始めるには最適だが、規模が大きくなると費用が利益率を圧迫する、という逆説を示す。引き上げを勧めるのでなく、基盤の費用を一級の指標として早くから最適化せよと書く。引き上げは最も資源を食う一部の負荷に限り、段階的に、混在で、とも書く。 使いどころ（本 skill の整理）: 費用の相談で「クラウドか自社機か」の二択にしない根拠（費用を指標として扱う）。結論は一般化しない。 区分の根拠・範囲: 分析・主張。数値〈時価総額への影響の推計など〉は a16z の推計で、この台帳の調査では確かめていない。 利害: a16z はベンチャー投資会社。記事の結びは、クラウドの機材と最適化されていないコードの間に基盤の分野の最大の機会がある、と投資の観点で書く。

### S077 Corey Quinn「The Trillion-Dollar Paradoxical Arguments of a16z」

> Dropbox is the poster child for cloud repatriation, in no small part because there are so few companies actually repatriating workloads.

> That's not most companies, and that's not most workloads.

- 媒体・日付: Last Week in AWS blog、2021 年 6 月 16 日（頁の表示）
- URL: https://www.lastweekinaws.com/blog/the-trillion-dollar-paradoxical-arguments-of-a16z/
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 「© 2026 L9 Labs, Inc」の表示のみ。引用は短く。 要旨（本 skill の言葉）: a16z の数字には異を唱えないとしつつ、引き上げの代表例の Dropbox は、予測しやすい単一の巨大な負荷という特殊な例で、ほとんどの会社・ほとんどの負荷には当てはまらないと批判する。引き上げに要る設備投資・人員が費用の比較から抜けやすいこと、技術者の手間を費用の削減より成長に使う会社が多いことも挙げる。 使いどころ（本 skill の整理）: 引き上げの事例を一般化しない根拠。負荷の形（予測しやすさ・規模）と運用の人材を先に確かめる。 区分の根拠・範囲: S076 への批判。 利害: Quinn は Duckbill の Chief Cloud Economist で、AWS の費用の改善を業とする（頁の著者紹介と本文の記述）

### S078 David Heinemeier Hansson（37signals）「Why we're leaving the cloud」「We have left the cloud」

> Renting computers is (mostly) a bad deal for medium-sized companies like ours with stable growth.

> The cloud excels at two ends of the spectrum, where only one end was ever relevant for us.

> And crucially, we've been able to do this without changing the size of the operations team at all.

- 媒体・日付: HEY World（本人のブログ）。「Why we're leaving the cloud」2022 年 10 月 19 日（1・2 文目）、「We have left the cloud」2023 年 6 月 23 日（3 文目）
- URL: https://world.hey.com/dhh/why-we-re-leaving-the-cloud-654b47e0 、https://world.hey.com/dhh/we-have-left-the-cloud-251760fb
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 表示なし（著作権は各権利者。引用は短く）。 要旨（本 skill の言葉）: クラウドが得意なのは、ごく小さく負荷の少ない段階と、負荷の振れが極端に大きい場合の両端で、成長が安定した中規模の自社には当てはまらなかった、と DHH は書く。クラウドに移っても運用チームを減らせた組織を聞いたことがない、とも書く。翌年、6 か月で自社機へ移し終え、運用チームの人数を変えずにできたと報告した（自称）。 使いどころ（本 skill の整理）: 費用の揺り戻しの事例として、どんな条件（負荷が読める・中規模・運用の人材がいる・アプリが既にコンテナ化済み）で語られているかを示す。「クラウドをやめれば安くなる」の一般化には使わない。architecture の DHH の記事（モノリス）とは別の論点。 区分の根拠・範囲: 経営者本人の意見と、自社の事例の自称。費用の削減額〈年 150 万ドル以上という本人の概算〉や人員の話は自称で、第三者の検証はない。


## IaC と構成のずれ・GitOps

### S079 Martin Fowler「InfrastructureAsCode」（bliki）

> Infrastructure as code is the approach to defining computing and network infrastructure through source code that can then be treated just like any software system.

> But now we live the Cloud Age, where firing up a new server is a matter of seconds, requiring no more than an internet connection and a credit card.

- 媒体・日付: martinfowler.com の bliki、2016 年 3 月 1 日（頁の表示）
- URL: https://martinfowler.com/bliki/InfrastructureAsCode.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 「© Martin Fowler」の表示のみ。引用は短く。 要旨（本 skill の言葉）: 基盤をソースコードで定義し、普通のソフトウェアと同じく版管理・試験・継続的な配信の対象にする。ハードを探して数か月かけた「鉄の時代」から、数秒でサーバーが立つ「クラウドの時代」へ移ったことが前提。小さな変更を頻繁に、サーバーに入って手で直さない、などの実務を挙げる。 使いどころ（本 skill の整理）: IaC の時代の前提（動的な基盤）を示す。手作業の設定が雪片のサーバーを生む話（S083）とつなぐ。

### S080 Kief Morris『Infrastructure as Code』第 3 版 第 1 章「What Is Infrastructure as Code?」

> A literal definition of Infrastructure as Code is the practice of provisioning and managing infrastructure using code rather than command-line tools or ClickOps GUIs.

> It is about applying the principles, practices, and tools of software engineering to infrastructure.

- 媒体・日付: O'Reilly Media、第 3 版（PDF の表示は「Copyright © 2025 Kief Morris. All rights reserved.」「2025-03-13: First Release」）。Thoughtworks が配布する第 1 章の抜粋（PDF に「This excerpt contains Chapter 1」「This work is part of a collaboration between O'Reilly and Thoughtworks」）
- URL: https://www.thoughtworks.com/content/dam/thoughtworks/documents/books/infra-as-code-3e-free-chapter.pdf
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 「All rights reserved」。短い引用に留める。 要旨（本 skill の言葉）: 字義どおりには、手でコマンドや画面を操作する代わりにコードで基盤を用意・管理すること。それ以上に、ソフトウェア工学の原則・実践・道具を基盤に当てはめることを言う。手での操作は、変更のたびに実装の仕方がぶれ、一貫性と再現性を失う。 使いどころ（本 skill の整理）: IaC の定義。画面での手作業の変更（構成のずれの原因）を避ける論点。 区分の根拠・範囲: 出版社と著者の所属先が出した抜粋。

### S081 Morris『Infrastructure as Code』第 3 版 第 1 章（中心の実践）

> Define everything as code.

> Continually test and deliver all work in progress.

> Build small, simple pieces that can be changed independently.

- 媒体・日付: O'Reilly Media、第 3 版（PDF の表示は「Copyright © 2025 Kief Morris. All rights reserved.」「2025-03-13: First Release」）。Thoughtworks が配布する第 1 章の抜粋（PDF に「This excerpt contains Chapter 1」「This work is part of a collaboration between O'Reilly and Thoughtworks」）
- URL: https://www.thoughtworks.com/content/dam/thoughtworks/documents/books/infra-as-code-3e-free-chapter.pdf
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 「All rights reserved」。短い引用に留める。 要旨（本 skill の言葉）: 中心の実践は 3 つ。すべてをコードで定義する、作業中のものを常に試して届ける、独立して変えられる小さく単純な部品で組む。章は「基盤はあまり変わらない」「先に作って後で自動化すればよい」「速さと品質は二者択一」を誤解として退ける。 使いどころ（本 skill の整理）: IaC の導入の順序。変更を前提に設計する論点。章は DORA の 4 指標にも触れる（指標の定義は S094〜S096 で DORA 自身の頁から引く） 区分の根拠・範囲: 箇条書きの 3 項目。原稿では各項の前に「•」がある。

### S082 Kief Morris『Infrastructure as Code』の版（書誌のみ）

> （書誌のみ。本文は引用しない）

- 媒体・日付: O'Reilly Media。PDF の表示で第 1 版 June 2016、第 2 版 December 2020、第 3 版 March 2025、第 3 版の ISBN 978-1-098-15035-8。著者の頁は、第 1 版はサーバーの構成（Chef・Puppet など）、第 2 版はスタック（CDK・Terraform など）、第 3 版は使い方と組み立てに重心を置く、と説明する
- URL: https://infrastructure-as-code.com/book/
- 取得日: 2026-11-20
- 検証区分: R
- 備考: ライセンス: 書籍。本文は S080・S081 の抜粋の範囲だけ引く。 要旨（本 skill の言葉）: 版ごとに道具と重心が変わった。古い版の記述を今の前提として使わない。著者の頁は、IaC の語の早い使用例として 2009 年の Velocity での Andrew Clay-Shafer の講演などを挙げる（著者の調べた範囲の記述）。 使いどころ（本 skill の整理）: IaC の書籍を指すときに版を書く根拠。 区分の根拠・範囲: 書誌のみ。

### S083 Martin Fowler「SnowflakeServer」「PhoenixServer」（bliki）— 構成のずれ

> The result is a unique snowflake - good for a ski resort, bad for a data center.

> The primary advantage of using phoenix servers is to avoid configuration drift : ad hoc changes to a systems configuration that go unrecorded.

> The limitation is that re-applying configuration like this can only spot drift in areas that you've defined that the tools control.

- 媒体・日付: martinfowler.com の bliki。2 篇とも 2012 年 7 月 10 日（頁の表示）。「Phoenix Server」の語は同僚の Kornelis Sietsma の造語と頁の注にある
- URL: https://martinfowler.com/bliki/SnowflakeServer.html 、https://martinfowler.com/bliki/PhoenixServer.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 「© Martin Fowler」の表示のみ。引用は短く。 要旨（本 skill の言葉）: 手で設定を重ねたサーバーは、再現も変更も難しい唯一無二の「雪片」になる。記録されない場当たりの変更（構成のずれ）を避けるには、サーバーを定期的に作り直す。構成管理の道具で定義を当て直す方法もあるが、道具が管理していると定義した範囲のずれしか見つけられない。両方を使うのがよいと書く。 使いどころ（本 skill の整理）: 構成のずれ（ドリフト）の定義と、「宣言して当て直す」方法の限界（定義の外のずれは直らない）を、推進側の原文で示す。宣言的な IaC への外部からの批判はこの台帳の調査では薄い（末尾の U・限界）。

### S084 Kief Morris「ImmutableServer」（bliki）と「Infrastructure as Code: The Automation Fear Spiral」

> In practice it's not possible to manage a server's configuration completely, so there is considerable scope for configuration drift, and unexpected changes to running servers.

> I lacked confidence in my automation because my servers were not consistent. My servers were not consistent because I wasn't running automation frequently and consistently.

- 媒体・日付: 「Immutable Server」、martinfowler.com の bliki、2013 年 6 月 13 日、筆者 Kief Morris（頁の表示。「Immutable Server」の語は同僚の Ben Butler-Cole の造語と注にある）（1 文目）。「The Automation Fear Spiral」、Thoughtworks のブログ、2016 年 1 月 19 日、筆者 Kief Morris（2 文目。本人のブログの初出の日付は未確認）
- URL: https://martinfowler.com/bliki/ImmutableServer.html 、https://www.thoughtworks.com/insights/blog/infrastructure-code-automation-fear-spiral
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 前者は「© Martin Fowler」の表示のみ、後者は表示を確認していない。引用は短く。 要旨（本 skill の言葉）: 構成管理の道具で定義を当て続けても、実際にはサーバーの構成を完全には管理できず、ずれと予期しない変化が残る。そこで、作ったら手を入れず、変更は元の像に入れて試し、置き換える（不変のサーバー）。後者では、サーバーがそろっていないから自動化を信用できず、自動化を頻繁に回さないからサーバーがそろわない、という「自動化への恐れの悪循環」を書き、小さく始めて監視と継続的な試験を足すことを勧める。 使いどころ（本 skill の整理）: IaC を入れても手作業が残り、ずれが育つ失敗の型。「道具を入れたのに無人で回せない」相談への見立て。

### S085 HashiCorp「Terraform: State」

> The primary purpose of Terraform state is to store bindings between objects in a remote system and resource instances declared in your configuration.

> Prior to any operation, Terraform does a refresh to update the state with the real infrastructure.

- 媒体・日付: Terraform 公式文書（Language）。頁に日付表示なし
- URL: https://developer.hashicorp.com/terraform/language/state
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 頁から確認できず。未確認・短い引用に留める。 要旨（本 skill の言葉）: state は、構成に書いた資源と、実在する資源との対応を保存するもの。操作の前に実在の状態を読み直して state を更新する。同じ文書の「Purpose of Terraform State」は、タグで対応を取る方式を初期に試して捨てた理由（タグを持てない資源がある）を書く。 使いどころ（本 skill の整理）: 「state を手で直してよいか」「state をどこに置くか」の相談の前提。製品の機能の比較はしない。 利害: 製品の開発元（HashiCorp）自身の文書。概念の説明だけに使い、製品の比較・選定の根拠にしない。

### S086 HashiCorp「Purpose of Terraform State」（Terraform の公式文書）

> State is a necessary requirement for Terraform to function.

> Early prototypes of Terraform actually had no state files and used this method. However, we quickly ran into problems.

- 媒体・日付: developer.hashicorp.com の Terraform の言語の文書（取得時の最新は v1.17.x と頁の表示。頁の日付は無し）
- URL: https://developer.hashicorp.com/terraform/language/state/purpose
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 表示を確認していない（著作権は HashiCorp。引用は短く）。 要旨（本 skill の言葉）: 宣言した設定と実在の資源を結びつけるには、何らかの対応表（状態）が要る。状態を持たずに毎回実物を調べる方式は、複雑さを別の場所へ移すだけだと開発元は説明する。初期の試作は状態のファイルを持たずに資源のタグで対応を取ろうとしたが、タグを付けられない資源があってすぐ行き詰まった。チームで使うときは状態を共有し、ロックで同時実行を防ぐことを勧める。 使いどころ（本 skill の整理）: 「宣言的」な IaC でも、宣言と実物の間に状態という第 3 の物が要り、その持ち方（共有・ロック・ずれ）が運用の論点になることの根拠。特定の製品を選ぶ助言には使わない。 区分の根拠・範囲: 開発元自身の説明。製品の文書であり、他の方式との比較の根拠には使わない。 利害: 製品の開発元（HashiCorp）自身の説明。

### S087 HashiCorp「terraform plan」（refresh-only と構成のずれ）

> It is not recommended to use -target for routine operations, since this can lead to undetected configuration drift and confusion about how the true state of resources relates to configuration.

- 媒体・日付: Terraform 公式文書（CLI）。頁に日付表示なし
- URL: https://developer.hashicorp.com/terraform/cli/commands/plan
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 未確認・短い引用に留める。 要旨（本 skill の言葉）: refresh-only の計画は、Terraform の外で行われた変更に state を合わせることだけを目的とする（頁の説明）。一部の資源だけを対象にする操作を日常的に使うと、検出されない構成のずれ（drift）が残る。コマンドの使い方には立ち入らない。 使いどころ（本 skill の整理）: 管理画面での手作業の変更（ずれの原因）を、どう検出し、どちらに合わせるかを決める相談。 利害: 製品の開発元（HashiCorp）自身の文書。コマンドの使い方には立ち入らない。

### S089 OpenGitOps「GitOps Principles」と用語集（drift・reconciliation）

> Software agents continuously observe actual system state and attempt to apply the desired state.

> When a system's actual state has moved or is in the process of moving away from the desired state, this is often referred to as drift.

- 媒体・日付: OpenGitOps（CNCF の GitOps Working Group）。原則は v1.0.0（頁表示）
- URL: https://opengitops.dev/
- URL（原稿）: https://github.com/open-gitops/documents
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: `LICENSE.md` に「Except as otherwise noted, the content of this repo is licensed under the Creative Commons Attribution 4.0 License」。帰属が条件。 要旨（本 skill の言葉）: GitOps の 4 原則は、望む状態を宣言で書く・版を付け変更不能な形で全履歴を残す・エージェントが自動で取りに行く（pull）・実際の状態を見続けて望む状態へ合わせる（reconcile）。用語集は、実際の状態が望む状態から離れることを drift と呼び、意図した変更でも意図しないずれでも、差があれば合わせにいくとする。 使いどころ（本 skill の整理）: 構成のずれを「直すべき差」として扱う考え方の根拠。GitOps を採るかどうかの判断は相談者の規模による（本 skill の整理）。


## 復旧（RTO・RPO・訓練・カオスエンジニアリング）

### S090 NIST SP 800-34 Rev. 1「Contingency Planning Guide for Federal Information Systems」（RTO・RPO・MTD）

> RTO defines the maximum amount of time that a system resource can remain unavailable before there is an unacceptable impact on other system resources, supported mission/business processes, and the MTD.

> The RPO represents the point in time, prior to a disruption or system outage, to which mission/business process data can be recovered (given the most recent backup copy of the data) after an outage.

- 媒体・日付: NIST Special Publication 800-34 Rev. 1、2010（PDF 内の改訂履歴に 2010-05-21 の項）。著者 Marianne Swanson ほか
- URL: https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: PDF に「It may be used by nongovernmental organizations on a voluntary basis and is not subject to copyright.」（米国政府の著作物）。 要旨（本 skill の言葉）: MTD は業務の停止を受け入れられる合計の時間。RTO はシステムの資源が止まっていられる最大の時間で、MTD に収まるよう決める。RPO はどの時点のデータまで戻せるかで、許せるデータの喪失の量であり、MTD には含まれない。米国連邦政府向けの文書。 使いどころ（本 skill の整理）: RTO・RPO の定義の一次。RTO と RPO を混ぜて「何時間で戻す」だけを決める相談への補正。

### S091 AWS Well-Architected 信頼性の柱「REL13-BP01 Define recovery objectives for downtime and data loss」

> In order to guide how you respond and recover from failures, define a Recovery Time Objective (RTO) and Recovery Point Objective (RPO) for each workload.

- 媒体・日付: AWS Well-Architected Framework の信頼性の柱の頁。頁の冒頭に「This whitepaper is for historical reference only and will be deprecated in the future. All updated guidance and best practices now live in the Well-Architected Framework whitepaper.」とある。framework 側の同名頁（`framework/rel_planning_for_recovery_objective_defined_recovery`）は 404 で取得できなかった
- URL: https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_planning_for_recovery_objective_defined_recovery.html
- URL（原稿）: 同じ頁の `.md` 版
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 未確認・短い引用に留める。 要旨（本 skill の言葉）: ワークロードごとに RTO と RPO を決める。避けるべき型として、目標を決めていない・根拠なく決める・事業の要求より緩い・事業の要求より厳しすぎて実装が高く複雑になる・0（無停止・無損失）のような達成できない目標・依存先の目標と合わない、を挙げる。災害復旧の白書（同じ断り書きあり）も同じ定義を書く。AWS の指針で、その会社の運用の自称を含む。 使いどころ（本 skill の整理）: 目標の決め方の相談。厳しすぎる目標も誤りだという根拠。 区分の根拠・範囲: 廃止予定の頁。

### S092 AWS Well-Architected 信頼性の柱「REL12-BP05 Conduct game days regularly」

> Game days simulate events in production-like environments to test systems, processes, and team responses.

- 媒体・日付: AWS Well-Architected Framework の信頼性の柱の頁。頁の冒頭に「This whitepaper is for historical reference only and will be deprecated in the future.」の断り書きがある（S091 と同じ断り書き）
- URL: https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_testing_resiliency_game_days_resiliency.html
- URL（原稿）: 同じ頁の `.md` 版
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 未確認・短い引用に留める。 要旨（本 skill の言葉）: ゲームデイは、本番に近い環境で事象を起こし、システム・手順・チームの対応を試す。本番で対応する同じチームを参加させ、定期的に行って習慣にする。同じ柱の REL12-BP04は、障害注入の前に定常状態を測れる出力で定義するよう書く。AWS の指針で、その会社の運用の自称を含む。 使いどころ（本 skill の整理）: 復旧手順を「書いたが試していない」状態の相談。 区分の根拠・範囲: 廃止予定の頁。

### S093 Principles of Chaos Engineering

> Chaos Engineering is the discipline of experimenting on a system in order to build confidence in the system's capability to withstand turbulent conditions in production.

- 媒体・日付: principlesofchaos.org。頁表示「Last Update: 2019 March」。著者名の表示は頁に無い
- URL: https://principlesofchaos.org/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 頁に表示なし。未確認・短い引用に留める。 要旨（本 skill の言葉）: 実験の手順は、定常状態を測れる出力で定義する → 対照群と実験群で定常状態が続くと仮説を立てる → 現実の事象（サーバーの停止・ディスクの故障・回線の切断など）を入れる → 両群の差を探して仮説を反証する。原則として、内部の属性ではなく出力に着目する・現実の事象を選ぶ・本番で行う・自動化して続ける・影響範囲（blast radius）を最小にする、を挙げる。 使いどころ（本 skill の整理）: 障害注入を「壊してみる」ではなく仮説の検証として設計する相談。本番で行うかは、影響範囲を限れるかで相談者が決める（本 skill の整理）。


## 配信の指標（DORA）

### S094 Nathen Harvey「DORA's software delivery performance metrics」（DORA の案内頁、5 つの指標）

> DORA has identified five software delivery performance metrics that provide an effective way of measuring the outcomes of the software delivery process.

> DORA's research has repeatedly demonstrated that speed and stability are not tradeoffs.

- 媒体・日付: dora.dev の Guides、署名「by Nathen Harvey」、頁末「Last updated: January 5, 2026」
- URL: https://dora.dev/guides/dora-metrics/（https://dora.dev/guides/dora-metrics-four-keys/ から転送）
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY 4.0（頁末に明記）。出典を示せば要旨・訳も可。短い引用に留める。 要旨（本 skill の言葉）: 現行の 5 指標は、速さ（throughput）の側が「変更のリードタイム」「デプロイの頻度」「失敗したデプロイからの復旧時間」、不安定さ（instability）の側が「変更失敗率」「デプロイの手戻り率」。1 つのアプリ・サービスごとに測るのが向く。頁が引く Farley の文（Modern Software Engineering）は Farley の言葉で、DORA の文ではない。 使いどころ（本 skill の整理）: 配信の速さと安定の測り方。4 指標を Forsgren や Accelerate の逐語として扱わない（書籍は S097 の書誌のみ） 区分の根拠・範囲: DORA の公式頁。2 つ目は DORA の研究の主張で、自称。

### S095 Nathen Harvey「DORA's software delivery performance metrics」（よくある落とし穴）

> Setting metrics as a goal.

> These metrics are meant to be applied at the application or service level.

> Ignoring Goodhart's law and making broad statements like, "Every application must deploy multiple times per day by year's end," increases the likelihood that teams will try to game the metrics.

> Comparing metrics between vastly different applications (for example, a mobile app and a mainframe system) can be misleading.

- 媒体・日付: dora.dev の Guides、署名「by Nathen Harvey」、頁末「Last updated: January 5, 2026」
- URL: https://dora.dev/guides/dora-metrics/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY 4.0（頁末に明記）。出典を示せば要旨・訳も可。短い引用に留める。 要旨（本 skill の言葉）: 指標を目標にすると Goodhart の法則で操作されやすい（Goodhart の法則を無視して「年末までに全アプリで 1 日複数回デプロイ」のように言うと、チームが指標を操作しやすくなる）。1 つの指標だけを見る、業界を言い訳にする、性質の違うアプリどうし（モバイルアプリとメインフレームなど）を比べる、指標をチームごとに分断する、他チームと競う、測ることに費やして改善しない、を落とし穴に挙げる。指標は 1 つのアプリ・サービスの単位で使う。 使いどころ（本 skill の整理）: 指標が目標になる問題を、指標の出し手自身の注意として示す。チームの評価に使う話への留保。

### S096 Nathen Harvey「A history of DORA's software delivery metrics」（名称と数の変遷）

> The metric historically known as "mean time to recover (MTTR)" or "time to restore service" was renamed and redefined as failed deployment recovery time.

> To test this, they introduced a fifth metric: deployment rework rate.

- 媒体・日付: dora.dev の Insights、署名「by Nathen Harvey」、頁表示 January 2, 2026
- URL: https://dora.dev/insights/dora-metrics-history/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY 4.0。短い引用に留める。 要旨（本 skill の言葉）: 頁によれば、2014 年は 4 変数で始めたが変更失敗率が他と 1 つの構成概念にまとまらず 3 指標で定義した。2015 年に速さと安定の 2 面になった。2018 年に可用性を加えて SDO 性能と呼び、2021 年に信頼性へ広げた（2021 年の報告書が信頼性を「5 つ目の指標」と呼んだのは不正確だった、と頁は書く）。2023 年に MTTR を「失敗したデプロイからの復旧時間」へ改めた。変更が原因の障害と、データセンターの停止など外の原因の障害を分けるためである。2024 年に手戻り率を加え 5 指標になった。 使いどころ（本 skill の整理）: 年によって指標の名と数が違うことを書く根拠。「4 つの指標」「MTTR」と書かれた資料の時点を確かめる。 区分の根拠・範囲: DORA 自身による経緯の説明。各年の報告書の原文は未取得。 食い違い: Wikipedia「DevOps」は、2016 年の State of DevOps の報告書で DORA の指標が公表され、最初の State of DevOps の報告書は 2012 年（Puppet Labs）と書く（同頁に一次資料の要求の注あり）。dora.dev の記述と年が合わない。この台帳では dora.dev の記述だけを使い、Wikipedia の年は確かめていない（U）

### S097 Nicole Forsgren・Jez Humble・Gene Kim『Accelerate』（書誌のみ）

> （書誌のみ。本文は引用しない）

- 媒体・日付: IT Revolution。書名『Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations』、出版社頁の表示で Publication Date March 27, 2018、288 頁、Paperback ISBN 9781942788331
- URL: https://itrevolution.com/product/accelerate/
- 取得日: 2026-11-20
- 検証区分: R
- 備考: ライセンス: 書籍。本文は引用しない。 要旨（本 skill の言葉）: DORA の研究をまとめた本（出版社頁の紹介の範囲。どの年の調査を含むかは本文で確かめていない）。4 指標の原典として指す先。現行の 5 指標とは違う（S096）。 使いどころ（本 skill の整理）: 4 指標の出典の指し先。本文の個別の主張・数値は未確認。 区分の根拠・範囲: 書誌のみ。


## Well-Architected・設計の原則

### S102 AWS「Design principles」（Well-Architected Framework、Reliability）

> Changes to your infrastructure should be made using automation.

> Replace one large resource with multiple small resources to reduce the impact of a single failure on the overall workload.

- 媒体・日付: AWS Well-Architected Framework（docs.aws.amazon.com）。同じ枠組みの Release notes に「Framework update (11-16-2026)」「The six individual pillar whitepapers have been consolidated into a single unified AWS Well-Architected Framework document.」とある。旧来の柱ごとの白書の頁（reliability-pillar/design-principles.html など）は「This whitepaper is for historical reference only」と表示されている
- URL: https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-design-principles.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: Notices の頁に「Copyright © 2026 Amazon Web Services, Inc. or its affiliates」と、情報提供のみで約束をしない旨。再利用の条件は未確認・短い引用に留める。 要旨（本 skill の言葉）: 信頼性の設計原則は 5 つ。失敗から自動で回復する（指標は技術の値でなく事業の価値で測る）、回復の手順を試す、横に広げて単一の失敗の影響を小さくする、容量を推測しない、変更を自動化で管理する。 使いどころ（本 skill の整理）: 信頼性の設計の点検項目。AWS の製品に依らない原則の部分だけを使う。 区分の根拠・範囲: 統合後の Framework の頁から引用。旧白書の頁の文言とは混ぜない。

### S103 AWS「Design principles」（Well-Architected Framework、Operational excellence）

> Automated deployment techniques together with smaller, incremental changes reduces the blast radius and allows for faster reversal when failures occur.

> In the cloud, you can employ automation safety by configuring guardrails, including rate control, error thresholds, and approvals.

- 媒体・日付: AWS Well-Architected Framework（docs.aws.amazon.com）。同じ枠組みの Release notes に「Framework update (11-16-2026)」「The six individual pillar whitepapers have been consolidated into a single unified AWS Well-Architected Framework document.」とある。旧来の柱ごとの白書の頁（reliability-pillar/design-principles.html など）は「This whitepaper is for historical reference only」と表示されている（統合後の Framework の Cloud Workloads の下）
- URL: https://docs.aws.amazon.com/wellarchitected/latest/framework/ops-design-principles.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: Notices の頁に「Copyright © 2026 Amazon Web Services, Inc. or its affiliates」と、情報提供のみで約束をしない旨。再利用の条件は未確認・短い引用に留める。 要旨（本 skill の言葉）: 運用の設計原則は、行動につながる可観測性、安全に自動化する（速さの制限・エラーの閾値・承認という歯止め）、頻繁で小さく戻せる変更、手順を頻繁に見直す、失敗を予期する、すべての運用の出来事から学ぶ、など。 使いどころ（本 skill の整理）: 公開の安全（小さく・戻せる変更）と、自動化に歯止めを付ける論点。 区分の根拠・範囲: 統合後の頁。旧白書の頁にも近い文があるが、「Organize teams around business outcomes」が旧白書側だけにあるなど、項目が違う。指針: AWS の自社の枠組みの原則で、普遍の正解ではない。

### S104 AWS「Design principles」（Well-Architected Framework、Cost optimization）

> Define and track metrics that correlate workload costs with business outcomes.

> Design workloads with cost visibility in mind, enabling detailed tracking and attribution of resource costs.

- 媒体・日付: AWS Well-Architected Framework（docs.aws.amazon.com）。同じ枠組みの Release notes に「Framework update (11-16-2026)」「The six individual pillar whitepapers have been consolidated into a single unified AWS Well-Architected Framework document.」とある。旧来の柱ごとの白書の頁（reliability-pillar/design-principles.html など）は「This whitepaper is for historical reference only」と表示されている
- URL: https://docs.aws.amazon.com/wellarchitected/latest/framework/cost-design-principles.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: Notices の頁に「Copyright © 2026 Amazon Web Services, Inc. or its affiliates」と、情報提供のみで約束をしない旨。再利用の条件は未確認・短い引用に留める。 要旨（本 skill の言葉）: 費用の設計原則は、クラウドの財務管理を開発と運用に組み込む、需要に合わせて消費する、費用を事業の成果と結び付けて測る、管理された基盤と自動化を使う、費用を細かく割り当てて見えるようにする、の 5 つ。 使いどころ（本 skill の整理）: 容量と費用の相談で「誰の・どの機能の費用か」を見えるようにする論点。単価・割引は時点情報で取り込まない。 区分の根拠・範囲: 統合後の頁。旧白書の頁は文言が大きく違い、例えば「75%」の節約の例は旧白書の頁だけにある。旧白書の数値は引かない。

### S106 Werner Vogels「10 Lessons from 10 Years of Amazon Web Services」

> Failures are a given and everything will eventually fail over time

> We needed to build systems that embrace failure as a natural occurrence even if we did not know what the failure might be.

- 媒体・日付: All Things Distributed（本人のブログ）、頁表示 March 11, 2016
- URL: https://www.allthingsdistributed.com/2016/03/10-lessons-from-10-years-of-aws.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 頁末「© 2026 All Things Distributed」。短い引用に留める。 要旨（本 skill の言葉）: 機器も OS もいずれ壊れる、を前提にする。規模が大きいと、わずかな確率の誤りも現実に起きる。失敗が何かを知らなくても、失敗を自然なこととして受け止める系を作る。AWS の事例の部分は自称。 使いどころ（本 skill の整理）: 失敗を前提にする設計の出典。よく流通する「Everything fails all the time」の代わりに、この文を使う（U の表） 区分の根拠・範囲: 「2. Expect the unexpected」の節。


## 歴史と時代区分

### S108 Werner Vogels（Amazon）、ACM Queue の対談「A Conversation with Werner Vogels」

> The traditional model is that you take your software to the wall that separates development and operations, and throw it over and then forget about it. Not at Amazon. You build it, you run it.

- 媒体・日付: ACM Queue Vol. 4, issue 4、2006 年 6 月 30 日（聞き手は Jim Gray。頁の表示で確認）
- URL: https://queue.acm.org/detail.cfm?id=1142065（直接の取得は 403）
- URL（原稿）: https://web.archive.org/web/20250105192458/https://queue.acm.org/detail.cfm?id=1142065（Internet Archive の保存版）
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 「© ACM, Inc」の表示のみ。引用は短く。 要旨（本 skill の言葉）: 開発が作ったものを運用へ壁越しに投げる従来の型をやめ、作ったチームが運用までを受け持つ。開発者が日々の運用と顧客に触れることで、サービスの質が上がったと語る（Amazon の自称）。 使いどころ（本 skill の整理）: 「作った人が運用する」の早い時期の公開の発言（2006 年）。DevOps の語より前にあることを年表で示す。Amazon の規模・社内の組織が前提で、一般化しない。 区分の根拠・範囲: 保存版の原文と一致。元サイトの現行の頁は 403 で未確認。

### S109 John Allspaw・Paul Hammond「10+ Deploys Per Day: Dev and Ops Cooperation at Flickr」（Velocity 2009 の講演概要）

> Operations and development are disciplines that historically have been limited to a predictable list of responsibilities and have suffered from a culture of finger-pointyness.

- 媒体・日付: O'Reilly Velocity 2009（San Jose）の講演頁。2009 年 6 月 23 日（火）13:00 の枠（頁の表示 "1:00pm Tuesday, 06/23/2009" で確認）
- URL: http://en.oreilly.com/velocity2009/public/schedule/detail/7641（元の頁は http。直接は取得していない）
- URL（原稿）: https://web.archive.org/web/20100110115647/http://en.oreilly.com/velocity2009/public/schedule/detail/7641（Internet Archive の保存版）
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 表示なし（著作権は各権利者。引用は短く）。 要旨（本 skill の言葉）: 開発と運用は、決まった責任の範囲に閉じ、互いを責め合う文化に苦しんできた。Flickr で両者の役割が混ざって良くなった理由と方法（一押しのデプロイ、アプリのログ、容量の把握、障害対応）を話す、という概要。概要の冒頭は Flickr の開発ブログの「1 週間で 18 人が 496 件の変更を 67 回デプロイ」の引用（Flickr の自称）。 使いどころ（本 skill の整理）: DevOps の起点として語られる講演の一次（概要）。「1 日 10 回以上のデプロイ」は数値の目標ではなく、協力の結果として語られた点を押さえる。 区分の根拠・範囲: 講演の概要文。スライド本体は取得できていない。

### S110 最初の devopsdays（ゲント、2009）

> The first devopsdays happened in Belgium - Ghent and was a great success.

- 媒体・日付: devopsdays の旧サイトの「Devopsdays Ghent 2009」の頁（頁に日付の表示なし。年は頁題の「2009」）。月日は未確認
- URL: https://legacy.devopsdays.org/events/2009-ghent/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 旧サイトは表示なし（引用は短く）。 要旨（本 skill の言葉）: 2009 年にベルギーのゲントで最初の devopsdays が開かれた。以後、各国に広がったことは、引用の範囲外で使わない。 使いどころ（本 skill の整理）: 年表の 2009 年。DevOps の語が会議の名前として広まった時点。開催の月日は書かない（未確認）。 区分の根拠・範囲: 主催側の頁の原文。年は頁題のみ。創設者の記述は使わない。

### S111 Benjamin Treynor Sloss「Introduction」（Site Reliability Engineering、Google）— SRE の成り立ちと DevOps との関係

> SRE is what happens when you ask a software engineer to design an operations team.

> The term "DevOps" emerged in industry in late 2008 and as of this writing (early 2016) is still in a state of flux.

> One could equivalently view SRE as a specific implementation of DevOps with some idiosyncratic extensions.

- 媒体・日付: Site Reliability Engineering（Beyer ほか編、O'Reilly）の序章。執筆者 Benjamin Treynor Sloss、編集 Betsy Beyer（頁の表示）。本文に「as of this writing (early 2016)」。刊行年は保存した原稿では未確認。同じ sre.google には全面改稿の第 2 版の案内があり、ここで取ったのは初版の公開版の本文
- URL: https://sre.google/sre-book/introduction/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁末の表示）。改変（翻訳を含む）不可。短い逐語だけにとどめ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: SRE は、ソフトウェアの技術者に運用チームを設計させた結果だと Treynor は書く。2003 年に Google に入り 7 人の「Production Team」を率いた。運用の仕事（チケット・当番・手作業）を全体で 50% までに抑える上限を置いた。DevOps の語は 2008 年後半に出て 2016 年初めの時点でも定まっていないとし、SRE は DevOps の一つの実装とも見られると書く。序章の前の sysadmin の型（負荷が増えると人を増やす、開発と運用を分ける）は、SRE が置き換えようとした前提として書かれている。 使いどころ（本 skill の整理）: 時代区分の「作った人が運用する」と「SRE の書籍化」。SRE と DevOps の関係を、対立でなく推進者自身の言い方で示す。Google の規模・採用（ソフトウェア技術者の採用基準）が前提で、そのまま他社に移せる型ではない（本 skill の整理）。 自称: Google の社内の成り立ちの記述で、その会社（と執筆者本人）の自称。

### S112 Google SRE の書籍の一覧（書誌のみ）

> （書誌のみ。本文は引用しない）

- 媒体・日付: sre.google の書籍の頁。『Site Reliability Engineering, 2nd Edition』（「completely rewritten edition」と表示。編者表示は Betsy Beyer, Chris Jones, Christof Leng, David Huska, Jennifer Petoff, Niall Richard Murphy）、『The Site Reliability Workbook』（編者表示は Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara, Stephen Thorne）、『Building Secure & Reliable Systems』が載る
- URL: https://sre.google/books/
- 取得日: 2026-11-20
- 検証区分: R
- 備考: ライセンス: 頁の表示を書誌として使うだけ。本文は引用しない。 要旨（本 skill の言葉）: 公式の書籍一覧に、第 2 版（completely rewritten edition の表示）と編者が載っている。頁は「AI が本番環境をどう変えているか」も扱うと紹介する。この台帳の SRE の書籍の章の項目は初版の文言で、第 2 版で同じ文言が残っているかは確かめていない。 使いどころ（本 skill の整理）: skill で SRE の書籍を指すとき、どの版の文言かを書く根拠。 区分の根拠・範囲: 書誌のみ。

### S113 Team Topologies の「platform team」

> Platform team: a grouping of other team types that provide a compelling internal product to accelerate delivery by Stream-aligned teams

- 媒体・日付: teamtopologies.com の Key Concepts の頁（日付の表示なし。頁の下部に「Copyright © 2021-2026 Team Topologies group of companies」）。書籍（Skelton・Pais）の初版の年は保存した原稿では未確認。出版社（IT Revolution）の頁で第 2 版の刊行日 2025 年 9 月 23 日を確認
- URL: https://teamtopologies.com/key-concepts
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 「All Rights Reserved」の表示。引用は短く。 要旨（本 skill の言葉）: platform team は、流れに沿ったチーム（stream-aligned team）の配信を速めるための、魅力のある社内向けの製品を出すチームの集まり。チームの型は 4 つ、関わり方は 3 つ（協働・X as a Service・促進）とする。 使いどころ（本 skill の整理）: プラットフォームエンジニアリングの時代区分の組織の前提。「基盤を社内の製品として出す」の出どころ。チームの型の分け方は architecture の持ち分と重なるので、運用側（基盤を製品として扱う）の論点だけ使う。 区分の根拠・範囲: 概念の定義の頁。書誌は R。

### S114 CNCF TAG App Delivery「CNCF Platforms White Paper」

> Inspired by the cross-functional cooperation promised by DevOps, platform engineering has begun to emerge in enterprises as an explicit form of that cooperation.

> Platform teams that release features and experiences without feedback or that rely on top-down mandates to achieve adoption are almost certain to find resistance and resentment from their users and miss a lot of the promised value.

- 媒体・日付: CNCF TAG App Delivery の white paper（PDF のファイル名は v1.0。発行の年月日は頁・PDF のどちらでも確認できていない。頁の下部は「© 2025 The CNCF Authors」）
- URL: https://tag-app-delivery.cncf.io/whitepapers/platforms/
- URL（原稿）: https://github.com/cncf/tag-app-delivery/raw/main/platforms-whitepaper/v1/assets/platforms-def-v1.0.pdf
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY 4.0（頁の表示 "Documentation Distributed under CC BY 4.0"）。 要旨（本 skill の言葉）: platform engineering は、DevOps が約束した部門横断の協力を明示的な形にしたものとして、企業の中に出てきた（CNCF の見方）。製品チームが基盤の責任を背負いすぎて認知負荷が増えたことが動機。課題として、基盤を製品として扱い利用者と一緒に作ること、最初の機能と相手のチームを選ぶこと、経営の支持を得ることを挙げ、利用者の声を聞かずに上からの命令で使わせる基盤は、反発を受けて価値を逃すと書く。 使いどころ（本 skill の整理）: プラットフォームエンジニアリングの時代区分と、その失敗の型（命令で使わせる基盤）。「DevOps から生まれた」は CNCF の位置づけとして書き、因果の事実として書かない。


## 批判と食い違い（推進側の留保・平均の指標への批判・運用の前提）

### S115 Benjamin Treynor Sloss「Introduction」（SRE 書籍 序章、100% を目標にしない・error budget には経営の後ろ盾が要る）

> 100% is the wrong reliability target for basically everything (pacemakers and anti-lock brakes being notable exceptions).

> the decision to stop releases for the remainder of the quarter once an error budget is depleted might not be embraced by a product development team unless mandated by their management.

- 媒体・日付: 『Site Reliability Engineering』初版の序章（執筆 Benjamin Treynor Sloss、編集 Betsy Beyer）、sre.google の公開版（頁表示 © 2017 Google, Inc.、O'Reilly Media 刊）
- URL: https://sre.google/sre-book/introduction/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: CC BY-NC-ND 4.0（頁の表示）。改変（翻訳を含む）不可。短い逐語のみ、訳を載せない。本文では要旨で使う。 要旨（本 skill の言葉）: 利用者と自社の間にある端末・家庭の回線・通信事業者などのほうがずっと不安定なので、99.999% と 100% の差は利用者に見えない。100% はほぼすべてにとって誤った目標である（ペースメーカーと ABS は例外）。目標を何 % にするかは技術の問いでなく製品の問いだと書く。error budget を使い切ったら四半期の残りのリリースを止める、という決めごとは、製品の開発側の経営が命じない限り受け入れられないかもしれない、とも書く。 使いどころ（本 skill の整理）: 「5 つの 9」を目標にしない根拠を推進側の原文で示す。error budget が機能しない条件（経営の合意が無い）を、推進側自身の注意として示す。外部からの批判ではない点を区別する。Embracing Risk 章の同じ趣旨の文は S003。 区分の根拠: 推進側自身の留保で、推進側の原文なので A。

### S116 Štěpán Davidovič「Incident Metrics in SRE: Critically Evaluating MTTR and Friends」

> these statistics are poorly suited for decision making or trend analysis in the context of production incidents

> The problem is not specific to the metric being an arithmetic mean; I've demonstrated the same problem with median and other metrics.

- 媒体・日付: O'Reilly の報告書（Google との協業）。初版 2021 年 3 月、初出 2021-03-19（PDF の書誌頁）。sre.google に紹介頁と PDF
- URL: https://sre.google/resources/practices-and-processes/incident-metrics-in-sre/
- URL（原稿）: https://sre.google/static/pdf/IncidentMeticsInSre.pdf
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 「Copyright © 2021 O'Reilly Media, Inc. All rights reserved.」（PDF の表示）。引用は短く。 要旨（本 skill の言葉）: モンテカルロ法の模擬と統計の分析で、MTTR・MTTM などの平均の指標は、本番の障害については改善の評価にも傾向の把握にも向かないと示した。平均でなく中央値でも同じで、原因は障害の件数が少なく長さのばらつきが大きいこと。障害の一生の中の狭い問い（検知までの時間など）に分けて測ること、指標が言いたいことを示せるかを試してから使うことを勧める。 使いどころ（本 skill の整理）: MTTR を目標・成果の指標にしている相談への根拠。「平均をやめて中央値にすれば良い」という反論への答え（同じ問題がある）。 区分の根拠・範囲: MTTR を使う慣行への批判。推進側〈Google〉の中から出た批判。

### S117 Courtney Nash（VOID）、InfoQ の聞き取り「Analyzing Incident Data across Organizations: Courtney Nash on the VOID」

> if an individual SRE or incident responder conducts a blameless postmortem and seeks to learn from their incidents, and folks higher up the chain want someone to pin it on, that will still define the culture in which incidents are evaluated.

> The biggest result in the VOID report we published in late 2021 is that MTTR (Mean Time to Remediate) isn't what you think it is .

> One possible shift is to talk about "contributing factors" instead of a root cause, which is a small language change that can facilitate a much bigger psychological/organizational change.

- 媒体・日付: InfoQ、2022 年 6 月 28 日（聞き手 Matt Campbell。頁の表示）。VOID（Verica Open Incident Database）の報告書そのものは取得できていない（thevoid.community の頁は JavaScript で描画され、本文を取れなかった）
- URL: https://www.infoq.com/articles/analyzing-incident-data/
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 「© 2006-2026 C4Media Inc」の表示のみ。引用は短く。 要旨（本 skill の言葉）: 個々の当番が責めない振り返りをしても、上の層が「誰のせいか」を求めれば、それが障害の評価の文化を決めてしまう。2021 年末の VOID の報告書の一番の結果は、MTTR が思われているものではないこと。障害の長さのデータは右に長く裾を引くので、平均はデータを代表しない。根本原因の代わりに「寄与した要因」と言い換えることを、小さな言葉の変更で大きな組織の変化を促すものとして挙げる。 使いどころ（本 skill の整理）: 責めない振り返りの形骸化（現場だけ責めない、上は犯人を探す）の根拠。MTTR 批判の、公開事例を集めたデータからの補強（S116 と並べる）。報告書の数値は取得していないので、本 skill では数値を引かない。 区分の根拠・範囲: Nash 本人の回答の部分だけ。InfoQ の編集の「Key Takeaways」と聞き手の文、Nash が引く Dekker・Kitchens・Allspaw の文は使わない。

### S118 Vanessa Huerta Granda「Making Sense out of Incident Metrics」（Learning from Incidents）

> Without providing any context, saying that an organization with a number of complex systems had 60 incidents that on average last 45 minutes doesn't tell us much about the org's stability or the systems' ability to recover.

> while metrics such as MTTR or incident count may not tell the whole story, having that number may be a starting point to understanding our systems.

- 媒体・日付: Learning from Incidents（learningfromincidents.io）のブログ、2021 年 5 月 28 日（頁の表示）
- URL: https://www.learningfromincidents.io/posts/looking-beyond-the-metrics（直接は接続できなかった）
- URL（原稿）: https://web.archive.org/web/20241210024154/https://www.learningfromincidents.io/posts/looking-beyond-the-metrics（Internet Archive の保存版）
- 取得日: 2026-11-20
- 検証区分: C
- 備考: ライセンス: 表示なし（著作権は各権利者。引用は短く）。 要旨（本 skill の言葉）: 文脈なしに「60 件、平均 45 分」と言っても安定性や回復の力は分からない。一方で、MTTR や件数は全体を語らないが、系を理解する入口にはなりうる。経営が好む数字を定期的に見て、障害の分析から得た文脈を添えて示す、という使い方を書く。 使いどころ（本 skill の整理）: MTTR 批判の行き過ぎへの留保（「捨てろ」ではなく「文脈なしに使うな」）。経営に数字を求められる相談者への現実的な落としどころ。LFI は「障害についての通念を問い直す共同体」と自己紹介している（冒頭頁）。 区分の根拠・範囲: 留保側。保存版の原文と一致。元サイトの現行の公開状況は未確認。

### S119 Martin Fowler「MicroservicePrerequisites」（bliki）— マイクロサービスの運用の前提

> In particular with microservices there are serious consequences for operations, who now have to handle an ecosystem of small services rather than a single, well-defined monolith.

> Consequently if you don't have certain baseline competencies, you shouldn't consider using the microservice style.

- 媒体・日付: martinfowler.com の bliki、2014 年 8 月 28 日（頁の表示）
- URL: https://martinfowler.com/bliki/MicroservicePrerequisites.html
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 「© Martin Fowler」の表示のみ。引用は短く。 要旨（本 skill の言葉）: マイクロサービスは運用に重い帰結がある。速い資源の用意（数時間でサーバーを立てる）、基本の監視（技術の異常と業務の異常）、速いデプロイ（数時間以内のパイプライン）、そして開発と運用の密な協力が無いなら、この方式を考えるべきでない。少数のサービスで始めて、運用の体力を育ててから数を増やせと書く。 使いどころ（本 skill の整理）: 分割の相談のうち運用側の論点（分ける前に運用の体力があるか）。分割の判断そのものは architecture の持ち分なので、本 skill では前提の点検だけに使う。


## 失敗の型（公開された事後検証。各社の自称）

### S120 AWS「Summary of the Amazon S3 Service Disruption in the Northern Virginia (US-EAST-1) Region」

> Unfortunately, one of the inputs to the command was entered incorrectly and a larger set of servers was removed than intended.

> in this instance, the tool used allowed too much capacity to be removed too quickly.

> we were unable to update the individual services' status on the AWS Service Health Dashboard (SHD) because of a dependency the SHD administration console has on Amazon S3.

- 媒体・日付: aws.amazon.com/message。2017 年 2 月 28 日の事象の要約（頁に公開日の表示は無い）
- URL: https://aws.amazon.com/message/41926/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 「© 2026, Amazon Web Services, Inc」の表示のみ。引用は短く。 要旨（本 skill の言葉）: 手順書どおりの容量を減らす操作で、入力の誤りにより想定より多くのサーバーを外した。道具が多すぎる量を速すぎる速さで外せたことを認め、減らす速さを落とし、最低限の容量を割らない安全装置を足したと書く。障害の間、状態の公開の頁の管理画面が S3 に依存していたため、更新できなかった。 使いどころ（本 skill の整理）: 失敗の型「運用の道具に安全の下限が無い（人の入力ひとつで一括に効く）」と「障害を知らせる仕組みが、壊れた物に依存している」の根拠。個別の事故の内容は自称で、制作例の題材にはしない。 区分の根拠・範囲: 会社の自称。

### S121 John Graham-Cumming（Cloudflare）「Details of the Cloudflare outage on July 2, 2019」

> The SOP for a rule change specifically allows it to be pushed globally.

> But, by design, the WAF doesn't use this process because of the need to respond rapidly to threats.

- 媒体・日付: Cloudflare blog、2019 年 7 月 12 日公開（頁のメタデータ）。事象は 2019 年 7 月 2 日
- URL: https://blog.cloudflare.com/details-of-the-cloudflare-outage-on-july-2-2019/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 「© 2026 Cloudflare, Inc」の表示のみ。引用は短く。 要旨（本 skill の言葉）: ソフトウェアのリリースは、社内の拠点→少数の顧客→多数→全体と段階を踏むが、WAF の規則の変更は脅威に素早く対応するため、手順書の上で全体へ一度に出せることになっていた。その変更に入っていた正規表現が CPU を使い尽くし、世界中で処理が止まった（会社の説明）。 使いどころ（本 skill の整理）: 失敗の型「速さのために段階公開を迂回できる経路（設定・規則の変更）があり、そこから全体に一括で効く」の根拠。脆弱性・攻撃への対処の中身は security の持ち分で扱わない。 区分の根拠・範囲: 会社の自称。

### S122 Santosh Janardhan（Meta）「More details about the October 4 outage」

> Our systems are designed to audit commands like these to prevent mistakes like this, but a bug in that audit tool prevented it from properly stopping the command.

> the total loss of DNS broke many of the internal tools we'd normally use to investigate and resolve outages like this.

- 媒体・日付: Engineering at Meta、2021 年 10 月 5 日公開（頁のメタデータ）。事象は 2021 年 10 月 4 日
- URL: https://engineering.fb.com/2021/10/05/networking-traffic/outage-details/
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 「© 2026 Meta」の表示のみ。引用は短く。 要旨（本 skill の言葉）: 基幹網の容量を調べる定例の保守の命令が、意図せず基幹網の接続をすべて落とした。命令を止めるはずの監査の道具に不具合があった。DNS が失われたことで、ふだん障害の調査と復旧に使う社内の道具の多くも使えなくなり、通常の経路も帯域外の経路も落ちたので、人がデータセンターに出向いた（会社の説明）。 使いどころ（本 skill の整理）: 失敗の型「復旧の道具が、壊れた物に依存している（依存の循環）」と「安全装置そのものの故障」。S120 の状態の公開の頁の依存と並べて、型として示す。 区分の根拠・範囲: 会社の自称。

### S123 Google Cloud「Multiple GCP products are experiencing Service issues」の Incident Report（2025 年 6 月 12 日の事象）

> The issue with this change was that it did not have appropriate error handling nor was it feature flag protected.

> Given the global nature of quota management, this metadata was replicated globally within seconds.

> Service Control did not have the appropriate randomized exponential backoff implemented to avoid this.

- 媒体・日付: Google Cloud Service Health の事象の頁の Incident Report。事象は 2025 年 6 月 12 日（頁の表示）。報告の公開日は頁から確定していない
- URL: https://status.cloud.google.com/incidents/ow5i3PPK96RduMcb1SsW
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 表示を確認していない（著作権は Google。引用は短く）。 要旨（本 skill の言葉）: 新しい機能のコードは地域ごとに順に出したが、失敗する経路は特定の方針の変更が入るまで通らず、段階公開の間に試されなかった。その変更は機能のフラグで守られておらず、方針のデータは全世界へ数秒で複製されたので、全地域で同時に落ちた。復旧の際、大きな地域では再起動したタスクが依存先へ一斉に押し寄せ、ランダムな指数的待機が無かったので、復旧が長引いた。報告は、全世界へ複製するデータも段階的に広げて確かめること、重要な変更を既定で無効のフラグで守ることを再発防止に挙げる。 使いどころ（本 skill の整理）: 失敗の型「コードは段階公開しても、設定・データが全体へ一括で広がる」と「復旧時の一斉の再試行」。段階公開は、コードだけでなく設定とデータにも要ることの根拠。 区分の根拠・範囲: 会社の自称。


## 国内の資料（IPA・デジタル庁）

### S125 IPA「情報システム基盤の復旧に関する対策の調査 報告書」（2012）

> 事業継続に最も影響の大きいシステムの目標復旧時間（RTO）、目標復旧レベル（RLO）、目標復旧時点（RPO）を策定している企業は 2 割程度にとどまっており

- 媒体・日付: IPA 技術本部ソフトウェア・エンジニアリング・センター、2012 年 7 月（PDF の表紙）
- URL: https://www.ipa.go.jp/files/000004636.pdf → https://www.ipa.go.jp/archive/files/000004636.pdf へリダイレクト
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: 未確認・短い引用に留める。 要旨（本 skill の言葉）: 東日本大震災の前後の企業の復旧対策を調べた報告書。調査の時点では、最も重要なシステムについて RTO・RLO・RPO を決めている企業は 2 割程度だった。報告書は経済産業省の「IT サービス継続ガイドライン」を引いて復旧目標の設定を説明するが、そのガイドラインの原文はこの台帳の調査で確かめていない（孫引きになるので定義の出典にしない。定義は S090 を使う）。2012 年の調査で、現在の割合ではない。 使いどころ（本 skill の整理）: 国内でも復旧目標が決まっていないことが多い、という前提の材料（時点を断る）。RLO（目標復旧レベル）という国内で使われる語の紹介。 区分の根拠・範囲: 引用は文の途中まで。

### S126 IPA「情報処理システム高信頼化教訓活用ガイドブック（ITサービス編）」

> システム障害の情報は、サイバー攻撃に代表されるセキュリティ事故の情報に比べて、世の中で共有されているとは言い難い

- 媒体・日付: IPA、PDF に「© Information-Technology Promotion Agency, Japan. 2016 All Rights Reserved.」。紹介頁（アーカイブ）は、重要インフラ分野のシステム障害への対策の事業を 2013〜2019 年度に実施したと書く
- URL: https://www.ipa.go.jp/files/000051041.pdf → https://www.ipa.go.jp/archive/files/000051041.pdf
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: All Rights Reserved の表示。短い引用に留める。 要旨（本 skill の言葉）: システム障害の情報は、障害を起こした事業者の不名誉と受け取られ、組織の中ですら共有されないことがある。IPA は障害事例から教訓を作って共有する教訓集と、自社で教訓を作る・使うためのガイドブックを公開した。他社の障害を「対岸の火事」でなく「他山の石」にする、という趣旨。 使いどころ（本 skill の整理）: 国内で事後検証を社内外に共有する文化が薄い、という前提と、共有の様式の材料。 区分の根拠・範囲: 引用の直後に脚注番号が入るため、そこで切った。

### S127 デジタル庁 DS-310「政府情報システムにおけるクラウドサービスの適切な利用に係る基本方針」（監視対象の見直し）

> 従来のオンプレミス環境では、サーバーやネットワークなどのインフラの状態を監視することが重要視されていたが、クラウド環境では、インフラの監視よりも、アプリケーションやサービスが正常に動作しているかを監視することが重要になる。

- 媒体・日付: デジタル庁、標準ガイドライン附属文書。策定日または最終改定日 2025-05-27（本文 PDF は 2025-06-19 更新）。位置づけ Normative
- URL: https://www.digital.go.jp/resources/standard_guidelines（一覧頁）
- URL（原稿）: https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/e2a06143-ed29-4f1d-9c31-0f06fca67afc/a612d406/20250619_resources_standard_guidelines_guideline_08.pdf
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: デジタル庁の著作権ポリシー頁に「特記されていない限りデジタル庁に帰属し、権利表記の記載がない限り「公共データ利用規約（第1.0版）」（PDL1.0）が適用」。出典の記載が条件。 要旨（本 skill の言葉）: 3.7「システム運用について」の 11 項目の一つ。クラウドでは、基盤の監視よりも、アプリとサービスが正常に動いているかの監視を重く見る。同じ節は、月次の運用報告書をダッシュボードでの確認に置き換えることも求める。用語の節は「定量的計測」を、監視・可観測性・可視化の 3 つで監視業務をサービスの改善へ高める考え方と定義する。政府情報システム向けの文書。 使いどころ（本 skill の整理）: S012・S011 の「症状で見る」と同じ方向を、国内の公的な文書で示すとき。

### S128 デジタル庁 DS-310（運用作業の自動化と費用の確認）

> 人手に頼っていた運用作業を自動化し、運用コストの削減とヒューマンエラーの防止を図る必要がある

> 無駄なコストが発生していないか、利用料金を定期的に確認するようにする必要がある。

- 媒体・日付: デジタル庁、標準ガイドライン附属文書 DS-310。策定日または最終改定日 2025-05-27（本文 PDF は 2025-06-19 更新）。位置づけ Normative。3.7 の 5) と 1)（S127 と同じ文書）
- URL: https://www.digital.go.jp/resources/standard_guidelines（一覧頁）
- URL（原稿）: https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/e2a06143-ed29-4f1d-9c31-0f06fca67afc/a612d406/20250619_resources_standard_guidelines_guideline_08.pdf
- 取得日: 2026-11-20
- 検証区分: A
- 備考: ライセンス: PDL1.0。 要旨（本 skill の言葉）: バックアップ・状態監視・警報の初期対応などは自動化し、自動でできる単純作業を人件費で行わない。利用料は定期的に確認し、使っていない資源の課金を止め、ピークに合わせた大きな資源を平常時に使わない（自動の増減を使う）。IaC で環境の変更を手作業から外す。運用作業は定期的に見直して手作業を減らす。 使いどころ（本 skill の整理）: 国内の公的な文書での、運用の自動化と費用の運用（S072〜S075 の FinOps と同じ方向）の根拠。 区分の根拠・範囲: 1 つ目の引用は文の途中まで。

## 未検証・調査の限界

未検証（U）の項目は番号を振らず、事実・引用として使わない。次の表は、確かめられなかったもの・取得できなかったものと、skill での扱いである。

| 対象 | 状況 | 扱い |
|------|------|------|
| Werner Vogels「Everything fails all the time」の逐語 | 本人のブログ（S106）には無い。2021 年の CACM の対談・2008 年の報道で使われた旨が検索で見えたが、頁は 403 で、検索結果の要約は原稿にならない | 使わない。S106 の 2016 年の文を使う |
| 『Site Reliability Engineering』第 2 版の刊行年・ISBN・本文 | 書籍の頁（S112）に「completely rewritten edition」と編者だけが出ている | 第 2 版の文言は引かない。SRE 書籍の項目は初版の文言と明記する |
| SRE 書籍の章頭の題辞（Carraway・Geisser・Sandler・Oshineye など）と「Hope is not a strategy.」 | 題辞は章の著者の言葉ではない。「Hope is not a strategy.」は、序章の題辞が「Traditional SRE saying」、第 3 章が「Google SRE's unofficial motto」と書く（照合済み）が、言い出した人は不明 | 引かない。章の著者・特定の人の言葉として流通する場合も原文扱いしない |
| 「3 本柱（three pillars）」の命名者・初出 | Bourgon の 2017 年の記事（S029）に pillar の語は 0 件。誰が最初に言ったかは未確認。Sridharan の記事（S030）が触れる Twitter の可観測性チームの「four pillars」の元記事、Sigelman の KubeCon 2018 の講演「Three Pillars, Zero Answers」の資料も未取得（検索の要約のみ） | 命名者・初出を書かない |
| Etsy Code as Craft の Allspaw の記事の公式頁 | 403。S048・S049 は Internet Archive の保存版で照合した | 公式頁が取れたら URL（原稿）を見直す |
| how.complexsystems.fail の運営者 | 頁から確かめられなかった | HTML 版の文言は引かない（S045・S046） |
| Sidney Dekker 本人の文と『Just Culture』の版・刊行年 | Routledge の頁と思われる URL は 404。本人のサイトは書名と事業の紹介だけ。S051・S117 の記事が引く Dekker の文は孫引き | 書誌は S052 だけ。Dekker の文は引かない |
| Cindy Sridharan『Distributed Systems Observability』（O'Reilly） | 書籍は取得していない | S030 のブログ記事だけを使う |
| DORA の各年の報告書（2014〜2025）の本文と水準の帯 | 未取得。S096 は DORA 自身による経緯の説明 | 年ごとの変化は「DORA の頁によれば」と書く。水準の帯（elite など）の数値は使わない |
| DORA の指標の年についての Wikipedia の記述 | Wikipedia「DevOps」は、2016 年の State of DevOps の報告書で指標が公表され、最初の報告書は 2012 年（Puppet Labs）と書く（同頁に一次資料の要求の注あり）。dora.dev の記述と合わない | 使わない。年表には dora.dev の記述（S096）だけを使う |
| Brendan Gregg の ACM Queue の記事「Thinking Methodically about Performance」（2012） | 本人の頁の更新欄の記述のみ。ACM の頁は未取得 | 書誌は「本人の頁によれば」と書く（S019） |
| Kief Morris の O'Reilly の書籍頁と「Configuration drift」の記事（2012 年頃とされる） | 書籍頁は 403（版の表示は S080 の抜粋 PDF と S082 の本人の頁で代えた）。kief.com の記事の URL は 404。DZone の転載は取得していない | 記事は引かない |
| Goodhart の法則の原典 | Wikipedia 経由の孫引き（1975 年の Goodhart の論文の文と、1997 年に Strathern が引いた言い方）。原典は未取得 | 名前として触れるだけにし、文言は引かない。指標が目標になる問題は S095 |
| VOID の報告書（2021・2022）の本文と数値 | thevoid.community は JavaScript で描画され、本文を取得できなかった。数値は二次の記事の要約でしか見ていない | Nash 本人の回答（S117）だけを使い、数値は引かない |
| Alex Hidalgo「Throw Away Your Nines」（P99 CONF 2022） | 紹介記事は 403。講演の資料も未取得 | 使わない |
| 宣言的な IaC への外部からの批判 | 本人の原文で、利害を明示できる一次の批判は見つけられなかった（製品の開発元の記事や個人の不満の記事のみ） | 推進側の限界の記述（S083〜S087）にとどめる |
| 「5 つの 9」への外部からの批判 | 推進側（Google）自身の留保は取れたが、外部の批判の一次資料は取れていない | 外部の批判として書かない（S003・S007・S008・S115 は推進側の留保） |
| Incident Command System が 1968 年に消防から始まったという記述 | ワークブックの章（S035）の中の記述で、一次で確かめていない | 年と起源を書かない |
| 責めない文化が医療・航空から来たという記述 | SRE 書籍の章（S041）の中の記述で、一次で確かめていない | 起源として書かない |
| Rob Ewaschuk の文書の日付 | 文書内に日付が無い。2014 年半ばの Hacker News への言及があるだけ | 年は書かない（S011） |
| NISC（現在は cyber.go.jp）の「政府機関等における情報システム運用継続計画ガイドライン」 | 旧 URL はトップ頁へ転送され、本体の PDF に届かなかった | 国内の RTO の定義の公的な一次は未取得。定義は S090 |
| 中小企業庁「中小企業 BCP 策定運用指針」 | 取得が 403 で拒否された | 使わない |
| 経済産業省「IT サービス継続ガイドライン」 | S125 の報告書が引く形でしか確かめていない（孫引き） | 定義の出典にしない |
| IPA「情報処理システム高信頼化教訓集（ITサービス編）」本編 | 紹介頁と活用ガイドブック（S126）だけを読んだ。教訓の個々の内容は未読 | 教訓の内容は使わない。実在の障害事例を例の題材にしない |
| Little の法則の原論文（John D. C. Little, "A Proof for the Queuing Formula: L = λW", Operations Research, 1961 とされる） | 論文の頁は取得していない。著者・誌名・年は調査の記述で、一次で確かめていない | 教科書的な事実として要旨だけを使い（S071、R）、書誌を引用の根拠にしない |
| AWS Builders' Library の著者の姓 | 頁の表示名（Marc・David・Colm・Mike）だけ。記事は builder.aws.com へ移転済み | 姓を記憶で補わない（S058・S063・S066〜S069） |
| AWS Well-Architected の柱の白書の頁と、統合後の同名の BP 頁 | 旧白書の頁は「historical reference only and will be deprecated」。統合後の同名の BP 頁は 404。コスト・運用の柱の BP 頁は引用していない | S091・S092 は廃止予定の頁と断る。移転先が取れたら取り直す |
| 年の未確認 | Team Topologies 初版、CNCF Platforms white paper の発行年、devopsdays ゲントの月日、SRE 書籍の刊行年（本文は「early 2016」の執筆とだけ）、Cook の文書の初出、Google Cloud の障害の報告（S123）の公開日 | 年を書かない |
| ライセンスの未確認 | Atlassian・AWS・martinfowler.com・principlesofchaos.org・IPA・Terraform の文書・個人のブログなど、著作権表示はあるが再利用の条件を確かめられないもの | 短い引用と要旨にとどめる |

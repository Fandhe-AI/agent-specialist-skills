# designer-admin 出典台帳

`designer-admin` の `SKILL.md`・`examples/`・`references/` が根拠にする出典の台帳。海外のデザインシステム・国内・実務と歴史・OSS とライブラリ・補充・国内の実務記事・作り方の進め方の各調査から使った出典を、主題ごとに並べて S001 から連番にした。引用原文・発言者や媒体・日付・URL・取得日・検証区分を記す。台帳は通読せず、番号で検索して該当の項目だけ読む。

全 320 件。逐語の引用を持つ項目が 287 件、「引用ではない参照」（逐語の引用を載せない要旨のみの項目と、不在確認の項目）が 33 件（S250 から始まる 32 件と、末尾の S320 の 1 件）。同じ URL で引用が重なった項目は 1 件にまとめた。

## 主題別の番号

| 主題 | 件数 | 番号 |
|------|------|------|
| 表と一覧 | 33 | 先頭 S001・末尾 S033 |
| 詳細画面 | 14 | 先頭 S034・末尾 S047 |
| 状態・色 | 18 | 先頭 S048・末尾 S065 |
| 表の中の図・比較・時間 | 27 | 先頭 S066・末尾 S092 |
| 空・エラー・読み込み | 15 | 先頭 S093・末尾 S107 |
| 絞り込み・一括操作 | 27 | 先頭 S108・末尾 S134 |
| 密度・熟練者 | 22 | 先頭 S135・末尾 S156 |
| 文言・国内の表記 | 3 | 先頭 S157・末尾 S159 |
| ダッシュボードと指標 | 12 | 先頭 S160・末尾 S171 |
| 歴史 | 22 | 先頭 S172・末尾 S193 |
| OSS・ライブラリの既定値 | 55 | 先頭 S194・末尾 S248 |
| 批判 | 1 | 先頭 S249・末尾 S249 |
| 引用ではない参照（事実の根拠） | 32 | 先頭 S250・末尾 S281 |
| 国内の実務記事・画面デザインの進め方 | 26 | 先頭 S282・末尾 S307 |
| 作り方の進め方（方向性を言葉で決める・点検・描画確認） | 12 | 先頭 S308・末尾 S319 |
| 引用ではない参照（作り方の進め方） | 1 | 先頭 S320・末尾 S320 |

「引用ではない参照（事実の根拠）」は、表と一覧から OSS・ライブラリまでの主題にまたがる項目を 1 つの節にまとめたもの。主題の分けは、項目の題・備考・引用の語から付けた。主題が複数にまたがる項目は、近い主題に入れてある。国内の実務記事と作り方の進め方は、調査の単位でまとめた。

## 凡例

- 検証区分
  - A: 原典・公式ページ・リポジトリの原稿（Markdown・HTML・ソース・PDF）を取得し、引用文または照合語が逐語で含まれることを機械的に照合した（HTML・Markdown の記法除去、空白の正規化、全角半角は NFKC、PDF は pdftotext を通した後の部分文字列）。口頭発言を媒体が文字にしたものは、その書き起こしの精度に依存する
  - A-不在: 取得した範囲を grep し、該当が 0 件であることを確認した。範囲外までは主張しない（範囲は S281 に書いた）
  - B: 第三者の書き起こし、または他媒体経由の引用（原典との照合なし）
  - C: 批判・論評側、または利害のある当事者の主張。引用が逐語であることのみを確認し、主張の正しさは確認していない
  - R: 記者・機関・第三者の地の文、または利用条件で逐語引用できない原稿の要旨。発言者本人の発言として引用しない。研究結果の根拠に R を使うときは、原論文は取得していないことを備考に明記する
  - U: 未検証（末尾の節に集める）。事実・引用として使わない
- 数値（px・件数・秒・比率）は、区分 A で原文を確認できたものだけを「出典あり」とする。備考に「目安」とあるものは、そのシステムや会社の目安で、根拠の説明が原文に無い
- 引用文は原文を改変していない。日本語の訳・要旨は本 skill の言葉であり、発言者本人の発言ではない
- 項目の「URL」は利用者が開ける文書の URL、「URL（原稿）」は照合に使った固定の原稿（コミット固定の raw、Wayback の保存コピーなど）。文書サイトの多くは JavaScript 描画で、サイト本文との自動照合は一部しか通らず、原稿で照合した。引用文は、URL（原稿）に対して curl と grep -F で第三者も再照合できる
- 取得日は、新番号の S307 までが 2026-11-16（出典ごとに最後に本文を確認した日）、S308 以降が 2026-11-15（作り方の進め方の調査で本文を取得した日。のちの 2026-11-16 の再照合は取得日に数えていない）
- 項目の「使いどころ」は運用上の追加項目で、その出典を回答のどの場面で使うかの目安。出典に書いてあることではない
- 他の skill の台帳の番号に触れる箇所は、skill 名を添えて「designer-dataviz の台帳の S41」と書く。この台帳の S 番号と混同しないため。「移し替え元」と書いた項目は、他の skill の台帳から移したもので、元の備考を引き継いでいる

## 帰属上の注意

- 各デザインシステムの勧めは、そのシステムの製品（AWS コンソール、IBM Cloud、Red Hat、Shopify 管理画面、GitHub、GitLab、政府サービスなど）の文脈の規則。日本の業務システムや他製品へそのまま移せるとは原文は述べていない
- SmartHR Design System と Shopify の Polaris は、利用条件が本文の再配布・転載・派生物の配布を認めない（または LICENSE が無い）ため、逐語引用せず要旨のみを「引用ではない参照」に置いた。短い照合語だけで照合した
- Cloudscape（AWS）の文書本文は、ソースコードの Apache-2.0 とは別に明示ライセンスが見つからず、© AWS 扱いと読むのが安全。短い逐語引用に限り、段落単位の転載・翻訳をしない
- 「7±2」「余白で理解が約 20% 向上」（S161・S163）は、原稿が根拠を示さない、または第三者調査として挙げるだけ。事実として使わない（末尾の「未検証・伝聞」）
- 要旨・訳・「備考」の整理は本 skill の言葉で、出典に書いてあることと分けて書く。「目安」「推測」「整理」と書いた箇所は出典の事実ではない

出典ごとの個別の条件は、次のとおり。

**海外のデザインシステム・補充**

- Polaris は LICENSE の制限のため逐語引用しない（S250・S251・S252・S258・S266・S272 は要旨のみ）
- 他の skill の台帳から移した項目は、元の備考をそのまま引き継ぐ。NN/g（S063）の実験は「一覧内の印を探す速さ」で、状態の理解度や PC の業務画面の実験ではない
- Tufte の項目（S076・S077）は edwardtufte.com が curl に 403（Cloudflare）を返すため、Wayback Machine の保存コピー（20261031125214 と 20261029174641）で照合した。「URL」は原 URL（curl には 403 で、存在は未確認）で、照合に使った保存コピーを「URL（原稿）」に書いた

**国内**

- SmartHR Design System: リポジトリ kufu/smarthr-design-system に LICENSE ファイルは無い。文書サイトの利用規約は「提供コンテンツ」の再配布・他サイトへの掲載などを控えるよう求める。本文は転載せず、要旨と照合語だけを置いた。S259 の OOUI（オブジェクト指向 UI）の用語は同文書の用語で、SmartHR 固有の運用を一般則にしない
- デジタル庁デザインシステムβ版（S020・S021・S056・S116・S138・S157）: 「利用上の注意事項」が出典の記載を求めている。編集・加工はしていない。β 版の記述で、更新で変わる（各項目に更新日を書いた）
- freee Vibes（S099・S117・S118・S119・S120）: Apache License 2.0。最新のコミットは 2024-01-19（`git log` で確認）。freee の現在の製品画面の方針とは限らない
- ITmedia: 署名記者の記事で、S022・S023・S024・S039・S100・S121・S122・S123・S124・S125 の解説はベイジ（B2B SaaS・業務システムの UI/UX の制作会社）の知見。記事内の NG 例・OK 例は架空の画面。公開日は記事のページに印字された日付（ボタン回の URL は 04/19 だが印字は 2022-04-21）。S158 の発言者は入力補正ライブラリを売る会社の社員で、利益相反がある（区分 C）
- S025・S026・S027・S040・S126・S127・S128・S139: 事業会社・制作会社のデザイナーの記事（S026・S027 は個人の実装メモで、デザイナーの発言ではない）。各社の自社プロダクトでの経験で、他の製品に一般化しない
- freee の登壇資料（S140・S141）: 発表者は freee のプロダクトデザイナーとして会計事務所向けの記帳画面を担当した人（登壇時はプロダクトマネージャー）。資料自体が「N＝1 の話として聞いてください」と前置きしている。資料内の利用者のコメントと書籍の引用は発表者本人の発言ではなく、この台帳では引用していない。PDF の文字抽出は康熙部首（⼊ ⼒ など）を含むため、台帳には通常の漢字で書き、照合は NFKC で揃えている
- 「高密度を熟練者が好む」「日本の業務画面は情報量が多いほうが好まれる」といった一般化は、この台帳の出典では直接裏づけられていない。裏づけとして使えるのは、freee の事例（S140・S141。N=1）、SmartHR のフルスクリーンレイアウトの位置づけ（S273）、デジタル庁の Dense（S138）の範囲である

**実務・歴史**

- NN/g の記事は、著者名（Page Laubheimer・Kate Kaplan ほか）と記事の日付がページに書かれている。ページ表示の日付が更新日の場合がある（S249・S129 は「ページ表示」と記した）
- S149 の Tufte の言葉は Ström-Awn の記事経由（B）。原典と照合していない。Tufte と Few は designer-dataviz の台帳にもあり、ここでは表・密度・ダッシュボードの批判に効く部分だけを拾った（深掘りしない）
- Bloomberg 社のページは自動取得が 403 で拒否された。拒否の回避はしていない。例外として、同社 UX ブログ 1 本（S189・S190・S191）は 2018-03-11 の Wayback Machine の保存コピーを取得して照合した（後日の再照合は Wayback が 429 を返すことがあり、時間をおく）。それ以外の設計意図は Core77 経由の再引用（S032・S033・S156）と Wikipedia の年号（S181）だけ
- S033 は UX Magazine の記事からのブロック引用（区分 B）、S156 は Core77 記者自身の論評（区分 C）。S032 は Portfolio 誌の記事から Core77 が引いた発言の再引用で、S033・S156 は推測であり、事実として使わない
- S183 は記者の地の文であり、SAP 側の主張ではない。年号（2013-05-15）の根拠に使う
- Pencil & Paper（S028・S029・S030・S130・S146）は日付がページから取れなかった。デザイン会社の実務知であり、研究ではない
- Few の白書（S168）は ProClarity の著作権表示がある。短い引用だけを載せ、13 の落とし穴は要旨にした
- Hilton（S151）のサイトは CC BY-NC-SA 4.0。短い引用にとどめ、本文の転載・翻訳はしない
- Wikipedia（S177・S178・S179・S180・S181・S182・S186・S192・S193）は CC BY-SA 4.0 の地の文で、年号の根拠に限る。主張の理由には使わない
- Ant Design（S187・S188）は MIT、Carbon の文書は Apache-2.0 のリポジトリの原稿を、コミットで固定して照合した
- Superhuman（S154・S155）と Linear（S152・S153）は自社製品の記事で、宣伝の性格を含む

**OSS・ライブラリ**

- 版は「各リポジトリの既定ブランチの先頭コミット（取得日時点）」で固定している。リリースタグではない。API の既定値は版で変わる
- 引用はコード 1 行か文書 1 文程度にとどめた。見た目・コード・スクリーンショットを skill へ写す前提にしない。拾うのは技法・判断・既定値の傾向だけ
- ライセンスは各項に書く。MUI X は Data Grid の MIT 部分だけを見ている。Pro・Premium は商用ライセンスで、本文は引用していない
- AI エージェント向けの skill・プロンプトは公開リポジトリのものだけ。流出したシステムプロンプトは使っていない

**国内の実務記事**

- 区分 A は、記事の見解を記事の見解として記録したもので、主張の正しさは確認していない。区分 C は企業のコラム・個人の意見・経験則の記事に付けた（逐語であることのみ確認）
- 1 件の引用は 1〜3 文に保った。記事の著作権は著者・媒体にある。図（画面のスクリーンショット）は引用していない
- 反応数（いいね）は Qiita と Zenn の公開 API の値（2026-11-16 時点）。内容の正しさの証拠ではない
- S282・S283・S284・S285・S286・S287・S288・S289・S290・S291・S292・S293 は同じ 1 本の記事（Qiita、@mskmiki、INTEC Advent Calendar 2021 の 18 日目）を論点ごとに分けた。いいね 8,462（2026-11-16 時点）。同じ著者の公開記事は Qiita の API で確認できた範囲でこの 1 本のみ（続編・関連記事は見つからなかった）。記事は架空の人物・画面（フィクション）を使う初級者向けの説明で、著者自身が「最適解と言っているものではありません」と書いている（S293）
- S304 は Refactoring UI の日本語抄訳（原典の著者の許可を得たと本文にある）。逐語の原典ではない（区分 B）
- S307 は同じ記事が引用する外部の調査（Nielsen Norman Group・Forrester Research の 2025 年のもの）を確認できていない。引用せず、「未検証・伝聞」の節に置いた
- 「熟練者は表の密度を好む」「日本の業務画面は密度が高いほうが良い」という一般化は、この調査の出典では実測で裏づけられていない。S301・S302（頻度と習熟度で使い分ける。見解）、S307（30 行の目安。経験則）、S306（生産性が基準。個人の見解）が、その主張の出どころ。S140・S141（freee の事例。N=1）と合わせて読む
- S298 の「カードは比較に不向き」は 2019 年のスマートフォンアプリ向けの記事。S286 の「カードを選ぶ」は架空のタブレット画面での結論。どちらも業務の管理画面の一般則ではない

**作り方の進め方**

- この節は、デザイン会社・デザイン組織が公開している「進め方・考え方・重要な点」の出典で、designer-admin 以外の designer-* の回答スタイル（進め方）の材料としても集めたもの。管理画面に固有の出典ではない
- 「自称」: 組織・企業・個人が自分たちの進め方を自分で述べたもの。成果や有効性の第三者による検証ではない。備考に「自称」と書いた
- 引用文は原文を改変していない。原文のアポストロフィ・引用符・ダッシュの表記もそのまま残した（日本語の引用は原文の表記のまま）
- 取得日は 2026-11-15（その調査で本文を取得した日）
- 並びは、元の調査の分け方の順: 進め方の枠組みを公開している組織（S308・S309・S310・S311・S312・S313）、公共サービスのデザイン（S314・S315）、デザイン会社・スタジオ（S316）、国内の組織・実務者（S317）、ディテール・操作感・表現の実務者（S318）、批判・論評（S319）。SmartHR Design System の 1 件は引用ではない参照（S320）に置いた
- Natasha Jen の批判の一次文は、It's Nice That に本人が寄せた文章（S319）。講演そのものの書き起こしは取得できていない
- 組織・企業の記事は、基本的に自社の進め方の自己説明（自称）である。成果の検証ではなく、「その組織が何を重視すると言っているか」の根拠として使う
- 取得経路: NN/g・GOV.UK・Basecamp・Vercel などは `curl` で直接取得した。Design Observer（Bierut。S316）は直接取得が 403 のため、Wayback Machine の保存コピーで照合した（「URL（原稿）」の欄）。保存時点の改変の可能性は排除していない
- ライセンス: Design Council の資料は CC BY 4.0（ページに明記）。その他は短い引用にとどめ、全文の転載はしない

## 引用の台帳

## 表と一覧

### S001 Cloudscape（AWS） components/table

> Use the first table column for unique identifiers of the items that are represented in the table (for example: name, id, and ARN).

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/components/table/
- URL（原稿）: https://cloudscape.design/components/table/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 表の第 1 列は一意の識別子（名前・ID）にし、詳細ページへの入口にも使う。続く規則で第 2 列は状態（関連するとき）とされる。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 表,列

### S002 Cloudscape（AWS） components/table

> Right-align quantitative numeric data within table cells to make them easier to compare and contrast (for example: amounts, measures, and percentages). Format this data so that all are aligned and show the same number of decimal places.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/components/table/
- URL（原稿）: https://cloudscape.design/components/table/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 量を表す数値は右揃えで小数桁をそろえる。日付・郵便番号・電話番号などの『分類的な数字』は左揃え（同ページの別規則）。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 表,数値,桁揃え

### S003 Cloudscape（AWS） components/table

> Left-align categorical numeric data within table cells (for example: dates, zip and postal codes, and phone numbers).

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/components/table/
- URL（原稿）: https://cloudscape.design/components/table/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数字でも合計や比較をしないもの（日付・郵便番号・電話番号）は左揃え。USWDS の monospace の例外規定と同じ考え方。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 表,数値,桁揃え

### S004 Cloudscape（AWS） components/table

> Don't use sticky header for continuous scrolling. We strongly recommend using pagination to give users easy and consistent access to all items without scroll.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/components/table/
- URL（原稿）: https://cloudscape.design/components/table/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 連続スクロールよりページ送りを強く推奨。ページ送り対無限スクロールの『ページ送り側』の根拠。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 表,ページ送り

### S005 Cloudscape（AWS） components/table

> Don't provide sticky column(s) where these occupy more than 70% of the available table content area, as this can hinder the readability of the scrollable content area.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/components/table/
- URL（原稿）: https://cloudscape.design/components/table/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 固定列が表の表示領域の 70% を超えないようにする（数値あり）。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 表,数値,列

### S006 Cloudscape（AWS） components/collection-preferences

> Users can choose to have long text in table cells displayed on one line and truncated, or fully displayed in multiple lines. The default is to truncate.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/components/collection-preferences/
- URL（原稿）: https://cloudscape.design/components/collection-preferences/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 改行しない既定（切り詰め）。利用者が『折り返し』に切り替えられる（collection-preferences の Wrap lines）。Polaris（折り返す）・Primer（折り返しが望ましい）と既定が食い違う。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 表,切り詰め

### S007 Cloudscape（AWS） patterns/resource-management/view/table-view

> Organize columns and rows based on the information needs of your users. To help them read the table, order the columns by importance from left to right.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/patterns/resource-management/view/table-view/
- URL（原稿）: https://cloudscape.design/patterns/resource-management/view/table-view/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 列は利用者の情報ニーズで選び、重要な順に左から並べる。取捨選択の基準を『利用者の情報ニーズ』と述べている点が要。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 表,列,取捨

### S008 Cloudscape（AWS） patterns/resource-management/view/table-view

> Use progressive loading when your user needs to see all the data in one view, to compare large data sets, and where context switching between pages creates a cognitive load and prevents easy comparison.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/patterns/resource-management/view/table-view/
- URL（原稿）: https://cloudscape.design/patterns/resource-management/view/table-view/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ページ送りと『もっと読む』の使い分け。比較のため全件を一画面で見たいときだけ後者。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 表,ページ送り

### S009 Carbon（IBM） index.mdx

> There must be at least four characters of non-truncated content in a truncated string.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.carbondesignsystem.com/building-blocks/core/patterns/overflow-content
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/patterns/overflow-content/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 切り詰めても少なくとも 4 文字は残す。切り詰めた文字列には必ずツールチップで全文。見出し・ラベル・エラー文には切り詰めを使わない（同ページ）。
- ライセンス: carbon-website: Apache-2.0
- タグ: 表,切り詰め,数値

### S010 PatternFly（Red Hat） table.md

> The default sort order for a table should support the primary use case for the application.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.patternfly.org/components/table/design-guidelines/
- URL（原稿）: https://raw.githubusercontent.com/patternfly/patternfly-org/73cec7b0348e1d49458c961896017340c55b7125/packages/documentation-site/patternfly-docs/content/components/table/table.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 既定の並び順は主な作業に合わせる。例: 同期状況の確認が主なら『最終同期』順、深刻度の列があるなら『深刻度の高い順』。
- ライセンス: patternfly-org: MIT
- タグ: 表,並べ替え

### S011 PatternFly（Red Hat） card-view.md

> Never use a card view to make a large amount of text-based content easier to scan. Use a table or list view instead.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.patternfly.org/patterns/card-view/
- URL（原稿）: https://raw.githubusercontent.com/patternfly/patternfly-org/73cec7b0348e1d49458c961896017340c55b7125/packages/documentation-site/patternfly-docs/content/patterns/card-view/card-view.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: カード表示は『図や視覚表現で識別するもの』向け。文字情報の走査には表か一覧。
- ライセンス: patternfly-org: MIT
- タグ: カード,表

### S012 Primer（GitHub） data-table.mdx

> Right-align numeric values and use the tabular-num font variant when possible.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://primer.style/product/components/data-table/
- URL（原稿）: https://raw.githubusercontent.com/primer/design/87f799f202ec95df15c99f473c9c0c803da8e6b3/content/components/data-table.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数値は右揃え＋等幅数字（tabular-nums）。PatternFly も .pf-v6-m-tabular-nums を提供。USWDS は monospace 書体を勧める。
- ライセンス: primer/design: MIT
- タグ: 表,数値,桁揃え

### S013 Primer（GitHub） data-table.mdx

> Content truncation is available as a last resort when column widths are set.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://primer.style/product/components/data-table/
- URL（原稿）: https://raw.githubusercontent.com/primer/design/87f799f202ec95df15c99f473c9c0c803da8e6b3/content/components/data-table.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 折り返しが望ましく、切り詰めは最後の手段（全文はツールチップ）。
- ライセンス: primer/design: MIT
- タグ: 表,切り詰め

### S014 Primer（GitHub） data-table.mdx

> These factors make it difficult to recommend an “ideal” page size for all use cases, but 20 rows is a good place to start.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://primer.style/product/components/data-table/
- URL（原稿）: https://raw.githubusercontent.com/primer/design/87f799f202ec95df15c99f473c9c0c803da8e6b3/content/components/data-table.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 1 ページの行数の理想は決められないが、20 行から始める。行数に影響する要因: 絞り込めるか・列数・セルの視覚的複雑さ・見直しに要る文脈の量。
- ライセンス: primer/design: MIT
- タグ: 表,ページ送り,数値

### S015 GitLab Pajamas table.md

> Tables displaying data sets with more than 20 items should use pagination.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://design.gitlab.com/components/table
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/bff0fc3abf26d0781f647590df68597976cb82b3/contents/components/table.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 20 件超でページ送り。コンパクト表は 40 件超（次の項）。
- ライセンス: design.gitlab.com: MIT
- タグ: 表,ページ送り,数値

### S016 GitLab Pajamas table.md

> Do not apply vertical lines between columns. In general, tables without vertical lines look better and are easier to scan and read.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://design.gitlab.com/components/table
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/bff0fc3abf26d0781f647590df68597976cb82b3/contents/components/table.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 縦罫線は引かず、行の下に横罫線（最終行にも）。表を囲む枠も付けない。Polaris は表を入れ子にするとき罫線を使う、と別の場面を述べる。
- ライセンス: design.gitlab.com: MIT
- タグ: 表,罫線

### S017 GitLab Pajamas table.md

> If the data in each row needs to be compared to data in other rows then maintain the tabular layout.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://design.gitlab.com/components/table
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/bff0fc3abf26d0781f647590df68597976cb82b3/contents/components/table.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 狭い画面の扱い: 行同士を比べるなら表のまま横スクロール、各行が独立して読めるなら行ごとの組に積む、行内の操作を見落とさせたくないなら積む。
- ライセンス: design.gitlab.com: MIT
- タグ: 表,狭い画面

### S018 USWDS usability.md

> Take care not to vary units or formatting within the same column. Instead, normalize values so they can be easily compared.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://designsystem.digital.gov/components/table/
- URL（原稿）: https://raw.githubusercontent.com/uswds/uswds-site/af13d80f071c3d897bee422f51954d9d7d156474/_components/table/guidance/usability.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 同じ列で単位や書式を混ぜない（日数の列に週が混ざるなど）。
- ライセンス: uswds-site: CC0 / 米国政府著作物
- タグ: 表,数値,単位

### S019 Ant Design data-list.en-US.md

> Recommended by default. When used, when the content of the page is less than one page, the pager will not be displayed.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://ant.design/docs/spec/data-list/
- URL（原稿）: https://raw.githubusercontent.com/ant-design/ant-design/615d1baef4a4d3197bd611651e6415d15d8bb4ca/docs/spec/data-list.en-US.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ページ送りを既定で推奨。1 ページに収まるならページャーを出さない（Cloudscape は『1 ページでもページ送りを表示する』と逆）。『同一ページ読み込み』は動態やメールなど『探すものが先頭付近にある』場合。
- ライセンス: ant-design: MIT
- タグ: 表,ページ送り,食い違い

### S020 デジタル庁デザインシステムβ版「テーブル／データテーブル（使い方）」（結合・リンク・行選択）

> データテーブルの場合は、セルの結合は原則として行いません。セルが結合されると、データの再利用が難しくなります。
> 行全体をリンクにすることはできません。
> セルのリンクが2つ以上の場合は、文字列ごとのリンクとします。セル全体をリンク領域にすることはできません。

- 媒体・日付: デジタル庁デザインシステムβ版 v2.18.2、ページ更新 2026-10-14
- URL: https://design.digital.go.jp/dads/components/table/usage/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: デジタル庁デザインシステムの出典記載の規定（利用上の注意事項）に従い、出典を示して短く引用する。編集・加工はしない。
- 要旨: データテーブルではセルを結合しない（再利用しにくくなる）、行全体をリンクにしない、セル内にリンクが複数あるときは文字列ごとのリンクにする、という制約を置く。行クリックで遷移させる実装（freee の Vibes は行クリックを許す）とは立場が異なる。
- 使いどころ: 表の部品の制約。行リンクの扱いの違い（S119 と対比）

### S021 デジタル庁デザインシステムβ版「リソースリスト」

> 各項目の値を比較したり、複数の列で構成されるデータを分析したりする場合は、行と列を使ったテーブルのほうが適しています。
> アイテム全体をクリッカブルエリア（フォーカス可能エリア）にした場合は、中にリンクやボタンを置かない

- 媒体・日付: デジタル庁デザインシステムβ版 v2.18.2、ページ更新 2026-09-09
- URL: https://design.digital.go.jp/dads/components/resource-list/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: デジタル庁デザインシステムの出典記載の規定（利用上の注意事項）に従い、出典を示して短く引用する。編集・加工はしない。
- 要旨: 比較・分析にはテーブル、独立した項目を並べるならリソースリスト（カード風）と使い分ける。項目全体を押せる領域にした場合、その中に別のリンクやボタンを置かない（押し間違いと読み上げの混乱を避ける）。
- 使いどころ: 表かカードかの選択。カードを並べすぎる失敗への牽制

### S022 ITmedia NEWS「使いにくい表・テーブル UI の改善点」（NG 例: 件数・揃え）

> 合計件数は管理項目の最も重要な情報の一つなので、テーブルでは一番目立つ場所に表示する方がよいでしょう。
> B2B SaaSでは、文字量の多いデータをテーブルに表示することも多いことから、中央ぞろえだと文字量の差で大きく目線がぶれ、読み取りにくくなります。

- 媒体・日付: ITmedia NEWS（記者: 川村将人、ベイジの解説）、公開 2022-05-12・更新 2022-06-16
- URL: https://www.itmedia.co.jp/news/article/2205/12/1220512045/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ITmedia の記事。© ITmedia, Inc. 記事本文の転載はせず、1 から 3 文の引用にとどめる。署名記者による構成で、解説はベイジ（B2B SaaS・業務システムの UI/UX の制作会社）の知見。
- 要旨: 表の NG 例として、合計件数が左下の目立たない位置にあること、中央揃えで文字量の差により視線がぶれることを挙げる。
- 使いどころ: 件数の置き場所と中央揃えの問題

### S023 ITmedia NEWS「使いにくい表・テーブル UI の改善点」（OK 例: 数値と固定列）

> 複数のデータを比較して見ることが多い数値は、右ぞろえにしましょう。金額によく入る3桁カンマの位置もそろい、見やすくなります。
> 主要な列とは、その列を見れば何のデータか認識できる列のことです。
> しかし、あまり多くの項目を固定列にすると横スクロールできる範囲が狭くなるため、バランスが重要です。

- 媒体・日付: ITmedia NEWS（記者: 川村将人、ベイジの解説）、公開 2022-05-12・更新 2022-06-16
- URL: https://www.itmedia.co.jp/news/article/2205/12/1220512045/2
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ITmedia の記事。© ITmedia, Inc. 記事本文の転載はせず、1 から 3 文の引用にとどめる。署名記者による構成で、解説はベイジ（B2B SaaS・業務システムの UI/UX の制作会社）の知見。
- 要旨: 数値は右揃えにして 3 桁カンマの位置を揃える。主要な列（顧客名・社員名・履歴なら時刻）を左に固定する。ただし固定しすぎると動く範囲が狭くなる。デジタル庁（S138）は数値と日付を右寄せとする。
- 使いどころ: 数値の揃え・固定列の選び方。S138 と対比

### S024 ITmedia NEWS「使いにくい表・テーブル UI の改善点」（ソートを意識した列）

> 例えば契約期間は、契約開始日、契約終了日の2列に分けると、それぞれをソートでき、対象の顧客を探しやすくなります。

- 媒体・日付: ITmedia NEWS（記者: 川村将人、ベイジの解説）、公開 2022-05-12・更新 2022-06-16
- URL: https://www.itmedia.co.jp/news/article/2205/12/1220512045/2
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ITmedia の記事。© ITmedia, Inc. 記事本文の転載はせず、1 から 3 文の引用にとどめる。署名記者による構成で、解説はベイジ（B2B SaaS・業務システムの UI/UX の制作会社）の知見。
- 要旨: 業務データを探す軸になる値は、並べ替えできる単位で列を分ける。「契約期間」を 1 列に詰めず、開始日と終了日に分ければ終了間近の顧客を探せる。
- 使いどころ: 列の分け方。1 列に詰め込む失敗

### S025 Fixel（デザイン会社）インタラクション＆インフォメーションデザイナー「一覧画面の UX/UI デザイン。押さえるべきポイントとは？」

> それは、利用目的に合わせ「ユーザーがその時に必要とする、情報(データ)を素早く探し出せること」だと考えられます。
> そのために、何の情報があると行動できるか・判断ができるか
> データベースから取得できるデータかどうか

- 媒体・日付: note、2025-05-12
- URL: https://note.com/fixel_/n/n82614bb8fb91
- 取得日: 2026-11-16
- 検証区分: A
- 備考: note の記事。短い引用にとどめる。
- 要旨: 一覧画面の役割を「必要な情報を素早く探し出せること」と置き、要件整理の問いを並べる（何を達成したいか、判断に要る情報、件数の幅、探す仕組み、表示形式、並び順、表示領域、取得可能性、性能）。「データベースから取れるか」を問いに含める点が、画面と DB の関係を扱う実務的な指摘。
- 使いどころ: 一覧の要件整理の問い。判断に要る情報から列を決める

### S026 Qiita 投稿者（企業の技術部署の個人記事）「一覧表の列が増えすぎる？業務画面のテーブルを見やすく保つ設計メモ」

> 一覧画面の役割は、すべての情報を見せることではありません。
> 詳細情報は詳細画面に置く。一覧では判断に必要な情報に絞る。この分担が大事です。
> 「問い合わせでたまに使う」だけなら、一覧に常時出さず、詳細画面やコピー用メニューに逃がす選択もあります。

- 媒体・日付: Qiita、2026-07-27
- URL: https://qiita.com/girio-qiita/items/8ed944a0a9b6a93895c3
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Qiita の個人記事。デザイナーによる記事ではない点に注意。短い引用にとどめる。
- 要旨: 列を「識別する情報」「判断する情報」「詳細確認用の情報」の 3 種類に分け、最後は一覧に出さない。実装者個人の設計メモで、デザイナーの発言ではない。S253・S025 と同じ趣旨を、運用で列が増えていく過程の失敗談として書く。
- 使いどころ: 列が増え続ける失敗の記述（個人の経験談として）

### S027 Zenn 投稿者（個人）「業務画面のグリッド列設定をテーブルで管理する設計パターン」

> 一覧画面の UX は、1回の短縮時間よりも、利用頻度との掛け算で効きます。
> 同じ画面でも、現場担当、管理者、サポート担当では見たい列が違います。

- 媒体・日付: Zenn、2026-04-30
- URL: https://zenn.dev/tonbi_attack/articles/262912f345154c
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Zenn の個人記事。短い引用にとどめる。
- 要旨: 列幅と列順を利用者ごとにサーバー側へ保存する設計の記事。毎日使う一覧では「よく見る列を左に寄せる」小さな操作の繰り返しが効くという主張で、効果の数値例（10 秒 × 20 回）は筆者の例示であり計測値ではない。個人の実装メモで、デザイナーの発言ではない。
- 使いどころ: 保存したビュー・列設定の保存の根拠（経験則として）

### S028 Pencil & Paper（デザイン会社）

> It can become tricky, when using zebra stripes, to effectively differentiate between disabled, hover, focused and active states.

- 媒体・日付: Pencil & Paper「Data Table UX Patterns & Best Practices」（日付はページに明記なし）
- URL: https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ゼブラは行の状態表現（無効・ホバー・選択）と衝突する、という否定側の根拠。NN/g（S045）は肯定側。

### S029 Pencil & Paper（デザイン会社）

> In the majority of cases, default sorting shows the most recent entries at the top (most recently created or modified) or entries most needing action (lowest inventory, most urgent priority).

- 媒体・日付: Pencil & Paper「Data Table UX Patterns & Best Practices」（日付はページに明記なし）
- URL: https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 既定の並びは「新しい順」か「対応が要る順」。

### S030 Pencil & Paper（デザイン会社）

> Vertical separators can make the table become visually busy.

- 媒体・日付: Pencil & Paper「Data Table UX Patterns & Best Practices」（日付はページに明記なし）
- URL: https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 縦罫は必須ではない。引くなら 1px 以下の薄い灰（同記事）。

### S031 Huijing Chen（Smashing Magazine）

> It would be useful to have some sort of indicator of which column is currently being sorted and in what order.

- 媒体・日付: Smashing Magazine「Table Design Patterns On The Web」, 2019-01-24
- URL: https://www.smashingmagazine.com/2019/01/table-design-patterns-web/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 並べ替えの列と向きを示す。実装寄りの記事。

### S032 Rain Noe（Core77）

> 'We have to be religiously consistent' to satisfy users who become attached to terminal's look and feel, says Bloomberg chief executive Lex Fenwick.

- 媒体・日付: Core77, 2013-05-16（Portfolio 誌の記事からの再引用。誌の日付は未確認）
- URL: https://core77.com/posts/24893/moneymaking-multi-monitor-mayhem-and-why-some-prefer-interface-design-that-sucks-24893
- 取得日: 2026-11-16
- 検証区分: B
- 備考: Core77 が Portfolio 誌の記事から引いた Fenwick の発言（Bloomberg 社内の発言の再引用）。Bloomberg 社のページは自動取得が拒否され、一次の照合はできていない。

### S033 UX Magazine（Core77 が引用したブロック引用）

> Simplifying the interface of the terminal would not be accepted by most users because, as ethnographic studies show, they take pride on manipulating Bloomberg's current "complex" interface.

- 媒体・日付: Core77, 2013-05-16（Portfolio 誌の記事からの再引用。誌の日付は未確認）
- URL: https://core77.com/posts/24893/moneymaking-multi-monitor-mayhem-and-why-some-prefer-interface-design-that-sucks-24893
- 取得日: 2026-11-16
- 検証区分: B
- 備考: Core77 が UX Magazine の記事「The Impossible Bloomberg Makeover」から引いたブロック引用（Core77 は「translated the spin」と紹介）。UX Magazine の原本は未取得（Wayback が 429）。民族誌の研究が根拠とされるが、本体は未確認。解釈であり事実として使わない。

## 詳細画面

### S034 Cloudscape（AWS） components/key-value-pairs

> Don't collapse or truncate data using ellipses (...) or other characters; always show the full string for both label and value.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/components/key-value-pairs/
- URL（原稿）: https://cloudscape.design/components/key-value-pairs/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: キーと値の並びでは省略記号で切らない。表のセルでは切り詰めが既定なのと対照的に、詳細画面では全文を見せる。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 詳細,キーと値,切り詰め

### S035 Cloudscape（AWS） patterns/resource-management/details/details-page

> Place the most relevant information about the resource in this container.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/patterns/resource-management/details/details-page/
- URL（原稿）: https://cloudscape.design/patterns/resource-management/details/details-page/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 詳細ページの先頭の『概要コンテナ』に最も関連する情報を置く（キーと値で組む）。タイトルは資源名か ID でパンくずの最後と一致させる。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 詳細,取捨

### S036 Cloudscape（AWS） patterns/resource-management/details/details-page-as-hub

> Use containers to provide a functional preview of the first five items from the related resources page.
>
> Users can choose this link to navigate to a new page to view the full set of related resources.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/patterns/resource-management/details/details-page-as-hub/
- URL（原稿）: https://cloudscape.design/patterns/resource-management/details/details-page-as-hub/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 関連資源は先頭 5 件を機能するプレビューとして出し、全件は別ページへ。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 詳細,数値,関連

### S037 GitLab Pajamas attribute-list.md

> If you have too many attributes and risk overwhelming users, consider grouping related attributes or using a table instead.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://design.gitlab.com/components/attribute-list
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/bff0fc3abf26d0781f647590df68597976cb82b3/contents/components/attribute-list.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 属性リスト（キーと値）は 1 つの実体の読み取り専用メタデータ向け。複数の実体を比べるなら表。ラベルは実体間で一貫させ、値だけ変える。
- ライセンス: design.gitlab.com: MIT
- タグ: 詳細,キーと値

### S038 GOV.UK Design System index.md

> Think carefully before you remove row borders. Borders help many users find and read information that’s laid out in rows, especially users who zoom in on pages or use assistive technologies to magnify their screen.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://design-system.service.gov.uk/components/summary-list/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/components/summary-list/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: キーと値の行の罫線は、行と操作（変更リンク）を結び付ける。拡大して使う利用者に効くので安易に消さない。欠けている値は『変更』でなく入力へのリンクを値の欄に出す。
- ライセンス: govuk-design-system: MIT（Crown copyright）
- タグ: 詳細,キーと値,罫線

### S039 ITmedia NEWS「使いにくい表・テーブル UI の改善点」（詳細への導線）

> テーブルの詳細画面への導線は、ユーザーが迷わないよう、目立つ1カ所のみにしましょう。
> ラジオボタンの操作を挟むと、操作に2回のクリックが必要になり、ユーザーの手間が増えます。

- 媒体・日付: ITmedia NEWS（記者: 川村将人、ベイジの解説）、公開 2022-05-12・更新 2022-06-16
- URL: https://www.itmedia.co.jp/news/article/2205/12/1220512045/2
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ITmedia の記事。© ITmedia, Inc. 記事本文の転載はせず、1 から 3 文の引用にとどめる。署名記者による構成で、解説はベイジ（B2B SaaS・業務システムの UI/UX の制作会社）の知見。
- 要旨: 詳細画面への入口は 1 か所に絞り（主要な列をリンクにするか、詳細ボタンだけの列）、行を選んでから詳細ボタンを押す 2 段階にしない。
- 使いどころ: 一覧から詳細への入口

### S040 GENIEE SFA/CRM のプロダクトデザイナー「業務システムのフロントリニューアルで重視していること」（詳細画面の作り直し）

> 基本情報や関連など分類でタブ分け。特定箇所へすぐに移動できるアンカーリンクも用意し、見たいものに集中でき、欲しい情報へ辿り着く時間が短縮されるよう改修。
> 今見ているレコードを子とし、そのレコードの親と孫にあたるレコードを同画面で表示・編集できるように改修。

- 媒体・日付: Zenn（GENIEE TechBlog）、2025-04-18
- URL: https://zenn.dev/geniee/articles/b1573d1aff7a42
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Zenn の記事。短い引用にとどめる。
- 要旨: 全項目を縦に積んでいた詳細画面を、分類ごとのタブとアンカーリンクに改め、親・子のレコードを同じ画面で参照・編集できるようにした。詳細画面は「どれだけ速く・多く欲しい情報を得られるか」で評価し、一覧性を重んじる、という立場。
- 使いどころ: 詳細画面の節の分け方。関連レコードの見せ方

### S041 Page Laubheimer（Nielsen Norman Group）

> Table design should support four common user tasks: find records that fit specific criteria, compare data, view/edit/add a single row’s data, and take actions on records.

- 媒体・日付: NN/g「Data Tables: Four Major User Tasks」, 2022-04-03
- URL: https://www.nngroup.com/articles/data-tables/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 表の設計を 4 つの作業（探す・比べる・1 行を見る/編集する・操作する）で分ける枠。業務用の大きな表が対象で、商品比較表は対象外と記事が断っている。

### S042 Page Laubheimer（Nielsen Norman Group）

> first column should be a human-readable record identifier instead of a “mystery meat” automatically generated ID

- 媒体・日付: NN/g「Data Tables: Four Major User Tasks」, 2022-04-03
- URL: https://www.nngroup.com/articles/data-tables/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 先頭列は自動採番の ID ではなく、人が読んで見つけられる名前にする、の根拠。DB の列をそのまま並べる設計への反証。

### S043 Page Laubheimer（Nielsen Norman Group）

> The default order of the columns should reflect the importance of the data to the user and related columns should be adjacent.

- 媒体・日付: NN/g「Data Tables: Four Major User Tasks」, 2022-04-03
- URL: https://www.nngroup.com/articles/data-tables/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 列の既定の並びは DB の定義順ではなく利用者にとっての重要度。関連する列は隣に置く。

### S044 Page Laubheimer（Nielsen Norman Group）

> A card-based presentation of multivariate data requires users to spatially reorient each time they move their eyes from one card to another, making comparison tasks cognitively effortful and slow.

- 媒体・日付: NN/g「Data Tables: Four Major User Tasks」, 2022-04-03
- URL: https://www.nngroup.com/articles/data-tables/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 比較が主作業なら、カードを並べるより表。カード並べすぎへの批判の根拠として使える。

### S045 Page Laubheimer（Nielsen Norman Group）

> Freeze header rows and header columns (if the table is larger than the screen).
>
> Borders, zebra striping, and hover-triggered highlighting of a record can all help.

- 媒体・日付: NN/g「Data Tables: Four Major User Tasks」, 2022-04-03
- URL: https://www.nngroup.com/articles/data-tables/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 見出し行・見出し列の固定。罫線・ゼブラ・行のホバー強調も「位置を見失わない」ための手段として同じ節で挙げられている（ゼブラの是非は S146 と食い違う）。

### S046 Page Laubheimer（Nielsen Norman Group）

> The big downside with a modal implementation (and why we generally don’t recommend modals for deep editing work) is that it will cover adjacent records in the table and the user won’t be able to reference or copy data from a similar record.

- 媒体・日付: NN/g「Data Tables: Four Major User Tasks」, 2022-04-03
- URL: https://www.nngroup.com/articles/data-tables/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 編集をモーダルにしない理由（隣の行を参照・コピーできない）。

### S047 Page Laubheimer（Nielsen Norman Group）

> A nonmodal side panel allows for the full display (and editing) of a single record while still allowing the user to view the rest of the table’s data.

- 媒体・日付: NN/g「Data Tables: Four Major User Tasks」, 2022-04-03
- URL: https://www.nngroup.com/articles/data-tables/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 一覧から詳細へ入る形として、非モーダルの横パネルを勧める。詳細画面の「入り方」の根拠。

## 状態・色

### S048 Cloudscape（AWS） components/status-indicator

> Never rely on color alone to communicate information.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/components/status-indicator/
- URL（原稿）: https://cloudscape.design/components/status-indicator/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 色だけに頼らない。状態表示は必ず文言（と記号）を伴う（直前の Do: Always include text）。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 状態,アクセシビリティ

### S049 Carbon（IBM） index.mdx

> While we won’t set a strict limit, having more than five or six indicators can overwhelm users and make it harder for them to focus.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.carbondesignsystem.com/building-blocks/core/patterns/status-indicators
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/patterns/status-indicator-pattern/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 状態印は 5〜6 個が目安（厳密な上限ではないと明記）。
- ライセンス: carbon-website: Apache-2.0
- タグ: 状態,取捨,数値

### S050 Carbon（IBM） index.mdx

> When multiple statuses are consolidated, use the highest-attention color to represent the group.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.carbondesignsystem.com/building-blocks/core/patterns/status-indicators
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/patterns/status-indicator-pattern/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 複数の状態を 1 つにまとめるときは、最も注意を要する色（緑・黄・赤なら赤）で代表させる。
- ライセンス: carbon-website: Apache-2.0
- タグ: 状態,集計

### S051 Carbon（IBM） index.mdx

> And for WCAG compliance, at least three of these elements must be present.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.carbondesignsystem.com/building-blocks/core/patterns/status-indicators
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/patterns/status-indicator-pattern/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 状態印は記号・形・色・文言の 4 要素のうち 3 つ以上を備える（WCAG 適合のため、と Carbon が述べる）。
- ライセンス: carbon-website: Apache-2.0
- タグ: 状態,アクセシビリティ,数値

### S052 PatternFly（Red Hat） status-and-severity.md

> Status does not automatically convey the level of impact an issue may have.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.patternfly.org/patterns/status-and-severity/
- URL（原稿）: https://raw.githubusercontent.com/patternfly/patternfly-org/73cec7b0348e1d49458c961896017340c55b7125/packages/documentation-site/patternfly-docs/content/patterns/status-and-severity/status-and-severity.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 『状態』（接続元・システムの現在の状態）と『深刻度』（問題の重さ）を別の概念として別の記号体系にする。互いに使い回さない。
- ライセンス: patternfly-org: MIT
- タグ: 状態,深刻度

### S053 Primer（GitHub） data-visualization.mdx

> Chart / visualization marks need to be at a 3:1 ratio with the background.
>
> We don't currently support the creation of new:
> - Donut charts
> - Sparklines
>
> Stacked bar charts and progress bars should have a high contrast divider line between each segment.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://primer.style/product/ui-patterns/data-visualization/
- URL（原稿）: https://raw.githubusercontent.com/primer/design/87f799f202ec95df15c99f473c9c0c803da8e6b3/content/ui-patterns/data-visualization.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 図のマークは背景に対し 3:1。積み上げ棒と進捗バーは区切りに高コントラストの線を入れる。色の識別が難しい組（青と紫）への対処としても有効、と述べる。 ／ GitHub の Primer は、サポートする図の一覧に『Bar・Line・Area・Progress bars』を挙げ、『新規には作らない』図として Donut と Sparklines を挙げる。これは Primer 自身の対応範囲の記述で、表の中の図を避ける設計上の勧めではなく、理由も原文に無い。『Primer は表の中の図を勧めない』とは読まない。
- ライセンス: primer/design: MIT
- タグ: 視覚化,色,数値 ／ 表の中の図,sparkline,色

### S054 GOV.UK Design System index.md

> So start with the smallest number of statuses you think might work, then add more if your user research shows there’s a need for them.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://design-system.service.gov.uk/components/tag/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/components/tag/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 状態の種類は最小から始める。多いほど利用者は覚えられない。1 種類だけ（『完了』のみ）でもよい（タグが無い＝未完了と読める）。
- ライセンス: govuk-design-system: MIT（Crown copyright）
- タグ: 状態,取捨

### S055 GOV.UK Design System index.md

> Research from multiple teams found that some users perceived these as buttons and tried to click on them.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://design-system.service.gov.uk/components/tag/
- URL（原稿）: https://raw.githubusercontent.com/alphagov/govuk-design-system/5f31aa7e06a2d9324e6fd4289eeaf815c4a00d46/src/components/tag/index.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 研究に基づく変更: 濃い背景＋白文字のタグをボタンと誤認する利用者がいたため、薄い背景＋濃い文字に変更。大文字・太字は長い文で読みにくいという調査も理由。
- ライセンス: govuk-design-system: MIT（Crown copyright）
- タグ: 状態,調査

### S056 デジタル庁デザインシステムβ版「チップラベル」

> チップラベルの色は視覚的な区別を助けますが、色だけで意味を伝えないでください。必ずテキストで状態や分類を明示してください。
> チップラベルの色は視覚的な区別を助けますが、多くの色を使いすぎると逆に識別しにくくなります。

- 媒体・日付: デジタル庁デザインシステムβ版 v2.18.2、ページ更新 2026-09-09
- URL: https://design.digital.go.jp/dads/components/chip-label/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: デジタル庁デザインシステムの出典記載の規定（利用上の注意事項）に従い、出典を示して短く引用する。編集・加工はしない。
- 要旨: 状態や分類を示すラベルは、色だけに頼らず必ず文字で状態を書き、色数を増やしすぎない。申請の状態（受付中・審査中・完了）が使用例として挙がっている。
- 使いどころ: 状態ラベルの色の使い方。S263 と同じ方針

### S057 Page Laubheimer（Nielsen Norman Group）

> Dashboards are focused on a single task: communicating critical information.

- 媒体・日付: NN/g「Dashboards: Making Charts and Graphs Easier to Understand」, 2017-06-18
- URL: https://www.nngroup.com/articles/dashboards-preattentive/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ポータルとの区別。何でも載せるダッシュボードへの批判の根拠。

### S058 Page Laubheimer（Nielsen Norman Group）

> Operational dashboards aim to impart critical information quickly to users as they are engaged in time-sensitive tasks.

- 媒体・日付: NN/g「Dashboards: Making Charts and Graphs Easier to Understand」, 2017-06-18
- URL: https://www.nngroup.com/articles/dashboards-preattentive/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 運用型と分析型の区別。同記事は分析型を「さらなる調査の要否を知らせるもの」と位置づける。

### S059 Page Laubheimer（Nielsen Norman Group）

> unlike length, people do not perceive different colors as being in a particular order, so color should not be used to communicate information about quantitative values or magnitude.

- 媒体・日付: NN/g「Dashboards: Making Charts and Graphs Easier to Understand」, 2017-06-18
- URL: https://www.nngroup.com/articles/dashboards-preattentive/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 量は長さ・位置で、色は区別（カテゴリ）に。状態の色の使い方の根拠。色覚の割合などの数値は本文を参照（4.5%・約 8% 対 0.5% と記事が書く）。

### S060 Carbon（IBM） patterns/status-indicator-pattern（色の意味）

> Typically, red represents danger or error, orange represents a serious warning, yellow represents a regular warning, green represents normal or success, and blue represents passive notifications, usually involving additional information and workflow progress.
>
> Gray indicates drafts or jobs that haven’t been started, and purple indicates outliers or undefined statuses.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.carbondesignsystem.com/building-blocks/core/patterns/status-indicators
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/patterns/status-indicator-pattern/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Carbon の状態色（赤・橙・黄・緑・青の 5 色＋灰・紫）。『serious warning（橙）』と『regular warning（黄）』を分け、段階を 3 つ以上持たせる例。紫は外れ値・未定義と割り当てる。IBM の製品の既定。
- ライセンス: carbon-website: Apache-2.0
- タグ: 状態,色

### S061 Carbon（IBM） patterns/status-indicator-pattern（色だけでは足りない）

> Relying solely on color to convey status is insufficient, especially for users with color vision deficiencies
>
> As a result, status indicators should rely on at least two of the following elements: color, shape, or symbol.
>
> If the contrast is sufficient, even in grayscale, users should still be able to differentiate statuses without relying solely on color.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.carbondesignsystem.com/building-blocks/core/patterns/status-indicators
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/patterns/status-indicator-pattern/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 色・形・記号のうち 2 つ以上を使う。灰色に落としても区別できるかが点検の方法になる。S051 は『要素 4 つのうち 3 つ以上』と述べ、同じ文書内で数え方が違う（S051 の備考と合わせて読む）。
- ライセンス: carbon-website: Apache-2.0
- タグ: 状態,色,形,アクセシビリティ

### S062 Carbon（IBM） patterns/status-indicator-pattern（差分の印）

> They are especially useful for monitoring differences in large sets of statistics, where more complex indicators might be too distracting.
>
> Color is optional in these situations as long as the value has either a "+" or "-" in front of it, a chevron icon, or an arrow icon. Unless the data involves temperature, positive values are represented by the green spectrum and negative values are represented by the red spectrum.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.carbondesignsystem.com/building-blocks/core/patterns/status-indicators
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/patterns/status-indicator-pattern/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 増減は符号・山形・矢印のどれかを必ず付け、色は任意。『増えた＝緑』は温度のような例外がある、と原文が例外を述べる（増えると悪い指標では逆になる点は原文に無く、本 skill の注意）。
- ライセンス: carbon-website: Apache-2.0
- タグ: 比較,増減,色

### S063 Aurora Harley（Nielsen Norman Group）「6 Visual Indicators to Differentiate Items in a List」

> Users are roughly 37% faster at finding items within a list on a web page when visual indicators vary both in color and icon compared to text alone.
>
> If choosing between using color or an icon, icons with strong information scent perform better than color alone.
>
> Text only was 57% slower than the best performing condition, which varied both the color and the icon of the visual indicators within the same pair.

- 媒体・日付: NN/g 2016-08-07、取得 2026-11-16
- URL: https://www.nngroup.com/articles/visual-indicators-differentiators/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 96 人・モバイルの一覧と株価表でのクリックテスト。色だけの区別より、アイコンのほうが速く、色＋アイコンが最速。『文字だけで区別』が最も遅い。対象は一覧内の印の探しやすさで、状態の理解や PC の業務画面ではない点に注意。
- タグ: 状態,色,アイコン,実験

### S064 W3C（WCAG 2.2 Understanding）

> Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

- 媒体・日付: Understanding SC 1.4.1 Use of Color
- URL: https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 移し替え元: designer-dataviz S60。色だけで伝えないという達成基準（A）。元の備考: 色だけで意味を伝えない、という達成基準

### S065 W3C（WCAG 2.2 Understanding）

> The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s)

- 媒体・日付: Understanding SC 1.4.11 Non-text Contrast
- URL: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 移し替え元: designer-dataviz S61。状態の印・図の要素は隣接色に 3:1 以上。元の備考: UI 部品・必要なグラフィックは隣接色に対して 3:1 以上

## 表の中の図・比較・時間

### S066 Cloudscape（AWS） patterns/resource-management/view/table-view

> Restrain from incorporating graphics in tables.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/patterns/resource-management/view/table-view/
- URL（原稿）: https://cloudscape.design/patterns/resource-management/view/table-view/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 表に図を入れるのは控える。図・画像・混在形式のデータはカード表示へ。（表の中の小さな図を勧める PatternFly の『Default spacing: 列にアイコンやチャート』との食い違いに注意。）
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 表,視覚化

### S067 Cloudscape（AWS） patterns/general/timestamps

> Since relative dates are easier to read, we recommend using them in most situations.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/patterns/general/timestamps/
- URL（原稿）: https://cloudscape.design/patterns/general/timestamps/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 相対時刻を基本とし、絶対時刻は UTC オフセット付き（UTC 自身にも付ける）、月名・単位語は略さない。請求用途では課金単位の時間単位に合わせる。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 時間

### S068 GitLab Pajamas dashboards.md

> Display trends and a comparison over time, not just a current snapshot.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://design.gitlab.com/patterns/dashboards
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/bff0fc3abf26d0781f647590df68597976cb82b3/contents/patterns/dashboards.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Show progression: 現在値だけでなく傾向と期間比較を出す。ほかに、階層的に（上に概要・下に詳細）、会議で共有できる見た目（スクリーンショットに耐える）、頻繁に探す値を目立たせる、を挙げる。
- ライセンス: design.gitlab.com: MIT
- タグ: ダッシュボード,比較,時間

### S069 Ant Design data-format.en-US.md

> In the console platform, relative time is generally used for message and notification.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://ant.design/docs/spec/data-format/
- URL（原稿）: https://raw.githubusercontent.com/ant-design/ant-design/615d1baef4a4d3197bd611651e6415d15d8bb4ca/docs/spec/data-format.en-US.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 相対時刻は『たった今』『N 分前』『N 時間前』、24 時間超は MM-DD HH:MM、1 年超は YYYY-MM-DD HH:MM。絶対時刻は精度が要る場面向け。
- ライセンス: ant-design: MIT
- タグ: 時間

### S070 PatternFly（Red Hat） sparkline-chart（表・報告・ダッシュボード）

> Sparklines are commonly used in tables, reports, and dashboards.
>
> We recommend using sparklines alone without an axis and placing the name of the item being visualized underneath the chart.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.patternfly.org/components/charts/sparkline-chart/design-guidelines
- URL（原稿）: https://raw.githubusercontent.com/patternfly/patternfly-org/73cec7b0348e1d49458c961896017340c55b7125/packages/documentation-site/patternfly-docs/content/components/charts/sparkline-chart/sparkline-chart.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 表の中に小さな推移の図を置くことを、デザインシステムが明示している例。軸なしで、対象の名前を図の下か左に置く。
- ライセンス: patternfly-org: MIT
- タグ: 表の中の図,sparkline

### S071 Primer（GitHub） progress-bar

> A progress bar is a simple chart that can be used to show how complete something is, or visualize parts that make up a whole.
>
> Default to pairing the progress bar with text that explicitly shows the value(s) of the filled segment(s).

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://primer.style/product/components/progress-bar/
- URL（原稿）: https://raw.githubusercontent.com/primer/design/87f799f202ec95df15c99f473c9c0c803da8e6b3/content/components/progress-bar.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 進捗バーは『完了度』と『全体の内訳』の小さな図。値の数字を併記するのが既定で、バーだけにしない。
- ライセンス: primer/design: MIT
- タグ: 表の中の図,進捗

### S072 GitLab Pajamas charts（sparkline）

> Sparkline charts give a quick indication of trend and a summary of the current value. They are particularly useful when space is limited.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://design.gitlab.com/data-visualization/charts
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/bff0fc3abf26d0781f647590df68597976cb82b3/contents/data-visualization/charts.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: sparkline は推移の目安と現在値の要約。面積が限られるときに向く。
- ライセンス: design.gitlab.com: MIT
- タグ: 表の中の図,sparkline

### S073 GitLab Pajamas single-stat

> To display the same metric over a period of time (use a chart instead).
>
> A single stat with supplementary content, which renders below the value and above the description. The default slot accepts content such as a progress bar or a trend indicator.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://design.gitlab.com/data-visualization/single-stat
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/bff0fc3abf26d0781f647590df68597976cb82b3/contents/data-visualization/single-stat.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 単一の数値カードは『時点の値』用で、期間を見せたいなら図を使う。数値の下に進捗バーや傾向の印を足せる。
- ライセンス: design.gitlab.com: MIT
- タグ: 比較,指標,推移

### S074 Page Laubheimer（Nielsen Norman Group）「Dashboards: Making Charts and Graphs Easier to Understand」

> Visualizations should leverage human cognition and use length and 2D position to communicate quantitative information quickly.
>
> Just below, this same dashboard uses the significantly better linear bullet charts (2) to communicate similar information (quantitative data along a range, with a target value identified).

- 媒体・日付: NN/g、取得 2026-11-16
- URL: https://www.nngroup.com/articles/dashboards-preattentive/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 量は長さと位置で見せる（データバー・棒の根拠）。ゲージより、目標値を持つ直線の bullet chart のほうが優れるとする。S059 は同じ記事の『色は大小の順序として知覚されない』の文。
- タグ: 表の中の図,比較,bullet

### S075 Stephen Few「Bullet Graph Design Specification」（比較の対象）

> bullet graphs support the comparison of the featured measure to one or more related measures (for example, a target or the same measure at some point in the past, such as a year ago)
>
> relate the featured measure to defined quantitative ranges that declare its qualitative state (for example, good, satisfactory, and poor)

- 媒体・日付: Perceptual Edge、改訂 2013-10-10。取得 2026-11-16
- URL: http://www.perceptualedge.com/articles/misc/Bullet_Graph_Design_Spec.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: bullet graph は実績を『目標』『前年同期』の比較値と、良・可・不良の帯に重ねる。前期比・目標比を 1 つの小さな図で出す設計の一次の出典。
- タグ: 比較,目標,bullet

### S076 Edward Tufte

> A sparkline is a small intense, simple, word-sized graphic with typographic resolution.

- 媒体・日付: edwardtufte.com フォーラム「Sparkline theory and practice」、Tufte の投稿 2004-05-27
- URL: https://www.edwardtufte.com/notebook/sparkline-theory-and-practice-edward-tufte/
- URL（原稿）: https://web.archive.org/web/20261031125214/https://www.edwardtufte.com/notebook/sparkline-theory-and-practice-edward-tufte/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 移し替え元: designer-dataviz S01。表の中の小さな図（sparkline）の定義。元の備考: sparkline の定義。KPI 一覧の小さな推移に使う根拠

### S077 Edward Tufte

> Sparklines often get their quantitative scaling context from nearby words, numbers and graphics; sparklines are directly quantified by numbers on or near the sparkline itself.

- 媒体・日付: edwardtufte.com「Sparklines History by Tufte: 1324 to now」2016-09-22
- URL: https://www.edwardtufte.com/notebook/sparklines-history-by-tufte-1324-to-now/
- URL（原稿）: https://web.archive.org/web/20261029174641/https://www.edwardtufte.com/notebook/sparklines-history-by-tufte-1324-to-now/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 移し替え元: designer-dataviz S08。sparkline の量は近くの数値が補う。一覧では数値列の隣に置く設計の根拠。元の備考: sparkline は目盛りの代わりに近くの数値で量を示す。KPI の隣に現在値を置く設計の根拠

### S078 Stephen Few

> A dashboard is a visual display of the most important information needed to achieve one or more objectives, consolidated and arranged on a single screen so the information can be monitored at a glance.

- 媒体・日付: Few「Common Pitfalls in Dashboard Design」2006-02（定義は 2004-03 の Intelligent Enterprise「Dashboard Confusion」の再掲と本文が述べる）
- URL: http://www.perceptualedge.com/articles/Whitepapers/Common_Pitfalls.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 移し替え元: designer-dataviz S33。ダッシュボードは一画面で一目という定義。元の備考: ダッシュボードの定義。「一画面・一目」が要件

### S079 San Francisco Digital Services「Data Visualization Guide」Formatting tables（データバー）

> In general, don’t use data bars. Data bars within tables are typically difficult to ensure visibility for most users.
>
> If you do implement data bars, you will need to check the color contrast to ensure that the bar contrasts sufficiently with the background, and the data label contrasts sufficiently with the bar. This is difficult to do well.

- 媒体・日付: SF.gov のデータ可視化の指針（GitBook。最終更新は 2 年前と表示）、取得 2026-11-16
- URL: https://sfdigitalservices.gitbook.io/data-visualization-guide/accessibility/formatting-tables
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 表の中のデータバーを『原則使わない』とする、見つかった唯一の直接の出典。理由は視認性とコントラスト（棒と背景、数値ラベルと棒の両方）。市の公開サービス向けの指針で、Power BI のテンプレートが前提。同じ節に『空のセルを作らず 0 か欠測の説明を書く』『新しい日付を上に並べる』もある。
- ライセンス: GitBook のページで、ライセンス表示は見つからなかった（未確認）。短い逐語引用に限る
- タグ: 表の中の図,データバー,アクセシビリティ

### S080 Stephen Few「Effectively Communicating Numbers」（表とグラフの使い分け）

> Tables work best when the display will be used to look up individual values or the quantitative values must be precise. Graphs work best when the message you wish to communicate resides in the shape of the data (that is, in patterns, trends, and exceptions).
>
> Bars encode data in a way that emphasizes individual values powerfully.

- 媒体・日付: Perceptual Edge ホワイトペーパー（© 2005）、取得 2026-11-16
- URL: https://www.perceptualedge.com/articles/Whitepapers/Communicating_Numbers.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 『値を引く・正確な値が要る』なら表、『形（傾向・例外）が伝えたい』ならグラフ、という使い分けの一次の記述。表のセルに図を足す判断（探す用途か、傾向を見る用途か）の根拠になる。
- タグ: 表の中の図,表とグラフ

### S081 Stephen Few「Intelligent Design: Tableau の並べ替え」（table lens 風の列ごとの棒）

> This type of display allows you to place several quantitative variables, all related to a common categorical variable, side by side, using bars to encode the data in a way that makes simple multivariate comparisons and correlations easy to see.
>
> The purpose is not to compare the magnitudes of the values across the variables, which is not possible because their quantitative scales are not the same

- 媒体・日付: Perceptual Edge Visual Business Intelligence Newsletter（© 2007）、取得 2026-11-16
- URL: https://www.perceptualedge.com/articles/visual_business_intelligence/intelligent_design-tableau3.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 行（共通の項目）ごとに複数の量を並べた『列ごとの棒』は、列どうしの傾向や相関を見る用途。列どうしの大きさは、尺度が違うので比べられない。表の複数の数値列に棒を付けるときの前提（尺度をそろえるか、傾向だけを見せる）。
- タグ: 表の中の図,データバー,比較

### S082 Cole Nussbaumer Knaflic「how I improved the table」（Storytelling with Data）

> I could apply heatmapping (using relative intensity of color to indicate relative value) to just those two columns.
>
> As another approach, I could embed horizontal bar charts in place of the heatmapping.
>
> However, the specific comparison between % Accounts and % Revenue for a given tier is harder, since these bars aren’t aligned to a common baseline.

- 媒体・日付: Storytelling with Data ブログ 2019-10-29（本人のサイト。書籍 Let's Practice! からの抜粋）、取得 2026-11-16
- URL: https://www.storytellingwithdata.com/blog/2019/10/29/how-i-improved-the-table
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 表の注目させたい 2 列だけに、色の濃さ（ヒートマップ）か埋め込み棒を使う例。棒は 2 列の分布の形の違いが見えるが、同じ行の 2 つの量の比較は共通の基準線が無いので難しい。区分 A は本人のサイトの逐語照合。ブログで、効果の実験は無い。
- タグ: 表の中の図,ヒートマップ,データバー

### S083 Primer（GitHub） relative-time（相対と日時の使い分け）

> Dates and times almost always appear relative to the current date, using short-hand formats to help users quickly determine how old something is or how soon something will be.
>
> For dates that are more than 1 month from the current date, it can be more useful to display the date-time, as these items are less "current" and more "historical".

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://primer.style/product/components/relative-time/
- URL（原稿）: https://raw.githubusercontent.com/primer/design/87f799f202ec95df15c99f473c9c0c803da8e6b3/content/components/relative-time.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 相対時刻を基本にしつつ、1 か月を超えたら日付に切り替える。『現在に近いものは相対、古いものは歴史＝日付』という切り替え方の例。
- ライセンス: primer/design: MIT
- タグ: 時間,相対時刻

### S084 Primer（GitHub） relative-time（正確な日時にすべきもの）

> Some dates are especially sensitive and always should be displayed in a precise date-time format, such as the creation or expiration of certificates and keys. When a user needs to take action before a particular time (such as an expiry date) then the precise date time should be displayed.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://primer.style/product/components/relative-time/
- URL（原稿）: https://raw.githubusercontent.com/primer/design/87f799f202ec95df15c99f473c9c0c803da8e6b3/content/components/relative-time.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 期限など『その時刻までに行動する』日時は、相対でなく正確な日時で示す。証明書・鍵の作成日と期限が例。
- ライセンス: primer/design: MIT
- タグ: 時間,期限

### S085 Primer（GitHub） relative-time（経過・残り）

> Some dates and times represent the start or (expected) end of an actively running task, for these the elapsed or remaining time should be displayed, as this information is more useful than when a task started.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://primer.style/product/components/relative-time/
- URL（原稿）: https://raw.githubusercontent.com/primer/design/87f799f202ec95df15c99f473c9c0c803da8e6b3/content/components/relative-time.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 実行中の処理は『いつ始まったか』でなく『何分経ったか／あと何分か』を出す。
- ライセンス: primer/design: MIT
- タグ: 時間,経過,残り

### S086 Primer（GitHub） relative-time（短縮表記と精密な日時の出し方）

> We encourage to use long date formats (e.g. 2 months ago) instead of the micro format (e.g. 2mo) on mobile screens or narrow spaces, as it can be difficult for users to understand, it doesn't support browser translation, and causes issues with assistive technologies.
>
> This means that by default, the component is not accessible to keyboard users, as there is no browser-native mechanism to show title tooltips when navigating with a keyboard.
>
> Whenever the shorter relative time is presented to the user, there is a way for users to see the precise localized date/time as well. This method must work for all users – including keyboard and screen reader users.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://primer.style/product/components/relative-time/
- URL（原稿）: https://raw.githubusercontent.com/primer/design/87f799f202ec95df15c99f473c9c0c803da8e6b3/content/components/relative-time.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「2mo」のような短縮は避ける。相対時刻の hover（title 属性）は keyboard 利用者に届かないので、詳細画面などに正確な日時を別途出す。
- ライセンス: primer/design: MIT
- タグ: 時間,相対時刻,アクセシビリティ

### S087 Primer（GitHub） timeline

> Timeline displays items on a connected vertical timeline. It's primarily used to document the history and activity of a given pull request or issue.
>
> The content within Timeline.Item should clearly communicate the status and state of that item

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://primer.style/product/components/timeline/
- URL（原稿）: https://raw.githubusercontent.com/primer/design/87f799f202ec95df15c99f473c9c0c803da8e6b3/content/components/timeline.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 縦のタイムラインは、1 件の対象（PR・Issue）の履歴と活動を記録する部品。各項目の文面が状態を伝えること（装飾の区切りは支援技術に伝わらない）。
- ライセンス: primer/design: MIT。原稿冒頭に『Guidelines for this component are in progress』の注記あり
- タグ: 履歴,タイムライン

### S088 Ant Design data-format（絶対時刻と相対時刻）

> Absolute time is for users with high time accuracy requirements, it emphasizes the precise time point of information release.
>
> To the users, the accuracy of time is not so important as the immediacy of the information.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://ant.design/docs/spec/data-format/
- URL（原稿）: https://raw.githubusercontent.com/ant-design/ant-design/615d1baef4a4d3197bd611651e6415d15d8bb4ca/docs/spec/data-format.en-US.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 絶対時刻は『正確さ』が要る利用者向け、相対時刻は『新しさ』が要る利用者向け。Cloudscape が『相対を既定』とするのに対し、Ant は相対を通知・メッセージに限る（S069）。どちらも製品の文脈の規則。
- ライセンス: ant-design: MIT
- タグ: 時間,相対時刻,絶対時刻

### S089 Cloudscape（AWS） patterns/general/timestamps（相対と絶対の使い分け）

> Users need to quickly see how long ago an event occurred, or how far in the future it will occur, and they don't need the specific datetime.
>
> Users need a specific date and time for when an event occurred or will occur.
>
> Relative timestamps are easier for users to read, so we recommend them for most use cases.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/patterns/general/timestamps/
- URL（原稿）: https://cloudscape.design/patterns/general/timestamps/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 相対は『どれくらい前か』、絶対は『いつか』を知りたいとき。既定は相対。S067 と同じ記述の別箇所。
- ライセンス: Cloudscape: components リポジトリのソースは Apache-2.0。cloudscape.design の文書本文には別の明示ライセンスが見つからず、フッターは (c) AWS・All rights reserved、利用条件は aws.amazon.com/terms。短い逐語引用に限る
- タグ: 時間,相対時刻,絶対時刻

### S090 Cloudscape（AWS） patterns/general/timestamps（ラベル・UTC・変更者）

> Timestamps should always be accompanied by a label that clearly and consistently describes what event the timestamp references.
>
> Always include the UTC offset, including for UTC itself.
>
> When it's important to identify who or what made a change, add the user or system's name after the timestamp and link to its profile.
>
> When reporting usage for billing, relative timestamps should use the same time unit as the resource is being billed at.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/patterns/general/timestamps/
- URL（原稿）: https://cloudscape.design/patterns/general/timestamps/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 時刻には『何の時刻か』のラベルを必ず付ける。UTC オフセットを常に書く。変更者は時刻の後ろに名前で足す。課金に関わる量は課金単位の時間で出す。
- ライセンス: Cloudscape: components リポジトリのソースは Apache-2.0。cloudscape.design の文書本文には別の明示ライセンスが見つからず、フッターは (c) AWS・All rights reserved、利用条件は aws.amazon.com/terms。短い逐語引用に限る
- タグ: 時間,ラベル,監査

### S091 UX Movement「Absolute vs. Relative Timestamps: When to Use Which」

> Use absolute timestamps when users can go back and make use of past content.
>
> Avoid confusing users by using a written date format on your timestamp.

- 媒体・日付: UX Movement 2015-05-19（サイト本人の記事）、取得 2026-11-16
- URL: https://uxmovement.com/content/absolute-vs-relative-timestamps-when-to-use-which/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 区分 A はサイト本人の記事の逐語照合。ただし個人ブログで調査の裏づけは無く、権威は弱い。『過去の内容を後から引く利用者には絶対時刻』『数字だけの日付は国で順序が違うので月名を書く』という実務の意見。PF の文面との一致に注意。
- タグ: 時間,絶対時刻

### S092 MDN time 要素

> It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.

- 媒体・日付: MDN、取得 2026-11-16
- URL: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 表示は相対でも、datetime 属性に機械可読の日時を持たせる実装の根拠（Cloudscape の time 要素の指示と対）。MDN の文章のライセンスは、取得したページの本文からは確認していない（未確認）。
- タグ: 時間,実装

## 空・エラー・読み込み

### S093 Cloudscape（AWS） components/table

> Use hyphen (-) for any empty values.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/components/table/
- URL（原稿）: https://cloudscape.design/components/table/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 空値はハイフンで示す。Primer は逆に『空欄のまま・ハイフンや x を使わない』と述べる（食い違い）。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 表,空値

### S094 Cloudscape（AWS） patterns/general/empty-states

> An empty state occurs when users haven't created a resource or have deleted all existing resources. A zero results state occurs when users have filtered and there are no matches.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/patterns/general/empty-states/
- URL（原稿）: https://cloudscape.design/patterns/general/empty-states/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 『まだ無い』と『絞り込んで 0 件』を別の状態として扱う。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 空

### S095 Primer（GitHub） data-table.mdx

> Just don't use a character like “x” or “-”. It creates a weird experience for assistive technologies like screen readers.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://primer.style/product/components/data-table/
- URL（原稿）: https://raw.githubusercontent.com/primer/design/87f799f202ec95df15c99f473c9c0c803da8e6b3/content/components/data-table.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 空セルは既定で空欄。必要なら不在を説明する文言を出す。記号（x や -）は使わない。Cloudscape（ハイフン）・antd（『-』『--』）と食い違う。
- ライセンス: primer/design: MIT
- タグ: 表,空値,食い違い

### S096 GitLab Pajamas table.md

> Null values should appear at the end of a sorted table in any sort direction.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://design.gitlab.com/components/table
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/bff0fc3abf26d0781f647590df68597976cb82b3/contents/components/table.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 並べ替えで空値は昇順・降順どちらでも末尾。理由: 『空値を順序から切り離し、一般的なデータツールの利用者の期待に合う』（原文）。
- ライセンス: design.gitlab.com: MIT
- タグ: 表,並べ替え,空値

### S097 GitLab Pajamas empty-states.md

> Try to limit to 5 words (not counting articles or prepositions).

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://design.gitlab.com/patterns/empty-states
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/bff0fc3abf26d0781f647590df68597976cb82b3/contents/patterns/empty-states.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 空の状態の見出しは 5 語程度まで・文末にピリオドを付けない。使用状況の分析（利用統計）を入れて改善する、という運用規則もある。
- ライセンス: design.gitlab.com: MIT
- タグ: 空,文言,数値

### S098 Ant Design data-format.en-US.md

> Display -- to express no-data status.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://ant.design/docs/spec/data-format/
- URL（原稿）: https://raw.githubusercontent.com/ant-design/ant-design/615d1baef4a4d3197bd611651e6415d15d8bb4ca/docs/spec/data-format.en-US.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 空値は『--』。data-display では『-』と書かれており、antd の中で表記が揺れている。
- ライセンス: ant-design: MIT
- タグ: 表,空値,食い違い

### S099 freee Vibes「コレクション画面」（空の状態 2 種）

> ユーザーが初めて機能を使う場合や、検索条件にマッチするオブジェクトが無い場合には 「検索条件に該当するオブジェクトが無いこと」を示したり、機能の説明をして使用を促したりするEmpty UIを用意してください。
> 一覧性を高めるために、フィルター部分の折り畳みを検討しても良いでしょう。

- 媒体・日付: freee/vibes examples/Collection.mdx、commit 94af08a397
- URL: https://github.com/freee/vibes/blob/94af08a3974e22d7629baa7a0c856ad2d9270aa2/examples/Collection.mdx
- URL（原稿）: https://raw.githubusercontent.com/freee/vibes/94af08a3974e22d7629baa7a0c856ad2d9270aa2/examples/Collection.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Apache License 2.0（リポジトリ直下の LICENSE.txt。2026-11-16 に確認）。引用可。
- 要旨: 初回で何も無い場合と検索結果が 0 件の場合の両方に空の画面を用意し、初回は機能の説明で使用を促す。詳細な絞り込み条件は一覧性のために折りたためる。SmartHR（S264）と同じく 2 種類の空を区別している。
- 使いどころ: 空の状態の 2 種。絞り込み条件の折りたたみ

### S100 ITmedia NEWS「使いにくい表・テーブル UI の改善点」（未設定と存在しない）

> 未設定は何も入力がない状態をそのまま示すとよいので空白のままでよいですが、存在しない項目は見る必要がないので「-」などの記号を入れるとよいでしょう。

- 媒体・日付: ITmedia NEWS（記者: 川村将人、ベイジの解説）、公開 2022-05-12・更新 2022-06-16
- URL: https://www.itmedia.co.jp/news/article/2205/12/1220512045/2
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ITmedia の記事。© ITmedia, Inc. 記事本文の転載はせず、1 から 3 文の引用にとどめる。署名記者による構成で、解説はベイジ（B2B SaaS・業務システムの UI/UX の制作会社）の知見。
- 要旨: 空欄には「未設定」と「そもそも存在しない」の 2 つの意味があり、前者は空白、後者は「-」と見分ける。SmartHR の空の項目の基準（S265）と一致する。
- 使いどころ: 空欄の見分け方（S265 と二重の根拠）

### S101 Kate Kaplan（Nielsen Norman Group）

> Inaccurate system-status messages for empty states are particularly harmful.

- 媒体・日付: NN/g「Designing Empty States in Complex Applications: 3 Guidelines」, 2021-09-19
- URL: https://www.nngroup.com/articles/empty-state-interface-design/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 空の状態の文言が実際の状態と違うと害が大きい（読み込み中か 0 件かを混同させない）。

### S102 Jakob Nielsen

> 1.0 second is about the limit for the user's flow of thought to stay uninterrupted, even though the user will notice the delay. Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second, but the user does lose the feeling of operating directly on the data.

- 媒体・日付: Nielsen Norman Group「Response Times: The 3 Important Limits」（掲載日 1993-01-01。1993 年の著書 Usability Engineering 第 5 章の抜粋）
- URL: https://www.nngroup.com/articles/response-times-3-important-limits/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 移し替え元: designer-interaction S02。1 秒: 流れが途切れない限界。元の備考: 1 秒の限界。0.1 秒を超えると「データを直接操作している感覚」が失われる

### S103 Jakob Nielsen

> 10 seconds is about the limit for keeping the user's attention focused on the dialogue. For longer delays, users will want to perform other tasks while waiting for the computer to finish, so they should be given feedback indicating when the computer expects to be done.

- 媒体・日付: Nielsen Norman Group「Response Times: The 3 Important Limits」（掲載日 1993-01-01。1993 年の著書 Usability Engineering 第 5 章の抜粋）
- URL: https://www.nngroup.com/articles/response-times-3-important-limits/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 移し替え元: designer-interaction S03。10 秒: 終了見込みの表示が要る。元の備考: 10 秒の限界。これを超える待ちには終了見込みのフィードバックを出す

### S104 Vercel（Web Interface Guidelines）

> Minimum loading-state duration. If you show a spinner/skeleton, add a short show-delay (~150–300 ms) & a minimum visible time (~300–500 ms) to avoid flicker on fast responses.

- 媒体・日付: Vercel「Web Interface Guidelines」（vercel.com/design/guidelines。改訂日の記載なし。自社の指針で、Web の標準ではない）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 移し替え元: designer-interaction S49。読み込み表示の出し始めの遅延と最短の表示時間（自社の目安）。元の備考: 読み込み表示の出し始めの遅延（約 150〜300 ms）と最短の表示時間（約 300〜500 ms）。「~」の付いた目安で、実験の値ではない

### S105 Vercel（Web Interface Guidelines）

> Stable skeletons. Skeletons mirror final content exactly to avoid layout shift.

- 媒体・日付: Vercel「Web Interface Guidelines」（vercel.com/design/guidelines。改訂日の記載なし。自社の指針で、Web の標準ではない）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 移し替え元: designer-interaction S56。スケルトンは最終の形と同じにしてずれを避ける。元の備考: スケルトンは最終の内容と同じ形にして、レイアウトのずれを避ける

### S106 Samhita Tankala（NN/g）

> If a page takes less than 1 second to load, skeleton screens or spinners aren’t necessary, as they likely won’t make a difference to the users’ experience.

- 媒体・日付: Nielsen Norman Group「Skeleton Screens 101」2023-06-04（最終確認 2026-09-02）
- URL: https://www.nngroup.com/articles/skeleton-screens/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 移し替え元: designer-interaction S106。1 秒未満ならスケルトンもスピナーも要らない。元の備考: 1 秒未満ならスケルトンもスピナーも不要。出すと画面が点滅して追いつけない感じになりうる（同記事）

### S107 Samhita Tankala（NN/g）

> Spinners or wait animations provide feedback to users that the system is working but don’t give any indication on how long users will have to wait; therefore, they are best used when the page takes 2–10 seconds to load. Similarly, skeleton screens should be used with a wait time that’s under 10 seconds. On the other hand, progress bars are strongly recommended for any page that takes longer that 10 seconds to load

- 媒体・日付: Nielsen Norman Group「Skeleton Screens 101」2023-06-04（最終確認 2026-09-02）
- URL: https://www.nngroup.com/articles/skeleton-screens/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 移し替え元: designer-interaction S107。スピナーは 2〜10 秒、進捗バーは 10 秒超。元の備考: スピナーは 2〜10 秒向け。スケルトンは 10 秒未満向け、進捗バーは 10 秒超（同記事）

## 絞り込み・一括操作

### S108 Cloudscape（AWS） components/table

> Only use filtering, pagination, and sorting if there are more than five items in the table.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/components/table/
- URL（原稿）: https://cloudscape.design/components/table/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 絞り込み・ページ送り・並べ替えは 5 件を超える表だけ。一度有効にしたら、絞り込みで 0 件になっても消さない（同ページの続く文）。数値は Cloudscape の目安で根拠の記載なし。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 表,数値,絞込

### S109 Cloudscape（AWS） components/table

> Don't show the number of selected items if nothing has been selected.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/components/table/
- URL（原稿）: https://cloudscape.design/components/table/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 選択 0 件のとき『0/150』を出さない。小さいが、状態表示の取捨選択（出さない情報）の好例。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 表,一括,取捨

### S110 Cloudscape（AWS） components/table

> To prevent users from performing actions on items they may not know are selected, reset item selection across pagination, sorting, filtering, page size changes, and collapsing an expandable row.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/components/table/
- URL（原稿）: https://cloudscape.design/components/table/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ページ送り・並べ替え・絞り込み・表示件数の変更で選択を解除する（見えていない行への一括操作を防ぐ）。PatternFly の bulk selection は選択を保持する設計で食い違う。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 表,一括

### S111 Carbon（IBM） usage.mdx

> Include up to five actions within the table toolbar. More actions can be made available through an overflow menu, combo button, or similar components.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.carbondesignsystem.com/building-blocks/core/components/data-table/guidelines
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/components/data-table/usage.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 表のツールバーの操作は 5 つまで。超えたらオーバーフローメニュー。
- ライセンス: carbon-website: Apache-2.0
- タグ: 表,操作,数値

### S112 Carbon（IBM） index.mdx

> If the filter(s) can be hidden in either a drawer, dropdown, or menu, then there should be an indicator visible on the closed filter state that informs the user that filters have been applied.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.carbondesignsystem.com/building-blocks/core/patterns/filtering
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/patterns/filtering/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 絞り込みを閉じた状態でも『適用中』が分かる印（最低でも適用数とクリア）を出す。
- ライセンス: carbon-website: Apache-2.0
- タグ: 絞込

### S113 PatternFly（Red Hat） bulk-selection.md

> In these instances, the selection state persists

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.patternfly.org/patterns/bulk-selection/
- URL（原稿）: https://raw.githubusercontent.com/patternfly/patternfly-org/73cec7b0348e1d49458c961896017340c55b7125/packages/documentation-site/patternfly-docs/content/patterns/bulk-selection/bulk-selection.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 全文は『…選択状態は、操作が終わった後も、利用者が意図的に変えるまで保持される』。Cloudscape の『ページ送り・並べ替えで選択を解除』と食い違う。
- ライセンス: patternfly-org: MIT
- タグ: 一括,食い違い

### S114 PatternFly（Red Hat） filters.md

> Filters between attribute categories should be combined with a boolean “AND” operator.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.patternfly.org/patterns/filters/
- URL（原稿）: https://raw.githubusercontent.com/patternfly/patternfly-org/73cec7b0348e1d49458c961896017340c55b7125/packages/documentation-site/patternfly-docs/content/patterns/filters/filters.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 属性が異なる絞り込みは AND、同じ属性内は OR で結ぶ。適用中の条件はラベルで見せ、個別に外せる。
- ライセンス: patternfly-org: MIT
- タグ: 絞込

### S115 GitLab Pajamas table.md

> These actions should be visible at all times rather than showing on-hover.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://design.gitlab.com/components/table
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/bff0fc3abf26d0781f647590df68597976cb82b3/contents/components/table.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 行の操作は常に表示し、hover で出さない。見出し『Actions』を付ける。Carbon は既定で常時表示・hover 表示も選べる、と両方を認める。
- ライセンス: design.gitlab.com: MIT
- タグ: 表,操作

### S116 デジタル庁デザインシステムβ版「テーブル／データテーブル（使い方）」（並べ替え・全選択）

> ソート可能な列のヘッダーセルを下線つきテキストで表示します。
> ソートが可能であることを示すためにソートアイコンを表示します。
> この状態でテーブルヘッダーのチェックボックスを選択した場合、すべての行が選択されます。

- 媒体・日付: デジタル庁デザインシステムβ版 v2.18.2、ページ更新 2026-10-14
- URL: https://design.digital.go.jp/dads/components/table/usage/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: デジタル庁デザインシステムの出典記載の規定（利用上の注意事項）に従い、出典を示して短く引用する。編集・加工はしない。
- 要旨: 並べ替えできる列は見出しに下線、昇順・降順・未適用の 3 通りのアイコンで状態を示す。選択済みと未選択が混在するとき、見出しのチェックボックスはマイナス表示になり、押すと全行が選択される。SmartHR（S269）は同じ操作で全解除になる。
- 使いどころ: ソート表示の約束事。全選択の挙動の流派差（S269）

### S117 freee Vibes（フリー株式会社のデザインシステム）「コレクション画面」の構成

> コレクション画面は以下の3種類のエリアに分解されます
> フィルターされたオブジェクトの表示エリア
> フィルターされたオブジェクトに対する操作エリア
> オブジェクト全体に対する操作エリア

- 媒体・日付: freee/vibes examples/Collection.mdx、commit 94af08a397（コミット日 2024-01-19）
- URL: https://github.com/freee/vibes/blob/94af08a3974e22d7629baa7a0c856ad2d9270aa2/examples/Collection.mdx
- URL（原稿）: https://raw.githubusercontent.com/freee/vibes/94af08a3974e22d7629baa7a0c856ad2d9270aa2/examples/Collection.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Apache License 2.0（リポジトリ直下の LICENSE.txt。2026-11-16 に確認）。引用可。
- 要旨: 一覧画面を「絞り込んだ結果の表示」「絞り込んだ結果への操作（一括操作・件数変更・エクスポート）」「全体への操作（新規作成・インポート・フィルター操作）」の 3 エリアに分ける。SmartHR の表の周りの 2 分類（S256）に近いが、操作の対象範囲（絞り込み結果か全体か）で切る点が異なる。
- 使いどころ: 一覧画面のエリア分け。対象範囲で操作を分ける考え方

### S118 freee Vibes「コレクション画面」（表の作り）

> 可能なかぎりすべてのカラムをソート可能にしてください
> データの表示条件（フィルタ、ソート、ページングなど）が変更された場合、チェックボックスを未選択状態に戻してください
> いわゆる「無限スクロール」にはしないでください

- 媒体・日付: freee/vibes examples/Collection.mdx、commit 94af08a397
- URL: https://github.com/freee/vibes/blob/94af08a3974e22d7629baa7a0c856ad2d9270aa2/examples/Collection.mdx
- URL（原稿）: https://raw.githubusercontent.com/freee/vibes/94af08a3974e22d7629baa7a0c856ad2d9270aa2/examples/Collection.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Apache License 2.0（リポジトリ直下の LICENSE.txt。2026-11-16 に確認）。引用可。
- 要旨: 全列をできるだけ並べ替え可能にし、条件を変えたら選択を戻し、無限スクロールではなくページャーを使う。SmartHR（S256・S267）は件数を 20〜50 件のページ送りとしており、無限スクロールを避ける点は共通。
- 使いどころ: 表の標準仕様（ソート・選択の初期化・ページング）

### S119 freee Vibes「コレクション画面」（行クリックと行内ボタン）

> 各行をクリックすることで、それぞれのオブジェクト個別の画面（シングル画面）に遷移させるか、シングルを表現するダイアログを開くことができます
> ただし、それらのアクションはシングル画面やダイアログでも実行可能にしてください。

- 媒体・日付: freee/vibes examples/Collection.mdx、commit 94af08a397
- URL: https://github.com/freee/vibes/blob/94af08a3974e22d7629baa7a0c856ad2d9270aa2/examples/Collection.mdx
- URL（原稿）: https://raw.githubusercontent.com/freee/vibes/94af08a3974e22d7629baa7a0c856ad2d9270aa2/examples/Collection.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Apache License 2.0（リポジトリ直下の LICENSE.txt。2026-11-16 に確認）。引用可。
- 要旨: 行クリックで個別画面かダイアログへ入れる。行内のショートカットボタンは許すが、同じ操作を個別画面でも必ずできるようにする。行全体のリンクを不可とするデジタル庁（S020）や、名前リンクだけを入口にする SmartHR（S259）とは入口の考え方が異なる。
- 使いどころ: 詳細への入り方の流派差

### S120 freee Vibes「インポートウィザード」

> アップロードされたファイルの内容から、インポート後の状態を表示しています。エラーがある場合には MessageIcon で表現してください。
> インポート作業を実行中のステップです。前のステップには戻れなくなっています。

- 媒体・日付: freee/vibes examples/ImportWizard.mdx、commit 94af08a397
- URL: https://github.com/freee/vibes/blob/94af08a3974e22d7629baa7a0c856ad2d9270aa2/examples/ImportWizard.mdx
- URL（原稿）: https://raw.githubusercontent.com/freee/vibes/94af08a3974e22d7629baa7a0c856ad2d9270aa2/examples/ImportWizard.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Apache License 2.0（リポジトリ直下の LICENSE.txt。2026-11-16 に確認）。引用可。
- 要旨: ファイルの取り込みを、準備・内容確認・実行中・完了の 4 ステップにし、実行前に取り込み後の状態とエラーを見せ、実行中は戻れなくする。CSV 取り込みが日常業務である国内の管理画面で、確認画面の置き所の手本になる。
- 使いどころ: CSV 取り込みの確認ステップ（S271 と併せる）

### S121 ITmedia NEWS「使いにくい表・テーブル UI の改善点」（一括操作の近接・非活性）

> チェックボックスで選択中の件数を併せて表示するとより関連性が分かりやすくなります。
> ボタンを非表示にしてしまうと、機能があること自体に気付けなくなる可能性があるため、非活性がおすすめです。

- 媒体・日付: ITmedia NEWS（記者: 川村将人、ベイジの解説）、公開 2022-05-12・更新 2022-06-16
- URL: https://www.itmedia.co.jp/news/article/2205/12/1220512045/2
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ITmedia の記事。© ITmedia, Inc. 記事本文の転載はせず、1 から 3 文の引用にとどめる。署名記者による構成で、解説はベイジ（B2B SaaS・業務システムの UI/UX の制作会社）の知見。
- 要旨: 一括操作のボタンは選択チェックボックスの近くに置き、選択件数を併せて出し、未選択のときは非表示にせず押せない状態（非活性）にする。SmartHR（S268）は未選択時の文言を用意し、一括操作エリアの常時表示を条件付きで勧める。
- 使いどころ: 一括操作の見せ方。S268 と対比

### S122 ITmedia NEWS「6 つの NG ボタン」（ボタンの強弱と数）

> Primaryは1画面の中に1～2個に留め、その他はサブ機能としてSecondary以降を使います。
> 画面がボタンでいっぱいになってしまった時はこのような視点で整理し、ぐっと使いやすい機能の実現を目指しましょう。

- 媒体・日付: ITmedia NEWS（記者: 天野謙作、ベイジの解説）、公開 2022-04-21
- URL: https://www.itmedia.co.jp/news/article/2204/19/1220419086/2
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ITmedia の記事。© ITmedia, Inc. 記事本文の転載はせず、1 から 3 文の引用にとどめる。署名記者による構成で、解説はベイジ（B2B SaaS・業務システムの UI/UX の制作会社）の知見。
- 要旨: ボタンは主・副・三次の 3 段で重要度を付け、主は 1 画面に 1 から 2 個。B2B SaaS は機能が増えてボタンであふれやすいという前提から、整理の視点を示す。
- 使いどころ: ボタンの強弱。機能追加でボタンが増える失敗

### S123 ITmedia NEWS「6 つの NG ボタン」（今使えないボタン）

> ステータスが変わると使えるようになることを伝えたいなら、非活性ボタン（表示はするが押せないボタン）を採用しましょう。
> 「削除」など注意が必要なボタンは赤字にします。赤字を認識しにくいユーザーでも分かるようにアイコンもつけるとより効果的です。

- 媒体・日付: ITmedia NEWS（記者: 天野謙作、ベイジの解説）、公開 2022-04-21
- URL: https://www.itmedia.co.jp/news/article/2204/19/1220419086/2
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ITmedia の記事。© ITmedia, Inc. 記事本文の転載はせず、1 から 3 文の引用にとどめる。署名記者による構成で、解説はベイジ（B2B SaaS・業務システムの UI/UX の制作会社）の知見。
- 要旨: 現在の状態で使えない操作は、原則は非表示。業務上これから使えるようになることを見せたいときは非活性にする。危険なボタンは赤と、色だけに頼らないアイコンで示す。S121 の「一括操作は非活性」と、状態によっては非表示という使い分けがある。
- 使いどころ: 状態に応じた操作の出し分け

### S124 ITmedia NEWS「6 つの NG ボタン」（ラベル）

> 「処理」「実行」など操作の対象が不明瞭でシステム目線のラベルも、ユーザーには何が起こるのか伝わりにくいので避けた方がよいでしょう。

- 媒体・日付: ITmedia NEWS（記者: 天野謙作、ベイジの解説）、公開 2022-04-21
- URL: https://www.itmedia.co.jp/news/article/2204/19/1220419086/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ITmedia の記事。© ITmedia, Inc. 記事本文の転載はせず、1 から 3 文の引用にとどめる。署名記者による構成で、解説はベイジ（B2B SaaS・業務システムの UI/UX の制作会社）の知見。
- 要旨: 「処理」「実行」のようなシステム目線のラベルや、名詞 1 語のラベルは何が起こるか分からない。「メール送信」を「メール作成」へ直す例のように、押した結果とラベルのずれを無くす。
- 使いどころ: ボタンの文言。SmartHR（S278）の短い動詞と併せて使う

### S125 ITmedia NEWS「6 つの NG ボタン」（配置と危険な操作）

> 内容の変更を伴わない「印刷」「操作履歴」のような機能は画面上部に、内容の変更に関わる「編集」「削除」などは画面下部に。

- 媒体・日付: ITmedia NEWS（記者: 天野謙作、ベイジの解説）、公開 2022-04-21
- URL: https://www.itmedia.co.jp/news/article/2204/19/1220419086/2
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ITmedia の記事。© ITmedia, Inc. 記事本文の転載はせず、1 から 3 文の引用にとどめる。署名記者による構成で、解説はベイジ（B2B SaaS・業務システムの UI/UX の制作会社）の知見。
- 要旨: 参照系の操作は画面上部、変更・削除は画面下部へ置く、という配置案。破壊的な操作を詳細ビューの見出し側のドロップダウンに入れる SmartHR（S259）とは配置の考え方が違い、どちらも「危険な操作を目立つ主操作から離す」点で共通する。
- 使いどころ: 危険な操作の置き場所の流派差

### S126 SOMPO Digital Lab デザインチーム（UI デザイナー）「データを操作するアプリケーションのデザイン・開発しやすさと使いやすさを実現する 71 のポイント」（表示）

> 文字量は全部表示されるか、省略されるか？省略される場合は全量はどこで確認できるか？
> ０or何も入ってないときはどう表示されるか？
> 表示したい項目を選択できる必要はあるか？

- 媒体・日付: note、2023-03-22
- URL: https://note.com/sompo_sprint/n/n0be82318f59a
- 取得日: 2026-11-16
- 検証区分: A
- 備考: note の記事。1 から 3 文の引用にとどめる。
- 要旨: データを操作する画面で抜けやすい検討事項を、チェック項目として列挙した記事（見た目の配色やボタンの大きさは対象外と明記）。表示では、文字量の処理、空の値、列の選択の要否が項目に挙がる。答えを示すのではなく「聞くべき問い」の一覧として使える。
- 使いどころ: 設計レビューの問いの一覧（一覧・詳細）

### S127 SOMPO Digital Lab デザインチーム「71 のポイント」（一覧の操作と保持）

> 列の一部を固定表示させる必要はあるか？
> 一括操作ボタンは選択後活性化する挙動になっているか？
> 一度設定した表示内容の順番や条件はどこまで保持されるか？
> エンプティステートは考えられているか？

- 媒体・日付: note、2023-03-22
- URL: https://note.com/sompo_sprint/n/n0be82318f59a
- 取得日: 2026-11-16
- 検証区分: A
- 備考: note の記事。短い引用にとどめる。
- 要旨: 一覧の操作面では、列固定、一括操作の活性化、設定した表示順・条件の保持範囲、空の状態を問いとして挙げる。「保持」は他の指針があまり扱わない論点。
- 使いどころ: 保存したビュー・条件の保持の論点

### S128 GENIEE SFA/CRM のプロダクトデザイナー「業務システムのフロントリニューアルで重視していること」（一覧から離れずに進める）

> 管理者や営業担当者など、役職ごとにその画面でどこまでの業務をしたいのかは変わってきます。
> 業務フローは、どんな組織も必ずこのフローで業務を進めるというものはなく、組織ごとに正解が違います。

- 媒体・日付: Zenn（GENIEE TechBlog）、2025-04-18
- URL: https://zenn.dev/geniee/articles/b1573d1aff7a42
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Zenn の記事。短い引用にとどめる。
- 要旨: 役職ごとに一覧でやりたい作業の範囲が違うため、一覧から遷移せず業務を進められることを重視した。業務の流れは組織ごとに違うので、並び替え・名前の変更など利用者側のカスタマイズ性も業務システムの要点とする。ユーザーインタビューで「見たいリストを複数ブックマークしておく運用」を見つけてタブ化した話も含む。
- 使いどころ: 役割別の一覧の出し方。保存したビューの根拠

### S129 Rachel Krause（Nielsen Norman Group）

> provide a Select All option, use a contextual action bar, and give users clear feedback with the option to undo actions

- 媒体・日付: NN/g「Bulk Actions: 3 Design Guidelines」（動画）, 2025-03-17（ページ表示）
- URL: https://www.nngroup.com/videos/bulk-actions-design-guidelines/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 一括操作の 3 指針（全選択・選択時に現れる操作バー・結果の明示と取り消し）。

### S130 Pencil & Paper（デザイン会社）

> It’s also important to make sure you provide an option to reset the view to its original (a.k.a default or full) state.

- 媒体・日付: Pencil & Paper「Data Table UX Patterns & Best Practices」（日付はページに明記なし）
- URL: https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 保存したビューを持つなら初期状態へ戻す手段も置く。

### S131 Kate Moran（Nielsen Norman Group）

> Relevance to users is the ultimate prioritization criterion.

- 媒体・日付: NN/g「Defining Helpful Filter Categories and Values for Better UX」, 2018-07-15
- URL: https://www.nngroup.com/articles/filter-categories-values/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 絞り込みの項目と値の並びは、利用者にとっての関連で決める。

### S132 Kate Moran（Nielsen Norman Group）

> Unintelligible jargon has no place in filters.

- 媒体・日付: 同上（S131）
- URL: https://www.nngroup.com/articles/filter-categories-values/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 内部コードの値を絞り込みの表示にそのまま出さない。業務画面では内部用語の露出に当たる。

### S133 Therese Fessenden（Nielsen Norman Group）

> Whenever there is a chance that users’ work be lost or that an action may have destructive, irreversible consequences, interrupt the users to avoid a disaster.

- 媒体・日付: NN/g「Modal & Nonmodal Dialogs: When (& When Not) to Use Them」, 2017-04-23
- URL: https://www.nngroup.com/articles/modal-nonmodal-dialog/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 取り返しのつかない操作だけは中断して確認する。S046 の「深い編集にモーダルは勧めない」と対になる。

### S134 Jakob Nielsen（Nielsen Norman Group）

> Do not use confirmation dialogs for routine actions

- 媒体・日付: NN/g「Confirmation Dialogs Can Prevent User Errors — If Not Overused」
- URL: https://www.nngroup.com/articles/confirmation-dialog/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 日常の操作に確認を付けない。取り消し（undo）を用意する方がよい、と同記事が続ける。日付はページから取っていない。

## 密度・熟練者

### S135 Cloudscape（AWS） foundation/visual-foundation/content-density

> Always set comfortable mode as default. Comfortable mode is the default density level of Cloudscape. Compact mode can hinder readability, overwhelm, and prolong content consumption.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/foundation/visual-foundation/content-density/
- URL（原稿）: https://cloudscape.design/foundation/visual-foundation/content-density/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 密度は既定を『ゆったり』にし、利用者が切り替えられるようにする。Polaris は管理画面を『既定で高密度』とし、立場が異なる。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: 密度

### S136 Carbon（IBM） style.mdx

> Extra small (xs) | 24 / 1.5 | | Small (sm) | 32 / 2 | | Medium (md) | 40 / 2.5 | | Large (lg) | 48 / 3 | | Extra large (xl) | 64 / 4

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.carbondesignsystem.com/building-blocks/core/components/data-table/specifications
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/components/data-table/style.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 行の高さは 24 / 32 / 40 / 48 / 64 px の 5 段（rem 併記）。公開された密度の段階の数値の中でも具体的な例。
- ライセンス: carbon-website: Apache-2.0
- タグ: 表,密度,数値

### S137 PatternFly（Red Hat） table.md

> You use many visual indicators that are placed in columns, such as icons or charts.
>
> If your table needs more space for many rows or for rich graphical data, use default spacing.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.patternfly.org/components/table/design-guidelines/
- URL（原稿）: https://raw.githubusercontent.com/patternfly/patternfly-org/73cec7b0348e1d49458c961896017340c55b7125/packages/documentation-site/patternfly-docs/content/components/table/table.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 表の列に印や図を置くなら標準間隔を使う、という条件。表の中の視覚化を認める立場（Cloudscape の『図は表に入れない』と食い違う）。
- ライセンス: patternfly-org: MIT
- タグ: 表,密度,視覚化

### S138 デジタル庁デザインシステムβ版「テーブル／データテーブル（使い方）」（密度と配置）

> DefaultおよびDenseが用意されています。扱うデータの量が多く、画面内にできるだけ多くの情報を表示したい場合にはDenseを選択できます。
> ただし、タッチインタフェースが想定される際には、Denseだと狭くて操作が難しい場合があることに留意してください。
> 縦方向は上寄せにしてください。
> 横方向は値によって左寄せまたは右寄せにしてください。通常は左寄せですが、数値や日付等の場合に右寄せとすることがあります。

- 媒体・日付: デジタル庁デザインシステムβ版 v2.18.2、ページ更新 2026-10-14
- URL: https://design.digital.go.jp/dads/components/table/usage/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: デジタル庁デザインシステムの出典記載の規定（利用上の注意事項）に従い、出典を示して短く引用する。編集・加工はしない。
- 要旨: 行の高さに Default と Dense の 2 段を用意し、量が多いときは Dense を選べるとする一方、タッチ操作では狭すぎる点に注意を促す。縦は上寄せ、横は通常左寄せで数値や日付は右寄せ。数値は右揃えとするベイジ（S023）と近いが、日付も右揃えの候補に挙げる点が異なる。
- 使いどころ: 行密度の段階と文字揃え。数値と日付の揃え

### S139 ispec inc. のデザイナー・エンジニア「Table 選択動作の UI/UX 考察」（社内デザインシステムの検討）

> 多くのWebシステムでは、Table行全体をクリックできる仕様は少なく、特定の要素（タイトルやボタン）をクリックしてアクションを発生させる設計が一般的です。
> 一見、行全体がクリックできそうですが、実際にはそうではありません。この原因は、ハイライトの強調が誤解を生むことにあります。

- 媒体・日付: Zenn（ispec inc.）、2024-12-20
- URL: https://zenn.dev/ispec_inc/articles/b73ca84a34a26a
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Zenn の記事。短い引用にとどめる。
- 要旨: 行全体のクリックを許すか、タイトルやボタンだけを操作可能にするかを GitHub と Spotify の実例で検討した記録。行のホバーを強い色で強調すると押せると誤解されるので、控えめな濃淡にする、と結論づける。S020・S119 の流派差に対する第三の観点（ホバー強調の誤解）。
- 使いどころ: 行のホバー表現と押せる範囲

### S140 freee 株式会社のプロダクトデザイナー（登壇当時はプロダクトマネージャー）JaSST 新潟 2025 登壇資料「自分たちがターゲットになりにくい業務アプリケーションのユーザビリティを担保する取り組み」（企画時の要求）

> マウス操作なくテンキーで業務を完結できる
> 「手入力での記帳代行業務」が「既存ソフトと比較して遜色ない状態」でできる

- 媒体・日付: JaSST 新潟 2025 登壇資料、2025-09-12
- URL: https://jasst.jp/wp_download/jasst25niigata/report_2_jasst25Niigata.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 登壇資料（PDF、freee 株式会社の元プロダクトデザイナー、2025-09-12）。短い引用にとどめる。資料内の利用者の発言と書籍の引用は発表者本人の発言ではない。資料自体が「N＝1 の話として聞いてください」と前置きしている。
- 要旨: 会計事務所向けの記帳画面を作る企画時の要求として、既存の会計ソフトと遜色なく、マウスを使わずテンキーで完結できることが挙がっていた。紙の資料を見ながら打ち続ける熟練者が相手で、「操作できる」ではなく「同じ速さで打てる」が合格の基準になる事例。
- 使いどころ: 熟練者・高密度・キーボード操作の国内事例（N=1 の事例として）

### S141 freee 登壇資料（JaSST 新潟 2025）（インタラクションの要件）

> セル間のキーボード移動の順番とタイミング
> Enterでの確定、Tab移動、保存のタイミングは？
> マウスを使わない、キーボード操作を優先的なユースケースとしている

- 媒体・日付: JaSST 新潟 2025 登壇資料、2025-09-12
- URL: https://jasst.jp/wp_download/jasst25niigata/report_2_jasst25Niigata.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 登壇資料（PDF、freee 株式会社の元プロダクトデザイナー、2025-09-12）。短い引用にとどめる。資料内の利用者の発言と書籍の引用は発表者本人の発言ではない。資料自体が「N＝1 の話として聞いてください」と前置きしている。
- 要旨: 表のような入力画面では、セル間のキー移動の順番、Enter での確定、Tab での移動、保存のタイミングを要件として先に決める。静止画の Figma では伝えにくいため、実例マッピングで例を挙げて合意した、という進め方。
- 使いどころ: 表入力のキーボード仕様を要件に入れる進め方

### S142 Kate Kaplan（Nielsen Norman Group）

> Help users manage the choice, feature and function overload prevalent within complex applications by minimizing the appearance of clutter within the interface without reducing the capability of the application.

- 媒体・日付: NN/g「Design Guidelines for Complex Applications」, 2020-11-08
- URL: https://www.nngroup.com/articles/complex-application-design/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 機能を減らさずに見かけの散らかりを減らす（段階的開示）。指針 6。

### S143 Rachel Krause・Aurora Harley（Nielsen Norman Group）

> Accelerators should be additional, alternate ways to accomplish a task — something that expert users can take advantage of, but that others can ignore completely.

- 媒体・日付: NN/g「Accelerators Maximize Efficiency in User Interfaces」, 2024-10-18
- URL: https://www.nngroup.com/articles/ui-accelerators/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ショートカットは追加の近道であって、唯一の入口にしない。

### S144 Rachel Krause・Aurora Harley（Nielsen Norman Group）

> Not all actions within a system need an accelerator.

- 媒体・日付: NN/g「Accelerators Maximize Efficiency in User Interfaces」, 2024-10-18
- URL: https://www.nngroup.com/articles/ui-accelerators/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 近道は繰り返す作業にだけ。全部に付けない。

### S145 Kate Kaplan（Nielsen Norman Group）

> Complex applications — like those used in specialized domains such as healthcare, finance, or logistics — support nonlinear workflows, expert users, and high-stakes decisions.

- 媒体・日付: NN/g「UX Strategies for Complex-Application Design」, 2025-07-25
- URL: https://www.nngroup.com/articles/strategies-complex-application-design/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 業務画面の利用者像。非線形の作業・熟練者・取り返しのつかない判断。

### S146 Pencil & Paper（デザイン会社）

> Typically, row density gravitates around these pixel measures: Condensed: 40px Regular: 48px Relaxed: 56px

- 媒体・日付: Pencil & Paper「Data Table UX Patterns & Best Practices」（日付はページに明記なし）
- URL: https://www.pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 行の高さの典型値（40・48・56px）。この会社の経験則であり規格ではない。

### S147 Matt Ström-Awn

> Interfaces are becoming less dense.

- 媒体・日付: 「UI Density」, 2024-05-20
- URL: https://matthewstrom.com/writing/ui-density/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 2000 年代と比べてソフトウェアが広がっていることへの観察。反動の議論の起点。

### S148 Matt Ström-Awn

> Visual density — our first, instinctual judgement of density — is unpredictable.

- 媒体・日付: 「UI Density」, 2024-05-20
- URL: https://matthewstrom.com/writing/ui-density/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 見た目の密度の第一印象は当てにならない（同じ点の数でも並べ方で変わる）。密度を情報量で語る必要の根拠。

### S149 Matt Ström-Awn

> Every bit of ink on a graphic requires reason. And nearly always that reason should be that the ink presents new information.

- 媒体・日付: 「UI Density」, 2024-05-20
- URL: https://matthewstrom.com/writing/ui-density/
- 取得日: 2026-11-16
- 検証区分: B
- 備考: Tufte の言葉を Ström-Awn が引いたもの（原典 The Visual Display of Quantitative Information との照合なし）。

### S150 Matt Ström-Awn

> The audience matters, too: A bond trader at their 4-monitor desk will have a pretty high threshold; a 2nd grader reading a textbook will have a low one.

- 媒体・日付: 「UI Density」, 2024-05-20
- URL: https://matthewstrom.com/writing/ui-density/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 密度の上限は利用者で変わる。熟練の業務利用者は高密度に耐える。

### S151 Peter Hilton

> Increasing the information density enables human analysis, not only simplified conclusions.

- 媒体・日付: 「Increase UI information density」, 2026-05-12（ページ表示）
- URL: https://hilton.org.uk/blog/information-density
- 取得日: 2026-11-16
- 検証区分: C
- 備考: 密度は分析を可能にする、という Tufte 由来の擁護。個人の論評。（サイトは CC BY-NC-SA 4.0。短い引用にとどめる。）

### S152 Karri Saarinen ほか（Linear）

> We’ve adjusted the sidebar, tabs, headers, and panels to reduce visual noise, maintain visual alignment, and increase the hierarchy and density of navigation elements.

- 媒体・日付: Linear「How we redesigned the Linear UI (part II)」, 2024-03-28
- URL: https://linear.app/now/how-we-redesigned-the-linear-ui
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 業務ツールの刷新で、ノイズを減らしつつ密度を上げた例。

### S153 Linear チーム

> We tested a lot of options, from very condensed to more spacious configurations.

- 媒体・日付: Linear「How we redesigned the Linear UI (part II)」, 2024-03-28
- URL: https://linear.app/now/how-we-redesigned-the-linear-ui
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 密度は試して決める、という過程の一文。

### S154 Tim Boucher（Superhuman）

> With a command palette, you can build — and your users can discover — features that could never warrant a button or a dropdown.

- 媒体・日付: Superhuman blog「How to build a remarkable command palette」, 2019-03-19
- URL: https://blog.superhuman.com/how-to-build-a-remarkable-command-palette/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: コマンドパレットは画面を散らさずに機能を足せる。製品側の主張（自社の機能の宣伝を含む）。

### S155 Tim Boucher（Superhuman）

> With a command palette, keyboard shortcuts are easy to discover and explore.

- 媒体・日付: Superhuman blog「How to build a remarkable command palette」, 2019-03-19
- URL: https://blog.superhuman.com/how-to-build-a-remarkable-command-palette/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: パレットでショートカットを教える。NN/g のアクセラレーターの議論（S143）と対応。

### S156 Rain Noe（Core77 記者）

> The Bloomberg Terminal interface looks terrible, but it allows traders and other users to pretend you need to be experienced and knowledgeable to use it.

- 媒体・日付: 同上（S032）
- URL: https://core77.com/posts/24893/moneymaking-multi-monitor-mayhem-and-why-some-prefer-interface-design-that-sucks-24893
- 取得日: 2026-11-16
- 検証区分: C
- 備考: Core77 記者自身の論評（UX Magazine の引用ではない）。熟練を装える画面という推測で、実証ではない。

## 文言・国内の表記

### S157 デジタル庁デザインシステムβ版「日付ピッカー／カレンダー」（使い方）

> 一方で、特定可能な既知の日付を入力させる場面ではうまく機能しません。
> たとえば、生年月日、履歴書の経歴年月、クレジットカードの有効期限の入力のためには、直接入力のフィールドが有用です。
> 和暦に対応した日付ピッカーは、現時点でデジタル庁デザインシステムでは提供していません。（今後対応予定）
> プレースホルダーテキストは使用しません。

- 媒体・日付: デジタル庁デザインシステムβ版、ページ更新 2025-10-29
- URL: https://design.digital.go.jp/dads/components/date-picker/usage/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: デジタル庁デザインシステムの出典記載の規定（利用上の注意事項）に従い、出典を示して短く引用する。編集・加工はしない。
- 要旨: カレンダーは前後を見ながら選ぶ短い期間の入力（イベント日・宿泊期間）には向くが、生年月日のように既知の日付には向かず、直接入力にする。年フィールドが西暦であることと入力例をサポートテキストで示し、プレースホルダーは使わない。和暦のピッカーは当時未提供と明記しており、SmartHR（S277）が用意している点と差がある。
- 使いどころ: 日付入力の選び方。管理画面の絞り込み条件・登録フォームへの転用

### S158 ITmedia NEWS「住所入力の全角・半角問題はなぜなくならないのか」（グレープシティ社員の見解）

> 若生さんによれば、この傾向は特に業務システムの入力フォームに多いという。
> 「BtoCの場合、ユーザーに離脱されると商売にならないので問題意識が高い傾向があるが（そういった懸念のない）社員向け業務システムなどの入力フォームはユーザーに負担を強いる場合が多い」

- 媒体・日付: ITmedia NEWS（記者: 吉川大貴）、公開 2021-11-05・更新 2021-12-02
- URL: https://www.itmedia.co.jp/news/articles/2111/05/news079.html
- 取得日: 2026-11-16
- 検証区分: C
- 備考: ITmedia の記事。© ITmedia, Inc. 記事本文の転載はせず、1 から 3 文の引用にとどめる。署名記者による構成で、解説はベイジ（B2B SaaS・業務システムの UI/UX の制作会社）の知見。
- 要旨: 全角・半角の入力制約を、社員向けの業務システムが利用者に押し付けやすい構造の説明。発言者は入力補正ライブラリ（InputManJS）を売る会社の製品企画担当で、利益相反がある。区分 C（見解）として扱い、事実とはしない。
- 使いどころ: 全角・半角の入力補正を設計に入れる根拠（見解として）

### S159 Kate Kaplan（Nielsen Norman Group）

> Practitioners of complex apps often defer to legacy approaches or institutionalized power sources because they feel they cannot fight them, even when they are suboptimal.

- 媒体・日付: NN/g「Complex Application Design: A 5-Layer Framework」
- URL: https://www.nngroup.com/articles/complex-application-design-framework/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 業務画面の設計者が組織の旧来のやり方に従いがちだという観察。5 つの複雑さ（統合・情報・意図・環境・制度）の「制度」の節。日付はページから取っていない。

## ダッシュボードと指標

### S160 Cloudscape（AWS） patterns/general/service-dashboard/static-dashboard

> The objective of the content on a dashboard page is to provide information that can be consumed quickly, with minimum interactions or cognitive processing. Users should glance at the dashboard and immediately see answers to questions.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/patterns/general/service-dashboard/static-dashboard/
- URL（原稿）: https://cloudscape.design/patterns/general/service-dashboard/static-dashboard/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ダッシュボードの目的は『一目で答えが分かる』こと。続いて、Highlight・Focus・Usage across devices・Frequency・Context の 5 つの問いで内容を決める。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: ダッシュボード,取捨

### S161 Cloudscape（AWS） patterns/general/service-dashboard/static-dashboard

> Cognitive best practices consider seven (plus or minus two) as the number of images a brain can comprehend in one time. Consider seven as the limit number for data representation in your dashboard, as well as of items within a list or a graph.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/patterns/general/service-dashboard/static-dashboard/
- URL（原稿）: https://cloudscape.design/patterns/general/service-dashboard/static-dashboard/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 『7 つまで』の根拠は一般的な認知の知見とだけ述べ、出典を示さない。7±2 は短期記憶の容量に関する知見で、画面の要素数の上限としての適用は一般に疑問視されている（この台帳の外の見解）。antd も『5〜9』を挙げる。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: ダッシュボード,数値,取捨

### S162 Cloudscape（AWS） patterns/general/service-dashboard/dashboard-items

> Don't combine more than two different types of data visualization. This creates clutter and visual noise that can distract your users from achieving their goal.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://cloudscape.design/patterns/general/service-dashboard/dashboard-items/
- URL（原稿）: https://cloudscape.design/patterns/general/service-dashboard/dashboard-items/index.html.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 1 つのダッシュボード項目に混ぜる表現は 2 種類まで（表・図・一覧の三つ混ぜは不可）。長いログ一覧は別ページへ。
- ライセンス: cloudscape.design の公開 Markdown（/llms.txt 経由）。文書サイトの利用条件は未確認（components リポジトリは Apache-2.0）。短い逐語引用に限る
- タグ: ダッシュボード,数値,取捨

### S163 Carbon（IBM） index.mdx

> According to research conducted by Human Factors International, white space increases comprehension by almost 20 percent.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.carbondesignsystem.com/building-blocks/data-visualization/dashboards
- URL（原稿）: https://raw.githubusercontent.com/carbon-design-system/carbon-website/5e9cd1da43c32d3d3b991dc947b427f674da61a8/src/pages/data-visualization/dashboards/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 余白が理解を約 20% 上げるという主張。Carbon は第三者の調査（Human Factors International）を挙げるだけで、本台帳は原典を未確認。数値は引かない（使うなら『Carbon がそう述べる』に限る）。
- ライセンス: carbon-website: Apache-2.0
- タグ: ダッシュボード,数値,要注意

### S164 PatternFly（Red Hat） dashboard.md

> Each card should be designed to convey a single metric or a group of closely related metrics.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.patternfly.org/patterns/dashboard/
- URL（原稿）: https://raw.githubusercontent.com/patternfly/patternfly-org/73cec7b0348e1d49458c961896017340c55b7125/packages/documentation-site/patternfly-docs/content/patterns/dashboard/dashboard.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ダッシュボードはカードと配置の 2 要素。カード 1 枚は 1 指標か密接な指標群。標準型: 集計状態・傾向・利用率・詳細・イベント。
- ライセンス: patternfly-org: MIT
- タグ: ダッシュボード

### S165 PatternFly（Red Hat） dashboard.md

> Counts the number of items that are reporting exceptions (errors, warnings, or other conditions). Only include non-zero items.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://www.patternfly.org/patterns/dashboard/
- URL（原稿）: https://raw.githubusercontent.com/patternfly/patternfly-org/73cec7b0348e1d49458c961896017340c55b7125/packages/documentation-site/patternfly-docs/content/patterns/dashboard/dashboard.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 集計状態カードでは『異常のある項目だけ』件数を出し、0 件の項目は出さない。出さない情報の決め方の明文化。
- ライセンス: patternfly-org: MIT
- タグ: ダッシュボード,状態,取捨

### S166 GitLab Pajamas dashboards.md

> Limit a dashboard panel to one visualization for better UI scalability and easier configuration.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://design.gitlab.com/patterns/dashboards
- URL（原稿）: https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/raw/bff0fc3abf26d0781f647590df68597976cb82b3/contents/patterns/dashboards.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 1 パネル 1 可視化。フィルターも出しすぎない（Limit filtering）。パネルが固定の期間を使うときは、その期間をパネル見出しの下に明示する。
- ライセンス: design.gitlab.com: MIT
- タグ: ダッシュボード,取捨

### S167 Ant Design visualization-page.en-US.md

> Try to highlight the primary information by placing it first on a screen. Limit the sum of modules to 5-9 to avoid information overload.

- 媒体・日付: 公式文書（現行版）、取得 2026-11-16
- URL: https://ant.design/docs/spec/visualization-page/
- URL（原稿）: https://raw.githubusercontent.com/ant-design/ant-design/615d1baef4a4d3197bd611651e6415d15d8bb4ca/docs/spec/visualization-page.en-US.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 画面内のモジュールは 5〜9 個（数値は antd の目安で根拠の記載なし）。ワークベンチでも日常業務のモジュールを 5〜9 個とする。
- ライセンス: ant-design: MIT
- タグ: ダッシュボード,数値,取捨

### S168 Stephen Few

> Any dashboard that fails to deliver the information that people need clearly and quickly will never be used, no matter how cute its gauges, meters, and traffic lights.

- 媒体・日付: Perceptual Edge「Common Pitfalls in Dashboard Design」（ProClarity 白書）, 2006-02
- URL: https://www.perceptualedge.com/articles/Whitepapers/Common_Pitfalls.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 見栄えのよい部品より、必要な情報が早く明確に届くこと。白書の冒頭要約。（白書は ProClarity の著作権表示付き。短い引用のみ。13 の落とし穴の見出しは分析で要旨にする。）

### S169 Stephen Few

> to equate dashboards and portals is a misunderstanding that robs both of their unique character and contribution.

- 媒体・日付: Perceptual Edge「Dashboard Confusion」, 2004-03-20
- URL: https://www.perceptualedge.com/articles/ie/dashboard_confusion.pdf
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ダッシュボードとポータルの混同への批判。何でも載せる画面の原因の一つ。

### S170 Eric Ries

> The only metrics that entrepreneurs should invest energy in collecting are those that help them make decisions.

- 媒体・日付: 「Actionable Metrics」（Tim Ferriss のブログへの寄稿）, 2009-05-19
- URL: https://tim.blog/2009/05/19/vanity-metrics-vs-actionable-metrics/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 虚栄の指標（vanity metrics）の対概念。KPI タイルを「判断に使うか」で選ぶ根拠。

### S171 Eric Ries

> Unfortunately, most analytics packages are configured by default to provide mostly reports on vanity metrics.

- 媒体・日付: 「Actionable Metrics」（Tim Ferriss のブログへの寄稿）, 2009-05-19
- URL: https://tim.blog/2009/05/19/vanity-metrics-vs-actionable-metrics/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 既定の分析画面が虚栄の指標に偏る。ツールの初期ダッシュボードを疑う根拠。

## 歴史

### S172 Django 公式ドキュメント

> The admin’s recommended use is limited to an organization’s internal management tool. It’s not intended for building your entire front end around.

- 媒体・日付: Django 5.1 docs「The Django admin site」
- URL: https://docs.djangoproject.com/en/5.1/ref/contrib/admin/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 自動生成の管理画面は社内の管理ツール止まり、という公式の位置づけ。

### S173 Django 公式ドキュメント

> If you need to provide a more process-centric interface that abstracts away the implementation details of database tables and fields, then it’s probably time to write your own views.

- 媒体・日付: Django 5.1 docs「The Django admin site」
- URL: https://docs.djangoproject.com/en/5.1/ref/contrib/admin/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: テーブルとフィールドを見せる画面（モデル中心）と、作業を中心にした画面（プロセス中心）を分ける。CRUD 自動生成への批判の根拠。

### S174 Django 公式ドキュメント

> Django grew from a very practical need: World Online, a newspaper web operation, is responsible for building intensive web applications on journalism deadlines.
>
> In summer 2005, World Online decided to open-source the resulting software, Django.

- 媒体・日付: Django 5.1 docs「FAQ: General」
- URL: https://docs.djangoproject.com/en/5.1/faq/general/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Django の出自（報道の現場の締切）と公開年（2005）。FAQ は admin の出自には触れていないので、admin の目的の根拠には使わない。

### S175 phpMyAdmin プロジェクト

> started to work on a PHP-based web front-end to MySQL in 1998

- 媒体・日付: phpMyAdmin「About」
- URL: https://www.phpmyadmin.net/about/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: DB をそのまま表で見て編集する Web の管理画面の初期例（1998）。

### S176 Dan Bricklin

> The idea for the electronic spreadsheet came to me while I was a student at the Harvard Business School, working on my MBA degree, in the spring of 1978.

- 媒体・日付: Bricklin.com「The Idea」
- URL: http://www.bricklin.com/history/saiidea.htm
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 表計算の発想の一次証言（1978 年春）。

### S177 Wikipedia「VisiCalc」

> The Personal Software company began selling VisiCalc in mid-1979 for under US$100

- 媒体・日付: Wikipedia（地の文）
- URL: https://en.wikipedia.org/wiki/VisiCalc
- 取得日: 2026-11-16
- 検証区分: R
- 備考: VisiCalc の発売年（1979）。年号の根拠にだけ使う。（Wikipedia は CC BY-SA 4.0。）

### S178 Wikipedia「Lotus 1-2-3」

> Lotus 1-2-3 was the state-of-the-art spreadsheet and the standard throughout the 1980s and into the early 1990s

- 媒体・日付: Wikipedia（地の文）
- URL: https://en.wikipedia.org/wiki/Lotus_1-2-3
- 取得日: 2026-11-16
- 検証区分: R
- 備考: 1980 年代の業務の標準が表計算だったこと。（Wikipedia は CC BY-SA 4.0。）

### S179 Wikipedia「IBM 3270」

> The 3270 series was designed to connect with mainframe computers, often at a remote location, using the technology then available in the early 1970s.

- 媒体・日付: Wikipedia（地の文）
- URL: https://en.wikipedia.org/wiki/IBM_3270
- 取得日: 2026-11-16
- 検証区分: R
- 備考: 端末の業務画面の制約（遠隔・当時の技術）。（Wikipedia は CC BY-SA 4.0。）

### S180 Wikipedia「IBM 3270」

> By ensuring the CPU is not interrupted at every keystroke, a 1970s-era IBM 3033 mainframe fitted with only 16 MB of main memory was able to support up to 17,500 3270 terminals under CICS

- 媒体・日付: Wikipedia（地の文）
- URL: https://en.wikipedia.org/wiki/IBM_3270
- 取得日: 2026-11-16
- 検証区分: R
- 備考: 1 キーごとに計算機を割り込ませない設計＝画面を一括で送る固定書式の理由。数値は Wikipedia の記述で、IBM の一次資料とは未照合。（Wikipedia は CC BY-SA 4.0。）

### S181 Wikipedia「Bloomberg Terminal」

> The terminal was released to market in December 1982.

- 媒体・日付: Wikipedia（地の文）
- URL: https://en.wikipedia.org/wiki/Bloomberg_Terminal
- 取得日: 2026-11-16
- 検証区分: R
- 備考: 金融端末の高密度画面の年号（1982）。（Wikipedia は CC BY-SA 4.0。）

### S182 Wikipedia「SAP R/3」

> SAP R/3 was officially launched on 6 July 1992.

- 媒体・日付: Wikipedia（地の文）
- URL: https://en.wikipedia.org/wiki/SAP_R/3
- 取得日: 2026-11-16
- 検証区分: R
- 備考: クライアントサーバー型 ERP の年号（1992）。（Wikipedia は CC BY-SA 4.0。）

### S183 Chris Kanaracus（PCWorld 記者）

> SAP’s software is known for its role running many of the world’s largest companies, but not necessarily for its user-friendliness.

- 媒体・日付: PCWorld「SAP unveils "consumer-friendly" Fiori app suite」, 2013-05-15
- URL: https://www.pcworld.com/article/451866/sap-unveils-consumerfriendly-fiori-app-suite.html
- 取得日: 2026-11-16
- 検証区分: R
- 備考: 記者の地の文。ERP が使いやすさで知られていなかった、という当時の評価。Fiori の発表年（2013）の根拠。SAP 自身の発言ではない。

### S184 Mark Otto

> Some of our early internal tools at Twitter lacked a refined and approachable design and we found it difficult to develop or iterate quickly.
> I worked with developers to identify our needs and then design them in the browser to create a consistent visual language and explore interactions.
> I took those same components from the internal tools project, and added them to a shared codebase (Bootstrap) to abstract and document them for other projects.

- 媒体・日付: A List Apart「Building Twitter Bootstrap」, 2012-01-17
- URL: https://alistapart.com/article/building-twitter-bootstrap/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Bootstrap の出発点は社内の分析・管理ツールの一貫性。後に管理テンプレートの定番の土台になる。

### S185 Mark Otto

> Back in early 2011, the two of us were just a couple of nerds working at Twitter

- 媒体・日付: Bootstrap blog「Ten Years of Bootstrap」, 2021-08-19
- URL: https://blog.getbootstrap.com/2021/08/19/ten/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 始まりの年を Otto は 2011 年初めと語る。他の資料には 2010 年中頃とするものがあり、食い違う（未検証・伝聞に記載）。公開日はこの記事の本文では確認していない。

### S186 Wikipedia「Material Design」

> Google announced the initial version of Material Design on June 25, 2014, at the 2014 Google I/O conference.

- 媒体・日付: Wikipedia（地の文）
- URL: https://en.wikipedia.org/wiki/Material_Design
- 取得日: 2026-11-16
- 検証区分: R
- 備考: Material Design の発表（2014）。デザインシステムの時代の起点の一つ。（CC BY-SA 4.0。）

### S187 Ant Design チーム

> Ant Financial has a large number of enterprise-level products.

- 媒体・日付: Ant Design docs「Introduction」（リポジトリ内の原稿）
- URL: https://ant.design/docs/spec/introduce
- URL（原稿）: https://raw.githubusercontent.com/ant-design/ant-design/3b7e2a704d8784a9b3379cd0550fb32d3307504b/docs/spec/introduce.en-US.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Ant Design の背景。企業向け製品が多数あり、共通の設計システムを作った。続く文（S188）で価値を 4 つとする。（ant-design/ant-design は MIT。照合原稿 https://raw.githubusercontent.com/ant-design/ant-design/3b7e2a704d8784a9b3379cd0550fb32d3307504b/docs/spec/introduce.en-US.md（コミット 3b7e2a7）。）

### S188 Ant Design チーム

> builds a design system for enterprise products based on four design values of Natural, Certain, Meaningful, and Growing

- 媒体・日付: Ant Design docs「Introduction」（リポジトリ内の原稿）
- URL: https://ant.design/docs/spec/introduce
- URL（原稿）: https://raw.githubusercontent.com/ant-design/ant-design/3b7e2a704d8784a9b3379cd0550fb32d3307504b/docs/spec/introduce.en-US.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Ant Design の価値 4 つ（自然・確実・意味のある・成長）の原文。（ant-design/ant-design は MIT。照合原稿 https://raw.githubusercontent.com/ant-design/ant-design/3b7e2a704d8784a9b3379cd0550fb32d3307504b/docs/spec/introduce.en-US.md（コミット 3b7e2a7）。）

### S189 Bloomberg UX チーム（ブログ）

> Information overload? That’s kind of the idea.

- 媒体・日付: Bloomberg UX blog「Relaunching Launchpad: Disguising a UX Revolution within an Evolution」, 2017-11-10
- URL: https://www.bloomberg.com/ux/2017/11/10/relaunching-launchpad-disguising-ux-revolution-within-evolution/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Bloomberg 社自身が、高密度は意図だと述べる文（Launchpad の「一目で分かる大量の情報」の節）。原ページは自動取得が 403。2018-03-11 の Wayback Machine の保存コピー本文で照合した。（保存コピー: https://web.archive.org/web/20180311070656/https://www.bloomberg.com/ux/2017/11/10/relaunching-launchpad-disguising-ux-revolution-within-evolution/）

### S190 Bloomberg UX チーム（ブログ）

> Any abrupt change to the user interface can dramatically disrupt their workflows and how they do business.

- 媒体・日付: 同上（S189）
- URL: https://www.bloomberg.com/ux/2017/11/10/relaunching-launchpad-disguising-ux-revolution-within-evolution/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 熟練者の業務画面は、急な変更が仕事を止める。徐々に変えるという方針の理由。保存コピーで照合（S189 と同じ）。（保存コピー: https://web.archive.org/web/20180311070656/https://www.bloomberg.com/ux/2017/11/10/relaunching-launchpad-disguising-ux-revolution-within-evolution/）

### S191 Eddie Ishak（Bloomberg の UX Design / Product チーム長。ブログ内の発言）

> Too slow, and it feels like even a brand new app is stuck in the past. Too fast, and it feels like change is happening without merit

- 媒体・日付: 同上（S189）
- URL: https://www.bloomberg.com/ux/2017/11/10/relaunching-launchpad-disguising-ux-revolution-within-evolution/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Bloomberg のブログが Ishak の発言として載せた文。UI の枠組みを進化させる速さの釣り合い。保存コピーで照合。ブログが書き起こした発言で、本人の別の媒体での確認はない。（保存コピー: https://web.archive.org/web/20180311070656/https://www.bloomberg.com/ux/2017/11/10/relaunching-launchpad-disguising-ux-revolution-within-evolution/）

### S192 Wikipedia「IBM 3270」

> introduced by IBM in 1971

- 媒体・日付: Wikipedia（地の文）
- URL: https://en.wikipedia.org/wiki/IBM_3270
- 取得日: 2026-11-16
- 検証区分: R
- 備考: 3270 の導入年（1971）。（CC BY-SA 4.0。）

### S193 Wikipedia「Microsoft Excel」

> the software was officially released for sale on September 30, 1985

- 媒体・日付: Wikipedia（地の文）
- URL: https://en.wikipedia.org/wiki/Microsoft_Excel
- 取得日: 2026-11-16
- 検証区分: R
- 備考: Mac 版 Excel の発売（1985）。表計算の業務画面の型の継承。（CC BY-SA 4.0。）

## OSS・ライブラリの既定値

### S194 shadcn/ui 文書: Data Table の整形と既定のページ送り

> Let's format the amount cell to display the dollar amount. We'll also align the cell to the right.
> the table automatically paginates rows into pages of 10
> It doesn't make sense to combine all of these variations into a single component.

- 媒体・日付: shadcn-ui/ui の原稿（コミット日 2026-11-13）
- URL: https://ui.shadcn.com/docs/components/radix/data-table
- URL（原稿）: https://raw.githubusercontent.com/shadcn-ui/ui/e62c9435fff729a175f38983dee73b2cb4f6a069/apps/v4/content/docs/components/radix/data-table.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 右揃えは「手順の一つ」として文書に書かれており、既定ではない。既定の 1 ページは 10 行。『全部入りの 1 部品にはしない』という設計思想も同じ文書にある。用途: 既定のままだと数字が左に並ぶ根拠。
- 版: shadcn-ui/ui@e62c943（既定ブランチ先頭）
- ライセンス: MIT

### S195 shadcn/ui ソース: dashboard-01 の KPI カード

> <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">

- 媒体・日付: shadcn-ui/ui の原稿（コミット日 2026-11-13）
- URL: https://ui.shadcn.com/blocks
- URL（原稿）: https://raw.githubusercontent.com/shadcn-ui/ui/e62c9435fff729a175f38983dee73b2cb4f6a069/apps/v4/registry/new-york-v4/blocks/dashboard-01/components/section-cards.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: KPI の数字だけ tabular-nums を付け、傾向はアイコン付きバッジ（色だけにしない）。表本体の数字セルには付いていない（S196 で数字セルは右揃えのみ確認）。
- 版: shadcn-ui/ui@e62c943（既定ブランチ先頭）
- ライセンス: MIT

### S196 shadcn/ui ソース: dashboard-01 の表（右揃え・状態バッジ・空・件数）

> header: () => <div className="w-full text-right">Target</div>,
> <Badge variant="outline" className="px-1.5 text-muted-foreground">
> {row.original.status === "Done" ? (
> enableHiding: false,
> className="h-24 text-center" > No results.
> {[10, 20, 30, 40, 50].map((pageSize) => (
> {table.getFilteredRowModel().rows.length} row(s) selected.

- 媒体・日付: shadcn-ui/ui の原稿（コミット日 2026-11-13）
- URL: https://ui.shadcn.com/blocks
- URL（原稿）: https://raw.githubusercontent.com/shadcn-ui/ui/e62c9435fff729a175f38983dee73b2cb4f6a069/apps/v4/registry/new-york-v4/blocks/dashboard-01/components/data-table.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 同じブロックの中で、数値の入力欄（Target・Limit）は右揃えにしている一方、状態は色ではなくアイコンと文字のバッジ。0 件は文言のみ（作成導線なし）。ページ内件数の選択肢は 10〜50。選択数の表記あり。
- 版: shadcn-ui/ui@e62c943（既定ブランチ先頭）
- ライセンス: MIT

### S197 shadcn/ui ソース: tasks 例の状態列（アイコンと文字）

> <status.icon className="size-4 text-muted-foreground" />
> <span>{status.label}</span>

- 媒体・日付: shadcn-ui/ui の原稿（コミット日 2026-11-13）
- URL: https://ui.shadcn.com/examples/tasks
- URL（原稿）: https://raw.githubusercontent.com/shadcn-ui/ui/e62c9435fff729a175f38983dee73b2cb4f6a069/apps/v4/app/(app)/examples/tasks/components/columns.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 状態を『アイコン＋文字』で出す例。色に頼らない既定の作りの手本として使える。
- 版: shadcn-ui/ui@e62c943（既定ブランチ先頭）
- ライセンス: MIT

### S198 react-admin ソース: NumberField と Datagrid の既定

> NumberField.textAlign = 'right';
> value.toLocaleString(locales, options)

- 媒体・日付: marmelab/react-admin の原稿（コミット日 2026-11-13）
- URL: https://marmelab.com/react-admin/NumberField.html
- URL（原稿）: https://raw.githubusercontent.com/marmelab/react-admin/f466cf73330d1458c9e371c5a7bce2659ede5817/packages/ra-ui-materialui/src/field/NumberField.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数値フィールドは型に textAlign='right' が埋め込まれ、Datagrid が列の揃えに使う（S198 は NumberField 側。DatagridCell が field.type.textAlign を読むことは取得した DatagridCell.tsx の `align={field.props.textAlign || field.type.textAlign}` で確認）。書式は toLocaleString。
- 版: marmelab/react-admin@f466cf7（既定ブランチ先頭）
- ライセンス: MIT

### S199 react-admin ソース: Datagrid の密度と一括操作の既定

> rowStyle, size = 'small', sx,
> bulkActionButtons = canDelete ? defaultBulkActionButtons : false,

- 媒体・日付: marmelab/react-admin の原稿（コミット日 2026-11-13）
- URL: https://marmelab.com/react-admin/Datagrid.html
- URL（原稿）: https://raw.githubusercontent.com/marmelab/react-admin/f466cf73330d1458c9e371c5a7bce2659ede5817/packages/ra-ui-materialui/src/list/datagrid/Datagrid.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 密度の既定は small（詰め気味）。削除権限があれば一括削除ボタンが既定で付く。
- 版: marmelab/react-admin@f466cf7（既定ブランチ先頭）
- ライセンス: MIT

### S200 react-admin 文書: Datagrid の見出し固定・空・hover

> `<Datagrid>` has sticky headers, which means that the header row will remain visible even when scrolling down the page.
> the Datagrid will display a message indicating there are no results
> By default, the rows of the datagrid are highlighted when the user hovers over them.
> they can show / hide datagrid columns

- 媒体・日付: marmelab/react-admin の原稿（コミット日 2026-11-13）
- URL: https://marmelab.com/react-admin/Datagrid.html
- URL（原稿）: https://raw.githubusercontent.com/marmelab/react-admin/f466cf73330d1458c9e371c5a7bce2659ede5817/docs/Datagrid.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 見出し固定は既定。行 hover 強調は既定。0 件は文言の既定表示。列の表示切替は構成モード／SelectColumnsButton で提供。
- 版: marmelab/react-admin@f466cf7（既定ブランチ先頭）
- ライセンス: MIT

### S201 react-admin ソース: SimpleShowLayout の既定（1 列）

> a single-column layout (via Material UI's `<Stack>` component)
> passed to `<Stack>`. Defaults to 1.

- 媒体・日付: marmelab/react-admin の原稿（コミット日 2026-11-13）
- URL: https://marmelab.com/react-admin/SimpleShowLayout.html
- URL（原稿）: https://raw.githubusercontent.com/marmelab/react-admin/f466cf73330d1458c9e371c5a7bce2659ede5817/packages/ra-ui-materialui/src/detail/SimpleShowLayout.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 詳細（Show）の既定は 1 列の積み重ね（label と値）。『見出しに状態や操作を置く』レイアウトは既定では作られない（SimpleShowLayout は項目の Stack のみ）。
- 版: marmelab/react-admin@f466cf7（既定ブランチ先頭）
- ライセンス: MIT

### S202 react-admin ソース: BooleanField（アイコンと Tooltip）

> <Tooltip title={translate(ariaLabel, { _: ariaLabel })}>
> TrueIcon = DoneIcon,

- 媒体・日付: marmelab/react-admin の原稿（コミット日 2026-11-13）
- URL: https://marmelab.com/react-admin/BooleanField.html
- URL（原稿）: https://raw.githubusercontent.com/marmelab/react-admin/f466cf73330d1458c9e371c5a7bce2659ede5817/packages/ra-ui-materialui/src/field/BooleanField.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 真偽値は Done/Clear のアイコンに Tooltip と aria 用の文言を付ける。色だけにしない既定。
- 版: marmelab/react-admin@f466cf7（既定ブランチ先頭）
- ライセンス: MIT

### S203 react-admin ソース: Empty（0 件の既定に作成導線）

> <Inbox className={EmptyClasses.icon} />
> const { hasCreate } = useResourceDefinition(props);

- 媒体・日付: marmelab/react-admin の原稿（コミット日 2026-11-13）
- URL: https://marmelab.com/react-admin/List.html
- URL（原稿）: https://raw.githubusercontent.com/marmelab/react-admin/f466cf73330d1458c9e371c5a7bce2659ede5817/packages/ra-ui-materialui/src/list/Empty.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 0 件の既定表示に『作成』導線がある（resource の hasCreate のとき）。多くのライブラリの既定より丁寧。
- 版: marmelab/react-admin@f466cf7（既定ブランチ先頭）
- ライセンス: MIT

### S204 Ant Design 文書: Table の列既定

> | align | The specify which way that column is aligned | `left` \| `right` \| `center` | `left` |
> | size | Size of table | `large` \| `medium` \| `small` | `large` |
> Always visible if not set

- 媒体・日付: ant-design/ant-design の原稿（コミット日 2026-11-16）
- URL: https://ant.design/components/table
- URL（原稿）: https://raw.githubusercontent.com/ant-design/ant-design/3b7e2a704d8784a9b3379cd0550fb32d3307504b/components/table/index.en-US.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 列の揃えは左が既定、数字を右にするのは利用者の指定。サイズ既定は large（ゆったり）。列の responsive は『既定で全幅に表示』。
- 版: ant-design/ant-design@3b7e2a7（既定ブランチ先頭）
- ライセンス: MIT

### S205 Ant Design 文書: Descriptions の既定（3 列・横並び）

> | layout | Define description layout | `horizontal` \| `vertical` | `horizontal` |
> | column | The number of `DescriptionItems` in a row, could be an object (like `{ xs: 8, sm: 16, md: 24}`) or a number | number \| [Partial<Record<Breakpoint, number>>](https://github.com/ant-design/ant-design/blob/84ca0d23ae52e4f0940f20b0e22eabe743f90dca/components/descriptions/index.tsx#L111C21-L111C56) | 3 |  | × |

- 媒体・日付: ant-design/ant-design の原稿（コミット日 2026-11-16）
- URL: https://ant.design/components/descriptions
- URL（原稿）: https://raw.githubusercontent.com/ant-design/ant-design/3b7e2a704d8784a9b3379cd0550fb32d3307504b/components/descriptions/index.en-US.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 詳細的な表示の既定は『横並びのキーと値・3 列』。節見出し・状態・操作は部品の外で作る。
- 版: ant-design/ant-design@3b7e2a7（既定ブランチ先頭）
- ライセンス: MIT

### S206 Ant Design ソース: 並べ替え列の aria-sort

> cell['aria-sort'] = sortOrder === 'ascend' ? 'ascending' : 'descending';

- 媒体・日付: ant-design/ant-design の原稿（コミット日 2026-11-16）
- URL: https://ant.design/components/table
- URL（原稿）: https://raw.githubusercontent.com/ant-design/ant-design/3b7e2a704d8784a9b3379cd0550fb32d3307504b/components/table/hooks/useSorter.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 並べ替え中の列に aria-sort を付ける（状態別に ascending/descending）。他の表部品より a11y の既定が厚い例。
- 版: ant-design/ant-design@3b7e2a7（既定ブランチ先頭）
- ライセンス: MIT

### S207 ProComponents ソース: 状態の Badge（色と文字）

> Success: ({ children }) => <Badge status="success" text={children} />,

- 媒体・日付: ant-design/pro-components の原稿（コミット日 2026-11-15）
- URL: https://pro-components.antdigital.dev/components/table
- URL（原稿）: https://raw.githubusercontent.com/ant-design/pro-components/f96282d68cc1ffe6073e7be774e85d10e3c764ca/src/field/components/Status/index.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 状態は Badge の dot + 文字（色と文字の併記）。ただし定義は Success/Error/Default/Processing/Warning の 5 色相当で、意味は利用者側が割り当てる。
- 版: ant-design/pro-components@f96282d（既定ブランチ先頭）
- ライセンス: MIT

### S208 ProComponents ソース: 密度の選択肢

> export type DensitySize = 'middle' | 'small' | 'large' | undefined;

- 媒体・日付: ant-design/pro-components の原稿（コミット日 2026-11-15）
- URL: https://pro-components.antdigital.dev/components/table
- URL（原稿）: https://raw.githubusercontent.com/ant-design/pro-components/f96282d68cc1ffe6073e7be774e85d10e3c764ca/src/table/components/ToolBar/DensityIcon.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 密度の選択肢は large/middle/small の 3 段階をツールバーから切り替える。
- 版: ant-design/pro-components@f96282d（既定ブランチ先頭）
- ライセンス: MIT

### S209 ProComponents ソース: ProTable の空欄の既定

> columnEmptyText = '-',

- 媒体・日付: ant-design/pro-components の原稿（コミット日 2026-11-15）
- URL: https://pro-components.antdigital.dev/components/table
- URL（原稿）: https://raw.githubusercontent.com/ant-design/pro-components/f96282d68cc1ffe6073e7be774e85d10e3c764ca/src/table/Table.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 空欄は '-'（既定）。『0』や『未設定』との区別は利用者が決める。
- 版: ant-design/pro-components@f96282d（既定ブランチ先頭）
- ライセンス: MIT

### S210 MUI X ソース: 数値列の既定（右揃え・桁区切り）

> type: 'number', align: 'right', headerAlign: 'right',
> valueFormatter: (value?: number) => (isNumber(value) ? value.toLocaleString() : value || ''),

- 媒体・日付: mui/mui-x の原稿（コミット日 2026-11-13）
- URL: https://mui.com/x/react-data-grid/column-definition/
- URL（原稿）: https://raw.githubusercontent.com/mui/mui-x/cd6db723523392a2041aa14030aeb1e6ec8632bd/packages/x-data-grid/src/colDef/gridNumericColDef.ts
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 数値型の列は右揃え（本文・見出しとも）で、書式は toLocaleString（桁区切り・小数は環境依存）。MUI X は『数字は右』を既定にしているため、列の type を正しく付ければ足りる。
- 版: mui/mui-x@cd6db72（既定ブランチ先頭）
- ライセンス: MIT（packages/x-data-grid/LICENSE。Pro・Premium は商用）

### S211 MUI X ソース: 文字列列と真偽列の揃え

> align: 'center', headerAlign: 'center',

- 媒体・日付: mui/mui-x の原稿（コミット日 2026-11-13）
- URL: https://mui.com/x/react-data-grid/column-definition/
- URL（原稿）: https://raw.githubusercontent.com/mui/mui-x/cd6db723523392a2041aa14030aeb1e6ec8632bd/packages/x-data-grid/src/colDef/gridBooleanColDef.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 真偽は中央揃え。文字列は左（gridStringColDef は取得済み。align: 'left' を確認）。日付型に align 指定はなく文字列の既定（左）を継ぐ。
- 版: mui/mui-x@cd6db72（既定ブランチ先頭）
- ライセンス: MIT

### S212 MUI X 文書: ページ送りの既定と上限

> The Data Grid (MIT license) is limited to pages of up to 100 rows.
> By default, each page contains 100 rows.

- 媒体・日付: mui/mui-x の原稿（コミット日 2026-11-13）
- URL: https://mui.com/x/react-data-grid/pagination/
- URL（原稿）: https://raw.githubusercontent.com/mui/mui-x/cd6db723523392a2041aa14030aeb1e6ec8632bd/docs/data/data-grid/pagination/pagination.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 1 ページ既定 100 行。フッターに『Rows per page』の選択がある。管理画面で 100 行は一覧性が高い反面、読み取り負荷が高い。
- 版: mui/mui-x@cd6db72（既定ブランチ先頭）
- ライセンス: MIT

### S213 MUI X 文書: 読み込み表示の既定

> `noRowsVariant` (default: `skeleton`)

- 媒体・日付: mui/mui-x の原稿（コミット日 2026-11-13）
- URL: https://mui.com/x/react-data-grid/overlays/
- URL（原稿）: https://raw.githubusercontent.com/mui/mui-x/cd6db723523392a2041aa14030aeb1e6ec8632bd/docs/data/data-grid/overlays/overlays.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 読み込みは行が無いときスケルトン、行があるときは linear-progress が既定。
- 版: mui/mui-x@cd6db72（既定ブランチ先頭）
- ライセンス: MIT

### S214 MUI X 文書: アクセシビリティ（行見出し）

> Set `rowHeader: true` on a column that contains a meaningful label for each row

- 媒体・日付: mui/mui-x の原稿（コミット日 2026-11-13）
- URL: https://mui.com/x/react-data-grid/accessibility/
- URL（原稿）: https://raw.githubusercontent.com/mui/mui-x/cd6db723523392a2041aa14030aeb1e6ec8632bd/docs/data/data-grid/accessibility/accessibility.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 表の『行の名前になる列』に rowHeader を付けると rowheader 役割になる。既定では付かない（オプトイン）。
- 版: mui/mui-x@cd6db72（既定ブランチ先頭）
- ライセンス: MIT

### S215 MUI X 文書: 列の固定は有料版

> The Data Grid Pro provides column pinning to end users by default

- 媒体・日付: mui/mui-x の原稿（コミット日 2026-11-13）
- URL: https://mui.com/x/react-data-grid/column-pinning/
- URL（原稿）: https://raw.githubusercontent.com/mui/mui-x/cd6db723523392a2041aa14030aeb1e6ec8632bd/docs/data/data-grid/column-pinning/column-pinning.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 列の固定は Pro（有料）。MIT 版では使えない。固定列を前提にした設計は、道具の制約を確認する。
- 版: mui/mui-x@cd6db72（既定ブランチ先頭）
- ライセンス: MIT（文書。機能は Pro の商用ライセンス）

### S216 MUI X ソース: 0 件の既定文言

> noRowsLabel: 'No rows',
> noResultsOverlayLabel: 'No results found.',

- 媒体・日付: mui/mui-x の原稿（コミット日 2026-11-13）
- URL: https://mui.com/x/react-data-grid/localization/
- URL（原稿）: https://raw.githubusercontent.com/mui/mui-x/cd6db723523392a2041aa14030aeb1e6ec8632bd/packages/x-data-grid/src/constants/localeTextConstants.ts
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 0 件は『No rows』、検索結果が 0 件は『No results found.』。2 つを区別する既定（文言は素っ気ない）。
- 版: mui/mui-x@cd6db72（既定ブランチ先頭）
- ライセンス: MIT

### S217 TanStack Table 文書: ヘッドレスの定義

> do not provide markup, styles, or pre-built implementations

- 媒体・日付: TanStack/table の原稿（コミット日 2026-11-14）
- URL: https://tanstack.com/table/latest/docs/overview
- URL（原稿）: https://raw.githubusercontent.com/TanStack/table/564a459b74834c77631e0d6fdba7661383bbc1b4/docs/overview.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: TanStack Table はマークアップ・スタイルを持たない。見た目の既定は『利用者の実装』であり、shadcn のような上位の部品が既定を決める。
- 版: TanStack/table@564a459（既定ブランチ先頭）
- ライセンス: MIT

### S218 TanStack Table 文書: 既定のページ送り

> pageSize: 10, // default page size

- 媒体・日付: TanStack/table の原稿（コミット日 2026-11-14）
- URL: https://tanstack.com/table/latest/docs/framework/react/guide/pagination
- URL（原稿）: https://raw.githubusercontent.com/TanStack/table/564a459b74834c77631e0d6fdba7661383bbc1b4/docs/framework/react/guide/pagination.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ページ送りの既定は 10 行。
- 版: TanStack/table@564a459（既定ブランチ先頭）
- ライセンス: MIT

### S219 Mantine ソース: Table の tabularNums は既定 false

> /** If set, `font-variant-numeric: tabular-nums` style is applied @default false */

- 媒体・日付: mantinedev/mantine の原稿（コミット日 2026-11-15）
- URL: https://mantine.dev/core/table/
- URL（原稿）: https://raw.githubusercontent.com/mantinedev/mantine/b786c430ad370e6c9f7bce224008e996b2634bc3/packages/@mantine/core/src/components/Table/Table.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: tabular-nums は Table の tabularNums で選ぶ（既定 false）。数字の桁そろえは自分で有効にする。
- 版: mantinedev/mantine@b786c43（既定ブランチ先頭）
- ライセンス: MIT

### S220 Mantine 文書: Table の固定見出し・スクロール容器

> To prevent viewport overflow, wrap `Table` with `Table.ScrollContainer`.
> Set `stickyHeader` to make the table header sticky.

- 媒体・日付: mantinedev/mantine の原稿（コミット日 2026-11-15）
- URL: https://mantine.dev/core/table/
- URL（原稿）: https://raw.githubusercontent.com/mantinedev/mantine/b786c430ad370e6c9f7bce224008e996b2634bc3/apps/mantine.dev/src/pages/core/table.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 固定見出し・横スクロール容器は部品はあるが利用者が付ける。
- 版: mantinedev/mantine@b786c43（既定ブランチ先頭）
- ライセンス: MIT

### S221 Tabler 文書: 並べ替えは自分で実装し aria-sort も自分で付ける

> Sorting itself is up to you - the classes only style the header.
> Once you wire up sorting, also set `aria-sort` on the `th` to `ascending`, `descending` or `none`.

- 媒体・日付: tabler/tabler の原稿（コミット日 2026-11-14）
- URL: https://docs.tabler.io/ui/components/table
- URL（原稿）: https://raw.githubusercontent.com/tabler/tabler/46bd1d781a964202dc9be180da866f1feed3ccf5/docs/content/ui/components/table.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 並べ替えの見出しは見た目のクラスだけで、並べ替え自体と a11y は利用者の実装（同ファイル群で aria-sort は 0 件）。
- 版: tabler/tabler@46bd1d7（既定ブランチ先頭）
- ライセンス: MIT

### S222 Tabler 文書: badge に『文字なしの点（状態の印）』がある

> desc: Small dot with no text, for a status marker

- 媒体・日付: tabler/tabler の原稿（コミット日 2026-11-14）
- URL: https://docs.tabler.io/ui/components/badge
- URL（原稿）: https://raw.githubusercontent.com/tabler/tabler/46bd1d781a964202dc9be180da866f1feed3ccf5/docs/content/ui/components/badge.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: badge に『文字なしの点』の型がある（状態の印）。文字を併記するかは利用者次第。
- 版: tabler/tabler@46bd1d7（既定ブランチ先頭）
- ライセンス: MIT

### S223 Tabler の AI エージェント向け skill（管理画面の作り方の指示）

> Before writing markup for a component, fetch its `.md` page and copy the example that is closest to the task.
> Put cards in `.row.row-deck.row-cards` so they align in height.
> Keep markup accessible: real `<button>` elements, labels on inputs, `aria-label` on icon-only buttons.
> They work as `bg-{color}`, `text-{color}`, `btn-{color}`, `badge bg-{color}`, `alert-{color}` and so on.

- 媒体・日付: tabler/tabler の原稿（コミット日 2026-11-14）
- URL: https://docs.tabler.io/llms.txt
- URL（原稿）: https://raw.githubusercontent.com/tabler/tabler/46bd1d781a964202dc9be180da866f1feed3ccf5/skills/tabler/SKILL.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Tabler 公式の AI 向け skill。『近い例をコピーせよ』『カードを row-cards で高さ揃え』など構造の指示が中心で、数字の揃え・状態の出し方・情報の取捨選択の指示はこの文書内に無い。（無いことは、取得した 104 行の本文を読んで確認）
- 版: tabler/tabler@46bd1d7（既定ブランチ先頭）
- ライセンス: MIT

### S224 Django admin ソース: 変更一覧の行の作り（日付は nowrap・真偽は画像）

> row_classes.append("nowrap")
> return format_html('<img src="{}" alt="{}">', icon_url, field_val)

- 媒体・日付: django/django の原稿（コミット日 2026-11-13）
- URL: https://docs.djangoproject.com/en/stable/ref/contrib/admin/
- URL（原稿）: https://raw.githubusercontent.com/django/django/f24f38c6b2825f15628c07bf2892f1664eed9361/django/contrib/admin/templatetags/admin_list.py
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 日付と外部キーは nowrap。真偽は画像（alt に True/False/None の文字）。数字用の class は付かない（changelists.css に右揃え 0 件）。
- 版: django/django@f24f38c（既定ブランチ先頭）
- ライセンス: BSD-3-Clause

### S225 Django admin ソース: 1 ページの件数の既定

> list_per_page = 100 list_max_show_all = 200
> actions_on_top = True

- 媒体・日付: django/django の原稿（コミット日 2026-11-13）
- URL: https://docs.djangoproject.com/en/stable/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_per_page
- URL（原稿）: https://raw.githubusercontent.com/django/django/f24f38c6b2825f15628c07bf2892f1664eed9361/django/contrib/admin/options.py
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 1 ページ 100 件・全件表示の上限 200・操作を表の上に置く、が既定。
- 版: django/django@f24f38c（既定ブランチ先頭）
- ライセンス: BSD-3-Clause

### S226 Django admin 文書: list_display の既定（`__str__` の 1 列）

> If you don't set ``list_display``, the admin site will display a single
> column that displays the ``__str__()`` representation of each object.

- 媒体・日付: django/django の原稿（コミット日 2026-11-13）
- URL: https://docs.djangoproject.com/en/stable/ref/contrib/admin/#django.contrib.admin.ModelAdmin.list_display
- URL（原稿）: https://raw.githubusercontent.com/django/django/f24f38c6b2825f15628c07bf2892f1664eed9361/docs/ref/contrib/admin/index.txt
- 取得日: 2026-11-16
- 検証区分: A
- 備考: list_display を設定しないと `__str__` の 1 列だけ。既定は『情報の取捨選択をしない』ではなく『1 列』で、列の選択は開発者の仕事。
- 版: django/django@f24f38c（既定ブランチ先頭）
- ライセンス: BSD-3-Clause

### S227 Filament 文書: 列の揃えと切り替えの既定

> ->alignStart() // This is the default alignment.
> By default, toggleable columns are visible.

- 媒体・日付: filamentphp/filament の原稿（コミット日 2026-11-15）
- URL: https://filamentphp.com/docs/tables/columns/overview
- URL（原稿）: https://raw.githubusercontent.com/filamentphp/filament/78c3035931ece552bb2448fe2cc3ff82e8d54e1c/packages/tables/docs/02-columns/01-overview.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 揃えは start（左）が既定。列の表示切替は toggleable() を付けた列だけ、既定は表示。
- 版: filamentphp/filament@78c3035（既定ブランチ先頭）
- ライセンス: MIT

### S228 Filament 文書: テキスト列は既定で装飾なし・numeric() は書式

> By default, text is quite plain and has no background color.
> you can use the `numeric()` method to format a column as a number

- 媒体・日付: filamentphp/filament の原稿（コミット日 2026-11-15）
- URL: https://filamentphp.com/docs/tables/columns/text
- URL（原稿）: https://raw.githubusercontent.com/filamentphp/filament/78c3035931ece552bb2448fe2cc3ff82e8d54e1c/packages/tables/docs/02-columns/02-text.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 状態のバッジは badge() で選ぶ。既定のテキスト列は装飾なし。numeric() は書式であって揃えではない（揃えは alignEnd）。
- 版: filamentphp/filament@78c3035（既定ブランチ先頭）
- ライセンス: MIT

### S229 Filament 文書: 表の既定の件数とモバイルの積み重ね

> The user can choose between 5, 10, 25, and 50 records per page.

- 媒体・日付: filamentphp/filament の原稿（コミット日 2026-11-15）
- URL: https://filamentphp.com/docs/tables/overview
- URL（原稿）: https://raw.githubusercontent.com/filamentphp/filament/78c3035931ece552bb2448fe2cc3ff82e8d54e1c/packages/tables/docs/01-overview.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 1 ページ 5/10/25/50 から選ぶ。
- 版: filamentphp/filament@78c3035（既定ブランチ先頭）
- ライセンス: MIT

### S230 Filament 文書: 狭い画面での表

> Traditional tables are notorious for having bad responsiveness.
> on mobile, the user is unable to see much information in a table row at once without scrolling
> Allow the user to scroll horizontally to see more table content
> you may choose to show and hide columns based on the responsive
> Use `stackedOnMobile()` to automatically stack all cells vertically on mobile without changing your column definitions
> Tables automatically scroll horizontally when they overflow anyway

- 媒体・日付: filamentphp/filament の原稿（コミット日 2026-11-15）
- URL: https://filamentphp.com/docs/tables/layout
- URL（原稿）: https://raw.githubusercontent.com/filamentphp/filament/78c3035931ece552bb2448fe2cc3ff82e8d54e1c/packages/tables/docs/05-layout.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 狭い画面は『横スクロール』『列の出し分け visibleFrom』『stackedOnMobile で縦に積む』の 3 通りを文書で提示。既定は横スクロール。
- 版: filamentphp/filament@78c3035（既定ブランチ先頭）
- ライセンス: MIT

### S231 Filament 文書: 詳細（Infolist）のラベルは既定で上、inlineLabel は選択

> Entries may have their labels displayed inline with the entry, rather than above it.

- 媒体・日付: filamentphp/filament の原稿（コミット日 2026-11-15）
- URL: https://filamentphp.com/docs/infolists/overview
- URL（原稿）: https://raw.githubusercontent.com/filamentphp/filament/78c3035931ece552bb2448fe2cc3ff82e8d54e1c/packages/infolists/docs/01-overview.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 詳細のラベルは既定でエントリーの上。横並び（inlineLabel）は選択。
- 版: filamentphp/filament@78c3035（既定ブランチ先頭）
- ライセンス: MIT

### S232 Filament 文書: 空の状態の見出しと説明

> ->emptyStateDescription('Once you write your first post, it will appear here.');

- 媒体・日付: filamentphp/filament の原稿（コミット日 2026-11-15）
- URL: https://filamentphp.com/docs/tables/empty-state
- URL（原稿）: https://raw.githubusercontent.com/filamentphp/filament/78c3035931ece552bb2448fe2cc3ff82e8d54e1c/packages/tables/docs/08-empty-state.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 0 件の見出し・説明の既定を文書が示す（利用者が文言を差し替える）。
- 版: filamentphp/filament@78c3035（既定ブランチ先頭）
- ライセンス: MIT

### S233 Tremor ソース: Table は左揃え・折り返さない・横スクロール

> className={cx("w-full overflow-auto whitespace-nowrap", className)}
> "border-b px-4 py-3.5 text-left text-sm font-semibold",

- 媒体・日付: tremorlabs/tremor の原稿（コミット日 2025-10-10）
- URL: https://tremor.so/
- URL（原稿）: https://raw.githubusercontent.com/tremorlabs/tremor/ca4d588f47820ff3d514d37fa4ee08a4222dec11/src/components/Table/Table.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Tremor Table は左揃え・折り返さず横スクロール。数字の右揃えは利用者が付ける。（この repo の最終コミットは 2025-10-10。）
- 版: tremorlabs/tremor@ca4d588（既定ブランチ先頭）
- ライセンス: Apache-2.0

### S234 dashboard-design（AI エージェント向け skill）: 1 画面 1 問い

> A dashboard answers **one question per screen at first glance**
> Done when each panel has been seen in each state.

- 媒体・日付: abdiraimov-otabek/dashboard-design-skill の原稿（コミット日 2026-11-09）
- URL: https://github.com/abdiraimov-otabek/dashboard-design-skill
- URL（原稿）: https://raw.githubusercontent.com/abdiraimov-otabek/dashboard-design-skill/463b8fdf62c640180ec1ba731f3616c2319bf68c/skills/dashboard-design/SKILL.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: AI 向け dashboard skill。『1 画面 1 問い』『全状態を見る』を要求。MIT。KPI・チャート・ランキング・日付範囲・状態に厚い。表は『Tables and recent activity』の節（S247）が短くある一方、並べ替え・密度・一括操作と詳細画面の章は components.md の見出し一覧に無い。
- 版: abdiraimov-otabek/dashboard-design-skill@463b8fd（既定ブランチ先頭）
- ライセンス: MIT

### S235 dashboard-design: ランキング行の作り（名前・値は右・表形式の数字）

> value (tabular, right)
> Colour is the sign, never the row's rank.

- 媒体・日付: abdiraimov-otabek/dashboard-design-skill の原稿（コミット日 2026-11-09）
- URL: https://github.com/abdiraimov-otabek/dashboard-design-skill
- URL（原稿）: https://raw.githubusercontent.com/abdiraimov-otabek/dashboard-design-skill/463b8fdf62c640180ec1ba731f3616c2319bf68c/skills/dashboard-design/references/components.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: ランキングの行は『名前左・値は tabular で右・割合は薄く固定幅』。比較のための視覚化（3px のバー）を行の底に置く。
- 版: abdiraimov-otabek/dashboard-design-skill@463b8fd（既定ブランチ先頭）
- ライセンス: MIT

### S236 open-dashboard（AI エージェント向けの管理画面パターン集）: 共通の不変条件

> 6. **States**: every pattern handles loading (skeleton), empty, and error explicitly.
> header (title + status + actions: Edit/Delete)

- 媒体・日付: ahpxex/open-dashboard の原稿（コミット日 2026-06-29）
- URL: https://github.com/ahpxex/open-dashboard
- URL（原稿）: https://raw.githubusercontent.com/ahpxex/open-dashboard/aa9815f426e9520841c4aa15a341bfd9f866091f/PATTERNS.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: AI 向けの管理画面パターン集。不変条件はデータの流れ（URL に状態・server function・query key）が中心で、見た目の判断（数字の揃え・状態の色以外の表現・列の取捨選択）の不変条件は無い。詳細画面の型（見出しに状態と操作を置く）は書かれているが、同ファイルで見出し行が 🚧（build target）で、一覧表では ✅ と食い違う。
- 版: ahpxex/open-dashboard@aa9815f（既定ブランチ先頭）
- ライセンス: MIT

### S237 ui-ux-pro-max（AI エージェント向けデザイン skill）: 表の扱いは 1 行

> 71,Responsive,Table Handling,Web,Tables can overflow on mobile,Use horizontal scroll or card layout
> 91,Data Entry,Bulk Actions,Web,Editing one by one is tedious

- 媒体・日付: nextlevelbuilder/ui-ux-pro-max-skill の原稿（コミット日 2026-11-16）
- URL: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- URL（原稿）: https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/902bf616a0cc590d3f89f233f0c4e00072e549f0/.claude/skills/ui-ux-pro-max/data/ux-guidelines.csv
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 121 行のうち表に関する行は 1 つ（モバイルで横スクロールかカード化）。一括操作は 1 行。数字の桁・揃え・状態の出し方・密度の行は無い。--density フラグで密度の目安を切り替える仕組みはあるが、表には結びついていない（SKILL.md 151-154 行）。
- 版: nextlevelbuilder/ui-ux-pro-max-skill@902bf61（既定ブランチ先頭）
- ライセンス: MIT

### S238 MUI X ソース: 密度の係数（compact と comfortable）

> export const COMPACT_DENSITY_FACTOR = 0.7;
> export const COMFORTABLE_DENSITY_FACTOR = 1.3;

- 媒体・日付: mui/mui-x の原稿（コミット日 2026-11-13）
- URL: https://mui.com/x/react-data-grid/
- URL（原稿）: https://raw.githubusercontent.com/mui/mui-x/cd6db723523392a2041aa14030aeb1e6ec8632bd/packages/x-data-grid/src/hooks/features/density/densitySelector.ts
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 密度は compact 0.7・comfortable 1.3 の係数で行高を変える（既定は standard）。
- 版: mui/mui-x@cd6db72（既定ブランチ先頭）
- ライセンス: MIT

### S239 Django admin テンプレート: 一覧の見出しセルは th scope=col

> <th scope="col"{{ header.class_attrib }}>

- 媒体・日付: django/django の原稿（コミット日 2026-11-13）
- URL: https://docs.djangoproject.com/en/stable/ref/contrib/admin/
- URL（原稿）: https://raw.githubusercontent.com/django/django/f24f38c6b2825f15628c07bf2892f1664eed9361/django/contrib/admin/templates/admin/change_list_results.html
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 表の見出しセルは th scope=col。
- 版: django/django@f24f38c（既定ブランチ先頭）
- ライセンス: BSD-3-Clause

### S240 react-admin ソース: 読み込み中の Datagrid は Placeholder

> key={key} > <Placeholder /> </TableCell>

- 媒体・日付: marmelab/react-admin の原稿（コミット日 2026-11-13）
- URL: https://marmelab.com/react-admin/Datagrid.html
- URL（原稿）: https://raw.githubusercontent.com/marmelab/react-admin/f466cf73330d1458c9e371c5a7bce2659ede5817/packages/ra-ui-materialui/src/list/datagrid/DatagridLoading.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 読み込み中は Placeholder を行に敷く。
- 版: marmelab/react-admin@f466cf7（既定ブランチ先頭）
- ライセンス: MIT

### S241 shadcn/ui ソース: dashboard-01 の表は useIsMobile と Drawer を取り込む

> import { useIsMobile } from "@/registry/new-york-v4/hooks/use-mobile"

- 媒体・日付: shadcn-ui/ui の原稿（コミット日 2026-11-13）
- URL: https://ui.shadcn.com/blocks
- URL（原稿）: https://raw.githubusercontent.com/shadcn-ui/ui/e62c9435fff729a175f38983dee73b2cb4f6a069/apps/v4/registry/new-york-v4/blocks/dashboard-01/components/data-table.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: useIsMobile と Drawer を取り込んでいる。狭い画面で行の詳細を Drawer にする作りと見られるが、分岐の本体は読んでいない（推測）。
- 版: shadcn-ui/ui@e62c943（既定ブランチ先頭）
- ライセンス: MIT

### S242 Tremor ソース: BarList の valueFormatter 既定は toString

> valueFormatter = (value) => value.toString(),

- 媒体・日付: tremorlabs/tremor の原稿（コミット日 2025-10-10）
- URL: https://tremor.so/
- URL（原稿）: https://raw.githubusercontent.com/tremorlabs/tremor/ca4d588f47820ff3d514d37fa4ee08a4222dec11/src/components/BarList/BarList.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: BarList の値の書式は既定で toString。桁区切りは利用者が valueFormatter で付ける。
- 版: tremorlabs/tremor@ca4d588（既定ブランチ先頭）
- ライセンス: Apache-2.0

### S243 MUI X 文書: 列の表示の既定は全列表示

> By default, all the columns are visible.

- 媒体・日付: mui/mui-x の原稿（コミット日 2026-11-13）
- URL: https://mui.com/x/react-data-grid/column-visibility/
- URL（原稿）: https://raw.githubusercontent.com/mui/mui-x/cd6db723523392a2041aa14030aeb1e6ec8632bd/docs/data/data-grid/column-visibility/column-visibility.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 列の表示切替は用意されているが、既定は全列表示。
- 版: mui/mui-x@cd6db72（既定ブランチ先頭）
- ライセンス: MIT

### S244 react-admin ソース: DateField は Intl.DateTimeFormat を使う

> Uses Intl.DateTimeFormat() if available, passing the locales and options props as arguments.

- 媒体・日付: marmelab/react-admin の原稿（コミット日 2026-11-13）
- URL: https://marmelab.com/react-admin/DateField.html
- URL（原稿）: https://raw.githubusercontent.com/marmelab/react-admin/f466cf73330d1458c9e371c5a7bce2659ede5817/packages/ra-ui-materialui/src/field/DateField.tsx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 日付は Intl の書式を 1 つ使う。相対時刻の表示は既定では出ない（この部品の範囲）。
- 版: marmelab/react-admin@f466cf7（既定ブランチ先頭）
- ライセンス: MIT

### S245 Filament ソース: numeric()・money() の列は tabular-nums（CSS）

> Numeric and money columns use tabular figures, so digits line up down the column.
> @apply tabular-nums;

- 媒体・日付: filamentphp/filament の原稿（コミット日 2026-11-15）
- URL: https://filamentphp.com/docs/tables/columns/text
- URL（原稿）: https://raw.githubusercontent.com/filamentphp/filament/78c3035931ece552bb2448fe2cc3ff82e8d54e1c/packages/tables/resources/css/columns/text.css
- 取得日: 2026-11-16
- 検証区分: A
- 備考: Filament は numeric・money の列に tabular-nums を CSS で当てる（桁そろえが既定で入る数少ない例）。揃え（右）は別途 alignEnd が必要（S227）。
- 版: filamentphp/filament@78c3035（既定ブランチ先頭）
- ライセンス: MIT

### S246 react-admin 文書: ListGuesser はデータから列を推測する

> It then analyzes the response, and guesses the fields it should use to display a basic `<DataTable>` with the data.

- 媒体・日付: marmelab/react-admin の原稿（コミット日 2026-11-13）
- URL: https://marmelab.com/react-admin/ListGuesser.html
- URL（原稿）: https://raw.githubusercontent.com/marmelab/react-admin/f466cf73330d1458c9e371c5a7bce2659ede5817/docs/ListGuesser.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: react-admin の ListGuesser はデータから列を推測する。取捨選択を機械任せにする既定の例（『エンジニア的に全部並べる』の典型。推測の範囲は文書の1文のみ確認）。
- 版: marmelab/react-admin@f466cf7（既定ブランチ先頭）
- ライセンス: MIT

### S247 dashboard-design: 『Tables and recent activity』の節（右揃えの金額・状態チップ・狭い画面で畳む）

> Hairline row separators, muted date column, right-aligned amounts, small source chips with favicons.
> On phones drop the avatar and the chip and fold their facts into the muted
> **Empty**: never an all-clear ("nothing urgent today") on an account with no data; no data is not good news.

- 媒体・日付: abdiraimov-otabek/dashboard-design-skill の原稿（コミット日 2026-11-09）
- URL: https://github.com/abdiraimov-otabek/dashboard-design-skill
- URL（原稿）: https://raw.githubusercontent.com/abdiraimov-otabek/dashboard-design-skill/463b8fdf62c640180ec1ba731f3616c2319bf68c/skills/dashboard-design/references/components.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: AI 向け skill の表の節。右揃えの金額・状態チップ・狭い画面で畳む指示があり、Tabler skill より表の視覚判断が具体的。ただし並べ替え・密度・一括操作の記述は無い。空の状態で『データ無し＝安心』にしない指示あり。
- 版: abdiraimov-otabek/dashboard-design-skill@463b8fd（既定ブランチ先頭）
- ライセンス: MIT

### S248 ui-ux-pro-max: バッジとチップの行（状態の意味）

> 114,Content,Compact Label Semantics,All,Badges communicate state while chips or tags represent values or actions

- 媒体・日付: nextlevelbuilder/ui-ux-pro-max-skill の原稿（コミット日 2026-11-16）
- URL: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- URL（原稿）: https://raw.githubusercontent.com/nextlevelbuilder/ui-ux-pro-max-skill/902bf616a0cc590d3f89f233f0c4e00072e549f0/.claude/skills/ui-ux-pro-max/data/ux-guidelines.csv
- 取得日: 2026-11-16
- 検証区分: A
- 備考: badge は状態、chip は値や操作、という意味の区別を指示する行。表への適用は書かれていない。
- 版: nextlevelbuilder/ui-ux-pro-max-skill@902bf61（既定ブランチ先頭）
- ライセンス: MIT

## 批判

### S249 Rachel Krause（Nielsen Norman Group）

> Complexity isn't a design failure—complication is.

- 媒体・日付: NN/g 動画「Complex vs. Complicated」, 2026-11-02（ページ表示）
- URL: https://www.nngroup.com/videos/complex-vs-complicated/
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 業務の複雑さと画面の複雑化を分ける。「企業向けは複雑でよい」の反論にも、「単純に見せるために機能を削る」の反論にもなる。

## 引用ではない参照（事実の根拠）

### S250 Polaris（Shopify） components/tables/index-table.mdx

- 要旨（逐語引用なし）: 50 件超でページ送り（Polaris の目安）。GitLab は 20 件超（コンパクトなら 40 件超）、Primer は 1 ページ 20 行から始める、と食い違う。
- 媒体・日付: 文書サイト（アーカイブ経由）、取得 2026-11-16
- URL: https://web.archive.org/web/2026/https://polaris-react.shopify.com/components/tables/index-table
- URL（原稿）: https://raw.githubusercontent.com/Shopify/polaris-react-archive/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/polaris.shopify.com/content/components/tables/index-table.mdx
- 取得日: 2026-11-16
- 検証区分: R（要旨のみ。原稿の内容を確認した上での日本語の整理）
- ライセンス: Shopify/polaris-react-archive の LICENSE は Shopify 製品に連携・非競合の用途に権利を限る独自条件。逐語の引用・転載・翻訳をせず、要旨と分析のみ（区分 R 扱い・照合語を載せない）
- タグ: 表,ページ送り,数値

### S251 Polaris（Shopify） components/tables/data-table.mdx

- 要旨（逐語引用なし）: 折り返すほうを勧める。先頭が同じ語の行見出しは切ると区別がつかない。Cloudscape は切り詰めが既定。
- 媒体・日付: 文書サイト（アーカイブ経由）、取得 2026-11-16
- URL: https://web.archive.org/web/2026/https://polaris-react.shopify.com/components/tables/data-table
- URL（原稿）: https://raw.githubusercontent.com/Shopify/polaris-react-archive/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/polaris.shopify.com/content/components/tables/data-table.mdx
- 取得日: 2026-11-16
- 検証区分: R（要旨のみ。原稿の内容を確認した上での日本語の整理）
- ライセンス: Shopify/polaris-react-archive の LICENSE は Shopify 製品に連携・非競合の用途に権利を限る独自条件。逐語の引用・転載・翻訳をせず、要旨と分析のみ（区分 R 扱い・照合語を載せない）
- タグ: 表,切り詰め,食い違い

### S252 Polaris（Shopify） components/tables/data-table.mdx

- 要旨（逐語引用なし）: 単位は列見出しに入れ、セルには繰り返さない（例: 見出し『Temperature °C』）。小数桁は行ごとにそろえる（Keep decimals consistent）。
- 媒体・日付: 文書サイト（アーカイブ経由）、取得 2026-11-16
- URL: https://web.archive.org/web/2026/https://polaris-react.shopify.com/components/tables/data-table
- URL（原稿）: https://raw.githubusercontent.com/Shopify/polaris-react-archive/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/polaris.shopify.com/content/components/tables/data-table.mdx
- 取得日: 2026-11-16
- 検証区分: R（要旨のみ。原稿の内容を確認した上での日本語の整理）
- ライセンス: Shopify/polaris-react-archive の LICENSE は Shopify 製品に連携・非競合の用途に権利を限る独自条件。逐語の引用・転載・翻訳をせず、要旨と分析のみ（区分 R 扱い・照合語を載せない）
- タグ: 表,数値,単位

### S253 SmartHR Design System「よくあるテーブル」（情報の出し方）

- 要旨（逐語引用なし）: 表はオブジェクトの全項目を出す場所ではない。利用者が行を識別・比較できる情報を選んで出す、と明記している。列数に上限は設けないが、増やすほど認知負荷が上がるので十分に検討せよとも書く。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/design-patterns/smarthr-table/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/design-patterns/smarthr-table/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 列の取捨選択の根拠。「全列を出さない」の公式な言い切り

### S254 SmartHR Design System「よくあるテーブル」（横スクロール）

- 要旨（逐語引用なし）: 横スクロールは一覧性を下げるので、まず表示項目を精査して横スクロールを出さない設計を基本とし、どうしても省けないときだけ許容する。許容する場合は主要な操作列を固定する、またはフルスクリーンレイアウトで幅を広げる、という順序を示す。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/design-patterns/smarthr-table/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/design-patterns/smarthr-table/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 列を足す前に削る順序。固定列は最後の手段という位置づけ

### S255 SmartHR Design System「よくあるテーブル」（情報の省略）

- 要旨（逐語引用なし）: セル内を複数行にしたくないときは三点リーダーで省略し、全文は Tooltip で見せる。省略したままにはしない。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/design-patterns/smarthr-table/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/design-patterns/smarthr-table/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 長い文字列の切り方

### S256 SmartHR Design System「よくあるテーブル」（表の操作と一時操作の分け方）

- 要旨（逐語引用なし）: 表の周りの操作を 2 種に分ける。データを追加・変更する操作は見出しの右（表の外）に、検索・絞り込み・ダウンロード・ページ送りのようにデータを変えない一時的な操作は表のパネルの上部に置く。件数は「1-50 / 5,000」の形で現在位置を示し、1 ページは 20 から 50 件が多い。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/design-patterns/smarthr-table/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/design-patterns/smarthr-table/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 表まわりの操作の置き場所の分類。件数表示

### S257 SmartHR Design System「よくあるテーブル」（モバイル）

- 要旨（逐語引用なし）: 幅の要る表は狭い画面に向かないので、モバイルでは「よくあるリスト」に置き換える。リストは 1 ページ 5 から 20 件、1 項目につきステータスと最大 2 行分の情報だけを出し、出し切れない情報は詳細ビューへ回す。表のボタン最大 3 つはリストでは最大 2 つになる。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/design-patterns/smarthr-table/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/design-patterns/smarthr-table/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 表を狭い画面へ縮める時の削り方（何を落とすか）

### S258 Polaris（Shopify） patterns/resource-details-layout/variants/default.mdx

- 要旨（逐語引用なし）: 詳細画面は 2 カラム（主 2/3・副 1/3）で、同種の内容を 1 枚のカードにまとめ、小さな作業ごとに集中できるようにする。
- 媒体・日付: 文書サイト（アーカイブ経由）、取得 2026-11-16
- URL: http://web.archive.org/web/20250217013638/https://polaris.shopify.com/patterns/resource-details-layout
- URL（原稿）: https://raw.githubusercontent.com/Shopify/polaris-react-archive/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/polaris.shopify.com/content/patterns/resource-details-layout/variants/default.mdx
- 取得日: 2026-11-16
- 検証区分: R（要旨のみ。原稿の内容を確認した上での日本語の整理）
- ライセンス: Shopify/polaris-react-archive の LICENSE は Shopify 製品に連携・非競合の用途に権利を限る独自条件。逐語の引用・転載・翻訳をせず、要旨と分析のみ（区分 R 扱い・照合語を載せない）
- タグ: 詳細,数値

### S259 SmartHR Design System「基本機能の共通設定」（一覧ビューと詳細ビュー）

- 要旨（逐語引用なし）: 管理系の画面を「一覧ビュー・詳細ビュー・アクションビュー」に分け、詳細ビューは一覧の行名リンクから入る。詳細の見出しはオブジェクトの名前（インスタンス名）、見出しの右に画面全体への操作を置き、主要な操作以外はドロップダウンにまとめる。削除のような破壊的な操作は一覧ではなく詳細ビューに置く。OOUI（オブジェクト指向 UI）の「コレクション」と「シングル」の考え方に基づく。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/design-patterns/main-admin-core-features/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/design-patterns/main-admin-core-features/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 詳細画面の見出しに置くもの。破壊的操作の置き場所

### S260 SmartHR Design System「DefinitionList」（参照用の項目表示）

- 要旨（逐語引用なし）: 編集しない画面（確認画面・参照用の表示）で名前と値を並べるときは定義リストを使う。氏名とヨミガナのように関連のある項目は横に並べて関連を示す。値の無い項目の扱いは S265 に従う。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/components/definition-list/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/components/definition-list/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 詳細画面のキーと値の並べ方

### S261 SmartHR Design System「視覚的グルーピング」

- 要旨（逐語引用なし）: 余白・矩形・罫線で情報のまとまりを示すとき、グループの入れ子を深くしない（深いほど関係の把握が難しくなる）。同じ階層・性質の要素は同じ表現で囲み、画面ごとに表現を変えない。深くなりそうなら情報設計や画面構成のほうを見直す。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/design-patterns/visual-grouping/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/design-patterns/visual-grouping/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 詳細画面の節の分け方。カードの入れ子への牽制

### S262 SmartHR Design System「よくあるテーブル」（ステータス列）

- 要旨（逐語引用なし）: 状態の列見出しは「ステータス」とし、同じ表に状態が複数ありどうしても呼び分けるときだけ「〇〇状況」とする。「状況」「状態」だけの見出しは何の状態か曖昧なので避ける。依頼・提出・承認のように段階のある業務で、いまどの段階かを伝える目的で使う。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/design-patterns/smarthr-table/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/design-patterns/smarthr-table/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 状態名・見出しの文言。承認フローの段階表示

### S263 SmartHR Design System「StatusLabel」（状態ラベルの使い方）

- 要旨（逐語引用なし）: 状態ラベルは 1 オブジェクトに 1 つ（開始前・進行中・完了のような生涯の段階。絞り込みと並べ替えの基準になる状態にだけ使う）。日数や件数のように個体ごとに変わる値はラベルに埋めず、別の列に文字で出す。色だけで状態を伝えず、名前を付ける。強調ありは「次に進むために利用者の操作が要る」状態に限る。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/components/status-label/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/components/status-label/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 状態の色とラベルの設計。「ラベルを増やさない」根拠

### S264 SmartHR Design System「よくあるテーブル」（0 件の表示）

- 要旨（逐語引用なし）: データが 1 件も無い初期状態では表を出さず、パネル中央に「{オブジェクト名}はありません。」と追加を促すボタンを置き、並べ替えや一括更新など対象が無いと成立しない操作と一時操作エリアは隠す。検索や絞り込みの結果が 0 件のときは、表のヘッダーと一時操作エリアを残し、「該当する…はありません。別の条件を試してください。」と出す。「何も無い」と「絞り込みで 0 件」を別の状態として設計している。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/design-patterns/smarthr-table/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/design-patterns/smarthr-table/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 空・0 件の 2 種類の設計。文言の型

### S265 SmartHR Design System「値がない項目の表示」

- 要旨（逐語引用なし）: 値が無い項目は基本は空白。ただし入力できない項目（別の設定の結果、そもそも値を持てない項目）には「-」を無効色で出す。「未設定」と「存在しえない」を見分けさせる点は、ベイジの記事（S100）と同じ方針。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/design-patterns/empty-data/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/design-patterns/empty-data.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 空欄の 2 つの意味の見分け方

### S266 Polaris（Shopify） components/tables/index-table.mdx

- 要旨（逐語引用なし）: 490px 未満の画面では一括操作を隠してよいが、作業に不可欠でないときだけ。
- 媒体・日付: 文書サイト（アーカイブ経由）、取得 2026-11-16
- URL: https://web.archive.org/web/2026/https://polaris-react.shopify.com/components/tables/index-table
- URL（原稿）: https://raw.githubusercontent.com/Shopify/polaris-react-archive/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/polaris.shopify.com/content/components/tables/index-table.mdx
- 取得日: 2026-11-16
- 検証区分: R（要旨のみ。原稿の内容を確認した上での日本語の整理）
- ライセンス: Shopify/polaris-react-archive の LICENSE は Shopify 製品に連携・非競合の用途に権利を限る独自条件。逐語の引用・転載・翻訳をせず、要旨と分析のみ（区分 R 扱い・照合語を載せない）
- タグ: 一括,狭い画面,数値

### S267 SmartHR Design System「よくあるテーブル」（行の操作と表の操作の数）

- 要旨（逐語引用なし）: 行ごとの操作ボタンは 1 行につき最大 3 つ、置く位置は視線導線に合わせて右端の列。表の外の操作エリア（追加・並べ替え・一括など）も最大 3 つで、超える分はドロップダウンメニューにまとめる。上限の 3 は出典あり（SmartHR の指針）で、他社にも当てはまる数値ではない。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/design-patterns/smarthr-table/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/design-patterns/smarthr-table/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 操作数の上限。数値は出典あり・ただし一社の方針と明記して使う

### S268 SmartHR Design System「表の一括操作」（選択状態の文言と件数）

- 要旨（逐語引用なし）: 一括操作エリアに、選択状態を日本語の文で出す（未選択・N 件選択・このページの全件・一覧の全件、の 4 型）。ページをまたぐ全件選択は別のリンクで明示し、一括操作ボタンは多くても 4 つ程度に抑える。「このページ」と「一覧全体」を言い分ける点が、日本の業務画面でよい手本になる。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/design-patterns/table-bulk-action/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/design-patterns/table-bulk-action/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 一括操作の選択状態の文言。ページ内全選択と全件選択の区別

### S269 SmartHR Design System「表の一括操作」（全選択チェックボックスの挙動）

- 要旨（逐語引用なし）: 全選択チェックボックスは、一部だけ選択された混在状態でクリックすると全解除になり、ページ送りをしたときも選択は維持せず全解除する。デジタル庁のデザインシステムは同じ混在状態のクリックで全選択になる（S116）ので、全選択の挙動は国内でも流派が割れている。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/design-patterns/table-bulk-action/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/design-patterns/table-bulk-action/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 誤操作を避ける選択解除の方針。S157 との対比

### S270 SmartHR Design System「フィルターのドロップダウン」

- 要旨（逐語引用なし）: 絞り込みはドロップダウンのパネルで足りるうちはそれで済ませ、条件が複雑で広さが要るときはダイアログにする（その場合は「フィルター」ボタンで呼ぶ）。モバイルではパネルをやめてダイアログにする。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/components/dropdown/filter-dropdown/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/components/dropdown/filter-dropdown/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 絞り込み UI の段階的な出し方

### S271 SmartHR Design System「SpreadsheetTable」（表計算ソフト風の表示）

- 要旨（逐語引用なし）: 取り込み前の CSV を確認する画面向けに、表計算ソフト風の表示部品を持つ。利用者が慣れた表計算の見た目を、取り込みの確認という特定の場面に限って使う、という位置づけ。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/components/spreadsheet-table/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/components/spreadsheet-table/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: Excel・CSV 文化との接点（一般の一覧には使わず、取り込み確認に限る）

### S272 Polaris（Shopify） design/layout/density.mdx

- 要旨（逐語引用なし）: 管理画面は『既定で高密度』で、作業に応じて段が変わる。高密度は一覧・表、低密度は商品詳細のような集中編集。Cloudscape の『既定はゆったり』と立場が異なる。
- 媒体・日付: 文書サイト（アーカイブ経由）、取得 2026-11-16
- URL: http://web.archive.org/web/20250214085946/https://polaris.shopify.com/design/layout/density
- URL（原稿）: https://raw.githubusercontent.com/Shopify/polaris-react-archive/3f7954ae42fabf26d63cee68c23ceebfd7ef0972/polaris.shopify.com/content/design/layout/density.mdx
- 取得日: 2026-11-16
- 検証区分: R（要旨のみ。原稿の内容を確認した上での日本語の整理）
- ライセンス: Shopify/polaris-react-archive の LICENSE は Shopify 製品に連携・非競合の用途に権利を限る独自条件。逐語の引用・転載・翻訳をせず、要旨と分析のみ（区分 R 扱い・照合語を載せない）
- タグ: 密度

### S273 SmartHR Design System「よくあるテーブル」（フルスクリーンレイアウト）

- 要旨（逐語引用なし）: 表を見る・操作すること自体が主たる業務の画面では、画面幅いっぱいのレイアウトを使う。その代わり 1 画面に表は 1 つだけで、縦スクロール時は見出し行を固定する。通常はパネル内の表で、ほかの要素や複数の表を同じ画面に置けるが、横幅は狭い。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/design-patterns/smarthr-table/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/design-patterns/smarthr-table/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 高密度・熟練者向けの画面の位置づけ（SmartHR は用途で 2 種に分けている）

### S274 SmartHR Design System「数え方・数字の表記」（数字・桁区切り・単位）

- 要旨（逐語引用なし）: 数字は半角の算用数字、3 桁ごとに半角カンマ。人は「名」、書類・依頼・申請・アカウントは「件」と数え分ける。ファイルサイズは数字と単位の間に空白を置かない。日本語の業務画面の表記の基準として、そのまま採用できる粒度の指針。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/contents/idiomatic-usage/count/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/contents/idiomatic-usage/count.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 数字・桁区切り・単位の表記

### S275 SmartHR Design System「日付・時刻・期間の表記」

- 要旨（逐語引用なし）: 画面の日付は表示言語に合わせた形式（日本語は 2025/01/01）、時刻は 24 時間制で hh:mm:ss（秒は省略可）、期間は「〜」でつなぐ。CSV や API のように機械が扱う日付は YYYY/MM/DD に固定。月日を 1 桁で書く、12 時間制にする、期間にハイフンを使うのは NG として挙げている。ヘルプなど説明文では「2025年1月1日」のような表記も許す。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/contents/idiomatic-usage/count/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/contents/idiomatic-usage/count.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 日付・時刻・期間の表記。和暦は S277

### S276 SmartHR Design System「CurrencyInput」（金額入力）

- 要旨（逐語引用なし）: 金額の入力欄は専用部品を使い、整数ならフォーカスを外した時点で 3 桁カンマに整形する。通貨記号や単位は入力欄の前後（prefix・suffix）に出し、「円」は後ろ、米ドルは前、という慣例に従う。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/components/input/currency-input/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/components/input/currency-input/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 金額の入力と単位の置き方

### S277 SmartHR Design System「WarekiPicker」（和暦入力）

- 要旨（逐語引用なし）: 紙の書類が和暦で書かれている業務向けに、和暦を貼り付けると西暦へ変換する入力部品を用意している。見た目からは和暦に対応していると分からないので、ラベルや説明文で明示する。和暦の扱いは「内部は西暦、入力の入り口で和暦を受ける」という形。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/components/wareki-picker/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/components/wareki-picker/index.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 和暦の扱い。帳票・紙の様式との接点

### S278 SmartHR Design System「アプリのライティング」（画面タイトル・ボタンの言葉）

- 要旨（逐語引用なし）: 画面タイトルと項目名は名詞（「権限の追加」）、ボタンは動詞の終止形（「権限を追加」）で、サ変動詞の「する」は省いて「追加」「削除」と短くする。業務アプリには短い文言が合うという理由づけがある。ダイアログの見出し「〇〇の追加」と実行ボタン「追加」は動作の語を一致させる。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/contents/ui-text/app-writing/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/contents/ui-text/app-writing.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 日本語の画面・ボタン・ダイアログの文言の型

### S279 SmartHR Design System「アプリのライティング」（一覧の見出しと戻るリンク）

- 要旨（逐語引用なし）: 一覧であることが明らかな表の見出し・一覧画面のタイトルには「一覧」を付けない（機能名とオブジェクト名が同じ場合だけ区別のため付ける）。一方で「戻る」リンクは戻り先を具体的に伝えるため「〇〇一覧に戻る」とする。移動は場所が分かれば「に」、相対的な位置なら「へ」。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/contents/ui-text/app-writing/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/contents/ui-text/app-writing.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 一覧の見出し・戻るリンクの文言

### S280 SmartHR Design System「アプリのライティング」（監査ログと複製名）

- 要旨（逐語引用なし）: 監査ログの操作内容は「ユーザーを作成」の体言止めで統一する。完結した文にすると表現が割れて検索性が落ち、文末の「〜しました」が一覧に並んでノイズになり横幅を食うため。読み手を管理者・情報システム担当者に限定し、読みやすさより一貫性・一覧性・検索性を取る、と優先順位を明示している。複製物の名前は末尾ではなく頭に「（コピー）」を付け、一覧での見分けやすさを保つ。
- 媒体・日付: SmartHR Design System（kufu/smarthr-design-system の main、commit 05a9425754、2026-11-16 時点）
- URL: https://smarthr.design/products/contents/ui-text/app-writing/
- URL（原稿）: https://raw.githubusercontent.com/kufu/smarthr-design-system/05a9425754795e79bba6c87dd144f077856f94cf/src/content/articles/products/contents/ui-text/app-writing.mdx
- 取得日: 2026-11-16
- 検証区分: A
- 備考: リポジトリに LICENSE ファイルが無く、文書サイトの利用規約（terms.mdx）は「提供コンテンツ」の再配布・他サイトへの掲載を NG とする。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。
- 使いどころ: 履歴・監査ログの文言。一覧での視認性を理由にした命名

### S281 pro-components・Django admin・Tabler の不在確認

- 取得日: 2026-11-16
- 検証区分: A-不在（範囲限定）
- 備考: 『既定のままだと数字が右に揃わない・並べ替えの aria が無い』の根拠。範囲外（別パッケージ・テーマ・利用側の CSS）で足している可能性は残る。
- 内容: ProComponents の `src/table`・`src/field`・`src/descriptions` に `tabular-nums`・`aria-sort`・`align: 'right'` が 0 件。Django admin の `changelists.css` に右揃えの規則が 0 件で `admin_list.py` の行 class は `field-*`・`action-checkbox`・`nowrap` のみ。Tabler の `sortable.ts` に `aria-sort` が 0 件。
- 照合: grep の件数（0 件）。ProComponents は固定コミットの tarball（codeload）から src を展開して grep。

## 国内の実務記事・画面デザインの進め方

### S282 mskmiki「なぜエンジニアが作る画面はダサいのか…?」（SE の A さんの手順）

> Aさんは、まず情報を表をつかってきれいに整理しました。
> つまり、Aさんの中で、画面デザインのことを画面設計の後にやる「＋α」「お化粧」と考えていました。
> ボタンがくっつきすぎていて体格のいい男性トレーナーの太い指ではもしかしたらタップ操作が難しいかもしれません。
> 次に、機能を追加します。
> 操作に迷わないように、丁寧な説明文を追記しました。
> Aさんはそこにも気を配り「行を縞々にする」というひと手間加えました。
> 反対に、SEのAさんの画面デザインはというと、あんなに心配りをしていたのにも関わらず、「じっとみないと情報が目に入ってこない」ですよね。

- 媒体・日付: @mskmiki（INTEC Advent Calendar 2021 Day 18）。Qiita。2021-12-08 公開（作成は 2021-12-07。下の備考）、2024-12-25 更新
- URL: https://qiita.com/mskmiki/items/544149987475719e417b
- URL（原稿）: https://qiita.com/mskmiki/items/544149987475719e417b.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 記事はフィクションと明記（S293）。A さんの画面を「悪い画面の実例」として一般化しない。利用場面はフィットネストレーナーのタブレット画面で、管理画面そのものではない。公開日の表記ずれ: 記事ページの埋め込みデータでは createdAt が 2021-12-07T08:47:56Z（JST 2021-12-07 17:47。datePublished の 2021-12-07T17:47:56+09:00 と同じ時刻）、publishedAt が 2021-12-08T07:36:19Z（JST 2021-12-08 16:36）。どちらの時刻も UTC と JST の換算で日付は変わらず、12-07 と 12-08 の違いは作成日時と公開日時の違いによる。公開日は 12-08 とした。
- 要旨: SE の A さんの手順は「表にまとめる → 機能を足す（リンク・登録ボタン・削除チェックボックス・編集ボタン）→ 画面タイトル → 説明文 → 最後に色・太字・アイコン・縞々の行」。デザインを設計の後の「お化粧」と捉えている。仕上がりは「じっとみないと情報が目に入ってこない」と記事は評する。
- 使いどころ: 「DB の列を表にして、機能を足し、最後に色を塗る」順序の典型例。回答スタイルで「いまの作り方は A の順序になっていないか」と確かめる材料。

### S283 mskmiki（デザイナーの B さんの手順）

> 次に、デザイナーのBさんですが、まず「どう使うかをとことん考え」「情報のグループ化や優先順位付け、加工など」を徹底的にやりました。
> その後、「優先順位の順に情報を強弱をつけながら配置」して、「機能を追加」、仕上げとして画面全体の中でどういう部品であると認識してもらいたいかを意識して装飾をしました。
> つまり、Bさんは「ここから設計」「ここからデザイン」という意識は全くなく、設計そのものがデザインであるという認識でした。

- 媒体・日付: @mskmiki。Qiita（S282 と同じ記事）
- URL: https://qiita.com/mskmiki/items/544149987475719e417b
- URL（原稿）: https://qiita.com/mskmiki/items/544149987475719e417b.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「優先順位が高いものを上か左に配置」は記事の基本ルールだが、右から左に読む言語や、中央に主役を置く画面には当てはまらない（記事の主張ではなく本 skill の注意）。
- 要旨: B さんの手順は「使う場面を想像 → 使える情報を見る → ラベルを消して必要なものだけ戻す → グループ化 → グループと項目の優先順位 → 加工 → 一覧形式を比べて選ぶ → 優先順位順に配置 → 機能 → 装飾」。装飾は仕上げで、部品の役割を伝えるために行う。
- 使いどころ: 本 skill の回答スタイル案の原典。「使う場面 → 情報の整理 → 形式選び → 機能 → 装飾」の順序。

### S284 mskmiki（ラベルを消す・加工する・相対時刻）

> そして、いきなり、ラベルを消してしまいます。大丈夫でしょうか・・・
> また、「生年月日」は「生まれ」と補足するだけでわかるようになるので、それを追加しました。
> 会話の中では「具体的な日時」より「1週間前」「明日」とかの方が理解しやすいくていいよね
> 生年月日より、何歳っていう表現の方が会話につながりやすいよね。

- 媒体・日付: @mskmiki。Qiita（S282 と同じ記事）
- URL: https://qiita.com/mskmiki/items/544149987475719e417b
- URL（原稿）: https://qiita.com/mskmiki/items/544149987475719e417b.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 相対時刻は会話の場面（トレーナーが会員と話す）での判断。一覧の並べ替えや監査ログには不向きな場合がある（S305）。記事のラベル消しは一人称の短い画面の話で、数百行の表の列見出しを消す話ではない。
- 要旨: 全部のラベルをいったん消し、伝わらない項目だけに補足を戻す（「会員No」には「No.」、生年月日には「生まれ」）。氏名のように見れば分かる項目は戻さない。値も使う場面に合わせて加工する（生年月日 → 年齢、日時 → 「1 週間前」「明日」）。
- 使いどころ: ラベルの削り方の手順。相対時刻・年齢への加工の根拠。S304（Refactoring UI のラベル論）と同じ方向。

### S285 mskmiki（グループ化と優先順位）

> Bさんが分けたのは以下の3つのグループです。
> 次に、同じグループの中でも優先順位をつけて、その優先順位を大きさだったり順番で表現してみました。
> 「優先順位が高いものを上か左に配置」していくのが基本です。

- 媒体・日付: @mskmiki。Qiita（S282 と同じ記事）
- URL: https://qiita.com/mskmiki/items/544149987475719e417b
- URL（原稿）: https://qiita.com/mskmiki/items/544149987475719e417b.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 3 グループの分け方は架空の場面の例で、他の場面にそのまま当てはまる分類ではない。
- 要旨: 会員情報を「個人の識別に使う情報」「連絡に使う情報」「会話のネタになる情報」の 3 つに分け、グループにも項目にも優先順位をつけ、大きさと並びで表す。連絡先は直接開けるようにアイコンのリンクにする、という機能の見せ方も加工に含めている。
- 使いどころ: 「何を出すか」の前に「どの目的のまとまりか」を決める手順。詳細画面の見出し・節の分け方の根拠。

### S286 mskmiki（一覧形式 4 種の比較）

> 柔軟なソートや絞り込み、その場での編集が得意
> ビジュアル要素がメインの場合を得意
> 順番が重要でかつ、ビジュアル要素もテキスト要素もまとめやすい
> 今回はビジュアル要素もテキスト要素も使え、機能も追加しやすい「カード形式」を選択することにしました。
> で、配置するんですが、その前に、一覧レイアウトを検討します。
> | 表形式  | 柔軟なソートや絞り込み、その場での編集が得意  |
> | グリッド  | ビジュアル要素がメインの場合を得意  |
> |  リスト | 順番が重要でかつ、ビジュアル要素もテキスト要素もまとめやすい  |
> |  カード |  リストに似ているけど、さらに機能を追加しやすい |

- 媒体・日付: @mskmiki。Qiita（S282 と同じ記事）
- URL: https://qiita.com/mskmiki/items/544149987475719e417b
- URL（原稿）: https://qiita.com/mskmiki/items/544149987475719e417b.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 記事の表は 4 行の短い比較で、選定の基準としては粗い。カードを選んだのはこの架空の場面（タブレット・会話しながら・最新を見る）での結論で、管理画面の一覧一般の結論ではない。比較・並べ替えが主の業務一覧では逆になりうる（S298）。
- 要旨: 表形式は並べ替え・絞り込み・その場の編集が得意、グリッドは視覚要素が主のとき、リストは順番が重要で視覚と文字をまとめやすいとき、カードはリストに近く機能を足しやすい。記事はこの場面ではカードを選び、最新を見るので日付の降順にした。
- 使いどころ: 一覧形式を比べて選ぶ手順の原典。表を既定にしない判断の根拠（反対側の根拠は S298・S299・S301）。

### S287 mskmiki 心得その1「いきなり表をつくるところから始めない」

> 一度表を作ってしまうと、思考がどうしても固まってしまい
> とりあえずいきなり表を作るのは我慢して、ジックリ比較して考えてみるというのが重要だということです。
> SEが覚えておきたい画面デザインの心得6か条
> その1.いきなり表をつくるところから始めない
> 誤解をしないでいただきたいのですが、これは表が悪いということではありません。

- 媒体・日付: @mskmiki。Qiita（S282 と同じ記事）
- URL: https://qiita.com/mskmiki/items/544149987475719e417b
- URL（原稿）: https://qiita.com/mskmiki/items/544149987475719e417b.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 記事自身が「表が悪いということではありません」と断っている。表を避ける主張として使わない。
- 要旨: 表が悪いのではなく、先に表を作ると別の形式（グリッド・リスト）に気づけなくなる、という指摘。
- 使いどころ: 「まず表」を既定にしない回答スタイルの根拠。

### S288 mskmiki 心得その2「なくても伝わるものは削る」

> ラベル、情報の間を区切る線など絶対に必要なものだと思ってないでしょうか?
> 無くても伝わるものは極力削っていくことが成功のカギ
> その2.なくても伝わるものは削る

- 媒体・日付: @mskmiki。Qiita（S282 と同じ記事）
- URL: https://qiita.com/mskmiki/items/544149987475719e417b
- URL（原稿）: https://qiita.com/mskmiki/items/544149987475719e417b.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「Simple is BEST」と「デザインでも…と言われています」は出典の無い一般論として書かれている。
- 要旨: ラベルや区切り線も「絶対に必要」と決めつけず、一度立ち止まって要否を考える。
- 使いどころ: 取捨選択の最初の問い。削る候補の例（ラベル・区切り線）。

### S289 mskmiki 心得その3「情報は強弱をつける」

> 優先順位順に強弱をつけて表現すると、パット見で情報が目に飛び込んできて、かつ魅力的に見せることが出来ます。
> その3.情報は強弱をつける

- 媒体・日付: @mskmiki。Qiita（S282 と同じ記事）
- URL: https://qiita.com/mskmiki/items/544149987475719e417b
- URL（原稿）: https://qiita.com/mskmiki/items/544149987475719e417b.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「魅力的」は記事の評価で、利用者テストの結果ではない。
- 要旨: 全情報を同じ大きさ・色・調子で並べると単調になる。優先順位に応じた強弱（メリハリ）で、ひと目で目に入る画面にする。
- 使いどころ: 詳細画面の見出し・主要項目と補足の差の根拠。

### S290 mskmiki 心得その4「データの加工を厭わない」

> どうしても、データベースの値と画面の表示を同じにしてしまいがちだと思いますが、ユーザの使うシーンなどをイメージしながら、面倒でもデータの加工をしてあげるだけで、これだけ変わってきます。
> その4.データの加工を厭わない

- 媒体・日付: @mskmiki。Qiita（S282 と同じ記事）
- URL: https://qiita.com/mskmiki/items/544149987475719e417b
- URL（原稿）: https://qiita.com/mskmiki/items/544149987475719e417b.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 加工は表示の話で、絶対値・監査用の正確な値を隠してよいという意味ではない（監査ログでは絶対時刻が要る。本 skill の注意）。
- 要旨: DB の値をそのまま出さず、使う場面に合わせて加工する（相対時刻・年齢・アイコンのリンクなど）。
- 使いどころ: 「DB の列をそのまま並べない」の国内の原典。加工の例は S284。

### S291 mskmiki 心得その5「装飾で『どういうものか』を表現する」

> 装飾は「今風」とか「おしゃれ感」を演出するのではなく
> 「ここは押せますよ」「選択していますよ」「ここは重要ですよ」「ここは機能が隠れています」ということを表現することに力をいれましょう。
> その5.装飾で「どういうものか」を表現する

- 媒体・日付: @mskmiki。Qiita（S282 と同じ記事）
- URL: https://qiita.com/mskmiki/items/544149987475719e417b
- URL（原稿）: https://qiita.com/mskmiki/items/544149987475719e417b.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 色の具体的な使い方（色だけに頼らない等）は記事に無い。別の出典（SmartHR・デジタル庁。国内の調査の項目）で補う。
- 要旨: 装飾の目的は流行や雰囲気ではなく、押せる・選択中・重要・隠れた機能、という部品の役割を伝えること。そうすれば説明文を減らせる。
- 使いどころ: 色・太字・アイコンを足す前の問い（何を伝えるための装飾か）。状態表示の設計の根拠。

### S292 mskmiki 心得その6「設計とデザインを線引きして区別しない」

> 「画面デザインとは画面設計である」という意識ができると違いが出てくると思います。
> その6.設計とデザインを線引きして区別しない

- 媒体・日付: @mskmiki。Qiita（S282 と同じ記事）
- URL: https://qiita.com/mskmiki/items/544149987475719e417b
- URL（原稿）: https://qiita.com/mskmiki/items/544149987475719e417b.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 記事は初級者向けの説明で、役割分担（デザイナーとエンジニアの分業）を否定しているわけではない。
- 要旨: 設計（機能・項目）とデザイン（見た目）を前後に分けると、設計の段階で上限が決まってしまい、後から優秀なデザイナーが装飾しても届かない。
- 使いどころ: skill の立場の根拠（情報の取捨選択そのものが設計でありデザイン）。

### S293 mskmiki（記事の限界の自己申告）

> 必ずしも全ての状況でBさんの画面がよい、そしてBさんの画面が最適解と言っているものではありません。
> 登場人物の考え方、手順、完成した画面など本記事に掲載させている内容は、初級者にわかりやすくするためにつくられたフィクションです。

- 媒体・日付: @mskmiki。Qiita（S282 と同じ記事）
- URL: https://qiita.com/mskmiki/items/544149987475719e417b
- URL（原稿）: https://qiita.com/mskmiki/items/544149987475719e417b.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 本文の評価（「パッと見で情報が目に入る」「直感的に操作できそう」）は著者の主観で、利用者テストの結果ではない。
- 要旨: 著者自身が、B さんの画面は最適解ではなく、登場人物・手順・画面は初級者向けの創作だと明記している。
- 使いどころ: S282・S283・S284・S285・S286・S287・S288・S289・S290・S291・S292 を一般則として引用するときの留保。回答では「考え方の対比」として使い、「A は悪い・B が正解」と言わない。

### S294 Ryuki4648「【エンジニア向け】“心地よい”管理画面のデザイン 〜 デザインの4原則 +α 〜」

> 「管理画面はデザインがないので、エンジニア側でよしなに作成してください。」と依頼されることがあります
> どんなに「美しくデザインされたコンポーネント」を使っても、その使い方次第で画面の印象は大きく変わります。
> 見出し（「設備情報」や「点検情報」）や項目、テキストのフォントサイズが同じで強弱がついていない

- 媒体・日付: @Ryuki4648。Qiita。2025-05-28 公開。いいね 1（2026-11-16 時点）
- URL: https://qiita.com/Ryuki4648/items/9d8d626d58c62bfc376f
- URL（原稿）: https://qiita.com/Ryuki4648/items/9d8d626d58c62bfc376f.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 反応は小さい（いいね 1）。記事内の修正前後は図で、本文は図の中身を述べない箇所が多い。余白の「意味」の話は一般論。
- 要旨: 管理画面のデザインが無いまま「よしなに」依頼されるエンジニア向けに、近接・整列・反復・対比（と余白・視線誘導）を、設備の点検画面の修正前・修正後の例で説明する。UI ライブラリを使っても使い方で印象が変わる、という立場。
- 使いどころ: 管理画面でデザインが無い場面の問題設定。4 原則を管理画面の詳細画面に当てた例。

### S295 hisashi_matsui「UI設計、画面設計での学び」

> 本当に必要な情報、頻繁に使う機能だけを常時表示してそれ以外はまとめたり、閉まっておく（プルダウン、隠しメニュー、表示/非表示、など）
> こうやって情報量を削らないとどんどん増えてしまいがち。
> 縦横を混在させすぎない、基本的にリストは縦方向、詳細は横方向。

- 媒体・日付: @hisashi_matsui（フロントエンドエンジニア。デザイン会議の内容の再整理）。Qiita。2023-05-26 公開、2025-07-21 更新。いいね 3
- URL: https://qiita.com/hisashi_matsui/items/a6c9282615076016c170
- URL（原稿）: https://qiita.com/hisashi_matsui/items/a6c9282615076016c170.md
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 筆者はデザイナーではなく、会議で聞いた内容の整理。数値や図の根拠は無い。「圧迫感をなくす」と情報密度の関係は、業務用の高密度画面とは緊張する（S301・S307 と対）。
- 要旨: 情報には役割・状態・優先度・操作・表示がある、役割のブロックでまとめるのが画面設計の基本、常時表示は必要なものと頻繁なものだけ、色は効果のあるものに絞る、目線は定まる場所を作る。
- 使いどころ: 取捨選択の観点（役割・状態・優先度）。「常時表示を絞り、残りは隠す」の根拠。

### S296 SIOS Tech Lab「複雑な『データテーブル』を使いやすくするデザインパターン」（列の取捨選択）

> データベースの値をそのまま画面に出力した結果、列が多すぎて横スクロールが長くなったり、どこにどのアクションボタンがあるのか分からない「カオスな表」に遭遇した経験がある方もいらっしゃるでしょう。
> データベースに存在するカラムをすべて画面に出す必要はありません。
> データベースの列の順序に従うのではなく、ユーザーが情報を把握しやすい順序に並べます。

- 媒体・日付: SIOS Tech Lab（筆者名「上坂 江平」）。2026-11-12 公開
- URL: https://tech-lab.sios.jp/archives/56380
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 公開から 4 日。反応数は確認できない。数値は無い。SmartHR のデザインシステム（S253）の方針と同じ方向で、独立した裏づけではない。
- 要旨: 表に出すのはタスクに必要な情報だけ。行の「顔」（ID・名前・重要な状態）を左端に置き、DB の列順に従わない。
- 使いどころ: 「DB の列をそのまま並べない」の国内の技術ブログの明文。列の取捨選択と並び順。

### S297 SIOS Tech Lab「複雑な『データテーブル』…」（数値の右揃え・罫線・詳細の逃がし方）

> 桁の位置が揃うため、ユーザーは「どの値が大きいか（桁数が違うか）」を瞬時に比較・スキャンできるようになります。
> 線が多すぎると「データ」よりも「線」というノイズにユーザーの視覚リソースが奪われてしまいます。
> 長い備考欄やエラーのスタックトレースなどを無理にセル内に押し込むと、行の高さが不揃いになりUIが崩壊します。

- 媒体・日付: SIOS Tech Lab（筆者名「上坂 江平」）。2026-11-12 公開
- URL: https://tech-lab.sios.jp/archives/56380
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 「縦線を消せば列を独立したブロックと認識できる」は記事の主張で、検証の数値は無い。
- 要旨: 数値は右揃え（桁が揃う）、縦罫線を消して余白で列を分ける、横線は薄く、行が多ければゼブラ、長い詳細はツールチップ・展開行・ドロワーへ、行操作は右端・一括操作は左のチェックボックス、空・読み込み・エラーの 3 状態。
- 使いどころ: 表の見た目の基本ルールの国内の記事（数値は右揃え・罫線より余白・詳細を逃がす）。

### S298 池田拓司「第15回 カードUIの向き不向き」（gihyo.jp。WEB+DB PRESS Vol.112 の連載）

> PCではテーブルを使ってデザインすることが適している場合が多いですが、スマートフォンでは横幅に制限があるため、カードUIに置き換えて使うこともよくあります。
> テーブルのほうが2カラムのカードUIに比べて上下に情報を比較検討しやすくなります。
> カードUIの場合は、まず写真を手がかりに探索し、それに対して名前やメールアドレスなどを確認するような体験には向いていますが、各要素を比較するのには不向きです。

- 媒体・日付: gihyo.jp の連載（URL は design/serial/01/ui-design-unsung）。筆者は池田拓司。初出は WEB+DB PRESS Vol.112（2019-08-24 発売）、Web 版は 2019-10-23 公開
- URL: https://gihyo.jp/design/serial/01/ui-design-unsung/0015
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 2019 年の記事で、対象はスマートフォンのアプリが中心。業務の管理画面向けの記事ではない。
- 要旨: カードは不均一な情報の集まりや、個々のコンテンツの主張を強くしたいときに効く。一方、テーブルをカードに置き換えると、比較しにくくなる。スタッフ名簿を PC で 2 カラムのカードにすると、上下での比較はテーブルのほうが容易。
- 使いどころ: カード形式への反論（比較・並べ替えに弱い）。S286（カードを選ぶ）と対で使う。

### S299 mitekaku「一覧画面のUIデザインのポイント｜リスト・カード・表の使い分けと見やすくするコツ」

> 使う人は一覧画面で「探す」「比べる」「選ぶ」を行います。
> 注文、顧客、在庫のように、日付・金額・状態などの項目を見比べたいものに向いています。
> 件数、金額、回数などの数字は、単位より大きく太く見せると、画面にメリハリが出て読み取りやすくなります。
> よく使う操作だけをボタンにし、それ以外はアイコンや「…」のメニューにまとめましょう。

- 媒体・日付: mitekaku（デザイン会社が発信する制作情報）。2023-07-09 公開、2026-10-28 更新
- URL: https://mitekaku.com/rd/journal/1263
- 取得日: 2026-11-16
- 検証区分: A
- 備考: デザイン会社のコラムで、根拠の数値は無い。業務システム固有の記事ではなく、Web やアプリ全般の一覧画面の話。
- 要旨: 一覧の形はリスト（文字中心）・カード（画像で選ぶ）・表（項目を比べる）の 3 つで、見るもので選ぶ。4 原則と、1 件の中の強弱・数字は大きく・ボタンを置きすぎない・検索と絞り込み・件数・読み込み中と 0 件・押したときの反応、の 7 点を挙げる。
- 使いどころ: 一覧形式の選び方（何を見るかで決める）と、行の中の強弱の付け方。

### S300 ホシノ（ho4444no）「業務系システムのフロントエンドを実装する上で気をつけてること」

> この記事では一度に多くの要素を表示できていて、各要素の状態がわかりやすいことを、一覧性が高いと定義します。
> 業務系では要素の情報が多くなるため、基本的にExcelのようなテーブル形式のUIになりがちです。
> 不必要な情報はノイズになってしまうし、ユーザーの本来の要望によってはもっと適切な表示の仕方がある場合もあります。
> 対処法としては簡単で、一覧の上にタイトルをつけましょう。

- 媒体・日付: ホシノ（業務系 Web のフロントエンドエンジニア）。Zenn。2025-02-04 公開。いいね 4（2026-11-16 時点）
- URL: https://zenn.dev/ho4444no/articles/db92c2fe816083
- 取得日: 2026-11-16
- 検証区分: A
- 備考: 反応は小さい。筆者はデザイナーではなく、書籍（『ノンデザイナーズ・デザインブック』ほか）の内容の整理と明記している。
- 要旨: 業務系の画面をチェックリスト形式で説明（良い例・悪い例のサンプルを Nuxt3 で公開）。「一覧性」を定義し、列が多いときは表示の切り替えと横スクロールのヒントを付ける、検索条件は折り畳み、何を一覧しているかをタイトルで示す、など。
- 使いどころ: 業務系の一覧が「Excel のような表」になりがちという実務側の認識と、それでも利用者の要望を深掘りせよという留保。

### S301 NCDC「業務システムのUI設計・改善の勘所。ノンデザイナー向けに基礎から解説」（習熟度と使用頻度）

> たとえば同じユーザーが毎日多くの処理をするシステムならユーザーが習熟していくので、多少UIが複雑でも多くの機能がひとつの画面にある方が使いやすいかもしれません。
> 一方で、たまにしか触らないユーザーが多いシステムならできるだけ機能を絞ってわかりやすい画面にする方が親切だといえます。

- 媒体・日付: NCDC 株式会社（コラム）。2021-05-28 公開、2022-06-29 更新
- URL: https://ncdc.co.jp/columns/7322/
- 取得日: 2026-11-16
- 検証区分: C
- 備考: 「かもしれません」「親切だといえます」という断定を避けた書き方で、数値・調査の根拠は無い。区分 C（見解）。
- 要旨: 利用頻度が高く習熟した利用者には、多少複雑でも 1 画面に機能が集まっているほうが使いやすい場合があり、たまにしか使わない利用者には絞る。ペルソナの属性として使用頻度・IT リテラシー・デバイスを挙げる。
- 使いどころ: 「取捨選択は利用頻度と習熟度で変わる」の根拠。密度を好む熟練者への配慮（S295・S296 の「絞る」への留保）。

### S302 NCDC「“使いやすい”が生産性を変える！業務を効率化するためのUX/UI設計ポイント」（セミナー資料の解説）

> 年に一度しか利用しないような画面でも、迷わず入力できるよう、心理的な負担を軽減し、ユーザーがステップを順に進めることに集中できます。
> 使用頻度が高く、ユーザーの習熟度も高い業務システムでは、目的の情報がどこにあるかを探す認知負荷を最小限に抑えることが、作業速度と正確性の向上に直結します。

- 媒体・日付: NCDC 株式会社（コラム）。2025-02-27 公開、2025-09-10 更新。2025-02-26 のオンラインセミナーの資料の解説
- URL: https://ncdc.co.jp/columns/9297/
- 取得日: 2026-11-16
- 検証区分: C
- 備考: 「作業速度と正確性の向上に直結します」は記事の主張で、実測値は書かれていない。区分 C。
- 要旨: 年末調整の画面（年 1 回・段階的に表示）と受注システムの登録画面（高頻度・習熟・1 画面に集約）を対比し、使用頻度と習熟度でスクロールと一覧性の高い画面を使い分ける。
- 使いどころ: 頻度で見せ方が逆になる実例（段階的開示と高密度の使い分け）。

### S303 NCDC「業務システムのUI設計・改善の勘所。ノンデザイナー向けに基礎から解説」（色の多用）

> 重要なボタンなどに用いるプライマリーカラーよりも主張が強い色があるとユーザーが混乱してしまいます。
> 画面ごとに目立たせたい部分があっても無闇に色数を増やさず、全体の強弱のルールを壊さないように画面設計をする必要があります。

- 媒体・日付: NCDC 株式会社（コラム）。2023-01-27 公開、2026-08-16 更新
- URL: https://ncdc.co.jp/columns/8296/
- 取得日: 2026-11-16
- 検証区分: C
- 備考: S301 の URL（columns/7322）とは別のページで、題名が似ている（S301 は「資料公開｜」付き）。本文は 2026-08-16 更新の版で照合した。根拠の数値は無い。区分 C。
- 要旨: 複雑な情報を識別するために何色も使うシステムが多いが、主要ボタンより強い色があると混乱する。色数を増やさず強弱のルールを守る。
- 使いどころ: 色の乱用への批判（何でも色分けしない）。状態の色を増やしすぎない根拠。

### S304 PhotoshopVIP「間違っていませんか？美しいUIではラベルは最後の手段【実践編】」（Refactoring UI の日本語抄訳）

> 多くの場合、書式を見るだけで、そのデータが何であるか直感的に理解できます。
> ラベルなしでデータを表示することができれば、重要な情報や識別情報を強調することがはるかに簡単になり
> たとえば、ショッピングサイトのインターフェースで在庫を表示したいとき、「在庫 : 12」ではなく、「残り在庫12個」のようにします。

- 媒体・日付: PhotoshopVIP（筆者名 vipcrew）。2024-09-02 公開。本文冒頭に「Refactoring UI で公開された『Labels are last resort』より許可をもらい、日本語抄訳しています」とある
- URL: https://photoshopvip.net/160498
- 取得日: 2026-11-16
- 検証区分: B
- 備考: 翻訳（抄訳）であり、原典の逐語ではない。区分 B（第三者の転載・翻訳）。画面は Web の一般的な UI で、業務の表の列見出し（ラベル）を消す話ではない点に注意。
- 要旨: 原典は Refactoring UI（Adam Wathan・Steve Schoger）の「ラベルは最後の手段」。DB から読んだデータを label と値の組で並べると、どのデータも等しく重く見える。形式で分かるもの（メール・電話・価格）はラベルを消し、分かりにくいものは値に言葉を足す（「残り在庫 12 個」）。
- 使いどころ: S284（ラベルを消す）と同じ方向の独立した出典。「DB の列を label: value で並べる」落とし穴。

### S305 F.Ko-Ji「相対時刻表記で逆に不便になっていませんか」

> リアルタイム性の高いサービスでは投稿の新鮮度を表現しやすいというメリットがあると思いますが、逆によく検討しないと困惑度を高める原因になってしまうものでもあります。
> 相対時刻では1秒前から59秒前までは1秒ごと、1分前から59分前までは1分ごと、1時間前から23時間前までは1時間ごとという風に、現在時刻から離れるにつれてその表記のあらわす範囲が広くなります。
>
> 新しい順なのか古い順なのか分かりづらくなっていませんか

- 媒体・日付: F.Ko-Ji「一秒後は未来」（個人ブログ）。2013-04-04 公開（URL の日付による）
- URL: https://blog.fkoji.com/2013/04041209.html
- 取得日: 2026-11-16
- 検証区分: C
- 備考: 2013 年の SNS を想定した記事で、業務画面の記事ではない。本文の主張は筆者の経験・論理で、調査ではない。区分 C。
- 要旨: 相対時刻（「5 分前」）は新鮮度を伝えるが、同じ表記が並ぶと新旧の順が分からなくなる、開きっぱなしの画面で更新しないと古い表示のままになる、古い日付は絶対日付のほうが分かる、などの注意。
- 使いどころ: S284 の相対時刻への反論・限界。一覧では相対と絶対の併記や、一定期間より前は絶対日付、という使い分けの根拠。

### S306 Megumu Ueda「アプリケーションの画面デザイン」（Zenn）

> 「かっこいい」とか「クール」とかと「良いデザイン」は必ずしも一致するものではないということです。
> 高い生産性が出せているのであればそれは良いデザインなのでしょう。
> 開発側の人間としては挑戦はせずに「よくあるデザイン」を理解して使うべきだと考えています。

- 媒体・日付: Megumu Ueda（megyo9。ソフトウェア開発者）。Zenn。2025-08-11 公開。いいね 81（2026-11-16 時点）
- URL: https://zenn.dev/megyo9/articles/0b021629b5113f
- 取得日: 2026-11-16
- 検証区分: C
- 備考: 筆者自身が「内容を知らないので正確な評価はできません」と断っている鉄道会社の画面の記憶に基づく例が根拠で、一般化できない。区分 C。
- 要旨: 開発者の立場から、見た目の良さと良いデザインは一致しない、古めかしい質素な UI でも高速に処理できているなら良いデザインでありうる、開発者は挑戦せず「よくあるデザイン」を使うべき、と述べる。色の選び方・コントラストなども説明。
- 使いどころ: 「見た目を整えること」の限界（生産性が基準）への反論側の出典。開発者が自分の立場をどう置くかの例。

### S307 雲海設計「業務システム 画面デザイン サンプル10選と設計意図」（情報密度の主張）

> 消費者向けUIをそのまま真似るのは危険で、情報密度・キーボード操作・エラー耐性を優先すべきです。
> 一覧画面は1スクロールなしで30行以上、詳細画面は主キー情報＋関連情報タブで3〜5タブが目安です。

- 媒体・日付: 株式会社 雲海設計（ブログ）。2026-04-24 公開（ページの datePublished）
- URL: https://www.unkaisekkei.co.jp/ja/blog/%E6%A5%AD%E5%8B%99%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0-%E7%94%BB%E9%9D%A2%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3-%E3%82%B5%E3%83%B3%E3%83%97%E3%83%AB10%E9%81%B8%E4%B8%80%E8%A6%A7%E8%A9%B3%E7%B4%B0%E3%83%80%E3%83%83%E3%82%B7%E3%83%A5%E3%83%9C%E3%83%BC%E3%83%89%E5%88%A5ui%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E8%A7%A3%E8%AA%AC-3yal
- 取得日: 2026-11-16
- 検証区分: C
- 備考: 「目安」は著者の経験則で、基準ではない。同じ記事が「Nielsen Norman Group, Enterprise UX Report 2025」と「Forrester Research の 2025 年調査」を引くが、この記事の調査では原典を確認できていないので引用しない（未検証の節）。区分 C。
- 要旨: 業務システムでは消費者向けの余白の多い UI をそのまま真似ず、情報密度を優先すべきという立場。一覧は 1 画面に 30 行以上、詳細は 3〜5 タブを目安にする。
- 使いどころ: 「業務画面は密度が高いほうが良い」側の主張の出典（反論・限界の側）。S295 の「圧迫感をなくす」と対。

## 作り方の進め方（方向性を言葉で決める・点検・描画確認）

### S308 Design Council（英国）

> The Double Diamond is a visual representation of the design and innovation process. It’s a simple way to describe the steps taken in any design and innovation project, irrespective of methods and tools used.

- 媒体・日付: The Double Diamond（公式ページ。日付の記載なし）
- URL: https://www.designcouncil.org.uk/our-resources/the-double-diamond/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ダブルダイヤモンドの定義。「手法やツールに依らず」プロセスの段階を述べる図という位置づけ。機関の自称。進め方の型の骨格に使える

### S309 Design Council（英国）

> This is not a linear process as the arrows on the diagram show. Many of the organisations we support learn something more about the underlying problems which can send them back to the beginning.

- 媒体・日付: Framework for Innovation（公式ページ。日付の記載なし）
- URL: https://www.designcouncil.org.uk/our-resources/framework-for-innovation/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ダブルダイヤモンドは直線ではないと機関自身が述べる箇所。「図は一方向に見えるが実際は戻る」という注意の根拠

### S310 Sarah Gibbons（Nielsen Norman Group）

> It is nearly impossible to improve a design without feedback from others. Their input helps you avoid mistakes and thus create higher quality work.

- 媒体・日付: Design Critiques: Encourage a Positive Culture to Improve Products（NN/g の記事、2016-10-23）
- URL: https://www.nngroup.com/articles/design-critiques/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 批評の目的。Jen の「批評の欠如」批判への実務側の答えの一つ

### S311 Sarah Gibbons（Nielsen Norman Group）

> Sharing designs early allows for earlier buy-in from team members that otherwise may not feel confident about the work and builds team consensus.

- 媒体・日付: Design Critiques（NN/g の記事、2016-10-23）
- URL: https://www.nngroup.com/articles/design-critiques/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 早く見せることで合意形成が進むという主張。提案と合意形成の型

### S312 Ryan Singer（Basecamp）

> A fat marker sketch is a sketch made with such broad strokes that adding detail is difficult or impossible.

- 媒体・日付: Shape Up, Chapter 4「Find the Elements」（オンライン版。日付の記載なし）
- URL: https://basecamp.com/shapeup/1.3-chapter-04
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 太いペンで描く＝細部を描けない道具で、粗さを意図的に保つ。方向性を細部に入る前に決める手段。Basecamp の自称

### S313 Sarah Gibbons（Nielsen Norman Group）

> Implement Put the vision into effect. Ensure that your solution is materialized and touches the lives of your end users. This is the most important part of design thinking, but it is the one most often forgotten.

- 媒体・日付: Design Thinking 101（NN/g の記事、2016-07-31 公開・2026-07-15 最終確認）
- URL: https://www.nngroup.com/articles/design-thinking/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「実装」を最重要で最も忘れられやすい段階とする記述。デザインと実装の境界・引き渡しの詰めの根拠。調査機関の自称

### S314 GOV.UK（Government Digital Service・Central Digital and Data Office）

> Service design starts with identifying user needs. If you don’t know what the user needs are, you won’t build the right thing. Do research, analyse data, talk to users. Don’t make assumptions. Have empathy for users, and remember that what they ask for isn’t always what they need.

- 媒体・日付: Government Design Principles（公式ガイダンス、2012-04-03 公開・2025-04-02 更新）
- URL: https://www.gov.uk/guidance/government-design-principles
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 原則 1。「求められたもの」と「必要なもの」を分ける問いの型。政府機関の自称

### S315 GOV.UK（Service Manual）

> Before you start your research, you’ll need to interrogate that solution and reframe it as a problem to be solved.

- 媒体・日付: How the discovery phase works（Service Manual、2016-08-04 公開・2021-06-21 更新）
- URL: https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「解決策を渡されたら問題に戻す」。依頼の受け方・問いの立て方の根拠

### S316 Michael Bierut（Pentagram パートナー）

> It follows that every design presentation is inevitably, at least in part, an exercise in bullshit. The design process always combines the pursuit of functional goals with countless intuitive, even irrational decisions.

- 媒体・日付: On (Design) Bullshit（Design Observer、2005-05-09）
- URL: https://designobserver.com/on-design-bullshit/
- URL（原稿）: https://web.archive.org/web/2026/https://designobserver.com/on-design-bullshit/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 機能の要件（測れる）と直感の判断（説明しきれない）を分け、提示の場では後者が過剰に理屈づけられるという実務者の自己批判。提案と合意形成の注意点

### S317 Hikaru Sudo（Goodpatch）

> 目的があいまいなまま進めてしまうと収束が難しくなり、場当たり的なピボットを繰り返して無駄なコストを払うことにもなりかねません。

- 媒体・日付: 生成AIが作るプロトタイプは、本当にサービスづくりの近道になるのか？
- URL: https://goodpatch.com/blog/2026-08-ai-prototype
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 目的（誰に・どんな課題・どうなるか）を仮説でも先に言葉にしておくと、収束の判断軸になる、という主張

### S318 Vercel（Web Interface Guidelines）

> Keyboard works everywhere. All flows are keyboard-operable & follow the WAI-ARIA Authoring Patterns.

- 媒体・日付: Web Interface Guidelines（公式ページ。日付の記載なし）
- URL: https://vercel.com/design/guidelines
- 取得日: 2026-11-15
- 検証区分: A
- 備考: キーボード操作を前提にする基準の例。同じ URL の別の文を S104・S105 に引いている（既存の項目）

### S319 Natasha Jen（Pentagram パートナー）

> The reduction of a complex creative problem-solving mindset into five steps makes design seem easy when it’s not.

- 媒体・日付: It’s Nice That「Why Design Thinking is bullshit」
- URL: https://www.itsnicethat.com/articles/natasha-jen-pentagram-graphicdesign-230218
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 5 段階への還元が「デザインは易しい」という誤解を生む、という批判。デザインの厳しさ（批評・推敲）を守る立場の根拠

## 引用ではない参照（作り方の進め方）

### S320 SmartHR（SmartHR Design System）

- 要旨（逐語引用なし）: 背景色と文字色のコントラスト比を 4.5:1 以上（29px 以上の大きな文字は 3:1 以上）とする自社基準（ガイドラインの項目 4-2）。
- 媒体・日付: アクセシビリティガイドライン（項目 4-2。日付の記載なし）
- URL: https://smarthr.design/accessibility/standards-and-process/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: SmartHR Design System は、リポジトリに LICENSE ファイルが無く、文書サイトの利用規約が「提供コンテンツ」の再配布・他サイトへの掲載を NG とする（帰属上の注意）。このため本文を転載せず、要旨（本 skill の言葉）と短い照合語だけを置く。自社基準の数値（コントラスト比 4.5:1、大きな文字 3:1）。SmartHR 自社のガイドライン項目であり、WCAG 本文の引用ではない。

## 未検証・伝聞（SKILL.md では事実・引用として使わない）

**海外のデザインシステム**

- 「7±2 を画面の要素数の上限にする」: Cloudscape（S161）・Ant Design が使うが原稿は出典を示さない。事実として使わない
- 「余白が理解を約 20% 上げる」: Carbon（S163）が Human Factors International の調査として挙げる。原典未確認
- 「表の中のゼブラ（縞）は走査を助ける」: 肯定する原稿と否定する原稿があり、どちらも効果の根拠を示さない

**国内**

- 「日本の業務システムの利用者は情報量の多い画面を好む」「熟練者は余白を詰めた高密度を好む」: 出典を確認できていない。freee の観察（S140・S141）の N=1 の事例はあるが、一般則としては使わない
- 帳票・紙の様式をそのまま画面に写すことの是非: 国内のデザイナーの記事で直接論じたものは見つけられなかった。日本の事情として確認できたのは、和暦入力（S277・S157）と、CSV 取り込みの確認画面（S271・S120）まで
- 検索結果の要約に現れた数値（ダッシュボードの KPI を 30 から 5 に絞って確認率が上がった等）は、個人ブログの自己申告で、この台帳には入れていない

**実務・歴史**

- 「Bloomberg のキーボードは熟練者が筋肉の記憶を失わないよう、わざと古いままにしている」（Substack 記事の主張）: 設計意図としては未確認。S033 と同じく推測
- 「ユーザーは複雑な画面を誇りに思うので、単純化は受け入れられない」（S033 の引用元 UX Magazine の解釈）: 民族誌の研究に基づくと書かれているが、研究の本体は未確認
- 「ダッシュボードのウィジェットは約 30 個で散らかる」「初めての利用者が 10 秒で目的を分からなければならない」: ベンダーのブログの経験則で、研究の裏付けは未確認。数値として使わない
- Ries の虚栄の指標が HBR の連載に載ったという話: 2010-02-15 付けの再掲（Vator）を見ただけで、HBR のページは未確認。この台帳は 2009-05-19 の寄稿（S170・S171）を根拠にした
- 「Bootstrap の開始は 2010 年中頃」: 資料により異なる（S185 は 2011 年初めと語る）。どちらも確定しない
- Django の admin が最初から「Lawrence Journal-World」の編集者の要望で作られた、という俗説: S174 の FAQ は World Online の報道業務が出自とするまでで、admin の最初の目的は確認できていない
- 「VisiCalc が Apple II を売った」という言い方: この台帳の出典（S177）は発売年と価格までで、販売への影響は確認していない。S178 の Wikipedia が「killer application」の語を使うのは Lotus 1-2-3 についてで、VisiCalc ではない

**OSS・ライブラリ**

- 各ライブラリの文書サイトのデモ画面での見た目（色・余白）は目視しておらず、この台帳の根拠にしない
- 「Material UI は管理画面向けでない」「shadcn は管理画面向けでない」のような一般論は出典が無く、使わない
- ui-ux-pro-max の star 数（約 15 万）・dashboard-design の star 数（475）は GitHub API の取得日時点の値で、品質の根拠ではない

**国内の実務記事**

- S307 の記事が引く「Nielsen Norman Group, Enterprise UX Report 2025」（「エンタープライズ UI の密度は消費者 UI の 2〜4 倍が適正値」）と、「Forrester Research の 2025 年調査」（リプレイス失敗要因の 38%）は、原典を確認できていない。NN/g にその題名の報告書があるかは未確認。事実として使わない
- S288 の「Simple is BEST」「デザインでも…と言われています」は、記事内で出典が示されていない一般論

**作り方の進め方**

- Natasha Jen の講演の全文: 取得できていない。引用は本人の寄稿（S319）のみ
- 経済産業省・特許庁「『デザイン経営』宣言」（産業競争力とデザインを考える研究会、2018-05-23）: 国のデザイン経営の宣言文書。検索で存在は確認したが、公式 PDF は 403（Wayback も 404）で取得できなかった。内容は検索結果の要約のみで、引用していない（区分 U）
- Jon Kolko「Design Thinking Comes of Age」（Harvard Business Review、2015-09）: デザイン思考を擁護する側の論考。取得した HBR のページは有料の表示で、本文を読んでいない（区分 U）

## 調査の限界

**海外のデザインシステム**

- 取得できなかった: Fluent・Atlassian・SAP Fiori・Salesforce Lightning・Material の管理画面指針（原稿がリポジトリに無い、または JS 描画のみ）
- Polaris は逐語引用不可。Polaris の文書サイトは現在 shopify.dev に移行し、旧 polaris.shopify.com は一部のみアーカイブ取得
- Cloudscape の文書サイトのライセンス条件は未確認。引用は短く保つ
- 文書サイトは JS 描画で、サイト上の本文との機械照合は一部のみ。照合は固定原稿で行った
- 各システムの「なぜ」は多くが原文に無い。理由が書かれているもの（GitLab の空値の並べ替え、GOV.UK のタグ、Polaris の折り返し）は備考に記載

**国内**

- 取得できなかった重要な出典: マネーフォワードのデザインシステム（`design.moneyforward.com` は JavaScript の殻で本文が取れず、公開リポジトリも見つからなかった）、サイボウズのデザインシステム（ログイン画面のみ）、freee Vibes の文書サイト本体（Storybook。リポジトリの原稿で代替）、SmartHR のデザインシステムに関する CodeZine の連載（ボット対策の確認画面で本文を取得できず、回避もしていない）、issoh の業務システム UI の記事（本文が取得できなかった）
- ダッシュボードの失敗談: 国内のデザイナーが管理画面のダッシュボードを論じた記事を、検索では見つけられなかった。個人の KPI ダッシュボードの失敗談（Zenn）は見つけたが、管理画面の設計でもこの台帳の範囲でもないため除外した。この論点は海外・視覚化の出典に任せる
- 「項目の優先度付け」「取捨選択」を扱う国内記事は S253・S126・S025・S026 で足りるが、実際に何を削ったかの Before/After を示した国内のデザイナー記事は GENIEE（S040・S128）の 1 社だけだった
- 国内の記事は note・Zenn・自社ブログが中心で、デザイナー本人の署名記事は 2022 年から 2025 年のものが多い。画面の流行や製品は変わるため、年代を踏まえて使う
- 検索は日本の検索結果に偏りがあり、発見できなかった記事が多数ある可能性が高い。網羅的な調査ではない

**実務・歴史**

- 出典は英語圏の実務家・研究機関に偏る。日本の事例は国内の出典に任せた
- NN/g の記事は研究の要約であり、サンプル数・方法の詳細は記事本文を要確認。S146 の数値は製品・会社ごとの規則で、普遍の規格ではない
- 管理画面の歴史は、一次資料より Wikipedia と公式 FAQ に依存する。端末時代の「画面設計の意図」を述べた当時の設計者の発言は取れていない
- Wayback Machine は連続取得で 429 を返した。UX Magazine「The Impossible Bloomberg Makeover」・Columbia の 3270 史・uxdesign.cc の余白の記事は保存コピーの存在を確認したが本文は未取得
- Atlassian・Salesforce の設計記事は、文書サイトが JS 描画で、リポジトリの原稿のパスも特定できず、取得に失敗した。デザインシステムの時代は Material・Ant・Carbon だけで、他は未調査
- 状態の色・絵文字・アイコンに関する NN/g の記事（indicators-validations-notifications）は取得したが、台帳に載せる適切な逐語引用を選べなかった
- 相対時刻・タイムライン・sparkline を表の中に置く記述は、この台帳では限られる（designer-dataviz の台帳に Few の sparkline がある）
- 1 つの記事が複数の主張を含むため、番号 1 件は 1 つの文にとどめた。文脈は URL 先で確かめること

**OSS・ライブラリ**

- 取得はソースと文書の原稿のみ。ブラウザでの実描画（既定の CSS が最終的にどう見えるか）は確かめていない
- 版は既定ブランチの先頭。たとえば Ant Design は v6 系の文書（size 既定 large）、TanStack Table は v9 系の文書。旧版との差は未確認
- 「既定で無い」の主張は A-不在 の範囲（S281）に限る
- 12 のライブラリのうち AG Grid・Refine・Directus 系を確かめられておらず、Rails 系・Laravel の Filament 以外・Mantine React Table も空白

**補充**

- NN/g に相対時刻・絶対時刻を主題とする記事は、検索では見つからなかった。時間の見せ方の一次の実験はこの台帳に無い（設計システムの規則と実務ブログのみ）
- 表のセル内の棒（データバー）を直接勧める設計システムの原稿は見つからなかった。近い根拠は S074（長さで量を見せる）・S071（進捗バーに数値を併記）・S075。直接の出典は S079（原則使わない）・S081・S082 が見つかった。検索は Web 検索 3 回（設計システム・Few・NN/g の各観点）と、海外のデザインシステムの取得済み原稿の grep だけで、網羅ではない
- 日本語の日時表記（和暦・年月日・曜日・24 時制）の出典は取っていない（S157 は日付ピッカーの入力のみ）
- 状態の段階の数について、実験で最適数を示した出典は無い（Carbon の「五、六個を超えると圧倒」と GOV.UK の「最小から始める」は設計システムの勧め）

**国内の実務記事**

- 取得できたのは公開ページの本文のみ。図（画面のスクリーンショット）は読んでいないので、記事が「図のとおり」と述べる箇所の内容は確認していない
- 検索で見つかった記事から、本文を読んで選んだ。網羅的な調査ではない。反応の大きい記事（S282）は推進側で、反論・限界の記事は反応が小さいか、企業コラム（区分 C）である
- 熟練者の表の密度についての実験・利用者テストの結果は、この節の出典に無い
- 業務画面の「視覚化」（表の中の小さな図・状態の色と印・ダッシュボードの図）を扱う日本語の記事は、独立した出典として見つけられなかった（S291 の装飾論と、国内の SmartHR・デジタル庁が根拠になる）
- 取得できなかった・採用しなかったもの:
  - https://note.com/dorisukeone/n/ne76d2fc340f6（アオキタカユキ「UIデザインにおけるカードとテーブルの選択基準」）: HTTP 404 で本文を取得できなかった。引用していない
  - https://note.com/it_eng_strtg_mth/n/ne3edf1bbbcbe（「エンジニアのための画面デザイン改善メソッド」）: 本文は取得できたが、S282 を要約した二次記事で、独自の根拠が無い。台帳に入れていない（S282 の説明が正確に再現されていることだけ確認した）
  - 取得したが入れなかったもの（精読していない・または根拠が薄い）: Qiita の ynii・kamikawa_m・ibetaku・likapantrip の 4 原則の記事（S294 で足りるため）、Zenn の shunaibuilder（状態管理の設計）・ncdc/yukimurakami（検索のバックエンド設計）、Zenn の geniee（スライド中心で本文が薄い）、desknet's・Sun*・Malake・TDC・websas の企業コラム（商業的な記事で、独自の根拠を確認していない）、Qiita の engchina（長大で、4 原則の記事は S294 で足りるため）
  - 動画（Fintan の mp4）・資料（PDF）は取得していない

**作り方の進め方**

- 取得したが、進め方・考え方を述べた記事を確認できなかった組織: frog（frog.co のトップ）、Work & Co（work.co のトップ）、Instrument（トップ）、Locomotive（トップ）、Google Design（design.google のトップ。記事は読んでいない）、Pentagram（about ページ。案件別の進め方は未取得）、Airbnb Design（airbnb.design のトップのみで本文なし）、Spotify Design（同）、THE GUILD・tha・BASSDRUM・Takram（トップ・紹介・ニュースの一覧で、進め方の記事は取得範囲に無かった）
- 取得を試みたが取れなかった: IDEO の Design Kit（designkit.org が 403）、Fast Company の Nussbaum の記事（403、Wayback も空）、Material Design（JavaScript 描画で本文が取れない）、freee・LINE・サイボウズのデザインシステム（本文が取れなかった）、18F の Methods（接続できず）、Basecamp の Getting Real（URL が 404）、経産省の PDF（「未検証・伝聞」の節）
- 探していない（未着手）: 日本デザインセンター（原研哉）の文章、Pentagram の案件別の記事、Mercari のロゴ刷新以外のデザイン記事、Spotify・Stripe・Google Design の個別記事、Jared Spool・Dan Mall・Brad Frost・Jeff Gothelf の文章、ISO 9241-210、Digital Agency のガイドブック（アクセシビリティ導入ガイドブック）
- 取得した日本のデザイン会社の記事は Goodpatch（2026 年の 3 件のブログ）が中心で、同社の自己説明に偏る。Goodpatch の記事は生成 AI 時代の議論を含み、デザイン一般の進め方としては文脈を考える。この台帳に入れたのはそのうちの S317 の 1 件
- 区分 A の多くは組織の自己説明で、進め方の有効性を第三者が検証したものではない。有効性の根拠（比較調査など）はこの台帳に含めていない
- 文字組・工業製品・データ可視化・ブランドの領域に特化した「進め方」の出典は、ほとんど無い（Bierut の随筆 S316 がブランド・グラフィックの提案の場に関わるのみ）。WebGL・クリエイティブコーディングは制作会社の自己説明に限られ、表現の評価基準を述べた一次資料は取得できていない
- 数値は、SmartHR のコントラスト比（S320）と GOV.UK 等のテキスト中の記述のみを「出典あり」とする。それ以外の数値（所要日数・人数・ミリ秒など）はこの台帳に出典がなく、「目安（出典なし）」として扱う

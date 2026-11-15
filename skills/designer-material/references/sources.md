# designer-material 出典台帳

`SKILL.md` と `design-history.md`（デザイン史）が根拠とした出典の台帳。引用原文（英語・逐語）・発言者・媒体・日付・URL・取得日・検証区分を記す。本文から S 番号で参照され、通読せず番号で検索して使う。S01 から S91 までは、Material の歴史（S01〜S13）、現行の M3・Android（S14〜S33）、Material 3 Expressive（S34〜S43）、批判（S44〜S47）、デザインシステム論と運用（S48〜S64）、トークン（S65〜S71）、他の公開デザインシステムと基準（S72〜S85）、歴史（S86〜S91）の順に並ぶ。S92 は欠番（末尾の「区分ごとの件数」を参照）。番号は台帳の中で振り直さない。

## 凡例

- 検証区分
  - A: 原典・公式ページ・公式文書・原典の保存コピー（Wayback Machine）・記者署名記事の本文を取得し、引用文が逐語で含まれることを機械的に照合した。口頭発言を媒体が文字にしたものは、その書き起こしの精度に依存する
  - B: 第三者の再掲、または他媒体経由の引用（原典との照合なし）。引用文が取得したページに逐語で含まれることだけを確認した。発言者本人の発言である可能性は高いが、再掲・孫引きの誤りは排除できない。本文では本人の発言として英語の逐語を示さず、区分を明記した要旨にする
  - C: 批判・論評側の主張。引用が逐語であることのみを確認し、主張の因果は確認していない。本文では論者の主張として区分を明記する
  - R: 記者・機関・出版社の地の文。発言者本人の発言ではない（本人発言として引用しない）。研究・調査の結果を述べる R は、結果の根拠に使わない
  - U: 未検証（末尾の一覧）。事実・引用として使わない
- 研究・調査の結果の扱い: Material 3 Expressive の研究（S34〜S39）は、Google Design のブログ本文と CHI ’26 論文の要旨だけを取得した。**原論文（本文・統計の詳細）は未取得**である。研究の結果を本文で使うときは「原論文未取得」「Google の自己報告」と明記する。デザインシステムの調査（S58）も自己評価の分布で、客観指標ではない
- 照合の方法（台帳作成時の照合手順。利用時に再実行する必要はない）: URL を `curl -sL -A "Mozilla/5.0"` で取得し、`script` と `style` を除去、タグを空白に置換、HTML エンティティを解除、空白を 1 つに正規化した本文に対し、引用の特徴的な部分文字列（20 文字以上）を `grep -F` で探した。加えて、区分を問わず全引用の全文を、空白を除いた形で本文と突き合わせた。URL が `raw.githubusercontent.com` の Markdown は、タグ除去をせず空白の正規化のみで照合した。自動要約の出力は照合の根拠にしていない
- 引用量の方針: 引用は本文の根拠の照合に要る最小限の短い文に限り、記事・仕様の本文を通して転載しない。表は根拠に使う行だけを引く
- 引用の追記: 本文で S 番号を付けて書く事実・年・数値は、その出典の引用ブロックに逐語で含まれるものに限る。備考にしか無い事柄を S 番号で裏づけない。必要な行が引用ブロックに無いときは、既存出典の URL を取り直し、逐語であることを確かめてから引用ブロックへ行を追加した（新しい出典は足していない）。備考で「N 番目の引用」と書くのは、その出典の引用ブロックの N 番目のブロック
- 日付の欄: 「媒体・日付」の日付は、その出典自体の公開日・版の日付である。引用に年が書かれていない出来事の年（例: ある仕様の発表年）の根拠には使わない。Wayback Machine の保存コピーの日付は公開日ではない
- 日本語の訳・要旨・備考は本 skill の言葉であり、発言者本人の発言ではない
- 引用文は英語原文の語句を改変していない。見出しや表のセルは、本文取得の都合で空白でつないだ形（例: 「Useful There is evidence…」「Not successful 4 % Slightly successful 19 %…」）で出る。HTML のタグ境界で入る空白（「word ,」の形）だけ、句読点の前で詰めた
- 取得日は、出典ごとに最後に本文を確認した日（すべて 2026-11-15）。Wayback Machine の保存コピーを使った出典は、保存コピーの本文を照合した
- 数値（dp・sp・px・比率・人数・件数・%）は、区分 A で原文を確認できたものだけを「出典あり」として扱う。原文に無い値は「本 skill の目安（出典なし）」と明記して使う

## 帰属上の注意

- 数値の世代を混ぜない。初版（2014〜2016 の保存コピー）の値は S04・S05・S07、M2 時代のダークテーマは S13、現行の M3 は S21・S22・S30・S19。初版の elevation（FAB 6dp など）や #121212 を M3 の値として書かない。M3 の elevation・motion・間隔の数値は取得していない。M3 の baseline のダークの surface は neutral6 の指定（S18。表の列見出しは Dark baseline。6 を tone と読むのは本 skill の読み）で、#121212 とは別の指定
- 現行の Material 3 の公式サイト（m3.material.io）は JavaScript 描画で本文を取得できなかった。現行 M3 の値（S18・S21・S22）は Google 自身の GitHub の文書（material-components-android）、S19・S30 などは Android Developers の文書から、2026-11-15 に取った。m3.material.io の文面そのものは引用していない
- Material 3 Expressive の研究は Google 自身の報告である（S34〜S39）。次の数字は、母集団も「最大値か全体値か」も異なる。混ぜない。(1) 46 件の研究・18,000 人超（ブログ。研究全体の規模）、(2) 主要な UI 要素を見つける視線が最大 4 倍速い（ブログ。「最大」。メールアプリの Send ボタンは図示された事例）、(3) 最大 87% の好み（ブログ。18〜24 歳の層）、(4) 注視 33% 速・課題完了 20% 速（CHI ’26 の要旨。48 人・10 アプリ・旧 Material との比較）。(2) と (4) は、どちらも視線の指標だが、同じ研究かどうかは両者とも明記しておらず、最大値と全体値なので直接比べられない（本 skill の注記）
- 「Material You」と「Material 3」の関係、Expressive が第何次の更新かは、媒体で言い方が違う（S41・S42・S15）。公式の版の数え方は取得範囲に無い
- S56 の Storybook の記事は「大半が崩壊・成功は 40%」と書くが、Sparkbox の調査（S58）が示すのは、successful 31% と very successful 8%（合算で 39%。本 skill の合算）、moderately 38% の自己評価である。Storybook の言い換えを事実として使わない
- S52・S53・S64 は、他者が引いた形（孫引き）で区分 B。Curtis の原典（Medium の初出）は取得できなかったので、S60 は Center Centre の再掲で照合した（B）
- Atomic Design（S48 など）は ©2016 Brad Frost の書籍で、全文は Web で無料公開されている。再配布の許諾表示（Creative Commons 等）はページで確認できなかったので、1 ブロックは 1〜2 文にとどめ、本文の根拠に要る箇所だけを引く。章の本文を通して転載・翻訳しない
- GOV.UK の Government Design Principles（S72）は 2012-04-03 公開・2025-04-02 更新の現行版で、11 原則。2012 年当時の文言とは限らない。ライセンスは、S72〜S77 の各ページのフッターに「All content is available under the Open Government Licence v3.0, except where otherwise stated」とあるのを 2026-11-15 に確認した（「except where otherwise stated」のとおり、個々の内容に別の表示がありうる）
- W3C の Design Tokens 仕様（S69）は「Final Community Group Report」で、W3C 標準でも Standards Track でもない。「W3C 標準」と書かない
- Metro と flat 化の年は出典どうしで合わない（S87 と S88。`design-history.md` の「年が食い違う出典」を参照）
- CC BY-NC-ND など転載・翻訳を禁じるライセンスの本文は、今回取得した出典には確認していない。確認した範囲では、すべて短い引用にとどめている
- S18・S21・S22 は material-components-android リポジトリの docs の Markdown。取得した 3 ファイルの本文にライセンスの表示は無かった。同リポジトリ直下の LICENSE は Apache License 2.0（2026-11-15 に取得して確認）。この LICENSE が docs の個別ファイルに及ぶかは確認していない（未確認）
- 回想（S09）は当事者の主観を含む。Google の「100 万製品」などの数字は本人の記述で、独立の集計ではない
- Matias Duarte の発言のうち、直接取得できたのは S12（9to5Google の取材記事）のみ。2014 年の基調講演・インタビューの発言は取得しておらず、末尾の「未検証・伝聞」にある

## 引用の台帳

### S01 Google design guidelines（Material design 初版）「Material is the metaphor」

> A material metaphor is the unifying theory of a rationalized space and a system of motion. The material is grounded in tactile reality, inspired by the study of paper and ink, yet technologically advanced and open to imagination and magic.

- 媒体・日付: 2014 年 6 月発表の仕様。本文は Wayback の 2015-01-01 の保存コピー
- URL: https://web.archive.org/web/20150101005702/http://www.google.com/design/spec/material-design/introduction.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Material の原則の 1 つ目。「紙とインクの研究に着想を得た、触覚的な現実に根ざした素材」という比喩の公式文言。発表日（2014 年 Google I/O）そのものの一次記録ではなく、保存コピーの日付で記録した。比喩の説明・Material の歴史に使える。

### S02 Google design guidelines（Material design 初版）「Goals」

> We challenged ourselves to create a visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science. This is material design.

> Develop a single underlying system that allows for a unified experience across platforms and device sizes.

- 媒体・日付: Wayback 2015-01-01 の保存コピー
- URL: https://web.archive.org/web/20150101005702/http://www.google.com/design/spec/material-design/introduction.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 目標は「古典的なデザイン原則と技術の革新を総合した視覚言語」と「プラットフォームと画面サイズをまたぐ単一の体系」。デザインシステム論としては「単一の基盤を複数媒体で使う」宣言。

### S03 Google design guidelines（Material design 初版）「Bold, graphic, intentional」「Motion provides meaning」

> These elements do far more than please the eye. They create hierarchy, meaning, and focus.

> Motion respects and reinforces the user as the prime mover.

- 媒体・日付: Wayback 2015-01-01 の保存コピー
- URL: https://web.archive.org/web/20150101005702/http://www.google.com/design/spec/material-design/introduction.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 印刷由来の要素（タイポグラフィ・グリッド・余白・色）が階層と焦点をつくるという原則と、モーションを意味の担い手とする原則。同じ節は 2017-01-10 の保存コピー（material.io/guidelines）にもあるが、原文のダッシュの種類が異なる（2015 の保存コピーはエムダッシュ、2017 は短い横線）。

### S04 Google design guidelines（Material properties）

> Material has varying x & y dimensions (measured in dp) and a uniform thickness (1dp).

> Shadows result naturally from the relative elevation (z-position) between material elements.

- 媒体・日付: Wayback 2015-12-20 の保存コピー
- URL: https://web.archive.org/web/20151220063451/http://www.google.com/design/spec/what-is-material/material-properties.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 素材の物理規則（厚さは常に 1dp、影は相対的な高さ＝z 位置から生じる）。数値 1dp は本ページの原文で確認した出典あり。Material 初版（M2 以前）の規則であり、現行の M3 の表現とは異なりうる。

### S05 Google design guidelines（Elevation & shadows、初版の高さの表）

> Floating action button (FAB) Resting state: 6dp Pressed state: 12dp Card Resting state: 2dp Raised state: 8dp

> Dialogs 24dp Nav Drawer & Right drawer 16dp Modal bottom sheet 16dp

- 媒体・日付: Wayback 2016-01-03 の保存コピー
- URL: https://web.archive.org/web/20160103081051/https://www.google.com/design/spec/what-is-material/elevation-shadows.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 初版の部品別の高さ（FAB は静止 6dp・押下 12dp、カード静止 2dp・上げた状態 8dp、ダイアログ 24dp など）。歴史的な値で、現行 M3 の elevation と同じかは確認していない（M3 の elevation の数値は未取得）。数値の出典として引くときは「初版」と明記する。

### S06 Google design guidelines（Authentic motion）

> Avoid linear motion.

> Abrupt changes in speed or direction are jarring and draw attention.

- 媒体・日付: Wayback 2016-01-05 の保存コピー
- URL: https://web.archive.org/web/20160105074327/http://www.google.com/design/spec/animation/authentic-motion.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 線形の動きを避け、緩急をつける原則。具体的な ms の値はこのページの引用範囲には無い。

### S07 Google design guidelines（Metrics & keylines、初版のグリッド）

> All components align to an 8dp square baseline grid for mobile, tablet, and desktop.

> Screen edge left and right margins: 16dp Content associated with an icon or avatar left margin: 72dp Horizontal margins on mobile: 16dp. Vertical spacing Status bar: 24dp Toolbar: 56dp

- 媒体・日付: Wayback 2016-01-05 の保存コピー
- URL: https://web.archive.org/web/20160105074845/http://www.google.com/design/spec/layout/metrics-keylines.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 8dp ベースライングリッド、画面端の余白 16dp、ステータスバー 24dp、ツールバー 56dp（初版の値）。現行 M3 のレイアウト値と同一とは限らない。

### S08 Android Developers「Material Design」ページ

> Material design is a comprehensive guide for visual, motion, and interaction design across platforms and devices.

> Android now includes support for material design apps. To use material design in your Android apps, follow the guidelines defined in the material design specification and use the new components and functionality available in Android 5.0 (API level 21) and above.

- 媒体・日付: Wayback 2015-01-11 の保存コピー（Android 5.0 の時期）
- URL: https://web.archive.org/web/20150111050307/http://developer.android.com/design/material/index.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Material が Android 5.0（API 21）のテーマ・ウィジェット・影/アニメーション API として実装された記述。Material の公式な位置づけ（「視覚・モーション・インタラクションの包括的ガイド」）。

### S09 Zach Gibson（Google Design「When Material Made Its Global Debut」）

> I joined what was called the Art Department — a six-person team, supporting about 200 products across a company of over 35,000 people.

> At the time, design systems weren't really a thing, so Kennedy was a big deal — it had a clear typographic hierarchy and consistency in buttons and iconography, and it introduced white space across products — but it only focused on top-tier Google web products.

> The concept of Material Design focused on a material we’ve been familiar with for thousands of years: paper.

> At the time, I/O was an engineering conference that focused on product launches and code labs. They didn’t talk about design.

> Within a year, over a million products in the Android store used parts of the Material Design system

> When I started at Google in 2012, I joined what was called the Art Department


- 媒体・日付: 2024 年頃（Material 10 周年の企画。ページに日付表示なし）
- URL: https://design.google/library/material-design-launch-2014
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Google のデザイナー（Zach Gibson）による回想。紙をモデルにした経緯、2014 年の Google I/O が当時エンジニア向けの会議でデザインを語らなかったこと、発表から 1 年で 100 万を超える製品が採用したという主張。回想であり当事者の主観を含む。「100 万」は本人の記述で、独立の集計ではない。2012 年に入社した時点（6 番目の引用）の回想として、「デザインシステムはまだ一般的でなかった」とも述べ、Kennedy と呼ばれる刷新が上位の Web 製品に限られていた（本人の回想）。ページには画像のキャプション「Matías Duarte speaking about Material Design in 2014.」もある（キャプションは Gibson の文章ではなく、Duarte の発言の引用でもない。引用ブロックには載せない）。

### S10 Material Design（Material Theming 概要）

> Material Theming is the ability to systematically customize Material Design to better reflect your product’s brand.

- 媒体・日付: 本文は Wayback の 2019-11-18 の保存コピー（発表の時期は S12 の記事日付 2018-05-11 を参照）
- URL: https://web.archive.org/web/20191118143938/https://material.io/design/material-theming/overview.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ブランドに合わせて Material を体系的にカスタマイズする枠組み。画一化への公式の応答（S11 の記述と併せて読む）。

### S11 Engadget, Florence Ion（Material Theming の解説）

> The guidelines that the company originally wrote for Material Design encouraged developers to make apps that looked too much alike.

- 媒体・日付: 2018-05-12
- URL: https://www.engadget.com/2018-05-12-googles-material-theming-will-change-android.html
- 取得日: 2026-11-15
- 検証区分: R
- 備考: 記者の地の文（Google が I/O 2018 で Material Theming を作った理由を説明した、という記者の要約）。Google 自身の発言ではない。「初版の指針が似たアプリを量産した」という Google 側の認識を伝える伝聞として扱い、Google の言葉として引用しない。

### S12 Matias Duarte（9to5Google の I/O 2018 取材記事内の発言）

> we have a design system for making design systems, so that anybody, no matter how small a developer they are or how few designers they have, can make a design system themselves using Material as the foundation for that,

> But we realized the most important thing about this release was the separation of style from function. So that ability of allowing developers and designers and craters to make it theirs by theming it, was the thing we wanted to highlight.

> So the idea of arbitrarily putting a stick in the ground at this I/O and saying that it’s “2” didn’t make much sense.

- 媒体・日付: 2018-05-11
- URL: https://9to5google.com/2018/05/11/google-material-design-theming-i-o-roundup/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 記者署名記事が書き起こした口頭発言（報道陣向けの取材での発言）。「デザインシステムをつくるためのデザインシステム」「スタイルと機能の分離」という Material Theming の位置づけと、I/O 2018 の発表を「2」と呼ばなかった理由。報道が「Material Design 2」と呼んだ（同記事）のは公式の名称ではない。書き起こしの精度は記者に依存する。

### S13 Material Design（Dark theme、M2 時代）

> Dark themes reduce the luminance emitted by device screens, while still meeting minimum color contrast ratios.

> The recommended dark theme surface color is #121212.

- 媒体・日付: Wayback 2019-12-26 の保存コピー
- URL: https://web.archive.org/web/20191226073755/https://material.io/design/color/dark-theme.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: M2 時代のダークテーマ指針（推奨の表面色 #121212）。M3 の baseline のダークの colorSurface は neutral6 と指定されている（S18。6 を tone と読むのは本 skill の読み）。具体の 16 進値は palette から決まり、本台帳では未取得。#121212 を M3 の既定値として扱わない。

### S14 Google（Android 12 の紹介記事、Keyword ブログ）

> When you change your wallpaper, the entire Android 12 experience changes to match its colors, thanks to advanced color extraction algorithms and the gorgeous Material You design.

- 媒体・日付: 2021-10-19（Android 12 の提供開始時の記事。Material You の発表自体は 2021 年 5 月の Google I/O）
- URL: https://blog.google/products-and-platforms/platforms/android/android-12/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: dynamic color の消費者向けの説明（壁紙の色抽出で全体の配色が変わる）。5 月の発表文そのものではない。

### S15 Dave Burke（Android Developers Blog「What’s new in Android 12 Beta」）

> starting with the most significant UI update to Android yet, created with a design language that we call Material You.

> we’re unifying our software and hardware ecosystems under a single design language called Material You

- 媒体・日付: 2021-05-18（Google I/O 2021 の当日）
- URL: https://android-developers.googleblog.com/2021/05/whats-new-in-android-12-beta.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Material You の発表時の公式文言（Android 12 Beta 1）。ソフトウェア・ハードウェア・Material Design チームの協働で、単一のデザイン言語に統一する、と述べる。「Material You」は M3 の別名として語られることが多いが、この記事は M3 という呼称を使っていない（本文で確認した範囲）。

### S16 Android Developers「Use the device colors (Dynamic Color)」

> Dynamic Color, which was added in Android 12, enables users to personalize their devices to align tonally with the color scheme of their personal wallpaper or through a selected color in the wallpaper picker.

> Android 12 added the Tonal Spot variant, followed by the Neutral, Vibrant Tonal, and Expressive variants in Android 13.

- 媒体・日付: 2026-11-15 取得時点の本文
- URL: https://developer.android.com/develop/ui/views/theming/dynamic-colors
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Dynamic Color は Android 12 で追加（壁紙・選択色から配色を生成）、バリアントは Android 12 の Tonal Spot、Android 13 で Neutral・Vibrant Tonal・Expressive が追加。

### S17 material-foundation / material-color-utilities（README）

> Historically, teams hand-picked many colors to cover all UI use cases.

> A new color space (hue, chrome, tone) based on CAM16 x L*, that accounts for viewing conditions

> Interpolate, harmonize, animate, and gradate colors in HCT

> Measure contrast, obtain contrastful colors

- 媒体・日付: 2026-11-15 取得時点の README
- URL: https://raw.githubusercontent.com/material-foundation/material-color-utilities/main/README.md
- 取得日: 2026-11-15
- 検証区分: A
- 備考: HCT（hue・chroma・tone）色空間と、色の手選びから生成へという位置づけ。README の原文は「hue, chrome, tone」（chroma の誤記とみられる。原文のまま）。3・4 番目の引用は README の部品表の行（blend は HCT での色の補間・調和、contrast は対比の測定と対比のある色の取得）で、色の生成後にコントラストを測る関数が README に存在することの根拠。全パレットで WCAG を満たす保証は述べていない。Markdown の生ファイルで、タグ除去はせず空白の正規化のみで照合した。

### S18 material-components-android（Color theming、docs）

> We provide three accent color groups (Primary, Secondary, Tertiary), each with 4-5 color roles that you can customize to represent your brand color

> Surface | colorSurface | neutral98 | m3_ref_palette_dynamic_neutral_variant98 | system_surface_light | neutral6 | m3_ref_palette_dynamic_neutral_variant6 | system_surface_dark

> Color role | Android attribute | Light baseline | Light dynamic 31-33 | Light dynamic 34+ | Dark baseline | Dark dynamic 31-33 | Dark dynamic 34+

- 媒体・日付: 2026-11-15 取得時点（master ブランチ）
- URL: https://raw.githubusercontent.com/material-components/material-components-android/master/docs/theming/Color.md
- 取得日: 2026-11-15
- 検証区分: A
- 備考: アクセント 3 群（Primary・Secondary・Tertiary）× 各 4〜5 のロールという構造（1 番目の引用）。2 番目の引用は Surface の行、3 番目の引用は同じ表の見出し行（表は 8 列で、dynamic は 31-33 と 34+ の 2 列ずつ）。見出し行と突き合わせると、Surface の Light baseline は neutral98、Dark baseline は neutral6（palette の neutral の 98 と 6 の指定。16 進値ではない）。末尾の数字を tone と読むのは本 skill の読みで、原文にその説明は無い。Views 版ライブラリの文書（S28 の保守モードと併読）。Markdown の生ファイルで空白の正規化のみ。

### S19 Android Developers「Material Design 3 in Compose」

> An M3 theme contains the following subsystems: color scheme, typography and shapes

> The foundation of a color scheme is the set of five key colors. Each of these colors relate to a tonal palette of 13 tones, which are used by Material 3 components.

- 媒体・日付: 2026-11-15 取得時点の本文
- URL: https://developer.android.com/develop/ui/compose/designsystems/material3
- 取得日: 2026-11-15
- 検証区分: A
- 備考: M3 のテーマは color scheme・typography・shapes の 3 つ。配色の土台は 5 つのキーカラーと、各 13 トーンの tonal palette。

### S20 Android Developers「Material Design 3 in Compose」（ダークテーマ）

> To support light and dark themes, use isSystemInDarkTheme

> Dynamic color is the key part of Material You, in which an algorithm derives custom colors from a user’s wallpaper to be applied

- 媒体・日付: 2026-11-15 取得時点の本文
- URL: https://developer.android.com/develop/ui/compose/designsystems/material3
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ライト/ダークは isSystemInDarkTheme() で切り替え、dynamic color は壁紙由来の配色。Compose の実装の入口として使える。

### S21 material-components-android（Typography theming、M3 の型スケール）

> `textAppearanceDisplayLarge` | Regular 57sp `textAppearanceDisplayMedium` | Regular 45sp `textAppearanceDisplaySmall` | Regular 36sp `textAppearanceHeadlineLarge` | Regular 32sp `textAppearanceHeadlineMedium` | Regular 28sp `textAppearanceHeadlineSmall` | Regular 24sp

> `textAppearanceTitleLarge` | Regular 22sp `textAppearanceTitleMedium` | Medium 16sp `textAppearanceTitleSmall` | Medium 14sp `textAppearanceBodyLarge` | Regular 16sp `textAppearanceBodyMedium` | Regular 14sp `textAppearanceBodySmall` | Regular 12sp `textAppearanceLabelLarge` | Medium 14sp `textAppearanceLabelMedium` | Medium 12sp `textAppearanceLabelSmall` | Medium 11sp

- 媒体・日付: 2026-11-15 取得時点（master ブランチ）
- URL: https://raw.githubusercontent.com/material-components/material-components-android/master/docs/theming/Typography.md
- 取得日: 2026-11-15
- 検証区分: A
- 備考: M3 baseline の型スケール（Display 57/45/36sp、Headline 32/28/24sp、Title 22/16/14sp、Body 16/14/12sp、Label 14/12/11sp）。Markdown の生ファイル。ライセンス: ファイル内に表示なし。リポジトリ直下の LICENSE は Apache License 2.0（ファイル単体への適用は未確認）。

### S22 material-components-android（Shape theming、M3 の角丸スケール）

> ShapeAppearance.Material3.Corner.None` | No corners (i.e., fully rectangular) | 0dp `ShapeAppearance.Material3.Corner.ExtraSmall` | Shape with extra small corner size | 4dp `ShapeAppearance.Material3.Corner.Small` | Shape with small corner size | 8dp `ShapeAppearance.Material3.Corner.Medium` | Shape with medium corner size | 12dp `ShapeAppearance.Material3.Corner.Large` | Shape with large corner size | 16dp

> ShapeAppearance.Material3.Corner.LargeIncreased` | Shape with increased large corner size | 20dp

> ShapeAppearance.Material3.Corner.ExtraLarge` | Shape with extra large corner size | 28dp

> ShapeAppearance.Material3.Corner.ExtraLargeIncreased` | Shape with increased extra large corner size | 32dp

> ShapeAppearance.Material3.Corner.ExtraExtraLarge` | Shape with extra extra large corner size | 48dp

> ShapeAppearance.Material3.Corner.Full` | Shape with full corner size </br> i.e., circle with rounded corners or rhombus with cut corners | 50%

- 媒体・日付: 2026-11-15 取得時点（master ブランチ）
- URL: https://raw.githubusercontent.com/material-components/material-components-android/master/docs/theming/Shape.md
- 取得日: 2026-11-15
- 検証区分: A
- 備考: M3 の角丸スケール（None 0dp・ExtraSmall 4dp・Small 8dp・Medium 12dp・Large 16dp・ExtraLarge 28dp など）。Markdown の生ファイル。ライセンス: ファイル内に表示なし。リポジトリ直下の LICENSE は Apache License 2.0（ファイル単体への適用は未確認）。

### S23 material-web（Theming、トークンの階層）

> Each component token maps to a system token, which has a concrete reference value.

> Reference tokens hold concrete values, such as a hex color, pixel size, or font family name.

> System tokens define decisions and roles that give the design system its character, from color and typography, to elevation and shape.

- 媒体・日付: 2026-11-15 取得時点（main ブランチ。文書の鮮度表示は 2026-07-31）
- URL: https://raw.githubusercontent.com/material-components/material-web/main/docs/theming/README.md
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Material の公式トークンの 3 階層（reference → system → component）。Web では CSS カスタムプロパティ。デザイントークン設計の最も直接的な一次出典の 1 つ。Markdown の生ファイル。

### S24 material-web（Theming 冒頭）

> creates unique branded products with familiar patterns and accessible interactions.

- 媒体・日付: 2026-11-15 取得時点
- URL: https://raw.githubusercontent.com/material-components/material-web/main/docs/theming/README.md
- 取得日: 2026-11-15
- 検証区分: A
- 備考: テーミングの目的を「馴染みのあるパターンとアクセシブルな操作で、固有のブランド製品をつくる」と述べる。画一化への Google 側の公式の立場。Markdown の生ファイル。

### S25 material-web（Color、トークン命名）

> Tokens follow the naming convention `--md-sys-color-<token>`.

- 媒体・日付: 2026-11-15 取得時点
- URL: https://raw.githubusercontent.com/material-components/material-web/main/docs/theming/color.md
- 取得日: 2026-11-15
- 検証区分: A
- 備考: システムトークンの命名規則（--md-sys-color-*）。Markdown の生ファイル。

### S26 material-web（README）

> MWC is in maintenance mode pending new maintainers

- 媒体・日付: 2026-11-15 取得時点
- URL: https://raw.githubusercontent.com/material-components/material-web/main/README.md
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Web Components 版の Material が保守モードである現況。新規採用の判断に直結する。Markdown の生ファイル。

### S27 material-web メンテナ（asyncliz）「MWC is in maintenance mode」告知

> Material Design is focusing on support for Google's large-scale internal Wiz framework, and has reassigned the engineers working on Material Web Components. This places MWC into maintenance mode.

> MWC is not deprecated or going away, but Material Design is no longer actively staffing its development.

> New features and components are no longer planned.

- 媒体・日付: 2024-06-10
- URL: https://github.com/material-components/material-web/discussions/5642
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Material 公式の Web 実装の保守モード移行の告知（メンテナ本人の投稿）。理由は社内フレームワーク Wiz への注力と人員の再配置。

### S28 material-components-android（README、Views 版の maintenance mode）

> This means that the Views-based Material Components for Android library (MDC-Android) is now in maintenance mode.

- 媒体・日付: 2026-11-15 取得時点の README（日付表示なし）
- URL: https://raw.githubusercontent.com/material-components/material-components-android/master/README.md
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Views 版 Material Components は保守モード、Compose への移行を促す。Android 新規開発の前提を変える現況。Markdown の生ファイル。

### S29 Nick Butcher（Android Developers Blog「Android UI Development is Compose First」）

> we believe that all Android UI should be built with Compose; we call this going Compose First.

> We now consider the View components that Compose replaces (components in the android.widget package) to be in maintenance mode

> We have no plans to deprecate or remove View components and will continue to support them with critical bug fixes, but they will receive no new features.

- 媒体・日付: 2026-05-19
- URL: https://android-developers.googleblog.com/2026/05/android-ui-development-is-compose-first.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Android の UI は Compose First。Views のコンポーネントは保守モードで、新機能は入らないが廃止の予定もない（3 番目の引用）。

### S30 Android Developers「Use window size classes」

> Compact width width < 600dp 99.96% of phones in portrait Medium width 600dp ≤ width < 840dp 93.73% of tablets in portrait, most large unfolded inner displays in portrait Expanded width 840dp ≤ width < 1200dp 97.22% of tablets in landscape, most large unfolded inner displays in landscape are at least expanded width Large width 1200dp ≤ width < 1600dp Large tablet displays Extra-large width width ≥ 1600dp Desktop displays

> Compact height height < 480dp 99.78% of phones in landscape Medium height 480dp ≤ height < 900dp 96.56% of tablets in landscape, 97.59% of phones in portrait Expanded height height ≥ 900dp

> Compute the current WindowSizeClass using the currentWindowAdaptiveInfo() top‑level function of the androidx.compose.material3.adaptive library.

- 媒体・日付: 2026-11-15 取得時点の本文
- URL: https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes
- 取得日: 2026-11-15
- 検証区分: A
- 備考: window size class の境界値（幅: 600・840・1200・1600dp、高さ: 480・900dp）。表中の「phones in portrait の 99.96%」などは Google の集計で、母集団は原文に明示されていない。3 番目の引用は、Compose で現在の WindowSizeClass を得る入口（currentWindowAdaptiveInfo）。同ページの高さの例は isHeightAtLeastBreakpoint と HEIGHT_DP_MEDIUM_LOWER_BOUND を使う（コード片で、引用にしていない）。幅の判定に使う関数・定数の名は同ページに例が無く、未照合。

### S31 Android Developers「Make apps more accessible」

> we recommend that each interactive UI element have a focusable area, or touch target size, of at least 48dpx48dp.

> Note: For precise input (mouses and trackpads), the touch target can be smaller.

> In Jetpack Compose, many built-in Material components like Button, IconButton, and ListItem already enforce this minimum size.

- 媒体・日付: 2026-11-15 取得時点の本文
- URL: https://developer.android.com/guide/topics/ui/accessibility/apps
- 取得日: 2026-11-15
- 検証区分: A
- 備考: タッチターゲットは 48dp × 48dp 以上を推奨。ポインタ（マウス・トラックパッド）入力なら小さくてよい（2 番目の引用）。Compose の Material コンポーネント（Button・IconButton・ListItem）は既定でこの最小サイズを確保し、独自の操作要素は自分で設定する（3 番目の引用）。

### S32 Android Developers「Implement dark theme」（Views）

> Force Dark analyzes each view of your light-themed app and applies a dark theme automatically before it is drawn to the screen.

- 媒体・日付: 2026-11-15 取得時点の本文
- URL: https://developer.android.com/develop/ui/views/theming/darktheme
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Force Dark（Android 10、Views 向け）は自動変換。本格的なダークテーマの代わりに近道として使えるが、設計されたダークテーマではない。

### S33 Android Developers「Canonical layouts」

> Canonical layouts are proven, versatile layouts that provide an optimal user experience on a variety of form factors. The canonical layouts support small screen phones as well as tablets, foldables, and ChromeOS devices. Derived from Material Design guidance

> The list-detail layout enables users to explore lists of items that have descriptive, explanatory, or other supplementary information—the item detail.

> A feed layout arranges equivalent content elements in a configurable grid for quick, convenient viewing of a large amount of content.

> Supporting pane layout organizes app content into primary and secondary display areas.

> determines whether to show the list and detail panes at the same time (when the width window size class is expanded) or just the list or detail pane (when the width window size class is medium or compact)

> When showing just the detail pane on small window sizes, add a BackHandler to remove the detail pane and display just the list pane.

> ListDetailPaneScaffold is a high-level composable that simplifies the implementation of list-detail layouts.

> To ensure unidirectional data flow, hoist all state, including current window size class and detail of the selected list item (if any), so all composables have access to the data and can render correctly.

> A list‑detail layout responds accordingly, preserving app state:

- 媒体・日付: 2026-11-15 取得時点の本文
- URL: https://developer.android.com/develop/ui/compose/layouts/adaptive/canonical-layouts
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 正準レイアウトは Material Design の指針に由来する検証済みのレイアウトで、list-detail・supporting pane・feed の 3 つ（2〜4 番目の引用に各定義）。list-detail は ListDetailPaneScaffold で実装する、と同ページが書く（7 番目の引用に関数名がある）。5 番目の引用は、幅が expanded のとき一覧と詳細を同時に、medium か compact のとき片方だけを見せるという切り替えの条件。6 番目の引用は、狭い窓で詳細だけを見せているとき、BackHandler で一覧へ戻すこと。8 番目の引用は、窓の大きさと選択した項目の状態を持ち上げる（hoist）こと。9 番目の引用は、窓の大きさの区分が変わっても list-detail がアプリの状態を保つこと（引用の直後に、狭まったときの詳細の扱いなどが続く）。同ページの最小実装は rememberListDetailPaneScaffoldNavigator と ExperimentalMaterial3AdaptiveApi の OptIn を使う（コード片で、引用にしていない。版で変わりうる）。

### S34 Google Design「Better, Easier, Emotional UX」（Material 3 Expressive の研究）

> Back in 2022, our research intern was studying user sentiment toward Material Design in Google apps. After mentioning her initial findings to colleagues in a Munich beer hall, she sparked a team-wide design debate: Why did all these apps look so similar? So boring?

> Material 3 Expressive was born out of research — not in the 41 shades of blue kind of way, which delegated design decisions to data, but in a collaborative inquiry spanning research, design, and engineering.

- 媒体・日付: 2025 年（ページに日付表示なし。Google I/O 2025 の時期。本文の「At last year’s Google I/O」から推定）
- URL: https://design.google/library/expressive-material-design-google-research
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Google 自身が「なぜどのアプリも似ているのか、退屈なのか」という問いが Expressive の出発点だったと述べる。画一化批判への公式の認識。「41 shades of blue」への言及は、データに委ねる設計への対比。この記事は Google の研究の自己報告で、独立の検証ではない。

### S35 Google Design「Better, Easier, Emotional UX」（規模と好み）

> Through 46 separate research studies with hundreds of designs, and more than 18,000 participants from around the world, we’ve fine tuned a system that’s both beautiful and highly usable.

> The fundamental parts of expressive design are the use of color, shape, size, motion, and containment.

> We found that well-applied, expressive design is strongly preferred by people of all ages, with that preference being particularly strong — up to 87% — among 18-to-24-year-olds.

- 媒体・日付: 2025 年（上記と同じ）
- URL: https://design.google/library/expressive-material-design-google-research
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 46 件の研究・18,000 人超という規模と「最大 87%」の好み。87% は 18〜24 歳の層に限った数字で、全体の割合ではない。本文は全年齢でネットで好まれたとするが、全体の値は出していない。

### S36 Google Design「Better, Easier, Emotional UX」（4 倍速）

> Participants were able to spot key UI elements up to four times faster in the M3 Expressive designs

> We’ve seen many apps achieve these levels of improvement, which extend beyond eye-fixation times.

> When participants were asked to “send the email,” their eyes saw the button four times faster in the expressive design.

- 媒体・日付: 2025 年（上記と同じ）
- URL: https://design.google/library/expressive-material-design-google-research
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ブログは、主要な UI 要素を見つけるまでの視線の時間が「最大 4 倍」速いと書き、「多くのアプリで同程度の改善を見た」とも書く。メールアプリの Send ボタン（大きくし、キーボードの直上に置き、secondary 色にした版）は図示された事例で、全体の値ではない。CHI ’26 の要旨（S39）は 48 人・10 アプリで注視が 33% 速いとする。ブログの「最大」と要旨の全体の値は、どちらも視線の指標だが、同じ研究かどうかは両者とも明記しておらず、直接比べられない（本 skill の注記）。

### S37 Google Design「Better, Easier, Emotional UX」（限界と注意）

> What works in a media player or email app might not be suitable for something like a banking interface.

> No amount of expressive design will beat basic functionality.

> removing text labels from email actions resulted in decreased usability

> For a playlist, we replaced the familiar vertically scrolling list of songs with images from album art arranged helter-skelter. While users reported the interface looked modern and exciting, usability scores suffered.

- 媒体・日付: 2025 年（上記と同じ）
- URL: https://design.google/library/expressive-material-design-google-research
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Google 自身の注意書き。文脈で適否が変わる、基本機能に勝る表現は無い、ラベルを外すと使いやすさが下がった。実験した「アルバムアートを散らしたプレイリスト」は新しく見えたが使いやすさは下がった（4 番目の引用）。Expressive を採る側の誤用防止に使える。

### S38 Google Design「Better, Easier, Emotional UX」（少数派と慣れ）

> While there was broad appeal for vibrant, expressive design, a strong minority of users preferred calmer, less intense versions.

> it was impacted by users’ lack of familiarity

- 媒体・日付: 2025 年（上記と同じ）
- URL: https://design.google/library/expressive-material-design-google-research
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「穏やかな版を好む強い少数派」がいたこと、慣れの不足が結果に影響したこと。好みの分布は一様でない。

### S39 Bentley ほか「Usability Hasn’t Peaked」（CHI ’26 論文の要旨、Google Research）

> Through a study with 48 diverse participants completing tasks in 10 different applications, we found that in designs created following Material 3 Expressive guidelines, users fixated on the correct screen element for a task 33% faster, completed tasks 20% faster

> compared to versions designed using the previous Material design system

> highlighting risks of added flexibility.

- 媒体・日付: CHI ’26（2026-04-13〜17、バルセロナ）
- URL: https://research.google/pubs/usability-hasnt-peaked-exploring-how-expressive-design-overcomes-the-usability-plateau/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 査読付き学会（CHI ’26）の要旨。48 人・10 アプリ、旧 Material 比で注視 33% 速、課題完了 20% 速、評価も肯定的。著者は Google 所属で、独立の追試ではない（本 skill の注記）。比較対象は「旧 Material のデザイン」で、他社（iOS 流）との比較ではない。要旨のみ取得し、本文・統計の詳細は未取得。

### S40 Vanessa Cho（Google Design VP、Dezeen のインタビュー）

> In one of our studies, we asked participants to evaluate what we considered the outer limits — totally wild and way-too-playful designs,” she said. “We were surprised when those were the participants’ preferred screens.

- 媒体・日付: 2025-05-28
- URL: https://www.dezeen.com/2025/05/28/google-ushers-in-age-of-expressive-interfaces-with-material-design-update/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 記者署名記事（Rima Sabina Aouf）内の発言。Expressive の方向を決めた研究の 1 つで、「やりすぎ」の案が好まれたという Google 側の説明。同記事は Expressive を「Material の第 4 の更新」と書き、S42 の Fast Company（第 3 の大改訂）と数え方が異なる。

### S41 Dezeen, Rima Sabina Aouf（地の文）

> Material 3 Expressive is the fourth update to Google’s Material Design system

> 2021’s Material Design 3, sometimes called Material You

- 媒体・日付: 2025-05-28
- URL: https://www.dezeen.com/2025/05/28/google-ushers-in-age-of-expressive-interfaces-with-material-design-update/
- 取得日: 2026-11-15
- 検証区分: R
- 備考: 記者の地の文。Material の版の数え方は媒体で異なる（Fast Company は「第 3 の大改訂」）。公式の版の数え方は取得範囲に無い。「M3 Expressive は第何版」と断定しない根拠。同記事は M3（2021）を「Material You とも呼ばれる」と書く（記者の整理）。

### S42 Fast Company, Mark Wilson（地の文）

> it’s introducing its third major revision to the system.

> In the years since, Material Design veered from its ambitious roots.

- 媒体・日付: 2025-05-13（本文は Wayback 2026-01-13 の保存コピー）
- URL: https://web.archive.org/web/20260113112817/https://www.fastcompany.com/91333562/google-maximalist-new-material-design-kit
- 取得日: 2026-11-15
- 検証区分: R
- 備考: 記者の地の文・評価。Material の歴史の語り（初版の野心から personalization、そして maximal へ）は記者の整理で、Google の見解ではない。

### S43 Gizmodo, Raymond Wong（レビュー）

> I have my concerns about usability, though.

> I could see many users also looking at Material 3 Expressive and feeling it’s cluttered and more difficult to discern what is a button and what isn’t.

- 媒体・日付: 2025-05-13
- URL: https://gizmodo.com/android-16s-huge-visual-redesign-is-definitely-funky-but-is-it-more-usable-2000601566
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 発表直後の批評家の懸念（雑然・ボタンの見分けにくさ）。実機・利用者での検証ではなく、見た目からの推測と本人も述べる。因果の主張は確認していない。

### S44 Carrie Cousins, Web Designer Depot「Is Material Design killing the Web?」

> Material Design evolved from flat design, where not all user interface elements had clearly defined roles in the scope of the design.

> most applications using Material Design look like they may have come from the same box

> It’s not Material Design that’s killing the web, it’s lazy designers.

- 媒体・日付: 2015-10-22
- URL: https://webdesignerdepot.com/is-material-design-killing-the-web/
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 画一化の批判（Material の厳密な規則が似た見た目を生む）と、結論は「怠惰なデザイナーの問題」という両面。批判と擁護が 1 本の記事に同居しているので、片側だけを引かない。

### S45 Truly Deeply（ブランドエージェンシー）「Google’s Material design promotes uniformity」

> I can’t help but feel they are locking the platform into uniformity.

> it’s at the expense of homogenising the design and killing differentiating experience and therefore brand.

- 媒体・日付: 2018-05（URL の年月。本文に日付表示なし。Material Theming 発表直後の時期）
- URL: https://www.trulydeeply.com.au/2018/05/googles-material-design-promotes-uniformity/
- 取得日: 2026-11-15
- 検証区分: C
- 備考: ブランド側の批判。発表動画を見た印象にとどまり、検証はしていない。ブランドの差別化を重視する立場の主張。

### S46 Jason Snell, Macworld「Google is making the same mistake now that Microsoft did in the 90s」

> Just as Word 6 inflicted Windows conventions on Mac users, Google’s iOS apps inflict Android on iOS users.

- 媒体・日付: 2016-05-26
- URL: https://www.macworld.com/article/228087/google-is-making-the-same-mistake-now-that-microsoft-did-in-the-90s.html
- 取得日: 2026-11-15
- 検証区分: C
- 備考: 批判の軸は「画一」ではなく「プラットフォームの慣習との不一致」（iOS アプリが Material になる）。Apple 側の論者の意見で、Apple 利用者の視点に偏る。Google 側は「どこでも同じ体験」の一貫性を理由に挙げる、と同記事が反論として紹介する。

### S47 Jason Snell, Macworld（Duarte の発言の言い換え）

> A couple of years ago, Google design chief Matias Duarte declared that using nonstandard icons on iOS was fine, because it was “part of Google’s brand.”

- 媒体・日付: 2016-05-26
- URL: https://www.macworld.com/article/228087/google-is-making-the-same-mistake-now-that-microsoft-did-in-the-90s.html
- 取得日: 2026-11-15
- 検証区分: R
- 備考: 記者による Duarte の発言の要約。引用符内の語句の原典（発言の日付・媒体）は未確認。Duarte の発言として引用しない。

### S48 Brad Frost『Atomic Design』第 2 章（Atomic Design Methodology）

> Atomic design is not a linear process, but rather a mental model to help us think of our user interfaces as both a cohesive whole and a collection of parts at the same time.

> The five stages of atomic design are: Atoms Molecules Organisms Templates Pages

- 媒体・日付: 2016（書籍。Web 版は無料公開。©2016 Brad Frost）
- URL: https://atomicdesign.bradfrost.com/chapter-2/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 原子・分子・生体・テンプレート・ページの 5 段階（2 番目の引用）は「直線的な工程ではなく、全体と部分を同時に見るための思考モデル」（1 番目の引用）。書籍は ©2016 Brad Frost（全文は Web で無料公開）で、再配布の許諾表示は確認できていないので、引用は短くとどめる。

### S49 Brad Frost『Atomic Design』第 4 章（The Atomic Workflow）「interface inventory」

> An interface inventory is a comprehensive collection of the bits and pieces that make up your user interface.

> it’s absolutely essential to get all members of the team to experience the pain of an inconsistent UI for them to start thinking systematically

- 媒体・日付: 2016
- URL: https://atomicdesign.bradfrost.com/chapter-4/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: UI の部品を棚卸しするインターフェースインベントリ（スクリーンショットで集めて分類）。全職種の参加を求める手順。既存の不揃いな UI をシステム化する移行計画の最初の一歩に使える。

### S50 Brad Frost『Atomic Design』第 5 章（Maintaining Design Systems）

> There’s a very real risk that a style guide will end up in the trash can right alongside all the PSDs, PDFs and those other static artifacts of the design process.

> Creating a clear governance plan is essential for making sure your design system can adapt and thrive as time goes on.

- 媒体・日付: 2016
- URL: https://atomicdesign.bradfrost.com/chapter-5/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: スタイルガイドを作って終わりにする失敗と、変更の扱い（ガバナンス）の必要。

### S51 Brad Frost『Atomic Design』第 5 章（ガバナンスの問い）

> What happens when an existing pattern doesn’t quite work for a specific application? Does the pattern get modified? Do you recommend using a different pattern? Does a new pattern need creating?

> How are old patterns retired?

> Who approves changes to the design system?

- 媒体・日付: 2016
- URL: https://atomicdesign.bradfrost.com/chapter-5/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ガバナンス戦略は変更の扱いの問いに答えることから始まる、として並べた一連の問いのうち、既存パターンが合わないとき・新規要望・廃止・承認者を引いた（章にはほかに、バグ、文書の担当、変更の配信、周知の問いも並ぶ。引用外）。運用ルールの項目立てに使える。

### S52 Nathan Curtis（Brad Frost『Atomic Design』第 5 章に引用）

> A style guide is an artifact of design process. A design system is a living, funded product with a roadmap & backlog, serving an ecosystem.

- 媒体・日付: 2016（書籍内の引用。Curtis の原典の日付・媒体は未確認）
- URL: https://atomicdesign.bradfrost.com/chapter-5/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: Curtis の言葉を Frost が引いたもの（孫引き）。「デザインシステムはロードマップとバックログを持つ、資金のある生きた製品」という定式。原典は未確認なので、Curtis 本人の発言としては B。

### S53 Dave Rupert（Brad Frost『Atomic Design』第 1 章の言及）

> it’s not necessarily about using Bootstrap for every client, but rather creating “tiny Bootstraps for every client.”

- 媒体・日付: 2016（書籍内の引用）
- URL: https://atomicdesign.bradfrost.com/chapter-1/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: Rupert の発言を Frost が言い換えて引いたもの。既製フレームワークを使うのではなく、案件ごとの小さなシステムをつくる、という考え方。原典は未確認。

### S54 Brad Frost『Atomic Design』第 1 章（Designing Systems）

> Pattern libraries, also known as front-end style guides, UI libraries, or component libraries, are quickly becoming a cornerstone of modern interface design.

- 媒体・日付: 2016（書籍）
- URL: https://atomicdesign.bradfrost.com/chapter-1/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: パターンライブラリ（別名: フロントエンドのスタイルガイド・UI ライブラリ・コンポーネントライブラリ）が 2010 年代半ばに設計の中心になりつつあった、という Frost の観察。用語が複数あること自体が、「スタイルガイド → パターンライブラリ → デザインシステム」の呼び名の揺れの証拠になる。

### S55 Brad Frost「Design System Frictions」

> It's important to find the place on this spectrum that imposes enough constraints to avoid complete chaos, but also provides teams enough flexibility to be creative and effectively solve problems for users.

> A design system needs to provide a comprehensive set of components for teams to build products, but not so many that will overwhelm everyone, bog down performance, and make the system unwieldy.

- 媒体・日付: 2017-11-11
- URL: https://bradfrost.com/blog/post/design-system-frictions/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: デザインシステムは混沌と厳格の間のどこかに位置を決める、という 1 つ目の摩擦。厳格すぎれば創造性を損なうと Frost 自身が書く。画一化批判への推進側の公式な認識として使える。

### S56 Brad Frost（Storybook の記事内の発言）

> Chores suck, so teams eventually stop updating reference documentation. Once the documentation ceases to reflect the reality of the product, the effort is dead in the water.

> But a majority of design systems ended up imploding. According to the 2021 Design Systems Survey, only 40% of the systems were successful.

- 媒体・日付: 2022-06-02
- URL: https://storybook.js.org/blog/why-most-design-systems-implode/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: Storybook（ベンダー）のブログ記事が Frost の発言として引いたもの（1 番目の引用）。2 番目の引用は Storybook の筆者の地の文で、Frost の発言ではない。記事は「大半のデザインシステムが崩壊した」「成功は 40%」と書くが、これは Sparkbox 調査の読み違い（S58 の備考）。その記述は引用しない。

### S57 Brad Frost（Smashing Magazine のインタビュー）

> Any project could benefit from solid component-based design and development.

> Do you need this big glossy website (like a material.io or lightning design system with a bunch of design principles and a bunch of documentation and stuff)”? Probably not, for those smaller sites, and that’s fine.

- 媒体・日付: 2019-06（インタビュー記事。URL の年月）
- URL: https://www.smashingmagazine.com/2019/06/building-design-systems-interview-brad-frost/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Q&A の形の記事内の発言。小さい案件でも部品ベースの設計・開発に利益がある、という立場。同じ発言で、material.io や Lightning Design System ほどの大きなサイトは小さな案件には要らない（Probably not）とも述べる。

### S58 Sparkbox「Design Systems Survey 2021」

> Almost 40% of systems were successful or very successful

> Not successful 4 % Slightly successful 19 % Moderately successful 38 % Successful 31 % Very successful 8 %

> Fig 2.1 Responses: 159

- 媒体・日付: 2021
- URL: https://designsystemssurvey.seesparkbox.com/2021/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 社内デザインシステムの回答者（159 件）による自己評価の分布。「successful」と「very successful」を足して 39%、「moderately」が 38%。自己評価で、客観指標ではない。Storybook の記事の「成功は 40%、大半が崩壊」は、この調査の言い換えとしては強すぎる（本 skill の注記）。

### S59 Dan Mall「In Search of a Better Design System Metric than Adoption」

> design system adoption doesn’t indicate success.

> How early does a feature team invite, involve, and/or include the design system team in their work?

> I’ve met with plenty of teams that have 90%–100% adoption of their design systems but still experience the same inefficiencies and inconsistencies in product and process that they had prior to adopting the design system.

> My anecdotal data shows that the earlier a feature team involves the design system team, the more successful the design system is

- 媒体・日付: 2023-07-29（本文は Wayback 2026-01-02 の保存コピー。取得時点で元 URL は 404）
- URL: https://web.archive.org/web/20260102162123/https://danmall.com/posts/in-search-of-a-better-design-system-metric-than-adoption/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 採用率は遅行指標で成功を示さない、という批判と、先行指標としての「デザインシステムチームがどれだけ早く機能チームに呼ばれるか」。本人が「逸話的なデータ」と書く主張で、実証ではない。

### S60 Nathan Curtis「Team Models for Scaling a Design System」（Center Centre の再掲）

> Sun.com’s living style guide (we called it a component library, for the record).

> Overlords don’t scale.

> large organizations now embrace digital design at the scale of hundreds of designers

> You can’t legitimately tell them what to do anymore.

> modern design organizations are making their way from solitary teams making a library available or a centralized team serving disconnected products towards a more federated approach.

> Heck, Bootstrap itself is this model from the perspective of designers like me.

- 媒体・日付: 2015-09-17（Medium の初出。本文は Center Centre による再掲）
- URL: https://articles.centercentre.com/team_models/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: 原典（Medium）は Wayback の取得でも本文を得られなかったため、Center Centre による再掲の本文で照合した（B）。体制の 3 モデル（Solitary・Centralized・Federated）の出典。Sun.com の living style guide を振り返る回想も含む。引用では、筆者は「living style guide（we called it a component library, for the record）」と書き、当時の呼び名は component library だったとする。living style guide は後の言い方（引用の範囲に年は無い。コンポーネントライブラリの歴史の一例）。

### S61 Jina Anne「The Salesforce Team Model for Scaling a Design System」

> we’ve chosen to operate using a mix of Team Model #2 (Centralized) and Team Model #3 (Federated).

> a lightweight, versioned, and comprehensive visualization of all our visual Design Tokens and assets

- 媒体・日付: 2015-10-13（本文は Wayback 2025-08-31 の保存コピー）
- URL: https://web.archive.org/web/20250831095307/https://medium.com/salesforce-ux/the-salesforce-team-model-for-scaling-a-design-system-d89c2a2d404b
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Salesforce は Centralized と Federated の併用。同じ記事（2015-10-13 の公開日の記事）が、視覚的な「Design Tokens」と資産の可視化に言及する（2 番目の引用）。記事が Design Tokens という語を使ったことの根拠で、Lightning Design System の資料がそれを載せていたことや、用語の初出を示すものではない。

### S62 Therese Fessenden, NN/g「Design Systems 101」

> A design system is a complete set of standards intended to manage design at scale using reusable components and patterns.

> The 1976 NASA Graphics Standards Manual (NHB 1430.2) is an example of a thorough branding style guide.

> Creating and maintaining a design system is a time-intensive activity which requires a dedicated team.

> Design systems, unfortunately, are not a one-and-done solution.

> Design repositories can take many forms, but they often contain a style guide, a component library, and a pattern library.

- 媒体・日付: 2021-04-11（2026-08-27 に再確認とページに表示）
- URL: https://www.nngroup.com/articles/design-systems-101/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: NN/g による定義と、使わない理由（維持に専任チームが要る・一度で終わらない）。構成は style guide・component library・pattern library と、それを管理する人々、と同記事は整理する（3 つの名は 5 番目の引用）。style guide の古い例として 1976 年の NASA Graphics Standards Manual を挙げる。

### S63 Pascal Barry, UX Planet「Design Systems Are Bullsh*t」

> Design systems are a single point of failure, as they deliver the same components to multiple product and service touch points across an organisation.

> By attempting to catalogue and rationalise everything, the result of the design system is to atomise and codify a designer’s process in a way that makes it appear understandable and, worryingly, actionable by anyone regardless of their design competence.

- 媒体・日付: 2020-12-01（本文は Wayback 2025-07-16 の保存コピー）
- URL: https://web.archive.org/web/20250716191420/https://uxplanet.org/design-systems-are-bullsh-t-7ecdb795cc62?gi=410dfcbd2a49
- 取得日: 2026-11-15
- 検証区分: C
- 備考: デザインシステムそのものへの批判（単一障害点・設計の判断を部品の組み立てに還元する・スタートアップでは頻繁なリブランドで無駄になりうる）。筆者の意見で、実証はない。記事は Frost の IKEA の比喩なども批判の材料に引く。

### S64 Robin Rendle, CSS-Tricks（Brad Frost の言葉を引用）

> components living inside static design tools like Sketch isn’t itself a design system.

- 媒体・日付: 2018-02-15
- URL: https://css-tricks.com/sketch-library-not-design-system-redux/
- 取得日: 2026-11-15
- 検証区分: B
- 備考: Rendle が Frost の記事から引いた一文（孫引き。Frost の原典は未取得）。Sketch（現在なら Figma）のライブラリだけではデザインシステムではない、という整理。

### S65 Jina Anne（Smashing Podcast #3、書き起こし）

> But it is that much broader application of it with a whole process around it. It even gets into like how you distribute those variables across components, like on a global level or on an individual component level.

> I showed that to the team at Salesforce and then that kind of is where the concept of design tokens spawned off of.

> So, this was a way to store our visual information as data and then, in an automated way, generate the variables or the XML data you needed or the JSON data, whatever format that particular platform looked for.

> let’s say a color doesn’t pass contrast ratios. I didn’t have to then notify the Android team and the iOS team and the web team.

- 媒体・日付: 2019-11-19
- URL: https://www.smashingmagazine.com/2019/11/smashing-podcast-episode-3/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: デザイントークンの発想の当事者の説明（Sass サイトの YAML データから Salesforce の Theo へ）。プラットフォームをまたぐ配信と、1 か所の変更が全体に届く利点。年は述べていない。当事者の回想で、起源の年の確定には使わない。

### S66 Salesforce Lightning Design System（Design Tokens、SLDS 1 の旧サイト）

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.

> We use them in place of hard-coded values (such as hex values for color or pixel values for spacing)

- 媒体・日付: 取得時点のページ（日付表示なし）。v1 のサイトへリダイレクトされた
- URL: https://v1.lightningdesignsystem.com/design-tokens/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: トークンは「値の代わりに使う名前付きの実体」という定義。SLDS 1 の旧サイト（最終 URL は v1.lightningdesignsystem.com）で、現行の SLDS 2 の文面とは異なりうる。

### S67 Atlassian Design System（Design tokens）

> Design tokens are name and value pairings that represent small, repeatable design decisions.

- 媒体・日付: 2026-11-15 取得時点の本文
- URL: https://atlassian.design/foundations/tokens/design-tokens
- 取得日: 2026-11-15
- 検証区分: A
- 備考: トークンを「名前と値の組で、小さく繰り返される設計判断を表すもの」と定義する。

### S68 Design Tokens Community Group（安定版 2025.10 の発表）

> The Design Tokens Community Group today announced the first stable version of the Design Tokens Specification (2025.10)

> The specification was developed by more than 20 editors and authors

- 媒体・日付: 2025-10-28
- URL: https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: DTCG が第 1 の安定版（2025.10）を発表。W3C Community Group の発表で、W3C 標準ではない（次項）。

### S69 Design Tokens Technical Reports 2025.10（ステータス）

> Final Community Group Report 28 October 2025

> It is not a W3C Standard nor is it on the W3C Standards Track.

> This specification is considered stable

> This document was published by the DTCG as a Candidate Recommendation following the definitions provided by the W3C process.

> While not a W3C recommendation, this classification is intended to clarify that, after extensive consensus-building, this specification is intended for implementation.

> Design tokens were created by the Salesforce design system team, and the name comes from them

- 媒体・日付: 2025-10-28
- URL: https://www.designtokens.org/tr/2025.10/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 区分は「Final Community Group Report」。W3C Standards Track ではない。同ページには「Candidate Recommendation として公開」という一文もある（W3C の手続きの用語を借りた分類で、勧告ではないと同ページが明記）。トークンの考案は Salesforce の設計システムチーム（Jon と Jina）に帰属すると仕様自身が書くが、年は書いていない。

### S70 Design Tokens Community Group（FAQ）

> Start using the specification for production today, especially for new projects.

> It defines the format for token exchange while leaving organizational strategy to design system teams.

- 媒体・日付: 2026-11-15 取得時点（日付表示なし）
- URL: https://www.designtokens.org/faq/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 本番での利用を勧める記述。同ページは「仕様は活発に改訂中（Still evolving）」「W3C Standards Track ではない」とも書く（絵文字付きの行のため引用には含めず、ここに記す）。仕様は交換の形式を定め、組織の運用は定めない。

### S71 Design Tokens Format Module 2025.10

> A design token's value can be a reference to another token. The same value can have multiple names or aliases.

> An object with a $value property is a token.

> The parent object's key is the token name.

> the following MIME type SHOULD be used for design token files: application/design-tokens+json

> The following file extensions are recommended by this spec: .tokens .tokens.json

> The curly brace syntax is specifically designed for referencing complete token values and always resolves to the $value property of the target token.

> The value MUST be an object containing a numeric value (integer or floating-point) and unit of measurement ("px" or "rem").

> Name: "token name" Type: "color" Value: Color Space: "srgb" Components: [1, 0, 0]

> Otherwise, if any of the token's parent groups have a $type property, then the token's type is inherited from the closest parent group with a $type property.

> $description No A plain JSON string describing the group's purpose

- 媒体・日付: 2025-10-28
- URL: https://www.designtokens.org/tr/2025.10/format/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: エイリアス（他トークンへの参照）、メディアタイプ application/design-tokens+json、拡張子 .tokens / .tokens.json。2・3 番目の引用は、$value を持つオブジェクトがトークンで、親の key がトークン名になるという規則（仕様本文の例では "$type" と "$value" を持つ JSON として書かれる）。6 番目の引用は、波括弧の参照（`{group.token}` の形）が参照先の `$value` に解決されること。7 番目の引用は dimension の値が数値と単位（"px" か "rem"）を持つオブジェクトであること（原文は "px" と "rem" をコード書式で囲む。引用はその書式を外して空白を詰めた）。8 番目の引用は、色の最小例を仕様自身が文章にしたもので、色の値が色空間と成分の配列を持つこと。成分の範囲や hex の扱いは Color module の文面で、未転記（仕様の例には hex を併記したものがある）。9 番目の引用は、グループに置いた $type が、その下のトークンの型として継承されること。10 番目の引用は、グループの $description が任意の文字列であること（仕様のグループの項目表の 1 行）。

### S72 GOV.UK「Government Design Principles」9. Be consistent, not uniform

> Contents 1. Start with user needs 2. Do less 3. Design with data 4. Do the hard work to make it simple 5. Iterate. Then iterate again 6. This is for everyone 7. Understand context 8. Build digital services, not websites 9. Be consistent, not uniform 10. Make things open: it makes things better 11. Minimise environmental impact

> Be consistent, not uniform We should use the same language and the same design patterns wherever possible. This helps people get familiar with our services, but when this isn’t possible we should make sure our approach is consistent. This isn’t a straitjacket or a rule book.

- 媒体・日付: 原則は 2012-04-03 公開、2025-04-02 更新（現在の 11 原則の版。9 番目の文言が 2012 年のものとは言えない）
- URL: https://www.gov.uk/guidance/government-design-principles
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 「一貫していて、画一ではない」。同じ言葉・パターンを使うが、拘束衣でも規則集でもない。Open Government Licence v3.0 のもとで公開。画一化批判に対する公共分野のシステムの明示的な答え。

### S73 GOV.UK「Government Design Principles」2. Do less

> If we’ve found a way of doing something that works, we should make it reusable and shareable instead of reinventing the wheel every time.

- 媒体・日付: 同上（2025-04-02 更新の版）
- URL: https://www.gov.uk/guidance/government-design-principles
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 機能が動いているなら再利用・共有可能にする、という原則。デザインシステムの存在理由に直結。

### S74 GOV.UK Design System「Contribution criteria」

> Useful There is evidence that this component or pattern would be useful for many teams or services.

> Unique It does not replicate something already in the Design System.

> Usable It has been tested in user research and shown to work with a representative sample of users, including those with disabilities.

> Consistent It reuses existing styles and components in the Design System where relevant.

> Versatile The implementation is versatile enough that the component or pattern can be used in a range of different services that may need it.

- 媒体・日付: 2026-11-15 取得時点（日付表示なし）
- URL: https://design-system.service.gov.uk/community/contribution-criteria/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 貢献の受け入れ基準（Useful・Unique・Usable・Consistent・Versatile。5 項目すべてを引用に含める）。新規提案は「複数チームで有用な証拠」と「既存と重複しないこと」を要する。貢献モデルの具体例。ライセンス: ページのフッターに Open Government Licence v3.0（except where otherwise stated）の表示（2026-11-15 に確認）。

### S75 GOV.UK Design System「Component lifecycle statuses」

> We currently use 2 component statuses on the GOV.UK Design System website: Trial - these components have a trial status tag Stable - these components do not have a tag

> Components that have been in trial status for 6 months will move to stable status if we do not receive any negative feedback.

> deprecates components that do not adapt to evolving user needs, current research and technologies

- 媒体・日付: 2026-11-15 取得時点（日付表示なし）
- URL: https://design-system.service.gov.uk/community/component-lifecycle-statuses/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: コンポーネントの状態は Trial と Stable の 2 つ。Trial は 6 か月で、否定的な反応が無ければ Stable へ。利用者調査で状態の表示は好意的に受け取られた、と同ページが書く。ライセンス: ページのフッターに Open Government Licence v3.0（except where otherwise stated）の表示（2026-11-15 に確認）。

### S76 GOV.UK Design System「Extending and modifying components in production」

> Styles, components and patterns in the GOV.UK Design System use the govuk- prefix.

> This will work in the short term but may break if you install an update relying on the component’s previous behaviour.

> When writing code for your application, use a different prefix, like app-.

> If you make a modification involving CSS you might decide to write a selector that targets a GOV.UK Design System class and change its CSS properties.

- 媒体・日付: 2026-11-15 取得時点（日付表示なし）
- URL: https://design-system.service.gov.uk/get-started/extending-and-modifying-components/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: システムの CSS を直接上書きすると更新で壊れうる（2 番目の引用）。2 番目の引用の「This」が指すのは、4 番目の引用の「GOV.UK Design System のクラスを狙うセレクターを書いて、その CSS のプロパティを変える」やり方（上書き）。拡張の流儀の公式の例。利用側は別の接頭辞（app- など）を使う（3 番目の引用）。ライセンス: ページのフッターに Open Government Licence v3.0（except where otherwise stated）の表示（2026-11-15 に確認）。

### S77 GOV.UK Design System「Community principles」

> Reuse as much as possible and iterate based on user needs.

> Share work in progress as early as possible.

- 媒体・日付: 2026-11-15 取得時点（日付表示なし）
- URL: https://design-system.service.gov.uk/community/community-principles/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: コミュニティの原則（既存から始める・貢献を返す・オープンで正直に）。

### S78 IBM Carbon Design System「Contributing overview」

> New experimental components in the discovery phases of design and development should be created through IBM’s Carbon Labs, a dedicated environment for explorations, separate from the stable design system assets.

> All requirement categories must be completed before a component can be considered done.

- 媒体・日付: ページ表示の最終更新 2026-09-01
- URL: https://www.carbondesignsystem.com/getting-started/contributing/overview
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 実験段階の部品は Carbon Labs（安定アセットと分離）で育て、done の基準を満たしてから本体へ。貢献の経路を段階で分ける例。

### S79 carbon-design-system/carbon（README）

> Carbon is IBM's open-source design system for products and experiences.

- 媒体・日付: 2026-11-15 取得時点（main ブランチ）
- URL: https://raw.githubusercontent.com/carbon-design-system/carbon/main/README.md
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Carbon は IBM のオープンソースのデザインシステム。Markdown の生ファイルで、空白の正規化のみ。

### S80 Shopify（Polaris references）

> All app surfaces use Polaris, Shopify's unified UI framework built on web components, to deliver a consistent experience across the platform.

- 媒体・日付: 2026-11-15 取得時点（日付表示なし）
- URL: https://shopify.dev/docs/api/polaris
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Polaris は現在 Web Components ベースの統一 UI フレームワークとして shopify.dev で文書化されている。以前の React ベースの Polaris の扱いは今回確認していない。

### S81 microsoft/fluentui（README）

> Combining Fluent UI React v9 components with Fluent UI React v8 or v0 components is possible and allows gradual migration to Fluent UI v9.

- 媒体・日付: 2026-11-15 取得時点（master ブランチ）
- URL: https://raw.githubusercontent.com/microsoft/fluentui/master/README.md
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 版をまたいで混在させ、段階的に移行する方式（v8 → v9）。移行計画の実例。Fluent 2 の公式サイトは JavaScript 描画で、原則の本文は取得できていない。Markdown の生ファイル。

### S82 Semantic Versioning 2.0.0（semver.org）

> Given a version number MAJOR.MINOR.PATCH, increment the: MAJOR version when you make incompatible API changes MINOR version when you add functionality in a backward compatible manner PATCH version when you make backward compatible bug fixes

- 媒体・日付: 2026-11-15 取得時点（仕様 2.0.0）
- URL: https://semver.org/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: MAJOR は互換性を壊す変更、MINOR は後方互換の機能追加、PATCH は後方互換の修正。デザインシステムのバージョニングに使う際は、「何を互換性とみなすか」（見た目の変更を MAJOR にするか）をチームで決める必要がある（本 skill の注記）。

### S83 W3C WCAG 2.2「Understanding SC 1.4.3 Contrast (Minimum)」

> The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:

> Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;

> Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.

- 媒体・日付: 2026-11-15 取得時点（WCAG 2.2）
- URL: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: テキストのコントラスト比は 4.5:1 以上、大きい文字は 3:1 以上。3 番目の引用は例外の 1 つ（Incidental）で、無効（inactive）な部品の文字にはコントラストの要件が無いこと。

### S84 W3C WCAG 2.2「Understanding SC 1.4.11 Non-text Contrast」

> The visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s):

> User Interface Components Visual information required to identify user interface components and states, except for inactive components

> Graphical Objects Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.

> Logos and logotypes: The brand logo of an organization or product is the representation of that organization, and is generally presented in the brand's specific colors; it is therefore exempt.

- 媒体・日付: 2026-11-15 取得時点（WCAG 2.2）
- URL: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: UI 部品の状態を識別する視覚情報とグラフィックは隣接色に対し 3:1 以上。2 番目の引用は対象の 1 つ目（UI 部品とその状態を識別するのに要る視覚情報）で、無効な部品は除かれる。3 番目の引用は対象の 2 つ目（内容を理解するのに要るグラフィックの部分）で、ある見せ方が伝える情報にとって本質的な場合は除かれる。4 番目の引用は、ブランドのロゴ・ロゴタイプは例外（exempt）という同ページの記述。ロゴに 3:1 を求めるのは、WCAG の要件でなく本 skill の目安。

### S85 W3C WCAG 2.2「Understanding SC 2.5.8 Target Size (Minimum)」

> The size of the target for pointer inputs is at least 24 by 24 CSS pixels

- 媒体・日付: 2026-11-15 取得時点（WCAG 2.2）
- URL: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- 取得日: 2026-11-15
- 検証区分: A
- 備考: ポインタ入力のターゲットは 24×24 CSS px 以上（例外あり）。Android の 48dp の推奨（S31）とは別の基準。

### S86 Mark Otto（Twitter Developer Blog「Bootstrap from Twitter」）

> In the earlier days of Twitter, engineers used almost any library they were familiar with to meet front-end requirements. Inconsistencies among the individual applications made it difficult to scale and maintain them. Bootstrap began as an answer to these challenges and quickly accelerated during Twitter’s first Hackweek.

> By the end of Hackweek, we had reached a stable version that engineers could use across the company.

> This release represents our first public 1.0 release and the open sourcing of many months of hard work.

> We are happy to announce Bootstrap, a front-end toolkit for rapidly developing web applications.

- 媒体・日付: 2011-08-19（本文は Wayback 2014-02-09 の保存コピー）
- URL: https://web.archive.org/web/20140209180345/https://blog.twitter.com/2011/bootstrap-twitter
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Bootstrap の公開（1.0）と、社内の不揃いな UI を揃える必要から生まれた経緯。社内ツールから OSS へ、というデザインシステムの典型的な起源の 1 つ。

### S87 Mike Kruzeniski（Windows Phone デザインチーム、Windows Developer Blog「From Transportation to Pixels」）

> A couple years ago the Windows Phone design team realized that the design path that Windows Mobile was on was not sustainable.

> Once we decided to reset the direction, we didn’t look towards other mobile or PC user interfaces for inspiration. Instead, we surrounded ourselves by what we considered to be the best examples of design work, from Josef Müller-Brockmann and other pioneers of the International Style, Massimo Vignelli’s design systems for the NY Subway Map and brands like American Airlines, to conceptual work by Experimental Jetset

> a topic we’ve spoken about at a number of developer conferences (Watch Albert at MIX 2010)

> Our design principles were, and still are: Clean, Light, Open and Fast We took an approach that we call “Fierce Reduction” to remove any elements in the UI that we felt were unnecessary; both visual elements and feature bloat. It allows us to shine a focus on the primary tasks of the UI

> Alive in Motion The transitions between screens in a UI are as important the design of the screens themselves.

> Celebrate Typography Our design inspiration is very typographic, and it felt like it was time for User Interfaces to be uncompromising about type as well. Type is information, type is beautiful.

> Content, Not Chrome It’s the content on the phone that people want, not the buttons.

> Authentically Digital Finally, we believe in honesty in design. A user interface is created of pixels, so in Metro we try to avoid using the skeumorphic shading and glossiness used in some UI’s that try to mimic real world materials and objects.

> The first interfaces were built on a need to communicate what they were. They were like a desk, but better. They were completely new, so an approach of direct representation was appropriate. Today it’s not necessary, and yet, it’s the path that most software interfaces seem to continue to follow.

- 媒体・日付: 2011-02-17（本文は Wayback 2019-11-20 の保存コピー）
- URL: https://web.archive.org/web/20191120174134/https://blogs.windows.com/windowsdeveloper/2011/02/17/from-transportation-to-pixels/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Metro の 5 原則（Clean・Light・Open・Fast／Alive in Motion／Celebrate Typography／Content, Not Chrome／Authentically Digital）の当事者による記述。「skeumorphic」の綴りは原文のまま。Windows Phone チームが Windows Mobile の路線を持続不能と判断して方向を変えた、とも同記事は述べる（1 番目の引用）。Metro と NN/g の「2011 年」の食い違いは `design-history.md` の「年が食い違う出典」に記す。

### S88 Kate Moran, NN/g「Flat Design: Its Origins, Its Problems, and Why Flat 2.0 Is Better for Users」

> The release of Microsoft’s Metro design language and Windows 8 in 2011 was particularly influential in popularizing flat design.

> Skeuomorphism and realism had long been trademarks of Apple design, and its homepage resisted the flat trend until around 2013.

> Our primary objection to flat design is that it tends to sacrifice users’ needs for the sake of trendy aesthetics.

- 媒体・日付: 2015-09-27
- URL: https://www.nngroup.com/articles/flat-design/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: NN/g は Metro と Windows 8（同記事は 2011 年）がフラット化の普及に影響したとし、フラットはユーザーのニーズを流行の見た目のために犠牲にしやすい、と批判する。Apple のホームページは 2013 年頃までフラット化に抵抗したとも述べる。NN/g の立場は一貫して批判側。年の記述（2011）は Metro の発表（2010 年）とは別の出来事（Windows 8）を指す可能性がある。

### S89 NN/g「Flat UI Elements Attract Less Attention and Cause Uncertainty」

> On average participants spent 22% more time (i.e., slower task performance) looking at the pages with weak signifiers.

> On average, people had 25% more fixations on the pages with weak signifiers.

> We conducted a quantitative experiment using eyetracking equipment and a desktop computer. We recruited 71 general web-users to participate in the experiment.

- 媒体・日付: 2017-09-03
- URL: https://www.nngroup.com/articles/flat-ui-less-attention-cause-uncertainty/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: 視線計測の実験。シグニファイアの弱い（フラットな）版は、課題の遂行中に見る時間が平均 22% 長く、注視は 25% 多かった。デスクトップの Web での結果（3 番目の引用。デスクトップのコンピューターとアイトラッカーを使い、71 人が参加）で、モバイル・タッチには直接当てはまらない。NN/g は追試への批判に別記事で応答している（未取得）。

### S90 Jony Ive（Apple Newsroom の iOS 7 発表のプレスリリース）

> True simplicity is derived from so much more than just the absence of clutter and ornamentation—it’s about bringing order to complexity

- 媒体・日付: 2013-06-10
- URL: https://www.apple.com/newsroom/2013/06/10Apple-Unveils-iOS-7/
- 取得日: 2026-11-15
- 検証区分: A
- 備考: Apple の発表文に載った Ive の発言。iOS 7 の「フラット化」の公式な語り。designer-apple が導入されていれば、その台帳にも同じ出典がある（Apple 側の転換の詳細は designer-apple の参照を開く）。

### S91 Smashing Magazine（Alla Kholmatova『Design Systems』の書籍紹介ページ）

> The book isn’t about tooling; it’s about how to set up a shared language that would help teams produce visual output that consistently renders designer’s intent.

- 媒体・日付: 2017-10-10（紹介ページの公開日。ページのメタ情報）
- URL: https://www.smashingmagazine.com/design-systems-book/
- 取得日: 2026-11-15
- 検証区分: R
- 備考: 出版社の紹介文（Kholmatova 本人の文ではない）。書籍の逐語引用は載せない。要旨は「引用ではない参照」の節に別に書く。

## 引用ではない参照（事実の根拠）

書籍など、Web に原文が無いものは逐語引用せず、書誌と要旨（本 skill の言葉）だけを記す。

| 参照 | 書誌 | 要旨と区分 |
|---|---|---|
| Alla Kholmatova『Design Systems』 | Smashing Media。紹介ページのメタ情報は 2017-10-10（S91）。出版年・ISBN は本文では未確認 | 出版社の紹介ページ（S91）は、本書をツールの話ではなく、チームが設計意図を一貫して形にするための共有言語のつくり方を扱う実践書と紹介し、デザイン原則の質を論じる章の無料 PDF 抜粋があるとする。それ以上の本文（機能パターンと知覚パターンの区別など、流通している要約）は未照合なので、本 skill では「書籍・未照合」として扱い、断定しない。区分 U（本文）／R（紹介文） |
| Brad Frost『Atomic Design』 | Brad Frost、2016 年。Web 版は https://atomicdesign.bradfrost.com/（無料）、電子書籍の販売あり | 5 段階の思考モデル、パターンライブラリの質、interface inventory、governance の問いは、Web 版の本文を取得して S48〜S51 に引いた。本の原型となった 2013 年頃のブログ記事（原子・分子の最初の提示）は取得しておらず、年は U |
| Nathan Curtis / EightShapes の記事群 | Medium（eightshapes-llc）。「Team Models for Scaling a Design System」2015-09-17 | 体制の 3 モデルは S60（B）と S61 で確認。他の記事（命名・トークン・バリアント・「Design systems 101」など）は未取得 |
| W3C Design Tokens Community Group の仕様 | Format・Color・Resolver の 3 モジュール、2025.10（2025-10-28）。https://www.designtokens.org/tr/2025.10/ | Format モジュールの本文を取得し S71。Color・Resolver は目次の確認のみ。トークンは "$type"・"$value" を持つ JSON、エイリアスで他のトークンを参照、複合トークンあり、と仕様本文の例と用語節から確認した |
| Material Design 3 の公式ガイドライン | https://m3.material.io/（JS 描画） | 本文は未取得。GitHub の README が参照する先として、foundations/design-tokens/overview・styles/color・blog/science-of-color-design・blog/material-is-compose-first の存在は、README のリンクから確認した（リンク先の本文は未読） |
| Google I/O 2014 の Material Design の基調講演・セッション動画 | Android Developers のページ（S08）が「Introduction to Material Design」「Paper and Ink: The Materials that Matter」などの動画へリンクする | 動画の書き起こしは未取得。2014 年の発表の事実は、同ページと Gibson の回想（S09）にとどまる |

## 未検証・伝聞

事実・引用として使わない。よく流通する言説の警告として集める。

| 内容 | 状態 |
|---|---|
| Duarte の "It is a sufficiently advanced form of paper as to be indistinguishable from magic." | 検索結果の抜粋のみ（512 Pixels 経由の Verge 記事の引用とされる）。原文のページは取得できなかった（404）。Duarte の発言として使わない |
| Duarte の "Mobile as a concept is dead, mobile is over."、FORM 2014 での「insurrection」 | 検索結果の抜粋のみ。原典未取得 |
| Duarte の「アプリが iOS で非標準のアイコンを使うのは Google のブランドの一部」という発言 | Macworld の記者の言い換え（S47、区分 R）のみ。原典の日付・媒体は未確認 |
| デザイントークンの用語を Jina Anne と Jon Levine が 2014 年／2015 年に作った | 仕様自身が「Salesforce のデザインシステムチームが作り、名前は Jon と Jina に由来する」と書く（S69）が、年は書かない。S61 は 2015-10-13 に用語が使われていた証拠で、初出ではない。S65 は年を述べない |
| Google の Expressive の比較対象は「iOS のガイドラインに従った非 Expressive のデザイン」だった | 検索結果の要約が伝える二次報道。CHI ’26 の要旨（S39）は比較対象を「旧 Material」と書く。報道の主張は使わない |
| Expressive の研究ブログが「誤って公開され、いったん削除された」 | Gizmodo（S43）が「Google が先週 "accidentally" ブログ記事を公開した」と書くのみ。経緯の一次の説明は未取得 |
| Windows Phone 7 の発売日が 2010-10-21 | 個人の評論記事（UX Collective）の記述のみ。一次資料は未取得。Metro は MIX 2010（2010 年）で語られた、という記述は S87 で確認 |
| Windows 8 の発売年 | NN/g は「Metro と Windows 8 は 2011 年」と書く（S88）。Windows 8 の公開時期の一次資料は未取得。年を書かない |
| 「Bootstrap を使ったサイトはどれも同じ見た目」「Material を使ったサイトはどれも同じ見た目」という通説 | 通説の出典は見つかったが（S44・S45）、画一化の程度を測った調査は取得していない。ブログ・評論の意見の範囲 |
| Brad Frost の "design systems are a living product" 系の言い回しの帰属 | S52 のとおり Curtis の言葉を Frost が引いたもの。Frost の言葉として書かない |
| Material 初版が「flat design から進化した」 | S44 の記者の説明（C）のみ。Google 自身が述べた出典は取得していない |
| Material が 2014 年に「紙」から始まったという Google 公式の同時期の説明の逐語 | 2014 年当時の公式ページは Wayback の 2015-01-01 以降の保存コピーで確認（S01）。発表当日の基調講演の文言は未取得 |
| 「M3 の既定のダークテーマは #121212」 | 根拠なし。#121212 は M2 時代の推奨値（S13）。M3 の baseline のダークの colorSurface は neutral6 という指定（S18。6 を tone と読むのは本 skill の読み）で、16 進値は palette 次第で本台帳では未取得。M3 の既定値として書かない |

## 調査の限界

- 現行の公式サイト（m3.material.io・Fluent 2）は JavaScript 描画などで本文を取得できず、m3.material.io は Wayback の保存コピーでも本文が空だった。Material 3 の仕様値は GitHub の README と docs（Markdown の生ファイル）、Android Developers の文書で代替した。Fluent 2 は公式サイトが JavaScript 描画で本文を取得できず、原則・トークンの本文は未取得（S81 は GitHub の README）
- Material の 2014 年の発表（Google I/O）の一次記録は取得できていない。初版の仕様は 2015-01〜2016-01 の Wayback の保存コピー（S01〜S07・S08）で、2014 年当時の文面と同一とは限らない。Duarte の 2014 年の発言（基調講演・Verge・Wired・Fast Company のインタビュー）は取得していない
- Material You の最初の発表（2021-05-18）は Android Developers Blog の記事（S15）で確認した。M3 のガイドラインの公開時の公式文面は未取得
- Expressive の研究の本文（CHI ’26 論文の PDF・統計の詳細・Google のブログの全図）は未取得。要旨とブログの本文のみ。独立の追試は見つけていない
- Medium は取得できない（403）。Nathan Curtis の原典と Salesforce の記事は、再掲と Wayback で代替した。Fast Company・UX Collective・Android Police・Design Week は直接取得できず、Wayback または未取得
- GOV.UK のコンポーネントの現状・Carbon のガバナンス文書・Polaris の旧 React 版の扱いは、取得したページの範囲にとどまる。Carbon の「Product Development Lifecycle」と component checklist の本文は未読
- 採用の測り方は Sparkbox の調査（自己評価）と Dan Mall の意見（S59）のみ。採用率・貢献数などの指標の定義を述べた一次文書（Figma・Atlassian・GitHub Primer など）は未取得
- WCAG の数値（4.5:1・3:1・24×24 CSS px）は WCAG 2.2 の Understanding 文書による。WCAG 3 や APCA は扱っていない。Android の 48dp と WCAG の 24 CSS px は別の基準で、換算していない
- GitHub の README・docs は main/master ブランチの 2026-11-15 時点の内容で、随時変わる。文書の鮮度表示（material-web の reviewed: 2026-07-31）は参考値
- 日本語の出典（日本のデザイン組織・日本語環境の Material 指針）は扱っていない。日本語（CJK）の型スケールの指針は取得していない

## 区分ごとの件数

| 区分 | 件数 |
|---|---|
| A | 76 |
| B | 5 |
| C | 5 |
| R | 5 |
| 合計 | 91 |

（S92 は欠番。出典の本文を取得できず、根拠として使えなかったため台帳から外した。）

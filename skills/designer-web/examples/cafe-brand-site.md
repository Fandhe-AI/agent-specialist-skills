# 例: 新しいカフェのブランドサイト（方向性を言葉と断片で決める）

「雰囲気のいい感じで」という依頼を、形容詞のまま作らず、言葉・色・書体・構図の断片で方向性を決めてから作る例。題材は架空の珈琲店で、実在の店・ロゴ・写真の模倣は含まない。ロゴと CI は決定済みの前提で、サイトの見た目の方向性だけを扱う。店のサイトの方向性を決めるとき、写真が撮影前のときに開く。

## 依頼

- 店: 港町の古い灯台守の家を改装する珈琲店「灯台舎珈琲」（架空）。ロゴ・店名・営業時間は決定済み。店内の写真は未撮影（撮影はこれから）
- ページ: トップ（本例）・メニュー・店について・場所。スマートフォン中心
- 依頼文（架空）: 「新しくできる店のサイトを、雰囲気のいい感じで作って」
- 見る人: 港で朝早くから働く人と、朝の散歩の近所の人。初見で、店を知らない
- 範囲外: ロゴ・看板・CI（導入されていれば designer-brand）、文字組の規則（導入されていれば designer-typography）

### 根拠の範囲（先に読む）

- 出典のある事実: 形容詞の列は、視覚の指針として弱い（S17）。複数の案は、完成画面でなく断片の粒度で比べる（S13、S15、S17）。装飾目的の大きな写真は無視され、実物の写真は注視される（S60）。同種の依頼で誰でも出す既定の案と比べ、変えた点と理由を言う（S55）。AI の提供元の公開文書は、cream 背景＋セリフ＋テラコッタなどを、AI の出力が偏る様式に挙げる（S54。2026-11-15 時点）
- 英語の原文（S17）: "Such words could work well for establishing a tone of voice for content, but they don’t work as well as a guide for visual design or branding." 日本語は要旨で、本人の発言ではない
- 本 skill の目安（出典なし）: 言葉の数（3〜5）、案の数（3）、色・寸法・不透明度・角度、紙の粒の技法。同種の依頼の既定の案がどの形かは、取得時点の文書に依る時点情報で、固定の禁止リストではない
- 未検証: Safari・Firefox での見え。システム書体の字面（OS で違う）。縦組み（`writing-mode: vertical-rl`）の対応・字面・縦中横・約物は本 skill では未照合で、designer-typography も詳細は未照合（JLREQ 本体で確かめる）。新しい CSS 機能のブラウザ対応状況（版は未照合）

## 目的の一文

夜明け前から開く店だと 10 秒で伝わり、一杯の値段と場所まで迷わず届く。

## 削るもの

| 削るもの | 理由 |
|---|---|
| ヒーローの店内写真 | 撮影前で、写真の質に見た目が左右される。写真は実物を使う（S60）ので、撮影後に「店について」へ差し込む。ヒーローは写真なしで成立させる |
| cream 背景＋セリフ＋テラコッタの組み合わせ | 同種の依頼の既定の案の第 1 項（S54）。店名の由来（灯台）から色を決めたほうが、理由を言える |
| すべての見出しの上の大文字のラベル、末尾の矢印 | 被写体と無関係に現れる飾り（S54 の第 5 項） |
| 全セクションのフェードイン | 定型の動き（S55）。動きは、灯の光の束が一度だけ振れる 1 か所にする |
| ハンバーガーに隠したナビ | 3 つのリンクは常時見せる（本 skill の判断） |
| 参考にした店の見た目の写し | 参照から抜くのは技法と判断だけ。同じ見た目へ収束する危険（S51。店舗の空間の話で、Web の話ではない） |

## 構成

### 方向性のメモ（作る前に書いた文章）

- 被写体・目的・見る人: 灯台守の家を改装した、夜明け前から開く珈琲店。港で働く人と近所の人に、開店時刻と一杯を伝える
- 言葉: 夜明け前、潮と煤、手で回す、灯り
- 色: 霧の青灰（地）、港のインク（文字・面）、灯の橙（1 か所）。「夜明け前の群青」と「灯」から決めた
- 書体: 太いゴシックを縦組みで大きく、店名の 1 か所だけ。ほかは同じ系統の標準の太さ
- 構図: 左に縦の特大題字。右下に横へ走るインクの帯（海）。帯の縁に灯が昇り、光の束が空を横切る。この 2 つの要素だけで声を出す
- 画像と質感: ヒーローは写真なし（CSS だけ）。紙の粒を弱く重ねる。写真は「店について」に 1 枚だけ（撮影の指示書は下）
- 参照の扱い: 好きな点を、配色の少なさ・縦組みの強さ・動きの控えめさに分けて書く（S61 の手順）。見た目は写さない

### 既定の案との比較（S55 の見直し）

| 項目 | 同種の依頼の既定の案 | 本案 | 変えた理由 |
|---|---|---|---|
| 地の色 | 暖色の cream | 霧の青灰 | 港の朝の空気。店名の由来 |
| 見出しの書体 | コントラストの強いセリフ | 太いゴシックの縦組み | 灯台の柱の形。縦に立つ題字 |
| 差し色 | テラコッタ | 灯の橙（1 か所） | 土の色でなく光。位置は海の縁だけ |
| 構成 | 縦に積むカードの束 | 題字と帯の 2 要素 | 声を出す場所を 1 か所に絞る（S55） |

### 3 案の比較（断片の粒度。完成画面は出さない）

| 案 | 断片 | 優先したこと | 捨てる理由 |
|---|---|---|---|
| A 灯（採用） | 霧の青灰・インク・橙 1 点。太いゴシックの縦組み | 夜明け前の一瞬と、開店時刻 | — |
| B 海図 | 紺地・細い等高線・明朝 | 港町の古さ | 細い線と明朝は小さい画面で弱い。「古さ」を言う店ではない |
| C 焙煎 | 焦茶の面・大きな数字・手描きの線 | 手仕事 | 手触りを狙う様式は偏りの第 1 項に近づく（S54）。理由が弱い |

### 撮影の指示書（写真は撮影前）

- 3 枚: カウンター越しに豆を挽く店主（縦 4:5 と横 3:2 の 2 つの切り抜きを想定）、焙煎機、窓の外の港。窓の光だけで撮る
- 画面幅ごとの切り抜き（art direction）は、`picture` で分ける（S11、S12）。狭い画面では、細部の多い広い構図を、寄った版へ差し替える
- 人物が写る場合の肖像の許諾と、画像の権利は、本 skill の外（確認事項）

### ページの組み立て

```text
+----------------------------------------------+
|                          今朝の一杯 店について 場所と時間 |
|  珈 灯                  ( 光の束が空を横切る )          |  縦の題字（2 列）
|  琲 台              ______/                          |
|     舎            ( 灯 )                              |  帯の縁に昇る灯
|        +-----------------------------------------+   |
|        | 夜明け前の港に、いちばん早く灯る店。      |   |  インクの帯
|        | 6:00 開店                               |   |
+----------------------------------------------+
|  今朝の一杯 | 灯台ブレンド ........ 480        |  縦の見出し + 価格の一覧
|  店について | [写真]  [インクの札: 見出しと 2 文] |  札が写真に重なる
|  場所と時間 | 住所 / 営業 / 休み / 席           |
+----------------------------------------------+
```

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| 題字の大きさ | `min(30vw, 24svh)`（2 列・縦組み） | 本 skill の目安（出典なし）。320・390・1440 px で、画面に収まることを描画で確認した |
| 書体 | 太いゴシック（システム書体のスタック）。太さ 900 と標準 | 本 skill の目安。ページの人格は書体が運ぶ（S55）。外部フォントは使わない。他の OS での字面は未検証 |
| 色の値 | 地 `#e8edf2`、インク `#14233b`、橙 `#f6b73c`（`oklch()` で上書き） | 値は本 skill の目安。明度を揃えて色相を回す配色の根拠は S71（HSL の色相は知覚的に均等でない）と S72（C の 100% は 0.4） |
| 灯と光の束 | 灯は直径 `min(36vw, 30svh)` の半円（64em 以上は `min(52vw, 40svh)`）。束は円錐形のグラデーション。振れは一度（約 2.8 秒）。回転は box の中心が軸なので、位置合わせは `translate` プロパティで行い、途中のフレームで束の頂点が灯にあることを確かめた | 本 skill の目安。自動で 5 秒を超えて続く動きは持たない（S75）。`animation` は `prefers-reduced-motion: no-preference` の中だけに置き、動きを減らす設定では付けない（S76）。そのとき全要素の `animation-name` が `none` であることを測った |
| 題字と灯の配置 | 横並び（題字の右に帯）は 64em 以上。それより狭いと、帯は全幅で題字の下。灯は帯の右寄り（86%）に置き、2 列の題字（最大で幅の 30vw × 2）と重ならない | 本 skill の目安。ダークの 600 px・320 px で、題字が灯に重なって比が 1.45 になった不具合を、この配置で直した |
| 上部のリンク | 無地の面（地の色）の上に置く。15 px の小さい文字は、質感の上に直接載せない | 本 skill の目安 |
| 紙の粒 | SVG の `feTurbulence`、不透明度 0.12（ダークは 0.07） | 本 skill の目安（出典なし）。文字の下地には、最も不利な画素で比を測った（下の表） |
| 操作対象 | 高さ 44 px 以上 | 本 skill の目安。WCAG 2.5.8 は 24 CSS px（本 skill は原文を未照合） |
| 写真 | 4:5（狭）と 3:2（広）の `picture`。幅 480・800・1200・2000。ヒーローには使わない | 切り抜きを変える問題（S11、S12）。幅の値は目安。LCP の目標は 2.5 秒以下（S77） |
| 写真ファイルが無いとき | 濃い青の下地と `width`・`height` で場所を確保。`alt` は下地の上に白で出る（下地の最も明るい側 `#3a4a66` に対して 8.93:1。S74 の計算式） | 本 skill の目安。確認した描画: 写真なしでも崩れない |

非対応時の姿（本 skill の目安。対応状況は版を照合していない。次の宣言を無効にして描画し、`@supports` の分岐を反転して確かめた。ほかの機能の非対応は未確認）:

- `oklch()`: 先に `#` 形式の色を宣言し、`@supports (color: oklch(0% 0 0))` で上書きする（`@supports` は構文への対応の判定で、色域などの表示装置の判定ではない。S111）。非対応では `#` 形式の色になり、見た目はほぼ同じ（コントラスト比も下の表）。`oklch()` の値はすべて sRGB の範囲内で、広色域の画面でも同じ色になる
- `svh`: 先に `vh` で宣言する。非対応では少し高さが変わる程度
- `rotate`・`translate`（個別の変形プロパティ。光の束の位置合わせと振れ）: 非対応では光の束が位置合わせされず、見えなくなる。灯と帯と題字は残る（描画で確認）
- `picture` の `source` の `width`・`height`: 非対応では `img` の比（4:5）で場所を確保し、画像の読み込み後に実際の比になる

コントラスト比（WCAG の相対輝度式。文字 4.5:1、大きい文字 3:1。S74）。変数は `oklch()` を解決した sRGB で計算した:

| 組み合わせ | ライト | ダーク | `#` 形式の色（ライト / ダーク） |
|---|---|---|---|
| インク（文字）/ 地 | 13.00 | 14.54 | 13.37 / 14.65 |
| 補助の文字 / 地 | 7.72 | 9.03 | 8.34 / 9.38 |
| インク / 地平線側の地 | 12.21 | 10.66 | - |
| 帯の文字 / 帯 | 13.00 | 11.02 | - / 11.16 |
| 橙（開店時刻）/ 帯 | 8.74 | 7.41 | 8.82 / 7.36 |
| 罫線 / 地（非文字） | 3.58 | 4.77 | - / 5.00 |

紙の粒と光の束の上の文字は、題字と上部のリンクの文字だけを透明にして撮り、文字の行の領域（字面の周囲を含む）の背後にある全画素のうち最も不利な輝度で測った。幅ごとの最悪値（題字は大きい文字で 3:1、リンクは 4.5:1 が基準）:

| 幅（px） | 1440 | 768 | 600 | 390 | 320 |
|---|---|---|---|---|---|
| ライト | 11.28 | 10.76 | 10.74 | 10.83 | 10.82 |
| ダーク | 9.86 | 7.99 | 8.01 | 8.31 | 8.27 |

## 文言

| 場所 | 文言 | 理由 |
|---|---|---|
| 題字 | 灯台舎珈琲 | 決定済みの店名。縦に大きく |
| 一文 | 夜明け前の港に、いちばん早く灯る店。 | 開店が早いことを、灯の比喩で |
| 時刻 | 6:00 開店 | 数字を大きく、橙で |
| メニュー | 深煎り。苦みの奥に、焦がし砂糖の甘さ。 | 味を 1 行で。形容詞の連続を避ける |
| 店について | 灯台守の家を、珈琲の店に。 | 見出しは 1 文 |

## コード断片

1 ページとして通して見られる形。外部の CDN・スクリプト・フォント・画像ファイル・計測は使わない。写真は `photos/` の 4 ファイル（撮影後に用意する）を参照する。ライブラリは使わない。

```html
<header class="bar">
  <a class="mark" href="/">灯台舎珈琲</a>
  <nav aria-label="主要">
    <a href="#menu">今朝の一杯</a>
    <a href="#about">店について</a>
    <a href="#visit">場所と時間</a>
  </nav>
</header>
<main>
  <section class="hero" aria-labelledby="shop">
    <h1 id="shop"><span>灯台舎</span><span>珈琲</span></h1>
    <div class="sea">
      <p class="lead">夜明け前の港に、<br>いちばん早く灯る店。</p>
      <p class="open"><b>6:00</b> 開店</p>
    </div>
  </section>

  <section id="menu" class="menu" aria-labelledby="menu-h">
    <h2 id="menu-h">今朝の一杯</h2>
    <ul class="list">
      <li><span class="n">灯台ブレンド</span><span class="p">480</span><span class="d">深煎り。苦みの奥に、焦がし砂糖の甘さ。</span></li>
      <li><span class="n">夜明けのラテ</span><span class="p">560</span><span class="d">浅煎りの酸を、温めた牛乳で丸くする。</span></li>
      <li><span class="n">水出しの浅煎り</span><span class="p">520</span><span class="d">前の晩に仕込む。朝いちばんで冷たい。</span></li>
      <li><span class="n">港の塩バターパン</span><span class="p">380</span><span class="d">毎朝、隣の製パン所から届く。</span></li>
    </ul>
    <p class="note">価格は税込。豆の量り売りは 100g から。</p>
  </section>

  <section id="about" class="about" aria-labelledby="about-h">
    <figure class="shot">
      <picture>
        <source media="(min-width: 48em)" width="1200" height="800"
          srcset="photos/counter-wide-1200.jpg 1200w, photos/counter-wide-2000.jpg 2000w" sizes="58vw">
        <img src="photos/counter-narrow-800.jpg" width="800" height="1000"
          srcset="photos/counter-narrow-480.jpg 480w, photos/counter-narrow-800.jpg 800w"
          sizes="90vw" alt="木のカウンターの向こうで、店主が豆を挽いている" loading="lazy" decoding="async">
      </picture>
      <figcaption>開店前のカウンター。窓の向こうが港。</figcaption>
    </figure>
    <div class="story">
      <h2 id="about-h">灯台守の家を、<br>珈琲の店に。</h2>
      <p>港の灯台を守っていた人の住まいを、そのまま店にした。夜が明けきらないうちから、働く人の一杯を焙煎する。</p>
      <p>豆は店の奥で焙煎し、その日の分だけ挽く。</p>
    </div>
  </section>

  <section id="visit" class="visit" aria-labelledby="visit-h">
    <h2 id="visit-h">場所と時間</h2>
    <dl>
      <div><dt>住所</dt><dd>海見町 3-12（架空）</dd></div>
      <div><dt>営業</dt><dd>6:00 から 17:00</dd></div>
      <div><dt>休み</dt><dd>火曜日</dd></div>
      <div><dt>席</dt><dd>カウンター 8、窓際 6</dd></div>
    </dl>
  </section>
</main>
<footer class="foot"><p>灯台舎珈琲（架空の店）</p></footer>
```

```css
:root {
  color-scheme: light dark;
  --paper: #e8edf2; --horizon: #f1e5cb; --slab: #14233b; --on-slab: #e8edf2; --ink: #14233b; --ink-2: #36445c; --lamp: #f6b73c; --beam: rgba(246, 183, 60, 0.30);
  --line: #6d7b91; --gut: clamp(1rem, 5vw, 4rem);
  --grain: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
  --sans: "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans CJK JP", system-ui, sans-serif;
}
@supports (color: oklch(0% 0 0)) {
  :root { --paper: oklch(94% 0.012 245); --horizon: oklch(92% 0.045 85); --slab: oklch(26% 0.05 255); --on-slab: oklch(94% 0.012 245); --ink: oklch(26% 0.05 255); --ink-2: oklch(40% 0.045 255);
          --lamp: oklch(82% 0.16 82); --beam: oklch(82% 0.16 82 / 0.30); --line: oklch(58% 0.04 255); }
}
@media (prefers-color-scheme: dark) {
  :root { --paper: #0f1b2e; --horizon: #26324f; --slab: #1d3052; --on-slab: #e8edf2; --ink: #e8edf2; --ink-2: #b4c0d2; --beam: rgba(246, 183, 60, 0.20); --line: #7d8ba1; }
}
@supports (color: oklch(0% 0 0)) {
  @media (prefers-color-scheme: dark) {
    :root { --paper: oklch(22% 0.045 255); --horizon: oklch(32% 0.05 260); --slab: oklch(31% 0.06 258); --on-slab: oklch(94% 0.012 245); --ink: oklch(94% 0.012 245); --ink-2: oklch(79% 0.03 250);
            --beam: oklch(82% 0.16 82 / 0.20); --line: oklch(62% 0.04 255); }
  }
}

* { box-sizing: border-box; }
body { margin: 0; background: var(--paper); color: var(--ink); font-family: var(--sans); font-size: 1rem; line-height: 1.8; }
a { color: inherit; }
:focus-visible { outline: 3px solid var(--ink); outline-offset: 3px; }

.bar { position: absolute; z-index: 3; inset: 0 0 auto 0; display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center;
       gap: 0 1rem; padding: 0.5rem var(--gut); }
.mark { display: none; margin-right: auto; font-weight: 800; text-decoration: none; min-height: 44px; align-items: center; }
.bar nav { display: flex; flex-wrap: wrap; background: var(--paper); }
.bar nav a { min-height: 44px; display: inline-flex; align-items: center; padding: 0 0.5rem; font-size: 0.9375rem; }
@media (min-width: 48em) { .mark { display: inline-flex; } .bar nav a { padding: 0 0.6rem; } }

/* 空（霧の青）と海（インクの帯）。灯は海の縁に昇り、光の束が空を横切る */
.hero { position: relative; isolation: isolate; overflow: hidden; min-height: 100vh; min-height: 100svh; display: grid;
        grid-template-columns: auto 1fr; grid-template-rows: 1fr auto; column-gap: clamp(1rem, 4vw, 4rem);
        padding: 7rem var(--gut) 0; background: linear-gradient(180deg, var(--paper) 45%, var(--horizon)); }
.hero::after { content: ""; position: absolute; inset: 0; z-index: -1; background-image: var(--grain);
               opacity: 0.12; mix-blend-mode: multiply; pointer-events: none; }
@media (prefers-color-scheme: dark) { .hero::after { mix-blend-mode: screen; opacity: 0.07; } }

h1 { position: relative; z-index: 1; grid-row: 1; margin: 0; writing-mode: vertical-rl; font-size: 24vw; font-size: min(30vw, 24svh);
     line-height: 1.04; font-weight: 900; letter-spacing: 0.02em; }
h1 span { display: block; }

.sea { position: relative; grid-column: 1 / -1; grid-row: 2; margin-inline: calc(var(--gut) * -1); padding: 2rem var(--gut) 2.5rem;
       background: var(--slab); color: var(--on-slab); }
.lead { margin: 0 0 0.75rem; font-size: clamp(1.125rem, 3.4vw, 1.75rem); font-weight: 700; line-height: 1.6; }
.open { margin: 0; color: var(--lamp); }
.open b { font-size: 2.25rem; font-weight: 800; font-variant-numeric: tabular-nums; margin-right: 0.25em; }
.sea::before, .sea::after { content: ""; position: absolute; left: 86%; top: 0; pointer-events: none; }
.sea::before { z-index: -1; width: 36vw; width: min(36vw, 30svh); aspect-ratio: 1; transform: translate(-50%, -50%); border-radius: 50%;
               background: radial-gradient(circle, var(--lamp) 0 56%, rgba(246, 183, 60, 0.35) 57% 76%, transparent 77%);
               clip-path: inset(0 0 50% 0); }
.sea::after { z-index: -1; width: 300vmax; height: 300vmax; translate: -50% -50%;
              background: conic-gradient(from 300deg, transparent 0deg, var(--beam) 12deg, var(--beam) 18deg, transparent 38deg);
              }
/* 光の束の振れは一度だけ。動きを減らす設定のときは付けない（最終の位置で静止する）。回転は box の中心が軸なので、位置合わせは translate プロパティで行う */
@keyframes sweep { from { rotate: 28deg; opacity: 0; } to { rotate: 0deg; opacity: 1; } }
@media (prefers-reduced-motion: no-preference) {
  .sea::after { animation: sweep 2.8s cubic-bezier(0.2, 0.7, 0.2, 1) 0.2s both; }
}
/* 題字と灯が重ならないよう、横に並べるのは 64em 以上。それより狭いと帯は全幅で題字の下 */
@media (min-width: 64em) {
  .sea { grid-column: 2; margin-inline: 0 calc(var(--gut) * -1); align-self: end; }
  .hero { padding-top: 5.5rem; }
  h1 { grid-row: 1 / 3; }
  .sea::before, .sea::after { left: 72%; }
  .sea::before { width: min(52vw, 40svh); }
}

section:not(.hero) { padding: clamp(3.5rem, 9vw, 7rem) var(--gut); }
h2 { margin: 0 0 1.5rem; font-size: clamp(1.5rem, 4vw, 2.25rem); line-height: 1.35; font-weight: 800; }
.menu, .visit { display: grid; gap: 1.5rem 3rem; max-width: 60rem; margin-inline: auto; }
.note { grid-column: 1 / -1; margin: 1rem 0 0; color: var(--ink-2); font-size: 0.875rem; }
@media (min-width: 48em) {
  .menu, .visit { grid-template-columns: 8rem 1fr; }
  .note { grid-column: 2; }
  .menu h2, .visit h2 { writing-mode: vertical-rl; font-size: 2.5rem; line-height: 1.2; margin: 0; }
}
.list { list-style: none; margin: 0; padding: 0; }
.list li { display: grid; grid-template-columns: auto 1fr auto; column-gap: 0.75rem; align-items: baseline;
           padding: 1rem 0; border-top: 1px solid var(--line); }
.n { font-weight: 800; font-size: 1.1875rem; }
.p { grid-column: 3; font-variant-numeric: tabular-nums; font-weight: 700; }
.p::before { content: "¥"; font-size: 0.8em; margin-right: 0.15em; }
.d { grid-column: 1 / -1; color: var(--ink-2); font-size: 0.9375rem; }
.about { display: grid; grid-template-columns: minmax(0, 1fr); gap: 2rem 1rem; align-items: start; }
.shot { grid-column: 1 / -1; grid-row: 1; margin: 0; }
.shot img { display: block; width: 100%; height: auto; background: linear-gradient(160deg, #3a4a66, #1c2a44); color: #ffffff; }
figcaption { margin-top: 0.5rem; font-size: 0.875rem; color: var(--ink-2); }
.story { grid-column: 1 / -1; padding: 1.5rem; background: var(--slab); color: var(--on-slab); }
.story h2 { margin-top: 0; }
.story p { margin: 0 0 1em; }
@media (min-width: 48em) {
  .about { grid-template-columns: repeat(12, minmax(0, 1fr)); }
  .shot { grid-column: 1 / 9; }
  .story { grid-column: 7 / -1; grid-row: 1; margin: 22% 0 0 -3rem; padding: 2.5rem; position: relative; }
}

.visit dl { margin: 0; }
.visit dl div { display: grid; grid-template-columns: 5rem 1fr; padding: 0.75rem 0; border-top: 1px solid var(--line); }
dt { color: var(--ink-2); } dd { margin: 0; font-weight: 700; }
.foot { padding: 2rem var(--gut); border-top: 1px solid var(--line); font-size: 0.875rem; color: var(--ink-2); }
.foot p { margin: 0; }
```

`<head>` には、`<meta charset="utf-8">`、`<meta name="viewport" content="width=device-width, initial-scale=1">`、`<html lang="ja">` を置く前提である。

描画して確かめた条件: 1440・768・600・390・320 px、ライトとダーク、動きを減らす設定（全要素の `animation-name` が `none`）、写真ファイルあり / なし、光の束の途中のフレーム、新しい CSS の非対応の模擬。どの幅でも要素の右端は画面内に収まった; 320 px・文字 200%（ルートの `font-size` を 2 倍）と 320 x 256 px（1280 px の 400% 拡大に相当）でも、横にはみ出さず、`overflow: hidden` の祖先から切れる要素も無いことを測った。キーボードの Tab でフォーカスの枠が見えた。

## 初見検証

初めて見る人に、説明なしで答えてもらう設計である（実験の結果ではない）。上の 3 つが本題で、最後の 1 つは補助。

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 「夜明け前から開く珈琲店」 | 縦の題字と、帯の一文・時刻 |
| 何を操作できるか | 上の 3 つのリンク | 常時見えるリンク |
| どう操作するか | タップして、同じページの該当箇所へ | 下線つきのリンク・44 px 以上の面 |
| この見た目から何の店と思ったか | 港の珈琲店（夜明け・灯・海） | 目が最初に行った所（題字か灯か） |

## 点検

- 方向性のメモに、形容詞だけの項目が無い。既定の案との差を、変えた理由つきで言える
- 写真ファイルが無くても崩れない（`alt` が下地の上で読める）。ヒーローは写真を使わない
- 質感の上の文字は、最も不利な画素で測って基準以上（上の表）。小さい文字（上部のリンク）は無地の面に置き、質感は文字の背面にある
- 動きは 1 か所で、一度だけ。動きを減らす設定では `animation` が付かない（全要素 `none` を測った）
- 320 px・600 px・768 px で、題字と帯の文字が欠けず、灯と重ならず、横にはみ出さない
- 320 px・文字 200%（ルートの `font-size` を 2 倍）で横にはみ出さない。ヘッダーのリンクの行は折り返す（`flex-wrap`）。「店について」の 12 列の格子は、狭い画面では 1 列にした
- 色の数と書体の数を絞り、声を出す場所が題字と灯の 2 つだけである
- 推測の明示: 来店・予約への効果はこの例からは分からない。実際の写真・店の営業情報で見え方は変わる

## この例の出典

S03、S11、S12、S13、S15、S17、S51、S54、S55、S60、S61、S71、S72、S74、S75、S76、S77、S111。台帳は `../references/sources.md`。

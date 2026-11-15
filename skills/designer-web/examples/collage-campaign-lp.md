# 例: コラージュ調のキャンペーン LP（傾向を日付つきで読んで使う）

「手作り感のあるコラージュ風で」という依頼を、傾向を日付と出どころつきで読み、秩序の土台を残して作る例。題材は架空の飲料で、実在の商品・ブランドの模倣は含まない。流行の様式を採るかどうかを、被写体から判断するときに開く。画像ファイルは使わず、断片はすべて SVG と CSS で描く。

## 依頼

- 商品: 期間限定の飲料「ひなたソーダ」（架空）。ゆず味の炭酸。キャンペーンは 6 週間
- ページ: キャンペーンの LP（スマートフォン中心）
- 依頼文（架空）: 「手作り感のあるコラージュ風で、SNS で映えるように」。若年層向け
- 範囲外: 説明不要の設計・機能の紹介（導入されていれば designer-apple。本例は機能の説明でなく、世界観と空気づくり）、広告の法令・表示の判断

### 根拠の範囲（先に読む）

- 出典のある事実: コラージュは、ステッカー・破れた質感・切り抜きの写真・手書き風の書体といった要素の傾向として、Figma（デザインツールの提供会社）の 2026 年版の記事に挙がる（S37）。Shopify の傾向記事は、構造化した寄せ集めを、精密で整理され、丁寧に選ばれたものと説明する（S36）。手触り・アナログが好まれるという予測は Adobe の記事（S39）。理由として、整いすぎた画像は AI 製と連想されるという説が紹介される（S42。記者が理論として述べるもので、実証ではない。区分 R）。いずれも予測で、普及度は測れていない
- 英語の原文（S37）: "Collage Web design brings scrapbook-style creativity into digital experiences. Think sticker graphics, torn textures, cutout photos, and expressive, hand-drawn fonts." 日本語は要旨で、本人の発言ではない
- 本 skill の目安（出典なし）: 紙の粒・破れ縁・ハーフトーン・傾きの角度・不透明度の値。ステッカーの白い縁の作り方。ベンダーの予測は売る側の主張で、採用率の統計ではない
- 未検証: Safari・Firefox での見え。`rotate`・`mask-image`・コンテナークエリの単位のブラウザ対応状況（版は未照合）。実在の素材（スキャン・撮影）での見え

## 目的の一文

ひなたソーダが 6 週間だけのゆず味の炭酸だと 3 秒で伝わり、取扱店をさがす 1 手に進める。

## 削るもの

| 削るもの | 理由 |
|---|---|
| 手描き風の書体で本文を組むこと | 読む文字の可読性が落ちる（S74）。手描き風にするのは断片の一部だけ |
| 質感の上の小さい文字 | 説明・ステッカー・手順の文字は無地の面（藍の札・桃色・各色の面）に載せる。大きい題字だけが粒の上にあり、粒は文字の背面に置いて、最も不利な画素で測る。写真・質感の上の文字は低コントラストになりやすい（S46。C） |
| 画像ファイルの切り抜きを 8 点以上 | 6 週間の制作量と重さ（S77）に見合わない。断片は SVG と CSS で描く |
| 動き続ける背景のループ | 自動で 5 秒を超えて続く動きには止める手段が要る（S75）。動きは読み込み時の一度だけ |
| 汎用のステッカー素材の寄せ集め | 被写体（ゆず・泡・氷・瓶）から断片を選ぶ。汎用素材は定型になる（本 skill の推測） |

## 構成

### 傾向を読む（`../references/trends.md` の行 2・4）

| 観点 | 読んだこと |
|---|---|
| 出どころ | ベンダーの予測（S37、S36、S39）。普及度は測れていない |
| 時点 | 2026-11-15 に取得した 2025 年末〜2026 年の記事 |
| 批判・飽き | 出典のある批判は取得していない。本 skill の推測: 断片が増えるほど読み順が壊れ、素材で重くなる。AI への反動という理由（S42）を採るなら、一斉に採れば次の定型になりうる |
| 採る理由 | 6 週間だけの空気づくりで、断片（ゆず・泡・瓶・ステッカー）を飲料の素材から選べる。若年層に、整いすぎない見た目が合うかは、この例からは分からない（推測） |
| 採らない部分 | 手描き風の書体での本文組み、質感の上の文字 |

### 方向性のメモ（作る前に書いた文章）

- 被写体・目的・見る人: ゆず味の期間限定ソーダ。6 週間のキャンペーンで、若年層が一目で味と期間を分かる
- 言葉: ぱちっ、ふわっ、手でちぎった、6 週間
- 色: ゆず黄・ソーダの水色・桃色・インクの藍、地は白に近い。差し色は断片ごとに 1 色
- 書体: 丸ゴシックと太いゴシック。題字だけ極太
- 構図: 秩序の土台は「盤」（横幅の割合で位置を決める座標）。断片は ±2.5°〜10° 傾けるが、題字の札・瓶・札の読み順は崩さない
- 画像と質感: 断片は SVG と CSS（ゆずの輪切り・瓶・ハーフトーン・テープ・ステッカーの白い縁）。紙の粒は題字の札にだけ、文字の背面に弱く。小さい文字は無地の面に載せる
- 参照の扱い: 傾向から抜くのは「秩序の土台の上に断片を重ねる」判断。見た目は写さない

### ページの組み立て

```text
+----------------------------------------+
| ひなた                           取扱店 |
| +-----------------------------+  (6週間)|  盤（4:5 / 広い画面は 16:10）
| | ひなた                      |  [瓶]  |  黄の札（破れ縁）に題字
| | ソーダ                      |        |
| +-----------------------------+        |
|  (ゆず)   (ゆず)   [ ゆず 100% 果汁… ]  |  藍の札に 2 行
+----------------------------------------+
| おいしい飲み方  [1 冷やす][2 氷][3 そそぐ]|  3 枚の札（色違い・傾き違い）
| 5 月 12 日から 6 月 22 日まで  [取扱店をさがす] |
+----------------------------------------+
```

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| 色 | ゆず黄 `#ffd23a`、水色 `#35c3d8`、桃色 `#ff6b8b`、藍 `#1d1b3a`（`oklch()` で上書き）、地 `#fbfbf8` | 本 skill の目安。`oklch()` の値は、すべて sRGB の範囲に収めた。桃色は彩度を 0.17 に抑えた（0.19 では赤の成分が範囲を超え、広色域の画面と標準の画面で色が変わる）。広色域の色を使うなら、sRGB の色を既定にして、`@media (color-gamut: p3)` の中で差し替える（S110。本例は使わない） |
| 傾き | 札 -2.5°・+1.5°・-1°、ステッカー +10°、ゆず -12°〜+40° | 本 skill の目安 |
| 盤の比 | 狭い画面は 4:4.7、広い画面（48em 以上）は 16:10。狭い画面では、藍の札を盤の外（下）に通常の流れで置き、盤の下端に重ねる（盤は `overflow: hidden` のため、文字を拡大しても札の文字が切れない）。広い画面では札は盤の中に置く。瓶は幅 28%、ステッカーは右上で、瓶の栓とステッカー・札と瓶が重ならない配置にした。藍の札には水色の段差の影を付け、ダークでも地から分ける | 本 skill の目安。320・390・768 px の描画で、重なりを確かめた |
| 手順の札 | 56em 以上で 3 列、それより狭いと 1 列 | 本 skill の目安。768 px で 3 枚目が孤立した不具合を直した |
| 紙の粒 | 題字の札にだけ、不透明度 0.12 | 本 skill の目安（出典なし） |
| 動き | 読み込み時に断片が 0.45 秒で現れる（一度だけ）。動きを減らす設定では付けない | 本 skill の目安。自動で 5 秒を超えて続く動きは無い（S75）。動きを減らす設定（S76） |
| 操作対象 | ボタンの高さ 52 px、リンクは 44 px 以上 | 本 skill の目安 |
| 重さ | 画像ファイル 0。SVG と CSS のみ | 本 skill の目安。LCP の目標は 2.5 秒以下（S77）。実測は範囲外 |

非対応時の姿（本 skill の目安。対応状況は版を照合していない。次の宣言を無効にして描画し、`@supports` の分岐を反転して確かめた。ほかの機能の非対応は未確認）:

- `oklch()`: 先に `#` 形式の色を宣言し、`@supports` で上書きする（`@supports` は構文への対応の判定で、色域などの表示装置の判定ではない。S111）。非対応では `#` 形式の色になる（水色が少し濃く見える）
- コンテナークエリの単位（`cqi`）: 先に `vw` の値で宣言する。非対応では `vw`（題字は上限つき）に落ち、広い画面では札の説明文などが相対的に小さく見える（描画で確認。題字は上限を置いたので、札とテープに収まる）
- `rotate`: 非対応では傾かず、位置は変わらない
- `mask-image`: 非対応ではハーフトーンの端が薄くならず、四角のまま出る
- `clip-path`: 非対応では破れ縁が直線になる
- `translate`（ボタンの押下の動き）: 非対応では動かず、影だけが変わる。この動きはホバーできる環境（`@media (hover: hover)`）だけに付ける（ポインタの種類は環境の判定で、`@supports` ではない）

コントラスト比（WCAG の相対輝度式。文字 4.5:1。S74。`oklch()` を解決した sRGB で計算）:

| 組み合わせ | 比 |
|---|---|
| 藍の文字 / ゆず黄（題字の札・1 の札） | 11.54（`#` 形式の色: 11.44） |
| 藍の文字 / 水色（2 の札） | 9.26（7.83） |
| 藍の文字 / 桃色（3 の札・ステッカー） | 6.17（6.08） |
| 白の文字 / 藍（藍の札） | 16.53 |
| ゆず黄の文字 / 藍（ボタン） | 11.54 |
| 本文 / 地（ライト・ダーク） | 15.95・16.43 |
| 補助の文字 / 地（ライト・ダーク） | 8.41・9.64 |

題字の札の上（紙の粒を含む）は、題字の文字だけを透明にして撮り、文字の行の領域（字面の周囲を含む）の背後にある全画素のうち最も不利な輝度で測った（大きい文字は 3:1 が基準）: 1440 px で 10.96、768 px で 11.01、600 px で 11.00、390 px で 11.00、320 px で 11.02。ダークでも札は同じ色で、同じ値（10.96〜11.02）。フォーカスの枠は本文色（地に対して 15.95・16.43）。札の説明文と断片の文字は、下限（説明文 14 px、ステッカー内 12 px）を `max()` で置き、320 px でも 14 px と 12 px のままであることを計算値で確かめた。

## 文言

| 場所 | 文言 | 理由 |
|---|---|---|
| 題字 | ひなたソーダ | 商品名 |
| 札 | ゆず 100% 果汁のソーダ。ぱちっとはじけて、ふわっとゆず。 | 味の擬音を 2 つ。誇張の語を避ける |
| ステッカー | 6 週間だけ | 期間を数字で |
| 飲み方 | よく冷やす / 氷をたっぷり入れる / ゆっくりそそぐ | 動詞で短く |
| 期間 | 5 月 12 日から 6 月 22 日まで | 6 週間（42 日）。日付は架空 |
| 注記 | ひなたソーダ（架空の商品）。画像はイメージ。 | 表示の判断は本 skill の外 |

## コード断片

1 ページとして通して見られる形。外部の CDN・スクリプト・フォント・画像ファイル・計測は使わない。断片はすべて SVG と CSS。ライブラリは使わない。

`<head>` には、`<meta charset="utf-8">`、`<meta name="viewport" content="width=device-width, initial-scale=1">`、`<html lang="ja">` を置く前提である。

```html
<svg class="sprite" width="0" height="0" aria-hidden="true" focusable="false">
  <symbol id="yuzu" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="48" fill="#ffd23a"/><circle cx="50" cy="50" r="41" fill="#fff6c9"/>
    <g stroke="#ffd23a" stroke-width="3" stroke-linecap="round">
      <path d="M50 50V12M50 50l27-27M50 50h38M50 50l27 27M50 50v38M50 50L23 77M50 50H12M50 50L23 23"/>
    </g>
    <circle cx="50" cy="50" r="5" fill="#ffd23a"/>
  </symbol>
</svg>

<header class="bar"><a class="logo" href="/">ひなた</a><a class="shop-link" href="#shops">取扱店</a></header>
<main>
  <section class="hero" aria-labelledby="t">
    <div class="stage">
    <div class="board">
      <div class="dots" aria-hidden="true"></div>
      <div class="slab">
        <i class="tape t1" aria-hidden="true"></i><i class="tape t2" aria-hidden="true"></i>
        <h1 id="t"><span>ひなた</span><span>ソーダ</span></h1>
      </div>
      <svg class="bottle" viewBox="0 0 120 300" role="img" aria-label="ゆずソーダの瓶のイラスト">
        <rect x="43" y="0" width="34" height="18" rx="4" fill="#1d1b3a"/>
        <path d="M46 16h28v28c0 12 26 24 26 56v182c0 12-8 18-20 18H40c-12 0-20-6-20-18V100c0-32 26-44 26-56z" fill="#ffd23a"/>
        <path d="M30 120h60v120H30z" fill="#fbfbf8"/>
        <circle cx="60" cy="180" r="22" fill="#35c3d8"/><use href="#yuzu" x="40" y="160" width="40" height="40"/>
        <circle cx="38" cy="70" r="4" fill="#fff"/><circle cx="52" cy="52" r="3" fill="#fff"/><circle cx="46" cy="262" r="5" fill="#fff"/>
      </svg>
      <svg class="yz y1" aria-hidden="true"><use href="#yuzu"/></svg>
      <svg class="yz y2" aria-hidden="true"><use href="#yuzu"/></svg>
      <svg class="yz y3" aria-hidden="true"><use href="#yuzu"/></svg>
      <p class="badge"><b>6</b>週間<br>だけ</p>
    </div>
    <p class="plate">ゆず 100% 果汁のソーダ。<br>ぱちっとはじけて、ふわっとゆず。</p>
    </div>
  </section>

  <section class="steps" aria-labelledby="s">
    <h2 id="s">おいしい飲み方</h2>
    <ol>
      <li class="c1"><b>1</b><span>よく冷やす</span></li>
      <li class="c2"><b>2</b><span>氷をたっぷり入れる</span></li>
      <li class="c3"><b>3</b><span>ゆっくりそそぐ</span></li>
    </ol>
  </section>

  <section id="shops" class="cta" aria-labelledby="c">
    <h2 id="c">5 月 12 日から 6 月 22 日まで</h2>
    <p>コンビニとスーパーで。なくなり次第終了。</p>
    <p><a class="btn" href="/shops">取扱店をさがす</a></p>
  </section>
</main>
<footer class="foot"><p>ひなたソーダ（架空の商品）。画像はイメージ。</p></footer>
```

```css
:root {
  color-scheme: light dark;
  --paper: #fbfbf8; --text: #1d1b3a; --text-2: #4a4866;
  --ink: #1d1b3a; --yuzu: #ffd23a; --aqua: #35c3d8; --pink: #ff6b8b; --white: #ffffff;
  --grain: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E");
  --round: "Hiragino Maru Gothic ProN", "Hiragino Sans", "Yu Gothic", "Noto Sans CJK JP", system-ui, sans-serif;
  --heavy: "Hiragino Sans", "Yu Gothic", "Noto Sans CJK JP", system-ui, sans-serif;
  --gut: clamp(1rem, 4vw, 3rem);
}
@supports (color: oklch(0% 0 0)) {
  :root { --yuzu: oklch(88% 0.17 95); --aqua: oklch(80% 0.12 205); --pink: oklch(72% 0.17 10); }
}
@media (prefers-color-scheme: dark) { :root { --paper: #15132b; --text: #f4f3fb; --text-2: #bdbad8; } }

* { box-sizing: border-box; }
body { margin: 0; background: var(--paper); color: var(--text); font-family: var(--round); line-height: 1.7; }
a { color: inherit; }
:focus-visible { outline: 3px solid var(--text); outline-offset: 3px; }
.bar { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 0 1rem; padding: 0.25rem var(--gut); }
.bar a { display: inline-flex; align-items: center; min-height: 44px; font-weight: 800; }
.logo { text-decoration: none; font-size: 1.25rem; }

/* 構造は 12 列相当の割合の座標。断片の位置と傾きは変数で決め、文字は無地の面にだけ載せる */
.hero { padding: 0.5rem var(--gut) 3rem; }
.sprite { position: absolute; }
.stage { position: relative; container-type: inline-size; max-width: 72rem; margin-inline: auto; }
.board { position: relative; aspect-ratio: 4 / 4.7; overflow: hidden; }
.board > * { position: absolute; margin: 0; }
.dots { left: 0; bottom: 0; width: 70%; height: 39%;
        background: radial-gradient(circle, var(--aqua) 38%, transparent 41%) 0 0 / 0.9rem 0.9rem;
        mask-image: linear-gradient(60deg, #000 30%, transparent 95%); }
.slab { left: 2%; top: 3%; width: 96%; height: 38%; rotate: -2.5deg; background: var(--yuzu); color: var(--ink);
        clip-path: polygon(0 2%, 8% 0, 17% 3%, 29% 0, 41% 2%, 55% 0, 68% 3%, 82% 0, 93% 2%, 100% 0, 100% 96%, 91% 100%,
                           78% 97%, 64% 100%, 50% 96%, 37% 100%, 24% 97%, 11% 100%, 0 96%); }
.slab::after { content: ""; position: absolute; inset: 0; z-index: -1; background-image: var(--grain); opacity: 0.12; mix-blend-mode: multiply; pointer-events: none; }
h1 { margin: 0; position: absolute; inset: 0; display: grid; align-content: center; padding-left: 6%;
     font-family: var(--heavy); font-size: 15vw; font-size: 17cqi; line-height: 1.02; font-weight: 900; letter-spacing: 0.01em; }
h1 span { display: block; }
.tape { position: absolute; width: 22%; height: 11%; background: rgba(255, 255, 255, 0.55); z-index: 1; }
.t1 { left: -3%; top: 2%; rotate: -35deg; } .t2 { right: -3%; bottom: 4%; rotate: -35deg; }
.bottle { left: 60%; top: 34%; width: 28%; height: auto; rotate: 7deg;
          filter: drop-shadow(3px 0 0 #fff) drop-shadow(-3px 0 0 #fff) drop-shadow(0 3px 0 #fff) drop-shadow(0 -3px 0 #fff)
                  drop-shadow(5px 8px 0 rgba(0, 0, 0, 0.2)); }
.yz { filter: drop-shadow(2px 0 0 #fff) drop-shadow(-2px 0 0 #fff) drop-shadow(0 2px 0 #fff) drop-shadow(0 -2px 0 #fff)
              drop-shadow(4px 6px 0 rgba(0, 0, 0, 0.2)); aspect-ratio: 1; height: auto; }
.y1 { left: 6%; top: 46%; width: 30%; rotate: -12deg; }
.y2 { left: 36%; top: 71%; width: 20%; rotate: 20deg; }
.y3 { left: 86%; top: 59%; width: 11%; rotate: 40deg; }
.badge { left: 72%; top: 3%; z-index: 2; width: 22%; aspect-ratio: 1; display: grid; place-content: center; text-align: center;
         border-radius: 50%; background: var(--pink); color: var(--ink); rotate: 10deg; font-weight: 800; font-size: 0.75rem; font-size: max(0.75rem, 3.6cqi); line-height: 1.2; }
.badge b { font-size: 10vw; font-size: 11cqi; line-height: 1; }
.plate { position: relative; margin: -1.5rem 4% 0; padding: 0.9rem 1rem; rotate: 1.5deg; background: var(--ink); color: #fff; box-shadow: 4px 5px 0 var(--aqua);
         font-weight: 700; font-size: 0.875rem; font-size: max(0.875rem, 3.7cqi); line-height: 1.6; }
@media (min-width: 48em) {
  .board { aspect-ratio: 16 / 10; }
  .slab { left: 2%; top: 7%; width: 56%; height: 52%; }
  h1 { font-size: min(12vw, 8.25rem); font-size: 11.5cqi; }
  .bottle { left: 60%; top: 6%; width: 17%; }
  .y1 { left: 44%; top: 52%; width: 15%; } .y2 { left: 76%; top: 40%; width: 14%; } .y3 { left: 71%; top: 76%; width: 9%; }
  .badge { left: 84%; top: 5%; width: 13%; font-size: 0.75rem; font-size: max(0.75rem, 1.9cqi); } .badge b { font-size: 4.4vw; font-size: 6.4cqi; }
  .plate { position: absolute; left: 5%; top: 66%; width: 40%; margin: 0; font-size: 0.875rem; font-size: max(0.875rem, 1.9cqi); padding: 1rem 1.25rem; }
  .dots { width: 48%; height: 40%; }
}
@keyframes pop { from { scale: 0.85; opacity: 0; } to { scale: 1; opacity: 1; } }
@media (prefers-reduced-motion: no-preference) {
  .board > :not(.dots), .plate { animation: pop 0.45s ease-out both; }
  .bottle { animation-delay: 0.15s; } .badge { animation-delay: 0.3s; } .plate { animation-delay: 0.4s; }
}

.steps, .cta { max-width: 72rem; margin-inline: auto; padding: clamp(2.5rem, 7vw, 5rem) var(--gut); }
h2 { margin: 0 0 1.5rem; font-family: var(--heavy); font-size: clamp(1.5rem, 4.4vw, 2.5rem); line-height: 1.35; font-weight: 900; }
.steps ol { list-style: none; margin: 0; padding: 0; display: grid; gap: 1.25rem; grid-template-columns: 1fr; }
@media (min-width: 56em) { .steps ol { grid-template-columns: repeat(3, 1fr); } }
.steps li { display: flex; align-items: center; gap: 0.75rem; padding: 1.25rem; color: var(--ink); font-weight: 800; font-size: 1.1875rem; }
.steps b { display: grid; place-items: center; width: 2.5rem; height: 2.5rem; border-radius: 50%; background: var(--white); font-size: 1.25rem; }
.c1 { background: var(--yuzu); rotate: -2deg; } .c2 { background: var(--aqua); rotate: 1.5deg; } .c3 { background: var(--pink); rotate: -1deg; }
.cta p { margin: 0 0 1.25rem; }
.btn { display: inline-flex; align-items: center; min-height: 52px; padding: 0 1.75rem; background: var(--ink); color: var(--yuzu);
       font-weight: 900; text-decoration: none; border-radius: 0.5rem; box-shadow: 4px 5px 0 var(--aqua); }
@media (hover: hover) { .btn:hover { translate: -1px -1px; box-shadow: 5px 6px 0 var(--aqua); } }
.foot { padding: 1.5rem var(--gut) 2.5rem; color: var(--text-2); font-size: 0.875rem; }
.foot p { margin: 0; }
@media (hover: hover) and (prefers-reduced-motion: reduce) { .btn:hover { translate: none; } }
```

描画して確かめた条件: 1440・768・600・390・320 px、ライトとダーク、動きを減らす設定（全要素の `animation-name` が `none`）、新しい CSS の非対応の模擬。どの幅でも要素の右端は画面内に収まった; 320 px・文字 200%（ルートの `font-size` を 2 倍）と 320 x 256 px（1280 px の 400% 拡大に相当）でも、横にはみ出さず、`overflow: hidden` の祖先から切れる要素も無いことを測った。Tab でフォーカスの枠が見えた。

## 初見検証

初めて見る人に、説明なしで答えてもらう設計である（実験の結果ではない）。上の 3 つが本題で、最後の 1 つは補助。

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 「ひなたソーダ。6 週間だけのゆず味」 | 題字の札とステッカー |
| 何を操作できるか | 「取扱店をさがす」ボタン | 藍のボタン 1 つ |
| どう操作するか | タップで取扱店の一覧へ | 影つきのボタン・52 px の高さ |
| この見た目から何と思ったか | 期間限定のゆず炭酸 | 瓶とゆずの輪切りに目が行ったか |

## 点検

- 傾向に日付・出どころ・批判を添え、被写体（ゆず・泡・瓶）から採る理由を言えた
- 秩序の土台（盤の座標）があり、読み順（題字 → 説明 → 飲み方 → 期間）が崩れていない
- 320 px・文字 200%（ルートの `font-size` を 2 倍）で横にはみ出さず、盤の外へ切れる要素が無い。ヘッダーの行は折り返す（`flex-wrap`）
- 小さい文字は無地の面に載っている。質感の上の大きい題字は、最も不利な画素で測って基準以上（上の表）。粒は文字の背面にある
- 動きは読み込み時の一度だけで、動きを減らす設定で止まる
- 320 px で、題字・札・ステッカーが欠けず、横にはみ出さない
- 推測の明示: 若年層の反応・SNS での広がりはこの例からは分からない。傾向の普及度も測れていない。実際の素材（スキャン・撮影）に変えるときは、重さと可読性を測り直す

## この例の出典

S36、S37、S39、S42、S46、S55、S74、S75、S76、S77、S110、S111。台帳は `../references/sources.md`。

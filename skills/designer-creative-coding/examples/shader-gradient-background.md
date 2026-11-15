# 例: 告知ページのヒーロー背景を、シェーダーのグラデーションにする（試飲会の告知）

画像素材が無い告知ページで、ヒーローの背景を、フラグメントシェーダー 1 本のグラデーションで作る例。題材は架空の茶葉の定期便で、実在の製品・企業の見た目は模倣しない。扱うのは、描画の予算・止める条件・WebGL が使えないときの代替・動きを減らす設定での静止で、LP の構成や文言（designer-apple の `web-landing-page.md`）、色や書体の方向性（導入されていれば designer-web）は扱わない。背景に動く WebGL を入れるかを決めるとき、実装の前に開く。

## 依頼

- 媒体: 架空の茶葉の定期便「Moss & Tide」の試飲会の告知ページ。ヒーロー（ページ最上部の領域）の背景
- 依頼文（架空）: 「春の試飲会の告知ページを作った。ヒーローの背景を、ゆっくり揺れる緑と青のグラデーションにしたい。画像素材は無い」
- 読み手: 定期便の会員と、紹介で初めて来る人。画面はスマートフォンが多いと想定する（本 skill の想定。出典なし）
- 現状: 単色の背景。日時と申し込みのボタンは HTML で既にある

### 根拠の範囲（先に読む）

- 出典のある事実: 手続き的な図では、要素に色のばらつきを足すとよいと述べる文がある（S142）。英語の原文（S142）: "When doing procedural graphics it's always a good idea to add color variation to the elements of the image." 日本語は要旨で、本人の発言ではない。制作会社は、描画が間に合わない古い端末では後処理を自動で切っていた（S114、2016 年の記事）
- 動きの規則: 自動で始まり 5 秒を超えて続き、ほかの内容と並行する動きには、一時停止・停止・非表示の手段が要る（S121）。動きを減らす OS 設定は `prefers-reduced-motion` で検出でき（S122）、代わりの動きを出してもよい（S127）。メディアクエリの括弧は必須（S149）
- 本 skill の目安（出典なし）: 解像度の倍率・DPR の上限・色・動きの速さ・劣化の順序。フレーム時間と実機の性能は、この例では測っていない（未検証）
- 範囲外: シェーダーの手法の優劣。本例の式は、正弦波を重ねただけの自作である。ノイズ関数は使っていない。Neve の背景は simplex ノイズのシェーダーで作られた（S116）。ノイズを使うなら、自作するか、コードの利用条件を確認する。コード断片は MIT でも、シェーダーアートは許諾が要ると述べるサイトがある（S141）。The Book of Shaders は全権利留保で、本文の引用・翻訳ができない（S143）。本 skill は、どちらのコードも転載しない

## 目的の一文

試飲会の日時と申し込み先を読んで申し込めること。背景の動きは、茶葉と水辺の雰囲気を足すだけで、読むことを邪魔しない。

## 削るもの

| 削るもの | 理由 |
|---|---|
| 画像・動画の背景 | 素材が無い。素材の工程は期間と人手が要る（S164、S85）。この依頼は、式だけで足りる範囲に収める |
| 粒子・マウス追従 | 背景は雰囲気だけを足す。ホバー前提の演出は、タッチで成り立たない（S27） |
| ノイズ関数・ポストプロセス | 式を少なくして、端末による差を小さくする（本 skill の整理）。重い端末では後処理を切る実装もある（S114） |
| 全画面の高解像度描画 | ゆるい勾配に高解像度は要らない。描画は CSS ピクセルの半分にして、CSS で引き伸ばす |
| 常時描画 | 画面外・別タブ・停止中は描かない（S61、S150、S160） |
| 文字を canvas に描くこと | 本文・ボタンは HTML に置く。canvas の外に置けば、読み上げ・キーボード・翻訳に届く（S129。canvas の中の文章は読み上げが読めないという開発者の指摘は、区分 C の S131） |

削らないもの: HTML の見出し・日時・申し込みボタン、動きを止める手段（背景を動かすトグル）、WebGL が無いときの静止の背景、動きを減らす設定での静止。

## 構成

3 つの層を、下から作る。

1. 層 0（内容と操作）: `<header>` の中の見出し・日時・申し込みのリンク・背景を動かすトグル。すべて HTML で、canvas の外
2. 層 1（静止の代替）: ヒーローの CSS の `background`。同じ 3 色の `linear-gradient`。JS が動かなくても、WebGL が使えなくても、これが見える
3. 層 2（動く WebGL）: ヒーローの全面に置く `<canvas>`（`aria-hidden`。装飾）。文脈を取れたときだけ、層 1 の上に重なる
4. 本文: ヒーローの下に、申し込みの説明

## 仕様

### 出典あり

| 項目 | 値 | 根拠 |
|---|---|---|
| 動きを減らす設定の検出 | `matchMedia('(prefers-reduced-motion: reduce)')`。括弧は必須 | S126、S149 |
| その設定のときの挙動 | 動かさず、1 フレームだけ描いて静止させる（S127 は、代わりの動きを出す使い方を述べる。静止への置き換えは本 skill の整理） | S127 |
| 動きの停止手段 | 自動で始まり 5 秒を超える背景に、止める手段（トグル。文言は固定し、状態は `aria-pressed` で示す） | S121 |
| 描かない条件 | 画面外（IntersectionObserver）・タブが見えない・利用者が停止 | S160、S150、S61 |
| 文脈が取れないとき | `getContext` は `null` を返しうる。そのとき層 1 のまま | S151 |
| 文脈を失ったとき | 既定の動作を止め、層 1 を見せ、戻ったら資源を作り直す | S158、S159、S64 |
| 失敗させる指定 | `failIfMajorPerformanceCaveat` は、性能が低い・ハードウェア GPU が無いときに文脈を作らせない指定。本例は付けない。付けたときの挙動は環境で変わる（確認した環境では、ソフトウェア描画でも文脈が返った。他の環境は未確認） | S63 |

### 本 skill の目安（出典なし）

| 項目 | 値 | 理由 |
|---|---|---|
| 描画 DPR の上限 | 1 | ゆるい勾配に高密度は要らない |
| 描画の倍率 | CSS ピクセルの 0.5 | 1440 × 630 の領域なら 720 × 315 の描画（画素は 4 分の 1） |
| 劣化の順序 | (1) 解像度の倍率を下げる (2) 描画を止めて静止の 1 フレーム (3) 層 1 | 軽い順。実機で測って決める。本例のコードは、この順で自動に落とす実装を持たない（手動・未実装）。周期が約 30 秒の動きを毎フレーム描くので、30 fps に落とす案もある（未実装） |
| 色 | `#0b3a35`・`#0e4a63`・`#1d5e50`（シェーダーと CSS で同じ） | 暗い緑と青。文字を載せやすい |
| 動きの速さ | 時間の項の係数は 0.21 rad/s 以下（いちばん速い成分の周期は約 30 秒） | 1 秒に 3 回の明暗（S118）の約 100 分の 1。概算 |
| 静止させる時刻 | 4 秒の位置 | 色が偏らない図を選んだ |
| 高さ | 70svh（非対応の環境は 70vh） | 文字と背景の見える比率 |

### 文字のコントラスト

ヒーロー上の文字は、シェーダーが出しうる最も明るい色の上でも読めるようにした。WCAG の相対輝度式で計算した（基準の 4.5:1 は、本台帳に原文が無く未照合）。

| 文字 | 背景 | 比 |
|---|---|---|
| `#f4f7f2` | `#0b3a35` | 11.63 |
| `#f4f7f2` | `#0e4a63` | 8.92 |
| `#f4f7f2` | `#1d5e50` | 7.02 |
| `#f4f7f2` | 3 色の各チャネルの最大を取った `#1d5e63`（混ぜた色の上限） | 6.86 |
| `#f4f7f2`（トグル） | 上の最明色に 35 % の黒を重ねた色 | 10.98 |
| `#0b3a35`（申し込みボタン） | `#f4f7f2` | 11.63 |
| 本文（ライト） `#1d2b28` | `#f6f4ee` | 13.37 |
| 本文（ダーク） `#e8eee9` | `#101a18` | 15.08 |

描いた背景の最も明るい画素を、5 つの時点の画像から実測した。範囲は RGB (23, 86, 99) 以下で、この色との比は 7.63 だった（上の計算の上限 `#1d5e63` の内側に収まる）。

ヒーローは、ライトでもダークでも同じ暗い配色にした。ヒーローの下の本文だけが、OS の配色に従う。

## 文言

| 場所 | 文言 |
|---|---|
| 見出し | Moss & Tide 春の試飲会 |
| 本文 | 4 月 19 日（土）13:00〜16:00。定期便の新茶 6 種を、淹れたてで飲み比べる。 |
| ボタン | 参加を申し込む |
| トグル | 背景を動かす（文言は固定。`aria-pressed` が `true` なら動いている、`false` なら止めている） |
| canvas | `aria-hidden="true"`。装飾なので読み上げない |

## コード断片

外部のライブラリ・スクリプト・フォント・計測は使わない。素の WebGL（WebGL 1）で、全面の長方形に 1 本のフラグメントシェーダーを掛ける。動かす条件は `update()` の 1 か所に集めた。

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Moss &amp; Tide 春の試飲会</title>
<style>
  :root {
    color-scheme: light dark;
    --bg: #f6f4ee; --fg: #1d2b28;
    --ink: #f4f7f2;               /* ヒーロー上の文字色（ライトでもダークでも同じ） */
  }
  @media (prefers-color-scheme: dark) { :root { --bg: #101a18; --fg: #e8eee9; } }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--fg); font: 16px/1.7 system-ui, sans-serif; }
  .hero {
    position: relative; isolation: isolate; overflow: hidden;
    min-height: 70vh; min-height: 70svh;
    display: grid; align-content: end; gap: 0.75rem;
    padding: clamp(1.25rem, 5vw, 4rem);
    color: var(--ink);
    /* 層 1: WebGL が使えない・動かさないときの静止の代替。シェーダーと同じ 3 色 */
    background: linear-gradient(135deg, #0b3a35, #0e4a63 55%, #1d5e50);
  }
  .hero canvas { position: absolute; inset: 0; width: 100%; height: 100%; z-index: -1; display: block; }
  .hero.no-gl canvas { display: none; }
  .hero h1 { margin: 0; font-size: clamp(1.75rem, 6vw, 3.5rem); line-height: 1.2; overflow-wrap: anywhere; }
  .hero p { margin: 0; max-width: 36em; }
  .btn { justify-self: start; padding: 0.75rem 1.5rem; background: var(--ink); color: #0b3a35;
         font-weight: 700; text-decoration: none; border-radius: 0.25rem; }
  #motion-toggle { position: absolute; top: 1rem; right: 1rem; padding: 0.5rem 0.75rem; font: inherit; font-size: 0.875rem;
                   color: var(--ink); background: rgb(0 0 0 / 0.35); border: 1px solid var(--ink); border-radius: 0.25rem; }
  main { max-width: 40rem; margin: 0 auto; padding: 2rem 1.25rem 4rem; }
</style>
</head>
<body>
<header class="hero" id="hero">
  <canvas aria-hidden="true"></canvas>
  <button type="button" id="motion-toggle" aria-pressed="true">背景を動かす</button>
  <h1>Moss &amp; Tide 春の試飲会</h1>
  <p>4 月 19 日（土）13:00〜16:00。定期便の新茶 6 種を、淹れたてで飲み比べる。</p>
  <a class="btn" href="#apply">参加を申し込む</a>
</header>
<main>
  <h2 id="apply">申し込み</h2>
  <p>定員 24 名。定期便のお客さま優先で、空きがあれば一般の方も参加できる。</p>
</main>
<script>
(() => {
  const hero = document.getElementById('hero');
  const canvas = hero.querySelector('canvas');
  const toggle = document.getElementById('motion-toggle');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const MAX_DPR = 1;      // 描画の DPR の上限（本 skill の目安。出典なし）
  const SCALE = 0.5;      // CSS ピクセルに対する描画解像度の倍率（本 skill の目安。出典なし）
  const FREEZE_AT = 4;    // 動きを減らす設定のとき静止させる時刻（秒）

  const VERT = 'attribute vec2 aPos; void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }';
  const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uRes;
uniform float uTime;
const vec3 A = vec3(0.043, 0.227, 0.208);   // #0b3a35
const vec3 B = vec3(0.055, 0.290, 0.388);   // #0e4a63
const vec3 C = vec3(0.114, 0.369, 0.314);   // #1d5e50
void main() {
  vec2 p = gl_FragCoord.xy / uRes.y;        // 高さを 1 とする座標（横長でも歪まない）
  vec2 q = p * 1.6;
  q += 0.35 * vec2(sin(q.y * 2.3 + uTime * 0.21), sin(q.x * 2.1 - uTime * 0.17));
  q += 0.20 * vec2(sin(q.y * 4.1 - uTime * 0.13), sin(q.x * 3.7 + uTime * 0.19));
  float f = 0.5 + 0.5 * sin(q.x * 2.2 + q.y * 1.4 + uTime * 0.10);
  float g = 0.5 + 0.5 * sin(q.y * 2.6 - q.x * 0.9 - uTime * 0.08);
  gl_FragColor = vec4(mix(mix(A, B, f), C, g * 0.6), 1.0);
}`;

  let gl = null, uRes, uTime, raf = 0, last = 0, time = FREEZE_AT;
  let inView = true, pageVisible = !document.hidden, userPaused = false, lost = false;

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    return s;
  }
  function build() {                          // 資源の作成。context が戻ったときも呼ぶ
    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    uRes = gl.getUniformLocation(prog, 'uRes');
    uTime = gl.getUniformLocation(prog, 'uTime');
    resize();
  }
  function resize() {
    const k = Math.min(window.devicePixelRatio || 1, MAX_DPR) * SCALE;
    canvas.width = Math.max(1, Math.round(canvas.clientWidth * k));
    canvas.height = Math.max(1, Math.round(canvas.clientHeight * k));
    gl.viewport(0, 0, canvas.width, canvas.height);
    draw();
  }
  function draw() {
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform1f(uTime, time);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
  function loop(now) {
    raf = requestAnimationFrame(loop);
    time += Math.max(0, Math.min((now - last) / 1000, 0.1)); last = now;   // 負の値（古い時刻）と長い空白は進めない
    draw();
  }
  function update() {                         // 動かす条件は 1 か所に集める
    const run = gl && !lost && !reduce.matches && !userPaused && inView && pageVisible;
    if (run && !raf) { last = performance.now(); raf = requestAnimationFrame(loop); }
    if (!run && raf) { cancelAnimationFrame(raf); raf = 0; }
    if (gl && !lost && reduce.matches) { time = FREEZE_AT; draw(); }   // 置き換え: 1 フレームだけ描いて静止
    toggle.hidden = !gl || lost || reduce.matches;
  }

  gl = canvas.getContext('webgl', { antialias: false, alpha: false, depth: false, stencil: false, powerPreference: 'low-power' });
  if (gl) {
    try { build(); } catch (e) { gl = null; }
  }
  if (!gl) { hero.classList.add('no-gl'); toggle.hidden = true; return; }

  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver((entries) => { inView = entries[entries.length - 1].isIntersecting; update(); }).observe(hero);   // 記録は最後を採る
  document.addEventListener('visibilitychange', () => { pageVisible = !document.hidden; update(); });
  reduce.addEventListener('change', update);
  toggle.addEventListener('click', () => {
    userPaused = !userPaused;
    toggle.setAttribute('aria-pressed', String(!userPaused));   // 文言は固定し、状態は aria-pressed だけで示す
    update();
  });
  canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();                       // 復帰を許す
    lost = true; update();                    // update() が描画ループを止め、ボタンを隠す
    hero.classList.add('no-gl');
  });
  canvas.addEventListener('webglcontextrestored', () => {
    try { build(); lost = false; hero.classList.remove('no-gl'); update(); } catch (e) { /* 代替のまま */ }
  });
  update();
})();
</script>
</body>
</html>
```

仕様との突き合わせ: 描画の解像度は「clientWidth × min(DPR, 1) × 0.5」で、ResizeObserver で測り直す。320 px の幅でも、横にはみ出さない（見出しは `overflow-wrap: anywhere`）。乱数もノイズ関数も使わない。

### ライブラリを使う場合

three.js を使うと、描画の枠組み（レンダラー・シーン）が整う。ただし本例は全面の長方形 1 枚で、ライブラリが足すものは少ない。使うなら、版を固定する。

- 版: three@0.187.0（r187。公開日 2026-10-30。S147、S148 は区分 R）。更新の頻度は取得していない。実装時に最新の版と移行の注意を確認する
- 手書きの GLSL を使うなら、`WebGLRenderer` と `ShaderMaterial` に固定する。`WebGLRenderer` は純粋な WebGL 2 の用途で推奨される（S41）。`WebGPURenderer` は、`ShaderMaterial` を使うカスタムの材質に対応していない（S40）
- CDN で読むなら、import map で版を明示する（S43）。import map には `integrity` のキーがあり、モジュールの完全性を確かめられる（S49）。外部のホストが乗っ取られると、悪意のあるコードが配られうる（S48）。実際に、CDN のドメインが買収されてマルウェアが配られた事例がある（S50。three.js の CDN の事例ではない）
- 版は完全な版番号で固定する。`@latest`・範囲指定（`@^0`・`@0`）・版の省略（`three`）・タグ名での指定は使わない。版を変えたら、ハッシュも計算し直す。ハッシュが合わないときに、`integrity` を外して回避しない（原因を調べ、ファイルを取り直す）
- r187 の `three.module.js` は `./three.core.js` を読み込む（2026-11-16 に取得したファイルで確認。出典なし）。完全性は 2 つの URL の両方に付ける。ハッシュは、`openssl dgst -sha384 -binary <ファイル> | openssl base64 -A` で計算し、`sha384-` を前に付ける
- ハッシュの照合: CDN から取得したファイルと、`npm pack three@0.187.0` で得た tarball の `package/build/` の同名のファイルから、それぞれ計算した。2 ファイルとも一致した（2026-11-16。出典なし）。取得元が同じ CDN だけでは、ファイルの固定にはなっても、真正性の確認にはならない。別の経路で照合する
- import map の `integrity` に対応しないブラウザでは、検証されずに読み込まれることがある（対応は互換表で確認する時点情報。本 skill は確認していない）。本番では、ファイルを自分のサーバーから配る（セルフホスト）か、ビルドで束ねる形を第一にし、CDN は補助にする。対応が確かでない環境では、層 1 の背景のまま、WebGL を読み込まない選択もある
- CSP を設けるサイトでは、インラインの `<script>` に nonce かハッシュが要る。`script-src` は、読み込み先を限る。本例の `<script>` はすべてインラインなので、取り込む先の CSP に合わせて書き換える
- npm とビルドツールで束ねるほうが、ほとんどの利用者に推奨される（S44）。版は `package.json` が記録する（S45）。ライセンスは MIT で、配るときは著作権表示を残す（S46）

未実行（本節のコードは描画を確かめていない）:

```html
<script type="importmap">
{
  "imports": { "three": "https://cdn.jsdelivr.net/npm/three@0.187.0/build/three.module.js" },
  "integrity": {
    "https://cdn.jsdelivr.net/npm/three@0.187.0/build/three.module.js": "sha384-T/E3B9AvPtLn5PKD7aTSFqizQcA4kHDfU0lub7u0fvM4w9BMGcSb3yI7r5LqMAMn",
    "https://cdn.jsdelivr.net/npm/three@0.187.0/build/three.core.js": "sha384-drH6BueSlcvoXCwAqWkNJvXwu2Ax3mnGOmZnIXaomedIw+uXSP9Bf/XIUINgLUW+"
  }
}
</script>
<script type="module">
import * as THREE from 'three';
const canvas = document.querySelector('#hero canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'low-power' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1) * 0.5);   // 本体と同じ予算
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const material = new THREE.ShaderMaterial({
  uniforms: { uTime: { value: 4 }, uRes: { value: new THREE.Vector2(1, 1) } },
  vertexShader: 'void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }',
  // FRAG は、本体の GLSL の文字列定数を、この module に写して使う。uniform の宣言ごと使う。ShaderMaterial が付けるのは、position・projectionMatrix などの組み込みだけで、
  // uTime・uRes は自分で宣言する。precision の宣言が重ならないかは、実装時に確認する
  fragmentShader: FRAG
});
const scene = new THREE.Scene();
scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));
// 画面外・別タブ・動きを減らす設定で止める条件は、本体の update() と同じにする。描画は renderer.render(scene, camera)
</script>
```

ハッシュの値は、2026-11-16 に取得したファイルから計算した値で、ブラウザでの読み込みは確かめていない。対応するブラウザでは、値が合わないと読み込みを拒否する。そのときも層 1 の背景が見える構成にしておく。

## 初見検証

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 春の試飲会が 4 月 19 日にある | 見出しと日時 |
| 何を操作できるか | 申し込む。背景の動きを止める | 申し込みのボタン、右上のトグル |
| どう操作するか | ボタンを押す。トグルは、押すたびに止める・再開する | トグルの `aria-pressed`（文言は固定） |

観察で確かめる: (1) 背景を見せずに、日時を読み上げさせて、2 秒以内に答えられるか。(2) 背景が動いていることに気づいたか、気づいたとき邪魔だったか。(3) 動きのトグルを見つけられたか。押したあと、動いているか止まっているかを、読み上げでも判別できたか。(4) OS の「視差効果を減らす」相当の設定にして、背景が止まった静止の図を見て、違和感が無いか。(5) 古い端末か、WebGL を切った環境で、層 1 の背景になっているか。

## 点検

- 3 層の分担: 本文・ボタンは canvas の外（層 0）。背景だけが WebGL（層 2）。WebGL が無い・失われた・動きを減らす設定のときも、内容と操作は同じ
- 動きの規則: 自動で動く背景に止めるトグルがある（S121）。点滅は無い。動きを減らす設定では 1 フレームで静止する（置き換えは S127 の考え方で、静止は本 skill の整理）
- 描かない条件: 画面外・別タブ・停止中は `requestAnimationFrame` を回さない（S160、S150、S61）
- 失われた文脈: `webglcontextlost` で既定の動作を止めて層 1 を見せ、`webglcontextrestored` で作り直す（S158、S159）。利用者が品質を選べるようにする案もある（S52）が、背景では、止めるトグルで代える
- 性能: 描画は CSS ピクセルの 0.5 倍、DPR の上限は 1。実機の fps・消費電力・熱は測っていない（未検証）。測ってから、倍率と劣化の順序を決める。初期表示の目安は LCP 2.5 秒（S69）で、この例の読み込みはコードだけ（素材 0）
- 画面での確認（2026-11-16）: ソフトウェア描画の WebGL で 1 枚目が描け、1.5 秒後に絵が変わった。トグルを押すと `requestAnimationFrame` が 0 回になり（0.8 秒間）、`aria-pressed` が `true` から `false` に変わり、文言は変わらなかった。再開で `true` に戻った。動きを減らす設定では、1.5 秒間に `requestAnimationFrame` が 0 回で、前後の画像が一致した。`document.hidden` を真にして `visibilitychange` を送ると、0.6 秒間の `requestAnimationFrame` は 0 回だった。描画の解像度は、画面の倍率 3 でも 720 × 315（上限 1 × 倍率 0.5）だった。WebGL を無効にした起動では、層 1 の CSS グラデーションが見えた。1440・390・320 px のライトとダークの 30 通り（5 例の合計）で、横にはみ出さなかった。Safari・Firefox・実機は未確認
- 操作の確認（2026-11-16）: 申し込みのリンクをクリックすると `#apply` に移った。Tab を 2 回押すと、トグルのあとに申し込みのリンクへ移り、Enter で `#apply` に移った。トグルの押下は上の確認のとおり
- 文脈の喪失の確認（2026-11-16）: 文脈を擬似的に失わせると、層 1 の背景に戻り、トグルが隠れ、可視状態の変化の通知が来ても `requestAnimationFrame` は再開しなかった（0.6 秒間で 0 回）。復帰させると、描画が再開し、描画の解像度は 720 に戻った
- 隣の領域: 色・書体の方向性は designer-web、動きの時間・イージングは designer-interaction、LP の構成と文言は designer-apple（いずれも導入されていれば）

## この例の出典

S27、S40、S41、S43、S44、S45、S46、S48、S49、S50、S52、S61、S63、S64、S69、S85、S114、S116、S118、S121、S122、S126、S127、S129、S131、S141、S142、S143、S147、S148、S149、S150、S151、S158、S159、S160、S164。台帳は `../references/sources.md`。

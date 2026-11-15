# 例: 3D モデルが無いまま、粒子で製品の輪郭を描く（卓上ランプのファーストビュー）

製品の 3D モデルも写真もまだ無い段階で、数式の上に粒子を並べて製品の輪郭を暗示する例。題材は架空の卓上ランプで、実在の製品の見た目は模倣しない。扱うのは、粒子数と解像度の予算・タッチで成り立つ操作・WebGL が使えないときの代替・動きを減らす設定での静止・素材の工程の見積もりで、サイトの構成と文言は扱わない。「製品を粒子で見せたい」「3D のヒーローにしたい」と言われたとき、モデルの有無を確かめてから開く。

## 依頼

- 媒体: 架空の小型の卓上ランプ「Halo」の製品サイトのファーストビュー（最初に画面に出る領域）
- 依頼文（架空）: 「ランプのサイトを作る。3D モデルはまだ無い。粒子が集まって輪の形になる導入にしたい」
- 読み手: 机まわりの道具を探している人。スマートフォンからの閲覧が多いと想定する（本 skill の想定。出典なし）
- 現状: 製品の写真・CAD・3D モデルは無い。製品は輪（リング）の形で、明るさ 3 段階、USB-C 給電だけが決まっている

### 根拠の範囲（先に読む）

- 出典のある事実: 軽い形の例として、草 1 枚を三角形 1 つで作り、約 78,400 枚を並べた事例がある（S87）。英語の原文（S87）: "Each blade is made of a single triangle, and there are around 78,400 blades in total, so roughly 78,400 triangles." 日本語は要旨で、本人の発言ではない
- 粒子の数の事例: 最大 160 万粒子の GPGPU の事例（S112）は専用設計の事例で、初期値にしない。スプラットは、デスクトップで約 78,233、モバイルで約 44,683 に絞って見栄えが上がった事例がある（S107）。粒子の種類が違うので、数の比較には使わない
- 素材の工程: 製品の CAD をそのまま Web に出せず、リトポロジー・ベイク・Draco 圧縮が要った事例がある（S113）。実在の手の 3D スキャンを購入した事例もある（S108）
- 本 skill の目安（出典なし）: 粒子数（4,000 と 24,000）・DPR の上限・点の大きさ・組み上がる時間・色。端末ごとの上限値の一次の出典は無い（台帳の「未検証」を参照）
- 範囲外: 粒子の物理シミュレーション、製品の質感の再現。モデルが届いたあとの置き換えの手順は、本例では「素材の工程」として見積もりの問いまでにとどめる

## 目的の一文

製品が輪の形であることを、モデルが無い段階でも、動きのある導入で伝える。ただし、読めること（名前・仕様・操作）は動きに頼らない。

## 削るもの

| 削るもの | 理由 |
|---|---|
| 製品の写実的な質感・反射 | モデルが無い。後から入れるなら素材の工程（S113、S108）。本例は輪の「形」だけを式で出す |
| ホバーで粒子を散らす操作 | ホバーはタッチで成り立たない（S27）。代わりに「もう一度組み上げる」ボタンを置いた |
| 粒子 1 個ずつを Mesh にすること | 描画の呼び出しが増える（S56）。点群は 1 回の描画にまとめる（S51） |
| 数十万以上の粒子 | 事例（S112）は専用設計。初期値は端末の予算で決める |
| 強い明滅 | 1 秒に 3 回を超える点滅を含めない（S118）。粒子は滑らかに動かす |
| 名前・仕様を canvas に描くこと | 読み上げ・キーボード・翻訳に届かない。本文は HTML（S129、S131 は区分 C） |

削らないもの: HTML の見出し・説明・ボタン、輪の形を示す静止の代替（SVG）、回転を止める手段（トグル）。

## 構成

1. 層 0（内容と操作）: 見出し・説明・「もう一度組み上げる」・回転のトグル「回転させる」。HTML
2. 層 1（静止の代替）: 点線の輪の SVG。JS が無い・WebGL が使えないとき、これが既定で見える。素材（写真・モデル）が無い間は、輪の形の SVG を式で書く。素材が届いたら、静止画像に置き換える（別の工程）
3. 層 2（動く WebGL）: 粒子が散らばった状態から輪（トーラス）に集まる。組み上がった後はゆっくり回る
4. 配置: 幅が広いときは左に文章・右に図。狭いときは文章の下に図

## 仕様

### 出典あり

| 項目 | 値 | 根拠 |
|---|---|---|
| 点群の描画 | 全粒子を 1 回の `drawArrays` で描く | S51（多数をまとめて 1 回の呼び出しで描く指針） |
| 文脈が取れないとき | `getContext` が `null` を返したら層 1 | S151 |
| 文脈の喪失 | 既定の動作を止めて層 1 を見せ、戻ったら資源を作り直す | S158、S159、S64 |
| 動きを減らす設定 | 検出して、組み上がった形で静止する（置き換え） | S122、S126、S127 |
| 動きの停止手段 | 自動で始まり 5 秒を超える動き（回転）に、止める手段（トグル。文言は固定し、状態は `aria-pressed` で示す） | S121 |
| 点滅 | 粒子は滑らかに動き、強い明滅は無い | S118 |
| 画面外・別タブ | 描かない | S160、S150、S61 |

### 本 skill の目安（出典なし）

| 項目 | 値 | 理由 |
|---|---|---|
| 粒子数 | 画面が狭い・主入力がタッチなら 4,000、それ以外は 24,000 | 初期案。測って増減する |
| 描画 DPR の上限 | 2 | 高密度の画面で負荷が倍々になるのを避ける |
| 点の大きさ | 描画の高さの約 0.5 %（距離 3.6 のとき）。粒子が少ないほうは約 0.9 % | 粒子が少ないと、大きくして輪郭を保つ |
| 組み上がる時間 | 2.6 秒。粒子ごとに到着を遅らせる | 長いと待たせる。本 skill の目安 |
| 回転 | 毎秒約 0.15 rad | ゆっくり |
| 輪の形 | トーラス（大半径 1、小半径 0.26） | 製品が輪であることを暗示する |
| 乱数 | 線形合同法（seed 固定）。定数 1664525・1013904223 は広く知られた既存の値で、由来と利用条件は未確認（出典なし） | 同じ見た目を再現できる |
| 劣化の順序 | (1) 粒子数を減らす (2) DPR の上限を下げる (3) 回転を止めて静止 (4) 層 1 | 軽い順。実機で測って決める。本例のコードは、この順で自動に落とす実装を持たない（手動・未実装。粒子数は読み込み時に 1 回だけ決める） |
| 色 | ダーク: 加算で光らせる琥珀色。ライト: 茶色を通常の重ねで | 地の明るさで合成を変える |

### 色と文字

文字は canvas の外にあり、図と重ならない。文字と地のコントラストを WCAG の相対輝度式で計算した（基準の 4.5:1 は、本台帳に原文が無く未照合）。

| 文字 | 地 | 比 |
|---|---|---|
| ライト `#1f1a14` | `#f5f1ea` | 15.34 |
| ダーク `#f2ece2` | `#12100e` | 16.16 |

粒子は装飾で、情報を載せていない（比は参考: ライト `#7a4a1c` と `#f5f1ea` で 6.61、ダーク `#f2b866` と `#12100e` で 10.69）。

## 文言

| 場所 | 文言 |
|---|---|
| 見出し | Halo 卓上の輪のランプ |
| 説明 | 直径 18 cm の輪が、机の上で静かに光る。明るさは 3 段階、電源は USB-C。 |
| ボタン | もう一度組み上げる／回転させる（トグル。文言は固定。`aria-pressed` が `true` なら回転中、`false` なら停止中） |
| 図 | 装飾（`aria-hidden`）。意味のある情報は説明の文章にある |

## コード断片

外部のライブラリ・スクリプト・フォント・計測は使わない。素の WebGL（WebGL 1）で、位置は式から作り、頂点シェーダーで「散らばった位置」と「輪の位置」を混ぜる。行列は自前で計算する。

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Halo 卓上の輪のランプ</title>
<style>
  :root { color-scheme: light dark; --bg: #f5f1ea; --fg: #1f1a14; --dot: #7a4a1c; }
  @media (prefers-color-scheme: dark) { :root { --bg: #12100e; --fg: #f2ece2; --dot: #f2b866; } }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--fg); font: 16px/1.7 system-ui, sans-serif; }
  .hero { display: grid; grid-template-columns: 1fr; gap: 1.5rem; align-items: center;
          max-width: 72rem; margin: 0 auto; padding: clamp(1rem, 4vw, 3rem); }
  @media (min-width: 48rem) { .hero { grid-template-columns: 1fr 1fr; min-height: 80vh; } }
  .stage { position: relative; width: 100%; max-width: 32rem; aspect-ratio: 1; justify-self: center; color: var(--dot); }
  .stage canvas, .stage svg { position: absolute; inset: 0; width: 100%; height: 100%; }
  .stage canvas { display: none; }
  .stage.gl canvas { display: block; }
  .stage.gl svg { display: none; }              /* 層 1（SVG）は WebGL が動いている間だけ隠す */
  h1 { margin: 0 0 0.5rem; font-size: clamp(1.75rem, 6vw, 3rem); line-height: 1.2; overflow-wrap: anywhere; }
  p { margin: 0 0 1rem; max-width: 32em; }
  .row { display: flex; flex-wrap: wrap; gap: 0.75rem; }
  button { font: inherit; padding: 0.625rem 1rem; color: var(--fg); background: transparent;
           border: 1px solid currentColor; border-radius: 0.25rem; }
  button[hidden] { display: none; }
</style>
</head>
<body>
<main class="hero">
  <div>
    <h1>Halo 卓上の輪のランプ</h1>
    <p>直径 18 cm の輪が、机の上で静かに光る。明るさは 3 段階、電源は USB-C。</p>
    <div class="row">
      <button type="button" id="replay">もう一度組み上げる</button>
      <button type="button" id="pause" aria-pressed="true">回転させる</button>
    </div>
  </div>
  <div class="stage" id="stage">
    <canvas aria-hidden="true"></canvas>
    <!-- 層 1: 点線の輪（静止）。JS が無い・WebGL が使えないときの既定 -->
    <svg viewBox="0 0 200 200" aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round">
      <g transform="translate(100 100) rotate(-18)">
        <ellipse rx="78" ry="34" stroke-width="5" stroke-dasharray="0.1 6.5"/>
        <ellipse rx="70" ry="28" stroke-width="3.5" stroke-dasharray="0.1 5.5" opacity="0.7"/>
        <ellipse rx="86" ry="40" stroke-width="2.5" stroke-dasharray="0.1 5" opacity="0.5"/>
      </g>
    </svg>
  </div>
</main>
<script>
(() => {
  const stage = document.getElementById('stage');
  const canvas = stage.querySelector('canvas');
  const replay = document.getElementById('replay');
  const pause = document.getElementById('pause');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const dark = matchMedia('(prefers-color-scheme: dark)');
  const small = matchMedia('(max-width: 640px), (pointer: coarse)');
  // 性能予算（すべて本 skill の目安。出典なし。測って決める）
  const SMALL = small.matches;                 // 読み込み時に 1 回だけ読む（途中で変わっても粒子数は変えない）
  const N = SMALL ? 4000 : 24000;              // 粒子数
  const MAX_DPR = 2;                           // 描画 DPR の上限
  const BUILD_SEC = 2.6;                       // 組み上がるまでの時間

  const VERT = `
attribute vec3 aStart; attribute vec3 aTarget; attribute float aSeed;
uniform mat4 uMvp; uniform float uProgress, uSize;
varying float vA;
void main() {
  float k = clamp(uProgress * 1.4 - aSeed * 0.4, 0.0, 1.0);   // 粒子ごとに到着を遅らせる
  k = k * k * (3.0 - 2.0 * k);
  vec4 pos = uMvp * vec4(mix(aStart, aTarget, k), 1.0);
  gl_Position = pos;
  gl_PointSize = max(1.0, uSize / pos.w);
  vA = 0.35 + 0.65 * k;
}`;
  const FRAG = `
precision mediump float;
uniform vec3 uColor; varying float vA;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = (1.0 - smoothstep(0.15, 0.5, d)) * vA;               // 中心から外へ弱くする（edge0 < edge1 の順で書く）
  gl_FragColor = vec4(uColor * a, a);                          // 乗算済みアルファ
}`;

  // 乱数は線形合同法（seed 固定。同じ見た目を再現できる）。定数は広く知られた既存の値で、由来は未確認（出典なし）
  let s = 12345;
  const rnd = () => (s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296;
  const start = new Float32Array(N * 3), target = new Float32Array(N * 3), seed = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const u = rnd() * Math.PI * 2, v = rnd() * Math.PI * 2, R = 1, r = 0.26;   // 輪（トーラス）の式
    target.set([(R + r * Math.cos(v)) * Math.cos(u), r * Math.sin(v), (R + r * Math.cos(v)) * Math.sin(u)], i * 3);
    start.set([(rnd() - 0.5) * 5, (rnd() - 0.5) * 5, (rnd() - 0.5) * 5], i * 3);
    seed[i] = rnd();
  }

  function mvp(angle, aspect) {                // 列優先。透視 × 平行移動 × X 回転 × Y 回転
    const f = 1 / Math.tan(0.4), n = 0.1, fa = 20, cy = Math.cos(angle), sy = Math.sin(angle), t = 0.9, ct = Math.cos(t), st = Math.sin(t);
    const R = [cy, st * sy, -ct * sy, 0,   0, ct, st, 0,   sy, -st * cy, ct * cy, 0,   0, 0, -3.6, 1];
    const P = [f / aspect, 0, 0, 0,   0, f, 0, 0,   0, 0, (fa + n) / (n - fa), -1,   0, 0, 2 * fa * n / (n - fa), 0];
    const o = new Float32Array(16);
    for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) { let a = 0; for (let k = 0; k < 4; k++) a += P[k * 4 + r] * R[c * 4 + k]; o[c * 4 + r] = a; }
    return o;
  }

  let gl = null, prog, loc = {}, raf = 0, last = 0;
  let progress = 0, angle = 0.6, userPaused = false, inView = true, pageVisible = !document.hidden, lost = false;

  function compile(type, src) {
    const sh = gl.createShader(type); gl.shaderSource(sh, src); gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh));
    return sh;
  }
  function build() {
    prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    gl.useProgram(prog);
    for (const [name, data, size] of [['aStart', start, 3], ['aTarget', target, 3], ['aSeed', seed, 1]]) {
      const b = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      const l = gl.getAttribLocation(prog, name); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, size, gl.FLOAT, false, 0, 0);
    }
    for (const u of ['uMvp', 'uProgress', 'uSize', 'uColor']) loc[u] = gl.getUniformLocation(prog, u);
    gl.enable(gl.BLEND);
    resize();
  }
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    canvas.width = Math.max(1, Math.round(canvas.clientWidth * dpr));
    canvas.height = Math.max(1, Math.round(canvas.clientHeight * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
    draw();
  }
  function draw() {
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    if (dark.matches) { gl.blendFunc(gl.ONE, gl.ONE); gl.uniform3f(loc.uColor, 0.95, 0.72, 0.4); }              // 暗い地: 加算で光らせる
    else { gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA); gl.uniform3f(loc.uColor, 0.48, 0.29, 0.11); }          // 明るい地: 通常の重ね
    gl.uniformMatrix4fv(loc.uMvp, false, mvp(angle, canvas.width / canvas.height));
    gl.uniform1f(loc.uProgress, progress);
    gl.uniform1f(loc.uSize, canvas.height * (SMALL ? 0.032 : 0.018));   // 距離 3.6 で約 0.5% 高さ
    gl.drawArrays(gl.POINTS, 0, N);
  }
  function loop(now) {
    raf = requestAnimationFrame(loop);
    const dt = Math.max(0, Math.min((now - last) / 1000, 0.1)); last = now;   // 負の値（古い時刻）と長い空白は進めない
    progress = Math.min(1, progress + dt / BUILD_SEC);
    angle += dt * 0.15;
    draw();
  }
  function update() {
    const run = gl && !lost && !reduce.matches && !userPaused && inView && pageVisible;
    if (run && !raf) { last = performance.now(); raf = requestAnimationFrame(loop); }
    if (!run && raf) { cancelAnimationFrame(raf); raf = 0; }
    if (gl && !lost && reduce.matches) { progress = 1; angle = 0.6; draw(); }   // 置き換え: 組み上がった形で静止
    replay.hidden = pause.hidden = !gl || lost || reduce.matches;
  }

  gl = canvas.getContext('webgl', { antialias: false, depth: false, powerPreference: 'low-power' });
  if (gl) {
    stage.classList.add('gl');                  // canvas を表示してから大きさを測る
    try { build(); } catch (e) { gl = null; stage.classList.remove('gl'); }
  }
  if (!gl) { replay.hidden = pause.hidden = true; return; }

  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver((entries) => { inView = entries[entries.length - 1].isIntersecting; update(); }).observe(stage);   // 記録は最後を採る
  document.addEventListener('visibilitychange', () => { pageVisible = !document.hidden; update(); });
  reduce.addEventListener('change', update);
  dark.addEventListener('change', () => gl && draw());
  replay.addEventListener('click', () => { progress = 0; userPaused = false; pause.setAttribute('aria-pressed', 'true'); update(); });
  pause.addEventListener('click', () => {
    userPaused = !userPaused; pause.setAttribute('aria-pressed', String(!userPaused));   // 文言は固定し、状態は aria-pressed だけで示す
    update();
  });
  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); lost = true; update(); stage.classList.remove('gl'); });
  canvas.addEventListener('webglcontextrestored', () => {
    try { stage.classList.add('gl'); build(); lost = false; update(); } catch (e) { stage.classList.remove('gl'); }   // 失敗したら層 1 のまま
  });
  update();
})();
</script>
</body>
</html>
```

仕様との突き合わせ: 粒子数は `N`（4,000 または 24,000）で、描画は `drawArrays(gl.POINTS, 0, N)` の 1 回。描画の解像度は「clientWidth × min(DPR, 2)」。canvas を表示してから大きさを測るため、`gl` のクラスを先に付けている（付ける前は `display: none` で、大きさが 0 になる）。

### ライブラリを使う場合

three.js の `Points` と `ShaderMaterial` で同じ見た目を作れる。行列・カメラ・描画ループの枠組みを任せられる一方、版の固定と配布の扱いが増える。

- 版は three@0.187.0（r187。S147。S148 は区分 R）に固定する。`@latest`・範囲指定・版の省略・タグ名は使わない。import map で版を明示し（S43）、完全性は `integrity` で確かめる（S49）。外部ホストの乗っ取りの危険は S48、実例は S50（three.js の CDN の事例ではない）。対応しないブラウザでは検証されないことがあるので、セルフホストを第一にする。版を変えたらハッシュも計算し直し、合わなくても `integrity` を外さない。詳細は `shader-gradient-background.md` の同名の小節にある
- r187 の `three.module.js` は `./three.core.js` を読み込む（2026-11-16 に取得したファイルで確認。出典なし）。`integrity` には 2 つの URL を載せる。ハッシュの値・計算と、別の経路（`npm pack` の tarball）での照合は、同じ小節にある。値は `shader-gradient-background.md` の同名の小節にある。セルフホストなら、同じファイルを自分のサーバーから配る
- 手書きの GLSL は `WebGLRenderer` で使う。`WebGLRenderer` は純粋な WebGL 2 の用途で推奨され（S41）、`WebGPURenderer` は `ShaderMaterial` に対応しない（S40）。`WebGPURenderer` は実験段階との記述もある（S39）
- WebGL 2 を使えない端末やブラウザが、今もありうると three.js のマニュアルは述べる（S62）。使えないとき層 1 を見せる点は本体と同じ
- 使い終えた資源は自分で解放する（`geometry.dispose()`・`material.dispose()`・`renderer.dispose()`。S60、S55）

未実行（本節のコードは描画を確かめていない）:

```html
<script type="module">
import * as THREE from 'three';                     // import map と integrity は上の注意のとおり
// N・target・start・seed は、本体の for ループと同じ式で作ったものを使う（この節では再掲しない）。FRAG は本体の GLSL の文字列定数を、この module に写す
const N = matchMedia('(max-width: 640px), (pointer: coarse)').matches ? 4000 : 24000;
const dark = matchMedia('(prefers-color-scheme: dark)').matches;
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(target, 3));   // 輪の位置（本体の式で作る）
geometry.setAttribute('aStart', new THREE.BufferAttribute(start, 3));
geometry.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
const material = new THREE.ShaderMaterial({
  uniforms: { uProgress: { value: 0 }, uSize: { value: 40 }, uColor: { value: dark ? new THREE.Vector3(0.95, 0.72, 0.4) : new THREE.Vector3(0.48, 0.29, 0.11) } },   // THREE.Color は色空間の変換が入るので、本体と同じ値を Vector3 で渡す
  vertexShader: `
    attribute vec3 aStart; attribute float aSeed; uniform float uProgress, uSize; varying float vA;
    void main() {
      float k = clamp(uProgress * 1.4 - aSeed * 0.4, 0.0, 1.0); k = k * k * (3.0 - 2.0 * k);
      vec4 mv = modelViewMatrix * vec4(mix(aStart, position, k), 1.0);
      gl_Position = projectionMatrix * mv;
      gl_PointSize = max(1.0, uSize / -mv.z);   // 単位は描画ピクセル。setPixelRatio の値を掛ける
      vA = 0.35 + 0.65 * k;
    }`,
  // 本体の FRAG を、uniform vec3 uColor と varying float vA の宣言ごと使う。ShaderMaterial が付けるのは組み込みだけで、
  // uColor・uProgress・uSize は自分で宣言する（precision の重複は、実装時に確認する）
  fragmentShader: FRAG,
  transparent: true, depthWrite: false, premultipliedAlpha: true,   // 本体は乗算済みアルファで出している
  blending: dark ? THREE.AdditiveBlending : THREE.NormalBlending     // 本体と同じく、暗い地は加算、明るい地は通常の重ね
});
const scene = new THREE.Scene();
scene.add(new THREE.Points(geometry, material));
const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 20);   // 縦の視野角。本体の 0.4 rad に近い値
camera.position.set(0, 0, 3.6);
const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'low-power' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// 描画ループ・止める条件・動きを減らす設定での静止・WebGL が無いときの層 1 は、本体と同じ構造にする
</script>
```

粒子が減らせない・端末の差が大きいときの次の手は、粒子の位置の更新を GPU にまとめる設計（S112 の GPGPU）だが、専用設計で、本 skill の到達点を超える。

## 初見検証

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 輪の形をしたランプである。明るさ 3 段階、USB-C | 見出しと説明 |
| 何を操作できるか | 組み上げをやり直す。動きを止める | 2 つのボタン |
| どう操作するか | ボタンを押す。ホバーやドラッグは要らない | ボタンの文言 |

観察で確かめる: (1) 粒子が見えない状態（層 1 の SVG）で、製品の形と仕様を答えられるか。(2) 動きの途中でも、説明を読めたか。(3) 回転を止められたか。止めたあと、止まっているかを読み上げでも判別できたか。(4) タッチだけの端末で、同じことができたか。(5) 動きを減らす設定にして、組み上がった形で止まって見えるか。(6) 実機で、動きが重くないか（本例では測っていない）。

## 点検

- 3 層の分担: 文章・ボタンは canvas の外。canvas は装飾で `aria-hidden`。層 1 の SVG は、JS が無い・WebGL が使えない・文脈を失ったときの既定
- 操作: ホバーに頼らない。ボタンだけで操作でき、キーボードでも押せる（`button`）。タッチで成り立つ（S27）
- 動き: 自動で動く回転に止めるトグルがある（S121）。動きを減らす設定では、組み上がった形で止め、2 つのボタンを隠す（S127）。強い明滅は無い（S118）
- 描かない条件: 画面外・別タブ・停止中は描かない（S160、S150、S61）
- 素材の工程: モデルが届いたら、リトポロジー・ベイク・圧縮の工程が要りうる（S113）。工程の期間と人手を、別に見積もる。3D スキャンのように購入する素材もある（S108）。本例のコードで作れるのは、式で出せる形までである
- 性能: 粒子数・DPR の上限は目安（出典なし）。実機の fps・消費電力・メモリは測っていない（未検証）。測ってから、劣化の順序を決める
- 画面での確認（2026-11-16）: ソフトウェア描画の WebGL で 1 枚目（粒子が散らばった状態）が描け、2.5 秒後に輪の形に変わった。「もう一度組み上げる」で粒子が散らばった状態に戻った。トグルを押すと `requestAnimationFrame` が 0 回になり、`aria-pressed` が `true` から `false` に変わり、文言は変わらなかった。動きを減らす設定では、1.5 秒間に `requestAnimationFrame` が 0 回で、前後の画像が一致し、2 つのボタンは隠れた。ソフトウェア描画での 2.5 秒間の描画回数は、実行ごとに 36 回から 150 回まで大きく変わった（実機の fps ではない）。`document.hidden` を真にして `visibilitychange` を送ると、0.6 秒間の `requestAnimationFrame` は 0 回だった。WebGL を無効にした起動では、点線の輪の SVG が見えた。描画 DPR は、画面の倍率 3 のとき 2 に抑えられた（512 px の領域で 1024 px）。1440・390・320 px のライトとダークで、横にはみ出さなかった。Safari・Firefox・実機は未確認
- 文脈の喪失の確認（2026-11-16）: 文脈を擬似的に失わせると、層 1 の SVG に戻り、2 つのボタンが隠れ、可視状態の変化の通知が来ても `requestAnimationFrame` は再開しなかった（0.6 秒間で 0 回）。復帰させると、`gl` のクラスが戻り、描画が再開した（canvas は 512 px）
- 直した不具合の再現の確認（2026-11-16）: 最初のフレームの時刻が 5 秒古い状況を作ると、修正前は組み上がった輪が散らばり（輪の外側 235 px より外の粒子の画素が 0 から 8,884）、修正後は輪のままだった（0 から 0。2 回とも）。負荷の高い再実行では、修正前の側が組み上がる前で比べられなかった
- 隣の領域: 製品の形・素材は designer-industrial、サイトの見た目の方向性は designer-web、動きの時間・イージングは designer-interaction（いずれも導入されていれば）

## この例の出典

S27、S39、S40、S41、S43、S48、S49、S50、S51、S55、S56、S60、S61、S62、S64、S87、S107、S108、S112、S113、S118、S121、S122、S126、S127、S129、S131、S147、S148、S150、S151、S158、S159、S160。台帳は `../references/sources.md`。

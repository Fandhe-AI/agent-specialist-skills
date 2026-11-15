# 例: 章ごとに形が変わる背景の 3D を、本文を読める形で作る（年次報告）

読み物の背景に、手続き的に作った点群の 3D を置き、スクロールに合わせて章ごとに形を変える例。題材は架空の天文の年次報告で、実在の媒体の見た目は模倣しない。扱うのは、本文を DOM に置く構成・描画をスクロールのときだけにする予算・動きを減らす設定での切り替え・WebGL が使えないときの章ごとの静止図で、書体・色・レイアウトの様式は扱わない。「スクロールで 3D が変わるサイト」と頼まれたとき、読むことと両立させる設計を決めるために開く。

## 依頼

- 媒体: 架空の天文の年次報告「Orbit Almanac」。3 章の読み物
- 依頼文（架空）: 「章ごとに背景の形（球面上の点・角柱の列・軌道の線）が変わり、スクロールで進む。本文は読みたい」
- 読み手: 報告を読む会員と、一部の章だけ拾い読みする人。キーボードだけで読む人も含む（想定）
- 現状: 本文だけの静止したページ。3D 素材（モデル・撮影）は無い

### 根拠の範囲（先に読む）

- 出典のある事実: 操作で起きる動きは、本質的でない限り、無効化できるようにする（WCAG 2.3.3。レベル AAA。S119）。視差スクロールは、本質的でない動きの例に挙がる（S120）。拡大縮小や大きな物体のパンは、前庭の症状の引き金になりうる（S123）。英語の原文（S120）: "Another animation that is often non-essential is parallax scrolling." 日本語は要旨で、本人の発言ではない
- 描画の方針: 動かない場面で描き続けるのは電力の無駄である（S61、three.js のマニュアル）
- 本文の置き場所: canvas の子要素（代替内容）はフォーカスでき（S129）、canvas が使えないときは代替内容が表示される（S130）。受賞作の事例の中には、UI まで WebGL に描くものがある（S77、S93）。canvas の中だけに文章を置くと読み上げが読めないという開発者の指摘は、区分 C の S131
- 本 skill の目安（出典なし）: 点の数・DPR の上限・形の式・補間の速さ。距離で詳細を切り替える LOD（S58）は、この点群では要らない
- 範囲外: 章の文章の内容、書体・色の様式。手続き的な手法は、準備に時間がかかるので慎重に選ぶ、という制作会社の注意がある（S101）。本例は式が短いので、その範囲に収まる

## 目的の一文

どの章からでも本文を読み進められ、背景の形は「いまどの章か」を補うだけにする。

## 削るもの

| 削るもの | 理由 |
|---|---|
| スクロール位置に完全に縛る演出（スクロールジャック） | 利用者の操作の自由度を下げ、テレビのような提示に戻る失敗がある（S25、Flash への批判。構図が同じになりうるという本 skill の整理） |
| 本文・目次を canvas に描くこと | 読み上げ・キーボード・翻訳に届かない（S131 は区分 C）。HTML に置く |
| 視差・拡大縮小の演出 | 前庭の症状の引き金になりうる（S123）。回転はスクロール量に比例させ、動きを減らす設定では切る |
| 常時描画 | スクロールが止まったら描かない（S61） |
| 章ごとの別素材 | 素材の工程が要る（S164、S85）。形は式で出す |
| 点の数が章ごとに違う設計 | 切り替えの補間が複雑になる。3 つの形を同じ数の点で作った |

削らないもの: 本文・目次リンク・章ごとの静止図（層 1）・スクロールが止まったら止まる描画。

## 構成

1. 層 0（内容と操作）: 固定の目次（`<nav>`。章へのリンク）と、章ごとの `<section>`（見出し・本文）。すべて HTML。スクロールもキーボードも標準のまま
2. 層 1（静止の代替）: 章ごとの小さな静止図（SVG）。WebGL が使えない・JS が無いとき、各章のカードの中に出る
3. 層 2（動く WebGL）: 画面全体に固定した canvas（装飾）。球面・角柱の列・軌道の 3 つの形を、スクロール位置で補間する
4. 重なり: 本文のカードは半透明の地を持ち、背景が透けても読める比を保つ

## 仕様

### 出典あり

| 項目 | 値 | 根拠 |
|---|---|---|
| 描画のタイミング | スクロール・リサイズのときと、補間が収束するまで。収束したら止める | S61 |
| 動きを減らす設定 | 補間せず、最も近い章の形に切り替える。回転しない（S127 は、代わりの動きを出す使い方を述べる。切り替えへの置き換えは本 skill の整理） | S122、S127 |
| 操作で起きる動き | 動きを減らす設定で無効にできる（上のとおり） | S119 |
| 視差・拡大縮小 | 使わない。回転はスクロール量に連動するだけ | S120、S123 |
| 文脈の喪失 | 既定の動作を止めて層 1 を見せ、戻ったら作り直す | S158、S159 |
| 文脈が取れないとき | `getContext` が `null` なら層 1 | S151 |
| 本文 | canvas の外の HTML | S129、S131（C） |

### 本 skill の目安（出典なし）

| 項目 | 値 | 理由 |
|---|---|---|
| 点の数 | 画面が狭い・主入力がタッチなら 1,200、それ以外は 3,000 | 3 つの形で同じ数。測って増減する |
| 描画 DPR の上限 | 1.5 | 全画面の canvas は画素が多いので低めにする |
| シェーダーの精度 | フラグメントシェーダーは `mediump`。扱う値は `gl_PointCoord`（0〜1）と色だけで、範囲を超えない。位置と投影の計算は頂点シェーダー（`highp` が必須）で行う。スクロールの位置・補間は JS（倍精度）で計算して渡す | `mediump` に落ちる実装でも、中間値が範囲内 |
| 形 | 球面（フィボナッチ格子）・10 × 10 の角柱・傾きの違う 3 本の楕円 | どれも式だけで作れる。乱数を使わないので、描くたびに同じ |
| 補間 | 指数の追従（毎秒 8 の速さ）。差が 0.002 未満で止める | 収束したら描画を止めるため |
| 縦長の画面 | 縦長のときは横幅を基準にカメラを決める。さらに、章ごとのカメラ距離を持つ（球面 4.2・角柱 5.8・軌道 4.6）。点の大きさは距離に比例させる | 角柱は横に広がり、同じ距離ではみ出した。実測は「点検」 |
| 劣化の順序 | (1) 点の数を減らす (2) DPR の上限を下げる (3) 補間をやめて切り替えだけにする (4) 層 1 | 軽い順。実機で測って決める。本例のコードは、この順で自動に落とす実装を持たない（手動・未実装） |
| 章の位置 | 章の位置（`offsetTop` など）は、読み込み・resize のときに測ってキャッシュする。スクロールのたびには読まない | レイアウトの強制を避ける |
| resize | canvas の大きさ（幅か高さ）が変わったときに作り直し、投影の縦横比を保つ。補間の位置（`cur`）は保つので、形は飛ばない。canvas の高さは `100lvh`（大きいほうの画面の高さ）にして、モバイルのアドレスバーの出入りでは大きさが変わらないようにする | 高さだけ変えて作り直さないと、形が縦に潰れる。アドレスバーでの確認は実機で、未検証 |
| 図と本文 | 図は雰囲気を示す装飾で、数値や実際の形を表さない。本文は、図の内容を断定しない | 点の数は端末で変わり、形は式の飾りである |

### 色と文字

カードの地は半透明で、背景の点が透ける。点が最も透けて読みにくくなる最悪の場合で、WCAG の相対輝度式で計算した（基準の 4.5:1 は、本台帳に原文が無く未照合）。

| 配色 | 文字 | カードの地（最悪の場合） | 比 |
|---|---|---|---|
| ライト | `#17203a` | `#f3f1ea` の 92 % の下に最も濃い点 `#17203a` 相当が透ける（約 `#e1e0dc`） | 12.19 |
| ダーク | `#eef2ff` | `#0b1020` の 90 % の下に最も明るい点（白）が透ける（約 `#232836`） | 13.15 |

## 文言

| 場所 | 文言 |
|---|---|
| 目次 | 1 最初の観測／2 望遠鏡の更新／3 これからの計画（`aria-label` は「章の目次」） |
| 1 章 | 最初の観測。この章は、観測所が最初の年に集めた記録をまとめる。背景の図は雰囲気を示す装飾で、数値は表さない。 |
| 2 章 | 望遠鏡の更新。この章は、望遠鏡を更新した経緯をまとめる。背景の図は、章ごとに形が変わる装飾で、記録の数を表さない。 |
| 3 章 | これからの計画。この章は、次の観測計画をまとめる。背景の図は装飾で、軌道の実際の形を表さない。 |
| canvas・静止図 | 装飾（`aria-hidden`）。意味は本文にある |

## コード断片

外部のライブラリ・スクリプト・フォント・計測は使わない。素の WebGL（WebGL 1）で、3 つの形を頂点属性に持ち、重みで混ぜる。スクロールのときだけ描き、補間が収束したら止める。

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Orbit Almanac 年次報告</title>
<style>
  :root { color-scheme: light dark; --bg: #f3f1ea; --fg: #17203a; --card: rgb(243 241 234 / 0.92); --line: #17203a; }
  @media (prefers-color-scheme: dark) { :root { --bg: #0b1020; --fg: #eef2ff; --card: rgb(11 16 32 / 0.9); --line: #a9c0ff; } }
  @media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--fg); font: 16px/1.7 system-ui, sans-serif; }
  /* 高さは lvh（大きいほうの画面の高さ）にする。モバイルのアドレスバーの出入りで canvas の大きさが変わらないようにするため */
  #bg { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; height: 100lvh; z-index: -1; display: none; }
  html.gl #bg { display: block; }
  nav { position: sticky; top: 0; display: flex; flex-wrap: wrap; gap: 0.5rem 1.25rem; padding: 0.75rem 1.25rem; background: var(--card); }
  nav a { color: inherit; }
  section { min-height: 100vh; display: grid; align-content: center; padding: 2rem 1.25rem; }
  .card { max-width: 26rem; padding: 1.25rem 1.5rem; background: var(--card); border: 1px solid var(--line); border-radius: 0.5rem; }
  h2 { margin: 0 0 0.5rem; font-size: 1.5rem; line-height: 1.3; }
  .card p { margin: 0; }
  .still { display: block; width: 8rem; height: 8rem; margin-top: 1rem; color: var(--line); }   /* 層 1: 章ごとの静止図 */
  html.gl .still { display: none; }
  @media (min-width: 48rem) { section { padding-left: 4rem; } }
</style>
</head>
<body>
<canvas id="bg" aria-hidden="true"></canvas>
<nav aria-label="章の目次">
  <a href="#ch1">1 最初の観測</a><a href="#ch2">2 望遠鏡の更新</a><a href="#ch3">3 これからの計画</a>
</nav>
<main>
  <section id="ch1"><div class="card">
    <h2>1 最初の観測</h2>
    <p>この章は、観測所が最初の年に集めた記録をまとめる。背景の図は雰囲気を示す装飾で、数値は表さない。</p>
    <svg class="still" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <circle cx="50" cy="50" r="40"/><ellipse cx="50" cy="50" rx="40" ry="14"/><ellipse cx="50" cy="50" rx="14" ry="40"/>
    </svg>
  </div></section>
  <section id="ch2"><div class="card">
    <h2>2 望遠鏡の更新</h2>
    <p>この章は、望遠鏡を更新した経緯をまとめる。背景の図は、章ごとに形が変わる装飾で、記録の数を表さない。</p>
    <svg class="still" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <rect x="10" y="60" width="12" height="30"/><rect x="28" y="40" width="12" height="50"/><rect x="46" y="20" width="12" height="70"/>
      <rect x="64" y="50" width="12" height="40"/><rect x="82" y="30" width="8" height="60"/>
    </svg>
  </div></section>
  <section id="ch3"><div class="card">
    <h2>3 これからの計画</h2>
    <p>この章は、次の観測計画をまとめる。背景の図は装飾で、軌道の実際の形を表さない。</p>
    <svg class="still" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <ellipse cx="50" cy="50" rx="18" ry="8" transform="rotate(-20 50 50)"/><ellipse cx="50" cy="50" rx="30" ry="14" transform="rotate(10 50 50)"/>
      <ellipse cx="50" cy="50" rx="42" ry="20" transform="rotate(40 50 50)"/>
    </svg>
  </div></section>
</main>
<script>
(() => {
  const canvas = document.getElementById('bg');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const dark = matchMedia('(prefers-color-scheme: dark)');
  const small = matchMedia('(max-width: 640px), (pointer: coarse)');
  const N = small.matches ? 1200 : 3000;       // 点の数（本 skill の目安。出典なし）
  const MAX_DPR = 1.5;                         // 全画面 canvas なので低めに抑える（本 skill の目安）
  const root = document.documentElement;
  const sections = [...document.querySelectorAll('section')];

  const VERT = `
attribute vec3 aA; attribute vec3 aB; attribute vec3 aC;
uniform vec3 uW; uniform mat4 uMvp; uniform float uSize;
void main() {
  vec4 pos = uMvp * vec4(aA * uW.x + aB * uW.y + aC * uW.z, 1.0);
  gl_Position = pos;
  gl_PointSize = max(1.5, uSize / pos.w);
}`;
  const FRAG = `
precision mediump float;
uniform vec3 uColor;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = 1.0 - smoothstep(0.2, 0.5, d);               // edge0 < edge1 の順で書く
  gl_FragColor = vec4(uColor * a, a);
}`;

  // 3 つの形を同じ点の数で作る（手続き的。乱数を使わない）
  const A = new Float32Array(N * 3), B = new Float32Array(N * 3), C = new Float32Array(N * 3);
  const GOLD = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - 2 * (i + 0.5) / N, r = Math.sqrt(1 - y * y), th = i * GOLD;     // 球面（フィボナッチ格子）
    A.set([1.3 * r * Math.cos(th), 1.3 * y, 1.3 * r * Math.sin(th)], i * 3);
    const c = i % 100, gx = c % 10, gz = (c / 10) | 0, t = Math.floor(i / 100) / (N / 100);   // 10×10 の角柱
    const h = 0.4 + 1.6 * (0.5 + 0.5 * Math.sin(gx * 0.9 + gz * 0.6));
    B.set([(gx - 4.5) * 0.28, -0.9 + t * h, (gz - 4.5) * 0.28], i * 3);
    const k = i % 3, u = (Math.floor(i / 3) / (N / 3)) * Math.PI * 2, a = 0.55 + 0.3 * k, tilt = 0.5 * k - 0.4;   // 3 本の軌道
    C.set([a * 1.5 * Math.cos(u), a * 0.5 * Math.sin(u) * Math.sin(tilt), a * 1.1 * Math.sin(u) * Math.cos(tilt)], i * 3);
  }

  const DIST = [4.2, 5.8, 4.6];                // 章ごとのカメラ距離（本 skill の目安）。角柱は広がるので遠くする
  function mvp(angle, aspect, dist) {
    const f = 1 / Math.tan(0.4), n = 0.1, fa = 20, cy = Math.cos(angle), sy = Math.sin(angle), t = 0.45, ct = Math.cos(t), st = Math.sin(t);
    const R = [cy, st * sy, -ct * sy, 0,   0, ct, st, 0,   sy, -st * cy, ct * cy, 0,   0, 0, -dist, 1];
    const g = aspect < 1 ? f * aspect : f;      // 縦長の画面では横幅を基準にして、形がはみ出さないようにする
    const P = [g / aspect, 0, 0, 0,   0, g, 0, 0,   0, 0, (fa + n) / (n - fa), -1,   0, 0, 2 * fa * n / (n - fa), 0];
    const o = new Float32Array(16);
    for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) { let s = 0; for (let k = 0; k < 4; k++) s += P[k * 4 + r] * R[c * 4 + k]; o[c * 4 + r] = s; }
    return o;
  }

  let gl = null, loc = {}, raf = 0, last = 0, target = 0, cur = 0, lost = false, lastW = 0, lastH = 0, mids = [];

  function compile(type, src) {
    const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    return s;
  }
  function build() {
    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    gl.useProgram(prog);
    for (const [name, data] of [['aA', A], ['aB', B], ['aC', C]]) {
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      const l = gl.getAttribLocation(prog, name); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, 3, gl.FLOAT, false, 0, 0);
    }
    for (const u of ['uW', 'uMvp', 'uSize', 'uColor']) loc[u] = gl.getUniformLocation(prog, u);
    gl.enable(gl.BLEND);
    resize();
  }
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    canvas.width = Math.max(1, Math.round(canvas.clientWidth * dpr));
    canvas.height = Math.max(1, Math.round(canvas.clientHeight * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
    lastW = canvas.clientWidth; lastH = canvas.clientHeight;
    measure(); readScroll(); draw();           // 補間の位置（cur）は保つ。resize で形が飛ばないようにする
  }
  function measure() {                         // 章の位置は、レイアウトが変わったときだけ読む（スクロールのたびに読まない）
    mids = sections.map((s) => s.offsetTop + s.offsetHeight / 2);
  }
  function readScroll() {                      // スクロール位置 → 章の位置（0 から 2 の小数）
    const y = window.scrollY + window.innerHeight / 2;
    let p = 0;
    for (let i = 0; i < mids.length - 1; i++) if (y > mids[i]) p = i + Math.min(1, (y - mids[i]) / (mids[i + 1] - mids[i]));
    target = reduce.matches ? Math.round(p) : p;                 // 置き換え: 補間せず章の境目で切り替える
  }
  function draw() {
    const w = [0, 1, 2].map((i) => Math.max(0, 1 - Math.abs(cur - i)));
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    if (dark.matches) { gl.blendFunc(gl.ONE, gl.ONE); gl.uniform3f(loc.uColor, 0.55, 0.68, 1.0); }
    else { gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA); gl.uniform3f(loc.uColor, 0.09, 0.13, 0.23); }
    gl.uniform3f(loc.uW, w[0], w[1], w[2]);
    const dist = w[0] * DIST[0] + w[1] * DIST[1] + w[2] * DIST[2];
    gl.uniformMatrix4fv(loc.uMvp, false, mvp(0.4 + (reduce.matches ? 0 : cur * 0.6), canvas.width / canvas.height, dist));
    gl.uniform1f(loc.uSize, canvas.height * 0.012 * dist);   // 距離に比例させ、画面での点の大きさを一定にする
    gl.drawArrays(gl.POINTS, 0, N);
  }
  function frame(now) {                        // 動いている間だけ回し、収束したら止める（常時描画しない）
    raf = 0;
    const dt = Math.max(0, Math.min((now - last) / 1000, 0.1)); last = now;   // 負の値（古い時刻）は進めない
    cur += (target - cur) * Math.min(1, dt * 8);
    if (Math.abs(target - cur) < 0.002) cur = target;
    draw();
    if (cur !== target) raf = requestAnimationFrame(frame);
  }
  function schedule() {
    if (!gl || lost || raf) return;
    if (reduce.matches) { cur = target; draw(); return; }
    last = performance.now(); raf = requestAnimationFrame(frame);
  }

  gl = canvas.getContext('webgl', { antialias: false, depth: false, powerPreference: 'low-power' });
  if (gl) {
    root.classList.add('gl');                  // canvas を表示してから大きさを測る
    try { build(); cur = target; draw(); } catch (e) { gl = null; root.classList.remove('gl'); }
  }
  if (!gl) return;

  window.addEventListener('scroll', () => { readScroll(); schedule(); }, { passive: true });
  // canvas の大きさが変わったときだけ作り直す（縦横比を保つため）。アドレスバーの出入りは、lvh で canvas の大きさに影響しない
  const onResize = () => {
    measure();
    if (canvas.clientWidth !== lastW || canvas.clientHeight !== lastH) resize(); else readScroll();
    schedule();
  };
  window.addEventListener('resize', onResize);
  window.addEventListener('load', onResize);   // 書体・画像の読み込みで章の高さが変わるため
  reduce.addEventListener('change', () => { readScroll(); cur = target; draw(); });
  dark.addEventListener('change', () => draw());
  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); lost = true; cancelAnimationFrame(raf); raf = 0; root.classList.remove('gl'); });
  canvas.addEventListener('webglcontextrestored', () => {
    try { root.classList.add('gl'); build(); cur = target; draw(); lost = false; } catch (e) { root.classList.remove('gl'); }   // canvas を表示してから測る。失敗したら層 1 のまま
  });
})();
</script>
</body>
</html>
```

仕様との突き合わせ: 点の数は `N`（1,200 または 3,000）。`html.gl` のクラスで canvas を表示してから大きさを測る。`scroll-behavior: smooth` は、動きを減らす設定でないときだけ付けている。320 px の幅でも横にはみ出さない。

### ライブラリを使う場合

three.js の `Points` と `ShaderMaterial` で、同じ構造を作れる。補間の重みは `uniform` で渡し、3 つの形は `BufferGeometry` の属性に持つ。

- 版は three@0.187.0（r187。S147。S148 は区分 R）に固定する。`@latest`・範囲指定・版の省略・タグ名は使わない。import map で版を明示し（S43）、完全性は `integrity`（S49）。r187 の `three.module.js` は `./three.core.js` を読み込むので、両方の URL に付ける（2026-11-16 に取得したファイルで確認。出典なし）。ハッシュの値・別の経路での照合・`integrity` に対応しないブラウザの扱い・CSP は `shader-gradient-background.md` の同名の小節にある。版を変えたらハッシュも計算し直し、合わなくても `integrity` を外さない
- 手書きの GLSL は `WebGLRenderer` に固定する（S40、S41）
- スクロールのときだけ描く方針は、three.js でも同じである。常時のループを回さない（S61）。three.js のマニュアルは、連続して描くのは電力の無駄だと述べる（S61）
- 使い終えた資源は自分で解放する（S60、S55）

未実行（本節のコードは描画を確かめていない）:

```html
<script type="module">
import * as THREE from 'three';                   // import map と integrity は上の注意のとおり
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(A, 3));   // 章 1 の形。A・B・C は本体の式で作る
geometry.setAttribute('aB', new THREE.BufferAttribute(B, 3));
geometry.setAttribute('aC', new THREE.BufferAttribute(C, 3));
const dark = matchMedia('(prefers-color-scheme: dark)').matches;
const material = new THREE.ShaderMaterial({
  uniforms: { uW: { value: new THREE.Vector3(1, 0, 0) }, uSize: { value: 40 }, uColor: { value: dark ? new THREE.Vector3(0.55, 0.68, 1.0) : new THREE.Vector3(0.09, 0.13, 0.23) } },   // 色は本体と同じ値（配色で切り替える）。THREE.Color は色空間の変換が入る
  vertexShader: `
    attribute vec3 aB; attribute vec3 aC; uniform vec3 uW; uniform float uSize;
    void main() {
      vec4 mv = modelViewMatrix * vec4(position * uW.x + aB * uW.y + aC * uW.z, 1.0);
      gl_Position = projectionMatrix * mv;
      gl_PointSize = max(1.5, uSize / -mv.z);
    }`,
  // FRAG は、本体の GLSL の文字列定数をこの module に写して使う。uniform vec3 uColor の宣言ごと使う。ShaderMaterial が付けるのは組み込みだけで、uW・uSize・uColor は自分で宣言する
  fragmentShader: FRAG,
  transparent: true, depthWrite: false, premultipliedAlpha: true,
  blending: dark ? THREE.AdditiveBlending : THREE.NormalBlending   // 本体と同じ
});
// scene・camera・Points の追加は `particle-product-hero.md` の同名の節と同じ。カメラ距離は章ごとに変える
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg'), antialias: false, alpha: true, powerPreference: 'low-power' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
// スクロールのときに uW を更新して renderer.render(scene, camera) を 1 回呼ぶ。収束するまで rAF で回し、止める
</script>
```

## 初見検証

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 3 章の報告で、章ごとに背景の形が変わる | 目次と章の見出し |
| 何を操作できるか | スクロールで章を進める。目次で章へ飛ぶ | 目次のリンク |
| どう操作するか | スクロール、または目次のリンク。キーボードの Tab と Enter でも | 目次 |

観察で確かめる: (1) 背景を見ずに、章の本文を最後まで読めたか。(2) 目次のリンクで、スクロールせずに章へ移動できたか。(3) キーボードだけで同じことができたか。(4) 動きを減らす設定にして、背景が補間せずに切り替わるか、それでも章がわかるか。(5) WebGL が無い環境で、章ごとの静止図が出るか。(6) 実機で、スクロールが重くないか（本例では測っていない）。

## 点検

- 3 層の分担: 本文・目次は DOM（層 0）。背景が WebGL（層 2）。WebGL が無いとき、章ごとの SVG（層 1）に置き換わる。canvas は装飾（`aria-hidden`）
- 動き: 動きを減らす設定では補間も回転も無く、章の境目で形が切り替わる（S122。置き換えは S127 の考え方で、切り替えは本 skill の整理）。視差・拡大縮小は無い（S120、S123）
- 描画: スクロールが止まって補間が収束したら、`requestAnimationFrame` を回さない（S61）
- 文脈の喪失: `webglcontextlost` で層 1 に戻し、`webglcontextrestored` で作り直す（S158、S159）
- 支援技術: 実務者は、操作部の上に見えない HTML を重ねる方法や、ARIA のライブリージョンとキーボードハンドラーを使う方法を挙げる（S161、区分 C）。後者には、音声認識や点字ディスプレイでの欠点がある（S162、区分 C）。別の単純な体験を用意する案もある（S163。質問者の案、区分 C）。本例は、操作を DOM に置く方針で、これらの手間を避けた。実際の支援技術での確認は未実施
- 性能: 点の数・DPR の上限・補間の速さは目安（出典なし）。実機のスクロールの滑らかさ・消費電力は測っていない（未検証）
- 画面での確認（2026-11-16）: ソフトウェア描画の WebGL で、章 1 から 3 まで形が変わり、前後の画像が変わった。収束したあとの 1.2 秒間に `requestAnimationFrame` は 0 回だった。WebGL を無効にした起動では、章ごとの静止図が出て、`html` に `gl` のクラスは付かなかった。動きを減らす設定では、章 1 と章 2 の中間の位置でも補間されず、章 2 の形に切り替わった（背景の画像が章 2 の位置と一致）。Tab を 2 回押して Enter で、目次の 2 番目のリンクから `#ch2` に移動できた。1440・390・320 px のライトとダークで、横にはみ出さなかった。Safari・Firefox・実機は未確認
- 操作の確認（2026-11-16）: 目次の 3 つのリンクをクリックすると、それぞれ `#ch1`・`#ch2`・`#ch3` に移り、章の先頭が画面の上端に来た（`scroll-behavior: smooth` の最中は、移動の途中の値になる）。動きを減らす設定でも、3 番目のリンクで `#ch3` に移った
- 文脈の喪失の確認（2026-11-16）: 文脈を擬似的に失わせると、`html` の `gl` のクラスが外れ、章ごとの静止図が出た。復帰させると、`gl` のクラスが戻り、描画の解像度は 1440 で、喪失の前と同じ画像になった（差 0 画素）。復帰後のスクロールでも形が変わった
- 直した不具合の再現の確認（2026-11-16）: 縦長の画面で形が端にかかるか（カードと目次を隠して、画面の端 3 画素に形の画素があるかを数えた）。修正前は、390 × 844 の章 2 で左端 258 画素・右端 26 画素、320 × 640 の章 2 で左端 179 画素・右端 20 画素、1280 × 900 の章 2 で下端 156 画素だった。修正後は、3 つの大きさの 3 章すべてで 0 画素だった。窓の高さだけを 900 から 500 に変えると（幅は 1440 のまま）、球の外接枠は 704 × 704 から 390 × 390 になり、丸いままだった（canvas を作り直さずに縦横比を投影から取る案は採らず、大きさが変わったら作り直す形にした。作り直しでも補間の位置は保つ）。モバイルのアドレスバーの出入りは、実機で確かめていない（未検証）
- 隣の領域: スクロール演出の時間・イージングは designer-interaction、本文の書体・色は designer-typography・designer-web（いずれも導入されていれば）

## この例の出典

S25、S40、S41、S43、S49、S55、S58、S60、S61、S77、S85、S93、S101、S119、S120、S122、S123、S127、S129、S130、S131、S147、S148、S151、S158、S159、S161、S162、S163、S164。台帳は `../references/sources.md`。

# 例: 番号から決まる線と円で、ポスターと Web 版を作る（朗読会の告知）

番号（seed）から線と円の構成を作り、印刷用の SVG と、Web 用の網点風の見た目を出す例。題材は架空の朗読会で、実在の催しやポスターは模倣しない。扱うのは、生成の出力を誰が選ぶか・同じ番号なら同じ形になる設計・書き出し・WebGL が使えないときに層 1（SVG）が本線になる構成で、印刷の色や解像度の管理は扱わない。「ジェネラティブなポスターを作りたい」「毎回違う絵にしたい」と言われたとき、出力を選ぶ段階を設計に入れるために開く。

## 依頼

- 媒体: 架空の小さな朗読会「夜の図書館」の告知。印刷するポスターと、Web の告知ページに載せる図
- 依頼文（架空）: 「番号から線と円の構成を生成して、印刷用のポスターと、Web 用のバリエーションを出したい」
- 読み手: 図書館の掲示板を見る人と、Web の告知を見る人。日時と会場を読み取れればよい
- 現状: 手作業で描いた 1 枚の絵。日時・会場は別にある

### 根拠の範囲（先に読む）

- 出典のある事実: 従来の生成芸術には、多数の出力から少数の好みを選ぶ「キュレーション」の段階が、ほぼ常にあった（S30）。英語の原文（S30）: "Historically, generative art had some typical qualities that were taken for granted. First, there was almost always a "curation" step. The artist could generate as many outputs as they pleased and then filter those down to a small set of favorites." 日本語は要旨で、本人の発言ではない
- 規則を書いて検証する姿勢: Vera Molnár は、系を作り、変化と自分への作用を確かめる実験の方法として説明した（S03。インタビューの英語。日本語にするときは重訳）。英語の原文（S03）: "It’s an experimental method, [taken] step by step." 日本語は要旨
- 本文の置き場所: 日時・会場は HTML の本文に置く。画像の中に閉じ込めない（canvas の代替内容は S129。canvas の中の文章が読み上げに読めないという指摘は区分 C の S131）
- 本 skill の整理（推測。出典なし）: Web では閲覧者ごとの出力を作者が選別できない。そのため、既定は seed を固定した 1 枚にし、閲覧者が番号を変える操作はオプションにする。出力の範囲（円・線の数と大きさの幅）を設計で絞る
- 範囲外: 印刷の色・解像度・用紙（導入されていれば designer-typography・designer-brand）、フォントの扱い。ポスターの文面のレイアウト

## 目的の一文

朗読会の日時と会場を読んで来てもらう。図は、番号から決まる構成で、同じ番号ならいつでも同じ形になり、印刷と Web で同じ元から出る。

## 削るもの

| 削るもの | 理由 |
|---|---|
| 毎回ランダムな構成 | 作者が選別できない（S30）。番号を固定し、選んだ番号だけを公開する |
| 常に動くアニメーション | 動きの必要が無い。静止が既定で、動きを減らす設定でも同じ見た目になる |
| 日時・会場を図の中に描くこと | 読み上げ・検索・翻訳に届かない（S129、S131 は区分 C）。HTML に置く |
| WebGL だけの実装 | WebGL が使えない環境で図が消える。層 1 の SVG を既定・原本にする |
| 画面の配色に依存する書き出し | 印刷用の SVG は、紙色と墨色を固定する。画面のダークとは別物 |
| 数千の円・線 | 円 10・線 6 で足りる。出力の幅も絞れる |

削らないもの: 番号の入力、別の構成に進むボタン、SVG の保存、日時・会場の本文。

## 構成

1. 選別の段階（作者の作業。コードの外）: 番号を 0 から多数試し、気に入った少数を選ぶ（S30）。選んだ番号を、印刷用と Web 用の既定にする
2. 層 0（内容と操作）: 見出し・日時・会場・番号の入力・「別の構図」・「SVG で保存」。HTML
3. 層 1（静止の本線）: 番号から作る SVG。画面にもこれを出し、書き出しの原本にもする。WebGL が無くても、この層で完結する
4. 層 2（任意の拡張）: 「網点の質感で見る」を押したときだけ、同じ構成を WebGL の網点風で描く。1 回描くだけで、アニメーションは無い

## 仕様

### 出典あり

| 項目 | 値 | 根拠 |
|---|---|---|
| 生成の出力の扱い | 多数から少数を選ぶ段階を設ける。Web の既定は seed を固定した 1 枚 | S30（段階の存在）。固定は本 skill の整理 |
| 規則と検証 | 規則（円と線の数・幅）を先に書き、番号を変えて結果を確かめる | S03（姿勢） |
| 本文 | 日時・会場は HTML | S129、S131（C） |
| 文脈が取れないとき | `getContext` が `null` なら、網点のボタンを隠す（層 1 のまま） | S151 |
| 文脈の喪失 | 網点の表示をやめて SVG に戻す。戻ったら作り直す | S158、S159 |

### 本 skill の目安（出典なし）

| 項目 | 値 | 理由 |
|---|---|---|
| 座標系 | 300 × 400（3:4） | ポスターの縦横比。拡大しても崩れない SVG |
| 円 | 10 個。中心 x 30〜270、y 40〜360、半径 12〜70、濃さ 0.25・0.5・0.75・1 | 出力の幅を絞る |
| 線 | 6 本。角度は 45 度の倍数、長さ 80〜220 | 同上 |
| 番号 | 0〜9999 の整数。空欄・範囲外・小数・文字列は、既定の 7 に戻し、欄の表示も 7 に戻す（`valueAsNumber` は、不正値や空欄で NaN になる） | 入力は数値だけにして、SVG の文字列に混ぜない |
| 乱数 | 番号を一度混ぜて（整数の混合関数）から、線形合同法の初期値にする。定数は広く知られた既存の値（0x9e3779b9・0x85ebca6b・0xc2b2ae35・1664525・1013904223）で、由来と利用条件は未確認（出典なし） | 同じ番号なら同じ構成。混ぜないと、隣の番号で先頭の円が一定量ずつ動く |
| 網点 | 45 度の格子、1 つの大きさは座標系で 5。濃さは格子の中心で決める | 印刷の網点風の見た目 |
| 重なりの濃さ | SVG は透過の重なり、網点は最大値（一致しない） | 簡略化。両者の差は仕様として許す |
| 描画 DPR の上限 | 2 | 1 回描くだけだが、画素数は抑える |
| 書き出しの色 | 紙 `#f2eee4`、墨 `#1c2b4a`（固定）。色の文字列は `#` と 6 桁の 16 進、`currentColor`、`none` だけを通す | 画面の配色と切り離す。色を利用者の入力にしても注入点にならないようにする |
| 書き出しの大きさ | `width="300mm" height="400mm"` と `viewBox` を付ける（寸法は例。用紙に合わせて変える） | 単体で開いたときの表示の大きさを決める |
| 網点の座標 | 図の単位を 400 で割って（高さが 1、幅が 0.75）シェーダーに渡す。円の中心・半径、線の端点、網目の大きさ（5 ÷ 400）、線の太さの比較（距離 × 400）も同じ尺度にする | 正規化しないと、線の長さ最大 220 で `dot(ba, ba)` が約 48,400 になり、`mediump` の保証範囲（±2^14 = 16,384）を超える |
| 網点の中間値の最大 | `dot(ba, ba)` は 0.31 以下（線の長さ最大 220 ÷ 400 の二乗）、距離の二乗と `dot(pa, ba)` は約 1.6 以下、網目の座標は 100 以下（番号 0〜9999 の全 10,000 構成で計算した） | どれも `mediump` の範囲に収まる。`mediump` の実装でも線が欠けない |
| varying・uniform の精度 | 本例のシェーダーに varying は無い。uniform はフラグメントだけで宣言し、頂点は宣言しない | 精度の食い違いが起きない（GLSL ES 1.00 の規定は S201） |
| 網点の精度 | `getShaderPrecisionFormat(FRAGMENT_SHADER, HIGH_FLOAT)` の `precision` が 0 より大きければ `highp`、そうでなければ `mediump` で組み立てる | 上のとおり中間値を範囲内にしたので、どちらの分岐でも同じ見た目になる。分岐は、`mediump` でコンパイルに通るので、コンパイル失敗による SVG への代替は働かない（中間値を範囲内にして防ぐ） |
| 文脈の喪失中 | 網点のボタンを隠し、SVG を見せる。復帰したらボタンを戻す。喪失した時点で、状態の文字も `aria-pressed` と同じ値から作り（「通常」）、隠れている間も復帰したあとも食い違わせない | 喪失中に押すと、図が消える。隠れるボタンの状態が古いままだと、復帰したときに食い違う |
| 網点トグルの状態 | ラベル「網点の質感で見る」は固定する。状態は、支援技術へは `aria-pressed`、目には同じ値から作る短い文字「網点」「通常」で示す。塗りの有無だけで状態を示さない。状態の文字は `aria-hidden="true"` でトグルの中に置き、ボタンの名前に入れない | 表示を切り替えるトグルでも、塗りの有無だけでは、どちらが「オン」か読み違えやすい。動かす・止めるトグルと同じ形にそろえる |
| 網点トグルの幅 | 見えない sizer に「網点」「通常」の両方を入れ、長い方に幅を固定する。押しても、ボタンの位置と、行の折り返しを変えない | 隣の番号入力・ボタン・リンクがずれない。語の長さが変わったときのためで、「網点」「通常」は同じ 2 字なので、sizer を外しても幅は同じだった（本 skill の整理） |

### 色と文字

| 配色 | 文字 | 地 | 比 |
|---|---|---|---|
| ライト | `#1c2b4a` | `#f2eee4` | 12.13 |
| ダーク | `#e6dcc3` | `#141821` | 13.02 |

WCAG の相対輝度式で計算した（基準の 4.5:1 は、本台帳に原文が無く未照合）。

## 文言

| 場所 | 文言 |
|---|---|
| 見出し | 夜の図書館 朗読会 |
| 本文 | 5 月 10 日（土）19:00 開演。会場は港町ホール 2 階。入場無料、先着 40 名。 |
| 説明 | 図は、番号から決まる線と円の構成。同じ番号なら、いつでも同じ形になる。 |
| 操作 | 構図の番号／別の構図／網点の質感で見る（トグル。ラベルは固定。`aria-pressed` が `true` なら網点の表示、`false` なら通常の表示）／この構図を SVG で保存 |
| トグルの状態の文字 | 網点／通常（`aria-pressed` と常に一致させる。`aria-hidden="true"` で、ボタンの名前には入れない。ラベルと同じ色。状態の文字で幅を変えない。見えない sizer に両方の文字を入れ、長い方に固定する） |
| 図 | 装飾（`aria-hidden`）。意味は本文にある |

## コード断片

外部のライブラリ・スクリプト・フォント・計測は使わない。`compose(seed)` が構成を返し、`toSvg` が画面の SVG と書き出しの SVG を作り、網点は同じ構成を WebGL（WebGL 1）の 1 枚のシェーダーで描く。SVG の文字列には、数値の書式化と、検査した固定の色だけを入れる。

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>夜の図書館 朗読会</title>
<style>
  :root { color-scheme: light dark; --paper: #f2eee4; --ink: #1c2b4a; --fg: #1c2b4a; }
  @media (prefers-color-scheme: dark) { :root { --paper: #141821; --ink: #e6dcc3; --fg: #e6dcc3; } }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--paper); color: var(--fg); font: 16px/1.7 system-ui, sans-serif; }
  .page { display: grid; gap: 1.5rem; align-items: start; max-width: 60rem; margin: 0 auto; padding: clamp(1rem, 4vw, 3rem); }
  @media (min-width: 48rem) { .page { grid-template-columns: 24rem 1fr; } }
  #poster { position: relative; width: 100%; max-width: 24rem; aspect-ratio: 3 / 4; margin: 0; color: var(--ink);
            border: 1px solid currentColor; }
  #poster svg, #poster canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
  #poster canvas { display: none; }
  #poster.gl canvas { display: block; }
  #poster.gl svg { display: none; }
  h1 { margin: 0 0 0.5rem; font-size: clamp(1.75rem, 6vw, 2.5rem); line-height: 1.25; overflow-wrap: anywhere; }
  p { margin: 0 0 1rem; }
  .row { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; }
  button, input, a.btn { font: inherit; color: inherit; background: transparent; border: 1px solid currentColor; border-radius: 0.25rem; padding: 0.5rem 0.875rem; }
  input { width: 6rem; }
  a.btn { text-decoration: none; display: inline-block; }
  [hidden] { display: none !important; }
  #halftone .state { display: inline-block; margin-left: 0.625rem; padding-left: 0.625rem; border-left: 1px solid currentColor; }   /* 状態の文字。塗りの有無では示さない */
  #halftone .state::before { content: "網点\A通常"; display: block; height: 0; overflow: hidden; visibility: hidden; white-space: pre; }   /* 幅を長い方に固定する（押しても動かない）。基準線は実際の文字の行 */
</style>
</head>
<body>
<main class="page">
  <figure id="poster"><!-- 層 1: JS が SVG を描く。既定の表示であり、書き出しの原本でもある --><canvas aria-hidden="true"></canvas></figure>
  <div>
    <h1>夜の図書館 朗読会</h1>
    <p>5 月 10 日（土）19:00 開演。会場は港町ホール 2 階。入場無料、先着 40 名。</p>
    <p>図は、番号から決まる線と円の構成。同じ番号なら、いつでも同じ形になる。</p>
    <div class="row">
      <label>構図の番号 <input id="seed" type="number" min="0" max="9999" step="1" value="7"></label>
      <button type="button" id="next">別の構図</button>
      <button type="button" id="halftone" aria-pressed="false" hidden>網点の質感で見る<span class="state" aria-hidden="true">通常</span></button>
      <a class="btn" id="save" download="poster.svg" href="#">この構図を SVG で保存</a>
    </div>
  </div>
</main>
<script>
(() => {
  const W = 300, H = 400, NC = 10, NL = 6;     // 図の座標系（3:4）と、円・線の数
  const poster = document.getElementById('poster');
  const canvas = poster.querySelector('canvas');
  const seedEl = document.getElementById('seed');
  const btnHalf = document.getElementById('halftone');
  const halfState = btnHalf.querySelector('.state');
  const link = document.getElementById('save');
  const MAX_DPR = 2;                           // 描画 DPR の上限（本 skill の目安。出典なし）

  // 番号 → 構成。番号は一度混ぜてから、線形合同法の初期値にする（隣の番号で先頭の円が一定量ずつ動くのを避ける）。同じ番号なら同じ構成になる。
  // 混ぜる定数（0x9e3779b9・0x85ebca6b・0xc2b2ae35）と、線形合同法の定数（1664525・1013904223）は、広く知られた既存の値で、由来と利用条件は未確認（出典なし）
  function compose(seed) {
    let h = seed + 0x9e3779b9;
    h = Math.imul(h ^ (h >>> 16), 0x85ebca6b); h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35); h ^= h >>> 16;
    let s = (h >>> 0) || 1;
    const rnd = () => (s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296;
    const circles = [], lines = [];
    for (let i = 0; i < NC; i++) circles.push({ x: 30 + rnd() * 240, y: 40 + rnd() * 320, r: 12 + rnd() * 58, tone: 0.25 * (1 + Math.floor(rnd() * 4)) });
    for (let i = 0; i < NL; i++) {
      const a = Math.floor(rnd() * 4) * Math.PI / 4, len = 80 + rnd() * 140, x = rnd() * W, y = rnd() * H;
      lines.push({ x1: x, y1: y, x2: x + len * Math.cos(a), y2: y + len * Math.sin(a) });
    }
    return { circles, lines };
  }
  const f = (v) => v.toFixed(1);
  const COLOR = /^(#[0-9a-f]{6}|currentColor|none)$/;    // 色は固定の書式だけを通す。利用者の入力は入れない
  function toSvg(c, ink, paper, size) {        // 文字列に入るのは、数値の書式化と、検査済みの色だけ
    if (!COLOR.test(ink) || !COLOR.test(paper)) throw new Error('color');
    const body = c.circles.map((o) => `<circle cx="${f(o.x)}" cy="${f(o.y)}" r="${f(o.r)}" fill="${ink}" fill-opacity="${o.tone}"/>`).join('')
      + c.lines.map((l) => `<line x1="${f(l.x1)}" y1="${f(l.y1)}" x2="${f(l.x2)}" y2="${f(l.y2)}" stroke="${ink}" stroke-width="1.2"/>`).join('');
    const dim = size ? ` width="${size[0]}" height="${size[1]}"` : '';     // 単体で開いたときの表示の大きさ
    return `<svg xmlns="http://www.w3.org/2000/svg"${dim} viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="${paper}"/>${body}</svg>`;
  }

  let comp, gl = null, loc = {}, showGL = false, lost = false;

  function show(seed) {
    comp = compose(seed);
    poster.querySelector('svg')?.remove();
    poster.insertAdjacentHTML('afterbegin', toSvg(comp, 'currentColor', 'none').replace('<svg ', '<svg aria-hidden="true" '));
    // 印刷・書き出し用は、画面の配色に依らず紙色と墨色を固定する
    if (link.dataset.blob) URL.revokeObjectURL(link.dataset.blob);          // 前の URL を解放する
    link.href = link.dataset.blob = URL.createObjectURL(new Blob([toSvg(comp, '#1c2b4a', '#f2eee4', ['300mm', '400mm'])], { type: 'image/svg+xml' }));
    if (showGL) drawGL();
  }

  // --- 任意の拡張: 網点の質感（WebGL）。1 回描くだけで、アニメーションは無い ---
  const VERT = 'attribute vec2 aPos; void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }';
  // 図の単位を H（400）で割った値（高さが 1、幅が 0.75）でシェーダーに渡す。距離の二乗・dot の最大は約 0.3、網目の座標の最大は 100 で、
  // mediump の保証範囲（±2^14）に収まる。精度の分岐（highp の有無）があっても、同じ見た目になる
  const frag = (prec) => `
precision ${prec} float;
uniform vec2 uRes; uniform vec3 uC[${NC}]; uniform float uTone[${NC}]; uniform vec4 uL[${NL}]; uniform vec3 uInk;
float density(vec2 p) {                        // p は正規化した図の座標（x は 0〜0.75、y は 0〜1）
  float d = 0.0;
  for (int i = 0; i < ${NC}; i++) if (length(p - uC[i].xy) < uC[i].z) d = max(d, uTone[i]);
  return d;
}
void main() {
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) * (${W}.0 / ${H}.0 / uRes.x);   // 図の単位 ÷ ${H}。横幅（0.75）を基準に、SVG と同じ縮尺にする
  const float CELL = 5.0 / ${H}.0;               // 網目の 1 つの大きさ（図の単位で 5）
  mat2 R = mat2(0.7071, -0.7071, 0.7071, 0.7071);   // 45 度の網目
  vec2 q = R * p / CELL, cell = floor(q) + 0.5;
  float dens = density(CELL * (cell * R));          // 網目の中心での濃さ（R の逆は転置）
  float dist = length(fract(q) - 0.5);
  float rad = sqrt(dens) * 0.7071;
  float ink = (1.0 - smoothstep(rad - 0.06, rad + 0.06, dist)) * step(0.01, dens);
  float line = 0.0;
  for (int i = 0; i < ${NL}; i++) {
    vec2 a = uL[i].xy, ba = uL[i].zw - a, pa = p - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    line = max(line, 1.0 - smoothstep(0.4, 1.4, length(pa - ba * h) * ${H}.0));   // 線の太さは図の単位で比べる
  }
  float a = max(ink, line);
  gl_FragColor = vec4(uInk * a, a);
}`;
  function compile(type, src) {
    const sh = gl.createShader(type); gl.shaderSource(sh, src); gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh));
    return sh;
  }
  function build() {
    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    const hp = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);   // highp が使えるか（precision が 0 なら使えない）
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, frag(hp && hp.precision > 0 ? 'highp' : 'mediump')));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const l = gl.getAttribLocation(prog, 'aPos'); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, 2, gl.FLOAT, false, 0, 0);
    for (const u of ['uRes', 'uC', 'uTone', 'uL', 'uInk']) loc[u] = gl.getUniformLocation(prog, u);
  }
  function drawGL() {
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    canvas.width = Math.max(1, Math.round(canvas.clientWidth * dpr));
    canvas.height = Math.max(1, Math.round(canvas.clientHeight * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
    const m = getComputedStyle(poster).color.match(/[\d.]+/g).map(Number);
    gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(loc.uRes, canvas.width, canvas.height);
    gl.uniform3fv(loc.uC, comp.circles.flatMap((o) => [o.x / H, o.y / H, o.r / H]));
    gl.uniform1fv(loc.uTone, comp.circles.map((o) => o.tone));
    gl.uniform4fv(loc.uL, comp.lines.flatMap((o) => [o.x1 / H, o.y1 / H, o.x2 / H, o.y2 / H]));
    gl.uniform3f(loc.uInk, m[0] / 255, m[1] / 255, m[2] / 255);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
  function setGL(on) {
    showGL = on && !!gl && !lost;
    poster.classList.toggle('gl', showGL);       // canvas を表示してから大きさを測る
    btnHalf.setAttribute('aria-pressed', String(showGL));   // ラベルは固定。支援技術へは aria-pressed で示す
    halfState.textContent = showGL ? '網点' : '通常';        // 目には、同じ値から作った文字で示す（クリックでも文脈の喪失でも、ここを通るのでずれない）
    if (showGL) drawGL();
  }

  gl = canvas.getContext('webgl', { antialias: false, depth: false, powerPreference: 'low-power' });
  if (gl) { try { build(); btnHalf.hidden = false; } catch (e) { gl = null; } }
  btnHalf.addEventListener('click', () => setGL(!showGL));
  canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); lost = true; setGL(false); btnHalf.hidden = true; });
  canvas.addEventListener('webglcontextrestored', () => { try { build(); lost = false; btnHalf.hidden = false; } catch (e) { gl = null; } });
  window.addEventListener('resize', () => showGL && drawGL());
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => showGL && drawGL());

  const read = () => { const v = seedEl.valueAsNumber; return Number.isInteger(v) && v >= 0 && v <= 9999 ? v : 7; };   // 空欄・不正値は NaN
  seedEl.addEventListener('change', () => { seedEl.value = String(read()); show(read()); });   // 欄の表示も戻す
  document.getElementById('next').addEventListener('click', () => { seedEl.value = String((read() + 1) % 10000); show(read()); });
  show(read());
})();
</script>
</body>
</html>
```

仕様との突き合わせ: 番号の入力は `valueAsNumber` で読み、`Number.isInteger` と範囲で検査し、外れたら 7 に戻して欄の表示も戻す。`insertAdjacentHTML` は 1 か所で、入る文字列は `toSvg` が組み立てたものだけである。canvas は、`gl` のクラスを付けて表示してから大きさを測る。シェーダーの円の数 10・線の数 6 は、JS の定数 `NC`・`NL` から文字列に差し込み、2 か所の食い違いを防ぐ。

### ライブラリを使う場合

本例は、ライブラリを使わないほうが小さく済む。2D の構成と SVG の書き出しが中心で、3D のシーンもカメラも要らない。

- three.js（three@0.187.0。S147）を使っても、全面の板に網点のシェーダーを掛ける作りになり、`shader-gradient-background.md` の小節と同じになる。利点は小さい。版と完全性の扱い（S43、S49）は、その小節のとおり
- 生成芸術の入口の道具には p5.js がある。公式は、コードで絵を作り、学ぶための親しみやすい道具と説明する（S15）。英語の原文（S15）: "p5.js is a friendly tool for learning to code and make art." 日本語は要旨。使うなら、`p5@2.4.0`（2026-11-16 に npm の latest として確認した版。出典なし）のように完全な版番号で固定する。`@latest`・範囲指定・版の省略・タグ名は使わない。完全性は、セルフホストか Subresource Integrity で確かめる（p5.js の配布ファイルとそのハッシュは、本例で確認していない。未実行）。CSP・nonce の扱いは `shader-gradient-background.md` の同名の小節のとおり
- どちらを使っても、構成を作る `compose` を、描画から切り離しておく。書き出しの SVG と、画面の描画が、同じ元から出るため

未実行（本節に、実行するコードは載せない）。

## 初見検証

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 5 月 10 日の朗読会。会場は港町ホール | 見出しと本文 |
| 何を操作できるか | 図を別の構成に変える。網点の質感で見る。SVG を保存する | 3 つのボタンと番号 |
| どう操作するか | 番号を入れる、または「別の構図」を押す。網点の表示かどうかは、トグルの中の文字（網点／通常）で分かる | 入力とボタンの文言と、トグルの状態の文字 |

観察で確かめる: (1) 図を隠して、日時と会場を答えられるか。(2) 同じ番号を入れて、同じ形に戻るか。(3) 「網点の質感で見る」を押して、押した状態と戻し方がわかるか（塗りや枠の変化を見ずに、文字だけで、いま網点か通常かを答えられるか。読み上げでも判別できるか）。(4) 保存した SVG を、画面の配色（ダーク）に関係なく同じ色で開けるか。(5) WebGL が無い環境で、網点のボタンが出ないだけで、他は同じか。

## 点検

- 選別: 生成の出力を作者が選ぶ段階がある（S30）。公開する番号を決めて既定にした。閲覧者が番号を変えるのは任意の操作で、押したときだけ起きる
- 層の分担: 本文は HTML。図は層 1（SVG）が本線。WebGL は任意の拡張で、無くても欠けるものは質感だけ
- 動き: アニメーションは無い。動きを減らす設定でも画面は同じ（確認した）
- 入力: 番号は `valueAsNumber` で読んで整数と範囲を検査する。SVG に入るのは、数値の書式化と、検査した固定の色だけで、利用者の文字列は入らない。HTML として解釈する経路は `insertAdjacentHTML` の 1 か所で、`toSvg` の出力だけを渡す
- 失われた文脈: 網点の表示をやめて SVG に戻す（S158、S159）。そのとき `aria-pressed` と状態の文字も同じ値（`false`・通常）に戻る（本 skill の整理）
- トグルの状態: 網点のトグルは、ラベルを固定し、状態を `aria-pressed` と目に見える文字の両方で示す。塗りの有無だけにしない。状態の文字で幅を変えず、押しても、同じ行の入力・ボタン・リンクの位置と行数を動かさない（本 skill の整理）
- 書き出し: 紙色・墨色を固定した SVG。画面のダークや、網点の見た目は書き出しに含まれない。印刷の色の管理は、導入されていれば designer-brand、文面の組版は designer-typography
- 画面での確認（2026-11-16）: ソフトウェア描画の WebGL で網点の表示が描け、同じ番号で通常の設定と動きを減らす設定の画像が一致し（SVG・網点・次の番号の 3 枚とも差 0 画素）、再読み込みでも同じ構成になった。WebGL を無効にした起動では、網点のボタンが隠れ、SVG の図が出た。`requestAnimationFrame` は 1 秒間で 0 回。保存される SVG は、`width="300mm" height="400mm"` と `viewBox` を持ち、XML として解釈できた。1440・390・320 px のライトとダークで、横にはみ出さなかった。実機・Safari・Firefox は未確認
- 精度の確認（2026-11-16）: 番号 7・42・3・1234 の網点を、正規化前と正規化後で描いて比べた。差のある画素は 0.05〜0.11 %（浮動小数点の丸めで、網点の縁の数画素が入れ替わる程度）。`precision` を `mediump` に固定した版も描いたが、この確認環境（ソフトウェア描画）は `mediump` を単精度で扱うようで、固定の前後で差は 0 画素だった。低精度の実装での線の欠けは、この環境では再現できない（未検証）。正規化前の `dot(ba, ba)` の最大が約 48,398 で、保証範囲（±2^14）を超えることは、番号 0〜9999 の全構成の計算で確かめた。正規化後は 0.3025 以下だった
- 操作の確認（2026-11-16）: 番号の入力・「別の構図」・「網点の質感で見る」は、上の確認のとおり動いた。網点のトグルは、押すと `aria-pressed` が `false` から `true` に、状態の文字が「通常」から「網点」に変わり、ラベルは変わらなかった。「この構図を SVG で保存」は、`download="poster.svg"` と `blob:` の `href` を持つことを確認した。実際にファイルが保存されるかは、確認していない（未検証）
- トグルの状態の確認（2026-11-16）: 1440・390・320 px のライトとダークで、押す前（`false`・通常）・押した後（`true`・網点）・戻した後（`false`・通常）の 3 点で、`aria-pressed` と状態の文字が一致した。ボタンの幅は 3 点とも 211 px で、4 つの部品（番号の欄・「別の構図」・網点のトグル・保存のリンク）の矩形も同じで、横にはみ出さなかった。320〜1440 px を 10 px 刻み（113 幅）で、押す前・押した後・戻した後の 4 つの部品の矩形と行数が一致した（行数は 460〜760 px と 910〜1440 px で 2 行、320〜450 px と 770〜900 px で 3 行）。どの幅でも、網点のトグルは隠れず、`aria-pressed` と状態の文字は一致した。なお「網点」と「通常」は同じ 2 文字で、見えない sizer を外した版でも、この確認環境（macOS の Chrome）では同じ幅で、矩形も一致した。語を変えて文字数や書体の幅が変わると差が出るので、sizer は残す。スクリーンリーダーでの読み上げは未検証（状態の文字は `aria-hidden` で、名前に入らない構造のみ確認）
- 文脈の喪失の確認（2026-11-16）: `WEBGL_lose_context` で文脈を擬似的に失わせた（1440・390・320 px のライトとダークの 6 通りとも同じ結果）。網点の表示中（`true`・網点）に失わせると、網点の表示が外れ（`aria-pressed` は `false`、状態の文字は「通常」）、ボタンが隠れ、SVG の図が出た。喪失中にボタンの `click()` を呼んでも、2 つは `false`・通常のままで、図は消えなかった（修正前は、ポスターに `gl` のクラスが付いて SVG が `display: none` になり、図が消えた）。復帰させると、ボタンが同じ位置・同じ 211 px で戻り（2 つは `false`・通常のまま）、押し直すと `true`・網点になった。押し直した網点は、喪失の前と同じ画像になった（差 0 画素。この差は前回の確認で測った値で、今回は測り直していない）
- 直した不具合の再現の確認（2026-11-16）: 番号の欄に `abc<img src=x>`・空欄・-1・1.5・10000 を入れると、欄の値が `7` に戻り、先頭の円の `cx` が番号 7 の構成（263.1）と一致し、`img` 要素は入らなかった（修正前は、`abc<img src=x>` と空欄で欄が空のまま、番号 0 の構成の 91.9 だった）。42 は 42 のままで、構成が変わった。番号 7 から順に進めたときの先頭の円の `cx` は、修正後は 263.1・222.3・98.5・160.0・169.5・49.2・41.9 で、修正前の 128.6・133.8・139.1・144.3・149.5・154.8・160.0（一定量ずつ動く）と違い、隣の番号でも動きが揃わなかった
- 性能: 1 回描くだけで、負荷は小さい。実機での確認はしていない（未検証）
- 隣の領域: 印刷の組版は designer-typography、ロゴや色の規定は designer-brand（いずれも導入されていれば）

## この例の出典

S03、S15、S30、S43、S49、S129、S131、S147、S151、S158、S159、S201。台帳は `../references/sources.md`。

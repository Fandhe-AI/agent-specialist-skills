# 例: 既にある写真に、カーソルへ反応する歪みを足す（写真家のギャラリー）

既にある写真に、WebGL の歪みの効果を重ねる例。題材は架空の写真家のギャラリーで、実在の作家や作品は模倣しない。扱うのは、写真が主役で効果が従であること・ホバーが無いタッチとキーボードでの置き換え・動きを減らす設定での無効化・写真のメモリと文脈の喪失・写真ファイルが無くても崩れない下地と寸法で、写真の選び方や色の調整は扱わない。「写真にマウスを重ねると波打つようにしたい」と言われたとき、効果を足す前の設計として開く。

## 依頼

- 媒体: 架空の写真家「Atelier Rin」のギャラリーページ。写真 3 枚の一覧
- 依頼文（架空）: 「写真にカーソルを重ねると、波紋のように歪むようにしたい。写真は既にある」
- 読み手: 写真を見に来る人。パソコン、タブレット、スマートフォン、キーボードだけの人が混ざる（想定）
- 現状: 写真を並べただけの一覧。3D 素材は要らない。写真の権利・利用条件は依頼側の領分

### 根拠の範囲（先に読む）

- 出典のある事実: ホバーに頼る設計は、タッチの画面で成り立たない（S27。Flash についての Apple の書簡で、Apple の利害を含む主張。ここでは技術的な指摘として使う）。英語の原文（S27）: "Flash was designed for PCs using mice, not for touch screens using fingers." 日本語は要旨で、本人の発言ではない
- 動きの規則: 操作で起きる動きは、本質的でない限り、無効化できるようにする（WCAG 2.3.3。レベル AAA。S119）。動きを減らす OS 設定は `prefers-reduced-motion` で検出できる（S122）
- メモリ: アプリケーションは VRAM の使用量を意識して使う（S53）。GPU 圧縮テクスチャは GPU のメモリで小さく速いが、JPG・PNG より画質が落ち、法線や座標でなく色にだけ向く（S54）。使い終えた資源は自分で解放する（S55、S60）
- 本 skill の目安（出典なし）: 歪みの式の係数・DPR の上限・文脈の数。別のオリジンの写真を使うときは、`crossorigin` 属性と CORS の許可が要る（出典を台帳に載せていない。実装時に確認する）
- 範囲外: 写真の権利・肖像、色の調整、効果の好み。歪みは、写真の見え方を変える。作家が許すかは、依頼側と決める

## 目的の一文

写真が主役のまま、カーソルを重ねたときに小さな反応を足す。反応が無い環境（タッチ・キーボード・動きを減らす設定・WebGL なし）でも、写真は同じに見える。

## 削るもの

| 削るもの | 理由 |
|---|---|
| 写真を canvas だけで出すこと | 写真・代替テキスト・リンクは HTML の `<img>` と `<a>` に置く。WebGL は上に重ねるだけにする |
| ホバーだけで成り立つ操作 | タッチで成り立たない（S27）。タッチはタップ時の 1 回、キーボードはフォーカス時の 1 回に置き換える |
| 常時の波紋・自動再生 | 動きは、操作のあいだと、その直後の減衰だけ。動きを減らす設定では無効（S119、S122） |
| 全写真の同時の文脈 | 画面内に入った写真だけ、効果を用意する（S160）。メモリと文脈の数を抑える（S53）。ただし、一度作った文脈は解放しない（本例は最大 3 つ。未実装） |
| 写真の GPU 圧縮 | JPG・PNG より画質が落ちる（S54）。写真は色の画像で使えるが、写真が主役なので使わない（本 skill の判断） |
| 派手な歪み | 係数は小さく。写真を見えなくしない |

削らないもの: `<img>`（`alt`・`width`・`height`・`srcset`）、リンク、写真が無くても残る枠と下地、効果が無い環境での同じ見た目。

## 構成

1. 層 0（内容と操作）: `<ul>` の中に、写真のリンク（`<a>` の中の `<img>`）とキャプション。HTML。写真が読み込めなくても、枠・下地の色・代替テキストが残る
2. 層 1（静止の代替）: 動きを減らす設定・WebGL なし・文脈の喪失のとき、層 0 のまま。CSS のごく小さな明度の変化だけ（動きを減らす設定では付けない）
3. 層 2（歪み）: 画面に入った写真のリンクに canvas を重ね、同じ写真をテクスチャにして、波紋の式で歪めて描く。効果が出ている間だけ canvas を表示して描き、それ以外は canvas を隠して `<img>` を見せる
4. 操作: マウスの移動で波紋。タッチ・ペンはタップで 1 回。キーボードはフォーカスで 1 回

## 仕様

### 出典あり

| 項目 | 値 | 根拠 |
|---|---|---|
| ホバー以外の入口 | タッチはタップ、キーボードはフォーカス | S27 |
| 動きを減らす設定 | 歪みを作らない（canvas を作らず、写真を静止で見せる） | S119、S122 |
| 描く条件 | 画面内にあるとき。画面外へ出たとき・タブが見えなくなったときは、効果の強さを 0 に戻して canvas を隠す（歪んだ状態を残さない）。効果が止んだときも canvas を隠す | S160、S150、S61 |
| 動きを減らす設定 | 読み込み時だけでなく、変わったときも見る。有効になったら、効果を終えて canvas を隠す | S122 |
| 文脈が取れないとき | `getContext` が `null` なら、層 0 のまま | S151 |
| 文脈の喪失 | canvas を隠して写真を見せ、戻ったら作り直す | S158、S159、S64 |
| 資源の解放 | 本例は解放しない（未実装）。画面外に出ても、作った文脈とテクスチャは残る。数の多いギャラリーでは、画面外の canvas の文脈を破棄し、テクスチャを削除する設計が要る | S55、S60（使い終えた資源は自分で解放する、という方針のみ） |
| テクスチャの種類 | 写真に GPU 圧縮は使わない | S54 |

### 本 skill の目安（出典なし）

| 項目 | 値 | 理由 |
|---|---|---|
| 歪みの式 | 波の数 38・速さ 9・減衰 5・振幅 0.03 | 小さく保つ。好みで調整する |
| 描画 DPR の上限 | 2 | 高密度の画面で負荷が倍々になるのを避ける |
| 文脈の数 | 画面に入った写真の数だけ（本例は最大 3） | 数が多いギャラリーでは、1 つの canvas を共有するか、画面外の canvas を捨てる設計にする |
| テクスチャの大きさ | 1600 × 1067 の写真で、約 6.5 MiB（幅 × 高さ × 4 バイトの計算） | 3 枚で約 20 MiB。圧縮なしの RGBA の計算で、実機の使用量は未測定 |
| 減衰 | 効果は毎秒 5 の指数で減衰し、0.01 未満で止める | 止むと描画を止める |
| ホバーの明るさ | `img` と `canvas` の両方に付ける（効果の出入りで、明るさが跳ねない） | canvas が `img` と入れ替わるため |
| カーソルが静止したとき | 最後の移動から 150 ms で反応を終え、減衰させて止める | 写真の上で止まったまま描き続けない |
| 時間 | シェーダーの時間は、波の周期（2π / 9）で巻き戻す | 時間が増え続けて、精度が落ちるのを避ける |
| リンク先 | 大きい版の写真ファイル（`photos/rin-01-1600.jpg` など。`img` の `srcset` の大きい側）。クリック・タップ・Enter で開く | 開く先を持たないリンクは、操作できない |
| 写真ファイルが無い環境 | `img` は枠・下地の色・代替テキストが残る。リンク先は開けない（ブラウザの「見つからない」の表示）。リンク切れを許さない場合は、配信側でファイルを置くか、リンクを外す | 写真が無い状態で、画面が崩れないことと、操作が空振りになることを分けて書く |
| 写真の解像度が切り替わったとき | `load` の通知で、テクスチャを作り直す | `srcset` で別の画像が選ばれても、初回の解像度のまま残さない |
| 画像の寸法 | 800 と 1600 の `srcset`。`sizes` で幅に合わせる | 小さい画面に大きな画像を送らない |
| 先頭の写真 | `fetchpriority="high"`。ほかは `loading="lazy"` | 最初の画面の写真を遅らせない |

### 画像の書き方

```html
<img src="photos/rin-01-800.jpg" srcset="photos/rin-01-800.jpg 800w, photos/rin-01-1600.jpg 1600w"
     sizes="(min-width: 64rem) 20rem, (min-width: 40rem) 45vw, 100vw"
     width="1200" height="800" alt="朝の港。係留された小舟と、低い光" fetchpriority="high" decoding="async">
```

`width` と `height` は縦横比を確保する属性で、読み込みで画面が動くのを防ぐ。枠は CSS の `aspect-ratio: 3 / 2` と下地の色でも確保している。写真のファイルが無くても、枠・下地・代替テキストが残る。

### 文字のコントラスト

| 配色 | 文字 | 地 | 比 |
|---|---|---|---|
| ライト | `#221f1a` | `#f4f1ea` | 14.56 |
| ダーク | `#ebe6da` | `#16140f` | 14.78 |
| 写真が無いときの代替テキスト（ライト） | `#221f1a` | `#cfc8ba` | 9.87 |
| 同（ダーク） | `#ebe6da` | `#3a362d` | 9.66 |

WCAG の相対輝度式で計算した（基準の 4.5:1 は、本台帳に原文が無く未照合）。

## 文言

| 場所 | 文言 |
|---|---|
| 見出し | Atelier Rin 写真集 |
| キャプション | 朝の港／雨上がりの石畳／窓辺の午後 |
| 代替テキスト | 朝の港。係留された小舟と、低い光／雨上がりの石畳に映る街灯／窓辺の植物と午後の影 |
| canvas | `aria-hidden`。装飾（意味は写真と代替テキストにある） |

## コード断片

外部のライブラリ・スクリプト・フォント・計測は使わない。素の WebGL（WebGL 1）で、写真 1 枚の板に歪みのフラグメントシェーダーを掛ける。写真は `<img>` から取り、画像が読めたとき・文脈が取れたときだけ canvas を足す。

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Atelier Rin 写真集</title>
<style>
  :root { color-scheme: light dark; --bg: #f4f1ea; --fg: #221f1a; --under: #cfc8ba; }
  @media (prefers-color-scheme: dark) { :root { --bg: #16140f; --fg: #ebe6da; --under: #3a362d; } }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--fg); font: 16px/1.7 system-ui, sans-serif; }
  main { max-width: 64rem; margin: 0 auto; padding: clamp(1rem, 4vw, 3rem); }
  h1 { margin: 0 0 1rem; font-size: clamp(1.5rem, 5vw, 2.25rem); line-height: 1.25; }
  .gallery { display: grid; gap: 1rem; margin: 0; padding: 0; list-style: none;
             grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr)); }
  .shot { position: relative; display: block; aspect-ratio: 3 / 2; overflow: hidden;
          background: var(--under); color: inherit; }        /* 写真が無くても枠と下地は残る */
  .shot img, .shot canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; object-fit: cover; }
  .shot canvas[hidden] { display: none; }
  .shot:focus-visible { outline: 3px solid currentColor; outline-offset: 3px; }
  .cap { margin: 0.25rem 0 0; font-size: 0.875rem; }
  /* 層 1: WebGL が無くても成り立つ、ごく小さな反応。動きを減らす設定では付けない */
  @media (prefers-reduced-motion: no-preference) {
    .shot img, .shot canvas { transition: filter 0.2s; }
    .shot:hover img, .shot:hover canvas { filter: brightness(1.08); }   /* canvas にも付ける（効果の出入りで明るさが跳ねない） */
  }
</style>
</head>
<body>
<main>
  <h1>Atelier Rin 写真集</h1>
  <ul class="gallery">
    <li>
      <a class="shot" href="photos/rin-01-1600.jpg">
        <img src="photos/rin-01-800.jpg" srcset="photos/rin-01-800.jpg 800w, photos/rin-01-1600.jpg 1600w"
             sizes="(min-width: 64rem) 20rem, (min-width: 40rem) 45vw, 100vw"
             width="1200" height="800" alt="朝の港。係留された小舟と、低い光" fetchpriority="high" decoding="async">
      </a>
      <p class="cap">朝の港</p>
    </li>
    <li>
      <a class="shot" href="photos/rin-02-1600.jpg">
        <img src="photos/rin-02-800.jpg" srcset="photos/rin-02-800.jpg 800w, photos/rin-02-1600.jpg 1600w"
             sizes="(min-width: 64rem) 20rem, (min-width: 40rem) 45vw, 100vw"
             width="1200" height="800" alt="雨上がりの石畳に映る街灯" loading="lazy" decoding="async">
      </a>
      <p class="cap">雨上がりの石畳</p>
    </li>
    <li>
      <a class="shot" href="photos/rin-03-1600.jpg">
        <img src="photos/rin-03-800.jpg" srcset="photos/rin-03-800.jpg 800w, photos/rin-03-1600.jpg 1600w"
             sizes="(min-width: 64rem) 20rem, (min-width: 40rem) 45vw, 100vw"
             width="1200" height="800" alt="窓辺の植物と午後の影" loading="lazy" decoding="async">
      </a>
      <p class="cap">窓辺の午後</p>
    </li>
  </ul>
</main>
<script>
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');   // 動きを減らす設定は、変わったときも見る
  const MAX_DPR = 2;                           // 描画 DPR の上限（本 skill の目安。出典なし）
  const PERIOD = 2 * Math.PI / 9;              // uTime の周期（シェーダーの sin の中の 9 に合わせる。巻き戻しても連続する）
  const IDLE_MS = 150;                         // マウスが止まってから、反応を終えるまでの時間

  const VERT = 'attribute vec2 aPos; varying vec2 vUv; void main(){ vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }';
  const FRAG = `
precision mediump float;
uniform sampler2D uTex; uniform vec2 uPoint; uniform float uAmp, uTime, uAspect;
varying vec2 vUv;
void main() {
  vec2 d = vUv - uPoint; d.x *= uAspect;
  float r = length(d);
  float wave = sin(r * 38.0 - uTime * 9.0) * exp(-r * 5.0) * uAmp;      // 波紋。中心から離れるほど減る
  vec2 dir = r > 0.0001 ? d / r : vec2(0.0);
  vec2 uv = vUv + vec2(dir.x / uAspect, dir.y) * wave * 0.03;
  gl_FragColor = texture2D(uTex, uv);
}`;

  // 写真 1 枚ぶんの効果。文脈は、画面に入った写真に 1 つずつ作り、解放しない（本例は最大 3 つ。数が多いギャラリーでは破棄の設計が要る）
  function Distort(link) {
    const img = link.querySelector('img');
    const canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    canvas.hidden = true;                      // 効果が出ている間だけ表示する（それ以外は img が見える）
    let gl, started = false, loc = {}, raf = 0, last = 0, amp = 0, hover = false, lastMove = 0, time = 0, pt = [0.5, 0.5], inView = false, ready = false;

    function compile(type, src) {
      const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
      return s;
    }
    function upload() {                        // 写真の解像度が変わったとき（srcset）も、同じ関数で作り直す
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    }
    function build() {
      const p = gl.createProgram();
      gl.attachShader(p, compile(gl.VERTEX_SHADER, VERT)); gl.attachShader(p, compile(gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
      gl.useProgram(p);
      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      const l = gl.getAttribLocation(p, 'aPos'); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, 2, gl.FLOAT, false, 0, 0);
      for (const u of ['uPoint', 'uAmp', 'uTime', 'uAspect']) loc[u] = gl.getUniformLocation(p, u);
      gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());      // 2 のべき乗でない写真は CLAMP と LINEAR だけ
      upload();
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    }
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas.width = Math.max(1, Math.round(link.clientWidth * dpr));
      canvas.height = Math.max(1, Math.round(link.clientHeight * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    function draw() {
      gl.uniform2f(loc.uPoint, pt[0], pt[1]); gl.uniform1f(loc.uAmp, amp);
      gl.uniform1f(loc.uTime, time); gl.uniform1f(loc.uAspect, canvas.width / canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    function rest() {                          // 効果を終える。canvas を隠して、写真（img）をそのまま見せる
      cancelAnimationFrame(raf); raf = 0;
      amp = 0; hover = false; canvas.hidden = true;
    }
    function frame(now) {                      // 効果が出ている間だけ回す
      raf = 0;
      if (reduce.matches || !inView || document.hidden) { rest(); return; }
      const dt = Math.max(0, Math.min((now - last) / 1000, 0.1)); last = now;   // 負の値（古い時刻）は進めない
      time = (time + dt) % PERIOD;
      if (hover && now - lastMove > IDLE_MS) hover = false;                    // カーソルが止まったら、反応を減衰させて止める
      if (!hover) amp *= Math.exp(-dt * 5);
      if (amp < 0.01 && !hover) { rest(); return; }
      draw();
      raf = requestAnimationFrame(frame);
    }
    function kick() {
      if (!ready || reduce.matches) return;
      if (canvas.hidden) { draw(); canvas.hidden = false; }   // 隠れているときだけ、表示する前に 1 回描く（前の状態が見えないように）
      if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
    }
    function ripple(x, y) { pt = [x, y]; amp = 1; kick(); }
    function pos(e) { const r = link.getBoundingClientRect(); return [(e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height]; }

    async function start() {
      started = true;
      try {
        await img.decode();                    // 画像が無い・壊れているときは例外 → 層 0 のまま
        gl = canvas.getContext('webgl', { antialias: false, depth: false, powerPreference: 'low-power' });
        if (!gl) return;                       // WebGL が使えない: 層 0 のまま
        link.appendChild(canvas); resize(); build(); ready = true;
      } catch (e) { canvas.remove(); return; }
      new ResizeObserver(() => { resize(); if (!canvas.hidden) draw(); }).observe(link);
      img.addEventListener('load', () => { if (ready) { upload(); if (!canvas.hidden) draw(); } });   // srcset の切り替え
      canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); ready = false; rest(); });
      canvas.addEventListener('webglcontextrestored', () => { try { resize(); build(); ready = true; } catch (e) { /* img のまま */ } });
      link.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse') { hover = true; lastMove = performance.now(); pt = pos(e); amp = 1; kick(); } });
      link.addEventListener('pointerleave', () => { hover = false; });
      link.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') ripple(...pos(e)); });   // タッチはタップ時の 1 回だけ
      link.addEventListener('focus', () => { if (link.matches(':focus-visible')) ripple(0.5, 0.5); });       // キーボードも 1 回だけ
    }
    new IntersectionObserver((entries) => {
      inView = entries[entries.length - 1].isIntersecting;                      // 記録は最後を採る
      if (!inView) rest();                                                      // 画面外へ出たら、歪んだ状態を残さない
      else if (!started && !reduce.matches) start();
    }).observe(link);
    document.addEventListener('visibilitychange', () => { if (document.hidden) rest(); });
    reduce.addEventListener('change', () => { if (reduce.matches) rest(); else if (inView && !started) start(); });
  }
  document.querySelectorAll('.shot').forEach(Distort);
})();
</script>
</body>
</html>
```

ローカルで確かめるときは、ファイルを `file://` で開かず、`http://127.0.0.1` などで配る（`file://` の写真は、`texImage2D` が SecurityError になり、効果が出ず、層 0 のままになる）。

仕様との突き合わせ: テクスチャは 2 のべき乗でない写真に合わせ、`CLAMP_TO_EDGE` と `LINEAR` だけにしている。canvas の解像度は「リンクの大きさ × min(DPR, 2)」。写真の縦横比は 3:2 で枠と一致するので、シェーダーで `object-fit` を再現していない。写真の縦横比が枠と違う場合は、座標の変換を足す。

### ライブラリを使う場合

three.js の `TextureLoader` と `PlaneGeometry`・`ShaderMaterial` でも作れる。ただし、本例は 1 枚の板に 1 本のシェーダーで、ライブラリが足すものは少ない。

- 版は three@0.187.0（r187。S147。S148 は区分 R）に固定する。`@latest`・範囲指定・版の省略・タグ名は使わない。import map で版を明示し（S43）、完全性は `integrity`（S49）。r187 の `three.module.js` は `./three.core.js` を読み込むので、両方の URL に付ける（2026-11-16 に取得したファイルで確認。出典なし）。ハッシュの値・別の経路での照合・`integrity` に対応しないブラウザの扱い・CSP は `shader-gradient-background.md` の同名の小節にある。版を変えたらハッシュも計算し直し、合わなくても `integrity` を外さない
- 手書きの GLSL は `WebGLRenderer` に固定する（S40、S41）
- 写真のテクスチャは、`texture.dispose()` で解放する（S60）。本体は解放しないので、この点は本体より進んでいる。GPU 圧縮（KTX2。S59）は、写真では画質が落ちる（S54）
- 別のオリジンの写真を使うときは、`TextureLoader` の `setCrossOrigin` と、配信側の CORS の許可が要る（出典なし）

未実行（本節のコードは描画を確かめていない）:

```html
<script type="module">
import * as THREE from 'three';                   // import map と integrity は上の注意のとおり
const loader = new THREE.TextureLoader();
loader.load(img.currentSrc, (texture) => {
  const material = new THREE.ShaderMaterial({
    uniforms: { uTex: { value: texture }, uPoint: { value: new THREE.Vector2(0.5, 0.5) }, uAmp: { value: 0 }, uTime: { value: 0 }, uAspect: { value: 1.5 } },
    vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    // 本体の FRAG を、uniform の宣言ごと使う。ShaderMaterial が付けるのは組み込みだけで、uTex・uPoint・uAmp・uTime・uAspect は自分で宣言する。
    // テクスチャの色空間の変換は入れない（本体と同じ見え方にするため）。FRAG は本体の GLSL の文字列定数をこの module に写す
    fragmentShader: FRAG
  });
  const scene = new THREE.Scene();
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));
  // 効果が残っている間だけ renderer.render(scene, camera)。止んだら止める。文脈の喪失・動きを減らす設定は本体と同じ
});
</script>
```

## 初見検証

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 写真集で、3 枚の写真がある | 見出しとキャプション |
| 何を操作できるか | 写真の大きい版を開く（リンク）。写真に反応が出る | 写真 |
| どう操作するか | クリックまたはタップで、大きい版の写真ファイルが開く。キーボードは Tab で写真へ移り Enter | 写真のリンクとフォーカスの枠 |

観察で確かめる: (1) 反応を知らせずに、写真の内容を答えられるか。(2) カーソルを重ねたとき、反応に気づくか、邪魔か。(3) タッチの端末で、タップのときだけ反応して、写真が見づらくならないか。(4) キーボードだけで、写真へ移動して開けるか。(5) 動きを減らす設定にして、反応が出ないか。(6) 写真が読み込めない状態で、枠と代替テキストが残るか。

## 点検

- 写真が主役: 写真・代替テキスト・リンクは HTML。canvas は上に重ねる装飾（`aria-hidden`）。効果が無い環境でも、見え方は同じ
- 入力の置き換え: ホバーはマウスだけ（`pointerType` で判定）。タッチ・ペンはタップで 1 回、キーボードはフォーカスで 1 回（S27）
- 動き: 動きを減らす設定では、canvas を作らない。後から有効になったら、効果を終えて canvas を隠す（S119、S122）。効果は操作のあいだと減衰だけで、収まったら描画を止め、canvas を隠す。カーソルが静止したら 150 ms で反応を終える（S61）
- メモリ・文脈: 画面に入った写真だけ用意する（S160）。ただし、作った文脈とテクスチャは解放しない（未実装）。文脈を失ったら canvas を隠して写真に戻す（S158、S159）。テクスチャの大きさは、1600 × 1067 で約 6.5 MiB（本 skill の計算。S53 は、VRAM の使用量を意識する方針を述べる）。実機の使用量は未測定
- 画像: `srcset`・`sizes`・`width`・`height`・`alt`・`loading`・`fetchpriority`・`decoding` を書いた。最初の画面の写真は遅延させない。LCP の目安は 2.5 秒（S69）で、本例では測っていない
- 権利: 写真の利用条件・肖像は依頼側と確認する。本 skill は判断しない
- 画面での確認（2026-11-16）: 合成した写真で確認した（実際の写真ファイルは無い）。ソフトウェア描画の WebGL で、画面に入った 3 枚に canvas が付き（効果が出るまで `display: none`）、カーソルを重ねた写真が歪んだ（動かす前と画像が変わった）。カーソルを外して 1.6 秒後には、0.8 秒間で `requestAnimationFrame` が 0 回だった。動きを減らす設定と、WebGL を無効にした起動では、canvas は 0 個で、写真のままだった。写真ファイルが無い状態（390 px）では、下地の色・枠・代替テキストが残り、横にはみ出さなかった。画面の倍率 3 のとき、canvas の解像度は 2 倍までに抑えられた。1440・390・320 px のライトとダークで、横にはみ出さなかった。キーボードの Tab で写真にフォーカスすると波紋が 1 回出て、収まった。タッチ操作の経路は、実機・実操作では確認していない（未検証）。Safari・Firefox も未確認
- 操作の確認（2026-11-16）: 写真のファイルを置いた状態で、1 枚目をクリックすると `rin-01-1600.jpg`（`image/jpeg`）が開き、3 枚目をクリックすると `rin-03-1600.jpg` が開いた。Tab を 1 回押して Enter で 1 枚目が、Tab を 2 回押して Enter で 2 枚目が開いた。写真のファイルが無い状態（390 px）で 1 枚目をクリックすると、ブラウザの「ファイルにアクセスできませんでした」（`ERR_FILE_NOT_FOUND`）の画面になった。クリックする前は、枠・下地・代替テキストが残っていた（リンク先が空振りになる点は、「仕様」に書いた）
- 文脈の喪失の確認（2026-11-16）: 歪んでいる写真の文脈を擬似的に失わせると、その canvas は非表示になり（表示の計算値が `none`）、写真だけが見えた。復帰させたあと、カーソルを重ねると再び歪んだ
- 直した不具合の再現の確認（2026-11-16）: 歪ませたあと、画面の外へスクロールして戻し、カーソルを写真から外すと、修正後は 3 枚とも canvas が隠れ、最初の画像と一致した（差 0 画素）。修正前は、canvas が 3 枚とも表示されたままで、差が 2,475 画素残った。カーソルが写真の上で 1.5 秒静止したあとの 0.7 秒間の `requestAnimationFrame` は、修正前が 30〜42 回（3 回の試行）、修正後が 0 回（3 回とも。canvas も隠れた）。負荷の高い実行では、canvas の追加が遅れ、追加のあとにブラウザが送る合成のマウス移動で効果が遅れて始まり、この値が 0 にならないことがあった。反応中に動きを減らす設定が有効になったあとの 0.6 秒間は、修正前が 36 回、修正後が 0 回。何もしていないときの canvas の表示は、修正前が `block`、修正後が `none` だった。歪みの最中（0.12 秒後）と、静止して 2 秒後の、波紋から離れた隅の平均輝度は、180.6 と 180.3 で、効果の出入りで明るさは跳ねなかった（canvas に明るさの変化を付ける前は、167.3 と 180.3 で跳ねた）。`document.hidden` を真にして `visibilitychange` を送ると、0.6 秒間の `requestAnimationFrame` は 0 回だった。`srcset` の切り替えでのテクスチャの作り直しは、確認していない（未検証）。資源の解放は、本例は実装しておらず、確認していない
- 隣の領域: 写真の色・構図は designer-web、動きの時間・イージングは designer-interaction、ロゴ・CI は designer-brand（いずれも導入されていれば）

## この例の出典

S27、S40、S41、S43、S49、S53、S54、S55、S59、S60、S61、S64、S69、S119、S122、S147、S148、S150、S151、S158、S159、S160。台帳は `../references/sources.md`。

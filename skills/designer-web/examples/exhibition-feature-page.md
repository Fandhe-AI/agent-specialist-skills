# 例: 展覧会の特集ページ（画像が主役・動きは 1 か所）

作品の画像を主役にする特集ページを、画面幅ごとの切り抜き・非対称の構図・動きの絞り込みで作る例。題材は架空の特別展と美術館で、実在の作品・作家・美術館の模倣は含まない。画像が主役のページで、動きを付けるかどうかと、付けるならどこかを決めるときに開く。

## 依頼

- 展覧会: 架空の「みなと市立美術館」の特別展「港の記憶」。作品画像は高解像度で 40 点、解説文と年表がある（本例は 3 点を示す）
- ページ: 長めのスクロールの特集ページ。スマートフォンとデスクトップ
- 依頼文（架空）: 「特別展『港の記憶』の特集ページを、作品が映えるように、少し動きもつけて」
- 見る人: 会期前に行くか迷っている人と、すでに決めた人
- 範囲外: 作品の著作権・画像の使用許諾（確認事項として挙げる）、チケットの購入フロー

### 根拠の範囲（先に読む）

- 出典のある事実: 画面幅ごとに別の切り抜きを出す問題は、MDN でも art direction problem と呼ばれ、`picture` の用途の第 1 項に挙がる（S11、S12）。審査員の評価の語は、主題を邪魔しない動き・要所の動き（S24、S25）。自動で始まり 5 秒を超えて続く動く情報には、止める手段が要る（S75）。動きを減らす設定は CSS で検出できる（S76）。LCP は 2.5 秒以下が目標（S77）。装飾目的の大きな写真は無視され、実物は注視される（S60）
- 英語の原文（S12）: "Common use cases for <picture>: Art direction. Cropping or modifying images for different media conditions (for example, loading a simpler version of an image which has too many details, on smaller displays)." 日本語は要旨で、本人の発言ではない
- 本 skill の目安（出典なし）: 色・寸法・余白、画像の幅の組、動きの範囲（`entry 0% entry 60%`）、動きの形（下から開く）
- 未検証: Safari・Firefox での見え。スクロール連動の動きとサブグリッドのブラウザ対応状況（版は未照合）。作品画像の実物での見え

## 目的の一文

作品が主役の特別展だと伝え、会期と場所を見落とさせない。作品は画面幅に合わせた切り抜きで見せ、動きは作品の現れ方の 1 か所に絞る。

## 削るもの

| 削るもの | 理由 |
|---|---|
| 全作品の自動スライドショー | 自動で 5 秒を超えて動くなら止める手段が要る（S75）。作品を比べにくい |
| 背景動画・視差 | 作品より動きが目立つ。重さの代償（S77）が大きい |
| 全セクションのフェードインと全カードのホバー | 定型の動き（S55）。動きは作品の現れ方だけにする |
| 作品の上に重ねる文字 | 画像の上の文字は低コントラストになりやすい（S46。C。iOS への批判を一般則として借りる）。文字は画像の外に置く |
| 40 点を 1 ページに全部並べる | 一覧は別ページ。この特集は抜粋 3 点と年表 |
| 装飾だけの大きな画像 | 無視される種類として挙がる（S60）。大きく見せるのは作品だけ |

## 構成

### 方向性のメモ（作る前に書いた文章）

- 被写体・目的・見る人: 港を描いた絵画・版画の特別展。行くか迷う人に、作品の質と会期を伝える
- 言葉: 資料室、静けさ、年代、霧
- 色: ギャラリーの壁の灰緑（地）、墨（文字）、港の青緑（年号・作品番号だけ）。ダークは展示室を暗くした見え方で、設定に応える
- 書体: 見出しは明朝、本文はゴシック。題字を大きく 1 か所
- 構図: 左に題字、右に最初の作品。作品は左右に交互に置き、キャプションは作品の横に
- 画像と質感: 質感は足さない。作品が質感を持つ。広い画面は 3:2、狭い画面は 4:5 の寄りの切り抜き（S11、S12）
- 動き: 作品が現れるとき、上から下へ開く。ここだけ

### 既定の案との比較（S55 の見直し）

| 項目 | 同種の依頼の既定の案 | 本案 | 変えた理由 |
|---|---|---|---|
| 動き | 全セクションがフェードインして上がる（S55） | 作品の現れ方だけ | 審査員の評価の語は、主題を邪魔しない動き・要所の動き（S24、S25） |
| 地の色 | 暖色の cream＋テラコッタの差し色 | 灰緑の壁＋青緑の年号 | 美術館の壁から決めた |
| 構成 | 同じ角丸・同じ影のカードの束 | 作品ごとに左右を変える非対称 | 作品の大きさと余白で見せる |

ダークは近黒の地に 1 色の差し色になり、S54 の第 2 項に形が近づく。標準はライト（壁）で、ダークは設定への対応である。差し色の青緑は、蛍光でなく、年号と番号にだけ使う。

### ページの組み立て

```text
+------------------------------------------------+
| 特別展 港の記憶                    観覧のご案内 |
|  港の              +--------------------------+ |
|  記憶              |  No.01 の作品（3:2）     | |
|  2027.3.4 から 5.30 |                          | |
|  美術館（架空）     +--------------------------+ |
+------------------------------------------------+
| 出品作品から                                    |
| +------------------------+  No.07 《霧の桟橋》   |  作品は左右に交互に
|                            +------------------+ |
|  No.19 《倉庫街の雨》      |  （作品）        | |
+------------------------------------------------+
| 港の年表（4 つ） / 観覧のご案内                  |
+------------------------------------------------+
```

### 画像の切り抜き（art direction）

- 広い画面（48em 以上）: 3:2 の全景。幅 1200 と 2000 の 2 つを用意する
- 狭い画面: 4:5 の寄り。細部の多い全景は、狭い画面では簡略化した版へ差し替える（S12）。幅 480 と 800
- 最初の作品には `fetchpriority="high"`、以降は `loading="lazy"`。`width`・`height` で場所を確保する（本 skill の目安）

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| 題字の大きさ | `clamp(4.5rem, 13vw, 12rem)` | 本 skill の目安 |
| 書体 | 見出し: 明朝系のスタック、本文: ゴシック系のスタック | 本 skill の目安。外部フォントは使わない。他の OS での字面は未検証 |
| 色 | 壁 `#dfe2dd`、墨 `#1c211f`、青緑 `#1f5b60`（ダークは `light-dark()` で切り替え） | 本 skill の目安 |
| 列 | 12 列。作品 7 列 + キャプション 4 列（交互に左右。1〜7 列と 8〜11 列、6〜12 列と 2〜5 列） | 本 skill の目安 |
| 動き | 作品が現れるときだけ、`clip-path` で下へ開く。範囲は `entry 0% entry 60%` | 本 skill の目安。動きを減らす設定のときは付けない（S76）。自動で始まる動きではない（S75 の対象は、自動で始まり 5 秒を超えて続くもの） |
| 画像の寸法 | 広: 1500 x 1000（3:2）、狭: 800 x 1000（4:5） | 本 skill の目安 |
| 重さの目標 | LCP 2.5 秒以下（75 パーセンタイル） | S77。実測は本例の範囲外 |

非対応時の姿（本 skill の目安。対応状況は版を照合していない。次の宣言を無効にして描画し、`@supports` の分岐を反転して確かめた。ほかの機能の非対応は未確認）:

- `light-dark()`: 色の既定値を `:root` に書き、`@supports (color: light-dark(#000, #fff))` の中でだけ切り替える。非対応ではライトの色に固定される（ダークの設定でも）
- `animation-timeline: view()`: `@supports` の中でだけ動きを付ける。非対応では作品は最初から全部見える（動きなし）
- `subgrid`: 先に 12 列を `repeat(12, 1fr)` で明示し、対応する環境でだけ `subgrid` に置き換える。見た目は同じ
- スクロール連動は、動きを減らす設定のとき付けない。そのときも作品は最初から見える

コントラスト比（WCAG の相対輝度式。文字 4.5:1。S74。ダークは `light-dark()` を解決した sRGB で計算）:

| 組み合わせ | ライト | ダーク |
|---|---|---|
| 墨 / 壁 | 12.48 | 14.31 |
| 補助の文字（キャプション）/ 壁 | 6.74 | 8.97 |
| 青緑（年号・番号）/ 壁 | 5.90 | 8.95 |
| 罫線 / 壁（非文字） | 3.52 | 4.38 |

文字は画像の外の無地の面に置いたので、画像の上の最悪値は無い。写真ファイルが無いときの `alt` は、下地 `#b9beb8` の上に墨 `#1c211f` で出る（8.64:1。S74 の計算式）。

## 文言

| 場所 | 文言 | 理由 |
|---|---|---|
| 題字 | 港の記憶 | 展覧会名 |
| 会期 | 2027.3.4 から 5.30 | 数字を大きく、青緑で |
| キャプション | No.01　《夕べの荷揚げ》　1931 年　油彩・カンヴァス | 作品名・年・技法を 1 行で |
| 作品の解説 | 網を繕う人々を、霧の白で消し込んでいる。 | 見て分かることを 1 文で。評価語を避ける |
| 注記 | 作品画像の掲載は、所蔵者の許諾を得たものに限る（確認事項）。 | 権利は本 skill の外 |

## コード断片

1 ページとして通して見られる形。外部の CDN・スクリプト・フォント・画像ファイル・計測は使わない。写真（作品画像）は `photos/` のファイルを参照する。ライブラリは使わない。

`<head>` には、`<meta charset="utf-8">`、`<meta name="viewport" content="width=device-width, initial-scale=1">`、`<html lang="ja">` を置く前提である。

```html
<header class="top">
  <a class="mark" href="/">特別展 港の記憶</a>
  <a class="ticket" href="#info">観覧のご案内</a>
</header>
<main>
  <section class="intro" aria-labelledby="ex">
    <h1 id="ex"><span>港の</span><span>記憶</span></h1>
    <p class="dates"><b>2027.3.4</b> から <b>5.30</b><br>みなと市立美術館（架空）</p>
    <figure class="lead">
      <picture>
        <source media="(min-width: 48em)" width="1500" height="1000"
          srcset="photos/w01-wide-1200.jpg 1200w, photos/w01-wide-2000.jpg 2000w" sizes="58vw">
        <img src="photos/w01-narrow-800.jpg" width="800" height="1000"
          srcset="photos/w01-narrow-480.jpg 480w, photos/w01-narrow-800.jpg 800w" sizes="92vw"
          alt="夕方の岸壁に並ぶ木造の荷船。右手にクレーンの影" fetchpriority="high" decoding="async">
      </picture>
      <figcaption>No.01　《夕べの荷揚げ》　1931 年　油彩・カンヴァス</figcaption>
    </figure>
  </section>

  <section class="works" aria-labelledby="works-h">
    <h2 id="works-h">出品作品から（抜粋）</h2>
    <article class="work a">
      <figure>
        <picture>
          <source media="(min-width: 48em)" width="1500" height="1000"
            srcset="photos/w07-wide-1200.jpg 1200w, photos/w07-wide-2000.jpg 2000w" sizes="58vw">
          <img src="photos/w07-narrow-800.jpg" width="800" height="1000"
            srcset="photos/w07-narrow-480.jpg 480w, photos/w07-narrow-800.jpg 800w" sizes="92vw"
            alt="霧の朝、桟橋に立つ網繕いの人々" loading="lazy" decoding="async">
        </picture>
      </figure>
      <div class="label"><p class="no">No.07</p><h3>《霧の桟橋》</h3><p>1936 年　水彩・紙<br>網を繕う人々を、霧の白で消し込んでいる。</p></div>
    </article>
    <article class="work b">
      <figure>
        <picture>
          <source media="(min-width: 48em)" width="1500" height="1000"
            srcset="photos/w19-wide-1200.jpg 1200w, photos/w19-wide-2000.jpg 2000w" sizes="58vw">
          <img src="photos/w19-narrow-800.jpg" width="800" height="1000"
            srcset="photos/w19-narrow-480.jpg 480w, photos/w19-narrow-800.jpg 800w" sizes="92vw"
            alt="雨に濡れた石畳と、倉庫の赤い扉" loading="lazy" decoding="async">
        </picture>
      </figure>
      <div class="label"><p class="no">No.19</p><h3>《倉庫街の雨》</h3><p>1952 年　版画・紙<br>濡れた石畳に、扉の赤だけが残る。</p></div>
    </article>
  </section>

  <section class="years" aria-labelledby="years-h">
    <h2 id="years-h">港の年表（抜粋・架空）</h2>
    <ol>
      <li><b>1889</b><span>第一岸壁が完成</span></li>
      <li><b>1923</b><span>倉庫街の再建が始まる</span></li>
      <li><b>1964</b><span>貨物がコンテナへ移る</span></li>
      <li><b>1998</b><span>旧倉庫が美術館の分館になる</span></li>
    </ol>
  </section>

  <section id="info" class="info" aria-labelledby="info-h">
    <h2 id="info-h">観覧のご案内</h2>
    <dl>
      <div><dt>開館</dt><dd>9:30 から 17:00（金曜は 20:00 まで）</dd></div>
      <div><dt>休館</dt><dd>月曜日</dd></div>
      <div><dt>観覧料</dt><dd>一般 1,400 円（架空）</dd></div>
    </dl>
  </section>
</main>
<footer class="foot"><p>作品画像の掲載は、所蔵者の許諾を得たものに限る（確認事項）。</p></footer>
```

```css
:root {
  color-scheme: light dark;
  --wall: #dfe2dd; --ink: #1c211f; --ink-2: #454c49; --accent: #1f5b60; --line: #6f7774;
  --serif: "Hiragino Mincho ProN", "Yu Mincho", "Noto Serif CJK JP", serif;
  --sans: "Hiragino Sans", "Yu Gothic", "Noto Sans CJK JP", system-ui, sans-serif;
  --gut: clamp(1rem, 4vw, 3.5rem); --gap: clamp(0.75rem, 2vw, 1.75rem);
}
@supports (color: light-dark(#000, #fff)) {
  :root { --wall: light-dark(#dfe2dd, #151918); --ink: light-dark(#1c211f, #e4e8e3);
          --ink-2: light-dark(#454c49, #b3bab6); --accent: light-dark(#1f5b60, #7cc4c9);
          --line: light-dark(#6f7774, #78807d); }
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--wall); color: var(--ink); font-family: var(--sans); line-height: 1.8; }
a { color: inherit; }
:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
figure { margin: 0; }
img { display: block; width: 100%; height: auto; background: #b9beb8; color: #1c211f; }

.top { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 0 1rem; padding: 0.25rem var(--gut); font-size: 0.9375rem; }
.top a { display: inline-flex; align-items: center; min-height: 44px; }
.mark { font-family: var(--serif); font-weight: 700; text-decoration: none; }

.intro { display: grid; grid-template-columns: repeat(12, 1fr); column-gap: var(--gap); row-gap: 1.5rem;
         padding: clamp(1rem, 4vw, 3rem) var(--gut) clamp(3rem, 8vw, 6rem); }
h1 { grid-column: 1 / -1; margin: 0; font-family: var(--serif); font-weight: 700;
     font-size: clamp(4.5rem, 13vw, 12rem); line-height: 1.02; letter-spacing: 0.04em; }
h1 span { display: block; }
.dates { grid-column: 1 / -1; margin: 0; font-size: 1.0625rem; }
.dates b { font-variant-numeric: tabular-nums; font-size: 1.5rem; color: var(--accent); }
.lead { grid-column: 1 / -1; }
figcaption, .label p { font-size: 0.875rem; color: var(--ink-2); }
figcaption { margin-top: 0.5rem; }
@media (min-width: 48em) {
  h1 { grid-column: 1 / 7; grid-row: 1 / 3; align-self: end; }
  .dates { grid-column: 1 / 6; grid-row: 3; }
  .lead { grid-column: 6 / -1; grid-row: 1 / 4; margin-top: 3rem; }
}

.works, .years, .info { padding: clamp(2.5rem, 7vw, 5.5rem) var(--gut); border-top: 1px solid var(--line); }
h2 { margin: 0 0 2rem; font-family: var(--serif); font-size: clamp(1.375rem, 3vw, 1.875rem); font-weight: 700; line-height: 1.4; }
.works { display: grid; grid-template-columns: repeat(12, 1fr); column-gap: var(--gap); row-gap: clamp(3rem, 8vw, 7rem); }
.works h2 { grid-column: 1 / -1; margin: 0; }
.work { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(12, 1fr); column-gap: var(--gap); row-gap: 1rem; }
@supports (grid-template-columns: subgrid) { .work { grid-template-columns: subgrid; } }
.work figure, .work .label { grid-column: 1 / -1; }
.label h3 { margin: 0; font-family: var(--serif); font-size: 1.375rem; line-height: 1.4; }
.label p { margin: 0.25rem 0 0; }
.label .no { font-variant-numeric: tabular-nums; color: var(--accent); font-weight: 700; }
@media (min-width: 48em) {
  .work figure { grid-row: 1; } .work .label { grid-row: 1; align-self: end; }
  .a figure { grid-column: 1 / 8; }  .a .label { grid-column: 8 / 12; }
  .b figure { grid-column: 6 / -1; } .b .label { grid-column: 2 / 6; }
}

/* 動きは作品の現れ方の 1 か所だけ。対応する環境で、動きを減らす設定でないときに限る */
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .work img { animation: reveal linear both; animation-timeline: view(); animation-range: entry 0% entry 60%; }
    @keyframes reveal { from { clip-path: inset(0 0 100% 0); } to { clip-path: inset(0); } }
  }
}

.years ol { list-style: none; margin: 0; padding: 0; display: grid; gap: 1.25rem var(--gap);
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 12rem), 1fr)); }
.years li { border-top: 2px solid var(--ink); padding-top: 0.5rem; }
.years b { display: block; font-family: var(--serif); font-size: 2rem; line-height: 1.2; font-variant-numeric: tabular-nums; }
.info dl { margin: 0; max-width: 40rem; }
.info dl div { display: grid; grid-template-columns: 5rem 1fr; padding: 0.75rem 0; border-top: 1px solid var(--line); }
dt { color: var(--ink-2); } dd { margin: 0; font-weight: 700; }
.foot { padding: 1.5rem var(--gut) 3rem; border-top: 1px solid var(--line); font-size: 0.875rem; color: var(--ink-2); }
.foot p { margin: 0; }
```

### ライブラリを使う場合

本例はライブラリを使わない。スクロール連動の動きを、ライブラリ（アニメーション用のスクリプトなど）で書くのが現場で一般的な場合はあるが、本 skill はライブラリの版と配布物の整合性（Subresource Integrity のハッシュ）を照合していないため、コードを置かない。使う場合は、版を固定し、外部から配布されるファイルには整合性の検証を付け、本体の断片がライブラリ無しで動くこと（非対応では作品が最初から見えること）を保つ。

描画して確かめた条件: 1440・768・600・390・320 px、ライトとダーク、動きを減らす設定（全要素の `animation-name` が `none`）、写真ファイルあり / なし、新しい CSS の非対応の模擬。スクロール連動は、各作品の位置までスクロールして撮り、作品が現れること、動きを減らす設定で全部見えることを確かめた。どの幅でも要素の右端は画面内に収まった; 320 px・文字 200%（ルートの `font-size` を 2 倍）と 320 x 256 px（1280 px の 400% 拡大に相当）でも、横にはみ出さず、`overflow: hidden` の祖先から切れる要素も無いことを測った。

## 初見検証

初めて見る人に、説明なしで答えてもらう設計である（実験の結果ではない）。上の 3 つが本題で、最後の 1 つは補助。

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 「港の特別展。作品が主役」 | 題字と最初の作品 |
| 何を操作できるか | 「観覧のご案内」のリンク | 上の右端のリンク |
| どう操作するか | タップで案内へ移る | 下線つき・44 px 以上 |
| どの要素に最初に目が行ったか | 題字か最初の作品か | 目安。作品に先に行けば、題字が強すぎない |

## 点検

- 動きは作品の現れ方の 1 か所だけで、動きを減らす設定で止まる。自動で続く動きは無い（S75）
- 作品が画面幅ごとに切り抜かれ、狭い画面は寄りの版である。写真ファイルが無くても場所が確保される
- 最初の作品だけ `fetchpriority="high"`、ほかは遅延読み込み。LCP の実測は別に行う（S77）
- 文字は画像の外にあり、比は表のとおり
- 320 px・文字 200%（ルートの `font-size` を 2 倍）で横にはみ出さない。ヘッダーのリンクの行は折り返す（`flex-wrap`）
- 推測の明示: 作品画像の実物（色・粒度）での見え、来館への効果はこの例からは分からない。画像の権利は確認事項

## この例の出典

S11、S12、S24、S25、S46、S54、S55、S60、S74、S75、S76、S77。台帳は `../references/sources.md`。

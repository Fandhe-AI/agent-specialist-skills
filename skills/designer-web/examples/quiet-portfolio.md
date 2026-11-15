# 例: 静かな個人ポートフォリオ（声を出す 1 か所を「実寸の比率の並び」にする）

「派手にしたくない。でも地味すぎるのは嫌」という依頼を、静けさを省略でなく設計にして作る例。題材は架空の陶芸家で、実在の作家・工房の模倣は含まない。静かな見た目を作るときと、ポートフォリオが UX の慣習に従うべきかを考えるときに開く。

## 依頼

- 作家: 陶芸家 三浦野枝（架空）の個人サイト。作品の一覧・作品の詳細・連絡
- 依頼文（架空）: 「派手にしたくない。静かで、作品が見えればいい。でも地味すぎるのは嫌」
- 見る人: 器を探す人と、取り扱いを考える店の人
- 範囲外: 文字組の規則（導入されていれば designer-typography）、作品写真の撮影と権利

### 根拠の範囲（先に読む）

- 出典のある事実: 「静かな Web」は、成長目標を持たない個人サイトや小さな場を、騒がしさへの対抗として挙げる予測記事に出る（S41。予測で、普及度は測れていない）。ポートフォリオが UX の慣習に従うべきかは、慣習は助けになるが、目的が違えば整理と移動の仕方も違いうる、と両面がある（S28）。装飾目的の大きな画像は無視される種類として挙がり、製品・実在の人の写真は精読される例に挙がる（S60）。大胆さは 1 か所に使い、ほかは静かに保つ（S55）
- 英語の原文（S55）: "Spend your boldness in one place." 日本語は要旨で、本人の発言ではない
- 本 skill の目安（出典なし）: 色数（3 つ）・書体の系統（1）・器の輪郭の描き方・係数。実例として、UI の書体約 99% が 1 つ、色が 4 値のサイトがある（S20）。1 件の実例で、基準ではない
- 未検証: Safari・Firefox での見え。`text-wrap` の対応状況（版は未照合）。作品写真の実物での見え

## 目的の一文

作品の大きさと形が一目で比べられ、湯のみの詳細と連絡先に迷わず届く。

## 削るもの

| 削るもの | 理由 |
|---|---|
| ヒーロー写真のスライダー・自動ループ | 動く情報は止める手段が要る（S75）。「静か」と合わない |
| ホバーで拡大するカード・3 列のカードの束 | 同じ角丸・同じ影のカード（S54 の第 4 項）。器は大きさが違うのに、同じ大きさの箱に入れると比べられない |
| 暖色の cream＋セリフ＋テラコッタ | S54 の第 1 項。手仕事の見た目と重なる既定の組み合わせと、本 skill は解釈する（S54 の述べたことではない）。白に近い地と墨と石色にする |
| 「ABOUT」などの大文字のラベル | 被写体と無関係に現れる飾り（S54 の第 5 項） |
| 背景の質感・影 | 作品が質感を持つ。足さない |

## 構成

### 方向性のメモ（作る前に書いた文章）

- 被写体・目的・見る人: 毎日使う器を作る陶芸家。作品の形と大きさを、器を探す人に静かに見せる
- 言葉: 実寸、余白、器の影、無言
- 色: 白に近い灰（地）、墨（文字）、石色（器の影）の 3 つ。差し色は無い
- 書体: ゴシック 1 系統。太さは標準と太字の 2 つ
- 構図: 声を出す 1 か所は、作品の一覧。器の輪郭を実寸の比率（高さ = 寸法 mm × 係数）で、同じ地面に並べる。ほかは左揃えと余白だけ
- 画像と質感: 詳細ページの写真は実物（S60）。一覧は輪郭で見せ、写真が届くまでの下地にもなる。質感は足さない
- 参照の扱い: 好きな点を「余白・数字・並べ方」に分けて書く。見た目は写さない

### 「静か」と「省略」の違い（選んだ形跡）

| 選んだ形跡 | どこに出ているか |
|---|---|
| 比率 | 器を実寸の比率で並べる。高さは寸法から決まる |
| 余白 | 題字の上下に、画面幅に連動した余白（`clamp()`） |
| 数字 | 寸法・重さ・価格は等幅の桁（`tabular-nums`）で、罫線で区切る |
| 軽さ | 画像ファイルは詳細の写真 1 枚。重さも静けさの一部（S82、S35。いずれも C） |

静けさと、手が抜けているだけの状態は別である（本 skill の整理（推測））。選んだ形跡（比率・余白・数字）を言えるかで分ける。

### ポートフォリオと慣習

ナビは慣習のまま（作品・湯のみ・連絡）にし、個性は作品の見せ方だけに置く。ポートフォリオが UX の慣習に従うかは、目的で決める（S28）。本例の目的は「比べて探す」ことなので、慣習のナビを残した。

### ページの組み立て

```text
+------------------------------------------------+
| 野枝陶房                         作品 湯のみ 連絡 |
|                                                |
|  土を挽き、窯で焼く。                           |
|  毎日使える器を、一つずつ。                     |
|                                                |
| 作品（実寸の比率で並べています）                 |
|  [花器] [湯のみ] [急須]  [皿]  [壺]  [徳利]      |  同じ地面に並ぶ輪郭
|  ------------------------------------------   |
+------------------------------------------------+
| [湯のみの写真]       湯のみ（粉引）              |
|                      寸法 / 重さ / 釉薬 / 価格   |
+------------------------------------------------+
```

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| 器の高さ（画面上） | 寸法（mm）× 係数 `k`。`k` は狭い画面で `0.15vw`、広い画面で `0.075vw` | 本 skill の目安。実寸の再現でなく、比率の再現。1440 px の幅で花器（240 mm）は約 259 px |
| 色 | 地 `#fafaf8`、墨 `#1d1d1b`、石色 `#c9c5bc`（ダークは反転） | 本 skill の目安 |
| 書体 | ゴシック 1 系統。見出し 400（大）、小見出し 700 | 本 skill の目安。声を出す層は絞る（S20 の実例、S55） |
| 題字の大きさ | `clamp(1.875rem, 5.4vw, 4rem)`、行間 1.4 | 本 skill の目安。文字組の規則は、導入されていれば designer-typography |
| 余白 | 題字の上 `clamp(4rem, 14vw, 10rem)` | 本 skill の目安 |
| 動き | なし | 動きを持たない（S75 の対象外） |
| 写真 | 1:1。広い画面は幅 1200 と 1800、狭い画面は 480 と 800。`loading="lazy"` | 属性の使い方は目安。実物の写真（S60） |

非対応時の姿（本 skill の目安。対応状況は版を照合していない。次の宣言を無効にして描画し、`@supports` の分岐を反転して確かめた。ほかの機能の非対応は未確認）:

- `text-wrap: balance`・`word-break: auto-phrase`: 非対応では通常の折り返しで、狭い画面の題字や見出しの末尾に 1 文字だけ残ることがある。題字は一文ごとのブロックに分けた（描画で確認）
- 器の輪郭は SVG とビューポート単位の寸法で、非対応の機能は使わない
- 写真ファイルが無いときの `alt` は、石色の下地の上に墨で出る（ライト 9.81:1・ダーク 6.50:1。S74 の計算式）

コントラスト比（WCAG の相対輝度式。文字 4.5:1、非文字 3:1。S74）:

| 組み合わせ | ライト | ダーク |
|---|---|---|
| 墨 / 地 | 16.16 | 15.17 |
| 補助の文字 / 地 | 7.18 | 8.34 |
| 罫線 / 地（非文字） | 3.40 | 4.79 |
| 石色の器の輪郭 / 地（装飾。SVG は `aria-hidden`。名前と寸法は文字で併記される） | 1.65 | 2.33 |

## 文言

| 場所 | 文言 | 理由 |
|---|---|---|
| 一文 | 土を挽き、窯で焼く。毎日使える器を、一つずつ。 | 工程と使い方を 2 文で |
| 一覧の見出し | 作品（実寸の比率で並べています） | 並べ方を伝える |
| 作品の説明 | 口に当たる縁を薄く挽いた。持つと軽く、冷めにくい。 | 手触りを 1 文で。誇張を避ける |
| 連絡 | 取り扱いのご相談は、メールでお願いします。 | 用件を 1 つに絞る |

## コード断片

1 ページとして通して見られる形。外部の CDN・スクリプト・フォント・画像ファイル・計測は使わない。作品写真は `photos/` のファイルを参照する。器の寸法は、クラス（`.v1`〜`.v6`）の CSS 変数で指定する。ライブラリは使わない。

`<head>` には、`<meta charset="utf-8">`、`<meta name="viewport" content="width=device-width, initial-scale=1">`、`<html lang="ja">` を置く前提である。

```html
<header class="top">
  <a class="mark" href="/">野枝陶房</a>
  <nav aria-label="主要"><a href="#works">作品</a><a href="#piece">湯のみ</a><a href="#contact">連絡</a></nav>
</header>
<main>
  <section class="intro" aria-labelledby="lead">
    <h1 id="lead"><span>土を挽き、窯で焼く。</span><span>毎日使える器を、一つずつ。</span></h1>
    <p>三浦野枝（架空の陶芸家）の作品と、取り扱いのご案内。</p>
  </section>

  <section id="works" class="works" aria-labelledby="works-h">
    <h2 id="works-h">作品（実寸の比率で並べています）</h2>
    <ul class="shelf">
      <li class="v1">
        <svg viewBox="0 0 120 240" aria-hidden="true"><path d="M45 0H75C75 30 70 50 88 80C112 118 120 150 118 190C117 215 108 232 104 240H16C12 232 3 215 2 190C0 150 8 118 32 80C50 50 45 30 45 0Z"/></svg>
        <p><b>花器</b><span>高さ 240 mm</span></p>
      </li>
      <li class="v2">
        <svg viewBox="0 0 84 72" aria-hidden="true"><path d="M0 0H84C84 40 66 72 42 72C18 72 0 40 0 0Z"/></svg>
        <p><b>湯のみ</b><span>高さ 72 mm</span></p>
      </li>
      <li class="v3">
        <svg viewBox="0 0 170 110" aria-hidden="true"><g><ellipse cx="75" cy="68" rx="60" ry="40"/><path d="M45 30H105L98 22H52Z"/><circle cx="75" cy="16" r="7"/><path d="M128 58L168 26V40L134 88Z"/></g><path class="stroke" d="M20 54C6 46 4 98 24 90"/></svg>
        <p><b>急須</b><span>高さ 110 mm</span></p>
      </li>
      <li class="v4">
        <svg viewBox="0 0 230 30" aria-hidden="true"><path d="M0 0H230C226 18 214 24 200 26L190 30H40L30 26C16 24 4 18 0 0Z"/></svg>
        <p><b>皿</b><span>径 230 mm</span></p>
      </li>
      <li class="v5">
        <svg viewBox="0 0 190 210" aria-hidden="true"><path d="M60 0H130C130 14 128 22 150 36C178 52 190 84 190 120C190 172 160 210 120 210H70C30 210 0 172 0 120C0 84 12 52 40 36C62 22 60 14 60 0Z"/></svg>
        <p><b>壺</b><span>高さ 210 mm</span></p>
      </li>
      <li class="v6">
        <svg viewBox="0 0 90 170" aria-hidden="true"><path d="M33 0H57C57 14 56 26 62 42C84 66 90 90 90 120C90 152 72 170 45 170C18 170 0 152 0 120C0 90 6 66 28 42C34 26 33 14 33 0Z"/></svg>
        <p><b>徳利</b><span>高さ 170 mm</span></p>
      </li>
    </ul>
  </section>

  <section id="piece" class="piece" aria-labelledby="piece-h">
    <figure>
      <picture>
        <source media="(min-width: 48em)" width="1200" height="1200" srcset="photos/yunomi-square-1200.jpg 1200w, photos/yunomi-square-1800.jpg 1800w" sizes="50vw">
        <img src="photos/yunomi-square-800.jpg" width="800" height="800"
          srcset="photos/yunomi-square-480.jpg 480w, photos/yunomi-square-800.jpg 800w" sizes="90vw"
          alt="白い粉引の湯のみ。縁に、釉薬の溜まりが薄く出ている" loading="lazy" decoding="async">
      </picture>
    </figure>
    <div>
      <h2 id="piece-h">湯のみ（粉引）</h2>
      <dl>
        <div><dt>寸法</dt><dd>高さ 72 mm、口径 84 mm</dd></div>
        <div><dt>重さ</dt><dd>約 140 g</dd></div>
        <div><dt>釉薬</dt><dd>白化粧に透明釉</dd></div>
        <div><dt>価格</dt><dd>4,200 円（架空）</dd></div>
      </dl>
      <p>口に当たる縁を薄く挽いた。持つと軽く、冷めにくい。</p>
    </div>
  </section>

  <section id="contact" class="contact" aria-labelledby="contact-h">
    <h2 id="contact-h">連絡</h2>
    <p>取り扱いのご相談は、メールでお願いします。<br><a href="mailto:info@example.com">info@example.com</a></p>
  </section>
</main>
<footer class="foot"><p>野枝陶房（架空）</p></footer>
```

```css
:root {
  color-scheme: light dark;
  --ground: #fafaf8; --ink: #1d1d1b; --ink-2: #55554f; --stone: #c9c5bc; --line: #8a8880;
  --sans: "Hiragino Sans", "Yu Gothic", "Noto Sans CJK JP", system-ui, sans-serif;
  --gut: clamp(1rem, 5vw, 4rem);
  --k: 0.15vw;
}
@media (min-width: 48em) { :root { --k: 0.075vw; } }
@media (prefers-color-scheme: dark) {
  :root { --ground: #171716; --ink: #ececea; --ink-2: #b2b1aa; --stone: #55534d; --line: #86847c; }
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--ground); color: var(--ink); font-family: var(--sans); line-height: 1.85; }
a { color: inherit; text-underline-offset: 0.25em; }
:focus-visible { outline: 3px solid var(--ink); outline-offset: 3px; }

.top { display: flex; justify-content: space-between; align-items: center; padding: 0.5rem var(--gut); }
.top a { display: inline-flex; align-items: center; min-height: 44px; }
.mark { font-weight: 700; text-decoration: none; letter-spacing: 0.08em; }
.top nav { display: flex; gap: 0.25rem; }
.top nav a { padding: 0 0.5rem; font-size: 0.9375rem; }

.intro { padding: clamp(4rem, 14vw, 10rem) var(--gut) clamp(3rem, 8vw, 6rem); max-width: 64rem; }
h1 { margin: 0 0 1.5rem; font-size: clamp(1.5rem, 5.4vw, 4rem); line-height: 1.4; font-weight: 400; letter-spacing: 0.03em; text-wrap: balance; word-break: auto-phrase; }
h1 span { display: block; }
.intro p { margin: 0; color: var(--ink-2); }

h2 { margin: 0 0 2rem; font-size: 1.125rem; font-weight: 700; letter-spacing: 0.04em; line-height: 1.5; text-wrap: balance; word-break: auto-phrase; }
.works, .piece, .contact { padding: clamp(2.5rem, 7vw, 5rem) var(--gut); }

/* 声を出す 1 か所: 器を実寸の比率で、同じ地面に並べる。高さ = 寸法(mm) x 係数 */
.shelf { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: 2.5rem 1rem; align-items: end; }
.shelf li { display: flex; flex-direction: column; justify-content: flex-end; border-bottom: 1px solid var(--line); padding-bottom: 0.75rem; min-width: 0; }
.v1 { --w: 120; --h: 240; } .v2 { --w: 84; --h: 72; } .v3 { --w: 170; --h: 110; }
.v4 { --w: 230; --h: 30; } .v5 { --w: 190; --h: 210; } .v6 { --w: 90; --h: 170; }
.shelf svg { display: block; width: calc(var(--w) * var(--k)); height: calc(var(--h) * var(--k)); max-width: 100%; margin-bottom: 0.75rem; fill: var(--stone); }
.shelf svg .stroke { fill: none; stroke: var(--stone); stroke-width: 9; stroke-linecap: round; }
.shelf p { margin: 0; display: grid; font-size: 0.9375rem; }
.shelf span { color: var(--ink-2); font-size: 0.875rem; font-variant-numeric: tabular-nums; }
@media (min-width: 48em) { .shelf { grid-template-columns: repeat(6, auto); justify-content: space-between; gap: 1rem; } }

.piece { display: grid; gap: 2rem; border-top: 1px solid var(--line); }
.piece figure { margin: 0; }
.piece img { display: block; width: 100%; height: auto; background: var(--stone); color: var(--ink); }
@media (min-width: 48em) { .piece { grid-template-columns: 1fr 1fr; gap: 4rem; align-items: end; } }
dl { margin: 0 0 1.5rem; }
dl div { display: grid; grid-template-columns: 4.5rem 1fr; padding: 0.5rem 0; border-top: 1px solid var(--line); }
dt { color: var(--ink-2); } dd { margin: 0; font-variant-numeric: tabular-nums; }
.piece p, .contact p { margin: 0; }
.contact { border-top: 1px solid var(--line); }
.foot { padding: 1.5rem var(--gut) 3rem; color: var(--ink-2); font-size: 0.875rem; }
.foot p { margin: 0; }
```

描画して確かめた条件: 1440・768・600・390・320 px、ライトとダーク、写真ファイルあり / なし、新しい CSS の非対応の模擬。急須の取っ手が `viewBox` の内側に収まることを拡大して確かめた。どの幅でも要素の右端は画面内に収まった。

## 初見検証

初めて見る人に、説明なしで答えてもらう設計である（実験の結果ではない）。上の 3 つが本題で、最後の 1 つは補助。

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 「器の作家。器の大きさが比べられる」 | 並んだ輪郭と寸法 |
| 何を操作できるか | 上の 3 つのリンク、湯のみの詳細、メール | 下線つきのリンク |
| どう操作するか | タップで該当箇所へ。メールは本文を書いて送る | 44 px 以上の面 |
| この見た目から何と思ったか | 静かな工房。器を探せる | 目が最初に行った所（輪郭か一文か） |

## 点検

- 静けさの選んだ形跡（比率・余白・数字・軽さ）を言える。声を出す場所は 1 か所（器の並び）
- 差し色が無く、色は 3 つ。書体は 1 系統
- 写真が無くても崩れない。一覧は輪郭で成立する
- 文字は 4.5:1 以上。器の輪郭は装飾で、スクリーンリーダーには名前と寸法の文字が読まれる（輪郭は `aria-hidden`）
- 320 px で、器の輪郭と文字が欠けず、横にはみ出さない
- 推測の明示: 器を探す人の反応はこの例からは分からない。実物の写真・権利は別に確認する

## この例の出典

S20、S28、S35、S41、S54、S55、S60、S74、S75、S82。台帳は `../references/sources.md`。

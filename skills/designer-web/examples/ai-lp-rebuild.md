# 例: 「AI っぽい」LP の作り直し（既定値の洗い出しと、被写体からの再出発）

AI で作ったら「どこかで見たサイト」になった LP を、既定値を洗い出し、被写体（請求書・伝票）から方向性を決め直して作り直す例。題材は架空のサービスで、実在の製品・ブランドの模倣は含まない。「AI っぽい」を避けたいとき、同じ依頼から同じ案が出ていないかを点検するときに開く。

## 依頼

- サービス: 請求書の取り込みと突合を自動化する業務サービス「トジメ」（架空）の新製品 LP
- 依頼文（架空）: 「AI で作ったら、どこかで見たようなサイトになった。作り直したい。でも AI は使いたい」
- 現状（架空）: 紫のグラデーションの背景・Inter 系の書体・中央揃えのヒーロー・アイコン付きの 3 列の角丸カード・すべての見出しの上の大文字のラベル
- 見る人: 月末の請求書の処理に追われる、経理の担当者
- 範囲外: 製品の機能の正しさ、料金の設計、料金・仕様の法的表示

### 根拠の範囲（先に読む）

- 出典のある事実: AI の提供元の公開文書は、取得時点（2026-11-15）で AI の出力が偏る見た目を列挙し（cream＋セリフ＋テラコッタ、近黒＋蛍光色 1 色、新聞風の罫線、同じ角丸・同じ影のカードの束、すべての見出しの上の大文字のラベルなど。S54）、独自の見た目の出どころは被写体の業界・素材・言い回しと書く（S55）。記事では、紫のグラデーション・Inter・角丸のカード・アイコンの箱を 3 つ並べた格子が語られる（S56。C。体感）。原因を学習データの偏りとする説は推論で、測定は無い（S57、S59。いずれも C）。ページの見た目の均質化は測定されている（S50。著者の要約で原論文未取得。サンプルの偏りは台帳の備考）
- 英語の原文（S55）: "The subject's industry, subject matter, materials, and vernacular are where distinctive visual choices come from" 日本語は要旨で、本人の発言ではない
- 生成 AI を使った物語は、個々には創造的でも集合として似るという実験がある（S53。取得したのは要旨のみ）。物語の執筆の実験で、ビジュアルへの直接の根拠ではなく、類比にとどめる
- 本 skill の観察・目安（出典なし）: 「中央揃えのヒーロー」を偏りの 1 つとすること、色・寸法・角度、回避の定番が次の定型になるという推測
- 生成 AI を、方向性の確認に使い、最終の見た目と手仕事の層は人が決めた制作側の実例がある（S21。自己申告）。本例もその線引きを採る
- 未検証: Safari・Firefox での見え。AI の提供元の文書は数か月で書き換わる時点情報で、「AI っぽい」の判定基準ではない

## 目的の一文

月末の請求書の突合が終わっていることを、経理の担当者が 10 秒で理解し、無料で試す 1 手に進める。

## 削るもの

| 削るもの | 理由 |
|---|---|
| 紫のグラデーションの背景 | 体感として語られる AI 製の見た目（S56）。被写体の色から決める |
| Inter 系の書体（既定のゴシック） | 同上（S56）。書体は声を出す場所に太い字面を使い、本文は読みやすい標準にする |
| アイコン付きの 3 列の角丸カード | 同上（S56）と、同じ角丸・同じ影のカードの束（S54 の第 4 項）。「3 つの行」に置き換える |
| すべての見出しの上の大文字のラベル | 被写体と無関係に現れる飾り（S54 の第 5 項） |
| 中央揃えのヒーロー | 本 skill の観察（出典なし）。左揃えと、右の伝票の 2 要素にする |
| 全セクションのフェードイン | 定型の動き（S55）。この例は動きを持たない |

回避の定番に逃げない: cream＋セリフ＋テラコッタや、近黒＋蛍光色は、別の定型になる（S54。回避も次の定型になりうるのは本 skill の推測）。本例は、薄い緑灰の地・墨・朱の判子 1 点にした。

## 構成

### 既定値の洗い出し（現状の案の点検）

| 要素 | 現状の案 | 既定値か | 根拠 |
|---|---|---|---|
| 背景 | 紫のグラデーション | はい | S56（C） |
| 書体 | Inter 系 | はい | S56（C） |
| カード | アイコン付きの 3 列の角丸カード | はい | S56（C）、S54 |
| 見出しのラベル | 大文字の小見出し | はい | S54 |
| ヒーロー | 中央揃え | 本 skill の観察 | 出典なし |

### 被写体から出発する（材料の表）

| 材料 | 例 | 見た目への使い方 |
|---|---|---|
| 言い回し | 突合・消込・差し戻し・締め日・押印 | 見出しと文言。「突合まで終わっている」 |
| 素材 | 複写伝票の紙・罫線・判子 | 伝票を主役にし、帳簿の罫線を地に、判子の朱を 1 点だけ |
| 数字 | 金額・件数・合計 | 桁を揃える（`tabular-nums`）。数字を大きく |
| 現場 | 月末の経理、取引先ごとの請求書 | 「月末の作業は 3 つの行」の見出し |

### 方向性のメモ（作る前に書いた文章）

- 被写体・目的・見る人: 請求書の取り込みと突合の自動化。月末の経理担当者が、突合まで終わっていると 10 秒で分かる
- 言葉: 伝票、罫線、判子、月末
- 色: 薄い緑灰（帳簿の紙）、墨、朱（判子の 1 点だけ）。罫線は紙の罫の色
- 書体: 太いゴシックを見出しだけに。本文は標準。数字は桁を揃える
- 構図: 左揃えの見出しと説明。右に傾けた伝票（声を出す 1 か所）。判子は伝票の右下の余白に押す（数字に重ねない）。そのほかは静か
- 画像と質感: 画像ファイルは使わない。伝票は HTML の表。帳簿の罫は薄い線で、右側だけに出す
- 参照の扱い: 参照から抜くのは「実物の素材を主役にする」判断。見た目は写さない
- 層で分ける: ナビ・料金表・ボタンなどの慣習の層は慣習のまま。声を出す層（ヒーロー・書体・伝票・判子）だけ既定値を避ける（本 skill の整理）

### 既定の案との比較（S55 の見直し）

同じ依頼を、制約なしで別の人が出したら得そうな案と、本案を比べる。

| 項目 | 同種の依頼で出がちな案 | 本案 | 変えた理由 |
|---|---|---|---|
| ヒーロー | 中央揃えの見出し＋ボタン | 左揃えの見出し＋右に傾いた伝票 | 経理の担当者が見慣れた物を主役にする |
| 差し色 | 紫か青の面 | 朱の判子 1 点 | 判子は「確認した」の合図そのもの |
| 説明 | アイコン付きの 3 つのカード | 番号つきの 3 つの行 | 作業の順序を、帳簿の行として見せる |
| 地 | 白かグラデーション | 帳簿の紙の薄い緑灰 | 被写体の素材 |

ダークは、地が近黒に近づき、朱の判子が S54 の第 2 項（近黒＋1 色の差し色）に形が近くなる。ライトを標準とし、ダークは設定への対応である。判子の朱は伝票の素材から決めた。

### ページの組み立て

```text
+-----------------------------------------------+
| トジメ                     しくみ 料金 [無料で試す] |
|  月末の請求書、               +----------------+  |
|  突合まで終わっている。       | 請求書  No.0412 |  |  右: 傾いた伝票
|  説明 2 文                     | 品名 数量 金額  |  |
|  [無料で試す] しくみを見る     | 合計  92,400   |  |
|                               |        (判子)  |  |
+-----------------------------------------------+
| 月末の作業は、3 つの行                          |
| 1 取り込む  2 突合する  3 確認して出す           |
| 料金（表）                 [無料で試す]          |
+-----------------------------------------------+
```

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| 色 | 地 `#e4ebe3`、墨 `#17202b`、罫 `#9db8a5`、伝票の紙 `#fcfdfb`、判子の朱 `#c8381f`（`oklch()` で上書き） | 本 skill の目安 |
| 見出し | `clamp(1.5rem, 6.6vw, 3.25rem)`（広い画面は `clamp(1.75rem, 3.6vw, 3.25rem)`）、太さ 800 | 本 skill の目安 |
| 伝票 | 幅 30rem 以下、`rotate: 1.2deg`、判子 `-11deg` | 本 skill の目安 |
| 数字 | `font-variant-numeric: tabular-nums`（桁を揃える） | 本 skill の目安 |
| 帳簿の罫 | 広い画面（56em 以上）の右側だけ。左は透明にして文字の下に出さない | 本 skill の目安 |
| 動き | なし | 動きを持たない（S75 の対象外） |
| 操作対象 | ボタンの高さ 52 px、リンクは 44 px 以上 | 本 skill の目安 |

非対応時の姿（本 skill の目安。対応状況は版を照合していない。次の宣言を無効にして描画し、`@supports` の分岐を反転して確かめた。ほかの機能の非対応は未確認）:

- `oklch()`: 先に `#` 形式の色を宣言し、`@supports` で上書きする。非対応では `#` 形式の色
- `mask-image`: 帳簿の罫は `@supports (mask-image: …)` の中でだけ出す。非対応では罫を出さない（文字の下に罫が出ない）
- `rotate`: 非対応では伝票と判子が傾かない
- `text-wrap: balance`・`text-wrap: pretty`: 非対応では通常の折り返し（説明文の末尾に短い行が残ることがある）

コントラスト比（WCAG の相対輝度式。文字 4.5:1、非文字 3:1。S74。`oklch()` を解決した sRGB で計算）:

| 組み合わせ | ライト | ダーク |
|---|---|---|
| 墨 / 地 | 13.48 | 15.05 |
| 補助の文字 / 地 | 6.71 | 9.00 |
| ボタンの文字 / ボタン | 13.48 | 15.05 |
| 伝票の文字 / 伝票の紙 | 16.11 | 16.11 |
| 伝票の補助の文字 / 伝票の紙 | 8.02 | 8.02 |
| 判子の朱 / 伝票の紙（装飾。「確認済」は文字でも書かれる。色は CSS 変数で、`#` 形式の既定は 5.09） | 5.67 | 5.67 |
| 伝票の行の罫 / 紙（装飾。行は余白と文字の位置でも分かれる） | 2.22 | 6.15 |

`#` 形式の色では、墨 / 地が 13.53、補助の文字 / 地が 6.74。帳簿の罫は文字の背後に出ない（右側だけ）。見出しと説明の文字だけを透明にして撮り、背後の全画素で測ると、1440 px の最も不利な画素でも、ライト 13.48・ダーク 15.05（無地）。

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| 見出し | 次世代の AI で請求書の未来を変える | 月末の請求書、突合まで終わっている。 | 機能の自慢でなく、使った後の状態を言う。誇張を避ける |
| 説明 | 革新的なプラットフォームがあなたの業務を加速 | 届いた請求書を取り込み、発注と照らし合わせて、合わないものだけを知らせる。 | 作業を動詞で言う |
| ボタン | 今すぐはじめる → | 無料で試す | 動詞で短く。矢印を足さない（S54 の第 5 項の飾り） |
| 伝票の状態 | - | 確認済 / 発注書 No. 0388 と一致 | 判子の意味を文字でも書く |
| 手順 | 3 つのメリット | 月末の作業は、3 つの行 | 現場の言い回し |

## コード断片

1 ページとして通して見られる形。外部の CDN・スクリプト・フォント・画像ファイル・計測は使わない。伝票は HTML の表、判子は SVG（色は CSS の変数）。ライブラリは使わない。

`<head>` には、`<meta charset="utf-8">`、`<meta name="viewport" content="width=device-width, initial-scale=1">`、`<html lang="ja">` を置く前提である。

```html
<header class="top">
  <a class="mark" href="/">トジメ</a>
  <nav aria-label="主要"><a href="#flow">しくみ</a><a href="#price">料金</a><a class="btn-s" href="/start">無料で試す</a></nav>
</header>
<main>
  <section class="hero" aria-labelledby="h">
    <div class="copy">
      <h1 id="h">月末の請求書、<br>突合まで終わっている。</h1>
      <p>届いた請求書を取り込み、発注と照らし合わせて、合わないものだけを知らせる。経理は、その一覧を確認して押すだけ。</p>
      <p class="actions"><a class="btn" href="/start">無料で試す</a><a class="link" href="#flow">しくみを見る</a></p>
    </div>
    <figure class="slip">
      <figcaption class="slip-head"><b>請求書</b><span>No. 0412　状態 確認済</span></figcaption>
      <table>
        <thead><tr><th scope="col">品名</th><th scope="col">数量</th><th scope="col">金額（円）</th></tr></thead>
        <tbody>
          <tr><td>配送費（4 月分）</td><td>1</td><td>38,000</td></tr>
          <tr><td>梱包資材</td><td>120</td><td>41,400</td></tr>
          <tr><td>保管料</td><td>1</td><td>13,000</td></tr>
        </tbody>
        <tfoot><tr><th scope="row" colspan="2">合計</th><td>92,400</td></tr></tfoot>
      </table>
      <p class="match">発注書 No. 0388 と一致</p>
      <svg class="stamp" viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="54" stroke-width="5"/>
        <circle cx="60" cy="60" r="46" stroke-width="1.5"/>
        <text x="60" y="62" text-anchor="middle" font-size="34" font-weight="800">確認</text>
        <text x="60" y="94" text-anchor="middle" font-size="20" font-weight="700">4.30</text>
      </svg>
    </figure>
  </section>

  <section id="flow" class="flow" aria-labelledby="f">
    <h2 id="f">月末の作業は、3 つの行</h2>
    <ol>
      <li><b>1</b><div><h3>取り込む</h3><p>メールの添付と、取引先の画面から届いた請求書を、1 か所に集める。</p></div></li>
      <li><b>2</b><div><h3>突合する</h3><p>発注書・納品書と照らし、金額か数量が違うものに印を付ける。</p></div></li>
      <li><b>3</b><div><h3>確認して出す</h3><p>印の付いた分だけ見て、差し戻すか、支払いの一覧へ回す。</p></div></li>
    </ol>
  </section>

  <section id="price" class="price" aria-labelledby="p">
    <h2 id="p">料金</h2>
    <table>
      <thead><tr><th scope="col">プラン</th><th scope="col">月額（税込）</th><th scope="col">請求書の件数</th></tr></thead>
      <tbody>
        <tr><th scope="row">ライト</th><td>9,800 円</td><td>月 100 件まで</td></tr>
        <tr><th scope="row">スタンダード</th><td>29,800 円</td><td>月 500 件まで</td></tr>
        <tr><th scope="row">大規模</th><td>ご相談</td><td>月 500 件を超える</td></tr>
      </tbody>
    </table>
    <p class="actions"><a class="btn" href="/start">無料で試す</a></p>
  </section>
</main>
<footer class="foot"><p>トジメ（架空のサービス）。数値は例。</p></footer>
```

```css
:root {
  color-scheme: light dark;
  --ground: #e4ebe3; --ink: #17202b; --ink-2: #435063; --rule: #9db8a5; --paper: #fcfdfb; --stamp: #c8381f;
  --sans: "Hiragino Sans", "Yu Gothic", "Noto Sans CJK JP", system-ui, sans-serif;
  --gut: clamp(1rem, 5vw, 4rem);
}
@supports (color: oklch(0% 0 0)) {
  :root { --ground: oklch(93% 0.02 150); --rule: oklch(74% 0.05 150); --stamp: oklch(53% 0.18 33); }
}
@media (prefers-color-scheme: dark) { :root { --ground: #101916; --ink: #e6ede8; --ink-2: #aebbb3; --rule: #4c6657; } }

* { box-sizing: border-box; }
body { margin: 0; background: var(--ground); color: var(--ink); font-family: var(--sans); line-height: 1.8; font-variant-numeric: tabular-nums; }
a { color: inherit; }
:focus-visible { outline: 3px solid var(--ink); outline-offset: 3px; }
.top { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 0 1rem; padding: 0.5rem var(--gut); }
.top a { display: inline-flex; align-items: center; min-height: 44px; white-space: nowrap; }
.mark { font-weight: 800; font-size: 1.25rem; text-decoration: none; }
.top nav { display: flex; align-items: center; gap: 0.25rem; }
.top nav a { padding: 0 0.5rem; font-size: 0.9375rem; }
.top .btn-s { background: var(--ink); color: var(--ground); text-decoration: none; font-weight: 700; padding: 0 1rem; margin-left: 0.5rem; }

/* 声を出す 1 か所は、伝票そのもの。罫は帳簿の罫線の色、朱は判子だけ */
.hero { position: relative; isolation: isolate; display: grid; gap: 3rem; padding: clamp(2rem, 6vw, 5rem) var(--gut) clamp(3rem, 8vw, 6rem); }
.hero::before { display: none; content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none;
                background-image: repeating-linear-gradient(to bottom, transparent 0 calc(2rem - 1px), var(--rule) calc(2rem - 1px) 2rem);
                mask-image: linear-gradient(90deg, transparent 45%, #000 85%); }
h1 { margin: 0 0 1.5rem; font-size: clamp(1.5rem, 6.6vw, 3.25rem); line-height: 1.3; text-wrap: balance; font-weight: 800; letter-spacing: 0.01em; }
.copy p { max-width: 32rem; margin: 0 0 1.5rem; text-wrap: pretty; }
.actions { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem 1.5rem; }
.btn { display: inline-flex; align-items: center; min-height: 52px; padding: 0 1.75rem; background: var(--ink); color: var(--ground); font-weight: 800; text-decoration: none; }
.link { display: inline-flex; align-items: center; min-height: 44px; text-underline-offset: 0.25em; }

@supports (mask-image: linear-gradient(90deg, #000, transparent)) { @media (min-width: 56em) { .hero::before { display: block; } } }
.slip { position: relative; margin: 0; padding: 1.25rem 1.25rem 5.75rem; background: var(--paper); color: #17202b; rotate: 1.2deg; isolation: isolate;
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1), 0 18px 32px -14px rgba(20, 30, 40, 0.45); max-width: 30rem; justify-self: center; width: 100%; }
.slip-head { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #17202b; font-size: 0.9375rem; }
.slip-head b { font-size: 1.25rem; letter-spacing: 0.3em; }
.slip table { width: 100%; border-collapse: collapse; font-size: 0.9375rem; }
.slip th, .slip td { padding: 0.5rem 0; border-bottom: 1px solid var(--rule); text-align: left; }
.slip thead th { font-weight: 600; color: #435063; }
.slip th:last-child, .slip td:last-child, .slip td:nth-child(2), .slip thead th:nth-child(2) { text-align: right; }
.slip th { white-space: nowrap; }
.slip tfoot th, .slip tfoot td { border-bottom: 0; font-weight: 800; font-size: 1.125rem; }
.match { margin: 0.5rem 0 0; font-size: 0.875rem; color: #435063; }
.stamp circle { fill: none; stroke: var(--stamp); }
.stamp text { fill: var(--stamp); }
.stamp { position: absolute; right: 1rem; bottom: 0.75rem; width: 6.5rem; rotate: -11deg; mix-blend-mode: multiply; opacity: 0.92; }
@media (min-width: 56em) { h1 { font-size: clamp(1.75rem, 3.6vw, 3.25rem); } .hero { grid-template-columns: 6fr 5fr; align-items: center; } .slip { justify-self: end; margin-right: 1rem; } }

.flow, .price { max-width: 64rem; padding: clamp(2.5rem, 7vw, 5rem) var(--gut); }
h2 { margin: 0 0 1.5rem; font-size: clamp(1.5rem, 3.6vw, 2.25rem); line-height: 1.35; font-weight: 800; }
.flow ol { list-style: none; margin: 0; padding: 0; }
.flow li { display: grid; grid-template-columns: 3rem 1fr; gap: 1rem; padding: 1.25rem 0; border-top: 1px solid var(--ink-2); }
.flow li b { font-size: 2rem; line-height: 1.2; }
.flow h3 { margin: 0 0 0.25rem; font-size: 1.25rem; }
.flow p { margin: 0; color: var(--ink-2); max-width: 36rem; }
.price table { width: 100%; max-width: 40rem; border-collapse: collapse; margin-bottom: 2rem; }
.price th, .price td { padding: 0.75rem 0.5rem 0.75rem 0; border-bottom: 1px solid var(--ink-2); text-align: left; }
.price thead th { color: var(--ink-2); font-weight: 600; font-size: 0.9375rem; }
.price td:nth-child(2) { font-weight: 800; white-space: nowrap; }
.price th[scope="row"] { white-space: nowrap; }
.foot { padding: 1.5rem var(--gut) 3rem; color: var(--ink-2); font-size: 0.875rem; }
.foot p { margin: 0; }
```

描画して確かめた条件: 1440・768・600・390・320 px、ライトとダーク、新しい CSS の非対応の模擬。どの幅でも要素の右端は画面内に収まった。320 px でヘッダーが折り返しても、文字が 1 字ずつ折れないことを確かめた。Tab でフォーカスの枠が見えた。

## 初見検証

初めて見る人に、説明なしで答えてもらう設計である（実験の結果ではない）。上の 3 つが本題で、最後の 1 つは補助。

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 「請求書の突合が自動で終わる」 | 見出しと、傾いた伝票の判子 |
| 何を操作できるか | 「無料で試す」ボタン | 墨のボタン |
| どう操作するか | タップで試用の申し込みへ | ボタンの形・52 px の高さ |
| この見た目から何と思ったか | 経理の道具。伝票の延長にある | 伝票と判子に目が行ったか |
| 同じ依頼で別の人が作りそうか | 作らなさそう（判子と傾いた伝票は被写体から出た） | 既定の案との比較の表 |

## 点検

- 既定値の洗い出しの各項目に、作り直しの理由がある。回避の定番（cream＋セリフ＋テラコッタ、近黒＋蛍光色）に寄っていない
- 慣習の層（ナビ・料金表・ボタン）は慣習のまま、声を出す層だけが既定値を避けている
- 伝票の数字が桁を揃え、合計が読める。判子が数字に重ならない
- 文字は 4.5:1 以上。罫・判子は装飾で、情報は文字でも書かれる
- 320 px で、伝票・料金表が欠けず、横にはみ出さない
- 推測の明示: 経理の担当者の反応・転換率はこの例からは分からない。AI を使う場合も、方向性のメモを先に作り、最終の見た目は人が決める（S21 の線引き。自己申告）。AI の提供元の文書は時点情報

## この例の出典

S21、S50、S53、S54、S55、S56、S57、S59、S74、S75。台帳は `../references/sources.md`。

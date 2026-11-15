# 例: スクロールで進む製品紹介（scroll-driven animations・静的な最終状態）

スクロールに合わせて部品が分解され、機能が順に分かる紹介ページを、スクロールの速さと向きを奪わずに作る例。題材は架空の自転車ライトの紹介ページで、実在の製品の演出の模倣は含まない。スクロール連動の演出を頼まれたとき、動きの範囲・縮小版・非対応ブラウザーでの姿・キーボードと支援技術で同じ情報に着けることを決めたいときに開く。ページの構成と文言は、導入されていれば designer-apple の `web-landing-page` の領域で、この例は動きの規則だけを扱う。

## 依頼

- 製品: 自転車用の充電式ライト「ホタル」（架空。販売元は架空の会社「ひかり工房」）
- 依頼文: 「スクロールに合わせて、部品が分解され、機能が順に出る紹介ページを作りたい」
- 現状: 製品の写真を 1 枚置き、機能を箇条書きで並べている。構造と部品の関係が伝わらない
- 想定するユーザー: 購入前に、構造と機能を知りたい人。スマートフォンで、片手でスクロールして読む。動きを減らす設定の人、キーボードやスクリーンリーダーで読む人もいる

### 根拠の範囲（先に読む）

- 出典のある事実は、scroll-driven animation がスクロールコンテナの位置に結びつくこと（S90）、従来はメインスレッドのスクロールイベントで実装していたこと（S146）、スクロールジャックが制御・発見性・注意・効率を損なうと観察されたこと（S138）、機能的な目的（段階的開示）があれば成功した例もあること（S139）、スクロールで要素が動くと前庭障害を起こしうること（S96）、操作で起きる動きを無効にできること（WCAG 2.3.3。レベル AAA。S95）、視差・スクロールジャックがめまいや片頭痛を起こしうること（S26）、拡大縮小や大きな物の移動が前庭の誘因になりうること（S149）である
- scroll-driven animations の規格は、取得した版の URL が 2023 年 6 月 6 日付の Working Draft の版だった（S143）。ブラウザーの対応は、取得した範囲で確認できていない（N09）。この例は、機能検出（`@supports`）で分け、非対応でも同じ内容が読める作りにする。対応状況は時点情報（2026-11-15）
- 範囲（cover 28.571% から 71.429%）・部品の移動量・高さ（250vh・100vh・50vh）・イージング（linear）は、本 skill の目安（出典なし）である。スクロール連動の効果を測った研究は取得していない
- 縮小版の置き換え（動きを止めて、分解した状態を静止で見せる）は、本 skill の整理である。WCAG と MDN は縮小の必要を述べるが、置き換えの表は出典が無い

## 目的の一文

スクロールに合わせて部品が分かれることで、ライトの構造（レンズ・LED 基板・電池・ケースの重なり）を理解させる。動きが無くても、同じ構造と機能が読める。

## 削るもの

| 削るもの | 理由 |
|---|---|
| スクロールの速さや向きを変える演出（スクロールジャック） | 制御・発見性・注意・効率を損なう（S138）。この例は、通常のスクロールの上に重ねる |
| 部品の拡大縮小・回転・視差 | 前庭の誘因になりうる（S149・S96）。動かすのは縦の位置だけで、移動の範囲は図の枠の内側 |
| 画面全体の固定（ページを動かさずに文字だけ入れ替える作り） | 位置の理解を壊す。説明の本文は、通常のスクロールで読める位置に置く |
| 説明を、動いている間だけ見せること | 動きを唯一の伝達手段にしない（S64）。説明は常に文字として存在する |
| 動きの自動再生 | 動くのはスクロールしている間だけ。5 秒を超えて自動で始まる動きは無い（S94） |
| 写真の差し替え・装飾の粒子 | 構造の理解に寄与しない |

## 構成

| 要素 | 内容 |
|---|---|
| 導入 | 製品名・一文の説明 |
| 図（舞台） | 分解図の SVG。レンズ・LED 基板・電池・ケースの 4 層。スクロールの間、画面に留まる（sticky） |
| 説明（4 つ） | 部品ごとの短い説明。番号は図の番号と対応する。通常のスクロールで流れる |
| 縮小版・非対応版 | 図は分解した状態で静止し、説明が図の下に並ぶ。固定も動きも無い |

動きの設計（スクロールの進み具合に、部品の縦位置が結びつく）:

```text
スクロールの前   組み立てた状態（部品が重なっている）
舞台が留まる間   部品が上下に分かれていく（線形。スクロールと同じ速さ）
スクロールの後   分解した状態で止まる
動きを減らす設定・非対応   最初から分解した状態で静止（固定も無い）
```

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| 目的 | 構造の理解（段階的開示）。位置の理解を助ける | 機能的な目的があれば成功した例もある（S139）。目的の言い直しは本 skill の整理 |
| スクロールの扱い | 通常のスクロールのまま。速さ・向きを奪わない | S138 |
| 動かす性質 | 部品の縦位置だけ（`transform: translateY`）。拡大縮小・回転・不透明度の変化なし | 前庭の誘因を減らす。縦の位置の移動も、スクロールで要素が動く以上、誘因にならないとは言えない（S96）ので、縮小版が必須になる。性質の選択は本 skill の整理（S149 は拡大縮小や大きな物の移動を誘因に挙げる） |
| 紐づけ | 説明を含む区画（`.story`）に名前付きの view timeline を付け、部品がそれに従う | 機構の定義は S90。名前付きの利用は本 skill の実装 |
| 範囲 | 区画の上端が画面の上端に着いたときに始まり、区画の下端が画面の下端に着いたときに終わる（`cover 28.571%` から `cover 71.429%`） | 目安。区画の高さが 250vh のとき（画面の高さを V として、区画の高さ 2.5V・始まりは 1/3.5 ≒ 28.571%・終わりは 2.5/3.5 ≒ 71.429%）、この範囲は舞台が留まり始める点から、区画の下端が画面の下端に着く点までと一致する（実測は「点検」）。狭い画面では舞台（50vh）がその後も少し留まり、完成した図を見ながら最後の説明を読める。ページの末尾に画面 1 枚分の余白が無くても、動きは最後まで進む |
| 移動量 | レンズ -100・LED 基板 -45・電池 +10・ケース +65（図の座標系の単位） | 目安 |
| イージング | linear（スクロールと動きを 1 対 1 にする） | 本 skill の整理（出典なし） |
| 縮小版 | `prefers-reduced-motion: reduce` では、分解した状態で静止。固定も解く | 設定の検出は S76。必要性は S79・S96。置き換えは本 skill の整理 |
| 非対応のブラウザー | `@supports (animation-timeline: view())` が偽なら、縮小版と同じ静的な姿 | 機能検出。対応状況は時点情報（N09） |
| 支援技術・キーボード | 図は `role="img"` と題で内容を言う。説明は文字として、読み順（DOM 順）で並ぶ。舞台に操作対象は無い | S98・S64。DOM の並びは本 skill の整理 |
| 説明の読みやすさ | 説明の文字は、常にページの背景色の上にある（動きで薄くしない） | 本 skill の整理 |
| 説明の置き方 | 狭い画面は、各区画の上端に寄せて舞台の直下に置く（広い画面は区画の中央）。句の単位（`display: inline-block` の範囲）で折り返し、語の途中と、行頭の句点を避ける。番号の丸は互いに重ならない | 本 skill の整理（出典なし）。実測は「点検」 |
| 動きを止める手段 | OS の設定（上の縮小版）。ページ内の切り替えは設けていない | WCAG 2.3.3 は、操作で起きる動きを無効にできることを求める（S95。レベル AAA）。OS の設定だけで満たすかの判断は、本 skill ではしない |

コントラスト比（WCAG の相対輝度式で計算。基準の 4.5:1・3:1 の原文は本 skill の台帳に無く、未照合）:

| 組み合わせ（前景 / 背景） | ライト | ダーク |
|---|---|---|
| 本文 / 背景 | 16.56 | 16.02 |
| 補助文字 / 背景 | 8.68 | 9.50 |
| 図の文字（ラベル）/ 背景 | 16.56 | 16.02 |
| 部品の輪郭（非文字）/ 背景 | 4.83 | 5.95 |
| 番号の文字 / 番号の丸 | 5.99 | 9.37 |

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| 導入 | 革新的な次世代ライト | ホタル。前を照らし、後ろから見つけてもらう自転車ライト | 何のための製品かを言う |
| 図の題 | 製品イメージ | 自転車ライト「ホタル」の分解図。上から、レンズ・LED 基板・電池・ケース | 図の内容を言葉で伝える |
| 説明 1 | 高性能レンズ | レンズ: 光を前へまとめ、横からも見えるように広げる | 何をするかを言う |
| 説明 2 | 先進の LED | LED 基板: 白色の LED が 3 つ。明るさは 3 段階で切り替える | 数と段階を言う |
| 説明 3 | 大容量バッテリー | 電池: USB で充電する。外して充電もできる | 使い方を言う |
| 説明 4 | 堅牢ボディ | ケース: ハンドルに、工具なしで留める | 取り付けを言う |

## コード断片

図と説明は同じ区画（`.story`）に置く。既定のスタイルは「分解した状態で静止・固定なし」で、動きは機能検出と動きの設定が揃ったときだけ足す。外部のライブラリ・フォント・画像ファイル・計測は使わない。

```html
<main class="page">
  <h1>ホタル</h1>
  <p class="lead">前を照らし、後ろから見つけてもらう自転車ライト。</p>

  <section aria-labelledby="story-title">
    <h2 id="story-title">4 つの部品でできている</h2>
    <div class="story">
    <div class="stage">
      <svg viewBox="0 0 360 400" role="img" aria-labelledby="fig-title">
        <title id="fig-title">自転車ライト「ホタル」の分解図。上から、レンズ・LED 基板・電池・ケース</title>
        <g class="layer" style="--dy:-100px">
          <rect class="part lens" x="80" y="140" width="160" height="40" rx="14"/>
          <circle class="badge" cx="48" cy="160" r="12"/><text class="badge-t" x="48" y="166" text-anchor="middle">1</text>
          <text class="lab" x="256" y="166">レンズ</text>
        </g>
        <g class="layer" style="--dy:-45px">
          <rect class="part" x="80" y="180" width="160" height="12" rx="3"/>
          <circle class="dot" cx="120" cy="186" r="3"/><circle class="dot" cx="160" cy="186" r="3"/><circle class="dot" cx="200" cy="186" r="3"/>
          <circle class="badge" cx="48" cy="186" r="12"/><text class="badge-t" x="48" y="192" text-anchor="middle">2</text>
          <text class="lab" x="256" y="192">LED 基板</text>
        </g>
        <g class="layer" style="--dy:10px">
          <rect class="part" x="88" y="192" width="144" height="44" rx="8"/>
          <circle class="badge" cx="48" cy="214" r="12"/><text class="badge-t" x="48" y="220" text-anchor="middle">3</text>
          <text class="lab" x="256" y="220">電池</text>
        </g>
        <g class="layer" style="--dy:65px">
          <path class="part" d="M72 236 h176 v24 a14 14 0 0 1 -14 14 h-148 a14 14 0 0 1 -14 -14 z"/>
          <circle class="badge" cx="48" cy="258" r="12"/><text class="badge-t" x="48" y="264" text-anchor="middle">4</text>
          <text class="lab" x="256" y="264">ケース</text>
        </g>
      </svg>
    </div>
    <ol class="steps">
      <li class="step"><p><strong>1 レンズ</strong> <span class="ph">光を前へまとめ、</span><span class="ph">横からも見えるように広げる。</span></p></li>
      <li class="step"><p><strong>2 LED 基板</strong> <span class="ph">白色の LED が 3 つ。</span><span class="ph">明るさは 3 段階で切り替える。</span></p></li>
      <li class="step"><p><strong>3 電池</strong> <span class="ph">USB で充電する。</span><span class="ph">外して充電もできる。</span></p></li>
      <li class="step"><p><strong>4 ケース</strong> <span class="ph">ハンドルに、</span><span class="ph">工具なしで留める。</span></p></li>
    </ol>
    </div>
  </section>
</main>
```

```css
:root {
  color-scheme: light dark;
  --bg: #ffffff; --surface: #f3f4f6; --text: #1b1f24; --text-2: #454c55; --accent: #0b5cd5; --on-accent: #ffffff; --line: #6b7280; --part: #dbe3ee;
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #15171b; --surface: #1e2127; --text: #f1f2f4; --text-2: #b7bdc7; --accent: #8ab4ff; --on-accent: #0b0c0e; --line: #8d95a3; --part: #2a3140; }
}
body { margin: 0; background: var(--bg); color: var(--text);
  font-family: system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Noto Sans CJK JP", sans-serif; line-height: 1.7; }
.page { max-width: 960px; margin: 0 auto; padding: 32px 16px 64px; }
h1 { font-size: 40px; line-height: 48px; margin: 0 0 8px; }
h2 { font-size: 24px; line-height: 32px; margin: 0 0 16px; }
.lead { margin: 0 0 32px; color: var(--text-2); font-size: 18px; }

/* 既定: 分解した状態で静止。固定も動きも無い（縮小版・非対応のブラウザーはここまで）*/
.stage { margin: 0 auto 16px; }
.stage svg { display: block; width: 100%; max-width: 440px; height: auto; margin: 0 auto; }
.ph { display: inline-block; }                         /* 句の途中で折り返さない（語中の改行と、行頭の「る。」を避ける）*/
.layer { transform: translateY(var(--dy)); }
.part { fill: var(--part); stroke: var(--line); stroke-width: 2; }
.lens { fill-opacity: 0.7; }
.dot { fill: var(--accent); }
.badge { fill: var(--accent); }
.badge-t { fill: var(--on-accent); font-size: 16px; font-weight: 700; }
.lab { fill: var(--text); font-size: 18px; }
.steps { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
.step { box-sizing: border-box; padding: 4px 16px; border: 1px solid var(--line); border-radius: 8px; }
.step p { margin: 8px 0; }

/* 動き: 機能検出と動きの設定が揃ったときだけ足す */
@keyframes explode { from { transform: none; } to { transform: translateY(var(--dy)); } }
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .story { height: 250vh; view-timeline-name: --story; view-timeline-axis: block; }
    .stage { position: sticky; top: 0; z-index: 1; height: 50vh; margin: 0 auto; display: grid; place-items: center; background: var(--bg); }
    .stage svg { max-height: 100%; }
    .steps { gap: 0; }
    .step { min-height: 50vh; display: flex; align-items: flex-start; padding-top: 16px; border: 0; }   /* 説明を舞台の直下に寄せる */
    .layer { animation: explode linear both; animation-timeline: --story; animation-range: cover 28.571% cover 71.429%; }
    @media (min-width: 720px) {
      .story { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); column-gap: 32px; align-items: start; }
      .stage { grid-column: 1; height: 100vh; }
      .steps { grid-column: 2; }
      .step { min-height: 62.5vh; align-items: center; padding-top: 4px; }
    }
  }
}
```

スクリプトは使わない。この例は計測を入れない。本番で計測を足す場合は、動きの設定を尊重する。

### ライブラリを使う場合

スクロール連動のライブラリ（GSAP のスクロール連動の機能など）を使うのが現場で一般的な場面がある。この例の本体は、ライブラリ無しで動く（上のコード）。足すなら、次の 3 点を守る。

- 版を固定する。実装する時点で確認した版の番号を、依存の記述に書く（本 skill の台帳に版の番号は無い）。`@latest` のような浮動タグは使わない
- 外部の配信元から読むなら、Subresource Integrity（`integrity` と `crossorigin`）を必須とする。可能なら自前で配信する。実行時に外部 URL を動的に `import()` する書き方は禁止する
- 本体の姿は変えない。ライブラリは、非対応のブラウザーに同じ動きを足すときだけに限る。従来のスクロールイベントによる実装は、メインスレッドで処理され、スクロールと動きの同期が難しい（S146）。動きを減らす設定では、ライブラリの動きも止める

## 初見検証

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | ライトが 4 つの部品に分かれていく。部品の名前と番号が図にある | 図の動きと番号・ラベル |
| 何を操作できるか | スクロールするだけ。操作できる部品はない | 図の周囲に操作対象が無いこと |
| どう操作するか | 普通にスクロールする。動きが無くても、説明は 1 から 4 の順に読める | 説明の番号と図の番号の対応 |

動きの検証は、動きを減らす設定をオンにしても同じ 3 問に答えられることを確かめる。静止した分解図と 4 つの説明で、構造と機能が読める（S64）。

## 点検

- 目的: 動きは「部品が分かれて構造が分かる」ために使い、位置の理解（どの部品の説明か）を助けているか。目的の無い動きが無いか
- スクロール: 通常のスクロールの速さ・向きのまま。スクロールの位置を JavaScript で書き換えていない（S138）
- 動きの性質: 縦の位置だけ。拡大縮小・回転・視差・点滅が無い（S149・S96・S97）。自動で始まる動きが無い（S94）
- 縮小版: 動きを減らす設定で、舞台の固定が解け、分解した状態で静止する。設定は CSS のメディアクエリで、途中で変えても追従する
- 非対応: `animation-timeline` が使えないブラウザーで、縮小版と同じ静止した姿になる。内容は同じ
- 読める順序: 見出し・図の題・4 つの説明が DOM の順に並ぶ。キーボードで Tab を押しても、舞台が操作対象を持たず、フォーカスが隠れない
- 横はみ出し: 1440・390・320 px で横スクロールが出ない。320 px で図のラベルが読める
- 範囲の整合: 舞台が留まる区間と、部品が動く区間が一致する。区画の高さ・舞台の高さを変えたら、範囲の値も計算し直す
- 実測（Chrome 156、2026-11-15、1440・390・320 px、ライト・ダーク、動きを減らす設定で描画）: 区画の上端が画面の上端に着く前と着いた時点は、4 つの部品の縦の移動が 0 だった。そこから、区画の下端が画面の下端に着くまでの区間の 1/4・1/2・3/4 の点で、レンズの移動が -25・-50・-75 と線形に進み、終点で 4 つの部品が -100・-45・10・65 に達した。終点でも舞台は画面の上端に留まり（完成した図を見ながら最後の説明を読める）、以降は値が変わらなかった。390 px と 320 px でも、同じ点で同じ値になった。動きを減らす設定と、機能検出を偽にした版では、舞台が固定されず、最初から -100・-45・10・65 の静止だった。説明は、各区画の中央でなく上端に寄せた（390 px の動き版で、図の下端から最も近い説明の上端までは、スクロール位置により 120〜373 px。説明と図が常に隣り合う配置ではなく、番号の対応が手がかりである）。句の途中で折り返さず（390 px の静止版で、「る。」の孤立と語中の改行が無い）、番号の丸の重なりも無い。幅 473・600・719 px でも、舞台の幅が区画の幅と等しく（修正前は 440 px で、左右に説明が見えた）、横はみ出しは無かった。幅 3 種（1440・390・320 px）× ライト・ダーク × 動きを減らす設定の有無の 12 通りすべてで描画し、横はみ出し（`scrollWidth` が `innerWidth` を超えること）は無かった。他のブラウザー・実機は未検証
- 推測の明示: 250vh・28.571%・71.429%・移動量・linear は本 skill の目安である。スクロール連動の効果を測った研究は取得していない。ブラウザーの対応状況は取得した範囲で確認できていない。ページ内の動きの切り替えを設けない判断（OS の設定だけ）が WCAG 2.3.3 を満たすかは、本 skill では判断しない。スクリーンリーダーでの読み上げは実機で確かめていない

## この例の出典

S26、S64、S76、S79、S90、S94、S95、S96、S97、S98、S138、S139、S143、S146、S149。台帳は `../references/sources.md`。

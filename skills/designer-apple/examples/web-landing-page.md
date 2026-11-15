# 例: 新機能の紹介ランディングページ

製品・新機能の紹介ページを「説明を読ませる」作りから「一目で目的が分かり、最初の 1 手に進める」作りへ組み替える例。題材は架空の製品で、実在の製品名・ロゴ・写真の模倣は含まない。

導入されていれば、Web の見た目の方向性（傾向・質感・構図）を詰めたいときは designer-web へ案内する。

## 依頼

- 製品: 会議の録音から決定事項を一覧にするノートアプリ「カキトメ」（架空。運営は架空の会社「ミドリ舎」）
- 依頼文: 「新機能『決定事項まとめ』の紹介サイトを作って。Apple っぽく、すっきり見せたい」
- 想定する訪問者: 週に数回の会議に出る会社員。スマートフォンとパソコンの両方で開く。初見で、製品を知らない

## 目的の一文

「会議のあとに決まったことを探し直す手間がなくなる」と 10 秒で伝わり、無料で試す 1 手に進める。

## 削るもの

| 削るもの | 理由 |
|---|---|
| 機能 12 件のアイコングリッド | 目的に寄与しない要素の削除。主機能 1 つに絞り、他は二次導線へ下げる |
| 自動再生の背景動画 | 動きだけで価値を伝えない。止める手段も要る（S55、S72） |
| スクロール連動の演出（視差・出現） | 頻繁に触れる要素に動きを足さない（S56）。可読性とコストに見合わない |
| ボタン 3 種の並置（試す・資料・問い合わせ） | 目立つボタンは 1 画面に 1〜2 個（S57） |
| ハンバーガーに隠したナビ | 隠すと使いやすさが下がる（S28）。リンクは 2 つに減らして常時表示する |
| 根拠のない数字の実績バッジ | 発表上の誇張と区別する（誠実さ。S23 の Responsibility） |

## 構成

```text
+--------------------------------------------------+
| カキトメ                          料金   ログイン  |  ヘッダー: リンクは 2 つだけ
+--------------------------------------------------+
|  会議が終わったら、                              |
|  決まったことが一覧になっている。                |  ヒーロー: 見出し 1 文
|  録音するだけ。送る前に直せます。                |  補足 1 文
|  [ 無料で試す ]   使い方を見る（リンク）         |  主ボタン 1 つ + 文字リンク
+--------------------------------------------------+
|  1 録音する   2 確認して直す   3 共有する        |  使い方 3 手（図は画面の抜粋）
+--------------------------------------------------+
|  料金・データの扱い（3 行）                      |  不安を先回りして短く答える
|  [ 無料で試す ]                                  |  同じ主ボタンを 1 回だけ再掲
+--------------------------------------------------+
```

- 上から順に重要なものを置く。最も重要な見出しと主ボタンを上と先頭側に置く（S52）
- 余白・区切り線・面の色の違いでグループを示す。装飾ではなく配置で階層を作る（S52、S69）

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| 本文の大きさ | 1.0625rem（17px 相当）を基準にする | 参考値は iOS の本文 17 pt（S51）。pt を CSS px へ等値換算できるとは原文に書かれていない。値自体は本 skill の目安（出典なし） |
| 見出しの大きさ | `clamp(2rem, 5vw, 3.25rem)` | 本 skill の目安（出典なし） |
| 文字の太さ | 400 / 600 / 700 のみ。300 以下は使わない | 細いウェイトは小さい文字で見づらいため避ける（S51） |
| 書体の数 | 1 系統（システムフォント）。見出しと本文で変えない | 書体は最小にする（S51） |
| 行の高さ | 本文 1.7（日本語） | 本 skill の目安（出典なし）。3 行以上でタイトな行送りを避ける原則は S51、長い段落は行送りを広げる（loose は +2 pt。S66）。WCAG 1.4.12 の 1.5 倍はユーザーが上書きしても壊れない要件であり、推奨値ではない（S72） |
| セクション余白 | `clamp(4rem, 10vw, 8rem)` | 本 skill の目安（出典なし）。iOS の余白 pt 値は原文に無い |
| ブランド色・ロゴ | アクセントは主要操作と状態に絞る。ロゴは文字だけで小さく、内容に譲る | S62。ブランド表現はコンテンツ層に置き、ロゴは控えめに（S70） |
| 色 | 下の共通パレットのみ。アクセントは主ボタンとリンクだけ | アクセントは主要操作に絞る（S53、S71）。具体色は本 skill の目安 |
| 色の意味 | リンクは下線も付ける。色だけで示さない | 色だけに頼らない（S53、S55、S72 の 1.4.1） |
| 主ボタンの数 | 1 画面に 1 つ（再掲を含めても各画面 1 つ） | 目立つボタンは 1〜2 個（S57） |
| 操作対象の大きさ | 高さ・幅とも 44px 以上 | HIG Buttons は 44x44 pt（S57）。CSS px への換算は原文に無いが、WCAG 2.5.5（AAA）が 44 CSS px を直接示す（S72）。AA の最低線は 24x24 CSS px（2.5.8。S72） |
| 押下状態 | ホバー・押下・フォーカスを必ず用意する | 押下状態が無いと反応していないと感じる（S57） |
| モーション | ホバーと押下の色変化のみ。`prefers-reduced-motion` では動きを止める | HIG に UI アニメーションの秒数は無い（S56）。0.15s は本 skill の目安（出典なし）。Reduce Motion への対応は S55、Web の判定は S73 |
| 拡大 | 文字を 200% にしても読める。幅 320 CSS px で横スクロールしない | 200% は S55 と S72 の 1.4.4。320 CSS px は S72 の 1.4.10 |
| フォント | `system-ui` 系のスタック。SF Pro のファイルを配信しない | 理由は下の注記。S74、S75、S76 |

フォントの注記: Apple のフォントのライセンス文面（Apple Developer の Fonts ページ、2026-11-15 時点）は、Web サイトへの配布を許諾していると読めない。そのため SF Pro のファイルを同梱・配信せず、閲覧者の端末のシステムフォントを参照する（S76）。`system-ui` は UI 向けで長文の組版向けではないという注記が MDN にある（S74）。現行の推奨スタックの並びを示す Apple 公式文書は確認できていない（S75 は 2015 年の記事）。法的判断は法務に確認する。

コントラスト比（WCAG の相対輝度式で計算。基準は文字 4.5:1、非文字 3:1。S72）:

| 組み合わせ（前景 / 背景） | ライト | ダーク | 高コントラスト（ライト） | 高コントラスト（ダーク） |
|---|---|---|---|---|
| 本文色 / 背景 | 16.79 | 16.72 | 21.00 | 21.00 |
| 補助文字色 / 背景 | 8.74 | 9.10 | 16.79 | 18.79 |
| アクセント / 背景（リンク） | 6.39 | 8.95 | 9.81 | 13.50 |
| ボタン文字 / アクセント | 6.39 | 9.41 | 9.81 | 13.50 |
| 本文色 / 面（使い方の帯） | 15.40 | 15.17 | 19.26 | 18.69 |
| 補助文字色 / 面（使い方の説明） | 8.02 | 8.26 | 15.40 | 16.72 |
| 区切り線 / 背景（非文字。使い方の帯の上線・フッターの上線） | 4.49 | 5.49 | 8.74 | 10.23 |

HIG は小さい文字では 7:1 を目指すとする（S54）。補助文字色は 8.74 以上で満たす。

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| 見出し | 革新的な AI が会議を魔法のように変える | 会議が終わったら、決まったことが一覧になっている。 | 機能の自慢ではなく、使った後の状態を言う。誇張語を避ける（S23） |
| 補足 | 次世代の議事録体験をあなたに | 録音するだけ。送る前に直せます。 | 各語が必要かを確かめ、少ない語にする（S26） |
| 主ボタン | 今すぐ体験する | 無料で試す | ボタンは動詞で短く（S57、S58） |
| 副リンク | こちらをクリック | 使い方を見る | 「Click here」を避け、行き先が分かる語にする（S58） |
| 不安への答え | よくあるご質問 | 録音は端末に残ります。解約はいつでも | 質問の見出しを並べず、答えを先に書く（本 skill の整理）。内容は架空の例で、実製品では事実に合わせる |

英語の原文（S58）: "Prioritize clarity and avoid the temptation to be too cute or clever with your labels." 日本語は要旨で、ボタン文言は凝らず明快にする。

## コード断片

1 ページとして通して見られる形（ヘッダー → ヒーロー → 使い方 → 料金とデータの扱い → フッター）。外部の CDN・スクリプト・フォント・計測は使わない。色は共通パレットのみ。

```html
<header class="site-header">
  <a class="brand" href="/">カキトメ</a>
  <nav aria-label="主要">
    <a href="/pricing">料金</a>
    <a href="/login">ログイン</a>
  </nav>
</header>
<main>
  <section class="hero" aria-labelledby="hero-title">
    <h1 id="hero-title">会議が終わったら、決まったことが一覧になっている。</h1>
    <p class="lead">録音するだけ。送る前に直せます。</p>
    <p class="actions">
      <a class="btn btn-primary" href="/start">無料で試す</a>
      <a class="text-link" href="#how">使い方を見る</a>
    </p>
  </section>
  <section id="how" class="how" aria-labelledby="how-title">
    <h2 id="how-title">使い方は 3 つの手</h2>
    <ol class="steps">
      <li><h3>録音する</h3><p>会議を始めたら、録音を押す。</p></li>
      <li><h3>確認して直す</h3><p>決まったことが一覧になる。違うところはその場で書き換える。</p></li>
      <li><h3>共有する</h3><p>一覧をそのまま、チームに送る。</p></li>
    </ol>
  </section>
  <section class="closing" aria-labelledby="closing-title">
    <h2 id="closing-title">料金とデータの扱い</h2>
    <ul class="facts">
      <li>無料で始められます。</li>
      <li>録音は端末に残ります。</li>
      <li>解約はいつでもできます。</li>
    </ul>
    <p class="actions"><a class="btn btn-primary" href="/start">無料で試す</a></p>
  </section>
</main>
<footer class="site-footer">
  <p>ミドリ舎（架空の会社）</p>
  <a href="/privacy">プライバシー</a>
  <a href="/terms">利用規約</a>
</footer>
```

```css
:root {
  color-scheme: light dark;
  --bg: #ffffff; --surface: #f4f5f8; --text: #1d1d22; --text-2: #4a4a55;
  --accent: #0b57d0; --on-accent: #ffffff; --line: #767680;
  --w: 56rem;                                   /* 内容の最大幅。本 skill の目安 */
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #121216; --surface: #1c1c22; --text: #f2f2f5; --text-2: #b4b4c0;
          --accent: #8ab4ff; --on-accent: #0b0b0e; --line: #8a8a98; }
}
@media (prefers-contrast: more) {
  :root { --text: #000000; --text-2: #1d1d22; --accent: #003c9e; --line: #4a4a55; }
}
@media (prefers-contrast: more) and (prefers-color-scheme: dark) {
  :root { --bg: #000000; --surface: #121216; --text: #ffffff; --text-2: #f2f2f5;
          --accent: #b8d0ff; --on-accent: #000000; --line: #b4b4c0; }
}

/* システムフォント。SF Pro のファイルは配信しない（理由は本文の注記） */
body {
  margin: 0; background: var(--bg); color: var(--text);
  font-family: system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Noto Sans CJK JP", sans-serif;
  font-size: 1.0625rem; line-height: 1.7;
}
/* リンクは訪問済みでも色を変えない（ブラウザ既定の紫を使わない）。下線で色以外の手がかりを残す */
a:link, a:visited { color: var(--accent); }
.brand:link, .brand:visited { color: var(--text); text-decoration: none; font-weight: 700; }
.btn-primary:link, .btn-primary:visited { color: var(--on-accent); text-decoration: none; }

.site-header, .hero, .site-footer {
  box-sizing: border-box; max-width: calc(var(--w) + 3rem); margin: 0 auto; padding-inline: 1.5rem;
}
.site-header { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0 1rem; padding-block: 0.5rem; }
nav { display: flex; flex-wrap: wrap; gap: 0.25rem; }
.brand, nav a { white-space: nowrap; }                /* 文字 200% でも 1 文字ずつ折り返さない。幅が足りなければ行ごと折り返す */

.hero { padding-block: clamp(4rem, 10vw, 8rem); }
h1 { font-size: clamp(2rem, 5vw, 3.25rem); line-height: 1.25; font-weight: 700; margin: 0 0 1rem;
     max-width: 20em; text-wrap: balance; word-break: auto-phrase; }   /* 折り返しは目安の指定 */
.lead { color: var(--text-2); margin: 0 0 2rem; max-width: 40rem; }
.actions { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem 1.5rem; margin: 0; }

.how, .closing { padding: clamp(3rem, 8vw, 6rem) 1.5rem; }
.how { background: var(--surface); border-top: 1px solid var(--line); }
.how > *, .closing > * { max-width: var(--w); margin-inline: auto; }
h2 { font-size: clamp(1.5rem, 3.5vw, 2rem); line-height: 1.3; font-weight: 700; margin-block: 0 1.5rem; }
h3 { font-size: 1.0625rem; line-height: 1.4; font-weight: 600; margin: 0 0 0.25rem; }
.steps { list-style: none; margin-block: 0; padding: 0; counter-reset: step;
         display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr)); gap: 1.5rem 2rem; }
.steps li { counter-increment: step; }   /* 列の最小幅は min(100%, 14rem)。文字 200% や幅 320 CSS px でも横にあふれない */
.steps li::before { content: counter(step); display: inline-flex; align-items: center; justify-content: center;
  width: 2rem; height: 2rem; margin-bottom: 0.5rem; border-radius: 50%;
  background: var(--accent); color: var(--on-accent); font-weight: 700; }
.steps p { margin: 0; color: var(--text-2); }
.facts { margin-block: 0 2rem; padding-left: 1.25rem; }

/* 操作対象: 44px 以上（HIG 44 pt に倣い、WCAG 2.5.5 の 44 CSS px と一致）。AA の 24px は最低線 */
.btn, .text-link, nav a, .brand, .site-footer a {
  display: inline-flex; align-items: center; justify-content: center;
  min-height: 44px; min-width: 44px; box-sizing: border-box;
}
nav a { padding: 0 0.5rem; }
nav a, .site-footer a { text-decoration: underline; }
.btn { padding: 0 1.5rem; border-radius: 0.75rem; font-weight: 600; }
.btn-primary { background: var(--accent); }
.btn-primary:hover { filter: brightness(1.08); }
.btn-primary:active { filter: brightness(0.92); }   /* 押下状態 */
.text-link { text-decoration: underline; }
:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }
.btn, .text-link { transition: filter 0.15s; }       /* 0.15s は本 skill の目安 */

.site-footer { display: flex; flex-wrap: wrap; align-items: center; gap: 0 1rem; padding-block: 1.5rem;
  border-top: 1px solid var(--line); font-size: 0.875rem; color: var(--text-2); }
.site-footer p { margin: 0 auto 0 0; }

@media (prefers-reduced-motion: reduce) {
  .btn, .text-link { transition: none; }
}
```

## 初見検証

説明なしで見せ、3 つの問いに答えられるかを見る。

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 「会議後に決定事項が一覧になる」 | 見出し 1 文 |
| 何を操作できるか | 「無料で試す」ボタン | 主ボタンが 1 つだけ目立つ |
| どう操作するか | タップかクリックで次の画面へ | 44px 以上の面・ボタンらしい形 |

3 問のいずれかに答えられない場合は、説明を足さず、要素を減らして手がかりの置き場所を見直す。

## 点検

- アクセシビリティ: キーボードのみで主ボタンに到達でき、フォーカスが見える。スクリーンリーダーで見出し → 主ボタンの順に読める。文字を 200% に拡大しても、幅 320 CSS px でも内容が欠けない（S55、S72）
- 可読性: 4 通りの配色（ライト・ダーク・高コントラスト 2 種）で上の表の比率を満たす。背景に写真を敷く場合は、文字の下地を暗くするなど、写真ごとに読めるかを確かめる（S15、S32、S65）
- やり直し: 主ボタンは誤タップしても次の画面で戻れる。会員登録の確認は次画面に置き、このページでは破壊的な操作を持たない
- 失敗パターン: ナビを隠していないか、色だけでリンクを示していないか、透明な面の上に文字を載せていないか。既存ユーザーに通じる言葉を初見向けに書いていないか（S12、S15、S37）
- 推測の明示: 訪問者の行動・転換率はこの例からは分からない。実測データが要る判断は最終的に相談者が行う

## この例の出典

S12、S15、S23、S26、S28、S32、S37、S51、S52、S53、S54、S55、S56、S57、S58、S62、S65、S66、S69、S70、S71、S72、S73、S74、S75、S76。台帳は `../references/sources.md`。

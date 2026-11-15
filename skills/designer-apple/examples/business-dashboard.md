# 例: 業務ダッシュボード（チャート含む）

指標を全部並べるダッシュボードを、「見る人が判断することを 1 つ決め、その答えを見出しにする」作りへ組み替える例。題材は架空の社内ツールで、実在の製品の画面は模倣しない。図の種類・軸・色は、導入されていれば designer-dataviz が詳しい。

## 依頼

- 製品: 問い合わせ対応チームの「対応状況ボード」（社内ツール。架空の会社「ミドリ舎」）
- 依頼文: 「ダッシュボードを作り直して。指標が 14 個あって、何を見ればいいか分からないと言われる。Apple っぽくきれいに」
- 見る人: 毎朝 5 分で状況を確認するチームリーダー。聞かれるのは「今、間に合っているか」
- 現状: 指標カード 14 枚、色違いの円グラフ 3 つ、ホバーでしか見えない数値、自動で動く更新アニメーション

### 根拠の範囲（先に読む）

- HIG の Patterns と Foundations の目次に、ダッシュボードを扱うページは見つからなかった（取得範囲は `../references/sources.md` の「調査の限界」）。「KPI は何個まで」といった具体数も無い
- 以下は、Charts（S59）と Charting data（S60）の指針に、Layout（S52）・Typography（S51）を転用した、本 skill の整理である
- 指標の個数・カードの大きさなどの数値は、本 skill の目安（出典なし）

## 目的の一文

チームリーダーが朝 5 分で「今週の未対応は目標に間に合っているか」を判断し、次の手を決める。

## 削るもの

| 削るもの | 理由 |
|---|---|
| 指標カード 14 枚のうち 11 枚 | 見せる情報を絞る。目的に寄与しないものは削除か、二次導線（別画面の表）へ（S59、S60） |
| 色違いの円グラフ 3 つ | 色だけで区別しない。比較は棒で、数値は直接ラベルで（S59） |
| ホバーでしか見えない数値 | 重要な情報を操作しないと見えない状態にしない（S59） |
| 自動で動く更新アニメーション | 頻繁に触れるものに動きを足さない。目的のある動きだけ（S56） |
| 全グラフの別配色 | 同じデータは同じ種類・色・注釈で連続させる（S60） |
| データをすべてチャートにすること | 単にデータを渡すなら、検索・並べ替えできる表のほうが良い場合がある（S60） |
| 過密なグリッド線と目盛り | 多すぎる線はデータの邪魔になる（S59） |

## 構成

```text
+----------------------------------------------------------+
| 未対応は 18 件。先週より 6 件減り、目標の 25 件以内        |  見出し = チャートの要約（結論）
|                                    最終更新 10:42  [更新]  |
+----------------+----------------+------------------------+
| 未対応         | 先週比         | 初回応答（中央値）      |  指標は 3 つだけ
| 18 件          | 6 件減         | 42 分                   |
+----------------+----------------+------------------------+
|  週ごとの未対応件数                                       |
|  40 +                                                     |
|     |  [36]   [30]   [24]   [18]      -- 目標 25 件 ----  |  棒 4 本・ゼロ起点・目標は破線
|  20 +                                                     |
|   0 +----------------------------------------------      |
|     5月12日  5月19日  5月26日  6月2日                    |
+----------------------------------------------------------+
| ▶ データを表で見る（週ごとの件数）                         |  同じデータの表。必要な人だけ開く
+----------------------------------------------------------+
```

- 重要なものを上と先頭側に置く。幅が狭いときは、列を減らして縦に積む。機能は変えず、見える量だけ変える（S52）
- 操作（更新）はコンテンツと分ける。コントロールをコンテンツの面と混ぜない（S52）

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| チャートの見出し | 結論の文（数値入り） | 主要メッセージを見出し・副題で要約する（S59）。説明文は補助で、代替テキストの代わりにならない（S60） |
| 指標の数 | 3 | 本 skill の目安（出典なし） |
| データの強調 | データ本体を最も目立たせ、軸と説明は補助に留める | S59 |
| 棒グラフの軸 | 下限はゼロ | 棒の高さで比較できる。ゼロを下限にすると差が見えにくい場合もある（S59） |
| 目盛り | 0・20・40（なじみのある刻み） | S59 |
| 線 | 軸 1 本・目盛り線なし・目標線 1 本 | 線が多すぎるとデータの邪魔になる（S59） |
| 系列の区別 | 棒（実線）と破線＋ラベル | 色に形・パターンを添える（S59、S53、S72 の 1.4.1） |
| 数値と単位の折り返し | 見出しの数値と単位は同じ行に置く（`white-space: nowrap` の `.nb`） | 本 skill の目安（出典なし）。auto-phrase だけでは数値と助数詞が分かれる |
| 数値の表記 | 実数値。「6 月 2 日」「42 分」と書く | 「6/6」「60m」のような略記や主観語を避ける（S59） |
| 値の表示 | 棒の中にラベルで常に表示 | ホバーを必須にしない（S59） |
| 文字（指標の数値） | 34 / 41 pt・太字 | 画面アプリの Large Title の値を転用（S51）。px への読み替えは本 skill の目安 |
| 文字（結論の見出し・ラベル） | 結論の見出し 22 / 28 pt・太字、ラベル 17 / 22 pt、補足 13 / 18 pt | Title 2（22 / 28 pt、強調は Bold）・Body・Footnote の表の値（S51）。最小は 11 pt。px への読み替えは本 skill の目安 |
| 更新の表示 | 「最終更新 10:42」を常に表示。自動の更新に動きを付けない | 状態は控えめに常時見えるように（S61）。動きは付けない（S56） |
| 表の開閉 | 開閉の印を行の先頭に置く。閉じると右向き、開くと下向きで、文字と同じ色。動きは付けない | 本 skill の目安（出典なし）。行を flex にすると標準の印が消えるため、疑似要素で足す |
| 色 | 共通パレット。系列は 2 色まで | S53、S71。具体色は本 skill の目安 |
| 面 | 指標とチャートはカード面。ガラス表現を使わない | コンテンツ層にガラスを使わない（S65） |
| アクセシビリティ | チャート全体に説明の代替テキスト、同じデータの表を併置 | S59、S60 |

コントラスト比（WCAG の相対輝度式で計算。文字 4.5:1、非文字 3:1。S72）:

| 組み合わせ（前景 / 背景） | ライト | ダーク | 高コントラスト（ライト） | 高コントラスト（ダーク） |
|---|---|---|---|---|
| 本文色 / 面（見出し・指標） | 15.40 | 15.17 | 19.26 | 18.69 |
| 補助文字色 / 面（軸ラベル・注記） | 8.02 | 8.26 | 15.40 | 16.72 |
| ボタン文字 / アクセント（棒の中の値） | 6.39 | 9.41 | 9.81 | 13.50 |
| アクセント / 面（非文字。棒） | 5.86 | 8.12 | 9.00 | 12.02 |
| 系列2 / 面（非文字。目標の破線） | 6.24 | 9.93 | 8.64 | 13.20 |
| 枠線 / 面（非文字。軸の線） | 4.12 | 4.98 | 8.02 | 9.10 |

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| チャートの見出し | 対応状況サマリー | 未対応は 18 件。先週より 6 件減り、目標の 25 件以内 | 結論を言う。「急速に」のような主観語を避け実数で書く（S59） |
| 指標 | KPI-3: 初回応答 | 初回応答（中央値）42 分 | 何の数かを語で言う。略記を避ける |
| 日付 | 6/2 | 6 月 2 日 | 日付は略さず書く（S59） |
| 更新 | 自動更新中… | 最終更新 10:42 / 更新 | 状態を静かに見せる。操作で更新できる（S61） |
| 代替テキスト | グラフ | 週ごとの未対応件数。5 月 12 日の週 36 件、19 日 30 件、26 日 24 件、6 月 2 日 18 件。目標 25 件 | 実数で説明する（S59、S60） |

英語の原文（S59、HIG Charts）: "Avoid using subjective terms." 日本語は要旨で、「急速に」などは解釈であり、実数値で説明する。

英語の原文（S59）: "Let people interact with the data when it makes sense, but don’t require interaction to reveal critical information." 日本語は要旨で、操作を必須にして重要な情報を隠さない。

## コード断片

数値は架空。外部のチャートライブラリ・スクリプト・フォント・計測は使わない。動きは付けない。

```html
<section class="board" aria-labelledby="board-title">
  <h1 id="board-title">未対応は <span class="nb">18 件</span>。先週より <span class="nb">6 件減り</span>、目標の <span class="nb">25 件以内</span></h1>
  <p class="meta">最終更新 10:42 <a class="btn" href="/board/refresh">更新</a></p>
  <dl class="kpis">
    <div><dt>未対応</dt><dd>18 件</dd></div>
    <div><dt>先週比</dt><dd>6 件減</dd></div>
    <div><dt>初回応答（中央値）</dt><dd>42 分</dd></div>
  </dl>
  <figure class="card">
    <figcaption>週ごとの未対応件数</figcaption>
    <svg viewBox="0 0 480 240" role="img"
         aria-label="週ごとの未対応件数。5月12日の週 36 件、19日 30 件、26日 24 件、6月2日 18 件。目標は 25 件">
      <line class="goal" x1="48" y1="88" x2="464" y2="88" stroke-dasharray="6 4"/>
      <text class="tick end" x="464" y="80">目標 25 件</text>
      <line class="axis" x1="48" y1="200" x2="464" y2="200"/>
      <text class="tick tick-y" x="40" y="204">0</text>
      <text class="tick tick-y" x="40" y="114">20</text>
      <text class="tick tick-y" x="40" y="24">40</text>
      <rect class="bar" x="72" y="38" width="56" height="162"/><text class="val" x="100" y="58">36</text>
      <rect class="bar" x="168" y="65" width="56" height="135"/><text class="val" x="196" y="85">30</text>
      <rect class="bar" x="264" y="92" width="56" height="108"/><text class="val" x="292" y="112">24</text>
      <rect class="bar" x="360" y="119" width="56" height="81"/><text class="val" x="388" y="139">18</text>
      <text class="tick" x="100" y="222">5月12日</text><text class="tick" x="196" y="222">5月19日</text>
      <text class="tick" x="292" y="222">5月26日</text><text class="tick" x="388" y="222">6月2日</text>
    </svg>
  </figure>
  <details class="card"><summary>データを表で見る</summary>
    <table><caption>週ごとの未対応件数</caption>
      <thead><tr><th scope="col">週</th><th scope="col">件数</th></tr></thead>
      <tbody>
        <tr><th scope="row">5月12日</th><td>36 件</td></tr>
        <tr><th scope="row">5月19日</th><td>30 件</td></tr>
        <tr><th scope="row">5月26日</th><td>24 件</td></tr>
        <tr><th scope="row">6月2日</th><td>18 件</td></tr>
      </tbody>
    </table>
  </details>
</section>
```

```css
:root {
  color-scheme: light dark;
  --bg: #ffffff; --surface: #f4f5f8; --text: #1d1d22; --text-2: #4a4a55;
  --accent: #0b57d0; --on-accent: #ffffff; --line: #767680; --series2: #8a4b00;
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #121216; --surface: #1c1c22; --text: #f2f2f5; --text-2: #b4b4c0;
          --accent: #8ab4ff; --on-accent: #0b0b0e; --line: #8a8a98; --series2: #ffb866; }
}
@media (prefers-contrast: more) {
  :root { --text: #000000; --text-2: #1d1d22; --accent: #003c9e; --line: #4a4a55; --series2: #6b3a00; }
}
@media (prefers-contrast: more) and (prefers-color-scheme: dark) {
  :root { --bg: #000000; --surface: #121216; --text: #ffffff; --text-2: #f2f2f5;
          --accent: #b8d0ff; --on-accent: #000000; --line: #b4b4c0; --series2: #ffd199; }
}

body { margin: 0; padding: 24px 16px; background: var(--bg); color: var(--text);
  font-family: system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Noto Sans CJK JP", sans-serif; }
.board { max-width: 720px; margin: 0 auto; }
h1 { font-size: 22px; line-height: 28px; font-weight: 700; margin: 0 0 8px;     /* 結論の文 */
     word-break: auto-phrase; }                                                   /* lang="ja" の文書で効く目安の指定。対応しないブラウザーでは字数で折り返す */
.meta { color: var(--text-2); font-size: 13px; line-height: 18px; margin: 0 0 16px; }
.btn { display: inline-flex; align-items: center; min-height: 44px; min-width: 44px; padding: 0 12px;
  color: var(--accent); text-decoration: underline; }
.kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 160px), 1fr)); gap: 12px; margin: 0 0 16px; }
.kpis div, .card { background: var(--surface); border-radius: 12px; padding: 16px; margin: 0 0 12px; }
dt { font-size: 13px; line-height: 18px; color: var(--text-2); }
dd { margin: 4px 0 0; font-size: 34px; line-height: 41px; font-weight: 700; }
svg { width: 100%; height: auto; }
.goal { stroke: var(--series2); stroke-width: 2; }    /* 破線 + 「目標」ラベルで色以外の手がかり */
.axis { stroke: var(--line); stroke-width: 1; }
.bar { fill: var(--accent); }
.val { fill: var(--on-accent); font-size: 14px; font-weight: 700; text-anchor: middle; }
.tick { fill: var(--text-2); font-size: 13px; text-anchor: middle; }
.tick.end, .tick-y { text-anchor: end; }              /* y 軸の目盛りと目標ラベルは右揃え（.tick の middle より後に置く） */
.nb { white-space: nowrap; }                       /* 数値と単位を分けない（見出しの「18 件」「6 件減り」「25 件以内」） */
summary { min-height: 44px; display: flex; align-items: center; gap: 12px; cursor: pointer; }
summary { list-style: none; }                                              /* 標準の印を明示的に消す。Safari は flex でも標準の印が残り、足した印と二重になるため */
summary::-webkit-details-marker { display: none; }
summary::before { content: ""; flex: none; width: 0; height: 0;          /* 開閉の印。flex にすると標準の印が消えるので足す */
  border-left: 9px solid currentColor; border-top: 6px solid transparent; border-bottom: 6px solid transparent; }
details[open] > summary::before { transform: rotate(90deg); }              /* 開いたら下向き。動き（transition）は付けない */
:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }
/* 動きは付けない。動きの宣言を書かないので、動きを減らす設定への分岐は不要 */
```

値を動的に差し込む場合（件数・日付など）は、`textContent` で設定し、`innerHTML` で組み立てない。

## 初見検証

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 未対応が 18 件で、目標内に収まっている | 見出しの 1 文 |
| 何を操作できるか | 更新、表の展開 | 画面に更新と「データを表で見る」だけがある |
| どう操作するか | 押す。表は開閉する | 44 px 以上の行・下線付きのリンク・開閉の印（閉じると右向き、開くと下向き）。キーボードの Enter・Space でも開閉する |

「今、間に合っているか」に 5 秒で答えられるかを観察する。見出しを隠して棒だけを見せ、同じ答えが出るかも確かめる。出ない場合は、軸・目標線・ラベルの手がかりを見直す。

## 点検

- アクセシビリティ: チャートに要約の代替テキストがあり、同じデータの表がある。色は棒と破線を、形と文字で区別できる。文字は 200% に拡大しても読める。ただし SVG 内の文字は図の幅に連動して縮み、幅 390 px の描画では約 9 px になった（実測）。重要な数値は見出しと指標（HTML の文字）にも書き、狭い画面では図を縦に伸ばすか、文字の大きさを調整する（S55、S59、S60）
- 可読性: 4 通りの配色で上の比率を満たす。棒の中の値は、アクセントとボタン文字の比率で読める
- やり直し: 閲覧画面なので破壊的操作は無い。表示期間を変える操作を足す場合は、元の期間に戻せるようにする
- 失敗パターン: ホバーに数値を隠していないか、色だけで系列を区別していないか、ゼロ起点でない棒で差を大きく見せていないか（S59）。ガラス表現でデータの上に透明な層を重ねていないか（S15、S65）
- 推測の明示: 本当にどの指標が意思決定に効くかは、チームの運用と個別データが要る。指標の個数は目安で、相談者のユーザー観察で確かめる

## この例の出典

S15、S51、S52、S53、S55、S56、S59、S60、S61、S65、S71、S72。台帳は `../references/sources.md`。

# 例: 設定画面（項目削減と既定値）

設定画面を「選べるものを全部並べる」作りから「既定値が良く、必要な設定だけが見つかる」作りへ組み替える例。題材は架空のアプリで、実在の製品の設定画面は模倣しない。

## 依頼

- 製品: 観葉植物の水やり記録アプリ「ミズヤリ」（架空。運営は架空の会社「ミドリ舎」）
- 依頼文: 「設定画面の項目が 28 個あって見つからないと言われる。整理して」
- 現状の主な項目: 通知 5 種類、テーマ（ライト・ダーク・自動）、文字サイズ、言語、単位（ml・cc）、同期間隔（5・15・30・60 分）、並び順 3 種、キャッシュ削除、データ初期化 ほか
- 想定するユーザー: 設定を開くのは、通知の時刻を変えたい時・データを書き出したい時・やめたい時がほとんど（本 skill の想定。実際の利用データは分からない）

## 目的の一文

設定画面は、通知の時刻を変え、データを管理するための場所であり、使い方を調整するための場所ではない。

## 削るもの

| 削るもの | 理由 | 削り方 |
|---|---|---|
| テーマ（ライト・ダーク・自動） | 端末の設定と重複する | 端末の外観に従う。アプリ独自の外観設定は置かない（S54、S77） |
| 文字サイズ・言語 | 端末の設定と重複する | 端末の設定を尊重する（S77） |
| 単位（ml・cc） | 取得できる情報を入力させない | 地域から決める（S24） |
| 同期間隔 4 種 | 既定値を決められない設計の先送り | 自動で決め、設定に出さない（S24、S77） |
| 通知 5 種 | 選択肢の多さが探しにくさを生む | 「水やり日に通知」と時刻の 2 つに絞る（S77） |
| 並び順 3 種 | 画面の上で変える操作 | 一覧の上の並べ替えへ移す（設定に逃がさない） |
| キャッシュ削除 | 問題が起きた時だけ要る保守操作 | 不具合の案内の中に置く（二次導線。隠蔽ではなく文脈へ移す） |

削れなかったもの: 水やりの通知時刻。植物ごとの水やり間隔は「既定を置かない」判断にして、追加時に尋ねる。予測できる勝者が無いなら、既定値を置かない選択肢もある（Tog の見方。S35）。

## 構成

28 項目から 5 項目へ。3 つのグループに分ける。

```text
+--------------------------------------+
| 設定                                 |
|                                      |
| 水やり                               |
|  水やり日に通知            [ オン ]  |  オンにすると、水やり日の朝に知らせます
|  通知の時刻                08:00  >  |
|                                      |
| データ                               |
|  記録を書き出す                   >  |
|  すべての記録を削除               >  |  破壊的な操作は末尾・文字でも示す
|                                      |
| このアプリについて                   |
|  バージョンとライセンス           >  |
+--------------------------------------+
```

- グループは見出しと余白で示す。関連するものを近づけ、無関係なものを離す（S52）
- 重要度順に上から置く。最も使う通知を上に（S52）

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| 項目数 | 5 | 目安（出典なし）。HIG は設定の数を最小にするよう述べる（S24、S77） |
| 既定値 | 最大多数に最適な体験を基準に決める | S77、S24 |
| 行の高さ | 44 px 以上（iOS の 44 pt を読み替え） | 操作対象は 44x44 pt 以上（S57）。Accessibility の表では既定 44・最小 28（S55）。Web では WCAG 2.5.5 が 44 CSS px（S72）、2.5.8 の最低線が 24 CSS px（S72） |
| 行のラベル | 17 / 22 pt、補足 13 / 18 pt | Body と Footnote（S51）。px への読み替えは本 skill の目安 |
| グループ見出し | 13 / 18 pt・太さ 600 | Footnote の値と、強調は Semibold という表の値（S51）。px への読み替えは本 skill の目安 |
| グループの間隔 | 24 px | 本 skill の目安（出典なし） |
| 色 | 共通パレット。削除はエラー色だが、必ず「削除」の語も添える | 色だけに頼らない（S53、S55） |
| スイッチ | 標準の部品（`role="switch"` を付けたチェックボックス）を使う。見た目は環境で変わる（Safari ではスイッチ、Chrome ではチェックボックスとして描画される）。部品自体は 24 px、操作領域は行のラベルで 44 px 以上 | 標準の部品に乗る。既に理解している概念に乗る考え方（S23 の Familiarity）。独自の見た目で手がかりを失わない（本 skill の整理） |
| 破壊的操作 | 何が失われるかを示す確認を 1 回。取り消せないことを明記。リンクの先は確認画面で、実際の削除は CSRF 対策付きの POST で行い、GET では実行しない | 予期しない不可逆な損失だけ警告する（S26）。やり直せない操作で二度確認する案は、Assistive Access の節にある（S55） |
| 動き | 付けない | 設定は頻繁に触れる操作。頻繁な操作に動きを足さない（S56） |

コントラスト比（WCAG の相対輝度式で計算。基準 4.5:1、非文字 3:1。S72）:

| 組み合わせ（前景 / 背景） | ライト | ダーク | 高コントラスト（ライト） | 高コントラスト（ダーク） |
|---|---|---|---|---|
| 本文色 / 面（行のラベル） | 15.40 | 15.17 | 19.26 | 18.69 |
| 補助文字色 / 面（補足・現在値） | 8.02 | 8.26 | 15.40 | 16.72 |
| エラー色 / 面（削除の行） | 6.00 | 7.43 | 8.79 | 11.01 |
| アクセント / 背景（非文字。フォーカスの輪） | 6.39 | 8.95 | 9.81 | 13.50 |
| 枠線 / 背景（非文字。行の区切り） | 4.49 | 5.49 | 8.74 | 10.23 |

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| スイッチ | プッシュ通知を有効にする | 水やり日に通知 | 所有格や冗長な語を避ける（S58） |
| 補足 | 通知の設定を切り替えます | オンにすると、水やり日の朝に知らせます | オンの時に何が起きるかを書く。反対は推測できる（S58） |
| 項目 | 高度な設定 | 通知の時刻 | 何の設定かをラベルで言う |
| 削除 | データを初期化 | すべての記録を削除 | 何が起きるかを動詞で言う（S58） |
| 確認 | この操作は取り消せません。よろしいですか？ | 植物 12 件と水やり記録がすべて消えます。元に戻せません。 / 削除 / キャンセル | 失われるものを具体的に書く。ボタンは「はい・いいえ」でなく動詞（S57、S58） |

英語の原文（S77、HIG Settings）: "Respect people’s systemwide settings and avoid including redundant versions of them in your custom settings area." 日本語は要旨で、端末全体の設定と同じものをアプリ内に重ねて置かない。

英語の原文（S58、HIG Writing）: "Describe what it does when turned on, and people can infer the opposite." 日本語は要旨で、スイッチの補足は、オンの時の挙動だけを書く。

## コード断片

設定画面の骨格。標準の部品を使い、外部の資源・スクリプト・計測は使わない。

```html
<main class="settings">
  <h1>設定</h1>
  <section aria-labelledby="g1">
    <h2 id="g1">水やり</h2>
    <ul class="rows">
      <li class="row">
        <label for="notify"><span class="label">水やり日に通知</span>
          <span class="sub">オンにすると、水やり日の朝に知らせます</span></label>
        <input id="notify" type="checkbox" role="switch" checked>
      </li>
      <li class="row">
        <label for="time"><span class="label">通知の時刻</span></label>
        <input id="time" type="time" value="08:00">
      </li>
    </ul>
  </section>
  <section aria-labelledby="g2">
    <h2 id="g2">データ</h2>
    <ul class="rows">
      <li class="row"><a class="label" href="/export">記録を書き出す</a></li>
      <li class="row"><a class="label danger" href="/settings/delete-all/confirm">すべての記録を削除</a></li>
    </ul>
  </section>
  <section aria-labelledby="g3">
    <h2 id="g3">このアプリについて</h2>
    <ul class="rows">
      <li class="row"><a class="label" href="/about">バージョンとライセンス</a></li>
    </ul>
  </section>
</main>
```

```css
:root {
  color-scheme: light dark;
  --bg: #ffffff; --surface: #f4f5f8; --text: #1d1d22; --text-2: #4a4a55;
  --accent: #0b57d0; --danger: #b3261e; --line: #767680;
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #121216; --surface: #1c1c22; --text: #f2f2f5; --text-2: #b4b4c0;
          --accent: #8ab4ff; --danger: #ff8a80; --line: #8a8a98; }
}
@media (prefers-contrast: more) {
  :root { --text: #000000; --text-2: #1d1d22; --accent: #003c9e; --danger: #8c1008; --line: #4a4a55; }
}
@media (prefers-contrast: more) and (prefers-color-scheme: dark) {
  :root { --bg: #000000; --surface: #121216; --text: #ffffff; --text-2: #f2f2f5;
          --accent: #b8d0ff; --danger: #ffb4ab; --line: #b4b4c0; }
}

body { margin: 0; background: var(--bg); color: var(--text);
  font-family: system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Noto Sans CJK JP", sans-serif; }
.settings { max-width: 480px; margin: 0 auto; padding: 24px 16px; }
h2 { font-size: 13px; line-height: 18px; font-weight: 600; color: var(--text-2); margin: 24px 0 8px; }
.rows { list-style: none; margin: 0; padding: 0; background: var(--surface); border-radius: 12px; }
.row { display: flex; align-items: center; justify-content: space-between; gap: 12px;
  min-height: 44px; padding: 8px 16px; border-top: 1px solid var(--line); }   /* 44px 以上 */
.row:first-child { border-top: 0; }
.label { font-size: 17px; line-height: 22px; color: var(--text); text-decoration: none; }
.sub { display: block; font-size: 13px; line-height: 18px; color: var(--text-2); }
.row a { display: flex; align-items: center; min-height: 44px; flex: 1; }
.danger { color: var(--danger); }
.row label { flex: 1; display: flex; flex-direction: column; justify-content: center; min-height: 44px; }  /* 行の左側全体が操作領域 */
input[type="checkbox"] { width: 24px; height: 24px; accent-color: var(--accent); }   /* 部品自体は 24 px（WCAG 2.5.8 の最低線）。操作領域はラベルで 44 px 以上 */
input[type="time"] { min-height: 44px; box-sizing: border-box; padding: 0 8px; font-size: 17px;
  color: var(--text); background: var(--bg); border: 1px solid var(--line); border-radius: 8px; }
:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }
/* 動きは付けない。動きの宣言を書かないので、動きを減らす設定への分岐は不要 */
```

## 初見検証

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 通知が「水やり日に来る」設定になっている | 補足の 1 文 |
| 何を操作できるか | 通知のオン・オフ、時刻、書き出し、削除 | 5 行が一画面に収まる |
| どう操作するか | スイッチを押す、行を押して詳細へ | 行全体が 44 px 以上の面 |

見つからなかった設定がないかは、項目名を伏せて「通知を夜にしたい」といった目的を渡して探させ、迷う場所を観察する。

## 点検

- アクセシビリティ: スイッチの状態を、色だけでなくラベルと標準の部品の状態で伝える。キーボードで全行に到達し、フォーカスが見える（S53、S55）
- 可読性: 4 通りの配色で上の比率を満たす。文字を 200% にしても行が欠けない（S55）
- やり直し: 設定の変更はその場で反映して取り消せる。すべての記録を削除だけが取り消せない。書き出しを先に勧める文を確認画面に入れる（本 skill の提案）
- 失敗パターン: 設定を消したことで、必要な人が詰まっていないか（アクセシビリティの個別設定など）。端末の設定に従う方針は、端末側の設定を知らない人に届かない場合がある。「設定に逃がさない」ことと「必要な人が調整できる」ことの両立を、観察で確かめる
- 推測の明示: どの設定が実際に使われているかは、アクセス解析などの個別データが要る。この例の削減は一般的な枠組みによる案

## この例の出典

S23、S24、S26、S35、S51、S52、S53、S54、S55、S56、S57、S58、S72、S77。台帳は `../references/sources.md`。

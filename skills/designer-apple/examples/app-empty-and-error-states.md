# 例: 空状態・エラー文言・マイクロコピー

見えにくい場所（空の画面・失敗・入力エラー）を、飾りや謝罪ではなく「状態・原因・次の 1 手」で書き直す例。題材は架空のアプリで、実在の製品の文言は模倣しない。

## 依頼

- 製品: レシートを撮って整理するスマートフォンアプリ「レシポン」（架空。運営は架空の会社「ミドリ舎」）
- 依頼文: 「エラーや空の画面の文言を、親しみやすくして。Apple っぽく温かく」
- 現状の場面: (1) 一覧が空 (2) 検索 0 件 (3) メール入力の誤り (4) 通信失敗 (5) カメラの許可なし
- 現状の文言の傾向: 「おっと！」「失敗しました」「We’re having trouble」風の自社都合の語り、原因の無い「エラーが発生しました」

## 目的の一文

画面が空・失敗でも、ユーザーが「何が起きたか」と「次に何をすればよいか」を 1 画面で分かる。

## 削るもの

| 削るもの | 理由 |
|---|---|
| 「おっと！」「あれれ？」などの間投詞 | 不要で、不誠実に聞こえることがある（S58） |
| 「私たちは」「弊社は」の主語 | 誰を指すか不明になる。エラーでは特に避ける（S58） |
| 汎用の「エラーが発生しました」 | 原因と対処がない。何もできない文は書かない（S58） |
| 画面上部の全面バナーとダイアログの多用 | 重要度に合わせた強さで出す。警告の乱用は効き目を弱める（S61） |
| 空画面の大きなイラストと長い説明 | 次の 1 手を隠す。説明より導線（S58） |
| 一時的な状態にしか出ない重要な情報 | 空状態は一時的。消える画面に重要な情報を置かない（S58） |

## 構成

5 場面の文言の骨格。共通の型は「状態の名前 → 理由（必要なら）→ 次の 1 手」。

```text
(1) 一覧が空        レシートはまだありません
                    撮影すると、ここに一覧で並びます。         [ レシートを撮影 ]
(2) 検索 0 件       「コーヒー」に一致するレシートはありません
                    別のことばで探すか、絞り込みを外します。   [ 絞り込みを解除 ]
(3) 入力エラー      [ メールアドレス  taro@                ]
                    @ のあとのドメインを入力してください。（欄の直下に表示）
(4) 通信失敗        読み込めませんでした
                    接続を確認して、もう一度お試しください。   [ 再読み込み ]
(5) 許可なし        カメラが許可されていません
                    撮影には、設定でカメラの許可が必要です。   [ 設定を開く ]  [ 写真から選ぶ ]
```

- 入力エラーは、問題の近くに出す（S58）。画面上部に集約して欄から離さない
- 通信失敗は、何も無い白い画面にしない。前回の内容が残っているなら見せたまま、その上に控えめに知らせる（読み込み中は、まず何かを表示する考え方。S64）

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| 文の型 | 状態の名前 + 次の 1 手。理由は必要なときだけ | S58。型は本 skill の整理 |
| 入力エラーの位置 | 欄の直下 | 問題の近くに出す（S58） |
| エラーの手がかり | 色・アイコン・文言の 3 つを併用する | 色だけで伝えない（S53、S55、S72 の 1.4.1） |
| 見出し | 17 pt・太さ 600 | Headline は 17 pt・Semibold（S51） |
| 説明・エラー文 | 15 / 20 pt | Subhead（S51）。px への読み替えは本 skill の目安 |
| 主ボタン | 1 つ。高さ 44 以上 | 目立つボタンは 1〜2 個、44 x 44 pt 以上（S57）。副の導線は文字リンク |
| 通知の強さ | 状態は控えめ（欄の下・面の中）、データ損失の恐れは割り込み（ダイアログ） | 重要度に合わせて強さを決める（S61） |
| 成功の確認 | 期待どおり成功した操作では出さない | 失敗したときだけ知らせれば足りる（S61） |
| 自動で消える通知 | 使わない。閉じる操作で消す | 時間で消えるものは処理に時間がかかる人に不利（S55） |
| 読み上げ | エラーは動的な領域として読み上げる | 本 skill の目安（出典なし） |
| 動き | 欄の枠色の変化のみ・0.15s | 秒数は本 skill の目安（出典なし。HIG に UI アニメーションの秒数は無い。S56） |

コントラスト比（WCAG の相対輝度式で計算。基準 4.5:1、非文字 3:1。S72）:

| 組み合わせ（前景 / 背景） | ライト | ダーク | 高コントラスト（ライト） | 高コントラスト（ダーク） |
|---|---|---|---|---|
| 本文色 / 背景 | 16.79 | 16.72 | 21.00 | 21.00 |
| 補助文字色 / 背景（説明） | 8.74 | 9.10 | 16.79 | 18.79 |
| エラー色 / 背景（入力エラー） | 6.54 | 8.19 | 9.58 | 12.37 |
| エラー色 / 面（面の中のエラー） | 6.00 | 7.43 | 8.79 | 11.01 |
| ボタン文字 / アクセント | 6.39 | 9.41 | 9.81 | 13.50 |
| アクセント / 背景（リンク） | 6.39 | 8.95 | 9.81 | 13.50 |
| 枠線 / 背景（非文字。入力欄の枠） | 4.49 | 5.49 | 8.74 | 10.23 |

## 文言

| 場面 | before | after | 理由 |
|---|---|---|---|
| 一覧が空 | おっと！まだ何もありません | レシートはまだありません。撮影すると、ここに一覧で並びます。 | 間投詞を外し、次の行動を示す（S58） |
| 検索 0 件 | 見つかりませんでした | 「コーヒー」に一致するレシートはありません。別のことばで探すか、絞り込みを外します。 | 何を探して無かったかを返す |
| 入力エラー | 無効なメールアドレスです | @ のあとのドメインを入力してください。 | 何が悪いかでなく、どう直すかを書く（S58） |
| 通信失敗 | 私たちはコンテンツの読み込みに問題があります | 読み込めませんでした。接続を確認して、もう一度お試しください。 | 主語を避け、直し方を示す（S58） |
| カメラ | エラー: 権限がありません | カメラが許可されていません。撮影には、設定でカメラの許可が必要です。 | 専門語を避け、理由と行き先を示す |

英語の原文（S58、HIG Writing）: "display it as close to the problem as possible, avoid blame, and be clear about what someone can do to fix it." 日本語は要旨で、エラーは問題の近くに、責めずに、直し方を書く。

英語の原文（S58）: "Interjections like “oops!” or “uh-oh” are typically unnecessary and can sound insincere." 日本語は要旨で、軽い間投詞はたいてい不要で、不誠実に聞こえうる。

英語の原文（S58）: "Provide clear next steps on any blank screens." 日本語は要旨で、空の画面には次の行動を用意する。

## コード断片

入力エラーと空状態の骨格。外部の資源・スクリプト・計測は使わない。

```html
<form class="form" action="/signup" method="post" novalidate>
  <label for="email">メールアドレス</label>
  <input id="email" name="email" type="email" value="taro@" autocomplete="email"
         aria-invalid="true" aria-describedby="email-error">
  <p id="email-error" class="error" role="alert"><span class="mark" aria-hidden="true">!</span>@ のあとのドメインを入力してください。</p>
</form>

<section class="empty" aria-labelledby="empty-title">
  <h2 id="empty-title">レシートはまだありません</h2>
  <p>撮影すると、ここに一覧で並びます。</p>
  <a class="btn" href="/capture">レシートを撮影</a>
</section>
```

```css
:root {
  color-scheme: light dark;
  --bg: #ffffff; --surface: #f4f5f8; --text: #1d1d22; --text-2: #4a4a55;
  --accent: #0b57d0; --on-accent: #ffffff; --danger: #b3261e; --line: #767680;
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #121216; --surface: #1c1c22; --text: #f2f2f5; --text-2: #b4b4c0;
          --accent: #8ab4ff; --on-accent: #0b0b0e; --danger: #ff8a80; --line: #8a8a98; }
}
@media (prefers-contrast: more) {
  :root { --text: #000000; --text-2: #1d1d22; --accent: #003c9e; --danger: #8c1008; --line: #4a4a55; }
}
@media (prefers-contrast: more) and (prefers-color-scheme: dark) {
  :root { --bg: #000000; --surface: #121216; --text: #ffffff; --text-2: #f2f2f5;
          --accent: #b8d0ff; --on-accent: #000000; --danger: #ffb4ab; --line: #b4b4c0; }
}

body { margin: 0; padding: 24px 16px; background: var(--bg); color: var(--text);
  font-family: system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Noto Sans CJK JP", sans-serif; }
.form { max-width: 360px; margin: 0 auto 32px; }                  /* 空状態の幅と揃える */
label { display: block; margin: 0 0 4px; font-size: 15px; line-height: 20px; color: var(--text-2); }
input { display: block; width: 100%; box-sizing: border-box; min-height: 44px; padding: 0 12px;
  font-size: 17px; color: var(--text); background: var(--bg);
  border: 2px solid var(--line); border-radius: 8px; transition: border-color 0.15s; }
input[aria-invalid="true"] { border-color: var(--danger); }
.error { margin: 8px 0 0; font-size: 15px; line-height: 20px; color: var(--danger); }
.mark { display: inline-block; width: 1.25em; margin-right: 0.5em; text-align: center;
  font-weight: 700; border: 2px solid currentColor; border-radius: 50%; }   /* 色以外の手がかり（形）。装飾なので aria-hidden */

.empty { max-width: 360px; margin: 64px auto; text-align: left; }
.empty h2 { font-size: 17px; line-height: 22px; font-weight: 600; margin: 0 0 4px; }
.empty p { font-size: 15px; line-height: 20px; color: var(--text-2); margin: 0 0 24px; }
.btn { display: flex; align-items: center; justify-content: center; min-height: 44px; box-sizing: border-box;
  border-radius: 12px; background: var(--accent); color: var(--on-accent); font-weight: 600; text-decoration: none; }
:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }

@media (prefers-reduced-motion: reduce) {
  input { transition: none; }
}
```

## 初見検証

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 「メールの @ のあとが足りない」 | 欄の直下の文と形の手がかり |
| 何を操作できるか | メール欄を直せる | エラーの出る欄が強調されている |
| どう操作するか | 続きを入力して送る | 文が直し方を言っている |

空状態は、画面の見出しだけを読んで「次に何をするか」が分かるかを確かめる。

## 点検

- アクセシビリティ: エラーは色・形・文言で伝わり、スクリーンリーダーが欄とエラーを関連づけて読む。自動で消えず、閉じる操作で消せる（S53、S55）
- 可読性: 4 通りの配色で上の比率を満たす。入力欄の枠は 3:1 以上（S72 の 1.4.11）
- やり直し: 入力内容はエラー後も残す。通信失敗は再読み込みで戻せる。許可が無くても、別経路（写真から選ぶ）で目的に到達できる
- 失敗パターン: 親しみを出すために、状況を伝える語が減っていないか。重要な情報を空状態の文に入れて、データが入った後に消えていないか（S58）。自社都合の主語・間投詞が戻っていないか
- 送信: 入力は POST で送り、サーバー側でも検証する（画面の表示だけに頼らない。本 skill の目安）
- 推測の明示: この文言が実際にユーザーの再試行率を上げるかは、この例からは分からない。計測と観察が要る

## この例の出典

S51、S53、S55、S56、S57、S58、S61、S64、S72。台帳は `../references/sources.md`。

# 例: コンポーネントの仕様書（Button の 1 ページ）

社内デザインシステムの部品 1 つ（Button）を、デザイナーにも開発者にも使える 1 ページの仕様書にまとめる例。名前と目的・属性・状態・トークンとの対応・アクセシビリティ・版と貢献を、同じ表の形で書く。部品の仕様書を頼まれたとき、または既存の仕様書が「見た目の一覧」で終わっているときに開く。題材は架空で、実在の製品名・ロゴの模倣は含まない。トークンの名前と値は `design-tokens-minimal.md` の 3 つの JSON に対応する。

## 依頼

- 製品: 請求書発行 SaaS「ハリマ帳」の社内デザインシステム「ハリマ DS」（架空。運営は架空の会社「ネリ舎」。名称が実在のものと衝突しないかは確認していない）
- 依頼文: 「社内デザインシステムの Button の仕様書を書いて。デザイナーにも開発者にも使えるように」
- 想定する読み手: デザイナー 1 人・開発者 6 人・入社したばかりの開発者（確認が取れないので置いた前提）。仕様書は Web アプリ（HTML と CSS）の実装を指す
- 前提: トークンは ref・sys の 2 層で、部品専用のトークンは持たない（`design-tokens-minimal.md`）

## 目的の一文

Button を使う人が、この 1 ページだけで、どの種類をいつ使い、どの状態が何で表れ、どのトークンを参照するかが分かる。

## 削るもの

| 削るもの | 理由・削り方 |
|---|---|
| 種類（variant）を 3 つより多く | primary・secondary・danger のみ。必要な違いの理由を各 1 行で書き、理由を言えない種類は作らない（本 skill の整理） |
| サイズ違い（small・large） | 1 サイズだけ。同じ画面で 2 サイズが要る実例が出てから足す |
| アイコン付き・読み込み中・トグル | 要望が出てから。足すときは貢献の基準（下）を通す |
| ボタン専用のトークン（`button-*`） | 値は sys トークンと同じで足りる。3 画面以上で別の値が要るまで作らない |
| 「リンクのように見えるボタン」 | 別部品にしない。遷移だけなら `<a>` を使う |
| デザインツールのライブラリへのリンクだけの仕様 | 静的なデザインツールの中の部品だけではデザインシステムでない（S64、区分 B の要旨）。ライブラリは仕様の一部で、コード・原則・運用が要るのは本 skill の整理 |
| 全組み合わせの見た目のギャラリー | 状態の表と、コードで確認できる 1 例にとどめる |

## 構成

仕様書の節の並び（本 skill の整理。出典のある規格ではない）。

```text
1. 名前・目的・状態・版        何の部品か。いつ使い、いつ使わないか
2. 属性（props）               取りうる値と既定値
3. 状態                       通常・ホバー・フォーカス・押下・無効。色だけで伝えない
4. トークンとの対応            部品の属性 → sys トークン
5. アクセシビリティ            操作対象・コントラスト・キーボード・読み上げ
6. 拡張の流儀                  利用側が足すときの書き方
7. 版と貢献                    互換性の基準・追加の受け入れ基準・窓口
```

- 1 ページは、読み手が上から順に読んで実装まで進める順に並べる。仕様書は作って終わりにせず、更新の担当を決める（S50）。維持には専任のチームが要る、と NN/g は書く（S62）

## 仕様

仕様書の本体。以下を 1 ページとして使う。

### 1. 名前・目的・状態・版

| 項目 | 内容 |
|---|---|
| 名前 | `Button`（クラス名の接頭辞は `hr-button`） |
| 目的 | 画面上の操作を実行する。ページ遷移は `<a>` を使い、この部品を使わない |
| 状態（寿命） | Trial（試行）。0.x の間は属性が変わりうる |
| 版 | 0.3.0（架空）。追加した版は 0.1.0 |
| 担当 | デザインシステム担当 1 人（兼務。架空） |
| 使う場面 | 主要な操作は primary。補助は secondary。取り消せない操作は danger |
| 使わない場面 | 遷移だけ（→ `<a>`）。1 画面に primary が 2 つ以上（目安）。アイコンだけのボタン（IconButton は未作成） |

### 2. 属性

| 属性 | 値 | 既定 | 理由・備考 |
|---|---|---|---|
| `variant` | `primary`・`secondary`・`danger` | `secondary` | primary は 1 画面に 1 つ（本 skill の目安）。danger は取り消せない操作を、見た目とラベルの両方で区別するため |
| `disabled` | 真偽 | 偽 | 無効の理由は、近くの文章で言う |
| `type` | `button`・`submit`・`reset` | `button` | フォーム内の誤送信を避ける |
| ラベル | 動詞を含む短い語句 | なし（必須） | 「OK」「はい」だけにしない（下の文言） |

### 3. 状態

| 状態 | 見た目の変化 | 色以外の手がかり |
|---|---|---|
| 通常 | 種類ごとの色（下の表） | ラベル・形（角丸の面） |
| ホバー | primary は accent-hover。secondary は枠が text 色。danger は背景だけを 10% 暗く（`color-mix`。文字の色は変えない） | ポインタの形（補助。ホバーだけに頼らない） |
| フォーカス | 3px の枠を 2px 離して表示（accent 色） | 枠の形そのもの |
| 押下 | ホバーと同じ色に 1px 下へ | 位置の変化 |
| 無効 | surface 色の面・text-muted の文字・`cursor: not-allowed` | `disabled` 属性・理由の文章 |

動きの所要時間は設けない（`transition` なし）。読み込み中は削ったので、状態に含めない。

### 4. トークンとの対応

| 部品の属性 | primary | secondary | danger |
|---|---|---|---|
| 背景 | `sys.color.accent` | `sys.color.surface` | `sys.color.danger` |
| 文字 | `sys.color.on-accent` | `sys.color.text` | `sys.color.on-danger` |
| 枠 | なし（透明の 1px） | `sys.color.border` | なし（透明の 1px） |
| ホバー | 背景 `sys.color.accent-hover` | 枠 `sys.color.text` | 背景 `color-mix(in srgb, sys.color.danger 90%, black)`（danger 専用のトークンは作らない） |
| フォーカスの枠 | `sys.color.accent`（全種類で共通） | 同左 | 同左 |

共通の値: 角丸 `sys.radius.md`、左右の余白 `sys.space.4`、最小の高さ 40px。ref トークンは参照しない。

| 値 | 根拠 |
|---|---|
| 最小の高さ 40px | 本 skill の目安（出典なし）。ポインタ入力の最小は 24 × 24 CSS px（S85）を満たす。タッチ中心の画面では小さい可能性があり、実機で確かめる。Android の 48dp の推奨（S31）は別の基準 |
| 文字の太さ 600 | 本 skill の目安（出典なし） |
| 背景を 10% 暗く（danger 90%・黒 10% の混色） | 本 skill の目安（出典なし）。`filter: brightness()` は文字にも掛かるので使わない |

### 5. アクセシビリティ

コントラスト比（WCAG の相対輝度式で計算。文字 4.5:1。S83。非文字の 3:1 は S84）:

| 組み合わせ | ライト | ダーク | 基準 |
|---|---|---|---|
| on-accent / accent（primary の文字） | 6.44 | 9.99 | 4.5 |
| on-accent / accent-hover（primary のホバー） | 9.12 | 12.59 | 4.5 |
| text / surface（secondary の文字） | 14.77 | 14.77 | 4.5 |
| border / bg（secondary の枠。非文字） | 4.18 | 6.79 | 3 |
| text / bg（secondary のホバーの枠。非文字） | 16.16 | 16.66 | 3 |
| on-danger / danger（danger の文字） | 6.57 | 9.10 | 4.5 |
| on-danger / danger のホバー背景（danger 90%・黒 10% の混色。ライト `#a22016`・ダーク `#e68d83`） | 7.62 | 7.38 | 4.5 |
| accent / bg（フォーカスの枠。非文字） | 6.44 | 9.99 | 3 |
| text-muted / surface（無効の文字。参考値） | 6.29 | 8.24 | 例外 |

ホバー背景の混色は、sRGB の成分を 0.9 倍して 8 ビットに丸めた色で計算した。丸め方で小数第 2 位は動く（ライト 7.62〜7.66、ダーク 7.35〜7.38）が、基準 4.5 に対する余裕は大きい。仮に `filter: brightness(0.9)` を使うと文字の色も暗くなり、ライトでは文字が `#e6e6e6` 近くになって比が 6.11 に下がる（本例は使わない）。

無効（inactive）な部品の文字・視覚情報は、WCAG の 1.4.3 と 1.4.11 の要件から除かれる（S83・S84）。それでも読めるよう、比率は表のとおりに保つ。

- HTML の `<button>` を使う。ラベルは見える文字で、読み上げもその文字になる。アイコンだけの Button は作らない
- danger は赤だけで伝えない。ラベルに動詞と対象を書き（「請求書を削除」）、実行の前に確認を挟む
- 操作対象は 24 × 24 CSS px 以上（S85）。本例の 40px はこれを満たす
- キーボード（Enter・Space）と、フォーカスの表示は、ネイティブの `<button>` と `:focus-visible` で満たす。該当する WCAG の番号と基準は台帳に無く、未照合

### 6. 拡張の流儀

- 利用側のコードは別の接頭辞（`app-` など）を使い、システムの接頭辞（`hr-`）を使わない（S76）
- システムの CSS を直接上書きして見た目を変えない。短期的には動くが、更新で壊れうる（S76）。足りない見た目は、貢献の窓口へ相談する

### 7. 版と貢献

| 項目 | 内容 | 根拠 |
|---|---|---|
| 版の付け方 | MAJOR・MINOR・PATCH | S82 |
| 互換性の破壊（MAJOR） | 属性の削除・名前の変更、種類の意味の変更、sys トークンの名前の変更 | 本 skill の目安。何を互換性の破壊とみなすかはチームで決める（S82 の注記） |
| MINOR | 属性・種類の追加。色の値の変更（レイアウトを変えない範囲） | 本 skill の目安。見た目の変更を MINOR にするかは決めの問題 |
| PATCH | 不具合の修正 | S82 |
| 受け入れの基準 | Useful（複数チームで有用な証拠）・Unique（重複しない）・Usable（利用者調査で検証）・Consistent（既存を再利用）・Versatile（複数の場面で使える） | S74 |
| 状態の寿命 | Trial → Stable。GOV.UK は 6 か月で、否定的な反応が無ければ Stable へ移す。この期間は GOV.UK の運用の値で、他へ転用しない | S75 |
| 本例の Trial の期間 | 3 か月。否定的な反応が無ければ Stable へ | 本 skill の目安（出典なし） |
| 窓口 | デザインシステム担当（架空） | S51 の問い（承認者・新規要望・廃止）に答える形で決める |

## 文言

ボタンのラベルと、仕様書の文面。

| 場所 | before | after | 理由 |
|---|---|---|---|
| primary のラベル | OK | 請求書を発行 | 押すと何が起きるかを、動詞で言う |
| danger のラベル | 削除 | 請求書を削除 | 対象を書く。押す前に何が消えるか分かる |
| secondary のラベル | キャンセル | 発行をやめる | 何をやめるかを言う |
| 確認の問い | 本当によろしいですか？ | この請求書を削除します。元に戻せません。 | 結果を先に書く |
| 仕様書の「使わない場面」 | （書かない） | 遷移だけなら `<a>` を使う | 使わない場面があると、誤用が減る（本 skill の整理） |
| 無効の理由 | （無効のまま） | 宛先を選ぶと押せます | 無効にする理由を、近くの文章で言う |

## コード断片

HTML と CSS の最小例。色・余白・角丸は `design-tokens-minimal.md` の sys トークンだけを参照し、外部の CDN・スクリプト・フォント・計測は使わない。

```html
<button type="button" class="hr-button hr-button--primary">請求書を発行</button>
<button type="button" class="hr-button hr-button--secondary">発行をやめる</button>
<button type="button" class="hr-button hr-button--danger">請求書を削除</button>

<p id="why">宛先を選ぶと押せます。</p>
<button type="button" class="hr-button hr-button--primary" disabled aria-describedby="why">請求書を発行</button>
```

```css
.hr-button {
  display: inline-flex; align-items: center; justify-content: center; box-sizing: border-box;
  min-height: 40px;                                  /* 本 skill の目安。24px は最低線（S85） */
  padding: 0 var(--hr-sys-space-4);
  border: 1px solid transparent;                     /* 枠の有無でレイアウトを動かさない */
  border-radius: var(--hr-sys-radius-md);
  font: inherit; font-weight: 600; cursor: pointer;
}
.hr-button--primary   { background: var(--hr-sys-color-accent);  color: var(--hr-sys-color-on-accent); }
.hr-button--secondary { background: var(--hr-sys-color-surface); color: var(--hr-sys-color-text);
                        border-color: var(--hr-sys-color-border); }
.hr-button--danger    { background: var(--hr-sys-color-danger);  color: var(--hr-sys-color-on-danger); }

.hr-button--primary:hover:not(:disabled)   { background: var(--hr-sys-color-accent-hover); }
.hr-button--secondary:hover:not(:disabled) { border-color: var(--hr-sys-color-text); }
.hr-button--danger:hover:not(:disabled)    { background-color: color-mix(in srgb, var(--hr-sys-color-danger) 90%, black); }
.hr-button:active:not(:disabled)           { transform: translateY(1px); }

.hr-button:focus-visible {
  outline: 3px solid var(--hr-sys-color-accent); outline-offset: 2px;
}
.hr-button:disabled {
  background: var(--hr-sys-color-surface); color: var(--hr-sys-color-text-muted);
  border-color: transparent; cursor: not-allowed;
}
/* transition は設けない。動きを足すときは prefers-reduced-motion で止める */
```

## 初見検証

仕様書を読んだことのない開発者に、3 つの問いを確かめる。

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | primary は 1 画面に 1 つ。danger はラベルに動詞と対象。遷移は `<a>` | 「使う場面・使わない場面」の行 |
| 何を操作できるか | 種類（3 つ）と無効。サイズ・アイコンは選べない | 属性の表 |
| どう操作するか | `variant` を選び、ラベルを書く。色は sys トークンだけを使う | トークンの表・コード断片 |

3 問のいずれかに答えられない場合は、節を足さず、表の行を減らして書き直す。

## 点検

- 利用: 3 つの種類が、実際の画面で何回使われているかを棚卸しで数えた（本例の版・担当は架空）。1 回しか使わない種類をシステムに入れていない（S49）
- 色: ライト・ダークで上の表の比率を満たす。ホバー背景は実際の混色で計算した。色を変えたら再計算した。ホバーを色だけの手がかりにしていない
- トークン: 部品が sys トークンだけを参照し、ref トークンと 16 進値を書いていない
- 運用: 更新の担当・窓口・版の基準・Trial の期間が書かれている。採用率だけを成功の指標にしない（S59）
- 拡張: 利用側に別の接頭辞を案内し、システムの CSS の上書きを勧めていない（S76）
- 未検証: 実ブラウザでの表示・スクリーンリーダー・フォーカス移動は未実施。`color-mix()` を使えない環境が対象なら、ホバー用の sys トークンを足す案もある（その場合は役割の数が 11 になる）。キーボード操作とフォーカスの WCAG の基準は未照合。推測の明示として、部品の利用実態や、窓口が回るかは、この例からは分からない

## この例の出典

S31、S49、S50、S51、S59、S62、S64、S74、S75、S76、S82、S83、S84、S85。台帳は `../references/sources.md`。

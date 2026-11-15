# 例: 最小のデザイントークン（DTCG 形式の JSON と CSS カスタムプロパティ）

画面ごとに違う色・余白・角丸を、名前付きの値に集める最小のトークン設計の例。階層・命名・エイリアス・ダークテーマの差し替えを 1 本の流れで示す。後半では、値を `oklch()` で書いてダークの差し替えを `light-dark()` で書く場合を足す。トークンと理由を 1 ファイルに持つ形式（DESIGN.md）との対応は `design-md-and-dtcg.md` にある。トークンを設計する依頼や、「まず全部定義したい」という相談、色の書き方（関数・差し替え）を聞かれたときに開く。題材は架空の製品で、実在の製品名・ロゴの模倣は含まない。

## 依頼

- 製品: 請求書発行 SaaS「ハリマ帳」（架空。運営は架空の会社「ネリ舎」。名称が実在の製品と衝突しないかは確認していない）。Web アプリ 1 つ、画面は約 30
- 依頼文: 「色と余白が画面ごとに違う。ダークテーマも付けたい。最小のデザイントークンを設計して」
- 使い手: 開発者 6 人・デザイナー 1 人（確認が取れないので置いた前提）。画面を見るのは経理担当者
- 追加の依頼文: 「値は知覚に合う形（`oklch()`）で持ちたい。ダークの切り替えを 1 行で書きたい」。使うブラウザーは、新しい CSS の機能に対応していない環境も混ざる（置いた前提）
- 確認用の画面: 請求書 1 枚（請求先は架空の取引先「カワセ計器」。「コード断片」の確認用の HTML）
- 棚卸しの結果（架空の数値。実案件では数えてから決める。S49）: 文字・背景・線の色が 16 進値で 38 種、余白が 41 種、角丸が 7 種。重複と、ずれているだけの値をまとめると、役割は色 10・余白 6 段・角丸 2 段、パレットは 14 色に集約できた

## 目的の一文

画面ごとに散った色・余白・角丸を、名前付きの値 1 か所に集め、ダークテーマを「役割への色の割り当て」の差し替えだけで作れるようにする（値を hex で書いても `oklch()` で書いても、差し替えを `@media` で書いても `light-dark()` で書いても、役割の名前と割り当ては同じ）。

## 削るもの

| 削るもの | 理由・削り方 |
|---|---|
| component 層（`button-*` など部品専用のトークン） | 公式の階層は reference・system・component の 3 つ（S23）だが、層を足す理由は使う人の数で言う。同じ部品が 3 画面以上で別の値を要するまで作らない（本 skill の目安） |
| 色ごとの段階パレット（各色 10 段など） | 使っている 14 色だけを持つ。M3 は 5 つのキーカラーと各 13 トーンの仕組みを持つ（S19）が、本例は同じ仕組みを持たない |
| 文字・影・動きのトークン | 文字の詳細は designer-typography が導入されていれば案内する。elevation と motion の現行値は未取得（初版の値は S05・S06 で、現行の値として使わない） |
| 1 回しか使わない色（棚卸しで 1 画面にだけ出た 9 色） | システムに入れない。その画面のローカルな値に置く（本 skill の整理） |
| 手動のテーマ切り替え・3 つ目のテーマ | 要望が出るまで作らない。OS の設定に従う 2 テーマだけ |
| 余白・角丸の reference 層 | 値を持つ層が 1 つで足りる。system 層に値を直接置き、同じ値を別の役割で使う必要が出たら reference を足す |
| `oklch()` だけの定義（hex の廃止） | 非対応の環境では、未知の関数を含む宣言が使う時に無効になる（本 skill の整理。実測は本 skill の検査で、実機の非対応ブラウザーは未確認）。hex と `@media` を既定に残し、対応する環境だけを `@supports` で上書きする |
| 相対色・`color-mix()` での派生色 | 14 色を明示した値で持つ。計算で作る色は本例の目的に無い |
| sRGB の外の色（広色域） | 値は hex から変換した sRGB の範囲に収める。広色域を足すときは別の検討 |
| トークンと理由を 1 ファイルに持つ形式（DESIGN.md）での持ち方 | `design-md-and-dtcg.md` で扱う。実在のサイトから抽出した DESIGN.md を使う案も、そこで扱う |

## 構成

```text
reference.tokens.json       ref.color.*          14 色。値（色空間と成分）を持つ。部品は参照しない
system.tokens.json          sys.color.*          10 役割。ライトの割り当て（reference へのエイリアス）
                            sys.space.* / sys.radius.*   6 段・2 段。値を直接持つ
system.dark.tokens.json     sys.color.*          10 役割。ダークの割り当て（上書き用）
tokens.css                  上の 3 つに対応する CSS カスタムプロパティ（`--hr-` 接頭辞）
tokens.css（末尾に追加）    @supports の中で、ref を oklch() に、sys を light-dark() に上書き。対応する環境だけ
```

- 部品は `sys.*` だけを参照する。`ref.*` を直接参照する部品を作らない
- ダークテーマは色の反転ではなく、同じ 10 の役割に別の reference を割り当てる（S18・S19 から読み取る本 skill の整理）
- 値の持ち主は 1 か所（reference）。コントラストを直したときは reference の値だけを変える（S65 の要旨。1 か所の変更が全体へ届く）。ただし `tokens.css` では、値（hex と `oklch()`）と割り当て（`@media` と `light-dark()`）が、既定と上書きの 2 か所に出る。片方だけ直すと、対応する環境と対応しない環境で色が分かれる（本 skill の検査）。手で直さず、JSON から両方を生成する
- 既定は hex と `@media`。`@supports` の中は上書きだけで、役割の名前は増やさない。部品は、どちらの書き方でも同じ `--hr-sys-*` を参照する

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| 階層 | ref → sys の 2 層から始める。component 層は作らない | 公式は 3 階層（S23）。2 層から始めるのは本 skill の目安（出典なし）。どの 2 層から始めるかは組織の事情で変わる。本例は 1 製品・部品の少ない新規の設計で、値の層と役割の層から始める。`design-system-migration-plan.md` は旧クラスの多い 3 製品の移行で、互換層の手がかりとして役割の層と部品の層から始める |
| トークンの形 | `$value` を持つオブジェクトがトークン。親の key が名前。グループに置いた `$type` が下のトークンへ継承される | S71 |
| エイリアス | `{ref.color.paper}` の形。参照先の `$value` に解決される | S71 |
| 色の値 | `colorSpace` と `components` が必須。`alpha` は省略でき、省略すると 1。`hex` は任意の fallback で、6 桁。srgb の成分は 0〜1 | S71 の最小例、S95（Color module） |
| 寸法の値 | `{ "value": 数値, "unit": "px" }` | S71 |
| 交換形式の位置づけ | DTCG 2025.10。Final Community Group Report で、W3C 標準ではない | S68・S69 |
| 命名 | `ref`・`sys` の層、種類、名前の順。役割の名前は用途（`bg`・`text`・`accent`）で付け、見た目（`blue`）にしない | 層の名は S23。名前の付け方は本 skill の目安。M3 の Web 版は `--md-sys-color-<token>`（S25）。同じ形にする義務は無く、本例は自社の接頭辞 `--hr-` を使う |
| ファイル名 | `*.tokens.json`（メディアタイプは `application/design-tokens+json`） | S71 |
| 3 ファイルの結合 | ツール側の運用。ダークは `system.tokens.json` の `sys.color` を上書きする想定 | 本 skill の目安。DTCG の結合・テーマの仕組み（Resolver module）は未照合 |
| 余白・角丸 | 余白は 4px の倍数で 6 段（4・8・12・16・24・32px）、角丸は 4px・8px の 2 段 | 本 skill の目安（出典なし）。8dp グリッドは Material 初版の値（S07）で現行値ではない。M3 の角丸スケール（S22）は採らない |
| ダークの背景 | `night`（#131614）。役割から決めた値 | 本 skill の目安（出典なし）。#121212 は M2 時代の推奨（S13）で、M3 の既定ではない |

コントラスト比（WCAG の相対輝度式で計算。基準は文字 4.5:1。非文字は 3:1。S83・S84）:

| 前景 / 背景 | ライト | ダーク | 基準 |
|---|---|---|---|
| text / bg | 16.16 | 16.66 | 4.5 |
| text / surface | 14.77 | 14.77 | 4.5 |
| text-muted / bg | 6.88 | 9.30 | 4.5 |
| text-muted / surface | 6.29 | 8.24 | 4.5 |
| accent / bg（リンク文字） | 6.44 | 9.99 | 4.5 |
| on-accent / accent（ボタン文字） | 6.44 | 9.99 | 4.5 |
| on-accent / accent-hover | 9.12 | 12.59 | 4.5 |
| danger / bg（エラー文字） | 6.57 | 9.10 | 4.5 |
| on-danger / danger | 6.57 | 9.10 | 4.5 |
| border / bg（入力欄の枠。非文字） | 4.18 | 6.79 | 3 |
| border / surface（同上） | 3.82 | 6.02 | 3 |

色を変えたら再計算する。accent と accent-hover の差（ライト 1.42・ダーク 1.26）は小さいので、ホバーの手がかりを色だけにしない（部品の仕様で補う。`component-spec-button.md`）。

### oklch() と light-dark()（出典ありと本 skill の目安を分ける）

出典あり。対応状況は、MDN の表示による時点情報（取得 2026-11-16）で、ブラウザーの版は照合していない。

| 項目 | 値 | 根拠 |
|---|---|---|
| `oklch()` | 明度・彩度・色相で色を書く関数。Oklab の円筒形。明度は百分率で書ける（例: `oklch(40.1% 0.123 21.57)`） | S98 |
| `light-dark()` | 2 つの色を並べる。使う配色がライトか設定が無いときは 1 つ目、ダークのときは 2 つ目。`prefers-color-scheme` のメディア特性を書かずに済む | S96 |
| `light-dark()` の前提 | `color-scheme` に `light dark` を指定する。本例の `tokens.css` は指定済み | S96 |
| `color-scheme` の効果 | スクロールバー・フォーム部品などブラウザーが出す部品の既定色も、使う配色に合う | S97 |
| 構文の対応で分ける | `@supports` は、ブラウザーが CSS の機能に対応しているかで宣言を分ける。配色の判定そのものは `@media` の役割（本 skill の整理） | S99 |
| 対応状況（時点情報） | MDN は、`oklch()` を 2023-05 から、`light-dark()` を 2024-05 から、主要ブラウザーで使えると表示する（`light-dark()` は「Newly available」で、古い環境では動かないことがある、とも書く）。`color-scheme` は 2022-01、`@supports` は 2015-09 から | S98、S96、S97、S99 |
| DTCG の `oklch` の値 | `colorSpace` は `"oklch"`、`components` は [明度, 彩度, 色相]。明度は 0〜1、色相は 0 以上 360 未満。彩度は 0 以上で上限なし（実際には 0.5 を超えない、と仕様の注は書く） | S95 |
| `hex` | 任意の fallback。6 桁の hex で書く | S95 |

本 skill の目安（出典なし）。

| 項目 | 値 | 理由 |
|---|---|---|
| 値の変換 | 14 色の hex を Oklab の定義の式で `oklch()` へ変換。明度は小数 3 桁（百分率では小数 1 桁）、彩度は 4 桁、色相は 1 桁で丸めると、hex へ戻る（本 skill の計算） | 丸めても色が変わらない最小の桁を選んだ。実案件では、色の生成ツールの出力に置き換える |
| 既定を hex に残す | 既定の宣言は hex と `@media`。上書きは `@supports` の中だけ | カスタムプロパティは未知の関数も受け入れ、使う時（`var()`）に無効になる。そのとき、前に書いた対応済みの宣言には戻らない。手元のブラウザーで、未知の関数名を使って再現した（本 skill の整理。実測は本 skill の検査で、実機の非対応ブラウザーは未確認） |
| 条件の書き方 | `oklch()` と `light-dark()` の両方に対応する環境だけ、`and` でつないで上書き | 片方だけ対応する環境で、片方の宣言だけが効く状態を避ける |
| 色域 | sRGB の範囲。彩度は最大でも 0.1821（rose）で、広色域へ出さない | 広色域は別の検討（削るもの） |
| ライトとダークの対 | `light-dark(ライト, ダーク)` の順は、役割ごとに 1 行。ダークの割り当ては、上の `@media` 版と同じ reference | 2 つの書き方で、割り当てを変えない |

描画した色のコントラスト比（本 skill の計算。WCAG の相対輝度式）:

- `oklch()` と `light-dark()` で上書きした描画の 10 役割の色は、hex 版の描画と、ライト・ダークとも 8 ビットで一致した。確認用の HTML に描かれない 2 役割（accent-hover・on-danger）は、計測用の要素で色を読んだ。11 組の比は、上の表の値（ライト・ダークとも）と同じだった
- 1440・390・320 px のどの幅でも、描画した色は同じだった（色は幅で変わらない）
- 色を変えたら再計算する。丸めた `oklch()` を使う場合は、描画した色（または hex へ戻した色）から測る

## 文言

トークンの名前と、使い手への案内文。

| 場所 | before | after | 理由 |
|---|---|---|---|
| 色の名前 | `--blue-main`・`--gray3`・`#1b6b4f` の直書き | `--hr-sys-color-accent`・`--hr-sys-color-text-muted` | 見た目でなく役割で付ける。色を変えても名前が嘘にならない（本 skill の整理） |
| 説明（`$description`） | なし | 「4px × 名前の数」 | 数の意味を 1 行で書く。グループの説明は任意の文字列で書ける（S71） |
| 使い手への案内 | 「必要な色は自由に追加してください」 | 「色は `--hr-sys-*` だけを使う。足りない役割は理由と使う画面の数を添えて相談する」 | 追加の入口を 1 つにして、更新の担当を決める（S50・S51。窓口は架空） |
| CSS のコメント（上書きの入口） | なし | 「対応する環境だけが上書きする。条件は、使う 2 つの書き方の両方」 | 既定を消さずに足していることが、読めば分かる |
| 上書きの運用の案内 | 「hex と oklch の両方を直してください」 | 「値と割り当ては JSON を正とし、`tokens.css` は生成する。手で直さない」 | `tokens.css` で 2 か所に出る値を、片方だけ直さない（S65 の要旨。本 skill の検査） |

## コード断片

JSON は S71 の最小例（`$value`・`$type`・エイリアス・寸法・色の形）と、S95（色のキー名・hex・成分の範囲）に沿う。構文は `python3 -m json.tool` で確認済みで、仕様への適合を検査するツールは通していない。

`reference.tokens.json`（色の値を持つ。成分は hex から 3 桁に丸めた値）:

```json
{
  "ref": {
    "color": {
      "$type": "color",
      "paper": { "$value": { "colorSpace": "srgb", "components": [1, 1, 1], "hex": "#ffffff" } },
      "mist": { "$value": { "colorSpace": "srgb", "components": [0.957, 0.961, 0.953], "hex": "#f4f5f3" } },
      "fog": { "$value": { "colorSpace": "srgb", "components": [0.706, 0.733, 0.71], "hex": "#b4bbb5" } },
      "ash": { "$value": { "colorSpace": "srgb", "components": [0.596, 0.627, 0.6], "hex": "#98a099" } },
      "stone": { "$value": { "colorSpace": "srgb", "components": [0.463, 0.494, 0.467], "hex": "#767e77" } },
      "slate": { "$value": { "colorSpace": "srgb", "components": [0.333, 0.361, 0.337], "hex": "#555c56" } },
      "ink": { "$value": { "colorSpace": "srgb", "components": [0.114, 0.133, 0.118], "hex": "#1d221e" } },
      "night": { "$value": { "colorSpace": "srgb", "components": [0.075, 0.086, 0.078], "hex": "#131614" } },
      "leaf-soft": { "$value": { "colorSpace": "srgb", "components": [0.663, 0.89, 0.784], "hex": "#a9e3c8" } },
      "leaf-light": { "$value": { "colorSpace": "srgb", "components": [0.498, 0.816, 0.671], "hex": "#7fd0ab" } },
      "leaf": { "$value": { "colorSpace": "srgb", "components": [0.106, 0.42, 0.31], "hex": "#1b6b4f" } },
      "leaf-deep": { "$value": { "colorSpace": "srgb", "components": [0.078, 0.322, 0.235], "hex": "#14523c" } },
      "rose-light": { "$value": { "colorSpace": "srgb", "components": [1, 0.616, 0.573], "hex": "#ff9d92" } },
      "rose": { "$value": { "colorSpace": "srgb", "components": [0.706, 0.137, 0.094], "hex": "#b42318" } }
    }
  }
}
```

`system.tokens.json`（ライトの役割と、値を直接持つ余白・角丸）:

```json
{
  "sys": {
    "color": {
      "$type": "color",
      "bg": { "$value": "{ref.color.paper}" },
      "surface": { "$value": "{ref.color.mist}" },
      "text": { "$value": "{ref.color.ink}" },
      "text-muted": { "$value": "{ref.color.slate}" },
      "border": { "$value": "{ref.color.stone}" },
      "accent": { "$value": "{ref.color.leaf}" },
      "accent-hover": { "$value": "{ref.color.leaf-deep}" },
      "on-accent": { "$value": "{ref.color.paper}" },
      "danger": { "$value": "{ref.color.rose}" },
      "on-danger": { "$value": "{ref.color.paper}" }
    },
    "space": {
      "$type": "dimension",
      "$description": "4px × 名前の数",
      "1": { "$value": { "value": 4, "unit": "px" } },
      "2": { "$value": { "value": 8, "unit": "px" } },
      "3": { "$value": { "value": 12, "unit": "px" } },
      "4": { "$value": { "value": 16, "unit": "px" } },
      "6": { "$value": { "value": 24, "unit": "px" } },
      "8": { "$value": { "value": 32, "unit": "px" } }
    },
    "radius": {
      "$type": "dimension",
      "sm": { "$value": { "value": 4, "unit": "px" } },
      "md": { "$value": { "value": 8, "unit": "px" } }
    }
  }
}
```

`system.dark.tokens.json`（同じ 10 役割への、別の割り当て。役割の名前は変えない）:

```json
{
  "sys": {
    "color": {
      "$type": "color",
      "bg": { "$value": "{ref.color.night}" },
      "surface": { "$value": "{ref.color.ink}" },
      "text": { "$value": "{ref.color.mist}" },
      "text-muted": { "$value": "{ref.color.fog}" },
      "border": { "$value": "{ref.color.ash}" },
      "accent": { "$value": "{ref.color.leaf-light}" },
      "accent-hover": { "$value": "{ref.color.leaf-soft}" },
      "on-accent": { "$value": "{ref.color.night}" },
      "danger": { "$value": "{ref.color.rose-light}" },
      "on-danger": { "$value": "{ref.color.night}" }
    }
  }
}
```

`tokens.css`（上の 3 つに対応する形。実案件では JSON から生成し、手で保守しない。外部のフォント・スクリプトは使わない）:

```css
:root {
  color-scheme: light dark;
  /* ref 層: 値を持つ。部品は参照しない */
  --hr-ref-color-paper: #ffffff;  --hr-ref-color-mist: #f4f5f3;  --hr-ref-color-fog: #b4bbb5;
  --hr-ref-color-ash: #98a099;    --hr-ref-color-stone: #767e77; --hr-ref-color-slate: #555c56;
  --hr-ref-color-ink: #1d221e;    --hr-ref-color-night: #131614;
  --hr-ref-color-leaf-soft: #a9e3c8; --hr-ref-color-leaf-light: #7fd0ab;
  --hr-ref-color-leaf: #1b6b4f;      --hr-ref-color-leaf-deep: #14523c;
  --hr-ref-color-rose-light: #ff9d92; --hr-ref-color-rose: #b42318;

  /* sys 層: ライトの割り当て */
  --hr-sys-color-bg: var(--hr-ref-color-paper);
  --hr-sys-color-surface: var(--hr-ref-color-mist);
  --hr-sys-color-text: var(--hr-ref-color-ink);
  --hr-sys-color-text-muted: var(--hr-ref-color-slate);
  --hr-sys-color-border: var(--hr-ref-color-stone);
  --hr-sys-color-accent: var(--hr-ref-color-leaf);
  --hr-sys-color-accent-hover: var(--hr-ref-color-leaf-deep);
  --hr-sys-color-on-accent: var(--hr-ref-color-paper);
  --hr-sys-color-danger: var(--hr-ref-color-rose);
  --hr-sys-color-on-danger: var(--hr-ref-color-paper);

  --hr-sys-space-1: 4px;  --hr-sys-space-2: 8px;  --hr-sys-space-3: 12px;
  --hr-sys-space-4: 16px; --hr-sys-space-6: 24px; --hr-sys-space-8: 32px;
  --hr-sys-radius-sm: 4px; --hr-sys-radius-md: 8px;
}

/* ダーク: 役割は同じ名前のまま、割り当てだけを差し替える */
@media (prefers-color-scheme: dark) {
  :root {
    --hr-sys-color-bg: var(--hr-ref-color-night);
    --hr-sys-color-surface: var(--hr-ref-color-ink);
    --hr-sys-color-text: var(--hr-ref-color-mist);
    --hr-sys-color-text-muted: var(--hr-ref-color-fog);
    --hr-sys-color-border: var(--hr-ref-color-ash);
    --hr-sys-color-accent: var(--hr-ref-color-leaf-light);
    --hr-sys-color-accent-hover: var(--hr-ref-color-leaf-soft);
    --hr-sys-color-on-accent: var(--hr-ref-color-night);
    --hr-sys-color-danger: var(--hr-ref-color-rose-light);
    --hr-sys-color-on-danger: var(--hr-ref-color-night);
  }
}

/* 使い方: 部品は sys だけを参照する。テーマごとの分岐を書かない */
body { background: var(--hr-sys-color-bg); color: var(--hr-sys-color-text); padding: var(--hr-sys-space-4); }
```

### oklch() と light-dark() で書く場合

上の `tokens.css` の末尾に足す。既定の hex と `@media` はそのまま残し、2 つの新しい書き方に対応するブラウザーだけが `@supports` の中で上書きする。`oklch()` の値は、14 色の hex から計算で変換した（明度は小数 3 桁、彩度は 4 桁、色相は 1 桁で丸めて、hex へ戻る）。

```css
/* 対応する環境だけが上書きする。条件は、使う 2 つの書き方の両方 */
@supports (color: light-dark(#000000, #ffffff)) and (color: oklch(0% 0 0)) {
  :root {
    /* ref 層: 値を oklch() で持つ（sRGB の範囲） */
    --hr-ref-color-paper: oklch(100% 0 0);
    --hr-ref-color-mist: oklch(96.9% 0.0028 128.5);
    --hr-ref-color-fog: oklch(78.5% 0.0114 149.8);
    --hr-ref-color-ash: oklch(69.7% 0.0136 149.2);
    --hr-ref-color-stone: oklch(58.4% 0.0142 149.1);
    --hr-ref-color-slate: oklch(46.7% 0.013 149.6);
    --hr-ref-color-ink: oklch(24.5% 0.0105 151.3);
    --hr-ref-color-night: oklch(19.6% 0.0061 156.6);
    --hr-ref-color-leaf-soft: oklch(86.9% 0.0702 164.5);
    --hr-ref-color-leaf-light: oklch(79.5% 0.0964 163.5);
    --hr-ref-color-leaf: oklch(47.3% 0.0885 165);
    --hr-ref-color-leaf-deep: oklch(39.3% 0.0727 165);
    --hr-ref-color-rose-light: oklch(79.3% 0.119 26.9);
    --hr-ref-color-rose: oklch(50% 0.1821 29.5);

    /* sys 層: ライトとダークを 1 行で書く（ライト, ダーク）。color-scheme は上で light dark を指定済み */
    --hr-sys-color-bg: light-dark(var(--hr-ref-color-paper), var(--hr-ref-color-night));
    --hr-sys-color-surface: light-dark(var(--hr-ref-color-mist), var(--hr-ref-color-ink));
    --hr-sys-color-text: light-dark(var(--hr-ref-color-ink), var(--hr-ref-color-mist));
    --hr-sys-color-text-muted: light-dark(var(--hr-ref-color-slate), var(--hr-ref-color-fog));
    --hr-sys-color-border: light-dark(var(--hr-ref-color-stone), var(--hr-ref-color-ash));
    --hr-sys-color-accent: light-dark(var(--hr-ref-color-leaf), var(--hr-ref-color-leaf-light));
    --hr-sys-color-accent-hover: light-dark(var(--hr-ref-color-leaf-deep), var(--hr-ref-color-leaf-soft));
    --hr-sys-color-on-accent: light-dark(var(--hr-ref-color-paper), var(--hr-ref-color-night));
    --hr-sys-color-danger: light-dark(var(--hr-ref-color-rose), var(--hr-ref-color-rose-light));
    --hr-sys-color-on-danger: light-dark(var(--hr-ref-color-paper), var(--hr-ref-color-night));
  }
}
```

DTCG の JSON で `oklch` の値を持つ場合の形（3 色だけ示す。残りの 11 色も同じ形）。成分は [明度, 彩度, 色相] の順で、明度は 0〜1。`hex` は 6 桁の fallback で、上の `tokens.css` の hex と同じ値にした。

```json
{
  "ref": {
    "color": {
      "$type": "color",
      "ink": { "$value": { "colorSpace": "oklch", "components": [0.245, 0.0105, 151.3], "hex": "#1d221e" } },
      "leaf": { "$value": { "colorSpace": "oklch", "components": [0.473, 0.0885, 165], "hex": "#1b6b4f" } },
      "rose": { "$value": { "colorSpace": "oklch", "components": [0.5, 0.1821, 29.5], "hex": "#b42318" } }
    }
  }
}
```

### 確認用の HTML

トークンを使う側の最小の画面。色は `--hr-sys-*` だけを参照し、テーマの分岐を書かない。`tokens.css` は上の 2 つの CSS を 1 ファイルにしたもの。静的で、操作を持たない（ボタンは見た目の確認用）。

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>請求書 No.0042 | ハリマ帳</title>
<link rel="stylesheet" href="tokens.css">
<style>
  .card { max-width: 32rem; margin: 0 auto; padding: var(--hr-sys-space-4); background: var(--hr-sys-color-bg); border: 1px solid var(--hr-sys-color-border); border-radius: var(--hr-sys-radius-md); line-height: 1.7; }
  h1 { margin: 0 0 var(--hr-sys-space-2); font-size: 1.25rem; }
  .muted { margin: 0 0 var(--hr-sys-space-4); color: var(--hr-sys-color-text-muted); }
  .error { color: var(--hr-sys-color-danger); }
  .nw { white-space: nowrap; }
  label { display: block; margin: var(--hr-sys-space-4) 0; }
  input { display: block; box-sizing: border-box; width: 100%; margin-top: var(--hr-sys-space-1); padding: var(--hr-sys-space-2) var(--hr-sys-space-3); font: inherit; color: var(--hr-sys-color-text); background: var(--hr-sys-color-surface); border: 1px solid var(--hr-sys-color-border); border-radius: var(--hr-sys-radius-sm); }
  a { color: var(--hr-sys-color-accent); }
  .btn { padding: var(--hr-sys-space-3) var(--hr-sys-space-4); font: inherit; color: var(--hr-sys-color-on-accent); background: var(--hr-sys-color-accent); border: 0; border-radius: var(--hr-sys-radius-sm); }
</style>
</head>
<body>
<main class="card">
  <h1>請求書 No.0042</h1>
  <p class="muted">カワセ計器 宛て・支払期限 <span class="nw">12 月 25 日</span></p>
  <p>金額は 128,000 円。入金はまだ確認できていません。</p>
  <p class="error">支払期限を過ぎています。</p>
  <label>メモ<input value="電話で確認する" readonly></label>
  <p><a href="#history">取引先の履歴を見る</a></p>
  <button class="btn" type="button">督促を送る</button>
</main>
</body>
</html>
```

## 初見検証

トークンの案内を読んだだけの新しい開発者に、3 つの問いを確かめる。

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 色は `--hr-sys-*` だけを使う。16 進値と `--hr-ref-*` を部品に書かない | 案内文・ファイルの冒頭のコメント |
| 何を操作できるか | 画面で `--hr-sys-*` を参照する。ダークのために何も書かなくてよい | 使い方の CSS（分岐が無い） |
| どう操作するか | 足りない役割は、理由と使う画面の数を添えて窓口へ相談する | 案内文の最後の 1 文 |

3 問のいずれかに答えられない場合は、トークンを増やさず、名前と案内文を見直す。

`oklch()` と `light-dark()` を足した部分の案内を読んだ人にも、同じ 3 つを確かめる。

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 既定の hex と `@media` を消さない。上書きは `@supports` の中だけ | CSS のコメント |
| 何を操作できるか | 色の値は reference の層だけを直す。`tokens.css` では 2 か所に出るので、手で直さず、JSON から両方を生成する。ライトとダークの対は、役割ごとの 1 行 | 上書きの CSS・運用の案内 |
| どう操作するか | 値と割り当ては JSON を直して、`tokens.css` を生成し直す | 運用の案内 |

## 点検

- 利用: 10 の色の役割と 6 段の余白は、どれも 2 画面以上で使われていることを実案件の棚卸しで確かめる（本例の数は架空）
- 階層: component 層を持たない理由を言える。足す条件（3 画面以上で別の値）を案内文に書いた
- 値: JSON と CSS の hex が一致している。`components` は hex から 3 桁に丸めた値で、hex を正とする
- 色: ライト・ダークの両方で、上の表の比率が基準を満たす。色を変えたら再計算した
- ダーク: 色の反転でなく、役割への割り当てになっている。M2 の #121212 や M3 の値を、根拠なく流用していない
- 運用: 変更の判断者と相談の窓口が決まっている（S51）。成功の指標を採用率だけにしない（S59）
- 上書き: 既定の hex と `@media` が残り、`@supports` の中だけが上書きになっている。上書きを無効にした描画（条件を常に偽にした版）と、有効な描画で、10 役割の色が一致した（ライト・ダーク。描画した色の読み取り）
- 幅: 1440・390・320 px のどれでも、横にはみ出さない（`scrollWidth` が `clientWidth` と同じ）。文字は折り返す
- 値: `oklch()` の 14 値が、丸めても元の hex に戻る。JSON の `hex`（fallback）が CSS の hex と一致している
- 2 か所: `tokens.css` の値と割り当てが、既定と上書きで食い違っていない（JSON から両方を生成している）
- 推測の明示: 棚卸しの数・使い手の人数は架空。変換ツール・結合の仕組みは未検証で、実案件では使うツールの文書で確かめる。採用後の効果（工数・不具合）は、この例からは分からない
- 未検証（足した部分）: 実機の非対応ブラウザー（条件を偽にした描画で代えた）。`light-dark()` の相対色などの細部・古い環境の版。対応状況は MDN の表示（2026-11-16 時点）で、版は照合していない

## この例の出典

S05、S06、S07、S13、S18、S19、S22、S23、S25、S49、S50、S51、S59、S65、S68、S69、S71、S83、S84、S95、S96、S97、S98、S99。台帳は `../references/sources.md`。

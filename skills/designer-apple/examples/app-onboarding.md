# 例: 初回起動とオンボーディング

初回起動を「ツアー・設定・許可・評価依頼を順に通す」作りから「開いてすぐ最初の 1 手に進める」作りへ組み替える例。題材は架空のアプリで、実在の製品の画面・名称は模倣しない。

## 依頼

- 製品: 観葉植物の水やりを記録するスマートフォンアプリ「ミズヤリ」（架空。運営は架空の会社「ミドリ舎」）
- 依頼文: 「初回起動のオンボーディングを見直して。離脱が多いので、説明を増やしたい」
- 現状: ツアー 5 枚 → アカウント作成 → 通知の許可 → 好みの設定 4 項目 → 評価のお願い → 空の画面
- 想定するユーザー: 植物を買ったばかりで、記録アプリを初めて使う人。説明を読む動機は弱い

## 目的の一文

初回起動の直後に、最初の植物を 1 つ追加して「次の水やり日が出る」体験をさせる。

## 削るもの

| 削るもの | 理由 |
|---|---|
| ツアー 5 枚 | 標準的な部品の使い方を説明しない。使いながら学べるようにする（S16、S24） |
| 起動時のアカウント作成 | 体験の前に登録を求めない。保存が必要になった時点で尋ねる（本 skill の整理。S78 の考え方） |
| 起動時の通知許可 | 許可は、その機能が必要になった時に尋ねる（S78） |
| 好みの設定 4 項目 | 必須でない設定は後回しにする。既定値を良くする（S24、S77） |
| 起動時の評価のお願い | 体験する前に評価や購入を促さない（S78） |
| 端末から取れる情報の入力（言語・地域） | 自動で取得できる情報は入力させない（S24） |
| 起動画面のスローガン・ロゴ演出 | 起動画面は速く見せるためのもの。文字や宣伝を載せない（S63） |

## 構成

before（空の画面に着くまで 9 段）と after（最初から空の画面。最初の 1 手は「植物を追加」）。

```text
before:  [ツアー1][ツアー2][ツアー3][ツアー4][ツアー5] -> [登録] -> [通知許可] -> [設定4項目] -> [評価] -> 空の画面

after:   +------------------------------+
         | 植物はまだありません          |  見出し（左揃え・太字）
         | 植物を 1 つ追加すると、       |  目的の説明 1 文
         | 次の水やり日をお知らせします。|
         |                              |
         | [ 植物を追加 ]               |  主ボタン 1 つ
         +------------------------------+
         ヒント（植物を追加した後の画面に 1 度だけ・閉じられる。画面には [ 水やり日を変更 ] がある）:
         「水やり日は「水やり日を変更」から変えられます」
```

- 設定・通知・登録は、必要になった場面で 1 つずつ出す。例: 水やりのリマインダーを設定した瞬間に、通知の許可を尋ねる（S78）
- ヒントは単一の長い導入ではなく、文脈に合った短いヒントを置く（S78）。閉じられる、任意である

## 仕様

画面アプリの値は iOS の pt を基にする。試作の HTML では px に読み替えるが、等値換算は原文に無い（本 skill の読み替え）。

| 項目 | 値 | 根拠 |
|---|---|---|
| 見出し | 34 pt・行送り 41 pt・太字・左揃え | Large Title は 34 / 41 pt、強調は Bold（S51）。重要な場面の見出しは太く左揃えに調整された（S69。適用範囲はアラートとオンボーディングなど） |
| 本文 | 17 pt・行送り 22 pt・Regular | Body（S51） |
| 補足（ヒント） | 13 pt・行送り 18 pt | Footnote（S51）。最小は 11 pt |
| 主ボタン | 高さ 44 pt 以上・幅は画面幅の大半・1 つ | hit region は 44x44 pt 以上（S57）。目立つボタンは 1〜2 個（S57） |
| 操作対象の周囲 | 枠付きで約 12 pt、枠なしで約 24 pt | S55（Accessibility） |
| 画面内の余白 | 左右 20 pt | 本 skill の目安（出典なし）。iOS のマージン値は原文に無い |
| 押下状態 | 色の明暗で示す | 押下状態が無いとボタンが反応していないと感じる（S57） |
| 文字拡大 | 200% でも読める。大きい文字では縦に積み替える | S55、S51（Dynamic Type の積み替え） |
| 起動 | 即時。直前の状態を復元する | S63、S24 |
| 動き | 画面切替なし。ヒントはフェードのみ・0.2s | 秒数は本 skill の目安（出典なし）。HIG に UI アニメーションの秒数は無い（S56） |
| 色 | 共通パレット。アクセントは主ボタンのみ | S53、S71 |

HIG Onboarding は、速く・楽しく・任意の導入を求める（S16）。「説明ゼロ」ではなく「必要なら最小限で任意」と読む。

コントラスト比（WCAG の相対輝度式で計算。基準 4.5:1、非文字 3:1。S72）:

| 組み合わせ（前景 / 背景） | ライト | ダーク | 高コントラスト（ライト） | 高コントラスト（ダーク） |
|---|---|---|---|---|
| 本文色 / 背景 | 16.79 | 16.72 | 21.00 | 21.00 |
| 補助文字色 / 背景（ヒント） | 8.74 | 9.10 | 16.79 | 18.79 |
| ボタン文字 / アクセント | 6.39 | 9.41 | 9.81 | 13.50 |
| 本文色 / 面（ヒントの面） | 15.40 | 15.17 | 19.26 | 18.69 |
| アクセント / 面（ヒントの「閉じる」） | 5.86 | 8.12 | 9.00 | 12.02 |
| アクセント / 背景（副ボタンの文字と枠、フォーカスの輪） | 6.39 | 8.95 | 9.81 | 13.50 |

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| 見出し | ようこそ！あなたの植物ライフをサポートします | 植物はまだありません | 状態をそのまま言う。感嘆符と飾りを避ける（S58） |
| 説明 | ミズヤリは AI が水やりを最適化する革新的なアプリです | 植物を 1 つ追加すると、次の水やり日をお知らせします。 | 機能の自慢でなく、次の 1 手と得られるものを言う |
| 主ボタン | はじめましょう | 植物を追加 | ボタンは動詞で始め、短く（S57、S58）。流れの開始に「Get Started」のような語を使う考えもある（S58） |
| 通知の確認 | 通知を許可してください | 水やりの日にお知らせしますか？ お知らせする / 今はしない | 理由を、必要になった場面で言う。断っても使い続けられる（S78） |
| ヒント | チュートリアルを見る | 水やり日は「水やり日を変更」から変えられます | 長い導入でなく、画面にある操作を指す短いヒント（S78） |
| 完了 | 設定が完了しました！ | （出さない。次の水やり日を画面に出す） | 期待どおりに成功した操作は確認を省く（S61） |

英語の原文（S78、HIG Onboarding）: "Prefer letting people experience your app or game before prompting them for ratings or purchases." 日本語は要旨で、体験の前に評価や購入を求めない。

## コード断片

初回画面（空状態）の試作。外部の CDN・スクリプト・フォント・計測は使わない。

```html
<main class="screen">
  <h1>植物はまだありません</h1>
  <p class="desc">植物を 1 つ追加すると、次の水やり日をお知らせします。</p>
  <a class="btn" href="/plants/new">植物を追加</a>
</main>
```

植物を追加したあとの画面（ヒントは 1 度だけ出し、閉じられる）。

```html
<section class="screen" aria-labelledby="plant-title">
  <h1 id="plant-title">モンステラ</h1>
  <p class="desc">次の水やり日は 6 月 9 日です。</p>
  <button class="btn-sub" type="button">水やり日を変更</button>
  <div class="hint" role="status">
    <span>水やり日は「水やり日を変更」から変えられます</span>
    <button class="hint-close" type="button">閉じる</button>
  </div>
</section>
```

```css
:root {
  color-scheme: light dark;
  --bg: #ffffff; --surface: #f4f5f8; --text: #1d1d22; --text-2: #4a4a55;
  --accent: #0b57d0; --on-accent: #ffffff;
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #121216; --surface: #1c1c22; --text: #f2f2f5; --text-2: #b4b4c0;
          --accent: #8ab4ff; --on-accent: #0b0b0e; }
}
@media (prefers-contrast: more) {
  :root { --text: #000000; --text-2: #1d1d22; --accent: #003c9e; }
}
@media (prefers-contrast: more) and (prefers-color-scheme: dark) {
  :root { --bg: #000000; --surface: #121216; --text: #ffffff; --text-2: #f2f2f5;
          --accent: #b8d0ff; --on-accent: #000000; }
}

body { margin: 0; background: var(--bg); color: var(--text);
  font-family: system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Noto Sans CJK JP", sans-serif; }
.screen { max-width: 390px; margin: 0 auto; padding: 96px 20px 24px; text-align: left; }
h1 { font-size: 34px; line-height: 41px; font-weight: 700; margin: 0 0 12px; }   /* Large Title 34/41（pt を px に読み替え） */
.desc { font-size: 17px; line-height: 22px; color: var(--text-2); margin: 0 0 32px; }
.btn { display: flex; align-items: center; justify-content: center; box-sizing: border-box;
  min-height: 44px; border-radius: 12px; background: var(--accent); color: var(--on-accent);
  font-size: 17px; font-weight: 600; text-decoration: none; transition: filter 0.2s; }
.btn:active { filter: brightness(0.9); }           /* 押下状態 */
:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }

.btn-sub { display: flex; align-items: center; justify-content: center; box-sizing: border-box; width: 100%;
  min-height: 44px; border: 2px solid var(--accent); border-radius: 12px; background: none;
  color: var(--accent); font-size: 17px; font-weight: 600; }   /* 目立たせない副の操作。主ボタンは 1 つの原則を保つ */
.hint { display: flex; align-items: center; justify-content: space-between; gap: 12px;
  margin-top: 16px; padding: 4px 4px 4px 12px; background: var(--surface); border-radius: 12px;
  font-size: 13px; line-height: 18px; animation: hint-in 0.2s ease-out; }
.hint-close { min-height: 44px; min-width: 44px; border: 0; background: none;
  color: var(--accent); font-size: 13px; text-decoration: underline; }
@keyframes hint-in { from { opacity: 0; } to { opacity: 1; } }

@media (prefers-reduced-motion: reduce) {
  .btn { transition: none; }
  .hint { animation: none; }
}
```

## 初見検証

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 「植物がまだ無い」という状態 | 見出し |
| 何を操作できるか | 「植物を追加」ボタン | 目立つ面が 1 つだけ |
| どう操作するか | 押す。追加の名前入力へ進む | ボタンの形・44 pt 以上の面 |

観察では、初見の人に説明なしでアプリを渡し、最初の 1 手までの時間と迷った場所を記録する。慣れた層・支援技術の利用者は別に見る。

## 点検

- アクセシビリティ: スクリーンリーダーで見出し → 説明 → ボタンの順に読める。文字を 200% にしても、ボタンが画面外に出ない。通知を断ってもリマインダー以外の機能が使える（S55、S78）
- 可読性: 4 通りの配色で上の比率を満たす。ヒントの面の上でも補助文字が読める
- やり直し: 追加した植物は編集・削除でき、削除は確認を 1 度だけ求める（予期しない不可逆な損失のみ警告する考え方は S26）。通知は設定から後で変えられる
- 失敗パターン: ツアーを消したことで、機能の存在が見えなくなっていないか。主要機能（写真記録など）が奥にあるなら、文脈ヒントで見つけられるようにする。既存ユーザーの習慣を、初見の人の分かりやすさと取り違えていないか（S37）
- 推測の明示: 離脱の原因・改善の効果は、この例からは分からない。計測データと観察が要る判断は相談者が行う

## この例の出典

S16、S24、S26、S37、S51、S53、S55、S56、S57、S58、S61、S63、S69、S71、S72、S77、S78。台帳は `../references/sources.md`。

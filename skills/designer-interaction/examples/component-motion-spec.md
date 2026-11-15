# 例: 部品の動きの仕様書（頻度・目的・入り・出・縮小版）

バラバラな動きを、「頻度」「伝える変化」「入り」「出」「縮小版」の 5 列で仕様化する例。題材は架空の社内ツールの部品 4 種（ボタン・ツールチップ・ドロップダウン・トースト）で、実在の製品の動きの模倣は含まない。部品の動きを揃える依頼のときに開く。デザイントークンの定義は、導入されていれば designer-material の担当で、この例は「どの部品が、どの段階を、なぜ使うか」の判断表である。

## 依頼

- 製品: 社内の在庫管理ツール「ストックノート」（架空。運営は架空の部署「備品管理室」）
- 依頼文: 「動きがバラバラで、ボタンが重い。デザインシステムに載せたいので、動きを揃えたい」
- 現状: ボタンは押すと 0.4 秒かけて弾む。ツールチップは 0.6 秒かけて拡大して出る。メニューは 0.5 秒の ease-in-out。トーストは 0.8 秒で横から入る。どれも出るときと消えるときが同じ長さ。動きを減らす設定の考慮は無い
- 想定するユーザー: 1 日に数百回、一覧を操作する倉庫の担当者（ポインタとキーボードの併用）

### 根拠の範囲（先に読む）

- 出典のある値は、動きの長さの範囲（S19・S20・S21・S22）、出現は退場よりわずかに長い（S23）、ease-out が基本（S24）、Material Web のトークンの段階（S27・S28・S29）、頻繁な操作に動きを足さない（S67）、最初のツールチップだけ遅延（S52）に限られる
- 押下の縮小（0.97）は個人の経験則（S35）。ツールチップの遅延 500 ms・個別の秒数・トーストの表示時間は、本 skill の目安（出典なし）である。長さは Material Web のトークンの段階（100・150・200・250 ms）に揃えたが、Material 3 の仕様書の本文は取得できておらず、トークンは生成ファイルの値である（S27・S28）
- 押下の縮みは、頻繁な操作への動きの追加に当たる。HIG は頻繁な操作に動きを足さない（S67）一方、フィードバックの動きは短く的確にとも述べる（S66）。この例は後者を根拠に、100 ms の小さな縮みだけを残す（本 skill の判断）。外す場合は、明るさの変化だけにする
- 「キーボードで開いたときは動かさない」は、個人の強い主張（S33）に基づく選択肢である。HIG は頻繁な操作に動きを足さないとまでしか述べない（S67）。採用するかは、利用者の頻度で決める
- `popover`・`@starting-style`・`allow-discrete` の対応状況は時点情報（2026-11-15）。取得した記述は、`@starting-style` が 2024 年 8 月から（S91）、Popover API が 2025 年 1 月から（S92）。`allow-discrete` は、台帳に出典が無い

## 目的の一文

動きは、「押下が受理されたこと」「補足が出たこと」「選択肢が出たこと」「保存が済んだこと」を伝えるために使い、1 日に何百回も見る操作では、短くするか、無くす。

## 削るもの

| 削るもの | 理由 |
|---|---|
| ボタン押下時の 0.4 秒の弾み | 頻繁な操作に動きを足さない（S67）。残すのは、フィードバックの短い縮み（約 100 ms。S20）だけ。フィードバックの動きは短く的確に（S66）が理由で、S67 に厳密に従うなら縮みも外せる（本 skill の判断） |
| ツールチップの拡大と 0.6 秒の長さ | 長さは 100〜500 ms の範囲（S19）。補足の表示に拡大は要らない |
| 2 個目以降のツールチップの遅延と動き | 最初だけ遅延し、続きは遅延なし（S52）。続きは動きも無し（S37。個人の経験則） |
| メニューの 0.5 秒の ease-in-out | 500 ms で重く感じ始める（S22）。ease-out が基本（S24） |
| トーストの横からの入りと 0.8 秒 | 大きな画面変化でも 200〜300 ms が妥当（S21）。目的の無い動きは気を散らす（S63） |
| 出ると消えるを同じ長さにすること | 出現は退場よりわずかに長く（S23） |
| 全部に同じ長さを当てること | 頻度が高い部品ほど短く、小さく（S25） |

## 構成

部品ごとに、5 つの問いに答える表を作る。表は仕様書の本体で、コードは表の値を写したものにする。

| 問い | 内容 |
|---|---|
| 頻度 | 1 人が 1 日に何回見るか。高い部品ほど短く、小さく、無くす（S25・S67） |
| 伝える変化 | 動きが何の原因と結果をつなぐか（S47）。言えなければ動かさない |
| 入り | 長さ・イージング・動かす性質（不透明度か位置か） |
| 出 | 入りより短く（S23）。中断できる |
| 縮小版 | 動きを減らす設定のときの置き換え。状態は動き以外でも伝わる（S64） |

## 仕様

括弧の段階名（short2 など）は、値を Material Web の生成ファイルの段階（S27・S28）に対応づけたもの。段階の選択は、使う場所の頻度で決める（本 skill の整理）。

| 部品 | 頻度 | 伝える変化 | 入り | 出 | 縮小版 | 根拠 |
|---|---|---|---|---|---|---|
| ボタンの押下 | 非常に高い（1 日数百回。本 skill の仮定） | 押下が受理された | `scale(0.97)`・100 ms・ease-out（short2） | 離すと 100 ms で戻る | 縮めない。明るさ（`filter`）の変化だけ（動きでなく色の変化で受理を伝える。S64） | 約 100 ms は S20、0.97 は S35（個人の経験則）。縮みを残す理由は下の「根拠の範囲」 |
| ツールチップ | 中 | 補足が出た | 最初は 500 ms 待ってから、不透明度 150 ms（short3）。続きは遅延なし・動きなし | 不透明度 100 ms（short2） | 不透明度のみ（位置・拡大は元から無い） | 最初だけ遅延は S52。続きは動きなしが S37。500 ms は目安 |
| ドロップダウン（メニュー） | 中〜高 | 選択肢が、押したボタンの下から出た | 不透明度と 4 px の下方向の移動・150 ms（short3）・ease-out | 100 ms（short2） | 不透明度のみ。移動なし。キーボードで開いたときは動きなしの選択肢（下の「仕様の選択」） | 長さは S19・S21、出現が長いは S23、ボタンから広がるは S163（個人の主張）。4 px は目安 |
| トースト | 低〜中 | 保存が済んだ | 不透明度と 8 px の上方向の移動・250 ms（medium1） | 200 ms（short4） | 不透明度のみ。移動なし | 入りが長いは S23（出現 300 ms・退場 200 または 250 ms の例）。長さは S19・S21。8 px は目安 |

共通の規則:

- イージングは ease-out を基本にする（S24）。値は `cubic-bezier(0, 0, 0, 1)`（Material Web の standard-decelerate。S29）。出（退場）も同じ曲線で、短くする。ease-in を退場に使うと反応が鈍く感じうる（S24）
- 動かす性質は、不透明度と小さな移動に限る。拡大縮小は押下の 0.97 だけ（S36 は、出現をより高い初期の拡大率（0.9 以上）から始める、という個人の経験則）
- 動きは中断できる。transition で書くと、途中でも最新の状態へ向かう（S43）。完了を待たせない（S68）
- 動きの完了前に次の操作を受け付ける（S68・S74）。閉じる遷移の間も、閉じた popover と `::backdrop` はポインタを受けない（`pointer-events: none`）。開閉ボタンやページを塞がない（本 skill の実装の防御。Chrome 156 では、この指定が無くても塞がなかった）
- 動きを減らす設定では、位置・拡大縮小の動きを、不透明度の変化か即時の切り替えにする（必要性は S76・S79・S149。置き換えの表は本 skill の整理）

仕様の選択（個人の強い主張に基づく。採用は利用者の頻度で決める）:

- メニューをキーボードで開いたときは、動きを付けない。キーボード起点の操作は何百回も繰り返され、動きが遅く感じさせる、という個人の主張がある（S33）。HIG は頻繁な操作に動きを足さないとまで述べる（S67）。この例のコードは、キーボードで開いたときの動きを無くす（`data-input="keyboard"`）。付けるか外すかは、実測の頻度で決める

非対応の姿（時点情報 2026-11-15）:

| 状況 | 姿 |
|---|---|
| `allow-discrete` に非対応 | `transition` の宣言ごと無効になり、メニューとトーストは動きなしで出入りする。機能は変わらない |
| Popover API に非対応 | スクリプトが検出し、`hidden` の切り替えで同じ開閉をする。Escape・メニューの外のクリック・項目の選択でも閉じる（閉じる処理は 1 か所）。メニューの中にフォーカスがあれば、起点の「並べ替える」へ戻す。動きなし |
| 動きを減らす設定 | 上の縮小版の列のとおり |

コントラスト比（WCAG の相対輝度式で計算。基準の 4.5:1・3:1 の原文は本 skill の台帳に無く、未照合）:

| 組み合わせ（前景 / 背景） | ライト | ダーク |
|---|---|---|
| 本文 / 背景 | 16.56 | 16.02 |
| 補助文字 / 面 | 7.89 | 8.54 |
| ボタンの文字 / アクセント | 5.99 | 9.37 |
| ツールチップ・トーストの文字 / その背景 | 16.56 | 16.02 |
| 枠線（非文字）/ 背景 | 4.83 | 5.95 |

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| ボタン | 実行 | 在庫を追加 | 動詞と対象で短く |
| 保存ボタン | 保存 | 変更を保存 | 何を保存するかを言う |
| 並べ替え | ▼ | 並べ替える | 何をするかを動詞で言う。メニューの項目は並べ方の名前で書く |
| 同期 | 同期 | 在庫を同期 | 何を同期するかを言う |
| 書き出し | 書き出し | CSV に書き出す | 形式と動詞を言う |
| ツールチップ（同期） | （無し） | 最終同期 10:42 に完了 | 補足は本文でなく、ボタンの説明に付ける |
| ツールチップ（書き出し） | （無し） | 表示中の行を、すべて書き出す | 同上 |
| トースト | 保存に成功しました！ | 変更を保存しました。変更が無いときは「保存する変更はありません」 | 結果を短く。変更の有無で文言を分ける |
| トーストの閉じる | ×（名前なし） | 閉じる | 読み上げ用の名前 |

## コード断片

4 つの部品の最小例。外部のライブラリ・フォント・計測は使わない。ここで書く値は「仕様」の表の写しで、長さは CSS の変数（Material Web の段階名）で持つ。

```html
<main class="page">
  <h1>在庫一覧</h1>
  <div class="toolbar" role="toolbar" aria-label="一覧の操作">
    <button class="btn" type="button" id="add">在庫を追加</button>
    <button class="btn btn-sub" type="button" id="save">変更を保存</button>
    <button class="btn btn-sub" type="button" id="sort" popovertarget="sort-menu">並べ替える</button>
    <span class="tip">
      <button class="btn btn-sub" type="button" aria-describedby="tip-sync">在庫を同期</button>
      <span class="tip-text" role="tooltip" id="tip-sync">最終同期 10:42 に完了</span>
    </span>
    <span class="tip">
      <button class="btn btn-sub" type="button" aria-describedby="tip-csv">CSV に書き出す</button>
      <span class="tip-text" role="tooltip" id="tip-csv">表示中の行を、すべて書き出す</span>
    </span>
  </div>
  <ul class="rows" id="rows">
    <li>養生テープ <span>在庫 24</span></li>
    <li>結束バンド <span>在庫 120</span></li>
    <li>梱包用の箱（中） <span>在庫 8</span></li>
  </ul>
</main>

<div id="sort-menu" class="menu" popover>
  <button type="button" class="menu-item">名前順</button>
  <button type="button" class="menu-item">在庫の少ない順</button>
  <button type="button" class="menu-item">更新の新しい順</button>
</div>

<div id="toast" class="toast" popover="manual" role="status">
  <span id="toast-text"></span>
  <button type="button" class="toast-close" id="toast-close">閉じる</button>
</div>
```

```css
:root {
  color-scheme: light dark;
  --bg: #ffffff; --surface: #f3f4f6; --text: #1b1f24; --text-2: #454c55;
  --accent: #0b5cd5; --on-accent: #ffffff; --line: #6b7280;
  --tip-bg: #1b1f24; --tip-text: #ffffff;
  /* 長さは Material Web の段階名（S27・S28）。段階の選択は頻度で決める */
  --d-short2: 100ms; --d-short3: 150ms; --d-short4: 200ms; --d-medium1: 250ms;
  --ease-out: cubic-bezier(0, 0, 0, 1);       /* standard-decelerate（S29） */
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #15171b; --surface: #1e2127; --text: #f1f2f4; --text-2: #b7bdc7;
          --accent: #8ab4ff; --on-accent: #0b0c0e; --line: #8d95a3;
          --tip-bg: #f1f2f4; --tip-text: #15171b; }
}
body { margin: 0; background: var(--bg); color: var(--text);
  font-family: system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Noto Sans CJK JP", sans-serif; }
.page { max-width: 640px; margin: 0 auto; padding: 24px 16px 96px; overflow-x: clip; }   /* 見えないツールチップが横スクロールを作らないための保険 */
h1 { font-size: 24px; line-height: 32px; margin: 0 0 16px; }
.toolbar { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.rows { list-style: none; margin: 0; padding: 0; background: var(--surface); border-radius: 8px; }
.rows li { display: flex; justify-content: space-between; gap: 12px; padding: 12px 16px; border-top: 1px solid var(--line); }
.rows li:first-child { border-top: 0; }
.rows span { color: var(--text-2); }
:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }

/* ボタン: 押下は 100 ms で 0.97 まで縮む（S20・S35）。離すと戻る */
.btn { min-height: 44px; padding: 0 16px; border: 0; border-radius: 8px;
  background: var(--accent); color: var(--on-accent); font: inherit; font-weight: 600; cursor: pointer;
  transition: transform var(--d-short2) var(--ease-out), filter var(--d-short2) var(--ease-out); }
.btn-sub { background: var(--surface); color: var(--text); box-shadow: inset 0 0 0 1px var(--line); }
.btn:active { transform: scale(0.97); filter: brightness(0.92); }   /* 縮みと明るさ。動きを減らす設定では、明るさだけ残す */

/* ツールチップ: 最初は 500 ms 待ち、不透明度 150 ms。続き（data-warm）は遅延も動きも無し */
.tip { position: relative; display: inline-block; }
.tip-text { position: absolute; z-index: 1; top: calc(100% + 6px); left: 0; width: max-content; max-width: min(240px, calc(100vw - 32px));
  padding: 6px 10px; border-radius: 6px; background: var(--tip-bg); color: var(--tip-text); font-size: 14px;
  opacity: 0; pointer-events: none;
  transition: opacity var(--d-short2) var(--ease-out); }                 /* 出: 100 ms */
.tip:is(:hover, :focus-within) .tip-text { opacity: 1;
  transition: opacity var(--d-short3) var(--ease-out) 500ms; }           /* 入り: 150 ms・最初は 500 ms 待つ（目安） */
.toolbar[data-warm] .tip:is(:hover, :focus-within) .tip-text { transition: none; }

/* ドロップダウン（popover）: 入り 150 ms・出 100 ms。位置は JS が決める */
.menu { position: fixed; margin: 0; inset: auto; padding: 4px; border: 1px solid var(--line); border-radius: 8px;
  background: var(--surface); color: var(--text); min-width: 200px; max-width: calc(100vw - 16px);
  opacity: 0; translate: 0 -4px;
  transition: opacity var(--d-short2) var(--ease-out), translate var(--d-short2) var(--ease-out),
    display var(--d-short2) allow-discrete, overlay var(--d-short2) allow-discrete; }
.menu:popover-open { opacity: 1; translate: 0 0;
  transition: opacity var(--d-short3) var(--ease-out), translate var(--d-short3) var(--ease-out),
    display var(--d-short3) allow-discrete, overlay var(--d-short3) allow-discrete; }
@starting-style { .menu:popover-open { opacity: 0; translate: 0 -4px; } }
.menu[data-input="keyboard"], .menu[data-input="keyboard"]:popover-open { transition: none; }   /* 仕様の選択（S33）*/
.menu-item { display: block; width: 100%; min-height: 44px; padding: 0 12px; border: 0; border-radius: 6px;
  background: transparent; color: var(--text); font: inherit; text-align: left; cursor: pointer; }
.menu-item:hover { background: var(--bg); }

/* トースト: 入り 250 ms（不透明度と 8 px 上へ）・出 200 ms */
.toast { position: fixed; margin: 0 auto; inset: auto 16px 24px 16px; width: max-content; max-width: calc(100vw - 32px); translate: 0 8px;
  padding: 10px 12px 10px 16px; border: 0; border-radius: 8px; background: var(--tip-bg); color: var(--tip-text);
  align-items: center; gap: 12px; opacity: 0;
  transition: opacity var(--d-short4) var(--ease-out), translate var(--d-short4) var(--ease-out),
    display var(--d-short4) allow-discrete, overlay var(--d-short4) allow-discrete; }
.toast:popover-open { display: flex; opacity: 1; translate: 0 0;      /* display は開いた間だけ。閉じたトーストが残らない */
  transition: opacity var(--d-medium1) var(--ease-out), translate var(--d-medium1) var(--ease-out),
    display var(--d-medium1) allow-discrete, overlay var(--d-medium1) allow-discrete; }
@starting-style { .toast:popover-open { opacity: 0; translate: 0 8px; } }
.toast-close { min-height: 44px; padding: 0 12px; border: 1px solid currentColor; border-radius: 6px;
  background: transparent; color: inherit; font: inherit; cursor: pointer; }

/* 閉じる遷移の間（display・overlay の allow-discrete で top layer に残る）も、閉じた popover と ::backdrop はポインタを受けない。
   開閉ボタンやページを塞がない。[popover] で絞るのは、非対応の姿（属性が無い要素）を巻き込まないため */
.menu[popover]:not(:popover-open), .toast[popover]:not(:popover-open),
.menu[popover]:not(:popover-open)::backdrop, .toast[popover]:not(:popover-open)::backdrop { pointer-events: none; }

/* Popover API に非対応のとき（JS が no-popover を付ける）: 動きなしで出す */
.menu[hidden], .toast[hidden] { display: none; }
.no-popover .menu:not([hidden]) { opacity: 1; translate: 0 0; }
.no-popover .toast:not([hidden]) { display: flex; opacity: 1; translate: 0 0; }

/* 動きを減らす設定: 位置・拡大縮小をやめ、不透明度だけにする */
@media (prefers-reduced-motion: reduce) {
  .btn { transition: none; }
  .btn:active { transform: none; }
  .menu, .menu:popover-open, .toast, .toast:popover-open { translate: none; }
  @starting-style { .menu:popover-open, .toast:popover-open { translate: none; } }
}
```

```js
const hasPopover = 'popover' in HTMLElement.prototype;       // 非対応なら hidden の切り替えで同じ機能を保つ
const menu = document.getElementById('sort-menu');
const sort = document.getElementById('sort');
const toast = document.getElementById('toast');
let toastTimer, toastFrom = null;                              // toastFrom: トーストを出したときにフォーカスがあった要素
if (!hasPopover) { document.documentElement.classList.add('no-popover'); menu.hidden = true; toast.hidden = true; }

/* メニュー: 位置をボタンの下に置く。キーボードで開いたときは動きを付けない（detail が 0 のクリック）*/
sort.addEventListener('click', (e) => { menu.dataset.input = e.detail === 0 ? 'keyboard' : 'pointer'; });
function placeMenu() {
  const r = sort.getBoundingClientRect();
  menu.style.top = (r.bottom + 4) + 'px';
  menu.style.left = Math.max(8, Math.min(r.left, innerWidth - 216)) + 'px';             // 画面の端からはみ出さない（幅 200 px + 余白）
}
menu.addEventListener('beforetoggle', (e) => { if (e.newState === 'open') placeMenu(); });
function closeMenu() {                                        // 閉じる処理は 1 か所。メニューの中にフォーカスがあれば、起点のボタンへ戻す
  const inside = menu.contains(document.activeElement);
  if (hasPopover) { if (menu.matches(':popover-open')) menu.hidePopover(); } else menu.hidden = true;
  if (inside) sort.focus({ preventScroll: true });
}
if (!hasPopover) {                                            // 非対応: 開閉・Escape・外側のクリックを自前で持つ
  sort.addEventListener('click', () => { if (menu.hidden) { placeMenu(); menu.hidden = false; } else closeMenu(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) closeMenu(); });
  document.addEventListener('click', (e) => { if (!menu.hidden && !menu.contains(e.target) && !sort.contains(e.target)) closeMenu(); });
}
menu.addEventListener('click', (e) => { if (e.target.closest('.menu-item')) closeMenu(); });   // 項目を選んだらメニューを閉じる

/* ツールチップ: 画面の端からはみ出さない位置に寄せる。最初の表示が済んだら暖機（data-warm）、離れて 300 ms で解除（目安） */
const bar = document.querySelector('.toolbar');
let showTimer, coolTimer;
for (const tip of bar.querySelectorAll('.tip')) {
  const text = tip.querySelector('.tip-text');
  const place = () => {
    const r = tip.getBoundingClientRect();
    text.style.left = Math.min(0, innerWidth - 16 - r.left - text.offsetWidth) + 'px';
  };
  const on = () => { place(); clearTimeout(coolTimer); showTimer = setTimeout(() => { bar.dataset.warm = ''; }, 650); };   // 遅延 500 ms + 入り 150 ms が済んでから暖機する
  const off = () => { clearTimeout(showTimer); coolTimer = setTimeout(() => { delete bar.dataset.warm; }, 300); };
  tip.addEventListener('mouseenter', on); tip.addEventListener('mouseleave', off);
  tip.addEventListener('focusin', on); tip.addEventListener('focusout', off);
}

/* トースト: 6 秒で自動で消える（目安）。閉じるボタンで即座に消せる */
function showToast(text) {
  document.getElementById('toast-text').textContent = text;
  if (!toast.contains(document.activeElement)) toastFrom = document.activeElement;
  clearTimeout(toastTimer);
  if (hasPopover) { if (!toast.matches(':popover-open')) toast.showPopover(); } else { toast.hidden = false; }
  toastTimer = setTimeout(hideToast, 6000);
}
function hideToast() {
  clearTimeout(toastTimer);
  const inside = toast.contains(document.activeElement);       // 閉じるボタンにフォーカスがあったら、出す前の要素へ戻す
  if (hasPopover) { if (toast.matches(':popover-open')) toast.hidePopover(); } else { toast.hidden = true; }
  if (inside && toastFrom && document.contains(toastFrom)) toastFrom.focus({ preventScroll: true });
}
let dirty = false;                                            // 変更があるときだけ、保存したと伝える
document.getElementById('add').addEventListener('click', () => {
  const li = document.createElement('li'); li.append('新しい在庫 ', Object.assign(document.createElement('span'), { textContent: '在庫 0' }));
  document.getElementById('rows').append(li); dirty = true;
});
document.getElementById('save').addEventListener('click', () => {
  showToast(dirty ? '変更を保存しました' : '保存する変更はありません'); dirty = false;
});
document.getElementById('toast-close').addEventListener('click', hideToast);
```

試作のため、スクリプトはインラインで書いてよい。本番では外部ファイルにするか、CSP の nonce を付ける。

## 初見検証

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 押したボタンが一瞬縮み、受理されたことが分かる。保存すると下からトーストが出る | ボタンの押下、トーストの出現 |
| 何を操作できるか | 在庫の追加・保存・並べ替え・同期・書き出し（ボタンの名前が動詞で何をするかを言う） | ツールバーのボタン（補足はツールチップ） |
| どう操作するか | ボタンを押す。並べ替えはメニューから選ぶ。トーストは「閉じる」で消せる | 44 px 以上のボタン |

動きの検証は、動きを減らす設定をオンにしても同じ 3 問に答えられることを確かめる。縮小版でも、状態は文言（「変更を保存しました」）で伝わる（S64）。

## 点検

- 目的: 各部品の動きに「伝える変化」を言えるか。言えない動きが残っていないか
- 頻度: 押下は 100 ms で 0.97 まで。メニューをキーボードで開いたときは動きなし（採用する場合）。頻度の高い部品に、位置の大きな移動を付けていない（S25・S67）
- 長さ: 入りが出より長い（S23）。すべて 500 ms 未満（S22）。値は Material Web の段階に揃っている（S27・S28。段階は生成ファイルの値）
- 閉じる遷移中: メニューとトーストが閉じつつある間（100 ms・200 ms）に、背後のボタンやページを押せる。閉じた popover と `::backdrop` の `pointer-events` が `none` である
- 中断: メニューを開閉している最中に、再度押しても止まらず、向きが変わる。トーストの表示中に再保存しても、タイマーが更新される
- 縮小版: 動きを減らす設定で、押下の縮みとメニュー・トーストの移動が消え、押下は明るさ、出入りは不透明度だけになる（押下の反応が無くならない）。設定は CSS のメディアクエリで、途中で変えても追従する
- 非対応: `allow-discrete` が使えないときは、動きなしで出入りする。Popover API が使えないときは、`hidden` の切り替えで同じ機能を保つ
- キーボード: Tab でボタンに着き、Enter・Space で押せ、メニューは Escape で閉じる。ツールチップはフォーカスでも出る。フォーカスの輪が見える
- フォーカス: メニューを閉じたら起点の「並べ替える」へ、トーストの「閉じる」を押したら、トーストを出す前にフォーカスがあった要素（「変更を保存」）へ戻る。トーストが自動で消えたときは、別の要素にあるフォーカスを動かさない。Popover API の有無で同じ
- 失敗パターン: 全部に同じ長さを当てていないか。出と入りを同じにしていないか。トーストを自動で消すとき、時間制限に関する基準（本 skill の台帳に無く、未照合）に当たらないか、実装前に確認する
- 実測（Chrome 156、2026-11-15、1440・390・320 px、ライト・ダーク、動きを減らす設定で描画）: 押下は `transform: matrix(0.97, 0, 0, 0.97, 0, 0)`・`filter: brightness(0.92)`・`transition-duration: 0.1s`。動きを減らす設定では `transform: none` のまま `filter: brightness(0.92)` が残り、押下の反応は消えない。ツールチップは、最初のボタンで不透明度が 0 → 0.47 → 0.92 → 1 と中間値を取り（待ち時間の指定値で 540・600・680 ms の時点）、入りの 150 ms が省かれない。暖機は 650 ms 後（修正前は 500 ms で、入りが 1 フレームに跳んだ）。続きのボタンは `transition-duration: 0s`・`transition-delay: 0s` で 40 ms 後に 1。メニューの入りは 0.15 s、トーストの入りは 0.25 s・出は 0.2 s。キーボードで開いたメニューは 20 ms 後に不透明度 1。閉じたトーストの `display` は `none` で、閉じるボタンは Tab で着かない（修正前は `flex` のまま不可視で残る構造だった）。保存は、変更が無いとき「保存する変更はありません」、在庫を追加した後は「変更を保存しました」と出た。動きを減らす設定では、メニューとトーストの `translate` が `none`。幅 3 種（1440・390・320 px）× ライト・ダーク × 動きを減らす設定の有無の 12 通りすべてで描画し、横はみ出し（`scrollWidth` が `innerWidth` を超えること）は無かった。390 px・320 px では、メニューが画面の端に収まり、トーストが画面の幅の内側に中央で出た。機能検出を偽にした版（`popover` の属性を外して検出を偽にした版と、`allow-discrete` を無効にした版）で、動きなしの開閉になり、前者は Escape・メニューの外のクリック・項目の選択でも閉じた。閉じる遷移の間（メニューの閉じ始めから 40 ms 後・トーストの閉じ始めから 40 ms 後）は、閉じた popover の `pointer-events` が `none` で（指定の無い版は `auto`）、背後の「在庫を追加」の位置のヒットテストは「在庫を追加」だった。ただし、指定の無い版でも Chrome 156 では閉じつつある popover はクリックを塞がず、メニューを閉じた 30 ms 後に「在庫を追加」を押すと行が 3 から 4 に増えた（塞がる挙動は再現しなかった。この指定は、他のエンジンへの防御である）。Popover 非対応版（`popover` の属性を外した版）で、メニュー項目にフォーカスを置いて Escape・項目の選択・Enter のいずれで閉じても、フォーカスは「並べ替える」に戻った（修正前は body に落ちた）。トーストの「閉じる」は、ボタンでも Enter でも、非対応版でも対応版でも、「変更を保存」へ戻った（修正前は body に落ちた）。トーストが自動で消えたとき、フォーカスが別の要素（「在庫を追加」）にあれば、そのまま残った。実機・他のブラウザーは未検証
- 推測の明示: ツールチップは Esc で消えない（ホバーで出た内容を消す手段の基準は、本 skill の台帳に無く、未照合）。500 ms（ツールチップの遅延）・300 ms（暖機の解除）・6 秒（トーストの表示）・4 px・8 px・長さの段階の選択は、本 skill の目安である。スクリーンリーダーの読み上げ（`role="tooltip"`・`role="status"`）は、実機で確かめていない。`@starting-style` と `popover` は、取得した記述の範囲（S91・S92）で時点情報である

## この例の出典

S19、S20、S21、S22、S23、S24、S25、S27、S28、S29、S33、S35、S36、S37、S43、S47、S52、S63、S64、S66、S67、S68、S74、S76、S79、S91、S92、S149、S163。台帳は `../references/sources.md`。

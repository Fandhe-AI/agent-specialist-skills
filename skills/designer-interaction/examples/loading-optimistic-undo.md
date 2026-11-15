# 例: 読み込み・楽観的更新・取り消し（スケルトンの出し分け・巻き戻し・Undo）

タスクの一覧に、読み込み中の見せ方・完了の即時反映と失敗時の巻き戻し・削除の取り消しを設計する例。題材は架空のタスク管理アプリで、実在の製品の画面の模倣は含まない。待ち時間の出し分け、楽観的更新の失敗時の見せ方、確認ダイアログを使わない削除、状態の全設計（読み込み・空・エラー）をまとめて決めたいときに開く。空状態とエラーの文言は、導入されていれば designer-apple の `app-empty-and-error-states` が扱い、この例は待ち・更新・取り消しの時間の設計である。

## 依頼

- 製品: 個人向けのタスク管理アプリ「ひとつずつ」（架空。運営は架空の会社「ひとつ舎」）
- 依頼文: 「タスクの完了をすぐ反映して、失敗したら戻したい。読み込み中はスケルトンを出したい。削除は取り消せるようにしたい」
- 現状: 完了の操作は、サーバーの応答まで 1 秒近く反映されない。読み込み中は全画面の回転する円。削除は「本当に削除しますか」の確認ダイアログで、毎回押させる
- 想定するユーザー: 1 日に何度も、タスクを完了・削除する人。通信が不安定な場所でも使う

### 根拠の範囲（先に読む）

- 出典のある事実は、1 秒未満の読み込みにはスケルトンもスピナーも不要（S106）、スピナーは 2〜10 秒・スケルトンは 10 秒未満・進捗バーは 10 秒超（S107）、10 秒を超えるなら見積もり（S112）、出し始めの遅延と最短の表示時間の目安（約 150〜300 ms と約 300〜500 ms。S49。自称で「~」つき）、スケルトンは最終の内容と同じ形（S56）、枠だけは勧めない（S108）、脈動・シマーは注意（S109）、楽観的更新は失敗時に誤りを示して巻き戻すか Undo（S50）、確認は習慣で素通りされる（S116）、Undo で守る（S115）、破壊的な操作は確認か猶予つきの Undo（S51）、取り消しの結果を見せる（S72）、空・疎・密・エラーを設計する（S55）、状態の通知（S100）、すべてをキーボードで（S98）である
- スケルトンの効果には反証がある。136 人の簡易テストで、スケルトンがすべての指標で最も悪く、スピナーや空白画面を見た人より待ちを長く見積もった（S110。区分 C。モバイルの模擬テスト）。同じ著者は、万能ではなく慎重に使うべきだと結論した（S111）。この例は、自分の待ち時間で試すことを前提にする
- 楽観的更新が体感を良くするか、失敗時の混乱がどれほどかを測った研究は、取得していない。公式の API（S114。React の `useOptimistic`）と指針（S50）があるだけである。この例は、素の JavaScript で、同じ考え方を書く
- 出し始めの遅延 200 ms・最短 400 ms・Undo の猶予 6 秒・復元行の強調 1.2 秒は、本 skill の目安（出典なし）。200 ms と 400 ms は S49 の「~」の範囲に収めたが、自称の目安で、実験の値ではない。Undo の猶予時間に出典は無い（S51 は「猶予つき」とだけ述べる）
- 通信は、スクリプトが待ち時間と失敗を擬似的に作る（URL のハッシュで指定）。実在のサーバーは使わない。この例に、新しい CSS 機能は使わない（非対応の姿の分岐は不要）

## 目的の一文

待ちは秒数に合う見せ方で出し、完了は先に反映して失敗したら正直に戻し、削除は確認でなく取り消しで守る。

## 削るもの

| 削るもの | 理由 |
|---|---|
| 全画面で回り続ける読み込みの円 | 1 秒未満ならスケルトンもスピナーも不要（S106）。出すなら最終の形に合わせる（S56） |
| 読み込みの即時表示 | 速い応答で点滅する。出し始めを遅らせ、最短の表示時間を持たせる（S49。S06 は点滅への警告） |
| 脈動・シマーの動き | 気を散らし、アクセシビリティの問題にもなりうる（S109）。静的な骨組みだけにする |
| 完了のたびのサーバー応答待ち | 成功が見込めるとき、先に反映する（S50） |
| 「本当に削除しますか」の確認 | 習慣で素通りされる（S116）。取り消しで守る（S115） |
| 取り消しの結果が見えない Undo | 効かなかったと思って繰り返す（S72）。復元した行を見せ、言葉で伝える |
| 動きだけで伝える状態 | 結果を文字でも伝える（S100） |

## 構成

画面は 4 つの状態を持つ（S55）。

| 状態 | 見せるもの |
|---|---|
| 読み込み中 | 待ちが出し始めの遅延（200 ms。目安）を超えたときだけ、最終の行と同じ高さの骨組みを 4 行。最短 400 ms 見せる |
| 通常 | タスクの行（チェック・題・削除）。完了した行は取り消し線 |
| 空 | 文と、読み込み直すボタン |
| エラー | 文と、もう一度試すボタン。行単位の失敗は、その行に出す |

画面の下に、2 つの通知欄を分けて置く。取り消しの欄（`#undo`）は、猶予中の削除の「元に戻す」だけを持つ。通常のメッセージ欄（`#msg`）は、完了・失敗・確定などの結果を伝える。別の操作の通知が、取り消しの欄を置き換えない。どちらも `role="status"` である。

操作ごとの流れ:

```text
完了: チェック → 即座に反映（行・メッセージ）→ 応答を待つ
      成功: そのまま / 失敗: チェックを戻し、行にエラーと「もう一度試す」
削除: 削除 → 即座に行を消す → 取り消しの欄に「元に戻す」（6 秒。削除ごとに猶予を持つ）
      6 秒の間に元に戻す: 元の順番の位置に行が戻り、強調される
      6 秒経過: 「元に戻す」を外し、「確定しています」→ サーバーへ確定 → 「確定しました」
      確定に失敗: 行を元の順番の位置へ戻し、通常のメッセージ欄で伝える（取り消しの欄は壊さない）
読み込み直し: 世代を進める。前の削除のタイマーと通信の結果は捨てる
```

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| 1 秒未満の待ち | スケルトンもスピナーも不要（S106 は「必要ない」と述べ、禁止ではない）。この例は、1 秒未満でも、待ちが次の遅延を超えたら骨組みを出す。理由は、応答が来る前には、待ちが 1 秒未満で終わるか分からず、無反応の画面を長く見せたくないため（本 skill の判断）。S106 に厳密に合わせるなら、遅延を 1000 ms にする（`#delay=1000`。その場合、1 秒未満の待ちは何も出ない） | S106。判断は本 skill |
| 出し始めの遅延 | 200 ms。これより早く完了したら、骨組みを出さない。点滅（速い応答での出し入れ）を避ける | S49（約 150〜300 ms の範囲内。自称の目安）・S06。200 は本 skill の目安 |
| 最短の表示 | 400 ms。出したら、データが届いても 400 ms は見せる | S49（約 300〜500 ms の範囲内）。400 は本 skill の目安 |
| 表示の使い分け | 骨組みは 10 秒未満の待ち。10 秒を超えるなら進捗と見積もりを出す（この例では文言のみ） | S107・S112 |
| 骨組みの形 | 最終の行と同じ高さ・同じ行数（4）。題の位置に棒、チェックの位置に丸。枠だけにしない | S56・S108。56 px は本 skill の値 |
| 骨組みの動き | 無し（脈動・シマーなし）。動きを減らす設定でも同じ | S109 |
| 完了の反映 | 操作から次の描画までに反映する（応答を待たない） | S50。反応の限界は 0.1 秒（S01） |
| 失敗時（完了） | チェックを戻し、その行に「完了にできませんでした。」と再試行のボタンを出す。メッセージ欄にも同じ内容を出す | S50 |
| 連続した操作 | 同じ行を続けて操作したら、最新の操作の結果だけを反映する（古い応答の失敗で巻き戻さない） | 本 skill の実装（出典なし） |
| 削除 | 確認ダイアログを出さない。行を即座に消し、6 秒の間、取り消しの欄に「元に戻す」を出す。確定は 6 秒後。猶予は削除ごとに持つ | S115・S116・S51。6 秒は本 skill の目安 |
| 元に戻す | 元の順番の位置に行を戻し、1.2 秒強調する。言葉でも伝える。Ctrl+Z（Mac は ⌘+Z）でも戻せる。対象は、猶予中の最新の削除 | 結果を見せる（S72）。1.2 秒は目安 |
| 猶予が終わった後 | 猶予が終わった時点（確定を始めた時点）で、「元に戻す」を外し、「確定しています」と出す。確定できたら「確定しました」を通常のメッセージ欄に出す | 効かないボタンを残さない（S72 の「効かなかったと思って繰り返す」の逆）。本 skill の整理 |
| 削除の確定の失敗 | 行を元の順番の位置へ戻し、通常のメッセージ欄で伝える。取り消しの欄の、別の削除の「元に戻す」は消さない | S50 の考え方（失敗時は巻き戻す） |
| 復元の位置 | 配列の添字でなく、元の順番の値で決める（他の削除の失敗で復元が入っても、順序が崩れない） | 本 skill の実装（出典なし） |
| 複数の削除 | 削除ごとに猶予とタイマーを持つ。取り消しの欄は、猶予中の最新の削除を出す。古い削除は、猶予が終われば確定する | 本 skill の実装の制限（Undo は猶予中の最新の 1 件） |
| 読み込み直し | 世代を進め、前の削除のタイマーと通信の結果（成功・失敗）を捨てる。猶予中の削除は破棄し、取り消しの欄を空にする | 本 skill の実装（出典なし） |
| 復元の強調 | 強調の期限は、行でなく状態（`t.flash`）として持つ。一覧を描き直しても、残りの時間だけ強調を付け直す（負のアニメーション遅延で途中から続ける）。外すタイマーは、期限が来た行だけを対象にする | 本 skill の実装 |
| 取り消しの欄の作り直し | 表示する内容（猶予中の削除の ID か、確定中か）が変わらないときは作り直さない。作り直すとき、フォーカスが欄の中にあったら、新しいボタンへ、ボタンが無ければ欄そのものへ移す（フォーカスを body に落とさない） | 本 skill の実装 |
| 削除済みの行の失敗 | 完了の通信が、その行の削除の後に失敗したら、状態だけ戻し、通知しない | 本 skill の実装 |
| 結果の通知 | メッセージ欄を `role="status"` にし、フォーカスを移さず伝える。読み込みの失敗も、状態の枠とメッセージ欄の両方に出す | S100 |
| フォーカス | 行が無くなる操作（全削除）と再試行の後も、フォーカスを失わない（空の状態のボタン・最初のチェックへ移す） | 本 skill の整理 |
| 空と全完了 | 0 件は「タスクはありません。」、全部完了は完了のメッセージで言い分ける | 本 skill の整理 |
| 取り消しにくい操作 | 送信・購入など、取り消しにくい操作には、この猶予の方式を使わない | 本 skill の整理（S71 は AI の自動化の注意）|
| キーボード | チェックは Space、削除・元に戻す・再試行は Enter。削除後は次の行のチェックへフォーカスを移す | S98。移動先は本 skill の整理 |
| 強調の動き | 復元した行の背景を 1.2 秒かけて戻す。動きを減らす設定では、背景色を 1.2 秒だけ静的に付ける | 本 skill の目安・整理 |

コントラスト比（WCAG の相対輝度式で計算。基準の 4.5:1・3:1 の原文は本 skill の台帳に無く、未照合）:

| 組み合わせ（前景 / 背景） | ライト | ダーク |
|---|---|---|
| 本文 / 行の面 | 15.05 | 14.40 |
| 補助文字・完了した行 / 行の面 | 7.89 | 8.54 |
| エラーの文字 / 行の面 | 5.94 | 7.07 |
| リンク・強調の輪 / 行の面 | 5.44 | 7.72 |
| ボタンの文字 / アクセント | 5.99 | 9.37 |
| 枠線（非文字）/ 背景 | 4.83 | 5.95 |
| 本文 / 強調した行の背景 | 12.43 | 11.21 |

骨組みの棒は装飾（読む対象ではない）として、コントラスト比の対象に数えない（本 skill の整理）。

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| 完了 | （無言） | 「会議の資料を送る」を完了にしました | 結果を伝える（S100） |
| 完了の失敗 | エラーが発生しました | 「会議の資料を送る」を完了にできませんでした。もう一度試す | 何が・どうすればを言う |
| 削除 | 本当に削除しますか（確認） | 「週報を書く」を削除しました。元に戻す（Ctrl+Z でも戻せる）（取り消しの欄） | 確認ではなく取り消しで守る（S115） |
| 元に戻した | （無言） | 「週報を書く」を元に戻しました | 結果を見せる（S72） |
| 削除の失敗 | 通信エラー | 「週報を書く」を削除できませんでした。元の位置に戻しました | 何が起きたかと現状を言う |
| 読み込みの失敗 | 失敗しました | タスクを読み込めませんでした。もう一度試す | 次の行動を示す |
| 空（0 件） | データがありません | タスクはありません。 | 責めず、状態を言う。削除で空になった場合も同じで、「完了」とは言わない |
| 全部完了 | （無言） | 「週報を書く」を完了にしました。すべてのタスクが完了しました | 完了と空を文言で区別する |
| 削除の確定中 | （猶予後も「元に戻す」が残る） | 「週報を書く」の削除を確定しています。（取り消しの欄。ボタンなし） | 戻せなくなったことを伝える |
| 削除の確定 | （無言） | 「週報を書く」の削除を確定しました。 | 結果を伝える |
| 10 秒を超える待ち（文言のみ） | 読み込み中… | タスクを読み込んでいます。あと 10 秒ほどかかります | 見積もりを出す（S112） |

## コード断片

タスクの一覧と 3 つの操作の最小例。通信は擬似で、URL のハッシュで待ち時間と失敗を指定できる（例: `#latency=1200&fail=complete:3`）。外部のライブラリ・フォント・計測は使わない。行の内容は `textContent` で入れる（HTML を組み立てない）。

```html
<main class="page">
  <h1>今日のタスク</h1>
  <ul id="list" class="list" aria-busy="false"></ul>
  <div id="state" class="state" hidden></div>
  <div id="undo" class="undo" role="status" tabindex="-1"></div>
  <div id="msg" class="msg" role="status"></div>
</main>
```

```css
:root {
  color-scheme: light dark;
  --bg: #ffffff; --surface: #f3f4f6; --text: #1b1f24; --text-2: #454c55; --accent: #0b5cd5; --on-accent: #ffffff;
  --line: #6b7280; --error: #b3261e; --skel: #c9ced6; --flash: #cfe0ff;
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #15171b; --surface: #1e2127; --text: #f1f2f4; --text-2: #b7bdc7; --accent: #8ab4ff; --on-accent: #0b0c0e;
          --line: #8d95a3; --error: #ff8a80; --skel: #3a4150; --flash: #1f3358; }
}
body { margin: 0; background: var(--bg); color: var(--text);
  font-family: system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Noto Sans CJK JP", sans-serif; }
.page { max-width: 560px; margin: 0 auto; padding: 24px 16px 64px; }
h1 { font-size: 24px; line-height: 32px; margin: 0 0 16px; }
:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }
.list { list-style: none; margin: 0; padding: 0; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); }
.row { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 12px; min-height: 56px; box-sizing: border-box; padding: 5px 12px;
  border-top: 1px solid var(--line); }
.row:first-child { border-top: 0; }
.row label { display: flex; align-items: center; gap: 12px; flex: 1 1 0; min-width: 0; min-height: 44px; }
.row input[type="checkbox"] { width: 24px; height: 24px; flex: none; accent-color: var(--accent); }
.title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.done .title { color: var(--text-2); text-decoration: line-through; }
.row-error { flex-basis: 100%; margin: 0 0 6px 36px; color: var(--error); font-size: 14px; }
.btn { min-height: 44px; padding: 0 12px; border: 1px solid var(--line); border-radius: 8px; background: var(--bg); color: var(--text); font: inherit; cursor: pointer; }
.btn-main { border-color: var(--accent); background: var(--accent); color: var(--on-accent); font-weight: 600; }
.link { min-height: 44px; padding: 0 4px; border: 0; background: none; color: var(--accent); font: inherit; text-decoration: underline; cursor: pointer; }

/* 骨組み: 最終の行と同じ高さ。動きは無し */
.skeleton { height: 56px; padding: 0 12px; }
.skel-box { width: 24px; height: 24px; border-radius: 50%; background: var(--skel); flex: none; }
.skel-bar { height: 14px; border-radius: 7px; background: var(--skel); flex: 1 1 0; max-width: 70%; }

.state { padding: 24px 16px; text-align: center; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); }
.state p { margin: 0 0 12px; }
.undo { min-height: 44px; margin-top: 16px; display: flex; flex-wrap: wrap; align-items: center; gap: 0 4px; }   /* 取り消しの領域。通常の通知とは別 */
.msg { min-height: 56px; margin-top: 4px; padding: 4px 0; color: var(--text); }

/* 復元した行の強調: 背景を 1.2 秒かけて戻す。動きを減らす設定では、同じ長さだけ静的に付ける */
@keyframes flash { from { background: var(--flash); } to { background: transparent; } }
.restored { animation: flash 1.2s ease-out; }
@media (prefers-reduced-motion: reduce) {
  .restored { animation: none; background: var(--flash); }
}
```

```js
const params = new URLSearchParams(location.hash.slice(1));
const clamp = (v, min, max, d) => {                                // 未指定（null・空）は、必ず既定値 d にする
  if (v === null || v.trim() === '') return d;
  const n = Number(v); return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : d;
};
const LATENCY = clamp(params.get('latency'), 0, 10000, 300);     // 擬似の通信時間（ms）
const UNDO_MS = clamp(params.get('undo'), 500, 15000, 6000);     // Undo の猶予（目安）
const SHOW_DELAY = clamp(params.get('delay'), 0, 5000, 200), MIN_VISIBLE = 400;   // 骨組みの出し始めと最短（S49 の範囲内の目安）。1000 にすると S106 に厳密
const fails = new Set((params.get('fail') || '').split(',').filter(Boolean));   // 例: load,complete:3,delete:1（各 1 回だけ失敗）
const SEED = [[1, '請求書を確認する'], [2, '会議の資料を送る'], [3, '備品を発注する'], [4, '週報を書く']];

const list = document.getElementById('list'), stateBox = document.getElementById('state'), msg = document.getElementById('msg'), undoBox = document.getElementById('undo');
const FLASH_MS = 1200;                                           // 復元した行の強調の長さ（目安）
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let tasks = [], pendings = [], gen = 0;                          // pendings: 猶予中・確定中の削除（1 件ごと）。gen: 読み込みの世代

function api(op, id) {                                            // 擬似のサーバー
  const key = op === 'load' ? 'load' : `${op}:${id}`;
  return sleep(LATENCY).then(() => {
    if (fails.delete(key)) throw new Error('fail');
    return op === 'load' ? SEED.map(([i, t]) => ({ id: i, title: t, done: false, v: 0, order: i })) : null;
  });
}
function say(text) { msg.textContent = text; }                  // 通常の通知（S100）。取り消しの領域には触れない
function renderUndo() {                                           // 取り消しの領域。猶予中の最新の削除だけに「元に戻す」を出す
  const wait = pendings.filter((p) => p.state === 'wait').pop(), send = pendings.filter((p) => p.state === 'sending').pop();
  const key = wait ? 'w' + wait.t.id : send ? 's' + send.t.id : '';
  if (undoBox.dataset.key === key) return;                        // 表示が同じなら作り直さない（フォーカス中のボタンを消さない）
  const hadFocus = undoBox.contains(document.activeElement);
  undoBox.dataset.key = key; undoBox.replaceChildren();
  if (wait) {
    const b = el('button', { type: 'button', className: 'link', textContent: '元に戻す' }); b.addEventListener('click', undo);
    undoBox.append(`「${wait.t.title}」を削除しました。`, b, '（Ctrl+Z でも戻せる）');
  } else if (send) undoBox.append(`「${send.t.title}」の削除を確定しています。`);   // 戻せなくなったら、ボタンを外す
  if (hadFocus) (undoBox.querySelector('button') || undoBox).focus({ preventScroll: true });   // 作り直した後も、フォーカスを失わない
}
function flash(t) {                                               // 強調の期限を、行でなく状態（t.flash）として持つ
  t.flash = performance.now();
  setTimeout(() => {
    if (performance.now() - t.flash < FLASH_MS - 5) return;       // 新しく強調し直した。そちらのタイマーに任せる
    t.flash = 0; const r = list.querySelector(`[data-id="${CSS.escape(String(t.id))}"]`); if (r) r.classList.remove('restored');
  }, FLASH_MS);
}
function el(tag, props, ...kids) { const e = Object.assign(document.createElement(tag), props); e.append(...kids); return e; }

function showSkeleton() {
  list.replaceChildren(...[0, 1, 2, 3].map(() => {
    const li = el('li', { className: 'row skeleton' }, el('span', { className: 'skel-box' }), el('span', { className: 'skel-bar' }));
    li.setAttribute('aria-hidden', 'true'); return li;
  }));
  list.setAttribute('aria-busy', 'true');
}
function render() {
  const f = document.activeElement, row0 = list.contains(f) && f.closest('[data-id]');          // 描き直しでフォーカスを失わない
  const keep = row0 ? { id: row0.dataset.id, sel: f.matches('input') ? 'input' : '.btn' } : null;
  list.setAttribute('aria-busy', 'false'); stateBox.hidden = true; list.hidden = tasks.length === 0;
  list.replaceChildren(...tasks.map((t) => {
    const box = el('input', { type: 'checkbox', checked: t.done });
    box.addEventListener('change', () => setDone(t, box.checked));
    const del = el('button', { type: 'button', className: 'btn', textContent: '削除' });
    del.setAttribute('aria-label', `「${t.title}」を削除`); del.addEventListener('click', () => remove(t));
    const left = t.flash ? FLASH_MS - (performance.now() - t.flash) : 0;     // 描き直しても、強調の残りの時間を引き継ぐ
    const row = el('li', { className: 'row' + (t.done ? ' done' : '') + (left > 0 ? ' restored' : '') },
      el('label', {}, box, el('span', { className: 'title', textContent: t.title })), del);
    row.dataset.id = t.id;
    if (left > 0) row.style.animationDelay = (left - FLASH_MS) + 'ms';       // 負の遅延で、途中から続ける
    if (t.error) {
      const retry = el('button', { type: 'button', className: 'link', textContent: 'もう一度試す' });
      retry.addEventListener('click', () => { t.error = null; setDone(t, !t.done); });
      row.append(el('p', { className: 'row-error' }, t.error, ' ', retry));
    }
    return row;
  }));
  if (keep) { const n = list.querySelector(`[data-id="${CSS.escape(keep.id)}"] ${keep.sel}`); if (n) n.focus(); }
  if (!tasks.length) {
    showState('タスクはありません。', 'サンプルを読み込み直す', load);
    if (keep) stateBox.querySelector('button').focus();           // 行が無くなったら、フォーカスを次の操作へ移す
  }
}
function showState(text, label, action) {
  stateBox.replaceChildren(el('p', { textContent: text }), Object.assign(el('button', { type: 'button', className: 'btn btn-main', textContent: label }),
    { onclick: action }));
  stateBox.hidden = false;
}

async function load() {                                           // 待ちの秒数に合う見せ方（S106・S49）
  const mine = ++gen;                                             // 世代を進め、前の削除のタイマーと通信の結果を無効にする
  pendings.forEach((p) => clearTimeout(p.timer)); pendings = []; renderUndo();
  const hadFocus = stateBox.contains(document.activeElement);     // 再試行のボタンを押した後も、フォーカスを失わない
  msg.textContent = ''; stateBox.hidden = true; list.hidden = false;
  let shownAt = 0;
  const timer = setTimeout(() => { if (mine === gen) { showSkeleton(); shownAt = performance.now(); } }, SHOW_DELAY);
  let loaded = null;
  try { loaded = await api('load'); } catch { /* 下で扱う */ }
  clearTimeout(timer);
  if (shownAt) await sleep(Math.max(0, MIN_VISIBLE - (performance.now() - shownAt)));   // 出したなら、最短の時間は見せる
  if (mine !== gen) return;                                       // 読み込みが重なったら、古い結果は捨てる
  if (loaded) { tasks = loaded; render(); if (hadFocus) list.querySelector('input').focus(); return; }
  list.replaceChildren(); list.setAttribute('aria-busy', 'false'); list.hidden = true;
  showState('タスクを読み込めませんでした。', 'もう一度試す', load);
  say('タスクを読み込めませんでした。', false);                    // 通知（S100）。フォーカスは再試行のボタンへ
  if (hadFocus) stateBox.querySelector('button').focus();
}

async function setDone(t, done) {                                 // 楽観的更新: 先に反映し、失敗したら戻す（S50）
  const v = ++t.v, g = gen; t.done = done; t.error = null; render();
  say(done ? `「${t.title}」を完了にしました` + (tasks.every((x) => x.done) ? '。すべてのタスクが完了しました' : '') : `「${t.title}」を未完了に戻しました`);
  try { await api('complete', t.id); } catch {
    if (g !== gen || t.v !== v) return;                           // 読み込み直した・新しい操作がある。古い失敗では戻さない
    t.done = !done;
    if (!tasks.includes(t)) return;                              // 削除済みの行は、巻き戻しだけで、通知しない
    t.error = `「${t.title}」を${done ? '完了にできませんでした。' : '未完了に戻せませんでした。'}`; render();
    say(t.error);
  }
}

function remove(t) {                                              // 確認でなく取り消しで守る（S115・S51）
  const index = tasks.indexOf(t); tasks.splice(index, 1);
  const p = { t, gen, state: 'wait', timer: setTimeout(() => commit(p), UNDO_MS) };   // 削除ごとに猶予を持つ
  pendings.push(p); render(); renderUndo();
  const next = list.querySelectorAll('input[type="checkbox"]')[index] || list.querySelector('input[type="checkbox"]');
  if (next) next.focus();
}
const drop = (p) => { pendings = pendings.filter((x) => x !== p); };
function restore(t) {                                             // 元の順番の値で位置を決める（配列の添字は、他の削除で変わる）
  const i = tasks.findIndex((x) => x.order > t.order); tasks.splice(i < 0 ? tasks.length : i, 0, t);
}
async function commit(p) {
  if (p.gen !== gen || p.state !== 'wait') return;
  p.state = 'sending'; renderUndo();                              // 猶予が終わった時点で、元に戻すを外す
  try { await api('delete', p.t.id); } catch {
    if (p.gen !== gen) return;
    drop(p); restore(p.t); flash(p.t); render(); renderUndo(); say(`「${p.t.title}」を削除できませんでした。元の位置に戻しました。`); return;
  }
  if (p.gen !== gen) return;
  drop(p); renderUndo(); say(`「${p.t.title}」の削除を確定しました。`);
}
function undo() {                                                 // 猶予中の最新の削除を戻す
  const p = pendings.filter((x) => x.state === 'wait').pop(); if (!p) return;
  clearTimeout(p.timer); drop(p); restore(p.t); flash(p.t); render(); renderUndo();   // 同じ位置に戻し、強調する（S72）
  say(`「${p.t.title}」を元に戻しました`);
  list.querySelector(`[data-id="${CSS.escape(String(p.t.id))}"] input`).focus();
}
addEventListener('keydown', (e) => {                              // テキスト入力の Ctrl+Z（入力の取り消し）は奪わない
  const typing = document.activeElement.matches('textarea, input:not([type="checkbox"])');
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && pendings.some((p) => p.state === 'wait') && !typing) { e.preventDefault(); undo(); }
});
load();
```

試作のため、スクリプトはインラインで書いてよい。本番では外部ファイルにするか、CSP の nonce を付ける。

## 初見検証

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 完了にすると、すぐ取り消し線が付く。削除すると、行が消えて「元に戻す」が出る | 行の変化と、取り消しの欄・メッセージ欄 |
| 何を操作できるか | 完了・削除・元に戻す・もう一度試す | チェック・削除ボタン・取り消しの欄のボタン・メッセージ欄の再試行 |
| どう操作するか | チェックを押す。削除を押し、間違えたら「元に戻す」（または Ctrl+Z） | 24 px 以上のチェック（行全体が押せる）、44 px 以上のボタン |

動きの検証は、動きを減らす設定をオンにしても同じ 3 問に答えられることを確かめる。復元した行は、背景の静的な強調と言葉で分かる（S64・S72）。

## 点検

- 目的: 待ち・完了・削除のそれぞれで、結果が先に見え、失敗したら戻せるか
- 待ち: 待ちが出し始めの遅延（200 ms）未満なら骨組みを出さない（点滅しない）。1 秒未満の待ちで骨組みを出す例外の理由は、仕様の表にある。出したら 400 ms は見せる（S49・S06）。骨組みと最終の一覧の高さが等しく、レイアウトがずれない（S56）。待ちが 10 秒を超える場合は、進捗か見積もりを足す（S107・S112。この例は文言のみ）
- 楽観的更新: 完了が、応答を待たずに反映される。失敗したら、チェックが戻り、行にエラーと再試行がある。同じ行の連続した操作で、古い応答が新しい結果を戻さない
- 取り消し: 削除に確認ダイアログが無い。「元に戻す」で元の順番の位置に戻り、強調される。猶予（6 秒）が終わると「元に戻す」が外れ、サーバーへ確定し、失敗なら行が戻る。別の操作の通知（完了・失敗）が、猶予中の「元に戻す」を消さない。読み込み直しの後、古い削除のタイマー・通信・Ctrl+Z が一覧を壊さない。送信・購入のような取り消しにくい操作に、この方式を使っていない（S71・S51）
- 状態: 読み込み中・通常・空・エラーのすべてがある（S55）。メッセージが `role="status"` で、フォーカスを奪わない（S100）
- キーボード: Tab でチェックと削除に着き、Space・Enter で操作できる。削除の後、フォーカスが消えない（次の行へ移る）。Ctrl+Z で戻せる。フォーカスの輪が見える（S98）
- 再描画とフォーカス: 一覧と取り消しの欄の作り直しで、フォーカスを body に落とさない。取り消しの欄は、表示が変わらなければ作り直さない（別の削除の確定が始まっても、フォーカス中の「元に戻す」が残る）。復元した行の強調は、一覧を描き直しても期限まで続く
- 縮小版: 動きを減らす設定で、復元した行の強調が背景色の静的な表示になる。骨組みは元から動かない
- 横はみ出し: 1440・390・320 px で横スクロールが出ない。長い題は省略記号で切る
- 失敗パターン: 骨組みが万能だと思っていないか（S110・S111）。確認ダイアログを足していないか（S116）。Undo の結果が見えない状態になっていないか（S72）
- 実測（Chrome 156、2026-11-15、1440・390・320 px、ライト・ダーク、動きを減らす設定で描画）: ハッシュ無しで開くと、擬似の通信は 300 ms・Undo の猶予は 6000 ms で、削除の 900 ms 後に「元に戻す」で戻った（修正前は 0 ms・500 ms で、戻らなかった）。待ちが 100 ms のとき、骨組みは一度も出なかった。待ちが 1200 ms のとき、骨組みは約 200 ms 後に出て、約 1200 ms で一覧に替わった。待ちが 450 ms のとき、骨組みは約 200 ms に出て、データが届いた 450 ms ではなく約 600 ms（出してから約 400 ms 後）に一覧へ替わった。骨組みと最終の一覧の高さは、どちらも 226 px（行は 56 px の 4 行）で、ずれは無かった。完了は、チェックを押した処理の中（約 0.4 ms）で行が完了になった。失敗する行（待ち 800 ms）は、約 900 ms 後にチェックが戻り、行にエラーと再試行が出て、再試行で完了になった。全部を完了にすると「すべてのタスクが完了しました」が出た。Space キーで操作した後も、フォーカスは同じチェックに残った。削除は、確認なしで行が消え、フォーカスが次の行のチェックへ移り、取り消しの欄に「元に戻す」が出て、押すと元の順番の位置（2 番目）に戻って強調され、約 1.4 秒後に強調が消えた。Ctrl+Z でも戻った。猶予（1 秒の指定）を過ぎると、「元に戻す」が消えて「確定しました」が出た。猶予後の確定が失敗する行は、元の順番の位置に戻ってメッセージが出た。取り消しまわりの 6 つの場面を、修正前（コミット f7f5900 の版）と修正後で同じ手順の自動操作で比べた。(1) 猶予 5 秒・通信 800 ms で、2 を削除した後に 1 を完了し、3 の完了が失敗しても、修正前は「元に戻す」が完了の通知で消えたが（hasUndo が false）、修正後は取り消しの欄に残った。(2) 4 件を全削除して「読み込み直す」を押し、Ctrl+Z を押すと、修正前は 4,1,2,3,4（重複）になったが、修正後は 1,2,3,4 のまま。猶予（3 秒）後も重複しなかった。(3) 1 と 2 を削除し、1 の確定が失敗して復元された後に Ctrl+Z で 2 を戻すと、修正前は 2,1,3,4 だったが、修正後は 1,2,3,4。(4) 猶予（500 ms）が切れて確定の通信中（1500 ms）に、修正前は「元に戻す」が残って押しても行は戻らなかったが、修正後は「確定しています」に替わってボタンが無い。(5) 1 の確定が失敗した時点で 2 が猶予中のとき、修正前は失敗の通知が「元に戻す」を消したが、修正後は取り消しの欄に 2 の「元に戻す」が残り、失敗の通知は通常のメッセージ欄に出た。(6) 行 1 を戻した直後に行 2 を戻すと、修正前は 1 の強調のタイマーが 2 の強調を約 1.25 秒で消したが（1.4 秒の時点で強調が 0 件）、修正後は 2 の強調が 1.4 秒の時点で残り、1.9 秒で消えた。さらに 2 巡目の指摘を、修正前（41aa5bb の版）と修正後で同じ自動操作で比べた。(a) 行 1 を戻した後 600 ms で行 3 を完了にして一覧を描き直すと、修正前は 1 の強調が即座に消えたが、修正後は 700 ms・1100 ms の時点で残り（負のアニメーション遅延 -551 ms で途中から続く）、1500 ms で消えた。(b) 削除 1・削除 2 の後、2 の「元に戻す」にフォーカスを置き、先の 1 の確定が始まると、修正前はフォーカスが body に落ちたが、修正後は同じボタンに残った。2 の猶予も終わってボタンが消えると、フォーカスは取り消しの欄に移った（修正前は body）。(c) `#latency=450&delay=1000` では骨組みが一度も出ず、既定（遅延 200 ms）では出た（修正前は `delay` が効かず、どちらも出た）。(d) 完了の通信が、その行の削除の後に失敗しても、修正後は通知が出ない（修正前は削除済みの行の失敗通知が出た）。読み込み直しで前の世代の通信の失敗が遅れて届く場面は、通信時間が読み込みと同じ値で、擬似では作れず、未再現である。動きを減らす設定では、強調の `animation-name` が `none` で、背景が静的に付いた。幅 3 種（1440・390・320 px）× ライト・ダーク × 動きを減らす設定の有無の 12 通りすべてで描画し、横はみ出し（`scrollWidth` が `innerWidth` を超えること）は無かった。実機・スクリーンリーダー・他のブラウザーは未検証
- 推測の明示: 200 ms・400 ms・6 秒・1.2 秒・56 px は本 skill の目安である。楽観的更新と骨組みの効果を測った研究は取得していない（S110 は反証の一例）。Ctrl+Z の処理は試作で、本番ではテキスト入力だけを除く。スクリーンリーダーでの読み上げは実機で確かめていない。Undo は猶予中の最新の 1 件のみ

## この例の出典

S01、S06、S49、S50、S51、S55、S56、S64、S71、S72、S98、S100、S106、S107、S108、S109、S110、S111、S112、S114、S115、S116。台帳は `../references/sources.md`。

# 例: AI 下書きの応答画面（待ち・停止・採用・取り消し・自動スクロールしない）

メールの返信を AI が下書きする機能の画面を設計する例。題材は架空のメールアプリで、実在の製品の画面・文言の模倣は含まない。AI の応答の画面（生成中・ストリーミング・停止・編集・採用・取り消し）を頼まれたとき、待たせず、直しやすく、勝手に実行しない作りを決めたいときに開く。AI 機能を評価する調査の設計は、導入されていれば designer-ux-research の担当である。

## 依頼

- 製品: メールアプリ「ふくろう便」の返信の下書き機能「かきだし」（架空。運営は架空の会社「ふくろう舎」）
- 依頼文: 「メールの下書きを AI が書く機能を付けたい。待たせず、直しやすく、勝手に送らないようにしたい」
- 現状（案）: 「何でも聞いてください」の入力欄が 1 つ。生成が終わると全文が一度に出て、画面が下へ自動で動く。生成中は止められず、採用すると書きかけの返信が上書きされる
- 想定するユーザー: 1 日に何通も返信する社員。急いでいて、下書きを読んで直してから送る。画面の幅が狭いスマートフォンでも使う。動きを減らす設定の人もいる

### 根拠の範囲（先に読む）

- 出典のある事実は、生成には時間がかかるので読み込み体験を設計するか背景で生成する（S69）、具体的なフィードバックが待ちを目的のあるものにする（S70）、破壊的・取り消しにくい操作を自動化しない（S71）、取り消しの結果を見せる（S72）、ストリーミング中の自動スクロールが読み始めた位置を見失わせる（S120。NN/g の実在のチャットボットの観察）、提案プロンプトが入力の負担を減らす（S121）、漠然とした導入文が過剰な期待を生む（S122）、能力と精度を示す（S123・S124）、誤ったときに編集・修正・復旧しやすくする（S125）、操作の影響を伝える（S126）、ステータスメッセージをフォーカス移動なしで伝える（S100）である
- ストリーミングの文字の速さ・停止ボタンを出す時間・再生成の上限・待ちの文言を切り替える時間の出典は、取得していない。この例の値（2 文字・50 ms・700 ms など）は、本 skill の目安（出典なし）である
- Google の自社研究は、生成の速さを無視すれば生成 UI が好まれたと述べる（S127。自称）。速さを評価から外しているため、画面設計の根拠にしない。MeasuringU の調査は 153 人の小標本で（S128）、個別の操作の設計の根拠にならない
- 応答は擬似（スクリプトが決まった文を、決まった速さで出す）。実在の生成 AI・通信は使わない。この例に、新しい CSS 機能は使わない（非対応の姿の分岐は不要）

## 目的の一文

AI の下書きを、待っている間も状態が分かり、いつでも止められ、直してから使え、使った後も取り消せる形で見せる。送信は、人が押すまでしない。

## 削るもの

| 削るもの | 理由 |
|---|---|
| 「何でも聞いてください」の導入文 | 漠然とした導入文は、できないことへの期待を作る（S122）。できることを具体的に言う（S123） |
| 白紙の入力欄だけ | 入力の負担が大きい。提案をボタンで出す（S121） |
| 「処理中…」だけの待ち | 具体的な処理名が、待ちを目的のあるものにする（S70） |
| 生成が終わるまで止められない作り | いつでも止められる。止めても、ここまでの下書きを残す（S125 の考え方） |
| 全文が出たら画面を下へ自動で動かすこと | 読み始めた位置を見失わせる（S120）。画面の位置は動かさない |
| 生成中の全文を支援技術に読み上げさせ続けること | 状態（生成中・停止・完了）だけを通知する（S100。全文を読ませない選択は本 skill の整理） |
| 採用で返信欄を黙って上書きすること | 取り消しにくい操作を、取り消せるようにする（S71・S72） |
| 生成の完了後の自動送信 | 取り消しにくい操作を自動化しない（S71） |

## 構成

| 要素 | 内容 |
|---|---|
| 受信したメール | 返信の対象の文 |
| 下書きの領域 | できることの説明（能力）・正確とは限らない旨（精度）・提案のボタン・状態の表示と停止・下書き（編集できる）・採用などのボタン |
| 返信 | 人が書く欄。採用で下書きが入る。採用の取り消しと、送信（自動ではない） |
| メッセージ欄 | 状態を、フォーカスを移さず伝える（`role="status"`） |

状態の遷移:

```text
待機 --(提案を押す)--> 整理中（「返信の要点を整理しています」700 ms）--> 書き中（「下書きを書いています」）--> 完了
整理中・書き中 --(停止・Esc)--> 停止（ここまでを残す。続きを書く / 書き直す / 使う）
書き中 --(失敗)--> 失敗（ここまでを残す。続きを書く / 書き直す）
完了・停止 --(この下書きを使う)--> 返信に入る（採用を取り消す / 送信は人が押す）
```

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| 能力の説明 | 「返信の下書きを作ります。送信は、あなたが押すまでされません。」 | S123・S71 |
| 精度の説明 | 「内容が正しいとは限りません。送る前に読んで直してください。」 | S124 |
| 提案 | ボタン 3 つ（丁寧に承諾する・火曜を提案する・日程の再調整を頼む）。入力欄は置かない。生成中は隠さず無効にして、位置を保つ | S121 |
| 注意書き | 能力（できること・送信しないこと）と精度（正確とは限らないこと）を、2 つの短い段落に分ける | S123・S124・S71 |
| 状態の枠 | 停止・使う・続きは、下書き欄の上の同じ枠に出す。状態が変わっても下書き欄は動かない（枠の高さを固定する） | 本 skill の整理 |
| 待ちの表示 | 「返信の要点を整理しています」→「下書きを書いています」。具体的な処理名 | S70 |
| 整理中の長さ | 700 ms | 本 skill の目安（出典なし） |
| 停止 | 生成を始めた同じ描画で、「停止」ボタンを出す。Esc でも止まる。止めたら、ここまでの下書きを残し、フォーカスを次の操作（下書きが空なら提案）へ移す | 出す時間の出典は無い（本 skill の整理）。残すのは S125 の考え方 |
| ストリーミング | 2 文字ずつ 50 ms 間隔（目安）。動きを減らす設定では、ストリーミングせず、書き終えてから全文を出す | 本 skill の目安・整理（出典なし） |
| 画面の位置 | 生成中も完了時も、スクロールを動かさない。下書き欄は固定の高さ（8 行）で、あふれたら欄の中でスクロールする | S120 |
| 通知 | 状態は下書きの枠の近くの欄、採用・取り消し・送信は返信の近くの欄（どちらも `role="status"`）に、状態だけ出す。下書きの全文を通知しない。生成中の欄は `aria-busy` | S100・本 skill の整理 |
| 編集 | 停止後と完了後は、下書きを直せる。生成中は読み取り専用 | S125 |
| 続きを書く・書き直す | 続きは、直した分を残したまま、停止した位置の続きを足す。書き直しは最初から。書き直しで消える下書きは、「前の下書きに戻す」で戻せる。次の一手は 1 つだけ強調する（完了なら「使う」、停止・失敗なら「続きを書く」） | S125・S72。強調の選び方は本 skill の整理 |
| 採用 | 下書きを返信欄へ入れる。返信欄に文があれば置き換える。続けて採用しても、元の本文は上書きしない。「採用を取り消す」で元の本文に戻し、結果を言葉で伝える。返信を直した後は、直した分を失わないよう、取り消しを外す | S71・S72 |
| 送信 | 人が押すまでしない。返信が空なら押せない | S71 |
| 失敗 | 失敗してもここまでの下書きを残し、「続きを書く」（強調）と「書き直す」を出す | S125 |
| 縮小版 | 生成中の点の脈動をやめ、静的な「…」にする | 必要性は S79（アプリ側も設定を尊重する）。置き換えは本 skill の整理 |
| 自動の動き | 生成は 5 秒を超えることがある。自動で始まる動き・更新に、止める手段（停止ボタン）がある | S94 の考え方（本 skill の当てはめ。WCAG 2.2.2 の適合判断はしない） |
| 速さの扱い | 速さの数値は評価の根拠にしない | S127（速さを評価から外す自称）・S128（小標本） |

コントラスト比（WCAG の相対輝度式で計算。基準の 4.5:1・3:1 の原文は本 skill の台帳に無く、未照合）:

| 組み合わせ（前景 / 背景） | ライト | ダーク |
|---|---|---|
| 本文 / 背景 | 16.56 | 16.02 |
| 補助文字 / 背景 | 8.68 | 9.50 |
| ボタンの文字 / アクセント | 5.99 | 9.37 |
| エラーの文字 / 背景 | 6.54 | 7.86 |
| アクセント（強調の輪）/ 背景 | 5.99 | 8.59 |
| 枠線（非文字）/ 背景 | 4.83 | 5.95 |
| 本文 / 強調した返信欄の背景 | 12.43 | 11.21 |

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| 導入 | 何でも聞いてください | 返信の下書きを作ります。送信は、あなたが押すまでされません。 | できることを具体的に言う（S122・S123） |
| 精度 | （無し） | 内容が正しいとは限りません。送る前に読んで直してください。 | 精度を示す（S124） |
| 待ち | 処理中… | 返信の要点を整理しています → 下書きを書いています | 具体的な処理名（S70） |
| 停止 | （無し） | 停止 | 止められることを示す |
| 停止後 | （無し） | 停止しました。ここまでの下書きは残してあります。 | 現状を言う |
| 完了 | （全文が出るだけ） | 下書きができました。直して使えます。 | 状態を伝える（S100） |
| 失敗 | エラーが発生しました | 下書きを最後まで作れませんでした。ここまでの下書きは残してあります。 | 何が起きたかと現状を言う（S125） |
| 採用 | （黙って上書き） | 下書きを返信に入れました。送信はしていません。 | 結果を伝え、送信していないことを言う（S71・S72） |
| 採用の取り消し | （無し） | 採用を取り消しました。返信を元の本文に戻しました。 | 結果を見せる（S72） |
| 送信 | （自動） | 送信（人が押す） | 自動化しない（S71） |

## コード断片

状態を持つ最小の例。応答は擬似で、URL のハッシュで速さと失敗を指定できる（例: `#tick=20&think=300&fail=1`）。外部のライブラリ・フォント・計測は使わない。`scrollTo` や `scrollIntoView` を呼ばない。

```html
<main class="page">
  <h1>返信を書く</h1>
  <section class="mail" aria-label="受信したメール">
    <p class="meta">営業部 山本 ・ 来週の打ち合わせの日程について</p>
    <p>来週の打ち合わせですが、火曜と木曜のどちらが都合がよいでしょうか。</p>
  </section>

  <section class="ai" aria-labelledby="ai-title">
    <h2 id="ai-title">下書きを作る</h2>
    <p class="note">返信の下書きを作ります。送信は、あなたが押すまでされません。</p>
    <p class="note">内容が正しいとは限りません。送る前に読んで直してください。</p>
    <div id="suggest" class="row">
      <button type="button" class="btn" data-kind="polite">丁寧に承諾する</button>
      <button type="button" class="btn" data-kind="tue">火曜を提案する</button>
      <button type="button" class="btn" data-kind="decline">日程の再調整を頼む</button>
    </div>
    <div class="slot">
    <p id="hint" class="hint">提案を選ぶと、ここに状態と操作が出ます。</p>
    <div id="run" class="row run" hidden>
      <span id="phase"></span><span class="dots" aria-hidden="true">…</span>
      <button type="button" id="stop" class="btn">停止</button>
    </div>
    <div id="after" class="row" hidden>
      <button type="button" id="adopt" class="btn btn-main">この下書きを使う</button>
      <button type="button" id="resume" class="btn" hidden>続きを書く</button>
      <button type="button" id="again" class="btn">書き直す</button>
      <button type="button" id="restore" class="btn" hidden>前の下書きに戻す</button>
    </div>
    </div>
    <div id="status" class="status" role="status"></div>
    <label for="draft" class="lbl">下書き</label>
    <textarea id="draft" rows="8" readonly></textarea>
  </section>

  <section aria-labelledby="reply-title">
    <h2 id="reply-title">返信</h2>
    <textarea id="reply" rows="6" aria-label="返信の本文"></textarea>
    <div class="row">
      <button type="button" id="undo-adopt" class="btn" hidden>採用を取り消す</button>
      <button type="button" id="send" class="btn btn-main" disabled>送信</button>
    </div>
    <div id="reply-status" class="status" role="status"></div>
  </section>
</main>
```

```css
:root {
  color-scheme: light dark;
  --bg: #ffffff; --surface: #f3f4f6; --text: #1b1f24; --text-2: #454c55; --accent: #0b5cd5; --on-accent: #ffffff;
  --line: #6b7280; --error: #b3261e; --flash: #cfe0ff;
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #15171b; --surface: #1e2127; --text: #f1f2f4; --text-2: #b7bdc7; --accent: #8ab4ff; --on-accent: #0b0c0e;
          --line: #8d95a3; --error: #ff8a80; --flash: #1f3358; }
}
body { margin: 0; background: var(--bg); color: var(--text); line-height: 1.7;
  font-family: system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Noto Sans CJK JP", sans-serif; }
.page { max-width: 640px; margin: 0 auto; padding: 24px 16px 64px; }
h1 { font-size: 24px; line-height: 32px; margin: 0 0 16px; }
h2 { font-size: 18px; line-height: 26px; margin: 24px 0 8px; }
:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }
[hidden] { display: none !important; }
.mail { padding: 12px 16px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); }
.mail p { margin: 0; }
.meta { color: var(--text-2); font-size: 14px; }
.note { color: var(--text-2); }
.row { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin: 8px 0; }
.btn { min-height: 44px; padding: 0 14px; border: 1px solid var(--line); border-radius: 8px; background: var(--bg); color: var(--text); font: inherit; cursor: pointer; }
.btn-main { border-color: var(--accent); background: var(--accent); color: var(--on-accent); font-weight: 600; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }
.lbl { display: block; margin-top: 12px; font-size: 14px; color: var(--text-2); }
textarea { display: block; box-sizing: border-box; width: 100%; padding: 10px 12px; border: 1px solid var(--line); border-radius: 8px;
  background: var(--bg); color: var(--text); font: inherit; line-height: 1.7; resize: vertical; }
#draft[readonly] { background: var(--surface); }
.run, .hint { color: var(--text-2); }
.hint { margin: 8px 0; }
.slot { min-height: 112px; }                                      /* 状態が変わっても、下書き欄が動かない（狭い画面は 2 行分）*/
@media (min-width: 560px) { .slot { min-height: 60px; } }
.status { min-height: 3.4em; margin: 4px 0 0; }                   /* 2 行分を確保し、文言の長さで下の欄が動かない */
.note { margin: 0 0 4px; }
.error { color: var(--error); }
.flash { background: var(--flash); }

/* 生成中の点の脈動（1.2 秒周期・点滅ではなく緩やかな変化）。動きを減らす設定では止める */
@keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
.dots { animation: pulse 1.2s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) { .dots { animation: none; } }
```

```js
const params = new URLSearchParams(location.hash.slice(1));
const clamp = (v, min, max, d) => {                                           // 未指定（null・空）は、必ず既定値 d にする
  if (v === null || v.trim() === '') return d;
  const n = Number(v); return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : d;
};
const TICK = clamp(params.get('tick'), 5, 500, 50), STEP = 2, THINK = clamp(params.get('think'), 0, 3000, 700);   // 本 skill の目安
const FAIL = params.get('fail') === '1';                                      // 擬似の失敗（途中で 1 回）
const DRAFTS = {
  polite: '山本様\n\nお世話になっております。来週の打ち合わせの件、ご連絡ありがとうございます。火曜、木曜のどちらでも参加できます。ご都合のよい日をお知らせください。\n\nどうぞよろしくお願いいたします。',
  tue: '山本様\n\nお世話になっております。来週の打ち合わせは、火曜日の午後はいかがでしょうか。もし難しければ、木曜日の午前でも調整できます。ご確認をお願いいたします。\n\nどうぞよろしくお願いいたします。',
  decline: '山本様\n\nお世話になっております。申し訳ありませんが、来週は火曜も木曜も予定が埋まっております。再来週の日程で、改めて候補をいただけないでしょうか。\n\nどうぞよろしくお願いいたします。',
};
const $ = (id) => document.getElementById(id);
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
// pos: 擬似の応答のうち、ここまで出した文字数。base: この回の前から欄にあった文（直した分を含む）。startPos: この回を始めた位置
let kind = null, pos = 0, base = '', startPos = 0, timer = 0, state = 'idle', failedOnce = false, savedDraft = null, prevReply = null;

function say(id, text, isError) { const s = $(id); s.textContent = text; s.className = 'status' + (isError ? ' error' : ''); }   // 状態だけを通知（S100）
const sayAi = (t, e) => say('status', t, e), sayReply = (t, e) => say('reply-status', t, e);
function setState(next) {
  state = next;
  const busy = next === 'thinking' || next === 'writing';
  $('run').hidden = !busy; $('after').hidden = busy || next === 'idle'; $('hint').hidden = next !== 'idle';
  $('suggest').querySelectorAll('button').forEach((b) => { b.disabled = busy; });          // 隠さず無効にして、位置を保つ
  $('draft').readOnly = busy; $('draft').setAttribute('aria-busy', String(busy));
  $('resume').hidden = !(next === 'stopped' || next === 'error');
  $('restore').hidden = savedDraft === null || busy;
  $('adopt').disabled = $('draft').value.trim() === '';
  $('adopt').classList.toggle('btn-main', next === 'done');                               // 次の一手を 1 つだけ強調する
  $('resume').classList.toggle('btn-main', next === 'stopped' || next === 'error');
}
function start(k, resume) {
  clearInterval(timer); clearTimeout(timer);
  if (!resume) { if ($('draft').value.trim()) savedDraft = $('draft').value; pos = 0; base = ''; $('draft').value = ''; }
  else base = $('draft').value;                                                           // 直した分を残し、その後ろへ続きを足す
  startPos = pos; kind = k; setState('thinking'); $('stop').focus({ preventScroll: true });   // 停止を同じ描画で出し、キーボードの利用者も止められる
  $('phase').textContent = '返信の要点を整理しています'; sayAi('下書きを作っています');
  timer = setTimeout(write, resume ? 0 : THINK);
}
function write() {
  setState('writing'); $('phase').textContent = '下書きを書いています';
  const text = DRAFTS[kind];
  if (reduce.matches) { pos = text.length; $('draft').value = base + text.slice(startPos); return finish(); }   // 動きを減らす設定では、書き終えてから全文を出す
  timer = setInterval(() => {
    pos = Math.min(text.length, pos + STEP); $('draft').value = base + text.slice(startPos, pos);
    if (FAIL && !failedOnce && pos >= text.length / 2) { failedOnce = true; clearInterval(timer); setState('error'); sayAi('下書きを最後まで作れませんでした。ここまでの下書きは残してあります。', true); $('resume').focus({ preventScroll: true }); }
    else if (pos >= text.length) { clearInterval(timer); finish(); }
  }, TICK);
}
function finish() { setState('done'); sayAi('下書きができました。直して使えます。'); $('adopt').focus({ preventScroll: true }); }
function stop() {
  if (state !== 'thinking' && state !== 'writing') return;
  clearInterval(timer); clearTimeout(timer); setState('stopped');
  sayAi('停止しました。ここまでの下書きは残してあります。');
  (!$('adopt').disabled ? $('resume') : $('suggest').querySelector('button')).focus({ preventScroll: true });   // 下書きが空なら、提案へ戻す
}
document.querySelectorAll('#suggest [data-kind]').forEach((b) => b.addEventListener('click', () => start(b.dataset.kind, false)));
$('stop').addEventListener('click', stop);
addEventListener('keydown', (e) => { if (e.key === 'Escape') stop(); });
$('resume').addEventListener('click', () => start(kind, true));
$('again').addEventListener('click', () => start(kind, false));
$('restore').addEventListener('click', () => { $('draft').value = savedDraft; savedDraft = null; setState('done'); sayAi('前の下書きに戻しました'); });
$('draft').addEventListener('input', () => { $('adopt').disabled = $('draft').value.trim() === ''; });

function flash() { $('reply').classList.add('flash'); setTimeout(() => $('reply').classList.remove('flash'), 1200); }
$('adopt').addEventListener('click', () => {                                 // 置き換えは取り消せる（S71・S72）
  if ($('undo-adopt').hidden) prevReply = $('reply').value;                  // 採用済みなら、元の返信を上書きしない
  $('reply').value = $('draft').value;
  $('undo-adopt').hidden = false; $('send').disabled = $('reply').value.trim() === '';
  flash(); sayReply('下書きを返信に入れました。送信はしていません。');
});
$('undo-adopt').addEventListener('click', () => {
  $('reply').value = prevReply; $('undo-adopt').hidden = true; $('send').disabled = $('reply').value.trim() === '';
  flash(); sayReply('採用を取り消しました。返信を元の本文に戻しました。'); $('reply').focus({ preventScroll: true });
});
$('reply').addEventListener('input', () => {
  $('send').disabled = $('reply').value.trim() === '';
  $('undo-adopt').hidden = true;                                             // 返信を直したら、採用の取り消しは外す（直した分を失わないため）
});
$('send').addEventListener('click', () => sayReply('送信しました（この例では実際には送りません）'));   // 送信は人が押す（S71）
```

試作のため、スクリプトはインラインで書いてよい。本番では外部ファイルにするか、CSP の nonce を付ける。

## 初見検証

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 下書きは AI が作り、正確とは限らない。送信は自分が押すまでされない | 下書きの領域の説明 |
| 何を操作できるか | 提案から下書きを作る・止める・直す・使う・取り消す・送る | 提案のボタン、停止、下書き、「この下書きを使う」、返信と送信 |
| どう操作するか | 提案を押す。止めたいときは「停止」か Esc。使うときは「この下書きを使う」 | 44 px 以上のボタン |

動きの検証は、動きを減らす設定をオンにしても同じ 3 問に答えられることを確かめる。縮小版でも、待ちの文言・停止・完了の文言で状態が分かる（S64）。

## 点検

- 目的: 待ち・停止・編集・採用・取り消しのそれぞれで、人が主導権を持つか。送信を自動化していないか（S71）
- 待ち: 具体的な処理名が出る（S70）。停止が生成の開始と同じ描画で出る。Esc でも止まる
- 位置: 生成中も完了時も、ページのスクロール位置が動かない（S120）。下書き欄は固定の高さで、あふれても欄の中だけ動く
- 通知: メッセージ欄が状態だけを出し、下書きの全文を出さない。フォーカスを奪うのは、停止と、完了後の次の操作（使う）だけで、全文を読み上げさせない（S100）
- 編集と復旧: 停止後・完了後に下書きを直せる。書き直しで消える下書きを戻せる。失敗してもここまでの下書きが残る（S125）
- 採用と取り消し: 返信欄の文を置き換えるとき、取り消せる。取り消した結果が言葉と強調で分かる（S72）。送信は人が押す（S71）
- 縮小版: 動きを減らす設定で、点の脈動が止まり、全文は書き終えてから出る。設定は CSS とスクリプトの判定で、途中で変えても CSS の部分は追従する
- 横はみ出し: 1440・390・320 px で横スクロールが出ない。下書きと返信の欄が幅に収まる
- 能力と精度: できることと、正確とは限らないことが、使う前に読める（S123・S124）。提案はボタンで、導入文は具体的（S121・S122）
- 実測（Chrome 156、2026-11-15、1440・390・320 px、ライト・ダーク、動きを減らす設定で描画）: ハッシュ無しで開くと、ストリーミング間隔 50 ms・整理中 700 ms で、提案を押した直後（約 1 ms）に「返信の要点を整理しています」が出て、停止ボタンにフォーカスがあった（修正前は 5 ms・0 ms で、待ちの文言が出ずに全文が出た）。約 703 ms で「下書きを書いています」に替わり、下書きは 1 秒で 10 文字、2 秒で 50 文字、3 秒で 90 文字、約 3.1 秒で全 95 文字になり、フォーカスが「この下書きを使う」へ移った（スクロール位置は 0 のまま）。状態を変えても、下書き欄の上端は、1440・390・320 px とも動かなかった（修正前は 390 px で 52 px 動いた）。「この下書きを使う」は、320 px（画面の高さ 640 px）でも画面の内側（上端 562 px）にある。整理中に Esc で停止すると、フォーカスが最初の提案へ移った（修正前は失われた）。停止（ボタンと Esc）でここまでの下書き（24 文字・14 文字）が残った。停止して下書きに一文を足し、「続きを書く」を押すと、足した文が残ったまま最後まで書き終えた（修正前は消えた）。失敗（擬似）では途中の 50 文字が残り、「続きを書く」にフォーカスが移って、「続きを書く」で完了した。採用は、元の返信を置き換え、続けて 2 回採用しても、「採用を取り消す」で元の返信（「元の返信」）に戻り、フォーカスは返信欄へ移った（修正前は下書きに戻った）。採用後に返信を直すと、取り消しが外れた。書き直しで消えた編集済みの下書きは、「前の下書きに戻す」で戻った。送信は自動で起きなかった。390 px と 320 px で、スクロールを 90 px にして生成しても、生成中・完了時とも 90 px のままだった。動きを減らす設定では、点の `animation-name` が `none` で、全文が書き終えた後に一度に出た。通常は `pulse`・1.2 s。幅 3 種（1440・390・320 px）× ライト・ダーク × 動きを減らす設定の有無の 12 通りすべてで描画し、横はみ出し（`scrollWidth` が `innerWidth` を超えること）は無かった。狭い画面では、下書き欄が画面の下側（390 px で上端 665 px、320 px で 768 px）にあり、生成中の文字は自分でスクロールして読む（画面は動かさない）。実機・スクリーンリーダー・実際の生成 AI は未検証
- 推測の明示: 2 文字・50 ms・700 ms・1.2 秒・8 行は本 skill の目安である。ストリーミングの速さ・停止を出す時間・再生成の上限の出典は取得していない。画面の位置を動かさない設計と、全文を読み上げさせない選択は、NN/g の観察（S120）と本 skill の整理であり、スクリーンリーダーでの実際の読み上げは実機で確かめていない。生成 AI の実際の応答の遅さ・誤りは、擬似では再現していない

## この例の出典

S64、S69、S70、S71、S72、S79、S94、S100、S120、S121、S122、S123、S124、S125、S126、S127、S128。台帳は `../references/sources.md`。

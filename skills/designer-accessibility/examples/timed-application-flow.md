# 例: 時間制限のある手続き（資格検定の出願）

架空の検定協会のオンライン出願で、手続きの時間制限に、事前の警告・延長・入力の保持を付け、結果の通知に後で要る情報を載せない例。題材は架空で、実在の製品・企業の画面の模倣は含まない。「入力の途中で時間が切れて、入力が消えたと苦情が来る」「切れる前に知らせたい」と相談されたとき、時間制限の設計と、警告ダイアログの焦点、消える通知の使い方を決めるときに開く。動きと時間の設計は designer-interaction（導入されていれば）、文言の書き方は designer-ux-writing（同）。監査の手順は `audit-report-transit-status.md`。

## 依頼

- 製品: 架空の「たちばな検定協会」の「園芸検定」の出願（架空）。氏名・メールアドレス・領収書の宛名を入れて出願すると、受付番号が出る 1 画面の手続き
- 依頼文（架空）: 「入力の途中で 20 分たつと、何も言わずに最初の画面へ戻って、入力が消える。受験者は高齢の人も多く、苦情が多い。切れる前に知らせて、延ばせるようにしたい」
- 現状（前の版。架空）: 20 分で黙ってセッションが切れ、入力が消える。出願が済むと、画面の下に 3 秒で消えるトーストが出て、受付番号がそこにだけ載る。領収書の宛名は、氏名と同じでも、もう一度入れる
- 想定ユーザー: 時間のかかる人（入力が遅い・読むのに時間がかかる・支援技術を使う）、キーボードだけの人、画面を拡大して見る人
- 範囲外: 検定の本番の制限時間（必須の例外に当たりうるかは WCAG 本文で確かめる）、サーバー側の保持の設計、実際の読み上げ、決済

### 根拠の範囲（先に読む）

- 出典のある事実: 時間制限は、解除・調整（既定の 10 倍以上）・延長（期限前に警告し、20 秒以上の間に簡単な操作で延長でき、少なくとも 10 回延長できる）のいずれか。必須の時間制限などの例外がある（S046）。自動サインアウトは 20 秒前に予告（S156）。同じ手続きで再入力させない（S028）。認知機能の検査を認証で求めない（S029）。状態メッセージは焦点を受けない形（S031・S051）。通知は他の場所でも見つけられる事柄だけ（S069）。トーストは利用者と試してから（S070）。操作を含めず、焦点を受けさせない（S159）。最短 5 秒はライブラリの目安（S233）。ダイアログ: S050・S058・S059・S158・S164
- 本 skill の目安（出典なし）: 20 分、警告は 2 分前、延長は 20 分単位、6 秒の消える通知、色・寸法
- 外れる点: Esc を「延長」に割り当てた。APG は Esc でダイアログを閉じる（S058）とだけ書く。何を閉じる動作の結果にするかは設計で、閉じることが「続ける」を意味するのは本 skill の整理（時間が切れるのを望む人はいない、という前提）
- 実測は、20 分を 6 秒、警告を期限の 4 秒前（本番は 2 分前）に縮めた同じコードで行った。本番の値（1200 秒・120 秒）での挙動は未実測

## 目的の一文

手続きの時間が切れる前に知らせ、何回でも延ばせ、切れても入力が残り、受付番号を消える通知に載せない出願画面にする。

## 削るもの

| 削るもの | 理由 | 代わりに |
|---|---|---|
| 黙って切れるセッション | 時間制限は、解除・調整・延長のどれかにする（S046） | 事前の説明と、2 分前の警告 |
| 切れたら最初の画面へ戻して入力を消す | 入力を消さない（本 skill の整理。S028 は、同じ手続きで入力済みの情報を再入力させないことを求める） | 入力を残し、「再開する」で続ける |
| 延長は 1 回だけ | 延長は少なくとも 10 回できる必要がある（S046） | 回数の上限なし |
| トーストにだけ載せる受付番号 | 通知は、他の場所でも見つけられる事柄だけ（S069）。見逃すと取り返せない | 受付番号は、画面に残る文章に載せ、見出しへ焦点を移す |
| 毎秒更新する残り時間の表示を通知の領域に入れる | 読み上げが頻繁になりうる（本 skill の整理・推測。出典なし） | 警告のダイアログを 1 回だけ出す |
| 領収書の宛名の再入力 | 同じ手続きで、入力済みの情報を選べるようにする（S028） | 「氏名と同じにする」 |

## 構成

| 領域 | 内容 |
|---|---|
| 説明 | 先頭に、20 分で切れること・2 分前に知らせること・延長できること・入力が残ることを書く |
| フォーム | 氏名・メールアドレス・領収書の宛名・出願ボタン |
| 保存の表示 | 「最終の保存」の時刻（画面に残る） |
| 通知の領域 | `role="status"`（最初から DOM にある）。延長・保存の短い文だけ |
| 警告のダイアログ | 切れる 2 分前に出る。「20 分延ばす」「中断する」 |
| 時間切れのパネル | 入力が残ることと「再開する」ボタン |
| 完了 | 見出し「出願を受け付けました」と受付番号。画面に残る |

## 仕様

### 時間

| 項目 | 値 | 根拠 |
|---|---|---|
| 時間制限 | 20 分（操作のたびに延ばす設計ではなく、延長の操作で 20 分延ばす） | 本 skill の目安 |
| 事前の説明 | 画面の先頭に常に書く | 時間制限を、始める前に知らせる（S046 の「期限前に」の考え方。整理） |
| 警告 | 切れる 2 分前。警告は、切れるまでの 2 分間、開いたまま残る。20 秒より十分に長い | 20 秒以上（S046・S156） |
| 延長 | 「20 分延ばす」を 1 回の操作で。回数の制限なし | 少なくとも 10 回（S046） |
| 応じないとき | 2 分後に切れる。入力は残り、「再開する」で続けられる | S028 の考え方（整理） |

### 状態（本 skill の整理）

手続きの状態を、実行中・中断中・完了の 3 つで持つ。

| 状態 | 入るとき | その状態でできること | 伝え方 |
|---|---|---|---|
| 実行中 | 開いたとき。「再開する」を押したとき | タイマーが動く。警告が出る。送信できる | - |
| 中断中 | 時間が切れたとき。「中断する」を押したとき | 送信できない。入力は残る。「再開する」だけが進む手段 | 「時間が切れました」のパネルを出し、焦点を「再開する」へ移す。送信しようとしたら、送信しなかったことを `status` の文で言い、焦点を「再開する」へ移す |
| 完了 | 実行中に送信したとき | タイマーは止まったまま。警告も時間切れのパネルも出ない | 時間切れのパネルを隠し、受付番号の見出しへ焦点を移す |

- 中断中に Enter で送信しても、送信しない（実測）。完了後は警告が出ず、「再開する」の経路も無い（実測）
- 状態の持ち方は本 skill の整理（出典なし）。時間制限の要件は S046

### 警告のダイアログ（本 skill の整理を含む）

| 項目 | 仕様 | 根拠 |
|---|---|---|
| 要素 | `dialog` 要素を `showModal()` で開く | `dialog` はおおむね良い選択肢（S077）。他の部品の代わりに使わない（S072） |
| 名前 | 見出し「あと 2 分で手続きの時間が切れます」 | ダイアログには名前が必須（S050） |
| 初期焦点 | 「20 分延ばす」（取り消せない操作ではなく、安全な既定） | 最も破壊的でない操作に初期焦点（S059。ここに破壊的な操作は無い） |
| Tab | ネイティブの `dialog` の既定に任せる。実測では、最後の要素から次へ進むと、一度ブラウザー側へ出てから先頭へ戻る。APG は、最後の要素から最初へ戻る（S058） | S058。実測（本 skill） |
| Esc | 閉じる。閉じることを「続ける（延長）」として扱う | 閉じる（S058）。延長に結ぶのは整理 |
| 閉じたとき | 呼び出す前に焦点があった要素へ戻る。無いとき、または焦点が本文（`body`）にあったときは見出しへ | S059。呼び出し元が無いのは、タイマーが開くため（整理） |
| 時間切れで閉じたとき | 「再開する」ボタンへ焦点を移す。送信は止める（中断中） | 呼び出し元が無い場合の整理 |

### 通知

| 内容 | 置き場 | 消えるか | 根拠 |
|---|---|---|---|
| 「時間を延ばしました。次の期限は 12:41 です。」（時刻は延長のたびに変わる） | `status` の領域 | 次の更新まで残る。短い文だけ。同じ文を入れ直しても、ツリーの内容は変わらないので、時刻を含める | S031・S051 |
| 「出願を保存しました。」 | `status` の領域 | 6 秒で消す。受付番号・保存の時刻は、画面に残る | S069・S070。6 秒は本 skill の目安（最短 5 秒はライブラリの目安。S233） |
| 受付番号 | 見出しの下の本文 | 消えない。見出しへ焦点を移す | S069 |
| 保存の時刻 | 「最終の保存」の 1 行 | 消えない | S069 |

- 通知の領域は、通知の文より先に DOM に置く（S238）。通知に操作を含めず、焦点を受けさせない（S159）
- 6 秒で消すのは、同じ情報が画面に残っているから。受付番号のように後で要る情報は、消える通知に載せない（S069）

### 入力

- 領収書の宛名は、「氏名と同じにする」で選べる（3.3.7。S028）
  - チェック中は、氏名の入力（`input`）に合わせて宛名を更新する。氏名より先にチェックしても、あとで入れた氏名が宛名に入る。氏名を直せば宛名も直る
  - チェック中の宛名欄は、読み取り専用にする（`readonly`）。理由: 無効（`disabled`）にすると、焦点の順路から外れ、値も送られない。読み取り専用なら、順路に残り、値が読まれ、送られる。書き換えたいときは、チェックを外す（本 skill の整理）
  - チェックを外したら、値は消さず、編集できるようにする。入れ直させないため（3.3.7 の考え方。S028）。外したあとは、氏名を直しても宛名は変わらない
- メールアドレスは貼り付けできる。認証の手順は無い（3.3.8 は該当なし。S029）
- 入力欄にはラベルを付け、ヒントは `aria-describedby` で結ぶ（3.3.2。S027）

### 見た目

| 項目 | 値 | 比 |
|---|---|---|
| 本文 | #1B2617（白地） | 15.72:1 |
| ヒント | #4A5846 | 7.57:1 |
| 入力欄の枠 | 2 px・#5B6B57 | 5.70:1（1.4.11。S016） |
| ボタン | 白文字・#356A1E | 6.50:1 |
| 焦点の輪郭 | 3 px・#14230F・オフセット 2 px | 16.44:1（白地） |
| 入力欄・ボタンの高さ | 2.75rem（44 px） | 規格の最小は 24 px（S025）。44 px は本 skill の目安 |

### ダークの配色（`prefers-color-scheme: dark`）

ダークは、同じ変数を入れ替える（地 #12170F・文字 #E9EFE4・補助の文字 #B9C6B1・線 #8C9E83・緑 #8FCB6E・緑の上の文字 #10200A・面 #1C2418・焦点の輪郭 #F4F8EF・警告 #E9B949・誤り #FF9F8A）。色は WCAG の相対輝度式（S013）で計算した。文字は 4.5:1（S011）、境界・状態・焦点の輪郭は 3:1（S016）以上を目安にする。焦点の輪郭は、オフセット 2 px で隣が地になり、緑のボタンに接する（オフセット 0）と #F4F8EF / #8FCB6E は 1.79:1 で 3:1 未満になる。強制カラーでは色を上書きされるので、印は形（下線・輪郭の太さ）にも持たせる。

| 項目 | 値 | 比 |
|---|---|---|
| 本文 | #E9EFE4 / #12170F | 15.52:1 |
| ヒント | #B9C6B1 / #12170F | 10.19:1 |
| 入力欄の枠 | #8C9E83 / #12170F | 6.35:1（1.4.11。S016） |
| ボタン | #10200A / #8FCB6E | 8.87:1 |
| 副ボタン | #8FCB6E / #12170F | 9.47:1 |
| ダイアログ | 地 #12170F・枠 #E9EFE4（2 px）。地の裏は半透明の暗幕 | 枠は 15.52:1 |
| 焦点の輪郭 | #F4F8EF（地 #12170F） | 16.90:1 |

## 文言

| 場所 | 文言 | 意図 |
|---|---|---|
| 先頭の説明 | 「この手続きは、操作がなくても 20 分で時間切れになります。切れる 2 分前にお知らせし、延長できます。入力した内容は、時間が切れても残ります。」 | 始める前に、時間・予告・延長・入力の保持を言う |
| 警告の見出し | 「あと 2 分で手続きの時間が切れます」 | 何が起きるかを見出しで |
| 警告の本文 | 「時間を延ばすと、さらに 20 分使えます。何回でも延ばせます。」 | 回数の制限が無いことを言う |
| ボタン | 「20 分延ばす」「中断する」 | 何が起きるかが分かる動詞 |
| 延長後 | 「時間を延ばしました。次の期限は 12:41 です。」 | 結果と次の期限を 1 文で。時刻で、入れ直しでも文が変わる |
| 時間切れ | 「時間が切れました」「入力した内容は残っています。続けるときは「再開する」を選んでください。」 | 入力が消えていないと先に言う |
| 完了 | 「出願を受け付けました」「受付番号: Q-24681（控えをメールでも送ります）」 | 受付番号は画面に残す |

## コード断片

出願の画面全体（外部の資源なし）。`hidden` の要素は、`display` を上書きしないよう、`[hidden]` の規則を持つ。再描画で入力欄を作り直さないので、焦点も入力も落ちない。実測は `data-limit`・`data-warn` を 6・4 にして行った（本番は 1200・120）。入力値は `.value` と `textContent` だけで扱い、HTML として差し込まない（`innerHTML` は使わない）。

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>出願の手続き | たちばな検定協会</title>
<style>
:root{
  color-scheme:light dark; --bg:#FFFFFF; --on-brand:#FFFFFF; --media:#14230F; --ink:#1B2617; --muted:#4A5846; --line:#5B6B57; --brand:#356A1E; --soft:#F4F7EE; --focus:#14230F; --err:#A3260A; }
body{ margin:0; font:1rem/1.7 system-ui,"Hiragino Sans","Noto Sans JP",sans-serif; color:var(--ink); background:var(--bg); }
:focus-visible{ outline:3px solid var(--focus); outline-offset:2px; }
.tm-main{ max-width:40rem; margin:0 auto; padding:0 1rem 3rem; }
.tm-field{ margin:0 0 1rem; }
.tm-label{ display:block; font-weight:700; }
.tm-hint{ margin:0 0 .25rem; color:var(--muted); }
.tm-input{ box-sizing:border-box; width:100%; min-height:2.75rem; padding:.25rem .5rem; font:inherit; color:var(--ink); border:2px solid var(--line); border-radius:.25rem; background:var(--bg); }
.tm-btn{ font:inherit; min-height:2.75rem; padding:.25rem 1rem; border:2px solid var(--brand); border-radius:.25rem; background:var(--brand); color:var(--on-brand); cursor:pointer; }
.tm-btn--sub{ background:var(--bg); color:var(--brand); }
.tm-box{ display:block; margin:1rem 0; padding:.75rem 1rem; border-left:.25rem solid var(--brand); background:var(--soft); }
.tm-box[hidden]{ display:none; }
.tm-dialog{ max-width:28rem; padding:1rem 1.25rem; border:2px solid var(--ink); border-radius:.5rem; color:var(--ink); background:var(--bg); }
.tm-dialog::backdrop{ background:rgb(27 38 23 / .6); }
.tm-dialog h2{ margin-top:0; font-size:1.25rem; }
.tm-actions{ display:flex; flex-wrap:wrap; gap:.5rem; }
@media (forced-colors:active){ .tm-btn{ border-color:ButtonText; } }
@media (prefers-color-scheme:dark){
  :root{ --bg:#12170F; --ink:#E9EFE4; --muted:#B9C6B1; --line:#8C9E83; --brand:#8FCB6E; --on-brand:#10200A;
    --soft:#1C2418; --focus:#F4F8EF; --warn:#E9B949; --stop:#FF9F8A; --err:#FF9F8A; --media:#0B0F09; }
}
</style>
</head>
<body data-limit="1200" data-warn="120">
<main class="tm-main">
  <h1 id="tm-h1" tabindex="-1">園芸検定 出願（1/2 受験者の情報）</h1>
  <p class="tm-box">この手続きは、操作がなくても 20 分で時間切れになります。切れる 2 分前にお知らせし、延長できます。入力した内容は、時間が切れても残ります。</p>
  <form id="tm-form">
    <div class="tm-field"><label class="tm-label" for="tm-name">氏名</label>
      <input class="tm-input" id="tm-name" name="name" autocomplete="name" required></div>
    <div class="tm-field"><label class="tm-label" for="tm-mail">メールアドレス</label>
      <p class="tm-hint" id="tm-mail-h">受付の控えを送ります。貼り付けできます。</p>
      <input class="tm-input" id="tm-mail" name="mail" type="email" autocomplete="email" aria-describedby="tm-mail-h" required></div>
    <div class="tm-field"><label class="tm-label" for="tm-recipient">領収書の宛名</label>
      <p class="tm-hint"><label><input type="checkbox" id="tm-same"> 氏名と同じにする</label></p>
      <input class="tm-input" id="tm-recipient" name="recipient"></div>
    <button class="tm-btn" type="submit">出願する</button>
  </form>
  <p id="tm-saved">最終の保存: まだありません</p>
  <div id="tm-live" role="status"></div>
  <section class="tm-box" id="tm-expired" hidden>
    <h2>時間が切れました</h2>
    <p>入力した内容は残っています。続けるときは「再開する」を選んでください。</p>
    <button class="tm-btn" type="button" id="tm-resume">再開する</button>
  </section>
  <section class="tm-box" id="tm-done" hidden>
    <h2 id="tm-done-h" tabindex="-1">出願を受け付けました</h2>
    <p>受付番号: <strong id="tm-no">Q-24681</strong>（控えをメールでも送ります）</p>
  </section>
</main>
<dialog class="tm-dialog" id="tm-dialog" aria-labelledby="tm-dialog-h">
  <form method="dialog">
    <h2 id="tm-dialog-h">あと 2 分で手続きの時間が切れます</h2>
    <p>時間を延ばすと、さらに 20 分使えます。何回でも延ばせます。</p>
    <div class="tm-actions">
      <button class="tm-btn" value="extend" autofocus>20 分延ばす</button>
      <button class="tm-btn tm-btn--sub" value="stop">中断する</button>
    </div>
  </form>
</dialog>
<script>
(function () {
  var LIMIT = Number(document.body.dataset.limit) || 1200;
  var WARN = Number(document.body.dataset.warn) || 120;
  var dlg = document.getElementById('tm-dialog');
  var live = document.getElementById('tm-live');
  var form = document.getElementById('tm-form');
  var expired = document.getElementById('tm-expired');
  var resume = document.getElementById('tm-resume');
  var warnTimer, endTimer, opener;
  var state = 'running'; // running（実行中）・paused（中断中。時間切れか中断）・done（完了）

  // 入力値は .value と textContent だけで扱う。HTML として差し込まない（innerHTML は使わない）。
  function hhmm(ms) {
    var d = new Date(Date.now() + ms), p = function (n) { return String(n).padStart(2, '0'); };
    return p(d.getHours()) + ':' + p(d.getMinutes());
  }
  function arm() {
    clearTimeout(warnTimer); clearTimeout(endTimer);
    if (state !== 'running') return;
    warnTimer = setTimeout(warn, (LIMIT - WARN) * 1000);
    endTimer = setTimeout(function () { stop('time'); }, LIMIT * 1000);
  }
  function warn() {
    if (state !== 'running') return;
    opener = document.activeElement; dlg.returnValue = ''; dlg.showModal();
  }
  function stop(why) {
    if (state !== 'running') return;
    state = 'paused';
    clearTimeout(warnTimer); clearTimeout(endTimer);
    if (dlg.open) dlg.close(why);
    expired.hidden = false;
    resume.focus();
  }
  dlg.addEventListener('close', function () {
    if (state !== 'running' || dlg.returnValue === 'time') return;
    if (dlg.returnValue === 'stop') { stop('stop'); return; }
    arm();
    live.textContent = '時間を延ばしました。次の期限は ' + hhmm(LIMIT * 1000) + ' です。';
    var back = opener && opener !== document.body && opener.isConnected ? opener : document.getElementById('tm-h1');
    back.focus();
  });
  resume.addEventListener('click', function () {
    if (state !== 'paused') return;
    state = 'running'; expired.hidden = true; live.textContent = ''; arm();
    document.getElementById('tm-name').focus();
  });
  var same = document.getElementById('tm-same');
  var nameInput = document.getElementById('tm-name');
  var recipient = document.getElementById('tm-recipient');
  function syncRecipient() { // チェック中は、宛名を氏名に合わせる。読み取り専用でも焦点の順路に残り、値は送られる
    recipient.readOnly = same.checked;
    if (same.checked) recipient.value = nameInput.value;
  }
  same.addEventListener('change', syncRecipient); // 外したら値は残し、編集できるようにする
  nameInput.addEventListener('input', syncRecipient);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (state === 'paused') { // 中断中は送信しない。止めたことを文で伝え、焦点を「再開する」へ移す
      live.textContent = '手続きは中断中のため、まだ送信していません。「再開する」を選んでから、もう一度送信してください。';
      resume.focus();
      return;
    }
    if (state !== 'running') return;
    state = 'done';
    clearTimeout(warnTimer); clearTimeout(endTimer);
    if (dlg.open) dlg.close('done');
    form.hidden = true;
    expired.hidden = true;
    document.getElementById('tm-done').hidden = false;
    document.getElementById('tm-done-h').focus();
    document.getElementById('tm-saved').textContent = '最終の保存: ' + hhmm(0);
    live.textContent = '出願を保存しました。';
    setTimeout(function () { live.textContent = ''; }, 6000);
  });
  arm();
})();
</script>
</body>
</html>
```

## 初見検証

初めて出願する人に、次を確かめる。

| 問い | 期待する答え |
|---|---|
| 何に注意するか | 20 分で時間が切れること。切れる前に知らせが出ること。入力は残ること |
| 何ができるか | 警告で 20 分延ばせる。何回でも。切れても「再開する」で続けられる |
| どうするか | 警告が出たら「20 分延ばす」を押す。出願したら、受付番号を画面で見て控える |

## 点検

### 実測したもの（Chrome 157・ヘッドレス、2026-11-16。6 秒の制限と 4 秒前の警告）

| 項目 | 結果 |
|---|---|
| 警告が出たとき | `dialog` が開き、焦点は「20 分延ばす」。ツリーに、名前「あと 2 分で手続きの時間が切れます」のダイアログ |
| Tab（ダイアログの中。ネイティブの `dialog` の既定の動き） | 「中断する」→ ブラウザー側（本文の外）→「20 分延ばす」→「中断する」→「20 分延ばす」。ネイティブの `dialog` では、一度ブラウザー側へ出てから戻る（この環境の観察。S058 の記述とは経路が違う） |
| Esc | 閉じ、焦点は元の入力欄へ戻る。焦点が本文にあったときは、見出しへ戻る。「時間を延ばしました。次の期限は 20:24 です。」の形の文が `status` に入り、入力は残る。実際の読み上げは未確認 |
| 延長の回数 | 11 回の延長を続けて行えた（回数の制限なし。S046 は少なくとも 10 回） |
| 応答しないとき | ダイアログが閉じ、「時間が切れました」のパネルが出て、焦点は「再開する」。入力（氏名・メール）は残る。この状態で送信（フォームの送信・フィールドでの Enter）しても送信されず、「手続きは中断中のため、まだ送信していません。…」が `status` に入り、焦点は「再開する」のまま |
| 「中断する」 | 同じパネルが出て、焦点は「再開する」。入力は残る。送信はできない。「再開する」で氏名の欄へ焦点が戻り、状態は実行中へ戻る（前の送信の失敗の文は消える）。再開したあとは、送信できる |
| 出願 | 焦点は見出し「出願を受け付けました」。受付番号 Q-24681 は画面に残る。「出願を保存しました。」は 6 秒後に消えるが、受付番号は残る |
| 完了後 | 時間切れのパネルは隠れたまま。タイマーは再び動かず、7.5 秒待っても（6 秒の制限を超えても）警告も時間切れのパネルも出ない（状態は完了のまま） |
| 領収書の宛名 | チェック → 氏名を入力: 宛名に氏名が入る（チェック中は読み取り専用）。氏名を入力 → チェック → 氏名を直す: 宛名も直った値になる。チェックを外す: 値は残り、編集できる。外したあと、宛名を書き換えて氏名を直しても、宛名は変わらない。チェックの次の Tab は宛名欄（読み取り専用でも順路に残る）。ツリーでは、宛名欄は値つきのテキスト欄 |
| 幅 320・390 px | ダイアログを開いた状態・中断中・完了のいずれも、ページ全体ははみ出さない（`scrollWidth` が幅と等しい）。ダイアログは 320 px の幅に収まる |
| 文字だけ 200%（作成者の CSS・文字サイズ設定 32） | 1280 px と 320 px の両方で、ダイアログを開いた状態・中断中・完了のいずれも、ページ全体ははみ出さない。320 px では、ダイアログは高さ 798 px（画面 800 px）いっぱいになり、内側でスクロールする（内容 906 px、枠 794 px）。「中断する」へ Tab すると、画面の中（709〜797 px）へスクロールされる |
| 色の比 | 入力欄の枠 5.70:1。他は仕様の表 |
| ダーク | 本文 15.52:1・ヒント 10.19:1・入力欄の枠 6.35:1・ボタン 8.87:1・副ボタン 9.47:1・焦点の輪郭 16.90:1。幅 320・390 px ではみ出さない。強制カラーで輪郭は実線 3 px。動き 0 |
| 動きを減らす設定 | 警告のダイアログを開いた状態で、アニメーションは、設定あり・なしとも 0 |
| ボタン | 出願ボタンは 100 × 44 px |

### 未確認のもの

- 実際の読み上げ: ダイアログの名前・`status` の文が、VoiceOver・NVDA・JAWS・TalkBack でどう読まれるか。利用者が警告に気づくか
- 音声操作、利用者による理解（高齢の受験者）
- 本番の値（20 分・2 分前）での挙動と、画面が背景のタブにあるときのタイマーの精度
- 検定の本番の制限時間（範囲外）、サーバー側の保持、決済
- 他のブラウザー・端末

## この例の出典

出典の詳細（引用原文・URL・検証区分）は `../references/sources.md`。

- S046・S156: 時間制限（解除・調整・延長）・自動サインアウトの予告
- S028・S029・S027: 再入力・認証・ラベル
- S031・S051・S069・S070・S159・S233・S238: 状態メッセージ・トースト
- S050・S058・S059・S072・S077: ダイアログ
- S016・S025: 非テキストのコントラスト・ターゲットの大きさ

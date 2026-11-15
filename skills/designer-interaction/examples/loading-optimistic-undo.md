# 例: 読み込み・楽観的更新・取り消し（スケルトンの出し分け・巻き戻し・Undo）

タスクの一覧に、読み込み中の見せ方・完了の即時反映と失敗時の巻き戻し・削除の取り消しを設計する例。題材は架空のタスク管理アプリで、実在の製品の画面の模倣は含まない。待ち時間の出し分け、楽観的更新の失敗時の見せ方、確認ダイアログを使わない削除、状態の全設計（読み込み・空・エラー）をまとめて決めたいときに開く。空状態とエラーの文言は、導入されていれば designer-apple の `app-empty-and-error-states` が扱い、この例は待ち・更新・取り消しの時間の設計である。

## 依頼

- 製品: 個人向けのタスク管理アプリ「ひとつずつ」（架空。運営は架空の会社「ひとつ舎」）
- 依頼文: 「タスクの完了をすぐ反映して、失敗したら戻したい。読み込み中はスケルトンを出したい。削除は取り消せるようにしたい」
- 現状: 完了の操作は、サーバーの応答まで 1 秒近く反映されない。読み込み中は全画面の回転する円。削除は「本当に削除しますか」の確認ダイアログで、毎回押させる
- 想定するユーザー: 1 日に何度も、タスクを完了・削除する人。通信が不安定な場所でも使う

### 根拠の範囲（先に読む）

- 出典のある事実は、1 秒未満の読み込みにはスケルトンもスピナーも不要（S106）、スピナーは 2〜10 秒・スケルトンは 10 秒未満・進捗バーは 10 秒超（S107）、10 秒を超えるなら見積もり（S112）、出し始めの遅延と最短の表示時間の目安（約 150〜300 ms と約 300〜500 ms。S49。自称で「~」つき）、スケルトンは最終の内容と同じ形（S56）、枠だけは勧めない（S108）、脈動・シマーは注意（S109）、楽観的更新は失敗時に誤りを示して巻き戻すか Undo（S50）、確認は習慣で素通りされる（S116）、Undo で守る（S115）、破壊的な操作は確認か猶予つきの Undo（S51）、取り消しの結果を見せる（S72）、空・疎・密・エラーを設計する（S55）、状態の通知（S100）、すべてをキーボードで（S98）である。S49・S50・S51・S55・S56 は Vercel の自社指針（自称）で、他は NN/g・Apple・Raskin・W3C などの別の主体である
- スケルトンの効果には反証がある。136 人の簡易テストで、スケルトンがすべての指標で最も悪く、スピナーや空白画面を見た人より待ちを長く見積もった（S110。区分 C。モバイルの模擬テスト）。同じ著者は、万能ではなく慎重に使うべきだと結論した（S111）。この例は、自分の待ち時間で試すことを前提にする
- 楽観的更新が体感を良くするか、失敗時の混乱がどれほどかを測った研究は、取得していない。公式の API（S114。React の `useOptimistic`）と指針（S50）があるだけである。この例は、素の JavaScript で、同じ考え方を書く
- 出し始めの遅延 200 ms・最短 400 ms・Undo の猶予 6 秒・復元行の強調 1.2 秒は、本 skill の目安（出典なし）。200 ms と 400 ms は S49 の「~」の範囲に収めたが、自称の目安で、実験の値ではない。Undo の猶予時間に出典は無い（S51 は「猶予つき」とだけ述べる）
- 二度押し・押しっぱなしによる誤操作は、時間で押下を捨てる仕組み（押した直後の一定時間は無視する、など）で防がない。「待たせない」と矛盾するため。押す位置の部品が動かない配置と、入力イベントの性質（キーの押しっぱなし・同じ位置の 2 回目以降のクリック）で防ぐ。この配置は、本 skill の整理（出典なし）である
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

通知欄は 2 つに分ける。取り消しの欄（`#undo`）は、見出しと一覧の間に置き、猶予中の削除の「元に戻す」だけを持つ。空のときも高さ（5.6em）を確保するので、削除や取り消しで、下の一覧が動かない。「元に戻す」のボタンは、欄の右の列の中央に固定で、文の長さで動かない。通常のメッセージ欄（`#msg`）は、一覧の下で、完了・失敗・確定・読み込みの結果を伝える。別の操作の通知が、取り消しの欄を置き換えない。どちらも `role="status"` である。

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
| 元に戻す | 元の順番の位置に行を戻し、1.2 秒強調する。言葉でも伝える。Ctrl+Z（Mac は ⌘+Z）でも戻せる（Shift・Alt を伴う Z と、押しっぱなしの繰り返しは除く）。対象は、猶予中の最新の削除 | 結果を見せる（S72）。1.2 秒は目安 |
| 猶予が終わった後 | 猶予が終わった時点（確定を始めた時点）で、「元に戻す」を外し、「確定しています」と出す。確定できたら「確定しました」を通常のメッセージ欄に出す | 効かないボタンを残さない（S72 の「効かなかったと思って繰り返す」の逆）。本 skill の整理 |
| 削除の確定の失敗 | 行を元の順番の位置へ戻し、通常のメッセージ欄で伝える。取り消しの欄の、別の削除の「元に戻す」は消さない | S50 の考え方（失敗時は巻き戻す） |
| 復元の位置 | 配列の添字でなく、元の順番の値で決める（他の削除の失敗で復元が入っても、順序が崩れない） | 本 skill の実装（出典なし） |
| 複数の削除 | 削除ごとに猶予とタイマーを持つ。取り消しの欄は、猶予中の最新の削除を出す。古い削除は、猶予が終われば確定する | 本 skill の実装の制限（Undo は猶予中の最新の 1 件） |
| 読み込み直し | 世代を進め、前の削除のタイマーと通信の結果（成功・失敗）を捨てる。猶予中の削除は破棄し、取り消しの欄を空にする。空・エラーの枠のボタンから始めたときは、待つ間のフォーカスを見出しに置き（枠を隠してフォーカスを body に落とさない）、結果が出たとき見出しにあれば、最初のチェックか枠のボタンへ移す（待つ間に利用者が別へ移したなら奪わない）。成功は「4 件のタスクを読み込みました。」を通知する | 本 skill の実装（出典なし）。通知は S100 |
| 復元の強調 | 強調の期限は、行でなく状態（`t.flash`）として持つ。一覧を描き直しても、残りの時間だけ強調を付け直す（負のアニメーション遅延で途中から続ける）。外すタイマーは、期限が来た行だけを対象にする | 本 skill の実装 |
| 取り消しの欄の位置 | 一覧の上（見出しの下）に置き、最大の内容が入る高さ（5.6em。題は 10em で省略記号）を常に確保する。削除・取り消し・確定で欄の中身が出入りしても、一覧・見出し・「元に戻す」の位置は変わらない。ボタンは右の列の中央に置く。一覧を下に置く構成では、削除で一覧が縮むたびに、欄が動く | 本 skill の整理（出典なし） |
| 取り消しの欄の作り直し | 表示する内容（猶予中の削除の ID か、確定中か）が変わらないときは作り直さない。作り直すとき、フォーカスが欄の中にあったら、新しいボタンへ、ボタンが無ければ欄そのものへ移す（フォーカスを body に落とさない） | 本 skill の実装 |
| 連打（時間で押下を捨てない） | キーの押しっぱなし（`keydown` の `repeat`）の Enter・Space と、同じ位置の 2 回目以降の押下（`mousedown` と `click` の `detail` が 1 より大きい。`mousedown` では、フォーカスも動かさない）を無視する。対象は、ボタン・リンク・label（とその子）・チェックボックス（題の `span` は label の子なので、label の既定動作が作るチェックボックスの `click`（`detail` が 0）も、label の段階で止まる）。ダブルクリックで 2 行は消えず、「元に戻す」のダブルクリックで 2 件は戻らない。間をおいた 2 回目の押下は、意図した操作として扱う。スクリプトを持つ 4 例で同じ書き方。限界: OS のダブルクリックの間隔内の、同じ位置の 2 回目は、意図した操作でも 1 回に数える | 本 skill の整理 |
| 再試行の押下 | 「もう一度試す」は、再試行中もボタン要素のまま、同じ位置・同じ大きさ（高さ 44 px・幅 140 px）で残す。文言だけ「再試行しています…」に替え、`aria-disabled="true"` にする（`disabled` 属性は使わない。フォーカスが外れるため）。再試行中の押下・Enter は何もしない。結果が出たら、成功は行のエラー表示を閉じてフォーカスを同じ行のチェックへ、失敗は同じボタンを「もう一度試す」に戻してフォーカスはそのまま。押した位置に、次の行が上がってこない | 本 skill の整理 |
| 削除の後の行の移動 | 削除した行の下の行は、上がる。間をおいて削除ボタンを押し直すと、次の行が削除される（猶予中の最新の 1 件だけ取り消せる）。連続削除を許す設計の前提として、確認なしの削除と、取り消しの欄を残す。ダブルクリックの 2 回目は、位置が変わっても無視する | 本 skill の実装の制限 |
| 削除済みの行の失敗 | 完了の通信が、その行の削除の後に失敗したら、状態だけ戻し、通知しない | 本 skill の実装 |
| 結果の通知 | メッセージ欄を `role="status"` にし、フォーカスを移さず伝える。読み込みの失敗も、状態の枠とメッセージ欄の両方に出す | S100 |
| フォーカス | 行が無くなる操作（全削除）と再試行の後も、フォーカスを失わない（空の状態のボタン・最初のチェックへ移す）。空の状態のボタンにフォーカスがあるときに、削除の確定が失敗して行が戻り、空の状態を隠す場合も、戻った行のチェックへ移す。空の状態を作り直す場合も、ボタンのフォーカスを保つ | 本 skill の整理。フォーカスは「どの行の・どの操作か」で持ち、要素の種類では持たない（移動表は点検） |
| 長い題 | 行の題は折り返す（省略記号で切らない）。文字を大きくしても、題の全文が読める。骨組みは 56 px の固定で、文字を大きくすると、最終の行の高さと合わない | 本 skill の整理 |
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
| 削除 | 本当に削除しますか（確認） | 「週報を書く」を削除しました。（Ctrl+Z でも戻せる）と、右に「元に戻す」のボタン（取り消しの欄） | 確認ではなく取り消しで守る（S115） |
| 元に戻した | （無言） | 「週報を書く」を元に戻しました | 結果を見せる（S72） |
| 削除の失敗 | 通信エラー | 「週報を書く」を削除できませんでした。元の位置に戻しました | 何が起きたかと現状を言う |
| 読み込みの失敗 | 失敗しました | タスクを読み込めませんでした。もう一度試す | 次の行動を示す |
| 空（0 件） | データがありません | タスクはありません。 | 責めず、状態を言う。削除で空になった場合も同じで、「完了」とは言わない |
| 全部完了 | （無言） | 「週報を書く」を完了にしました。すべてのタスクが完了しました | 完了と空を文言で区別する |
| 削除の確定中 | （猶予後も「元に戻す」が残る） | 「週報を書く」の削除を確定しています。（取り消しの欄。ボタンなし） | 戻せなくなったことを伝える |
| 削除の確定 | （無言） | 「週報を書く」の削除を確定しました。 | 結果を伝える |
| 読み込みの完了 | （無言） | 4 件のタスクを読み込みました。 | 完了も伝える（S100） |
| 10 秒を超える待ち（文言のみ） | 読み込み中… | タスクを読み込んでいます。あと 10 秒ほどかかります | 見積もりを出す（S112） |

## コード断片

タスクの一覧と 3 つの操作の最小例。通信は擬似で、URL のハッシュで待ち時間と失敗を指定できる（例: `#latency=1200&fail=complete:3`）。外部のライブラリ・フォント・計測は使わない。行の内容は `textContent` で入れる（HTML を組み立てない）。

```html
<main class="page">
  <h1 id="page-title" tabindex="-1">今日のタスク</h1>
  <div id="undo" class="undo" role="status" tabindex="-1"></div>   <!-- 一覧の上。空のときも高さを確保する -->
  <ul id="list" class="list" aria-busy="false"></ul>
  <div id="state" class="state" hidden></div>
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
.title { min-width: 0; overflow-wrap: anywhere; }                       /* 長い題は折り返す（省略記号で切らない）*/
.done .title { color: var(--text-2); text-decoration: line-through; }
.row-error { flex-basis: 100%; margin: 0 0 6px 36px; color: var(--error); font-size: 14px; }
.btn { min-height: 44px; padding: 0 12px; border: 1px solid var(--line); border-radius: 8px; background: var(--bg); color: var(--text); font: inherit; cursor: pointer; }
.btn-main { border-color: var(--accent); background: var(--accent); color: var(--on-accent); font-weight: 600; }
.link { min-height: 44px; padding: 0 4px; border: 0; background: none; color: var(--accent); font: inherit; text-decoration: underline; cursor: pointer; }
.row-error .link { min-width: 10em; text-align: left; }                  /* 文言が替わっても、同じ大きさ（「再試行しています…」が入る幅。14 px の文字で 140 px）*/
.link[aria-disabled="true"] { color: var(--text-2); text-decoration: none; cursor: default; }

/* 骨組み: 最終の行と同じ高さ。動きは無し */
.skeleton { height: 56px; padding: 0 12px; }
.skel-box { width: 24px; height: 24px; border-radius: 50%; background: var(--skel); flex: none; }
.skel-bar { height: 14px; border-radius: 7px; background: var(--skel); flex: 1 1 0; max-width: 70%; }

.state { padding: 24px 16px; text-align: center; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); }
.state p { margin: 0 0 12px; }
.undo { min-height: 5.6em; margin: 0 0 8px; display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 0 12px; line-height: 1.7; }   /* 取り消しの領域。通常の通知とは別。空のときも高さを確保し、出し入れで一覧が動かない。ボタンは右の列の中央に固定（文の長さで動かない）*/
.undo-text { grid-column: 1; }
.undo-title { display: inline-block; max-width: 10em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; vertical-align: bottom; }   /* 長い題でも行数が増えない */
.msg { min-height: 56px; margin-top: 8px; padding: 4px 0; color: var(--text); }

/* 復元した行の強調: 背景を 1.2 秒かけて戻す。動きを減らす設定では、同じ長さだけ静的に付ける */
@keyframes flash { from { background: var(--flash); } to { background: transparent; } }
.restored { animation: flash 1.2s ease-out; }
@media (prefers-reduced-motion: reduce) {
  .restored { animation: none; background: var(--flash); }
}
```

```js
/* 連打対策（スクリプトを持つ 4 例で共通）: 時間で押下を捨てず、キーの押しっぱなしと、同じ位置の 2 回目以降のクリックだけを無視する */
const actionable = (t) => t.closest && t.closest('button, a[href], label, input[type="checkbox"]');   // label（とその子）も対象。label の既定動作が作る checkbox の click（detail が 0）を、label の段階で止める
document.addEventListener('keydown', (e) => { if (e.repeat && (e.key === 'Enter' || e.key === ' ') && actionable(e.target)) e.preventDefault(); }, true);
document.addEventListener('click', (e) => { if (e.detail > 1 && actionable(e.target)) { e.preventDefault(); e.stopImmediatePropagation(); } }, true);
document.addEventListener('mousedown', (e) => { if (e.detail > 1 && actionable(e.target)) e.preventDefault(); }, true);   // 2 回目の押下で、フォーカスを動かさない（行が上がってきて、別の削除へ移るのを防ぐ）

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
  const named = (t, tail) => el('span', { className: 'undo-text' }, '「', el('span', { className: 'undo-title', textContent: t.title }), `」${tail}`);
  if (wait) {
    const b = el('button', { type: 'button', className: 'link', textContent: '元に戻す' }); b.addEventListener('click', undo);
    undoBox.append(named(wait.t, 'を削除しました。（Ctrl+Z でも戻せる）'), b);
  } else if (send) undoBox.append(named(send.t, 'の削除を確定しています。'));   // 戻せなくなったら、ボタンを外す
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
function focusAt(at) {                                            // 同じ行の同じ操作へ。無ければ、同じ行のチェック → 一覧の先頭のチェック（削除へは移さない）
  const row = list.querySelector(`[data-id="${CSS.escape(at.id)}"]`);
  const n = (row && (row.querySelector(`[data-action="${at.action}"]`) || row.querySelector('[data-action="toggle"]'))) || list.querySelector('[data-action="toggle"]');
  if (n) n.focus();
}
function render(restoreFocus = true) {                             // restoreFocus が偽なら、呼び出し側がフォーカスを置く（二重に移さない）
  const f = document.activeElement, row0 = list.contains(f) && f.closest('[data-id]');          // 描き直しでフォーカスを失わない
  const inState = stateBox.contains(f);                           // 空・エラーの枠の中（隠すと、フォーカスが消える）
  const keep = row0 && f.dataset.action ? { id: row0.dataset.id, action: f.dataset.action } : null;   // どの行の、どの操作か（要素の種類ではない）
  list.setAttribute('aria-busy', 'false'); stateBox.hidden = true; list.hidden = tasks.length === 0;
  list.replaceChildren(...tasks.map((t) => {
    const box = el('input', { type: 'checkbox', checked: t.done }); box.dataset.action = 'toggle';
    box.addEventListener('change', () => setDone(t, box.checked));
    const del = el('button', { type: 'button', className: 'btn', textContent: '削除' });
    del.dataset.action = 'delete'; del.setAttribute('aria-label', `「${t.title}」を削除`); del.addEventListener('click', () => remove(t));
    const left = t.flash ? FLASH_MS - (performance.now() - t.flash) : 0;     // 描き直しても、強調の残りの時間を引き継ぐ
    const row = el('li', { className: 'row' + (t.done ? ' done' : '') + (left > 0 ? ' restored' : '') },
      el('label', {}, box, el('span', { className: 'title', textContent: t.title })), del);
    row.dataset.id = t.id;
    if (left > 0) row.style.animationDelay = (left - FLASH_MS) + 'ms';       // 負の遅延で、途中から続ける
    if (t.error) {
      const p = el('p', { className: 'row-error' }, t.error, ' ');
      const retry = el('button', { type: 'button', className: 'link', textContent: t.retry ? '再試行しています…' : 'もう一度試す' });   // 再試行中も、同じボタン要素のまま（位置・大きさ・フォーカスを保つ）
      retry.dataset.action = 'retry'; if (t.retry) retry.setAttribute('aria-disabled', 'true');       // disabled 属性は使わない（フォーカスが外れる）
      retry.addEventListener('click', () => { if (t.retry) return; t.retry = true; setDone(t, !t.done); });   // 再試行中の押下・Enter は、何もしない
      p.append(retry); row.append(p);
    }
    return row;
  }));
  if (keep && restoreFocus) focusAt(keep);
  if (inState && tasks.length) (list.querySelector('.restored input') || list.querySelector('[data-action="toggle"]')).focus();   // 空の枠を隠したら、戻った行へ
  if (!tasks.length) {
    showState('タスクはありません。', 'サンプルを読み込み直す', load);
    if (keep && restoreFocus) stateBox.querySelector('button').focus();   // 行が無くなったら、フォーカスを次の操作へ移す
  }
}
function showState(text, label, action) {
  const had = stateBox.contains(document.activeElement);          // 枠を作り直しても、フォーカスを失わない
  stateBox.replaceChildren(el('p', { textContent: text }), Object.assign(el('button', { type: 'button', className: 'btn btn-main', textContent: label }),
    { onclick: action }));
  stateBox.hidden = false;
  if (had) stateBox.querySelector('button').focus();
}

async function load() {                                           // 待ちの秒数に合う見せ方（S106・S49）
  const mine = ++gen;                                             // 世代を進め、前の削除のタイマーと通信の結果を無効にする
  pendings.forEach((p) => clearTimeout(p.timer)); pendings = []; renderUndo();
  const hadFocus = stateBox.contains(document.activeElement);     // 再試行のボタンを押した後も、フォーカスを失わない
  const heading = document.getElementById('page-title');
  msg.textContent = ''; stateBox.hidden = true; list.hidden = false;
  if (hadFocus) heading.focus({ preventScroll: true });           // 待つ間は、見出しに置く（枠を隠してフォーカスを body に落とさない）
  let shownAt = 0;
  const timer = setTimeout(() => { if (mine === gen) { showSkeleton(); shownAt = performance.now(); } }, SHOW_DELAY);
  let loaded = null;
  try { loaded = await api('load'); } catch { /* 下で扱う */ }
  clearTimeout(timer);
  if (shownAt) await sleep(Math.max(0, MIN_VISIBLE - (performance.now() - shownAt)));   // 出したなら、最短の時間は見せる
  if (mine !== gen) return;                                       // 読み込みが重なったら、古い結果は捨てる
  const stillHere = hadFocus && document.activeElement === heading;   // 待つ間に利用者が別へ移したなら、奪わない
  if (loaded) {
    tasks = loaded; render(); say(`${tasks.length} 件のタスクを読み込みました。`);       // 完了も通知する（S100）
    if (stillHere) list.querySelector('[data-action="toggle"]').focus();
    return;
  }
  list.replaceChildren(); list.setAttribute('aria-busy', 'false'); list.hidden = true;
  showState('タスクを読み込めませんでした。', 'もう一度試す', load);
  say('タスクを読み込めませんでした。', false);                    // 通知（S100）。フォーカスは再試行のボタンへ
  if (stillHere) stateBox.querySelector('button').focus();
}

async function setDone(t, done) {                                 // 楽観的更新: 先に反映し、失敗したら戻す（S50）
  const v = ++t.v, g = gen; t.done = done; t.error = t.retry ? t.error : null; render();
  say(done ? `「${t.title}」を完了にしました` + (tasks.every((x) => x.done) ? '。すべてのタスクが完了しました' : '') : `「${t.title}」を未完了に戻しました`);
  try {
    await api('complete', t.id);
    if (g === gen && t.v === v && t.retry) { t.retry = false; t.error = null; render(); }   // 再試行が通ったら、エラーの行を外す
  } catch {
    if (g !== gen || t.v !== v) return;                           // 読み込み直した・新しい操作がある。古い失敗では戻さない
    t.retry = false; t.done = !done;
    if (!tasks.includes(t)) return;                              // 削除済みの行は、巻き戻しだけで、通知しない
    t.error = `「${t.title}」を${done ? '完了にできませんでした。' : '未完了に戻せませんでした。'}`; render();
    say(t.error);
  }
}

function remove(t) {                                              // 確認でなく取り消しで守る（S115・S51）
  const index = tasks.indexOf(t); tasks.splice(index, 1);
  const p = { t, gen, state: 'wait', timer: setTimeout(() => commit(p), UNDO_MS) };   // 削除ごとに猶予を持つ
  pendings.push(p); render(false); renderUndo();
  const next = list.querySelectorAll('input[type="checkbox"]')[index] || list.querySelector('input[type="checkbox"]') || stateBox.querySelector('button');
  if (next) next.focus();                                         // 削除した行の次の行のチェックへ（0 件なら空の枠のボタンへ）。削除ボタンへは移さない
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
  if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey && !e.repeat && e.key.toLowerCase() === 'z' && pendings.some((p) => p.state === 'wait') && !typing) { e.preventDefault(); undo(); }
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
- 押した位置: 「もう一度試す」を押した直後も、ボタンの位置・大きさ・行の高さが変わらず、次の行が押した位置へ上がってこない。再試行中の Enter は何もしない。取り消しの欄は一覧の上にあり、空のときも高さを確保するので、削除・取り消し・確定でも、見出し・欄・一覧・「元に戻す」の位置が変わらない（320〜1440 px）
- 連打: 2 回目の押下（`mousedown`）でも、フォーカスを動かさない（上がってきた次の行の「削除」へ移らない）。削除のダブルクリックで 1 行だけ消え、「元に戻す」のダブルクリックで 1 件だけ戻り、チェックのダブルクリックで 1 回だけ切り替わる。Enter の押しっぱなしで削除が 1 回だけ起きる。Ctrl+Shift+Z では戻らない。時間で押下を捨てる仕組みは無い
- 未対応: (1) 確定の失敗で行が非同期に戻ると、行が下がり、ポインタの下の削除ボタンが別の行のものに替わる。戻る位置は元の順番で決まっていて、位置を確保すると一覧に空きが出るため、直していない。失敗は通知とその行の強調で伝える。(2) 間をおいて 2 回押した削除は、次の行を削除する（意図した操作として扱う。取り消せるのは猶予中の最新の 1 件）。(3) 猶予中の削除が 2 件あるとき、「元に戻す」を 1 回押すと、同じ位置に、もう 1 件の「元に戻す」が出る（同じ操作で、対象だけが替わる）。(4) 文字を大きくすると行が高くなり、骨組みの高さ（56 px）と最終の一覧が合わない。(5) 文字を大きくし、幅が狭いと、取り消しの欄の高さが予約（5.6em）を超え、削除・取り消しで一覧が動く（文字 150%・320 px で欄が 134 px から 204 px、文字 200%・320 px で 179 px から 435 px、文字 200%・390 px で 179 px から 272 px。文字 100% の 320〜1440 px では、動かない。題と「元に戻す」は、どの場合も重ならない）。ダブルクリックの 2 回目は、位置が動いても無視される
- 再描画とフォーカス: 一覧と取り消しの欄の作り直しで、フォーカスを body に落とさない。取り消しの欄は、表示が変わらなければ作り直さない（別の削除の確定が始まっても、フォーカス中の「元に戻す」が残る）。復元した行の強調は、一覧を描き直しても期限まで続く。空の状態の枠の中にフォーカスがあるときは、枠を隠す・作り直す経路でも、フォーカスを失わない
- 縮小版: 動きを減らす設定で、復元した行の強調が背景色の静的な表示になる。骨組みは元から動かない
- 横はみ出し: 1440・390・320 px で横スクロールが出ない。長い題は折り返し、文字を 200% 相当にしても、全文が読める
- 失敗パターン: 骨組みが万能だと思っていないか（S110・S111）。確認ダイアログを足していないか（S116）。Undo の結果が見えない状態になっていないか（S72）
- 実測（Chrome 156、2026-11-16、1440・390・320 px）: ハッシュ無しで開くと、擬似の通信は 300 ms・Undo の猶予は 6000 ms。待ちが 100 ms のとき、骨組みは一度も出ず、121 ms で一覧が出た。待ちが 450 ms のとき、骨組みは 219 ms に出て、出してから 405 ms 後の 624 ms に一覧へ替わった。待ちが 1200 ms のとき、骨組みは 217 ms に出て、1217 ms に一覧へ替わった。骨組みと最終の一覧の高さは、どちらも 226 px（行は 56 px の 4 行）。完了は、チェックを押した処理の中（0.3 ms）で行が完了になった。失敗する行（待ち 800 ms）は、押して 1 秒後にチェックが戻り、行にエラーと再試行が出て、再試行で完了になった。全部を完了にすると「すべてのタスクが完了しました」が出た。削除は、確認なしで行が消え、フォーカスが次の行のチェックへ移り、取り消しの欄に「元に戻す」が出て、押すと元の順番の位置に戻って強調された。Ctrl+Z でも戻り、Ctrl+Shift+Z では戻らなかった。猶予を過ぎると「元に戻す」が消えて「確定しました」が出て、確定が失敗する行は元の順番の位置に戻った。位置: 320・390・480・720・1440 px のすべてで、見出し・取り消しの欄（高さ 89.6 px）・一覧の上端・「元に戻す」のボタンの位置が、削除・2 件目の削除・取り消し・猶予切れを通して 1 種類のままだった。連打: 削除のダブルクリックで消えた行は 1 行（残り 1,3,4）、「元に戻す」のダブルクリックで戻った行は 1 件（猶予中 2 件のうち）、チェックと題のダブルクリックで切り替わりは 1 回（題の `span` に `detail` が 1・2・3 の `click` を送る試験でも、チェックは 1 回の切り替えだけ）、Enter の押しっぱなしで削除は 1 回だった。削除のダブルクリックの後、フォーカスは次の行のチェックにあり（次の行の「削除」ではない）、続けて Space を押しても、削除でなくチェックの切り替えだった。再試行ボタンは、押す前・再試行中で位置 (96.8, 357.6)・大きさ 140×44 px・行の高さが同じで、ダブルクリックしても、ほかの行を切り替えなかった。読み込み直し: 空・エラーの枠のボタンで始めると、待つ間のフォーカスは見出しにあり、成功で「4 件のタスクを読み込みました。」が出てフォーカスが最初のチェックへ移った。文字を 32 px にして長い題を入れると、題は折り返して全文が収まり（`scrollHeight` と `clientHeight` が 336 で一致）、横はみ出しは無かった。復元・確定・Ctrl+Z・全削除・読み込み直しの 11 場面で `focus()` の呼び出しを記録し、削除ボタンへの呼び出しは 0 回だった。他のブラウザー・実機は未検証
- 推測の明示: 200 ms・400 ms・6 秒・1.2 秒・56 px は本 skill の目安である。楽観的更新と骨組みの効果を測った研究は取得していない（S110 は反証の一例）。Ctrl+Z の処理は試作で、本番ではテキスト入力だけを除く。スクリーンリーダーでの読み上げは実機で確かめていない。Undo は猶予中の最新の 1 件のみ

### フォーカスの移動表（すべての再描画経路）

フォーカスは「どの行の・どの操作か」（`data-id` と `data-action`）で記録し、再描画の後に同じ行の同じ操作へ戻す。その操作が無くなったときだけ、同じ行のチェック → 一覧の先頭のチェックの順で移す。

| 経路 | フォーカスがある場所 | 移る先 |
|---|---|---|
| `render`（チェックの切り替え・完了・再試行・復元・確定の失敗などによる一覧の再描画） | 行 X の操作 A（チェック・削除・再試行） | 同じ行の同じ操作 A。A が無くなったとき（再試行が成功してエラーの行が消えたとき）は、同じ行のチェック → 一覧の先頭のチェック |
| `render`（行が戻った。確定の失敗・Ctrl+Z） | 空・エラーの枠のボタン | 戻った行のチェック（無ければ一覧の先頭のチェック） |
| `render`（0 件になった） | 行の操作 | 空の枠のボタン |
| `render` | 一覧・枠の外（取り消しの欄・メッセージ欄・ほかの要素・body） | 動かさない |
| `renderUndo` | 取り消しの欄の「元に戻す」・欄 | 表示が同じなら作り直さず、動かさない。変わるときは、新しい「元に戻す」、ボタンが無ければ欄そのもの（`tabindex="-1"`）。外にあるときは動かさない |
| `showState` | 枠のボタン | 作り直した新しいボタン。外にあるときは動かさない |
| `setDone`（再試行中） | 再試行のボタン | 同じボタン要素のまま（文言と `aria-disabled` だけ替わる）。成功は同じ行のチェック、失敗は同じボタン |
| `remove`（削除ボタン） | 行 X の削除 | 一覧の描き直しではフォーカスを復元せず（`render(false)`。二重に移さない）、次の行のチェックへ 1 回だけ移す（無ければ一覧の先頭のチェック。0 件になれば空の枠のボタン）。削除ボタンへは移さない |
| `undo`（ボタン・Ctrl+Z） | 取り消しの欄・ほか | 戻した行のチェック |
| `commit` の失敗 | 上の `render` の行に従う | 上の `render` の行に従う |
| `load`（読み込み直し・再試行） | 空・エラーの枠のボタン | 待つ間は見出し（`tabindex="-1"`）。結果が出たとき、まだ見出しにあれば、成功は最初のチェック、失敗は枠のボタン。待つ間に利用者が別へ移していたら、動かさない。外にあるときも動かさない |

削除ボタンへ、プログラムがフォーカスを移す経路は 0 である（再描画の前から利用者が同じ行の削除にいたとき、同じ操作に留まる場合を除く）。チェック・再試行・空の枠のボタン・取り消しの欄のボタン・見出しは、破壊的な操作ではない。実測は、チェック・削除・元に戻す・Ctrl+Z・猶予切れ・確定の失敗・再試行・全削除・読み込み直し・読み込みの失敗の 11 場面で、`focus()` の呼び出しを記録し、削除ボタンへの呼び出しが 0 回であることを確かめた。

## この例の出典

S01、S06、S49、S50、S51、S55、S56、S64、S71、S72、S98、S100、S106、S107、S108、S109、S110、S111、S112、S114、S115、S116。台帳は `../references/sources.md`。

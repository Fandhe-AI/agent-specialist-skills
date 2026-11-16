# 例: AI 下書きの応答画面（待ち・停止・採用・取り消し・自動スクロールしない）

メールの返信を AI が下書きする機能の画面を設計する例。題材は架空のメールアプリで、実在の製品の画面・文言の模倣は含まない。AI の応答の画面（生成中・ストリーミング・停止・編集・採用・取り消し）を頼まれたとき、待たせず、直しやすく、勝手に実行しない作りを決めたいときに開く。この例は、メールの送信と、下書きの履歴の一覧を持たない（書き直しの取り消しのために、1 つ前の版だけを 1 段保持する）。AI 機能を評価する調査の設計は、導入されていれば designer-ux-research の担当である。

## 依頼

- 製品: メールアプリ「ふくろう便」の返信の下書き機能「かきだし」（架空。運営は架空の会社「ふくろう舎」）
- 依頼文: 「メールの下書きを AI が書く機能を付けたい。待たせず、直しやすく、勝手に送らないようにしたい」
- 現状（案）: 「何でも聞いてください」の入力欄が 1 つ。生成が終わると全文が一度に出て、画面が下へ自動で動く。生成中は止められず、採用すると書きかけの返信が上書きされる
- 想定するユーザー: 1 日に何通も返信する社員。急いでいて、下書きを読んで直してから使う。画面の幅が狭いスマートフォンでも使う。動きを減らす設定の人もいる

### 根拠の範囲（先に読む）

- 出典のある事実は、生成には時間がかかるので読み込み体験を設計するか背景で生成する（S69）、具体的なフィードバックが待ちを目的のあるものにする（S70）、破壊的・取り消しにくい操作を自動化しない（S71）、取り消しの結果を見せる（S72）、ストリーミング中の自動スクロールが読み始めた位置を見失わせる（S120。NN/g の実在のチャットボットの観察）、提案プロンプトが入力の負担を減らす（S121）、漠然とした導入文が過剰な期待を生む（S122）、能力と精度を示す（S123・S124）、誤ったときに編集・修正・復旧しやすくする（S125）、操作の影響を伝える（S126）、ステータスメッセージをフォーカス移動なしで伝える（S100）である
- ストリーミングの文字の速さ・停止ボタンを出す時間・再生成の上限・待ちの文言を切り替える時間の出典は、取得していない。この例の値（2 文字・50 ms・700 ms など）は、本 skill の目安（出典なし）である
- Google の自社研究は、生成の速さを無視すれば生成 UI が好まれたと述べる（S127。自称）。速さを評価から外しているため、画面設計の根拠にしない。MeasuringU の調査は 153 人の小標本で（S128）、個別の操作の設計の根拠にならない
- 応答は擬似（スクリプトが決まった文を、決まった速さで出す）。実在の生成 AI・通信は使わない。この例に、新しい CSS 機能は使わない（非対応の姿の分岐は不要）
- この例は、メールの送信ボタンと、下書きの履歴の一覧を持たない（目的の一文に無い機能のため、削った）。AI は送信を一切しない。書き直し・提案の押下は今の下書き（利用者が直した文を含む）を置き換えるので、置き換える前の版を 1 段だけ保持し、「書き直しを取り消す」で戻せる。2 段以上は保持しない
- 送信を持たないのは、この例の範囲の都合である（本 skill の整理）。実際の画面に送信や対応状態の表示が要るなら、それは残す。そこへ当てるのは、AI は送信しない・送信は人が押す、という原則だけにする

## 目的の一文

AI の下書きを、待っている間も状態が分かり、いつでも止められ、直してから使え、書き直しても 1 つ前の版へ戻せ、使った後も取り消せる形で見せる。AI は返信を送らない。

## 削るもの

| 削るもの | 理由 |
|---|---|
| 「何でも聞いてください」の導入文 | 漠然とした導入文は、できないことへの期待を作る（S122）。できることを具体的に言う（S123） |
| 白紙の入力欄だけ | 入力の負担が大きい。提案をボタンで出す（S121） |
| 「処理中…」だけの待ち | 具体的な処理名が、待ちを目的のあるものにする（S70） |
| 生成が終わるまで止められない作り | いつでも止められる。止めても、ここまでの下書きを残す（S125 の考え方） |
| 全文が出たら画面を下へ自動で動かすこと | 読み始めた位置を見失わせる（S120）。画面の位置は動かさない |
| 生成中の全文を支援技術に読み上げさせ続けること | 状態（生成中・停止・完了）だけを通知する（S100。全文を読ませない選択は本 skill の整理） |
| 書き直し・提案の押下で、直した下書きが黙って消えること | 置き換えの前の版を 1 段だけ保持し、戻せるようにする（S125 の復旧しやすさ・S72）。履歴の一覧は持たない |
| 採用で返信欄を黙って上書きすること | 取り消しにくい操作を、取り消せるようにする（S71・S72） |
| 生成の完了後の自動送信 | 取り消しにくい操作を自動化しない（S71）。この例は、送信の機能そのものを持たない。実際の画面で送信が要るなら、送信は人が押す操作として残す |
| 状態でボタンを隠す・入れ替える作り | 押した位置に別のボタンが来て、二度押しで別の操作が走る。ボタンは固定の位置に置き、`aria-disabled` で切り替える |
| 時間で押下を無視する仕組み | 完了を待たせない。押した操作を捨てる。二度押しは、位置を動かさないこと、キーの押しっぱなしとダブルクリックを無視することで防ぐ |

## 構成

| 要素 | 内容 |
|---|---|
| 受信したメール | 返信の対象の文 |
| 下書きの領域 | できることの説明（能力）・正確とは限らない旨（精度）・提案のボタン・操作のボタン（停止・使う・続きを書く・書き直す・書き直しを取り消す。固定の位置）・状態の文・下書き（編集できる） |
| 書き直しの取り消し | 書き直し・提案で置き換える前の版を 1 段だけ保持する。保持がないときは `aria-disabled`（隠さない）。新しい下書きを直したら、直した分を失わないよう保持を捨てる |
| 返信 | 人が書く欄。採用で下書きが入る。採用の取り消し |
| 状態の文 | 状態を、フォーカスを移さず伝える（`role="status"`）。停止ボタンとは別の行で、停止ボタンの位置を動かさない |

状態の遷移:

```text
待機 --(提案を押す)--> 整理中（「返信の要点を整理しています」700 ms）--> 書き中（「下書きを書いています」）--> 完了
整理中・書き中 --(停止・Esc)--> 停止（ここまでを残す。続きを書く / 書き直す / 使う）
書き中 --(失敗)--> 失敗（ここまでを残す。続きを書く / 書き直す）
完了・停止 --(この下書きを使う)--> 返信に入る（採用を取り消す）
完了・停止・失敗 --(書き直す・提案)--> 整理中（直前の版を 1 段保持）
停止・完了・失敗 --(書き直しを取り消す)--> 直前の版と、その状態に戻る（保持は空になる）
```

操作のボタンは、どの状態でも同じ位置にある。押せない状態は `aria-disabled="true"`（`disabled` 属性は使わない。フォーカスが外れるため）で示し、押しても何も起きない。

| 状態 | 提案 | 停止 | 使う | 続きを書く | 書き直す | 書き直しを取り消す |
|---|---|---|---|---|---|---|
| 待機 | 押せる | 押せない | 押せない | 押せない | 押せない | 押せない |
| 整理中・書き中 | 押せない | 押せる | 押せない | 押せない | 押せない | 押せない |
| 停止・失敗 | 押せる | 押せない | 押せる（下書きがあるとき） | 押せる（強調） | 押せる | 保持があるとき押せる |
| 完了 | 押せる | 押せない | 押せる（強調） | 押せない | 押せる | 保持があるとき押せる |

「書き直す」は、下書きを作った提案の種類があるときだけ押せる。自分で入力しただけの下書き（提案を選んでいない待機）では、「使う」は押せても、「書き直す」は押せない（置き換える下書きの作り方が無いため）。「書き直しを取り消す」で、自分で入力しただけの版に戻したときも同じ（保持は、その版を作った提案の種類と一緒に戻す。種類が無ければ、「書き直す」は押せないまま）。

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| 能力の説明 | 「返信の下書きを作ります。この画面から送信はしません。」 | S123・S71 |
| 精度の説明 | 「内容が正しいとは限りません。使う前に読んで直してください。」 | S124 |
| 提案 | ボタン 3 つ（丁寧に承諾する・火曜を提案する・日程の再調整を頼む）。入力欄は置かない。生成中は隠さず `aria-disabled` にして、位置を保つ | S121 |
| 注意書き | 能力（できること・送信しないこと）と精度（正確とは限らないこと）を、2 つの短い段落に分ける | S123・S124・S71 |
| 操作のボタン | 停止・使う・続きを書く・書き直す・書き直しを取り消すは、1 つの行に、常に同じ順序・位置で置く。隠さず、`aria-disabled` で切り替える。押した位置に、別のボタンが来ない | 本 skill の整理 |
| 押せない操作の量 | 狭い画面で、その状態で使わない操作が多段に並ぶときは、同じ位置に並べ続けるか、状態ごとに操作の組を分けるかを、位置の安定と見た目の量のどちらを優先するかで決める。この例は位置の安定を優先した。390 px の待機では、操作の 5 つがすべて押せず、2 段（高さ 96 px）に並ぶ（2026-11-16 の実測） | 本 skill の目安（出典なし） |
| 二度押しの対策 | 時間で押下を捨てない。キーの押しっぱなし（`keydown` の `repeat`）の Enter・Space と、同じ位置の 2 回目以降の押下（`mousedown` と `click` の `detail` が 1 より大きい。`mousedown` では、フォーカスも動かさない）を無視する。スクリプトを持つ 4 例で同じ書き方。限界: OS のダブルクリックの間隔内の、同じ位置の 2 回目は、意図した操作でも 1 回に数える | 本 skill の整理 |
| 待ちの表示 | 状態の文に「返信の要点を整理しています」→「下書きを書いています」。具体的な処理名 | S70 |
| 状態の文 | 停止ボタンと別の行に置く。文言の長さが変わっても、停止ボタンは動かない。2 行分の高さを確保し、下書き欄は動かない | 本 skill の整理 |
| 整理中の長さ | 700 ms | 本 skill の目安（出典なし） |
| 停止 | 生成を始めた同じ描画で、停止を押せる状態にする。Esc でも止まる（入力できる欄にフォーカスがあるときを除く）。止めたら、ここまでの下書きを残す。フォーカスは、押したボタンに残し、プログラムで移さない | 出す時間の出典は無い（本 skill の整理）。残すのは S125 の考え方 |
| ストリーミング | 2 文字ずつ 50 ms 間隔（目安）。動きを減らす設定では、ストリーミングせず、書き終えてから全文を出す | 本 skill の目安・整理（出典なし） |
| 画面の位置 | 生成中も完了時も、スクロールを動かさない。下書き欄は固定の高さ（8 行）で、あふれたら欄の中でスクロールする | S120 |
| 通知 | 状態は下書きの近くの状態の文、採用・取り消しは返信の近くの欄（どちらも `role="status"`）に、状態だけ出す。下書きの全文を通知しない。生成中の欄は `aria-busy` | S100・本 skill の整理 |
| 編集 | 停止後と完了後は、下書きを直せる。生成中は読み取り専用 | S125 |
| 続きを書く・書き直す | 続きは、直した分を残したまま、停止した位置の続きを足す。書き直しは、下書きを作った提案の種類があるときだけ押せ（無いときは `aria-disabled`。押しても、入口で種類を検証して何もしないので、下書きは消えない）、今の下書きを最初から置き換える。置き換える前の版（直した文を含む）を 1 段だけ保持し、「書き直しを取り消す」で戻す（提案ボタンで作り直したときも同じ。2 段以上は保持しない）。次の一手は 1 つだけ強調する（完了なら「使う」、停止・失敗なら「続きを書く」） | S125。強調の選び方は本 skill の整理 |
| 書き直しの取り消し | 固定の位置（操作のボタンの行）に置き、保持が無いとき・生成中は `aria-disabled`（隠さない・位置は動かさない）。押したら、保持した版と、その時の状態（完了・停止・失敗）に戻し、状態の文に「書き直しを取り消しました。1 つ前の下書きに戻しました。」を出す。フォーカスはプログラムで移さず、押したボタンに残る（押した後は `aria-disabled` になるが、ほかのボタンと同じ扱い。Enter の押しっぱなしが下書き欄に届いて、改行が入ることがない）。保持は戻したら空になる。新しい下書きを直したら、直した分を失わないよう、保持を捨てる（採用の取り消しと同じ規則）。下書きが空のときの置き換えでは、既にある保持を上書きしない | S125・S72。1 段だけにする判断は本 skill の整理 |
| 採用 | 下書きを返信欄へ入れる。返信欄に文があれば置き換える。続けて採用しても、元の本文は上書きしない。「採用を取り消す」で元の本文に戻し、結果を言葉で伝える。返信を直した後は、直した分を失わないよう、取り消しを押せなくする | S71・S72 |
| 失敗 | 失敗してもここまでの下書きを残し、「続きを書く」（強調）と「書き直す」を押せる | S125 |
| 縮小版 | 生成中の点の脈動をやめ、静的な「…」にする | 必要性は S79（アプリ側も設定を尊重する）。置き換えは本 skill の整理 |
| 自動の動き | 生成は 5 秒を超えることがある。自動で始まる動き・更新に、止める手段（停止ボタン・Esc）がある | S94 の考え方（本 skill の当てはめ。WCAG 2.2.2 の適合判断はしない） |
| 速さの扱い | 速さの数値は評価の根拠にしない | S127（速さを評価から外す自称）・S128（小標本） |

コントラスト比（本 skill の計算。WCAG の相対輝度式による。基準の 4.5:1・3:1 の原文は本 skill の台帳に無く、未照合。配色は 5 例で共通の仮置きで、写さない）:

| 組み合わせ（前景 / 背景） | ライト | ダーク |
|---|---|---|
| 本文 / 背景 | 14.01 | 15.76 |
| 補助文字 / 背景 | 7.97 | 9.19 |
| ボタンの文字 / アクセント | 6.89 | 8.43 |
| エラーの文字 / 背景 | 5.57 | 7.88 |
| アクセント（強調の輪）/ 背景 | 5.88 | 8.43 |
| 枠線（非文字）/ 背景 | 4.30 | 5.78 |
| 本文 / 強調した返信欄の背景 | 11.00 | 10.84 |

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| 導入 | 何でも聞いてください | 返信の下書きを作ります。この画面から送信はしません。 | できることを具体的に言う（S122・S123） |
| 精度 | （無し） | 内容が正しいとは限りません。使う前に読んで直してください。 | 精度を示す（S124） |
| 待機 | （無し） | 提案を選ぶと、下書きを作ります。止めるには「停止」か Esc。 | 次の一手と、止め方を言う |
| 待ち | 処理中… | 返信の要点を整理しています → 下書きを書いています | 具体的な処理名（S70） |
| 停止 | （無し） | 停止 | 止められることを示す |
| 停止後 | （無し） | 停止しました。ここまでの下書きは残してあります。 | 現状を言う |
| 完了 | （全文が出るだけ） | 下書きができました。直して使えます。 | 状態を伝える（S100） |
| 失敗 | エラーが発生しました | 下書きを最後まで作れませんでした。ここまでの下書きは残してあります。 | 何が起きたかと現状を言う（S125） |
| 採用 | （黙って上書き） | 下書きを返信に入れました。 | 結果を伝える（S71・S72） |
| 書き直しの取り消し | （直した下書きが消える） | 書き直しを取り消しました。1 つ前の下書きに戻しました。 | 結果を見せる（S72）・復旧しやすく（S125） |
| 採用の取り消し | （無し） | 採用を取り消しました。返信を元の本文に戻しました。 | 結果を見せる（S72） |

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
    <p class="note">返信の下書きを作ります。この画面から送信はしません。</p>
    <p class="note">内容が正しいとは限りません。使う前に読んで直してください。</p>
    <div id="suggest" class="row">
      <button type="button" class="btn" data-kind="polite" aria-disabled="false">丁寧に承諾する</button>
      <button type="button" class="btn" data-kind="tue" aria-disabled="false">火曜を提案する</button>
      <button type="button" class="btn" data-kind="decline" aria-disabled="false">日程の再調整を頼む</button>
    </div>
    <div id="controls" class="row">
      <button type="button" id="stop" class="btn" aria-disabled="true">停止</button>
      <button type="button" id="adopt" class="btn" aria-disabled="true">この下書きを使う</button>
      <button type="button" id="resume" class="btn" aria-disabled="true">続きを書く</button>
      <button type="button" id="again" class="btn" aria-disabled="true">書き直す</button>
      <button type="button" id="undo-again" class="btn" aria-disabled="true">書き直しを取り消す</button>
    </div>
    <div id="status" class="status" role="status">提案を選ぶと、下書きを作ります。止めるには「停止」か Esc。</div>
    <label for="draft" class="lbl">下書き</label>
    <textarea id="draft" rows="8" readonly></textarea>
  </section>

  <section aria-labelledby="reply-title">
    <h2 id="reply-title">返信</h2>
    <textarea id="reply" rows="6" aria-label="返信の本文"></textarea>
    <div class="row">
      <button type="button" id="undo-adopt" class="btn" aria-disabled="true">採用を取り消す</button>
    </div>
    <div id="reply-status" class="status" role="status"></div>
  </section>
</main>
```

```css
:root {
  color-scheme: light dark;
  --bg: #f1eafb; --surface: #e8dff4; --text: #261a33; --text-2: #4e4259; --accent: #7b2fc4; --on-accent: #ffffff;
  --line: #766a84; --error: #b3261e; --flash: #ddccf7;
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #1a1422; --surface: #241c2f; --text: #f3eef8; --text-2: #c0b5cc; --accent: #d69af8; --on-accent: #1a1422;
          --line: #9a8da8; --error: #ff8a80; --flash: #3b2a63; }
}
body { margin: 0; background: var(--bg); color: var(--text); line-height: 1.7;
  font-family: system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Noto Sans CJK JP", sans-serif; }
.page { max-width: 640px; margin: 0 auto; padding: 24px 16px 64px; }
h1 { font-size: 24px; line-height: 32px; margin: 0 0 16px; }
h2 { font-size: 18px; line-height: 26px; margin: 24px 0 8px; }
:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }
.mail { padding: 12px 16px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); }
.mail p { margin: 0; }
.meta { color: var(--text-2); font-size: 14px; }
.note { margin: 0 0 4px; color: var(--text-2); }
.row { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin: 8px 0; }
.btn { min-height: 44px; padding: 0 14px; border: 1px solid var(--line); border-radius: 8px; background: var(--bg); color: var(--text); font: inherit; cursor: pointer; }
.btn-main { border-color: var(--accent); background: var(--accent); color: var(--on-accent); font-weight: 600; }
.btn[aria-disabled="true"] { opacity: 0.5; cursor: not-allowed; }       /* 押せない状態。disabled 属性は使わない（フォーカスが外れる）*/
.lbl { display: block; margin-top: 12px; font-size: 14px; color: var(--text-2); }
textarea { display: block; box-sizing: border-box; width: 100%; padding: 10px 12px; border: 1px solid var(--line); border-radius: 8px;
  background: var(--bg); color: var(--text); font: inherit; line-height: 1.7; resize: vertical; }
#draft[readonly] { background: var(--surface); }
.status { min-height: 3.4em; margin: 4px 0 0; }                   /* 2 行分を確保し、文言の長さで下の欄が動かない */
.error { color: var(--error); }
.flash { background: var(--flash); }

/* 生成中の点の脈動（1.2 秒周期・点滅ではなく緩やかな変化）。動きを減らす設定では止める */
@keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
.dots { animation: pulse 1.2s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) { .dots { animation: none; } }
```

```js
/* 連打対策（スクリプトを持つ 4 例で共通）: 時間で押下を捨てず、キーの押しっぱなしと、同じ位置の 2 回目以降のクリックだけを無視する */
const actionable = (t) => t.closest && t.closest('button, a[href], label, input[type="checkbox"]');   // label（とその子）も対象。label の既定動作が作る checkbox の click（detail が 0）を、label の段階で止める
document.addEventListener('keydown', (e) => { if (e.repeat && (e.key === 'Enter' || e.key === ' ') && actionable(e.target)) e.preventDefault(); }, true);
document.addEventListener('click', (e) => { if (e.detail > 1 && actionable(e.target)) { e.preventDefault(); e.stopImmediatePropagation(); } }, true);
document.addEventListener('mousedown', (e) => { if (e.detail > 1 && actionable(e.target)) e.preventDefault(); }, true);   // 2 回目の押下で、フォーカスを動かさない（行が上がってきて、別の削除へ移るのを防ぐ）

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
const enable = (b, on) => b.setAttribute('aria-disabled', String(!on));       // 隠さず、位置を保つ
const onClick = (b, fn) => b.addEventListener('click', () => { if (b.getAttribute('aria-disabled') !== 'true') fn(); });
// pos: 擬似の応答のうち、ここまで出した文字数。base: この回の前から欄にあった文（直した分を含む）。startPos: この回を始めた位置
let kind = null, pos = 0, base = '', startPos = 0, timer = 0, state = 'idle', failedOnce = false, prevReply = null;
let saved = null;                                                            // 書き直しの前の版（1 段だけ）。{ value, kind, pos, state }。kind は、その版を作った提案の種類（自分で入力しただけなら null）

function say(id, text, { busy = false, error = false } = {}) {               // 状態だけを通知（S100）
  const s = $(id); s.textContent = text; s.className = 'status' + (error ? ' error' : '');
  if (busy) { const d = document.createElement('span'); d.className = 'dots'; d.setAttribute('aria-hidden', 'true'); d.textContent = '…'; s.append(d); }
}
const sayAi = (t, o) => say('status', t, o), sayReply = (t, o) => say('reply-status', t, o);
function setState(next) {                                                    // 状態の表のとおりに、ボタンを押せる・押せないにする
  state = next;
  const busy = next === 'thinking' || next === 'writing', has = $('draft').value.trim() !== '';
  $('suggest').querySelectorAll('button').forEach((b) => enable(b, !busy));
  enable($('stop'), busy); enable($('adopt'), !busy && has); enable($('again'), !busy && has && ready());
  enable($('resume'), next === 'stopped' || next === 'error'); enable($('undo-again'), !busy && saved !== null);
  $('draft').readOnly = busy; $('draft').setAttribute('aria-busy', String(busy));
  $('adopt').classList.toggle('btn-main', next === 'done');                  // 次の一手を 1 つだけ強調する
  $('resume').classList.toggle('btn-main', next === 'stopped' || next === 'error');
}
const ready = () => Object.hasOwn(DRAFTS, kind);                             // 下書きを作った提案の種類があるか（自分で入力しただけの下書きは、無い）
function start(k, resume) {
  if (!Object.hasOwn(DRAFTS, k)) return;                                    // 種類が無効なら、何もしない（下書きも消さない）
  clearInterval(timer); clearTimeout(timer);
  if (!resume) {
    if ($('draft').value.trim() !== '') saved = { value: $('draft').value, kind, pos, state };   // 置き換える前の版（直した文を含む）を 1 段だけ残す。空なら、既にある保持を上書きしない
    pos = 0; base = ''; $('draft').value = '';
  }
  else base = $('draft').value;                                              // 直した分を残し、その後ろへ続きを足す
  startPos = pos; kind = k; setState('thinking');
  sayAi('返信の要点を整理しています', { busy: true });
  timer = setTimeout(write, resume ? 0 : THINK);
}
function write() {
  setState('writing'); sayAi('下書きを書いています', { busy: true });
  const text = DRAFTS[kind];
  if (reduce.matches) { pos = text.length; $('draft').value = base + text.slice(startPos); return finish(); }   // 動きを減らす設定では、書き終えてから全文を出す
  timer = setInterval(() => {
    pos = Math.min(text.length, pos + STEP); $('draft').value = base + text.slice(startPos, pos);
    if (FAIL && !failedOnce && pos >= text.length / 2) {
      failedOnce = true; clearInterval(timer); setState('error'); sayAi('下書きを最後まで作れませんでした。ここまでの下書きは残してあります。', { error: true });
    } else if (pos >= text.length) { clearInterval(timer); finish(); }
  }, TICK);
}
function finish() { setState('done'); sayAi('下書きができました。直して使えます。'); }
function stop() {
  if (state !== 'thinking' && state !== 'writing') return;
  clearInterval(timer); clearTimeout(timer); setState('stopped');
  sayAi('停止しました。ここまでの下書きは残してあります。');
}
document.querySelectorAll('#suggest [data-kind]').forEach((b) => onClick(b, () => start(b.dataset.kind, false)));
onClick($('stop'), stop);
addEventListener('keydown', (e) => {                                          // 返信などを入力しているときの Esc は、生成を止めない
  if (e.key === 'Escape' && !document.activeElement.matches('textarea:not([readonly])')) stop();
});
onClick($('resume'), () => start(kind, true));
onClick($('again'), () => start(kind, false));
$('draft').addEventListener('input', () => {
  const has = $('draft').value.trim() !== '';
  enable($('adopt'), has); enable($('again'), has && ready());
  saved = null; enable($('undo-again'), false);                              // 新しい下書きを直したら、直した分を失わないよう、取り消しは押せなくする
});
onClick($('undo-again'), () => {                                             // 1 つ前の版と、その時の状態へ戻す
  if (!saved) return;
  const prev = saved; saved = null;
  $('draft').value = prev.value; kind = prev.kind; pos = prev.pos; setState(prev.state);
  sayAi('書き直しを取り消しました。1 つ前の下書きに戻しました。');
});

function flash() { $('reply').classList.add('flash'); setTimeout(() => $('reply').classList.remove('flash'), 1200); }
onClick($('adopt'), () => {                                                  // 置き換えは取り消せる（S71・S72）
  if ($('undo-adopt').getAttribute('aria-disabled') === 'true') prevReply = $('reply').value;   // 採用済みなら、元の返信を上書きしない
  $('reply').value = $('draft').value; enable($('undo-adopt'), true);
  flash(); sayReply('下書きを返信に入れました。');
});
onClick($('undo-adopt'), () => {
  $('reply').value = prevReply; enable($('undo-adopt'), false);
  flash(); sayReply('採用を取り消しました。返信を元の本文に戻しました。');
});
$('reply').addEventListener('input', () => enable($('undo-adopt'), false));   // 返信を直したら、採用の取り消しは押せなくする（直した分を失わないため）
setState('idle');
```

試作のため、スクリプトはインラインで書いてよい。本番では外部ファイルにするか、CSP の nonce を付ける。

## 初見検証

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 下書きは AI が作り、正確とは限らない。この画面から送信はしない | 下書きの領域の説明 |
| 何を操作できるか | 提案から下書きを作る・止める・直す・書き直す・書き直しを取り消す・使う・採用を取り消す | 提案のボタン、停止、下書き、「書き直す」、「書き直しを取り消す」、「この下書きを使う」、返信と「採用を取り消す」 |
| どう操作するか | 提案を押す。止めたいときは「停止」か Esc。使うときは「この下書きを使う」 | 44 px 以上のボタン |

動きの検証は、動きを減らす設定をオンにしても同じ 3 問に答えられることを確かめる。縮小版でも、待ちの文言・停止・完了の文言で状態が分かる（S64）。

## 点検

- 目的: 待ち・停止・編集・採用・取り消しのそれぞれで、人が主導権を持つか。AI が返信を送る機能が無いか（S71）
- 待ち: 具体的な処理名が出る（S70）。停止が生成の開始と同じ描画で押せる。Esc でも止まる。停止が効かない時間帯が無い（時間で押下を捨てる仕組みが無い）
- 位置: 生成中も完了時も、ページのスクロール位置が動かない（S120）。下書き欄は固定の高さで、あふれても欄の中だけ動く。状態が変わっても、下書き欄・操作のボタンの位置が動かない（幅を振って確かめる）
- 通知: 状態の文が状態だけを出し、下書きの全文を出さない。フォーカスは、プログラムで移さない（押したボタンに残る）。返信欄で入力している最中の Esc は、生成を止めない（S100）
- 編集と復旧: 提案を選ばずに入力しただけでは、「書き直す」は押せない（`aria-disabled`）。入力 → 提案 →「書き直しを取り消す」で入力した版に戻したときも押せず、押せない状態の「書き直す」を押しても、例外も下書きの消去も起きない。停止後・完了後に下書きを直せる。失敗してもここまでの下書きが残る（S125）。書き直し・提案の押下は今の下書き（直した文を含む）を置き換えるが、「書き直しを取り消す」で 1 つ前の版に戻る（フォーカスは押したボタンに残り、通知あり）。新しい下書きを直した後は取り消せない（直した分を失わないため）。履歴の一覧は持たない（範囲外）
- ボタンの位置と二度押し: 操作のボタン（書き直しを取り消すを含む 5 つ）は、どの状態でも同じ位置にあり、押せない間は `aria-disabled` である。キーの押しっぱなしと、ダブルクリックの 2 回目は無視される。停止を押した位置に、別のボタンが来ない
- 採用と取り消し: 返信欄の文を置き換えるとき、取り消せる。取り消した結果が言葉と強調で分かる（S72）。AI は送信しない（S71）
- 縮小版: 動きを減らす設定で、点の脈動が止まり、全文は書き終えてから出る。設定は CSS とスクリプトの判定で、途中で変えても CSS の部分は追従する
- 横はみ出し: 320 px から 1440 px まで、横スクロールが出ない。下書きと返信の欄が幅に収まる
- 配色: 本文・補助文字・エラーの文字は 4.5:1 以上、フォーカスの輪・枠線・部品の輪郭は 3:1 以上（本 skill の計算。値は `## 仕様` の表）。配色は 5 例共通の仮置きで、写さない。配色の変更後の描画（1440・390・320 px、ライトとダーク、動きを減らす設定）は未検証。色以外の記述と実測の数値は変えていない
- 能力と精度: できることと、正確とは限らないことが、使う前に読める（S123・S124）。提案はボタンで、導入文は具体的（S121・S122）
- 未対応: 狭い画面では、下書き欄が画面の下側にあり、生成中の文字は自分でスクロールして読む（画面は動かさない）。キーボードで提案を押すと、フォーカスは押した提案に残るので、停止は Esc か Tab で行く（フォーカスをプログラムで移すと、入力中の欄から奪う危険があるため、移さない）
- 実測（Chrome 156、2026-11-16、1440・390・320 px）: 位置は、幅 320・390・480・559・560・572・640・719・720・800・1024・1440 px の 12 通りで、擬似の通信を「通常」と「途中で 1 回失敗」にして、提案・停止・続きを書く・採用・書き直す・採用の取り消しを通した全経路で、提案 3 つ・操作の 5 つ（書き直しを取り消すを含む）・状態の文・下書き欄・返信欄・採用の取り消し・返信の通知欄の矩形（ページ上の位置と大きさ）が 1 種類のままだった（560〜572 px でも下書き欄は動かない）。停止は、提案を押してから 79・127・227・375・427・579・775・1077 ms のどの時点でも、押した直後に止まり、フォーカスは「停止」に残った（時間で押下を捨てる仕組みは無い）。「停止」のダブルクリックは、止まったまま、別のボタンが押されなかった。提案のダブルクリックで開始は 1 回だけ。Enter の押しっぱなしでは、開始は 1 回だけで、Esc で止めた後も、押しっぱなしの Enter が次の生成を始めなかった。書き直しの入口: 提案を選ばずに下書き欄へ入力しただけでは、「書き直す」は `aria-disabled`（押しても、強制的に `click()` しても、Enter でも、下書きは消えず、例外も起きず、状態は待機のまま）。入力 → 提案 →「書き直しを取り消す」で入力した版に戻しても、種類が `null` に戻り、「書き直す」は押せないまま（押しても同じ）。続けて提案 → 書き直す → 取り消し → 書き直すの通常の経路は、保持した種類（丁寧に承諾する）で動いた。書き直しの取り消し: 停止して下書きに「【私が直した文】」を足し、「書き直す」でも提案（「丁寧に承諾する」）でも置き換えた後、「書き直しを取り消す」を押すと、直した文を含む 1 つ前の版が戻り、状態は「停止」に戻り、フォーカスは「書き直しを取り消す」に残り、状態の文は「書き直しを取り消しました。1 つ前の下書きに戻しました。」になった（390×844 と 1440×900）。ダブルクリックしても取り消しは 1 回で、押した後は押せない状態になり、操作のボタンの位置は変わらなかった。キーボード（提案で Enter → Esc → 直す → 提案で Enter → 取り消しで Enter）でも戻った。新しい下書きを直すと取り消しは押せなくなり、生成中も押せず、停止すると押せて、失敗の状態へも戻った。「続きを書く」は、直した下書き（先頭に「【直した】」を足した）を残したまま続きを足し、フォーカスは「続きを書く」に残った。「この下書きを使う」と「書き直す」の後に「採用を取り消す」をダブルクリックしても、返信は元の本文に戻り、取り消しは 1 回だけ。返信欄の Esc は生成を止めず、下書き欄（読み取り専用）の Esc は止めた。生成と失敗の全経路で、`activeElement` が body になることは無く、ページのスクロール位置は動かなかった。動きを減らす設定では、ストリーミングせず、書き終えてから全文が出た。横はみ出し（`scrollWidth` が `innerWidth` を超えること）は、1440・390・320 px のどれにも無かった。他のブラウザー・実機は未検証。スクリーンリーダーでの読み上げは未検証
- 推測の明示: 2 文字・50 ms・700 ms・1.2 秒・8 行は本 skill の目安である。ストリーミングの速さ・停止を出す時間・再生成の上限の出典は取得していない。画面の位置を動かさない設計と、全文を読み上げさせない選択は、NN/g の観察（S120）と本 skill の整理であり、スクリーンリーダーでの実際の読み上げは実機で確かめていない。生成 AI の実際の応答の遅さ・誤りは、擬似では再現していない

## この例の出典

S64、S69、S70、S71、S72、S79、S94、S100、S120、S121、S122、S123、S124、S125、S126、S127、S128。台帳は `../references/sources.md`。

# 例: 送金アプリの確認・失敗・本人確認の文言（騙しの文言の依頼を断る）

送金アプリの確認画面・失敗の文言・本人確認の案内を書き直し、同時に出た 3 つの依頼（手数料を目立たなくする・「あとで」ボタンを貶める・同意を最初からオンにする）を断って、代わりの書き方を示す例。金額と手数料と合計を同じ強さで見せること、取引の成否が不明なときの書き方、資格や権限の問題をエラーにしないこと、断る側の選択肢の文言、既定の同意を扱う。題材は架空の送金アプリで、実在の決済サービスの模倣は含まない。「手数料は小さく書いて、無料キャンペーンを大きく」「『あとで』を押す人を減らしたい」と頼まれたときに開く。配色は 5 例共通の仮置きで、写さない。

## 依頼

- 製品: 架空の送金アプリ「コハク送金」（架空）
- 依頼文（架空）: 「送金の確認画面と、失敗したときの文言を直したい。あと 3 つ頼みたい。手数料は小さく目立たなくして、『手数料無料キャンペーン中』を大きく見せたい。本人確認の『あとで』ボタンは押す人を減らしたいので、『安全を後回しにする』という文言にしたい。お知らせメールの同意のチェックは、最初からオンにしておきたい」
- 現状（架空）: 確認画面は「送金額 12,500円」を大きく、「手数料 110円」を小さな灰色の文字で出す。失敗は「処理に失敗しました（E-1042）」。通信が切れると「エラーが発生しました」。本人確認が終わっていない人には、エラーで「本人確認が完了していないため、送金できません」と出て、ボタンは「OK」だけ
- 想定ユーザーと場面: 友人への立て替えの返金など、1 万円前後を、昼休みにスマートフォンで送る人（置いた前提）。お金に関わるので、慎重に読む
- 範囲外: 手数料の表示義務・資金決済に関する法令・景品表示の適否の判断（法的判断はしない）、本人確認の手続きの設計、不正検知、実際の手数料と限度額

### 根拠の範囲（先に読む）

- 出典のある事実は次のとおり。断る側を貶める文言（confirmshaming）は、罪悪感や恥の感情を引き起こして意思決定に影響を与える（S200。C）。紛らわしい言い回し（trick wording）は、利用者の期待と曖昧な言語を利用して誤解させる（S201。C）。FTC のスタッフ報告は、恥を使って、選択肢を悪い判断として描き、選ばせないようにすることを整理した（S202）。インドの指針は、恐れ・恥・嘲り・罪悪感を生む表現で購入や継続へ誘導する行為と定義する（S203。B）。約 1.1 万の EC サイトで 1,818 件のダークパターンが見つかった（S199）。購読の案内は、利用者が明示的に求めたときだけ（S045）。エラー文は何が起きたかとどう直すかに答える（S081）。責めない（S012・S064）。原因が不明なら、推測でごまかさず、不明と書く（S085）。資格や権限の問題を、エラー文で伝えない（S035）。エラーコードは末尾（S065）。確認の題と主ボタンは、起きる動作を言う（S073）。確認は、作業を放棄する操作には出さない（S059）。この例の送金は、取り消せない操作として、確認画面が現状にある（置いた前提）。「OK」だけにしない（S051）。結論を先に（S141）。しなくてよいことも書く（S142）
- 要旨の参照（逐語引用なし）: エラーは、数字・日付・利用者のデータを入れて具体的にする（S219。Polaris）。何が・なぜ・どうすればの 3 要素（S228。SmartHR）
- 本 skill の目安（出典なし）: 金額・手数料・残高・限度額・取り消しの可否・着金の時刻・キャンペーンの条件・税込の表示・「くり返さないでください」の指示・文言の語・配色・寸法
- 外れる点: 手数料の表示・取り消しの可否・着金の約束は、金融の規制と契約に関わる。本 skill は適否を判断しない。ここで書く値と規則は架空である

## 目的の一文

いくら引かれ、いつ着き、取り消せるかを、同じ強さで読め、失敗のときも、いま何が分かっていて何が分からないかを言う。

## 削るもの

| 前（現状・依頼） | 扱い | 後 | 理由 |
|---|---|---|---|
| 手数料を小さな灰色で出す／依頼: もっと目立たなくする | 断る | 送金額・手数料・合計を、同じ大きさ・同じ色で並べ、「税込」と書く | 条件を、利用者の読む場所から外すと、誤解を生む。利用者の期待と曖昧な表示を利用して誤解させる型に近い（S201。C。本 skill の整理）。法的な適否は判断しない |
| 依頼: 「手数料無料キャンペーン中」を大きく | 条件つきで出す | 「はじめての送金は、手数料が無料です（11 月 30 日（月）まで）」。対象の人にだけ出す | 対象と期限を同じ文の中に。対象外の人に出すと、この送金が無料と読める（S201 に近い。本 skill の整理）。出し分けは挙動の提案 |
| 依頼: 「あとで」→「安全を後回しにする」 | 断る | 「今は進まない」 | 選択肢を悪い判断として描き、選ばせないようにする（S202・S200） |
| 依頼: メール購読のチェックを最初からオン | 断る | チェックなしが既定。文言は「お知らせメールを受け取る」 | 購読は、利用者が明示的に求めたときだけ（S045） |
| 「処理に失敗しました」 | 変える | 何が足りないか・どう直すか | 具体的に（S081・S219） |
| 「エラーが発生しました」（通信切断） | 変える | 送金できたか分からない、と書く | 不明なら不明と書く（S085） |
| 本人確認をエラーで伝える | 外す | 案内（送金の前に、本人確認が必要です） | 資格や権限の問題をエラー文で伝えない（S035） |
| ボタン「OK」 | 変える | 「本人確認を始める」「今は進まない」 | 汎用語を避ける（S051） |

## 構成

3 つの画面。上から、確認画面（送金の前）→ 失敗（残高不足）→ 本人確認の案内。

- 確認画面: 題（金額）→ 送金額・手数料・合計 → 着金の予定 → 取り消しの可否 → 「送金する」「入力に戻る」。画面は現状の構成のまま。文言だけを変える
- 失敗: 何が足りないか（金額つき）→ どうするか → エラーコードは末尾
- 本人確認: 案内の題 → 理由と、かかる時間の目安 → 「本人確認を始める」「今は進まない」

### 依頼を断る 3 件（代わりの書き方）

| 依頼 | 書かない文言 | 代わりの書き方（本 skill の整理） |
|---|---|---|
| 手数料を目立たなくする | 手数料を小さな灰色の補足にする | 金額・手数料・合計を、同じ大きさと色で、同じ行の形に並べる。「税込」を行の中に書く |
| 「あとで」を貶める | 「安全を後回しにする」 | 中立で結果を言う。「今は進まない」。進まないとどうなるか（送金できない）を、案内の本文に書く |
| 同意の既定オン | チェックが入った「お知らせメールを受け取る」 | チェックなしが既定。メールが要るかは、利用者が決める（S045） |

### 画面の提案（文言とは別。この案には含めない）

| 提案 | 理由（本 skill の整理） |
|---|---|
| キャンペーンの案内を、対象の利用者にだけ出す | 対象外の人に出すと、この送金が無料と読める |
| 本人確認の途中で、送金の入力を保存する | 「今は進まない」を押しても、入力が残る |

## 仕様

文言の規則（本 skill の整理。出典があるものは S 番号を添える）:

| 項目 | 規則 | 根拠 |
|---|---|---|
| 金額の見せ方 | 送金額・手数料・合計は同じ大きさ・同じ色。単位は「円」。3 桁ごとにカンマ | 本 skill の整理 |
| 条件 | 「税込」「取り消せません」「着金の予定（日付と時刻の条件）」を、金額の近くに書く | 本 skill の整理（出典なし） |
| 謝る場面 | 取引の成否が不明なときの 1 か所だけ、冒頭に「申し訳ありません」を 1 回 | S041 |
| 責めない | 「入力が間違っています」と言わない。足りない金額を言う | S012・S064 |
| ボタン | 動詞と目的語。金額を入れる（「12,610 円を送金する」は題に、ボタンは「送金する」） | S051・S073 |
| エラーコード | 末尾。「問い合わせ番号」と書く | S065 |
| 和欧間の空白 | 数字・英字と日本語の間に半角の空白を入れる側にそろえる。規範は割れる（入れない側は S123、入れる側は S125） | 本 skill の整理 |
| 文体 | この例は、です・ます調に決めた。規範は割れる（`../references/jp-style.md`）。国の解説・広報等の規則は、です・ますを基調とし、「ございます」は用いない（S128） | S127・S128 |

### 配色（WCAG の相対輝度式による計算）

文字の基準 4.5:1 は、本 skill の台帳に WCAG 本文の逐語が無く未照合。SmartHR の自社基準（要旨・逐語引用なし）は 4.5:1（大きな文字は 3:1。S241）。

| 組み合わせ | ライト | ダーク |
|---|---|---|
| 本文（金額・手数料・合計）/ カードの地 | 14.97（#2A1F24 / #FBF7F8） | 13.87（#F3E9ED / #271C22） |
| 見出し（アクセント）/ カードの地 | 7.13（#9E1F52 / #FBF7F8） | 9.88（#FFB3CF / #271C22） |
| 主ボタンの文字 / 地 | 7.58（#FFFFFF / #9E1F52） | 10.84（#1C1418 / #FFB3CF） |
| 副ボタンの文字 / 副ボタンの地（背景色） | 15.91（#2A1F24 / #FFFFFF） | 15.22（#F3E9ED / #1C1418） |
| 副ボタンの枠線 / カードの地（非文字） | 3.98（#8C7580 / #FBF7F8） | 4.98（#9C8892 / #271C22） |
| カードの枠線 / 背景（非文字） | 4.22（#8C7580 / #FFFFFF） | 5.46（#9C8892 / #1C1418） |
| エラーの文字 / エラーの地 | 6.84（#8F3A00 / #FFF1E6） | 8.25（#FFB27A / #3A2415） |

エラーは、色に加えて、印（▲）と、太字の文を付ける。ラズベリーはボタンと見出しに使い、エラーには使わない。副ボタンの枠線は、カードの地に対して 3:1 を超えるが、4.5:1 には届かない（非文字の基準は WCAG 本文を未照合）。

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| 確認画面の題 | 送金内容の確認 | 12,610 円を送金します | 題が動作と金額を言う（S073） |
| 送金額 | 送金額 12,500円 | 送金額 12,500 円 | 同じ強さで |
| 手数料 | 手数料 110円（小さな灰色） | 手数料 110 円（税込） | 同じ強さで。条件を行の中に（本 skill の整理） |
| 合計 | （なし） | 合計 12,610 円 | 合計を出す |
| 着金の予定 | （なし） | 11 月 16 日（月）の 15:00（日本時間）までの送金は、11 月 17 日（火）までに着きます。 | 条件（時刻）と日付を同じ文の中に（本 skill の整理。架空の運用） |
| 取り消し | （なし） | 送金したあとは、取り消せません。 | 取り消せない、と先に言う（本 skill の整理。取り消せない操作という前提は置いた前提） |
| ボタン | 送金 | 送金する／入力に戻る | 押した結果を言う（S051） |
| 失敗（残高不足） | 処理に失敗しました（E-1042） | 残高が足りません。あと 1,200 円必要です。入金してから、もう一度送金してください。（問い合わせ番号: E-1042） | 金額つきで具体的に（S219）。コードは末尾（S065） |
| 失敗（通信が切れた） | エラーが発生しました | 申し訳ありません。送金できたか、まだ分かりません。送金の履歴で結果を確認してください。確認できるまで、同じ送金を繰り返さないでください。 | 不明と書く（S085）。謝る場面（S041）。履歴は置いた前提 |
| 本人確認（案内の題） | 本人確認が完了していないため、送金できません（エラー） | 送金の前に、本人確認が必要です | エラーにしない（S035）。結論を先に（S141） |
| 本人確認（本文） | （なし） | 本人確認が終わると、送金できます。手続きは、スマートフォンだけで終わります。 | 次の行動。しなくてよいこと（S142）。「スマートフォンだけで」は置いた前提 |
| 本人確認（ボタン） | OK／あとで | 本人確認を始める／今は進まない | 動詞（S051）。中立（S200・S202） |
| メール購読 | □ お知らせメールを受け取る（チェック済み） | □ お知らせメールを受け取る（チェックなし） | 明示的な求めだけ（S045） |

## コード断片

文言の表（JSON。{amount}・{fee}・{total} などの変数は、訳者と実装が位置を動かせる形の置換記号）と、文言を当てはめた 1 ファイルの HTML。ブラウザーで開くとそのまま動く。外部のライブラリ・フォント・画像・計測は使わない。金額の合計と不足額は、画面で計算する（`new Date()` と通信は使わない）。

```json
{
  "confirm.title": "{total} 円を送金します",
  "confirm.amount": "送金額",
  "confirm.fee": "手数料",
  "confirm.fee.note": "（税込）",
  "confirm.total": "合計",
  "confirm.arrival": "11 月 16 日（月）の 15:00（日本時間）までの送金は、11 月 17 日（火）までに着きます。",
  "confirm.irreversible": "送金したあとは、取り消せません。",
  "confirm.submit": "送金する",
  "confirm.back": "入力に戻る",
  "error.balance": "残高が足りません。あと {short} 円必要です。入金してから、もう一度送金してください。（問い合わせ番号: {code}）",
  "error.unknown": "申し訳ありません。送金できたか、まだ分かりません。送金の履歴で結果を確認してください。確認できるまで、同じ送金を繰り返さないでください。",
  "kyc.title": "送金の前に、本人確認が必要です",
  "kyc.body": "本人確認が終わると、送金できます。手続きは、スマートフォンだけで終わります。",
  "kyc.start": "本人確認を始める",
  "kyc.skip": "今は進まない",
  "mail.optin": "お知らせメールを受け取る"
}
```

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>コハク送金 文言の見本</title>
<style>
:root { color-scheme: light dark; --bg:#fff; --surface:#fbf7f8; --text:#2a1f24; --text2:#5e4a52; --accent:#9e1f52; --on-accent:#fff; --line:#8c7580; --err:#8f3a00; --err-bg:#fff1e6; }
@media (prefers-color-scheme: dark) { :root { --bg:#1c1418; --surface:#271c22; --text:#f3e9ed; --text2:#c9b3bd; --accent:#ffb3cf; --on-accent:#1c1418; --line:#9c8892; --err:#ffb27a; --err-bg:#3a2415; } }
* { box-sizing: border-box; }
body { margin:0; background:var(--bg); color:var(--text); font:1rem/1.7 system-ui,"Hiragino Sans","Yu Gothic","Noto Sans JP",sans-serif; }
main { max-width:32rem; margin:0 auto; padding:1rem; }
section { margin:0 0 1rem; padding:.75rem; background:var(--surface); border:2px solid var(--line); border-radius:8px; }
h2 { margin:0 0 .5rem; font-size:1.125rem; color:var(--accent); overflow-wrap:anywhere; }
dl { margin:0 0 .5rem; }
.row { display:flex; justify-content:space-between; gap:.75rem; flex-wrap:wrap; font-size:1.125rem; }
.row dt, .row dd { margin:0; }
.row dd { font-variant-numeric:tabular-nums; }
.total { border-top:2px solid var(--line); margin-top:.25rem; padding-top:.25rem; font-weight:700; }
p { margin:.25rem 0; overflow-wrap:anywhere; }
.err { padding:.25rem .5rem; color:var(--err); background:var(--err-bg); border-left:4px solid var(--err); font-weight:700; }
.btns { display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem; }
button { font:inherit; font-weight:700; min-height:2.75rem; padding:.5rem 1rem; border-radius:6px; cursor:pointer; color:var(--text); background:var(--bg); border:2px solid var(--line); }
button.primary { color:var(--on-accent); background:var(--accent); border-color:var(--accent); }
.k { white-space:nowrap; }
.sr { position:absolute; width:1px; height:1px; overflow:hidden; clip-path:inset(50%); white-space:nowrap; }
input[type=checkbox] { width:1.25rem; height:1.25rem; flex:none; }
label { display:flex; gap:.5rem; align-items:center; margin-top:.5rem; }
:focus-visible { outline:3px solid var(--accent); outline-offset:2px; }
</style>
</head>
<body>
<main>
  <section id="confirm" aria-labelledby="c-title">
    <h2 id="c-title"></h2>
    <dl>
      <div class="row"><dt id="c-amount-l"></dt><dd id="c-amount"></dd></div>
      <div class="row"><dt id="c-fee-l"></dt><dd id="c-fee"></dd></div>
      <div class="row total"><dt id="c-total-l"></dt><dd id="c-total-v"></dd></div>
    </dl>
    <p id="c-arrival"></p>
    <p id="c-irrev"></p>
    <div class="btns"><button class="primary" id="c-submit" type="button"></button><button id="c-back" type="button"></button></div>
    <label><input type="checkbox" id="optin"><span id="optin-l"></span></label>
  </section>
  <section id="fail" aria-label="失敗の見本"><p class="err" id="f-err"></p><p class="err" id="f-unk"></p></section>
  <section id="kyc" aria-labelledby="k-title">
    <h2 id="k-title"></h2><p id="k-body"></p>
    <div class="btns"><button class="primary" id="k-start" type="button"></button><button id="k-skip" type="button"></button></div>
  </section>
</main>
<script>
const S = {
  "confirm.title": "{total} 円を送金します", "confirm.amount": "送金額", "confirm.fee": "手数料", "confirm.fee.note": "（税込）", "confirm.total": "合計",
  "confirm.arrival": "11 月 16 日（月）の 15:00（日本時間）までの送金は、11 月 17 日（火）までに着きます。", "confirm.irreversible": "送金したあとは、取り消せません。",
  "confirm.submit": "送金する", "confirm.back": "入力に戻る",
  "error.balance": "残高が足りません。あと {short} 円必要です。入金してから、もう一度送金してください。（問い合わせ番号: {code}）",
  "error.unknown": "申し訳ありません。送金できたか、まだ分かりません。送金の履歴で結果を確認してください。確認できるまで、同じ送金を繰り返さないでください。",
  "kyc.title": "送金の前に、本人確認が必要です", "kyc.body": "本人確認が終わると、送金できます。手続きは、スマートフォンだけで終わります。",
  "kyc.start": "本人確認を始める", "kyc.skip": "今は進まない", "mail.optin": "お知らせメールを受け取る"
};
const amount = 12500, fee = 110, balance = 11410, total = amount + fee, short = total - balance;
const yen = new Intl.NumberFormat("ja-JP");
const fill = (s, p) => s.replace(/\{(\w+)\}/g, (m, k) => p[k] ?? m);
const TOK = /(\d{1,2} 月 \d{1,2} 日（.）|E-\d+|\d{1,2}:\d{2}(?: ?[AP]M)?|\d[\d,]*(?: ?(?:桁|件|円|名|科目|単位|丁目|時|月|日|courses?|credits?|seats?))|\d{2,4}-\d{2,4}-\d{3,4})/;
function addText(parent, text) {
  text.split(TOK).forEach((part, i) => {
    if (i % 2) { const k = document.createElement("span"); k.className = "k"; k.textContent = part; parent.append(k); }
    else if (part) parent.append(part);
  });
}
const set = (id, text) => { const e = document.getElementById(id); e.replaceChildren(); addText(e, text); };
set("c-title", fill(S["confirm.title"], { total: yen.format(total) }));
set("c-amount-l", S["confirm.amount"]); set("c-amount", yen.format(amount) + " 円");
set("c-fee-l", S["confirm.fee"]); set("c-fee", yen.format(fee) + " 円" + S["confirm.fee.note"]);
set("c-total-l", S["confirm.total"]); set("c-total-v", yen.format(total) + " 円");
set("c-arrival", S["confirm.arrival"]); set("c-irrev", S["confirm.irreversible"]);
set("c-submit", S["confirm.submit"]); set("c-back", S["confirm.back"]); set("optin-l", S["mail.optin"]);
function setErr(id, text) {
  const e = document.getElementById(id); e.replaceChildren();
  const mark = document.createElement("span"); mark.setAttribute("aria-hidden", "true"); mark.textContent = "▲ ";
  const hid = document.createElement("span"); hid.className = "sr"; hid.textContent = "エラー: ";
  e.append(mark, hid); addText(e, text);
}
setErr("f-err", fill(S["error.balance"], { short: yen.format(short), code: "E-1042" }));
setErr("f-unk", S["error.unknown"]);
set("k-title", S["kyc.title"]); set("k-body", S["kyc.body"]); set("k-start", S["kyc.start"]); set("k-skip", S["kyc.skip"]);
</script>
</body>
</html>
```

- メール購読のチェックは、既定でオフ（`checked` 属性を付けていない）
- 手数料の行は、送金額の行と同じ大きさ・同じ色（クラス `row` を共有）。合計の行だけ太字にして区切る
- 失敗の文は、色に加えて印（▲。`aria-hidden`）と太字を付け、隠した「エラー:」の文字を前に置いた。読み上げでの確認は未実施

## 初見検証

確認画面と失敗の画面を初めて見る人に見せて確かめる。結果は、実際に行うまで空欄のまま（作らない）。

| 確かめること | 初見の人が言えるはずのこと | 目安（本 skill の目安。出典なし） |
|---|---|---|
| いくら引かれるか | 「12,610 円」「手数料が 110 円かかる」 | 5 秒 |
| いつ着くか | 「15:00 までなら明日（火曜）までに着く」 | 10 秒 |
| 取り消せるか | 「取り消せない」 | 5 秒 |
| 失敗したとき（残高不足） | 「あと 1,200 円足りない。入金して送り直す」 | 10 秒 |
| 失敗したとき（不明） | 「送れたか分からない。履歴で確かめる。同じ送金を繰り返さない」 | 15 秒 |
| 本人確認 | 「確認すると送金できる」「進まないこともできる」 | 10 秒 |

## 点検

実測したもの（ヘッドレスの Chrome を CDP で操作。幅 1440・390・320 px、ライトとダーク、文字は 100%・`html { font-size: 200% }` を足した場合・ブラウザーの既定の文字サイズを 200% にした場合の 3 通り（ダークは文字 100% だけ）。12 条件。測った日は 2026-11-16）:

| 項目 | 結果 |
|---|---|
| 横のはみ出し（文書の幅・文字の矩形・箱からの突き出し） | 0 件 |
| 日付・時刻・金額・電話番号・コード・数字と単位の塊の、途中での折り返し | 0 件 |
| 禁則（行頭の閉じ括弧・行末の開き括弧） | 0 件 |

- 塊の例は、「11 月 17 日（火）」（曜日までを 1 つの塊）「12,610 円」「E-1042」
- メール購読のチェックの大きさは `rem` で指定し、文字を 200% にすると大きくなる
- 送金額と手数料の行の文字は、描画後の計算値で、どちらも 18px・同じ色（ダークの配色で描画された）・同じ太さ（400）だった。メール購読のチェックは、描画後の文書で未チェックだった
- 計算: 12,500 + 110 = 12,610。不足額は 12,610 − 11,410 = 1,200。日付は、2026-11-16 が月曜日、2026-11-17 が火曜日、2026-11-30 が月曜日であることを、プログラムで確かめた
- ライトとダークの比は、上の表（WCAG の相対輝度式で計算）

確かめていないもの:

- 実際の利用者の理解（初見検証の表は未実施）
- 手数料の表示・取り消しの可否・着金の約束・キャンペーンの表示が、法令と契約に合うか（本 skill の範囲外）
- スクリーンリーダーでの読み上げ（判定は、導入されていれば designer-accessibility）
- 他のブラウザー・OS・端末での見え

点検の項目（`../references/review-checklist.md` から）:

- [x] 金額・手数料・合計を同じ強さで見せた
- [x] 断る側・同意の文言を、貶めず、既定オフにした
- [x] 取引の成否が不明なとき、不明と書いた
- [x] 資格の問題をエラーにしていない
- [x] 頼まれていない確認の画面やボタンを足していない（画面の提案に分けた）
- [ ] 実際の利用者での確認（未確認）

## この例の出典

使った出典の番号（原文・媒体・日付・URL・検証区分は台帳）: S012・S035・S041・S045・S051・S059・S064・S065・S073・S081・S085・S123・S125・S127・S128・S141・S142・S199・S200（C）・S201（C）・S202・S203（B）・S219（要旨）・S228（要旨）・S241（要旨）。台帳は [../references/sources.md](../references/sources.md)。

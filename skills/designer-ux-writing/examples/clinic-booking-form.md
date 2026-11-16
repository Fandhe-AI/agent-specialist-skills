# 例: 診察の予約フォームの文言（入力エラー・ラベル・案内）

初診のオンライン予約フォームの文言を決める例。入力エラーの型（何が起きたか・どう直すか）、質問のラベルの語をエラーに使うこと、入力を消さないこと、資格や権限の問題をエラー文で済ませないこと、プレースホルダーに説明を押し込まないこと、システム側の失敗で謝る場面を扱う。題材は架空の診療所の予約フォームで、実在の医療機関・製品の模倣は含まない。「エラーが『不正な値です』だけで、電話の問い合わせが多い」と相談されたとき、フォームの文言を一式で書き直すときに開く。配色は 5 例共通の仮置きで、写さない。

## 依頼

- 製品: 架空の診療所「あかね内科クリニック」の初診オンライン予約「あかね予約」（架空）
- 依頼文（架空）: 「予約フォームのエラーが『不正な値です』ばかりで、電話の問い合わせが多い。エラー文を一式で書き直したい。ついでに、案内も見てほしい」
- 現状（架空）: 画面の上に「入力内容に誤りがあります」と出る。各欄の下は「不正な値です」だけ。送信すると、入力した内容が消える。症状の欄は、プレースホルダーに書き方の説明が入っている。保険証が無い人には、エラーで「保険証の登録がない方は予約できません」と出る。システムの失敗では「エラーが発生しました」だけ
- 想定ユーザーと場面: 初診の患者（30〜70 代、スマートフォンが中心）。仕事の合間や夜に、診察を入れようとしている（置いた前提）
- 範囲外: 症状の重さや緊急性の判断と案内、個人情報の取り扱いの法的判断、予約の空き枠の決め方、画面の構造や挙動の変更（下の「画面の提案」に分けて書く）

### 根拠の範囲（先に読む）

- 出典のある事実は次のとおり。エラー文は、何が起きたかと、どう直すかに答える（S081・S061）。直し方（訂正方法）を書く（S080）。利用者を責めない（S012・S040）。入力した欄を消さない（S032）。エラー文は質問のラベルの語を使う（S034）。読み上げ向けに隠した「Error:」を前置する部品がある（S036）。資格や権限の問題を、エラー文で伝えない（S035）。入力のエラーを、通知バナーで知らせない（S039）。入力検証で謝る必要は無く、深刻なときだけ謝る（S042・S041）。プレースホルダーを、ラベルや説明の代わりにしない（S038・S079）。しなくてよいことも書くと、不安を軽減できる（S142）。二重否定を避ける（S140）。敬語は多用しない（S130・S131）。早すぎるエラーの表示は、無作法に感じられる（S083）
- 要旨の参照（逐語引用なし）: エラーは何が・なぜ・どうすればの 3 要素（S228。SmartHR）。数字・日付・利用者のデータを入れて具体的にする（S219。Polaris）
- 本 skill の目安（出典なし）: 配色・寸法・文言の語の選び方・依頼の言い方を「〜してください」にそろえ、ほかの敬語表現を付けない規則・入力例と文中の日付の形の使い分け・休診日・受付時間・件数
- 外れる点: 英語の指針の議論（sorry・please）を日本語へ移す部分は、すべて本 skill の整理である。出典は日本語の画面の場面を述べていない

## 目的の一文

どの欄の何が合っていないかを、質問のラベルの語で言い、直し方まで 1 文で言う。入力は消さない。

## 削るもの

| 前（現状） | 扱い | 後 | 理由 |
|---|---|---|---|
| 「不正な値です」 | 変える | 何が合っていないか・どう直すか | 何が起きたかと直し方に答える（S081） |
| 「入力内容に誤りがあります」（画面上部の通知バナー） | 変える | エラー要約（件数と、各欄へのリンク） | 入力エラーを通知バナーで出さない（S039） |
| 送信後に入力が消える | 変える（挙動の提案に分ける） | 入力を残す | 入力を消さない（S032） |
| 症状欄のプレースホルダーの説明 | 変える | ラベルの下の、常に見える説明 | 入力すると消える。説明の代わりにしない（S038・S079） |
| 「保険証の登録がない方は予約できません」のエラー | 外す | 予約前の案内 | 資格の問題をエラー文で伝えない（S035）。しなくてよいことも書く（S142） |
| 「エラーが発生しました」 | 変える | 何が起きたか・入力は残っていること・次の行動 | 原因が不明なら、不明と書く（S085） |

## 構成

画面は 1 ページ。上から、案内（予約前に知ってほしいこと）→ エラー要約（エラーがあるときだけ）→ 4 つの欄（氏名・生年月日・電話番号・希望日）→ 症状の欄 → 確認ボタン。

- 案内: 予約に保険証の登録は要らない、来院時に受付で出す（置いた前提）。しなくてよいことを先に言う（S142）
- エラー要約: 現状の画面上部の領域を使い、文言を、件数と、直す欄のラベルの語の一覧にする（S034）。各項目を欄へのリンクにすることと、送信後に焦点を要約へ移すことは、挙動の変更なので、下の「画面の提案」に含める。コードの見本は、その提案を入れた形で動く
- 欄ごとのエラー: 欄のすぐ下に、印（▲）と文を出す。例（「例: …」）は、次の行に出す（番号や日付を途中で割らないため）。色だけで示さない（S023 の考え方の応用）
- エラーを出すのは、確認ボタンを押したときだけ。入力中に出さない（S083）

### 画面の提案（文言とは別。この案には含めない）

次は挙動や画面の変更で、文言の依頼の範囲外。必要なら別の提案にする。

| 提案 | 理由（本 skill の整理） |
|---|---|
| 生年月日を、年・月・日の 3 つの欄に分ける | 形式の誤りそのものが減る。文言で直すより先に、起きない設計を問う（S063） |
| 休診日を、日付の選択の段階で選べなくする | 休診日のエラーが起きなくなる |
| 送信失敗のとき、入力を保存して再送できるようにする | 入力を消さない（S032）は、挙動として実装が要る |
| エラー要約の各項目を欄へのリンクにし、送信後に焦点を要約へ移す | 欄を探す手間が減る（本 skill の整理）。支援技術での効果は未確認 |

## 仕様

文言の規則（本 skill の整理。出典があるものは S 番号を添える）:

| 項目 | 規則 | 根拠 |
|---|---|---|
| 文体 | この例は、です・ます調に決めた（規範は割れる。`../references/jp-style.md`）。ラベルは体言（氏名・生年月日）。ボタンは動詞 | S121・S127・S051 |
| 依頼の言い方 | 「〜してください」にそろえる（直し方の文も、案内の文も）。「恐れ入りますが」「お願いいたします」は付けない | S130・S131 |
| エラー文の構成 | 1 文目で何が合っていないか、2 文目で直し方。ラベルの語を主語にする | S081・S034 |
| 謝る場面 | システム側の失敗の 1 か所だけ、冒頭に「申し訳ありません」を 1 回。入力の誤りでは謝らない | S041・S042 |
| 責めない | 「入力が間違っています」「正しく入力してください」と言わない | S012・S082 |
| 日付 | 文の中は「12 月 2 日（水）」。入力例は「1985/4/7」。役割で使い分ける | 本 skill の整理 |
| 用語 | 予約・診察日・氏名・生年月日・電話番号・症状（下の用語集） | S087 |
| 和欧間の空白 | 数字・英字と日本語の間に、半角の空白を入れる側にそろえる。規範は割れる（入れない側は S123、入れる側は S125）。この例は入れる側に決めた | 本 skill の整理 |

用語集（この例の分）:

| 語 | 定義 | 使わない語 |
|---|---|---|
| 予約 | 診察の日時を取ること | 申し込み・申込・受付予約 |
| 診察日 | 診察を受ける日 | 受診日・来院日 |
| 氏名 | 患者の名前 | お名前・患者名 |
| 症状 | いま困っていること | 主訴・病状 |

### 配色（WCAG の相対輝度式による計算）

文字の基準 4.5:1 は、本 skill の台帳に WCAG 本文の逐語が無く未照合。SmartHR の自社基準（要旨・逐語引用なし）は 4.5:1（大きな文字は 3:1。S241）。入力欄の枠線は、非文字として 3:1 を目安にした（WCAG 本文は未照合）。

| 組み合わせ | ライト | ダーク |
|---|---|---|
| 本文 / 背景 | 15.91（#2A1F24 / #FFFFFF） | 15.22（#F3E9ED / #1C1418） |
| 本文 / 案内の地 | 14.97（#2A1F24 / #FBF7F8） | 13.87（#F3E9ED / #271C22） |
| 補助文字 / 背景 | 8.15（#5E4A52 / #FFFFFF） | 9.17（#C9B3BD / #1C1418） |
| アクセント（リンク・見出し）/ 背景 | 7.58（#9E1F52 / #FFFFFF） | 10.84（#FFB3CF / #1C1418） |
| ボタンの文字 / ボタンの地 | 7.58（#FFFFFF / #9E1F52） | 10.84（#1C1418 / #FFB3CF） |
| 入力欄の枠線 / 背景（非文字） | 4.22（#8C7580 / #FFFFFF） | 5.46（#9C8892 / #1C1418） |
| エラーの文字 / エラーの地 | 6.84（#8F3A00 / #FFF1E6） | 8.25（#FFB27A / #3A2415） |

エラーは、アクセントのラズベリーと区別するため、橙寄りの茶色にした。色に加えて、印（▲）と、太字の文を付ける。

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| 案内（フォームの上） | （なし） | 予約に保険証の登録は要りません。来院したとき、受付で保険証を出してください。 | しなくてよいことを先に言う（S142）。資格をエラーで伝えない（S035） |
| 氏名（空） | 不正な値です | 氏名を入力してください。 | ラベルの語を使う（S034） |
| 生年月日（今日より後） | 不正な値です | 生年月日が、今日より後の日付になっています。西暦の年を確認してください。 | 何が合っていないかと、直す箇所（S081） |
| 生年月日（形式） | 不正な値です | 生年月日を、西暦の年・月・日の順で入力してください。例: 1985/4/7 | 形式と例（S080・S219 の考え方） |
| 電話番号 | 不正な値です | 電話番号は、数字とハイフンで 10 桁か 11 桁になるように入力してください。例: 000-0000-0000 | 条件を具体的に（S219 の考え方） |
| 希望日（休診日） | 不正な値です | 12 月 2 日（水）は休診日です。診察は、月・火・木・金・土曜（祝日を除く）です。別の日を選んでください。 | 利用者のデータを入れて具体的に（S219）。休診日は置いた前提 |
| 希望日（形式） | 不正な値です | 希望日を、西暦の年・月・日の順で入力してください。（改行して）例: 2026/12/3 | 形式と例（S080） |
| 希望日（過ぎた日） | 不正な値です | 12 月 1 日（火）は過ぎた日です。今日より後の日を選んでください。 | 利用者のデータを入れて具体的に（S219） |
| エラー要約の題 | 入力内容に誤りがあります | 入力を確認してください（4 件） | 件数と、直す欄。入力エラーを通知バナーで出さない（S039） |
| 症状（ラベルの下の説明） | プレースホルダーに入っていた書き方の説明 | いつから、どこが、どのように困っているかを、分かる範囲で書いてください。 | 常に見える場所に置く（S038・S079） |
| 送信の失敗 | エラーが発生しました | 申し訳ありません。予約を送信できませんでした。入力した内容は残っています。もう一度送信してください。続く場合は、電話でお問い合わせください。 | システム側の失敗で謝る（S041）。直し方（S080）。原因は不明なので推測しない（S085） |
| 確認ボタン | 送信 | 予約内容を確認する | 押した結果を言う（S051） |

## コード断片

文言の表（JSON）と、文言を当てはめた 1 ファイルの HTML。ブラウザーで開くとそのまま動く。外部のライブラリ・フォント・画像・計測は使わない。文言は `textContent` で入れ、生の文字列を `innerHTML` に入れない。「今日」は 2026/11/16（月）に固定してある（`new Date()` を使わない）。エラーは確認ボタンを押したときだけ出す。開いた直後は、エラーを出した状態を見せるため、初期値で一度だけ検査する。

```json
{
  "summary.title": "入力を確認してください（{count} 件）",
  "name.empty": "氏名を入力してください。",
  "birth.future": "生年月日が、今日より後の日付になっています。西暦の年を確認してください。",
  "birth.format": "生年月日を、西暦の年・月・日の順で入力してください。\n例: 1985/4/7",
  "phone.format": "電話番号は、数字とハイフンで 10 桁か 11 桁になるように入力してください。\n例: 000-0000-0000",
  "date.closed": "{date}は休診日です。診察は、月・火・木・金・土曜（祝日を除く）です。別の日を選んでください。",
  "date.format": "希望日を、西暦の年・月・日の順で入力してください。\n例: 2026/12/3",
  "date.past": "{date}は過ぎた日です。今日より後の日を選んでください。",
  "system.fail": "申し訳ありません。予約を送信できませんでした。入力した内容は残っています。もう一度送信してください。続く場合は、電話でお問い合わせください。"
}
```

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>あかね予約 初診の予約</title>
<style>
:root { color-scheme: light dark; --bg:#fff; --surface:#fbf7f8; --text:#2a1f24; --text2:#5e4a52; --accent:#9e1f52; --on-accent:#fff; --line:#8c7580; --err:#8f3a00; --err-bg:#fff1e6; }
@media (prefers-color-scheme: dark) { :root { --bg:#1c1418; --surface:#271c22; --text:#f3e9ed; --text2:#c9b3bd; --accent:#ffb3cf; --on-accent:#1c1418; --line:#9c8892; --err:#ffb27a; --err-bg:#3a2415; } }
* { box-sizing: border-box; }
body { margin:0; background:var(--bg); color:var(--text); font:1rem/1.7 system-ui,"Hiragino Sans","Yu Gothic","Noto Sans JP",sans-serif; }
main { max-width:36rem; margin:0 auto; padding:1rem; }
h1 { margin:0 0 .5rem; font-size:1.375rem; color:var(--accent); overflow-wrap:anywhere; }
.note { margin:0 0 1rem; padding:.5rem .75rem; background:var(--surface); border-left:4px solid var(--accent); }
.field { margin:0 0 1rem; }
label { display:block; font-weight:700; }
.hint { margin:0 0 .25rem; color:var(--text2); overflow-wrap:anywhere; }
input, textarea { width:100%; font:inherit; color:inherit; background:var(--bg); border:2px solid var(--line); border-radius:6px; padding:.5rem; }
.err { margin:.25rem 0 0; padding:.25rem .5rem; color:var(--err); background:var(--err-bg); border-left:4px solid var(--err); font-weight:700; overflow-wrap:anywhere; }
[aria-invalid="true"] { border-color:var(--err); }
.k { white-space:nowrap; }
.sr { position:absolute; width:1px; height:1px; overflow:hidden; clip-path:inset(50%); white-space:nowrap; }
#summary { margin:0 0 1rem; padding:.5rem .75rem; color:var(--err); background:var(--err-bg); border:2px solid var(--err); }
#summary h2 { margin:0; font-size:1rem; }
#summary ul { margin:.25rem 0 0; padding-left:1.25rem; }
#summary a { color:inherit; font-weight:700; }
button { font:inherit; font-weight:700; min-height:2.75rem; padding:.5rem 1rem; color:var(--on-accent); background:var(--accent); border:0; border-radius:6px; cursor:pointer; }
:focus-visible { outline:3px solid var(--accent); outline-offset:2px; }
#status { margin-top:1rem; }
</style>
</head>
<body>
<main>
<h1>初診の予約</h1>
<p class="note">予約に保険証の登録は要りません。来院したとき、受付で保険証を出してください。</p>
<div id="summary" hidden></div>
<form id="f" novalidate>
  <div class="field"><label for="name">氏名</label><input id="name" name="name" autocomplete="name"><p class="err" id="name-err" hidden></p></div>
  <div class="field"><label for="birth">生年月日</label><p class="hint" id="birth-hint">西暦で、年・月・日の順に入力します。例: 1985/4/7</p><input id="birth" name="birth" autocomplete="bday" value="2027/4/7" aria-describedby="birth-hint"><p class="err" id="birth-err" hidden></p></div>
  <div class="field"><label for="phone">電話番号</label><p class="hint" id="phone-hint">当日の連絡に使います。例: <span class="k">000-0000-0000</span></p><input id="phone" name="phone" type="tel" autocomplete="tel" value="090-000" aria-describedby="phone-hint"><p class="err" id="phone-err" hidden></p></div>
  <div class="field"><label for="date">希望日</label><p class="hint" id="date-hint">月・火・木・金・土曜（祝日を除く）から選びます。例: 2026/12/3</p><input id="date" name="date" value="2026/12/2" aria-describedby="date-hint"><p class="err" id="date-err" hidden></p></div>
  <div class="field"><label for="memo">症状</label><p class="hint" id="memo-hint">いつから、どこが、どのように困っているかを、分かる範囲で書いてください。</p><textarea id="memo" name="memo" rows="3" aria-describedby="memo-hint"></textarea></div>
  <button type="submit">予約内容を確認する</button>
</form>
<p id="status" role="status"></p>
</main>
<script>
const S = {
  "summary.title": "入力を確認してください（{count} 件）",
  "name.empty": "氏名を入力してください。",
  "birth.future": "生年月日が、今日より後の日付になっています。西暦の年を確認してください。",
  "birth.format": "生年月日を、西暦の年・月・日の順で入力してください。\n例: 1985/4/7",
  "phone.format": "電話番号は、数字とハイフンで 10 桁か 11 桁になるように入力してください。\n例: 000-0000-0000",
  "date.closed": "{date}は休診日です。診察は、月・火・木・金・土曜（祝日を除く）です。別の日を選んでください。",
  "date.format": "希望日を、西暦の年・月・日の順で入力してください。\n例: 2026/12/3",
  "date.past": "{date}は過ぎた日です。今日より後の日を選んでください。",
  "system.fail": "申し訳ありません。予約を送信できませんでした。入力した内容は残っています。もう一度送信してください。続く場合は、電話でお問い合わせください。"
};
const TODAY = Date.UTC(2026, 10, 16), WD = "日月火水木金土";
const $ = (id) => document.getElementById(id);
const TOK = /(\d{1,2}:\d{2}(?: ?[AP]M)?|\d[\d,]*(?: ?(?:桁|件|円|名|科目|単位|丁目|時|月|日|courses?|credits?|seats?))|\d{2,4}-\d{2,4}-\d{3,4})/;
function addText(parent, text) {
  text.split(TOK).forEach((part, i) => {
    if (i % 2) { const k = document.createElement("span"); k.className = "k"; k.textContent = part; parent.append(k); }
    else if (part) parent.append(part);
  });
}
const fill = (s, p) => s.replace(/\{(\w+)\}/g, (m, k) => p[k] ?? m);
function parseDate(v) {
  const m = /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/.exec(v.trim());
  if (!m) return null;
  const t = Date.UTC(+m[1], +m[2] - 1, +m[3]), d = new Date(t);
  return d.getUTCMonth() === +m[2] - 1 && d.getUTCDate() === +m[3] ? { t, d } : null;
}
function check() {
  const out = [];
  if (!$("name").value.trim()) out.push(["name", "name.empty", {}]);
  const b = parseDate($("birth").value);
  if (!b) out.push(["birth", "birth.format", {}]); else if (b.t > TODAY) out.push(["birth", "birth.future", {}]);
  const digits = $("phone").value.replace(/\D/g, "").length;
  if (!/^\d{2,4}-\d{2,4}-\d{3,4}$/.test($("phone").value.trim()) || digits < 10 || digits > 11) out.push(["phone", "phone.format", {}]);
  const r = parseDate($("date").value);
  if (!r) out.push(["date", "date.format", {}]);
  else {
    const dt = (r.d.getUTCMonth() + 1) + " 月 " + r.d.getUTCDate() + " 日（" + WD[r.d.getUTCDay()] + "）";
    if (r.t <= TODAY) out.push(["date", "date.past", { date: dt }]);
    else if ([0, 3].includes(r.d.getUTCDay())) out.push(["date", "date.closed", { date: dt }]);
  }
  return out;
}
function show(errs) {
  ["name", "birth", "phone", "date"].forEach((id) => { $(id + "-err").hidden = true; $(id).removeAttribute("aria-invalid");
    if ($(id + "-hint")) $(id).setAttribute("aria-describedby", id + "-hint"); else $(id).removeAttribute("aria-describedby"); });
  const box = $("summary"); box.replaceChildren(); box.hidden = errs.length === 0;
  if (!errs.length) return;
  const h = document.createElement("h2"); h.tabIndex = -1; addText(h, fill(S["summary.title"], { count: errs.length })); box.append(h);
  const ul = document.createElement("ul");
  errs.forEach(([id, key, p]) => {
    const li = document.createElement("li"), a = document.createElement("a");
    a.href = "#" + id; a.textContent = document.querySelector('label[for="' + id + '"]').textContent; li.append(a); ul.append(li);
    const e = $(id + "-err"); e.replaceChildren();
    const mark = document.createElement("span"); mark.setAttribute("aria-hidden", "true"); mark.textContent = "▲ ";
    const hid = document.createElement("span"); hid.className = "sr"; hid.textContent = "エラー: ";
    e.append(mark, hid);
    fill(S[key], p).split("\n").forEach((line, i) => { if (i) e.append(document.createElement("br")); addText(e, line); });
    e.hidden = false;
    $(id).setAttribute("aria-invalid", "true"); $(id).setAttribute("aria-describedby", ($(id + "-hint") ? id + "-hint " : "") + id + "-err");
  });
  box.append(ul);
}
$("f").addEventListener("submit", (ev) => {
  ev.preventDefault(); const errs = check(); show(errs); $("status").replaceChildren();
  if (errs.length) box_focus(); else $("status").textContent = "見本のため、ここで止まる。";
});
function box_focus() { const h = $("summary").querySelector("h2"); if (h) h.focus(); }
show(check());
if (location.hash === "#fail") addText($("status"), "▲ " + S["system.fail"]);
</script>
</body>
</html>
```

- 入力は消さない。`show` は欄の値に触れない
- エラーの要素は、欄の説明（`-hint`。ある欄だけ）と一緒に `aria-describedby` に入れる。電話番号の例（000-0000-0000）は、実在しない架空の書式。読み上げでの確認は未実施

## 初見検証

この文言を初めて読む人（初診の患者）に、エラーの画面を見せて確かめる。結果は、実際に行うまで空欄のまま（作らない）。

| 確かめること | 初見の人が言えるはずのこと | 目安（本 skill の目安。出典なし） |
|---|---|---|
| 何が起きたか | 「4 つの欄を直す必要がある」「どの欄か」 | 10 秒 |
| 何に注意するか | 「生年月日が今日より後になっている」「電話番号の桁が足りない」 | 10 秒 |
| どうするか | 「希望日を、休診日以外に変える」 | 10 秒 |
| 資格の不安 | 「保険証が無くても予約できる」 | 5 秒 |
| 入力は残るか | 「入力した内容は、消えない」 | 5 秒 |

## 点検

実測したもの（ヘッドレスの Chrome を CDP で操作。幅 1440・390・320 px、ライトとダーク、文字は 100%・`html { font-size: 200% }` を足した場合・ブラウザーの既定の文字サイズを 200% にした場合の 3 通り（ダークは文字 100% だけ）。状態は、開いた直後・形式の誤りを入れて送信・正しい値を入れて送信の 3 つ。36 条件。測った日は 2026-11-16）:

| 項目 | 結果 |
|---|---|
| 横のはみ出し（文書の幅・文字の矩形・箱からの突き出し） | 0 件 |
| 日付・時刻・金額・電話番号・コード・数字と単位の塊の、途中での折り返し | 0 件 |
| 禁則（行頭の閉じ括弧・行末の開き括弧） | 0 件 |

- 塊の例は、「12 月 2 日」「10 桁」「000-0000-0000」。日付と曜日の間では折り返してよい規則に従う（SKILL.md）
- アクセシビリティツリーで、欄の名前は「氏名」「生年月日」などで、説明にヒントと、隠した「エラー:」つきのエラー文が入る。名前に余分な空白は入らない。欄を直して送信し直すと、直した欄の説明はヒントだけに戻り、要約が「3 件」になり、焦点は要約の見出しにある
- 検査の範囲: 電話番号は 12 桁の入力でエラー、希望日は空・不正な値・過ぎた日でエラーになる
- 開いた直後に、エラーが 4 件出て、要約の題が「4 件」になる。送信の失敗の文（`system.fail`）は、URL の末尾に `#fail` を付けると描画される
- ライトとダークの比は、上の表（WCAG の相対輝度式で計算）

確かめていないもの:

- 実際の患者の理解（初見検証の表は未実施）
- スクリーンリーダーでの読み上げ（`aria-describedby` と隠した「エラー:」の効果は未確認。判定は、導入されていれば designer-accessibility）
- 他のブラウザー・OS・端末での見え。ブラウザー本体の文字サイズの設定での拡大（近似だけ）
- 医療の表現として適切か、診療所の規程に合うか（本 skill の範囲外）

点検の項目（`../references/review-checklist.md` から）:

- [x] ラベルの語をエラーに使った
- [x] 入力は消さない（検査の関数が欄の値に触れない）
- [x] 資格をエラー文で伝えていない
- [x] 謝る場面を 1 か所に決めた
- [x] 画面の提案を、文言の案から分けた
- [ ] 実際の利用者の理解（未確認）

## この例の出典

使った出典の番号（原文・媒体・日付・URL・検証区分は台帳）: S012・S023・S032・S034・S035・S036・S038・S039・S040・S041・S042・S051・S061・S063・S079・S080・S081・S082・S083・S085・S087・S121・S123・S125・S127・S130・S131・S140・S142・S219（要旨）・S228（要旨）・S241（要旨）。台帳は [../references/sources.md](../references/sources.md)。

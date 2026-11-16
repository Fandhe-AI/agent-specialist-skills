# 例: 履修登録の用語集と、日英の文字列リソース

大学の履修登録の画面の文言で、用語の揺れを 1 つの用語集にまとめ、文字列を連結せず、複数形と語順を訳者が扱える形（ICU MessageFormat 風）に直し、英語版を同時に用意する例。用語集の作り方（語・定義・使わない語・例）、文字列に UI の位置を埋め込まないこと、ユーモアの除去、締め切りの日付と時間帯を省かないこと、訳での長さの伸びを扱う。題材は架空の大学で、実在の大学・システムの模倣は含まない。「画面ごとに用語がばらばらで、英語版を出すので訳せる形にしたい」と相談されたときに開く。配色は 5 例共通の仮置きで、写さない。

## 依頼

- 製品: 架空の大学「きたかぜ大学」の履修登録の画面「きたかぜ履修」（架空）
- 依頼文（架空）: 「留学生向けに英語版を出す。日本語の文言を、訳せる形の文字列に直してほしい。画面ごとに『履修』『受講』『登録』『申請』がばらばらなので、用語も整えたい」
- 現状（架空）: 画面の題は「受講申請」、ボタンは「履修を登録」、メールは「履修申込を受け付けました」。登録済みの数は、コードで「登録済みの科目は」+ 数 +「科目、合計」+ 数 +「単位です」と連結している。「右上の『確定』ボタンを押すと、履修が登録されます」。定員の表示は「満員御礼！」。締め切りは「11 月 30 日 17 時」とだけ書いている
- 想定ユーザーと場面: 日本語を母語とする学生と、英語を使う留学生。学期の初めに、スマートフォンかパソコンで履修を登録する（置いた前提）
- 範囲外: 翻訳の正確さの判断・英訳の品質の保証、履修の規程、抽選の方法、画面の構造や挙動の変更

### 根拠の範囲（先に読む）

- 出典のある事実は次のとおり。共通の語の一覧を作って参照する（S087）。同じものに別の名前を使うと、訳者は別の概念と受け取る（S088）。文を複数の文字列に分割すると、文法と文の構造を決め込み、訳しにくい（S096）。変数を含む文字列は、訳者が語順を変えられるよう、変数の位置を示す印を置く（S097）。連結した文字列では、訳者が部品を並べ替えられない（S098・S101）。複数形は、文法上の必要で選ぶ（S100）。単一の形しか持たない言語にも other を使う（S099）。短い原文ほど、訳文は長くなりやすい（S102）。ユーモアは訳しにくく、文化に依存するので避ける（S016）。原文と訳文を、同じページに併記しない（S094）。色や位置だけで指す表現を単独で使わない（S023）。ボタンは動詞（S051）。カタカナ語は 4 つの考え方で対応する（S090）。文書内で敬体か常体に統一する（S121）
- 要旨の参照（逐語引用なし）: CLDR の言語別の複数形の表で、日本語は基数・序数とも other のみ（S231。R）。MessageFormat 2.0 は、資料間で位置づけが揃っていない（S231）。メッセージ文字列は翻訳者が管理し、利用者の入力から組み立てない。値は差し込み後に再解析せず、`textContent` で入れる（本 skill の整理）。SmartHR は、カタカナ語を使う前に、漢字語での言い換えを検討する（S229）
- 本 skill の目安（出典なし）: 用語集の語の選び方・文言の語・英訳（本 skill は英語の正確さを判断しない）・字数の比・配色・寸法・日付と時間帯の書き方
- 外れる点: 文字列リソースの書式は、ICU MessageFormat 風の記法で、実装の文書で確かめてから使う（S098・S231）。この例の変換関数は、plural の最小部分だけを実装した見本で、ICU の実装ではない

## 目的の一文

訳者が画面を見なくても訳せる文字列にし、日本語と英語で同じものを同じ語で呼ぶ。

## 削るもの

| 前（現状） | 扱い | 後 | 理由 |
|---|---|---|---|
| 「受講申請」「履修を登録」「履修申込」 | 1 つにする | 「履修登録」 | 同じものに別の語を使わない（S087・S088） |
| 数を連結した文（「登録済みの科目は」+ n +「科目、…」） | 変える | 1 つの文字列に、変数と複数形 | 連結すると、訳者が並べ替えられない（S096・S098） |
| 「右上の『確定』ボタンを押すと」 | 変える | 「『登録を確定』を押すと」 | 位置を文字列に埋め込まない（S023 の考え方の応用） |
| 「満員御礼！」 | 変える | 「定員に達しました。」 | ユーモアを避ける（S016） |
| 「11 月 30 日 17 時」 | 変える | 日付・曜日・時刻・時間帯を書く | 留学生は、日本時間と分からないと誤る（本 skill の整理） |
| 「残り枠は n 枠です」 | 変える | 文全体を 1 つの文字列に。単複を言語ごとに | 複数形は文法上の必要で選ぶ（S100） |

## 構成

3 つの成果物。

1. 用語集（CSV）: 語・英語・定義・使わない語・訳者への注
2. 文字列リソース（JSON。ICU MessageFormat 風）: 日本語と英語。キーは同じ。文を分割しない
3. 見本の HTML: 同じ画面を日本語と英語で並べ、変数と複数形が動くことを見る。見本のため同じページに並べた。実際は別のページにする（併記は支援技術で問題が出る。S094）

### 用語集の作り方（この例の分）

1. 画面の文字列を書き出し、同じものを指す語を集める（履修登録・履修申込・受講申請・受講登録の 4 通り）
2. どれを採るかを、読み手と文書の種類で決める。採った語を 1 つにする
3. 使わない語を記録する。校正ツールの規則に入れると、再発を止められる（本 skill の整理）
4. カタカナ語は 4 つの判断（S090）。「キャンパス」「ポータル」などは、読み手に確かめて決める（この例では対象外）
5. 英語の対応語を 1 対 1 で決める。1 つの日本語に複数の英語を当てない（S088）

### 文字列の規則

- 文を断片で作らない。文全体を 1 つの文字列にし、変数は文中の位置を動かせる形にする（S096・S097・S098）
- 複数形は、言語ごとに持つ。日本語は other のみ（S231。R）。英語は one と other
- 文字列に UI の位置（「右上の」）や色を埋め込まない。ボタンの名前で指す
- 日付と時刻は、翻訳する文字列の外で整形し、変数として渡す。時間帯を書く（本 skill の整理）
- ユーモアと慣用句を使わない（S016）
- 長さ: 短い原文ほど、訳文は長くなりやすい（S102）。ボタンと見出しは、伸びても収まる幅にする。この例の英語は、日本語より長い（下の「点検」に実測値）

## 仕様

| 項目 | 規則 | 根拠 |
|---|---|---|
| 用語 | 用語集の語だけを使う。使わない語を画面に出さない | S087・S088 |
| 文体 | この例は、です・ます調に決めた（規範は割れる。`../references/jp-style.md`）。ボタンは動詞。英語は文の大文字化（sentence case）の側にそろえる（S030・S037・S021 が採る側。英語版を持つので決めて記録する） | S121・S051 |
| 複数形 | `plural` を使う。ja は other のみ、en は one と other | S099・S100・S231 |
| 変数 | 名前つき（`{courses}`）。位置は文字列の中で動かせる | S097・S098 |
| 日付・時刻 | ja: 11 月 30 日（月）17:00（日本時間）。en: Monday, Nov 30, 5:00 PM (Japan Standard Time)。整形は文字列の外 | 本 skill の整理 |
| 和欧間の空白（ja） | 数字・英字と日本語の間に半角の空白を入れる側にそろえる。規範は割れる（入れない側は S123、入れる側は S125） | 本 skill の整理 |

### 配色（WCAG の相対輝度式による計算）

文字の基準 4.5:1 は、本 skill の台帳に WCAG 本文の逐語が無く未照合。SmartHR の自社基準（要旨・逐語引用なし）は 4.5:1（大きな文字は 3:1。S241）。

| 組み合わせ | ライト | ダーク |
|---|---|---|
| 本文 / カードの地 | 14.97（#2A1F24 / #FBF7F8） | 13.87（#F3E9ED / #271C22） |
| 補助文字（見出しのラベル・字数）/ 背景 | 8.15（#5E4A52 / #FFFFFF） | 9.17（#C9B3BD / #1C1418） |
| 見出し（アクセント）/ 背景 | 7.58（#9E1F52 / #FFFFFF） | 10.84（#FFB3CF / #1C1418） |
| カードの枠線 / 背景（非文字） | 4.22（#8C7580 / #FFFFFF） | 5.46（#9C8892 / #1C1418） |

## 文言

用語集（CSV。英語の訳語は、見本としての本 skill の案で、翻訳の正確さは判断しない）:

```csv
term_ja,term_en,definition,avoid,note_for_translator
履修登録,course registration,学期に学ぶことを、大学に届け出ること,履修申込・受講申請・受講登録,画面の題とボタンと通知メールで同じ語を使う
科目,course,大学が開く、学ぶ内容のまとまり,講義・授業・クラス,個々の開講の 1 コマではなく、まとまりを指す
単位,credit,学んで認められたときに得られる数,ポイント,数える語。複数形あり
定員,capacity,受け入れる人数の上限,枠,「残りの定員」は seats remaining
抽選,lottery,希望者が多いときに、くじで決めること,選考,
確定,confirm,内容をこれ以上変えないと決めること,送信,ボタンの文言は文字列リソースの confirm.hint を参照
締め切り,deadline,受け付ける最後の日時,期限・〆,時間帯を必ず添える
時間割,timetable,曜日と時限で並べた表,スケジュール,
```

日本語と英語の対照（before は現状、after は文字列リソースの値）:

| キー | before（ja） | after（ja） | after（en） | 理由 |
|---|---|---|---|---|
| registered.summary | 登録済みの科目は n 科目、合計 m 単位です（連結） | 登録済みの科目は {courses, plural, other {# 科目}}、合計 {credits, plural, other {# 単位}}です。 | You are registered for {courses, plural, one {# course} other {# courses}} ({credits, plural, one {# credit} other {# credits}} in total). | 連結を解き、複数形を言語ごとに（S098・S100） |
| deadline | 締め切りは 11 月 30 日 17 時です | 履修登録の締め切りは、{date}の {time}（日本時間）です。 | The course registration deadline is {time} on {date} (Japan Standard Time). | 語順を訳者が動かせる（S097）。時間帯（本 skill の整理） |
| confirm.hint | 右上の「確定」ボタンを押すと、履修が登録されます | 「登録を確定」を押すと、履修が登録されます。 | Select "Confirm registration" to register for the course. | 位置を埋め込まない |
| seats | 残り枠は n 枠です | 残りの定員は {seats, plural, other {# 名}}です。 | {seats, plural, one {# seat remains} other {# seats remain}}. | 動詞の一致まで含めて 1 文（S100） |
| full | 満員御礼！ | 定員に達しました。 | This course is full. | ユーモアを避ける（S016） |
| lottery.won | ○○さんの履修希望は抽選に当選しました | {name}さんの履修希望（{course}）は、抽選の結果、登録されました。 | {name}, your request for {course} was accepted in the lottery. | 名前の位置を動かせる |

「抽選に当選しました」を「抽選の結果、登録されました」に変えたのは、用語集の「抽選」と「登録」の役割をそろえるため（本 skill の整理）。

## コード断片

文字列リソース（JSON。ICU MessageFormat 風）と、変数と複数形を最小限で動かす 1 ファイルの HTML。ブラウザーで開くとそのまま動く。外部のライブラリ・フォント・画像・計測は使わない。文言は `textContent` で入れる。ICU の実装ではなく、`plural` の最小部分だけを実装した見本で、実際は採用する実装（ICU や、MessageFormat 2.0 の実装）を使う。MessageFormat 2.0 は、資料間で位置づけが揃っていない（S231）。

```json
{
  "ja": {
    "registered.summary": "登録済みの科目は {courses, plural, other {# 科目}}、合計 {credits, plural, other {# 単位}}です。",
    "deadline": "履修登録の締め切りは、{date}の {time}（日本時間）です。",
    "confirm.hint": "「登録を確定」を押すと、履修が登録されます。",
    "seats": "残りの定員は {seats, plural, other {# 名}}です。",
    "full": "定員に達しました。",
    "lottery.won": "{name}さんの履修希望（{course}）は、抽選の結果、登録されました。"
  },
  "en": {
    "registered.summary": "You are registered for {courses, plural, one {# course} other {# courses}} ({credits, plural, one {# credit} other {# credits}} in total).",
    "deadline": "The course registration deadline is {time} on {date} (Japan Standard Time).",
    "confirm.hint": "Select \"Confirm registration\" to register for the course.",
    "seats": "{seats, plural, one {# seat remains} other {# seats remain}}.",
    "full": "This course is full.",
    "lottery.won": "{name}, your request for {course} was accepted in the lottery."
  }
}
```

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>きたかぜ履修 文字列の見本</title>
<style>
:root { color-scheme: light dark; --bg:#fff; --surface:#fbf7f8; --text:#2a1f24; --text2:#5e4a52; --accent:#9e1f52; --line:#8c7580; }
@media (prefers-color-scheme: dark) { :root { --bg:#1c1418; --surface:#271c22; --text:#f3e9ed; --text2:#c9b3bd; --accent:#ffb3cf; --line:#9c8892; } }
* { box-sizing: border-box; }
body { margin:0; background:var(--bg); color:var(--text); font:1rem/1.7 system-ui,"Hiragino Sans","Yu Gothic","Noto Sans JP",sans-serif; }
main { max-width:40rem; margin:0 auto; padding:1rem; }
h1 { margin:0 0 .5rem; font-size:1.25rem; color:var(--accent); }
article { margin:0 0 .75rem; padding:.5rem .75rem; background:var(--surface); border:2px solid var(--line); border-radius:8px; overflow-wrap:anywhere; }
h2 { margin:0; font-size:.875rem; font-weight:400; color:var(--text2); }
p { margin:.25rem 0; }
.k { white-space:nowrap; }
.len { color:var(--text2); font-size:.875rem; }
</style>
</head>
<body>
<main>
<h1>きたかぜ履修 文字列の見本</h1>
<div id="root"></div>
</main>
<script>
const M = {
  ja: {
    "registered.summary": "登録済みの科目は {courses, plural, other {# 科目}}、合計 {credits, plural, other {# 単位}}です。",
    "deadline": "履修登録の締め切りは、{date}の {time}（日本時間）です。",
    "confirm.hint": "「登録を確定」を押すと、履修が登録されます。",
    "seats": "残りの定員は {seats, plural, other {# 名}}です。",
    "full": "定員に達しました。",
    "lottery.won": "{name}さんの履修希望（{course}）は、抽選の結果、登録されました。"
  },
  en: {
    "registered.summary": "You are registered for {courses, plural, one {# course} other {# courses}} ({credits, plural, one {# credit} other {# credits}} in total).",
    "deadline": "The course registration deadline is {time} on {date} (Japan Standard Time).",
    "confirm.hint": "Select \"Confirm registration\" to register for the course.",
    "seats": "{seats, plural, one {# seat remains} other {# seats remain}}.",
    "full": "This course is full.",
    "lottery.won": "{name}, your request for {course} was accepted in the lottery."
  }
};
const A = {
  ja: { date: "11 月 30 日（月）", time: "17:00", name: "山田 太郎", course: "統計入門" },
  en: { date: "Monday, Nov 30", time: "5:00 PM", name: "Taro Yamada", course: "Introduction to Statistics" }
};
const samples = [
  { label: "1 科目・1 単位・残り 1 名", n: { courses: 1, credits: 1, seats: 1 } },
  { label: "5 科目・10 単位・残り 12 名", n: { courses: 5, credits: 10, seats: 12 } }
];
const TOK = /((?:Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day, [A-Z][a-z]{2} \d{1,2}|\d{1,2}:\d{2}(?: ?[AP]M)?|\d[\d,]*(?: ?(?:桁|件|円|名|科目|単位|丁目|時|月|日|courses?|credits?|seats?))|\d{2,4}-\d{2,4}-\d{3,4})/;
function addText(parent, text) {
  text.split(TOK).forEach((part, i) => {
    if (i % 2) { const k = document.createElement("span"); k.className = "k"; k.textContent = part; parent.append(k); }
    else if (part) parent.append(part);
  });
}
function block(text, from) {
  let depth = 1, j = from;
  while (j < text.length && depth) { if (text[j] === "{") depth++; else if (text[j] === "}") depth--; j++; }
  return j;
}
function fmt(msg, args, loc) {
  let out = "", i = 0;
  while (i < msg.length) {
    if (msg[i] !== "{") { out += msg[i++]; continue; }
    const end = block(msg, i + 1), inner = msg.slice(i + 1, end - 1);
    const m = /^(\w+)\s*(?:,\s*plural\s*,\s*([\s\S]*))?$/.exec(inner);
    if (!m) { out += "{" + inner + "}"; i = end; continue; }
    const v = args[m[1]];
    if (!m[2]) { out += String(v); i = end; continue; }
    const cases = {}; let pos = 0, mm;
    while ((mm = /^\s*(\w+)\s*\{/.exec(m[2].slice(pos)))) {
      const s = pos + mm[0].length, e = block(m[2], s);
      cases[mm[1]] = m[2].slice(s, e - 1); pos = e;
    }
    const cat = new Intl.PluralRules(loc).select(v);
    out += fmt((cases[cat] || cases.other).replace(/#/g, v.toLocaleString(loc)), args, loc);
    i = end;
  }
  return out;
}
const root = document.getElementById("root");
samples.forEach((sm) => {
  const h = document.createElement("h2"); addText(h, sm.label); root.append(h);
  ["registered.summary", "seats"].forEach((key) => {
    const art = document.createElement("article");
    ["ja", "en"].forEach((loc) => {
      const p = document.createElement("p"); p.lang = loc;
      addText(p, fmt(M[loc][key], Object.assign({}, A[loc], sm.n), loc)); art.append(p);
    });
    root.append(art);
  });
});
const fixed = document.createElement("article");
["deadline", "confirm.hint", "full", "lottery.won"].forEach((key) => {
  ["ja", "en"].forEach((loc) => {
    const p = document.createElement("p"); p.lang = loc; addText(p, fmt(M[loc][key], A[loc], loc)); fixed.append(p);
  });
});
root.append(fixed);
const len = document.createElement("p"); len.className = "len";
const keys = Object.keys(M.ja), jl = keys.reduce((a, k) => a + fmt(M.ja[k], Object.assign({}, A.ja, samples[1].n), "ja").length, 0), el = keys.reduce((a, k) => a + fmt(M.en[k], Object.assign({}, A.en, samples[1].n), "en").length, 0);
len.textContent = "字数（5 科目の場合、全 " + keys.length + " 文字列）: ja " + jl + " / en " + el + " / 比 " + (el / jl).toFixed(2);
root.append(len);
</script>
</body>
</html>
```

- 複数形の区分は `Intl.PluralRules` で決める。日本語は other のみ、英語は one と other（描画後の文書で確かめた）
- 日付と時刻は、文字列の外で整形して渡している。見本の値は固定で、現在時刻を使っていない

## 初見検証

文字列リソースと用語集を、初めて受け取る人（翻訳者）に渡して確かめる。結果は、実際に行うまで空欄のまま（作らない）。

| 確かめること | 初見の人が言えるはずのこと | 目安（本 skill の目安。出典なし） |
|---|---|---|
| 文脈なしで訳せるか | 画面を見ずに、キーと注だけで訳せる | 1 文字列 30 秒 |
| 語の対応 | 「履修登録」が常に course registration になる | 質問する |
| 複数形 | 1 科目と 5 科目で、英語が文法的に合う | 質問する |
| 位置の指示 | 「右上の」が残っていない | 目で確かめる |
| 日付 | 日本時間であることが、英語でも分かる | 5 秒 |

## 点検

実測したもの（ヘッドレスの Chrome を CDP で操作。幅 1440・390・320 px、ライトとダーク、文字は 100%・`html { font-size: 200% }` を足した場合・ブラウザーの既定の文字サイズを 200% にした場合の 3 通り（ダークは文字 100% だけ）。12 条件。測った日は 2026-11-16）:

| 項目 | 結果 |
|---|---|
| 横のはみ出し（文書の幅・文字の矩形・箱からの突き出し） | 0 件 |
| 日付・時刻・金額・電話番号・コード・数字と単位の塊の、途中での折り返し | 0 件 |
| 禁則（行頭の閉じ括弧・行末の開き括弧） | 0 件 |

- 塊の例は、「5 科目」「10 credits」「5:00 PM」「Monday, Nov 30」。日本語と英語の両方が対象
- 描画後の文書で、日本語は `# 科目` が常に other で出ること、英語は 1 のとき `1 course`・`1 credit`・`1 seat remains`、5 のとき `5 courses`・`10 credits`・`12 seats remain` になることを確かめた
- 字数の比は、描画後の文書に出た値で、6 つの文字列（5 科目の場合。固有名詞を含む）の合計が ja 143 字・en 317 字・比 2.22。この例の文字列だけの値で、一般の伸び率ではない（S102 は、短い原文ほど伸びやすいと述べる）。英語は、日本語の 2 倍を超えて長くなる文字列がある。ボタンや見出しは、この伸びを見込んだ幅にする
- 2026-11-30 が月曜日であることを、プログラムで確かめた
- ライトとダークの比は、上の表（WCAG の相対輝度式で計算）

確かめていないもの:

- 英訳の品質・用語の対応が実際の大学の用語に合うか（本 skill の範囲外）
- 実際の翻訳者による、文脈なしでの訳しやすさ（初見検証の表は未実施）
- ICU・MessageFormat 2.0 の実装での動作（見本は plural の最小部分だけ）
- 他の言語（複数形の区分が多い言語）での動作
- スクリーンリーダーでの `lang` の切り替えの読み上げ（未確認。判定は、導入されていれば designer-accessibility）
- 他のブラウザー・OS・端末での見え

点検の項目（`../references/review-checklist.md` から）:

- [x] 用語集と、文字列で、同じものを同じ語で呼んでいる
- [x] 文を連結していない。変数の位置を動かせる
- [x] 複数形を言語ごとに持つ
- [x] UI の位置・ユーモアを除いた
- [x] 日付に時間帯を添えた
- [ ] 翻訳者での確認（未実施）

## この例の出典

使った出典の番号（原文・媒体・日付・URL・検証区分は台帳）: S016・S021・S023・S030・S037・S051・S087・S088・S090・S094・S096・S097・S098・S099・S100・S101・S102・S121・S123・S125・S229（要旨）・S231（R。要旨）・S241（要旨）。台帳は [../references/sources.md](../references/sources.md)。

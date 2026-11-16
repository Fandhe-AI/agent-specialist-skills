# 例: 既存画面の監査報告書（運行情報ページ）

架空の鉄道会社の運行情報ページを、達成基準の番号で判定し、結果を「適合・不適合・該当なし・未確認」に分け、実測した範囲と、読み上げ・音声操作が要る未確認を分けて報告する例。題材は架空で、実在の製品・企業の画面の模倣は含まない。「自動検査は通ったので、アクセシビリティ対応済みっぽくしたい」「監査報告書にしてほしい」と相談されたとき、報告書の骨格と、判定の書き方を決めるときに開く。部品の作り直しは `menu-and-tabs-rebuild.md`、時間制限は `timed-application-flow.md`。

## 依頼

- 製品: 架空の鉄道会社「やまぶき鉄道」の Web の運行情報ページ（架空）。路線ごとの状況・更新ボタン・駅名の検索・お知らせ・駅の一覧がある 1 ページ
- 依頼文（架空）: 「運行情報ページを、アクセシビリティ対応済みっぽくしたい。自動検査のスコアは満点だった。監査の報告書として出して、直すところも教えてほしい」
- 現状（監査の対象。架空）: 状況は色つきの丸だけで、文字が無い。お知らせは自動で流れ続ける。焦点の輪郭を消している。固定ヘッダーが付いている。更新ボタンの結果は、ふつうの文として差し込まれる。文字は `px` で固定している
- リンク先: `notice.html`・`contact.html`・`stations/*.html` は、別ページの架空の相対 URL で、例の範囲外（ページの中の `#top`・`#st` は実在する）
- 想定ユーザー: 毎朝見る通勤の人、拡大鏡で見る人、キーボードだけで操作する人、スクリーンリーダーの人、動きで気分が悪くなる人
- 確かめた環境: Chrome 157（ヘッドレス、1280 × 800 を既定）。アクセシビリティツリーは、ブラウザーが公開する名前・役割・状態の書き出し。支援技術は使っていない（2026-11-16）
- 範囲外: 実際の読み上げ（VoiceOver・NVDA・JAWS・TalkBack）、音声操作、利用者による理解、複数ページにまたがる基準、法的な判断

### 根拠の範囲（先に読む）

- 出典のある事実: 達成基準の本文（S008・S010・S011・S014・S015・S016・S017・S018・S019・S021・S022・S025・S031）。コントラストを丸めない（S037）。比の式（S013）。自動検査の限界（S136・S137・S138）。スコアは各監査の合否の加重平均（S141）
- 達成基準の本文は、台帳の引用（見出しと本文の最初の部分）で判定する。例外の全文は WCAG 2.2 本体で確かめる。台帳に原文が無い基準（音声のみ・映像のみ、複数ページに関わる基準、AAA の多く）は、この例は判定しない（`../references/audit-checklist.md` の「台帳に原文が無い基準」）
- 達成基準の日本語名は本 skill の訳。WAIC は WCAG 2.2 の日本語訳を更新している（S099 の見出し）ので、日本語名で照合するときは、訳の版を確かめる
- 本 skill の目安（出典なし）: 試験の方式（1 ページ・3 状態）、実測の手順、報告書の文面、色・寸法・時間。判定に使う基準の値は出典あり
- 実測の値は、この環境（Chrome 157・ヘッドレス）の値。他のブラウザー・OS・版は未検証

## 目的の一文

運行情報ページを達成基準の番号で判定し、「実測で確かめた結果」と「読み上げ・音声操作が要るので未確認の結果」を分けた報告書にして、直し方まで渡す。

## 削るもの

| 削るもの | 理由 | 代わりに |
|---|---|---|
| 総合点（「満点」「A 評価」） | Lighthouse のスコアは、各監査の合否の加重平均（S141）。検出されたエラーが無いことは、適合を意味しない（S136） | 達成基準ごとの 4 区分 |
| 「全項目に適合」の総括 | 未確認を含む。台帳に原文の無い基準は判定していない | 適合・不適合・該当なし・未確認の件数 |
| 自動検査の指摘の羅列 | ツールはアクセシビリティを決められない（S137）。簡易点検に通っても重大な障壁は残りうる（S138） | 実測の根拠（ツリー・順路・比・幅） |
| 読み上げの結果の推測 | 実際には読み上げていない | 「未確認」と、確かめる方法 |
| 全ページの判定 | 1 ページ・3 状態だけを見た | 範囲に明記。方式は WCAG-EM（S139）で別に決める |

## 構成

報告書の骨格（`../references/audit-checklist.md` の 1）に沿う。

| 節 | この例の内容 |
|---|---|
| 対象と版 | 運行情報ページ。初期・更新後・狭い幅の 3 状態。WCAG 2.2 の AA |
| 環境 | Chrome 157（ヘッドレス）。支援技術なし |
| 要約 | 適合 8・不適合 8・該当なし 1・未確認 3 |
| 項目 | 下の判定表 |
| 未確認 | 読み上げ・音声操作・3.2.6 ほか |
| 限界 | 自動検査の結果と、実測の範囲 |

## 仕様

### 判定表（監査の対象のページ）

「根拠」の列で、実測は本 skill の環境の値、出典は台帳の番号。

| 基準 | 結果 | 場所・状態 | 根拠 |
|---|---|---|---|
| 1.1.1 非テキストのコンテンツ | 不適合 | 状況の丸印。ツリーで、状況の列のセルが名前を持たない（3 路線とも） | 実測。S008 |
| 1.4.1 色の使用 | 不適合 | 平常・遅れ・見合わせを、色の違いだけで示す | 実測。S010 |
| 1.4.3 コントラスト（最低限） | 適合 | 本文 12.63:1（#333333 / #FFFFFF）、リンク 5.75:1（#356A1E / #EEF3E6）。いずれも 4.5:1 以上 | 計算。S011・S013 |
| 1.4.4 文字のサイズ変更 | 未確認 | ブラウザーの文字サイズ設定を 32 にしても、本文は 14 px のまま（`px` 固定）。「200%」をページ全体の拡大で満たすと読むかは、基準の本文と Understanding で確かめる | 実測。S014 |
| 1.4.10 リフロー | 不適合 | 幅 320 px で `scrollWidth` が 560 px。表の最小幅（560 px）による横スクロール。2 次元の配置が要る内容への例外は、引用が縦スクロールの条件までなので WCAG 本体で確かめる。この表は 3 列で、列を縦に積んでも意味が失われないため、例外に当たらないと判断した（本 skill の整理） | 実測。S015 |
| 1.4.11 非テキストのコントラスト | 不適合 | 駅名の入力欄の枠が #BBBBBB で、白地に 1.92:1。入力欄を見分ける他の手がかりが無い場合。判定の細部は WCAG 本文と Understanding で確かめる | 計算。S016 |
| 1.4.12 文字の間隔 | 適合 | 行の高さ 1.5・段落後 2・字間 0.12・語間 0.16 に上書きして、はみ出し・切り取りが無い | 実測。S017 |
| 2.1.1 キーボード | 適合 | Tab で、リンク・ボタン・入力欄の全てに届く（47 か所） | 実測。S018 |
| 2.2.2 一時停止・停止・非表示 | 不適合 | お知らせが自動で流れ続け（20 秒周期）、止める手段が無い。動きを減らす設定でも動き続ける | 実測。S019・S074 |
| 2.4.7 焦点の可視 | 不適合 | 全ての操作部品で `outline: none`（47 か所） | 実測。S021 |
| 2.4.11 焦点が隠れない | 不適合 | Shift+Tab で戻ると、固定ヘッダーの下に、リンク 2 つの全体が隠れる（矩形の被覆 100%）。ほかに 1 つは 36% だけ覆われた（AA の不適合ではなく、AAA の 2.4.12 の対象。改善の推奨） | 実測。S022・S036 |
| 2.4.2 ページの題 | 適合 | `title` が「運行情報 ｜ やまぶき鉄道」（ページの主題と、サイト名。区切りは縦線） | 実測。S021 |
| 3.1.1 ページの言語 | 適合 | `lang="ja"` | 実測。S026 |
| 2.4.3 焦点の順序 | 適合 | Tab の順路が DOM の順（見た目の順）と同じで、正の `tabindex` が無い | 実測。S021 |
| 2.5.8 ターゲットの大きさ | 適合 | 閉じるボタンは 20 × 20 px で 24 px 未満。ただし 24 px 直径の円が、隣の検索ボタンの枠に交差しない（円の半径 12 px に対し、中心から隣の枠まで 14 px）。近くに他の小さいターゲットは無いので、小さいターゲットの円どうしの条件も満たす。間隔の例外を満たす | 実測。S025 |
| 4.1.2 名前・役割・値 | 適合 | ボタン・入力欄の名前がツリーに出る。閉じるボタンは `aria-label` で名前を持つ | 実測。S030 |
| 4.1.3 ステータスメッセージ | 不適合 | 更新の結果が、ツリーで通常の文として出る。`status` ではない（焦点は動かない） | 実測。S031 |
| 3.3.8 認証（最低限） | 該当なし | このページには、認証の手順が無い | 実測（ツリーに入力欄は駅名の検索だけ）。S029 |
| 3.2.6 一貫した助け | 未確認 | 1 ページだけを見た。複数のページで同じ順序かは見ていない | S026 |
| 実際の読み上げ（全般） | 未確認 | VoiceOver・NVDA・JAWS・TalkBack で読んでいない。状態メッセージが実際に読み上げられるか、状況の読み上げ順 | 確かめる方法は `../references/audit-checklist.md` の 3 |

- 要約: 適合 8（1.4.3・1.4.12・2.1.1・2.4.2・2.4.3・2.5.8・3.1.1・4.1.2）、不適合 8（1.1.1・1.4.1・1.4.10・1.4.11・2.2.2・2.4.7・2.4.11・4.1.3。1.1.1 と 1.4.1 は同じ丸印が原因なので、原因は 7 か所）、該当なし 1（3.3.8）、未確認 3 行（1.4.4・3.2.6・実際の読み上げ）
- 2.5.8 は、20 px だから不適合、とは書かない。数値と例外の両方を見て判定する（S025）
- 1.4.4 の判定を保留にしたのは、基準の読み方が台帳の引用だけでは決まらないため。未確認を適合と書かない

### 直し方（対応表）

| 不適合 | 原因 | 直し方 |
|---|---|---|
| 1.1.1・1.4.1 | 色だけの丸印 | 文字（平常運転・遅れ・運転見合わせ）と、形（丸・三角・四角）を足す。形は装飾（`aria-hidden`）で、意味は文字が持つ |
| 1.4.10 | 表の最小幅 560 px | 表をやめ、行のまとまり（リスト）にして、容器の幅が狭いとき 1 列にする。閾値は `rem` |
| 1.4.11 | 入力欄の枠 #BBBBBB | 枠を #5B6B57 にする（白地で 5.70:1） |
| 2.2.2 | 自動で流れるお知らせ | 流れる表示をやめ、静的な 1 文にする。動きが無いので動きを減らす設定も要らない |
| 2.4.7 | `outline: none` | `:focus-visible` に 3 px の輪郭を付ける。色は #14230F、オフセット 2 px |
| 2.4.11 | 固定ヘッダー | `scroll-padding-top` を、ヘッダーの高さに足す。ヘッダーは高さを固定せず、折り返せる。狭い幅では固定をやめる |
| 4.1.3 | 差し込まれた文 | 最初から DOM とツリーにある `role="status"` の領域へ文を入れる（S051。領域と文を同時に差し込むと読み上げられないのが通常。S238）。空のときも `display: none` にしない（本 skill の実測: `display: none` の間は、領域がツリーに無い）。焦点は動かさない。同じ文を入れ直しても、ツリーの内容は変わらないので、時刻を文に含める |

### ダークの配色（`prefers-color-scheme: dark`）

ダークは、同じ変数を入れ替える（地 #12170F・文字 #E9EFE4・補助の文字 #B9C6B1・線 #8C9E83・緑 #8FCB6E・緑の上の文字 #10200A・面 #1C2418・焦点の輪郭 #F4F8EF・警告 #E9B949・誤り #FF9F8A）。色は WCAG の相対輝度式（S013）で計算した。文字は 4.5:1（S011）、境界・状態・焦点の輪郭は 3:1（S016）以上を目安にする。焦点の輪郭は、オフセット 2 px で隣が地になり、緑のボタンに接する（オフセット 0）と #F4F8EF / #8FCB6E は 1.79:1 で 3:1 未満になる。強制カラーでは色を上書きされるので、印は形（下線・輪郭の太さ）にも持たせる。

| 項目 | 値 | 比 |
|---|---|---|
| 本文 | #E9EFE4 / #12170F | 15.52:1 |
| リンク | #8FCB6E / #12170F（ヘッダーは #1C2418 の上で 8.32:1） | 9.47:1 |
| ボタン | #10200A / #8FCB6E | 8.87:1 |
| 入力欄の枠 | #8C9E83 / #12170F | 6.35:1（1.4.11。S016） |
| 状況の形 | 平常 #8FCB6E・遅れ #E9B949・見合わせ #FF9F8A（地 #12170F） | 9.47:1・9.96:1・9.16:1 |
| 焦点の輪郭 | #F4F8EF（地 #12170F） | 16.90:1 |

## 文言

報告書の文面（要約）と、直した後の画面の文言。

| 場所 | 文言 | 意図 |
|---|---|---|
| 報告書の要約 | 「適合 8・不適合 8・該当なし 1・未確認 3（1.4.4・3.2.6・実際の読み上げ）。自動検査の通過は適合の証拠にならないため、点数は付けない」 | 総合点を付けない理由を 1 文で |
| 報告書の未確認 | 「1.4.4: 文字だけの拡大の判定を保留。理由は基準の読み方（ページ全体の拡大を含むか）」 | 保留の理由を書く |
| 状況（直した後） | 平常運転／遅れ／運転見合わせ | 色以外の手がかり。文字が意味を持つ |
| 更新の結果 | 「更新しました。遅れ・見合わせは 2 路線です。」 | 結果を 1 文で。焦点は動かさない |
| お知らせ | 「春のダイヤ改正について。詳しくはこちら」 | 流さず、静的な 1 文にする |

## コード断片

直した後のページ全体（外部の資源なし。`[hidden]` を上書きしていない。更新で DOM を作り直さないので、焦点は更新ボタンに残る）。

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>運行情報 | やまぶき鉄道</title>
<style>
:root{
  color-scheme:light dark; --bg:#FFFFFF; --on-brand:#FFFFFF; --media:#14230F;
  --ink:#1B2617; --muted:#4A5846; --line:#5B6B57; --brand:#356A1E;
  --soft:#F4F7EE; --focus:#14230F; --warn:#7A5200; --stop:#A3260A; --header-h:3.5rem;
}
html{ scroll-padding-top:calc(var(--header-h) + .5rem); }
body{ margin:0; font:1rem/1.7 system-ui,"Hiragino Sans","Noto Sans JP",sans-serif; color:var(--ink); background:var(--bg); }
:focus-visible{ outline:3px solid var(--focus); outline-offset:2px; }
a{ color:var(--brand); }

.yb-header{ box-sizing:border-box; display:flex; flex-wrap:wrap; align-items:center; gap:.25rem 1rem; min-height:var(--header-h);
  padding:.25rem 1rem; background:var(--soft); border-bottom:1px solid var(--line); }
.yb-header a, .yb-stations a{ color:var(--brand); display:inline-block; min-height:1.5rem; padding:.125rem .25rem; }
@media (min-width:40rem){ .yb-header{ position:sticky; top:0; } }

.yb-main{ padding:0 1rem 2rem; }
.yb-btn, .yb-q{ font:inherit; min-height:2.5rem; padding:.25rem .75rem; border:2px solid var(--line); border-radius:.25rem; background:var(--bg); color:var(--ink); }
.yb-btn{ background:var(--brand); border-color:var(--brand); color:var(--on-brand); }
.yb-search{ display:flex; flex-wrap:wrap; align-items:center; gap:.5rem; }
.yb-search .yb-q{ flex:1 1 10rem; min-width:0; max-width:100%; box-sizing:border-box; }
#yb-live:not(:empty){ margin:.5rem 0; padding:.5rem .75rem; border-left:.25rem solid var(--brand); background:var(--soft); }

.yb-wrap{ container-type:inline-size; }
.yb-lines{ list-style:none; margin:0; padding:0; }
.yb-lines li{ display:grid; grid-template-columns:8rem 12rem 1fr; gap:.25rem 1rem; padding:.5rem 0; border-top:1px solid var(--line); }
@container (max-width:40rem){ .yb-lines li{ grid-template-columns:1fr; } }
.yb-state{ display:inline-flex; align-items:center; gap:.375rem; font-weight:700; }
.yb-ic{ width:1rem; height:1rem; flex:none; }
.yb-ic--ok{ fill:var(--brand); } .yb-ic--late{ fill:var(--warn); } .yb-ic--stop{ fill:var(--stop); }

.yb-stations{ list-style:none; margin:0; padding:0; display:grid; gap:.25rem 1rem; grid-template-columns:repeat(auto-fill,minmax(min(10rem,100%),1fr)); }
@media (forced-colors:active){ .yb-btn{ border-color:ButtonText; } }
@media (prefers-color-scheme:dark){
  :root{ --bg:#12170F; --ink:#E9EFE4; --muted:#B9C6B1; --line:#8C9E83; --brand:#8FCB6E; --on-brand:#10200A;
    --soft:#1C2418; --focus:#F4F8EF; --warn:#E9B949; --stop:#FF9F8A; --err:#FF9F8A; --media:#0B0F09; }
}
</style>
</head>
<body>
<header class="yb-header">
  <strong>やまぶき鉄道</strong>
  <nav aria-label="主要"><a href="#top">運行情報</a> <a href="#st">駅・路線</a> <a href="contact.html">お問い合わせ</a></nav>
</header>
<main class="yb-main" id="top">
  <h1>運行情報</h1>
  <p>春のダイヤ改正について。<a href="notice.html">詳しくはこちら</a></p>
  <p><button type="button" class="yb-btn" id="yb-refresh">最新の情報に更新</button>
     <span id="yb-time">12:40 現在</span></p>
  <div id="yb-live" role="status"></div>
  <h2>路線別の状況</h2>
  <div class="yb-wrap"><ul class="yb-lines">
    <li><span>山吹線</span>
      <span class="yb-state"><svg class="yb-ic yb-ic--ok" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><circle cx="8" cy="8" r="7"/></svg>平常運転</span>
      <span>遅れはありません。</span></li>
    <li><span>川沿線</span>
      <span class="yb-state"><svg class="yb-ic yb-ic--late" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M8 1 15 15H1z"/></svg>遅れ</span>
      <span>約 15 分の遅れ。</span></li>
    <li><span>丘の上線</span>
      <span class="yb-state"><svg class="yb-ic yb-ic--stop" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><rect x="1" y="1" width="14" height="14"/></svg>運転見合わせ</span>
      <span>再開の見込みは 13:30 ごろ。</span></li>
  </ul></div>
  <h2 id="st">駅の情報</h2>
  <form class="yb-search"><label for="yb-q">駅名</label> <input class="yb-q" id="yb-q" type="search" autocomplete="off"> <button class="yb-btn" type="submit">検索</button></form>
  <ul class="yb-stations">
    <li><a href="stations/1.html">駅の情報 1</a></li>
    <li><a href="stations/2.html">駅の情報 2</a></li>
    <li><a href="stations/3.html">駅の情報 3</a></li>
    <li><a href="stations/4.html">駅の情報 4</a></li>
    <li><a href="stations/5.html">駅の情報 5</a></li>
    <li><a href="stations/6.html">駅の情報 6</a></li>
    <li><a href="stations/7.html">駅の情報 7</a></li>
    <li><a href="stations/8.html">駅の情報 8</a></li>
    <li><a href="stations/9.html">駅の情報 9</a></li>
    <li><a href="stations/10.html">駅の情報 10</a></li>
    <li><a href="stations/11.html">駅の情報 11</a></li>
    <li><a href="stations/12.html">駅の情報 12</a></li>
    <li><a href="stations/13.html">駅の情報 13</a></li>
    <li><a href="stations/14.html">駅の情報 14</a></li>
    <li><a href="stations/15.html">駅の情報 15</a></li>
    <li><a href="stations/16.html">駅の情報 16</a></li>
    <li><a href="stations/17.html">駅の情報 17</a></li>
    <li><a href="stations/18.html">駅の情報 18</a></li>
    <li><a href="stations/19.html">駅の情報 19</a></li>
    <li><a href="stations/20.html">駅の情報 20</a></li>
    <li><a href="stations/21.html">駅の情報 21</a></li>
    <li><a href="stations/22.html">駅の情報 22</a></li>
    <li><a href="stations/23.html">駅の情報 23</a></li>
    <li><a href="stations/24.html">駅の情報 24</a></li>
    <li><a href="stations/25.html">駅の情報 25</a></li>
    <li><a href="stations/26.html">駅の情報 26</a></li>
    <li><a href="stations/27.html">駅の情報 27</a></li>
    <li><a href="stations/28.html">駅の情報 28</a></li>
    <li><a href="stations/29.html">駅の情報 29</a></li>
    <li><a href="stations/30.html">駅の情報 30</a></li>
    <li><a href="stations/31.html">駅の情報 31</a></li>
    <li><a href="stations/32.html">駅の情報 32</a></li>
    <li><a href="stations/33.html">駅の情報 33</a></li>
    <li><a href="stations/34.html">駅の情報 34</a></li>
    <li><a href="stations/35.html">駅の情報 35</a></li>
    <li><a href="stations/36.html">駅の情報 36</a></li>
    <li><a href="stations/37.html">駅の情報 37</a></li>
    <li><a href="stations/38.html">駅の情報 38</a></li>
    <li><a href="stations/39.html">駅の情報 39</a></li>
    <li><a href="stations/40.html">駅の情報 40</a></li>
  </ul>
</main>
<script>
function clock(sec) {
  var d = new Date(), p = function (n) { return String(n).padStart(2, '0'); };
  return p(d.getHours()) + ':' + p(d.getMinutes()) + (sec ? ':' + p(d.getSeconds()) : '');
}
document.getElementById('yb-refresh').addEventListener('click', function () {
  document.getElementById('yb-time').textContent = clock(false) + ' 現在';
  document.getElementById('yb-live').textContent = '更新しました（' + clock(true) + '）。遅れ・見合わせは 2 路線です。';
});
</script>
</body>
</html>
```

### コントラストの計算（素の JS）

本文の比は、WCAG の式（S013）で計算した値である。相対輝度は、sRGB の成分を 255 で割り、0.04045 以下なら 12.92 で割り、そうでなければ ((v + 0.055) / 1.055) の 2.4 乗にして、0.2126・0.7152・0.0722 の重みで足す（S013）。比は (明るい方 + 0.05) / (暗い方 + 0.05)（S013）。色を変えたら、次の関数で再計算する。

```js
// WCAG 2.2 の相対輝度とコントラスト比（hex は '#RRGGBB'）。丸めずに返す。判定には丸めた値を使わない。
function luminance(hex) {
  var c = [1, 3, 5].map(function (i) {
    var v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
function contrast(a, b) {
  var x = luminance(a), y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}
```

関数の出力（小数第 4 位。判定には丸めない。S037）:

| 前景 / 背景 | 比 | 本文の表記 |
|---|---|---|
| #356A1E / #FFFFFF | 6.4981 | 6.50:1 |
| #1B2617 / #FFFFFF | 15.7160 | 15.72:1 |
| #356A1E / #F4F7EE | 5.9985 | 6.00:1 |
| #14230F / #FFFFFF | 16.4441 | 16.44:1 |
| #14230F / #356A1E | 2.5306 | 2.53:1 |
| #A3260A / #FFFFFF | 7.3971 | 7.40:1 |
| #333333 / #FFFFFF | 12.6347 | 12.63:1 |
| #BBBBBB / #FFFFFF | 1.9198 | 1.92:1 |
| #E9EFE4 / #12170F | 15.5228 | 15.52:1 |
| #8FCB6E / #12170F | 9.4665 | 9.47:1 |

## 初見検証

報告書を初めて読む担当者に、次を確かめる。

| 問い | 期待する答え |
|---|---|
| 何に注意するか | 不適合が 8 件あり、うち 1.1.1 と 1.4.1 は同じ丸印が原因。未確認の 3 つは、読み上げなどで確かめる必要がある |
| 何ができるか | 直し方の表から、原因ごとに直す。結果は 4 区分で、未確認を適合に数えない |
| どうするか | 直したあと、同じ手順（ツリー・順路・比・幅）で再実測し、未確認を支援技術で確かめる |

## 点検

### 実測したもの（Chrome 157・ヘッドレス、2026-11-16）

| 項目 | 監査の対象 | 直した後 |
|---|---|---|
| ツリー（状況の名前） | 3 路線とも、状況のセルに名前なし | 状況が文字でツリーに出る |
| キーボードの順路 | 47 か所に届く。全て `outline: none` | 47 か所。輪郭は全て実線 3 px |
| 焦点が隠れる | Shift+Tab で、全体が隠れたリンクが 2 か所（ほかに一部だけ覆われた 1 か所）。文字サイズ設定を 32 にすると、部品の中心が覆われた数は 3 か所 | 隠れない（標準の設定でも、32 でも 0 か所） |
| 幅 320 px・390 px | `scrollWidth` 560 px（横にはみ出す） | 320 px・390 px とも、はみ出さない。320 px で文字 200%（作成者の CSS・文字サイズ設定 32）でも、はみ出さない |
| 文字だけ 200%（作成者の CSS） | 本文 14 px のまま（`px`） | 本文が 2 倍。路線の行は 1 列になる |
| 文字だけ 200%（ブラウザーの文字サイズ設定 32） | 本文 14 px のまま | 本文 32 px。路線の行は 1 列になる |
| 文字の間隔 | 切り取り・はみ出しなし | 切り取り・はみ出しなし |
| 動きを減らす設定 | 動きが 1 つ残る | 動きが 0 |
| 強制カラー | 焦点の輪郭が `none` | 焦点の輪郭が実線 3 px |
| 更新ボタンの結果 | ツリーで通常の文。焦点はボタンのまま | クリックの前から、ツリーに空の `status`。クリックの後、「更新しました（20:26:33）。…」の形の文が入る（時刻が変わるので、入れ直しでも内容が変わる）。焦点はボタンのまま。実際の読み上げは未確認 |
| ヘッダー（切り取り） | 高さ固定（56 px）。狭い幅は未実測 | 1280・700・390・320 px、320 px で文字 200%、文字サイズ設定 32 のいずれも、内容が切り取られない（`scrollHeight` と `clientHeight` が等しい）。固定になるのは 40rem 以上の幅だけ |
| 色の比 | 入力欄の枠 1.92:1 | 本文 15.72:1（#1B2617 / #FFFFFF）。リンク 6.50:1（#356A1E / #FFFFFF。「詳しくはこちら」も同じ。ヘッダーの #F4F7EE の上では 6.00:1）。入力欄の枠 5.70:1。焦点の輪郭 16.44:1（白地）・15.18:1（#F4F7EE）。状況の形 6.50:1・6.92:1・7.40:1 |
| ダーク（`prefers-color-scheme: dark`） | - | 本文 15.52:1・リンク 9.47:1・ボタン 8.87:1・入力欄の枠 6.35:1・焦点の輪郭 16.90:1・状況の形 9.47・9.96・9.16:1。幅 320・390 px ではみ出さない。強制カラーで輪郭は実線 3 px。動き 0 |
| 輪郭のオフセット 0 の場合（参考） | - | 輪郭と緑のボタンは 2.53:1（#14230F / #356A1E）で 3:1 未満。オフセット 2 px で、隣は地になり 16.44:1 |

### 未確認のもの

- 実際の読み上げ: 状況の読み上げ順、更新の結果が読み上げられるか（4.1.3 の「焦点を受けずに提示できる」形は実測できるが、実際の通知は読み上げで確かめる）
- 音声操作、利用者による理解、拡大鏡（4 倍まで。S117）での使い勝手
- 3.2.6（複数ページ）と、台帳に原文の無い基準
- 他のブラウザー・端末

## この例の出典

出典の詳細（引用原文・URL・検証区分）は `../references/sources.md`。

- S008・S010・S011・S013・S014・S015・S016・S017・S018・S019・S021・S022・S025・S026・S029・S030・S031・S036・S037: 達成基準・用語・Understanding
- S051・S238: 状態メッセージの領域
- S074: 動きを減らす設定
- S117: 拡大鏡は少なくとも 4 倍まで
- S136・S137・S138・S141: 自動検査の限界
- S139: 方法論（WCAG-EM）

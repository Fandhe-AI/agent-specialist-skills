# 例: ナビゲーションとタブの作り直し（調剤薬局のサイト）

架空の調剤薬局のサイトで、サイトのナビゲーションに付けた ARIA の menu をやめ、見た目だけのタブを、キーボードで使えるタブに作り直す例。あわせて、見えない仕様を開発へ渡す注記の型を示す。題材は架空で、実在の製品・企業の画面の模倣は含まない。「メニューとタブをアクセシブルにしたい。スクリーンリーダー対応っぽくしてほしい」と相談されたとき、独自の部品の型と、注記の書き方を決めるときに開く。部品の型の一覧は `../references/widget-patterns.md`、監査の手順は `audit-report-transit-status.md`。

## 依頼

- 製品: 架空の調剤薬局「くすのき薬局」のサイト（架空）。薬の案内ページには、サイトのナビゲーションと、用法・注意・保管の 3 つの内容を切り替えるタブがある
- 依頼文（架空）: 「ナビとタブをアクセシブルにしたい。スクリーンリーダー対応っぽくしてほしい。前の担当者が ARIA をたくさん付けたが、キーボードだと動かないと言われた」
- 現状（前の版。架空）: ナビは `role="menubar"` に `role="menuitem"` のリンク。タブは `div` にクリックの処理だけを付けた。選択中のタブの地は #F2F6EC、選択されていないタブの地は #E9EFE2。焦点の輪郭は消してある
- リンク先: `shops.html`・`contact.html` は、別ページの架空の相対 URL で、例の範囲外（`#top` は実在する）
- 想定ユーザー: キーボードだけで操作する人、スクリーンリーダーの人、拡大して見る人。薬の案内は、薬を受け取った後に読み返される
- 範囲外: 薬の内容の文言と医学的な正確さ（本文はサンプル文）、実際の読み上げ、動きの設計

### 根拠の範囲（先に読む）

- 出典のある事実: サイトのナビゲーションに ARIA の menu の意味を使わない（S066）。正しく組んだナビゲーションに ARIA は要らない（S067）。役割はキー操作も見た目も付けない（S053）。誤った ARIA は無いより悪い（S052）。タブは少なくとも 2 つのタブストップ（S161）。Tab は部品の間、矢印は部品の中（S071）。パネルの内容が DOM にあれば表示はほぼ即時（S071）。唯一の正解は無い（S068）
- APG の Tabs パターン（S251。APG は規範ではない。S055）: 役割は tablist・tab・tabpanel。tab は `aria-controls`、選択中の tab は `aria-selected="true"`、tabpanel は `aria-labelledby`。Tab でタブの列に入ると選択中のタブへ焦点が置かれ、次の Tab でタブパネルへ出る。左右の矢印で前後のタブへ移り、端では反対側へ回る。Home・End は任意。パネルに焦点可能な要素が無いときは `tabindex="0"`。パネルが遅延なく表示できるなら、焦点で自動に選ぶことを勧める
- 台帳に原文が無い（本 skill の整理・推測）: 非選択のタブを `tabindex="-1"` にして Tab の順路から外す実装、`aria-current` の使い方
- 本 skill の目安（出典なし）: タブの高さ（44 px）、選択の印の太さ（4 px）、余白、色。24 px は規格の最小（S025）、44 px は本 skill の目安
- 外れる点: Bootstrap は矢印キーで前後のタブが切り替わる（S240）、MUI は手動切り替えで実装する（S235）。この例は内容が DOM にあるので、選択が焦点に従う（自動）。通信を伴うなら手動にする

## 目的の一文

サイトの移動はふつうのリンクの一覧にし、タブは「タブの列で 1 回、パネルで 1 回」だけ Tab が止まる、矢印で移れる部品にして、見えない仕様を注記で渡す。

## 削るもの

| 削るもの | 理由 | 代わりに |
|---|---|---|
| ナビの `role="menubar"`・`menuitem` | サイトのナビゲーションに menu の意味を使わない（S066）。役割だけで、矢印キーの動きは付かない（S053）。前の版は、2 つ目以降のリンクに Tab も矢印も届かなかった（実測） | `nav` の中のリンクの一覧 |
| `div` のタブ | 焦点が届かず、役割も状態も無い（S030）。実測で、Tab が一度も止まらなかった | `button` に役割を足したタブ |
| 選択の差が地の色だけ | 1.07:1（#F2F6EC と #E9EFE2）。3:1 の基準（S016）に届かない。色だけで伝えない（S010） | 4 px の下線と太字。下線は白地で 6.50:1 |
| `outline: none` | 焦点の可視（S021）を満たさない | `:focus-visible` の輪郭 |
| 薬の説明を、全部タブの中に隠す | 読み返すとき、3 回切り替える（本 skill の整理） | 重要な注意は、タブの外の 1 文にもする（本文はサンプル） |

## 構成

| 領域 | 内容 |
|---|---|
| ヘッダー | `nav`（名前「主要」）の中に、リンクの一覧。現在のページを `aria-current="page"` で示し、太字と下線を添える |
| 本文 | 見出し 1 つ → タブの列（3 つ）→ 選択中のパネル。パネルは見出し 2 を持つ |
| 注記 | 設計の各画面の横に、下の「引き渡しの注記」を置く |

## 仕様

### 部品の型（APG は S251。S251 に無い点は本 skill の整理・推測）

| 項目 | 仕様 | 根拠 |
|---|---|---|
| タブの列 | 役割 tablist。名前「お薬の案内」。3 つのタブを持つ | S251。名前は 4.1.2（S030） |
| タブ | 役割 tab。名前は見えるラベル（用法・注意・保管）。`aria-controls` でパネルを指し、選択中は `aria-selected="true"` | S251・S030 |
| パネル | 役割 tabpanel。名前はタブから取る（`aria-labelledby`）。パネルは焦点を受ける（`tabindex="0"`） | S251。タブストップ 2 つ（S161） |
| Tab の順路 | ナビの 3 リンク → 選択中のタブ（1 回）→ パネル（1 回）。非選択のタブには Tab が止まらない（`tabindex="-1"` は整理） | S251・S161・S071 |
| 矢印 | 左右で前後のタブへ。端では反対側へ回る。Home・End で先頭・末尾（任意） | S251 |
| 選択 | 焦点が来たら選択する（自動）。パネルの内容が DOM にあるため | S251・S071 |
| 非表示 | 選ばれていないパネルは `hidden` | `[hidden]` を `display` で上書きしない |

### 見た目

| 項目 | 値 | 比 |
|---|---|---|
| 選択中の印 | 下線 4 px の #356A1E（白地） | 6.50:1（1.4.11。S016） |
| 選択中の文字 | #1B2617・太字 | 15.72:1（白地） |
| 非選択の文字 | #4A5846 | 7.57:1（白地） |
| 焦点の輪郭 | 3 px・#14230F・オフセット 2 px | 16.44:1（白地）、15.18:1（#F4F7EE） |
| タブの高さ | 2.75rem（44 px）。最小の幅は内容 | 規格の最小は 24 px（S025）。44 px は本 skill の目安 |
| リンクの高さ | 1.5rem 以上（24 px） | 2.5.8（S025） |
| 強制カラー | 選択中の下線は `Highlight`、それ以外は `Canvas` | 色の差だけに頼らない（下線の太さは同じ 4 px。実測） |

### 引き渡しの注記（見えない仕様）

注記は、見えないものを明示するためのメモ（S198）。デザインの各画面の横に、次を書く。

| 項目 | このページの注記 |
|---|---|
| 見出しの階層 | h1: 薬の名前。パネルの中は h2（用法・注意・保管）。タブの列は見出しではない |
| 読み上げ順 | ヘッダー → 本文の h1 → タブの列 → 選択中のパネル（見た目の順と同じ） |
| 名前 | ナビ「主要」。タブの列「お薬の案内」。各タブは見えるラベル。パネルはタブの名前 |
| 焦点の移り先 | Tab: ナビのリンク → 選択中のタブ → パネル。矢印: タブからタブ。選択を変えても、焦点はタブに残る。パネルへは Tab だけで入る |
| 代替テキスト | このページに画像は無い。画像を足すときは、置き場を先に決める（S175） |
| 状態 | 選択中のタブは、色・太字・下線の 3 つで示す。強制カラーでは下線の色を `Highlight` にする |
| 注記が書きにくい箇所 | 書けなかった箇所は、設計が決まっていない兆候。決まるまで実装に渡さない（本 skill の整理） |

### ダークの配色（`prefers-color-scheme: dark`）

ダークは、同じ変数を入れ替える（地 #12170F・文字 #E9EFE4・補助の文字 #B9C6B1・線 #8C9E83・緑 #8FCB6E・緑の上の文字 #10200A・面 #1C2418・焦点の輪郭 #F4F8EF・警告 #E9B949・誤り #FF9F8A）。色は WCAG の相対輝度式（S013）で計算した。文字は 4.5:1（S011）、境界・状態・焦点の輪郭は 3:1（S016）以上を目安にする。焦点の輪郭は、オフセット 2 px で隣が地になり、緑のボタンに接する（オフセット 0）と #F4F8EF / #8FCB6E は 1.79:1 で 3:1 未満になる。強制カラーでは色を上書きされるので、印は形（下線・輪郭の太さ）にも持たせる。

| 項目 | 値 | 比 |
|---|---|---|
| 本文・選択中の文字 | #E9EFE4 / #12170F | 15.52:1 |
| 非選択の文字 | #B9C6B1 / #12170F | 10.19:1 |
| 選択の下線 | #8FCB6E / #12170F | 9.47:1（1.4.11。S016） |
| ナビのリンク | #8FCB6E / #1C2418 | 8.32:1 |
| 焦点の輪郭 | #F4F8EF（地 #12170F） | 16.90:1 |

## 文言

| 場所 | 文言 | 意図 |
|---|---|---|
| ナビ | お薬の案内／店舗／お問い合わせ | ふつうのリンクの名前。見えるラベルと同じ |
| タブの列の名前 | お薬の案内 | 何の切り替えかを名前にする |
| タブ | 用法／注意／保管 | 1〜2 語。内容を予告する |
| パネルの見出し | 用法／注意／保管 | タブと同じ語。読み上げで迷わない |
| サンプル文 | 「用法は、薬の袋または添付文書の記載に従う（サンプル文）。」 | 医学的な内容は書かない。薬の文言は薬剤師が確かめる |

## コード断片

ナビ・タブ・パネルを持つページ全体（外部の資源なし）。更新で DOM を作り直さないので、タブの切り替えで焦点が落ちない。

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>お薬の案内 | くすのき薬局</title>
<style>
:root{
  color-scheme:light dark; --bg:#FFFFFF; --on-brand:#FFFFFF; --media:#14230F; --ink:#1B2617; --muted:#4A5846; --line:#5B6B57; --brand:#356A1E; --soft:#F4F7EE; --focus:#14230F; }
body{ margin:0; font:1rem/1.7 system-ui,"Hiragino Sans","Noto Sans JP",sans-serif; color:var(--ink); background:var(--bg); }
:focus-visible{ outline:3px solid var(--focus); outline-offset:2px; }
.kp-header{ background:var(--soft); border-bottom:1px solid var(--line); padding:.25rem 1rem; }
.kp-nav ul{ display:flex; flex-wrap:wrap; gap:.25rem 1rem; margin:0; padding:0; list-style:none; }
.kp-nav a{ display:inline-block; min-height:1.5rem; padding:.125rem .25rem; color:var(--brand); }
.kp-nav a[aria-current="page"]{ color:var(--ink); font-weight:700; text-decoration:underline; text-underline-offset:.25em; }
.kp-main{ padding:0 1rem 2rem; }
.kp-tablist{ display:flex; flex-wrap:wrap; gap:.25rem; border-bottom:1px solid var(--line); }
.kp-tab{ font:inherit; min-height:2.75rem; padding:.25rem 1rem; color:var(--muted); background:var(--bg);
  border:0; border-bottom:.25rem solid transparent; border-radius:0; cursor:pointer; }
.kp-tab[aria-selected="true"]{ color:var(--ink); font-weight:700; border-bottom-color:var(--brand); }
.kp-panel{ padding:1rem .25rem; }
@media (forced-colors:active){ .kp-tab{ border-bottom-color:Canvas; } .kp-tab[aria-selected="true"]{ border-bottom-color:Highlight; } }
@media (prefers-color-scheme:dark){
  :root{ --bg:#12170F; --ink:#E9EFE4; --muted:#B9C6B1; --line:#8C9E83; --brand:#8FCB6E; --on-brand:#10200A;
    --soft:#1C2418; --focus:#F4F8EF; --warn:#E9B949; --stop:#FF9F8A; --err:#FF9F8A; --media:#0B0F09; }
}
</style>
</head>
<body>
<header class="kp-header">
  <nav class="kp-nav" aria-label="主要">
    <ul>
      <li><a href="#top" aria-current="page">お薬の案内</a></li>
      <li><a href="shops.html">店舗</a></li>
      <li><a href="contact.html">お問い合わせ</a></li>
    </ul>
  </nav>
</header>
<main class="kp-main" id="top">
  <h1>せきどめ薬 K（架空の薬）</h1>
  <div class="kp-tabs">
    <div class="kp-tablist" role="tablist" aria-label="お薬の案内">
      <button type="button" class="kp-tab" role="tab" id="kp-t1" aria-selected="true"  aria-controls="kp-p1" tabindex="0">用法</button>
      <button type="button" class="kp-tab" role="tab" id="kp-t2" aria-selected="false" aria-controls="kp-p2" tabindex="-1">注意</button>
      <button type="button" class="kp-tab" role="tab" id="kp-t3" aria-selected="false" aria-controls="kp-p3" tabindex="-1">保管</button>
    </div>
    <div class="kp-panel" role="tabpanel" id="kp-p1" aria-labelledby="kp-t1" tabindex="0">
      <h2>用法</h2><p>用法は、薬の袋または添付文書の記載に従う（サンプル文）。</p></div>
    <div class="kp-panel" role="tabpanel" id="kp-p2" aria-labelledby="kp-t2" tabindex="0" hidden>
      <h2>注意</h2><p>注意の文（サンプル文）。</p></div>
    <div class="kp-panel" role="tabpanel" id="kp-p3" aria-labelledby="kp-t3" tabindex="0" hidden>
      <h2>保管</h2><p>保管の文（サンプル文）。</p></div>
  </div>
</main>
<script>
(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.kp-tab'));
  function select(next, moveFocus) {
    tabs.forEach(function (t) {
      var on = t === next;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (moveFocus) next.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t, false); });
    t.addEventListener('keydown', function (e) {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      var j = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
      if (j === undefined) return;
      e.preventDefault();
      select(tabs[(j + tabs.length) % tabs.length], true);
    });
  });
})();
</script>
</body>
</html>
```

## 初見検証

注記と実装を初めて見る開発者に、次を確かめる。

| 問い | 期待する答え |
|---|---|
| 何に注意するか | ナビは menu にしない。タブの Tab は 2 回（列とパネル）。非選択のタブには Tab が止まらない |
| 何ができるか | 矢印・Home・End でタブを移り、焦点が来たタブが選ばれる |
| どうするか | 通信を伴うタブにするときは、選択を手動（Enter・Space）にする（S071）。型の全体は APG の Tabs パターンで確かめる（S251 は要点だけ） |

## 点検

### 実測したもの（Chrome 157・ヘッドレス、2026-11-16）

| 項目 | 前の版 | 直した後 |
|---|---|---|
| ツリー | `menubar` と `menuitem` 3 つ。タブは役割の無いテキスト | `navigation`「主要」の中に `list` とリンク。`tablist`「お薬の案内」に `tab` 3 つ（選択中は 1 つ）。`tabpanel`「用法」 |
| Tab の順路 | 1 つ目のリンクだけ。2・3 つ目のリンクとタブは、キーボードで届かない | リンク 3 → 選択中のタブ → パネル → 末尾 |
| 矢印・Home・End | 動かない | 右で次のタブ（焦点と選択が移り、パネルが切り替わる）。End で末尾、右で先頭へ回り、左で末尾へ戻る。Tab でパネルへ出る |
| 色の比 | 選択の差 1.07:1 | 下線 6.50:1。選択中の文字 15.72:1。非選択の文字 7.57:1 |
| ダーク | - | 選択の下線 9.47:1・選択中の文字 15.52:1・非選択の文字 10.19:1・ナビのリンク 8.32:1・焦点の輪郭 16.90:1。幅 320・390 px ではみ出さない。強制カラーで輪郭は実線 3 px。動き 0 |
| 幅 320・390 px | はみ出さない | はみ出さない |
| 文字だけ 200%（作成者の CSS・文字サイズ設定 32） | - | どちらも、はみ出さない（文字は 32 px） |
| 強制カラー | - | 選択中の下線の色と、非選択の下線の色が違う。焦点の輪郭は実線 3 px |
| 動きを減らす設定 | - | 動きは無い。アニメーション・トランジションは、設定あり・なしとも 0 |
| 修飾キー | - | Alt・Ctrl・Meta を押しながらの矢印では、タブを動かさない（実測: 選択も焦点も変わらない）。修飾キーなしの右矢印では次のタブへ移る |

### 未確認のもの

- 実際の読み上げ: 選択の状態・パネルの名前・ナビの現在位置が、VoiceOver・NVDA・JAWS・TalkBack でどう読まれるか
- 音声操作（「用法」と言って選べるか）、利用者による理解
- 垂直のタブ、タブの削除、ポップアップメニューつきのタブ（S251 の引用に含めていない）。`aria-current` の使い方（台帳に原文なし）
- 他のブラウザー・端末、実際の薬の内容

## この例の出典

出典の詳細（引用原文・URL・検証区分）は `../references/sources.md`。

- S010・S016・S021・S025・S030: 色だけで伝えない・非テキストのコントラスト・焦点の可視・ターゲットの大きさ・名前と役割
- S052・S053・S066・S067: 誤った ARIA・役割・メニュー
- S068・S071・S161・S235・S240・S251: タブの型と切り替え
- S175・S198: 注記

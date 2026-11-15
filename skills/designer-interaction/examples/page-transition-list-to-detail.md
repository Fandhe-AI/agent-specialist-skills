# 例: 一覧から詳細へのページ遷移（View Transitions・戻る操作・非対応時の姿）

記事一覧のサムネイルが詳細の大きな画像へ広がる遷移を、標準の機構（View Transitions）で作る例。題材は架空の社内ナレッジ閲覧サイトで、実在の製品の遷移の模倣は含まない。ページ遷移の演出を頼まれたとき、遷移の長さ・戻る操作・中断・縮小版・非対応ブラウザーでの姿をまとめて決めたいときに開く。

## 依頼

- 製品: 社内ナレッジ閲覧サイト「ナレッジ棚」（架空。運営は架空の部署「総務企画室」）
- 依頼文: 「記事一覧のサムネイルが、詳細の大きな画像へ広がるようにしたい。戻るでも自然に」
- 現状: 一覧と詳細は即座に入れ替わる。サムネイルと詳細の画像の対応が分かりにくく、戻ると一覧の先頭に戻される
- 想定するユーザー: 1 日に数回、記事を開いて読む社員（ポインタとキーボードの併用。動きを減らす設定の人もいる）

### 根拠の範囲（先に読む）

- 出典のある事実は、View Transitions が状態間の遷移の演出で、認知負荷・文脈の維持・体感遅延の軽減に使われるという MDN の記述（S87。効果の実験は取得していない）、一覧のサムネイルから詳細の大きな画像への遷移が典型例（S88）、同一文書の view transition は Chrome 111 から（S89）、新しいページは 1 秒以内が目標（S08）、大きな画面変化は 200〜300 ms が妥当で 500 ms で重い（S21・S22）、ease-out が基本（S24）、動きを途中で止められること（S74）、動きの完了を待たせない（S68）、動きを減らす設定の検出（S76）に限られる
- View Transitions の規格は、取得した版が Candidate Recommendation Draft（S142）。Chrome 以外のブラウザーの対応は、取得した範囲で確認できていない。対応状況は時点情報（2026-11-15）で、実装の直前に確認する
- 長さ（背景 200 ms・画像の変形 300 ms）とイージングの値は、本 skill の目安（出典なし）。イージングは Material Web の standard-decelerate（S29）と同じ値を借りた
- 文書間（多ページ）の遷移は、この例の範囲外である。静的ファイルの検証環境（`file://`）で試しておらず、未検証である。この例は同一文書（URL のハッシュで一覧と詳細を切り替える）の遷移だけを扱う

## 目的の一文

一覧のどの記事を開いたかを、サムネイルが詳細の画像へ広がることで見せ、戻る操作でも同じ記事へ帰れることを伝える。遷移が使えなくても、記事は同じように開ける。

## 削るもの

| 削るもの | 理由 |
|---|---|
| 詳細の本文までを順に飛び込ませる演出 | 目的の無い動き（S63）。伝える対象は「どの記事か」だけ |
| 0.8 秒の長い遷移 | 500 ms で重く感じ始める（S22）。ページは 1 秒以内に出す（S08） |
| 遷移が終わるまで操作できない作り | 動きの完了を待たせない（S68）。途中で戻る操作を受け付ける（S74） |
| 戻ると一覧の先頭へ戻ること | 見ていた位置と、開いた記事のカードへ戻す（本 skill の整理） |
| 動きを前提にした機能 | 遷移が使えなくても記事は開ける（本 skill の整理）。動きは強化である |

## 構成

| 要素 | 内容 |
|---|---|
| 一覧 | 記事ごとのリンク（サムネイル・題・要約）。サムネイルは CSS の図形で描く（画像ファイルは使わない） |
| 詳細 | 大きな画像（同じ図形）・題・本文・「一覧へ戻る」 |
| 遷移 | 同じ記事のサムネイルと詳細の画像を、同じ名前（`hero`）で結び、位置と大きさを変形する。背景はクロスフェード |
| 戻る | 「一覧へ戻る」リンクと、ブラウザーの戻る操作。どちらも同じ遷移で、一覧を離れたときのスクロール位置へ帰る |
| フォーカス | 詳細を開いたら題へ、戻ったら開いた記事のリンクへ移す |

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| 対象 | 同一文書の一覧と詳細（URL は `#/<番号>`）。文書間の遷移は範囲外 | 同一文書は Chrome 111 から（S89）。他は未確認 |
| 背景のクロスフェード | 200 ms・ease-out | 範囲は S21。値は本 skill の目安 |
| 画像の変形 | 300 ms・`cubic-bezier(0, 0, 0, 1)` | 範囲は S21、曲線は S29（standard-decelerate）。ease-out が基本（S24）。300 ms は本 skill の目安 |
| 全体の上限 | 300 ms。500 ms を超えない。ページ自体は 1 秒以内に出す | S22・S08 |
| 戻る | 開くときと同じ長さ・同じ曲線。ブラウザーの戻る・進む、リンクの両方で動く。一覧を離れたときのスクロール位置を復元する | 本 skill の整理 |
| 中断 | 遷移中に戻る・進むを押すと、新しい遷移が前の遷移に取って代わり、最新の状態へ向かう。DOM の状態は常に最新へ揃える。遷移の最中（約 300 ms）に、画面内の「一覧へ戻る」を押しても戻れる。Chrome 156 の実測では、演出中はページの要素にクリックが届かず `<html>` が受ける（`::view-transition` 系に `pointer-events: none` を指定しても変わらなかった）ので、`<html>` が受けたクリックの座標の下にある操作対象を探して押す | 完了を待たせない（S68）、中断（S74）。取って代わる挙動とクリックの扱いは実測（下の「点検」）。座標から押す処理は本 skill の実装 |
| 縮小版 | 画像は変形せず、150 ms のクロスフェードだけ | 必要性は S76・S79。置き換えと 150 ms は本 skill の整理・目安 |
| 非対応のブラウザー | 即時に切り替える。URL・戻る操作・フォーカスは同じ | 本 skill の整理（機能検出） |
| フォーカス | 詳細を開いたら題（`tabindex="-1"`）へ。戻ったら開いた記事のリンクへ。リンクが画面の外なら、最小限だけスクロールして見せる（`scrollIntoView` の `nearest`） | 可視のフォーカス・予測できる移動（S101） |
| 存在しない番号 | `#/99` のような番号は、一覧を出す（例外にしない） | 本 skill の実装の注意（入力の検査） |
| キーボード | 記事はリンクで、Enter で開く。「一覧へ戻る」もリンク | S98 |
| 名前の付け方 | `view-transition-name` は、遷移の直前に、いまの要素と次の要素の 1 つずつにだけ付ける。同じ名前が同時に 2 つあると遷移が失敗する | 本 skill の整理（実装の注意）。名前は一意でなければならない（出典は未取得） |

コントラスト比（WCAG の相対輝度式で計算。基準の 4.5:1・3:1 の原文は本 skill の台帳に無く、未照合）:

| 組み合わせ（前景 / 背景） | ライト | ダーク |
|---|---|---|
| 本文 / 背景 | 16.56 | 16.02 |
| 補助文字 / 背景 | 8.68 | 9.50 |
| リンク・フォーカスの輪 / 背景 | 5.99 | 8.59 |
| 図形の文字（白）/ 図形の最も明るい色 | 5.98 | 5.98 |

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| 戻るリンク | ← | 一覧へ戻る | 行き先を言う |
| 一覧の見出し | Articles | 記事一覧 | 日本語で統一 |
| 詳細の画像 | （装飾） | 図形のみ。`aria-hidden="true"` | 内容を持たない装飾で、題と本文が情報を持つ |
| 記事の題 | 新サービスの紹介（仮） | 備品の貸し出しは 3 つの手順で済む | 題だけで中身が分かる |

## コード断片

一覧と詳細は、同じ文書の 2 つの領域である。遷移は `document.startViewTransition` で包み、非対応なら即時に切り替える。外部のライブラリ・フォント・画像ファイル・計測は使わない。

```html
<main class="page">
  <section id="list-view" aria-labelledby="list-title">
    <h1 id="list-title">記事一覧</h1>
    <ul class="articles">
      <li><a class="card" href="#/1" data-id="1"><span class="thumb" style="--c1:#1f5f8b;--c2:#12385a" aria-hidden="true">貸</span>
        <span class="card-body"><strong>備品の貸し出しは 3 つの手順で済む</strong><span>申請・受け取り・返却の流れ</span></span></a></li>
      <li><a class="card" href="#/2" data-id="2"><span class="thumb" style="--c1:#7a3b8f;--c2:#4a2159" aria-hidden="true">会</span>
        <span class="card-body"><strong>会議室の予約は前日の 17 時まで</strong><span>変更と取り消しの期限</span></span></a></li>
      <li><a class="card" href="#/3" data-id="3"><span class="thumb" style="--c1:#2f6b3a;--c2:#1c4023" aria-hidden="true">経</span>
        <span class="card-body"><strong>経費の申請は月末にまとめて出す</strong><span>領収書の貼り方</span></span></a></li>
      <li><a class="card" href="#/4" data-id="4"><span class="thumb" style="--c1:#a14a1b;--c2:#6b2e0f" aria-hidden="true">鍵</span>
        <span class="card-body"><strong>倉庫の鍵は総務で預かる</strong><span>貸し出しの記録</span></span></a></li>
    </ul>
  </section>

  <article id="detail-view" hidden>
    <a class="back" href="#/">一覧へ戻る</a>
    <div class="hero" aria-hidden="true"><span id="hero-glyph"></span></div>
    <h2 id="detail-title" tabindex="-1"></h2>
    <p id="detail-text"></p>
  </article>
</main>
```

```css
:root {
  color-scheme: light dark;
  --bg: #ffffff; --text: #1b1f24; --text-2: #454c55; --link: #0b5cd5; --line: #6b7280;
  --ease-out: cubic-bezier(0, 0, 0, 1);       /* standard-decelerate（S29）*/
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #15171b; --text: #f1f2f4; --text-2: #b7bdc7; --link: #8ab4ff; --line: #8d95a3; }
}
body { margin: 0; background: var(--bg); color: var(--text);
  font-family: system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Noto Sans CJK JP", sans-serif; line-height: 1.7; }
.page { max-width: 560px; margin: 0 auto; padding: 24px 16px 64px; }
h1 { font-size: 24px; line-height: 32px; margin: 0 0 16px; }
h2 { font-size: 22px; line-height: 30px; margin: 16px 0 8px; }
a { color: var(--link); }
:focus-visible { outline: 3px solid var(--link); outline-offset: 2px; }
.articles { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
.card { display: flex; gap: 12px; align-items: center; min-height: 44px; padding: 8px; color: inherit; text-decoration: none;
  border: 1px solid var(--line); border-radius: 8px; }
.card-body { display: grid; gap: 2px; min-width: 0; }
.card-body span { color: var(--text-2); font-size: 14px; line-height: 20px; }
.thumb, .hero { display: grid; place-items: center; aspect-ratio: 4 / 3; color: #ffffff; font-weight: 700;
  background: linear-gradient(135deg, var(--c1), var(--c2)); border-radius: 8px; }
.thumb { width: 96px; flex: none; font-size: 28px; }
.hero { width: 100%; font-size: 72px; }
.back { display: inline-block; min-height: 44px; line-height: 44px; }

/* 遷移: 背景は 200 ms のクロスフェード、画像は 300 ms の変形（どちらも本 skill の目安）*/
::view-transition-group(root), ::view-transition-old(root), ::view-transition-new(root) { animation-duration: 200ms; animation-timing-function: var(--ease-out); }
::view-transition-group(hero) { animation-duration: 300ms; animation-timing-function: var(--ease-out); }

/* 動きを減らす設定: 画像は変形せず、150 ms のクロスフェードだけ */
@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(hero) { animation: none; }
  ::view-transition-group(root), ::view-transition-old(root), ::view-transition-new(root) { animation-duration: 150ms; }
}
```

```js
const articles = {
  1: ['貸', '備品の貸し出しは 3 つの手順で済む', '申請フォームを出し、総務で受け取り、使い終わったら同じ棚へ返す。貸し出しの記録は総務が残す。', '#1f5f8b', '#12385a'],
  2: ['会', '会議室の予約は前日の 17 時まで', '予約の変更と取り消しも前日の 17 時までに済ませる。当日の急な変更は総務へ連絡する。', '#7a3b8f', '#4a2159'],
  3: ['経', '経費の申請は月末にまとめて出す', '領収書は台紙に貼り、日付の順に並べる。金額の違いは申請者が直してから出す。', '#2f6b3a', '#1c4023'],
  4: ['鍵', '倉庫の鍵は総務で預かる', '倉庫を使うときは、総務で鍵を借りて記録する。返すときも記録を残す。', '#a14a1b', '#6b2e0f'],
};
const listView = document.getElementById('list-view');
const detailView = document.getElementById('detail-view');
const hero = detailView.querySelector('.hero');
const title = document.getElementById('detail-title');
const thumbOf = (id) => listView.querySelector(`[data-id="${id}"] .thumb`);
const idFromHash = () => { const m = /^#\/(\d+)$/.exec(location.hash); return m && m[1] in articles ? m[1] : null; };   // 存在する番号だけを通す
let current = null;                                   // 表示中の記事の番号。一覧なら null
let seq = 0;                                          // 最新の遷移の通し番号
let playing = false;                                  // 遷移の演出中か（演出中は、ページの要素にクリックが届かない）
let listY = 0;                                        // 一覧を離れたときのスクロール位置（戻ったときに復元する）
history.scrollRestoration = 'manual';                 // 戻るときのスクロール位置は、この例が自分で戻す

function show(id) {                                   // DOM を最終の状態にする（同期）
  const [glyph, head, text, c1, c2] = id ? articles[id] : [];
  listView.hidden = !!id; detailView.hidden = !id;
  if (id) {
    hero.style.setProperty('--c1', c1); hero.style.setProperty('--c2', c2);
    document.getElementById('hero-glyph').textContent = glyph;
    title.textContent = head; document.getElementById('detail-text').textContent = text;
    window.scrollTo(0, 0); title.focus({ preventScroll: true });
  }
}

function navigate(next, push) {
  const prev = current;
  if (next === prev) return;
  current = next;                                     // 連続した操作に備え、先に更新する
  if (!prev) listY = window.scrollY;                  // 一覧を離れる前の位置を覚える
  const mine = ++seq;
  if (push) history.pushState(null, '', next ? `#/${next}` : '#/');
  const id = next || prev;
  const oldEl = prev ? hero : thumbOf(id);            // 変形の起点と終点を、同じ名前で結ぶ
  const newEl = next ? hero : thumbOf(id);
  const update = () => {
    oldEl.style.viewTransitionName = '';
    show(next);
    newEl.style.viewTransitionName = 'hero';
    if (!next) {                                      // 戻ったら、見ていた位置と、開いた記事のカードへ
      window.scrollTo(0, listY);
      const card = listView.querySelector(`[data-id="${id}"]`);
      card.focus({ preventScroll: true }); card.scrollIntoView({ block: 'nearest' });
    }
  };
  const finish = () => { if (mine === seq) { newEl.style.viewTransitionName = ''; playing = false; } };   // 取って代わられた遷移は触らない
  if (!('startViewTransition' in document)) { update(); finish(); return; }   // 非対応: 即時に切り替える
  oldEl.style.viewTransitionName = 'hero';
  playing = true;
  const t = document.startViewTransition(update);
  t.ready.catch(() => {});                            // 取って代わられた遷移のエラーは無視する
  t.finished.then(finish, finish);
}

/* 演出中は、実測で、クリックがページの要素に届かず <html> が受ける（`pointer-events` の指定では通らなかった）。
   座標の下にある操作対象を探して押し、新しい遷移で前の遷移に取って代わらせる */
document.documentElement.addEventListener('click', (e) => {
  if (!playing || e.target !== document.documentElement) return;
  const hit = [...document.querySelectorAll('a[href], button')].find((x) => {
    const r = x.getBoundingClientRect();
    return x.offsetParent && e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
  });
  if (hit) hit.click();
});
listView.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-id]');
  if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault(); navigate(a.dataset.id, true);
});
detailView.querySelector('.back').addEventListener('click', (e) => { e.preventDefault(); navigate(null, true); });
addEventListener('popstate', () => navigate(idFromHash(), false));
if (idFromHash()) { current = idFromHash(); show(current); }
```

試作のため、スクリプトはインラインで書いてよい。本番では外部ファイルにするか、CSP の nonce を付ける。

## 初見検証

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 開いた記事のサムネイルが、詳細の大きな画像へ広がった | 遷移の途中と、詳細の画像の色・文字 |
| 何を操作できるか | 記事を開く・一覧へ戻る | 一覧の記事のカード、「一覧へ戻る」 |
| どう操作するか | カードを押す（Enter でも開く）。戻るリンクかブラウザーの戻る | 44 px 以上のカードとリンク |

動きの検証は、動きを減らす設定をオンにしても同じ 3 問に答えられることを確かめる。縮小版では画像が変形せず、題が変わることで開いたと分かる（S64）。非対応のブラウザーでも、題と本文の切り替えで同じ 3 問に答えられる。

## 点検

- 目的: どの記事を開いたかが、遷移なしでも題で分かる。遷移は、その対応を見せる強化である
- 長さ: 背景 200 ms・画像 300 ms で、500 ms を超えない（S22）。ページは 1 秒以内に出る（S08）
- 中断: 遷移中に戻る・進むを押しても止まらず、DOM は最新の状態へ揃う。遷移中（300 ms の間）に、画面内の「一覧へ戻る」をクリックして戻れ、前の遷移が取って代わられて終わる（演出中のクリックを `<html>` が受けて座標から押す。キーボードの Tab と Enter は、演出が終わってから「一覧へ戻る」に着く）。操作の完了を待たせない（S68・S74）。同じ名前が 2 つ残って遷移が失敗する状態になっていない
- 戻る: ブラウザーの戻る・進む、一覧へ戻るリンク、URL の直接入力（`#/2`）で同じ画面になる。戻ると、一覧を離れた位置に戻り、開いた記事のリンクにフォーカスがある。存在しない番号（`#/99`）を直接開いても、一覧が出る
- 縮小版: 動きを減らす設定で、画像が変形せず、150 ms のクロスフェードだけになる。設定は CSS のメディアクエリで、途中で変えても追従する
- 非対応: `startViewTransition` が無いブラウザーで、即時に切り替わる。URL・戻る・フォーカスは同じ
- キーボード: Tab でカードへ着き、Enter で開き、詳細では題にフォーカスがある。「一覧へ戻る」へ Tab で着ける。フォーカスの輪が見える
- 実測（Chrome 156、2026-11-15、1440・390・320 px、ライト・ダーク、動きを減らす設定で描画）: 遷移中のアニメーションは、`::view-transition-group(hero)` が 300 ms、`::view-transition-old(root)` と `::view-transition-new(root)` が 200 ms。動きを減らす設定では、hero のアニメーションが消え、背景の 150 ms だけが残る。開く・戻る・遷移中の戻る・進む→戻る→進むの連打のいずれも、最終の画面が URL と一致し、`view-transition-name` の残りは 0 件。詳細ではフォーカスが題、戻ると元のカードにある。`#/2` を付けた URL を直接開くと詳細が開き、存在しない `#/99` を開いても一覧が出る（修正前は例外）。画面の高さ 300 px で、一覧を 200 px スクロールして 4 件目を開き、戻ると、位置が 206 px（200 px を復元し、カードを画面内へ最小限だけ動かした値）、フォーカスは 4 件目のカード、カードの上端は 205 px で画面内。ブラウザーの戻るでも同じ値（修正前は 0 px で、カードは画面の外）。遷移の最中のクリックを実測した。詳細を開いて約 120 ms 後（演出の 300 ms の最中）に「一覧へ戻る」をクリックすると、修正前は何も起きず（約 300 ms の間、ページの要素へのヒットテストは `<html>` を返し、クリックは詳細のまま）、修正後は戻れた。最初の遷移は 16 ms に始まり、クリックの時点（153 ms）で終わった（取って代わられなければ約 316 ms）。次の遷移は 153 ms から約 486 ms まで動いた。`view-transition-name` の残りは 0 件で、フォーカスは元のカード。この結果は、1440・390・320 px と、動きを減らす設定でも同じだった。`::view-transition` 系に `pointer-events: none` を指定しても、ヒットテストは変わらなかった（指定した版で確認）。機能検出を偽にした版では、アニメーションが 0 件で即時に切り替わる。幅 3 種（1440・390・320 px）× ライト・ダーク × 動きを減らす設定の有無の 12 通りすべてで描画し、横はみ出し（`scrollWidth` が `innerWidth` を超えること）は無かった。他のブラウザー・文書間の遷移・実機は未検証
- 推測の明示: 200 ms・300 ms・150 ms は本 skill の目安である。遷移が認知負荷を下げるという効果は MDN の記述で、実験の裏づけを取得していない（S87）。他ブラウザーの対応と、文書間の遷移は未検証である

## この例の出典

S08、S21、S22、S24、S29、S63、S64、S68、S74、S76、S79、S87、S88、S89、S98、S101、S142。台帳は `../references/sources.md`。

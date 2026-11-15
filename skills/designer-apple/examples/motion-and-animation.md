# 例: アニメーション（目的・スプリング・中断可能性・動きを減らす設定）

「動かすと高級に見える」装飾の動きを、「動きが状態の変化を伝える」作りへ組み替える例。題材は架空のアプリのボトムシート（下から出る詳細画面）で、実在の製品の動きの模倣は含まない。

## 依頼

- 製品: 観葉植物の水やり記録アプリ「ミズヤリ」（架空。運営は架空の会社「ミドリ舎」）
- 依頼文: 「詳細画面にアニメーションを付けて。Apple っぽく気持ちよく動かしたい」
- 現状: 全ボタンが押すたびに弾む・一覧の項目が順に飛び込む・詳細は 0.8 秒のイージングで開き、終わるまで操作できない・読み込みはずっと回る円
- 想定するユーザー: 日に何度も開閉する。片手で、移動中に使うこともある

### 根拠の範囲（先に読む）

- HIG の Motion には、UI アニメーションの所要時間（秒・ミリ秒）の推奨値が無い（S56）。WWDC23 のスプリングの解説にも duration の具体値は無い（S67）。したがって、この例の秒数は全て、本 skill の目安（出典なし）である
- 出典のある値は、スプリングの bounce の範囲と目安（S67）、damping の開始値 100% と 80% の例（S68）に限られる
- コード例は、ネイティブの `<dialog>` と CSS の遷移で書く。スプリングの計算は載せず、bounce・damping の値は設計の狙いとして仕様に残し、CSS では弾みなしの遷移で近似する（本 skill の整理）
- `<dialog>` の標準動作（フォーカスの循環・Escape・背景の操作不可）と、CSS の `@starting-style`・`allow-discrete` の振る舞いは、台帳に原文が無い。本 skill の実装の目安で、使う前に各ブラウザの最新の対応状況を確認する（2026-11-15 時点）

## 目的の一文

動きは「どこから来て、どこへ行ったか」と「操作が受け付けられたこと」を伝えるために使い、いつでも途中で止められる。

## 削るもの

| 削るもの | 理由 |
|---|---|
| 全ボタンの押下時の弾み | 頻繁な操作に動きを足さない（S56）。弾みは目的がある時だけ（S68） |
| 一覧の項目が順に飛び込む演出 | 目的の無い動き。毎回見せられて時間を奪う（S56） |
| 終わるまで操作できない詳細の開閉 | 動きの完了を待たせない。途中で止められる（S56、S68） |
| 0.8 秒の ease in/out | 曲線は初速度を表せず、ジェスチャーの終わりで急停止する（S67） |
| ぼかしを伴う出入り | 動きを減らす設定では、ぼかしへの出入りを避ける（S55） |
| 全面で回り続ける読み込みの円 | 読み込みは気付かれる前に終わるのが最良。まず何かを表示する（S64） |
| 動きだけで伝える状態（成功の紙吹雪） | 動きを唯一の伝達手段にしない。装飾ではなく配慮の積み重ねが喜びを生む（S56、S23） |

## 構成

動きの棚卸し。動きを付けるのは、ボタンの色の変化・シートの開閉・待つときの進捗の 3 つだけ。

| 要素 | 動かす | 目的 |
|---|---|---|
| ボタンの押下 | 色の変化のみ（位置は動かない） | 操作が受け付けられたこと |
| 詳細シートの開閉 | 下から出る・下へ戻る | どこから来て、どこへ戻るか。タップ元との連続性（S70） |
| 読み込み | 何かを先に表示。待つときだけ細い進捗 | 待っていることの表示（S64） |
| 一覧の項目・見出し・装飾 | 動かさない | 目的が無い |

シートの動きの設計（設計の狙い。コード例は CSS の遷移で近似する）。

```text
タップで開く     下から 0.35s・弾まない（damping 100% 相当）
下へ払って閉じる 離した位置と速度から投影して、閉じるか元に戻すかを決める
途中で向きを変える: 現在の位置から新しい目標へ向かう（CSS の遷移は速度を引き継がない）
動きを減らす設定: 移動をやめ、0.15s のフェードに置き換える（CSS のメディアクエリだけで切り替わる）
```

- 開く動きはタップに勢いが無いので弾ませず、払って閉じる動きは勢いがあるので少しだけ弾ませる。これは Apple の Music の例の 100% と 80% に倣う（S68）。ただしコード例は CSS の遷移で、弾みは付けない。弾みと速度の引き継ぎが要るなら、スプリングの計算を自前で書くか、プラットフォームのスプリングを使う
- 閉じる手段は、払うジェスチャーのほかに閉じるボタンを必ず置く（S25、S55）
- シートは `<dialog>` で作る。フォーカスの循環・Escape で閉じる・背景の操作不可は、ブラウザの標準動作に任せ、手書きの開閉状態やタイマーを持たない

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| スプリングの調整順 | 先に duration（間）を決め、次に bounce（性格）を決める | S67 |
| bounce の既定 | 0（迷ったら 0） | S67。原文は、指定しなければ 0 とも述べる |
| bounce の目安 | 約 0.15 で控えめ、約 0.3 で明確な弾み、約 0.4 を超えると UI には誇張 | S67 |
| bounce の範囲 | -1.0 から 1.0 | S67 |
| damping の開始値 | 100%（弾まない） | S68。勢いのあるジェスチャーのときだけ 80% 程度を報いとして足す（Music の例） |
| 開く動き | 弾まない（damping 100% 相当）・0.35 s・ease-out（CSS の遷移） | 100% は S68。0.35 s・ease-out は本 skill の目安（出典なし）。CSS の曲線は初速度を引き継げない（S67） |
| 払って閉じる動き | 離した位置と速度で投影して閉じるか戻すかを決め、現在位置から 0.35 s の遷移で動く。80% の弾みと速度の引き継ぎは、コード例では実装しない | 80% は S68（Music の例）。0.35 s は本 skill の目安（出典なし）。速度を引き継ぐのはスプリング（S67） |
| 投影位置 | 離した時の位置 + 速度 x 0.2 s で開閉を決める | 考え方は S68（速度から到達位置を投影）。0.2 s は本 skill の目安（出典なし） |
| ボタンの押下 | 色の変化 0.1 s | 本 skill の目安（出典なし）。即座に応答する（S68） |
| 中断 | 動作中でも次の操作を受け付ける。遷移は現在位置から新しい目標へ向かう（速度は引き継がない） | S56、S68（絶えず向きを変えられること）。速度の引き継ぎはスプリングの性質で、CSS の遷移では得られない（S67） |
| 完了待ち | 閉じる遷移の完了を待たずに、次の操作（再び開く）を受け付ける | S67（減衰が収まるのを待たない）、S56 |
| 開閉時の扱い | `<dialog>` と `showModal()` を使う。フォーカスの循環（Tab・Shift+Tab がシートの外へ抜けない）・Escape で閉じる・背景の操作不可は標準動作に任せる。閉じたら開いたボタンへフォーカスを戻す（標準動作で戻らない場合だけコードで補う） | 本 skill の実装の目安（出典なし。標準動作は HTML の仕様に基づき、台帳に原文は無い） |
| 設定が途中で変わったとき | CSS のメディアクエリが自然に追従する（JS のタイマーと change ハンドラーは使わない）。ドラッグ中に有効になったら、次の pointermove でドラッグを中断し、開いた状態を維持する（投影位置では決めない） | 本 skill の実装の目安（出典なし）。考え方は S55、判定の API は S73 |
| 中断された操作 | ポインターの操作が中断（pointercancel）されたら、離したときと同じ扱いで位置を決める | 本 skill の実装の目安（出典なし） |
| ポインターの入力 | 最初のポインターと主ボタンだけを受け付ける。別のポインターの move と up は無視する。Escape などで閉じたら、ドラッグも中断する | 本 skill の実装の目安（出典なし） |
| つまみの面 | 24 px 以上。閉じるボタン（44 px 以上）を別経路として置く | 24 x 24 CSS px は S72（2.5.8）、44 は S57。ジェスチャーに別経路を置く考え方は S25、S55 |
| 動きを減らす設定での開閉 | 移動なしの 0.15 s のフェード（CSS だけ）。ドラッグによる移動は止め、つまみは操作対象にしない（閉じるボタンが別経路） | S55（移動をフェードに置き換える）。0.15 s は本 skill の目安（出典なし） |
| 離す前の静止 | 最後の移動から 80 ms を超えて静止してから離したら、速度を 0 として開閉を決める | 本 skill の目安（出典なし）。古い速度で閉じる誤りを防ぐ |
| 非対応のブラウザ | `@starting-style` や `allow-discrete` が効かない場合は、アニメーションなしで開閉する（壊れない） | 時点情報（2026-11-15）。対応状況は台帳に出典が無い |
| 直線的な動き | 回転する読み込み指標のような場面だけ | 直線の動きは特殊な道具で、移動には慎重に（S67） |
| 動きを減らす設定 | 移動・拡大縮小・周辺の動きを減らし、フェードに置き換え、弾みを抑える | S55。Web の判定は `prefers-reduced-motion`（S73） |
| 自動の動き | 5 秒を超えて自動で始まる動きには停止手段 | S72（2.2.2）。秒数はそこで定義された値 |
| 点滅 | 1 秒に 3 回を超える点滅を作らない | S72（2.3.1） |

CSS の cubic-bezier や ease-out の遷移は、初速度を表せない（ease in/out と同じ理由。S67 の考え方に基づく本 skill の整理）。ジェスチャーの終わりの速度を動きへ引き継ぎたい場面は、スプリング相当の計算を自前で書くか、プラットフォームのスプリングを使う。このコード例は、離した速度を「閉じるか戻すかの判定」にだけ使う。

コントラスト比（WCAG の相対輝度式で計算。基準 4.5:1、非文字 3:1。S72）:

| 組み合わせ（前景 / 背景） | ライト | ダーク | 高コントラスト（ライト） | 高コントラスト（ダーク） |
|---|---|---|---|---|
| 本文色 / 面（シートの文字） | 15.40 | 15.17 | 19.26 | 18.69 |
| 補助文字色 / 面（補足） | 8.02 | 8.26 | 15.40 | 16.72 |
| ボタン文字 / アクセント（閉じるボタン） | 6.39 | 9.41 | 9.81 | 13.50 |
| アクセント / 面（非文字。フォーカスの輪） | 5.86 | 8.12 | 9.00 | 12.02 |
| 枠線 / 面（非文字。つまみの線） | 4.12 | 4.98 | 8.02 | 9.10 |

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| 設定 | アニメーション効果（オン・オフ） | （アプリ内に置かない。端末の「動きを減らす」設定に従う） | 端末全体の設定と重複させない（S77） |
| 読み込み | 少々お待ちください… | 植物の一覧を読み込み中 | 何を待っているかを言う（S58）。待つなら進捗を見せる（S64） |
| 閉じる | ×（名前なし） | 閉じる（ボタンの名前） | ジェスチャーの代わりの経路に、読み上げ用の名前を付ける（S25、S55） |
| 完了 | やったね！ 水やりを記録しました（紙吹雪つき） | 水やりを記録しました | 成功は控えめに。派手な演出で確認しない（S61） |

英語の原文（S56、HIG Motion）: "Don’t add motion for the sake of adding motion." 日本語は要旨で、目的の無い動きは入れない。

英語の原文（S56）: "Let people cancel motion." 日本語は要旨で、動きの完了を待たせず、途中でやめさせる。

英語の原文（S68、WWDC18 803）: "You should remember that bounciness needs to be purposeful." 日本語は要旨で、弾みには理由が要る。

## コード断片

ボトムシートの試作（一覧画面 + 開閉するシート）。シートはネイティブの `<dialog>` で作り、開閉のアニメーションは CSS の遷移に寄せる。JS は、ドラッグで閉じる操作だけに使う。外部のライブラリ・フォント・計測は使わない。

```html
<main class="page">
  <h1>ミズヤリ</h1>
  <ul class="plants">
    <li>モンステラ <span>次の水やり日 6 月 9 日</span></li>
    <li>ポトス <span>次の水やり日 6 月 12 日</span></li>
  </ul>
  <button id="open" class="btn" type="button">詳細を開く</button>
</main>
<dialog id="sheet" class="sheet" aria-labelledby="sheet-title">
  <div id="grab" class="grab" aria-hidden="true"></div>
  <h2 id="sheet-title">モンステラ</h2>
  <p>次の水やり日は 6 月 9 日です。</p>
  <form method="dialog"><button class="btn" type="submit" autofocus>閉じる</button></form>
</dialog>
<script>
const sheet = document.getElementById('sheet');
const openBtn = document.getElementById('open');
const grab = document.getElementById('grab');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
const H = 360;                            // シートの高さ（px）。ドラッグで動かせる最大量
const STILL = 80;                         // ms。これ以上静止してから離したら速度を 0 にする。本 skill の目安（出典なし）
let drag = null, v = 0;

openBtn.addEventListener('click', () => { if (!sheet.open) sheet.showModal(); });   // 閉じるのは form の method="dialog"
sheet.addEventListener('close', () => {
  stopDrag();                             // Escape などで閉じたとき、ドラッグを残さない
  if (document.activeElement === document.body) openBtn.focus({ preventScroll: true });   // 標準動作で戻らない場合だけ補う
});
function stopDrag() {                     // ドラッグを終え、移動の指定を CSS に戻す
  if (!drag) return;
  try { grab.releasePointerCapture(drag.id); } catch (err) { /* 既に解放されている */ }
  drag = null; sheet.classList.remove('dragging'); sheet.style.transform = '';
}
grab.addEventListener('pointerdown', (e) => {
  // 動きを減らす設定・二重の pointerdown（2 本目の指）・主ボタン以外は無視する（閉じるボタンが別経路）
  if (reduce.matches || drag || !e.isPrimary || e.button !== 0) return;
  grab.setPointerCapture(e.pointerId);
  drag = { id: e.pointerId, y0: e.clientY, dy: 0, py: e.clientY, pt: e.timeStamp };
  v = 0; sheet.classList.add('dragging'); });
grab.addEventListener('pointermove', (e) => {
  if (!drag || e.pointerId !== drag.id) return;
  if (reduce.matches) { stopDrag(); return; }   // ドラッグ中に「動きを減らす」が有効になったら中断し、開いた状態を維持する（投影位置では決めない）
  drag.dy = Math.min(Math.max(e.clientY - drag.y0, 0), H);
  sheet.style.transform = 'translateY(' + drag.dy + 'px)';
  v = (e.clientY - drag.py) / Math.max((e.timeStamp - drag.pt) / 1000, 0.001);
  drag.py = e.clientY; drag.pt = e.timeStamp; });
function release(e) {
  if (!drag || e.pointerId !== drag.id) return;
  if (e.timeStamp - drag.pt > STILL) v = 0;     // 止まってから離したら、古い速度を使わない
  const closing = drag.dy + v * 0.2 > H / 2;    // 離した位置 + 速度 x 0.2 s で投影する（0.2 s は本 skill の目安）
  stopDrag();                                   // 以降の動きは CSS の遷移（現在位置から）に任せる
  if (closing) sheet.close();
}
grab.addEventListener('pointerup', release);
grab.addEventListener('pointercancel', release);   // 中断された場合も、離したときと同じ扱い
</script>
```

試作のため、スクリプトはインラインで書いている。本番では外部ファイルにするか、CSP の nonce を付ける。

```css
:root {
  color-scheme: light dark;
  --bg: #ffffff; --surface: #f4f5f8; --text: #1d1d22; --text-2: #4a4a55;
  --accent: #0b57d0; --on-accent: #ffffff; --line: #767680;
}
@media (prefers-color-scheme: dark) {
  :root { --bg: #121216; --surface: #1c1c22; --text: #f2f2f5; --text-2: #b4b4c0;
          --accent: #8ab4ff; --on-accent: #0b0b0e; --line: #8a8a98; }
}
@media (prefers-contrast: more) {
  :root { --text: #000000; --text-2: #1d1d22; --accent: #003c9e; --line: #4a4a55; }
}
@media (prefers-contrast: more) and (prefers-color-scheme: dark) {
  :root { --bg: #000000; --surface: #121216; --text: #ffffff; --text-2: #f2f2f5;
          --accent: #b8d0ff; --on-accent: #000000; --line: #b4b4c0; }
}

body { margin: 0; background: var(--bg); color: var(--text);
  font-family: system-ui, -apple-system, "Hiragino Sans", "Yu Gothic UI", "Noto Sans CJK JP", sans-serif; }
.page { max-width: 480px; margin: 0 auto; padding: 24px 16px; }
h1 { font-size: 34px; line-height: 41px; font-weight: 700; margin: 0 0 16px; }   /* Large Title 34 / 41 pt・Bold を px に読み替え（S51） */
.plants { list-style: none; margin: 0 0 24px; padding: 0; background: var(--surface); border-radius: 12px; }
.plants li { display: flex; justify-content: space-between; align-items: center; gap: 12px;
  min-height: 44px; box-sizing: border-box; padding: 8px 16px; border-top: 1px solid var(--line);
  font-size: 17px; line-height: 22px; }
.plants li:first-child { border-top: 0; }
.plants span { font-size: 15px; line-height: 20px; color: var(--text-2); }

.btn { min-height: 44px; min-width: 44px; padding: 0 20px; border: 0; border-radius: 12px;
  background: var(--accent); color: var(--on-accent); font-size: 17px; font-weight: 600;
  transition: filter 0.1s; }                       /* 押下は色の変化のみ。0.1s は本 skill の目安 */
.btn:active { filter: brightness(0.9); }

/* シート。[open] が無い状態が「閉じた状態」で、下に隠れる。[open] との差を遷移で動かす */
.sheet { position: fixed; inset: auto 0 0 0; box-sizing: border-box; width: 100%; max-width: 480px;
  height: 360px; max-height: none; margin: 0 auto; padding: 0 20px 12px;
  border: 0; border-top: 1px solid var(--line); border-radius: 20px 20px 0 0;
  background: var(--surface); color: var(--text);
  transform: translateY(100%);
  transition: transform 0.35s ease-out, display 0.35s allow-discrete, overlay 0.35s allow-discrete; }   /* 0.35 s・ease-out は本 skill の目安 */
.sheet[open] { transform: translateY(0); }
@starting-style { .sheet[open] { transform: translateY(100%); } }   /* 開く直前の状態。ここから下からの移動が始まる */
.sheet.dragging { transition: none; }                               /* ドラッグ中は指に追従させる */
.sheet::backdrop { background: rgb(0 0 0 / 0);
  transition: background 0.35s, display 0.35s allow-discrete, overlay 0.35s allow-discrete; }
.sheet[open]::backdrop { background: rgb(0 0 0 / 0.4); }
@starting-style { .sheet[open]::backdrop { background: rgb(0 0 0 / 0); } }
.sheet h2 { font-size: 22px; line-height: 28px; font-weight: 700; margin: 0 0 8px; }   /* Title 2 の 22 / 28 pt・Bold を px に読み替え（S51） */
.sheet p { margin: 0 0 24px; }
/* つまみは補助。閉じるボタンという別経路があるので、つまみの面は WCAG 2.5.8 の最低線 24 px に合わせる */
.grab { height: 24px; touch-action: none; cursor: grab; }
.grab::before { content: ""; display: block; width: 40px; height: 6px; margin: 9px auto 0;
  border-radius: 3px; background: var(--line); }
:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }

/* 動きを減らす設定: 移動をやめ、短いフェードだけにする。CSS のメディアクエリなので、設定の途中変更にも追従する */
@media (prefers-reduced-motion: reduce) {
  .btn { transition: none; }
  .sheet { transform: none; opacity: 0;
    transition: opacity 0.15s, display 0.15s allow-discrete, overlay 0.15s allow-discrete; }   /* 0.15 s は本 skill の目安 */
  .sheet[open] { transform: none; opacity: 1; }
  @starting-style { .sheet[open] { transform: none; opacity: 0; } }
  .sheet::backdrop { transition: background 0.15s, display 0.15s allow-discrete, overlay 0.15s allow-discrete; }
  .grab { pointer-events: none; cursor: default; }   /* ドラッグで動かさない。つまみは操作対象にしない */
}
```

## 初見検証

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 下から詳細が出た。元の画面の上に重なっている | 動き方向と、背景の見え方 |
| 何を操作できるか | 閉じる・下へ払う | 「閉じる」ボタンとつまみ |
| どう操作するか | ボタンを押す、または下へ払う | つまみが払う方向を示す |

動きの検証は、動きを減らす設定をオンにした状態でも同じ 3 問に答えられることを確かめる。動きだけで伝えている情報があれば、文言か形で補う（S56）。

## 点検

- アクセシビリティ: 動きを減らす設定で移動が消え、開くときも閉じるときもフェードだけになる（CSS だけで切り替わり、設定の途中変更にも追従する）。閉じる手段がジェスチャーだけでない。動きを減らす設定ではつまみで動かせない。開くとフォーカスがシートの中へ移り、Tab・Shift+Tab がシートの外へ抜けず（標準のモーダル）、Escape で閉じて、元のボタンへ戻る。1 秒に 3 回を超える点滅が無い（S55、S72）
- 可読性: 4 通りの配色で上の比率を満たす。動いている最中も文字が読める。背景は半透明の暗い幕で覆うが、幕の下は操作できない状態なので、読めなくてよい
- やり直し: 開く途中・閉じる途中のどちらでも、次の操作で向きを変えられ、現在位置から動く（速度は引き継がない）。素早く動かしたあと止めてから離したときは、古い速度で閉じない。押しっぱなしで画面が固まらない（S68）
- 失敗パターン: 全てに弾みを付けていないか（約 0.4 超は誇張。S67）。待たせる動きが無いか。動きが落ちたフレームを隠していないか。遅い読み込みや落ちたフレームは、理由を言えなくても体験を悪くする（S70）。手書きのシート（独自の開閉状態・タイマー・手動の inert）は、設定の途中変更やフォーカスの取りこぼしを起こしやすい。標準の `<dialog>` に寄せる（本 skill の整理）
- 推測の明示: 0.35 s・0.2 s・0.1 s・0.15 s・80 ms は本 skill の目安で、実機の手触りで調整する。端末の性能・ブラウザの実装で結果が変わる。`@starting-style` と `allow-discrete` の対応状況は、台帳に出典が無い（2026-11-15 時点）。非対応のブラウザでは、アニメーションなしで開閉する

## この例の出典

S23、S25、S51、S55、S56、S57、S58、S61、S64、S67、S68、S70、S72、S73、S77。台帳は `../references/sources.md`。

# 例: 監査ログと CSV 取り込みの結果（案件管理の操作の記録）

操作の記録（監査ログ）の書き方と、CSV の取り込みの確認画面・結果画面を決める例。誰が・いつ・何を・前の値と後の値を並べる列の設計、日付・時刻・曜日・桁区切りの国内の表記、相対時刻と絶対時刻の使い分け、成功・失敗・スキップの件数と、失敗した行を行番号と理由で一覧にして直して取り込み直す流れ、権限が無いときの表示を扱う。題材は `list-from-db-columns.md` と同じ架空のリフォーム会社の社内システムで、実在の製品・企業の画面の模倣は含まない。「誰がいつ変えたか追えない」「取り込みでエラーが出たが、どの行か分からない」「権限が無いと言われるだけで困る」と相談されたとき、履歴や取り込み結果の文言と表記を決めるときに開く。配色と架空のデータは 5 例共通の仮置きで、写さない。

## 依頼

- 製品: 架空のリフォーム会社「こがね住設」の社内システム「こがね案件管理」（架空）
- 依頼文（架空）: 「あとから、誰がいつ金額を変えたのか追えない。CSV で案件をまとめて入れたら『エラー 5 件』とだけ出て、どの行が悪いのか分からない。担当のアカウントだと、画面が真っ白になる」
- 現状（架空）: 変更の履歴は「更新しました」「登録しました」と、更新日時（2026-11-13 12:00:00.000）と更新者の ID だけが並ぶ。前の値は残らない。CSV の取り込みは、ファイルを選ぶと即実行され、「エラー 5 件」とだけ出る。権限の無い利用者には、空の画面が出る
- 想定ユーザーと作業: 事務と管理者の権限を持つ柳瀬 結衣（以下、管理者）。月に数回、案件の金額や日付が変わった経緯を調べる（置いた前提）。月に数回、受付で取りまとめた CSV（12 行ほど）を取り込む。担当の利用者（三好 彩。工程管理の小野寺 隆も同じ）は、取り込みの実行と記録の閲覧の権限が無い
- 範囲外: 操作の記録の検索・絞り込み・出力、権限の設計、取り込みの技術（文字コード・巨大ファイル）、帳票・社内規程に基づく保存期間の要件

### 根拠の範囲（先に読む）

- 出典のある事実は次のとおり。時刻には、何の時刻かのラベルを付け、UTC のオフセットを常に書き、変更者の名前は時刻の後ろに足す（S090。Cloudscape。クラウドのコンソールの規則）。相対は、どれくらい前かを知りたいとき。絶対は、いつかを知りたいとき（S089）。期限など、その時刻までに行動する日時は、正確な日時で示す（S084）。短い相対を出すなら、正確な日時へ届く手段を付け、ホバーの `title` だけではキーボード利用者に届かない（S086）。過去の内容を後から使う利用者には絶対（S091。個人ブログ）。`time` 要素の `datetime` は、機械可読にする（S092）。相対の表記が並ぶと新旧が分かりにくいという指摘もある（S305。2013 年の個人ブログ。リアルタイム性の高いサービスの投稿を例にした指摘で、業務システムの履歴での検証は述べていない。区分 C）。履歴の各項目の文面が、状態を伝える（S087。Primer の timeline の部品）。取り込みは、実行前に取り込み後の状態を見せ、エラーがあれば MessageIcon（アイコン）で示し、実行中は前のステップに戻れない（S120。freee Vibes）。空欄は、未設定が空白、存在しない項目が「-」（S100）。0 や無入力の表示を決める（S126）。ステータスが変わると使えるようになることを伝えたいなら、非活性（S123）。空の状態の文言が実際の状態と違うと害が大きい（S101）。キーボードで流れが操作できる（S318。自社の指針）。操作の対象が不明なラベルを避ける（S124）。履歴の項目を、色だけに頼らず（S048）、色・形・記号のうち 2 つ以上で示す（S061）
- 国内の表記（S157 は引用原文、他は要旨・逐語引用なし）: 画面の日付は 2025/01/01 の形、時刻は 24 時間制、機械が扱う CSV や API の日付は YYYY/MM/DD に固定（S275。要旨）。数字は半角、3 桁ごとに半角カンマ、人は「名」、書類・依頼は「件」（S274。要旨）。監査ログの操作内容は体言止めで統一し、読みやすさより一貫性・一覧性・検索性を取る（S280。要旨）。ボタンは動詞の終止形で、「する」を省く（S278。要旨）。和暦は、内部は西暦で、入力の入り口で受ける部品がある（S277。要旨）。デジタル庁は、和暦に対応した日付ピッカーを、現時点で提供していないと述べる（S157）。取り込み前の CSV を確認する画面向けの、表計算ソフト風の部品もある（S271。要旨）
- 本 skill の目安（出典なし）: 配色、寸法、曜日の併記、日時を日本時間とだけ書くこと、行の数（12 行）、検査の規則（和暦・ハイフン・単位・必須の空・登録済みの案件番号）、取り込みを失敗の行を除いて実行すること、失敗した行の CSV の末尾の列、権限の 2 種（管理者・担当）、サンプルの値のすべて
- 外れる点: S090 の逐語は、UTC のオフセットを常に付けるよう述べる。この例は、日本国内の 1 つの時間帯だけを使う社内システムとして、表の見出しに「日本時間」と 1 度だけ書く（本 skill の整理）。複数の時間帯をまたぐシステムでは、S090 に従う。権限が無いときの表示は、読んだ範囲の台帳に直接の出典が無く、SKILL.md と同じく「詳細は未照合」である。S123 は、使えない操作の見せ方（非表示か非活性か）の出典で、権限の無い理由の文言の出典ではない
- 本 skill の整理（出典なし）: CSV の式注入への対策（取り込みで先頭が `=` `+` `-` `@` の文字列を失敗にする・書き出しで先頭に `'` を付ける）。台帳に直接の行は無い。曜日の併記。S275（要旨）に曜日の記述は無い。曜日はコードで日付から計算し、固定した 2026/11/16 が月曜であることと合わせて確かめた

## 目的の一文

あとから「誰が・いつ・何を・何から何へ」を 1 行で追え、取り込みでは、どの行がなぜ失敗したかを直せる形で返す。

## 削るもの

| 前（現状） | 扱い | 後 | 理由 |
|---|---|---|---|
| 更新日時 2026-11-13 12:00:00.000 | 変える | 2026/11/13（金）12:00。ミリ秒と秒を削る | 国内の表記（S275。要旨）。曜日は本 skill の整理 |
| 更新者の ID | 変える | 氏名。時刻の隣に置く | 変更者の名前を足す（S090） |
| 「更新しました」 | 変える | 見積金額を変更／入金済額を変更 | 体言止めで一貫・一覧・検索（S280。要旨）。何を変えたかを言う |
| 前の値が残らない | 足す | 前の値・後の値の 2 列 | 何から何へ変わったかが、記録の中心 |
| 内部の列名 `amount` | 変える | 見積金額、金額は 1,128,000 円 | 内部の用語を出さない（S132）。カンマ（S274。要旨） |
| 「エラー 5 件」 | 変える | 行番号・案件番号・項目・ファイルの値・直し方の一覧 | 何が悪いかを、直せる単位で言う |
| ファイルを選ぶと即実行 | 変える | 内容の確認の画面を挟む。実行すると戻れないと言う | S120 |
| 空の画面（権限なし） | 変える | 権限が無い理由・誰に頼むか・できること | S101 の考え方。文言は本 skill の整理 |

## 構成

画面は 1 ページに、上から、操作の記録（監査ログ）→ CSV の取り込み（手順の見出し → 内容の確認 → 結果）の順に置く。見本のために 2 つの画面を 1 ページに入れた。実際は別の画面である。

### 操作の記録（監査ログ）

| 列 | 内容 | 揃え・書式 |
|---|---|---|
| 日時 | 2026/11/16（月）08:10。`time` 要素に `datetime`。日本時間は表の見出しに 1 度 | 左揃え。折り返さない（S092、S090） |
| 操作者 | 氏名。システムや受付など、人でない場合は役割名 | 左揃え |
| 案件 | 案件番号。複数のときは、先頭と「ほか」 | 左揃え。折り返さない |
| 操作 | 「見積金額を変更」「案件を登録」の体言止め | S280（要旨） |
| 前の値・後の値 | 値の型ごとに書式を合わせる。金額は 1,128,000 円、日付は 2026/11/10（火）、文字はそのまま | 左揃え。値に単位を付ける（下の注） |

- 前の値が存在しないとき（登録）は「-」（読み上げは「なし」）、未設定のときは空欄（読み上げは「未設定」）。0 は 0 円と書く（S100、S126）
- 一覧の数値の列は、単位を見出しに出して右揃えにする（`list-from-db-columns.md`）。この表は、1 列に項目の違う値（金額・日付・文字）が入るため、単位を値に付け、右揃えにしない。これは本 skill の整理で、この列だけの例外である
- 新しい順に並べる。調べ物は「最近何が変わったか」から始まるため（本 skill の整理）。古い順にする製品もあり、出典は決めていない。古い順は、経緯を最初から読み通すときに向く。最後の操作の 1 行を表の上に出す（相対と絶対の併記）。表の中は絶対だけにする
- 見本の記録は、2026/11/02 から 2026/11/16 までの 10 行の抜粋。一覧の 12 件の「更新日時」のうち、この期間内の 10 件の更新が、1 件 1 行で載る。それより前の更新（2609-201・2608-134）は含めない。1 件の案件の操作は、実際はもっと多い
- 幅が狭い（60rem 未満）とき、行を 2 段にする（本 skill の整理。`SKILL.md` の「行を 2 段にする」）。日時・操作・操作者と案件・前・後を、1 行ずつ縦に並べ、前と後にはラベルを付ける。表の構造が支援技術に保たれるかは未確認
- 取り込み前の確認の表は、狭い幅でも列を隠さない。顧客・工事名・工種・担当・受付日・見積金額は、取り込みの前に中身を確かめるための値で、隠すと確認できないまま実行できてしまうため（本 skill の整理）。表に最小幅（46rem）を与え、名前つきの横スクロールの容器（`role="region"`・`tabindex="0"`・`aria-label`）の中で動かす。行を展開する入口は作らない。判定は、取り込む前に最初に見る情報なので、全幅で行番号の次（左から 2 列目）に置く。固定列（`position: sticky`）は、地の色・境界・ダークの組み合わせで崩れやすいので使わず、列の並びだけで、390・320 px でも動かさずに見える位置にする。失敗の CSV の列の順は、元の CSV のまま変えない（直して取り込み直すため）

### 相対時刻と絶対時刻（出典が割れる）

| 一方 | 他方 |
|---|---|
| Cloudscape は、ほとんどの場面で相対を勧める（S067）。Primer は、現在に近いものは相対（S083） | 期限など行動する日時は正確な日時（S084）。過去の内容を後から使うなら絶対（S091）。相対の表記が並ぶと新旧が分かりにくい（S305。個人ブログ） |

| 場面 | 表記 | 理由（本 skill の整理。出典は上のとおり） |
|---|---|---|
| 操作の記録の日時 | 絶対（曜日つき） | 後から経緯を引く。ほかの案件の日付と突き合わせる（S089、S091） |
| 表の上の「最後の操作」 | 絶対と相対を併記（55 分前） | 新しさを知りたい（S089）。絶対も隣に出す（S086） |
| 期限 | 絶対を主に、補助の相対（`list-from-db-columns.md`） | 行動する日時は正確に（S084） |
| 取り込みの実行時刻 | 絶対 | 結果は後から参照する |

- 相対は、`time` 要素の `datetime`（`+09:00` つき）を持たせ、短縮した書き方（「55 分前」より短い）にしない（S086）。1 分未満は `今` と出す（0 分前とは言わない）。この例は、相対を使う場所を最後の操作の 1 行に絞った。絶対の日時と相対の両方を `time` にし、同じ `datetime` を持たせる

### CSV の取り込み

3 つの手順（ファイルを選ぶ → 内容を確認 → 結果）の見出しを出し、いまの手順を `aria-current="step"` と太字・下線で示す。

1. 内容の確認: 読んだ行数、判定ごとの件数（取り込める・直す・既存と同じ）、行ごとの判定の表。実行前に、取り込み後の状態を見せ、エラーは印と文字で示す（S120、S048、S061）。判定の表は表計算に近い形で、案件の確認に限る（S271。要旨）
2. 実行: 「6 件を取り込む」。直す行は取り込まない。実行すると前に戻れないと、実行の前に言う（S120）。「やめる」は、手順の表示を「1 ファイルを選ぶ」に戻し、焦点を「取り込みをやめた」の見出しへ移し、「ファイルを選び直す」で確認へ戻れる
3. 結果: 成功・失敗・スキップの件数。失敗した行を、行番号・案件番号・項目・ファイルの値・直し方で一覧にする。スキップした行も、行番号と理由を 1 行で書く。直して再び取り込む導線を置く

| 判定 | 印 | 意味 | 扱い |
|---|---|---|---|
| 成功 / 取り込める | ✓ | 検査を通り、登録した | 案件として登録する |
| 失敗 / 直す | ▲ | 検査に通らない | 取り込まない。直す手がかりを出す |
| スキップ / 既存と同じ | ＝ | 登録済みの案件番号で、内容が同じ | 何もしない。失敗にしない |

- 件数は、成功 6・失敗 5・スキップ 1 で、行は 12 行。合計が行数と一致する
- 失敗の理由は、項目と直し方を 1 文で言う。例: 受付日は 2026/11/02 の形で書く。和暦とハイフン区切りは受け付けない
- 文字列の項目（顧客・工事名・担当）が `=` `+` `-` `@`・タブ・CR で始まる行は、失敗にする。表計算ソフトで開いたとき式として評価されるため（CSV の式注入。本 skill の整理）。直し方は「記号を外して書く」
- 登録済みの案件番号で内容が違う行は、失敗にする。CSV では上書きしない（本 skill の整理）。直すのは案件の編集画面で、再び取り込む CSV からは外す
- 和暦は受け付けない（本 skill の整理）。和暦を受ける部品の考え方は S277（要旨）。取り込みは機械が読む値として西暦に固定する（S275。要旨）。デジタル庁は和暦の日付ピッカーを提供していない（S157）。和暦を受けるかは、紙の書類が和暦かで決める
- 「直した CSV で取り込み直す」と、「失敗した行を CSV で保存」を並べる。保存した CSV は、取り込む列と同じ並びに、末尾の列「失敗の理由」を足す。取り込み直すときは、この列を読み飛ばす（本 skill の整理）。書き出すとき、文字列のセルが `=` `+` `-` `@`・タブ・CR で始まるなら、先頭に `'` を付けて式として評価されないようにする（見える文字が 1 つ増える。直すときは記号で始まる値を直し、`'` を消す）。先頭に BOM を付ける。表計算ソフトでの開き方は未確認
- 取り込みの実行は、操作の記録に 1 行（案件を一括登録（CSV）、6 件）として残る

### 権限が無いとき

出典が薄い（上の「外れる点」）。次は本 skill の整理である。

| 場面 | 表示 | 理由 |
|---|---|---|
| 画面を見る権限が無い（操作の記録） | 空にせず、「この画面を見る権限がない。操作の記録を見られるのは管理者だけ。」と、頼む相手の名前を出す | 空の画面は、読み込み中や 0 件と区別できない（S101 の考え方） |
| 操作の権限が無い（取り込みの実行） | ボタンは見せ、`aria-disabled` にして、焦点を受ける。隣の文に理由と頼む相手を書く。押しても何も起きない | 機能の存在を知らせる（S123、S121）。`disabled` は焦点を受けず、理由に届かない |

- 内容の確認までは、担当にも見せる。実行だけを管理者にした（置いた前提）

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| 日付 | 2026/11/16（月）。月日は 2 桁 | S275（要旨）。曜日は本 skill の整理 |
| 時刻 | 24 時間制 08:10。秒は出さない | S275（要旨）。秒を出さないのは本 skill の整理 |
| 金額・件数 | 3 桁ごとに半角カンマ。人は「名」、案件・書類は「件」。金額は値に「円」を付ける | S274（要旨） |
| 操作の文言 | 体言止め。「〜しました」を使わない | S280（要旨） |
| ボタン | 動詞の終止形。「処理」「実行」だけにしない | S278（要旨）、S124 |
| 判定の印 | ✓ ▲ ＝。色と印と文字の 3 つ | S048、S061 |
| 失敗の表 | 行番号（ファイルの行）・案件番号・項目・ファイルの値・直し方。ファイルの値が空なら、読み上げは「未設定」 | 本 skill の整理 |
| 焦点 | 手順が変わったら、新しい見出しへ。取り込み直すときは確認の見出しへ。やめたときは「取り込みをやめた」の見出しへ | 本 skill の整理。キーボードの流れは S318 |
| 受付日の検査 | 書式（`2026/11/02`）のあとに、年月日が実在するかを見る。`Date.UTC` で組み直し、年・月・日が一致するかで判る。`2026/02/30`・`2026/99/99`・うるう年でない年の 2 月 29 日は失敗、`2028/02/29` は通る | 本 skill の整理 |
| 見積金額の検査 | カンマ無しの整数か、3 桁区切りの整数（`1,200,000`）だけを通す。カンマを外した整数が 1 円以上 1 億円未満かを見る。`,`・`1,2`・`0` は失敗 | 書式は本 skill の整理。上限の 1 億円未満は本 skill の目安（置いた前提）。実際の業務の上限に置き換える |
| 式注入の対策 | 取り込みは、顧客・工事名・担当が `=` `+` `-` `@`・タブ・CR で始まれば失敗。書き出しは、文字列のセルのその先頭に `'` | 本 skill の整理 |

### 配色の追加（WCAG の相対輝度式による計算）

文字の基準 4.5:1 は、本 skill の台帳に WCAG 本文の逐語が無く未照合。非文字の 3:1 は S065。既存の組（本文・補助文字・バッジ）は `list-from-db-columns.md` の表にある。

| 組み合わせ | ライト | ダーク |
|---|---|---|
| 補助文字 / ページの地 | 6.90 | 8.92 |
| 本文 / 見出し行の地 | 12.30 | 11.93 |
| 成功の印の文字 / 面 | 7.14 | 9.62 |
| 失敗の印の文字 / 面 | 7.78 | 8.33 |
| スキップの印の文字 / 面 | 7.92 | 8.56 |
| 手順の下線（アクセント）/ ページの地（非文字） | 5.77 | 9.88 |

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| 操作の列 | 更新しました | 見積金額を変更／案件を登録／案件を一括登録（CSV） | 体言止め（S280。要旨） |
| 日時 | 2026-11-13 12:00:00.000 | 2026/11/13（金）12:00 | S275（要旨）。曜日は本 skill の整理 |
| 最後の操作 | （無し） | 最後の操作: 2026/11/16（月）08:10（55 分前）、受付。1 分未満は（今） | 絶対と相対を併記（S086） |
| 表の見出し | 履歴 | 操作の記録（新しい順。日時は日本時間） | 並びと時間帯を言う（S090 の考え方） |
| 確認の件数 | エラー 5 件 | 取り込める 6 件・直す 5 件・既存と同じ 1 件 | 3 つに分ける |
| 実行の前 | （無し） | 直す 5 行は取り込まない。実行すると前の画面へは戻れない。 | S120 |
| 結果の件数 | 完了 | 成功 6 件・失敗 5 件・スキップ 1 件 | 合計が行数 |
| スキップ | （無し） | スキップ: 行 10（2610-088）。登録済みで内容が同じ。 | 失敗にしない |
| 失敗の理由 | エラー | 見積金額: 数字だけで書く。区切るなら 3 桁ごとのカンマ（1,200,000）。単位の「円」は付けない | 項目と直し方を言う |
| 導線 | （無し） | 直した CSV で取り込み直す／処理できなかった 5 行を CSV で保存 | 直して再び取り込む |
| やめた後 | （無し） | 取り込みをやめた。案件は何も変わっていない。／ファイルを選び直す | やり直しの入口を残す |
| 権限（画面） | （空の画面） | この画面を見る権限がない。操作の記録を見られるのは管理者だけ。必要なときは、管理者（柳瀬 結衣）に頼む。 | 理由と頼む相手 |
| 権限（操作） | （押せない・理由なし） | 取り込みを実行できるのは管理者だけ。いまの権限は担当で、確認までできる。実行は管理者に頼む。 | 理由と、できること |

## コード断片

1 ファイルの HTML。ブラウザーで開くとそのまま動く。外部のライブラリ・フォント・画像・計測は使わない。データの描画は `textContent` と要素の組み立てで行い、生のデータを `innerHTML` に入れない。ダークは `prefers-color-scheme` で切り替える。いまの時刻は 2026-11-16 09:05 に固定してある（`new Date()` を使わない）。CSV の読み取りは省き、読んだ後の行を配列で持つ。ページ右上の選択で権限を切り替えられる（URL の末尾に `#role=staff` でも）。

```html
<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>こがね案件管理 操作の記録と CSV の取り込み</title>
<style>
:root {
  color-scheme: light dark;
  --bg: #f1f0ea; --surface: #fbfaf6; --head: #e7e6dc; --text: #25251e; --text-2: #52524a; --line: #76755f; --rule: #d2d1c4;
  --accent: #55631a; --on-accent: #ffffff; --over: #9b1c22; --over-bg: #f9e3e1; --done: #17604d; --done-bg: #dcefe8; --hold: #4f4f46; --hold-bg: #e6e5dc;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #171814; --surface: #1f201b; --head: #2a2b24; --text: #ecebe1; --text-2: #b9b8aa; --line: #98978a; --rule: #3a3b32;
    --accent: #b9c96b; --on-accent: #1a2005; --over: #ff9f98; --over-bg: #3d1f1e; --done: #86d6b8; --done-bg: #173128; --hold: #bdbcae; --hold-bg: #33332c;
  }
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--text); font: 0.875rem/1.5 system-ui, "Hiragino Sans", "Yu Gothic", "Noto Sans JP", sans-serif; }
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.page { max-width: 90rem; margin: 0 auto; padding: 0.75rem 1rem 2rem; }
h1 { margin: 0 0 0.5rem; font-size: 1.125rem; }
h2 { margin: 1.25rem 0 0.375rem; font-size: 1rem; }
h3 { margin: 0.75rem 0 0.25rem; font-size: 0.9375rem; }
p { margin: 0 0 0.5rem; }
button, select { font: inherit; color: inherit; min-height: 2rem; padding: 0.25rem 0.75rem; background: var(--surface); border: 1px solid var(--line); border-radius: 6px; cursor: pointer; }
button.primary { background: var(--accent); color: var(--on-accent); border-color: var(--accent); font-weight: 700; }
button[aria-disabled="true"] { background: var(--head); color: var(--text-2); border-style: dashed; cursor: not-allowed; }
:focus-visible, [tabindex="-1"]:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.role { display: flex; flex-wrap: wrap; gap: 0.25rem 0.5rem; align-items: center; color: var(--text-2); margin-bottom: 0.5rem; }
.role select { min-width: 0; max-width: 100%; }
.sub { color: var(--text-2); }
.notice { padding: 0.5rem 0.75rem; background: var(--surface); border: 1px solid var(--line); border-radius: 6px; }
.steps { display: flex; flex-wrap: wrap; gap: 0.25rem 1rem; margin: 0 0 0.5rem; padding: 0; list-style: none; }
.steps li { color: var(--text-2); }
.steps li[aria-current="step"] { color: var(--text); font-weight: 700; border-bottom: 2px solid var(--accent); }
.tiles { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.5rem 0; }
.tiles div { min-width: 7rem; padding: 0.375rem 0.75rem; background: var(--surface); border: 1px solid var(--line); border-radius: 6px; }
.tiles dt { color: var(--text-2); font-size: 0.8125rem; } .tiles dd { margin: 0; font-size: 1.25rem; font-weight: 700; font-variant-numeric: tabular-nums; }
.mk-ok { color: var(--done); } .mk-ng { color: var(--over); } .mk-skip { color: var(--hold); }
.tw { position: relative; overflow-x: auto; }   /* 200% など表が収まらないときだけ、表の中で横に動く。焦点が入るのでキーボードで動かせる */
table { width: 100%; border-collapse: separate; border-spacing: 0; background: var(--surface); }
caption { padding: 0.375rem 0.5rem; text-align: left; font-weight: 700; }
th, td { padding: 0.375rem 0.625rem; text-align: left; vertical-align: top; border-bottom: 1px solid var(--rule); overflow-wrap: anywhere; }
thead th { background: var(--head); border-bottom: 1px solid var(--line); font-weight: 600; vertical-align: bottom; }
th[scope="row"] { font-weight: 400; }
.num { text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
.nb, .imp .h-no { white-space: nowrap; font-variant-numeric: tabular-nums; }
.dash { color: var(--text-2); }
.badge { display: inline-flex; gap: 0.25rem; padding: 0 0.5rem; border: 1px solid currentColor; border-radius: 4px; white-space: nowrap; font-weight: 600; font-size: 0.8125rem; }
.b-ok { color: var(--done); background: var(--done-bg); } .b-ng { color: var(--over); background: var(--over-bg); } .b-skip { color: var(--hold); background: var(--hold-bg); }
.why { display: block; margin-top: 0.125rem; }
.acts { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.75rem 0; }
@media (max-width: 59.99rem) {
  .page { padding: 0.5rem 0.75rem 1.5rem; }
  .log thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }   /* 見出しは読み上げ用に残す */
  .log tr { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid var(--rule); padding: 0.25rem 0; }
  .log td { display: block; border: 0; padding: 0.125rem 0.5rem; }
  .log td.k, .log td.w, .log td[data-l] { grid-column: 1 / -1; }
  .log td.k { white-space: normal; }
  .log td.k { order: 1; } .log td.w { order: 2; font-weight: 700; } .log td.p { order: 3; } .log td.q { order: 4; } .log td[data-l="前"] { order: 5; } .log td[data-l="後"] { order: 6; }
  .log td[data-l]::before { content: attr(data-l) "　"; color: var(--text-2); }
  .imp .h-j { min-width: 11rem; }
  .imp { min-width: 46rem; }   /* 列は隠さない。表は名前つきの容器 .tw の中で横に動く */
}
</style>
</head>
<body>
<div class="page">
  <h1>操作の記録と CSV の取り込み<small class="sub">　こがね案件管理（架空）。いまは 2026/11/16（月）09:05 として表示する</small></h1>
  <label class="role">権限（確認用）<select id="role"><option value="admin">管理者（柳瀬 結衣）</option><option value="staff">担当（三好 彩）</option></select></label>

  <h2 id="log-h">操作の記録（監査ログ）</h2>
  <div id="log"></div>

  <h2>CSV の取り込み</h2>
  <ol class="steps" id="steps"><li id="s1">1 ファイルを選ぶ（済）</li><li id="s2">2 内容を確認</li><li id="s3">3 結果</li></ol>
  <div id="imp"></div>
</div>
<script>
// 架空のデータ。いまの時刻と利用者は固定（new Date() を使わない）。CSV の読み取りは省き、読んだ後の行を配列で持つ
const NOW = '2026-11-16 09:05', ADMIN = '柳瀬 結衣', KINDS = ['水まわり', '外装', '内装', '建具'], WD = ['日', '月', '火', '水', '木', '金', '土'];
const $ = (id) => document.getElementById(id);
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; };
const p2 = (n) => String(n).padStart(2, '0'), yen = (n) => Number(n).toLocaleString('ja-JP');
const ymdw = (s) => { const [y, m, d] = s.slice(0, 10).split('-').map(Number); return y + '/' + p2(m) + '/' + p2(d) + '（' + WD[new Date(Date.UTC(y, m - 1, d)).getUTCDay()] + '）'; };
const minsAgo = (s) => Math.round((Date.parse(NOW.replace(' ', 'T') + 'Z') - Date.parse(s.replace(' ', 'T') + 'Z')) / 6e4);
const rel = (m) => m < 1 ? '今' : m < 60 ? m + ' 分前' : m < 1440 ? Math.floor(m / 60) + ' 時間前' : Math.floor(m / 1440) + ' 日前';
const none = () => { const f = document.createDocumentFragment(); f.append(el('span', 'dash', '-'), el('span', 'sr', 'なし')); return f; };
const blank = () => el('span', 'sr', '未設定');
const D = (s) => ({ d: s });
const LOG = [   // 新しい順。2026-11-02 から 11-16 までの抜粋。値: 文字列・数値（円）・{d} 日付・'' 未設定・null 存在しない
  ['2026-11-16 08:10', '受付', '2611-030', '案件を登録', null, '工種: 内装、担当: 未設定'],
  ['2026-11-15 10:30', '久保田 誠', '2611-025', '見積金額を変更', 1128000, 1176000],
  ['2026-11-14 09:05', '小野寺 隆', '2611-021', '入金済額を変更', 3120000, 6240000],
  ['2026-11-13 15:10', '三好 彩', '2611-003', '現地調査日を変更', D('2026-11-10'), D('2026-11-17')],
  ['2026-11-13 12:00', '柳瀬 結衣', '2610-061', '入金済額を変更', 0, 100000],
  ['2026-11-12 13:30', '久保田 誠', '2610-088', '完工予定日を変更', D('2026-11-20'), D('2026-11-25')],
  ['2026-11-10 17:45', '佐伯 和也', '2610-074', '完工予定日を変更', D('2026-11-27'), D('2026-12-04')],
  ['2026-11-10 14:20', '小野寺 隆', '2611-009', '工程を変更', '見積', '契約'],
  ['2026-11-09 16:20', '柳瀬 結衣', '2611-018', '見積金額を変更', 1150000, 1284000],
  ['2026-11-02 11:40', '佐伯 和也', '2610-097', 'メモを変更', '', '施主から着工日の再調整の連絡待ち']
];
function val(td, v) {
  if (v === null) td.append(none()); else if (v === '') td.append(blank());
  else td.append(typeof v === 'number' ? yen(v) + ' 円' : v.d ? ymdw(v.d) : v);
  return td;
}
function renderLog() {
  const box = $('log'); box.replaceChildren();
  if ($('role').value !== 'admin') {   // 権限なし: 理由・誰に頼むか・何が要るかを、画面の中に書く
    const n = el('div', 'notice'); n.append(el('p', null, 'この画面を見る権限がない。操作の記録を見られるのは管理者だけ。'), el('p', 'sub', '必要なときは、管理者（柳瀬 結衣）に頼む。'));
    box.append(n); return;
  }
  const last = LOG[0], iso = last[0].replace(' ', 'T') + ':00+09:00', top = el('p', 'sub'), t1 = el('time', null, ymdw(last[0]) + last[0].slice(11)), t2 = el('time', null, rel(minsAgo(last[0])));
  t1.dateTime = iso; t2.dateTime = iso; top.append('最後の操作: ', t1, '（', t2, '）、' + last[1]); box.append(top);
  const t = el('table', 'log'), cap = el('caption', null, '操作の記録（新しい順。日時は日本時間）'); t.append(cap);
  const hr = el('tr'); ['日時', '操作者', '案件', '操作', '前の値', '後の値'].forEach((h) => { const th = el('th', null, h); th.scope = 'col'; hr.append(th); });
  const th = el('thead'); th.append(hr); t.append(th);
  const tb = el('tbody');
  LOG.forEach((r) => {
    const tr = el('tr'), at = el('td', 'nb k'), tm = el('time', null, ymdw(r[0]) + r[0].slice(11)); tm.dateTime = r[0].replace(' ', 'T') + ':00+09:00'; at.append(tm);
    const no = el('td', 'nb q', r[2]), who = el('td', 'p', r[1]), act = el('td', 'w', r[3]);
    const b = val(el('td'), r[4]), a = val(el('td'), r[5]); b.dataset.l = '前'; a.dataset.l = '後';
    tr.append(at, who, no, act, b, a); tb.append(tr);
  });
  t.append(tb); box.append(tw(t, '操作の記録'));
}

// 取り込み: [行, 案件番号, 顧客, 工事名, 工種, 担当, 受付日, 見積金額（ファイルの文字）]
const EXIST = { '2611-018': ['松尾 恵子 様', 'キッチンの入れ替え（壁付けから対面へ）', '水まわり', '柳瀬 結衣', '2026/11/02', '1284000'], '2610-088': ['森下 義雄 様', '洗面台の交換', '水まわり', '久保田 誠', '2026/10/20', '98000'] };
const AMOUNT_MAX = 100000000;   // 本 skill の目安（置いた前提）: 見積金額は 1 億円未満
const FIELDS = ['顧客', '工事名', '工種', '担当', '受付日', '見積金額'];
const FILE1 = [
  [2, '2611-031', '近藤 典子 様', '勝手口ドアの交換', '建具', '三好 彩', '2026/11/16', '218,000'],
  [3, '2611-032', '有限会社 白樺工務店 様', '事務所の床の張り替え', '内装', '久保田 誠', '2026/11/16', '640,000'],
  [4, '2611-018', '松尾 恵子 様', 'キッチンの入れ替え（壁付けから対面へ）', '水まわり', '柳瀬 結衣', '2026/11/02', '1,248,000'],
  [5, '2611-033', '北川 和子 様', '浴室の水栓の交換', '水まわり', '佐伯 和也', '令和 8 年 11 月 2 日', '86,000'],
  [6, '2611-034', '松田 久美 様', '玄関の手すりの取り付け', '建具', '三好 彩', '2026-11-02', '54,000'],
  [7, '2611-035', '株式会社 双葉不動産 管理課 ご担当者様', '空室 3 戸の原状回復', '内装', '小野寺 隆', '2026/11/10', '1,200,000円'],
  [8, '2611-036', '谷 正樹 様', '', '外装', '佐伯 和也', '2026/11/12', '330,000'],
  [9, '2611-037', '内山 里奈 様', 'カーポートの屋根の張り替え', '外装', '久保田 誠', '2026/11/12', '770,000'],
  [10, '2610-088', '森下 義雄 様', '洗面台の交換', '水まわり', '久保田 誠', '2026/10/20', '98,000'],
  [11, '2611-038', '森本 敏 様', '勝手口の段差解消', '外装', '', '2026/11/13', '150,000'],
  [12, '2611-039', '河野 美紀 様', '窓ガラスの交換', '建具', '三好 彩', '2026/11/13', '128,000'],
  [13, '2611-040', '平山 勝己 様', '給湯器の交換', '水まわり', '佐伯 和也', '2026/11/13', '396,000']
];
const FILE2 = [   // 直した CSV（見本）。登録済みの 2611-018 は CSV から外し、案件の編集画面で直す
  [2, '2611-033', '北川 和子 様', '浴室の水栓の交換', '水まわり', '佐伯 和也', '2026/11/02', '86,000'],
  [3, '2611-034', '松田 久美 様', '玄関の手すりの取り付け', '建具', '三好 彩', '2026/11/02', '54,000'],
  [4, '2611-035', '株式会社 双葉不動産 管理課 ご担当者様', '空室 3 戸の原状回復', '内装', '小野寺 隆', '2026/11/10', '1,200,000'],
  [5, '2611-036', '谷 正樹 様', '外壁の部分補修', '外装', '佐伯 和也', '2026/11/12', '330,000']
];
function check(r) {   // 判定。失敗は {item, why}
  const [, no, cu, ti, ki, ow, re, am] = r, ex = EXIST[no];
  if (!/^\d{4}-\d{3}$/.test(no)) return { s: 'ng', item: '案件番号', why: '2611-018 の形で書く' };
  if (!ti) return { s: 'ng', item: '工事名', why: '空にできない。必ず書く' };
  const inj = [['顧客', cu], ['工事名', ti], ['担当', ow]].find(([, v]) => /^[=+\-@\t\r]/.test(v));   // CSV の式注入
  if (inj) return { s: 'ng', item: inj[0], why: '先頭が = + - @ の値は式として読まれるため受け付けない。記号を外して書く' };
  const pre = [['顧客', cu], ['工事名', ti], ['担当', ow]].find(([, v]) => /^'[=+\-@\t\r]/.test(v));   // 書き出しで付けた ' の消し忘れ
  if (pre) return { s: 'ng', item: pre[0], why: '先頭の \' を外してください。\' の次の記号も外して書く' };
  if (!KINDS.includes(ki)) return { s: 'ng', item: '工種', why: '水まわり・外装・内装・建具のどれかで書く' };
  if (!/^\d{4}\/\d{2}\/\d{2}$/.test(re)) return { s: 'ng', item: '受付日', why: '2026/11/02 の形で書く。和暦とハイフン区切りは受け付けない' };
  const [yy, mm, dd] = re.split('/').map(Number), dt = new Date(Date.UTC(yy, mm - 1, dd));   // 組み直して一致を見る。うるう年も判る
  if (dt.getUTCFullYear() !== yy || dt.getUTCMonth() !== mm - 1 || dt.getUTCDate() !== dd) return { s: 'ng', item: '受付日', why: '実在しない日付。年月日を確かめて、2026/11/02 の形で書く' };
  if (!/^(\d+|\d{1,3}(,\d{3})+)$/.test(am)) return { s: 'ng', item: '見積金額', why: '数字だけで書く。区切るなら 3 桁ごとのカンマ（1,200,000）。単位の「円」は付けない' };
  const yenN = Number(am.replaceAll(',', ''));   // 正規化した整数
  if (yenN < 1 || yenN >= AMOUNT_MAX) return { s: 'ng', item: '見積金額', why: '1 円以上 1 億円未満で書く。桁を確かめる' };
  if (ex) {
    const now = [cu, ti, ki, ow, re, am.replaceAll(',', '')], i = now.findIndex((v, k) => v !== ex[k]);
    return i < 0 ? { s: 'skip', why: '登録済みで内容が同じ' } : { s: 'ng', item: '案件番号', why: '登録済みで、' + FIELDS[i] + 'が違う（登録済み ' + (i === 5 ? yen(ex[i]) : ex[i]) + '、ファイル ' + (i === 5 ? yen(now[i]) : now[i]) + '）。CSV では上書きしない' };
  }
  return { s: 'ok' };
}
let file = FILE1, step = 'confirm', result = null;
const canRun = () => $('role').value === 'admin';
const MARK = { ok: ['✓', '取り込める'], ng: ['▲', '直す'], skip: ['＝', '既存と同じ'] };
function badge(s, text) { const b = el('span', 'badge b-' + s), m = el('span', null, MARK[s][0]); m.setAttribute('aria-hidden', 'true'); b.append(m, el('span', null, text || MARK[s][1])); return b; }
function tiles(items) { const dl = el('dl', 'tiles'); items.forEach(([s, label, n]) => { const d = el('div'), dt = el('dt'), m = el('span', 'mk-' + s, MARK[s][0] + ' '); m.setAttribute('aria-hidden', 'true'); dt.append(m, label); d.append(dt, el('dd', null, n + ' 件')); dl.append(d); }); return dl; }
function setStep(n) {
  ['s1', 's2', 's3'].forEach((id, i) => { const li = $(id); i + 1 === n ? li.setAttribute('aria-current', 'step') : li.removeAttribute('aria-current'); });
  $('s1').textContent = n > 1 ? '1 ファイルを選ぶ（済）' : '1 ファイルを選ぶ';
}
function tw(t, label) { const w = el('div', 'tw'); w.setAttribute('role', 'region'); w.setAttribute('aria-label', label); w.tabIndex = 0; w.append(t); return w; }   // 表の容器。収まらないときだけ中で横に動く
const heading = (t) => { const h = el('h3', null, t); h.tabIndex = -1; return h; };

function renderConfirm() {
  setStep(2); const box = $('imp'); box.replaceChildren();
  const res = file.map((r) => ({ r, c: check(r) })), n = (s) => res.filter((x) => x.c.s === s).length;
  const h = heading('内容の確認'); box.append(h, el('p', 'sub', (file === FILE1 ? 'anken_2611_import.csv' : 'anken_2611_import_fixed.csv') + ' を読んだ。' + file.length + ' 行（見出しの行を除く）。'));
  box.append(tiles([['ok', '取り込める', n('ok')], ['ng', '直す', n('ng')], ['skip', '既存と同じ', n('skip')]]));
  const t = el('table', 'imp'); t.append(el('caption', null, '取り込み後の状態（ファイルの行ごとの判定）'));
  const hr = el('tr'); [['行', 'h-ln num'], ['判定', 'h-j'], ['案件番号', 'h-no'], ['顧客', 'h-cu'], ['工事名', 'h-ti'], ['工種', 'h-ki'], ['担当', 'h-ow'], ['受付日', 'h-re'], ['見積金額（円）', 'h-am num']].forEach(([x, c]) => { const th = el('th', c, x); th.scope = 'col'; hr.append(th); });
  const thd = el('thead'); thd.append(hr); t.append(thd); const tb = el('tbody');
  res.forEach(({ r, c }) => {
    const tr = el('tr'), ln = el('td', 'num', String(r[0])), j = el('td', 'h-j'); j.append(badge(c.s));
    if (c.why) j.append(el('span', 'why', (c.item ? c.item + ': ' : '') + c.why));
    const cells = r.slice(1, 7).map((v, i) => { const td = el('td', 'h-' + ['no', 'cu', 'ti', 'ki', 'ow', 're'][i]); v === '' ? td.append(el('span', 'sr', '未設定')) : td.append(v); return td; });
    const am = el('td', 'h-am num', r[7]); tr.append(ln, j, ...cells, am); tb.append(tr);
  });
  t.append(tb); box.append(tw(t, '取り込み後の状態'));
  const acts = el('div', 'acts'), go = el('button', 'primary', n('ok') + ' 件を取り込む'); go.type = 'button';
  const stop = el('button', null, 'やめる'); stop.type = 'button';
  const why = el('p', 'sub'); why.id = 'why';
  if (!canRun()) { go.setAttribute('aria-disabled', 'true'); go.setAttribute('aria-describedby', 'why'); why.textContent = '取り込みを実行できるのは管理者だけ。いまの権限は担当で、確認までできる。実行は管理者に頼む。'; }
  else why.textContent = n('ng') ? '直す ' + n('ng') + ' 行は取り込まない。実行すると前の画面へは戻れない。直す行は、結果の画面で一覧にして、直した CSV で取り込み直せる。' : '実行すると前の画面へは戻れない。';
  go.addEventListener('click', () => { if (canRun()) run(res); });
  stop.addEventListener('click', renderStopped);
  acts.append(go, stop); box.append(why, acts);
}
function renderStopped() {   // やめた後: 手順を 1 に戻し、焦点を見出しへ移し、選び直す入口を残す
  step = 'start'; setStep(1); const box = $('imp'); box.replaceChildren();
  const h = heading('取り込みをやめた'), again = el('button', 'primary', 'ファイルを選び直す'), acts = el('div', 'acts'); again.type = 'button';
  again.addEventListener('click', () => { step = 'confirm'; renderConfirm(); $('imp').querySelector('h3').focus(); });   // 見本: 選び直したものとして、同じファイルを確認し直す
  acts.append(again); box.append(h, el('p', null, '案件は何も変わっていない。'), acts); h.focus();
}
function run(res) {
  const ok = res.filter((x) => x.c.s === 'ok');
  if (ok.length) LOG.unshift(['2026-11-16 09:05', ADMIN, ok[0].r[1] + ' ほか', '案件を一括登録（CSV）', null, ok.length + ' 件']);
  result = { res, at: '2026-11-16 09:05' }; step = 'result'; renderLog(); renderResult();
}
const safe = (v) => /^[=+\-@\t\r]/.test(String(v)) ? "'" + v : String(v);   // 式として評価されないよう、先頭に ' を付ける
function csvLine(a) { return a.map((v) => '"' + safe(v).replaceAll('"', '""') + '"').join(','); }
function renderResult() {
  setStep(3); const box = $('imp'); box.replaceChildren();
  const { res } = result, by = (s) => res.filter((x) => x.c.s === s), ng = by('ng');
  box.append(heading('取り込みの結果'), el('p', 'sub', ymdw(result.at) + result.at.slice(11) + ' に ' + ADMIN + ' が実行した。' + res.length + ' 行のうち、次のとおり。'));
  box.append(tiles([['ok', '成功', by('ok').length], ['ng', '失敗', ng.length], ['skip', 'スキップ', by('skip').length]]));
  by('skip').forEach(({ r, c }) => box.append(el('p', null, '＝ スキップ: 行 ' + r[0] + '（' + r[1] + '）。' + c.why + '。')));
  if (ng.length) {
    const t = el('table', 'imp'); t.append(el('caption', null, '処理できなかった行（' + ng.length + ' 件。行はファイルの行番号）'));
    const hr = el('tr'); [['行', 'num'], ['案件番号', ''], ['項目', ''], ['ファイルの値', ''], ['直し方', '']].forEach(([x, c]) => { const th = el('th', c, x); th.scope = 'col'; hr.append(th); });
    const thd = el('thead'); thd.append(hr); t.append(thd); const tb = el('tbody');
    ng.forEach(({ r, c }) => { const tr = el('tr'), idx = { '案件番号': 1, '顧客': 2, '工事名': 3, '工種': 4, '担当': 5, '受付日': 6, '見積金額': 7 }[c.item], v = r[idx]; const tv = el('td'); v ? tv.append(v) : tv.append(el('span', 'sr', '未設定')); tr.append(el('td', 'num', String(r[0])), el('td', 'nb', r[1]), el('td', null, c.item), tv, el('td', null, c.why)); tb.append(tr); });
    t.append(tb); box.append(tw(t, '処理できなかった行'));
  } else box.append(el('p', null, '処理できなかった行は無い。'));
  const acts = el('div', 'acts');
  if (ng.length) {
    const dl = el('button', null, '処理できなかった ' + ng.length + ' 行を CSV で保存'); dl.type = 'button';
    dl.addEventListener('click', () => {
      const body = [csvLine(['案件番号', '顧客', '工事名', '工種', '担当', '受付日', '見積金額', '失敗の理由'])].concat(ng.map(({ r, c }) => csvLine(r.slice(1).concat(c.item + ': ' + c.why)))).join('\r\n');
      const a = el('a'); a.href = URL.createObjectURL(new Blob(['\uFEFF' + body], { type: 'text/csv' })); a.download = 'anken_import_errors.csv'; a.click(); URL.revokeObjectURL(a.href);
    });
    const again = el('button', 'primary', '直した CSV で取り込み直す'); again.type = 'button';
    again.addEventListener('click', () => { file = FILE2; step = 'confirm'; renderConfirm(); $('imp').querySelector('h3').focus(); });
    acts.append(again, dl); box.append(el('p', 'sub', '保存した CSV の最後の列「失敗の理由」は、取り込み直すときに読み飛ばす。この見本では、直した CSV を読む代わりに、直した 4 行を読む。'));
  }
  box.append(acts); box.querySelector('h3').focus();
}
$('role').addEventListener('change', () => { renderLog(); if (step === 'confirm') renderConfirm(); });
const mr = /role=(\w+)/.exec(location.hash); if (mr) $('role').value = mr[1];
renderLog(); renderConfirm();
</script>
</body>
</html>
```

- 表は `table`・`caption`・`th scope` で組む。幅が狭いときの 2 段の並びは、`tr` を `display: grid` にして、見出し行は視覚的に隠す（読み上げには残す）。表の構造が支援技術に保たれるかは未確認
- 新しい機能と、非対応のときの姿（対応状況は本 skill で照合していない）: `clip-path`（読み上げ専用の文字を隠す）、`Blob` と `URL.createObjectURL`（保存の動作。非対応なら保存できない）、`replaceAll`・`replaceChildren`。`oklch()` などの新しい色の指定は使わない
- 動きは使わない（`prefers-reduced-motion` の分岐は要らない）
- UI ライブラリの表の部品を使う場合は、先に `../references/library-defaults.md` の「既定値の台帳」の 10（並べ替え・支援技術）ほか、日付の書式に関わる項目を確かめる。見た目やコードは写さない

## 初見検証

初めて見る人に、説明なしで答えてもらう設計である（実験の結果ではない）。管理者が、最初の 10 秒で見つけられるかを確かめる。10 秒は本 skill の目安で、出典は無い。

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 取り込みで 5 行が直す対象。実行しても取り込まれない | 確認の件数、判定の印（▲） |
| 何を操作できるか | 取り込む・やめる。結果で、取り込み直す・失敗の行を保存 | ボタンの文言 |
| どう操作するか | 判定を見て取り込む。失敗の行を直して、取り込み直す | 結果の失敗の表と、導線のボタン |

最初の 10 秒の質問（管理者に聞く）:

| 質問 | 期待する答え | 見る場所 |
|---|---|---|
| 2610-097 のメモを、誰がいつ変えたか | 佐伯 和也、2026/11/02（月）11:40 | 操作の記録の最下行 |
| 2611-025 の見積金額は、いくらからいくらへ変わったか | 1,128,000 円から 1,176,000 円へ | 前の値・後の値 |
| 取り込みで失敗するのは何行か | 5 行（行 4〜8） | 確認の件数、判定の表 |
| 受付日の書式で失敗した行は | 行 5 と行 6 | 結果の失敗の表 |
| 取り込んだあと、どうすれば直せるか | 失敗した行を CSV で保存し、直して取り込み直す | 結果のボタン |
| 担当の権限で見ると、何が起こるか | 記録は見られず、理由と頼む相手が出る。取り込みは確認だけできる | 権限の切り替え |

## 点検

- 目的: 経緯を 1 行で追えるか。失敗した行が、直せる単位（行番号・項目・理由）で返るか
- 操作の記録: 日時・操作者・案件・操作・前・後が揃う。体言止め。値の型ごとに書式が揃い、0 と「-」と空欄が区別できる（S100、S126）
- 時刻: 表の中は絶対で、相対は最後の操作の 1 行だけ。絶対も相対も `time` で、`datetime` に `+09:00` がある。1 分未満は「今」。曜日はコードで計算した値で、固定した今日（月曜）と合う
- 取り込み: 確認が実行の前にある。確認の表は、狭い幅でも列を隠さず、名前つきの容器の中で横に動いて全列に届く。件数の合計が行数と一致する（6 + 5 + 1 = 12）。失敗の行が行番号と理由で並ぶ。直した CSV で取り込み直せる。「やめる」のあと、手順の表示と焦点が戻り、選び直せる
- 式注入への対策: 取り込みで、顧客・工事名・担当が `=` `+` `-` `@`・タブ・CR で始まる値を失敗にする。書き出す CSV で、文字列のセルがこれらで始まれば先頭に `'` を付ける。`'` を消し忘れて取り込み直した値（先頭が `'` で次が危険な文字）も失敗にする
- サーバー側の判定: この例の権限・削除の規則・取り込みの検査・記録は画面の見本。実装ではサーバー側で同じ判定と記録を行い、画面の出し分けは表示だけ（本 skill の整理、出典なし）
- 権限: 画面は空にならず、理由と頼む相手がある。操作は押せず、理由が隣にある
- 同じ情報の重ね方: 件数は、確認と結果で同じ 12 行の内訳を別の手順で出す。ファイルの値は、確認の表と失敗の表に重なる。失敗の表は、直すための項目と直し方を足すため残した
- 配色: 追加の組は上の表
- 実測（Chrome 157・macOS・1 環境、2026-11-16。ヘッドレス Chrome を DevTools Protocol で操作し、幅を固定して測った）:
  - 横はみ出し: 幅 1440・1024・390・320 px、ライトとダーク、状態は、確認・担当の権限・結果・取り込み直し・やめた後の 5 通り、計 40 通りで、`scrollWidth` が `innerWidth` と同じ（はみ出し 0）。`innerWidth` も出力し、幅が実際に固定されていることを確かめた。案件番号の列は、1440・1024 px の 12 行すべてで 1 行に収まった（折り返さない）
  - 操作の記録: 10 行で、曜日は月・日・土・金・金・木・火・火・月・月（日付から計算した値と一致）。`datetime` は `2026-11-16T08:10:00+09:00` の形。最後の操作は「（55 分前）」で、取り込みを実行した直後は「（今）」になり、記録が 11 行に増えた。確認の件数は取り込める 6・直す 5・既存と同じ 1。実行すると成功 6・失敗 5・スキップ 1 で、失敗は行 4・5・6・7・8
  - やめる・取り込み直し: 「やめる」を押すと、焦点は「取り込みをやめた」の見出しに移り、手順の表示は「1 ファイルを選ぶ」だけが現在になる。「ファイルを選び直す」で確認に戻り、焦点は確認の見出し。結果から取り込み直すと、取り込める 4 件、結果は成功 4・失敗 0。担当の権限では、記録は理由の文（頼む相手は柳瀬 結衣）に置き換わり、取り込みのボタンは `aria-disabled` で焦点を受け、押しても手順は変わらなかった
  - 失敗の CSV: Blob の中身を読み、先頭が BOM（`ef bb bf`）、見出しと失敗の 5 行と末尾の理由の列を持つことを確かめた。`=1+1`・`+SUM(A1)`・`-2+3`・`@cmd`・タブ・CR で始まる値は先頭に `'` が付き、`abc`・`2611-031`・先頭が空白の値は変わらない。`=HYPERLINK(...)` の顧客名を入れた行は、取り込みで「顧客」の失敗になり、書き出しでも `'` が付いた
  - 取り込み前の確認の表（修正後に再測定）: 390・320 px で、9 列すべてが `display: table-cell` のまま（隠れる列は 0）。表は最小幅 736 px で、容器の幅は 366・296 px。容器は `role="region"`・`tabindex="0"`・`aria-label="取り込み後の状態"` を持ち、Tab で入れて、右矢印キーで横に動いた。容器を動かすと、顧客（390・320 px とも初期位置で見える）と見積金額（両幅とも動かす途中で見える）の両方に届いた。再実行して、確認の件数は取り込める 6・直す 5・既存と同じ 1、実行の結果は成功 6・失敗 5・スキップ 1 で変わらない。ページの横はみ出しは、1440・390・320 px、ライトとダーク、320 px の 200% を含む 8 通りで 0
  - 判定の列の位置（修正後に再測定）: 390・320 px で、判定のバッジの外接矩形が、スクロールの前から容器の範囲内に収まった。再実行して、確認は取り込める 6・直す 5・既存と同じ 1、実行は成功 6・失敗 5・スキップ 1 で変わらない。ページの横はみ出しは、1440・390・320 px（320 px は 200% も）、ライトとダークの 8 通りで 0
  - 文字 200%（`html` の `font-size` を 200% にして近似。メディアクエリの `rem` は変わらない）・320 px: ライトとダークで、既定・権限・結果の 3 状態とも `scrollWidth` が 320（変更前は 510・470）。3 つの表は `role="region"`・`tabindex="0"`・`aria-label` を持つ容器の中で動く
- 未検証・未実施:
  - スクリーンリーダーでの読み上げ（`aria-current`・`aria-disabled`・2 段の並びの表の構造・`未設定`・`なし`）。Chrome 以外のブラウザー・他の OS・実機のスマートフォン
  - 全角の `＝` `＋` `－` `＠` で始まる値が、日本語の表計算ソフトで式として扱われるか（検査の対象外で、未検証）
  - ダークと 390・320 px での操作（描画と横はみ出しだけ測った）。保存した CSV を表計算ソフトで開いたときの文字化けと、`'` の見え方
  - 作った本人とは別の目での見直し（描画は作成者が目視した）。管理者への初見検証の実施（上の表は設計で、結果ではない）
  - 大量の行、文字コード、サーバーでの失敗
- 推測の明示: 12 行・月に数回・10 秒・検査の規則（式注入の拒否を含む）・権限の 2 種・曜日の併記・日本時間の 1 度書き・色・サンプルの値は本 skill の目安で、出典は無い。権限の表示は本 skill の整理である。取り込みの流れの出典は、そのシステムの製品の文脈の規則で、日本の業務システムにそのまま移せるとは原文は述べていない

## この例の出典

S048、S061、S065、S067、S083、S084、S086、S087、S089、S090、S091、S092、S100、S101、S120、S121、S123、S124、S126、S132、S157、S305、S318。要旨の参照（逐語引用なし）は S271、S274、S275、S277、S278、S280。区分 C は S305 である。台帳は `../references/sources.md`。他の skill の台帳の番号は使っていない。

# OSS・UI ライブラリのアクセシビリティの既定値の台帳（時点情報）

ダイアログ・確認ダイアログ・メニュー・タブ・コンボボックス・トースト・表の並べ替えを OSS や UI ライブラリで作るとき、「何もしないと焦点・役割・読み上げがどうなるか」と「既定のままだと弱い点」を確かめるための台帳。「このライブラリのダイアログはアクセシブルか」「トーストは読み上げられるか」と相談されたときに開く。ライブラリを選ぶための比較表でも、優劣の評価でもない。出典の詳細（引用原文・URL・検証区分）は `sources.md` を参照する。`../SKILL.md` の「既定値の点検」から開く。

## 読み方（先に読む）

- 時点情報: 値は下の「版と取得日」の版のもの。版で変わる。使う前に自分の版で確かめる
- 列の意味: 「既定値」と「根拠」は取得した原稿（文書またはソース）に書かれていた事実に限る。「既定のままだと弱い点」は本 skill の整理（推測を含む）で、出典の事実ではない
- 根拠の書き方: `文書` は利用者向け文書の原稿、`ソース` は実装。`パス:行` の URL は、「版と取得日」の原稿 URL の接頭辞にパスを足したもの。S 番号があれば `sources.md` に逐語の引用がある（ソースのコメントの 3 件は要旨のみ。「引用ではない参照」）
- S 番号の無い値は、固定コミットの原稿のパス:行で再確認できる値で、引用ブロックには無い。S 番号のある値でも、引用ブロックにあるのは、その番号の語だけである
- 文書とソースが食い違う場合は、どちらかに寄せず両方を書く（Radix AlertDialog）
- 「既定に無い」と言えるのは「不在の記録」の範囲だけ。範囲外の「見当たらない」は不在と主張しない
- 写さない: コード・見た目は写さない。拾うのは既定値と、作り手に任されている点だけ
- ライブラリの自己紹介（「fully accessible」など）は事実として使わない（S243）
- 基準: 焦点の戻し・初期焦点・選択が焦点に従うかの評価は APG（S059・S071）を、通知の読み上げは WCAG 2.2 の 4.1.3（S031）を物差しにする。APG は作法の手引きで、規範ではない。トーストの自動消去を 2.2.1（S046）に結びつけるのは本 skill の整理（推測）である

## 版と取得日

| ライブラリ | 版（コミット） | コミット日 | 最新リリース（参考） | 取得日 | ライセンス | 原稿 URL の接頭辞 |
|---|---|---|---|---|---|---|
| Radix Primitives（文書） | radix-ui/website@402e749 | 2026-10-07 | - | 2026-11-16 | MIT | https://raw.githubusercontent.com/radix-ui/website/402e749613ab2e7ab7139c65b0029842b0360f07/ |
| Radix Primitives（ソース） | radix-ui/primitives@eb3a2b7 | 2026-10-14 | - | 2026-11-16 | MIT | https://raw.githubusercontent.com/radix-ui/primitives/eb3a2b7091293e27df8f9ba906632d8daa3d81a3/ |
| React Aria（文書・ソース） | adobe/react-spectrum@360e351 | 2026-11-13 | - | 2026-11-16 | Apache-2.0 | https://raw.githubusercontent.com/adobe/react-spectrum/360e35170568dfc99a2baaa78e6b7bdd36458d91/ |
| Headless UI（ソースのみ） | tailwindlabs/headlessui@eea57cf | 2026-04-13 | @headlessui/react v2.2.10 | 2026-11-16 | MIT | https://raw.githubusercontent.com/tailwindlabs/headlessui/eea57cf46fd6767ed1059012f7073b88eb159fba/packages/%40headlessui-react/ |
| MUI（Material UI） | mui/material-ui@476b867 | 2026-11-14 | v9.5.0 | 2026-11-16 | MIT | https://raw.githubusercontent.com/mui/material-ui/476b86779d62c937e36253db29c9d7475861889f/ |
| shadcn/ui | shadcn-ui/ui@e62c943 | 2026-11-13 | - | 2026-11-16 | MIT | https://raw.githubusercontent.com/shadcn-ui/ui/e62c9435fff729a175f38983dee73b2cb4f6a069/ |
| Sonner（shadcn/ui のトースト） | emilkowalski/sonner@8e4662b | 2026-08-10 | - | 2026-11-16 | MIT | https://raw.githubusercontent.com/emilkowalski/sonner/8e4662b39255120b62138312058f5d77c0139a5e/ |
| Bootstrap | twbs/bootstrap タグ v5.3.9（349bdb5） | 2026-11-11 | v5.3.9（main は v6 の開発中。v6.0.0-alpha.1 あり） | 2026-11-16 | MIT | https://raw.githubusercontent.com/twbs/bootstrap/349bdb50b8ab6782248c1b296443087cd7222ead/ |
| Ant Design | ant-design/ant-design@80e9a95 | 2026-11-16 | 6.7.0 | 2026-11-16 | MIT | https://raw.githubusercontent.com/ant-design/ant-design/80e9a95bf1db1210765371628e276c673c5014e9/ |
| APG（物差し） | w3c/aria-practices@f14b249 | 2026-11-13 | - | 2026-11-16 | 未確認（GitHub の判定は NOASSERTION。W3C 文書一般の前提では W3C Document License） | https://raw.githubusercontent.com/w3c/aria-practices/f14b2490a6728cda85fd7feafbd148b3c3eaf038/ |

- Bootstrap だけタグに固定したのは、既定ブランチ（main）が v6 の開発版で、利用者の多くが使う 5.3 系と中身が違うため
- Radix は文書（website）とソース（primitives）が別リポジトリ・別コミット
- Headless UI は文書サイトの原稿がリポジトリに無いため、ソースだけを読んだ
- ライセンスは GitHub API（`repos/<repo>/license`）の判定で、既定ブランチのもの。固定コミットの LICENSE 本文は読んでいない

## 既定値の台帳

「既定のままだと弱い点」の列は、すべて本 skill の整理である。

### 1. モーダルダイアログ（焦点の閉じ込め・初期焦点・戻し・名前）

| ライブラリ | 版 | 取得日 | 観点 | 既定値 | 根拠（出典 URL と行） | 既定のままだと弱い点（整理） |
|---|---|---|---|---|---|---|
| Radix Dialog | primitives@eb3a2b7 / website@402e749 | 2026-11-16 | 閉じ込めと戻し | モーダル時は開いている間、焦点を閉じ込める。閉じたら開いたボタンへ戻す。非モーダルでは閉じ込めない | ソース packages/react/dialog/src/dialog.tsx:342・344-347・383、文書 data/primitives/docs/components/dialog.mdx:24・262-266（S230） | 戻し先のボタンが閉じた後に消える作り（一覧の行の削除など）では、戻し先を自分で決める必要がある |
| Radix Dialog | 同上 | 2026-11-16 | 外を隠す・名前 | 外側は aria-modal ではなく hideOthers で支援技術から隠す。aria-labelledby は Title がある場合だけ付く | ソース dialog.tsx:332・494 | Title を省くと名前の無いダイアログになる。取得した dialog.tsx の警告は Title が複数の場合だけ（不在の記録） |
| React Aria Modal | react-spectrum@360e351 | 2026-11-16 | 閉じ込めと戻し | 焦点を閉じ込め（contain）、閉じたら戻す（restoreFocus） | ソース packages/react-aria/src/overlays/Overlay.tsx:78、useModalOverlay.ts:83 | FocusScope を単体で使う場合、contain と restoreFocus は指定しないと効かない（文書 FocusScope.mdx:28・58） |
| React Aria Modal | 同上 | 2026-11-16 | 閉じ方 | 外側のクリックで閉じない（isDismissable の既定 false）。Esc で閉じる（isKeyboardDismissDisabled の既定 false）。外側を隠す処理（ariaHideOutside）に shouldUseInert: true を渡している | ソース useModalOverlay.ts:29・35・92 | 外側クリックで閉じたい場合は明示が要る。逆に閉じない既定は誤操作に強い |
| Headless UI Dialog | headlessui@eea57cf | 2026-11-16 | 役割・閉じ込め | role は dialog、開いている間 aria-modal を付け、外側を inert にする。焦点の閉じ込め（Tab の循環）と戻しが有効 | ソース src/components/dialog/dialog.tsx:130・208・288・293-307 | 初期焦点の処理はタッチ端末かどうかで分岐する（294 行）。端末ごとに確かめる |
| Headless UI Dialog | 同上 | 2026-11-16 | 初期焦点 | autoFocus の既定 true | ソース dialog.tsx:131 | どの要素に最初に焦点が来るかは中身の並び次第。確認ダイアログでは取り消し側を先に置くか明示する |
| MUI Modal / Dialog | material-ui@476b867 | 2026-11-16 | 閉じ込めと戻し | 開いたら中へ焦点を移し、閉じるまで閉じ込め、閉じたら戻す（disableAutoFocus・disableEnforceFocus・disableRestoreFocus の既定はいずれも false） | 文書 docs/data/material/components/modal/modal.md:20・97-105（S234）、ソース packages/mui-material/src/Modal/Modal.d.ts:66・74・85（S249） | 既定は良いが、無効にする設定が同じ面にある。型のコメントは無効化を勧めない（S249） |
| MUI Modal | 同上 | 2026-11-16 | 名前 | aria-labelledby は作り手が付ける | 文書 modal.md:112 | 付け忘れると名前が無い |
| Bootstrap Modal | v5.3.9 | 2026-11-16 | 役割・初期焦点 | role="dialog" は JS が付ける。focus の既定 true で、開くとモーダル要素そのものに焦点を移す。autofocus 属性は効かない | 文書 site/src/content/docs/components/modal.mdx:16・520・803（S239）、ソース js/src/util/focustrap.js:27・67-68 | 最初の入力欄へ焦点を置きたい場合は、表示後のイベントで自分で移す |
| Bootstrap Modal | 同上 | 2026-11-16 | 閉じ込めと戻し | focus の既定 true のとき、表示の遷移が終わった時点で焦点の閉じ込めを始める（focus を false にすると閉じ込めない）。閉じたときの戻しは、data 属性のボタンで開いた場合だけ（data-api のクリック処理で、閉じた後に開いたボタンへ戻す）。焦点トラップの解除自体は焦点を戻さない | ソース js/src/modal.js:13・72・193-195・352-354、js/src/util/focustrap.js:78-84 | JS から開いた場合は、閉じた後の焦点が戻らない（modal.js と focustrap.js の範囲で確かめた）。自分で戻す |
| Bootstrap Modal | 同上 | 2026-11-16 | 名前・重ね | aria-labelledby は作り手が付ける。モーダルは一度に 1 つ（入れ子は非対応） | 文書 modal.mdx:13・520 | 確認の上に確認を重ねる設計ができない |
| Ant Design Modal | ant-design@80e9a95 | 2026-11-16 | 閉じ込めと戻し | 焦点の閉じ込め（focusable.trap）は、マスクが有効なら true。マスクは mask={false} にしない限り有効なので、既定では true。閉じたら開いた要素へ戻す（focusTriggerAfterClose の既定 true）。Esc で閉じる（keyboard の既定 true） | ソース components/drawer/useFocusable.ts:17-18、components/modal/Modal.tsx:127・135-139、components/_util/hooks/useMergedMask.ts（enabled !== false）、文書 components/modal/index.en-US.md:61・64・66 | マスクを外すと閉じ込めも外れる。見た目の変更が焦点の扱いを変える |
| Ant Design Modal.confirm など | 同上 | 2026-11-16 | 初期焦点 | autoFocusButton の既定は ok（実行側のボタン） | 文書 index.en-US.md:107・115（Modal.method() の節） | 削除の確認でも実行側に焦点が来る。APG は、取り消しにくい操作では、最も破壊的でない操作への初期焦点を選択肢に挙げる（S059）。cancel を指定する |

### 2. 確認ダイアログ（alertdialog）

| ライブラリ | 版 | 取得日 | 観点 | 既定値 | 根拠（出典 URL と行） | 既定のままだと弱い点（整理） |
|---|---|---|---|---|---|---|
| Radix AlertDialog | website@402e749 / primitives@eb3a2b7 | 2026-11-16 | 初期焦点（食い違い） | 文書: 「開いた後に破壊的な操作へ焦点が移る」と読める説明。ソース: 開いたときに Cancel へ焦点を移す | 文書 data/primitives/docs/components/alert-dialog.mdx:235-236（S231）、ソース packages/react/alert-dialog/src/alert-dialog.tsx:113-115 | 文書を信じて「実行ボタンに焦点が来る」前提で文言や順序を組むと、取得したソース（Cancel）とずれる。文書とソースはコミットも別で、描画しては確かめていない。自分の版で挙動を確かめる |
| Radix AlertDialog | primitives@eb3a2b7 | 2026-11-16 | 閉じ方 | 外側のクリック・外側の操作では閉じない | ソース alert-dialog.tsx:117-118 | 意図的。閉じる手段は Cancel と Esc |

### 3. メニュー（ドロップダウン）

| ライブラリ | 版 | 取得日 | 観点 | 既定値 | 根拠（出典 URL と行） | 既定のままだと弱い点（整理） |
|---|---|---|---|---|---|---|
| Radix DropdownMenu | website@402e749 | 2026-11-16 | モーダル性・循環 | modal の既定 true（外側の操作を無効にし、支援技術にはメニューだけを見せる）。矢印キーの端での循環（loop）の既定 false。文字入力で項目へ飛ぶ | 文書 data/primitives/docs/components/dropdown-menu.mdx:121-130・237-243 | 端で止まる。長いメニューでは loop を検討する |
| Headless UI Menu | headlessui@eea57cf | 2026-11-16 | 役割・文字入力 | role は menu。文字入力の検索は 350 ミリ秒で消える | ソース src/components/menu/menu.tsx:525・552 | menu の役割は操作の一覧向け。ナビゲーションのリンク集に使うと役割が合わない（APG の menu の範囲。整理） |
| MUI Menu | material-ui@476b867 | 2026-11-16 | 初期焦点 | 項目の選択に使う場合、開くと選択中の項目に焦点を置く | 文書 docs/data/material/components/menus/menus.md:49 | 選択用でない操作メニューでの初期焦点は文書のこの行では分からない |
| Bootstrap Dropdown | v5.3.9 | 2026-11-16 | 役割 | ARIA の menu の役割・属性を付けない（汎用部品だから）。矢印キーの移動と Esc での閉じは備える | 文書 site/src/content/docs/components/dropdowns.mdx:15-19（S237） | 操作メニューとして使うなら role と aria- を作り手が付ける。WebAIM Million は role="menu" の 22% が必要なマークアップと操作を欠くと報告（S145。相関） |
| Ant Design Dropdown | ant-design@80e9a95 | 2026-11-16 | 文書の記述 | 文書にキーボード操作・ARIA の説明が無い（不在の記録）。子要素が onFocus などのイベントを受け取れることを求める | 文書 components/dropdown/index.en-US.md:69 | 挙動は描画して確かめる（ソースは取得していない） |

### 4. タブ（選択が焦点に従うか）

| ライブラリ | 版 | 取得日 | 観点 | 既定値 | 根拠（出典 URL と行） | 既定のままだと弱い点（整理） |
|---|---|---|---|---|---|---|
| Radix Tabs | website@402e749 | 2026-11-16 | 切り替え | activationMode の既定 automatic（焦点が来たら切り替わる） | 文書 data/primitives/docs/components/tabs.mdx:118-126 | パネルの表示に通信が伴う場合、矢印で通過するたびに読み込みが起きる（APG、S071）。その場合は manual |
| React Aria Tabs | react-spectrum@360e351 | 2026-11-16 | 切り替え | keyboardActivation の既定 automatic | ソース packages/react-aria/src/tabs/useTabList.ts:34 | 同上 |
| Headless UI Tabs | headlessui@eea57cf | 2026-11-16 | 切り替え | manual の既定 false（自動） | ソース src/components/tabs/tabs.tsx:250 | 同上 |
| MUI Tabs | material-ui@476b867 | 2026-11-16 | 切り替え・名前 | 手動切り替え（manual activation）。自動は selectionFollowsFocus で選ぶ。タブ列の名前は作り手が付ける | 文書 docs/data/material/components/tabs/tabs.md:175・185-186（S235） | 内容が手元にある軽いタブでは 1 手多い。名前の付け忘れ |
| Bootstrap Tabs | v5.3.9 | 2026-11-16 | 切り替え・パネル | 矢印キーで前後のタブが切り替わる（自動）。パネルを焦点可能にするかは作り手 | 文書 site/src/content/docs/components/navs-tabs.mdx:536・539（S240） | 見た目がタブのナビゲーションに tablist を付けない注意がある（240 行）。役割の付け違い |
| Ant Design Tabs | ant-design@80e9a95 | 2026-11-16 | 文書の記述 | 文書にキーボード操作・ARIA・焦点の説明が無い（不在の記録） | 文書 components/tabs/index.en-US.md | 自動か手動かは描画して確かめる |

### 5. コンボボックス（候補の開き方・確定）

| ライブラリ | 版 | 取得日 | 観点 | 既定値 | 根拠（出典 URL と行） | 既定のままだと弱い点（整理） |
|---|---|---|---|---|---|---|
| React Aria ComboBox | react-spectrum@360e351 | 2026-11-16 | 開き方・確定 | menuTrigger の既定 input（入力したら候補が開く）。焦点が外れると、入力欄の値は選択中の項目に戻る。一覧に無い値は allowsCustomValue で許す | 文書 packages/dev/s2-docs/pages/react-aria/ComboBox.mdx:255・427-433 | 自由入力を受けたい欄で、打った値が焦点移動で消えたように見える |
| MUI Autocomplete | material-ui@476b867 | 2026-11-16 | 作法 | 文書は WAI-ARIA の作法を実装すると述べる | 文書 docs/data/material/components/autocomplete/autocomplete.md:564 | 自己申告。個々の既定値は本 skill では確かめていない |
| shadcn/ui Combobox | ui@e62c943 | 2026-11-16 | 土台 | radix 版の文書から Base UI の部品へリンクする | 文書 apps/v4/content/docs/components/radix/combobox.mdx:7-8 | 名前は radix 版でも中身の土台は別ライブラリ。既定値は土台の版で確かめる |
| Ant Design Select / AutoComplete | ant-design@80e9a95 | 2026-11-16 | 消去ボタンの名前・補完 | 消去ボタンの名前の既定は部品の言語設定の文言（Select は 6.6.0 から）。キーボードで選んだ候補を入力欄へ入れる backfill の既定 false | 文書 components/select/index.en-US.md:142、components/auto-complete/index.en-US.md:52・101 | 言語設定を入れないと名前が既定言語のままになる（推測） |

### 6. トースト・通知（ライブ領域・時間・止める・閉じる）

| ライブラリ | 版 | 取得日 | 観点 | 既定値 | 根拠（出典 URL と行） | 既定のままだと弱い点（整理） |
|---|---|---|---|---|---|---|
| Radix Toast | website@402e749 | 2026-11-16 | 時間・止める | 表示 5000 ミリ秒。ホバー・焦点・ウィンドウの非アクティブで止まる | 文書 data/primitives/docs/components/toast.mdx:21・61 | 長い文言でも 5 秒で消える。文言の長さに合わせて延ばす |
| Radix Toast | 同上 | 2026-11-16 | 届け方 | 既定のホットキー F8 で通知の領域へ移れる。領域の名前の既定は「Notifications ({hotkey})」。type の既定 foreground。操作ボタンには代替の文言（altText）を求める | 文書 toast.mdx:106・129・145・178・576-580（S232） | ホットキーの存在を利用者に知らせるのは作り手（S232）。英語の既定名のまま |
| React Aria Toast | react-spectrum@360e351 | 2026-11-16 | 時間・止める・閉じる | 自動で消す時間は呼び出し側が指定し、文書は最短 5 秒を勧める。焦点・ホバーで止まる。閉じるボタンを重要とする。F6 で通知の領域へ移り、閉じたら焦点を戻す | 文書 packages/dev/s2-docs/pages/react-aria/Toast.mdx:121・130・251・253（S233） | 「5 秒」はこのライブラリの目安で、WCAG の数値ではない |
| MUI Snackbar | material-ui@476b867 | 2026-11-16 | 時間・閉じる | 自動で閉じる時間の既定 null（自動では閉じない）。ウィンドウの非アクティブで止まる（disableWindowBlurListener の既定 false）。Esc で閉じられるべきと文書が書く。構造の説明では role="alert" | ソース packages/mui-material/src/Snackbar/Snackbar.d.ts:104・119・156、文書 docs/data/material/components/snackbars/snackbars.md:132・160（S236） | ダイアログの中で開いた場合、Esc がダイアログを閉じる扱いを自分で書く（文書 103-104 行） |
| Bootstrap Toast | v5.3.9 | 2026-11-16 | 時間・止める | 自動で消える（autohide の既定 true）、5000 ミリ秒。マウスが乗る・焦点が入ると止まる | 文書 site/src/content/docs/components/toasts.mdx:14・327-329、ソース js/src/toast.js:43-44・152-186 | 文言が長くても 5 秒。文書自身が delay の調整を求める（269 行） |
| Bootstrap Toast | 同上 | 2026-11-16 | ライブ領域 | role と aria-live の選択は作り手。ライブ領域はトーストより先に置く必要がある。autohide を切るなら閉じるボタンが要る | 文書 toasts.mdx:263-271（S238） | 動的に領域ごと差し込むと読み上げられない（S238） |
| shadcn/ui（Sonner） | ui@e62c943 → sonner@8e4662b | 2026-11-16 | 時間・止める | 表示 4000 ミリ秒。展開中・操作中・タブが非表示のときは止まる | 文書 apps/v4/content/docs/components/radix/toast.mdx:8（S241）、Sonner ソース src/index.tsx:31・234 | 4 秒は Radix・Bootstrap より短い。長い文言や読み上げの速さによっては読み切れない |
| shadcn/ui（Sonner） | 同上 | 2026-11-16 | 届け方・閉じる | 通知の領域に aria-live="polite"・aria-relevant="additions text"・tabIndex -1。領域の名前の既定は「Notifications」とホットキーの表示。ホットキーの既定は Alt+T。閉じるボタンは既定で出ない（Toaster か個々のトーストで有効にする） | Sonner ソース src/index.tsx:78・117-119・429・609・625・786-792 | 閉じる手段が時間切れだけになる。英語の既定名のまま |
| Ant Design message | ant-design@80e9a95 | 2026-11-16 | 時間 | 3 秒で消える（0 で消えない） | 文書 components/message/index.en-US.md:48・74 | 3 秒は本台帳のなかで最も短い。ライブ領域の扱いは useMessage.tsx の範囲では見つからない（不在の記録） |
| Ant Design notification | 同上 | 2026-11-16 | 時間・止める | 4.5 秒で消える。ホバーで止まる（pauseOnHover の既定 true、5.18.0 から） | 文書 components/notification/index.en-US.md:61・63 | 焦点で止まるかは文書のこの範囲では分からない |

### 7. 表の並べ替え（aria-sort と読み上げ）

| ライブラリ | 版 | 取得日 | 観点 | 既定値 | 根拠（出典 URL と行） | 既定のままだと弱い点（整理） |
|---|---|---|---|---|---|---|
| React Aria Table | react-spectrum@360e351 | 2026-11-16 | aria-sort・読み上げ | 並べ替えできる列見出しに aria-sort（none・ascending・descending）。Android の TalkBack 向けに並べ替えの説明を aria-describedby でも渡す。並べ替えが変わると読み上げる | ソース packages/react-aria/src/table/useTableColumnHeader.ts:88-103（S248）、useTable.ts:141 | TalkBack の対応状況はライブラリ側の判断（S248） |
| MUI Table | material-ui@476b867 | 2026-11-16 | aria-sort | sortDirection を渡したセルにだけ aria-sort が付く | ソース packages/mui-material/src/TableCell/TableCell.js:224-234 | 並べ替えの状態を sortDirection に渡し忘れると、見た目の矢印だけになる |
| Ant Design Table | ant-design@80e9a95 | 2026-11-16 | aria-sort・説明 | 並べ替え中の列にだけ aria-sort。並べ替えできる列には aria-description（言語設定の文言） | ソース components/table/hooks/useSorter.tsx:245-250（S250） | 見出しの次の並べ替え方向の Tooltip が既定で出る（文書 components/table/index.en-US.md:145）。読み上げとの重なりは確かめていない |
| shadcn/ui Data Table | ui@e62c943 | 2026-11-16 | aria-sort | 並べ替えの見出しの例は、矢印アイコン付きのボタンで toggleSorting を呼ぶだけで、aria-sort が無い（不在の記録）。表は部品でなく手引き | 文書 apps/v4/content/docs/components/radix/data-table.mdx:22（S242）・539-569、registry apps/v4/registry/bases/radix/ui/table.tsx | 例のままでは並べ替えの状態が読み上げで分からない。th に aria-sort を足す |
| Bootstrap Table | v5.3.9 | 2026-11-16 | 並べ替え | 表の文書に並べ替え機能そのものが無い（sort の語 0 件）。見出しの scope の例はある | 文書 site/src/content/docs/content/tables.mdx:25-45 | アクセシビリティの不在ではなく機能の範囲外。足すなら aria-sort も自分で付ける |

## 不在の記録

「既定に無い」と書けるのは次の範囲だけである（2026-11-16 に、固定コミットの原稿を `grep` で数えた）。

| 対象 | 範囲 | 確かめた結果 |
|---|---|---|
| Radix Dialog（primitives@eb3a2b7） | packages/react/dialog/src/dialog.tsx の 1 ファイル | Title が無い場合の警告は見つからない。見つかった警告は Title が複数の場合のみ（100 行付近）。開発時の警告を別ファイルで出しているかは確かめていない |
| shadcn/ui（ui@e62c943） | apps/v4/content/docs/components/radix/data-table.mdx と apps/v4/registry/bases/radix/ui/table.tsx | `aria-sort` 0 件。同じリポジトリの bases/aria・bases/base の table.tsx は確かめていない |
| Ant Design message（ant-design@80e9a95） | components/message/useMessage.tsx の 1 ファイル | `aria-live`・`role=` 0 件。描画は別パッケージ（rc 系）にある可能性があり、そこは確かめていない |
| Ant Design Dropdown（同） | components/dropdown/index.en-US.md | `aria`・`keyboard`・`accessib`・`a11y`・`focus` の該当は onFocus を求める 1 行（69 行）のみ |
| Ant Design Tabs（同） | components/tabs/index.en-US.md | `aria`・`keyboard`・`accessib`・`a11y`・`focus` 0 件 |
| Bootstrap Modal（v5.3.9） | js/src/modal.js と js/src/util/focustrap.js | 開いたボタンへ焦点を戻す処理は data-api のクリック処理（modal.js 352-354）だけ。focustrap.js の deactivate は焦点を動かさない |
| Bootstrap Table（v5.3.9） | site/src/content/docs/content/tables.mdx | `sort` 0 件（機能が無いことの記録） |
| Radix Primitives（eb3a2b7）・Headless UI（eea57cf） | リポジトリのファイル一覧（`git/trees` の再帰取得） | 表の部品のパスが 0 件。表の並べ替えは対象外 |

## 既定値の点検

既定のままだと弱くなる点を確かめる表。なぜ弱いか・どう直すかは、すべて本 skill の整理である。

| # | 既定のままだと | なぜ弱いか | どう直すか | 台帳の節 |
|---|---|---|---|---|
| 1 | ダイアログに名前が無い（Title を省く、aria-labelledby を付け忘れる） | 開いたときに何のダイアログか読み上げで分からない | 見出しを必ず置き、名前に結ぶ。Radix・MUI・Bootstrap は作り手の仕事 | 1 |
| 2 | 閉じた後の焦点がページの先頭へ飛ぶ | 作業していた位置を見失う | 戻し先を確かめる。Bootstrap を JS から開く場合と、戻し先の要素が消える場合は自分で戻す | 1 |
| 3 | 削除の確認で実行側に焦点が来る | Enter の連打で取り消せない操作が走る | 取り消し側を初期焦点にする（S059）。Ant Design は autoFocusButton を cancel に。Radix は文書でなくソースの挙動を確かめる | 1・2 |
| 4 | 汎用のドロップダウンを操作メニューとして使う | 役割と操作がそろわず、読み上げと矢印キーの期待がずれる | 操作メニューなら menu の作法に合わせ、リンク集なら menu にしない | 3 |
| 5 | 通信を伴うタブが自動切り替え | 矢印で通過するたびに読み込みが起きる（S071） | 手動切り替えにするか、内容を先に持つ | 4 |
| 6 | コンボボックスで打った値が焦点移動で消える | 入力が失われたと受け取られる | 自由入力を許すか、消える前に知らせる | 5 |
| 7 | トーストが 3〜5 秒で消え、閉じるボタンが無い | 文言によっては読み切れない。時間切れ以外に閉じる手段が無い | 内容で決める。後で要る情報や操作を含むなら、自動で消さず、画面の中に残す（S069・S159）。短い確認だけなら、文言の長さに合わせて時間を決め、閉じる手段を足す（最短 5 秒はライブラリの目安。S233） | 6 |
| 8 | 通知の領域の名前・消去ボタンの名前が英語の既定のまま | 日本語の画面で英語が読み上げられる | 領域名・ボタン名を画面の言語にそろえる | 5・6 |
| 9 | ライブ領域をトーストと同時に差し込む | 読み上げられない（S238） | 領域を先に置いておく | 6 |
| 10 | 並べ替えの状態が矢印アイコンだけ | 今どの列で、どちら向きか読み上げで分からない | th に aria-sort を付け、変わったことを知らせる | 7 |
| 11 | 「fully accessible」などの自己申告を信じて検査を省く | 既定値は版で変わり、使い方次第で崩れる | 自分の版・自分の組み合わせで、キーボードとスクリーンリーダーで確かめる（S143・S144） | 全体 |

## 改訂のしかた

台帳は数か月で古くなる。次の順で直す。

1. 版を取り直す: 各リポジトリの固定コミットを、既定ブランチの先頭（Bootstrap はタグ）と比べ、「版と取得日」の表を書き換える
2. 値を照合し直す: 各行の根拠の原稿（接頭辞 + パス）を取り直し、コマンドラインで取得して固定文字列で検索し、今も同じ値かを確かめる。取得先は、台帳に載っている公式のドメインに限る。取得したものは実行せず、照合にだけ使う。変わった値は新しい値へ直し、変わったことを版の表の下に日付つきで 1 行書く
3. 外す基準: ライブラリが終了した・API が置き換わった・有料版へ移った・最終コミットが 1 年を超えて古い（1 年は本 skill の目安）。外す前に、同じ観点を別のライブラリで補えるかを確かめる
4. 足す基準: 点検表に新しい観点が出た、または相談で繰り返し尋ねられたライブラリがある。足す前に、原稿の逐語を確かめる（出典にない値は書かない）
5. 不在の記録: 「無い」は、範囲（ファイル・語）を書いた記録だけを根拠にする。範囲を広げたときは、範囲ごと取り直す
6. 「既定のままだと弱い点」: 出典が付かない本 skill の整理である。出典のある事実と混ぜない
7. 台帳の行を直したら、`../SKILL.md` の記述（既定値の点検の導線と、「出典どうしで食い違う論点」の消える通知・タブの行）と、`sources.md` の該当項目を合わせて直す
8. 文書とソースが食い違う行（Radix AlertDialog）は、描画して確かめた結果を足し、どちらが正しいかを決めつけない

## 関連

- `../SKILL.md`: 回答の型と、既定値の点検への導線
- `widget-patterns.md`: 部品の型と、よくある誤り
- `audit-checklist.md`: 画面の型ごとの確かめ方
- `sources.md`: 出典台帳

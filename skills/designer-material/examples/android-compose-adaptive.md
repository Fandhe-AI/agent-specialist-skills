# 例: Android の蔵書検索画面（Jetpack Compose と Material 3 のアダプティブな list-detail）

スマートフォンでは「一覧 → 詳細」の 2 画面、広い窓では一覧と詳細を並べる画面を、Jetpack Compose と Material 3 で組む例。窓の大きさの区分で切り替える判断、テーマの 3 要素（color scheme・typography・shapes）、48dp の操作対象、ダークテーマを 1 本で示す。Android の画面を作る依頼のときに開く。題材は架空の製品で、実在の製品名・ロゴの模倣は含まない。

## 依頼

- 製品: 図書館の蔵書検索アプリ「ヨミクラ」（架空。運営は架空の「あさひ市立図書館」。名称が実在の製品と衝突しないかは確認していない）
- 依頼文: 「蔵書検索アプリを Compose で作っている。スマートフォンでは一覧から詳細へ、タブレットでは並べて表示したい。Material 3 で、ダークテーマにも対応して」
- 想定する利用者: 本を探す来館者。スマートフォンが中心で、館内の貸出用タブレットでも使う（確認が取れないので置いた前提）
- 前提: Compose First の新規画面（S29）。Views の画面は扱わない

## 目的の一文

本の一覧から詳細へ、スマートフォンでは 1 画面ずつ、広い窓では同時に見て、どちらでも選んだ本と戻る方法が分かる。

## 削るもの

| 削るもの | 理由・削り方 |
|---|---|
| 端末名・画面の向きによる分岐 | 窓の大きさの区分で切り替える。折りたたみやマルチウィンドウでも同じ判断になる（S30。本 skill の整理） |
| 3 つ目のペイン（関連書籍など） | list-detail の最大ペイン数（3 という説明）は S33 の引用に無く、未照合。本例は 2 つ。要望が出てから足す（本 skill の整理） |
| dynamic color | 館のブランド色を固定する方針で、本例は使わない。方針の線引きは `dark-theme-dynamic-color-policy.md` |
| 独自の書体・アイコン書体 | 外部のフォントを入れない。文字は Material の既定の型スケールを使う |
| 検索入力・絞り込み・状態ごとの画面 | 本例は list-detail の切り替えに絞る。空・エラーの状態は別途設計する |
| 手書きの切り替えを本番に持ち込む前提 | 本例は判断が見えるよう手書きにした。本番では足場（`ListDetailPaneScaffold`）の利用を先に検討する（S33） |

## 構成

```text
コンパクト幅・ミディアム幅（幅 840dp 未満）        エクスパンデッド幅以上（840dp 以上）
+------------------+   選ぶ   +----------------+     +-------------+-------------------+
| 蔵書の一覧       | -------> | 本の詳細       |     | 一覧 (40%)  | 詳細 (60%)        |
|  行 1  行 2 ...  | <------- | [一覧へ戻る]   |     | 行 1 [表示中]| 題名・著者・書架  |
+------------------+ 戻る操作 +----------------+     | 行 2        | [貸出予約へ]      |
                                                      +-------------+-------------------+
```

- 選択の状態（`selectedId`）は 1 か所に持ち、一覧にも詳細にも渡す。窓の大きさの区分が変わっても状態が保たれるよう、状態は持ち上げる（S33）
- 狭い窓で詳細を出しているとき、戻る操作で一覧へ戻す（S33）
- 切り替えは幅の区分だけで決める。幅が expanded 以上なら 2 ペイン、medium・compact なら片方だけ（S33）

## 仕様

| 項目 | 値 | 根拠 |
|---|---|---|
| 窓の幅の境界 | compact 600dp 未満、medium 600dp 以上 840dp 未満、expanded 840dp 以上 | S30 |
| 2 ペインにする条件 | 幅が expanded（840dp 以上）。medium は 1 ペイン | S33。600dp で並べない |
| 区分の取得 | `currentWindowAdaptiveInfo().windowSizeClass` | S30 は関数 `currentWindowAdaptiveInfo()` の名まで。戻り値の `.windowSizeClass` の名は未照合。高さの判定の例のみ同ページにあり、幅の判定の関数・定数の名は例が無く、未照合 |
| 戻る操作 | 詳細だけを表示しているとき、戻る操作で一覧へ | S33 |
| テーマの要素 | color scheme・typography・shapes の 3 つ | S19 |
| 明暗の切り替え | `isSystemInDarkTheme()` | S20 |
| 角丸 | small 8dp・medium 12dp | M3 の角丸スケールの値（S22）を採る。使う段数は本 skill の目安 |
| 型 | Material の既定の型スケールを使う（`MaterialTheme.typography`） | baseline の値は S21（Views 版の文書）。Compose の既定との一致は未照合 |
| 操作対象 | 48dp 以上。一覧の行は `ListItem`（Material の部品の多くは既定で確保する） | S31。部品ごとの実測は未実施 |
| 余白 | 詳細の外側 24dp | 本 skill の目安（出典なし） |
| 2 ペインの比 | 一覧 40%・詳細 60% | 本 skill の目安（出典なし） |

コントラスト比（WCAG の相対輝度式で計算。文字 4.5:1。S83）:

| 前景 / 背景 | ライト | ダーク |
|---|---|---|
| onSurface / surface（題名） | 16.47 | 14.76 |
| onSurfaceVariant / surface（著者・書架） | 8.16 | 9.28 |
| primary / surface（テキストボタン） | 8.15 | 10.13 |
| onPrimary / primary（塗りのボタン） | 8.42 | 8.47 |
| onSurface / primaryContainer（選択中の題名） | 13.25 | 8.01 |
| onSurfaceVariant / primaryContainer（選択中の著者） | 6.56 | 5.04 |

選択中を色だけで示さない。右端に「表示中」の文字を添える（S84 の 3:1 は、非文字の手がかりに限った基準）。色は本 skill の目安で、Material の既定値ではない。実装後に実機の表示で確かめる。

## 文言

| 場所 | before | after | 理由 |
|---|---|---|---|
| 戻るボタン | 戻る | 一覧へ戻る | 行き先が分かる語にする |
| 詳細の空状態（広い窓で未選択） | 詳細 | 本を選ぶと、ここに詳細が出る。 | 何をすれば何が出るかを 1 文で言う |
| 選択中の印 | （色だけ） | 表示中 | 色が見えなくても状態が分かる |
| 主ボタン | 予約する | 貸出予約へ | 次に起きることを言う（実際の遷移先は未実装） |
| 一覧の補足 | 著者: 〇〇 / 書架: △△ | 〇〇 ・ △△ | 項目名を省き、1 行で読める長さにする |

## コード断片

Kotlin の最小例。依存の版番号は書かない（版で変わる）。コンパイルは未実施で、実装の前に Android Developers の最新の文書で関数名・引数を確認する（S30・S33）。外部のフォント・計測は入れない。

```kotlin
// Theme.kt: テーマの 3 要素（color scheme・typography・shapes。S19）
private val LightColors = lightColorScheme(
    primary = Color(0xFF2F4B8A), onPrimary = Color(0xFFFFFFFF),
    primaryContainer = Color(0xFFDBE3F7), onPrimaryContainer = Color(0xFF12224A),
    surface = Color(0xFFFBFBFD), onSurface = Color(0xFF1B1C20),
    onSurfaceVariant = Color(0xFF4A4D57), outline = Color(0xFF767A86),
    error = Color(0xFFB42318), onError = Color(0xFFFFFFFF),
)
private val DarkColors = darkColorScheme(
    primary = Color(0xFFAEBFEC), onPrimary = Color(0xFF12224A),
    primaryContainer = Color(0xFF2A4074), onPrimaryContainer = Color(0xFFDBE3F7),
    surface = Color(0xFF121317), onSurface = Color(0xFFE4E5EA),
    onSurfaceVariant = Color(0xFFB4B7C2), outline = Color(0xFF8A8E9B),
    error = Color(0xFFFF9D92), onError = Color(0xFF3B0A06),
)
private val YomikuraShapes = Shapes(
    small = RoundedCornerShape(8.dp), medium = RoundedCornerShape(12.dp),
)

@Composable
fun YomikuraTheme(darkTheme: Boolean = isSystemInDarkTheme(), content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = if (darkTheme) DarkColors else LightColors,
        shapes = YomikuraShapes,   // typography は既定のまま
        content = content,
    )
}
```

```kotlin
// BookBrowser.kt: 窓の大きさで 1 ペインと 2 ペインを切り替える
data class Book(val id: Int, val title: String, val author: String, val shelf: String)

@Composable
fun BookBrowser(
    books: List<Book>,
    windowSizeClass: WindowSizeClass = currentWindowAdaptiveInfo().windowSizeClass,
) {
    // `.windowSizeClass` と幅の判定の関数・定数の名は未照合。同ページの高さの例（isHeightAtLeastBreakpoint）を幅に置き換えた形
    val showBothPanes =
        windowSizeClass.isWidthAtLeastBreakpoint(WindowSizeClass.WIDTH_DP_EXPANDED_LOWER_BOUND)
    var selectedId by rememberSaveable { mutableStateOf<Int?>(null) }   // 状態は 1 か所
    val selected = books.firstOrNull { it.id == selectedId }

    if (showBothPanes) {
        Row(Modifier.fillMaxSize()) {
            BookList(books, selectedId, { selectedId = it }, Modifier.weight(0.4f))
            BookDetail(selected, Modifier.weight(0.6f))
        }
    } else if (selected != null) {
        BackHandler { selectedId = null }          // 戻る操作で一覧へ
        BookDetail(selected, Modifier.fillMaxSize(), onBack = { selectedId = null })
    } else {
        BookList(books, null, { selectedId = it }, Modifier.fillMaxSize())
    }
}

@Composable
private fun BookList(
    books: List<Book>, selectedId: Int?, onSelect: (Int) -> Unit, modifier: Modifier = Modifier,
) {
    LazyColumn(modifier) {
        items(books, key = { it.id }) { book ->
            val isSelected = book.id == selectedId
            ListItem(   // 操作対象 48dp 以上は部品の既定に任せ、実機で確かめる（S31）
                headlineContent = { Text(book.title) },
                supportingContent = { Text("${book.author} ・ ${book.shelf}") },
                trailingContent = { if (isSelected) Text("表示中") },   // 色だけで示さない
                colors = ListItemDefaults.colors(
                    containerColor = if (isSelected) MaterialTheme.colorScheme.primaryContainer
                                     else MaterialTheme.colorScheme.surface,
                ),
                modifier = Modifier.selectable(selected = isSelected, onClick = { onSelect(book.id) }),
            )
        }
    }
}

@Composable
private fun BookDetail(book: Book?, modifier: Modifier = Modifier, onBack: (() -> Unit)? = null) {
    Column(modifier.padding(24.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        if (onBack != null) TextButton(onClick = onBack) { Text("一覧へ戻る") }
        if (book == null) {
            Text("本を選ぶと、ここに詳細が出る。", color = MaterialTheme.colorScheme.onSurfaceVariant)
        } else {
            Text(book.title, style = MaterialTheme.typography.headlineSmall)
            Text(book.author, color = MaterialTheme.colorScheme.onSurfaceVariant)
            Text("書架: ${book.shelf}", color = MaterialTheme.colorScheme.onSurfaceVariant)
            Button(onClick = { /* 貸出予約へ（未実装） */ }) { Text("貸出予約へ") }
        }
    }
}

// 呼び出し側: テーマで包み、背景の面を張る
// YomikuraTheme { Surface(Modifier.fillMaxSize()) { BookBrowser(sampleBooks) } }
```

指定していない色の役割（tertiary 系・container 系など）は、Material の既定値のままになる（本 skill の整理。未照合）。実案件では、使う役割をすべて決める。

## 初見検証

説明なしで端末を渡し、3 つの問いに答えられるかを見る。スマートフォンとタブレット（幅 840dp 以上）の両方で行う。

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 本の一覧があり、選ぶと詳細が見られる | 一覧の先頭の行・題名と著者 |
| 何を操作できるか | 行を選べる。詳細では「貸出予約へ」を押せる | 行の高さ（48dp 以上）・ボタンの形 |
| どう操作するか | スマートフォンは行をタップして進み、戻る操作か「一覧へ戻る」で戻る。タブレットは行をタップして右に出す | 「表示中」の印・「一覧へ戻る」 |

答えられない場合は、説明を足さず、行の情報を減らして手がかりの置き場所を見直す。

## 点検

- 窓の大きさ: 幅 600dp 未満・600〜840dp・840dp 以上で、1 ペインか 2 ペインかが仕様どおり。回転や分割表示で窓が変わっても、選択が残る（S33）
- 戻る操作: 狭い窓で詳細を出したあと、戻る操作で一覧へ戻る。2 ペインのときは戻る操作を横取りしない（S33）
- 色: ライト・ダークの両方で、上の表の比率を満たす（S83）。選択を色だけで示していない（本 skill の整理）
- 操作対象: 一覧の行・ボタンが 48dp 以上。部品ごとに実機で測る（S31）
- 世代: 初版の elevation や M2 の #121212 を M3 の値として使っていない（S05・S13）。実装基盤は Compose で、Views の保守モードの部品を新規に使っていない（S29）
- 未検証: コンパイル・実機の表示・TalkBack での読み上げは未実施。`.windowSizeClass` と幅の判定の関数・定数の名は未照合。推測の明示として、利用者の端末の分布や、館内タブレットの窓の大きさは、この例からは分からない

## この例の出典

S05、S13、S19、S20、S21、S22、S29、S30、S31、S33、S83、S84。台帳は `../references/sources.md`。

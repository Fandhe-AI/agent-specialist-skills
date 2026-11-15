# 例: ブランド色を残しつつ dynamic color に合わせるダークテーマ方針書

ブランドの青を残したまま、Android 12 以降では端末の色（dynamic color）に合わせ、ダークテーマにも対応する方針書の例。「どの色を固定し、どの色を端末に任せるか」の線引きと、コントラストの検証までを 1 本にまとめる。題材は架空の製品で、実在の製品名・ロゴ・配色の模倣は含まない。制作の着手前に開く。

## 依頼

- 製品: 天気アプリ「フォルネ」（架空。Android のみ。Jetpack Compose で実装）
- 依頼文: 「ブランド色の青は残したい。でも Android 12 以降は壁紙の色にも合わせたい。ダークテーマもある。方針をまとめて」
- 想定ユーザー: 通勤中や屋外で、片手で天気と注意報を見る人。明るい屋外と暗い寝室の両方で使う
- 前提（置いた）: 体制はデザイナー 1 人・実装者 2 人。対応 OS は Android 8 以上（Android 11 以下に dynamic color は無い）。ブランドの青は `#1F5FAE`（架空）

## 目的の一文

画面の大半は端末の色とダークテーマに従い、ブランドと警報の意味を持つ色だけを固定して、どの組み合わせでも文字と警報が読める。

## 削るもの

| 削るもの | 理由 |
|---|---|
| 全画面でブランドの青を primary に強制 | dynamic color を無効にする。利用者の色に従う面と、ブランドを示す面を分ける（S10・S24。分け方は本 skill の整理） |
| 壁紙の色で警報の色を変えること | 警報の色は意味を持つ。意味は端末ごとに変えない（本 skill の整理）。色だけで伝えず、形と文字も付ける |
| ダークの色を別体系で手選びする | 色の手選びから、生成へ（S17）。役割にトーンを割り当てる（S18・S19） |
| 背景を `#000000` や `#121212` で直書き | `#121212` は M2 時代の推奨値（S13）。M3 の baseline のダークの surface は neutral6 の指定（S18。6 を tone と読むのは本 skill の読み） |
| Force Dark の自動変換に頼る | 明るい配色のアプリを自動で暗くする機能（S32）で、設計されたダークテーマではない（本 skill の整理） |
| アプリ内のダーク切替・バリアント選択の画面 | 設定項目を増やさない。ダークは端末の設定に従う（`isSystemInDarkTheme`。S20）。バリアントの種類は端末の仕組みとして用意されている（S16） |

## 構成

方針は 3 層に分ける（本 skill の整理）。優先は上から。

```text
1 固定層   意味を持つ色（警報・注意報）とブランドの記号（ロゴ）  端末の色に従わない
2 追従層   面・文字・ボタン・枠など画面の大半                    dynamic color、使えなければ固定のフォールバック
3 検証層   固定層と追従層の組み合わせ                            コントラストを測って合格したものだけ出す
```

| 要素 | 層 | dynamic ON（Android 12 以上） | dynamic OFF・Android 11 以下 |
|---|---|---|---|
| 背景・カード・文字・枠 | 追従 | 端末の配色の役割（surface・onSurface 等） | ブランド由来のフォールバック（下の表） |
| 主ボタン・リンク | 追従 | 端末の primary・onPrimary | ブランドの青。ライトは `#1F5FAE`、ダークは `#B2C5FE`（下の表） |
| 警報・注意報の枠とアイコン | 固定 | テーマ別の固定色（下の表） | 同左 |
| ロゴ | 固定 | ライト用・ダーク用の 2 版 | 同左 |
| 起動画面・初回の紹介 | 固定 | 背景は白 `#FFFFFF`（テーマ共通）に、ブランドの青 `#1F5FAE` の文字・マーク（6.35。下の表）。短時間だけ見せる場面 | 同左 |

- 設定に「端末の色に合わせる」を 1 つ置く。既定は ON（Android 12 以上のみ表示）。OFF でブランドのフォールバックになる。既定の選択は本 skill の整理で、利用者の反応を見て変える
- 警報・注意報の表示は、色に加えて形（警報は三角、注意報は丸）と文字ラベルで伝える。文字は onSurface を使い、固定色は枠とアイコンだけに使う

## 仕様

出典のある事実と、本 skill の目安（出典なし）を分ける。

出典あり:

- dynamic color は Android 12 で追加された。壁紙または選択した色から配色を作る。バリアントは Android 12 の Tonal Spot、Android 13 で Neutral・Vibrant Tonal・Expressive が加わった（S16）
- 配色の土台は 5 つのキーカラー、各 13 トーン（S19）。アクセントは 3 群（Primary・Secondary・Tertiary）で各 4〜5 の役割（S18）
- baseline の surface は、表の見出し（Light baseline・Dark baseline）と突き合わせると、ライトが neutral98、ダークが neutral6 の指定（S18。末尾の数字を tone と読むのは本 skill の読み）
- 色の生成後にコントラストを測る関数が、色のライブラリの README に載っている（S17）。全パレットで基準を満たす保証は述べていない
- 文字は 4.5:1 以上、大きい文字は 3:1 以上（S83）。UI 部品と、内容の理解に要るグラフィックの部分は、隣接色に対して 3:1 以上。ロゴは WCAG の例外（S84）

本 skill の目安（出典なし）:

- トーンの割り当て（下の表）。surface の neutral98・neutral6 以外は baseline に近い割り当てだが、公式の表とは照合していない
- 色の値は、CIE L\*（HCT の tone と同じ明度）を合わせ、色相と彩度を近似して作った。HCT の公式の変換ではない。実装では、色の生成ツール（S17）の出力に置き換え、再計算する
- 計算は WCAG の相対輝度の式。値は小数第 3 位を四捨五入して小数第 2 位まで出す。検証のテストは丸めず、計算した値のまま基準と比べる

フォールバックの配色と、コントラスト比（計算済み）:

| 組み合わせ（前景 / 背景） | 基準 | ライト | ダーク |
|---|---|---|---|
| onSurface / surface（本文） | 4.5 | `#1A1B21` / `#F8F9FF` = 16.35 | `#E0E2EA` / `#121319` = 14.33 |
| onSurfaceVariant / surface（補助文字） | 4.5 | `#434653` = 8.92 | `#C2C6D5` = 10.89 |
| primary / surface（リンク・アイコン） | 4.5 | `#1F5FAE` = 6.04 | `#B2C5FE` = 10.87 |
| onPrimary / primary（ボタン文字） | 4.5 | `#FFFFFF` / `#1F5FAE` = 6.35 | `#003061` / `#B2C5FE` = 7.72 |
| onPrimaryContainer / primaryContainer | 4.5 | `#001B3C` / `#DAE2FF` = 13.34 | `#DAE2FF` / `#004689` = 7.29 |
| outline / surface（枠・区切り。非文字） | 3 | `#737784` = 4.25 | `#8D909E` = 5.84 |
| 警報の枠・アイコン / surface（非文字） | 3 | `#A93621` = 6.17 | `#FF8B6E` = 8.09 |
| 注意報の枠・アイコン / surface（非文字） | 3 | `#835500` = 6.12 | `#E09E3D` = 8.06 |
| ロゴ / surface（WCAG は例外。本 skill の目安で 3） | 3 | `#1F5FAE` = 6.04 | ブランドの青のまま = 2.92（目安に届かない）。ダーク版 `#B2C5FE` = 10.87 |
| 起動画面のブランドの青（文字・マーク）/ 起動画面の背景 | 4.5 | `#1F5FAE` / `#FFFFFF` = 6.35 | 同じ（白地はテーマ共通） |

- ダークでブランドの青をそのまま使うと 2.92:1 で、本 skill の目安の 3:1 に届かない（ロゴは WCAG の 1.4.11 で例外なので、要件ではなく目安）。このためロゴはダーク用の版を持つ（固定層の 2 版）
- 起動画面は背景を白に固定し、ブランドの青を 6.35:1 で載せる。ダーク設定の端末で白い画面は眩しいので、短時間に限る。気になるなら、起動画面にもダーク版（背景 `#121319`・マーク `#B2C5FE` = 10.87）を足す
- primaryContainer は surface と近く（ライト 1.23、ダーク 1.97）、面の色だけでは区切れない。区切りは outline か余白で付け、情報を面の色だけに持たせない
- surface のトーンは 98 / 6 のまま、色相だけを 15 度刻みで一周させ（彩度 8 と 16）、固定色との比を試算した。ライトの警報は 6.15〜6.20、ダークのロゴは 10.81〜10.89 で、ほとんど動かない。試算は近似の色で、実機の dynamic color の出力ではない
- dynamic ON の実際の比は、壁紙ごとに変わる。**未計算**。実装後に、端末が返す配色の値を同じ関数に通して測る（下の検証）

| 項目 | 値 | 根拠 |
|---|---|---|
| dynamic の設定の行・スイッチの操作対象 | 48dp × 48dp 以上 | S31 |
| 固定色の数 | 3 役割（警報・注意報・ブランド）× ライト・ダークの 2 テーマ = 6 値。ほかに起動画面の背景 1 値（白。テーマ共通）。合計 7 値 | 本 skill の目安（出典なし） |
| 色の変更の通知 | 固定色の値を変えたら、全画面の比を再計算 | 本 skill の目安。値を 1 か所で持てば直しが全体に届く発想は S65 |

## 文言

| 場所 | 文言 | 理由 |
|---|---|---|
| 設定のラベル | 端末の色に合わせる | 機能名（dynamic color）でなく、利用者に起きることを言う |
| 設定の説明 | 壁紙の色に合わせて、画面の色が変わります。警報の色は変わりません。 | 変わるものと変わらないものを 1 文ずつ言う |
| 警報ラベル | 警報（三角のアイコン） | 色が見えなくても区別できる |
| 注意報ラベル | 注意報（丸のアイコン） | 同上 |
| Android 11 以下の設定 | （設定の行を出さない） | 端末にできないことを、押せる形で見せない（本 skill の整理） |

## コード断片

Compose の最小例。API 名・既定値は版で変わる。実装前に Android Developers の最新の文書を確認する。本例は未コンパイルで、import は省く。

```kotlin
// 固定層: 端末の色や壁紙で変えない。ライト用・ダーク用の 2 セットを持ち、各セットは 3 役割（brand・warning・advisory）
@Immutable
data class FixedColors(val brand: Color, val warning: Color, val advisory: Color)
private val FixedLight = FixedColors(Color(0xFF1F5FAE), Color(0xFFA93621), Color(0xFF835500))
private val FixedDark = FixedColors(Color(0xFFB2C5FE), Color(0xFFFF8B6E), Color(0xFFE09E3D))
val LocalFixedColors = staticCompositionLocalOf { FixedLight }

// 追従層のフォールバック。指定しない役割は Material の既定値になるので、実装では全役割を埋める
private val LightFallback = lightColorScheme(
    primary = Color(0xFF1F5FAE), onPrimary = Color(0xFFFFFFFF),
    primaryContainer = Color(0xFFDAE2FF), onPrimaryContainer = Color(0xFF001B3C),
    surface = Color(0xFFF8F9FF), onSurface = Color(0xFF1A1B21),
    onSurfaceVariant = Color(0xFF434653), outline = Color(0xFF737784),
)
private val DarkFallback = darkColorScheme(
    primary = Color(0xFFB2C5FE), onPrimary = Color(0xFF003061),
    primaryContainer = Color(0xFF004689), onPrimaryContainer = Color(0xFFDAE2FF),
    surface = Color(0xFF121319), onSurface = Color(0xFFE0E2EA),
    onSurfaceVariant = Color(0xFFC2C6D5), outline = Color(0xFF8D909E),
)

@Composable
fun ForneTheme(followDevice: Boolean, content: @Composable () -> Unit) {
    val dark = isSystemInDarkTheme()                      // S20
    val context = LocalContext.current
    val dynamic = followDevice && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S   // Android 12（S16）
    val scheme = when {
        dynamic && dark -> dynamicDarkColorScheme(context)
        dynamic -> dynamicLightColorScheme(context)
        dark -> DarkFallback
        else -> LightFallback
    }
    CompositionLocalProvider(LocalFixedColors provides if (dark) FixedDark else FixedLight) {
        MaterialTheme(colorScheme = scheme, content = content)
    }
}
```

検証のテスト。dynamic ON は、端末（または計測テスト）で `scheme` の値を取り出して同じ関数に通す。この断片にはその部分を含めない（未実施）。

```kotlin
fun luminance(argb: Int): Double {
    fun ch(v: Int): Double { val c = v / 255.0; return if (c <= 0.04045) c / 12.92 else Math.pow((c + 0.055) / 1.055, 2.4) }
    return 0.2126 * ch((argb shr 16) and 0xFF) + 0.7152 * ch((argb shr 8) and 0xFF) + 0.0722 * ch(argb and 0xFF)
}
fun contrast(a: Int, b: Int): Double {
    val x = luminance(a)
    val y = luminance(b)
    return (maxOf(x, y) + 0.05) / (minOf(x, y) + 0.05)
}

class ContrastPolicyTest {
    private data class Case(val name: String, val fg: Long, val bg: Long, val min: Double)
    private val cases = listOf(
        Case("light onSurface/surface", 0xFF1A1B21, 0xFFF8F9FF, 4.5),   // 文字は 4.5（S83）
        Case("dark primary/surface", 0xFFB2C5FE, 0xFF121319, 4.5),
        Case("light 警報/surface", 0xFFA93621, 0xFFF8F9FF, 3.0),         // 非文字は 3（S84）
        Case("dark ロゴ/surface", 0xFFB2C5FE, 0xFF121319, 3.0),         // ロゴは WCAG の例外。3 は本 skill の目安
        Case("起動画面 青/白", 0xFF1F5FAE, 0xFFFFFFFF, 4.5),
    )
    @Test fun everyCaseMeetsItsThreshold() = cases.forEach {
        val r = contrast(it.fg.toInt(), it.bg.toInt())
        assertTrue("${it.name} = $r", r >= it.min)
    }
}
```

## 初見検証

壁紙を 3 種（暖色・寒色・ほぼ灰色）にし、ライトとダークの計 6 通りで、説明なしに画面を見せて 3 つを尋ねる。

| 問い | 期待する答え | 確認する場所 |
|---|---|---|
| 何に注意するか | 「今日、警報が出ている」 | 警報の三角のアイコン・枠・ラベルが 6 通りとも同じ位置と意味で見える |
| 何を操作できるか | 「地域を変える」「詳細を見る」 | 主ボタンが壁紙の色に合わせて変わっても、ボタンだと分かる（文字が読める） |
| どう操作するか | タップで詳細へ | 操作対象が 48dp 以上で、押せる形に見える |

6 通りのどれかで答えが変わるなら、固定層と追従層の線引きを見直す。説明は足さない。

## 点検

- 固定層が意味を持つ色と記号だけに絞られ、画面の大半が追従層である
- ダークの面が `#121212` の直書きでなく、役割へのトーンの割り当てで作られている（S13・S18）
- 上の表のすべての組み合わせが基準を満たす（文字 4.5、非文字 3。S83・S84。ロゴの 3 は本 skill の目安）。起動画面の背景と青の比も含む。色を変えたら再計算する
- dynamic ON の実測が済むまで、「どの壁紙でも合格」とは書かない
- 警報が色だけで伝わっていない（形と文字がある）
- Android 11 以下と、設定が OFF の場合の見た目を確かめた
- 推測の明示: 利用者が dynamic color を好むか、固定色の位置が使いやすいかは、この例からは分からない。実測が要る判断は最終的に相談者が行う。法令への適合の判断はしない

## この例の出典

S10、S13、S16、S17、S18、S19、S20、S24、S31、S32、S65、S83、S84。台帳は `../references/sources.md`。

# engineer-security 出典台帳

`engineer-security`（防御側のアプリケーションセキュリティの専門家）の `SKILL.md` と `references/` が根拠にする出典の台帳。設計の原則と原典（Saltzer と Schroeder・Kerckhoffs・Shannon・Anderson・Schneier・Shostack）、脅威モデリング、認証・認可・秘密情報・入力の実務の指針（OWASP の Cheat Sheet・ASVS・Top 10、NIST、IETF、W3C）、成果物の完全性と依存（SLSA・OpenSSF・SBOM）、脆弱性の開示、プライバシーの設計面、国内の公的資料（IPA・JPCERT/CC・デジタル庁）、歴史と批判から、`SKILL.md` が引く項目を主題ごとに並べた。引用原文・媒体と日付・URL・取得日・検証区分・ライセンスを記す。台帳は通読せず、番号で検索して該当の項目だけ読む。番号は振り直さない。欠番は欠番のままにする（この台帳に載せていない番号は、まだ引いていない項目である。項目の「使いどころ」や「要旨」が指す未掲載の番号も同じ）。

全 93 件。逐語の引用を持つ項目が 91 件（引用ブロックは 192 個。うち 1 個は書誌のみの注記で、引用ではない。引用は 191 個）、書誌のみ・要旨のみ（本文を引用しない）の項目が 2 件（S015・S066）。区分の内訳は A 81 件、B 6 件、C 5 件、R 1 件。未検証の項目は番号を振らず、末尾の「未検証・調査の限界」に表で置いた。

## 凡例

- 検証区分
  - A: 原典・公式ページ・著者本人のサイト・発行元の頁の原稿（HTML・Markdown・PDF）、または原典の保存コピーを取得し、引用文が逐語で含まれることを、タグ除去と空白の正規化のうえで部分一致により照合した。引用が取得日の時点でページにあることの確認であり、主張の正しさの保証ではない。推進側・作り手が自分で書いた留保・限界も A とする。PDF は文字の抽出が崩れることがあり、OCR 由来の PDF（Kerckhoffs の電子化版など）は OCR の文字列との一致で、頁画像の目視照合はしていない。日本語の PDF は抽出で文字間に空白が入るため、空白を除いて比べた
  - B: 第三者の転写・複製・解説の頁、他媒体経由で引いた文。引用文が、その頁の本文と一致することは確かめたが、原典そのものとの照合ではない（Kerckhoffs の転写、Petitcolas の解説、Shannon の archive.org の写し、STRIDE の 1999 年の文書の Shostack の頁の写し、SEI のブログ）
  - C: 批判・留保・評価の側の主張。引用が逐語であることのみを確認し、主張の正しさ・因果は確認していない。事業者・団体の自称は、区分でなく「自称」の注記で扱う
  - R: 書誌だけ、または頁の表示を要旨にした項目。本文を引用しない
  - U: 未検証。事実・引用として使わない。末尾の表に集め、番号を振らない
- 「自称」: 企業・組織・個人が自分の進め方や成果を自分で述べたもの。第三者による検証ではない（Google の BeyondCorp と Project Zero の説明、Shostack + Associates の頁、FIDO Alliance の統計、CISA の誓約の署名者の数）
- 数値（件数・割合・長さ・期限・日数・署名者の数・要件の数）と順位は、版や時点で変わり、出典ごとに自称・例の値か規格の必須の値かが違う。skill が目標値として出さない。パスワードの長さ・ハッシュの設定・有効期限・脆弱性の点数は、台帳にも写していない（出典の版と日付つきで示し、出典で確かめる）
- 引用の字形: 引用ブロックは、照合に使った正規化テキストの字形で書いた。引用符とアポストロフィは直線形、ダッシュは半角ハイフンになっている（Saltzer と Schroeder の「--」は原文のまま）。原稿の見た目の字形とは違う。本文に引くときは字形を原文に戻してよいが、語は変えない。1 項目（S027）の引用に、原文の強調記号（アスタリスク）が残っている（原稿の Markdown の記法）
- 引用文は原文の語を改変していない。誤植・綴りの揺れ（「implies」など）も直していない。日本語の要旨・使いどころ・備考は本 skill の言葉であり、発言者本人の発言ではない。要旨・使いどころの欄は、引用ブロックが言う範囲を超える内容（頁の他の箇所の要約）を含む。skill 本文が S 番号で支えてよいのは、引用ブロックが言うことと、要旨のうち頁の記述として書いた部分だけで、残りは「本 skill の整理」と書く
- 項目の「URL」は利用者が開ける文書の URL。「URL（原稿）」は、照合に使った固定の原稿の URL（あるときだけ）。取得日はすべて 2026-11-21
- 再照合の手順（第三者が引用を確かめるとき）
  - 照合先: まず URL（利用者が開く頁）。頁が変わった・取得できない項目は、URL（原稿）か、公式の保存コピーを使う
  - PDF: テキストに抽出してから照合する（行末ハイフンの結合と合字の展開を加える）。日本語の PDF は文字間に空白が入ることがあるため、空白を除いて比べる
  - 比較の前処理: タグを除去し、HTML 実体を復号し、空白の連続を 1 つに畳み、引用符・アポストロフィ・ダッシュを直線形と半角ハイフンに揃える。そのうえで部分一致を確かめる。強調記号・リンク記号が入る頁は、記号を除いて比べる
  - 脚注番号・文中の参照番号（Saltzer と Schroeder の「[27]」など）: 引用の途中に入るときは、脚注番号をまたぐ引用をしない。参照番号の手前で切った項目は、備考に書いた
- ライセンス上の扱い（各項目の「ライセンス」の欄に書いた）
  - 逐語可（出典明記。各条件に従う）: CC BY 4.0 の S013、S014。CC BY 3.0 の S052、S090、S095。CC BY-SA 4.0 の S021、S027、S028、S029、S036、S041、S042、S043、S094（翻案を公開するときは同じライセンスが要る）。公共データ利用規約（PDL1.0）の S067、S068、S069、S070。W3C の文書ライセンスの S102。Community Specification License 1.0 の S044、S045、S101。配布する skill 本文は、逐語可でも長い転載を避け、短い引用と要旨で使う
  - NIST の出版物: PDF に「is not subject to copyright in the United States. Attribution would, however, be appreciated by NIST」の記述がある（S096・S099 で確認）。米国外での扱いは確認しておらず、HTML 版の頁には再利用条件の表示が無いので、短い引用にとどめる
  - 非営利に限る・本文では要旨で使う: CC BY-NC 4.0 の文書（4 つの問いだけ CC BY と文書末に明記）の S015
  - 要旨のみ（本文を引用しない）: S066。頁の表示を要旨にした項目
  - 短い引用のみ: 上記以外のすべて。著作権表示のみ・全権利留保・表示なし・再利用の条件を確かめられなかったもの。出典を明示した短い引用（1〜3 文）にとどめ、段落単位の転載・翻訳をしない。再配布できると書かない

## 帰属上の注意

- 各社・各団体・各政府機関の指針（OWASP・NIST・CISA・OpenSSF・SLSA・FIDO Alliance・W3C・IETF・IPA・デジタル庁）は、自組織の利用者向けの考え方であり、普遍的な正解ではない。食い違うところは両論を並べる（`SKILL.md` の「出典どうしで食い違う論点」）。政府情報システム向けの指針（NIST SP 800-63B-4・デジタル庁の DS 系）は、民間の製品・国内の制度へそのまま当てはまる規範ではない
- 設計の原則と原典の文言は、本人の原語を引いた（Saltzer と Schroeder・Kerckhoffs・Shannon・Schneier・Anderson・Shostack）。訳や要旨をカギ括弧に入れて、本人の発言にしない。創作の一人称は書かない
- Kerckhoffs の原典はフランス語で、引用は原語である。英訳は Petitcolas の「approximate」（本人が近似と書く）で、日本語化するときは原文から訳すか、近似と明記する。「鍵だけが秘密」という 1 文は原典の 6 項目には無く、本人の言葉として使わない。Shannon の「敵は系を知っている」は、動機と文脈が違う別の仮定で、混同しない（S005・S007・S008）
- 「Schneier's law」の名前は、本人の説明では 2004 年に Cory Doctorow がつけたもので、本人の命名ではない。Doctorow・Kahn・Babbage の文は本人の頁を通した孫引きで、引用していない（S077）。「Security is a process, not a product」は、本人の頁の文で確かめた。初出は確かめていない（S075）
- 脅威モデリングの 4 つの問いは、出典ごとに文言が違う（Shostack の GitHub の README・Threat Modeling Manifesto）。引用するときは、どの文書の文言かを書き、混ぜない（S013・S014・S015）。本の初版の本文は取得していない
- 製品の開発元・研修や助言を業とする書き手・投資や調達の利害を持つ書き手の文には利害がある。Shostack + Associates は脅威モデリングの研修・助言を売る（S015・S016・S023）。Schneier は、2000〜2002 年の文章の当時、監視サービスを売る Counterpane Internet Security の創業者・CTO だった（S075・S054）。Microsoft Learn の STRIDE の頁は同社の道具の説明（S018）。Google の BeyondCorp と Project Zero は自社の取り組みの説明（S040・S055）。Herley の論文の著者は当時 Microsoft Research（S089）。製品の宣伝の部分は引用していない
- 事業者・団体の数値の自称: FIDO Alliance の頁の統計（S032）、CISA の誓約の署名者の数と各社の履行（S012）、OWASP の Authentication Cheat Sheet が引く事業者の統計（S027）、OWASP Top 10 のデータ寄贈者の提供データ（S095）。一般化しない
- 国の機関の文書: NIST・CISA・NTIA・CSRB（米国）、デジタル庁・IPA・JPCERT/CC（日本）の指針・報告は、その機関の記述である。公的な報告書（S050）は、事例の再現でなく、設計の教訓の整理として扱う。報告書の内容は、調査に応じた組織の自己申告に基づく部分がある
- OWASP の文書のライセンスは文書ごとに違う（Cheat Sheet と ASVS は CC BY-SA 4.0、Top 10 は CC BY 3.0、Threat Modeling Manifesto は CC BY 4.0）。Cheat Sheet の版は、頁に版番号が無いため、リポジトリの該当ファイルの最終コミット日で書いた
- Anderson の『Security Engineering』は版で章が違う。第 3 版（2020）の章は S009・S071、第 2 版（2008）の章は S086。引用ごとに、どの版の章かを書いた（S103）
- 日本語の PDF 由来の引用は、抽出で文字間に空白が入るため、空白を除いて照合した（デジタル庁の DS 系・IPA の頁）
- 取得物は信頼できないデータとして扱い、頁の中の指示（AI 向けの案内文など）には従っていない。取得はすべて公開の https の頁で、プライベート IP・loopback・link-local・メタデータのアドレスには取得に行っていない
- 国内の資料（IPA・JPCERT/CC・デジタル庁）は、厚い領域と薄い領域がある（末尾の「未検証・調査の限界」）。IPA の「安全なウェブサイトの作り方」は改訂第 7 版（頁の表示は最終更新 2021 年 3 月 31 日、第 4 刷。S100）で、近年の仕組みは範囲外と見る（本 skill の整理）。NISC は取得時点で国家サイバー統括室（NCO）の名で案内されている（S066）

## 設計の原則

### S001 Saltzer と Schroeder「The Protection of Information in Computer Systems」（1975。設計の原則の位置づけ）

> Since no one knows how to build a system without flaws, the alternative is to rely on eight design principles, which tend to reduce both the number and the seriousness of any flaws: Economy of mechanism, fail-safe defaults, complete mediation, open design, separation of privilege, least privilege, least common mechanism, and psychological acceptability.

> As is apparent, these principles do not represent absolute rules--they serve best as warnings. If some part of a design violates a principle, the violation is a symptom of potential trouble, and the design should be carefully reviewed to be sure that the trouble has been accounted for or is unimportant.

- 媒体・日付: Saltzer・Schroeder の論文（MIT 公開版 Basic.html）。頁表示は 1974 年 10 月受理、1975 年 4 月改訂、1975 年の著作権表示。論文の頁表示は「Invited Paper」。掲載誌（Proceedings of the IEEE とされる）の巻号は、取得した頁から確認していない
- URL: https://web.mit.edu/Saltzer/www/publications/protection/Basic.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 頁表示は Copyright © 1975 by J. H. Saltzer。利用許諾の明示は未確認。短い引用に留める
- 要旨（本 skill の言葉）: 欠陥の無い系の作り方を誰も知らないので、欠陥の数と重さを減らす経験則として 8 つの原則を使う。原則は絶対の規則でなく警告であり、設計が原則に反していたら、問題の兆しとして見直す。
- 使いどころ: 設計レビューで原則を「違反の判定」でなく「見直しの合図」として使う。8 つの名前と文の逐語は、後世の要約や訳の孫引きにせず、ここから取る。心理的な受け入れやすさが 1975 年にすでに原則として書かれている点は、使いやすさと安全の議論（S087・S088）につなぐ。

### S002 Saltzer と Schroeder「The Protection of Information in Computer Systems」（1975。経済性・既定の拒否・完全な仲介）

> Economy of mechanism: Keep the design as simple and small as possible.

> Fail-safe defaults: Base access decisions on permission rather than exclusion.

> Complete mediation: Every access to every object must be checked for authority.

- 媒体・日付: Saltzer・Schroeder の論文（MIT 公開版 Basic.html）。頁表示は 1974 年 10 月受理、1975 年 4 月改訂、1975 年の著作権表示。論文の頁表示は「Invited Paper」。掲載誌（Proceedings of the IEEE とされる）の巻号は、取得した頁から確認していない
- URL: https://web.mit.edu/Saltzer/www/publications/protection/Basic.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 頁表示は Copyright © 1975 by J. H. Saltzer。利用許諾の明示は未確認。短い引用に留める
- 要旨（本 skill の言葉）: 保護の仕組みは小さく単純にする（不正な経路は普段の使い方で見つからないため、行ごとの検査が要る）。アクセスの判断は許可を基準にし、既定は拒否にする（許可の誤りは拒否側に倒れて早く見つかる）。すべての対象へのすべてのアクセスで権限を確かめる（権限の結果を覚えておく高速化は、権限の変更で更新されるか、疑って確かめる）。
- 使いどころ: 認可の設計レビュー。許可リスト型か拒否リスト型か、検査の抜けがないか
- 備考: 区分の根拠・範囲: 各原則の見出しの 1 文を引いた。本文の理由づけは引いていない。

### S003 Saltzer と Schroeder「The Protection of Information in Computer Systems」（1975。設計の公開・権限の分離・最小権限）

> The mechanisms should not depend on the ignorance of potential attackers, but rather on the possession of specific, more easily protected, keys or passwords.

> Separation of privilege: Where feasible, a protection mechanism that requires two keys to unlock it is more robust and flexible than one that allows access to the presenter of only a single key.

> Least privilege: Every program and every user of the system should operate using the least set of privileges necessary to complete the job.

- 媒体・日付: Saltzer・Schroeder の論文（MIT 公開版 Basic.html）。頁表示は 1974 年 10 月受理、1975 年 4 月改訂、1975 年の著作権表示。論文の頁表示は「Invited Paper」。掲載誌（Proceedings of the IEEE とされる）の巻号は、取得した頁から確認していない
- URL: https://web.mit.edu/Saltzer/www/publications/protection/Basic.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 頁表示は Copyright © 1975 by J. H. Saltzer。利用許諾の明示は未確認。短い引用に留める
- 要旨（本 skill の言葉）: 保護は、攻撃者が仕組みを知らないことでなく、より守りやすい鍵やパスワードを持っていることに基づかせる（仕組みを多くの人が検証できる）。2 つの条件を満たさないと開かない形にすると、1 つの事故・欺き・背信では破れない。各プログラムと各利用者は、仕事に要る最小の権限で動く（誤りの損害を限り、監査の対象を減らす）。
- 使いどころ: 秘密にするものと公開してよいものの線引き。二人承認・権限分離・最小権限の根拠
- 備考: 区分の根拠・範囲: 1 つ目は「Open design: The design should not be secret」に続く文。見出しの直後の参照番号 `[27]` は含めていない。

### S004 Saltzer と Schroeder「The Protection of Information in Computer Systems」（1975。共通の仕組みを減らす・心理的な受け入れやすさ・作業量）

> Least common mechanism: Minimize the amount of mechanism common to more than one user and depended on by all users

> Psychological acceptability: It is essential that the human interface be designed for ease of use, so that users routinely and automatically apply the protection mechanisms correctly.

> Work factor: Compare the cost of circumventing the mechanism with the resources of a potential attacker.

- 媒体・日付: Saltzer・Schroeder の論文（MIT 公開版 Basic.html）。頁表示は 1974 年 10 月受理、1975 年 4 月改訂、1975 年の著作権表示。論文の頁表示は「Invited Paper」。掲載誌（Proceedings of the IEEE とされる）の巻号は、取得した頁から確認していない
- URL: https://web.mit.edu/Saltzer/www/publications/protection/Basic.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 頁表示は Copyright © 1975 by J. H. Saltzer。利用許諾の明示は未確認。短い引用に留める
- 要旨（本 skill の言葉）: 全利用者が頼る共通の仕組みは最小にする（共通の部分は全員に対して確かめる必要があり、誤りが全員に及ぶ）。利用者の心の中の保護の目的と、使う仕組みが近いほど誤りが減る。突破の費用を攻撃者の資源と比べる見方は、費用を直接計算できない仕組みが多いので限定的である、と論文自身が書く。
- 使いどころ: 使いやすさと安全の関係の出どころ。共有部品を増やさない判断。「作業量」の考え方の限界
- 備考: 区分の根拠・範囲: 1 つ目は、見出しの文の後の参照番号 `[28]` の手前で切った。3 つ目の Work factor と、記録による検知（compromise recording）は、論文が「物理の保安から借りたが、計算機には不完全にしか当てはまらない」と位置づける 2 つの追加の原則。

### S005 Kerckhoffs「La cryptographie militaire」（1883。6 つの desiderata のうち第 1・第 2）

> Le système doit être matériellement, sinon mathématiquement, indéchiffrable

> 2° Il faut qu'il n'exige pas le secret, et qu'il puisse sans inconvénient tomber entre les mains de l'ennemi ;

- 媒体・日付: Journal des sciences militaires, vol. IX, 1883 年 1 月号（第 I 部）。頁範囲 5-38 頁は Petitcolas の頁の表示。Petitcolas の HTML 転写。Petitcolas が英国図書館の複写から電子化した PDF（1 月・2 月の連載の第 1 部）でも照合した
- URL: https://www.petitcolas.net/kerckhoffs/la_cryptographie_militaire_i.htm
- URL: https://www.petitcolas.net/kerckhoffs/（第 1 部の PDF は同サイトの crypto_militaire_1.pdf）
- 取得日: 2026-11-21
- 検証区分: B
- ライセンス: 原典は 1883 年の出版物。転写の頁の利用許諾は未確認。電子化版の頁は「Copyright © 1997-2026 by Fabien Petitcolas」の表示。短い引用に留める
- 要旨（本 skill の言葉）: 軍用の暗号が満たす 6 つの条件（desiderata）のうち、第 1 は「実質的に（数学的にでなくても）解読できない」こと、第 2 は「秘密を要さず、敵の手に落ちても支障がない」こと。残りの 4 つは、鍵の伝達と変更、電信への適用、携帯と一人での操作、使いやすさ。第 2 の条件は、系を秘密にしないという要求であり、鍵まで公開してよいという意味ではない。
- 使いどころ: 「仕組みの秘密に頼らない」設計の出どころを、一次の原文で示す。電信を使う軍の通信が前提であること（条件の 4 が電信、5 が持ち運び）を、本文で確かめられる。Petitcolas の英訳は「approximate」と本人が書く近似なので、日本語化するときは原文から訳すか、近似と明記する。Shannon の仮定との区別は S008。
- 備考: 区分の根拠・範囲: 転写の頁（HTML）と、OCR した電子化版（PDF）の文字列に一致した。どちらも印刷された原典そのものとの照合ではない。転写の頁の利用許諾は未確認。

### S006 Kerckhoffs「La cryptographie militaire」（1883。「秘密」の意味）

> Et ici j'entends par secret, non la clef proprement dite, mais ce qui constitue la partie matérielle du système : tableaux, dictionnaires ou appareils mécaniques quelconques qui doivent en permettre l'application.

> Quant à la nécessité du secret, qui, à mes yeux, constitue le principal défaut de tous nos systèmes de cryptographie, je ferai observer qu'elle restreint en quelque sorte l'emploi de la correspondance chiffrée aux seuls commandants en chef.

- 媒体・日付: Journal des sciences militaires, vol. IX, 1883 年 1 月号（第 I 部）。頁範囲 5-38 頁は Petitcolas の頁の表示。Petitcolas の HTML 転写。Petitcolas が英国図書館の複写から電子化した PDF（1 月・2 月の連載の第 1 部）でも照合した
- URL: https://www.petitcolas.net/kerckhoffs/la_cryptographie_militaire_i.htm
- 取得日: 2026-11-21
- 検証区分: B
- ライセンス: 原典は 1883 年の出版物。転写の頁の利用許諾は未確認。電子化版の頁は「Copyright © 1997-2026 by Fabien Petitcolas」の表示。短い引用に留める
- 要旨（本 skill の言葉）: Kerckhoffs は、第 2 の条件で言う「秘密」を、鍵そのものでなく、系の物としての部分（表・辞書・機械の装置）だと断る。秘密を要する系は、多くの人の手にあるほど危うくなり、暗号通信を総司令官だけに限ってしまう、というのが、彼の挙げる実用上の理由。
- 使いどころ: 「鍵は秘密、仕組みは公開前提」の分け方。系の秘密を前提にすると運用の範囲が狭まる、という論拠

### S007 Fabien Petitcolas の解説（Kerckhoffs の原則の英語の要約の位置づけ）

> This does not necessarily implies that the method should be public, but only considered as public during its creation.

> Here is an approximate English version of the principles that should apply to a crypto-system:

- 媒体・日付: Fabien Petitcolas「Kerckhoffs' principles from « La cryptographie militaire »」（頁末の表示 Copyright © 1997-2026 by Fabien Petitcolas）
- URL: https://www.petitcolas.net/kerckhoffs/
- 取得日: 2026-11-21
- 検証区分: B
- ライセンス: 頁表示は Copyright © 1997-2026 by Fabien Petitcolas。利用許諾は未確認。短い引用に留める
- 要旨（本 skill の言葉）: Petitcolas は、広く引かれる「暗号化の方法は敵に知られている前提で、安全は鍵の選び方にある」という言い方は、方法を公開すべきだという意味ではなく、設計の時点で公開されたものと見なす、という意味だと注記する。彼の英語の 6 項目は「おおよその版」と本人が書く。
- 使いどころ: 「公開すべき」か「知られている前提」かの区別。英訳の孫引きを使わない理由
- 備考: 区分の根拠・範囲: Petitcolas の解釈と、彼の「おおよその英語版」。Kerckhoffs 本人の言葉ではない。原文に「implies」とある綴りのまま引いた。

### S008 Shannon「Communication Theory of Secrecy Systems」（敵は系を知っている、という仮定）

> To make the problem mathematically tractable we shall assume that the enemy knows the system being used.

> It might be objected that this assumption is unrealistic, in that the cryptanalyst often does not know what system was used or the probabilities in question.

- 媒体・日付: Bell System Technical Journal 28 巻 4 号、1949 年 10 月（archive.org の目録の表示。頁の開始は 656 頁）。archive.org が配る OCR 付き PDF
- URL: https://archive.org/details/bstj28-4-656
- 取得日: 2026-11-21
- 検証区分: B
- ライセンス: 利用許諾は未確認（目録に権利の表示なし）。短い引用に留める
- 要旨（本 skill の言葉）: Shannon は、理論を扱いやすくするための仮定として、敵が系（変換の族と鍵の確率）を知っているとする。実際には知らないことも多いという反論に、2 つの答えを書く（1 つ目は、暗号の種類の指定を鍵の一部と見なせば、仮定は見かけより弱い、という趣旨）。これは Kerckhoffs の第 2 の条件（S005）と動機も文脈も違う、別の仮定である。
- 使いどころ: Kerckhoffs と Shannon を混同しない。「敵は系を知っている」の出どころ
- 備考: 区分の根拠・範囲: archive.org の写し。公式の出版社の頁ではない。

### S009 Ross Anderson『Security Engineering』第 3 版 第 1 章「What Is Security Engineering?」

> Security engineering is about building systems to remain dependable in the face of malice, error, or mischance.

> To build really dependable systems, you need four things to come together.

- 媒体・日付: 『Security Engineering - A Guide to Building Dependable Distributed Systems』Third Edition、Wiley、2020（巻頭の表示 Copyright © 2020 by Ross Anderson, Published by John Wiley & Sons。ISBN 978-1-119-64278-7。序文の末は 2020 年 11 月、ケンブリッジ）。著者の頁の章 PDF
- URL: https://www.cl.cam.ac.uk/archive/rja14/Papers/SEv3-ch01.pdf
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 巻頭に「No part of this publication may be reproduced ... without ... permission」の類の留保。短い引用に留める
- 要旨（本 skill の言葉）: セキュリティ工学は、悪意・誤り・不運があっても頼れる系を作ること。足りない技能として、敵対的な思考を挙げる。頼れる系には、policy（何を達成するか）・mechanism（実装する仕組み）・assurance（仕組みにどれだけ頼れるか）・incentive（系を守り保つ人の動機）の 4 つが揃う必要がある、という枠を示す。
- 使いどころ: 「方針・仕組み・保証・動機」の 4 つで設計を見る枠
- 備考: 区分の根拠・範囲: 巻頭の PDF は https://www.cl.cam.ac.uk/archive/rja14/Papers/SEv3-ch00.pdf。ISBN と著作権の表示はそこから確かめた。

### S010 CISA ほか「Shifting the Balance of Cybersecurity Risk: Principles and Approaches for Secure by Design Software」（2023 年 4 月初版、同年 10 月更新。公開頁と PDF）

> It expands on the three principles which are: Take Ownership of Customer Security Outcomes, Embrace Radical Transparency and Accountability, and Lead From the Top.

> Software manufacturers must be able to compete on the basis of security.

> The burden of security should not fall solely on the customer.

> Historically, software manufacturers have relied on fixing vulnerabilities found after the customers have deployed the products, requiring the customers to apply those patches at their own expense.

- 媒体・日付: CISA（米国）と米国・国際のパートナー（頁の記述で「CISA and 17 U.S. and international partners」。日本は JPCERT/CC と NISC を含む）が共同で公開。頁の Revision Date は October 25, 2023、初版は April 2023。公開頁の説明文と、PDF の本文から引いた。別の取得先の PDF（SecureByDesign_1025_508c.pdf。TLP:CLEAR の表示、目次に 3 つの原則・Secure by Design の戦術・Secure by Default の戦術・顧客向けの推奨がある）は、文字の抽出が欠けたため引用の照合に使っていない
- URL: https://www.cisa.gov/resources-tools/resources/secure-by-design
- URL: https://www.cisa.gov/sites/default/files/2023-10/SecureByDesign_1025_508c.pdf
- URL: https://www.cisa.gov/sites/default/files/2023-10/Shifting-the-Balance-of-Cybersecurity-Risk-Principles-and-Approaches-for-Secure-by-Design-Software.pdf
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 未確認（CISA の頁の利用許諾の明示を確かめていない。PDF は TLP:CLEAR の表示。米政府の出版物で、著作権の表示は見つからなかった）。短い引用に留める
- 要旨（本 skill の言葉）: 製造者向けの共同の指針。3 つの原則は、顧客の安全の成果に責任を持つ・徹底した透明性と説明責任・上層部が率いる。2023 年 10 月の更新で、原則を示す方法を拡充した。製造者がセキュリティで競えることを求める。事業者・組織の自称・取り組みは、事実として一般化しない。従来は、供給元が展開後に見つけた脆弱性を直し、顧客が自費で適用してきたが、それは「修正を作っては適用する」悪循環で、設計で断つ（PDF の本文）。secure by design と secure by default を分ける。secure by default は、箱から出してすぐ、設定の変更がほぼ要らずに安全に使え、安全機能が追加費用なしで使えるもの、という趣旨（別の取得先の PDF の趣旨で、逐語は照合していない）。「あとから足す（bolted on）のでなく、初めから組み込む（baked in）」という言い回しが本文にある。
- 使いどころ: Secure by Design の 3 原則と版（2023 年 10 月）。国内の共同署名者（JPCERT/CC・NISC）の存在。責任の置き場所を、利用者から作り手へ移す方針の一次（政府の方針）。S072 の誘因の議論と関わる論点（本 skill の整理）。この方針への外部の批判は、一次を取れていない（末尾の未検証の表を見る）。「各社の誓約の履行」は、事業者の自称。
- 備考: 区分の根拠・範囲: 頁の説明文の引用（1・2 つ目）と、PDF の本文の引用（3・4 つ目）。政府機関の方針文書で、作り手に責任を寄せる方針の自己説明。

### S011 CISA「Secure by Design」の入口の頁

> we have allowed a system where the cybersecurity burden is placed disproportionately on the shoulders of consumers and small organizations and away from the producers of the technology

> Products designed with Secure by Design principles prioritize the security of customers as a core business requirement, rather than merely treating it as a technical feature.

> Out-of-the-box, products should be secure with additional security features such as multi-factor authentication (MFA), logging, and single sign-on (SSO) available at no extra cost.

- 媒体・日付: CISA の Secure by Design の頁（頁に公開日の表示は無い）
- URL: https://www.cisa.gov/securebydesign
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 未確認（CISA の頁の利用許諾の明示を確かめていない。PDF は TLP:CLEAR の表示。米政府の出版物で、著作権の表示は見つからなかった）。短い引用に留める
- 要旨（本 skill の言葉）: セキュリティの負担が、技術の作り手でなく、消費者と小さい組織に偏っている、という問題の立て方。顧客の安全を、技術の機能でなく事業の要件として扱う。多要素認証・ログ・シングルサインオンなどの追加の安全機能を、追加費用なしで、箱を開けた状態で使えるようにする。米国の政府機関の方針で、民間の製品の規範ではない。
- 使いどころ: 責任を作り手に置く考え方。既定の安全（secure by default）
- 備考: 区分の根拠・範囲: 1 つ目は文の途中から引いた。前に「As a nation,」が付く。

### S012 CISA「Secure by Design Pledge」

> This pledge is voluntary and not legally binding.

> The pledge is structured with seven goals.

> Join CISA and over 200 software manufacturers by committing to take specific, measurable actions in line with secure by design principles.

- 媒体・日付: CISA の Secure by Design Pledge の頁と入口の頁（頁に公開日の表示は無い。署名者の数は CISA の頁の記述で、取得日の時点の自称）
- URL: https://www.cisa.gov/securebydesign/pledge
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 未確認（CISA の頁の利用許諾の明示を確かめていない。PDF は TLP:CLEAR の表示。米政府の出版物で、著作権の表示は見つからなかった）。短い引用に留める
- 要旨（本 skill の言葉）: 企業向けのソフトウェア（オンプレミス・クラウド・SaaS）の製造者による、任意の誓約で、法的拘束力は無い。IoT の機器や消費者向けの製品は対象外。目標は 7 つ（頁の目標の見出しに、多要素認証・既定のパスワードの削減・脆弱性の分類全体の削減などがある）。署名者の取り組みは、各社が公開する自称であり、効果として一般化しない。
- 使いどころ: 誓約の性格（任意・自称）。製造者の公約と、製品の安全の実測を混同しない
- 備考: 区分の根拠・範囲: 3 つ目は入口の頁 https://www.cisa.gov/securebydesign の文。

## 脅威モデリングと弱点・攻撃の分類

### S013 Adam Shostack の 4 つの問い（本人の公式リポジトリ）

> These questions are designed to help people build better systems. They work less well for end-users of technology.

> The goal is not to do a good job at threat modeling, but to drive improvement to a system.

> The "building" frame draws people towards a waterfall approach with the attendant problems.

- 媒体・日付: Adam Shostack「Shostack's Four Question Frame for Threat Modeling」（GitHub の README。リポジトリの作成は 2020-10-08、最終の更新 2026-05-29。いずれも GitHub の API の表示）
- URL: https://github.com/adamshostack/4QuestionFrame
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: README に「If you need a license, please treat it as CC-BY」とあり、4 つの問いを CC-BY として扱う。引用は 1〜3 文に留める
- 要旨（本 skill の言葉）: 4 つの問いは、What are we working on? / What can go wrong? / What are we going to do about it? / Did we do a good job?。システムを作る人のための問いで、利用者向けには効きにくい。「building」でなく「working on」とするのは、作り終えてから考える滝の型に引き寄せないため。README は、本の初版（2014）から語を変えた点（you を we に、should を are に、「good enough」を時々尋ねる、など）も書く。マニフェストは 4 つ目に「enough」を足す（S014）。3 つの文言（本の初版・README・マニフェスト）を混ぜない。
- 使いどころ: 脅威モデリングの最初の型。問いの文言の出どころ（README の語）
- 備考: 区分の根拠・範囲: 本人のリポジトリ。README の最終の改訂日は頁に無い。

### S014 Threat Modeling Manifesto（2020 年頃）

> At the highest levels, when we threat model, we ask four key questions: 1. What are we working on? 2. What can go wrong? 3. What are we going to do about it? 4. Did we do a good enough job?

> A culture of finding and fixing design issues over checkbox compliance.

> Dialog is key to establishing the common understandings that lead to value, while documents record those understandings, and enable measurement.

> Hero Threat Modeler Threat modeling does not depend on one's innate ability or unique mindset; everyone can and should do it.

> Admiration for the Problem Go beyond just analyzing the problem; reach for practical and relevant solutions.

- 媒体・日付: Threat Modeling Manifesto（作業部会 15 名。Shostack を含む）。GitHub の初版の公開は 2020-11-17（GitHub の API の表示）。頁と PDF は現行の版。頁自体には公開年の表示が無い（頁に 2020 年の OWASP の講演への言及がある）
- URL: https://www.threatmodelingmanifesto.org/
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: CC BY 4.0（頁と PDF に明記）
- 要旨（本 skill の言葉）: 脅威モデリングは、セキュリティとプライバシーに関する懸念を見つけるために、系の表現を分析すること。価値として、設計の問題を見つけて直す文化を、チェック項目の充足より重んじる。ほかの価値は、人と協力、理解の旅、実践、継続的な改善。原則として、早く頻繁に行い、組織の開発の進め方に合わせ、対話が共通の理解をつくり、文書がそれを記録して測れるようにする。反パターンに Hero Threat Modeler・Admiration for the Problem・Tendency to Overfocus・Perfect Representation を挙げる。方法論には中立で、手順書ではない。
- 使いどころ: 脅威モデリングの 4 つの問いと、価値・原則・反パターン。「網羅の儀式」「形だけの遵守」への批判の、宣言する側（実践者）の記述の一次。コンプライアンスと設計の関係（責任と誘因の項目の S071・S072）の根拠の 1 つ。
- 備考: 区分の根拠・範囲: 1 つ目の引用は PDF から引いた。同じ文は頁にもあるが、頁では「questions :」と空白が入る。宣言の原文で、宣言する側の自己批判を含む。

### S015 Adam Shostack のホワイトペーパー No.5「Understanding The Four-Question Framework for Threat Modeling」（2024）

- 引用: なし。この文書は CC BY-NC 4.0 で、4 つの問いだけが CC BY のため、配布の台帳では要旨にした（本文の引用ブロックは載せていない）。

- 媒体・日付: Shostack + Associates White Paper #5、2024 年 11 月、Adam Shostack
- URL: https://shostack.org/files/papers/The_Four_Question_Framework.pdf
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 文書は CC BY-NC 4.0、4 つの問いは CC-BY（文書末に明記）。引用は短く留める
- 要旨（本 skill の言葉）: 問いの文言は 2006 年から 2014 年にかけて磨かれた。問いは技術に限らず、言い換えると意図や柔軟さが失われる、と書く。STRIDE のような記憶術や kill chain は有用だが、その知識が無い人にも開かれるように、問いを「What can go wrong?」と広く立てる、と書く。
- 使いどころ: 問いを言い換えない理由。「measure twice, cut once」の出どころ
- 備考: 区分の根拠・範囲: 本文は 2 段組で、4 つの問いの並びが取り出しで崩れる。問いの文言は S013・S014 で照合した。

### S016 Adam Shostack の初心者向けの頁（脅威モデリングの定義）

> Threat modeling is a family of structured, repeatable processes that allows you to make rational decisions to secure applications, software, and systems.

> Threat modeling is the measure twice, cut once of cybersecurity.

- 媒体・日付: Shostack + Associates「The Ultimate Beginner's Guide to Threat Modeling」。頁の公開日は表示なし（本文に「in 2022」の記述がある）
- URL: https://shostack.org/resources/threat-modeling
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 未確認（頁末の著作権表示を確認していない）。短い引用に留める
- 要旨（本 skill の言葉）: 脅威モデリングは、構造のある繰り返せる手順の族で、アプリ・ソフトウェア・系を守るための判断を合理的にする。練習を重ねれば、問題が現実の害になる前に見つけて直せる、と書く。
- 使いどころ: 脅威モデリングの定義の言い方（本人の語）

### S017 Kohnfelder と Garg「The threats to our products」（1999 年、STRIDE の初出の文書）

> The S.T.R.I.D.E. security threat model should be used by all MS products to identify various types of threats the product is susceptible to during the design phase.

> S.T.R.I.D.E. stands for: Spoofing of user identity Tampering with data Repudiability Information disclosure (privacy breach) Denial of Service (D.o.S.) Elevation of privilege

> Identifying the threats is the first step in a proactive security analysis process.

- 媒体・日付: 文書の表示は「April 1, 1999 - By Loren Kohnfelder and Praerit Garg」。Microsoft の社内文書（Microsoft Security Task Force が定めた脅威モデル、と文中にある）。Shostack の頁が配る Word 版
- URL: https://shostack.org/files/microsoft/The-Threats-To-Our-Products.docx
- 取得日: 2026-11-21
- 検証区分: B
- ライセンス: 未確認（Microsoft の社内文書の写し）。短い引用に留める
- 要旨（本 skill の言葉）: STRIDE は、設計の段階で製品が受けうる脅威の種類を洗い出すための分類として、Microsoft の製品チーム向けに定められた。6 つは、利用者の偽装・データの改ざん・否認（原文では Repudiability）・情報の開示・サービス拒否・権限の昇格。「最も弱い環を直す」という考え方が文中にある。後年の資料は「Repudiation」と綴る（S018）。
- 使いどころ: STRIDE の出どころ（1999 年、Kohnfelder と Garg）。語の変遷
- 備考: 区分の根拠・範囲: 著者本人でなく Shostack の頁が配る写し。docx の本文を取り出して照合した。

### S018 Microsoft Learn の STRIDE の説明（現行の語）

> To better help you formulate these kinds of pointed questions, Microsoft uses the STRIDE model, which categorizes different types of threats and simplifies the overall security conversations.

- 媒体・日付: Microsoft Learn「Threat Modeling Tool threats」。頁の表示は Last updated on 2022-08-25
- URL: https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 未確認。短い引用に留める
- 要旨（本 skill の言葉）: STRIDE は、脅威の種類を分類して、セキュリティの会話を単純にする枠。頁は同社の道具の説明の中にある。
- 使いどころ: STRIDE の 6 分類の現行の語
- 備考: 区分の根拠・範囲: 事業者の公式文書。分類の表の語は「Spoofing・Tampering・Repudiation・Information Disclosure・Denial of Service・Elevation of Privilege」。

### S020 Bruce Schneier「Attack Trees」（Dr. Dobb's Journal、1999 年 12 月）

> Basically, you represent attacks against a system in a tree structure, with the goal as the root node and different ways of achieving that goal as leaf nodes.

> it becomes increasingly clear that the term "security" doesn't have meaning unless also you know things like "Secure from whom?" or "Secure for how long?"

> Clearly, what we need is a way to model threats against computer systems.

- 媒体・日付: Dr. Dobb's Journal、1999 年 12 月（頁の表示）。schneier.com の academic の頁
- URL: https://www.schneier.com/academic/archives/1999/12/attack_trees.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 未確認。短い引用に留める。頁のコメント欄に Creative Commons の記述がある頁もあるが、コメントの利用許諾で、本文ではない
- 要旨（本 skill の言葉）: attack tree は、攻撃の目標を根に、目標を達する手段を子の節点に置く木。節点には OR（代替の手段）と AND（すべて要る段階）がある。葉に「可能・不可能」や「安価・高価」などの値を付けて、上の節点へ伝えると、目標に届く道が分かる。例は物理の金庫で、図の値は例示だと断る。「誰から・いつまで安全か」が分からない限り、「安全」の語には意味が無い、と書く。
- 使いどころ: 攻撃者の目標から逆に考える脅威の整理。「Secure from whom?」の問い。脅威モデルの初期の方法の一次で、「誰に対して」の問いを、攻撃者像の前提として歴史の中心の問い（本 skill の整理）につなげる。図の中の具体例（金庫の例）は引用しない。

### S021 OWASP「Threat Modeling Cheat Sheet」

> There is no universally accepted industry standard for the threat modeling process, no "right" answer for every use case.

> A threat model is something that should be maintained, updated and refined alongside the system.

> According to the Threat Modeling Manifesto, the threat modeling process should answer the following four questions:

- 媒体・日付: OWASP Cheat Sheet Series。頁に版番号なし。リポジトリの当該ファイルの最終コミット 2026-10-12
- URL: https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html
- URL（原稿）: https://raw.githubusercontent.com/OWASP/CheatSheetSeries/ae965343cb82e6b8f42aff1ccee57c4fa0f171c2/cheatsheets/Threat_Modeling_Cheat_Sheet.md
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: CC BY-SA 4.0
- 要旨（本 skill の言葉）: 脅威モデリングは、系を敵対者の視点で捉え、脅威を洗い出し、対応を決める、構造化された繰り返せる手順。設計の早い段階で始め、系と一緒に保守する（一度きりにしない）。問いは 4 つ（何に取り組んでいるか・何がまずくなりうるか・どう対処するか・十分にできたか）で、頁はこれを 4 つの工程（系のモデル化・脅威の特定・対応・検証）に当てる。系のモデル化は、データフロー図で信頼境界・データの流れ・保管場所・外部の主体を見えるようにするのが最も一般的。頁自体が、標準化された唯一の方法はないと断る。クラウドでは STRIDE などの伝統的な手法に調整が要る、という節もある。
- 使いどころ: 脅威モデリングの進め方の骨格（4 つの問い）。出どころ（Shostack・Manifesto）の一次は S013・S014・S015・S016。
- 備考: 区分の根拠・範囲: 3 つ目は原文でマニフェストの名がリンク。リンク記号を除いた形で照合。

### S022 Nataliya Shevchenko「Threat Modeling: 12 Available Methods」（SEI ブログ、2018）

> Invented in 1999 and adopted by Microsoft in 2002, STRIDE is currently the most mature threat-modeling method.

- 媒体・日付: Software Engineering Institute（Carnegie Mellon University）のブログ、2018（頁の引用表記「Shevchenko, N., 2018: Threat Modeling: 12 Available Methods」）
- URL: https://www.sei.cmu.edu/blog/threat-modeling-12-available-methods/
- 取得日: 2026-11-21
- 検証区分: B
- ライセンス: 表示なし（著作権は各権利者。引用は短く）
- 要旨（本 skill の言葉）: STRIDE は 1999 年に考案され、2002 年に Microsoft が採用した。データフロー図で系の登場物・出来事・境界を洗い出し、名前の頭文字の脅威の一般の型を当てはめる。成熟した方法と評価される一方、時間とともに脅威の表やバリエーションが増えた。
- 使いどころ: STRIDE の出どころの年の根拠（二次）。原典の著者・初出は未確認なので、本文で「SEI は 1999 年考案と書く」とだけ書く。ブログは 12 の方法の概観で、各方法の優劣は評価しない。
- 備考: 区分の根拠・範囲: STRIDE の原典〈Kohnfelder と Garg の社内文書とされる〉は取得していない。年は SEI の記述。

### S023 Shostack + Associates「Threat Modeling」の頁

> Most modern threat modeling approaches follow Shostack's Four Question Framework: What are we working on? What can go wrong? What are we going to do about it? Did we do a good job?

> Sometimes the diagram is even confused for the whole threat model.

- 媒体・日付: Shostack + Associates の頁（「© 2021-2026」の表示。公開年は未確認）
- URL: https://shostack.org/resources/threat-modeling
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 「© 2021-2026 Shostack + Associates」の表示のみ。引用は短く
- 要旨（本 skill の言葉）: 近年の脅威モデリングの多くが、4 つの問い（何を作っているか、何がまずくなりうるか、どう対処するか、十分にできたか）に沿う。データフロー図は脅威モデルと同一視されるほど結びついているが、図を脅威モデルの全体と取り違えることがある。4 つの問いだけを問うのでも、何もしないよりずっとよい。
- 使いどころ: 4 つの問いの出どころの一次（本人側）。図が手段であって成果ではない、という注意の一次。「4 つの問いの初出の年」は頁から確認できていない（末尾の未検証の表を見る）。
- 備考: 区分の根拠・範囲: Shostack 本人の会社の頁。同社は研修・助言を売っており、利害がある。4 つの問いの考案は本人の枠組みと自称する。図と脅威モデルの取り違えの注意は、頁の持ち主自身の留保なので A とした。

### S024 CWE「FAQ」（弱点と脆弱性の違い、CAPEC との関係）

> A weakness is an underlying condition that can lead to vulnerabilities in a variety of products.

> While CWE is a list of software and hardware weakness types, Common Attack Pattern Enumeration and Classification (CAPEC™) is a list of the most common methods attackers use to exploit these weaknesses.

- 媒体・日付: cwe.mitre.org の FAQ。頁表示の著作権「© 2006-2026, The MITRE Corporation」。CWE のリスト版は、取得した `data/index.html` が古い版（5.0、頁の更新日 2024-11-19）を示したため、現行の版は確かめていない（末尾の未検証の表を見る）
- URL: https://cwe.mitre.org/about/faq.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: MITRE の著作権。FAQ は、研究・開発・商用に無料で使えるが CWE Terms of Use に従う、と書く。未確認の細部あり。短い引用に留める
- 要旨（本 skill の言葉）: 弱点（weakness）は、複数の製品で脆弱性につながりうる根本の条件。脆弱性（CVE に載るもの）は、特定の製品での、弱点の具体的な事例。CWE の目的は、設計・実装の早い段階で弱点を避けるよう作り手に教えることで、攻撃者に有利になるという懸念より利益が大きいと FAQ は論じる。識別子は 4 種（Category・Compound Element・View・Weakness）で、Weakness は抽象度で Pillar・Class・Base・Variant に分かれる。
- 使いどころ: 「脆弱性の ID（CVE）」と「弱点の類型（CWE）」を区別して説明する。レビューの指摘に CWE の番号を添えるときの位置づけ。
- 備考: 区分の根拠・範囲: 2 つ目の引用は「CAPEC™」の商標記号を含む原文のまま。

### S025 CAPEC「FAQ」（攻撃パターンの定義）

> An attack pattern is a description of the common attributes and approaches employed by adversaries to exploit known weaknesses in cyber-enabled capabilities.

- 媒体・日付: capec.mitre.org の FAQ。頁の更新日表示「2019-04-04」、著作権「© 2007-2026」。取得した `data/index.html` は CAPEC List Version 3.9（559 件）と表示するが、その頁の更新日は 2019-09-30 で古い可能性があり、現行の版は確かめていない（末尾の未検証の表を見る）
- URL: https://capec.mitre.org/about/faq.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: MITRE の著作権。Terms of Use に従う。短い引用に留める
- 要旨（本 skill の言葉）: 攻撃パターンは、敵対者が既知の弱点を突くときの共通の特徴と方法の記述で、設計パターンを破壊の側に当てはめたもの。現実の攻撃事例の分析から作られる。CAPEC は ATT&CK と別に、攻撃の知識を整理する 2 つの方法の 1 つ（頁は比較の頁へ案内する）。防御側は、攻撃の手順ではなく、「どの設計上の前提が破れるか」を考える入口に使う（本 skill の整理）。
- 使いどころ: 脅威の洗い出しで、攻撃の類型の名前を借りる。実行の手順は出さない。

### S026 CWE「2025 CWE Top 25 Most Dangerous Software Weaknesses」と方法

> The "2025 CWE Top 25 Most Dangerous Software Weaknesses" list was calculated by analyzing public vulnerability information in Common Vulnerabilities and Exposures (CVE™) Records for CWE root cause mappings .

- 媒体・日付: cwe.mitre.org。一覧の頁の更新日 2025-12-15。方法の頁は、2024-06-01 から 2025-06-01 に公開された CVE 記録（39,080 件）を対象にしたと書く
- URL: https://cwe.mitre.org/top25/archive/2025/2025_cwe_top25.html
- URL: https://cwe.mitre.org/top25/archive/2025/2025_methodology.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: MITRE の著作権。短い引用に留める
- 要旨（本 skill の言葉）: 一覧は、公開された脆弱性の記録（CVE）に付いた弱点の分類から算出したもの。取得時点の上位に、クロスサイトスクリプティング・SQL インジェクション・CSRF・認可の欠落・範囲外の書き込みなどが並ぶ（順位は年ごとに変わる。台帳には順位を写さない）。認可の欠落・不正な認可・アクセス制御の不備の項が複数あり、S036 の認可の論点と対応する。
- 使いどころ: 「Top 25 を満たせば安全」という誤用の訂正（一覧は公開された記録から算出したもので、網羅のチェックリストではない）。年と対象期間を添えて示す。
- 備考: 区分の根拠・範囲: 引用は方法の頁。「mappings」の後の空白は、リンクの記号を除いた正規化の副作用で、原文では「mappings」の直後の語がリンク。空白と、強調記号・リンク記号・商標記号を除いて比較して一致した引用がある（タグや記号が入る位置の空白の差）。

## 認証とセッション

### S027 OWASP「Authentication Cheat Sheet」

> Avoid requiring periodic password changes; instead, encourage users to pick strong passwords and enable

> Allow usage of **all** characters including unicode and whitespace.

> An application should respond (both HTTP and HTML) in a generic manner.

- 媒体・日付: OWASP Cheat Sheet Series。頁に版番号なし。リポジトリの当該ファイルの最終コミット 2026-10-04
- URL: https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
- URL（原稿）: https://raw.githubusercontent.com/OWASP/CheatSheetSeries/684d6d9d9f1a0c680ad30219f46ae4e2debf9440/cheatsheets/Authentication_Cheat_Sheet.md
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: CC BY-SA 4.0（リポジトリの LICENSE.md に SPDX 表記 CC-BY-SA-4.0）。帰属を付けて短く引用する
- 要旨（本 skill の言葉）: パスワードの強さの規則は、長さの下限・全文字種の許可・流出済みのものを弾くことを軸にし、文字種の組み合わせを強いる規則や定期変更の強制を避ける、と書く。頁は NIST SP 800-63B を引いて長さの具体の値を挙げるが、値は版で変わるので台帳に写さない。ログイン・パスワード回復・登録の応答は、アカウントの有無が分からないよう同じ形で返す。多要素認証は、パスワードに関する攻撃の大半への最も効く防御として勧める（頁は Microsoft の統計を引くが、事業者の自称で一般化しない）。パスキーは WebAuthn を土台にし、鍵が機器のハードウェアに保管されて取り出せない前提を置かず、確かめよと書く。
- 使いどころ: 認証の設計レビュー（パスワードの規則・回復・多要素・パスキーの導入）。NIST SP 800-63B の項（S099）と読み合わせる。
- 備考: 区分の根拠・範囲: 1 つ目の引用は文の途中まで。直後に別の cheat sheet へのリンクが続くため切った。2 つ目の `**all**` は原文の強調記号を除いた形で照合。照合の注記: 空白と、強調記号・リンク記号・商標記号を除いて比較して一致した引用がある（タグや記号が入る位置の空白の差）。

### S028 OWASP「Password Storage Cheat Sheet」

> Passwords should never be stored in plain text.

> Instead, they must be protected using strong, slow hashing algorithms such as Argon2id, bcrypt, or PBKDF2.

> A unique salt must be added to each password to prevent attackers from using precomputed lookup tables like rainbow tables.

> Fast hashing algorithms such as SHA-256 are not suitable for password storage because they allow attackers to perform large numbers of guesses quickly.

> Remember that once your password hashing method is selected, it will have to be upgraded in the future, so ensure that upgrading your hashing algorithm is as easy as possible.

- 媒体・日付: OWASP Cheat Sheet Series。頁に版番号なし。リポジトリの当該ファイルの最終コミット 2026-10-30
- URL: https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
- URL（原稿）: https://raw.githubusercontent.com/OWASP/CheatSheetSeries/87a1faf18a29a5c33d040b000eb3c60330c30b2c/cheatsheets/Password_Storage_Cheat_Sheet.md
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: CC BY-SA 4.0
- 要旨（本 skill の言葉）: パスワードは、暗号化ではなく、遅くて計算資源を食う専用のハッシュで保存する。利用者ごとに固有の塩を足す。速いハッシュは推測の試行数を稼がせるので向かない。頁は、アルゴリズムごとのパラメータの最小値（取得時点）を挙げるが、版と時点で変わるので台帳に写さない。方式を選んだ後も更新することを前提にし、方式とコストの値を保存形式に含めて、新旧の混在期間を作れるようにする。古いハッシュからの移行には、次回のログインで再計算する方法と、既存のハッシュを新方式への入力にする方法があり、後者は弱くなる点を断っている。
- 使いどころ: 保存方式の見直しと移行の相談。値は出さず、頁の版と取得日を示して相談者が決める。
- 備考: 区分の根拠・範囲: 2 つ目の引用の原文は SHA と 256 の間が非改行ハイフン。直線のハイフンに揃えて照合。

### S029 OWASP「Session Management Cheat Sheet」

> The session ID must be renewed or regenerated by the web application after any privilege level change within the associated user session.

> Session IDs must be considered untrusted, as any other user input processed by the web application, and they must be thoroughly validated and verified.

> Web applications should never accept a session ID they have never generated

- 媒体・日付: OWASP Cheat Sheet Series。頁に版番号なし。リポジトリの当該ファイルの最終コミット 2026-11-10
- URL: https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html
- URL（原稿）: https://raw.githubusercontent.com/OWASP/CheatSheetSeries/bebba539c97e55439dfb998931a11fa55c57da72/cheatsheets/Session_Management_Cheat_Sheet.md
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: CC BY-SA 4.0
- 要旨（本 skill の言葉）: 認証後のセッション ID は、認証に使った最も強い手段と一時的に等価になる。だから、権限の水準が変わるたび（ログイン・パスワード変更・権限変更）に ID を作り直す。ID は利用者の入力と同じく信頼せず検証する。自分が発行していない ID を受け入れる方式（許容型）より、発行済みの ID だけを受け入れる方式（厳格型）を取る。頁は、Cookie の属性（Secure・HttpOnly・SameSite・名前の接頭辞）、失効（アイドル・絶対・更新の各タイムアウト）、ログアウト、不審なセッションの検知と記録を節に分けて扱う。
- 使いどころ: セッションの寿命・Cookie の設定・ログイン後の ID の扱いの相談。Cookie の仕様の側（S031）と、認証の側（S027）に分けて説明する。
- 備考: 区分の根拠・範囲: 3 つ目の引用は文の途中まで。

### S030 IETF「RFC 9700: Best Current Practice for OAuth 2.0 Security」

> Public clients MUST use PKCE [RFC7636] to this end, as motivated in Section 4.5.3.1.

> clients SHOULD NOT use the implicit grant (response type token) or other response types issuing access tokens in the authorization response, unless access token injection in the authorization response is prevented and the aforementioned token leakage vectors are mitigated.

- 媒体・日付: IETF、2025-01、Best Current Practice 240。RFC 6749・6750・6819 を更新する
- URL: https://www.rfc-editor.org/rfc/rfc9700.html
- URL（原稿）: https://www.rfc-editor.org/rfc/rfc9700.txt
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 「Copyright (c) 2025 IETF Trust」。BCP 78 と IETF Trust の法的条項に従う。短い引用に留める
- 要旨（本 skill の言葉）: OAuth 2.0 の運用の実務で積み重なった知見を、脅威モデルと助言に反映し、一部の動作モードを非推奨にする文書。認可コード付与では、認可コードの注入を防ぐ。公開クライアントは PKCE が必須（MUST）、機密クライアントは推奨（RECOMMENDED）。暗黙的な付与と、認可応答でアクセストークンを発行するほかの応答タイプは、認可応答での注入が防がれ、前述の漏洩経路が緩和されている場合を除き使わない（SHOULD NOT）。リダイレクトの保護・ミックスアップ・CSRF などを節に分ける。攻撃の手順は書かない。
- 使いどころ: OAuth・OIDC の設計レビューで、「どの付与方式を選ぶか」の根拠。個別の IdP の設定は出さない。
- 備考: 区分の根拠・範囲: 1 つ目は 2.1.1 の箇条の 1 つ。2 つ目は文の途中から。原文は行の折り返しを含むため、空白を 1 つに畳んで照合。

### S031 IETF「Cookies: HTTP State Management Mechanism（draft-ietf-httpbis-rfc6265bis）」

> the issue stems from cookies being a form of ambient authority.

- 媒体・日付: IETF Internet-Draft（RFC 6265 を置き換える予定。承認されれば）。頁表示「Published: 17 November 2026」「Expires: 21 May 2027」。草案であり、標準ではない
- URL: https://httpwg.org/http-extensions/draft-ietf-httpbis-rfc6265bis.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: IETF Trust の条項（頁で確かめていない）。短い引用に留める
- 要旨（本 skill の言葉）: Cookie は、利用者の代わりにリクエストを送る相手にも自動で付くため、ブラウザ側の「環境に付随する権限（ambient authority）」になり、クロスサイトのリクエスト偽造などの原因になる、と整理する。セキュリティの考慮の節は、セッション ID（nonce）を Cookie に持つ設計の利点（漏れても被害がそのサーバーとのやり取りに限られる）と、リスクを述べる。SameSite・Secure・HttpOnly の属性の節がある。
- 使いどころ: CSRF が「Cookie という仕組みの性質」から来ることの説明。SameSite の効果と限界は、草案の版で確かめる。
- 備考: 区分の根拠・範囲: 草案の逐語。時点の情報。

### S032 FIDO Alliance「Passkeys」（概要の頁）

> FIDO standards use standard public key cryptography techniques to provide phishing-resistant authentication

- 媒体・日付: fidoalliance.org の頁。頁に日付なし（「© 2026」）。頁の数値は FIDO Alliance 自身・導入企業・ベンダーの自称で、取得時点の頁に出典の注記が付く
- URL: https://fidoalliance.org/passkeys/
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 頁に「Copyright © 2026 All rights reserved」。引用は 1 文に留める
- 要旨（本 skill の言葉）: FIDO の標準は、標準の公開鍵暗号を使ってフィッシングに強い認証を実現する、と団体が説明する。頁には、導入企業・調査会社の数値（フィッシングの減少、サインインの速さ、離脱率の改善など）が並ぶが、各社の自称で、測り方も異なるので使わない。
- 使いどころ: FIDO Alliance が自らの標準をどう位置づけているかの確認のみ。効果の根拠には WebAuthn の仕様（S102）と NIST の文書（S099）を使う。
- 備考: 区分の根拠・範囲: 団体の説明の頁。頁に並ぶ導入企業・ベンダー・団体自身の統計は自称で、一般化せず引用もしない（説明の部分は団体の文書なので A とした）。

### S033 NIST SP 800-63B-3「Digital Identity Guidelines: Authentication and Lifecycle Management」（2017 年 6 月。2020 年 3 月の更新を含む。800-63-4 に置き換え済み）

> Verifiers SHOULD NOT impose other composition rules (e.g., requiring mixtures of different character types or prohibiting consecutively repeated characters) for memorized secrets. Verifiers SHOULD NOT require memorized secrets to be changed arbitrarily (e.g., periodically).

> Research has shown, however, that users respond in very predictable ways to the requirements imposed by composition rules

- 媒体・日付: NIST Special Publication 800-63B、June 2017、「Includes updates as of 03-02-2020」（表紙）。頁には「This revision of NIST SP 800-63 has been superseded by NIST SP 800-63-4 as of August 1, 2025」と表示。著者に William E. Burr を含む（表紙）
- URL: https://pages.nist.gov/800-63-3/sp800-63b.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 表示は「This publication is available free of charge」のみ。米政府の出版物（著作権の表示は見つからなかった）。引用は短く
- 要旨（本 skill の言葉）: 検証側は、文字種の混在などの組成規則を課すべきでなく、パスワードを任意に（定期的に）変えさせるべきでない（SHOULD NOT）。ただし、漏洩の証拠があれば変更を強制する（SHALL）。付録は、組成規則に対して利用者は予測しやすい対応をすると説明する（付録の例は「password」が大文字と数字の要求で別の形になる、という趣旨で、具体の文字列は引用しない）。
- 使いどころ: 規則の「変遷」の中間の版。2013 年の 800-63-2 は付録 A で「エントロピーと強さの推定」を扱い（目次で確認。本文の組成規則の要求の節は取得していない）、2017 年に SHOULD NOT へ転じた。強さの数値は書かず、出典の版と日付を示す。
- 備考: 区分の根拠・範囲: 発行元の文書。2 つ目は付録 A.3「Complexity」の説明。

### S034 英国 NCSC「Password policy: updating your approach」（コレクションの頁）

> Regular password changing harms rather than improves security.

- 媒体・日付: NCSC（英国の National Cyber Security Centre）の頁。「Reviewed 19 November 2018、Version 1.0」（頁の表示）。「Don't enforce regular password expiry」の見出しの下
- URL: https://www.ncsc.gov.uk/collection/passwords/updating-your-approach
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 表示なし（取得した頁のテキストから見つからなかった。英国政府の文書の許諾は未確認）。引用は短く
- 要旨（本 skill の言葉）: 30・60・90 日などの定期変更は利用者に負担を課し、復旧の費用もかかる。新しいパスワードは古いものの小さな変形になりやすく、盗まれたパスワードはすぐ悪用され、変更しても侵害があったかは分からない、と理由を挙げる。
- 使いどころ: 国際比較の一次（英国）。NIST と同じ方向であることを示す。国内のパスワード規則の指針の一次は取れていない（末尾の未検証の表を見る）。
- 備考: 区分の根拠・範囲: 政府機関の指針。

### S035 Lorrie Cranor「Time to rethink mandatory password changes」（FTC の Office of Technology の記事、2016 年 3 月 2 日）

> There is also evidence from interview and survey studies to suggest that users who know they will have to change their password do not choose strong passwords to begin with and are more likely to write their passwords down.

> The UNC researchers found that for 17% of the accounts they studied, knowing a user's previous password allowed them to guess their next password in fewer than 5 guesses.

- 媒体・日付: FTC の技術ブログ（Lorrie Cranor、当時 Chief Technologist。2016 年 3 月 2 日。頁の表示）
- URL: https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2016/03/time-rethink-mandatory-password-changes
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 表示なし（米政府機関の頁。引用は短く）
- 要旨（本 skill の言葉）: 変更を強制すると、利用者は古いものの小さな変形を選びやすく、強いものを選ばず書き留めやすい。すでに侵害された場合、変更で攻撃者を止められる見込みは小さい。FTC の長年の助言（リスク評価に基づく）の見直しとして書かれた。
- 使いどころ: 規則の変遷の転換点を、規制当局側の技術担当者が書いた例。数字（17% など）は特定の研究の結果の要約で、一般化しない。
- 備考: 区分の根拠・範囲: 著者本人の記述。2 文目は UNC の研究（Zhang・Monrose・Reiter、CCS 2010）の結果を Cranor が要約したもので、その研究の原文は取得できていない（関連の書誌は備考）。関連の書誌（本文は取得していない。引用していない）: Yinqian Zhang・Fabian Monrose・Michael K. Reiter「The security of modern password expiration: an algorithmic framework and empirical analysis」（ACM CCS 2010、pp. 176-186）。https://dl.acm.org/doi/10.1145/1866307.1866328。著者の頁の URL（cs.unc.edu）は 404 で取得できず、本文の逐語は取っていない。この記事が結果を要約する。関連の書誌（本文は取得していない。引用していない）: Komanduri ほか「Of Passwords and People: Measuring the Effect of Password-Composition Policies」（組成規則の効果の研究。NIST 800-63B-4 の参考文献に [Composition] の項があることは確認した）。本文は取得していない。

## 認可と信頼境界

### S036 OWASP「Authorization Cheat Sheet」

> Even when no access control rules are explicitly matched, the application cannot remain neutral when an entity is requesting access to a particular resource.

> Validating permissions correctly on just the majority of requests is insufficient.

> Authorization is distinct from authentication which is the process of verifying an entity's identity.

- 媒体・日付: OWASP Cheat Sheet Series。頁に版番号なし。リポジトリの当該ファイルの最終コミット 2026-10-09
- URL: https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
- URL（原稿）: https://raw.githubusercontent.com/OWASP/CheatSheetSeries/cfd69aabc7e6090867afdc440f838b3a97cca21b/cheatsheets/Authorization_Cheat_Sheet.md
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: CC BY-SA 4.0
- 要旨（本 skill の言葉）: 認可は、要求された操作がその主体に許可されているかを確かめることで、認証（身元の確認）とは別。頁の推奨は、最小権限、既定の拒否（許可の理由を説明できる状態にする）、すべての要求で確かめる（一部の経路だけの検査は不十分）、RBAC より属性・関係に基づく制御を優先、参照 ID が推測されても取れないようにする（水平方向の権限昇格の防止）、静的な資源にも検査を入れる、検査の場所を正す、失敗時は安全側に倒す、記録する、認可の論理の単体・結合テストを書く。頁が挙げる「最小権限の見直し（権限の積み上がり）」は、デプロイ後も定期的に行う。
- 使いどころ: 認証と認可を分ける説明。参照 ID の扱い（水平方向の昇格）を設計の言葉で説明する（攻撃の手順には入らない）。CWE の分類（S026）と並べて読む。

### S037 NIST SP 800-207「Zero Trust Architecture」（2020 年 8 月。位置づけの頁）

> Zero trust assumes there is no implicit trust granted to assets or user accounts based solely on their physical or network location (i.e., local area networks versus the internet) or based on asset ownership (enterprise or personally owned).

> Zero trust is a response to enterprise network trends that include remote users, bring your own device (BYOD), and cloud-based assets that are not located within an enterprise-owned network boundary.

- 媒体・日付: NIST SP 800-207「Zero Trust Architecture」。頁の表示は Date Published: August 2020
- URL: https://csrc.nist.gov/pubs/sp/800/207/final
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: NIST の csrc の頁。再利用条件の表示は確認していない。SP 800-218 と SP 800-63B-4 の PDF にある「米国では著作権の対象外」の記述は、この文書では確認していない。短い引用に留める
- 要旨（本 skill の言葉）: ゼロトラストは、物理・ネットワークの場所や資産の所有者だけを根拠にした暗黙の信頼を与えない。静的な境界でなく、利用者・資産・資源を守る方向へ防御を移す。認証と認可はセッションの前の、別々の機能。語の使われ方の変遷は S039・S040・S038。
- 使いどころ: 「境界の内側は安全」という前提を置かない設計の根拠。ゼロトラストの語の公式の定義

### S038 NIST SP 800-207「Zero Trust Architecture」（2020 年 8 月。PDF の本文と、語の整理）

> ZT is not a single architecture but a set of guiding principles for workflow, system design and operations that can be used to improve the security posture of any classification or sensitivity level

> The work of the Jericho Forum in 2004 publicized the idea of deperimeterization-limiting implicit trust based on network location and the limitations of relying on single, static defenses over a large network segment

> The concepts of deperimeterization evolved and improved into the larger concept of zero trust, which was later coined by John Kindervag

- 媒体・日付: NIST Special Publication 800-207、August 2020（表紙・書誌欄の表示）。著者は Scott Rose・Oliver Borchert・Stu Mitchell・Sean Connelly
- URL: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 「available free of charge」の表示。米政府の出版物（著作権の表示は本文に「copyright in the United States」の語の言及があるが、全文は未確認）。引用は短く
- 要旨（本 skill の言葉）: ゼロトラストは、防御を静的な網の境界から、利用者・資産・資源へ移す一連の考え方の総称。網の位置や資産の所有だけで暗黙の信頼を与えない。単一の製品ではなく、指針の集まりで、技術の全面置き換えだけでは達成できない旅である。Jericho Forum の 2004 年の非境界化の考え方が起点の 1 つで、後に Kindervag が語を作ったと書く。
- 使いどころ: 「ゼロトラスト」の語の使われ方に対する、発行元の整理（単一の製品ではない）の一次。「製品の名前に付いた『ゼロトラスト』」と、考え方の総称としての語を分けて話す根拠。製品の比較・選定は書かない。
- 備考: 区分の根拠・範囲: NIST の文書。語の使われ方の整理を含む。Kindervag の原典〈Forrester〉は取得していない。末尾の未検証の表を見る。

### S039 Jericho Forum「Jericho Forum Commandments」（版 1.2、2007 年 5 月）

> Whereas boundary firewalls may continue to provide basic network protection, individual systems and data will need to be capable of protecting themselves.

- 媒体・日付: Jericho Forum（The Open Group 傘下の団体）の命題集、Version 1.2、May 2007、「Copyright © 2007, Jericho Forum」（PDF の表示）
- URL: https://collaboration.opengroup.org/jericho/commandments_v1.2.pdf
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 「Copyright © 2007, Jericho Forum」。引用は短く
- 要旨（本 skill の言葉）: 境界の防火壁は基本的なネットワークの保護には使えるが、個別の系とデータが自分を守れる必要がある。保護は守る資産に近いほど容易。保護の機構は、全体に行き渡り、単純で、拡大でき、管理しやすくなければならない。
- 使いどころ: ゼロトラストの前史（非境界化）の一次。NIST SP 800-207（S038）が、Jericho Forum の 2004 年の活動を前史として挙げる。2004 年の原典は取得していない。
- 備考: 区分の根拠・範囲: 団体の文書。団体の目的は「de-perimeterized future」への備えと本文が書く。

### S040 Rory Ward・Betsy Beyer「BeyondCorp: A New Approach to Enterprise Security」（;login:、2014）

> However, this security model is problematic because, when that perimeter is breached, an attacker has relatively easy access to a company's privileged intranet.

- 媒体・日付: ;login:, Vol. 39, No. 6 (2014), pp. 6-11（Google Research の頁の表示）。著者は Google
- URL: https://research.google/pubs/beyondcorp-a-new-approach-to-enterprise-security/
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 表示なし（著作権は各権利者。引用は短く）
- 要旨（本 skill の言葉）: ほぼすべての企業が境界の防火壁を使うが、境界が破られると攻撃者は特権の社内網に比較的容易に届く。モバイルとクラウドで境界の維持は難しくなった。Google は特権の社内網の要件を外し、社内の応用をインターネットへ移す別の方法を取る。
- 使いどころ: ゼロトラストの実装の一例（会社の自称）の一次。効果の検証ではなく、規模の大きい会社で、利用者・端末の管理が整っている前提。他の組織に合うかは別の問い。
- 備考: 区分の根拠・範囲: 要旨の原文。Google の自社の取り組みの自称。論文本文は未取得。

## 秘密情報

### S041 OWASP「Secrets Management Cheat Sheet」

> Many organizations have them hardcoded within the source code in plaintext, littered throughout configuration files and configuration management tools.

> You should regularly rotate secrets so that any stolen credentials will only work for a short time.

> When secrets are no longer required or potentially compromised, you must securely revoke them to restrict access.

- 媒体・日付: OWASP Cheat Sheet Series。頁に版番号なし。リポジトリの当該ファイルの最終コミット 2026-11-08
- URL: https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html
- URL（原稿）: https://raw.githubusercontent.com/OWASP/CheatSheetSeries/d6474de095dedba6caf536fdf8926d6ae53f3cfc/cheatsheets/Secrets_Management_Cheat_Sheet.md
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: CC BY-SA 4.0
- 要旨（本 skill の言葉）: 秘密情報（API キー・DB の資格情報・SSH 鍵・証明書など）は、ソースや設定ファイルに平文で置かず、保存・配布・監査・回転を一か所で扱う。頁は、中央化と標準化、アクセス制御、回転の自動化、メモリ上の扱い、監査、作成・回転・失効・期限切れの寿命、停止時の備え（緊急用の手順・バックアップ）、CI/CD での置き場所（ツール内・秘密情報の管理系・CI/CD から触れない）、クラウド・コンテナでの注入に節を分ける。
- 使いどころ: 秘密情報の置き場所・回転・漏れたときの手順（失効）の相談。製品の選定には進まない（頁はクラウド各社のサービスの節を持つが引用しない）。

## 入力と出力

### S042 OWASP Cheat Sheet Series（プロジェクトの位置づけ・ライセンス）

> The OWASP Cheat Sheet Series was created to provide a concise collection of high value information on specific application security topics.

> Attribution-ShareAlike 4.0 International

- 媒体・日付: OWASP Cheat Sheet Series の公式サイト。頁に公開日・版の表示は無い（項目ごとに更新される）。LICENSE.md はリポジトリ OWASP/CheatSheetSeries のもの（最新コミット 2026-11-19）。サイトの索引頁に、ASVS・MASVS・Proactive Controls・Top 10 との対応表（索引）がある
- URL: https://cheatsheetseries.owasp.org/
- URL（原稿）: https://raw.githubusercontent.com/OWASP/CheatSheetSeries/5d79a8ac36f7706fc8b1ac45f84d30ce7be2c7e7/LICENSE.md（ライセンスの引用の原稿。1 つ目の引用は上の URL の頁の本文で照合した）
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: CC BY-SA 4.0（頁末の表示と LICENSE.md の「Attribution-ShareAlike 4.0 International」）。本 skill の本文へ長く写すと継承条件が生じうるので、短い引用と要旨に留める
- 要旨（本 skill の言葉）: 項目ごとに簡潔にまとめた実務の指針の集まりで、各項目は専門家が書く。認証・セッション・パスワードの保存・認可・秘密情報などの項目がある。サイトの索引は、使い方別に一覧を持つ。取得時点の一覧に、Authorization の派生頁（Patterns・Testing・Regression Testing など）、CI CD Security、Abuse Case、Credential Stuffing Prevention、Cookie Theft Mitigation、Dependency Graph SBOM、Business Logic Security などが並ぶ。AI を使った機能の頁（AI Agent Security など）もある。頁の数と名前は時点で変わる。
- 使いどころ: 個別の対策の根拠の指し先。ASVS（要件）と Top 10（認識）との使い分け。cheat sheet の版を示すときの書き方（リポジトリの日付）と、派生頁の存在の確認。
- 備考: 区分の根拠・範囲: 頁の目的の文と、LICENSE.md の表示。個別の cheat sheet の内容は、それぞれの項目に置いた。

### S043 OWASP「Input Validation Cheat Sheet」

> Do not try to recognize every malicious string.

> A schema check after parsing cannot protect a parser that has already exhausted resources.

> a valid account identifier does not mean the caller may access that account.

- 媒体・日付: OWASP Cheat Sheet Series。頁に版番号なし。リポジトリの当該ファイルの最終コミット 2026-11-16
- URL: https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html
- URL（原稿）: https://raw.githubusercontent.com/OWASP/CheatSheetSeries/3db59175ef9bf46e8a31c72a7ca70cf00cd790cc/cheatsheets/Input_Validation_Cheat_Sheet.md
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: CC BY-SA 4.0
- 要旨（本 skill の言葉）: 入力の検証は、構文（型・形式）と意味（その操作で筋が通るか）の両方を、項目ごとの規則（許可リスト）で行う。拒否リストで悪い文字列を言い当てようとしない。構造化データはスキーマで検証し、未知の項目の扱いを明示する。検証は SQL の呼び出しや出力の符号化の代わりにならず（パラメータ化した問い合わせ・文脈に合った出力の符号化は別に行う）、認可も別に確かめる。
- 使いどころ: 「入力を検証すれば安全」という誤解の訂正。検証・出力の符号化・認可を層として分けて説明する。
- 備考: 区分の根拠・範囲: 3 つ目の引用は文の途中から。

## 依存とサプライチェーン

### S044 SLSA「About SLSA」（何を解き、何を解かないか）

> SLSA does not tell you whether the developers writing the source code followed secure coding practices.

> SLSA does not address organizations that intentionally produce malicious software, but it can reduce insider risks within an organization you trust.

- 媒体・日付: slsa.dev v1.2 の「About SLSA」
- URL: https://slsa.dev/spec/v1.2/about
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 頁フッター「© 2026 The Linux Foundation, under the terms of the Community Specification License 1.0」。帰属を付けて短く引用する
- 要旨（本 skill の言葉）: SLSA は、成果物が改ざんされていないこと、ソースへ遡れることの確信を得るための共通語彙と、段階的な改善の手引き。コードの品質（安全な書き方をしたか）、作り手が悪意を持つ場合、依存物の水準（成果物と推移的な依存を合わせた単一の水準はない）は範囲の外、と断る。頁は、過去の大きな攻撃を例に挙げて必要性を述べるが、事例の再現には使わない。
- 使いどころ: SLSA の水準が高くても、コードの脆弱性や悪意ある作り手には効かない、という限界の説明。

### S045 SLSA「Tracks」と「Guiding principles」

> The primary purpose of the build track is to enable verification that the artifact was built as expected.

> Use levels to communicate security state and to encourage a large population to improve its security stance over time.

- 媒体・日付: slsa.dev v1.2（Tracks と Guiding principles の 2 頁）
- URL: https://slsa.dev/spec/v1.2/tracks
- URL: https://slsa.dev/spec/v1.2/principles
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 頁フッター「© 2026 The Linux Foundation, under the terms of the Community Specification License 1.0」。帰属を付けて短く引用する
- 要旨（本 skill の言葉）: ビルドの水準は、成果物の「来歴（provenance、何者が・どの手順で・何を入力にして作ったか）」の信頼性が、存在するだけの段階から、ビルドと来歴と成果物の改ざんへの防御が増す段階へ上がる。消費者は、期待する来歴を決め、実際の来歴と照合する。実装（期待の決め方・来歴の形式・検証の時点・失敗時の扱い）は、エコシステムや組織が決める。設計の原則として、信頼するのはプラットフォームで成果物は検証する、個人でなくコードを信頼する、推測より証明（attestation）を選ぶ、が挙がる。
- 使いどころ: 「署名すれば足りる」ではなく、来歴を検証側で照合する設計として説明する。SSDF（S096・S097）との対応は、頁が「SSDF への取り組みを測る手段」と述べる範囲で触れる。
- 備考: 区分の根拠・範囲: 1 つ目は Tracks の頁、2 つ目は Guiding principles の頁。

### S046 OpenSSF「Concise Guide for Developing More Secure Software」

> Do not push secrets to a repository.

> Tools shouldn't be the only mechanism, but they scale.

> Review before accepting changes.

- 媒体・日付: OpenSSF Best Practices Working Group。頁に「2023-06-14」の版日。取得した頁は、「cooldown」「polyfill.io の 2024 年の件」など後年の語を含むため、改訂を重ねた版と見られる（改訂日は頁に表示なし）
- URL: https://best.openssf.org/Concise-Guide-for-Developing-More-Secure-Software
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 頁に再利用条件の表示なし（フッターは lfprojects.org の規約を指す）。未確認・短い引用に留める
- 要旨（本 skill の言葉）: 開発者向けの短い一覧。特権を持つ開発者の多要素認証、CI での道具の併用（道具だけに頼らない）、依存の選定前の評価（名前の取り違えを避ける）、パッケージ管理、自動テスト（否定的な試験を含む）、依存の脆弱性の監視と更新（公開直後は少し待つ運用に言及）、リポジトリに秘密を置かない、変更の審査、脆弱性の報告方法の明記、リリースの署名、SBOM、メモリ安全な言語の優先、本番のサイトが読み込む資源を自分のドメインに限る、などを並べる。道具やサービスは例示で、推奨ではないと頁が断る。
- 使いどころ: 小さなチームが最初に点検する項目の見取り図。項目ごとの深さは、OWASP の cheat sheet・SLSA・DS-202（S068）で補う。
- 備考: 照合の注記: 空白と、強調記号・リンク記号・商標記号を除いて比較して一致した引用がある（タグや記号が入る位置の空白の差）。

### S047 OpenSSF「Concise Guide for Evaluating Open Source Software」

> Every new dependency increases the attack surface (a subversion of the new dependency, or its transitive dependencies, may subvert the system).

> Unmaintained software is a risk; most software needs continuous maintenance.

- 媒体・日付: OpenSSF Best Practices Working Group。頁に「2025-03-28」の版日
- URL: https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 頁に再利用条件の表示なし（フッターは lfprojects.org の規約を指す）。未確認・短い引用に留める
- 要旨（本 skill の言葉）: 依存を足す前の評価の表。必要性（既存部品で足りないか）、真正性（本物の配布元か・名前の取り違えがないか）、保守と持続性（直近 12 か月の活動・リリースの有無）などを項目に分ける。頁は、道具や数値を例示とし、「優れた OSS でも一部の問いに弱いことがある」と断る。
- 使いどころ: 依存の追加の可否を、機能比較ではなく、攻撃面・真正性・保守の 3 点で整理するとき。

### S048 NTIA「The Minimum Elements For a Software Bill of Materials (SBOM)」（2021 年 7 月 12 日）

> SBOMs alone will not address the multitude of software supply chain and software assurance concerns faced by the ecosystem today.

- 媒体・日付: 米国 NTIA（商務省）の報告書、頁の表示は July 12, 2021（大統領令 14028 に基づく）
- URL: https://www.ntia.doc.gov/report/2021/minimum-elements-software-bill-materials-sbom（PDF は https://www.ntia.doc.gov/files/ntia/publications/sbom_minimum_elements_report.pdf）。いずれも取得時に ntia.gov へ転送された（公開機関の同一ドメインで確認）
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 表示なし（米政府の出版物。引用は短く）
- 要旨（本 skill の言葉）: SBOM は、既知の脆弱性への対応を速く良くするが、供給網・ソフトウェアの保証の問題を単独で解決しない。「万能薬はない」と認める。報告が定める最低限の要素は、現時点で実現可能な範囲で、今後の拡張が起きる、とする。
- 使いどころ: SBOM の限界の、推進側の自己説明の一次（2021 年）。
- 備考: 区分の根拠・範囲: SBOM の最低要素を定める側の、自己の限界の説明。

### S049 CISA「2025 Minimum Elements for a Software Bill of Materials (SBOM)」の公開意見募集の頁（2025 年 8 月 22 日）

> CISA is requesting public comment on its updated guidance on Software Bill of Materials (SBOM) to reflect the current state of maturity in software transparency and supply chain security.

- 媒体・日付: CISA の頁、Publish Date August 22, 2025。意見募集の期間は 2025 年 10 月 3 日まで（頁の表示）
- URL: https://www.cisa.gov/resources-tools/resources/2025-minimum-elements-software-bill-materials-sbom
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 表示なし（米政府の出版物。引用は短く）
- 要旨（本 skill の言葉）: 2021 年の NTIA の最低要素を土台に、ソフトウェアの透明性と供給網の安全の成熟度の現状に合わせた更新の草案への意見を募った。機械で処理できる形式の必要が増した、と書く。
- 使いどころ: SBOM の要素が時点で変わる文書である根拠。skill は版を固定せず、出典の版と日付を示す。
- 備考: 区分の根拠・範囲: 頁の記述。この更新の草案が確定したかは未確認。末尾の未検証の表を見る。

### S050 米国 Cyber Safety Review Board「Review of the December 2021 Log4j Event」（2022 年 7 月 11 日）

> The Board spoke with representative groups for organizations currently using SBOMs in their environments, and none reported having leveraged them to identify vulnerable deployments of Log4j. As designed today, SBOMs are limited, for example by variances in field descriptions and a lack of version information about catalogued components

- 媒体・日付: Cyber Safety Review Board の報告書、Publication: July 11, 2022（表紙の表示）
- URL: https://www.cisa.gov/sites/default/files/publications/CSRB-Report-on-Log4-July-11-2022_508.pdf
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 表示なし（米政府の出版物。引用は短く）
- 要旨（本 skill の言葉）: 調査に応じた SBOM の利用組織は、Log4j の脆弱な展開を特定するのに SBOM を使えなかったと報告した。現状の SBOM は、項目の記述のばらつきや、部品の版の情報の欠如で限界があり、取り込み側の自動化も難しい。報告書は別の箇所で、正確な資産とアプリケーションの一覧の維持を勧告する（勧告 6）。
- 使いどころ: SBOM の実務の限界の、公的な報告書の一次。個別の脆弱性の中身（攻撃・悪用の方法）は引用しない。設計の教訓は「依存の把握に、形式だけでなく運用・資産の一覧が要る」。
- 備考: 区分の根拠・範囲: 公的な報告書の記述。ヒアリングした組織の自己申告に基づく。

### S051 Xia ほか「An Empirical Study on Software Bill of Materials: Where We Stand and the Road Ahead」（arXiv 2301.05362、2023 年）

> Although there are significant efforts from academia and industry to facilitate SBOM development, it is still unclear how practitioners perceive SBOMs and what are the challenges of adopting SBOMs in practice.

- 媒体・日付: arXiv のプレプリント（著者は CSIRO's Data61 など）。掲載された会議の有無・年は、取得した PDF から確認していない（ICSE 2023 とされるが未確認）
- URL: https://arxiv.org/pdf/2301.05362
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 表示なし（arXiv の頁のライセンス表示は未確認）。引用は短く
- 要旨（本 skill の言葉）: 学界・産業界の取り組みは多いが、実務者が SBOM をどう見ていて、採用の課題が何かは不明だった。17 人の聞き取りと 65 人の調査（15 か国）の混合の方法で、26 の見解を 3 つの話題に整理した。
- 使いどころ: SBOM の課題が、実務者の聞き取りに基づく研究の主題になっている（実務で課題が残る）ことの根拠。26 の見解の中身は読み込んでいない。
- 備考: 区分の根拠・範囲: 要旨の原文。研究の結果は取得したが、ここでは要旨のみ使う。

## ログと検知

### S052 OWASP Top 10:2025 の「安全でない設計」（A06）と「ログと警報」（A09）

> Note that there is a difference between insecure design and insecure implementation.

> Insecure design is a broad category representing different weaknesses, expressed as "missing or ineffective control design."

> Great logging with no alerting is of minimal value in identifying security incidents.

- 媒体・日付: OWASP Top 10:2025 の A06（Insecure Design）の頁と序文（A09 の説明）
- URL: https://top10.owasp.org/2025/A06_2025-Insecure_Design/
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 頁末に「This work is licensed under a Creative Commons Attribution 3.0 Unported License」（Top 10 の版の頁）。短い引用に留める
- 要旨（本 skill の言葉）: 設計の欠陥と実装の欠陥は、原因・起きる時期・直し方が違うので、分けて扱う。安全でない設計は「欠けている、または効かない制御の設計」を指し、他の項目の原因のすべてではない。A06 の頁は、脅威モデリング・安全な設計のパターン・参照アーキテクチャの使用の増加を求める。ログを取るだけで警報が無ければ、事故の発見への価値は小さい（A09 の名称が「monitoring」から「alerting」に変わった理由）。
- 使いどころ: 設計と実装の区別。ログと警報の分担
- 備考: 区分の根拠・範囲: 1・2 つ目は A06 の頁。3 つ目は序文 https://top10.owasp.org/2025/0x00_2025-Introduction/ の A09 の説明。

## 脆弱性の扱いと開示

### S053 CERT/CC・SEI「The CERT Guide to Coordinated Vulnerability Disclosure」（CMU/SEI-2017-SR-022、2017 年 8 月）

> The CERT Coordination Center has been coordinating the disclosure of software vulnerabilities since its inception in 1988.

> As with so many questions that arise in the CVD process, there is no single right answer.

- 媒体・日付: SEI の特別報告書 CMU/SEI-2017-SR-022、August 2017（表紙）。著者は Householder・Wassermann・Manion・King
- URL: https://www.sei.cmu.edu/documents/1945/2017_003_001_503340.pdf（解説の頁は https://www.sei.cmu.edu/library/the-cert-guide-to-coordinated-vulnerability-disclosure/）
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 「Copyright 2017 Carnegie Mellon University. All Rights Reserved」。「Distribution Statement A: Approved for Public Release」。引用は短く
- 要旨（本 skill の言葉）: CERT/CC は 1988 年の発足以来、脆弱性の報告の開示を調整してきた。協調的な開示は、発見者から情報を集め、関係者間で共有を調整し、存在と緩和策を公に伝える工程。公開の時期（45 日か 90 日か 217 日か）には単一の正解がなく、会議の日程など多くの要因が絡む。完全な開示（脆弱性の全情報を公開する型）の利益と、その型の選び方も整理する。
- 使いどころ: 制度の経緯の一次（CERT 側）。個別の脆弱性は扱わない。Morris のワームから CERT/CC が生まれた因果は、取得した資料では確認できていない（末尾の未検証の表を見る）。
- 備考: 区分の根拠・範囲: CERT/CC 自身の自己説明。

### S054 Bruce Schneier「Full Disclosure」（Crypto-Gram、2001 年 11 月 15 日）

> Microsoft is leading the charge to restrict the free flow of computer security vulnerabilities.

> This is the classic "bug secrecy vs. full disclosure" debate.

- 媒体・日付: Crypto-Gram 2001 年 11 月 15 日号（頁の表示。当時 Counterpane Internet Security の創業者・CTO）
- URL: https://www.schneier.com/crypto-gram/archives/2001/1115.html
- 取得日: 2026-11-21
- 検証区分: C
- ライセンス: 「Copyright (c) 2001 by Counterpane Internet Security, Inc」の表示。引用は短く
- 要旨（本 skill の言葉）: 公開（full disclosure）と非公開（bug secrecy）の議論は古典的な論争で、Microsoft の担当者は、詳細を公開しないよう求める連合の構想を示した。著者は「Window of Exposure」の語で、脆弱性が見つかり、広まり、道具が書かれ、修正が出るまでの危険の推移を整理する。
- 使いどころ: 2001 年の時点の議論の対立軸の一次（論者の側）。協調的な開示の制度が、公開と非公開の中間として定着した背景。個別の脆弱性・道具の詳細は引用しない。
- 備考: 区分の根拠・範囲: 論争の当事者である論者の主張。Microsoft の Culp が書いた、公開を「情報の無秩序」と呼ぶ文章への応答。

### S055 Chris Evans・Ben Hawkes ほか「Feedback and data-driven updates to Google's disclosure policy」（Project Zero ブログ、2015 年 2 月 13 日）

> Disclosure deadlines have long been an industry standard practice.

> Deadlines appear to be working to improve patch times and end user security -- especially when enforced consistently.

- 媒体・日付: Project Zero のブログ、2015-Feb-13（頁の表示）。Google の組織の自己説明
- URL: https://projectzero.google/2015/02/feedback-and-data-driven-updates-to.html（元の URL は googleprojectzero.blogspot.com。取得時に転送された）
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 表示なし（著作権は各権利者。引用は短く）
- 要旨（本 skill の言葉）: 期限つきの開示は業界の標準的な慣行で、修正を早めて利用者の安全を高める。CERT の 45 日の方針などに言及し、Project Zero は 90 日の期限を適用し、Google 全体にも広げる。攻撃側の脆弱性研究への投資が守る側より大きいため、影響の大きい対象の脆弱性は先進的な攻撃者に既に知られていることが多い、とも書く。
- 使いどころ: 開示の期限の議論の、実践する側の一次。現行の方針の頁には、期限を 90 日から段階的に短くする計画（2027 年・2028 年の日付）が書かれている（時点情報。skill に数値を出さない）。
- 備考: 区分の根拠・範囲: Google の自己説明。データは同組織の自称で、第三者の検証ではない。

### S056 RFC 9116「A File Format to Aid in Security Vulnerability Disclosure」（2022 年 4 月）

> When security vulnerabilities are discovered by researchers, proper reporting channels are often lacking.

- 媒体・日付: IETF の RFC 9116（Category: Informational、April 2022。著者 E. Foudil・Y. Shafranovich）
- URL: https://www.rfc-editor.org/rfc/rfc9116.txt（情報頁は https://www.rfc-editor.org/info/rfc9116/）
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 「Copyright (c) 2022 IETF Trust and the persons identified as the document authors」の表示。引用は短く
- 要旨（本 skill の言葉）: 研究者が脆弱性を見つけても、報告の窓口が分からないことが多い。そこで、組織が脆弱性の開示の実践を記述する機械で読める形式（security.txt）を定める。標準化過程の文書ではなく、情報として公開されたもの。
- 使いどころ: 開示の制度が、報告の窓口の記述という運用の形に落ちた例。形式の詳細（フィールド・置き場所）は RFC の本文で確かめる。

### S057 IPA「情報セキュリティ早期警戒パートナーシップ」（英語頁）

> In July 2004, the notice from the Ministry of Economy, Trade and Industry on "Standards for Handling Software Vulnerability Information and Others" was issued to ensure appropriate handling of vulnerability-related information when a vulnerability is reported

- 媒体・日付: IPA（情報処理推進機構）の英語頁（「© 2026 Innovation Platform Agency, Japan (IPA)」の表示）。2004 年 7 月の経済産業省の告示を根拠に、ガイドラインで関係者の推奨行動を定めたと書く
- URL: https://www.ipa.go.jp/en/security/vulnerabilities/partnership.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 「© 2026 IPA」の表示。引用は短く
- 要旨（本 skill の言葉）: 国内では、2004 年 7 月の経産省の告示（ソフトウェアの脆弱性情報の取扱いの基準）を受けて、早期警戒パートナーシップのガイドラインが作られた。IPA が届出の受付機関、JPCERT/CC が調整機関を務める。
- 使いどころ: 国内の協調的な開示の制度の起点の一次。国内の資料は薄い（この項目は IPA の英語頁 1 件のみ）。届出の手順・要件は S058・S059。
- 備考: 区分の根拠・範囲: 国内の制度の自己説明。英語頁。日本語の正規の頁は未取得。

### S058 IPA「脆弱性関連情報の届出受付」

> 脆弱性関連情報の適切な流通および対策の促進を図り、インターネット利用者に対する被害を予防することを目的として、2004年7月8日から 経済産業省の告示 に基づき策定された 情報セキュリティ早期警戒パートナーシップガイドライン(PDF:1.2MB) に則り運用しています。

- 媒体・日付: IPA の頁。頁の更新日の表示は確認していない。頁は、ガイドライン「2026 年版」と、告示（平成 29 年経済産業省告示第 19 号、最終改正令和 6 年経済産業省告示第 93 号）を案内する
- URL: https://www.ipa.go.jp/security/todokede/vuln/uketsuke.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: IPA のサイト利用規約（siteinfo.html）に、記事・図表は著作権法で保護され特に記載がない限り IPA に帰属、引用や転載では出所を明示、とある。個別の頁の使用条件は読んでいない。短い引用か要旨に留める
- 要旨（本 skill の言葉）: 国内の脆弱性の届出の頁。IPA が受付に関わり、JPCERT/CC が調整に関わる（経済産業省の告示による指定）。届出の種類で調整の分担が異なる。制度の頁で確かめる。対象は、国内で使われるソフトウェア製品の脆弱性と、主に国内からのアクセスが想定されるウェブサイトの固有のシステムの脆弱性。IPA が行わないこととして、発見者への秘匿の強制、製品開発者への対策の強制、運営者への修正の強制を挙げ、期待どおりの対応は保証できないと断る。届出はウェブフォームか電子メール。発見者と運営者の調整が難航したときも IPA に連絡できる。
- 使いどころ: 自分の系の脆弱性を外部から知らされたとき、あるいは他社の製品の脆弱性に気づいたときの国内の経路の説明。個別の脆弱性の内容には触れない。
- 備考: 区分の根拠・範囲: 引用の「経済産業省の告示」「情報セキュリティ早期警戒パートナーシップガイドライン」は原文でリンク。リンク記号を除き、空白の入り方を原文に合わせた。

### S059 JPCERT/CC「脆弱性情報ハンドリングとは？」

> 脆弱性情報ハンドリングとは、公表前の脆弱性関連情報を必要に応じて公開することで、脆弱性情報の悪用、または障害を引き起こす危険性を最小限に食い止めるためのプロセスです。

- 媒体・日付: JPCERT/CC の頁。「最終更新: 2026-10-01」。同じ頁にガイドラインの版の一覧（2014 年版から 2026 年版）。2026 年版の公開日は 2026-10-01
- URL: https://www.jpcert.or.jp/vh/
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 頁に表示なし。未確認・短い引用に留める
- 要旨（本 skill の言葉）: 公表前の脆弱性関連情報を、製品開発者に連絡して対応（パッチ・回避策）を依頼し、海外の関係機関とも連携して公表日を調整する枠組み。JPCERT/CC の頁。届出の受付は IPA、周知は脆弱性対策情報ポータル JVN。届出の種類で調整の分担が異なる。制度の頁で確かめる。協調的な開示（coordinated disclosure）の国内の制度の一次。個別の脆弱性は書かない。
- 使いどころ: 脆弱性の受け付け窓口（セキュリティポリシーの連絡先）を置くとき、国内の調整の枠組みへ案内する。

## プライバシーの設計面

### S060 NIST「Privacy Framework: A Tool for Improving Privacy through Enterprise Risk Management, Version 1.0」

> to enable better privacy engineering practices that support privacy by design concepts and help organizations protect individuals' privacy

> Deriving benefits from data while simultaneously managing risks to individuals' privacy is not well-suited to one-size-fits-all solutions.

- 媒体・日付: NIST CSWP（Cybersecurity White Paper）、2020-01-16（Version 1.0）。DOI: 10.6028/NIST.CSWP.01162020
- URL: https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.01162020.pdf
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 文書に「法的な効力を持たず、公衆を拘束しない」旨の表示。再利用条件は未確認・短い引用に留める
- 要旨（本 skill の言葉）: 自発的に使う、リスクと成果に基づく枠組み。プライバシーのリスクを、システム・製品・サービスの運用におけるデータの処理（収集から廃棄までの全期間）の結果として、個人が経験しうる問題（尊厳に関わる影響から、差別・経済的損失・身体的な害まで）として考える。サイバーセキュリティのリスクの管理だけではプライバシーのリスクを管理するのに十分でなく、サイバーセキュリティの事案と無関係に生じるプライバシーのリスクがある、と述べる。構造は、コア（機能・分類・小分類）・プロファイル・実装の水準の 3 つ。法令の判断ではなく、設計と組織の管理の言葉で書かれている。
- 使いどころ: 収集の最小化・保存・アクセス制御・削除を、セキュリティの侵害とは別の軸のリスクとして整理する。法令（個人情報保護法・GDPR など）への適合の判断はしない。
- 備考: 区分の根拠・範囲: 1 つ目の引用は文の途中から。原文の ’ は直線形に揃えた。空白と、強調記号・リンク記号・商標記号を除いて比較して一致した引用がある（タグや記号が入る位置の空白の差）。

### S061 NIST Privacy Framework の頁（1.1 の策定状況）

> The NIST Privacy Framework (PF) is a voluntary tool developed in collaboration with stakeholders intended to help organizations identify and manage privacy risk to build innovative products and services while protecting individuals' privacy.

- 媒体・日付: nist.gov の頁。取得時点で「PF 1.1 IPD（Initial Public Draft）」の案内が前面にあり、1.0 のコアを 1.1 のコアへ対応づける表（Mapping）、1.1 の新しいカテゴリー・小分類の情報、Data Governance and Management Profile へのリンクがある。1.1 の最終版の公開は確認していない
- URL: https://www.nist.gov/privacy-framework
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 未確認・短い引用に留める
- 要旨（本 skill の言葉）: 版は 1.0（2020）が確定版で、1.1 は草案が公開されている。
- 使いどころ: 版の断り書き。「最新版」を記憶で決めない。
- 備考: 区分の根拠・範囲: 時点の情報。1.1 は草案段階。

## 国内の資料

### S062 IPA「情報セキュリティ 10 大脅威」

> 「情報セキュリティ10大脅威」は、前年に発生した社会的に影響が大きかったと考えられる情報セキュリティにおける事案から、IPAが脅威候補を選出し、情報セキュリティ分野の研究者、企業の実務担当者などのメンバーからなる「10大脅威選考会」が脅威候補に対して審議・投票を行い、決定したものです。

- 媒体・日付: IPA の頁。取得時点で 2014 年版から 2026 年版までの一覧がある（個別年の頁は取得していない）
- URL: https://www.ipa.go.jp/security/10threats/index.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: IPA のサイト利用規約（siteinfo.html）に、記事・図表は著作権法で保護され特に記載がない限り IPA に帰属、引用や転載では出所を明示、とある。個別の頁の使用条件は読んでいない。短い引用か要旨に留める
- 要旨（本 skill の言葉）: 前年に社会的に影響が大きかった事案から、専門家・実務者の選考会が投票で決めた一覧。つまり、設計の優先順位を決める分析ではなく、事案の影響の大きさに基づく普及啓発の資料（頁の性格づけによる）。順位や内容は年ごとに変わるので、台帳には順位を写さない。
- 使いどころ: 国内の経営層・非技術者への説明の入口として、位置づけを断って紹介する。系の設計判断の根拠にはしない（本 skill の整理）。

### S063 IPA「企業組織向けサイバーセキュリティ 相談・届出窓口一覧」

> IPAでは企業組織向けに、セキュリティインシデントに関する相談や、ウイルス・不正アクセス・脆弱性情報に関する届出を受け付ける窓口を設けております。

> ご相談いただく事案の調査や解析の実施は対応しておりません。

- 媒体・日付: IPA の頁。「公開日：2025年4月1日」「最終更新日：2025年4月15日」
- URL: https://www.ipa.go.jp/security/support/soudan.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: IPA のサイト利用規約（siteinfo.html）に、記事・図表は著作権法で保護され特に記載がない限り IPA に帰属、引用や転載では出所を明示、とある。個別の頁の使用条件は読んでいない。短い引用か要旨に留める
- 要旨（本 skill の言葉）: 組織向けの窓口は、初動の助言・専門業者一覧の紹介・他の相談先の紹介を受け付け、事案の調査や解析は行わない。国家支援型を含む標的型攻撃には専門チームが支援する。連絡の方法はメールで、連絡先に迷ったら「企業組織向けサイバーセキュリティ相談窓口」に連絡する。ウイルス・不正アクセス（ランサムウェアの感染事象・侵入の形跡など）は IPA への届出を依頼している（1990 年・1996 年の通商産業省告示が根拠）。脆弱性関連情報は別の受付（S058）。法的解釈・契約・端末やログの個別調査は承れない。頁は、インシデント対応の基本をまとめた「中小企業のためのセキュリティインシデント対応の手引き」を案内する（本文は未読）。メールアドレス・電話番号は台帳に写さない（頁で確かめる）。
- 使いどころ: 組織が侵害を疑うときの相談先の案内（相談の局面の分け方のうち、疑いや事故の最中）。skill は、窓口の存在と役割を示し、調査・法的判断は引き受けないと断る。

### S064 IPA「情報セキュリティ安心相談窓口」（個人向け）

> 「情報セキュリティ安心相談窓口」は、IPAが国民に向けて開設している、一般的な情報セキュリティ（主にウイルスや不正アクセス）に関する技術的な相談に対してアドバイスを提供する窓口です。

- 媒体・日付: IPA の頁。「最終更新日：2026年10月28日」
- URL: https://www.ipa.go.jp/security/anshin/about.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: IPA のサイト利用規約（siteinfo.html）に、記事・図表は著作権法で保護され特に記載がない限り IPA に帰属、引用や転載では出所を明示、とある。個別の頁の使用条件は読んでいない。短い引用か要旨に留める
- 要旨（本 skill の言葉）: 個人向け。頁の冒頭に「企業/組織の方は別のページから」と案内があり、組織は S063 の窓口。電話・メール・FAX・郵送・チャットボット（選択式）がある。承れない相談として、法的解釈、個別の依頼に基づく端末やログの調査、特定の製品やサービスの良否、他組織への連絡の仲介、犯罪者の検挙・捜査の要望などを挙げる。相談件数の推移の表（2017 年から 2025 年）が載るが、窓口の利用の件数で、攻撃の件数ではないので使わない。
- 使いどころ: 個人利用者に案内する窓口と、組織向けの窓口（S063）の取り違えを防ぐ。

### S065 JPCERT/CC「インシデントの報告のお願い」（報告の窓口と、対応できない依頼）

> JPCERT/CCは、技術的な立場からインシデントによる被害拡大や再発防止のために支援活動を行う組織です。

- 媒体・日付: JPCERT/CC の頁。頁の更新日の表示は確認していない
- URL: https://www.jpcert.or.jp/form/
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 頁に表示なし。未確認・短い引用に留める
- 要旨（本 skill の言葉）: インシデントの報告は Web フォームか電子メール（原則として電話は受け付けない）。報告情報は、報告者が特定されない形で四半期レポートや注意喚起に使われる。対応できない依頼として、捜査・取り締まり、法的な対応の代行（違法・有害情報や名誉毀損・プライバシー侵害情報の削除依頼）、個別の製品の利用方法のコンサルティングを挙げる。JPCERT/CC の活動は、個人や組織の利益の保証を目的にしない、と断る。
- 使いどころ: 組織が被害の報告・相談先を選ぶとき（IPA の窓口 S063 との役割の違い）。skill は報告の判断・法的対応を代行しない。

### S066 国家サイバー統括室（NCO）のトップ頁と、NISC からの移行

> （書誌のみ。本文は引用しない）

- 媒体・日付: cyber.go.jp のトップ頁。「国家サイバー統括室（NCO）」の表記。頁に「当サイトのURL変更について」の案内があり、旧 URL（nisc.go.jp の下層）への取得は、トップ頁へリダイレクトされた。頁に「国家サイバー統括室（NCO）、NISCの名を騙り、金銭を要求する不審な電話が確認されています」という注意喚起がある
- URL: https://www.cyber.go.jp/
- 取得日: 2026-11-21
- 検証区分: R
- ライセンス: 未確認・短い引用に留める
- 要旨（本 skill の言葉）: 内閣サイバーセキュリティセンター（NISC）は、取得時点で「国家サイバー統括室（NCO）」の名で案内されている（組織の再編の詳細と時期は、確かめていない）。サイトに、関係機関の相談窓口・各府省庁のサイバーセキュリティ関係情報への案内がある。政府統一基準群など、NISC の文書の現行の所在は取得できなかった（末尾の U）。NCO を騙る不審な連絡への注意喚起が出ている。
- 使いどころ: 国内の政策・基準の入口として組織名が変わっている点の注意。政府の統一基準の中身は、確かめていないので使わない。
- 備考: 区分の根拠・範囲: 頁の表示を要旨にした。引用は組織名の表記のみで、本文を引用しない。

### S067 デジタル庁 DS-200「政府情報システムにおけるセキュリティ・バイ・デザインガイドライン」

> 事後的ではなく、予防的にセキュリティ対策を組み込むこと

> 初期設定値においてセキュリティが担保された状態を実現すること

> 利便性を損なわないように、セキュリティを確保すること

- 媒体・日付: デジタル庁。2024-01-31 の第 2 版（初版は 2022-06-30）。位置づけは Informative（参考とするドキュメント）。第 2 版の改定内容に、CISA のセキュア・バイ・デザイン・セキュア・バイ・デフォルトの原則の反映が含まれる
- URL: https://www.digital.go.jp/resources/standard_guidelines
- URL（原稿）: https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/e2a06143-ed29-4f1d-9c31-0f06fca67afc/7e3e30b9/20240131_resources_standard_guidelines_guidelines_01.pdf
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: コピーライトポリシー（最終更新 2026-05-12）に「特記されていない限りデジタル庁に帰属し、権利表記の記載がない限り「公共データ利用規約（第1.0版）」（PDL1.0）が適用」。出典の記載が条件、編集・加工した場合はその旨も記載する
- 要旨（本 skill の言葉）: 政府情報システムの企画から運用まで一貫してセキュリティ対策を実施するための手引き。基本方針は 6 つ（事後でなく予防的に・全ライフサイクルを保護・初期設定で安全・システム特性に応じて過不足なく・リスクの評価と管理・利便性を損なわない）。システム仕様だけでなくサービス仕様や人的ミスに起因する事故も考える。工程は、リスク分析・要件定義・セキュア調達・設計・実装・テスト・運用準備・運用。第 2 版は、システム利用者や開発者・運用者の「人に起因する脅威」を追記した。政府情報システム向けで、民間にそのまま適用する基準ではない。
- 使いどころ: 国内で、設計段階からのセキュリティ（セキュリティ・バイ・デザイン）を説明するときの公的な一次。CISA の Secure by Design（S010・S011・S012）との対応の根拠。
- 備考: 区分の根拠・範囲: 3 つの引用は 2.3「セキュリティ・バイ・デザインの基本方針」の 6 項目のうちの 3 つの見出し。PDF の改行を除いて照合。

### S068 デジタル庁 DS-202「CI/CD パイプラインにおけるセキュリティの留意点に関する技術レポート」

> 攻撃者はその価値に着目し標的にし始めている。

> シークレットを異なるフェーズ間で再利用することは、最小権限の原則から避けるべきである。

> 成果物を要保全情報として電子署名の付与及び検証を行い、全フェーズの完全性と真正性、それらの追跡性を確保する。

- 媒体・日付: デジタル庁。2024-03-29 初版。位置づけは Informative。別添として「CI/CD パイプラインによる Infrastructure as Code 実装例」（2025-06-30 掲載）
- URL: https://www.digital.go.jp/resources/standard_guidelines
- URL（原稿）: https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/e2a06143-ed29-4f1d-9c31-0f06fca67afc/33f31336/20240329_resources_standard_guidelines_guideline_01.pdf
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: コピーライトポリシー（最終更新 2026-05-12）に「特記されていない限りデジタル庁に帰属し、権利表記の記載がない限り「公共データ利用規約（第1.0版）」（PDL1.0）が適用」。出典の記載が条件、編集・加工した場合はその旨も記載する
- 要旨（本 skill の言葉）: CI/CD パイプライン自体が攻撃の標的になるという前提で、ローカル作業・ソース管理・ビルド・デリバリの各フェーズの保護を整理する。秘密情報の漏洩対策（リポジトリに記録させない・コミットしてしまったら閲覧できる全員が使えるので早急に回転する）、成果物の電子署名と検証、ビルドの実行範囲の制限、依存物の安全性、権限の分掌（パイプラインの管理者と利用者を分ける）、最小権限、ログの取得。短命のアクセストークンを都度発行する構成で、秘密情報の管理の負担と、漏洩したときの影響範囲を下げられる、と述べる。
- 使いどころ: 「CI/CD の権限と秘密情報」の相談に、国内の公的資料の一次を添える。SLSA（S101・S044・S045）・OWASP の秘密情報（S041）と読み合わせる。
- 備考: 区分の根拠・範囲: PDF の改行を除いて照合。

### S069 デジタル庁 DS-203「政府情報システムにおけるサイバーセキュリティに係るサプライチェーン・リスクの課題整理及びその対策のグッドプラクティス集」

> 政府情報システムに関連する主要なサプライチェーン・リスクとそのセキュリティ対策を説明する。

- 媒体・日付: デジタル庁。PDF の改定履歴は「2025年6月19日 初版決定」。一覧頁は「策定日または最終改定日：2025年6月30日」と表示（2 つの日付が食い違う。原因は未確認）。位置づけは Informative
- URL: https://www.digital.go.jp/resources/standard_guidelines
- URL（原稿）: https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/e2a06143-ed29-4f1d-9c31-0f06fca67afc/a547f9a6/20250630_resources_standard_guidelines_technical_report_01.pdf
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: コピーライトポリシー（最終更新 2026-05-12）に「特記されていない限りデジタル庁に帰属し、権利表記の記載がない限り「公共データ利用規約（第1.0版）」（PDL1.0）が適用」。出典の記載が条件、編集・加工した場合はその旨も記載する
- 要旨（本 skill の言葉）: 政府情報システムの関係者が、サプライチェーンに起因するインシデントのリスクを下げるための、主要なリスクと対策の説明。自組織だけでなく、サプライチェーン全体のリスクを考えるための課題整理とグッドプラクティスを示す（一覧頁の説明）。本文の対策の中身は読んでいない。
- 使いどころ: サプライチェーンの相談で、国内の公的な枠組みがあることの案内。内容を使う前に本文を精読する。
- 備考: 区分の根拠・範囲: 概要の 1 文。本文は未精読。

### S070 デジタル庁 標準ガイドライン群のセキュリティ関連の一覧（DS-201・DS-221・DS-222 ほか）

> 予防的なセキュリティ対策だけでなく、発見的な対策の強化が求められている。

- 媒体・日付: デジタル庁の標準ガイドライン群の一覧頁。DS-201（リスク分析、2023-03-31）、DS-210（ゼロトラストアーキテクチャ適用方針、2022-06-30）、DS-212（ゼロトラストにおける属性ベースアクセス制御、2023-03-31）、DS-220（サイバーセキュリティフレームワーク導入、2023-03-31）、DS-221（脆弱性診断導入ガイドライン、2024-02-06）、DS-222（脅威の検知・対応のためのログ取得・分析導入ガイドブック、2026-03-31）の策定日・概要が載る。位置づけはいずれも Informative
- URL: https://www.digital.go.jp/resources/standard_guidelines
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: コピーライトポリシー（最終更新 2026-05-12）に「特記されていない限りデジタル庁に帰属し、権利表記の記載がない限り「公共データ利用規約（第1.0版）」（PDL1.0）が適用」。出典の記載が条件、編集・加工した場合はその旨も記載する
- 要旨（本 skill の言葉）: DS-201 は、ベースラインと事業被害を組み合わせたリスク分析の手順（DS-200 の事例）。DS-221 は、脆弱性診断を選び調達するための基準と指針。DS-222 は、サイバー攻撃と内部不正の検知と対応のためのログ分析のポイント。DS-210・DS-212 は、境界型だけでは防ぎきれないという前提でのゼロトラストの適用方針と、属性ベースのアクセス制御。民間の相談者が自分の系にそのまま当てはめる基準ではない（政府情報システム向け）。
- 使いどころ: 国内の公的な文書の目次として、診断の調達・ログの分析・ゼロトラストの個別の相談に案内する。本文は取得して確かめてから使う。
- 備考: 区分の根拠・範囲: 引用は DS-222 の概要。一覧頁の記述であり、各 PDF の本文は未取得。

## 責任と誘因（経済の観点）

### S071 Ross Anderson『Security Engineering』第 3 版 第 8 章「Economics」

> if the people who guard a system are not the people who suffer when it fails, then you can expect trouble.

- 媒体・日付: 『Security Engineering - A Guide to Building Dependable Distributed Systems』Third Edition、Wiley、2020（巻頭の表示 Copyright © 2020 by Ross Anderson, Published by John Wiley & Sons。ISBN 978-1-119-64278-7。序文の末は 2020 年 11 月、ケンブリッジ）。著者の頁の章 PDF。第 8 章
- URL: https://www.cl.cam.ac.uk/archive/rja14/Papers/SEv3-ch08.pdf
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 巻頭に「No part of this publication may be reproduced ... without ... permission」の類の留保。短い引用に留める
- 要旨（本 skill の言葉）: 2000 年ごろから、セキュリティの失敗は、技術の誤りよりも、動機の誤りによることが多いと分かってきた。守る人が失敗の損害を負わないなら問題が起きる。仕組みが責任を移すために設計されることもあり、さらに悪くなる。
- 使いどころ: 誰が費用を負い、誰が損害を負うかを、設計の論点にする

### S072 Ross Anderson「Why Information Security is Hard - An Economic Perspective」（2001 年ごろ）

> In this note, I put forward a contrary view: information insecurity is at least as much due to perverse incentives.

> In general, where the party who is in a position to protect a system is not the party who would suffer the results of security failure, then problems may be expected.

- 媒体・日付: Ross Anderson（ケンブリッジ大学計算機研究所）。PDF の作成日は 2001 年 10 月（PDF のメタデータの表示）。文中の参照に 2001 年の文書がある。発表の場（会議名）は頁から確かめていない（末尾の未検証の表を見る）
- URL: https://www.cl.cam.ac.uk/archive/rja14/Papers/econ.pdf
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 未確認。短い引用に留める
- 要旨（本 skill の言葉）: 情報セキュリティの不全は、技術の不足と同じ程度に、歪んだ動機で説明できる。外部性・情報の非対称・モラルハザード・逆選択・責任の転嫁・共有地の悲劇などの経済の言葉で説明できる例を並べる。例の技術（Windows 2000 や当時の評価制度）は 2001 年の時点のもの。
- 使いどころ: 動機と責任の分布を見る論点。「誰が費用を払い、誰がリスクを負うか」を問う根拠の一次。Secure by Design（S010）の「責任を作り手へ」の背景として使う。事例は時点情報として扱う。

## 人物の言葉の照合（Schneier ほか）

### S075 Schneier「The Process of Security」（Information Security、2000 年 4 月）と Crypto-Gram 2000 年 5 月 15 日号

> Security is a process, not a product.

> Products provide some protection, but the only way to effectively do business in an insecure world is to put processes in place that recognize the inherent insecurity in the products.

- 媒体・日付: Information Security 誌のコラム、2000 年 4 月（頁の表示）。schneier.com の essays の頁。同じ文は Crypto-Gram 2000 年 5 月 15 日号（頁の表示。当時 Counterpane Internet Security の創業者・CTO）にもある。この文の前後は「欠陥は避けられない」「次の製品・更新・パッチに期待する人が多い」という文脈
- URL: https://www.schneier.com/essays/archives/2000/04/the_process_of_secur.html
- URL: https://www.schneier.com/crypto-gram/archives/2000/0515.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 未確認。短い引用に留める。頁のコメント欄に Creative Commons の記述がある頁もあるが、コメントの利用許諾で、本文ではない
- 要旨（本 skill の言葉）: 製品が一定の保護を与えるとしても、安全でない世界で事業を行うには、製品の不完全さを前提にした手順を置く。次の製品・更新・パッチなら今度は安全だ、という期待に頼らない。
- 使いどころ: 「安全は製品でなく過程」の出どころ（孫引きの名言を、本人の文で置き換える）。孫引きで流通する言葉の一次確認。本 skill で使うなら、前後の文脈（製品への盲信への批判）を添える。ここから「製品を買うことは無意味」と読めるわけではない。
- 備考: 区分の根拠・範囲: この文言が、2000 年 4 月のコラムと 2000 年 5 月 15 日号に載っていることを確かめた。これが初出かどうかは確かめていない。Crypto-Gram の 4 月号では同じ語を確認できなかった。

### S076 Bruce Schneier Crypto-Gram 1998 年 10 月 15 日「Memo to the Amateur Cipher Designer」

> Anyone, from the most clueless amateur to the best cryptographer, can create an algorithm that he himself can't break.

> What is hard is creating an algorithm that no one else can break, even after years of analysis.

- 媒体・日付: Crypto-Gram、1998 年 10 月 15 日号（頁の表示。Copyright (c) 1998 by Bruce Schneier）
- URL: https://www.schneier.com/crypto-gram/archives/1998/1015.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 号の冒頭に「Copyright (c) 1998 by Bruce Schneier」。利用許諾の詳細は未確認。短い引用に留める
- 要旨（本 skill の言葉）: 自分で破れない暗号を作るのは、誰でもできて難しくない。難しいのは、他の誰にも何年もの分析の後でも破られないものを作ることで、それを示せる方法は、最善の暗号研究者による長年の分析しかない。
- 使いどころ: 自作の暗号・独自の認証方式を作らず、検証された仕組みを使う理由

### S077 Bruce Schneier「"Schneier's Law"」（ブログ、2011 年 4 月 15 日）

> In 2004, Cory Doctorow called this Schneier's law

> Anyone can invent a security system that he himself cannot break.

> It's not that people believe they can create an unbreakable cipher; it's that people create a cipher that they themselves can't break, and then use that as evidence they've created an unbreakable cipher.

- 媒体・日付: Schneier on Security のブログ、2011 年 4 月 15 日（頁の表示「Posted on April 15, 2011」）
- URL: https://www.schneier.com/blog/archives/2011/04/schneiers_law.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 未確認。短い引用に留める。頁のコメント欄に Creative Commons の記述がある頁もあるが、コメントの利用許諾で、本文ではない
- 要旨（本 skill の言葉）: 名前は Schneier が自分でつけたのでなく、2004 年に Cory Doctorow が「Schneier's Law」と呼んだ、と Schneier が書く。内容は S076 の 1998 年の文を言い直したもので、Schneier 自身が「考え方は自分より古い」と述べる（その先行の引用は、この頁を通した孫引きで、取得した範囲では確かめていない）。重点は、自分が破れないことを、破れない証拠にしてしまう誤り。
- 使いどころ: 「Schneier's law」の出どころと、Schneier 自身の語。名前の由来は Doctorow（本人の説明による）
- 備考: 区分の根拠・範囲: Schneier 本人の文だけを引いた。この頁には、Doctorow・Kahn・Babbage の文が載るが、Schneier が引く孫引きなので、引用に使わない。

### S078 Bruce Schneier「Beyond Security Theater」（New Internationalist、2009 年 11 月）

> Security theater refers to security measures that make people feel more secure without doing anything to actually improve their security.

- 媒体・日付: New Internationalist、2009 年 11 月（頁の表示）
- URL: https://www.schneier.com/essays/archives/2009/11/beyond_security_thea.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 未確認。短い引用に留める。頁のコメント欄に Creative Commons の記述がある頁もあるが、コメントの利用許諾で、本文ではない
- 要旨（本 skill の言葉）: security theater は、安心感を与えるだけで、実際の安全を高めない保安策。本記事の例は物理の保安で、アプリのセキュリティへ広げるのは本 skill の解釈になる。
- 使いどころ: 「見せるための対策」と「効く対策」を分ける言い方。物理の保安の文脈と明記する
- 備考: 区分の根拠・範囲: 対テロの文脈の記事。この語の初出ではなく、この記事での定義。初出は確かめていない。

## 歴史と批判

### S085 Bruce Schneier「Secrecy, Security, and Obscurity」（Crypto-Gram、2002 年 5 月 15 日）

> This is true for cryptography, but the general relationship between secrecy and security is more complicated than Kerckhoffs' Principle indicates.

> In Kerckhoffs' day, there wasn't a large cryptographic community that could analyze and critique cryptographic systems, so there wasn't much benefit in publication.

> There is a continuum of secrecy requirements, and different systems fall in different places along this continuum.

> Cryptography, because of its mathematical nature, allows the designer to compress all the secrets required for security into a single key (or in some cases, multiple keys). Other systems aren't so clean.

- 媒体・日付: Crypto-Gram（月刊ニュースレター）2002 年 5 月 15 日号（頁の表示。当時 Counterpane Internet Security の創業者・CTO）
- URL: https://www.schneier.com/crypto-gram/archives/2002/0515.html
- 取得日: 2026-11-21
- 検証区分: C
- ライセンス: 「Copyright (c) 2002 by Counterpane Internet Security, Inc」の表示。引用は短く
- 要旨（本 skill の言葉）: Kerckhoffs の原則は、秘密を鍵だけにせよという要求で、公開そのものの要求ではない。暗号では、数学の性質ゆえに秘密を 1 つの鍵に圧縮でき、公開して査読を受ける利益が大きい。しかし他の系（航空の保安など）は秘密が多数あり、1 つの鍵に圧縮できない。何を秘密にし何を気にしないかは連続体で、設計者が決める。秘密が多いほど壊れやすい。
- 使いどころ: 隠すことへの批判の範囲と限界の一次。暗号以外の系で「何を秘密にするか」を相談者が決めるときの、論点の整理に使う。「秘密が要る場所」と「単なる隠蔽」を分ける問いとして、数値や結論を出さない。
- 備考: 区分の根拠・範囲: 公開の設計への批判の「限界」を述べる側の本人の原文。本人の会社は当時、監視サービスを売っていた。

### S086 Ross Anderson『Security Engineering』第 2 版 第 26 章 26.4.3「Semi-Open Design」

> Where a fully open design isn't possible, you can often still get benefits by opting for a partly-open one.

- 媒体・日付: 書籍の第 2 版（2008。著者の頁の「The Second Edition (2008)」の表示）。第 26 章の無料公開版 PDF
- URL: https://www.cl.cam.ac.uk/archive/rja14/Papers/SEv2-c26.pdf
- 取得日: 2026-11-21
- 検証区分: C
- ライセンス: 著者の頁に「Download for free here」の表示。著作権の表示は取得した章のテキストから見つからなかった。引用は短く
- 要旨（本 skill の言葉）: 完全な公開ができないときも、設計の骨格だけを公開し実装の細部は非公開にする、公開された基盤の上に独自の部品を載せる、といった中間の取り方で利益が得られる、と著者は書く。
- 使いどころ: 「公開か隠すか」の二分に陥らず、中間の設計があることの根拠。個別の例（製品名）は引用しない。
- 備考: 区分の根拠・範囲: 著者の見解。完全な公開が取れない系の現実的な選択肢。

### S087 Anne Adams・Martina Angela Sasse「Users are not the enemy」（1999）

> A closer analysis, however, revealed that such behavior is often caused by the way in which security mechanisms are implemented, and users' lack of knowledge.

> The result is that security departments typecast users as "inherently insecure": at best, they are a security risk which needs to be controlled and managed, at worst they are the enemy within.

> Unless security departments understand how the mechanisms they design are used in practice, there will remain the danger that mechanisms which look secure on paper fail in practice.

- 媒体・日付: 論文の著者版（UCL Discovery の「CACM FINAL.pdf」。掲載誌は Communications of the ACM 42(12)、1999 とされる。掲載誌・巻号は検索結果の記述で、取得した PDF 本文には表示がない）
- URL: https://discovery.ucl.ac.uk/id/eprint/20247/2/CACM%20FINAL.pdf（著者版）。出版版は https://dl.acm.org/doi/10.1145/322796.322806（取得していない）
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 表示なし（著作権は各権利者。引用は短く）
- 要旨（本 skill の言葉）: セキュリティの部署は、利用者を管理すべき危険とみなしがちだが、利用者の回避行動の多くは、機構の実装の仕方と、利用者の知識の不足によって起きる。利用者が理解していない問題と、部署が利用者の認識・作業・必要を理解していない問題の両方があり、双方の意思疎通が足りない。調査は、パスワードに関する 139 人の調査と 30 の聞き取りに基づくと、検索結果は要約する（本文の数字は未確認）。
- 使いどころ: 「人が最も弱い」への批判の一次。「見た目は安全な機構が、使われ方で破れる」という注意。「Johnny」（S088）や Herley（S089）と並べて、使いやすさと安全の議論の経緯を書く。
- 備考: 区分の根拠・範囲: 著者版の原文。出版版との差は未確認。

### S088 Alma Whitten・J. D. Tygar「Why Johnny Can't Encrypt: A Usability Evaluation of PGP 5.0」（1999）

> User errors cause or contribute to most computer security failures, yet user interfaces for security still tend to be clumsy, confusing, or near-nonexistent.

> Security is usually a secondary goal.

- 媒体・日付: 8th USENIX Security Symposium、Washington, D.C.、1999 年 8 月 23〜26 日（PDF の表示）
- URL: https://www.usenix.org/legacy/publications/library/proceedings/sec99/full_papers/whitten/whitten.pdf
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 「© 1999 by The USENIX Association」。教育・研究目的の非営利の複製は許可、の表示。引用は短く
- 要旨（本 skill の言葉）: 利用者の誤りがセキュリティの失敗の多くを生んでいるが、セキュリティの画面は不親切になりがち。論文は、安全には他の消費者向けソフトとは別の使いやすさの基準が要ると主張し、PGP 5.0 の事例研究（認知的な見通しの分析と実験）で確かめる。5 つの性質のうち最初は、安全は多くの場合は副次の目標、という「やる気のない利用者」の性質。
- 使いどころ: 使いやすさと安全の議論の一次。Saltzer の「心理的な受け入れやすさ」（S001）から 24 年後に、実装でその原則が守られているかを調べた例。事例は暗号の電子メールで、現代の認証にそのままは当てはまらない。

### S089 Cormac Herley「So Long, And No Thanks for the Externalities: The Rational Rejection of Security Advice by Users」（NSPW 2009）

> We argue that users' rejection of the security advice they receive is entirely rational from an economic perspective.

> The advice offers to shield them from the direct costs of attacks, but burdens them with far greater indirect costs in the form of effort.

- 媒体・日付: New Security Paradigms Workshop（NSPW）2009、2009 年 9 月 8〜11 日、Oxford（PDF の表示。「Copyright 2010 ACM」）。著者は Microsoft Research（PDF の表示）
- URL: https://www.nspw.org/2009/proceedings/2009/nspw2009-herley.pdf
- 取得日: 2026-11-21
- 検証区分: C
- ライセンス: 「Copyright 2010 ACM」の表示。引用は短く
- 要旨（本 skill の言葉）: 利用者がセキュリティの助言を無視するのは、怠けのためでなく、経済の観点で合理的だ。助言は攻撃の直接の費用から守るが、努力という間接の費用を負わせる。被害は稀で一度きりだが、助言は全員に毎日の負担を課し、負担の合計が防ぐ害より大きくなりうる。論文は、パスワードの規則・フィッシングサイトの見分け・証明書の警告の 3 領域を検討する。
- 使いどころ: 「利用者に教育で解決させる」へのもう 1 つの批判の一次。Adams と Sasse（S087）が「実装と知識の不足」を原因としたのに対し、費用の分配の観点を足す。論文の中の個別の調査の数字は使わない。
- 備考: 区分の根拠・範囲: 利用者の拒否を合理的とみる論者の主張。本人の原文で逐語を確認。

### S090 OWASP「How to use the OWASP Top 10 as a standard」（Top 10:2021 の頁）

> The OWASP Top 10 is primarily an awareness document. However, this has not stopped organizations from using it as a de facto industry AppSec standard since its inception in 2003.

> If you want to use the OWASP Top 10 as a coding or testing standard, know that it is the bare minimum and just a starting point.

> OWASP discourages any claims of full coverage of the OWASP Top 10, because it's simply untrue.

- 媒体・日付: OWASP Top 10:2021 の頁（頁の脚注は「© Copyright 2021-2025」。2021 版の頁を 2026-11-21 に取得）
- URL: https://top10.owasp.org/2021/A00_2021_How_to_use_the_OWASP_Top_10_as_a_standard/
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: Creative Commons Attribution 3.0 Unported（頁の表示）
- 要旨（本 skill の言葉）: Top 10 は本来は意識を高める文書だが、2003 年の登場以来、事実上の標準として使われてきた。標準として使うなら最低限の出発点にすぎず、「危険を書いたもので、検査しやすい問題を書いたものではない」ので、例えば設計の不備（A04）は多くの検査の範囲外になる。検証できる標準が要るなら ASVS を使い、道具が Top 10 を網羅するという主張は事実でない、と述べる。
- 使いどころ: 「Top 10 を満たせば安全」という誤用への、作り手側の一次。標準として使うときの文書の選び方（Top 10 か ASVS か）の相談で使う。表中の用途の区分の細目は引用していない。
- 備考: 区分の根拠・範囲: OWASP 自身の留保。一覧の作り手の自己説明。

### S091 Daniel Miessler「OWASP Top 10 Lists are Art, Not Science」（2017 年 6 月 13 日）

> When vendors submit datasets they're HIGHLY skewed.

> The truth about these projects (and I've been on a few) is that the teams tend to be highly confused about what the goal ultimately is.

- 媒体・日付: 個人のブログ（2017 年 6 月 13 日。OWASP Summit 2017 のデータ収集の討議の後に書いたと本文）
- URL: https://danielmiessler.com/blog/owasp-top-10-lists-are-art-not-science
- 取得日: 2026-11-21
- 検証区分: C
- ライセンス: 「© 1999 - 2026 Daniel Miessler」の表示。引用は短く
- 要旨（本 skill の言葉）: 事業者が出すデータは、事業の都合・得意な弱点・提出の形がばらばらで強く偏っている。それを少数のボランティアが正規化して一覧にするが、これは科学ではなく、そうと伝えられていない。一覧の目的（リスクの列挙か、開発者の過ちの予防か、CISO の優先順位づけか）をチームが取り違えている。目的が CISO の優先順位づけなら、なぜ侵害のデータを使わないのか、とも問う。
- 使いどころ: Top 10 のデータの偏りへの批判の一次（2017 年時点）。2021・2025 版が方法を変えている点（S095）と対にして、「批判された点が版でどう扱われたか」を書く。批判は 2017 年の版に対するもので、現行の版に当てはまるかは別。
- 備考: 区分の根拠・範囲: OWASP の一覧の作り手の内側にいた人物の批判。本人の記述の逐語を確認したが、主張の正しさは確認していない。

## 版と時点

### S093 OWASP ASVS の公式の頁（版と位置づけ）

> A framework of security requirements for designing, developing and testing modern web applications and web services.

> Since the identifiers may change between versions of the standard, it is preferable for other documents, reports, or tools to use the following format

- 媒体・日付: OWASP Application Security Verification Standard の公式サイト。頁の表示は「ASVS 5.0.0 Published 30 May 2025 Stable release」。GitHub のリリースは v5.0.0（2025-05-30）、前の安定版は v4.0.3（2021-10-28）（GitHub の API の表示）。最新の開発版（Bleeding Edge）は 2026-11-17 に更新されている
- URL: https://asvs.owasp.org/
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: ASVS 5.0.0 の PDF に CC BY-SA 4.0（S094）。頁は未確認
- 要旨（本 skill の言葉）: ASVS は、web アプリと web サービスの設計・開発・試験のためのセキュリティ要件の枠。用途は、指標・設計の指針・調達の仕様。要件の識別子は版で変わりうるので、引用するときは版の接頭辞をつける（例は `v5.0.0-1.2.5` の形）。
- 使いどころ: ASVS の版と、要件を引く書式。「最新」を記憶で決めない（版の確認の結果は報告に記載）
- 備考: 区分の根拠・範囲: 2 つ目の文は、コロンの前で切った。コロンの後は `v<version>-<chapter>.<section>.<requirement>` の書式の説明。

### S094 OWASP ASVS 5.0.0 の本文（水準の考え方）

> Rather than the ASVS prescriptively stating what level an application should be at, an organization should analyze its risks and decide what level it believes it should be at, depending on the sensitivity of the application and of course, the expectations of the application's users.

> Level 1 is designed as the initial step to adopting the ASVS, providing the first layer of defense.

> Requirements have been rewritten to emphasize the prevention of security flaws rather than mandating specific technical implementations.

- 媒体・日付: OWASP ASVS 5.0.0（PDF の表示は May 2025。本文に「approximately 350 requirements across 17 chapters」とある。件数は出典の記述）
- URL: https://github.com/OWASP/ASVS/raw/v5.0.0/5.0/OWASP_Application_Security_Verification_Standard_5.0.0_en.pdf
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: CC BY-SA 4.0（PDF に「released under the Creative Commons Attribution-ShareAlike 4.0 International License」とある）。短い引用に留める
- 要旨（本 skill の言葉）: 水準（Level 1〜3）は ASVS が一律に指定せず、組織がリスク・アプリの機微さ・利用者の期待から決める。Level 1 は採用の第一歩、Level 2 は標準的な実践の包括、Level 3 は高保証。要件は、実装の指定でなく、欠陥の予防を述べるように書き直された。主要な版（5.0.0）は識別子ごと再編され、4.0.3 からの対応表がある。
- 使いどころ: 「どの水準を目指すか」を相談者の判断として扱う根拠。版をまたぐ比較

### S095 OWASP Top 10:2025（位置づけ・作り方・データの偏りの自己説明）

> The OWASP Top 10 is a standard awareness document for developers and web application security.

> This installment of the Top Ten remains data-informed, but not blindly data-driven.

> We do this for a fundamental reason: examining the contributed data is essentially looking into the past.

> The results in the data are largely limited to what the industry can test for in an automated fashion.

- 媒体・日付: OWASP Top 10:2025（公式サイトの序文は「8th installment」）。頁に公開日の表示は無い。GitHub のリポジトリでは、2025-12-24 に「Removed RC」「Remove RC notice」のコミットがある（GitHub の API の表示。正式公開の日付と同じとは確かめていない）。前の版は 2021 年版と 2017 年版（プロジェクトの頁の表示）。データの寄贈者に事業者（Veracode・Semgrep・Bugcrowd など）が並ぶ。頁の脚注は「© Copyright 2021-2025」
- URL: https://top10.owasp.org/2025/0x00_2025-Introduction/
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 頁末に「This work is licensed under a Creative Commons Attribution 3.0 Unported License」（Top 10 の版の頁）。短い引用に留める
- 要旨（本 skill の言葉）: Top 10 は、開発者と web アプリのセキュリティのための「認識のための文書」で、重大なリスクの広い合意を示す。2025 年版は、提供されたデータを順位づけに使い、一部は実務者の調査で補う（データは過去を見るので、検査が追いつかない新しい危険を拾うため）。10 項目は、アクセス制御の不備・設定の不備・ソフトウェアのサプライチェーンの失敗・暗号の失敗・インジェクション・安全でない設計・認証の失敗・ソフトウェアやデータの完全性の失敗・ログと警報の失敗・例外的な状況の不適切な扱い（新設）。SSRF はアクセス制御の項目に統合された。割合・件数は出典のデータで、一般化しない。並べ方の方法の自己説明: 10 の区分のうち 8 をデータから、2 を実務家の調査から選ぶ。理由は、寄せられたデータは過去を見ていて、新しい弱点が検査の道具に入るまで数年かかり、自動で検査できる範囲に偏るから。頻度（件数）は計算に入れず、各弱点を持つ応用の割合で数える。重大さの評価には CVE に付く評価値（CVSS の攻撃のしやすさと影響）を使うが、CVSS v4.0 は計算の形が変わったため今回は使えなかった。
- 使いどころ: Top 10 を「チェックリストの合格基準」でなく「認識のための一覧」として使う。ASVS との役割の違い。並べ方の根拠・データの偏りの、作り手の自己説明の一次。数値（件数・割合）は時点情報で、引用しない。版ごとの項目の変化（2025 版で供給網の失敗・例外の扱いが新設など）は、頁の本文を要約するにとどめる。外部の批判は S091、使い方への作り手の留保は S090。
- 備考: 区分の根拠・範囲: 1 つ目の引用はプロジェクトの頁 https://owasp.org/projects/top-ten と版の頁 https://top10.owasp.org/2025/ にも同じ文がある。方法と限界の説明は、OWASP 自身の自己説明（作り手の留保）なので A とした。

### S096 NIST SP 800-218 SSDF 版 1.1（2022 年 2 月・確定版）

> Following such practices should help software producers reduce the number of vulnerabilities in released software, reduce the potential impact of the exploitation of undetected or unaddressed vulnerabilities, and address the root causes of vulnerabilities to prevent future recurrences.

> PW.1.1: Use forms of risk modeling - such as threat modeling, attack modeling, or attack surface mapping - to help assess the security risk for the software.

> RV.3.3: Review the software for similar vulnerabilities to eradicate a class of vulnerabilities, and proactively fix them rather than waiting for external reports.

- 媒体・日付: NIST SP 800-218「Secure Software Development Framework (SSDF) Version 1.1」。頁の表示は Date Published: February 2022、履歴は 09/30/21 ドラフト・02/03/22 確定。CSWP 13（04/23/2020）を置き換える。DOI 10.6028/NIST.SP.800-218
- URL: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf（確定版の頁: https://csrc.nist.gov/pubs/sp/800/218/final）
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: NIST SP 800-218 の PDF に「is not subject to copyright in the United States. Attribution would, however, be appreciated by NIST」の記述がある。米国外での扱いは確認していない。短い引用に留める
- 要旨（本 skill の言葉）: SSDF は、既存の開発手法に足せる、安全なソフトウェア開発の実践の中核。4 つの群は、組織の準備（PO）・ソフトウェアの保護（PS）・安全なソフトウェアの作成（PW）・脆弱性への対応（RV）。リスクのモデリング（脅威モデリング・攻撃のモデリング・攻撃面の対応づけ）は PW.1.1 に置かれ、類似の脆弱性を探して分類ごと直すのは RV.3.3。
- 使いどころ: 開発の工程の中でセキュリティを置く場所。脅威モデリングの位置づけの公式の根拠
- 備考: 区分の根拠・範囲: PDF の概要は「reduce the potential impact」だが、csrc の頁の概要は「mitigate the potential impact」と文言が違う。PDF の文を引いた。

### S097 NIST SP 800-218 Rev. 1（SSDF 版 1.2、初期の公開ドラフト）

> This document describes new and improved practices, tasks, and examples for the secure and reliable development, delivery, and improvement of software.

- 媒体・日付: NIST SP 800-218 Rev. 1 ipd「SSDF Version 1.2」。頁の表示は Date Published: December 17, 2025、Comments Due: January 30, 2026（意見募集は終了）
- URL: https://csrc.nist.gov/pubs/sp/800/218/r1/ipd
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: NIST のドラフトの頁。再利用条件の表示は確認していない（確定版の PDF の記述は SP 800-218 版 1.1 の項目に書いた）。短い引用に留める
- 要旨（本 skill の言葉）: 版 1.2 は、実践・作業・例の新規と改善を含むドラフトで、2025 年 12 月に公開され、意見募集が 2026 年 1 月末に終わった。取得日の時点で、確定したことは確かめられなかった。
- 使いどころ: SSDF の版の扱い。「最新」を記憶で決めない
- 備考: 区分の根拠・範囲: ドラフトであることが頁に明記される。確定版の有無は、S096 の確定版の頁に置き換えの表示が無いこと、SSDF の事業の頁に確定の記述が無いこと、から確定していないと見たが、確定の未確認が根拠であり、確かめた事実ではない。

### S098 NIST SP 800-63B-4（2025 年 7 月）の範囲と位置づけ

> This guideline focuses on the authentication of subjects who interact with government information systems over networks to establish that a given claimant is a subscriber who has been previously authenticated.

> This document defines technical requirements for each of the three authenticator assurance levels.

- 媒体・日付: NIST SP 800-63B-4「Digital Identity Guidelines: Authentication and Authenticator Management」。頁の表示は Date Published: July 2025、置き換え対象は SP 800-63B（03/02/2020）。頁に「Planning Note (10/06/2026): The Implementation Resource Hub for SP 800-63-4 is now available」とある
- URL: https://csrc.nist.gov/pubs/sp/800/63/b/4/final
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: NIST の csrc の頁。再利用条件の表示は確認していない（SP 800-63B-4 の PDF の記述は、パスワードの項に書いた）。短い引用に留める
- 要旨（本 skill の言葉）: 本指針の範囲は、政府の情報システムに、ネットワーク越しに接する主体の認証。技術要件を 3 つの認証保証水準ごとに定める。民間の製品・国内の制度へそのまま当てはまる規範ではなく、考え方と根拠の指し先として使う（位置づけは skill 側の言葉）。
- 使いどころ: 認証の指針の版と、適用の範囲

### S099 NIST SP 800-63B-4（2025 年）のパスワードの扱い

> Verifiers and CSPs SHALL NOT impose other composition rules (e.g., requiring mixtures of different character types) for passwords.

> Verifiers and CSPs SHALL NOT require subscribers to change passwords periodically. However, verifiers SHALL force a change if there is evidence that the authenticator has been compromised.

> Verifiers SHOULD permit claimants to use the "paste" function when entering a password to facilitate password manager use when password autofill APIs are unavailable.

- 媒体・日付: NIST SP 800-63B-4 の 3.1.1.2「Password Verifiers」の項。HTML 版は pages.nist.gov の公開版（取得時の頁のタイムスタンプは「Tue, 26 Aug 2025」。csrc の頁の表示は Date Published: July 2025）。前の版（SP 800-63B-3）の頁は、2025 年 8 月 1 日に 800-63-4 へ置き換えられたと表示する。csrc の頁の発行月（2025 年 7 月）、前の版の頁が置き換えを表示する日（2025 年 8 月 1 日）、HTML 版のタイムスタンプ（2025-08-26）は、頁の表示である。日付どうしの関係は確かめていない
- URL: https://pages.nist.gov/800-63-4/sp800-63b.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: SP 800-63B-4 の PDF に「is not subject to copyright in the United States. Attribution would, however, be appreciated by NIST」の記述がある。HTML 版の頁には再利用条件の表示が無い。米国外での扱いは確認していない。短い引用に留める
- 要旨（本 skill の言葉）: 文字種の組み合わせなどの構成規則を課さない。定期的な変更を求めない（漏えいの証拠があれば変更させる）。貼り付けを許す（パスワード管理ソフトの利用を助けるため。自動入力の API が使えない場合）。同じ項に、長さの下限、ハッシュ化、ブロックリスト、レート制限の規定がある。長さの値は（本台帳には写さない）、2025 年 7 月版の値で、版で変わる。前の版（S033）では組成規則と定期変更の要求が SHOULD NOT で、本版で SHALL NOT に強まった。ヒントの保存や、知識ベースの認証（「最初のペットの名前は」のような質問）の利用も SHALL NOT。AAL3 は、フィッシング耐性があり秘密鍵が取り出せない暗号の認証器を要求する。
- 使いどころ: パスワードの規則の現行の指針（2026-11-21 時点）。版と日付（2017→2025）を併記し、将来の改訂は出典の版を取り直す。貼り付けの許可が、a11y の観点（designer-accessibility）と矛盾しないことの一次の根拠。変遷は S033・S034・S035。認証保証水準・多要素・パスキーは S102・S032、OWASP の読み方は S027。
- 備考: 区分の根拠・範囲: HTML 版を照合。引用の「paste」の引用符は直線形に揃えた。PDF の記述と HTML 版の頁の表示を分けて書いた。

### S100 IPA「安全なウェブサイトの作り方」（改訂第 7 版）

> 「安全なウェブサイトの作り方」は、IPAが届出(*1)を受けた脆弱性関連情報を基に、届出件数の多かった脆弱性や攻撃による影響度が大きい脆弱性を取り上げ、ウェブサイト開発者や運営者が適切なセキュリティを考慮したウェブサイトを作成するための資料です。

> なお、項番については、脆弱性の深刻度や攻撃による影響、届出状況を考慮して割り当てており、対策の優先順位を示すものではありません。

> ただし、「ウェブ健康診断仕様」の診断は、検査パターンを絞り込んだ診断ですので、脆弱性が検出されなかった場合でも、安全宣言には繋がりません。

- 媒体・日付: 独立行政法人 情報処理推進機構（IPA）の頁。頁の表示は「最終更新日：2021年3月31日」、日本語版は「2021年3月31日改訂第7版第4刷公開」。英語版は 2011 年 12 月 26 日の改訂第 5 版（頁の表示）
- URL: https://www.ipa.go.jp/security/vuln/websecurity/about.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: IPA のサイト利用規約（siteinfo.html）に、記事・図表は著作権法で保護され特に記載がない限り IPA に帰属、引用や転載では出所を明示、とある。個別の頁の使用条件は読んでいない。短い引用か要旨に留める
- 要旨（本 skill の言葉）: IPA に届いた脆弱性関連情報（届出の多いもの・影響の大きいもの）を基にした、開発者・運営者向けの資料。第 1 章はウェブアプリケーションのセキュリティ実装（SQL インジェクション・OS コマンド・インジェクション・パス名パラメータの未チェック・セッション管理の不備・クロスサイト・スクリプティング・CSRF・HTTP ヘッダ・インジェクション・メールヘッダ・インジェクション・クリックジャッキング・バッファオーバーフロー・アクセス制御や認可制御の欠落の 11 種）で、根本的な解決策と保険的な対策に分ける。第 2 章は運用面（パスワードの取扱いなど 7 項目）、第 3 章は失敗例、巻末にチェックリスト。項番は優先順位ではない。「ウェブ健康診断」は検査パターンを絞っているので、何も検出されないことは安全の宣言にならない。近年の仕組み（SPA・API・クラウド・サプライチェーン・パスキーなど）は範囲外と見る（本 skill の整理）。2021 年 3 月以降の更新は頁から確かめていない。
- 使いどころ: 国内の相談者が最初に当たる基礎資料としての位置づけ。優先順位は自分の系で決める、診断は安全の保証にならない（実測の診断の限界を、一次の文で示す）、という 2 点の根拠。
- 備考: 区分の根拠・範囲: 資料の紹介の頁。資料の PDF の本文は取得していない。

### S101 SLSA「Specification v1.2」

> SLSA is a specification for describing and incrementally improving supply chain security, established by industry consensus.

- 媒体・日付: slsa.dev。頁表示「Status: Approved」。取得時点の最新は v1.2。v1.1 の頁は「Retired」の表示
- URL: https://slsa.dev/spec/v1.2/
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 頁フッター「© 2026 The Linux Foundation, under the terms of the Community Specification License 1.0」。帰属を付けて短く引用する
- 要旨（本 skill の言葉）: SLSA は、サプライチェーンのセキュリティを段階的に高めるための仕様で、水準（level）で保証の強さを示す。v1.2 は、成果物のビルドを扱う Build Track に加え、ソースの作り方を扱う Source Track を持つ。v1.1 との違いは、Source Track の追加・脅威モデルの更新・仕様の構成の変更（頁の「What's new」による）。
- 使いどころ: 「SLSA の何段目か」を問われたときの版の確認。v1.1 までの Build Track だけを前提にした記述を、そのまま使わない。

### S102 W3C「Web Authentication: An API for accessing Public Key Credentials - Level 3」

> This specification defines an API enabling the creation and use of strong, attested, scoped, public key-based credentials by web applications, for the purpose of strongly authenticating users.

- 媒体・日付: W3C Recommendation、2026-08-25（Level 3）。前版は Level 2（2021-04-08）・Level 1（2019-03-04）。取得時点の最新が Level 3
- URL: https://www.w3.org/TR/webauthn-3/
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 頁に「© 2026 World Wide Web Consortium. W3C liability, trademark and permissive document license rules apply.」。W3C の文書ライセンスに従い、帰属を付けて短く引用する
- 要旨（本 skill の言葉）: 公開鍵の資格情報を、依存当事者（Relying Party）ごとに範囲を限って作り、認証器に結びつけて使う API。ブラウザが認証器へのアクセスを仲介し、ユーザーの同意なしに操作は行われない。同期される多機器の資格情報（いわゆる「同期パスキー」）による、フィッシングに強いサインインの利用場面を 1 章で示す。頁が示す登録の流れでは、既存の方法（パスワードを含む）でログインした後に、パスキーの作成を勧める。認証器の機能と証明（attestation）の仕様も含む。
- 使いどころ: パスキーの技術的な土台の説明。WebAuthn はパスキーを支える仕様、という位置づけ。依存当事者ごとに範囲が限られる設計。
- 備考: 区分の根拠・範囲: 原文は「scoped」にリンクが付く。リンク記号を除き、空白を原文に合わせた。照合の注記: 空白と、強調記号・リンク記号・商標記号を除いて比較して一致した引用がある（タグや記号が入る位置の空白の差）。

### S103 Ross Anderson『Security Engineering』の版と公開の扱い（著者の頁）

> I've written a third edition of Security Engineering.

> With both the first edition in 2001 and the second edition in 2008, I put six chapters online for free at once, then released the others four years after publication.

- 媒体・日付: Ross Anderson「Security Engineering - A Guide to Building Dependable Distributed Systems」の著者の頁（ケンブリッジ大学計算機研究所）。頁の表示は第 1 版 2001・第 2 版 2008・第 3 版（第 3 版の本文の著作権表示は 2020、S009）
- URL: https://www.cl.cam.ac.uk/archive/rja14/book.html
- 取得日: 2026-11-21
- 検証区分: A
- ライセンス: 頁は章の PDF を無料でダウンロードできるとする。各章の著作権は Wiley（S009）。短い引用に留める
- 要旨（本 skill の言葉）: 第 3 版は Wiley から 2020 年に出て、章の PDF が著者の頁で無料公開される（第 3 版は 2020 年 11 月から 42 か月の間、7 つのサンプル章を除いて取り下げられ、その後に全文が公開されると頁は書く。今回の取得では第 0・1・8 章の PDF が取れた）。講義の動画 15 本と正誤表も頁にある。
- 使いどころ: 版と公開の扱い。章の PDF を一次として引く
- 備考: 第 3 版の章の PDF 取得は S009・S071 に記録。
## 未検証・調査の限界

未検証（U）の項目は番号を振らず、事実・引用として使わない。次の表は、確かめられなかったもの・取得できなかったものと、skill での扱いである。

| 対象 | 状況 | 扱い |
|------|------|------|
| Saltzer と Schroeder の論文の掲載誌の巻・号・頁 | MIT の頁に掲載誌の書誌が出ていない（頁表示は 1974 年 10 月受理・1975 年 4 月改訂・1975 年の著作権のみ）。掲載誌は Proceedings of the IEEE とされるが、取得した頁で確かめていない | 「1975」と MIT の頁の表示だけを書く。一次で確かめるまで、巻号を書かない |
| Kerckhoffs の原典の紙面（大英図書館の写し）そのもの | Petitcolas の転写（HTML）と、電子化した PDF（OCR）を確認したが、紙面の画像は目視していない | 逐語は B と明記する。画像で確かめたら A に上げる |
| 「Kerckhoffs の原理」の 1 文（「鍵だけが秘密」の言い方）の出どころ | 原典の 6 項目には、この 1 文は無い。Petitcolas の解説（S007）が紹介するが、誰が最初に 1 文にしたかは確かめていない | 1 文を本人の言葉として使わない。第 2 の条件の原文（S005）を使う |
| 「Security through obscurity」の語の命名者・初出 | 取得した資料に最初の出典が無い。Schneier（S085）は、語を暗号の共同体が使う語として書くのみ | 命名者・初出を書かない |
| 「唯一の安全な計算機は電源を切ったもの」の類の名言 | 取得していない（出どころは未確認のまま） | 使わない |
| 「Security theater」の語の初出 | 2009 年の記事での定義（S078）だけを確かめた | 初出を書かない。2009 年の記事の定義として使う |
| 「Schneier's law」の Doctorow の原文、Babbage・Kahn の原文 | Schneier の頁（S077）を通した孫引きだけ | 「Schneier の説明によれば」と書く。Babbage・Kahn の文言は使わない |
| 4 つの問いの 2014 年の書籍（初版）での文言 | 書籍の本文は未取得。README の「変更点」の説明（S013）だけがある | 初版の文言を再構成しない。README・Manifesto・ホワイトペーパーの語を区別して引く |
| STRIDE の原典（Microsoft の社内文書）の紙面 | 1999 年の文書は Shostack の頁が配る Word 版（S017。区分 B）を取得した。Microsoft の原本との照合はしていない。年は文書内の日付と SEI の記述（S022）が一致 | 逐語は B と明記する |
| Kindervag（Forrester）の 2010 年の文書（ゼロトラストの語の考案） | NIST（S038）が語の考案者として挙げるだけで、原典は取得していない | 考案者・年を書かない。「NIST は〜と書く」と帰属を書く |
| Threat Modeling Manifesto と Shostack の頁の公開年 | 頁自体に年の表示が無い。GitHub の API の表示（初版の公開 2020-11-17）だけが取れた（S014） | 「2020 年ごろ（GitHub の表示）」と書く |
| Anderson「Why Information Security is Hard」の発表の場・発表年 | PDF の本文に会議名が無い。PDF の作成日（2001 年 10 月）と文中の参照から、2001 年ごろとした（S072） | 会議名は書かない。年は「2001 年ごろ」 |
| Adams と Sasse の掲載誌の表示 | 著者版の PDF（S087）の本文に掲載誌・巻号の表示が無い。CACM 42(12)、1999 は検索結果の記述。出版版との差は未確認 | 著者版の原文として引く。掲載誌は「とされる」と書く |
| OWASP Top 10:2025 の正式な公開日 | 公式の頁に日付の表示が無く、GitHub のリリース一覧にも無い。2025-12-24 の「RC 表示の除去」のコミットだけが取れた（S095） | 「2025 年版（公式サイトで現行の版）」と書き、日付を書かない |
| OWASP Top 10:2021 年版の本文、全版の項目の変化 | 2021 年版は使い方の頁（S090）だけ引いた。2003 年以降の全版の比較は行っていない | 2021 年版の文言は S090 の範囲だけ。版ごとの項目の変化は書かない |
| OWASP Cheat Sheet の頁ごとの版番号 | 頁に版番号も日付も表示されない | リポジトリの最終コミット日で代える（Git の履歴で確かめられる） |
| SSDF 版 1.2 の確定の有無 | 確定の記述が取れなかった（確定していない、とも確かめていない） | 版 1.1 を確定版、1.2 をドラフトと書き、確定の有無は取得日の時点で未確認と明記する |
| NIST SP 800-63 の他の部（63-4 の本体・63A・63C）と、63B-3 との差分、2013 年の 800-63-2 の本文 | 63B-4（S099）と 63B-3（S033）の引用以外は取得していない。800-63-2 は目次の確認のみ | 版の差分は、引用で示す範囲に限る |
| NIST SP 800-63B-4 の発行に関わる日付 | csrc の頁の発行月は July 2025、前の版の頁の置き換えの表示日は 2025-08-01、HTML 版のタイムスタンプは 2025-08-26（S099）。日付どうしの関係は確かめていない | 3 つを頁の表示として並べる。項目の媒体の欄のとおり |
| 「一人の人物の後悔の言葉」として流通するパスワード規則の話（NIST の旧版の著者） | 流通する出どころの記事（新聞）は取得していない。規則が SHOULD NOT へ転じ、SHALL NOT へ強まったこと（S033・S099）は一次で確認した | 後悔の言葉とその文面は使わない |
| Secure by Design への外部の批判の一次、各社の誓約の中身と履行 | 作り手に責任を寄せる方針（S010）への外部の批判の一次は取れていない。誓約の履行は事業者の自称（S012） | 外部の批判として書かない |
| CISA の SBOM の 2025 年の更新が確定したか | 意見募集の頁（S049）のみ | 確定版は未確認と書く |
| Xia ほか（S051）の掲載会議・年 | arXiv のプレプリントとして取得。会議名・年は未確認 | 会議名を書かない |
| 国内の相談窓口の連絡先 | 電話番号・メールアドレスは、頁が画像にする・伏せるなどしており写していない。警察（サイバー事案の相談・被害の届出）・個人情報保護委員会（漏えい等の報告）・各業界の窓口は取得していない | 連絡先を台帳に書かない。窓口の名前と役割だけ（S063・S064・S065）。報告義務の判断は範囲外 |
| Privacy by Design の原典（Cavoukian の 7 原則） | 原典の頁の取得が拒否された | NIST の Privacy Framework が「privacy by design の概念を支える」と書く範囲（S060）だけ。原則の逐語は取らない |
| 国家サイバー統括室（NISC の後継と見られる）の文書、経済産業省の頁 | 政府機関等の統一基準群の旧 URL は、新サイトのトップ頁へ転送され、本体に届かなかった。経済産業省の頁は取得が拒否された | 組織名の注意だけ（S066）。基準の中身は書かない |
| CWE・CAPEC の現行のリスト版 | 取得できた頁が古い版（CWE 5.0、CAPEC 3.9）を示す頁だった | 版を書かない。各サイトの最新版の頁で取り直す |
| OpenSSF の頁の改訂日とライセンス | 開発者向けの指針は版日が 2023-06-14 だが、後年の語を含む。ライセンスの表示は見つからなかった。Scorecard・Best Practices Badge の基準は、製品・認定の比較に進まない方針に従い、取得しただけで引用していない | 版日と時点を併記する。製品・認定の比較に進まない |
| SLSA v1.2 の水準ごとの要件（Build L1〜L3）の本文 | v1.1 の概要頁を取得しただけで、v1.2 の要件の頁は読んでいない | 水準の定義を使うときは、取り直す |
| IPA の頁ごとの使用条件、「安全なウェブサイトの作り方」の PDF の本文 | サイト全体の規約だけを読んだ。PDF 本体は取得していない（紹介の頁のみ） | 本文の個別の記述は引かない。使用条件は短い引用か要旨で足りる範囲にとどめる |
| 国内の個別資料（IPA「セキュア・プログラミング講座」・「中小企業のためのセキュリティインシデント対応の手引き」・「ウェブサイト運営者のための脆弱性対応ガイド」ほか） | 所在を確かめられなかったもの、または頁が案内するだけで本文は未読 | 使わない |
| 関連の書誌（Zhang・Monrose・Reiter、Komanduri ほか）の本文 | S035 の記事が結果を要約する研究と、組成規則の効果の研究。本文は取得していない | 数字（17% など）は Cranor の記事の要約として扱い、一般化しない。`SKILL.md` は数字を使わない |
| ライセンスの未確認 | Saltzer・Schneier・Anderson・CISA・IPA・JPCERT/CC・OpenSSF・NIST の一部の頁など、著作権表示のみ・表示なし・再利用の条件を確かめられなかったもの | 短い引用と要旨にとどめる |

調査の限界:

- 薄い主題: 「秘密情報」（S041 の 1 件）と「ログと検知」（S052 の 1 件）は、一次が 1 件ずつである。ログの記録の中身・保持・改ざんへの備え、秘密情報の漏れた前提の備えの一次は集めていない。認可も OWASP の頁（S036）とゼロトラストの系譜が中心で、モデル（誰が何をできるか）の設計の一次は薄い
- 国内の資料が薄い: 厚いのは、脆弱性の届出・調整の制度（IPA・JPCERT/CC）と、政府情報システム向けのデジタル庁のガイドライン。薄いのは、アプリケーションの開発者向けの実装指針（IPA「安全なウェブサイトの作り方」は改訂第 7 版。近年の仕組みは範囲外と見る）、認証・認可・秘密情報・セッションの国内の一次、脅威モデリングの国内の一次である
- 事業者・団体の文書が多い: OWASP・OpenSSF・SLSA・FIDO Alliance の文書は、自組織の考え方・自称で、値・閾値はその時点の例である
- 批判の側の厚さ: 隠すことに頼る設計・Top 10・パスワードの規則・助言を断られる問題・SBOM・脅威モデリングの型は、両論が取れた。Secure by Design・ゼロトラストの語の使われ方は、推進側の記述だけが取れた
- 版と時点: ASVS は 5.0.0、Top 10 は 2025 年版、SSDF は 1.1（確定）と 1.2（ドラフト）、NIST SP 800-63B は第 4 版、SLSA は v1.2、WebAuthn は Level 3、IPA は第 7 版の時点の記述である。取得日は 2026-11-21。次の版が出たら、版と日付を取り直す
- 防御側に限る: 攻撃の実行手順・攻撃用の入力・個別の脆弱性・検知の回避は集めていない。AI を使った機能のセキュリティは、範囲に入れていない（頁の存在だけを S042 に書いた）

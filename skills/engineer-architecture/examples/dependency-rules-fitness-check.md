# 例: モジュール間の依存の規則を、検査で守る

架空の会計 SaaS が、モジュール間の依存の規則を決め、CI で自動に検査する例。相談への返答の文面と、規則を表す設定、依存を読んで違反を出す小さなスクリプトを載せる。題材は架空の事業者・数値で、実在の製品・企業を写さない。「境界を決めたが、守られているか分からない」「依存の向きが崩れていく」という相談を受けたときに開く。

## 依頼

- 事業者: 架空の会計 SaaS「つむぎ会計」。開発者は 7 人、1 つのコードベースのモジュラーモノリス（架空の前提）
- モジュール: 請求（billing）・在庫（inventory）・元帳（ledger）の 3 つ（架空の前提）
- 依頼文: 「請求の処理が在庫の内部の関数を直接呼んでいて、在庫の変更のたびに請求が壊れる。境界を決めたのに守られない。守らせる仕組みが欲しい」
- 先に確認したこと: コードは JavaScript。CI は PR ごとに動く。モジュールの公開の入口は、各ディレクトリの `index.js` にそろえられる（架空の前提）

## 目的の一文

「請求は在庫の内部を直接 import しない」を含む依存の規則を、人の注意でなく CI の検査で守り、規則を破る変更を、取り込まれる前に見つけられる状態にする。

## 削るもの

| 削るもの | 理由と削り方 |
|---|---|
| 規則の全面の整備 | 変更で実際に壊れた箇所（請求から在庫の内部）から始める。規則は 2 種類に絞る（本 skill の整理） |
| 外部の依存解析の道具の導入 | 規則が 2 つの間は、小さなスクリプトで足りる（本 skill の整理）。規則が増える、または文法が複雑になったら、道具を比べる |
| 循環・層の数式での評価 | 最初は入れない。違反の件数だけを見る。数式に見合う相談が出たら足す（本 skill の整理） |
| 性能・可用性の検査 | 別の目標で、別の検査になる。この例は構造の規則だけを扱う |
| すべての系への適用 | 依存の向きや境界の検査は、すべての系で必須とは限らない（本 skill の整理）。入れる条件と入れない条件を、下の構成に書く |

## 構成

```text
壊れた箇所を見る → 守りたい構造の目標を 1 文にする → 規則を 2 種類に絞って設定に書く
→ 検査を CI に置く → 既存の違反の件数を数え、直してから、CI の必須の確認にする
→ 規則の見直しの担当と時期を決める
```

- 検査を入れる条件（本 skill の整理）: 境界を越える変更が実際に障害や手戻りを生んでいる。コードが機械的に解析できる（静的な import が主）。違反の数を、直せる範囲に収められる
- 入れない条件（本 skill の整理）: 数か月で捨てる系。境界がまだ仮説で、毎週引き直している間（規則の書き換えが検査より多くなる）。検査の保守の費用が、守る価値を上回る
- 検査は CI の必須の確認にする。違反があれば、非 0 の終了コードで失敗する

## 仕様

出典のある値には S 番号を付ける。それ以外は本 skill の整理で、規格の要件ではない。

| 項目 | 値 | 根拠 |
|---|---|---|
| 構造の目標の扱い | 「適合」の意味を明示し、できる限り自動化する | S051（逐語の範囲はこの点だけ） |
| 適応度関数 | アーキテクチャが目的にどれだけ近いかを記述するもの | S052 |
| この例の適応度関数 | 規則違反の件数。件数を測る検査として実装する。違反 0 は、規則 2 つについて目的に反しないことの代理。目的全体への適合は別 | 本 skill の整理。テストとして測るのは、S052 の引用の範囲外 |
| 規則 1: 公開の入口 | 他のモジュールが import してよいのは、相手の `index.js` だけ | 本 skill の整理。この例の設定 |
| 規則 2: 禁止する向き | 在庫から請求への依存を禁じる | 本 skill の整理。この例の設定 |
| 終了コード | 0: 違反なし。1: 違反あり。2: 検査自体の失敗（規則ファイルが読めない・対象が無い・検査対象が 0 件） | 本 skill の整理。検査の失敗を「違反なし」に倒さないため |
| 既存の違反 | CI を必須にする前に、すべて直す。直せないものは、規則か境界の見直しに回す。例外を載せる仕組みは、この断片には無い | 本 skill の整理 |
| 検査の頻度と担当 | PR ごとに CI。規則の見直しは四半期ごと、開発リーダーが担当 | 本 skill の整理。この例の設定 |
| 見直しの基準（架空） | 測り方: 四半期ごとの CI の違反件数の推移と、規則の追加の要望の件数。基準: 違反件数が前の四半期より増えた、または追加の要望が 3 件以上のとき、規則を見直す議題に載せる | 本 skill の整理。閾値は架空の前提 |
| 検査の限界 | 拾えない: 動的に組み立てた import 先・パスの別名・`.js` 以外（`.mjs`・`.cjs`・`.ts`）のファイル。誤検出する: コメントや文字列に書かれた import 風の文 | 本 skill の整理。下のスクリプトの実装による |

## 文言

### 相談への返答

> 結論: 請求から在庫の内部への直接の依存を、設定で禁じ、CI で検査することを勧めます。まず規則は 2 種類（公開の入口だけを使う・在庫から請求へは依存しない）に絞ります。
>
> 置いた仮定（架空の前提）: 開発 7 人、モジュール 3 つ、JavaScript、各モジュールに `index.js` がある。境界を越える変更で請求が壊れた実績がある。
>
> 選ぶ条件: 変更の手戻りが実際に出ていて、import が静的に読める間は、この検査が合います。
>
> 失うもの: 規則の設定と検査の保守に手間がかかる。境界を引き直すたびに設定を直す。動的な import・パスの別名・`.js` 以外のファイルは拾えず、コメント内の import 風の文は誤検出になる。
>
> 切り替える合図: 次のどちらかのとき、解析の道具を比べ直します（再評価）。規則の追加の要望が四半期に 3 件以上、または、誤検出の報告が四半期に 3 件以上（架空の基準。開発リーダーが四半期の見直しで数える）。規則ファイルが直近 4 週間で 3 回以上変わる状態（架空の基準）なら、検査より先に境界を固めます。
>
> 確かめられないこと: 既存の違反の数と、検査の実行時間は、相談者のコードで測るまで分かりません。規則が実際の障害を減らすかは、ここでは検証していません。

### 検査が失敗したときに添える案内

> 請求から在庫の内部への依存が検出された。在庫の公開の入口（`index.js`）経由に直す。直せない理由があるときは、規則か境界の見直しを、開発リーダーに相談する。

## コード断片

規則を表す設定（JSON。コメントは書けないので、意味は上の仕様に置く）。

- `deps-rules.json`

    ```json
    {
      "root": "src",
      "entry": "index.js",
      "modules": ["billing", "inventory", "ledger"],
      "forbidden": [
        { "from": "inventory", "to": "billing" }
      ]
    }
    ```

違反を出す自己完結のスクリプト（外部のライブラリは使わない）。使い方は `node tools/check-deps.mjs deps-rules.json .`。

- `tools/check-deps.mjs`

    ```javascript
    import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
    import { join, dirname, relative, resolve, sep } from "node:path";

    const [rulesPath, projectDir] = process.argv.slice(2);
    const fail = (msg) => { console.error(`検査失敗: ${msg}`); process.exit(2); };

    try {
      if (!rulesPath || !projectDir) fail("引数が足りない（node check-deps.mjs <規則ファイル> <プロジェクト>）");
      let rules;
      try { rules = JSON.parse(readFileSync(rulesPath, "utf8")); }
      catch (e) { fail(`規則ファイルを読めない（${e.message}）`); }
      const { root, entry, modules, forbidden = [] } = rules;
      if (!root || !entry || !Array.isArray(modules) || modules.length === 0) fail("規則ファイルの項目が足りない");
      const rootDir = resolve(projectDir, root);
      if (!existsSync(rootDir)) fail(`対象のディレクトリが無い: ${rootDir}`);
      for (const m of modules) {
        const d = join(rootDir, m);
        if (!existsSync(d) || !statSync(d).isDirectory()) fail(`modules のディレクトリが無い: ${d}`);
      }

      const walk = (d) => readdirSync(d).flatMap((n) => {
        const p = join(d, n);
        return statSync(p).isDirectory() ? walk(p) : p.endsWith(".js") ? [p] : [];
      });
      const files = walk(rootDir);
      if (files.length === 0) fail("検査する .js が 0 件");

      const moduleOf = (abs) => {
        const rel = relative(rootDir, abs).split(sep);
        return modules.includes(rel[0]) ? { name: rel[0], inner: rel.slice(1).join("/") } : null;
      };
      const pattern = /(?:from\s+|import\s*\(\s*|require\s*\(\s*|import\s+)["']([^"']+)["']/g;
      const violations = [];

      for (const file of files) {
        const own = moduleOf(file);
        if (!own) continue;
        readFileSync(file, "utf8").split("\n").forEach((line, i) => {
          for (const m of line.matchAll(pattern)) {
            if (!m[1].startsWith(".")) continue;
            let target = resolve(dirname(file), m[1]);
            if (!target.endsWith(".js")) target = existsSync(target + ".js") ? target + ".js" : join(target, entry);
            const dest = moduleOf(target);
            if (!dest || dest.name === own.name) continue;
            const where = `${relative(projectDir, file)}:${i + 1}`;
            if (dest.inner !== entry) violations.push(`${where} ${own.name} が ${dest.name} の内部（${dest.inner}）を直接 import している`);
            if (forbidden.some((r) => r.from === own.name && r.to === dest.name)) violations.push(`${where} ${own.name} から ${dest.name} への依存は禁止`);
          }
        });
      }
      violations.forEach((v) => console.log(v));
      console.log(`検査したファイル ${files.length} 件、違反 ${violations.length} 件`);
      process.exit(violations.length > 0 ? 1 : 0);
    } catch (e) {
      fail(`想定外の例外（${e.message}）`);
    }
    ```

読み方（本 skill の整理）: 規則ファイルを読み、`src` 配下の `.js` から相対の import を拾い、相手のモジュールを求める。別のモジュールの `index.js` 以外を指す import と、禁止した向きの import を、ファイルと行つきで出す。import を読む部分は正規表現で、構文解析ではない。

## 初見検証

新しく入った開発者が、規則と検査の結果だけを見て、何を守ればよいかを言えるかを確かめる。

| 読む人 | 言えること | 言えないときの直し方 |
|---|---|---|
| 新しく入った開発者 | 他のモジュールの内部を直接 import せず、`index.js` を通す理由を言える | 目的の一文を規則ファイルの脇の文書に置く |
| 新しく入った開発者 | 検査が失敗したとき、何を直すか（公開の入口へ向ける）と、直せないときの相談先を言える | 失敗に添える案内の文に、直し方と相談先を書く |
| 請求の担当 | 在庫の内部が変わっても、請求が壊れない範囲を言える | 公開の入口に出す関数を、在庫の側で決めて書く |
| 開発リーダー | 規則を見直す時期と、見直しの基準（違反の件数・規則の追加の要望）を言える | 仕様の表の頻度と担当を、リーダーの作業の一覧に移す |

## 点検

- 構造の目標が 1 文で書かれ、規則が目標に対応している（本 skill の整理）
- 規則の意味が明示され、検査が自動で動く（S051 は「適合」の意味を明示し、できる限り自動化すると述べる）
- 検査が、違反を終了コード 1、検査自体の失敗を 2 に分け、失敗を「違反なし」として扱わない
- 検査が拾えないもの（動的 import・パスの別名・`.js` 以外のファイル）と、誤検出するもの（コメント内の import 風の文）が、限界として書かれている
- 既存の違反が、CI を必須にする前に直されている。直せないものは、規則か境界の見直しに回っている
- 規則の見直しに、測り方・基準・担当・時期がある（違反件数の推移と規則の追加の要望の件数。閾値は架空）
- 違反 0 が、規則 2 つについての代理であり、目的全体への適合ではないと書かれている
- 入れない条件が書かれ、検査を一律に求めていない
- 適応度関数の語の説明が S052 に、規則と検査の方法が本 skill の整理に分けて帰属されている
- 推測の明示: 人数・モジュール・期限は例の設定。性能・障害の減少は実測していない

## この例の出典

S051、S052。台帳は [出典台帳](../references/sources.md)。

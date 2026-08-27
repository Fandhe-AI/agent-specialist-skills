// init-claude-specialist の構造回帰テスト。
// CI の skill-tests ジョブ（.github/workflows/ci.yml）は
// `skills/*/tests/**/*.test.mjs` を failglob 前提で探すため、このリポジトリに
// 1 本もテストが無いとグロブ展開自体が失敗してジョブが落ちる。sample-skill 撤去後の
// 唯一のスキルである init-claude-specialist に、SKILL.md と sample/ 雛形の
// 構成崩れ（frontmatter 欠落・雛形ファイル消失・既定値記述の欠落）を検出する
// 回帰テストとして配置する。
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const skillDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skillMdPath = path.join(skillDir, "SKILL.md");
const skillMd = readFileSync(skillMdPath, "utf8");

// SKILL.md の frontmatter（1 個目と 2 個目の `---` の間）のみを取り出す。
// 本文側に同名の語（例: 見出しの「model」）が出ても frontmatter 検証に混ざらないようにする。
function extractFrontmatter(md) {
  const lines = md.split("\n");
  assert.equal(lines[0], "---", "1 行目が '---' で始まっていない");
  const end = lines.indexOf("---", 1);
  assert.notEqual(end, -1, "frontmatter を閉じる '---' が見つからない");
  return lines.slice(1, end).join("\n");
}

// 雛形ファイル（sample/specialist-agent-template.md）は説明文の後に
// ```markdown フェンスで agent 本体（frontmatter 込み）を埋め込む構成。
// フェンス内のみを対象にしないと、説明文中の語句が frontmatter 検証に混ざる。
function extractFirstMarkdownFence(md) {
  const match = md.match(/```markdown\n([\s\S]*?)\n```/);
  assert.ok(match, "```markdown コードフェンスが見つからない");
  return match[1];
}

// frontmatter の `tools:` フィールドの値を、ブロックリスト形式
// (`tools:\n  - Read\n  - Bash`) とフロー形式 (`tools: [Read, Bash]`) の
// 両方に対応して抽出し、Set で返す。行頭の `- ` グレップ単独では
// フロー形式や tools 以外の箇所（本文の箇条書き等）を見落とす／誤検出するため、
// 必ず `tools:` 行を起点にどちらの表記かを判定してから走査する。
function parseToolsSet(fm) {
  const lines = fm.split("\n");
  const toolsIdx = lines.findIndex((line) => /^tools:/.test(line));
  assert.notEqual(toolsIdx, -1, "frontmatter に 'tools:' が無い");

  const stripInlineCommentAndQuotes = (s) =>
    s
      .replace(/#.*$/, "") // YAML インラインコメント（`# ...`）を除去
      .trim()
      .replace(/^["']|["']$/g, ""); // 前後の引用符を除去

  const inlineValue = lines[toolsIdx].replace(/^tools:\s*/, "").trim();
  let rawItems;
  if (inlineValue.startsWith("[")) {
    // フロー形式: `tools: [Read, Glob, ...]`
    const flowMatch = inlineValue.match(/^\[([\s\S]*?)\]/);
    assert.ok(flowMatch, `tools のフロー形式が閉じていない: ${inlineValue}`);
    rawItems = flowMatch[1].split(",");
  } else {
    // ブロック形式: 次行以降の `- ` 始まり行を、該当パターンが途切れるまで収集
    rawItems = [];
    for (let i = toolsIdx + 1; i < lines.length; i += 1) {
      const itemMatch = lines[i].match(/^\s*-\s*(.+)$/);
      if (!itemMatch) break;
      rawItems.push(itemMatch[1]);
    }
  }

  const cleaned = rawItems.map(stripInlineCommentAndQuotes).filter((s) => s.length > 0);
  assert.ok(cleaned.length > 0, "tools フィールドから値を抽出できなかった");
  return new Set(cleaned);
}

test("SKILL.md の frontmatter に name / description / user-invocable が揃っている", () => {
  const fm = extractFrontmatter(skillMd);
  assert.match(fm, /^name:\s*init-claude-specialist\s*$/m);
  assert.match(fm, /^description:/m);
  assert.match(fm, /^user-invocable:\s*true\s*$/m);
});

test("SKILL.md 本文が既定 model/effort（sonnet / low）に言及している", () => {
  // Step 3 のフィールド表・「注意事項」節の記述。既定値が変わった場合はここも
  // 追随させる必要があるため、具体的な語で固定する。
  assert.match(skillMd, /既定\s*`sonnet`/);
  assert.match(skillMd, /既定\s*`low`/);
});

const sampleFiles = [
  "sample/specialist-agent-template.md",
  "sample/specialist-delegation-template.md",
  "sample/specialist-skill-example.md",
];

for (const rel of sampleFiles) {
  test(`sample 雛形が存在する: ${rel}`, () => {
    assert.ok(existsSync(path.join(skillDir, rel)), `${rel} が見つからない`);
  });
}

test("specialist-agent-template.md に agent frontmatter の必須フィールドが揃っている", () => {
  const tpl = readFileSync(path.join(skillDir, "sample/specialist-agent-template.md"), "utf8");
  const fence = extractFirstMarkdownFence(tpl);
  const fm = extractFrontmatter(fence);

  assert.match(fm, /^name:\s*\{\{name\}\}\s*$/m);
  assert.match(
    fm,
    /^description:\s*".*\{\{skill_description_summary\}\}.*\{\{trigger_phrases\}\}.*"\s*$/m,
  );
  assert.match(fm, /^model:\s*\{\{specialist_model_or_default_sonnet\}\}\s*$/m);
  assert.match(fm, /^effort:\s*\{\{specialist_effort_or_default_low\}\}\s*$/m);

  // 相談用途の読み取り専用 agent を作る設計のため、tools は許可リストの完全一致のみ許容する
  // （init-claude-specialist SKILL.md「注意事項」節・agent-authoring.md の最小権限方針）。
  // ブロック形式の `- Bash` 単独行グレップでは `tools: [Read, Bash]` のようなフロー形式や
  // 許可ツールへの誤字混入（例: `Read2`）を見落とすため、フィールド値全体を集合として
  // 抽出し、許可リストとの集合一致（過不足なし）で検証する。
  const allowedTools = new Set(["Read", "Glob", "Grep", "WebFetch", "WebSearch"]);
  const actualTools = parseToolsSet(fm);
  assert.equal(
    actualTools.size,
    allowedTools.size,
    `tools の件数が許可リストと不一致: [${[...actualTools].join(", ")}]`,
  );
  for (const tool of allowedTools) {
    assert.ok(actualTools.has(tool), `tools に必須ツール ${tool} が含まれていない`);
  }
  for (const tool of actualTools) {
    assert.ok(allowedTools.has(tool), `tools に許可外のツール ${tool} が含まれている`);
  }
});

test("specialist-skill-example.md の見本 frontmatter が specialist 規約に沿っている", () => {
  const example = readFileSync(path.join(skillDir, "sample/specialist-skill-example.md"), "utf8");
  assert.match(example, /^specialist:\s*true\s*$/m);
  assert.match(example, /^specialist-model:/m);
  assert.match(example, /^specialist-effort:/m);
});

test("specialist-delegation-template.md が委譲先マッピング表とプレースホルダを含む", () => {
  const delegation = readFileSync(
    path.join(skillDir, "sample/specialist-delegation-template.md"),
    "utf8",
  );
  assert.match(delegation, /subagent_type/);
  assert.match(delegation, /\{\{name\}\}/);
});

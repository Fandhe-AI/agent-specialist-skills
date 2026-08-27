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
  assert.match(tpl, /^model:\s*\{\{specialist_model_or_default_sonnet\}\}\s*$/m);
  assert.match(tpl, /^effort:\s*\{\{specialist_effort_or_default_low\}\}\s*$/m);
  assert.match(tpl, /^tools:/m);
  // 相談用途の読み取り専用 agent を作る設計のため、編集系ツールを許容しない
  // （init-claude-specialist SKILL.md「注意事項」節・agent-authoring.md の最小権限方針）。
  for (const forbidden of ["Edit", "Write", "Bash"]) {
    assert.doesNotMatch(
      tpl,
      new RegExp(`^\\s*-\\s*${forbidden}\\s*$`, "m"),
      `${forbidden} が tools に含まれてはならない`,
    );
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

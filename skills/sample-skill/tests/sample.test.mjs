// sample-skill の最小テスト。
//
// CI の skill-tests ジョブ（`node --test skills/*/tests/*.test.mjs`）が
// 「テスト 0 件」で fail-open しないための自明なアサーションであり、
// スキルの挙動は何も検証していない。実スキルではこのファイルを置換し、
// scripts/ 配下のスクリプトに対する回帰テストを置く。
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('sample-skill: テストハーネスが動作する', () => {
  assert.equal(1 + 1, 2);
});

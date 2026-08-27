// commitlint 設定。
//
// CI では Fandhe-AI/actions の lint-docs reusable workflow（commitlint）が
// `--extends @commitlint/config-conventional` 付きで PR の commit 範囲を検証し、
// 本ファイルのルールが extends 側を上書きする。
export default {
  rules: {
    // 日本語 subject は「Bugbot 指摘を修正」「Review を push 前に実行」のように
    // 英大文字始まりの固有名詞・識別子で始まることが多く、config-conventional の
    // subject-case（sentence-case 等の禁止）と構造的に衝突する。
    // 大文字小文字の検査は無効化する
    'subject-case': [0],
  },
};

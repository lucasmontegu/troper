/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@troper/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

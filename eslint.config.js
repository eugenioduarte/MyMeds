// eslint.config.js
const { ESLint } = require("eslint");

module.exports = new ESLint({
  baseConfig: {
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
  ignorePatterns: ["node_modules/", "build/", "dist/"],
});

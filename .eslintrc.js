module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "no-console": "error",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "no-debugger": "warn",
    "prettier/prettier": ["error", { singleQuote: true, trailingComma: "es5" }],
  },
};

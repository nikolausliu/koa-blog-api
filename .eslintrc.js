module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    // parser: "babel-eslint",
    ecmaVersion: 2017,
  },
  extends: ["prettier", "plugin:prettier/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    "no-console": "off",
    camelcase: "off",
  },
};

module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
    node: 1,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    BigInt: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'linebreak-style': ["error", "windows"],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "use-isnan": ["error", {"enforceForSwitchCase": true}],
  },
  
};

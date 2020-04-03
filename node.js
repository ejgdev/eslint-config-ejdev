module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    es2017: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    curly: 'error',
    'brace-style': ['error', '1tbs', {
      allowSingleLine: false,
    }],
    'object-curly-newline': ['error', 'always'],
  },
};

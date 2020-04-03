module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    es2017: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb'],
  plugins: ['react', 'import'],
  rules: {
    'react/jsx-filename-extension': ['off'],
    'linebreak-style': ['off'],
    'no-undef': ['error'],
    'react/sort-comp': ['off'],
    'react/prefer-stateless-function': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
  },
};

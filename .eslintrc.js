module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': 'off',
    'require-jsdoc': 'off',
    'no-trailing-spaces': 'off',
    'operator-linebreak': 'off',
    'max-len': 'off',
    'object-curly-spacing': 'off',
    'indent': 'off',
    'quote-props': 'off',
  },
};

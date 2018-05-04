'use strict';

module.exports = {
  parser: "babel-eslint",
  extends: ['@exeto/eslint-config/node', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};

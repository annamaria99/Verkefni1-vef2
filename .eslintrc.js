module.exports = {
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'linebreak-style': 0,
  },
};

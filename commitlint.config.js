module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [0, 'always', 100]  // Disable or increase the limit
  },
  ignores: [(commit) => commit.includes('[skip ci]')]
};
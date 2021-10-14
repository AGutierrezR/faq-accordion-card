module.exports = {
  env: {
    commonjs: true,
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    indent: ['warn', 2],
    'linebreak-style': ['warn', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'no-console': ['warn'],
    'no-debugger': ['warn'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', args: 'all' }],
    'no-empty': ['warn', { allowEmptyCatch: true }],
  },
}

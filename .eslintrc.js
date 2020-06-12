module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    indent: [2, 2],
    'linebreak-style': ['error', 'windows'],
    // 'linebreak-style': 'off',
    'no-tabs': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'always',
      asyncArrow: 'always',
    }],
    'func-names': ['error', 'never'],
    'object-shorthand': ['error', 'never'],
    'no-await-in-loop': 'error',
    'no-dupe-args': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-unused-vars': 'error',
    'require-await': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};

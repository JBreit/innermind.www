module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'airbnb',
    "plugin:import/typescript",
  ],
  // globals: {
  //   Atomics: 'readonly',
  //   SharedArrayBuffer: 'readonly',
  // },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true
    }
  },
  plugins: [
    'import',
    'react'
  ],
  root: true,
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    "import/prefer-default-export": 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/extensions': ['error', 'never'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'linebreak-style': [
      'error',
      process.env.NODE_ENV === 'production' ? 'unix' : 'windows'
    ],
    'no-alert': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-dynamic-require": 0,
    'no-underscore-dangle': ['error', { 'allow': ['__public', '_session'] }],
    'no-unused-vars': ['error', { 'args': 'none' }],
    'react/jsx-filename-extension': [
      'error',
      {
        'extensions': [
          '.js',
          'jsx',
          '.ts',
          '.tsx'
        ]
      }
    ]
  },
};

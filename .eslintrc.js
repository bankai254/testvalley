module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/main/examples/.eslintrc.js
        groups: [
          // `react` related packages come first.
          ['^react'],
          // Internal packages.
          ['^@jobandtalent?\\w'],
          // External packages.
          ['^@?\\w'],
          // Aliased commonly used directories.
          [
            '^(api|assets|common|components|locales|mocks|pages|src|services|state|styles|types|utils)(/.*|$)'
          ],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports, `.` and style imports last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$', '^.+\\.s?css$']
        ]
      }
    ],
    'simple-import-sort/exports': 'error',
    'no-console': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
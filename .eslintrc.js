module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 130,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
        endOfLine: 'auto',
      },
      {
        usePrettierrc: false,
      },
    ],
    'constructor-super': 'off',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    'react/no-children-prop': 'off',
    'prefer-const': 'off',
    'no-unexpected-multiline': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'no-console': 'warn',
    '@typescript-eslint/no-misused-promises': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'no-restricted-syntax': [
      'warn',
      {
        selector: "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error)$/]",
        message: 'O uso do console.log só é permitido durante o debug. Para realizar o commit remova o console.log',
      },
    ],
  },
}

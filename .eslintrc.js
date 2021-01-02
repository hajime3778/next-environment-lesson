module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    // 'no-restricted-imports': ['error', { paths: [{ name: 'react', importNames: ['default'] }] }],
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      { components: ['Link'], specialLink: ['hrefLeft', 'hrefRight'], aspects: ['invalidHref', 'preferButton'] },
    ],
  },
};

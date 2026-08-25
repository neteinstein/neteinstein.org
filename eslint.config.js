import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default defineConfig([
  globalIgnores(['dist/**', '.astro/**', '.crawl/**', 'node_modules/**']),

  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  astro.configs['jsx-a11y-recommended'],

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: { ...globals.browser },
    },
    plugins: { 'jsx-a11y': jsxA11y },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },

  {
    files: ['scripts/**/*.mjs'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
]);

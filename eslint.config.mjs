// eslint.config.mjs
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
  // Which files to lint + ignores
  {
    files: ['**/*.js'],
    ignores: ['node_modules', 'dist'],
  },

  // ESLint recommended rules
  eslint.configs.recommended,

  // Jest support
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },

  // Prettier as ESLint plugin
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },

    rules: {
      'prettier/prettier': 'error', // Prettier errors = ESLint errors
    },
  },

  // Disable conflicting ESLint style rules
  prettier,
]);

import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  // Global ignore
  {
    ignores: ['dist/**/*', '.astro/**/*', 'node_modules/**/*'],
  },

  // Astro Recommended
  ...eslintPluginAstro.configs.recommended,

  // Custom Rules
  {
    files: ['**/*.astro', '**/*.js', '**/*.mjs', '**/*.ts'],
    plugins: {
      '@typescript-eslint': tseslint,
    },
    languageOptions: {
      parserOptions: {
        parser: tsparser,
      },
    },
    rules: {
      'astro/no-set-html-directive': 'warn',
    },
  },
];

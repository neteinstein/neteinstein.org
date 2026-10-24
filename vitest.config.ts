import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Playwright owns `tests/e2e` (`npm run test:e2e`).
    include: ['tests/unit/**/*.test.ts', 'tests/i18n/**/*.test.ts'],
  },
});

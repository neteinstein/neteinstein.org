import { defineConfig, devices } from '@playwright/test';

/**
 * Browser smoke tests over the built site: `npm run build`, then
 * `npm run test:e2e` serves `dist/` with `astro preview` and checks that the
 * islands actually hydrate and work. Unit tests live in `vitest.config.ts`.
 */
export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: {
    baseURL: 'http://127.0.0.1:4321',
    trace: 'retain-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    // Astro 7's preview daemonizes itself; the wrapper keeps a foreground
    // process for Playwright and stops the daemon on SIGTERM.
    command: 'node scripts/e2e-server.mjs',
    url: 'http://127.0.0.1:4321',
    reuseExistingServer: !process.env.CI,
    gracefulShutdown: { signal: 'SIGTERM', timeout: 5000 },
  },
});

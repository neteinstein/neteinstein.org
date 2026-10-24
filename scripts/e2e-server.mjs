/**
 * Foreground wrapper around `astro preview` for Playwright's `webServer`.
 *
 * Astro 7's preview server daemonizes itself and the launcher exits, which
 * Playwright reads as the server dying. This script starts the daemon, stays
 * in the foreground while tests run, and stops the daemon when Playwright
 * shuts it down (SIGTERM — see `gracefulShutdown` in `playwright.config.ts`).
 */
import { spawnSync } from 'node:child_process';

const preview = (...args) => spawnSync('npx', ['astro', 'preview', ...args], { stdio: 'inherit' });

const started = preview('--host', '127.0.0.1', '--port', '4321');
if (started.status !== 0) process.exit(started.status ?? 1);

const stop = () => {
  preview('stop');
  process.exit(0);
};
process.on('SIGTERM', stop);
process.on('SIGINT', stop);

// Keep the foreground process alive while the daemon serves.
setInterval(() => {}, 2 ** 30);

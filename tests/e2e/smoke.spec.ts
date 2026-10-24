import { expect, test } from '@playwright/test';

/**
 * Smoke tests for the pieces that only break in a real browser: island
 * hydration, the inline theme/language scripts, and the search-and-filter
 * guides. Content is asserted structurally, never by copy, so wording changes
 * don't break them.
 */

test('the home page renders with the site title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Pedro Vicente/);
  await expect(page.locator('main')).toBeVisible();
});

test('the theme toggle switches to dark and the choice survives a reload', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Switch to dark theme' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('the header language switch opens the Portuguese page and is remembered', async ({ page }) => {
  await page.goto('/');
  await page.locator('a[data-set-locale="pt"]').first().click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-PT');
  expect(await page.evaluate(() => localStorage.getItem('lang'))).toBe('pt');
});

test.describe('a browser that prefers Portuguese', () => {
  test.use({ locale: 'pt-PT' });

  test('is redirected to /pt on its first visit', async ({ page }) => {
    await page.goto('/');
    await page.waitForURL(/\/pt([/.]|$)/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt-PT');
  });
});

test('the Porto guide search filters the places', async ({ page }) => {
  await page.goto('/porto/visit-porto');

  // `client:visible` — scroll the guide into view and wait for it to hydrate.
  const island = page.locator('astro-island', { has: page.locator('[data-place-guide]') });
  const search = page.locator('[data-place-guide] input[type="search"]');
  await search.scrollIntoViewIfNeeded();
  await expect(island).not.toHaveAttribute('ssr', { timeout: 15_000 });

  const count = page.locator('[data-place-guide] p[aria-live]').first();
  const total = Number((await count.innerText()).split('/')[1]?.trim());
  expect(total).toBeGreaterThan(0);

  await search.fill('zzz-no-such-place');
  await expect(count).toContainText(`0 / ${total}`);

  await search.fill('');
  await expect(count).toContainText(`${total} / ${total}`);
});

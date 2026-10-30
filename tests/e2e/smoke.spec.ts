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

test.describe('the feedback talk deck on /what-i-do/improver', () => {
  test('steps through its slides, opening reveals before moving on', async ({ page }) => {
    await page.goto('/what-i-do/improver');
    const deck = page.locator('[data-deck]');
    const slides = deck.locator('[data-deck-slide]');
    const counter = deck.locator('[data-deck-current]');
    const next = deck.locator('[data-deck-next]');
    const total = await slides.count();
    expect(total).toBeGreaterThan(1);

    // The controls only show up once the script has wired them.
    await expect(next).toBeVisible();
    await expect(counter).toHaveText('1');

    await deck.locator('[data-deck-track]').focus();
    await page.keyboard.press('End');
    await expect(counter).toHaveText(String(total));
    await page.keyboard.press('Home');
    await expect(counter).toHaveText('1');

    const tab = deck.locator('[data-deck-go]').last();
    await tab.click();
    await expect(counter).toHaveText(String(Number(await tab.getAttribute('data-deck-go')) + 1));
    await expect(tab).toHaveAttribute('aria-current', 'true');

    const revealing = await slides.evaluateAll((all) =>
      all.findIndex((slide) => slide.querySelector('details[data-deck-reveal]')),
    );
    expect(revealing).toBeGreaterThanOrEqual(0);
    await deck
      .locator('[data-deck-track]')
      .evaluate(
        (track, i) => track.scrollTo({ left: i * track.clientWidth, behavior: 'instant' }),
        revealing,
      );
    await expect(counter).toHaveText(String(revealing + 1));

    const reveals = slides.nth(revealing).locator('details[data-deck-reveal]');
    const pending = await reveals.count();
    for (let i = 0; i < pending; i++) await next.click();
    await expect(reveals.and(page.locator('[open]'))).toHaveCount(pending);
    await expect(counter).toHaveText(String(revealing + 1));

    await next.click();
    await expect(counter).toHaveText(String(revealing + 2));
  });

  test('recomputes the session length for the team size', async ({ page }) => {
    await page.goto('/what-i-do/improver');
    const timer = page.locator('[data-deck-timer]');
    const total = timer.locator('[data-deck-total]');
    const slider = timer.locator('input[type="range"]');

    await timer.evaluate((node) => node.closest('[data-deck-slide]')?.scrollIntoView());
    const before = await total.innerText();
    await slider.fill((await slider.getAttribute('max')) ?? '');
    await expect(total).not.toHaveText(before);
  });
});

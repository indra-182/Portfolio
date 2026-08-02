import { test, expect } from '@playwright/test';

async function isDark(page: import('@playwright/test').Page) {
  return page.locator('html').evaluate((el) => el.classList.contains('dark'));
}

test('theme toggle switches to dark mode', async ({ page }) => {
  await page.goto('/');
  const btn = page.locator('button[aria-label*="Switch to"]');
  await expect(btn).toBeVisible();

  const before = await isDark(page);
  await btn.click();
  const after = await isDark(page);
  expect(after).toBe(!before);
});

test('toggle icon has visible color in dark mode', async ({ page }) => {
  await page.goto('/');
  const html = page.locator('html');
  await html.evaluate((el) => el.classList.add('dark'));

  const btn = page.locator('button[aria-label*="Switch to"]');
  const color = await btn.evaluate((el) => getComputedStyle(el).color);
  const bg = await btn.evaluate((el) => getComputedStyle(el).backgroundColor);

  expect(color).not.toBe('rgb(0, 0, 0)');
  expect(color).not.toBe(bg);
});

test('nav link text visible in dark mode', async ({ page }) => {
  await page.goto('/');
  const html = page.locator('html');
  await html.evaluate((el) => el.classList.add('dark'));

  const link = page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', {
    name: 'About',
  });
  const color = await link.evaluate((el) => getComputedStyle(el).color);
  expect(color).not.toBe('rgb(0, 0, 0)');
});

test('section title visible in dark mode', async ({ page }) => {
  await page.goto('/');
  const html = page.locator('html');
  await html.evaluate((el) => el.classList.add('dark'));

  const title = page.getByRole('heading', { name: 'A practical stack for complex products.' });
  const color = await title.evaluate((el) => getComputedStyle(el).color);
  expect(color).not.toBe('rgb(0, 0, 0)');
});

test('body has theme-aware background and text color', async ({ page }) => {
  await page.goto('/');
  const html = page.locator('html');
  const body = page.locator('body');

  await html.evaluate((el) => el.classList.add('dark'));
  let bg = await body.evaluate((el) => getComputedStyle(el).backgroundColor);
  let text = await body.evaluate((el) => getComputedStyle(el).color);
  expect(bg).not.toBe(text);
  expect(text).not.toBe('rgb(0, 0, 0)');

  await html.evaluate((el) => el.classList.remove('dark'));
  bg = await body.evaluate((el) => getComputedStyle(el).backgroundColor);
  text = await body.evaluate((el) => getComputedStyle(el).color);
  expect(bg).not.toBe(text);
  expect(text).not.toBe('rgb(0, 0, 0)');
});

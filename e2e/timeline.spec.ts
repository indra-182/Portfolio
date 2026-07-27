import { test, expect } from '@playwright/test';

test('timeline dot centered on border line', async ({ page }) => {
  await page.goto('/');
  const section = page.locator('#experience');
  await section.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);

  const borderLine = section.locator('> div > .border-l');
  const firstDot = section.locator('span.rounded-full.border-2.border-bg').first();

  const borderBox = await borderLine.boundingBox();
  const dotBox = await firstDot.boundingBox();

  expect(borderBox).not.toBeNull();
  expect(dotBox).not.toBeNull();

  const borderLeft = borderBox!.x;
  const dotCenterX = dotBox!.x + dotBox!.width / 2;

  expect(Math.abs(dotCenterX - borderLeft)).toBeLessThan(2);
});

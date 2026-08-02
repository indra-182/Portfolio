import { test, expect } from '@playwright/test';

test('experience presents the employer-led story and project evidence', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Delivery experience across the stack.' }),
  ).toBeVisible();
  await expect(page.getByRole('heading', { name: /Software Engineer \| Frontend Engineer/ })).toBeVisible();
  await expect(page.locator('#experience')).toContainText('Petron Philippines');
  await expect(page.locator('#experience')).toContainText('10,000 transaction records');
});

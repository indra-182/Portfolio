import { test, expect } from '@playwright/test';

test('homepage exposes the recruiter-first path', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1, name: /Mahadi Indra Manurung/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /View selected work/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Download CV/ }).first()).toHaveAttribute(
    'href',
    '/resume.pdf',
  );
  await expect(page.getByRole('link', { name: /View case study/ })).toHaveCount(4);
});

test('hero shows the supplied portrait and footer keeps résumé placement focused', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByAltText('Mahadi Indra Manurung, a frontend engineer, seated outdoors'),
  ).toBeVisible();
  await expect(page.locator('#hero').getByRole('link', { name: 'Download CV' })).toHaveAttribute(
    'href',
    '/resume.pdf',
  );
  await expect(page.locator('#contact').getByRole('link', { name: /Download CV/ })).toHaveAttribute(
    'href',
    '/resume.pdf',
  );
  await expect(page.locator('footer').getByRole('link', { name: /Download CV/ })).toHaveCount(0);
});

test('pointer glow follows fine-pointer movement without intercepting input', async ({ page }) => {
  await page.goto('/');

  const glow = page.locator('[data-pointer-glow]');
  await expect(glow).toHaveAttribute('data-enabled', 'true');
  await expect(glow).toHaveCSS('pointer-events', 'none');

  await page.mouse.move(120, 180);
  await expect.poll(() => glow.evaluate((element) => element.dataset.active)).toBe('true');
  await expect
    .poll(() => glow.evaluate((element) => getComputedStyle(element).getPropertyValue('--pointer-x')))
    .toBe('120px');

  await page.mouse.move(640, 320);
  await expect
    .poll(() => glow.evaluate((element) => getComputedStyle(element).getPropertyValue('--pointer-x')))
    .toBe('640px');
});

test('pointer glow stays inactive for reduced motion and coarse pointers', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');

  const reducedMotionGlow = page.locator('[data-pointer-glow]');
  await expect(reducedMotionGlow).toHaveAttribute('data-enabled', 'false');
  await page.mouse.move(200, 200);
  await expect(reducedMotionGlow).toHaveAttribute('data-active', 'false');

  await page.addInitScript(() => {
    const nativeMatchMedia = window.matchMedia.bind(window);
    window.matchMedia = (query) => {
      const mediaQueryList = nativeMatchMedia(query);
      if (query === '(pointer: fine)') {
        Object.defineProperty(mediaQueryList, 'matches', { configurable: true, value: false });
      }
      return mediaQueryList;
    };
  });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.reload();

  const coarsePointerGlow = page.locator('[data-pointer-glow]');
  await expect(coarsePointerGlow).toHaveAttribute('data-enabled', 'false');
  await page.mouse.move(300, 300);
  await expect(coarsePointerGlow).toHaveAttribute('data-active', 'false');
});

test('featured project opens a static case study', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: /Petron Corporate Dashboard/ }).click();

  await expect(page).toHaveURL(/\/projects\/petron-corporate-dashboard$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Petron Corporate Dashboard' })).toBeVisible();
  await expect(page.getByText('up to 10,000 transaction records per batch')).toBeVisible();
  await expect(page.getByRole('link', { name: /Back to selected work/ })).toBeVisible();
});

test('section rail links return to the homepage from a case study', async ({ page }) => {
  await page.goto('/projects/petron-corporate-dashboard');

  const primaryNavigation = page.getByRole('navigation', { name: 'Primary navigation' });
  await expect(primaryNavigation.getByRole('link', { name: 'Home' })).not.toHaveAttribute(
    'aria-current',
    'location',
  );
  await primaryNavigation.getByRole('link', { name: 'Work' }).click();

  await expect(page).toHaveURL(/\/#projects$/);
});

test('mobile navigation opens and closes with an accessible disclosure', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const menuButton = page.getByRole('button', { name: /navigation menu/ });
  await menuButton.click();
  await expect(page.getByRole('button', { name: 'Close navigation menu' })).toHaveAttribute(
    'aria-expanded',
    'true',
  );
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toHaveCSS(
    'position',
    'fixed',
  );
  await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');

  await page
    .getByRole('navigation', { name: 'Mobile navigation' })
    .getByRole('link', { name: 'Work' })
    .click();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeHidden();
  await expect(page.getByRole('button', { name: /navigation menu/ })).toHaveAttribute(
    'aria-expanded',
    'false',
  );
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
});

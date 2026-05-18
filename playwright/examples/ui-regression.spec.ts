import { test, expect } from '@playwright/test';

test('landing page visual snapshot', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('landing.png', {
    maxDiffPixelRatio: 0.02,
  });
});

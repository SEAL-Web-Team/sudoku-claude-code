import { test, expect } from '@playwright/test';

test('homepage has a visible heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('can follow the more information link', async ({ page }) => {
  await page.goto('/');
  const link = page.getByRole('link', { name: /more information/i });
  await expect(link).toBeVisible();
});

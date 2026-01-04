import { expect, test } from '@playwright/test';

test.describe('Races page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display a race list', async ({ page }) => {
    await expect(page.locator('h2')).toHaveCount(2);
  });
});

import { test, expect } from '@playwright/test';

test('fb page', async ({ page }) => {
  await page.goto('https://www.facebook.com');
  await expect(page).toHaveURL('https://www.facebook.com');
  
});



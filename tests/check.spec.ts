import { test, expect } from '@playwright/test';

test('TC_01 - Login with valid username and valid password', async ({ page }) => {

  // Navigate to OrangeHRM Login Page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  const title= await page.title();
  console.log(title);
  expect(title).toBe('OrangeHRM');
await expect(page).toHaveTitle('OrangeHRM');
  // Wait for login page to load
  await page.waitForLoadState('networkidle');

  // Enter Username
  await page.locator('input[name="username"]').fill('Admin');

  // Enter Password
  await page.locator('input[name="password"]').fill('admin123');

  // Click Login Button
  await page.locator('button[type="submit"]').click();

  // Verify user is redirected to Dashboard
  await expect(page).toHaveURL(/dashboard/);

  // Verify Dashboard heading is visible
  await expect(
    page.locator('//h6[text()="Dashboard"]')
  ).toBeVisible();

});
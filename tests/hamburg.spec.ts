import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('//input[@placeholder="Username"]').fill('standard_user');
  await page.locator('//input[@placeholder="Password"]').fill('secret_sauce');
  await page.waitForSelector('//input[@id="login-button"]');
  await page.locator('//input[@id="login-button"]').click();
  await page.waitForLoadState('load');
  await page.locator('//button[@id="react-burger-menu-btn"]').click();
  await page.locator('//a[@data-test="dynamic-catalog-sidebar-link"]').click();
});
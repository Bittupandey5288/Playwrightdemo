import { test, expect } from '@playwright/test';

test('fb page', async ({ page }) => {
  test.slow();
  await page.goto('https://www.flipkart.com/');
  //await page.hover("//a[@title='Login']");
  //await page.locator("div").filter({hasText:'Mobiles'}).click();
  await page.locator("//div[text()='Mobiles']").click();
  //await page.locator("//div[text()='My Profile']").click();
  //await page.locator("//span[contains(text(),'Enter Email')]").fill("bittu");
  //await page.locator("button").filter({hasText:'Request OTP'}).click();
  await page.waitForTimeout(6000);
  await page.close();
  
});



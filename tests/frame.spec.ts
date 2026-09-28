import { test, expect } from '@playwright/test';
test.only("Frame",async({page})=>{
     await page.goto("https://practice-automation.com/iframes/");
     const frame1= await page.frameLocator('//iframe[@id="iframe-1"]').locator('//a[text()="Docs"]').click();
     await page.waitForTimeout(3000);
     const HomePage= page.locator('//a[text()="Home"]');
     await expect(HomePage).toBeVisible();
     await HomePage.click()
     await page.waitForTimeout(3000);
     await page.close();
    })
import { test, expect } from '@playwright/test';
test("Multi Tab",async({page,context})=>{
     await page.goto("https://testautomationpractice.blogspot.com/");
     page.locator('//button[@onclick="onclick"]').click();
    //  const [newpage]=await Promise.all([
    //   context.waitForEvent('page'),
    //   page.locator('//button[@onclick="onclick"]').click()
    //  ]);
    //  await newpage.waitForLoadState("load");
    //  await expect(newpage.locator('//ul//li//a',{hasText:'Online Training'})).toBeVisible();
    //  await page.bringToFront();
    //  await page.waitForTimeout(5000);
    })

//You should not use await inside Promise.all(). The purpose of Promise.all() is to start both operations concurrently.
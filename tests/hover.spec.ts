import {test,expect} from '@playwright/test'
test('dropdow',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('div.dropdown').hover();
    // await page.waitForTimeout(30000);
     page.close() ;
})
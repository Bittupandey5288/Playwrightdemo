import {test,expect} from '@playwright/test';
test.only('Dropdown handle ',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
        await dialog.accept();
    })   
   await page.locator('button',{hasText:'Simple Alert'}).click();
   await page.waitForTimeout(3000);  
})
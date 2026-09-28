import {test,expect} from '@playwright/test';
test("Dialog",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async di=>{
      console.log(di.type())
      console.log(di.message())
      di.accept()// click on ok button of alert box
    })
    await page.locator('//button[contains(text(),"Simple Alert")]').click();
    await page.waitForTimeout(3000);
})
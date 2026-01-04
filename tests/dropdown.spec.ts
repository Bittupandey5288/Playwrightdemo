import {test,expect} from '@playwright/test'
test('dropdow',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#country').selectOption({value:'canada'});

     page.close();
})
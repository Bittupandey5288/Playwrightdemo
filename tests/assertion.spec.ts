import {test,expect} from '@playwright/test';
test .describe('Assertion',async()=>{

    test('Assertion check',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle("Automation Testing Prictice");
})
})


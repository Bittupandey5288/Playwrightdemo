import{test,expect} from '@playwright/test';

test("Reporter check",async({page})=>{
    await page.goto("https://sauce-demo.myshopify.com/account/login");

})
test("Reporter check2",async({page})=>{
    console.log("hello");

})
test("Reporter check3",async({page})=>{
    test.fail();
    console.log("hello");

})
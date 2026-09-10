import{test,expect} from '@playwright/test'
// test("oumtech",async({page})=>{
//     await page.goto('https://oumtech.com/');
//     await page.getByRole('link',{name:'Services & Solutions'}).hover();
//     //await page.getByRole('link',{name:'Solutions'}).hover();
//     await page.locator('a[class="hfe-sub-menu-item"]').first().hover();
//     await page.waitForLoadState('load');
//     await page.locator('a[class="hfe-sub-menu-item"]').nth(1).click();
//     await page.pause();

// })
test("",async({page})=>{
    await page.goto('https://oumtech.com/');
    //await page.locator('a>span>span').filter({hasText:'Get Started'}).first().click();
    await page.locator('a>span>span',{hasText:'Get Started'}).first().click();
    await page.pause();
    

})
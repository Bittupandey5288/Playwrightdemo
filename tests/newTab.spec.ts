import{test,expect,chromium} from '@playwright/test';
test.only("handling multitab",async()=>{
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
const [newpage]= await Promise.all([
    context.waitForEvent('page'),
    page.locator("//a[contains(text(),'OrangeHRM, Inc')]").click()
])
// const pagePromise=context.waitForEvent('page');
// await page.locator("//a[contains(text(),'OrangeHRM, Inc')]").click();
// const newpage= await pagePromise;
await newpage.waitForLoadState('load');
await newpage.locator('(//button[@class="CybotCookiebotDialogBodyButton"])[1]').click();
await page.bringToFront();
await page.waitForSelector('//input[@placeholder="Username"]');
await page.locator('//input[@placeholder="Username"]').fill("username");

})

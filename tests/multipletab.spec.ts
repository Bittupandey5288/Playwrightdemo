import {test,expect} from '@playwright/test';

test('Multiple Tab',async ({page,context})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // Wait for new tab and click simultaneously
 
  await page.waitForTimeout(5000);
   const [newpage] =await Promise.all([
        context.waitForEvent('page'), //wiat for new tab to open
        await page.locator("//a[contains(text(),'OrangeHRM, Inc')]").click()//click the button tha open the new window or Tab
    ]);
    await newpage.waitForLoadState();
    //await newpage.locator("(//a[contains(text(),'Solutions')])[1]").click();
    await page.bringToFront()//swithc back to original Tab
    // await newpage.close(); // close new browser
    await page.waitForTimeout(2000);
    await page.locator('//input[@name="username"]').fill('Vikash');
})


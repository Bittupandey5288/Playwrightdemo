import{test,expect} from '@playwright/test'
test("Simple Alert",async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com');
 // Register the dialog before performing the some Action
 page.on("dialog",async dialog=>{
 console.log(dialog.type());
  await dialog .accept(); // this will click on ok button
  await expect(page.locator('button[id="alertBtn"]')).toBeVisible();
  await page.waitForEvent('dialog');
  await expect(page.locator('//button[text()="Log In"]')).toBeVisible();
  await page.locator('button[id="alertBtn"]').click(); // clicking on Login Button
 })
})
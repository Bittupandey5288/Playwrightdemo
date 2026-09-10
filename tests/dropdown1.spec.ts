import {test,expect} from "@playwright/test";
test('Dropdown handle ',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(3000);
    await page.locator('span>i[class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click();
    await page.waitForLoadState('load');
    await page.locator('ul>li>a',{hasText:'About'}).click();
    await page.waitForTimeout(3000);
})
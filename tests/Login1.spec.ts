import {test,expect} from '@playwright/test';

test("Login",async({page})=>{
    await page.goto('https://solutions.oumtech.com/'); // launch the URL
    await page.locator('//input[@autocomplete="username"][@type="text"]').fill("9999999999");//fill on user name 
    await page.locator('//input[@autocomplete="current-password"][@type="password"]').fill("ChangeMe123!");// Fill Password
    await expect(page.locator('//button[text()="Log In"]')).toBeVisible();
    await page.locator('//button[text()="Log In"]').click(); // click on login button

//     // Feratures 2 Sales Add sales Person and etc in same test
    await page.locator('(//span[text()="Sales Team"])[1]').click();// click on sales team button in left side
//     await page.locator('(//button[text()="Add Sales Personnel"])[1]').click(); //click on add sales Person
//     await page.locator('(//input[@class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-1q1u67m"])[1]')
//     .fill("Vikash"); //fill full name in add sales person
//     await page.locator('(//input[@class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-1q1u67m"])[2]')
//     .fill("7033158793");
//     await page.locator('(//div[@role="combobox"])[3]').click();// cicko on zone drop down
//     //await page.locator('//*[@id="_r_1f_"]/li[3]',{hasText:'North Kolkata'}).click();
//     //await page.locator
//    // ('//ul//li[@class="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters Mui-selected MuiMenuItem-root MuiMenuItem-gutters Mui-selected css-4gp2j3"]').click();//select drop down
// await page.locator("//ul//li[text()='Central Kolkata']").click();
//     await page.locator('//button[text()="Add & Send Invite"][@type="button"]').click(); // click on add and  send invite button
//     // verify added slases Person name and mobile number
//     await expect(page.locator('//div//p[text()="vikash"]')).toBeVisible();
//     await expect(page.locator('//div//p[text()="7033158793"]')).toBeVisible();
    
//     // Deactivated the user
//    // await page.locator('(//button[text()="Deactivate"])[4]').click();

//     //Logout Funtionality
//     //await page.locator('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-10auch1"]').click();// click on Logout Button
//       await page.locator('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-10auch1"][@type="button"]');
//await page.locator('div[aria-haspopup="listbox"]').nth(2).click();
//await page.locator('div[aria-haspopup="listbox"][class="MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputSizeSmall css-10mfiq"]').nth(1).click();
//await page.locator('div[class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary Mui-focused MuiInputBase-formControl MuiInputBase-sizeSmall MuiSelect-root css-ilck0u"]').click();
await page.locator('//div[text()="Status"]').click();
await page.waitForSelector('ul>li[data-value="active"]');
await page.locator('ul>li[data-value="active"]').click();


})
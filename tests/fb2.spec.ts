import {test,expect} from '@playwright/test';
test("checks",async({page})=>{
    await expect(page).toHaveURL('https://www.flipkart.com/');
    await expect(page).toHaveTitle
    ('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
    await page.goto('https://www.flipkart.com/');//Launch the URL
    await page.locator('(//button[@title="Search for Products, Brands and More"][@aria-label="Search for Products, Brands and More"])[1]').fill('',{force:true});

})
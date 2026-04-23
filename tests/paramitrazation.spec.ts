import {test,expect} from "@playwright/test";
const testData = ["Gift Card", "Laptop", "Phone"];

// testData.forEach((product) => {
//   test(`search for ${product}`, async ({ page }) => {
//     await page.goto('https://demowebshop.tricentis.com/');

//     await page.locator('#small-searchterms').fill(product);
//     await page.locator('.search-box-button').click();

//     await expect(page.locator('input[value="Add to cart"]').first()).toBeVisible();

//     await page.locator('input[value="Add to cart"]').first().click();
//   });
// });

test.describe('',()=>{
    for(const itemss of testData)
{
  test(`search for ${itemss}`, async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('#small-searchterms').fill(itemss);
    await page.locator('.search-box-button').click();

    await expect(page.locator('input[value="Add to cart"]').first()).toBeVisible();

    await page.locator('input[value="Add to cart"]').first().click();
  });
}

})

// for(const itemss of testData)
// {
//   test(`search for ${itemss}`, async ({ page }) => {
//     await page.goto('https://demowebshop.tricentis.com/');

//     await page.locator('#small-searchterms').fill(itemss);
//     await page.locator('.search-box-button').click();

//     await expect(page.locator('input[value="Add to cart"]').first()).toBeVisible();

//     await page.locator('input[value="Add to cart"]').first().click();
//   });
// }
  
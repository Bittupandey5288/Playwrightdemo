import {test,expect} from '@playwright/test'
test('upload',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('input#singleFileInput').setInputFiles('tests\\Data\\vkp.png');
    await page.waitForTimeout(5000);
    await page.locator('input#singleFileInput').setInputFiles([]); //This line of code will remove the file
    // upload multiple file in playwright
    await page.locator('input#multipleFilesInput').setInputFiles
   (['tests\\Data\\vkp.png','tests\\Data\\JKP.png']);
    await page.waitForTimeout(5000);
    await page.locator('input#multipleFilesInput').setInputFiles([]);
    await page.waitForTimeout(5000);
    await page.close();
})
import {test ,expect} from "@playwright/test";

test('file upload',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
const file=page.locator('input[id="singleFileInput"][type="file"]');
await file.setInputFiles(['D:\\automation\\tests\\Data\\Automation Tester JD.pdf']);
await page.waitForLoadState('load');
await file.setInputFiles([])
await page.pause();
})

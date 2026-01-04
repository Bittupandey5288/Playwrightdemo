import {test,expect} from '@playwright/test'
test('dropdow',async({page})=>{
    await page.goto('https://gotranscript.com/text-compare');
    await page.locator('//textarea[@name="text1"]').fill("Bittu");
    // Keyboard Action
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(3000);
    await page.keyboard.press('Control+c');
    await page.waitForTimeout(3000);
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    await page.keyboard.press('Control+v');
     page.close() ;
})
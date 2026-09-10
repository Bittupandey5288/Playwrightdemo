import { test, expect } from '@playwright/test';
test.describe('slow test',()=>{
    test.use({actionTimeout:7000

    })
 test('Facbook Registration',async({page})=>{
 await page.goto('https://www.facebook.com/r.php?entry_point=login'); 
 await page.locator('input[name="firstname"]').fill('Bittu');
 await page.locator('input[name="lastname"]').fill('Bittu');
 

}) 
 test('google',async({page})=>{
 await page.goto('https://www.google.com/'); 
 await page.locator('textarea[id="APjFqb23"]').fill('Bittu');

}) 
})

import{test} from '@playwright/test';

test('Multitaba',async ({context,page})=>{
 
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 await page.waitForTimeout(5000);
    const[newpage]=await Promise.all([
     context.waitForEvent('page'),
     page.locator("//a[text()='OrangeHRM, Inc']").click(),
   ]);
   await newpage.waitForLoadState();
   console.log(newpage.title());
   await page.waitForTimeout(3000);
   await page.bringToFront(); // switch to old apge
})
test('test2',async ({page})=>{

console.log("test 2");

})
test('test3',async ({page})=>{

console.log("test 3");

})

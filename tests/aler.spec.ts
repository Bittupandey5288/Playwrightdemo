import { test, expect } from '@playwright/test';

test ('dialog handle', async ({ page }) => {
 // step 1 Launch the url
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  // step2 create dialog window handler 

 page.on('dialog',async dialog=>{ //Pge .on is listner .on register the listner
   console.log(dialog.message());
   expect(dialog.message()).toContain('Press a button!');
   await dialog.dismiss();// thi will click on cancel  button of alert window
   // Step 2 this will click on alert element
   
  })
   // step click on that button which give alert or dialog
   await page.locator('//button[text()="Confirmation Alert"]').click();

});



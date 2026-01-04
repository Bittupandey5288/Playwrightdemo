import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1765641958518&no_sw_cr=1');


});



import { expect, Locator,Page } from "@playwright/test";
export class LoginPage1 {
    readonly page: Page;
    readonly userName:Locator;
    readonly password:Locator;
    readonly loginButton:Locator;

    constructor(page:Page)
    {
      this.page=page;
      this.userName=page.locator('//input[@name="username"]');
      this.password=page.locator('//input[@name="password"]');
      this.loginButton=page.locator('//button[@type="submit"]');
    }
    // write relatble Method 
    // async openApplication()
    // {
    //   await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // }
    async fillUserName()
    {
        await this.userName.fill('Admin')
        
        
    }
    async fillPassword()
    {
        await expect(this.password).toBeVisible();
        await this.password.fill('admin123');
    }
 async clickOnLoginButton()
 {
    await expect(this.loginButton).toBeVisible();
    await this.loginButton.click();
 } 
}
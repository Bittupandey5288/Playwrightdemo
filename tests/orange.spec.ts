import{test,expect} from "@playwright/test";
// import the class        from Page folder of loginPa
import {LoginPage1} from "../Pages/loginPage.ts";
//let login1:LoginPage1; optional
const baseURL="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
test("User Login",async({page})=>{
 // creat the object of LoginPage1 class
var login1=new LoginPage1(page);
 await page.goto(baseURL);
 await login1.fillUserName();
 await login1.fillPassword();
 await login1.clickOnLoginButton();
})



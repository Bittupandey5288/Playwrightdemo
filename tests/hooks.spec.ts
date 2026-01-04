 import{test,expect}from '@playwright/test';
//Hooks
test.beforeEach('before Each',async({page})=>{
    console.log("Hi i am Before Each");
 })
 test.afterEach('after Each',async({page})=>{
    console.log("Hi i am after each Each");
 })
 test('hi i am test1',async({page})=>{
    console.log("Hi i am test 1 ")

 })

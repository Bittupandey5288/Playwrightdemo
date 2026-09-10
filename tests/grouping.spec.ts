import {test,expect} from '@playwright/test';
test.describe('smoke Test',async()=>{
    test.beforeEach('before Each',async({page})=>{
    console.log("Hi i am Before Each");
 })
    test('test1',async({page})=>{
     console.log('hi i am test1 method ')
    })
     test('test2',async({page})=>{
     console.log('hi i am test2 method ')
    })
})// decscribe close
test.describe('functional test',async()=>{
    test('test3',async({page})=>{
     console.log('hi i am test3 method ')
    })
     test('test4',async({page})=>{
     console.log('hi i am test4 method ')
    })
})
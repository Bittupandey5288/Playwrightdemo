import { test,expect} from "@playwright/test";
test('test1  @sanity',async({page})=>{

    console.log('i am sanity test');

})
test('test 2 @reg',async({page})=>{

    console.log('i am reg test2');

})
test('test1 @sanity@reg',async({page})=>{

    console.log('i am sanit and reg test');

})

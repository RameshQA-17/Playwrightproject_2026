import {test} from "@playwright/test"

test.slow("test1", async function()
{
        console.log("test1 is executed");
        
})

test.fixme("test2", async function()
{
        console.log("test2 is executed");
        
})

test.skip("test3", async function()     //this will be skipped
{
        console.log("test3 is executed");
        
})

test("test4", async function()
{
        console.log("test4 is executed");
        
})
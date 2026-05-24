
import{test} from "@playwright/test"

test("test 1",async function() 
{
     console.log("Test1 executed");
        
})

test("test 2",async function()
{
   console.log("Test2 excueted");
   
})
test("test 3",async function()
{
   console.log("Test3 excueted");
   
})
test.skip("test 4",async function()
{
   console.log("Test4 excueted");
   
})

test("test 5",async function()
{
   console.log("Test5 excueted");
   
})
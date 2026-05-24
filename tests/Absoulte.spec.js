import{test,expect} from "@playwright/test"

test("absolute xpath",async function({page})
{
     await page.goto("https://freelance-learn-automation.vercel.app/login");

     await page.locator("/html/body/div/div/div[2]/div/div/img");

     await page.pause();


     //div[text()='userone']/following::button
     //div[text()='userone']/following::*
    //div[text()='userone']/following::div[2]--->To find the Admin
    //input[@id='email1']/following::*


     //div[text()='userone']/preceding::*
    //div[text()='userone']/preceding::div[2]
    //div[text()='userone']/preceding::div
    //input[@id='email1']/preceding::*
    //input[@id='email1']/preceding::button

   //td[text()='Playwright']/following-sibling::*
  //td[text()='Playwright']/following-sibling::td[1] or //td[text()='Playwright']/following::button[text()="Delete "][1]

 // (//button[text()='Delete '])[1]/../preceding-sibling::*


 

 //h2[text()='Java For Tester']/parent::div//following-sibling::div[3]

})
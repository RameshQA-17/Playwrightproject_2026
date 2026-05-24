import{test,expect} from "@playwright/test"

test("text",async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.locator("//a[text()='New user? Signup']").click();

   //a[contains(@href,'youtube')]---->youtube link
   
   //input[contains(@id,'name')]--->Name text field

   //input[contains(@value,'Female')]--->Female radio button

   //label[contains(text(),'Testing')]--->contain with the text function

   //label[contains(text(),'Playwright')]--->contain with the text function

    await page.pause();
})
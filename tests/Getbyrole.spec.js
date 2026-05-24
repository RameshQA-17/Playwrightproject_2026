import{test,expect} from "@playwright/test"

test("By role",async function({page})
{
   await page.goto("https://freelance-learn-automation.vercel.app/login")

   await page.getByRole("textbox",{name:"Enter Email"}).fill("admin@email.com")

   await page.getByRole("textbox",{name:"Enter Password"}).fill("admin@123")

   await page.getByRole("button",{name:"Sign in"}).click();

   await page.pause();

})
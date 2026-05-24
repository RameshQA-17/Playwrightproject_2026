import{test,expect} from "@playwright/test"

test("By alt",async function({page})
{
     await page.goto("https://freelance-learn-automation.vercel.app/login");

     await page.getByRole("link",{name:"New user? Signup"}).click();

     await page.getByAltText("menu").click();

     await page.pause();


})
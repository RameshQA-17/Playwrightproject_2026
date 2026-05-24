import{test,expect} from "@playwright/test"

test("BY Label",async function({page})
{
     await page.goto("http://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

     await page.getByLabel("Username").fill("Admin");

     await page.getByLabel("Password").fill("admin123");

     await page.getByRole("button",{name:"Login"}).click();

     await page.pause();
})
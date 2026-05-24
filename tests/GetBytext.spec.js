import{test,expect} from "@playwright/test"

test("By text",async function({page})
{
  await page.goto("https://freelance-learn-automation.vercel.app/login");

      /*await page.locator("#email1").fill("admin@email.com")
    await page.locator("#password1").fill("admin@123")
    await page.locator(".submit-btn").click()
    //await page.getByText(".submit-btn").click();

    await page.pause();*/

 await page .getByText("New user? Signup").click();

 await page.getByRole("checkbox",{name:"Java"}).click();
  await page.pause();
})
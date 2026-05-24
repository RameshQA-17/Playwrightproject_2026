import{test,expect} from "@playwright/test"

test("By ph",async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    
    await page.getByRole("link",{name:"New user? Signup"}).click();

    await page.getByPlaceholder("Name").fill("Ramesh");

    await page.getByPlaceholder("Email").fill("ugalawatramesh@gmail.com");

    await page.getByPlaceholder("Password").fill("Ramesh@17");

    await page.pause();

})
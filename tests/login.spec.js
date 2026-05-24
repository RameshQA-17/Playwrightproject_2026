import {test,expect} from "@playwright/test"

test.skip("login Test",async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator("#email1").fill("admin@email.com")

    //await page.locator("#password1").fill("admin@123")

    await page.locator("#password1").pressSequentially("admin@123",{delay:100})

    //await page.locator(".submit-btn").click()

    await page.getByText("sign in").nth(1).click();

    await page.pause();

    
})


test.skip("login test 2",async function({page})
{
       await page.goto("https://seleniumpractise.blogspot.com/2016/09/how-to-work-with-disable-textbox-or.html")
       await page.locator("#pass").fill("admin@email.com")
})

test.skip("login test 3",async function({page})
{
       await page.goto("https://seleniumpractise.blogspot.com/2016/09/how-to-work-with-disable-textbox-or.html")
       await page.locator("#pass")
})

test("expect with wait",async function({page})
{
        await page.goto("https://freelance-learn-automation.vercel.app/login")

        await expect(page).toHaveTitle("Learn Automation Courses")  //full comparision

        await expect (page).toHaveTitle(/Automation/) //partial match


})
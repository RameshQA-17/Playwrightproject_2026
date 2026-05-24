import{test,expect} from "@playwright/test"

test("Multiple tabs",async function({browser})
{
    const context=await browser.newContext()

    const page =await context.newPage()

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const newtab=await context.waitForEvent("page",{timeout:60000   })

    await page.locator("//a[contains(@href,'facebook')]").nth(0).click()

    const newpage=await newtab 

    await newpage.locator("//input[@name='email']").nth(0).fill("ramesh@gmail.com")
    
    await page.getByPlaceholder("Enter Email").fill("admin@email.com")  
    
    await newpage.locator("//input[@name='pass']").nth(1).fill("admin@email.com")

    page.close()

    newpage.close()

    browser.close()

})
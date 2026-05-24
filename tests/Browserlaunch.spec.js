import{test,expect} from "@playwright/test"

test("browser lanuch",async function({page})
{
    await page.goto("https://www.ttkvisas.in/")
    
    await expect(page).toHaveTitle(/TTK Visas/)

    await page.pause();
})
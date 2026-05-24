import{test,expect} from "@playwright/test"

test("Verify title",async function({page})
{
    await page.goto("https://playwright.dev/")

    await page.pause()
})
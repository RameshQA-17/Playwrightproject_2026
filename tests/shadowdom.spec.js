import{test,expect} from "@playwright/test"

test("shadow dom",async function({page})
{

   await page.goto("https://selectorshub.com/xpath-practice-page/")

   await page.locator("#userName").locator("#kils").fill("ramesh@gmail.com")

   await page.locator("#app2").locator("#pizza").fill("ABC")


})
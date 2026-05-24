import{test,expect} from "@playwright/test"
test("waits",async function({page})
{
   test.setTimeout(0)

   await page.goto("https://freelance-learn-automation.vercel.app/login",{timeout:5000}) 

   await page.locator("pw").fill("ramesh@gmail.com",{timeout:50000})  //action wait
   
   await expect(page.getByText("sign in").nth(1)).toContainText("signin1",{timeout:50000}) //expect wait

   await page.locator("#ramesh").waitFor({timeout:5000})

   await page.waitForLoadState("Load")

   await page.waitForLoadState("domcontentloaded")

   await page.waitForLoadState("networkidle")

   await page.waitForURL("**/dashboard",{timeout:9000}) //Ending with word dashboard

   await page.waitForURL("dashboard",{timeout:9000})

   //waits for page

   await page.waitForEvent("page",{timeout:5000})
   
   await page.waitForEvent("dialog",{timeout:6000})

   await page.waitForEvent("filechooser",{timeout:9000})
})

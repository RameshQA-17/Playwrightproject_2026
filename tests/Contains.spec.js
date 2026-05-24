import{test,expect} from "@playwright/test"

test("contains",async function({page})
    {
         await page.goto("https://freelance-learn-automation.vercel.app/login");

         await page.locator("//input[contains(@id,'email')]").fill("admin@email.com")

        await page.locator("//input[contains(@id,'password1')]").fill("admin@123");

        await page.locator("//button[contains(@class,'submit')]").click();
        
        await page.pause();
  
    }
)
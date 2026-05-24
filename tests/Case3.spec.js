import{test,expect} from "@playwright/test"

test("case3",async function({page})
    {
          await page.goto("https://freelance-learn-automation.vercel.app/signup");

          await page.locator('//input[@value="Female" and @type="radio"]').click(); //complete match

          await page.pause();

          //await page.locator('//input[@value="Female" or @type="radio"]').click(); //Partial match


    }
)
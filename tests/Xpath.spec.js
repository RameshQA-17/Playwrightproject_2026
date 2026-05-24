import{test,expect} from "@playwright/test"

test("By xpath",async function({page})
    {
        await page.goto("https://freelance-learn-automation.vercel.app/login")   
        
        await page.getByText("New user? Signup").click();

        await page.locator("//input[@id='name']").fill("Ramesh");

        await page.locator(" //input[@id='email']").fill("ugalawatrameh@gmail.com");

        await page.locator(" //input[@type='password']").fill("ramesh@17");

        //input[@id='name']
        //input[@id='email']
        //input[@type='password']
    
        
    })

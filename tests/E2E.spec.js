import{test,expect} from "@playwright/test"

test("E2E",async function({page})
{
    
    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await expect (page.getByRole('button',{name:'Sign up'})).toBeDisabled();

    await page.getByPlaceholder("Name").fill("Rameshvu973")

    await page.getByPlaceholder("Email").fill("ramesh12967330@gmail.com")

    await page.getByPlaceholder("Password").fill("rameshvu@13018")

    await page.locator("//label[text()='Java']//preceding::input[1]").click()

    await page.locator("//label[text()='Ruby']//preceding::input[1]").check()//it only applies to radio button and checkbox
    
    await page.locator("//input[@value='Female']").click()
 
    await expect(page.locator("//input[@value='Female']")).toBeChecked()
    

    await page.locator("//select[@id='state']").selectOption({value:"Goa"}) //case sensitive

    await page.waitForTimeout(2000)

    await page.locator("//select[@id='state']").selectOption({label:"Karnataka"})

    await page.waitForTimeout(2000)

    await page.locator("//select[@id='state']").selectOption({index:5})

    await page.locator("//select[@id='state']").selectOption("Gujarat")  //Label visible text

    //let values=['Reading','Dancing','Playing']

    //await page.locator("//select[@id='hobbies']").selectOption(values)
  
    await page.locator("//select[@id='hobbies']").selectOption(['Reading','Dancing','Playing'])

    await expect (page.getByRole('button',{name:'Sign up'})).toBeEnabled()

    await page.getByRole('button',{name:'Sign up'}).click();

    await expect(page.getByText("Signup successfully, Please login!")).toBeVisible();


}
)
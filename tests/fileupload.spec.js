import{test,expect} from "@playwright/test"

test("file upload",async function({page})
{
  await page.goto("https://freelance-learn-automation.vercel.app/login")

  await page.getByPlaceholder("Enter Email").fill("admin@email.com")

  await page.getByPlaceholder("Enter password").fill("admin@123")

  await page.locator("//button[text()='Sign in']").click();

  await page.locator("//span[text()='Manage']").hover()

  await page.getByText("Manage Courses").click()

  await page.getByText("add").click();

  await page.locator("#thumbnail").setInputFiles("Testdata/Testfile.png")

  const timestamp=Date.now()

  //let coursename=`Playwright course ${timestamp}`

  await page.locator("#name").fill(`Playwright Course ${timestamp}`)

  await page.locator("#description").fill("demo class")

  await page.locator("#instructorNameId").fill("Virat")

  await page.locator("#price").clear()

  await page.locator("#price").fill("15000")

  await page.locator("//input[@name='startDate']").click()

  let startdate=page.locator("//div[@class='react-datepicker__week']//div[contains(@class,'react-datepicker__day')]")
 
  let startdatecount=await startdate.count()
   
  console.log(startdatecount)

  for(let i=0;i<startdatecount;i++)
  {
       let datetext=await startdate.nth(i).innerText() // or textContent

       if(datetext.includes("27"))
       {
               await startdate.nth(i).click()
               break;
       }
  }
  

 await page.locator("//input[@name='endDate']").click()

 let Enddate=page.locator("//div[@class='react-datepicker__week']//div[contains(@class,'react-datepicker__day')]")

 let Enddatecount=await Enddate.count()
  
 for(let i=0;i<Enddatecount;i++)
 {
     let enddatetext= await Enddate.nth(i).textContent()

     if(enddatetext.includes("29"))
     {
       await Enddate.nth(i).click()
       break;
    }
  }

await page.getByText("Select Category").click()

await page.waitForTimeout(3000)

await page.getByRole('button', { name: 'Java', exact: true }).click();

await page.getByText("Save").click()

await page.waitForTimeout(3000)

await expect(page.locator(`//td[text()='Playwright Course ${timestamp}']`)).toBeVisible()

//await expect(page.locator(`//td[text()='Playwright Course ${timestamp}']`)).toBeVisible()


await page.locator(`//td[text()='Playwright Course ${timestamp}']//preceding::input[1]`).click()

await page.locator(`//td[text()='Playwright Course ${timestamp}']//following::button[1]`).click()

await page.waitForTimeout(3000)

await expect(page.locator(`//td[text()='Playwright Course ${timestamp}']`)).not.toBeVisible()

await page.getByAltText("menu").click()

await page.getByText("Sign out").click()

await expect(page.locator("//button[text()='Sign in']")).toBeVisible()


})

import{test,expect} from "@playwright/test"

test("Orange crm",async function({page})
{
   test.setTimeout(0)

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

   await page.getByPlaceholder("Username").fill("Admin")

   await page.getByPlaceholder("Password").fill("admin123")
    
   await page.locator("//button[text()=' Login ']").click()

   await page.locator("//span[text()='PIM']").click()

   await page.locator("//button[text()=' Add ']").click()

   await page.locator("input[type='file']").setInputFiles("Testdata/Testfile.png");
   
   await page.getByPlaceholder("First Name").fill("Rohit")

   await page.getByPlaceholder("Middle Name").fill("Kumar")

   await page.getByPlaceholder("Last Name").fill("Thakur")

   await page.locator(".oxd-switch-input").click()

   await page.locator("(//input[@autocomplete='off'])[1]").fill("Rohit123")

  await page.locator("(//input[@type='password'])[1]").fill("Rohit_909090")

   await page.locator("(//input[@type='password'])[2]").fill("Rohit_909090")

   await page.locator("//button[text()=' Save ']").click()

   //await expect(page.getByText(/Successfully Saved/i)).toBeVisible();

   await page.locator("//span[text()='PIM']").click()

   await page.getByPlaceholder("Type for hints...").nth(0).fill("Rohit")
   
   await page.locator("//button[text()=' Search ']").click();

   await page.pause()

   await page.getByText('(1) Record Found', { exact: true }).toBeVisible({timeout:15000});

   await page.locator("//div[@class='oxd-table-card-cell-checkbox']//i[@class='oxd-icon bi-check oxd-checkbox-input-icon']").click()

   await page.locator("//i[@class='oxd-icon bi-trash']").click()

   await page.locator("//button[text()=' Yes, Delete ']").click()

   await page.locator(".oxd-userdropdown-name").click()

   await page.locator("//a[text()='Logout']").click()

 

})

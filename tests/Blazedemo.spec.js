import{test,expect} from "@playwright/test"

test("Blazedemo",async function({page})
{
    await page.goto("https://blazedemo.com/")

    await page.locator("//select[@name='fromPort']").selectOption({value:"Boston"})

    await page.locator("//select[@name='toPort']").selectOption({label:"New York"})

    await page.locator("//input[@type='submit']").click()

    await page.locator("//td[text()='Lufthansa']/parent::tr//input[@value='Choose This Flight']").click();

    await expect(page).toHaveURL(/purchase/)

    await expect(page).toHaveTitle(/Purchase/)

    const airline=await page.locator("//h2[text()='Your flight from TLV to SFO has been reserved.']//following::p[1]").textContent()

    await expect(airline).toContain("United");

    const flightnumber=await page.locator("//h2[text()='Your flight from TLV to SFO has been reserved.']//following::p[2]").textContent()
    
    await expect(flightnumber).toContain("UA954");

    const price=await page.locator("//h2[text()='Your flight from TLV to SFO has been reserved.']//following::p[3]").textContent()
    
    await expect(price).toContain("400");

    const ArbitraryFeesandTaxes=await page.locator("//h2[text()='Your flight from TLV to SFO has been reserved.']//following::p[4]").textContent()
    
    await expect(ArbitraryFeesandTaxes).toContain("514.76");

    const totalcost=await page.locator("//h2[text()='Your flight from TLV to SFO has been reserved.']//following::p[5]/em")
      
    await expect(totalcost).toContainText("914.76");

    await page.getByPlaceholder("First Last").fill("Playwright JS")
  
    await page.getByPlaceholder("123 Main St.").fill("Bangalore")

    await page.getByPlaceholder("Anytown").fill("Karnataka")
   
    await page.waitForTimeout(4000)

    await page.locator("//select[@id='cardType']").selectOption("American Express")

    await page.getByPlaceholder("Credit Card Number").fill("5555633456")

    await page.getByPlaceholder("year").fill("2025")

    await page.locator("//input[@id='nameOnCard']").fill("Playwright By Microsoft")

    await page.locator("//input[@type='checkbox']").click()

    await expect (page.locator("//input[@type='checkbox']")).toBeVisible()

    await page.locator("//input[@value='Purchase Flight']").click();

    //await page.pause();
   
    await expect(page).toHaveURL(/confirmation/)

   const orderId = await page.locator("//td[text()='Id']/following-sibling::td").innerText();
   console.log(`Captured Order ID: ${orderId}`);

   await expect(orderId).not.toBeNull()

   

})

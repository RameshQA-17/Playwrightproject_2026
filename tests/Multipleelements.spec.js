import {test,expect} from "@playwright/test"

test("multipleelement",async function({page})
{
  await page.goto("https://www.google.com/")
   
  //await page.locator("//span[text()='Not interested']").click();
 
  await page.locator("//textarea[@title='Search']").fill("virat")

  let allelement=page.locator("//ul[@role='listbox']//li")

  await allelement.first().waitFor()

  let totalelements=await allelement.count()  //waiting for elements and count as well

  console.log(totalelements)

  for(let i=0;i<totalelements;i++)
  {
       let text=await allelement.nth(i).innerText()
   
       console.log(text);

       if(text.includes("centuries"))
       {
          await allelement.nth(i).click()

            
       }
       

  }

  


})
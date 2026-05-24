import {test,expect} from "@playwright/test"

test.skip("all links",async function({page})
    {
        
        await page.goto("https://playwright.dev/")

        let alllinks=page.locator("//a[@href]")

        let totallinks=await alllinks.count()
 
        console.log(totallinks);
        
        for(let i=0;i<totallinks;i++)
        {

            let hrefvalue =await alllinks.nth(i).getAttribute("href")

            console.log(hrefvalue);
            
        }
})

test("all images",async function({page})
{
      
    await page.goto("https://playwright.dev/")

    let allimages=page.locator("//img[@src]")

    let imgcount=await allimages.count()

    console.log(imgcount);

    for(let i=0;i<imgcount;i++)
    {
        let srcimages=await allimages.nth(i).getAttribute("src")

        let altimages=await allimages.nth(i).getAttribute("alt")


        console.log(srcimages+" "+altimages);
        
    }
    

})
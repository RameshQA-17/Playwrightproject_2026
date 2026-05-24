import{test,expect} from "@playwright/test"

test.skip("simple alert",async function({page})   //This script for simple alert ()

{
    page.once("dialog",async dialogg =>
    {
           let msg=dialogg.message()

           console.log("The alert message is " + msg);

           expect(msg).toBe("I am a JS Alert")

           await dialogg.accept() //for ok

           //await dialogg.dismiss() //for cancel
    })
      await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
      await page.getByText("Click for JS Alert").click()
})

test.skip("confirmation alert",async function({page})  //This script is for Confirmation Alert (ok & cancel)

{
    page.on("dialog",async dialogg=>
    {
           let msg=dialogg.message()

           console.log("The alert message is " + msg);

           expect(msg).toBe("I am a JS Confirm")

           //await dialogg.accept() //for ok

           await dialogg.dismiss() //for cancel
    })
      await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
      await page.getByText("Click for JS Confirm").click()
})

test.skip("alert prompt",async function({page})  //This script is for Prompt Alert (JS Prompt)

{
    page.skip("dialog",async dialogg=>
    {
           let msg=dialogg.message()

           console.log("The alert message is " + msg);

           expect(msg).toBe("I am a JS prompt")

           await dialogg.accept("selenium") //for ok

           //await dialogg.dismiss() //for cancel
    })
      await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

      await page.getByText("Click for JS Prompt").click()
})


test("capture multiple API requests", async ({ page }) => {

    page.on("request", request => {
        console.log("Request URL:", request.url())
    })

    await page.goto("https://reqres.in/")

})
import{test,expect} from "@playwright/test"

test("frames",async function({page})
{
  
   test.setTimeout(100000)

   await page.goto("https://www.redbus.in/?gad_source=1&gad_campaignid=22479772058&gclid=CjwKCAjwyMnNBhBNEiwA-Kcgu1kh0LztNIXHDzV6eNQXsqnZ7GjWdraBNAylDvg0IpHIgGKG9HAWSBoCVKsQAvD_BwE")

   await page.locator("//button[text()='Account']").click()

   await page.locator("//span[text()='Sign up']").click()

   await page.frameLocator("//iframe[@title='Sign in with Google Button']").locator("//span[text()='Sign in with Google']").click()

    page.on("dialog",async dialog =>
   {
    let msg=dialog.message()  
    
    console.log("The msg is "+ msg);

    dialog.accept()
})

   await page.goto("https://accounts.google.com/v3/signin/identifier?opparams=%253Fgis_params%253DChVodHRwczovL3d3dy5yZWRidXMuaW4SDWdpc190cmFuc2Zvcm0YByoremdNQ2hlSU9wbzdPRzBCZF9kYkpEbmpOdzFGY3U5LUNMTHFiOExWZzZlVTJIMjMxMTcxNjg5NjE1LWlkaWFuaGFoamhrMnM5cmRscjFocmQ5ZTJhMDliM2NqLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tOAFCQDIwYjc1YmViNzNkN2JkZTAxNTQzZWM1ZTQyMjA2ZmY2MmM0NmVhMWYxMjczY2ZhMzU3NTkzOGI5ODU2ZGJmZDY%2526response_mode%253Dform_post&dsh=zgMCheIOpo7OG0Bd_dbJDnjNw1Fcu9-CLLqb8LVg6eU&as=zgMCheIOpo7OG0Bd_dbJDnjNw1Fcu9-CLLqb8LVg6eU&client_id=231171689615-idianhahjhk2s9rdlr1hrd9e2a09b3cj.apps.googleusercontent.com&display=popup&gsiwebsdk=gis_attributes&o2v=1&origin=https%3A%2F%2Fwww.redbus.in&prompt=select_account&redirect_uri=gis_transform&response_type=id_token&scope=openid+email+profile&service=lso&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAMVL-4vcMm7-dNomVI4b6fIk8Zk2yrbIsXI8CH2jchJOrWpxEuLrAAzP-DsnSq8lB8Lr-DArJ1F5yJYv1KZvB0s_pX1Qs1caeX-IZlA_UrX-H9mE8qUmTK7Lts3toGnGyq7kMcLXRs_IA_4xm2QIyDLC-_UwNXPq0T1uuo3k9EM6jle1R_Gt02w09pI7so1aWOiPfJX-7Q9cl2Wr8CtYWQTfSljuFHCP7ar5K4q0OqXtjZei-u42d75Dw25Qa13S-0a-Jw-77wjncd82OtrRli1LZvY7ptuAVO_fnsxfEG8zdEmLIZxd2sND6tirxaVlIyGNno3HqaLqlQZXFIdvggdYdf1a7yCsqcunzjQKBZW6yn2xQ-1kwP3ZEEJu4oc4sWMQww04vU3GWkXbZNuwCWwkthQvXWU97zliABEiRCFesELJY-xDsnkj86MXF44M0Ei9A-ohV0Bc8JfkgykTcehoVNv9yx1hOgY0wWVIlrCcGgc_nY%26flowName%3DGeneralOAuthFlow%26as%3DzgMCheIOpo7OG0Bd_dbJDnjNw1Fcu9-CLLqb8LVg6eU%26client_id%3D231171689615-idianhahjhk2s9rdlr1hrd9e2a09b3cj.apps.googleusercontent.com%26requestPath%3D%252Fsignin%252Foauth%252Fconsent%23&app_domain=https%3A%2F%2Fwww.redbus.in&rart=ANgoxccTd2oNxT-tOKVWFxkPMuyUygplynVIKAO4rrUK0SmFd4j30VeKarZipdVp19NMd-rx_vd7UHUWGlQmUrjBL_WqODr84j6Tp8ax9UQ_GA3O9M-kTck")

  await page.locator("//input[@type='email']").fill("ugalawatramesh@gmail.com")

  await page.locator("//span[text()='Next']").click()
  
  await page.locator("//input[@type='password']").fill("rameshvu17", {timeout: 5000})

  await page.locator("//span[text()='Next']").click()







})

  


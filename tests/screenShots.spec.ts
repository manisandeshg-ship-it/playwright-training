import { test, expect } from "@playwright/test";


test("screenShots - login with standard_user", async ({ page }) => {

// //FULL IMAGE 
// await page.goto("https://www.amazon.in/");
//     await page.screenshot({
//         path: './Screenshots/amazonfull.png',
//         fullPage: true
//     })
 

    // await page.goto("https://www.amazon.in/");    
    // const smallimage=page.locator('#glow-ingress-line1')
    // await smallimage.screenshot({
    //     path: './Screenshots/SAMLL.png',        
    // })
 


  await page.goto("https://www.amazon.com/ref=nav_logo");

   await page.selectOption("//select[@id='searchDropdownBox']",{value:'search-alias=baby-products'});
  
  await page.fill("#twotabsearchtextbox", "bottles");
await page.waitForTimeout(5000);
const searchSHot=page.locator('#nav-flyout-searchAjax');
await searchSHot.screenshot({
    path: './Screenshots/search.png',
})

});
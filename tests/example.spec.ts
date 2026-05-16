// import { test, expect } from '@playwright/test';
// test('saucedemo - login with standard_user', async ({ page }) => {
//   // navigate to saucedemo
 

//     await page.goto('https://www.amazon.com/ref=nav_logo');

//    await page.selectOption('//select[@class="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown"]', { value : 'search-alias=amazon-devices' });
//    await page.waitForTimeout(5000);  

//   await page.fill('#twotabsearchtextbox','Bags');

//    await page.click('//div[@class="nav-right"]/div[1]//input[@id="nav-search-submit-button"]');
//   //await page.waitForTimeout(5000);  


//   await page.click("//div[@class='s-desktop-width-max s-desktop-content s-opposite-dir s-wide-grid-style sg-row']//div[@role='listitem'][2]//button[@id='a-autoid-2-announce']");  
//   //await page.waitForTimeout(5000);  

//   //await page.click('//div[@class="a-box-group"]/div[1]/div[1]//input[@id="add-to-cart-button"]');
//   //await page.waitForTimeout(5000); 

//   //span[@id="nav-cart-count"]
//   //await page.click("//div[@id='nav-cart-count-container']");
// await expect(page.locator('#nav-cart-count-container')).toHaveText('1');
// const valueofcart = await page.locator('#nav-cart-count').textContent();
// console.log(`Value of cart : ${valueofcart}`);
// //div[@class="a-box-group"]/div[1]/div[1]///input[@id="add-to-cart-button"]

// });



 
import { test, expect } from '@playwright/test';
test('amazon - login with amazon', async ({ page }) => {
//   navigate to Amazon
await page.goto('https://www.amazon.in/');
await page.waitForTimeout(1000);    
//all menu
await page.locator('#searchDropdownBox').click();
await page.waitForTimeout(1000);
//select books from dropdown
await page.selectOption("#searchDropdownBox",'Beauty');
await page.waitForTimeout(1000);
////click on search
await page.waitForTimeout(1000);
await page.click('//input[@id="twotabsearchtextbox"]');
//search soap in search bar
await page.waitForTimeout(1000);
await page.locator('//input[@id="twotabsearchtextbox"]').fill('soap');
 
// Navigate options with keyboard for 3times
await page.keyboard.press('ArrowDown');
await page.waitForTimeout(900);
await page.keyboard.press('ArrowDown');
await page.waitForTimeout(900);
await page.keyboard.press('ArrowDown');
await page.waitForTimeout(900);
 
//click 3 one from the dropdownlist
await page.waitForTimeout(2000);
await page.click('//div[@id="sac-suggestion-row-3-cell-1"]/div[2]');
 
//select featured dropdown
await page.click('#a-autoid-0-announce');
//click on bestseller
// await page.click('#s-result-sort-select_5');
// page.waitForTimeout(5000);
 
//click on 2nd item
await page.click(
      ' //span[@class="rush-component s-latency-cf-section"]//div[@role="listitem"][2]//div[@class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small"]//a[@class="a-link-normal s-line-clamp-3 s-link-style a-text-normal"]'
    );
});
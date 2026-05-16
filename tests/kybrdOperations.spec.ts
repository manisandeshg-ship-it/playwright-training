import { test, expect } from "@playwright/test";

test("keyboardOperations and mouseOper - login with standard_user", async ({ page }) => {


  await page.goto("https://www.amazon.com/ref=nav_logo");
      const continueBtn = page.locator("//*[contains(text(),'Continue shopping')]");
      if (await continueBtn.first().isVisible()) {
          await continueBtn.first().click();
      } else {
          await page.waitForSelector('//a[@href="/ref=nav_logo"]', { timeout: 5000 });
          const bselleritem = await page.locator('//a[@id="nav-hamburger-menu"]')
          bselleritem.hover(); // mouse operation
          await page.waitForTimeout(5000)
          await page.locator("#twotabsearchtextbox").fill("bottle");
          await page.waitForTimeout(5000)
          await page.keyboard.press('ArrowDown'); // Navigate options with keyboard
          await page.waitForTimeout(900);
          await page.keyboard.press('ArrowDown');
          await page.waitForTimeout(900);
          await page.keyboard.press('Enter');
          await page.waitForTimeout(900);
      }

//   await page.goto("https://www.flipkart.com/");

//   // await page.locator(".lNPl8b").fill("shoes");  //anythoer way to fill the search box
//   await page.fill("//input[@class='lNPl8b']", "shoes");
//   await page.waitForTimeout(5000);
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(900);
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(900);
//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(900);
//   await page.click("//div[@class='yZCQWU']//div/button");
//   await page.waitForTimeout(5000);
//   const searchSHot = page.locator('//img[@class="lI2T1h WPXNND dwCDzl"]');
//   await searchSHot.screenshot({
//     path: "./Screenshots/pic.png",
//   });

//   const moreselect = await page.locator('//div[@class="UGFyTG"]');
//   moreselect.hover(); // mouse operation
//   await page.waitForTimeout(900);
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(900);
//   await page.keyboard.press("ArrowDown");
//   await page.waitForTimeout(900);

//   //const priceselection = await page.locator('//div[@class="WoGl7t"]')
//   //  priceselection.hover(); // mouse operation
//   await page.click("//div[@class='WoGl7t']");
//   await page.waitForTimeout(900);
//   await page.keyboard.press("ArrowUp");
//   await page.waitForTimeout(900);
//   await page.keyboard.press("ArrowUp");
//   await page.waitForTimeout(900);
});

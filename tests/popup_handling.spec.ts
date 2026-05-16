import { test, expect } from "@playwright/test";
test("popup_handling - login with standard_user", async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
await page.waitForTimeout(5000);

page.once("dialog", async dialog => {
  console.log("Dialog message: "+ dialog.message());
  await page.waitForTimeout(5000);
  await dialog.accept("help");
  
});
await page.click("//button[@onclick='jsPrompt()']");
console.log("Result :"+ await page.locator('#result').textContent());
});


test("popup_handling - handling new tab", async ({ page }) => {
  
//pop up or new window 
await page.goto('https://the-internet.herokuapp.com/windows');
//pop up

  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.click("//a[contains(text(),'Click Here')]"),
  ]);
  await newPage.waitForLoadState();
  console.log('-->> New tab URL:', newPage.url());
  console.log('-->> New tab title:', (await newPage.title()).trim());

});
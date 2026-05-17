import { test, expect } from "@playwright/test";

test("interviewEx2 - Amazon website",{ tag: ['@smoke'] }, async ({ page }) => {

   await page.goto("https://www.amazon.com/ref=nav_logo");
    await page.keyboard.press("Escape");
    await page.selectOption("//select[@id='searchDropdownBox']", {
        value: "search-alias=appliances",
    });
    await page.fill("#twotabsearchtextbox", "dryer");
    await page.waitForTimeout(2000);
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown"); 
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    await page.click("//li[@id='p_n_g-1001658858111/2681800011']//i[@class='a-icon a-icon-checkbox' ]");
    await page.waitForTimeout(2000);
    await page.click("#a-autoid-0-announce");
    await page.click("#s-result-sort-select_1");
    await page.waitForTimeout(2000);
    await page.click("//span[@class='rush-component s-latency-cf-section']//div[@role='listitem'][2]//div[@class='a-section a-spacing-small a-spacing-top-small']//a[@class='a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal']");
    await page.waitForTimeout(2000);
    const moreselect = await page.locator('//div[@id="main-image-container"]');
    moreselect.hover();
    await page.waitForTimeout(5000);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(1000);
    await page.click("//input[@id='add-to-cart-button']");
    const smallimage = page.locator("#sw-atc-details-single-container");
    await smallimage.screenshot({
    path: "./Screenshots/SAMLL5.png",   
    });
    const addedtocart = await page.locator('//div[@class="a-section a-padding-medium sw-atc-message-section"]').textContent();
    console.log(`Added to cart message : ${addedtocart}`);
    await page.click("//input[@name='proceedToRetailCheckout']");
    await page.waitForTimeout(2000);
    await page.mouse.click(250, 250, { button: "left" });


});

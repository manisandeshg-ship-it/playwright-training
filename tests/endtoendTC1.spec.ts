import { test, expect } from "@playwright/test";

test("endtoendTC1 - Amazon website",{ tag: '@smoke' }, async ({ page }) => {
  await page.goto(
    "https://www.amazon.com/ref=nav_logo"
  );
  await page.keyboard.press("Escape");
    await page.selectOption("//select[@id='searchDropdownBox']", {
      value: "search-alias=beauty",
    });

    await page.fill("#twotabsearchtextbox", "soap");

    await page.waitForTimeout(5000);
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(900);
    await page.keyboard.press("Enter");
    await page.waitForTimeout(900);

  // Click on Sort by dropdown and select Best Sellers
  await page.click("//span[@id='a-autoid-0-announce']");
  await page.click("//a[@id='s-result-sort-select_4']");
  await page.waitForTimeout(5000);
    await page.click(
      " //span[@class='rush-component s-latency-cf-section']//div[@role='listitem'][2]//div[@class='a-section a-spacing-small puis-padding-left-small puis-padding-right-small']//a[@class='a-link-normal s-line-clamp-3 s-link-style a-text-normal']"
    );
  //   const rightClick = page.locator("//span[@class='rush-component s-latency-cf-section']//div[@role='listitem'][2]//div[@class='a-section a-spacing-small puis-padding-left-small puis-padding-right-small']//a[@class='a-link-normal s-line-clamp-3 s-link-style a-text-normal']");
  //     await rightClick.click({ button: "right" });
  //await page.click("//span[@class='rush-component s-latency-cf-section']//div[@role='listitem'][2]//div[@class='a-section a-spacing-small puis-padding-left-small puis-padding-right-small']//a[@class='a-link-normal s-line-clamp-3 s-link-style a-text-normal']");
  // await page.locator("//div[@role='listitem'][2]//img[1]").click({ button: 'middle' });

  //   await page.waitForTimeout(5000);

  // const [newPage] = await Promise.all([
  //   page.waitForEvent("popup"),
  //   page
  //     .locator("//div[@role='listitem'][2]//img[1]")
  //     .click({ button: "middle" }),
  // ]);
  // await newPage.waitForLoadState();
  // console.log("-->> New tab URL:", newPage.url());
  // console.log("-->> New tab title:", (await newPage.title()).trim());
  // await newPage.waitForTimeout(5000);
  const moreselect = await page.locator('//div[@id="main-image-container"]');
  moreselect.hover(); // mouse operation
  await page.waitForTimeout(5000);
  await page.click("//input[@id='add-to-cart-button']");
  // await page.waitForTimeout(5000);

  const smallimage = page.locator("#sw-atc-details-single-container");
  await smallimage.screenshot({
    path: "./Screenshots/SAMLL2.png",
  });
  const addedtocart = await page
    .locator(
      '//h1[@class="a-size-medium-plus a-color-base sw-atc-text a-text-bold"]'
    )
    .textContent();
  console.log(`Confirmation message : ${addedtocart}`);
  await page.click("//input[@name='proceedToRetailCheckout']");

  await page.mouse.click(200, 200, { button: "right" });
  // await page.waitForTimeout(900);
});

import { test, expect } from "@playwright/test";
test("frames - login with standard_user", async ({ page }) => {
await page.goto("https://letcode.in/frame");

   const totalFrames = await page.frames().length;
   console.log(totalFrames);

    const firstFrame = page.frameLocator("#firstFr");
    await firstFrame.locator('input[name="fname"]').fill("Sandesh");
    await firstFrame.locator('input[name="lname"]').fill("G");
});

// Shadow elements
// Shadow elements can be given in the locator itself using '>>' syntax
// //Retry 
// // goto playwright.config.ts    
// //retries: process.env.CI ? 2 : 2, (here by default 2:0) and trying 2 times after failures 
// import { test, expect } from "@playwright/test"; 
// test("Test  ", async ({ page }) => {
//     await page.goto('https://www.google.com/')
//     const title = await page.title();
//     console.log('here Page Title:', title);
//         await expect(page).toHaveTitle('Google')//pass
//     //await expect(page).toHaveTitle('Google beegle') //once fails its retry
// });
 

// Skip test case and Only excute specific test case

import { test, expect } from "@playwright/test";
test.only("Mango ", async ({ page }) => {
    console.log("I want to eat mangoes today");
});
test.skip("Banana ", async ({ page }) => {
    console.log("I want to eat banana today");
});
test("Apple ", async ({ page }) => {
    console.log("I want to eat apple today");
});
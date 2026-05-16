//npx playwright test rNp.spec.ts --project=chromium --headed --workers=2   
import { test } from "@playwright/test";
test('context', async ({ browser }) => {


  // -------- Context 1: Google --------

  const googleContext = await browser.newContext();

  const googlePage = await googleContext.newPage();

  await googlePage.goto('https://www.google.com');

  // -------- Context 2: Amazon --------

  const amazonContext = await browser.newContext();

  const amazonPage = await amazonContext.newPage();

  await amazonPage.goto('https://www.amazon.in/');

  // Keep open for teaching/demo

  await googlePage.waitForTimeout(10000);

  // Cleanup

  await googleContext.close();

  await amazonContext.close();
});
 
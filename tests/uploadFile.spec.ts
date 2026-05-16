import { test, expect } from "@playwright/test";
test("uploadFiles - login with standard_user", async ({ page }) => {

await page.goto('https://the-internet.herokuapp.com/upload');
const filePath = '/Users/sande/Downloads/Mohenrajvellingiri_PM.pdf';
await page.waitForTimeout(5000);
  await page.locator('#file-upload').setInputFiles(filePath);
    await page.locator('#file-submit').click();
    await page.waitForTimeout(3000);
    await expect(page.locator('#uploaded-files')).toContainText('Mohenrajvellingiri_PM.pdf');
});


// await page.goto('https://demoqa.com/upload-download#google_vignette');
// const filePath = 'C:/Users/sande/Downloads/playwright-traininig/playwright-dump.txt';
// await page.waitForTimeout(5000);
//     await page.locator('#uploadFile').setInputFiles(filePath);  
//     await page.waitForTimeout(3000);
//     await expect(page.locator('#uploadedFilePath')).toContainText('playwright-dump.txt');


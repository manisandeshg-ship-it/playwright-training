// import { test, expect } from '@playwright/test';
 
// test.describe('Amazon Search Tests', () => {
 
//   test.beforeAll(async () => {
//     console.log('Starting Amazon Test Suite');
//   });
 
 
//   test.beforeEach(async ({ page }) => {
//     console.log('Opening Amazon Homepage');
//     await page.goto('https://www.amazon.in/');
 
//     // Select category from dropdown
//     await page.locator('#searchDropdownBox').click();
//     await page.selectOption('#searchDropdownBox', 'Beauty');
//   });
 
 
//   // Test Case 1
//   test('Search for Soap', async ({ page }) => {
//     await page.fill('#twotabsearchtextbox', 'soap');
//     await page.click('#nav-search-submit-button');
//     await expect(page).toHaveURL(/soap/);
//   });
 
//   // Test Case 2
//   test('Search for Shampoo', async ({ page }) => {
//     await page.fill('#twotabsearchtextbox', 'shampoo');
//     await page.click('#nav-search-submit-button');
//     await expect(page).toHaveURL(/shampoo/);
//   });
 
 
//   test.afterEach(async ({ page }) => {
//     console.log('🧹 Test completed, clearing search box');
//     await page.locator('#twotabsearchtextbox').fill('');
//   });
 
//   test.afterAll(async () => {
//     console.log('Finished Amazon Test Suite');
//   });
// });





import { test, expect } from '@playwright/test';
 
test.describe('Amazon Search Tests', () => {
 
  test.beforeAll(async () => {
    console.log('Starting Amazon Test Suite');
  });
 
 
  test.beforeEach(async ({ page }) => {
    console.log('Opening Amazon Homepage');
    await page.goto('https://www.amazon.in/');
 
    // Select category from dropdown
    await page.locator('#searchDropdownBox').click();
  });

    // Test Case 1  - Search for beauty in dropdown
    test('Search for Beauty', async ({ page }) => {
      await page.selectOption('#searchDropdownBox', 'Beauty');
     await page.fill('#twotabsearchtextbox', 'soap');
    await page.click('#nav-search-submit-button');
      await page.locator('#twotabsearchtextbox').fill('');
      await page.fill('#twotabsearchtextbox', 'shampoo');
    await page.click('#nav-search-submit-button');
    });

      // Test Case 2  - Search for Baby in dropdown
    test('Search for Baby', async ({ page }) => {
      await page.selectOption('#searchDropdownBox', 'Baby');
     await page.fill('#twotabsearchtextbox', 'soap');
    await page.click('#nav-search-submit-button');
      await page.locator('#twotabsearchtextbox').fill('');
      await page.fill('#twotabsearchtextbox', 'shampoo');
    await page.click('#nav-search-submit-button');
    });
    
    
  test.afterAll(async () => {
    console.log('Finished Amazon Test Suite');
  });
});
import { test, expect } from '@playwright/test';

test('Selenium Automation page', async ({ page }) => {
    // Navigate to the Selenium Automation page
    await page.goto('https://automationintesting.com/selenium/testpage/');
    // expect(page.locator('//input[@placeholder="Enter your first name"]')).toHaveText('Enter your first name');
    await page.fill('#firstname', 'Sandesh');
    await page.fill('#surname', 'G');
    await page.selectOption('#gender', { value: 'male' });
    await page.click('#red');
    expect(page.locator('#red')).toBeChecked();
    await page.click('#checkbox1');
    expect(page.locator('#checkbox1')).toBeChecked();
await page.fill('//textarea[@placeholder="Tell us some fun stuff!"]', 'This is automation test.');
// Locate the target element
 const targetElement = page.locator('text=Europe');
  // Scroll the element into view if it is not already visible
  await targetElement.scrollIntoViewIfNeeded();
  await page.waitForTimeout(3000);
    // Click on the target element
    await targetElement.click();
    await page.waitForTimeout(3000);
});

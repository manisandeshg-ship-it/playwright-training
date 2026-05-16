import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 14'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('button', { name: 'Open All Categories Menu' }).click();
  await page.getByRole('link', { name: 'Bestsellers' }).click();
  await page.locator('#B0BYLK9PZC > a').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Go to Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Buy (1 item)' }).click();
});
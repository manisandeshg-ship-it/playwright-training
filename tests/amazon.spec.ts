import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByLabel('Select the department you').selectOption('search-alias=amazon-devices');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('phone');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('ArrowDown');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('ArrowDown');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('ArrowDown');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('listitem', { name: '2 of' }).getByLabel('Add to cart').click();
  await page.getByRole('link', { name: 'Go to Cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Buy Buy Amazon' }).click();
});
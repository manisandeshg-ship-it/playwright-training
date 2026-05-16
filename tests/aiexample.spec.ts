import { test, expect } from '@playwright/test';

test('Amazon: select Baby category, search soap, open second result', async ({ page }) => {
	// Go to Amazon homepage
	await page.goto('https://www.amazon.com/');

	// Select "Baby" from the category dropdown (searchDropdownBox)
	await page.locator('#searchDropdownBox').selectOption({ label: 'Baby' });

	// Enter search term and submit
	await page.fill('#twotabsearchtextbox', 'soap');
	await page.click('#nav-search-submit-button');

	// Wait for search results to load
	await page.waitForLoadState('networkidle');

	// Locate search results and click the second item
	const results = page.locator('[data-component-type="s-search-result"]');
	const count = await results.count();
	if (count < 2) throw new Error(`Expected at least 2 results, found ${count}`);

	await results.nth(1).locator('h2 a').first().click();

	// Wait for product page navigation
	await page.waitForLoadState('networkidle');
	await expect(page).toHaveURL(/\/(dp|gp)\//);
});


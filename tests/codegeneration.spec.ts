import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByLabel('Select the department you').selectOption('search-alias=nowstore');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('body ');
  await page.getByRole('button', { name: 'body spray for man' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.s-widget-container.s-spacing-small.s-widget-container-height-small.celwidget.slot\\=MAIN.template\\=SEARCH_RESULTS.widgetId\\=search-results_10 > span > .puis-card-container > .a-section.a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal').click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/Man-Company-Deodorant-Men-Long-Lasting/dp/B0CKJ11JK1/ref=sr_1_10_in_f3_wg_fs?almBrandId=ctnow&crid=XGH3Q5CBOYX4&dib=eyJ2IjoiMSJ9.ptdK-agRLIgEGFM-c27qyyGbrRpUsz24gLLX79Se4kAUVE31sx0pUwf610Y7Yglig0A_IgOmprLZuVJPk94-BRbcG3rx398kBEoUSQZ3WD8s9S78orvPcvopDZ37ygnNOWI9v_ytbe8IliOFUmYLjJQXd-jphGC9VE5OPlO_5YmQv3KwYqq3ih_n-CPkvK7Ci8Dbk--ZdCsQSJFF0j_9HwCxtNdPGZFMtiNzjhBDBFyh05U6kvBKwJ95sTLf_mVvF90RLQ26ReghSzDnU47do79luIhIaB49W3gLrGcJsRU.HfiFcRue-bb4pRfRJ014MJ76UMVbhU82Qzn3baFFWyA&dib_tag=se&fpw=alm&keywords=body%2Bspray%2Bfor%2Bman&qid=1768625947&s=nowstore&sprefix=body%2B%2Cnowstore%2C292&sr=1-10&th=1');
  await page1.getByText('Skip', { exact: true }).click();
  await page1.goto('https://www.amazon.in/Man-Company-Deodorant-Men-Long-Lasting/dp/B0CKJ11JK1/ref=sr_1_10_in_f3_wg_fs?almBrandId=ctnow&crid=XGH3Q5CBOYX4&dib=eyJ2IjoiMSJ9.ptdK-agRLIgEGFM-c27qyyGbrRpUsz24gLLX79Se4kAUVE31sx0pUwf610Y7Yglig0A_IgOmprLZuVJPk94-BRbcG3rx398kBEoUSQZ3WD8s9S78orvPcvopDZ37ygnNOWI9v_ytbe8IliOFUmYLjJQXd-jphGC9VE5OPlO_5YmQv3KwYqq3ih_n-CPkvK7Ci8Dbk--ZdCsQSJFF0j_9HwCxtNdPGZFMtiNzjhBDBFyh05U6kvBKwJ95sTLf_mVvF90RLQ26ReghSzDnU47do79luIhIaB49W3gLrGcJsRU.HfiFcRue-bb4pRfRJ014MJ76UMVbhU82Qzn3baFFWyA&dib_tag=se&fpw=alm&keywords=body%2Bspray%2Bfor%2Bman&qid=1768625947&s=nowstore&sprefix=body%2B%2Cnowstore%2C292&sr=1-10&th=1');
  await page1.getByRole('button', { name: 'Add to cart', exact: true }).click();
  await page1.getByRole('link', { name: 'Go to Cart' }).click();
  await page1.getByRole('button', { name: 'Proceed to Buy Fresh Items' }).click();
});
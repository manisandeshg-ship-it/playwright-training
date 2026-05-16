import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly sortDropdown: Locator;
  readonly firstAddToCartBtn: Locator;
  readonly cartIcon: Locator;
  readonly cartBadge: Locator;
  readonly removeBtn: Locator;
  readonly checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.sortDropdown = page.locator('.product_sort_container');
    this.firstAddToCartBtn = page.locator('.inventory_list div.inventory_item').first().locator('button');
    this.cartIcon = page.locator('#shopping_cart_container');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.removeBtn = page.locator('#remove-sauce-labs-bike-light');
    this.checkoutBtn = page.locator('#checkout');
  }

  async verifyLoginSuccess() {
    await expect(this.title).toHaveText('Products');
  }

  async sortByLowToHigh() {
    await this.sortDropdown.selectOption('lohi');
  }

  async addFirstProductToCart() {
    await this.firstAddToCartBtn.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async verifyCartCount(expected: string) {
    await expect(this.cartBadge).toHaveText(expected);
  }

  async verifyCartPage() {
    await expect(this.title).toHaveText('Your Cart');
  }

  async removeItem() {
    await this.removeBtn.click();
  }

  async goToCheckout() {
    await this.checkoutBtn.click();
  }
}
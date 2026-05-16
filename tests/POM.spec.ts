import { test } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { ProductsPage } from './pages/productsPage';
import { CheckoutPage } from './pages/checkoutPage';

test('SauceDemo End-to-End Flow using POM', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  // Products Page
  await productsPage.verifyLoginSuccess();
  await productsPage.sortByLowToHigh();
  await productsPage.addFirstProductToCart();
  await productsPage.openCart();
  await productsPage.verifyCartCount('1');
  await productsPage.verifyCartPage();
  await productsPage.goToCheckout();

  // Checkout Page
  await checkoutPage.verifyCheckoutPage();
  await checkoutPage.enterCheckoutDetails('Sandesh', 'G', '07304');
});
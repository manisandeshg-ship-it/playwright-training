import { test, expect } from '@playwright/test';

test('saucedemo - login with standard_user', { tag: '@smoke' }, async ({ page }) => {
  // navigate to saucedemo
  await page.goto('https://www.saucedemo.com/');

  // enter credentials
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  
  // click login
  await page.click('#login-button');
  expect(page).toHaveTitle('Swag Labs');

  // verify successful login by checking page has 'Products' text
  expect(page.locator('.title')).toHaveText('Products');
    

 
  await page.selectOption('//select[@class="product_sort_container"]', { value : 'lohi' });
  await page.waitForTimeout(5000);
 await page.click("//div[@class='inventory_list']/div[1]//button");

  await page.click("//div[@class='inventory_list']/div[2]//button");
  // wait 10 seconds after clicking login (optional)
  await page.waitForTimeout(10000);
await page.click("//div[@id='shopping_cart_container']");
await expect(page.locator('.shopping_cart_link')).toHaveText('2', { timeout: 5000 });
const valueofcart = await page.locator('.shopping_cart_badge').textContent();
console.log(`Value of cart : ${valueofcart}`);
expect(page.locator('.title')).toHaveText('Your Cart');
await page.click("//button[@id='remove-sauce-labs-bike-light']");
await page.click("//button[@id='checkout']");
expect(page.locator('.title')).toHaveText('Checkout: Your Information');
await page.fill('#first-name','Sandesh');
await page.fill('#last-name','G');
await page.fill('#postal-code','07304');
await page.click("//input[@id='continue']");
expect(page.locator('.title')).toHaveText('Checkout: Overview');
await page.click("//button[@id='finish']");
expect(page.locator('.title')).toHaveText('Checkout: Complete!');
await page.click("//button[@id='back-to-products']");
});




// await page.goto('https://www.saucedemo.com/');
//   await page.fill('//input[@id="user-name"]', 'standard_user');
//   await page.fill('//input[@id="password"]', 'secret_sauce');
//   await page.click('//input[@id="login-button"]');
  
//   const elementoptionsinDD = await page.locator("//select[@class='product_sort_container']//option")
//   const countofDD=await elementoptionsinDD.count();
//   console.log('Number of options in sort dropdown:', countofDD);// index,value,text
 
//   for(let i=0;i<countofDD;i++){        
//     const optionText=await elementoptionsinDD.nth(i).innerText();
//     const optionValue=await elementoptionsinDD.nth(i).getAttribute('value');        
//     console.log(`Option ${i}: value='${optionValue}', text='${optionText}'`);        
//   }
// });





// await page.goto('https://www.saucedemo.com/');
//   await page.fill('//input[@id="user-name"]', 'standard_user');
//   await page.fill('//input[@id="password"]', 'secret_sauce');
//   await page.click('//input[@id="login-button"]');

// // Identify the dropdown in 3 ways 1 Value, text/label, index
//    await page.selectOption('//select[@class="product_sort_container"]', { index: 3 });
//   await page.waitForTimeout(5000);
//   await page.selectOption('//select[@class="product_sort_container"]', { label : 'Price (low to high)' });
//   await page.waitForTimeout(5000);
//   await page.selectOption('//select[@class="product_sort_container"]', { value : 'za' });
//   await page.waitForTimeout(5000);  
// });
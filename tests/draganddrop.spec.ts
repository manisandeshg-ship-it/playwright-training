import {test, expect} from "@playwright/test";

test('draganddrop - example', async ({page}) => {

//     await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
//     await page.waitForTimeout(2000);
//     const source = page.locator('#column-a');
//     const destination = page.locator('#column-b');
//     await source.dragTo(destination);
//     await page.waitForTimeout(5000);
// });


await page.goto('https://www.w3schools.com/html/html5_draganddrop.asp');

const sorce = page.locator('#div1');
const destination = page.locator('#div2');
await sorce.dragTo(destination, { timeout: 5000 });
await destination.dragTo(sorce);
await page.waitForTimeout(2000);
});


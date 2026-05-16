// smoke, regression, sanity 
import { expect, test } from "@playwright/test";
 
test("RAJASAAB",{tag:['@smokes']} ,async ({ page }) => {
    console.log("This is test RAJASAAB")
});
test("Mana Shanakar CHIRU",{tag:['@smokes','@regs']}, async ({ page }) => {
    console.log("This is test CHIRANJEEVI")
});
test("BMW",{tag:['@regs']}, async ({ page }) => {
    console.log("This is test RAVITEJA")
});
test("ANAGANAGA OK RAJU",{tag:['@regs']}, async ({ page }) => {
    console.log("This is test NAVEEN POLISHETTY")
});
 
// npx playwright test --grep '@smokes' --headed --workers=1 --project=chromium;
// npx playwright test --grep '@regs' --headed --workers=1 --project=chromium;
// //run both regs and smokes 
// npx playwright test --grep '@smokes|@regs' --headed --workers=1 --project=chromium;
 
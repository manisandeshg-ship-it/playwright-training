import { test, expect } from "@playwright/test";
// @ts-ignore: allow importing JSON without resolveJsonModule
import data from '../testData/employees.json';
test("Data reading from Json file", async ({ page }) => {

 
const user = data.applications[1].appName
console.log(user)
 
});
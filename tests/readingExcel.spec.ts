import { test, expect } from "@playwright/test";
import path from 'path';
import * as XLSX from 'xlsx';

test("Data reading from Excel file", async ({ page }) => {

// const workbook = XLSX.readFile('C:/Users/sande/Downloads/playwright-vs-latest/testData/testDataex.xlsx');
const filepath = path.join(__dirname, '../testData/testDataex.xlsx');
const workbook = XLSX.readFile(filepath);

const worksheet = workbook.Sheets['Sheet1'];
// Convert values in worksheet to JSON format
const data: any[] = XLSX.utils.sheet_to_json(worksheet);
// console.log(data);
// console.log(data[0].Username);
// console.log(data[0].Password);
// console.log(data[0].Click);
console.log(data[2].Phone);    
});
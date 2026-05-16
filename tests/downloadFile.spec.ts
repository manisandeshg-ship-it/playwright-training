import { test, expect } from "@playwright/test";
import * as path from "path";
import * as os from "os";
import * as fs from "fs";

test("downloadFile - login with standard_user", async ({ page }) => {
  await page.goto("https://demoqa.com/upload-download");
  const dndfile = page.waitForEvent("download");
  await page.locator("#downloadButton").click();
  const downloadedfile = await dndfile;

  // os.homedir()=> /Users/ramanakommula.  + Downloads
  const downloadFoldermac = path.join(
    os.homedir(),
    "Downloads/playwright-traininig"
  ); //....
  // const folderPath = path.join(downloadFoldermac, 'playwright-traininig')
  const finalpath = path.join(
    downloadFoldermac,
    downloadedfile.suggestedFilename()
  );
  await downloadedfile.saveAs(finalpath);
  expect(fs.existsSync(finalpath)).toBeTruthy();
  console.log(`File downloaded to specific folder: ${finalpath}`);
});

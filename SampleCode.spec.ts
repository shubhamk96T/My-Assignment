import { chromium, test } from "@playwright/test";

test("To launch a browser", async () => {

const browser = await chromium.launch({ headless: false, channel:"chrome" });

const browserContext = await browser.newContext();

const page = await browserContext.newPage();

await page.goto("https://playwright.dev/docs/locators");


});
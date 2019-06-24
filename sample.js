const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 250 });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.type('input[type="text"]', 'puppeteer');
  await page.evaluate(() => {
    document.querySelector('input[value="Google 検索"]').click();
  });
  await browser.close();
})();

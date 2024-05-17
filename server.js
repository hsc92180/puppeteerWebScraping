const puppeteer = require("puppeteer");

const WEBPAGE_URL = "https://www.iplt20.com/stats/";

const fetchData = async () => {
    const browser = await puppeteer.launch({
        headless: true});
    const page = await browser.newPage();
    // add viewport
    await page.setViewport({
        width: 1280,
        height: 900
    });
    await page.goto(WEBPAGE_URL);
    
    await page.waitForSelector("div.statsFilter");

    //const html = await page.content();
    // console.log(html);
    //browser.close();
};

fetchData();
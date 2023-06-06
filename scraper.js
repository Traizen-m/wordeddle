//const puppeteer = require('puppeteer');

async function scrapeGame(url){
    document.getElementById('wordleScrape').innerHTML("testing");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('/html/body/div/div/div/div/div[2]');
    const txt = await el.getProperty('textContent');
    const rawTxt = await txt.jsonValue();
    //console.log({rawTxt});

    browser.close();
}

function printMessage() {
    document.getElementById('wordleScrape').innerHTML("testing");
}
scrapeGame('https://www.nytimes.com/games/wordle/index.html');
// scripts/test.js
const puppeteer = require('puppeteer');

async function runTests() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Test loading
    await page.goto('http://localhost:3000');
    await page.waitForSelector('#h5p-container');
    
    // Test H5P initialization
    const h5pInitialized = await page.evaluate(() => {
        return document.querySelector('.h5p-content') !== null;
    });
    
    console.log('H5P initialized:', h5pInitialized);
    
    // Test content loading
    const contentLoaded = await page.evaluate(() => {
        return document.querySelector('.h5p-content-controls') !== null;
    });
    
    console.log('Content loaded:', contentLoaded);
    
    await browser.close();
}

runTests();
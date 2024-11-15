// scripts/monitor.js
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function runLighthouse() {
    const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
    const options = {logLevel: 'info', output: 'html', port: chrome.port};
    const runnerResult = await lighthouse('https://jcpopdigital.github.io/h5p-content', options);
    
    console.log('Performance score:', runnerResult.lhr.categories.performance.score * 100);
}
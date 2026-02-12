#!/usr/bin/env node
// Usage: node remote_debug_connect.js <wsUrl> [screenshotPath]
// Example: node remote_debug_connect.js ws://127.0.0.1:9222/devtools/browser/XXXX /tmp/screenshot.png
const puppeteer = require('puppeteer-core');
(async()=>{
  const ws = process.argv[2] || process.env.OPENCLAW_WS;
  const shot = process.argv[3] || '/tmp/openclaw_example_screenshot.png';
  if(!ws){
    console.error('Missing wsUrl. Provide as first arg or set OPENCLAW_WS env var.');
    process.exit(2);
  }
  try{
    const browser = await puppeteer.connect({browserWSEndpoint: ws});
    const page = await browser.newPage();
    await page.goto('https://example.com', {waitUntil: 'networkidle2'});
    await page.screenshot({path: shot});
    console.log('Saved screenshot to', shot);
    await browser.disconnect();
  }catch(e){
    console.error('Error:', e);
    process.exit(1);
  }
})();

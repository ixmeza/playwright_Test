const playwright = require ('playwright');
const assert = require("assert");
const expect = require('chai').expect

describe( 'Playwright 1', function() {
	this.timeout( 10000 );

	let browser, context,page;

	this.beforeEach( async function() {
		browser = await playwright.chromium.launch({ headless : false , slowMo: 50});
        context = await browser.newContext();
        page = await context.newPage();
        await page.setViewportSize({
            width: 480,
            height:640
        })
        await page.goto("http://the-internet.herokuapp.com/dynamic_loading/1",{waitUntil:'networkidle0'}); 
        // await page.screenshot({path: `heroku-${Date.now()}.png`});
       
	} );

	it('it waits until loading is completed', async function() {
       let startBtn = await page.click('div#start > button');
       let text = await page.waitForSelector('#finish',[state="visible"])
        
    } );

	this.afterEach( async function() {
		await browser.close();
	} );

} );

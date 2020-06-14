const playwright = require ('playwright');
const assert = require("assert");
const expect = require('chai').expect

describe( 'Playwright 1', function() {
	this.timeout( 10000 );

	let browser, context,page;

	this.beforeEach( async function() {
		browser = await playwright.chromium.launch({ headless : false });
        context = await browser.newContext();
        page = await context.newPage();
        await page.setViewportSize({
            width: 480,
            height:640
        })
        await page.goto("http://the-internet.herokuapp.com/",{waitUntil:'networkidle0'}); 
        // await page.screenshot({path: `heroku-${Date.now()}.png`});
       
	} );

	it( 'clicks on add remove element link', async function() {
        await page.click('[href*="add_remove_elements"]');
        //validation should go here
        let header = await page.$eval("h3", el => el.innerText)
        expect(header).to.equal("Add/Remove Elements")
        //click button
        let addButton = await page.click("[onclick]");
        let deleteButton = await page.click("[onclick='deleteElement\(\)']");
        
    } );

	this.afterEach( async function() {
		await browser.close();
	} );

} );

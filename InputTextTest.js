const playwright = require('playwright');
const expect = require('chai').expect;
const assert = require("assert");

describe ('Input text test with playwright', function(){

    this.timeout( 10000 );
    let browser, context,page;
    it('should enter username and password', async function(){
        browser = await playwright.chromium.launch({ headless : false});
        context = await browser.newContext();
        page = await context.newPage();

        await page.goto("http://the-internet.herokuapp.com/login");
        
        await page.fill("#username","username");
        await page.fill("#password","password");
       
        await page.click("button");
        await page.waitForSelector('#flash',[state="visible"])
        let error = await page.$eval("#flash", el => el.innerText);
        expect(error).to.contain('Your username is invalid!');
        await browser.close();
    });
    
});
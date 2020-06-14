const playwright = require('playwright');
const expect = require('chai').expect;
const assert = require("assert");

describe('Checkbox Test with playwright', function() {

    this.timeout( 10000 );
    let browser, context,page;
    
    beforeEach(async function(){
        browser = await playwright.chromium.launch({ headless : false});
        context = await browser.newContext();
        page = await context.newPage();
        await page.setViewportSize({
            width: 480,
            height:640
        })
        await page.goto("http://the-internet.herokuapp.com/checkboxes",{waitUntil:'networkidle0'}); 
    })

    it('should set a chexbox to true', async function() {
    
            let checkboxCount =  await page.$$eval("#checkboxes [type='checkbox']", el => el.length);
            expect(checkboxCount).to.equal(2);
            await page.click("#checkboxes [type='checkbox']:nth-child(1)");
            // //expect checkbox to be checked
            const checkbox =  await page.$("#checkboxes [type='checkbox']:nth-child(1)");
            let status = await checkbox.getAttribute('checked');
            expect(status).to.not.be.null;
    });
    it('should set a chexbox to false', async function() {
       
        await page.click("#checkboxes [type='checkbox']:nth-child(3)");
        // //expect checkbox not to be checked
        const checkbox =  await page.$("#checkboxes [type='checkbox']:nth-child(3)");
        let status = await checkbox.getAttribute('checked');
        expect(status).to.be.null;
    });
    
    
    afterEach(async function (){
       await browser.close();
    })

});
const playwright = require('playwright');
const expect = require('chai').expect;

describe('Combo box test with playwright', function(){
    
    this.timeout(10000);

    let browser, context, page;

    it('should click on combo box', async function (){
        browser = await playwright.chromium.launch({headless : false});
        context = await browser.newContext();
        page = await context.newPage();

        await page.goto("http://the-internet.herokuapp.com/dropdown");
        await page.click("#dropdown");
        
    });

    it('should select a value from combo box', async function (){

        let dropdown = await page.$("#dropdown");
        await dropdown.selectOption('2');
        let selectedOption = await page.$eval("option[selected]", el => el.innerHTML);
        expect(selectedOption).to.equal("Option 2");
        await browser.close();

    });

});
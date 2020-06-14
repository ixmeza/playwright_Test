const playwright = require ('playwright');

(async () => {
    //code execution 
    const browser = await playwright["chromium"].launch({
        headless : false
    });

    //context
    const context = await browser.newContext();

    //page
    const page = await context.newPage();

    //navigate to the page
    await page.goto("http://the-internet.herokuapp.com/");

    await page.screenshot({path: `heroku-${Date.now()}.png`});
    await browser.close();

})();
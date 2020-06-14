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
    await page.setViewportSize({
        width: 480,
        height:640
    })

    //navigate to the page and wait for network to be idle which waits for all network connections to be finished.
    await page.goto("http://the-internet.herokuapp.com/",{waitUntil:'networkidle0'});

    var waitPeriod = 1;

    //another way to wait
    //  await page.waitForResponse(response => {
    //      console.log("starting to wait ..."+waitPeriod);
    //      waitPeriod++;
    //      return response.request().resourceType() === "xhr";
    //  })
    await browser.close();

})();
const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function test_case(){
    //create driver
    let driver = await new Builder().forBrowser("chrome").build();

    //send driver to website
    await driver.get("https://google.com");

    //grab an element from the page, send text to that element, then press return key
    await driver.findElement(By.name("q")).sendKeys("Hello, World!", Key.RETURN);

    //close driver after 10 seconds
    setInterval(function(){
        driver.quit();
    }, 10000);
}

test_case();
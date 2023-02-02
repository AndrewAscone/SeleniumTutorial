const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");
const fs = require("fs");

async function scrape(){
    //create driver
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.youtube.com/channel/UClLRjv91UloHweZMyxpRPrw");

    //Set a timeout so the page can load before grabbing data
    await new Promise((resolve) => setTimeout(resolve, 5000));

    //get and display all of the links in the page
    var links = await driver.findElements(By.tagName("a"));

    for(let link of links){
        console.log(await link.getText());
    }

    //display a specific line in the page
    var line = await driver.findElement(By.partialLinkText("Kivy"));
    console.log(await line.getText());
    driver.quit();
}

scrape();
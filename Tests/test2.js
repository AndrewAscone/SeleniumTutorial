const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function test_case(){
    //create driver
    let driver = await new Builder().forBrowser("chrome").build();

    //send driver to website
    await driver.get("https://github.com/");

    //grab an element from the page
    await driver.findElement(By.partialLinkText("Sign in")).click();

    //display the title
    await new Promise((resolve) => setTimeout(resolve, 500)); 
    console.log(await driver.getTitle());

    //if the title isn't correct, end the test
    if(await driver.getTitle() === "Sign in to GitHub · GitHub"){
        console.log("Test #1 success");
    }else{
        console.log("Test #1 failed");
        return;
    }

    //input a username and password
    await driver.findElement(By.name("login")).sendKeys("SteamCode");
    await driver.findElement(By.name("password")).sendKeys("**********", Key.RETURN);

    if(await driver.findElement(By.className("flash-close js-flash-close")).isDisplayed()){
        console.log("Test #2 success")
    }

    //close driver
    //setInterval(function(){
        driver.quit();
    //}, 10000);
}

test_case();
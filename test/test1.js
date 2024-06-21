const { By, Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function test_case() {
    // Set Chrome options
    let options = new chrome.Options();
    options.addArguments('headless');
    options.addArguments('disable-gpu');
    options.setChromeBinaryPath('/usr/bin/google-chrome');

    // Create a Driver
    let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

    try {
        // Send driver to website
        await driver.get("http://54.160.4.233"); // IP from testing stage

        // Find the element
        let bodyElement = await driver.findElement(By.id('cell0'));
        
        // Get the text content of the element
        let actualFigure = await bodyElement.getText();

        // Expectations
        let expectedFigure = 'x';

        // Assertion
        if (actualFigure !== expectedFigure) {
            throw new Error(`Figures mismatch. Expected: ${expectedFigure}, Actual: ${actualFigure}`);
        } else {
            console.log('Figure is as expected.');
        }     

    } catch (error) {
        console.log('Test Failed because:', error);
    } finally {
        await driver.quit();
    }
}

test_case();



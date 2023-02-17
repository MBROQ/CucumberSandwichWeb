const Browser = require("./Browser");
const browser = new Browser();
const timeout = 20000;

class CustomWorld {
    constructor() {
    }

}
class Browser {
    constructor() {
        this.headless = null;
    }
}
/**
 * Constructs an emulated 'headless' Chrome browser
 */
browserBuild() {
    const options = new chrome.Options()
        .addArguments('--log-level=1')
        .headless()
        .setAcceptInsecureCerts(true)
        .windowSize({width: 1920, height: 1200});

    this.headless = new webdriver.Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
}


beforeAll(async () => {
    browser.browserBuild();
}, timeout);

beforeEach(async () => {
    await browser.browserNavigate('http://127.0.0.1:5501/');
}, timeout);

afterAll(async () => {
    await browser.browserExit();
}, timeout);
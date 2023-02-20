const cucumber = require("@cucumber/cucumber");


class CustomWorld {
    constructor() {
        this.headless = null;
    }

}





cucumber.setWorldConstructor(CustomWorld);
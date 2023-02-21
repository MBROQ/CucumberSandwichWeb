const assert = require('assert');
const { Given, When, Then,BeforeAll,AfterAll,Before } = require('@cucumber/cucumber');
//const { Browser } = require('selenium-webdriver');
const Browser = require("../../browser");
const browser = new Browser();


BeforeAll(function (){
    browser.browserBuild();
});

Before(async function(){
    await browser.browserNavigate('http://127.0.0.1:5501/');
})

AfterAll(async function(){
   await browser.browserExit();

}
)


Given("Website is loaded", function () {
assert(true);

});

//When("Button is clicked", function () {
    

//});

//When("Type in first name box", function () {
    

//});

//When("Contact us is clicked", function () {
    

//})
// Then The title should be "Berrymans Buiscuits"
Then("The title should be {string}", async function (title) {
    const actual= await browser.headless.getTitle();

    assert (actual==title)

})

//Then("Font color changes", function () {
    

//})

//Then("Picture shows as anticipated", function () {
    

//})

//Then("Sub Headings show as anticipated", function () {


//})

//Then("writing shows in first name box", function () {


//})

//Then("Sends to new page", function () {


//})
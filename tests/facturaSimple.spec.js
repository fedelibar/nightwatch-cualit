const landing = require("../locators/landing.locators");
const login = require("../locators/login.locators");
const dashboard = require("../locators/dashboard.locators");

describe("Log In flows", function () {

    const URL = "https://www.facturasimple.uy";
    const expectedRedirectURL = "https://admin.facturasimple.uy/signin";

    const expectedLoggedUser = "Demo Admin";

    before(browser => browser.navigateTo(URL)
        .windowMaximize("current"));

    test("Should login", function (browser) {
        browser
            .waitForElementVisible(landing.loginLink, "Sould be on landing page")
            .click(landing.loginLink)
            .assert.urlEquals(expectedRedirectURL, `The login link should redirect to ${expectedRedirectURL}`)
            .sendKeys(login.email, "demo@cualit.com")
            .sendKeys(login.pasword, "facturasimple")
            .click(login.loginButton)
            .waitForElementVisible(dashboard.title, "Should be on Dashboard page")
            .useXpath()
            .waitForElementVisible(dashboard.user, "The logged user dropdown should be visible")
            .assert.textContains(dashboard.user, expectedLoggedUser, `The logged user should be ${expectedLoggedUser}`)
    });

    after(browser => browser.end());
});

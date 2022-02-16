describe("Login Service Tests", () => {

    const URL = "https://api.facturasimple.uy/api/v1/usuarios/login";

    it("Response should be successfull if request is correct", (browser) => {

        const headers = { 'content-type': 'application/json' };

        const body = {
            email: "demo@cualit.com",
            password: "facturasimple"
        };

        browser.httpPost(URL, headers, body, (res, body) => {
            browser
                .assert.equal(res.statusCode, 200, "Status code should be 200")
                .assert.ok(body.success, "Success field value should be true")
                .assert.ok(body.token != null, "Token should not be empty")
        });
    })

    after(browser => browser.end());
});
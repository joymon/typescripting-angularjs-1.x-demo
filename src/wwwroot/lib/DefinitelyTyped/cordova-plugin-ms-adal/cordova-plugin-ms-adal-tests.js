/// <reference path="./cordova-plugin-ms-adal.d.ts"/>
function test_cordova_plugin_ms_adal() {
    var testConfiguration = {
        authority: 'https://login.microsoftonline.com/testtenant.onmicrosoft.com',
        resourceUrl: 'https://graph.windows.net/',
        clientId: '12345678-1234-1234-1234-123456789abc',
        redirectUrl: 'http://app.testtenant.onmicrosoft.com'
    };
    // create AuthenticationContext
    Microsoft.ADAL.AuthenticationContext.createAsync(testConfiguration.authority)
        .then(function (context) {
        context.tokenCache.readItems().then(function (cacheItems) {
            if (cacheItems.length >= 1) {
                var testUserId;
                testUserId = cacheItems[0].userInfo.userId;
                context.acquireTokenSilentAsync(testConfiguration.resourceUrl, testConfiguration.clientId, testUserId).then(function (authResult) {
                    console.log("Silently acquired token successfully");
                }, function (err) {
                    console.log("Failed to acquire token silently " + JSON.stringify(err));
                });
            }
            else {
                context.acquireTokenAsync(testConfiguration.resourceUrl, testConfiguration.clientId, testConfiguration.redirectUrl)
                    .then(function (authResult) {
                    console.log("Acquired token successfully");
                }, function (err) {
                    console.log("Failed to acquire token " + JSON.stringify(err));
                });
            }
        });
        // clear TokenCache
        context.tokenCache.clear();
    }, function (message) {
        console.log(message);
    });
}

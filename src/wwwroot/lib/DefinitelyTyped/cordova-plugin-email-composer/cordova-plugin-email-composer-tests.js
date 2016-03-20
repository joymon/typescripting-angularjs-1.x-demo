/// <reference path="../cordova/cordova.d.ts" />
/// <reference path="./cordova-plugin-email-composer.d.ts" />
cordova.plugins.email.isAvailable(function (isAvailable) { }, {});
cordova.plugins.email.open({
    to: ['foo@bar.com'],
    body: 'foo bar'
});
cordova.plugins.email.open();
cordova.plugins.email.open({}, function () { });
cordova.plugins.email.open({}, function () { }, {});
cordova.plugins.email.openDraft({
    to: ['foo@bar.com'],
    body: 'foo bar'
});
cordova.plugins.email.openDraft();
cordova.plugins.email.openDraft({}, function () { });
cordova.plugins.email.openDraft({}, function () { }, {});

/// <reference path="../cordova/plugins/Push.d.ts" />
/// <reference path="./cordova-plugin-insomnia.d.ts" />
window.plugins.insomnia.allowSleepAgain(function () { console.log("success"); }, function () { console.log("fail"); });
window.plugins.insomnia.keepAwake(function () { console.log("success"); }, function () { console.log("fail"); });

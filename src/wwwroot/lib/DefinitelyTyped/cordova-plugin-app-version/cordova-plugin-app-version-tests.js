/// <reference path="../cordova/cordova.d.ts" />
/// <reference path="./cordova-plugin-app-version.d.ts" />
cordova.getAppVersion.getAppName()
    .then(function (appName) {
    console.log(appName);
});
cordova.getAppVersion.getPackageName()
    .then(function (packageName) {
    console.log(packageName);
});
cordova.getAppVersion.getVersionCode()
    .then(function (versionCode) {
    console.log(versionCode);
});
cordova.getAppVersion.getVersionNumber()
    .then(function (versionNumber) {
    console.log(versionNumber);
});

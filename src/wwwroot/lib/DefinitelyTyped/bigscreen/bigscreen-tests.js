/// <reference path="bigscreen.d.ts"/>
var BigScreen = require("bigscreen");
BigScreen.onchange = function (element) {
    console.log("Full-screen element " + element + " changed.");
};
BigScreen.onenter = function (element) {
    console.log(BigScreen.element + " entered full-screen.");
};
BigScreen.onexit = function () {
    console.log("Exited full-screen.");
};
BigScreen.onerror = function (element, reason) {
    console.log("Error sending " + element + " into full-screen: " + reason);
};
console.log("full-screen-enabled? " + BigScreen.enabled);
BigScreen.request(document.documentElement);
BigScreen.exit();
BigScreen.toggle(document.documentElement);

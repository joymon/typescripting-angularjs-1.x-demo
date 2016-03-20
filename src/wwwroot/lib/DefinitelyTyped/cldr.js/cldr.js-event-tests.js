/// <reference path="cldr.js.d.ts" />
/// <reference path="cldr.js-event.d.ts" />
Cldr.on("get", function (path, value) {
    console.log(path);
    console.log(value);
});
Cldr.once("get", function (path, value) {
    console.log(path);
    console.log(value);
});
Cldr.off("get", function (path, value) {
    console.log(path);
    console.log(value);
});
var cldr = new Cldr("en");
cldr.on("get", function (path, value) {
    console.log(path);
    console.log(value);
});
cldr.once("get", function (path, value) {
    console.log(path);
    console.log(value);
});
cldr.off("get", function (path, value) {
    console.log(path);
    console.log(value);
});

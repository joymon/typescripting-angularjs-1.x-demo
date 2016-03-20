/// <reference path="./bcryptjs.d.ts"/>
var bcryptjs = require("bcryptjs");
var str;
var num;
var bool;
str = bcryptjs.genSaltSync();
str = bcryptjs.genSaltSync(10);
bcryptjs.genSalt(function (err, salt) {
    str = salt;
});
bcryptjs.genSalt(10, function (err, salt) {
    str = salt;
});
str = bcryptjs.hashSync("string");
str = bcryptjs.hashSync("string", 10);
str = bcryptjs.hashSync("string", "salt");
bcryptjs.hash("string", 10, function (err, hash) {
    str = hash;
});
bcryptjs.hash("string", 10, function (err, hash) {
    str = hash;
}, function (percent) {
    num = percent;
});
bcryptjs.hash("string", "salt", function (err, hash) {
    str = hash;
});
bcryptjs.hash("string", "salt", function (err, hash) {
    str = hash;
}, function (percent) {
    num = percent;
});
bool = bcryptjs.compareSync("string1", "string2");
bcryptjs.compare("string1", "string2", function (err, success) {
    bool = success;
});
bcryptjs.compare("string1", "string2", function (err, success) {
    bool = success;
}, function (percent) {
    num = percent;
});
num = bcryptjs.getRounds("string");
str = bcryptjs.getSalt("string");

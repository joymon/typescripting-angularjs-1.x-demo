/// <reference path="bcrypt.d.ts" />
var bcrypt = require("bcrypt");
var num;
var str;
var bool;
str = bcrypt.genSaltSync();
str = bcrypt.genSaltSync(num);
bcrypt.genSalt(function (err, salt) {
    str = salt;
});
bcrypt.genSalt(num, function (err, salt) {
    str = salt;
});
str = bcrypt.hashSync(str, str);
str = bcrypt.hashSync(str, num);
bcrypt.hash(str, str, function (err, encrypted) {
    str = encrypted;
});
bcrypt.hash(str, num, function (err, encrypted) {
    str = encrypted;
});
bool = bcrypt.compareSync(str, str);
bcrypt.compare(str, str, function (err, same) {
    bool = same;
});
num = bcrypt.getRounds(str);

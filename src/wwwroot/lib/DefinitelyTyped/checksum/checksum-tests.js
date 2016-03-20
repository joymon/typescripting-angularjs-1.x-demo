/// <reference path="checksum.d.ts" />
var checksum = require("checksum");
var s = checksum("abcd");
var t = checksum("abcd", { algorithm: 'sha1' });
checksum.file("myfile.txt", function (error, hash) {
    // do nothing
});
checksum.file("myfile.txt", { algorithm: 'sha1' }, function (error, hash) {
    // do nothing
});

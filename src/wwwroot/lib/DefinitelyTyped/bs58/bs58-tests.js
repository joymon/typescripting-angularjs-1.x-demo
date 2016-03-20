/// <reference path="./bs58.d.ts" />
var bs58 = require('bs58');
{
    var encoded_1;
    encoded_1 = bs58.encode([255]);
    encoded_1 = bs58.encode({ 0: 255, length: 1 });
}
var decoded = bs58.decode('5Q');

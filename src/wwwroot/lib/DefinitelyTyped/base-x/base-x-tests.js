/// <reference path="./base-x.d.ts" />
var basex = require('base-x');
var bs16 = basex('0123456789ABCDEF');
{
    var encoded_1;
    encoded_1 = bs16.encode([255]);
    encoded_1 = bs16.encode({ 0: 255, length: 1 });
}
var decoded = bs16.decode('FF');

/// <reference path="bitwise-xor.d.ts" />
"use strict";
var xor = require("bitwise-xor");
var b;
b = xor("a", "b");
b = xor(new Buffer("a"), new Buffer("b"));

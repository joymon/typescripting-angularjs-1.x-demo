/// <reference path="assertion-error.d.ts" />
var AssertionError = require('assertion-error');
var e;
var str;
function foo() {
}
e = new AssertionError(str);
e = new AssertionError(str, { a: 1, b: 2 });
e = new AssertionError(str, { a: 1, b: 2 }, foo);

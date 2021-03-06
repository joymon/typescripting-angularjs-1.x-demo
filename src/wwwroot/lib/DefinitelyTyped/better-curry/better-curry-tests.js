/// <reference path="better-curry.d.ts" />
var bc = require('better-curry');
bc.flatten([1, 2, 3, [1, 2], ['a']]) === [];
bc.MAX_OPTIMIZED = 5;
function fn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return [].concat([1]);
}
function fn2(arg1, arg2) {
    return parseInt(arg1 + String(arg2)) + 1;
}
bc.predefine(fn, [1, 2])() === [];
bc.predefine(fn, [1, 2]).__length === 3;
var f = bc.wrap(fn2, {}, 10, true);
f('1', 2) === 3;
var delegate = bc.delegate({}, 'ok');
delegate.access('ok') === delegate;
delegate.getter('getter').setter('setter') === delegate;
delegate.all(['1', '2']);
delegate.revoke('adsf').access('asdf');
BetterCurry.wrap(fn2, {}, -1, false).__length === 10;

/// <reference path="async-lock.d.ts" />
var AsyncLock = require("async-lock");
var lock = new AsyncLock();
lock.acquire("key", function (done) {
    done();
}, function (err, ret) { });
lock.acquire("key", function (done) {
    done();
}).then(function () { });
lock.acquire(["key1", "key2"], function (done) {
    done();
}, function (err, ret) { });
lock.isBusy();
var lock2 = new AsyncLock({ timeout: 5000 });
var lock3 = new AsyncLock({ maxPending: 5000 });
var lock4 = new AsyncLock({ Promise: null });

/// <reference path="auto-launch.d.ts" />
var AutoLaunch = require('auto-launch');
var a1 = new AutoLaunch({
    name: 'Foo',
});
var a2 = new AutoLaunch({
    name: 'Foo',
    path: '/Applications/Foo.app',
    isHidden: true,
});
a1.enable();
a2.disable();
a1.isEnabled(function (enabled) {
    if (enabled) {
        return;
    }
    a1.enable(function (err) { console.log(err.message); });
});

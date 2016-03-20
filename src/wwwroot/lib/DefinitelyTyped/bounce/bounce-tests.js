/// <reference path="./bounce.d.ts" />
/// <reference path="./../jquery/jquery.d.ts" />
var bounce_js_1 = require('bounce.js');
var $ = require('jquery');
function test_chaining_transformations() {
    var bounce = new bounce_js_1.default();
    bounce
        .scale({
        from: { x: 0, y: 0 },
        to: { x: 2, y: 2 },
        duration: 1000
    })
        .rotate({
        from: 0,
        to: 360,
        delay: 500
    })
        .translate({
        from: { x: 0, y: -100 },
        to: { x: 0, y: 0 },
        stiffness: 1,
        bounces: 4
    })
        .skew({
        from: { x: 1, y: 0.8 },
        to: { x: 0.8, y: 1 },
        easing: 'bounce'
    });
}
function test_serialization() {
    var b1 = new bounce_js_1.default();
    var serialized = b1.serialize();
    var b2 = new bounce_js_1.default();
    b2.deserialize(serialized);
}
function test_apply() {
    var bounce = new bounce_js_1.default();
    var element = document.createElement('div');
    bounce.applyTo(element);
    bounce.applyTo([element]);
    bounce.applyTo($('div'));
    var options = {
        loop: true,
        remove: true,
        onComplete: function () { }
    };
    bounce.applyTo(element, options);
    bounce.applyTo([element], options);
    bounce.applyTo($('div'), options);
}
function test_apply_promise() {
    var bounce = new bounce_js_1.default();
    var element = document.createElement('div');
    bounce.applyTo($('div')).then(function () { });
    var options = {
        loop: true,
        remove: true
    };
    bounce.applyTo($('div')).then(function () { });
}
function test_define() {
    var bounce = new bounce_js_1.default();
    bounce.define('named-animation');
}
function test_remove() {
    var bounce = new bounce_js_1.default();
    bounce.remove();
}

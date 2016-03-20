/// <reference path="animation-frame.d.ts"/>
var AnimationFrameTests;
(function (AnimationFrameTests) {
    var animation = new AnimationFrame();
    function frame() {
        animation.request(frame);
    }
    animation.request(frame);
})(AnimationFrameTests || (AnimationFrameTests = {}));

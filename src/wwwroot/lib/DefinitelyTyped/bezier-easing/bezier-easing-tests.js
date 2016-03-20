/// <reference path="bezier-easing.d.ts" />
function get_easing() {
    var easing = BezierEasing(0, 0, 1, 0.5);
}
function use_easing() {
    var easing = BezierEasing(0, 0, 1, 0.5);
    var eased = easing(1);
}

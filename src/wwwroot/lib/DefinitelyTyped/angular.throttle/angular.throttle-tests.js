/// <reference path="angular.throttle.d.ts" />
/// <reference path='../angularjs/angular.d.ts' />
var throttledFn = angular.throttle(function (someArg) {
    return someArg;
}, 100);
var result = throttledFn(10);

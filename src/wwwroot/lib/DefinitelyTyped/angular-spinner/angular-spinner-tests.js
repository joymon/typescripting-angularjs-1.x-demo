/// <reference path="angular-spinner.d.ts" />
var myApp = angular.module('testModule');
var AngularSpinnerTest;
(function (AngularSpinnerTest) {
    var app = angular.module("angularSpinnerTest", ["angular-spinner"]);
    app.config(['usSpinnerService', function (usSpinnerService) {
            usSpinnerService.spin('key1');
            usSpinnerService.stop('key2');
        }]);
})(AngularSpinnerTest || (AngularSpinnerTest = {}));

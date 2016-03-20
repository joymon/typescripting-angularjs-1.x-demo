/// <reference path="angular-loading-bar.d.ts" />
var app = angular.module('testModule', ['angular-loading-bar']);
var TestController = (function () {
    function TestController($http) {
        $http.get("http://xyz.com", { ignoreLoadingBar: true });
    }
    return TestController;
})();
app.controller('TestController', TestController);
var barConfig = [];
barConfig.push({
    includeSpinner: true,
    includeBar: true,
    spinnerTemplate: 'template',
    latencyThreshold: 100
});

/// <reference path='../angularjs/angular.d.ts' />
/// <reference path='angular-local-storage.d.ts' />
var TestController = (function () {
    function TestController($scope, localStorageService) {
        // isSupported
        if (localStorageService.isSupported) {
        }
        // getStorageType
        var storageType = localStorageService.getStorageType();
        // set
        $scope.submit = function (key, value) {
            return localStorageService.set(key, value);
        };
        // get
        $scope.getItem = function (key) {
            return localStorageService.get(key);
        };
        // remove
        $scope.removeItem = function (key) {
            return localStorageService.remove(key);
        };
        // clearAll(regexp)
        $scope.clearNumbers = function () {
            return localStorageService.clearAll(/^\d+$/);
        };
        // clearAll
        $scope.clearAll = function () {
            return localStorageService.clearAll();
        };
        // keys
        var lsKeys = localStorageService.keys();
        // bind
        localStorageService.set('property', 'oldValue');
        $scope.unbind = localStorageService.bind($scope, 'property');
        // deriveKey
        console.log(localStorageService.deriveKey('property')); // ls.property
        // length
        var lsLength = localStorageService.length();
    }
    return TestController;
})();
exports.TestController = TestController;
var app = angular.module('angular-local-storage-tests', ['LocalStorageModule']);
app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('myApp')
        .setStorageType('sessionStorage')
        .setNotify(true, true);
});
app.controller('TestController', TestController);

///<reference path="../angularjs/angular.d.ts" />
///<reference path="./angularLocalStorage.d.ts" />
var TestController = (function () {
    function TestController($scope, storage) {
        this.$scope = $scope;
        this.storage = storage;
        storage.bind($scope, 'varName');
        storage.bind($scope, 'varName', { defaultValue: 'randomValue123', storeName: 'customStoreKey' });
        $scope.viewType = 'ANYTHING';
        storage.unbind($scope, 'viewType');
        storage.set('key', 'value');
        storage.get('key');
        storage.remove('key');
        storage.clearAll();
    }
    return TestController;
})();
exports.TestController = TestController;
var app = angular.module('angularLocalStorageTests', ['angularLocalStorage']);
app.controller('testCtrl', ['$scope', 'storage', function ($scope, storage) { return new TestController($scope, storage); }]);

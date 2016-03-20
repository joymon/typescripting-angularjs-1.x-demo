/// <reference path="angular-ui-scroll.d.ts" />
var myApp = angular.module('application', ['ui.scroll', 'ui.scroll.jqlite']);
var application;
(function (application) {
    var DatasourceTest = (function () {
        function DatasourceTest() {
        }
        DatasourceTest.prototype.get = function (index, count, success) {
            var ret = new Array();
            for (var i = 0; i < count; i++) {
                ret.push({ id: i, content: 'item ' + i.toString() });
            }
            success(ret);
        };
        return DatasourceTest;
    })();
    function factory() {
        return DatasourceTest;
    }
    myApp.factory('DatasourceTest', factory);
    // demo/examples/adapter
    myApp.controller('mainController', ['$scope', 'DatasourceTest', function ($scope, datasource) {
            var firstListAdapter, secondListAdapter;
            $scope['datasource'] = datasource;
            $scope['updateList1'] = function () {
                firstListAdapter.applyUpdates(function (item, scope) {
                    return item.content += ' *';
                });
            };
            $scope['removeFromList1'] = function () {
                firstListAdapter.applyUpdates(function (item, scope) {
                    if (scope.$index % 2 === 0) {
                        return [];
                    }
                });
            };
            var idList1 = 1000;
            $scope['addToList1'] = function () {
                firstListAdapter.applyUpdates(function (item, scope) {
                    var newItem;
                    newItem = void 0;
                    if (scope.$index === 2) {
                        newItem = {
                            id: idList1,
                            content: 'a new one #' + idList1
                        };
                        idList1++;
                        return [item, newItem];
                    }
                });
            };
            $scope['updateList2'] = function () {
                secondListAdapter.applyUpdates(function (item, scope) {
                    return item.content += ' *';
                });
            };
            $scope['removeFromList2'] = function () {
                secondListAdapter.applyUpdates(function (item, scope) {
                    if (scope.$index % 2 !== 0) {
                        return [];
                    }
                });
            };
            var idList2 = 2000;
            $scope['addToList2'] = function () {
                secondListAdapter.applyUpdates(function (item, scope) {
                    var newItem;
                    newItem = void 0;
                    if (scope.$index === 4) {
                        newItem = {
                            id: idList2,
                            content: 'a new one #' + idList1
                        };
                        idList2++;
                        return [item, newItem];
                    }
                });
            };
        }]);
})(application || (application = {}));

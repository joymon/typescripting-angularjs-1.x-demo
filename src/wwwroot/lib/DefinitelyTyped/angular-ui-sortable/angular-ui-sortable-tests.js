/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="angular-ui-sortable.d.ts" />
var myApp = angular.module('testModule');
myApp.controller('sortableController', function ($scope) {
    $scope.sortableOptions = {
        activate: function (e, ui) {
            var jQueryEventObject = e;
            var uiSortableUIParams = ui;
        },
        beforeStop: function (e, ui) {
            var jQueryEventObject = e;
            var uiSortableUIParams = ui;
        },
        change: function (e, ui) {
            var jQueryEventObject = e;
            var uiSortableUIParams = ui;
        },
        deactivate: function (e, ui) {
            var jQueryEventObject = e;
            var uiSortableUIParams = ui;
        },
        out: function (e, ui) {
            var jQueryEventObject = e;
            var uiSortableUIParams = ui;
        },
        over: function (e, ui) {
            var jQueryEventObject = e;
            var uiSortableUIParams = ui;
        },
        receive: function (e, ui) {
            var jQueryEventObject = e;
            var uiSortableUIParams = ui;
        },
        remove: function (e, ui) {
            var jQueryEventObject = e;
            var uiSortableUIParams = ui;
        },
        sort: function (e, ui) {
            var jQueryEventObject = e;
            var uiSortableUIParams = ui;
        },
        start: function (e, ui) {
            var jQueryEventObject = e;
            var uiSortableUIParams = ui;
        },
        stop: function (e, ui) {
            var jQueryEventObject = e;
            var uiSortableUIParams = ui;
            var uiitem = ui.item;
            var uiitemscope = uiitem.scope();
            var uiitemsortable = uiitem.sortable;
            var dropindex = uiitemsortable.dropindex;
            var droptarget = uiitemsortable.droptarget;
            var droptargetModel = uiitemsortable.droptargetModel;
            var index = uiitemsortable.index;
            var model = uiitemsortable.model;
            var moved = uiitemsortable.moved;
            var received = uiitemsortable.received;
            var source = uiitemsortable.source;
            var sourceModel = uiitemsortable.sourceModel;
            var logEntry = {
                ID: $scope.sortingLog.length + 1,
                Text: 'Moved element: ' + ui.item.sortable.model.text
            };
            $scope.sortingLog.push(logEntry);
        },
        update: function (e, ui) {
            var jQueryEventObject = e;
            var uiSortableUIParams = ui;
            var voidcanceled = ui.item.sortable.cancel();
            var isCanceled = ui.item.sortable.isCanceled();
            var isCustomHelperUsed = ui.item.sortable.isCustomHelperUsed();
        }
    };
    $scope.sortableOptions.appendTo = document.body;
    $scope.sortableOptions.appendTo = angular.element(document.body);
    $scope.sortableOptions.appendTo = 'body';
    $scope.sortableOptions.axis = 'x';
    $scope.sortableOptions.axis = 'y';
    $scope.sortableOptions.axis = false;
    $scope.sortableOptions.cancel = '.disabled';
    $scope.sortableOptions.connectWith = '.connectedSortable';
    $scope.sortableOptions.connectWith = false;
    $scope.sortableOptions.containment = 'parent';
    $scope.sortableOptions.containment = 'body';
    $scope.sortableOptions.containment = document.body;
    $scope.sortableOptions.containment = false;
    $scope.sortableOptions.cursor = 'move';
    $scope.sortableOptions.cursorAt = false;
    $scope.sortableOptions.cursorAt = { left: 5 };
    $scope.sortableOptions.delay = 300;
    $scope.sortableOptions.disabled = true;
    $scope.sortableOptions.distance = 5;
    $scope.sortableOptions.dropOnEmpty = false;
    $scope.sortableOptions.forceHelperSize = true;
    $scope.sortableOptions.forcePlaceholderSize = true;
    $scope.sortableOptions.grid = false;
    $scope.sortableOptions.grid = [20, 10];
    $scope.sortableOptions.handle = '.handle';
    $scope.sortableOptions.helper = 'clone';
    $scope.sortableOptions.helper = function (e, item) {
        return item.clone();
    };
    $scope.sortableOptions.items = '> li:not(.disabled)';
    $scope.sortableOptions.opacity = false;
    $scope.sortableOptions.opacity = 0.5;
    $scope.sortableOptions.placeholder = false;
    $scope.sortableOptions.placeholder = 'sortable-placeholder';
    $scope.sortableOptions.revert = true;
    $scope.sortableOptions.revert = 300;
    $scope.sortableOptions.scroll = false;
    $scope.sortableOptions.scrollSensitivity = 10;
    $scope.sortableOptions.scrollSpeed = 40;
    $scope.sortableOptions.tolerance = 'pointer';
    $scope.sortableOptions.zIndex = 9999;
    $scope.sortableOptions['ui-floating'] = undefined;
    $scope.sortableOptions['ui-floating'] = null;
    $scope.sortableOptions['ui-floating'] = false;
    $scope.sortableOptions['ui-floating'] = true;
    $scope.sortableOptions['ui-floating'] = "auto";
});

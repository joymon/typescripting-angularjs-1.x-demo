/// <reference path="angular-notifications.d.ts" />
var myapp = angular.module("myapp", ["notifications"]);
myapp.controller("MyController", ["$scope", "notifications",
    function ($scope, notifications) {
        var userData = { 'some': 'data', 'optional': true };
        notifications.info("Something happened", "here is the content of what happened", userData);
    }
]);

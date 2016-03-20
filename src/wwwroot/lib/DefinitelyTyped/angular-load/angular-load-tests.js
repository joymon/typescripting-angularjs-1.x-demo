/// <reference path="./angular-load.d.ts" />
angular.module('app', ['angularLoad'])
    .run(['angularLoad', function (angularLoad) {
        angularLoad.loadScript("https://ajax.googleapis.com/ajax/libs/angular_material/1.0.4/angular-material.min.js").then(function () { return console.log("angular material js loaded"); });
        angularLoad.loadCSS("https://ajax.googleapis.com/ajax/libs/angular_material/1.0.4/angular-material.css").then(function () { return console.log("angular material css loaded"); });
    }]);

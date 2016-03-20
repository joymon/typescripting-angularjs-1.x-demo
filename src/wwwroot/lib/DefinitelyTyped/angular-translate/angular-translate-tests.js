/// <reference path="angular-translate.d.ts" />
var app = angular.module('at', ['pascalprecht.translate']);
app.factory('customLoader', function ($q) {
    return function (options) {
        var dfd = $q.defer();
        dfd.resolve('whatever you wanted to translate, I simply know nothing about the language with the key ' + options.key);
        return dfd.promise;
    };
});
app.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        TITLE: 'Hello',
        FOO: 'This is a paragraph.',
        BUTTON_LANG_EN: 'english',
        BUTTON_LANG_DE: 'german'
    });
    $translateProvider.translations('de', {
        TITLE: 'Hallo',
        FOO: 'Dies ist ein Paragraph.',
        BUTTON_LANG_EN: 'englisch',
        BUTTON_LANG_DE: 'deutsch'
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useLoader('customLoader');
    $translateProvider.forceAsyncReload(true);
});
app.controller('Ctrl', function ($scope, $translate) {
    $scope['changeLanguage'] = function (key) {
        $translate.use(key);
    };
}).run(function ($filter) {
    var x;
    x = $filter('translate')('something');
    x = $filter('translate')('something', {});
    x = $filter('translate')('something', {}, '');
});

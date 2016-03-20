/// <reference path='../angularjs/angular.d.ts' />
/// <reference path='angular-dynamic-locale.d.ts' />
var app = angular.module('testModule', ['tmh.dynamicLocale']);
app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .localeLocationPattern("app/config/locales/")
        .useCookieStorage();
});
var LocaleTestController = (function () {
    function LocaleTestController(tmhDynamicLocaleService) {
        var locale = tmhDynamicLocaleService.get();
        var newLocale = "mt";
        tmhDynamicLocaleService.set(newLocale);
    }
    return LocaleTestController;
})();
app.controller('TestController', LocaleTestController);

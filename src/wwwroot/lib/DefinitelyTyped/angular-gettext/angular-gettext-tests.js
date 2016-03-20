/// <reference path="angular-gettext.d.ts" />
var angular_gettext_tests;
(function (angular_gettext_tests) {
    // Configuring angular-gettext
    // https://angular-gettext.rocketeer.be/dev-guide/configure/
    //Setting the language
    angular.module('myApp').run(function (gettextCatalog) {
        gettextCatalog.setCurrentLanguage('nl');
    });
    //Highlighting untranslated strings
    angular.module('myApp').run(function (gettextCatalog) {
        gettextCatalog.debug = true;
    });
    // Marking strings in JavaScript code as translatable.
    // https://angular-gettext.rocketeer.be/dev-guide/annotate-js/
    angular.module("myApp").controller("helloController", function (gettext) {
        var myString = gettext("Hello");
    });
    //Translating directly in JavaScript.
    angular.module("myApp").controller("helloController", function (gettextCatalog) {
        var translated = gettextCatalog.getString("Hello");
    });
    angular.module("myApp").controller("helloController", function (gettextCatalog) {
        var myString2 = gettextCatalog.getPlural(3, "Bird", "Birds");
    });
    angular.module("myApp").controller("helloController", function (gettextCatalog) {
        var translated = gettextCatalog.getString("Hello {{name}}", { name: "Ruben" });
    });
    // Setting strings manually
    // https://angular-gettext.rocketeer.be/dev-guide/manual-setstrings/
    angular.module("myApp").run(function (gettextCatalog) {
        // Load the strings automatically during initialization.
        gettextCatalog.setStrings("nl", {
            "Hello": "Hallo",
            "One boat": ["Een boot", "{{$count}} boats"]
        });
    });
    // Lazy-loading languages
    // https://angular-gettext.rocketeer.be/dev-guide/lazy-loading/
    angular.module("myApp").controller("helloController", function ($scope, gettextCatalog) {
        $scope.switchLanguage = function (lang) {
            gettextCatalog.setCurrentLanguage(lang);
            gettextCatalog.loadRemote("/languages/" + lang + ".json");
        };
    });
})(angular_gettext_tests || (angular_gettext_tests = {}));

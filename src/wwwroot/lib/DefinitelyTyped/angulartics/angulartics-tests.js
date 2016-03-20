/// <reference path="angulartics.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
var Analytics;
(function (Analytics) {
    angular.module("angulartics.app", ["angulartics"])
        .config(["$analyticsProvider", function ($analyticsProvider) {
            angulartics.waitForVendorApi("location", 1000, function (message) {
                console.log(message);
            });
            $analyticsProvider.virtualPageviews(false);
            $analyticsProvider.firstPageview(false);
            $analyticsProvider.withAutoBase(true);
            $analyticsProvider.developerMode(true);
            $analyticsProvider.registerEventTrack(function (action, properties) {
                console.log(action);
            });
            $analyticsProvider.registerPageTrack(function (path, locationObj) {
                console.log("viewed " + path);
            });
            $analyticsProvider.settings.pageTracking.basePath = "/my/base/path";
        }]);
})(Analytics || (Analytics = {}));

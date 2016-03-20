/// <reference path="angular-ui-router.d.ts" />
var _this = this;
var myApp = angular.module('testModule');
myApp.config(function ($stateProvider, $urlRouterProvider, $urlMatcherFactory) {
    var matcher = $urlMatcherFactory.compile("/foo/:bar?param1");
    $urlMatcherFactory.caseInsensitive(false);
    var isCaseInsensitive = $urlMatcherFactory.caseInsensitive();
    $urlMatcherFactory.defaultSquashPolicy("nosquash");
    $urlMatcherFactory.strictMode(true);
    var isStrictMode = $urlMatcherFactory.strictMode();
    $urlMatcherFactory.type("myType2", {
        encode: function (item) { return item; },
        decode: function (item) { return item; },
        is: function (item) { return true; }
    });
    $urlMatcherFactory.type("fullType", {
        decode: function (val) { return parseInt(val, 10); },
        encode: function (val) { return val && val.toString(); },
        equals: function (a, b) { return _this.is(a) && a === b; },
        is: function (val) { return angular.isNumber(val) && isFinite(val) && val % 1 === 0; },
        pattern: /\d+/
    });
    var obj = matcher.exec('/user/bob', { x: '1', q: 'hello' });
    var concat = matcher.concat('/test');
    var str = matcher.format({ id: 'bob', q: 'yes' });
    var arr = matcher.parameters();
    $urlRouterProvider
        .when('/test', '/list')
        .when('/test', '/list')
        .when('/test', '/list')
        .when(/\/test\d/, '/list')
        .when(/\/test\d/, function ($injector, $location) { return '/list'; })
        .when(/\/test\d/, ['$injector', '$location', function ($injector, $location) { return '/list'; }])
        .when(matcher, '/list')
        .when(matcher, function ($injector, $location) { return '/list'; })
        .when(matcher, ['$injector', '$location', function ($injector, $location) { return '/list'; }])
        .otherwise("/state1");
    // Now set up the states
    $stateProvider
        .state('state1', {
        url: "/state1",
        templateUrl: "partials/state1.html",
        params: {
            param1: "defaultValue",
            param2: undefined
        }
    })
        .state('state1.list', {
        url: "/list",
        templateUrl: "partials/state1.list.html",
        controller: function ($scope) {
            $scope.items = ["A", "List", "Of", "Items"];
        }
    })
        .state('state1.list', {
        url: "/list",
        templateUrl: "partials/state1.list.html",
        controller: ['$scope', function ($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }]
    })
        .state('state2', {
        url: "/state2",
        templateUrl: "partials/state2.html"
    })
        .state('state2.list', {
        url: "/list",
        templateUrl: "partials/state2.list.html",
        controller: function ($scope) {
            $scope.things = ["A", "Set", "Of", "Things"];
        }
    })
        .state('list', {
        parent: 'state3',
        url: "/list",
        templateUrl: "partials/state3.list.html",
        controller: function ($scope) {
            $scope.things = ["A", "Set", "Of", "Things"];
        }
    })
        .state('state4', {
        url: "/state4",
        templateUrl: function ($stateParams) {
            //Logic could go here based on $stateParams
            return "partials/state4.html";
        }
    })
        .state('index', {
        url: "",
        views: {
            "viewA": { template: "index.viewA" },
            "viewB": { template: "index.viewB" }
        }
    })
        .state('route1', {
        url: "/route1",
        views: {
            "viewA": { template: "route1.viewA" },
            "viewB": { template: "route1.viewB" }
        }
    })
        .state('route2', {
        url: "/route2",
        views: {
            "viewA": { template: "route2.viewA" },
            "viewB": { template: "route2.viewB" }
        }
    });
});
// Service for determining who the currently logged on user is.
var UrlLocatorTestService = (function () {
    function UrlLocatorTestService($http, $rootScope, $urlRouter, $state) {
        var _this = this;
        this.$http = $http;
        this.$rootScope = $rootScope;
        this.$urlRouter = $urlRouter;
        this.$state = $state;
        $rootScope.$on("$locationChangeSuccess", function (event) { return _this.onLocationChangeSuccess(event); });
    }
    UrlLocatorTestService.prototype.onLocationChangeSuccess = function (event) {
        var _this = this;
        if (!this.currentUser) {
            // If the current user is unknown, halt the state change and request current
            // user details from the server
            event.preventDefault();
            // Note that we do not concern ourselves with what to do if this request fails,
            // because if it fails, the web page will be redirected away to the login screen.
            this.$http({ url: "/api/me", method: "GET" }).success(function (user) {
                _this.currentUser = user;
                // sync the ui-state with the location in the browser, which effectively
                // restarts the state change that was stopped previously
                _this.$urlRouter.sync();
            });
        }
    };
    UrlLocatorTestService.prototype.stateServiceTest = function () {
        this.$state.go("myState");
        this.$state.go(this.$state.current);
        this.$state.transitionTo("myState");
        this.$state.transitionTo(this.$state.current);
        if (this.$state.includes("myState") === true) {
        }
        if (this.$state.is("myState") === true) {
        }
        if (this.$state.href("myState") === "/myState") {
        }
        this.$state.get();
        this.$state.get("myState");
        this.$state.get("myState", "yourState");
        this.$state.get("myState", this.$state.current);
        this.$state.get(this.$state.current);
        this.$state.get(this.$state.current, "yourState");
        this.$state.get(this.$state.current, this.$state.current);
        this.$state.reload();
        // http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$state#properties
        if (this.$state.transition) {
            var transitionPromise = this.$state.transition;
            transitionPromise.then(function () {
                // transition success
            }, function () {
                // transition failure
            }).catch(function () {
                // transition failure
            }).finally(function () {
                // transition ended (success or failure)
            });
        }
        // Accesses the currently resolved values for the current state
        // http://stackoverflow.com/questions/28026620/is-there-a-way-to-access-resolved-state-dependencies-besides-injecting-them-into/28027023#28027023
        var resolvedValues = this.$state.$current.locals.globals;
    };
    UrlLocatorTestService.$inject = ["$http", "$rootScope", "$urlRouter", "$state"];
    return UrlLocatorTestService;
})();
myApp.service("urlLocatorTest", UrlLocatorTestService);
var UiViewScrollProviderTests;
(function (UiViewScrollProviderTests) {
    var app = angular.module("uiViewScrollProviderTests", ["ui.router"]);
    app.config(['$uiViewScrollProvider', function ($uiViewScrollProvider) {
            // This prevents unwanted scrolling to the active nested state view.
            // Use this when you have nested states, but you don't want the browser to scroll down the page
            // to the nested state view.
            //
            // See https://github.com/angular-ui/ui-router/issues/848
            // And https://github.com/angular-ui/ui-router/releases/tag/0.2.8
            $uiViewScrollProvider.useAnchorScroll();
        }]);
})(UiViewScrollProviderTests || (UiViewScrollProviderTests = {}));
var UrlRouterProviderTests;
(function (UrlRouterProviderTests) {
    var app = angular.module("urlRouterProviderTests", ["ui.router"]);
    app.config(function ($urlRouterProvider) {
        // Prevent $urlRouter from automatically intercepting URL changes;
        // this allows you to configure custom behavior in between
        // location changes and route synchronization:
        $urlRouterProvider.deferIntercept();
    }).run(function ($rootScope, $urlRouter, UserService, $urlMatcher) {
        $rootScope.$on('$locationChangeSuccess', function (e) {
            // UserService is an example service for managing user state
            if (UserService.isLoggedIn())
                return;
            // Prevent $urlRouter's default handler from firing
            e.preventDefault();
            UserService.handleLogin().then(function () {
                // Once the user has logged in, sync the current URL to the router:
                $urlRouter.sync();
            });
        });
        // Configures $urlRouter's listener *after* your custom listener
        var listen = $urlRouter.listen();
        var href;
        href = $urlRouter.href($urlMatcher);
        href = $urlRouter.href($urlMatcher, {});
        href = $urlRouter.href($urlMatcher, {}, {});
        $urlRouter.update();
        $urlRouter.update(false);
        $urlRouter.push($urlMatcher);
        $urlRouter.push($urlMatcher, {});
        $urlRouter.push($urlMatcher, {}, {});
    });
})(UrlRouterProviderTests || (UrlRouterProviderTests = {}));

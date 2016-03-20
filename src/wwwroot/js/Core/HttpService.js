var WorldDataBank;
(function (WorldDataBank) {
    var Core;
    (function (Core) {
        "use strict";
        var HttpService = (function () {
            function HttpService($http, $q, $rootScope) {
                this.$http = $http;
                this.$q = $q;
                this.$rootScope = $rootScope;
            }
            HttpService.prototype.get = function (url, config) {
                var deferred = this.$q.defer();
                this.$http.get(url, config)
                    .error(function (data, status, headers, config) {
                    deferred.reject("Error occured while processing the request");
                })
                    .then(function (response) {
                    deferred.resolve(response);
                });
                return deferred.promise;
            };
            HttpService.prototype.post = function (url, data, config) {
                var deferred = this.$q.defer();
                this.$http.post(url, data, config).success(function (response) {
                    deferred.resolve(response);
                }).error(function (data, status, headers, config) {
                    deferred.reject("Error occured while processing the request");
                });
                return deferred.promise;
            };
            HttpService.prototype.put = function (url, data, config) {
                var deferred = this.$q.defer();
                this.$http.put(url, data, config).success(function (response) {
                    deferred.resolve(response);
                }).error(function (data, status, headers, config) {
                    deferred.reject("Error occured while processing the request");
                });
                return deferred.promise;
            };
            HttpService.prototype.delete = function (url, data, config) {
                var deferred = this.$q.defer();
                this.$http.delete(url, config).success(function (response) {
                    deferred.resolve(response);
                }).error(function (data, status, headers, config) {
                    deferred.reject("Error occured while processing the request");
                });
                return deferred.promise;
            };
            HttpService.$inject = ["$http", "$q", "$rootScope"];
            return HttpService;
        })();
        Core.HttpService = HttpService;
        //angular.module("CountryApp").service("HttpService", HttpService);
        WorldDataBank.WorldDataBankModule.getInstance().registerService("HttpService", HttpService);
    })(Core = WorldDataBank.Core || (WorldDataBank.Core = {}));
})(WorldDataBank || (WorldDataBank = {}));

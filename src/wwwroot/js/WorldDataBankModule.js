/// <reference path="../lib/DefinitelyTyped/angularjs/angular.d.ts" />
var WorldDataBank;
(function (WorldDataBank) {
    "use strict";
    var WorldDataBankModule = (function () {
        function WorldDataBankModule() {
            this.app = angular.module("WorldDataBankApp", []);
            WorldDataBankModule.currentCountryModule = this;
        }
        WorldDataBankModule.getInstance = function () {
            return WorldDataBankModule.currentCountryModule;
        };
        WorldDataBankModule.prototype.registerService = function (name, serviceConstructor) {
            this.app.service(name, serviceConstructor);
        };
        WorldDataBankModule.prototype.registerController = function (name, controllerConstructor) {
            this.app.controller(name, controllerConstructor);
        };
        return WorldDataBankModule;
    })();
    WorldDataBank.WorldDataBankModule = WorldDataBankModule;
    var hrApp = new WorldDataBankModule();
})(WorldDataBank || (WorldDataBank = {}));

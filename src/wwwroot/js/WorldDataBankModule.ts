/// <reference path="../lib/DefinitelyTyped/angularjs/angular.d.ts" />
module WorldDataBank {
    "use strict";
    export class WorldDataBankModule {
        //Do not expose the property as it is not expected to change from outside.
        private static currentCountryModule: WorldDataBankModule;
        public static getInstance(): WorldDataBankModule {
            return WorldDataBankModule.currentCountryModule;
        }
        private app: ng.IModule;
        constructor() {
            this.app = angular.module("WorldDataBankApp",  []);
            WorldDataBankModule.currentCountryModule = this;
        }
        registerService(name: string, serviceConstructor: Function): void {
            this.app.service(name, serviceConstructor);
		}
		registerController(name: string, controllerConstructor: Function): void {
			this.app.controller(name, controllerConstructor);
		}
	}
	var hrApp: WorldDataBankModule = new WorldDataBankModule();
}
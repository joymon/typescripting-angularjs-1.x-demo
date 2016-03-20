/// <reference path="WorldDataBankModule.ts" />
module WorldDataBank {
	export class CountryController {
		testprop: number;
		constructor() {
			this.testprop = 10;
		}
	}
	WorldDataBankModule.getInstance().registerController('CountryController', CountryController);
	//angular.module("WorldDataBankApp", []).controller('CountryController', CountryController);
}

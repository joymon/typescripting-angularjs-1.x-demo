class CountryController {
	testprop: number;
	constructor() {
		this.testprop = 10;
	}
}
angular.module("WorldDataBankApp", []).controller('CountryController',CountryController);
/// <reference path="WorldDataBankModule.ts" />
module WorldDataBank {
	export class CountryController {
		static $inject = ["CountryMetaDataService"];
		testprop: number;
		countryMetaDataService: CountryMetaDataService;
		Countries: Array<Country> = new Array<Country>();
		constructor(countryService: CountryMetaDataService) {
			this.testprop = 10;
			this.countryMetaDataService = countryService;
			this.getAllCountries();
		}
		getAllCountries(): void {
			this.Countries= this.countryMetaDataService.GetAll();
		}
	}
	WorldDataBankModule.getInstance().registerController('CountryController', CountryController);
	//angular.module("WorldDataBankApp", []).controller('CountryController', CountryController);
}

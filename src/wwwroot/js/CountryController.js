/// <reference path="WorldDataBankModule.ts" />
var WorldDataBank;
(function (WorldDataBank) {
    var CountryController = (function () {
        function CountryController(countryService) {
            this.Countries = new Array();
            this.testprop = 10;
            this.countryMetaDataService = countryService;
            this.getAllCountries();
        }
        CountryController.prototype.getAllCountries = function () {
            this.Countries = this.countryMetaDataService.GetAll();
        };
        CountryController.$inject = ["CountryMetaDataService"];
        return CountryController;
    })();
    WorldDataBank.CountryController = CountryController;
    WorldDataBank.WorldDataBankModule.getInstance().registerController('CountryController', CountryController);
})(WorldDataBank || (WorldDataBank = {}));

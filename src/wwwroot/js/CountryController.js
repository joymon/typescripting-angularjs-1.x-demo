/// <reference path="WorldDataBankModule.ts" />
var WorldDataBank;
(function (WorldDataBank) {
    var CountryController = (function () {
        function CountryController() {
            this.testprop = 10;
        }
        return CountryController;
    })();
    WorldDataBank.CountryController = CountryController;
    WorldDataBank.WorldDataBankModule.getInstance().registerController('CountryController', CountryController);
})(WorldDataBank || (WorldDataBank = {}));

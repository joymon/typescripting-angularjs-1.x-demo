var CountryController = (function () {
    function CountryController() {
        this.testprop = 10;
    }
    return CountryController;
})();
angular.module("WorldDataBankApp", []).controller('CountryController', CountryController);

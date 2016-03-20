/// <reference path="angular-toasty.d.ts" />
var AngularToastyTestController = (function () {
    function AngularToastyTestController($scope, toasty) {
        var options = {
            title: 'Toast It!',
            msg: 'Mmmm, tasties...',
            showClose: true,
            clickToClose: false,
            timeout: 5000,
            sound: true,
            html: false,
            shake: false,
            theme: 'bootstrap',
            onAdd: function () {
                console.log('Toasty ' + this.id + ' has been added!', this);
            },
            onRemove: function () {
                console.log('Toasty ' + this.id + ' has been removed!', this);
            },
            onClick: function () {
                console.log('Toasty ' + this.id + ' has been clicked!', this);
            }
        };
        $scope.runToasts = function () {
            toasty(options);
            toasty.default(options);
            toasty.info(options);
            toasty.success(options);
            toasty.wait(options);
            toasty.error(options);
            toasty.warning(options);
        };
        $scope.runQuickToasts = function () {
            var title = 'Toast it!';
            toasty(title);
            toasty.default(title);
            toasty.info(title);
            toasty.success(title);
            toasty.wait(title);
            toasty.error(title);
            toasty.warning(title);
        };
        $scope.clearToasts = function () {
            toasty.clear();
        };
    }
    AngularToastyTestController.$inject = ['$scope', 'toasty'];
    return AngularToastyTestController;
})();
;
angular
    .module('main', ['angular-toasty'])
    .config(['toastyConfigProvider', function (toastyConfigProvider) {
        toastyConfigProvider.setConfig({
            title: 'global',
            limit: 10,
            sound: false,
            shake: true
        });
    }])
    .controller('MainController', AngularToastyTestController);

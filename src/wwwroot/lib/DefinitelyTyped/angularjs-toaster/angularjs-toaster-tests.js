/// <reference path="angularjs-toaster.d.ts" />
var NgToasterTestController = (function () {
    function NgToasterTestController($scope, $window, toaster) {
        this.$scope = $scope;
        this.$window = $window;
        this.toaster = toaster;
        this.bar = 'Hi';
    }
    NgToasterTestController.prototype.pop = function () {
        var _this = this;
        this.toaster.success({ title: "title", body: "text1" });
        this.toaster.error("title", "text2");
        this.toaster.pop({ type: 'wait', title: "title", body: "text" });
        this.toaster.pop('success', "title", '<ul><li>Render html</li></ul>', 5000, 'trustedHtml');
        this.toaster.pop('error', "title", '<ul><li>Render html</li></ul>', null, 'trustedHtml');
        this.toaster.pop('wait', "title", null, null, 'template');
        this.toaster.pop('warning', "title", "myTemplate.html", null, 'template');
        this.toaster.pop('note', "title", "text");
        this.toaster.pop('success', "title", 'Its address is https://google.com.', 5000, 'trustedHtml', function (toaster) {
            var match = toaster.body.match(/http[s]?:\/\/[^\s]+/);
            if (match) {
                _this.$window.open(match[0]);
            }
            return true;
        });
        this.toaster.pop('warning', "Hi ", "{template: 'myTemplateWithData.html', data: 'MyData'}", 15000, 'templateWithData');
    };
    NgToasterTestController.prototype.goToLink = function (toaster) {
        var match = toaster.body.match(/http[s]?:\/\/[^\s]+/);
        if (match) {
            this.$window.open(match[0]);
        }
        return true;
    };
    NgToasterTestController.prototype.clear = function () {
        this.toaster.clear();
    };
    return NgToasterTestController;
})();
angular
    .module('main', ['ngAnimate', 'toaster'])
    .controller('myController', NgToasterTestController);

/// <reference path="angular-material.d.ts" />
var myApp = angular.module('testModule', ['ngMaterial']);
myApp.config(function ($mdThemingProvider, $mdIconProvider) {
    $mdThemingProvider.alwaysWatchTheme(true);
    var neonRedMap = $mdThemingProvider.extendPalette('red', {
        '500': 'ff0000'
    });
    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('neonRed', neonRedMap);
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
        .primaryPalette('neonRed')
        .accentPalette('blue')
        .backgroundPalette('grey')
        .warnPalette('red')
        .dark(true);
    $mdIconProvider
        .defaultIconSet('my/app/icons.svg') // Register a default set of SVG icons
        .iconSet('social', 'my/app/social.svg') // Register a named icon set of SVGs
        .icon('android', 'my/app/android.svg') // Register a specific icon (by name)
        .icon('work:chair', 'my/app/chair.svg'); // Register icon in a specific set
});
myApp.controller('BottomSheetController', function ($scope, $mdBottomSheet) {
    $scope['openBottomSheet'] = function () {
        $mdBottomSheet.show({
            template: '<md-bottom-sheet>Hello!</md-bottom-sheet>'
        });
    };
    $scope['hideBottomSheet'] = $mdBottomSheet.hide.bind($mdBottomSheet, 'hide');
    $scope['cancelBottomSheet'] = $mdBottomSheet.cancel.bind($mdBottomSheet, 'cancel');
});
myApp.controller('DialogController', function ($scope, $mdDialog) {
    $scope['openDialog'] = function () {
        $mdDialog.show({
            template: '<md-dialog>Hello!</md-dialog>'
        });
    };
    $scope['alertDialog'] = function () {
        $mdDialog.show($mdDialog.alert().textContent('Alert!'));
    };
    $scope['alertDialog'] = function () {
        $mdDialog.show($mdDialog.alert().htmlContent('<span>Alert!</span>'));
    };
    $scope['confirmDialog'] = function () {
        $mdDialog.show($mdDialog.confirm().textContent('Confirm!'));
    };
    $scope['confirmDialog'] = function () {
        $mdDialog.show($mdDialog.confirm().htmlContent('<span>Confirm!</span>'));
    };
    $scope['hideDialog'] = $mdDialog.hide.bind($mdDialog, 'hide');
    $scope['cancelDialog'] = $mdDialog.cancel.bind($mdDialog, 'cancel');
});
var IconDirective = (function () {
    function IconDirective($mdIcon) {
        this.$mdIcon = $mdIcon;
    }
    IconDirective.prototype.link = function ($scope, $elm) {
        this.$mdIcon('android').then(function (iconEl) { return $elm.append(iconEl); });
        this.$mdIcon('work:chair').then(function (iconEl) { return $elm.append(iconEl); });
        // Load and cache the external SVG using a URL
        this.$mdIcon('img/icons/android.svg').then(function (iconEl) {
            $elm.append(iconEl);
        });
    };
    return IconDirective;
})();
myApp.directive('icon-directive', function ($mdIcon) { return new IconDirective($mdIcon); });
myApp.controller('MediaController', function ($scope, $mdMedia) {
    $scope.$watch(function () { return $mdMedia('lg'); }, function (big) {
        $scope['bigScreen'] = big;
    });
    $scope['screenIsSmall'] = $mdMedia('sm');
    $scope['customQuery'] = $mdMedia('(min-width: 1234px)');
    $scope['anotherCustom'] = $mdMedia('max-width: 300px');
});
myApp.controller('SidenavController', function ($scope, $mdSidenav) {
    var componentId = 'left';
    $scope['toggle'] = function () { return $mdSidenav(componentId).toggle(); };
    $scope['open'] = function () { return $mdSidenav(componentId).open(); };
    $scope['close'] = function () { return $mdSidenav(componentId).close(); };
    $scope['isOpen'] = $mdSidenav(componentId).isOpen();
    $scope['isLockedOpen'] = $mdSidenav(componentId).isLockedOpen();
});
myApp.controller('ToastController', function ($scope, $mdToast) {
    $scope['openToast'] = function () { return $mdToast.show($mdToast.simple().textContent('Hello!')); };
});

/// <reference path="../angularjs/angular.d.ts"/>
/// <reference path="./angular-strap.d.ts"/>
var angularStrapTests;
(function (angularStrapTests) {
    ///////////////////////////////////////////////////////////////////////////
    // Modal
    ///////////////////////////////////////////////////////////////////////////
    var modalTests;
    (function (modalTests) {
        angular.module('demoApp')
            .config($modalConfig)
            .controller('demoCtrl', demoCtrl);
        function demoCtrl($scope, $modal) {
            var myModalOptions = {};
            myModalOptions.title = 'My Title';
            myModalOptions.content = 'Hello Modal<br />This is a multiline message!';
            myModalOptions.show = true;
            var myModal = $modal(myModalOptions);
            var myOtherModalOptions = {};
            myOtherModalOptions.scope = $scope;
            myOtherModalOptions.template = 'modal/docs/modal.demo.tpl.html';
            myOtherModalOptions.show = false;
            var myOtherModal = $modal(myOtherModalOptions);
            $scope.showModal = function () {
                myOtherModal.$promise.then(myOtherModal.show);
            };
        }
        function $modalConfig($modalProvider) {
            var defaults = {
                animation: 'am-flip-x'
            };
            angular.extend($modalProvider.defaults, defaults);
        }
    })(modalTests || (modalTests = {}));
    ///////////////////////////////////////////////////////////////////////////
    // Aside
    ///////////////////////////////////////////////////////////////////////////
    var asideTests;
    (function (asideTests) {
        angular.module('demoApp')
            .config($asideConfig)
            .controller('demoCtrl', demoCtrl);
        function demoCtrl($scope, $aside) {
            var myAsideOptions = {};
            myAsideOptions.title = 'My Title';
            myAsideOptions.content = 'My content';
            myAsideOptions.show = true;
            var myAside = $aside(myAsideOptions);
            var myOtherAsideOptions = {};
            myOtherAsideOptions.scope = $scope;
            myOtherAsideOptions.template = 'aside/docs/aside.demo.tpl.html';
            var myOtherAside = $aside();
            myOtherAside.$promise.then(function () {
                myOtherAside.show();
            });
        }
        function $asideConfig($asideProvider) {
            var defaults = {};
            defaults.animation = 'am-fadeAndSlideLeft';
            defaults.placement = 'left';
            angular.extend($asideProvider.defaults, defaults);
        }
    })(asideTests || (asideTests = {}));
    ///////////////////////////////////////////////////////////////////////////
    // Alert
    ///////////////////////////////////////////////////////////////////////////
    var alertTests;
    (function (alertTests) {
        angular.module('demoApp')
            .config($alertConfig)
            .controller('demoCtrl', demoCtrl);
        function demoCtrl($scope, $alert) {
            var options = {};
            options.title = 'Holy guacamole!';
            options.content = 'Best check yo self, you\'re not looking too good.';
            options.placement = 'top';
            options.type = 'info';
            options.show = true;
            var myAlert = $alert();
        }
        function $alertConfig($alertProvider) {
            var defaults = {};
            defaults.animation = 'am-fade-and-slide-top';
            defaults.placement = 'top';
            angular.extend($alertProvider.defaults, defaults);
        }
        ;
    })(alertTests || (alertTests = {}));
    ///////////////////////////////////////////////////////////////////////////
    // Tooltip
    ///////////////////////////////////////////////////////////////////////////
    var tooltipTests;
    (function (tooltipTests) {
        angular.module('demoApp')
            .config($tooltipConfig)
            .controller('demoDrct', demoDrct);
        function demoDrct($tooltip) {
            var drct = {};
            drct.restrict = 'EA';
            drct.link = link;
            return drct;
            function link(scope, elem, attrs) {
                var options = {};
                options.title = 'My Title';
                $tooltip(elem, options);
            }
        }
        function $tooltipConfig($tooltipProvider) {
            var defaults = {};
            defaults.animation = 'am-flip-x';
            defaults.trigger = 'hover';
            angular.extend($tooltipProvider.defaults, defaults);
        }
        ;
    })(tooltipTests || (tooltipTests = {}));
    ///////////////////////////////////////////////////////////////////////////
    // Popover
    ///////////////////////////////////////////////////////////////////////////
    var popoverTests;
    (function (popoverTests) {
        angular.module('demoApp')
            .config($popoverConfig)
            .controller('demoDrct', demoDrct);
        function demoDrct($popover) {
            var drct = {};
            drct.restrict = 'EA';
            drct.link = link;
            return drct;
            function link(scope, elem, attrs) {
                var options = {};
                options.title = 'My Title';
                $popover(elem, options);
            }
        }
        function $popoverConfig($popoverProvider) {
            var defaults = {};
            defaults.animation = 'am-flip-x';
            defaults.trigger = 'hover';
            angular.extend($popoverProvider.defaults, defaults);
        }
        ;
    })(popoverTests || (popoverTests = {}));
    ///////////////////////////////////////////////////////////////////////////
    // Typeahead
    ///////////////////////////////////////////////////////////////////////////
    var typeaheadTests;
    (function (typeaheadTests) {
        angular.module('myApp')
            .config($typeaheadConfig);
        function $typeaheadConfig($typeaheadProvider) {
            var defaults = {};
            defaults.animation = 'am-flip-x';
            defaults.minLength = 2;
            defaults.limit = 8;
            angular.extend($typeaheadProvider.defaults, defaults);
        }
    })(typeaheadTests || (typeaheadTests = {}));
    ///////////////////////////////////////////////////////////////////////////
    // Datepicker
    ///////////////////////////////////////////////////////////////////////////
    var datepickerTests;
    (function (datepickerTests) {
        angular.module('myApp')
            .config($datepickerConfig);
        function $datepickerConfig($datepickerProvider) {
            var defaults = {};
            defaults.dateFormat = 'dd/MM/yyyy';
            defaults.startWeek = 1;
            angular.extend($datepickerProvider.defaults, defaults);
        }
        ;
    })(datepickerTests || (datepickerTests = {}));
    ///////////////////////////////////////////////////////////////////////////
    // Timepicker
    ///////////////////////////////////////////////////////////////////////////
    var timepickerTests;
    (function (timepickerTests) {
        angular.module('myApp')
            .config($timepickerConfig);
        function $timepickerConfig($timepickerProvider) {
            var defaults = {};
            defaults.timeFormat = 'HH:mm';
            defaults.length = 7;
            angular.extend($timepickerProvider.defaults, defaults);
        }
        ;
    })(timepickerTests || (timepickerTests = {}));
    ///////////////////////////////////////////////////////////////////////////
    // Select
    ///////////////////////////////////////////////////////////////////////////
    var selectTests;
    (function (selectTests) {
        angular.module('myApp')
            .config($selectConfig);
        function $selectConfig($selectProvider) {
            var defaults = {};
            defaults.animation = 'am-flip-x';
            defaults.sort = false;
            angular.extend($selectProvider.defaults, defaults);
        }
    })(selectTests || (selectTests = {}));
    ///////////////////////////////////////////////////////////////////////////
    // Tabs
    ///////////////////////////////////////////////////////////////////////////
    var tabTests;
    (function (tabTests) {
        angular.module('myApp')
            .config($tabConfig);
        function $tabConfig($tabProvider) {
            var defaults = {};
            defaults.animation = 'am-flip-x';
            angular.extend($tabProvider.defaults, defaults);
        }
    })(tabTests || (tabTests = {}));
    ///////////////////////////////////////////////////////////////////////////
    // Collapse
    ///////////////////////////////////////////////////////////////////////////
    var collapseTests;
    (function (collapseTests) {
        angular.module('myApp')
            .config($collapseConfig);
        function $collapseConfig($collapseProvider) {
            var defaults = {};
            defaults.animation = 'am-flip-x';
            angular.extend($collapseProvider.defaults, defaults);
        }
    })(collapseTests || (collapseTests = {}));
    ///////////////////////////////////////////////////////////////////////////
    // Dropdown
    ///////////////////////////////////////////////////////////////////////////
    var dropdownTests;
    (function (dropdownTests) {
        angular.module('myApp')
            .config($dropdownConfig);
        function $dropdownConfig($dropdownProvider) {
            var defaults = {};
            defaults.animation = 'am-flip-x';
            defaults.trigger = 'hover';
            angular.extend($dropdownProvider.defaults, defaults);
        }
    })(dropdownTests || (dropdownTests = {}));
    ///////////////////////////////////////////////////////////////////////////
    // Navbar
    ///////////////////////////////////////////////////////////////////////////
    var navbarTests;
    (function (navbarTests) {
        angular.module('myApp')
            .config($navbarConfig);
        function $navbarConfig($navbarProvider) {
            var defaults = {};
            defaults.activeClass = 'in';
            angular.extend($navbarProvider.defaults, defaults);
        }
    })(navbarTests || (navbarTests = {}));
    ///////////////////////////////////////////////////////////////////////////
    // Scrollspy
    ///////////////////////////////////////////////////////////////////////////
    var scrollspyTests;
    (function (scrollspyTests) {
        angular.module('myApp')
            .config($scrollspyConfig);
        function $scrollspyConfig($scrollspyProvider) {
            var defaults = {};
            defaults.offset = 0;
            defaults.target = 'my-selector';
            angular.extend($scrollspyProvider.defaults, defaults);
        }
    })(scrollspyTests || (scrollspyTests = {}));
    ///////////////////////////////////////////////////////////////////////////
    // Affix
    ///////////////////////////////////////////////////////////////////////////
    var affixTests;
    (function (affixTests) {
        angular.module('myApp')
            .config($affixConfig);
        function $affixConfig($affixProvider) {
            var defaults = {};
            defaults.offsetTop = 100;
            angular.extend($affixProvider.defaults, defaults);
        }
    })(affixTests || (affixTests = {}));
})(angularStrapTests || (angularStrapTests = {}));

/// <reference path="angular-ui-bootstrap.d.ts" />
var testApp = angular.module('testApp');
testApp.config(function ($accordionConfig, $buttonConfig, $datepickerConfig, $datepickerPopupConfig, $modalProvider, $paginationConfig, $pagerConfig, $progressConfig, $ratingConfig, $timepickerConfig, $tooltipProvider) {
    /**
     * $accordionConfig tests
     */
    $accordionConfig.closeOthers = false;
    /**
     * $buttonConfig tests
     */
    $buttonConfig.activeClass = 'active-state';
    $buttonConfig.toggleEvent = 'dblclick';
    /**
     * $datepickerConfig tests
     */
    $datepickerConfig.datepickerMode = 'month';
    $datepickerConfig.formatDay = 'd';
    $datepickerConfig.formatDayHeader = 'E';
    $datepickerConfig.formatDayTitle = 'dd-MM-yyyy';
    $datepickerConfig.formatMonth = 'M';
    $datepickerConfig.formatMonthTitle = 'yy';
    $datepickerConfig.formatYear = 'y';
    $datepickerConfig.maxDate = '1389586124979';
    $datepickerConfig.maxMode = 'month';
    $datepickerConfig.minDate = '1389586124979';
    $datepickerConfig.minMode = 'month';
    $datepickerConfig.shortcutPropagation = true;
    $datepickerConfig.showWeeks = false;
    $datepickerConfig.startingDay = 1;
    $datepickerConfig.yearRange = 10;
    /**
     * $datepickerPopupConfig tests
     */
    $datepickerPopupConfig.appendToBody = true;
    $datepickerPopupConfig.currentText = 'Select Today';
    $datepickerPopupConfig.clearText = 'Reset Selection';
    $datepickerPopupConfig.closeOnDateSelection = false;
    $datepickerPopupConfig.closeText = 'Finished';
    $datepickerPopupConfig.datepickerPopup = 'dd-MM-yyyy';
    $datepickerPopupConfig.datepickerPopupTemplateUrl = 'template.html';
    $datepickerPopupConfig.datepickerTemplateUrl = 'template.html';
    $datepickerPopupConfig.html5Types.date = 'MM-dd-yyyy';
    $datepickerPopupConfig.onOpenFocus = false;
    $datepickerPopupConfig.showButtonBar = false;
    /**
     * $modalProvider tests
     */
    $modalProvider.options.animation = false;
    /**
     * $paginationConfig tests
     */
    $paginationConfig.boundaryLinks = true;
    $paginationConfig.directionLinks = false;
    $paginationConfig.firstText = 'First Page';
    $paginationConfig.itemsPerPage = 25;
    $paginationConfig.lastText = 'Last Page';
    $paginationConfig.maxSize = 13;
    $paginationConfig.numPages = 13;
    $paginationConfig.nextText = 'Next Page';
    $paginationConfig.previousText = 'Previous Page';
    $paginationConfig.rotate = false;
    $paginationConfig.templateUrl = 'template.html';
    $paginationConfig.totalItems = 13;
    /**
     * $pagerConfig tests
     */
    $pagerConfig.align = false;
    $pagerConfig.itemsPerPage = 25;
    $pagerConfig.nextText = 'Next Page';
    $pagerConfig.previousText = 'Previous Page';
    /**
     * $progressConfig tests
     */
    $progressConfig.animate = false;
    $progressConfig.max = 200;
    /**
     * $ratingConfig tests
     */
    $ratingConfig.max = 10;
    $ratingConfig.stateOff = 'rating-state-off';
    $ratingConfig.stateOn = 'rating-state-on';
    $ratingConfig.titles = ['1', '2', '3', '4', '5'];
    /**
     * $timepickerConfig tests
     */
    $timepickerConfig.hourStep = 2;
    $timepickerConfig.meridians = ['-AM-', '-PM-'];
    $timepickerConfig.minuteStep = 5;
    $timepickerConfig.mousewheel = false;
    $timepickerConfig.readonlyInput = true;
    $timepickerConfig.showMeridian = false;
    $timepickerConfig.arrowkeys = false;
    $timepickerConfig.showSpinners = false;
    /**
     * $tooltipProvider tests
     */
    $tooltipProvider.options({
        placement: 'bottom',
        animation: false,
        popupDelay: 1000,
        appendToBody: true,
        trigger: 'mouseenter hover',
        useContentExp: true,
    });
    $tooltipProvider.setTriggers({
        'customOpenTrigger': 'customCloseTrigger'
    });
});
testApp.controller('TestCtrl', function ($scope, $log, $modal, $modalStack, $position, $transition) {
    /**
     * test the $modal service
     */
    var modalInstance = $modal.open({
        animation: false,
        backdrop: 'static',
        backdropClass: 'modal-backdrop-test',
        bindToController: true,
        controller: 'ModalTestCtrl',
        controllerAs: 'vm',
        keyboard: true,
        openedClass: 'modal-open my-modal',
        resolve: {
            items: function () {
                return [1, 2, 3, 4, 5];
            }
        },
        scope: $scope,
        template: "<div>i'm a template!</div>",
        templateUrl: '/templates/modal.html',
        windowClass: 'modal-test'
    });
    modalInstance.opened.then(function () {
        $log.log('modal opened');
    });
    modalInstance.rendered.then(function () {
        $log.log('modal rendered');
    });
    modalInstance.result.then(function (closeResult) {
        $log.log('modal closed', closeResult);
    }, function (dismissResult) {
        $log.log('modal dismissed', dismissResult);
    });
    $modal.open({
        backdrop: 'static'
    });
    $modal.open({
        templateUrl: function () { return '/templates/modal.html'; }
    });
    /**
     * test the $modalStack service
     */
    $modalStack.open(modalInstance, { scope: $scope });
    $modalStack.close(modalInstance);
    $modalStack.close(modalInstance, 'with reason');
    $modalStack.dismiss(modalInstance);
    $modalStack.dismiss(modalInstance, 'with reason');
    $modalStack.dismissAll();
    $modalStack.dismissAll('with reason');
    $modalStack.getTop().key.close();
    /**
     * test the $position service
     */
    var elementLogger = function (coordinates) {
        $log.log('height', coordinates.height);
        $log.log('left', coordinates.left);
        $log.log('top', coordinates.top);
        $log.log('width', coordinates.width);
    };
    var element = angular.element('<div/>');
    elementLogger($position.position(element));
    elementLogger($position.offset(element));
    /**
     * test the $transition service
     */
    $log.log('animationEndEventName', $transition.animationEndEventName);
    $log.log('transitionEndEventName', $transition.transitionEndEventName);
    var transitionElement = angular.element('<div/>');
    $transition(transitionElement, 'transition-class', { animation: true });
    $transition(transitionElement, { height: '100px', width: '50px' }, { animation: true });
    $transition(transitionElement, function () { }, { animation: true });
});
testApp.controller('ModalTestCtrl', function ($scope, $log, $modalInstance, items) {
    items.forEach(function (item) {
        $log.log(item);
    });
    $scope.close = function () {
        if ($scope.useReason) {
            $modalInstance.close('with reason');
        }
        else {
            $modalInstance.close();
        }
    };
    $scope.dismiss = function () {
        if ($scope.useReason) {
            $modalInstance.dismiss('with reason');
        }
        else {
            $modalInstance.dismiss();
        }
    };
});

/// <reference path="angular-scroll.d.ts" />
var TestApp;
(function (TestApp) {
    var TestController = (function () {
        function TestController($scope, $document) {
            this.invertedEasingFn = function (x) {
                return 1 - x;
            };
            this.onScrollCompleted = function () {
                console.log('Done scrolling');
            };
            var positionFromTop = 400;
            var positionFromLeft = 200;
            var offsetInPixels = 100;
            var durationInMillis = 2000;
            var someElement;
            $document.duScrollTo(positionFromLeft, positionFromTop);
            $document.duScrollTo(positionFromLeft, positionFromTop, durationInMillis).then(this.onScrollCompleted);
            $document.duScrollTo(positionFromLeft, positionFromTop, durationInMillis, this.invertedEasingFn).then(this.onScrollCompleted);
            $document.duScrollTo(someElement);
            $document.duScrollTo(someElement, offsetInPixels);
            $document.duScrollTo(someElement, offsetInPixels, durationInMillis).then(this.onScrollCompleted);
            $document.duScrollTo(someElement, offsetInPixels, durationInMillis, this.invertedEasingFn).then(this.onScrollCompleted);
            $document.duScrollToElement(someElement);
            $document.duScrollToElement(someElement, offsetInPixels);
            $document.duScrollToElement(someElement, offsetInPixels, durationInMillis).then(this.onScrollCompleted);
            $document.duScrollToElement(someElement, offsetInPixels, durationInMillis, this.invertedEasingFn).then(this.onScrollCompleted);
            $document.duScrollToElementAnimated(someElement).then(this.onScrollCompleted);
            $document.duScrollToElementAnimated(someElement, offsetInPixels).then(this.onScrollCompleted);
            $document.duScrollToElementAnimated(someElement, offsetInPixels, durationInMillis).then(this.onScrollCompleted);
            $document.duScrollToElementAnimated(someElement, offsetInPixels, durationInMillis, this.invertedEasingFn).then(this.onScrollCompleted);
            $document.duScrollTop(positionFromTop);
            $document.duScrollTop(positionFromTop, durationInMillis).then(this.onScrollCompleted);
            $document.duScrollTop(positionFromTop, durationInMillis, this.invertedEasingFn).then(this.onScrollCompleted);
            $document.duScrollTopAnimated(positionFromTop).then(this.onScrollCompleted);
            $document.duScrollTopAnimated(positionFromTop, durationInMillis).then(this.onScrollCompleted);
            $document.duScrollTopAnimated(positionFromTop, durationInMillis, this.invertedEasingFn).then(this.onScrollCompleted);
            $document.duScrollLeft(positionFromLeft);
            $document.duScrollLeft(positionFromLeft, durationInMillis).then(this.onScrollCompleted);
            $document.duScrollLeft(positionFromLeft, durationInMillis, this.invertedEasingFn).then(this.onScrollCompleted);
            $document.duScrollLeftAnimated(positionFromLeft).then(this.onScrollCompleted);
            $document.duScrollLeftAnimated(positionFromLeft, durationInMillis).then(this.onScrollCompleted);
            $document.duScrollLeftAnimated(positionFromLeft, durationInMillis, this.invertedEasingFn).then(this.onScrollCompleted);
            var verticalPosition = $document.duScrollTop();
            var horixontalPosition = $document.duScrollLeft();
        }
        return TestController;
    })();
    angular.module('testApp', ['duScroll'])
        .controller('testController', TestController);
})(TestApp || (TestApp = {}));

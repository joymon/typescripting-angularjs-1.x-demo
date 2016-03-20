/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="angular-modal.d.ts" />
var btfModal;
// Using template URL
function withTemplateUrl() {
    btfModal({
        controller: 'SomeController',
        controllerAs: 'vm',
        templateUrl: 'some-template.html'
    });
}
// Using template
function withTemplate() {
    btfModal({
        controller: 'SomeController',
        controllerAs: 'vm',
        template: '<div></div>'
    });
}
// Using controller function
function withControllerAsFunction() {
    btfModal({
        controller: function () { },
        template: '<div></div>'
    });
}
// Using constructor function
function withControllerClass() {
    var TestController = (function () {
        function TestController(dependency1, dependency2) {
        }
        return TestController;
    })();
    btfModal({
        controller: TestController,
        template: '<div></div>'
    });
}
// With container as selector
function withContainerAsString() {
    btfModal({
        template: '<div></div>',
        container: '.container'
    });
}
// With container as jQuery element
function withContainerAsJquery() {
    var container = $('body');
    btfModal({
        template: '<div></div>',
        container: container
    });
}
// With container as DOM Element
function withContainerAsDom() {
    var container = document.getElementById('container');
    btfModal({
        template: '<div></div>',
        container: container
    });
}
// With container as DOM Element Array
function withContainerAsDomArray() {
    var container = [document.getElementById('container'), document.getElementById('container2')];
    btfModal({
        template: '<div></div>',
        container: container
    });
}
// With container as function
function withContainerAsFunction() {
    btfModal({
        template: '<div></div>',
        container: function () { }
    });
}
// With container as array
function withContainerAsArray() {
    btfModal({
        template: '<div></div>',
        container: ['1', 2]
    });
}
// Calling return values
function callingValues() {
    var modal = btfModal({
        template: '<div></div>'
    });
    modal.activate().then(function () { }, function () { });
    modal.deactivate().then(function () { }, function () { });
    var isActive = modal.active();
}

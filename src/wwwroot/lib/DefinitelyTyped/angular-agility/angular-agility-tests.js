/// <reference path="angular-agility.d.ts" />
/// <reference path='../angularjs/angular.d.ts' />
var validIconStrategy = {};
validIconStrategy.validIcon = "";
validIconStrategy.invalidIcon = "";
validIconStrategy.getContainer({});
var provider = {};
provider.defaultLabelStrategy = "";
provider.defaultFieldGroupStrategy = "";
provider.defaultValMsgPlacementStrategy = "";
provider.validIconStrategy = validIconStrategy;
provider.defaultSpinnerClickStrategy = "";
provider.defaultNotifyTarget = "";
provider.defaultOnNavigateAwayStrategy = "";
provider.validationMessages['testName'] = 'testMessages';
provider.valMsgForTemplate = "";
provider.confirmResetStrategy = function () { return false; };
provider.globalSettings['testSetting'] = 'test';
provider.labelStrategies['testLabelStratgey'] = function (element, labelText, isRequired) { };
provider.fieldGroupStrategies['testFieldGroupStratgey'] = function (element) { };
provider.valMsgPlacementStrategies['testValMsgPlacementStrategy'] = function (formFieldElement, formName, formFieldName) { };
provider.spinnerClickStrategies['testSpinnerClickStratgey'] = function (element) { };
provider.onNavigateAwayStrategies['testOnNavigateAwayStrategy'] = function (rootFormScope, rootForm, $injector) { };
var defaults = {};
defaults.success = function (message, options, notifier) { };
defaults.info = function (message, options, notifier) { };
defaults.warning = function (message, options, notifier) { };
defaults.danger = function (message, options, notifier) { };
defaults.error = function (message, options, notifier) { };
var configWithoutTemplate = {
    name: "",
    options: {},
    namedDefaults: {}
};
var configWithTemplate = {
    name: "",
    template: "",
    templateName: "",
    options: {},
    namedDefaults: {}
};
var notifyOptionsWithoutCssClasses = {
    messageType: "",
    allowHtml: true,
    message: ""
};
var notifyOptionsWithCssClasses = {
    cssClasses: "",
    messageType: "",
    allowHtml: true,
    message: ""
};
var notifyConfigProvider = {};
notifyConfigProvider.notifyConfigs = {};
notifyConfigProvider.defaultTargetContainerName = "";
notifyConfigProvider.defaultNotifyConfig = "";
notifyConfigProvider.addOrUpdateNotifyConfig("", configWithTemplate);
notifyConfigProvider.optionsTransformer(notifyOptionsWithCssClasses, {});
var fullExternalConfig = {
    validations: "",
    ignore: "",
    globals: "",
    resolve: "",
    resolveFn: function (modelValue) { return ""; }
};
var minimalExternalConfig = {
    validations: ""
};

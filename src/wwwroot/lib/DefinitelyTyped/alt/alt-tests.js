/**
 * Created by shearerbeard on 6/28/15.
 */
///<reference path="alt.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Alt = require("alt");
//New alt instance
var alt = new Alt();
//Create abstracts to inherit ghost methods
var AbstractActions = (function () {
    function AbstractActions(alt) {
    }
    return AbstractActions;
})();
var AbstractStoreModel = (function () {
    function AbstractStoreModel() {
    }
    return AbstractStoreModel;
})();
var GenerateActionsClass = (function (_super) {
    __extends(GenerateActionsClass, _super);
    function GenerateActionsClass(config) {
        _super.call(this, config);
        this.generateActions("notifyTest");
    }
    return GenerateActionsClass;
})(AbstractActions);
var ExplicitActionsClass = (function (_super) {
    __extends(ExplicitActionsClass, _super);
    function ExplicitActionsClass() {
        _super.apply(this, arguments);
    }
    ExplicitActionsClass.prototype.doTest = function (str) {
        this.dispatch(str);
    };
    ExplicitActionsClass.prototype.success = function () {
        this.dispatch();
    };
    ExplicitActionsClass.prototype.error = function () {
        this.dispatch();
    };
    ExplicitActionsClass.prototype.loading = function () {
        this.dispatch();
    };
    return ExplicitActionsClass;
})(AbstractActions);
var generatedActions = alt.createActions(GenerateActionsClass);
var explicitActions = alt.createActions(ExplicitActionsClass);
var testSource = {
    fakeLoad: function () {
        return {
            remote: function () {
                return new Promise(function (res, rej) {
                    setTimeout(function () {
                        if (true) {
                            res("stuff");
                        }
                        else {
                            rej("Things have broken");
                        }
                    }, 250);
                });
            },
            local: function () {
                return "local";
            },
            success: explicitActions.success,
            error: explicitActions.error,
            loading: explicitActions.loading
        };
    }
};
var TestStore = (function (_super) {
    __extends(TestStore, _super);
    function TestStore() {
        _super.call(this);
        this.hello = "world";
        this.bindAction(generatedActions.notifyTest, this.onTest);
        this.bindActions(explicitActions);
        this.exportAsync(testSource);
        this.exportPublicMethods({
            split: this.split
        });
    }
    TestStore.prototype.onTest = function (str) {
        this.hello = str;
    };
    TestStore.prototype.onDoTest = function (str) {
        this.hello = str;
    };
    TestStore.prototype.split = function () {
        return this.hello.split("");
    };
    return TestStore;
})(AbstractStoreModel);
var testStore = alt.createStore(TestStore);
function testCallback(state) {
    console.log(state);
}
//Listen allows a typed state callback
testStore.listen(testCallback);
testStore.unlisten(testCallback);
//State generic passes to derived store
var name = testStore.getState().hello;
var nameChars = testStore.split();
generatedActions.notifyTest("types");
explicitActions.doTest("more types");
exports.result = testStore.getState();

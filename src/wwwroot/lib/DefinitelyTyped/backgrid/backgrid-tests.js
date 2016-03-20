/// <reference path="backgrid.d.ts" />
/// <reference path="../backbone/backbone.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
  Uses getters and setters and requires ES >= 5

  $ tsc --target ES5 backgrid-tests.ts
*/
var TestModel = (function (_super) {
    __extends(TestModel, _super);
    function TestModel() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(TestModel.prototype, "Id", {
        get: function () { return this.get('id'); },
        set: function (value) { this.set('id', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestModel.prototype, "FirstName", {
        get: function () { return this.get('FirstName'); },
        set: function (value) { this.set('FirstName', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestModel.prototype, "LastName", {
        get: function () { return this.get('LastName'); },
        set: function (value) { this.set('LastName', value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TestModel.prototype, "EMail", {
        get: function () { return this.get('EMail'); },
        set: function (value) { this.set('EMail', value); },
        enumerable: true,
        configurable: true
    });
    return TestModel;
})(Backbone.Model);
var TestCollection = (function (_super) {
    __extends(TestCollection, _super);
    function TestCollection(models, options) {
        _super.call(this, models, options);
        this.model = TestModel;
    }
    TestCollection.prototype.initialize = function () {
        this.on("change", this.modelChanged, this);
    };
    TestCollection.prototype.modelChanged = function (model, val, options) {
        model.save();
    };
    return TestCollection;
})(Backbone.Collection);
var TestView = (function (_super) {
    __extends(TestView, _super);
    function TestView(viewOptions) {
        _super.call(this, viewOptions);
        this.testCollection = new TestCollection();
        this.gridView = new Backgrid.Grid({
            columns: [new Backgrid.Column({ name: "FirstName", cell: "string", label: "First Name" }),
                new Backgrid.Column({ name: "LastName", cell: "string", label: "Last Name" }),
                new Backgrid.Column({ name: "EMail", cell: "string", label: "E-Mail" })],
            collection: this.testCollection,
        });
    }
    TestView.prototype.initialize = function () {
    };
    TestView.prototype.render = function () {
        this.$el.empty();
        this.$el.append(this.gridView.render().$el);
        //this.testCollection.fetch();
        return this;
    };
    return TestView;
})(Backbone.View);
function test_grid() {
    var view = new TestView();
    view.render();
}

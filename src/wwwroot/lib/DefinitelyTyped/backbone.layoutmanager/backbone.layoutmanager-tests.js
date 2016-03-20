/// <reference path="backbone.layoutmanager.d.ts"/>
/// <reference path="../backbone/backbone.d.ts"/>
/// <reference path="../jquery/jquery.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Example code.
var DisplayView = (function (_super) {
    __extends(DisplayView, _super);
    function DisplayView(options) {
        _super.call(this, options);
        this.manage = true;
        this.template = "#display";
    }
    return DisplayView;
})(Backbone.View);
// Create a View to be used with the Layout below.
var View = (function (_super) {
    __extends(View, _super);
    function View(options) {
        _super.call(this, options);
        this.template = "#view";
        // When you click the View contents, it will wrap them in a bold tag.
        this.events = {
            "click": "wrapElement",
            "mouseenter": "insertElement",
            "mouseleave": "removeElement"
        };
    }
    View.prototype.wrapElement = function () {
        this.$el.wrap("<b>");
    };
    View.prototype.insertElement = function () {
        this.insertView(new DisplayView()).render();
    };
    View.prototype.removeElement = function () {
        // Removes the inserted DisplayView.
        this.removeView("");
    };
    return View;
})(Backbone.Layout);
// Create a new Layout.
var layout = new Backbone.Layout({
    // Attach the Layout to the main container.
    el: ".main",
    // Use the previous defined template.
    template: "#layout",
    // Declaratively bind a nested View to the Layout.
    views: {
        "p": new View()
    }
});
// Render the Layout.
layout.render();

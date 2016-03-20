/// <reference path="../node/node.d.ts" />
/// <reference path="./atom.d.ts" />
/// <reference path="../pathwatcher/pathwatcher.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _atom = require("atom");
var pathwatcher = require("pathwatcher");
var File = pathwatcher.File;
var SampleView = (function (_super) {
    __extends(SampleView, _super);
    function SampleView(params) {
        if (params === void 0) { params = {}; }
        _super.call(this);
        this.editorId = params.editorId;
        if (this.editorId) {
            this.resolveEditor(this.editorId);
        }
        else {
            this.file = new File(params.filePath);
        }
    }
    SampleView.deserialize = function (state) {
        return new SampleView(state);
    };
    SampleView.content = function () {
        return this.div({ class: 'sample native-key-bindings', tabindex: -1 });
    };
    Object.defineProperty(SampleView.prototype, "jq", {
        get: function () {
            // dirty hack
            return this;
        },
        enumerable: true,
        configurable: true
    });
    SampleView.prototype.serialize = function () {
        return {
            deserializer: 'SampleView',
            editorId: this.editorId
        };
    };
    SampleView.prototype.destroy = function () {
        this.unsubscribe();
    };
    SampleView.prototype.resolveEditor = function (editorId) {
        var _this = this;
        var resolve = function () {
            if (_this.editor) {
                _this.jq.trigger("title-changed");
            }
            else {
                var view = _this.jq.parents('.pane').view();
                if (view) {
                    view.destroyItem(_this);
                }
            }
        };
        if (atom.workspace) {
            resolve();
        }
        else {
            atom.packages.once("activated", function () {
                resolve();
            });
        }
    };
    return SampleView;
})(_atom.ScrollView);
atom.deserializers.add(SampleView);
module.exports = SampleView;

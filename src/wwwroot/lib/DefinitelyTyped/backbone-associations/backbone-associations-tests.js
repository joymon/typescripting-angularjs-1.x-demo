/// <reference path="../backbone/backbone.d.ts" />
/// <reference path="backbone-associations.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// borrowed from the Backbone.Associations tutorials
// separated out into modules to avoid namespace clashes
var Backbone;
(function (Backbone) {
    var Associations;
    (function (Associations) {
        var Tests;
        (function (Tests) {
            var OneToOne;
            (function (OneToOne) {
                var EmployeeWithManager = (function (_super) {
                    __extends(EmployeeWithManager, _super);
                    function EmployeeWithManager(options) {
                        _super.call(this, options);
                        this.relations = [
                            {
                                type: Backbone.One,
                                key: 'manager',
                                relatedModel: 'Employee' //AssociatedModel for attribute key
                            }
                        ];
                    }
                    EmployeeWithManager.prototype.defaults = function () {
                        return {
                            age: 0,
                            fname: "",
                            lname: "",
                            manager: null
                        };
                    };
                    return EmployeeWithManager;
                })(Backbone.AssociatedModel);
            })(OneToOne || (OneToOne = {}));
            var OneToMany;
            (function (OneToMany) {
                var Location = (function (_super) {
                    __extends(Location, _super);
                    function Location() {
                        _super.apply(this, arguments);
                    }
                    Location.prototype.defaults = function () {
                        return {
                            add1: "",
                            add2: null,
                            zip: "",
                            state: ""
                        };
                    };
                    return Location;
                })(Backbone.AssociatedModel);
                var Locations = (function (_super) {
                    __extends(Locations, _super);
                    function Locations() {
                        _super.apply(this, arguments);
                    }
                    Locations.prototype.comparator = function (c) {
                        return c.get("Number");
                    };
                    return Locations;
                })(Backbone.Collection);
                var Project = (function (_super) {
                    __extends(Project, _super);
                    function Project(options) {
                        _super.call(this, options);
                        this.relations = [
                            {
                                type: Backbone.Many,
                                key: 'locations',
                                collectionType: Locations,
                                relatedModel: Location //Optional
                            }
                        ];
                    }
                    Project.prototype.defaults = function () {
                        return {
                            name: "",
                            number: 0,
                            locations: []
                        };
                    };
                    return Project;
                })(Backbone.AssociatedModel);
                function reverseAssociationTest() {
                    var local = new Location({ state: "Hertfordshire" });
                    var project = new Project({ name: "The Old Pond Project" });
                    local.set("oddRelationTo", project);
                    var parents = project.parents;
                }
            })(OneToMany || (OneToMany = {}));
        })(Tests = Associations.Tests || (Associations.Tests = {}));
    })(Associations = Backbone.Associations || (Backbone.Associations = {}));
})(Backbone || (Backbone = {}));

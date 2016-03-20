/// <reference path="./camo.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var camo_1 = require("camo");
camo_1.connect("mongodb://user:password@localhost:27017/database?authSource=admin").then(function () {
    var document = new camo_1.Document();
    var User = (function (_super) {
        __extends(User, _super);
        function User() {
            _super.apply(this, arguments);
            this.name = String;
            this.password = String;
            this.friends = [String];
            this.dateCreated = {
                type: Date,
                default: Date.now
            };
        }
        User.collectionName = function () {
            return "users";
        };
        return User;
    })(camo_1.Document);
    var newUser = User.create({
        name: "user-1",
        password: "secret",
        friends: ["user-2", "user-3"]
    });
    newUser.save().then(function (done) {
        console.log(done._id);
    });
});

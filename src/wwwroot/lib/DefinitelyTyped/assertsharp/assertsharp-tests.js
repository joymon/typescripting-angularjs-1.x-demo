/// <reference path="./assertsharp.d.ts" />
var assertsharp_1 = require("assertsharp");
assertsharp_1.default.AreEqual(0, 0, "Pass");
assertsharp_1.default.AreNotEqual(0, 1, "Pass");
assertsharp_1.default.AreNotSame(new Date(), new Date(), "Pass");
assertsharp_1.default.AreSequenceEqual([0], [0], function (x, y) { return x === y; }, "Pass");
assertsharp_1.default.Fail("Should fail");
assertsharp_1.default.IsFalse(false, "Pass");
assertsharp_1.default.IsInstanceOfType(new Date(), Date, "Pass");
assertsharp_1.default.IsNotInstanceOfType(true, Date, "Pass");
assertsharp_1.default.IsNotNull(new Date(), "Pass");
assertsharp_1.default.IsNull(null, "Pass");
assertsharp_1.default.IsTrue(true, "Pass");
assertsharp_1.default.Throws(function () { throw ""; }, "Pass");

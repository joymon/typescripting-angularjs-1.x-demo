/// <reference path="../node/node.d.ts" />
/// <reference path="copy-paste.d.ts" />
var CopyPaste = require('copy-paste');
var TestClass = (function () {
    function TestClass() {
    }
    return TestClass;
})();
var strRet = CopyPaste.copy("content");
strRet = CopyPaste.copy("content", function (err) { return; });
var objRet = CopyPaste.copy(new TestClass());
objRet = CopyPaste.copy(new TestClass(), function (err) { return; });
strRet = CopyPaste.paste();
CopyPaste.paste(function (err, content) { return; });

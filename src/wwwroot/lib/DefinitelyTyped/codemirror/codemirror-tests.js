/// <reference path="codemirror.d.ts" />
var myCodeMirror = CodeMirror(document.body);
var myCodeMirror2 = CodeMirror(document.body, {
    value: "function myScript(){return 100;}\n",
    mode: "javascript"
});
var myTextArea;
var myCodeMirror3 = CodeMirror(function (elt) {
    myTextArea.parentNode.replaceChild(elt, myTextArea);
}, { value: myTextArea.value });
var myCodeMirror4 = CodeMirror.fromTextArea(myTextArea);
var doc = new CodeMirror.Doc('text');
var doc2 = CodeMirror(document.body).getDoc();
var lintStateOptions = {
    async: true,
    hasGutters: true
};
var lintOptions = {
    async: true,
    hasGutters: true,
    getAnnotations: function (content, updateLintingCallback, options, codeMirror) { }
};
var updateLintingCallback = function (codeMirror, annotations) { };
var annotation = {
    from: {
        ch: 0,
        line: 0
    },
    to: CodeMirror.Pos(1),
    message: "test",
    severity: "warning"
};
myCodeMirror.getValue();
myCodeMirror.getValue("foo");
myCodeMirror.setValue("bar");
CodeMirror.registerHelper("lint", "javascript", {});

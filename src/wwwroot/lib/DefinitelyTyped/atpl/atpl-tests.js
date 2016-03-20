/// <reference path="atpl.d.ts" />
var atpl = require('atpl');
var bool;
var str;
var err;
var items;
var options;
var callback;
atpl.compile(str, options);
atpl.__express(str, options, callback);
atpl.registerExtension(items);
atpl.registerTags(items);
atpl.registerFunctions(items);
atpl.registerFilters(items);
atpl.registerTests(items);
atpl.registerTags(null);
atpl.renderFile(str, str, options, bool, function (e, res) {
    err = err;
    str = res;
});

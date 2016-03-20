/// <reference path="closure-compiler.d.ts"/>
var closure_compiler_1 = require('closure-compiler');
closure_compiler_1.compile('some.source()', { 'check-only': null }, function (err, stdout, stderr) {
    console.log('Got', err, 'stdout', stdout, 'stderr', stderr);
});
// No options, Callback wins.
closure_compiler_1.compile('some.source()', function (err, stdout, stderr) {
    console.log('Got', err, 'stdout', stdout, 'stderr', stderr);
});
closure_compiler_1.compile(null, { 'js': ['a/f.js', 'a/f2.js'], 'check-only': null }, function (err, stdout, stderr) {
    console.log('Got', err, 'stdout', stdout, 'stderr', stderr);
});

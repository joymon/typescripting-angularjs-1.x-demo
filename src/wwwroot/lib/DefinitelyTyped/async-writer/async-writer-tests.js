/// <reference path="async-writer.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var asyncWriter = require('async-writer');
var stream = require('stream');
var TestStream = (function (_super) {
    __extends(TestStream, _super);
    function TestStream(output) {
        _super.call(this);
        this.output = output;
    }
    TestStream.prototype._write = function (data, encoding, callback) {
        this.output += data;
        callback();
    };
    return TestStream;
})(stream.Writable);
// Simple usage
function simpleUsage(callback) {
    var output = '';
    var testStream = new TestStream(output);
    var out = asyncWriter.create(testStream)
        .on('error', function (err) {
        console.error(err);
    })
        .on('finish', function () {
        console.log(testStream.output);
        callback();
    });
    out.write('A');
    out.write('B');
    out.write('C');
    out.end();
}
// Asynchronous, out-of-order writing
function asyncUsage(callback) {
    var output = '';
    var testStream = new TestStream(output);
    var out = asyncWriter.create(testStream)
        .on('error', function (err) {
        console.error(err);
    })
        .on('finish', function () {
        console.log(testStream.output);
        callback();
    });
    out.write('A');
    var asyncOut = out.beginAsync();
    setTimeout(function () {
        asyncOut.write('B');
        asyncOut.end();
    }, 1000);
    out.write('C');
    out.end();
}
// run test
simpleUsage(function () {
    asyncUsage(function () {
        console.log('DONE');
    });
});

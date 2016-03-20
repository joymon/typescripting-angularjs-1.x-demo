/// <reference path="_debugger.d.ts"/>
var _debugger = require("_debugger");
var Client = _debugger.Client;
var client = new Client();
client.connect(8888, 'localhost');
client.listbreakpoints(function (err, res) {
});

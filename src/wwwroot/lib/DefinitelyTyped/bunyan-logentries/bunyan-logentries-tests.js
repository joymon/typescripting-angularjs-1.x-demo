/// <reference path="./bunyan-logentries.d.ts" />
/// <reference path="../bunyan/bunyan.d.ts" />
var bunyan = require("bunyan");
var bunyanLogentries = require("bunyan-logentries");
var logger = bunyan.createLogger({
    name: "foobar",
    streams: [{
            level: "info",
            stream: bunyanLogentries.createStream({ token: "foobar" }),
            type: "raw"
        }]
});

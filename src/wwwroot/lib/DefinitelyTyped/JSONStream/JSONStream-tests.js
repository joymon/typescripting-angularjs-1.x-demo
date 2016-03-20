/// <reference path="JSONStream.d.ts" />
var json = require('JSONStream');
var read;
var write;
read = read.pipe(json.parse('*'));
read = read.pipe(json.parse(['foo/*', 'bar/*']));
read = json.stringify();
read = json.stringify('{', ',', '}');
read = json.stringifyObject();
read = json.stringifyObject('{', ',', '}');

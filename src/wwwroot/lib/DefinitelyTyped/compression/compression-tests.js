/// <reference path="compression.d.ts" />
var express = require('express');
var compress = require('compression');
var app = express();
app.use(compress());
app.use(compress({
    threshold: 512
}));

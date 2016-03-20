/// <reference path="cookie-parser.d.ts" />
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser('optional secret string'));

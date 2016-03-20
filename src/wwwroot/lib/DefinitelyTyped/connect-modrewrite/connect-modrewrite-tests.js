/// <reference path='./connect-modrewrite.d.ts' />
/// <reference path='../express/express.d.ts' />
var modRewrite = require('connect-modrewrite');
var express = require('express');
var app = express();
app.use(modRewrite([
    '^/test$ /index.html',
    '^/test/\\d*$ /index.html [L]',
    '^/test/\\d*/\\d*$ /flag.html [L]',
]));

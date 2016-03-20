/// <reference path="./connect-flash.d.ts" />
var express = require('express');
var flash = require('connect-flash');
var app = express();
app.use(flash());
app.use(flash({
    unsafe: false
}));
app.use(function (req, res, next) {
    req.flash('Message');
    req.flash('info', 'Message');
});

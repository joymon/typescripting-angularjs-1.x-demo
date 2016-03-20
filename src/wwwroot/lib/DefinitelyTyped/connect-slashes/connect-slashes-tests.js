/// <reference path="./connect-slashes.d.ts"/>
var express = require('express');
var slashes = require('connect-slashes');
var app = express();
// Using default settings...
app.use(slashes());
// Remove slashes instead of adding them...
app.use(slashes(false));
// With additional options defined inline...
app.use(slashes(true, {
    base: '/blog',
    code: 302,
    headers: {
        'Cache-Control': 'public',
        'Accpet': 'application/json'
    }
}));
// Defining an options object and referencing
// it in the constructor...
var options = {
    base: '/blog',
    code: 302,
    headers: {
        'Cache-Control': 'public',
        'Accpet': 'application/json'
    }
};
app.use(slashes(true, options));
// Defining an options object with only
// some properties...
var options = {
    base: '/blog'
};
var options = {
    code: 302
};
var options = {
    headers: {
        'Cache-Control': 'public',
        'Accpet': 'application/json'
    }
};

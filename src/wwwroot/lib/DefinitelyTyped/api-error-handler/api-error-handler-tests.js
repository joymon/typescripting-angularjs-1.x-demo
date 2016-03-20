/// <reference path="api-error-handler.d.ts" />
var errorHandler = require('api-error-handler');
var express = require('express');
var api = express.Router();
api.get('/users/:userid', function (req, res, next) {
});
api.use(errorHandler());
var res;

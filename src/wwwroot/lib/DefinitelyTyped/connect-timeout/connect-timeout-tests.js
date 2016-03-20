/// <reference path="connect-timeout.d.ts" />
/// <reference path="../body-parser/body-parser.d.ts" />
/// <reference path="../cookie-parser/cookie-parser.d.ts" />
/// <reference path="../express/express.d.ts" />
var express = require("express");
var timeout = require("connect-timeout");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
// example of using this top-level; note the use of haltOnTimedout
// after every middleware; it will stop the request flow on a timeout
var app = express();
app.use(timeout("5s", { respond: false }));
app.use(bodyParser());
app.use(haltOnTimedout);
app.use(cookieParser());
app.use(haltOnTimedout);
// Add your routes here, etc.
function haltOnTimedout(req, res, next) {
    if (!req.timedout) {
        next();
    }
}
app.listen(3000);

/// <reference path="../any-db/any-db.d.ts" />
/// <reference path="any-db-transaction.d.ts" />
"use strict";
var anyDB = require("any-db");
var begin = require("any-db-transaction");
var conn = anyDB.createConnection("mysql://user:password@localhost/testdb");
var transaction = begin(conn);
var transaction2 = begin(transaction);
begin(conn, { autoRollback: true });
begin(conn, function (error, result) {
});
transaction.query("SELECT * FROM MyTable");
transaction.commit();
transaction.commit(function (error) {
});
transaction.rollback();
transaction.rollback(function (error) {
});

/// <reference path="any-db.d.ts" />
"use strict";
var anyDB = require("any-db");
var conn = anyDB.createConnection("mysql://user:password@localhost/testdb");
var sql = "SELECT * FROM questions";
conn.query(sql, [1, "boo"]);
conn.query(sql).on("data", function (row) {
    // nothing
});
conn.query(sql, [1, "s"], function (error, result) {
    result.rows.length;
    result.fields.length;
});
conn.end();
var poolConfig = {
    min: 1,
    max: 200
};
var pool = anyDB.createPool("mysql://user:password@localhost/testdb", poolConfig);
pool.query(sql).on("data", function (row) {
    // nothing
});
pool.close(function (error) {
});

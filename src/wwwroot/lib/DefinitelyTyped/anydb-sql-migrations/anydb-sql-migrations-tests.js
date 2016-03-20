/// <reference path="../anydb-sql/anydb-sql.d.ts" />
/// <reference path="anydb-sql-migrations" />
var anydbsql = require('anydb-sql');
var migrator = require('anydb-sql-migrations');
function do_not_run() {
    var db = anydbsql({
        url: 'postgres://user:pass@host:port/database',
        connections: { min: 2, max: 20 }
    });
    migrator
        .create(db, '/path/to/migrations/dir')
        .run();
}

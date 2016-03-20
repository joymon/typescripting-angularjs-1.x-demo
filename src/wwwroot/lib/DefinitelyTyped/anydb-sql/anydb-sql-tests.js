/// <reference path="anydb-sql.d.ts" />
var anydbsql = require('anydb-sql');
function do_not_run() {
    var db = anydbsql({
        url: 'postgres://user:pass@host:port/database',
        connections: { min: 2, max: 20 }
    });
    var post = db.define({
        name: 'posts',
        columns: {
            content: {},
            userId: {},
            date: {}
        }
    });
    var user = db.define({
        name: 'users',
        columns: {
            id: { primaryKey: true },
            email: {},
            password: {},
            name: {},
            date: {}
        },
        has: {
            posts: { from: 'posts', many: true },
            group: { from: 'groups' }
        }
    });
    user.select(user.name, post.content)
        .from(user.join(post).on(user.id.equals(post.userId)))
        .where(post.date.gt('123'))
        .all();
}

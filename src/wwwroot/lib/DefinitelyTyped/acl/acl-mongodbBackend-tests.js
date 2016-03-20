/// <reference path='acl.d.ts'/>
// https://github.com/OptimalBits/node_acl/blob/master/Readme.md
var Acl = require('acl');
var db;
// Using the mongo db backend
var acl = new Acl(new Acl.mongodbBackend(db, 'acl_', true));
// guest is allowed to view blogs
acl.allow('guest', 'blogs', 'view');
// allow function accepts arrays as any parameter
acl.allow('member', 'blogs', ['edit', 'view', 'delete']);

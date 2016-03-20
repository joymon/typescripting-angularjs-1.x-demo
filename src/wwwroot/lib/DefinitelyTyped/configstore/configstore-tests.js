/// <reference path="configstore.d.ts" />
var cs = require('configstore');
var value;
var key;
var num;
var bool;
var object;
cs.set(key, value);
value = cs.get(key);
cs.del(key);
object = cs.all;
cs.all = object;
num = cs.size;
key = cs.path;

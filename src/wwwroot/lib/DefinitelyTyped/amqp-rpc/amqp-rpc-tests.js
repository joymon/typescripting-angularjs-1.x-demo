/// <reference path="./amqp-rpc.d.ts" />
var amqp_rpc = require('amqp-rpc');
var rpc = amqp_rpc.factory();
rpc.on('inc', function (param, cb) {
    var prevVal = param;
    var nextVal = param + 2;
    cb(++param, prevVal, nextVal);
});
rpc.on('say.*', function (param, cb, inf) {
    var arr = inf.cmd.split('.');
    var name = (param && param.name) ? param.name : 'world';
    cb(arr[1] + ' ' + name + '!');
});
rpc.on('withoutCB', function (param, cb, inf) {
    if (cb) {
        cb('please run function without cb parameter');
    }
    else {
        console.log('this is function withoutCB');
    }
});
rpc.call('inc', 5, function (param1, param2, param3) {
    console.log(param1, param2, param3);
});
rpc.call('say.Hello', { name: 'John' }, function (msg) {
    console.log('results of say.Hello:', msg); //output: Hello John!
});
rpc.call('withoutCB', {}, function (msg) {
    console.log('withoutCB results:', msg); //output: please run function without cb parameter
});
rpc.call('withoutCB', {}); //output message on server side console
var os = require('os');
var counter = 0;
rpc.onBroadcast('getWorkerStat', function (params, cb) {
    if (params && params.type == 'fullStat') {
        cb(null, {
            pid: process.pid,
            hostname: os.hostname(),
            uptime: process.uptime(),
            counter: counter++
        });
    }
    else {
        cb(null, { counter: counter++ });
    }
});
var all_stats = {};
rpc.callBroadcast('getWorkerStat', { type: 'fullStat' }, //request parameters
{
    ttl: 1000,
    onResponse: function (err, stat) {
        all_stats[stat.hostname + ':' + stat.pid] = stat;
    },
    onComplete: function () {
        console.log('----------------------- WORKER STATISTICS ----------------------------------------');
        for (var worker in all_stats) {
            var s = all_stats[worker];
            console.log(worker, '\tuptime=', s.uptime.toFixed(2) + ' seconds', '\tcounter=', s.counter);
        }
    }
});

/// <reference path="../node/node.d.ts" />
/// <reference path="batch-stream.d.ts" />
var fs = require('fs');
var BatchStream = require('batch-stream');
var batch = new BatchStream({ size: 5 });
var stream = fs.createReadStream('/etc/passwd');
stream
    .pipe(batch)
    .pipe(fs.createWriteStream('./test.out')); // deals with array input from pipe.

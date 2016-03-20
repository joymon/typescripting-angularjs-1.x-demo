/// <reference path="archiver.d.ts" />
/// <reference path="../node/node.d.ts" />
var Archiver = require('archiver');
var FS = require('fs');
var archiver = Archiver.create('zip');
var writeStream = FS.createWriteStream('./archiver.d.ts');
var readStream = FS.createReadStream('./archiver.d.ts');
archiver.pipe(writeStream);
archiver.append(readStream, { name: 'archiver.d.ts' });
archiver.finalize();

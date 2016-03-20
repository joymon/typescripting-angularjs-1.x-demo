/**
 * Created by stefansteinhart on 31.01.15.
 */
/// <reference path="byline.d.ts" />
var fs = require('fs');
var byline = require('byline');
//TODO can this be typed in an ambient way?
//var stream = byline( fs.createReadStream( 'sample.txt', {encoding: 'utf8'} ) );
var stream = byline.createStream(fs.createReadStream('sample.txt', { encoding: 'utf8' }));
stream.on('data', function (line) {
    console.log(line);
});
stream = byline.createStream(stream);
stream.on('data', function (line) {
    console.log(line);
});
var input = fs.createReadStream('sample.txt');
stream.pipe(fs.createWriteStream('nolines.txt'));
var lineStream = byline.createStream();
input.pipe(lineStream);
var output = fs.createWriteStream('test.txt');
lineStream.pipe(output);
stream.on('readable', function () {
    var line;
    while (null !== (line = stream.read())) {
        console.log(line);
    }
});
var LineStream = require('byline').LineStream;
var output = fs.createWriteStream('nolines.txt');
var lineStream = new LineStream();
input.pipe(lineStream);
lineStream.pipe(output);

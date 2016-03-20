/// <reference path="browserify.d.ts"/>
var browserify = require("browserify");
var fs = require("fs");
var stream = require('stream');
var bNoArg = browserify();
var b = browserify({
    baseDir: 'somewhere'
});
b.add('./browser/main.js');
b.transform('deamdify')
    .transform(function (file) {
    return new stream.Transform();
}).plugin(function (b, opts) { return opts.l; }, { l: 3 })
    .require('foo', { expose: 'bar' })
    .exclude('baz')
    .ignore('bat')
    .reset({ basedir: 'elsewhere' });
b.on('file', function (file) {
    file += "";
});
b.external(bNoArg);
var b2 = new browserify(['/some/File', { file: '/some/file' }, fs.createReadStream('/somewhere')], { builtins: ['buffer'] })
    .reset({
    builtins: {
        'buffer': './customBuffer'
    }
});
var customBrowsify = require("browserify");
customBrowsify({ entries: [] });
var b = browserify('./browser/main.js', {
    noParse: ['jquery'],
    debug: true,
    foo: 'bar'
});
b.add('./browser/other.js');
b.transform(function (file) {
    return new stream.PassThrough();
});
var record_pipeline = b.pipeline.get('record');
b.bundle().pipe(process.stdout);

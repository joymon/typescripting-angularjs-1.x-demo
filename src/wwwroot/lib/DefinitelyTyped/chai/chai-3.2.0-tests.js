/// <reference path="chai.d.ts" />
var chai = require('chai');
// ReSharper disable WrongExpressionStatement
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();
function chaiVersion() {
    expect(chai).to.have.property('version');
    chai.should.have.property('version');
}
function assertion() {
    expect('test').to.be.a('string');
    'test'.should.be.a('string');
    expect('foo').to.equal('foo');
    'foo'.should.equal('foo');
    should.equal('foo', 'foo');
}
function fail() {
    err(function () {
        should.fail('foo', 'bar');
    }, 'expected fail to throw an AssertionError');
    err(function () {
        should.fail('foo', 'bar', 'should fail');
    }, 'expected fail to throw an AssertionError');
    err(function () {
        should.fail('foo', 'bar', 'should fail', 'equal');
    }, 'expected fail to throw an AssertionError');
    err(function () {
        expect.fail('foo', 'bar');
    }, 'expected fail to throw an AssertionError');
    err(function () {
        expect.fail('foo', 'bar', 'should fail');
    }, 'expected fail to throw an AssertionError');
    err(function () {
        expect.fail('foo', 'bar', 'should fail', 'equal');
    }, 'expected fail to throw an AssertionError');
}
// ReSharper disable once InconsistentNaming
function _true() {
    expect(true).to.be.true;
    true.should.be.true;
    expect(false).to.not.be.true;
    false.should.not.be.true;
    expect(1).to.not.be.true;
    (1).should.not.be.true;
    err(function () {
        expect('test').to.be.true;
        'test'.should.be.true;
    }, 'expected \'test\' to be true');
}
function ok() {
    expect(true).to.be.ok;
    true.should.be.ok;
    expect(false).to.not.be.ok;
    false.should.not.be.ok;
    expect(1).to.be.ok;
    (1).should.be.ok;
    expect(0).to.not.be.ok;
    (0).should.not.be.ok;
    err(function () {
        expect('').to.be.ok;
        ''.should.be.ok;
    }, 'expected \'\' to be truthy');
    err(function () {
        expect('test').to.not.be.ok;
        'test'.should.not.be.ok;
    }, 'expected \'test\' to be falsy');
}
function _false() {
    expect(false).to.be.false;
    false.should.be.false;
    expect(true).to.not.be.false;
    true.should.not.be.false;
    expect(0).to.not.be.false;
    (0).should.not.be.false;
    err(function () {
        expect('').to.be.false;
        ''.should.be.false;
    }, 'expected \'\' to be false');
}
function _null() {
    expect(null).to.be.null;
    should.equal(null, null);
    expect(false).to.not.be.null;
    false.should.not.be.null;
    err(function () {
        expect('').to.be.null;
        ''.should.be.null;
    }, 'expected \'\' to be null');
}
function _undefined() {
    expect(undefined).to.be.undefined;
    should.equal(undefined, undefined);
    expect(null).to.not.be.undefined;
    should.not.equal(null, undefined);
    err(function () {
        expect('').to.be.undefined;
        ''.should.be.undefined;
    }, 'expected \'\' to be undefined');
}
function _NaN() {
    expect(NaN).to.be.NaN;
    expect(12).to.be.not.NaN;
    expect("NaN").to.be.not.NaN;
    (NaN).should.be.NaN;
    (12).should.be.not.NaN;
    ("NaN").should.be.not.NaN;
}
function exist() {
    var foo = 'bar';
    expect(foo).to.exist;
    should.exist(foo);
    expect(void (0)).to.not.exist;
    should.not.exist(void (0));
}
function argumentsTest() {
    var args = arguments;
    expect(args).to.be.arguments;
    args.should.be.arguments;
    expect([]).to.not.be.arguments;
    [].should.not.be.arguments;
    expect(args).to.be.an('arguments').and.be.arguments;
    args.should.be.an('arguments').and.be.arguments;
    expect([]).to.be.an('array').and.not.be.Arguments;
    [].should.be.an('array').and.not.be.Arguments;
}
function equal() {
    expect(undefined).to.equal(void (0));
    should.equal(undefined, void (0));
}
function _typeof() {
    expect('test').to.be.a('string');
    'test'.should.be.a('string');
    err(function () {
        expect('test').to.not.be.a('string');
        'test'.should.not.be.a('string');
    }, 'expected \'test\' not to be a string');
    expect(arguments).to.be.an('arguments');
    arguments.should.be.an('arguments');
    expect(5).to.be.a('number');
    (5).should.be.a('number');
    expect(new Number(1)).to.be.a('number');
    (new Number(1)).should.be.a('number');
    expect(Number(1)).to.be.a('number');
    Number(1).should.be.a('number');
    expect(true).to.be.a('boolean');
    true.should.be.a('boolean');
    expect(new Array()).to.be.a('array');
    (new Array()).should.be.a('array');
    expect(new Object()).to.be.a('object');
    (new Object()).should.be.a('object');
    expect({}).to.be.a('object');
    ({}).should.be.a('object');
    expect([]).to.be.a('array');
    [].should.be.a('array');
    expect(function () { }).to.be.a('function');
    (function () { }).should.be.a('function');
    expect(null).to.be.a('null');
    // N.B. previous line has no should equivalent
    err(function () {
        expect(5).to.not.be.a('number', 'blah');
        (5).should.not.be.a('number', 'blah');
    }, 'blah: expected 5 not to be a number');
}
var Foo = (function () {
    function Foo() {
    }
    return Foo;
})();
function _instanceof() {
    expect(new Foo()).to.be.an.instanceof(Foo);
    (new Foo()).should.be.an.instanceof(Foo);
    err(function () {
        expect(3).to.an.instanceof(Foo, 'blah');
        (3).should.an.instanceof(Foo, 'blah');
    }, 'blah: expected 3 to be an instance of Foo');
}
function within() {
    expect(5).to.be.within(5, 10);
    (5).should.be.within(5, 10);
    expect(5).to.be.within(3, 6);
    (5).should.be.within(3, 6);
    expect(5).to.be.within(3, 5);
    (5).should.be.within(3, 5);
    expect(5).to.not.be.within(1, 3);
    (5).should.not.be.within(1, 3);
    expect('foo').to.have.length.within(2, 4);
    'foo'.should.have.length.within(2, 4);
    expect([1, 2, 3]).to.have.length.within(2, 4);
    [1, 2, 3].should.have.length.within(2, 4);
    err(function () {
        expect(5).to.not.be.within(4, 6, 'blah');
        (5).should.not.be.within(4, 6, 'blah');
    }, 'blah: expected 5 to not be within 4..6', 'blah');
    err(function () {
        expect(10).to.be.within(50, 100, 'blah');
        (10).should.be.within(50, 100, 'blah');
    }, 'blah: expected 10 to be within 50..100');
    err(function () {
        expect('foo').to.have.length.within(5, 7, 'blah');
        'foo'.should.have.length.within(5, 7, 'blah');
    }, 'blah: expected \'foo\' to have a length within 5..7');
    err(function () {
        expect([1, 2, 3]).to.have.length.within(5, 7, 'blah');
        [1, 2, 3].should.have.length.within(5, 7, 'blah');
    }, 'blah: expected [ 1, 2, 3 ] to have a length within 5..7');
}
function above() {
    expect(5).to.be.above(2);
    (5).should.be.above(2);
    expect(5).to.be.greaterThan(2);
    (5).should.be.greaterThan(2);
    expect(5).to.not.be.above(5);
    (5).should.not.be.above(5);
    expect(5).to.not.be.above(6);
    (5).should.not.be.above(6);
    expect('foo').to.have.length.above(2);
    'foo'.should.have.length.above(2);
    expect([1, 2, 3]).to.have.length.above(2);
    [1, 2, 3].should.have.length.above(2);
    err(function () {
        expect(5).to.be.above(6, 'blah');
        (5).should.be.above(6, 'blah');
    }, 'blah: expected 5 to be above 6', 'blah');
    err(function () {
        expect(10).to.not.be.above(6, 'blah');
        (10).should.not.be.above(6, 'blah');
    }, 'blah: expected 10 to be at most 6');
    err(function () {
        expect('foo').to.have.length.above(4, 'blah');
        'foo'.should.have.length.above(4, 'blah');
    }, 'blah: expected \'foo\' to have a length above 4 but got 3');
    err(function () {
        expect([1, 2, 3]).to.have.length.above(4, 'blah');
        [1, 2, 3].should.have.length.above(4, 'blah');
    }, 'blah: expected [ 1, 2, 3 ] to have a length above 4 but got 3');
}
function least() {
    expect(5).to.be.at.least(2);
    (5).should.be.at.least(2);
    expect(5).to.be.at.least(5);
    (5).should.be.at.least(5);
    expect(5).to.not.be.at.least(6);
    (5).should.not.be.at.least(6);
    expect('foo').to.have.length.of.at.least(2);
    'foo'.should.have.length.of.at.least(2);
    expect([1, 2, 3]).to.have.length.of.at.least(2);
    [1, 2, 3].should.have.length.of.at.least(2);
    err(function () {
        expect(5).to.be.at.least(6, 'blah');
        (5).should.be.at.least(6, 'blah');
    }, 'blah: expected 5 to be at least 6', 'blah');
    err(function () {
        expect(10).to.not.be.at.least(6, 'blah');
        (10).should.not.be.at.least(6, 'blah');
    }, 'blah: expected 10 to be below 6');
    err(function () {
        expect('foo').to.have.length.of.at.least(4, 'blah');
        'foo'.should.have.length.of.at.least(4, 'blah');
    }, 'blah: expected \'foo\' to have a length at least 4 but got 3');
    err(function () {
        expect([1, 2, 3]).to.have.length.of.at.least(4, 'blah');
        [1, 2, 3].should.have.length.of.at.least(4, 'blah');
    }, 'blah: expected [ 1, 2, 3 ] to have a length at least 4 but got 3');
    err(function () {
        expect([1, 2, 3, 4]).to.not.have.length.of.at.least(4, 'blah');
        [1, 2, 3, 4].should.not.have.length.of.at.least(4, 'blah');
    }, 'blah: expected [ 1, 2, 3, 4 ] to have a length below 4');
}
function below() {
    expect(2).to.be.below(5);
    (2).should.be.below(5);
    expect(2).to.be.lessThan(5);
    (2).should.be.lessThan(5);
    expect(2).to.not.be.below(2);
    (2).should.not.be.below(2);
    expect(2).to.not.be.below(1);
    (2).should.not.be.below(1);
    expect('foo').to.have.length.below(4);
    'foo'.should.have.length.below(4);
    expect([1, 2, 3]).to.have.length.below(4);
    [1, 2, 3].should.have.length.below(4);
    err(function () {
        expect(6).to.be.below(5, 'blah');
        (6).should.be.below(5, 'blah');
    }, 'blah: expected 6 to be below 5');
    err(function () {
        expect(6).to.not.be.below(10, 'blah');
        (6).should.not.be.below(10, 'blah');
    }, 'blah: expected 6 to be at least 10');
    err(function () {
        expect('foo').to.have.length.below(2, 'blah');
        'foo'.should.have.length.below(2, 'blah');
    }, 'blah: expected \'foo\' to have a length below 2 but got 3');
    err(function () {
        expect([1, 2, 3]).to.have.length.below(2, 'blah');
        [1, 2, 3].should.have.length.below(2, 'blah');
    }, 'blah: expected [ 1, 2, 3 ] to have a length below 2 but got 3');
}
function most() {
    expect(2).to.be.at.most(5);
    (2).should.be.at.most(5);
    expect(2).to.be.at.most(2);
    (2).should.be.at.most(2);
    expect(2).to.not.be.at.most(1);
    (2).should.not.be.at.most(1);
    expect(2).to.not.be.at.most(1);
    (2).should.not.be.at.most(1);
    expect('foo').to.have.length.of.at.most(4);
    'foo'.should.have.length.of.at.most(4);
    expect([1, 2, 3]).to.have.length.of.at.most(4);
    [1, 2, 3].should.have.length.of.at.most(4);
    err(function () {
        expect(6).to.be.at.most(5, 'blah');
        (6).should.be.at.most(5, 'blah');
    }, 'blah: expected 6 to be at most 5');
    err(function () {
        expect(6).to.not.be.at.most(10, 'blah');
        (6).should.not.be.at.most(10, 'blah');
    }, 'blah: expected 6 to be above 10');
    err(function () {
        expect('foo').to.have.length.of.at.most(2, 'blah');
        'foo'.should.have.length.of.at.most(2, 'blah');
    }, 'blah: expected \'foo\' to have a length at most 2 but got 3');
    err(function () {
        expect([1, 2, 3]).to.have.length.of.at.most(2, 'blah');
        [1, 2, 3].should.have.length.of.at.most(2, 'blah');
    }, 'blah: expected [ 1, 2, 3 ] to have a length at most 2 but got 3');
    err(function () {
        expect([1, 2]).to.not.have.length.of.at.most(2, 'blah');
        [1, 2].should.not.have.length.of.at.most(2, 'blah');
    }, 'blah: expected [ 1, 2 ] to have a length above 2');
}
function match() {
    expect('foobar').to.match(/^foo/);
    'foobar'.should.match(/^foo/);
    expect('foobar').to.not.match(/^bar/);
    'foobar'.should.not.match(/^bar/);
    expect('foobar').matches(/^foo/);
    'foobar'.should.not.matches(/^bar/);
    err(function () {
        expect('foobar').to.match(/^bar/i, 'blah');
        'foobar'.should.match(/^bar/i, 'blah');
    }, 'blah: expected \'foobar\' to match /^bar/i');
    err(function () {
        expect('foobar').to.not.match(/^foo/i, 'blah');
        'foobar'.should.not.match(/^foo/i, 'blah');
    }, 'blah: expected \'foobar\' not to match /^foo/i');
}
function length2() {
    expect('test').to.have.length(4);
    'test'.should.have.length(4);
    expect('test').to.not.have.length(3);
    'test'.should.not.have.length(3);
    expect([1, 2, 3]).to.have.length(3);
    [1, 2, 3].should.have.length(3);
    err(function () {
        expect(4).to.have.length(3, 'blah');
        (4).should.have.length(3, 'blah');
    }, 'blah: expected 4 to have a property \'length\'');
    err(function () {
        expect('asd').to.not.have.length(3, 'blah');
        'asd'.should.not.have.length(3, 'blah');
    }, 'blah: expected \'asd\' to not have a length of 3');
}
function eql() {
    expect('test').to.eql('test');
    'test'.should.eql('test');
    expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
    ({ foo: 'bar' }).should.eql({ foo: 'bar' });
    expect(1).to.eql(1);
    (1).should.eql(1);
    expect('4').to.not.eql(4);
    '4'.should.not.eql(4);
    err(function () {
        expect(4).to.eql(3, 'blah');
        (4).should.eql(3, 'blah');
    }, 'blah: expected 4 to deeply equal 3');
}
var Buffer = (function () {
    function Buffer(arr) {
    }
    return Buffer;
})();
function buffer() {
    expect(new Buffer([1])).to.eql(new Buffer([1]));
    (new Buffer([1])).should.eql(new Buffer([1]));
    err(function () {
        expect(new Buffer([0])).to.eql(new Buffer([1]));
        (new Buffer([0])).should.eql(new Buffer([1]));
    }, 'expected <Buffer 00> to deeply equal <Buffer 01>');
}
function equal2() {
    expect('test').to.equal('test');
    'test'.should.equal('test');
    should.equal('test', 'test');
    expect(1).to.equal(1);
    (1).should.equal(1);
    should.equal(1, 1);
    err(function () {
        expect(4).to.equal(3, 'blah');
        (4).should.equal(3, 'blah');
        should.equal(4, 3, 'blah');
    }, 'blah: expected 4 to equal 3');
    err(function () {
        expect('4').to.equal(4, 'blah');
        '4'.should.equal(4, 'blah');
        should.equal(4, 4, 'blah');
    }, 'blah: expected \'4\' to equal 4');
}
function deepEqual() {
    expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
    ({ foo: 'bar' }).should.deep.equal({ foo: 'bar' });
    expect({ foo: 'bar' }).not.to.deep.equal({ foo: 'baz' });
}
function deepEqual2() {
    expect(/a/).to.deep.equal(/a/);
    /a/.should.deep.equal(/a/);
    expect(/a/).not.to.deep.equal(/b/);
    expect(/a/).not.to.deep.equal({});
    expect(/a/g).to.deep.equal(/a/g);
    /a/g.should.deep.equal(/a/g);
    expect(/a/g).not.to.deep.equal(/b/g);
    expect(/a/i).to.deep.equal(/a/i);
    /a/i.should.deep.equal(/a/i);
    expect(/a/i).not.to.deep.equal(/b/i);
    expect(/a/m).to.deep.equal(/a/m);
    /a/m.should.deep.equal(/a/m);
    expect(/a/m).not.to.deep.equal(/b/m);
}
// ReSharper disable once InconsistentNaming
function deepEqual3() {
    var a = new Date(1, 2, 3);
    var b = new Date(4, 5, 6);
    expect(a).to.deep.equal(a);
    a.should.deep.equal(a);
    expect(a).not.to.deep.equal(b);
    a.should.not.deep.equal(b);
    expect(a).not.to.deep.equal({});
    a.should.not.deep.equal({});
}
function deepInclude() {
    expect(['foo', 'bar']).to.deep.include(['bar', 'foo']);
    ['foo', 'bar'].should.deep.include(['bar', 'foo']);
    expect(['foo', 'bar']).not.to.deep.equal(['foo', 'baz']);
    ['foo', 'bar'].should.not.deep.equal(['foo', 'baz']);
}
var FakeArgs = (function () {
    function FakeArgs() {
    }
    return FakeArgs;
})();
function empty() {
    FakeArgs.prototype.length = 0;
    expect('').to.be.empty;
    ''.should.be.empty;
    expect('foo').not.to.be.empty;
    'foo'.should.not.be.empty;
    expect([]).to.be.empty;
    [].should.be.empty;
    expect(['foo']).not.to.be.empty;
    ['foo'].should.not.be.empty;
    expect(new FakeArgs).to.be.empty;
    (new FakeArgs).should.be.empty;
    expect({ arguments: 0 }).not.to.be.empty;
    ({ arguments: 0 }).should.not.be.empty;
    expect({}).to.be.empty;
    ({}).should.be.empty;
    expect({ foo: 'bar' }).not.to.be.empty;
    ({ foo: 'bar' }).should.not.be.empty;
    err(function () {
        expect('').not.to.be.empty;
        ''.should.not.be.empty;
    }, 'expected \'\' not to be empty');
    err(function () {
        expect('foo').to.be.empty;
        'foo'.should.be.empty;
        'foo'.should.be.empty;
    }, 'expected \'foo\' to be empty');
    err(function () {
        expect([]).not.to.be.empty;
        [].should.not.be.empty;
    }, 'expected [] not to be empty');
    err(function () {
        expect(['foo']).to.be.empty;
        ['foo'].should.be.empty;
    }, 'expected [ \'foo\' ] to be empty');
    err(function () {
        expect(new FakeArgs).not.to.be.empty;
        (new FakeArgs).should.not.be.empty;
    }, 'expected { length: 0 } not to be empty');
    err(function () {
        expect({ arguments: 0 }).to.be.empty;
        ({ arguments: 0 }).should.be.empty;
    }, 'expected { arguments: 0 } to be empty');
    err(function () {
        expect({}).not.to.be.empty;
        ({}).should.not.be.empty;
    }, 'expected {} not to be empty');
    err(function () {
        expect({ foo: 'bar' }).to.be.empty;
        ({ foo: 'bar' }).should.be.empty;
    }, 'expected { foo: \'bar\' } to be empty');
}
function property() {
    expect('test').to.have.property('length');
    'test'.should.have.property('length');
    expect(4).to.not.have.property('length');
    (4).should.not.have.property('length');
    expect({ 'foo.bar': 'baz' })
        .to.have.property('foo.bar');
    ({ 'foo.bar': 'baz' }).should.have.property('foo.bar');
    expect({ foo: { bar: 'baz' } })
        .to.not.have.property('foo.bar');
    ({ foo: { bar: 'baz' } }).should.not.have.property('foo.bar');
    err(function () {
        expect('asd').to.have.property('foo');
        'asd'.should.have.property('foo');
    }, 'expected \'asd\' to have a property \'foo\'');
    err(function () {
        expect({ foo: { bar: 'baz' } })
            .to.have.property('foo.bar');
        ({ foo: { bar: 'baz' } }).should.have.property('foo.bar');
    }, 'expected { foo: { bar: \'baz\' } } to have a property \'foo.bar\'');
}
function deepProperty() {
    expect({ 'foo.bar': 'baz' })
        .to.not.have.deep.property('foo.bar');
    ({ 'foo.bar': 'baz' }).should
        .not.have.deep.property('foo.bar');
    expect({ foo: { bar: 'baz' } })
        .to.have.deep.property('foo.bar');
    ({ foo: { bar: 'baz' } }).should
        .have.deep.property('foo.bar');
    err(function () {
        expect({ 'foo.bar': 'baz' })
            .to.have.deep.property('foo.bar');
        ({ 'foo.bar': 'baz' }).should
            .have.deep.property('foo.bar');
    }, 'expected { \'foo.bar\': \'baz\' } to have a deep property \'foo.bar\'');
}
function property2() {
    expect('test').to.have.property('length', 4);
    'test'.should.have.property('length', 4);
    expect('asd').to.have.property('constructor', String);
    'asd'.should.have.property('constructor', String);
    err(function () {
        expect('asd').to.have.property('length', 4, 'blah');
        'asd'.should.have.property('length', 4, 'blah');
    }, 'blah: expected \'asd\' to have a property \'length\' of 4, but got 3');
    err(function () {
        expect('asd').to.not.have.property('length', 3, 'blah');
        'asd'.should.not.have.property('length', 3, 'blah');
    }, 'blah: expected \'asd\' to not have a property \'length\' of 3');
    err(function () {
        expect('asd').to.not.have.property('foo', 3, 'blah');
        'asd'.should.not.have.property('foo', 3, 'blah');
    }, 'blah: \'asd\' has no property \'foo\'');
    err(function () {
        expect('asd').to.have.property('constructor', Number, 'blah');
        'asd'.should.have.property('constructor', Number, 'blah');
    }, 'blah: expected \'asd\' to have a property \'constructor\' of [Function: Number], but got [Function: String]');
}
function deepProperty2() {
    expect({ foo: { bar: 'baz' } })
        .to.have.deep.property('foo.bar', 'baz');
    ({ foo: { bar: 'baz' } }).should
        .have.deep.property('foo.bar', 'baz');
    err(function () {
        expect({ foo: { bar: 'baz' } })
            .to.have.deep.property('foo.bar', 'quux', 'blah');
        ({ foo: { bar: 'baz' } }).should
            .have.deep.property('foo.bar', 'quux', 'blah');
    }, 'blah: expected { foo: { bar: \'baz\' } } to have a deep property \'foo.bar\' of \'quux\', but got \'baz\'');
    err(function () {
        expect({ foo: { bar: 'baz' } })
            .to.not.have.deep.property('foo.bar', 'baz', 'blah');
        ({ foo: { bar: 'baz' } }).should
            .not.have.deep.property('foo.bar', 'baz', 'blah');
    }, 'blah: expected { foo: { bar: \'baz\' } } to not have a deep property \'foo.bar\' of \'baz\'');
    err(function () {
        expect({ foo: 5 })
            .to.not.have.deep.property('foo.bar', 'baz', 'blah');
        ({ foo: 5 }).should
            .not.have.deep.property('foo.bar', 'baz', 'blah');
    }, 'blah: { foo: 5 } has no deep property \'foo.bar\'');
}
function ownProperty() {
    expect('test').to.have.ownProperty('length');
    'test'.should.have.ownProperty('length');
    expect('test').to.haveOwnProperty('length');
    'test'.should.haveOwnProperty('length');
    expect({ length: 12 }).to.have.ownProperty('length');
    ({ length: 12 }).should.have.ownProperty('length');
    err(function () {
        expect({ length: 12 }).to.not.have.ownProperty('length', 'blah');
        ({ length: 12 }).should.not.have.ownProperty('length', 'blah');
    }, 'blah: expected { length: 12 } to not have own property \'length\'');
}
function ownPropertyDescriptor() {
    expect('test').to.have.ownPropertyDescriptor('length');
    expect('test').to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 4 });
    expect('test').not.to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 3 });
    expect('test').to.haveOwnPropertyDescriptor('length').to.have.property('enumerable', false);
    expect('test').to.haveOwnPropertyDescriptor('length').to.contain.keys('value');
    'test'.should.have.ownPropertyDescriptor('length');
    'test'.should.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 4 });
    'test'.should.not.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 3 });
    'test'.should.haveOwnPropertyDescriptor('length').to.have.property('enumerable', false);
    'test'.should.haveOwnPropertyDescriptor('length').to.contain.keys('value');
}
function string() {
    expect('foobar').to.have.string('bar');
    'foobar'.should.have.string('bar');
    expect('foobar').to.have.string('foo');
    'foobar'.should.have.string('foo');
    expect('foobar').to.not.have.string('baz');
    'foobar'.should.not.have.string('baz');
    err(function () {
        expect(3).to.have.string('baz');
        (3).should.have.string('baz');
    }, 'expected 3 to be a string');
    err(function () {
        expect('foobar').to.have.string('baz', 'blah');
        'foobar'.should.have.string('baz', 'blah');
    }, 'blah: expected \'foobar\' to contain \'baz\'');
    err(function () {
        expect('foobar').to.not.have.string('bar', 'blah');
        'foobar'.should.not.have.string('bar', 'blah');
    }, 'blah: expected \'foobar\' to not contain \'bar\'');
}
function include() {
    expect(['foo', 'bar']).to.include('foo');
    ['foo', 'bar'].should.include('foo');
    expect(['foo', 'bar']).to.include('foo');
    ['foo', 'bar'].should.include('foo');
    expect(['foo', 'bar']).to.include('bar');
    ['foo', 'bar'].should.include('bar');
    expect([1, 2]).to.include(1);
    [1, 2].should.include(1);
    expect(['foo', 'bar']).to.not.include('baz');
    ['foo', 'bar'].should.not.include('baz');
    expect(['foo', 'bar']).to.not.include(1);
    ['foo', 'bar'].should.not.include(1);
    // alias
    expect(['foo', 'bar']).includes('foo');
    ['foo', 'bar'].should.includes('foo');
    err(function () {
        expect(['foo']).to.include('bar', 'blah');
        ['foo'].should.include('bar', 'blah');
    }, 'blah: expected [ \'foo\' ] to include \'bar\'');
    err(function () {
        expect(['bar', 'foo']).to.not.include('foo', 'blah');
        ['bar', 'foo'].should.not.include('foo', 'blah');
    }, 'blah: expected [ \'bar\', \'foo\' ] to not include \'foo\'');
}
function keys() {
    expect({ foo: 1 }).to.have.keys(['foo']);
    ({ foo: 1 }).should.have.keys(['foo']);
    expect({ foo: 1, bar: 2 }).to.have.keys(['foo', 'bar']);
    ({ foo: 1, bar: 2 }).should.have.keys(['foo', 'bar']);
    expect({ foo: 1, bar: 2 }).to.have.keys('foo', 'bar');
    ({ foo: 1, bar: 2 }).should.have.keys('foo', 'bar');
    expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('foo', 'bar');
    ({ foo: 1, bar: 2, baz: 3 }).should.contain.keys('foo', 'bar');
    expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('bar', 'foo');
    ({ foo: 1, bar: 2, baz: 3 }).should.contain.keys('bar', 'foo');
    expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('baz');
    ({ foo: 1, bar: 2, baz: 3 }).should.contain.keys('baz');
    // alias
    expect({ foo: 1, bar: 2, baz: 3 }).contains.keys('baz');
    expect({ foo: 1, bar: 2 }).to.have.all.keys(['foo', 'bar']);
    expect({ foo: 1, bar: 2 }).to.have.any.keys(['foo', 'bar']);
    ({ foo: 1, bar: 2, baz: 3 }).should.contain.all.keys('baz');
    ({ foo: 1, bar: 2, baz: 3 }).should.contain.any.keys('baz');
    expect({ foo: 1, bar: 2 }).to.contain.keys('foo');
    ({ foo: 1, bar: 2 }).should.contain.keys('foo');
    expect({ foo: 1, bar: 2 }).to.contain.keys('bar', 'foo');
    ({ foo: 1, bar: 2 }).should.contain.keys('bar', 'foo');
    expect({ foo: 1, bar: 2 }).to.contain.keys(['foo']);
    ({ foo: 1, bar: 2 }).should.contain.keys(['foo']);
    expect({ foo: 1, bar: 2 }).to.contain.keys(['bar']);
    ({ foo: 1, bar: 2 }).should.contain.keys(['bar']);
    expect({ foo: 1, bar: 2 }).to.contain.keys(['bar', 'foo']);
    ({ foo: 1, bar: 2 }).should.contain.keys(['bar', 'foo']);
    expect({ foo: 1, bar: 2 }).to.not.have.keys('baz');
    ({ foo: 1, bar: 2 }).should.not.have.keys('baz');
    expect({ foo: 1, bar: 2 }).to.not.have.keys('foo', 'baz');
    ({ foo: 1, bar: 2 }).should.not.have.keys('foo', 'baz');
    expect({ foo: 1, bar: 2 }).to.not.contain.keys('baz');
    ({ foo: 1, bar: 2 }).should.not.contain.keys('baz');
    expect({ foo: 1, bar: 2 }).to.not.contain.keys('foo', 'baz');
    ({ foo: 1, bar: 2 }).should.not.contain.keys('foo', 'baz');
    expect({ foo: 1, bar: 2 }).to.not.contain.keys('baz', 'foo');
    ({ foo: 1, bar: 2 }).should.not.contain.keys('baz', 'foo');
    err(function () {
        expect({ foo: 1 }).to.have.keys();
        ({ foo: 1 }).should.have.keys();
    }, 'keys required');
    err(function () {
        expect({ foo: 1 }).to.have.keys([]);
        ({ foo: 1 }).should.have.keys([]);
    }, 'keys required');
    err(function () {
        expect({ foo: 1 }).to.not.have.keys([]);
        ({ foo: 1 }).should.not.have.keys([]);
    }, 'keys required');
    err(function () {
        expect({ foo: 1 }).to.contain.keys([]);
        ({ foo: 1 }).should.contain.keys([]);
    }, 'keys required');
    err(function () {
        expect({ foo: 1 }).to.have.keys(['bar']);
        ({ foo: 1 }).should.have.keys(['bar']);
    }, 'expected { foo: 1 } to have key \'bar\'');
    err(function () {
        expect({ foo: 1 }).to.have.keys(['bar', 'baz']);
        ({ foo: 1 }).should.have.keys(['bar', 'baz']);
    }, 'expected { foo: 1 } to have keys \'bar\', and \'baz\'');
    err(function () {
        expect({ foo: 1 }).to.have.keys(['foo', 'bar', 'baz']);
        ({ foo: 1 }).should.have.keys(['foo', 'bar', 'baz']);
    }, 'expected { foo: 1 } to have keys \'foo\', \'bar\', and \'baz\'');
    err(function () {
        expect({ foo: 1 }).to.not.have.keys(['foo']);
        ({ foo: 1 }).should.not.have.keys(['foo']);
    }, 'expected { foo: 1 } to not have key \'foo\'');
    err(function () {
        expect({ foo: 1 }).to.not.have.keys(['foo']);
        ({ foo: 1 }).should.not.have.keys(['foo']);
    }, 'expected { foo: 1 } to not have key \'foo\'');
    err(function () {
        expect({ foo: 1, bar: 2 }).to.not.have.keys(['foo', 'bar']);
        ({ foo: 1, bar: 2 }).should.not.have.keys(['foo', 'bar']);
    }, 'expected { foo: 1, bar: 2 } to not have keys \'foo\', and \'bar\'');
    err(function () {
        expect({ foo: 1 }).to.not.contain.keys(['foo']);
        ({ foo: 1 }).should.not.contain.keys(['foo']);
    }, 'expected { foo: 1 } to not contain key \'foo\'');
    err(function () {
        expect({ foo: 1 }).to.contain.keys('foo', 'bar');
        ({ foo: 1 }).should.contain.keys('foo', 'bar');
    }, 'expected { foo: 1 } to contain keys \'foo\', and \'bar\'');
}
function chaining() {
    var tea = { name: 'chai', extras: ['milk', 'sugar', 'smile'] };
    expect(tea).to.have.property('extras').with.lengthOf(3);
    tea.should.have.property('extras').with.lengthOf(3);
    err(function () {
        expect(tea).to.have.property('extras').with.lengthOf(4);
        tea.should.have.property('extras').with.lengthOf(4);
    }, 'expected [ \'milk\', \'sugar\', \'smile\' ] to have a length of 4 but got 3');
    expect(tea).to.be.a('object').and.have.property('name', 'chai');
    tea.should.be.a('object').and.have.property('name', 'chai');
}
function exxtensible() {
    expect({}).to.be.extensible;
    expect(Object.preventExtensions({})).to.be.not.extensible;
    ({}).should.be.extensible;
    Object.preventExtensions({}).should.not.be.extensible;
}
function sealed() {
    expect({}).to.be.not.sealed;
    expect(Object.seal({})).to.be.sealed;
    ({}).should.be.not.sealed;
    Object.seal({}).should.be.sealed;
}
function frozen() {
    expect({}).to.be.not.frozen;
    expect(Object.freeze({})).to.be.frozen;
    ({}).should.be.not.frozen;
    Object.freeze({}).should.be.frozen;
}
var PoorlyConstructedError = (function () {
    function PoorlyConstructedError() {
    }
    return PoorlyConstructedError;
})();
function _throw() {
    // See GH-45: some poorly-constructed custom errors don't have useful names
    // on either their constructor or their constructor prototype, but instead
    // only set the name inside the constructor itself.
    PoorlyConstructedError.prototype = Object.create(Error.prototype);
    var specificError = new RangeError('boo');
    var goodFn = function () { }, badFn = function () { throw new Error('testing'); }, refErrFn = function () { throw new ReferenceError('hello'); }, ickyErrFn = function () { throw new PoorlyConstructedError(); }, specificErrFn = function () { throw specificError; };
    expect(goodFn).to.not.throw();
    goodFn.should.not.throw();
    should.not.throw(goodFn);
    expect(goodFn).to.not.throw(Error);
    goodFn.should.not.throw(Error);
    should.not.throw(goodFn, Error);
    expect(goodFn).to.not.throw(specificError);
    goodFn.should.not.throw(specificError);
    should.not.throw(goodFn, specificError);
    expect(badFn).to.throw();
    badFn.should.throw();
    should.throw(badFn);
    expect(badFn).to.throw(Error);
    badFn.should.throw(Error);
    should.throw(badFn, Error);
    expect(badFn).to.not.throw(ReferenceError);
    badFn.should.not.throw(ReferenceError);
    should.not.throw(badFn, ReferenceError);
    expect(badFn).to.not.throw(specificError);
    badFn.should.not.throw(specificError);
    should.not.throw(badFn, specificError);
    expect(refErrFn).to.throw();
    refErrFn.should.throw();
    should.throw(refErrFn);
    expect(refErrFn).to.throw(ReferenceError);
    refErrFn.should.throw(ReferenceError);
    should.throw(refErrFn, ReferenceError);
    expect(refErrFn).to.throw(Error);
    refErrFn.should.throw(Error);
    should.throw(refErrFn, Error);
    expect(refErrFn).to.not.throw(TypeError);
    refErrFn.should.not.throw(TypeError);
    should.not.throw(refErrFn, TypeError);
    expect(refErrFn).to.not.throw(specificError);
    refErrFn.should.not.throw(specificError);
    should.not.throw(refErrFn, specificError);
    expect(ickyErrFn).to.throw();
    ickyErrFn.should.throw();
    should.throw(ickyErrFn);
    expect(ickyErrFn).to.throw(PoorlyConstructedError);
    ickyErrFn.should.throw(PoorlyConstructedError);
    should.throw(ickyErrFn, PoorlyConstructedError);
    expect(ickyErrFn).to.throw(Error);
    ickyErrFn.should.throw(Error);
    should.throw(ickyErrFn, Error);
    expect(ickyErrFn).to.not.throw(specificError);
    ickyErrFn.should.not.throw(specificError);
    should.not.throw(ickyErrFn, specificError);
    expect(specificErrFn).to.throw(specificError);
    specificErrFn.should.throw(specificError);
    should.throw(ickyErrFn, specificError);
    expect(badFn).to.throw(/testing/);
    badFn.should.throw(/testing/);
    should.throw(badFn, /testing/);
    expect(badFn).to.not.throw(/hello/);
    badFn.should.not.throw(/hello/);
    should.not.throw(badFn, /hello/);
    expect(badFn).to.throw('testing');
    badFn.should.throw('testing');
    should.throw(badFn, 'testing');
    expect(badFn).to.not.throw('hello');
    badFn.should.not.throw('hello');
    should.not.throw(badFn, 'hello');
    expect(badFn).to.throw(Error, /testing/);
    badFn.should.throw(Error, /testing/);
    should.throw(badFn, Error, /testing/);
    expect(badFn).to.throw(Error, 'testing');
    badFn.should.throw(Error, 'testing');
    should.throw(badFn, Error, 'testing');
    err(function () {
        expect(goodFn).to.throw();
        goodFn.should.throw();
        should.throw(goodFn);
    }, 'expected [Function] to throw an error');
    err(function () {
        expect(goodFn).to.throw(ReferenceError);
        goodFn.should.throw(ReferenceError);
        should.throw(goodFn, ReferenceError);
    }, 'expected [Function] to throw ReferenceError');
    err(function () {
        expect(goodFn).to.throw(specificError);
        goodFn.should.throw(specificError);
        should.throw(goodFn, specificError);
    }, 'expected [Function] to throw [RangeError: boo]');
    err(function () {
        expect(badFn).to.not.throw();
        badFn.should.not.throw();
        should.not.throw(badFn);
    }, 'expected [Function] to not throw an error but [Error: testing] was thrown');
    err(function () {
        expect(badFn).to.throw(ReferenceError);
        badFn.should.throw(ReferenceError);
        should.throw(badFn, ReferenceError);
    }, 'expected [Function] to throw \'ReferenceError\' but [Error: testing] was thrown');
    err(function () {
        expect(badFn).to.throw(specificError);
        badFn.should.throw(specificError);
        should.throw(badFn, specificError);
    }, 'expected [Function] to throw [RangeError: boo] but [Error: testing] was thrown');
    err(function () {
        expect(badFn).to.not.throw(Error);
        badFn.should.not.throw(Error);
        should.not.throw(badFn, Error);
    }, 'expected [Function] to not throw \'Error\' but [Error: testing] was thrown');
    err(function () {
        expect(refErrFn).to.not.throw(ReferenceError);
        refErrFn.should.not.throw(ReferenceError);
        should.not.throw(refErrFn, ReferenceError);
    }, 'expected [Function] to not throw \'ReferenceError\' but [ReferenceError: hello] was thrown');
    err(function () {
        expect(badFn).to.throw(PoorlyConstructedError);
        badFn.should.throw(PoorlyConstructedError);
        should.throw(badFn, PoorlyConstructedError);
    }, 'expected [Function] to throw \'PoorlyConstructedError\' but [Error: testing] was thrown');
    err(function () {
        expect(ickyErrFn).to.not.throw(PoorlyConstructedError);
        ickyErrFn.should.not.throw(PoorlyConstructedError);
        should.not.throw(ickyErrFn, PoorlyConstructedError);
    }, /^(expected \[Function\] to not throw 'PoorlyConstructedError' but)(.*)(PoorlyConstructedError|\{ Object \()(.*)(was thrown)$/);
    err(function () {
        expect(ickyErrFn).to.throw(ReferenceError);
        ickyErrFn.should.throw(ReferenceError);
        should.throw(ickyErrFn, ReferenceError);
    }, /^(expected \[Function\] to throw 'ReferenceError' but)(.*)(PoorlyConstructedError|\{ Object \()(.*)(was thrown)$/);
    err(function () {
        expect(specificErrFn).to.throw(new ReferenceError('eek'));
        specificErrFn.should.throw(new ReferenceError('eek'));
        should.throw(specificErrFn, new ReferenceError('eek'));
    }, 'expected [Function] to throw [ReferenceError: eek] but [RangeError: boo] was thrown');
    err(function () {
        expect(specificErrFn).to.not.throw(specificError);
        specificErrFn.should.not.throw(specificError);
        should.not.throw(specificErrFn, specificError);
    }, 'expected [Function] to not throw [RangeError: boo]');
    err(function () {
        expect(badFn).to.not.throw(/testing/);
        badFn.should.not.throw(/testing/);
        should.not.throw(badFn, /testing/);
    }, 'expected [Function] to throw error not matching /testing/');
    err(function () {
        expect(badFn).to.throw(/hello/);
        badFn.should.throw(/hello/);
        should.throw(badFn, /hello/);
    }, 'expected [Function] to throw error matching /hello/ but got \'testing\'');
    err(function () {
        expect(badFn).to.throw(Error, /hello/, 'blah');
        badFn.should.throw(Error, /hello/, 'blah');
        should.throw(badFn, Error, /hello/, 'blah');
    }, 'blah: expected [Function] to throw error matching /hello/ but got \'testing\'');
    err(function () {
        expect(badFn).to.throw(Error, 'hello', 'blah');
        badFn.should.throw(Error, 'hello', 'blah');
        should.throw(badFn, Error, 'hello', 'blah');
    }, 'blah: expected [Function] to throw error including \'hello\' but got \'testing\'');
}
function use() {
    // ReSharper disable once InconsistentNaming
    chai.use(function (_chai) {
        _chai.can.use.any();
    });
}
var Klass = (function () {
    function Klass() {
        this.val = 0;
    }
    Klass.prototype.bar = function () { };
    Klass.baz = function () { };
    return Klass;
})();
function respondTo() {
    var obj = new Klass();
    expect(Klass).to.respondTo('bar');
    expect(obj).respondsTo('bar');
    Klass.should.respondTo('bar');
    Klass.should.respondsTo('bar');
    expect(Klass).to.not.respondTo('foo');
    Klass.should.not.respondTo('foo');
    expect(Klass).itself.to.respondTo('func');
    expect(Klass).itself.not.to.respondTo('bar');
    expect(obj).not.to.respondTo('foo');
    obj.should.not.respondTo('foo');
    err(function () {
        expect(Klass).to.respondTo('baz', 'constructor');
        Klass.should.respondTo('baz', 'constructor');
    }, /^(constructor: expected)(.*)(\[Function: Klass\])(.*)(to respond to \'baz\')$/);
    err(function () {
        expect(obj).to.respondTo('baz', 'object');
        obj.should.respondTo('baz', 'object');
    }, /^(object: expected)(.*)(\{ foo: \[Function\] \}|\{ Object \()(.*)(to respond to \'baz\')$/);
}
function satisfy() {
    function matcher(num) {
        return num === 1;
    }
    expect(1).to.satisfy(matcher);
    (1).should.satisfy(matcher);
    err(function () {
        expect(2).to.satisfy(matcher, 'blah');
        (2).should.satisfy(matcher, 'blah');
    }, 'blah: expected 2 to satisfy [Function: matcher]');
}
function closeTo() {
    expect(1.5).to.be.closeTo(1.0, 0.5);
    (1.5).should.be.closeTo(1.0, 0.5);
    expect(10).to.be.closeTo(20, 20);
    (10).should.be.closeTo(20, 20);
    expect(-10).to.be.closeTo(20, 30);
    (-10).should.be.closeTo(20, 30);
    err(function () {
        expect(2).to.be.closeTo(1.0, 0.5, 'blah');
        (2).should.be.closeTo(1.0, 0.5, 'blah');
    }, 'blah: expected 2 to be close to 1 +/- 0.5');
    err(function () {
        expect(-10).to.be.closeTo(20, 29, 'blah');
        (-10).should.be.closeTo(20, 29, 'blah');
    }, 'blah: expected -10 to be close to 20 +/- 29');
}
function includeMembers() {
    expect([1, 2, 3]).to.include.members([]);
    [1, 2, 3].should.include.members([]);
    expect([1, 2, 3]).to.include.members([3, 2]);
    [1, 2, 3].should.include.members([3, 2]);
    expect([1, 2, 3]).to.not.include.members([8, 4]);
    [1, 2, 3].should.not.include.members([8, 4]);
    expect([1, 2, 3]).to.not.include.members([1, 2, 3, 4]);
    [1, 2, 3].should.not.include.members([1, 2, 3, 4]);
}
function sameMembers() {
    expect([5, 4]).to.have.same.members([4, 5]);
    [5, 4].should.have.same.members([4, 5]);
    expect([5, 4]).to.have.same.members([5, 4]);
    [5, 4].should.have.same.members([5, 4]);
    expect([5, 4]).to.not.have.same.members([]);
    [5, 4].should.not.have.same.members([]);
    expect([5, 4]).to.not.have.same.members([6, 3]);
    [5, 4].should.not.have.same.members([6, 3]);
    expect([5, 4]).to.not.have.same.members([5, 4, 2]);
    [5, 4].should.not.have.same.members([5, 4, 2]);
    assert.sameMembers([5, 4], [4, 5]);
}
function sameDeepMembers() {
    expect([{ id: 5 }, { id: 4 }]).to.have.same.deep.members([{ id: 4 }, { id: 5 }]);
    [{ id: 5 }, { id: 4 }].should.have.same.deep.members([{ id: 4 }, { id: 5 }]);
    expect([{ id: 5 }, { id: 4 }]).to.have.same.members([{ id: 5 }, { id: 4 }]);
    [{ id: 5 }, { id: 4 }].should.have.same.members([{ id: 5 }, { id: 4 }]);
    expect([{ id: 5 }, { id: 4 }]).to.not.have.same.members([]);
    [{ id: 5 }, { id: 4 }].should.not.have.same.members([]);
    expect([{ id: 5 }, { id: 4 }]).to.not.have.same.members([{ id: 6 }, { id: 3 }]);
    [{ id: 5 }, { id: 4 }].should.not.have.same.members([{ id: 6 }, { id: 3 }]);
    expect([{ id: 5 }, { id: 4 }]).to.not.have.same.members([{ id: 5 }, { id: 4 }, { id: 2 }]);
    [{ id: 5 }, { id: 4 }].should.not.have.same.members([{ id: 5 }, { id: 4 }, { id: 2 }]);
    assert.sameDeepMembers([{ id: 5 }, { id: 4 }], [{ id: 4 }, { id: 5 }]);
}
function members() {
    expect([5, 4]).members([4, 5]);
    expect([5, 4]).members([5, 4]);
    expect([5, 4]).not.members([]);
    expect([5, 4]).not.members([6, 3]);
    expect([5, 4]).not.members([5, 4, 2]);
}
function increaseDecreaseChange() {
    var obj = { val: 10 };
    var inc = function () { obj.val++; };
    var dec = function () { obj.val--; };
    var same = function () { };
    expect(inc).to.increase(obj, "val");
    expect(inc).increases(obj, "val");
    expect(inc).to.change(obj, "val");
    expect(dec).to.decrease(obj, "val");
    expect(dec).decreases(obj, "val");
    expect(dec).to.change(obj, "val");
    expect(dec).changes(obj, "val");
    expect(inc).to.not.decrease(obj, "val");
    expect(dec).to.not.increase(obj, "val");
    expect(same).to.not.increase(obj, "val");
    expect(same).to.not.decrease(obj, "val");
    expect(same).to.not.change(obj, "val");
    inc.should.increase(obj, "val");
    inc.should.change(obj, "val");
    dec.should.decrease(obj, "val");
    dec.should.change(obj, "val");
    inc.should.not.decrease(obj, "val");
    dec.should.not.increase(obj, "val");
    same.should.not.change(obj, "val");
}
var CrashyObject = (function () {
    function CrashyObject() {
    }
    CrashyObject.prototype.inspect = function () {
        throw new Error('Arg\'s inspect() called even though the test passed');
    };
    return CrashyObject;
})();
suite('assert', function () {
    test('assert', function () {
        var foo = 'bar';
        assert(foo === 'bar', 'expected foo to equal `bar`');
        err(function () {
            assert(foo === 'baz', 'expected foo to equal `bar`');
        }, 'expected foo to equal `bar`');
    });
    test('isTrue', function () {
        assert.isTrue(true);
        err(function () {
            assert.isTrue(false);
        }, 'expected false to be true');
        err(function () {
            assert.isTrue(1);
        }, 'expected 1 to be true');
        err(function () {
            assert.isTrue('test');
        }, 'expected \'test\' to be true');
    });
    test('ok', function () {
        assert.ok(true);
        assert.ok(1);
        assert.ok('test');
        assert.isOk(true);
        assert.isOk(1);
        assert.isOk('test');
        err(function () {
            assert.ok(false);
        }, 'expected false to be truthy');
        err(function () {
            assert.ok(0);
        }, 'expected 0 to be truthy');
        err(function () {
            assert.ok('');
        }, 'expected \'\' to be truthy');
    });
    test('notOk', function () {
        assert.notOk(false);
        assert.notOk(0);
        assert.notOk('');
        assert.isNotOk(false);
        assert.isNotOk(0);
        assert.isNotOk('');
        err(function () {
            assert.notOk(true);
        }, 'expected true to be falsy');
        err(function () {
            assert.notOk(1);
        }, 'expected 1 to be falsy');
        err(function () {
            assert.notOk('test');
        }, 'expected \'test\' to be falsy');
    });
    test('isFalse', function () {
        assert.isFalse(false);
        err(function () {
            assert.isFalse(true);
        }, 'expected true to be false');
        err(function () {
            assert.isFalse(0);
        }, 'expected 0 to be false');
    });
    test('equal', function () {
        assert.equal(void (0), undefined);
    });
    test('typeof / notTypeOf', function () {
        assert.typeOf('test', 'string');
        assert.typeOf(true, 'boolean');
        assert.typeOf(5, 'number');
        err(function () {
            assert.typeOf(5, 'string');
        }, 'expected 5 to be a string');
    });
    test('notTypeOf', function () {
        assert.notTypeOf('test', 'number');
        err(function () {
            assert.notTypeOf(5, 'number');
        }, 'expected 5 not to be a number');
    });
    test('instanceOf', function () {
        assert.instanceOf(new Foo(), Foo);
        err(function () {
            assert.instanceOf(5, Foo);
        }, 'expected 5 to be an instance of Foo');
        assert.instanceOf(new CrashyObject(), CrashyObject);
    });
    test('notInstanceOf', function () {
        assert.notInstanceOf(new Foo(), String);
        err(function () {
            assert.notInstanceOf(new Foo(), Foo);
        }, 'expected {} to not be an instance of Foo');
    });
    test('isObject', function () {
        assert.isObject({});
        assert.isObject(new Foo());
        err(function () {
            assert.isObject(true);
        }, 'expected true to be an object');
        err(function () {
            assert.isObject(Foo);
        }, 'expected [Function: Foo] to be an object');
        err(function () {
            assert.isObject('foo');
        }, 'expected \'foo\' to be an object');
    });
    test('isNotObject', function () {
        assert.isNotObject(5);
        err(function () {
            assert.isNotObject({});
        }, 'expected {} not to be an object');
    });
    test('notEqual', function () {
        assert.notEqual(3, 4);
        err(function () {
            assert.notEqual(5, 5);
        }, 'expected 5 to not equal 5');
    });
    test('strictEqual', function () {
        assert.strictEqual('foo', 'foo');
        err(function () {
            assert.strictEqual('5', 5);
        }, 'expected \'5\' to equal 5');
    });
    test('notStrictEqual', function () {
        assert.notStrictEqual(5, '5');
        err(function () {
            assert.notStrictEqual(5, 5);
        }, 'expected 5 to not equal 5');
    });
    test('deepEqual', function () {
        assert.deepEqual({ tea: 'chai' }, { tea: 'chai' });
        err(function () {
            assert.deepEqual({ tea: 'chai' }, { tea: 'black' });
        }, 'expected { tea: \'chai\' } to deeply equal { tea: \'black\' }');
        var obja = Object.create({ tea: 'chai' }), objb = Object.create({ tea: 'chai' });
        assert.deepEqual(obja, objb);
        var obj1 = Object.create({ tea: 'chai' }), obj2 = Object.create({ tea: 'black' });
        err(function () {
            assert.deepEqual(obj1, obj2);
        }, 'expected { tea: \'chai\' } to deeply equal { tea: \'black\' }');
    });
    test('deepEqual (ordering)', function () {
        var a = { a: 'b', c: 'd' }, b = { c: 'd', a: 'b' };
        assert.deepEqual(a, b);
    });
    test('deepEqual (circular)', function () {
        var circularObject = {}, secondCircularObject = {};
        circularObject.field = circularObject;
        secondCircularObject.field = secondCircularObject;
        assert.deepEqual(circularObject, secondCircularObject);
        err(function () {
            secondCircularObject.field2 = secondCircularObject;
            assert.deepEqual(circularObject, secondCircularObject);
        }, 'expected { field: [Circular] } to deeply equal { Object (field, field2) }');
    });
    test('notDeepEqual', function () {
        assert.notDeepEqual({ tea: 'jasmine' }, { tea: 'chai' });
        err(function () {
            assert.notDeepEqual({ tea: 'chai' }, { tea: 'chai' });
        }, 'expected { tea: \'chai\' } to not deeply equal { tea: \'chai\' }');
    });
    test('notDeepEqual (circular)', function () {
        var circularObject = {}, secondCircularObject = { tea: 'jasmine' };
        circularObject.field = circularObject;
        secondCircularObject.field = secondCircularObject;
        assert.notDeepEqual(circularObject, secondCircularObject);
        err(function () {
            delete secondCircularObject.tea;
            assert.notDeepEqual(circularObject, secondCircularObject);
        }, 'expected { field: [Circular] } to not deeply equal { field: [Circular] }');
    });
    test('isNull', function () {
        assert.isNull(null);
        err(function () {
            assert.isNull(undefined);
        }, 'expected undefined to equal null');
    });
    test('isNotNull', function () {
        assert.isNotNull(undefined);
        err(function () {
            assert.isNotNull(null);
        }, 'expected null to not equal null');
    });
    test('isUndefined', function () {
        assert.isUndefined(undefined);
        err(function () {
            assert.isUndefined(null);
        }, 'expected null to equal undefined');
    });
    test('isDefined', function () {
        assert.isDefined(null);
        err(function () {
            assert.isDefined(undefined);
        }, 'expected undefined to not equal undefined');
    });
    test('isNaN', function () {
        assert.isNaN(NaN);
        err(function () {
            assert.isNaN(12);
        }, 'expected 12 to be NaN');
    });
    test('isNotNaN', function () {
        assert.isNotNaN(12);
        err(function () {
            assert.isNotNaN(NaN);
        }, 'expected NaN to not NaN');
    });
    test('isFunction', function () {
        var func = function () {
        };
        assert.isFunction(func);
        err(function () {
            assert.isFunction({});
        }, 'expected {} to be a function');
    });
    test('isNotFunction', function () {
        assert.isNotFunction(5);
        err(function () {
            assert.isNotFunction(function () {
            });
        }, 'expected [Function] not to be a function');
    });
    test('isArray', function () {
        assert.isArray([]);
        assert.isArray(new Array());
        err(function () {
            assert.isArray({});
        }, 'expected {} to be an array');
    });
    test('isNotArray', function () {
        assert.isNotArray(3);
        err(function () {
            assert.isNotArray([]);
        }, 'expected [] not to be an array');
        err(function () {
            assert.isNotArray(new Array());
        }, 'expected [] not to be an array');
    });
    test('isString', function () {
        assert.isString('Foo');
        assert.isString(new String('foo'));
        err(function () {
            assert.isString(1);
        }, 'expected 1 to be a string');
    });
    test('isNotString', function () {
        assert.isNotString(3);
        assert.isNotString(['hello']);
        err(function () {
            assert.isNotString('hello');
        }, 'expected \'hello\' not to be a string');
    });
    test('isNumber', function () {
        assert.isNumber(1);
        assert.isNumber(Number('3'));
        err(function () {
            assert.isNumber('1');
        }, 'expected \'1\' to be a number');
    });
    test('isNotNumber', function () {
        assert.isNotNumber('hello');
        assert.isNotNumber([5]);
        err(function () {
            assert.isNotNumber(4);
        }, 'expected 4 not to be a number');
    });
    test('isBoolean', function () {
        assert.isBoolean(true);
        assert.isBoolean(false);
        err(function () {
            assert.isBoolean('1');
        }, 'expected \'1\' to be a boolean');
    });
    test('isNotBoolean', function () {
        assert.isNotBoolean('true');
        err(function () {
            assert.isNotBoolean(true);
        }, 'expected true not to be a boolean');
        err(function () {
            assert.isNotBoolean(false);
        }, 'expected false not to be a boolean');
    });
    test('include', function () {
        assert.include('foobar', 'bar');
        assert.include([1, 2, 3], 3);
        err(function () {
            assert.include('foobar', 'baz');
        }, 'expected \'foobar\' to contain \'baz\'');
        err(function () {
            assert.include(undefined, 'bar');
        }, 'expected an array or string');
    });
    test('notInclude', function () {
        assert.notInclude('foobar', 'baz');
        assert.notInclude([1, 2, 3], 4);
        err(function () {
            assert.notInclude('foobar', 'bar');
        }, 'expected \'foobar\' to not contain \'bar\'');
        err(function () {
            assert.notInclude(undefined, 'bar');
        }, 'expected an array or string');
    });
    test('lengthOf', function () {
        assert.lengthOf([1, 2, 3], 3);
        assert.lengthOf('foobar', 6);
        err(function () {
            assert.lengthOf('foobar', 5);
        }, 'expected \'foobar\' to have a length of 5 but got 6');
        err(function () {
            assert.lengthOf(1, 5);
        }, 'expected 1 to have a property \'length\'');
    });
    test('match', function () {
        assert.match('foobar', /^foo/);
        assert.notMatch('foobar', /^bar/);
        err(function () {
            assert.match('foobar', /^bar/i);
        }, 'expected \'foobar\' to match /^bar/i');
        err(function () {
            assert.notMatch('foobar', /^foo/i);
        }, 'expected \'foobar\' not to match /^foo/i');
    });
    test('property', function () {
        var obj = { foo: { bar: 'baz' } };
        var simpleObj = { foo: 'bar' };
        assert.property(obj, 'foo');
        assert.deepProperty(obj, 'foo.bar');
        assert.notProperty(obj, 'baz');
        assert.notProperty(obj, 'foo.bar');
        assert.notDeepProperty(obj, 'foo.baz');
        assert.deepPropertyVal(obj, 'foo.bar', 'baz');
        assert.deepPropertyNotVal(obj, 'foo.bar', 'flow');
        err(function () {
            assert.property(obj, 'baz');
        }, 'expected { foo: { bar: \'baz\' } } to have a property \'baz\'');
        err(function () {
            assert.deepProperty(obj, 'foo.baz');
        }, 'expected { foo: { bar: \'baz\' } } to have a deep property \'foo.baz\'');
        err(function () {
            assert.notProperty(obj, 'foo');
        }, 'expected { foo: { bar: \'baz\' } } to not have property \'foo\'');
        err(function () {
            assert.notDeepProperty(obj, 'foo.bar');
        }, 'expected { foo: { bar: \'baz\' } } to not have deep property \'foo.bar\'');
        err(function () {
            assert.propertyVal(simpleObj, 'foo', 'ball');
        }, 'expected { foo: \'bar\' } to have a property \'foo\' of \'ball\', but got \'bar\'');
        err(function () {
            assert.deepPropertyVal(obj, 'foo.bar', 'ball');
        }, 'expected { foo: { bar: \'baz\' } } to have a deep property \'foo.bar\' of \'ball\', but got \'baz\'');
        err(function () {
            assert.propertyNotVal(simpleObj, 'foo', 'bar');
        }, 'expected { foo: \'bar\' } to not have a property \'foo\' of \'bar\'');
        err(function () {
            assert.deepPropertyNotVal(obj, 'foo.bar', 'baz');
        }, 'expected { foo: { bar: \'baz\' } } to not have a deep property \'foo.bar\' of \'baz\'');
    });
    test('throws', function () {
        assert.throws(function () {
            throw new Error('foo');
        });
        assert.throws(function () {
            throw new Error('bar');
        }, 'bar');
        assert.throws(function () {
            throw new Error('bar');
        }, /bar/);
        assert.throws(function () {
            throw new Error('bar');
        }, Error);
        assert.throws(function () {
            throw new Error('bar');
        }, Error, 'bar');
        err(function () {
            assert.throws(function () {
                throw new Error('foo');
            }, TypeError);
        }, 'expected [Function] to throw \'TypeError\' but [Error: foo] was thrown');
        err(function () {
            assert.throws(function () {
                throw new Error('foo');
            }, 'bar');
        }, 'expected [Function] to throw error including \'bar\' but got \'foo\'');
        err(function () {
            assert.throws(function () {
                throw new Error('foo');
            }, Error, 'bar');
        }, 'expected [Function] to throw error including \'bar\' but got \'foo\'');
        err(function () {
            assert.throws(function () {
                throw new Error('foo');
            }, TypeError, 'bar');
        }, 'expected [Function] to throw \'TypeError\' but [Error: foo] was thrown');
        err(function () {
            assert.throws(function () {
            });
        }, 'expected [Function] to throw an error');
        err(function () {
            assert.throws(function () {
                throw new Error('');
            }, 'bar');
        }, 'expected [Function] to throw error including \'bar\' but got \'\'');
        err(function () {
            assert.throws(function () {
                throw new Error('');
            }, /bar/);
        }, 'expected [Function] to throw error matching /bar/ but got \'\'');
    });
    test('doesNotThrow', function () {
        assert.doesNotThrow(function () {
        });
        assert.doesNotThrow(function () {
        }, 'foo');
        err(function () {
            assert.doesNotThrow(function () {
                throw new Error('foo');
            });
        }, 'expected [Function] to not throw an error but [Error: foo] was thrown');
    });
    test('ifError', function () {
        assert.ifError(false);
        assert.ifError(null);
        assert.ifError(undefined);
        err(function () {
            assert.ifError('foo');
        }, 'expected \'foo\' to be falsy');
    });
    test('operator', function () {
        assert.operator(1, '<', 2);
        assert.operator(2, '>', 1);
        assert.operator(1, '==', 1);
        assert.operator(1, '<=', 1);
        assert.operator(1, '>=', 1);
        assert.operator(1, '!=', 2);
        assert.operator(1, '!==', 2);
        err(function () {
            assert.operator(1, '=', 2);
        }, 'Invalid operator "="');
        err(function () {
            assert.operator(2, '<', 1);
        }, 'expected 2 to be < 1');
        err(function () {
            assert.operator(1, '>', 2);
        }, 'expected 1 to be > 2');
        err(function () {
            assert.operator(1, '==', 2);
        }, 'expected 1 to be == 2');
        err(function () {
            assert.operator(2, '<=', 1);
        }, 'expected 2 to be <= 1');
        err(function () {
            assert.operator(1, '>=', 2);
        }, 'expected 1 to be >= 2');
        err(function () {
            assert.operator(1, '!=', 1);
        }, 'expected 1 to be != 1');
        err(function () {
            assert.operator(1, '!==', '1');
        }, 'expected 1 to be !== \'1\'');
    });
    test('closeTo', function () {
        assert.closeTo(1.5, 1.0, 0.5);
        assert.closeTo(10, 20, 20);
        assert.closeTo(-10, 20, 30);
        err(function () {
            assert.closeTo(2, 1.0, 0.5);
        }, 'expected 2 to be close to 1 +/- 0.5');
        err(function () {
            assert.closeTo(-10, 20, 29);
        }, 'expected -10 to be close to 20 +/- 29');
    });
    test('members', function () {
        assert.includeMembers([1, 2, 3], [2, 3]);
        assert.includeMembers([1, 2, 3], []);
        assert.includeMembers([1, 2, 3], [3]);
        err(function () {
            assert.includeMembers([5, 6], [7, 8]);
        }, 'expected [ 5, 6 ] to be a superset of [ 7, 8 ]');
        err(function () {
            assert.includeMembers([5, 6], [5, 6, 0]);
        }, 'expected [ 5, 6 ] to be a superset of [ 5, 6, 0 ]');
    });
    test('memberEquals', function () {
        assert.sameMembers([], []);
        assert.sameMembers([1, 2, 3], [3, 2, 1]);
        assert.sameMembers([4, 2], [4, 2]);
        err(function () {
            assert.sameMembers([], [1, 2]);
        }, 'expected [] to have the same members as [ 1, 2 ]');
        err(function () {
            assert.sameMembers([1, 54], [6, 1, 54]);
        }, 'expected [ 1, 54 ] to have the same members as [ 6, 1, 54 ]');
    });
    test('isAbove', function () {
        assert.isAbove(10, 5);
        err(function () {
            assert.isAbove(1, 5);
        }, 'expected 1 to be above 5');
        err(function () {
            assert.isAbove(5, 5);
        }, 'expected 5 to be above 5');
    });
    test('isBelow', function () {
        assert.isBelow(5, 10);
        err(function () {
            assert.isBelow(5, 1);
        }, 'expected 5 to be above 1');
        err(function () {
            assert.isBelow(5, 5);
        }, 'expected 5 to be below 5');
    });
    test('extensible', function () { assert.extensible({}); });
    test('isExtensible', function () { assert.isExtensible({}); });
    test('notExtensible', function () { assert.notExtensible(Object.preventExtensions({})); });
    test('isNotExtensible', function () { assert.isNotExtensible(Object.preventExtensions({})); });
    test('sealed', function () { assert.sealed(Object.seal({})); });
    test('isSealed', function () { assert.isSealed(Object.seal({})); });
    test('notSealed', function () { assert.notSealed({}); });
    test('isNotSealed', function () { assert.isNotSealed({}); });
    test('frozen', function () { assert.frozen(Object.freeze({})); });
    test('isFrozen', function () { assert.isFrozen(Object.freeze({})); });
    test('notFrozen', function () { assert.notFrozen({}); });
    test('isNotFrozen', function () { assert.isNotFrozen({}); });
});

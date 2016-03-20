/// <reference path="chai-as-promised.d.ts" />
/// <reference path="../promises-a-plus/promises-a-plus.d.ts" />
/// <reference path="../q/Q.d.ts" />
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Q = require('q');
chai.use(chaiAsPromised);
var TestClass = (function () {
    function TestClass() {
    }
    return TestClass;
})();
// ReSharper disable WrongExpressionStatement
// BDD API (expect)
var thenableNum;
thenableNum = chai.expect(thenableNum).to.eventually.equal(3);
thenableNum = chai.expect(thenableNum).to.eventually.have.property('foo');
thenableNum = chai.expect(thenableNum).to.become(3);
thenableNum = chai.expect(thenableNum).to.be.fulfilled;
thenableNum = chai.expect(thenableNum).to.be.rejected;
thenableNum = chai.expect(thenableNum).to.be.rejectedWith(Error);
thenableNum = chai.expect(thenableNum).to.be.rejectedWith('Error');
thenableNum = chai.expect(thenableNum).to.be.rejectedWith(/message/);
thenableNum = chai.expect(thenableNum).to.be.rejectedWith(Error, /message/);
thenableNum = chai.expect(thenableNum).to.be.rejectedWith(Error, 'message');
thenableNum = chai.expect(thenableNum).to.be.rejectedWith(TestClass);
thenableNum = chai.expect(thenableNum).to.be.rejectedWith(TestClass, /message/);
thenableNum = chai.expect(thenableNum).to.be.rejectedWith(TestClass, 'message');
thenableNum = chai.expect(thenableNum).to.notify(function () { return console.log('done'); });
// BDD API (should)
thenableNum = thenableNum.should.be.fulfilled;
thenableNum = thenableNum.should.eventually.deep.equal(3);
thenableNum = thenableNum.should.become(3);
thenableNum = thenableNum.should.be.rejected;
thenableNum = thenableNum.should.be.rejectedWith(Error);
thenableNum = thenableNum.should.be.rejectedWith('Error');
thenableNum = thenableNum.should.be.rejectedWith(/message/);
thenableNum = thenableNum.should.be.rejectedWith(Error, /message/);
thenableNum = thenableNum.should.be.rejectedWith(Error, 'message');
thenableNum = thenableNum.should.be.rejectedWith(TestClass);
thenableNum = thenableNum.should.be.rejectedWith(TestClass, /message/);
thenableNum = thenableNum.should.be.rejectedWith(TestClass, 'message');
thenableNum = thenableNum.should.eventually.equal(3).notify(function () { return console.log('done'); });
thenableNum = thenableNum.should.be.fulfilled.and.notify(function () { return console.log('done'); });
// Complex examples on https://github.com/domenic/chai-as-promised#working-with-non-promisefriendly-test-runners
thenableNum.should.be.fulfilled.then(function () {
    thenableNum.should.equal("after");
}).should.notify(function () { return console.log('done'); });
Q.all([
    thenableNum.should.become("happy"),
    thenableNum.should.eventually.have.property("fun times"),
    thenableNum.should.be.rejectedWith(TypeError, "only joyful types are allowed")
]).should.notify(function () { return console.log('done'); });
// Assert API
var thenableVoid;
thenableVoid = chai.assert.eventually.equal(thenableNum, 4, 'Message');
thenableVoid = chai.assert.isFulfilled(thenableNum, "optional message");
thenableVoid = chai.assert.becomes(thenableNum, "foo", "optional message");
thenableVoid = chai.assert.doesNotBecome(thenableNum, "foo", "optional message");
thenableVoid = chai.assert.isRejected(thenableNum, "optional message");
thenableVoid = chai.assert.isRejected(thenableNum, Error, "optional message");
thenableVoid = chai.assert.isRejected(thenableNum, /error message matcher/, "optional message");
// Check that original chai assertions are not broken
var undef;
undef = chai.assert.equal(10, 4, 'Message');

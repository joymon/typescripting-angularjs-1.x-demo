/// <reference path="chance.d.ts" />
// Instantiation
var globalInstance = chance;
var createYourOwn = new Chance(Math.random);
// Basic usage
var randBool = chance.bool();
var birthday = chance.birthday();
var birthdayStr = chance.birthday({ string: true });
var strArr = chance.n(chance.string, 42);
var uniqInts = chance.unique(chance.integer, 99);
var currencyPair = chance.currency_pair();
var firstCurrency = currencyPair[0];
var secondCurrency = currencyPair[1];
chance.mixin({
    time: function () {
        var h = chance.hour({ twentyfour: true }), m = chance.minute();
        return h + ":" + m;
    }
});
var timeString = chance.time();
var chanceConstructedWithSeed100 = new Chance(100);
var chanceCalledWithSeed100 = Chance();

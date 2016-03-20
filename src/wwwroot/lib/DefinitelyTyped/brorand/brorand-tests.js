/// <reference path="./brorand.d.ts" />
var brorand = require('brorand');
{
    var result_1 = brorand(42);
}
{
    var Rand = new brorand.Rand({ getByte: function () { return 255; } });
    var rand = Rand.rand;
    var result_2 = Rand.generate(42);
}

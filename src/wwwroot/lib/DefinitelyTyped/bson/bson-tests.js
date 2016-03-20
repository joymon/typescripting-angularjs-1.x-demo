/// <reference path="bson.d.ts"/>
var bson = require('bson');
var BSON = new bson.BSONPure.BSON();
var Long = bson.BSONPure.Long;
var doc = { long: Long.fromNumber(100) };
// Serialize a document
var data = BSON.serialize(doc, false, true, false);
console.log("data:", data);
// Deserialize the resulting Buffer
var doc_2 = BSON.deserialize(data);
console.log("doc_2:", doc_2);
BSON = new bson.BSONNative.BSON();
data = BSON.serialize(doc);
doc_2 = BSON.deserialize(data);

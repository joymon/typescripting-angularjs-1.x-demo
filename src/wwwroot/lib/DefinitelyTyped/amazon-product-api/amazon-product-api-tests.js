/// <reference path="./amazon-product-api.d.ts" />
/// <reference path="../node/node.d.ts"/>
var amazon = require('amazon-product-api');
var client = amazon.createClient({
    awsId: process.env.AWS_ACCESS_KEY_ID,
    awsSecret: process.env.AWS_SECRET,
    awsTag: process.env.AWS_ASSOCIATE_TAG
});
// Item Search
var searchQuery = {
    director: 'Quentin Tarantino',
    actor: 'Samuel L. Jackson',
    searchIndex: 'DVD',
    audienceRating: 'R',
    responseGroup: 'ItemAttributes,Offers,Images'
};
client.itemSearch(searchQuery).then(function (results) {
    console.log(getResultCount(results) + " search results");
}).catch(function (err) {
    console.log(err);
});
client.itemSearch(searchQuery, function (err, results) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(getResultCount(results) + " search results");
});
// Item Lookup
var lookupQuery = {
    itemId: 'B00008OE6I',
    idType: 'ASIN',
    responseGroup: 'OfferFull',
    Condition: 'All'
};
client.itemLookup(lookupQuery).then(function (results) {
    console.log(getResultCount(results) + " lookup results");
}).catch(function (err) {
    console.log(err);
});
client.itemLookup(lookupQuery, function (err, results) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(getResultCount(results) + " lookup results");
});
// Browse Node Lookup
var nodeLookupQuery = {
    browseNodeId: '2625373011'
};
client.browseNodeLookup(nodeLookupQuery).then(function (results) {
    console.log(getResultCount(results) + " node lookup results");
}).catch(function (err) {
    console.log(err);
});
client.browseNodeLookup(nodeLookupQuery, function (err, results) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(getResultCount(results) + " node lookup results");
});
function getResultCount(results) {
    return results != undefined ? results.length : 0;
}

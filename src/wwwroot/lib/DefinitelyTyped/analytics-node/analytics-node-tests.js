/// <reference path="./analytics-node.d.ts" />
var analytics;
var Analytics = require("analytics-node");
function testConfig() {
    analytics = new Analytics('YOUR_WRITE_KEY', {
        flushAt: 20,
        flushAfter: 10000
    });
}
function testIdentify() {
    analytics.identify({
        userId: '019mr8mf4r',
        traits: {
            name: 'Michael Bolton',
            email: 'mbolton@initech.com',
            plan: 'Enterprise',
            friends: 42
        }
    });
}
function testTrack() {
    analytics.track({
        userId: '019mr8mf4r',
        event: 'Purchased an Item',
        properties: {
            revenue: 39.95,
            shippingMethod: '2-day'
        }
    });
}
function testPage() {
    analytics.page({
        userId: '019mr8mf4r',
        category: 'Docs',
        name: 'Node.js Library',
        properties: {
            url: 'https://segment.com/docs/libraries/node',
            path: '/docs/libraries/node/',
            title: 'Node.js Library - Segment',
            referrer: 'https://github.com/segmentio/analytics-node'
        }
    });
}
function testAlias() {
    // the anonymous user does actions ...
    analytics.track({ userId: 'anonymous_user', event: 'Anonymous Event' });
    // the anonymous user signs up and is aliased
    analytics.alias({ previousId: 'anonymous_user', userId: 'identified@gmail.com' });
    // the identified user is identified
    analytics.identify({ userId: 'identified@gmail.com', traits: { plan: 'Free' } });
    // the identified user does actions ...
    analytics.track({ userId: 'identified@gmail.com', event: 'Identified Action' });
}
function testGroup() {
    analytics.group({
        userId: '019mr8mf4r',
        groupId: '56',
        traits: {
            name: 'Initech',
            description: 'Accounting Software'
        }
    });
}
function testIntegrations() {
    analytics.track({
        event: 'Upgraded Membershipt',
        userId: '97234974',
        integrations: {
            'All': false,
            'Vero': true,
            'Google Analytics': false
        }
    });
}
function testFlush() {
    analytics.flush();
    analytics.flush(function (err, batch) {
        if (err) {
            alert("Oh nos!");
        }
        else {
            console.log(batch.batch[0].type);
        }
    });
}

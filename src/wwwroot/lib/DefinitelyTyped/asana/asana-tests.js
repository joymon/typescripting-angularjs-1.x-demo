/// <reference path="asana.d.ts" />
/// <reference path="../request/request.d.ts" />
var asana = require('asana');
var util = require('util');
var version = asana.VERSION;
// https://github.com/Asana/node-asana#usage
// Usage
var client = asana.Client.create().useAccessToken('my_access_token');
client.users.me().then(function (me) {
    console.log(me);
});
client = asana.Client.create({
    clientId: 123,
    clientSecret: 'my_client_secret',
    redirectUri: 'my_redirect_uri'
});
client.useOauth({
    credentials: 'my_access_token'
});
var credentials = {
    // access_token: 'my_access_token',
    refresh_token: 'my_refresh_token'
};
client.useOauth({
    credentials: credentials
});
// https://github.com/Asana/node-asana#collections
// Collections
var tagId = null;
client.tasks.findByTag(tagId, { limit: 5 }).then(function (collection) {
    console.log(collection.data);
    // [ .. array of up to 5 task objects .. ]
    client.tasks.findByTag(tagId).then(function (firstPage) {
        console.log(firstPage.data);
        collection.nextPage().then(function (secondPage) {
            console.log(secondPage.data);
        });
    });
});
client.tasks.findByTag(tagId).then(function (collection) {
    // Fetch up to 200 tasks, using multiple pages if necessary
    collection.fetch(200).then(function (tasks) {
        console.log(tasks);
    });
});
client.tasks.findByTag(tagId).then(function (collection) {
    collection.stream().on('data', function (task) {
        console.log(task);
    });
});
// https://github.com/Asana/node-asana#examples
// Examples
var Asana = asana;
// Using the API key for basic authentication. This is reasonable to get
// started with, but Oauth is more secure and provides more features.
var client = Asana.Client.create().useBasicAuth(process.env.ASANA_API_KEY);
client.users.me()
    .then(function (user) {
    var userId = user.id;
    // The user's "default" workspace is the first one in the list, though
    // any user can have multiple workspaces so you can't always assume this
    // is the one you want to work with.
    var workspaceId = user.workspaces[0].id;
    return client.tasks.findAll({
        assignee: userId,
        workspace: workspaceId,
        completed_since: 'now',
        opt_fields: 'id,name,assignee_status,completed'
    });
})
    .then(function (response) {
    // There may be more pages of data, we could stream or return a promise
    // to request those here - for now, let's just return the first page
    // of items.
    return response.data;
})
    .filter(function (task) {
    return task.assignee_status === 'today' ||
        task.assignee_status === 'new';
})
    .then(function (list) {
    console.log(util.inspect(list, {
        colors: true,
        depth: null
    }));
});

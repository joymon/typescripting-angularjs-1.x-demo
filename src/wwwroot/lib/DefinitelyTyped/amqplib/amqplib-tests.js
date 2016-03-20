/// <reference path="amqplib.d.ts" />
// promise api tests
var amqp = require("amqplib");
var msg = "Hello World";
// test promise api
amqp.connect("amqp://localhost")
    .then(function (connection) {
    return connection.createChannel()
        .tap(function (channel) { return channel.checkQueue("myQueue"); })
        .then(function (channel) { return channel.sendToQueue("myQueue", new Buffer(msg)); })
        .ensure(function () { return connection.close(); });
});
amqp.connect("amqp://localhost")
    .then(function (connection) {
    return connection.createChannel()
        .tap(function (channel) { return channel.checkQueue("myQueue"); })
        .then(function (channel) { return channel.consume("myQueue", function (newMsg) { return console.log("New Message: " + newMsg.content.toString()); }); })
        .ensure(function () { return connection.close(); });
});
// test promise api properties
var amqpMessage;
amqpMessage.properties.contentType = "application/json";
var amqpAssertExchangeOptions;
var anqpAssertExchangeReplies;
// callback api tests
var amqpcb = require("amqplib/callback_api");
amqpcb.connect("amqp://localhost", function (err, connection) {
    if (!err) {
        connection.createChannel(function (err, channel) {
            if (!err) {
                channel.assertQueue("myQueue", {}, function (err, ok) {
                    if (!err) {
                        channel.sendToQueue("myQueue", new Buffer(msg));
                    }
                });
            }
        });
    }
});
amqpcb.connect("amqp://localhost", function (err, connection) {
    if (!err) {
        connection.createChannel(function (err, channel) {
            if (!err) {
                channel.assertQueue("myQueue", {}, function (err, ok) {
                    if (!err) {
                        channel.consume("myQueue", function (newMsg) { return console.log("New Message: " + newMsg.content.toString()); });
                    }
                });
            }
        });
    }
});
// test callback api properties
var amqpcbMessage;
amqpcbMessage.properties.contentType = "application/json";
var amqpcbAssertExchangeOptions;
var anqpcbAssertExchangeReplies;

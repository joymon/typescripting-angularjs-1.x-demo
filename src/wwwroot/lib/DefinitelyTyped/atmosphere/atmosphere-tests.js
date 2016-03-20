/// <reference path="atmosphere.d.ts" />
var socket = atmosphere;
var request1 = new atmosphere.AtmosphereRequest();
request1.url = document.location.toString() + 'chat';
request1.contentType = "application/json";
request1.transport = 'websocket';
request1.fallbackTransport = 'long-polling';
var request2 = {
    url: 'http://localhost:8080/chat',
    contentType: "application/json",
    logLevel: 'debug',
    transport: 'websocket',
    fallbackTransport: 'long-polling'
};
request1.onError = function (response) { };
request1.onClose = function (response) { };
request1.onOpen = function (response) { };
request1.onMessage = function (response) { };
request1.onReopen = function (request, response) { };
request1.onReconnect = function (request, response) { };
request1.onMessagePublished = function (response) { };
request1.onTransportFailure = function (reason, response) { };
request1.onLocalMessage = function (request) { };
request1.onFailureToReconnect = function (request, response) { };
request1.onClientTimeout = function (request) { };
request1.subscribe = function (options) { };
request1.execute = function () { };
request1.close = function () { };
request1.disconnect = function () { };
request1.getUrl = function () { return "http://www.toedter.com"; };
request1.push = function (message, dispatchUrl) { };
request1.getUUID = function () { };
request1.pushLocal = function (message) { };
var subSocket = socket.subscribe(request1);
var subSocket2 = socket.subscribe('http://chat.com', function () { }, request2);
subSocket2.close();
subSocket.push("test");
socket.unsubscribe();

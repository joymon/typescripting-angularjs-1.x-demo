/// <reference path="chrome-app.d.ts" />
var createOptions = {
    id: "My Window",
    bounds: {
        left: 0,
        top: 0,
        width: 640,
        height: 480
    },
    resizable: true
};
//Create new window on app launch
chrome.app.runtime.onLaunched.addListener(function (launchData) {
    chrome.app.window.create('app/url', createOptions, function (created_window) {
        return;
    });
});
chrome.app.runtime.onRestarted.addListener(function () { return; });
// retrieving windows
var currentWindow = chrome.app.window.current();
var otherWindow = chrome.app.window.get('some-string');
var allWindows = chrome.app.window.getAll();
// listening to window events
currentWindow.onBoundsChanged.addListener(function () { return; });
currentWindow.onClosed.addListener(function () { return; });
currentWindow.onFullscreened.addListener(function () { return; });
currentWindow.onMaximized.addListener(function () { return; });
currentWindow.onMinimized.addListener(function () { return; });
currentWindow.onRestored.addListener(function () { return; });
// check platform capabilities
var visibleEverywhere = chrome.app.window.canSetVisibleOnAllWorkspaces();
// FileSystem
// https://developer.chrome.com/apps/fileSystem
function test_fileSystem() {
    var accepts = [
        { mimeTypes: ["text/*"], extensions: ['js', 'css', 'txt', 'html', 'xml', 'tsv', 'csv', 'rtf'] }
    ];
    var chooseOption = {
        type: "openFile",
        suggestedName: "foo.txt",
        accepts: accepts,
        acceptsAllTypes: false,
        acceptsMultiple: false
    };
    chrome.fileSystem.chooseEntry(chooseOption, function (entry) {
        chrome.fileSystem.getDisplayPath(entry, function (displayPath) { });
        var retainedId = chrome.fileSystem.retainEntry(entry);
        chrome.fileSystem.isRestorable(retainedId, function (isRestorable) {
            if (isRestorable) {
                chrome.fileSystem.restoreEntry(retainedId, function (restoredEntry) { });
            }
        });
        chrome.fileSystem.getWritableEntry(entry, function (writableEntry) { });
        chrome.fileSystem.isWritableEntry(entry, function (isWritable) { });
    });
}
// Sockets
// https://developer.chrome.com/apps/sockets_tcp
function test_socketsTcp() {
    var socketId;
    var properties = {};
    var buffer = new ArrayBuffer(256);
    // create
    chrome.sockets.tcp.create(function (info) {
        socketId = info.socketId;
    });
    chrome.sockets.tcp.create(properties, function (info) {
        socketId = info.socketId;
    });
    // update
    chrome.sockets.tcp.update(socketId, properties);
    chrome.sockets.tcp.update(socketId, properties, function () { });
    // setPaused
    chrome.sockets.tcp.setPaused(socketId, true);
    chrome.sockets.tcp.setPaused(socketId, true, function () { });
    // setKeepAlive
    chrome.sockets.tcp.setKeepAlive(socketId, true, function (result) { });
    chrome.sockets.tcp.setKeepAlive(socketId, true, 0, function (result) { });
    // setNoDelay
    chrome.sockets.tcp.setNoDelay(socketId, true, function (result) { });
    // connect
    chrome.sockets.tcp.connect(socketId, "192.168.0.1", 8080, function (result) { });
    // disconnect
    chrome.sockets.tcp.disconnect(socketId);
    chrome.sockets.tcp.disconnect(socketId, function () { });
    // send
    chrome.sockets.tcp.send(socketId, buffer, function (info) { });
    // close
    chrome.sockets.tcp.close(socketId);
    chrome.sockets.tcp.close(socketId, function () { });
    // getInfo
    chrome.sockets.tcp.getInfo(socketId, function (info) { });
    // getSockets
    chrome.sockets.tcp.getSockets(function (infos) { });
}
function test_socketsTcpEvents() {
    chrome.sockets.tcp.onReceive.addListener(function (info) { });
    chrome.sockets.tcp.onReceiveError.addListener(function (info) { });
}
function testSocketsTcpTypes() {
    // SocketProperties
    var properties;
    properties = {};
    properties = {
        persistent: true,
        name: "test",
        bufferSize: 1024
    };
    // SocketInfo
    var socketInfo;
    socketInfo = {
        socketId: 1,
        persistent: true,
        paused: true,
        connected: false
    };
    socketInfo.name = "test";
    socketInfo.bufferSize = 1024;
    socketInfo.localAddress = "192.168.0.2";
    socketInfo.localPort = 8000;
    socketInfo.peerAddress = "192.168.0.3";
    socketInfo.peerPort = 1000;
}
// https://developer.chrome.com/apps/sockets_udp
function test_socketsUdp() {
    var socketId;
    var properties = {};
    var buffer = new ArrayBuffer(256);
    // create
    chrome.sockets.udp.create(function (info) {
        socketId = info.socketId;
    });
    chrome.sockets.udp.create(properties, function (info) {
        socketId = info.socketId;
    });
    // update
    chrome.sockets.udp.update(socketId, properties);
    chrome.sockets.udp.update(socketId, properties, function () { });
    // setPaused
    chrome.sockets.udp.setPaused(socketId, true);
    chrome.sockets.udp.setPaused(socketId, true, function () { });
    // bind
    chrome.sockets.udp.bind(socketId, "0.0.0.0", 8080, function (result) { });
    // send
    chrome.sockets.udp.send(socketId, buffer, "172.21.0.1", 10080, function (info) { });
    // close
    chrome.sockets.udp.close(socketId);
    chrome.sockets.udp.close(socketId, function () { });
    // getInfo
    chrome.sockets.udp.getInfo(socketId, function (info) { });
    // getSockets
    chrome.sockets.udp.getSockets(function (infos) { });
    // joinGroup
    chrome.sockets.udp.joinGroup(socketId, "224.0.0.1", function (result) { });
    // leaveGroup
    chrome.sockets.udp.leaveGroup(socketId, "224.0.0.1", function (result) { });
    // setMulticastTimeToLive
    chrome.sockets.udp.setMulticastTimeToLive(socketId, 100, function (result) { });
    // setMulticastLoopbackMode
    chrome.sockets.udp.setMulticastLoopbackMode(socketId, true, function (result) { });
    // getJoinedGroups
    chrome.sockets.udp.getJoinedGroups(socketId, function (groups) { });
}
function test_socketsUdpEvents() {
    chrome.sockets.udp.onReceive.addListener(function (info) { });
    chrome.sockets.udp.onReceiveError.addListener(function (info) { });
}
function testSocketsUdpTypes() {
    // SocketProperties
    var properties;
    properties = {};
    properties = {
        persistent: true,
        name: "test",
        bufferSize: 1024
    };
    // SocketInfo
    var socketInfo;
    socketInfo = {
        socketId: 1,
        persistent: true,
        paused: true
    };
    socketInfo.name = "test";
    socketInfo.bufferSize = 1024;
    socketInfo.localAddress = "192.168.0.2";
    socketInfo.localPort = 8000;
}
// https://developer.chrome.com/apps/sockets_tcpServer
function test_socketsTcpServer() {
    var socketId;
    var properties = {};
    var buffer = new ArrayBuffer(256);
    // create
    chrome.sockets.tcpServer.create(function (info) {
        socketId = info.socketId;
    });
    chrome.sockets.tcpServer.create(properties, function (info) {
        socketId = info.socketId;
    });
    // update
    chrome.sockets.tcpServer.update(socketId, properties);
    chrome.sockets.tcpServer.update(socketId, properties, function () { });
    // setPaused
    chrome.sockets.tcpServer.setPaused(socketId, true);
    chrome.sockets.tcpServer.setPaused(socketId, true, function () { });
    // listen
    chrome.sockets.tcpServer.listen(socketId, "0.0.0.0", 80, function (result) { });
    chrome.sockets.tcpServer.listen(socketId, "0.0.0.0", 80, 128, function (result) { });
    // disconnect
    chrome.sockets.tcp.disconnect(socketId);
    chrome.sockets.tcp.disconnect(socketId, function () { });
    // close
    chrome.sockets.udp.close(socketId);
    chrome.sockets.udp.close(socketId, function () { });
    // getInfo
    chrome.sockets.udp.getInfo(socketId, function (info) { });
    // getSockets
    chrome.sockets.tcp.getSockets(function (infos) { });
}
function test_socketsTcpServerEvents() {
    chrome.sockets.tcpServer.onAccept.addListener(function (info) { });
    chrome.sockets.tcpServer.onAcceptError.addListener(function (info) { });
}
function testSocketsTcpServerTypes() {
    // SocketProperties
    var properties;
    properties = {};
    properties = {
        persistent: true,
        name: "test"
    };
    // SocketInfo
    var socketInfo;
    socketInfo = {
        socketId: 1,
        persistent: true,
        paused: true
    };
    socketInfo.name = "test";
    socketInfo.localAddress = "192.168.0.2";
    socketInfo.localPort = 8000;
}
function testSystemNetwork() {
    chrome.system.network.getNetworkInterfaces(function (networkInterfaces) {
        var iface;
        for (var i in networkInterfaces) {
            iface = networkInterfaces[i];
        }
    });
}

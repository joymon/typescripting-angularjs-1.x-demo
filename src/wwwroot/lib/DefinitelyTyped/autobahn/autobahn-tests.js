/// <reference path="autobahn.d.ts"/>
var autobahn = require("autobahn");
var MyClass = (function () {
    function MyClass(session) {
        this.add2Count = 0;
        this.session = session;
    }
    MyClass.prototype.add2 = function (args) {
        this.add2Count++;
        return args[0] + args[1];
    };
    MyClass.prototype.onEvent = function (args) {
        console.log("Event:", args[0]);
    };
    return MyClass;
})();
function test_client() {
    var options = { url: 'ws://127.0.0.1:8080/ws', realm: 'realm1' };
    var connection = new autobahn.Connection(options);
    connection.onopen = function (session) {
        var myInstance = new MyClass(session);
        // 1) subscribe to a topic
        session.subscribe('com.myapp.hello', myInstance.onEvent);
        // 2) publish an event
        session.publish('com.myapp.hello', ['Hello, world!']);
        // 3) register a procedure for remoting
        session.register('com.myapp.add2', myInstance.add2);
        // 4) call a remote procedure
        session.call('com.myapp.add2', [2, 3]).then(function (res) {
            console.log("Result:", res);
        });
    };
    connection.open();
}

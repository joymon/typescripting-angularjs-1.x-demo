/// <reference path="backbone.radio.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyCommands = (function (_super) {
    __extends(MyCommands, _super);
    function MyCommands() {
        _super.apply(this, arguments);
    }
    return MyCommands;
})(Backbone.Radio.Commands);
var MyRequests = (function (_super) {
    __extends(MyRequests, _super);
    function MyRequests() {
        _super.apply(this, arguments);
    }
    return MyRequests;
})(Backbone.Radio.Requests);
function onRender() {
}
function onStart(arg1, arg2) {
    return 0;
}
function TestCommands() {
    var myCommands = new MyCommands();
    var r;
    r = myCommands.comply('render', onRender);
    myCommands.command('render');
    myCommands.command('start', 'pelle', 23);
    r = myCommands.complyOnce('start', onStart);
    r = myCommands.complyOnce('start', onStart, myCommands);
    r = myCommands.comply({
        'render': onRender,
        'start': onStart
    });
    r = myCommands.complyOnce({
        'render': onRender,
        'start': onStart
    });
    myCommands.stopComplying('render');
    myCommands.stopComplying(null, onStart);
    myCommands.stopComplying(null, null, myCommands);
}
function TestRequests() {
    var myRequests = new MyRequests();
    var r;
    r = myRequests.reply('render', onRender);
    var result;
    result = myRequests.request('render');
    result = myRequests.request('start', 'pelle', 23);
    r = myRequests.replyOnce('start', onStart);
    r = myRequests.replyOnce('start', onStart, myRequests);
    r = myRequests.reply({
        'render': onRender,
        'start': onStart
    });
    r = myRequests.replyOnce({
        'render': onRender,
        'start': onStart
    });
    myRequests.stopReplying('render');
    myRequests.stopReplying(null, onStart);
    myRequests.stopReplying(null, null, myRequests);
}
function TestGlobalApiAndChannels() {
    var authChannel = Backbone.Radio.channel('auth');
    // Turn on debug mode
    Backbone.Radio.DEBUG = true;
    // This will log a warning to the console if it goes unhandled
    authChannel.command('show:view');
    // Likewise, this will too, helping to prevent memory leaks
    authChannel.stopReplying('startTime');
    var radio = Backbone.Radio.tuneIn('calendar');
    radio.tuneIn('calendar');
    radio = Backbone.Radio.tuneOut('calendar');
    Backbone.Radio.log('channelName', 'eventName', 42, true);
    // Trigger 'some:event' on the settings channel
    Backbone.Radio.trigger('settings', 'some:event');
    authChannel.reset();
    var channelName = authChannel.channelName;
    Backbone.Radio.command('auth', 'show:view');
    Backbone.Radio.comply('auth', 'show', onRender, authChannel);
    Backbone.Radio.reply('auth', 'authenticate', onStart);
    Backbone.Radio.request('auth', 'authenticate', 'pelle', 42);
}

/// <reference path="./angular-idle.d.ts" />
angular.module('app', ['ngIdle'])
    .config(['KeepaliveProvider', 'IdleProvider', 'TitleProvider',
    function (keepaliveProvider, idleProvider, titleProvider) {
        idleProvider.interrupt('mousemove keydown DOMMouseScroll mousewheel mousedown');
        idleProvider.idle(5);
        idleProvider.timeout(5);
        idleProvider.keepalive(true);
        idleProvider.autoResume(true);
        var config = {
            url: "http://google.com",
            method: "GET"
        };
        keepaliveProvider.http(config.url); // should accept string and ng.IRequestConfig
        keepaliveProvider.http(config);
        keepaliveProvider.interval(10);
        titleProvider.enabled(true);
    }])
    .run(['Keepalive', 'Idle', 'Title', function (Keepalive, Idle, Title) {
        Idle.setTimeout(Idle.getTimeout());
        Idle.setIdle(Idle.getIdle());
        Idle.watch();
        Idle.interrupt();
        var expired = Idle.isExpired();
        if (Idle.running() || Idle.idling()) {
            Idle.unwatch();
        }
        Keepalive.start();
        Keepalive.ping();
        Keepalive.stop();
        Keepalive.setInterval(10);
        Title.setEnabled(Title.isEnabled());
        Title.original(Title.original());
        Title.value(Title.value());
        Title.store(false);
        Title.store();
        Title.restore();
        Title.idleMessage(Title.idleMessage());
        Title.timedOutMessage(Title.timedOutMessage());
        Title.setAsIdle(120);
        Title.setAsTimedOut();
    }]);

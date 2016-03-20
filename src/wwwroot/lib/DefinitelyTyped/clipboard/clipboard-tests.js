/// <reference path="clipboard.d.ts" />
var cb1 = new Clipboard('.btn');
var cb2 = new Clipboard(document.getElementById('id'), {
    action: function (elem) { return 'copy'; }
});
var cb3 = new Clipboard(document.querySelectorAll('query'), {
    text: function (elem) { return null; }
});
var cb4 = new Clipboard('.btn', {
    target: function (elem) { return null; }
});
var cb5 = new Clipboard('.btn', {
    action: function (elem) { return 'copy'; },
    target: function (elem) { return null; }
});
cb1.destroy();
cb2.on('success', function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    e.clearSelection();
});
cb2.on('error', function (e) { });

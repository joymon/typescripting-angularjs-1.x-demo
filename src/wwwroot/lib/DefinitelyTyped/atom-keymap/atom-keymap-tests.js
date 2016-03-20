/// <reference path="./atom-keymap.d.ts" />
var atom_keymap_1 = require("atom-keymap");
var manager = new atom_keymap_1.KeymapManager();
manager.add('some/unique/path', {
    '.workspace': {
        'ctrl-x': 'package:do-something',
        'ctrl-y': 'package:do-something-else'
    },
    '.mini.editor': {
        'enter': 'core:confirm'
    }
});
manager.onDidMatchBinding(function (event) {
    console.log(event.binding.command);
});
manager.destroy();

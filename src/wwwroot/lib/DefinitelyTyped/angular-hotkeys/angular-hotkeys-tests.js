/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="angular-hotkeys.d.ts" />
var scope;
var hotkeyProvider;
var hotkeyObj;
hotkeyProvider.add("mod+s", "saves a file", function (event, hotkey) { });
hotkeyProvider.add(["mod+s"], "saves a file", function (event, hotkey) { });
hotkeyProvider.add(hotkeyObj);
hotkeyProvider.bindTo(scope);
hotkeyProvider.del("mod+s");
hotkeyProvider.del(["mod+s"]);
hotkeyProvider.get("mod+s");
hotkeyProvider.get(["mod+s"]);
hotkeyProvider.toggleCheatSheet();
hotkeyProvider.add(hotkeyObj.combo, hotkeyObj.description, hotkeyObj.callback);
hotkeyProvider.bindTo(scope)
    .add(hotkeyObj)
    .add(hotkeyObj)
    .add({
    combo: 'w',
    description: 'blah blah',
    callback: function () { }
})
    .add({
    combo: ['w', 'mod+w'],
    description: 'blah blah',
    callback: function () { }
});

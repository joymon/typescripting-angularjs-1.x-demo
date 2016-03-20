/// <reference path="angular-ui-tree.d.ts" />
var treeNode = {
    id: 0,
    nodes: [],
    title: "test"
};
var treeNode2 = {
    id: "0",
    nodes: [treeNode],
    title: "test2"
};
// fake jquery node here so that we can pull a pretend
// angular scope element out of it
var dummyJQueryNode;
var fakeScope = dummyJQueryNode.scope();
fakeScope.node = treeNode;
var treeNodeScope = fakeScope;
fakeScope.isParent = function (nodeScope) {
    return true;
};
var parentTreeNodeScope = fakeScope;
var eventSourceInfo = {
    cloneModel: {},
    nodeScope: treeNodeScope,
    index: 0,
    nodesScope: parentTreeNodeScope
};
var position = {
    dirAx: 0,
    dirX: 0,
    dirY: 0,
    distAxX: 0,
    distAxY: 0,
    distX: 0,
    distY: 0,
    lastDirX: 0,
    lastDirY: 0,
    lastX: 0,
    lastY: 0,
    moving: true,
    nowX: 0,
    nowY: 0,
    offsetX: 0,
    offsetY: 0,
    startX: 0,
    startY: 0
};
var eventInfo = {
    source: eventSourceInfo,
    dest: {
        index: 0,
        nodesScope: parentTreeNodeScope
    },
    elements: {},
    pos: position
};
var acceptCallback = function (source, destination, destinationIndex) {
    return false;
};
var droppedCallback = function (eventInfo) {
    return;
};
var callbacks = {
    accept: acceptCallback,
    dragStart: droppedCallback,
    dropped: droppedCallback
};

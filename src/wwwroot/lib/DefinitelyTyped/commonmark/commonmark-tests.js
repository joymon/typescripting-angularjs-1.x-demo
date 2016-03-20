/// <reference path="commonmark.d.ts" />
var commonmark = require('commonmark');
function logNode(node) {
    console.log(node.destination, node.firstChild, node.info, node.isContainer, node.lastChild, node.level, node.listDelimiter, node.listStart, node.listTight, node.listType, node.literal, node.next, node.onEnter, node.onExit, node.parent, node.prev, node.sourcepos, node.title, node.type);
}
var parser = new commonmark.Parser({ smart: true, time: true });
var node = parser.parse('# a piece of _markdown_');
var w = node.walker();
var step = w.next();
if (step.entering) {
    logNode(step.node);
}
var xmlRenderer = new commonmark.XmlRenderer({ sourcepos: true, time: true });
var xml = xmlRenderer.render(node);
console.log(xml);
var htmlRenderer = new commonmark.HtmlRenderer({ safe: true, smart: true, sourcepos: true, time: true });
var html = htmlRenderer.render(node);
console.log(html);

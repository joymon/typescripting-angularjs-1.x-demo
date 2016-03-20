/// <reference path="../estree/estree.d.ts" />
/// <reference path="acorn.d.ts" />
var acorn = require('acorn');
var token;
var tokens;
var comment;
var comments;
var program;
var any;
var string;
// acorn
string = acorn.version;
program = acorn.parse('code');
program = acorn.parse('code', { ranges: true, onToken: tokens, onComment: comments });
program = acorn.parse('code', {
    ranges: true,
    onToken: function (token) { return tokens.push(token); },
    onComment: function (isBlock, text, start, end) { }
});
// Token
token = tokens[0];
string = token.type.label;
any = token.value;
// Comment
string = comment.value;

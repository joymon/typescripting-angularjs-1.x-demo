/// <reference path="../node/node.d.ts" />
/// <reference path="cookies.d.ts" />
var Cookies = require('cookies');
var http = require('http');
var server = http.createServer(function (req, res) {
    var cookies = new Cookies(req, res);
    var unsigned, signed, tampered;
    if (req.url == "/set") {
        cookies
            .set("unsigned", "foo", { httpOnly: false })
            .set("signed", "bar", { signed: true })
            .set("tampered", "baz")
            .set("tampered.sig", "bogus");
        res.writeHead(302, { "Location": "/" });
        return res.end("Now let's check.");
    }
    unsigned = cookies.get("unsigned");
    signed = cookies.get("signed", { signed: true });
    tampered = cookies.get("tampered", { signed: true });
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("unsigned expected: foo\n\n" +
        "unsigned actual: " + unsigned + "\n\n" +
        "signed expected: bar\n\n" +
        "signed actual: " + signed + "\n\n" +
        "tampered expected: undefined\n\n" +
        "tampered: " + tampered + "\n\n");
});

/// <reference path="cli-color.d.ts" />
/// <reference path="../node/node.d.ts" />
var clc = require('cli-color');
var ansiTrim = require('cli-color/trim');
var setupThrobber = require('cli-color/throbber');
var text;
var color;
var x;
var y;
var n;
var period;
// Test cli-color
text = clc('foo');
text = clc('foo', 42, { toString: function () { return 'bar'; } });
text = clc.bold.italic.underline.blink.inverse.strike(text);
text = clc.black.red.green.yellow.blue.magenta.cyan.white(text);
text = clc.bgBlack.bgRed.bgGreen.bgYellow.bgBlack.bgMagenta.bgCyan.bgWhite(text);
text = clc.blackBright.redBright.greenBright.yellowBright.blueBright.magentaBright.cyanBright.whiteBright(text);
text = clc.bgBlackBright.bgRedBright.bgGreenBright.bgYellowBright.bgBlueBright.bgMagentaBright.bgCyanBright.bgWhiteBright(text);
text = clc.xterm(color).bgXterm(color)(text);
text = clc.bold.red.bgGreen.yellowBright.bgBlueBright.xterm(color)(text, text, text);
text = clc.move(x, y);
text = clc.moveTo(x, y);
text = clc.bol();
text = clc.bol(n);
text = clc.bol(n, true);
text = clc.up(n);
text = clc.down(n);
text = clc.left(n);
text = clc.right(n);
text = clc.beep;
text = clc.reset;
var width = clc.width;
var height = clc.height;
var support = clc.xtermSupported;
// Test cli-color/trim
text = ansiTrim(clc.red(text));
// Test cli-color/throbber
var throbber;
throbber = setupThrobber(process.stdout.write.bind(process.stdout), period);
throbber = setupThrobber(process.stdout.write.bind(process.stdout), period, clc.red);
throbber.start();
throbber.stop();
throbber.restart();

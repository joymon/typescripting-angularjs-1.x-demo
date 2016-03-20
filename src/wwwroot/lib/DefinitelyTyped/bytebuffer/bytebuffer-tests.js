/// <reference path="bytebuffer.d.ts" />
var bb = new ByteBuffer()
    .writeIString("Hello world!")
    .flip();
console.log(bb.readIString() + " from bytebuffer.js");

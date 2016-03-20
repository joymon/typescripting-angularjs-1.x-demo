/// <reference path='bip21.d.ts' />
var decoded = bip21.decode('bitcoin:1BgGZ9tcN4rm9KBzDn7KprQz87SZ26SAMH?amount=20.3&label=Foobar');
var encoded = bip21.encode('1BgGZ9tcN4rm9KBzDn7KprQz87SZ26SAMH', {
    amount: 20.3,
    label: 'Foobar'
});

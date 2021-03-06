/// <reference path="angular-environment.d.ts" />
var envServiceProvider;
var envService;
envServiceProvider.config({
    domains: {
        development: ['localhost', 'dev.local'],
        production: ['acme.com', 'acme.net', 'acme.org']
    },
    vars: {
        development: {
            apiUrl: '//localhost/api',
            staticUrl: '//localhost/static'
        },
        production: {
            apiUrl: '//api.acme.com/v2',
            staticUrl: '//static.acme.com'
        }
    }
});
envServiceProvider.check();
envService.get();
envService.set('production');
var isProd = envService.is('production');
var val = envService.read('apiUrl');

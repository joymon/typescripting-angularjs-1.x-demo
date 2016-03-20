/// <reference path="auth0-angular.d.ts" />
var authProvider;
// Initialize Auth0
authProvider.init({
    clientID: 'myClientID',
    domain: 'mydomain.auth0.com'
});
// Listen for authenticated event
authProvider.on('authenticated', function ($location) {
});
var authService;
// Sign in to Auth0
authService.signin({}, function (profile, idToken, acccessToken, state, refreshToken) {
}, function (err) {
});
// Sign out of Auth0
authService.signout();

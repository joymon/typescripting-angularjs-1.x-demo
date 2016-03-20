/// <reference path="aspnet-identity-pw.d.ts" />
var passwordHasher = require('aspnet-identity-pw');
function usageSync() {
    var hashedPassword = passwordHasher.hashPassword('SomePassword');
    var isValid = passwordHasher.validatePassword('SomePassword', hashedPassword);
}
function usageAsync() {
    var hashedPassword = null;
    var isValid = null;
    passwordHasher.hashPassword('SomePassword', function (err, result) {
        hashedPassword = result;
    });
    passwordHasher.validatePassword('SomePassword', hashedPassword, function (err, result) {
        isValid = result;
    });
}

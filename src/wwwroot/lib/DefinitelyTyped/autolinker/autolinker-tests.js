///<reference path="./autolinker.d.ts"/>
var AutolinkerCJS = require('autolinker');
(function () {
    var linkedText1 = Autolinker.link("Check out google.com");
    new Autolinker();
    var autolinker1 = new Autolinker({ className: "myLink" });
    var textToAutoLink = 'text';
    var linkedText2 = autolinker1.link(textToAutoLink);
    var linkedText3 = Autolinker.link("Check out google.com", { className: "myLink" });
    var linkedText4 = Autolinker.link("Check out google.com", { newWindow: false });
    var linkedText5 = Autolinker.link("http://www.yahoo.com/some/long/path/to/a/file", { truncate: 25, newWindow: false });
    var myTextEl = document.getElementById('text');
    myTextEl.innerHTML = Autolinker.link(myTextEl.innerHTML);
    var autolinker2 = new Autolinker({ newWindow: false, truncate: 25 });
    autolinker2.link("Check out http://www.yahoo.com/some/long/path/to/a/file");
    // Produces: "Check out <a href="http://www.yahoo.com/some/long/path/to/a/file">yahoo.com/some/long/pat..</a>"
    autolinker2.link("Go to www.google.com");
    // Produces: "Go to <a href="http://www.google.com">google.com</a>"
    var input = "..."; // string with URLs, Email Addresses, Twitter Handles, and Hashtags
    var linkedText6 = Autolinker.link(input, {
        replaceFn: function (autolinker, match) {
            console.log("href = ", match.getAnchorHref());
            console.log("text = ", match.getAnchorText());
            switch (match.getType()) {
                case 'url':
                    console.log("url: ", match.getUrl());
                    if (match.getUrl().indexOf('mysite.com') === -1) {
                        var tag = autolinker.getTagBuilder().build(match); // returns an `Autolinker.HtmlTag` instance, which provides mutator methods for easy changes
                        tag.setAttr('rel', 'nofollow');
                        tag.addClass('external-link');
                        return tag;
                    }
                    else {
                        return true; // let Autolinker perform its normal anchor tag replacement
                    }
                case 'email':
                    var email = match.getEmail();
                    console.log("email: ", email);
                    if (email === "my@own.address") {
                        return false; // don't auto-link this particular email address; leave as-is
                    }
                    else {
                        return; // no return value will have Autolinker perform its normal anchor tag replacement (same as returning `true`)
                    }
                case 'phone':
                    var phoneNumber = match.getPhoneNumber();
                    console.log(phoneNumber);
                    return '<a href="http://newplace.to.link.phone.numbers.to/">' + phoneNumber + '</a>';
                case 'twitter':
                    var twitterHandle = match.getTwitterHandle();
                    console.log(twitterHandle);
                    return '<a href="http://newplace.to.link.twitter.handles.to/">' + twitterHandle + '</a>';
                case 'hashtag':
                    var hashtag = match.getHashtag();
                    console.log(hashtag);
                    return '<a href="http://newplace.to.link.hashtag.handles.to/">' + hashtag + '</a>';
            }
        }
    });
});
(function () {
    var linkedText1 = AutolinkerCJS.link("Check out google.com");
    new AutolinkerCJS();
    var autolinker1 = new AutolinkerCJS({ className: "myLink" });
    var textToAutoLink = 'text';
    var linkedText2 = autolinker1.link(textToAutoLink);
    var linkedText3 = AutolinkerCJS.link("Check out google.com", { className: "myLink" });
    var linkedText4 = AutolinkerCJS.link("Check out google.com", { newWindow: false });
    var linkedText5 = AutolinkerCJS.link("http://www.yahoo.com/some/long/path/to/a/file", { truncate: 25, newWindow: false });
    var myTextEl = document.getElementById('text');
    myTextEl.innerHTML = AutolinkerCJS.link(myTextEl.innerHTML);
    var autolinker2 = new AutolinkerCJS({ newWindow: false, truncate: 25 });
    autolinker2.link("Check out http://www.yahoo.com/some/long/path/to/a/file");
    // Produces: "Check out <a href="http://www.yahoo.com/some/long/path/to/a/file">yahoo.com/some/long/pat..</a>"
    autolinker2.link("Go to www.google.com");
    // Produces: "Go to <a href="http://www.google.com">google.com</a>"
    var input = "..."; // string with URLs, Email Addresses, Twitter Handles, and Hashtags
    var linkedText6 = AutolinkerCJS.link(input, {
        replaceFn: function (autolinker, match) {
            console.log("href = ", match.getAnchorHref());
            console.log("text = ", match.getAnchorText());
            switch (match.getType()) {
                case 'url':
                    console.log("url: ", match.getUrl());
                    if (match.getUrl().indexOf('mysite.com') === -1) {
                        var tag = autolinker.getTagBuilder().build(match); // returns an `AutolinkerCJS.HtmlTag` instance, which provides mutator methods for easy changes
                        tag.setAttr('rel', 'nofollow');
                        tag.addClass('external-link');
                        return tag;
                    }
                    else {
                        return true; // let AutolinkerCJS perform its normal anchor tag replacement
                    }
                case 'email':
                    var email = match.getEmail();
                    console.log("email: ", email);
                    if (email === "my@own.address") {
                        return false; // don't auto-link this particular email address; leave as-is
                    }
                    else {
                        return; // no return value will have AutolinkerCJS perform its normal anchor tag replacement (same as returning `true`)
                    }
                case 'phone':
                    var phoneNumber = match.getPhoneNumber();
                    console.log(phoneNumber);
                    return '<a href="http://newplace.to.link.phone.numbers.to/">' + phoneNumber + '</a>';
                case 'twitter':
                    var twitterHandle = match.getTwitterHandle();
                    console.log(twitterHandle);
                    return '<a href="http://newplace.to.link.twitter.handles.to/">' + twitterHandle + '</a>';
                case 'hashtag':
                    var hashtag = match.getHashtag();
                    console.log(hashtag);
                    return '<a href="http://newplace.to.link.hashtag.handles.to/">' + hashtag + '</a>';
            }
        }
    });
});

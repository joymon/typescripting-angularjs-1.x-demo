/// <reference path="HubSpot-pace.d.ts" />
pace.start({
    document: false
});
pace.start();
pace.restart();
pace.stop();
var paceOptions;
paceOptions = {
    // Disable the 'elements' source
    elements: false,
    // Only show the progress on regular and ajax-y page navigation,
    // not every request
    restartOnRequestAfter: false
};
paceOptions = {
    ajax: false,
    document: false,
    eventLag: false,
    elements: {
        selectors: ['.my-page']
    }
};
paceOptions = {
    elements: {
        selectors: ['.timeline,.timeline-error', '.user-profile,.profile-error']
    }
};
paceOptions = {
    restartOnPushState: false
};
paceOptions = {
    restartOnRequestAfter: false
};
pace.options = {
    restartOnRequestAfter: false
};
pace.ignore(function () {
});
pace.track(function () {
});
pace.options = {
    ajax: {
        ignoreURLs: ['some-substring', /some-regexp/]
    }
};

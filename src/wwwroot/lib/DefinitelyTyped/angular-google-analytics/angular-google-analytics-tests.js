/// <reference path="angular-google-analytics.d.ts" />
/// <reference path="angular-google-analytics-service.d.ts" />
function ConfigurationMethodChaining(AnalyticsProvider) {
    AnalyticsProvider
        .logAllCalls(true)
        .startOffline(true)
        .useECommerce(true, true);
}
function EnableECommerce(AnalyticsProvider) {
    AnalyticsProvider.useECommerce(true, false);
    AnalyticsProvider.useECommerce(true, true);
    AnalyticsProvider.setCurrency("CDN");
}
function SetGoogleAnalyticsAccounts(AnalyticsProvider) {
    AnalyticsProvider.setAccount("UA-XXXXX-xx");
    AnalyticsProvider.setAccount([
        { tracker: "UA-12345-12", name: "tracker1" },
        { tracker: "UA-12345-34", name: "tracker2" }
    ]);
}
function UseClassicAnalytics(AnalyticsProvider) {
    AnalyticsProvider.useAnalytics(false);
}
function UseDisplayFeatures(AnalyticsProvider) {
    AnalyticsProvider.useDisplayFeatures(true);
}
function UseEnhancedLinkAttribution(AnalyticsProvider) {
    AnalyticsProvider.useEnhancedLinkAttribution(true);
}
function UseCrossDomainLinking(AnalyticsProvider) {
    AnalyticsProvider.useCrossDomainLinker(true);
    AnalyticsProvider.setCrossLinkDomains(["domain-1.com", "domain-2.com"]);
}
function SetCookieConfiguration(AnalyticsProvider) {
    AnalyticsProvider.setCookieConfig({
        cookieDomain: "foo.example.com",
        cookieName: "myNewName",
        cookieExpires: 20000
    });
}
function SetRouteTrackingBehaviors(AnalyticsProvider) {
    AnalyticsProvider.trackPages(true);
    AnalyticsProvider.trackUrlParams(true);
    AnalyticsProvider.ignoreFirstPageLoad(true);
    AnalyticsProvider.trackPrefix("my-application");
    AnalyticsProvider.setPageEvent("$stateChangeSuccess");
    AnalyticsProvider.setRemoveRegExp(/\/\d+?$/);
}
function RetrieveCurrentURL(Analytics) {
    var test = Analytics.getUrl();
}
function ManualScriptTagInjection(Analytics) {
    Analytics.createScriptTag();
    Analytics.createAnalyticsScriptTag();
}
function SetCustomDimensions(Analytics) {
    Analytics.set('&uid', 1234);
    Analytics.set('dimension1', 'Paid');
    Analytics.set('dimension2', 'Paid', 'accountName');
}
function PageTracking(Analytics) {
    Analytics.trackPage('/video/detail/XXX');
    Analytics.trackPage('/video/detail/XXX', 'Video XXX');
    Analytics.trackPage('/video/detail/XXX', 'Video XXX', { dimension15: 'My Custom Dimension', metric18: 8000 });
}
function EventTracking(Analytics) {
    Analytics.trackEvent('video', 'play', 'django.mp4');
    Analytics.trackEvent('video', 'play', 'django.mp4', 4);
    Analytics.trackEvent('video', 'play', 'django.mp4', 4, true);
    Analytics.trackEvent('video', 'play', 'django.mp4', 4, true, { dimension15: 'My Custom Dimension', metric18: 8000 });
}
function ExceptionTracking(Analytics) {
    Analytics.trackException('Function "foo" is undefined on object "bar"', true);
}
function OfflineMode(Analytics) {
    Analytics.offline(true);
    Analytics.offline(false);
    Analytics.offlineQueue;
}

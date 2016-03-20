///<reference path='applicationinsights.d.ts' />
var appInsights = require("applicationinsights");
// basic use
appInsights.setup("<instrumentation_key>").start();
// basic use with auto-collection configuration
appInsights.setup("<instrumentation_key>")
    .setAutoCollectRequests(false)
    .setAutoCollectPerformance(false)
    .setAutoCollectExceptions(false)
    .enableVerboseLogging()
    .start();
appInsights.client.trackEvent("custom event", { customProperty: "custom property value" });
appInsights.client.trackException(new Error("handled exceptions can be logged with this method"));
appInsights.client.trackMetric("custom metric", 3);
appInsights.client.trackTrace("trace message");
appInsights.client.trackDependency("dependency name", "commandName", 500, true);
// assign common properties to all telemetry
appInsights.client.commonProperties = {
    environment: "dev"
};
// send any pending data and log the response
appInsights.client.sendPendingData(function (response) {
    console.log(response);
});

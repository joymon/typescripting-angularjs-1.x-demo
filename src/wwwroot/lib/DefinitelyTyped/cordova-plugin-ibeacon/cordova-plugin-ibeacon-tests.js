/// <reference path="../cordova/cordova.d.ts" />
/// <reference path="./cordova-plugin-ibeacon.d.ts" />
function registerDelegates() {
    cordova.plugins.locationManager.enableDebugLogs();
    cordova.plugins.locationManager.delegate.didRangeBeaconsInRegion = function (pluginResult) { return didRangeBeaconsInRegion(pluginResult); };
    cordova.plugins.locationManager.delegate.didEnterRegion = function (pluginResult) { return didEnterRegion(pluginResult); };
    cordova.plugins.locationManager.delegate.didExitRegion = function (pluginResult) { return didExitRegion(pluginResult); };
    cordova.plugins.locationManager.delegate.didDetermineStateForRegion = function (pluginResult) { return didDetermineStateForRegion(pluginResult); };
    cordova.plugins.locationManager.delegate.didChangeAuthorizationStatus = function (authorizationStatus) { return didChangeAuthorizationStatus(authorizationStatus); };
    cordova.plugins.locationManager.delegate.didStartMonitoringForRegion = function (pluginResult) { return didStartMonitoringForRegion(pluginResult); };
    cordova.plugins.locationManager.delegate.monitoringDidFailForRegionWithError = function (pluginResult) { return monitoringDidFailForRegionWithError(pluginResult); };
    cordova.plugins.locationManager.onDomDelegateReady();
}
function didRangeBeaconsInRegion(pluginResult) {
    for (var _i = 0, _a = pluginResult.beacons; _i < _a.length; _i++) {
        var beacon = _a[_i];
        console.log(beacon.uuid, beacon.major, beacon.minor, beacon.accuracy, beacon.proximity, beacon.rssi, beacon.tx);
    }
}
function didEnterRegion(pluginResult) {
    var region = new cordova.plugins.locationManager.BeaconRegion("identifier", "uuid", 1, 2);
    ;
    cordova.plugins.locationManager.startRangingBeaconsInRegion(this.createBeaconRegionFromPluginResult(pluginResult))
        .then(function () {
        console.log("startRangingBeaconsInRegion succeeded");
    })
        .catch(function (reason) {
        console.error("startRangingBeaconsInRegion failed: " + reason);
    });
}
function didExitRegion(pluginResult) {
    var region;
    cordova.plugins.locationManager.stopRangingBeaconsInRegion(region)
        .then(function () {
        console.log("stopRangingBeaconsInRegion succeeded");
    })
        .catch(function (reason) {
        console.error("stopRangingBeaconsInRegion failed: " + reason);
    });
}
function didDetermineStateForRegion(pluginResult) {
    if (pluginResult.state === "CLRegionStateInside") {
        console.log(pluginResult.region.identifier);
    }
}
function didChangeAuthorizationStatus(authorizationStatus) {
    console.log(authorizationStatus);
}
function didStartMonitoringForRegion(pluginResult) {
    console.log(pluginResult.region.identifier);
}
function monitoringDidFailForRegionWithError(pluginResult) {
    console.log(pluginResult.region.identifier);
}

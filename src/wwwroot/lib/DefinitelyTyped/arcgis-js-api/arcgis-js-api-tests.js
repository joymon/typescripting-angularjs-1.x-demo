/// <reference path="arcgis-js-api.d.ts" />
var Map = require("esri/map");
var Point = require("esri/geometry/Point");
var MapController = (function () {
    function MapController(mapDiv) {
        this.mapDiv = mapDiv;
    }
    MapController.prototype.start = function () {
        var point = new Point(-122.45, 37.75); // long, lat
        var mapOptions = {};
        mapOptions.basemap = "topo";
        mapOptions.center = point;
        mapOptions.zoom = 13;
        this.map = new Map(this.mapDiv, mapOptions);
    };
    return MapController;
})();
module.exports = MapController;

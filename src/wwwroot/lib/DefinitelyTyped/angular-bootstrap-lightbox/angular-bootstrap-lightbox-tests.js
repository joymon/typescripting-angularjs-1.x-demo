///<reference path='angular-bootstrap-lightbox.d.ts'/>
var imageList = [];
imageList.push({
    url: 'url1',
    width: 100,
    height: 100
});
imageList.push({
    url: 'url2',
    width: 100,
    height: 100,
    thumbUrl: 'thumbUrl',
    caption: 'caption'
});
var lightBox = {};
lightBox.openModal(imageList, 0);
var provider = {};
provider.templateUrl = 'templateUrl';
provider.calculateImageDimensionLimits = function (dimensions) {
    return {
        minWidth: 100,
        minHeight: 100,
        maxWidth: dimensions.windowWidth - 102,
        maxHeight: dimensions.windowHeight - 136
    };
};
provider.calculateModalDimensions = function (dimensions) {
    return {
        width: Math.max(500, dimensions.imageDisplayWidth + 42),
        height: Math.max(500, dimensions.imageDisplayHeight + 76)
    };
};

angular.module("root", ['ngMap'])
    .controller("IndexController", ControllerFunction)
    .provider("indexService", IndexServiceProvider)
    .service("GetLocation", GetLocation)
    .config(config);

ControllerFunction.$inject = ['indexService', 'GetLocation'];
function ControllerFunction(indexService,GetLocation) {
    var ctrl = this;
    ctrl.menuItem = indexService.MenuItem;
    ctrl.BrandText = indexService.BrandName;
    ctrl.LogoUrl = indexService.LogoName;

    //service to retrieve the location
    var promise = GetLocation.GetCurrentLocation();

    promise.then(function (result) {
        ctrl.lat = result.lat;
        ctrl.lng = result.lng;
       return GetLocation.GetAddress(result.lat, result.lng);
    }).then(function (result1) {
        console.log(result1)
        var address = result1.data.results[2].formatted_address;
        ctrl.address = address;
    }).catch(function () {
        console.log("Something went wrong!! Unable to find current location!!")
    });

};

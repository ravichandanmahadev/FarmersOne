angular.module("root", ['ngMap'])
    .controller("IndexController", ControllerFunction)
    .provider("indexService", IndexServiceProvider)
    .config(config);

ControllerFunction.$inject = ['indexService', '$http'];
function ControllerFunction(indexService, $http) {
    var ctrl = this;
    ctrl.menuItem = indexService.MenuItem;
    ctrl.BrandText = indexService.BrandName;
    ctrl.LogoUrl = indexService.LogoName;


    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(onPositionUpdate);

    function onPositionUpdate(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=true";
        $http.get(url)
            .then(function (result) {
                var address = result.data.results[2].formatted_address;
                ctrl.address = address;
            });
        ctrl.lat = lat;
        ctrl.lng = lng;
    }

};





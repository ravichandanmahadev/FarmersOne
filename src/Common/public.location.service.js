(function(){
var module = angular.module("common");
module.constant("API_PATH","https://maps.googleapis.com/maps/api/geocode/json?latlng=");
module.service("locationService", locationServicefunction);
'use strict';
locationServicefunction.$inject = ['$q', '$http','API_PATH'];
function locationServicefunction($q, $http,API_PATH) {
    var service = this;

    service.GetCurrentLocation = function () {
        var defer = $q.defer();
        var message = { lat: 0, lng: 0 };
        navigator.geolocation.getCurrentPosition(function (position) {
                 message.lat = position.coords.latitude;
                 message.lng = position.coords.longitude;
                 defer.resolve(message);
        });
        return defer.promise;
    };

    service.GetAddress = function (lat, lng) {
        var url = API_PATH+ lat + "," + lng + "&sensor=true";
        var response = $http.get(url);
        return response;
    };

}
})();

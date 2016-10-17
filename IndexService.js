

function IndexServiceProvider() {
    var provider = this;
    provider.defaults = {
      Menu: [
        { item: "Home", route:"Home" },
        { item: "The Farmers" , route:"Home" },
        { item: "The Harvests" , route:"Home" },
        {item:"Register",  route:"Register" },
      ],
      BrandName: "Farmers One",
      LogoUrl : "/Content/Images/Logo.png"
     };
    provider.$get = function () {
        var service = new IndexService(provider.defaults);
        return service;
    }
    return provider;
}

function IndexService(configObj) {
    'use strict';
    var service = this;
    service.MenuItem = configObj.Menu;
    service.BrandName = configObj.BrandName;
    service.LogoName = configObj.LogoUrl;
}

GetLocation.$inject = ['$q', '$http'];
function GetLocation($q, $http) {
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
        var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=true";
        var response = $http.get(url);
        return response;
    };

}

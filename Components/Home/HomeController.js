(function(){
  angular.module("Home",[]);

  'use strict';
  var app = angular.module('Home');
  app.controller("HomeController", HomeController);
  app.service("GetLocation", GetLocation);

  app.component("homeComponent", {
    templateUrl : "Components/Home/Home.html",

  });

HomeController.$inject = ['GetLocation'];
function HomeController(GetLocation)
{
  var ctrl = this;
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
}
})();

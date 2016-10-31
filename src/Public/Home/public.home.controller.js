(function(){
'use strict';

var module = angular.module("Public");
module.controller("HomeController", HomeControllerfunction);

HomeControllerfunction.$inject = ['locationService'];
function HomeControllerfunction(locationService)
{
  var ctrl = this;
  var promise = locationService.GetCurrentLocation();

  promise.then(function (result) {
      ctrl.lat = result.lat;
      ctrl.lng = result.lng;
     return locationService.GetAddress(result.lat, result.lng);
  }).then(function (result1) {
      // console.log(result1)
      var address = result1.data.results[2].formatted_address;
      ctrl.address = address;
  }).catch(function () {
      console.log("Something went wrong!! Unable to find current location!!")
  });



}

})();

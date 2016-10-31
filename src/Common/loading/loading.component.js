(function(){
'use strict';
var module = angular.module("common");
module.component("loading", {
  template: "<img src='../images/processing.gif' alt='loading...' ng-if='$ctrl.show'>",
  controller:loadingcontrollerfunction
});
loadingcontrollerfunction.$inject = ['$rootScope'];
function loadingcontrollerfunction($rootScope)
{
  var $ctrl = this;
  var listner;

  $ctrl.$onInit = function (){
    listner = $rootScope.$on("spinner:activate", onSpinnerActivate);
  };

  $ctrl.onDestroy = function(){
    listner();
  };

 function onSpinnerActivate(event , data)
 {
  //  console.log(data);
   $ctrl.show= data.on;
 }

}
})();

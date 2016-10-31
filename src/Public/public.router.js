(function(){
'use strict';
var module = angular.module("Public");

module.config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routeConfig($stateProvider,$urlRouterProvider)
{
  $stateProvider.state("public", {
    abstract: true,
    templateUrl:"src/Public/public.html"
  })
  .state("public.Home",{
    url:"/",
    templateUrl:"src/Public/Home/public.Home.html",
    controller:"HomeController as HomeCtrl"
  })
  .state("public.register",{
    url:"/Register",
    templateUrl:"src/Public/Registration/public.register.html",
    //controller:"RegisterController as regctrl"
  });


}

})();

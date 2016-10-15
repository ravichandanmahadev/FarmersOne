var app = angular.module("root", ['ngMap','Header', 'Home', 'ui.router']);
app.controller("IndexController", ControllerFunction);
app.provider("indexService", IndexServiceProvider).config(Routeconfig);
// app.config(RouteConfig);


ControllerFunction.$inject = ['indexService'];
function ControllerFunction(indexService) {
    var ctrl = this;
    ctrl.menuItem = indexService.MenuItem;
    ctrl.BrandText = indexService.BrandName;
    ctrl.LogoUrl = indexService.LogoName;
};

Routeconfig.$inject = ['$stateProvider', '$urlRouterProvider']
function Routeconfig($stateProvider,$urlRouterProvider) {
     $urlRouterProvider.otherwise("/Home");

     $stateProvider.state("Home", {
       url:"/Home",
       templateUrl:"Components/Home/Home.html"
     });

     $stateProvider.state("Register", {
       url:"/Register",
       templateUrl:"Components/Register/Register.html"
     });
}

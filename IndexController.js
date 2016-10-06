var app = angular.module("root", ['ngMap','Header', 'Home', 'ui.router']);
app.controller("IndexController", ControllerFunction);
app.provider("indexService", IndexServiceProvider).config(config);
// app.config(RouteConfig);


ControllerFunction.$inject = ['indexService'];
function ControllerFunction(indexService) {
    var ctrl = this;
    ctrl.menuItem = indexService.MenuItem;
    ctrl.BrandText = indexService.BrandName;
    ctrl.LogoUrl = indexService.LogoName;
};

config.$inject = ['$stateProvider', '$urlRouterProvider']
function config($stateProvider,$urlRouterProvider) {
     $urlRouterProvider.otherwise("/Home");

     $stateProvider.state("Home", {
       url:"/Home",
       templateUrl:"Components/Home/Home.html"
     });
}

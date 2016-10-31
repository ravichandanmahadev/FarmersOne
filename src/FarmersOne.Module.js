var app = angular.module("Main", ['ui.router','Public','common']);

app.config(Routeconfig);

Routeconfig.$inject = ['$urlRouterProvider']
function Routeconfig($urlRouterProvider) {
     $urlRouterProvider.otherwise("/");
}

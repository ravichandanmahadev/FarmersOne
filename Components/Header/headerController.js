var app = ﻿angular.module("Header", []);
app.controller("HeaderController", HeaderController);
app.directive("headerPanel", headerPanel);

function headerPanel(){
  var ddo = {
    restrict:"E",
    templateUrl : 'Components/Header/Header.html',
    controller : 'HeaderController as list',
    bindToController : true
  };
  return ddo;
}
HeaderController.$inject = ['indexService'];
function HeaderController(indexService){
  var ctrl = this;
  ctrl.menuList =   indexService.MenuItem;
}

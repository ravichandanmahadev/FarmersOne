var mod = angular.module("Main");

mod.controller("MainController", mainControllerfunction);

function mainControllerfunction()
{
  var ctrl = this;
  ctrl.menuList =  [
                          { item: "Home", route:"public.Home", className : "glyphicon glyphicon-home" },
                          { item: "The Farmers" , route:"public.register" , className:"glyphicon glyphicon-tree-deciduous"},
                          {item:"Register",  route:"public.register" , className:"glyphicon glyphicon-registration-mark"},
                   ];
  ctrl.BrandText = "Farmers One";
  ctrl.LogoUrl = "";
}

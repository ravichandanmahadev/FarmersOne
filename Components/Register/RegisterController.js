(function(){
'use strict';
angular.module("Register", []);

var mod = angular.module("Register");
mod.controller("RegisterController", RegisterControllerFunction);

mod.component("RegisterComponent",{
  templateUrl:"Components/Register/Register.html",
  controller : "RegisterController as reg"
})


function RegisterControllerFunction(){
  var reg = this;
  reg.user.userName ="";
  reg.user.eMail = "";
  reg.user.address.addrline1 = "";
  reg.user.address.addrline2="";
  reg.user.address.city="";
  reg.user.address.zipCode= ""

}

})();

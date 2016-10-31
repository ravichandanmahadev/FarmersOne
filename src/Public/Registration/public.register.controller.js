(function(){
'use strict';

var module = angular.module("ic");
module.controller("RegisterController", RegisterControllerFunction);

RegisterControllerFunction$inject = [];
function RegisterControllerFunction(){
  var reg = this;
  reg.user.userName ="ravi";
  reg.user.eMail = "";
  reg.user.address.addrline1 = "";
  reg.user.address.addrline2="";
  reg.user.address.city="";
  reg.user.address.zipCode= "";
  // reg.submit= false;
  reg.submit = function(){
  // reg.submit = true;
  };
}


})();

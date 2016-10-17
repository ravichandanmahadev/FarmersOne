(function(){
'use strict';
angular.module("Register", []);
var mod = angular.module("Register");
mod.controller("RegisterController", RegisterControllerFunction);




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

  console.log(reg);

}

})();

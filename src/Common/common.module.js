(function(){
  'use strict';
  angular.module("common",[]).config(configfunction);

  configfunction.$inject = ["$httpProvider"]
  function configfunction($httpProvider)
  {
    $httpProvider.interceptors.push("lodingInterceptor");
  }
})();

(function(){
  'use strict';
  var module = angular.module("common");
  module.factory('lodingInterceptor',loadinginterceptorfunction);
  loadinginterceptorfunction.$inject = ["$rootScope","$q"]
  function loadinginterceptorfunction($rootScope,$q)
  {
    var loadingcount = 0 ;
    var loadingevent ="spinner:activate";

    return {
      request :function(config){
        // console.log(config);
          if(++loadingcount===1)
          {
             $rootScope.$broadcast(loadingevent,{on:true});
          }
          return config;
      },

      response:function(response){
        if(--loadingcount===0){
          $rootScope.$broadcast(loadingevent,{on:false});
        }
        return response;
      },
      responseError:function(response){
        if(--loadingcount===0){
          $rootScope.$broadcast(loadingevent,{on:false});
        }
        return $q.reject(response);
      }
    };
  }
})();

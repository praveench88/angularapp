/**
 * @ngdoc function
 * @name mobifixApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the mobifixApp
 */
(function (angular, lodash) {
  'use strict';

  function homeControllerConstructor($scope, $http, httpDataService, $state, $rootScope, commonModal) {

    var vm = this;
    vm.$state = $state;

    $("#contactSuccess").hide();
    $("#contactFailure").hide();

    function contactus() {


      vm.contactformfields = {
        firstName : vm.firstName,
        last_name : vm.last_name,
        phone : vm.phone,
        email : vm.email,
        feedback : vm.feedback
    }

    httpDataService.contactus(vm.contactformfields).then(function(resposeObj){
        if(resposeObj.status == 200){
          $("#contactSuccess").show();
        } else if(resposeObj.status == 404) {
            // Error Scenarios
            $("#contactFailure").show();
        }
    });
 
  }

  
    vm.contactus = contactus;
  }
  angular.module('mobifixApp')
    .controller('homeCtrl', homeControllerConstructor);
})(angular);

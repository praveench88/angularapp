/**
 * @ngdoc function
 * @name mobifixApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the mobifixApp
 */
(function(angular) {
    'use strict';

  function homeControllerConstructor($scope, $http, httpDataService, $state, $rootScope, commonModal) {

    var vm = this;
    vm.$state = $state;

        var vm = this;
        vm.app = 'Mobifix'
        
    }
    angular.module('mobifixApp')
        .controller('homeCtrl', homeControllerConstructor);
})(angular);

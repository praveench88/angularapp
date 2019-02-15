/**
 * @ngdoc function
 * @name mobifixApp.controller:termsCtrl
 * @description
 * # aboutCtrl
 * Controller of the mobifixApp
 */
(function (angular) {
  'use strict';

  function termsControllerConstructor($sce, httpDataService, commonModal) {

    var vm = this;
    vm.app = 'Mobifix'

  }
  angular.module('mobifixApp')
    .controller('termsCtrl', termsControllerConstructor);
})(angular);

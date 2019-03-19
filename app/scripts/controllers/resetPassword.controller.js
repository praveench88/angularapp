/**
 * @ngdoc function
 * @name mobifixApp.controller:resetPasswordCtrl
 * @description
 * # resetPasswordCtrl
 * Controller of the mobifixApp
 */
(function(angular, lodash) {
  'use strict';

    function resetPasswordControllerConstructor($sce, httpDataService, commonModal) {

        var vm = this;
        vm.app = 'Mobifix';


        $("#resetSuccess").hide();
        $("#resetFailure").hide();

       function reset(){




        vm.resetpasswordformfields = {
               
                        
          LoginId: vm.email
                      }
                  
                      httpDataService.passwordresetEmail(vm.resetpasswordformfields).then(function(resposeObj){
                          if(resposeObj.status == 200){
                          

                            vm.passwordresetsendEmail = {
               
                        
                             password: resposeObj.data[0].Password,
                             email:vm.email
                                          }
                                      
                                          httpDataService.passwordresetsendEmail(vm.passwordresetsendEmail).then(function(resposeObj){
                                              if(resposeObj.status == 200){
                                              
                    
                    
                                                $("#resetSuccess").show();
                    
                                                
                                              
                                              } else if(resposeObj.status == 404) {
                                                  // Error Scenarios
                                                  $("#resetFailure").show();
                                                 
                                              }
                                          });



                          
                          } else if(resposeObj.status == 404) {
                              // Error Scenarios
                              $("#resetFailure").show();
                             
                          }
                      });
                   
       }
       vm.reset=reset;
    }

angular.module('mobifixApp')
.controller('resetPasswordCtrl', resetPasswordControllerConstructor);
})(window.angular, window._);
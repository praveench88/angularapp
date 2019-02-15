/**
 * @ngdoc function
 * @name mobifixApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the mobifixApp
 */
(function(angular, lodash) {
    'use strict';

    function loginControllerConstructor($location, $state, $rootScope, $uibModalInstance, credentials, httpDataService, commonModal) {

        var vm = this;
         vm.$state = $state;

           function openRegisterModal() {
            $uibModalInstance.close()

            var commonResolves = commonModal.commonResolves({});
            var resolveAttributes = {
                resolve: angular.extend(commonResolves.accountData)
            };

            var modalCallBack = function () {
            
            };
            var modalDismissCallBack = function () {
            };
            commonModal.openModal('registerModal', resolveAttributes, modalCallBack, modalDismissCallBack);
        }
          function openResetPasswordModal() {
            $uibModalInstance.close()

            var commonResolves = commonModal.commonResolves({});
            var resolveAttributes = {
                resolve: angular.extend(commonResolves.accountData)
            };
            var modalCallBack = function () {
            
            };
            var modalDismissCallBack = function () {
            };
            commonModal.openModal('resetPasswordModal', resolveAttributes, modalCallBack, modalDismissCallBack);
        }

        function login() {
            vm.loginCred = {
                LoginId : vm.username,
                Password : vm.password
            }

            httpDataService.login(vm.loginCred).then(function(resposeObj){
                if(resposeObj.status == 200){
                    $rootScope.$broadcast("loginbroadcast", resposeObj.data[0]); //catch in dashboard controller
                    $rootScope.userData = resposeObj.data;
                    localStorage.setItem("currentUser", JSON.stringify(resposeObj.data));
                    $uibModalInstance.close()
                } else if(resposeObj.status == 404) {
                    // Error Scenarios
                    $rootScope.$broadcast("loginbroadcast", {status:404}); 
                    $('#userPwd').show();
                    $rootScope.userData = resposeObj.data;
                }
            });
        }

        vm.login = login;
        vm.openRegisterModal = openRegisterModal;
        vm.openResetPasswordModal = openResetPasswordModal;


    }
    angular.module('mobifixApp')
        .controller('loginCtrl', loginControllerConstructor);
})(window.angular, window._);

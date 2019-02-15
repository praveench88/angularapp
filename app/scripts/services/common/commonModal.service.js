(function (angular) {
    'use strict';

    function commonModalConstructor($uibModal, $log) {

    	var commonResolves;

        function openModal(modalName, modalResolve, modalCallBack, modalDismissCallBack) {
            //$log.log('modalResolve::', angular.extend(modalSettings[modalName], modalResolve));
            var modalInstance = $uibModal.open(
            angular.extend(modalSettings[modalName], modalResolve));
            modalInstance.result.then(function (modalObject) {
                //$log.log('Here is the API response for openModal', modalObject);
                modalCallBack(modalObject);
            }, function (err) {
               // $log.log('dismiss............', err);
                if (modalDismissCallBack) {
                    modalDismissCallBack();
                }
            });
        }

        function getCommonResolves(accountData) {
            commonResolves = {
                accountData: {
                    accountData: function () {
                        return accountData;
                    }
                }
            };
            return commonResolves;
        }

        var modalSettings = {
            loginModal: {
                size: 'md',
                windowClass: 'login-modal',
                templateUrl: 'views/login.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            },
            registerModal: {
                size: 'md',
                windowClass: 'register-modal',
                templateUrl: 'views/register.html',
                controller: 'registerCtrl',
                controllerAs: 'vm'
            },
            vendorLoginModal: {
                size: 'md',
                windowClass: 'vendorlogin-modal',
                templateUrl: 'views/vendorLogin.html',
                controller: 'vendorLoginCtrl',
                controllerAs: 'vm'
            },
            vendorRegisterModal: {
                size: 'md',
                windowClass: 'vendorregister-modal',
                templateUrl: 'views/vendorRegister.html',
                controller: 'vendorRegisterCtrl',
                controllerAs: 'vm'
            },
             resetPasswordModal: {
                size: 'md',
                windowClass: 'resetpassword-modal',
                templateUrl: 'views/resetPassword.html',
                controller: 'resetPasswordCtrl',
                controllerAs: 'vm'
            }
        };

        return {
            openModal: openModal,
            commonResolves: getCommonResolves
        };

    }
    angular.module('mobifixApp')
        .service('commonModal', commonModalConstructor);

})(angular);
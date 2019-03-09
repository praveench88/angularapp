/**
 * @ngdoc function
 * @name mobifixApp.controller:vendorProfileCtrl
 * @description
 * # vendorProfileCtrl
 * Controller of the mobifixApp
 */
(function (angular, lodash) {
  'use strict';

  function vendorProfileControllerConstructor($sce, httpDataService, commonModal, $scope, $rootScope, $http) {


    var vm = this;
    vm.vendorData = $rootScope.vendorData[0];
    vm.app = 'Mobifix'

    $("#updateSuccess").hide();
    $("#updateFailure").hide();

    function getvendorDetails() {      vm.profileCred = {        custvendAdminID: vm.vendorData.custvendAdminID      }      httpDataService.getvendorDetails(vm.profileCred).then(function (resposeObj) {        if (resposeObj.status == 200) {          $rootScope.vendorData = resposeObj.data;          localStorage.setItem("currentUser", JSON.stringify(resposeObj.data));        } else if (resposeObj.status == 404) {        }      });    }

    function vendorProfile() {
      //$("#registrationForm input").attr("disabled",false);
      vm.vendorProfileCred = {

        custvendAdminID: vm.vendorrData.custvendAdminID,
        //CustAdminid: vm.userData.CustAdminid,
        LoginId: vm.vendorData.LoginId,
        FirstName: vm.vendorData.FirstName,
        LastName: vm.vendorData.LastName,
        FullName: "",
        AddressLine1: vm.vendorData.AddressLine1,
        AddressLine2: vm.vendorData.AddressLine2,
        City: vm.vendorData.City,
        State: vm.vendorData.State,
        Country: vm.vendorData.Country,
        ZIPCode: vm.vendorData.ZIPCode,
        NoOfAttempts: "",
        LastLoginDate: "",
        UserStatus: "",
        CreatedDate: "",
        CrearedBy: 1,
        LastUpdateDate: "",
        LastUpdateBy: 1,
        NamePrefix: "",
        Gender: "",
        AddDate: "",
        AddedByUserID: "",
        ChangedDate: "",
        ChangedByID: "",
        ContactAddrID: "",
        ContactStatusCD: "",
        ContactPhoneID: "",
        CustID: "",
        ContactNumber: vm.vendorData.ContactNumber,
        ContactStatus: "",
        AddedDate: "",
        AddByUserID: "",
        ChangeDate: "",
        ChangeByID: ""
      }

      httpDataService.vendorProfile(vm.vendorrProfileCred).then(function (resposeObj) {
        if (resposeObj.status == 200) {
          getvendorDetails();
          $("#updateSuccess").show();
          $("#registrationForm input").attr("disabled", true);
        } else if (resposeObj.status == 404) {
          // Error Scenarios
          $rootScope.$broadcast("vendorProfilebroadcast", { status: 404 });
          $("#updateFailure").show();
        }
      });
    }
    vm.vendorProfile = vendorProfile;
    vm.getvendorDetails = getvendorDetails;
    vm.vendorData = $rootScope.vendorData[0];
  }

  angular.module('mobifixApp')
    .controller('vendorProfileCtrl', vendorProfileControllerConstructor);
})(window.angular, window._);


(function (angular, lodash) {
  'use strict';

  function userProfileControllerConstructor($sce, httpDataService, commonModal, $scope, $rootScope, $http) {

 
    var vm = this;
    vm.userData = $rootScope.userData[0];
    vm.app = 'Mobifix';

    //$("#registrationForm input").attr("disabled",true);
    $("#updateSuccess").hide();
    $("#updateFailure").hide();


    function getuserDetails() {
      vm.profileCred = {
        custvendAdminID: vm.userData.custvendAdminID
      }
      httpDataService.getuserDetails(vm.profileCred).then(function (resposeObj) {
        if (resposeObj.status == 200) {
          $rootScope.userData = resposeObj.data;
          localStorage.setItem("currentUser", JSON.stringify(resposeObj.data));
        } else if (resposeObj.status == 404) {

        }
      });
    }

  

function editProfile(){
$("#registrationForm input").attr("disabled",false);
}

function userProfile() {
  
  vm.userProfileCred = {

    custvendAdminID: vm.userData.custvendAdminID,
    //CustAdminid: vm.userData.CustAdminid,
      LoginId: vm.userData.LoginId,
      FirstName: vm.userData.FirstName,
      LastName: vm.userData.LastName,
      FullName: "",
      AddressLine1: vm.userData.AddressLine1,
      AddressLine2: vm.userData.AddressLine2,
      City: vm.userData.City,
      State: vm.userData.State,
      Country: vm.userData.Country,
    ZIPCode: vm.userData.ZIPCode,
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
    ContactNumber: vm.userData.ContactNumber,
    ContactStatus: "",
    AddedDate: "",
    AddByUserID: "",
    ChangeDate: "",
    ChangeByID: ""
    }

      httpDataService.userProfile(vm.userProfileCred).then(function(resposeObj) {
        if (resposeObj.status == 200) {
          getuserDetails();
         $("#updateSuccess").show();
         $("#registrationForm input").attr("disabled",true);
      } else if (resposeObj.status == 404) {
        // Error Scenarios
        $rootScope.$broadcast("userProfilebroadcast", { status: 404 });
        $("#updateFailure").show();
      }
    });

    
   
  }
    vm.userProfile = userProfile;
    vm.getuserDetails = getuserDetails;
  vm.userData= $rootScope.userData[0];
  vm.editProfile=editProfile;
}

  angular.module('mobifixApp')
    .controller('userProfileCtrl', userProfileControllerConstructor);
})(window.angular, window._);


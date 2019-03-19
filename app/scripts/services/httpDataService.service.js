(function (angular) {
  'use strict';

  function httpDataServiceFn(apiUrls, httpRequestWrapper) {

    // function getApiURL(apiKey) {
    //   var apiURL = apiUrls.apiKey;
    //   apiURL = apiURL.replace('{{domain}}', location.origin);
    //   return apiURL;
    // }

    function getAccountDetails() {
      var url = apiUrls.getAccounts;
      return httpRequestWrapper.get(url, null, null, true);
    }

    function saveAcctDetails (acctData) {
      var url = apiUrls.addAccount;
      return httpRequestWrapper.post(url, acctData, null, null, true);
    }

    function updateAcctDetails (acctData) {
      var url = apiUrls.addAccount;
      return httpRequestWrapper.put(url, acctData, null, null, true);
    }

    function deleteAccountDetails (acctData) {
      var url = apiUrls.deleteAccount;
      return httpRequestWrapper['delete'](url, acctData, null, true);
    }

    function login (userData) {
      var url = apiUrls.login;
      return httpRequestWrapper.post(url,userData,null, null, true);
    }
    function passwordresetEmail (userData) {
      var url = apiUrls.resetPassword;
      return httpRequestWrapper.post(url,userData,null, null, true);
    }
    function passwordresetsendEmail (userData) {
      var url = apiUrls.passwordresetsendEmail;
      return httpRequestWrapper.post(url,userData,null, null, true);
    }
    

   

    function allOrders(){
      var url = apiUrls.allOrders;
      return httpRequestWrapper.get(url,null, null, true);
    }
     function allusers(){
      var url = apiUrls.allusers;
      return httpRequestWrapper.get(url,null, null, true);
    }
    function myorders(userData){
      var url = apiUrls.myorders;
      return httpRequestWrapper.post(url,userData,null, null, true);
    }
    function status(userData) {
      var url = apiUrls.status;
      return httpRequestWrapper.post(url, userData, null, null, true);
    }
    function brandModel (userData) {
      var url = apiUrls.model;
      return httpRequestWrapper.post(url,userData,null, null, true);
    }
    function issuePrice (userData) {
      var url = apiUrls.issueprice;
      return httpRequestWrapper.post(url,userData,null, null, true);
    }
   function register(userData) {
      var url = apiUrls.register;
      return httpRequestWrapper.post(url, userData, null, null, true);
    }
    function userProfile(userData) {
      var url = apiUrls.userProfile;
      return httpRequestWrapper.post(url, userData, null, null, true);
    }

    function checkout(userData) {
      var header={"x-api-key":"d703f4f1b0f4d375e1c0efcd8be7f9bc","X-Auth-Token":"6c88138892719fa75e76768e6cfe7696",'Access-Control-Allow-Origin': true,
            'Content-Type': 'application/json; charset=utf-8',
            "X-Requested-With": "XMLHttpRequest"}
      var url = apiUrls.checkout;
      return httpRequestWrapper.post(url, userData, null, header, true);
    }

    function vendorProfile(userData) {
      var url = apiUrls.vendorProfile;
      return httpRequestWrapper.post(url, userData, null, null, true);
    }

    function vendorLogin(userData) {
      var url = apiUrls.vendorLogin;
      return httpRequestWrapper.post(url, userData, null, null, true);
    }

    function vendorRegister(userData) {

      var url = apiUrls.vendorRegister;
      return httpRequestWrapper.post(url, userData, null, null, true);
    }
    function allmobiletypes(userData) {

      var url = apiUrls.allmobiletypes;
      return httpRequestWrapper.get(url, userData, null, null, true);
    }
    function insertorder(userData) {
      var url = apiUrls.insertorder;
      return httpRequestWrapper.post(url, userData, null, null, true);
    }
    function getuserDetails(userData) {
      var url = apiUrls.getuserDetails;
      return httpRequestWrapper.post(url, userData, null, null, true);
    }
    function contactus(userData) {
      var header={ 'Content-Type': 'application/x-www-form-urlencoded' };
      var url = apiUrls.contactformDetails;
      return httpRequestWrapper.post(url, userData, null, header, true);
    }
    

    function logout (userData) {
      var url = apiUrls.logout;
      var data = userData ? userData : null;
      return httpRequestWrapper.post(url, data, null, null, false);
    }

    
    return {
      login: login,
      register: register,
      userProfile: userProfile,
      vendorProfile: vendorProfile,
      vendorRegister: vendorRegister,
      getuserDetails: getuserDetails,
      logout: logout,
      vendorLogin: vendorLogin,
      brandModel:brandModel,
      issuePrice:issuePrice,
      checkout:checkout,
      allOrders:allOrders,
      allusers:allusers,
      myorders: myorders,
      status: status,
      allmobiletypes: allmobiletypes,
      insertorder: insertorder,
      contactus:contactus,
      passwordresetEmail:passwordresetEmail,
      passwordresetsendEmail :passwordresetsendEmail 

    };
  }

  angular.module('mobifixApp')
    .service('httpDataService', httpDataServiceFn);

})(window.angular);

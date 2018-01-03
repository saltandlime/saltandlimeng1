angular.module('SaltAndLimeNG1')
.controller('LoginCtrl',['$scope','$firebaseAuth',function($scope,$firebaseAuth){
  var auth = $firebaseAuth();

  // login with Facebook
  auth.$signInWithPopup("github").then(function(firebaseUser) {
    console.log("Signed in as:", firebaseUser);
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });
}]);
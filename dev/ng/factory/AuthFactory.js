angular.module('SaltAndLimeNG1') 
.factory('AuthFactory',['$firebaseAuth',function($firebaseAuth){

  //var firebaseAuthObject = $firebaseAuth();

  return {
    register:function(user){
      return $firebaseAuth().$createUserWithEmailAndPassword(user.email, user.password);
    },
    login:function(user){
      return $firebaseAuth().$signInWithEmailAndPassword(user.email, user.password);
    },
    logout:function(){
      return $firebaseAuth().$signOut();
    },
    isLoggedIn:function(){
      return $firebaseAuth().$getAuth();
    },
    requireSignin:function(){
      return $firebaseAuth().$requireSignIn();
    },
    sendWelcomeEmail:function(emailAddress){
      firebaseDataService.emails.push({
        emailAddress: emailAddress
      });
    }
  }

}]);
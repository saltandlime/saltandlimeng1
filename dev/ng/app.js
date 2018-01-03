angular.module('SaltAndLimeNG1',[
    'ngRoute',
    'firebase'
])
.config(['$routeProvider',function($routeProvider) {

    $routeProvider.when('/login', {
        templateUrl: 'ng/view/login.html',
        controller: 'LoginCtrl'
    }).when('/app',{
        templateUrl:'ng/view/app.html',
        controller:'AppCtrl',
        resolve:{
        	'currentAuth':['AuthFactory',function(AuthFactory){
        		return AuthFactory.requireSignin();
        	}]
        }
    }).otherwise('/login');

}])
.run(['$rootScope','$location','$window',function($rootScope,$location,$window){

	$rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    	// We can catch the error thrown when the $requireSignIn promise is rejected
    	// and redirect the user back to the home page
    	if (error === 'AUTH_REQUIRED') {
      		$location.path('/login');
    	}
  	});
    //check if online
    $rootScope.online = navigator.onLine;
    $window.addEventListener("offline", function () {
        $rootScope.$apply(function() {
            $rootScope.online = false;
        });
      }, false);
    $window.addEventListener("online", function () {
        $rootScope.$apply(function() {
            $rootScope.online = true;
        });
      }, false);
}])
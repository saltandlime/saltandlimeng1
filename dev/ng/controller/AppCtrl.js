angular.module('SaltAndLimeNG1')
.controller('AppCtrl',['$scope','AuthFactory','$location',function($scope,AuthFactory,$location){

	$scope.signOut = function(){
		AuthFactory.logout();
		$location.path('/login');
	}
}]);
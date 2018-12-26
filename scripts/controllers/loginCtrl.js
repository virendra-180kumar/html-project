angular
	.module('app')
	.controller('loginController',['$scope','$stateParams','$state','LoginService',function($scope,$stateParams,$state,LoginService){
		$scope.formSubmit = function() {
	      if(LoginService.login($scope.username, $scope.password)) {
	        $scope.error = '';
	        $scope.username = '';
	        $scope.password = '';
	        $state.transitionTo('dashboard');
	      } else {
	        $scope.error = "Incorrect username/password !";
	      }   
	    };

	}])
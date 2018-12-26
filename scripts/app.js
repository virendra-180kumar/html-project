angular
	.module('app',[
		'ui.router',
		'slick',
    'angular-flot',
    'ngAnimate'
	])
	.config(['$urlRouterProvider', '$stateProvider',function($urlRouterProvider,$stateProvider){
		$urlRouterProvider.otherwise('/login');
        
        //States for different webpages
        
		$stateProvider
			.state('login',{
				url: '/login',
				templateUrl : 'templates/login.html',
				controller : 'loginController'
			})
			.state('dashboard',{
				url: '/dashboard',
				templateUrl : 'templates/dashboard.html',
				controller : 'dashboardController'
			})

	}]).factory('LoginService', function() {
      var admin = 'admin';
      var pass = 'pass';
      var isAuthenticated = false;
      
      return {
        login : function(username, password) {
          isAuthenticated = username === admin && password === pass;
          return isAuthenticated;
        },
        isAuthenticated : function() {
          return isAuthenticated;
        }
      };
      
    });



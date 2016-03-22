var app = angular.module('myapp', ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider){
    $routeProvider.
    when('/login', {
        title: 'login',
        templateUrl: 'views/login.html',
        controller: 'loginController'
     }).
     when('/register',{
       title:'Register',
       templateUrl: 'views/register.html',
       controller: 'registerController'
     }).
      when('/dashboard', {
            title:'dashboard',
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardController'
      }).
      when('/header',{
        title:'header',
        templateUrl: 'views/header.html',
        controller: 'headerController'
      }).
      when('/profile',{
        title: 'Profile',
        templateUrl: 'views/profile.html',
        controller: 'profileController'
      }).
      when('/addmark',{
        title:'addmark',
        templateUrl: 'views/addmark.html',
        controller: 'addmarkController'
      }).
      when('/viewmark',{
        title:'viewmark',
        templateUrl: 'views/viewmark.html',
        controller: 'viewmarkController'
      }).
      when('/logout',{
        title:'logout',
        templateUrl: 'views/logout.html',
        controller: 'logoutController'
      }).


       otherwise({
        redirectTo: '/login'
      });
    }]);

var app = angular.module('JustinForSenate', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/',{
    templateUrl: 'home.html'
  });

  $routeProvider.when('/about', {
    templateUrl: 'about.html'
  });

  $routeProvider.when('/platform', {
    templateUrl: 'platform.html'
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  });
});

app.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
  $rootScope.$on('$routeChangeSuccess',function (event) {
    if (!$window.ga)return;
    $window.ga('send', 'pageview', { page: $location.path() });
  });
}]);

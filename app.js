let weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.htm',
      controller: 'homeController'
    })
    .when('/forecast', {
      templateUrl: 'pages/forecast.htm',
      controller: 'forecastController'
    });
});

weatherApp.service('cityService', function () {
  let self = this;
  this.city = 'Irvine';
});

/* weatherApp.directive('searchCity', function () {
  return {
    restrict: 'AECM',
    templateUrl: 'templates/searchCity.html',
    replace: true,
    scope: {
      city: '='
    }
  };
}); */

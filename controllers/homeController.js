weatherApp.controller('homeController', [
  '$scope',
  '$log',
  '$filter',
  '$location',
  'cityService',
  function ($scope, $log, $filter, $location, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function () {
      cityService.city = $scope.city;
    });
    $log.log('City name = ', $scope.city);
  }
]);

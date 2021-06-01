weatherApp.controller('forecastController', [
  '$scope',
  '$log',
  '$resource',
  '$location',
  'cityService',
  function ($scope, $log, $resource, $location, cityService) {
    $scope.city = cityService.city;
    $log.log('City name = ', $scope.city);

    $scope.weatherAPI = $resource(
      'http://api.openweathermap.org/data/2.5/forecast',
      { callback: 'JSON_CALLBACK' },
      { get: { method: 'JSONP' } }
    );

    $scope.weatherResult = $scope.weatherAPI.get({
      q: $scope.city,
      cnt: 2,
      appid: '448c16b2f83be54e2d0d2debf3e7fe2d'
    });

    $log.log($scope.weatherResult);
  }
]);

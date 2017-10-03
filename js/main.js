var bare = angular.module('tsApp', ['ngCookies', 'appControllers', 'ngRoute', 'ui.bootstrap', 'ngSanitize', 'ngAnimate']);

var appControllers = angular.module('appControllers', ['ngCookies']);

bare.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/view1', {
      templateUrl: 'views/view1.html',
      controller:  'HomeController'
    }).
    when('/view2', {
      templateUrl: 'views/view2.html',
      controller: 'HomeController'
    }).
    otherwise({
      redirectTo: '/view1'
    });
}]);

bare.controller('HeaderController', [ '$scope', '$cookies', '$http', '$location', '$timeout',
  function($scope, $cookies, $http, $location, $timeout) {

    var serviceBase = 'lib/_handle.php';

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

}]); //HeaderController
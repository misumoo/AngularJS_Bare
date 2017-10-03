/**
 * Created by Misumoo on 5/8/2015.
 */

bare.controller('View1Controller', [ '$scope', '$cookies', '$http', '$filter', '$sce', '$location', '$timeout',
  function($scope, $cookies, $http, $filter, $sce, $location, $timeout) {
    var serviceBase = 'lib/_handle.php';

    $scope.col1 = "";
    $scope.col2 = "Unchanged";

    $scope.hello = function() {
      $http.post(serviceBase, {
        task: "hello"
      }).success(function(response) {
        if(response.success) {
          if(response.test !== "") {
            $scope.col1 = response.test;
          }
        }
      }).error(function() {
        alert("Error saying hello");
      });
    }; //getTasks

    //$scope.hello();

}]); //View1Controller
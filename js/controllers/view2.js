/**
 * Created by Misumoo on 5/9/2015.
 */

bare.controller('View2Controller', [ '$scope', '$cookies', '$http', '$filter', '$sce', '$location', '$timeout',
  function($scope, $cookies, $http, $filter, $sce, $location, $timeout) {
    var serviceBase = 'lib/_handle.php';

    $scope.test = "";

    $scope.view2hello = function() {
      $http.post(serviceBase, {
        task: "hello2"
      }).success(function(response) {
        if(response.success) {
          if(response.test !== "") {
            $scope.test = response.test;
          }
        }
      }).error(function() {
        alert("Error saying hello");
      });
    }; //view2hello

    //$scope.view2hello();

}]); //SheetController
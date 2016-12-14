'use strict';

angular.module('myApp.menu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/menu', {
    templateUrl: 'menu/menu.html',
    controller: 'menuCtrl'
  });
}])

.controller('menuCtrl', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
      $scope.data = [300, 500, 100];

}]);
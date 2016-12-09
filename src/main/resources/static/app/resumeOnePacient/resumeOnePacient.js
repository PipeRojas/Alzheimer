'use strict';

angular.module('myApp.resumeOnePacient', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resumeOnePacient', {
    templateUrl: 'resumeOnePacient/resumeOnePacient.html',
    controller: 'resumeOnePacientCtrl'
  });
}])

.controller('resumeOnePacientCtrl', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
      $scope.data = [300, 500, 100];

}]);
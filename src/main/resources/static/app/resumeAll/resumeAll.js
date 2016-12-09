'use strict';

angular.module('myApp.resumeAll', ['ngRoute','ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resumeAll', {
    templateUrl: 'resumeAll/resumeAll.html',
    controller: 'resumeAllCtrl'
  });
}])

.controller('resumeAllCtrl', ['$scope', '$timeout', '$http', 'allResumes', function($scope, $timeout, $http, allResumes) {

    allResumes.get()
    .$promise.then(
        //success
        function(value){
            console.info(value);
        },
        //error
        function(error){
            console.info(error);
        }
    );


    $scope.top10MasJuegan=false;
    $scope.top10MasJueganBtn=function(){
        $scope.top10MasJuegan=!$scope.top10MasJuegan;
    };

    $scope.labels = ['Laura Gomez', 'Camilo Becerra', 'Santiago Velez', 'Jaime Duarte', 'Daniel Lopez',
                     'Maria Ortiz', 'Juan Peña', 'Manuel Garcia', 'Laura Granados', 'Daniel Morera'];
    $scope.series = ['Pacientes con más Partidas'];

    $scope.data = [
    [200, 178, 169, 158, 146, 143, 140, 136, 125, 120]
    ];


}]);
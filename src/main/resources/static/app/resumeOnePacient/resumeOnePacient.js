'use strict';

angular.module('myApp.resumeOnePacient', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resumeOnePacient', {
    templateUrl: 'resumeOnePacient/resumeOnePacient.html',
    controller: 'resumeOnePacientCtrl'
  });
}])

.controller('resumeOnePacientCtrl', ['$scope', '$timeout', 'resumesById', function($scope, $timeout, resumesById) {

    $scope.datosCargados=false;
    $scope.patientid='';

    $scope.getPatient=function(){
        resumesById.get({idpatient:$scope.patientid})
        .$promise.then(
            //success
            function(value){
                $scope.datosCargados=true;
            },
            //error
            function(error){
            }
        );
    };

    //Juegos por veces jugadas

    $scope.juegosPorVecesJugadas=false;
    $scope.juegosPorVecesJugadasBtn=function(){
        $scope.juegosPorVecesJugadas=!$scope.juegosPorVecesJugadas;
    };

    $scope.juegosPorVecesJugadaslabels = ["Sopa de Letras", "Parejas", "Crucigrama", "Encuentra Diferencia"];
    $scope.juegosPorVecesJugadasdata = [20, 70, 13, 40];

}]);
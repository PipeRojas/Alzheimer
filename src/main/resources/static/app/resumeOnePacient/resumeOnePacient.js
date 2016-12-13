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
                console.info(value);
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

    //Juegos por nivel maximo

    $scope.juegosPorNivelMaximo=false;
    $scope.juegosPorNivelMaximoBtn=function(){
        $scope.juegosPorNivelMaximo=!$scope.juegosPorNivelMaximo;
    };

    $scope.juegosPorNivelMaximolabels =["Sopa de Letras", "Parejas", "Crucigrama", "Encuentra Diferencia"];

    $scope.juegosPorNivelMaximodata =
    [20, 12, 10, 15]
    ;

    //Juegos por Tiempo Mínimo

    $scope.juegosPorTiempoMinimo=false;
    $scope.juegosPorTiempoMinimoBtn=function(){
        $scope.juegosPorTiempoMinimo=!$scope.juegosPorTiempoMinimo;
    };

    $scope.juegosPorTiempoMinimolabels = ["Sopa de Letras", "Parejas", "Crucigrama", "Encuentra Diferencia"];
    $scope.juegosPorTiempoMinimodata = [20.5 , 15.7, 40.8, 120.3];
    $scope.juegosPorTiempoMinimotype = 'polarArea';

    $scope.juegosPorTiempoMinimotoggle = function () {
      $scope.juegosPorTiempoMinimotype = $scope.juegosPorTiempoMinimotype === 'polarArea' ?
        'pie' : 'polarArea';
    };

}]);
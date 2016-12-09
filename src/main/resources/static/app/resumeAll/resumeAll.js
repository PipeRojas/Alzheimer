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
            //Hacer algo con value
        },
        //error
        function(error){
            //Hacer algo con el error
        }
    );

    //Top 10 jugadores que mas juegan

    $scope.top10MasJuegan=false;
    $scope.top10MasJueganBtn=function(){
        $scope.top10MasJuegan=!$scope.top10MasJuegan;
    };

    $scope.top10MasJueganlabels = ['Laura Gomez', 'Camilo Becerra', 'Santiago Velez', 'Jaime Duarte', 'Daniel Lopez',
                     'Maria Ortiz', 'Juan Peña', 'Manuel Garcia', 'Laura Granados', 'Daniel Morera'];
    $scope.top10MasJueganseries = ['Pacientes con más Partidas'];

    $scope.top10MasJuegandata = [
    [200, 178, 169, 158, 146, 143, 140, 136, 125, 120]
    ];

    //Cantidad de partidas por juego

    $scope.juegosPorPartidas=false;
    $scope.juegosPorPartidasBtn=function(){
        $scope.juegosPorPartidas=!$scope.juegosPorPartidas;
    }

    $scope.juegosPorPartidaslabels =["Sopa de Letras", "Parejas", "Crucigrama", "Encuentra Diferencia"];

    $scope.juegosPorPartidasdata = [
    [65, 59, 90, 81]
    ];

    //Nivel máximo por cada juego

    $scope.nivelMaximoPorJuego=false;
    $scope.nivelMaximoPorJuegoBtn=function(){
        $scope.nivelMaximoPorJuego=!$scope.nivelMaximoPorJuego;
    }

    $scope.nivelMaximoPorJuegolabels = ["Sopa de Letras", "Parejas", "Crucigrama", "Encuentra Diferencia"];
    $scope.nivelMaximoPorJuegodata = [7, 9, 10, 5];

    //Menor tiempo por cada juego

    $scope.tiempoMinimoPorJuego=false;
    $scope.tiempoMinimoPorJuegoBtn=function(){
        $scope.tiempoMinimoPorJuego=!$scope.tiempoMinimoPorJuego;
    }

    $scope.tiempoMinimoPorJuegolabels = ["Sopa de Letras", "Parejas", "Crucigrama", "Encuentra Diferencia"];
    $scope.tiempoMinimoPorJuegodata = [160, 120, 100, 70];

}]);
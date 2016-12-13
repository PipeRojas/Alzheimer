'use strict';

angular.module('myApp.resumeAll', ['ngRoute','ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resumeAll', {
    templateUrl: 'resumeAll/resumeAll.html',
    controller: 'resumeAllCtrl'
  });
}])

.controller('resumeAllCtrl', ['$scope', 'allResumes', function($scope, allResumes) {




    allResumes.get()
    .$promise.then(
        //success
        function(value){
            //Hacer algo con value
            var allData=[];
            for(var i=0; i<value.length; i++){
                if(value[i].patientName!==null){
                    allData.push(value[i]);
                }
            }

            var top10MasJueganlabelsSumado=[];
            var top10MasJuegandataSumado=[];

            var top10MasJueganlabels=[];
            var top10MasJuegandata=[];

            var juegosPorPartidaslabels=[];
            var juegosPorPartidasdata=[];

            var nivelMaximoPorJuegolabels=[];
            var nivelMaximoPorJuegodata=[];

            var tiempoMinimoPorJuegolabels=[];
            var tiempoMinimoPorJuegodata=[];

            for(var i=0; i<allData.length; i++){
                var nombre=allData[i].patientName;
                var inArray=false;
                for(var j=0; j<top10MasJueganlabelsSumado.length; j++){
                    console.info(nombre);
                    console.info(top10MasJueganlabelsSumado[j]);
                    console.info(nombre==top10MasJueganlabelsSumado[j]);
                    if(nombre==top10MasJueganlabelsSumado[j]){
                        top10MasJuegandataSumado[i]=top10MasJuegandataSumado[i]+1;
                        inArray=true;
                    }
                }
                if(!inArray){
                    top10MasJueganlabelsSumado.push(nombre);
                    top10MasJuegandataSumado.push(1);
                }
            }

            console.info(top10MasJuegandataSumado);
            console.info(top10MasJueganlabelsSumado);

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

            $scope.juegosPorPartidasdata =
            [[65, 59, 90, 81]];

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
        },
        //error
        function(error){
            //Hacer algo con el error
        }
    );


}]);
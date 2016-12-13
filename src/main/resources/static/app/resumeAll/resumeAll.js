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

            var juegosPorPartidaslabels=[];
            var juegosPorPartidasdata=[];

            var nivelMaximoPorJuegolabels=[];
            var nivelMaximoPorJuegodata=[];

            var tiempoMinimoPorJuegolabels=[];
            var tiempoMinimoPorJuegodata=[];

            for(var i=0; i<allData.length; i++){
                var nombre=allData[i].patientName;
                var nameinArray=false;
                for(var j=0; j<top10MasJueganlabelsSumado.length; j++){
                    if(nombre==top10MasJueganlabelsSumado[j]){
                        top10MasJuegandataSumado[j]++;
                        nameinArray=true;
                    }
                }
                if(!nameinArray){
                    top10MasJueganlabelsSumado.push(nombre);
                    top10MasJuegandataSumado.push(1);
                }

                var nombreJuego=allData[i].gameName;
                var gameParties=allData[i].levelReached;
                var gameMinTime=allData[i].timeSpendMilisenconds;
                var gameinArray=false;

                for(var n=0; n<juegosPorPartidaslabels.length; n++){
                    if(nombreJuego==juegosPorPartidaslabels[n]){
                        juegosPorPartidasdata[n]++;
                        if(gameParties>nivelMaximoPorJuegodata[n]){
                            nivelMaximoPorJuegodata[n]=gameParties;
                        }
                        if(gameMinTime<tiempoMinimoPorJuegodata[n]){
                            tiempoMinimoPorJuegodata[n]=gameMinTime;
                        }
                        gameinArray=true;
                    }
                }
                if(!gameinArray){
                    juegosPorPartidaslabels.push(nombreJuego);
                    juegosPorPartidasdata.push(1);
                    nivelMaximoPorJuegodata.push(gameParties);
                    tiempoMinimoPorJuegodata.push(gameMinTime);
                }
            }

            console.info(juegosPorPartidaslabels);
            console.info(nivelMaximoPorJuegodata);

            //Top 10 jugadores que mas juegan

            $scope.top10MasJuegan=false;
            $scope.top10MasJueganBtn=function(){
                $scope.top10MasJuegan=!$scope.top10MasJuegan;
            };

            $scope.top10MasJueganlabels = top10MasJueganlabelsSumado;
            $scope.top10MasJueganseries = ['Pacientes con más Partidas'];

            $scope.top10MasJuegandata = top10MasJuegandataSumado;

            //Cantidad de partidas por juego

            $scope.juegosPorPartidas=false;
            $scope.juegosPorPartidasBtn=function(){
                $scope.juegosPorPartidas=!$scope.juegosPorPartidas;
            }

            $scope.juegosPorPartidaslabels =juegosPorPartidaslabels;
            var tempjuegosPorPartidasdata=[];
            tempjuegosPorPartidasdata.push(juegosPorPartidasdata);
            $scope.juegosPorPartidasdata = tempjuegosPorPartidasdata;

            //Nivel máximo por cada juego

            $scope.nivelMaximoPorJuego=false;
            $scope.nivelMaximoPorJuegoBtn=function(){
                $scope.nivelMaximoPorJuego=!$scope.nivelMaximoPorJuego;
            }

            $scope.nivelMaximoPorJuegolabels = $scope.juegosPorPartidaslabels;
            $scope.nivelMaximoPorJuegodata = nivelMaximoPorJuegodata;

            //Menor tiempo por cada juego

            $scope.tiempoMinimoPorJuego=false;
            $scope.tiempoMinimoPorJuegoBtn=function(){
                $scope.tiempoMinimoPorJuego=!$scope.tiempoMinimoPorJuego;
            }

            $scope.tiempoMinimoPorJuegolabels = $scope.juegosPorPartidaslabels;
            for(var m=0; m<tiempoMinimoPorJuegodata.length; m++){
                tiempoMinimoPorJuegodata[m]=tiempoMinimoPorJuegodata[m]/1000;
            }
            $scope.tiempoMinimoPorJuegodata = tiempoMinimoPorJuegodata;
        },
        //error
        function(error){
            //Hacer algo con el error
        }
    );


}]);
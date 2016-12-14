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
                var allData=[];
                for(var i=0; i<value.length; i++){
                    if(value[i].patientName!==null){
                        allData.push(value[i]);
                    }
                }

                var labels=[];
                var juegosPorVecesJugadasdata=[];
                var juegosPorNivelMaximodata=[];
                var juegosPorTiempoMinimodata=[];

                for(var i=0; i<allData.length; i++){


                    var nombreJuego=allData[i].gameName;
                    var gameParties=allData[i].levelReached;
                    var gameMinTime=allData[i].timeSpendMilisenconds;
                    var gameinArray=false;

                    for(var n=0; n<labels.length; n++){
                        if(nombreJuego==labels[n]){
                            juegosPorVecesJugadasdata[n]++;
                            if(gameParties>juegosPorNivelMaximodata[n]){
                                juegosPorNivelMaximodata[n]=gameParties;
                            }
                            if(gameMinTime<juegosPorTiempoMinimodata[n]){
                                juegosPorTiempoMinimodata[n]=gameMinTime;
                            }
                            gameinArray=true;
                        }
                    }
                    if(!gameinArray){
                        labels.push(nombreJuego);
                        juegosPorVecesJugadasdata.push(1);
                        juegosPorNivelMaximodata.push(gameParties);
                        juegosPorTiempoMinimodata.push(gameMinTime);
                    }
                }


                //Juegos por veces jugadas
                $scope.juegosPorVecesJugadas=false;
                $scope.juegosPorVecesJugadasBtn=function(){
                    $scope.juegosPorVecesJugadas=!$scope.juegosPorVecesJugadas;
                };

                $scope.juegosPorVecesJugadaslabels = labels;
                $scope.juegosPorVecesJugadasdata = juegosPorVecesJugadasdata;

                //Juegos por nivel maximo

                $scope.juegosPorNivelMaximo=false;
                $scope.juegosPorNivelMaximoBtn=function(){
                    $scope.juegosPorNivelMaximo=!$scope.juegosPorNivelMaximo;
                };

                $scope.juegosPorNivelMaximolabels =labels;

                $scope.juegosPorNivelMaximodata =juegosPorNivelMaximodata;

                //Juegos por Tiempo Mínimo

                $scope.juegosPorTiempoMinimo=false;
                $scope.juegosPorTiempoMinimoBtn=function(){
                    $scope.juegosPorTiempoMinimo=!$scope.juegosPorTiempoMinimo;
                };

                for(var m=0; m<juegosPorTiempoMinimodata.length; m++){
                    juegosPorTiempoMinimodata[m]=juegosPorTiempoMinimodata[m]/1000;
                }

                $scope.juegosPorTiempoMinimolabels = labels;
                $scope.juegosPorTiempoMinimodata = juegosPorTiempoMinimodata;
                $scope.juegosPorTiempoMinimotype = 'polarArea';

                $scope.juegosPorTiempoMinimotoggle = function () {
                  $scope.juegosPorTiempoMinimotype = $scope.juegosPorTiempoMinimotype === 'polarArea' ?
                    'pie' : 'polarArea';
                };
                $scope.datosCargados=true;
            },
            //error
            function(error){
                $scope.juegosPorVecesJugadas=false;
                $scope.juegosPorNivelMaximo=false;
                $scope.juegosPorTiempoMinimo=false;
                $scope.datosCargados=false;
                alert("El paciente no se encuentra registrado");
            }
        );
    };
}]);
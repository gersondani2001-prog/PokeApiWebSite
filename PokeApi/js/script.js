/*codigo de javaScript*/ 


// *******************************************************************

/*
    codigo de javaScript
*/ 
console.log("Ejecutando js.")


// *******************************************************************

/*
    codigo de angular js
*/ 

var app = angular.module("app",[]);
app.controller("appCtrl",function($scope, $rootScope, $http){

    console.log("Ejecutando Angular js");


    // llamada de pokeapi tras el metodo de angular js de $http funcion especial

    $scope.pokedex = [];

    for(let i = 1; i <= 100; i++){
        $http({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon/" + i 
        }).then((response) => {
            $scope.pokedex.push(response);    
        })    
    }
    console.log($scope.pokedex);
});

// *******************************************************************

/*
    codigo de angular js
*/ 

$(document).ready(function(){

    console.log("Ejecutando Jquery js");

});

// *******************************************************************























'use strict';

/**
 * Déclaration de l'application routeApp
 */
var routeApp = angular.module('routeApp', [
    // Dépendances du "module"
    'ngRoute',
    'routeAppControllers'
]);

/**
 * Configuration du module principal : routeApp
 */
routeApp.config(['$routeProvider',
    function($routeProvider) { 
        
        // Système de routage
        $routeProvider
        .when('/home', {
            templateUrl: '../pages/home.html',
            controller: 'homeCtrl'
        })
        .when('/ranking', {
            templateUrl: '../pages/ranking.html',
            controller: 'rankingCtrl'
        })
		.when('/create', {
            templateUrl: '../pages/create_party.html',
            controller: 'createCtrl'
        })
		.when('/join', {
            templateUrl: '../pages/join_party.html',
            controller: 'joinCtrl'
        })
		.when('/connexion', {
            templateUrl: '../pages/connexion.html',
            //controller: 'connexionCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);

/**
 * Définition des contrôleurs
 */
var routeAppControllers = angular.module('routeAppControllers', []);

/**
 * Contrôleur de la page d'accueil
 */
routeAppControllers.controller('homeCtrl', ['$scope',
    function($scope){
       
    }
]);

/**
 * Contrôleur de la page de création d'une partie
 */
routeAppControllers.controller('createCtrl', ['$scope',
    function($scope){
        $scope.title = "Create a party";
    }
]);

/**
 * Contrôleur de la page rejoindre une partie
 */
routeAppControllers.controller('joinCtrl', ['$scope',
    function($scope){
        $scope.title = "Join a party";
    }
]);








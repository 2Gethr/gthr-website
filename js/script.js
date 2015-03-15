'use strict';

/**
 * D�claration de l'application routeApp
 */
var routeApp = angular.module('routeApp', [
    // D�pendances du "module"
    'ngRoute',
    'routeAppControllers',
	'satellizer'
]);

/**
 * Configuration du module principal : routeApp
 */
routeApp.config(['$routeProvider',
    function($routeProvider) { 
        
        // Syst�me de routage
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
 * D�finition des contr�leurs
 */
var routeAppControllers = angular.module('routeAppControllers', []);

/**
 * Contr�leur de la page d'accueil
 */
routeAppControllers.controller('homeCtrl', ['$scope',
    function($scope){
       
    }
]);

/**
 * Contr�leur de la page de cr�ation d'une partie
 */
routeAppControllers.controller('createCtrl', ['$scope',
    function($scope){
        $scope.title = "Create a party";
    }
]);

/**
 * Contr�leur de la page rejoindre une partie
 */
routeAppControllers.controller('joinCtrl', ['$scope',
    function($scope){
        $scope.title = "Join a party";
    }
]);

routeApp.config(function($authProvider) {


    $authProvider.google({
      clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com'
    });

    $authProvider.oauth2({
      name: 'foursquare',
      url: '/auth/foursquare',
      redirectUri: window.location.origin,
      clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
    });

  });








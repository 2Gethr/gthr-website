var app = angular.module('gthr', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      controller: 'Home',
      templateUrl: 'partials/home.html'
    })
    .state('lobby', {
      url: '/lobby',
      controller: 'Lobby',
      templateUrl: 'partials/lobby.html'
    });
    $urlRouterProvider.otherwise('/');
  }]
);

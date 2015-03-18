var app = angular.module('gthr', ['ui.router', 'angular-google-gapi']);

app.config(function($stateProvider, $urlRouterProvider) {
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
});

app.run(function(GApi, GAuth) {
  var BASE = '//localhost:9090/_ah/api';
  var CLIENT = '369418797387-k8osj5ul8p1l3hcg7t9vbna1i94jm8ui.apps.googleusercontent.com';

  GApi.load('gthr','v1', BASE);
  GAuth.setClient(CLIENT);
});

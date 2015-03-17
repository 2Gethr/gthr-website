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
  var BASE = 'https://mylazyclock.appspot.com/_ah/api';
  var CLIENT = '1072024627812-oh4jdt3mo6rihojkt480tqfsja2706b4.apps.googleusercontent.com';

  GApi.load('myLazyClock','v1', BASE);
  GApi.load('calendar','v3');

  GAuth.setClient(CLIENT);
});

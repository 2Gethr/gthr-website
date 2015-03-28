var app = angular.module('gthr', ['ui.router', 'angular-google-gapi', 'uiGmapgoogle-maps', 'geolocation']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('landing', {
      url: '/',
      controller: 'Landing',
      templateUrl: 'partials/landing.html'
    })
    $stateProvider
    .state('home', {
      url: '/home',
      controller: 'Home',
      templateUrl: 'partials/home.html'
    });
  $urlRouterProvider.otherwise('/');
});

app.run(function($rootScope, $state, GApi, GAuth) {
  var BASE = '//localhost:9090/_ah/api';
  var CLIENT = '369418797387-k8osj5ul8p1l3hcg7t9vbna1i94jm8ui.apps.googleusercontent.com';

  if(window.location.hostname != 'localhost') {
    BASE = 'https://to-gethr-api.appspot.com/_ah/api';
  }

  GApi.load('gthr','v1', BASE);
  GAuth.setClient(CLIENT);

  GAuth.checkAuth()
  .then(function() {
    $rootScope.user = $rootScope.gapi.user;
    //$state.go('home');
  }, function() {
    //$state.go('landing');
  });
});

app.config(function(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    v: '3.17',
    libraries: 'weather,geometry,visualization'
  });
})

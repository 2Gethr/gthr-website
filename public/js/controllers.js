app.controller('Landing', function($scope, $state, GAuth) {
  $scope.signIn = function() {
    GAuth.login().then(function() {
      $state.go('home');
    });
  };
});

app.controller('Home', function($rootScope, $scope, $state, GApi, GAuth) {

  GApi.executeAuth('gthr', 'users.create').then(function(res) {
    $rootScope.user.subscriptions = res.subscriptions;
    $rootScope.user.firstVisit = res.firstVisit;
  });

  $scope.logOut = function() {
    GAuth.logout().then(function() {
      $state.go('landing');
    })
  }
});

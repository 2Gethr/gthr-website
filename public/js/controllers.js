app.controller('Landing', function($scope, $state, GAuth) {
  $scope.signIn = function() {
    GAuth.login().then(function() {
      $state.go('home');
    });
  };
});

app.controller('Home', function($scope, $state, GApi, GAuth) {
  $scope.user = {};

  GApi.executeAuth('gthr', 'users.create').then(function(res) {
    $scope.user = res.result;
  });

  $scope.logOut = function() {
    GAuth.logout().then(function() {
      $state.go('landing');
    })
  }
});

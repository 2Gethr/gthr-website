app.controller('Landing', function($scope, $state, GAuth) {
  $scope.signIn = function() {
    GAuth.login().then(function() {
      $state.go('home');
    });
  };
});

app.controller('Home', function($rootScope, $scope, $state, GApi, GAuth, geolocation) {
  $scope.map = {center: {latitude: 45, longitude: -73}, zoom: 13};

  $scope.logOut = function() {
    GAuth.logout().then(function() {
      $state.go('landing');
    })
  }

  GApi.executeAuth('gthr', 'users.create').then(function(res) {
    $rootScope.user.subscriptions = res.subscriptions;
    $rootScope.user.firstVisit = res.firstVisit;
  });

  // Get user geolocation to update the map
  geolocation.getLocation().then(function(data) {
    $scope.map = {center: {latitude: data.coords.latitude, longitude: data.coords.longitude}, zoom: 13};
  });
});

app.controller('Landing', function($rootScope, $scope, $state, GAuth) {
  $scope.signIn = function() {
    GAuth.login().then(function() {
      $state.go('home');
      $rootScope.user = $rootScope.gapi.user;
    });
  };
});

app.controller('Home', function($rootScope, $scope, $state, GApi, GAuth, geolocation) {
  $scope.mapOptions = {disableDefaultUI: true};
  $scope.locations = [];
  $scope.ready = false;

  /**
   * Log out the user
   */
  $scope.logOut = function() {
    GAuth.logout().then(function() {
      $state.go('landing');
    })
  }

  /**
   * Subscribe the user to the given location
   */
  $scope.subscribe = function(locationId) {
    GApi.executeAuth('gthr', 'users.subscribe', {locationId: locationId});
    $rootScope.user.subscriptions.push(_.find($scope.locations, {id: locationId}));
  }

  /**
   * Unsubscribe the user from the given location
   */
  $scope.unsubscribe = function(locationId) {
    GApi.executeAuth('gthr', 'users.unsubscribe', {locationId: locationId});
    $rootScope.user.subscriptions = _.filter($rootScope.user.subscriptions, function(n) {
      return n.id !== locationId;
    });
  }

  /**
   * Check if the user is subscribed to the given location
   */
  $scope.isSubscribeTo = function(locationId) {
    var x = _.find($scope.user.subscriptions, {id: locationId});

    if (x) return true;
    return false;
  }

  GApi.executeAuth('gthr', 'users.create').then(function(res) {
    GApi.executeAuth('gthr', 'users.subscriptions').then(function(res) {
      $rootScope.user.subscriptions = res.items || [];
      $scope.ready = true;
    });
    $rootScope.user.firstVisit = res.firstVisit;
  });

  GApi.executeAuth('gthr', 'locations.list').then(function(res) {
    $scope.locations = _.map(res.items, function(location) {
      var l = {
        id: location.id,
        latitude: location.lat,
        longitude: location.lng,
        name: location.name
      };

      l.map = {center: {latitude: location.lat, longitude: location.lng}, zoom: 15};

      return l;
    });
  });

  // Get user geolocation to update the map
  //geolocation.getLocation().then(function(data) {
    //$scope.map = {center: {latitude: data.coords.latitude, longitude: data.coords.longitude}, zoom: 15};
  //});
});

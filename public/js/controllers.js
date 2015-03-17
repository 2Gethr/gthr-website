app.controller('Home', function($scope, $state, GApi, GAuth) {
  GAuth.login();
  GApi.executeAuth('myLazyClock', 'alarmClock.list').then(function(resp) {
    $scope.clocks = resp.items;
  });
});

app.controller('Lobby', function($scope, $state, GApi) {

});

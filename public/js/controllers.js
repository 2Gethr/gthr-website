app.controller('Home', function($scope, $state, GApi, GAuth) {
  // Go GApi go !
  GApi.execute('gthr', 'users.get', {name: 'Mireille'}).then(function(res) {
    $scope.users = res.result;
  });
});

app.controller('Lobby', function($scope, $state, GApi) {

});

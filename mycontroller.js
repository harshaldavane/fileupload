var app = angular.module('myapp',[]);
app.controller('myctrl', function($scope, $http){
    var destinations;
    $http.get('http://localhost:5500/myfile.json')
    .then(function (response){
      console.log(response.data.destinations[0]);
      $scope.title = response.data.destinations[0];
      $scope.records = response.data.destinations[1];
      $scope.recordsTwo = response.data.destinations[2];
      $scope.recordsThree = response.data.destinations[3];
      $scope.recordsFour = response.data.destinations[4];
      $scope.recordsFive = response.data.destinations[5];
      $scope.recordsSix = response.data.destinations[6];
      $scope.recordsSeven = response.data.destinations[7];
      $scope.recordsEight = response.data.destinations[8];
     
      console.log(response.data.destinations)
    }, function errorCall(response){
        console.log("Unable to preform get request");
    })

});
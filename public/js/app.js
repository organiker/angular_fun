function MyCtrl($scope, $http) {
  
  $http.get("/items.json").success(function(data) {
    // console.log(data);
    $scope.items = data;
  });

  $scope.addItem = function() {
    $scope.items.push({name: $scope.newItem, rating: $scope.newRating});
    // push new data back to backend
    $http.post("/items", {name: $scope.newItem, rating: $scope.newRating}).
      success(function(d) { 
        console.log("success");
      });
  }
}
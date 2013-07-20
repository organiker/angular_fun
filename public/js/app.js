function MyCtrl($scope) {
  $scope.myVariable = "hello MIT";
  $scope.showHidden = false;

  $scope.items = [
    {name: "Banana", rating: 3},
    {name: "Vanilla", rating: 5},
    {name: "Strawberry", rating: 7},
    {name: "Rum Raisin", rating: 2}
  ];

  $scope.doMagic = function() {
    console.log("test!");
    $scope.myVariable = "BOO!";
    $scope.showHidden = true;
  }
}

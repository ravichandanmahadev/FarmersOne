angular.module("root", [])
    .controller("HeaderController", ["$scope", function ($scope) {      
        $scope.menuItem = [{ item: "Menu Item1" }, { item: "Menu Item2" }, { item: "Menu Item3" }, { item: "Menu Item4" }, { item: "Menu Item5" }];
        $scope.BrandText = " MOBIRD FARMS CALIFORNIA";
    }]);
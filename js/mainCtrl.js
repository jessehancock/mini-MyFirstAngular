angular.module("friendsList").controller("mainCtrl", function($scope){
    
    $scope.name = "JMoney";
    
    $scope.friends = ["John", "Dave", "Jill"];
    
    $scope.addFriend = function(){
        $scope.friends.push($scope.newFriend)
        
        $scope.newFriend = "";
    }
})

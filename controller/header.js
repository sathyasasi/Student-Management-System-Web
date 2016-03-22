/**
 * Created by bala on 07-Jan-16.
 */

app.controller('headerController', ['$scope', '$location','$rootScope', function($scope, $location, $rootScope){
    $scope.isActive = function (page) {
        return page == $location.path();
    }

}]);

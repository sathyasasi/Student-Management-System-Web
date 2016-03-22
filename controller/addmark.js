
app.controller('addmarkController', function($scope, $window){
  //var sn = document.getElementById("semName");
  $scope.add = function(){
    if(typeof ($scope.studentId) == "undefined" || $scope.studentId == ""){
      $window.alert("please enter studentId");
      return;
    }
    else if(typeof ($scope.deptId) == "undefined" || $scope.deptId == ""){
      $window.alert("please enter depId");
      return;
    }
    else if(typeof ($scope.semName) == "undefined" || $scope.semName == ""){
      $window.alert("please select semName");
      return;
    }
    else if(typeof ($scope.semType) == "undefined" || $scope.semType == ""){
      $window.alert("please select semType");
      return;
    }
    else if(typeof ($scope.subName) == "undefined" || $scope.subName == ""){
      $window.alert("please enter subName");
      return;
    }
    else if(typeof ($scope.subMark) == "undefined" || $scope.subMark == ""){
      $window.alert("please enter submark");
      return;
    }
    else if(typeof ($scope.attendance) == "undefined" || $scope.attendance == ""){
      $window.alert("please enter attendance");
      return;
    }
    else if(typeof ($scope.result) == "undefined" || $scope.result == ""){
      $window.alert("please enter result");
      return;
    }
    else if(typeof ($scope.percentage) == "undefined" || $scope.percentage == ""){
      $window.alert("please enter percentage");
      return;
    }
    $window.alert("hello"+ "\t" +$scope.studentId +"\t"+ "details");
  }
});

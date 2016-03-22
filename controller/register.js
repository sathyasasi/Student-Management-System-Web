app.controller('registerController', function($scope,$window){
  $scope.register =  function(){
    if(typeof ($scope.Name) == "undefined" || $scope.Name == ""){
      $window.alert("please Enter Your Name");
      return;
    }
    else if(typeof ($scope.id) == "undefined" || $scope.id == ""){
      $window.alert("please Enter your  Id");
      return;
    }
    else if(typeof ($scope.email) == "undefined" || $scope.email == ""){
      $window.alert("please Enter the email");
      return;
    }
    else if(typeof ($scope.phone) == "undefined" || $scope.phone == ""){
      $window.alert("please Enter the password");
    }
    else if(typeof ($scope.password) == "undefined" || $scope.password == ""){
      $window.alert("please Enter your the password")
    }
    $window.alert("hello");
  }
})

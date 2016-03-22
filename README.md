# Student-Management-System-Web
success(function (data){
  $scope.status = "The Person saved successfully!!!";
})
.error(function (error){
  $scope.status = 'Unable to create the user'+error.message
});




        $scope.user = {};
        $scope.save = function (user) {
            $http.post('/api/addmark', record).
                success(function(data) {
                    // take action based off which submit button pressed
                });
        }


        <input type="email" name="userPhoneNumber" ng-model="phoneNumber"
               ng-pattern="/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/"
               required/>

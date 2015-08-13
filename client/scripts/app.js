var myApp = angular.module('myApp', []); // [] dependency injection. Sparates priorities, like a router.

// $scope is the key that connects variables in an ng-controller to the html.
// It's handy because $scopes declared within a controller are only available to the html areas that use that controller.
// Sometimes, you'll need to change their contents. You do so by reiterating $scope....
// $rootScope is a way to set a global scope. It's dangerous, rarely used.
myApp.controller("WelcomeController", ['$scope', '$http', function($scope, $http){
    $scope.note = {};

    $scope.heading = "Here is your message: ";

    $scope.getData = function(){
        // GET
        // below is where it said data.data. Joel had me change it to 'response' which helped.
        // Response sends back
        $http.get('/data').then(function(response){
            $scope.messages = response.data;
            console.log($scope.messages);
        });
    };

    //this is the ajax version.
    /*$.ajax({
        url: "/data",
        success: function(data){
            console.log(data);
        }
    });*/

    $scope.updateMessage = function(note){
      /*$scope.message = "Hello " + $scope.name + "!";*/
        //POST
        // $scope.note would work, btu this way it's modular. We can reuse this function with note.
        console.log(note);
        $http.post('/data', note).then($scope.getData());
    };
    // note location of ] below.
}]);
app
    .controller('HomeCtrl', function($scope, $window, $rootScope, $auth) {

        $scope.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };

        $scope.linkInstagram = function() {
            $auth.link('instagram')
                .then(function(response) {
                    $window.localStorage.currentUser = JSON.stringify(response.data.user);
                    $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
                });
        };

    });
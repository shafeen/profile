angular.module('basicMEAN')
.component('navbar', {
    templateUrl: '/partials/navbar/navbar',
    controller: "NavbarCtrl as navbar",
    bindings: {
    }
})
.controller('NavbarCtrl', ['$scope', '$http', '$location', '$window', '$timeout', function ($scope, $http, $location, $window, $timeout) {
    const navbar = this;

    navbar.data = {
        left : {
            public: [
                {
                    path: { primary: '/profile', alt: '/'},
                    displayName: 'Profile'
                },
                {
                    path: { primary: '/showcase'},
                    displayName: 'Showcase'
                }

            ],
            protected: []
        }
        ,
        right : {
            public : [],
            protected: []
        }
    };

    navbar.$location = $location;

    $scope.$on('$locationChangeStart', function (e) {
        navbar.loading = true;
    });
    $scope.$on('$locationChangeSuccess', function (e) {
        navbar.loading = false;
    });

}]);
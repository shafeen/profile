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

    function isValidEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    navbar.clicked = function () {
        console.log('test click!');
    };
}]);
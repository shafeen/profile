angular.module('basicMEAN')
    .component('aboutMe', {
        templateUrl: '/partials/view-profile/about-me',
        bindings: {},
        controller: 'AboutMeController'
    })
    .controller('AboutMeController', [function () {
        const ctrl = this;

    }]);
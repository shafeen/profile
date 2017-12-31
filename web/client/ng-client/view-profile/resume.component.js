angular.module('basicMEAN')
    .component('resume', {
        templateUrl: '/partials/view-profile/resume',
        bindings: {
            resumeData: '<'
        },
        controller: 'ResumeController'
    })
    .controller('ResumeController', [function () {
        const ctrl = this;
    }]);
angular.module('basicMEAN')
    .component('resume', {
        templateUrl: '/partials/view-profile/resume',
        bindings: {},
        controller: 'ResumeController'
    })
    .controller('ResumeController', [function () {
        const ctrl = this;

        ctrl.data = {};
        ctrl.data.workExperience = [
            {
                badgeClass: 'warning',
                badgeIconClass: 'glyphicon-briefcase',
                title: 'Senior Engineer',
                company: 'The Acme Group',
                dates: 'April 2014 - Present',
                content: 'This is what I do here.'
            },
            {
                badgeClass: 'info',
                badgeIconClass: 'glyphicon-briefcase',
                title: 'Engineer',
                company: 'The Acme Group',
                dates: 'April 2013 - March 2014',
                content: 'This is what I did there.'
            },
            {
                badgeClass: 'info',
                badgeIconClass: 'glyphicon-briefcase',
                title: 'Associate Engineer',
                company: 'The Acme Group',
                dates: 'April 2012 - March 2013',
                content: 'This is what I did there.'
            },
            {
                badgeClass: 'info',
                badgeIconClass: 'glyphicon-briefcase',
                title: 'Instructional Aide',
                company: 'The Acme Group',
                dates: 'April 2011 - March 2012',
                content: 'This is what I did there.'
            },
        ];
        ctrl.data.education = {
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-education',
            college: 'Univerity of Michigan',
            location: 'Ann Arbor, MI',
            graduated: 'May 2014',
            degree: 'Bachelor of Arts & Sciences',
        }

    }]);
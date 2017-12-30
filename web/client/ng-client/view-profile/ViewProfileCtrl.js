angular.module('basicMEAN')
.controller('ViewProfileCtrl', ['Settings', function (Settings) {
    let ctrl = this;

    ctrl.data = {
        navPills: [
            { displayName: "About Me" },
            { displayName: "My Resume" }
        ],
        activeNavPillIndex: '0'
    };

    ctrl.message = 'This is some more text relevant to view 1, but is stored in the View1Ctrl.';

    ctrl.setNavPill = function (index) {
        ctrl.data.activeNavPillIndex = index;
    };

    ctrl.$onInit = function () {
        Settings.init.then(function () {
            ctrl.message = Settings.data.view1Msg;
        })
    };

    ctrl.$onInit();
}]);
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

    ctrl.setNavPill = function (index) {
        ctrl.data.activeNavPillIndex = index;
    };

    ctrl.$onInit = function () {
        Settings.init.then(function (settingsData) {
            ctrl.resumeData = settingsData.profileView.resume;
            // console.log(Settings.data.profileView);
        })
    };

    ctrl.$onInit();
}]);
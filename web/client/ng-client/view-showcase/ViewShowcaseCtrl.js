angular.module('basicMEAN')
.controller('ViewShowcaseCtrl', ['Settings', function (Settings) {
    let self = this;

    self.message = 'This is some more text relevant to view 2, but is stored in the View2Ctrl.';

    self.$onInit = function () {
        Settings.init.then(function (settingsData) {
            self.message = settingsData.view2Msg;
            self.showcaseData = settingsData.showcaseView;
        })
    };

    self.$onInit();
}]);
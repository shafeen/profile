angular.module('basicMEAN', ["ngRoute", "angular-timeline"])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/view-profile/view-profile",
            controller: "ViewProfileCtrl as $ctrl"
        })
        .when("/profile", {
            templateUrl: "partials/view-profile/view-profile",
            controller: "ViewProfileCtrl as $ctrl"
        })
        .when("/showcase", {
            templateUrl: "partials/view-showcase/view-showcase",
            controller: "ViewShowcaseCtrl as $ctrl"
        })
        .when("/search", {
            templateUrl: "partials/view-search/view-search",
            controller: "ViewSearchCtrl as $ctrl"
        });
}]);

/*
To add a new view, follow these steps:
  - create a folder for the view in ng-client OR ng-client-protected
  - create a template .pug file for the view
  - create a controller for the view
  - preload the controller's js file in layout.pug
  - add a route for the view in the config above 
  - have a link to your view available somewhere
*/
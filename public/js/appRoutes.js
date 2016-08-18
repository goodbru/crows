// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // schedule page that will use the ScheduleController
        .when('/schedules', {
            templateUrl: 'views/schedule.html',
            controller: 'ScheduleController'
        });

    $locationProvider.html5Mode(true);

}]);
'use strict';

angular.module('hshs', [
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'toaster',
    'angularUtils.directives.dirPagination',
    'ui.mask'
]).
    constant(
    'baseUrl', 'http://data-fyp.nodefu.net/api/'
).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {templateUrl: 'views/pages/home.html'})
            .when('/about', {templateUrl: 'views/pages/about.html'})
            .when('/show', {templateUrl: 'views/pages/show.html'})
            .when('/show/:showId', {templateUrl: 'views/pages/show-detail.html'})
            .when('/blogs', {templateUrl: 'views/pages/blogs.html'})
            .when('/press', {templateUrl: 'views/pages/press.html'})
            .when('/press/:pressId', {templateUrl: 'views/pages/press-detail.html'})
            .otherwise({redirectTo: '/'});
    }]).run([
        '$rootScope',
        '$location',

        function ($rootScope, $location) {
        }
    ]);


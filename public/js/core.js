var hypatiaApp = angular.module('hypatiaApp', ['ui.router']);


hypatiaApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'view/home.html'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'view/about.html'
        });

});
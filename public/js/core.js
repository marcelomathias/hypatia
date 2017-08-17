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
        })
        
        .state('cadastroPessoas', {
            url: '/cadastro/pessoas',
            templateUrl: 'view/pessoas.html'
        })

        .state('cadastroNovaPessoa', {
            url: '/cadastro/pessoa/nova',
            templateUrl: 'view/pessoa.html'
        })


        .state('cadastroPessoa', {
            url: '/cadastro/pessoa/:id',
            templateUrl: 'view/pessoa.html'
        })
        ;

});
var app = angular.module('myApp', ['ngRoute', 'ngMessages', 'satellizer'])
    .config(function($routeProvider, $authProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'SignupCtrl'
            })
            .when('/photo/:id', {
                templateUrl: 'views/detail.html',
                controller: 'DetailCtrl'
            })
            .otherwise('/');
        $authProvider.loginUrl = 'http://localhost:3000/auth/login';
        $authProvider.signupUrl = 'http://localhost:3000/auth/signup';
        $authProvider.oauth2({
            name: 'instagram',
            url: 'http://localhost:3000/auth/instagram',
            redirectUri: 'http://localhost:8000',
            clientId: '89c470e1785c472db0e9d5ee4f2bab27',
            requiredUrlParams: ['scope'],
            scope: ['likes', 'comments', 'public_content', 'follower_list', 'relationships'],
            scopeDelimiter: '+',
            authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
        });
    });
//{"Token":"ef74eefc6cc08be98b10d3b6cfe15cdafbdf5457","Gist":"33eb5dbab9dd725e5e89393c4f4ec0ea"}
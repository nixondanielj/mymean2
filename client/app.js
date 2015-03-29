(function(angular, config){
    var app = angular.module(config.appName, ['ngRoute', 'ngResource']);
    
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: '/views/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        }).otherwise({
            redirectTo: '/'
        });
    }]);
})(window.angular, window.config);
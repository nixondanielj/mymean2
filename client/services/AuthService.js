(function(angular, config){
    angular.module(config.appName).service('AuthService',
    ['$http', 
    function($http){
        var svc = {};
        svc.signin = function(email, password){
            return $http.post('/login', { email: email, password: password });
        };
        return svc;
    }]);
});
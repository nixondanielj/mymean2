(function(angular, config){
    angular.module(config.appName).service('AuthService',
    ['$http', 
    function($http){
        var svc = {};
        svc.signin = function(email, password){
            return $http.post('/auth', { email: email, password: password });
        };
        svc.check = function(){
            return $http.get('/auth');
        };
        return svc;
    }]);
})(window.angular, window.config);
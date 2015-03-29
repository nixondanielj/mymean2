(function(angular, config){
    angular.module(config.appName).service('UserService', 
    ['$resource', 
    function($resource){
        var svc = $resource('/user');
        return svc;
    }]);
})(window.angular, window.config);
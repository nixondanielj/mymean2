(function(angular, config){
    angular.module(config.appName).controller('HomeController', 
    ['UserService', 'AuthService',
    function(User, authSvc){
        this.signin = function(email, password){
            authSvc.signin(email, password)
                .then(function(){
                    alert('sign in successful');
                }, function(){
                    alert('sign in failed');
                });
        };
        this.register = function(email, password){
            new User({ email: email, password: password })
                .$save()
                .then(function(){
                    alert('successfully created ' + email);
                }, function(){
                    alert('failed to create ' + email);
                });
        };
    }]);
})(window.angular, window.config);
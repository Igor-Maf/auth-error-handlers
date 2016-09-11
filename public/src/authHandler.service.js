(function() {
    'use strict';

    authHandler.$inject = ['username', 'pass'];

    function authHandler(username, pass) {
        return {
            'request': function(config) {
                config.headers['Auth'] = 'Basic' + window.btoa(username + pass);
                config.headers['Accept'] = 'application/json';

                return config;
            }
        }
    }

    angular.module('myApp')
        .factory('authHandler', authHandler);

})();
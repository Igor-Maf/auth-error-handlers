(function() {
    'use strict';

    angular.module('myApp', [
        'ngResource'
    ])
        .value('username', 'Ihor')
        .value('pass', '1608')
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.interceptors.push('errorHandler');
            $httpProvider.interceptors.push('authHandler');
        }]);

})();
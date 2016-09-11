(function() {
    'use strict';

    errorHandler.$inject = ['$q'];

    function errorHandler($q) {
        return {
            'response': function(response) {
                console.log(response);
                return response;
            },
            'responseError': function(rejection) {
                console.log(rejection.status);

                if (rejection.status == 404) {
                    console.log('404 page');
                } else if (rejection.status == 403) {
                    console.log('403 page: authetification')
                }

                return $q.reject(rejection);
            }
        }
    }

    angular.module('myApp')
        .factory('errorHandler', errorHandler);

})();

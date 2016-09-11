(function() {
    'use strict';

    dataService.$inject = [/* '$http', */ '$resource'];

    function dataService(/* $http, */$resource) {
        return $resource('/languages/:id'); // если будет не languages, то errorHandler обработает 404

        // var languages = [];

        // function getLanguages() {
        //     return $http.get('/languages')
        //         .then(function(response) {
        //             languages = response.data;
        //
        //             return languages;
        //         });
        // }
        //
        // return {
        //     getLanguages: getLanguages
        // }
    }

    angular.module('myApp')
        .factory('dataService', dataService);

})();
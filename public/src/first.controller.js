(function() {
    'use strict';

    function firstCtrl(dataService) {
        var vm = this;

        vm.languages = [];
        vm.currentLanguage = {};

        function init() {
            dataService.query(function(response) {
                vm.languages = response;
            });

            // dataService.get({id: 1}, function(response) {
            //     console.log(response);
            //     // vm.currentLanguage = response;
            // });

            // dataService.getLanguages().then(function(response) {
            //      vm.languages = response;
            // });
        }

        init();
    }

    angular.module('myApp')
        .controller('firstCtrl', firstCtrl);

})();
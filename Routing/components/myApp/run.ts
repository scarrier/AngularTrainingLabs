module myApp {
    'use strict';
    class Run {
        
        static $inject = ['$routeParams', '$rootScope'];
        constructor($routeParams, $rootScope) {
            $rootScope.$routeParams = $routeParams;
        }
    }

    angular.module('myApp').run(Run);
}
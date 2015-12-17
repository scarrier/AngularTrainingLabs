module myApp{
    'use strict'; 
       
    class Run{
        static $inject:Array<string> = ['$stateParams', '$rootScope'];

        constructor($stateParams, $rootScope) {
            $rootScope.$stateParams = $stateParams;
        }
    }
    angular.module('myApp').run(Run);
};
/// <reference path="../../typings/angularjs/angular.d.ts" />
module myApp{
    'use strict';
    
    export class Constructor {
        static $inject = ['$scope'];
        constructor(private $scope) {

        }
    }
    angular
            .module('myApp')
            .controller('myCtrl', Constructor);
}
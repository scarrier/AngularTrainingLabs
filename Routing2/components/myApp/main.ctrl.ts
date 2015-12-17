
(function(){
    'use strict';
    
    angular
            .module('myApp')
            .controller('main', Main);
    
    Main.$inject = ['$scope', '$stateParams'];
    function Main($scope, $stateParams) {
        console.log($stateParams);
        console.log('State loaded');
    }
    
})();
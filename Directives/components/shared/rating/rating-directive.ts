'use strict';

module shared {
    export function rating(): ng.IDirective {

        var directive: ng.IDirective = {
            restrict: 'E',
            replace: true,
            scope: {
                ratingValue: '=',
                ratingMax: '@'
            },
            templateUrl: "components/shared/rating/rating.html",
            controller: "RatingCtrl"
            //controllerAs: "vm",
            //bindToController: true
        };
        return directive;
    }

    angular.module('shared').directive('rating', () => rating);
}
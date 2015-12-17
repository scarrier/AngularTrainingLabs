'use strict';

module shared {
    export class RatingDirective implements ng.IDirective {

            restrict = 'E';
            replace = true;
            scope = {
                ratingValue: '=',
                ratingMax: '@'
            };
            templateUrl = "components/shared/rating/rating.html";
            controller = "RatingCtrl";
            controllerAs = "vm";
            bindToController = true;
    }

    angular.module('shared').directive('rating', () => new RatingDirective());
}
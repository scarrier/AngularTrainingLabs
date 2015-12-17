'use strict';

module shared {
    export class RatingCtrl {

        ratingMax: number;
        stars: Array<boolean>;
        ratingValue: number;
        static $inject: Array<string> = ['$scope'];
        constructor(private $scope: ng.IScope) {

            $scope.$watch<number>('vm.ratingValue', (value) => {
                this.updateValue(<any>value);
            });
        }

        updateValue(value: number) {
            this.stars = [];

            for (var i = 0; i < this.ratingMax; i++) {
                this.stars.push(i < value);
            }
        }

    }

    angular.module('shared').controller('RatingCtrl', RatingCtrl);
}
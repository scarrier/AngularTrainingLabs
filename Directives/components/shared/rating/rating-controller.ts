'use strict';

module shared {
    export class RatingCtrl {

        static $inject: Array<string> = ['$scope'];
        constructor(private  $scope: ng.IScope) {
            var max: number = $scope['ratingMax'],
                value: number = $scope['ratingValue'];


            $scope['updateValue'] = (value, update) => {
                var stars: Array<boolean> = [];

                for (var i = 0; i < max; i++) {
                    stars.push(i < value);
                }
                $scope['stars'] = stars;
                if (update) {
                    $scope['ratingValue'] = value;
                }
            }        
        }
    }

    angular.module('shared').controller('RatingCtrl', RatingCtrl);
}
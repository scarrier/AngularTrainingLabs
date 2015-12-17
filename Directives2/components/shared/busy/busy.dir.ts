'use strict';

module shared {

    interface BusyAttributes extends ng.IAttributes {
        busyMessage: string;
        busyBehavior: string;
        busyWhen: string;
    }

    export class BusyDirective implements ng.IDirective {

        restrict = 'E';
        replace = true;
        scope = {
            isBusy: '=busyWhen',
            behavior: '@busyBehavior',
            message: '@busyMessage'
        };
        templateUrl = "components/shared/busy/busy.html";
        transclude = true;
        compile = ($element: ng.IAugmentedJQuery, $attributes: BusyAttributes) => {
            $attributes.busyMessage = $attributes.busyMessage || 'Please wait...';

            var behaviors = ['visible', 'hidden', 'no-display'];
            $attributes.busyBehavior = $attributes.busyBehavior || behaviors[0];

            if (!$attributes.busyWhen) {
                throw "busy-when required";
            }

            if (behaviors.indexOf($attributes.busyBehavior) < 0) {
                throw "busy-behavior value not valid";
            }

            return {};
        };
    }

    angular.module('shared').directive('busy', () => new BusyDirective());
}
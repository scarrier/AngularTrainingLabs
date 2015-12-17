module store {
    'use strict';

    export class Config {
        static $inject: Array<string> = ['$stateProvider', 'ROUTE_MAP'];

        constructor($stateProvider: angular.ui.IStateProvider, ROUTE_MAP: Array<RouteConfig>) {
            for (var i = 0; i < ROUTE_MAP.length; i++) {
                var mapping = ROUTE_MAP[i];
                $stateProvider.state(mapping.state, mapping.config);
            }
        }
    }

    angular.module('store').config(Config);
}
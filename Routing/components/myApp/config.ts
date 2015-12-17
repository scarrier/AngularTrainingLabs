module myApp {
    'use strict';

    export class Config {
        static $inject: Array<string> = ['$routeProvider', 'ROUTE_MAP'];

        constructor($routeProvider: angular.route.IRouteProvider, ROUTE_MAP: RouteMap) {
            for (var i = 0; i < ROUTE_MAP.when.length; i++) {
                var mapping = ROUTE_MAP.when[i];
                $routeProvider.when(mapping.route, mapping.config);
            }

            $routeProvider.otherwise(ROUTE_MAP.otherwise);
        }
    }

    angular.module('myApp').config(Config);
}
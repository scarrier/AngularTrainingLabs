/// <reference path="../../typings/angularjs/angular-route.d.ts" />
module myApp {
    'use strict';

    export class RouteMap {
        when: Array<RouteConfig>;
        otherwise: angular.route.IRoute;
    }

    export class RouteConfig {
        route: string;
        config: angular.route.IRoute;
    }

    var routeMap: RouteMap = {
        when: [
            {
                route: '/',
                config: {
                    redirectTo: '/v1'
                }  
            },
            {
                route: '/:view/specific',
                config: {
                    controller: 'myCtrl',
                    templateUrl: 'components/myApp/specificView.html'
                }
            },
            {
                route: '/v1/:recordId?',
                config: {
                    controller: 'myCtrl',
                    templateUrl: 'components/myApp/view1.html'
                }
            },
            {
                route: '/v2/:recordId?',
                config: {
                    controller: 'myCtrl',
                    templateUrl: 'components/myApp/view2.html'
                }
            },
            {
                route: '/v3/:recordId?',
                config: {
                    controller: 'myCtrl',
                    templateUrl: 'components/myApp/view3.html'
                }
            }
        ],
        otherwise: {
            
        }
    };

    angular.module('myApp').constant('ROUTE_MAP', routeMap);
}
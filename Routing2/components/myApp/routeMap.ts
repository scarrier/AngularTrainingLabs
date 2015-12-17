
module myApp {
    'use strict';

    export class RouteConfig {
        state: string;
        config: angular.ui.IState;
    }

    var routeMap: Array<RouteConfig> = [
        {
            state: 'landing',
            config: {
                url: '/',
                views: {
                    'main': {
                        templateUrl: 'components/myApp/landing.html',
                        controller: 'main'
                    },
                    'side': {
                        templateUrl: 'components/myApp/sideForLanding.html',
                        controller: 'side'
                    }
                }
            }
        },
        {
            state: 'v1',
            config: {
                url: '/v1/:recordId?',
                views: {
                    'main': {
                        templateUrl: 'components/myApp/view1.html',
                        controller: 'main'
                    },
                    'side': {
                        templateUrl: 'components/myApp/sideForView1.html',
                        controller: 'side'
                    }
                }
            }
        },
        {
            state: 'v2',
            config: {
                url: '/v2/:recordId',
                views: {
                    'main': {
                        templateUrl: 'components/myApp/view2.html',
                        controller: 'main'
                    },
                    'side': {
                        templateUrl: 'components/myApp/sideForView2.html',
                        controller: 'side'
                    }
                }
            }
        }
    ];

    angular
        .module('myApp')
        .constant('ROUTE_MAP', routeMap);
}
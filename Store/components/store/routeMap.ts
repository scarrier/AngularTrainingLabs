
module store{
    'use strict';

    export class RouteConfig {
        state: string;
        config: angular.ui.IState;
    }

    var header = {
        templateUrl: 'components/store/header/header.html',
        controller: 'header as header'
    };

    var aside = {
        templateUrl: 'components/store/aside/aside.html',
        controller: 'aside as aside'
    };

    var landing = {
        templateUrl: 'components/store/main/landing/landing.html'
    };

    var itemDetail = {
        templateUrl: 'components/store/main/itemDetail/itemDetail.html',
        controller: 'itemDetail as itemDetail'
    };

    var cart = {
        templateUrl: 'components/store/main/cart/cart.html',
        controller: 'cart as cart'
    };

    var checkout = {
        templateUrl: 'components/store/main/checkout/checkout.html',
        controller: 'checkout as checkout'
    };

    function view(mainView: any): any {

        return {
            'aside': aside,
            'header': header,
            'main' : mainView
        }
    }

    var routeMap: Array<RouteConfig> = [
        {
            state: 'landing',
            config: {
                url: '/',
                views: view(landing)
            }
        },
        {
            state: 'cart',
            config: {
                url: '/cart',
                views: view(cart)
            }
        },
        {
            state: 'itemDetail',
            config: {
                url: '/item/:itemId',
                views: view(itemDetail)
            }
        },
        {
            state: 'checkout',
            config: {
                url: '/checkout',
                views: view(checkout)
            }
        }
    ];
 
    
    angular
            .module('store')
            .constant("ROUTE_MAP", routeMap);
    
}
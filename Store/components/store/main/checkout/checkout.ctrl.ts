module store {
    'use strict';


    class Checkout {

        static $inject: Array<string> = ['cartManager', '$state', '$window'];
        user: any;
        constructor(private cartManager: CartManager, private $state: angular.ui.IStateService, private $window: angular.IWindowService) {
            this.user = {};
        }

        checkout() {
            this.$window.alert('Checkout successful');
            this.cartManager.clearCart();
            this.$state.go('landing');
        }
    }

    angular
        .module('store')
        .controller('checkout', Checkout);
}
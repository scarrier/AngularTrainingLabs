module store {
    'use strict';


    class Header {

        static $inject: Array<string> = ['cartManager'];
        constructor(private cartManager: CartManager) {

        }
        
        getCartCount() {
            return this.cartManager.getCartCount();
        }

    }

    angular
        .module('store')
        .controller('header', Header);
}
module store {
    'use strict';


    class Cart {

        total: number;
        cart:CartItem[];
        static $inject: Array<string> = ['cartManager'];
        constructor(private cartManager: CartManager) {
            this.cart = this.cartManager.getCart();
        }

        updateQuantity(itemId: number, quantity: number) {
            this.cartManager.updateQuantity(itemId, quantity);
            this.total = this.cartManager.getCartTotal();
        }

        clearCart() {
            this.cartManager.clearCart();
        }
    }

    angular
        .module('store')
        .controller('cart', Cart);
}
module store {
    'use strict';

    export interface CartItem {
        item: Item;
        quantity: number;
        total: number;
    }

    export class CartManager {
        cart:Array<CartItem> = [];

        constructor() {

        }


        private getCartItemIndex(itemId: number): number {
            for (var i = 0, max = this.cart.length; i < max; i++) {
                if (this.cart[i].item.itemId === itemId) {
                    return i;
                }
            }
            return -1;
        }

        addToCart(item: Item, quantity: number): void {
            var index = this.getCartItemIndex(item.itemId);

            quantity = quantity || 1;

            if (index === -1) {
                this.cart.push({
                    item: item,
                    quantity: quantity,
                    total: item.price * quantity
                });
            } else {
                var cartItem = this.cart[index];
                cartItem.quantity += quantity;
                cartItem.total += (item.price * quantity);
            }
        };

        clearCart() {
            this.cart.length = 0;
        };

        updateQuantity(itemId: number, quantity: number) {
            var index = this.getCartItemIndex(itemId);

            if (index === -1) {
                throw "Item not in cart.";
            }

            if (quantity <= 0) {
                this.cart.splice(index, 1);
            } else {
                var cartItem = this.cart[index];
                cartItem.quantity = quantity;
                cartItem.total = (cartItem.item.price * quantity);
            }
        };

        getCart() {
            return this.cart;
        };

        getCartCount() {
            var count = 0;
            for (var i = 0, max = this.cart.length; i < max; i++) {
                count += this.cart[i].quantity;
            }
            return count;
        };

        getCartTotal() {
            var total = 0;
            for (var i = 0, max = this.cart.length; i < max; i++) {
                total += this.cart[i].total;
            }
            return total;
        };
    }


    angular
        .module('store')
        .service('cartManager', CartManager);
}
module store {
    'use strict';

    export interface Item {
        itemId: number,
        name: string,
        price: number
    }

    class ItemDetail {

        item: Item;
        loading: boolean;

        static $inject: Array<string> = ['$stateParams', 'itemRepo', 'cartManager', '$state'];
        constructor(private $stateParams: angular.ui.IStateParamsService, private itemRepo: ItemRepo, private cartManager: CartManager, private $state: angular.ui.IStateService) {
            this.loading = true;
            itemRepo.getItems().then(items => {
                var id = this.$stateParams['itemId'];
                for (var i = 0; i < items.length; i++) {
                    if (items[i].itemId.toString() === id) {
                        this.item = items[i];
                        this.loading = false;
                        return;
                    }
                }
                throw `Item with id ${id} not found`;
            });
        }

        addToCart(): void {
            this.cartManager.addToCart(this.item, 1);
        }

        goBack() {
            this.$state.go('landing');
        }
    }

    angular
        .module('store')
        .controller('itemDetail', ItemDetail);
}
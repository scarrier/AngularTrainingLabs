module store{
    'use strict';

    
    class Aside{

        static $inject: Array<string> = ['itemRepo'];
        items: Item[];

        constructor(private itemRepo: ItemRepo) {
            if (this.items === undefined || this.items.length === 0) {
                itemRepo.getItems().then(items => this.items = items);
            }
        }

    }    

    angular
        .module('store')
        .controller('aside', Aside);    
}
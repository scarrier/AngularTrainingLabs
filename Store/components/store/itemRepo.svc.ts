module store {
    'use strict';
    
    export class ItemRepo {
        items: Item[];
        static $inject: Array<string> = ['apiProxy'];
        constructor(private apiProxy: shared.IApiProxySvc) {
        }

        getItems(): ng.IPromise<Item[]> {
            var itemPromise = this.apiProxy.get('items.txt');
            return itemPromise;
        }
    }

    angular
        .module('store')
        .service('itemRepo', ItemRepo);
}
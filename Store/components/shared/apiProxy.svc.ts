'use strict';

module shared {
    export interface IApiProxySvc {
        get(url: string, params?: Object): ng.IPromise<any>;

        post(url: string, params?: Object, data?: Object): ng.IPromise<any>;

        put(url: string, params?: Object, data?: Object): ng.IPromise<any>;

        delete(url: string, params?: Object): ng.IPromise<any>;
    }

    class ApiProxySvc implements IApiProxySvc {

        static $inject: Array<string> = ['$http', '$q', '$timeout'];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private $timeout: ng.ITimeoutService) {

        }

        get(url: string, params?: Object): ng.IPromise<any> {
            return this.callHttp('GET', url, params);
        }

        post(url: string, params?: Object, data?: Object): ng.IPromise<any> {
            return this.callHttp('POST', url, params, data);
        }

        put(url: string, params?: Object, data?: Object): ng.IPromise<any> {
            return this.callHttp('PUT', url, params, data);
        }

        delete(url: string, params?: Object): ng.IPromise<any> {
            return this.callHttp('DELETE', url, params);
        }

        callHttp(method: string, url: string, params?: Object, data?: Object): ng.IPromise<any> {
            var task = this.$q.defer();

            var config: angular.IRequestConfig = {
                method: method,
                url: url,
                params: params,
                data: data
            }
            this.$timeout(500).then(() => {
                this.$http(config).then(
                    response => {
                        task.resolve(response.data);
                    },
                    () => {
                        alert('error');
                        task.reject();
                    }
                );
            });

            return task.promise;
        }

    }

    angular.module('shared').service('apiProxy', ApiProxySvc);
}

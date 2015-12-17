'use strict';

module shared {
    export interface IApiProxySvc {
        get(url: string, params?: Object): ng.IPromise<any>;

        post(url: string, params?: Object, data?: Object): ng.IPromise<any>;

        put(url: string, params?: Object, data?: Object): ng.IPromise<any>;

        delete(url: string, params?: Object): ng.IPromise<any>;
    }

    class ApiProxySvc implements IApiProxySvc {

        static $inject: Array<string> = ['$http', '$q'];

        constructor(private $http: angular.IHttpService, private $q: angular.IQService) {

        }

        get(url: string, params?: Object) {
            return this.callHttp('GET', url, params);
        }

        post(url: string, params?: Object, data?: Object) {
            return this.callHttp('POST', url, params, data);
        }

        put(url: string, params?: Object, data?: Object) {
            return this.callHttp('PUT', url, params, data);
        }

        delete(url: string, params?: Object) {
            return this.callHttp('DELETE', url, params);
        }

        callHttp(method: string, url: string, params?: Object, data?: Object) {
            var task = this.$q.defer();

            var config: angular.IRequestConfig = {
                method: method,
                url: url,
                params: params,
                data: data
            }
            this.$http(config).then(response => {
                    task.resolve(response);
                }
            ).then(() => {
                    alert('error');
                    task.reject();
                }
            );

            return task.promise;
        }

    }

    angular.module('shared').service('apiProxy', ApiProxySvc);
}

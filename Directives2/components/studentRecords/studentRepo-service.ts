'use strict';
class StudentRepository {

    static $inject: Array<string> = ['apiProxy'];

    constructor(private apiProxy: ApiProxy) {

    }

    getStudents(): angular.IPromise<Array<any>> {

        return this.apiProxy.get('students.json');
    }

    saveStudent(): void {
        
    }
}
angular.module('shared').service('studentRepo', StudentRepository);

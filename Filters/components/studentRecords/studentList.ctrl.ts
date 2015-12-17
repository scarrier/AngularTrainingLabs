/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="studentrecord.data.ts" />
'use strict';
class StudentList {


    static $inject: Array<string> = ['$scope'];

    constructor(private $scope: ng.IScope) {
        $scope['students'] = new StudentRecordData().data;
    }
}

angular.module('studentRecords').controller('studentList', StudentList);
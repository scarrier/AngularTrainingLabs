﻿/// <reference path="../../typings/angularjs/angular.d.ts" />
'use strict';

module StudentRecords {
    interface StudentScope extends ng.IScope {
        students: Array<any>;
    }

    class StudentList {


        static $inject: Array<string> = ['$scope', 'studentRepo'];

        constructor(private $scope: StudentScope, private studentRepo: IStudentRepoSvc) {

            studentRepo.getStudents().then(data => {
                    $scope['students'] = data;
                    $scope.students = data;
                }
            );
        }


        saveStudents() {
        }
    }

    angular.module('studentRecords').controller('studentList', StudentList);
}
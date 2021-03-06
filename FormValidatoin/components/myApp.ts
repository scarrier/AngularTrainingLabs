﻿/// <reference path="../typings/angularjs/angular.d.ts" />
var myApp = angular.module('myApp', ['ngMessages']);

class Department {
    constructor(private id: number, private name: string) {
    }
}

class PhoneNumber {
    constructor(private number: string, private type: string) {
    }
}

class User {
    name: string;
    email: string;
    phoneNumbers: Array<PhoneNumber>;
    departmentId: number;
}

class HelloWorldCtrl {
    static $inject: Array<string> = ['$scope'];

    constructor(private $scope: ng.IScope) {
        var user: User = new User();
        user.phoneNumbers = [new PhoneNumber('123-456-7890', 'cell'), new PhoneNumber('444-333-2223', 'home')];
        
        var depts: Array<Department> = [new Department(1, 'a'), new Department(2, 'b'), new Department(3, 'c'), new Department(4, 'd')];

        $scope['user'] = user;
        $scope['departments'] = depts;

        
    }
}

myApp.controller('helloWorld', HelloWorldCtrl);
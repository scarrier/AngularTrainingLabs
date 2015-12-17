'use strict';

module StudentRecords {
    export class Range {

        static $inject: Array<string> = [];

        static filter() {
            return (list: Array<any>, property: string, minValue: number, maxValue: number) => {
                if (list === undefined || list === null || list.length === 0) {
                    return list;
                }
                
                if (!property || !(property in list[0])) {
                    throw 'property name not valid';
                }

                var result = [];

                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    var value = item[property];
                    if ((minValue === undefined || minValue === null || value >= minValue) &&
                        (maxValue === undefined || maxValue === null ||value <= maxValue)) {
                        result.push(item);
                    }
                }

                return result;
            };
        }
    }
}

angular.module('shared').filter('range', StudentRecords.Range.filter);
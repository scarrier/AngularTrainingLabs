'use strict';

class AccountMask {

    static $inject: Array<string> = [];

    static filter() {
        return (value: string, visibleChars: number, placeholderChar: string) => {
            if (value === undefined || value === null) {
                return value;
            }

            visibleChars = visibleChars || 4;
            placeholderChar = placeholderChar || '*';

            var mask = '',
                maskLength = (value.length - visibleChars);
            for (var i = 0; i < maskLength; i++) {
                mask += placeholderChar;
            }

            return mask + value.substring(maskLength);
        };
    }
}

angular.module('shared').filter('accountMask', AccountMask.filter);
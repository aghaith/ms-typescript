"use strict";
exports.__esModule = true;
var addNumbers = function (x, y) {
    return x + y;
};
addNumbers(1, 2);
var total = function (input) {
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(total([1, 2, 3]));

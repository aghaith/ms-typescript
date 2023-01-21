"use strict";
exports.__esModule = true;
function addNumbers(x, y) {
    if (y === undefined) {
        return x;
    }
    else {
        return x + y;
    }
}
addNumbers(1, 2); // Returns 3
addNumbers(1); // Returns 1
var addThreeNumbers = function (x, y, z) {
    if ((z === undefined)) {
        return x + y;
    }
    else {
        return x + y + z;
    }
};
console.log(addThreeNumbers(10, 20));
console.log(addThreeNumbers(10, 20, 30));

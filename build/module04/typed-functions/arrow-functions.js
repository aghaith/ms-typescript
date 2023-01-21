"use strict";
// Anonymous function
let addNumbers1 = function (x, y) {
    return x + y;
};
// Arrow function
let addNumbers2 = (x, y) => x + y;
let total2 = (input) => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};

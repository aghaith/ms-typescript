"use strict";
function displayAlert(message) {
    console.log('The message is ' + message);
}
console.log(displayAlert('Hi there!'));
function sum(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
sum([1, 3, 4]);

"use strict";
exports.__esModule = true;
// let addNumbers: calculator = (x: number, y: number): number => x + y;
// let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
var addNumbers = function (num1, num2) { return num1 + num2; };
var subtractNumbers = function (x, y) { return x - y; };
console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));
var doCalculation = function (operation) {
    if (operation === 'add') {
        return addNumbers;
    }
    else {
        return subtractNumbers;
    }
};
console.log(doCalculation('add')(1, 2));

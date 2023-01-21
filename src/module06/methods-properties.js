"use strict";
exports.__esModule = true;
/*
function identity<T extends ValidTypes, U>(value: T, message: U): T {
    let result: T = value + value;    // Error
    console.log(message);
    return result
}
*/
function identity(value, message) {
    var result = '';
    var typeValue = typeof value;
    if (typeof value === 'number') { // Is it a number?
        result = value + value; // OK
    }
    else if (typeof value === 'string') { // Is it a string?
        result = value + value; // OK
    }
    console.log("The message is ".concat(message, " and the function returns a ").concat(typeValue, " value of ").concat(result));
    return result;
}
var returnNumber = identity(100, 'Hello!'); // OK
var returnString = identity('100', 'Hola!'); // OK
var returnBoolean = identity(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.
console.log('return number: ', returnNumber);
console.log('return string: ', returnString);
console.log('return boolean: ', returnBoolean);
var numberValue = identity(100, 'Hello');
var stringValue = identity('100', 'Hello');
console.log('number value: ', numberValue); // Returns 200
console.log('string value: ', stringValue); // Returns 100100
function getPets(pet, key) {
    return pet[key];
}
var pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
var pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };
console.log(getPets(pets1, "fish")); // Returns 6
console.log(getPets(pets2, "3")); // Error

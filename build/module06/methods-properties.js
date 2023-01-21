"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
function identity<T extends ValidTypes, U>(value: T, message: U): T {
    let result: T = value + value;    // Error
    console.log(message);
    return result
}
*/
function identity(value, message) {
    let result = '';
    let typeValue = typeof value;
    if (typeof value === 'number') { // Is it a number?
        result = value + value; // OK
    }
    else if (typeof value === 'string') { // Is it a string?
        result = value + value; // OK
    }
    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);
    return result;
}
let returnNumber = identity(100, 'Hello!'); // OK
let returnString = identity('100', 'Hola!'); // OK
let returnBoolean = identity(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.
console.log('return number: ', returnNumber);
console.log('return string: ', returnString);
console.log('return boolean: ', returnBoolean);
let numberValue = identity(100, 'Hello');
let stringValue = identity('100', 'Hello');
console.log('number value: ', numberValue); // Returns 200
console.log('string value: ', stringValue); // Returns 100100
function getPets(pet, key) {
    return pet[key];
}
let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };
console.log(getPets(pets1, "fish")); // Returns 6
console.log(getPets(pets2, "3")); // Error

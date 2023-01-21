"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let returnNumber = {
    value: 25,
    message: 'Hello!'
};
let returnString = {
    value: 'Hello!',
    message: 25
};
function processIdentity(value, message) {
    console.log(message);
    return value;
}
let processor = processIdentity;
let returnNumber1 = processor(100, 'Hello!'); // OK
let returnString1 = processor('Hello!', 100); // Type check error

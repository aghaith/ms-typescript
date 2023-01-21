"use strict";
exports.__esModule = true;
var returnNumber = {
    value: 25,
    message: 'Hello!'
};
var returnString = {
    value: 'Hello!',
    message: 25
};
function processIdentity(value, message) {
    console.log(message);
    return value;
}
var processor = processIdentity;
var returnNumber1 = processor(100, 'Hello!'); // OK
var returnString1 = processor('Hello!', 100); // Type check error

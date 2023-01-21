"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let randomValue = 10;
randomValue = true;
randomValue = 'Abbas';
if (typeof randomValue === "string") {
    console.log(randomValue.toUpperCase()); //* Returns ABBAS to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}

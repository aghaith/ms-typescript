"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class processIdentity {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log(this._message);
        return this._value;
    }
}
let processor = new processIdentity(100, 'Hello');
processor.getIdentity(); // Displays 'Hello'

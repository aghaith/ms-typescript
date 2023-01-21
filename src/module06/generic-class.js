"use strict";
exports.__esModule = true;
var processIdentity = /** @class */ (function () {
    function processIdentity(value, message) {
        this._value = value;
        this._message = message;
    }
    processIdentity.prototype.getIdentity = function () {
        console.log(this._message);
        return this._value;
    };
    return processIdentity;
}());
var processor = new processIdentity(100, 'Hello');
processor.getIdentity(); // Displays 'Hello'

var processIdentity = /** @class */ (function () {
    function processIdentity(val, msg) {
        this.value = val;
        this.message = msg;
    }
    processIdentity.prototype.process = function () {
        console.log(this.message);
        return this.value;
    };
    return processIdentity;
}());
var processor = new processIdentity(100, 'Hello');
processor.process(); // Displays 'Hello'
processor.value = '100'; // Type check error

function addNumbers(x, y) {
    if (y === void 0) { y = 25; }
    return x + y;
}
addNumbers(1, 2); // Returns 3
addNumbers(1); // Returns 26
var subtractThreeNumbers = function (x, y, z) {
    if (z === void 0) { z = 100; }
    return x - y - z;
};
console.log(subtractThreeNumbers(10, 20)); // returns -110 because 'z' has been assigned the value 100
console.log(subtractThreeNumbers(10, 20, 15)); // returns -25

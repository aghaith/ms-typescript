function addNumbers(x, y) {
    return x + y;
}
addNumbers(1, 2); // Returns 3
//* addNumbers(1);    // Returns an error
var addThreeNumbers = function (x, y, z) { return x + y + z; };
// addThreeNumbers(10, 20) //* Expected 3 arguments, but got 2
console.log(addThreeNumbers(10, 20, 30, 40)); //* Expected 3 arguments, but got 4

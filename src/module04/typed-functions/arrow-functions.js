// Anonymous function
var addNumbers1 = function (x, y) {
    return x + y;
};
// Arrow function
var addNumbers2 = function (x, y) { return x + y; };
var total2 = function (input) {
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};

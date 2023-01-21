var x; //* Explicitly declares x as a number type
var y = 1; //* Implicitly declares y as a number type
var z; //* Declares z without initializing it
x = 1;
// x = "one";    //* Type 'string' is not assignable to type 'number'
// y = "one"     //* Type 'string' is not assignable to type 'number'
z = "one";
z = 1;

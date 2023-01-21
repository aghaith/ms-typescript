"use strict";
exports.__esModule = true;
var employee = {
    firstName: "Abbas",
    lastName: "Ghaith",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
employee.firstName = 'Ali'; //* Error - Type 'number' is not assignable to type 'string'

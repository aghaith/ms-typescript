"use strict";
//* interface
/*
export interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
let employee = {
    firstName: "Abbas",
    lastName: "Ghaith",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
employee.firstName = 'Ali'; //* Error - Type 'number' is not assignable to type 'string'

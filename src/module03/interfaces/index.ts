//* interface
/*
export interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}
*/

//* type alias
export type Employee = {
    firstName: string;
    lastName: string;
    fullName(): string;
}

let employee: Employee = {
    firstName : "Abbas",
    lastName: "Ghaith",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

employee.firstName = 'Ali';  //* Error - Type 'number' is not assignable to type 'string'

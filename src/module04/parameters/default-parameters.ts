function addNumbers(x: number, y = 25): number {
    return x + y;
}

addNumbers(1, 2);  // Returns 3
addNumbers(1);     // Returns 26

let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;

console.log(subtractThreeNumbers(10, 20));       // returns -110 because 'z' has been assigned the value 100
console.log(subtractThreeNumbers(10, 20, 15));   // returns -25

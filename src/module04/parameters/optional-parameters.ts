function addNumbers(x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns 1

let addThreeNumbers = (x: number, y: number, z?: number): number => {
    if ((z === undefined)) {
        return x + y;
    } else {
        return x + y + z;
    }
};

console.log(addThreeNumbers(10, 20))
console.log(addThreeNumbers(10, 20, 30))

export { }

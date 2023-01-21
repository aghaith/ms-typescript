// declare a generic interface
interface Identity<T, U> {
    value: T;
    message: U;
}

// declare a generic interface as a function type
interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

let returnNumber: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}

let returnString: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}

function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK
let returnString1 = processor('Hello!', 100);   // Type check error

export { }

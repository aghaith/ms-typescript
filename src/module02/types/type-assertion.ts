let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Abbas';

if (typeof randomValue === "string") {
    console.log((randomValue as string).toUpperCase());    //* Returns ABBAS to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}

export {}

var randomValue = 10;
randomValue = 'Abbas'; // OK
randomValue = true; // OK
console.log(randomValue.name); // Logs "undefined" to the console
randomValue(); // Returns "randomValue is not a function" error
randomValue.toUpperCase(); // Returns "randomValue is not a function" error

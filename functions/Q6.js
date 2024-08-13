// Define the curry function
function curry(func) {
    return function curried(...args) {
        // If the number of arguments provided is enough, call the original function
        if (args.length >= func.length) {
            return func(...args);
        } else {
            // Otherwise, return a new function that accepts the rest of the arguments
            return function(...newArgs) {
                return curried(...args, ...newArgs);
            };
        }
    };
}

// Define a simple function that adds two numbers
function add(a, b) {
    return a + b;
}

// Create a curried version of the add function
const curriedAdd = curry(add);

// Test the curried function
console.log(curriedAdd(2)(3));  // Outputs: 5
console.log(curriedAdd(5)(10)); // Outputs: 15

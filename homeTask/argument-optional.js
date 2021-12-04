// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
    for (let i of arguments) {
        var oneNumber = i
        if (typeof i !== "number") {
            return undefined
        }
    }
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } 
    
    else {
        return function sum(num) {
            if (typeof num !== "number") {
                return undefined
            } else {
            return oneNumber + num;
            }
        };
    }
}

addTogether(2)([3]);
addTogether(2, 3);
addTogether(5)(7);
// Write a function that takes a number as argument
// If a is a whole number return true
// Otherwise, return false


function myFunction(a) {
   
    return (a - Math.floor(a)) === 0; //Math.floor() function is a predefine fn in JavaScript that is used to round a given number down to the nearest integer that is less than or equal to the original number.
}
// you can check the function with different values
console.log(myFunction(4));  // Output: true
console.log(myFunction(4.22));  // Output: false
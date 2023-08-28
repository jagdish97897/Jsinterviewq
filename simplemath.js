// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result



//Math.pow(base, exponent)  Math.pow() function is a predefine Js fn that calculates the value of a base raised to the power of an exponent


function myFunction(a, b, c, d, e, f) {
    return Math.pow(((((a + b) - c) * d) / e), f);
}

var result = myFunction(5,3,5,2,3,2);
console.log(result);  // Output: 4
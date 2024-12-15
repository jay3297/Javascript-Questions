// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    }
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 3:", factorial(3));

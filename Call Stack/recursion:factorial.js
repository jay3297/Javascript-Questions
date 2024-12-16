function factorial(n) {
    console.log(`Factorial called  n = ${n}`);
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));


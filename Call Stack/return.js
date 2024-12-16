function calculate(a, b) {
    console.log("Calculatation starts");
    const result = multiply(a, b);
    console.log("Calculatation ends");
    return result;
}

function multiply(x, y) {
    console.log("Multiply starts");
    return x * y;
}

console.log("Result:", calculate(3, 4));

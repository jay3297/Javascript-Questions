//Calculate the GCD of two numbers using the Euclidean algorithm.
let a = 22, b = 98;
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
console.log("GCD:", a);

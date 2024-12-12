//write a program for check prime number 
let num = 22;
let Prime = num > 1;
let i = 2;
while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
        Prime = false;
        break;
    }
    i++;
}
console.log(`${num} is ${Prime ? "a Prime Number" : "not a Prime Number"}`);

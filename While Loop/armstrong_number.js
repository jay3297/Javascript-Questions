// write a program for check armstrong number or not 
let num = 153;
let original = num;
let sum = 0;
while (num > 0) {
    let digit = num % 10;
    sum += digit ** 3;
    num = Math.floor(num / 10);
}
console.log(`${original} is ${original === sum ? "an Armstrong Number" : "not an Armstrong Number"}`);

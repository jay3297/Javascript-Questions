// write a program for check number is palindrome or not.
let num = 56;
let original = num;
let reversed = 0;
while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
}
console.log(`${original} is ${original === reversed ? "a Palindrome" : "not a Palindrome"}`);

//Write a program to reverse the digits of a given number.
let number = 12345;
let reversed = 0;
while (number > 0) {
    reversed = reversed * 10 +(number % 10);
    number = Math.floor(number / 10);
}
console.log("Reversed Number:", reversed);

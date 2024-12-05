//Check if a number is divisible by 3 and 5
let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("The number is divisible by both 3 and 5.");
} else if (num % 3 === 0) {
    console.log("The number is divisible by 3.");
} else if (num % 5 === 0) {
    console.log("The number is divisible by 5.");
} else {
    console.log("The number is not divisible by 3 or 5.");
}

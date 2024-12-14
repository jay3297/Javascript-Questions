let number = 12345;
let reversed = 0;
do {
  reversed = reversed * 10 + (number % 10);
  number = Math.floor(number / 10);
} while (number > 0);
console.log(`Reversed number: ${reversed}`);

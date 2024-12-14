let number = 123456;
let count = 0;
do {
  count++;
  number = Math.floor(number / 10);
} while (number > 0);
console.log(`Number of digits: ${count}`);

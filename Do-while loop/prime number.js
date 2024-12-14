let number = 22;
let Prime = true;
let i = 2;
do {
  if (number % i === 0) {
    Prime = false;
    break;
  }
  i++;
} while (i <= Math.sqrt(number));
console.log(`${number} is ${Prime ? "a prime number" : "not a prime number"}`);

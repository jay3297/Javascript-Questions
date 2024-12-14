let n = 5;
let factorial = 1;
let i = 1;
do {
  factorial *= i;
  i++;
} while (i <= n);
console.log(`Factorial of ${n}: ${factorial}`);

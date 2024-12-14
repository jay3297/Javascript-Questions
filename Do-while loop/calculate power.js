let base = 2, exponent = 3;
let result = 1;
let i = 0;
do {
  result *= base;
  i++;
} while (i < exponent);
console.log(`${base}^${exponent} = ${result}`);

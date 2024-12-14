let n = 7;
let a = 0, b = 1, count = 0;
do {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
  count++;
} while (count < n);

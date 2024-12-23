//Write a function that calculates the sum of numbers passed as an array using the spread operator.
function sum(a, b, c) {
    return a + b + c;
  }
  const nums = [10, 20, 30];
  console.log(sum(...nums));
  
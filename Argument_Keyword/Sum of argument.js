//Write a function that takes any number of arguments and returns their sum.
function sumOfArguments() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
 
  console.log(sumOfArguments(1, 2, 3, 4));
  console.log(sumOfArguments(5, 10, 15)); 
  
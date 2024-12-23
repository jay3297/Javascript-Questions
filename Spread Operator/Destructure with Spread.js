//Write a program to extract the first element of an array and collect the rest using destructuring and the spread operator.
const arr = [1, 2, 3, 4, 5];
const [first, ...rest] = arr;
console.log(first); 
console.log(rest);

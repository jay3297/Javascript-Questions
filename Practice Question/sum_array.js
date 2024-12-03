// write a program for sum of an array 
function sum(arr)
{
    return arr.reduce((a, b) => a+b, 0);
}
const total= [1, 2, 3, 4];
console.log(`Sum of array elements: ${sum(total)}`);   

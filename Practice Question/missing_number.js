//write a program for Missing numbers in a array 
function missing_no(arr, n)
{
    const total = (n*(n+1))/2;
    const sum = arr.reduce((a,b)=>a+b,0);
    return total-sum;
}
const arr = [1, 2, 4, 5];
const n = 5;
console.log(`missing Number: ${missing_no(arr, n)}`); 
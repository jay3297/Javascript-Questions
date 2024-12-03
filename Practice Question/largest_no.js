// write a program for largest number in array.
function Largestno(arr)
 {
    let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++)
         {
        if (arr[i] > largest) 
            {
            largest = arr[i];
            }
        }
     return largest;
}
const numbers = [20,30,98,65,5,78];
const largest = Largestno(numbers);

console.log(`The largest number is: ${largest}`);

// Function to calculate the sum of an array
function Array(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log("Sum of [1, 2, 3, 4]:", Array([1, 2, 3, 4]));
console.log("Sum of [10, 20, 30]:", Array([10, 20, 30]));

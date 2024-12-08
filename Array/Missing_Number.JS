function missing_number(arr, n) {
    const result = n*(n+1)/2;
    const sum = arr.reduce((sum, num) => sum + num, 0);
    return result - sum;
}

let arr = [1, 2, 3, 5];
const missingNumber = missing_number(arr, 5);
console.log(missingNumber);
//Write a function to swap two variables using destructuring.
// Function to swap variables
function swap(a, b) {
    [a, b] = [b, a];
    return [a, b];
}
console.log(swap(5, 10));

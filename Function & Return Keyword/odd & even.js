// Function to check if a number is even or odd
function oddeven(num) {
    if (num % 2 === 0) {
        return "Even"; 
    } else {
        return "Odd";
    }
}
console.log("4 is:",oddeven(4));
console.log("7 is:",oddeven(7));
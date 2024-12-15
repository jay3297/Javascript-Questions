// Function to check if a string is a palindrome
function Palindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(" jay a palindrome?", Palindrome("jay"));
console.log(" kuldeep a palindrome?", Palindrome("kuldeep"));